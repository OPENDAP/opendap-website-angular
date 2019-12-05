const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname + '/dist/opendap-angular'));

const router = express.Router();

router.get('/', (req, res) => res.sendFile({
    "Server working": "Hello world"
}));

router.get('/api/versions', (req, res) => {
    fs.readdir('public', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

router.get('/api/versions/latest', (req, res) => {
    fs.readdir('public', (err, files) => {
        if (err) throw err;

        let requestedVersion = files.sort()[files.length - 1];

        fs.readdir(`public/${requestedVersion}`, (err, files) => {
            if (err) throw err;

            allVersionFiles = {
                versions: [],
                download: null,
                installation: null
            };

            for (let f of files) {
                let thisFile = fs.readFileSync(path.join('public', requestedVersion, f), 'utf8');

                if (f.includes("download")) {
                    allVersionFiles.download = JSON.parse(thisFile);
                } else if (f.includes("installation")) {
                    allVersionFiles.installation = thisFile;
                } else {
                    allVersionFiles.versions.push(JSON.parse(thisFile));
                }
            }

            res.status(200).send(allVersionFiles);
        });
    });
});

router.get('/api/versions/:version', (req, res) => {
    const requestedVersion = req.params['version'];

    fs.readdir(`public/${requestedVersion}`, (err, files) => {
        if (err) throw err;

        allVersionFiles = {
            versions: [],
            download: null,
            installation: null
        };

        for (let f of files) {
            let thisFile = fs.readFileSync(path.join('public', requestedVersion, f), 'utf8');

            if (f.includes("download")) {
                allVersionFiles.download = JSON.parse(thisFile);
            } else if (f.includes("installation")) {
                allVersionFiles.installation = thisFile;
            } else {
                allVersionFiles.versions.push(JSON.parse(thisFile));
            }
        }

        res.status(200).send(allVersionFiles);
    });
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);