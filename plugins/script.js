let handler  = async (m, { conn, usedPrefix: _p }) => {
let event= `
╭─❒ SCRIPT
│◦➛Script  : wa.me/62895411143170
└──────────────────❒`
 buttons = [
{buttonId: `menu`, buttonText: {displayText: 'BACK➡️'}, type: 1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI💰'},type:1},
{buttonId: `owner`, buttonText: {displayText: 'OWNER👤'}, type: 1}
]

  conn.fakeReply(m.chat, event, '0@s.whatsapp.net', '*Loyo Botz*')
}
handler.help = ['sc']
handler.tags = ['hadiah']
handler.command = /^(sc)$/i

handler.fail = null 

module.exports = handler
