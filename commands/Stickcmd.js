const {
  king
} = require('../france/king');
const {
  addstickcmd,
  deleteCmd,
  getCmdById,
  inStickCmd,
  getAllStickCmds
} = require("../data/stickcmd");
king({
  'nomCom': 'setcmd',
  'categorie': "stickcmd"
}, async (_0x2fb476, _0x285660, _0x18547e) => {
  const {
    ms: _0x3c9351,
    arg: _0x47b236,
    repondre: _0x113303,
    superUser: _0x266902,
    msgRepondu: _0x4b79a9
  } = _0x18547e;
  if (!_0x266902) {
    _0x113303("you can't use this command");
    return;
  }
  ;
  if (_0x4b79a9 && _0x4b79a9.stickerMessage) {
    if (!_0x47b236 || !_0x47b236[0x0]) {
      _0x113303("put the name of the command");
      return;
    }
    ;
    await addstickcmd(_0x47b236[0x0].toLowerCase(), _0x4b79a9.stickerMessage.url);
    _0x113303("Stick cmd save successfully");
  } else {
    _0x113303("mention a sticker");
  }
});
king({
  'nomCom': "delcmd",
  'categorie': 'stickcmd'
}, async (_0x333004, _0x3196df, _0x3505f8) => {
  const {
    ms: _0x243b6f,
    arg: _0x3b5c94,
    repondre: _0x3c5b46,
    superUser: _0x5156bf
  } = _0x3505f8;
  if (!_0x5156bf) {
    _0x3c5b46("only Mods can use this command");
    return;
  }
  if (!_0x3b5c94 || !_0x3b5c94[0x0]) {
    _0x3c5b46("put the name of the command that you want to delete");
    return;
  }
  const _0x15bf8e = _0x3b5c94[0x0];
  try {
    await deleteCmd(_0x15bf8e.toLowerCase());
    _0x3c5b46("the commande " + _0x15bf8e + " is deleted successfully.");
  } catch {
    _0x3c5b46("the command " + _0x15bf8e + " don't existe");
  }
});
king({
  'nomCom': "allcmd",
  'categorie': "stickcmd"
}, async (_0x135865, _0x287ced, _0x22038a) => {
  const {
    repondre: _0x390091,
    superUser: _0x58a4b0
  } = _0x22038a;
  if (!_0x58a4b0) {
    _0x390091("only Mods can use this command");
    return;
  }
  const _0x18435a = await getAllStickCmds();
  if (_0x18435a.length > 0x0) {
    const _0xf45b9b = _0x18435a.map(_0x4fce0e => _0x4fce0e.cmd).join(", ");
    _0x390091("*List of all stickcmd :*\n " + _0xf45b9b);
  } else {
    _0x390091("No stickcmd save");
  }
});