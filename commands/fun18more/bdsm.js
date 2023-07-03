const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function bdsm(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'bdsm') {

            const imgmore = await akaneko.nsfw.bdsm();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> bdsm` });
            } catch (error) {
                cx.warn('❌ debe ser el link de bdsm');
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en bdsm.js');
    }
};

module.exports = bdsm;