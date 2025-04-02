const {
  king
} = require('../france/king');
const {
  addOrUpdateDataInAlive,
  getDataFromAlive
} = require('../data/alive');
const moment = require('moment-timezone');
const s = require(__dirname + "/../set");
king({
  'nomCom': 'alive',
  'categorie': 'General'
}, async (_0x149433, _0x16aa79, _0x4af2fe) => {
  const {
    ms: _0x564f9f,
    arg: _0x1c91bc,
    repondre: _0x3d9994,
    superUser: _0x9261f9
  } = _0x4af2fe;
  const _0x448214 = await getDataFromAlive();
  if (!_0x1c91bc || !_0x1c91bc[0x0] || _0x1c91bc.join('') === '') {
    if (_0x448214) {
      const {
        message: _0x5488c4,
        lien: _0x1c56f3
      } = _0x448214;
      var _0x120f18 = "public";
      if (s.MODE.toLocaleLowerCase() != "public") {
        _0x120f18 = 'Private';
      }
      moment.tz.setDefault("Africa/Nairobi");
      const _0x107c26 = moment().format('HH:mm:ss');
      const _0x1327de = moment().format("DD/MM/YYYY");
      const _0x400731 = "\n     " + _0x5488c4 + "\n   \n*Owner* : " + s.OWNER_NAME + "\n*Mode* : " + _0x120f18 + "\n*Date* : " + _0x1327de + "\n*Time* : " + _0x107c26 + "\n\n\n \n *REDMI-XMD by Ⴊl𐌀Ꮳk 𐌕𐌀ႲႲჄ_ is alive*";
      if (_0x1c56f3.match(/\.(mp4|gif)$/i)) {
        try {
          _0x16aa79.sendMessage(_0x149433, {
            'video': {
              'url': _0x1c56f3
            },
            'caption': _0x400731
          }, {
            'quoted': _0x564f9f
          });
        } catch (_0x58faf6) {
          console.log("🥵🥵 Menu erreur " + _0x58faf6);
          _0x3d9994("🥵🥵 Menu erreur " + _0x58faf6);
        }
      } else {
        if (_0x1c56f3.match(/\.(jpeg|png|jpg)$/i)) {
          try {
            _0x16aa79.sendMessage(_0x149433, {
              'image': {
                'url': _0x1c56f3
              },
              'caption': _0x400731
            }, {
              'quoted': _0x564f9f
            });
          } catch (_0x2f9636) {
            console.log("🥵🥵 Menu erreur " + _0x2f9636);
            _0x3d9994("🥵🥵 Menu erreur " + _0x2f9636);
          }
        } else {
          _0x3d9994(_0x400731);
        }
      }
    } else {
      if (!_0x9261f9) {
        _0x3d9994("there is no alive for this bot");
        return;
      }
      ;
      await _0x3d9994("You have not yet saved your alive, to do this;  enter after alive your message and your image or video link in this context: .alive message;lien");
      _0x3d9994("don't do fake things :)");
    }
  } else {
    if (!_0x9261f9) {
      _0x3d9994("Only the owner can  modify the alive");
      return;
    }
    ;
    const _0x477ee1 = _0x1c91bc.join(" ").split(';')[0x0];
    const _0x5866df = _0x1c91bc.join(" ").split(';')[0x1];
    await addOrUpdateDataInAlive(_0x477ee1, _0x5866df);
    _0x3d9994("message alive refresh successfully");
  }
});