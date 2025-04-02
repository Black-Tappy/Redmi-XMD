const {
  king
} = require("../france/king");
const {
  default: axios
} = require("axios");
king({
  'nomCom': "news",
  'reaction': '🐐',
  'categorie': 'News'
}, async (_0xdcd0e0, _0x5a3c32, _0x31a53e) => {
  const {
    repondre: _0x91caa0,
    arg: _0x356667,
    ms: _0x52a6fe
  } = _0x31a53e;
  const _0x5cd086 = await axios.get("https://samirxpikachuio.onrender.com/news");
  const _0x57cd68 = _0x5cd086.data;
  if (Array.isArray(_0x57cd68) && _0x57cd68.length > 0x0) {
    let _0x12181d = "*REDMI-XMD NEWS:*\n\n";
    _0x57cd68.forEach((_0x10ec29, _0x14086c) => {
      _0x12181d += '*' + (_0x14086c + 0x1) + ". Title:* " + _0x10ec29.title + "\n*Source:* " + _0x10ec29.source + "\n\n";
    });
    _0x12181d += "\n> *POWERED BY 𝐑𝐄𝐃𝐌𝐈-𝐗𝐌𝐃*";
    await _0x5a3c32.sendMessage(_0xdcd0e0, {
      'text': _0x12181d.trim()
    }, {
      'quoted': _0x52a6fe
    });
  } else {
    await _0x5a3c32.sendMessage(_0xdcd0e0, {
      'text': "No news available at the moment."
    }, {
      'quoted': _0x52a6fe
    });
  }
});