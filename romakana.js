//
// romakana = new Romakana();
// kana = romakana.roma2hiragana(hiragana_string);
//

function Romakana(){
    this.rktable = [
	[",", "、", "、"],
	["-", "ー", "ー"],
	[".", "。", "。"],
	["a", "あ", "ア"],
	["ba", "ば", "バ"],
	["be", "べ", "ベ"],
	["bi", "び", "ビ"],
	["bo", "ぼ", "ボ"],
	["bu", "ぶ", "ブ"],
	["bya", "びゃ", "ビャ"],
	["bye", "びぇ", "ビェ"],
	["byi", "びぃ", "ビィ"],
	["byo", "びょ", "ビョ"],
	["byu", "びゅ", "ビュ"],
	["ca", "か", "カ"],
	["ce", "せ", "セ"],
	["cha", "ちゃ", "チャ"],
	["che", "ちぇ", "チェ"],
	["chi", "ち", "チ"],
	["cho", "ちょ", "チョ"],
	["chu", "ちゅ", "チュ"],
	["ci", "し", "シ"],
	["co", "こ", "コ"],
	["cu", "く", "ク"],
	["cya", "ちゃ", "チャ"],
	["cye", "ちぇ", "チェ"],
	["cyi", "ちぃ", "チィ"],
	["cyo", "ちょ", "チョ"],
	["cyu", "ちゅ", "チュ"],
	["da", "だ", "ダ"],
	["de", "で", "デ"],
	["dha", "でゃ", "デャ"],
	["dhe", "でぇ", "デェ"],
	["dhi", "でぃ", "ディ"],
	["dho", "でょ", "デョ"],
	["dhu", "でゅ", "デュ"],
	["di", "ぢ", "ヂ"],
	["do", "ど", "ド"],
	["du", "づ", "ヅ"],
	["dya", "ぢゃ", "ヂャ"],
	["dye", "ぢぇ", "ヂェ"],
	["dyi", "ぢぃ", "ヂィ"],
	["dyo", "ぢょ", "ヂョ"],
	["dyu", "でゅ", "デュ"],
	["e", "え", "エ"],
	["fa", "ふぁ", "ファ"],
	["fe", "ふぇ", "フェ"],
	["fi", "ふぃ", "フィ"],
	["fo", "ふぉ", "フォ"],
	["fu", "ふ", "フ"],
	["ga", "が", "ガ"],
	["ge", "げ", "ゲ"],
	["gi", "ぎ", "ギ"],
	["go", "ご", "ゴ"],
	["gu", "ぐ", "グ"],
	["gwa", "ぐぁ", "グァ"],
	["gwe", "ぐぇ", "グェ"],
	["gwi", "ぐぃ", "グィ"],
	["gwo", "ぐぉ", "グォ"],
	["gwu", "ぐ", "グ"],
	["gya", "ぎゃ", "ギャ"],
	["gye", "ぎぇ", "ギェ"],
	["gyi", "ぎぃ", "ギィ"],
	["gyo", "ぎょ", "ギョ"],
	["gyu", "ぎゅ", "ギュ"],
	["ha", "は", "ハ"],
	["he", "へ", "ヘ"],
	["hi", "ひ", "ヒ"],
	["ho", "ほ", "ホ"],
	["hu", "ふ", "フ"],
	["hya", "ひゃ", "ヒャ"],
	["hye", "ひぇ", "ヒェ"],
	["hyi", "ひぃ", "ヒィ"],
	["hyo", "ひょ", "ヒョ"],
	["hyu", "ひゅ", "ヒュ"],
	["i", "い", "イ"],
	["ja", "じゃ", "ジャ"],
	["je", "じぇ", "ジェ"],
	["ji", "じ", "ジ"],
	["jo", "じょ", "ジョ"],
	["ju", "じゅ", "ジュ"],
	["jya", "じゃ", "ジャ"],
	["jye", "じぇ", "ジェ"],
	["jyi", "じぃ", "ジィ"],
	["jyo", "じょ", "ジョ"],
	["jyu", "じゅ", "ジュ"],
	["ka", "か", "カ"],
	["ke", "け", "ケ"],
	["ki", "き", "キ"],
	["ko", "こ", "コ"],
	["ku", "く", "ク"],
	["kwa", "くゎ", "クヮ"],
	["kwe", "くぇ", "クェ"],
	["kwi", "くぃ", "クィ"],
	["kwo", "くぉ", "クォ"],
	["kwu", "く", "ク"],
	["kya", "きゃ", "キャ"],
	["kye", "きぇ", "キェ"],
	["kyi", "きぃ", "キィ"],
	["kyo", "きょ", "キョ"],
	["kyu", "きゅ", "キュ"],
	["la", "ぁ", "ァ"],
	["le", "ぇ", "ェ"],
	["li", "ぃ", "ィ"],
	["lo", "ぉ", "ォ"],
	["lu", "ぅ", "ゥ"],
	["lwa", "ゎ", "ヮ"],
	["lya", "ゃ", "ャ"],
	["lye", "ぇ", "ェ"],
	["lyi", "ぃ", "ィ"],
	["lyo", "ょ", "ョ"],
	["lyu", "ゅ", "ュ"],
	["ma", "ま", "マ"],
	["me", "め", "メ"],
	["mi", "み", "ミ"],
	["mo", "も", "モ"],
	["mu", "む", "ム"],
	["mya", "みゃ", "ミャ"],
	["mye", "みぇ", "ミェ"],
	["myi", "みぃ", "ミィ"],
	["myo", "みょ", "ミョ"],
	["myu", "みゅ", "ミュ"],
	["n'", "ん", "ン"],
	["na", "な", "ナ"],
	["ne", "ね", "ネ"],
	["ni", "に", "ニ"],
	["no", "の", "ノ"],
	["nu", "ぬ", "ヌ"],
	["nya", "にゃ", "ニャ"],
	["nye", "にぇ", "ニェ"],
	["nyi", "にぃ", "ニィ"],
	["nyo", "にょ", "ニョ"],
	["nyu", "にゅ", "ニュ"],
	["o", "お", "オ"],
	["pa", "ぱ", "パ"],
	["pe", "ぺ", "ペ"],
	["pi", "ぴ", "ピ"],
	["po", "ぽ", "ポ"],
	["pu", "ぷ", "プ"],
	["pya", "ぴゃ", "ピャ"],
	["pye", "ぴぇ", "ピェ"],
	["pyi", "ぴぃ", "ピィ"],
	["pyo", "ぴょ", "ピョ"],
	["pyu", "ぴゅ", "ピュ"],
	["qa", "くぁ", "クァ"],
	["qe", "くぇ", "クェ"],
	["qi", "くぃ", "クィ"],
	["qo", "くぉ", "クォ"],
	["qu", "く", "ク"],
	["qya", "くゃ", "クャ"],
	["qye", "くぇ", "クェ"],
	["qyi", "くぃ", "クィ"],
	["qyo", "くょ", "クョ"],
	["qyu", "くゅ", "クュ"],
	["ra", "ら", "ラ"],
	["re", "れ", "レ"],
	["ri", "り", "リ"],
	["ro", "ろ", "ロ"],
	["ru", "る", "ル"],
	["rya", "りゃ", "リャ"],
	["rye", "りぇ", "リェ"],
	["ryi", "りぃ", "リィ"],
	["ryo", "りょ", "リョ"],
	["ryu", "りゅ", "リュ"],
	["sa", "さ", "サ"],
	["se", "せ", "セ"],
	["sha", "しゃ", "シャ"],
	["she", "しぇ", "シェ"],
	["shi", "し", "シ"],
	["sho", "しょ", "ショ"],
	["shu", "しゅ", "シュ"],
	["si", "し", "シ"],
	["so", "そ", "ソ"],
	["su", "す", "ス"],
	["sya", "しゃ", "シャ"],
	["sye", "しぇ", "シェ"],
	["syi", "しぃ", "シィ"],
	["syo", "しょ", "ショ"],
	["syu", "しゅ", "シュ"],
	["ta", "た", "タ"],
	["te", "て", "テ"],
	["tha", "てゃ", "テャ"],
	["the", "てぇ", "テェ"],
	["thi", "てぃ", "ティ"],
	["tho", "てょ", "テョ"],
	["thu", "てゅ", "テュ"],
	["ti", "ち", "チ"],
	["to", "と", "ト"],
	["tsa", "つぁ", "ツァ"],
	["tse", "つぇ", "ツェ"],
	["tsi", "つぃ", "ツィ"],
	["tso", "つぉ", "ツォ"],
	["tsu", "つ", "ツ"],
	["tu", "つ", "ツ"],
	["tya", "ちゃ", "チャ"],
	["tye", "ちぇ", "チェ"],
	["tyi", "ちぃ", "チィ"],
	["tyo", "ちょ", "チョ"],
	["tyu", "ちゅ", "チュ"],
	["u", "う", "ウ"],
	["va", "う゛ぁ", "ヴァ"],
	["ve", "う゛ぇ", "ヴェ"],
	["vi", "う゛ぃ", "ヴィ"],
	["vo", "う゛ぉ", "ヴォ"],
	["vu", "う゛", "ヴ"],
	["wa", "わ", "ワ"],
	["we", "うぇ", "ウェ"],
	["wi", "うぃ", "ウィ"],
	["wo", "を", "ヲ"],
	["wu", "う", "ウ"],
	["xa", "ぁ", "ァ"],
	["xe", "ぇ", "ェ"],
	["xi", "ぃ", "ィ"],
	["xo", "ぉ", "ォ"],
	["xtsu", "っ", "ッ"],
	["xtu", "っ", "ッ"],
	["xu", "ぅ", "ゥ"],
	["xwa", "ゎ", "ヮ"],
	["xya", "ゃ", "ャ"],
	["xye", "ぇ", "ェ"],
	["xyi", "ぃ", "ィ"],
	["xyo", "ょ", "ョ"],
	["xyu", "ゅ", "ュ"],
	["ya", "や", "ヤ"],
	["ye", "いぇ", "イェ"],
	["yi", "い", "イ"],
	["yo", "よ", "ヨ"],
	["yu", "ゆ", "ユ"],
	["za", "ざ", "ザ"],
	["ze", "ぜ", "ゼ"],
	["zi", "じ", "ジ"],
	["zo", "ぞ", "ゾ"],
	["zu", "ず", "ズ"],
	["zya", "じゃ", "ジャ"],
	["zye", "じぇ", "ジェ"],
	["zyi", "じぃ", "ジィ"],
	["zyo", "じょ", "ジョ"],
	["zyu", "じゅ", "ジュ"]
    ];
    this.hiragana_n = "ん";
    this.hiragana_xtsu = "っ";
    this.katakana_n = "ン";
    this.katakana_xtsu = "ッ";
}

