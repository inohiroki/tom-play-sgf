// ==UserScript==
// @name           tom-play-sgf
// @namespace      tom
// @description    棋聖道場のsgfを再生出来るようにする
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
		replace_link(links[i], RegExp.$1);
	}
}

//
// SGFボタンの追加
//
function replace_link(element, link)
{
	element.href = "http://ino.xrea.jp/sgf/tom/TomSgfService.php?url=" + link;
//	element.href = "http://ino.xrea.jp/sgf/playtom.php?url=" + link;
	element.style.cssText = "border:solid 1px;border-color:#00FF00;";
}
