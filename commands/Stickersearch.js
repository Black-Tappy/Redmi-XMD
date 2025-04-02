const axios = require("axios");
const {
  Sticker,
  StickerTypes
} = require('wa-sticker-formatter');
const {
  king
} = require("../france/king");
king({
  'nomCom': "stickersearch",
  'categorie': "Search",
  'reaction': '🍁'
}, async (_0x28d590, _0x410f11, _0x405233) => {
  const {
    repondre: _0x289f81,
    ms: _0x3b2e3e,
    arg: _0x1e1f49,
    nomAuteurMessage: _0x1119e8
  } = _0x405233;
  if (!_0x1e1f49[0x0]) {
    _0x289f81("insert the type of stickers your want !");
    return;
  }
  const _0x5c70e5 = _0x1e1f49.join(" ");
  try {
    for (i = 0x0; i < 0x5; i++) {
      const _0x458670 = await axios.get('https://tenor.googleapis.com/v2/search?q=' + _0x5c70e5 + "&key=" + 'AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c' + '&client_key=my_project&limit=8&media_filter=gif');
      const _0x59a8e7 = _0x458670.data.results[i].media_formats.gif.url;
      const _0x453e1a = new Sticker(_0x59a8e7, {
        'pack': _0x1119e8,
        'author': "REDMI-XMD",
        'type': StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x3c,
        'background': "transparent"
      });
      const _0x37895f = await _0x453e1a.toBuffer();
      _0x410f11.sendMessage(_0x28d590, {
        'sticker': _0x37895f
      }, {
        'quoted': _0x3b2e3e
      });
    }
  } catch (_0x38196a) {
    console.error("Erreur lors de la recherche de stickers :", _0x38196a);
    _0x289f81("Erreur lors de la recherche de stickers.");
  }
});
king({
  'nomCom': "attp",
  'categorie': "User",
  'reaction': '🏏'
}, async (_0x55de52, _0x37d4ce, _0x36b24e) => {
  const {
    repondre: _0x29ff87,
    ms: _0x1bba0a,
    arg: _0x4c3324,
    nomAuteurMessage: _0x3420e2
  } = _0x36b24e;
  if (!_0x4c3324[0x0]) {
    _0x29ff87("insert the text to convert into a sticker!");
    return;
  }
  const _0x44aa40 = _0x4c3324.join(" ");
  try {
    for (i = 0x0; i < 0x1; i++) {
      const _0xe3baec = "https://api.maher-zubair.tech/maker/text2gif?q=" + _0x44aa40;
      const _0x231a94 = new Sticker(_0xe3baec, {
        'pack': _0x3420e2,
        'author': "REDMI-XMD",
        'type': StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x28,
        'background': 'transparent'
      });
      const _0x1c54c9 = await _0x231a94.toBuffer();
      _0x37d4ce.sendMessage(_0x55de52, {
        'sticker': _0x1c54c9
      }, {
        'quoted': _0x1bba0a
      });
    }
  } catch (_0x501e8d) {
    console.error("An error occurred from sever:", _0x501e8d);
    _0x29ff87("Error while making that sticker.");
  }
});
king({
  'nomCom': "mygroups",
  'categorie': "User",
  'reaction': '💿'
}, async (_0x533e13, _0x1fb63d, _0x159986) => {
  const {
    ms: _0x1afab1,
    repondre: _0x57421e,
    arg: _0xdf5bb1
  } = _0x159986;
  let _0xe17441 = await _0x1fb63d.groupFetchAllParticipating();
  let _0x4a20b3 = Object.entries(_0xe17441).slice(0x0).map(_0x3142c8 => _0x3142c8[0x1]);
  let _0x2855d8 = _0x4a20b3.map(_0x28bb50 => _0x28bb50.id);
  let _0x2cc748 = "*GROUPS AM IN*\n\n";
  _0x57421e("You are Currently in " + _0x2855d8.length + " groups, REDMI-XMD will send that list in a moment. . .");
  for (let _0x2237a6 of _0x2855d8) {
    let _0x566ab7 = await _0x1fb63d.groupMetadata(_0x2237a6);
    _0x2cc748 += "*GROUP NAME:*- " + _0x566ab7.subject + "\n";
    _0x2cc748 += "*MEMBERS:*- " + _0x566ab7.participants.length + "\n";
    _0x2cc748 += "*GROUP ID:*- " + _0x2237a6 + "\n\n";
  }
  await _0x57421e(_0x2cc748);
});