const { scriptFilePath, hDOMSnapshotFilePath } = require("../filePaths");
const fs = require("fs");

exports.getScript = (req, res) => {
  fs.readFile(scriptFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Error reading the file");
      return;
    }

    res.setHeader("Content-Type", "application/javascript");
    res.send(data);
  });
};

exports.createHDomSnapshot = (req, res) => {
  const { dom } = req.body;
  if (!dom) {
    return res.status(400).send("No DOM data received");
  }

  fs.writeFile(hDOMSnapshotFilePath, JSON.stringify({ dom }), (err) => {
    if (err) {
      console.error("Error writing hDOMSnapshot.json file:", err);
      return res.status(500).send("Error saving DOM data");
    }
  });

  res.status(200).send("hDOMSnapshot data received and saved");
};
