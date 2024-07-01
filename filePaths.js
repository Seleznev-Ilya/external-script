const path = require("path");

const scriptFilePath = path.join(__dirname, "script.js");
const hDOMSnapshotFilePath = path.join(__dirname, "hDOMSnapshot.json");

module.exports = {
    hDOMSnapshotFilePath,
    scriptFilePath
};