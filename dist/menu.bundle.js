(() => {
  'use strict';
  var n = document.querySelector('#root'),
    e = { hoyeon: { name: '정호연', color: 'lightblue' }, yeonseung: { name: '이연승', color: 'pink' } };
  n.innerHTML = '\n<ul id="menu">\n  '.concat(
    (function (n) {
      var e,
        o,
        a,
        t = '';
      for (var c in n) {
        var i = n[c];
        t +=
          ((o = '#'.concat(c)),
          (a = i.name),
          (e = '<a href="'.concat(o, '">').concat(a, '</a>')),
          '<li>'.concat(e, '</li>'));
      }
      return t;
    })(e),
    '\n</ul>\n<main id="main-target"></main>\n'
  );
  var o = document.querySelector('#main-target');
  console.log(window.location.hash),
    window.addEventListener('hashchange', function () {
      var n = window.location.hash;
      console.log(n.slice(1));
      var a = e[n.slice(1)],
        t = document.createElement('div');
      (t.style.color = a.color),
        (t.textContent = a.name),
        o.hasChildNodes() && o.removeChild(o.childNodes[0]),
        o.appendChild(t);
    });
})();
