const {
  king
} = require("../france/king");
const axios = require("axios");
king({
  'nomCom': 'messi',
  'categorie': 'Wallpapers',
  'reaction': '😋'
}, async (_0xcae205, _0x5a5ec6, _0x29720a) => {
  const {
    repondre: _0x331660,
    ms: _0x38d2e4
  } = _0x29720a;
  try {
    const _0x2d74e4 = await axios.get("https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json");
    const _0x405077 = _0x2d74e4.data;
    if (!Array.isArray(_0x405077) || _0x405077.length === 0x0) {
      throw new Error("No images found in the response.");
    }
    for (let _0x22c970 = 0x0; _0x22c970 < 0x5; _0x22c970++) {
      const _0x4b0fd2 = Math.floor(Math.random() * _0x405077.length);
      const _0x253b22 = _0x405077[_0x4b0fd2];
      await _0x5a5ec6.sendMessage(_0xcae205, {
        'image': {
          'url': _0x253b22
        }
      }, {
        'quoted': _0x38d2e4
      });
    }
  } catch (_0x10e4f8) {
    console.error("Error occurred while retrieving data:", _0x10e4f8);
    _0x331660("Error occurred while retrieving data: " + _0x10e4f8.message);
  }
});
king({
  'nomCom': "hwaifu",
  'categorie': "Hentai",
  'reaction': '🙄'
}, async (_0x560f48, _0x45e755, _0x4f0942) => {
  const {
    repondre: _0x236e97,
    ms: _0x1dd274
  } = _0x4f0942;
  try {
    for (let _0x5a5844 = 0x0; _0x5a5844 < 0x5; _0x5a5844++) {
      const _0x136e52 = await axios.get("https://api.waifu.pics/nsfw/waifu");
      const _0x30e503 = _0x136e52.data.url;
      _0x45e755.sendMessage(_0x560f48, {
        'image': {
          'url': _0x30e503
        }
      }, {
        'quoted': _0x1dd274
      });
    }
  } catch (_0x2feb32) {
    _0x236e97("Erreur lors de la récupération des données : " + _0x2feb32);
  }
});
king({
  'nomCom': "trap",
  'categorie': 'Hentai',
  'reaction': '🙄'
}, async (_0x4a3c20, _0x1be5d0, _0x1fed88) => {
  const {
    repondre: _0x1c91aa,
    ms: _0xf4e863
  } = _0x1fed88;
  try {
    for (let _0x3fd5e0 = 0x0; _0x3fd5e0 < 0x5; _0x3fd5e0++) {
      const _0x487a32 = await axios.get("https://api.waifu.pics/nsfw/trap");
      const _0x20894e = _0x487a32.data.url;
      _0x1be5d0.sendMessage(_0x4a3c20, {
        'image': {
          'url': _0x20894e
        }
      }, {
        'quoted': _0xf4e863
      });
    }
  } catch (_0x1b9591) {
    _0x1c91aa("An Error occurred while retrieving data:", _0x1b9591);
  }
});
king({
  'nomCom': "hneko",
  'categorie': "Hentai",
  'reaction': '🙄'
}, async (_0x14ca39, _0x5d91fb, _0x8a754f) => {
  const {
    repondre: _0x277009,
    ms: _0x5e9fef
  } = _0x8a754f;
  try {
    for (let _0x443414 = 0x0; _0x443414 < 0x5; _0x443414++) {
      const _0x3b1e1e = await axios.get("https://api.waifu.pics/nsfw/neko");
      const _0x3c9c4f = _0x3b1e1e.data.url;
      _0x5d91fb.sendMessage(_0x14ca39, {
        'image': {
          'url': _0x3c9c4f
        }
      }, {
        'quoted': _0x5e9fef
      });
    }
  } catch (_0xd31eb3) {
    _0x277009("Error occured while retrieving data:", _0xd31eb3);
  }
});
king({
  'nomCom': 'bj',
  'categorie': 'Hentai',
  'reaction': '🙄'
}, async (_0x179a47, _0x1d0a95, _0x5a6581) => {
  const {
    repondre: _0x289819,
    ms: _0x266fdf
  } = _0x5a6581;
  try {
    for (let _0x3a2b2d = 0x0; _0x3a2b2d < 0x5; _0x3a2b2d++) {
      const _0x452215 = await axios.get('https://api.maher-zubair.tech/nsfw/blowjob');
      const _0x2b21ba = _0x452215.data.url;
      _0x1d0a95.sendMessage(_0x179a47, {
        'image': {
          'url': _0x2b21ba
        }
      }, {
        'quoted': _0x266fdf
      });
    }
  } catch (_0x2ed787) {
    _0x289819("Error occurred while retrieving data :", _0x2ed787);
  }
});
king({
  'nomCom': "ass",
  'categorie': "Hentai",
  'reaction': '🍑'
}, async (_0xc103f1, _0xfe64c2, _0x5c47af) => {
  const {
    repondre: _0x357a56,
    ms: _0x937036
  } = _0x5c47af;
  try {
    for (let _0x1a66b1 = 0x0; _0x1a66b1 < 0x5; _0x1a66b1++) {
      const _0x4650c0 = await axios.get("https://api.maher-zubair.tech/nsfw/ass");
      const _0x484cac = _0x4650c0.data.url;
      _0xfe64c2.sendMessage(_0xc103f1, {
        'image': {
          'url': _0x484cac
        }
      }, {
        'quoted': _0x937036
      });
    }
  } catch (_0x212fd0) {
    _0x357a56("Error occurred while retrieving data :", _0x212fd0);
  }
});
king({
  'nomCom': "fuck",
  'categorie': "Hentai",
  'reaction': "💦 "
}, async (_0x337bd2, _0xa26cbc, _0x1cd89a) => {
  const {
    repondre: _0x25b1a0,
    ms: _0x1ba260
  } = _0x1cd89a;
  try {
    for (let _0x511944 = 0x0; _0x511944 < 0x5; _0x511944++) {
      const _0xb9d064 = await axios.get("https://api.maher-zubair.tech/nsfw/fuck");
      const _0x33c531 = _0xb9d064.data.url;
      _0xa26cbc.sendMessage(_0x337bd2, {
        'image': {
          'url': _0x33c531
        }
      }, {
        'quoted': _0x1ba260
      });
    }
  } catch (_0x406298) {
    _0x25b1a0("Error occurred while retrieving data :", _0x406298);
  }
});
king({
  'nomCom': "pussy",
  'categorie': "Hentai",
  'reaction': '😋'
}, async (_0x152ea0, _0x18dfe0, _0x16cb71) => {
  const {
    repondre: _0x54f8b3,
    ms: _0x548051
  } = _0x16cb71;
  try {
    for (let _0x3a663a = 0x0; _0x3a663a < 0x5; _0x3a663a++) {
      const _0x22d7f0 = await axios.get('https://api.maher-zubair.tech/nsfw/pussy');
      const _0x12304c = _0x22d7f0.data.url;
      _0x18dfe0.sendMessage(_0x152ea0, {
        'image': {
          'url': _0x12304c
        }
      }, {
        'quoted': _0x548051
      });
    }
  } catch (_0x4067b6) {
    _0x54f8b3("Error occurred while retrieving data :", _0x4067b6);
  }
});
king({
  'nomCom': "dick",
  'categorie': 'Hentai',
  'reaction': '😋'
}, async (_0x1f9156, _0x5ced55, _0x4f9af6) => {
  const {
    repondre: _0x5834e9,
    ms: _0x526cfe
  } = _0x4f9af6;
  try {
    for (let _0x4b80a2 = 0x0; _0x4b80a2 < 0x5; _0x4b80a2++) {
      const _0x3a37af = await axios.get("https://api.maher-zubair.tech/nsfw/dick");
      const _0x45528b = _0x3a37af.data.url;
      _0x5ced55.sendMessage(_0x1f9156, {
        'image': {
          'url': _0x45528b
        }
      }, {
        'quoted': _0x526cfe
      });
    }
  } catch (_0xde24e5) {
    _0x5834e9("Error occurred while retrieving data :", _0xde24e5);
  }
});
king({
  'nomCom': "porngif",
  'categorie': "Hentai",
  'reaction': '😋'
}, async (_0x4fb4fb, _0x76cac9, _0x717541) => {
  const {
    repondre: _0x46cd4e,
    ms: _0x4f7074
  } = _0x717541;
  try {
    for (let _0x522565 = 0x0; _0x522565 < 0x5; _0x522565++) {
      const _0x12c1cc = await axios.get("https://api.maher-zubair.tech/nsfw/porngif");
      const _0x4c8ab8 = _0x12c1cc.data.url;
      _0x76cac9.sendMessage(_0x4fb4fb, {
        'image': {
          'url': _0x4c8ab8
        }
      }, {
        'quoted': _0x4f7074
      });
    }
  } catch (_0x1ec37a) {
    _0x46cd4e("Error occurred while retrieving data :", _0x1ec37a);
  }
});
king({
  'nomCom': "car",
  'categorie': 'Wallpapers',
  'reaction': '🚗'
}, async (_0x354abe, _0x3c2659, _0x387d52) => {
  const {
    repondre: _0x21b92a,
    ms: _0x29e6be
  } = _0x387d52;
  try {
    for (let _0x104bc9 = 0x0; _0x104bc9 < 0x5; _0x104bc9++) {
      const _0x5b5a36 = await axios.get("https://api.maher-zubair.tech/wallpaper/car");
      const _0x16a723 = _0x5b5a36.data.url;
      _0x3c2659.sendMessage(_0x354abe, {
        'image': {
          'url': _0x16a723
        }
      }, {
        'quoted': _0x29e6be
      });
    }
  } catch (_0x2d1482) {
    _0x21b92a("Error occurred while retrieving data :", _0x2d1482);
  }
});
king({
  'nomCom': 'enemy',
  'categorie': "Wallpapers",
  'reaction': '💀'
}, async (_0x1932cb, _0x5cc7ec, _0x5ba2f9) => {
  const {
    repondre: _0x38dda9,
    ms: _0x18d9cc
  } = _0x5ba2f9;
  try {
    for (let _0x155f80 = 0x0; _0x155f80 < 0x5; _0x155f80++) {
      const _0x42cca4 = await axios.get("https://api.maher-zubair.tech/wallpaper/horror");
      const _0xf7e8b0 = _0x42cca4.data.url;
      _0x5cc7ec.sendMessage(_0x1932cb, {
        'image': {
          'url': _0xf7e8b0
        }
      }, {
        'quoted': _0x18d9cc
      });
    }
  } catch (_0x3fc3d7) {
    _0x38dda9("Error occurred while retrieving data :", _0x3fc3d7);
  }
});
king({
  'nomCom': "random",
  'categorie': "Wallpapers",
  'reaction': '😋'
}, async (_0x57b6b5, _0x2a73f6, _0x1df894) => {
  const {
    repondre: _0xf9a2cb,
    ms: _0x19fb30
  } = _0x1df894;
  try {
    for (let _0x2a85bd = 0x0; _0x2a85bd < 0x5; _0x2a85bd++) {
      const _0x3d63e2 = await axios.get("https://api.maher-zubair.tech/wallpaper/random");
      const _0x76f4ca = _0x3d63e2.data.url;
      _0x2a73f6.sendMessage(_0x57b6b5, {
        'image': {
          'url': _0x76f4ca
        }
      }, {
        'quoted': _0x19fb30
      });
    }
  } catch (_0x27c7a6) {
    _0xf9a2cb("Error occurred while retrieving data :", _0x27c7a6);
  }
});
king({
  'nomCom': 'pubg',
  'categorie': "Hentai",
  'reaction': '😋'
}, async (_0x2c4967, _0x4cae04, _0x224dcb) => {
  const {
    repondre: _0x215c9a,
    ms: _0x2e51c1
  } = _0x224dcb;
  try {
    for (let _0x21ff24 = 0x0; _0x21ff24 < 0x5; _0x21ff24++) {
      const _0x2773f4 = await axios.get("https://api.maher-zubair.tech/wallpaper/pubg");
      const _0x167778 = _0x2773f4.data.url;
      _0x4cae04.sendMessage(_0x2c4967, {
        'image': {
          'url': _0x167778
        }
      }, {
        'quoted': _0x2e51c1
      });
    }
  } catch (_0x45473f) {
    _0x215c9a("Error occurred while retrieving data :", _0x45473f);
  }
});
king({
  'nomCom': "dog",
  'categorie': "Wallpapers",
  'reaction': '🐶'
}, async (_0x422477, _0x345305, _0x532e93) => {
  const {
    repondre: _0x214a3f,
    ms: _0x220d4d
  } = _0x532e93;
  try {
    for (let _0x526184 = 0x0; _0x526184 < 0x5; _0x526184++) {
      const _0x31b5e1 = await axios.get("https://api.maher-zubair.tech/wallpaper/dog");
      const _0x2d22c6 = _0x31b5e1.data.url;
      _0x345305.sendMessage(_0x422477, {
        'image': {
          'url': _0x2d22c6
        }
      }, {
        'quoted': _0x220d4d
      });
    }
  } catch (_0x5192f9) {
    _0x214a3f("Error occurred while retrieving data :", _0x5192f9);
  }
});
king({
  'nomCom': 'blackpink',
  'categorie': "Wallpapers",
  'reaction': '😋'
}, async (_0x394409, _0x4be78b, _0x513cd5) => {
  const {
    repondre: _0x568de4,
    ms: _0x4fadf9
  } = _0x513cd5;
  try {
    for (let _0x47d941 = 0x0; _0x47d941 < 0x5; _0x47d941++) {
      const _0x3b7d8b = await axios.get("https://api.maher-zubair.tech/wallpaper/blackpink");
      const _0x1cc322 = _0x3b7d8b.data.url;
      _0x4be78b.sendMessage(_0x394409, {
        'image': {
          'url': _0x1cc322
        }
      }, {
        'quoted': _0x4fadf9
      });
    }
  } catch (_0x50e425) {
    _0x568de4("Error occurred while retrieving data :", _0x50e425);
  }
});
king({
  'nomCom': "cr7",
  'categorie': "Wallpapers",
  'reaction': '😋'
}, async (_0x2c1166, _0xc08a4d, _0x333329) => {
  const {
    repondre: _0x127861,
    ms: _0x3929ac
  } = _0x333329;
  try {
    const _0xd2e08f = await axios.get("https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json");
    const _0x3da802 = _0xd2e08f.data;
    if (!Array.isArray(_0x3da802) || _0x3da802.length === 0x0) {
      throw new Error("No images found in the response.");
    }
    for (let _0x14147e = 0x0; _0x14147e < 0x5; _0x14147e++) {
      const _0x896f9 = Math.floor(Math.random() * _0x3da802.length);
      const _0x5359b2 = _0x3da802[_0x896f9];
      await _0xc08a4d.sendMessage(_0x2c1166, {
        'image': {
          'url': _0x5359b2
        }
      }, {
        'quoted': _0x3929ac
      });
    }
  } catch (_0x596a35) {
    console.error("Detailed error information:", {
      'message': _0x596a35.message,
      'response': _0x596a35.response ? {
        'status': _0x596a35.response.status,
        'data': _0x596a35.response.data
      } : null,
      'stack': _0x596a35.stack
    });
    _0x127861("Error occurred while retrieving data: " + _0x596a35.message);
  }
});
king({
  'nomCom': "bike",
  'categorie': "Wallpapers",
  'reaction': '🚲'
}, async (_0x46be2f, _0x308924, _0x1094a7) => {
  const {
    repondre: _0x198a9b,
    ms: _0x59fa8c
  } = _0x1094a7;
  try {
    for (let _0x219a57 = 0x0; _0x219a57 < 0x5; _0x219a57++) {
      const _0x1e7b50 = await axios.get('https://api.maher-zubair.tech/wallpaper/bike');
      const _0x5a7038 = _0x1e7b50.data.url;
      _0x308924.sendMessage(_0x46be2f, {
        'image': {
          'url': _0x5a7038
        }
      }, {
        'quoted': _0x59fa8c
      });
    }
  } catch (_0x53ee2d) {
    _0x198a9b("Error occurred while retrieving data :", _0x53ee2d);
  }
});
king({
  'nomCom': "aesthetic",
  'categorie': "Wallpapers",
  'reaction': ''
}, async (_0x51e62c, _0x1f0343, _0x195c45) => {
  const {
    repondre: _0x3a3e6a,
    ms: _0x3ea620
  } = _0x195c45;
  try {
    for (let _0x5afede = 0x0; _0x5afede < 0x5; _0x5afede++) {
      const _0x2d4b56 = await axios.get("https://api.maher-zubair.tech/wallpaper/asthetic");
      const _0x22544d = _0x2d4b56.data.url;
      _0x1f0343.sendMessage(_0x51e62c, {
        'image': {
          'url': _0x22544d
        }
      }, {
        'quoted': _0x3ea620
      });
    }
  } catch (_0x28717a) {
    _0x3a3e6a("Error occurred while retrieving data :", _0x28717a);
  }
});
king({
  'nomCom': "islamic",
  'categorie': "Wallpapers",
  'reaction': '🌻'
}, async (_0x13f2c1, _0x2ad0fd, _0x32695e) => {
  const {
    repondre: _0x555356,
    ms: _0x4c570c
  } = _0x32695e;
  try {
    for (let _0x43383f = 0x0; _0x43383f < 0x5; _0x43383f++) {
      const _0x11e99b = await axios.get("https://api.maher-zubair.tech/wallpaper/islamic");
      const _0x51a2df = _0x11e99b.data.url;
      _0x2ad0fd.sendMessage(_0x13f2c1, {
        'image': {
          'url': _0x51a2df
        }
      }, {
        'quoted': _0x4c570c
      });
    }
  } catch (_0x5e5918) {
    _0x555356("Error occurred while retrieving data :", _0x5e5918);
  }
});