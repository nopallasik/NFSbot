const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


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
global.botname = "ɴғs-ʙᴏᴛ"
global.storename ="𝗪𝗮𝗿𝗼𝗻𝗴 𝗬𝘂𝗸 𝗞𝗮𝗿𝗼𝗽𝗮𝗵"
global.ownernumber = '6281779122444'
global.ownername = 'ᴀɴɢɢɪᴛ'
global.ownerNumber = ["6281779122444@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@sentup-gaming8456"
global.websitex = "https://www.facebook.com/AnGgIt.jambol?mibextid=ZbWKwL"
global.wagc = "https://chat.whatsapp.com/GmiVR3wE5iGBJoxIf4H6at"
global.themeemoji = '🪀'
global.wm = "ɴғs ʙᴏᴛ ɪɴᴄ."
global.botscript = 'https://github.com/Blawuken/NFSbot' //script link
global.packname = "sᴛɪᴄᴋᴇʀ ʙʏ"
global.author = "ᴀɴɢɢɪᴛ"
global.creator = "6281779122444@s.whatsapp.net"
global.prefa = ['!','.','#','&']
global.sessionName = 'session'
global.hostname = 'anggit86'
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
    success: 'ɴɪʜ... 😉', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
