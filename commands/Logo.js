const {
  king
} = require('../france/king');
var mumaker = require("mumaker");
king({
  'nomCom': "hacker",
  'categorie': 'Logo',
  'reaction': "👨🏿‍💻"
}, async (_0x145e48, _0x80d585, _0xc63a84) => {
  const {
    prefixe: _0x25684f,
    arg: _0x5b9972,
    ms: _0x366710,
    repondre: _0x85e7be
  } = _0xc63a84;
  if (!_0x5b9972 || _0x5b9972 == '') {
    _0x85e7be("*__Exemple : * " + _0x25684f + "hacker REDMI-XMD");
    return;
  }
  try {
    let _0x4086bb = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x5b9972);
    _0x85e7be("*processing...*");
    await _0x80d585.sendMessage(_0x145e48, {
      'image': {
        'url': _0x4086bb.image
      },
      'caption': "\t *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x366710
    });
  } catch (_0x503c5f) {
    _0x85e7be("🥵🥵 " + _0x503c5f);
  }
});
king({
  'nomCom': "sand",
  'categorie': "Logo",
  'reaction': '⌛'
}, async (_0x1a6c2a, _0x46743b, _0x245157) => {
  const {
    prefixe: _0x5274b1,
    arg: _0x3dc084,
    ms: _0x4c88f9,
    repondre: _0x1c91dd
  } = _0x245157;
  if (!_0x3dc084 || _0x3dc084 == '') {
    _0x1c91dd("*Example Usage : * " + _0x5274b1 + "sand REDMI-XMD");
    return;
  }
  try {
    let _0x4959e5 = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x3dc084);
    _0x1c91dd("*REDMI-XMD is Processing...*");
    await _0x46743b.sendMessage(_0x1a6c2a, {
      'image': {
        'url': _0x4959e5.image
      },
      'caption': "\t *Logo By REDMI-XMD*"
    }, {
      'quoted': _0x4c88f9
    });
  } catch (_0x593c10) {
    _0x1c91dd("🚫🚫 " + _0x593c10);
  }
});
king({
  'nomCom': "dragonball",
  'categorie': "Logo",
  'reaction': '🐉'
}, async (_0x14dec3, _0x40f5c3, _0x4f33f5) => {
  let {
    arg: _0x12f447,
    repondre: _0x1e942c,
    prefixe: _0x39635a,
    ms: _0x2874d5
  } = _0x4f33f5;
  try {
    const _0xf468a0 = "*_EXAMPLE *:  " + _0x39635a + "dragonball REDMI-XMD";
    if (_0x12f447 == '' || !_0x12f447) {
      _0x1e942c(_0xf468a0);
      return;
    }
    const _0x26f3ed = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x12f447.join(" "));
    await _0x40f5c3.sendMessage(_0x14dec3, {
      'text': "*Processing...*"
    }, {
      'quoted': _0x2874d5
    });
    await _0x40f5c3.sendMessage(_0x14dec3, {
      'image': {
        'url': _0x26f3ed.image
      },
      'caption': " \t *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x2874d5
    });
  } catch (_0x553773) {
    _0x1e942c("🥵🥵 " + _0x553773);
  }
});
king({
  'nomCom': "naruto",
  'categorie': 'Logo',
  'reaction': '⛩'
}, async (_0x520647, _0x251ade, _0x5a89f5) => {
  let {
    ms: _0x432a13,
    arg: _0x17b8db,
    repondre: _0x1bce4a,
    prefixe: _0xdbce5a
  } = _0x5a89f5;
  try {
    if (!_0x17b8db || _0x17b8db == '') {
      _0x1bce4a("*_Example : * " + _0xdbce5a + "naruto REDMI-XMD");
      return;
    }
    _0x1bce4a("*REDMI-XMD is Processing Your Request...*");
    var _0x357389 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x17b8db.join(" "));
    await _0x251ade.sendMessage(_0x520647, {
      'image': {
        'url': _0x357389.image
      },
      'caption': "\t *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x432a13
    });
  } catch (_0x564fe1) {
    _0x1bce4a("🥵🥵 " + _0x564fe1);
  }
});
king({
  'nomCom': "didong",
  'categorie': "Logo",
  'reaction': '📱'
}, async (_0x5635c0, _0x394462, _0x4e4b97) => {
  try {
    if (!_0x181394 || _0x181394 == '') {
      _0x248cc8("*exemple :* " + _0x16cabd + "didong REDMI-XMD");
      return;
    }
    var _0x2d8974 = await mumaker.ephoto("https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html", _0x181394.join(" "));
    _0x248cc8("*processing...*");
    await _0x394462.sendMessage(_0x5635c0, {
      'image': {
        'url': _0x2d8974.image
      },
      'caption': "\t *Logo by REDMI-XMD*"
    });
  } catch (_0x190a4a) {
    _0x248cc8("🥵🥵 " + _0x190a4a);
  }
});
king({
  'nomCom': "night",
  'categorie': "Logo",
  'reaction': '🌃'
}, async (_0x338af8, _0xcbb0bc, _0x498e3a) => {
  const {
    arg: _0x30108a,
    repondre: _0x9e74ba,
    ms: _0x1ace5b,
    prefixe: _0x1ec455
  } = _0x498e3a;
  if (!_0x30108a[0x0]) {
    _0x9e74ba("Example of using this command:\n " + _0x1ec455 + "night REDMI-XMD");
    return;
  }
  let _0x42f57b = _0x30108a.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/stars-night-online-1-85.html", _0x42f57b).then(_0x3de3bc => {
    _0xcbb0bc.sendMessage(_0x338af8, {
      'image': {
        'url': _0x3de3bc.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x1ace5b
    });
  })["catch"](console.log);
});
king({
  'nomCom': "sunset",
  'categorie': "Logo",
  'reaction': '🌞'
}, async (_0x318527, _0x394433, _0x18f206) => {
  const {
    arg: _0x4ff862,
    repondre: _0x35d988,
    ms: _0x3b677a,
    prefixe: _0x3c6c9e
  } = _0x18f206;
  if (!_0x4ff862[0x0]) {
    _0x35d988("Example of using this command:\n " + _0x3c6c9e + "sunset REDMI-XMD");
    return;
  }
  const _0x5ba78e = _0x4ff862.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html", _0x5ba78e).then(_0x3b8f65 => {
    _0x394433.sendMessage(_0x318527, {
      'image': {
        'url': _0x3b8f65.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x3b677a
    });
  })["catch"](console.error);
});
king({
  'nomCom': 'chocolate',
  'categorie': "Logo",
  'reaction': '🍫'
}, async (_0x59afd5, _0x1c3b1d, _0x46698a) => {
  const {
    arg: _0x527498,
    repondre: _0x3227de,
    ms: _0x2a84fb,
    prefixe: _0x51e346
  } = _0x46698a;
  if (!_0x527498 || _0x527498 == '') {
    _0x3227de("Example of using this command:\n " + _0x51e346 + "chocolate REDMI-XMD");
    return;
  }
  try {
    let _0x203856 = await mumaker.ephoto("https://en.ephoto360.com/chocolate-text-effect-353.html", _0x527498);
    _0x1c3b1d.sendMessage(_0x59afd5, {
      'image': {
        'url': _0x203856.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x2a84fb
    });
  } catch (_0x8a370b) {
    _0x3227de("🥵🥵 " + _0x8a370b);
  }
});
king({
  'nomCom': "mechanical",
  'categorie': 'Logo',
  'reaction': '🏢'
}, async (_0x468cc6, _0x12983f, _0x23a0a6) => {
  const {
    arg: _0x41c02f,
    repondre: _0xf78443,
    ms: _0x2b3eb6,
    prefixe: _0x3a6b04
  } = _0x23a0a6;
  if (!_0x41c02f[0x0]) {
    _0xf78443("Example of using this command:\n " + _0x3a6b04 + "mechanical REDMI-XMD");
    return;
  }
  const _0x654782 = _0x41c02f.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html", _0x654782).then(_0x143b65 => {
    _0x12983f.sendMessage(_0x468cc6, {
      'image': {
        'url': _0x143b65.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x2b3eb6
    });
  })["catch"](console.error);
});
king({
  'nomCom': "rain",
  'categorie': "Logo",
  'reaction': '☔'
}, async (_0x6ede3c, _0x322117, _0xb5b93a) => {
  const {
    arg: _0x515ca7,
    repondre: _0x1bf8eb,
    ms: _0x500dcc,
    prefixe: _0x5a5433
  } = _0xb5b93a;
  if (!_0x515ca7[0x0]) {
    _0x1bf8eb("Example of using this command:\n " + _0x5a5433 + "rain REDMI-XMD");
    return;
  }
  const _0x785770 = _0x515ca7.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/foggy-rainy-text-effect-75.html", _0x785770).then(_0x3509f1 => {
    _0x322117.sendMessage(_0x6ede3c, {
      'image': {
        'url': _0x3509f1.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x500dcc
    });
  })["catch"](console.error);
});
king({
  'nomCom': 'cloth',
  'categorie': "Logo",
  'reaction': '🦺'
}, async (_0x3b9a6b, _0x46b47b, _0x11c9e0) => {
  const {
    arg: _0x4e4407,
    repondre: _0xdd6653,
    ms: _0x55068a,
    prefixe: _0x1f0b40
  } = _0x11c9e0;
  if (!_0x4e4407[0x0]) {
    _0xdd6653("Example of using this command:\n " + _0x1f0b40 + "cloth REDMI-XMD");
    return;
  }
  mumaker.ephoto('https://en.ephoto360.com/text-on-cloth-effect-62.html', _0x4e4407).then(_0x16c83d => {
    _0x46b47b.sendMessage(_0x3b9a6b, {
      'image': {
        'url': _0x16c83d.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x55068a
    });
  })['catch'](console.error);
});
king({
  'nomCom': "avenger",
  'categorie': "Logo",
  'reaction': '💥'
}, async (_0x4f4cfd, _0x33db14, _0x537f09) => {
  if (!_0xc0638 || _0xc0638 == '') {
    _0x3f898a("  Example :* " + _0x338b80 + "graffiti REDMI-XMD");
    return;
  }
  try {
    console.log(_0xc0638);
    var _0x41f943 = await mumaker.ephoto("https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html", _0xc0638);
    _0x3f898a(" Processing ...");
    await _0x33db14.sendMessage(_0x4f4cfd, {
      'image': {
        'url': _0x41f943.image
      },
      'caption': " *Logo by REDMI-XMD*"
    });
  } catch (_0x3a9859) {
    _0x3f898a("🥵🥵 " + _0x3a9859);
  }
});
king({
  'nomCom': "water",
  'categorie': "Logo",
  'reaction': '💦'
}, async (_0x509344, _0x112183, _0x49bc10) => {
  const {
    arg: _0x5631ee,
    repondre: _0x2d2d03,
    ms: _0x1f5e40,
    prefixe: _0x56097a
  } = _0x49bc10;
  if (!_0x5631ee[0x0]) {
    _0x2d2d03("Example of using this command:\n " + _0x56097a + "water REDMI-XMD");
    return;
  }
  let _0x2c75e8 = _0x5631ee.join(" ");
  mumaker.ephoto('https://en.ephoto360.com/create-water-effect-text-online-295.html', _0x2c75e8).then(_0x14d96a => {
    _0x112183.sendMessage(_0x509344, {
      'image': {
        'url': _0x14d96a.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x1f5e40
    });
  })["catch"](console.log);
});
king({
  'nomCom': "1917",
  'categorie': 'Logo',
  'reaction': '😤'
}, async (_0x29d112, _0x36817c, _0x32e31e) => {
  const {
    arg: _0x533ddc,
    ms: _0x5e0a2e,
    prefixe: _0x17b50d,
    repondre: _0xbc3944
  } = _0x32e31e;
  if (!_0x533ddc[0x0]) {
    _0xbc3944("Example of using this command:\n " + _0x17b50d + "hub REDMI-XMD");
    return;
  }
  const _0x59f602 = _0x533ddc.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x59f602).then(_0x1aeca4 => {
    _0x36817c.sendMessage(_0x29d112, {
      'image': {
        'url': _0x1aeca4.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x5e0a2e
    });
  })["catch"](_0x454247 => {
    console.error("An error occurred :", _0x454247);
  });
});
king({
  'nomCom': 'graffiti',
  'categorie': "Logo",
  'reaction': '💥'
}, async (_0x38b1d8, _0x3a4c11, _0x809aef) => {
  const {
    prefixe: _0x48bd46,
    arg: _0x1f6e73,
    ms: _0xce9636,
    repondre: _0x23d127
  } = _0x809aef;
  if (!_0x1f6e73 || _0x1f6e73 == '') {
    _0x23d127("*__Example : * " + _0x48bd46 + "grafittis REDMI-XMD");
    return;
  }
  try {
    let _0x57ef84 = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x1f6e73);
    _0x23d127("*REDMI-XMD is processing your request...*");
    await _0x3a4c11.sendMessage(_0x38b1d8, {
      'image': {
        'url': _0x57ef84.image
      },
      'caption': "\t *Logo by REDMI-XMD*"
    }, {
      'quoted': _0xce9636
    });
  } catch (_0x27e2e5) {
    _0x23d127("🥵🥵 " + _0x27e2e5);
  }
});
king({
  'nomCom': "thunder",
  'categorie': "Logo",
  'reaction': '⚡'
}, async (_0x20ec62, _0x9ba848, _0x280cb2) => {
  const {
    arg: _0x24dea,
    ms: _0x51c9fa,
    prefixe: _0x38bf3e,
    repondre: _0x2630bf
  } = _0x280cb2;
  if (!_0x24dea[0x0]) {
    _0x2630bf("Exemple of using commande:\n " + _0x38bf3e + "Thunder My text");
    return;
  }
  const _0x5589bd = _0x24dea.join(" ");
  mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", _0x5589bd).then(_0x92e327 => {
    _0x9ba848.sendMessage(_0x20ec62, {
      'image': {
        'url': _0x92e327.image
      },
      'caption': "Logo by *REDMI-XMD*"
    }, {
      'quoted': _0x51c9fa
    });
  })["catch"](_0x29ddf9 => {
    console.error("Une erreur s'est produite :", _0x29ddf9);
  });
});
king({
  'nomCom': "boom",
  'categorie': "Logo",
  'reaction': '💥'
}, async (_0xae2a64, _0x26d4af, _0x412300) => {
  const {
    arg: _0x57c3a4,
    ms: _0x181add,
    prefixe: _0x460a,
    repondre: _0x48ca71
  } = _0x412300;
  if (!_0x57c3a4[0x0]) {
    _0x48ca71("Example of using this command:\n " + _0x460a + "boom REDMI-XMD");
    return;
  }
  const _0x4a11e3 = _0x57c3a4.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", _0x4a11e3).then(_0x5960a0 => {
    _0x26d4af.sendMessage(_0xae2a64, {
      'image': {
        'url': _0x5960a0.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x181add
    });
  })["catch"](_0x4b7080 => {
    console.error("Une erreur s'est produite :", _0x4b7080);
  });
});
king({
  'nomCom': "cat",
  'categorie': 'Logo',
  'reaction': '🪟'
}, async (_0x19a5d0, _0x10ac54, _0x1a7505) => {
  const {
    arg: _0x3faca0,
    ms: _0x28efdf,
    prefixe: _0x395612
  } = _0x1a7505;
  if (!_0x3faca0[0x0]) {
    repondre("Example of using this command:\n " + _0x395612 + "cat REDMI-XMD");
    return;
  }
  const _0x53b741 = _0x3faca0.join(" ");
  mumaker.ephoto('https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', _0x53b741).then(_0x4930f8 => {
    _0x10ac54.sendMessage(_0x19a5d0, {
      'image': {
        'url': _0x4930f8.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x28efdf
    });
  })["catch"](_0x5371c5 => {
    console.error("Une erreur s'est produite :", _0x5371c5);
  });
});
king({
  'nomCom': 'whitegold',
  'categorie': "Logo",
  'reaction': '💫'
}, async (_0x10b925, _0x446372, _0x364416) => {
  const {
    arg: _0x150bfa,
    ms: _0x20d153,
    prefixe: _0x5aba26,
    repondre: _0x186cb6
  } = _0x364416;
  if (!_0x150bfa[0x0]) {
    _0x186cb6("Exemple of using commande:\n " + _0x5aba26 + "WhiteGold REDMI-XMD");
    return;
  }
  const _0x15a2d7 = _0x150bfa.join(" ");
  mumaker.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", _0x15a2d7).then(_0xd54f9b => {
    _0x446372.sendMessage(_0x10b925, {
      'image': {
        'url': _0xd54f9b.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x20d153
    });
  })["catch"](_0x258a08 => {
    console.error("Une erreur s'est produite :", _0x258a08);
  });
});
king({
  'nomCom': "lightglow",
  'categorie': "Logo",
  'reaction': '🌟'
}, async (_0x21509a, _0x279c6f, _0x522822) => {
  const {
    arg: _0x4f5302,
    ms: _0x3b9f58,
    prefixe: _0x11a75a,
    repondre: _0x387de4
  } = _0x522822;
  if (!_0x4f5302[0x0]) {
    _0x387de4("Exemple of using commande:\n " + _0x11a75a + "LightGlow REDMI-XMD");
    return;
  }
  const _0x1855ac = _0x4f5302.join(" ");
  mumaker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', _0x1855ac).then(_0x3ea486 => {
    _0x279c6f.sendMessage(_0x21509a, {
      'image': {
        'url': _0x3ea486.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x3b9f58
    });
  })['catch'](_0x307d7b => {
    console.error("Une erreur s'est produite :", _0x307d7b);
  });
});
king({
  'nomCom': "thor",
  'categorie': 'Logo',
  'reaction': '🔨'
}, async (_0x114ebb, _0x52f76b, _0x4bbd6e) => {
  const {
    arg: _0x5578c9,
    ms: _0x3f26fb,
    prefixe: _0x49cd73,
    repondre: _0x414a73
  } = _0x4bbd6e;
  if (!_0x5578c9[0x0]) {
    _0x414a73("Exemple of using commande:\n " + _0x49cd73 + "Thor REDMI-XMD");
    return;
  }
  const _0x11a3c8 = _0x5578c9.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/create-thor-style-text-effects-online-for-free-796.html", _0x11a3c8).then(_0x1a30ff => {
    _0x52f76b.sendMessage(_0x114ebb, {
      'image': {
        'url': _0x1a30ff.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x3f26fb
    });
  })["catch"](_0x4f9580 => {
    console.error("Une erreur s'est produite :", _0x4f9580);
  });
});
king({
  'nomCom': 'neon',
  'categorie': "Logo",
  'reaction': '💡'
}, async (_0x1bbb10, _0x3d12eb, _0x151573) => {
  const {
    arg: _0x51dd51,
    ms: _0x442085,
    prefixe: _0x3569eb,
    repondre: _0xeb0914
  } = _0x151573;
  if (!_0x51dd51[0x0]) {
    _0xeb0914("Exemple of using commande:\n " + _0x3569eb + "Neon REDMI-XMD");
    return;
  }
  const _0x33220c = _0x51dd51.join(" ");
  mumaker.textpro('https://textpro.me/neon-text-effect-online-879.html', _0x33220c).then(_0xb1e503 => {
    _0x3d12eb.sendMessage(_0x1bbb10, {
      'image': {
        'url': _0xb1e503.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x442085
    });
  })["catch"](_0x43f98e => {
    console.error("Une erreur s'est produite :", _0x43f98e);
  });
});
king({
  'nomCom': 'purple',
  'categorie': 'Logo',
  'reaction': '🧳'
}, async (_0x28fb0d, _0xcf1250, _0x35fb12) => {
  try {
    if (!_0x24f439 || _0x24f439 == '') {
      _0x249bc6(_0x2691de + "purple REDMI-XMD");
      return;
    }
    var _0x29a96e = await mumaker.ephoto('https://en.ephoto360.com/purple-text-effect-online-100.html', _0x24f439);
    _0x249bc6(" processing ...");
    await _0xcf1250.sendMessage(_0x28fb0d, {
      'image': {
        'url': _0x29a96e.image
      },
      'caption': "*Logo by REDMI-XMD*"
    });
  } catch (_0x180d03) {
    _0x249bc6(_0x180d03);
  }
});
king({
  'nomCom': 'gold',
  'categorie': "Logo",
  'reaction': "🧚🏿‍♀️"
}, async (_0x2008a2, _0x29b5c8, _0x272a33) => {
  let {
    ms: _0x298d31,
    arg: _0x1cc29f,
    prefixe: _0x935ff1,
    repondre: _0x3d04bb
  } = _0x272a33;
  try {
    if (!_0x1cc29f || _0x1cc29f == '') {
      _0x3d04bb(_0x935ff1 + "gold REDMI-XMD");
      return;
    }
    var _0x5e6ed7 = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0x1cc29f);
    _0x3d04bb("processing ...");
    await _0x29b5c8.sendMessage(_0x2008a2, {
      'image': {
        'url': _0x5e6ed7.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x298d31
    });
  } catch (_0xd792df) {
    _0x3d04bb(_0xd792df);
  }
});
king({
  'nomCom': "arena",
  'categorie': "Logo",
  'reaction': '🥵'
}, async (_0x56f997, _0xd17310, _0x279b1d) => {
  let {
    ms: _0xb41e38,
    arg: _0x173395,
    prefixe: _0x305516,
    repondre: _0x45e8bf
  } = _0x279b1d;
  try {
    if (!_0x173395 || _0x173395 == '') {
      _0x45e8bf(_0x305516 + "arena REDMI-XMD");
      return;
    }
    var _0x14192d = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x173395.join(" "));
    _0x45e8bf("processing ...");
    await _0xd17310.sendMessage(_0x56f997, {
      'image': {
        'url': _0x14192d.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0xb41e38
    });
  } catch (_0x24de3d) {
    _0x45e8bf(_0x24de3d);
  }
});
king({
  'nomCom': "incandescent",
  'categorie': "Logo",
  'reaction': '😋'
}, async (_0x5e923b, _0x231b2d, _0xabe830) => {
  let {
    ms: _0x57701b,
    arg: _0x4b58e7,
    prefixe: _0x494606,
    repondre: _0x1db70e
  } = _0xabe830;
  try {
    if (!_0x4b58e7 || _0x4b58e7 == '') {
      _0x1db70e(_0x494606 + "incandescent REDMI-XMD");
      return;
    }
    var _0x430d74 = await mumaker.ephoto('https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html', _0x4b58e7.join(" "));
    _0x1db70e("processing ...");
    await _0x231b2d.sendMessage(_0x5e923b, {
      'image': {
        'url': _0x430d74.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x57701b
    });
  } catch (_0x4ed4bb) {
    _0x1db70e(_0x4ed4bb);
  }
});
king({
  'nomCom': 'child',
  'categorie': "Logo",
  'reaction': '😇'
}, async (_0x33c329, _0x5af04e, _0x600fc9) => {
  let {
    ms: _0x56c15c,
    arg: _0x6efe13,
    prefixe: _0x1b0b42,
    repondre: _0x35540f
  } = _0x600fc9;
  try {
    if (!_0x6efe13 || _0x6efe13 == '') {
      _0x35540f(_0x1b0b42 + "child REDMI-XMD");
      return;
    }
    var _0x1a8e9d = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x6efe13.join(" "));
    _0x35540f("processing ...");
    await _0x5af04e.sendMessage(_0x33c329, {
      'image': {
        'url': _0x1a8e9d.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x56c15c
    });
  } catch (_0x335341) {
    _0x35540f(_0x335341);
  }
});
king({
  'nomCom': "typo",
  'categorie': "Logo",
  'reaction': '😇'
}, async (_0x25c880, _0x3a6d6c, _0x43d671) => {
  let {
    ms: _0x333718,
    arg: _0x139bd2,
    prefixe: _0x5effd2,
    repondre: _0x132248
  } = _0x43d671;
  try {
    if (!_0x139bd2 || _0x139bd2 == '') {
      _0x132248(_0x5effd2 + "typo REDMI-XMD");
      return;
    }
    var _0x1eba20 = await mumaker.ephoto('https://en.ephoto360.com/typography-text-effect-on-pavement-online-774.html', _0x139bd2.join(" "));
    _0x132248("processing ...");
    await _0x3a6d6c.sendMessage(_0x25c880, {
      'image': {
        'url': _0x1eba20.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x333718
    });
  } catch (_0x5cd4df) {
    _0x132248(_0x5cd4df);
  }
});
king({
  'nomCom': "light",
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x3fdbb1, _0x5a9d17, _0x281c9e) => {
  let {
    ms: _0x538454,
    arg: _0xfe79e0,
    prefixe: _0x46fa4e,
    repondre: _0x2c714c
  } = _0x281c9e;
  try {
    if (!_0xfe79e0 || _0xfe79e0 == '') {
      _0x2c714c(_0x46fa4e + "light REDMI-XMD");
      return;
    }
    var _0x4d4b4e = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0xfe79e0.join(" "));
    _0x2c714c("processing ...");
    await _0x5a9d17.sendMessage(_0x3fdbb1, {
      'image': {
        'url': _0x4d4b4e.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x538454
    });
  } catch (_0x41d4b9) {
    _0x2c714c(_0x41d4b9);
  }
});
king({
  'nomCom': "steel",
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x452567, _0x3c12c3, _0xb5079f) => {
  let {
    ms: _0x2bc6de,
    arg: _0x3aad7c,
    prefixe: _0x586e09,
    repondre: _0x550e81
  } = _0xb5079f;
  try {
    if (!_0x3aad7c || _0x3aad7c == '') {
      _0x550e81(_0x586e09 + "steel REDMI-XMD");
      return;
    }
    var _0x242afe = await mumaker.ephoto('https://en.ephoto360.com/dragon-steel-text-effect-online-347.html', _0x3aad7c.join(" "));
    _0x550e81("processing ...");
    await _0x3c12c3.sendMessage(_0x452567, {
      'image': {
        'url': _0x242afe.image
      },
      'caption': " *Logo by FLASH-MD*"
    }, {
      'quoted': _0x2bc6de
    });
  } catch (_0x277530) {
    _0x550e81(_0x277530);
  }
});
king({
  'nomCom': 'sunlight',
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x4694f1, _0x3d701f, _0x4b7152) => {
  let {
    ms: _0x208a81,
    arg: _0x1a407a,
    prefixe: _0x155f29,
    repondre: _0x4195f9
  } = _0x4b7152;
  try {
    if (!_0x1a407a || _0x1a407a == '') {
      _0x4195f9(_0x155f29 + "sunlight REDMI-XMD");
      return;
    }
    var _0x402dcf = await mumaker.ephoto('https://en.ephoto360.com/sunlight-shadow-text-204.html', _0x1a407a.join(" "));
    _0x4195f9("processing ...");
    await _0x3d701f.sendMessage(_0x4694f1, {
      'image': {
        'url': _0x402dcf.image
      },
      'caption': " *Logo by REDMI-XMD*"
    }, {
      'quoted': _0x208a81
    });
  } catch (_0x25774b) {
    _0x4195f9(_0x25774b);
  }
});
king({
  'nomCom': "frozen",
  'categorie': 'Logo',
  'reaction': '❄'
}, async (_0x4297a9, _0x3739fe, _0x426ed5) => {
  const {
    arg: _0x2c0b8f,
    ms: _0x3eb8a9,
    prefixe: _0x455480,
    repondre: _0x55db57
  } = _0x426ed5;
  if (!_0x2c0b8f[0x0]) {
    _0x55db57("Example of using this command:\n " + _0x455480 + "frozen REDMI-XMD");
    return;
  }
  const _0x466388 = _0x2c0b8f.join(" ");
  mumaker.ephoto('https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html', _0x466388).then(_0xc6b8e3 => {
    _0x3739fe.sendMessage(_0x4297a9, {
      'image': {
        'url': _0xc6b8e3.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x3eb8a9
    });
  })["catch"](_0x485ddf => {
    console.error("Une erreur s'est produite :", _0x485ddf);
  });
});
king({
  'nomCom': "magma",
  'categorie': "Logo",
  'reaction': '♨️'
}, async (_0x36a6a2, _0x12b5ad, _0x1ac70a) => {
  const {
    arg: _0x24dc82,
    ms: _0x46955e,
    prefixe: _0x599f11,
    repondre: _0x3f420f
  } = _0x1ac70a;
  if (!_0x24dc82[0x0]) {
    _0x3f420f("Example of using command:\n " + _0x599f11 + "magma My text");
    return;
  }
  const _0x3103cc = _0x24dc82.join(" ");
  mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", _0x3103cc).then(_0xf85e07 => {
    _0x12b5ad.sendMessage(_0x36a6a2, {
      'image': {
        'url': _0xf85e07.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x46955e
    });
  })['catch'](_0x56290b => {
    console.error("Une erreur s'est produite :", _0x56290b);
  });
});
king({
  'nomCom': "leaves",
  'categorie': "Logo",
  'reaction': '☘️'
}, async (_0x45d555, _0x5de3c2, _0x29e92e) => {
  const {
    arg: _0x4333cb,
    ms: _0x555228,
    prefixe: _0x318191,
    repondre: _0x366109
  } = _0x29e92e;
  if (!_0x4333cb[0x0]) {
    _0x366109("Example of using command:\n " + _0x318191 + "leaves REDMI-XMD");
    return;
  }
  const _0x584a36 = _0x4333cb.join(" ");
  mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x584a36).then(_0x347b65 => {
    _0x5de3c2.sendMessage(_0x45d555, {
      'image': {
        'url': _0x347b65.image
      },
      'caption': "Logo BY *REDMI-XMD*"
    }, {
      'quoted': _0x555228
    });
  })["catch"](_0x5aa993 => {
    console.error("Une erreur s'est produite :", _0x5aa993);
  });
});