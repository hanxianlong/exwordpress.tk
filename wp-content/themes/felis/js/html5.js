// HTML5 Shiv v3 | @jon_neal @afarkas @rem | MIT/GPL2 Licensed
// Uncompressed source: https://github.com/aFarkas/html5shiv
(function(a, b) {
	var c = function(a) {
		return a.innerHTML = "<x-element></x-element>", a.childNodes.length === 1
	}(b.createElement("a")),
		d = function(a, b, c) {
			return b.appendChild(a), (c = (c ? c(a) : a.currentStyle).display) && b.removeChild(a) && c === "block"
		}(b.createElement("nav"), b.documentElement, a.getComputedStyle),
		e = {
			elements: "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),
			shivDocument: function(a) {
				a = a || b;
				if (a.documentShived) return;
				a.documentShived = !0;
				var f = a.createElement,
					g = a.createDocumentFragment,
					h = a.getElementsByTagName("head")[0],
					i = function(a) {
						f(a)
					};
				c || (e.elements.join(" ").replace(/\w+/g, i), a.createElement = function(a) {
					var b = f(a);
					return b.canHaveChildren && e.shivDocument(b.document), b
				}, a.createDocumentFragment = function() {
					return e.shivDocument(g())
				});
				if (!d && h) {
					var j = f("div");
					j.innerHTML = ["x<style>", "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}", "audio{display:none}", "canvas,video{display:inline-block;*display:inline;*zoom:1}", "[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}", "mark{background:#FF0;color:#000}", "</style>"].join(""), h.insertBefore(j.lastChild, h.firstChild)
				}
				return a
			}
		};
	e.shivDocument(b), a.html5 = e
})(this, document)
