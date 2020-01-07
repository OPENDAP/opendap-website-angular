const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const request = require('request');

const showdown = require('showdown');
const converter = new showdown.Converter();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.route('/api/jira/:issue').get((req, res) => {
    request(`https://opendap.atlassian.net/rest/api/2/issue/${req.params['issue']}`, { json: true }, (err, thisRes) => {
        if (err) throw err;
        res.status(200).send(thisRes);
    });
});

app.route('/api/jira/HK/versions').get((req, res) => {
    request('https://opendap.atlassian.net/rest/api/2/project/HK/versions', { json: true }, (err, thisRes) => {
        if (err) throw err;
        res.status(200).send(thisRes);
    });
});

app.route('/api/jira/HK/versions/:fixVersionID').get((req, res) => {
    let search = `search?jql=project=HK AND fixversion=${req.params['fixVersionID']}`;
    let url = `https://opendap.atlassian.net/rest/api/2/${search}`;

    request(url, { json: true }, (err, thisRes) => {
        if (err) throw err;
        res.status(200).send(thisRes);
    });
});

app.route('/api/content/markdown/:pageID').get((req, res) => {
    fs.readFile(`public/Site/${req.params['pageID']}.md`, 'utf8', (err, data) => {
        if (err) throw err;

        res.status(200).send({
            markdown: data
        })
    });
});

app.route('/api/content/about-us').get((req, res) => {
    let files = fs.readdirSync('public/Site/about-us');
    let toReturn = [];

    for(let thisFile of files) {
        toReturn.push(processMarkdownFile(fs.readFileSync(`public/site/about-us/${thisFile}`, 'utf8')));
    }

    res.status(200).send(toReturn)
});

app.route('/api/content/support').get((req, res) => {
    res.status(200).send({
        topText: processMarkdownFile(fs.readFileSync(`public/site/support/01_support.md`, 'utf8')),
        documentation: {
            userDocumentation: processMarkdownFile(fs.readFileSync(`public/site/support/02_user-docs.md`, 'utf8')),
            designDocumentation: processMarkdownFile(fs.readFileSync(`public/site/support/03_design-docs.md`, 'utf8')),
            papersAndReports: processMarkdownFile(fs.readFileSync(`public/site/support/04_papers-and-reports.md`, 'utf8'))
        },
        software: {
            clientSoftware: processMarkdownFile(fs.readFileSync(`public/site/support/05_available-client-software.md`, 'utf8')),
            serverSoftware: processMarkdownFile(fs.readFileSync(`public/site/support/06_available-server-software.md`, 'utf8')),
            dataHandlers: processMarkdownFile(fs.readFileSync(`public/site/support/07_data-handlers.md`, 'utf8')),
            wishList: processMarkdownFile(fs.readFileSync(`public/site/support/09_software-wish-list.md`, 'utf8'))
        },
        contactInfo: processMarkdownFile(fs.readFileSync(`public/site/support/08_mailing-list.md`, 'utf8'))
    });
});

app.route('/api/content/faq').get((req, res) => {

    let toReturn = [];

    let files = fs.readdirSync('public/Site/support/faq');

    for (const thisDir of files) {
        let thisFAQSection = [];

        for (const thisFAQ of fs.readdirSync(`public/Site/support/faq/${thisDir}`)) {
            let faqSection = fs.readFileSync(`public/Site/support/faq/${thisDir}/${thisFAQ}`, 'utf8');
            thisFAQSection.push(processMarkdownFile(faqSection));
        }

        toReturn.push(thisFAQSection);
    }

    res.status(200).send(toReturn);
});

function processMarkdownFile(md) {
    let split = md.split("\n")[0];
    let title = split.substring(2, split.length - 1);

    return({
        title: title,
        md: converter.makeHtml(md.substring(split.length + 3, md.length))
    });
}

app.route('/api/versions').get((req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

app.route('/api/versions/latest').get((req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;
        getSpecificVersion(files.sort()[files.length - 1], res);
    });
});

app.route('/api/versions/:version').get((req, res) => {
    getSpecificVersion(req.params['version'], res);
});

/**
 * 
 * @param {string} requestedVersion The version that the user requests.
 * @param {Response<any>} res The response that _will_ be sent.
 */
function getSpecificVersion(requestedVersion, res) {
    fs.readdir(`public/Hyrax/${requestedVersion}`, (err, files) => {
        if (err) throw err;

        allVersionFiles = {
            hyraxVersion: requestedVersion,
            versions: [],
            download: null,
            installation: null
        };

        for (let f of files) {
            let thisFile = fs.readFileSync(path.join('public', "Hyrax", requestedVersion, f), 'utf8');

            if (f.includes("download")) {

                let sections = thisFile.split("#SPLIT#");
                sections.shift();

                allVersionFiles.download = sections;
            } else if (f.includes("installation")) {
                allVersionFiles.installation = thisFile;
            } else {
                allVersionFiles.versions.push(JSON.parse(thisFile));
            }
        }

        res.status(200).send(allVersionFiles);
    });
}

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Running.');
})