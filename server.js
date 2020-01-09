const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const request = require('request');
const showdown = require('showdown');

const app = express();
const port = process.env.PORT || 3001;

const converter = new showdown.Converter();

app.use(cors());

 //-------------------- JIRA --------------------//

 /**
  * Returns a Jira issue from OPeNDAP's Jira server.
  */
app.route('/api/jira/:issue').get((req, res) => {
    request(`https://opendap.atlassian.net/rest/api/2/issue/${req.params['issue']}`, { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

/**
 * Returns the HK versions from OPeNDAP's Jira server.
 */
app.route('/api/jira/HK/versions').get((req, res) => {
    request('https://opendap.atlassian.net/rest/api/2/project/HK/versions', { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

/**
 * Returns all of the issues in a specific fix version
 * from OPeNDAP's Jira server.
 */
app.route('/api/jira/HK/versions/:fixVersionID').get((req, res) => {
    let search = `search?jql=project=HK AND fixversion=${req.params['fixVersionID']}`;
    let url = `https://opendap.atlassian.net/rest/api/2/${search}`;

    request(url, { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

//-------------------- CONTENT --------------------//

app.route('/api/content/software').get((req, res) => {
    let files = fs.readdirSync('public/Site/software');
    let toReturn = [];

    for (let thisFile of files) {
        toReturn.push(processMarkdownFile(fs.readFileSync(`public/site/software/${thisFile}`, 'utf8')));
    }

    res.status(200).send(toReturn)
});

/**
 * Returns and parses the markdown files in the about-us folder.
 */
app.route('/api/content/about-us').get((req, res) => {
    let files = fs.readdirSync('public/Site/about-us');
    let toReturn = [];
    let id = 0;

    for (let thisFile of files) {
        toReturn.push(processMarkdownFile(fs.readFileSync(`public/site/about-us/${thisFile}`, 'utf8'), id++));
    }

    res.status(200).send(toReturn)
});

/**
 * Returns and parses the files in the support folder.
 */
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

/**
 * Returns and parses the files in the FAQ folder.
 */
app.route('/api/content/faq').get((req, res) => {
    let files = fs.readdirSync('public/Site/support/faq');
    let toReturn = [];

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

app.route('/api/content/faq/:articleTitle').get((req, res) => {
    let fileName = `${req.params['articleTitle']}.md`;

    let files = fs.readdirSync('public/Site/support/faq');

    for (const thisDir of files) {
        
        let faqSection = fs.readdirSync(`public/Site/support/faq/${thisDir}`);

        if(faqSection.includes(fileName)) {
            let file = fs.readFileSync(`public/Site/support/faq/${thisDir}/${fileName}`, 'utf8');
            res.status(200).send(processMarkdownFile(file));
        }
    }

    res.status(404).send("Not found");
});

/**
 * Processes a markdown file by splitting the title out of the document
 * and converting the body to HTML with showdown.
 * @param {string} md The markdown file to be processed.
 */
function processMarkdownFile(md, id = 0) {
    let split = md.split("\n")[0];
    let title = split.substring(2, split.length - 1);
    let mds = md.substring(split.length + 3, md.length);
    let tags = md.split("##TAGS##");

    if(tags.length == 2) {
        mds = tags[0].substring(split.length + 3, md.length);;
        tags = tags[1].substr(2, tags[1].length).split(",");
    } else {
        tags = [];
    }

    return ({
        title: title,
        md: converter.makeHtml(mds),
        id: title.replace(/ /g, "-").toLowerCase(),
        tags: tags
    });
}

 //-------------------- VERSIONS --------------------//

 /**
  * Returns all the versions of Hyrax that are currently on the server.
  */
app.route('/api/versions').get((req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

/**
 * Returns the latest version of Hyrax that is currently on the server.
 */
app.route('/api/versions/latest').get((req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;
        getSpecificVersion(files.sort()[files.length - 1], res);
    });
});

/**
 * Returns a specific version of Hyrax from the server.
 */
app.route('/api/versions/:version').get((req, res) => {
    getSpecificVersion(req.params['version'], res);
});

/**
 * Returns a specific version of Hyrax data from the server.
 * @param {string} requestedVersion The version that the api will serve.
 * @param {response} res The response that will serve the data.
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

//-------------------- SECURITY --------------------//

app.route('/api/security/publicKey').get((req, res) => {
    let keyFile = fs.readFileSync('public/Security/security_at_opendap.org.pub.asc', 'utf8');
    res.status(200).send(keyFile);
});


//-------------------- SERVER --------------------//

http.createServer(app).listen(port, () => console.log('Running.'));