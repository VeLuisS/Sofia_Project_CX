const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function cum(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'cum') {

            const imgmore = await akaneko.nsfw.cum();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> cum` });
            } catch (error) {
                cx.warn('❌ debe ser el link de cum');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en cum.js');
    }
};

module.exports = cum;