/*! For license information please see 6587.9174b0c2638c9c49b685-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6587], {
        971638: function(e, t, a) {
            a.r(t), a.d(t, {
                imageDataForSaving: function() {
                    return i
                },
                dataForEmptyBackground: function() {
                    return r
                }
            });
            var n = a(51942),
                o = a.n(n),
                l = a(496486),
                i = function(e) {
                    var t = {},
                        a = e.getMeta(),
                        n = a.backgroundSizing,
                        i = a.backgroundClassName;
                    if (n || i) {
                        if (i) switch (l.trim(i)) {
                            case "strikingly-light-text strikingly-text-overlay":
                            case "strikingly-text-overlay strikingly-light-text":
                            case "overlay":
                                t.textColor = "overlay";
                                break;
                            case "strikingly-light-text":
                            case "light":
                                t.textColor = "light";
                                break;
                            case "strikingly-dark-text":
                            case "dark":
                                t.textColor = "dark";
                                break;
                            default:
                                t.textColor = "light"
                        }
                        t.sizing = "cover", -1 !== l.indexOf(["cover", "contain", "tile", "center"], n) && (t.sizing = n)
                    }
                    return o()({}, e.dataToSave("background"), {
                        videoHtml: ""
                    }, t)
                },
                r = function(e) {
                    return {
                        w: null,
                        h: null,
                        storage: null,
                        storageKey: null,
                        storagePrefix: null,
                        format: null,
                        url: "",
                        textColor: e || "light",
                        videoUrl: "",
                        videoHtml: "",
                        focus: null
                    }
                }
        },
        937195: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a(501068),
                o = a.n(n),
                l = a(863056),
                i = a(468420),
                r = a(327344),
                u = a(484441),
                s = a(103020),
                c = a(803362),
                d = a(2991),
                f = a.n(d),
                g = a(977766),
                p = a.n(g);
            var h = function(e) {
                (0, u.Z)(d, e);
                var t, a, n = (t = d, a = function() {
                    if ("undefined" == typeof Reflect || !o()) return !1;
                    if (o().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, c.Z)(t);
                    if (a) {
                        var l = (0, c.Z)(this).constructor;
                        e = o()(n, arguments, l)
                    } else e = n.apply(this, arguments);
                    return (0, s.Z)(this, e)
                });

                function d() {
                    return (0, i.Z)(this, d), n.apply(this, arguments)
                }
                return (0, r.Z)(d, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.tags,
                            a = e.onClickTag;
                        return (0, l.Z)("span", {
                            className: "s-blog-tags"
                        }, void 0, f()(t).call(t, (function(e, n) {
                            var o;
                            return (0, l.Z)("span", {
                                onClick: function() {
                                    a(e)
                                },
                                className: "s-blog-tag ".concat(n === t.length - 1 ? "last" : "")
                            }, n, p()(o = "".concat(e)).call(o, n === t.length - 1 ? "" : ","))
                        })))
                    }
                }]), d
            }(a(366757).Component)
        },
        316913: function(e, t, a) {
            function n(e, t) {
                return t
            }
            a.r(t), a.d(t, {
                translateBySiteLang: function() {
                    return n
                }
            }), a(974916), a(115306), a(981643), a(234584)
        },
        574689: function(e, t, a) {
            var n = a(863056),
                o = a(859056),
                l = a(493476),
                i = a.n(l),
                r = (a(66992), a(241539), a(788674), a(978783), a(333948), a(366757)),
                u = r.useState,
                s = r.useEffect;
            t.Z = 2266 != a.j ? function(e) {
                var t = e.squarePaymentParams,
                    l = u(null),
                    r = (0, o.Z)(l, 2),
                    c = r[0],
                    d = r[1];
                return s((function() {
                    i().all([Promise.all([a.e(8462), a.e(5386), a.e(8186), a.e(6764), a.e(8440), a.e(2786), a.e(3694), a.e(4802), a.e(1146), a.e(6105)]).then(a.bind(a, 206105)), Promise.all([a.e(8462), a.e(5386), a.e(8186), a.e(6764), a.e(8440), a.e(2786), a.e(3694), a.e(4802), a.e(1146)]).then(a.bind(a, 103450))]).then((function(e) {
                        var a = (0, o.Z)(e, 2),
                            l = a[0],
                            i = a[1].default,
                            r = l.default;
                        d((0, n.Z)(i, {}, void 0, (0, n.Z)(r, {
                            squarePaymentParams: t
                        })))
                    }))
                }), [t]), c
            } : null
        },
        602371: function(e, t, a) {
            var n = a(25089);
            t.Z = 2266 != a.j ? n.Z : null
        },
        661192: function(e, t, a) {
            a.r(t), a.d(t, {
                navigateToLinkUrl: function() {
                    return n.Pz
                }
            });
            var n = a(216033)
        },
        456448: function(e, t, a) {
            a.d(t, {
                R: function() {
                    return h
                },
                s: function() {
                    return v
                }
            });
            var n = a(333938),
                o = a(563109),
                l = a.n(o),
                i = a(493476),
                r = a.n(i),
                u = a(359340),
                s = a.n(u),
                c = a(977766),
                d = a.n(c),
                f = a(359011),
                g = a(34822),
                p = a(368768);

            function h(e) {
                return new(r())((function(t, a) {
                    (0, f.fetchJSON)("/r/v1/sites/".concat(g.OE, "/membership/subscriptions"), {
                        method: "POST",
                        body: s()(e)
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        var n, o = d()(n = "/r/v1/tasks/".concat(e.data.type, "/")).call(n, e.data.id, ".jsm?v=2");
                        p.poller(o, (function(e) {
                            var a = e.data.id;
                            t(a)
                        }), (function(e) {
                            a(e)
                        }))
                    })).catch(a)
                }))
            }
            var m, v = 2266 != a.j ? (m = (0, n.Z)(l().mark((function e(t) {
                var a, n, o;
                return l().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, f.fetchJSON)(d()(a = "/r/v1/sites/".concat(g.OE, "/membership/accounts/")).call(a, t, "/events"), {
                                method: "GET"
                            });
                        case 2:
                            return n = e.sent, e.next = 5, n.json();
                        case 5:
                            return o = e.sent, e.abrupt("return", null == o ? void 0 : o.data);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), function(e) {
                return m.apply(this, arguments)
            }) : null
        },
        881832: function(e, t, a) {
            a.d(t, {
                A4: function() {
                    return l
                },
                dF: function() {
                    return i
                },
                bP: function() {
                    return r
                },
                uh: function() {
                    return n
                },
                TW: function() {
                    return u
                }
            });
            var n, o = a(348703),
                l = {
                    LOGIN: "LOGIN",
                    REGISTER: "REGISTER",
                    RESET_PASSWORD: "RESET_PASSWORD",
                    ACCOUNT_INFO: "ACCOUNT_INFO",
                    UPDATE_INFO: "UPDATE_INFO",
                    SUBSCRIPTIONS: "SUBSCRIPTIONS",
                    PAYMENT: "PAYMENT",
                    PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
                    PAYMENT_FAILURE: "PAYMENT_FAILURE"
                },
                i = {
                    ORDER_LIST: "orderList",
                    ORDER_DETAIL: "orderDetail"
                },
                r = {
                    BOOKING_EVENT_LIST: "bookingEventList",
                    BOOKING_DETAIL: "bookingDetail"
                };
            ! function(e) {
                e.MEMBER_DIALOG = "memberDialog", e.ORDER_HISTORY = "memberOrderHistory", e.BOOKING_EVENT_LIST = "memberBookingEventList"
            }(n || (n = {}));
            var u = (0, o.Q)({
                initialState: {
                    memberDialog: {
                        isOpen: !1,
                        options: {
                            currentView: l.LOGIN
                        }
                    },
                    memberOrderHistory: {
                        isOpen: !1,
                        options: {
                            currentView: i.ORDER_LIST
                        }
                    },
                    memberBookingEventList: {
                        isOpen: !1,
                        options: {
                            currentView: r.BOOKING_EVENT_LIST
                        }
                    }
                }
            }).reduxToolkit
        },
        34822: function(e, t, a) {
            a.d(t, {
                ey: function() {
                    return o
                },
                cV: function() {
                    return l.Z
                },
                HL: function() {
                    return i.default
                },
                gt: function() {
                    return r
                },
                _r: function() {
                    return u
                },
                $B: function() {
                    return s
                },
                UT: function() {
                    return c
                },
                qj: function() {
                    return d
                },
                ls: function() {
                    return f
                },
                WW: function() {
                    return g.Z
                },
                jP: function() {
                    return p.Z
                },
                VT: function() {
                    return h.Z
                },
                $W: function() {
                    return m
                },
                Gg: function() {
                    return v
                },
                OE: function() {
                    return y
                },
                zw: function() {
                    return b
                }
            });
            var n = a(684961),
                o = a(183123),
                l = a(878210),
                i = a(189508),
                r = a(818166),
                u = a(234584),
                s = a(607947),
                c = a(99729),
                d = a(71302),
                f = a(164760),
                g = (a(240975), a(574689)),
                p = a(661390),
                h = a(602371),
                m = Boolean(n("standalone")),
                v = n("stores.pageMeta.forcedLocale") || n("blogPostData.pageMeta.forcedLocale"),
                y = n("stores.pageMeta.id") || n("blogPostData.pageMeta.id"),
                b = n("stores.pageMeta.theme.name") || n("blogPostData.pageMeta.theme.name")
        },
        879042: function(e, t, a) {
            a.r(t), a.d(t, {
                sxlValidateSocialMedia: function() {
                    return i
                },
                defaultSxlSocialMediaList: function() {
                    return r
                },
                sxlSocialMediaMap: function() {
                    return u
                },
                strikinglySocialMediaMap: function() {
                    return s
                },
                defaultSocialMediaList: function() {
                    return c
                },
                SOCIAL_MEDIA_CONFIG: function() {
                    return d
                },
                STRIKINGLY_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return f
                },
                SXL_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return g
                },
                INTI_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return p
                },
                INTI_SOCIAL_MEDIA_CONTACT_LIST: function() {
                    return h
                },
                SOCIAL_MEDIA_CONTACT_LIST_TYPE: function() {
                    return m
                }
            });
            var n = a(726469),
                o = a(828125),
                l = a(193917),
                i = {
                    LinkedIn: !0,
                    SinaWeibo: !0,
                    WeChat: !0,
                    DouYin: !0,
                    YouKu: !0,
                    Bilibili: !0,
                    TencentVideo: !0,
                    TieBa: !0
                },
                r = [{
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "LinkedIn",
                    className: "fab fa-linkedin-in"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "SinaWeibo",
                    className: "fab fa-weibo"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "WeChat",
                    className: "fab fa-weixin"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "DouYin",
                    className: "fab fa-tiktok"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "YouKu",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "Bilibili",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "TencentVideo",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "TieBa",
                    className: "fas fa-link"
                }],
                u = {
                    LinkedIn: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|LinkedIn URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://linkedin.com/in/sxlcn",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?linkedin\.com/,
                        iconType: n.BC.FONT,
                        className: "fab fa-linkedin-in"
                    },
                    SinaWeibo: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Weibo",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://weibo.com/sxlcn",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?weibo\.com/,
                        iconType: n.BC.FONT,
                        className: "fab fa-weibo"
                    },
                    WeChat: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|WeChat QR code",
                        shareType: n.qy.QR_CODE,
                        iconType: n.BC.FONT,
                        className: "fab fa-weixin"
                    },
                    DouYin: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Douyin QR code",
                        shareType: n.qy.QR_CODE,
                        iconType: n.BC.FONT,
                        className: "fab fa-tiktok"
                    },
                    YouKu: {
                        envType: n.Mb.sxl,
                        shareType: n.qy.URL,
                        placeholderUrl: "https://v.youku.com/12345678",
                        validateUrl: /^(https?:\/\/)?v\.youku\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.youKu,
                        viewBox: "0 0 640 640",
                        text: "SocialMedia|Youku URL"
                    },
                    Bilibili: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Bilibili URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://www.bilibili.com/video/12345678",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?bilibili\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.bilibili,
                        viewBox: "0 0 1024 1024"
                    },
                    TencentVideo: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Tencent Video URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://v.qq.com/12345678",
                        validateUrl: /^(https?:\/\/)?v\.qq\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.tencentVideo,
                        viewBox: "0 0 254.8 235.4"
                    },
                    TieBa: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Tieba URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://tieba.baidu.com/12345678",
                        validateUrl: /^(https?:\/\/)?tieba\.baidu\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.tieba,
                        viewBox: "0 0 256 256"
                    }
                },
                s = {
                    Facebook: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-facebook-f",
                        placeholderUrl: "https://facebook.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    Twitter: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-twitter",
                        placeholderUrl: "https://x.com/strikingly",
                        iconType: n.BC.SVG,
                        svgCode: l.twitterX,
                        viewBox: "0 0 512 512"
                    },
                    LinkedIn: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-linkedin-in",
                        placeholderUrl: "https://linkedin.com/in/strikingly",
                        iconType: n.BC.FONT
                    },
                    Instagram: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-instagram",
                        placeholderUrl: "https://instagram.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    YouTube: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-youtube",
                        placeholderUrl: "https://youtube.com/user/strikingly",
                        iconType: n.BC.FONT
                    },
                    Pinterest: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-pinterest",
                        placeholderUrl: "https://pinterest.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    Snapchat: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-snapchat",
                        placeholderUrl: "https://www.snapchat.com/add/strikingly-example",
                        iconType: n.BC.FONT
                    },
                    TikTok: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-tiktok",
                        placeholderUrl: "https://",
                        iconType: n.BC.FONT
                    },
                    Messenger: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-facebook-messenger",
                        placeholderUrl: "https://www.messenger.com/t/strikingly",
                        iconType: n.BC.FONT
                    }
                },
                c = [],
                d = {
                    facebook: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?facebook\.com/, /^(https?:\/\/)?(\w+\.)?fb\.me/],
                        className: "fab fa-facebook-f"
                    },
                    twitter: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?twitter\.com/, /^(https?:\/\/)?(\w+\.)?t\.co/, /^(https?:\/\/)?(\w+\.)?x\.com/],
                        className: "fab fa-twitter",
                        type: "Twitter"
                    },
                    linkedin: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?linkedin\.com/],
                        className: "fab fa-linkedin-in"
                    },
                    instagram: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?instagram\.com/],
                        className: "fab fa-instagram"
                    },
                    youtube: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?youtube\.com/, /^(https?:\/\/)?(\w+\.)?youtu\.be/],
                        className: "fab fa-youtube"
                    },
                    pinterest: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?pinterest\.com/, /^(https?:\/\/)?(\w+\.)?pin\.it/],
                        className: "fab fa-pinterest"
                    },
                    snapchat: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?snapchat\.com/],
                        className: "fab fa-snapchat"
                    },
                    tiktok: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?tiktok\.com/],
                        className: "fab fa-tiktok"
                    },
                    messenger: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?messenger\.com/, /^(https?:\/\/)?(\w+\.)?m\.me/],
                        className: "fab fa-facebook-messenger"
                    },
                    spotify: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?spotify\.com/],
                        className: "fab fa-spotify"
                    },
                    telegram: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?telegram\.me/, /^(https?:\/\/)?(\w+\.)?t\.me/, /^(https?:\/\/)?(\w+\.)?telegram\.org/],
                        className: "fab fa-telegram"
                    },
                    discord: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?discord\.com/, /^(https?:\/\/)?(\w+\.)?discord\.gg/, /^(https?:\/\/)?(\w+\.)?discordapp\.com/],
                        className: "fab fa-discord"
                    },
                    medium: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?medium\.com/],
                        className: "fab fa-medium"
                    },
                    twitch: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?twitch\.tv/],
                        className: "fab fa-twitch"
                    },
                    flickr: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?flickr\.com/, /^(https?:\/\/)?(\w+\.)?flicker\.com/, /^(https?:\/\/)?(\w+\.)?flic\.kr/],
                        className: "fab fa-flickr"
                    },
                    tumblr: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?tumblr\.com/],
                        className: "fab fa-tumblr"
                    },
                    vimeo: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?vimeo\.com/],
                        className: "fab fa-vimeo"
                    },
                    dribbble: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?dribbble\.com/],
                        className: "fab fa-dribbble"
                    }
                },
                f = [{
                    type: "Facebook",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "Twitter",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "LinkedIn",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "Pinterest",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }],
                g = [{
                    type: "LinkedIn",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "SinaWeibo",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }],
                p = f,
                h = [{
                    className: "fas fa-phone-alt",
                    type: "SocialMediaPhone",
                    id: (0, o.Bu)(),
                    defaultValue: ""
                }, {
                    className: "fas fa-envelope",
                    type: "SocialMediaEmail",
                    id: (0, o.Bu)(),
                    defaultValue: ""
                }],
                m = {
                    PHONE: "SocialMediaPhone",
                    EMAIL: "SocialMediaEmail"
                }
        },
        71302: function(e, t, a) {
            a.d(t, {
                zk: function() {
                    return l.Z
                },
                TW: function() {
                    return n.TW
                },
                Yk: function() {
                    return o
                }
            });
            var n = a(152223),
                o = a(756759),
                l = a(200590)
        },
        99729: function(e, t, a) {
            a.d(t, {
                zk: function() {
                    return i
                },
                TW: function() {
                    return o.TW
                }
            });
            var n = a(353149),
                o = a(661017),
                l = a(873244),
                i = (0, n.Y)(l.Z)
        },
        164760: function(e, t, a) {
            a.d(t, {
                TW: function() {
                    return n.TW
                },
                zk: function() {
                    return r
                },
                Yk: function() {
                    return l
                }
            });
            var n = a(293879),
                o = a(772117),
                l = a(795663),
                i = a(197362),
                r = (0, o.Y)(i.Z)
        },
        189745: function(e, t, a) {
            a.r(t), a.d(t, {
                getIsAISiteBuilderPreview: function() {
                    return n
                },
                trackMixpanelEventViaParent: function() {
                    return o
                }
            });
            var n = function() {
                    return !1
                },
                o = function(e, t) {}
        },
        792681: function(e, t, a) {
            a.r(t), a.d(t, {
                getAbTestRandomResult: function() {
                    return c
                },
                getAbTestRolloutWithCookie: function() {
                    return d
                },
                matchPbsI18nLocaleWithBrowserLocale: function() {
                    return f
                },
                getPbsI18nAbTest: function() {
                    return g
                }
            });
            var n = a(981643),
                o = a.n(n),
                l = (a(209653), a(496486)),
                i = a(836808),
                r = a(183123),
                u = a(267385),
                s = ["en", "zh-TW", "ja", "fr"],
                c = function(e, t) {
                    var a = 0,
                        n = null,
                        o = l.reduce(t, (function(e, t) {
                            return e + t
                        }), 0),
                        i = Math.random() * o;
                    return l.each(t, (function(t, o) {
                        if (a += Number(t), i <= a) return n = e[o], !1
                    })), n
                },
                d = function(e, t, a, n) {
                    var o = i.get(e);
                    if (o) return o;
                    var l = c(a, n) || "";
                    return i.set(e, l, {
                        expires: t
                    }), l
                },
                f = function() {
                    var e = (0, u.getBrowserLocale)(),
                        t = i.get("_pbs_i18n_ab_test");
                    return "b" === t && o()(s).call(s, e) > -1 || "a" === t && "en" === e
                },
                g = function() {
                    return r.getPbsI18n() ? d("_pbs_i18n_ab_test", 30, ["a", "b"], [.5, .5]) : "a"
                }
        },
        169042: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l, i, r = a(487672),
                u = (0, o.default)(r),
                s = a(778914),
                c = (0, o.default)(s),
                d = a(359340),
                f = (0, o.default)(d),
                g = a(933032),
                p = (0, o.default)(g),
                h = a(678580),
                m = (0, o.default)(h),
                v = a(386912),
                y = (0, o.default)(v),
                b = a(23436),
                T = (0, o.default)(b),
                C = a(298657),
                S = (0, o.default)(C),
                _ = a(141655),
                w = (0, o.default)(_),
                P = a(762903),
                N = (0, o.default)(P),
                E = [],
                k = (l = {}, (0, u.default)(l, S.default.DELETE_ITEM, "nativeDeleteButton"), (0, u.default)(l, S.default.GALLERY_ADD_IMAGE, "nativeAddImage"), (0, u.default)(l, "getAction", (function(e) {
                    if (k[e]) return k[e]
                })), l),
                I = [S.default.SCROLL_TO_SECTION, S.default.OPEN_SECTION_SELECTOR, S.default.CLOSE_SECTION_SELECTOR, S.default.TOGGLE_SECTION_SELECTOR, S.default.TOGGLE_SIDE_MENU, S.default.SWITCH_PAGE, S.default.PULL_DOWN_AUDIENCE_PAGE, S.default.CLOSE_AUDIENCE_DETAIL, S.default.OPEN_AUDIENCE_DETAIL],
                L = (0, u.default)({}, S.default.ADD_TO_ASSET_LIBRARY, (function(e) {
                    N.default.addImageAsset({
                        img: e.payload.image
                    })
                })),
                O = function e(t) {
                    var a = (0, f.default)(t);
                    a && (E.push(a), console.info("Params scheduled for sendMessageToNative:\n", function(e) {
                        try {
                            return (0, f.default)(JSON.parse(e), null, 2)
                        } catch (t) {
                            return e
                        }
                    }(a))), window.NativeBridge && window.NativeBridge.sendMessageToNative ? ((0, c.default)(E).call(E, (function(e) {
                        window.NativeBridge.sendMessageToNative(e)
                    })), E = []) : (0, p.default)(e, 1e3)
                },
                B = {
                    setTarget: function(e) {
                        i = e
                    },
                    _getTarget: function() {
                        return i
                    },
                    sendMessageToWeb: function(e) {
                        if (console.info("sendMessageToWeb was called with params: ", e), e.meta && e.meta.id) {
                            var t = e.type,
                                a = e.payload,
                                n = i.props.dataProps ? i.props.dataProps.type : i.dtProps.type;
                            if (t === S.default.NATIVE_UPDATE_DATA) n || console.error("Binding target has no type", i.props), i.nativeUpdateData(y.default.convertToSnake(n, a));
                            else {
                                var o = k.getAction(t);
                                o ? i[o](a) : console.error("".concat(t, " on target is not found or allowed"))
                            }
                            w.default.save(), BlogEditorActions.save()
                        } else L[e.type] ? L[e.type](e) : (T.default.dispatch(e), (0, m.default)(I).call(I, e.type) || w.default.save())
                    },
                    sendMessageToNative: function(e) {
                        try {
                            O(e)
                        } catch (e) {
                            console.error("NativeBridge Error:", e.message)
                        }
                    }
                };
            t.default = B, window.DEBUG = window.DEBUG || {}, window.DEBUG.NativeBridge = B, e.exports = t.default
        },
        469155: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i, r = a(933032),
                u = (0, l.default)(r),
                s = a(223336),
                c = (0, l.default)(s),
                d = a(345129),
                f = (0, l.default)(d),
                g = a(882962),
                p = (0, l.default)(g),
                h = a(818166),
                m = (0, l.default)(h),
                v = a(234584),
                y = (0, l.default)(v),
                b = a(266004),
                T = (0, l.default)(b),
                C = a(80827),
                S = (0, l.default)(C),
                _ = a(389087),
                w = (0, l.default)(_),
                P = a(183123),
                N = (0, l.default)(P),
                E = a(14137),
                k = (0, l.default)(E),
                I = a(877909),
                L = (0, l.default)(I),
                O = a(454504),
                B = (0, l.default)(O),
                A = a(162065),
                x = (0, l.default)(A),
                M = a(43138),
                D = (0, l.default)(M),
                R = a(918186),
                U = (0, l.default)(R),
                G = a(141655),
                F = (0, l.default)(G),
                W = a(786483),
                V = (0, l.default)(W),
                z = a(743050),
                j = (0, l.default)(z),
                Y = a(329756),
                q = a(815549),
                H = (0, l.default)(q),
                Z = a(661192),
                K = a(805803);
            i = a(796764);
            var J = L.default.ActionTypes,
                Q = {
                    pageMounted: function() {
                        k.default.dispatch({
                            actionType: J.PAGE_MOUNTED
                        })
                    },
                    pageContentUpdated: function() {
                        k.default.dispatch({
                            actionType: J.PAGE_CONTENT_UPDATED
                        })
                    },
                    setSectionIndex: function(e) {
                        k.default.dispatch({
                            actionType: J.SET_SECTION_INDEX,
                            index: e
                        })
                    },
                    navPrev: function() {
                        k.default.dispatch({
                            actionType: J.NAVIGATE_TO_PREVIOUS_SECTION
                        })
                    },
                    navNext: function() {
                        k.default.dispatch({
                            actionType: J.NAVIGATE_TO_NEXT_SECTION
                        })
                    },
                    navigateToPosition: function(e) {
                        k.default.dispatch({
                            actionType: J.REPEATABLE_ITEM_MOVED,
                            position: e
                        })
                    },
                    navigateToHash: function(e) {
                        k.default.dispatch({
                            actionType: J.NAVIGATE_TO_HASH,
                            hash: e
                        })
                    },
                    updatePageData: function(e) {
                        k.default.dispatch({
                            actionType: J.UPDATE_PAGE_DATA,
                            newPageData: e
                        })
                    },
                    didNavigateToSection: function() {
                        k.default.dispatch({
                            actionType: J.DID_NAVIGATE_TO_SECTION
                        })
                    },
                    initThemePreColors: function() {
                        k.default.dispatch({
                            actionType: J.INIT_THEME_PRE_COLORS
                        })
                    },
                    initColorSettings: function() {
                        k.default.dispatch({
                            actionType: J.INIT_COLOR_SETTINGS
                        })
                    },
                    switchPage: function(e, t) {
                        var a = function() {
                            k.default.dispatch({
                                actionType: J.SWITCH_PAGE,
                                uid: e,
                                firstTime: t
                            })
                        };
                        if (t) a();
                        else if (e && e !== m.default.getCurrentPageUID() && !window.edit_page.switchingPages) {
                            var n;
                            window.edit_page.Event.publish("Page.beforeOldOneFadeOut"), window.edit_page.switchingPages = !0;
                            var o = m.default.getPageFromUID(e).get("path");
                            null !== (n = i) && void 0 !== n && n.trackPageViewOnGA && i.trackPageViewOnGA(o), (0, c.default)(".slides,.s-footer-section, .s-page-product").stop().promise().then((function() {
                                window.edit_page.Event.publish("Page.afterOldOneFadeOut"), clearTimeout(window._loadingGifTimer), window._loadingGifTimer = (0, u.default)((function() {
                                    (0, c.default)("#s-content").addClass("loading")
                                }), 1e3), (0, c.default)(window).scrollTop(0), a()
                            }))
                        } else e === m.default.getCurrentPageUID() && (0, c.default)(window).trigger("hashchange")
                    },
                    setPageSectionsDataById: function(e) {
                        var t = e.siteId,
                            a = e.pageId;
                        return x.default.getByPage({
                            siteId: t,
                            pageId: a
                        }).then((function(e) {
                            var t = e.sections;
                            return k.default.dispatch({
                                actionType: J.SET_SECTIONS_BY_PAGE,
                                uid: a,
                                sectionsData: t
                            }), e
                        }))
                    },
                    setProductPageBinding: function(e) {
                        k.default.dispatch({
                            actionType: J.SET_PRODUCT_PAGE_BINDING,
                            productBinding: e
                        })
                    },
                    prepareEcommerce: function() {
                        var e, t = D.default.isWechat();
                        Y.RegexConstants.ECOMMERCE_STORE_PAGE_PATH.test(null === (e = location) || void 0 === e ? void 0 : e.pathname) || (T.default.getFistLoadingState("categories") && f.default.getEcommerceCategories({
                            pageId: y.default.getId()
                        }), T.default.getFistLoadingState("settings") && f.default.getEcommerceSettings({
                            pageId: y.default.getId()
                        }), f.default.getEcommerceProducts({
                            pageId: y.default.getId(),
                            page: t ? "all" : 1,
                            needFilterOptions: !0,
                            skipSetPagination: !0,
                            per: 5
                        })), f.default.loadEcommerceBuy(), f.default.initShoppingCart(), f.default.getProductsForCart({
                            productIds: S.default.getProductIdsFromCart(),
                            success: function(e) {
                                var a = e.data,
                                    n = void 0 === a ? {} : a;
                                return t && V.default.Event.publish("synchronizeProductsToCheckoutReduxModal", n.products || [])
                            }
                        })
                    },
                    preparePortfolio: function() {
                        var e;
                        Y.RegexConstants.PORTFOLIO_CATEGORIES_PAGE_PATH.test(null === (e = location) || void 0 === e ? void 0 : e.pathname) || (w.default.getFirstLoadingState("categories") && p.default.getPortfolioCategories({
                            pageId: y.default.getId()
                        }), w.default.getFirstLoadingState("settings") && p.default.getPortfolioSettings({
                            pageId: y.default.getId()
                        }), p.default.getPortfolioProducts({
                            pageId: y.default.getId(),
                            reloadProducts: !0,
                            skipSetPagination: !0
                        }))
                    },
                    prepareBlog: function() {
                        var e;
                        F.default.fetchBlogCategories(y.default.getId());
                        var t = Y.RegexConstants.BLOG_CATEGORIES_PAGE_PATH.test(null === (e = location) || void 0 === e ? void 0 : e.pathname) ? 20 : null;
                        Q.fetchBlogPosts(y.default.getId(), 1, t, {
                            id: "all"
                        })
                    },
                    gotoProductPage: function(e, t, a) {
                        k.default.dispatch({
                            actionType: J.SET_LAST_PAGE_SCROLL_TOP,
                            scrollTop: (0, c.default)(window).scrollTop()
                        });
                        var n = (a ? w.default : T.default).getProductBindingById(e);
                        this.setProductPageBinding(n);
                        var o = U.default.getProductPath(e, t, a);
                        "preview" === y.default.getSiteMode() ? H.default.push(o) : K.browserHistory.push(o)
                    },
                    gotoMembershipPage: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        N.default.getIsNewEditor() ? (0, Z.navigateToLinkUrl)("manage/audience/membership", "", {
                            fromSection: e
                        }) : (F.default.openPageSettings(), (0, c.default)(".membership-item").click())
                    },
                    gotoSettingsPage: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        N.default.getIsNewEditor() ? (0, Z.navigateToLinkUrl)("manage/settings/domains", "", {
                            fromSection: e
                        }) : F.default.openPageSettings({
                            tabName: "domains"
                        })
                    },
                    gotoBlogSettingsPage: function() {
                        (0, Z.navigateToLinkUrl)("manage/blog/blogSettings")
                    },
                    gotoMultiLangSettingsPage: function() {
                        (0, Z.navigateToLinkUrl)("manage/settings/multi-lang")
                    },
                    gotoHeaderFooterPage: function() {
                        (0, Z.navigateToLinkUrl)("manage/settings/headerFooter")
                    },
                    setPageType: function(e) {
                        k.default.dispatch({
                            actionType: J.SET_PAGE_TYPE,
                            type: e
                        })
                    },
                    setPageUID: function(e) {
                        k.default.dispatch({
                            actionType: J.SET_PAGE_UID,
                            uid: e
                        })
                    },
                    updateGeneratePageStatus: function(e) {
                        k.default.dispatch({
                            actionType: J.UPDATE_GENERATING_PAGE_STATUS,
                            status: e
                        })
                    },
                    toggleCategoryDrawer: function(e) {
                        k.default.dispatch({
                            actionType: J.TOGGLE_CATEGORY_DRAWER,
                            categoryType: e
                        })
                    },
                    fetchBlogPosts: function(e, t) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "null",
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            l = arguments.length > 4 ? arguments[4] : void 0,
                            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                            r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
                        return k.default.dispatch({
                            actionType: J.GET_BLOG_POSTS_REQUEST,
                            sectionId: i || ""
                        }), B.default.fetchPosts({
                            pageId: e,
                            page: t,
                            limit: a,
                            tag: "all" === o.id ? void 0 : o.name,
                            includeLongBlurb: l,
                            sectionId: i,
                            paramString: r,
                            success: function(e) {
                                return k.default.dispatch({
                                    actionType: J.GET_BLOG_POSTS_SUCCESS,
                                    res: e,
                                    categoryId: o.id,
                                    sectionId: i
                                })
                            },
                            error: function() {
                                return alert(n("Oops, a network issue occurred, please refresh and try again."))
                            }
                        })
                    },
                    saveBlogPreviewNum: function(e, t) {
                        var a = {
                            id: e,
                            blog: {
                                settings: {
                                    previewNumber: t
                                }
                            }
                        };
                        return B.default.saveBlogPreviewNum({
                            siteId: e,
                            data: a,
                            success: function(e) {
                                200 === e.status && window.edit_page.Event.publish("BlogSetting.UpdatePreviewNumber")
                            },
                            error: function() {
                                return alert(n("Oops, a network issue occurred, please refresh and try again."))
                            }
                        })
                    },
                    saveBlogSettings: function(e, t) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            o = {
                                id: e,
                                blog: {
                                    settings: t
                                }
                            };
                        return B.default.saveBlogPreviewNum({
                            siteId: e,
                            data: o,
                            success: function(e) {
                                a && "function" == typeof a && a()
                            },
                            error: function() {
                                return alert(n("Oops, a network issue occurred, please refresh and try again."))
                            }
                        })
                    },
                    fetchBlogArchivePosts: function(e, t) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "null",
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            l = {
                                pageId: e,
                                page: t,
                                limit: a,
                                tag: o,
                                includeLongBlurb: !1,
                                success: function(e) {
                                    return k.default.dispatch({
                                        actionType: J.GET_BLOG_ARCHIVE_POSTS_SUCCESS,
                                        res: e,
                                        tag: o
                                    })
                                },
                                error: function() {
                                    return alert(n("Oops, a network issue occurred, please refresh and try again."))
                                }
                            };
                        return Boolean(j.default.getAiSiteBuilderIframeUrl()) && (l.paramString = "&without_custom_code=true"), B.default.fetchPosts(l)
                    }
                };
            window.DEBUG = window.DEBUG || {}, window.DEBUG.PageActions = Q, t.default = Q, e.exports = t.default
        },
        882962: function(e, t, a) {
            var n = a(353147),
                o = a(686902),
                l = a(14310),
                i = a(620116),
                r = a(834074),
                u = a(778914),
                s = a(239649),
                c = a(820368),
                d = a(663978),
                f = a(60530)(a(60530));
            d(t, "__esModule", {
                value: !0
            });
            var g = a(487672),
                p = (0, f.default)(g),
                h = a(620116),
                m = (0, f.default)(h),
                v = a(534566),
                y = (0, f.default)(v),
                b = a(712774),
                T = a(850483),
                C = (0, f.default)(T),
                S = a(680523),
                _ = (0, f.default)(S);

            function w(e, t) {
                var a = o(e);
                if (l) {
                    var n = l(e);
                    t && (n = i(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) u(a = w(Object(n), !0)).call(a, (function(t) {
                        (0, p.default)(e, t, n[t])
                    }));
                    else if (s) c(e, s(n));
                    else {
                        var o;
                        u(o = w(Object(n))).call(o, (function(t) {
                            d(e, t, r(n, t))
                        }))
                    }
                }
                return e
            }
            var N = {},
                E = {
                    getPortfolioProducts: function(e) {
                        y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_ITEMS
                        }), e.category = e.category || "all", e.page = e.page || 1;
                        var t = _.default.PORTFOLIO.GET_PRODUCTS(e.pageId, e.category, e.page, e.per, e.sectionId, e.from);
                        return !N[t] || e.needRefresh ? C.default.products.index({
                            pageId: e.pageId,
                            category: e.category || "all",
                            page: e.page,
                            per: e.per,
                            filter: (0, m.default)(e),
                            sectionId: e.sectionId,
                            from: e.from,
                            success: function(a) {
                                var n = {
                                    actionType: b.ActionTypes.GET_PORTFOLIO_ITEMS_SUCCESS,
                                    res: a,
                                    type: e.category,
                                    skipSetPagination: e.skipSetPagination,
                                    reloadProducts: e.reloadProducts
                                };
                                e.sectionId && (n.actionType = b.ActionTypes.GET_SECTION_PORTFOLIO_ITEM_SUCCESS, n.sectionId = e.sectionId, n.reloadSectionProducts = e.reloadSectionProducts), e.originSectionId && (n.originSectionId = e.originSectionId), y.default.dispatch(n), N[t] = !0
                            },
                            fail: function(e) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_ITEMS_FAIL,
                                    res: e
                                })
                            }
                        }) : y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_ITEMS_SUCCESS
                        })
                    },
                    getPortfolioItemDetail: function(e) {
                        y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_ITEM_DETAIL
                        });
                        var t = e.slug ? "".concat(_.default.PORTFOLIO.GET_PRODUCT_DETAIL_BY_SLUG(e.pageId, e.slug), "get_product_detail") : "".concat(_.default.PORTFOLIO.GET_PRODUCT_DETAIL(e.pageId, e.productId), "get_product_detail");
                        N[t] ? y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_ITEM_DETAIL_SUCCESS
                        }) : C.default.products.get(P(P({}, e), {}, {
                            success: function(a) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_ITEM_DETAIL_SUCCESS,
                                    res: a
                                }), e.success && e.success(a), N[t] = !0
                            },
                            fail: function(t) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_ITEM_DETAIL_FAIL,
                                    res: t
                                }), e.fail ? e.fail(t) : alert(n("Oops, a network issue occurred, please refresh and try again."))
                            }
                        }))
                    },
                    getPortfolioSettings: function(e) {
                        y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_SETTINGS
                        }), C.default.settings.get({
                            pageId: e.pageId,
                            success: function(e) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_SETTINGS_SUCCESS,
                                    data: e
                                })
                            },
                            fail: function(e) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_SETTINGS_FAIL,
                                    data: e
                                })
                            }
                        })
                    },
                    getPortfolioCategories: function(e) {
                        y.default.dispatch({
                            actionType: b.ActionTypes.GET_PORTFOLIO_CATEGOIRES
                        }), C.default.categories.get({
                            pageId: e.pageId,
                            success: function(t) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_CATEGORIES_SUCCESS,
                                    data: t
                                }), e.success && "function" == typeof e.success && e.success()
                            },
                            fail: function(e) {
                                y.default.dispatch({
                                    actionType: b.ActionTypes.GET_PORTFOLIO_CATEGORIES_FAIL,
                                    data: e
                                })
                            }
                        })
                    },
                    updateSettingsFromManager: function(e) {
                        y.default.dispatch({
                            actionType: b.ActionTypes.UPDATE_SETTINGS_FROM_MANAGER,
                            data: e
                        })
                    },
                    openCategoryDrawer: function() {
                        y.default.dispatch({
                            actionType: b.ActionTypes.OPEN_CATEGORY_DRAWER
                        })
                    },
                    closeCategoryDrawer: function() {
                        y.default.dispatch({
                            actionType: b.ActionTypes.CLOSE_CATEGORY_DRAWER
                        })
                    }
                };
            t.default = E, window.DEBUG = window.DEBUG || {}, window.DEBUG.PortfolioActions = E, e.exports = t.default
        },
        990264: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(51942),
                i = (0, o.default)(l),
                r = a(62431),
                u = a(879893),
                s = (0, o.default)(u),
                c = a(234584),
                d = (0, o.default)(c),
                f = a(141655),
                g = (0, o.default)(f),
                p = a(469155),
                h = (0, o.default)(p),
                m = a(604990),
                v = (0, o.default)(m),
                y = a(183123),
                b = (0, o.default)(y),
                T = (a(442279), a(105001));
            s.default.sharedProps = (0, r.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                var e = {
                    pageId: d.default.getId(),
                    getPagination: v.default.getPagination,
                    getBlogShowDummyData: v.default.getBlogShowDummyData,
                    getPosts: v.default.getPosts,
                    getCategories: v.default.getCategories,
                    getBlogSetting: v.default.getBlogSetting,
                    getShowMorePostsWith: v.default.getShowMorePostsWith,
                    fromSiteToApp: b.default.getFromSiteToApp(),
                    addBlogPostsChangeListener: function(e, t) {
                        v.default.addBlogPostsChangeListener(e, t)
                    },
                    addBlogPostsLoadingStateListener: function(e, t) {
                        v.default.addBlogPostsLoadingStateListener(e, t)
                    },
                    removeBlogPostsLoadingStateListener: function(e, t) {
                        v.default.removeBlogPostsLoadingStateListener(e, t)
                    },
                    removeBlogPostsChangeListener: function(e, t) {
                        v.default.removeBlogPostsChangeListener(e, t)
                    },
                    addBlogCategoriesChangeListener: function(e) {
                        v.default.addBlogCategoriesChangeListener(e)
                    },
                    removeBlogCategoriesChangeListener: function(e) {
                        v.default.removeBlogCategoriesChangeListener(e)
                    }
                };
                return (0, i.default)({}, e)
            }), (function() {
                return {
                    fetchBlogPosts: function(e, t, a, n, o, l, i) {
                        return h.default.fetchBlogPosts(e, t, a, n, o, l, i)
                    },
                    updateBlogArchiveDialog: function(e, t, a, n) {
                        g.default.updateBlogArchiveDialog(e, t, a, n)
                    },
                    fetchBlogCategories: function(e, t) {
                        g.default.fetchBlogCategories(e, t)
                    }
                }
            }));
            var C = s.default;
            t.default = (0, T.addOffline)(C), e.exports = t.default
        },
        454275: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(501068),
                i = a(752424),
                r = a(663978),
                u = a(834074),
                s = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            });
            var c, d, f, g, p, h, m = a(726394),
                v = (0, s.default)(m),
                y = a(569198),
                b = (0, s.default)(y),
                T = a(705824),
                C = (0, s.default)(T),
                S = a(351379),
                _ = (0, s.default)(S),
                w = a(900214),
                P = (0, s.default)(w),
                N = a(566380),
                E = (0, s.default)(N),
                k = a(487672),
                I = (0, s.default)(k),
                L = a(812077),
                O = (0, s.default)(L);
            a(209653), a(241539), a(339714);
            var B = a(620116),
                A = (0, s.default)(B),
                x = a(2991),
                M = (0, s.default)(x),
                D = a(694473),
                R = (0, s.default)(D),
                U = a(977766),
                G = (0, s.default)(U),
                F = a(54103),
                W = (0, s.default)(F),
                V = a(277149),
                z = (0, s.default)(V),
                j = a(778914),
                Y = (0, s.default)(j),
                q = a(686902),
                H = (0, s.default)(q),
                Z = a(366757),
                K = (0, s.default)(Z),
                J = a(45697),
                Q = ((0, s.default)(J), a(223336)),
                X = (0, s.default)(Q),
                $ = a(496486),
                ee = (0, s.default)($),
                te = a(294184),
                ae = (0, s.default)(te),
                ne = a(500134),
                oe = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = de(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        l = r && u;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var s = l ? u(e, i) : null;
                            s && (s.get || s.set) ? r(n, i, s) : n[i] = e[i]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(818166)),
                le = a(421522),
                ie = (0, s.default)(le),
                re = a(285072),
                ue = (0, s.default)(re),
                se = a(43138),
                ce = (0, s.default)(se);

            function de(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (de = function(e) {
                    return e ? a : t
                })(e)
            }
            var fe = function(e, t, a) {
                    var n, o = function(e, t) {
                            return (0, O.default)("li", {
                                className: "option",
                                "data-id": e
                            }, e, t)
                        },
                        l = (0, A.default)(n = e.children).call(n, (function(e) {
                            return e.id !== t
                        })),
                        i = (0, M.default)(l).call(l, (function(e) {
                            var t = e.id,
                                a = e.name;
                            return o(t, a)
                        })),
                        r = e.id,
                        u = e.name;
                    return r !== t && i.unshift(o(r, u)), (0, O.default)("ul", {
                        onClick: function(e) {
                            e.stopPropagation(), a(Number(e.target.dataset.id))
                        }
                    }, void 0, (0, M.default)(i).call(i, (function(e) {
                        return e
                    })))
                },
                ge = function(e) {
                    var t, a, n = e.category,
                        o = e.hidden,
                        l = e.currentCategory,
                        i = e.mobile,
                        r = e.index,
                        u = e.onClickFn,
                        s = e.categoryType,
                        d = e.isNeedStaticLink,
                        f = n.children,
                        g = (null == f ? void 0 : (0, R.default)(f).call(f, (function(e) {
                            return e.id === l
                        }))) || n,
                        p = g.id,
                        h = g.name,
                        m = "store";
                    oe.isInPortfolioCategoriesPage() ? m = "portfolio" : "blog" === s ? m = "blog" : "booking" === s && (m = "booking");
                    var v = K.default.createElement(K.default.Fragment, null, d ? (0, O.default)("a", {
                        className: (0, ae.default)("category-link-item", {
                            selected: l === p || l === h,
                            "no-hover": i
                        }),
                        href: (0, G.default)(t = "/".concat(m, "/categories/")).call(t, "all" === p ? "" : h)
                    }, r + p + h, h) : (0, O.default)("span", {
                        className: (0, ae.default)("category-link-item", {
                            selected: l === p || l === h,
                            "no-hover": i
                        })
                    }, r + p + h, h));
                    return (0, O.default)("div", {
                        className: "category-link-item-wrapper",
                        onClick: function() {
                            return u(p)
                        },
                        style: {
                            display: o ? "none" : "inline-block"
                        }
                    }, void 0, null !== (a = n.children) && void 0 !== a && a.length ? (0, O.default)(ne.Popover, {
                        placement: "bottom",
                        whiteBg: !0,
                        trigger: "hover",
                        overlayClassName: "category-bar-popover",
                        content: fe(n, l, u)
                    }, void 0, v, c || (c = (0, O.default)("i", {
                        className: "entypo-right-open-big"
                    }))) : v)
                },
                pe = ie.default.decorate(ue.default)(d = function(e) {
                    (0, _.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, E.default)(t);
                        if (a) {
                            var o = (0, E.default)(this).constructor;
                            e = l(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, P.default)(this, e)
                    });

                    function i(e) {
                        var t, a, n, l;
                        return (0, v.default)(this, i), l = o.call(this, e), (0, I.default)((0, C.default)(l), "listRefsWidth", 0), (0, I.default)((0, C.default)(l), "isNeedStaticLink", (function() {
                            return oe.isInStorePage, oe.isInPortfolioCategoriesPage, !1
                        })), l.state = {
                            showMore: !1,
                            changePosition: !1,
                            mobile: !1
                        }, l._onClickShowMore = (0, W.default)(t = l._onClickShowMore).call(t, (0, C.default)(l)), l._onClickShowLess = (0, W.default)(a = l._onClickShowLess).call(a, (0, C.default)(l)), l._changePosition = (0, W.default)(n = l._changePosition).call(n, (0, C.default)(l)), l
                    }
                    return (0, b.default)(i, [{
                        key: "componentWillMount",
                        value: function() {
                            var e;
                            this._shrinkIndex = 999, this._updateBar = ee.default.debounce((0, W.default)(e = this._updateBar).call(e, this), 50)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this._updateBar(), this._changePosition(), this.listRefsWidth = window.innerWidth, (0, X.default)(window).on("resize", (function() {
                                e.listRefsWidth !== window.innerWidth && (e.listRefsWidth = window.innerWidth, e._updateBar())
                            })), this.setState({
                                mobile: ce.default.isMobile()
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var a = this;
                            e.categories.length !== this.props.categories.length && this._updateBar(), !t.changePosition && this.state.changePosition && this.setTimeout((function() {
                                var e, t = (0, R.default)(e = (0, X.default)(a.refs.list)).call(e, ".top-list"),
                                    n = (0, R.default)(t).call(t, ".selected");
                                n.length && t.scrollLeft(t.scrollLeft() + n.offset().left - t.offset().left - 10), a.setState({
                                    changePosition: !1
                                })
                            }), 10)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, X.default)(window).off("resize", this._updateBar)
                        }
                    }, {
                        key: "_changePosition",
                        value: function() {
                            this.setState({
                                changePosition: !0,
                                showMore: !1
                            })
                        }
                    }, {
                        key: "_onClickShowMore",
                        value: function() {
                            this.setState({
                                showMore: !0
                            })
                        }
                    }, {
                        key: "_onClickShowLess",
                        value: function() {
                            this.setState({
                                showMore: !1
                            })
                        }
                    }, {
                        key: "_updateBar",
                        value: function() {
                            var e = this,
                                t = 0;
                            this._shrinkIndex = 999, this.forceUpdate();
                            var a = (0, X.default)(this.refs.list).width() || 0;
                            this.setTimeout((function() {
                                var n;
                                (0, R.default)(n = (0, X.default)(e.refs.list)).call(n, ".check-list .category-link-item-wrapper").each((function(n, o) {
                                    if (t += (0, X.default)(o).outerWidth(!0), a <= t + 50) return e._shrinkIndex = n, !1
                                })), e.forceUpdate()
                            }), 100)
                        }
                    }, {
                        key: "formatCategories",
                        value: function(e) {
                            if ((0, z.default)(e).call(e, (function(e) {
                                    return 1 !== e.level
                                }))) {
                                var t, a = {},
                                    n = ee.default.cloneDeep(e);
                                return (0, Y.default)(e).call(e, (function(e, t) {
                                    var o = e.parent_id,
                                        l = e.id;
                                    o && (a[o] ? a[o].push(e) : a[o] = [e], n = (0, A.default)(n).call(n, (function(e) {
                                        return e.id !== l
                                    })))
                                })), (0, Y.default)(t = (0, H.default)(a)).call(t, (function(e) {
                                    var t = (0, R.default)(n).call(n, (function(t) {
                                        return t.id.toString() === e
                                    }));
                                    t && (t.children = a[e] || [])
                                })), n
                            }
                            return e
                        }
                    }, {
                        key: "categoryFilter",
                        value: function(e) {
                            var t, a, n;
                            return "blog" === e ? (0, A.default)(t = this.props.categories).call(t, (function(e) {
                                return e.count > 0
                            })) : "booking" === e ? (0, A.default)(a = this.props.categories).call(a, (function(e) {
                                return e.events_count || e.eventsCount > 0
                            })) : (0, A.default)(n = this.props.categories).call(n, (function(e) {
                                return e.products_count > 0
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.changeCategory,
                                o = t.sbClass,
                                l = t.isCategoryIdExist,
                                i = t.categoryType,
                                r = this.props.currentCategory,
                                u = this.state,
                                s = u.showMore,
                                c = u.mobile,
                                d = ee.default.cloneDeep(this.categoryFilter(i));
                            return (d = this.formatCategories(d)).unshift({
                                name: n("Ecommerce|All"),
                                id: "all"
                            }), l(r) || (r = "all"), K.default.createElement("div", {
                                className: (0, ae.default)("s-category-bar s-font-body clearfix ".concat(o || ""), {
                                    shrinked: this._shrinkIndex < d.length
                                }),
                                ref: "list"
                            }, !1, c && (0, O.default)("div", {
                                className: "category-list"
                            }, void 0, (0, O.default)("div", {
                                className: "top-bar check-list ".concat(s ? "hide-top-bar" : "")
                            }, void 0, (0, O.default)("div", {
                                className: "top-list"
                            }, void 0, (0, M.default)(d).call(d, (function(t, n) {
                                return (0, O.default)(ge, {
                                    isNeedStaticLink: e.isNeedStaticLink(),
                                    currentCategory: r,
                                    category: t,
                                    index: n,
                                    mobile: c,
                                    categoryType: i,
                                    hidden: !s && n >= e._shrinkIndex,
                                    onClickFn: a
                                })
                            })))), this._shrinkIndex < d.length && !s && (0, O.default)("div", {
                                className: "show-more-link mobile-link",
                                onClick: this._onClickShowMore
                            }, void 0, f || (f = (0, O.default)("i", {
                                className: "fa fa-angle-down"
                            }))), s && (0, M.default)(d).call(d, (function(t, n) {
                                return (0, O.default)(ge, {
                                    currentCategory: r,
                                    category: t,
                                    index: n,
                                    mobile: c,
                                    categoryType: i,
                                    isNeedStaticLink: e.isNeedStaticLink(),
                                    onClickFn: function(e) {
                                        return a(e)
                                    }
                                })
                            })), this._shrinkIndex < d.length && s && (0, O.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowLess
                            }, void 0, g || (g = (0, O.default)("i", {
                                className: "fa fa-angle-up"
                            })))), !c && (0, O.default)("div", {
                                className: "category-list check-list"
                            }, void 0, (0, M.default)(d).call(d, (function(t, n) {
                                return (0, O.default)(ge, {
                                    currentCategory: r,
                                    category: t,
                                    index: n,
                                    mobile: c,
                                    categoryType: i,
                                    hidden: !s && n >= e._shrinkIndex,
                                    isNeedStaticLink: e.isNeedStaticLink(),
                                    onClickFn: a
                                })
                            })), this._shrinkIndex < d.length && !s && (0, O.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowMore
                            }, void 0, p || (p = (0, O.default)("i", {
                                className: "fa fa-angle-down"
                            }))), this._shrinkIndex < d.length && s && (0, O.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowLess
                            }, void 0, h || (h = (0, O.default)("i", {
                                className: "fa fa-angle-up"
                            })))))
                        }
                    }]), i
                }(K.default.Component)) || d;
            t.default = pe, e.exports = t.default
        },
        755802: function(e, t, a) {
            var n = a(501068),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(812077),
                r = (0, l.default)(i),
                u = a(726394),
                s = (0, l.default)(u),
                c = a(569198),
                d = (0, l.default)(c),
                f = a(351379),
                g = (0, l.default)(f),
                p = a(900214),
                h = (0, l.default)(p),
                m = a(566380),
                v = (0, l.default)(m),
                y = a(366757),
                b = (0, l.default)(y),
                T = a(45697);
            (0, l.default)(T);
            var C = function(e) {
                (0, g.default)(l, e);
                var t, a, o = (t = l, a = function() {
                    if ("undefined" == typeof Reflect || !n) return !1;
                    if (n.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, o = (0, v.default)(t);
                    if (a) {
                        var l = (0, v.default)(this).constructor;
                        e = n(o, arguments, l)
                    } else e = o.apply(this, arguments);
                    return (0, h.default)(this, e)
                });

                function l() {
                    return (0, s.default)(this, l), o.apply(this, arguments)
                }
                return (0, d.default)(l, [{
                    key: "render",
                    value: function() {
                        return (0, r.default)("div", {
                            className: "s-mobile-disabled-notice"
                        }, void 0, (0, r.default)("span", {
                            className: "s-common-status s-font-body"
                        }, void 0, this.props.disabledNotice))
                    }
                }]), l
            }(b.default.Component);
            t.default = C, e.exports = t.default
        },
        487628: function(e, t, a) {
            var n = a(501068),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                r = (0, l.default)(i),
                u = a(726394),
                s = (0, l.default)(u),
                c = a(569198),
                d = (0, l.default)(c),
                f = a(351379),
                g = (0, l.default)(f),
                p = a(900214),
                h = (0, l.default)(p),
                m = a(566380),
                v = (0, l.default)(m),
                y = a(366757),
                b = (0, l.default)(y),
                T = a(45697),
                C = ((0, l.default)(T), a(454275)),
                S = (0, l.default)(C),
                _ = a(604990),
                w = (0, l.default)(_),
                P = a(205223),
                N = (0, l.default)(P);
            var E = function(e) {
                    (0, g.default)(l, e);
                    var t, a, o = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, v.default)(t);
                        if (a) {
                            var l = (0, v.default)(this).constructor;
                            e = n(o, arguments, l)
                        } else e = o.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function l() {
                        return (0, s.default)(this, l), o.apply(this, arguments)
                    }
                    return (0, d.default)(l, [{
                        key: "render",
                        value: function() {
                            return b.default.createElement(S.default, (0, r.default)({}, this.props, {
                                categoryType: "blog"
                            }))
                        }
                    }]), l
                }(b.default.Component),
                k = (0, N.default)(E, [], (function() {
                    return {
                        isCategoryIdExist: function(e) {
                            return w.default.isCategoryIdExist(e)
                        }
                    }
                }));
            t.default = k, e.exports = t.default
        },
        850483: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i = a(726394),
                r = (0, l.default)(i),
                u = a(569198),
                s = (0, l.default)(u),
                c = a(620116),
                d = (0, l.default)(c),
                f = a(921806),
                g = (0, l.default)(f),
                p = a(680523),
                h = (0, l.default)(p),
                m = function() {
                    function e() {
                        (0, r.default)(this, e)
                    }
                    return (0, s.default)(e, null, [{
                        key: "initClass",
                        value: function() {
                            this.prototype.products = {
                                create: function() {},
                                index: function(e) {
                                    return new g.default({
                                        type: "GET",
                                        url: h.default.PORTFOLIO.GET_PRODUCTS(e.pageId, e.category, e.page, e.per, (0, d.default)(e), e.sectionId, e.from),
                                        success: function(t) {
                                            if ("function" == typeof e.success) return e.success(t)
                                        },
                                        error: function(t) {
                                            if (alert(n("Oops, a network issue occurred, please refresh and try again.")), "function" == typeof e.fail) return e.fail(t)
                                        }
                                    }).run()
                                },
                                get: function(e) {
                                    var t = e.slug ? h.default.PORTFOLIO.GET_PRODUCT_DETAIL_BY_SLUG(e.pageId, e.slug) : h.default.PORTFOLIO.GET_PRODUCT_DETAIL(e.pageId, e.productId);
                                    return new g.default({
                                        type: "GET",
                                        url: t,
                                        success: function(t) {
                                            if ("function" == typeof e.success) return e.success(t)
                                        },
                                        error: function(t) {
                                            if (e.fail) return e.fail(t);
                                            alert(n("Oops, a network issue occurred, please refresh and try again."))
                                        }
                                    }).run()
                                },
                                update: function() {},
                                delete: function() {}
                            }, this.prototype.categories = {
                                get: function(e) {
                                    return new g.default({
                                        type: "GET",
                                        url: h.default.PORTFOLIO.GET_CATEGORIES(e.pageId),
                                        success: function(t) {
                                            if ("function" == typeof e.success) return e.success(t)
                                        },
                                        error: function(t) {
                                            if (alert(n("Oops, a network issue occurred, please refresh and try again.")), "function" == typeof e.fail) return e.fail(t)
                                        }
                                    }).run()
                                }
                            }, this.prototype.settings = {
                                get: function(e) {
                                    return new g.default({
                                        type: "GET",
                                        url: h.default.PORTFOLIO.SETTINGS(e.pageId),
                                        success: function(t) {
                                            if ("function" == typeof e.success) return e.success(t)
                                        },
                                        error: function(t) {
                                            if (alert(n("Oops, a network issue occurred, please refresh and try again.")), "function" == typeof e.fail) return e.fail(t)
                                        }
                                    }).run()
                                }
                            }, this.prototype.setting = {
                                post: function(e) {
                                    return new g.default({
                                        type: "POST",
                                        url: h.default.PORTFOLIO.SETTING(e.pageId),
                                        success: function(t) {
                                            if ("function" == typeof e.success) return e.success(t)
                                        },
                                        error: function(t) {
                                            if (alert(n("Oops, a network issue occurred, please refresh and try again.")), "function" == typeof e.fail) return e.fail(t)
                                        }
                                    }).run()
                                }
                            }
                        }
                    }]), e
                }();
            m.initClass(), t.default = new m, e.exports = t.default
        },
        162065: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(726394),
                i = (0, o.default)(l),
                r = a(569198),
                u = (0, o.default)(r),
                s = a(493476),
                c = (0, o.default)(s),
                d = a(680523),
                f = (0, o.default)(d),
                g = a(921806),
                p = (0, o.default)(g),
                h = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, u.default)(e, [{
                        key: "create",
                        value: function(e, t, a) {
                            return new p.default({
                                url: f.default.SECTIONS.CREATE(),
                                type: "POST",
                                data: e,
                                success: function(a) {
                                    return "function" == typeof t ? t(a, e) : void 0
                                },
                                error: function(t, n) {
                                    return "function" == typeof a ? a(t, n, e) : void 0
                                }
                            }).run()
                        }
                    }, {
                        key: "getByPage",
                        value: function(e) {
                            e.siteId;
                            var t = e.pageId,
                                a = f.default.PAGE.GET_PAGE_DATA(t);
                            return new c.default((function(e, t) {
                                new p.default({
                                    url: a,
                                    type: "GET",
                                    success: function(t) {
                                        return e(t)
                                    },
                                    error: function(e, a) {
                                        return t(a)
                                    }
                                }).run()
                            }))
                        }
                    }]), e
                }();
            t.default = new h, e.exports = t.default
        },
        476914: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(752424),
                i = a(663978),
                r = a(834074),
                u = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(811128),
                c = (0, u.default)(s),
                d = a(977766),
                f = (0, u.default)(d),
                g = a(678580),
                p = (0, u.default)(g),
                h = a(730381),
                m = (0, u.default)(h);
            a(815461);
            var v = a(912972),
                y = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = b(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        l = i && r;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var s = l ? r(e, u) : null;
                            s && (s.get || s.set) ? i(n, u, s) : n[u] = e[u]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(996646));

            function b(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    a = new l;
                return (b = function(e) {
                    return e ? a : t
                })(e)
            }
            var T = {
                formatDate: function(e, t, a) {
                    return y.formatDate(e, t, a)
                },
                fromNow: function(e, t, a) {
                    if (e) {
                        var o = (0, m.default)(e).locale(t),
                            l = (0, m.default)().diff(o, "days");
                        return l < 1 ? o.fromNow() : 1 === l ? "".concat(n("Blog|a day ago")) : l <= 31 ? (0, v.t)(n("Blog|%{number} days ago"), {
                            number: l
                        }) : o.format(a || y.getDateFormat(t))
                    }
                    return ""
                },
                isExpired: function(e) {
                    return new Date - new Date(e) > 0
                },
                getLastSaveText: function(e) {
                    var t = (0, c.default)() - e;
                    return t < 3e4 ? n("Editor|Saved just now.") : t < 9e4 ? n("Editor|Saved 1 min ago.") : n("Editor|Saved %{minutes} min ago.", {
                        minutes: ~~(t / 1e3 / 60)
                    })
                },
                formatPublishedDate: function(e, t) {
                    return e ? (0, m.default)(e).locale(t).format(y.getDateFormat(t)) : ""
                },
                formatBlogDate: function(e, t, a, o, l, i) {
                    var r, u, s, c, d = e || t,
                        g = n("Blog|Scheduled for %{var}", {
                            var: (0, m.default)(a).lang(o).format("lll")
                        });
                    return "scheduled" === t ? (0, f.default)(r = "".concat(g, " ")).call(r, T.fromNow(l, o)) : (0, p.default)(u = ["published", "pass"]).call(u, d) ? (0, f.default)(s = "".concat(n("Published"), " ")).call(s, T.formatPublishedDate(l, o)) : (0, f.default)(c = "".concat(n("Draft created"), " ")).call(c, T.fromNow(i, o))
                }
            };
            t.default = T, e.exports = t.default
        },
        851922: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(387937),
                i = (0, o.default)(l);
            t.default = function(e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                        return {}
                    },
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return {}
                    };
                return (0, i.default)(e, (function(e, a) {
                    return t(a)
                }), (function(e, t) {
                    return a(t)
                }), "Stores")
            }, e.exports = t.default
        },
        109245: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i, r, u, s, c, d, f, g = a(812077),
                p = (0, l.default)(g),
                h = a(726394),
                m = (0, l.default)(h),
                v = a(569198),
                y = (0, l.default)(v);
            a(974916), a(323123), a(569600);
            var b = a(620116),
                T = (0, l.default)(b),
                C = a(977766),
                S = (0, l.default)(C),
                _ = a(20455),
                w = (0, l.default)(_),
                P = a(678580),
                N = (0, l.default)(P),
                E = a(778914),
                k = (0, l.default)(E),
                I = a(694473),
                L = (0, l.default)(I),
                O = a(366757),
                B = (0, l.default)(O),
                A = a(234584),
                x = (0, l.default)(A),
                M = a(766463),
                D = a(183123),
                R = (0, l.default)(D),
                U = ["grid", "card"],
                G = "automatic",
                F = [{
                    key: "columns_mobile",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: G,
                        label: function() {
                            return n("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: U
                        }]
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        },
                        visible: [{
                            type: "structure",
                            value: U
                        }]
                    }],
                    defaultValue: G
                }],
                W = {
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4
                },
                V = {
                    none: !1,
                    show: !0
                };
            for (var z in V) V[V[z]] = z;
            var j = {
                    imageAlignment: "s-avatar-alignment",
                    imageShape: "s-avatar",
                    imageSize: "s-avatar",
                    snippetLength: "s-snippet"
                },
                Y = (0, T.default)(i = [{
                    key: "structure",
                    label: function() {
                        return n("Editor|Structure")
                    },
                    component: "select",
                    children: [{
                        value: "rows",
                        label: function() {
                            return n("Editor|List")
                        }
                    }, {
                        value: "grid",
                        label: function() {
                            return n("Editor|Grid")
                        }
                    }, {
                        value: "card",
                        label: function() {
                            return n("Editor|Card")
                        }
                    }, {
                        value: "tiled",
                        label: function() {
                            return n("Editor|Tiled")
                        }
                    }]
                }, R.default.getCanUseSectionTextAlignNewVersion() ? {
                    key: "textAlignment",
                    label: function() {
                        return n("Editor|Text Align")
                    },
                    component: "textHorizontalAlignment",
                    visible: [{
                        type: "structure",
                        value: ["grid", "card", "tiled"]
                    }]
                } : null, {
                    key: "columns",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["grid", "card", "tiled"]
                    }],
                    children: [{
                        value: 1,
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: ["grid", "card"]
                        }]
                    }, {
                        value: 2,
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: 3,
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: 4,
                        label: function() {
                            return "4"
                        }
                    }]
                }, {
                    key: "imageShape",
                    label: function() {
                        return n("Editor|Image Shape")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["rows", "grid", "card"]
                    }],
                    children: [{
                        value: "square",
                        label: function() {
                            return n("Editor|Square")
                        }
                    }, {
                        value: "landscape-4-3",
                        label: function() {
                            return n("Editor|Landscape (4:3)")
                        }
                    }, {
                        value: "landscape-16-9",
                        label: function() {
                            return n("Editor|Landscape (16:9)")
                        }
                    }, {
                        value: "landscape-4-1",
                        label: function() {
                            return n("Editor|Landscape (4:1)")
                        }
                    }, {
                        value: "circle",
                        label: function() {
                            return n("Editor|Small circle")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }, {
                        value: "none",
                        label: function() {
                            return n("Editor|No image")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }]
                }, {
                    key: "imageAlignment",
                    label: function() {
                        return n("Editor|Image Alignment")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["rows"]
                    }, {
                        type: "imageShape",
                        value: ["square", "circle", "landscape-4-3", "landscape-16-9", "landscape-4-1"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return n("Editor|Left")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return n("Editor|Right")
                        }
                    }]
                }, {
                    key: "imageSize",
                    label: function() {
                        return n("Editor|Image Size")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["rows"]
                    }, {
                        type: "imageShape",
                        value: ["square", "landscape-4-3", "landscape-16-9", "landscape-4-1"]
                    }],
                    children: [{
                        value: "s",
                        label: function() {
                            return n("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return n("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return n("Editor|L")
                        }
                    }]
                }, {
                    key: "snippetLength",
                    label: function() {
                        return n("Editor|Snippet")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["rows", "grid"]
                    }],
                    children: [{
                        value: "none",
                        label: function() {
                            return n("Editor|No snippet")
                        }
                    }, {
                        value: "short",
                        label: function() {
                            return n("Editor|Short snippet")
                        }
                    }, {
                        value: "long",
                        label: function() {
                            return n("Editor|Long snippet")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }]
                }]).call(i, (function(e) {
                    return Boolean(e)
                })),
                q = null;

            function H() {
                return q || (q = {
                    columnOne: {
                        thumbnail: [{
                            value: "none",
                            name: n("Editor|No thumbnail")
                        }, {
                            value: "smallCircle",
                            name: n("Editor|Small circle")
                        }, {
                            value: "smallSquare",
                            name: n("Editor|Small square")
                        }, {
                            value: "landscape",
                            name: n("Editor|Landscape")
                        }],
                        snippet: [{
                            value: "none",
                            name: n("Editor|No snippet")
                        }, {
                            value: "short",
                            name: n("Editor|Short snippet")
                        }, {
                            value: "long",
                            name: n("Editor|Long snippet")
                        }]
                    },
                    columnOther: {
                        thumbnail: [{
                            value: "landscape",
                            name: n("Editor|Landscape")
                        }, {
                            value: "card",
                            name: n("Editor|Card")
                        }],
                        snippet: {
                            landscape: [{
                                value: "none",
                                name: n("Editor|No snippet")
                            }, {
                                value: "short",
                                name: n("Editor|Short snippet")
                            }],
                            card: [{
                                value: "none",
                                name: n("Editor|No snippet")
                            }]
                        }
                    }
                }), q
            }
            var Z = ["one-thumbnail-snippet", "one-thumbnail-none", "one-none-none", "one-none-snippet", "one-landscape-none", "one-landscape-snippet", "num-landscape-none", "num-landscape-short", "num-card-none"],
                K = {
                    thumbnail: {
                        none: "none",
                        smallCircle: "circle",
                        smallSquare: "square",
                        landscape: "landscape",
                        card: "card"
                    },
                    snippet: {
                        none: 0,
                        short: 100,
                        long: 300
                    },
                    titleLength: {
                        one: 999,
                        two: 100,
                        three: 68,
                        four: 68
                    }
                },
                J = function() {
                    function e(t) {
                        (0, m.default)(this, e);
                        var a = t.split("-");
                        this.columns = a[0], this.thumbnail = a[1], this.snippet = a[2], this.showCategoryTabs = V[a[3]]
                    }
                    return (0, y.default)(e, [{
                        key: "serialize",
                        value: function() {
                            var e = this.columns,
                                t = this.thumbnail,
                                a = this.snippet,
                                n = this.showCategoryTabs;
                            return [e, t, a, V[n]].join("-")
                        }
                    }, {
                        key: "getAllColumns",
                        value: function() {
                            return W
                        }
                    }, {
                        key: "getThumbnailSelectItem",
                        value: function() {
                            var e = H();
                            return "one" === this.columns ? e.columnOne.thumbnail : e.columnOther.thumbnail
                        }
                    }, {
                        key: "getSnippetSelectItem",
                        value: function() {
                            var e = H();
                            return "one" === this.columns ? e.columnOne.snippet : e.columnOther.snippet[this.thumbnail]
                        }
                    }, {
                        key: "isRowAndLandscapeThumbnail",
                        value: function() {
                            return "one" === this.columns && "landscape" === this.thumbnail
                        }
                    }, {
                        key: "isRowAndNoneThumbnail",
                        value: function() {
                            return "one" === this.columns && "none" === this.thumbnail
                        }
                    }, {
                        key: "isColumnsAndCard",
                        value: function() {
                            return "one" !== this.columns && "card" === this.thumbnail
                        }
                    }, {
                        key: "isColumns",
                        value: function() {
                            return "one" !== this.columns
                        }
                    }, {
                        key: "getLayoutClass",
                        value: function() {
                            var e;
                            return "one" === this.columns ? "s-layout-row s-avatar-".concat(K.thumbnail[this.thumbnail]) : (0, S.default)(e = "s-layout-columns ".concat(this.columns, "  s-avatar-")).call(e, K.thumbnail[this.thumbnail])
                        }
                    }]), e
                }(),
                Q = {},
                X = {
                    default: {
                        A: "one-smallCircle-long-none",
                        B: "one-smallCircle-none-none",
                        C: "one-none-long-none",
                        D: "one-landscape-short-none",
                        E: "one-landscape-long-none",
                        F: "three-landscape-short-none"
                    },
                    glow: {
                        A: "one-smallCircle-long-none",
                        B: "one-smallCircle-none-none",
                        C: "one-none-long-none",
                        D: "one-landscape-short-none",
                        E: "one-landscape-long-none",
                        F: "three-landscape-short-none",
                        G: "three-card-none-none"
                    }
                },
                $ = {
                    getDefaultLayoutKey: function(e, t) {
                        var a;
                        return t ? (a = (X[e] || X.default)[t]) || (a = t) : a = X.default.A, a
                    },
                    getLayout: function(e, t) {
                        var a = this.parseLayoutVariation(t);
                        return function() {
                            var n, o = (0, S.default)(n = "".concat(e, "-")).call(n, t);
                            if (Q[o]) return Q[o];
                            var l = {
                                showCategoryTabs: a.showCategoryTabs,
                                isRowAndLandscapeThumbnail: a.isRowAndLandscapeThumbnail(),
                                layoutClass: a.getLayoutClass(),
                                isColumns: a.isColumns(),
                                snippetLength: K.snippet[a.snippet],
                                isColumnsAndCard: a.isColumnsAndCard(),
                                isRowAndNoneThumbnail: a.isRowAndNoneThumbnail(),
                                titleLength: K.titleLength[a.columns]
                            };
                            return Q[o] = l, l
                        }
                    },
                    getNewLayout: function(e, t) {
                        if (!e) return {};
                        var a = this.parseLayoutVariation(t),
                            n = this.getColumnsClassname(),
                            o = e.get("structure"),
                            l = e.get("imageShape"),
                            i = "rows" !== o;
                        return {
                            showCategoryTabs: a.showCategoryTabs,
                            isRowAndLandscapeThumbnail: !i && "circle" !== l && "none" !== l,
                            layoutClass: this.getNewLayoutClass(e),
                            isColumns: i,
                            snippetLength: K.snippet[e.get("snippetLength")],
                            isColumnsAndCard: "card" === o,
                            isRowAndNoneThumbnail: !i && "none" === l,
                            titleLength: K.titleLength[n[e.get("columns") - 1]]
                        }
                    },
                    parseLayoutVariation: function(e) {
                        return new J(e)
                    },
                    getLayoutOptions: function() {
                        return Z
                    },
                    getOldLayoutOptions: function(e) {
                        var t = X[e] || X.default;
                        return (0, w.default)(t)
                    },
                    getArchiveDialogClass: function(e) {
                        var t = this.parseLayoutVariation(e);
                        return "s-avatar-".concat(K.thumbnail[t.thumbnail])
                    },
                    getNewLayoutClass: function(e) {
                        var t, a, n = this.getColumnsClassname(),
                            o = e.get("columns"),
                            l = e.get("columns_mobile"),
                            i = e.get("structure"),
                            r = e.get("imageShape"),
                            u = (0, S.default)(t = (0, S.default)(a = "s-blog-new-layout s-blog-new-layout-".concat(i, " ")).call(a, n[o - 1], " ")).call(t, (0, N.default)(U).call(U, i) && l ? "mobile-".concat(l, "-columns mobile-columns") : "");
                        return "rows" === i ? (u += " s-layout-row", "perspective" === x.default.getThemeName() && (u += " s-blog-entry-wide-margin")) : u += " s-layout-columns", "none" !== r && "circle" !== r && (u += " s-avatar-landscape"), "card" === i && (u += " s-avatar-card"), (0, k.default)(e).call(e, (function(e, t) {
                            var a;
                            j[t] && (u += (0, S.default)(a = " ".concat(j[t], "-")).call(a, e))
                        })), u
                    },
                    getNewLayoutConfigByVariation: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = e.split("-") || [],
                            a = {
                                imageShape: "none",
                                columns: W[t[0]] || 3,
                                snippetLength: "short",
                                customized: !0,
                                imageSize: "m",
                                imageAlignment: "left"
                            };
                        return "one" === t[0] ? (a.structure = "rows", a.columns = 1, a.templateName = "D", "smallSquare" === t[1] && (a.imageShape = "square", a.imageSize = "s", a.templateName = "A"), "smallCircle" === t[1] ? (a.imageShape = "circle", a.templateName = "A") : "landscape" === t[1] && (a.imageShape = "landscape-16-9", a.templateName = "A", a.imageAlignment = "right")) : "card" === t[1] ? (a.structure = "card", a.templateName = "C", a.imageShape = "square") : (a.structure = "grid", a.imageShape = "landscape-16-9", a.templateName = "B"), "none" === t[2] && (a.snippetLength = "none"), "long" === t[2] && (a.snippetLength = "long"), "three" === t[0] && "none" === t[2] && (a.customized = !1), a
                    },
                    getNewLayoutConfigByTemplate: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = [{
                                templateName: "A",
                                structure: "rows",
                                imageShape: "landscape-4-3",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 1,
                                snippetLength: "short",
                                customized: !1,
                                textAlignment: t ? "right" : "left"
                            }, {
                                templateName: "B",
                                structure: "grid",
                                imageShape: "square",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 3,
                                snippetLength: "short",
                                customized: !1,
                                textAlignment: t ? "right" : "left"
                            }, {
                                templateName: "C",
                                structure: "card",
                                imageShape: "square",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 3,
                                snippetLength: "none",
                                customized: !1,
                                textAlignment: t ? "right" : "left"
                            }, {
                                templateName: "D",
                                structure: "rows",
                                imageShape: "none",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 1,
                                snippetLength: "short",
                                customized: !1,
                                textAlignment: t ? "right" : "left"
                            }, {
                                templateName: "E",
                                structure: "grid",
                                imageShape: "landscape-16-9",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 1,
                                snippetLength: "short",
                                customized: !1,
                                textAlignment: t ? "right" : "left"
                            }, {
                                templateName: "F",
                                structure: "tiled",
                                imageShape: "square",
                                imageAlignment: "left",
                                imageSize: "m",
                                columns: 3,
                                snippetLength: "none",
                                customized: !1,
                                textAlignment: "auto"
                            }];
                        return (0, L.default)(a).call(a, (function(t) {
                            return t.templateName === e
                        })) || {}
                    },
                    getNewLayoutTemplates: function() {
                        return [{
                            name: "A",
                            template: r || (r = (0, p.default)(B.default.Fragment, {}, void 0, (0, p.default)("div", {
                                className: "left"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            })), (0, p.default)("div", {
                                className: "right"
                            }, void 0, (0, p.default)("div", {
                                className: "title"
                            }), (0, p.default)("div", {
                                className: "subtitle"
                            }))))
                        }, {
                            name: "B",
                            template: u || (u = (0, p.default)(B.default.Fragment, {}, void 0, (0, p.default)("div", {
                                className: "left"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "title"
                            })), (0, p.default)("div", {
                                className: "right"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "title"
                            }))))
                        }, {
                            name: "C",
                            template: s || (s = (0, p.default)(B.default.Fragment, {}, void 0, (0, p.default)("div", {
                                className: "left"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "title"
                            })), (0, p.default)("div", {
                                className: "right"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "title"
                            }))))
                        }, {
                            name: "D",
                            template: c || (c = (0, p.default)("div", {
                                className: "layout-template-d"
                            }, void 0, (0, p.default)("div", {
                                className: "title"
                            }), (0, p.default)("div", {
                                className: "title"
                            })))
                        }, {
                            name: "E",
                            template: d || (d = (0, p.default)(B.default.Fragment, {}, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "title"
                            })))
                        }, {
                            name: "F",
                            template: f || (f = (0, p.default)(B.default.Fragment, {}, void 0, (0, p.default)("div", {
                                className: "left"
                            }, void 0, (0, p.default)("div", {
                                className: "block"
                            }), (0, p.default)("div", {
                                className: "block small"
                            })), (0, p.default)("div", {
                                className: "right"
                            }, void 0, (0, p.default)("div", {
                                className: "block small"
                            }), (0, p.default)("div", {
                                className: "block"
                            }))))
                        }]
                    },
                    getNewLayoutOptions: function(e) {
                        return (0, M.getLayoutOptions)(e, Y)
                    },
                    getColumnsClassname: function() {
                        return ["one", "two", "three", "four"]
                    },
                    getAvailableMobileLayouts: function() {
                        return U
                    },
                    getMobileLayoutOptions: function(e) {
                        return (0, M.getLayoutOptions)(e, F)
                    }
                };
            t.default = $, e.exports = t.default
        },
        766463: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(223765),
                i = (0, o.default)(l);
            t.getLayoutMapping = function(e) {
                var t, a = {};
                return (0, u.default)(t = (0, c.default)(e)).call(t, (function(t) {
                    return a[t] = (n = e[t], o = {}, function e() {
                        var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        (0, u.default)(t = (0, c.default)(a)).call(t, (function(t) {
                            var l = n + (n ? "-".concat(t) : t),
                                r = a[t];
                            "object" !== (0, i.default)(r) ? o[l] = r: e(l, r)
                        }))
                    }("", n), o);
                    var n, o
                })), a
            }, t.getThemeName = L, t.getThemeFeature = O, t.generateColumnClassWithOffset = B, t.generateColumnClass = A, t.generateItemClassByColumnsNum = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = 16,
                    n = L(),
                    o = "";
                if ("persona" === n) o = 4 === e ? "three columns half-fixed" : 5 === e ? "spfive columns half-fixed" : 6 === e ? "two columns half-fixed" : A(12 / e);
                else switch (e) {
                    case 1:
                        o = O("narrowMedia") ? t ? A(14) : B(14, 14) : A(a);
                        break;
                    case 3:
                        o = "third columns";
                        break;
                    case 4:
                        o = "four columns half-fixed";
                        break;
                    case 5:
                        o = "fifth columns half-fixed";
                        break;
                    case 6:
                        o = "sixth columns half-fixed";
                        break;
                    default:
                        o = A(a / e)
                }
                return "".concat(o, " no-float")
            }, t.getClosestKey = function(e, t, a) {
                for (var n = t.split("-"), o = e, l = "", i = "", r = 0, u = n.length; r < u; r++) {
                    if (!o[i = n[r]]) {
                        if (r >= 1) {
                            for (var s = r; s < a; s++) o = o[i = (0, c.default)(o)[0]], l += "".concat(i, "-");
                            break
                        }
                        return ""
                    }
                    o = o[i], l += "".concat(i, "-")
                }
                if ((0, c.default)(o).length)
                    for (var d = n.length; d < a; d++) o = o[i = (0, c.default)(o)[0]], l += "".concat(i, "-");
                return l.replace(/-$/, "")
            }, t.removeOldBackgroundForText = function(e) {
                var t, n = a(225425),
                    o = a(971638),
                    l = L(),
                    i = e,
                    r = i.getDefaultBinding().get("template_name"),
                    u = i._getLayoutBinding().get("layout_variation");
                n.getLayoutMapping(l)[u] || "text" !== r || (0, p.default)(t = ["persona", "perspective"]).call(t, l) || i.getComponentBinding("background1").merge(E.default.fromJS(o.dataForEmptyBackground()))
            }, t.getLayoutOptions = function(e, t) {
                var a = (0, S.default)(t).call(t, (function(t) {
                    var a = t.visible,
                        n = t.children;
                    return !a || x(e, a) ? (0, w.default)({}, t, {
                        children: M(e, n)
                    }) : null
                }));
                return (0, T.default)(a).call(a, (function(e) {
                    return Boolean(e)
                }))
            }, t.saveNewLayoutConfig = function(e, t) {
                e.merge(E.default.fromJS(t))
            }, t.adjustImageSize = function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = e.outerWidth() || 0,
                    o = e.outerHeight() || 0,
                    l = n / o,
                    i = t.prop("naturalWidth"),
                    r = t.prop("naturalHeight"),
                    u = i / r || 4 / 3;
                if (l > u) {
                    var s = n + 10,
                        c = s / u;
                    t.width(s), t.height(c), t.css({
                        top: "".concat((o - c) / 2, "px")
                    }), a ? t.css({
                        right: "".concat((n - s) / 2, "px")
                    }) : t.css({
                        left: "".concat((n - s) / 2, "px")
                    })
                } else {
                    var d = o + 10,
                        f = d * u;
                    t.height(d), t.width(f), t.css({
                        top: "".concat((o - d) / 2, "px")
                    }), a ? t.css({
                        right: "".concat((n - f) / 2, "px")
                    }) : t.css({
                        left: "".concat((n - f) / 2, "px")
                    })
                }
            }, a(974916), a(323123), a(115306);
            var r = a(778914),
                u = (0, o.default)(r),
                s = a(686902),
                c = (0, o.default)(s),
                d = a(977766),
                f = (0, o.default)(d),
                g = a(678580),
                p = (0, o.default)(g),
                h = a(277149),
                m = (0, o.default)(h),
                v = a(981643),
                y = (0, o.default)(v),
                b = a(620116),
                T = (0, o.default)(b),
                C = a(2991),
                S = (0, o.default)(C),
                _ = a(51942),
                w = (0, o.default)(_),
                P = a(496486),
                N = ((0, o.default)(P), a(143393)),
                E = (0, o.default)(N),
                k = {
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4,
                    five: 5,
                    six: 6,
                    seven: 7,
                    eight: 8,
                    nine: 9,
                    ten: 10,
                    eleven: 11,
                    twelve: 12,
                    thirteen: 13,
                    fourteen: 14,
                    fifteen: 15,
                    sixteen: 16
                };
            for (var I in k) k[k[I]] = I;

            function L() {
                return a(234584).getThemeName()
            }

            function O(e) {
                var t = a(843296).get(L());
                return t && t.features && t.features[e]
            }

            function B(e) {
                var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16,
                    o = Math.floor((n - a) / 2);
                return (0, f.default)(t = "".concat(k[e], " columns ")).call(t, o ? "offset-".concat(k[o]) : "")
            }

            function A(e) {
                return "".concat(k[e], " columns")
            }

            function x(e, t) {
                return !(0, m.default)(t).call(t, (function(t) {
                    var a = t.type,
                        n = t.value;
                    return n && -1 === (0, y.default)(n).call(n, e.get(a))
                }))
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, T.default)(t).call(t, (function(t) {
                    var a = t.visible;
                    return !a || x(e, a)
                }))
            }
        },
        225425: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), a(974916), a(323123);
            var i = a(51942),
                r = (0, l.default)(i),
                u = a(981643),
                s = (0, l.default)(u),
                c = a(686902),
                d = (0, l.default)(c),
                f = a(818166),
                g = (0, l.default)(f),
                p = a(766463),
                h = "automatic",
                m = [{
                    key: "columns_mobile",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: h,
                        label: function() {
                            return n("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }],
                    defaultValue: h
                }],
                v = {
                    repeatableClass: "",
                    itemClass: "",
                    textClass: "",
                    buttonClass: ""
                },
                y = {
                    repeatable: "".concat(g.default.getCanUseSectionImprovementsPart1() ? "s-info-repeatable" : "s-mh"),
                    text: "".concat(g.default.getCanUseSectionImprovementsPart1() ? "" : "s-mhi"),
                    box: "".concat(g.default.getCanUseSectionImprovementsPart1() ? "s-info-box border-box" : "s-mhi s-info-box"),
                    button: "s-text-button"
                };

            function b() {
                return v
            }

            function T(e) {
                return (0, r.default)({}, v, e)
            }

            function C(e) {
                var t = (0, p.generateItemClassByColumnsNum)(e.columnsNum, !0),
                    a = e.box ? y.box : y.text;
                return {
                    text: function() {
                        return T({
                            repeatableClass: y.repeatable,
                            itemClass: t,
                            textClass: a
                        })
                    },
                    button: function() {
                        return T({
                            repeatableClass: y.repeatable,
                            itemClass: t,
                            textClass: a,
                            buttonClass: y.button
                        })
                    }
                }
            }

            function S(e, t) {
                var a = e.getRepeatableBinding("repeatable1").get().size,
                    n = "";
                return n = a <= 2 || a % 2 && 0 == t ? "" : "half", 2 == a ? 0 == t && (n += " border-bottom") : (t < a - 2 && (n += " border-bottom"), t > 0 && t % 2 && a % 2 && (n += " border-right"), t % 2 || a % 2 || (n += " border-right")), a <= 4 && (n += " large-info-box"), "s-persp-column s-mhi ".concat(n)
            }

            function _(e, t) {
                return "s-persp-container absolute ".concat(["topRight", "bottomLeft", "bottomRight"][t])
            }

            function w(e) {
                return function(t, a) {
                    var n = t,
                        o = n.getRepeatableBinding("repeatable1").sub(a),
                        l = "";
                    return n.sbAnyHasContent("text1 text2", {
                        parentBinding: o,
                        showOnly: !1
                    }) && (l = "s-persp-".concat(e)), l
                }
            }

            function P(e) {
                return {
                    text: function() {
                        return T({
                            itemClass: _,
                            textClass: w(e)
                        })
                    },
                    button: function() {
                        return T({
                            itemClass: _,
                            textClass: w(e),
                            buttonClass: y.button
                        })
                    }
                }
            }

            function N() {
                return {
                    text: function() {
                        return T({
                            repeatableClass: "s-mh",
                            itemClass: S,
                            textClass: "s-info-box"
                        })
                    },
                    button: function() {
                        return T({
                            repeatableClass: "s-mh",
                            itemClass: S,
                            textClass: "s-info-box",
                            buttonClass: "s-text-button"
                        })
                    }
                }
            }
            var E = {
                    default: {
                        text: {
                            one: C({
                                columnsNum: 1
                            }),
                            two: C({
                                columnsNum: 2
                            }),
                            three: C({
                                columnsNum: 3
                            }),
                            four: C({
                                columnsNum: 4
                            })
                        },
                        box: {
                            one: C({
                                columnsNum: 1,
                                box: !0
                            }),
                            two: C({
                                columnsNum: 2,
                                box: !0
                            }),
                            three: C({
                                columnsNum: 3,
                                box: !0
                            }),
                            four: C({
                                columnsNum: 4,
                                box: !0
                            })
                        }
                    },
                    perspective: {
                        text: {
                            overlay: P("overlay"),
                            card: P("card")
                        },
                        box: {
                            center: N(),
                            mediaLeft: N(),
                            mediaRight: N()
                        }
                    }
                },
                k = (0, p.getLayoutMapping)(E),
                I = {
                    default: {
                        "1col": "box-one-text",
                        "2col": "box-two-text",
                        "3col": "box-three-text",
                        "4col": "box-four-text"
                    },
                    perspective: {
                        overlay: "text-overlay-text",
                        card: "text-card-text",
                        mediaLeft: "box-mediaLeft-text",
                        mediaRight: "box-mediaRight-text",
                        center: "box-center-text"
                    }
                },
                L = {
                    default: {
                        text: function(e) {
                            return "text-one-".concat(e)
                        },
                        box: function(e) {
                            return "box-two-".concat(e)
                        }
                    },
                    perspective: {
                        text: function(e) {
                            return "text-card-".concat(e)
                        },
                        box: function(e) {
                            return "box-center-".concat(e)
                        }
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t) {
                    var a = (I[e] || I.default)[t = t || ""];
                    if ((k[e] || k.default)[t] && (a = t), !a) {
                        var n = -1 !== (0, s.default)(t).call(t, "button") ? "button" : "text",
                            o = t.split("-")[0],
                            l = L[e] || L.default;
                        a = l[o] && l[o](n)
                    }
                    return a || (a = (0, d.default)(k[e] || k.default)[0]), a
                },
                getLayout: function(e, t) {
                    return (k[e] || k.default)[t] || b
                },
                getLayoutOptions: function(e) {
                    return E[e] || E.default
                },
                getLayoutMapping: function(e) {
                    return k[e] || k.default
                },
                getMobileLayoutOptions: function() {
                    return m
                }
            }, e.exports = t.default
        },
        386912: function(e, t, a) {
            var n = a(223765),
                o = a(752424),
                l = a(663978),
                i = a(834074);
            l(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var a = u(t);
                if (a && a.has(e)) return a.get(e);
                var o = {},
                    r = l && i;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var c = r ? i(e, s) : null;
                        c && (c.get || c.set) ? l(o, s, c) : o[s] = e[s]
                    }
                return o.default = e, a && a.set(e, o), o
            }(a(496486));

            function u(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (u = function(e) {
                    return e ? a : t
                })(e)
            }
            var s = {};

            function c(e, t) {
                return s[e][t] || t
            }

            function d(e, t, a, n) {
                return a > n ? t : r.reduce(t, (function(t, o, l) {
                    var i = o;
                    r.isPlainObject(o) ? i = d(e, o, a + 1, n) : r.isArray(o) && (i = r.map(o, (function(t) {
                        return d(e, t, a + 1, n)
                    }))), s[e] = s[e] || {};
                    var u = r.camelCase(l);
                    return function(e, t, a) {
                        s[e] = s[e] || {}, s[e][t] = a
                    }(e, u, l), t[u] = i, t
                }), {})
            }

            function f(e, t, a, n) {
                return a > n ? t : r.reduce(t, (function(t, o, l) {
                    var i = o;
                    return r.isPlainObject(o) ? i = f(e, o, a + 1, n) : r.isArray(o) && (i = r.map(o, (function(t) {
                        return f(e, t, a + 1, n)
                    }))), t[c(e, l)] = i, t
                }), {})
            }
            t.default = {
                getCache: function(e, t) {
                    return c(e, t)
                },
                convertToCamel: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return d(e, t, 0, a)
                },
                convertToSnake: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                        n = s[e];
                    return void 0 === n && console.error("".concat(e, " has to be converted to camel first before it can be used")), f(e, t, 0, a)
                }
            }, e.exports = t.default
        },
        879893: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(501068),
                i = a(686902),
                r = a(14310),
                u = a(620116),
                s = a(834074),
                c = a(778914),
                d = a(239649),
                f = a(820368),
                g = a(663978),
                p = a(752424),
                h = a(60530)(a(60530));
            g(t, "__esModule", {
                value: !0
            });
            var m, v, y, b, T, C = a(205872),
                S = (0, h.default)(C),
                _ = a(359036),
                w = (0, h.default)(_),
                P = a(812077),
                N = (0, h.default)(P),
                E = a(726394),
                k = (0, h.default)(E),
                I = a(569198),
                L = (0, h.default)(I),
                O = a(705824),
                B = (0, h.default)(O),
                A = a(351379),
                x = (0, h.default)(A),
                M = a(900214),
                D = (0, h.default)(M),
                R = a(566380),
                U = (0, h.default)(R),
                G = a(487672),
                F = (0, h.default)(G);
            a(974916), a(864765);
            var W = a(694473),
                V = (0, h.default)(W),
                z = a(54103),
                j = (0, h.default)(z),
                Y = a(933032),
                q = (0, h.default)(Y),
                H = a(981643),
                Z = (0, h.default)(H),
                K = a(492762),
                J = (0, h.default)(K),
                Q = a(703649),
                X = ((0, h.default)(Q), a(366757)),
                $ = (0, h.default)(X),
                ee = a(45697),
                te = (0, h.default)(ee),
                ae = a(223336),
                ne = (0, h.default)(ae),
                oe = a(143393),
                le = (0, h.default)(oe),
                ie = a(868309),
                re = (0, h.default)(ie),
                ue = a(755802),
                se = ((0, h.default)(ue), a(786483)),
                ce = ((0, h.default)(se), a(508962)),
                de = (0, h.default)(ce),
                fe = a(294184),
                ge = (0, h.default)(fe),
                pe = a(176965),
                he = (0, h.default)(pe),
                me = a(421522),
                ve = (0, h.default)(me),
                ye = a(109245),
                be = (0, h.default)(ye),
                Te = a(487628),
                Ce = (0, h.default)(Te),
                Se = a(183123),
                _e = (0, h.default)(Se),
                we = a(874346),
                Pe = (0, h.default)(we),
                Ne = a(77178),
                Ee = (0, h.default)(Ne),
                ke = a(344711),
                Ie = (0, h.default)(ke),
                Le = a(141655),
                Oe = ((0, h.default)(Le), a(234584)),
                Be = (0, h.default)(Oe),
                Ae = a(169042),
                xe = ((0, h.default)(Ae), a(549556)),
                Me = ((0, h.default)(xe), a(189745)),
                De = a(500134),
                Re = a(818166),
                Ue = (0, h.default)(Re),
                Ge = a(318592),
                Fe = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = je(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        l = g && s;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = l ? s(e, i) : null;
                            r && (r.get || r.set) ? g(n, i, r) : n[i] = e[i]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(792656)),
                We = a(442279),
                Ve = a(384887),
                ze = (0, h.default)(Ve);

            function je(e) {
                if ("function" != typeof p) return null;
                var t = new p,
                    a = new p;
                return (je = function(e) {
                    return e ? a : t
                })(e)
            }

            function Ye(e, t) {
                var a = i(e);
                if (r) {
                    var n = r(e);
                    t && (n = u(n).call(n, (function(t) {
                        return s(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var qe = (0, We.createSelector)([function(e) {
                    return e.categorizeTextColor
                }, function(e) {
                    return e.categorizeSelectedColor
                }, function(e) {
                    return e.categoryBarBorderColor
                }], (function(e, t, a) {
                    return (0, Ge.css)("&.s-blog-content-wrapper{.s-category-bar{border-color:", a, ";}.s-category-bar\n        .category-list\n        .category-link-item-wrapper\n        .category-link-item{color:", e, ";&.selected{color:", t, ";&:after{background:", t, ";}}}}")
                })),
                He = ve.default.decorate(he.default.Mixin)((y = v = function(e) {
                    (0, x.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, U.default)(t);
                        if (a) {
                            var o = (0, U.default)(this).constructor;
                            e = l(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, D.default)(this, e)
                    });

                    function i(e) {
                        var t, a;
                        return (0, k.default)(this, i), a = o.call(this, e), (0, F.default)((0, B.default)(a), "_getCategoryBarProps", (function() {
                            var e = a.constructor.sharedProps().getCategories;
                            return {
                                currentCategory: a.props.category.get("id"),
                                categories: e(),
                                changeCategory: a._changeCategory
                            }
                        })), (0, F.default)((0, B.default)(a), "handlePageViewTracking", (function(e) {
                            var t = a.props.sectionId,
                                n = (a.getPagination() || {}).totalCount,
                                o = a.state.isFetchingPosts;
                            (0, Me.trackMixpanelEventViaParent)("AI Site Builder - Page View - Blog Section", {
                                sectionId: t,
                                duration: e,
                                isFetchingPosts: o,
                                siteId: Be.default.getId(),
                                blogsLength: n
                            })
                        })), (0, F.default)((0, B.default)(a), "_onClickEditor", (function(e) {
                            var t = a.props.category;
                            a.constructor.sharedProps().openBlogManagerDialog(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a, n = null != arguments[t] ? arguments[t] : {};
                                    if (t % 2) c(a = Ye(Object(n), !0)).call(a, (function(t) {
                                        (0, F.default)(e, t, n[t])
                                    }));
                                    else if (d) f(e, d(n));
                                    else {
                                        var o;
                                        c(o = Ye(Object(n))).call(o, (function(t) {
                                            g(e, t, s(n, t))
                                        }))
                                    }
                                }
                                return e
                            }({
                                category: t.get("id")
                            }, e))
                        })), (0, F.default)((0, B.default)(a), "publishOpenSideMenuTabPanel", (function(e) {
                            (a._getPostsProps() || {}).showDummyData
                        })), (0, F.default)((0, B.default)(a), "postChangeListener", (function(e) {
                            e === a.props.category.get("id") && (a.forceUpdate(), (0, ne.default)(window).trigger("resize"))
                        })), (0, F.default)((0, B.default)(a), "categoriesChangeListener", (function() {
                            a.forceUpdate()
                        })), (0, F.default)((0, B.default)(a), "_changeCategory", (function(e) {
                            var t, o = a.constructor.sharedProps().getCategories;
                            if ("all" !== e) {
                                var l = o();
                                t = (0, V.default)(l).call(l, (function(t) {
                                    return t.id === e
                                }))
                            } else t = {
                                id: "all",
                                name: n("Section|All Categories")
                            };
                            a.getDefaultBinding().set("category", le.default.fromJS(t))
                        })), (0, F.default)((0, B.default)(a), "getIsShowComponentOverlay", (function() {
                            return (a._getPostsProps() || {}).showDummyData, !1
                        })), (0, F.default)((0, B.default)(a), "renderTooltipTilte", (function() {
                            return $.default.createElement($.default.Fragment, null, n("Editor|These sample posts won’t be shown on your live site. And the samples will be removed when you add your own posts."), b || (b = (0, N.default)("br", {})), n("Editor|Click here to add your own posts!"))
                        })), (0, F.default)((0, B.default)(a), "shouldUseDummy", (function() {
                            return !!a.props.templateDummyData || a.props.inSectionSelector && !a.props.isPreviewMode
                        })), a.state = {
                            isFetchingPosts: !1,
                            isShowBlogTooltip: !1
                        }, a.loadingChangeListener = (0, j.default)(t = a.loadingChangeListener).call(t, (0, B.default)(a)), a
                    }
                    return (0, L.default)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.constructor.sharedProps(),
                                a = (t.pageId, t.addBlogPostsChangeListener),
                                n = t.addBlogPostsLoadingStateListener,
                                o = t.addBlogCategoriesChangeListener,
                                l = this.props,
                                i = l.sectionId,
                                r = l.layoutSetting,
                                u = (r = void 0 === r ? {} : r).blogNumber;
                            l.inSectionSelector || (a(this.postChangeListener, i), o(this.categoriesChangeListener), this.fetchBlogCategories(), this.fetchPosts(1, u, i), (0, Me.getIsAISiteBuilderPreview)() && ((0, q.default)((function() {
                                return e.handlePageViewTracking(1e4)
                            }), 1e4), (0, q.default)((function() {
                                return e.handlePageViewTracking(15e3)
                            }), 15e3), (0, q.default)((function() {
                                return e.handlePageViewTracking(3e4)
                            }), 3e4)), n(this.loadingChangeListener, i))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                a = t.sectionId,
                                n = t.layoutSetting,
                                o = (n = void 0 === n ? {} : n).blogNumber;
                            if (!t.inSectionSelector) {
                                (e.category.get("id") || "all") !== (this.props.category.get("id") || "all") && this.fetchPosts(1, o, a);
                                var l = e.layoutSetting;
                                (l = void 0 === l ? {} : l).blogNumber !== o && this.fetchPosts(1, o, a)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.constructor.sharedProps(),
                                t = e.removeBlogPostsLoadingStateListener,
                                a = e.removeBlogPostsChangeListener,
                                n = e.removeBlogCategoriesChangeListener,
                                o = this.props,
                                l = o.sectionId;
                            o.inSectionSelector || (t(this.loadingChangeListener, l), a(this.postChangeListener, l), n(this.categoriesChangeListener))
                        }
                    }, {
                        key: "getPagination",
                        value: function() {
                            var e = this.props,
                                t = e.category,
                                a = e.sectionId,
                                n = e.layoutSetting,
                                o = (n = void 0 === n ? {} : n).blogNumber,
                                l = t.get("id"),
                                i = this.constructor.sharedProps().getPagination;
                            return o ? i(l, a) : i(l)
                        }
                    }, {
                        key: "_getPostsProps",
                        value: function() {
                            var e, t, a = this.props,
                                n = a.layout,
                                o = a.category,
                                l = a.sectionId,
                                i = a.layoutSetting,
                                r = (i = void 0 === i ? {} : i).blogNumber,
                                u = a.layoutConfig,
                                s = a.isPreviewMode,
                                c = this.constructor.sharedProps().getBlogShowDummyData,
                                d = o.get("id");
                            return t = r ? c(d, l) : c(d), {
                                layout: n,
                                category: o,
                                openArchiveDialog: (0, j.default)(e = this.openArchiveDialog).call(e, this),
                                layoutConfig: u,
                                showDummyData: t,
                                isPreviewMode: s
                            }
                        }
                    }, {
                        key: "_getFooterProps",
                        value: function() {
                            var e, t, a, n = this.props,
                                o = n.category,
                                l = n.componentsBinding;
                            return {
                                layoutConfig: n.layoutConfig,
                                fromBlogPage: this.context.fromBlogPage,
                                category: o,
                                isFetchingPosts: this.state.isFetchingPosts,
                                fetchPosts: (0, j.default)(e = this.fetchPosts).call(e, this),
                                openArchiveDialog: (0, j.default)(t = this.openArchiveDialog).call(t, this),
                                getPagination: (0, j.default)(a = this.getPagination).call(a, this),
                                componentsBinding: l
                            }
                        }
                    }, {
                        key: "_getLayoutObject",
                        value: function() {
                            var e = this.constructor.sharedProps().themeName,
                                t = this.props.layout;
                            return be.default.getLayout(e, t)()
                        }
                    }, {
                        key: "toggleTooltip",
                        value: function(e) {
                            (this._getPostsProps() || {}).showDummyData && this.setState({
                                isShowBlogTooltip: e
                            })
                        }
                    }, {
                        key: "loadingChangeListener",
                        value: function(e) {
                            this.setState({
                                isFetchingPosts: e
                            })
                        }
                    }, {
                        key: "fetchBlogCategories",
                        value: function() {
                            var e = this.constructor.sharedProps();
                            (0, e.fetchBlogCategories)(e.pageId, this.props.category.get("id"))
                        }
                    }, {
                        key: "fetchPosts",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "null",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                o = this.props.inSectionSelector;
                            if (!o && "audience_agent" !== Ie.default.getRole() && "store_manager" !== Ie.default.getRole()) {
                                var l = this.constructor.sharedProps(),
                                    i = l.fetchBlogPosts,
                                    r = l.pageId,
                                    u = _e.default.getIsPreview(),
                                    s = "";
                                if (!0 & u) {
                                    var c = window.location || {},
                                        d = c.search,
                                        f = void 0 === d ? "" : d; - 1 !== (0, Z.default)(f).call(f, "without_custom_code=true") && (s = "&without_custom_code=true")
                                }
                                this.setState({
                                    isFetchingPosts: !0
                                }), i(r, t, a, this.props.category.toJS(), !0, n, s).fail((function() {
                                    (0, Me.getIsAISiteBuilderPreview)() && (0, Me.trackMixpanelEventViaParent)("AI Site Builder - Fetch Blog Posts Failed", {
                                        sectionId: n,
                                        siteId: r
                                    }), e.props.onConnectionFailed()
                                })).always((function() {
                                    return e.setState({
                                        isFetchingPosts: !1
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "openArchiveDialog",
                        value: function(e, t) {
                            if (this.constructor.sharedProps().fromSiteToApp) return this.props.onClickTag(e);
                            var a = this.props,
                                n = a.layout,
                                o = "all" === a.category.get("id");
                            return (0, this.constructor.sharedProps().updateBlogArchiveDialog)(e, n, o, t), de.default.openDialog("blogArchiveDialog", {
                                shade: !1
                            }), null
                        }
                    }, {
                        key: "_getSpecialStyleByBg",
                        value: function() {
                            var e = (this.props.componentsBinding || {}).background1,
                                t = Ue.default.getCustomColors().highlight1,
                                a = (void 0 === t ? null : t) || "#613C93",
                                n = Fe.getColorInfoByBgData(e),
                                o = n.bgColor;
                            if (n.isImageOrVedio) return "";
                            var l = {
                                    categorizeTextColor: "#555555",
                                    categorizeSelectedColor: a,
                                    categoryBarBorderColor: "#555555"
                                },
                                i = Fe.getTextColorSettingsByBgColor(o, l);
                            return i.categorizeTextColor = new ze.default(i.categorizeTextColor).fade(.7).toRgba(), i.categoryBarBorderColor = new ze.default(i.categoryBarBorderColor).fade(.2).toRgba(), qe(i)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, o = this,
                                l = this.constructor.sharedProps(),
                                i = l.getPosts,
                                r = l.getShowMorePostsWith,
                                u = l.getCategories,
                                s = l.themeName,
                                c = this.props,
                                d = c.category,
                                f = c.sectionId,
                                g = c.layoutSetting,
                                p = (g = void 0 === g ? {} : g).blogNumber,
                                h = c.inSectionSelector,
                                m = c.templateDummyData,
                                v = (c.isPreviewMode, c.allBlogPosts, c.buttonAlignmentClassName),
                                y = this.state,
                                b = y.isFetchingPosts,
                                C = y.isShowBlogTooltip,
                                _ = u(),
                                P = this.getPagination(),
                                E = this._getLayoutObject().showCategoryTabs,
                                k = this.context.fromBlogPage,
                                I = r(),
                                L = (this._getPostsProps() || {}).showDummyData,
                                O = h && (p || 3) < (null == m ? void 0 : m.length),
                                B = p || 3;
                            a = p || L ? i(d.get("id"), f) : i(d.get("id")), h && m && (a = (0, w.default)(m) || []), !k && a && "pagination" !== I && (0, J.default)(a).call(a, B, a.length);
                            var A = "persona" !== s ? "columns sixteen" : "",
                                x = this._getSpecialStyleByBg();
                            return (0, N.default)("div", {
                                className: "s-blog-content-wrapper ".concat(x)
                            }, void 0, E && _.length > 0 && !h && $.default.createElement(Ce.default, this._getCategoryBarProps(), (0, N.default)("div", {
                                className: "s-component-editor-wrapper"
                            }, void 0, (0, N.default)("div", {
                                className: (0, ge.default)("s-component-overlay", {
                                    visible: _e.default.getInWeChat()
                                }),
                                onClick: function() {
                                    return o._onClickEditor({
                                        activeTab: "blogCategories",
                                        activeSettingsPane: "category"
                                    })
                                }
                            }, void 0, (0, N.default)("div", {
                                className: "overlay"
                            }, void 0, (0, N.default)("div", {
                                className: "center"
                            }, void 0, (0, N.default)("span", {}, void 0, n("Editor|Blog Categories"))))))), (0, N.default)("div", {
                                className: "s-component s-blog ".concat(A)
                            }, void 0, this.getIsShowComponentOverlay() && (0, N.default)("div", {
                                className: "s-component-editor-wrapper"
                            }, void 0, (0, N.default)("div", {
                                onMouseEnter: (0, j.default)(e = this.toggleTooltip).call(e, this, !0),
                                onMouseLeave: (0, j.default)(t = this.toggleTooltip).call(t, this, !1),
                                className: "s-component-overlay",
                                onClick: function() {
                                    return o._onClickEditor()
                                }
                            }, void 0, (0, N.default)("div", {
                                className: "center"
                            }, void 0, (0, N.default)(De.Tooltip, {
                                getPopupContainer: function(e) {
                                    return null == e ? void 0 : e.parentNode
                                },
                                destroyTooltipOnHide: !0,
                                visible: C,
                                title: this.renderTooltipTilte()
                            }, void 0, (0, N.default)("span", {}, void 0, n("Editor|Manage Blog Posts")))))), (0, N.default)("div", {
                                className: "s-blog-wrapper"
                            }, void 0, (0, N.default)("div", {
                                className: "s-blog-col-placeholder clearfix"
                            }, void 0, a ? $.default.createElement(Pe.default, (0, S.default)({
                                blogPosts: a
                            }, this._getPostsProps())) : T || (T = (0, N.default)("div", {
                                className: "s-loading"
                            })), (!b && P || O) && $.default.createElement(Ee.default, (0, S.default)({}, this._getFooterProps(), {
                                inSectionSelector: h,
                                buttonAlignmentClassName: v
                            }))))))
                        }
                    }]), i
                }($.default.Component), (0, F.default)(v, "contextTypes", {
                    fromBlogPage: te.default.bool
                }), m = y)) || m;
            He.defaultProps = {
                layout: "one-smallCircle-none-none",
                category: le.default.Map({
                    id: "all",
                    name: n("Section|All Categories")
                })
            }, He.WaypointLazy = (0, re.default)(He), t.default = He, e.exports = t.default
        },
        77178: function(e, t, a) {
            var n = a(353147),
                o = a(501068),
                l = a(663978),
                i = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var r, u = a(487672),
                s = (0, i.default)(u),
                c = a(812077),
                d = (0, i.default)(c),
                f = a(726394),
                g = (0, i.default)(f),
                p = a(569198),
                h = (0, i.default)(p),
                m = a(351379),
                v = (0, i.default)(m),
                y = a(900214),
                b = (0, i.default)(y),
                T = a(566380),
                C = (0, i.default)(T),
                S = a(54103),
                _ = (0, i.default)(S),
                w = a(366757),
                P = (0, i.default)(w),
                N = a(294184),
                E = (0, i.default)(N),
                k = a(45697),
                I = ((0, i.default)(k), a(805803)),
                L = a(183123),
                O = (0, i.default)(L),
                B = a(818166),
                A = (0, i.default)(B),
                x = a(62431),
                M = a(604990),
                D = (0, i.default)(M),
                R = a(513495),
                U = (0, i.default)(R),
                G = a(316913);
            var F = function(e) {
                (0, v.default)(i, e);
                var t, a, l = (t = i, a = function() {
                    if ("undefined" == typeof Reflect || !o) return !1;
                    if (o.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, C.default)(t);
                    if (a) {
                        var l = (0, C.default)(this).constructor;
                        e = o(n, arguments, l)
                    } else e = n.apply(this, arguments);
                    return (0, b.default)(this, e)
                });

                function i() {
                    return (0, g.default)(this, i), l.apply(this, arguments)
                }
                return (0, h.default)(i, [{
                    key: "loadMorePosts",
                    value: function() {
                        var e = this.props.getPagination(),
                            t = (e && e.currentPage || 0) + 1;
                        this.props.fetchPosts(t)
                    }
                }, {
                    key: "goToPage",
                    value: function(e) {
                        var t = this.props.getPagination().perPage,
                            a = this.constructor.sharedProps().themeName;
                        this.props.fetchPosts(e, t), "persona" !== a && (window.location = "#blog")
                    }
                }, {
                    key: "needToShowFooter",
                    value: function() {
                        var e = (0, this.constructor.sharedProps().getShowMorePostsWith)(),
                            t = this.props.getPagination();
                        return !this.props.inSectionSelector && ("pagination" === e ? t.totalPages > 1 : t.currentPage < t.totalPages)
                    }
                }, {
                    key: "renderPagination",
                    value: function() {
                        var e, t, a = this.props.getPagination(),
                            o = a.currentPage,
                            l = a.totalPages,
                            i = Math.min(l, 10);
                        o + 3 > i && (i = Math.min(l, o + 3));
                        for (var r = [], u = 1; u < i + 1; u++) {
                            var s;
                            r.push((0, d.default)("li", {}, u, (0, d.default)("a", {
                                className: u === o ? "s-blog-link s-blog-pagination-page active" : "s-blog-link s-blog-pagination-page ",
                                onClick: (0, _.default)(s = this.goToPage).call(s, this, u)
                            }, void 0, u), " "))
                        }
                        return r.length > 1 && (0, d.default)("div", {
                            className: "s-blog-col-foot s-font-body"
                        }, void 0, o > 1 ? (0, d.default)("a", {
                            className: "s-blog-link s-blog-next-link",
                            onClick: (0, _.default)(e = this.goToPage).call(e, this, o - 1)
                        }, void 0, n("Blog|Newer")) : "", " ", (0, d.default)("ul", {
                            className: "ul s-blog-pagination"
                        }, void 0, r), " ", o < l ? (0, d.default)("a", {
                            className: "s-blog-link s-blog-prev-link",
                            onClick: (0, _.default)(t = this.goToPage).call(t, this, o + 1)
                        }, void 0, n("Blog|Older")) : "")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.constructor.sharedProps(),
                            t = e.getShowMorePostsWith,
                            a = e.fromSiteToApp,
                            o = this.props,
                            l = o.category,
                            i = o.fromBlogPage,
                            u = o.isFetchingPosts,
                            c = o.openArchiveDialog,
                            f = o.componentsBinding,
                            g = o.buttonAlignmentClassName,
                            p = o.layoutConfig,
                            h = l.get("id"),
                            m = l.get("name"),
                            v = t();
                        if (!this.needToShowFooter()) return null;
                        if ("pagination" === v) return this.renderPagination();
                        if (a) return i ? u ? r || (r = (0, d.default)("i", {
                            className: "fa fa-spin fa-spinner"
                        })) : (0, d.default)("span", {
                            className: "s-common-button s-small-button s-font-body",
                            onClick: this.loadMorePosts
                        }, void 0, n("Blog|More Posts")) : (0, d.default)(I.Link, {
                            className: "s-common-button s-small-button s-font-body",
                            to: "/blog/page?category=".concat(h)
                        }, void 0, n("Blog|More Posts"));
                        var y = A.default.getCanUseSectionImprovementsPart1(),
                            b = "rows" === (null == p ? void 0 : p.get("structure"));
                        return (0, d.default)("div", {
                            className: (0, E.default)("s-blog-col-foot", (0, s.default)({}, b ? "center" : g, y))
                        }, void 0, (0, d.default)(U.default, {
                            component: "span",
                            className: "s-common-button s-small-button s-font-body",
                            sectionStyleProps: f,
                            onClick: (0, _.default)(c).call(c, this, "all" === h ? void 0 : m, h)
                        }, void 0, (0, G.translateBySiteLang)("Blog|More Posts", n("Blog|More Posts"))))
                    }
                }]), i
            }(P.default.Component);
            F.sharedProps = (0, x.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                return {
                    fromSiteToApp: O.default.getFromSiteToApp(),
                    getShowMorePostsWith: D.default.getShowMorePostsWith
                }
            })), t.default = F, e.exports = t.default
        },
        874346: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(501068),
                i = a(686902),
                r = a(14310),
                u = a(620116),
                s = a(834074),
                c = a(778914),
                d = a(239649),
                f = a(820368),
                g = a(663978),
                p = a(752424),
                h = a(60530)(a(60530));
            g(t, "__esModule", {
                value: !0
            });
            var m, v, y, b, T, C, S, _, w = a(205872),
                P = (0, h.default)(w),
                N = a(812077),
                E = (0, h.default)(N),
                k = a(487672),
                I = (0, h.default)(k),
                L = a(359036),
                O = (0, h.default)(L),
                B = a(726394),
                A = (0, h.default)(B),
                x = a(569198),
                M = (0, h.default)(x),
                D = a(351379),
                R = (0, h.default)(D),
                U = a(900214),
                G = (0, h.default)(U),
                F = a(566380),
                W = (0, h.default)(F);
            a(974916), a(115306), a(804723), a(323123);
            var V = a(981643),
                z = (0, h.default)(V),
                j = a(703649),
                Y = (0, h.default)(j),
                q = a(344494),
                H = (0, h.default)(q),
                Z = a(778914),
                K = (0, h.default)(Z),
                J = a(977766),
                Q = (0, h.default)(J),
                X = a(2991),
                $ = (0, h.default)(X),
                ee = a(678580),
                te = (0, h.default)(ee),
                ae = a(54103),
                ne = (0, h.default)(ae),
                oe = a(366757),
                le = (0, h.default)(oe),
                ie = a(294184),
                re = (0, h.default)(ie),
                ue = a(45697),
                se = ((0, h.default)(ue), a(496486)),
                ce = (0, h.default)(se),
                de = a(476914),
                fe = (0, h.default)(de),
                ge = (Fe(a(143268)), a(743050)),
                pe = (0, h.default)(ge),
                he = Fe(a(144726)),
                me = a(223336),
                ve = (0, h.default)(me),
                ye = a(607947),
                be = (0, h.default)(ye),
                Te = a(937195),
                Ce = (0, h.default)(Te),
                Se = a(43138),
                _e = (0, h.default)(Se),
                we = a(109245),
                Pe = (0, h.default)(we),
                Ne = a(62431),
                Ee = a(183123),
                ke = (0, h.default)(Ee),
                Ie = a(234584),
                Le = (0, h.default)(Ie),
                Oe = a(680523),
                Be = ((0, h.default)(Oe), a(604990)),
                Ae = (0, h.default)(Be),
                xe = a(500134),
                Me = Fe(a(818166)),
                De = a(316913),
                Re = a(595386),
                Ue = (0, h.default)(Re);

            function Ge(e) {
                if ("function" != typeof p) return null;
                var t = new p,
                    a = new p;
                return (Ge = function(e) {
                    return e ? a : t
                })(e)
            }

            function Fe(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var a = Ge(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    l = g && s;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var r = l ? s(e, i) : null;
                        r && (r.get || r.set) ? g(n, i, r) : n[i] = e[i]
                    }
                return n.default = e, a && a.set(e, n), n
            }

            function We(e, t) {
                var a = i(e);
                if (r) {
                    var n = r(e);
                    t && (n = u(n).call(n, (function(t) {
                        return s(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function Ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) c(a = We(Object(n), !0)).call(a, (function(t) {
                        (0, I.default)(e, t, n[t])
                    }));
                    else if (d) f(e, d(n));
                    else {
                        var o;
                        c(o = We(Object(n))).call(o, (function(t) {
                            g(e, t, s(n, t))
                        }))
                    }
                }
                return e
            }
            var ze = xe.Tag.Tag,
                je = Pe.default.getColumnsClassname(),
                Ye = Pe.default.getAvailableMobileLayouts(),
                qe = ["grid", "card", "tiled"],
                He = /(width=')([0-9]+)/i,
                Ze = /(height=')([0-9]+)/i,
                Ke = (0, Ue.default)("div", {
                    target: "css-7ru1ji0"
                })(".s-blog-entry.s-blog-new-layout.s-layout-columns.s-avatar-landscape\n    .s-blog-avatar-container{padding-bottom:", (function(e) {
                    return e.renderPercentage
                }), "%;height:100%;}"),
                Je = function(e) {
                    (0, R.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, W.default)(t);
                        if (a) {
                            var o = (0, W.default)(this).constructor;
                            e = l(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, G.default)(this, e)
                    });

                    function i() {
                        return (0, A.default)(this, i), o.apply(this, arguments)
                    }
                    return (0, M.default)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            (0, ve.default)(window).resize(be.default.debounce((function() {
                                return e.forceUpdate()
                            }), 200))
                        }
                    }, {
                        key: "getHeaderBackgroundImageUrl",
                        value: function(e) {
                            var t = e.headerImage,
                                a = "";
                            return t.storageKey ? a = he.createImage(t).getUrlWithoutFocus(this._getImageSize()) : "!" !== t.url && (a = t.url), a
                        }
                    }, {
                        key: "getFirstContentImageUrl",
                        value: function(e) {
                            var t = e.firstContentImage,
                                a = "";
                            return t && (a = he.createImage(t).getUrl(this._getImageSize())), a
                        }
                    }, {
                        key: "_getImageSize",
                        value: function() {
                            var e = ke.default.getIsNewBlogLayout(),
                                t = this.props.layoutConfig;
                            return ["540x540>", "2000x2000>", "1440x1440>", "1080x1080>", "1080x1080>"][e ? t && t.get("columns") : 0]
                        }
                    }, {
                        key: "_getLayoutObject",
                        value: function() {
                            var e = this.constructor.sharedProps().themeName,
                                t = this.props,
                                a = t.layout,
                                n = t.layoutConfig;
                            return ke.default.getIsNewBlogLayout() && n ? Pe.default.getNewLayout(n, a) : Pe.default.getLayout(e, a)()
                        }
                    }, {
                        key: "linkToPost",
                        value: function(e) {
                            this.constructor.sharedProps().isPreview, this._getLayoutObject().isColumnsAndCard && (window.location.href = e)
                        }
                    }, {
                        key: "transformBlurb",
                        value: function(e) {
                            var t = this._getLayoutObject().snippetLength,
                                a = 0 === (0, z.default)(e).call(e, "\\n") ? (0, Y.default)(e).call(e, 2) : e;
                            return a = a.replace(/(\\n)+/g, " "), 0 === t ? "" : ce.default.truncate(a, {
                                length: t,
                                separator: /\W/
                            })
                        }
                    }, {
                        key: "transformTitle",
                        value: function(e, t) {
                            var a = /[^\x00-\xff]/g;
                            if (e.replace(a, "mm").length <= t) return e;
                            for (var n = 0, o = 1; o < e.length && (n = o, !(e.substr(0, o).replace(a, "mm").length >= t)); o++);
                            if (/[A-Za-z]/.test(e[n - 1]))
                                for (var l = /\W/, i = n + 1; i < e.length; i++)
                                    if (l.test(e[i])) {
                                        n = i;
                                        break
                                    }
                            return "".concat(e.substr(0, n), "...")
                        }
                    }, {
                        key: "_getTiledList",
                        value: function() {
                            var e = this.props,
                                t = e.blogPosts,
                                a = e.layoutConfig,
                                n = [],
                                o = [],
                                l = a && a.get("columns");
                            return l ? (n.length = l, o.length = l, (0, H.default)(n).call(n, []), (0, H.default)(o).call(o, 0), (0, K.default)(t).call(t, (function(e) {
                                var t, a = (0, z.default)(o).call(o, Math.min.apply(Math, o));
                                if (-1 !== a) {
                                    var l = e.headerImage,
                                        i = l.w,
                                        r = l.h,
                                        u = l.videoHtml,
                                        s = void 0 === u ? "" : u;
                                    if (!i && !r) {
                                        var c = s && s.match(He),
                                            d = s && s.match(Ze);
                                        i = c ? c[2] : null, r = d ? d[2] : null
                                    }
                                    var f = (r || 1) / (i || 1) * 100;
                                    _e.default.isSmallScreen() && (f = 0), o[a] += f + 30, n[a] = (0, Q.default)(t = []).call(t, (0, O.default)(n[a]), [Ve(Ve({}, e), {}, {
                                        renderPercentage: f
                                    })])
                                }
                            })), n) : []
                        }
                    }, {
                        key: "_renderThumbnail",
                        value: function(e) {
                            var t, a, n = this._getLayoutObject().isRowAndLandscapeThumbnail,
                                o = this.getHeaderBackgroundImageUrl(e),
                                l = this.getFirstContentImageUrl(e);
                            t = n ? l || o : o || l;
                            var i = n && t === l ? "s-blog-whole-avatar s-blog-avatar" : "s-blog-avatar";
                            return a = _e.default.isSmallScreen() ? (0, E.default)("div", {
                                className: i,
                                style: {
                                    backgroundImage: "url(".concat(t.replace(".mp4", ".jpg"), ")")
                                }
                            }) : /\.mp4$/.test(t) ? (0, E.default)("div", {
                                className: i
                            }, void 0, (0, E.default)("video", {
                                src: t,
                                autoPlay: "true",
                                muted: "true",
                                loop: "true",
                                width: "100%"
                            })) : (0, E.default)("div", {
                                className: i,
                                style: {
                                    backgroundImage: "url(".concat(t, ")")
                                }
                            }), t ? a : m || (m = (0, E.default)("div", {
                                className: "s-blog-default-avatar s-blog-avatar"
                            }, void 0, (0, E.default)("div", {
                                className: "entypo-bookmark"
                            })))
                        }
                    }, {
                        key: "_renderNoPost",
                        value: function() {
                            var e = this.props;
                            return e.isPreviewMode, e.category.get("id"), (0, E.default)("div", {
                                className: "s-blog-col-body s-blog-no-posts"
                            }, void 0, (0, E.default)("div", {
                                className: "s-common-status s-font-body no-posts-error"
                            }, void 0, (0, E.default)("div", {}, void 0, n("Blog|There are no published blog posts yet."))))
                        }
                    }, {
                        key: "renderTiledList",
                        value: function() {
                            var e = this,
                                t = this._getTiledList(),
                                a = this.props.layoutConfig,
                                n = a.get("columns_mobile"),
                                o = a.get("structure");
                            return (0, $.default)(t).call(t, (function(t, l) {
                                var i;
                                return (0, E.default)("div", {
                                    className: (0, Q.default)(i = "tiled-columns s-blog-entry s-layout-columns ".concat(je[a.get("columns") - 1] || "one", " ")).call(i, (0, te.default)(Ye).call(Ye, o) && n ? "mobile-".concat(n, "-columns mobile-columns") : "")
                                }, "tiled-column-".concat(l), (0, $.default)(t).call(t, (function(t, a) {
                                    var n = t.renderPercentage;
                                    return (0, E.default)(Ke, {
                                        renderPercentage: n
                                    }, "blog-post-item-".concat(a), e.renderItem(t))
                                })))
                            }))
                        }
                    }, {
                        key: "getInheritAlignClassName",
                        value: function() {
                            var e = this.props.layoutConfig,
                                t = null == e ? void 0 : e.get("structure"),
                                a = (0, te.default)(qe).call(qe, t);
                            if (ke.default.getCanUseSectionTextAlignNewVersion() && Le.default.getEnableLayoutSettingTextAlignment() && a) {
                                var n = null == e ? void 0 : e.get("textAlignment");
                                return "auto" === n ? "inherit-text-align" : "".concat(n, "-align")
                            }
                            return ""
                        }
                    }, {
                        key: "renderItem",
                        value: function(e) {
                            var t, a, o, l, i = fe.default.formatDate,
                                r = this.props,
                                u = r.category,
                                s = r.openArchiveDialog,
                                c = r.showDummyData,
                                d = u.get("id"),
                                f = this.constructor.sharedProps(),
                                g = f.getBlogSetting,
                                p = f.isPreview,
                                h = f.language,
                                m = g(),
                                w = this._getLayoutObject(),
                                N = w.layoutClass,
                                k = w.isRowAndLandscapeThumbnail,
                                I = w.isRowAndNoneThumbnail,
                                L = w.showCategoryTabs,
                                O = w.isColumnsAndCard,
                                B = w.titleLength,
                                A = e.publicUrl,
                                x = (A.split("?") || []).length > 1 ? "&" : "?";
                            "all" !== d && (A += (0, Q.default)(l = "".concat(x, "categoryId=")).call(l, d), x = "&");
                            var M, D = !(null !== (t = e.settings) && void 0 !== t && t.hideBlogDate),
                                R = !L && "all" === d && e.allTagsList.length > 0,
                                U = Le.default.getIsS5Theme();
                            M = p ? Le.default.isOneClickPageInPreview() ? "_blank" : "_parent" : "_self";
                            var G = O && !_e.default.isSmallScreen() ? this.transformTitle(e.title, B) : e.title,
                                F = Me.isInBlogCategoryPage(),
                                W = {};
                            return Boolean(pe.default.getAiSiteBuilderIframeUrl()) && (A += "".concat(x, "mode=nonstatic"), W = {
                                target: "_self"
                            }), (0, E.default)("div", {
                                className: "s-blog-entry ".concat(N)
                            }, e.id, (0, E.default)("div", {
                                className: "s-blog-entry-inner",
                                onClick: (0, ne.default)(a = this.linkToPost).call(a, this, A)
                            }, void 0, (0, E.default)("div", {
                                className: "s-blog-entry-left s-blog-avatar-container"
                            }, void 0, c && (0, E.default)(ze, {
                                className: "sample-tag light-blue",
                                label: n("Editor|Sample")
                            }), (0, E.default)("a", {
                                target: M,
                                href: A,
                                "aria-label": G
                            }, void 0, this._renderThumbnail(e))), (0, E.default)("div", {
                                className: "s-blog-entry-right"
                            }, void 0, (0, E.default)("div", {
                                className: "s-blog-details"
                            }, void 0, (0, E.default)("div", {
                                className: "s-blog-details-head"
                            }, void 0, (0, E.default)("div", {
                                className: (0, re.default)({
                                    "s-item-title": U
                                }, "s-blog-title s-font-heading")
                            }, void 0, (0, E.default)("a", {
                                target: M,
                                href: A
                            }, void 0, F ? (0, E.default)("h2", {}, void 0, G) : G), c && (0, E.default)(ze, {
                                className: "sample-tag light-blue",
                                label: n("Editor|Sample")
                            })), (0, E.default)("div", {
                                className: "s-blog-info  s-font-body"
                            }, void 0, e.pinned && (v || (v = (0, E.default)("span", {
                                className: "fa fa-star"
                            }))), D && (0, E.default)("span", {
                                className: "s-blog-date"
                            }, void 0, i(e.publishedAt, h, "LL")), D && !I && R && (y || (y = (0, E.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), R && !I && (0, E.default)(Ce.default, {
                                tags: e.allTagsList,
                                onClickTag: s
                            }), !I && m.enableComments && e.approvedCommentsCount > 0 && (0, E.default)("span", {}, void 0, (e.pinned || D || R) && (b || (b = (0, E.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), (0, E.default)("a", {
                                target: "_blank",
                                href: "".concat(A, "#comments"),
                                className: "s-approved-comments-count"
                            }, void 0, T || (T = (0, E.default)("i", {
                                className: "entypo-comment"
                            })), e.approvedCommentsCount)))), I && R && (0, E.default)("div", {
                                className: "s-blog-info  s-font-body"
                            }, void 0, (0, E.default)(Ce.default, {
                                tags: e.allTagsList,
                                onClickTag: s
                            }), m.enableComments && e.approvedCommentsCount > 0 && (0, E.default)("span", {}, void 0, (e.pinned || D || R) && (C || (C = (0, E.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), (0, E.default)("a", {
                                target: "_blank",
                                href: "".concat(A, "#comments"),
                                className: "s-approved-comments-count"
                            }, void 0, S || (S = (0, E.default)("i", {
                                className: "entypo-comment"
                            })), e.approvedCommentsCount))), k ? (0, E.default)("div", {
                                className: "s-blog-details-blurb s-font-body s-blog-row"
                            }, void 0, (0, $.default)(o = this.transformBlurb(e.longBlurb || "").split("<br>")).call(o, (function(e, t) {
                                return (0, E.default)("div", {}, t, e, _ || (_ = (0, E.default)("br", {})))
                            }))) : (0, E.default)("div", {
                                className: "s-blog-details-blurb  s-font-body s-blog-row"
                            }, void 0, this.transformBlurb(e.longBlurb || "")), k && le.default.createElement("a", (0, P.default)({
                                className: "s-blog-read-more-link s-font-body"
                            }, W, {
                                href: A
                            }), " ", "".concat((0, De.translateBySiteLang)("Blog|Read more", n("Blog|Read more")), "..."))))))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.blogPosts,
                                n = t.layoutConfig,
                                o = this._getLayoutObject().isColumns,
                                l = ke.default.getIsNewBlogLayout(),
                                i = n && "tiled" === n.get("structure") && l;
                            return 0 === a.length ? this._renderNoPost() : (0, E.default)("div", {
                                className: "s-blog-col-body s-blog-no-posts ".concat(this.getInheritAlignClassName())
                            }, void 0, (0, E.default)("div", {
                                className: "s-blog-posts ".concat(o ? "s-blog-posts-columns clearfix" : "")
                            }, void 0, !i && (0, $.default)(a).call(a, (function(t) {
                                return e.renderItem(t)
                            })), i && this.renderTiledList()))
                        }
                    }]), i
                }(le.default.Component);
            Je.sharedProps = (0, Ne.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                return {
                    fromSiteToApp: ke.default.getFromSiteToApp(),
                    isPreview: ke.default.getIsPreview(),
                    language: Le.default.getForcedLocale() || "en",
                    getBlogSetting: Ae.default.getBlogSetting
                }
            })), t.default = Je, e.exports = t.default
        }
    }
]);