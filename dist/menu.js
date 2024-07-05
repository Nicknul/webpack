"use strict";

var root = document.querySelector('#root');
var hash = function hash() {
  var result = "#";
  return result;
};
var textNode = function textNode() {
  var result = "\uBA54\uB274";
  return result;
};
var basicData = {
  hoyeon: {
    name: '정호연',
    color: 'lightblue'
  },
  yeonseung: {
    name: '이연승',
    color: 'pink'
  }
};

// liTags(anchorTags(`#${object.jeamin}`, object.jeamin));

var totalElements = function totalElements(object) {
  var result = '';
  for (var key in object) {
    var value = object[key];
    result += liTags(anchorTags("#".concat(key), value.name));
  }
  return result;
};
var anchorTags = function anchorTags(hash, textNode) {
  var result = "<a href=\"".concat(hash, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul id=\"menu\">\n  ".concat(totalElements(basicData), "\n</ul>\n<main id=\"main-target\"></main>\n");

// ------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * * 24.07.04 (Thu) 정호연
 * * HTML을 대신해서 만든 HTML 작성 코드
 * * Raect, CSR이다.
 */

var mainTarget = document.querySelector('#main-target');
console.log(window.location.hash); // ? window (최상위)

window.addEventListener('hashchange', function () {
  var hash = window.location.hash;
  console.log(hash.slice(1));
  var test = basicData[hash.slice(1)];
  var div = document.createElement('div');
  div.style.color = test.color;
  div.textContent = test.name;
  if (mainTarget.hasChildNodes()) {
    mainTarget.removeChild(mainTarget.childNodes[0]);
  }
  mainTarget.appendChild(div);
});