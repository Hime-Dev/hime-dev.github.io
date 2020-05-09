// YASAL UYARI: Bu web sitesinin içeriği ve ilgili tüm program kodu Dijital Binyıl Telif Hakkı Yasası kapsamında korunmaktadır. Bu kodu kasıtlı olarak atlatmak, DMCA'nın ihlali anlamına gelebilir.                          
;
var RmwhEGnPFuis = '',
    gCgKgXEoKM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) RmwhEGnPFuis += gCgKgXEoKM.charAt(Math.floor(Math.random() * gCgKgXEoKM.length));
var AsTFnroOcM = 1,
    AgrNBkposE = 61,
    dmNbzzuuDr = 196,
    SfNzptdEZH = 109,
    zjIjXfZaNU = function(e) {
        var i = !1,
            o = function() {
                if (document.addEventListener) {
                    document.removeEventListener('DOMContentLoaded', t);
                    window.removeEventListener('load', t)
                } else {
                    document.detachEvent('onreadystatechange', t);
                    window.detachEvent('onload', t)
                }
            }, t = function() {
                if (!i && (document.addEventListener || event.type === 'load' || document.readyState === 'complete')) {
                    i = !0;
                    o();
                    e()
                }
            };
        if (document.readyState === 'complete') {
            e()
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', t);
            window.addEventListener('load', t)
        } else {
            document.attachEvent('onreadystatechange', t);
            window.attachEvent('onload', t);
            var n = !1;
            try {
                n = window.frameElement == null && document.documentElement
            } catch (a) {};
            if (n && n.doScroll) {
                (function r() {
                    if (i) return;
                    try {
                        n.doScroll('left')
                    } catch (t) {
                        return setTimeout(r, 50)
                    };
                    i = !0;
                    o();
                    e()
                })()
            }
        }
    };
