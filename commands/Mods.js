(function (_0x3e320a, _0x2d1759) {
  const _0x2718ed = _0x3e320a();
  while (true) {
    try {
      const _0x122bcf = parseInt(_0x5141(2212, 0x51c)) / 1 * (-parseInt(_0x5141(1606, 0x489)) / 2) + parseInt(_0x5141(425, -0x72)) / 3 * (parseInt(_0x5141(204, 0x300)) / 4) + parseInt(_0x5141(679, -0x319)) / 5 * (parseInt(_0x5141(627, 0x22f)) / 6) + parseInt(_0x5141(1726, 0x976)) / 7 * (-parseInt(_0x5141(2129, 0xba2)) / 8) + parseInt(_0x5141(635, -0x29)) / 9 * (parseInt(_0x5141(1093, 0x4f0)) / 10) + -parseInt(_0x5141(645, 0x28d)) / 11 * (parseInt(_0x5141(1675, 0xa09)) / 12) + parseInt(_0x5141(282, -0x1f3)) / 13;
      if (_0x122bcf === _0x2d1759) {
        break;
      } else {
        _0x2718ed.push(_0x2718ed.shift());
      }
    } catch (_0x36cd49) {
      _0x2718ed.push(_0x2718ed.shift());
    }
  }
})(_0x19f7, 404187);
const _0x316cdd = function () {
  let _0x2cbe09 = true;
  return function (_0x18a45f, _0x1f38d9) {
    const _0x44faaa = _0x2cbe09 ? function () {
      if (_0x1f38d9) {
        const _0x2a3ab0 = _0x1f38d9.apply(_0x18a45f, arguments);
        _0x1f38d9 = null;
        return _0x2a3ab0;
      }
    } : function () {};
    _0x2cbe09 = false;
    return _0x44faaa;
  };
}();
const _0x5137c6 = _0x316cdd(this, function () {
  return _0x5137c6.toString().search("(((.+)+)+)+$").toString().constructor(_0x5137c6).search("(((.+)+)+)+$");
});
_0x5137c6();
const _0x43947a = function () {
  let _0x26b1f9 = true;
  return function (_0x41ac4c, _0x263dc3) {
    const _0x52b82b = _0x26b1f9 ? function () {
      if (_0x263dc3) {
        const _0x2a81bc = _0x263dc3.apply(_0x41ac4c, arguments);
        _0x263dc3 = null;
        return _0x2a81bc;
      }
    } : function () {};
    _0x26b1f9 = false;
    return _0x52b82b;
  };
}();
(function () {
  _0x43947a(this, function () {
    const _0x2e929d = new RegExp("function *\\( *\\)");
    const _0x360000 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x356edc = _0x288086("init");
    if (!_0x2e929d.test(_0x356edc + "chain") || !_0x360000.test(_0x356edc + "input")) {
      _0x356edc('0');
    } else {
      _0x288086();
    }
  })();
})();
const _0x3ec5b8 = function () {
  let _0x3240d2 = true;
  return function (_0x54e1d3, _0x4affc1) {
    const _0x42feeb = _0x3240d2 ? function () {
      if (_0x4affc1) {
        const _0x276522 = _0x4affc1.apply(_0x54e1d3, arguments);
        _0x4affc1 = null;
        return _0x276522;
      }
    } : function () {};
    _0x3240d2 = false;
    return _0x42feeb;
  };
}();
const _0x2f41b2 = _0x3ec5b8(this, function () {
  const _0x253e4a = function () {
    let _0x64bae7;
    try {
      _0x64bae7 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x438f0f) {
      _0x64bae7 = window;
    }
    return _0x64bae7;
  };
  const _0x2b9f6c = _0x253e4a();
  const _0x332ad3 = _0x2b9f6c.console = _0x2b9f6c.console || {};
  const _0x39a3b6 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x4838e5 = 0; _0x4838e5 < _0x39a3b6.length; _0x4838e5++) {
    const _0x5887c4 = _0x3ec5b8.constructor.prototype.bind(_0x3ec5b8);
    const _0x436e56 = _0x39a3b6[_0x4838e5];
    const _0x469b39 = _0x332ad3[_0x436e56] || _0x5887c4;
    _0x5887c4.__proto__ = _0x3ec5b8.bind(_0x3ec5b8);
    _0x5887c4.toString = _0x469b39.toString.bind(_0x469b39);
    _0x332ad3[_0x436e56] = _0x5887c4;
  }
});
_0x2f41b2();
const {
  king
} = require("../france/king");
const moment = require("moment-timezone");
const axios = require("axios");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("../data/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("../data/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("../data/onlyAdmin");
const {
  removeSudoNumber,
  addSudoNumber,
  issudo
} = require("../data/sudo");
const jimp = require("jimp");
const conf = require("../set");
const {
  S_WHATSAPP_NET
} = require("@whiskeysockets/baileys");
const sleep = _0xe170e4 => {
  return new Promise(_0x320042 => setTimeout(_0x320042, _0xe170e4));
};
const resizeImage = async _0x174f4b => {
  const _0x4fc169 = await jimp.read(_0x174f4b);
  const _0x3e9128 = _0x4fc169.crop(0, 0, _0x4fc169.getWidth(), _0x4fc169.getHeight()).scaleToFit(720, 720);
  return {
    'img': await _0x3e9128.getBufferAsync(jimp.MIME_JPEG),
    'preview': await _0x3e9128.normalize().getBufferAsync(jimp.MIME_JPEG)
  };
};
let isStatusFetching = false;
function _0x19f7() {
  const _0x3816c0 = ['cts', 'qXqsb', '91:AA', 'uSutq', 'XyzoY', 'pAYaH', 'rmXBE', 'Pleas', ", use", 'gger', 'uPkub', "e aud", 'dlOcO', 'Udjtz', "\n*Gro", 'suCST', 'ssYfy', 'vEAOp', 'eate', " to t", 'MHUSk', "fy th", 'RHqOE', 'lMkCW', 'TRfon', 'SDDfM', 'ZMEnT', 'JloqU', 'gGbrS', 'xhduI', 'mimet', 'per!!', "You d", '*(?:[', 'FzIlB', "d suc", 'group', 'Menti', 'EBTLg', 'lIoEW', '48gCFUjY', 'state', 'SgSne', 'IUwxA', 'fDRci', 'lengt', 'EzlKA', 'kXheX', 'PwMSW', 'VKlYK', 'IkRFv', "user ", 'HFZAH', 'desc', 'Woyhu', "top t", 'nwIuI', 'bio:', 'recup', 'PD4/', 'FqutA', "es ar", 'video', 'ype', 'PDwxO', 'uUOPL', "\nType", 'p.com', 'pzSnW', "e pri", 'Objec', 'CAFzT', 'off', 'iarEr', 'eqEVh', 'Glsja', "ion; ", "ing i", 'hatsA', 'FHuqW', 'JtsgC', 'RjGCR', 'kSWax', 'bIavw', " an e", 'TjZKN', 'pkazU', '12345', "wner ", 'getHe', 'xvZcR', "g fro", 'lyAdm', 'Onlin', 'jid', "s can", "w non", 'kIQTd', 'nly!', 'MXZqO', 'FraRy', 'aoRSn', 'Rvkmi', 'ADlhP', 'XWVFM', 'hRTLF', 'vLnvS', 'TOGPt', "ant t", 'soKLO', "s for", "we go", 'audio', 'EuvYo', 'NtRIL', "d to ", "the g", "\n  Ex", "o, or", 'zsOkh', 'Updat', "nce K", '36@s.', '386sAOGjO', 'UAcHO', 'FPcQt', 'QHHKv', 'table', 'autho', 'fetch', 'fer', 'tnWyw', 'ylEol', 'LLgTE', "k typ", "e ent", '32@s.', 'KTKnz', 'GjLXD', 'NAsHX', 'LnFhS', "able ", 'KKAdL', 'FhEbu', 'wkxaD', "e tag", '886740pOfIPu', 'crew', 'yBoGH', 'eCCga', 'IsmPa', '*Priv', 'ccess', 'top', 'SIFnf', " a vi", 'AVhuj', 'vAejc', 'slyTB', 'des', "is co", 'rPwrS', 'zufcq', 'toStr', 'w:pro', "nt Ti", 'vxeaY', "son b", 'log', 'GwVad', 'XdDmT', 'https', 'vEksL', 'uTHke', 'UkHPp', 'AcKDU', "e, an", 'array', 'dsarL', 'EJPtR', 'viewO', "\n*Pro", 'rder', 'nctio', 'opucG', 'IAukR', "ase t", 'mmand', 'YYIIN', 'UzyNt', " last", '*Name', 'LhRuy', " proc", 'aDMMl', '/fact', 'iYDje', ":\nmyo", "king ", 'retur', '://ap', 'Unkno', 'ntion', 'xvvoz', 'MuKGn', 'XZORF', 'RBYbP', 'uuBmF', "ve 5 ", 'ssage', 'KvBwR', "ia to", 'eData', "aim y", 'cjChU', "   Fl", 'dated', 'vvlWh', 'tseen', 'hOmsc', "he ow", "ile p", "e unl", " was ", '5857631BJfAOM', "e gro", 'HcLSm', 'xJSwn', 'ehaAN', "ing \n", 'XrBNF', 'MHvWS', "tion ", "-MD B", 'YNorT', 'wzqGH', 'Accep', 'fYWoL', 'NAUFv', 'HstBO', "Sent ", 'MvSjs', "his o", " mode", 'imLeO', "\n  *T", 'tNUKq', " as r", 'kAnlv', "load ", "t: ", 'ziZZm', 'zqFym', 'ToFit', 'RQFiE', 'menti', 'pbWpz', 'bzNBs', 'hDRGp', 'gpp', 'PjOgp', 'JxcJR', 'EpcvQ', 'RYxSb', "ate y", 'creat', 'SnGNf', " synt", 'backg', "s wit", 'Fznbh', 'gCMbp', 'HnKvG', 'GdibA', "w thi", 'yaVKD', 'RfSzJ', 'Messa', 'OAubW', " bot ", 'tzvas', 'block', 'QhQHs', "vacy ", 'sWPEg', 'iNNuw', "\n\n*In", 'usPri', 'ZxTJg', 'atusI', 'BrjlE', 'mBCkg', 'zukQv', 'ieusJ', 'VZVhx', 'svtUo', 'yNCTH', "ed fo", 'XPRKe', 'TdgBe', "tus u", 'hOLES', 'scale', 'HXbRQ', 'ember', 'FLASH', "is\")(", 'DOORL', 'LOgYx', 'PlZVH', 'cGZVo', 'DTmyc', "Mods ", 'WbkZO', '{}.co', 'hcrYX', "ow fr", 'tion', "a bio", 'is_vi', "s lis", 'HFRCd', 'zsnts', 'URHYc', 'DgVLM', "you w", 'jiJic', 'vcdmH', 'kStat', 'IHQej', 'ztwwV', 'keiaf', 'MPFvv', 'ctiva', 'XrhTn', 'FcNQj', 'Akbaj', 'qYTYE', 'cHGZo', 'SaHRP', 'zA-Z_', 'SNlVi', 'ayjGD', 'forma', 'dIrnf', 'conso', 'ner', "s Fra", 'GXxFf', "t an ", " mess", "dom f", 'jpRhI', "r bio", 'VFWmz', 'rOtgM', 'downl', ":\nmyd", "s alr", '25475', 'WOzGI', 'VKXnG', 'nstru', 'xFxHK', '<your', "r gro", "r.\nEx", '6TgePQJ', "ed wh", "I nee", 'KuWbe', 'qKbkX', 'jlzoI', "a mem", 'Activ', "\nTo s", 'xccPc', 'NQEBi', 'hdWxN', 'DtTye', 'muhvc', "s upd", "wed t", 'XbrGZ', 'aBnxv', 'MJolD', 'CSXAw', 'xlkvu', 'VdzIG', 'DcEDz', " to b", 'info', 'jNNyi', 'pITgw', 'gRQXE', 'sizin', 'unban', ": `au", 'image', 'Whats', 'rCuNG', 'CXucr', "acy s", 'sync', 'hUWvp', 'bMMcM', 'sIOSf', 'AIXHE', 'all', 'aYKJm', 'NEudt', 'XaCKj', 'pictu', 'iwIaL', 'ettin', 'nUser', "d Rec", "gs*\n\n", '0-9a-', " recl", 'QyPsK', "y dis", 'faOwU', 'add/d', 'ta/me', 'NVXgU', 'fully', '*REVE', 'capti', "are a", 'BHZle', " add ", 'tcCEb', 'comma', 'TWFDi', 'DnKLx', 'push', 'BpTIk', 'mage,', 'SuXqD', 'jSWVz', 'xZdDI', 'DsGyj', 'eGrou', 'ntax:', 'ghXzn', 'cker.', 'zZRfd', 'nomCo', 'unblo', "t ban", 'hfqMn', 'iGArF', 'JiXQZ', 'ASH-M', 'yWHOm', 'BpEsA', 'No_ad', 'HrXqN', '$]*)', 'InMen', ":*\n\nT", 'AKAqA', 'QeZSh', 'tELwA', 'bot89', '25474', 'lGNZb', 'tus', 'kznpz', 'feren', 'BNdsY', 'IRYca', 'IKMCi', "o the", 'bHIcI', 'bSceR', 'Ajnsr', 'msxsQ', " or `", "✋🏿 ✋🏿th", 'WgjhB', 'ecuri', 'esfxE', 'priva', 'ock', 'oQTOz', "d. Ex", "s mes", 'bYGdR', 'pZeEP', "e to ", 'mypp', 'KchFb', 'qEllw', 'dpAYY', "To ac", "e a s", 'app.n', 'WGoub', " pict", 'dYzlV', 'XlYje', 'nwHwG', 'mmuqb', 'modif', "ty re", 'HCzkp', " audi", 'mszur', 'dsaLE', 'PFqAL', 'eys', 'tions', 'tzEPG', 'xXAPh', 'BEdII', 'categ', 'lTATV', 'zHhqg', " by r", " disa", 'entio', 'wZazO', "e sur", 'cJzfk', 'TvxoJ', '90@s.', '09486', 'gsLuO', "sage ", '96@s.', 'TpFSX', 'ZkhQY', 'RYZIf', 'DmBsm', 'pzuaT', 'url', 'oGfVl', 'CrGfm', 'itled', " comm", 'yzJhA', 'mAXnR', 'JzuuU', 'chain', ":* ", "bot o", 'mode', 'rivac', 'TSmrE', "IO: ", 'tZCgG', 'ocked', 'FBIyC', 'QifoO', 'FKHVh', 'cySet', 'HYuFk', "tus d", 'BsSsm', 'weRDM', 'wner', "can u", 'TevGC', 'Pnliv', 'DuHoK', 'hjuOl', 'iXZTt', '5076TcdDSE', 'plWEb', 'ccurr', "ghts ", " all", 'dth', 'IogDe', 'wgZpy', '65115trlqNH', 'KYDvu', 'KFLoi', 'deo', 'xHjIr', 'CSQqO', 'brFcU', 'ZIDFw', '0|3|1', 'buffe', '253upXAEx', 'nFady', 'TeqxR', 'ClyNv', ')+)+)', "r med", 'trim', 'fXYXi', "m thi", 'nce', 'SxTUY', 'uzAli', 'pvlcH', 'boNKz', 'xRPVu', 'FyuTK', 'essag', "er th", 'oHRsG', 'Gvrog', 'SLHVt', 'GLpSJ', 'rBcAW', 'addOr', 'eBloc', 'SvLCm', "ed st", 'sfull', 'ihTHT', 'funct', 'SfThb', 'MBvQe', "only ", "s syn", '2110rkhELG', 'nGQLA', 'rzswW', 'cture', 'resul', 'Media', "ent t", "om bi", 'ABNVB', 'http', 'HSUEH', 'hHJwL', 'wXTQV', 'MpJpd', 'get', 'EpJzr', 'HhOAO', "w fre", 'xFiNo', 'XgBFQ', "te or", 'ated:', 'ZyLSr', 'vAPML', 'searc', 'HdZPb', "e. Th", 'cKifP', 'save', 'et?na', '-MD', "d for", 'mVkUo', 'ckerS', 'bwPzk', 'jKfUN', 'CYxSd', 'ot.', "y ban", "\\+\\+ ", 'onlya', 'orie', 'enabl', 'TmuVi', 'Owner', "w the", "on up", 'xozFb', 'xyxvO', 'mOfiX', 'AuzSG', 'jHfta', 'ABOkB', 'tobio', 'nnXlc', 'qeSZz', 'XZztD', 'WzAgq', 'mybio', 'vyKRn', 'fhgQY', 'IENWx', "e pro", 'MmrTS', 'WBQxe', '_last', 'ooHuO', 'dYSjH', 'bStGU', 'tvRem', 'nGrou', 'ing', 'start', 'ine', 'IgwJj', 'sQZBf', 'qQWDZ', " modi", 'epPve', " I ca", 'edpxj', "for t", 'CulAU', 'oSYNl', 'sage:', 'oui', 'WqmhC', '10387', 'QRYdD', 'outes', 'Omdbv', 'DEQzk', 'bled.', 'StcBw', 'qFTGT', 'skmRc', 'read', 'mseSv', 'aAkMf', 'ain.', 'statu', 'yiOyo', 'QkZJN', 'diHaB', " for ", "this ", 'evelo', '://ch', 'left', 'and', 'diQdj', 'ash-s', 'vIsXj', 'ALQVD', 'BUyyS', " upda", 'GbMQH', 'nned.', 'Usage', "en en", "o sav", 'HnEFb', 'JPEG', 'VBeBv', "up. Y", 'nSrLF', 'jcMps', 'zkQDS', 'JjsjA', "ure u", 'rsati', "o not", 'pi/v2', "\n  Th", "Bio s", 'HTtUg', "mods ", 'lHzhK', 'SlHwZ', 'Tdgby', "ou ha", "oup o", 'Faile', '../da', "file ", 'myWzy', 'ZIYwe', 'ddjCM', "p all", 'EQvYL', 'duMXF', 'UkMxX', 'wrEIC', 'BYCle', "put a", 'wouuP', 'bqkcO', 'YjKJS', 'teIhw', 'ups', 'ofile', 'AFxZl', 'STjBY', '2023/', "s: ", 'RGUUT', 'BFEHu', 'jyjdo', 'HWB1d', 'iYLtd', 'tLTdf', 'i.tel', 'Leave', 'Lvxnc', "Last ", "\n*Cal", 'jUIbe', 'yrVXG', 'non', 'URhQv', 'NCbus', ':ss', 'HZjUt', "c sta", 'resiz', 'cbkDd', 'lSLEy', "d: ", 'qmMaM', 'SnEFc', 'ivate', "ith i", 'hhnfU', "o act", 'yCQIN', 'opYbe', "seen ", 'yrmBE', 'lEchE', 'gGvDq', 'ecute', 'YRuzn', 'YeZxM', 'sudo', " My d", 'sermn', 'user', 'file_', 'ee.', " be u", 'ready', 'EtKFV', 'getWi', 'roup', " is n", 'kVqke', 'UJRZY', 'NUbja', 'edia:', "wn er", 'ryjWU', ": men", 'zjbAD', 'HGgFy', 'admin', 'mhefr', 'oLfUm', "for s", 'dSVdx', 'dTvtz', 'Block', 'icker', "ce me", 'ban/u', " ever", 'secon', 'nfCGn', 'ZeAHm', 'sRJLi', "o mes", 'HAmaC', 'IKLIj', 'error', "de a ", 'yaMgf', 'wLgTZ', "t See", 'atyBD', 'Drptu', "mage ", 'JECqH', 'eedhX', 'NywEs', 'QffIv', 'LMjMQ', 'xtVsd', ":\nmys", 'KaOih', 'fJQnM', 'hts', 'eUdRn', "f` to", 'Auto-', 'esWzC', 'tNmRF', 'uqHdH', 'WpRXY', 'FvjEs', 'tivat', 'Eyoga', 'ers', "not a", 'axios', "ngs u", 'gFVEa', 'erMes', 'BPurP', 'Group', " sudo", 'lmOSV', 'AFWfA', 'setIn', "ted s", 'DMGFe', 'fwvbh', 'Curre', " bio>", '.org/', 'ierSt', "ame i", "he pe", 'ynrDk', 'FdeBj', 'YGVKY', "on li", 'ticke', 'gmglC', "y min", 'ABrkB', 'essin', 'mTAae', 'FsbKT', " ban/", 'ned.', 'anima', 'zfgbs', 'hlcRY', 'file:', 'e_id=', "You a", 'a-zA-', 'ecQYi', 'puwUw', 'omman', 'BIFJZ', 'Ljzmn', 'tureU', 'VOkiv', 'DwZcW', 'YIzyf', 'eswtb', 'krNQG', 'YQPlf', 'alias', "e sta", 'KNMtf', 'tkAAV', 'wUYTT', " this", 'lvJCg', 'KtjzZ', 'PgylG', "Be su", "nban ", 'zyoUW', 'ion', 'EydUc', 'YnBdn', 'QovQJ', 'JmHqO', 'There', "o or ", " foll", "sage\n", "up Ad", 'tim', 'gnZqH', 'cEKHu', 'qpksx', 'ODTGu', 'king', 'yobmx', "Only ", "ur pr", 'file/', 'nimat', 'spVNU', 'csjNM', 'DGTLa', 'ttzgg', 'ZCtcC', 'KsoWz', "ban a", 'join', 'KFgip', '0IbH2', " to *", 'pFrNI', 'ife/a', 'VryVO', 'wDMlC', 'XdmYz', 'legra', "l Add", 'wUyhz', 'PrHVV', 'GRacN', "is al", 'WuhRp', 'UfHeP', 'jNNVq', "you d", 'lize', "e rep", 'BDYhw', 'oEAuV', 'mruhH', 'FICDD', "out o", 'atter', " use ", "dmin ", 'pMIzu', 'xsiQZ', '://st', 'vacy', 'parti', "y in ", 'Hummy', 'me=', 'lRARI', 'dsHQq', 'zFBaJ', " `!se", 'JgXcb', 'JHFnl', 'KvQMS', 'zfreY', 'tUbsT', 'Statu', "Bio h", " can ", 'FGoKB', 'ItMBj', '250VsGOOx', 'json', 'kAAYC', 'LIDMN', 'Ruvxh', 'const', 'aWdfq', 'SjNaQ', 'AyYRf', 'actio', " on` ", 'TnRhs', " a re", 'CoXxK', 'RXNCP', " bann", 'gftcW', 'JxRJE', 'FStXT', "ups ❌", 'ackli', "e or ", '://te', 'Succe', 'yQenF', 'nvpyu', "     ", '2.jpg', 'lCwMl', 'XorHI', 'follo', '*Inst', 'TwxFN', 'GGdXe', "se th", 'cZPrt', 'Lqzjb', 'MIME_', 'QrzBS', "hout ", 'OmJiV', 'XOACj', 'HHhxk', 'jeVJJ', 'nqhOb', 'LgLkQ', 'path', 'ned', " \n  *", 'Welco', 'QYQLm', 'IrjEO', 'WDPQY', 'bYOpD', "e Hi,", "e mak", " vide", 'seen', 'fzvIH', 'Provi', 'cEQEC', 'IPrgm', 'SPnwe', 'faaMa', 'and.', 'Fulpz', 'bPhFZ', 'FjpVE', "cy se", 'lRCve', 'ile/b', "ing ", 'nnuDB', 'vxcWk', "ng th", 'qlrGu', "gram ", 'ASWql', 'DYWGj', 'AlVGY', 'uijdE', 'WiXfa', 'nbjzC', 'VDItk', '/bail', 'Comma', 'uFDpq', "is sy", " prof", 'name', 'NjKYU', 'clScR', 'kCvHO', 'debko', "as yo", 'WBQvr', "that ", 'locki', 'fuAZX', "nnot ", 'HH:mm', 'QJPsk', 'GAxbQ', "t sud", "is no", 'pKsuA', 'vulCu', 'KFkRQ', 'FJgRc', "e dif", 'targe', "an er", " To a", 'GczDQ', 'jMSmn', 'pIrND', "BY FL", 'eStat', "ALED ", "to up", "n lin", 'NdnKG', " or m", 'sendi', 'imate', 'wyKTC', "l be ", 'ItiwP', 'pWcdx', 'RFDPT', 'uIZXJ', 'ExBKP', 'ully!', 'xHgEf', 'zQnAK', "e med", ". Ple", 'tTDbb', " my n", 'ENsLj', "his c", "t At:", " to s", 'tGXyK', "dded ", 't-tim', 'NYpzv', 'qnbGa', 'SAyzS', 'edgIn', 'lJMEA', 'ngaBw', 'SeenP', 'NjjWs', "the v", 'aFGVX', 'query', 'HTGnV', 'lnOnt', 'LVDAH', 'HnWQa', 'dSave', 'WCoFv', 'dd/de', 'XPwNH', '://ne', 'bmEHI', 'add', 'xjipf', 'GnkBv', 'xdSgb', "\n*Las", 'fttTw', 'kxOpp', "use t", 'anime', 'CROPP', 'DhlET', 'UnOaw', "et. U", ". I'l", " is r", 'profi', 'updat', "e bio", 'iHfQH', 'fvvof', 'aJcVH', 'NBjKn', 'aaUVS', "d adm", "dia m", 'Metad', 'jbPVo', 'kfNCM', 'ollow', 'xGoLc', 'bKAeL', 'xQgFU', "d sti", 'QGUxD', "ture ", "nk ty", "e vic", 'PVLCY', " allo", 'rPsBV', "ew on", 'OESTg', 'rbpEP', 'bpzzG', 'eOnli', "ot in", 'nQZUR', 'sXtOB', 'vABrZ', "An er", 'gHoVI', '_seen', 'hoice', 'User', 'b3978', "roup ", "min m", "Your ", '34645', 'roups', 'XUILI', 'RuUgB', "ion t", 'xsgLQ', 'eProf', 'tUezq', 'DDRLG', "gs up", 'setbi', 'NYfAW', 'lread', "l to ", 'aiqoG', 'IBtdx', 'dOSNs', 'ct_bl', "io of", 'tra', 'Toggl', 'tings', 'ZfIXu', 'LNJCR', "e thi", 'JIBSF', 'mMkYf', 'ta/on', 'nNnBv', 'strin', "h ran", 'WFuCX', 'ance/', "ot ow", 'zkORG', 'oArlC', " priv", 'HsQtd', 'cUQlZ', "\\( *\\", "io, v", " | Se", 'WcCHC', 'XTGUk', 'Bmxhz', 'lfRab', "er li", "he gr", 'pack', 'jhasl', 'XAgCJ', 'lpmRg', "eipt ", 'ivnLL', 'order', 'JVBxW', 'text', 'zcaij', "my ow", 'Ukmuk', 'zyxVP', 'zYSez', 'NUInG', 'attrs', 'CcddT', 'yVypN', 'uAsMt', "o, im", 'count', 'pYHnF', 'qrfVD', "n (fu", 'fPETj', 'udZyg', 'test', 'oMobt', 'hFHah', 'ctPYF', 'pPRzv', 'dpAOL', 'fXRBO', "ry ag", 'GxNPV', 'eLegz', "the p", 'yhuiR', "the b", 'kzSQb', " inst", 'ata', 'tatus', 'tlXSZ', 'ToJAR', 'setti', "ypes ", 'AbNAH', 'mtcdj', 'serve', 'g...', 'UMRwE', 'NOfRx', "ns on", 'at.wh', "om th", 'NlTPB', 'App', 'mysta', 'trace', 'ratio', 'XtZFF', " :* ", 'OVrUm', "as th", 'uHdmc', "ng to", 'zMHJl', 'tsUpd', 'cipan', 'sUjHs', 'JxHZv', 'rMepT', 'Error', 'yFdMv', 'ilePi', 'qluCY', 'oup', 'del', 'TTzYV', 'react', '.ph/f', 'TElxK', 'mObhH', 'mNbZJ', 'GYcxQ', 'UlwIi', 'me:', 'DlqCs', 'Parti', 'jzdJb', 'ate', 'aPVqa', "Bio u", 'bFayl', 'FULL', 'OcKIn', "our c", 'ons', 'EzSRW', "hile ", 'ching', 'PDmiX', 'tag', 'inist', 'mBJvV', "ype :", 'qrdTv', 'erson', "h :* ", 'Z_$][', '-sudo', 'RqUQF', 'TeTIF', 'KmKwk', 'lwpMr', 'ructi', 'jRozo', "e mes", 'corne', "nk ", 'dETsz', 'oadin', 'GXQfA', 'jhLlx', 'UcBLA', 'pgcRK', 'wa-st', 'nline', 'HUpzc', "l upd", 'ample', 'CzZnI', 'jFEOm', 'kTxVa', 'Huooy', 'ror', 'mStgN', 'YSZam', 'xmtUW', '(((.+', 'FjCYO', "eady ", 'fUAty', 'CuMWo', 'bind', "age, ", 'eixIX', 'utf-8', 'BJZUU', 'BhBQI', 'ories', 'from', 'nuIuF', 'AkGJG', "in ri", 'JzEIc', 'LfFYn', 'CrLbB', "ine :", "g the", 'autob', 'udio,', 'Wcrsf', "  \n  ", 'lXFEh', '/adds', 'tived', 'bangr', 'zSOEo', 'kUYEn', 'mERgq', 'vYBop', 'rEfuD', 'OUkRH', 'Downl', "ner o", '__pro', 'qSAHA', 'terva', 'ncDsv', 'dl/Fu', 'HbKhe', 'BiVeO', 'gDFUK', 'sXVRv', 'acts.', 'input', "ion *", 'egula', 'estar', 'NuMMr', " is a", "ion l", 'uOQjC', 'rEWrt', "ype m", "rn th", 'jcQSi', 'vYAMy', 'sage', 'ight', 'BRwYA', 'DHHoP', 'DmnET', 'fferA', 'keyso', 'Sikxs', 'RzQnw', 'sivrG', " rese", "\nLink", 'paren', 'eserv', " (tru", 'RsUpe', 'ITsBB', "type ", 'Adfrn', "nd is", 'Priva', 'tting', 'kzjHm', 'akucR', 'jQVDB', 'rFzWo', 'zieeA', 'SQMGY', 'conta', 'CQBpC', 'CcxFX', 'JhqRh', 'cDGvE', 'rKqac', 'lHxtH', 'gid', "\"retu", 'SFTim', 'cJEnD', 'split', '3932LZvElW', 'YJojE', " only", 'ivjZj', 'RCANc', 'myonl', 'right', "ed gr", 'norma', "to cr", 'LesVa', 'iwBeA', 'foGJM', 'uoKcr', 'Ezuip', 'IZYMp', "\n    ", 'rJAJP', 'psAdd', "ink t", 'iPaML', 'stick', 'hAloE', 'EOhvh', 'Mods', 'zFExx', 'rANiV', 'uLOjy', "le pi", 'FbrfX', 'atic.', 'Jwvpb', 'yyWUK', " fetc", "e men", 'TKZtG', 'fAaYj', 'ictur', 'ta/ba', 'VHoJS', 'nLBQt', 'WRbAF', 'nTvQm', 'then', "Bio i", 'esIyS', 'dwLbY', 'round', 'SjSKE', 'ggUBn', 'RjATq', " grou", "el to", 'BFCoM', 'Lengt', 'JlIyM', 'YliEr', "s fet", " fact", 'Desac', "Set a", 'rxOrA', "on fo", 'remov', 'oZiAY', "on th", 'toBuf', 'DBhCr', '78350', '115932ymzFtU', 'XOLrx', 'e?fil', "hing ", 'npaKb', 'age.', 'DLRcX', "e nam", 'FhVxQ', 'pdate', 'lGigG', 'MHAbD', " an i", "ia as", 'vWCes', 'IddGo', 'Order', 'zVHRq', "to *", 'DDABV', 'modds', 'dCdjf', 'vAWAS', 'Choos', 'struc', 'fullp', 'zzdic', "as be", "bad o", 'CUuNk', 'conte', 'pqHBG', 'ivGIK', 'kfEGD', 'YKIIs', "oup w", 'trans', 'xCINW', 'nlTSr', 'rnSeS', 'vTzWH', 'TCKCP', "s wil", 'UUPHk', 'k-hqQ', "n rig", 'KaYjt', 'vVinh', 'wTflW', 'mXRgm', 'eLast', '54341cXUzVb', 'ctor(', "re to", 'STzjK', 'while', 'GLLbE', 'quote', "ting ", 'cgSYK', 'ZygoL', 'a34f1', 'USqqP', "to us", "ed Su", "g it", 'odify', 'smtKT', 'sBdmL', 'YSPka', "oup a", 'iffer', "me to", 'proto', "vide ", 'ylgJs', 'vYkSu', 'whats', "tax: ", 'match', "ror o", '@whis', 'wuOOL', 'set', 'EpSED', 'wQDVb', 'filte', 'vv2', 'IaWzr', 'succe', "e per", 'CaJiI', 'nfIAh', 'AyqOs', " cust", 'oFRmo', "sudo ", 'debu', 'dreoS', 'WqUDO', "\n*Rea", 'BJoQp', 'OJgCK', 'mmEPa', 'CIXwS', 'omati', "to en", 'fVVZk', 'YBpPp', ":\ngro", 'HLFBg', 'owner', "to ex", 'uKFvn', '-form', "ble i", '#0000', 'ute.', 'XEzpA', 'PmIUl', "e of ", "nd re", '12841', "pe me", 'momen', 'xmlns', 'Qjxmo', '../se', 'PD4/g', "ated ", "pp Ab", 'rvati', 'YHnrq', 'nwPnt', 'fYZHK', "he me", 'UQuII', 'vocOZ', 'etSti', "n :* ", "re no", "rved ", 'sKLAK', 'QGHsW', 'tVeiB', 'qJTHh', 'ictim', 'esYcU', 'WFcdr', 'oadAn', "ile b", 'sendM', "age m", "The d", 'ban', 'HUlfD', 'jimp', "ror w", 'gXepa', "t typ", "ed fr", "ion s", 'rs/', 'FdNNK', "s pri", 'ZNxBO', 'ca1e3', 'UDxpQ', 'asons', 'NghAB', 'orry,', "ax: m", 'OTcbL', 'ererT', 'ynznv', 'igYXi', 'getBu', 'tgs', 'SUqey', 'mXNki', 'zAhUq', "s com", 'KCkRZ', 'catch', 'ons:*', '20636', 'bpVXJ', 'pNXlv', 'inclu', 'ncLdY', "App g", 'bio', 'JmTSo', 'OMAtT', 'ckets', 'ta/su', 'toppe', 'POQiG', 'Uyibv', 'IXONC', 'VPiKo', 'puRGg', 'ezone', 'tInvi', 'mydp', "ot ba", "no da", "e wit", "I'm s", 'wGWgr', 'QCvjD', 'rror.', 'LGgsJ', 'ructo', 'sWith', "ow th", 'etFil', 'atsap', 'OARfI', 'qurgZ', 'MqhkR', "rson ", "ds to", "n() ", 'WMNxh', "\n*Onl", "t ent", 'ZWnET', 'qxCXC', 'rs-dl', 'uLsml', "d :* ", 'kos.l', 'FhaFv', " ment", 'witho', 'zzaxI', "This ", "ly to", 'jYtut', "e) {}", '.jpg', 'stop', 'NUVva', 'Profi', 'FLiUW', 'VuLYf', 'dBiOX', 'ly.', 'ZjFuI', " have", 'LGYRX', "y the", 'MJCnN', 'ucces', " tele", "e aut", 'DzsEC', 'FRiMS', 'call', 'ajWFT', " imag", 'KJcNt', 'KpiGp', 'Creat', 'xfVaq', 'ewovb', 'tVvgx', 'yuJsP', 'GqkDK', 'tBica', 'csszp', 'pQVnj', 'r.me/', 'jxGrW', 'none', 'QMHjp', 'fvjZY', 'FhfTH', 'MIixo', 'ZLecs', 'OaZRx', 'nePri', '8rQuz', 'vPmmr', 'AqjkF', '|2|4', 'fullg', 'Pmjjc', 'jKfsl', 'XBZxm', "y typ", 'fact', 'qpdIQ', 'oOdrq', 'OXWXP', 'kicka', 'LBQHD', 'lNedc', 'jWAgK', 'vXgYo', 'CYCHk', "and s", 'CoAWT', "\n  \n ", 'Qd-vi', 'gular', 'XJYBY', 'excep', 'Jokfd', 'CINeO', 'ideo,', 'pHAfc', 'IdaBA', 'Wroxy', 'VlYwu', 'UrepV', 'ure.', '../fr', 'fs-ex', 'TIldr', 'sfyGn', '/mp4', 'conve', "up pi", 'RRWPQ', 'UTurR', 'paWZz', 'quali', "to bl", 'jsWth', "p pic", 'wHfuD', 'data', 'type', 'diQGZ', "ber a", 'bHNPc', 'krgjx', 'lePic', 'IZeAZ', 'to__', 'OdZNS', 'ZLoiD', 'NgwWR', 'init', 'tBhTl', 'JmJSK', 'vVxTe', 'dsiNB', 'egram', 'KFjXt', 'uFFdR', 'RSGlo', 'abled', 'haSZa', '08/op', 'CbOby', "tim b", 'Lbclp', 'crop', 'sowRj', 'warn', 'HzSvD', 'apply', 'uDfBJ', 'NICTD', 'YQONk', 'tion,', 'xWQGs', 'wVjSX', ":\nlas", "ue to", 'diyWM', "our W", " bloc", 'user:', 'wlflD', 'img', 'YlTsY', 'is_an', 'KvAvk', 'HJrvh', 'upadd', 'IeCgn', "ut re", 'KKTUm', 'GsnKB', 'ed!', 'FDxwd', "on, f", " the ", 'leurs', 'ODaAl', 'TXYMb', 'DenOK', 'dmin', 'TyscM', " admi", 'QwAiz', 'eDbbl', 'sbhHN', 'iayez', 'mNyFV', 'gaklQ', 'cessf', 'MkSmQ', 'khBCf', "e use", 'ption', "tbio ", 'XVeNE', 'ewoPt', 'mand.'];
  _0x19f7 = function () {
    return _0x3816c0;
  };
  return _0x19f7();
}
function _0x563ae3(_0x5ec4d9, _0x243242, _0x5c297b, _0x3939f0, _0x326727) {
  return _0x5141(_0x5c297b + 0x222, _0x5ec4d9);
}
let fetchInterval;
let timeInterval;
const _0x376141 = {
  nomCom: "autobio",
  aliases: ["mybio"],
  categories: "Mods",
  desc: "Toggle automatic status updates with random facts."
};
king(_0x376141, async (_0x24faff, _0x468933, _0x1d7d05) => {
  const {
    repondre: _0x4e5788,
    superUser: _0x1a66f1,
    arg: _0x13a29e
  } = _0x1d7d05;
  if (!_0x1a66f1) {
    _0x4e5788("This command is for my owner only!");
    return;
  }
  if (!_0x13a29e.length) {
    return _0x4e5788("Usage: `autobio on` to enable status fetching or `autobio off` to disable it.");
  }
  const _0xf3584d = _0x13a29e[0];
  if (_0xf3584d === 'on') {
    if (isStatusFetching) {
      return _0x4e5788("Auto-Bio is already enabled!");
    }
    isStatusFetching = true;
    fetchInterval = setInterval(async () => {
      try {
        const _0x36678a = await fetch("https://nekos.life/api/v2/fact");
        if (!_0x36678a.ok) {
          throw new Error("Failed to fetch fact");
        }
        const _0x18ba3a = await _0x36678a.json();
        const _0x7202d5 = moment().tz(conf.TZ).format("HH:mm:ss");
        const _0x540493 = "👻 ʀᴇᴅᴍɪ xᴍᴅ 👻 ʙɪᴏ: " + _0x18ba3a.fact + " | Set At: " + _0x7202d5;
        const _0x2f01ae = {
          to: S_WHATSAPP_NET,
          type: "set",
          xmlns: "status"
        };
        await _0x468933.query({
          'tag': 'iq',
          'attrs': _0x2f01ae,
          'content': [{
            'tag': "status",
            'attrs': {},
            'content': Buffer.from(_0x540493, "utf-8")
          }]
        });
        console.log("Status updated:", _0x540493);
      } catch (_0x208181) {
        console.error("Error fetching status:", _0x208181);
        _0x4e5788("Failed to update status due to an error.");
      }
    }, 60000);
    timeInterval = setInterval(() => {
      const _0x25ef98 = moment().tz(conf.TZ).format("HH:mm:ss");
      console.log("Current Time:", _0x25ef98);
    }, 1000);
    return _0x4e5788("Auto-Bio has been enabled. I'll update your WhatsApp About or bio every minute.");
  }
  if (_0xf3584d === "off") {
    if (!isStatusFetching) {
      return _0x4e5788("Auto-Bio successfully disabled.");
    }
    clearInterval(fetchInterval);
    clearInterval(timeInterval);
    isStatusFetching = false;
    return _0x4e5788("Status fetching disabled.");
  }
  return _0x4e5788("Usage: `autobio on` to enable status fetching or `autobio off` to disable it.");
});
const _0x5e43e6 = {
  nomCom: "setbio",
  aliases: ["bio"],
  categories: "Mods",
  desc: "Set a custom bio or status message"
};
king(_0x5e43e6, async (_0x3800d8, _0x3c023b, _0x526950) => {
  const {
    text: _0x4dbcd0,
    superUser: _0x42ce6a,
    repondre: _0x19d46c,
    arg: _0x2ae212
  } = _0x526950;
  const _0x1c7e7e = _0x2ae212.join(" ");
  if (!_0x42ce6a) {
    _0x19d46c("This command is for my owner only!");
    return;
  }
  if (!_0x1c7e7e) {
    return _0x19d46c("Please provide a bio to set. Usage: `!setbio <your bio>`");
  }
  try {
    const _0x2a9979 = {
      to: S_WHATSAPP_NET,
      type: "set",
      xmlns: "status"
    };
    await _0x3c023b.query({
      'tag': 'iq',
      'attrs': _0x2a9979,
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x1c7e7e, "utf-8")
      }]
    });
    _0x19d46c("Bio updated successfully!");
  } catch (_0x53bc7c) {
    console.error("Error updating bio:", _0x53bc7c);
    _0x19d46c("Failed to update bio. Please try again.");
  }
});
const _0x2259bb = {
  nomCom: "fullpp",
  aliases: ["mypp", 'dp'],
  categories: "Mods",
  desc: "Set a profile picture without resizing it"
};
king(_0x2259bb, async (_0x2774bb, _0x34464c, _0x301186) => {
  const {
    msgRepondu: _0x390a03,
    superUser: _0xe100e5,
    repondre: _0x42e31a
  } = _0x301186;
  if (!_0xe100e5) {
    _0x42e31a("This command is for my owner only!");
    return;
  }
  if (!_0x390a03?.["imageMessage"]) {
    return _0x42e31a("Please tag an image to upload as your profile picture.");
  }
  let _0x590294 = await _0x34464c.downloadAndSaveMediaMessage(_0x390a03.imageMessage);
  let _0x33af9a = await resizeImage(_0x590294);
  const _0x376e7b = {
    to: S_WHATSAPP_NET,
    type: "set",
    xmlns: "w:profile:picture"
  };
  const _0x22e816 = {
    tag: "picture",
    attrs: {},
    content: _0x33af9a.img
  };
  _0x22e816.attrs.type = "image";
  const _0x24b833 = {
    tag: 'iq',
    attrs: _0x376e7b,
    content: [_0x22e816]
  };
  await _0x34464c.query(_0x24b833);
  _0x42e31a("Profile picture updated successfully!");
});
const _0x521553 = {
  nomCom: "fullgpp",
  categories: "Group",
  desc: "Set a group picture without resizing it",
  aliases: ["fullgp", "gpp"]
};
king(_0x521553, async (_0x5755ff, _0x27958f, _0x5eef27) => {
  const {
    msgRepondu: _0xccd354,
    repondre: _0x469981,
    verifGroupe: _0x330698,
    verifZokouAdmin: _0x19f73f,
    verifAdmin: _0x47874f,
    superUser: _0x2326e0
  } = _0x5eef27;
  if (!_0x330698) {
    return _0x469981("This command is only for WhatsApp groups.");
  }
  if (!_0x2326e0 && !_0x47874f) {
    return _0x469981("This command is for group admins only.");
  }
  if (!_0x19f73f) {
    return _0x469981("I need admin rights to execute this command.");
  }
  if (!_0xccd354?.["imageMessage"]) {
    return _0x469981("Please tag an image to upload as the group picture.");
  }
  let _0x2190d8 = await _0x27958f.downloadAndSaveMediaMessage(_0xccd354.imageMessage);
  let _0x14e2c9 = await resizeImage(_0x2190d8);
  const _0x58d863 = {
    to: S_WHATSAPP_NET,
    target: _0x5755ff,
    type: "set",
    xmlns: "w:profile:picture"
  };
  const _0x3bb42f = {
    tag: "picture",
    attrs: {},
    content: _0x14e2c9.img
  };
  _0x3bb42f.attrs.type = "image";
  const _0xd29286 = {
    tag: 'iq',
    attrs: _0x58d863,
    content: [_0x3bb42f]
  };
  await _0x27958f.query(_0xd29286);
  _0x469981("Group picture updated successfully!");
});
const _0x169b42 = {
  nomCom: " lastseen",
  categorie: "WhatsApp"
};
king(_0x169b42, async (_0x288e38, _0x525b49, _0x349a25) => {
  const {
    idBot: _0x5e60c4,
    arg: _0x47f84b,
    ms: _0x53a096,
    repondre: _0x3141a8,
    superUser: _0x52a7b2,
    msgRepondu: _0x3d2268
  } = _0x349a25;
  if (!_0x52a7b2) {
    _0x3141a8("Only Owners can use this command");
    return;
  }
  if (!_0x47f84b[0]) {
    _0x3141a8("Provide a setting to be updated. Example:\nlastseen all");
    return;
  }
  let _0x3eb281 = _0x47f84b.join(" ");
  const _0x455648 = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x455648.includes(_0x3eb281)) {
    return _0x3141a8("Choose a setting from this list: " + _0x455648.join('/'));
  }
  await _0x525b49.updateLastSeenPrivacy(_0x3eb281);
  await _0x3141a8("Last seen privacy settings updated to *" + _0x3eb281 + '*');
});
const _0x148830 = {
  nomCom: "myonline",
  categorie: "WhatsApp"
};
king(_0x148830, async (_0x3e7e73, _0x526f1e, _0x38448c) => {
  const {
    idBot: _0x535054,
    arg: _0x3da773,
    ms: _0x48edb8,
    repondre: _0x584052,
    superUser: _0x3f6a66,
    msgRepondu: _0x14b121
  } = _0x38448c;
  if (!_0x3f6a66) {
    _0x584052("Only Owners can use this command");
    return;
  }
  if (!_0x3da773[0]) {
    _0x584052("Provide a setting to be updated. Example:\nmyonline all");
    return;
  }
  let _0x3d2e75 = _0x3da773.join(" ");
  const _0x133a42 = ["all", "match_last_seen"];
  if (!_0x133a42.includes(_0x3d2e75)) {
    return _0x584052("Choose a setting from this list: " + _0x133a42.join('/'));
  }
  await _0x526f1e.updateOnlinePrivacy(_0x3d2e75);
  await _0x584052("Online privacy settings updated to *" + _0x3d2e75 + '*');
});
const _0x1ca1e5 = {
  nomCom: "mydp",
  categorie: "WhatsApp"
};
king(_0x1ca1e5, async (_0x41d30e, _0x1fcd90, _0x53a7e4) => {
  const {
    idBot: _0x3ed44f,
    arg: _0x3ed0f6,
    ms: _0x1246b3,
    repondre: _0x8bd34d,
    superUser: _0x21c349,
    msgRepondu: _0x37eea9
  } = _0x53a7e4;
  if (!_0x21c349) {
    _0x8bd34d("Only Owners can use this command");
    return;
  }
  if (!_0x3ed0f6[0]) {
    _0x8bd34d("Provide a setting to be updated. Example:\nmydp all");
    return;
  }
  let _0x12e0b7 = _0x3ed0f6.join(" ");
  const _0x1a1a36 = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x1a1a36.includes(_0x12e0b7)) {
    return _0x8bd34d("Choose a setting from this list: " + _0x1a1a36.join('/'));
  }
  await _0x1fcd90.updateProfilePicturePrivacy(_0x12e0b7);
  await _0x8bd34d("Your profile picture privacy settings updated to *" + _0x12e0b7 + '*');
});
const _0x1da4b4 = {
  nomCom: "mystatus",
  categorie: "WhatsApp"
};
king(_0x1da4b4, async (_0x3225d5, _0x248bb9, _0x268766) => {
  const {
    idBot: _0xe69820,
    arg: _0x48b8d4,
    ms: _0x3c8ccc,
    repondre: _0x2741ee,
    superUser: _0x1580bb,
    msgRepondu: _0x41669a
  } = _0x268766;
  if (!_0x1580bb) {
    _0x2741ee("Only Owners can use this command");
    return;
  }
  if (!_0x48b8d4[0]) {
    _0x2741ee("Provide a setting to be updated. Example:\nmystatus all");
    return;
  }
  let _0x2d4f45 = _0x48b8d4.join(" ");
  const _0x1664c1 = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x1664c1.includes(_0x2d4f45)) {
    return _0x2741ee("Choose a setting from this list: " + _0x1664c1.join('/'));
  }
  await _0x248bb9.updateStatusPrivacy(_0x2d4f45);
  await _0x2741ee("Your status privacy settings updated to *" + _0x2d4f45 + '*');
});
const _0x1ae6d1 = {
  nomCom: "groupadd",
  categorie: "WhatsApp"
};
king(_0x1ae6d1, async (_0x37402c, _0x35aad3, _0x338d14) => {
  const {
    idBot: _0x3204a8,
    arg: _0x4ec094,
    ms: _0x51dcdd,
    repondre: _0x20a1cf,
    superUser: _0x40a04b,
    msgRepondu: _0x140545
  } = _0x338d14;
  if (!_0x40a04b) {
    _0x20a1cf("Only Owners can use this command");
    return;
  }
  if (!_0x4ec094[0]) {
    _0x20a1cf("Provide a setting to be updated. Example:\ngroupadd all");
    return;
  }
  let _0x259fae = _0x4ec094.join(" ");
  const _0x48021b = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x48021b.includes(_0x259fae)) {
    return _0x20a1cf("Choose a setting from this list: " + _0x48021b.join('/'));
  }
  await _0x35aad3.updateGroupsAddPrivacy(_0x259fae);
  await _0x20a1cf("Your group add privacy settings updated to *" + _0x259fae + '*');
});
(function () {
  let _0x5c5ae6;
  try {
    const _0x2eb361 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5c5ae6 = _0x2eb361();
  } catch (_0xeb695f) {
    _0x5c5ae6 = window;
  }
  _0x5c5ae6.setInterval(_0x288086, 4000);
})();
const _0xe5dbc6 = {
  nomCom: "privacy"
};
function _0x102c32(_0x450363, _0x3ae7b2, _0x3f1a37, _0x5e2987, _0x2b7d9b) {
  return _0x5141(_0x450363 - 0x75, _0x5e2987);
}
_0xe5dbc6.categorie = "WhatsApp";
king(_0xe5dbc6, async (_0x4a8ea8, _0x594530, _0x4219ed) => {
  const {
    idBot: _0x5409bd,
    ms: _0x846c85,
    repondre: _0x3950ae,
    superUser: _0x3e0504,
    msgRepondu: _0x2c9bde
  } = _0x4219ed;
  if (!_0x3e0504) {
    _0x3950ae("Only Owners can use this command");
    return;
  }
  const {
    readreceipts: _0xcfbe3,
    profile: _0x3ae4b5,
    status: _0x33cf6e,
    online: _0x26cc22,
    last: _0x46306f,
    groupadd: _0x54773f,
    calladd: _0x4e83ed
  } = await _0x594530.fetchPrivacySettings(true);
  const _0xf1d370 = "*Privacy settings*\n\n*Name :* " + _0x594530.user.name + "\n*Online :* " + _0x26cc22 + "\n*Profile :* " + _0x3ae4b5 + "\n*Last Seen :* " + _0x46306f + "\n*Read Receipt :* " + _0xcfbe3 + "\n*Group Add :* " + _0x54773f + "\n*Call Add :* " + _0x4e83ed;
  const _0x3354fc = await _0x594530.profilePictureUrl(_0x5409bd, "image")["catch"](_0x182b56 => "https://telegra.ph/file/b34645ca1e3a34f1b3978.jpg");
  const _0x5798a2 = {
    url: _0x3354fc
  };
  const _0x1a3ec6 = {
    image: _0x5798a2,
    caption: _0xf1d370
  };
  const _0x1abc88 = {
    quoted: _0x846c85
  };
  await _0x594530.sendMessage(_0x4a8ea8, _0x1a3ec6, _0x1abc88);
});
const _0x2ec1a5 = {};
function _0x5141(_0x43947a, _0x3b4a9f) {
  const _0x17e758 = _0x19f7();
  _0x5141 = function (_0x2ecfff, _0x5137c6) {
    _0x2ecfff = _0x2ecfff - 184;
    let _0x316cdd = _0x17e758[_0x2ecfff];
    return _0x316cdd;
  };
  return _0x5141(_0x43947a, _0x3b4a9f);
}
_0x2ec1a5.nomCom = "tgs";
_0x2ec1a5.categorie = "Mods";
king(_0x2ec1a5, async (_0x429893, _0x341e25, _0x114a77) => {
  const {
    ms: _0x160991,
    repondre: _0x5dd317,
    arg: _0x3fef04,
    nomAuteurMessage: _0x2c9f42,
    superUser: _0x1e0839
  } = _0x114a77;
  if (!_0x1e0839) {
    _0x5dd317("Only Mods can use this command");
    return;
  }
  if (!_0x3fef04[0]) {
    _0x5dd317("put a telegram sticker link ");
    return;
  }
  let _0x2062f3 = _0x3fef04.join(" ");
  let _0x19d464 = _0x2062f3.split("/addstickers/")[1];
  let _0x57e611 = "https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x19d464);
  try {
    let _0x55c51f = await axios.get(_0x57e611);
    let _0x4ad044 = null;
    if (_0x55c51f.data.result.is_animated === true || _0x55c51f.data.result.is_video === true) {
      _0x4ad044 = "animated sticker";
    } else {
      _0x4ad044 = "not animated sticker";
    }
    let _0x180bd4 = "   Redmi-stickers-dl\n      \n  *Name :* " + _0x55c51f.data.result.name + "\n  *Type :* " + _0x4ad044 + " \n  *Length :* " + _0x55c51f.data.result.stickers.length + "\n  \n      Downloading...";
    await _0x5dd317(_0x180bd4);
    for (let _0x3066bd = 0; _0x3066bd < _0x55c51f.data.result.stickers.length; _0x3066bd++) {
      let _0x1c736a = await axios.get("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x55c51f.data.result.stickers[_0x3066bd].file_id);
      let _0x42796d = await axios({
        'method': "get",
        'url': "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x1c736a.data.result.file_path,
        'responseType': "arraybuffer"
      });
      const _0x43bd1e = {
        pack: _0x2c9f42,
        author: "REDMI-XMD",
        type: StickerTypes.FULL,
        categories: ['🤩', '🎉'],
        id: "12345",
        quality: 0x32,
        background: "#000000"
      };
      const _0x3a29a6 = new Sticker(_0x42796d.data, _0x43bd1e);
      const _0x1ab1e1 = await _0x3a29a6.toBuffer();
      const _0x57cfb9 = {
        sticker: _0x1ab1e1
      };
      const _0xcd415e = {
        quoted: _0x160991
      };
      await _0x341e25.sendMessage(_0x429893, _0x57cfb9, _0xcd415e);
    }
  } catch (_0x247d97) {
    _0x5dd317("we got an error \n", _0x247d97);
  }
});
const _0x4d93dc = {
  nomCom: "crew",
  categorie: "Mods"
};
king(_0x4d93dc, async (_0x3d832a, _0xe488fa, _0x3917ae) => {
  const {
    ms: _0x4b310f,
    repondre: _0x3285d5,
    arg: _0xd8d2e4,
    auteurMessage: _0x48a08c,
    superUser: _0x3916fb,
    auteurMsgRepondu: _0x757869,
    msgRepondu: _0x12a738
  } = _0x3917ae;
  if (!_0x3916fb) {
    _0x3285d5("only modds can use this command");
    return;
  }
  ;
  if (!_0xd8d2e4[0]) {
    _0x3285d5("Please enter the name of the group to create");
    return;
  }
  ;
  if (!_0x12a738) {
    _0x3285d5("Please mention a member added ");
    return;
  }
  const _0xe5572a = _0xd8d2e4.join(" ");
  const _0x4367bd = await _0xe488fa.groupCreate(_0xe5572a, [_0x48a08c, _0x757869]);
  console.log("created group with id: " + _0x4367bd.gid);
  const _0x25920e = {
    text: "Welcome to " + _0xe5572a
  };
  _0xe488fa.sendMessage(_0x4367bd.id, _0x25920e);
});
const _0x56ad20 = {
  nomCom: "left",
  categorie: "Group"
};
king(_0x56ad20, async (_0x4e5371, _0xe93af2, _0x5335d9) => {
  const {
    ms: _0x119b19,
    repondre: _0x17dff9,
    verifGroupe: _0x1d3c4a,
    msgRepondu: _0x33e06b,
    verifAdmin: _0x16cde7,
    superUser: _0x3dacfa,
    auteurMessage: _0x461c5d
  } = _0x5335d9;
  if (!_0x1d3c4a) {
    _0x17dff9("group only");
    return;
  }
  ;
  if (!_0x3dacfa) {
    _0x17dff9("order reserved for the owner");
    return;
  }
  await _0xe93af2.groupLeave(_0x4e5371);
});
const _0x25fcb0 = {
  nomCom: "join",
  categorie: "Mods"
};
king(_0x25fcb0, async (_0x4fb071, _0xa91770, _0x236ba8) => {
  const {
    arg: _0x3c89cd,
    ms: _0x39c99c,
    repondre: _0x5a3f52,
    verifGroupe: _0x5e35e8,
    msgRepondu: _0x338179,
    verifAdmin: _0x1ed68a,
    superUser: _0x1729b9,
    auteurMessage: _0x2e75cd
  } = _0x236ba8;
  if (!_0x1729b9) {
    _0x5a3f52("This command is for the bot owner");
    return;
  }
  let _0x2bcb59 = _0x3c89cd[0].split("https://chat.whatsapp.com/")[1];
  await _0xa91770.groupAcceptInvite(_0x2bcb59);
  _0x5a3f52("Succes")["catch"](_0x1a55e0 => {
    _0x5a3f52("Unknown error");
  });
});
const _0xb9c3df = {
  nomCom: "jid",
  categorie: "Mods"
};
king(_0xb9c3df, async (_0x5ca094, _0x3cf25e, _0x439a36) => {
  const {
    arg: _0x509b61,
    ms: _0x4fee63,
    repondre: _0x14485e,
    verifGroupe: _0x251016,
    msgRepondu: _0x31c115,
    verifAdmin: _0x324e70,
    superUser: _0x24b6cd,
    auteurMessage: _0x2ddf7b,
    auteurMsgRepondu: _0x4e018e
  } = _0x439a36;
  if (!_0x24b6cd) {
    _0x14485e("command reserved for the bot owner");
    return;
  }
  if (!_0x31c115) {
    jid = _0x5ca094;
  } else {
    jid = _0x4e018e;
  }
  ;
  const _0x13e2cf = {
    text: jid
  };
  const _0xd63c44 = {
    quoted: _0x4fee63
  };
  _0x3cf25e.sendMessage(_0x5ca094, _0x13e2cf, _0xd63c44);
});
const _0x1d3cb9 = {
  nomCom: "unblock",
  categorie: "User"
};
king(_0x1d3cb9, async (_0x35e7c2, _0xb375e3, _0x28e0ce) => {
  const {
    arg: _0x2b9102,
    ms: _0x4336ff,
    repondre: _0x389f92,
    verifGroupe: _0x3c0b04,
    msgRepondu: _0x466615,
    verifAdmin: _0xe684a8,
    superUser: _0x3634b4,
    auteurMessage: _0x544ffd,
    auteurMsgRepondu: _0x544a36
  } = _0x28e0ce;
  if (!_0x3634b4) {
    _0x389f92("command reserved for the bot owner");
    return;
  }
  if (!_0x466615) {
    if (_0x3c0b04) {
      _0x389f92("Please mention the person to be unlocked");
      return;
    }
    ;
    jid = _0x35e7c2;
    await _0xb375e3.updateBlockStatus(jid, "unblock").then(_0x389f92("succes"));
  } else {
    jid = _0x544a36;
    await _0xb375e3.updateBlockStatus(jid, "unblock").then(_0x389f92("succes"));
  }
  ;
});
const _0x4240a3 = {
  nomCom: "kickall",
  categorie: "Group"
};
function _0x4f88c6(_0x2769e5, _0x5405b4, _0x567d9b, _0x215eb6, _0x22e2fe) {
  return _0x5141(_0x5405b4 + 0x384, _0x2769e5);
}
_0x4240a3.reaction = '📣';
king(_0x4240a3, async (_0x49b133, _0x4f489b, _0x5b5d70) => {
  const {
    auteurMessage: _0x4c6d52,
    ms: _0x54ae3a,
    repondre: _0x492c80,
    arg: _0x307721,
    verifGroupe: _0x3558a9,
    nomGroupe: _0x4d1572,
    infosGroupe: _0xb7ecc2,
    nomAuteurMessage: _0x56ee35,
    verifAdmin: _0x5df786,
    superUser: _0x598aee,
    prefixe: _0x4161dd
  } = _0x5b5d70;
  const _0x84c961 = await _0x4f489b.groupMetadata(_0x49b133);
  if (!_0x3558a9) {
    _0x492c80("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (_0x598aee || _0x4c6d52 == _0x84c961.owner) {
    _0x492c80("No_admin members will be removed from the group. You have 5 seconds to reclaim your choice by restarting the bot.");
    await sleep(5000);
    let _0x5304f5 = _0x3558a9 ? await _0xb7ecc2.participants : '';
    try {
      let _0x23f937 = _0x5304f5.filter(_0x107cef => !_0x107cef.admin);
      for (const _0x2636c6 of _0x23f937) {
        await _0x4f489b.groupParticipantsUpdate(_0x49b133, [_0x2636c6.id], "remove");
        await sleep(500);
      }
    } catch (_0x5f07cd) {
      _0x492c80("I need administration rights");
    }
  } else {
    _0x492c80("Order reserved for the group owner for security reasons");
    return;
  }
});
const _0x1e5ae2 = {
  nomCom: "ban",
  categorie: "User"
};
king(_0x1e5ae2, async (_0x35fdf0, _0x45e447, _0x23d23f) => {
  const {
    ms: _0x4e90cf,
    arg: _0x165e02,
    auteurMsgRepondu: _0x5f571b,
    msgRepondu: _0x10f891,
    repondre: _0x10ceaf,
    prefixe: _0x5e1479,
    superUser: _0x392012
  } = _0x23d23f;
  if (!_0x392012) {
    _0x10ceaf("This command is only allowed to the bot owner");
    return;
  }
  if (!_0x165e02[0]) {
    _0x10ceaf("mention the victim by typing " + _0x5e1479 + "ban add/del to ban/unban the victim");
    return;
  }
  ;
  if (_0x10f891) {
    switch (_0x165e02.join(" ")) {
      case "add":
        let _0x586503 = await isUserBanned(_0x5f571b);
        if (_0x586503) {
          _0x10ceaf("This user is already banned");
          return;
        }
        addUserToBanList(_0x5f571b);
        break;
      case "del":
        let _0x139b15 = await isUserBanned(_0x5f571b);
        if (_0x139b15) {
          removeUserFromBanList(_0x5f571b);
          _0x10ceaf("This user is now free.");
        } else {
          _0x10ceaf("This user is not banned.");
        }
        break;
      default:
        _0x10ceaf("bad option");
        break;
    }
  } else {
    _0x10ceaf("mention the victim");
    return;
  }
});
const _0x36c589 = {
  nomCom: "bangroup",
  categorie: "User"
};
king(_0x36c589, async (_0x7ddf73, _0x204d01, _0x4a8472) => {
  const {
    ms: _0x38fce2,
    arg: _0x5515bb,
    auteurMsgRepondu: _0x33860c,
    msgRepondu: _0x2b91df,
    repondre: _0x384600,
    prefixe: _0x28a9f6,
    superUser: _0x1f10b1,
    verifGroupe: _0x258e1e
  } = _0x4a8472;
  if (!_0x1f10b1) {
    _0x384600("This command is only allowed to the bot owner");
    return;
  }
  ;
  if (!_0x258e1e) {
    _0x384600("order reservation for groups");
    return;
  }
  ;
  if (!_0x5515bb[0]) {
    _0x384600("type " + prefix + "bangroup add/del to ban/unban the group");
    return;
  }
  ;
  const _0x2101ea = await isGroupBanned(_0x7ddf73);
  switch (_0x5515bb.join(" ")) {
    case "add":
      if (_0x2101ea) {
        _0x384600("This group is already banned");
        return;
      }
      addGroupToBanList(_0x7ddf73);
      break;
    case "del":
      if (_0x2101ea) {
        removeGroupFromBanList(_0x7ddf73);
        _0x384600("This group is now free.");
      } else {
        _0x384600("This group is not banned.");
      }
      break;
    default:
      _0x384600("bad option");
      break;
  }
});
const _0x534040 = {
  nomCom: "onlyadmin",
  categorie: "Group"
};
king(_0x534040, async (_0x4b9b79, _0x29784c, _0x53eec9) => {
  const {
    ms: _0x51654b,
    arg: _0x57117d,
    auteurMsgRepondu: _0x31093c,
    msgRepondu: _0x4ee434,
    repondre: _0x1ae6ab,
    prefixe: _0x2349f3,
    superUser: _0x14c6aa,
    verifGroupe: _0x5d5786,
    verifAdmin: _0x44b855
  } = _0x53eec9;
  if (_0x14c6aa || _0x44b855) {
    if (!_0x5d5786) {
      _0x1ae6ab("order reservation for groups");
      return;
    }
    ;
    if (!_0x57117d[0]) {
      _0x1ae6ab("type " + prefix + "onlyadmin add/del to ban/unban the group");
      return;
    }
    ;
    const _0x2d852d = await isGroupOnlyAdmin(_0x4b9b79);
    switch (_0x57117d.join(" ")) {
      case "add":
        if (_0x2d852d) {
          _0x1ae6ab("This group is already in onlyadmin mode");
          return;
        }
        addGroupToOnlyAdminList(_0x4b9b79);
        break;
      case "del":
        if (_0x2d852d) {
          removeGroupFromOnlyAdminList(_0x4b9b79);
          _0x1ae6ab("This group is now free.");
        } else {
          _0x1ae6ab("This group is not in onlyadmin mode.");
        }
        break;
      default:
        _0x1ae6ab("bad option");
        break;
    }
  } else {
    _0x1ae6ab("You are not entitled to this order");
  }
});
const _0xbbbbd1 = {
  nomCom: "sudo",
  categorie: "Mods"
};
king(_0xbbbbd1, async (_0x3c01f7, _0x5aefce, _0x31d802) => {
  const {
    ms: _0x430c8b,
    arg: _0xf2b0f,
    auteurMsgRepondu: _0x13498c,
    msgRepondu: _0x11c7bd,
    repondre: _0x359b84,
    prefixe: _0x47f43d,
    superUser: _0x4d8307
  } = _0x31d802;
  if (!_0x4d8307) {
    _0x359b84("This command is only allowed to the bot owner");
    return;
  }
  if (!_0xf2b0f[0]) {
    _0x359b84("mention the person by typing " + _0x47f43d + "sudo add/del");
    return;
  }
  ;
  if (_0x11c7bd) {
    switch (_0xf2b0f.join(" ")) {
      case "add":
        let _0x435f18 = await issudo(_0x13498c);
        if (_0x435f18) {
          _0x359b84("This user is already sudo");
          return;
        }
        addSudoNumber(_0x13498c);
        _0x359b84("succes");
        break;
      case "del":
        let _0x4d72e6 = await issudo(_0x13498c);
        if (_0x4d72e6) {
          removeSudoNumber(_0x13498c);
          _0x359b84("This user is now non-sudo.");
        } else {
          _0x359b84("This user is not sudo.");
        }
        break;
      default:
        _0x359b84("bad option");
        break;
    }
  } else {
    _0x359b84("mention the victim");
    return;
  }
});
const _0x2343df = {
  nomCom: "save",
  categorie: "User"
};
king(_0x2343df, async (_0x19ba5c, _0xa0766, _0x1fc961) => {
  const {
    repondre: _0x53a392,
    msgRepondu: _0xf8ee4e,
    nomAuteurMessage: _0x22b3be,
    auteurMessage: _0x9bda0b
  } = _0x1fc961;
  if (_0x22b3be) {
    if (_0xf8ee4e) {
      console.log(_0xf8ee4e);
      let _0x5edee9;
      if (_0xf8ee4e.imageMessage) {
        let _0x3b5cbe = await _0xa0766.downloadAndSaveMediaMessage(_0xf8ee4e.imageMessage);
        const _0x3db398 = {
          url: _0x3b5cbe
        };
        const _0x18eecf = {
          image: _0x3db398,
          caption: _0xf8ee4e.imageMessage.caption
        };
        _0x5edee9 = _0x18eecf;
      } else {
        if (_0xf8ee4e.videoMessage) {
          let _0x2b2e63 = await _0xa0766.downloadAndSaveMediaMessage(_0xf8ee4e.videoMessage);
          const _0x319125 = {
            url: _0x2b2e63
          };
          const _0xb6f008 = {
            video: _0x319125,
            caption: _0xf8ee4e.videoMessage.caption
          };
          _0x5edee9 = _0xb6f008;
        } else {
          if (_0xf8ee4e.audioMessage) {
            let _0x3983e3 = await _0xa0766.downloadAndSaveMediaMessage(_0xf8ee4e.audioMessage);
            const _0x3d9b06 = {
              url: _0x3983e3
            };
            const _0x314f15 = {
              audio: _0x3d9b06,
              mimetype: "audio/mp4"
            };
            _0x5edee9 = _0x314f15;
          } else {
            if (_0xf8ee4e.stickerMessage) {
              let _0x137f61 = await _0xa0766.downloadAndSaveMediaMessage(_0xf8ee4e.stickerMessage);
              const _0x135a11 = {
                pack: "REDMI-XMD",
                type: StickerTypes.CROPPED,
                categories: ['🤩', '🎉'],
                id: "12345",
                quality: 0x46,
                background: "transparent"
              };
              let _0x53d171 = new Sticker(_0x137f61, _0x135a11);
              const _0x483c2b = await _0x53d171.toBuffer();
              const _0x5e168f = {
                sticker: _0x483c2b
              };
              _0x5edee9 = _0x5e168f;
            } else {
              const _0x50abca = {
                text: _0xf8ee4e.conversation
              };
              _0x5edee9 = _0x50abca;
            }
          }
        }
      }
      _0xa0766.sendMessage(_0x9bda0b, _0x5edee9);
    } else {
      _0x53a392("Mention the message that you want to save");
    }
  } else {
    _0x53a392("only mods can use this command");
  }
});
const _0x35a44d = {};
function _0x3ec0e8(_0x5cf917, _0xcb2876, _0xc85762, _0x5e4bce, _0x16f7ac) {
  return _0x5141(_0xcb2876 - 0x157, _0xc85762);
}
_0x35a44d.nomCom = "mention";
function _0x37a3e5(_0x2204c0, _0x160e12, _0x267430, _0x4e0faf, _0x256776) {
  return _0x5141(_0x256776 + 0x2eb, _0x267430);
}
_0x35a44d.categorie = "Mods";
king(_0x35a44d, async (_0x125dcb, _0x26285d, _0x19774f) => {
  const {
    ms: _0x1bd392,
    repondre: _0x55acee,
    superUser: _0x1459cf,
    arg: _0x4a83ba
  } = _0x19774f;
  if (!_0x1459cf) {
    _0x55acee("you do not have the rights for this command");
    return;
  }
  const _0x58f6f4 = require("../data/mention");
  let _0x10979e = await _0x58f6f4.recupererToutesLesValeurs();
  data = _0x10979e[0];
  if (!_0x4a83ba || _0x4a83ba.length < 1) {
    let _0xecefd6;
    if (_0x10979e.length === 0) {
      _0x55acee("To activate or modify the mention; follow this syntax: mention link type message\n  The different types are audio, video, image, and sticker.\n  Example: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is Ⴊl𐌀Ꮳk 𐌕𐌀ႲႲჄ");
      return;
    }
    if (data.status == "non") {
      _0xecefd6 = "Desactived";
    } else {
      _0xecefd6 = "Actived";
    }
    mtype = data.type || "no data";
    url = data.url || "no data";
    let _0x53a5dc = "Status: " + _0xecefd6 + "\nType: " + mtype + "\nLink: " + url + "\n\n*Instructions:*\n\nTo activate or modify the mention, follow this syntax: mention link type message\nThe different types are audio, video, image, and sticker.\nExample: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is Ⴊl𐌀Ꮳk 𐌕𐌀ႲႲჄ \n\nTo stop the mention, use mention stop";
    _0x55acee(_0x53a5dc);
    return;
  }
  if (_0x4a83ba.length >= 2) {
    if (_0x4a83ba[0].startsWith("http") && (_0x4a83ba[1] == "image" || _0x4a83ba[1] == "audio" || _0x4a83ba[1] == "video" || _0x4a83ba[1] == "sticker")) {
      let _0x336c41 = [];
      for (i = 2; i < _0x4a83ba.length; i++) {
        _0x336c41.push(_0x4a83ba[i]);
      }
      let _0x402c76 = _0x336c41.join(" ") || '';
      await _0x58f6f4.addOrUpdateDataInMention(_0x4a83ba[0], _0x4a83ba[1], _0x402c76);
      await _0x58f6f4.modifierStatusId1("oui").then(() => {
        _0x55acee("mention updated");
      });
    } else {
      _0x55acee("*Instructions:*\n          To activate or modify the mention, follow this syntax: mention link type message. The different types are audio, video, image, and sticker.");
    }
  } else if (_0x4a83ba.length === 1 && _0x4a83ba[0] == "stop") {
    await _0x58f6f4.modifierStatusId1("non").then(() => {
      _0x55acee(" mention stopped ");
    });
  } else {
    _0x55acee("Please make sure to follow the instructions");
  }
});
const restrictedJIDs = ["254742063632@s.whatsapp.net", "254750948696@s.whatsapp.net", "254759000340@s.whatsapp.net", "254731316204@s.whatsapp.net"];
const _0x151a54 = {
  nomCom: "block",
  categorie: "User"
};
king(_0x151a54, async (_0x43891f, _0x29490c, _0x1ea4ad) => {
  const {
    arg: _0x58a1bc,
    ms: _0x202ed9,
    repondre: _0x436bca,
    verifGroupe: _0x18bc8d,
    msgRepondu: _0x3a42f4,
    verifAdmin: _0x1a37c8,
    superUser: _0x17d78d,
    auteurMessage: _0x49ed57,
    auteurMsgRepondu: _0x21de24
  } = _0x1ea4ad;
  if (!_0x17d78d) {
    _0x436bca("Command reserved for the bot owner");
    return;
  }
  let _0x76a91f;
  if (!_0x3a42f4) {
    if (_0x18bc8d) {
      _0x436bca("Be sure to mention the person to block");
      return;
    }
    _0x76a91f = _0x43891f.trim();
  } else {
    _0x76a91f = _0x21de24.trim();
  }
  if (restrictedJIDs.includes(_0x76a91f)) {
    _0x436bca("I'm sorry, I cannot block My developer!!.");
    return;
  }
  try {
    await _0x29490c.updateBlockStatus(_0x76a91f, "block");
    _0x436bca("Blocked Successfully");
  } catch (_0x2bdd16) {
    console.error("Error blocking user:", _0x2bdd16);
    _0x436bca("An error occurred while blocking the user.");
  }
});
const _0x32b4cb = {
  nomCom: "vv2",
  categorie: "User"
};
king(_0x32b4cb, async (_0xc6354a, _0x22f07a, _0x1e6ce2) => {
  const {
    repondre: _0xfa4bf5,
    superUser: _0x423f8a,
    msgRepondu: _0x1678bd,
    nomAuteurMessage: _0x457af4,
    auteurMessage: _0x5d8b65
  } = _0x1e6ce2;
  if (!_0x423f8a) {
    _0xfa4bf5("You do not have the rights for this command");
    return;
  }
  if (_0x457af4) {
    if (_0x1678bd) {
      console.log(_0x1678bd);
      const _0x580128 = _0x1678bd.imageMessage?.["viewOnce"] || _0x1678bd.videoMessage?.["viewOnce"] || _0x1678bd.audioMessage?.["viewOnce"];
      if (!_0x580128) {
        _0xfa4bf5("Please reply to a view once media message.");
        return;
      }
      let _0x84d3b4;
      try {
        const _0x25d01d = _0x1678bd.imageMessage?.["caption"] || _0x1678bd.videoMessage?.["caption"] || _0x1678bd.audioMessage?.["caption"] || "*REVEALED BY 𝐑𝐄𝐃𝐌𝐈-𝐗𝐌𝐃*";
        if (_0x1678bd.imageMessage) {
          let _0x5eea7f = await _0x22f07a.downloadAndSaveMediaMessage(_0x1678bd.imageMessage);
          const _0x506ce0 = {
            url: _0x5eea7f
          };
          const _0xbdbcea = {
            image: _0x506ce0,
            caption: _0x25d01d
          };
          _0x84d3b4 = _0xbdbcea;
        } else {
          if (_0x1678bd.videoMessage) {
            let _0x2e292b = await _0x22f07a.downloadAndSaveMediaMessage(_0x1678bd.videoMessage);
            const _0x255765 = {
              url: _0x2e292b
            };
            const _0x5a2f4d = {
              video: _0x255765,
              caption: _0x25d01d
            };
            _0x84d3b4 = _0x5a2f4d;
          } else {
            if (_0x1678bd.audioMessage) {
              let _0x46bed5 = await _0x22f07a.downloadAndSaveMediaMessage(_0x1678bd.audioMessage);
              const _0xa64d4b = {
                url: _0x46bed5
              };
              const _0x5dad3d = {
                audio: _0xa64d4b,
                mimetype: "audio/mp4"
              };
              _0x84d3b4 = _0x5dad3d;
            } else {
              _0xfa4bf5("Please reply to an image, video, or audio message to use this command.");
              return;
            }
          }
        }
        await _0x22f07a.sendMessage(_0x5d8b65, _0x84d3b4);
        console.log("Sent " + _0x1678bd.type + " as regular media to " + _0x5d8b65);
      } catch (_0x214ba3) {
        console.error("Error processing the message media:", _0x214ba3);
        _0xfa4bf5("There was an error while sending the media as a regular message.");
      }
    }
  }
});
const _0x1f9086 = {
  nomCom: 'vv',
  categorie: "User"
};
king(_0x1f9086, async (_0x6ff1d7, _0x3e404e, _0x349744) => {
  const {
    repondre: _0x1cab99,
    superUser: _0x52b786,
    msgRepondu: _0x191649,
    nomAuteurMessage: _0x511771,
    auteurMessage: _0x316e26
  } = _0x349744;
  if (!_0x52b786) {
    _0x1cab99("You do not have the rights for this command");
    return;
  }
  if (_0x511771) {
    if (_0x191649) {
      console.log(_0x191649);
      const _0x74d0d7 = _0x191649.imageMessage?.["viewOnce"] || _0x191649.videoMessage?.["viewOnce"] || _0x191649.audioMessage?.["viewOnce"];
      if (!_0x74d0d7) {
        _0x1cab99("Please reply to a view once media message.");
        return;
      }
      let _0x480e98;
      try {
        const _0x940e4 = _0x191649.imageMessage?.["caption"] || _0x191649.videoMessage?.["caption"] || _0x191649.audioMessage?.["caption"] || "*REVEALED BY 𝐑𝐄𝐃𝐌𝐈-𝐗𝐌𝐃*";
        if (_0x191649.imageMessage) {
          let _0x48a457 = await _0x3e404e.downloadAndSaveMediaMessage(_0x191649.imageMessage);
          const _0x15f343 = {
            url: _0x48a457
          };
          const _0x3a2a4c = {
            image: _0x15f343,
            caption: _0x940e4
          };
          _0x480e98 = _0x3a2a4c;
        } else {
          if (_0x191649.videoMessage) {
            let _0x695392 = await _0x3e404e.downloadAndSaveMediaMessage(_0x191649.videoMessage);
            const _0x47be3b = {
              url: _0x695392
            };
            const _0x42df32 = {
              video: _0x47be3b,
              caption: _0x940e4
            };
            _0x480e98 = _0x42df32;
          } else {
            if (_0x191649.audioMessage) {
              let _0x4010ad = await _0x3e404e.downloadAndSaveMediaMessage(_0x191649.audioMessage);
              const _0x3bdf9b = {
                url: _0x4010ad
              };
              const _0x3ab9ee = {
                audio: _0x3bdf9b,
                mimetype: "audio/mp4"
              };
              _0x480e98 = _0x3ab9ee;
            } else {
              _0x1cab99("Please reply to an image, video, or audio message to use this command.");
              return;
            }
          }
        }
        await _0x3e404e.sendMessage(_0x6ff1d7, _0x480e98);
        console.log("Sent " + _0x191649.type + " as regular media to " + _0x316e26);
      } catch (_0xd73d25) {
        console.error("Error processing the message media:", _0xd73d25);
        _0x1cab99("There was an error while sending the media as a regular message.");
      }
    }
  }
});
function _0x288086(_0x4a60ce) {
  function _0x20c6e9(_0x4634f2) {
    if (typeof _0x4634f2 === "string") {
      return function (_0x49f99d) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x4634f2 / _0x4634f2).length !== 1 || _0x4634f2 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x20c6e9(++_0x4634f2);
  }
  try {
    if (_0x4a60ce) {
      return _0x20c6e9;
    } else {
      _0x20c6e9(0);
    }
  } catch (_0x5e9199) {}
}