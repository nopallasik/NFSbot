var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"B",
"Bo",
"Bot ",
"Bot b",
"Bot by",
"Bot by A",
"Bot by An",
"Bot by AnG",
"Bot by AnGg",
"Bot by AnGgI",
"Bot by AnGgIt",
"Bot by AnGgI",
"Bot by AnG",
"Bot by An",
"Bot by A",
"Bot by ",
"Bot b",
"Bot ",
"Bo",
"B",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}