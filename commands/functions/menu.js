const sofi = require("../../client");
const { MessageMedia } = require('whatsapp-web.js');

async function menu(message) {

    let lowercase = message.body.toLowerCase();

    const media = MessageMedia.fromFilePath('./img/morada.jpg');

    try {
        if (lowercase === '.menu') {
            sofi.sendMessage(message.from, media, { caption: `*🪷Menu🪷* \n\nEste es un menu super facil de usar\n\n🪷---------\n| 🪷Info:🪷\n| 🪷> info\n| 🪷> chats\n| 🪷> groupinfo\n| 🪷> host (mes gratis)\n| 🪷> dev\n| 🪷> everyone\n|\n| 🪷Funciones🪷 \n|--------\n| 🪷> sticker (con imagen)\n| 🪷> yt + enlace\n| 🪷> mp3 + enlace\n| 🪷> randomanime\n| 🪷> glg + busqueda\n| 🪷> neko\n| 🪷> walld\n| 🪷> wallp\n| 🪷> wiki + busqueda\n| 🪷> meme\n🪷---------\n\n*bigmenu* para ver uso de los comandos` })
        }
    } catch (error) {
        console.log('Hay un error en menu.js');
    }

}

module.exports = menu;