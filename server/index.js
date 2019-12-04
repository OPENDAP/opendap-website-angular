const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.route('/').get((req, res) => {
    res.sendFile(path.resolve('../dist/opendap-angular/index.html'));
});

app.route('/api/versions').get((req, res) => {
    fs.readdir('public', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

app.route('/api/versions/:version').get((req, res) => {
    const requestedVersion = req.params['version'];

    fs.readdir(`public/${requestedVersion}`, (err, files) => {
        if (err) throw err;

        allVersionFiles = {
            versions: [],
            boilerplate: null
        };

        for (let f of files) {
            let thisFile = fs.readFileSync(path.join('public', requestedVersion, f), 'utf8');

            thisFile = JSON.parse(thisFile);
            if (f.includes("boilerplate")) {
                allVersionFiles.boilerplate = thisFile;
            } else {
                allVersionFiles.versions.push(thisFile);
            }
        }

        res.status(200).send(allVersionFiles);
    });
})

app.use(bodyParser.json());
app.listen(8000, () => {
    console.log('Server started!');
});