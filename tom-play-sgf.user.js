// ==UserScript==
// @name           tom-play-sgf
// @namespace      tom
// @description    棋聖道場のsgfを再生出来るようにする
// @version        0.0.2
// @updateURL      https://github.com/inohiroki/tom-play-sgf/raw/master/tom-play-sgf.user.js
// @include        http://weiqi.sports.tom.com/*
// @include        http://weiqi.tom.com/*
// ==/UserScript==

//
// 該当のタグを探す
//
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
	var link = links[i].href.match(/javascript:newwindow\('(.*)'\)/);
	if(link){
		if(links[i].textContent === "flash版") continue;
		replace_link(links[i], RegExp.$1);
	}
	var link2 = links[i].href.match(/javascript:newwindow2\('(.*)'\)/);
	if(link2){
    	replace_link2(links[i], RegExp.$1);
    }
}

//
// SGFボタンの追加
//
function replace_link(element, link)
{
	element.href = "http://ino.xrea.jp/sgf/tom/TomSgfService.php?url=" + link;
	element.style.cssText = "border:solid 1px;border-color:#00FF00;";
}

//
// 詰碁SGFボタンの追加
//
function replace_link2(element, link)
{
	var s = link.split("/");
	var f;
	if(s.length == 1){ // 古い問題
		f = s[0].split(".");
		element.href = "http://ino.xrea.jp/sgf/tom/TomTsumegoService.php?url=http://weiqi.tom.com/hubo/game/" + f[0] + "sgf.htm";
	}else if(s.length == 2){ // 最近の問題
		f = s[1].split(".");
		element.href = "http://ino.xrea.jp/sgf/tom/TomTsumegoService.php?url=http://weiqi.tom.com/hubo/" + s[0] + "/game/" + f[0] + "sgf.htm";
	}else{
	}
	element.childNodes[0].style.cssText = "border:solid 1px;border-color:#00FF00;";
}
