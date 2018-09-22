const fs = require("fs");

// Shows how to add local global styles hosted locally
// The original page uses <link rel="stylesheet" href="/styles.css" />,
// but we inline it here
const style = document.createElement("style");
style.type = "text/css";
style.textContent = fs.readFileSync("./public/styles.css");
document.head.appendChild(style);
