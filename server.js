const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const request = require('request');

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
    fs.readFile(path.join(`public/Site/${req.params['pageID']}.md`), 'utf8', (err, data) => {
        if (err) throw err;

        res.status(200).send({
            markdown: data
        })
    });
});

app.route('/api/content/faq').get((req, res) => {

    let toReturn = [];

    let files = fs.readdirSync('public/Site/support/faq');

    for (const thisDir of files) {
        let thisFAQSection = [];

        for(const thisFAQ of fs.readdirSync(`public/Site/support/faq/${thisDir}`)) {
            let faqSection = fs.readFileSync(`public/Site/support/faq/${thisDir}/${thisFAQ}`, 'utf8');
            
            let split = faqSection.split("\n")[0];
            let title = split.substring(2, split.length-1);

            thisFAQSection.push({
                title: title,
                md: faqSection.substring(split.length+3, faqSection.length)
            });
        }

        toReturn.push(thisFAQSection);
    }

    res.status(200).send(toReturn);
});

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