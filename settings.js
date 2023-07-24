const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6281779122444'] //ur owner number
global.ownernomer = "6281779122444" //ur owner number2
global.ownername = "𝗔𝗻𝗚𝗴𝗜𝘁" //ur owner name
global.ytname = "YT: sentup-gaming8456" //ur yt chanel name
global.socialm = "GitHub: Blawuken" //ur github or insta name
global.location = "Bangsal, Mojokerto, Jawa Timur, Indonesia" //ur location

//new
global.botname = "NFS-Bot"
global.ownernumber = '6281779122444'
global.ownername = '𝗔𝗻𝗚𝗴𝗜𝘁'
global.ownerNumber = ["6281779122444@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@sentup-gaming8456"
global.websitex = "https://www.facebook.com/AnGgIt.jambol?mibextid=ZbWKwL"
global.wagc = "https://chat.whatsapp.com/GmiVR3wE5iGBJoxIf4H6at"
global.themeemoji = '🪀'
global.wm = "NFS Bot Inc."
global.botscript = 'https://github.com/Blawuken/CheemsBot-MD8' //script link
global.packname = "𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗕𝘆"
global.author = "𝗔𝗻𝗚𝗴𝗜𝘁"
global.creator = "6281779122444@s.whatsapp.net"
global.prefa = ['!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./NFSMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./NFSMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./NFSMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./NFSMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Ini dia!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
