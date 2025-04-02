const {
  king
} = require('../france/king');
const {
  attribuerUnevaleur
} = require("../data/welcome");
async function events(_0x3b8c35) {
  king({
    'nomCom': _0x3b8c35,
    'categorie': "Group"
  }, async (_0x933422, _0x9965ba, _0x3cc6bb) => {
    const {
      ms: _0xa53a5a,
      arg: _0x2cf8a7,
      repondre: _0x2683cc,
      superUser: _0x5dbe21,
      verifAdmin: _0x13e378
    } = _0x3cc6bb;
    if (_0x13e378 || _0x5dbe21) {
      if (!_0x2cf8a7[0x0] || _0x2cf8a7.join(" ") === " ") {
        _0x2683cc(_0x3b8c35 + " " + " on to active and " + " " + _0x3b8c35 + " " + "off to put off");
      } else if (_0x2cf8a7[0x0] === 'on' || _0x2cf8a7[0x0] === "off") {
        await attribuerUnevaleur(_0x933422, _0x3b8c35, _0x2cf8a7[0x0]);
        _0x2683cc(_0x3b8c35 + "is actualised on " + _0x2cf8a7[0x0]);
      } else {
        _0x2683cc("on for active and off for desactive");
      }
    } else {
      _0x2683cc("You can't use this commands ");
    }
  });
}
events("welcome");
events("goodbye");
events("antipromote");
events('antidemote');