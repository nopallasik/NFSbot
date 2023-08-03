const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const { default: NFSBotIncConnect, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, makeInMemoryStore, useMultiFileAuthState, delay, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = ''

//=================================================//
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)

if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

require('./NFS.js')
nocache('../NFS.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function NFSBotIncBot() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
    	const NFSBotInc = NFSBotIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: [`${botname}`,'Safari','3.0'],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "NFS Bot Di Sini"
            }
        }
    })

    store.bind(NFSBotInc.ev)

NFSBotInc.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`File Sesi Buruk, Harap Hapus Sesi dan Pindai Lagi`);
				NFSBotIncBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Koneksi ditutup, menghubungkan kembali....");
				NFSBotIncBot();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Koneksi Hilang dari Server, menghubungkan kembali...");
				NFSBotIncBot();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Koneksi Diganti, Sesi Baru Dibuka, Harap Tutup Sesi Saat Ini Terlebih Dahulu");
				NFSBotIncBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Perangkat Keluar, Harap Pindai Lagi Dan Jalankan.`);
				NFSBotIncBot();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Mengulang kembali Diperlukan, Mengulang kembali...");
				NFSBotIncBot();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Koneksi Habis, Menghubungkan...");
				NFSBotIncBot();
			} else NFSBotInc.end(`Alasan Putus Tidak Diketahui: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Menghubungkan...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Terhubung dengan => ` + JSON.stringify(NFSBotInc.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(color(`< ============================================ >`, 'cyan'))
	        console.log(color(`\n${themeemoji} YT CHANNEL: sentup-gaming8456`,'magenta'))
            console.log(color(`${themeemoji} GITHUB: Blawuken `,'magenta'))
            console.log(color(`${themeemoji} INSTAGRAM: @anggit0817 `,'magenta'))
            console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  NFSBotIncBot();
	}
	
})

await delay(5555) 
start('2',colors.bold.white('\n\nMenunggu Pesan Baru..'))

NFSBotInc.ev.on('creds.update', await saveCreds)

    // Anti Call
    NFSBotInc.ev.on('call', async (NFSPapa) => {
    let botNumber = await NFSBotInc.decodeJid(NFSBotInc.user.id)
    let NFSBotNum = db.settings[botNumber].anticall
    if (!NFSBotNum) return
    console.log(NFSPapa)
    for (let NFSFucks of NFSPapa) {
    if (NFSFucks.isGroup == false) {
    if (NFSFucks.status == "offer") {
    let NFSBlokMsg = await NFSBotInc.sendTextWithMentions(NFSFucks.from, `*${NFSBotInc.user.name}* tidak dapat menerima ${NFSFucks.isVideo ? `video` : `voice` } panggilan. Maaf @${NFSFucks.from.split('@')[0]} Anda akan diblokir. Jika tidak sengaja mohon hubungi pemilik untuk di blokir !`)
    NFSBotInc.sendContact(NFSFucks.from, global.owner, NFSBlokMsg)
    await sleep(8000)
    await NFSBotInc.updateBlockStatus(NFSFucks.from, "block")
    }
    }
    }
    })

NFSBotInc.ev.on('messages.upsert', async chatUpdate => {
try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await NFSBotInc.readMessages([kay.key]) }
if (!NFSBotInc.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
const m = smsg(NFSBotInc, kay, store)
require('./NFS')(NFSBotInc, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		NFSBotInc.ev.on("groups.update", async (json) => {
			try {
ppgroup = await NFSBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nGrup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nGrup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nInfo grup telah dibatasi, Sekarang hanya admin yang dapat mengedit info grup !`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nInfo grup telah dibuka, Sekarang peserta dapat mengedit info grup !`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, { 
					text: `「 Perubahan Setelan Grup 」\n\n*Deskripsi grup telah diubah menjadi*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				NFSBotInc.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\n*Nama grup telah diubah menjadi*\n\n*${res.subject}*`,
				});
			} 
			
		});
		
NFSBotInc.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await NFSBotInc.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await NFSBotInc.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await NFSBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
NFSWlcm = await getBuffer(ppuser)
NFSLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const NFSbuffer = await getBuffer(ppuser)
                let NFSName = num
                const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                NFSbody = `━━━━°⌜꧁༒~𝗡𝗙𝗦~༒꧂⌟°━━━━

╭────┈ ↷
│ ✎....... 𝗛𝗮𝗹𝗼 👋
│@${NFSName.split("@")[0]}
│╭──────────────╯
││🏠 𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗮𝘁𝗮𝗻𝗴 𝗗𝗶
││${metadata.subject}
││
││🗣️ 𝗠𝗲𝗺𝗯𝗲𝗿
││${xmembers}th
││
││⏰ 𝗪𝗮𝗸𝘁𝘂
││${xtime} ${xdate}
│╰────────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿・✦
╰───▸ ❝ ニード・フォー・スピード`
NFSBotInc.sendMessage(anu.id,
 { text: NFSbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": NFSWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const NFSbuffer = await getBuffer(ppuser)
                    const NFStime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	                const NFSdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                	let NFSName = num
                    const NFSmembers = metadata.participants.length
                    NFSbody = `━━━━°⌜꧁༒~𝗡𝗙𝗦~༒꧂⌟°━━━━

