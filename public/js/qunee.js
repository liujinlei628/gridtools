window.Q = function(t, i, n) {
	"use strict";

	function e(t, i, n) {
		if (t[$r]()) {
			var s = t._fy || t[Fr]();
			if (s) {
				s = s._j4 || s;
				for (var r = 0, h = s.length; h > r; r++)
					if (i.call(n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
				return !0
			}
		}
	}

	function s(t) {
		if (!t.hasChildren()) return t instanceof WN ? t : null;
		for (var i, n = t._fy._j4, e = n[Gr] - 1; e >= 0;) {
			if (i = n[e], i = s(i)) return i;
			e--
		}
		return null
	}

	function r(t, i, n, e) {
		return e ? h(t, i, n) : a(t, i, n)
	}

	function h(t, i, n) {
		t = t._j4 || t;
		for (var e, s = 0, r = t[Gr]; r > s; s++)
			if (e = t[s], e[$r]() && !h(e.children, i, n) || i[qr](n, e) === !1) return !1;
		return !0
	}

	function a(t, i, n) {
		t = t._j4 || t;
		for (var e, s = 0, r = t[Gr]; r > s; s++)
			if (e = t[s], i[qr](n, e) === !1 || e.hasChildren() && !a(e[Yr], i, n)) return !1;
		return !0
	}

	function o(t, i, n, e) {
		return e ? f(t, i, n) : _(t, i, n)
	}

	function f(t, i, n) {
		t = t._j4 || t;
		for (var e, s = t[Gr], r = s - 1; r >= 0; r--)
			if (e = t[r], e.hasChildren() && !f(e[Yr], i, n) || i[qr](n, e) === !1) return !1;
		return !0
	}

	function _(t, i, n) {
		t = t._j4 || t;
		for (var e, s = t[Gr], r = s - 1; r >= 0; r--)
			if (e = t[r], i.call(n, e) === !1 || e[$r]() && !_(e[Yr], i, n)) return !1;
		return !0
	}

	function c(t, i, n) {
		for (var e, s = (t._j4 || t).slice(0); s[Gr];) {
			e = s[0], s = s.splice(1);
			var r = i[qr](n, e);
			if (r === !1) return !1;
			if (e.hasChildren()) {
				var h = e.children;
				h = h._j4 || h, s = s.concat(h)
			}
		}
		return !0
	}

	function u(t, i, n) {
		for (var e, s = (t._j4 || t).slice(0); s[Gr];) {
			e = s[s[Gr] - 1], s = s.splice(0, s.length - 1);
			var r = i[qr](n, e);
			if (r === !1) return !1;
			if (e[$r]()) {
				var h = e.children;
				h = h._j4 || h, s = s.concat(h)
			}
		}
		return !0
	}

	function d(t, i) {
		function n(t, n) {
			for (var e = t[Gr], s = n[Gr], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
			return h
		}

		function e(t) {
			var i = t.length,
				s = Math[Hr](i / 2);
			return 1 >= i ? t : n(e(t.slice(0, s)), e(t.slice(s)))
		}
		return e(t)
	}

	function l(t, i, n, e) {
		t instanceof nD && (t = t._j4);
		for (var s = 0, r = (t._j4 || t)[Gr]; r > s; s++) {
			var h = i[qr](n, t[s], s, e);
			if (h === !1) return !1
		}
		return !0
	}

	function v(t, i, n) {
		for (var e = t instanceof nD, s = t._j4 || t, r = 0, h = s.length; h > r; r++) {
			var a = s[r];
			i[qr](n, a) && (e ? t[Ur](a) : t[Wr](r, 1), r--, h--)
		}
	}

	function b(t, i, n, e) {
		t instanceof nD && (t = t._j4);
		for (var s = (t._j4 || t).length - 1; s >= 0; s--) {
			var r = i.call(n, t[s], s, e);
			if (r === !1) return !1
		}
		return !0
	}

	function y(t) {
		if (t[Xr] instanceof Function) return t[Xr](!0);
		var i, n = [];
		return l(t, function(t) {
			i = t && t.clone instanceof Function ? t[Xr]() : t, n[Vr](i)
		}, this), n
	}

	function g(t, i, e) {
		e === n || 0 > e ? t.push(i) : t.splice(e, 0, i)
	}

	function m(t, i) {
		var n = t.indexOf(i);
		return 0 > n || n >= t.length ? !1 : t.splice(n, 1)
	}

	function E(t, i) {
		var n = !1;
		return l(t, function(t) {
			return i == t ? (n = !0, !1) : void 0
		}), n
	}

	function p(t, i, n) {
		return i instanceof Object ? t = G(i, t) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
	}

	function x(i, n) {
		return n && (i = G(n, i)), t.requestAnimationFrame(i)
	}

	function T(t, i) {
		return t[Kr] = i, t
	}

	function w(t, i) {
		if (!t.hasOwnProperty(Zr)) {
			var n = t[Jr](Qr);
			if (!n) return T(t, i);
			for (var e = n[th](ih), s = 0, r = e[Gr]; r > s; s++)
				if (e[s] == i) return;
			return n += ih + i, T(t, n)
		}
		t[Zr].add(i)
	}

	function O(t, i) {
		if (!t.hasOwnProperty(Zr)) {
			var n = t.getAttribute(Qr);
			if (!n || !n.indexOf(i)) return;
			for (var e = "", s = n.split(ih), r = 0, h = s[Gr]; h > r; r++) s[r] != i && (e += s[r] + ih);
			return T(t, e)
		}
		t[Zr].remove(i)
	}

	function S(t) {
		return t instanceof Number || nh == typeof t
	}

	function j(t) {
		return t !== n && (t instanceof String || eh == typeof t)
	}

	function I(t) {
		return t !== n && (t instanceof Boolean || sh == typeof t)
	}

	function k(t) {
		return Array.isArray(t)
	}

	function A(i) {
		i || (i = t[rh]), i.preventDefault ? i.preventDefault() : i[hh] = !1
	}

	function L(i) {
		i || (i = t.event), i[ah] ? i[ah]() : i[oh] || (i[oh] = !0)
	}

	function R(t) {
		A(t), L(t)
	}

	function M(t) {
		return Math[fh](Math[_h]() * t)
	}

	function C() {
		return Math.random() >= .5
	}

	function P(t, i) {
		var n = t;
		for (var e in i)
			if (i.__lookupGetter__) {
				var s = i.__lookupGetter__(e),
					r = i.__lookupSetter__(e);
				s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
			} else n[e] = i[e];
		return n
	}

	function D(t, i, n) {
		if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
		var e = null;
		ch == typeof i && (e = i, i = t, t = function() {
			i[uh](this, arguments)
		});
		var s = t.prototype,
			r = function() {};
		return r.prototype = i[dh], t.prototype = new r, t[lh] = i[dh], t[lh].constructor = i, P(t[dh], s), e && P(t[dh], e), n && P(t[dh], n), t[dh].class = t, t
	}

	function z(t, i, n) {
		return N(t, i, "constructor", n)
	}

	function N(t, i, n, e) {
		var s = i[lh];
		if (s) {
			var r = s[n];
			return r ? r.apply(t, e) : void 0
		}
	}

	function B(t) {
		return t.toFixed(4)
	}

	function $(t) {
		delete t[vh], delete t[bh]
	}

	function F(t, i) {
		t[i] && ($(t[i]), delete t[i])
	}

	function G(t, i) {
		var n = function() {
			return n[bh].apply(n.scope, arguments)
		};
		return n[bh] = i, n[vh] = t, n
	}

	function q(t, i) {
		return t == i
	}

	function Y(t, i, e, s, r) {
		if (s) return void Object[yh](t, i, {
			value: e,
			enumerable: !0
		});
		var h = {
				configurable: !0,
				enumerable: !0
			},
			a = gh + i;
		e !== n && (t[a] = e), h[mh] = function() {
			return this[a]
		}, h.set = function(t) {
			var n = this[a];
			if (q(n, t)) return !1;
			var e = new pD(this, i, t, n);
			return this.beforeEvent(e) ? (this[a] = t, r && r.call(this, t, n), this[Eh](e), !0) : !1
		}, Object[yh](t, i, h)
	}

	function H(t, i) {
		for (var n = 0, e = i[Gr]; e > n; n++) {
			var s = i[n];
			Y(t, s.name || s, s[ph] || s[xh], s[Th], s.onSetting)
		}
	}

	function U(t) {
		if (t && t > 0 && 1 > t) {
			var i = Math.floor(16777215 * Math[_h]());
			return wh + (i >> 16 & 255) + Oh + (i >> 8 & 255) + Oh + (255 & i) + Oh + t[Sh](2) + jh
		}
		return V(Math[fh](16777215 * Math[_h]()))
	}

	function W(t) {
		return t > 0 ? Math.floor(t) : Math.ceil(t)
	}

	function X(t) {
		return t > 0 ? Math[Hr](t) : Math[fh](t)
	}

	function V(t) {
		return 16777216 > t ? Ih + (kh + t.toString(16))[Ah](-6) : wh + (t >> 16 & 255) + Oh + (t >> 8 & 255) + Oh + (255 & t) + Oh + ((t >> 24 & 255) / 255)[Sh](2) + jh
	}

	function K(t, i, n) {
		ch != typeof n || n.hasOwnProperty(Lh) || (n.enumerable = !0), Object[yh](t, i, n)
	}

	function Z(t, i) {
		for (var n in i)
			if (Rh != n[0]) {
				var e = i[n];
				ch != typeof e || e.hasOwnProperty(Lh) || (e[Lh] = !0)
			}
		Object.defineProperties(t, i)
	}

	function J(i, n) {
		n || (n = t);
		for (var e = i[th](Mh), s = 0, r = e[Gr]; r > s; s++) {
			var h = e[s];
			n = n[h]
		}
		return n
	}

	function Q(t) {
		return t instanceof MouseEvent || t instanceof Object && t.touches !== n
	}

	function ti(i) {
		t[Ch] && console[Ph](i)
	}

	function ii(i) {
		t.console && console[Dh](i)
	}

	function ni(i) {
		t[Ch] && console[zh](i)
	}

	function ei(t, i, n) {
		var e, s, r;
		0 == t._nn ? (e = -1, r = 0, s = i) : 0 == t._no ? (e = 0, r = 1, s = n) : (e = -1 / t._nn, s = (t._nn - e) * i + t._nm, r = 1);
		var h = new aD;
		return h._nn = e, h._nm = s, h._no = r, h._nc = i, h._nk = n, h._lt = Math[Nh](e, r), h._noos = Math[Bh](h._lt), h._sin = Math[$h](h._lt), h
	}

	function si(t, i, n, e, s) {
		var r, h;
		i > e ? r = -1 : e > i && (r = 1), n > s ? h = -1 : s > n && (h = 1);
		var a, o;
		if (!r) return o = 0 > h ? t.y : t.bottom, {
			x: i,
			y: o
		};
		if (!h) return a = 0 > r ? t.x : t.right, {
			x: a,
			y: n
		};
		var f = (n - s) / (i - e),
			_ = n - f * i,
			c = 0 > r ? i - t.x : i - t[Fh],
			u = 0 > h ? n - t.y : n - t[Gh];
		return Math[qh](f) >= Math[qh](u / c) ? (o = 0 > h ? t.y : t[Gh], a = (o - _) / f) : (a = 0 > r ? t.x : t.right, o = f * a + _), {
			x: a,
			y: o
		}
	}

	function ri(t, i, n, e, s, r, h, a) {
		return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
	}

	function hi(t, i, n, e, s, r) {
		return s >= t && t + n >= s && r >= i && i + e >= r
	}

	function ai(t, i, n, e, s, r, h, a) {
		return s >= t && r >= i && t + n >= s + h && i + e >= r + a
	}

	function oi(t, i, e) {
		if (!t) return {
			x: 0,
			y: 0
		};
		if (t.x !== n) return {
			x: t.x,
			y: t.y
		};
		var s, r, h = t.horizontalPosition,
			a = t[Yh];
		switch (h) {
			case uD:
				s = 0;
				break;
			case lD:
				s = i;
				break;
			default:
				s = i / 2
		}
		switch (a) {
			case vD:
				r = 0;
				break;
			case yD:
				r = e;
				break;
			default:
				r = e / 2
		}
		return {
			x: s,
			y: r
		}
	}

	function fi(t, i, n) {
		t[Yr][Hh](i, n), t[Uh](i, n)
	}

	function _i(t, i) {
		t._fy && (t._fy.remove(i), t[Wh](i))
	}

	function ci(t) {
		return t[Xh](/^-ms-/, Vh)[Xh](/-([\da-z])/gi, function(t, i) {
			return i[Kh]()
		})
	}

	function ui(t) {
		return t.replace(/[A-Z]/g, function(t) {
			return Zh + t[Jh]()
		}).replace(/^ms-/, Qh)
	}

	function di(t, i) {
		var n = t[ta];
		if (!n) return !1;
		var e, s;
		for (e in i) i.hasOwnProperty(e) && (s = ND(e)) && (n[s] = i[e]);
		return t
	}

	function li(t) {
		var i, n, e = "";
		for (i in t) t.hasOwnProperty(i) && (n = ND(i)) && (e += ui(n) + ia + t[i] + na);
		return e ? e[ea](0, e[Gr] - 1) : e
	}

	function vi(t, i, n) {
		(i = ND(i)) && (t.style[i] = n)
	}

	function bi(t, i) {
		return DD ? (i && !j(i) && (i = li(i)), DD[sa] ? void DD.insertRule(t + ra + i + ha, 0) : void(DD[aa] && DD.addRule(t, i, 0))) : !1
	}

	function yi(i, n) {
		i.touches && (i = i[oa] && i[oa][Gr] ? i.changedTouches[0] : i.touches[0]);
		var e = n[fa](),
			s = i[_a] || 0,
			r = i[ca] || 0;
		return KP && HP && (t.pageXOffset && s == i[ua] && (s -= t[da]), t.pageYOffset && r == i[la] && (r -= t[va])), {
			x: s - e[ba],
			y: r - e[ya]
		}
	}

	function gi(t, i) {
		return this[gh + i] = $D(t, i, function(t) {
			return Ti.call(this, t, i)
		}, !1, this)
	}

	function mi(t) {
		var i = this;
		return t.getData = function() {
			return i._ky.getElementByMouseEvent(t)
		}, t[ga] = function() {
			return i._ky[ma](t)
		}, t
	}

	function Ei(t) {
		this.__noancelClick || (this.__nolickEvent = t, this.__nolickTime ? this.__nolickTime++ : (this.__nolickTime = 1, setTimeout(G(this, function() {
			if (this.__nolickEvent) {
				var t = this.__nolickTime;
				this.__nolickTime = 0, 1 == t ? this._ia(this.__nolickEvent, Ea) : t > 1 && this._ia(this.__nolickEvent, pa), this.__nolickEvent = null
			}
		}), tD.DOUBLE_CLICK_INTERVAL_TIME)))
	}

	function pi(t) {
		if (t[xa]) {
			for (var i = t.touches, n = [], e = 0, s = i[Gr]; s > e; e++) {
				var r = i[e];
				n[Vr]({
					pageX: r[ua],
					pageY: r.pageY,
					clientX: r.clientX,
					clientY: r.clientY
				})
			}
			return {
				timeStamp: t[Ta],
				touches: n,
				scale: t.scale
			}
		}
		return {
			timeStamp: t.timeStamp,
			x: t.clientX,
			y: t.clientY
		}
	}

	function xi(t, i) {
		switch (i) {
			case "touchstart":
				if (t[xa][Gr] >= 2) return this._9j = pi(t), this._d2[wa](), this._27(), void(this._nov || (this._nov = t, this._9j = pi(t)));
			case "mousedown":
				if (R(t), 2 == t[Oa]) return;
				if (this._ia(t, Sa), this._nov = t, this._9j = pi(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._27() : this.__onLongPressFunction = G(this, function() {
						this.__longPressTimer = null, this._nov && (this.__noancelClick = !0, this._ia(this._nov, ja))
					}), this.__longPressTimer = setTimeout(this.__onLongPressFunction, tD.LONG_PRESS_INTERVAL), this.__noancelClick = !1), KP) return;
				return void(YD._nourrentInteractionSupport = this);
			case "touchend":
				if (!this._nov) return void(this._moving = null);
				if (t.touches.length) return void(this._9j = pi(t));
				t.timeStamp - this._nov.timeStamp < 200 && Ei[qr](this, this._nov);
			case "touchcancel":
				if (!this._nov) return void(this._moving = null);
				this._moving && (this._moving = null, this._ig(t));
			case "mouseup":
				return void this._ek(t);
			case "click":
				return void Ei.call(this, t);
			case "mousewheel":
			case "DOMMouseScroll":
				return t.delta = t[Ia] || -t[ka], this._ia(t, Aa);
			case "touchmove":
				var n = t[xa].length;
				return this._moving || (this._moving = !0, 1 == n && this._ei()), void this._jb(t)
		}
	}

	function Ti(t, i) {
		return t = mi[qr](this, t), xi[qr](this, t, i), La != i && Ra != i ? this._ia(t, Ma + i) : void 0
	}

	function wi(t, i) {
		var n = gh + i;
		FD(t, i, this[n]), F(this, n)
	}

	function Oi(i) {
		l(GD, function(t) {
			gi.call(this, i, t)
		}, this), KP || YD._nno || (YD._nno = !0, $D(t, Ca, function(t) {
			if (YD._nourrentInteractionSupport) {
				R(t);
				var i = YD._nourrentInteractionSupport;
				if (!YD._dragging) {
					if (i._nov) {
						var n = i._nov.screenX - t[Pa],
							e = i._nov.screenY - t[Da];
						if (4 > n * n + e * e) return
					}
					YD._dragging = !0, i._ei()
				}
				i._jb(t)
			}
		}, !0), $D(t, za, function(t) {
			var i = YD._nourrentInteractionSupport;
			delete YD._nourrentInteractionSupport, YD._dragging && (delete YD._dragging, A(t), t = mi[qr](i, t), i._ig(t), i._ek(t))
		}, !0))
	}

	function Si(t) {
		l(GD, function(i) {
			wi[qr](this, t, i)
		}, this), KP || (YD._nourrentInteractionSupport == this && (delete YD._dragging, delete YD._nourrentInteractionSupport), this._27(), delete this._nov, delete this._9j)
	}

	function ji(t, i, n) {
		this._m2 = t, this._d2 = new ki, Oi.call(this, t), i && (this._listener = i), this._kz = n
	}

	function Ii(t) {
		return UP && t[Na] || !UP && t.ctrlKey
	}

	function ki() {
		this[Ba] = []
	}

	function Ai(t, i, n, e, s) {
		Ri(t, function(e) {
			if (i) {
				var s = e.responseXML;
				if (!s) return void(n || ez)($a + t + Fa);
				i(s)
			}
		}, n, e, s)
	}

	function Li(t, i, n, e, s) {
		Ri(t, function(e) {
			if (i) {
				var s, r = e[Ga];
				if (!r) return (n || ez)($a + t + qa), s = new Error($a + t + qa), i(r, s);
				try {
					r = JSON.parse(r)
				} catch (h) {
					(n || ez)(h), s = h
				}
				i(r, s)
			}
		}, n, e, s)
	}

	function Ri(t, i, n, e, s) {
		(n === !1 || e === !1) && (s = !1);
		try {
			var r = new XMLHttpRequest,
				h = encodeURI(t);
			if (s !== !1) {
				var a;
				a = h[Ya](Ha) > 0 ? "&" : Ha, h += a + Ua + Date.now()
			}
			r.open(Wa, h), r.onreadystatechange = function() {
				return 4 == r[Xa] ? r[Va] && 200 != r[Va] ? void(n || ez)($a + t + Ka) : void(i && i(r)) : void 0
			}, r.send(e)
		} catch (o) {
			(n || ez)($a + t + Ka, o)
		}
	}

	function ri(t, i, n, e, s, r, h, a) {
		return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
	}

	function ai(t, i, n, e, s, r, h, a) {
		return s >= t && r >= i && t + n >= s + h && i + e >= r + a
	}

	function Mi(t, i, n) {
		return t instanceof Object && t.x ? Pi(t, i, 0, 0) : Ci(t, i, n, 0, 0)
	}

	function Ci(t, i, n, e, s) {
		var r = Math[$h](n),
			h = Math[Bh](n),
			a = t - e,
			o = i - s;
		return t = a * h - o * r + e, i = a * r + o * h + s, new rD(t, i, n)
	}

	function Pi(t, i, n, e) {
		n = n || 0, e = e || 0;
		var s = Math[$h](i),
			r = Math.cos(i),
			h = t.x - n,
			a = t.y - e;
		return t.x = h * r - a * s + n, t.y = h * s + a * r + e, t
	}

	function Di(t, i, n) {
		return zi(t, i, n, 0, 0)
	}

	function zi(t, i, n, e, s) {
		var r = Ci(t.x, t.y, i, e, s),
			h = Mi(t.x + t[Za], t.y, i, e, s),
			a = Mi(t.x + t.width, t.y + t[Ja], i, e, s),
			o = Mi(t.x, t.y + t[Ja], i, e, s);
		return n ? n[wa]() : n = new fD, n.addPoint(r), n[Qa](h), n[Qa](a), n[Qa](o), n
	}

	function Ni(t, i) {
		var n = this[to] || 1;
		this.style[Za] = t + io, this.style[Ja] = i + io, this[Za] = t * n, this[Ja] = i * n
	}

	function Bi() {
		this[no][Za] = this[no][Za]
	}

	function $i(t) {
		var i = t[eo] || t.mozBackingStorePixelRatio || t[so] || t[ro] || t[ho] || 1;
		return hz / i
	}

	function Fi(t, n, e) {
		var s = i[ao](no);
		if (s.g = s.getContext(oo), t !== !0 && !e) return t && n && (s[Za] = t, s[Ja] = n), s;
		var r = s.g;
		return r.ratio = s.ratio = $i(r), s[fo] = Ni, r._l3 = Bi, t && n && s[fo](t, n), s
	}

	function Gi(t, i, e) {
		if (t === n || null === t) return {
			width: 0,
			height: 0
		};
		var s = qi();
		e = e || tD.FONT, s[_o] != e && (s[_o] = e);
		for (var r = i * tD.LINE_HEIGHT, h = 0, a = 0, o = t.split(co), f = 0, _ = o[Gr]; _ > f; f++) {
			var c = o[f];
			h = Math.max(s[uo](c).width, h), a += r
		}
		return {
			width: h,
			height: a
		}
	}

	function qi(t, i) {
		return az || (az = Fi()), t && i && (az[Za] = t, az[Ja] = i), az.g
	}

	function Yi(t) {
		return Math[Ph](t + Math[lo](t * t + 1))
	}

	function Hi(t, i) {
		i = i || t(1);
		var n = 1 / i,
			e = .5 * n,
			s = Math.min(1, i / 100);
		return function(r) {
			if (0 >= r) return 0;
			if (r >= i) return 1;
			for (var h = r * n, a = 0; a++ < 10;) {
				var o = t(h),
					f = r - o;
				if (Math[qh](f) <= s) return h;
				h += f * e
			}
			return h
		}
	}

	function Ui(t, i, n) {
		var e = 1 - t,
			s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
			r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
		if (n) {
			var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
				a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
			return {
				x: s,
				y: r,
				rotate: Math[Nh](a, h)
			}
		}
		return {
			t: t,
			x: s,
			y: r
		}
	}

	function Wi(t, i, n) {
		var e = t - 2 * i + n;
		return 0 != e ? (t - i) / e : -1
	}

	function Xi(t, i) {
		i.add(t[4], t[5]);
		var n = Wi(t[0], t[2], t[4]);
		if (n > 0 && 1 > n) {
			var e = Ui(n, t);
			i.add(e.x, e.y)
		}
		var s = Wi(t[1], t[3], t[5]);
		if (s > 0 && 1 > s) {
			var e = Ui(s, t);
			i.add(e.x, e.y)
		}
		return i
	}

	function Vi(t) {
		if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
			var i = t[0],
				n = t[1],
				e = t[4],
				s = t[5],
				r = Math[lo](oz(i, n, e, s));
			return function(t) {
				return r * t
			}
		}
		var h = t[0],
			a = t[2],
			o = t[4],
			f = h - 2 * a + o,
			_ = 2 * a - 2 * h;
		h = t[1], a = t[3], o = t[5];
		var c = h - 2 * a + o,
			u = 2 * a - 2 * h,
			d = 4 * (f * f + c * c),
			l = 4 * (f * _ + c * u),
			v = _ * _ + u * u,
			r = 4 * d * v - l * l,
			b = 1 / r,
			y = .125 * Math[vo](d, -1.5),
			g = 2 * Math[lo](d),
			m = (r * Yi(l / Math[lo](r)) + 2 * Math[lo](d) * l * Math[lo](v)) * y;
		return function(t) {
			var i = l + 2 * t * d,
				n = i / Math.sqrt(r),
				e = i * i * b;
			return (r * Math.log(n + Math[lo](e + 1)) + g * i * Math.sqrt(v + t * l + t * t * d)) * y - m
		}
	}

	function Ki(t, i, n) {
		var e = 1 - t,
			s = i[0],
			r = i[2],
			h = i[4],
			a = i[6],
			o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
		if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
		s = i[1], r = i[3], h = i[5], a = i[7];
		var _ = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
		if (n) {
			var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
			return {
				x: o,
				y: _,
				rotate: Math[Nh](c, f)
			}
		}
		return {
			x: o,
			y: _
		}
	}

	function Zi(t, i, n, e) {
		var s = -t + 3 * i - 3 * n + e;
		if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
		var r = 2 * t - 4 * i + 2 * n,
			h = i - t,
			a = r * r - 4 * s * h;
		return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[lo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
	}

	function Ji(t, i) {
		i[Hh](t[6], t[7]);
		var n = Zi(t[0], t[2], t[4], t[6]);
		if (n)
			for (var e = 0; e < n[Gr]; e++) {
				var s = n[e];
				if (!(0 >= s || s >= 1)) {
					var r = Ki(s, t);
					i.add(r.x, r.y)
				}
			}
		if (n = Zi(t[1], t[3], t[5], t[7]))
			for (var e = 0; e < n[Gr]; e++) {
				var s = n[e];
				if (!(0 >= s || s >= 1)) {
					var r = Ki(s, t);
					i[Hh](r.x, r.y)
				}
			}
	}

	function Qi(t) {
		var i = {
				x: t[0],
				y: t[1]
			},
			n = {
				x: t[2],
				y: t[3]
			},
			e = {
				x: t[4],
				y: t[5]
			},
			s = {
				x: t[6],
				y: t[7]
			},
			r = i.x - 0,
			h = i.y - 0,
			a = n.x - 0,
			o = n.y - 0,
			f = e.x - 0,
			_ = e.y - 0,
			c = s.x - 0,
			u = s.y - 0,
			d = 3 * (-r + 3 * a - 3 * f + c),
			l = 6 * (r - 2 * a + f),
			v = 3 * (-r + a),
			b = 3 * (-h + 3 * o - 3 * _ + u),
			y = 6 * (h - 2 * o + _),
			g = 3 * (-h + o),
			m = function(t) {
				var i = d * t * t + l * t + v,
					n = b * t * t + y * t + g;
				return Math.sqrt(i * i + n * n)
			},
			E = (m(0) + 4 * m(.5) + m(1)) / 6;
		return E
	}

	function tn(t, i) {
		function n(t, i, n, e) {
			var s = -t + 3 * i - 3 * n + e,
				r = 2 * t - 4 * i + 2 * n,
				h = i - t;
			return function(t) {
				return 3 * (s * t * t + r * t + h)
			}
		}

		function e(t, i) {
			var n = s(t),
				e = r(t);
			return Math.sqrt(n * n + e * e) * i
		}
		var s = n(t[0], t[2], t[4], t[6]),
			r = n(t[1], t[3], t[5], t[7]);
		i = i || 100;
		var h = 1 / i;
		return function(t) {
			if (!t) return 0;
			for (var i, n = 0, s = 0;;) {
				if (i = n + h, i >= t) return s += e(n, i - n);
				s += e(n, h), n = i
			}
		}
	}

	function nn(t, i, n) {
		return oz(i, n, t.cx, t.cy) <= t._squareR + fz
	}

	function en(t, i, n, e) {
		return n = n || sn(t, i), new rn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
	}

	function sn(t, i) {
		return hD(t.x, t.y, i.x, i.y)
	}

	function rn(t, i, n, e, s, r, h) {
		this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = r, this._otherPoint = h
	}

	function hn(t, i, n, e) {
		this.cx = t, this.cy = i, this.width = n, this[Ja] = e
	}

	function an(t) {
		var i = t[0],
			n = t[1],
			e = t[2],
			s = rn._jzCircle(i, n, e);
		return fn(t, i, n, e, s)
	}

	function on(t, i) {
		i = i || _n(t);
		for (var n, e = i[Za] / i.height, s = [], r = t[Gr], h = 0; r > h; h++) n = t[h], s[Vr]({
			x: n.x,
			y: n.y * e
		});
		var a = an(s);
		return a ? new hn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
	}

	function fn(t, i, n, e, s) {
		for (var r, h, a = t[Gr], o = s._squareR, f = 0; a > f; f++)
			if (r = t[f], r != i && r != n && r != e) {
				var _ = oz(s.cx, s.cy, r.x, r.y);
				_ - fz > o && (o = _, h = r)
			}
		if (!h) return s;
		var c, u = rn._jzCircle(h, i, n),
			d = rn._jzCircle(h, i, e),
			l = rn._jzCircle(h, e, n);
		return nn(u, e.x, e.y) && (c = u), nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c._otherPoint, fn(t, i, n, e, c)
	}

	function _n(t) {
		for (var i, n = t[Gr], e = new fD, s = 0; n > s; s++) i = t[s], e[Hh](i.x, i.y);
		return e
	}

	function cn(t, i, n, e, s) {
		this._6n && this.validate();
		var r = s ? this[bo](s) : this.bounds,
			h = n / r[Za],
			a = t - h * r.x,
			o = e / r[Ja],
			f = i - o * r.y,
			_ = this._fm,
			c = [];
		return l(_, function(t) {
			var i = t[Xr](),
				n = i.points;
			if (n && n.length) {
				for (var e = n.length, s = [], r = 0; e > r; r++) {
					var _ = n[r];
					r++;
					var u = n[r];
					_ = h * _ + a, u = o * u + f, s.push(_), s[Vr](u)
				}
				i[Ba] = s
			}
			c[Vr](i)
		}, this), new $z(c)
	}

	function un(t, i, n, e, s, r) {
		if (s = s || 0, n = n || 0, !s && !r) return !1;
		if (!e) {
			var h = this.getBounds(s);
			if (!h[yo](t, i, n)) return !1
		}
		var a = Math.round(2 * n) || 1,
			o = qi(a, a),
			f = (o[no], -t + n),
			_ = -i + n;
		if (o[go](1, 0, 0, 1, f, _), !o.isPointInStroke) {
			this._me(o), s && o.stroke(), r && o.fill();
			for (var c = o[mo](0, 0, a, a)[Eo], u = c[Gr] / 4; u > 0;) {
				if (c[4 * u - 1] > Bz) return !0;
				--u
			}
			return !1
		}
		return o[po] = (s || 0) + 2 * n, this._me(o), s && o[xo](n, n) ? !0 : r ? o.isPointInPath(n, n) : !1
	}

	function dn(t, i, n) {
		if (!this._j8) return null;
		var e = this._fm;
		if (e.length < 2) return null;
		n === !1 && (t += this._j8);
		var s = e[0];
		if (0 >= t) return Bs(s[Ba][0], s.points[1], e[1].points[0], e[1][Ba][1], t, i);
		if (t >= this._j8) {
			s = e[e[Gr] - 1];
			var r, h, a = s[Ba],
				o = a[Gr],
				f = a[o - 2],
				_ = a[o - 1];
			if (o >= 4) r = a[o - 4], h = a[o - 3];
			else {
				s = e[e.length - 2];
				var c = s[To];
				r = c.x, h = c.y
			}
			return Bs(f, _, f + f - r, _ + _ - h, t - this._j8, i)
		}
		for (var u, d = 0, l = 1, o = e.length; o > l; l++)
			if (u = e[l], u._j8) {
				if (!(d + u._j8 < t)) {
					var v, c = s[To];
					if (u[wo] == Dz) {
						var b = u[Ba];
						v = ln(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
					} else {
						if (!u._lf) return Bs(c.x, c.y, u[Ba][0], u[Ba][1], t - d, i);
						var y = Hi(u._lf, u._j8)(t - d),
							b = u[Ba];
						v = u[wo] == Pz && 6 == b[Gr] ? Ki(y, [c.x, c.y][Oo](b), !0) : Ui(y, [c.x, c.y].concat(b), !0)
					}
					return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math.cos(v[So] || 0)), v
				}
				d += u._j8, s = u
			} else s = u
	}

	function ln(t, i, n, e, s, r, h, a) {
		if (t <= i._l1) return Bs(n, e, s, r, t);
		if (t >= i._j8) return t -= i._j8, Bs(i._p2x, i._p2y, h, a, t);
		if (t -= i._l1, i._o) {
			var o = t / i._r;
			i._CCW && (o = -o);
			var f = Ci(i._p1x, i._p1y, o, i._o.x, i._o.y);
			return f.rotate += i._nn1 || 0, f[So] += Math.PI, f
		}
		return Bs(i._p1x, i._p1y, i._p2x, i._p2y, t)
	}

	function ei(t, i, n) {
		var e, s, r;
		0 == t._nn ? (e = -1, r = 0, s = i) : 0 == t._no ? (e = 0, r = 1, s = n) : (e = -1 / t._nn, s = (t._nn - e) * i + t._nm, r = 1);
		var h = new aD;
		return h._nn = e, h._nm = s, h._no = r, h._nc = i, h._nk = n, h
	}

	function vn(t) {
		return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
	}

	function bn(t, i, n, e, s, r, h, a) {
		var o = hD(i, n, e, s),
			f = hD(e, s, r, h);
		if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j8 = 0;
		var _ = gn(e, s, i, n),
			c = gn(e, s, r, h);
		t._nn1 = _, t._nn2 = c;
		var u = _ - c;
		u = vn(u), u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
		var d = Math.PI - u,
			l = Math[jo](u / 2),
			v = a / l,
			b = Math[Io](o, f);
		v > b && (v = b, a = l * v);
		var y, g = e + Math.cos(_) * v,
			m = s + Math[$h](_) * v,
			E = e + Math[Bh](c) * v,
			p = s + Math[$h](c) * v,
			x = new aD(i, n, e, s),
			T = new aD(e, s, r, h),
			w = ei(x, g, m),
			O = ei(T, E, p),
			S = w._40(O),
			j = Math.atan2(m - S.y, g - S.x),
			I = Math.atan2(p - S.y, E - S.x);
		y = t._CCW ? I : j;
		for (var k, A = 0; 4 > A;) {
			var L = A * eD;
			if (vn(L - y) <= d) {
				var R, M;
				if (k ? k++ : k = 1, 0 == A ? (R = S.x + a, M = S.y) : 1 == A ? (R = S.x, M = S.y + a) : 2 == A ? (R = S.x - a, M = S.y) : (R = S.x, M = S.y - a), t[ko + k] = {
						x: R,
						y: M
					}, 2 == k) break
			}
			A++
		}
		return t._p1x = g, t._p1y = m, t._p2x = E, t._p2y = p, t._o = S, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._j8 = t._l1 + d * a
	}

	function yn(t, i, n, e, s, r, h) {
		var a = gn(n, e, t, i),
			o = gn(n, e, s, r),
			f = a - o;
		return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
	}

	function gn(t, i, n, e) {
		return Math[Nh](e - i, n - t)
	}

	function mn(t) {
		var i = cz.exec(t);
		if (i) return i[1];
		var n = t[Ao](Mh);
		return n >= 0 && n < t[Gr] - 1 ? t[ea](n + 1) : void 0
	}

	function En(t) {
		if (!t) return null;
		if (t instanceof $z) return gz;
		if (t[Lo] instanceof Function) return yz;
		if (j(t)) {
			var i = mn(t);
			if (i) {
				if (!NP && uz[Ro](i)) return bz;
				if (dz[Ro](i)) return vz
			}
			return lz
		}
	}

	function pn(t, i, n) {
		if (this._ma = En(t), !this._ma) throw new Error("the image format is not supported", t);
		this._m9 = t, this._nnu = i, this._97 = n, this[Za] = i || tD[Mo], this.height = n || tD.IMAGE_HEIGHT, this._ka = {}
	}

	function xn(t, i, n, e) {
		return i ? (xz[t] = new pn(i, n, e), t) : void delete xz[t]
	}

	function Tn(t) {
		if (t._l1) return t._l1;
		var i = j(t);
		if (!i && !t.name) return t._l1 = new pn(t);
		var n = t.name || t;
		return n in xz ? xz[n] : xz[n] = new pn(t)
	}

	function wn(t) {
		return t in xz
	}

	function On(t, i, n) {
		n = n || {};
		var e = t[bo](n[po]);
		if (!e[Za] || !e.height) return !1;
		var s = i[Co](oo),
			r = i.ratio || 1,
			h = n.scaleMode || Po,
			a = /full/i [Ro](h),
			o = /uniform/i [Ro](h),
			f = 1,
			_ = 1;
		if (a) {
			var c = i[Za],
				u = i.height,
				d = n.padding,
				l = 0,
				v = 0;
			if (d) {
				var b, y, g, m;
				S(d) ? b = y = g = m = d : (b = d.top || 0, y = d.bottom || 0, g = d.left || 0, m = d[Fh] || 0), c -= g + m, u -= b + y, l += g, v += b
			}
			f = c / e[Za], _ = u / e.height, o && (f > _ ? (l += (c - _ * e[Za]) / 2, f = _) : _ > f && (v += (u - f * e[Ja]) / 2, _ = f)), (l || v) && s[Do](l, v)
		}
		s[Do](-e.x * f, -e.y * _), t.draw(s, r, n, f, _, !0)
	}

	function Sn(t, i, n) {
		var e = Tn(t);
		return e ? (e.validate(), (e._ma == bz || e._6m()) && e._nnw(function(t) {
			t[zo] && (this[Za] = this.width, On(t[zo], this, n))
		}, i), void On(e, i, n)) : (sz[zh](No + t), !1)
	}

	function jn(t, i, e, s) {
		var r = t[Gr];
		if (r && !(0 > r)) {
			s = s || 1;
			for (var h, a, o, f = [], _ = 0; _++ < r;)
				if (h = t[Bo](_, 0), h && hD(i, e, h.x, h.y) <= s) {
					a = _, o = h.rotate;
					break
				}
			if (a !== n) {
				for (var h, c, u, d = 0, _ = 0, l = t._fm[Gr]; l > _; _++) {
					if (h = t._fm[_], !c && (d += h._j8 || 0, d > a)) {
						c = !0;
						var v = Math.max(10, h._j8 / 6),
							b = v * Math[$h](o),
							y = v * Math.cos(o);
						if (h.type == Pz) {
							var g = h[Ba][0],
								m = h[Ba][1];
							if (u) {
								var E = new aD(i, e, i + y, e + b),
									p = E._40(new aD(u[To].x, u[To].y, h[Ba][0], h.points[1]));
								p.x !== n && (g = p.x, m = p.y)
							}
							f.push(new Nz(Pz, [g, m, i - y, e - b, i, e]))
						} else f.push(new Nz(Cz, [i - y, e - b, i, e]));
						if (h.points)
							if (h.type == Pz) {
								h.points[0] = i + y, h[Ba][1] = e + b;
								var E = new aD(i, e, i + y, e + b),
									p = E._40(new aD(h.points[2], h[Ba][3], h[Ba][4], h.points[5]));
								p.x !== n && (h[Ba][2] = p.x, h[Ba][3] = p.y)
							} else if (h[wo] == Cz) {
							h.type = Pz, h.points = [i + y, e + b][Oo](h.points);
							var E = new aD(i, e, i + y, e + b),
								p = E._40(new aD(h[Ba][2], h[Ba][3], h[Ba][4], h.points[5]));
							p.x !== n && (h[Ba][2] = p.x, h.points[3] = p.y)
						} else h.type == Mz && (h.type = Cz, h.points = [i + y, e + b][Oo](h.points), _ == l - 1 && (h[$o] = !0))
					}
					f[Vr](h), u = h
				}
				return f
			}
		}
	}

	function In(t) {
		var i = t[Za],
			n = t[Ja];
		try {
			var e = t.g[mo](0, 0, i, n),
				s = e.data;
			return kn(s, i, n)
		} catch (r) {
			sz.error(r)
		}
	}

	function kn(t, i) {
		var n, e, s, r, h, a = t.length,
			o = 0,
			f = 0;
		for (h = 0; a > h; h += 4)
			if (t[h + 3] > 0) {
				n = (h + 4) / i / 4 | 0;
				break
			}
		for (h = a - 4; h >= 0; h -= 4)
			if (t[h + 3] > 0) {
				e = (h + 4) / i / 4 | 0;
				break
			}
		for (o = 0; i > o; o++) {
			for (f = n; e > f; f++)
				if (t[f * i * 4 + 4 * o + 3] > 0) {
					s = o;
					break
				}
			if (s >= 0) break
		}
		for (o = i - 1; o >= 0; o--) {
			for (f = n; e > f; f++)
				if (t[f * i * 4 + 4 * o + 3] > 0) {
					r = o;
					break
				}
			if (r >= 0) break
		}
		var _, c, u, d = [],
			l = [];
		for (o = s; r >= o; o++)
			for (u = [], d[Vr](u), f = n; e >= f; f++) h = 4 * (f * i + o), _ = t[h + 3], _ ? (c = {
				a: _,
				r: t[h],
				g: t[h + 1],
				b: t[h + 2]
			}, u.push(c), l[Vr](c.r), l.push(c.g), l.push(c.b), l[Vr](c.a)) : (u.push(null), l.push(0), l.push(0), l[Vr](0), l[Vr](0));
		return d._x = s, d._y = n, d._width = r - s + 1, d._height = e - n + 1, d._ji = new fD(s, n, d._width, d._height), d._pixelSize = d._width * d._height, d
	}

	function An(t, i, n, e, s) {
		if (s = 1 | s, !s || 1 > s) {
			var r = t[n];
			return r ? r[e] : !1
		}
		var h = e - s,
			a = n - s;
		0 > h && (h = 0), 0 > a && (a = 0);
		var o = n + s,
			f = e + s;
		for (o > i.width && (o = i[Za]), f > i[Ja] && (f = i.height); o > a;) {
			for (; f > h;) {
				if (t[a][h]) return !0;
				h++
			}
			a++
		}
		return !1
	}

	function Ln(t) {
		if (Ih == t[0]) {
			if (t = t.substring(1), 3 == t[Gr]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
			else if (6 != t[Gr]) return;
			return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
		}
		if (/^rgb/i [Ro](t)) {
			var i = t[Ya](Fo),
				n = t[Ya](jh);
			if (0 > i || i > n) return;
			if (t = t.substring(i + 1, n), t = t[th](Oh), t[Gr] < 3) return;
			var e = parseInt(t[0]),
				s = parseInt(t[1]),
				r = parseInt(t[2]),
				h = 3 == t.length ? 255 : parseInt(t[3]);
			return [e, s, r, h]
		}
	}

	function Rn(t, i, n) {
		return n || (n = tD[Go]), n == rz.BLEND_MODE_MULTIPLY ? t * i : n == rz[qo] ? Math.min(t, i) : n == rz[Yo] ? 1 - (1 - i) / t : n == rz.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == rz[Ho] ? Math.max(t, i) : n == rz[Uo] ? t + i - t * i : i
	}

	function Mn(t, i, n) {
		var e = Ln(i);
		if (!e) return void sz[zh](Wo + i + Xo);
		var s = t.g.getImageData(0, 0, t.width, t[Ja]),
			r = s[Eo];
		if (n instanceof Function) r = n(t, r, e) || r;
		else {
			var h = e[0] / 255,
				a = e[1] / 255,
				o = e[2] / 255;
			if (n == rz[Vo])
				for (var f = 0, _ = r[Gr]; _ > f; f += 4) {
					var c = 77 * r[f] + 151 * r[f + 1] + 28 * r[f + 2] >> 8;
					r[f] = c * h | 0, r[f + 1] = c * a | 0, r[f + 2] = c * o | 0
				} else
					for (var f = 0, _ = r[Gr]; _ > f; f += 4) r[f] = 255 * Rn(h, r[f] / 255, n) | 0, r[f + 1] = 255 * Rn(a, r[f + 1] / 255, n) | 0, r[f + 2] = 255 * Rn(o, r[f + 2] / 255, n) | 0
		}
		var t = Fi(t[Za], t[Ja]);
		return t.g.putImageData(s, 0, 0), t
	}

	function Cn(t, i, n, e) {
		return 1 > n && (n = 1), Pn(t - n, i - n, 2 * n, 2 * n, e)
	}

	function Pn(t, i, n, e, s) {
		n = Math.round(n) || 1, e = Math[Ko](e) || 1;
		var r = qi(n, e);
		r[go](1, 0, 0, 1, -t, -i), s.draw(r);
		for (var h = r[mo](0, 0, n, e)[Eo], a = h.length / 4; a-- > 0;)
			if (h[4 * a - 1] > Bz) return !0;
		return !1
	}

	function Dn(t, i, n, e, s, r) {
		t -= s.$x, i -= s.$y;
		var h = s._fp[Zo](t, i, n, e);
		if (!h) return !1;
		t = h.x * r, i = h.y * r, n = h[Za] * r, e = h[Ja] * r, n = Math[Ko](n) || 1, e = Math.round(e) || 1;
		var a = qi(),
			o = a[no];
		o.width < n || o.height < e ? (o[Za] = n, o[Ja] = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, e)), a.setTransform(1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a[Jo](r, r), s._j5(a, 1);
		for (var f = a[mo](0, 0, n, e)[Eo], _ = f[Gr] / 4; _-- > 0;)
			if (f[4 * _ - 1] > Bz) return !0;
		return !1
	}

	function zn(t, i, n, e, s, r, h, a, o) {
		if (hi(t, i, n, e, a, o)) return null;
		var f, _, c, u = new Nz(Mz, [t + n - s, i]),
			d = new Nz(Cz, [t + n, i, t + n, i + r]),
			l = new Nz(Mz, [t + n, i + e - r]),
			v = new Nz(Cz, [t + n, i + e, t + n - s, i + e]),
			b = new Nz(Mz, [t + s, i + e]),
			y = new Nz(Cz, [t, i + e, t, i + e - r]),
			g = new Nz(Mz, [t, i + r]),
			m = new Nz(Cz, [t, i, t + s, i]),
			E = (new Nz(zz), [u, d, l, v, b, y, g, m]),
			p = new fD(t + s, i + r, n - s - s, e - r - r);
		t > a ? (f = uD, c = 5) : a > t + n ? (f = lD, c = 1) : (f = dD, c = 0), i > o ? (_ = vD, f == uD && (c = 7)) : o > i + e ? (_ = yD, f == lD ? c = 3 : f == dD && (c = 4)) : (_ = bD, f == uD ? c = 6 : f == lD && (c = 2));
		var x = qn(c, t, i, n, e, s, r, h, a, o, p),
			T = x[0],
			w = x[1],
			O = new $z,
			S = O._fm;
		S[Vr](new Nz(Rz, [T.x, T.y])), S.push(new Nz(Mz, [a, o])), S[Vr](new Nz(Mz, [w.x, w.y])), w._mv && (S[Vr](w._mv), w._mvNO++);
		for (var j = w._mvNO % 8, I = T._mvNO; S.push(E[j]), ++j, j %= 8, j != I;);
		return T._mv && S.push(T._mv), O.closePath(), O
	}

	function Nn(t, i, e, s, r, h, a, o, f, _, c, u, d, l) {
		var v = new aD(u, d, e, s),
			b = new aD(i[0], i[1], i[4], i[5]),
			y = b._40(v, c),
			g = y[0],
			m = y[1];
		if (g._rest !== n) {
			g._mvNO = (t - 1) % 8, m._mvNO = (t + 1) % 8;
			var E = g._rest;
			7 == t ? (g.y = h + _ + Math.min(l.height, E), m.x = r + f + Math[Io](l[Za], E)) : 5 == t ? (g.x = r + f + Math.min(l.width, E), m.y = h + o - _ - Math.min(l[Ja], E)) : 3 == t ? (g.y = h + o - _ - Math[Io](l[Ja], E), m.x = r + a - f - Math[Io](l[Za], E)) : 1 == t && (g.x = r + a - f - Math.min(l[Za], E), m.y = h + _ + Math[Io](l[Ja], E))
		} else {
			v._n9(v._nc, v._nk, g.x, g.y), g = v._$j(i), v._n9(v._nc, v._nk, m.x, m.y), m = v._$j(i);
			var p = Yn(i, [g, m]),
				x = p[0],
				T = p[2];
			g._mvNO = t, m._mvNO = t, g._mv = new Nz(Cz, x[Ah](2)), m._mv = new Nz(Cz, T[Ah](2))
		}
		return [g, m]
	}

	function Bn(t, i, n, e, s, r, h, a, o, f) {
		var _, c;
		if (o - a >= i + r) _ = {
			y: n,
			x: o - a
		}, _._mvNO = 0;
		else {
			_ = {
				y: n + h,
				x: Math.max(i, o - a)
			};
			var u = [i, n + h, i, n, i + r, n],
				d = new aD(o, f, _.x, _.y);
			if (_ = d._$j(u)) {
				k(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
				var l = Yn(u, [_]);
				l = l[0], l && (_._mv = new Nz(Cz, l[Ah](2))), _._mvNO = 7
			} else _ = {
				y: n,
				x: i + r
			}, _._mvNO = 0
		}
		if (i + e - r >= o + a) c = {
			y: n,
			x: o + a
		}, c._mvNO = 0;
		else {
			c = {
				y: n + h,
				x: Math[Io](i + e, o + a)
			};
			var v = [i + e - r, n, i + e, n, i + e, n + h],
				d = new aD(o, f, c.x, c.y);
			if (c = d._$j(v)) {
				k(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
				var l = Yn(v, [c]);
				l && l[l.length - 1] && (c._mv = new Nz(Cz, l[l[Gr] - 1][Ah](2))), c._mvNO = 1
			} else c = {
				y: n,
				x: i + e - r
			}, c._mvNO = 0
		}
		return [_, c]
	}

	function $n(t, i, n, e, s, r, h, a, o, f) {
		var _, c;
		if (f - a >= n + h) _ = {
			x: i + e,
			y: f - a
		}, _._mvNO = 2;
		else {
			_ = {
				x: i + e - r,
				y: Math[Qo](n, f - a)
			};
			var u = [i + e - r, n, i + e, n, i + e, n + h],
				d = new aD(o, f, _.x, _.y);
			if (_ = d._$j(u)) {
				k(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
				var l = Yn(u, [_]);
				l = l[0], l && (_._mv = new Nz(Cz, l.slice(2))), _._mvNO = 1
			} else _ = {
				x: i + e,
				y: n + h
			}, _._mvNO = 2
		}
		if (n + s - h >= f + a) c = {
			x: i + e,
			y: f + a
		}, c._mvNO = 2;
		else {
			c = {
				x: i + e - r,
				y: Math.min(n + s, f + a)
			};
			var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
				d = new aD(o, f, c.x, c.y);
			if (c = d._$j(v)) {
				k(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
				var l = Yn(v, [c]);
				l[1] && (c._mv = new Nz(Cz, l[1][Ah](2))), c._mvNO = 3
			} else c = {
				x: i + e,
				y: n + s - h
			}, c._mvNO = 2
		}
		return [_, c]
	}

	function Fn(t, i, n, e, s, r, h, a, o, f) {
		var _, c;
		if (o - a >= i + r) c = {
			y: n + s,
			x: o - a
		}, c._mvNO = 4;
		else {
			c = {
				y: n + s - h,
				x: Math[Qo](i, o - a)
			};
			var u = [i + r, n + s, i, n + s, i, n + s - h],
				d = new aD(o, f, c.x, c.y);
			if (c = d._$j(u)) {
				k(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
				var l = Yn(u, [c]);
				l = l[l.length - 1], l && (c._mv = new Nz(Cz, l.slice(2))), c._mvNO = 5
			} else c = {
				y: n + s,
				x: i + r
			}, c._mvNO = 4
		}
		if (i + e - r >= o + a) _ = {
			y: n + s,
			x: o + a
		}, _._mvNO = 4;
		else {
			_ = {
				y: n + s - h,
				x: Math[Io](i + e, o + a)
			};
			var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
				d = new aD(o, f, _.x, _.y);
			if (_ = d._$j(v)) {
				k(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
				var l = Yn(v, [_]);
				l[0] && (_._mv = new Nz(Cz, l[0][Ah](2))), _._mvNO = 3
			} else _ = {
				y: n + s,
				x: i + e - r
			}, _._mvNO = 4
		}
		return [_, c]
	}

	function Gn(t, i, n, e, s, r, h, a, o, f) {
		var _, c;
		if (f - a >= n + h) c = {
			x: i,
			y: f - a
		}, c._mvNO = 6;
		else {
			c = {
				x: i + r,
				y: Math.max(n, f - a)
			};
			var u = [i, n + h, i, n, i + r, n],
				d = new aD(o, f, c.x, c.y);
			if (c = d._$j(u)) {
				k(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
				var l = Yn(u, [c]);
				l = l[l[Gr] - 1], l && (c._mv = new Nz(Cz, l[Ah](2)))
			} else c = {
				x: i,
				y: n + h
			};
			c._mvNO = 7
		}
		if (n + s - h >= f + a) _ = {
			x: i,
			y: f + a
		}, _._mvNO = 6;
		else {
			_ = {
				x: i + r,
				y: Math[Io](n + s, f + a)
			};
			var v = [i + r, n + s, i, n + s, i, n + s - h],
				d = new aD(o, f, _.x, _.y);
			if (_ = d._$j(v)) {
				k(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
				var l = Yn(v, [_]);
				l[0] && (_._mv = new Nz(Cz, l[0][Ah](2))), _._mvNO = 5
			} else _ = {
				x: i,
				y: n + s - h
			}, _._mvNO = 6
		}
		return [_, c]
	}

	function qn(t, i, n, e, s, r, h, a, o, f, _) {
		var c = a / 2;
		switch (t) {
			case 7:
				var u = [i, n + h, i, n, i + r, n],
					d = i + r,
					l = n + h;
				return Nn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
			case 5:
				return u = [i + r, n + s, i, n + s, i, n + s - h], d = i + r, l = n + s - h, Nn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
			case 3:
				return u = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = i + e - r, l = n + s - h, Nn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
			case 1:
				return u = [i + e - r, n, i + e, n, i + e, n + h], d = i + e - r, l = n + h, Nn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
			case 0:
				return Bn(t, i, n, e, s, r, h, c, o, f, _);
			case 2:
				return $n(t, i, n, e, s, r, h, c, o, f, _);
			case 4:
				return Fn(t, i, n, e, s, r, h, c, o, f, _);
			case 6:
				return Gn(t, i, n, e, s, r, h, c, o, f, _)
		}
	}

	function Yn(t, i) {
		for (var e, s, r, h, a, o, f = t[0], _ = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[Gr]; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = _ + (u - _) * o, r = c + (d - c) * o, h = u + (l - u) * o, v[Vr]([f, _, e, s, a.x, a.y]), f = a.x, _ = a.y, c = r, u = h) : v[Vr](null);
		return r !== n && v[Vr]([a.x, a.y, r, h, d, l]), v
	}

	function Hn(t) {
		return this.$layoutByAnchorPoint && this._nni && (t.x -= this._nni.x, t.y -= this._nni.y), this.$rotate && Pi(t, this.$rotate), t.x += this.$offsetX || 0, t.y += this[tf] || 0, this[nf] && this[ef] ? Pi(t, this[ef]) : t
	}

	function Un(t) {
		return this[nf] && this[ef] && Pi(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this[tf] || 0, this[sf] && Pi(t, -this[sf]), this.$layoutByAnchorPoint && this._nni && (t.x += this._nni.x, t.y += this._nni.y), t
	}

	function Wn() {
		var t = this[rf];
		this[rf] && (this[rf] = !1, this[hf] = !0, this._84.setByRect(this._ji), this.$padding && this._84[af](this.$padding), this.$border && this._84.grow(this[of]));
		var i = this._$v();
		if (i) var n = this.showPointer && this[ff];
		return this[hf] && this.$layoutByAnchorPoint && (this[hf] = !1, n && (t = !0), this._nni = oi(this.$anchorPosition, this._84[Za], this._84[Ja]), this._nni.x += this._84.x, this._nni.y += this._84.y), i ? (t && (this._nmackgroundGradientInvalidateFlag = !0, Xn[qr](this, n)), this._nmackgroundGradientInvalidateFlag && (this._nmackgroundGradientInvalidateFlag = !1, this._nmackgroundGradient = this[_f] && this._miShape && this._miShape.bounds ? Tz[dh][cf][qr](this[_f], this._miShape.bounds) : null), t) : (this.__moPointer = !1, t)
	}

	function Xn(t) {
		var i = this._84.x + this[of] / 2,
			n = this._84.y + this.$border / 2,
			e = this._84[Za] - this.$border,
			s = this._84[Ja] - this.$border,
			r = 0,
			h = 0;
		if (this.$borderRadius && (S(this[uf]) ? r = h = this.$borderRadius : (r = this.$borderRadius.x || 0, h = this.$borderRadius.y || 0), r = Math[Io](r, e / 2), h = Math.min(h, s / 2)), t && (this._pointerX = this._nni.x - this[df] + this[lf], this._pointerY = this._nni.y - this[tf] + this.$pointerY, !this._84[yo](this._pointerX, this._pointerY))) {
			var a = new Gz(i, n, e, s, r, h, this[ff], this._pointerX, this._pointerY);
			return this._miShape = a._mv, this._miShape.bounds.set(i, n, e, s), void(this.__moPointer = !0)
		}
		this._miShape && this._miShape[wa](), this._miShape = VN[vf](i, n, e, s, r, h, this._miShape), this._miShape.bounds.set(i, n, e, s)
	}

	function Vn(t, i, n, e) {
		return e && (t.width < 0 || t.height < 0) ? (t.x = i, t.y = n, void(t.width = t.height = 0)) : (i < t.x ? (t[Za] += t.x - i, t.x = i) : i > t.x + t[Za] && (t[Za] = i - t.x), void(n < t.y ? (t[Ja] += t.y - n, t.y = n) : n > t.y + t[Ja] && (t[Ja] = n - t.y)))
	}

	function Kn(t, i, e) {
		var s, r = t[bf],
			h = t.layoutByPath === n ? this.layoutByPath : t[yf];
		return this[gf] instanceof $z && h ? (s = _z._nny(r, this[gf], this[po], i, e), s.x *= this._jj, s.y *= this._jl) : (s = oi(r, this._84.width, this._84.height), s.x += this._84.x, s.y += this._84.y), Hn[qr](this, s)
	}

	function Zn(t, i) {
		if (i)
			if (i._84[mf]()) t.$x = i.$x, t.$y = i.$y;
			else {
				var n = Kn.call(i, t);
				t.$x = n.x, t.$y = n.y, t._hostRotate = n.rotate
			}
		else t.$x = 0, t.$y = 0;
		t[Ef] && Hz[qr](t)
	}

	function Jn(t) {
		if (t.lineDash === n) {
			var i, e;
			if (t.setLineDash) i = t.getLineDash, e = t[pf];
			else {
				var s;
				if (t.mozDash !== n) s = xf;
				else {
					if (t[Tf] === n) return !1;
					s = Tf
				}
				e = function(t) {
					this[s] = t
				}, i = function() {
					return this[s]
				}
			}
			K(t, wf, {
				get: function() {
					return i.call(this)
				},
				set: function(t) {
					e[qr](this, t)
				}
			})
		}
		if (t[Of] === n) {
			var r;
			if (t[Sf] !== n) r = Sf;
			else {
				if (t[jf] === n) return;
				r = jf
			}
			K(t, Of, {
				get: function() {
					return this[r]
				},
				set: function(t) {
					this[r] = t
				}
			})
		}
	}

	function Qn(t, i, n, e, s) {
		var r, h, a, o, f, _, c, u, d = function(t) {
				return function(i) {
					t(i)
				}
			},
			l = function() {
				h = null, a = null, o = f, f = null, _ = null
			},
			v = function(t) {
				r = t, c || (c = Fi()), c.width = r.width, c[Ja] = r[Ja], i.width = r.width, i.height = r.height
			},
			b = function(t) {
				y(), l(), h = t[If] ? t.transparencyIndex : null, a = 10 * t[kf], f = t[Af]
			},
			y = function() {
				if (_) {
					var t = _[mo](0, 0, r[Za], r[Ja]),
						n = {
							data: t,
							_pixels: kn(t[Eo], r[Za], r.height),
							delay: a
						};
					s.call(i, n)
				}
			},
			g = function(t) {
				_ || (_ = c.getContext(oo));
				var i = t.lctFlag ? t[Lf] : r[Rf],
					n = _[mo](t[Mf], t[Cf], t.width, t[Ja]);
				t[Pf][Df](function(t, e) {
					h !== t ? (n[Eo][4 * e + 0] = i[t][0], n[Eo][4 * e + 1] = i[t][1], n[Eo][4 * e + 2] = i[t][2], n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
				}), _[zf](0, 0, r.width, r[Ja]), _[Nf](n, t[Mf], t[Cf])
			},
			m = function() {},
			E = {
				hdr: d(v),
				gce: d(b),
				com: d(m),
				app: {
					NETSCAPE: d(m)
				},
				img: d(g, !0),
				eof: function() {
					y(), n.call(i)
				}
			},
			p = new XMLHttpRequest;
		NP || p[Bf]("text/plain; charset=x-user-defined"), p[$f] = function() {
			u = new Kz(p.responseText);
			try {
				Jz(u, E)
			} catch (t) {
				e.call(i, Ff)
			}
		}, p.onerror = function() {
			e[qr](i, Gf)
		}, p.open(Wa, t, !0), p[qf]()
	}

	function te(t) {
		var i = [51, 10, 10, 113, 117, 110, 101, 101, 10, 50, 46, 48, 10, 49, 52, 51, 52, 50, 48, 54, 53, 56, 54, 50, 55, 56, 10, 10, 51, 48, 48, 10, 21271, 20140, 27779, 22825, 36335, 20449, 24687, 25216, 26415, 26377, 38480, 20844, 21496, 45, 67, 83, 73, 39033, 30446, 45, 22270, 20803, 25968, 51, 48, 48];
		return i[Df](function(n, e) {
			i[e] = t(n)
		}), i[Yf]("")
	}

	function ie(t, i) {
		try {
			if (null == t || t[Gr] < 8) return;
			if (null == i || i.length <= 0) return;
			for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
			var s = Math[fh](n[Gr] / 5),
				r = parseInt(n[Hf](s) + n.charAt(2 * s) + n[Hf](3 * s) + n[Hf](4 * s) + n[Hf](5 * s), 10),
				h = Math[Ko](i[Gr] / 2),
				a = Math.pow(2, 31) - 1,
				o = parseInt(t.substring(t.length - 8, t.length), 16);
			for (t = t.substring(0, t[Gr] - 8), n += o; n[Gr] > 10;) n = (parseInt(n.substring(0, 10), 10) + parseInt(n[ea](10, n[Gr]), 10)).toString();
			n = (r * n + h) % a;
			for (var f = "", _ = "", e = 0; e < t[Gr]; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255), 10), _ += String[Uf](f), n = (r * n + h) % a;
			return 0 | _[0] ? kN = sN[Wf + aN + Xf](_) : null
		} catch (c) {}
	}

  // license see 1938 line
	function ne() {
		var t = tN;
		if (!t) return void(PN = !0);
		IN = t;
		var i;
		t = t[th](Oh);
		for (var n = 0; n < t.length && (i = ie(t[n], nN), !(i && i.split(co).length >= 8));) 1 == t.length && (i = ie(t[n], Vf)), n++;
		if (!i || i.split(co).length < 8) return RN = !0, "" === nN || nN == Kf + cN + Zf + uN + Jf || nN == Qf + _N + t_ ? (MN = BN, PN = !1, zN = !1, void(jN = !1)) : (MN = BN, void(PN = !0));
		jN = i.split(co);
		var e = jN[3];
		if (e != x$) return RN = !0, void(zN = !0);
		PN = !1, zN = !1;
		var s = jN[0];
		(i_ == s || n_ == s) && (RN = !1);
		var r = jN[5];
		CN = r;
		var h = jN[6];
		MN = h
	}

	function ee() {
		var t = IN;
		if (t) {
			var i;
			t = t[th](Oh);
			for (var n = 0; n < t[Gr] && (i = $N(t[n], nN), !(i && i[th](co)[Gr] >= 8));) 1 == t.length && (i = $N(t[n], Vf)), n++;
			if (i[th](co)[Gr] >= 8) return void(DN = !1)
		}
		return "" === nN || nN == Kf + cN + Zf + uN + Jf || nN == Qf + _N + t_ ? void(DN = !1) : void(DN = !0)
	}

	function se() {
		if (RN) {
			var t = ar[yN + wo]._j5,
				i = LN;
			ar[yN + wo]._j5 = function() {
				t.apply(this, arguments), i.call(this._nor, this.g)
			};
			var n = us[yN + wo]._gl;
			us[yN + wo]._gl = function(t) {
				n.apply(this, arguments), i[qr](this, t)
			}
		}
	}

	function re() {
		if (CN !== !0 && CN) {
			var t = CN[th](Mh);
			if (3 != t[Gr]) return void(ZN[dh]._j5 = null);
			var i = parseInt(t[0], 10),
				n = parseInt(t[1], 10),
				e = parseInt(t[2], 10),
				s = 3,
				r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
			iN > r && (ZN[dh]._j5 = null)
		}
	}

	// see 1879 line
	function he() {
		var t = 0 | MN;
		t && (nD[yN + wo]._kv = function(i, e) {
			var s = i.id;
			//return s === n || this[e_](s) ? !1 : this._j4[Gr] > t ? !1 : (g(this._j4, i, e), this._m3[s] = i, i)
			return s === n || this[e_](s) ? !1 : false ? !1 : (g(this._j4, i, e), this._m3[s] = i, i)
		})
	}

	function ae() {
		PN && (nD[yN + wo]._kv = nD[yN + wo]._fv)
	}

	function oe() {
		DN && (us[yN + wo]._k1 = null)
	}

	function fe() {
		NN && (ds[dh]._k4 = ds[dh]._6c)
	}

	function _e() {
		zN && (gB[yN + wo]._k1 = null)
	}

	function ce() {
		jN === n && (us[yN + wo]._k1 = null)
	}

	function ue(t) {
		return t.parent ? (t = t[s_], t._e2 ? t._e2 : t._gp === !1 ? t : null) : null
	}

	function de(t, i, n) {
		if (n = n || i.toAgent, n == t) return !1;
		var e = t[r_](n);
		return e || (e = new c$(t, n), t._linkedNodes[n.id] = e), e._iu(i, t)
	}

	function le(t, i, n) {
		if (n = n || i.toAgent, n == t) return !1;
		var e = t[r_](n);
		return e ? e._d4(i, t) : void 0
	}

	function ve(t, i, e) {
		return e === n && (e = i[h_]), e != t ? (t._83 || (t._83 = new nD), t._83.add(i) === !1 ? !1 : void t._9w++) : void 0
	}

	function be(t, i, n) {
		return t._83 && t._83[Ur](i) !== !1 ? (t._9w--, void le(t, i, n)) : !1
	}

	function ye(t, i) {
		return i[a_] != t ? (t._nn1 || (t._nn1 = new nD), t._nn1[Hh](i) === !1 ? !1 : void t._nmy++) : void 0
	}

	function ge(t, i) {
		return t._nn1 && t._nn1[Ur](i) !== !1 ? (t._nmy--, void le(i[a_], i, t)) : !1
	}

	function me(t, i) {
		if (i === n && (i = t instanceof UN), i) {
			if (t.isInvalid()) return null;
			var e = me(t[o_], !1);
			if (t[f_]()) return e;
			for (var s = me(t.to, !1); null != e && null != s;) {
				if (e == s) return e;
				if (e[__](s)) return s;
				if (s.isDescendantOf(e)) return e;
				e = me(e, !1), s = me(s, !1)
			}
			return null
		}
		for (var r = t.parent; null != r;) {
			if (r._i1()) return r;
			r = r[s_]
		}
		return null
	}

	function Ee(t, i, n) {
		t._i1() && t.hasChildren() && t[Yr].forEach(function(t) {
			t instanceof WN && i[Hh](t) && Ee(t, i, n)
		}, this), t[c_]() && t._dv[Df](function(t) {
			(null == n || n[u_](t)) && i.add(t) && Ee(t, i, n)
		})
	}

	function pe(t, i) {
		i.parent ? i.parent.setChildIndex(i, i[s_].childrenCount - 1) : t.roots[d_](i, t[l_][Gr] - 1)
	}

	function xe(t, i) {
		if (i instanceof UN) return void(i.isInvalid() || we(t, i));
		for (pe(t, i); i = i[s_];) pe(t, i)
	}

	function Te(t, i) {
		if (i instanceof UN) return void(i.isInvalid() || we(t, i));
		for (pe(t, i); i = i[s_];) pe(t, i)
	}

	function we(t, i) {
		var n = i[a_];
		if (i.isLooped()) pe(t, n);
		else {
			var e = i.toAgent;
			pe(t, n), pe(t, e)
		}
	}

	function Oe(t, i) {
		return t._9w++, t._gy ? (i._hq = t._hv, t._hv._j0 = i, void(t._hv = i)) : (t._gy = i, void(t._hv = i))
	}

	function Se(t, i) {
		t._9w--, t._hv == i && (t._hv = i._hq), i._hq ? i._hq._j0 = i._j0 : t._gy = i._j0, i._j0 && (i._j0._hq = i._hq), i._hq = null, i._j0 = null, le(t, i, i[v_])
	}

	function je(t, i) {
		return t._nmy++, t._ht ? (i._js = t._je, t._je._ju = i, void(t._je = i)) : (t._ht = i, void(t._je = i))
	}

	function Ie(t, i) {
		t._nmy--, t._je == i && (t._je = i._js), i._js ? i._js._ju = i._ju : t._ht = i._ju, i._ju && (i._ju._js = i._js), i._js = null, i._ju = null
	}

	function ke(t, i) {
		return i = i || new nD, t[b_](function(t) {
			i[Hh]({
				id: t.id,
				edge: t,
				fromAgent: t.$from._e2,
				toAgent: t.$to._e2
			})
		}), t[y_](function(t) {
			t instanceof WN && ke(t, i)
		}), i
	}

	function Ae(t, i, n) {
		return Re(t, i, n) === !1 ? !1 : Le(t, i, n)
	}

	function Le(t, i, n) {
		if (t._gy)
			for (var e = t._gy; e;) {
				if (i[qr](n, e) === !1) return !1;
				e = e._j0
			}
	}

	function Re(t, i, n) {
		if (t._ht)
			for (var e = t._ht; e;) {
				if (i[qr](n, e) === !1) return !1;
				e = e._ju
			}
	}

	function Me(t, i, e, s, r, h, a) {
		return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math[Io](h, s / 2), a = Math.min(a, r / 2), t.moveTo(i + h, e), t[g_](i + s - h, e), t[m_](i + s, e, i + s, e + a), t.lineTo(i + s, e + r - a), t[m_](i + s, e + r, i + s - h, e + r), t[g_](i + h, e + r), t[m_](i, e + r, i, e + r - a), t[g_](i, e + a), t[m_](i, e, i + h, e), t[E_](), t) : (t.moveTo(i, e), t[g_](i + s, e), t.lineTo(i + s, e + r), t[g_](i, e + r), t[E_](), t)
	}

	function Ce(t, i) {
		var n = i.r || 1,
			e = i.cx || 0,
			s = i.cy || 0,
			r = n * Math[jo](Math.PI / 8),
			h = n * Math.sin(Math.PI / 4);
		t[p_](e + n, s), t.quadTo(e + n, s + r, e + h, s + h), t[m_](e + r, s + n, e, s + n), t[m_](e - r, s + n, e - h, s + h), t[m_](e - n, s + r, e - n, s), t.quadTo(e - n, s - r, e - h, s - h), t[m_](e - r, s - n, e, s - n), t[m_](e + r, s - n, e + h, s - h), t.quadTo(e + n, s - r, e + n, s)
	}

	function Pe(t, i, n, e, s) {
		i instanceof hn && (e = i.width, s = i[Ja], n = i.cy - s / 2, i = i.cx - e / 2);
		var r = .5522848,
			h = e / 2 * r,
			a = s / 2 * r,
			o = i + e,
			f = n + s,
			_ = i + e / 2,
			c = n + s / 2;
		return t.moveTo(i, c), t[x_](i, c - a, _ - h, n, _, n), t.curveTo(_ + h, n, o, c - a, o, c), t[x_](o, c + a, _ + h, f, _, f), t[x_](_ - h, f, i, c + a, i, c), t
	}

	function De(t, i, n, e, s) {
		var r = 2 * e,
			h = 2 * s,
			a = i + e / 2,
			o = n + s / 2;
		return t.moveTo(a - r / 4, o - h / 12), t[g_](i + .306 * e, n + .579 * s), t[g_](a - r / 6, o + h / 4), t[g_](i + e / 2, n + .733 * s), t[g_](a + r / 6, o + h / 4), t.lineTo(i + .693 * e, n + .579 * s), t.lineTo(a + r / 4, o - h / 12), t[g_](i + .611 * e, n + .332 * s), t[g_](a + 0, o - h / 4), t.lineTo(i + .388 * e, n + .332 * s), t[E_](), t
	}

	function ze(t, i, n, e, s) {
		return t[p_](i, n), t.lineTo(i + e, n + s / 2), t[g_](i, n + s), t.closePath(), t
	}

	function Ne(t, i, n, e, s) {
		return t[p_](i, n + s / 2), t.lineTo(i + e / 2, n), t[g_](i + e, n + s / 2), t.lineTo(i + e / 2, n + s), t.closePath(), t
	}

	function Be(t, i, n, e, s, r) {
		return t[p_](i, n), t.lineTo(i + e, n + s / 2), t[g_](i, n + s), r || (t[g_](i + .25 * e, n + s / 2), t[E_]()), t
	}

	function $e(t, i, n, e, s) {
		if (!t || 3 > t) throw new Error("edge number must greater than 2");
		t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
		for (var r, h, a = 0, o = 2 * Math.PI / t, f = new $z; t > a;) r = i + e * Math.cos(s), h = n + e * Math[$h](s), a ? f[g_](r, h) : f[p_](r, h), ++a, s += o;
		return f.closePath(), f
	}

	function Fe() {
		var t = new $z;
		return t[p_](75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t[x_](20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t[x_](110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
	}

	function Ge() {
		var t = new $z;
		return t.moveTo(20, 0), t[g_](80, 0), t.lineTo(100, 100), t[g_](0, 100), t[E_](), t
	}

	function qe() {
		var t = new $z;
		return t[p_](100, 0), t[g_](100, 80), t[g_](0, 100), t.lineTo(0, 20), t.closePath(), t
	}

	function Ye() {
		var t = new $z;
		return t[p_](20, 0), t[g_](100, 0), t[g_](80, 100), t[g_](0, 100), t.closePath(), t
	}

	function He() {
		var t = new $z;
		return t.moveTo(43, 23), t.lineTo(28, 10), t.lineTo(37, 2), t[g_](63, 31), t.lineTo(37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t[E_](), t
	}

	function Ue() {
		var t = new $z;
		return t[p_](1, 8), t[g_](7, 2), t[g_](32, 26), t[g_](7, 50), t.lineTo(1, 44), t.lineTo(18, 26), t[E_](), t[p_](27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t[g_](44, 26), t.closePath(), t
	}

	function We() {
		var t = new $z;
		return t[p_](0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t[g_](47, 23), t.lineTo(23, 43), t.lineTo(23, 29), t[g_](0, 29), t[E_](), t
	}

	function Xe() {
		var t = new $z;
		return t.moveTo(0, 21), t.lineTo(30, 21), t[g_](19, 0), t.lineTo(25, 0), t[g_](47, 25), t[g_](25, 48), t.lineTo(19, 48), t[g_](30, 28), t.lineTo(0, 28), t[E_](), t
	}

	function Ve() {
		var t = new $z;
		return t[p_](0, 0), t[g_](34, 24), t.lineTo(0, 48), t.lineTo(14, 24), t[E_](), t
	}

	function Ke() {
		var t = new $z;
		return t[p_](20, 0), t[g_](34, 14), t[g_](20, 28), t[g_](22, 18), t.lineTo(1, 25), t[g_](10, 14), t[g_](1, 3), t.lineTo(22, 10), t[E_](), t
	}

	function Ze() {
		var t = new $z;
		return t[p_](4, 18), t[g_](45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t[g_](4, 32), t.closePath(), t
	}

	function Je() {
		var t = new $z;
		return t[p_](17, 11), t.lineTo(27, 11), t[g_](42, 27), t[g_](27, 42), t.lineTo(17, 42), t[g_](28, 30), t.lineTo(4, 30), t.lineTo(4, 23), t[g_](28, 23), t.closePath(), t
	}

	function Qe() {
		VN.register(rz[T_], Pe(new $z, 0, 0, 100, 100)), VN.register(rz[w_], Me(new $z, 0, 0, 100, 100)), VN[O_](rz[S_], Me(new $z, 0, 0, 100, 100, 20, 20)), VN[O_](rz.SHAPE_STAR, De(new $z, 0, 0, 100, 100)), VN.register(rz.SHAPE_TRIANGLE, ze(new $z, 0, 0, 100, 100)), VN[O_](rz[j_], $e(5)), VN[O_](rz[I_], $e(6)), VN[O_](rz[k_], Ne(new $z, 0, 0, 100, 100)), VN[O_](rz.SHAPE_HEART, Fe()), VN[O_](rz.SHAPE_TRAPEZIUM, Ge()), VN[O_](rz.SHAPE_RHOMBUS, qe()), VN[O_](rz[A_], Ye());
		var t = new $z;
		t.moveTo(20, 0), t.lineTo(40, 0), t[g_](40, 20), t[g_](60, 20), t[g_](60, 40), t[g_](40, 40), t[g_](40, 60), t.lineTo(20, 60), t.lineTo(20, 40), t[g_](0, 40), t.lineTo(0, 20), t.lineTo(20, 20), t.closePath(), VN.register(rz.SHAPE_CROSS, t), VN[O_](rz.SHAPE_ARROW_STANDARD, Be(new $z, 0, 0, 100, 100)), VN.register(rz.SHAPE_ARROW_1, He()), VN.register(rz[L_], Ue()), VN[O_](rz[R_], We()), VN[O_](rz[M_], Xe()), VN.register(rz[C_], Ve()), VN[O_](rz.SHAPE_ARROW_6, Ke()), VN[O_](rz.SHAPE_ARROW_7, Ze()), VN.register(rz.SHAPE_ARROW_8, Je()), VN.register(rz[P_], Be(new $z, 0, 0, 100, 100, !0))
	}

	function ts() {
		z(this, ts, arguments), this[D_] = !0
	}

	function is() {
		z(this, is), this._$y = new jD
	}

	function ns() {
		if (this._gp === !0) {
			var t = this._83,
				i = this._nn1;
			if (t)
				for (t = t._j4; t.length;) {
					var n = t[0];
					be(this, n, n[h_])
				}
			if (i)
				for (i = i._j4; i[Gr];) {
					var n = i[0];
					ge(this, n, n[a_])
				}
			return void this[y_](function(t) {
				t._i1() && ns[qr](t)
			})
		}
		var e = ke(this);
		e[Df](function(t) {
			t = t[z_];
			var i = t[N_],
				n = t[v_],
				e = i[__](this),
				s = n[__](this);
			e && !s ? (ve(this, t), de(this, t)) : s && !e && (ye(this, t), de(t[a_], t, this))
		}, this)
	}

	function es() {
		z(this, es, arguments), this[B_] = null
	}

	function ss(t, i, n, e) {
		return t[i] = n, e ? {
			get: function() {
				return this[i]
			},
			set: function(t) {
				if (t !== this[i]) {
					this[i] = t, !this._nno, this._1q = !0;
					for (var n = e[Gr]; --n >= 0;) this[e[n]] = !0
				}
			}
		} : {
			get: function() {
				return this[i]
			},
			set: function(t) {
				t !== this[i] && (this[i] = t)
			}
		}
	}

	function rs(t, i) {
		var n = {},
			e = {};
		for (var s in i) {
			var r = i[s];
			r[$_] && r[$_][Df](function(t, i, n) {
				n[i] = F_ + t, e[t] = !0
			}), n[s] = ss(t, gh + s, r.value, r.validateFlags)
		}
		for (var h in e) t[F_ + h] = !0;
		Object[G_](t, n)
	}

	function hs(t, i, n, e) {
		if (Array[q_](i))
			for (var s = i.length; --s >= 0;) hs(t, i[s], n, e);
		else {
			var r = i[Y_];
			if (r) {
				if (r instanceof ZN || (r = t[r]), !r) return
			} else r = t;
			if (e || (e = t[H_](i[U_], n)), i.bindingProperty && (r[i.bindingProperty] = e), i[W_]) {
				var h = i[W_];
				h instanceof Function || (h = t[h]), h instanceof Function && h.call(t, e, r)
			}
		}
	}

	function as() {
		JN[Df](function(t) {
			this[t] = {}
		}, this)
	}

	function os(t, i, n, e) {
		return e == rz.PROPERTY_TYPE_ACCESSOR ? void(t[n] = i) : e == rz[X_] ? void t[V_](n, i) : e == rz.PROPERTY_TYPE_STYLE ? void t[K_](n, i) : !1
	}

	function fs() {
		z(this, fs, arguments)
	}

	function _s() {
		z(this, _s, arguments)
	}

	function cs(t) {
		var i = Fi(!0);
		return Jn(i.g), i.onselectstart = function() {
			return !1
		}, t.appendChild(i), di(i, vB), i
	}

	function us(t) {
		this._n5 = t, w(this._n5, Z_), t.tabIndex = 0, this._jg = cs(t), this[to] = this._jg.ratio || 1, this._topCanvas = new ar(this, t), this._gn = [], this._nm3 = new bB, this._jy = new ds(this), this._n7 = new nD;
		var i = this;
		this._n7._fv = function(t, n, e) {
			n[J_]();
			var s = n[Q_];
			return n._hz && s && i._nm3._mi(n.$x + n[Q_].x, n.$y + n[Q_].y, n.uiBounds.width, n.uiBounds[Ja]), nD.prototype._fv[qr](this, t, n, e)
		}, this._n7.clear = function() {
			return this.forEach(function(t) {
				t[J_]()
			}), nD[dh].clear.call(this)
		}, this._no9 = [], this._8e = {}, this._8c = new fD, this._8t = [], this._noo()
	}

	function ds(t) {
		this._nor = t, this._jy = new iD, this._jy[to] = t.ratio, this._7z = new fD
	}

	function ls(t, i, n, e) {
		var s = vs(t, i, n, e),
			r = [];
		if (ms(t)) bs(s, i, n, r, e[tc](QN.EDGE_EXTEND));
		else {
			ks(t, i, n, r, s, e);
			var h = ys(t, e),
				a = h ? ws(t, s, i, n, e[tc](QN[ic])) : e[tc](QN.EDGE_SPLIT_VALUE);
			0 == a && (s = !s)
		}
		return r
	}

	function vs(t, i, n) {
		if (null != t) {
			if (t == rz[nc] || t == rz.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == rz[ec] || t == rz.EDGE_TYPE_EXTEND_LEFT || t == rz[sc]) return !0;
			if (t == rz.EDGE_TYPE_ELBOW_VERTICAL || t == rz.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == rz.EDGE_TYPE_VERTICAL_HORIZONTAL || t == rz[rc] || t == rz.EDGE_TYPE_EXTEND_BOTTOM) return !1
		}
		var e = xs(i, n),
			s = Ts(i, n);
		return e >= s
	}

	function bs(t, i, n, e, s) {
		t ? Cs(i, n, e, s) : Ps(i, n, e, s)
	}

	function ys(t, i) {
		return i[tc](QN[hc])
	}

	function gs(t) {
		return null != t && (t == rz[rc] || t == rz[ac] || t == rz.EDGE_TYPE_EXTEND_BOTTOM || t == rz[sc])
	}

	function ms(t) {
		return t && (t == rz.EDGE_TYPE_ELBOW || t == rz[nc] || t == rz[oc])
	}

	function Es(t, i, n, e, s) {
		if (t == rz.EDGE_TYPE_HORIZONTAL_VERTICAL || t == rz[fc]) return new rD(e.x + e[Za] / 2, e.y + e[Ja] / 2);
		var r;
		if (gs(t)) {
			var h = Math[Io](n.y, e.y),
				a = Math[Io](n.x, e.x),
				o = Math.max(n.bottom, e[Gh]),
				f = Math[Qo](n[Fh], e.right);
			if (r = s[tc](QN[_c]), t == rz.EDGE_TYPE_EXTEND_TOP) return new rD((a + f) / 2, h - r);
			if (t == rz[ac]) return new rD(a - r, (h + o) / 2);
			if (t == rz[cc]) return new rD((a + f) / 2, o + r);
			if (t == rz[sc]) return new rD(f + r, (h + o) / 2)
		}
		var _ = ys(t, s);
		if (r = _ ? ws(t, i, n, e, s[tc](QN[ic])) : s.getStyle(QN[uc]), r == Number[dc] || r == Number[lc]) return new rD(e.x + e[Za] / 2, e.y + e[Ja] / 2);
		if (0 == r) return new rD(n.x + n[Za] / 2, n.y + n[Ja] / 2);
		if (i) {
			var c = n.x + n[Fh] < e.x + e[Fh];
			return new rD(js(c, r, n.x, n[Za]), n.y + n[Ja] / 2)
		}
		var u = n.y + n[Gh] < e.y + e[Gh];
		return new rD(n.x + n[Za] / 2, js(u, r, n.y, n.height))
	}

	function ps(t, i, n, e) {
		var s = Math.max(i, e) - Math.min(t, n);
		return s - (i - t + e - n)
	}

	function xs(t, i) {
		var n = Math[Qo](t.x + t[Za], i.x + i[Za]) - Math[Io](t.x, i.x);
		return n - t[Za] - i[Za]
	}

	function Ts(t, i) {
		var n = Math.max(t.y + t.height, i.y + i.height) - Math[Io](t.y, i.y);
		return n - t[Ja] - i[Ja]
	}

	function ws(t, i, n, e, s) {
		var r = Os(s, i, n, e, null);
		return r * s
	}

	function Os(t, i, n, e) {
		return i ? Ss(t, n.x, n[Fh], e.x, e[Fh]) : Ss(t, n.y, n.bottom, e.y, e[Gh])
	}

	function Ss(t, i, n, e, s) {
		var r = ps(i, n, e, s),
			h = e + s > i + n;
		if (r > 0) {
			if (1 == t) return r + (s - e) / 2;
			if (t >= 0 && 1 > t) return r;
			if (0 > t) return h ? e - i : n - s
		}
		return Math[qh](h && t > 0 || !h && 0 > t ? n - s : i - e)
	}

	function js(t, i, n, e) {
		return t == i > 0 ? n + e + Math[qh](i) : n - Math[qh](i)
	}

	function Is(t, i) {
		var n = t[Gr];
		if (!(3 > n)) {
			var e = i.getStyle(QN[vc]);
			if (e != rz.EDGE_CORNER_NONE) {
				var s = i[tc](QN[bc]),
					r = 0,
					h = 0;
				s && (S(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
				for (var a, o, f, _, c = t[0], u = t[1], d = null, l = 2; n > l; l++) {
					var v = t[l],
						b = u.x - c.x,
						y = u.y - c.y,
						E = v.x - u.x,
						p = v.y - u.y,
						x = !b || b > -fz && fz > b,
						T = !y || y > -fz && fz > y,
						w = !E || E > -fz && fz > E,
						O = !p || p > -fz && fz > p,
						j = T;
					(x && O || T && w) && (j ? (a = Math.min(2 == l ? Math[qh](b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math[qh](p) : Math[qh](p) / 2, h), f = new rD(u.x - (b > 0 ? a : -a), u.y), _ = new rD(u.x, u.y + (p > 0 ? o : -o))) : (a = Math[Io](l == n - 1 ? Math.abs(E) : Math[qh](E) / 2, r), o = Math[Io](2 == l ? Math[qh](y) : Math[qh](y) / 2, h), f = new rD(u.x, u.y - (y > 0 ? o : -o)), _ = new rD(u.x + (E > 0 ? a : -a), u.y)), m(t, u), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == rz[yc] ? (g(t, _, l), l++, n++) : e == rz[gc] && (g(t, [u, _], l), l++, n++)), c = u, u = v
				}
				null != d && _.x == u.x && _.y == u.y && m(t, u)
			}
		}
	}

	function ks(t, i, n, e, s, r) {
		var h = r[tc](QN[mc]),
			a = null == h;
		if (null != h) {
			var o = (new fD).union(i)[Ec](n);
			o.intersects(h) || (s = As(h.x, h.y, o.y, o.x, o.bottom, o[Fh]))
		} else h = Es(t, s, i, n, r);
		s ? Ms(i, n, h, e, a) : Rs(i, n, h, e, a)
	}

	function As(t, i, n, e, s, r) {
		return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
	}

	function Ls(t, i, n) {
		return i >= t.x && i <= t[Fh] && n >= t.y && n <= t.bottom
	}

	function Rs(t, i, n, e, s) {
		var r = Math.max(t.y, i.y),
			h = Math.min(t.y + t.height, i.y + i.height),
			a = null != n ? n.y : h + (r - h) / 2,
			o = t.x + t[Za] / 2,
			f = i.x + i.width / 2;
		if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Za] && (o = n.x), n.x >= i.x && n.x <= i.x + i[Za] && (f = n.x)), Ls(i, o, a) || Ls(t, o, a) || e.push(new rD(o, a)), Ls(i, f, a) || Ls(t, f, a) || e[Vr](new rD(f, a)), 0 == e[Gr])
			if (null != n) Ls(i, n.x, a) || Ls(t, n.x, a) || e[Vr](new rD(n.x, a));
			else {
				var _ = Math.max(t.x, i.x),
					c = Math[Io](t.x + t.width, i.x + i[Za]);
				e[Vr](new rD(_ + (c - _) / 2, a))
			}
	}

	function Ms(t, i, n, e, s) {
		var r = Math[Qo](t.x, i.x),
			h = Math[Io](t.x + t[Za], i.x + i.width),
			a = null != n ? n.x : h + (r - h) / 2,
			o = t.y + t[Ja] / 2,
			f = i.y + i.height / 2;
		if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t.height && (o = n.y), n.y >= i.y && n.y <= i.y + i[Ja] && (f = n.y)), Ls(i, a, o) || Ls(t, a, o) || e.push(new rD(a, o)), Ls(i, a, f) || Ls(t, a, f) || e[Vr](new rD(a, f)), 0 == e[Gr])
			if (null != n) Ls(i, a, n.y) || Ls(t, a, n.y) || e.push(new rD(a, n.y));
			else {
				var _ = Math[Qo](t.y, i.y),
					c = Math[Io](t.y + t.height, i.y + i.height);
				e[Vr](new rD(a, _ + (c - _) / 2))
			}
	}

	function Cs(t, i, n, e) {
		var s = i.x + i[Za] < t.x,
			r = t.x + t.width < i.x,
			h = s ? t.x : t.x + t[Za],
			a = t.y + t[Ja] / 2,
			o = r ? i.x : i.x + i[Za],
			f = i.y + i[Ja] / 2,
			_ = e,
			c = s ? -_ : _,
			u = new rD(h + c, a);
		c = r ? -_ : _;
		var d = new rD(o + c, f);
		if (s == r) {
			var l = s ? Math.min(h, o) - e : Math[Qo](h, o) + e;
			n[Vr](new rD(l, a)), n.push(new rD(l, f))
		} else if (u.x < d.x == s) {
			var v = a + (f - a) / 2;
			n[Vr](u), n[Vr](new rD(u.x, v)), n[Vr](new rD(d.x, v)), n[Vr](d)
		} else n.push(u), n[Vr](d)
	}

	function Ps(t, i, n, e) {
		var s = i.y + i.height < t.y,
			r = t.y + t[Ja] < i.y,
			h = t.x + t.width / 2,
			a = s ? t.y : t.y + t[Ja],
			o = i.x + i[Za] / 2,
			f = r ? i.y : i.y + i[Ja],
			_ = e,
			c = s ? -_ : _,
			u = new rD(h, a + c);
		c = r ? -_ : _;
		var d = new rD(o, f + c);
		if (s == r) {
			var l = s ? Math.min(a, f) - e : Math[Qo](a, f) + e;
			n[Vr](new rD(h, l)), n.push(new rD(o, l))
		} else if (u.y < d.y == s) {
			var v = h + (o - h) / 2;
			n[Vr](u), n[Vr](new rD(v, u.y)), n[Vr](new rD(v, d.y)), n[Vr](d)
		} else n[Vr](u), n[Vr](d)
	}

	function Ds(t) {
		return t == rz[pc] || t == rz[xc] || t == rz[ec] || t == rz[Tc] || t == rz[fc] || t == rz[rc] || t == rz[ac] || t == rz[cc] || t == rz.EDGE_TYPE_EXTEND_RIGHT || t == rz[wc] || t == rz[nc] || t == rz.EDGE_TYPE_ELBOW_VERTICAL
	}

	function zs(t, i) {
		var n, e;
		i && i[Za] && i.height ? (n = i[Za], e = i[Ja]) : n = e = isNaN(i) ? tD[Oc] : i;
		var s = VN[Sc](t, -n, -e / 2, n, e);
		return s || (s = new $z, s[p_](-n, -e / 2), s[g_](0, 0), s.lineTo(-n, e / 2)), s
	}

	function Ns(t, i) {
		var n = Math[$h](i),
			e = Math[Bh](i),
			s = t.x,
			r = t.y;
		return t.x = s * e - r * n, t.y = s * n + r * e, t
	}

	function Bs(t, i, n, e, s, r) {
		var h = Math.atan2(e - i, n - t),
			a = new rD(s, r);
		return a[So] = h, Ns(a, h), a.x += t, a.y += i, a
	}

	function $s(t, i, n, e, s) {
		i = si(e, i.x, i.y, n.x, n.y), n = si(s, n.x, n.y, i.x, i.y);
		var r = Math.PI / 2 + Math.atan2(n.y - i.y, n.x - i.x),
			h = t * Math.cos(r),
			a = t * Math.sin(r),
			o = n.x - i.x,
			f = n.y - i.y,
			_ = i.x + .25 * o,
			c = i.y + .25 * f,
			u = i.x + .75 * o,
			d = i.y + .75 * f;
		return [new Nz(Pz, [_ + h, c + a, u + h, d + a])]
	}

	function Fs(t, i, e) {
		if (g(t, new Nz(Rz, [i.x, i.y]), 0), e) {
			if (t[Gr] > 1) {
				var s = t[t[Gr] - 1];
				if (Cz == s[wo] && (s[$o] || s[Ba][2] === n || null === s[Ba][2])) return s[Ba][2] = e.x, s[Ba][3] = e.y, void(s.invalidTerminal = !0);
				if (Pz == s[wo] && (s[$o] || s[Ba][4] === n || null === s[Ba][4])) return s[Ba][4] = e.x, s[Ba][5] = e.y, void(s[$o] = !0)
			}
			t.push(new Nz(Mz, [e.x, e.y]))
		}
	}

	function Gs(t, i, n, e, s, r, h, a) {
		return i[jc]() ? void(n._fm = i._91.toDatas()) : e == s ? void t.drawLoopedEdge(n, e, r, h) : void t[Ic](n, e, s, r, h, a)
	}

	function qs(t, i, n, e, s) {
		var r = e == s,
			h = t.graph[ga](e),
			a = r ? h : t[kc][ga](s);
		if (h && a) {
			var o = i.edgeType,
				f = h.bodyBounds[Xr](),
				_ = r ? f : a[Ac].clone(),
				c = i.hasPathSegments();
			if (!r && !o && !c) {
				var u = e[D_],
					d = s[D_];
				if (u != d) {
					var l, v, b, y, g = i[Lc];
					u ? (l = h, v = f, b = a, y = _) : (l = a, v = _, b = h, y = f);
					var m = Vs(v, l, u, b, y, g);
					if (m && 2 == m[Gr]) {
						var E = m[0],
							p = m[1];
						return n[p_](E.x, E.y), p.x == E.x && p.y == E.y && (p.y += .01), n[g_](p.x, p.y), void(n._6n = !0)
					}
				}
			}
			Gs(t, i, n, h, a, o, f, _), (!r || c) && Ys(t, i, n, h, a, o, f, _), n._6n = !0
		}
	}

	function Ys(t, i, e, s, r, h, a, o) {
		var f = a[Rc],
			_ = o.center,
			c = t[Mc],
			u = t[Cc];
		if (!c && !u) return void Fs(e._fm, f, _);
		var d = e._fm;
		if (d[Gr]) {
			if (c) {
				var l = d[0],
					v = l.firstPoint;
				a.contains(v.x, v.y) && (l[wo] == Pz ? (f = v, v = {
					x: l[Ba][2],
					y: l.points[3]
				}, l[Ba] = l.points[Ah](2), l[wo] = Cz) : l[wo] == Cz && (f = v, v = {
					x: l[Ba][0],
					y: l.points[1]
				}, l.points = l.points[Ah](2), l[wo] = Mz)), Hs(s, a, v, f, n, n)
			}
			if (u) {
				var b, y = d[d.length - 1],
					g = y[To],
					m = y.points[Gr],
					E = g.x === n || g.y === n;
				m >= 4 && (E || o.contains(g.x, g.y)) && (E || (_ = g), b = !0, g = {
					x: y[Ba][m - 4],
					y: y.points[m - 3]
				}, o.contains(g.x, g.y) && (_ = g, m >= 6 ? (g = {
					x: y[Ba][m - 6],
					y: y.points[m - 5]
				}, y.points = y.points.slice(0, 4), y.type = Cz) : 1 == d[Gr] ? (g = {
					x: f.x,
					y: f.y
				}, y[Ba] = y[Ba][Ah](0, 2), y[wo] = Mz) : (y = d[d[Gr] - 2], g = y[To]))), Hs(r, o, g, _, n, n), b && (m = y[Ba].length, y[Ba][m - 2] = _.x, y.points[m - 1] = _.y, _ = null)
			}
		} else {
			var p = Math[Nh](_.y - f.y, _.x - f.x),
				x = Math.cos(p),
				T = Math.sin(p);
			c && Hs(s, a, _, f, x, T), u && Hs(r, o, f, _, -x, -T)
		}
		Fs(e._fm, f, _)
	}

	function Hs(t, i, e, s, r, h) {
		if (r === n) {
			var a = Math[Nh](e.y - s.y, e.x - s.x);
			r = Math[Bh](a), h = Math.sin(a)
		}
		for (r += r, h += h, e = {
				x: e.x,
				y: e.y
			}, i[Pc](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
			if (!i[Pc](e.x, e.y)) return s;
			if (t[Dc](e.x - r, e.y - h, tD[zc])) {
				s.x = e.x - r / 2, s.y = e.y - h / 2;
				break
			}
			e.x -= r, e.y -= h
		}
		return s
	}

	function Us(t, i, n, e, s, r, h, a) {
		if (i[jc]()) return i._91;
		var o = i.edgeType;
		if (Ds(o)) {
			var f = ls(o, n, e, t, s, r);
			if (!f || !f[Gr]) return null;
			g(f, h, 0), f[Vr](a), o != rz[wc] && Is(f, t);
			for (var _ = [], c = f[Gr], u = 1; c - 1 > u; u++) {
				var d = f[u];
				_.push(k(d) ? new Nz(Cz, [d[0].x, d[0].y, d[1].x, d[1].y]) : new Nz(Mz, [d.x, d.y]))
			}
			return _
		}
		if (i.$bundleEnabled) {
			var l = t._2q();
			if (!l) return;
			return $s(l, h, a, n, e)
		}
	}

	function Ws(t, i, n) {
		var e = t.getStyle(QN[Nc]),
			s = t._2q(),
			r = e + .2 * s,
			h = i.x + i.width - r,
			a = i.y,
			o = i.x + i[Za],
			f = i.y + r;
		e += s;
		var _ = .707,
			c = -.707,
			u = i.x + i.width,
			d = i.y,
			l = u + _ * e,
			v = d + c * e,
			b = {
				x: h,
				y: a
			},
			y = {
				x: l,
				y: v
			},
			g = {
				x: o,
				y: f
			},
			m = b.x,
			E = y.x,
			p = g.x,
			x = b.y,
			T = y.y,
			w = g.y,
			O = ((w - x) * (T * T - x * x + E * E - m * m) + (T - x) * (x * x - w * w + m * m - p * p)) / (2 * (E - m) * (w - x) - 2 * (p - m) * (T - x)),
			S = ((p - m) * (E * E - m * m + T * T - x * x) + (E - m) * (m * m - p * p + x * x - w * w)) / (2 * (T - x) * (p - m) - 2 * (w - x) * (E - m)),
			r = Math[lo]((m - O) * (m - O) + (x - S) * (x - S)),
			j = Math[Nh](b.y - S, b.x - O),
			I = Math[Nh](g.y - S, g.x - O),
			k = I - j;
		return 0 > k && (k += 2 * Math.PI), Xs(O, S, j, k, r, r, !0, n)
	}

	function Xs(t, i, n, e, s, r, h, a) {
		var o, f, _, c, u, d, l, v, b, y, g;
		if (Math[qh](e) > 2 * Math.PI && (e = 2 * Math.PI), u = Math[Hr](Math[qh](e) / (Math.PI / 4)), o = e / u, f = o, _ = n, u > 0) {
			d = t + Math[Bh](_) * s, l = i + Math.sin(_) * r, moveTo ? a.moveTo(d, l) : a.lineTo(d, l);
			for (var m = 0; u > m; m++) _ += f, c = _ - f / 2, v = t + Math.cos(_) * s, b = i + Math.sin(_) * r, y = t + Math[Bh](c) * (s / Math.cos(f / 2)), g = i + Math[$h](c) * (r / Math[Bh](f / 2)), a.quadTo(y, g, v, b)
		}
	}

	function Vs(t, i, e, s, r, h) {
		var a = r.cx,
			o = r.cy,
			f = a < t.x,
			_ = a > t[Fh],
			c = o < t.y,
			u = o > t[Gh],
			d = t.cx,
			l = t.cy,
			v = f || _,
			b = c || u,
			y = h === n || null === h;
		y && (h = Math[Nh](o - l, a - d), v || b || (h += Math.PI));
		var g = Math[Bh](h),
			m = Math[$h](h),
			E = Zs(i, t, {
				x: a,
				y: o
			}, -g, -m);
		E || (h = Math[Nh](o - l, a - d), v || b || (h += Math.PI), g = Math.cos(h), m = Math[$h](h), E = Zs(i, t, {
			x: a,
			y: o
		}, -g, -m) || {
			x: d,
			y: l
		});
		var p = Zs(s, r, {
			x: E.x,
			y: E.y
		}, -E.perX || g, -E[Bc] || m, !1) || {
			x: a,
			y: o
		};
		return e ? [E, p] : [p, E]
	}

	function Ks(t, i, n, e, s, r) {
		var h = i < t.x,
			a = i > t[Fh],
			o = n < t.y,
			f = n > t.bottom;
		if (h && e > 0) {
			var _ = t.x - i,
				c = n + _ * s / e;
			if (c >= t.y && c <= t[Gh]) return {
				x: t.x,
				y: c,
				perX: e,
				perY: s
			}
		}
		if (a && 0 > e) {
			var _ = t[Fh] - i,
				c = n + _ * s / e;
			if (c >= t.y && c <= t[Gh]) return {
				x: t.right,
				y: c,
				perX: e,
				perY: s
			}
		}
		if (o && s > 0) {
			var u = t.y - n,
				d = i + u * e / s;
			if (d >= t.x && d <= t[Fh]) return {
				x: d,
				y: t.y,
				perX: e,
				perY: s
			}
		}
		if (f && 0 > s) {
			var u = t[Gh] - n,
				d = i + u * e / s;
			if (d >= t.x && d <= t[Fh]) return {
				x: d,
				y: t.bottom,
				perX: e,
				perY: s
			}
		}
		return r !== !1 ? Ks(t, i, n, -e, -s, !1) : void 0
	}

	function Zs(t, i, n, e, s, r) {
		if (!i.contains(n.x, n.y)) {
			if (n = Ks(i, n.x, n.y, e, s, r), !n) return;
			return Js(t, i, n, n.perX, n.perY)
		}
		return r === !1 ? Js(t, i, n, e, s) : Js(t, i, {
			x: n.x,
			y: n.y,
			perX: e,
			perY: s
		}, e, s) || Js(t, i, n, -e, -s)
	}

	function Js(t, i, n, e, s) {
		for (;;) {
			if (!i[Pc](n.x, n.y)) return;
			if (t[Dc](n.x + e, n.y + s)) break;
			n.x += e, n.y += s
		}
		return n
	}

	function Qs(t) {
		return wn(t) ? t : t[$c](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t[Lo] ? t : void 0)
	}

	function tr(t) {
		for (var i = t.parent; i;) {
			if (i[Fc]) return i;
			i = i.parent
		}
		return null
	}

	function ir() {
		z(this, ir, arguments)
	}

	function nr(t, n, e, s, r, h, a) {
		var o = i.createElement(Gc);
		o[Kr] = qc, di(o, pB), n && di(o, n);
		var f = i.createElement(Yc);
		return h && (KP ? f.ontouchstart = h : f[Hc] = h), f[Uc] = a, f[Wc] = e, di(f, xB), r && di(f, r), s && vi(f, Xc, Vc), o._img = f, o[Kc](f), t[Kc](o), o
	}

	function er(t, n) {
		this._navPane = i.createElement(Gc), this._navPane.className = Zc, di(this._navPane, {
			"background-color": Jc,
			overflow: Qc,
			"float": ba,
			"user-select": tu,
			position: iu
		}), this._top = nr(this._navPane, {
			width: nu
		}, tD[eu], !1, null, n, ya), this._left = nr(this._navPane, {
			height: nu
		}, tD.NAVIGATION_IMAGE_LEFT, !1, TB, n, ba), this._right = nr(this._navPane, {
			height: nu,
			right: su
		}, tD.NAVIGATION_IMAGE_LEFT, !0, TB, n, Fh), this._nmottom = nr(this._navPane, {
			width: nu,
			bottom: su
		}, tD[eu], !0, null, n, Gh), t[Kc](this._navPane)
	}

	function sr(t, i) {
		this._nor = t;
		var n = function(i) {
			var n, e, s = i[Y_],
				r = s[Uc];
			if (ba == r) n = 1;
			else if (Fh == r) n = -1;
			else if (ya == r) e = 1;
			else {
				if (Gh != r) return;
				e = -1
			}
			KP && (s.className = ru, setTimeout(function() {
				s[Kr] = ""
			}, 100)), R(i), t._ky._9n(n, e)
		};
		er[qr](this, i, n), this._3t(i.clientWidth, i[hu])
	}

	function rr(t, i) {
		this._nor = t, this[au](i, t)
	}

	function hr() {
		z(this, hr, arguments)
	}

	function ar(t, i) {
		this._nor = t, this._jg = cs(i), this.g = this._jg.g, this._nn4 = new nD
	}

	function or(t) {
		var i = t[ou],
			n = [];
		return t[fu].forEach(function(i) {
			t[_u](i) && t.isSelectable(i) && n.push(i)
		}), i[V_](n)
	}

	function fr(t, i, e, s) {
		s === n && (s = tD.ZOOM_ANIMATE);
		var r = t[cu](i);
		return e ? t.zoomIn(r.x, r.y, s) : t.zoomOut(r.x, r.y, s)
	}

	function _r(t, i, n) {
		var e = t[uu];
		n = n || e, i = i || 1;
		var s = null;
		s && n[Za] * n.height * i * i > s && (i = Math[lo](s / n[Za] / n[Ja]));
		var r = Fi();
		Jn(r.g), r.width = n[Za] * i, r.height = n[Ja] * i, t._8h._gl(r.g, i, n);
		var h = null;
		try {
			h = r.toDataURL(du)
		} catch (a) {
			sz.error(a)
		}
		return {
			canvas: r,
			data: h,
			width: r.width,
			height: r.height
		}
	}

	function cr(t) {
		this[kc] = t, this.topCanvas = t[lu]
	}

	function ur(t, i) {
		this.interactions = t, this[vu] = i || bu
	}

	function dr() {
		z(this, dr, arguments)
	}

	function lr(t, i) {
		if (!t) return i;
		var e = {};
		for (var s in t) e[s] = t[s];
		for (var s in i) e[s] === n && (e[s] = i[s]);
		return e
	}

	function vr() {
		z(this, vr, arguments)
	}

	function br() {
		z(this, br, arguments)
	}

	function yr() {
		z(this, yr, arguments)
	}

	function gr() {
		z(this, gr, arguments)
	}

	function mr(i, n, e) {
		i += t[da], n += t[va];
		var s = e.getBoundingClientRect();
		return {
			x: i + s[ba],
			y: n + s.top
		}
	}

	function Er(t, i, n) {
		var e = t.offsetWidth,
			s = t.offsetHeight;
		t[ta].left = i - e / 2 + io, t.style[ya] = n - s / 2 + io
	}

	function pr(t) {
		var n = i.createElement(no),
			e = n[Co](oo),
			s = getComputedStyle(t, null),
			r = s.font;
		r || (r = s[yu] + ih + s[gu] + ih + s.fontFamily), e[_o] = r;
		var h = t.value,
			a = h[th](co),
			o = parseInt(s[gu]),
			f = 0,
			_ = 0;
		return sz[Df](a, function(t) {
			var i = e[uo](t)[Za];
			i > f && (f = i), _ += 1.2 * o
		}), {
			width: f,
			height: _
		}
	}

	function xr(t, n) {
		if (nh == typeof t[mu] && nh == typeof t.selectionEnd) {
			var e = t[xh],
				s = t[mu];
			t[xh] = e[Ah](0, s) + n + e[Ah](t.selectionEnd), t.selectionEnd = t[mu] = s + n.length
		} else if (Eu != typeof i.selection) {
			var r = i.selection[pu]();
			r[xu] = n, r.collapse(!1), r[Tu]()
		}
	}

	function Tr(i) {
		if (NP) {
			var n = t[wu] || t.pageXOffset,
				e = t.scrollY || t[va];
			return i[Tu](), void t[Ou](n, e)
		}
		i[Tu]()
	}

	function wr() {}

	function Or(t) {
		this.graph = t, this.topCanvas = t[lu], this.handlerSize = KP ? 8 : 5
	}

	function Sr(t) {
		this[kc] = t, this.topCanvas = t[lu], this[Su] = KP ? 8 : 4, this._rotateHandleLength = KP ? 30 : 20
	}

	function jr(t, i) {
		var n = new fD;
		return n[Qa](Hn[qr](t, {
			x: i.x,
			y: i.y
		})), n.addPoint(Hn[qr](t, {
			x: i.x + i.width,
			y: i.y
		})), n[Qa](Hn[qr](t, {
			x: i.x + i[Za],
			y: i.y + i.height
		})), n[Qa](Hn[qr](t, {
			x: i.x,
			y: i.y + i.height
		})), n
	}

	function Ir(t) {
		t %= 2 * Math.PI;
		var i = Math[Ko](t / SB);
		return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : ju
	}

	function kr(n, e, s) {
		var r = i[Iu],
			h = new sz.Rect(t.pageXOffset, t.pageYOffset, r.clientWidth - 2, r[hu] - 2),
			a = n.offsetWidth,
			o = n[ku];
		e + a > h.x + h[Za] && (e = h.x + h[Za] - a), s + o > h.y + h[Ja] && (s = h.y + h.height - o), e < h.x && (e = h.x), s < h.y && (s = h.y), n[ta][ba] = e + io, n[ta][ya] = s + io
	}

	function Ar(t, i, n, e, s) {
		this[zo] = t, this[wo] = Au, this.kind = i, this.event = n, this[Eo] = e, this[Lu] = s
	}

	function Lr(t) {
		this._4p = {}, this._ky = t, this._ky._1z[Ru](this._nn2, this), this[Mu] = rz[Cu]
	}

	function Rr(t) {
		return t >= 10 && 20 > t
	}

	function Mr(t) {
		return t == YB || t == WB
	}

	function Cr() {
		var t, i, n = {},
			e = [],
			s = 0,
			r = {},
			h = 0;
		this.graph[Df](function(a) {
			if (this.isLayoutable(a))
				if (a instanceof WN) {
					var o = {
						node: a,
						id: a.id,
						x: a.x,
						y: a.y
					};
					for (this[Pu] && this[Pu](a, o), n[a.id] = o, e[Vr](o), s++, i = a.parent; i instanceof KN;) {
						t || (t = {});
						var f = t[i.id];
						f || (f = t[i.id] = {
							id: i.id,
							children: []
						}), f.children[Vr](o), i = i[s_]
					}
				} else if (a instanceof UN && !a[f_]() && a.fromAgent && a[h_]) {
				var o = {
					edge: a
				};
				r[a.id] = o, h++
			}
		}, this);
		var a = {};
		for (var o in r) {
			var f = r[o],
				_ = f[z_],
				c = _.fromAgent,
				u = _[h_],
				d = c.id + Zh + u.id,
				l = u.id + Zh + c.id;
			if (n[c.id] && n[u.id] && !a[d] && !a[l]) {
				var v = n[c.id],
					b = n[u.id];
				f[o_] = v, f.to = b, a[d] = f, this[Du] && this[Du](_, f)
			} else delete r[o], h--
		}
		return {
			groups: t,
			nodesArray: e,
			nodes: n,
			nodeCount: s,
			edges: r,
			edgeCount: h,
			minEnergy: this[zu](s, h)
		}
	}

	function Pr(t) {
		this.graph = t, this.currentMovingNodes = {}
	}

	function Dr() {
		z(this, Dr, arguments)
	}

	function zr(t, i, n, e, s) {
		e ? t[b_](function(e) {
			var r = e[Nu](t);
			r != n && r._marker != s && i(r, t)
		}, this, !0) : t[Bu](function(e) {
			var r = e[h_];
			r != n && r._marker != s && i(r, t)
		})
	}
	var Nr = "ac6a3213711f188c9a63d97ef92eee4a03cabe39991d68b39d9a50e2d71b2ee83e9f44d6bb5ce7f65297d00c9511f82f44e03b84eec1c413a482d1d8ebe0da02c965b1a7212533c16f4aff6edf58c1ca6dc764ae4c7c643f6bb9139186993955c0b05aa66aaf2e88b2db0299268f1521cffa9a3a1898885968370fce2609049af4cdfe54ec49f7c0fb68b37c83fd3d021b9e5a15839c6ef2c452f17c14f2335dd09d7d0983120d6af85be64baace1cff2d39940123d85a72446c53fa24bfb48bab70d6413c21124b38bb843f67f7d361b378f581e87f332ceafe42ce10a8b30089bb8edc5610f62a51c94be42b98675ebcf86b6a94c7ab7de74e4b20339cef4d9d353474628e4b090bbf8c3a5eebadb9fa554cb11c3eabee3b44acae1ac28df0eb7834f55423294acfa6ad40cf2be711d0751126392d27137951cafc0c06a019a6384e9c1dac4c0c12d4a0c1e5b946bfa65f0ae4f480f6ef5d46b021b2f6cdbc277953f6401a6a1a0681b82ea5cdc8beac9bdccd74f535ee109a617a815c765e321ab5808fe46dbe0c1cf9a31ace1e6188db60fd896317bbfe99d0e7a89559511859d1850079bd0a8161d1a9365516971684476f6735e260bee044e0d50fb423e34f602d04f4b6decff457ea03d9b5d14b001fc059c7a98f30fbdc7e83d5336e154ed35e0f9bd4133bda52a7aaf6d3c13103c750e6019171965b47f2cdf9cfaa459bd8f3a3044ee7153c91814e23e8056bbaff97cb43b563d56fcd2287db33daf52804c1eefa999f735a4ac177c87a52c320d7d2038cad2bbf5a2fab140fbf90fd99a793d55deb4e982edfad50afdbdc8687fc523c95d669b511b5c9d6bf38e10334a57fb7812da9ba9c15a6076b9b76a4ac70859d5110de79337c1e0feeb880d42bfd69f875d9974b39a6ac8a61fbff61b04cb39a5699ca5e55773c9b1a5b5a43a3aa9bc74c47a428c304e56987a4a6d437b46951223b61c54100b5b8f402d619cd64177e877850e456a50c7f6c66481233fd3224a6cc87a7c7332b9e08293967c8eebe1f4de1ae8ca8d534dd33108a4b68c0bab4a3e69799f6aeb78102e689b87c57f0e3d9a9405676b6463e3891e402bf03a4161b7c05827636d9a48b559c67ac406c2c94a7b24233c0fadfcae93e70527c58a4c212284395db804e5483726ee2a11832d5e03a865e79a48c420acffe6f3ec85faee69cab85bc834e68f4918b09d9205673ff595344162731d6dcca17da29c384193d4f206ab324bcfdfb09324557d83a0def08006625fd891f432a57796173e600f05022fde26c5174a6d38825977cfc06009f3a529e34271c10bd4003b1b6954604285707c405a3bbf2277deb1520adc5b96853e0a4cd15625a5d34b3b88e4a54049adef52e71e418f408dd0814acc83807e1b76ea479a6474a9d17348dccff6518070224b82b2433349e6fc48c8374d82e228b5e1338f0c3a6be832e146a42a4ca79f10c38911e3dab00270c557bbaa340e94d4d8df6fdfa6eac8a8f881335f104f149289174b2201716419409adb411b34058a6cc9bf90abd883058d0bf8af3f5ccded45058885a1865196456839b4021fa0bf066dfba78f20f9ff92bc07e770b587aaf127dd5635c36b16d3cb7bfb0cac7b9578ac46aa5e153e5f1eec19d8298ee1cfc2300ea3760f6ba0125d4916e5d5fc47ff7ae39c5ed9defd149ebf533ae4bed0b86e35c7d12ada8941917f81074e69fd916be1f4b4cd95c688996e8742f45ce28f223b29520f7d6ab4df26a5663e786b97a00beb33bb6c5c28d030c5920a7462c72acf3d8a3e2e2745eacf6aad0ba4b2d5993a3ed3c75b7aabf77dbf21603ad918783c92714074494e16303b3a61ac8c8b8653d17b4bc9a3d0791c52fda3b8fa42f39e2029cd409bc25ae52fd888a22d7e8d27e75f51341ce6e27e2702bd38ec880ff76c2eaa6f98fbac076bebf2d22020a782d631553c882fff44502f03bb2e850aa5871d1ab488aeb47266d9f84cb6fb157d807433348076c0aaf908b926987ccb899a282cefb0c3e917efc5ff3375c27f5ce0d9cc515bcdf2ed8a5c897dd7a75a177ab4e667928c12ae09a21ac01f781ac33d440fe037f206efd806835f7e63436089ab5c7e0a9f3e580c8ea819f630637ff210fc6345a8b7fa8ffe293a58f059aac4d052f26ee933b6afc8d61b34f121f32273285700e062540ba41b4b4ade9ab53475456ce17384bb5445eabb248ce97db6ef91df22dd1d3f80f61126057d35fb347871f9b0e41804b9ee296e9fcd5fa4a71cc8f1cedbed7a9f60b4b9b37cb00cea581c67e8c261c57bdbd6f7b87e8e5e763596b9318310980ba88e044c87da9c771ed5084352e589a8b37f06ed599e294b01e4a2ab71ebaea23e2b1cd4f38ab441bd18bd1a95980dc70f76f60a6c133d96b232e72a0f314dfaa54f9c78e19662d25f99ffc368be6fbdae41cea35b553a018e86d1e31b6d5f2077c0b04c4e48f60ea01aecdf6a86c374399c72be5cf87fba2ee5f43e61c671b718f52118913e05b3d96d371c21e9d1fb388cb1ff63e2dcb3a701fc39f6fae5950d15c48c1aad454035fb19b9e316c8f45a8ce1f8ff1f444825b9087dc9cdb3010ef47e21d9821bbcbced4abc7a6c39192ddb883d713885c108efe611f288940157abe5d6672f9e64a0b05e6a7e608421f7b37e37212683ab7b2160e08a358a8ee0991e035370fc0d28153088db9ac97fddca53789dc27aa1e2206b0706f06c9e3edcdadd4b6d586ee68c982140cc28858cb51b03465f9f626adb417ab52197dfccc4b62a45d46dbb15bd2bd0d65bbb80266ba588a55b717a9b6d62b4bf5ee5beb022eb0850759d25955cad3540af008880b7c2df7b1b86c4f1a4867e7975be9575c8799e9e54b64709b91b801fcf1640dc2c9f5777c8f766995eefefa277744050abeaf9bbe024437f439968d34df5012a67271575aa214b8ab864946584e7b9311b83f49b308675c0ced8df7d706603201dda40a905206dc9849ac74b64205d0864d750e2725656ead5b4d2d24053b97f6186224ba1e3eea404317c4e0892781986a1581e79cecf31be562cec697cab5b7af860228b27d6d19ce64a3f4d4dc5b4d321999dd8f4975c312993f5f534cad8b9a517ea3a119ca0eb6be2c2c60957299d395bbffa0c43c18298e2ad0d9f5c444961e0520f58bbd8cbc1720b8bdc4a3ea6fa2f6d3074cfa8de596125dd423968f331a72d5d1bba44bdb0df1c8ba51c0a7d5e5de403b045b5b30930747c2eb6b2f39736f2d57a1847925bc17ef66d84cc43bb95a28f288eebdeb5b0579227dc1e32e45a793c7f5414016b210d1588ef6748cba2711576b9b4b17daa14e0295c9ec1e35f2562063c27135e0a933364290318c030e4f912dd10ed1272aeb435c2b93e2d0803d133bb118006c75c33be901114c36160f68f65e8dd211ce8485e00760098c9aed7a9d9c3af6e9a179d414738b0af18e8a141e6ea243c2775c3f8b4a11fd82623dca2f5bc720e29fe21f3e1ab50c16845fdcf65f67abac1acb28bdb23bc2723433b138140bad9bd269190d32bfed9a8cdb179040ba6c70a15f5f2411c16e32d553611b3af5f0ab7a89ba459e197bbc808ce9da394de080867e3053c8e82d6bdb9a8b7d3f8a1fe79ed1dd799b22cdd6e1957bc71f7f49376ed24b39b93100391cdcbcc652e7f40b1deaa921502923ee9346437d30953fe56fade9ec369e1cc885ca333865d9e978041505ce8676a202774cf450a64bfef2e2a69d400750c6ec5376f1db2f44d4183a072f0007aa9af16ccf42789a7677836f386af49d476dd7872baebf6086c48fb9a10e78bf43525dd07eeeca84e280187f3ca9fe0c72064e6e417406b9524aa82f4e4fffa015f9d2560f5cc44072286b841d7b28f9d4fba8ed892b54baca6c5267d5b79c85344f9ce0326104a4714df84e47ba7ab3e23b9db872f1a759945bc2f2b00d689233e866b52a4ad5293a3276db924c64b251868b7eb85fb815d4dcd2878a31744c19150ce1f6a4bedb6523f825d8929ae42846074068c86a25f901dc74293c28bb179fc7f3393af5cd88dffd5bf8b519b8671ef6659dca5c99dfabe67c65e6146841a36b9c65257676559725c38803c8dd711f23495456e2179aa8219035a6c149a8a82bbe278572ccd0d6fa60b711fae964b588b049e073684b6040b0be3c151d32f4c2435bc113bb1a130379fbd5eacde98d3d59b31de577318ab41534b2a41cfb9cea36ed3cf1bf375ee71c1c8a15fc575d387f89a7c007589b092c2efc41daf1f98b1d602377e8de2d47b5c1dcafbf68e3c2e597d973431acc5c58dbb5ee257496cdea4070e5f6765dcdb236d42e09bb72e8479232d52bc5ea9220b58d7c1c17c59051e0a7316fb32509fd6f23df401c661974b1e4afcbb6727d61404e9bb3627059d7a5102f8f0705e2da2ed64d3d74160e2c3dc85a3ef0b8379ddc913e2c3f96e37e02ad648b99d7b621b02f99affafafe87be96a0342e0649668ec661e7ad3e08853b3f909cd4aabab06b05324f249adcb6748fbdd4d5ce0e0c1e621bea5763a589e777d160a4f91827804f0515c018880a4c1a3158409a5746294e1e015a23247628596217b85572a69d747d2463f88fe07546378eed8e5d8f2a47edca4a6b57aee049eefeb1ad11576f6271e9c771077167a0ddcaa2f184f4e2ad36a15923e6974bc24b46f0c0fd101ed2f00ef664346253c3c0133252aeed01863f930c87aa910f495858a3a76cfcae141d908fc80714070aac29df355063e5bf1e8ec49b3ac0b94c11319cc33e95734c20a76490311483477f9d0e29b39fe72b379ef1249e7476f5a02ca2e6cb7391193a352bed4184bd5cf360e2347a3ca421afd225f7017f35e6dbe40a26ddfe38174375a36f3661806a039f401b549f23e7386375963c1ccff6fb1c67db48e9e17b20aa7265fc2504b754512df019a86bf5c919e545a01dda15ccd151738947f728663420fb2d6172dfaa70f8b9a828f8e53582528669ef2f497b2bca3f0e1db03c8cbf31e7ffd1220d91138783ab5b9609a977f587d7df819d23479c47bd95c20a987dbe19f0f6c017195143dc6a96c45d70a13f1e6fd2e7e07e667bed427541846784359dad7d3de23fe7456ccea30441b5a6fd1e6bbb70d4fd442c4e15b7b7f83bbeb94f05a3312a517270082f3f5a018aae9c093fc7bb027bcd03fe606366f8b66b4e4451eb237d4fe919a02a56bf6cdeda215263b99f21db054bd24372e3b07a142a44abc562e49b22c4b97bbe68b0d0ae706d9208bb77737f205b10b442b2ae81486c61240ae81225cdb10f6c060505fc3951109a800b0db5548aa63ab4febdc449226ae2c9137384949a83871244db915a7b850cbebf1214e57b357019ef557913985621627582307a4bb4d9735118473b45c5e9f54bcfd737060064b262946dc57e15838353ded44dcb5a027ef30f09f2187dd5d5c0facfbf7939daf8cbd94b53e18b89b1dde74a25f562822dc711d88a3511a1db5f3aab04efa009b0a80d5f1806bf53d5630844c3a2fda675c15c53e895c60c526e272ad2783c492088b1a83be0f9d226fc7d06db1a720bccd075cab0bbaab359453f85d60741be7388e9dca98a02d60c2a60f5b8105dacaf71ea1addc335b75d42817e357977da09096e532541b71f8592c650c6a84f2c24a79cda614fd5ba909b88ee2a720abb7c30aab8db1bc00d73c8bb27a0d3bf7c38033bea4b994e97cf47120e9c55479fbed7c3fbe93d503283440e9feb991d0375c26619502c87f7bbf8dc9d8efcdb67a8822f86b0a4907c587ee6f847bab4312b42d5ee4c89102c8e4fc1279e178801f588ba56c8e44c37590f7867451e5c1977d65e0ffb1c1fa1bddbf49dc4b3e4cedfdc53f95588f5d5ecac66b73abe0f225741aba509469e693cc30a9bedd26cf994ab49c8c4b6ca48bf0f0c56d92d36e2e25e7d393fb5c31db24f63232dd1c860f21c46134ad2cf93498c0346d4ac7945a48917871c4ac2a4b94f4af5a640f12e766dd23e973f8c5bd7fc472fc69759879a09a630bafafb52da0066716df1af856ec07209ccd1607a79b34e1a2c51935e0208b69a8127709ccf718574277a98cb6df5d2bc9ea0f312122153f9147741322083b386f460840a5561b33c74284858bf5fa3063754613361552e10d578cb4b2b16772c82c160f7f3a21c9efdfa1fda375efcd4f69b65268d617058efe2b823e1fb1a469d53f4503ddfbfa22146939e3e0c618f39f9dbc11f235819c73cc702405b129da2117b91b9446521d85ad7043867181913ed8e76300074416d504660c1604d4a42bb149bff1d2337bd74dfdf6a5881338e8323d4f563e3a5cf750d37c1a949ac4de6896664abeeb76e67a7262683e09d0d09cf5bfa2ffbe62a68ec435beef2d21c42efb5474d7eaf2d52797fd0f9e8ad575bbd91e524f7fff28ba5e2f10cd15820cf779e81fb175f49e4f4dc4e16f18eb06adecdd027e74d623003891d9d2db70b750f13189a1e5bef652f18b21af1a153ac91e99095ae02fc8a3bd522f32a77cf5bcd9d29c75aa16e47b246d4c827be771dfdeee7cef68a86fa1ef75ee3032413c6fdfc32a81c50664b86aeede3901c64d7e29e1e18d192fc2729b343a3b4afcfb0d8abce51fb47ca5f75675fde2b8b92c7a437ca4d416135460d53ef3da81bcd7478d6eff0ea9967ccde0b0020b9e2e8ad446e90213ac68da040d55d1fa5b4a9e2ff68c474c0e0b73378640efdc4237467e2a7a9f51959581438df3a4d264e00b639c04c5aceed0475fb44f59944efc355e32f1a7bc9c90ae2d0363d749ec92b58d6c01b4a05c242d0e853ab6ab50b2b471e3063a11f4670914b79314a85261e971fe436105603bd469afefe8d4c4261a443fde2c34ab1e80fbc6c67a5dcf90f885c3a05d6827ef61808268d28e0271526d0da602eb400a2b1884a777470c0f4eada6f2c7dd8febe35c6ee33a0ab79ce40fd09307a9b7681270d63d4c9586f5f8ac9ac99c540a2d136d64feea9e787e34791d479b906e853dd88bcd82c1aa9982b4b51197d311764e2380a5af91764bdd068d1e9486a8423cd9d93fd8864f124ba72dd42ac3fb52808c3a244b7f9ff2e215a219742b82b2f942bab11e090f50e7f0c60ed2cb43760b05343dccba16ca790d2ad4b4bb02b4a144a2c5ed53dc76144384f48a516447e4869337103e6fa3a8d45edbfb2b97563d0ab24f6d693ec8063c1d201c023903f2069c54ac6f08f050e83c66bdc401cb38ab649fb49c3f53463b9c7ff1375bda050671c15a83aa4490993b08cf86595bf5e600b6192742dd2a820007edb6415bb2a88bad913725fc2fa59942636a0309d3160957248a937b4eee7d1fa0d829b35a1c9f759379aaa6df88fab4833e4e95389c2ea6a50b512778cc4a84baa39430dbb493c142486b413e92231168b005c04a8cebdf61c6e7522a70c57ab7364ce32e729cf62f77c5aea09ceb5245434485e570d340d930b67a2c9b0cfc4eca8cda9acba00ab089a7973738304794b6330807620d20db004e78763d4a57db84814e5299f2cdd7bca12344415aaadbb55b1b5ad00a7019c80af47ad12352c59133ba8627924112e5d428d3485390b8a4fc80efa091113ee76bfeca712349b2bb3239266b212daa25d3f2529e341de1f40441eb357cd1f4dd72d4ca2fde8ca81c9217236041e8ef846f89862c3d49a4526b9aede28c8b87b2bacba239623a943e81c80693290aa8807caa831695026133ec3e2e2c8637a29587563beaeb01c733d4070bdb5d936d9aeb43cfb2f3cb17790a221bf82c4ac1968892929133cda5c70d92d429b35e7df424de71411506f744feebb348da991ba5d7ab984ae1da1dc0450b5fa8bb29c71de534040a297e86a0b384605bd229caa045f29dabeda88b236d097dcaab04997f6353b7694495ad5699e7e479a4d5a4912a9b26ca1c38e09d2b9dabbef3d7d8b5806302104d639188d5d2e1ebe66348ee946ad63a7d8318c7abd8008d5cf58d886b822690733ae55ef8c17dca8c8174ee191d6f2d1b3d3a077b2ff3cb1b050a46ff433a421765790c5da71509395e773001f616adaf7e83a7ec75db8ec659f72f3a66fbb5442c898ae99e87d841bb6d9979523f525f83b99ce18224e0f9156672dee3e3fc6462ab4e0a7ff5c88dc005c52da10db55f03a5e7ec8dc46ab18f550679c30aa822455c388ee25a56a6d229aabf199eb437846af8e4540c85efb8be05d59971d68ce5f6c66b91468b472871430cf314435e50bdea1c0432991d6dc850c67fe88b545f7f012fb4287f21f0a309a41d73e5f94d2ac7776a7e7468a7ea3af3237ae0783a9cf439da5385e72838f553b94dbddef693883a0422faa5d8675ab33c32226af5ae08a5fd1811bdc841a665bb96283550fb1b8c2e1806c50e952bca3d6d1eb3716fd5aa21cbe81a25ac91555d3a89d444a005f02123e3481ae14089a39e70026c90cfa6dfe5ac113858d685ce7bbb3b8456d576a95c1c76cdaf3fdad4521e5decddf940bf4ac52e5f3e19cb94432caa739d0b971476a9d9466f3a313905ab1d0b282b5289eb17bd23d46de76864022bae3848365be1929be06b4bcc67b2b119a73edd1a79113c60c90fb04b9727cd147004890f74932b0e41c4d7c33201a843d93155c9cbfd9ea5dd1598779c14b877314a851341c9e9a7d8f2811c378725e209a7d3b91abfebf3b399c46233fbf7e412a396ae3145e050db1ced566ca2a5330be1575bd4a41339999c6779c7a3024793b4045c4fe51398ee3d07067de1dd963c330ec9717edd5023a2d90b5cd0b9d6a6b15b68eeddb19528841b3c25cf61d77104c3a307b1f4eb055e6e72702f30586de95ed3e94b658bfe45a6f4e485d39845080b752e01c5a65e3315d4320eea4c5ff6470ce120124e4daf753121e9c582008421067a03e96509bfb3bf0883f4d3c039936e73f05a80a8314b288d4f94f42bab2ab250612da3f68748a095f6b0f65e92415a2513eda73b1537a6c8e91a4c06cecfb92eabfa2ddca13878112ea28f9965e800b4a179d6af7e5f71139c89bcb8b68823485d7bcd86d9856ddf8655bee6527546e8592395877a006ae8044cfec8b9140c5ac747e2c2e7939d81d70480c90bb382bf0f2b7aab8233785ee977d16206c4a2efd03404755951e2a9be6fa297068cbc3339f19bcb54f942a77744daa5a7bac84ee89b3a85a6d8f3751332f025653c2712c0b56cf5902cbfff1e788ee5ebbb5afbdec65b0f1e45fe6d96e696bb7a93d1bb1cbe5c100cb082295b1bbe0cabec39e84cbe235b7560140b978eec9b3e9b64b0fa2a1c1b2a566e0d98e0d946eebe0cfa1bf524d421d1008b1ec88058a0c8839079b0973f703501d777a57cc24c6e70a14b8180724b833748267fc582364111f7befa3ab7a2d01e55e890e4c7f7ccf7973ebc2ea2f2257fd215a2ba4066e48da67ead6a75996cd25747999a70fb5f9e1189d9ab93fefaccefe8d002ced17d31d6ccc07ca916ae6715ca78a21818776dcc73b6bea62092584d3c17de2d24afbcea54781634c3e8acfea827dbd5ca82851f1aeea15c643d350e777a915ffaad485555397b0366a67cbcdf48fbd3668cde160f551c24fbdc0cdbd1bbac489f0a001dd5a3d45fa5d11e078fd75f22ebc94ee03bbe745ba8f712717e6a1010841508a772e8d0b65f19107fc1b28d0f0a4d5484fd516d3c521b9b0d80b2c946590b0408847d430995a12fd79b674bc8a0f469d68314ca498ee7daebc2c7e9628c9fc54971e6a272b84c3043beaf90c09cf5301c296acc2b7e98800731be4e2990c755949926a2fb602f6c2b2059f7f84ad08d90c59445e272fa3bd348c6da758b3aef4ed1812a6d9f1f6bc94854c9de795cf7547d08664fa4a85ca19b70609b2e87b488e0c2c4f0b028ae4f86ecb27d8ed4be6d01c9c4b6a646ea23d8dd6211a7c9fb3de357069b1a297dd85f11ea109627009b3137c4c088d501abea38cb56556f4129bc407870c62ab25e25400c4f34d930f11f95631ede157478a82aa776de96b764ec7431140fcd04cf773fc2e0b21211787d93c9abf9d4b5117a17ede88eeddd574a42941e4cfacea5adc3901685165a13356d76aef1ddd9f1a0ac0e7828a2dc6e2c08ab10ad0ecca9e55dbb68a5cc3be67dd651829851f9cae99d30d2b71378be8792b93ecb92a16ba48ddcca5da48e9996b6bf35605340bd6f3cc8c3ed3112c4d8512812e0338b12f751a97238d71515305706800f7d289ec244fe7e080e07918b630984a8ddcbc89478c15fbc3d660f9ece0be15d845b53e54096069c7c3ee3336990d9aeea21a767a4f25fabcb2a42b802a18f8ccb26b5886bd1f2ba7c854c3d08cf0f8ea229847b1335439622edfe8162e849f6059cb767d744af4a67abd64e09e059cd698901350265434a6cdc0f539aa0fc9814b7a5de55fd869f92e559fdeb0405703133391866613eeda65e39b565249653c3dffb2e5c1637324d550ae65cb8fe776476645fb8562afedd7a457ca4873997c4c2a49c308415a92769cfec7dde512424a1378f4adc9f3c2255090ec93569cb34f5405d330297d630ba2b841210afa487129db88f7287b5e6e222ffadc99d1b149fd036ce81f7bb6da3f4ae4b36322f95553ae25468ea61480dca7bd31bb94fbc67b7653381ce7dc717caa7f4854d20789d299aca10392b300f7677ee9bb20c13d05f9ac9c016dc63963b5036b5d93ba39ef20a5d0a5180c7ecd1113c7b93f79a0ab9b403c0a3214d668180f46069ab2233f21bf2699b94cf55f99a904f622efc7cce2b4d3daf95da8359759685341fbc1c4072c8e733f81212c1ae3d1f029f36da76880557573b69f0b54d4f5f46850a6f659bf37ab36255d621877d67bd8deda8d73db164c8282f8ee7c9ffe0d0c56873dec523f2f5e1172a70f4f8005e3531585a6f69dd621ab1b504ac94075c7917fd359395709060f00d068f4e54f0905a57e5147738b0827ddfff6a8bfe242050433fa5f8c7f0281790f2a9d8d16768dae4b8ba0deb6e848c8d9d70859d7a53f26415246c36f724c8b3bdabef51aeb451e5359e07dd60ac2c2469450de8b51e81db7a38908ee2b6a798043370811c29e4fbc61e10bb5aa44cc02437ef842eb308626db5b3b9c932a8f8b694e4c441a30e4ba3faa76fd2e98297cca1b11bebd36dbafd81c63a8dc89bf8dba26c1a9492fcdcf2796364168951bf80b37a3a9c05852e6186612a64f479d73be44000c39e931fd835f9fd7bc9cbdc87a52f056fd17dd4f146d742df705452b7a115130051a9086783c4e4c053913fc3f446be4ad28a6262bb61bd3248c6613d59f7fc87cdf87c02e5e2849066ff9f0f2ab50adb8df8a2d2ba44cbab40e3525f40cab3135d408d15848b502f87991d5886427e991633b53b0538921af1cdca450e4ecfd012ae82073bf238b4943bdae6f95b641899c450c3be00a254afe69e86a35c77e07055ac8a605033a61bace396a21b348bf156583d2d85d87ddfb99e2a500c6749118d6a74b9564ece69ab07c17496b0dca8e21df2fb5f5297213444f3b904a520a16a850fae9f251e5263cacb69e4857fae8d253238b77a30b440eaf75d44410bdc44eab1e50e7d6a15cecec550e62e4a68afefb18b8e81cbb3ce80a39985af549173112414fa7cc10d62a9b73e0ce71f79e8ccffafd646a7477562ae638271ad0d932449d454171fd9fc7a89a6e5d3512319ea3528b7fd0faffe33c2a30b38d7d0f4c204d8d8bff9a94e9597235cac0ee1e9a31d52b2b75dbcaa11155b447843e45f26080d4728acbc165c057bbb2188c3521e95f2c67f0578bda2224e3a43b30c76b67b460ccd8190487850835e7e0a687b14d66642c1a15b50da28cbb62fe72013c98049f33364d8f7a6d0ec75d263c063edf7c423f1133350d7de35dee9170154486242980d6092cb4a0b8d55499acc818802761c40e16912bf80685de7d84dc5965dc3d700deff6032271d0f2b547d271e4fb7579cc778512cfb65f6e404ea61ba2699aa110942682eba11c259501bf246bf9aba6dc186efa71f714c22b839bc8ed01c6a35fa080c1df82ebe062fdda97072892e55138f3b661e7b72544c61d4741369032343dd12cf40a638555e38f21bf7d368418c86a46418fbfa69b3bc3c1f00b84d0b228d8921b2aa7657685d60e06f6e234a7adeb27cbf5b4187f5c90cea0e59f474c3af4617a2557f8b997a4030165615f615a19dfd052596e1970c0f63e7c30086ea81af4b26b41e520dbe20ff5e3dc475d08d29f38eacbac9d2df7eb067f3a34cc650f35fe797241b467a6a66f83d0480da3242ae466ef9f1ed2daea74589377a75cc6e0f63241c821660850c1009d50518c49a57c24e8c9dc935665bc47a47e6695ae18cf3020d54835763b23bbc27a80d89fb4b37986059973a21ad25f784ebd5549f9832417d7ccca6d0da594607cacd38eaf32fb4f429d5a1a993d109c65b504967666b07826649266fa8d14f194ee06dcfab59874c7d153a623b92fb740581f3e43f689487de912d2fdba1d61c37e0b9fc4a88482f82eaff6e4870286d6b716afb136cd16226a5b9a8334a687600a6a3c2f3866018679b7b1e41d18718941ae48b47adb69ad25d2e0beb35c873e83e11f8fa6e4b3258e649581d6e45a6bb19112ebeb23a7b031c4cbb0ece0dcab6b2c7697ba6f13cecd37d26ca4ec4318972b41ef9093fd31fc47c1b3841606cc524fb67ccd1e7df29ebfb40eab0de970b715e55a8a5fde8d003a2497f3a9a0e5817417e00409979f267d46137d87835dc2a836e792e07be80c9cfc637bd7d6d267f8e0e87507f49dc35cec00d1ba4d1fb7612f43b65eafde6fd2c7fcca7efe1b27254e4384e9a190665ac2833b132b0a474a10d02b413eae7a1b7d727b9702899c32102c1924b27d2f68fd921e0972cf064e539b062c33f12222918f15ccb2e899ec1e38567ca595c0735ce79628e6070985161a51f2edfa2a2ef9e07b5125cb5721a19b84817d329578537098a64aef678b4bf42185c8d00ff24cda9060e8c12f14a75282cc11e563296c59b40702ef596adbd747eaee6d5f76f21052fff365e39363a23edf25a9d83d621a999f3b1bb095405ce94359f5488211652320c740cb15ac71b32ace3c496c034915a4dfc9497fa5fe79e83779c2cc204393670b87a1f99ff01858fc4499995be87fb632880b95a53a0156166abef536fd4f351d0e5063d869e0ff308608b98bb7a984dd095af088c6567045ad5ec51920e97a1735d6d1cfa4b87f3e3aaf60e95f8def82fb251c0c06a2495743c572ce1ded60974745545060753bffeeca840c1d7b0e2290989d23720b355801e48871477edcbd1ad2d7c611175dd73ac14823ba72d0def774a4adcbcd24fa22947bb1257333c65d8311ea05c6bf70c24538c78bc17a78ba183ca15669c2ac0ec547667e16082b3070487fd19a30054266baccb22f5eacd6f0b675aea9e8c375c52277f8df207905a91cf3d7c91be06677b46c1cd7569694f8531f9b5ee24339433e5084293786bda91cc769a561aef48af76dd632bf96e98a0f0ec223dee1d79675168ceaa51a965684acf5071c5f8a150f566ff7b273f8396630bafa6634d443a1e4864e3a594cb4024da3ddb72a1ea4e42ce4891b9e293efa775313de93a52ca609675da78c6a4bf385e61fe5ca11c5b0fc670a9d2017698651cb72d410a383c62768feba23b9ea570a5c6f885c04f69c04cc048d62fad11ea07bc3fbce2714909460002ae15f9e836a17194b12ecbbd6edc9394dbc58e7f27b094502a89a488cc333b41d8bb5ce0f87760ca1601e1816ed59653aa36e9f949a99b5fff6f065a4b9159b5fb0300628a878e0169280ff0049389916383a77c5fac6e3365d1dde67739c196488318711685b8d05aa3474d823627d33a771660520e7f86a9b67d3fca1344537a6894c04e8eeaca9d161680fd8707e16ba6520170f19230eb79e2a3484007a9c6ac2b66a0fcdaeebe511b413acb967cb3e5f92dba66dd5fa500c67c84af4ce704ff1b36046c8af5e7c71fc89fd386017e102c4aaf789552896b7fbd9ce8892708417857de3bd28447a63abbc6f292503d7b493f1d2b1fa55ab9666eb1dbcaa2fc7ed9190311cbab7bd162fec3fb038e8708b2b9623e1293e31844505272bea165614f18297e86bb204b8c6c1f9f9939392efccefb1694b0009f529e4ae1331eca2b66502cd1c5802250fca6d0a896a9e7f009e98b9fb9e7e2fba266bb5db0ef4f50d36503de6d81e981746d84b8f39ec73193fc203ac1ded3a3bffeac8ec07303338d7f3c3a9b435e5d368b3ca3abc75ee824e6355f4513d3ed4ff47a2c13e3b4e6cdbad410a287ccdd23b11c1ba84f950132c94386ef3ea7a59999fedb65827e5fcc69b9eae0ff2ec885b980321323eee4727fb999c180741c94bf202285686edebe33d4852eaf0a2dcd5e605669d0b461424975b5beef96104ad4e98e44c213c088a26f704e726bf8dada47bc0c8c8e2960dd22452b8dd4fae5981d3d25a17a36dc33f803ff02e7998f7ad62bc4bef1b60b3809287e14c3aaca98febe66175f95332b40d12bbf594365a665e8220223740f63712ab83c15a51007fc8310a8f92ae3b05beb7ea72dcfa19e6ccd105b0081cb3d4fd8ddf2ae8e6375b39bf3cdac24733c4f0192c3481cbb2beac2b8fc6ba6041a7e5dd48691301fbed5c52aa2e6570f8867bcc2d279bb24b67ea810ab5dc7a7e935411797a933c453a5ff50715e561ae8851f094eda6a9a5238319008d0cccf791dd51eadea2e741a11ec5221b87f00ae01e1e6049af1a60507521774729964762411ad4ad450f6e661fde1048cdf78f7292ea9ff066dd22e543f930c64e571bbcbb34257f6f6ac62fcf6fb3a99836221a90a68a46739726e493951c53cb09dfcb1d377c17df9cfd5fe7802fa44fe80d55aebe9dc6a2d5b3bae4c2fc551fbb415c5b8d166742d830569f90fa712b590d8bb02445feb3b44a5cc6c39c3594df9a19a99badcb90ad3cff04a18631811469197890f8e64a158aa7fa5a5c26ace0217f3f1835556c71a387d1c5ee433419ff10f61523db69ea4fb8658185ef3f6ae4ad63da0ce22441288d21109a33a853849dfff3107112b373fb467e17e2ee4594b5a943e395f7a4070655c6cbe607acc3ad4bb3f1b3e8a089e93b76d22bcfae73267bfaeb1b69411638103ad95d5204fb8dc8c1751352e4aa1284ff7b8d12700f62cd2ea8cd04cee6a53fbc2d04640186385f42e96b2102c6427946dc350b16b48c0f76f7ced8fc98f8e622f86d572e085d8b7a1c8079ff9d4e31195c346e0f290db3d51343949eb323ae3d47543ce403682dd40b2ae253e6ec922d6e0945e2d628140e16634e28962624eabb574daa39f840999a45d991ead5e2f6fa5ebbc4abfe48aa4fa27f5032ace534d9edfed6cddc58c08e175b166bf18626030edfda0d75332f2e70ca96c30a04f67c67a55a6e5bb404234a9c45293e23ff8d315a72acc48eaede597ab1ad47ad57915d29a1f7c5c50eeac1b75c7fc0fada37ad6a61a09890d8da42da461dd0c1a2ddd371baad8da9fc6b0f97d970ee8548e0272bd825121e7897825bfdd651eee169316436e166faa14c7dd0757fee01b1ab607245a5e9e682f1979f9eb0ae6024b267fe37e3c62f23db92d19038663ff51a912d98168f779e3157579e644207aafc9f594f47c99ea72c2a54c84e65b358462f22aeecccd16e91232288b95f6f9f5f050863e4413f09ce829009a62927b14b32067093fc7878dafc5e8d72f64d7daf8f42789ba58ebfc8066cf2b24cb88130f57dc299f23c2b02c2a15f45d7706ca41766c2e5144fc52a5c766b0fdf2171300b7cbef9a4c63fc4d7eda68501e2de28c4ff3f7f2d0924f9c1ae1ee95c9958da1551a6356b50b0e9e6ab8a7710c90eaa22c51cbcd9516a2ec48467115619f8bb3a5fb519527f5d30490ffee1497426780b568fdf8417a1e6053644739e8d809fb632857696f86feafb5aacb74fabd3ab2bb49d8b465bcf0ab0d2c8cdb3af837281fbef396cdf6f1148d85fe9472bfdc5459bb7d75357ee7a4019f85b9c75fda6595189d40a6d6388cd04e4035b5b4e4285ad900818eb9e3d071583e3928905ca698899b22f41968e85c550765fbda66c3040aaa13fd315960b237fd31fe849b3f29ff83835a0fa981ed9f695a194a8225beaa748d190fd12c443771ede746f68fc7f10fc8f1638cec87f2704343396a874530291f72b7fa64f5245bb0bcd21a2647ce45fc4f14690eb2ee473819906019156f2a2987ba5f5a91c6848037d2e8af1cfd7b9c6b23b77465dedbe7a9086812e3c578c0d93a7074917ec72c775523f818496ceeea4f3ae80979a5f5069c4a874a855a5b50fdb6b2919d7221ed6ef317c006d403ac23384128028dbbe216cf35ef5ccf7af3baf8f0ed02427dff1910e1056f694facea0f170d985a685d0f785bc94e1c7a044dc00890f1159af2acd0beb4000ff4643c8f4d1aaca0c2b570e51e03ae59631219b320a3d8c2be8121edf412c7661fb5b1d79817ea7846ad791b3b891d308fca7a9606ed4f88e88ea23f14cf036d617bf8e0c111a724f189048ee4ce5a210f7ddc8cad60587c503918e55637855114eab4f58d375cd88e52f974abddd5c83467f204ca452de3c83ad9216f19a68f79bd037d7c5ca4998b542840515a0611bcd0d051ee84554255b97f407e84898f640200974b1d7714d5a3bc12414e8730704041dfc22d755860c7519e0ef8631ab4e32e078690ec878b9b92476d9996def16ac8ab7e034daf1767ee8906bea01d7b9014f7f4768451274d0449d04c61c1d1c42ed21e82d716ad58f63fe6556e9a31e044a41317d996c54c50611a2770d8d4d986e461a161f6a8e6818a009af58dcbcd6951b2eee4e7786d1a8629061388725b486ccc57527d8fe3279cba0385fb7ffa3fa1d1452ec41dfaa1e4b0db064bd98c2709d69b6429ba5fc5e34d512ac2190ddb997184f592601ac908b6681cc19d00217561f30a8354151a1644663ee456eb522991882868647aa1bcf22acb54c536be41ddd77937bdf5fbc63c44f2da8c9ffe819d3c1acd747f6a65102d2848a",
		Br = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
	! function(t) {
		function i(t, i) {
			for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
			var s = Math.floor(n.length / 5),
				r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
				h = Math.round(i.length / 2),
				a = Math.pow(2, 31) - 1,
				o = parseInt(t.substring(t.length - 8, t.length), 16);
			for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
			n = (r * n + h) % a;
			for (var f = "", _ = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), _ += String.fromCharCode(f), n = (r * n + h) % a;
			return _
		}
		t = i(t, "QUNEE"), Br = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
	}(Nr);
	var $r = Br[0] + Br[1] + Br[2],
		Fr = Br[3] + Br[1] + Br[2],
		Gr = Br[4],
		qr = Br[5],
		Yr = Br[6],
		Hr = Br[7],
		Ur = Br[8],
		Wr = Br[9],
		Xr = Br[10],
		Vr = Br[11],
		Kr = Br[12] + Br[13] + Br[14],
		Zr = Br[12] + Br[15] + Br[16],
		Jr = Br[3] + Br[17] + Br[18],
		Qr = Br[12],
		th = Br[19],
		ih = Br[20],
		nh = Br[21],
		eh = Br[22],
		sh = Br[23],
		rh = Br[24],
		hh = Br[25] + Br[26] + Br[27],
		ah = Br[28] + Br[29] + Br[30],
		oh = Br[31] + Br[32] + Br[33],
		fh = Br[34],
		_h = Br[35],
		ch = Br[36],
		uh = Br[37],
		dh = Br[38],
		lh = Br[39],
		vh = Br[40],
		bh = Br[41],
		yh = Br[42] + Br[29] + Br[43],
		gh = Br[44],
		mh = Br[3],
		Eh = Br[45] + Br[46] + Br[47],
		ph = Br[48] + Br[26] + Br[27],
		xh = Br[49],
		Th = Br[50] + Br[51] + Br[52],
		wh = Br[53] + Br[54],
		Oh = Br[55],
		Sh = Br[56] + Br[57] + Br[58],
		jh = Br[59],
		Ih = Br[60],
		kh = Br[61],
		Ah = Br[62],
		Lh = Br[63],
		Rh = Br[64],
		Mh = Br[65],
		Ch = Br[66],
		Ph = Br[67],
		Dh = Br[68],
		zh = Br[69],
		Nh = Br[70] + Br[71],
		Bh = Br[72],
		$h = Br[73],
		Fh = Br[74],
		Gh = Br[75],
		qh = Br[76],
		Yh = Br[77] + Br[29] + Br[78],
		Hh = Br[79],
		Uh = Br[45] + Br[1] + Br[80] + Br[17] + Br[81],
		Wh = Br[45] + Br[1] + Br[80] + Br[82] + Br[83],
		Xh = Br[84],
		Vh = Br[85] + Br[86],
		Kh = Br[56] + Br[87] + Br[88] + Br[1] + Br[89],
		Zh = Br[86],
		Jh = Br[56] + Br[15] + Br[90] + Br[1] + Br[89],
		Qh = Br[86] + Br[85] + Br[86],
		ta = Br[91],
		ia = Br[92],
		na = Br[93],
		ea = Br[94],
		sa = Br[95] + Br[82] + Br[96],
		ra = Br[97],
		ha = Br[98],
		aa = Br[79] + Br[82] + Br[96],
		oa = Br[99] + Br[100] + Br[101],
		fa = Br[3] + Br[32] + Br[102] + Br[1] + Br[103] + Br[82] + Br[104],
		_a = Br[105] + Br[106],
		ca = Br[105] + Br[107],
		ua = Br[108] + Br[106],
		da = Br[108] + Br[109] + Br[110],
		la = Br[108] + Br[107],
		va = Br[108] + Br[111] + Br[110],
		ba = Br[112],
		ya = Br[113],
		ga = Br[3] + Br[114],
		ma = Br[3] + Br[115] + Br[116] + Br[117] + Br[118] + Br[46] + Br[47],
		Ea = Br[119],
		pa = Br[120],
		xa = Br[121],
		Ta = Br[122] + Br[123] + Br[124],
		wa = Br[125],
		Oa = Br[126],
		Sa = Br[127],
		ja = Br[128],
		Ia = Br[129] + Br[130] + Br[131],
		ka = Br[132],
		Aa = Br[133],
		La = Br[134],
		Ra = Br[135],
		Ma = Br[45],
		Ca = Br[136],
		Pa = Br[137] + Br[106],
		Da = Br[137] + Br[107],
		za = Br[138],
		Na = Br[139] + Br[140] + Br[141],
		Ba = Br[142],
		$a = Br[143],
		Fa = Br[144] + Br[145] + Br[20] + Br[146] + Br[20] + Br[69] + Br[65],
		Ga = Br[147] + Br[100] + Br[148],
		qa = Br[144] + Br[149] + Br[20] + Br[146] + Br[20] + Br[69] + Br[65],
		Ya = Br[150] + Br[51] + Br[151],
		Ha = Br[152],
		Ua = Br[153] + Br[122] + Br[154],
		Wa = Br[155],
		Xa = Br[156] + Br[123] + Br[157],
		Va = Br[158],
		Ka = Br[144] + Br[159] + Br[20] + Br[69],
		Za = Br[160],
		Ja = Br[161],
		Qa = Br[79] + Br[29] + Br[162],
		to = Br[163],
		io = Br[164],
		no = Br[165],
		eo = Br[166] + Br[32] + Br[167] + Br[123] + Br[168] + Br[29] + Br[169] + Br[82] + Br[170],
		so = Br[85] + Br[32] + Br[167] + Br[123] + Br[168] + Br[29] + Br[169] + Br[82] + Br[170],
		ro = Br[171] + Br[32] + Br[167] + Br[123] + Br[168] + Br[29] + Br[169] + Br[82] + Br[170],
		ho = Br[172] + Br[123] + Br[168] + Br[29] + Br[169] + Br[82] + Br[170],
		ao = Br[173] + Br[46] + Br[174],
		oo = Br[71] + Br[175],
		fo = Br[176] + Br[123] + Br[177],
		_o = Br[178],
		co = Br[179],
		uo = Br[180] + Br[100] + Br[148],
		lo = Br[181],
		vo = Br[182],
		bo = Br[3] + Br[32] + Br[183],
		yo = Br[184] + Br[29] + Br[162],
		go = Br[176] + Br[100] + Br[185],
		mo = Br[3] + Br[186] + Br[187] + Br[130] + Br[188],
		Eo = Br[189],
		po = Br[190] + Br[191] + Br[192],
		xo = Br[193] + Br[29] + Br[162] + Br[186] + Br[194] + Br[123] + Br[195],
		To = Br[196] + Br[29] + Br[162],
		wo = Br[197],
		Oo = Br[198],
		So = Br[199],
		jo = Br[200],
		Io = Br[201],
		ko = Br[64] + Br[202] + Br[29] + Br[162],
		Ao = Br[196] + Br[186] + Br[203] + Br[51] + Br[151],
		Lo = Br[204],
		Ro = Br[205],
		Mo = Br[206] + Br[64] + Br[207],
		Co = Br[3] + Br[1] + Br[208],
		Po = Br[209] + Br[65] + Br[210],
		Do = Br[211],
		zo = Br[212],
		No = Br[204] + Br[20] + Br[213] + Br[20] + Br[69] + Br[214],
		Bo = Br[3] + Br[15] + Br[215],
		$o = Br[216] + Br[100] + Br[217],
		Fo = Br[54],
		Go = Br[218] + Br[64] + Br[219],
		qo = Br[218] + Br[64] + Br[219] + Br[64] + Br[220],
		Yo = Br[218] + Br[64] + Br[219] + Br[64] + Br[221] + Br[64] + Br[222],
		Ho = Br[218] + Br[64] + Br[219] + Br[64] + Br[223],
		Uo = Br[218] + Br[64] + Br[219] + Br[64] + Br[224],
		Wo = Br[225] + Br[20] + Br[69] + Br[226],
		Xo = Br[227],
		Vo = Br[218] + Br[64] + Br[219] + Br[64] + Br[228],
		Ko = Br[229],
		Zo = Br[230],
		Jo = Br[231],
		Qo = Br[232],
		tf = Br[44] + Br[233] + Br[107],
		nf = Br[44] + Br[234],
		ef = Br[235] + Br[236] + Br[82] + Br[237],
		sf = Br[44] + Br[199],
		rf = Br[44] + Br[238] + Br[123] + Br[177],
		hf = Br[44] + Br[238] + Br[17] + Br[239] + Br[29] + Br[162],
		af = Br[240],
		of = Br[44] + Br[241],
		ff = Br[44] + Br[242] + Br[191] + Br[192],
		_f = Br[243] + Br[244] + Br[245],
		cf = Br[246] + Br[244] + Br[245],
		uf = Br[44] + Br[241] + Br[82] + Br[247],
		df = Br[44] + Br[233] + Br[106],
		lf = Br[44] + Br[242] + Br[106],
		vf = Br[3] + Br[82] + Br[104],
		bf = Br[248],
		yf = Br[249] + Br[32] + Br[116] + Br[29] + Br[250],
		gf = Br[44] + Br[189],
		mf = Br[193] + Br[46] + Br[251],
		Ef = Br[44] + Br[238] + Br[82] + Br[237],
		pf = Br[176] + Br[15] + Br[252] + Br[130] + Br[253],
		xf = Br[254] + Br[130] + Br[253],
		Tf = Br[166] + Br[15] + Br[252] + Br[130] + Br[253],
		wf = Br[190] + Br[130] + Br[253],
		Of = Br[190] + Br[130] + Br[253] + Br[51] + Br[110],
		Sf = Br[254] + Br[130] + Br[253] + Br[51] + Br[110],
		jf = Br[166] + Br[15] + Br[252] + Br[130] + Br[253] + Br[51] + Br[110],
		If = Br[255] + Br[244] + Br[256],
		kf = Br[257] + Br[100] + Br[258],
		Af = Br[259] + Br[117] + Br[260],
		Lf = Br[261],
		Rf = Br[262],
		Mf = Br[112] + Br[29] + Br[263],
		Cf = Br[113] + Br[29] + Br[263],
		Pf = Br[264],
		Df = Br[265] + Br[46] + Br[266],
		zf = Br[125] + Br[82] + Br[104],
		Nf = Br[267] + Br[186] + Br[187] + Br[130] + Br[188],
		Bf = Br[268] + Br[117] + Br[258] + Br[100] + Br[269],
		$f = Br[270],
		Ff = Br[271],
		Gf = Br[272],
		qf = Br[273],
		Yf = Br[274],
		Hf = Br[275] + Br[17] + Br[276],
		Uf = Br[277] + Br[1] + Br[278] + Br[1] + Br[279],
		Wf = Br[280] + Br[87],
		Xf = Br[281],
		Vf = Br[282],
		Kf = Br[283],
		Zf = Br[284],
		Jf = Br[276],
		Qf = Br[285],
		t_ = Br[286] + Br[65] + Br[286] + Br[65] + Br[287],
		i_ = Br[71],
		n_ = Br[288],
		e_ = Br[289] + Br[32] + Br[116] + Br[186] + Br[175],
		s_ = Br[290],
		r_ = Br[3] + Br[46] + Br[291] + Br[32] + Br[292],
		h_ = Br[56] + Br[17] + Br[293],
		a_ = Br[277] + Br[17] + Br[293],
		o_ = Br[277],
		f_ = Br[193] + Br[15] + Br[294],
		__ = Br[193] + Br[130] + Br[295] + Br[51] + Br[151],
		c_ = Br[0] + Br[57] + Br[296],
		u_ = Br[297],
		d_ = Br[176] + Br[186] + Br[203],
		l_ = Br[298],
		v_ = Br[44] + Br[56],
		b_ = Br[265] + Br[46] + Br[266] + Br[46] + Br[291],
		y_ = Br[265] + Br[46] + Br[266] + Br[1] + Br[80],
		g_ = Br[190] + Br[100] + Br[171],
		m_ = Br[299] + Br[100] + Br[171],
		E_ = Br[300] + Br[29] + Br[250],
		p_ = Br[301] + Br[100] + Br[171],
		x_ = Br[302] + Br[100] + Br[171],
		T_ = Br[303] + Br[64] + Br[304],
		w_ = Br[303] + Br[64] + Br[305],
		O_ = Br[306],
		S_ = Br[303] + Br[64] + Br[307],
		j_ = Br[303] + Br[64] + Br[308],
		I_ = Br[303] + Br[64] + Br[309],
		k_ = Br[303] + Br[64] + Br[310],
		A_ = Br[303] + Br[64] + Br[311],
		L_ = Br[303] + Br[64] + Br[312] + Br[64] + Br[71],
		R_ = Br[303] + Br[64] + Br[312] + Br[64] + Br[288],
		M_ = Br[303] + Br[64] + Br[312] + Br[64] + Br[313],
		C_ = Br[303] + Br[64] + Br[312] + Br[64] + Br[314],
		P_ = Br[303] + Br[64] + Br[312] + Br[64] + Br[315],
		D_ = Br[316] + Br[15] + Br[317],
		z_ = Br[318],
		N_ = Br[44] + Br[277],
		B_ = Br[44] + Br[213],
		$_ = Br[319] + Br[57] + Br[320],
		F_ = Br[44] + Br[238],
		G_ = Br[42] + Br[29] + Br[321],
		q_ = Br[193] + Br[17] + Br[322],
		Y_ = Br[323],
		H_ = Br[3] + Br[29] + Br[43],
		U_ = Br[324],
		W_ = Br[325],
		X_ = Br[326] + Br[64] + Br[327] + Br[64] + Br[328],
		V_ = Br[176],
		K_ = Br[176] + Br[123] + Br[329],
		Z_ = Br[330] + Br[86] + Br[244] + Br[331],
		J_ = Br[332],
		Q_ = Br[333] + Br[32] + Br[183],
		tc = Br[3] + Br[123] + Br[329],
		ic = Br[334] + Br[64] + Br[335] + Br[64] + Br[336],
		nc = Br[334] + Br[64] + Br[327] + Br[64] + Br[337] + Br[64] + Br[338],
		ec = Br[334] + Br[64] + Br[327] + Br[64] + Br[338] + Br[64] + Br[339],
		sc = Br[334] + Br[64] + Br[327] + Br[64] + Br[340] + Br[64] + Br[341],
		rc = Br[334] + Br[64] + Br[327] + Br[64] + Br[340] + Br[64] + Br[342],
		hc = Br[334] + Br[64] + Br[335] + Br[64] + Br[343] + Br[64] + Br[336],
		ac = Br[334] + Br[64] + Br[327] + Br[64] + Br[340] + Br[64] + Br[344],
		oc = Br[334] + Br[64] + Br[327] + Br[64] + Br[337] + Br[64] + Br[339],
		fc = Br[334] + Br[64] + Br[327] + Br[64] + Br[339] + Br[64] + Br[338],
		_c = Br[334] + Br[64] + Br[340],
		cc = Br[334] + Br[64] + Br[327] + Br[64] + Br[340] + Br[64] + Br[345],
		uc = Br[334] + Br[64] + Br[335] + Br[64] + Br[346],
		dc = Br[347] + Br[64] + Br[348],
		lc = Br[349] + Br[64] + Br[348],
		vc = Br[334] + Br[64] + Br[350],
		bc = Br[334] + Br[64] + Br[350] + Br[64] + Br[351],
		yc = Br[334] + Br[64] + Br[350] + Br[64] + Br[352],
		gc = Br[334] + Br[64] + Br[350] + Br[64] + Br[353],
		mc = Br[334] + Br[64] + Br[354] + Br[64] + Br[355],
		Ec = Br[356],
		pc = Br[334] + Br[64] + Br[327] + Br[64] + Br[357],
		xc = Br[334] + Br[64] + Br[327] + Br[64] + Br[357] + Br[64] + Br[338],
		Tc = Br[334] + Br[64] + Br[327] + Br[64] + Br[357] + Br[64] + Br[339],
		wc = Br[334] + Br[64] + Br[327] + Br[64] + Br[337],
		Oc = Br[312] + Br[64] + Br[358],
		Sc = Br[3] + Br[123] + Br[359],
		jc = Br[0] + Br[29] + Br[250] + Br[123] + Br[360],
		Ic = Br[204] + Br[46] + Br[291],
		kc = Br[361],
		Ac = Br[362] + Br[32] + Br[183],
		Lc = Br[363],
		Rc = Br[364],
		Mc = Br[277] + Br[17] + Br[276] + Br[46] + Br[291],
		Cc = Br[56] + Br[17] + Br[276] + Br[46] + Br[291],
		Pc = Br[289],
		Dc = Br[365] + Br[100] + Br[366],
		zc = Br[367] + Br[64] + Br[334] + Br[64] + Br[368] + Br[64] + Br[369],
		Nc = Br[334] + Br[64] + Br[370] + Br[64] + Br[371],
		Bc = Br[372] + Br[107],
		$c = Br[373],
		Fc = Br[374] + Br[123] + Br[375] + Br[13] + Br[376],
		Gc = Br[377],
		qc = Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[13] + Br[378] + Br[86] + Br[32] + Br[379],
		Yc = Br[380],
		Hc = Br[381],
		Uc = Br[382],
		Wc = Br[383],
		Xc = Br[384],
		Vc = Br[199] + Br[54] + Br[385] + Br[386] + Br[59],
		Kc = Br[387] + Br[1] + Br[80],
		Zc = Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[13] + Br[378],
		Jc = Br[53] + Br[54] + Br[286] + Br[388] + Br[286] + Br[388] + Br[286] + Br[388] + Br[286] + Br[59],
		Qc = Br[389],
		tu = Br[390],
		iu = Br[391],
		nu = Br[392] + Br[393],
		eu = Br[394] + Br[64] + Br[206] + Br[64] + Br[342],
		su = Br[286] + Br[164],
		ru = Br[395],
		hu = Br[105] + Br[396] + Br[397],
		au = Br[398],
		ou = Br[399] + Br[117] + Br[400],
		fu = Br[361] + Br[117] + Br[400],
		_u = Br[193] + Br[26] + Br[401],
		cu = Br[402] + Br[100] + Br[171] + Br[15] + Br[403],
		uu = Br[404],
		du = Br[213] + Br[405] + Br[406],
		lu = Br[113] + Br[1] + Br[407],
		vu = Br[48] + Br[1] + Br[408],
		bu = Br[48],
		yu = Br[178] + Br[123] + Br[329],
		gu = Br[178] + Br[123] + Br[177],
		mu = Br[399] + Br[123] + Br[409],
		Eu = Br[410],
		pu = Br[173] + Br[82] + Br[411],
		xu = Br[412],
		Tu = Br[413],
		wu = Br[414] + Br[106],
		Ou = Br[414] + Br[100] + Br[171],
		Su = Br[415] + Br[123] + Br[177],
		ju = Br[416] + Br[86] + Br[417],
		Iu = Br[418] + Br[46] + Br[174],
		ku = Br[233] + Br[396] + Br[397],
		Au = Br[419],
		Lu = Br[420],
		Ru = Br[79] + Br[15] + Br[421],
		Mu = Br[422] + Br[117] + Br[279],
		Cu = Br[423] + Br[64] + Br[219] + Br[64] + Br[424],
		Pu = Br[387] + Br[13] + Br[279] + Br[186] + Br[425],
		Du = Br[387] + Br[46] + Br[291] + Br[186] + Br[425],
		zu = Br[201] + Br[46] + Br[426] + Br[57] + Br[427],
		Nu = Br[428] + Br[13] + Br[279],
		Bu = Br[265] + Br[46] + Br[266] + Br[51] + Br[429] + Br[46] + Br[291],
		$u = Br[430] + Br[17] + Br[293],
		Fu = Br[431],
		Gu = Br[432] + Br[17] + Br[433] + Br[57] + Br[434],
		qu = Br[166] + Br[82] + Br[435] + Br[17] + Br[433] + Br[57] + Br[434],
		Yu = Br[85] + Br[82] + Br[435] + Br[17] + Br[433] + Br[57] + Br[434],
		Hu = Br[176] + Br[100] + Br[436],
		Uu = Br[31] + Br[17] + Br[433] + Br[57] + Br[434],
		Wu = Br[166] + Br[1] + Br[437] + Br[17] + Br[433] + Br[57] + Br[434],
		Xu = Br[171] + Br[1] + Br[437] + Br[17] + Br[433] + Br[57] + Br[434],
		Vu = Br[85] + Br[1] + Br[437] + Br[17] + Br[433] + Br[57] + Br[434],
		Ku = Br[60] + Br[438],
		Zu = Br[439],
		Ju = Br[440] + Br[64] + Br[441],
		Qu = Br[440] + Br[64] + Br[358],
		td = Br[164] + Br[20],
		id = Br[440] + Br[64] + Br[442],
		nd = Br[443] + Br[54],
		ed = Br[55] + Br[286] + Br[55] + Br[286] + Br[55],
		sd = Br[144] + Br[444] + Br[20] + Br[445],
		rd = Br[3] + Br[32] + Br[116] + Br[186] + Br[175],
		hd = Br[446] + Br[1] + Br[80],
		ad = Br[446] + Br[46] + Br[174] + Br[1] + Br[80],
		od = Br[447] + Br[100] + Br[269],
		fd = Br[448] + Br[13] + Br[14],
		_d = Br[449] + Br[123] + Br[450],
		cd = Br[449] + Br[46] + Br[174] + Br[123] + Br[450],
		ud = Br[29] + Br[162] + Br[54],
		dd = Br[388],
		ld = Br[451],
		vd = Br[13] + Br[452] + Br[13],
		bd = Br[123] + Br[177] + Br[54],
		yd = Br[453] + Br[64] + Br[346],
		gd = Br[454],
		md = Br[455] + Br[29] + Br[78],
		Ed = Br[456] + Br[13] + Br[14],
		pd = Br[457],
		xd = Br[458],
		Td = Br[459],
		wd = Br[460],
		Od = Br[461],
		Sd = Br[344] + Br[64] + Br[345],
		jd = Br[462] + Br[64] + Br[345],
		Id = Br[341] + Br[64] + Br[463],
		kd = Br[344] + Br[64] + Br[342],
		Ad = Br[462] + Br[64] + Br[463],
		Ld = Br[341] + Br[64] + Br[342],
		Rd = Br[341] + Br[64] + Br[345],
		Md = Br[464],
		Cd = Br[184] + Br[82] + Br[104],
		Pd = Br[465],
		Dd = Br[466],
		zd = Br[212] + Br[467],
		Nd = Br[388] + Br[197] + Br[467],
		Bd = Br[388] + Br[466] + Br[467],
		$d = Br[324] + Br[65] + Br[468],
		Fd = Br[388] + Br[324] + Br[13] + Br[14] + Br[467],
		Gd = Br[388] + Br[469] + Br[26] + Br[27] + Br[467],
		qd = Br[388] + Br[49] + Br[467],
		Yd = Br[324] + Br[13] + Br[14],
		Hd = Br[469] + Br[26] + Br[27],
		Ud = Br[469] + Br[186] + Br[203],
		Wd = Br[3] + Br[1] + Br[80] + Br[186] + Br[203],
		Xd = Br[470] + Br[65] + Br[79],
		Vd = Br[470] + Br[65] + Br[8],
		Kd = Br[470],
		Zd = Br[470] + Br[65] + Br[150],
		Jd = Br[471] + Br[46] + Br[47],
		Qd = Br[472],
		tl = Br[473],
		il = Br[474],
		nl = Br[8] + Br[15] + Br[421],
		el = Br[475],
		sl = Br[150],
		rl = Br[388] + Br[189] + Br[467],
		hl = Br[388] + Br[150] + Br[467],
		al = Br[388] + Br[469] + Br[186] + Br[203] + Br[467],
		ol = Br[476] + Br[64] + Br[477],
		fl = Br[150] + Br[65] + Br[468],
		_l = Br[324] + Br[100] + Br[269],
		cl = Br[45] + Br[29] + Br[478] + Br[1] + Br[479],
		ul = Br[56] + Br[130] + Br[480],
		dl = Br[56] + Br[1] + Br[2],
		ll = Br[45] + Br[1] + Br[2] + Br[1] + Br[481],
		vl = Br[476] + Br[64] + Br[482] + Br[64] + Br[483],
		bl = Br[476] + Br[64] + Br[484],
		yl = Br[64] + Br[485],
		gl = Br[64] + Br[486],
		ml = Br[487],
		El = Br[475] + Br[1] + Br[488] + Br[130] + Br[489],
		pl = Br[189] + Br[1] + Br[488] + Br[130] + Br[489],
		xl = Br[45] + Br[130] + Br[188] + Br[29] + Br[43] + Br[1] + Br[479],
		Tl = Br[290] + Br[1] + Br[488] + Br[130] + Br[489],
		wl = Br[44] + Br[298],
		Ol = Br[3] + Br[46] + Br[490],
		Sl = Br[8] + Br[1] + Br[80],
		jl = Br[470] + Br[186] + Br[203] + Br[1] + Br[488] + Br[130] + Br[489],
		Il = Br[189] + Br[491],
		kl = Br[3] + Br[32] + Br[116] + Br[186] + Br[203],
		Al = Br[492],
		Ll = Br[493],
		Rl = Br[100] + Br[185],
		Ml = Br[173] + Br[100] + Br[148] + Br[13] + Br[279],
		Cl = Br[412] + Br[405] + Br[494],
		Pl = Br[282] + Br[86] + Br[495],
		Dl = Br[496],
		zl = Br[497],
		Nl = Br[79] + Br[46] + Br[47] + Br[15] + Br[421],
		Bl = Br[8] + Br[46] + Br[47] + Br[15] + Br[421],
		$l = Br[498] + Br[130] + Br[499],
		Fl = Br[500] + Br[64] + Br[501] + Br[64] + Br[502],
		Gl = Br[503] + Br[118] + Br[123] + Br[504],
		ql = Br[55] + Br[505] + Br[55] + Br[138] + Br[55] + Br[134] + Br[55] + Br[136] + Br[55] + Br[506],
		Yl = Br[55] + Br[507] + Br[55] + Br[508] + Br[55] + Br[509] + Br[55] + Br[510],
		Hl = Br[511],
		Ul = Br[512],
		Wl = Br[513],
		Xl = Br[3] + Br[1] + Br[514] + Br[123] + Br[515],
		Vl = Br[516],
		Kl = Br[517],
		Zl = Br[518],
		Jl = Br[45] + Br[46] + Br[174] + Br[82] + Br[519],
		Ql = Br[45] + Br[1] + Br[481],
		tv = Br[520],
		iv = Br[175] + Br[123] + Br[521],
		nv = Br[522],
		ev = Br[523] + Br[1] + Br[524],
		sv = Br[525],
		rv = Br[86] + Br[166] + Br[86] + Br[526] + Br[86] + Br[527],
		hv = Br[86] + Br[166] + Br[86] + Br[526] + Br[86] + Br[528],
		av = Br[86] + Br[166] + Br[86] + Br[529],
		ov = Br[86] + Br[166] + Br[86] + Br[530],
		fv = Br[86] + Br[254] + Br[86] + Br[526] + Br[86] + Br[527],
		_v = Br[86] + Br[254] + Br[86] + Br[526] + Br[86] + Br[528],
		cv = Br[86] + Br[254] + Br[86] + Br[529],
		uv = Br[86] + Br[254] + Br[86] + Br[530],
		dv = Br[531],
		lv = Br[301],
		vv = Br[532] + Br[54] + Br[189] + Br[92] + Br[213] + Br[405] + Br[533] + Br[93] + Br[534] + Br[535] + Br[55] + Br[536] + Br[537] + Br[538] + Br[286] + Br[539] + Br[540] + Br[541] + Br[542] + Br[543] + Br[544] + Br[545] + Br[151] + Br[546] + Br[405] + Br[547] + Br[542] + Br[548] + Br[461] + Br[71] + Br[549] + Br[286] + Br[175] + Br[71] + Br[57] + Br[116] + Br[550] + Br[547] + Br[536] + Br[551] + Br[461] + Br[552] + Br[194] + Br[553] + Br[457] + Br[554] + Br[314] + Br[555] + Br[556] + Br[557] + Br[13] + Br[558] + Br[405] + Br[29] + Br[559] + Br[29] + Br[538] + Br[117] + Br[560] + Br[561] + Br[151] + Br[562] + Br[116] + Br[563] + Br[194] + Br[405] + Br[564] + Br[565] + Br[566] + Br[567] + Br[557] + Br[17] + Br[568] + Br[244] + Br[544] + Br[106] + Br[313] + Br[569] + Br[570] + Br[571] + Br[460] + Br[572] + Br[538] + Br[287] + Br[1] + Br[573] + Br[574] + Br[457] + Br[17] + Br[287] + Br[116] + Br[17] + Br[313] + Br[575] + Br[140] + Br[542] + Br[107] + Br[538] + Br[32] + Br[576] + Br[577] + Br[578] + Br[579] + Br[580] + Br[581] + Br[544] + Br[582] + Br[544] + Br[583] + Br[546] + Br[542] + Br[405] + Br[313] + Br[584] + Br[585] + Br[586] + Br[587] + Br[314] + Br[588] + Br[589] + Br[546] + Br[20] + Br[546] + Br[55] + Br[531],
		bv = Br[590] + Br[51] + Br[429],
		yv = Br[590] + Br[186] + Br[194],
		gv = Br[591],
		mv = Br[64] + Br[460] + Br[314],
		Ev = Br[286] + Br[65] + Br[286],
		pv = Br[193] + Br[592],
		xv = Br[289] + Br[82] + Br[104],
		Tv = Br[82] + Br[104],
		wv = Br[29] + Br[162],
		Ov = Br[186] + Br[593],
		Sv = Br[15] + Br[16] + Br[46] + Br[47],
		jv = Br[130] + Br[188],
		Iv = Br[159] + Br[594],
		kv = Br[159] + Br[145],
		Av = Br[159] + Br[149],
		Lv = Br[396] + Br[253] + Br[15] + Br[16],
		Rv = Br[130] + Br[595] + Br[123] + Br[596],
		Mv = Br[597],
		Cv = Br[79] + Br[598] + Br[96],
		Pv = Br[599],
		Dv = Br[600],
		zv = Br[241] + Br[65] + Br[601],
		Nv = Br[241],
		Bv = Br[602],
		$v = Br[603],
		Fv = Br[603] + Br[65] + Br[396],
		Gv = Br[603] + Br[65] + Br[26],
		qv = Br[604],
		Yv = Br[604] + Br[65] + Br[396],
		Hv = Br[604] + Br[65] + Br[26],
		Uv = Br[604] + Br[65] + Br[396] + Br[65] + Br[26],
		Wv = Br[604] + Br[65] + Br[26] + Br[65] + Br[396],
		Xv = Br[605] + Br[65] + Br[113],
		Vv = Br[605] + Br[65] + Br[112],
		Kv = Br[605] + Br[65] + Br[75],
		Zv = Br[605] + Br[65] + Br[74],
		Jv = Br[606],
		Qv = Br[607],
		tb = Br[601],
		ib = Br[608],
		nb = Br[609],
		eb = Br[610],
		sb = Br[611],
		rb = Br[612],
		hb = Br[613],
		ab = Br[614],
		ob = Br[615],
		fb = Br[616],
		_b = Br[617],
		cb = Br[618],
		ub = Br[619],
		db = Br[620],
		lb = Br[621],
		vb = Br[622] + Br[65] + Br[623],
		bb = Br[622] + Br[65] + Br[287],
		yb = Br[622] + Br[65] + Br[71],
		gb = Br[622] + Br[65] + Br[288],
		mb = Br[622] + Br[65] + Br[313],
		Eb = Br[622] + Br[65] + Br[314],
		pb = Br[622] + Br[65] + Br[624],
		xb = Br[622] + Br[65] + Br[625],
		Tb = Br[622] + Br[65] + Br[546],
		wb = Br[622] + Br[65] + Br[626],
		Ob = Br[627] + Br[64] + Br[628] + Br[64] + Br[327] + Br[64] + Br[629],
		Sb = Br[630],
		jb = Br[627] + Br[64] + Br[628] + Br[64] + Br[327] + Br[64] + Br[353],
		Ib = Br[627] + Br[64] + Br[628] + Br[64] + Br[327] + Br[64] + Br[631],
		kb = Br[632],
		Ab = Br[633],
		Lb = Br[634] + Br[64] + Br[327] + Br[64] + Br[635],
		Rb = Br[634] + Br[64] + Br[369],
		Mb = Br[634] + Br[64] + Br[221],
		Cb = Br[634] + Br[64] + Br[327],
		Pb = Br[206] + Br[64] + Br[453] + Br[64] + Br[358],
		Db = Br[627] + Br[64] + Br[636],
		zb = Br[173] + Br[1] + Br[407],
		Nb = Br[233],
		Bb = Br[637] + Br[100] + Br[171],
		$b = Br[638] + Br[1] + Br[639] + Br[100] + Br[171],
		Fb = Br[640] + Br[1] + Br[639] + Br[100] + Br[171],
		Gb = Br[319],
		qb = Br[176] + Br[32] + Br[116] + Br[82] + Br[104],
		Yb = Br[290] + Br[13] + Br[279],
		Hb = Br[186] + Br[187] + Br[20] + Br[159] + Br[20] + Br[69] + Br[214],
		Ub = Br[641],
		Wb = Br[362],
		Xb = Br[642],
		Vb = Br[643],
		Kb = Br[644],
		Zb = Br[645],
		Jb = Br[646] + Br[123] + Br[329],
		Qb = Br[60] + Br[647],
		ty = Br[648],
		iy = Br[412] + Br[32] + Br[649],
		ny = Br[650],
		ey = Br[60] + Br[651],
		sy = Br[439] + Br[20],
		ry = Br[652] + Br[123] + Br[329],
		hy = Br[60] + Br[653],
		ay = Br[652] + Br[100] + Br[148],
		oy = Br[60] + Br[654],
		fy = Br[646] + Br[100] + Br[148],
		_y = Br[655],
		cy = Br[602] + Br[1] + Br[656],
		uy = Br[602] + Br[32] + Br[657],
		dy = Br[602] + Br[51] + Br[110] + Br[106],
		ly = Br[602] + Br[51] + Br[110] + Br[107],
		vy = Br[15] + Br[658] + Br[659],
		by = Br[46] + Br[660] + Br[659],
		yy = Br[661] + Br[1] + Br[656],
		gy = Br[661] + Br[1] + Br[656] + Br[32] + Br[662] + Br[117] + Br[279],
		my = Br[204] + Br[186] + Br[187],
		Ey = Br[232] + Br[123] + Br[521],
		py = Br[453] + Br[64] + Br[663] + Br[64] + Br[664],
		xy = Br[213],
		Ty = Br[159],
		wy = Br[306] + Br[186] + Br[187],
		Oy = Br[0] + Br[186] + Br[187],
		Sy = Br[665] + Br[64] + Br[327] + Br[64] + Br[666],
		jy = Br[665] + Br[64] + Br[327] + Br[64] + Br[667],
		Iy = Br[668],
		ky = Br[669],
		Ay = Br[173] + Br[82] + Br[670] + Br[244] + Br[245],
		Ly = Br[667] + Br[64] + Br[665] + Br[64] + Br[339],
		Ry = Br[671] + Br[64] + Br[667] + Br[64] + Br[665] + Br[64] + Br[339],
		My = Br[573],
		Cy = Br[452],
		Py = Br[570],
		Dy = Br[672] + Br[64] + Br[673] + Br[64] + Br[674],
		zy = Br[672] + Br[64] + Br[627] + Br[64] + Br[674],
		Ny = Br[672] + Br[64] + Br[675] + Br[64] + Br[674],
		By = Br[672] + Br[64] + Br[676] + Br[64] + Br[674],
		$y = Br[672] + Br[64] + Br[677] + Br[64] + Br[674],
		Fy = Br[672] + Br[64] + Br[678],
		Gy = Br[193] + Br[13] + Br[679],
		qy = Br[29] + Br[250] + Br[123] + Br[680],
		Yy = Br[56] + Br[149],
		Hy = Br[399] + Br[123] + Br[681] + Br[32] + Br[657],
		Uy = Br[399] + Br[1] + Br[656],
		Wy = Br[399] + Br[123] + Br[681] + Br[51] + Br[110] + Br[106],
		Xy = Br[634] + Br[64] + Br[327] + Br[64] + Br[682],
		Vy = Br[399] + Br[32] + Br[683],
		Ky = Br[190] + Br[1] + Br[684],
		Zy = Br[190] + Br[685] + Br[686],
		Jy = Br[399] + Br[100] + Br[269],
		Qy = Br[687] + Br[123] + Br[329],
		tg = Br[646] + Br[1] + Br[656],
		ig = Br[646] + Br[244] + Br[245],
		ng = Br[652],
		eg = Br[688],
		sg = Br[689],
		rg = Br[225] + Br[65] + Br[690],
		hg = Br[218] + Br[64] + Br[219] + Br[64] + Br[667] + Br[64] + Br[222],
		ag = Br[691] + Br[65] + Br[690],
		og = Br[692],
		fg = Br[137],
		_g = Br[693],
		cg = Br[694] + Br[29] + Br[250],
		ug = Br[53] + Br[54] + Br[286] + Br[55] + Br[286] + Br[55] + Br[286] + Br[55] + Br[286] + Br[59],
		dg = Br[173] + Br[15] + Br[695] + Br[244] + Br[245],
		lg = Br[79] + Br[1] + Br[656] + Br[123] + Br[113],
		vg = Br[60] + Br[287] + Br[1] + Br[624] + Br[32] + Br[547] + Br[130],
		bg = Br[60] + Br[696],
		yg = Br[60] + Br[697] + Br[46] + Br[546] + Br[32],
		gg = Br[60] + Br[698] + Br[32] + Br[699],
		mg = Br[60] + Br[698] + Br[17] + Br[700],
		Eg = Br[60] + Br[701] + Br[1] + Br[702],
		pg = Br[60] + Br[703],
		xg = Br[60] + Br[287] + Br[130] + Br[624] + Br[1] + Br[547] + Br[57],
		Tg = Br[60] + Br[704] + Br[32] + Br[286],
		wg = Br[60] + Br[705] + Br[706],
		Og = Br[60] + Br[287] + Br[57] + Br[624] + Br[707] + Br[71],
		Sg = Br[60] + Br[698] + Br[17] + Br[708],
		jg = Br[60] + Br[709],
		Ig = Br[646],
		kg = Br[60] + Br[71] + Br[557] + Br[546] + Br[710],
		Ag = Br[60] + Br[711],
		Lg = Br[637],
		Rg = Br[633] + Br[15] + Br[712],
		Mg = Br[60] + Br[713] + Br[130] + Br[702],
		Cg = Br[60] + Br[714],
		Pg = Br[60] + Br[287] + Br[57] + Br[715] + Br[17] + Br[313],
		Dg = Br[60] + Br[716] + Br[717] + Br[71],
		zg = Br[60] + Br[718] + Br[719],
		Ng = Br[60] + Br[287] + Br[46] + Br[624] + Br[720] + Br[286],
		Bg = Br[60] + Br[721],
		$g = Br[60] + Br[151] + Br[625] + Br[151] + Br[546] + Br[151] + Br[546],
		Fg = Br[60] + Br[624] + Br[17] + Br[722],
		Gg = Br[60] + Br[313] + Br[57] + Br[313] + Br[1] + Br[313] + Br[32],
		qg = Br[60] + Br[723],
		Yg = Br[60] + Br[724],
		Hg = Br[60] + Br[624] + Br[57] + Br[624] + Br[46] + Br[624] + Br[57],
		Ug = Br[60] + Br[313] + Br[1] + Br[725],
		Wg = Br[60] + Br[726],
		Xg = Br[60] + Br[625] + Br[130] + Br[625] + Br[130] + Br[625] + Br[130],
		Vg = Br[60] + Br[727],
		Kg = Br[60] + Br[728],
		Zg = Br[60] + Br[729],
		Jg = Br[60] + Br[547] + Br[46] + Br[547] + Br[130] + Br[547] + Br[130],
		Qg = Br[60] + Br[17] + Br[625] + Br[17] + Br[314] + Br[17] + Br[313],
		tm = Br[60] + Br[17] + Br[547] + Br[17] + Br[624] + Br[17] + Br[314],
		im = Br[60] + Br[17] + Br[625] + Br[17] + Br[313] + Br[17] + Br[288],
		nm = Br[60] + Br[730],
		em = Br[60] + Br[46] + Br[547] + Br[731],
		sm = Br[60] + Br[547] + Br[732] + Br[286] + Br[452] + Br[286],
		rm = Br[60] + Br[458] + Br[547] + Br[733],
		hm = Br[60] + Br[288] + Br[557] + Br[288] + Br[452] + Br[734],
		am = Br[60] + Br[32] + Br[71] + Br[735],
		om = Br[60] + Br[71] + Br[46] + Br[546] + Br[736],
		fm = Br[60] + Br[737],
		_m = Br[60] + Br[461] + Br[314] + Br[461] + Br[314] + Br[461] + Br[624],
		cm = Br[330] + Br[86],
		um = Br[738],
		dm = Br[739],
		lm = Br[740],
		vm = Br[50] + Br[32] + Br[741],
		bm = Br[275] + Br[1] + Br[279] + Br[17] + Br[276],
		ym = Br[50] + Br[32] + Br[742],
		gm = Br[50],
		mm = Br[186] + Br[743] + Br[20] + Br[744] + Br[20] + Br[745] + Br[65],
		Em = Br[746],
		pm = Br[747],
		xm = Br[13] + Br[748] + Br[20] + Br[452] + Br[20] + Br[747] + Br[20] + Br[749] + Br[65],
		Tm = Br[262] + Br[57] + Br[750],
		wm = Br[225] + Br[82] + Br[751],
		Om = Br[752],
		Sm = Br[262] + Br[123] + Br[177],
		jm = Br[753] + Br[17] + Br[754] + Br[82] + Br[170],
		Im = Br[755],
		km = Br[756],
		Am = Br[430] + Br[186] + Br[757],
		Lm = Br[758],
		Rm = Br[50] + Br[87] + Br[759],
		Mm = Br[255] + Br[186] + Br[203],
		Cm = Br[760],
		Pm = Br[761],
		Dm = Br[762],
		zm = Br[763],
		Nm = Br[764] + Br[396] + Br[765],
		Bm = Br[764] + Br[130] + Br[188],
		$m = Br[766],
		Fm = Br[767],
		Gm = Br[768],
		qm = Br[769],
		Ym = Br[770],
		Hm = Br[771] + Br[1] + Br[279],
		Um = Br[772],
		Wm = Br[148] + Br[100] + Br[269],
		Xm = Br[261] + Br[123] + Br[177],
		Vm = Br[261] + Br[57] + Br[750],
		Km = Br[773] + Br[117] + Br[527] + Br[1] + Br[279] + Br[123] + Br[177],
		Zm = Br[148],
		Jm = Br[774],
		Qm = Br[87] + Br[775] + Br[20] + Br[776] + Br[467] + Br[286] + Br[777],
		tE = Br[506],
		iE = Br[778] + Br[140] + Br[141],
		nE = Br[779] + Br[140] + Br[141],
		eE = Br[179] + Br[26] + Br[780] + Br[214],
		sE = Br[179] + Br[29] + Br[781] + Br[20] + Br[130] + Br[782] + Br[214],
		rE = Br[783] + Br[130] + Br[782],
		hE = Br[784],
		aE = Br[785],
		oE = Br[452] + Br[786] + Br[458] + Br[787] + Br[452] + Br[788] + Br[461] + Br[789] + Br[557] + Br[71] + Br[151] + Br[546] + Br[790] + Br[287] + Br[791] + Br[546] + Br[458] + Br[792] + Br[458] + Br[793] + Br[458] + Br[71] + Br[175] + Br[546] + Br[458] + Br[794] + Br[795] + Br[796] + Br[797] + Br[624] + Br[798] + Br[71] + Br[557] + Br[799] + Br[175] + Br[800] + Br[801] + Br[287] + Br[802] + Br[803] + Br[458] + Br[546] + Br[458] + Br[804] + Br[458] + Br[805] + Br[806] + Br[314] + Br[151] + Br[807] + Br[461] + Br[808] + Br[151] + Br[809] + Br[557] + Br[625] + Br[458] + Br[547] + Br[175] + Br[810] + Br[811] + Br[812] + Br[461] + Br[813] + Br[458] + Br[814] + Br[452] + Br[708] + Br[815] + Br[816] + Br[461] + Br[817] + Br[458] + Br[818] + Br[461] + Br[819] + Br[820] + Br[821] + Br[175] + Br[71] + Br[458] + Br[822] + Br[461] + Br[823] + Br[820] + Br[824] + Br[458] + Br[825] + Br[826] + Br[827] + Br[584] + Br[71] + Br[828] + Br[829] + Br[830] + Br[546] + Br[151] + Br[831] + Br[832] + Br[286] + Br[833] + Br[71] + Br[557] + Br[547] + Br[834] + Br[835] + Br[836] + Br[837] + Br[557] + Br[838] + Br[795] + Br[625] + Br[557] + Br[839] + Br[840] + Br[841] + Br[461] + Br[842] + Br[557] + Br[843] + Br[175] + Br[288] + Br[461] + Br[71] + Br[458] + Br[844] + Br[845] + Br[846] + Br[175] + Br[847] + Br[848] + Br[849] + Br[81] + Br[850] + Br[175] + Br[851] + Br[461] + Br[852] + Br[853] + Br[547] + Br[854] + Br[288] + Br[458] + Br[287] + Br[461] + Br[855] + Br[175] + Br[314] + Br[557] + Br[856] + Br[830] + Br[624] + Br[857] + Br[858] + Br[859] + Br[860] + Br[458] + Br[861] + Br[862] + Br[863] + Br[461] + Br[71] + Br[458] + Br[864] + Br[452] + Br[547] + Br[458] + Br[865] + Br[866] + Br[867] + Br[868] + Br[869] + Br[175] + Br[288] + Br[870] + Br[286] + Br[175] + Br[624] + Br[175] + Br[546] + Br[461] + Br[871] + Br[458] + Br[286] + Br[151] + Br[872] + Br[873] + Br[874] + Br[833] + Br[875] + Br[452] + Br[876] + Br[557],
		fE = Br[179] + Br[15] + Br[877] + Br[20] + Br[56] + Br[467],
		_E = Br[393] + Br[46] + Br[314] + Br[393] + Br[546] + Br[1] + Br[393] + Br[878] + Br[393] + Br[46] + Br[313] + Br[393] + Br[582] + Br[393] + Br[879] + Br[393] + Br[46] + Br[624] + Br[393] + Br[32] + Br[71] + Br[393] + Br[880] + Br[393] + Br[46] + Br[314] + Br[393] + Br[17] + Br[313] + Br[393] + Br[17] + Br[547] + Br[393] + Br[46] + Br[546] + Br[393] + Br[32] + Br[625] + Br[393] + Br[881] + Br[393] + Br[46] + Br[313] + Br[393] + Br[882] + Br[393] + Br[17] + Br[287] + Br[393] + Br[46] + Br[624] + Br[393] + Br[839] + Br[393] + Br[881] + Br[393] + Br[46] + Br[624] + Br[393] + Br[546] + Br[17] + Br[393] + Br[883] + Br[393] + Br[46] + Br[624] + Br[393] + Br[547] + Br[1] + Br[393] + Br[881] + Br[393] + Br[46] + Br[624] + Br[393] + Br[547] + Br[1] + Br[393] + Br[702] + Br[393] + Br[46] + Br[547] + Br[393] + Br[884] + Br[393] + Br[885] + Br[393] + Br[46] + Br[314] + Br[393] + Br[700] + Br[393] + Br[879] + Br[393] + Br[46] + Br[314] + Br[393] + Br[546] + Br[57] + Br[393] + Br[32] + Br[546] + Br[86] + Br[886] + Br[393] + Br[46] + Br[547] + Br[393] + Br[17] + Br[287] + Br[393] + Br[32] + Br[547] + Br[393] + Br[46] + Br[625] + Br[393] + Br[547] + Br[32] + Br[393] + Br[887] + Br[888] + Br[46] + Br[314] + Br[393] + Br[547] + Br[32] + Br[393] + Br[889] + Br[393] + Br[46] + Br[314] + Br[393] + Br[700] + Br[393] + Br[880] + Br[393] + Br[46] + Br[624] + Br[393] + Br[890] + Br[393] + Br[32] + Br[891],
		cE = Br[892],
		uE = Br[893],
		dE = Br[894],
		lE = Br[176] + Br[100],
		vE = Br[895],
		bE = Br[625] + Br[65],
		yE = Br[896],
		gE = Br[263],
		mE = Br[897],
		EE = Br[1] + Br[407],
		pE = Br[82] + Br[898],
		xE = Br[1] + Br[899],
		TE = Br[900],
		wE = Br[901],
		OE = Br[173],
		SE = Br[902],
		jE = Br[903],
		IE = Br[904],
		kE = Br[905],
		AE = Br[906],
		LE = Br[907],
		RE = Br[436],
		ME = Br[908],
		CE = Br[909],
		PE = Br[330] + Br[910],
		DE = Br[20] + Br[265] + Br[20] + Br[911] + Br[314],
		zE = Br[912],
		NE = Br[913],
		BE = Br[914] + Br[191] + Br[915],
		$E = Br[916],
		FE = Br[917] + Br[65] + Br[918] + Br[65] + Br[287],
		GE = Br[123] + Br[919],
		qE = Br[920],
		YE = Br[46] + Br[174],
		HE = Br[14],
		UE = Br[921],
		WE = Br[922] + Br[191] + Br[915],
		XE = Br[130] + Br[782],
		VE = Br[923],
		KE = Br[148] + Br[71] + Br[130],
		ZE = Br[457] + Br[100] + Br[148],
		JE = Br[44] + Br[382],
		QE = Br[924],
		tp = Br[0] + Br[46] + Br[291],
		ip = Br[238] + Br[26] + Br[925],
		np = Br[333],
		ep = Br[238],
		sp = Br[330] + Br[65] + Br[46] + Br[174],
		rp = Br[333] + Br[1] + Br[926],
		hp = Br[570] + Br[186] + Br[203],
		ap = Br[330] + Br[65] + Br[46] + Br[291],
		op = Br[927] + Br[46] + Br[928],
		fp = Br[929] + Br[65] + Br[930],
		_p = Br[931] + Br[29] + Br[250] + Br[1] + Br[488],
		cp = Br[56],
		up = Br[932],
		dp = Br[318] + Br[100] + Br[269],
		lp = Br[330] + Br[86] + Br[447],
		vp = Br[44] + Br[933] + Br[29] + Br[78],
		bp = Br[934],
		yp = Br[44] + Br[935],
		gp = Br[935],
		mp = Br[236],
		Ep = Br[56] + Br[57] + Br[296],
		pp = Br[330] + Br[65] + Br[13] + Br[279],
		xp = Br[936] + Br[65] + Br[79],
		Tp = Br[936] + Br[65] + Br[8],
		wp = Br[937],
		Op = Br[933] + Br[29] + Br[78],
		Sp = Br[44] + Br[929],
		jp = Br[312] + Br[64] + Br[674],
		Ip = Br[267] + Br[123] + Br[938],
		kp = Br[330] + Br[65] + Br[123] + Br[359] + Br[13] + Br[279],
		Ap = Br[929],
		Lp = Br[8] + Br[29] + Br[250] + Br[123] + Br[680],
		Rp = Br[939],
		Mp = Br[123] + Br[359] + Br[13] + Br[279],
		Cp = Br[330] + Br[65] + Br[32] + Br[940],
		Pp = Br[32] + Br[940],
		Dp = Br[422] + Br[123] + Br[375] + Br[13] + Br[376],
		zp = Br[941] + Br[64] + Br[327] + Br[64] + Br[305],
		Np = Br[941] + Br[64] + Br[942] + Br[64] + Br[358],
		Bp = Br[238] + Br[57] + Br[750],
		$p = Br[44] + Br[943] + Br[100] + Br[269],
		Fp = Br[941] + Br[64] + Br[327],
		Gp = Br[941] + Br[64] + Br[944],
		qp = Br[943],
		Yp = Br[44] + Br[201] + Br[123] + Br[177],
		Hp = Br[945],
		Up = Br[941] + Br[64] + Br[946],
		Wp = Br[330] + Br[65] + Br[244] + Br[947],
		Xp = Br[201] + Br[123] + Br[177],
		Vp = Br[943] + Br[100] + Br[269],
		Kp = Br[948],
		Zp = Br[943] + Br[186] + Br[187],
		Jp = Br[330] + Br[65] + Br[100] + Br[148],
		Qp = Br[100] + Br[148],
		tx = Br[238] + Br[130] + Br[188],
		ix = Br[60] + Br[949],
		nx = Br[44] + Br[933] + Br[29] + Br[162],
		ex = Br[399] + Br[32] + Br[950] + Br[1] + Br[656],
		sx = Br[652] + Br[82] + Br[104],
		rx = Br[951] + Br[123] + Br[952],
		hx = Br[953],
		ax = Br[951] + Br[123] + Br[952] + Br[123] + Br[938],
		ox = Br[44] + Br[954],
		fx = Br[233] + Br[106],
		_x = Br[233] + Br[107],
		cx = Br[44] + Br[249] + Br[32] + Br[116] + Br[17] + Br[239] + Br[29] + Br[162],
		ux = Br[634] + Br[64] + Br[327] + Br[64] + Br[682] + Br[64] + Br[305],
		dx = Br[241] + Br[1] + Br[656],
		lx = Br[241] + Br[15] + Br[252] + Br[130] + Br[253],
		vx = Br[241] + Br[15] + Br[252] + Br[130] + Br[253] + Br[51] + Br[110],
		bx = Br[44] + Br[243] + Br[1] + Br[656],
		yx = Br[44] + Br[238] + Br[130] + Br[188],
		gx = Br[44] + Br[243] + Br[244] + Br[245],
		mx = Br[44] + Br[238] + Br[15] + Br[215],
		Ex = Br[44] + Br[238] + Br[26] + Br[925],
		px = Br[44] + Br[955],
		xx = Br[44] + Br[956] + Br[46] + Br[251],
		Tx = Br[957],
		wx = Br[958] + Br[26] + Br[959],
		Ox = Br[958] + Br[396] + Br[960] + Br[100] + Br[366],
		Sx = Br[45] + Br[130] + Br[188] + Br[1] + Br[479],
		jx = Br[26] + Br[925],
		Ix = Br[15] + Br[215],
		kx = Br[17] + Br[239] + Br[29] + Br[162],
		Ax = Br[123] + Br[177],
		Lx = Br[682] + Br[64] + Br[351],
		Rx = Br[961] + Br[64] + Br[207],
		Mx = Br[32] + Br[950] + Br[244] + Br[245],
		Cx = Br[82] + Br[237],
		Px = Br[326] + Br[64] + Br[327] + Br[64] + Br[962],
		Dx = Br[326] + Br[64] + Br[327] + Br[64] + Br[441],
		zx = Br[963] + Br[29] + Br[43],
		Nx = Br[399] + Br[65] + Br[225],
		Bx = Br[634] + Br[64] + Br[682],
		$x = Br[399] + Br[65] + Br[241],
		Fx = Br[634] + Br[64] + Br[635] + Br[64] + Br[964],
		Gx = Br[634] + Br[64] + Br[635] + Br[64] + Br[965] + Br[64] + Br[106],
		qx = Br[634] + Br[64] + Br[635] + Br[64] + Br[965] + Br[64] + Br[107],
		Yx = Br[399] + Br[65] + Br[197],
		Hx = Br[661] + Br[65] + Br[225],
		Ux = Br[966] + Br[64] + Br[221] + Br[64] + Br[218] + Br[64] + Br[219],
		Wx = Br[954],
		Xx = Br[602] + Br[65] + Br[967],
		Vx = Br[635] + Br[64] + Br[221],
		Kx = Br[602] + Br[65] + Br[225],
		Zx = Br[635] + Br[64] + Br[965] + Br[64] + Br[106],
		Jx = Br[602] + Br[65] + Br[233] + Br[65] + Br[777],
		Qx = Br[635] + Br[64] + Br[965] + Br[64] + Br[107],
		tT = Br[602] + Br[65] + Br[233] + Br[65] + Br[116],
		iT = Br[968] + Br[65] + Br[652],
		nT = Br[303] + Br[64] + Br[969] + Br[64] + Br[441],
		eT = Br[968] + Br[65] + Br[652] + Br[65] + Br[91],
		sT = Br[303] + Br[64] + Br[627] + Br[64] + Br[970],
		rT = Br[968] + Br[65] + Br[190] + Br[65] + Br[971],
		hT = Br[303] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		aT = Br[303] + Br[64] + Br[972] + Br[64] + Br[221],
		oT = Br[968] + Br[65] + Br[646] + Br[65] + Br[225],
		fT = Br[968] + Br[65] + Br[646] + Br[65] + Br[973],
		_T = Br[968] + Br[65] + Br[687],
		cT = Br[968] + Br[65] + Br[687] + Br[65] + Br[91],
		uT = Br[627] + Br[64] + Br[628],
		dT = Br[190] + Br[65] + Br[974],
		lT = Br[627] + Br[64] + Br[975],
		vT = Br[190] + Br[65] + Br[274],
		bT = Br[976] + Br[64] + Br[343] + Br[64] + Br[977],
		yT = Br[249] + Br[65] + Br[978] + Br[65] + Br[929],
		gT = Br[243] + Br[65] + Br[225],
		mT = Br[979] + Br[64] + Br[665],
		ET = Br[243] + Br[65] + Br[973],
		pT = Br[682],
		xT = Br[241] + Br[65] + Br[160],
		TT = Br[241] + Br[65] + Br[225],
		wT = Br[682] + Br[64] + Br[627] + Br[64] + Br[970],
		OT = Br[241] + Br[65] + Br[190] + Br[65] + Br[971],
		ST = Br[682] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		jT = Br[241] + Br[65] + Br[464],
		IT = Br[944],
		kT = Br[213] + Br[65] + Br[241] + Br[65] + Br[160],
		AT = Br[213] + Br[65] + Br[241] + Br[65] + Br[91],
		LT = Br[206] + Br[64] + Br[682] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		RT = Br[206] + Br[64] + Br[351],
		MT = Br[206] + Br[64] + Br[682] + Br[64] + Br[351],
		CT = Br[213] + Br[65] + Br[464],
		PT = Br[206] + Br[64] + Br[944],
		DT = Br[213] + Br[65] + Br[948],
		zT = Br[206] + Br[64] + Br[549] + Br[64] + Br[482],
		NT = Br[213] + Br[65] + Br[570] + Br[65] + Br[150],
		BT = Br[213] + Br[65] + Br[980],
		$T = Br[206] + Br[64] + Br[981],
		FT = Br[213] + Br[65] + Br[954],
		GT = Br[772] + Br[65] + Br[199],
		qT = Br[772] + Br[65] + Br[248],
		YT = Br[982] + Br[64] + Br[983],
		HT = Br[772] + Br[65] + Br[955],
		UT = Br[982] + Br[64] + Br[984] + Br[64] + Br[985],
		WT = Br[982] + Br[64] + Br[221],
		XT = Br[772] + Br[65] + Br[225],
		VT = Br[982] + Br[64] + Br[440] + Br[64] + Br[358],
		KT = Br[772] + Br[65] + Br[178] + Br[65] + Br[937],
		ZT = Br[982] + Br[64] + Br[440] + Br[64] + Br[442],
		JT = Br[772] + Br[65] + Br[178] + Br[65] + Br[986],
		QT = Br[982] + Br[64] + Br[440] + Br[64] + Br[441],
		tw = Br[772] + Br[65] + Br[178] + Br[65] + Br[91],
		iw = Br[982] + Br[64] + Br[944],
		nw = Br[772] + Br[65] + Br[948],
		ew = Br[982] + Br[64] + Br[961] + Br[64] + Br[207],
		sw = Br[772] + Br[65] + Br[242] + Br[65] + Br[160],
		rw = Br[982] + Br[64] + Br[961],
		hw = Br[772] + Br[65] + Br[242],
		aw = Br[982] + Br[64] + Br[351],
		ow = Br[772] + Br[65] + Br[464],
		fw = Br[982] + Br[64] + Br[965] + Br[64] + Br[106],
		_w = Br[772] + Br[65] + Br[233] + Br[65] + Br[777],
		cw = Br[982] + Br[64] + Br[965] + Br[64] + Br[107],
		uw = Br[772] + Br[65] + Br[233] + Br[65] + Br[116],
		dw = Br[982] + Br[64] + Br[358],
		lw = Br[772] + Br[65] + Br[937],
		vw = Br[982] + Br[64] + Br[987] + Br[64] + Br[985],
		bw = Br[772] + Br[65] + Br[988] + Br[65] + Br[248],
		yw = Br[772] + Br[65] + Br[241],
		gw = Br[982] + Br[64] + Br[682] + Br[64] + Br[441],
		mw = Br[772] + Br[65] + Br[241] + Br[65] + Br[91],
		Ew = Br[772] + Br[65] + Br[234],
		pw = Br[982] + Br[64] + Br[635] + Br[64] + Br[964],
		xw = Br[772] + Br[65] + Br[602] + Br[65] + Br[967],
		Tw = Br[772] + Br[65] + Br[602] + Br[65] + Br[225],
		ww = Br[982] + Br[64] + Br[635] + Br[64] + Br[965] + Br[64] + Br[106],
		Ow = Br[772] + Br[65] + Br[570] + Br[65] + Br[150],
		Sw = Br[772] + Br[65] + Br[45] + Br[65] + Br[113],
		jw = Br[941] + Br[64] + Br[979] + Br[64] + Br[221],
		Iw = Br[941] + Br[64] + Br[979] + Br[64] + Br[665],
		kw = Br[941] + Br[64] + Br[969],
		Aw = Br[943] + Br[65] + Br[652],
		Lw = Br[943] + Br[65] + Br[652] + Br[65] + Br[225],
		Rw = Br[941] + Br[64] + Br[969] + Br[64] + Br[627] + Br[64] + Br[970],
		Mw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[990],
		Cw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[221],
		Pw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[440] + Br[64] + Br[442],
		Dw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[440] + Br[64] + Br[441],
		zw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[944],
		Nw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[961] + Br[64] + Br[207],
		Bw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[351],
		$w = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[965] + Br[64] + Br[106],
		Fw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[965] + Br[64] + Br[107],
		Gw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[682] + Br[64] + Br[441],
		qw = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[979] + Br[64] + Br[221],
		Yw = Br[334] + Br[64] + Br[207],
		Hw = Br[318] + Br[65] + Br[160],
		Uw = Br[334] + Br[64] + Br[221],
		Ww = Br[318] + Br[65] + Br[225],
		Xw = Br[334] + Br[64] + Br[991],
		Vw = Br[318] + Br[65] + Br[687],
		Kw = Br[334] + Br[64] + Br[991] + Br[64] + Br[441],
		Zw = Br[318] + Br[65] + Br[687] + Br[65] + Br[91],
		Jw = Br[334] + Br[64] + Br[627] + Br[64] + Br[970],
		Qw = Br[318] + Br[65] + Br[190] + Br[65] + Br[971],
		tO = Br[334] + Br[64] + Br[992] + Br[64] + Br[965],
		iO = Br[318] + Br[65] + Br[277] + Br[65] + Br[233],
		nO = Br[334] + Br[64] + Br[674] + Br[64] + Br[965],
		eO = Br[318] + Br[65] + Br[56] + Br[65] + Br[233],
		sO = Br[334] + Br[64] + Br[989] + Br[64] + Br[993],
		rO = Br[318] + Br[65] + Br[927] + Br[65] + Br[994],
		hO = Br[318] + Br[65] + Br[995] + Br[65] + Br[996],
		aO = Br[318] + Br[65] + Br[605],
		oO = Br[318] + Br[65] + Br[997] + Br[65] + Br[998],
		fO = Br[318] + Br[65] + Br[19] + Br[65] + Br[999],
		_O = Br[318] + Br[65] + Br[19] + Br[65] + Br[49],
		cO = Br[318] + Br[65] + Br[1e3],
		uO = Br[318] + Br[65] + Br[1e3] + Br[65] + Br[464],
		dO = Br[334] + Br[64] + Br[992] + Br[64] + Br[1001] + Br[64] + Br[334],
		lO = Br[318] + Br[65] + Br[277] + Br[65] + Br[1002] + Br[65] + Br[318],
		vO = Br[334] + Br[64] + Br[674] + Br[64] + Br[1001] + Br[64] + Br[334],
		bO = Br[318] + Br[65] + Br[56] + Br[65] + Br[1002] + Br[65] + Br[318],
		yO = Br[622] + Br[65] + Br[277],
		gO = Br[312] + Br[64] + Br[992] + Br[64] + Br[358],
		mO = Br[622] + Br[65] + Br[277] + Br[65] + Br[937],
		EO = Br[622] + Br[65] + Br[277] + Br[65] + Br[233],
		pO = Br[312] + Br[64] + Br[992] + Br[64] + Br[969],
		xO = Br[622] + Br[65] + Br[277] + Br[65] + Br[652],
		TO = Br[312] + Br[64] + Br[992] + Br[64] + Br[991],
		wO = Br[622] + Br[65] + Br[277] + Br[65] + Br[687],
		OO = Br[312] + Br[64] + Br[992] + Br[64] + Br[627] + Br[64] + Br[970],
		SO = Br[622] + Br[65] + Br[277] + Br[65] + Br[190] + Br[65] + Br[971],
		jO = Br[312] + Br[64] + Br[992] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		IO = Br[312] + Br[64] + Br[992] + Br[64] + Br[972] + Br[64] + Br[221],
		kO = Br[312] + Br[64] + Br[992] + Br[64] + Br[627] + Br[64] + Br[628],
		AO = Br[622] + Br[65] + Br[277] + Br[65] + Br[190] + Br[65] + Br[974],
		LO = Br[312] + Br[64] + Br[992] + Br[64] + Br[627] + Br[64] + Br[975],
		RO = Br[622] + Br[65] + Br[277] + Br[65] + Br[190] + Br[65] + Br[274],
		MO = Br[622] + Br[65] + Br[56],
		CO = Br[312] + Br[64] + Br[674] + Br[64] + Br[358],
		PO = Br[622] + Br[65] + Br[56] + Br[65] + Br[937],
		DO = Br[622] + Br[65] + Br[56] + Br[65] + Br[233],
		zO = Br[312] + Br[64] + Br[674] + Br[64] + Br[969],
		NO = Br[622] + Br[65] + Br[56] + Br[65] + Br[652],
		BO = Br[312] + Br[64] + Br[674] + Br[64] + Br[991],
		$O = Br[622] + Br[65] + Br[56] + Br[65] + Br[687],
		FO = Br[312] + Br[64] + Br[674] + Br[64] + Br[991] + Br[64] + Br[441],
		GO = Br[622] + Br[65] + Br[56] + Br[65] + Br[190] + Br[65] + Br[971],
		qO = Br[312] + Br[64] + Br[674] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		YO = Br[622] + Br[65] + Br[56] + Br[65] + Br[646] + Br[65] + Br[225],
		HO = Br[312] + Br[64] + Br[674] + Br[64] + Br[972] + Br[64] + Br[665],
		UO = Br[312] + Br[64] + Br[674] + Br[64] + Br[627] + Br[64] + Br[628],
		WO = Br[622] + Br[65] + Br[56] + Br[65] + Br[190] + Br[65] + Br[974],
		XO = Br[312] + Br[64] + Br[674] + Br[64] + Br[627] + Br[64] + Br[975],
		VO = Br[622] + Br[65] + Br[56] + Br[65] + Br[190] + Br[65] + Br[274],
		KO = Br[955],
		ZO = Br[982] + Br[64] + Br[985],
		JO = Br[225],
		QO = Br[243] + Br[1] + Br[656],
		tS = Br[956] + Br[51] + Br[194] + Br[100] + Br[1003],
		iS = Br[178] + Br[57] + Br[1004],
		nS = Br[988] + Br[29] + Br[78],
		eS = Br[982] + Br[64] + Br[990],
		sS = Br[242] + Br[191] + Br[192],
		rS = Br[956] + Br[29] + Br[1005],
		hS = Br[241] + Br[82] + Br[247],
		aS = Br[982] + Br[64] + Br[1006],
		oS = Br[234],
		fS = Br[982] + Br[64] + Br[979] + Br[64] + Br[665],
		_S = Br[982] + Br[64] + Br[635] + Br[64] + Br[221],
		cS = Br[982] + Br[64] + Br[635] + Br[64] + Br[965] + Br[64] + Br[107],
		uS = Br[64] + Br[71] + Br[116],
		dS = Br[979] + Br[64] + Br[221],
		lS = Br[682] + Br[64] + Br[221],
		vS = Br[64] + Br[591],
		bS = Br[303] + Br[64] + Br[969],
		yS = Br[980] + Br[100] + Br[269],
		gS = Br[687],
		mS = Br[303] + Br[64] + Br[991] + Br[64] + Br[441],
		ES = Br[303] + Br[64] + Br[972] + Br[64] + Br[665],
		pS = Br[206] + Br[64] + Br[979] + Br[64] + Br[665],
		xS = Br[206] + Br[64] + Br[682],
		TS = Br[206] + Br[64] + Br[682] + Br[64] + Br[221],
		wS = Br[1007] + Br[32] + Br[1008],
		OS = Br[64] + Br[1009],
		SS = Br[968],
		jS = Br[64] + Br[314] + Br[452],
		IS = Br[312] + Br[64] + Br[992],
		kS = Br[277] + Br[17] + Br[1010],
		AS = Br[56] + Br[17] + Br[1010],
		LS = Br[277] + Br[17] + Br[1010] + Br[123] + Br[177],
		RS = Br[312] + Br[64] + Br[992] + Br[64] + Br[965],
		MS = Br[277] + Br[17] + Br[1010] + Br[51] + Br[110],
		CS = Br[277] + Br[17] + Br[1010] + Br[123] + Br[195],
		PS = Br[312] + Br[64] + Br[992] + Br[64] + Br[969] + Br[64] + Br[441],
		DS = Br[277] + Br[17] + Br[1010] + Br[123] + Br[195] + Br[123] + Br[329],
		zS = Br[277] + Br[17] + Br[1010] + Br[51] + Br[1011],
		NS = Br[312] + Br[64] + Br[992] + Br[64] + Br[991] + Br[64] + Br[441],
		BS = Br[277] + Br[17] + Br[1010] + Br[57] + Br[1012] + Br[1] + Br[656],
		$S = Br[312] + Br[64] + Br[992] + Br[64] + Br[972] + Br[64] + Br[665],
		FS = Br[277] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[130] + Br[253],
		GS = Br[277] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[685] + Br[686],
		qS = Br[277] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[1] + Br[684],
		YS = Br[56] + Br[17] + Br[1010] + Br[123] + Br[177],
		HS = Br[312] + Br[64] + Br[674] + Br[64] + Br[965],
		US = Br[56] + Br[17] + Br[1010] + Br[51] + Br[110],
		WS = Br[56] + Br[17] + Br[1010] + Br[123] + Br[195],
		XS = Br[56] + Br[17] + Br[1010] + Br[123] + Br[195] + Br[123] + Br[329],
		VS = Br[56] + Br[17] + Br[1010] + Br[51] + Br[1011],
		KS = Br[56] + Br[17] + Br[1010] + Br[51] + Br[1011] + Br[123] + Br[329],
		ZS = Br[312] + Br[64] + Br[674] + Br[64] + Br[972] + Br[64] + Br[221],
		JS = Br[56] + Br[17] + Br[1010] + Br[57] + Br[1012] + Br[1] + Br[656],
		QS = Br[56] + Br[17] + Br[1010] + Br[57] + Br[1012] + Br[244] + Br[245],
		tj = Br[56] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[130] + Br[253],
		ij = Br[56] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[685] + Br[686],
		nj = Br[56] + Br[17] + Br[1010] + Br[15] + Br[252] + Br[1] + Br[684],
		ej = Br[927] + Br[15] + Br[1013],
		sj = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[979] + Br[64] + Br[665],
		rj = Br[238] + Br[123] + Br[359],
		hj = Br[303] + Br[64] + Br[991],
		aj = Br[206] + Br[64] + Br[979] + Br[64] + Br[221],
		oj = Br[206] + Br[64] + Br[682] + Br[64] + Br[627] + Br[64] + Br[970],
		fj = Br[312] + Br[64] + Br[674] + Br[64] + Br[969] + Br[64] + Br[441],
		_j = Br[312] + Br[64] + Br[674] + Br[64] + Br[627] + Br[64] + Br[970],
		cj = Br[238] + Br[1] + Br[2] + Br[186] + Br[203],
		uj = Br[8] + Br[32] + Br[1014],
		dj = Br[238] + Br[123] + Br[177],
		lj = Br[45] + Br[32] + Br[1014] + Br[29] + Br[43] + Br[1] + Br[488],
		vj = Br[238] + Br[82] + Br[1015],
		bj = Br[79] + Br[1] + Br[80],
		yj = Br[79] + Br[32] + Br[1014],
		gj = Br[319] + Br[1] + Br[2],
		mj = Br[456],
		Ej = Br[44] + Br[399] + Br[32] + Br[683],
		pj = Br[44] + Br[602] + Br[51] + Br[110] + Br[106],
		xj = Br[44] + Br[399] + Br[123] + Br[681] + Br[51] + Br[110] + Br[106],
		Tj = Br[44] + Br[602] + Br[51] + Br[110] + Br[107],
		wj = Br[44] + Br[399] + Br[123] + Br[681] + Br[51] + Br[110] + Br[107],
		Oj = Br[44] + Br[399] + Br[123] + Br[681] + Br[32] + Br[657],
		Sj = Br[45] + Br[32] + Br[183] + Br[1] + Br[479],
		jj = Br[44] + Br[238] + Br[32] + Br[183],
		Ij = Br[362] + Br[1] + Br[479],
		kj = Br[44] + Br[661] + Br[1] + Br[656],
		Aj = Br[44] + Br[661] + Br[1] + Br[656] + Br[32] + Br[662] + Br[117] + Br[279],
		Lj = Br[44] + Br[602] + Br[1] + Br[656],
		Rj = Br[44] + Br[602] + Br[32] + Br[657],
		Mj = Br[365] + Br[100] + Br[366] + Br[1] + Br[2],
		Cj = Br[44] + Br[238] + Br[123] + Br[521],
		Pj = Br[176] + Br[117] + Br[1016] + Br[32] + Br[183],
		Dj = Br[44] + Br[238] + Br[57] + Br[1012] + Br[244] + Br[245],
		zj = Br[44] + Br[980] + Br[100] + Br[269],
		Nj = Br[44] + Br[646] + Br[1] + Br[656],
		Bj = Br[44] + Br[646] + Br[244] + Br[245],
		$j = Br[123] + Br[521],
		Fj = Br[57] + Br[1012] + Br[244] + Br[245],
		Gj = Br[44] + Br[178] + Br[123] + Br[177],
		qj = Br[44] + Br[178],
		Yj = Br[987] + Br[64] + Br[985],
		Hj = Br[412] + Br[17] + Br[1017],
		Uj = Br[44] + Br[937],
		Wj = Br[57] + Br[899],
		Xj = Br[44] + Br[238] + Br[57] + Br[899],
		Vj = Br[44] + Br[178] + Br[123] + Br[329],
		Kj = Br[44] + Br[178] + Br[57] + Br[1004],
		Zj = Br[929] + Br[32] + Br[183],
		Jj = Br[44] + Br[238] + Br[57] + Br[1018] + Br[17] + Br[1010],
		Qj = Br[44] + Br[238] + Br[100] + Br[171] + Br[17] + Br[1010],
		tI = Br[44] + Br[190] + Br[191] + Br[192],
		iI = Br[319] + Br[57] + Br[1018] + Br[17] + Br[1010],
		nI = Br[44] + Br[277] + Br[17] + Br[1010] + Br[123] + Br[359],
		eI = Br[44] + Br[277] + Br[17] + Br[1010],
		sI = Br[277] + Br[17] + Br[1010] + Br[123] + Br[938],
		rI = Br[44] + Br[56] + Br[17] + Br[1010] + Br[123] + Br[359],
		hI = Br[44] + Br[56] + Br[17] + Br[1010] + Br[51] + Br[110],
		aI = Br[56] + Br[17] + Br[1010] + Br[15] + Br[215],
		oI = Br[56] + Br[17] + Br[1010] + Br[123] + Br[938],
		fI = Br[244] + Br[245],
		_I = Br[17] + Br[1010] + Br[123] + Br[195],
		cI = Br[17] + Br[1010] + Br[123] + Br[195] + Br[123] + Br[329],
		uI = Br[17] + Br[1010] + Br[123] + Br[938],
		dI = Br[17] + Br[1010] + Br[15] + Br[252] + Br[130] + Br[253],
		lI = Br[17] + Br[1010] + Br[15] + Br[252] + Br[130] + Br[253] + Br[51] + Br[110],
		vI = Br[17] + Br[1010] + Br[57] + Br[1012] + Br[1] + Br[656],
		bI = Br[17] + Br[1010] + Br[57] + Br[1012] + Br[244] + Br[245],
		yI = Br[17] + Br[1010] + Br[15] + Br[252] + Br[1] + Br[684],
		gI = Br[17] + Br[1010] + Br[15] + Br[252] + Br[685] + Br[686],
		mI = Br[17] + Br[1010] + Br[51] + Br[1011],
		EI = Br[17] + Br[1010] + Br[51] + Br[1011] + Br[123] + Br[329],
		pI = Br[44] + Br[56] + Br[17] + Br[1010],
		xI = Br[277] + Br[17] + Br[1010] + Br[15] + Br[215],
		TI = Br[204] + Br[17] + Br[1010],
		wI = Br[44] + Br[687],
		OI = Br[57] + Br[1018] + Br[17] + Br[1010],
		SI = Br[100] + Br[171] + Br[17] + Br[1010],
		jI = Br[398] + Br[32] + Br[1014] + Br[29] + Br[321],
		II = Br[334] + Br[64] + Br[327] + Br[64] + Br[1019],
		kI = Br[1020] + Br[32] + Br[1021],
		AI = Br[193] + Br[29] + Br[1022] + Br[51] + Br[1023],
		LI = Br[173] + Br[32] + Br[292] + Br[15] + Br[1013],
		RI = Br[1024],
		MI = Br[3] + Br[32] + Br[292] + Br[15] + Br[1013],
		CI = Br[1007] + Br[32] + Br[292] + Br[15] + Br[1013],
		PI = Br[334] + Br[64] + Br[327] + Br[64] + Br[424],
		DI = Br[286] + Br[20] + Br[286],
		zI = Br[65] + Br[330] + Br[86] + Br[244] + Br[331],
		NI = Br[412] + Br[86] + Br[988] + Br[467] + Br[112] + Br[1025] + Br[687] + Br[467] + Br[390] + Br[1026] + Br[166] + Br[86] + Br[1027] + Br[86] + Br[1028] + Br[86] + Br[225] + Br[92] + Br[53] + Br[54] + Br[286] + Br[55] + Br[286] + Br[55] + Br[286] + Br[55] + Br[286] + Br[1029] + Br[430] + Br[86] + Br[413] + Br[467] + Br[390],
		BI = Br[265] + Br[46] + Br[266] + Br[82] + Br[1030],
		$I = Br[286],
		FI = Br[1031] + Br[17] + Br[276] + Br[1] + Br[1032],
		GI = Br[209] + Br[82] + Br[1033],
		qI = Br[333] + Br[186] + Br[175],
		YI = Br[105] + Br[191] + Br[192],
		HI = Br[982] + Br[64] + Br[682],
		UI = Br[60] + Br[1034],
		WI = Br[334] + Br[64] + Br[989] + Br[64] + Br[982] + Br[64] + Br[984] + Br[64] + Br[985],
		XI = Br[462] + Br[64] + Br[342],
		VI = Br[60] + Br[1035] + Br[1036] + Br[314],
		KI = Br[60] + Br[1037] + Br[46] + Br[286],
		ZI = Br[981],
		JI = Br[394] + Br[64] + Br[1038],
		QI = Br[1039] + Br[65] + Br[1040],
		tk = Br[1039] + Br[65] + Br[390],
		ik = Br[394] + Br[64] + Br[1041],
		nk = Br[1039] + Br[65] + Br[126],
		ek = Br[394] + Br[64] + Br[327],
		sk = Br[3] + Br[46] + Br[174] + Br[32] + Br[116] + Br[186] + Br[175],
		rk = Br[8] + Br[32] + Br[116] + Br[186] + Br[175],
		hk = Br[45] + Br[29] + Br[43] + Br[1] + Br[488],
		ak = Br[64] + Br[457] + Br[288],
		ok = Br[319] + Br[46] + Br[291] + Br[32] + Br[292],
		fk = Br[265] + Br[46] + Br[266] + Br[32] + Br[116] + Br[130] + Br[1042] + Br[57] + Br[1043],
		_k = Br[3] + Br[186] + Br[203] + Br[32] + Br[116] + Br[186] + Br[175],
		ck = Br[114] + Br[491],
		uk = Br[144] + Br[444] + Br[20] + Br[1044],
		dk = Br[176] + Br[186] + Br[203] + Br[32] + Br[1045],
		lk = Br[193] + Br[32] + Br[292] + Br[46] + Br[928],
		vk = Br[1046] + Br[46] + Br[1047],
		bk = Br[1048] + Br[65] + Br[404],
		yk = Br[476] + Br[64] + Br[1049],
		gk = Br[417],
		mk = Br[1050],
		Ek = Br[189] + Br[100] + Br[1051],
		pk = Br[3] + Br[130] + Br[188],
		xk = Br[56] + Br[15] + Br[1052],
		Tk = Br[13] + Br[279],
		wk = Br[173] + Br[123] + Br[359] + Br[13] + Br[279],
		Ok = Br[244] + Br[947],
		Sk = Br[173] + Br[13] + Br[279],
		jk = Br[3] + Br[46] + Br[174] + Br[32] + Br[116] + Br[117] + Br[118] + Br[46] + Br[47],
		Ik = Br[1053],
		kk = Br[105] + Br[29] + Br[321],
		Ak = Br[495],
		Lk = Br[45] + Br[46] + Br[174] + Br[1] + Br[1054],
		Rk = Br[1055] + Br[64] + Br[1056],
		Mk = Br[45] + Br[186] + Br[1057] + Br[46] + Br[47],
		Ck = Br[1058],
		Pk = Br[1059],
		Dk = Br[1020] + Br[15] + Br[1060] + Br[57] + Br[1018],
		zk = Br[1020] + Br[15] + Br[1060] + Br[100] + Br[171],
		Nk = Br[79] + Br[46] + Br[174],
		Bk = Br[211] + Br[100] + Br[171],
		$k = Br[5] + Br[15] + Br[1061],
		Fk = Br[364] + Br[100] + Br[171],
		Gk = Br[526] + Br[17] + Br[433],
		qk = Br[1062] + Br[64] + Br[1063],
		Yk = Br[201] + Br[123] + Br[521],
		Hk = Br[231] + Br[123] + Br[1064],
		Uk = Br[1065],
		Wk = Br[193] + Br[117] + Br[1066],
		Xk = Br[1067],
		Vk = Br[64] + Br[1068],
		Kk = Br[1069] + Br[911],
		Zk = Br[130] + Br[1070] + Br[20] + Br[46] + Br[1071] + Br[214],
		Jk = Br[1055] + Br[64] + Br[1072],
		Qk = Br[123] + Br[359],
		tA = Br[15] + Br[252],
		iA = Br[123] + Br[938],
		nA = Br[46] + Br[291],
		eA = Br[419] + Br[29] + Br[321],
		sA = Br[45] + Br[15] + Br[1013] + Br[46] + Br[1073],
		rA = Br[15] + Br[1013] + Br[20] + Br[1] + Br[1074] + Br[143] + Br[276] + Br[20] + Br[46] + Br[251],
		hA = Br[1075] + Br[46] + Br[291],
		aA = Br[1076],
		oA = Br[1077] + Br[46] + Br[490],
		fA = Br[1078],
		_A = Br[419] + Br[117] + Br[279],
		cA = Br[324] + Br[1] + Br[488] + Br[130] + Br[489],
		uA = Br[941] + Br[64] + Br[327] + Br[64] + Br[304],
		dA = Br[64] + Br[1079],
		lA = Br[394] + Br[64] + Br[206] + Br[64] + Br[344],
		vA = Br[189] + Br[92] + Br[213] + Br[405] + Br[406] + Br[93] + Br[534] + Br[535] + Br[55] + Br[536] + Br[537] + Br[538] + Br[286] + Br[539] + Br[540] + Br[541] + Br[542] + Br[543] + Br[544] + Br[1080] + Br[171] + Br[1081] + Br[1076] + Br[117] + Br[1082] + Br[548] + Br[461] + Br[71] + Br[549] + Br[286] + Br[175] + Br[71] + Br[57] + Br[116] + Br[550] + Br[547] + Br[536] + Br[551] + Br[461] + Br[552] + Br[194] + Br[553] + Br[457] + Br[554] + Br[314] + Br[555] + Br[1083] + Br[1084] + Br[1085] + Br[557] + Br[13] + Br[1086] + Br[26] + Br[457] + Br[287] + Br[186] + Br[1087] + Br[287] + Br[1088] + Br[1089] + Br[186] + Br[1090] + Br[1091] + Br[405] + Br[1092] + Br[1093] + Br[1094] + Br[244] + Br[288] + Br[1095] + Br[175] + Br[1096] + Br[1097] + Br[130] + Br[175] + Br[32] + Br[542] + Br[1098] + Br[405] + Br[287] + Br[1099] + Br[276] + Br[287] + Br[1100] + Br[286] + Br[1101] + Br[624] + Br[46] + Br[1076] + Br[1102] + Br[624] + Br[1103] + Br[286] + Br[536] + Br[1104] + Br[1105] + Br[1106] + Br[71] + Br[151] + Br[13] + Br[699] + Br[542] + Br[71] + Br[151] + Br[107] + Br[1076] + Br[452] + Br[1107] + Br[1108] + Br[130] + Br[1109] + Br[546] + Br[1110] + Br[29] + Br[547] + Br[405] + Br[624] + Br[458] + Br[1111] + Br[564] + Br[549] + Br[71] + Br[1112] + Br[895] + Br[1113] + Br[1114] + Br[1115] + Br[538] + Br[1116] + Br[538] + Br[130] + Br[542] + Br[625] + Br[910] + Br[624] + Br[429] + Br[625] + Br[1117] + Br[1118] + Br[1119] + Br[82] + Br[625] + Br[1120] + Br[106] + Br[288] + Br[244] + Br[452] + Br[15] + Br[288] + Br[1121] + Br[544] + Br[330] + Br[458] + Br[287] + Br[1122] + Br[624] + Br[578] + Br[123] + Br[544] + Br[1123] + Br[544] + Br[1124] + Br[1125] + Br[244] + Br[546] + Br[1126] + Br[452] + Br[87] + Br[457] + Br[1127] + Br[286] + Br[1128] + Br[276] + Br[15] + Br[536] + Br[1129] + Br[460] + Br[330] + Br[1130] + Br[17] + Br[1131] + Br[1132] + Br[625] + Br[777] + Br[1133] + Br[287] + Br[1134] + Br[540] + Br[405] + Br[57] + Br[1135] + Br[288] + Br[51] + Br[624] + Br[29] + Br[1136] + Br[1137] + Br[624] + Br[1138] + Br[287] + Br[544] + Br[1139] + Br[457] + Br[1140] + Br[116] + Br[1141] + Br[286] + Br[538] + Br[46] + Br[845] + Br[26] + Br[1142] + Br[1143] + Br[459] + Br[624] + Br[1076] + Br[1144] + Br[1145] + Br[457] + Br[1146] + Br[1147] + Br[1148] + Br[106] + Br[452] + Br[287] + Br[1149] + Br[405] + Br[1150] + Br[287] + Br[1151] + Br[1152] + Br[71] + Br[1153] + Br[1154] + Br[1155] + Br[625] + Br[87] + Br[457] + Br[405] + Br[1156] + Br[625] + Br[51] + Br[1157] + Br[1112] + Br[1158] + Br[140] + Br[459] + Br[186] + Br[194] + Br[549] + Br[71] + Br[26] + Br[460] + Br[685] + Br[777] + Br[1076] + Br[117] + Br[458] + Br[405] + Br[544] + Br[46] + Br[151] + Br[71] + Br[26] + Br[546] + Br[1076] + Br[1159] + Br[910] + Br[71] + Br[57] + Br[1160] + Br[191] + Br[1161] + Br[287] + Br[1162] + Br[1163] + Br[1087] + Br[1132] + Br[313] + Br[461] + Br[15] + Br[557] + Br[624] + Br[1164] + Br[547] + Br[544] + Br[32] + Br[288] + Br[1165] + Br[287] + Br[106] + Br[1076] + Br[17] + Br[194] + Br[286] + Br[330] + Br[1076] + Br[1166] + Br[1167] + Br[405] + Br[286] + Br[46] + Br[194] + Br[82] + Br[1167] + Br[26] + Br[625] + Br[1168] + Br[625] + Br[1169] + Br[1170] + Br[1171] + Br[175] + Br[17] + Br[536] + Br[1118] + Br[557] + Br[314] + Br[130] + Br[1172] + Br[405] + Br[1173] + Br[685] + Br[288] + Br[544] + Br[1174] + Br[405] + Br[244] + Br[461] + Br[546] + Br[1175] + Br[123] + Br[405] + Br[71] + Br[1176] + Br[117] + Br[564] + Br[140] + Br[624] + Br[405] + Br[288] + Br[117] + Br[547] + Br[1177] + Br[1173] + Br[1178] + Br[1179] + Br[244] + Br[544] + Br[286] + Br[244] + Br[287] + Br[1076] + Br[1180] + Br[625] + Br[1076] + Br[314] + Br[1181] + Br[1182] + Br[1183] + Br[244] + Br[1184] + Br[1185] + Br[460] + Br[685] + Br[1186] + Br[191] + Br[71] + Br[13] + Br[538] + Br[287] + Br[405] + Br[544] + Br[313] + Br[405] + Br[547] + Br[1187] + Br[1188] + Br[130] + Br[1189] + Br[1169] + Br[313] + Br[1190] + Br[458] + Br[82] + Br[536] + Br[1191] + Br[276] + Br[314] + Br[1184] + Br[100] + Br[1192] + Br[1076] + Br[116] + Br[1193] + Br[546] + Br[1194] + Br[459] + Br[1195] + Br[573] + Br[287] + Br[375] + Br[71] + Br[405] + Br[1196] + Br[330] + Br[459] + Br[1076] + Br[1197] + Br[330] + Br[1167] + Br[26] + Br[1198] + Br[624] + Br[1076] + Br[1199] + Br[26] + Br[1200] + Br[1201] + Br[1202] + Br[286] + Br[1203] + Br[1204] + Br[26] + Br[625] + Br[538] + Br[15] + Br[1205] + Br[546] + Br[1184] + Br[1206] + Br[287] + Br[557] + Br[106] + Br[457] + Br[1207] + Br[459] + Br[71] + Br[1208] + Br[1209] + Br[1210] + Br[71] + Br[13] + Br[460] + Br[1211] + Br[573] + Br[1212] + Br[457] + Br[1076] + Br[1213] + Br[287] + Br[1214] + Br[276] + Br[286] + Br[1215] + Br[396] + Br[171] + Br[13] + Br[542] + Br[106] + Br[1087] + Br[1216] + Br[1217] + Br[1218] + Br[1087] + Br[100] + Br[1219] + Br[546] + Br[29] + Br[1184] + Br[57] + Br[313] + Br[1220] + Br[1184] + Br[244] + Br[1221] + Br[1222] + Br[1223] + Br[396] + Br[1224] + Br[1225] + Br[276] + Br[288] + Br[106] + Br[1226] + Br[313] + Br[191] + Br[1167] + Br[547] + Br[51] + Br[1167] + Br[1227] + Br[313] + Br[1126] + Br[625] + Br[175] + Br[288] + Br[13] + Br[116] + Br[87] + Br[536] + Br[107] + Br[460] + Br[685] + Br[288] + Br[123] + Br[1228] + Br[140] + Br[1167] + Br[140] + Br[1229] + Br[549] + Br[1230] + Br[624] + Br[1231] + Br[1076] + Br[130] + Br[1232] + Br[1233] + Br[452] + Br[624] + Br[140] + Br[1234] + Br[140] + Br[546] + Br[106] + Br[536] + Br[1076] + Br[396] + Br[288] + Br[194] + Br[1235] + Br[1236] + Br[244] + Br[286] + Br[457] + Br[244] + Br[287] + Br[459] + Br[1] + Br[557] + Br[100] + Br[116] + Br[107] + Br[777] + Br[287] + Br[457] + Br[546] + Br[1237] + Br[106] + Br[625] + Br[1238] + Br[313] + Br[1] + Br[538] + Br[314] + Br[123] + Br[461] + Br[396] + Br[777] + Br[546] + Br[151] + Br[130] + Br[1239] + Br[1240] + Br[276] + Br[107] + Br[313] + Br[570] + Br[71] + Br[244] + Br[1241] + Br[1242] + Br[538] + Br[57] + Br[405] + Br[116] + Br[313] + Br[910] + Br[15] + Br[1243] + Br[191] + Br[1244] + Br[1245] + Br[405] + Br[452] + Br[1246] + Br[1076] + Br[1247] + Br[546] + Br[244] + Br[171] + Br[82] + Br[1167] + Br[286] + Br[343] + Br[573] + Br[1248] + Br[1249] + Br[582] + Br[171] + Br[314] + Br[1250] + Br[314] + Br[175] + Br[1251] + Br[460] + Br[29] + Br[313] + Br[32] + Br[1252] + Br[1253] + Br[1076] + Br[194] + Br[287] + Br[896] + Br[1254] + Br[1255] + Br[288] + Br[1256] + Br[276] + Br[117] + Br[777] + Br[1257] + Br[624] + Br[777] + Br[46] + Br[460] + Br[51] + Br[314] + Br[51] + Br[557] + Br[1258] + Br[570] + Br[624] + Br[175] + Br[1259] + Br[1260] + Br[1261] + Br[461] + Br[191] + Br[71] + Br[1262] + Br[288] + Br[13] + Br[564] + Br[1263] + Br[452] + Br[1264] + Br[910] + Br[685] + Br[564] + Br[1265] + Br[1266] + Br[1267] + Br[1268] + Br[1269] + Br[1270] + Br[1271] + Br[123] + Br[286] + Br[549] + Br[547] + Br[1272] + Br[625] + Br[1273] + Br[1274] + Br[624] + Br[538] + Br[1275] + Br[194] + Br[123] + Br[314] + Br[1276] + Br[330] + Br[457] + Br[625] + Br[1277] + Br[51] + Br[1278] + Br[1279] + Br[1167] + Br[29] + Br[175] + Br[1280] + Br[458] + Br[812] + Br[17] + Br[625] + Br[910] + Br[546] + Br[452] + Br[396] + Br[459] + Br[625] + Br[244] + Br[544] + Br[130] + Br[625] + Br[557] + Br[123] + Br[1281] + Br[624] + Br[1282] + Br[191] + Br[452] + Br[57] + Br[286] + Br[1184] + Br[100] + Br[547] + Br[1167] + Br[1283] + Br[1076] + Br[458] + Br[130] + Br[547] + Br[457] + Br[625] + Br[557] + Br[1284] + Br[564] + Br[625] + Br[1076] + Br[123] + Br[1285] + Br[1286] + Br[46] + Br[557] + Br[624] + Br[459] + Br[1287] + Br[288] + Br[1288] + Br[1076] + Br[1167] + Br[288] + Br[26] + Br[1289] + Br[625] + Br[1290] + Br[313] + Br[32] + Br[1184] + Br[51] + Br[624] + Br[1291] + Br[396] + Br[1184] + Br[1292] + Br[570] + Br[624] + Br[276] + Br[1293] + Br[116] + Br[71] + Br[1294] + Br[117] + Br[538] + Br[288] + Br[1295] + Br[573] + Br[100] + Br[1184] + Br[1296] + Br[286] + Br[1173] + Br[1297] + Br[1298] + Br[71] + Br[797] + Br[1076] + Br[1299] + Br[1300] + Br[29] + Br[314] + Br[536] + Br[546] + Br[461] + Br[106] + Br[1301] + Br[587] + Br[314] + Br[588] + Br[154],
		bA = Br[189] + Br[92] + Br[213] + Br[405] + Br[406] + Br[93] + Br[534] + Br[535] + Br[55] + Br[536] + Br[537] + Br[538] + Br[286] + Br[539] + Br[540] + Br[541] + Br[542] + Br[543] + Br[544] + Br[1302] + Br[544] + Br[1303] + Br[405] + Br[82] + Br[194] + Br[1076] + Br[625] + Br[548] + Br[461] + Br[71] + Br[549] + Br[286] + Br[175] + Br[71] + Br[57] + Br[116] + Br[550] + Br[547] + Br[536] + Br[551] + Br[461] + Br[552] + Br[194] + Br[553] + Br[457] + Br[554] + Br[314] + Br[555] + Br[1083] + Br[1304] + Br[1085] + Br[557] + Br[13] + Br[459] + Br[1305] + Br[1173] + Br[1076] + Br[1306] + Br[457] + Br[1307] + Br[1087] + Br[546] + Br[564] + Br[1308] + Br[544] + Br[1309] + Br[459] + Br[1310] + Br[542] + Br[17] + Br[536] + Br[1311] + Br[116] + Br[286] + Br[1312] + Br[1301] + Br[26] + Br[1313] + Br[330] + Br[151] + Br[286] + Br[17] + Br[1076] + Br[1] + Br[1314] + Br[1315] + Br[452] + Br[57] + Br[457] + Br[13] + Br[910] + Br[313] + Br[1316] + Br[276] + Br[330] + Br[573] + Br[244] + Br[1317] + Br[1318] + Br[544] + Br[1319] + Br[1087] + Br[543] + Br[276] + Br[244] + Br[71] + Br[186] + Br[460] + Br[1320] + Br[564] + Br[547] + Br[194] + Br[71] + Br[29] + Br[458] + Br[286] + Br[1321] + Br[1322] + Br[288] + Br[106] + Br[564] + Br[546] + Br[51] + Br[151] + Br[13] + Br[1323] + Br[1324] + Br[405] + Br[175] + Br[1325] + Br[1326] + Br[396] + Br[1327] + Br[107] + Br[459] + Br[57] + Br[1328] + Br[1329] + Br[542] + Br[313] + Br[151] + Br[1076] + Br[457] + Br[87] + Br[1330] + Br[46] + Br[1331] + Br[546] + Br[106] + Br[194] + Br[1076] + Br[116] + Br[1332] + Br[313] + Br[910] + Br[1333] + Br[564] + Br[1334] + Br[777] + Br[625] + Br[1335] + Br[57] + Br[171] + Br[288] + Br[1076] + Br[1336] + Br[1337] + Br[405] + Br[1338] + Br[570] + Br[1339] + Br[1340] + Br[405] + Br[547] + Br[1341] + Br[1342] + Br[405] + Br[557] + Br[17] + Br[1343] + Br[1312] + Br[564] + Br[1344] + Br[459] + Br[1345] + Br[194] + Br[244] + Br[288] + Br[461] + Br[286] + Br[1346] + Br[286] + Br[1347] + Br[130] + Br[625] + Br[17] + Br[1173] + Br[405] + Br[56] + Br[396] + Br[286] + Br[1348] + Br[1349] + Br[1076] + Br[1350] + Br[458] + Br[314] + Br[1351] + Br[1173] + Br[186] + Br[459] + Br[1352] + Br[194] + Br[17] + Br[286] + Br[1353] + Br[1167] + Br[1354] + Br[1355] + Br[1356] + Br[538] + Br[883] + Br[244] + Br[1357] + Br[1358] + Br[57] + Br[1359] + Br[244] + Br[544] + Br[1360] + Br[1184] + Br[1361] + Br[546] + Br[562] + Br[1087] + Br[288] + Br[405] + Br[546] + Br[13] + Br[1362] + Br[1320] + Br[1076] + Br[777] + Br[46] + Br[171] + Br[287] + Br[1363] + Br[314] + Br[1364] + Br[1365] + Br[57] + Br[538] + Br[624] + Br[1366] + Br[452] + Br[549] + Br[1367] + Br[288] + Br[1076] + Br[287] + Br[140] + Br[276] + Br[26] + Br[573] + Br[106] + Br[461] + Br[625] + Br[549] + Br[1167] + Br[288] + Br[276] + Br[286] + Br[396] + Br[116] + Br[546] + Br[549] + Br[546] + Br[1368] + Br[17] + Br[151] + Br[191] + Br[544] + Br[1369] + Br[1370] + Br[1371] + Br[1372] + Br[1373] + Br[71] + Br[452] + Br[330] + Br[1374] + Br[46] + Br[287] + Br[1375] + Br[330] + Br[1376] + Br[330] + Br[1377] + Br[1378] + Br[82] + Br[452] + Br[1379] + Br[1087] + Br[71] + Br[460] + Br[1360] + Br[151] + Br[547] + Br[1380] + Br[1381] + Br[1382] + Br[100] + Br[1184] + Br[17] + Br[1383] + Br[549] + Br[536] + Br[1384] + Br[1385] + Br[330] + Br[1386] + Br[330] + Br[546] + Br[460] + Br[1387] + Br[1388] + Br[130] + Br[1389] + Br[17] + Br[570] + Br[1390] + Br[536] + Br[547] + Br[106] + Br[1173] + Br[547] + Br[82] + Br[1087] + Br[1357] + Br[452] + Br[51] + Br[314] + Br[32] + Br[708] + Br[1167] + Br[106] + Br[544] + Br[51] + Br[557] + Br[1391] + Br[458] + Br[685] + Br[314] + Br[1392] + Br[573] + Br[549] + Br[287] + Br[82] + Br[564] + Br[624] + Br[51] + Br[536] + Br[87] + Br[171] + Br[1393] + Br[461] + Br[287] + Br[1394] + Br[1395] + Br[624] + Br[1396] + Br[1397] + Br[1398] + Br[1399] + Br[287] + Br[1400] + Br[186] + Br[1184] + Br[1401] + Br[570] + Br[812] + Br[186] + Br[1402] + Br[287] + Br[542] + Br[1] + Br[1403] + Br[107] + Br[288] + Br[542] + Br[288] + Br[107] + Br[71] + Br[564] + Br[46] + Br[1404] + Br[625] + Br[564] + Br[1405] + Br[1167] + Br[117] + Br[1406] + Br[87] + Br[458] + Br[1323] + Br[1407] + Br[244] + Br[573] + Br[1408] + Br[1409] + Br[29] + Br[1410] + Br[1076] + Br[910] + Br[191] + Br[573] + Br[285] + Br[171] + Br[685] + Br[573] + Br[244] + Br[313] + Br[244] + Br[1411] + Br[288] + Br[106] + Br[287] + Br[100] + Br[1412] + Br[287] + Br[116] + Br[17] + Br[624] + Br[1413] + Br[1164] + Br[1414] + Br[1415] + Br[685] + Br[151] + Br[29] + Br[313] + Br[557] + Br[117] + Br[459] + Br[1416] + Br[625] + Br[1] + Br[313] + Br[1] + Br[287] + Br[538] + Br[117] + Br[542] + Br[1417] + Br[570] + Br[1418] + Br[1419] + Br[286] + Br[538] + Br[685] + Br[276] + Br[1420] + Br[544] + Br[1421] + Br[538] + Br[1422] + Br[116] + Br[1423] + Br[564] + Br[546] + Br[1424] + Br[702] + Br[29] + Br[116] + Br[1115] + Br[287] + Br[123] + Br[573] + Br[87] + Br[536] + Br[547] + Br[106] + Br[1425] + Br[1426] + Br[175] + Br[26] + Br[1427] + Br[1167] + Br[286] + Br[107] + Br[287] + Br[1428] + Br[71] + Br[1429] + Br[313] + Br[452] + Br[26] + Br[1430] + Br[1431] + Br[1241] + Br[186] + Br[288] + Br[1432] + Br[71] + Br[1433] + Br[625] + Br[13] + Br[459] + Br[106] + Br[194] + Br[26] + Br[624] + Br[457] + Br[1434] + Br[71] + Br[1435] + Br[564] + Br[314] + Br[573] + Br[13] + Br[194] + Br[546] + Br[1087] + Br[51] + Br[1436] + Br[1437] + Br[1438] + Br[15] + Br[1439] + Br[1440] + Br[287] + Br[17] + Br[1441] + Br[546] + Br[1442] + Br[1281] + Br[624] + Br[457] + Br[57] + Br[573] + Br[13] + Br[1443] + Br[32] + Br[405] + Br[452] + Br[29] + Br[1444] + Br[885] + Br[46] + Br[151] + Br[15] + Br[1445] + Br[71] + Br[461] + Br[1446] + Br[1368] + Br[405] + Br[396] + Br[1076] + Br[17] + Br[194] + Br[314] + Br[1447] + Br[13] + Br[1184] + Br[1448] + Br[557] + Br[140] + Br[1087] + Br[288] + Br[1449] + Br[547] + Br[1450] + Br[286] + Br[1451] + Br[405] + Br[13] + Br[573] + Br[100] + Br[1452] + Br[405] + Br[1453] + Br[547] + Br[460] + Br[1454] + Br[624] + Br[452] + Br[46] + Br[564] + Br[685] + Br[452] + Br[547] + Br[1455] + Br[87] + Br[458] + Br[286] + Br[549] + Br[559] + Br[130] + Br[542] + Br[1076] + Br[15] + Br[175] + Br[117] + Br[288] + Br[1184] + Br[71] + Br[1184] + Br[547] + Br[457] + Br[1456] + Br[457] + Br[1457] + Br[313] + Br[13] + Br[625] + Br[57] + Br[1458] + Br[1459] + Br[314] + Br[46] + Br[1460] + Br[685] + Br[1461] + Br[1462],
		yA = Br[1079] + Br[164],
		gA = Br[1463] + Br[20] + Br[286] + Br[65] + Br[71] + Br[1173] + Br[20] + Br[1464] + Br[86] + Br[527],
		mA = Br[1465],
		EA = Br[776],
		pA = Br[65] + Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[13] + Br[378] + Br[20] + Br[380],
		xA = Br[1463] + Br[92] + Br[287] + Br[93] + Br[243] + Br[86] + Br[225] + Br[467] + Br[53] + Br[54] + Br[286] + Br[388] + Br[286] + Br[388] + Br[286] + Br[388] + Br[286] + Br[65] + Br[314] + Br[59],
		TA = Br[65] + Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[13] + Br[378],
		wA = Br[1463] + Br[92] + Br[286] + Br[93],
		OA = Br[1466],
		SA = Br[92] + Br[1463] + Br[20] + Br[288] + Br[1173] + Br[20] + Br[1467] + Br[86] + Br[640] + Br[54] + Br[286] + Br[65] + Br[546] + Br[388] + Br[286] + Br[388] + Br[286] + Br[65] + Br[546] + Br[388] + Br[287] + Br[59],
		jA = Br[65] + Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[13] + Br[378] + Br[92] + Br[395],
		IA = Br[1463] + Br[92] + Br[287] + Br[93],
		kA = Br[92] + Br[1463] + Br[20] + Br[286] + Br[65] + Br[288] + Br[1173] + Br[20] + Br[691],
		AA = Br[65] + Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[123] + Br[504] + Br[32] + Br[1415],
		LA = Br[248] + Br[467] + Br[391] + Br[93] + Br[492] + Br[86] + Br[1468] + Br[467] + Br[241] + Br[86] + Br[492] + Br[93] + Br[492] + Br[86] + Br[602] + Br[1469] + Br[653] + Br[20] + Br[286] + Br[164] + Br[20] + Br[286] + Br[164] + Br[20] + Br[287] + Br[164] + Br[1025] + Br[243] + Br[86] + Br[225] + Br[467] + Br[53] + Br[54] + Br[1470] + Br[55] + Br[1470] + Br[55] + Br[1470] + Br[55] + Br[286] + Br[65] + Br[288] + Br[1029] + Br[241] + Br[86] + Br[464] + Br[467] + Br[313] + Br[164] + Br[93] + Br[1471] + Br[467] + Br[287] + Br[164] + Br[93],
		RA = Br[1471] + Br[86] + Br[75] + Br[467] + Br[546] + Br[164] + Br[93],
		MA = Br[1471] + Br[86] + Br[74] + Br[467] + Br[546] + Br[164] + Br[93],
		CA = Br[65] + Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[123] + Br[504] + Br[29] + Br[1472],
		PA = Br[92] + Br[1463] + Br[20] + Br[288] + Br[1173] + Br[20] + Br[1467] + Br[86] + Br[640] + Br[54] + Br[286] + Br[65] + Br[546] + Br[388] + Br[286] + Br[388] + Br[286] + Br[65] + Br[546] + Br[388] + Br[287] + Br[1029],
		DA = Br[330] + Br[86] + Br[244] + Br[331] + Br[86] + Br[123] + Br[504] + Br[29] + Br[1472],
		zA = Br[32] + Br[1473],
		NA = Br[929] + Br[123] + Br[360],
		BA = Br[1474],
		$A = Br[1475] + Br[64] + Br[1476],
		FA = Br[1475] + Br[64] + Br[327],
		GA = Br[1464] + Br[51] + Br[429],
		qA = Br[1464] + Br[51] + Br[429] + Br[123] + Br[1477],
		YA = Br[423] + Br[64] + Br[990] + Br[64] + Br[1478] + Br[64] + Br[358] + Br[64] + Br[1479],
		HA = Br[1048],
		UA = Br[8] + Br[130] + Br[1480],
		WA = Br[958] + Br[130] + Br[1481],
		XA = Br[1482] + Br[1] + Br[279],
		VA = Br[130] + Br[1480] + Br[186] + Br[1057],
		KA = Br[1483],
		ZA = Br[204] + Br[29] + Br[162],
		JA = Br[193] + Br[1] + Br[1484] + Br[29] + Br[250],
		QA = Br[91] + Br[130] + Br[1481],
		tL = Br[3] + Br[130] + Br[499] + Br[130] + Br[1481] + Br[123] + Br[938],
		iL = Br[1485],
		nL = Br[1486],
		eL = Br[56] + Br[15] + Br[1052] + Br[29] + Br[162],
		sL = Br[176] + Br[1] + Br[514] + Br[29] + Br[162],
		rL = Br[3] + Br[130] + Br[499] + Br[123] + Br[329],
		hL = Br[334] + Br[64] + Br[627] + Br[64] + Br[970] + Br[64] + Br[965],
		aL = Br[422] + Br[29] + Br[162],
		oL = Br[173] + Br[15] + Br[252] + Br[32] + Br[116] + Br[186] + Br[1057],
		fL = Br[1] + Br[1487] + Br[15] + Br[252] + Br[186] + Br[1057],
		_L = Br[318] + Br[1488] + Br[926],
		cL = Br[46] + Br[291] + Br[114],
		uL = Br[79] + Br[130] + Br[1480],
		dL = Br[173] + Br[46] + Br[291] + Br[32] + Br[116] + Br[186] + Br[1057],
		lL = Br[1] + Br[1487] + Br[123] + Br[1489] + Br[46] + Br[291] + Br[186] + Br[1057],
		vL = Br[1490],
		bL = Br[330] + Br[86] + Br[15] + Br[1013] + Br[46] + Br[1491],
		yL = Br[1492] + Br[1493] + Br[1377] + Br[46] + Br[20] + Br[287] + Br[164],
		gL = Br[314] + Br[164],
		mL = Br[492] + Br[123] + Br[681],
		EL = Br[1494],
		pL = Br[45] + Br[26] + Br[27] + Br[1] + Br[488],
		xL = Br[31] + Br[46] + Br[1073],
		TL = Br[1495],
		wL = Br[758] + Br[140] + Br[141],
		OL = Br[28] + Br[46] + Br[1073],
		SL = Br[233] + Br[191] + Br[192],
		jL = Br[173] + Br[911],
		IL = Br[28] + Br[46] + Br[1073] + Br[191] + Br[1496] + Br[1] + Br[1497] + Br[51] + Br[194] + Br[191] + Br[915],
		kL = Br[45] + Br[1] + Br[1497] + Br[51] + Br[194] + Br[191] + Br[915],
		AL = Br[505],
		LL = Br[176] + Br[100] + Br[148],
		RL = Br[193] + Br[46] + Br[1498],
		ML = Br[15] + Br[1013] + Br[46] + Br[1491],
		CL = Br[772] + Br[46] + Br[1491],
		PL = Br[1499] + Br[123] + Br[375] + Br[13] + Br[376],
		DL = Br[193] + Br[46] + Br[1500],
		zL = Br[1485] + Br[15] + Br[1013] + Br[46] + Br[1073],
		NL = Br[0] + Br[46] + Br[291] + Br[32] + Br[292],
		BL = Br[8] + Br[123] + Br[952] + Br[32] + Br[116] + Br[186] + Br[1057],
		$L = Br[46] + Br[1073] + Br[186] + Br[1057],
		FL = Br[1501] + Br[186] + Br[187],
		GL = Br[626],
		qL = Br[1501] + Br[20] + Br[213] + Br[214],
		YL = Br[20] + Br[777] + Br[20],
		HL = Br[1502] + Br[46] + Br[1071],
		UL = Br[422] + Br[130] + Br[1503] + Br[46] + Br[174],
		WL = Br[1504],
		XL = Br[1055] + Br[64] + Br[673] + Br[64] + Br[1505],
		VL = Br[471] + Br[186] + Br[1057] + Br[46] + Br[47],
		KL = Br[1055] + Br[64] + Br[1506],
		ZL = Br[1055] + Br[64] + Br[673] + Br[64] + Br[1507],
		JL = Br[301] + Br[46] + Br[1071],
		QL = Br[526] + Br[17] + Br[276],
		tR = Br[189] + Br[29] + Br[43] + Br[1] + Br[488] + Br[130] + Br[489],
		iR = Br[204] + Br[15] + Br[252] + Br[186] + Br[175],
		nR = Br[60] + Br[1508],
		eR = Br[193] + Br[1] + Br[1509] + Br[29] + Br[162],
		sR = Br[998] + Br[186] + Br[203],
		rR = Br[449] + Br[123] + Br[680],
		hR = Br[355] + Br[64] + Br[1506],
		aR = Br[998],
		oR = Br[634] + Br[64] + Br[1510] + Br[64] + Br[969],
		fR = Br[1511] + Br[64] + Br[1505],
		_R = Br[1511] + Br[64] + Br[1507],
		cR = Br[1512] + Br[86] + Br[417],
		uR = Br[1513] + Br[86] + Br[417],
		dR = Br[1514] + Br[86] + Br[417],
		lR = Br[53] + Br[54] + Br[286] + Br[388] + Br[1515] + Br[388] + Br[286] + Br[388] + Br[287] + Br[59],
		vR = Br[60] + Br[1516] + Br[286],
		bR = Br[193] + Br[82] + Br[1517],
		yR = Br[1518] + Br[32] + Br[183],
		gR = Br[1519],
		mR = Br[1520],
		ER = Br[1521] + Br[64] + Br[1507],
		pR = Br[193] + Br[123] + Br[1522],
		xR = Br[1511],
		TR = Br[193] + Br[123] + Br[1523],
		wR = Br[176] + Br[123] + Br[952],
		OR = Br[273] + Br[100] + Br[171] + Br[100] + Br[1003],
		SR = Br[1367] + Br[123] + Br[1524] + Br[17] + Br[1525],
		jR = Br[413] + Br[17] + Br[1525],
		IR = Br[1526] + Br[64] + Br[1527],
		kR = Br[1526] + Br[64] + Br[1528],
		AR = Br[330] + Br[86] + Br[100] + Br[1529],
		LR = Br[60] + Br[1530],
		RR = Br[287] + Br[164] + Br[20] + Br[1492] + Br[1493] + Br[130] + Br[547] + Br[130] + Br[547] + Br[130] + Br[547],
		MR = Br[71] + Br[164] + Br[20] + Br[313] + Br[164],
		CR = Br[3] + Br[100] + Br[1529],
		PR = Br[1531] + Br[100] + Br[269],
		DR = Br[1532] + Br[1198] + Br[1533],
		zR = Br[412] + Br[1] + Br[1534],
		NR = Br[1535],
		BR = Br[173] + Br[57] + Br[427],
		$R = Br[1531] + Br[130] + Br[1536],
		FR = Br[374] + Br[100] + Br[1529],
		GR = Br[1537],
		qR = Br[1048] + Br[65] + Br[301] + Br[65] + Br[1485],
		YR = Br[1048] + Br[65] + Br[1538],
		HR = Br[1048] + Br[65] + Br[301] + Br[65] + Br[898],
		UR = Br[1048] + Br[65] + Br[1539],
		WR = Br[1048] + Br[65] + Br[1540],
		XR = Br[998] + Br[65] + Br[301] + Br[65] + Br[1485],
		VR = Br[998] + Br[65] + Br[1538],
		KR = Br[355] + Br[64] + Br[673] + Br[64] + Br[1507],
		ZR = Br[998] + Br[65] + Br[301] + Br[65] + Br[898],
		JR = Br[417] + Br[65] + Br[1485],
		QR = Br[1541],
		tM = Br[417] + Br[65] + Br[898],
		iM = Br[1542],
		nM = Br[199] + Br[65] + Br[898],
		eM = Br[318] + Br[65] + Br[927],
		sM = Br[413] + Br[65] + Br[1485],
		rM = Br[1511] + Br[64] + Br[1543],
		hM = Br[413] + Br[65] + Br[1544],
		aM = Br[413] + Br[65] + Br[898],
		oM = Br[500] + Br[64] + Br[1545],
		fM = Br[1546] + Br[65] + Br[134],
		_M = Br[422] + Br[186] + Br[1057] + Br[117] + Br[279],
		cM = Br[3] + Br[186] + Br[1057] + Br[186] + Br[1547],
		uM = Br[306] + Br[186] + Br[1548],
		dM = Br[1549],
		lM = Br[399],
		vM = Br[1550],
		bM = Br[1551],
		yM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1552] + Br[64] + Br[1553] + Br[64] + Br[334],
		gM = Br[173] + Br[65] + Br[1554] + Br[65] + Br[318],
		mM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1552] + Br[64] + Br[334],
		EM = Br[173] + Br[65] + Br[318],
		pM = Br[173] + Br[65] + Br[968],
		xM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1552] + Br[64] + Br[627],
		TM = Br[173] + Br[65] + Br[190],
		wM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1555],
		OM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1552] + Br[64] + Br[303],
		SM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1556],
		jM = Br[423] + Br[64] + Br[219] + Br[64] + Br[1557],
		IM = Br[123] + Br[952] + Br[186] + Br[1057],
		kM = Br[117] + Br[1558] + Br[186] + Br[1057],
		AM = Br[191] + Br[1559] + Br[549] + Br[1560] + Br[186] + Br[1057],
		LM = Br[130] + Br[1561] + Br[1] + Br[1497] + Br[186] + Br[1057],
		RM = Br[46] + Br[1562] + Br[186] + Br[1057],
		MM = Br[100] + Br[1529] + Br[186] + Br[1057],
		CM = Br[82] + Br[1563] + Br[123] + Br[952] + Br[186] + Br[1057],
		PM = Br[15] + Br[1564],
		DM = Br[1565],
		zM = Br[1566],
		NM = Br[1567] + Br[100] + Br[269],
		BM = Br[1568],
		$M = Br[978] + Br[17] + Br[1569],
		FM = Br[3] + Br[15] + Br[317] + Br[82] + Br[1570],
		GM = Br[1571] + Br[64] + Br[341],
		qM = Br[1571] + Br[64] + Br[344],
		YM = Br[1571] + Br[64] + Br[462],
		HM = Br[1572],
		UM = Br[1573] + Br[65] + Br[1574],
		WM = Br[1572] + Br[65] + Br[542],
		XM = Br[1572] + Br[65] + Br[1184],
		VM = Br[976] + Br[64] + Br[327] + Br[64] + Br[1575] + Br[64] + Br[339],
		KM = Br[976] + Br[64] + Br[327] + Br[64] + Br[1576] + Br[64] + Br[1577],
		ZM = Br[193] + Br[396] + Br[1578] + Br[130] + Br[1579],
		JM = Br[48] + Br[123] + Br[177],
		QM = Br[193] + Br[15] + Br[1580],
		tC = Br[3] + Br[13] + Br[279] + Br[123] + Br[177],
		iC = Br[542] + Br[244] + Br[684],
		nC = Br[249] + Br[100] + Br[269],
		eC = Br[290] + Br[1] + Br[2] + Br[130] + Br[1579],
		sC = Br[1581],
		rC = Br[1582],
		hC = Br[1184] + Br[244] + Br[684],
		aC = Br[958] + Br[15] + Br[317],
		oC = Br[290] + Br[32] + Br[183],
		fC = Br[447],
		_C = Br[64] + Br[797],
		cC = Br[64] + Br[151] + Br[286],
		uC = Br[236] + Br[1583],
		dC = Br[236] + Br[1126],
		lC = Br[447] + Br[107],
		vC = Br[447] + Br[106],
		bC = Br[249] + Br[82] + Br[1030],
		yC = Br[79] + Br[82] + Br[104],
		gC = Br[422] + Br[117] + Br[1584] + Br[13] + Br[1585],
		mC = Br[238] + Br[15] + Br[317] + Br[130] + Br[480],
		EC = Br[3] + Br[117] + Br[1586] + Br[186] + Br[1587],
		pC = Br[249] + Br[130] + Br[480],
		xC = Br[318] + Br[1] + Br[524],
		TC = Br[1588],
		wC = Br[122] + Br[123] + Br[1064],
		OC = Br[1589] + Br[15] + Br[317] + Br[130] + Br[480],
		SC = Br[193] + Br[82] + Br[1590],
		jC = Br[1591],
		IC = Br[1592],
		kC = Br[1593],
		AC = Br[994],
		LC = Br[1594],
		RC = Br[1595],
		MC = Br[210],
		CC = Br[1596],
		PC = Br[1597] + Br[64] + Br[1598] + Br[64] + Br[1599],
		DC = Br[1597] + Br[64] + Br[1598] + Br[64] + Br[1600],
		zC = Br[1485] + Br[17] + Br[1601],
		NC = Br[3] + Br[244] + Br[684],
		BC = Br[1602],
		$C = Br[363] + Br[123] + Br[1603],
		FC = Br[464] + Br[117] + Br[279],
		GC = Br[447] + Br[287],
		qC = Br[334] + Br[64] + Br[989] + Br[64] + Br[946],
		YC = Br[525] + Br[186] + Br[1604],
		HC = Br[1605],
		UC = Br[1606],
		WC = Br[1607],
		XC = Br[1607] + Br[107],
		VC = Br[1607] + Br[106],
		KC = Br[1589],
		ZC = Br[193] + Br[186] + Br[1608],
		JC = Br[1609],
		QC = Br[249] + Br[46] + Br[1610],
		tP = Br[249] + Br[117] + Br[1611],
		iP = Br[1612],
		nP = Br[1588] + Br[17] + Br[322],
		eP = Br[1613],
		sP = Br[201] + Br[46] + Br[426],
		rP = Br[422] + Br[46] + Br[426],
		hP = Br[123] + Br[1614] + Br[15] + Br[1564],
		aP = Br[469] + Br[15] + Br[1615],
		oP = Br[176] + Br[15] + Br[215],
		fP = Br[1616],
		_P = Br[0] + Br[186] + Br[194] + Br[46] + Br[291],
		cP = Br[265] + Br[46] + Br[266] + Br[32] + Br[116] + Br[100] + Br[1617] + Br[130] + Br[1042] + Br[57] + Br[1043] + Br[123] + Br[1618],
		uP = Br[265] + Br[46] + Br[266] + Br[32] + Br[116] + Br[100] + Br[1617] + Br[32] + Br[1619] + Br[57] + Br[1043] + Br[123] + Br[1618],
		dP = Br[193] + Br[1620],
		lP = Br[193] + Br[51] + Br[1621],
		vP = Br[193] + Br[191] + Br[1622],
		bP = Br[193] + Br[244] + Br[1623],
		yP = Br[193] + Br[57] + Br[1624],
		gP = Br[193] + Br[123] + Br[1625],
		mP = Br[193] + Br[1] + Br[1626],
		EP = Br[193] + Br[117] + Br[828],
		pP = Br[130] + Br[499] + Br[123] + Br[938],
		xP = Br[130] + Br[1627],
		TP = Br[46] + Br[174] + Br[114],
		wP = Br[15] + Br[1013] + Br[114],
		OP = Br[123] + Br[1628],
		SP = Br[100] + Br[1629] + Br[15] + Br[1564],
		jP = Br[330] + Br[1630] + Br[20] + Br[265] + Br[20] + Br[911] + Br[314],
		IP = Br[71] + Br[65] + Br[286],
		kP = Br[1631],
		AP = Br[71] + Br[65] + Br[71],
		LP = Br[330] + Br[1630] + Br[214] + Br[130] + Br[1632] + Br[20] + Br[1] + Br[1633] + Br[20] + Br[265] + Br[20] + Br[911] + Br[314] + Br[405] + Br[1] + Br[407],
		RP = Br[494],
		MP = Br[1174] + Br[1480],
		CP = Br[1634] + Br[405] + Br[1079] + Br[405] + Br[1635],
		PP = 0;
	if (t.navigator) {
		var DP = navigator[$u],
			zP = /opera/i.test(DP),
			NP = !zP && /msie/i.test(DP),
			BP = /rv:11.0/i.test(DP),
			$P = /MSIE 10./i.test(DP);
		if (BP && (NP = !0), /msie\s[6,7,8]/i.test(DP)) throw new Error("your browser is not supported");
		var FP = /webkit|khtml/i.test(DP),
			GP = !FP && /gecko/i [Ro](DP),
			qP = /firefox\//i.test(DP),
			YP = /Chrome\//i.test(DP),
			HP = !YP && /Safari\//i.test(DP),
			UP = /Macintosh;/i [Ro](DP),
			WP = /(iPad|iPhone|iPod)/g [Ro](DP),
			XP = /Android/g [Ro](DP),
			VP = /Windows Phone/g.test(DP),
			KP = (WP || XP || VP) && Fu in t,
			ZP = DP.match(/AppleWebKit\/([0-9\.]*)/);
		if (ZP && ZP.length > 1) var JP = parseFloat(ZP[1]);
		if (XP && (parseFloat(DP.match(/Android\s([0-9\.]*)/)[1]), JP && 534.3 >= JP)) var QP = !0
	}
	t[Gu] || (t[Gu] = t[qu] || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t[Yu] || function(i) {
		return t[Hu](function() {
			i()
		}, 1e3 / 60)
	}), t[Uu] || (t[Uu] = t[Wu] || t.mozCancelAnimationFrame || t[Xu] || t[Vu] || function(i) {
		return t.clearTimeout(i)
	});
	var tD = {
		SELECTION_TOLERANCE: 2,
		DOUBLE_BUFFER: n,
		LABEL_COLOR: Ku
	};
	Z(tD, {
		FONT_STYLE: {
			get: function() {
				return this._fontStyle || (this._fontStyle = Zu)
			},
			set: function(t) {
				this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
			}
		},
		FONT_SIZE: {
			get: function() {
				return this._fontSize || (this._fontSize = 12)
			},
			set: function(t) {
				this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
			}
		},
		FONT_FAMILY: {
			get: function() {
				return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
			},
			set: function(t) {
				this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
			}
		},
		FONT: {
			get: function() {
				return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[Ju] + ih + this[Qu] + td + this[id]), this._font
			}
		}
	});
	var iD = function() {};
	iD.prototype = {
		_nj: 0,
		_ng: 0,
		_ln: !0,
		_kq: 1,
		_gj: function(t, i, n) {
			var e = this._d8(i),
				s = this._nob(n),
				r = t * e,
				h = t * s;
			return this._95(t, i - r, n - h)
		},
		_d8: function(t) {
			return (t - this._nj) / this._kq
		},
		_nob: function(t) {
			return (t - this._ng) / this._kq
		},
		_e8: function(t, i) {
			return this._95(this._kq, this._nj + t, this._ng + i)
		},
		_95: function(t, i, n) {
			return this._kq == t && this._nj == i && this._ng == n ? !1 : (this._ln && (1 != this[to] || 2 != this[to] ? (i = Math[Ko](i * this[to]) / this[to], n = Math[Ko](n * this.ratio) / this.ratio) : (i = Math[Ko](i), n = Math.round(n))), this._nj = i, this._ng = n, this._kq = t, void(this._3l && this._3l()))
		},
		_h0: function() {
			return {
				a: this._kq,
				b: 0,
				c: 0,
				d: this._kq,
				e: this._nj,
				f: this._ng
			}
		},
		toString: function() {
			return nd + B(this._kq) + ed + B(this._kq) + Oh + B(this._nj) + Oh + B(this._ng) + jh
		},
		_gz: function(t) {
			vi(t, Xc, this.toString())
		}
	};
	var nD = function(t) {
		this._j4 = [], this._m3 = {}, t && this[Hh](t)
	};
	nD[dh] = {
		_j4: null,
		_m3: null,
		get: function(t) {
			return this.getByIndex(t)
		},
		getById: function(t) {
			return this._m3[t]
		},
		getByIndex: function(t) {
			return this._j4[t]
		},
		forEach: function(t, i, n) {
			return l(this._j4, t, i, n)
		},
		forEachReverse: function(t, i, n) {
			return b(this._j4, t, i, n)
		},
		size: function() {
			return this._j4[Gr]
		},
		contains: function(t) {
			return this.containsById(t.id)
		},
		containsById: function(t) {
			return this._m3.hasOwnProperty(t)
		},
		setIndex: function(t, i) {
			var n = this._j4[Ya](t);
			if (0 > n) throw new Error($a + t.id + sd);
			return n == i ? !1 : (this._j4[Wr](n, 1), this._j4[Wr](i, 0, t), !0)
		},
		setIndexAfter: function(t, i) {
			var n = this._j4.indexOf(t);
			if (0 > n) throw new Error($a + t.id + sd);
			return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._j4.splice(n, 1), this._j4.splice(i, 0, t), i)
		},
		setIndexBefore: function(t, i) {
			var n = this._j4[Ya](t);
			if (0 > n) throw new Error($a + t.id + sd);
			return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j4[Wr](n, 1), this._j4[Wr](i, 0, t), i)
		},
		indexOf: function(t) {
			return this._j4[Ya](t)
		},
		getIndexById: function(t) {
			var i = this[rd](t);
			return i ? this._j4.indexOf(i) : -1
		},
		add: function(t, i) {
			return k(t) ? this._fw(t, i) : this._kv(t, i)
		},
		addFirst: function(t) {
			return this[Hh](t, 0)
		},
		_fw: function(t, i) {
			if (0 == t.length) return !1;
			var e = !1,
				s = i >= 0;
			t = t._j4 || t;
			for (var r = 0, h = t.length; h > r; r++) {
				var a = t[r];
				null !== a && a !== n && this._kv(a, i, !0) && (e = !0, s && i++)
			}
			return e
		},
		_kv: function(t, i) {
			var e = t.id;
			return e === n || this[e_](e) ? !1 : (g(this._j4, t, i), this._m3[e] = t, t)
		},
		remove: function(t) {
			return k(t) ? this._nnh(t) : t.id ? this._fv(t.id, t) : this.removeById(t)
		},
		_nnh: function(t) {
			if (0 == t.length) return !1;
			var i = !1;
			t = t._j4 || t;
			for (var e = 0, s = t[Gr]; s > e; e++) {
				var r = t[e];
				if (null !== r && r !== n) {
					r.id === n && (r = this._m3[r]);
					var h = r.id;
					this._fv(h, r, !0) && (i = !0)
				}
			}
			return i
		},
		_fv: function(t, i) {
			return t !== n && this[e_](t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._m3[t], m(this._j4, i), !0) : !1
		},
		removeById: function(t) {
			var i = this._m3[t];
			return i ? this._fv(t, i) : !1
		},
		set: function(t) {
			if (!t || 0 == t) return void this.clear();
			if (this[mf]() || !k(t)) return this[wa](), this.add(t);
			var i = [],
				n = {},
				e = 0;
			if (l(t, function(t) {
					this._m3[t.id] ? (n[t.id] = t, e++) : i.push(t)
				}, this), e != this[Gr]) {
				var s = [];
				this[Df](function(t) {
					n[t.id] || s.push(t)
				}, this), s.length && this._nnh(s)
			}
			return i.length && this._fw(i), !0
		},
		clear: function() {
			return this[mf]() ? !1 : (this._j4[Gr] = 0, this._m3 = {}, !0)
		},
		toDatas: function() {
			return this._j4.slice(0)
		},
		isEmpty: function() {
			return 0 == this._j4[Gr]
		},
		valueOf: function() {
			return this._j4.length
		},
		clone: function(t) {
			var i = new nD;
			return i.add(t ? y(this._j4) : this.toDatas()), i
		}
	}, Z(nD[dh], {
		datas: {
			get: function() {
				return this._j4
			}
		},
		random: {
			get: function() {
				return this._j4 && this._j4.length ? this._j4[M(this._j4.length)] : null
			}
		},
		length: {
			get: function() {
				return this._j4 ? this._j4[Gr] : 0
			}
		}
	});
	var eD = (2 * Math.PI, .5 * Math.PI),
		sD = function(t, i) {
			i = i[Kh]();
			for (var n = NP ? t[hd] : t[ad]; n && (1 != n[od] || n.tagName && n[fd][Kh]() != i);) n = NP ? n[_d] : n[cd];
			return n && 1 == n[od] && n.tagName && n[fd][Kh]() == i ? n : null
		},
		rD = function(t, i, n) {
			t instanceof rD && (i = t.y, t = t.x, n = t[So]), this.set(t, i, n)
		},
		hD = function(t, i, n, e) {
			var s = t - n,
				r = i - e;
			return Math.sqrt(s * s + r * r)
		};
	rD.prototype = {
		x: 0,
		y: 0,
		rotate: n,
		set: function(t, i, n) {
			this.x = t || 0, this.y = i || 0, this[So] = n || 0
		},
		negate: function() {
			this.x = -this.x, this.y = -this.y
		},
		offset: function(t, i) {
			this.x += t, this.y += i
		},
		equals: function(t) {
			return this.x == t.x && this.y == t.y
		},
		distanceTo: function(t) {
			return hD(this.x, this.y, t.x, t.y)
		},
		toString: function() {
			return ud + this.x + dd + this.y + jh
		},
		clone: function() {
			return new rD(this.x, this.y)
		}
	}, Object.defineProperty(rD[dh], ld, {
		get: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		}
	});
	var aD = function(t, i, e, s) {
		t !== n && this._n9(t, i, e, s)
	};
	aD[dh] = {
		_nc: null,
		_nk: null,
		_nh: null,
		_ne: null,
		_nn: null,
		_nm: null,
		_no: 1,
		_n9: function(t, i, n, e) {
			this._nc = t, this._nk = i, this._nh = n, this._ne = e, t == n ? (this._nn = -1, this._no = 0, this._nm = t) : (this._nn = (i - e) / (t - n), this._nm = i - this._nn * t, this._no = 1), this._lt = Math.atan2(this._ne - this._nk, this._nh - this._nc), this._noos = Math.cos(this._lt), this._sin = Math[$h](this._lt)
		},
		_dg: function(t) {
			return 0 == this._no ? Number.NaN : this._nn * t + this._nm
		},
		_dc: function(t) {
			return 0 == this._nn ? Number[vd] : (t - this._nm) / this._nn
		},
		_$j: function(t) {
			var i, n, e, s, r, h = t[0],
				a = t[2],
				o = t[4],
				f = t[1],
				_ = t[3],
				c = t[5],
				u = this._nn,
				d = this._nm,
				l = this._no;
			if (0 == l ? (e = Math[lo]((-u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -u * a + u * h, r = u * o - 2 * u * a + u * h) : (e = Math[lo]((-f + u * h + d) * c + _ * _ + (-2 * u * a - 2 * d) * _ + (u * o + d) * f + (-u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -_ + f + u * a - u * h, r = c - 2 * _ + f - u * o + 2 * u * a - u * h), 0 != r) {
				i = (e + s) / r, n = (-e + s) / r;
				var v, b;
				return i >= 0 && 1 >= i && (v = Ui(i, t)), n >= 0 && 1 >= n && (b = Ui(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
			}
		},
		_40: function(t, i, n) {
			if (this._nn == t._nn || 0 == this._no && 0 == t._no) return null;
			var e, s;
			if (e = 0 == this._no ? this._nm : 0 == t._no ? t._nm : (t._nm - this._nm) / (this._nn - t._nn), s = 0 == this._nn ? this._nm : 0 == t._nn ? t._nm : this._no ? this._nn * e + this._nm : t._nn * e + t._nm, !i) return {
				x: e,
				y: s
			};
			var r, h, a;
			if (n) r = -i / 2, h = -r;
			else {
				r = -hD(this._nc, this._nk, e, s), h = hD(this._nh, this._ne, e, s);
				var o = -r + h;
				if (o > i) {
					var f = i / o;
					r *= f, h *= f
				} else a = (i - o) / 2
			}
			var _ = this._6x(e, s, r),
				c = this._6x(e, s, h);
			return a && (_._rest = a, c._rest = a), [_, c]
		},
		_6x: function(t, i, n) {
			return 0 == this._no ? {
				x: t,
				y: i + n
			} : {
				x: t + n * this._noos,
				y: i + n * this._sin
			}
		}
	};
	var oD = function(t, i) {
		this[Za] = t, this[Ja] = i
	};
	oD[dh] = {
		width: 0,
		height: 0,
		isEmpty: function() {
			return this[Za] <= 0 || this.height <= 0
		},
		clone: function() {
			return new oD(this[Za], this.height)
		},
		toString: function() {
			return bd + this.width + dd + this[Ja] + jh
		}
	};
	var fD = function(t, i, e, s) {
		e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this.width = e, this.height = s
	};
	fD.prototype = {
		x: 0,
		y: 0,
		width: -1,
		height: -1,
		setByRect: function(t) {
			this.x = t.x || 0, this.y = t.y || 0, this[Za] = t[Za] || 0, this[Ja] = t[Ja] || 0
		},
		set: function(t, i, n, e) {
			this.x = t || 0, this.y = i || 0, this[Za] = n || 0, this[Ja] = e || 0
		},
		offset: function(t, i) {
			this.x += t, this.y += i
		},
		contains: function(t, i) {
			return t instanceof fD ? ai(this.x, this.y, this.width, this[Ja], t.x, t.y, t.width, t[Ja]) : t >= this.x && t <= this.x + this[Za] && i >= this.y && i <= this.y + this[Ja]
		},
		intersectsPoint: function(t, i, n) {
			return this.width <= 0 && this[Ja] <= 0 ? !1 : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[Za] && i >= this.y && i <= this.y + this.height
		},
		intersectsRect: function(t, i, n, e) {
			return ri(this.x, this.y, this.width, this[Ja], t, i, n, e)
		},
		intersects: function(t, i) {
			return t instanceof fD ? this.intersectsRect(t.x, t.y, t[Za], t.height) : this.intersectsPoint(t, i)
		},
		intersection: function(t, i, n, e) {
			var s = this.x,
				r = this.y,
				h = s;
			h += this[Za];
			var a = r;
			a += this[Ja];
			var o = t;
			o += n;
			var f = i;
			return f += e, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > f && (a = f), h -= s, a -= r, 0 > h || 0 > a ? null : new fD(s, r, h, a)
		},
		addPoint: function(t) {
			this.add(t.x, t.y)
		},
		add: function(t, i) {
			if (t instanceof fD) return this.addRect(t.x, t.y, t.width, t[Ja]);
			if (t instanceof rD && (i = t.y, t = t.x), this.width < 0 || this.height < 0) return this.x = t, this.y = i, void(this.width = this.height = 0);
			var n = this.x,
				e = this.y,
				s = this[Za],
				r = this.height;
			s += n, r += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > r && (r = i), s -= n, r -= e, s > Number.MAX_VALUE && (s = Number[yd]), r > Number.MAX_VALUE && (r = Number.MAX_VALUE), this.set(n, e, s, r)
		},
		addRect: function(t, i, n, e) {
			var s = this.width,
				r = this[Ja];
			(0 > s || 0 > r) && this[V_](t, i, n, e);
			var h = n,
				a = e;
			if (!(0 > h || 0 > a)) {
				var o = this.x,
					f = this.y;
				s += o, r += f;
				var _ = t,
					c = i;
				h += _, a += c, o > _ && (o = _), f > c && (f = c), h > s && (s = h), a > r && (r = a), s -= o, r -= f, s > Number[yd] && (s = Number.MAX_VALUE), r > Number[yd] && (r = Number.MAX_VALUE), this[V_](o, f, s, r)
			}
		},
		grow: function(t, i, n, e) {
			return S(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[Gr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[ba] || 0, n = t[Gh] || 0, e = t[Fh] || 0, t = t.top || 0), this.x -= i, this.y -= t, this.width += i + e, this[Ja] += t + n, this
		},
		isEmpty: function() {
			return this[Za] <= 0 && this[Ja] <= 0
		},
		toString: function() {
			return this.x + gd + this.y + gd + this.width + gd + this[Ja]
		},
		union: function(t) {
			var i = this.width,
				n = this[Ja];
			if (0 > i || 0 > n) return new fD(t.x, t.y, t[Za], t[Ja]);
			var e = t[Za],
				s = t.height;
			if (0 > e || 0 > s) return new fD(this.x, this.y, this[Za], this.height);
			var r = this.x,
				h = this.y;
			i += r, n += h;
			var a = t.x,
				o = t.y;
			return e += a, s += o, r > a && (r = a), h > o && (h = o), e > i && (i = e), s > n && (n = s), i -= r, n -= h, i > Number[yd] && (i = Number[yd]), n > Number[yd] && (n = Number[yd]), new fD(r, h, i, n)
		},
		clear: function() {
			this.set(0, 0, -1, -1)
		},
		equals: function(t) {
			return this.x == t.x && this.y == t.y && this.width == t[Za] && this.height == t[Ja]
		},
		clone: function(t, i) {
			return new fD(this.x + (t || 0), this.y + (i || 0), this[Za], this[Ja])
		},
		getIntersectionPoint: function(t, i, n, e) {
			return si(this, t, i, n, e)
		}
	}, D(fD, oD), Z(fD[dh], {
		left: {
			get: function() {
				return this.x
			}
		},
		top: {
			get: function() {
				return this.y
			}
		},
		bottom: {
			get: function() {
				return this.y + this.height
			}
		},
		right: {
			get: function() {
				return this.x + this[Za]
			}
		},
		cx: {
			get: function() {
				return this.x + this[Za] / 2
			}
		},
		cy: {
			get: function() {
				return this.y + this.height / 2
			}
		},
		center: {
			get: function() {
				return new rD(this.cx, this.cy)
			}
		}
	});
	var _D = function(t, i, n, e) {
		1 == arguments.length ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this[V_](t, i, n, e)
	};
	_D[dh] = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		set: function(t, i, n, e) {
			this[ya] = t || 0, this.left = i || 0, this[Gh] = n || 0, this.right = e || 0
		},
		clone: function() {
			return new _D(this[ya], this[ba], this[Gh], this.right)
		},
		equals: function(t) {
			return t && this[ya] == t.top && this.bottom == t.bottom && this[ba] == t.left && this[Fh] == t[Fh]
		}
	};
	var cD = function(t, i) {
		this[md] = t, this[Yh] = i
	};
	cD[dh] = {
		verticalPosition: !1,
		horizontalPosition: !1,
		toString: function() {
			return (this.horizontalPosition || "") + (this.verticalPosition || "")
		}
	}, K(cD.prototype, Ed, {
		get: function() {
			return (this.horizontalPosition || "") + (this.verticalPosition || "")
		}
	});
	var uD = pd,
		dD = xd,
		lD = Td,
		vD = Jf,
		bD = wd,
		yD = Od;
	cD.LEFT_TOP = new cD(uD, vD), cD.LEFT_MIDDLE = new cD(uD, bD), cD[Sd] = new cD(uD, yD), cD.CENTER_TOP = new cD(dD, vD), cD.CENTER_MIDDLE = new cD(dD, bD), cD[jd] = new cD(dD, yD), cD.RIGHT_TOP = new cD(lD, vD), cD[Id] = new cD(lD, bD), cD.RIGHT_BOTTOM = new cD(lD, yD);
	var gD = [cD[kd], cD.LEFT_MIDDLE, cD[Sd], cD.CENTER_TOP, cD[Ad], cD[jd], cD[Ld], cD[Id], cD[Rd]];
	K(cD, _h, {
		get: function() {
			return gD[M(gD.length)]
		}
	});
	var mD = function(t, i, n, e, s) {
		this[V_](t, i, n, e), this[Md] = s
	};
	mD[dh] = {
		radius: 0,
		classify: function(t, i, n, e) {
			return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
		},
		intersectsRect: function(t, i, n, e) {
			if (N(this, mD, Cd, arguments) === !1) return !1;
			var s = this.x,
				r = this.y,
				h = s + this[Za],
				a = r + this[Ja],
				o = 2 * radius,
				f = 2 * radius,
				_ = Math[Io](this.width, Math.abs(o)) / 2,
				c = Math[Io](this.height, Math[qh](f)) / 2,
				u = this[Pd](t, s, h, _),
				d = this.classify(t + n, s, h, _),
				l = this[Pd](i, r, a, c),
				v = this[Pd](i + e, r, a, c);
			return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + _) : t -= h - _, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= _, i /= c, 1 >= t * t + i * i)
		},
		intersectsPoint: function(t, i) {
			if (N(this, mD, yo, arguments) === !1) return !1;
			var n = this.x,
				e = this.y,
				s = n + this.width,
				r = e + this[Ja];
			if (n > t || e > i || t >= s || i >= r) return !1;
			var h = 2 * radius,
				a = 2 * radius,
				o = Math.min(this[Za], Math[qh](h)) / 2,
				f = Math[Io](this.height, Math[qh](a)) / 2;
			return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
		},
		clone: function() {
			return new mD(this.x, this.y, this[Za], this[Ja], this[Md])
		}
	}, D(mD, fD);
	var ED = function(t, i, n, e) {
		this[zo] = t, this.type = i, this[Dd] = n, this[xh] = e
	};
	ED.prototype = {
		source: null,
		type: null,
		kind: null,
		value: null,
		toString: function() {
			return zd + this.source + Nd + this.type + Bd + this[Dd]
		}
	};
	var pD = function(t, i, n, e, s) {
		this[zo] = t, this[Dd] = i, this.oldValue = e, this[xh] = n, this.propertyType = s
	};
	pD[dh] = {
		type: $d,
		propertyType: null,
		toString: function() {
			return zd + this.source + Nd + this.type + Fd + this.kind + Gd + this.oldValue + qd + this[xh]
		}
	}, D(pD, ED), K(pD[dh], Yd, {
		get: function() {
			return this[Dd]
		},
		set: function(t) {
			this[Dd] = t
		}
	});
	var xD = function(t, i, n) {
		this[zo] = t, this[Hd] = t[s_], this[xh] = i, this.newIndex = n, this[Hd] && (this[Ud] = this[Hd][Wd](t))
	};
	xD[dh] = {
		kind: s_
	}, D(xD, pD);
	var TD = function(t, i) {
		this.source = t, this.value = i
	};
	TD[dh].kind = Xd, D(TD, pD);
	var wD = function(t, i) {
		this[zo] = t, this.value = i
	};
	wD[dh][Dd] = Vd, D(wD, pD);
	var OD = function(t, i, n, e) {
		this[zo] = i, this[Hd] = n, this.value = e, this.parent = t, this[Kd] = i, this.oldIndex = n, this.newIndex = e
	};
	OD.prototype[Dd] = Zd, D(OD, pD);
	var SD = function() {};
	SD.prototype = {
		listener: null,
		beforeEvent: function(t) {
			return null != this.listener && this.listener[Jd] ? this.listener.beforeEvent(t) : !0
		},
		onEvent: function(t) {
			null != this[Qd] && this.listener.onEvent && this.listener.onEvent(t)
		}
	};
	var jD = function() {
			z(this, jD, arguments), this[tl] = {}, this.listeners = []
		},
		ID = function(t, i) {
			this[Qd] = t, this[vh] = i, t instanceof Function ? this.onEvent = t : (this[Eh] = t[Eh], this[Jd] = t[Jd]), this.equals = function(t) {
				return t && this[Qd] == t[Qd] && this[vh] == t.scope
			}
		};
	ID[dh] = {
		equals: function(t) {
			return t && this[Qd] == t[Qd] && this[vh] == t.scope
		},
		destroy: function() {
			delete this[vh], delete this[Qd]
		}
	}, jD.prototype = {
		listeners: null,
		_no3: function() {
			return this[il] && this[il][Gr] > 0
		},
		_7p: function(t, i) {
			return t instanceof jD ? t : new ID(t, i)
		},
		_nne: function(t, i) {
			if (t instanceof jD) return this[il][Ya](t);
			for (var n = this[il], e = 0, s = n[Gr]; s > e; e++) {
				var r = n[e];
				if (r[Qd] == t && r.scope == i) return e
			}
			return -1
		},
		contains: function(t, i) {
			return this._nne(t, i) >= 0
		},
		addListener: function(t, i) {
			return this.contains(t, i) ? !1 : void this[il][Vr](this._7p(t, i))
		},
		removeListener: function(t, i, n) {
			var e = this._nne(t, i);
			if (e >= 0) {
				var s = this.listeners[Wr](e, 1)[0];
				n || $(s)
			}
		},
		on: function(t, i) {
			this[Ru](t, i)
		},
		un: function(t, i, n) {
			this[nl](t, i, n)
		},
		onEvent: function(t) {
			return this.listeners ? void l(this.listeners, function(i) {
				i.onEvent && (i.scope ? i[Eh][qr](i.scope, t) : i[Eh](t))
			}, this) : !1
		},
		beforeEvent: function(t) {
			return this[il] ? l(this.listeners, function(i) {
				return i[Jd] ? i[vh] ? i[Jd].call(i.scope, t) : i[Jd](t) : !0
			}, this) : !0
		},
		_eq: function(t) {
			return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
		},
		clear: function() {
			this.listeners = []
		},
		destroy: function() {
			this.clear()
		}
	}, D(jD, SD);
	var kD = {
			onEvent: function() {},
			beforeEvent: function() {}
		},
		AD = function(t, i, n, e, s) {
			this.source = t, this[wo] = el, this[Dd] = i, this.data = n, this[sl] = e, this.oldIndex = s
		};
	AD.prototype = {
		index: -1,
		oldIndex: -1,
		toString: function() {
			return zd + this.source + Nd + this[wo] + Bd + this.kind + rl + this[Eo] + hl + this[sl] + al + this[Ud]
		}
	}, D(AD, ED), AD.KIND_ADD = Hh, AD.KIND_REMOVE = Ur, AD[ol] = wa, AD.KIND_INDEX_CHANGE = fl;
	var LD = function() {
		this.id = ++PP, this._noc = {}
	};
	LD[dh] = {
		_noc: null,
		id: null,
		get: function(t) {
			return this._noc[t]
		},
		set: function(t, i) {
			var n = this[mh](t);
			if (n === i) return !1;
			var e = new pD(this, t, i, n);
			return e[_l] = rz[X_], this._nmr(t, i, e, this._noc)
		},
		_nmr: function(t, i, e, s) {
			return this[Jd](e) === !1 ? !1 : (s || (s = this._noc), i === n ? delete s[t] : s[t] = i, this[Eh](e), !0)
		},
		remove: function(t) {
			this[V_](t, null)
		},
		valueOf: function() {
			return this.id
		},
		toString: function() {
			return this.id
		},
		_e1: function(t, i) {
			if (i === n && (i = -1), this == t || t == this._jo) return !1;
			if (t && this == t._jo && !t._e1(null)) return !1;
			var e = new xD(this, t, i);
			if (!this[Jd](e)) return !1;
			var s, r, h = this._jo;
			return t && (s = new TD(t, this), !t.beforeEvent(s)) ? !1 : null == h || (r = new wD(h, this), h[Jd](r)) ? (this._jo = t, null != t && fi(t, this, i), null != h && _i(h, this), this.onEvent(e), null != t && t[Eh](s), null != h && h[Eh](r), this[cl](h, t), !0) : !1
		},
		addChild: function(t, i) {
			var n = t._e1(this, i);
			return n && this[Uh](t, i), n
		},
		onChildAdd: function() {},
		removeChild: function(t) {
			if (!this._fy || !this._fy[Pc](t)) return !1;
			var i = t._e1(null);
			return this[Wh](t), i
		},
		onChildRemove: function() {},
		toChildren: function() {
			return this._fy ? this._fy[ul]() : null
		},
		clearChildren: function() {
			if (this._fy && this._fy[Gr]) {
				var t = this[dl]();
				l(t, function(t) {
					t._e1(null)
				}, this), this[ll](t)
			}
		},
		forEachChild: function(t, i) {
			return this[$r]() ? this._fy.forEach(t, i) : !1
		},
		onChildrenClear: function() {},
		getChildIndex: function(t) {
			return this._fy && this._fy[Gr] ? this._fy[Ya](t) : -1
		},
		setChildIndex: function(t, i) {
			if (!this._fy || !this._fy.length) return !1;
			var n = this._fy[Ya](t);
			if (0 > n || n == i) return !1;
			var e = new OD(this, t, n, i);
			return this[Jd](e) === !1 ? !1 : (this._fy[Ur](t) && this._fy[Hh](t, i), this[Eh](e), !0)
		},
		hasChildren: function() {
			return this._fy && this._fy[Gr] > 0
		},
		getChildAt: function(t) {
			return null == this._fy ? null : this._fy._j4[t]
		},
		isDescendantOf: function(t) {
			if (!t[$r]()) return !1;
			for (var i = this.parent; null != i;) {
				if (t == i) return !0;
				i = i[s_]
			}
			return !1
		},
		onParentChanged: function() {},
		firePropertyChangeEvent: function(t, i, n, e) {
			this[Eh](new pD(this, t, i, n, e))
		}
	}, D(LD, SD), Z(LD[dh], {
		childrenCount: {
			get: function() {
				return this._fy ? this._fy[Gr] : 0
			}
		},
		children: {
			get: function() {
				return this._fy || (this._fy = new nD), this._fy
			}
		},
		parent: {
			get: function() {
				return this._jo
			},
			set: function(t) {
				this._e1(t, -1)
			}
		},
		properties: {
			get: function() {
				return this._noc
			},
			set: function(t) {
				this._noc != t && (this._noc = t)
			}
		}
	});
	var RD = function() {
		this._j4 = [], this._m3 = {}, this._1z = new jD
	};
	RD[dh] = {
		beforeEvent: function(t) {
			return null != this._1z && this._1z.beforeEvent ? this._1z[Jd](t) : !0
		},
		onEvent: function(t) {
			return this._1z instanceof Function ? void this._1z(t) : void(null != this._1z && this._1z[Eh] && this._1z[Eh](t))
		},
		_1z: null,
		setIndex: function(t, i) {
			if (!this.contains(t)) throw new Error($a + t.getId() + sd);
			var n = this.indexOf(t);
			if (n == i) return !1;
			var e = new AD(this, AD[vl], t, i, n);
			return this[Jd](e) === !1 ? !1 : (this._j4.remove(t) >= 0 && this._j4[Hh](i, t), this.onEvent(e), !0)
		},
		_fw: function(t, i) {
			if (0 == t[Gr]) return !1;
			var e = !1,
				s = i >= 0,
				r = new AD(this, AD[bl], t, i);
			if (this[Jd](r) === !1) return !1;
			var h = [];
			t = t._j4 || t;
			for (var a = 0, o = t.length; o > a; a++) {
				var f = t[a];
				null !== f && f !== n && this._kv(f, i, !0) && (h.push(f), e = !0, s && i++)
			}
			return r.data = h, this[Eh](r), e
		},
		_kv: function(t, i, n) {
			if (this[u_](t) === !1) return !1;
			if (n) return N(this, RD, yl, arguments);
			var e = new AD(this, AD.KIND_ADD, t, i);
			return this.beforeEvent(e) === !1 ? !1 : N(this, RD, yl, arguments) ? (this._ku(t, e), t) : !1
		},
		_ku: function(t, i) {
			this.onEvent(i)
		},
		_nnh: function(t) {
			if (0 == t[Gr]) return !1;
			var i = new AD(this, AD.KIND_REMOVE, t);
			if (this.beforeEvent(i) === !1) return !1;
			var e = [],
				s = !1;
			t = t._j4 || t;
			for (var r = 0, h = t.length; h > r; r++) {
				var a = t[r];
				if (null !== a && a !== n) {
					var o = a.id || a;
					a.id === n && (a = null), this._fv(o, a, !0) && (e[Vr](a), s = !0)
				}
			}
			return i.data = e, this[Eh](i), s
		},
		_fv: function(t, i, n) {
			if (n) return N(this, RD, gl, arguments);
			var e = new AD(this, AD.KIND_REMOVE, i);
			return this[Jd](e) === !1 ? !1 : N(this, RD, gl, arguments) ? (this[Eh](e), !0) : !1
		},
		clear: function() {
			if (this.isEmpty()) return !1;
			var t = new AD(this, AD[ol], this[ul]());
			return this[Jd](t) === !1 ? !1 : N(this, RD, wa) ? (this[Eh](t), !0) : !1
		},
		accept: function(t) {
			return this[ml] && this.filter(t) === !1 ? !1 : !0
		}
	}, D(RD, nD), K(RD[dh], El, {
		get: function() {
			return this._1z
		}
	});
	var MD = function() {
		z(this, MD, arguments), this.selectionChangeDispatcher = new jD, this._selectionModel = new CD(this), this._selectionModel._1z = this.selectionChangeDispatcher, this[pl] = new jD, this.dataChangeDispatcher.addListener({
			beforeEvent: this.beforeDataPropertyChange,
			onEvent: this[xl]
		}, this), this[Tl] = new jD, this.childIndexChangeDispatcher = new jD, this[wl] = new nD;
		var t = this;
		this.$roots[d_] = function(i, n) {
			if (!t.$roots.contains(i)) throw new Error($a + i.id + sd);
			var e = t[wl]._j4.indexOf(i);
			if (e == n) return !1;
			t.$roots._j4[Wr](e, 1), t[wl]._j4[Wr](n, 0, i), t._nooIndexFlag = !0;
			var s = new OD(t, i, e, n);
			return t._2j(s), !0
		}
	};
	MD[dh] = {
		selectionModel: null,
		selectionChangeDispatcher: null,
		dataChangeDispatcher: null,
		parentChangeDispatcher: null,
		roots: null,
		_ku: function(t, i) {
			t.listener = this.dataChangeDispatcher, t[s_] || this.$roots[Hh](t), this.onEvent(i)
		},
		_fv: function(t, i) {
			if (N(this, MD, gl, arguments)) {
				if (i instanceof UN) i.disconnect();
				else if (i instanceof WN) {
					var n = i[Ol]();
					this.remove(n)
				}
				var e = i.parent;
				return null == e ? this[wl][Ur](i) : (e[Sl](i), e.__6n = !0), i[$r]() && this.remove(i[dl]()), i[Qd] = null, !0
			}
			return !1
		},
		_64: function(t) {
			var i = t.source;
			this.contains(i) && (null == i.parent ? this[wl].add(i) : null == t[Hd] && this.$roots[Ur](i), this[Tl][Eh](t))
		},
		_2j: function(t) {
			this[jl].onEvent(t)
		},
		beforeDataPropertyChange: function(t) {
			return t instanceof xD ? this.parentChangeDispatcher.beforeEvent(t) : !0
		},
		onDataPropertyChanged: function(t) {
			return t instanceof xD ? (this._nooIndexFlag = !0, t.source._nooIndexFlag = !0, void this._64(t)) : void(t instanceof OD && (this._nooIndexFlag = !0, t[zo]._nooIndexFlag = !0, this._2j(t)))
		},
		toRoots: function() {
			return this.$roots.toDatas()
		},
		_ge: function(t) {
			var i, n = t._jo;
			i = n ? n._fy : this.$roots;
			var e = i[Ya](t);
			if (0 > e) throw new Error(Il + t + "' not exist in the box");
			return 0 == e ? n : i.getByIndex(e - 1)
		},
		_gh: function(t) {
			var i, n = t._jo;
			i = n ? n._fy : this[wl];
			var e = i[Ya](t);
			if (0 > e) throw new Error(Il + t + "' not exist in the box");
			return e == i[Gr] - 1 ? n ? this._gh(n) : null : i[kl](e + 1)
		},
		forEachByDepthFirst: function(t, i, n) {
			return this[wl][Gr] ? r(this.$roots, t, i, n) : !1
		},
		forEachByDepthFirstReverse: function(t, i, n) {
			return this.$roots.length ? o(this[wl], t, i, n) : !1
		},
		forEachByBreadthFirst: function(t, i) {
			return this.$roots[Gr] ? c(this.$roots, t, i) : !1
		},
		forEachByBreadthFirstReverse: function(t, i) {
			return this[wl][Gr] ? u(this.$roots, t, i) : !1
		},
		clear: function() {
			return N(this, MD, wa) ? (this[wl][wa](), this[ou][wa](), !0) : !1
		}
	}, D(MD, RD), Z(MD[dh], {
		selectionModel: {
			get: function() {
				return this._selectionModel
			}
		},
		roots: {
			get: function() {
				return this[wl]
			}
		}
	});
	var CD = function(t) {
		z(this, CD), this[Al] = t, this._nmoxChangeListener = {
			onEvent: function(t) {
				AD.KIND_REMOVE == t.kind ? null != t[Eo] ? this.remove(t.data) : null != t.datas && this[Ur](t.datas) : AD[ol] == t.kind && this[wa]()
			}
		}, this[Al][El][Ru](this._nmoxChangeListener, this)
	};
	CD[dh] = {
		box: null,
		isSelected: function(t) {
			return this[e_](t.id || t)
		},
		select: function(t) {
			return this.add(t)
		},
		unselect: function(t) {
			return this.remove(t)
		},
		reverseSelect: function(t) {
			return this.contains(t) ? this[Ur](t) : this[Hh](t)
		},
		accept: function(t) {
			return this[Al][Pc](t)
		}
	}, D(CD, RD);
	var PD = null,
		DD = null,
		zD = null,
		ND = function() {
			if (!i.createElement) return function(t) {
				return t
			};
			var t = i.createElement(Gc),
				e = t.style,
				s = {};
			return function(t) {
				if (s[t]) return s[t];
				var i = ci(t);
				return e[i] !== n || zD && e[i = ci(zD + i)] !== n ? (s[t] = i, i) : t
			}
		}(),
		BD = {};
	! function() {
		if (!i[Ll]) return !1;
		for (var e = i.head, s = "Webkit Moz O ms Khtml".split(ih), r = 0; r < s.length; r++)
			if (e.style[s[r] + Rl] !== n) {
				zD = Zh + s[r].toLowerCase() + Zh;
				break
			}
		var h = i[ao](ta);
		t.createPopup || h[Kc](i[Ml]("")), h.classList && (PD = !0), h[wo] = Cl, h.id = Pl, e[Kc](h), DD = h[Dl];
		var a, o;
		for (var f in BD) {
			var _ = BD[f];
			a = f, o = "";
			for (var c in _) o += ND(c) + ia + _[c] + zl;
			bi(a, o)
		}
	}();
	var $D = function(t, i, n, e, s) {
			if (s) {
				var r = function(t) {
					r[bh].call(r.scope, t)
				};
				return r[vh] = s, r[bh] = n, t[Nl](i, r, e), r
			}
			return t.addEventListener(i, n, e), n
		},
		FD = function(t, i, n) {
			t[Bl](i, n)
		},
		A = function(t) {
			t[$l] ? t.preventDefault() : t[hh] = !1
		},
		L = function(t) {
			t[ah] ? t.stopPropagation() : t[oh] || (t.cancelBubble = !0)
		},
		R = function(t) {
			A(t), L(t)
		};
	tD.DOUBLE_CLICK_INTERVAL_TIME = KP ? 500 : 300, tD[Fl] = KP ? 1500 : 1e3;
	var GD, qD = Aa in t ? "mousewheel" : Gl;
	GD = qD + ql, KP && (GD += Yl), GD = GD.split(Oh), ji[dh] = {
		_kz: null,
		_ie: function() {
			var t = this._m2;
			t && Si[qr](this, t)
		},
		destroy: function() {
			this._ie()
		},
		_nov: null,
		_27: function() {
			this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
		},
		_ei: function() {
			this.__noancelClick = !0, this._27(), this._ia(this._nov, Hl), this._d2.clear()
		},
		_d2: null,
		_6z: function(t) {
			var i = this._9j;
			this._9j = pi(t), this._d2.add(i, this._9j, t)
		},
		_jb: function(t) {
			this._6z(t), this._ia(t, Ul), t.touches && t.touches.length > 1 && this._ia(t, Wl)
		},
		_ig: function(t) {
			KP || this._6z(t);
			var i = this._d2[Xl]();
			i && (t.vx = i.x, t.vy = i.y), this._ia(t, Vl), this._d2.clear()
		},
		_ek: function(t) {
			this._nov && (this._27(), this._ia(t, Kl), this._nov = null, this._9j = null)
		},
		_ia: function(t, i) {
			this._listener && this._listener[i] instanceof Function && this._listener[i][qr](this._listener, t, this._kz || this._m2)
		}
	};
	var YD = function(t) {
		this._ky = t, z(this, YD, [t[Zl]])
	};
	YD._nourrentInteractionSupport = null, YD[dh] = {
		_50: function(t) {
			this._4x(function(i) {
				i.onElementRemoved instanceof Function && i[Jl](t, this._ky)
			})
		},
		_7e: function() {
			this._4x(function(t) {
				t[Ql] instanceof Function && t[Ql](this._ky)
			})
		},
		_ie: function() {
			this._23 && this._2o(this._23), this._$p && this._2o(this._$p);
			var t = this._ky[Zl];
			t && Si.call(this, t)
		},
		_ky: null,
		_23: null,
		_$p: null,
		_7a: function(t) {
			return this._23 == t ? !1 : (this._23 && this._23.length && this._2o(this._23), void(this._23 = t))
		},
		_$b: function(t) {
			this._$p || (this._$p = []), this._$p[Vr](t)
		},
		_5: function(t) {
			this._$p && 0 != this._$p.length && m(this._$p, t)
		},
		_ia: function(t, i, n) {
			this._ky[i] instanceof Function && this._ky[i].call(this._ky, t, n), this._23 && this._h4(t, i, this._23, n), this._$p && this._h4(t, i, this._$p, n)
		},
		_4x: function(t) {
			this._23 && l(this._23, t, this), this._$p && l(this._$p, t, this)
		},
		_h4: function(t, i, n, e) {
			if (!k(n)) return void this._nna(t, i, n, e);
			for (var s = 0; s < n[Gr]; s++) {
				var r = n[s];
				this._nna(t, i, r, e)
			}
		},
		_nna: function(t, i, n, e) {
			var s = n[i];
			s && s[qr](n, t, this._ky, e)
		},
		_34: function(t) {
			t[J_] instanceof Function && t[J_][qr](t, this._ky)
		},
		_2o: function(t) {
			if (!k(t)) return void this._34(t);
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n && this._34(n)
			}
		}
	}, D(YD, ji), ki[dh] = {
		limitCount: 10,
		points: null,
		add: function(t, i, n) {
			var e = i.timeStamp - t[Ta] || 1;
			n[tv] = e;
			var s, r;
			if (!n[xa]) return s = i.x - t.x, r = i.y - t.y, n.dx = s, n.dy = r, void this._kv(s, r, e);
			var h = n[xa].length;
			if (1 == h) s = n[xa][0][_a] - t[xa][0][_a], r = n[xa][0][ca] - t.touches[0][ca];
			else {
				for (var a, o, f, _ = [], c = [], u = 0, d = 0, l = 0, v = 0, b = 0, y = 0, g = 0, h = t.touches[Gr]; h > g; g++) {
					a = t[xa][g];
					var m = a[_a],
						E = a.clientY;
					u += m, d += E, g && (b = Math[Qo](b, Math[lo]((m - o) * (m - o) + (E - f) * (E - f)))), o = m, f = E, _.push({
						x: m,
						y: E
					})
				}
				u /= h, d /= h;
				for (var g = 0, h = n[xa][Gr]; h > g; g++) {
					a = n[xa][g];
					var m = a[_a],
						E = a[ca];
					l += m, v += E, g && (y = Math.max(y, Math[lo]((m - o) * (m - o) + (E - f) * (E - f)))), o = m, f = E, c[Vr]({
						x: m,
						y: E
					})
				}
				if (l /= h, v /= h, s = l - u, r = v - d, b && y) {
					var p = y / b;
					n[Jo] && t[Jo] && (p = n[Jo] / t.scale), n[Rc] = {
						x: l,
						y: v,
						clientX: l,
						clientY: v
					}, n[iv] = p, n[nv] = t
				}
			}
			n.dx = s, n.dy = r, this._kv(s, r, e)
		},
		_kv: function(t, i, n) {
			var e = {
				interval: n,
				dx: t,
				dy: i
			};
			this.points[Wr](0, 0, e), this[Ba][Gr] > this[ev] && this.points[sv]()
		},
		getCurrentSpeed: function() {
			if (!this[Ba][Gr]) return null;
			for (var t = 0, i = 0, n = 0, e = 0, s = this[Ba].length; s > e; e++) {
				var r = this.points[e],
					h = r[tv];
				if (h > 300) break;
				if (t += r[tv], i += r.dx, n += r.dy, t > 500) break
			}
			return 0 == t || 0 == i && 0 == n ? null : {
				x: i / t,
				y: n / t
			}
		},
		clear: function() {
			this.points = []
		}
	};
	var HD, UD, WD, XD;
	FP ? (HD = rv, UD = hv, WD = av, XD = ov) : GP ? (HD = fv, UD = _v, WD = cv, XD = uv) : (HD = dv, UD = dv, WD = bu, XD = lv);
	var VD = vv,
		KD = Math.PI,
		ZD = Math[vo],
		JD = Math[$h],
		QD = 1.70158,
		tz = {
			swing: function(t) {
				return -Math[Bh](t * KD) / 2 + .5
			},
			easeNone: function(t) {
				return t
			},
			easeIn: function(t) {
				return t * t
			},
			easeOut: function(t) {
				return (2 - t) * t
			},
			easeBoth: function(t) {
				return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
			},
			easeInStrong: function(t) {
				return t * t * t * t
			},
			easeOutStrong: function(t) {
				return 1 - --t * t * t * t
			},
			easeBothStrong: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
			},
			elasticIn: function(t) {
				var i = .3,
					n = i / 4;
				return 0 === t || 1 === t ? t : -(ZD(2, 10 * (t -= 1)) * JD(2 * (t - n) * KD / i))
			},
			elasticOut: function(t) {
				var i = .3,
					n = i / 4;
				return 0 === t || 1 === t ? t : ZD(2, -10 * t) * JD(2 * (t - n) * KD / i) + 1
			},
			elasticBoth: function(t) {
				var i = .45,
					n = i / 4;
				return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * ZD(2, 10 * (t -= 1)) * JD(2 * (t - n) * KD / i) : ZD(2, -10 * (t -= 1)) * JD(2 * (t - n) * KD / i) * .5 + 1
			},
			backIn: function(t) {
				return 1 === t && (t -= .001), t * t * ((QD + 1) * t - QD)
			},
			backOut: function(t) {
				return (t -= 1) * t * ((QD + 1) * t + QD) + 1
			},
			backBoth: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * (((QD *= 1.525) + 1) * t - QD) : .5 * ((t -= 2) * t * (((QD *= 1.525) + 1) * t + QD) + 2)
			},
			bounceIn: function(t) {
				return 1 - tz[bv](1 - t)
			},
			bounceOut: function(t) {
				var i, n = 7.5625;
				return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
			},
			bounceBoth: function(t) {
				return .5 > t ? .5 * tz[yv](2 * t) : .5 * tz.bounceOut(2 * t - 1) + .5
			}
		},
		iz = function(t) {
			this._kg = t
		};
	iz[dh] = {
		_kg: null,
		_kk: function(t) {
			var i = Date[gv]();
			this._m5();
			var n = this;
			this._requestID = requestAnimationFrame(function e() {
				var s = Date.now(),
					r = s - i;
				return !r || n._kg && n._kg(r) !== !1 ? (i = s, void(n._requestID = requestAnimationFrame(e))) : (n._m5(), void(t instanceof Function && t[qr]()))
			})
		},
		_m5: function() {
			return this._requestID ? (t[Uu](this._requestID), void delete this._requestID) : !1
		},
		_du: function() {
			return null != this._requestID
		}
	};
	var nz = function(t, i, n, e) {
		this._onStep = t, this._kz = i || this, this._3o = e, n && n > 0 && (this._iy = n)
	};
	nz[dh] = {
		_iy: 1e3,
		_3o: null,
		_e5: 0,
		_m5: function() {
			return this._e5 = 0, this._nol = 0, N(this, nz, mv)
		},
		_nol: 0,
		_kg: function(t) {
			if (this._e5 += t, this._e5 >= this._iy) return this._onStep.call(this._kz, 1, (1 - this._nol) * this._iy, t, this._iy), !1;
			var i = this._e5 / this._iy;
			return this._3o && (i = this._3o(i)), this._onStep.call(this._kz, i, (i - this._nol) * this._iy, t, this._iy) === !1 ? !1 : void(this._nol = i)
		}
	}, D(nz, iz);
	var ez = function(t) {
			ni(t)
		},
		sz = {
			version: Ev,
			extend: D,
			doSuperConstructor: z,
			doSuper: N,
			createFunction: G,
			setClass: T,
			appendClass: w,
			removeClass: O,
			forEach: l,
			forEachReverse: b,
			isNumber: S,
			isString: j,
			isBoolean: I,
			isArray: k,
			eventPreventDefault: A,
			eventStopPropagation: L,
			stopEvent: R,
			callLater: p,
			nextFrame: x,
			forEachChild: e,
			forEachByDepthFirst: r,
			forEachByDepthFirstReverse: o,
			forEachByBreadthFirst: c,
			randomInt: M,
			randomBool: C,
			randomColor: U,
			addEventListener: $D,
			getFirstElementChildByTagName: sD
		};
	sz.isTouchSupport = KP, sz[pv] = WP, sz[yo] = hi, sz[xv] = ai, sz[Tv] = fD, sz.Size = oD, sz[wv] = rD, sz[Ov] = _D, sz.Event = ED, sz.PropertyChangeEvent = pD, sz[Sv] = AD, sz.Handler = SD, sz.Dispatcher = jD, sz.Position = cD, sz[jv] = LD, sz.SelectionModel = CD, sz.DataModel = MD, sz.IListener = kD, sz[Iv] = Ri, sz[kv] = Ai, sz[Av] = Li, sz.isMetaKey = Ii, sz.calculateDistance = hD, sz[Lv] = nD, sz[Rv] = ji, sz.alert = function(t) {
		alert(t)
	}, sz[Mv] = function(t, i, n, e) {
		var s = prompt(t, i);
		return s != i && n ? n.call(e, s) : s
	}, sz.confirm = function(t, i, n) {
		var e = confirm(t);
		return e && i ? i[qr](n) : e
	}, sz[Cv] = bi;
	var rz = {
		IMAGE_ADJUST_FLIP: Pv,
		IMAGE_ADJUST_MIRROR: Dv,
		SELECTION_TYPE_BORDER_RECT: zv,
		SELECTION_TYPE_BORDER: Nv,
		SELECTION_TYPE_SHADOW: Bv,
		NS_SVG: "http://www.w3.org/2000/svg",
		PROPERTY_TYPE_ACCESSOR: 0,
		PROPERTY_TYPE_STYLE: 1,
		PROPERTY_TYPE_CLIENT: 2,
		EDGE_TYPE_DEFAULT: null,
		EDGE_TYPE_ELBOW: $v,
		EDGE_TYPE_ELBOW_HORIZONTAL: Fv,
		EDGE_TYPE_ELBOW_VERTICAL: Gv,
		EDGE_TYPE_ORTHOGONAL: qv,
		EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Yv,
		EDGE_TYPE_ORTHOGONAL_VERTICAL: Hv,
		EDGE_TYPE_HORIZONTAL_VERTICAL: Uv,
		EDGE_TYPE_VERTICAL_HORIZONTAL: Wv,
		EDGE_TYPE_EXTEND_TOP: Xv,
		EDGE_TYPE_EXTEND_LEFT: Vv,
		EDGE_TYPE_EXTEND_BOTTOM: Kv,
		EDGE_TYPE_EXTEND_RIGHT: Zv,
		EDGE_TYPE_ZIGZAG: Jv,
		EDGE_CORNER_NONE: tu,
		EDGE_CORNER_ROUND: Ko,
		EDGE_CORNER_BEVEL: Qv,
		GROUP_TYPE_RECT: tb,
		GROUP_TYPE_CIRCLE: ib,
		GROUP_TYPE_ELLIPSE: nb,
		SHAPE_CIRCLE: eb,
		SHAPE_RECT: tb,
		SHAPE_ROUNDRECT: sb,
		SHAPE_STAR: rb,
		SHAPE_TRIANGLE: hb,
		SHAPE_HEXAGON: ab,
		SHAPE_PENTAGON: ob,
		SHAPE_TRAPEZIUM: fb,
		SHAPE_RHOMBUS: _b,
		SHAPE_PARALLELOGRAM: cb,
		SHAPE_HEART: ub,
		SHAPE_DIAMOND: db,
		SHAPE_CROSS: lb,
		SHAPE_ARROW_STANDARD: vb,
		SHAPE_ARROW_1: bb,
		SHAPE_ARROW_2: yb,
		SHAPE_ARROW_3: gb,
		SHAPE_ARROW_4: mb,
		SHAPE_ARROW_5: Eb,
		SHAPE_ARROW_6: pb,
		SHAPE_ARROW_7: xb,
		SHAPE_ARROW_8: Tb,
		SHAPE_ARROW_OPEN: wb
	};
	rz[Ob] = Sb, rz[jb] = Ko, rz[Ib] = kb, rz.LINE_JOIN_TYPE_BEVEL = Qv, rz.LINE_JOIN_TYPE_ROUND = Ko, rz.LINE_JOIN_TYPE_MITER = Ab, tD.SELECTION_TYPE = rz[Lb], tD[Rb] = 3, tD.SELECTION_BORDER = 2, tD.SELECTION_SHADOW_BLUR = 7, tD[Mb] = V(3422561023), tD[Cb] = rz.SELECTION_TYPE_SHADOW, tD.BORDER_RADIUS = 10, tD.POINTER_WIDTH = 10, tD.DOUBLE_BUFFER = n, tD[Oc] = 10, tD[Pb] = 200, tD[Db] = 1.2;
	var hz = t.devicePixelRatio || 1;
	1 > hz && (hz = 1);
	var az;
	sz[zb] = Fi;
	var oz = function(t, i, n, e) {
		var s = t - n,
			r = i - e;
		return s * s + r * r
	};
	rn.prototype = {
		equals: function(t) {
			return this.cx == t.cx && this.cy == t.cy && this.r == t.r
		}
	}, rn._jzCircle = function(t, i, n) {
		if (!n) return en(t, i);
		var e = oz(t.x, t.y, i.x, i.y),
			s = oz(t.x, t.y, n.x, n.y),
			r = oz(n.x, n.y, i.x, i.y);
		if (e + fz >= s + r) return en(t, i, 0, n);
		if (s + fz >= e + r) return en(t, n, 0, i);
		if (r + fz >= e + s) return en(i, n, 0, t);
		var h;
		Math[qh](n.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
		var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
			o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
		return new rn(a, o, hD(a, o, t.x, t.y), t, i, n)
	};
	var fz = .01,
		_z = {
			_nny: function(t, i, e, s, r) {
				var h = 0,
					a = 0,
					o = i._j8;
				if (e = e || 0, t.x === n) {
					var f = t.horizontalPosition,
						_ = t.verticalPosition,
						c = !0;
					switch (f) {
						case lD:
							c = !1;
							break;
						case dD:
							h += o / 2
					}
					switch (_) {
						case vD:
							a -= e / 2;
							break;
						case yD:
							a += e / 2
					}
				} else h = t.x, a = t.y, Math.abs(h) > 0 && Math[qh](h) < 1 && (h *= o);
				r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
				var u = dn[qr](i, h, a, c);
				return u ? (r || null == s || u[Nb](s), u) : {
					x: 0,
					y: 0
				}
			},
			_me: function(t, i) {
				var n = i[wo],
					e = i[Ba];
				switch (n) {
					case Dz:
						t[Bb](e[0], e[1], e[2], e[3], i._r);
						break;
					case Rz:
						t.moveTo(e[0], e[1]);
						break;
					case Mz:
						t.lineTo(e[0], e[1]);
						break;
					case Cz:
						t[$b](e[0], e[1], e[2], e[3]);
						break;
					case Pz:
						t[Fb](e[0], e[1], e[2], e[3], e[4], e[5]);
						break;
					case zz:
						t.closePath()
				}
			},
			_5x: function(t, i, n, e) {
				var s = i.type;
				if (s != Rz && s != zz) {
					var r = n.lastPoint,
						h = i.points;
					switch (n.type == Rz && t[Hh](r.x, r.y), s) {
						case Dz:
							bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t[Hh](h[0], h[1]), t[Hh](i._p1x, i._p1y), t[Hh](i._p2x, i._p2y), i._nmoundaryPoint1 && t.add(i._nmoundaryPoint1.x, i._nmoundaryPoint1.y), i._nmoundaryPoint2 && t[Hh](i._nmoundaryPoint2.x, i._nmoundaryPoint2.y);
							break;
						case Mz:
							t.add(h[0], h[1]);
							break;
						case Cz:
							Xi([r.x, r.y][Oo](h), t);
							break;
						case Pz:
							Ji([r.x, r.y].concat(h), t);
							break;
						case zz:
							e && t[Hh](e[Ba][0], e[Ba][1])
					}
				}
			},
			_5r: function(t, i, n) {
				var e = t.type;
				if (e == Rz) return 0;
				var s = i[To],
					r = t.points;
				switch (e == Pz && 4 == r.length && (e = Cz), e) {
					case Mz:
						return hD(r[0], r[1], s.x, s.y);
					case Dz:
						return t._j8;
					case Cz:
						var h = Vi([s.x, s.y][Oo](r));
						return t._lf = h, h(1);
					case Pz:
						var h = tn([s.x, s.y][Oo](r));
						return t._lf = h, h(1) || Qi([s.x, s.y][Oo](r));
					case zz:
						if (s && n) return t.points = n[Ba], hD(n[Ba][0], n[Ba][1], s.x, s.y)
				}
				return 0
			}
		},
		cz = /^data:image\/(\w+);base64,/i,
		uz = /^gif/i,
		dz = /^svg/i,
		lz = 10,
		vz = 11,
		bz = 12,
		yz = 20,
		gz = 30;
	tD[Mo] = 50, tD.IMAGE_HEIGHT = 30, tD.MAX_CACHE_PIXELS = 1e6;
	var mz = 1,
		Ez = 2,
		pz = 3;
	pn[dh] = {
		_kc: 0,
		_6n: !0,
		_l1: null,
		_jg: null,
		_m9: null,
		_ma: null,
		_nnu: n,
		_97: n,
		_6m: function() {
			return this._kc == mz
		},
		getBounds: function(t) {
			return this._ma == gz ? this._m9[bo](t) : (this._6n && this._ff(), this)
		},
		validate: function() {
			this._6n && this._ff()
		},
		_ff: function() {
			if (this._6n = !1, this._ma == gz) return this._m9[Gb](), void this[qb](this._m9[uu]);
			if (this._ma == yz) return void this._9f();
			if (this._kc != mz) try {
				this._ds()
			} catch (t) {
				this._kc = pz, sz[zh](t)
			}
		},
		_5c: function() {
			this._eq(), this._dispatcher.clear(), delete this._dispatcher
		},
		_i3: function(t) {
			this._l1 && this._l1[Yb] && this._l1[Yb][Sl](this._l1), this._kc = pz, sz[zh](Hb + this._m9), this._pixels = null, this._jg = null, this._l1 = null, t !== !1 && this._5c()
		},
		_ds: function() {
			var t = this._m9;
			if (this._kc = mz, this._dispatcher = new jD, this._ma == bz) {
				for (var n in Wz) this[n] = Wz[n];
				return void Qn(this._m9, this, this._dr, this._i3, this._f1)
			}
			this._l1 || (NP ? (this._l1 = i[ao](Yc), this._l1[ta][Ub] = Qc, i[Wb].appendChild(this._l1)) : this._l1 = new Image), this._l1[Wc] = t, !NP && this._l1[Za] ? (this._l1[$f] = this._l1[Xb] = null, this._81()) : (this._l1.onload = NP ? function(t) {
				setTimeout(this._81[Vb](this, t), 100)
			}.bind(this) : this._81.bind(this), this._l1.onerror = this._i3[Vb](this))
		},
		_81: function() {
			this._kc = Ez;
			var t = this._l1.width,
				i = this._l1[Ja];
			if (this._l1[Yb] && this._l1[Yb][Sl](this._l1), !t || !i) return void this._i3();
			this.width = t, this.height = i;
			var n = this._eo();
			n.width = t, n[Ja] = i, n.g.drawImage(this._l1, 0, 0, t, i), this._pixels = NP && this._ma == vz ? null : In(n), this._5c()
		},
		_9f: function() {
			var t = this._m9;
			if (!(t.draw instanceof Function)) return void this._i3(!1);
			if (t[Kb] === !1 && t[Za] && t.height) return this[Za] = t[Za], void(this[Ja] = t[Ja]);
			var i = t[Za] || tD[Pb],
				n = t[Ja] || tD[Pb],
				e = this._eo();
			e[Za] = i, e.height = n;
			var s = e.g;
			t.draw(s);
			var r = s[mo](0, 0, i, n),
				h = kn(r.data, i, n);
			this.x = h._x, this.y = h._y, this.width = h._width, this[Ja] = h._height, e.width = this[Za], e.height = this.height, s[Nf](r, -this.x, -this.y), this._pixels = h
		},
		_eo: function() {
			return this._jg || (this._jg = Fi())
		},
		_6l: function(t, i, n, e, s, r) {
			i[Zb](), i[tb](0, 0, e, s), i[Jb] = r || Qb, i.fill(), i[ty](), i.textAlign = Rc, i[iy] = ny, i[Jb] = ey;
			var h = 6 * (i.canvas[to] || 1);
			i[_o] = sy + h + "px Verdana,helvetica,arial,sans-serif", i[ry] = hy, i.lineWidth = 1, i[ay](t, e / 2 + .5, s / 2 + .5), i[ry] = oy, i[ay](t, e / 2 - .5, s / 2 - .5), i[fy](t, e / 2, s / 2), i[_y]()
		},
		draw: function(t, i, n, e, s, r) {
			if (this[Za] && this.height) {
				i = i || 1, e = e || 1, s = s || 1;
				var h = this.width * e,
					a = this[Ja] * s;
				if (r && n[cy] && (t.shadowColor = n.shadowColor, t[uy] = (n[uy] || 0) * i, t[dy] = (n.shadowOffsetX || 0) * i, t.shadowOffsetY = (n[ly] || 0) * i), this._kc == mz) return this._6l(vy, t, i, h, a, n.renderColor);
				if (this._kc == pz) return this._6l(by, t, i, h, a, n[yy]);
				if (this._ma == gz) return t[Jo](e, s), void this._m9[Lo](t, i, n);
				var o = this._fi(i, e, s);
				return o ? ((this.x || this.y) && t[Do](this.x * e, this.y * s), t[Jo](e / o[Jo], s / o.scale), void o._me(t, n.renderColor, n[gy])) : void this._k1(t, i, e, s, this[Za] * e, this[Ja] * s, n)
			}
		},
		_k1: function(t, i, n, e, s, r, h) {
			if (this._ma == yz) return 1 != n && 1 != e && t[Jo](n, e), void this._m9[Lo](t, h);
			if (this._l1) {
				if (!qP) return void t[my](this._l1, 0, 0, s, r);
				var n = i * s / this.width,
					e = i * r / this.height;
				t.scale(1 / n, 1 / e), t[my](this._l1, 0, 0, s * n, r * e)
			}
		},
		_ka: null,
		_fi: function(t, i, n) {
			if (this._ma == yz && this._m9[Kb] === !1) return null;
			if (this._ma == lz || (t *= Math.max(i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._fk(this._jg || this._l1, 1)), this._defaultCache;
			var e = this._ka[Ey] || 0;
			if (t = Math[Hr](t), e >= t) {
				for (var s = t, r = this._ka[s]; !r && ++s <= e;) r = this._ka[s];
				if (r) return r
			}
			t % 2 && t++;
			var h = this[Za] * t,
				a = this.height * t;
			if (h * a > tD[py]) return null;
			var o = Fi(h, a);
			return (this.x || this.y) && o.g[Do](-this.x * t, -this.y * t), this._k1(o.g, 1, t, t, h, a), this._fk(o, t)
		},
		_fk: function(t, i) {
			var n = new Fz(t, i);
			return this._ka[i] = n, this._ka.maxScale = i, n
		},
		hitTest: function(t, i, n) {
			if (this._ma == gz) return this._m9[Dc][uh](this._m9, arguments);
			if (!(this._pixels || this._l1 && this._l1._pixels)) return !0;
			var e = this._pixels || this._l1._pixels;
			return t -= e._ji.x, i -= e._ji.y, t = Math[Ko](t), i = Math[Ko](i), An(e, e._ji, t, i, n)
		},
		_eq: function() {
			this._dispatcher && this._dispatcher[Eh](new ED(this, xy, Ty, this._l1))
		},
		_nnw: function(t, i) {
			this._dispatcher && this._dispatcher[Ru](t, i)
		},
		_6k: function(t, i) {
			this._dispatcher && this._dispatcher.removeListener(t, i)
		},
		_nod: function(t) {
			this._ka = {}, (t || this.width * this.height > 1e5) && (this._l1 = null, this._jg = null)
		}
	}, D(pn, fD);
	var xz = {};
	sz.drawImage = Sn, sz[wy] = xn, sz[Oy] = wn, sz.getAllImages = function() {
		var t = [];
		for (var i in xz) t[Vr](i);
		return t
	};
	var Tz = function(t, i, n, e, s, r) {
		this[wo] = t, this.colors = i, this.positions = n, this[Lc] = e || 0, this.tx = s || 0, this.ty = r || 0
	};
	rz[Sy] = Td, rz[jy] = pd, Tz[dh] = {
		type: null,
		colors: null,
		positions: null,
		angle: null,
		tx: 0,
		ty: 0,
		position: cD.CENTER_MIDDLE,
		isEmpty: function() {
			return null == this[Iy] || 0 == this[Iy].length
		},
		_6i: function() {
			var t = this[Iy][Gr];
			if (1 == t) return [0];
			for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[Vr](n * e);
			return this[ky] || (this[ky] = i), i
		},
		generatorGradient: function(t) {
			if (null == this[Iy] || 0 == this.colors.length) return null;
			var i, n = qi();
			if (this.type == rz[jy]) {
				var e = this[Lc];
				e > Math.PI && (e -= Math.PI);
				var s;
				if (e <= Math.PI / 2) {
					var r = Math[Nh](t[Ja], t.width),
						h = Math.sqrt(t[Za] * t[Za] + t.height * t[Ja]),
						a = r - e;
					s = Math[Bh](a) * h
				} else {
					var r = Math[Nh](t[Za], t.height),
						h = Math[lo](t.width * t.width + t[Ja] * t[Ja]),
						a = r - (e - Math.PI / 2);
					s = Math.cos(a) * h
				}
				var o = s / 2,
					f = o * Math.cos(e),
					_ = o * Math[$h](e),
					c = t.x + t[Za] / 2 - f,
					u = t.y + t[Ja] / 2 - _,
					d = t.x + t[Za] / 2 + f,
					l = t.y + t[Ja] / 2 + _;
				i = n.createLinearGradient(c, u, d, l)
			} else {
				if (!(this[wo] = rz.GRADIENT_TYPE_RADIAL)) return null;
				var v = oi(this[bf], t[Za], t[Ja]);
				v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t[Za] * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Ja] * this.ty : this.ty);
				var b = hD(v.x, v.y, t.x, t.y);
				b = Math[Qo](b, hD(v.x, v.y, t.x, t.y + t[Ja])), b = Math.max(b, hD(v.x, v.y, t.x + t[Za], t.y + t.height)), b = Math.max(b, hD(v.x, v.y, t.x + t[Za], t.y)), i = n[Ay](v.x, v.y, 0, v.x, v.y, b)
			}
			var y = this.colors,
				g = this.positions;
			g && g.length == y[Gr] || (g = this._6i());
			for (var m = 0, E = y.length; E > m; m++) i.addColorStop(g[m], y[m]);
			return i
		}
	};
	var wz = new Tz(rz[jy], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
		Oz = new Tz(rz[jy], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
		Sz = (new Tz(rz.GRADIENT_TYPE_LINEAR, [V(1154272460), V(1442840575)], [.1, .9], 0), new Tz(rz.GRADIENT_TYPE_RADIAL, [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
		jz = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
		Iz = [0, .12, .28, .45, .6, .75, .8, 1],
		kz = new Tz(rz[jy], jz, Iz),
		Az = new Tz(rz[jy], jz, Iz, Math.PI / 2),
		Lz = new Tz(rz.GRADIENT_TYPE_RADIAL, jz, Iz);
	Tz[Ly] = wz, Tz.LINEAR_GRADIENT_HORIZONTAL = Oz, Tz.RADIAL_GRADIENT = Sz, Tz.RAINBOW_LINEAR_GRADIENT = kz, Tz[Ry] = Az, Tz.RAINBOW_RADIAL_GRADIENT = Lz;
	var Rz = wd,
		Mz = pd,
		Cz = My,
		Pz = xd,
		Dz = Cy,
		zz = Py;
	rz[Dy] = Rz, rz[zy] = Mz, rz[Ny] = Cz, rz[By] = Pz, rz[$y] = Dz, rz[Fy] = zz;
	var Nz = function(t, i) {
		this.id = ++PP, k(t) ? this[Ba] = t : (this.type = t, this.points = i)
	};
	Nz[dh] = {
		toJSON: function() {
			var t = {
				type: this[wo],
				points: this[Ba]
			};
			return this.invalidTerminal && (t.invalidTerminal = !0), t
		},
		parseJSON: function(t) {
			this[wo] = t.type, this.points = t[Ba], this[$o] = t.invalidTerminal
		},
		points: null,
		type: Mz,
		clone: function() {
			return new Nz(this[wo], y(this.points))
		},
		move: function(t, i) {
			if (this[Ba])
				for (var n = 0, e = this.points[Gr]; e > n; n++) {
					var s = this.points[n];
					sz[Gy](s) && (this[Ba][n] += n % 2 == 0 ? t : i)
				}
		}
	}, Z(Nz[dh], {
		lastPoint: {
			get: function() {
				return this.type == Dz ? {
					x: this._p2x,
					y: this._p2y
				} : {
					x: this.points[this.points[Gr] - 2],
					y: this[Ba][this.points[Gr] - 1]
				}
			}
		},
		firstPoint: {
			get: function() {
				return {
					x: this.points[0],
					y: this.points[1]
				}
			}
		}
	}), sz[qy] = Nz;
	var Bz = 0,
		$z = function(t) {
			this[uu] = new fD, this._fm = t || []
		};
	$z[dh] = {
		toJSON: function() {
			var t = [];
			return this._fm[Df](function(i) {
				t.push(i[Yy]())
			}), t
		},
		parseJSON: function(t) {
			var i = this._fm;
			t[Df](function(t) {
				i.push(new Nz(t.type, t[Ba]))
			})
		},
		clear: function() {
			this._fm[Gr] = 0, this[uu].clear(), this._j8 = 0, this._6n = !0
		},
		_ee: !0,
		_6o: function(t, i) {
			this._ee && 0 === this._fm.length && t != Rz && this._fm[Vr](new Nz(Rz, [0, 0])), this._fm[Vr](new Nz(t, i)), this._6n = !0
		},
		add: function(t) {
			this._fm[Vr](t), this._6n = !0
		},
		removePathSegment: function(t) {
			return t >= this._fm.length ? !1 : (this._fm[Wr](t, 1), void(this._6n = !0))
		},
		moveTo: function(t, i) {
			this._6o(Rz, [t, i])
		},
		lineTo: function(t, i) {
			this._6o(Mz, [t, i])
		},
		quadTo: function(t, i, n, e) {
			this._6o(Cz, [t, i, n, e])
		},
		curveTo: function(t, i, n, e, s, r) {
			this._6o(Pz, [t, i, n, e, s, r])
		},
		arcTo: function(t, i, n, e, s) {
			this._6o(Dz, [t, i, n, e, s])
		},
		closePath: function() {
			this._6o(zz)
		},
		_82: function(t, i, n, e, s) {
			if (e.selectionColor) {
				if (n == rz[Lb]) {
					if (!e[Hy]) return;
					return t[cy] = e[Uy], t[uy] = e[Hy] * i, t.shadowOffsetX = (e[Wy] || 0) * i, void(t[ly] = (e.selectionShadowOffsetY || 0) * i)
				}
				if (n == rz[Xy]) {
					if (!e[Vy]) return;
					t[ry] = e[Uy], t[po] = e[Vy] + (s[po] || 0), this._me(t), t.stroke()
				}
			}
		},
		_6n: !0,
		_fm: null,
		_j8: 0,
		lineCap: Sb,
		lineJoin: Ko,
		draw: function(t, i, n, e, s) {
			t[Ky] = n.lineCap || this[Ky], t[Zy] = n[Zy] || this.lineJoin, e && (s || (s = n), this._82(t, i, s[Jy], s, n)), n[Qy] && (this._me(t), t[po] = n.lineWidth + 2 * (n.outline || 0), t[ry] = n[Qy], t.stroke()), t[po] = 0, this._me(t), n.fillColor && (t.fillStyle = n[yy] || n[tg], t.fill()), n.fillGradient && (t[Jb] = n._fillGradient || n[ig], t.fill()), n[po] && (t[po] = n.lineWidth, n[wf] && (t.lineDash = n[wf], t.lineDashOffset = n.lineDashOffset), t[ry] = n[yy] || n.strokeStyle, t[ng](), t[wf] = [])
		},
		_me: function(t) {
			t.beginPath();
			for (var i, n, e = 0, s = this._fm[Gr]; s > e; e++) i = this._fm[e], _z._me(t, i, n), n = i
		},
		invalidate: function() {
			this._6n = !0
		},
		validate: function() {
			if (this._6n = !1, this.bounds.clear(), this._j8 = 0, 0 != this._fm[Gr])
				for (var t, i, n = this._fm, e = 1, s = n[0], r = s, h = n[Gr]; h > e; e++) t = n[e], t.type == Rz ? r = t : (_z._5x(this[uu], t, s, r), i = _z._5r(t, s, r), t._j8 = i, this._j8 += i), s = t
		},
		getBounds: function(t, i) {
			if (this._6n && this.validate(), i = i || new fD, t) {
				var n = t / 2;
				i.set(this[uu].x - n, this[uu].y - n, this[uu][Za] + t, this[uu].height + t)
			} else i[V_](this[uu].x, this[uu].y, this.bounds.width, this.bounds[Ja]);
			return i
		},
		hitTest: function(t, i, n, e, s, r) {
			return un.call(this, t, i, n, e, s, r)
		},
		toSegments: function() {
			return [][Oo](this._fm)
		},
		generator: function(t, i, n, e, s) {
			return cn.call(this, t, i, n, e, s)
		},
		getLocation: function(t, i) {
			return dn[qr](this, t, i || 0)
		}
	}, Z($z.prototype, {
		segments: {
			get: function() {
				return this._fm
			},
			set: function(t) {
				this[wa](), this._fm = t
			}
		},
		length: {
			get: function() {
				return this._6n && this.validate(), this._j8
			}
		},
		_empty: {
			get: function() {
				return 0 == this._fm[Gr]
			}
		}
	}), rz.BLEND_MODE_DARKEN = eg, rz.BLEND_MODE_MULTIPLY = sg, rz[Yo] = rg, rz[hg] = ag, rz.BLEND_MODE_LIGHTEN = og, rz.BLEND_MODE_SCREEN = fg, rz[Vo] = _g, tD.BLEND_MODE = rz.BLEND_MODE_LINEAR_BURN;
	var Fz = function(t, i, n) {
		this._jg = t, this[Jo] = i || 1, t instanceof Image && (n = !1), this._it = n
	};
	Fz[dh] = {
		scale: 1,
		_jg: null,
		_ka: null,
		_it: !0,
		_me: function(t, i, n) {
			if (!i || this._it === !1) return void t[my](this._jg, 0, 0);
			this._ka || (this._ka = {});
			var e = i + n,
				s = this._ka[e];
			if (s || (s = Mn(this._jg, i, n), s || (this._it = !1), this._ka[e] = s || this._jg), s)
				if (NP) try {
					t[my](s, 0, 0)
				} catch (r) {} else t[my](s, 0, 0)
		}
	};
	var Gz = function(t, i, n, e, s, r, h, a, o) {
			this._mv = zn(t, i, n, e, s, r, h, a, o)
		},
		qz = {
			server: {
				draw: function(t) {
					t.save(), t[Do](0, 0), t[cg](), t[p_](0, 0), t[g_](40, 0), t[g_](40, 40), t.lineTo(0, 40), t.closePath(), t[ty](), t[Do](0, 0), t[Do](0, 0), t.scale(1, 1), t[Do](0, 0), t.strokeStyle = ug, t.lineCap = Sb, t.lineJoin = Ab, t.miterLimit = 4, t.save(), t.save(), t[_y](), t[Zb](), t[_y](), t[Zb](), t.restore(), t[Zb](), t[_y](), t[Zb](), t.restore(), t.save(), t.restore(), t[Zb](), t[_y](), t.save(), t[_y](), t[Zb](), t[_y](), t[Zb](), t[_y](), t.save(), t[_y](), t.save(), t[_y](), t[Zb](), t.restore(), t[_y](), t.save();
					var i = t[dg](6.75, 3.9033, 30.5914, 27.7447);
					i[lg](.0493, vg), i[lg](.0689, bg), i[lg](.0939, yg), i[lg](.129, gg), i[lg](.2266, mg), i.addColorStop(.2556, Eg), i[lg](.2869, pg), i.addColorStop(.3194, xg), i[lg](.3525, Tg), i[lg](.3695, wg), i[lg](.5025, Og), i[lg](.9212, Sg), i[lg](1, jg), t.fillStyle = i, t.beginPath(), t.moveTo(25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[Fb](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[Fb](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[Fb](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[Fb](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[Fb](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[Fb](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Fb](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Fb](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[Ig](), t[ng](), t[_y](), t.save(), t[Zb](), t[Jb] = kg, t[cg](), t[p_](19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[Fb](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[Fb](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[Fb](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t[Fb](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[Fb](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[Fb](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[g_](4.675, 37.877), t[Fb](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[Fb](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[g_](2.924, 8.431), t[Fb](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[Fb](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[g_](19.763, 6.645), t[E_](), t[Ig](), t[ng](), t[_y](), t.restore(), t[Zb](), t[Jb] = Ag, t.beginPath(), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[E_](), t[Ig](), t.stroke(), t[_y](), t.save(), t[Jb] = kg, t.beginPath(), t[Lg](12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[E_](), t[Ig](), t.stroke(), t[_y](), t[Zb](), t[Jb] = Ag, t.beginPath(), t[p_](19.377, 17.247), t[Fb](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t.lineTo(5.882, 18.108999999999998), t[Fb](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[g_](5.02, 11.144), t[Fb](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[g_](19.377, 17.247), t.closePath(), t[Ig](), t[ng](), t[_y](), t[Zb](), t[Zb](), t[Jb] = kg, t.beginPath(), t.moveTo(18.536, 13.176), t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t.lineTo(6.479, 13.794), t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t.lineTo(5.861, 11.84), t[Fb](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t.lineTo(17.918, 11.221), t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[g_](18.535, 13.176), t.closePath(), t.fill(), t[ng](), t.restore(), t.save(), t[Jb] = kg, t.beginPath(), t[p_](18.536, 16.551), t[Fb](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[g_](6.479, 17.168999999999997), t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t.lineTo(5.861, 15.215999999999998), t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t.lineTo(17.918, 14.596999999999998), t[Fb](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[g_](18.535, 16.551), t.closePath(), t.fill(), t[ng](), t.restore(), t[_y](), t[_y]()
				}
			},
			exchanger2: {
				draw: function(t) {
					t.save(), t.translate(0, 0), t[cg](), t[p_](0, 0), t.lineTo(40, 0), t[g_](40, 40), t[g_](0, 40), t.closePath(), t[ty](), t[Do](0, 0), t[Do](0, 0), t[Jo](1, 1), t.translate(0, 0), t[ry] = ug, t[Ky] = Sb, t[Zy] = Ab, t[Rg] = 4, t.save(), t[Zb](), t[_y](), t[Zb](), t.restore(), t[Zb](), t[_y](), t[Zb](), t.restore(), t.save(), t[_y](), t[Zb](), t.restore(), t[Zb](), t.restore(), t.save(), t.restore(), t[Zb](), t.restore(), t.save(), t.restore(), t[_y](), t[Zb]();
					var i = t[dg](.4102, 24.3613, 39.5898, 24.3613);
					i.addColorStop(0, vg), i.addColorStop(.0788, mg), i[lg](.2046, Mg), i.addColorStop(.3649, Cg), i.addColorStop(.5432, Pg), i.addColorStop(.6798, Dg), i[lg](.7462, zg), i[lg](.8508, Ng), i.addColorStop(.98, Eg), i[lg](1, Bg), t[Jb] = i, t[cg](), t[p_](.41, 16.649), t[Fb](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[Fb](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[Fb](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[Fb](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[E_](), t[Ig](), t.stroke(), t.restore(), t.save(), t[Zb](), t[Jb] = kg, t[cg](), t.moveTo(16.4, 25.185), t[Fb](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[Fb](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[Fb](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t[Fb](23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[E_](), t[Ig](), t[ng](), t[_y](), t.restore(), t.save(), t[Zb](), t[Zb](), t.save(), t[Zb](), t[Jb] = $g, t[cg](), t[p_](5.21, 21.754), t.lineTo(8.188, 17.922), t[g_](9.53, 18.75), t.lineTo(15.956, 16.004), t[g_](18.547, 17.523), t[g_](12.074, 20.334), t[g_](13.464, 21.204), t.lineTo(5.21, 21.754), t.closePath(), t.fill(), t[ng](), t[_y](), t[_y](), t.restore(), t[Zb](), t[Zb](), t[Zb](), t.fillStyle = $g, t.beginPath(), t[p_](17.88, 14.61), t[g_](9.85, 13.522), t[g_](11.703, 12.757), t[g_](7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t[g_](16.88, 10.614), t.lineTo(17.88, 14.61), t[E_](), t[Ig](), t[ng](), t[_y](), t.restore(), t[Zb](), t.save(), t[Jb] = $g, t[cg](), t.moveTo(17.88, 14.61), t[g_](9.85, 13.522), t[g_](11.703, 12.757), t[g_](7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t[g_](16.88, 10.614), t[g_](17.88, 14.61), t[E_](), t[Ig](), t[ng](), t[_y](), t.restore(), t[_y](), t[Zb](), t[Zb](), t[Zb](), t.fillStyle = $g, t.beginPath(), t[p_](23.556, 15.339), t.lineTo(20.93, 13.879), t.lineTo(26.953, 11.304), t[g_](25.559, 10.567), t.lineTo(33.251, 9.909), t.lineTo(31.087, 13.467), t[g_](29.619, 12.703), t.lineTo(23.556, 15.339), t[E_](), t[Ig](), t[ng](), t.restore(), t[_y](), t[_y](), t[Zb](), t.save(), t[Zb](), t.fillStyle = $g, t[cg](), t[p_](30.028, 23.383), t[g_](24.821, 20.366), t.lineTo(22.915, 21.227), t[g_](21.669, 16.762), t[g_](30.189, 17.942), t[g_](28.33, 18.782), t[g_](33.579, 21.725), t[g_](30.028, 23.383), t[E_](), t[Ig](), t.stroke(), t.restore(), t[_y](), t[Zb](), t.save(), t[Jb] = $g, t[cg](), t[p_](30.028, 23.383), t[g_](24.821, 20.366), t.lineTo(22.915, 21.227), t[g_](21.669, 16.762), t.lineTo(30.189, 17.942), t[g_](28.33, 18.782), t.lineTo(33.579, 21.725), t.lineTo(30.028, 23.383), t[E_](), t[Ig](), t[ng](), t.restore(), t[_y](), t[_y](), t[_y](), t[_y](), t[_y]()
				}
			},
			exchanger: {
				draw: function(t) {
					t[Zb](), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[E_](), t.clip(), t[Do](0, 0), t.translate(0, 0), t.scale(1, 1), t[Do](0, 0), t[ry] = ug, t.lineCap = Sb, t[Zy] = Ab, t.miterLimit = 4, t.save(), t[Zb](), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t[_y](), t.save(), t.restore(), t.restore(), t.save();
					var i = t[dg](.2095, 20.7588, 39.4941, 20.7588);
					i[lg](0, Fg), i[lg](.0788, Gg), i[lg](.352, qg), i.addColorStop(.6967, Yg), i.addColorStop(.8916, Hg), i[lg](.9557, Ug), i.addColorStop(1, Wg), t[Jb] = i, t[cg](), t[p_](39.449, 12.417), t.lineTo(39.384, 9.424), t[Fb](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Fb](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[Fb](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[Fb](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[Fb](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[Fb](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[Fb](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Fb](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[g_](37.711, 30.316999999999997), t[g_](39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[Fb](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[E_](), t.fill(), t[ng](), t.restore(), t.save(), t.save(), t.save(), t[Zb](), t[_y](), t[Zb](), t[_y](), t.save(), t.restore(), t[Zb](), t[_y](), t[Zb](), t[_y](), t[Zb](), t[_y](), t[Zb](), t[_y](), t.save(), t[_y](), t.save(), t[_y](), t[_y](), t.save();
					var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
					i.addColorStop(0, Xg), i.addColorStop(.1455, Vg), i.addColorStop(.2975, Kg), i[lg](.4527, Zg), i.addColorStop(.6099, Jg), i.addColorStop(.7687, Qg), i.addColorStop(.9268, tm), i[lg](.9754, im), i[lg](1, nm), t[Jb] = i, t[cg](), t.moveTo(33.591, 24.763), t[Fb](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[Fb](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Fb](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[Fb](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[Fb](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[Fb](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Fb](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[Fb](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Fb](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[E_](), t[Ig](), t[ng](), t[_y](), t[_y](), t[_y](), t[Zb](), t[Zb](), t.save(), t[Jb] = $g, t[cg](), t[p_](10.427, 19.292), t[g_](5.735, 16.452), t[g_](12.58, 13.8), t.lineTo(12.045, 15.07), t.lineTo(20.482, 15.072), t[g_](19.667, 17.887), t[g_](11.029, 17.851), t[g_](10.427, 19.292), t.closePath(), t.fill(), t[ng](), t[_y](), t.restore(), t.save(), t.save(), t.fillStyle = $g, t.beginPath(), t[p_](13.041, 13.042), t[g_](8.641, 10.73), t.lineTo(14.82, 8.474), t[g_](14.373, 9.537), t[g_](22.102, 9.479), t[g_](21.425, 11.816), t[g_](13.54, 11.85), t[g_](13.041, 13.042), t[E_](), t[Ig](), t.stroke(), t[_y](), t[_y](), t[Zb](), t[Zb](), t[Jb] = $g, t.beginPath(), t[p_](29.787, 16.049), t[g_](29.979, 14.704), t[g_](21.51, 14.706), t[g_](22.214, 12.147), t.lineTo(30.486, 12.116), t[g_](30.653, 10.926), t[g_](36.141, 13.4), t[g_](29.787, 16.049), t[E_](), t.fill(), t[ng](), t[_y](), t[_y](), t[Zb](), t[Zb](), t[Jb] = $g, t.beginPath(), t[p_](28.775, 23.14), t.lineTo(29.011, 21.49), t[g_](19.668, 21.405), t[g_](20.523, 18.295), t[g_](29.613, 18.338), t[g_](29.815, 16.898), t[g_](35.832, 19.964), t.lineTo(28.775, 23.14), t[E_](), t[Ig](), t.stroke(), t.restore(), t.restore(), t.restore(), t[_y]()
				}
			},
			cloud: {
				draw: function(t) {
					t.save(), t.beginPath(), t[p_](0, 0), t.lineTo(90.75, 0), t.lineTo(90.75, 62.125), t[g_](0, 62.125), t[E_](), t.clip(), t[ry] = ug, t.lineCap = Sb, t.lineJoin = Ab, t.miterLimit = 4, t.save();
					var i = t[dg](44.0054, 6.4116, 44.0054, 51.3674);
					i[lg](0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, em), t.fillStyle = i, t[cg](), t[p_](57.07, 20.354), t[Fb](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Fb](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[Fb](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[Fb](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Fb](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[Fb](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[Fb](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Fb](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[E_](), t[Ig](), t.stroke(), t.restore(), t[_y]()
				}
			},
			node: {
				width: 60,
				height: 100,
				draw: function(t) {
					t[Zb](), t.translate(0, 0), t[cg](), t[p_](0, 0), t[g_](40, 0), t[g_](40, 40), t[g_](0, 40), t[E_](), t[ty](), t[Do](0, 0), t[Do](0, 0), t[Jo](1, 1), t.translate(0, 0), t.strokeStyle = ug, t[Ky] = Sb, t[Zy] = Ab, t.miterLimit = 4, t.save(), t[Jb] = sm, t[cg](), t.moveTo(13.948, 31.075), t[g_](25.914, 31.075), t[$b](25.914, 31.075, 25.914, 31.075), t[g_](25.914, 34.862), t[$b](25.914, 34.862, 25.914, 34.862), t[g_](13.948, 34.862), t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862), t[g_](13.948, 31.075), t[$b](13.948, 31.075, 13.948, 31.075), t[E_](), t.fill(), t.stroke(), t[_y](), t.save(), t.fillStyle = rm, t[cg](), t[p_](29.679, 35.972), t[Fb](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t[Fb](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[g_](10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[g_](29.678, 35.972), t[E_](), t.fill(), t[ng](), t[_y](), t.save(), t.fillStyle = rm, t[cg](), t[p_](.196, 29.346), t[Fb](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[g_](37.936, 31.075), t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[g_](39.665, 27.174), t[g_](.196, 27.174), t[g_](.196, 29.346), t.closePath(), t[Ig](), t.stroke(), t[_y](), t[Zb](), t[Jb] = hm, t[cg](), t[p_](37.937, 3.884), t.lineTo(1.926, 3.884), t[Fb](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t.lineTo(39.666000000000004, 27.12), t[g_](39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t.closePath(), t.fill(), t[ng](), t[_y](), t[Zb](), t[Zb](), t[_y](), t[Zb](), t[_y](), t.restore(), t.save();
					var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
					i[lg](0, am), i.addColorStop(1, om), t.fillStyle = i, t[cg](), t.moveTo(35.788, 6.39), t.lineTo(4.074, 6.39), t[Fb](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[g_](2.702, 24.616), t.lineTo(37.159, 24.616), t.lineTo(37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[E_](), t[Ig](), t.stroke(), t[_y](), t[_y]()
				}
			},
			group: {
				draw: function(t) {
					t[Zb](), t[Do](0, 0), t[cg](), t.moveTo(0, 0), t[g_](47.75, 0), t.lineTo(47.75, 40), t[g_](0, 40), t[E_](), t[ty](), t.translate(0, 0), t[Do](0, 0), t[Jo](1, 1), t.translate(0, 0), t.strokeStyle = ug, t[Ky] = Sb, t[Zy] = Ab, t.miterLimit = 4, t.save(), t[Zb](), t[Jb] = sm, t[cg](), t[p_](10.447, 26.005), t.lineTo(18.847, 26.005), t[$b](18.847, 26.005, 18.847, 26.005), t[g_](18.847, 28.663), t[$b](18.847, 28.663, 18.847, 28.663), t[g_](10.447, 28.663), t[$b](10.447, 28.663, 10.447, 28.663), t[g_](10.447, 26.005), t[$b](10.447, 26.005, 10.447, 26.005), t[E_](), t.fill(), t[ng](), t[_y](), t[Zb](), t.fillStyle = rm, t.beginPath(), t.moveTo(21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[g_](8.698, 30.338), t[Fb](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t[Fb](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[g_](21.491, 29.443), t[E_](), t[Ig](), t[ng](), t[_y](), t[Zb](), t[Jb] = rm, t[cg](), t[p_](.789, 24.79), t[Fb](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[g_](27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[g_](28.504, 23.267), t.lineTo(.789, 23.267), t[g_](.789, 24.79), t.closePath(), t.fill(), t[ng](), t.restore(), t.save(), t[Jb] = hm, t.beginPath(), t.moveTo(27.289, 6.912), t[g_](2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[g_](.7889999999999997, 23.227), t[g_](28.503999999999998, 23.227), t[g_](28.503999999999998, 8.126), t[Fb](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t[Ig](), t[ng](), t[_y](), t[Zb](), t[Zb](), t[_y](), t[Zb](), t[_y](), t[_y](), t[Zb]();
					var i = t[dg](5.54, 6.2451, 23.7529, 24.458);
					i.addColorStop(0, am), i[lg](1, om), t.fillStyle = i, t[cg](), t[p_](25.78, 8.671), t[g_](3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[g_](2.549, 21.466), t.lineTo(26.743, 21.466), t.lineTo(26.743, 9.636), t[Fb](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[E_](), t.fill(), t.stroke(), t[_y](), t.restore(), t[Zb](), t[Zb](), t.fillStyle = sm, t.beginPath(), t.moveTo(27.053, 33.602), t.lineTo(36.22, 33.602), t[$b](36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t[$b](36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t[g_](27.053, 33.602), t[$b](27.053, 33.602, 27.053, 33.602), t[E_](), t[Ig](), t[ng](), t[_y](), t[Zb](), t[Jb] = rm, t.beginPath(), t.moveTo(39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[g_](25.143, 38.327), t[Fb](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[g_](38.131, 36.501), t[Fb](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t[E_](), t.fill(), t[ng](), t.restore(), t[Zb](), t.fillStyle = rm, t.beginPath(), t.moveTo(16.514, 32.275), t[Fb](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t.lineTo(45.433, 33.601), t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[g_](46.758, 30.607999999999997), t[g_](16.514, 30.607999999999997), t[g_](16.514, 32.275), t[E_](), t[Ig](), t.stroke(), t.restore(), t[Zb](), t[Jb] = hm, t[cg](), t[p_](45.433, 12.763), t[g_](17.839, 12.763), t[Fb](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[g_](16.514, 30.57), t[g_](46.757999999999996, 30.57), t[g_](46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t[Ig](), t[ng](), t[_y](), t.save(), t[Zb](), t[_y](), t[Zb](), t[_y](), t[_y](), t[Zb](), i = t[dg](21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, am), i[lg](1, om), t.fillStyle = i, t[cg](), t[p_](43.785, 14.683), t.lineTo(19.486, 14.683), t[Fb](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[g_](44.837, 28.649), t.lineTo(44.837, 15.734), t[Fb](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t[Zb](), t.globalAlpha = .5, t.beginPath(), t.moveTo(23.709, 36.33), t[g_](4.232, 36.33), t[g_](4.232, 27.199), t[g_](5.304, 27.199), t.lineTo(5.304, 35.259), t[g_](23.709, 35.259), t.lineTo(23.709, 36.33), t.closePath(), t[Ig](), t.stroke(), t[_y](), t[_y]()
				}
			},
			subnetwork: {
				draw: function(t) {
					t[Zb](), t[Do](0, 0), t[cg](), t[p_](0, 0), t[g_](60.75, 0), t[g_](60.75, 42.125), t[g_](0, 42.125), t[E_](), t[ty](), t[Do](0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = ug, t[Ky] = Sb, t.lineJoin = Ab, t[Rg] = 4, t[Zb](), t[Zb](), t[_y](), t[Zb](), t[_y](), t[_y](), t[Zb]();
					var i = t[dg](43.6724, -2.7627, 43.6724, 59.3806);
					i[lg](0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, em), t[Jb] = i, t.beginPath(), t.moveTo(61.732, 16.509), t[Fb](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[Fb](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[Fb](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[Fb](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[Fb](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t[Ig](), t[ng](), t.restore(), t.save(), t[Zb](), t[Jb] = sm, t.beginPath(), t.moveTo(34.966, 44.287), t[g_](45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t[g_](45.112, 47.497), t[$b](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497), t[g_](34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t[E_](), t[Ig](), t[ng](), t[_y](), t.save(), t[Jb] = fm, t[cg](), t.moveTo(48.306, 48.439), t[Fb](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[g_](32.854, 49.52), t[Fb](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[g_](31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[g_](47.226, 47.497), t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t.closePath(), t[Ig](), t[ng](), t.restore(), t[Zb](), t.fillStyle = _m, t[cg](), t[p_](23.302, 42.82), t[Fb](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[Fb](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t[g_](23.302, 40.98), t[g_](23.302, 42.82), t[E_](), t[Ig](), t.stroke(), t[_y](), t[Zb](), t[Jb] = hm, t[cg](), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t[g_](56.774, 40.933), t[g_](56.774, 22.695), t[Fb](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t.closePath(), t[Ig](), t.stroke(), t.restore(), t[Zb](), t.save(), t.restore(), t.save(), t[_y](), t.restore(), t.save(), i = t[dg](29.04, 20.4219, 51.0363, 42.4181), i.addColorStop(0, am), i[lg](1, om), t[Jb] = i, t[cg](), t[p_](53.485, 23.353), t[g_](26.592, 23.353), t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t.lineTo(54.647, 38.807), t[g_](54.647, 24.517000000000003), t[Fb](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(), t.fill(), t[ng](), t[_y](), t[_y](), t.restore()
				}
			}
		};
	for (var Yz in qz) xn(cm + Yz, qz[Yz]);
	var Hz = function() {
			this[Ef] = !1;
			var t = this._fp;
			t[wa]();
			var i = this._84.x + this.$border / 2,
				n = this._84.y + this.$border / 2,
				e = this._84[Za] - this[of],
				s = this._84[Ja] - this[of],
				r = Hn[qr](this, {
					x: i,
					y: n
				});
			Vn(t, r.x, r.y, !0), r = Hn[qr](this, {
				x: i + e,
				y: n
			}), Vn(t, r.x, r.y), r = Hn[qr](this, {
				x: i + e,
				y: n + s
			}), Vn(t, r.x, r.y), r = Hn[qr](this, {
				x: i,
				y: n + s
			}), Vn(t, r.x, r.y), this.__moPointer && (r = Hn.call(this, {
				x: this._pointerX,
				y: this._pointerY
			}), Vn(t, r.x, r.y)), this.$border && t[af](this[of] / 2)
		},
		Uz = 20,
		Wz = {
			_g1: !1,
			_kh: null,
			_noz: 0,
			_lc: -1,
			_lb: null,
			_f1: function(t) {
				this._kh || (this._kh = [], this._kc = Ez), this._kh[Vr](t), this._ew(), this._kk()
			},
			_kk: function() {
				if (!this._lb) {
					var t = this;
					this._lb = setTimeout(function i() {
						return t._ew() !== !1 ? void(t._lb = setTimeout(i, t._gf())) : void delete t._lb
					}, this._gf())
				}
			},
			_gf: function() {
				return Math.max(Uz, this._kh[this._lc].delay)
			},
			_ew: function() {
				return this._g3(this._lc + 1)
			},
			_g3: function(t) {
				if (this._g1) t %= this._noz;
				else if (t >= this._kh[Gr]) return !1;
				if (this._lc == t) return !1;
				this._lc = t;
				var i = this._kh[this._lc],
					n = i._noache;
				return n || (i._noache = n = Fi(this[Za], this.height), n.g[Nf](i[Eo], 0, 0), n._pixels = i._pixels), this._l1 = n, this[rf] = !0, this._eq()
			},
			_dr: function() {
				return this._kh ? (this._g1 = !0, this._noz = this._kh.length, 1 == this._noz ? this._eq() : void this._kk()) : void this._i3()
			},
			_m5: function() {
				this._lb && (clearTimeout(this._lb), delete this._lb)
			},
			_eq: function() {
				var t = this._dispatcher[il];
				if (!t || !t.length) return !1;
				for (var i = new ED(this, xy, Ty, this._l1), n = 0, e = t.length; e > n; n++) {
					var s = t[n];
					s[vh]._jo && s[vh]._jo._ieed ? (t[Wr](n, 1), n--, e--) : s[Eh][qr](s[vh], i)
				}
				return t[Gr] > 0
			},
			_nnw: function(t, i) {
				this._dispatcher[Ru](t, i), this._g1 && !this._lb && this._kk()
			},
			_6k: function(t, i) {
				this._dispatcher[nl](t, i), this._dispatcher._no3() || this._m5()
			},
			_ie: function() {
				this._m5(), this._dispatcher[wa]()
			},
			_fi: function() {
				var t = this._l1._nmufferedImage;
				return t || (this._l1._nmufferedImage = t = new Fz(this._l1, 1)), t
			}
		},
		Xz = function(t) {
			return t[um](function(t, i) {
				return 2 * t + i
			}, 0)
		},
		Vz = function(t) {
			for (var i = [], n = 7; n >= 0; n--) i[Vr](!!(t & 1 << n));
			return i
		},
		Kz = function(t) {
			this[Eo] = t, this[dm] = this[Eo][Gr], this[lm] = 0, this[vm] = function() {
				if (this[lm] >= this.data[Gr]) throw new Error("Attempted to read past end of stream.");
				return 255 & t[bm](this.pos++)
			}, this[ym] = function(t) {
				for (var i = [], n = 0; t > n; n++) i.push(this.readByte());
				return i
			}, this[gm] = function(t) {
				for (var i = "", n = 0; t > n; n++) i += String.fromCharCode(this[vm]());
				return i
			}, this.readUnsigned = function() {
				var t = this[ym](2);
				return (t[1] << 8) + t[0]
			}
		},
		Zz = function(t, i) {
			for (var n, e, s = 0, r = function(t) {
					for (var n = 0, e = 0; t > e; e++) i[bm](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
					return n
				}, h = [], a = 1 << t, o = a + 1, f = t + 1, _ = [], c = function() {
					_ = [], f = t + 1;
					for (var i = 0; a > i; i++) _[i] = [i];
					_[a] = [], _[o] = null
				};;)
				if (e = n, n = r(f), n !== a) {
					if (n === o) break;
					if (n < _.length) e !== a && _[Vr](_[e][Oo](_[n][0]));
					else {
						if (n !== _[Gr]) throw new Error(mm);
						_.push(_[e][Oo](_[e][0]))
					}
					h.push[uh](h, _[n]), _.length === 1 << f && 12 > f && f++
				} else c();
			return h
		},
		Jz = function(t, i) {
			i || (i = {});
			var n = function(i) {
					for (var n = [], e = 0; i > e; e++) n.push(t[ym](3));
					return n
				},
				e = function() {
					var i, n;
					n = "";
					do i = t.readByte(), n += t[gm](i); while (0 !== i);
					return n
				},
				s = function() {
					var e = {};
					if (e.sig = t.read(3), e[Em] = t.read(3), pm !== e.sig) throw new Error(xm);
					e[Za] = t.readUnsigned(), e.height = t.readUnsigned();
					var s = Vz(t[vm]());
					e[Tm] = s.shift(), e[wm] = Xz(s[Wr](0, 3)), e[Om] = s.shift(), e[Sm] = Xz(s.splice(0, 3)), e.bgColor = t[vm](), e[jm] = t[vm](), e[Tm] && (e[Rf] = n(1 << e[Sm] + 1)), i[Im] && i[Im](e)
				},
				r = function(n) {
					var s = function(n) {
							var e = (t[vm](), Vz(t.readByte()));
							n[km] = e.splice(0, 3), n[Af] = Xz(e[Wr](0, 3)), n[Am] = e[Lm](), n.transparencyGiven = e[Lm](), n.delayTime = t[Rm](), n[Mm] = t[vm](), n[Cm] = t[vm](), i.gce && i[Pm](n)
						},
						r = function(t) {
							t[Dm] = e(), i.com && i[zm](t)
						},
						h = function(n) {
							t[vm](), n[Nm] = t.readBytes(12), n[Bm] = e(), i[$m] && i.pte(n)
						},
						a = function(n) {
							var s = function(n) {
									t.readByte(), n[Fm] = t.readByte(), n.iterations = t[Rm](), n.terminator = t.readByte(), i[Gm] && i.app.NETSCAPE && i.app[qm](n)
								},
								r = function(t) {
									t.appData = e(), i.app && i[Gm][t[Ym]] && i[Gm][t[Ym]](t)
								};
							switch (t[vm](), n[Ym] = t.read(8), n[Hm] = t[gm](3), n[Ym]) {
								case "NETSCAPE":
									s(n);
									break;
								default:
									r(n)
							}
						},
						o = function(t) {
							t.data = e(), i[Fm] && i.unknown(t)
						};
					switch (n.label = t.readByte(), n[Um]) {
						case 249:
							n[Wm] = Pm, s(n);
							break;
						case 254:
							n.extType = zm, r(n);
							break;
						case 1:
							n[Wm] = $m, h(n);
							break;
						case 255:
							n[Wm] = Gm, a(n);
							break;
						default:
							n.extType = Fm, o(n)
					}
				},
				h = function(s) {
					var r = function(t, i) {
						for (var n = new Array(t.length), e = t.length / i, s = function(e, s) {
								var r = t.slice(s * i, (s + 1) * i);
								n[Wr].apply(n, [e * i, i].concat(r))
							}, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
							for (var f = r[o]; e > f; f += h[o]) s(f, a), a++;
						return n
					};
					s.leftPos = t[Rm](), s.topPos = t[Rm](), s[Za] = t[Rm](), s[Ja] = t[Rm]();
					var h = Vz(t[vm]());
					s.lctFlag = h[Lm](), s.interlaced = h.shift(), s[Om] = h.shift(), s[km] = h.splice(0, 2), s[Xm] = Xz(h.splice(0, 3)), s[Vm] && (s.lct = n(1 << s[Xm] + 1)), s[Km] = t[vm]();
					var a = e();
					s[Pf] = Zz(s[Km], a), s.interlaced && (s.pixels = r(s[Pf], s[Za])), i[Yc] && i.img(s)
				},
				a = function() {
					var n = {};
					switch (n.sentinel = t[vm](), String.fromCharCode(n.sentinel)) {
						case "!":
							n.type = Zm, r(n);
							break;
						case ",":
							n[wo] = Yc, h(n);
							break;
						case ";":
							n.type = Jm, i.eof && i[Jm](n);
							break;
						default:
							throw new Error(Qm + n.sentinel.toString(16))
					}
					Jm !== n[wo] && setTimeout(a, 0)
				},
				o = function() {
					s(), setTimeout(a, 0)
				};
			o()
		},
		Qz = "";
	i[Nl] && i.addEventListener(tE, function(t) {
		if (t[iE] && t.shiftKey && t[nE] && 73 == t.keyCode) {
			var i = sz[Uc] + eE + sz.version + sE + sz[rE] + co + sz.about + co + sz[hE] + Qz;
			sz[aE](i)
		}
	}, !1);
	var tN = oE;
	Qz = fE + decodeURIComponent(_E);
	var iN, nN, eN, sN = t,
		rN = cE,
		hN = uE,
		aN = dE,
		oN = lE,
		fN = vE,
		_N = bE,
		cN = yE,
		uN = gE,
		dN = mE,
		lN = EE,
		vN = pE,
		bN = xE,
		yN = TE,
		gN = wE,
		mN = OE,
		EN = SE,
		pN = jE,
		xN = IE,
		TN = kE,
		wN = AE,
		ON = LE,
		SN = sN[oN + RE];
	SN && (nN = sN[gN + ME][fN + CE], SN[qr](sN, ne, EN), SN[qr](sN, ee, TN), SN[qr](sN, function() {
		IN && IN == tN && (NN = !1)
	}, pN));
	var jN, IN, kN, AN = 111,
		LN = function(t, i) {
			i || (i = PE + hN + DE);
			try {
				eN[qr](t, i, 6 * AN, 1 * AN)
			} catch (n) {}
		},
		RN = !0,
		MN = !0,
		CN = !0,
		PN = !0,
		DN = !0,
		zN = !0,
		NN = !0,
		BN = KP ? 200 : 1024,
		$N = function(t, i) {
			return ie ? ie(t, i) || "" : void 0
		};
	if (i.createElement) {
		var FN = i[ao](zE);
		FN[ta][NE] = tu, FN.onload = function(t) {
			var i = t.target[BE],
				n = nN;
			if ("" === n || $E == n || FE == n) return void this[Yb][Yb].removeChild(this.parentNode);
			var e = i[GE][Uf];
			i[oN + RE](function() {
				te(e) != jN && (ZN[dh]._j5 = null)
			}, TN), this[Yb][Yb].removeChild(this[Yb])
		};
		var GN = i[ao](Gc);
		GN[ta][Za] = su, GN.style[Ja] = su, GN[ta][qE] = Qc, GN[Kc](FN), i[Iu][Kc](GN)
	}
	if (i[mN + YE]) {
		var qN = i[mN + YE](dN + HE);
		qN[ta].display = tu, qN[$f] = function(t) {
			var i = UE,
				n = t[Y_][i + WE];
			iN = n[XE].now();
			var e = n[lN + vN + VE + bN + KE][yN + wo];
			eN = e[rN + ZE], YP && (n = sN);
			var s = n[oN + RE];
			s[qr](sN, ae, TN), s.call(sN, oe, wN), s.call(sN, _e, ON), s[qr](sN, ce, pN), s.call(sN, se, xN), s[qr](sN, he, ON), s.call(sN, fe, TN), s.call(sN, re, TN), this[Yb][Yb][Sl](this[Yb])
		};
		var GN = i.createElement(Gc);
		GN[ta][Za] = su, GN[ta][Ja] = su, GN[ta][qE] = Qc, GN[Kc](qN), i.documentElement.appendChild(GN)
	}
	var YN = function(t, i, n, e) {
		this[zo] = t, this[Dd] = i, this.oldValue = e, this.value = n, this.propertyType = rz.PROPERTY_TYPE_STYLE
	};
	D(YN, pD);
	var HN = function(t) {
		this.id = ++PP, this._noc = {}, this._jd = {}, t && (this[JE] = t)
	};
	HN.prototype = {
		_jd: null,
		getStyle: function(t) {
			return this._jd[t]
		},
		setStyle: function(t, i) {
			var n = this._jd[t];
			return n === i || n && i && n.equals && n[QE](i) ? !1 : this._nmr(t, i, new YN(this, t, i, n), this._jd)
		},
		putStyles: function(t, i) {
			for (var n in t) {
				var e = t[n];
				i ? this._jd[n] = e : this.setStyle(n, e)
			}
		},
		_$w: !0,
		invalidateVisibility: function(t) {
			this._$w = !0, t || (this instanceof WN && this[tp]() && this.forEachEdge(function(t) {
				t._$w = !0
			}), this._i1() && this[$r]() && this[y_](function(t) {
				t[ip]()
			}))
		},
		onParentChanged: function() {
			this[ip]()
		},
		_i1: function() {
			return !this._4h && this instanceof KN
		},
		invalidate: function() {
			this[Eh](new ED(this, np, ep))
		},
		_no8: null,
		addUI: function(t, i) {
			if (this._no8 || (this._no8 = new nD), this._no8[e_](t.id)) return !1;
			var n = {
				id: t.id,
				ui: t,
				bindingProperties: i
			};
			this._no8.add(n);
			var e = new ED(this, np, Hh, n);
			return this.onEvent(e)
		},
		removeUI: function(t) {
			if (!this._no8) return !1;
			var i = this._no8.getById(t.id);
			return i ? (this._no8[Ur](i), void this.onEvent(new ED(this, np, Ur, i))) : !1
		},
		toString: function() {
			return this.$name || this.id
		},
		type: sp,
		_4h: !1,
		_hz: !0
	}, D(HN, LD), H(HN[dh], [rp, Uc, hp]), Z(HN.prototype, {
		enableSubNetwork: {
			get: function() {
				return this._4h
			},
			set: function(t) {
				if (this._4h != t) {
					var i = this._4h;
					this._4h = t, this instanceof WN && this._14(), this.onEvent(new pD(this, Fc, t, i))
				}
			}
		},
		bindingUIs: {
			get: function() {
				return this._no8
			}
		},
		styles: {
			get: function() {
				return this._jd
			},
			set: function(t) {
				if (this._jd != t) {
					for (var i in this._jd) i in t || (t[i] = n);
					this.putStyles(t), this._jd = t
				}
			}
		}
	});
	var UN = function(t, i, n) {
		this.id = ++PP, this._noc = {}, this._jd = {}, n && (this.$name = n), this.$from = t, this.$to = i, this.connect()
	};
	UN.prototype = {
		$uiClass: fs,
		_js: null,
		_hq: null,
		_ju: null,
		_j0: null,
		_f8: !1,
		type: ap,
		otherNode: function(t) {
			return t == this[o_] ? this.to : t == this.to ? this.from : void 0
		},
		connect: function() {
			if (this._f8) return !1;
			if (!this.$from || !this[v_]) return !1;
			if (this._f8 = !0, this[N_] == this.$to) return void this[N_]._ib(this);
			je(this[v_], this), Oe(this[N_], this), de(this[N_], this, this[v_]);
			var t = this.fromAgent,
				i = this.toAgent;
			if (t != i) {
				var n;
				this[N_]._e2 && (ve(t, this, i), n = !0), this[v_]._e2 && (ye(i, this, t), n = !0), n && de(t, this, i)
			}
		},
		disconnect: function() {
			if (!this._f8) return !1;
			if (this._f8 = !1, this.$from == this.$to) return void this.$from._d5(this);
			Se(this[N_], this), Ie(this[v_], this), le(this[N_], this, this[v_]);
			var t = this.fromAgent,
				i = this[h_];
			if (t != i) {
				var n;
				this.$from._e2 && (be(t, this, i), n = !0), this.$to._e2 && (ge(i, this, t), n = !0), n && le(t, this, i)
			}
		},
		isConnected: function() {
			return this._f8
		},
		isInvalid: function() {
			return !this.$from || !this.$to
		},
		isLooped: function() {
			return this.$from == this[v_]
		},
		getEdgeBundle: function(t) {
			return t ? this._3g() : this.isLooped() ? this.$from._4n : this.$from[r_](this.$to)
		},
		hasEdgeBundle: function() {
			var t = this.getEdgeBundle(!0);
			return t && t.edges.length > 1
		},
		_3g: function() {
			var t = this.fromAgent,
				i = this[h_];
			return t == i ? this.$from._e2 || this.$to._e2 ? null : this[N_]._4n : this.fromAgent.getEdgeBundle(this[h_])
		},
		_91: null,
		hasPathSegments: function() {
			return this._91 && !this._91[mf]()
		},
		isBundleEnabled: function() {
			return this[op] && !this[jc]()
		},
		firePathChange: function(t) {
			this[Eh](new pD(this, fp, t))
		},
		addPathSegment: function(t, i, n) {
			var e = new Nz(i || Mz, t);
			this._91 || (this._91 = new nD), this._91[Hh](e, n), this[_p](e)
		},
		addPathSegement: function() {
			return sz[Ph]('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment[uh](this, arguments)
		},
		removePathSegmentByIndex: function(t) {
			if (!this._91) return !1;
			var i = this._91[kl](t);
			i && (this._91.remove(i), this[_p](i))
		},
		removePathSegment: function(t) {
			return this._91 ? (this._91[Ur](t), void this[_p](t)) : !1
		},
		movePathSegment: function(t, i, n) {
			if (!this._91) return !1;
			if (t = t || 0, i = i || 0, sz.isNumber(n)) {
				var e = this._91.getByIndex(n);
				return e ? (e.move(t, i), void this[_p]()) : !1
			}
			l(function(n) {
				n.move(t, i)
			}), this[_p]()
		},
		move: function(t, i) {
			return this._91 ? (this._91[Df](function(n) {
				n[lv](t, i)
			}, this), void this[_p]()) : !1
		},
		validateEdgeBundle: function() {}
	}, D(UN, HN), Z(UN.prototype, {
		pathSegments: {
			get: function() {
				return this._91
			},
			set: function(t) {
				sz.isArray(t) && (t = new nD(t)), this._91 = t, this.firePathChange()
			}
		},
		from: {
			get: function() {
				return this.$from
			},
			set: function(t) {
				if (this.$from != t) {
					var i = new pD(this, o_, t, this[N_]);
					this[Jd](i) !== !1 && (this.disconnect(), this[N_] = t, this.connect(), this[Eh](i))
				}
			}
		},
		to: {
			get: function() {
				return this.$to
			},
			set: function(t) {
				if (this.$to != t) {
					var i = new pD(this, cp, t, this.$to);
					this[Jd](i) !== !1 && (this.disconnect(), this[v_] = t, this[up](), this.onEvent(i))
				}
			}
		},
		fromAgent: {
			get: function() {
				return this.$from ? this[N_]._e2 || this[N_] : null
			}
		},
		toAgent: {
			get: function() {
				return this.$to ? this[v_]._e2 || this[v_] : null
			}
		}
	}), H(UN.prototype, [dp, {
		name: op,
		value: !0
	}, Lc]);
	var WN = function(t, i, n) {
		this.id = ++PP, this._noc = {}, this._jd = {}, t && (this.$name = t), this.$image = lp, this[vp] = cD[Ad], this.$location = {
			x: i || 0,
			y: n || 0
		}, this._linkedNodes = {}
	};
	WN[dh] = {
		$uiClass: _s,
		_e2: null,
		forEachEdge: function(t, i, n) {
			return !n && this._lk && this._lk.forEach(t, i) === !1 ? !1 : Ae(this, t, i)
		},
		forEachOutEdge: function(t, i) {
			return Le(this, t, i)
		},
		forEachInEdge: function(t, i) {
			return Re(this, t, i)
		},
		getEdges: function() {
			var t = [];
			return this[b_](function(i) {
				t[Vr](i)
			}), t
		},
		_ht: null,
		_gy: null,
		_je: null,
		_hv: null,
		_nmy: 0,
		_9w: 0,
		hasInEdge: function() {
			return null != this._ht
		},
		hasOutEdge: function() {
			return null != this._gy
		},
		hasEdge: function() {
			return null != this._ht || null != this._gy || this.hasLoops()
		},
		linkedWith: function(t) {
			return t[o_] == this || t.to == this || t.fromAgent == this || t[h_] == this
		},
		hasEdgeWith: function(t) {
			var i = this[r_](t);
			return i && i[bp].length > 0
		},
		_lk: null,
		_4n: null,
		hasLoops: function() {
			return this._lk && this._lk.length > 0
		},
		_ib: function(t) {
			return this._lk || (this._lk = new nD, this._4n = new c$(this, this, this._lk)), this._4n._iu(t)
		},
		_d5: function(t) {
			return this._4n ? this._4n._d4(t) : void 0
		},
		getEdgeBundle: function(t) {
			return t == this ? this._4n : this._linkedNodes[t.id] || t._linkedNodes[this.id]
		},
		_77: function() {
			return this._nn1 && this._nn1[Gr]
		},
		_5k: function() {
			return this._83 && this._83.length
		},
		_9z: function() {
			return this._77() || this._5k()
		},
		_83: null,
		_nn1: null,
		_d7: function() {
			var t = this._e2,
				i = ue(this);
			if (t != i) {
				var n = ke(this);
				this._94(i), n.forEach(function(t) {
					var i = t[a_],
						n = t[h_],
						t = t[z_],
						e = t[N_]._e2,
						s = t[v_]._e2;
					i != n && (i && be(i, t, n || t.$to), n && ge(n, t, i || t.$from)), e != s && (e && ve(e, t, s || t[v_]), s && ye(s, t, e || t[N_]), de(e || t.$from, t, s || t[v_]))
				}, this)
			}
		},
		onParentChanged: function() {
			this.invalidateVisibility(), this._d7()
		},
		_85: null,
		_14: function() {
			var t;
			if (this._4h ? t = null : (t = this._e2, t || this._gp !== !1 || (t = this)), this._85 == t) return !1;
			if (this._85 = t, this._fy && this._fy._j4.length)
				for (var i, n = this._fy._j4, e = 0, s = n.length; s > e; e++) i = n[e], i instanceof WN && i._94(t)
		},
		setLocation: function(t, i) {
			if (this.$location && this[yp].x == t && this.$location.y == i) return !1;
			var n = new pD(this, gp, this[yp], {
				x: t,
				y: i
			});
			return this[Jd](n) === !1 ? !1 : (this.$location ? (this[yp].x = t, this[yp].y = i) : this.$location = new rD(t, i), this[Eh](n), !0)
		},
		_dv: null,
		addFollower: function(t) {
			return null == t ? !1 : t[mp] = this
		},
		removeFollower: function(t) {
			return this._dv && this._dv.contains(t) ? t[mp] = null : !1
		},
		hasFollowers: function() {
			return this._dv && !this._dv[mf]()
		},
		toFollowers: function() {
			return this.hasFollowers() ? this._dv.toDatas() : null
		},
		clearFollowers: function() {
			this[c_]() && (this.toFollowers(), l(this[Ep](), function(t) {
				t[mp] = null
			}))
		},
		getFollowerIndex: function(t) {
			return this._dv && this._dv[Pc](t) ? this._dv.indexOf(t) : -1
		},
		setFollowerIndex: function(t, i) {
			return this._dv && this._dv[Pc](t) ? void this._dv[d_](t, i) : -1
		},
		getFollowerCount: function() {
			return this._dv ? this._dv[Gr] : 0
		},
		_92: function() {
			return this._dv ? this._dv : (this._dv = new nD, this._dv)
		},
		isFollow: function(t) {
			if (!t || !this._host) return !1;
			for (var i = this._host; i;) {
				if (i == t) return !0;
				i = i._host
			}
			return !1
		},
		_94: function(t) {
			return t == this._e2 ? !1 : (this._e2 = t, this[ip](), void this._14())
		},
		type: pp
	}, D(WN, HN), Z(WN.prototype, {
		loops: {
			get: function() {
				return this._lk
			}
		},
		edgeCount: {
			get: function() {
				return this._nmy + this._9w
			}
		},
		agentNode: {
			get: function() {
				return this._e2 || this
			}
		},
		host: {
			set: function(t) {
				if (this == t || t == this._host) return !1;
				var i = new pD(this, mp, this._host, t);
				if (!1 === this.beforeEvent(i)) return !1;
				var n = null,
					e = null,
					s = this._host;
				if (null != t && (n = new pD(t, xp, null, this), !1 === t[Jd](n))) return !1;
				if (null != s && (e = new pD(s, Tp, null, this), !1 === s.beforeEvent(e))) return !1;
				if (this._host = t, null != t) {
					var r = t._92();
					r[Hh](this)
				}
				if (null != s) {
					var r = s._92();
					r[Ur](this)
				}
				return this[Eh](i), null != t && t[Eh](n), null != s && s[Eh](e), !0
			},
			get: function() {
				return this._host
			}
		}
	}), H(WN.prototype, [gp, wp, xy, So, Op]), Z(WN[dh], {
		x: {
			get: function() {
				return this[gp].x
			},
			set: function(t) {
				t != this.location.x && (this[gp] = new rD(t, this[gp].y))
			}
		},
		y: {
			get: function() {
				return this[gp].y
			},
			set: function(t) {
				t != this[gp].y && (this.location = new rD(this[gp].x, t))
			}
		}
	});
	var XN = function(t, i) {
		t instanceof $z && (i = t, t = n), z(this, XN, [t]), this[Sp] = i || new $z, this[xy] = this.$path, this[Op] = null, this[rp] = hr, tD.SHAPENODE_STYLES || (tD.SHAPENODE_STYLES = {}, tD.SHAPENODE_STYLES[QN[jp]] = !1), this[Ip](tD.SHAPENODE_STYLES)
	};
	XN[dh] = {
		$uiClass: hr,
		type: kp,
		moveTo: function(t, i) {
			this[Ap].moveTo(t, i), this.firePathChange()
		},
		lineTo: function(t, i) {
			this[Ap][g_](t, i), this.firePathChange()
		},
		quadTo: function(t, i, n, e) {
			this.path.quadTo(t, i, n, e), this[_p]()
		},
		curveTo: function(t, i, n, e, s, r) {
			this.path.curveTo(t, i, n, e, s, r), this.firePathChange()
		},
		arcTo: function(t, i, n, e, s) {
			this[Ap][Bb](t, i, n, e, s), this[_p]()
		},
		closePath: function() {
			this[Ap].closePath(), this.firePathChange()
		},
		clear: function() {
			this.path[wa](), this[_p]()
		},
		removePathSegmentByIndex: function(t) {
			this[Ap][Lp](t) !== !1 && this[_p]()
		},
		firePathChange: function() {
			this.path._6n = !0, this.onEvent(new pD(this, fp))
		}
	}, D(XN, WN), H(XN.prototype, [Ap]), Z(XN[dh], {
		pathSegments: {
			get: function() {
				return this[Ap][Rp]
			},
			set: function(t) {
				this[Ap].segments = t || [], this.firePathChange()
			}
		},
		length: {
			get: function() {
				return this[Ap].length
			}
		}
	}), sz[Mp] = XN;
	var VN = {
		_jv: {},
		register: function(t, i) {
			VN._jv[t] = i
		},
		getShape: function(t, i, e, s, r, h) {
			s === n && (s = i, r = e, i = 0, e = 0), s || (s = 50), r || (r = 50);
			var a = VN._jv[t];
			return a ? a.generator instanceof Function ? a.generator(i, e, s, r, h) : a : void 0
		},
		getRect: function(t, i, n, e, s, r, h) {
			return Me(h || new $z, t, i, n, e, s, r)
		},
		getAllShapes: function(t, i, n, e, s) {
			var r = {};
			for (var h in VN._jv) {
				var a = VN[Sc](h, t, i, n, e, s);
				a && (r[h] = a)
			}
			return r
		},
		createRegularShape: function(t, i, n, e, s) {
			return $e(t, i, n, e, s)
		}
	};
	Qe(), ts[dh] = {
		type: Cp
	}, D(ts, XN), sz[Pp] = ts, is.prototype = {
		_ga: function(t) {
			var i, n = t._jo;
			i = n ? n._fy : this[wl];
			var e = i[Ya](t);
			if (0 > e) throw new Error(Il + t + "' not exist in the box");
			for (; e >= 0;) {
				if (0 == e) return n instanceof WN ? n : null;
				e -= 1;
				var r = i.getByIndex(e);
				if (r = s(r)) return r
			}
			return null
		},
		forEachNode: function(t, i) {
			this.forEach(function(n) {
				return n instanceof WN && t[qr](i, n) === !1 ? !1 : void 0
			})
		},
		_43: null
	}, D(is, MD), Z(is[dh], {
		propertyChangeDispatcher: {
			get: function() {
				return this._$y
			}
		},
		currentSubNetwork: {
			get: function() {
				return this._43
			},
			set: function(t) {
				if (t && !t.enableSubNetwork && (t = null), this._43 != t) {
					var i = this._43;
					this._43 = t, this._$y[Eh](new pD(this, Dp, t, i))
				}
			}
		}
	}), tD.GROUP_TYPE = rz[zp], tD.GROUP_PADDING = 5, tD.GROUP_EXPANDED = !0, tD[Np] = {
		width: 60,
		height: 60
	};
	var KN = function(t, i, e) {
		z(this, KN, arguments), (i === n || e === n) && (this[yp][Bp] = !0), this[$p] = tD[Fp], this.$padding = tD[Gp], this[B_] = qz[qp], this[Yp] = tD[Np], this[Hp] = tD[Up]
	};
	KN[dh] = {
		type: Wp,
		$uiClass: ir,
		_9l: function() {
			return !this._gp && !this._e2
		},
		forEachOutEdge: function(t, i, n) {
			return Le(this, t, i) === !1 ? !1 : !n && this._9l() && this._83 ? this._83[Df](t, i) : void 0
		},
		forEachInEdge: function(t, i, n) {
			return Re(this, t, i) === !1 ? !1 : !n && this._9l() && this._nn1 ? this._nn1[Df](t, i) : void 0
		},
		forEachEdge: function(t, i, n) {
			return N(this, KN, b_, arguments) === !1 ? !1 : n || n || !this._9l() ? void 0 : this._nn1 && this._nn1.forEach(t, i) === !1 ? !1 : this._83 ? this._83.forEach(t, i) : void 0
		},
		hasInEdge: function(t) {
			return t ? null != this._ht : null != this._ht || this._77()
		},
		hasOutEdge: function(t) {
			return t ? null != this._gy : null != this._gy || this._5k()
		},
		hasEdge: function(t) {
			return t ? null != this._ht || null != this._gy : null != this._ht || null != this._gy || this._9z()
		}
	}, D(KN, WN), Z(KN.prototype, {
		expanded: {
			get: function() {
				return this._gp
			},
			set: function(t) {
				if (this._gp != t) {
					var i = new pD(this, Hp, t, this._gp);
					this[Jd](i) !== !1 && (this._gp = t, this._14(), this[Eh](i), this._e2 || ns[qr](this))
				}
			}
		}
	}), H(KN[dh], [Xp, Vp, Kp, Zp]), sz.Group = KN, es.prototype[wo] = Jp, D(es, WN), sz[Qp] = es;
	var ZN = function(t) {
		this._ji = new fD, this._84 = new fD, this._fp = new fD, this.id = ++PP, t && (this[Eo] = t)
	};
	ZN[dh] = {
		invalidate: function() {
			this[tx]()
		},
		_1q: !0,
		_ji: null,
		_84: null,
		_fp: null,
		_nno: !1,
		_jj: 1,
		_jl: 1,
		_hz: !0,
		_8a: 0,
		_6r: 0,
		_jo: null,
		_nni: null,
		borderColor: ix,
		borderLineDash: null,
		borderLineDashOffset: null,
		syncSelection: !0,
		syncSelectionStyles: !0,
		_1k: function() {
			this[nx] = oi(this[Op], this._8a, this._6r)
		},
		setMeasuredBounds: function(t, i, n, e) {
			return t instanceof Object && (n = t.x, e = t.y, i = t[Ja], t = t.width), this._ji.width == t && this._ji.height == i && this._ji.x == n && this._ji.y == e ? !1 : void this._ji[V_](n || 0, e || 0, t || 0, i || 0)
		},
		initialize: function() {},
		measure: function() {},
		draw: function() {},
		_82: function(t, i, n) {
			n[Jy] == rz[Lb] ? (t.shadowColor = n[Uy], t.shadowBlur = n[Hy] * i, t.shadowOffsetX = (n[Wy] || 0) * i, t.shadowOffsetY = (n.selectionShadowOffsetY || 0) * i) : this._2c(t, i, n)
		},
		_2c: function(t, i, n) {
			var e = n[Vy] || 0;
			n.selectionBackgroundColor && (t[Jb] = n[ex], t.fillRect(this._84.x - e / 2, this._84.y - e / 2, this._84[Za] + e, this._84.height + e)), t[ry] = n[Uy], t[po] = e, t[sx](this._84.x - e / 2, this._84.y - e / 2, this._84[Za] + e, this._84[Ja] + e)
		},
		_j5: function(t, i, n, e) {
			if (!this._hz) return !1;
			if (this[rx] || (n = this[hx]), (n && !this[ax] || !e) && (e = this), t[Zb](), 1 != this[ox] && (t.globalAlpha = this.$alpha), t[Do](this.$x, this.$y), this.$rotatable && this[ef] && t[So](this.$_hostRotate), (this[fx] || this[_x]) && t[Do](this.offsetX, this[_x]), this[sf] && t.rotate(this.$rotate), this[cx] && this._nni && t[Do](-this._nni.x, -this._nni.y), this[cy] && (t.shadowColor = this.shadowColor, t[uy] = this.shadowBlur * i, t.shadowOffsetX = this[dy] * i, t.shadowOffsetY = this[ly] * i), n && e[Jy] == rz[ux] && (this._2c(t, i, e), n = !1), this._$v() && this._miShape && !this._miShape._empty) {
				this._miShape.validate();
				var s = {
					lineWidth: this[of],
					strokeStyle: this[dx],
					lineDash: this[lx],
					lineDashOffset: this[vx],
					fillColor: this[bx],
					fillGradient: this._nmackgroundGradient,
					lineCap: Sb,
					lineJoin: Ko
				};
				this._miShape[Lo](t, i, s, n, e), n = !1, t.shadowColor = ug
			}
			t.beginPath(), this.draw(t, i, n, e), t[_y]()
		},
		invalidateData: function() {
			this[yx] = !0, this._1q = !0
		},
		invalidateSize: function() {
			this[rf] = !0, this._1q = !0
		},
		invalidateRender: function() {
			this._1q = !0
		},
		_5e: function() {},
		_$v: function() {
			return this.$backgroundColor || this[gx] || this.$border
		},
		_4f: function() {
			return this[bx] || this[gx]
		},
		doValidate: function() {
			return this[yx] && (this[yx] = !1, this.measure() !== !1 && (this.$invalidateSize = !0)), this[rf] && this.validateSize && this.validateSize(), Wn[qr](this) ? (this[Ef] = !0, this.onBoundsChanged && this.onBoundsChanged(), !0) : this[mx] ? (this.$invalidateLocation = !1, !0) : void 0
		},
		validate: function() {
			var t = this._hz;
			return this.$invalidateVisibility && (this[Ex] = !1, this._hz = this[px], !this._hz || (this[gf] || this[xx]) && this._5e() !== !1 || (this._hz = !1)), this._hz ? (this._1q = !1, this._nno || (this[Tx](), this._nno = !0), this[wx]()) : t != this._hz
		},
		_hy: function(t, i) {
			return t -= this.$x, i -= this.$y, Un.call(this, {
				x: t,
				y: i
			})
		},
		hitTest: function(t, i, n, e) {
			if (t -= this.$x, i -= this.$y, !this._fp.intersectsPoint(t, i, n)) return !1;
			var s = Un[qr](this, {
				x: t,
				y: i
			});
			return t = s.x, i = s.y, !e && this._$v() && this._miShape && this._miShape[Dc](t, i, n, !1, this[of], this[bx] || this[gx]) ? !0 : this[Ox](t, i, n)
		},
		doHitTest: function(t, i, n) {
			return this._ji[yo](t, i, n)
		},
		hitTestByBounds: function(t, i, n, e) {
			var s = this._hy(t, i);
			return !e && this._$v() && this._miShape && this._miShape[Dc](t, i, n, !1, this.$border, this[bx] || this.$backgroundGradient) ? !0 : this._ji[yo](s.x, s.y, n)
		},
		onDataChanged: function() {
			this[yx] = !0, this._1q = !0, this[Ex] = !0
		},
		getBounds: function() {
			var t = this._fp[Xr]();
			return t[Nb](this.x, this.y), this[s_] && (this.parent[So] && Di(t, this.parent[So], t), t[Nb](this[s_].x || 0, this[s_].y || 0)), t
		},
		destroy: function() {
			this._ieed = !0
		},
		_ec: !1
	}, Z(ZN[dh], {
		originalBounds: {
			get: function() {
				return this._ji
			}
		},
		data: {
			get: function() {
				return this[gf]
			},
			set: function(t) {
				if (this[gf] != t) {
					var i = this[gf];
					this[gf] = t, this[Sx](t, i)
				}
			}
		},
		parent: {
			get: function() {
				return this._jo
			}
		},
		showOnTop: {
			get: function() {
				return this._ec
			},
			set: function(t) {
				t != this._ec && (this._ec = t, this._1q = !0, this._jo && this._jo._nnr && this._jo._nnr(this))
			}
		}
	}), rs(ZN[dh], {
		visible: {
			value: !0,
			validateFlags: [jx, Ix]
		},
		showEmpty: {
			validateFlags: [jx]
		},
		anchorPosition: {
			value: cD[Ad],
			validateFlags: [kx]
		},
		position: {
			value: cD[Ad],
			validateFlags: [Ix]
		},
		offsetX: {
			value: 0,
			validateFlags: [Ix]
		},
		offsetY: {
			value: 0,
			validateFlags: [Ix]
		},
		layoutByAnchorPoint: {
			value: !0,
			validateFlags: [Ax, kx]
		},
		padding: {
			value: 0,
			validateFlags: [Ax]
		},
		border: {
			value: 0,
			validateFlags: [Ax]
		},
		borderRadius: {
			value: tD[Lx]
		},
		showPointer: {
			value: !1,
			validateFlags: [Ax]
		},
		pointerX: {
			value: 0,
			validateFlags: [Ax]
		},
		pointerY: {
			value: 0,
			validateFlags: [Ax]
		},
		pointerWidth: {
			value: tD[Rx]
		},
		backgroundColor: {
			validateFlags: [Ax]
		},
		backgroundGradient: {
			validateFlags: [Ax, Mx]
		},
		selected: {
			value: !1,
			validateFlags: [Ax]
		},
		selectionBorder: {
			value: tD.SELECTION_BORDER,
			validateFlags: [Ax]
		},
		selectionShadowBlur: {
			value: tD.SELECTION_SHADOW_BLUR,
			validateFlags: [Ax]
		},
		selectionColor: {
			value: tD.SELECTION_COLOR,
			validateFlags: [Ax]
		},
		selectionType: {
			value: tD.SELECTION_TYPE,
			validateFlags: [Ax]
		},
		selectionShadowOffsetX: {
			value: 0,
			validateFlags: [Ax]
		},
		selectionShadowOffsetY: {
			value: 0,
			validateFlags: [Ax]
		},
		shadowBlur: {
			value: 0,
			validateFlags: [Ax]
		},
		shadowColor: {
			validateFlags: [Ax]
		},
		shadowOffsetX: {
			value: 0,
			validateFlags: [Ax]
		},
		shadowOffsetY: {
			value: 0,
			validateFlags: [Ax]
		},
		renderColorBlendMode: {},
		renderColor: {},
		x: {
			value: 0,
			validateFlags: [Ix]
		},
		y: {
			value: 0,
			validateFlags: [Ix]
		},
		rotatable: {
			value: !0,
			validateFlags: [Cx, Ax]
		},
		rotate: {
			value: 0,
			validateFlags: [Cx, Ax]
		},
		_hostRotate: {
			validateFlags: [Cx]
		},
		lineWidth: {
			value: 0,
			validateFlags: [jv]
		},
		alpha: {
			value: 1
		}
	});
	var JN = [rz[Px], rz[Dx], rz.PROPERTY_TYPE_CLIENT];
	as.prototype = {
		removeBinding: function(t) {
			for (var i = JN[Gr]; --i >= 0;) {
				var n = JN[i],
					e = this[n];
				for (var s in e) {
					var r = e[s];
					Array.isArray(r) ? (v(r, function(i) {
						return i.target == t
					}, this), r[Gr] || delete e[s]) : r[Y_] == t && delete e[s]
				}
			}
		},
		_2d: function(t, i, n) {
			if (!n && (n = this[i[_l] || rz[Px]], !n)) return !1;
			var e = n[t];
			e ? (Array.isArray(e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
		},
		_2z: function(t, i, n, e, s, r) {
			t = t || rz.PROPERTY_TYPE_ACCESSOR;
			var h = this[t];
			if (!h) return !1;
			var a = {
				property: i,
				propertyType: t,
				bindingProperty: e,
				target: n,
				callback: s,
				invalidateSize: r
			};
			this._2d(i, a, h)
		},
		onBindingPropertyChange: function(t, i, n, e) {
			var s = this[n || rz[Px]];
			if (!s) return !1;
			var r = s[i];
			return r ? (t._1q = !0, hs(t, r, n, e), !0) : !1
		},
		initBindingProperties: function(t, i) {
			for (var e = JN[Gr]; --e >= 0;) {
				var s = JN[e],
					r = this[s];
				for (var h in r) {
					var a = r[h];
					if (a.bindingProperty) {
						var o = a[Y_];
						if (o) {
							if (!(o instanceof ZN || (o = t[o]))) continue
						} else o = t;
						var f;
						f = i === !1 ? t[H_](a[U_], s) : s == rz[Dx] ? t[kc].getStyle(t.$data, a[U_]) : t.$data[a[U_]], f !== n && (o[a[zx]] = f)
					}
				}
			}
		}
	};
	var QN = {};
	QN.SELECTION_COLOR = Nx, QN[Bx] = $x, QN[Fx] = "selection.shadow.blur", QN[Gx] = "selection.shadow.offset.x", QN[qx] = "selection.shadow.offset.y", QN[Cb] = Yx, QN.RENDER_COLOR = Hx, QN[Ux] = "render.color.blend.mode", QN.ALPHA = Wx, QN.SHADOW_BLUR = Xx, QN[Vx] = Kx, QN[Zx] = Jx, QN[Qx] = tT, QN.SHAPE_STROKE = iT, QN[nT] = eT, QN[sT] = rT, QN[hT] = "shape.line.dash.offset", QN[aT] = oT, QN.SHAPE_FILL_GRADIENT = fT, QN.SHAPE_OUTLINE = _T, QN.SHAPE_OUTLINE_STYLE = cT, QN[uT] = dT, QN[lT] = vT, QN[bT] = yT, QN.BACKGROUND_COLOR = gT, QN[mT] = ET, QN[pT] = xT, QN.BORDER_COLOR = TT, QN[wT] = OT, QN[ST] = "border.line.dash.offset", QN[Lx] = jT, QN[IT] = Kp, QN.IMAGE_BACKGROUND_COLOR = "image.background.color", QN.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient", QN.IMAGE_BORDER = kT, QN.IMAGE_BORDER_STYLE = QN.IMAGE_BORDER_COLOR = AT, QN.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", QN[LT] = "image.border.line.dash.offset", QN[RT] = QN[MT] = CT, QN[PT] = DT, QN[zT] = NT, QN.IMAGE_ADJUST = BT, QN[$T] = FT, QN.LABEL_ROTATE = GT, QN.LABEL_POSITION = qT, QN[YT] = HT, QN[UT] = "label.anchor.position", QN[WT] = XT, QN[VT] = KT, QN[ZT] = JT, QN[QT] = tw, QN[iw] = nw, QN[ew] = sw, QN[rw] = hw, QN[aw] = ow, QN[fw] = _w, QN[cw] = uw, QN[dw] = lw, QN[vw] = bw, QN.LABEL_BORDER = yw, QN[gw] = mw, QN.LABEL_BACKGROUND_COLOR = "label.background.color", QN.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", QN.LABEL_ROTATABLE = Ew, QN[pw] = xw, QN.LABEL_SHADOW_COLOR = Tw, QN[ww] = "label.shadow.offset.x", QN.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", QN.LABEL_Z_INDEX = Ow, QN.LABEL_ON_TOP = Sw, QN[jw] = "group.background.color", QN[Iw] = "group.background.gradient", QN[kw] = Aw, QN.GROUP_STROKE_STYLE = Lw, QN[Rw] = "group.stroke.line.dash", QN.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", QN[Mw] = "edge.bundle.label.rotate", QN.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", QN.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", QN[Cw] = "edge.bundle.label.color", QN.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", QN[Pw] = "edge.bundle.label.font.family", QN[Dw] = "edge.bundle.label.font.style", QN[zw] = "edge.bundle.label.padding", QN[Nw] = "edge.bundle.label.pointer.width", QN.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", QN[Bw] = "edge.bundle.label.radius", QN[$w] = "edge.bundle.label.offset.x", QN[Fw] = "edge.bundle.label.offset.y", QN.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", QN[Gw] = "edge.bundle.label.border.color", QN[qw] = "edge.bundle.label.background.color", QN.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", QN.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", QN[Yw] = Hw, QN[Uw] = Ww, QN[Xw] = Vw, QN[Kw] = Zw, QN[Jw] = Qw, QN.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset", QN[tO] = iO, QN[nO] = eO, QN[sO] = rO, QN[Nc] = hO, QN[_c] = aO, QN[mc] = oO, QN.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent", QN.EDGE_SPLIT_PERCENT = fO, QN[uc] = _O, QN[vc] = cO, QN[bc] = uO, QN[dO] = lO, QN[vO] = bO, QN.ARROW_FROM = yO, QN[gO] = mO, QN.ARROW_FROM_OFFSET = EO, QN[pO] = xO, QN.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style", QN[TO] = wO, QN.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style", QN[OO] = SO, QN[jO] = "arrow.from.line.dash.offset", QN[IO] = "arrow.from.fill.color", QN.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient", QN[kO] = AO, QN[LO] = RO, QN.ARROW_TO = MO, QN[CO] = PO, QN.ARROW_TO_OFFSET = DO, QN[zO] = NO, QN.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style", QN[BO] = $O, QN[FO] = "arrow.to.outline.style", QN.ARROW_TO_LINE_DASH = GO, QN[qO] = "arrow.to.line.dash.offset", QN.ARROW_TO_FILL_COLOR = YO, QN[HO] = "arrow.to.fill.gradient", QN[UO] = WO, QN[XO] = VO;
	var tB = new as,
		iB = rz[Px],
		nB = rz.PROPERTY_TYPE_STYLE,
		eB = !1;
	tB._2z(nB, QN.SELECTION_TYPE, null, Jy), tB._2z(nB, QN[Bx], null, Vy), tB._2z(nB, QN[Fx], null, Hy), tB._2z(nB, QN.SELECTION_COLOR, null, Uy), tB._2z(nB, QN[Gx], null, "selectionShadowOffsetX"), tB._2z(nB, QN.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), tB._2z(iB, Uc, Um, Eo), tB._2z(nB, QN.LABEL_VISIBLE, Um, KO), tB._2z(nB, QN[ZO], Um, bf), tB._2z(nB, QN.LABEL_ANCHOR_POSITION, Um, Op), tB._2z(nB, QN[WT], Um, JO), tB._2z(nB, QN.LABEL_FONT_SIZE, Um, gu), tB._2z(nB, QN.LABEL_BORDER, Um, Nv), tB._2z(nB, QN[gw], Um, dx), tB._2z(nB, QN.LABEL_BACKGROUND_COLOR, Um, QO), tB._2z(nB, QN.LABEL_ON_TOP, Um, tS), eB || (tB._2z(nB, QN.SHADOW_BLUR, null, uy), tB._2z(nB, QN[Vx], null, cy), tB._2z(nB, QN.SHADOW_OFFSET_X, null, dy), tB._2z(nB, QN.SHADOW_OFFSET_Y, null, ly), tB._2z(nB, QN[ZT], Um, iS), tB._2z(nB, QN.LABEL_FONT_STYLE, Um, yu), tB._2z(nB, QN[vw], Um, nS), tB._2z(nB, QN[eS], Um, So), tB._2z(nB, QN[iw], Um, Kp), tB._2z(nB, QN[ew], Um, sS), tB._2z(nB, QN[rw], Um, rS), tB._2z(nB, QN.LABEL_RADIUS, Um, hS), tB._2z(nB, QN.LABEL_OFFSET_X, Um, fx), tB._2z(nB, QN.LABEL_OFFSET_Y, Um, _x), tB._2z(nB, QN[aS], Um, oS), tB._2z(nB, QN[fS], Um, _f), tB._2z(nB, QN.LABEL_SIZE, Um, wp), tB._2z(nB, QN[pw], Um, uy), tB._2z(nB, QN[_S], Um, cy), tB._2z(nB, QN[ww], Um, dy), tB._2z(nB, QN[cS], Um, ly), tB._2z(nB, QN.LABEL_Z_INDEX, Um, hp), tB._2z(nB, QN.RENDER_COLOR, null, yy), tB._2z(nB, QN[Ux], null, gy), tB._2z(nB, QN.ALPHA, null, Wx));
	var sB = new as;
	sB._2z(iB, gp), sB._2z(iB, Op, null, uS), sB._2z(iB, So, null, So), eB || (sB._2z(nB, QN[dS], null, QO), sB._2z(nB, QN.BACKGROUND_GRADIENT, null, _f), sB._2z(nB, QN.PADDING, null, Kp), sB._2z(nB, QN[pT], null, Nv), sB._2z(nB, QN.BORDER_RADIUS, null, hS), sB._2z(nB, QN[lS], null, dx), sB._2z(nB, QN[wT], null, lx), sB._2z(nB, QN[ST], null, vx)), sB._2z(iB, xy, xy, Eo, vS), sB._2z(iB, wp, xy, wp), sB._2z(nB, QN[bS], xy, po), sB._2z(nB, QN[nT], xy, ry), sB._2z(nB, QN.SHAPE_FILL_COLOR, xy, tg), sB._2z(nB, QN[bT], xy, yf), eB || (sB._2z(nB, QN.IMAGE_ADJUST, xy, yS), sB._2z(nB, QN.SHAPE_OUTLINE, xy, gS), sB._2z(nB, QN[mS], xy, Qy), sB._2z(nB, QN[ES], xy, ig), sB._2z(nB, QN.SHAPE_LINE_DASH, xy, wf), sB._2z(nB, QN[hT], xy, Of), sB._2z(nB, QN[uT], xy, Ky), sB._2z(nB, QN.LINE_JOIN, xy, Zy), sB._2z(nB, QN.IMAGE_BACKGROUND_COLOR, xy, QO), sB._2z(nB, QN[pS], xy, _f), sB._2z(nB, QN.IMAGE_PADDING, xy, Kp), sB._2z(nB, QN[xS], xy, Nv), sB._2z(nB, QN.IMAGE_BORDER_RADIUS, xy, hS), sB._2z(nB, QN[TS], xy, dx), sB._2z(nB, QN.IMAGE_BORDER_LINE_DASH, xy, lx), sB._2z(nB, QN[LT], xy, vx), sB._2z(nB, QN[zT], xy, hp), sB._2z(nB, QN.IMAGE_ALPHA, xy, Wx)), sB._2z(iB, Hp, null, null, wS), sB._2z(iB, Fc, null, null, wS);
	var rB = new as;
	rB._2z(iB, Vp, null, null, OS), rB._2z(iB, Zp, null, null, OS), rB._2z(iB, Xp, null, null, OS), rB._2z(iB, Kp, null, null, OS), rB._2z(nB, QN.GROUP_BACKGROUND_COLOR, SS, tg), rB._2z(nB, QN[Iw], SS, ig), rB._2z(nB, QN[kw], SS, po), rB._2z(nB, QN.GROUP_STROKE_STYLE, SS, ry), rB._2z(nB, QN.GROUP_STROKE_LINE_DASH, SS, wf), rB._2z(nB, QN.GROUP_STROKE_LINE_DASH_OFFSET, SS, Of);
	var hB = new as;
	hB._2z(iB, o_, SS, null, jS), hB._2z(iB, cp, SS, null, jS), hB._2z(iB, dp, SS, null, jS), hB._2z(nB, QN.EDGE_WIDTH, SS, po), hB._2z(nB, QN.EDGE_COLOR, SS, ry), hB._2z(nB, QN[IS], SS, kS), hB._2z(nB, QN.ARROW_TO, SS, AS), eB || (hB._2z(nB, QN[dO], null, Mc, jS), hB._2z(nB, QN[vO], null, Cc, jS), hB._2z(nB, QN[Xw], SS, gS), hB._2z(nB, QN.EDGE_OUTLINE_STYLE, SS, Qy), hB._2z(nB, QN.EDGE_LINE_DASH, SS, wf), hB._2z(nB, QN.EDGE_LINE_DASH_OFFSET, SS, Of), hB._2z(nB, QN[mc], SS, null, jS), hB._2z(nB, QN.EDGE_FROM_OFFSET, SS, null, jS), hB._2z(nB, QN.EDGE_TO_OFFSET, SS, null, jS), hB._2z(nB, QN[uT], SS, Ky), hB._2z(nB, QN.LINE_JOIN, SS, Zy), hB._2z(iB, fp, null, null, jS, !0), hB._2z(iB, Lc, null, null, jS, !0), hB._2z(nB, QN[gO], SS, LS), hB._2z(nB, QN[RS], SS, MS), hB._2z(nB, QN.ARROW_FROM_STROKE, SS, CS), hB._2z(nB, QN[PS], SS, DS), hB._2z(nB, QN[TO], SS, zS), hB._2z(nB, QN[NS], SS, "fromArrowOutlineStyle"), hB._2z(nB, QN.ARROW_FROM_FILL_COLOR, SS, BS), hB._2z(nB, QN[$S], SS, "fromArrowFillGradient"), hB._2z(nB, QN[OO], SS, FS), hB._2z(nB, QN.ARROW_FROM_LINE_DASH_OFFSET, SS, "fromArrowLineDashOffset"), hB._2z(nB, QN.ARROW_FROM_LINE_JOIN, SS, GS), hB._2z(nB, QN[kO], SS, qS), hB._2z(nB, QN[CO], SS, YS), hB._2z(nB, QN[HS], SS, US), hB._2z(nB, QN.ARROW_TO_STROKE, SS, WS), hB._2z(nB, QN.ARROW_TO_STROKE_STYLE, SS, XS), hB._2z(nB, QN[BO], SS, VS), hB._2z(nB, QN[FO], SS, KS), hB._2z(nB, QN[ZS], SS, JS), hB._2z(nB, QN[HO], SS, QS), hB._2z(nB, QN.ARROW_TO_LINE_DASH, SS, tj), hB._2z(nB, QN[qO], SS, "toArrowLineDashOffset"), hB._2z(nB, QN[XO], SS, ij), hB._2z(nB, QN[UO], SS, nj));
	var aB = new as;
	aB._2z(nB, QN[Cw], ej, JO), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_POSITION, ej, bf), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, ej, Op), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_FONT_SIZE, ej, gu), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_ROTATABLE, ej, oS), eB || (aB._2z(nB, QN.EDGE_BUNDLE_LABEL_ROTATE, ej, So), aB._2z(nB, QN[Pw], ej, iS), aB._2z(nB, QN[Dw], ej, yu), aB._2z(nB, QN[zw], ej, Kp), aB._2z(nB, QN[Nw], ej, sS), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_POINTER, ej, rS), aB._2z(nB, QN[Bw], ej, hS), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_OFFSET_X, ej, fx), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_OFFSET_Y, ej, _x), aB._2z(nB, QN.EDGE_BUNDLE_LABEL_BORDER, ej, Nv), aB._2z(nB, QN[Gw], ej, dx), aB._2z(nB, QN[qw], ej, QO), aB._2z(nB, QN[sj], ej, _f));
	var oB = new as;
	oB._2z(iB, gp), oB._2z(nB, QN[dS], null, QO), oB._2z(nB, QN.BACKGROUND_GRADIENT, null, _f), oB._2z(nB, QN[IT], null, Kp), oB._2z(nB, QN[pT], null, Nv), oB._2z(nB, QN.BORDER_RADIUS, null, hS), oB._2z(nB, QN[lS], null, dx), oB._2z(nB, QN.BORDER_LINE_DASH, null, lx), oB._2z(nB, QN.BORDER_LINE_DASH_OFFSET, null, vx), oB._2z(iB, So, null, So), oB._2z(iB, fp, null, null, rj), oB._2z(iB, Ap, xy, Eo), oB._2z(iB, wp, xy, wp), oB._2z(nB, QN[bS], xy, po), oB._2z(nB, QN[nT], xy, ry), oB._2z(nB, QN[aT], xy, tg), oB._2z(nB, QN.SHAPE_FILL_GRADIENT, xy, ig), eB || (oB._2z(nB, QN[hj], xy, gS), oB._2z(nB, QN[mS], xy, Qy), oB._2z(nB, QN[sT], xy, wf), oB._2z(nB, QN.SHAPE_LINE_DASH_OFFSET, xy, Of), oB._2z(nB, QN.LINE_CAP, xy, Ky), oB._2z(nB, QN.LINE_JOIN, xy, Zy), oB._2z(nB, QN.LAYOUT_BY_PATH, xy, yf), oB._2z(nB, QN[aj], xy, QO), oB._2z(nB, QN.IMAGE_BACKGROUND_GRADIENT, xy, _f), oB._2z(nB, QN[PT], xy, Kp), oB._2z(nB, QN[xS], xy, Nv), oB._2z(nB, QN.IMAGE_BORDER_RADIUS, xy, hS), oB._2z(nB, QN.IMAGE_BORDER_COLOR, xy, dx), oB._2z(nB, QN[oj], xy, lx), oB._2z(nB, QN[LT], xy, vx), oB._2z(nB, QN[IS], xy, kS), oB._2z(nB, QN.ARROW_FROM_SIZE, xy, LS), oB._2z(nB, QN.ARROW_FROM_OFFSET, xy, MS), oB._2z(nB, QN.ARROW_FROM_STROKE, xy, CS), oB._2z(nB, QN.ARROW_FROM_STROKE_STYLE, xy, DS), oB._2z(nB, QN.ARROW_FROM_FILL_COLOR, xy, BS), oB._2z(nB, QN.ARROW_FROM_FILL_GRADIENT, xy, "fromArrowFillGradient"), oB._2z(nB, QN[OO], xy, FS), oB._2z(nB, QN[jO], xy, "fromArrowLineDashOffset"), oB._2z(nB, QN.ARROW_FROM_LINE_JOIN, xy, GS), oB._2z(nB, QN.ARROW_FROM_LINE_CAP, xy, qS), oB._2z(nB, QN.ARROW_TO_SIZE, xy, YS), oB._2z(nB, QN[HS], xy, US), oB._2z(nB, QN.ARROW_TO, xy, AS), oB._2z(nB, QN[zO], xy, WS), oB._2z(nB, QN[fj], xy, XS), oB._2z(nB, QN.ARROW_TO_FILL_COLOR, xy, JS), oB._2z(nB, QN[HO], xy, QS), oB._2z(nB, QN[_j], xy, tj), oB._2z(nB, QN[qO], xy, "toArrowLineDashOffset"), oB._2z(nB, QN.ARROW_TO_LINE_JOIN, xy, ij), oB._2z(nB, QN[UO], xy, nj));
	var fB = function(t, i) {
			return t = t.zIndex, i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
		},
		_B = function(t, i) {
			this.uiBounds = new fD, z(this, _B, arguments), this.id = this.$data.id, this[kc] = i, this._fy = [], this._nog = new as
		};
	_B[dh] = {
		syncSelection: !1,
		graph: null,
		layoutByAnchorPoint: !1,
		_nog: null,
		_fy: null,
		addChild: function(t, i) {
			t._jo = this, i !== n ? g(this._fy, t, i) : this._fy[Vr](t), t._ec && this._nnr(t), this[cj](), this.invalidateSize()
		},
		removeChild: function(t) {
			this._nog[uj](t), t._jo = null, m(this._fy, t), this._jf && this._jf[Ur](t), this[dj]()
		},
		getProperty: function(t, i) {
			return i == rz.PROPERTY_TYPE_STYLE ? this[kc][tc](this.$data, t) : i == rz[X_] ? this[gf].get(t) : this[gf][t]
		},
		getStyle: function(t) {
			return this[kc][tc](this[gf], t)
		},
		_10: function(t, i, n) {
			var e = this._nog[lj](this, t, i, n);
			return tB[lj](this, t, i, n) || e
		},
		onPropertyChange: function(t) {
			if (hp == t[Dd]) return this[vj](), !0;
			if (np == t.type) {
				if (ep == t.kind) return this.invalidate(), !0;
				var i = t[xh];
				return i && i.ui ? (Hh == t.kind ? this._9u(i) : Ur == t[Dd] && this[Sl](i.ui), !0) : !1
			}
			return this._10(t[Dd], t.propertyType || iB, t[xh])
		},
		label: null,
		initLabel: function() {
			var t = new uB;
			t[Uc] = Um, this[bj](t), this[Um] = t
		},
		initialize: function() {
			this.initLabel(), this[gf]._no8 && this.$data._no8.forEach(this._9u, this), tB.initBindingProperties(this), this._nog.initBindingProperties(this, !1)
		},
		addBinding: function(t, i) {
			return i.property ? (i[Y_] = t, void this._nog._2d(i[U_], i)) : !1
		},
		_g8: function(t, i) {
			var n = this[gf];
			if (!n._no8) return !1;
			var e = n._no8.getById(t.id);
			if (!e || !e.bindingProperties) return !1;
			var s = e.bindingProperties;
			if (k(s)) {
				var r = !1;
				return l(s, function(t) {
					return Eo == t[zx] ? (r = os(n, i, t[U_], t[_l]), !1) : void 0
				}, this), r
			}
			return Eo == s.bindingProperty ? os(n, i, s[U_], s[_l]) : !1
		},
		_9u: function(t) {
			var i = t.ui;
			if (i) {
				var n = t.bindingProperties;
				n && (Array[q_](n) ? n[Df](function(t) {
					this.addBinding(i, t)
				}, this) : this[yj](i, n)), this[bj](i)
			}
		},
		validate: function() {
			return this._nno || (this.initialize(), this._nno = !0), this[wx]()
		},
		_$e: !0,
		invalidateChildrenIndex: function() {
			this._$e = !0
		},
		doValidate: function() {
			if (this._1q && (this._1q = !1, this[gj]() && (this.measure(), this[rf] = !0), this._$e && (this._$e = !1, YP ? this._fy = d(this._fy, fB) : this._fy[mj](fB))), Wn[qr](this) && (this.$invalidateRotate = !0), this.$invalidateRotate) {
				Hz[qr](this), this[Q_][qb](this._fp);
				var t = this[Ej] || 0,
					i = Math[Qo](this.$selectionBorder || 0, this[pj] || 0, this[xj] || 0),
					n = Math[Qo](this[Tj] || 0, this[wj] || 0),
					e = Math.max(2 * t, this.$shadowBlur, this[Oj]);
				e += tD.UI_BOUNDS_GROW || 0;
				var s = e - i,
					r = e + i,
					h = e - n,
					a = e + n;
				return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this[Q_][af](h, s, a, r), this[Sj] && this[Sj](), this[jj] = !0, !0
			}
		},
		validateChildren: function() {
			var t, i = this._nmody,
				n = this[Ij];
			i && (i.$renderColor = this[kj], i[Aj] = this[Aj], i[Lj] = this[Lj], i.$shadowBlur = this[Rj], i.$shadowOffsetX = this[pj], i[Tj] = this.$shadowOffsetY), this.bodyChanged = !1, i && i._1q && (n = i[Gb]() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && Hz.call(i), t = !0);
			for (var e = 0, s = this._fy[Gr]; s > e; e++) {
				var r = this._fy[e];
				if (r != i) {
					var h = r._1q && r[Gb]();
					(h || n) && r._hz && Zn(r, i, this), !t && h && (t = !0)
				}
			}
			return t
		},
		measure: function() {
			this._ji.clear();
			for (var t, i, n = 0, e = this._fy.length; e > n; n++) t = this._fy[n], t._hz && (i = t._fp, i[Za] <= 0 || i[Ja] <= 0 || this._ji.addRect(t.$x + i.x, t.$y + i.y, i[Za], i[Ja]))
		},
		_jf: null,
		_nnr: function(t) {
			if (!this._jf) {
				if (!t.showOnTop) return;
				return this._jf = new nD, this._jf[Hh](t)
			}
			return t[tS] ? this._jf[Hh](t) : this._jf[Ur](t)
		},
		draw: function(t, i, n) {
			for (var e, s = 0, r = this._fy[Gr]; r > s; s++) e = this._fy[s], e._hz && !e[tS] && e._j5(t, i, n, this)
		},
		_9y: function(t, i) {
			if (!this._hz || !this._jf || !this._jf[Gr]) return !1;
			t[Zb](), t.translate(this.$x, this.$y), this[nf] && this[ef] && t[So](this[ef]), (this.offsetX || this[_x]) && t.translate(this.offsetX, this.offsetY), this[sf] && t[So](this[sf]), this[cx] && this._nni && t[Do](-this._nni.x, -this._nni.y), this[cy] && (t[cy] = this.shadowColor, t.shadowBlur = this[uy] * i, t.shadowOffsetX = this[dy] * i, t[ly] = this.shadowOffsetY * i), t.beginPath();
			for (var n, e = 0, s = this._fy[Gr]; s > e; e++) n = this._fy[e], n._hz && n.showOnTop && n._j5(t, i, this.selected, this);
			t.restore()
		},
		doHitTest: function(t, i, n) {
			if (n) {
				if (!this._ji[Cd](t - n, i - n, 2 * n, 2 * n)) return !1
			} else if (!this._ji.intersectsPoint(t, i)) return !1;
			return this[Mj](t, i, n)
		},
		hitTestChildren: function(t, i, n) {
			for (var e, s = this._fy[Gr] - 1; s >= 0; s--)
				if (e = this._fy[s], e._hz && e.hitTest(t, i, n)) return e;
			return !1
		},
		destroy: function() {
			this._ieed = !0;
			for (var t, i = this._fy.length - 1; i >= 0; i--) t = this._fy[i], t.destroy()
		}
	}, D(_B, ZN), Z(_B.prototype, {
		renderColorBlendMode: {
			get: function() {
				return this[Aj]
			},
			set: function(t) {
				this.$renderColorBlendMode = t, this._1q = !0, this[Wb] && (this[Wb][gy] = this.$renderColorBlendMode)
			}
		},
		renderColor: {
			get: function() {
				return this.$renderColor
			},
			set: function(t) {
				this[kj] = t, this._1q = !0, this.body && (this[Wb].renderColor = this[kj])
			}
		},
		bodyBounds: {
			get: function() {
				if (this[jj]) {
					this[jj] = !1;
					var t, i = this.body;
					t = i && i._hz && !this._$v() ? i._fp.clone() : this._fp[Xr](), this[So] && Di(t, this[So], t), t.x += this.$x, t.y += this.$y, this._noj = t
				}
				return this._noj
			}
		},
		bounds: {
			get: function() {
				return new fD((this.$x || 0) + this[Q_].x, (this.$y || 0) + this.uiBounds.y, this.uiBounds.width, this[Q_].height)
			}
		},
		body: {
			get: function() {
				return this._nmody
			},
			set: function(t) {
				t && this._nmody != t && (this._nmody = t, this[Ij] = !0, this[dj]())
			}
		}
	}), tD.UI_BOUNDS_GROW = 1;
	var cB = function() {
		z(this, cB, arguments)
	};
	cB.prototype = {
		strokeStyle: oy,
		lineWidth: 0,
		fillColor: null,
		fillGradient: null,
		_jj: 1,
		_jl: 1,
		outline: 0,
		onDataChanged: function(t) {
			N(this, cB, Sx, arguments), this._l1 && this._81 && this._l1._6k(this._81, this), t && this._now(t)
		},
		_now: function(t) {
			this._l1 = Tn(t), this._l1.validate(), (this._l1._ma == bz || this._l1._6m()) && (this._81 || (this._81 = function() {
				this.invalidateData(), this._jo && this._jo[kc] && (this._jo[dj](), this._jo.graph[ep]())
			}), this._l1._nnw(this._81, this))
		},
		_l1: null,
		initialize: function() {
			this._now(this.$data)
		},
		_5e: function() {
			return this._l1 && this._l1.draw
		},
		_9b: function(t) {
			if (!t || t[Za] <= 0 || t[Ja] <= 0 || !this.$size || !(this.size instanceof Object)) return this._jj = 1, void(this._jl = 1);
			var i = this[wp].width,
				e = this[wp].height;
			if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jj = 1, void(this._jl = 1);
			var s, r, h = t[Za],
				a = t[Ja];
			i >= 0 && (s = i / h), e >= 0 && (r = e / a), 0 > i ? s = r : 0 > e && (r = s), this._jj = s, this._jl = r
		},
		validateSize: function() {
			if (this[Cj]) {
				this[Cj] = !1;
				var t = this._originalBounds;
				this._jj, this._jl, this._9b(t), this[Pj](t[Za] * this._jj, t.height * this._jl, t.x * this._jj, t.y * this._jl)
			}
		},
		measure: function() {
			var t = this._l1.getBounds(this[po] + this[gS]);
			return t ? (this[Cj] = !0, void(this._originalBounds = t[Xr]())) : void this._ji[V_](0, 0, 0, 0)
		},
		onBoundsChanged: function() {
			this[Dj] = !0
		},
		_1u: function() {
			this[Dj] = !1, this._fillGradient = this.fillGradient ? Tz[dh].generatorGradient.call(this.$fillGradient, this._84) : null
		},
		_k9: function(t) {
			var i, n;
			if (Pv == this.$adjustType) i = 1, n = -1;
			else {
				if (Dv != this.$adjustType) return;
				i = -1, n = 1
			}
			var e = this._ji.cx,
				s = this._ji.cy;
			t.translate(e, s), t[Jo](i, n), t[Do](-e, -s)
		},
		draw: function(t, i, n, e) {
			if (this._jj && this._jl) {
				if (this[Dj] && this._1u(), t[Zb](), this[zj] && this._k9(t), this._l1._ma == gz) return t[Jo](this._jj, this._jl), this._l1._m9[Lo](t, i, this, n, e || this), void t.restore();
				n && this._82(t, i, e), this._l1[Lo](t, i, this, this._jj, this._jl), t[_y]()
			}
		},
		doHitTest: function(t, i, n) {
			if (this._l1[Dc]) {
				if (Pv == this[zj]) {
					var e = this._ji.cy;
					i = 2 * e - i
				} else if (Dv == this[zj]) {
					var s = this._ji.cx;
					t = 2 * s - t
				}
				t /= this._jj, i /= this._jl;
				var r = (this._jj + this._jl) / 2;
				return r > 1 && (n /= r, n = 0 | n), this._l1._m9 instanceof $z ? this._l1._m9[Dc](t, i, n, !0, this.$lineWidth, this[Nj] || this[Bj]) : this._l1[Dc](t, i, n)
			}
			return !0
		},
		$invalidateScale: !0,
		$invalidateFillGradient: !0
	}, D(cB, ZN), rs(cB[dh], {
		adjustType: {},
		fillColor: {},
		size: {
			validateFlags: [Ax, $j]
		},
		fillGradient: {
			validateFlags: [Fj]
		}
	}), Z(cB[dh], {
		originalBounds: {
			get: function() {
				return this._originalBounds
			}
		}
	}), tD.ALIGN_POSITION = cD.CENTER_MIDDLE;
	var uB = function() {
		z(this, uB, arguments), this[JO] = tD.LABEL_COLOR
	};
	uB.prototype = {
		color: tD[WT],
		showPointer: !0,
		fontSize: null,
		fontFamily: null,
		fontStyle: null,
		_hd: null,
		alignPosition: null,
		measure: function() {
			this[_o];
			var t = Gi(this[gf], this[Gj] || tD[Qu], this[qj]);
			if (this._hd = t, this.$size) {
				var i = this.$size.width || 0,
					n = this.$size[Ja] || 0;
				return this[Pj](i > t[Za] ? i : t.width, n > t.height ? n : t.height)
			}
			return this[Pj](t.width, t[Ja])
		},
		doHitTest: function(t, i, n) {
			return this.$data ? Cn(t, i, n, this) : !1
		},
		draw: function(t, i, n, e) {
			n && this._82(t, i, e);
			var s = this[Gj] || tD[Qu];
			if (this.$rotatable && this[ef]) {
				var r = vn(this.$_hostRotate);
				r > eD && 3 * eD > r && (t.translate(this._ji[Za] / 2, this._ji[Ja] / 2), t[So](Math.PI), t.translate(-this._ji.width / 2, -this._ji[Ja] / 2))
			}
			var h = this[nS] || tD[Yj],
				a = h[md],
				o = h.verticalPosition,
				f = s * tD[Db],
				_ = f / 2;
			if (o != vD && this._hd[Ja] < this._ji.height) {
				var c = this._ji[Ja] - this._hd.height;
				_ += o == bD ? c / 2 : c
			}
			t[Do](0, _), t.font != this[qj] && (t[_o] = this.$font), a == dD ? (t[Hj] = Rc, t.translate(this._ji.width / 2, 0)) : a == lD ? (t[Hj] = Fh, t[Do](this._ji[Za], 0)) : t.textAlign = ba, t[iy] = ny, t.fillStyle = this.color;
			for (var u = 0, d = this[gf][th](co), l = 0, v = d.length; v > l; l++) {
				var b = d[l];
				t.fillText(b, 0, u), u += f
			}
		},
		_5e: function() {
			return null != this.$data || this[Uj]
		},
		$invalidateFont: !0
	}, D(uB, ZN), rs(uB[dh], {
		size: {
			validateFlags: [jv]
		},
		fontStyle: {
			validateFlags: [jv, Wj]
		},
		fontSize: {
			validateFlags: [jv, Wj]
		},
		fontFamily: {
			validateFlags: [jv, Wj]
		}
	}), Z(uB[dh], {
		font: {
			get: function() {
				return this[Xj] && (this.$invalidateFont = !1, this[qj] = (this[Vj] || tD[Ju]) + ih + (this.$fontSize || tD.FONT_SIZE) + td + (this[Kj] || tD[id])), this.$font
			}
		}
	});
	var dB = function(t) {
		t = t || new $z, this[Zj] = new fD, z(this, dB, [t])
	};
	dB.prototype = {
		layoutByPath: !0,
		layoutByAnchorPoint: !1,
		measure: function() {
			this[Jj] = !0, this[Qj] = !0, this.$data[bo](this[tI] + this.$outline, this[Zj]), this[Pj](this[Zj])
		},
		validateSize: function() {
			if (this.$invalidateFromArrow || this[Qj]) {
				var t = this[Zj][Xr]();
				if (this[Jj]) {
					this.$invalidateFromArrow = !1;
					var i = this[iI]();
					i && t[Hh](i)
				}
				if (this[Qj]) {
					this[Qj] = !1;
					var i = this.validateToArrow();
					i && t.add(i)
				}
				this.setMeasuredBounds(t)
			}
		},
		validateFromArrow: function() {
			if (!this[gf]._j8 || !this.$fromArrow) return void(this[nI] = null);
			var t = this[gf],
				i = 0,
				n = 0,
				e = this.$fromArrowOffset;
			e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j8)), this.fromArrowLocation = t[Bo](i, n), this.fromArrowLocation[So] = Math.PI + this.fromArrowLocation[So] || 0, this.$fromArrowShape = zs(this[eI], this.$fromArrowSize);
			var s = this[nI][bo](this.fromArrowStyles.lineWidth + this[sI][gS]);
			return this.fromArrowFillGradient instanceof sz.Gradient ? this[sI]._fillGradient = Tz[dh].generatorGradient[qr](this.fromArrowFillGradient, s) : this.fromArrowStyles && (this[sI]._fillGradient = null), zi(s, this.fromArrowLocation.rotate, s, s[Fh], s.cy), s[Nb](this.fromArrowLocation.x, this.fromArrowLocation.y), s
		},
		validateToArrow: function() {
			if (!this.$data._j8 || !this.$toArrow) return void(this[rI] = null);
			var t = this.$data,
				i = 0,
				n = 0,
				e = this[hI];
			e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._j8), i += t._j8, this[aI] = t[Bo](i, n), this.$toArrowShape = zs(this.$toArrow, this.$toArrowSize);
			var s = this[rI][bo](this[oI][po] + this[oI].outline);
			return this[QS] instanceof sz[fI] ? this.toArrowStyles._fillGradient = Tz[dh].generatorGradient.call(this[QS], s) : this[oI] && (this[oI]._fillGradient = null), zi(s, this[aI][So], s, s[Fh], s.cy), s[Nb](this[aI].x, this.toArrowLocation.y), s
		},
		_2n: function(t) {
			var i = t ? "from" : cp,
				e = this[i + _I];
			e === n && (e = this.$lineWidth);
			var s = this[i + cI];
			s === n && (s = this[ry]);
			var r = this[i + uI];
			r || (this[i + uI] = r = {}), r[po] = e, r.strokeStyle = s, r[wf] = this[i + dI], r[Of] = this[i + lI], r.fillColor = this[i + vI], r.fillGradient = this[i + bI], r.lineCap = this[i + yI], r[Zy] = this[i + gI], r[gS] = this[i + mI] || 0, r.outlineStyle = this[i + EI]
		},
		doValidate: function() {
			return this.$fromArrow && this._2n(!0), this[pI] && this._2n(!1), N(this, dB, wx)
		},
		drawArrow: function(t, i, n, e) {
			if (this[eI] && this.$fromArrowShape) {
				t.save();
				var s = this[xI],
					r = s.x,
					h = s.y,
					a = s[So];
				t[Do](r, h), a && t.rotate(a), this[nI].draw(t, i, this[sI], n, e), t.restore()
			}
			if (this[pI] && this.$toArrowShape) {
				t.save();
				var s = this[aI],
					r = s.x,
					h = s.y,
					a = s[So];
				t[Do](r, h), a && t[So](a), this[rI].draw(t, i, this.toArrowStyles, n, e), t[_y]()
			}
		},
		outlineStyle: null,
		outline: 0,
		onBoundsChanged: function() {
			this[Dj] = !0
		},
		_1u: function() {
			this[Dj] = !1, this._fillGradient = this[Bj] ? Tz[dh].generatorGradient.call(this.$fillGradient, this._84) : null
		},
		draw: function(t, i, n, e) {
			this[Dj] && this._1u(), this.$data[Lo](t, i, this, n, e), this[TI](t, i, n, e)
		},
		doHitTest: function(t, i, n) {
			if (this.$data.hitTest(t, i, n, !0, this.$lineWidth + this[wI], this[Nj] || this.$fillGradient)) return !0;
			if (this.$toArrow && this.$toArrowShape) {
				var e = t - this[aI].x,
					s = i - this.toArrowLocation.y;
				if (this.toArrowLocation[So]) {
					var r = Mi(e, s, -this[aI][So]);
					e = r.x, s = r.y
				}
				var h = this[oI][tg] || this.toArrowStyles[ig];
				if (this.$toArrowShape.hitTest(e, s, n, !0, this.toArrowStyles.lineWidth, h)) return !0
			}
			if (this[eI] && this.$fromArrowShape) {
				var e = t - this.fromArrowLocation.x,
					s = i - this[xI].y;
				if (this.fromArrowLocation[So]) {
					var r = Mi(e, s, -this[xI][So]);
					e = r.x, s = r.y
				}
				var h = this.fromArrowStyles.fillColor || this[sI][ig];
				if (this.$fromArrowShape.hitTest(e, s, n, !0, this.fromArrowStyles.lineWidth, h)) return !0
			}
			return !1
		},
		$fromArrowOutline: 0,
		$toArrowOutline: 0,
		$invalidateFillGradient: !0,
		$invalidateFromArrow: !0,
		$invalidateToArrow: !0
	}, D(dB, ZN), rs(dB.prototype, {
		fillColor: {},
		fillGradient: {
			validateFlags: [Fj]
		},
		fromArrowOffset: {
			validateFlags: [OI, Ax]
		},
		fromArrowSize: {
			validateFlags: [OI, Ax]
		},
		fromArrow: {
			validateFlags: [OI, Ax]
		},
		fromArrowOutline: {
			validateFlags: [OI, Ax]
		},
		fromArrowStroke: {
			validateFlags: [OI, Ax]
		},
		toArrowOffset: {
			validateFlags: [SI, Ax]
		},
		toArrowSize: {
			validateFlags: [SI, Ax]
		},
		toArrow: {
			validateFlags: [SI, Ax]
		},
		toArrowOutline: {
			validateFlags: [SI, Ax]
		},
		toArrowStroke: {
			validateFlags: [SI, Ax]
		},
		outline: {
			value: 0,
			validateFlags: [jv]
		}
	}), Z(dB[dh], {
		length: {
			get: function() {
				return this[Eo][Gr]
			}
		}
	}), fs[dh] = {
		shape: null,
		path: null,
		initialize: function() {
			N(this, fs, Tx), this.path = new $z, this[Ap]._ee = !1, this[SS] = new dB(this[Ap]), this.addChild(this[SS], 0), this._nmody = this[SS], hB[jI](this)
		},
		_1s: !0,
		_6f: null,
		_$v: function() {
			return !1
		},
		_4f: function() {
			return !1
		},
		validatePoints: function() {
			this[SS][tx]();
			var t = this.$data,
				i = this[Ap];
			i.clear();
			var n = t[a_],
				e = t[h_];
			n && e && qs(this, t, i, n, e)
		},
		drawLoopedEdge: function(t, i, n, e) {
			Ws(this, e, t)
		},
		drawEdge: function(t, i, n, e, s, r) {
			var h = this.getStyle(QN.EDGE_FROM_OFFSET),
				a = this.getStyle(QN.EDGE_TO_OFFSET);
			if (h && (s.x += h.x || 0, s.y += h.y || 0), a && (r.x += a.x || 0, r.y += a.y || 0), e == rz[II]) {
				var o = s.center,
					f = r.center,
					_ = (o.x + f.x) / 2,
					c = (o.y + f.y) / 2,
					u = o.x - f.x,
					d = o.y - f.y,
					l = Math[lo](u * u + d * d),
					v = Math.atan2(d, u);
				v += Math.PI / 6, l *= .04, l > 30 && (l = 30);
				var b = Math[Bh](v) * l,
					y = Math.sin(v) * l;
				return t[g_](_ - y, c + b), void t[g_](_ + y, c - b)
			}
			var g = Us(this, this.data, s, r, i, n, s[Rc], r.center);
			g && (t._fm = g)
		},
		_2q: function() {
			if (!this[gf].isBundleEnabled()) return null;
			var t = this.graph._8h._8j(this.$data);
			if (!t || !t[kI](this[kc]) || !t._gp) return null;
			var i = t.getYOffset(this);
			return t[AI](this.$data) || (i = -i), i
		},
		checkBundleLabel: function() {
			var t = this.getBundleLabel();
			return t ? (this.bundleLabel || this[LI](), this[ej]._hz = !0, void(this[ej][Eo] = t)) : void(this.bundleLabel && (this[ej]._hz = !1, this[ej][Eo] = null))
		},
		createBundleLabel: function() {
			var t = new uB;
			t[RI] = !1, this[ej] = t, this[bj](this.bundleLabel), aB[jI](this)
		},
		getBundleLabel: function() {
			return this[kc][MI](this[Eo])
		},
		doValidate: function() {
			return this._1s && (this._1s = !1, this.validatePoints()), this[CI](), N(this, fs, wx)
		},
		_5a: function() {
			this._1s = !0, this[dj]()
		},
		_10: function(t, i, n) {
			var e = this._nog[lj](this, t, i, n);
			return e = tB[lj](this, t, i, n) || e, this[ej] && this[ej][gf] && (e = aB[lj](this, t, i, n) || e), hB[lj](this, t, i, n) || e
		}
	}, D(fs, _B), fs.drawReferenceLine = function(t, i, n, e) {
		if (t[p_](i.x, i.y), !e || e == rz[PI]) return void t[g_](n.x, n.y);
		if (e == rz.EDGE_TYPE_VERTICAL_HORIZONTAL) t[g_](i.x, n.y);
		else if (e == rz[ec]) t[g_](n.x, i.y);
		else if (0 == e[Ya](rz.EDGE_TYPE_ORTHOGONAL)) {
			var s;
			s = e == rz[xc] ? !0 : e == rz[Tc] ? !1 : Math[qh](i.x - n.x) > Math.abs(i.y - n.y);
			var r = (i.x + n.x) / 2,
				h = (i.y + n.y) / 2;
			s ? (t[g_](r, i.y), t[g_](r, n.y)) : (t[g_](i.x, h), t.lineTo(n.x, h))
		}
		t.lineTo(n.x, n.y)
	}, Z(fs.prototype, {
		length: {
			get: function() {
				return this[Ap] ? this[Ap][Gr] : 0
			}
		}
	}), fs[dh].addPoint = function(t, i, n) {
		var e = jn(this[Ap], t, i, n);
		if (e && e[Gr] > 2) {
			var s = this.data,
				r = e[e[Gr] - 1];
			s.pathSegments = r.type == Mz ? e.splice(1, e[Gr] - 2) : e[Wr](1, e.length - 1)
		}
	}, _s[dh] = {
		_2y: null,
		image: null,
		initialize: function() {
			N(this, _s, Tx), this._nnx(), sB.initBindingProperties(this)
		},
		_now: function() {
			this.data[xy] ? this[xy] && (this[Wb] = this[xy]) : this[Um] && (this[Wb] = this[Um])
		},
		_nnx: function() {
			this[xy] = new cB, this[bj](this.image, 0), this._now()
		},
		doValidate: function() {
			this.body && (this instanceof ir && !this.$data[Zp] && this._5m() ? this.body[cx] = !1 : (this[Wb].$layoutByAnchorPoint = null != this._2y, this[Wb][Op] = this._2y));
			var t = this.$data[yp],
				i = 0,
				n = 0;
			t && (i = t.x, n = t.y);
			var e = this.$x != i || this.$y != n;
			return e && (this[jj] = !0), this.$x = i, this.$y = n, _B[dh][wx][qr](this) || e
		},
		_10: function(t, i, n) {
			var e = this._nog[lj](this, t, i, n);
			return e = tB.onBindingPropertyChange(this, t, i, n) || e, sB[lj](this, t, i, n) || e
		}
	}, D(_s, _B);
	var lB = function(t, i) {
			return t = t[gf][hp] || 0, i = i.$data.zIndex || 0, t - i
		},
		vB = {
			position: iu,
			"user-select": tu,
			"transform-origin": DI,
			"-webkit-tap-highlight-color": ug
		};
	bi(zI, NI), us[dh] = {
		_l4: 1,
		_no9: null,
		_8e: null,
		_8c: null,
		_$h: !0,
		_n7: null,
		_n5: null,
		_jg: null,
		_nm3: null,
		_6n: !1,
		_nno: !1,
		_jy: null,
		_4j: function(t, i) {
			for (var n = this._no9, e = 0, s = n.length; s > e; e++)
				if (t.call(i, n[e]) === !1) return !1
		},
		_en: function(t, i) {
			this._n7.forEach(t, i)
		},
		_12: function(t, i) {
			for (var n = this._no9, e = n[Gr] - 1; e >= 0; e--)
				if (t[qr](i, n[e]) === !1) return !1
		},
		_4l: function(t, i) {
			this._n7[BI](t, i)
		},
		_3t: function(t, i) {
			this._74 && this._74._3t && this._74._3t(t, i)
		},
		_nou: function() {
			di(this._n5, {
				overflow: Qc,
				padding: $I
			}), this._jy._59(), this._ky && this._ky[FI] ? this._jy._e7(0, 0) : this._jy._2u = !0
		},
		_4m: function() {
			return this._$h && (this._$h = !1, this._28()), this._8c
		},
		_3v: function() {
			return this._jy._18 ? !1 : (this._jy._18 = !0, void this._noo())
		},
		_noo: function() {
			this._6n || (this._6n = !0, x(this._ff[Vb](this)))
		},
		_nm5: function() {
			var t = !this._nno || 0 == this._n7.length;
			this._nno || (this._nno = !0, this._nou()), this._nm2(t);
			var i = this._jg.g;
			if (this._n7.isEmpty()) return i._l3(), this._topCanvas._j5(), this._6n = !1, this._jy._k4(this, !0), void this._4m();
			if (this._jy._k4(this, this._ky[GI] || this._nm3._m1), this._k1) {
				var n = this._kq;
				i.canvas.ratio && (n *= i.canvas.ratio), this._k1(i, n, t)
			}
			this._nm3._l3(), this._jy._7u(), this._topCanvas._j5(), this._6n = !1
		},
		_ff: function() {
			this._6n && (this._ieed || (this._nno && this._ky && this._ky._$w && (this._ky._$w = !1, this._ky.forEach(function(t) {
				t[ip](!0)
			})), this._nm5(), this._2w()))
		},
		_gn: null,
		_1l: function(t, i, n, e, s) {
			if (!n || !e) return void this._6a();
			var r = this._no9,
				h = this._8e;
			this._6a(), this._gn.length = 0;
			var a, o = {},
				f = this._nm3;
			s = s || f._m1;
			for (var _, c, u, d, l, v, b = this._n7._j4, y = t + n, g = i + e, m = 0, E = b[Gr]; E > m; m++)
				if (v = b[m], l = v.__oldBounds, v.__oldBounds = null, v._hz)
					if (d = v.__jiChanged, v.__jiChanged = !1, _ = v[Q_], c = _.x + v.$x, u = _.y + v.$y, y > c && g > u && c + _.width > t && u + _[Ja] > i) {
						if (a = v[gf][hp], a in o || (o[a] = !0, this._gn.push(a || 0)), r.push(v), this._8e[v.id] = v, s) continue;
						l && (f._mi(l.x, l.y, l.width, l[Ja]), s = f._m1), d && (f._mi(c, u, _[Za], _.height), s = f._m1)
					} else !s && h[v.id] && l && (f._mi(l.x, l.y, l.width, l[Ja]), s = f._m1);
			else !s && l && (f._mi(l.x, l.y, l[Za], l.height), s = f._m1)
		},
		_d1: function(t) {
			var i = t.$data.__hzChanged;
			return t.$data.__hzChanged = !1, t._1q || t[gf]._6n ? (t.$data._6n = !1, t._nno && (t.__oldBounds = {
				x: t.$x + t[Q_].x,
				y: t.$y + t[Q_].y,
				width: t.uiBounds[Za],
				height: t[Q_].height
			}), t.__jiChanged = t[Gb](), i || t.__jiChanged) : (i && t._nno && (t.__oldBounds = {
				x: t.$x + t.uiBounds.x,
				y: t.$y + t.uiBounds.y,
				width: t[Q_][Za],
				height: t.uiBounds[Ja]
			}), i)
		},
		_k1: function(t, i, n, e) {
			e = e || this._jy._7z;
			var s = e.x,
				r = e.y,
				h = e.width,
				a = e.height;
			this._1l(s, r, h, a, n), this._4m(), this._gn[Gr] && (YP ? (this._gn[mj](), this._no9 = d(this._no9, lB)) : this._no9.sort(lB));
			try {
				this._ir(t, i)
			} catch (o) {
				sz[zh](o), this._liFlag || (this._liFlag = !0, this._ky[ep]())
			}
		},
		_ir: function(t, i) {
			t[Zb](), this._nm3._k5(t, this._jg, this._jy), this._jy._nnm(t);
			for (var n, e, s = this._no9, r = [], h = 0, a = s[Gr]; a > h; h++) n = s[h], e = n.uiBounds, (this._nm3._m1 || this._nm3._ed(e.x + n.$x, e.y + n.$y, e[Za], e.height)) && (n._j5(t, i), n._jf && n._jf.length && r.push(n));
			if (r[Gr])
				for (h = 0, a = r[Gr]; a > h; h++) r[h]._9y(t, i);
			t[_y]()
		},
		_gl: function(t, i, n) {
			t.save(), t[Do](-n.x * i, -n.y * i), t[Jo](i, i);
			var e, s, r = this._n7._j4.slice();
			this._gn[Gr] && (YP ? (this._gn[mj](), r = d(r, lB)) : r[mj](lB));
			for (var h = [], a = 0, o = r.length; o > a; a++) e = r[a], e._hz && (s = e[Q_], n[Cd](s.x + e.$x, s.y + e.$y, s[Za], s.height) && (e._j5(t, i), e._jf && e._jf.length && h[Vr](e)));
			if (h.length)
				for (a = 0, o = h.length; o > a; a++) h[a]._9y(t, i);
			t[_y]()
		},
		_16: function() {},
		_28: function() {
			for (var t, i, n = this._n7._j4, e = new fD, s = n[Gr] - 1; s >= 0; s--) t = n[s], t._hz && (i = t[Q_], e.addRect(t.$x + i.x, t.$y + i.y, i[Za], i[Ja]));
			var r = this._8c;
			this._8c = e, e.equals(r) || this._16(r, e)
		},
		_nm2: function() {
			for (var t, i = this._n7._j4, n = i[Gr] - 1; n >= 0; n--) t = i[n], this._d1(t) && !this._$h && (this._$h = !0)
		},
		_29: function(t, i, n, e) {
			this._nm3._m1 || (t && (t > 0 && this._nm3._mi(this._jy._7z.x, this._jy._7z.y, t / this._jy._kq, this._jy._90 / this._jy._kq), n + t < this._jy._nmh && this._nm3._mi(this._jy._7z.x + (n + t) / this._jy._kq, this._jy._7z.y, (this._jy._nmh - n - t) / this._jy._kq, this._jy._90 / this._jy._kq)), i && (i > 0 && this._nm3._mi(this._jy._7z.x, this._jy._7z.y, this._jy._nmh / this._jy._kq, i / this._jy._kq), e + i < this._jy._90 && this._nm3._mi(this._jy._7z.x, this._jy._7z.y + (e + i) / this._jy._kq, this._jy._nmh / this._jy._kq, (this._jy._90 - e - i) / this._jy._kq)))
		},
		_e8: function(t, i) {
			this._noo(), this._jy._e8(t, i)
		},
		_nnk: function(t, i, n) {
			this._noo(), this._jy._nnk(t, i, n)
		},
		_87: function() {},
		_gj: function(t, i, n) {
			return this._nno ? void(this._jy._gj(t, i, n) !== !1 && this._noo()) : void(this._jy._kq = t)
		},
		_1r: function() {
			var t = this._4m();
			if (!t[mf]()) {
				var i = this._jy._nmh / t[Za],
					n = this._jy._90 / t.height,
					e = Math.min(i, n);
				return e = Math.max(this._hm, Math[Io](this._ho, e)), {
					scale: e,
					cx: t.cx,
					cy: t.cy
				}
			}
		},
		_j6: function(t, i, n) {
			return this._jy._j6(t, i, n) === !1 ? !1 : void this._noo()
		},
		_ik: function(t, i) {
			return this._jy._ik(t, i) === !1 ? !1 : void this._noo()
		},
		_ja: function(t, i) {
			return this._jy._ja(t, i) === !1 ? !1 : void this._noo()
		},
		_7r: function() {
			return this._jy._7rFlag ? !1 : (this._jy._7rFlag = !0, void this._noo())
		},
		_6a: function() {
			this._no9[Gr] = 0, this._8e = {}
		},
		_l6: function() {
			this._l3()
		},
		_ie: function() {
			this._l3(), this._ieed = !0, this._6n = !1, this._topCanvas[wa](), this._8t[Gr] = 0, this._74 && (this._74._ie(), delete this._74)
		},
		_l3: function() {
			this._nno = !1, this._$h = !0, this._n7.clear(), this._6a(), this._nm3._l3(), this._noo()
		},
		_86: function(t, i, n, e) {
			var s = this._kq;
			return new fD(this._d8(t), this._nob(i), n / s, e / s)
		},
		_d8: function(t) {
			return this._jy._d8(t)
		},
		_nob: function(t) {
			return this._jy._nob(t)
		},
		_dz: function(t) {
			return this._jy._dz(t)
		},
		_dx: function(t) {
			return this._jy._dx(t)
		},
		_l8: function(t) {
			return this._n7[rd](t.id || t)
		},
		_$g: function(t) {
			var i = this._8n(t);
			return i.x = this._d8(i.x), i.y = this._nob(i.y), i
		},
		_fo: function(t, i) {
			return {
				x: this._dz(t),
				y: this._dx(i)
			}
		},
		_f2: function(t, i) {
			return {
				x: this._d8(t),
				y: this._nob(i)
			}
		},
		_8n: function(t) {
			return yi(t, this._n5)
		},
		_3n: function(t) {
			if (t.uiId !== n) return t.uiId ? this._n7.getById(t[qI]) : null;
			var i = Math.round(tD.SELECTION_TOLERANCE / this._jy._kq) || .1;
			this._jg.ratio && (i *= this._jg[to]);
			for (var e, s = this._$g(t), r = s.x, h = s.y, a = this._no9, o = a.length - 1; o >= 0; o--)
				if (e = a[o], e._hz && e.hitTest(r, h, i)) return t.uiId = e.id, e;
			t[qI] = null
		},
		hitTest: function(t) {
			var i = this._3n(t);
			if (!i) return null;
			var n = Math.round(tD[Rb] / this._jy._kq) || 1;
			this._jg.ratio && (n *= this._jg.ratio);
			var e = this._$g(t),
				s = e.x,
				r = e.y,
				h = i[Dc](s, r, n, !0);
			return h instanceof ZN ? h : i
		},
		_nmc: function(t) {
			t.id !== n && (t = t.id);
			var i = this._n7[rd](t);
			return i ? new fD((i.$x || 0) + i.uiBounds.x, (i.$y || 0) + i[Q_].y, i[Q_][Za], i.uiBounds.height) : void 0
		},
		_8t: null,
		_2w: function() {
			if (!this._8t[Gr]) return !1;
			var t = this._8t;
			this._8t = [], l(t, function(t) {
				try {
					t.delay ? p(t.call, t[vh], t.delay) : t[qr].call(t[vh])
				} catch (i) {}
			}, this), this._ff()
		},
		callLater: function(t, i, n) {
			i && S(i) && (n = i, i = null);
			var e = this._8t;
			e[Vr]({
				call: t,
				scope: i,
				delay: n
			}), this._6n || this._2w()
		}
	}, Z(us.prototype, {
		_7z: {
			get: function() {
				return this._jy._7z
			}
		},
		_e6: {
			get: function() {
				return this._jy._e6
			},
			set: function(t) {
				return !t || 1 > t ? !1 : void(this._jy._e6 = t)
			}
		},
		_ho: {
			get: function() {
				return this._jy._ho
			},
			set: function(t) {
				return !t || 1 > t ? !1 : void(this._jy._ho = t)
			}
		},
		_hm: {
			get: function() {
				return this._jy._hm
			},
			set: function(t) {
				return !t || 0 >= t ? !1 : void(this._jy._hm = t)
			}
		},
		_kq: {
			get: function() {
				return this._jy._hj()
			},
			set: function(t) {
				this._gj(t)
			}
		},
		_nj: {
			get: function() {
				return this._jy._ks()
			}
		},
		_ng: {
			get: function() {
				return this._jy._kw()
			}
		}
	}), ds[dh] = {
		_nor: null,
		_nmh: 0,
		_90: 0,
		_2u: !0,
		_18: !0,
		_jy: null,
		_7z: null,
		_e6: 1.3,
		_ho: 10,
		_hm: .1,
		_kq: 1,
		_nj: 0,
		_ng: 0,
		_7u: function() {
			this._jy._gz(this._nor._jg)
		},
		_59: function() {
			return this._18 = !1, this._6c(this._nor._n5[YI], this._nor._n5[hu])
		},
		_6c: function(t, i) {
			return this._nmh == t && this._90 == i ? !1 : (this._nmh = t, this._90 = i, void this._nor._3t(t, i))
		},
		_e7: function(t, i, n) {
			n && (n = Math.max(this._hm, Math[Io](this._ho, n)), this._kq = n), this._nj = this._nmh / 2 - t * this._kq, this._ng = this._90 / 2 - i * this._kq, this._2u = !0
		},
		_33: function(t, i) {
			t = t || this._nmh, i = i || this._90, this._7z.set(-this._nj / this._kq, -this._ng / this._kq, t / this._kq, i / this._kq)
		},
		_j6: function(t, i, n) {
			return this._gj(this._6b() * t, i, n)
		},
		_ja: function(t, i) {
			return this._gj(this._6b() * this._e6, t, i)
		},
		_ik: function(t, i) {
			return this._gj(this._6b() / this._e6, t, i)
		},
		_gj: function(t, i, e) {
			this._7rFlag = !1, t = Math.max(this._hm, Math[Io](this._ho, t));
			var s = this._6b();
			return i === n && (i = this._nmh / 2, e = this._90 / 2), t != s && (this._2u = !0, this._nor._87(s, t)), this._jy._gj(t / this._kq, i, e)
		},
		_6b: function() {
			return this._kq * this._jy._kq
		},
		_e8: function(t, i) {
			this._jy._e8(t, i)
		},
		_nnk: function(t, i, n) {
			var e = this._ks(),
				s = this._kw(),
				r = this._hj();
			return n && (n = Math.max(this._hm, Math.min(this._ho, n))), t != e || i != s || n && n != r ? (n && n != r ? (n /= this._kq, this._2u = !0) : n = this._jy._kq, t -= e * n, i -= s * n, this._jy._95(n, t, i), this._nor._3l(e, s, r, arguments[0], arguments[1], arguments[2]), r != arguments[2] && this._nor._87(r, arguments[2]), !0) : !1
		},
		_7r: function() {
			this._7rFlag = !0
		},
		_hj: function() {
			return this._kq * this._jy._kq
		},
		_ks: function() {
			return this._nj * this._jy._kq + this._jy._nj
		},
		_kw: function() {
			return this._ng * this._jy._kq + this._jy._ng
		},
		_k4: function(t, i) {
			this._18 && this._59(), KP && XP && (i = !0);
			var n = t._jg,
				e = n[to] || 1,
				s = n[YI],
				r = n[hu],
				h = this._nmh != s,
				a = this._90 != r,
				o = h || a;
			o && t._topCanvas._jg.setSize(this._nmh, this._90);
			var f = this._nj,
				_ = this._ng,
				c = this._kq;
			if (this._7rFlag) {
				this._7rFlag = !1;
				var u = t._1r();
				u && this._e7(u.cx, u.cy, u[Jo])
			}
			if (this._2u || i || o) return this._2u = !1, this._kq *= this._jy._kq, this._nj = this._nj * this._jy._kq + this._jy._nj, this._ng = this._ng * this._jy._kq + this._jy._ng, this._jy._kq = 1, this._jy._nj = 0, this._jy._ng = 0, o && n.setSize(this._nmh, this._90), t._nm3._m1 = !0, this._33(this._nmh, this._90), void((f != this._nj || _ != this._ng || c != this._kq) && (t._3l(f, _, c, this._nj, this._ng, this._kq), c != this._kq && t._87(c, this._kq)));
			var d = this._jy._nj,
				l = this._jy._ng;
			if (d || l) {
				this._jy._nj = 0, this._jy._ng = 0, this._nj += d, this._ng += l, this._33(s, r);
				var v = n.g;
				this._ea(v, n, d * e, l * e), t._29(d, l, s, r), t._3l(f, _, c, this._nj, this._ng, this._kq)
			}
		},
		_ea: function(t, n, e, s) {
			var r = this._nmackCanvas;
			r || (r = this._nmackCanvas = i.createElement(no), r.g = r.getContext(oo)), r.width = n[Za], r[Ja] = n.height, r.g.drawImage(n, e, s), t._l3(), t.drawImage(r, 0, 0)
		},
		_nnm: function(t) {
			1 != t.canvas[to] && t[Jo](t.canvas.ratio, t[no][to]), t.translate(this._nj, this._ng), t[Jo](this._kq, this._kq)
		},
		_d8: function(t) {
			return (t - this._nj) / this._kq
		},
		_nob: function(t) {
			return (t - this._ng) / this._kq
		},
		_dz: function(t) {
			return t * this._kq + this._nj
		},
		_dx: function(t) {
			return t * this._kq + this._ng
		}
	};
	var bB = function() {
		this._hi = [], this._ji = new fD
	};
	bB[dh] = {
		_hk: 20,
		_hi: null,
		_m1: !1,
		_ji: null,
		_l3: function() {
			this._m1 = !1, this._hi.length = 0, this._ji.clear()
		},
		_i6: function() {
			return this._m1 || this._hi[Gr] > 0
		},
		_mi: function(t, i, n, e) {
			this._m1 || 0 >= n || 0 >= e || (this._hi.push({
				x: t,
				y: i,
				width: n,
				height: e
			}), this._ji.addRect(t, i, n, e))
		},
		_he: function(t) {
			this._mi(t.x, t.y, t.width, t.height)
		},
		_ed: function(t, i, n, e) {
			if (!this._ji[Cd](t, i, n, e)) return !1;
			if (QP || this._hi.length >= this._hk) return !0;
			for (var s, r = 0, h = this._hi.length; h > r; r++)
				if (s = this._hi[r], ri(t, i, n, e, s.x, s.y, s[Za], s[Ja])) return !0;
			return !1
		},
		_k5: function(t, i, n) {
			if (this._m1) return t.setTransform(1, 0, 0, 1, 0, 0), void t[zf](0, 0, i.width, i[Ja]);
			t[cg]();
			var e, s, r, h, a = n._kq,
				o = this._hi,
				f = i.ratio || 1;
			if (QP || o.length >= this._hk) return e = n._dz(this._ji.x) * f, s = n._dx(this._ji.y) * f, r = X(e + this._ji[Za] * a * f) - (e = W(e)), h = X(s + this._ji[Ja] * a * f) - (s = W(s)), t[zf](e, s, r, h), t[tb](e, s, r, h), void t[ty]();
			for (var _, c = 0, u = o[Gr]; u > c; c++) _ = o[c], e = n._dz(_.x) * f, s = n._dx(_.y) * f, r = X(e + _[Za] * a * f) - (e = W(e)), h = X(s + _.height * a * f) - (s = W(s)), t[zf](e, s, r, h), t.rect(e, s, r, h);
			t.clip()
		}
	};
	var yB = {};
	yB[QN[Mb]] = tD[Mb], yB[QN.SELECTION_BORDER] = tD.SELECTION_BORDER, yB[QN.SELECTION_SHADOW_BLUR] = tD[Fx], yB[QN[Cb]] = rz[Lb], yB[QN.SELECTION_SHADOW_OFFSET_X] = 2, yB[QN[qx]] = 2, yB[QN.LABEL_COLOR] = tD[WT], yB[QN[ZO]] = cD[jd], yB[QN[UT]] = cD.CENTER_TOP, yB[QN[iw]] = new _D(0, 2), yB[QN[ew]] = 8, yB[QN[aw]] = 8, yB[QN[rw]] = !0, yB[QN[HI]] = 0, yB[QN.LABEL_BORDER_STYLE] = oy, yB[QN[aS]] = !0, yB[QN.LABEL_BACKGROUND_COLOR] = null, yB[QN.LABEL_BACKGROUND_GRADIENT] = null, yB[QN[Uw]] = UI, yB[QN[Yw]] = 1.5, yB[QN.EDGE_FROM_AT_EDGE] = !0, yB[QN[vO]] = !0, yB[QN.GROUP_BACKGROUND_COLOR] = V(3438210798), yB[QN[kw]] = 1, yB[QN.GROUP_STROKE_STYLE] = oy, yB[QN.ARROW_TO] = !0, yB[QN.ARROW_FROM_SIZE] = tD[Oc], yB[QN.ARROW_TO_SIZE] = tD.ARROW_SIZE, yB[QN.EDGE_LOOPED_EXTAND] = 10, yB[QN.EDGE_CORNER_RADIUS] = 8, yB[QN[vc]] = rz[gc], yB[QN.EDGE_SPLIT_BY_PERCENT] = !0, yB[QN[_c]] = 20, yB[QN.EDGE_SPLIT_PERCENT] = .5, yB[QN[uc]] = 20, yB[QN.EDGE_BUNDLE_GAP] = 20, yB[QN[WI]] = cD.CENTER_BOTTOM, yB[QN.EDGE_BUNDLE_LABEL_POSITION] = cD[XI], yB[QN.EDGE_BUNDLE_LABEL_COLOR] = VI, yB[QN.SHAPE_STROKE] = 1, yB[QN[nT]] = KI, yB[QN.RENDER_COLOR_BLEND_MODE] = tD[Go], yB[QN[ZI]] = 1, tD[zc] = 2, rz[JI] = QI, rz.NAVIGATION_NONE = tk, rz[ik] = nk, tD[ek] = rz[JI];
	var gB = function(t, n) {
		this._ky = t, j(n) && (n = i[sk](n)), n && n.tagName || (n = i[ao](Gc)), z(this, gB, [n]), this._ky._$y[Ru](this._1d, this), this._ky._$d[Ru](this._25, this), this._ky._1z[Ru](this._nn2, this), this._ky._1g[Ru](this._7l, this), this._ky._$n[Ru](this._36, this), this._ky._$u[Ru](this._44, this), this._nm0 = {}, this._47(tD[ek], !0)
	};
	gB[dh] = {
		_$m: null,
		_44: function(t) {
			var i = t.source,
				n = t[Eo];
			if (n)
				if (this._nno) {
					var e, s;
					if (k(n))
						for (var r = 0, h = n[Gr]; h > r; r++) s = n[r].id, e = this._n7.getById(s), e && (e.selected = i[e_](s), e.invalidateRender());
					else {
						if (s = n.id, e = this._n7.getById(s), !e) return;
						e.selected = i.containsById(s), e.invalidateRender()
					}
					this._noo()
				} else {
					this._$m || (this._$m = {});
					var e, s;
					if (k(n))
						for (var r = 0, h = n.length; h > r; r++) s = n[r].id, this._$m[s] = !0;
					else s = n.id, this._$m[s] = !0
				}
		},
		_ky: null,
		_noq: function(t) {
			var i = t.uiClass;
			return i ? new i(t, this._ky) : void 0
		},
		_1d: function() {},
		_25: function(t) {
			if (!this._nno) return !1;
			var i = t[zo],
				n = t.kind;
			Fc == n && this._ky.invalidateVisibility(), rp == n ? (this._n7[rk](i.id), this._ku(i)) : Hp == n && i._i1() && t[xh] && this._60(i);
			var e = this._n7[rd](i.id);
			e && e._nno && e[hk](t) && this._noo()
		},
		_46: function(t) {
			var i = this._l8(t);
			i && (i.invalidateData(), this._noo())
		},
		_nn2: function(t) {
			if (!this._nno) return !1;
			switch (this._$h = !0, t[Dd]) {
				case AD[bl]:
					this._ku(t.data);
					break;
				case AD.KIND_REMOVE:
					this._gw(t[Eo]);
					break;
				case AD.KIND_CLEAR:
					this._hx(t[Eo])
			}
		},
		_l3: function() {
			this._nm0 = {}, N(this, gB, ak)
		},
		_nm0: null,
		_ku: function(t) {
			var i = this._noq(t);
			i && (this._n7[Hh](i), this._nno && (this._nm0[t.id] = t), this._noo())
		},
		_gw: function(t) {
			if (sz[q_](t)) {
				for (var i, n = [], e = 0, s = t.length; s > e; e++) i = t[e].id, n[Vr](i), delete this._nm0[i];
				t = n
			} else t = t.id, delete this._nm0[t];
			this._n7[Ur](t) && this._noo()
		},
		_hx: function() {
			this._l3()
		},
		_7l: function(t) {
			return this._nno ? void(t[zo] instanceof WN && !this._nm0[t[zo].id] && (t[Hd] && (this._46(t.oldValue), t[Hd].__6n = !0), t[xh] && (this._46(t.value), t.value.__6n = !0), this._60(t.source))) : !1
		},
		_36: function(t) {
			return this._nno ? void(t.source instanceof WN && !this._nm0[t.source.id] && this._60(t[zo])) : !1
		},
		_nm2: function(t) {
			return t ? this._$z() : void this._9h()
		},
		_3a: function(t) {
			if (t._edgeBundleInvalidateFlag) {
				var i = t[r_](!0);
				if (!i) return t._edgeBundleInvalidateFlag = !1, void t[ok]();
				i._ff(this._ky), i._nmz(function(t) {
					t[ok]()
				})
			}
		},
		_$z: function() {
			var t, i = (this._ky, this._ky[fu]),
				n = this._n7,
				e = [],
				s = 1;
			if (i[fk](function(i) {
					return i instanceof UN ? (this._3a(i), void e[Vr](i)) : (t = this._noq(i), void(t && (n.add(t), t._hz = this._ev(i, !1, !0), i.__lc = s++)))
				}, this), n.length)
				for (var r = n._j4, s = r.length - 1; s >= 0; s--) t = r[s], t._hz && this._49(t, t.$data);
			for (var h, s = 0, a = e[Gr]; a > s; s++)
				if (h = e[s], t = this._noq(h))
					if (t._hz = this._ev(h, !0, !0), t._hz) {
						this._49(t, h, !0), n[Hh](t);
						var o = h.fromAgent,
							f = h.toAgent,
							_ = o.__lc || 0;
						o != f && (_ = Math[Qo](_, f.__lc || 0)), h.__lc = _
					} else n.add(t);
			if (e[Gr] && n._j4.sort(function(t, i) {
					return t[gf].__lc - i[gf].__lc
				}), this._$m) {
				var c = i.selectionModel;
				for (var u in this._$m)
					if (c.containsById(u)) {
						var t = n.getById(u);
						t && (t.selected = !0)
					}
				this._$m = null
			}
		},
		_9h: function() {
			for (var t in this._nm0) {
				var i = this._nm0[t];
				i instanceof WN ? this._60(i) : this._5y(i)
			}
			this._nm0 = {};
			for (var n, e, s, r = this._n7._j4, h = [], a = r[Gr] - 1; a >= 0; a--) n = r[a], e = n.$data, s = e instanceof UN, s && this._3a(e), n._hz = this._ev(e, s), n._hz ? s ? h.push(n) : this._49(n, e) && !this._$h && (this._$h = !0) : e.__hzChanged && n._nno && (n.__oldBounds = {
				x: n.$x + n.uiBounds.x,
				y: n.$y + n.uiBounds.y,
				width: n.uiBounds.width,
				height: n[Q_][Ja]
			});
			if (h[Gr])
				for (var a = 0, o = h[Gr]; o > a; a++) n = h[a], this._49(n, n[gf]) && !this._$h && (this._$h = !0)
		},
		_49: function(t, i, e) {
			if (e || e === n && i instanceof UN) return i.__5a && (i.__5a = !1, t._5a()), this._d1(t);
			if (i.__6n && i._i1() && (t._61(), i.__6n = !1), this._d1(t)) {
				var s = this._4c(i);
				return s && (s.__6n = !0), i[tp]() && i[b_](function(t) {
					t.__5a = !0
				}, this), !0
			}
		},
		_3c: function(t, i) {
			var n = t[a_],
				e = t.toAgent,
				s = i[_k](n.id);
			if (n == e) return s;
			var r = i[_k](e.id);
			return Math.max(s, r)
		},
		_3e: function(t, i) {
			var n = this[fu]._ga(t);
			return n ? i.getIndexById(n.id) : 0
		},
		_60: function(t) {
			var i = this._n7,
				n = i[rd](t.id);
			if (!n) throw new Error(ck + t.name + uk);
			var s = this._3e(t, i),
				r = [n];
			t[$r]() && e(t, function(t) {
				t instanceof WN && (n = i[rd](t.id), n && r[Vr](n))
			}, this), this._4e(i, s, r)
		},
		_5y: function(t) {
			var i = this._n7[rd](t.id);
			if (i) {
				var n = this._3c(t, this._n7);
				this._n7[dk](i, n)
			}
		},
		_4e: function(t, i, n) {
			function e(t) {
				s[Hh](t)
			}
			var s = new nD;
			l(n, function(n) {
				i = t.setIndexAfter(n, i), n[gf].forEachEdge(e)
			}, this), 0 != s.length && s[Df](this._5y, this)
		},
		_8j: function(t) {
			return t[r_](!0)
		},
		_5t: function(t) {
			if (!t[lk]()) return !1;
			var i = t[r_](!0);
			i && i[vk]() !== !1 && this._noo()
		},
		_4c: function(t) {
			var i = me(t);
			return i && i[Hp] ? i : null
		},
		_gs: function(t) {
			return me(t)
		},
		_3f: function(t, i, n) {
			t._$w = !1;
			var e = t._hz;
			t._hz = this._5e(t, i), n || t._hz == e || (t.__hzChanged = !0)
		},
		_5e: function(t, i) {
			return this._4b(t, i) ? !this._ky._hzFilter || this._ky._hzFilter(t) !== !1 : !1
		},
		_ev: function(t, i, n) {
			return t._$w && this._3f(t, i, n), t._hz
		},
		_nn6: function(t) {
			return !this._ky._43 || this._ky._43 == tr(t)
		},
		_4b: function(t, i) {
			if (t.visible === !1) return !1;
			if (i === n && (i = t instanceof UN), !i) return this._ky._43 != tr(t) ? !1 : !t._e2;
			var e = t.fromAgent,
				s = t[h_];
			if (!e || !s) return !1;
			if (e == s && !t[f_]()) return !1;
			if (t[lk]()) {
				var r = t[r_](!0);
				if (r && !r._ev(t)) return !1
			}
			var h = this._ev(e, !1),
				a = this._ev(s, !1);
			return h && a ? !0 : !1
		},
		_75: null,
		_74: null,
		_47: function(t, i) {
			return i || t != this._75 ? (this._75 = t, this._74 && (this._74._ie(), delete this._74), t == rz.NAVIGATION_SCROLLBAR ? void(this._74 = new rr(this, this._n5)) : t == rz.NAVIGATION_BUTTON ? void(this._74 = new sr(this, this._n5)) : void 0) : !1
		},
		_3l: function(t, i, n, e, s, r) {
			this._ky._53(new pD(this._ky, Xc, {
				tx: e,
				ty: s,
				scale: r
			}, {
				tx: t,
				ty: i,
				scale: n
			})), this._6h()
		},
		_87: function(t, i) {
			this._ky._53(new pD(this._ky, Jo, i, t))
		},
		_6h: function() {
			this._74 && this._74._k4(), this._ky._53(new pD(this._ky, uu))
		},
		_16: function(t, i) {
			this._ky._53(new pD(this._ky, bk, i, t)), this._6h()
		}
	}, D(gB, us), Z(gB[dh], {
		graphModel: {
			get: function() {
				return this._ky._kyModel
			}
		}
	});
	var mB = function(i, n) {
		this._$y = new jD, this._$y.on(function(t) {
			Dp == t.kind && this[ip]()
		}, this), this._1z = new jD, this._1z[Ru](function(t) {
			!this.currentSubNetwork || t.kind != AD[ol] && t.kind != AD[yk] || this[fu][Pc](this[Dp]) || (this.currentSubNetwork = null)
		}, this), this._$d = new jD, this._1g = new jD, this._$n = new jD, this._$u = new jD, this[fu] = n || new is, this._8h = new gB(this, i), this._35 = new Lr(this), this._1o = new jD, this._onresize = $D(t, gk, function() {
			this.updateViewport()
		}, !1, this), this._8h._n5.ondrop = function(t) {
			this.ondrop(t)
		}.bind(this), this._8h._n5[mk] = function(t) {
			this[mk](t)
		}.bind(this)
	};
	mB.prototype = {
		fullRefresh: !1,
		originAtCenter: !0,
		editable: !1,
		ondragover: function(t) {
			sz.stopEvent(t)
		},
		getDropInfo: function(t, i) {
			var n = null;
			if (i) try {
				n = JSON.parse(i)
			} catch (e) {}
			return n
		},
		ondrop: function(t) {
			var i = t[Ek];
			if (i) {
				var n = i[pk](xu),
					e = this.getDropInfo(t, n);
				e || (e = {}, e.image = i[pk](xy), e[wo] = i.getData(wo), e.label = i[pk](Um), e.groupImage = i[pk](Zp));
				var s = this.globalToLocal(t);
				if (s = this[xk](s.x, s.y), !(this.dropAction instanceof Function && this.dropAction[qr](this, t, s, e) === !1) && (e[xy] || e[Um])) {
					var r = e.image,
						h = e.type,
						a = e[Um],
						o = e[Zp];
					sz.stopEvent(t);
					var f;
					if (h && Tk != h ? Qp == h ? f = this.createText(a, s.x, s.y) : Mp == h ? f = this[wk](a, s.x, s.y) : Ok == h ? (f = this.createGroup(a, s.x, s.y), o && (o = Qs(o), o && (f.groupImage = o))) : (h = J(h), h instanceof Function && h[dh] instanceof WN && (f = new h, f.name = a, f[gp] = new rD(s.x, s.y), this._kyModel.add(f))) : f = this[Sk](a, s.x, s.y), f) {
						if (r && (r = Qs(r), r && (f.image = r)), t.shiftKey) {
							var _ = this[jk](t);
							(_.enableSubNetwork || _ instanceof KN) && (f[s_] = _)
						}
						if (e[Ik])
							for (var c in e[Ik]) f[c] = e.properties[c];
						if (e.clientProperties)
							for (var c in e[kk]) f[V_](c, e.clientProperties[c]);
						if (e[Ak] && f[Ip](e[Ak]), this[Lk](f, t, e) === !1) return !1;
						var u = new Ar(this, Ar[Rk], t, f);
						return this[Mk](u), f
					}
				}
			}
		},
		enableDoubleClickToOverview: !0,
		_8h: null,
		_$y: null,
		_1z: null,
		_$d: null,
		_$u: null,
		_1g: null,
		_$n: null,
		_1v: function(t) {
			return this._$y.beforeEvent(t)
		},
		_53: function(t) {
			this._$y[Eh](t)
		},
		isVisible: function(t) {
			return this._8h._ev(t)
		},
		isMovable: function(t) {
			return (t instanceof WN || t instanceof UN && t.hasPathSegments()) && t.movable !== !1
		},
		isSelectable: function(t) {
			return t[Ck] !== !1
		},
		isEditable: function(t) {
			return t[RI] !== !1
		},
		isRotatable: function(t) {
			return t[oS] !== !1
		},
		isResizable: function(t) {
			return t.resizable !== !1
		},
		canLinkFrom: function(t) {
			return t[Pk] !== !1 && t[Dk] !== !1
		},
		canLinkTo: function(t) {
			return t[Pk] !== !1 && t[zk] !== !1
		},
		createNode: function(t, i, n) {
			var e = new WN(t, i, n);
			return this._kyModel[Hh](e), e
		},
		createText: function(t, i, n) {
			var e = new es(t, i, n);
			return this._kyModel[Hh](e), e
		},
		createShapeNode: function(t, i, n, e) {
			S(i) && (e = n, n = i, i = null);
			var s = new XN(t, i);
			return s[yp] = new rD(n, e), this._kyModel[Hh](s), s
		},
		createGroup: function(t, i, n) {
			var e = new KN(t, i, n);
			return this._kyModel[Hh](e), e
		},
		createEdge: function(t, i, n) {
			if (t instanceof WN) {
				var e = n;
				n = i, i = t, t = e
			}
			var s = new UN(i, n);
			return t && (s.$name = t), this._kyModel.add(s), s
		},
		addElement: function(t, i) {
			this._kyModel[Hh](t), i && t[$r]() && t.forEachChild(function(t) {
				this[Nk](t, i)
			}, this)
		},
		removeElement: function(t) {
			this._kyModel[Ur](t)
		},
		clear: function() {
			this._kyModel.clear()
		},
		getStyle: function(t, i) {
			var e = t._jd[i];
			return e !== n ? e : this.getDefaultStyle(i)
		},
		getDefaultStyle: function(t) {
			if (this._jd) {
				var i = this._jd[t];
				if (i !== n) return i
			}
			return yB[t]
		},
		translate: function(t, i, n) {
			return n ? this.translateTo(this.tx + t, this.ty + i, this.scale, n) : this._8h._e8(t, i)
		},
		translateTo: function(t, i, n, e) {
			if (e) {
				var s = this._68();
				return s._l9(t, i, n, e)
			}
			return this._8h._nnk(t, i, n)
		},
		centerTo: function(t, i, n, e) {
			return (!n || 0 >= n) && (n = this[Jo]), this[Bk](this[Za] / 2 - t * n, this[Ja] / 2 - i * n, n, e)
		},
		moveToCenter: function(t, i) {
			this[$k](function() {
				var n = this[uu];
				this[Fk](n.cx, n.cy, t, i)
			}, this)
		},
		zoomToOverview: function(t, i) {
			return this[$k](function() {
				var n = this._8h._1r();
				n && (i && (n[Jo] = Math.min(n[Jo], i)), this[Fk](n.cx, n.cy, n[Jo], t))
			}, this)
		},
		zoomAt: function(t, i, e, s) {
			if (s === n && (s = this[Gk] === n || null === this[Gk] ? tD[qk] : this[Gk]), i === n && (i = this.width / 2), i = i || 0, e === n && (e = this.height / 2), e = e || 0, s) {
				var r = this[Jo];
				return t = r * t, t >= this[Ey] || t <= this[Yk] ? !1 : (i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[Bk](i, e, t, s))
			}
			return this._8h._j6(t, i, e)
		},
		zoomOut: function(t, i, n) {
			return n ? this.zoomAt(1 / this[Hk], t, i, n) : this._8h._ik(t, i)
		},
		zoomIn: function(t, i, n) {
			return n ? this.zoomAt(this[Hk], t, i, n) : this._8h._ja(t, i)
		},
		_68: function() {
			return this._panAnimation || (this._panAnimation = new OB(this)), this._panAnimation
		},
		enableInertia: !0,
		_9n: function(t, i) {
			var n = this._68();
			return n._gx(t || 0, i || 0)
		},
		stopAnimation: function() {
			this._panAnimation && this._panAnimation._m5()
		},
		getUI: function(t) {
			return Q(t) ? this._8h._3n(t) : this._8h._l8(t)
		},
		getUIByMouseEvent: function(t) {
			return this._8h._3n(t)
		},
		hitTest: function(t) {
			return this._8h[Dc](t)
		},
		globalToLocal: function(t) {
			return this._8h._8n(t)
		},
		toCanvas: function(t, i) {
			return this._8h._fo(t, i)
		},
		toLogical: function(t, i) {
			return Q(t) ? this._8h._$g(t) : this._8h._f2(t, i)
		},
		getElementByMouseEvent: function(t) {
			var i = this._8h._3n(t);
			return i ? i[gf] : void 0
		},
		getElement: function(t) {
			if (Q(t)) {
				var i = this._8h._3n(t);
				return i ? i[gf] : null
			}
			return this._kyModel.getById(t)
		},
		invalidate: function() {
			this._8h._noo()
		},
		invalidateUI: function(t) {
			t.invalidate(), this[ep]()
		},
		invalidateElement: function(t) {
			this._8h._46(t)
		},
		getUIBounds: function(t) {
			return this._8h._nmc(t)
		},
		forEachVisibleUI: function(t, i) {
			return this._8h._4j(t, i)
		},
		forEachReverseVisibleUI: function(t, i) {
			return this._8h._12(t, i)
		},
		forEachUI: function(t, i) {
			return this._8h._en(t, i)
		},
		forEachReverseUI: function(t, i) {
			return this._8h._4l(t, i)
		},
		forEach: function(t, i) {
			return this._kyModel.forEach(t, i)
		},
		getElementByName: function(t) {
			var i;
			return this._kyModel.forEach(function(n) {
				return n[Uc] == t ? (i = n, !1) : void 0
			}), i
		},
		focus: function(i) {
			if (i) {
				var n = t.scrollX || t.pageXOffset,
					e = t.scrollY || t[va];
				return this[Zl][Uk](), void t[Ou](n, e)
			}
			this[Zl][Uk]()
		},
		callLater: function(t, i, n) {
			this._8h[$k](t, i, n)
		},
		exportImage: function(t, i) {
			return _r(this, t, i)
		},
		setSelection: function(t) {
			return this._kyModel._selectionModel[V_](t)
		},
		select: function(t) {
			return this._kyModel._selectionModel.select(t)
		},
		unselect: function(t) {
			return this._kyModel._selectionModel.unselect(t)
		},
		reverseSelect: function(t) {
			return this._kyModel._selectionModel.reverseSelect(t)
		},
		selectAll: function() {
			or(this)
		},
		unSelectAll: function() {
			this[ou].clear()
		},
		unselectAll: function() {
			this.unSelectAll()
		},
		isSelected: function(t) {
			return this._kyModel._selectionModel.contains(t)
		},
		sendToTop: function(t) {
			xe(this._kyModel, t)
		},
		sendToBottom: function(t) {
			Te(this._kyModel, t)
		},
		moveElements: function(t, i, n) {
			var e = [],
				s = new nD;
			return l(t, function(t) {
				t instanceof WN ? e.push(t) : t instanceof UN && s[Hh](t)
			}), this._ey(e, i, n, s)
		},
		_ey: function(t, i, n, e) {
			if (0 == i && 0 == n || 0 == t[Gr] && 0 == e[Gr]) return !1;
			if (0 != t[Gr]) {
				var s = this._57(t);
				e = this._55(s, e), l(s, function(t) {
					var e = t[yp];
					e ? t.setLocation(e.x + i, e.y + n) : t.setLocation(i, n)
				})
			}
			return e && e[Gr] && this._ex(e, i, n), !0
		},
		_ex: function(t, i, n) {
			t.forEach(function(t) {
				t.move(i, n)
			})
		},
		_55: function(t, i) {
			return this.graphModel.forEach(function(n) {
				n instanceof UN && this.isMovable(n) && t.contains(n[a_]) && t[Pc](n[h_]) && i[Hh](n)
			}, this), i
		},
		_57: function(t) {
			var i = new nD;
			return l(t, function(t) {
				!this[Wk](t), i.add(t), Ee(t, i, this._movableFilter)
			}, this), i
		},
		reverseExpanded: function(t) {
			return this._8h._5t(t)
		},
		_35: null,
		_1o: null,
		beforeInteractionEvent: function(t) {
			return this._1o.beforeEvent(t)
		},
		onInteractionEvent: function(t) {
			this._1o[Eh](t)
		},
		addCustomInteraction: function(t) {
			this._35.addCustomInteraction(t)
		},
		enableWheelZoom: !0,
		enableTooltip: !0,
		getTooltip: function(t) {
			return t.tooltip || t.name
		},
		updateViewport: function() {
			this._8h._3v();
			var t = new pD(this, Xk);
			this._53(t)
		},
		destroy: function() {
			this._53(new pD(this, J_, !0, this._ieed)), this._ieed = !0, FD(t, gk, this._onresize), F(this, Vk), this._35.destroy(), this[fu] = new is;
			var i = this[Zl];
			this._8h._ie(), i && (i[Kk] = "")
		},
		onPropertyChange: function(t, i, n) {
			this._$y.addListener(function(e) {
				e[Dd] == t && i[qr](n, e)
			})
		},
		removeSelection: function() {
			var t = this.selectionModel._j4;
			return t && 0 != t.length ? (t = t[Ah](), this._kyModel.remove(t), t) : !1
		},
		removeSelectionByInteraction: function(t) {
			var i = this.selectionModel.datas;
			return i && 0 != i[Gr] ? void sz.confirm(Zk + i[Gr], function() {
				var i = this.removeSelection();
				if (i) {
					var n = new Ar(this, Ar[Jk], t, i);
					this[Mk](n)
				}
			}, this) : !1
		},
		createShapeByInteraction: function(t, i, n, e) {
			var s = new $z(i);
			i.length > 2 && s.closePath();
			var r = this[wk](Qk, s, n, e);
			this.onElementCreated(r, t);
			var h = new Ar(this, Ar.ELEMENT_CREATED, t, r);
			return this[Mk](h), r
		},
		createLineByInteraction: function(t, i, n, e) {
			var s = new $z(i),
				r = this[wk](tA, s, n, e);
			r.setStyle(sz.Styles[aT], null), r.setStyle(sz[iA][ES], null), r.setStyle(sz[iA][bT], !0), this[Lk](r, t);
			var h = new Ar(this, Ar[Rk], t, r);
			return this.onInteractionEvent(h), r
		},
		createEdgeByInteraction: function(t, i, n, e) {
			var s = this.createEdge(nA, t, i);
			if (e) s._91 = e;
			else {
				var r = this.edgeUIClass,
					h = this[dp];
				this.interactionProperties && (r = this[eA][rp] || r, h = this[eA].edgeType || h), r && (s[rp] = r), h && (s[dp] = h)
			}
			this[Lk](s, n);
			var a = new Ar(this, Ar.ELEMENT_CREATED, n, s);
			return this.onInteractionEvent(a), s
		},
		onElementCreated: function(t) {
			!t[s_] && this.currentSubNetwork && (t[s_] = this[Dp])
		},
		allowEmptyLabel: !1,
		startLabelEdit: function(t, i, n, e) {
			var s = this;
			n.startEdit(e.x, e.y, i.data, this[tc](t, QN[VT]), function(n) {
				return s[sA](t, i, n, i[s_])
			})
		},
		onLabelEdit: function(t, i, n, e) {
			return n || this.allowEmptyLabel ? void(Um == i.name ? t[Uc] = n : e._g8(i, n) === !1 && (i[Eo] = n, this.invalidateElement(t))) : (sz.alert(rA), !1)
		},
		setInteractionMode: function(t, i) {
			this.interactionMode = t, this[eA] = i
		},
		upSubNetwork: function() {
			return this._43 ? this.currentSubNetwork = tr(this._43) : !1
		},
		_$w: !1,
		invalidateVisibility: function() {
			this._$w = !0, this[ep]()
		},
		getBundleLabel: function(t) {
			var i = t[r_](!0);
			return i && i[hA] == t ? aA + i[oA].length : null
		},
		zoomAnimation: null
	}, Z(mB[dh], {
		center: {
			get: function() {
				return this.toLogical(this[Zl].clientWidth / 2, this[Zl].clientHeight / 2)
			}
		},
		visibleFilter: {
			get: function() {
				return this._hzFilter
			},
			set: function(t) {
				this._hzFilter = t, this[ip]()
			}
		},
		topCanvas: {
			get: function() {
				return this._8h._topCanvas
			}
		},
		propertyChangeDispatcher: {
			get: function() {
				return this._$y
			}
		},
		listChangeDispatcher: {
			get: function() {
				return this._1z
			}
		},
		dataPropertyChangeDispatcher: {
			get: function() {
				return this._$d
			}
		},
		selectionChangeDispatcher: {
			get: function() {
				return this._$u
			}
		},
		parentChangeDispatcher: {
			get: function() {
				return this._1g
			}
		},
		childIndexChangeDispatcher: {
			get: function() {
				return this._$n
			}
		},
		interactionDispatcher: {
			get: function() {
				return this._1o
			}
		},
		cursor: {
			set: function(t) {
				this.html[ta].cursor = t || this._35[vu]
			},
			get: function() {
				return this[Zl][ta][fA]
			}
		},
		interactionMode: {
			get: function() {
				return this._35._nourrentMode
			},
			set: function(t) {
				var i = this[_A];
				i != t && (this._35[Mu] = t, this._53(new pD(this, _A, t, i)))
			}
		},
		scaleStep: {
			get: function() {
				return this._8h._e6
			},
			set: function(t) {
				this._8h._e6 = t
			}
		},
		maxScale: {
			get: function() {
				return this._8h._ho
			},
			set: function(t) {
				this._8h._ho = t
			}
		},
		minScale: {
			get: function() {
				return this._8h._hm
			},
			set: function(t) {
				this._8h._hm = t
			}
		},
		scale: {
			get: function() {
				return this._8h._kq
			},
			set: function(t) {
				return this._8h._kq = t
			}
		},
		tx: {
			get: function() {
				return this._8h._nj
			}
		},
		ty: {
			get: function() {
				return this._8h._ng
			}
		},
		styles: {
			get: function() {
				return this._jd
			},
			set: function(t) {
				this._jd = t
			}
		},
		selectionModel: {
			get: function() {
				return this._kyModel._selectionModel
			}
		},
		graphModel: {
			get: function() {
				return this._kyModel
			},
			set: function(t) {
				if (this._kyModel == t) return !1;
				var i = this._kyModel,
					n = new pD(this, fu, i, t);
				return this._1v(n) === !1 ? !1 : (null != i && (i.propertyChangeDispatcher.removeListener(this._$y, this), i.listChangeDispatcher[nl](this._1z, this), i[pl][nl](this._$d, this), i[Tl][nl](this._1g, this), i[jl][nl](this._$n, this), i.selectionChangeDispatcher[nl](this._$u, this)), this._kyModel = t, this._kyModel && (this._kyModel[cA][Ru](this._$y, this), this._kyModel[El].addListener(this._1z, this), this._kyModel.dataChangeDispatcher[Ru](this._$d, this), this._kyModel[Tl].addListener(this._1g, this), this._kyModel[jl][Ru](this._$n, this), this._kyModel.selectionChangeDispatcher[Ru](this._$u, this)), this._8h && this._8h._l6(), void this._53(n))
			}
		},
		count: {
			get: function() {
				return this._kyModel[Gr]
			}
		},
		width: {
			get: function() {
				return this[Zl][YI]
			}
		},
		height: {
			get: function() {
				return this[Zl].clientHeight
			}
		},
		viewportBounds: {
			get: function() {
				return this._8h._7z
			}
		},
		bounds: {
			get: function() {
				return this._8h._4m()
			}
		},
		html: {
			get: function() {
				return this._8h._n5
			}
		},
		navigationType: {
			get: function() {
				return this._8h._75
			},
			set: function(t) {
				this._8h._47(t)
			}
		},
		_43: {
			get: function() {
				return this._kyModel._43
			}
		},
		currentSubNetwork: {
			get: function() {
				return this._kyModel.currentSubNetwork
			},
			set: function(t) {
				this._kyModel[Dp] = t
			}
		}
	}), ir.prototype = {
		initialize: function() {
			N(this, ir, Tx), this.checkBody()
		},
		_nm7: function() {
			this._mv = new $z, this.shape = new cB(this._mv), this.shape[yf] = !1, this.addChild(this[SS], 0), this[Wb] = this[SS]
		},
		checkBody: function() {
			return this._5m() ? (this._2s = !0, this.shape ? (this.shape[KO] = !0, this[Wb] = this[SS]) : (this._nm7(), rB[jI](this)), void(this.image && (this.image[KO] = !1))) : (this[xy] ? (this[xy][KO] = !0, this.body = this[xy]) : this._nnx(), void(this[SS] && (this[SS].visible = !1)))
		},
		_5m: function() {
			return this[gf]._i1() && this.$data[Hp]
		},
		_mv: null,
		_2s: !0,
		_61: function() {
			this._1q = !0, this._2s = !0
		},
		doValidate: function() {
			if (this._2s && this._5m()) {
				if (this._2s = !1, this[SS][tx](), this[gf].groupImage) {
					this[SS][Eo] = this[gf][Zp];
					var t = this._2r();
					return this[SS].offsetX = t.x + t.width / 2, this[SS].offsetY = t.y + t[Ja] / 2, this[SS][wp] = {
						width: t.width,
						height: t.height
					}, _s[dh].doValidate[qr](this)
				}
				this.shape.offsetX = 0, this.shape.offsetY = 0;
				var i = this._8s(this.$data[Vp]);
				this._mv[wa](), i instanceof fD ? Me(this._mv, i.x, i.y, i[Za], i[Ja], i.rx, i.ry) : i instanceof rn ? Ce(this._mv, i) : i instanceof hn && Pe(this._mv, i), this._mv._6n = !0, this[SS][tx]()
			}
			return _s[dh][wx][qr](this)
		},
		_7g: function(t, i, n) {
			switch (t) {
				case rz[uA]:
					return new rn(0, 0, Math.max(i, n) / 2);
				case rz.GROUP_TYPE_ELLIPSE:
					return new hn(0, 0, i, n);
				default:
					return new fD(-i / 2, -n / 2, i, n)
			}
		},
		_2r: function() {
			return this._8s(null)
		},
		_8s: function(t) {
			var i = this[Eo],
				n = i[Kp],
				e = i.minSize,
				s = 60,
				r = 60;
			if (e && (s = e[Za], r = e[Ja]), !i[$r]()) return this._7g(t, s, r);
			var h, a = this[gf]._fy._j4;
			(t == rz[uA] || t == rz.GROUP_TYPE_ELLIPSE) && (h = []);
			for (var o, f, _, c, u = new fD, d = 0, l = a[Gr]; l > d; d++) {
				var v = a[d];
				if (this[kc][_u](v)) {
					var b = this[kc].getUI(v);
					b && (o = b.$x + b._fp.x, f = b.$y + b._fp.y, _ = b._fp.width, c = b._fp[Ja], u.addRect(o, f, _, c), h && (h.push({
						x: o,
						y: f
					}), h.push({
						x: o + _,
						y: f
					}), h[Vr]({
						x: o + _,
						y: f + c
					}), h.push({
						x: o,
						y: f + c
					})))
				}
			}
			n && u[af](n);
			var y = this.$data[yp];
			y ? y.invalidateFlag && (y.invalidateFlag = !1, y.x = u.cx, y.y = u.cy) : y = this[gf].$location = {
				x: u.cx,
				y: u.cy
			};
			var g, m = y.x,
				E = y.y;
			if (t == rz[uA]) {
				g = an(h), g.cx -= m, g.cy -= E;
				var p = Math[Qo](s, r) / 2;
				return g.r < p && (g.cx += p - g.r, g.cy += p - g.r, g.r = p), g
			}
			return t == rz.GROUP_TYPE_ELLIPSE ? (g = on(h, u), g.cx -= m, g.cy -= E, g[Za] < s && (g.cx += (s - g[Za]) / 2, g[Za] = s), g[Ja] < r && (g.cy += (r - g[Ja]) / 2, g[Ja] = r), g) : (g = u, u[Za] < s && (u[Za] = s), u[Ja] < r && (u.height = r), u[Nb](-m, -E), g)
		},
		_10: function(t, i, n) {
			if (!this._5m()) return N(this, ir, dA, arguments);
			var e = this._nog[lj](this, t, i, n);
			return e = tB[lj](this, t, i, n) || e, e = sB.onBindingPropertyChange(this, t, i, n) || e, rB.onBindingPropertyChange(this, t, i, n) || e
		}
	}, D(ir, _s);
	var EB = {
		draw: function() {}
	};
	tD[lA] = vA, tD[eu] = bA;
	var pB = {
			position: iu,
			"text-align": Rc
		},
		xB = {
			padding: yA,
			transition: gA
		},
		TB = {
			position: mA,
			display: EA
		};
	bi(pA, "opacity:0.7;vertical-align:middle;"), bi(".Q-Graph-Nav img:hover,img.hover", xA), KP || (bi(TA, wA + ND(OA) + SA), bi(jA, IA + ND(OA) + kA)), sr.prototype = {
		_do: function(t, i) {
			return t._hz == i ? !1 : (t._hz = i, void(t[ta].display = i ? "block" : tu))
		},
		_3t: function(t, i) {
			var n = i / 2 - this._left._img[hu] / 2 + io;
			this._left._img[ta].top = n, this._right._img.style.top = n, this._navPane[ta][Za] = t + io, this._navPane[ta][Ja] = i + io
		},
		_nn8: function(t, i, n, e) {
			this._do(this._top, t), this._do(this._left, i), this._do(this._nmottom, n), this._do(this._right, e)
		},
		_ie: function() {
			var t = this._navPane[Yb];
			t && t[Sl](this._navPane)
		},
		_k4: function() {
			var t = this._nor._ky;
			if (t) {
				var i = t.bounds;
				if (i[mf]()) return void this._nn8(!1, !1, !1, !1);
				var n = t.viewportBounds,
					e = n.y > i.y + 1,
					s = n.x > i.x + 1,
					r = n[Gh] < i.bottom - 1,
					h = n.right < i[Fh] - 1;
				this._nn8(e, s, r, h)
			}
		}
	};
	var wB = 8;
	bi(AA, LA), bi(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + ND(OA) + ": background-color 0.2s linear;"), bi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), bi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), bi(".Q-Graph-ScrollBar--V.Both", RA), bi(".Q-Graph-ScrollBar--H.Both", MA), KP || (bi(CA, wA + ND(OA) + PA), bi(".Q-Graph:hover .Q-Graph-ScrollPane", IA + ND(OA) + ":opacity 0.3s linear;")), rr.prototype = {
		_ie: function() {
			this._verticalDragSupport._ie(), this._horizontalDragSupport._ie(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._m2[Yb] && this._m2.parentNode[Sl](this._m2)
		},
		_m2: null,
		_no4: null,
		_8q: null,
		init: function(t) {
			var n = i.createElement(Gc);
			n[Kr] = DA, di(n, {
				width: nu,
				height: nu,
				position: mA
			});
			var e = i.createElement(Gc);
			e[Kr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
			var s = i[ao](Gc);
			s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n.appendChild(s), t[Kc](n), this._m2 = n, this._8q = s, this._no4 = e, s.isH = !0;
			var r = this,
				h = {
					ondrag: function(t, i) {
						var n = r._nor._ky;
						if (n) {
							var e = i.isH,
								s = e ? t.dx : t.dy;
							if (s && i.scale) {
								var h = n[Jo] / i.scale;
								e ? n[Do](-h * s, 0) : n.translate(0, -h * s), sz.stopEvent(t)
							}
						}
					},
					enddrag: function(t, i) {
						var n = r._nor._ky;
						if (n && n.enableInertia) {
							var e = i.isH,
								s = e ? t.vx : t.vy;
							if (Math.abs(s) > .1) {
								var h = n[Jo] / i[Jo];
								s *= h, e ? n._9n(-s, 0) : n._9n(0, -s)
							}
						}
					}
				};
			this._verticalDragSupport = new ji(e, h), this._horizontalDragSupport = new ji(s, h)
		},
		_k4: function() {
			var t = this._nor._ky;
			if (t) {
				var i = t[uu];
				if (i[mf]()) return this._4t(!1), void this._4r(!1);
				var n = t.viewportBounds,
					e = t[Za],
					s = t[Ja],
					r = t[Jo],
					h = 1 / r,
					a = n.x > i.x + h || n[Fh] < i.right - h,
					o = n.y > i.y + h || n[Gh] < i.bottom - h,
					f = a && o;
				f ? (w(this._no4, zA), w(this._8q, zA)) : (O(this._no4, zA), O(this._8q, zA)), this._4t(a, n, i, f ? e - wB : e), this._4r(o, n, i, f ? s - wB : s)
			}
		},
		_4t: function(t, i, n, e) {
			if (!t) return this._8q[ta][NE] = tu, void(this._8q[Jo] = 0);
			var s = Math[Io](i.x, n.x),
				r = Math.max(i[Fh], n[Fh]),
				h = r - s,
				a = e / h;
			this._8q.scale = a, this._8q[ta].left = parseInt((i.x - s) * a) + io, this._8q.style.right = parseInt((r - i[Fh]) * a) + io, this._8q[ta][NE] = ""
		},
		_4r: function(t, i, n, e) {
			if (!t) return this._no4[ta].display = tu, void(this._no4[Jo] = 0);
			var s = Math[Io](i.y, n.y),
				r = Math[Qo](i[Gh], n.bottom),
				h = r - s,
				a = e / h;
			this._no4[Jo] = a, this._no4[ta][ya] = parseInt((i.y - s) * a) + io, this._no4[ta][Gh] = parseInt((r - i[Gh]) * a) + io, this._no4[ta].display = ""
		}
	}, hr.prototype = {
		shape: null,
		initialize: function() {
			N(this, hr, Tx), this._nnx(), oB[jI](this)
		},
		_nnx: function() {
			this[xy] = new dB(this.$data.path), this.addChild(this[xy], 0), this.body = this[xy]
		},
		invalidateShape: function() {
			this[xy].invalidateData(), this[vj]()
		},
		_10: function(t, i, n) {
			var e = this._nog.onBindingPropertyChange(this, t, i, n);
			return e = tB[lj](this, t, i, n) || e, oB[lj](this, t, i, n) || e
		},
		doValidate: function() {
			this.body && (this[Wb][cx] = null != this._2y, this[Wb].anchorPosition = this._2y);
			var t = this[gf][yp],
				i = 0,
				n = 0;
			t && (i = t.x, n = t.y);
			var e = this.$x != i || this.$y != n;
			return e && (this.$invalidateBounds = !0), this.$x = i, this.$y = n, _B[dh][wx][qr](this) || e
		}
	}, D(hr, _B), Z(hr[dh], {
		path: {
			get: function() {
				return this[Eo][Ap]
			}
		},
		length: {
			get: function() {
				return this.data.length
			}
		}
	}), hr.prototype[Qa] = function(t, i, n) {
		var e = this._hy(t, i),
			s = this[Eo],
			r = jn(s[Ap], e.x, e.y, n);
		r && (s[NA] = r)
	}, ar[dh] = {
		_mo: function() {
			this._jg.style.visibility = KO
		},
		_j3: function() {
			this._jg[ta][Ub] = Qc
		},
		clear: function() {
			this._nn4[wa](), this._noo()
		},
		contains: function(t) {
			return t instanceof Object && t.id && (t = t.id), this._nn4.containsById(t)
		},
		addDrawable: function(t, i) {
			if (i) {
				var n = {
					id: ++PP,
					drawable: t,
					scope: i
				};
				return this._nn4[Hh](n), n
			}
			return t.id || (t.id = ++PP), this._nn4[Hh](t), t
		},
		removeDrawable: function(t) {
			return t.id ? void this._nn4.remove(t) : this._nn4[rk](t)
		},
		_nn4: null,
		invalidate: function() {
			this._noo()
		},
		_noo: function() {
			this._nor._6n || this._j5()
		},
		_j5: function() {
			vi(this._jg, Xc, "");
			var t = this._nor._kq,
				i = this.g;
			i.setTransform(1, 0, 0, 1, 0, 0), i[zf](0, 0, this._jg[Za], this._jg.height), i[Zb](), this._nor._jy._nnm(i);
			for (var n = this._nn4._j4, e = 0, s = n.length; s > e; e++) i[Zb](), i.beginPath(), this._ft(i, n[e], t), i[_y]();
			i[_y]()
		},
		_ft: function(t, i, n) {
			return i instanceof Function ? void i(t, n) : void(i[BA] instanceof Function && i[vh] && i.drawable[qr](i[vh], t, n))
		}
	}, tD[qk] = !0;
	var OB = function(t) {
		this._ky = t
	};
	tD[$A] = 600, tD[FA] = tz[GA], OB[dh] = {
		_ky: null,
		_nn: .001,
		_et: null,
		_noy: function(t) {
			return t > 1 ? 1 : -1 > t ? -1 : t
		},
		_gx: function(t, i) {
			t *= .6, i *= .6, t = this._noy(t), i = this._noy(i), this._m5();
			var n = Math[lo](t * t + i * i);
			if (.01 > n) return !1;
			var e = Math[Io](tD[$A], n / this._nn);
			this._speedX = t, this._speedY = i, this._nnX = t / e, this._nnY = i / e, this._et = new nz(this._63, this, e, tz[qA]), this._et._kk()
		},
		_63: function(t, i) {
			if (0 != t) {
				var n = this._speedX * i - .5 * this._nnX * i * i,
					e = this._speedY * i - .5 * this._nnY * i * i;
				this._speedX -= this._nnX * i, this._speedY -= this._nnY * i, this._ky.translate(n, e)
			}
		},
		_m5: function() {
			this._et && this._et._m5()
		},
		_ic: function(t) {
			var i = this._fromTX + (this._toTX - this._fromTX) * t,
				n = this._fromTY + (this._toTY - this._fromTY) * t,
				e = this._fromScale + (this._toScale - this._fromScale) * t;
			this._ky[Bk](i, n, e)
		},
		_l9: function(t, i, n, e) {
			var s = this._ky,
				r = s.scale;
			if (0 >= n && (n = r), this._m5(), t != s.tx || i != s.ty || n != r) {
				var h, a, o;
				e instanceof Object && (h = e.duration, a = e.maxTime, o = e.animationType);
				var f = s.tx,
					_ = s.ty;
				if (!h) {
					var c = hD(t, i, f, _);
					if (h = c / 2, n != r) {
						var u = n > r ? n / r : r / n;
						h = Math[Qo](h, 50 * u)
					}
				}
				a = a || tD.ANIMATION_MAXTIME, o = o || tD[FA], h = Math[Io](a, h), this._fromTX = f, this._fromTY = _, this._fromScale = r, this._toTX = t, this._toTY = i, this._toScale = n, this._et = new nz(this._ic, this, h, o), this._et._kk()
			}
		}
	}, tD.INTERACTION_HANDLER_SIZE_TOUCH = 8, tD.INTERACTION_HANDLER_SIZE_DESKTOP = 4, tD[YA] = 30, tD.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
	var SB = Math.PI / 4;
	cr[dh] = {
		onElementRemoved: function(t, i) {
			this[HA] && (t == this.element || k(t) && E(t, this[HA])) && this[J_](i)
		},
		onClear: function(t) {
			this[HA] && this[J_](t)
		},
		destroy: function() {
			delete this[HA], this[UA]()
		},
		invalidate: function() {
			this[lu][ep]()
		},
		removeDrawable: function() {
			this._g2Id && (this.topCanvas.removeDrawable(this._g2Id), delete this._g2Id, this.invalidate())
		},
		addDrawable: function() {
			this._g2Id || (this._g2Id = this.topCanvas.addDrawable(this[WA], this).id, this.invalidate())
		},
		doDraw: function() {},
		escapable: !0,
		onkeydown: function(t, i) {
			this.escapable && 27 == t[XA] && (R(t), this.destroy(i))
		}
	}, sz[VA] = cr, ur[dh] = {
		defaultCursor: bu,
		getInteractionInstances: function(t) {
			if (!this.interactions) return null;
			for (var i = [], n = 0, e = this.interactions[Gr]; e > n; n++) {
				var s = this[KA][n];
				s instanceof Function ? i.push(new s(t)) : s instanceof Object && i[Vr](s)
			}
			return i
		}
	}, dr[dh] = {
		_f3: null,
		_jq: null,
		destroy: function() {
			N(this, dr, J_, arguments), delete this._jq, delete this._9j, delete this._f3
		},
		doDraw: function(t) {
			var i = this.points;
			i && (i[Df](function(i) {
				this[ZA](t, i)
			}, this), this[JA] && t.closePath(), this[QA](t))
		},
		styleDraw: function(t) {
			var i = lr(this.graph[eA], this[tL](this[kc]));
			i.lineWidth && (t[po] = i.lineWidth, i[Ky] && (t[Ky] = i.lineCap), i[Zy] && (t[Zy] = i[Zy]), i.lineDash && (t[wf] = i[wf], t[Of] = i.lineDashOffset || 0), t.strokeStyle = i.strokeStyle, t[ng]()), i[Jb] && (t[Jb] = i[Jb], t.fill())
		},
		drawPoint: function(t, i, n) {
			if (n) return void t.moveTo(i.x, i.y);
			if (sz[q_](i)) {
				var e = i[0],
					s = i[1];
				t.quadraticCurveTo(e.x, e.y, s.x, s.y)
			} else t[g_](i.x, i.y)
		},
		setCurrentPoint: function(t) {
			this.currentPoint = t
		},
		addPoint: function(t) {
			this._jq || (this._jq = [], this.addDrawable()), this._jq[Vr](t), this[ep]()
		}
	}, Z(dr.prototype, {
		currentPoint: {
			get: function() {
				return this._9j
			},
			set: function(t) {
				this._9j = t, this.invalidate()
			}
		},
		prevPoint: {
			get: function() {
				return this._jq && this._jq[Gr] ? this._jq[this._jq.length - 1] : null
			}
		},
		points: {
			get: function() {
				return this._9j && this._jq && this._jq[Gr] ? this._jq[Oo](this._9j) : void 0
			}
		}
	}), D(dr, cr), sz.DrawPathInteraction = dr, vr.prototype = {
		destroy: function() {
			N(this, vr, J_, arguments), delete this._kkTime, delete this[iL]
		},
		doDraw: function(t, i) {
			return this._jq ? this._jq[Gr] <= 1 ? gr[dh].doDraw[qr](this, t, i) : void N(this, vr, WA, arguments) : void 0
		},
		ondblclick: function(t, i) {
			this.destroy(i)
		},
		finish: function(t, i, n) {
			if (this._kkTime && Date.now() - this._kkTime < 200) return void this[J_](i);
			var e;
			this._jq && this._jq[Gr] >= 2 && (this._jq.shift(), e = new nD, l(this._jq, function(t) {
				if (sz[q_](t)) {
					var i = t[0],
						n = t[1];
					e[Hh](new Nz(rz.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]))
				} else e.add(new Nz(rz.SEGMENT_LINE_TO, [t.x, t.y]))
			}, this)), i.createEdgeByInteraction(this[iL], n, t, e), this[J_](i)
		},
		onstart: function(t, i) {
			if (2 != t[Oa]) {
				var n = t.getData();
				if (this[iL]) {
					var e = n instanceof WN && i.canLinkTo(n, this[iL]);
					return e ? void this[nL](t, i, n) : void this[Qa](this[eL](t))
				}
				var s = n instanceof WN && i.canLinkFrom(n);
				s && (this[iL] = n, this._kkTime = Date[gv](), this[Qa](this[eL](t)))
			}
		},
		onmousemove: function(t) {
			this.start && this[sL](this[eL](t))
		},
		toLogicalPoint: function(t) {
			return this[kc][xk](t)
		},
		startdrag: function(t) {
			this[iL] && (t.responded = !0)
		},
		ondrag: function(t) {
			this.start && this[sL](this[eL](t))
		},
		enddrag: function(t, i) {
			if (this.start) {
				var n = t[pk](),
					e = n instanceof WN && i.canLinkTo(n, this.start);
				e && this[nL](t, i, n)
			}
		},
		getDefaultDrawStyles: function() {
			return {
				lineWidth: this[kc].getDefaultStyle(QN[Yw]),
				strokeStyle: this.graph[rL](QN.EDGE_COLOR),
				lineDash: this[kc][rL](QN.EDGE_LINE_DASH),
				lineDashOffset: this.graph.getDefaultStyle(QN[hL]),
				lineCap: this.graph[rL](QN.LINE_CAP),
				lineJoin: this[kc][rL](QN[lT])
			}
		}
	}, D(vr, dr), sz.CreateEdgeInteraction = vr, br[dh] = {
		getDefaultDrawStyles: function() {
			return {
				lineWidth: this[kc][rL](QN.SHAPE_STROKE),
				strokeStyle: this.graph[rL](QN.SHAPE_STROKE_STYLE),
				fillStyle: this.graph[rL](QN[aT])
			}
		},
		finish: function(t, i) {
			if (this._jq && this._jq[Gr]) {
				var n = this._jq,
					e = 0,
					s = 0,
					r = 0;
				n.forEach(function(t) {
					return sz.isArray(t) ? void t[Df](function() {
						e += t.x, s += t.y, r++
					}) : (e += t.x, s += t.y, void r++)
				}), e /= r, s /= r;
				var h = [];
				n[Df](function(t, i) {
					if (0 == i) return void h[Vr](new Nz(rz[Dy], [t.x - e, t.y - s]));
					if (sz.isArray(t)) {
						var n = t[0],
							r = t[1];
						h.push(new Nz(rz[Ny], [n.x - e, n.y - s, r.x - e, r.y - s]))
					} else h[Vr](new Nz(rz[zy], [t.x - e, t.y - s]))
				}), this[ao](t, h, e, s), this[J_](i)
			}
		},
		startdrag: function(t) {
			t.responded = !0
		},
		createElement: function(t, i, n, e) {
			return this[kc].createShapeByInteraction(t, i, n, e)
		},
		onstart: function(t, i) {
			var n = i.toLogical(t);
			this._f3 = n, this[Qa](n)
		},
		onmousemove: function(t, i) {
			this._f3 && (this[aL] = i[xk](t))
		},
		ondblclick: function(t, i) {
			if (this._f3) {
				if (this._jq[Gr] < 3) return void this.destroy(i);
				delete this._jq[this._jq[Gr] - 1], this[nL](t, i)
			}
		},
		isClosePath: !0
	}, D(br, dr), sz.CreateShapeInteraction = br, yr[dh] = {
		isClosePath: !1,
		createElement: function(t, i, n, e) {
			return this[kc][oL](t, i, n, e)
		},
		getDefaultDrawStyles: function() {
			return {
				lineWidth: yB[QN[bS]],
				strokeStyle: yB[QN.SHAPE_STROKE_STYLE],
				lineDash: this[kc][rL](QN[sT]),
				lineDashOffset: this[kc][rL](QN[hT]),
				lineCap: this[kc][rL](QN[uT]),
				lineJoin: this[kc][rL](QN[lT])
			}
		}
	}, D(yr, br), sz[fL] = yr, gr.prototype = {
		destroy: function(t) {
			N(this, gr, J_, arguments), t[fA] = "", this[iL] = null
		},
		doDraw: function(t) {
			if (this.start && this.currentPoint) {
				var i, n;
				this[kc].interactionProperties && (i = this[kc][eA].uiClass, n = this.graph.interactionProperties[dp]), i = i || this[kc][_L] || sz.EdgeUI, n = n || this[kc][dp];
				var e = i.drawReferenceLine || sz[cL].drawReferenceLine,
					s = this[kc][ga](this[iL]);
				s && s.bodyBounds && (s = s.bodyBounds.center, e(t, s, this.currentPoint, n), this[QA](t))
			}
		},
		canLinkFrom: function(t, i) {
			return t instanceof WN && i.canLinkFrom(t)
		},
		canLinkTo: function(t, i) {
			return t instanceof WN && i.canLinkTo(t, this[iL])
		},
		startdrag: function(t, i) {
			var n = t[pk]();
			this[Dk](n, i) && (t.responded = !0, this[iL] = n, i[fA] = dv, this[uL]())
		},
		ondrag: function(t, i) {
			this[iL] && (sz.stopEvent(t), this.currentPoint = i[xk](t), this.invalidate())
		},
		enddrag: function(t, i) {
			if (this[iL]) {
				this[ep]();
				var n = t[pk]();
				this[zk](n, i) && i[dL](this[iL], n, t), this.destroy(i)
			}
		},
		getDefaultDrawStyles: function() {
			return {
				lineWidth: this[kc][rL](QN.EDGE_WIDTH),
				strokeStyle: this[kc][rL](QN.EDGE_COLOR),
				lineDash: this[kc][rL](QN.EDGE_LINE_DASH),
				lineDashOffset: this[kc].getDefaultStyle(QN.EDGE_LINE_DASH_OFFSET),
				lineCap: this.graph.getDefaultStyle(QN[uT]),
				lineJoin: this.graph[rL](QN[lT])
			}
		}
	}, D(gr, dr), sz[lL] = gr, tD.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, wr[dh] = {
		html: null,
		createHTML: function() {
			var t = i[ao](vL);
			t[Kr] = bL, t.style[bf] = iu, t[ta][Hj] = Rc, t.style[Nv] = yL, t[ta].padding = gL, t[ta][mL] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style[NE] = tu, t.style.overflow = Qc;
			var n = this;
			return t[EL] = function(t) {
				n[pL](t)
			}, t.onkeydown = function(t) {
				return 27 == t[XA] ? void n[xL]() : void 0
			}, t[TL] = function(i) {
				if (13 == i[XA] || 10 == i[XA]) {
					if (i[$l](), i[nE] || i[iE] || i[wL]) return xr(t, co), void n[pL](i);
					n[OL]()
				}
			}, i[Wb].appendChild(t), t
		},
		setText: function(t, i) {
			this.html.value = t || "", i && (this[Zl].style[gu] = i), Tr(this[Zl]), this.onSizeChange(this.html)
		},
		onSizeChange: function(t) {
			var i = (t.offsetWidth, t[ku], pr(t));
			return t[ta].width = i[Za] + 30 + io, t[ta][Ja] = i[Ja] + 10 + io, i
		},
		onValueChange: function(t) {
			var i = t[Y_];
			this.onSizeChange(i), i[ta].left = i.x - i[SL] / 2 + io
		},
		onClickOnWindow: function(t) {
			t[Y_] != this.html && (tD.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this.stopEdit() : this[xL]())
		},
		startEdit: function(i, n, e, s, r) {
			this.html || (this.html = this[jL]()), this[IL] || (this.stopEditWhenClickOnWindow = function(t) {
				this[kL](t)
			}[Vb](this)), t.addEventListener(AL, this[IL], !0), this.callback = r, this.html.x = i, this[Zl].y = n, this[Zl][ta].display = EA, Er(this[Zl], i, n), this[LL](e, s || 10), Er(this[Zl], i, n)
		},
		isEditing: function() {
			return tu != this[Zl].style[NE]
		},
		cancelEdit: function() {
			this[OL](!0)
		},
		stopEdit: function(i) {
			if (this[RL]()) {
				t[Bl](AL, this.stopEditWhenClickOnWindow);
				var n = this[Zl][xh];
				if (!i && this[W_] && this[W_](n) === !1) return !1;
				this.html[ta].display = tu, this.html.value = null, this[W_] = null
			}
		},
		destroy: function() {
			this.html && i.body[Sl](this[Zl])
		}
	}, sz[ML] = wr;
	var jB = function(t) {
		this[kc] = t
	};
	jB[dh] = {
		destroy: function(t) {
			t[CL] && (t[CL][J_](), delete t.labelEditor)
		},
		ondblclick: function(t, i) {
			var n = t[pk]();
			if (!n) return i.currentSubNetwork ? void i[PL]() : void(i.enableDoubleClickToOverview && i.zoomToOverview(tD[qk]));
			if (i.editable && i[DL](n)) {
				var e = i[Dc](t);
				if (e instanceof uB && e.editable !== !1) {
					var s = i.labelEditor;
					s || (i[CL] = s = new wr);
					var r = e.getBounds();
					return r = i.toCanvas(r.x + r.width / 2, r.y + r[Ja] / 2), r = mr(r.x, r.y, i[Zl]), void i[zL](n, e, s, r)
				}
			}
			var h = n instanceof KN,
				a = n instanceof UN && n[NL]();
			return n._4h && (Ii(t) || !h && !a) ? void(i.currentSubNetwork = n) : h ? void(n.expanded = !n[Hp]) : a ? void this.graph.reverseExpanded(n) : void 0
		}
	};
	var IB = function(t) {
		this[kc] = t
	};
	IB[dh] = {
		onkeydown: function(t, i) {
			if (i.editable) {
				var n = t[XA];
				if (8 == n || 46 == n || 127 == n) return i[BL](t), void A(t);
				if (Ii(t)) {
					if (67 == n);
					else if (86 == n);
					else if (90 == n);
					else if (89 != n) return;
					A(t)
				}
			}
		}
	}, sz[$L] = IB;
	var kB = function(t) {
		this[kc] = t
	};
	kB.prototype = {
		onkeydown: function(i, n) {
			if (i[Na] && 83 == i[XA]) {
				var e = n[FL](n[Jo], n.viewportBounds),
					s = t[GL](),
					r = s.document;
				r.title = qL + e.width + YL + e[Ja];
				var h = r[ao](Yc);
				h[Wc] = e[Eo], r[Wb][Kc](h), A(i)
			}
		}
	};
	var AB = function(t) {
		this[kc] = t
	};
	AB.prototype = {
		destroy: function() {
			delete this[HL], delete this[UL]
		},
		_2g: function(t) {
			var i = new nD;
			return t[ou][Df](function(n) {
				t[Wk](n) && t[_u](n) && i[Hh](n)
			}, this), i
		},
		onstart: function(t, i) {
			this[UL] && this[J_](i)
		},
		startdrag: function(t, i) {
			if (!t[WL]) {
				var n = t.getData();
				if (!n || !i.isSelected(n) || !i.isMovable(n)) return void this[J_](i);
				t.responded = !0, this[UL] = n, this[HL] = this._2g(i);
				var e = new Ar(i, Ar[XL], t, this[UL], this[HL][Lu]);
				return i[VL](e) === !1 ? void this.destroy(i) : void i.onInteractionEvent(e)
			}
		},
		ondrag: function(t, i) {
			if (this[UL]) {
				R(t);
				var n = t.dx,
					e = t.dy,
					s = i.scale;
				n /= s, e /= s;
				var r = new Ar(i, Ar[KL], t, this[UL], this[HL][Lu]);
				i.moveElements(this[HL][Lu], n, e), i.onInteractionEvent(r)
			}
		},
		enddrag: function(t, i) {
			if (this[UL]) {
				if (this[HL] && this.draggingElements[Gr]) {
					if (t[wL]) {
						var n, e = i.toLogical(t),
							s = e.x,
							r = e.y;
						i.forEachReverseVisibleUI(function(t) {
							var i = t[Eo];
							if (!this[HL][Pc](i) && t.uiBounds.intersectsPoint(s - t.x, r - t.y) && t[Dc](s, r, 1)) {
								if (i instanceof sz[nA]) {
									if (!i[Fc]) return;
									for (var e = this[HL][Gr]; e-- > 0;) {
										var h = this[HL][mh](e);
										if (h instanceof sz[Tk] && h.linkedWith(i)) return
									}
									return n = i, !1
								}
								return (i.enableSubNetwork || i._i1() && i[Hp]) && (n = i), !1
							}
						}, this), n && this[HL][Df](function(t) {
							for (var i = t[s_]; i;) {
								if (this[HL][Pc](i)) return;
								i = i[s_]
							}
							t.parent = n
						}, this)
					}
					var h = new Ar(i, Ar[ZL], t, this.currentDraggingElement, this[HL].datas);
					i.onInteractionEvent(h)
				}
				this[J_](i)
			}
		},
		onpinch: function(t, i) {
			this[UL] && this.enddrag(t, i)
		},
		step: 1,
		onkeydown: function(t, i) {
			if (Ii(t)) {
				var n, e;
				if (37 == t[XA] ? n = -1 : 39 == t[XA] ? n = 1 : 38 == t[XA] ? e = -1 : 40 == t[XA] && (e = 1), n || e) {
					var s = this._2g(i)[Lu];
					if (0 != s.length) {
						A(t), n = n || 0, e = e || 0;
						var r = this.step / i[Jo],
							h = new Ar(i, Ar.ELEMENT_MOVE_END, t, null, s);
						i[JL](s, n * r, e * r), i[Mk](h)
					}
				}
			}
		}
	};
	var LB = function(t) {
		this.graph = t
	};
	LB[dh] = {
		onkeydown: function(t, i) {
			Ii(t) || (37 == t.keyCode ? (this._6d(i, 1, 0), A(t)) : 39 == t[XA] ? (this._6d(i, -1, 0), A(t)) : 38 == t[XA] ? (this._6d(i, 0, 1), A(t)) : 40 == t[XA] && (this._6d(i, 0, -1), A(t)))
		},
		_6d: function(t, i, n) {
			t._9n(i, n)
		},
		onstart: function(t, i) {
			this._kk && this[J_](i)
		},
		_kk: !1,
		startdrag: function(t, i) {
			t.responded || (t.responded = !0, this._kk = !0, i.cursor = XD)
		},
		ondrag: function(t, i) {
			this._kk && (R(t), i[Do](t.dx || 0, t.dy || 0))
		},
		enddrag: function(t, i) {
			if (this._kk) {
				if (i.enableInertia !== !1) {
					var n = t.vx,
						e = t.vy;
					(Math[qh](n) > .1 || Math.abs(e) > .1) && i._9n(n, e)
				}
				this.destroy(i)
			}
		},
		onpinch: function(t, i) {
			this._kk = !0;
			var n = t[iv];
			if (n && 1 != n) {
				var e = i[cu](t.center);
				i[QL](n, e.x, e.y, !1)
			}
		},
		destroy: function(t) {
			this._kk = !1, t.cursor = null
		}
	}, Or[dh] = {
		_25: function(t) {
			this[HA] && t[zo] == this[HA] && this[kc][$k](function() {
				this._k4()
			}, this)
		},
		_7: function() {
			this._m9PropertyChangeListing || (this._m9PropertyChangeListing = !0, this[kc].dataPropertyChangeDispatcher.addListener(this._25, this))
		},
		_3: function() {
			this._m9PropertyChangeListing = !1, this.graph[tR][nl](this._25, this)
		},
		onElementRemoved: function(t, i) {
			this.element && (t == this.element || k(t) && E(t, this[HA])) && this.destroy(i)
		},
		onClear: function(t) {
			this[HA] && this[J_](t)
		},
		destroy: function() {
			this[kc][fA] = null, this.element && delete this.element._editting, delete this.element, delete this._91, delete this._9j, delete this._noanEdit, this._6v(), this._3()
		},
		_6v: function() {
			this[iR] && (this.topCanvas[UA](this[iR]), delete this[iR], this[lu].invalidate())
		},
		_nmt: function() {
			this[iR] && this[lu][Pc](this[iR]) || (this[iR] = this[lu].addDrawable(this.drawLine, this).id, this.topCanvas[ep]())
		},
		_91: null,
		_5n: function(t) {
			this._91 = t, this[ep]()
		},
		_f5: function(t, i, n) {
			t[cg](), i.isControlPoint ? t[tb](i.x - this[Su] / n, i.y - this.handlerSize / n, this[Su] / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[Su] / n, 0, 2 * Math.PI, !1), t[po] = 1 / n, t.lineDash = [], t.strokeStyle = ey, t.fillStyle = "rgba(255, 255, 0, 0.8)", t.stroke(), t[Ig]()
		},
		_g2: function(t, i, n, e) {
			e ? t[p_](i, n) : t[g_](i, n)
		},
		drawLine: function(t, i) {
			if (this._91 && this._91[Gr]) {
				t[Zb]();
				var n = this[HA] instanceof XN;
				n && (t.translate(this[HA].x, this.element.y), this[HA][So] && t[So](this[HA][So]));
				var e, s = [];
				t[cg](), this._91[Gr], l(this._91, function(i) {
					if (i.type != rz[Fy])
						for (var n = 0, r = i[Ba]; n + 1 < r[Gr];) {
							var h = r[n],
								a = r[n + 1],
								o = {
									x: h,
									y: a,
									isControlPoint: this._6q(i, n)
								};
							s[Vr](o), this._g2(t, o.x, o.y, null == e), e = o, n += 2
						}
				}, this), t[po] = 1 / i, t[wf] = [2 / i, 3 / i], t[ry] = nR, t[ng](), l(s, function(n) {
					this._f5(t, n, i)
				}, this), t[_y]()
			}
		},
		invalidate: function() {
			this.topCanvas.invalidate()
		},
		_3y: function(t) {
			if (this[HA] != t && (this.element && this[J_](), t && this[DL](t))) {
				var i = this._5h(t, this[kc]);
				i && (this.element = t, t._editting = !0, this._noanEdit = !0, this._5n(i), this._7(), this._nmt())
			}
		},
		_k4: function() {
			if (this.drawLineId && this.element) {
				var t = this._5h(this[HA], this[kc]);
				return t ? void this._5n(t) : void this.destroy(this[kc])
			}
		},
		_5h: function(t, i) {
			return i.isEditable(t) ? t.pathSegments || [] : void 0
		},
		_hy: function(t, i) {
			t -= this[HA].x, i -= this[HA].y;
			var n = {
				x: t,
				y: i
			};
			return this[HA].rotate && Ns(n, -this.element.rotate), n
		},
		onclick: function(t, i) {
			if (i[RI] && t[nE] && this[HA]) {
				var n = this._g6(t, i);
				if (n && n[eR]) return void this[HA].removePathSegmentByIndex(n[sl]);
				if (this.element == t[pk]()) {
					var e = i[xk](t),
						s = i[ga](this[HA]);
					s.addPoint(e.x, e.y, this[Su] || 2)
				}
			}
		},
		isEditable: function(t) {
			return this.graph.isEditable(t) && (t instanceof UN || t instanceof XN)
		},
		ondblclick: function(t, i) {
			if (!i[RI]) return void(this[HA] && this[J_](i));
			var n = t.getData();
			return !n || n == this.element || n._editting ? void this[J_](i) : void this._3y(n)
		},
		onstart: function(t, i) {
			if (!i[RI]) return void(this[HA] && this.destroy(i));
			if (!t.responded) {
				if (this.element && this._g6(t, i)) return void(t.responded = !0);
				var n = t[pk]();
				return n && i.isResizable(n) && n instanceof XN ? void(this[HA] && n != this[HA] && this.destroy()) : void this._3y(n)
			}
		},
		onrelease: function() {
			this[HA] && (this._noanEdit = !0)
		},
		_9j: null,
		_g6: function(t, i) {
			var n = i[xk](t);
			this[HA] instanceof XN && (n = this._hy(n.x, n.y));
			var e, s = i[Jo],
				r = this.handlerSize / s,
				h = this._91;
			return l(h, function(t, i) {
				for (var s = 0, a = t[Ba]; s + 1 < a[Gr];) {
					var o = a[s],
						f = a[s + 1],
						_ = hD(n.x, n.y, o, f);
					if (r > _) {
						if (e = {
								segment: t,
								index: i,
								pointIndex: s
							}, this._6q(t, s)) {
							e.isControlPoint = !0;
							var c = h instanceof nD ? h[kl](i + 1) : h[i + 1];
							c && (e.nextSegment = c)
						}
						return !1
					}
					s += 2
				}
			}, this), e
		},
		_6q: function(t, i) {
			return i == t[Ba][Gr] - 2
		},
		startdrag: function(t, i) {
			if (this.element && this._noanEdit && (this._9j = this._g6(t, i), this._9j)) {
				this._6v(), t[WL] = !0;
				var n = new Ar(i, Ar.POINT_MOVE_START, t, this[HA]);
				n.point = this._9j, i[Mk](n)
			}
		},
		ondrag: function(t, i) {
			if (this.element && this._9j) {
				var n = t.dx,
					e = t.dy,
					s = i.scale;
				if (n /= s, e /= s, this.element.rotate) {
					var r = {
						x: n,
						y: e
					};
					Ns(r, -this.element.rotate), n = r.x, e = r.y
				}
				var h = this._9j.segment;
				if (!this._9j.isControlPoint || h.type != Cz && h.type != Pz) h.points[this._9j.pointIndex] += n, h[Ba][this._9j[sR] + 1] += e;
				else {
					for (var a = h[Ba][Gr] - 4; a < h.points.length;) h.points[a] += n, h[Ba][a + 1] += e, a += 2;
					!this._9j[rR] || this._9j[rR][wo] != Pz && this._9j[rR].type != Cz || (this._9j.nextSegment[Ba][0] += n, this._9j[rR][Ba][1] += e)
				}
				this.element[_p]();
				var o = new Ar(i, Ar[hR], t, this.element);
				o.point = this._9j, i[Mk](o)
			}
		},
		enddrag: function(t, i) {
			if (this[HA] && this._9j) {
				this._nmt(), this._k4();
				var n = new Ar(i, Ar.POINT_MOVE_END, t, this[HA]);
				n[aR] = this._9j, i[Mk](n)
			}
		},
		onmousemove: function(t, i) {
			this[HA] && (i.cursor = t[nE] && (this._g6(t, i) || this.element == t.getData()) ? "crosshair" : null)
		}
	}, tD[oR] = 1, tD.SELECTION_RECTANGLE_STROKE_COLOR = V(3724541951), tD.SELECTION_RECTANGLE_FILL_COLOR = V(1430753245);
	var RB = function(t) {
		this[kc] = t, this.topCanvas = t._8h._topCanvas
	};
	RB.prototype = {
		onstart: function(t, i) {
			this._kk && this.destroy(i)
		},
		startdrag: function(t, i) {
			t[WL] || (t.responded = !0, this._kk = i[xk](t), i[fA] = dv, this._1aId = this[lu].addDrawable(this._1a, this).id)
		},
		ondrag: function(t, i) {
			if (this._kk) {
				R(t), this._end = i[xk](t), this.invalidate();
				var n = new Ar(i, Ar[fR], t, i.selectionModel);
				i[Mk](n)
			}
		},
		enddrag: function(t, i) {
			if (this._kk) {
				this._ffTimer && (clearTimeout(this._ffTimer), this._ffTimer = null), this._ff(!0), this.destroy(i);
				var n = new Ar(i, Ar[_R], t, i[ou]);
				i.onInteractionEvent(n)
			}
		},
		onpinch: function(t, i) {
			this._kk && this[Vl](t, i)
		},
		_1a: function(t, i) {
			t.strokeStyle = tD.SELECTION_RECTANGLE_STROKE_COLOR, t[Jb] = tD.SELECTION_RECTANGLE_FILL_COLOR, t[po] = tD[oR] / i;
			var n = this._kk.x,
				e = this._kk.y;
			t[tb](n, e, this._end.x - n, this._end.y - e), t[Ig](), t[ng]()
		},
		invalidate: function() {
			return this[Bp] ? void this[lu][ep]() : (this[Bp] = !0, void(this._ffTimer = setTimeout(this._ff[Vb](this), 100)))
		},
		_ff: function(t) {
			if (this.invalidateFlag = !1, this._ffTimer = null, !this._kk || $P && !t) return void this.topCanvas[ep]();
			var i = Math[Io](this._kk.x, this._end.x),
				n = Math[Io](this._kk.y, this._end.y),
				e = Math[qh](this._kk.x - this._end.x),
				s = Math.abs(this._kk.y - this._end.y);
			if (!e || !s) return void this[kc][ou].clear();
			var r, h = [],
				a = this.graph.scale;
			if (this.graph.forEachVisibleUI(function(t) {
					t._hz && this[kc].isSelectable(t[gf]) && (r = t._fp, (ai(i, n, e, s, r.x + t._x, r.y + t._y, r.width, r[Ja]) || Dn(i, n, e, s, t, a)) && h[Vr](t[gf]))
				}, this), this[kc][ou].set(h), this[lu].invalidate(), !t) {
				var o = new Ar(this[kc], Ar.SELECT_BETWEEN, null, this[kc][ou]);
				this[kc].onInteractionEvent(o)
			}
		},
		destroy: function(t) {
			this._kk = null, t.cursor = null, this._1aId && (this[lu][UA](this._1aId), delete this._1aId, this[lu][ep]())
		}
	};
	var SB = Math.PI / 4;
	Sr.prototype = {
		_fa: !1,
		_f9: !1,
		_25: function(t) {
			this.element && t.source == this.element && this[kc][$k](function() {
				this._99()
			}, this)
		},
		_7: function() {
			this._m9PropertyChangeListing || (this._m9PropertyChangeListing = !0, this[kc][tR][Ru](this._25, this))
		},
		_3: function() {
			this._m9PropertyChangeListing = !1, this[kc][tR].removeListener(this._25, this)
		},
		onElementRemoved: function(t, i) {
			this[HA] && (t == this.element || k(t) && E(t, this.element)) && this.destroy(i)
		},
		onClear: function(t) {
			this[HA] && this[J_](t)
		},
		ondblclick: function(t, i) {
			this[HA] && this[J_](i)
		},
		destroy: function(t) {
			t[fA] = null, delete this.element, delete this._noj, delete this._nmody, delete this._9j, delete this._noanEdit, delete this._jq, delete this._rotatePoint, delete this._f9, delete this._fa, delete this._insets, this._6v(), this._3()
		},
		_6v: function() {
			this._g2Id && (this[lu].removeDrawable(this._g2Id), delete this._g2Id, this[lu][ep]())
		},
		_nmt: function() {
			this._g2Id && this[lu][Pc](this._g2Id) || (this._g2Id = this[lu][uL](this._g2, this).id, this.topCanvas[ep]())
		},
		_noj: null,
		_jq: null,
		_8v: function(t) {
			this._noj = t;
			var i = this._noj.x,
				n = this._noj.y,
				e = this._noj.width,
				s = this._noj.height;
			if (this._f9) {
				var r = [];
				r.push({
					x: i,
					y: n,
					p: cD[kd],
					cursor: cR,
					rotate: 5 * SB
				}), r[Vr]({
					x: i + e / 2,
					y: n,
					p: cD[XI],
					cursor: uR,
					rotate: 6 * SB
				}), r[Vr]({
					x: i + e,
					y: n,
					p: cD[Ld],
					cursor: ju,
					rotate: 7 * SB
				}), r[Vr]({
					x: i,
					y: n + s / 2,
					p: cD.LEFT_MIDDLE,
					cursor: dR,
					rotate: 4 * SB
				}), r[Vr]({
					x: i + e,
					y: n + s / 2,
					p: cD.RIGHT_MIDDLE,
					cursor: dR,
					rotate: 0
				}), r[Vr]({
					x: i,
					y: n + s,
					p: cD[Sd],
					cursor: ju,
					rotate: 3 * SB
				}), r[Vr]({
					x: i + e / 2,
					y: n + s,
					p: cD[jd],
					cursor: uR,
					rotate: 2 * SB
				}), r[Vr]({
					x: i + e,
					y: n + s,
					p: cD[Rd],
					cursor: cR,
					rotate: SB
				}), this._jq = r
			}
			this._rotatePoint = this._fa ? {
				x: i + e / 2,
				y: n,
				cursor: VD
			} : null, this._noo()
		},
		_f5: function(t, i, n, e) {
			t.beginPath();
			var s = (this[Su] - 1) / e;
			t.rect(i - s, n - s, 2 * s, 2 * s), t[po] = 1 / e, t.lineDash = [], t.strokeStyle = ey, t.fillStyle = "rgba(255, 255, 255, 0.8)", t[ng](), t[Ig]()
		},
		_5v: function(t, i, n, e, s, r) {
			s = s || this[Su], r = r || lR, t[cg](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[po] = 1 / e, t.lineDash = [], t.strokeStyle = ey, t.fillStyle = r, t[ng](), t.fill()
		},
		_hy: function(t, i) {
			t -= this.element.x, i -= this[HA].y;
			var n = {
				x: t,
				y: i
			};
			return this.element.rotate && Ns(n, -this.element.rotate), n
		},
		_g2: function(t, i) {
			if (this._noj) {
				if (t[Zb](), t.translate(this.element.x, this.element.y), this.element[So] && t[So](this[HA].rotate), this._rotatePoint) {
					this._5v(t, 0, 0, i, 3, vR);
					var n = this._rotatePoint.x,
						e = this._rotatePoint.y - this._rotateHandleLength / i;
					t.beginPath(), t[p_](n, this._rotatePoint.y), t[g_](n, e), t.lineWidth = 1 / i, t[ry] = nR, t[ng](), this._5v(t, n, e, i)
				}
				if (this._jq) {
					var s = this._noj.x,
						r = this._noj.y,
						h = this._noj.width,
						a = this._noj[Ja];
					t[cg](), t[tb](s, r, h, a), t[po] = 1 / i, t.lineDash = [2 / i, 3 / i], t[ry] = nR, t[ng](), l(this._jq, function(n) {
						this._f5(t, n.x, n.y, i)
					}, this)
				}
				t.restore()
			}
		},
		_noo: function() {
			this[lu][ep]()
		},
		_3y: function(t, i, n, e) {
			this[HA] = t, this._nmt();
			var s = i.getUI(t);
			this._nmody = s[Wb], this._f9 = n, this._fa = e, this._99(), this._7()
		},
		_99: function() {
			if (this._g2Id) {
				var t = jr(this._nmody, this._nmody._ji),
					i = jr(this._nmody, this._nmody._84);
				this._insets = new _D(t.y - i.y, t.x - i.x, i[Gh] - t.bottom, i[Fh] - t.right), this._8v(i)
			}
		},
		_nmw: function(t, i) {
			return (!t._i1() || !t[Hp]) && i[bR](t)
		},
		_nmx: function(t, i) {
			return (!t._i1() || !t[Hp]) && i.isRotatable(t)
		},
		_nos: function(t, i) {
			return t instanceof WN && i.isEditable(t)
		},
		onstart: function(t, i) {
			if (!i.editable) return void(this.element && this.destroy(i));
			if (!t[WL]) {
				var n = i.getUI(t),
					e = t.getData();
				if (e != this.element) {
					if (this.element) {
						if (this._g6(t, i)) return void(t.responded = !0);
						this[J_](i)
					}
					if (e && !e._editting && this._nos(e, i)) {
						var s = this._nmw(e, i, n),
							r = this._nmx(e, i, n);
						(s || r) && this._3y(e, i, s, r)
					}
				}
			}
		},
		onrelease: function(t, i) {
			this[HA] && (this._noanEdit = !0, this._nmt(), i[$k](function() {
				this._99()
			}, this))
		},
		_9j: null,
		_g6: function(t, i) {
			var n = i[xk](t);
			n = this._hy(n.x, n.y);
			var e = i.scale,
				s = this[Su] / e;
			if (this._rotatePoint) {
				var r = this._rotatePoint.x,
					h = this._rotatePoint.y - this._rotateHandleLength / e;
				if (hD(n.x, n.y, r, h) < s) return this._rotatePoint
			}
			if (this._jq && this._jq[Gr]) {
				var a;
				return l(this._jq, function(t) {
					return hD(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
				}, this), a
			}
		},
		onmousemove: function(t, i) {
			if (this.element) {
				var n = this._g6(t, i);
				if (!n) return void(i.cursor = null);
				if (n != this._rotatePoint && this[HA][So]) {
					var e = n[So] + this[HA][So];
					return void(i.cursor = Ir(e))
				}
				i[fA] = n[fA]
			}
		},
		startdrag: function(t, i) {
			if (this[HA] && (this._6v(), this._noanEdit && (this._9j = this._g6(t, i), this._9j))) {
				if (t[WL] = !0, this._9j == this._rotatePoint) return this._9j[iL] = i.toLogical(t), void(this._9j[So] = this.element[So] || 0);
				var n = new Ar(i, Ar.RESIZE_START, t, this.element);
				n[aR] = this._9j, i.onInteractionEvent(n)
			}
		},
		_71: function(t, i, n, e, s, r) {
			var h = this._noj,
				a = h.x,
				o = h.y,
				f = h.width,
				_ = h[Ja];
			if (r) {
				var c = e != f;
				c ? s = e * _ / f : e = s * f / _
			}
			var u = t.path._fm,
				d = e / f,
				l = s / _,
				v = -a * d + i,
				b = -o * l + n;
			u[Df](function(t) {
				if (t[wo] != rz[Fy]) {
					var e = t.points;
					if (e && e[Gr])
						for (var s = 0, r = e[Gr]; r > s; s += 2) {
							var h = e[s],
								f = e[s + 1];
							e[s] = (h - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
						}
				}
			}), this._noj[V_](i - v, n - b, e, s), t.setLocation(t.x + v, t.y + b), t[_p]()
		},
		_4v: function(t, i, n, e, s) {
			if (this.element instanceof XN) return this._71(this.element, t, i, n, e, s);
			var r = this._nmody instanceof uB;
			if (!r && s) {
				var h = this._noj,
					a = this._nmody[yR],
					o = n != h[Za];
				o ? e = n * a.height / a.width : n = e * a.width / a[Ja]
			}
			var f = this[HA][Op],
				_ = new oD(n - this._insets[ba] - this._insets[Fh], e - this._insets[ya] - this._insets.bottom);
			if (_[Za] < 1 && (n = this._insets.left + this._insets[Fh] + 1, _.width = 1), _[Ja] < 1 && (e = this._insets.top + this._insets[Gh] + 1, _[Ja] = 1), r ? this.element.setStyle(QN[dw], _) : this[HA][wp] = _, f) {
				var c = oi(f, n, e),
					u = c.x + t - (this._nmody.offsetX || 0),
					d = c.y + i - (this._nmody.offsetY || 0);
				if (this._noj[V_](t - u, i - d, n, e), this[HA].rotate) {
					var c = Ns({
						x: u,
						y: d
					}, this.element.rotate);
					u = c.x, d = c.y
				}
				this[HA].x += u, this[HA].y += d
			} else {
				var u = this._noj.x * n / this._noj[Za] - t,
					d = this._noj.y * e / this._noj.height - i;
				if (this._noj[V_](t + u, i + d, n, e), this[HA][So]) {
					var c = Ns({
						x: u,
						y: d
					}, this.element.rotate);
					u = c.x, d = c.y
				}
				this.element.x -= u, this[HA].y -= d
			}
		},
		ondrag: function(t, i) {
			if (this[HA] && this._9j)
				if (this._9j != this._rotatePoint) {
					var n = t.dx,
						e = t.dy,
						s = i[Jo];
					if (n /= s, e /= s, this.element.rotate) {
						var r = {
							x: n,
							y: e
						};
						Ns(r, -this[HA][So]), n = r.x, e = r.y
					}
					var h = this._9j.p,
						a = this._noj,
						o = a.x,
						f = a.y,
						_ = a[Za],
						c = a.height;
					h[md] == uD ? n >= _ ? (o += _, _ = n - _ || 1) : (o += n, _ -= n) : h[md] == lD && (-n >= _ ? (_ = -n - _ || 1, o -= _) : _ += n), h[Yh] == vD ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : h.verticalPosition == yD && (-e >= c ? (c = -e - c || 1, f -= c) : c += e), this._4v(o, f, _, c, t[wL]);
					var u = new Ar(i, Ar[gR], t, this[HA]);
					u[aR] = this._9j, i[Mk](u)
				} else {
					var r = i.toLogical(t),
						d = yn(r.x, r.y, this[HA].x, this.element.y, this._9j[iL].x, this._9j[iL].y, !0);
					d += this._9j.rotate || 0, t.shiftKey && (d = Math[Ko](d / Math.PI * 4) * Math.PI / 4), this[HA][So] = d % (2 * Math.PI);
					var u = new Ar(i, Ar[mR], t, this[HA])
				}
		},
		enddrag: function(t, i) {
			if (this[HA] && this._9j && this._9j != this._rotatePoint) {
				var n = new Ar(i, Ar[ER], t, this.element);
				n.point = this._9j, i.onInteractionEvent(n)
			}
		}
	}, sz.ResizeInteraction = Sr;
	var MB = function(t) {
		this.graph = t
	};
	MB.prototype = {
		onstart: function(t, i) {
			if (!t.responded) {
				KP || NP || i.focus(!0);
				var n = t.getData();
				if (n && !i[pR](n) && (n = null), n && Ii(t)) {
					i.reverseSelect(n);
					var e = new Ar(i, Ar[xR], t, i[ou]);
					return void i.onInteractionEvent(e)
				}
				if (!n || !i[ou][TR](n)) {
					n ? (i[wR](n), i[OR](n)) : i[wR](null);
					var e = new Ar(i, Ar[xR], t, i[ou]);
					i[Mk](e)
				}
			}
		},
		onkeydown: function(t, i) {
			return 27 == t.keyCode ? void i[SR]() : void(Ii(t) && 65 == t[XA] && (i[jR](), A(t)))
		}
	};
	var CB = 0,
		PB = 15;
	tD[IR] = 3e3, tD[kR] = 1e3;
	var DB = AR;
	bi(Mh + DB, {
		"background-color": LR,
		overflow: Qc,
		"box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
		color: oy,
		"pointer-events": tu,
		border: RR,
		padding: MR,
		display: EA,
		position: iu
	});
	var zB = function(t) {
		this.graph = t
	};
	zB.prototype = {
		_nml: {},
		_nmn: null,
		_nmp: function() {
			delete this._initTimer, this._nml.data && (this._nmn || (this._nmn = i[ao](Gc), this._nmn[Kr] = DB), this._nmn[Yb] || i[Wb][Kc](this._nmn), this._nof(this.graph, this._nml[Eo]))
		},
		_nof: function(t, i) {
			var n = t[CR](i),
				e = xu == i[PR];
			n && !e && (n = n.replace(/\n/g, DR)), e ? this._nmn[zR] = n || "" : this._nmn[Kk] = n || "";
			var s = this._nml[NR][ua] + CB,
				r = this._nml[NR][la] + PB;
			kr(this._nmn, s, r), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(sz[BR](this, this._8k), t[$R] || tD.TOOLTIP_DURATION)
		},
		_8k: function() {
			delete this._deleteTimer, this._nmn && this._nmn[Yb] && this._nmn[Yb][Sl](this._nmn), delete this._nmn, this._nml = {}
		},
		_fc: function(t, i, n, e) {
			if (!this._nmn) {
				var s = e.tooltipDelay;
				return isNaN(s) && (s = tD.TOOLTIP_DELAY), void(this._initTimer = setTimeout(sz[BR](this, this._nmp), s))
			}
			this._nof(e, t)
		},
		onstart: function(t, i) {
			this.destroy(i)
		},
		onmousemove: function(t, i) {
			if (i[FR]) {
				var n = t[pk]();
				if (this._nml[NR] = t, this._nml[Eo] != n && (this._nml[Eo] = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
					var e = i[CR](n);
					e && this._fc(n, e, t, i)
				}
			}
		},
		destroy: function() {
			this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._nmn && this._8k()
		}
	};
	var NB = function(t) {
		this[kc] = t
	};
	NB.prototype = {
		onmousewheel: function(t, i) {
			if (i.enableWheelZoom !== !1) {
				if (i._scaling) return void A(t);
				i._scaling = !0, p(function() {
					delete i._scaling
				}, this, 100), fr(i, t, t[GR] > 0) !== !1 && A(t)
			}
		}
	};
	var BB = function(t) {
		this[kc] = t
	};
	BB[dh] = {
		onclick: function(t, i) {
			fr(i, t, !Ii(t))
		}
	};
	var $B = function(t) {
		this[kc] = t
	};
	$B[dh] = {
		onclick: function(t, i) {
			fr(i, t, Ii(t))
		}
	}, D(Ar, ED), Ar.ELEMENT_MOVE_START = qR, Ar.ELEMENT_MOVING = YR, Ar.ELEMENT_MOVE_END = HR, Ar[Rk] = UR, Ar[Jk] = WR, Ar.POINT_MOVE_START = XR, Ar[hR] = VR, Ar[KR] = ZR, Ar.RESIZE_START = JR, Ar.RESIZING = QR, Ar.RESIZE_END = tM, Ar[mR] = iM, Ar.ROTATE_END = nM, Ar.EDGE_BUNDLE = eM, Ar.SELECT = Tu, Ar[fR] = sM, Ar[rM] = hM, Ar.SELECT_END = aM, Ar[oM] = fM, Lr[dh] = {
		_nn2: function(t) {
			if (this._interactionSupport) switch (t.kind) {
				case AD[yk]:
					this._interactionSupport._50(t[Eo]);
					break;
				case AD.KIND_CLEAR:
					this._interactionSupport._7e(t[Eo])
			}
		},
		destroy: function() {
			delete this._ky, delete this._4p, this._interactionSupport && (this._interactionSupport._ie(), delete this._interactionSupport)
		},
		_ky: null,
		_4p: null,
		defaultMode: null,
		_hg: function(t, i, n) {
			this._4p[t] = new ur(i, n), t == this[Mu] && this._interactionSupport._7a(i)
		},
		addCustomInteraction: function(t) {
			this._interactionSupport._$b(t)
		},
		_n1: function(t) {
			var i = this._4p[t];
			return i ? i : FB[t]
		}
	}, Z(Lr.prototype, {
		defaultCursor: {
			get: function() {
				return this.currentInteractionMode ? this.currentInteractionMode[vu] : void 0
			}
		},
		currentMode: {
			get: function() {
				return this._nourrentMode
			},
			set: function(t) {
				this._nourrentMode != t && (this._nourrentMode, this._interactionSupport || (this._interactionSupport = new YD(this._ky)), this._nourrentMode = t, this.currentInteractionMode = this._n1(this._nourrentMode), this._ky[fA] = this.defaultCursor, this._interactionSupport._7a(this.currentInteractionMode ? this[_M][cM](this._ky) : []))
			}
		}
	});
	var FB = {};
	tD[uM] = function(t, i, n) {
		var e = new ur(i, n);
		FB[t] = e
	}, rz.INTERACTION_MODE_VIEW = dM, rz[Cu] = bu, rz.INTERACTION_MODE_SELECTION = lM, rz.INTERACTION_MODE_ZOOMIN = vM, rz.INTERACTION_MODE_ZOOMOUT = bM, rz[yM] = gM, rz[mM] = EM, rz.INTERACTION_MODE_CREATE_SHAPE = pM, rz[xM] = TM, tD.registerInteractions(rz[wM], [MB, LB, NB, kB, jB, zB]), tD.registerInteractions(rz[yM], [IB, gr, MB, LB, NB, kB, zB]), tD.registerInteractions(rz[mM], [IB, vr, MB, LB, NB, kB, zB]), tD[uM](rz[OM], [IB, br, MB, LB, NB, kB, zB]), tD.registerInteractions(rz.INTERACTION_MODE_CREATE_LINE, [yr, MB, LB, NB, kB, zB]), tD[uM](rz[Cu], [IB, Sr, Or, MB, AB, LB, NB, kB, jB, zB]), tD[uM](rz.INTERACTION_MODE_SELECTION, [IB, Sr, Or, MB, AB, RB, LB, NB, kB, jB, zB]), tD.registerInteractions(rz[SM], [NB, kB, BB], HD), tD[uM](rz[jM], [NB, kB, $B], UD), sz.PanInteraction = LB, sz[IM] = MB, sz[kM] = AB, sz[AM] = NB, sz[LM] = jB, sz[RM] = kB, sz[MM] = zB, sz[CM] = RB, sz.PointsInteraction = Or;
	var GB = function(t) {
		this[kc] = t
	};
	sz[PM] = GB, GB.prototype = {
		getNodeBounds: function(t) {
			return this[kc].getUIBounds(t)
		},
		isLayoutable: function(t) {
			return t[DM] !== !1
		},
		getLayoutResult: function() {},
		updateLocations: function(t, i, n, e, s) {
			if (i === !0) {
				if (this.animate || (this[zM] = new v$), n && (this[zM].duration = n), e && (this[zM][NM] = e), this.animate[BM] = t, s) {
					var r = s,
						h = this;
					s = function() {
						r.call(h, t)
					}
				}
				return void this[zM][iL](s)
			}
			for (var a in t) {
				var o = t[a],
					f = o.node;
				f.setLocation(o.x, o.y)
			}
			s && s[qr](this, t)
		},
		_fh: function(t) {
			var i, n, e, s = null;
			t && (i = t[$M], s = t[W_], n = t.duration, e = t[NM]);
			var r = this[FM](t);
			return r ? (this.updateLocations(r, i, n, e, s), r) : !1
		},
		doLayout: function(t, i) {
			return this.graph && i !== !0 ? void this[kc].callLater(function() {
				this._fh(t)
			}, this) : this._fh(t)
		}
	};
	var qB = 11,
		YB = 12,
		HB = 13,
		UB = 21,
		WB = 22,
		XB = 23;
	rz[GM] = qB, rz[qM] = YB, rz[YM] = HB, rz.DIRECTION_BOTTOM = UB, rz.DIRECTION_TOP = WB, rz.DIRECTION_MIDDLE = XB;
	var VB = HM,
		KB = UM,
		ZB = WM,
		JB = XM;
	rz.LAYOUT_TYPE_EVEN = VB, rz.LAYOUT_TYPE_EVEN_HORIZONTAL = ZB, rz[VM] = JB, rz[KM] = KB, sz[ZM] = Rr;
	var QB = function(t) {
		this.graph = t
	};
	QB.prototype = {
		hGap: 50,
		vGap: 50,
		parentChildrenDirection: UB,
		layoutType: VB,
		defaultSize: {
			width: 50,
			height: 60
		},
		getNodeSize: function(t) {
			if (this.graph._8h._nno) {
				var i = this.graph[ga](t);
				if (i) return i._fp
			}
			return t.image && t.image.bounds ? {
				width: t[xy][uu].width,
				height: t[xy][uu][Ja]
			} : this[JM]
		},
		_nom: function(t, i) {
			if (this[QM](t)) {
				var n = this[tC](t),
					e = t.id,
					s = (t.parentChildrenDirection, i ? this._nn7[i.id] : this._nmv);
				this._nn7[e] = new t$(t[iC] || this.hGap, t.vGap || this.vGap, t[nC] || this[nC], t[eC], s, t, n.width, n[Ja])
			}
		},
		_nn7: null,
		_nmv: null,
		_l3: function() {
			this._nn7 = null, this._nmv = null
		},
		getLayoutResult: function(t) {
			var i, n, e, s, r = this[kc];
			t instanceof Object && (i = t.x, n = t.y, r = t[sC] || this[kc], e = t[uu], s = t[rC]), this._nn7 = {}, this._nmv = new t$, this._nmv._n9(this[iC], this[hC], this[eC], this.layoutType);
			var h = {},
				a = g$(r, this._nom, this, !1, s);
			return a && (this._nmv._fh(i || 0, n || 0, h), e && e.set(this._nmv.x, this._nmv.y, this._nmv[Za], this._nmv[Ja])), this._l3(), h
		},
		doLayout: function(t, i) {
			if (S(t)) {
				var n = t,
					e = 0;
				S(i) && (e = i), t = {
					x: n,
					y: e
				}, i = !0
			}
			return N(this, QB, aC, [t, i])
		}
	}, D(QB, GB);
	var t$ = function(t, i, n, e, s, r, h, a) {
		this._mm = t || 0, this._ms = i || 0, this.layoutType = n, this[eC] = e, this[oC] = s, s && s._gc(this), this[fC] = r, this._f0 = h, this._df = a
	};
	t$[dh] = {
		_n9: function(t, i, n, e) {
			this._mm = t, this._ms = i, this.parentChildrenDirection = n, this.layoutType = e
		},
		_8m: function() {
			this._fy = []
		},
		_mm: 0,
		_ms: 0,
		_fy: null,
		_f0: 0,
		_df: 0,
		layoutType: null,
		parentChildrenDirection: null,
		_gc: function(t) {
			this._fy || (this._fy = []), this._fy.push(t)
		},
		_dd: function(t, i, n, e) {
			var s = new fD;
			return n(this._fy, function(n) {
				n._3x(t, i), s[Hh](n), e ? t += n[Za] + this._mm : i += n[Ja] + this._ms
			}, this), s
		},
		_8f: function(t, i, n, e, s) {
			var r, h = e ? this._mm : this._ms,
				a = e ? this._ms : this._mm,
				o = e ? "width" : Ja,
				f = e ? "height" : Za,
				_ = e ? "_f0" : _C,
				c = e ? "_df" : cC,
				u = e ? "hostDX" : uC,
				d = e ? "hostDY" : dC,
				v = new fD,
				b = 0,
				y = 0,
				g = [],
				m = 0,
				E = 0;
			n(this._fy, function(n) {
				var s = E >= y;
				n._inheritedParentChildrenDirection = s ? e ? YB : WB : e ? qB : UB, n._3x(t, i), s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[Vr](n), m = Math[Qo](m, n[o]), E += n[f] + a)
			}, this), y -= a, E -= a;
			var p = Math[Qo](y, E),
				x = h,
				T = 0;
			this[fC] && (s && (x += this[_] + h, p > this[c] ? this[d] = (p - this[c]) / 2 : T = (this[c] - p) / 2), this[u] = b + x / 2 - this[_] / 2);
			var w = 0,
				O = T;
			return l(g, function(t) {
				e ? t[Nb](b - t[o], O) : t.offset(O, b - t[o]), O += a + t[f], v[Hh](t)
			}, this), r ? (O = T, w = b + x, l(r, function(t) {
				e ? t[Nb](w, O) : t[Nb](O, w), O += a + t[f], v.add(t)
			}, this), v) : v
		},
		offset: function(t, i) {
			this.x += t, this.y += i, this.nodeX += t, this[lC] += i, this._7n(t, i)
		},
		_nma: function(t, i) {
			return 2 * this.cx - t - i - t
		},
		_nm9: function(t, i) {
			return 2 * this.cy - t - i - t
		},
		_mu: function(t) {
			if (this._fy && 0 != this._fy.length) {
				if (t) return this[fC] && (this[vC] += this._nma(this.nodeX, this._f0)), void l(this._fy, function(t) {
					t.offset(this._nma(t.x, t.width), 0)
				}, this);
				this.node && (this[lC] += this._nm9(this.nodeY, this._df)), l(this._fy, function(t) {
					t[Nb](0, this._nm9(t.y, t[Ja]))
				}, this)
			}
		},
		_7n: function(t, i) {
			this._fy && l(this._fy, function(n) {
				n[Nb](t, i)
			}, this)
		},
		_3x: function(t, i) {
			return this.x = t || 0, this.y = i || 0, this._fy && 0 != this._fy[Gr] ? void this._2b(this.x, this.y, this[nC]) : void(this[fC] && (this.width = this._f0, this.height = this._df, this.nodeX = this.x, this.nodeY = this.y))
		},
		_78: function(t) {
			this.node && (t[this.node.id] = {
				node: this.node,
				x: this[vC] + this._f0 / 2,
				y: this[lC] + this._df / 2,
				left: this.nodeX,
				top: this[lC],
				width: this._f0,
				height: this._df
			}), this._fy && l(this._fy, function(i) {
				i._78(t)
			}, this)
		},
		_fh: function(t, i, n) {
			this._3x(t, i), this._78(n)
		},
		_2b: function(t, i, e) {
			var s, r = t,
				h = i;
			!this[eC] && this[oC] && (this[eC] = this._inheritedParentChildrenDirection || this.parentBounds[eC]);
			var a = this[eC],
				o = Rr(a);
			if (this.node) {
				s = a == HB || a == XB;
				var f = Mr(a);
				s || (o ? t += this._f0 + this._mm : i += this._df + this._ms)
			}
			var _, c = this[fC] && this[fC][bC] ? b : l;
			if (e == KB) _ = this._8f(t, i, c, !o, s);
			else {
				var u;
				u = e == VB ? !o : e == ZB, _ = this._dd(t, i, c, u, s)
			}
			var d = 0,
				v = 0;
			_ && !_.isEmpty() && (d = _[Za], v = _[Ja], this.add(_)), this.node && (this[vC] = r, this[lC] = h, this.hostDX !== n || this[uC] !== n ? (this[vC] += this[dC] || 0, this[lC] += this.hostDY || 0) : o ? this[lC] += v / 2 - this._df / 2 : this.nodeX += d / 2 - this._f0 / 2, this[yC](this.nodeX, this[lC], this._f0, this._df), f && this._mu(o))
		},
		node: null,
		uiBounds: null
	}, D(t$, fD), Pr[dh] = {
		layoutDatas: null,
		isMovable: function(t) {
			return !this[gC][t.id]
		},
		_7j: !1,
		_3r: function() {
			this._7j = !0, this[kc]._1z[Ru](this._9d, this), this[kc]._1o.addListener(this._2l, this)
		},
		_21: function() {
			this._7j = !1, this[kc]._1z[nl](this._9d, this), this[kc]._1o[nl](this._2l, this)
		},
		invalidateFlag: !0,
		invalidateLayoutDatas: function() {
			this.invalidateFlag = !0
		},
		resetLayoutDatas: function() {
			return this[Bp] = !1, this.layoutDatas = Cr.call(this)
		},
		_2l: function(t) {
			Ar.ELEMENT_MOVE_START == t[Dd] ? (this[gC] = {}, t[Lu].forEach(function(t) {
				this[gC][t.id] = t
			}, this)) : Ar[ZL] == t.kind && (this.currentMovingNodes = {})
		},
		_9d: function() {
			this[mC]()
		},
		isRunning: function() {
			return this.timer && this.timer._du()
		},
		getLayoutResult: function() {
			this.stop(), this.resetLayoutDatas();
			for (var t = this[EC](this[pC].nodeCount || 0, this.layoutDatas[xC] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
			var n = this.layoutDatas[TC];
			return this.onstop(), n
		},
		_mh: function() {
			return !1
		},
		step: function(t) {
			if (t === !1) return this._mh(this[wC]);
			(this[Bp] || !this[pC]) && this[OC]();
			var i = this._mh(t),
				n = this[pC][TC];
			for (var e in n) {
				var s = n[e],
					r = s[fC];
				this.isMovable(r) ? r.setLocation(s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
			}
			return i
		},
		onstop: function() {
			delete this[pC]
		},
		start: function(t) {
			if (this[SC]()) return !1;
			this._7j || this._3r(), this._kgr || (this._kgr = G(this, function(t) {
				return this[jC](t)
			})), this.invalidateLayoutDatas(), this[IC] = new iz(this._kgr);
			var i = this;
			return this.timer._kk(function() {
				i[kC](), t && t()
			}), !0
		},
		stop: function() {
			this.timer && (this[IC]._m5(), this.onstop())
		},
		getMaxIterations: function(t) {
			return Math[Io](1e3, 3 * t + 10)
		},
		minEnergyFunction: function(t, i) {
			return 10 + Math[vo](t + i, 1.4)
		},
		resetGraph: function() {
			this._7j || this._3r(), this.resetLayoutDatas()
		},
		destroy: function() {
			this.stop(), this._21()
		}
	}, D(Pr, GB);
	var i$ = function(t, i, n, e) {
		this[kc] = t, S(i) && (this.radius = i), S(n) && (this[AC] = n), S(e) && (this.startAngle = e)
	};
	sz.BalloonLayouter = i$;
	var n$ = LC,
		e$ = RC,
		s$ = MC,
		r$ = CC;
	rz[PC] = n$, rz[DC] = e$, rz.RADIUS_MODE_UNIFORM = s$, rz.RADIUS_MODE_VARIABLE = r$, i$[dh] = {
		angleSpacing: n$,
		radiusMode: r$,
		gap: 4,
		radius: 50,
		startAngle: 0,
		_nn7: null,
		_nmv: null,
		_l3: function() {
			this._nn7 = null, this._nmv = null
		},
		getLayoutResult: function(t) {
			var i, n = 0,
				e = 0,
				s = this.graph;
			t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[sC] || this[kc], i = t.bounds), this._nn7 = {}, this._nmv = new o$(this);
			var r = {},
				h = m$(s, this._nom, this);
			return h && (this._nmv._fy && 1 == this._nmv._fy[Gr] && (this._nmv = this._nmv._fy[0]), this._nmv._eh(!0), this._nmv._5p(n, e, this[zC], r, i)), this._l3(), r
		},
		_nom: function(t, i) {
			if (this.isLayoutable(t)) {
				var n = i ? this._nn7[i.id] : this._nmv;
				this._nn7[t.id] = new o$(this, t, n)
			}
		},
		defaultSize: 40,
		getRadius: function() {
			return this[Md]
		},
		getNodeSize: function(t) {
			if (this[kc]._8h._nno) {
				var i = this[kc][ga](t);
				if (i) return (i._fp[Za] + i._fp.height) / 2
			}
			return this[JM]
		},
		getGap: function() {
			return this[AC]
		},
		_3j: function(t, i, n) {
			return this[tC](t, i, n) + this[NC](t, i, n)
		}
	};
	var h$ = function(t) {
			var i, n = this._fy[Gr],
				e = 0,
				s = 0;
			if (l(this._fy, function(t) {
					var n = t._eh();
					1 > n && (n = 1), s += n, n > e && (e = n, i = t)
				}, this), n > 1) {
				var r = 0,
					h = {},
					a = s / n / 3;
				s = 0, l(this._fy, function(t) {
					var i = t._ly;
					a > i && (i = a), h[t.id] = i, s += i
				}, this);
				var o = f$ / s;
				l(this._fy, function(i, n) {
					var e = h[i.id],
						s = e * o;
					0 === n && (r = t ? -s / 2 : -s), i._lt = r + s / 2, i._lu = s, r += s
				}, this)
			}
			return [e, i._lu]
		},
		a$ = function(t) {
			var i = this._88,
				n = 2 * Math.PI / i,
				e = 0,
				s = t ? 0 : i > 1 ? -n / 2 : 0;
			return l(this._fy, function(t) {
				t._lt = s % f$, s += n, t._lu = n;
				var i = t._eh();
				i > e && (e = i)
			}, this), [e, n]
		},
		o$ = function(t, i, n) {
			this[BC] = t, i && (this._m0 = i, this.id = i.id), n && (n._gc(this), n._lw = !1, this._lr = n._lr + 1)
		},
		f$ = 2 * Math.PI;
	o$[dh] = {
		_lu: 0,
		_lt: 0,
		_k7: 0,
		_ef: 0,
		_di: 0,
		_lr: 0,
		_lw: !0,
		_ly: 0,
		_hc: 0,
		_fy: null,
		_m0: null,
		_gc: function(t) {
			this._fy || (this._fy = []), this._fy.push(t), t[s_] = this
		},
		_h6: function(t) {
			if (this._lt = (this._lt + t) % f$, this._fy) {
				var i = this._fy[Gr];
				if (1 == i) return void this._fy[0]._h6(this._lt);
				t = this._lt + Math.PI, l(this._fy, function(i) {
					i._h6(t)
				}, this)
			}
		},
		_88: 0,
		_6t: function(t) {
			return this._m0 && (this._hc = this.layouter._3j(this._m0, this._lr, this._lw) / 2), this._fy ? (this._hc, this._88 = this._fy.length, this._88 <= 2 || this.layouter[$C] == e$ ? a$.call(this, t) : h$.call(this, t)) : null
		},
		_eh: function(t) {
			var i = this._6t(t);
			if (!i) return this._ly = this._hc;
			var n = i[0],
				e = i[1],
				s = this[BC].getRadius(this._m0, this._lr);
			if (s < this._hc && (s = this._hc), this._ef = s, this._hc + n > s && (s = this._hc + n), n && this._88 > 1 && e < Math.PI) {
				var r = n / Math[$h](e / 2);
				r > s && (s = r)
			}
			return this._k7 = s, this._ly = s + n, this._m0 && this._fy && this[BC][FC] == r$ && l(this._fy, function(t) {
				var i = t._ly;
				1 == t._88 && (i /= 2);
				var n = this._hc + i,
					e = t._lu;
				if (e && e < Math.PI) {
					var s = Math[$h](e / 2),
						r = i / s;
					r > i && (i = r)
				}
				n > i && (i = n), t._di = i
			}, this), (!this._m0 || t) && this._h6(0), this._ly
		},
		_5p: function(t, i, n, e, s) {
			if (this._m0 && (e[this._m0.id] = {
					x: t,
					y: i,
					node: this._m0
				}, s && s[yC](t - this._hc / 2, i - this._hc / 2, this._hc, this._hc)), this._fy) {
				if (!this._m0 && 1 == this._fy[Gr]) return void this._fy[0]._5p(t, i, n, e, s);
				n = n || 0;
				var r = this._k7,
					h = this._ef;
				l(this._fy, function(a) {
					var o = r;
					a._di && (o = Math[Qo](h, a._di));
					var f = a._lt + n,
						_ = t + o * Math[Bh](f),
						c = i + o * Math[$h](f);
					a._5p(_, c, n, e, s)
				}, this)
			}
		}
	}, D(i$, GB);
	var _$ = function() {
		z(this, _$, arguments)
	};
	D(_$, Dr);
	var c$ = function(t, i) {
		this[GC] = t, this.node2 = i, t == i ? (this[f_] = !0, this._ll = t._lk) : this._ll = new nD, this._8r = [], this._gp = tD[qC]
	};
	tD.EDGE_BUNDLE_EXPANDED = !0, c$.prototype = {
		node1: null,
		node2: null,
		_ll: null,
		_gp: tD.EDGE_BUNDLE_EXPANDED,
		_8r: null,
		_gr: null,
		agentEdge: null,
		_nmz: function(t, i, n) {
			this._ll.forEach(function(e) {
				return n && e[N_] != n && e[a_] != n ? void 0 : t[qr](i, e)
			})
		},
		_5o: 0,
		_5f: 0,
		_iu: function(t, i) {
			return this._ll.add(t) === !1 ? !1 : (i == this.node1 ? this._5o++ : this._5f++, this._nno ? void this._1b(t) : void(this._nno = !0))
		},
		_d4: function(t, i) {
			return this._ll[Ur](t) === !1 ? !1 : (i == this[GC] ? this._5o-- : this._5f--, this._1b(t), void this._ll.forEach(function(t) {
				t._edgeBundleInvalidateFlag = !0, t.__5a = !0
			}, this))
		},
		_1b: function(t) {
			this._nooBindableFlag = !0, this._6n = !0, t._edgeBundleInvalidateFlag = !0, t.__5a = !0
		},
		_noo: function() {
			this._6n || (this._6n = !0, this._ll.forEach(function(t) {
				t._edgeBundleInvalidateFlag = !0
			}))
		},
		isEmpty: function() {
			return this._ll.isEmpty()
		},
		isPositiveOrder: function(t) {
			return this.node1 == t[N_] || this[GC] == t[a_]
		},
		canBind: function(t) {
			return t && this._6n && this._ff(t), this._ll.length > 1 && this._8r[Gr] > 1
		},
		_im: function(t) {
			return this._8r.indexOf(t)
		},
		getYOffset: function(t) {
			return this._gr[t.id]
		},
		_4w: function(t) {
			if (!this[kI]()) return void(this._gr = {});
			var i = {},
				n = this._8r.length;
			if (!(2 > n)) {
				var e = 0,
					s = this._8r[0];
				i[s.id] = 0;
				for (var r = 1; n > r; r++) {
					s = this._8r[r];
					var h = t.getStyle(s, QN[sO]) || yB[QN.EDGE_BUNDLE_GAP];
					e += h, i[s.id] = e
				}
				if (!this[f_])
					for (var a = e / 2, r = 0; n > r; r++) s = this._8r[r], i[s.id] -= a;
				this._gr = i
			}
		},
		_no0: function(t) {
			return this._gp == t ? !1 : (this._gp = t, this._noo(), !0)
		},
		reverseExpanded: function() {
			return this._no0(!this._gp)
		},
		_1i: function() {
			this._nooBindableFlag = !1, this._8r[Gr] = 0;
			var t;
			this._ll[Df](function(i) {
				if (i[lk]()) {
					if (!this[AI](i)) return t || (t = []), void t[Vr](i);
					this._8r[Vr](i)
				}
			}, this), t && (this._8r = t.concat(this._8r))
		},
		_ev: function(t) {
			return t == this.agentEdge || !this[kI]() || this._gp
		},
		_ff: function(t) {
			this._6n = !1, this._ll[Df](function(t) {
				t._edgeBundleInvalidateFlag = !1
			}), this._nooBindableFlag && this._1i();
			var i = this._gp,
				n = this[kI](),
				e = !n || i;
			l(this._8r, function(t) {
				t._$w = !0, t._hzInBundle = e, e && (t.__5a = !0)
			}, this), e ? this._nnc(null, t) : (this._nnc(this._8r[0], t), this.agentEdge._hzInBundle = !0, this.agentEdge.__5a = !0), e && this._4w(t)
		},
		_nnc: function(t, i) {
			if (t != this[hA]) {
				var n = this[hA];
				return this[hA] = t, i && i._53(new pD(this, hA, t, n)), !0
			}
		}
	}, Z(c$[dh], {
		bindableEdges: {
			get: function() {
				return this._8r
			}
		},
		edges: {
			get: function() {
				return this._ll._j4
			}
		},
		length: {
			get: function() {
				return this._ll ? this._ll.length : 1
			}
		},
		expanded: {
			get: function() {
				return this._gp
			},
			set: function(t) {
				return this._gp == t ? !1 : (this._gp = t, void this._noo())
			}
		}
	});
	var u$ = function() {
			function t(t, i) {
				this[fC] = t, this.body = i
			}

			function i() {
				this.stack = [], this[YC] = 0
			}
			var n = -1e6,
				e = .8;
			i[dh] = {
				isEmpty: function() {
					return 0 === this[YC]
				},
				push: function(i, n) {
					var e = this[HC][this.popIdx];
					e ? (e[fC] = i, e[Wb] = n) : this[HC][this.popIdx] = new t(i, n), ++this.popIdx
				},
				pop: function() {
					return this[YC] > 0 ? this[HC][--this.popIdx] : void 0
				},
				reset: function() {
					this[YC] = 0
				}
			};
			var s = [],
				r = new i,
				h = function() {
					this[Wb] = null, this[UC] = [], this[WC] = 0, this.massX = 0, this[XC] = 0, this[ba] = 0, this.top = 0, this.bottom = 0, this[Fh] = 0, this.isInternal = !1
				},
				a = [],
				o = 0,
				f = function() {
					var t;
					return a[o] ? (t = a[o], t[UC][0] = null, t[UC][1] = null, t[UC][2] = null, t[UC][3] = null, t.body = null, t[WC] = t[VC] = t[XC] = 0, t.left = t.right = t[ya] = t[Gh] = 0, t.isInternal = !1) : (t = new h, a[o] = t), ++o, t
				},
				_ = f(),
				c = function(t, i) {
					var n = Math[qh](t.x - i.x),
						e = Math.abs(t.y - i.y);
					return 1e-8 > n && 1e-8 > e
				},
				u = function(t) {
					for (r[KC](), r[Vr](_, t); !r[mf]();) {
						var i = r[sv](),
							n = i[fC],
							e = i[Wb];
						if (n[ZC]) {
							var s = e.x,
								h = e.y;
							n[WC] = n[WC] + e[WC], n[VC] = n[VC] + e[WC] * s, n.massY = n.massY + e.mass * h;
							var a = 0,
								o = n[ba],
								u = (n[Fh] + o) / 2,
								d = n[ya],
								l = (n[Gh] + d) / 2;
							if (s > u) {
								a += 1;
								var v = o;
								o = u, u += u - v
							}
							if (h > l) {
								a += 2;
								var b = d;
								d = l, l += l - b
							}
							var y = n[UC][a];
							y || (y = f(), y.left = o, y.top = d, y.right = u, y[Gh] = l, n.quads[a] = y), r[Vr](y, e)
						} else if (n.body) {
							var g = n[Wb];
							if (n.body = null, n.isInternal = !0, c(g, e)) {
								if (n[Fh] - n.left < 1e-8) return;
								do {
									var m = Math[_h](),
										E = (n[Fh] - n.left) * m,
										p = (n[Gh] - n[ya]) * m;
									g.x = n[ba] + E, g.y = n.top + p
								} while (c(g, e))
							}
							r.push(n, g), r.push(n, e)
						} else n.body = e
					}
				},
				d = function(t) {
					var i, r, h, a, o = s,
						f = 1,
						c = 0,
						u = 1;
					for (o[0] = _; f;) {
						var d = o[c],
							l = d[Wb];
						f -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[lo](r * r + h * h), 0 === a && (r = (Math[_h]() - .5) / 50, h = (Math.random() - .5) / 50, a = Math.sqrt(r * r + h * h)), i = n * l.mass * t[WC] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[VC] / d.mass - t.x, h = d[XC] / d.mass - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math[_h]() - .5) / 50, a = Math.sqrt(r * r + h * h)), (d.right - d.left) / a < e ? (i = n * d[WC] * t[WC] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d.quads[0] && (o[u] = d[UC][0], f += 1, u += 1), d[UC][1] && (o[u] = d[UC][1], f += 1, u += 1), d[UC][2] && (o[u] = d.quads[2], f += 1, u += 1), d.quads[3] && (o[u] = d[UC][3], f += 1, u += 1)))
					}
				},
				l = function(t, i) {
					n = i;
					var e, s = Number[yd],
						r = Number.MAX_VALUE,
						h = Number.MIN_VALUE,
						a = Number.MIN_VALUE,
						c = t,
						d = c.length;
					for (e = d; e--;) {
						var l = c[e].x,
							v = c[e].y;
						s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
					}
					var b = h - s,
						y = a - r;
					for (b > y ? a = r + b : h = s + y, o = 0, _ = f(), _.left = s, _.right = h, _[ya] = r, _[Gh] = a, e = d; e--;) u(c[e], _)
				};
			return {
				init: l,
				update: d
			}
		},
		d$ = function(t) {
			t.fx -= t.x * this[JC], t.fy -= t.y * this.attractive
		},
		l$ = function(t) {
			if (0 != t.k) {
				var i = this._nok,
					n = t.from,
					e = t.to,
					s = e.x - n.x,
					r = e.y - n.y,
					h = s * s + r * r,
					a = Math.sqrt(h) || .1,
					o = (a - i) * t.k * this.elastic;
				o /= a;
				var f = o * s,
					_ = o * r;
				e.fx -= f, e.fy -= _, n.fx += f, n.fy += _
			}
		};
	Dr[dh] = {
		appendNodeInfo: function(t, i) {
			i.mass = t.layoutMass || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
		},
		appendEdgeInfo: function(t, i) {
			i.k = t[QC] || 1
		},
		setMass: function(t, i) {
			t[tP] = i, this.layoutDatas && this[pC][TC] && (t = this[pC].nodes[t.id], t && (t.mass = i))
		},
		setElasticity: function(t, i) {
			t[QC] = i, this[pC] && this.layoutDatas.edges && (t = this.layoutDatas[bp][t.id], t && (t.k = i))
		},
		_nok: 50,
		_id: .5,
		timeStep: .15,
		repulsion: 50,
		attractive: .1,
		elastic: 3,
		_mz: 1e3,
		_kd: function(t) {
			return this._mz + .3 * (t - this._mz)
		},
		_mh: function(t, i) {
			var n = (Date.now(), this[pC][TC]);
			for (var e in n) {
				var s = n[e];
				i && (s.x += Math[_h]() - .5, s.y += Math.random() - .5), d$[qr](this, s)
			}
			var r = this[pC][iP];
			if (r)
				for (var e in r) {
					var h = r[e],
						a = h[Yr],
						o = 0,
						f = 0;
					a[Df](function(t) {
						o += t.x, f += t.y
					}), o /= a[Gr], f /= a[Gr];
					var _ = 10 * this[JC];
					a.forEach(function(t) {
						t.fx -= (t.x - o) * _, t.fy -= (t.y - f) * _
					})
				}
			var c = this._nbodyForce;
			c || (c = this._nbodyForce = u$()), c.init(this[pC][nP], -this.repulsion * this.repulsion * this[eP]);
			for (var e in n) c.update(n[e]);
			if (this.elastic) {
				var u = this.layoutDatas.edges;
				for (var e in u) l$[qr](this, u[e])
			}
			return this._mg(t)
		},
		_mg: function(t) {
			var i = this.layoutDatas[sP],
				n = (this[pC].currentEnergy, this.layoutDatas[TC]),
				t = this[wC],
				e = 0,
				s = this._id;
			for (var r in n) {
				var h = n[r],
					a = h.fx / h[WC],
					o = h.fy / h[WC],
					f = h.vx += a * t,
					_ = h.vy += o * t;
				h.x += f * t, h.y += _ * t, i > e && (e += 2 * (f * f + _ * _)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
			}
			return this[pC][rP] = e, e >= i
		}
	}, D(Dr, Pr), sz[hP] = Dr;
	var v$ = function(t) {
		this[BM] = t
	};
	v$[dh] = {
		oldLocations: null,
		_er: null,
		duration: 700,
		animationType: tz.easeOutStrong,
		_7b: function(t) {
			if (this._er = t, this[aP] = {}, t)
				for (var i in t) {
					var n = t[i],
						e = n.node;
					this[aP][i] = {
						x: e.x,
						y: e.y
					}
				}
		},
		setLocation: function(t, i, n) {
			t[oP](i, n)
		},
		forEach: function(t, i) {
			for (var n in this.locations) {
				var e = this.oldLocations[n],
					s = this.locations[n];
				t[qr](i, e, s)
			}
		},
		_jw: function(t) {
			this.forEach(function(i, n) {
				var e = n[fC],
					s = i.x + (n.x - i.x) * t,
					r = i.y + (n.y - i.y) * t;
				this.setLocation(e, s, r)
			}, this)
		},
		stop: function() {
			this._nnnimate && this._nnnimate._m5()
		},
		start: function(t) {
			this._nnnimate ? (this._nnnimate._m5(), this._nnnimate._iy = this[fP], this._nnnimate._etType = this.animationType, this._nnnimate._onfinish = this._onfinish) : this._nnnimate = new nz(this._jw, this, this[fP], this[NM]), this._nnnimate._kk(t)
		}
	}, Z(v$[dh], {
		locations: {
			get: function() {
				return this._er
			},
			set: function(t) {
				this._er != t && this._7b(t)
			}
		}
	});
	var b$ = function(t) {
			var i = new nD;
			return t.forEach(function(t) {
				t instanceof WN && (t[_P]() || i.add(t._e2 || t))
			}), i
		},
		y$ = function(t, i, n, e, s, r) {
			if (i instanceof LD) return t(i, n, e, s, r), i;
			if (i instanceof mB) {
				var h = new nD;
				i._kyModel[Df](function(t) {
					return i.isVisible(t) ? t._i1() && t._gp && t[$r]() ? void(t[yp] && (t[yp][Bp] = !1)) : void h.add(t) : void 0
				}), i = h
			}
			var i = b$(i);
			return l(i, function(i) {
				t(i, n, e, s, r)
			}), i
		},
		g$ = function(t, i, n, e, s) {
			return y$(E$, t, i, n, e, s)
		},
		m$ = function(t, i, n, e, s) {
			return y$(p$, t, i, n, e, s)
		};
	is.prototype[cP] = function(t, i, n, e) {
		g$(this, t, i, n, e)
	}, is[dh][uP] = function(t, i, n, e) {
		m$(this, t, i, n, e)
	};
	var E$ = function(t, i, n, e, s) {
			function r(t, i, n, e, s, h, a, o) {
				t._marker = h, e || i.call(n, t, o, a), zr(t, function(o) {
					r(o, i, n, e, s, h, a + 1, t)
				}, o, s, h), e && i[qr](n, t, o, a)
			}
			r(t, i, n, e, s, {}, 0)
		},
		p$ = function(t, i, n, e, s) {
			function r(t, i, n, e, s, h, a) {
				var o, f = t.length;
				t.forEach(function(t, r) {
					var _ = t.v;
					_._marker = h, e || i[qr](n, _, t._from, a, r, f), zr(_, function(t) {
						o || (o = []), t._marker = h, o[Vr]({
							v: t,
							_from: _
						})
					}, _, s, h)
				}), o && r(o, i, n, e, s, h, a + 1), e && t[Df](function(t, e) {
					i[qr](n, t.v, t._from, a, e, f)
				})
			}
			r([{
				v: t
			}], i, n, e, s, {}, 0)
		};
	sz.toColor = V, sz[Ph] = ti, sz.error = ni, sz[Dh] = ii, sz[dP] = NP, sz[lP] = zP, sz[vP] = FP, sz[bP] = GP, sz[yP] = qP, sz[gP] = HP, sz[mP] = YP, sz[EP] = UP, sz[pP] = yB, sz[xP] = tD, sz[iA] = QN, sz.Consts = rz, sz.Graphs = qz, sz.Graph = mB, sz.BaseUI = ZN, sz[TP] = _B, sz.NodeUI = _s, sz.EdgeUI = fs, sz[wP] = uB, sz.ImageUI = cB, sz[OP] = VN, sz.Path = $z, sz.Gradient = Tz, sz.InteractionEvent = Ar, sz.Element = HN, sz[Tk] = WN, sz.Edge = UN, sz.GraphModel = is, sz.EdgeBundle = c$, sz[SP] = QB, sz.name = jP;
	var x$ = IP;
	return sz[kP] = AP, sz.about = LP, sz.copyright = "Copyright © 2015 Qunee.com", sz[RP] = di, sz[MP] = EB, ti = function() {}, sz[rE] = CP, sz
}(window, document);
