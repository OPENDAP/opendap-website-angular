const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(__dirname + '/src'));//'/dist/opendap-angular'));

app.route('/').get((req, res) => res.sendFile(path.join(__dirname)));

app.route('/api/versions').get((req, res) => {
    fs.readdir('public', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

app.route('/api/versions/latest').get((req, res) => {
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

app.route('/api/versions/:version').get((req, res) => {
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

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Running.');
})