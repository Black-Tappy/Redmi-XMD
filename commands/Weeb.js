const axios = require("axios");
const {
  king
} = require("../france/king");
const {
  writeFile
} = require('fs/promises');
king({
  'nomCom': "waifu",
  'categorie': 'Weeb',
  'reaction': '😏'
}, async (_0x10b1a1, _0x4a2021, _0xd8e7c1) => {
  const {
    repondre: _0xe1b588,
    ms: _0x5fbdd
  } = _0xd8e7c1;
  try {
    for (let _0x480846 = 0x0; _0x480846 < 0x5; _0x480846++) {
      const _0x37416b = await axios.get("https://api.waifu.pics/sfw/waifu");
      const _0x129a62 = _0x37416b.data.url;
      _0x4a2021.sendMessage(_0x10b1a1, {
        'image': {
          'url': _0x129a62
        }
      }, {
        'quoted': _0x5fbdd
      });
    }
  } catch (_0x93a29c) {
    _0xe1b588("Erreur lors de la récupération des données :", _0x93a29c);
  }
});
king({
  'nomCom': 'neko',
  'categorie': "Weeb",
  'reaction': '😺'
}, async (_0x33e6c8, _0x4876e7, _0x119877) => {
  const {
    repondre: _0x135aa2,
    ms: _0x760057
  } = _0x119877;
  try {
    for (let _0x559338 = 0x0; _0x559338 < 0x5; _0x559338++) {
      const _0x24a160 = await axios.get("https://api.waifu.pics/sfw/neko");
      const _0x4b0e72 = _0x24a160.data.url;
      _0x4876e7.sendMessage(_0x33e6c8, {
        'image': {
          'url': _0x4b0e72
        }
      }, {
        'quoted': _0x760057
      });
    }
  } catch (_0x535796) {
    _0x135aa2("Erreur lors de la récupération des données :", _0x535796);
  }
});
king({
  'nomCom': 'shinobu',
  'categorie': 'Weeb',
  'reaction': '🦋'
}, async (_0x13d8ee, _0x42e9af, _0x4e7b40) => {
  const {
    repondre: _0x433a56,
    ms: _0x2ee2fa
  } = _0x4e7b40;
  try {
    for (let _0x1fade3 = 0x0; _0x1fade3 < 0x5; _0x1fade3++) {
      const _0x5a33e3 = await axios.get("https://api.waifu.pics/sfw/shinobu");
      const _0x2597c0 = _0x5a33e3.data.url;
      _0x42e9af.sendMessage(_0x13d8ee, {
        'image': {
          'url': _0x2597c0
        }
      }, {
        'quoted': _0x2ee2fa
      });
    }
  } catch (_0x1f9e84) {
    _0x433a56("Erreur lors de la récupération des données :", _0x1f9e84);
  }
});
king({
  'nomCom': "megumin",
  'categorie': "Weeb",
  'reaction': '💥'
}, async (_0x148764, _0x2eac36, _0x525c12) => {
  const {
    repondre: _0x4f6113,
    ms: _0x46d135
  } = _0x525c12;
  try {
    for (let _0xb278c7 = 0x0; _0xb278c7 < 0x5; _0xb278c7++) {
      const _0xc8fa81 = await axios.get("https://api.waifu.pics/sfw/megumin");
      const _0x3339c8 = _0xc8fa81.data.url;
      _0x2eac36.sendMessage(_0x148764, {
        'image': {
          'url': _0x3339c8
        }
      }, {
        'quoted': _0x46d135
      });
    }
  } catch (_0x4cf744) {
    _0x4f6113("Erreur lors de la récupération des données :", _0x4cf744);
  }
});
king({
  'nomCom': "cosplay",
  'categorie': 'Weeb',
  'reaction': '😏'
}, async (_0x2587a5, _0x2280f9, _0x5ddaef) => {
  const {
    repondre: _0x149577,
    ms: _0x281404
  } = _0x5ddaef;
  try {
    for (let _0x3f5fcf = 0x0; _0x3f5fcf < 0x5; _0x3f5fcf++) {
      const _0x5ce94c = await axios.get('https://fantox-cosplay-api.onrender.com/', {
        'responseType': "arraybuffer"
      });
      const _0x3169b8 = _0x5ce94c.data;
      await writeFile('./cosplay.jpg', _0x3169b8);
      _0x2280f9.sendMessage(_0x2587a5, {
        'image': {
          'url': "./cosplay.jpg"
        }
      }, {
        'quoted': _0x281404
      });
    }
  } catch (_0x510916) {
    _0x149577("je reçois malheureusement une erreur : " + _0x510916);
  }
});
king({
  'nomCom': "couplepp",
  'categorie': "Weeb",
  'reaction': '💞'
}, async (_0x4dcc68, _0x8b9c25, _0x2e5e5e) => {
  const {
    repondre: _0x266bbf,
    ms: _0x105e25
  } = _0x2e5e5e;
  try {
    _0x266bbf("she/he dont love you :)");
    const _0x26a604 = await axios.get("https://smiling-hosiery-bear.cyclic.app/weeb/couplepp");
    _0x8b9c25.sendMessage(_0x4dcc68, {
      'image': {
        'url': _0x26a604.data.male
      },
      'caption': "For Man"
    }, {
      'quoted': _0x105e25
    });
    _0x8b9c25.sendMessage(_0x4dcc68, {
      'image': {
        'url': _0x26a604.data.female
      },
      'caption': "_For woman_"
    }, {
      'quoted': _0x105e25
    });
  } catch (_0x406e1a) {
    _0x266bbf(_0x406e1a);
  }
});