Romakana.prototype.roma2hiragana = function(roma){
    var roma = roma.toLowerCase(roma);
    var i,ind,rk;
    var okay = true;
    var kana = "";
    
    for(ind=0;roma[ind];){
	for(i=0;i<this.rktable.length;i++){
	    rk = this.rktable[i];
	    len = rk[0].length;
	    if(roma.substr(ind,len) == rk[0]){
		kana += rk[1];
		ind += len;
		break;
	    }
	}
	if(i >= this.rktable.length){
	    r0 = roma[ind];
	    r1 = roma[ind+1];
	    if(r0 == 'n' && "bcdfghjklmnpqrstvwxz".indexOf(r1) >= 0){
		kana += this.hiragana_n;
		ind++;
	    }
	    else if("bcdfghjklmpqrstvwxyz".indexOf(r0) >= 0 && r0 == r1){
		kana += this.hiragana_xtsu;
		ind++;
	    }
	    else if(r0 == 'n' && ! r1){
		kana += this.hiragana_n;
		ind++;
	    }
	    else {
		ind++;
		okay = false;
	    }
	}
    }
    return okay ? kana : "";
}

Romakana.prototype.roma2katakana = function(roma){
    var roma = roma.toLowerCase(roma);
    var i,ind,rk;
    var okay = true;
    var kana = "";
    
    for(ind=0;roma[ind];){
	for(i=0;i<this.rktable.length;i++){
	    rk = this.rktable[i];
	    len = rk[0].length;
	    if(roma.substr(ind,len) == rk[0]){
		kana += rk[2];
		ind += len;
		break;
	    }
	}
	if(i >= this.rktable.length){
	    r0 = roma[ind];
	    r1 = roma[ind+1];
	    if(r0 == 'n' && "bcdfghjklmnpqrstvwxz".indexOf(r1) >= 0){
		kana += this.katakana_n;
		ind++;
	    }
	    else if("bcdfghjklmpqrstvwxyz".indexOf(r0) >= 0 && r0 == r1){
		kana += this.katakana_xtsu;
		ind++;
	    }
	    else if(r0 == 'n' && ! r1){
		kana += this.katakana_n;
		ind++;
	    }
	    else {
		ind++;
		okay = false;
	    }
	}
    }
    return okay ? kana : "";
}
