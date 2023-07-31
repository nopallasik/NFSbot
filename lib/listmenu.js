const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`┌─────────────┈
│ 『 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.poll 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.setexif 🅞
┆❏.userjid 🅞
┆❏.setbotname 🅞
┆❏.setbotbio 🅞
┆❏.delppbot 🅞
┆❏.shutdown 🅞
┆❏.restart 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
┆❏.pushcontact 🅞
┆❏.pushcontactv2 🅞
╰–––––––––––––––༓

╭––『 Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.invite 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.delppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.totag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.getbio 🅖
┆❏.vote 🅖
┆❏.upvote 🅖
┆❏.downvote 🅖
┆❏.checkvote 🅖
┆❏.delvote 🅖
┆❏.autostickergc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓

╭––『 Download Menu 』
┆❏.ytsearch 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.imdb 🅕
┆❏.weather 🅕
┆❏.wanumber 🅕
┆❏.instaimg 🅕
┆❏.instavid 🅕
┆❏.fbvid 🅕
┆❏.tiktokvideo 🅕
┆❏.tiktokaudio 🅕
┆❏.twittervid 🅕
┆❏.telestick 🅟
┆❏.spotify 🅟
┆❏.gitclone 🅕
┆❏.happymod 🅕
┆❏.gdrive 🅕
┆❏.pinterest 🅕
┆❏.ringtone 🅕
┆❏.xnxxsearch 🅟
┆❏.xnxxdl 🅟
╰–––––––––––––––༓

╭––『 Random Video 』
┆❏.tiktokgirl 🅕
┆❏.tiktoknukthy 🅕
┆❏.tiktokkayes 🅕
┆❏.tiktokpanrika 🅕
┆❏.tiktoknotnot 🅕
┆❏.tiktokghea 🅕
┆❏.tiktoksantuy 🅕
┆❏.tiktokbocil 🅕
╰–––––––––––––––༓

╭––『 Stalker 』
┆❏.igstalk 🅕
┆❏.ffstalk 🅕
┆❏.mlstalk 🅕
┆❏.npmstalk 🅕
┆❏.ghstalk 🅕
╰–––––––––––––––༓

–『 OpenAI 』
┆❏.openai 🅕
┆❏.ai 🅕
┆❏.aimage 🅕
┆❏.remini 🅕
╰–––––––––––––––༓

╭––『 Fun Menu 』
┆❏.define 🅕
┆❏.qc 🅕
┆❏.lyrics 🅕
┆❏.suit 🅕
┆❏.math 🅕
┆❏.tictactoe 🅕
┆❏.fact 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.pick 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅕
┆❏.kill 🅕
┆❏.hug 🅕
┆❏.pat 🅕
┆❏.lick 🅕 
┆❏.kiss 🅕
┆❏.bite 🅕
┆❏.yeet 🅕
┆❏.bully 🅕
┆❏.bonk 🅕
┆❏.wink 🅕
┆❏.poke 🅕
┆❏.nom 🅕
┆❏.slap 🅕
┆❏.smile 🅕 
┆❏.wave 🅕
┆❏.awoo 🅕
┆❏.blush 🅕
┆❏.smug 🅕
┆❏.glomp 🅕 
┆❏.happy 🅕
┆❏.dance 🅕
┆❏.cringe 🅕
┆❏.cuddle 🅕
┆❏.highfive 🅕 
┆❏.shinobu 🅕
┆❏.handhold 🅕
┆❏.spank 🅕
┆❏.tickle 🅕
┆❏.avatar 🅕
┆❏.feed 🅕
┆❏.foxgirl 🅕
┆❏.gecg 🅕
┆❏.checkme 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 Random Photo 』
┆❏.aesthetic 🅕
┆❏.coffee 🅕
┆❏.wikimedia 🅕
┆❏.wallpaper 🅕
┆❏.art 🅕
┆❏.bts 🅕
┆❏.dogwoof 🅕
┆❏.catmeow 🅕
┆❏.lizardpic 🅕
┆❏.goosebird 🅕
┆❏.8ballpool 🅕
┆❏.cosplay 🅕
┆❏.hacker 🅕
┆❏.cyber 🅕
┆❏.gamewallpaper 🅕
┆❏.islamic 🅕
┆❏.jennie 🅕
┆❏.jiso 🅕
┆❏.satanic 🅕
┆❏.justina 🅕
┆❏.cartoon 🅕
┆❏.pentol 🅕
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅕
┆❏.lisa 🅕
┆❏.space 🅕
┆❏.car 🅕
┆❏.technology 🅕
┆❏.bike 🅕
┆❏.shortquote 🅕
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅕
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅕
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓

╭––『 Sticker 』
┆❏.goose 🅕
┆❏.woof 🅕
┆❏.8ball 🅕
┆❏.lizard 🅕
┆❏.meow 🅕
┆❏.gura 🅕
┆❏.doge 🅕
┆❏.patrick 🅕
┆❏.lovestick 🅕
╰–––––––––––––––༓

╭––『 Anime 』
┆❏.akira 🅕
┆❏.akiyama 🅕
┆❏.ana 🅕
┆❏.asuna 🅕
┆❏.ayuzawa 🅕
┆❏.boruto 🅕
┆❏.chiho 🅕
┆❏.chitoge 🅕
┆❏.cosplayloli 🅕
┆❏.cosplaysagiri 🅕
┆❏.deidara 🅕
┆❏.doraemon 🅕
┆❏.elaina 🅕
┆❏.emilia 🅕
┆❏.erza 🅕
┆❏.gremory 🅕
┆❏.hestia 🅕
┆❏.hinata 🅕
┆❏.husbu 🅕
┆❏.inori 🅕
┆❏.isuzu 🅕
┆❏.itachi 🅕
┆❏.itori 🅕
┆❏.kaga 🅕
┆❏.kagura 🅕
┆❏.kakasih 🅕
┆❏.kaori 🅕
┆❏.keneki 🅕
┆❏.kotori 🅕
┆❏.kurumi 🅕
┆❏.loli 🅕
┆❏.madara 🅕
┆❏.megumin 🅕
┆❏.mikasa 🅕
┆❏.mikey 🅕
┆❏.miku 🅕
┆❏.minato 🅕
┆❏.naruto 🅕
┆❏.neko 🅕
┆❏.neko2 🅕
┆❏.nekonime 🅕
┆❏.nezuko 🅕
┆❏.onepiece 🅕
┆❏.pokemon 🅕
┆❏.randomnime 🅕
┆❏.randomnime2 🅕
┆❏.rize 🅕
┆❏.sagiri 🅕
┆❏.sakura 🅕
┆❏.sasuke 🅕
┆❏.shina 🅕
┆❏.shinka 🅕
┆❏.shinomiya 🅕
┆❏.shizuka 🅕
┆❏.shota 🅕
┆❏.tejina 🅕
┆❏.toukachan 🅕
┆❏.tsunade 🅕
┆❏.waifu 🅕
┆❏.animewall 🅕
┆❏.yotsuba 🅕
┆❏.yuki 🅕
┆❏.yulibocil 🅕
┆❏.yumeko 🅕
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
┆❏.animeawoo 🅕
┆❏.animemegumin 🅕
┆❏.animeshinobu 🅕
┆❏.animehandhold 🅕
┆❏.animehighfive 🅕
┆❏.animecringe 🅕
┆❏.animedance 🅕
┆❏.animehappy 🅕
┆❏.animeglomp 🅕
┆❏.animeblush 🅕
┆❏.animesmug 🅕
┆❏.animewave 🅕
┆❏.animesmille 🅕
┆❏.animepoke 🅕
┆❏.animewink 🅕
┆❏.animebonk 🅕
┆❏.animebully 🅕
┆❏.animeyeet 🅕
┆❏.animebite 🅕
┆❏.animelick 🅕
┆❏.animekill 🅕
┆❏.animecry 🅕
┆❏.animewlp 🅕
┆❏.animekiss 🅕
┆❏.animehug 🅕
┆❏.animeneko 🅕
┆❏.animepat 🅕
┆❏.animeslap 🅕
┆❏.animecuddle 🅕
┆❏.animewaifu 🅕
┆❏.animenom 🅕
┆❏.animefoxgirl 🅕
┆❏.animegecg 🅕
┆❏.animetickle 🅕
┆❏.animefeed 🅕
┆❏.animeavatar 🅕
┆❏.genshin 🅕
┆❏.anime 🅕
╰–––––––––––––––༓

╭––『 Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓

╭––『 Textpro Maker 』
┆❏.candy 🅕 
┆❏.christmas 🅕 
┆❏.3dchristmas 🅕 
┆❏.sparklechristmas 🅕
┆❏.deepsea 🅕 
┆❏.scifi 🅕 
┆❏.rainbow 🅕 
┆❏.waterpipe 🅕 
┆❏.spooky 🅕 
┆❏.pencil 🅕 
┆❏.circuit 🅕 
┆❏.discovery 🅕 
┆❏.metalic 🅕 
┆❏.fiction 🅕 
┆❏.demon 🅕 
┆❏.transformer 🅕 
┆❏.berry 🅕 
┆❏.thunder 🅕 
┆❏.magma 🅕 
┆❏.3dstone 🅕 
┆❏.neonlight 🅕 
┆❏.glitch 🅕 
┆❏.harrypotter 🅕 
┆❏.brokenglass 🅕 
┆❏.papercut 🅕 
┆❏.watercolor 🅕 
┆❏.multicolor 🅕 
┆❏.neondevil 🅕 
┆❏.underwater 🅕 
┆❏.graffitibike 🅕
┆❏.snow 🅕 
┆❏.cloud 🅕 
┆❏.honey 🅕 
┆❏.ice 🅕 
┆❏.fruitjuice 🅕 
┆❏.biscuit 🅕 
┆❏.wood 🅕 
┆❏.chocolate 🅕 
┆❏.strawberry 🅕 
┆❏.matrix 🅕 
┆❏.blood 🅕 
┆❏.dropwater 🅕 
┆❏.toxic 🅕 
┆❏.lava 🅕 
┆❏.rock 🅕 
┆❏.bloodglas 🅕 
┆❏.hallowen 🅕 
┆❏.darkgold 🅕 
┆❏.joker 🅕 
┆❏.wicker 🅕
┆❏.firework 🅕 
┆❏.skeleton 🅕 
┆❏.blackpink 🅕 
┆❏.sand 🅕 
┆❏.glue 🅕 
┆❏.1917 🅕 
┆❏.leaves 🅕
┆❏.retro 🅕
┆❏.pornhub 🅕
┆❏.8bit 🅕
┆❏.batman 🅕
┆❏.3dbox 🅕
┆❏.lion 🅕
┆❏.3davengers 🅕
┆❏.window 🅕
┆❏.3dspace 🅕
┆❏.bokeh 🅕
┆❏.holographic 🅕
┆❏.thewall 🅕
┆❏.carbon 🅕
┆❏.whitebear 🅕
┆❏.metallic 🅕
┆❏.steel 🅕
┆❏.fabric 🅕
┆❏.ancient 🅕
┆❏.marvel 🅕
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆❏.shadow 🅕 
┆❏.write 🅕 
┆❏.romantic 🅕 
┆❏.burnpaper 🅕
┆❏.smoke 🅕 
┆❏.narutobanner 🅕 
┆❏.love 🅕 
┆❏.undergrass 🅕
┆❏.doublelove 🅕 
┆❏.coffecup 🅕
┆❏.underwaterocean 🅕
┆❏.smokyneon 🅕
┆❏.starstext 🅕
┆❏.rainboweffect 🅕
┆❏.balloontext 🅕
┆❏.metalliceffect 🅕
┆❏.embroiderytext 🅕
┆❏.flamingtext 🅕
┆❏.stonetext 🅕
┆❏.writeart 🅕
┆❏.summertext 🅕
┆❏.wolfmetaltext 🅕
┆❏.nature3dtext 🅕
┆❏.rosestext 🅕
┆❏.naturetypography 🅕
┆❏.quotesunder 🅕
┆❏.shinetext 🅕
╰–––––––––––––––༓

╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅕
┆❏.writetext 🅕
┆❏.advancedglow 🅕
┆❏.typographytext 🅕
┆❏.pixelglitch 🅕
┆❏.neonglitch 🅕
┆❏.flagtext 🅕
┆❏.flag3dtext 🅕
┆❏.deletingtext 🅕
┆❏.blackpinkstyle 🅕
┆❏.glowingtext 🅕
┆❏.underwatertext 🅕
┆❏.logomaker 🅕
┆❏.cartoonstyle 🅕
┆❏.papercutstyle 🅕
┆❏.watercolortext 🅕
┆❏.effectclouds 🅕
┆❏.blackpinklogo 🅕
┆❏.gradienttext 🅕
┆❏.summerbeach 🅕
┆❏.luxurygold 🅕
┆❏.multicoloredneon 🅕
┆❏.sandsummer 🅕
┆❏.galaxywallpaper 🅕
┆❏.1917style 🅕
┆❏.makingneon 🅕
┆❏.royaltext 🅕
┆❏.freecreate 🅕
┆❏.galaxystyle 🅕
┆❏.lighteffects 🅕
╰–––––––––––––––༓

╭––『 Database 』
┆❏.setcmd 🅕
┆❏.delcmd 🅕
┆❏.listcmd 🅕
┆❏.lockcmd 🅕
╰–––––––––––––––༓

╭––『 Bug & War 』
┆❏.resetotp 🅞
┆❏.xbugp 🅞
┆❏.xbugr 🅞
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.myip 🅕
┆❏.reportbug 🅕
┆❏.listprem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅞
┆❏.rentbotlist 🅕
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅟
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.akira 🅕
┆❏.akiyama 🅕
┆❏.ana ??
┆❏.asuna 🅕
┆❏.ayuzawa 🅕
┆❏.boruto 🅕
┆❏.chiho 🅕
┆❏.chitoge 🅕
┆❏.cosplayloli 🅕
┆❏.cosplaysagiri 🅕
┆❏.deidara 🅕
┆❏.doraemon 🅕
┆❏.elaina 🅕
┆❏.emilia 🅕
┆❏.erza 🅕
┆❏.gremory 🅕
┆❏.hestia 🅕
┆❏.hinata 🅕
┆❏.husbu 🅕
┆❏.inori 🅕
┆❏.isuzu 🅕
┆❏.itachi 🅕
┆❏.itori 🅕
┆❏.kaga 🅕
┆❏.kagura 🅕
┆❏.kakasih 🅕
┆❏.kaori 🅕
┆❏.keneki 🅕
┆❏.kotori 🅕
┆❏.kurumi 🅕
┆❏.loli 🅕
┆❏.madara 🅕
┆❏.megumin 🅕
┆❏.mikasa 🅕
┆❏.mikey 🅕
┆❏.miku 🅕
┆❏.minato 🅕
┆❏.naruto 🅕
┆❏.neko 🅕
┆❏.neko2 🅕
┆❏.nekonime 🅕
┆❏.nezuko 🅕
┆❏.onepiece 🅕
┆❏.pokemon 🅕
┆❏.randomnime 🅕
┆❏.randomnime2 🅕
┆❏.rize 🅕
┆❏.sagiri 🅕
┆❏.sakura 🅕
┆❏.sasuke 🅕
┆❏.shina 🅕
┆❏.shinka 🅕
┆❏.shinomiya 🅕
┆❏.shizuka 🅕
┆❏.shota 🅕
┆❏.tejina 🅕
┆❏.toukachan 🅕
┆❏.tsunade 🅕
┆❏.waifu 🅕
┆❏.animewall 🅕
┆❏.yotsuba 🅕
┆❏.yuki 🅕
┆❏.yulibocil 🅕
┆❏.yumeko 🅕
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
┆❏.animeawoo 🅕
┆❏.animemegumin 🅕
┆❏.animeshinobu 🅕
┆❏.animehandhold 🅕
┆❏.animehighfive 🅕
┆❏.animecringe 🅕
┆❏.animedance 🅕
┆❏.animehappy 🅕
┆❏.animeglomp 🅕
┆❏.animeblush 🅕
┆❏.animesmug 🅕
┆❏.animewave 🅕
┆❏.animesmille 🅕
┆❏.animepoke 🅕
┆❏.animewink 🅕
┆❏.animebonk 🅕
┆❏.animebully 🅕
┆❏.animeyeet 🅕
┆❏.animebite 🅕
┆❏.animelick 🅕
┆❏.animekill 🅕
┆❏.animecry 🅕
┆❏.animewlp 🅕
┆❏.animekiss 🅕
┆❏.animehug 🅕
┆❏.animeneko 🅕
┆❏.animepat 🅕
┆❏.animeslap 🅕
┆❏.animecuddle 🅕
┆❏.animewaifu 🅕
┆❏.animenom 🅕
┆❏.animefoxgirl 🅕
┆❏.animegecg 🅕
┆❏.animetickle 🅕
┆❏.animefeed 🅕
┆❏.animeavatar 🅕
┆❏.genshin 🅕
┆❏.anime 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.poll 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.userjid 🅞
┆❏.setexif 🅞
┆❏.setbotname 🅞
┆❏.setbotbio 🅞
┆❏.delppbot 🅞
┆❏.shutdown 🅞
┆❏.restart 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
┆❏.pushcontact 🅞
┆❏.pushcontactv2 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.myip 🅕
┆❏.reportbug 🅕
┆❏.listprem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅞
┆❏.rentbotlist 🅕
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅟
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.ytsearch 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.imdb 🅕
┆❏.weather 🅕
┆❏.wanumber 🅕
┆❏.instaimg 🅕
┆❏.instavid 🅕
┆❏.fbvid 🅕
┆❏.tiktokaudio 🅕
┆❏.tiktokvideo 🅕
┆❏.twittervid 🅕
┆❏.telestick 🅟
┆❏.spotify 🅟
┆❏.gitclone 🅕
┆❏.happymod 🅕
┆❏.gdrive 🅕
┆❏.pinterest 🅕
┆❏.ringtone 🅕
┆❏.xnxxsearch 🅟
┆❏.xnxxdl 🅟
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.invite 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.delppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.totag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.getbio 🅖
┆❏.vote 🅖
┆❏.upvote 🅖
┆❏.downvote 🅖
┆❏.checkvote 🅖
┆❏.delvote 🅖
┆❏.autostickergc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.define 🅕
┆❏.qc 🅕
┆❏.lyrics 🅕
┆❏.tictactoe 🅕
┆❏.suit 🅕
┆❏.math 🅕
┆❏.fact 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.pick 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅕
┆❏.kill 🅕
┆❏.hug 🅕
┆❏.pat 🅕
┆❏.lick 🅕 
┆❏.kiss 🅕
┆❏.bite 🅕
┆❏.yeet 🅕
┆❏.bully 🅕
┆❏.bonk 🅕
┆❏.wink 🅕
┆❏.poke 🅕
┆❏.nom 🅕
┆❏.slap 🅕
┆❏.smile 🅕 
┆❏.wave 🅕
┆❏.awoo 🅕
┆❏.blush 🅕
┆❏.smug 🅕
┆❏.glomp 🅕 
┆❏.happy 🅕
┆❏.dance 🅕
┆❏.cringe 🅕
┆❏.cuddle 🅕
┆❏.highfive 🅕 
┆❏.shinobu 🅕
┆❏.handhold 🅕
┆❏.spank 🅕
┆❏.tickle 🅕
┆❏.avatar 🅕
┆❏.feed 🅕
┆❏.foxgirl 🅕
┆❏.gecg 🅕
┆❏.checkme 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.igstalk 🅕
┆❏.ffstalk 🅕
┆❏.mlstalk 🅕
┆❏.npmstalk 🅕
┆❏.ghstalk 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.goose 🅕
┆❏.woof 🅕
┆❏.8ball 🅕
┆❏.lizard 🅕
┆❏.meow 🅕
┆❏.gura 🅕
┆❏.doge 🅕
┆❏.patrick 🅕
┆❏.lovestick 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.setcmd 🅕
┆❏.delcmd 🅕
┆❏.listcmd 🅕
┆❏.lockcmd 🅕
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗔𝗜 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.openai 🅕
┆❏.ai 🅕
┆❏.aimage 🅕
┆❏.remini 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.resetotp 🅞
┆❏.xbugp 🅞
┆❏.xbugr 🅞
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗥𝗔𝗡𝗗𝗢𝗠 𝗙𝗢𝗧𝗢 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.aesthetic 🅕
┆❏.coffee 🅕
┆❏.wikimedia 🅕
┆❏.wallpaper 🅕
┆❏.art 🅕
┆❏.bts 🅕
┆❏.dogwoof 🅕
┆❏.catmeow 🅕
┆❏.lizardpic 🅕
┆❏.goosebird 🅕
┆❏.8ballpool 🅕
┆❏.cosplay 🅕
┆❏.hacker 🅕
┆❏.cyber 🅕
┆❏.gamewallpaper 🅕
┆❏.islamic 🅕
┆❏.jennie 🅕
┆❏.jiso 🅕
┆❏.satanic 🅕
┆❏.justina 🅕
┆❏.cartoon 🅕
┆❏.pentol 🅕
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅕
┆❏.lisa 🅕
┆❏.space 🅕
┆❏.car 🅕
┆❏.technology 🅕
┆❏.bike 🅕
┆❏.shortquote 🅕
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅕
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅕
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗥𝗔𝗡𝗗𝗢𝗠 𝗩𝗜𝗗𝗘𝗢 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.tiktokgirl 🅕
┆❏.tiktoknukthy 🅕
┆❏.tiktokkayes 🅕
┆❏.tiktokpanrika 🅕
┆❏.tiktoknotnot 🅕
┆❏.tiktokghea 🅕
┆❏.tiktoksantuy 🅕
┆❏.tiktokbocil 🅕
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗧𝗲𝘅𝘁𝗣𝗿𝗼 𝗠𝗮𝗸𝗲𝗿 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.candy 🅕 
┆❏.christmas 🅕 
┆❏.3dchristmas 🅕 
┆❏.sparklechristmas 🅕
┆❏.deepsea 🅕 
┆❏.scifi 🅕 
┆❏.rainbow 🅕 
┆❏.waterpipe 🅕 
┆❏.spooky 🅕 
┆❏.pencil 🅕 
┆❏.circuit 🅕 
┆❏.discovery 🅕 
┆❏.metalic 🅕 
┆❏.fiction 🅕 
┆❏.demon 🅕 
┆❏.transformer 🅕 
┆❏.berry 🅕 
┆❏.thunder 🅕 
┆❏.magma 🅕 
┆❏.3dstone 🅕 
┆❏.neonlight 🅕 
┆❏.glitch 🅕 
┆❏.harrypotter 🅕 
┆❏.brokenglass 🅕 
┆❏.papercut 🅕 
┆❏.watercolor 🅕 
┆❏.multicolor 🅕 
┆❏.neondevil 🅕 
┆❏.underwater 🅕 
┆❏.graffitibike 🅕
┆❏.snow 🅕 
┆❏.cloud 🅕 
┆❏.honey 🅕 
┆❏.ice 🅕 
┆❏.fruitjuice 🅕 
┆❏.biscuit 🅕 
┆❏.wood 🅕 
┆❏.chocolate 🅕 
┆❏.strawberry 🅕 
┆❏.matrix 🅕 
┆❏.blood 🅕 
┆❏.dropwater 🅕 
┆❏.toxic 🅕 
┆❏.lava 🅕 
┆❏.rock 🅕 
┆❏.bloodglas 🅕 
┆❏.hallowen 🅕 
┆❏.darkgold 🅕 
┆❏.joker 🅕 
┆❏.wicker 🅕
┆❏.firework 🅕 
┆❏.skeleton 🅕 
┆❏.blackpink 🅕 
┆❏.sand 🅕 
┆❏.glue 🅕 
┆❏.1917 🅕 
┆❏.leaves 🅕
┆❏.retro 🅕
┆❏.pornhub 🅕
┆❏.8bit 🅕
┆❏.batman 🅕
┆❏.3dbox 🅕
┆❏.lion 🅕
┆❏.3davengers 🅕
┆❏.window 🅕
┆❏.3dspace 🅕
┆❏.bokeh 🅕
┆❏.holographic 🅕
┆❏.thewall 🅕
┆❏.carbon 🅕
┆❏.whitebear 🅕
┆❏.metallic 🅕
┆❏.steel 🅕
┆❏.fabric 🅕
┆❏.ancient 🅕
┆❏.marvel 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗣𝗵𝗼𝘁𝗼𝗢𝘅𝘆 𝗠𝗮𝗸𝗲𝗿 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.shadow 🅕 
┆❏.write 🅕 
┆❏.romantic 🅕 
┆❏.burnpaper 🅕
┆❏.smoke 🅕 
┆❏.narutobanner 🅕 
┆❏.love 🅕 
┆❏.undergrass 🅕
┆❏.doublelove 🅕 
┆❏.coffecup 🅕
┆❏.underwaterocean 🅕
┆❏.smokyneon 🅕
┆❏.starstext 🅕
┆❏.rainboweffect 🅕
┆❏.balloontext 🅕
┆❏.metalliceffect 🅕
┆❏.embroiderytext 🅕
┆❏.flamingtext 🅕
┆❏.stonetext 🅕
┆❏.writeart 🅕
┆❏.summertext ??
┆❏.wolfmetaltext 🅕
┆❏.nature3dtext 🅕
┆❏.rosestext 🅕
┆❏.naturetypography 🅕
┆❏.quotesunder 🅕
┆❏.shinetext 🅕
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `┌─────────────┈
│ 『 𝗘𝗽𝗵𝗼𝘁𝗼360 𝗠𝗮𝗸𝗲𝗿 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.glitchtext 🅕
┆❏.writetext 🅕
┆❏.advancedglow 🅕
┆❏.typographytext 🅕
┆❏.pixelglitch 🅕
┆❏.neonglitch 🅕
┆❏.flagtext 🅕
┆❏.flag3dtext 🅕
┆❏.deletingtext 🅕
┆❏.blackpinkstyle 🅕
┆❏.glowingtext 🅕
┆❏.underwatertext 🅕
┆❏.logomaker 🅕
┆❏.cartoonstyle 🅕
┆❏.papercutstyle 🅕
┆❏.watercolortext 🅕
┆❏.effectclouds 🅕
┆❏.blackpinklogo 🅕
┆❏.gradienttext 🅕
┆❏.summerbeach 🅕
┆❏.luxurygold 🅕
┆❏.multicoloredneon 🅕
┆❏.sandsummer 🅕
┆❏.galaxywallpaper 🅕
┆❏.1917style 🅕
┆❏.makingneon 🅕
┆❏.royaltext 🅕
┆❏.freecreate 🅕
┆❏.galaxystyle 🅕
┆❏.lighteffects 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `┌─────────────┈
│ 『 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🔞 』
┌─────────────┈
│🅞 = For Owner
│🅖 = For Group
│🅕 = For Free User
│🅟 = For Premium User
│
└─────────────┈
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
