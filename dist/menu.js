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
var anchorTags = function anchorTags(hash, textNode) {
  var result = "<a href=\"".concat(hash, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(liTags(anchorTags(hash(), textNode())), "\n</ul>\n");