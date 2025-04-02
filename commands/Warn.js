const {
  king
} = require("../france/king");
const {
  ajouterUtilisateurAvecWarnCount,
  getWarnCountByJID,
  resetWarnCountByJID
} = require("../data/warn");
const s = require('../set');
king({
  'nomCom': "warn",
  'categorie': "Group"
}, async (_0x48d31a, _0x533d2b, _0x2df8de) => {
  const {
    ms: _0x16b927,
    arg: _0x37bd41,
    repondre: _0x46531e,
    superUser: _0x10c1d9,
    verifGroupe: _0x13aaed,
    verifAdmin: _0x52458d,
    msgRepondu: _0x3f9a5f,
    auteurMsgRepondu: _0x2c9cd6
  } = _0x2df8de;
  if (!_0x13aaed) {
    _0x46531e("this is a group commands");
    return;
  }
  ;
  if (_0x52458d || _0x10c1d9) {
    if (!_0x3f9a5f) {
      _0x46531e("reply a message of user to warn");
      return;
    }
    ;
    if (!_0x37bd41 || !_0x37bd41[0x0] || _0x37bd41.join('') === '') {
      await ajouterUtilisateurAvecWarnCount(_0x2c9cd6);
      let _0x46a3fd = await getWarnCountByJID(_0x2c9cd6);
      let _0x1afc57 = s.WARN_COUNT;
      if (_0x46a3fd >= _0x1afc57) {
        await _0x46531e("this user reach limit of warning , so i kick him/her");
        _0x533d2b.groupParticipantsUpdate(_0x48d31a, [_0x2c9cd6], "remove");
      } else {
        var _0xeb8b3e = _0x1afc57 - _0x46a3fd;
        _0x46531e("this user is warned , rest before kick : " + _0xeb8b3e + " ");
      }
    } else {
      if (_0x37bd41[0x0] === "reset") {
        await resetWarnCountByJID(_0x2c9cd6);
        _0x46531e("Warn count is reset for this user");
      } else {
        _0x46531e("reply to a user by typing  .warn ou .warn reset");
      }
    }
  } else {
    _0x46531e("you are not admin");
  }
});