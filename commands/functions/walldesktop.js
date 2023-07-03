const akaneko = require('akaneko');
const { MessageMedia } = require('whatsapp-web.js');
const sofi = require('../../client');
const cx = require("consola");

async function walld(message) {
    try {
        let lowercase = message.body.toLowerCase();

        if (lowercase === 'walld') {

            const imgmore = await akaneko.wallpapers();
            
            try {
                const media = await MessageMedia.fromUrl(imgmore);

                sofi.sendMessage(message.from, media, { caption: `🫥> fondo para escritorio` });
            } catch (error) {
                cx.warn('❌ debe ser el link de walld')
                message.react('✖️');
            }
        }
        
    } catch (error) {
        cx.error('hubo un error en walld.js');
    }
};

module.exports = walld;