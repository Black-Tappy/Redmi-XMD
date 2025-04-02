// REDMI-XMD //

const {
  king
} = require("../france/king");
var gis = require("g-i-s");
king({
  'nomCom': "img",
  'categorie': "Search",
  'reaction': '📷'
}, async (_0x227ae7, _0x3a9beb, _0x5848a3) => {
  const {
    repondre: _0x5ac488,
    ms: _0x2ec2dc,
    arg: _0x4fa77b
  } = _0x5848a3;
  if (!_0x4fa77b[0x0]) {
    _0x5ac488("which image ? !");
    return;
  }
  const _0x1996bb = _0x4fa77b.join(" ");
  gis(_0x1996bb, _0x2e3f1c);
  function _0x2e3f1c(_0x2ba373, _0x16aee2) {
    if (_0x2ba373) {
      _0x5ac488("oups une error ");
    } else {
      for (var _0x324faa = 0x0; _0x324faa < 0x5; _0x324faa++) {
        _0x3a9beb.sendMessage(_0x227ae7, {
          'image': {
            'url': _0x16aee2[_0x324faa].url
          }
        }, {
          'quoted': _0x2ec2dc
        });
      }
    }
  }
});

// REDMI-XMD //