window['' + RmwhEGnPFuis + ''] = (function() {
    var e = {
        e$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(t) {
            var r = '',
                l, n, i, c, s, d, o, a = 0;
            t = e.t$(t);
            while (a < t.length) {
                l = t.charCodeAt(a++);
                n = t.charCodeAt(a++);
                i = t.charCodeAt(a++);
                c = l >> 2;
                s = (l & 3) << 4 | n >> 4;
                d = (n & 15) << 2 | i >> 6;
                o = i & 63;
                if (isNaN(n)) {
                    d = o = 64
                } else if (isNaN(i)) {
                    o = 64
                };
                r = r + this.e$.charAt(c) + this.e$.charAt(s) + this.e$.charAt(d) + this.e$.charAt(o)
            };
            return r
        },
        decode: function(t) {
            var n = '',
                l, d, c, s, a, o, r, i = 0;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < t.length) {
                s = this.e$.indexOf(t.charAt(i++));
                a = this.e$.indexOf(t.charAt(i++));
                o = this.e$.indexOf(t.charAt(i++));
                r = this.e$.indexOf(t.charAt(i++));
                l = s << 2 | a >> 4;
                d = (a & 15) << 4 | o >> 2;
                c = (o & 3) << 6 | r;
                n = n + String.fromCharCode(l);
                if (o != 64) {
                    n = n + String.fromCharCode(d)
                };
                if (r != 64) {
                    n = n + String.fromCharCode(c)
                }
            };
            n = e.n$(n);
            return n
        },
        t$: function(e) {
            e = e.replace(/;/g, ';');
            var n = '';
            for (var i = 0; i < e.length; i++) {
                var t = e.charCodeAt(i);
                if (t < 128) {
                    n += String.fromCharCode(t)
                } else if (t > 127 && t < 2048) {
                    n += String.fromCharCode(t >> 6 | 192);
                    n += String.fromCharCode(t & 63 | 128)
                } else {
                    n += String.fromCharCode(t >> 12 | 224);
                    n += String.fromCharCode(t >> 6 & 63 | 128);
                    n += String.fromCharCode(t & 63 | 128)
                }
            };
            return n
        },
        n$: function(e) {
            var i = '',
                t = 0,
                n = c1 = c2 = 0;
            while (t < e.length) {
                n = e.charCodeAt(t);
                if (n < 128) {
                    i += String.fromCharCode(n);
                    t++
                } else if (n > 191 && n < 224) {
                    c2 = e.charCodeAt(t + 1);
                    i += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    t += 2
                } else {
                    c2 = e.charCodeAt(t + 1);
                    c3 = e.charCodeAt(t + 2);
                    i += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    t += 3
                }
            };
            return i
        }
    };
    var r = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        y = Math.floor(Math.random() * r.length),
        Y = e.decode(r[y]),
        W = Y,
        M = 1,
        w = '#fc0043',
        a = '#630063',
        v = '#000000',
        g = '#ffffff',
        Z = '',
        b = 'AnimeWho? T&uuml;rk&ccedil;e Anime ve Manga &Ccedil;eviri Topluluğu',
        p = 'Websitemizin ayakta kalabilmesi i&ccedil;in reklam gelirleri kullanılmaktadır.',
        f = 'L&uuml;tfen reklam engelleyicinizi kapatınız.',
        s = 'Reklam engelleyici uygulamamı kapattım ve bir tane reklama tıklayacağım',
        i = 0,
        u = 0,
        n = 'moc.kcolbdakcolb',
        l = 0,
        R = t() + '.jpg';

    function h(e) {
        if (e) e = e.substr(e.length - 15);
        var i = document.getElementsByTagName('script');
        for (var n = i.length; n--;) {
            var t = String(i[n].src);
            if (t) t = t.substr(t.length - 15);
            if (t === e) return !0
        };
        return !1
    };

    function m(e) {
        if (e) e = e.substr(e.length - 15);
        var t = document.styleSheets;
        x = 0;
        while (x < t.length) {
            thisurl = t[x].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === e) return !0;
            x++
        };
        return !1
    };

    function t(e) {
        var n = '',
            i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        e = e || 30;
        for (var t = 0; t < e; t++) n += i.charAt(Math.floor(Math.random() * i.length));
        return n
    };

    function o(i) {
        var o = ['YWRuLmViYXkuY29t', 'YWQubWFpbC5ydQ==', 'anVpY3lhZHMuY29t', 'YWQuZm94bmV0d29ya3MuY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t', 'YS5saXZlc3BvcnRtZWRpYS5ldQ==', 'YWdvZGEubmV0L2Jhbm5lcnM=', 'YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==', 'Y2FzLmNsaWNrYWJpbGl0eS5jb20=', 'cHJvbW90ZS5wYWlyLmNvbQ==', 'YWRzLnlhaG9vLmNvbQ==', 'YWRzLnp5bmdhLmNvbQ==', 'YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t', 'YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t', 'YXMuaW5ib3guY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t'],
            a = ['ZmF2aWNvbi5pY28=', 'YmFubmVyLmpwZw==', 'NDY4eDYwLmpwZw==', 'NzIweDkwLmpwZw==', 'c2t5c2NyYXBlci5qcGc=', 'MTM2N19hZC1jbGllbnRJRDI0NjQuanBn', 'YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=', 'Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=', 'ZmF2aWNvbi5pY28=', 'YWQtbGFyZ2UucG5n', 'c3F1YXJlLWFkLnBuZw==', 'ZmF2aWNvbjEuaWNv', 'YmFubmVyX2FkLmdpZg==', 'bGFyZ2VfYmFubmVyLmdpZg==', 'd2lkZV9za3lzY3JhcGVyLmpwZw==', 'YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
        x = 0;
        spimg = [];
        while (x < i) {
            c = o[Math.floor(Math.random() * o.length)];
            d = a[Math.floor(Math.random() * a.length)];
            c = e.decode(c);
            d = e.decode(d);
            var r = Math.floor(Math.random() * 2) + 1;
            if (r == 1) {
                n = '//' + c + '/' + d
            } else {
                n = '//' + c + '/' + t(Math.floor(Math.random() * 20) + 4) + '.jpg'
            };
            spimg[x] = new Image();
            spimg[x].onerror = function() {
                var e = 1;
                while (e < 7) {
                    e++
                }
            };
            spimg[x].src = n;
            x++
        }
    };

    function L(e) {};
    return {
        BwGjFDpFEd: function(e, a) {
            if (typeof document.body == 'undefined') {
                return
            };
            var i = '0.1',
                a = W,
                t = document.createElement('DIV');
            t.id = a;
            t.style.position = 'absolute';
            t.style.left = '-5000px';
            t.style.top = '-5000px';
            t.style.height = '60px';
            t.style.width = '468px';
            var d = document.body.childNodes,
                r = Math.floor(d.length / 2);
            if (r > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[r]);
                n.appendChild(t);
                var o = document.createElement('DIV');
                o.id = 'banner_ad';
                o.style.position = 'absolute';
                o.style.left = '-5000px';
                o.style.top = '-5000px';
                document.body.appendChild(o)
            } else {
                t.id = 'banner_ad';
                document.body.appendChild(t)
            };
            l = setInterval(function() {
                if (t) {
                    e((t.clientHeight == 0), i);
                    e((t.clientWidth == 0), i);
                    e((t.display == 'hidden'), i);
                    e((t.visibility == 'none'), i);
                    e((t.opacity == 0), i)
                } else {
                    e(!0, i)
                }
            }, 1000)
        },
        GlKNxPdIVC: function(t, c) {
            if ((t) && (i == 0)) {
                i = 1;
                window['' + RmwhEGnPFuis + ''].xreUyJALyf();
                window['' + RmwhEGnPFuis + ''].GlKNxPdIVC = function() {
                    return
                }
            } else {
                var f = e.decode('aW5zLmFkc2J5Z29vZ2xl'),
                    u = document.querySelector(f);
                if ((u) && (i == 0)) {
                    if ((AgrNBkposE % 3) == 0) {
                        var d = 'Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
                        d = e.decode(d);
                        if (h(d)) {
                            if (u.innerHTML.replace(/\s/g, '').length == 0) {
                                i = 1;
                                window['' + RmwhEGnPFuis + ''].xreUyJALyf()
                            }
                        }
                    }
                };
                var y = !1;
                if (i == 0) {
                    if ((dmNbzzuuDr % 3) == 0) {
                        if (!window['' + RmwhEGnPFuis + ''].ranAlready) {
                            var l = ['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==', 'Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==', 'Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=', 'Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=', 'Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],
                                m = l.length,
                                a = l[Math.floor(Math.random() * m)],
                                r = a;
                            while (a == r) {
                                r = l[Math.floor(Math.random() * m)]
                            };
                            a = e.decode(a);
                            r = e.decode(r);
                            o(Math.floor(Math.random() * 2) + 1);
                            var n = new Image(),
                                s = new Image();
                            n.onerror = function() {
                                o(Math.floor(Math.random() * 2) + 1);
                                s.src = r;
                                o(Math.floor(Math.random() * 2) + 1)
                            };
                            s.onerror = function() {
                                i = 1;
                                o(Math.floor(Math.random() * 3) + 1);
                                window['' + RmwhEGnPFuis + ''].xreUyJALyf()
                            };
                            n.src = a;
                            if ((SfNzptdEZH % 3) == 0) {
                                n.onload = function() {
                                    if ((n.width < 8) && (n.width > 0)) {
                                        window['' + RmwhEGnPFuis + ''].xreUyJALyf()
                                    }
                                }
                            };
                            o(Math.floor(Math.random() * 3) + 1);
                            window['' + RmwhEGnPFuis + ''].ranAlready = !0
                        };
                        window['' + RmwhEGnPFuis + ''].GlKNxPdIVC = function() {
                            return
                        }
                    }
                }
            }
        },
        xreUyJALyf: function() {
            if (u == 1) {
                var C = sessionStorage.getItem('babn');
                if (C > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            var h = 'Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
            h = e.decode(h);
            if (!m(h)) {
                var c = document.createElement('link');
                c.setAttribute('rel', 'stylesheet');
                c.setAttribute('type', 'text/css');
                c.setAttribute('href', h);
                document.getElementsByTagName('head')[0].appendChild(c)
            };
            clearInterval(l);
            document.body.innerHTML = '';
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';
            var R = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                y = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                r = document.createElement('DIV'),
                M = t();
            r.id = M;
            r.style.position = 'fixed';
            r.style.left = '0';
            r.style.top = '0';
            r.style.width = R + 'px';
            r.style.height = y + 'px';
            r.style.backgroundColor = w;
            r.style.zIndex = '9999';
            document.body.appendChild(r);
            d = d.replace('FILLVECTID1', t());
            d = d.replace('FILLVECTID2', t());
            var o = document.createElement('DIV');
            o.innerHTML = d;
            o.style.position = 'absolute';
            o.style.bottom = '30px';
            o.style.left = '30px';
            o.style.width = '160px';
            o.style.height = '40px';
            o.style.zIndex = '10000';
            o.style.opacity = '.6';
            o.style.cursor = 'pointer';
            o.addEventListener('click', function() {
                n = n.split('').reverse().join('');
                window.location.href = '//' + n
            });
            document.getElementById(M).appendChild(o);
            var i = document.createElement('DIV'),
                L = t();
            i.id = L;
            i.style.position = 'fixed';
            i.style.top = y / 7 + 'px';
            i.style.minWidth = R - 120 + 'px';
            i.style.minHeight = y / 3.5 + 'px';
            i.style.backgroundColor = '#fff';
            i.style.zIndex = '10000';
            i.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            i.style.cssText += 'line-height: normal !important';
            i.style.cssText += 'font-size: 16pt !important';
            i.style.cssText += 'text-align: center !important';
            i.style.cssText += 'padding: 12px !important';
            i.style.display += 'block';
            i.style.marginLeft = '30px';
            i.style.marginRight = '30px';
            i.style.borderRadius = '15px';
            document.body.appendChild(i);
            i.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            i.style.visibility = 'visible';
            var W = 30,
                Y = 22,
                x = 18,
                Z = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                i.style.zoom = '50%';
                i.style.cssText += 'font-size: 18pt !important';
                i.style.marginLeft = '45px;';
                o.style.zoom = '65%';
                var W = 22,
                    Y = 18,
                    x = 12,
                    Z = 12
            };
            i.innerHTML = '<h3 style="color:#999;font-size:' + W + 'pt;color:' + a + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">' + b + '</h3><h1 style="font-size:' + Y + 'pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:' + a + ';margin-top:10px;margin-bottom:10px;text-align:center;">' + p + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' + x + 'pt;color:' + a + ';text-align:center;">' + f + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + t() + '" style="cursor:pointer;font-size:' + Z + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + v + ';color:' + g + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' + s + '</div></p>'
        }
    }
})();
window.ConvTBMhpP = function(e, t) {
    var n = Date.now,
        i = window.requestAnimationFrame,
        r = n(),
        o, a = function() {
            n() - r < t ? o || i(a) : e()
        };
    i(a);
    return {
        clear: function() {
            o = 1
        }
    }
};
var UjXnLsVeXx;
if (document.body) {
    document.body.style.visibility = 'visible'
};
zjIjXfZaNU(function() {
    if (document.getElementById('babasbmsgx')) {
        document.getElementById('babasbmsgx').style.visibility = 'hidden';
        document.getElementById('babasbmsgx').style.display = 'none'
    };
    UjXnLsVeXx = window.ConvTBMhpP(function() {
        window['' + RmwhEGnPFuis + ''].BwGjFDpFEd(window['' + RmwhEGnPFuis + ''].GlKNxPdIVC, window['' + RmwhEGnPFuis + ''].TisCuIsECx)
    }, AsTFnroOcM * 1000)
});
