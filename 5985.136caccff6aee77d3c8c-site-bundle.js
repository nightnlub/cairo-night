/*! For license information please see 5985.136caccff6aee77d3c8c-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [5985, 7495], {
        112525: function(t, e, n) {
            n.r(e), n.d(e, {
                FORM_RESPONSE_TYPE_INBOX: function() {
                    return u
                },
                FORM_RESPONSE_TYPE_SPAM: function() {
                    return c
                },
                TUTORIAL_VIDEO: function() {
                    return s
                },
                KICKSTART_PAGE: function() {
                    return g
                },
                getKickstartPage: function() {
                    return f
                },
                MAX_SECTIONS_FREE: function() {
                    return h
                },
                MAX_SECTIONS_PRO: function() {
                    return m
                },
                MAX_SECTIONS_MP: function() {
                    return _
                },
                HARD_MAX_SECTIONS: function() {
                    return d
                },
                MAX_PAGES: function() {
                    return v
                },
                HARD_MAX_PAGES: function() {
                    return p
                },
                MAX_DROPDOWNS: function() {
                    return b
                },
                MAX_DROPDOWN_ITEMS: function() {
                    return C
                },
                MIN_PAGES: function() {
                    return E
                },
                PAGE_UID: function() {
                    return T
                },
                isPageUidExists: function() {
                    return S
                },
                INDEPENDENT_PAGE: function() {
                    return y
                }
            });
            var r = n(678580),
                o = n.n(r),
                i = n(20455),
                a = n.n(i),
                l = {
                    en: "/kickstart",
                    fr: "/kickstart-fr",
                    ja: "/kickstart-jp",
                    es: "/kickstart-es",
                    ar: "/kickstart-ar",
                    de: "/kickstart-de",
                    it: "/kickstart-it",
                    nl: "/kickstart-nl",
                    fi: "/kickstart-fi",
                    no: "/kickstart-no",
                    sv: "/kickstart-sv",
                    cs: "/kickstart-cs",
                    ro: "/kickstart-ro",
                    id: "/kickstart-id",
                    "pt-BR": "/kickstart-pt",
                    "zh-CN": "/kickstart-cn",
                    "zh-TW": "/kickstart-tw"
                },
                u = "FORM_RESPONSE_TYPE_INBOX",
                c = "FORM_RESPONSE_TYPE_SPAM",
                s = "https://www.youtube.com/watch?v=O2e10e84Tz8",
                g = "https://www.strikingly.com/kickstart",
                f = function(t, e) {
                    var n = "0" !== e[t] && t || "en";
                    return l[n]
                },
                h = 20,
                m = 40,
                _ = 20,
                d = 100,
                v = 100,
                p = 100,
                b = 10,
                C = 15,
                E = 5,
                T = {
                    PRODUCT_PAGE: "product_page",
                    SEARCH_PAGE: "search_page",
                    ITEM_PAGE: "item_page",
                    STORE_PAGE: "store_page",
                    PORTFOLIO_CATEGORIES_PAGE: "portfolio_categories_page",
                    BLOG_CATEGORIES_PAGE: "blog_categories_page",
                    BOOKING_PAGE: "booking_page",
                    SITE_PAGE: "site_page",
                    AI_GENERATE_PAGE: "ai-generate-page-uid"
                };

            function S(t) {
                var e;
                return o()(e = a()(T)).call(e, t)
            }
            var y = [T.PRODUCT_PAGE, T.SEARCH_PAGE, T.ITEM_PAGE, T.BOOKING_PAGE, T.STORE_PAGE, T.PORTFOLIO_CATEGORIES_PAGE, T.BLOG_CATEGORIES_PAGE]
        },
        589499: function(t, e, n) {
            n.r(e), n.d(e, {
                getImageTransformation: function() {
                    return N
                },
                transformImageUrls: function() {
                    return M
                },
                getCloudinaryStorageInfoByUrl: function() {
                    return x
                },
                getUnsplashStorageInfoByUrl: function() {
                    return G
                },
                cdnAssetPath: function() {
                    return U
                },
                prependProtocol: function() {
                    return D
                },
                changeProtocolToHttps: function() {
                    return K
                },
                getTrimmedImageCanvas: function() {
                    return B
                },
                setImagesThumbnail: function() {
                    return F
                },
                getAiImageAssetPath: function() {
                    return H
                }
            });
            var r = n(319623),
                o = (n(974916), n(323123), n(569600), n(115306), n(804723), n(51942)),
                i = n.n(o),
                a = n(977766),
                l = n.n(a),
                u = n(277149),
                c = n.n(u),
                s = n(729828),
                g = n.n(s),
                f = n(359340),
                h = n.n(f),
                m = n(703649),
                _ = n.n(m),
                d = n(981643),
                v = n.n(d),
                p = n(2991),
                b = n.n(p),
                C = n(496486),
                E = n(723479),
                T = n(144726),
                S = n(107056),
                y = ["http://res.cloudinary.com", "http://assets.strikingly.com", "http://uploads.strikinglycdn.com", "http://nzr2ybsda.qnssl.com", "http://user-assets.sxlcdn.com"],
                k = function(t) {
                    if (!(t instanceof T.default)) throw new Error("Invalid argument: image type is not of Image")
                },
                I = function(t) {
                    return C.isNumber(t.getSize()) && t.getSize() <= 40960
                },
                O = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !e && c()(y).call(y, (function(e) {
                        return g()(t).call(t, e)
                    })) ? t.replace("http://", "//") : e && C.startsWith(t, "//") ? "http:".concat(t) : t
                },
                A = {
                    none: "",
                    small: "300x300>",
                    medium: "720x1440>",
                    large: "1200x9000>",
                    background: "2000x1500>"
                };

            function R(t) {
                return "small" !== t && "medium" !== t && "large" !== t && "background" !== t && "none" !== t || (t = A[t]), t
            }
            var w = C.memoize((function(t) {
                var e, n;
                return "object" === (0, r.Z)(t) ? e = t : (e = {
                    width: (n = t, _()(n).call(n, 0, -1).split("x")[0]),
                    height: P(t)
                }, C.extend(e, function(t) {
                    var e;
                    return "#" === (e = t.charAt(t.length - 1)) ? {
                        crop: "fill",
                        gravity: "faces:auto"
                    } : "<" === e || ">" === e ? {
                        crop: "limit"
                    } : void 0
                }(t))), e
            }));

            function P(t) {
                return _()(t).call(t, 0, -1).split("x")[1]
            }

            function L(t, e) {
                var n, r, o = {};
                return n = R(t || "large"), r = R(e || "200x200#"), o.custom = w(n), o.thumb = w(r), o
            }

            function N(t, e) {
                var n;
                if (t.getStorageKey())
                    if ("ali" === t.getStorage()) {
                        var r, o, a = (0, E.getConfig)().getUserImageCDN(t.getStorage());
                        n = l()(r = l()(o = "".concat(a, "/")).call(o, t.getStorageKey(), "@")).call(r, function(t, e) {
                            var n = {
                                    h: e.height,
                                    w: e.width
                                },
                                r = {},
                                o = t.noCompression,
                                i = {
                                    Q: o ? 100 : 90
                                },
                                a = {},
                                u = t.getFormat();
                            switch (!o && I(t) && (i = null), e.crop) {
                                case "limit":
                                    r = {
                                        l: 1
                                    };
                                    break;
                                case "fill":
                                    r = {
                                        c: 1,
                                        e: 1
                                    };
                                    break;
                                default:
                                    throw new Error("".concat(h()(e), " not found!"))
                            }
                            return (C.endsWith(u, "jpg") || C.endsWith(u, "jpeg")) && (a = {
                                pr: 1
                            }), C.reduce(C.assign({}, n, i, r, a), (function(t, e, n) {
                                var r;
                                return t.push(l()(r = "".concat(e)).call(r, n)), t
                            }), []).join("_")
                        }(t, e))
                    } else if ("qn" === t.storage)
                    if (t.getIsPrivate()) {
                        var u, c = t.getStoragePrefix() || (0, E.getConfig)().getUserImagePrivateCDN(t.getStorage());
                        n = l()(u = "".concat(c, "/")).call(u, t.getStorageKey())
                    } else {
                        var s, g, f = t.getStoragePrefix() || (0, E.getConfig)().getUserImageCDN(t.getStorage());
                        n = l()(s = l()(g = "".concat(f, "/")).call(g, t.getStorageKey(), "?")).call(s, function(t, e) {
                            var n, r, o, i, a = {},
                                u = t.noCompression,
                                c = {
                                    quality: u ? "100!" : "90!"
                                };
                            !u && I(t) && (c = null);
                            var s, g, f = {},
                                h = t.getFormat(),
                                m = h;
                            switch (e.crop) {
                                case "limit":
                                    a = {
                                        thumbnail: l()(n = "".concat(e.width, "x")).call(n, e.height, ">")
                                    };
                                    break;
                                case "fill":
                                    a = {
                                        thumbnail: l()(r = "!".concat(e.width, "x")).call(r, e.height, "r"),
                                        gravity: "Center",
                                        crop: l()(o = "".concat(e.width, "x")).call(o, e.height)
                                    }
                            }
                            switch ((C.endsWith(h, "jpg") || C.endsWith(h, "jpeg")) && (f = {
                                interlace: 1
                            }), h) {
                                case "webp":
                                case "WEBP":
                                    var _ = t.getStorageKey().split(".");
                                    m = _.length > 1 ? _.pop() : "png"
                            }
                            s = C.reduce(C.assign({}, a, c, f), (function(t, e, n) {
                                var r;
                                return t.push(l()(r = "".concat(n, "/")).call(r, e)), t
                            }), []).join("/"), m && (s = l()(g = "".concat(s, "/format/")).call(g, m));
                            var d = ["imageMogr2", "strip", "auto-orient"].join("/");
                            return l()(i = "".concat(d, "/")).call(i, s)
                        }(t, e))
                    }
                else if ("c" === t.storage || "s" === t.storage) {
                    var m, _, d, p, b = (0, E.getConfig)().getUserImageCDN("s");
                    n = l()(m = l()(_ = l()(d = l()(p = "".concat(b, "/res/hrscywv4p/image/upload/")).call(p, function(t, e) {
                        var n = t.noCompression,
                            r = {
                                quality: n ? 100 : "auto"
                            };
                        C.endsWith(t.getFormat(), "gif") && (r = {
                            quality: n ? 100 : 60
                        });
                        var o = {};
                        t.getStoragePrefix() && (o.cloud_name = t.getStoragePrefix());
                        var a = i()({
                            fetch_format: "auto",
                            format: e.format || t.format
                        }, r, {
                            flags: "lossy"
                        }, e, o);
                        return S.utils.generate_transformation_string(a)
                    }(t, e))).call(d, t.getFocus(), "/")).call(_, t.getStorageKey(), ".")).call(m, t.getFormat())
                } else if ("un" === t.storage) {
                    var T, y, k = t.getStorageKey();
                    n = l()(T = l()(y = "".concat(k)).call(y, -1 !== v()(k).call(k, "?") ? "&" : "?")).call(T, function(t, e) {
                        var n = {
                                h: e.height,
                                w: e.width
                            },
                            r = {},
                            o = t.noCompression,
                            i = {
                                q: o ? 100 : 40
                            };
                        switch (!o && I(t) && (i = null), e.crop) {
                            case "limit":
                                r = {
                                    fit: "clip"
                                };
                                break;
                            case "fill":
                                r = {
                                    fit: "crop"
                                };
                                break;
                            default:
                                throw new Error("".concat(h()(e), " not found!"))
                        }
                        return C.reduce(C.assign({}, n, i, r, {
                            fm: "jpg"
                        }), (function(t, e, n) {
                            var r;
                            return t.push(l()(r = "".concat(n, "=")).call(r, e)), t
                        }), []).join("&")
                    }(t, e))
                }
                return n
            }
            var M = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                k(t);
                var r = /^\/images\//,
                    o = /^\/assets\//,
                    i = /\/\/res.cloudinary.com/,
                    a = (0, E.getConfig)().getUserImageCDN("s"),
                    u = {};
                if (Boolean(t.getStorageKey()) && "null" !== t.getStorageKey()) {
                    var c = L(e.custom, e.thumb);
                    u.custom = "".concat(N(t, c.custom)), u.thumb = "".concat(N(t, c.thumb))
                } else {
                    var s, g, f = (0, E.getConfig)().getAssetUrl() || "";
                    if (r.test(t._url)) u.custom = l()(s = "".concat(f)).call(s, t._url);
                    else if (o.test(t._url)) u.custom = t._url.replace(o, "".concat(f, "/images/"));
                    else if (i.test(t._url)) {
                        var h = t._url.replace(i, "".concat(a, "/res"));
                        u.custom = h.replace(/\/v\d+(\/([^/]+\/)?[^/]+\.\w+$)/, "$1")
                    } else u.custom = "".concat(t._url);
                    if (r.test(t._thumbUrl)) u.thumb = l()(g = "".concat(f)).call(g, t._thumbUrl);
                    else if (o.test(t._thumbUrl)) u.thumb = t._thumbUrl.replace(o, "".concat(f, "/images/"));
                    else if (i.test(t._thumbUrl)) {
                        var m = t._thumbUrl.replace(i, "".concat(a, "/res"));
                        u.thumb = m.replace(/\/v\d+(\/([^/]+\/)?[^/]+\.\w+$)/, "$1")
                    } else u.thumb = "".concat(t._thumbUrl)
                }
                return "null" === u.custom && (u.custom = ""), "undefined" === u.custom && (u.custom = ""), "null" === u.thumb && (u.thumb = ""), "undefined" === u.thumb && (u.thumb = ""), {
                    custom: O(u.custom, n),
                    thumb: O(u.thumb, n)
                }
            };

            function x(t) {
                if (!/res\.cloudinary\.com/.test(t)) return !1;
                var e = t.match(/v[0-9]\/(.+)\.(jpg|jpeg|png|gif|bmp|ico)$/);
                return e && 3 === e.length ? {
                    storage: "c",
                    storageKey: e[1],
                    format: e[2]
                } : void 0
            }

            function G(t) {
                var e = /^https?:\/\/images\.unsplash\.com\/[^?]+/.exec(t);
                return !!e && {
                    storage: "un",
                    storageKey: e[0]
                }
            }

            function U(t) {
                var e = t;
                if (/^(?!(\/\/|http))/.test(t)) {
                    var n, r, o = (null === (n = (0, E.getConfig)()) || void 0 === n ? void 0 : n.getAssetUrl()) || "";
                    e = l()(r = "".concat(o)).call(r, t)
                }
                return e
            }

            function D(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t && "string" == typeof t ? "//" !== _()(t).call(t, 0, 2) ? t : e.forceHttps ? "https:".concat(t) : "http:".concat(t) : ""
            }

            function K(t) {
                return t && "string" == typeof t ? "http:" === _()(t).call(t, 0, 5) ? t.replace("http", "https") : "https" === _()(t).call(t, 0, 5) ? t : "https:".concat(t) : ""
            }

            function B(t) {
                var e = document.createElement("canvas"),
                    n = t.width,
                    r = t.height;
                e.width = n, e.height = r;
                var o = e.getContext("2d");
                o.drawImage(t, 0, 0);
                var i, a, l, u = o.getImageData(0, 0, n, r),
                    c = u.data.length,
                    s = {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    };
                for (i = 0; i < c; i += 4) 0 !== u.data[i + 3] && (a = i / 4 % n, l = ~~(i / 4 / n), null === s.top && (s.top = l), (null === s.left || a < s.left) && (s.left = a), (null === s.right || s.right < a) && (s.right = a), (null === s.bottom || s.bottom < l) && (s.bottom = l));
                var g = s.bottom + 1 - s.top,
                    f = s.right + 1 - s.left,
                    h = o.getImageData(s.left, s.top, f, g);
                return o.clearRect(0, 0, n, r), e.width = f, e.height = g, o.putImageData(h, 0, 0), e
            }

            function F(t) {
                return b()(t).call(t, (function(t) {
                    var e = t.get("thumb_url"),
                        n = !e || "!" === e;
                    if ("Image" === t.get("type") && n) {
                        var r = (0, T.createImage)(t.toJS());
                        t = (t = t.set("thumb_url", r.getThumbUrl())).set("url", r.getUrlWithoutFocus())
                    }
                    return t
                }))
            }
            var H = function(t) {
                return {
                    "--default-bg": "url(".concat(U("/images/editor/ai-icon/".concat(t, ".png")), ")"),
                    "--hover-bg": "url(".concat(U("/images/editor/ai-icon/hover-".concat(t, ".png")), ")")
                }
            }
        },
        143268: function(t, e, n) {
            n.r(e), n.d(e, {
                TRANSPARENT_IMAGE_URL_FRAGMENT: function() {
                    return v
                },
                isEmail: function() {
                    return p
                },
                isURL: function() {
                    return b
                },
                removeProtocol: function() {
                    return C
                },
                hasProtocol: function() {
                    return E
                },
                addProtocol: function() {
                    return T
                },
                replaceParamsByObj: function() {
                    return S
                },
                imageHasContent: function() {
                    return y
                },
                getExternalLinkMappingRS: function() {
                    return k
                },
                paramsToQuery: function() {
                    return I
                },
                getRootHost: function() {
                    return O
                },
                extractPathSlug: function() {
                    return A
                }
            });
            var r = n(981643),
                o = n.n(r),
                i = n(394198),
                a = n.n(i),
                l = n(432366),
                u = n.n(l),
                c = n(2991),
                s = n.n(c),
                g = n(686902),
                f = n.n(g),
                h = n(977766),
                m = n.n(h),
                _ = (n(324603), n(974916), n(339714), n(804723), n(115306), n(323123), n(496486)),
                d = n(329756),
                v = "/icons/transparent.png";

            function p(t) {
                return d.RegexConstants.EMAIL.test(t)
            }

            function b(t) {
                var e = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_\\/]*)?$", "i");
                return Boolean(e.test(t))
            }

            function C(t) {
                var e = t.match(/https?:\/\/(.*)$/);
                return e ? e[1].match(/([^\/]*)/)[1] : t
            }

            function E(t) {
                var e;
                return e = /^(#)/, /^((http|https|ftp|mailto|tel|fb|skype|itms-services|javascript|sms|irc):)/i.test(t) || e.test(t)
            }

            function T(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (0 === (t = _.trim(t)).length) t = e ? "" : "javascript:void(0);";
                else if (p(t)) t = "mailto:".concat(t);
                else if (!E(t))
                    if (_.startsWith(t, "//")) t = n ? "https:".concat(t) : "http:".concat(t);
                    else {
                        if (_.startsWith(t, "/") || _.startsWith(t, "tencent://")) return t;
                        t = n ? "https://".concat(t) : "http://".concat(t)
                    }
                return t
            }

            function S() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.toLowerCase().replace(/\{\{(\w+)\}\}/g, "$1");
                for (var r in e) n = n.replace(new RegExp(r, "g"), e[r]);
                return n.replace(/(\{\{|\}\})/g, "")
            }

            function y(t) {
                return t && t.length && -1 === o()(t).call(t, v)
            }

            function k(t, e) {
                var n, r, o, i, l, u, c, s, g;
                try {
                    r = decodeURI(t).match(/^\(\s*strikingly-page-id-(\d*)\s*\)$/)
                } catch (t) {
                    r = null
                }
                if (n = {
                        matchedType: "",
                        siteDeleted: !1,
                        rs: !1
                    }, null != r && null != (g = r[1]) ? g.length : void 0) {
                    for (i = r[1], l = 0, c = e.length; l < c; l++)
                        if (o = e[l], a()(i, 10) === o.id) return n.publicURL = o.public_url, n.pageID = "(strikingly-page-id-".concat(o.id, ")"), n.matchedType = "id", n.rs = !0, n;
                    n.siteDeleted = !0
                }
                for (u = 0, s = e.length; u < s; u++)
                    if (t === (o = e[u]).public_url) return n.publicURL = o.public_url, n.pageID = "(strikingly-page-id-".concat(o.id, ")"), n.matchedType = "url", n.rs = !0, n;
                return n
            }

            function I(t) {
                var e, n;
                return u()(e = s()(n = f()(t)).call(n, (function(e) {
                    var n;
                    return m()(n = "".concat(e, "=")).call(n, t[e])
                }))).call(e, (function(e, n, r) {
                    var o, i, a = r === f()(t).length - 1 ? "" : "&";
                    return m()(o = m()(i = "".concat(e)).call(i, n)).call(o, a)
                }), "")
            }

            function O(t) {
                var e, n = (t || window.location.host).split("."),
                    r = n.length;
                return m()(e = "".concat(n[r - 2], ".")).call(e, n[r - 1])
            }

            function A(t, e) {
                var n = new RegExp("".concat(e, "/([^/]+)/?$")),
                    r = t.match(n);
                return r ? r[1] : ""
            }
        },
        836766: function(t, e, n) {
            n.r(e), n.d(e, {
                TEXT_SIZE_TAG: function() {
                    return a
                },
                SIZE_TYPE: function() {
                    return l
                },
                TEXT_DEFAULT_COLORS: function() {
                    return u
                },
                HAS_DEFAULT_TEXT_COLORS: function() {
                    return c
                },
                DEFAULT_COLOR_HIGHLIGHT: function() {
                    return s
                },
                TEXT_TYPE: function() {
                    return g
                },
                TEXT_COLOR_TYPE: function() {
                    return f
                },
                TEXT_SETTINGS_FIELD_MAPPING: function() {
                    return h
                },
                TEXT_SETTINGS_CLASS_MAPPING: function() {
                    return m
                },
                NAV_SETTINGS_FIELD_MAPPING: function() {
                    return _
                },
                TEXT_SETTINGS_CONFIG_FIELD_MAPPING: function() {
                    return d
                },
                COLOR_CHANGE_INIT_SETTINGS: function() {
                    return v
                },
                TEXT_PRE_COLOR_COUNT: function() {
                    return p
                },
                COLOR_SETTINGS_FIELDS: function() {
                    return b
                },
                HIGH_LIGHT_CHANGE_COLOR_SETTINGS_FIELDS: function() {
                    return C
                },
                COLOR_SETTINGS_DEFAULT_VALUE: function() {
                    return E
                }
            });
            var r = n(384887),
                o = n(234584),
                i = n.n(o),
                a = {
                    TITLE: "h1",
                    SUBTITLE: "h4",
                    ITEM_TITLE: "h3",
                    ITEM_SUBTITLE: "h6"
                },
                l = {
                    BODY: "body",
                    TITLE: "title",
                    SUBTITLE: "subTitle",
                    ITEM_TITLE: "itemTitle",
                    ITEM_SUBTITLE: "itemSubTitle",
                    S_LOGO_TITLE: "sLogoTitle"
                },
                u = {
                    baseColor: "#50555c",
                    titleColor: "#1D2023",
                    subtitleColor: "#1D2023",
                    itemTitleColor: "#1D2023",
                    itemSubtitleColor: "#1D2023",
                    sLogoTitleColor: "rgba(0, 0, 0, 0.8)"
                },
                c = ["titleColor", "itemTitleColor", "baseColor"],
                s = ["button.backgroundColor", "section.subtitleColor", "section.itemSubtitleColor"],
                g = {
                    TITLE: "title",
                    HEADING: "heading",
                    TEXT: "body"
                },
                f = {
                    DEFAULT: "default",
                    PRE_COLOR: "pre-color",
                    CUSTOM: "custom"
                },
                h = {
                    title: "titleColor",
                    subTitle: "subtitleColor",
                    subtitle: "subtitleColor",
                    itemTitle: "itemTitleColor",
                    itemtitle: "itemTitleColor",
                    itemSubTitle: "itemSubtitleColor",
                    itemSubtitle: "itemSubtitleColor",
                    itemsubtitle: "itemSubtitleColor",
                    body: "baseColor",
                    sLogoTitle: "sLogoTitleColor"
                },
                m = {
                    "s-item-text": "baseColor",
                    "s-title": "titleColor",
                    "s-subtitle": "subtitleColor",
                    "s-item-title": "itemTitleColor",
                    "s-item-subtitle": "itemSubtitleColor"
                },
                _ = {
                    itemColor: "itemColorSettings",
                    backgroundColor1: "backgroundColorSettings",
                    blockTextColor: "highlight.blockTextColorSettings",
                    textColor: "highlight.textColorSettings",
                    blockBackgroundColor: "highlight.blockBackgroundColorSettings",
                    highlightColor: "highlightColorSettings",
                    borderColor: "borderColorSettings"
                },
                d = {
                    titleColor: "title",
                    subtitleColor: "subtitle",
                    itemTitleColor: "itemTitle",
                    itemSubtitleColor: "itemSubtitle",
                    baseColor: "base"
                },
                v = ["button.backgroundSettings", "section.title", "section.subtitle", "section.itemTitle", "section.itemSubtitle", "section.base", "nav.border.borderColorSettings", "nav.backgroundColorSettings", "nav.highlightColorSettings", "nav.itemColorSettings", "nav.highlight.blockTextColorSettings", "nav.highlight.blockBackgroundColorSettings", "nav.highlight.textColorSettings"],
                p = {
                    ONLY_ONE_THEME_COLOR: 5,
                    TWO_THEME_COLOR: 10,
                    NO_THEME_COLOR: 0
                },
                b = [{
                    settingsKey: "nav.backgroundColorSettings",
                    colorKey: "nav.backgroundColor1"
                }, {
                    settingsKey: "nav.highlightColorSettings",
                    colorKey: "nav.highlightColor"
                }, {
                    settingsKey: "nav.itemColorSettings",
                    colorKey: "nav.itemColor"
                }, {
                    settingsKey: "nav.border.borderColorSettings",
                    colorKey: "nav.border.borderColor"
                }, {
                    settingsKey: "button.backgroundSettings",
                    colorKey: "button.backgroundColor"
                }, {
                    settingsKey: "nav.highlight.blockTextColorSettings",
                    colorKey: "nav.highlight.blockTextColor"
                }, {
                    settingsKey: "nav.highlight.blockBackgroundColorSettings",
                    colorKey: "nav.highlight.blockBackgroundColor"
                }, {
                    settingsKey: "nav.highlight.textColorSettings",
                    colorKey: "nav.highlight.textColor"
                }, {
                    settingsKey: "section.base",
                    colorKey: "section.baseColor"
                }, {
                    settingsKey: "section.title",
                    colorKey: "section.titleColor"
                }, {
                    settingsKey: "section.subtitle",
                    colorKey: "section.subtitleColor"
                }, {
                    settingsKey: "section.itemTitle",
                    colorKey: "section.itemTitleColor"
                }, {
                    settingsKey: "section.itemSubtitle",
                    colorKey: "section.itemSubtitleColor"
                }],
                C = [{
                    settingsKey: "nav.highlightColorSettings",
                    colorKey: "nav.highlightColor"
                }, {
                    settingsKey: "button.backgroundSettings",
                    colorKey: "button.backgroundColor"
                }, {
                    settingsKey: "section.base",
                    colorKey: "section.baseColor"
                }, {
                    settingsKey: "section.title",
                    colorKey: "section.titleColor"
                }, {
                    settingsKey: "section.subtitle",
                    colorKey: "section.subtitleColor"
                }, {
                    settingsKey: "section.itemTitle",
                    colorKey: "section.itemTitleColor"
                }, {
                    settingsKey: "section.itemSubtitle",
                    colorKey: "section.itemSubtitleColor"
                }],
                E = {
                    "nav.backgroundColorSettings": function() {
                        return "#ffffff"
                    },
                    "nav.highlight.blockTextColorSettings": function(t) {
                        return t || "#ffffff"
                    },
                    "nav.highlight.textColorSettings": function(t) {
                        return t || "#ffffff"
                    },
                    "nav.highlight.blockBackgroundColorSettings": function(t) {
                        return t && new r(t).tint(80) || "#ffffff"
                    },
                    "nav.border.borderColorSettings": function() {
                        return "#ffffff"
                    },
                    "nav.highlightColorSettings": function(t) {
                        return t || "#57bcdb"
                    },
                    "nav.itemColorSettings": function(t, e, n) {
                        var o = null == n ? void 0 : n.get("s5Theme.nav.backgroundColor1"),
                            a = "#323232";
                        if (o) {
                            var l = new r(o);
                            a = i().getEnableNewLumaVersion() ? l.isLightColor() ? "#323232" : "#ffffff" : l.luma() > .7 ? "#323232" : "#ffffff"
                        }
                        return a
                    }
                }
        },
        112314: function(t, e, n) {
            n.r(e), n.d(e, {
                deleteObjectNullValue: function() {
                    return l
                },
                datePickerLang: function() {
                    return u
                },
                chunkArray: function() {
                    return c
                }
            });
            var r = n(703649),
                o = n.n(r),
                i = n(496486),
                a = n(183123),
                l = function(t) {
                    return i.reduce(t, (function(t, e, n) {
                        return e && (t[n] = e), t
                    }), {})
                },
                u = function() {
                    switch (a.getLocale()) {
                        case "en":
                            return "en_US";
                        case "fr":
                            return "fr_FR";
                        case "es":
                            return "es_ES";
                        case "pt-BR":
                            return "pt_BR";
                        case "de":
                            return "de_DE";
                        case "nl":
                            return "nl_NL";
                        case "sv":
                            return "sv_SE";
                        case "it":
                            return "it_IT";
                        case "no":
                            return "no_NO";
                        case "ro":
                            return "ro_RO";
                        case "cs":
                            return "cs_CS";
                        case "ar":
                            return "ar_AR";
                        case "ja":
                            return "ja_JP";
                        case "zh-CN":
                            return "zh_CN";
                        case "zh-TW":
                            return "zh_TW";
                        default:
                            return "en_US"
                    }
                },
                c = function(t, e) {
                    for (var n = [], r = 0; r < t.length; r += e) {
                        var i = o()(t).call(t, r, r + e);
                        n.push(i)
                    }
                    return n
                }
        },
        884920: function(t, e, n) {
            n.r(e), n.d(e, {
                wrapComponentWithReduxStore: function() {
                    return _
                },
                wrapReducerWithBinding: function() {
                    return d
                },
                getReduxComponentProps: function() {
                    return v
                },
                setGlobalStore: function() {
                    return p
                },
                getGlobalStore: function() {
                    return b
                }
            });
            var r, o = n(501068),
                i = n.n(o),
                a = n(863056),
                l = n(468420),
                u = n(327344),
                c = n(484441),
                s = n(103020),
                g = n(803362),
                f = n(366757),
                h = n(50533),
                m = n(124218);

            function _(t, e) {
                var n, r = function(r) {
                    (0, c.Z)(_, r);
                    var o, f, m = (o = _, f = function() {
                        if ("undefined" == typeof Reflect || !i()) return !1;
                        if (i().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = (0, g.Z)(o);
                        if (f) {
                            var n = (0, g.Z)(this).constructor;
                            t = i()(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return (0, s.Z)(this, t)
                    });

                    function _() {
                        return (0, l.Z)(this, _), m.apply(this, arguments)
                    }
                    return (0, u.Z)(_, [{
                        key: "render",
                        value: function() {
                            return n || (n = (0, a.Z)(h.Provider, {
                                store: e
                            }, void 0, (0, a.Z)(t, {})))
                        }
                    }]), _
                }(f.Component);
                return r
            }

            function d(t, e) {
                var n = e.get();
                return function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                        o = arguments.length > 1 ? arguments[1] : void 0,
                        i = t(r, o);
                    return e.set("", i), i
                }
            }

            function v(t) {
                var e = t.get("type");
                return {
                    path: t._path,
                    dataProps: m[e] ? m[e](t.get()) : t.get()
                }
            }

            function p(t) {
                r = t
            }

            function b() {
                return r
            }
        },
        117847: function(t, e, n) {
            n.d(e, {
                U: function() {
                    return i
                },
                Y: function() {
                    return a
                }
            });
            var r = "/images/common",
                o = "/images/ecommerce",
                i = {
                    PBS_LOGO: "/images/pbs/logo-footer-pbs.svg",
                    WARNING_MESSAGE_ICON: "".concat(r, "/warning-message-icon.svg"),
                    TRANSPARENT_ICON: "/images/editor2/nav/transparent.svg",
                    BASKETBALL: "/images/editor2/nav/basketball.svg",
                    SERVICE_ICON: "/images/icons/dify-support-widget-customer-service.svg",
                    MOBILE_ICON_GRAY: "/images/side_menu/mobile-gray.svg",
                    MOBILE_ICON_WHITE: "/images/side_menu/mobile-white.svg",
                    PC_ICON_GRAY: "/images/side_menu/pc-gray.svg",
                    PC_ICON_WHITE: "/images/side_menu/pc-white.svg",
                    ROBOT_WHITE_ICON: "/images/navigation/white-robot.png",
                    ROBOT_DARK_ICON_NORMAL: "/images/navigation/dark-robot-normal.png",
                    DEFAULT_LOGO_BG: "/images/default-logo-bg.png",
                    LOADING_ICON: "/images/blog/loading.gif",
                    ROBOT_WHITE_ICON_NORMAL: "/images/navigation/white-robot-normal.png",
                    ROBOT_PURPLE_ICON: "/images/navigation/ai-purple-icon.png",
                    ROBOT_GRAY_ICON_NORMAL: "/images/navigation/gray-robot-normal.png",
                    ROBOT_WITH_PENCIL: "/images/ai-robot/with-pencil.svg",
                    ROBOT_WHITE_WITH_PENCIL: "/images/ai-robot/white-with-pencil.svg"
                },
                a = {
                    APPLE_PAY: "".concat(o, "/apple-pay.svg"),
                    GOOGLE_PAY: "".concat(o, "/google-pay.svg"),
                    STRIPE_PAY: "".concat(o, "/stripe-logo.png"),
                    KLARNA_PAY: "".concat(o, "/payment-klarna.svg"),
                    AFTER_APY: "".concat(o, "/payment-after-pay.svg"),
                    CLEAR_PAY: "".concat(o, "/payment-clear-pay.svg"),
                    GRAY_UNION_PAY: "".concat(o, "/gray-union-pay.png"),
                    SQUARE_PAYMENT: "".concat(o, "/payment-square.svg"),
                    KLARNA_PAY_ICON: "".concat(o, "/klarna-pay-icon.svg"),
                    AFTER_APY_ICON: "".concat(o, "/after-pay-icon.svg"),
                    CLEAR_PAY_ICON: "".concat(o, "/clear-pay-icon.svg"),
                    KLARNA_PAY_GRAY_ICON: "".concat(o, "/klarna-pay-gray-icon.svg"),
                    AFTER_APY_GRAY_ICON: "".concat(o, "/after-pay-gray-icon.svg"),
                    CLEAR_PAY_GRAY_ICON: "".concat(o, "/clear-pay-gray-icon.svg"),
                    ALI_PAY_COLOR: "".concat(o, "/ali_wechat_pay/icon-alipay-colorful.png"),
                    WE_CHAT_PAY_COLOR: "".concat(o, "/ali_wechat_pay/icon-wechatpay-colorful.png"),
                    ALI_PAY: "".concat(o, "/ali_wechat_pay/icon-alipay.png"),
                    WE_CHAT_PAY: "".concat(o, "/ali_wechat_pay/icon-wechatpay.png"),
                    PRODUCT_DETAIL_REVIEWS: "".concat(r, "/product-detail-reviews.png"),
                    PRODUCT_REVIEW_LIST: "".concat(r, "/product-review-list.png"),
                    SXL_PRODUCT_REVIEW_LIST: "".concat(r, "/sxl-product-review-list.png"),
                    PRODUCT_REQUEST_REVIEW: "".concat(r, "/product-request-review.png"),
                    SXL_PRODUCT_REQUEST_REVIEW: "".concat(r, "/sxl-product-request-review.png"),
                    PRODUCT_REVIEW_EMAIL_SUBMIT: "".concat(r, "/product-review-email-submit.png"),
                    SXL_PRODUCT_REVIEW_EMAIL_SUBMIT: "".concat(r, "/sxl-product-review-email-submit.png"),
                    PRODUCT_REVIEW_EMAIL_REQUEST: "".concat(r, "/product-review-email-request.png"),
                    SXL_PRODUCT_REVIEW_EMAIL_REQUEST: "".concat(r, "/sxl-product-review-email-request.png"),
                    TRANSPARENT_BACKGROUND: "/images/editor2/nav/transparent-bg.png",
                    PRICE_TAG: "/images/editor2/price-tag-yellow.svg",
                    BOOKING_CALENDAR: "https://static-assets.strikinglycdn.com/images/booking-calendar.svg",
                    WECHAT_SHOWCASE_PORTFOLIO: "/images/wechat/mp-editor/showcase-portfolio.png"
                }
        },
        267385: function(t, e, n) {
            n.r(e), n.d(e, {
                getBrowserLocale: function() {
                    return k
                },
                getCookieConfig: function() {
                    return I
                },
                compatibleEUCookies: function() {
                    return O
                },
                monitorFPS: function() {
                    return A
                },
                getCookieByName: function() {
                    return R
                },
                setCookieItem: function() {
                    return w
                }
            });
            var r = n(859056),
                o = (n(974916), n(323123), n(209653), n(569600), n(241539), n(678580)),
                i = n.n(o),
                a = n(51942),
                l = n.n(a),
                u = n(432366),
                c = n.n(u),
                s = n(25843),
                g = n.n(s),
                f = n(703649),
                h = n.n(f),
                m = n(666419),
                _ = n.n(m),
                d = n(465420),
                v = n.n(d),
                p = n(619996),
                b = n.n(p),
                C = n(841511),
                E = n.n(C),
                T = n(836808);

            function S(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var y = {
                    expires: 365,
                    path: "/"
                },
                k = function() {
                    return navigator && (navigator.language || navigator.languages && navigator.languages[0] || navigator.userLanguage)
                },
                I = function() {
                    var t, e = null === (t = document) || void 0 === t ? void 0 : t.domain,
                        n = {};
                    return null != e && i()(e).call(e, ".strikingly.com") ? n = {
                        domain: ".strikingly.com"
                    } : null != e && i()(e).call(e, ".sxl.cn") && (n = {
                        domain: ".sxl.cn"
                    }), l()({}, y, n)
                },
                O = function() {
                    var t, e = null === (t = document) || void 0 === t ? void 0 : t.domain;
                    if (null != e && i()(e).call(e, ".strikingly.com") || null != e && i()(e).call(e, ".sxl.cn")) {
                        var n = I(),
                            r = T.get("__strk_cookie_notification"),
                            o = T.get("__is_open_strk_analytics_cookie"),
                            a = T.get("__is_open_strk_necessary_cookie"),
                            l = T.get("__is_open_strk_preferences_cookie");
                        r && (T.remove("__strk_cookie_notification"), T.set("__strk_cookie_notification", r, n)), o && (T.remove("__is_open_strk_analytics_cookie"), T.set("__is_open_strk_analytics_cookie", o, n)), a && (T.remove("__is_open_strk_necessary_cookie"), T.set("__is_open_strk_necessary_cookie", a, n)), l && (T.remove("__is_open_strk_preferences_cookie"), T.set("__is_open_strk_preferences_cookie", l, n))
                    }
                },
                A = function(t, e) {
                    var n = [],
                        r = 0,
                        o = performance.now(),
                        i = o;
                    requestAnimationFrame((function a(l) {
                        if (r++, l - o >= 1e3 && (n.push(r), r = 0, o = l), l - i >= t || n.length >= e) {
                            var u = c()(n).call(n, (function(t, e) {
                                return t + e
                            }), 0) / n.length;
                            window.sessionStorage.setItem("__FPS", "".concat(u))
                        } else requestAnimationFrame(a)
                    }))
                },
                R = function(t) {
                    var e, n = function(t, e) {
                        var n = void 0 !== v() && b()(t) || t["@@iterator"];
                        if (!n) {
                            if (E()(t) || (n = function(t, e) {
                                    var n;
                                    if (t) {
                                        if ("string" == typeof t) return S(t, e);
                                        var r = h()(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? _()(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(t, e) : void 0
                                    }
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var r = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return r >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[r++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, a = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return a = t.done, t
                            },
                            e: function(t) {
                                l = !0, i = t
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (l) throw i
                                }
                            }
                        }
                    }(document.cookie.split(";"));
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var o = e.value,
                                i = g()(o).call(o).split("="),
                                a = (0, r.Z)(i, 2),
                                l = a[0],
                                u = a[1];
                            if (l === t) return decodeURIComponent(u)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return ""
                },
                w = function(t, e, n) {
                    if ("number" == typeof n.expires) {
                        var r = n.expires,
                            o = n.expires = new Date;
                        o.setTime(Number(o) + 864e5 * r)
                    }
                    return document.cookie = [encodeURIComponent(t), "=", encodeURIComponent(String(e)), n.expires ? "; expires=".concat(n.expires.toUTCString()) : "", n.path ? "; path=".concat(n.path) : "", n.domain ? "; domain=".concat(n.domain) : "", n.secure ? "; secure" : ""].join("")
                }
        },
        381947: function(t, e, n) {
            var r = n(663978),
                o = n(60530)(n(60530));
            r(e, "__esModule", {
                value: !0
            });
            var i, a, l = n(694473),
                u = (0, o.default)(l),
                c = n(143393),
                s = (0, o.default)(c),
                g = n(717187),
                f = n(14991),
                h = (0, o.default)(f),
                m = n(496486);
            i = (0, o.default)(m).default.assign({}, g.EventEmitter.prototype, {
                init: function(t) {
                    a = new h.default(t)
                },
                hydrate: function(t) {
                    a.binding.set(s.default.fromJS(t))
                },
                getBinding: function() {
                    return a && a.binding
                },
                getData: function(t) {
                    return this.getBinding().get(t)
                },
                getJsonData: function(t) {
                    return this.getData(t).toJS()
                },
                getAllFeatures: function() {
                    return this.getData("allFeatures")
                },
                getFeature: function(t) {
                    var e;
                    return (0, u.default)(e = this.getAllFeatures()).call(e, (function(e) {
                        return e.get("name") === t
                    }))
                },
                canUse: function(t) {
                    var e = !1,
                        n = this.getFeature(t);
                    return n && (e = n.get("canBeUsed")), e
                },
                canSee: function(t) {
                    var e = !0,
                        n = this.getFeature(t);
                    return n && (e = !n.get("hidden")), e
                }
            }), window.DEBUG = window.DEBUG || {}, window.DEBUG.FeatureStore = i, e.default = i, t.exports = e.default
        },
        926941: function(t, e, n) {
            var r = n(663978),
                o = n(60530)(n(60530));
            r(e, "__esModule", {
                value: !0
            });
            var i = n(359036),
                a = (0, o.default)(i),
                l = n(223765),
                u = (0, o.default)(l),
                c = n(726394),
                s = (0, o.default)(c),
                g = n(569198),
                f = (0, o.default)(g);
            n(241539), n(339714), n(974916), n(115306), n(209653);
            var h = n(854903),
                m = (0, o.default)(h),
                _ = n(977766),
                d = (0, o.default)(_),
                v = n(394198),
                p = (0, o.default)(v),
                b = n(703649),
                C = (0, o.default)(b),
                E = n(666419),
                T = (0, o.default)(E),
                S = n(169301),
                y = (0, o.default)(S),
                k = n(497093),
                I = (0, o.default)(k),
                O = n(2991),
                A = (0, o.default)(O),
                R = n(51942),
                w = (0, o.default)(R);

            function P(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                return Math.min(Math.max(t, e), n)
            }
            var L = function(t) {
                    var e, n, r = t.h,
                        o = t.s,
                        i = t.l;
                    i /= 100;
                    var a = o * Math.min(i, 1 - i) / 100,
                        l = function(t) {
                            var e, n = (t + r / 30) % 12,
                                o = i - a * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                            return (0, m.default)(e = Math.round(255 * o).toString(16)).call(e, 2, "0")
                        };
                    return (0, d.default)(e = (0, d.default)(n = "#".concat(l(0))).call(n, l(8))).call(e, l(4))
                },
                N = function() {
                    function t(e, n, r, o) {
                        if ((0, s.default)(this, t), e instanceof t) return e;
                        if ("string" == typeof e) {
                            var i = e.replace(/\s/g, ""),
                                a = null;
                            if ("transparent" === i) this.r = 0, this.g = 0, this.b = 0, this.a = 0;
                            else if (a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(i)) this.r = (0, p.default)(a[1] + a[1], 16), this.g = (0, p.default)(a[2] + a[2], 16), this.b = (0, p.default)(a[3] + a[3], 16);
                            else if (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i)) this.r = (0, p.default)(a[1], 16), this.g = (0, p.default)(a[2], 16), this.b = (0, p.default)(a[3], 16);
                            else if (a = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(i)) this.r = Number(a[1]), this.g = Number(a[2]), this.b = Number(a[3]), this.a = Number(a[4]);
                            else {
                                if (!(a = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(i))) throw new Error("Invalid color constructor from ".concat(e));
                                this.r = Number(a[1]), this.g = Number(a[2]), this.b = Number(a[3])
                            }
                        } else if ("object" === (0, u.default)(e) && "number" == typeof e.r) this.r = P(~~e.r), this.g = P(~~e.g), this.b = P(~~e.b), this.a = P(e.a, 0, 1);
                        else {
                            if ("number" != typeof e) throw new Error("Invalid color constructor from ".concat(e));
                            this.r = P(~~e), this.g = P(~~n), this.b = P(~~r), this.a = P(o, 0, 1)
                        }(void 0 === this.a || isNaN(this.a)) && (this.a = 1)
                    }
                    return (0, f.default)(t, [{
                        key: "fade",
                        value: function(e) {
                            return new t(this.r, this.g, this.b, e)
                        }
                    }, {
                        key: "mix",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
                                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                o = new t(e),
                                i = P(n, 0, 1);
                            return new t(this.r * (1 - i) + o.r * i, this.g * (1 - i) + o.g * i, this.b * (1 - i) + o.b * i, r ? this.a * (1 - i) + o.a * i : this.a)
                        }
                    }, {
                        key: "mult",
                        value: function(e) {
                            return new t(this.r * e, this.g * e, this.b * e, this.a)
                        }
                    }, {
                        key: "lighten",
                        value: function(t) {
                            return this.mix("#fff", t)
                        }
                    }, {
                        key: "toHex",
                        value: function() {
                            var t;
                            return "#".concat((0, C.default)(t = ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16)).call(t, 1))
                        }
                    }, {
                        key: "getRgbA",
                        value: function() {
                            return this.a
                        }
                    }, {
                        key: "setOpacity",
                        value: function(t) {
                            var e, n, r;
                            return (0, d.default)(e = (0, d.default)(n = (0, d.default)(r = "rgba(".concat(this.r, ", ")).call(r, this.g, ", ")).call(n, this.b, ", ")).call(e, t, ")")
                        }
                    }, {
                        key: "toRgba",
                        value: function() {
                            var t, e, n;
                            return 1 === this.a ? this.toHex() : (0, d.default)(t = (0, d.default)(e = (0, d.default)(n = "rgba(".concat(this.r, ",")).call(n, this.g, ",")).call(e, this.b, ",")).call(t, this.a, ")")
                        }
                    }, {
                        key: "toHsl",
                        value: function() {
                            var t, e, n = this.r,
                                r = this.g,
                                o = this.b;
                            n /= 255, r /= 255, o /= 255;
                            var i, a, l = Math.max(n, r, o),
                                u = Math.min(n, r, o),
                                c = (l + u) / 2;
                            if (l === u) i = 0, a = 0;
                            else {
                                var s = l - u;
                                switch (a = c > .5 ? s / (2 - l - u) : s / (l + u), l) {
                                    case n:
                                        i = (r - o) / s + (r < o ? 6 : 0);
                                        break;
                                    case r:
                                        i = (o - n) / s + 2;
                                        break;
                                    case o:
                                        i = (n - r) / s + 4;
                                        break;
                                    default:
                                        i = 0
                                }
                                i /= 6
                            }
                            return a = Math.round(100 * a), c = Math.round(100 * c), {
                                h: i = Math.round(360 * i),
                                s: a,
                                l: c,
                                color: (0, d.default)(t = (0, d.default)(e = "hsl(".concat(i, ", ")).call(e, a, "%, ")).call(t, c, "%)")
                            }
                        }
                    }, {
                        key: "lumaSimple",
                        value: function() {
                            return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
                        }
                    }, {
                        key: "luma",
                        value: function() {
                            var t = this.r / 255,
                                e = this.g / 255,
                                n = this.b / 255,
                                r = .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4));
                            return r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055
                        }
                    }, {
                        key: "lumaCorrection",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .7,
                                e = this.luma();
                            return t > 0 && e > t ? this.mult(1 - (e - t) / 2) : t < 0 && e < -t ? this.lighten((-t - e) / 2) : this
                        }
                    }, {
                        key: "showOnBg",
                        value: function(e) {
                            var n = new t(e);
                            return Math.abs(this.luma() - n.luma()) < .125 ? this.luma() > .9 ? this.mult(.75) : this.luma() > .6 ? this.luma() > n.luma() ? this.lighten(.5) : this.mult(.7) : this.luma() > n.luma() ? this.lighten(.3) : this.mult(.5) : this
                        }
                    }, {
                        key: "showOnBgVersion2",
                        value: function(e) {
                            var n = new t(e),
                                r = this.luma(),
                                o = n.luma(),
                                i = Math.abs(r - o),
                                a = .15 + .05 * Math.pow(1 - o, 2);
                            if (i >= a) return this;
                            var l = a + .25 * i;
                            return function(t, e) {
                                for (var n, r = e < t.luma() ? "mult" : "lighten", o = 0, i = 1, a = 0; a < 10 && !(i - o < .01); a++) n = (o + i) / 2, t[r](n).luma() < e ? o = n : i = n;
                                return t[r]((o + i) / 2)
                            }(this, o > 1 - l ? o - (r > o ? a : l) : o < l ? o + (r < o ? a : l) : r > o || r === o && r < .7 ? o + l : o - l)
                        }
                    }, {
                        key: "showOnBgVersion3",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.5,
                                r = new t(e),
                                o = this.luma(),
                                i = r.luma(),
                                a = Math.abs(o - i),
                                l = n * (.15 + .05 * Math.pow(1 - i, 2) + .05 * Math.pow(i, 4));
                            if (a >= l) return this;
                            var u = function(t, e) {
                                    if (e <= 0) return t.mult(0);
                                    if (e >= 1) return t.lighten(1);
                                    for (var n, r = e < t.luma() ? "mult" : "lighten", o = 0, i = 1, a = 0; a < 10 && !(i - o < .01); a++) n = (o + i) / 2, t[r](n).luma() < e ? o = n : i = n;
                                    return t[r]((o + i) / 2)
                                },
                                c = l + .25 * a;
                            return u(this, i > 1 - c && i >= .5 ? i - (o > i ? l : c) : i < c && i <= .5 ? i + (o < i ? l : c) : o > i || o === i && o < .7 ? i + c : i - c)
                        }
                    }, {
                        key: "validate",
                        value: function(e, n, r, o) {
                            try {
                                return new t(e, n, r, o)
                            } catch (t) {
                                return null
                            }
                        }
                    }, {
                        key: "getTextColor",
                        value: function(e, n) {
                            return this.luma() > t.maxDarkLuma ? n || "#000000" : e || "#ffffff"
                        }
                    }, {
                        key: "getTextClass",
                        value: function() {
                            return this.luma() > t.maxDarkLuma ? "dark" : "light"
                        }
                    }, {
                        key: "mix2",
                        value: function(e, n) {
                            var r = new t(e),
                                o = this.a - r.a,
                                i = 2 * n - 1,
                                a = 1 - (i = ((i * o == -1 ? i : (i + o) / (1 + i * o)) + 1) / 2);
                            return new t(Math.round(i * this.r + a * r.r), Math.round(i * this.g + a * r.g), Math.round(i * this.b + a * r.b), this.a * n + r.a * (1 - n))
                        }
                    }, {
                        key: "tint",
                        value: function(t) {
                            var e, n, r, o, i, a = t / 100,
                                l = Math.round(this.r + (255 - this.r) * a),
                                u = Math.round(this.g + (255 - this.g) * a),
                                c = Math.round(this.b + (255 - this.b) * a);
                            return (0, d.default)(e = (0, d.default)(n = "#".concat((0, m.default)(r = l.toString(16)).call(r, 2, "0"))).call(n, (0, m.default)(o = u.toString(16)).call(o, 2, "0"))).call(e, (0, m.default)(i = c.toString(16)).call(i, 2, "0"))
                        }
                    }, {
                        key: "shade",
                        value: function(t) {
                            return this.tint(-t)
                        }
                    }, {
                        key: "isDarkColorDiscard",
                        value: function() {
                            return (.2126 * this.r + .7152 * this.g + .0722 * this.b) / 255 < .66
                        }
                    }, {
                        key: "isDarkColor",
                        value: function() {
                            return this.luma() <= t.maxDarkLuma
                        }
                    }, {
                        key: "isLightColor",
                        value: function() {
                            return this.luma() > t.maxDarkLuma
                        }
                    }, {
                        key: "computedColorByBgColor",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (this.a < 1) {
                                var n, r, o = e || "#ffffff",
                                    i = new t(o),
                                    a = (1 - this.a) * i.r + this.a * this.r,
                                    l = (1 - this.a) * i.g + this.a * this.g,
                                    u = (1 - this.a) * i.b + this.a * this.b,
                                    c = (0, d.default)(n = (0, d.default)(r = "rgb(".concat(Math.round(a), ", ")).call(r, Math.round(l), ", ")).call(n, Math.round(u), ")");
                                return c
                            }
                            return this.toHex()
                        }
                    }]), t
                }();
            N.getDiffLightnessColors = function(t, e) {
                var n, r, o = t.h,
                    i = t.s,
                    l = t.l,
                    u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    c = 100 / u,
                    s = 95,
                    g = 5,
                    f = Math.ceil(l / c) - 1,
                    h = (0, T.default)((0, a.default)((0, y.default)(n = new Array(u)).call(n)), (function(t) {
                        var e = (t - f) * c + l;
                        return 0 === t && (e = Math.max(e, g)), t === u - 1 && (e = Math.min(e, s)), e
                    }));
                return (0, I.default)(r = (0, A.default)(h).call(h, (function(t) {
                    return L({
                        h: o,
                        s: i,
                        l: t
                    })
                }))).call(r)
            }, N.isSameByDistance = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = new N(t),
                    o = new N(e);
                if (!r || !o) return !1;
                var i = Math.pow(r.r - o.r, 2) + Math.pow(r.g - o.g, 2) + Math.pow(r.b - o.b, 2);
                return !(i > n)
            }, N.getDiffBrightnessColor = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -5,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = new N(t),
                    o = r.toHsl(),
                    i = o.h,
                    a = o.s,
                    l = o.l,
                    u = {
                        h: i,
                        s: a,
                        l: l + e
                    },
                    c = (0, w.default)({}, u, n);
                return L(c)
            }, N.isSimilarColorByHsl = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [30, 20, 20];
                if (!t || !e) return !1;
                var r = new N(t),
                    o = new N(e),
                    i = r.toHsl(),
                    a = i.h,
                    l = i.s,
                    u = i.l,
                    c = o.toHsl(),
                    s = c.h,
                    g = c.s,
                    f = c.l,
                    h = Math.min(Math.abs(a - s), 360 - Math.abs(a - s)),
                    m = Math.abs(l - g),
                    _ = Math.abs(u - f);
                return h < n[0] && (u >= 99 && f >= 99 || m < n[1] && _ < n[2])
            }, N.maxDarkLuma = .65, e.default = N, t.exports = e.default
        }
    }
]);