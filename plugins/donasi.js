let handler = async m => m.reply(`
            .✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.

╔╦══• •✠•❀https://telegra.ph/file/74097fc68513a5a3db4e9.jpg❀•✠• •══╦╗
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler