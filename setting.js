const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'cgoazXRISv' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6285936162097'] 
global.ownernomer = "6285936162097"
global.socialmedia = "IG: har_is4215/"
global.yutub = "YT: haris_m"
global.lokasi = "Indonesia, Jawatimur, Lumajang"
global.sakuraurl = 'https://lenttobs.xyz'
global.packgename = "by" 
global.author = "haris" 
global.title = 'SakuraMD'
global.body = 'Subscribe haris_m'
global.welcome = true //false mati true nyala
global.left = true //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})