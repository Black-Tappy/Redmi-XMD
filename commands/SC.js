'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  king
} = require('../france/king');
king({
  'nomCom': 'fmd',
  'reaction': '😌'
}, async (_0x2235f7, _0x1fb06f, _0x45311c) => {
  try {
    const _0xfcf20b = await fetch("https://api.github.com/repos/Black-Tappy/Redmi-XMD");
    const _0x20e60b = await _0xfcf20b.json();
    if (_0x20e60b) {
      const _0x266ddd = {
        'stars': _0x20e60b.stargazers_count,
        'forks': _0x20e60b.forks_count
      };
      const _0x4c2b90 = _0x266ddd.forks * 0x2 + _0x266ddd.stars * 0x2;
      const _0x3cd0a8 = "\n*A total of " + _0x4c2b90 + " people are using REDMI-XMD.*\n\n*" + _0x266ddd.stars + " People have starred it as a sign of Loving it.*\n\n*KEEP USING REDMI-XMD*\n\n*Made With* 🤍";
      await _0x1fb06f.sendMessage(_0x2235f7, {
        'video': {
          'url': "https://telegra.ph/file/0820836f81fe0eb66850d.mp4"
        },
        'caption': _0x3cd0a8
      }, {
        'contextInfo': {
          'mentionedJid': [],
          'externalAdReply': {
            'title': "THE REDMI-XMD MULTI DEVICE",
            'body': "POWERED BY REDMI-XMD",
            'thumbnailUrl': "https://telegra.ph/file/4143dfac775bff078cc5a.jpg",
            'sourceUrl': 'https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P',
            'mediaType': 0x1,
            'renderLargerThumbnail': true
          }
        }
      });
      await _0x1fb06f.sendMessage(_0x2235f7, "*You can play that video and enjoy 🤍🗿*");
    } else {
      console.log("Could not fetch data");
    }
  } catch (_0x56f121) {
    console.error("Error fetching data:", _0x56f121);
  }
});