╭────┈ ↷
│ ✎ 𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗧𝗶𝗻𝗴𝗴𝗮𝗹 👋
│@${NFSName.split("@")[0]}
│╭──────────────╯
││🏠 𝗞𝗲𝗹𝘂𝗮𝗿 𝗗𝗮𝗿𝗶 
││${metadata.subject}
││
││🗣️ 𝗠𝗲𝗺𝗯𝗲𝗿
││${NFSmembers}th
││
││⏰ 𝗪𝗮𝗸𝘁𝘂
││ ${NFStime} ${NFSdate}
│╰────────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿・✦
╰───▸ ❝ ニード・フォー・スピード`
NFSBotInc.sendMessage(anu.id,
 { text: NFSbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": NFSLft,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const NFSbuffer = await getBuffer(ppuser)
const NFStime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const NFSdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let NFSName = num
NFSbody = ` 𝗦𝗲𝗹𝗮𝗺𝗮𝘁🎉 @${NFSName.split("@")[0]}, Anda telah *dipromosikan* menjadi *admin* 🥳`
   NFSBotInc.sendMessage(anu.id,
 { text: NFSbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": NFSWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const NFSbuffer = await getBuffer(ppuser)
const NFStime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const NFSdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let NFSName = num
NFSbody = `𝗢𝗼𝗽𝘀‼️ @${NFSName.split("@")[0]}, Anda telah *diturunkan* dari *admin* 😬`
NFSBotInc.sendMessage(anu.id,
 { text: NFSbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": NFSLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Cheems Bot Here"
        }
    }
    NFSBotInc.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                NFSBotInc.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

NFSBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => NFSBotInc.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

NFSBotInc.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

NFSBotInc.ev.on('contacts.update', update => {
for (let contact of update) {
let id = NFSBotInc.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

NFSBotInc.getName = (jid, withoutContact  = false) => {
id = NFSBotInc.decodeJid(jid)
withoutContact = NFSBotInc.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = NFSBotInc.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === NFSBotInc.decodeJid(NFSBotInc.user.id) ?
NFSBotInc.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

NFSBotInc.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

NFSBotInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await NFSBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await NFSBotInc.getName(i)}\nFN:${await NFSBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	NFSBotInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

NFSBotInc.setStatus = (status) => {
NFSBotInc.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

NFSBotInc.public = true

NFSBotInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await NFSBotInc.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

NFSBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await NFSBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

NFSBotInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await NFSBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

NFSBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await NFSBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

NFSBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

NFSBotInc.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

NFSBotInc.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

NFSBotInc.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await NFSBotInc.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await NFSBotInc.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

NFSBotInc.sendText = (jid, text, quoted = '', options) => NFSBotInc.sendMessage(jid, { text: text, ...options }, { quoted })

NFSBotInc.serializeM = (m) => smsg(NFSBotInc, m, store)

NFSBotInc.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
NFSBotInc.sendMessage(jid, buttonMessage, { quoted, ...options })
}

NFSBotInc.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: NFSBotInc.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return NFSBotInc.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

NFSBotInc.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
NFSBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
}

NFSBotInc.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
NFSBotInc.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Kirim Media/File dengan Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
NFSBotInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
                let type = await NFSBotInc.getFile(path, true)
                let { res, data: file, filename: pathFile } = type
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
                }
                const fileSize = fs.statSync(pathFile).size / 1024 / 1024
                if (fileSize >= 1800) throw new Error(' Ukuran file terlalu besar\n\n')
                let opt = {}
                if (quoted) opt.quoted = quoted
                if (!type) options.asDocument = true
                let mtype = '', mimetype = options.mimetype || type.mime, convert
                if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
                else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
                else if (/video/.test(type.mime)) mtype = 'video'
                else if (/audio/.test(type.mime)) (
                    convert = await toAudio(file, type.ext),
                    file = convert.data,
                    pathFile = convert.filename,
                    mtype = 'audio',
                    mimetype = options.mimetype || 'audio/ogg; codecs=opus'
                )
                else mtype = 'document'
                if (options.asDocument) mtype = 'document'

                delete options.asSticker
                delete options.asLocation
                delete options.asVideo
                delete options.asDocument
                delete options.asImage

                let message = {
                    ...options,
                    caption,
                    ptt,
                    [mtype]: { url: pathFile },
                    mimetype,
                    fileName: filename || pathFile.split('/').pop()
                }
                /**
                 * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
                 */
                let m
                try {
                    m = await NFSBotInc.sendMessage(jid, message, { ...opt, ...options })
                } catch (e) {
                    console.error(e)
                    m = null
                } finally {
                    if (!m) m = await NFSBotInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
                    file = null // releasing the memory
                    return m
                }
            }

//NFSBotInc.sendFile = async (jid, media, options = {}) => {
        //let file = await NFSBotInc.getFile(media)
        //let mime = file.ext, type
        //if (mime == "mp3") {
          //type = "audio"
          //options.mimetype = "audio/mpeg"
          //options.ptt = options.ptt || false
        //}
        //else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        //else if (mime == "webp") type = "sticker"
        //else if (mime == "mp4") type = "video"
        //else type = "document"
        //return NFSBotInc.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      //}

NFSBotInc.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return NFSBotInc.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return NFSBotInc.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return NFSBotInc.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return NFSBotInc.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return NFSBotInc.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    NFSBotInc.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return NFSBotInc.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return NFSBotInc

}

NFSBotIncBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
