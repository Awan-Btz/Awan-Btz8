global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/KIpR2hclCVK6ACegAp5aC5']
global.channelYT = ['https://www.youtube.com/channel/UCiQx65e5Q6QtYJ-gJaLK2uw'] 
global.owner = ['62895411143170']// Put your number here
global.mods = ['628816563424', '62895411143170'] // Want some help?
global.partner = ['628816563424', '62895411143170', '0'] // Want some help?
global.prems = ['6282152815584', '6283138035145', '6283150029374', '6283162041656', '6285647706742', '6285712240175', '62895369160666', '6281519668634', '6283177800888', '6288299152155', '6285227606552', '6282348041779', '6285887032204', '62895328619133', '6281257684572', '6285822345956', '6285955091780', '6288215736324', '62895359053690', '6289608511772', '6289652358298', '628816563424', '62895411143170'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIROZTWO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://api.lolhuman.xyz': 'HIRO' 
}

// Sticker WM
global.packname = 'Loyo\nBotZ'
global.author = 'Loyo/nBotZ'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
