const termkit = require('terminal-kit');
const term = termkit.terminal;
const path = require('path');
const file = path.join(__dirname, 'logo.png');
const fileSmall = path.join(__dirname, 'logo-small.png');
const fs = require('fs');



// (async () => {
//     const terminalImage = require('terminal-image');
//     // const image = fs.readFileSync(fileSmall);
//     console.log(await terminalImage.file(fileSmall));
// })();

// term.drawImage(fileSmall, {
//     shrink: { width: term.width, height: term.height }
// });

const consolePng = require('console-png');
consolePng.attachTo(console);
const image = fs.readFileSync(fileSmall);
console.png(image);