var strDomain = document.domain,
    checkStickyLoad = !1,
    checkStickyCount = !1,
    random1 = 0,
    return_link = "",
    admTimeSticky = 0,
    t_showFooterPopup, t_showFooterPopup1, _admStickyHeight = 0,
    _admStickyFooter = 0,
    _admStickyFooterEnd = 0;
if ("undefined" == typeof admStickyWide) var admStickyWide = !1;
if ("undefined" == typeof admchkStickyWide) var admchkStickyWide = !1;
if ("undefined" == typeof admStickyHide) var admStickyHide = !1;

function getElementsByPrefix(a, c) {
    var e = [];
    if ("undefined" != typeof c.firstChild)
        for (var d = c.firstChild; null != d;) "undefined" != typeof d.firstChild && (e = e.concat(this.getElementsByPrefix(a, d))), "undefined" != typeof d.id && d.id.match(RegExp("^" + a + ".*")) && e.push(d), d = d.nextSibling;
    return e
}
var windowPrototype = {
        wdHeight: function() {
            var a;
            "number" == typeof window.innerWidth ? a = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && document.body.clientHeight && (a = document.body.clientHeight);
            return a
        },
        wdWidth: function() {
            var a;
            "number" == typeof window.innerWidth ? a = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? a = document.documentElement.clientWidth : document.body && document.body.clientWidth &&
                (a = document.body.clientWidth);
            return a
        }
    },
    Browser = {
        Version: function() {
            var a = 999; - 1 != navigator.appVersion.indexOf("MSIE") && (a = parseFloat(navigator.appVersion.split("MSIE")[1]));
            return a
        }
    },
    browserVersion = Browser.Version(),
    admwdHeight = parseInt(windowPrototype.wdHeight());

function getScrollTop() {
    var a = document.body.scrollTop;
    0 == a && (a = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0);
    return a
}

function getElementTop(a) {
    if (document.getElementById) var c = document.getElementById(a);
    else document.all && (c = document.all[a]);
    if (null != c) {
        yPos = c.offsetTop;
        for (tempEl = c.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;
        return yPos
    }
    return 0
}

function getElementLeft(a) {
    var c;
    document.getElementById ? c = document.getElementById(a) : document.all && (c = document.all[a]);
    if (null == c || "undefined" == typeof c) return 0;
    a = c.offsetLeft;
    for (c = c.offsetParent; null != c;) a += c.offsetLeft, c = c.offsetParent;
    return a
}

function getElementWidth(a) {
    return document.getElementById(a).clientWidth
}

function getElementHeight(a) {
    try {
        return document.getElementById(a).clientHeight
    } catch (e) {
        return 0;
    }
}
var stickyCheck = 0;

function stickyLoaded(a, c, e) {
    advScroll(a, c, e)
}
var admBox2Status = 0;

function advScroll(a, c, e, x) {
    _admStickyFooterEnd = e;
    "Sticky" == a && 0 != _admStickyHeight && (c = _admStickyHeight);
    var d = "advZone" + a,
        b = document,
        f = Math.max(Math.max(b.body.scrollHeight, b.documentElement.scrollHeight), Math.max(b.body.offsetHeight, b.documentElement.offsetHeight), Math.max(b.body.clientHeight, b.documentElement.clientHeight)),
        l = getScrollTop(),
        k = getElementTop(d + "Top"),
        b = b.getElementById(d),
        n = getElementLeft(d + "Top"),
        m = 0,
        g = navigator.userAgent,
        p = getElementHeight(d);
    p > c && (c = p);
    0 == admBox2Status && -1 == g.indexOf("MSIE") &&
        (admBox2Status = 1);
    var h;
    if ("string" == typeof e) h = f - getElementTop(e);
    else if ("object" == typeof e)
        for (g = 0, p = e.length; g < p; g++)
            if ("string" == typeof e[g]) {
                if (document.getElementById(e[g])) {
                    var q = getElementTop(e[g]);
                    if (0 != q) {
                        h = f - q;
                        break
                    }
                }
            } else {
                h = e[g];
                break
            }
    else h = e;
    50 > admTimeSticky && admTimeSticky++;
    g = Math.floor((f - (k + h)) / 2);
    780 <= admwdHeight && (admStickyWide && !admchkStickyWide && 1200 <= g) && (admchkStickyWide = !0);
    _admFSticky =
        h;
    if (f - k > c + h && 110 <= k)
        if (b.style.display = "block", a = getElementWidth(d + "Top"), e = getElementWidth(d), g = -1 != strDomain.indexOf("kenh14.vn") ? 1.08 : 1.2, f - k - h > g * c) {
            a > e && (m = Math.round((a - e) / 2));
            if (x == "undefined") x = 0;
            if (f - l > c + h+x+10)
                if (7 > browserVersion) b.style.position = "absolute", b.style.left = n + m + "px", b.style.top = l + "px", a = getElementTop(d) - l, 0 != a && (b.style.top = l - a + "px");
                else if ((-1 != strDomain.indexOf("tratu.vn") || -1 != strDomain.indexOf("socvui.com") || -1 != strDomain.indexOf("kenh14.vn")) && 9 >= browserVersion && 8 <= browserVersion) b.style.position =
                "absolute", b.style.left = n + m + "px", b.style.top = l + "px", a = getElementTop(d) - l, 0 != a && (b.style.top = l - a + "px");
            else {
                c = document.domain;
                f = 10;
                
                if (-1 != c.indexOf("muare.vn") || -1 != c.indexOf("muare.todo.vn")) f = 35;
                b.style.left = n + m + "px";
                b.style.top = x+f + "px";
                b.style.bottom = "auto";
                b.style.position = "fixed";
              //  b.style.marginTop = x+"px";

            } else b.style.position = "absolute", b.style.left = n + m + "px", -1 != document.domain.indexOf("giacaphe.com") || -1 != document.domain.indexOf("quantri.com.vn") ? b.style.top = f - (c + h) - 300 + "px" :
                b.style.top = f - (c + h) + "px", a = f - getElementTop(d), c + h > a && (b.style.top = f - 2 * (c + h) + a + "px");
            l < k && (b.style.top = k + "px", b.style.position = "");
            d = getElementLeft(d) - (m + n);
            0 != d && (7 == browserVersion ? 0 < d && (b.style.position = "", b.style.top = "0px", b.style.left = "0px") : b.style.left = m + n - d + "px")
        } else b.style.top = k + "px", b.style.position = "";
    else f - k - h > 0.85 * c ? b.style.display = "block" : 272 < f - k - h && -1 == a.indexOf("No") ? (a += "No", d = document.getElementById("advZone" + a), c = 320, d && ("Sticky" == a ? clearTimeout(t_showFooterPopup) : clearTimeout(t_showFooterPopup1),
        advScroll(a, c, e), b.style.display = "none")) : !1 === admStickyHide ? (b.style.display = "block", b.style.position = "") : b.style.display = "none"
};