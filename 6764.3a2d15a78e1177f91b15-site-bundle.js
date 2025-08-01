/*! For license information please see 6764.3a2d15a78e1177f91b15-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6764], {
        100935: function(o) {
            window.Keen = window.Keen || {
                    configure: function(o) {
                        this._cf = o
                    },
                    addEvent: function(o, e, g, a) {
                        this._eq = this._eq || [], this._eq.push([o, e, g, a])
                    },
                    setGlobalProperties: function(o) {
                        this._gp = o
                    },
                    onChartsReady: function(o) {
                        this._ocrq = this._ocrq || [], this._ocrq.push(o)
                    }
                },
                function() {
                    var o = document.createElement("script");
                    o.type = "text/javascript", o.async = !0, o.src = ("https:" == document.location.protocol ? "https://" : "http://") + "d26b395fwzu5fz.cloudfront.net/2.1.2/keen.min.js";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(o, e)
                }(), Keen.configure({
                    projectId: $S.global_conf ? $S.global_conf.KEEN_IO_PROJECT_ID : $S.globalConf.KEEN_IO_PROJECT_ID,
                    writeKey: $S.global_conf ? $S.global_conf.KEEN_IO_WRITE_KEY : $S.globalConf.KEEN_IO_WRITE_KEY
                }), o.exports = window.Keen
        },
        688791: function(o, e, g) {
            "use strict";
            g(663978)(e, "__esModule", {
                value: !0
            }), e.default = {
                loadFB: function() {
                    var o, e, g, a, l, s;
                    o = window, e = document, g = "script", o.fbq || (a = o.fbq = function() {
                        var o;
                        a.callMethod ? (o = a).callMethod.apply(o, arguments) : a.queue.push(arguments)
                    }, o._fbq || (o._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], (l = e.createElement(g)).async = !0, l.src = "https://connect.facebook.net/en_US/fbevents.js", (s = e.getElementsByTagName(g)[0]).parentNode.insertBefore(l, s)), window._strk_fbq = fbq
                }
            }, o.exports = e.default
        },
        317118: function(o, e, g) {
            "use strict";
            var a = g(663978),
                l = g(60530)(g(60530));
            a(e, "__esModule", {
                value: !0
            }), g(974916), g(323123), g(804723);
            var s = g(981643),
                r = (0, l.default)(s),
                c = g(977766),
                t = (0, l.default)(c),
                m = g(694473),
                i = (0, l.default)(m),
                w = g(20455),
                n = (0, l.default)(w),
                d = g(277149),
                u = (0, l.default)(d),
                p = g(223336),
                h = ((0, l.default)(p), g(496486)),
                b = (0, l.default)(h),
                f = g(329756),
                k = f.RegexConstants.VIDEO_UPLOAD.YOUTUBE,
                y = f.RegexConstants.VIDEO_UPLOAD.VIMEO,
                v = function(o) {
                    return k.test(o) ? "youtube" : y.test(o) ? "vimeo" : -1 !== (0, r.default)(o).call(o, "facebook.com") ? "facebook" : f.RegexConstants.VIDEO_UPLOAD.YOUKU.test(o) ? "youku" : f.RegexConstants.VIDEO_UPLOAD.TUDOU.test(o) ? "tudou" : f.RegexConstants.VIDEO_UPLOAD.QQ.test(o) ? "qq" : f.RegexConstants.VIDEO_UPLOAD.BILIBILI.test(o) ? "bilibili" : f.RegexConstants.VIDEO_UPLOAD.IQIYI.test(o) ? "iqiyi" : ""
                },
                _ = {
                    getVideoType: v,
                    getVideoID: function(o, e) {
                        var g;
                        switch (e || (e = v(o)), e) {
                            case "youtube":
                                g = o.match(k)[1].split("&")[0];
                                break;
                            case "vimeo":
                                g = o.match(y)[1]
                        }
                        return g
                    },
                    getSmallYTThumbnail: function(o) {
                        return "//img.youtube.com/vi/".concat(o, "/mqdefault.jpg")
                    },
                    getNormalYTThumbnail: function(o) {
                        return "//img.youtube.com/vi/".concat(o, "/hqdefault.jpg")
                    },
                    getHDYTThumbnail: function(o) {
                        return "//img.youtube.com/vi/".concat(o, "/maxresdefault.jpg")
                    },
                    getYTIFrameHtml: function(o) {
                        var e, g, a, l, s, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 854,
                            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480,
                            m = (0, t.default)(e = "".concat(o, "_")).call(e, (new Date).getTime());
                        return (0, t.default)(g = (0, t.default)(a = (0, t.default)(l = (0, t.default)(s = "<iframe id='".concat(m, "' allow='autoplay' src='https://www.youtube.com/embed/")).call(s, o, "?rel=1&autoplay=1&mute=1&loop=1&playlist=")).call(l, o, "&showinfo=0&wmode=transparent&controls=0&enablejsapi=1&origin=' frameborder='0' width='")).call(a, r, "' height='")).call(g, c, "'></iframe>")
                    },
                    getVimeoIFrameHtml: function(o, e, g) {
                        var a, l, s, r, c, m = (0, t.default)(a = "".concat(o, "_")).call(a, (new Date).getTime());
                        return (0, t.default)(l = (0, t.default)(s = (0, t.default)(r = (0, t.default)(c = "<iframe id='".concat(m, "' allow='autoplay' src='https://player.vimeo.com/video/")).call(c, o, "?background=1&api=1&player_id=")).call(r, m, "&autopause=0&autoplay=1&mute=1&badge=0&loop=1&portrait=0&title=0&origin=' frameborder='0' width='")).call(s, e, "' height='")).call(l, g, "'></iframe>")
                    },
                    getNormalVideoHtml: function(o, e, g) {
                        var a, l;
                        return (0, t.default)(a = (0, t.default)(l = "<video src='".concat(o, "' width='")).call(l, e, "' controls='true' height='")).call(a, g, "'/>")
                    },
                    getNormalBgVideoHtml: function(o, e, g) {
                        var a, l, s, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "true";
                        return (0, t.default)(a = (0, t.default)(l = (0, t.default)(s = "<video src='".concat(o, "' autoplay=")).call(s, r, " muted='true' loop='true' width='")).call(l, e, "' height='")).call(a, g, "'/>")
                    },
                    getVideoHtmlByUrl: function(o, e, g) {
                        var a;
                        switch (v(o)) {
                            case "youtube":
                                a = _.getYTIFrameHtml(_.getVideoID(o, "youtube"), e, g);
                                break;
                            case "vimeo":
                                a = _.getVimeoIFrameHtml(_.getVideoID(o, "vimeo"), e, g);
                                break;
                            default:
                                a = _.getNormalBgVideoHtml(o, e, g)
                        }
                        return a
                    },
                    getYouKuHtml: function(o) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 854,
                            g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480,
                            a = o.match(/\/id_([^.\/]*)(?:.html)?/) || o.match(/vid=([^.\/&]*)/) || [];
                        if (a.length) {
                            var l, s, r = a[1];
                            return (0, t.default)(l = (0, t.default)(s = "<iframe width='".concat(e, "' height='")).call(s, g, "' src='//player.youku.com/embed/")).call(l, r, "' frameborder=0 allowfullscreen></iframe>")
                        }
                        return ""
                    },
                    getTuDouHtml: function(o) {
                        var e, g, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 854,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                        if (/\/programs\/view\//.test(o)) e = o.match(/\/programs\/view\/([^.\/]*)\/?/) || [], g = 0;
                        else if (/\/listplay\//.test(o)) e = o.match(/\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/) || [], g = 1;
                        else {
                            if (!/\/albumplay\//.test(o)) return "";
                            e = o.match(/\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/) || [], g = 2
                        }
                        if (e.length) {
                            var s, r, c, m, i = "",
                                w = "";
                            switch (e.length) {
                                case 3:
                                    i = e[2], w = e[1];
                                    break;
                                case 2:
                                    i = e[1]
                            }
                            return (0, t.default)(s = (0, t.default)(r = (0, t.default)(c = (0, t.default)(m = "<iframe src='//www.tudou.com/programs/view/html5embed.action?type=".concat(g, "&code=")).call(m, i, "&lcode=")).call(c, w, "' width='")).call(r, a, "' height='")).call(s, l, "' allowtransparency='true' allowfullscreen='true' allowfullscreenInteractive='true' scrolling='no' border='0' frameborder='0'></iframe>")
                        }
                        return ""
                    },
                    getQQHtml: function(o) {
                        var e, g, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 640,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 498,
                            s = /v\.qq\.com.*vid=(\w*)&?$/,
                            r = /v\.qq\.com.*\/page.*\/(\w*)\.html/,
                            c = /v\.qq\.com\/x\/cover\/(\w*)\/(\w*)\.html/,
                            m = "",
                            i = o.match(s);
                        return null != i && i.length && (m = i[1]), null != (i = o.match(r)) && i.length && (m = i[1]), null != (i = o.match(c)) && i.length && (m = i[2]), m ? (0, t.default)(e = (0, t.default)(g = "<iframe frameborder='0' width='".concat(a, "' height='")).call(g, l, "' src='//v.qq.com/txp/iframe/player.html?vid=")).call(e, m, "&tiny=0&auto=0' allowfullscreen></iframe>") : ""
                    },
                    getFacebookHtml: function(o) {
                        var e, g, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600,
                            s = o.match(/\d+/g) || [],
                            r = (0, i.default)(s).call(s, (function(o) {
                                return o.length > 8
                            }));
                        return r ? (0, t.default)(e = (0, t.default)(g = '<iframe src="https://www.facebook.com/plugins/video.php?href='.concat(o, '&show_text=false" type="" width=\'')).call(g, a, "' height='")).call(e, l, '\' style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>') : ""
                    },
                    getBiliBiliHtml: function(o) {
                        var e, g, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600,
                            s = "",
                            r = o.match(/bilibili\.com\/video\/(\w*)\/?\?/);
                        return null !== r && r.length && (s = r[1]), s ? (0, t.default)(e = (0, t.default)(g = "<iframe src='//player.bilibili.com/player.html?bvid=".concat(s, "'  width='")).call(g, a, "' height='")).call(e, l, "' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe>") : ""
                    },
                    getIQiYiHtml: function(o) {
                        var e, g, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600;
                        return (0, t.default)(e = (0, t.default)(g = '<iframe src="'.concat(o, "\" frameborder=\"0\" allowfullscreen=\"true\" scrolling='no' border='0' frameborder='no' framespacing='0' width='")).call(g, a, "' height='")).call(e, l, "'></iframe>")
                    },
                    getMoreVideoTypesForFancybox: function() {
                        return {
                            youku: {
                                matcher: /v\.youku\.com\/v_show\/id_([^.\/]*)(?:.html)?/,
                                type: "iframe",
                                url: "//player.youku.com/embed/$1"
                            },
                            tudou1: {
                                matcher: /www\.tudou\.com\/programs\/view\/([^.\/]*)\//,
                                type: "iframe",
                                url: "//www.tudou.com/programs/view/html5embed.action?type=0&code=$1"
                            },
                            tudou2: {
                                matcher: /www\.tudou\.com\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,
                                type: "iframe",
                                url: "//www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"
                            },
                            tudou3: {
                                matcher: /www\.tudou\.com\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,
                                type: "iframe",
                                url: "//www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"
                            }
                        }
                    },
                    needToTriggerHelper: function(o) {
                        var e = (0, n.default)(f.RegexConstants.VIDEO_UPLOAD);
                        return (0, u.default)(b.default).call(b.default, e, (function(e) {
                            return e.test(o)
                        })) && !(0, u.default)(b.default).call(b.default, f.RegexConstants.VIDEO_BLACK_LIST, (function(e) {
                            return e.test(o)
                        }))
                    }
                };
            e.default = _, o.exports = e.default
        },
        501587: function(o, e, g) {
            "use strict";
            var a = g(663978),
                l = g(60530)(g(60530));
            a(e, "__esModule", {
                value: !0
            });
            var s = g(726394),
                r = (0, l.default)(s),
                c = g(569198),
                t = (0, l.default)(c),
                m = g(2991),
                i = (0, l.default)(m),
                w = g(666419),
                n = (0, l.default)(w);
            g(569600), g(974916), g(323123), g(864765);
            var d = g(496486),
                u = (0, l.default)(d),
                p = function() {
                    function o(e) {
                        var g = this;
                        if ((0, r.default)(this, o), this.query_params = {}, !document || !document.createElement) throw new Error("This needs to be run in an HTML context with a document.");
                        var a = document.createElement("a");
                        a.href = e, this.url = e, a.origin ? this.origin = a.origin : this.origin = [a.protocol, "//", a.host].join(""), this.protocol = a.protocol, this.pathname = a.pathname, this.hostname = a.hostname, this.hash = a.hash, u.default.each(a.search.substr(1).split("&"), (function(o) {
                            var e = o.split("=");
                            g.query_params[e[0]] = e[1]
                        }))
                    }
                    return (0, t.default)(o, [{
                        key: "toString",
                        value: function() {
                            var o = u.default.compact((0, i.default)(u.default).call(u.default, this.query_params, (function(o, e) {
                                    if (null != o) return [e, o].join("=")
                                }))).join("&"),
                                e = [this.origin, this.pathname].join("");
                            return o && (e += "?".concat(o)), this.hash && (e += this.hash), e
                        }
                    }]), o
                }(),
                h = function() {
                    function o(e, g) {
                        (0, r.default)(this, o), this.url = g, this.referrers_map = this.loadReferrers(e), this.known = !1, this.referrer = null, this.medium = "unknown", this.search_parameter = null, this.search_term = null;
                        var a = new p(this.url);
                        this.host = a.hostname, this.path = a.pathname, this.referrer = this.lookupReferrer(this.host, this.path)
                    }
                    return (0, t.default)(o, [{
                        key: "lookupReferrer",
                        value: function(o) {
                            return this.referrers_map[o]
                        }
                    }, {
                        key: "loadReferrers",
                        value: function(o) {
                            var e = {};
                            for (var g in o) {
                                var a = o[g];
                                for (var l in a) {
                                    var s = a[l],
                                        r = null;
                                    s.parameters && (r = (0, i.default)(u.default).call(u.default, s.parameters, (function(o) {
                                        return o.toLowerCase()
                                    })));
                                    for (var c = 0, t = (0, n.default)(s.domains); c < t.length; c++) {
                                        var m = t[c];
                                        e[m] = {
                                            name: l,
                                            medium: g
                                        }, r && (e[m].params = r)
                                    }
                                }
                            }
                            return e
                        }
                    }]), o
                }();
            e.default = h, o.exports = e.default
        },
        82806: function(o, e, g) {
            "use strict";
            var a = g(663978),
                l = g(60530)(g(60530));
            a(e, "__esModule", {
                value: !0
            });
            var s = g(778914),
                r = (0, l.default)(s),
                c = g(933032),
                t = (0, l.default)(c),
                m = g(588077),
                i = (0, l.default)(m),
                w = g(266004),
                n = (0, l.default)(w),
                d = g(80827),
                u = (0, l.default)(d),
                p = g(918186),
                h = (0, l.default)(p),
                b = g(345129);
            e.default = {
                trackGAEcommerce: function o() {
                    if (this.strikinglyGoogleAnalyticsEnabled) {
                        var e = u.default.getCart().orderData,
                            g = e && e.readableNumber,
                            a = n.default.getProducts();
                        if (g) {
                            if (!a || !a.length) return (0, t.default)(o, 2e3);
                            if (this.userUniversalAnalyticsEnabled()) {
                                if (!window.ga) return;
                                ga("require", "ecommerce"),
                                    function(o) {
                                        var e = u.default.getCart().shipping;
                                        ga("ecommerce:addTransaction", {
                                            id: "".concat(o),
                                            affiliation: "",
                                            revenue: "".concat(h.default.getTotalItemPriceNum()),
                                            tax: "".concat(h.default.getTaxesNum()),
                                            shipping: "".concat(h.default.getShippingFeeNum()),
                                            city: "".concat(e.city.value),
                                            state: "".concat(e.state.value),
                                            country: "".concat(e.country.value)
                                        })
                                    }(g),
                                    function(o) {
                                        var e = u.default.getCart().items;
                                        (0, r.default)(e).call(e, (function(e) {
                                            ga("ecommerce:addItem", {
                                                id: "".concat(o),
                                                sku: "".concat(e.orderItem.id),
                                                name: "".concat(e.product && e.product.name || ""),
                                                category: "".concat(e.orderItem.name),
                                                price: "".concat(e.orderItem.price),
                                                quantity: "".concat(e.orderItem.quantity)
                                            })
                                        }))
                                    }(g), ga("ecommerce:send")
                            } else ! function(o) {
                                    var e = u.default.getCart().shipping;
                                    i.default.push(["_addTrans", "".concat(o), "", "".concat(h.default.getTotalItemPriceNum()), "".concat(h.default.getTaxesNum()), "".concat(h.default.getShippingFeeNum()), "".concat(e.city.value), "".concat(e.state.value), "".concat(e.country.value)])
                                }(g),
                                function(o) {
                                    var e = u.default.getCart().items;
                                    (0, r.default)(e).call(e, (function(e) {
                                        i.default.push(["_addItem", "".concat(o), "".concat(e.orderItem.id), "".concat(e.product && e.product.name || ""), "".concat(e.orderItem.name), "".concat(e.orderItem.price), "".concat(e.orderItem.quantity)])
                                    }))
                                }(g), i.default.push(["_trackTrans"]);
                            b.clearShoppingCart()
                        }
                    }
                }
            }, o.exports = e.default
        },
        796764: function(o, e, g) {
            "use strict";
            var a = g(663978),
                l = g(60530)(g(60530));
            a(e, "__esModule", {
                value: !0
            });
            var s = g(726394),
                r = (0, l.default)(s),
                c = g(569198),
                t = (0, l.default)(c);
            g(974916), g(115306), g(241539), g(339714), g(323123), g(864765), g(804723);
            var m, i = g(54103),
                w = (0, l.default)(i),
                n = g(359340),
                d = (0, l.default)(n),
                u = g(729828),
                p = (0, l.default)(u),
                h = g(933032),
                b = (0, l.default)(h),
                f = g(620116),
                k = (0, l.default)(f),
                y = g(948604),
                v = (0, l.default)(y),
                _ = g(778914),
                q = (0, l.default)(_),
                x = {},
                z = g(223336),
                I = g(588077),
                A = g(100935),
                j = g(496486),
                E = g(183123),
                S = g(234584),
                G = g(818166),
                T = g(577499),
                P = g(443198),
                D = g(688791),
                C = g(317118),
                O = g(501587),
                B = g(786483),
                N = g(82806),
                F = g(684961),
                M = g(267385),
                U = function() {
                    function o() {
                        var e, g, a, l, s, c;
                        (0, r.default)(this, o), this.logPageView = (0, w.default)(e = this.logPageView).call(e, this), this.logSocialClicks = (0, w.default)(g = this.logSocialClicks).call(g, this), this.normalizedReferrer = (0, w.default)(a = this.normalizedReferrer).call(a, this), this.sendPbsImpression = (0, w.default)(l = this.sendPbsImpression).call(l, this), this.sendPbsConversion = (0, w.default)(s = this.sendPbsConversion).call(s, this), this.sendDataKeenIO = (0, w.default)(c = this.sendDataKeenIO).call(c, this)
                    }
                    return (0, t.default)(o, [{
                        key: "init",
                        value: function(o) {
                            var e, g;
                            return z.cookie("__strk_session_id") ? (g = z.cookie("__strk_session_id"), e = !0) : (g = "visotor-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(o) {
                                var e = 16 * Math.random() | 0;
                                return ("x" === o ? e : 3 & e | 8).toString(16)
                            })), e = !1, z.cookie("__strk_session_id", g, {
                                expires: 365,
                                path: "/"
                            })), this.visitorGeoInfo = {}, z.cookie("__strk_viewer_info") && (this.visitorGeoInfo = JSON.parse(atob(z.cookie("__strk_viewer_info")))), this.browserData = {
                                keen: {
                                    addons: [{
                                        name: "keen:ip_to_geo",
                                        input: {
                                            ip: "ip_address"
                                        },
                                        output: "ip_geo_info"
                                    }, {
                                        name: "keen:ua_parser",
                                        input: {
                                            ua_string: "user_agent"
                                        },
                                        output: "parsed_user_agent"
                                    }]
                                },
                                ip_address: "${keen.ip}",
                                visitorGeoInfo: this.visitorGeoInfo,
                                user_agent: "${keen.user_agent}",
                                host: document.location.host,
                                referrer_host: document.referrer.split("/")[2],
                                normalized_referrer: this.normalizedReferrer(document.referrer)
                            }, this.baseData = o || {
                                pageId: S.getId(),
                                userId: S.getUser().get("id"),
                                permalink: S.getPermalink(),
                                membership: S.getUser().get("membership"),
                                createdAt: S.getCreatedAt(),
                                strikinglyBranding: S.getShowStrikinglyLogo()
                            }, this.baseData = j.extend(this.baseData, {
                                visitorId: g,
                                isReturnVisit: e,
                                sessionId: g,
                                referrer: document.referrer,
                                utm_params: z.cookie("__uniq_utm_config") ? JSON.parse(z.cookie("__uniq_utm_config")) : {}
                            }), E.getIsBlog() ? this._internals = {
                                user: {
                                    id: S.getUserId(),
                                    membership: S.getMemberShip()
                                },
                                page: {
                                    id: S.getId(),
                                    url: function() {
                                        return window.location.href
                                    },
                                    googleAnalyticsTracker: S.getGoogleAnalyticsTracker(),
                                    googleAnalyticsType: S.getGoogleAnalyticsType(),
                                    facebookPixelId: S.getFacebookPixelId()
                                }
                            } : this._internals = {
                                user: {
                                    id: S.getUser().get("id"),
                                    membership: S.getUser().get("membership")
                                },
                                page: {
                                    id: S.getId(),
                                    url: function() {
                                        return window.location.href
                                    },
                                    theme: S.getTheme().get("name"),
                                    strk_upvt: S.getStrkUpvt(),
                                    strkGaTracker: S.getStrkGaTracker(),
                                    googleAnalyticsTracker: S.getGoogleAnalyticsTracker(),
                                    googleAnalyticsType: S.getGoogleAnalyticsType(),
                                    facebookPixelId: S.getFacebookPixelId()
                                }
                            }, T.traverseObj(this._internals, (function(o) {
                                for (var e in o) {
                                    var g = o[e];
                                    j.isUndefined(g) && console.warn("".concat(e, " is undefned"))
                                }
                            })), this.strikinglyGoogleAnalyticsEnabled = E.isGoogleAnalyticsEnabled(), this.strikinglyKeenAnalyticsEnabled = E.isKeenAnalyticsEnabled(), this.setupGA(), this.setupFB()
                        }
                    }, {
                        key: "setSocialShareTracking",
                        value: function() {
                            var o = this;
                            return B.Event.subscribe("Site.facebook.edge.create", (function() {
                                return o.trackSocialMediaShare("facebook", "like")
                            })), B.Event.subscribe("Site.linkedin.share", (function() {
                                return o.trackSocialMediaShare("linkedin", "share")
                            })), B.Event.subscribe("Site.twitter.tweet", (function() {
                                return o.trackSocialMediaShare("twitter", "tweet")
                            })), B.Event.subscribe("Site.gplus.plusone", (function() {
                                return o.trackSocialMediaShare("gplus", "plusone")
                            }))
                        }
                    }, {
                        key: "userGoogleAnalyticsEnabled",
                        value: function() {
                            return Boolean(null != this._internals ? this._internals.page.googleAnalyticsTracker : void 0)
                        }
                    }, {
                        key: "userUniversalAnalyticsEnabled",
                        value: function() {
                            return "universal" === this._internals.page.googleAnalyticsType
                        }
                    }, {
                        key: "userUseGA4",
                        value: function() {
                            return "ga4" === this._internals.page.googleAnalyticsType
                        }
                    }, {
                        key: "setupGA",
                        value: function() {
                            this.strikinglyGoogleAnalyticsEnabled && (P.log("[GA] Setup internal GA: ", this._internals.page.strkGaTracker), "function" == typeof __ga && (__ga("create", this._internals.page.strkGaTracker, {
                                name: "strk",
                                cookieDomain: "auto",
                                cookieExpires: 31536e3
                            }), __ga("strk.set", "anonymizeIp", !0))), this.userGoogleAnalyticsEnabled() && (P.log("[GA] Setup GA for user: ", this._internals.page.googleAnalyticsTracker), this.userUniversalAnalyticsEnabled() ? (P.log("[GA] Initialize Universal Analytics"), window.ga = __ga, "function" == typeof ga && (ga("create", this._internals.page.googleAnalyticsTracker, {
                                cookieExpires: 31536e3
                            }), ga("set", "anonymizeIp", !0))) : (P.log("[GA] Initialize Classic Analytics"), I.push(["_setAccount", this._internals.page.googleAnalyticsTracker]), I.push(["_gat._anonymizeIp"])))
                        }
                    }, {
                        key: "setupFB",
                        value: function() {
                            if (this._internals.page.facebookPixelId && !this._fbPixelLoaded) return window._strk_fbq || D.loadFB(), window._strk_fbq("init", this._internals.page.facebookPixelId), this._fbPixelLoaded = !0, this._fbPixelLoaded
                        }
                    }, {
                        key: "trackPageViewOnGA",
                        value: function(o) {
                            if (this.strikinglyGoogleAnalyticsEnabled && (P.log("[GA] Send page view to internal GA"), "function" == typeof __ga && __ga("strk.send", "pageview", {
                                    anonymizeIp: !0
                                })), this.userGoogleAnalyticsEnabled())
                                if (o && (o += location.search || ""), this.userUniversalAnalyticsEnabled()) P.log("[GA] Send page view to user GA (Universal)"), o && "function" == typeof ga && ga("set", "page", o), "function" == typeof ga && ga("send", "pageview", {
                                    anonymizeIp: !0
                                });
                                else {
                                    P.log("[GA] Send page view to user GA (Classic)");
                                    var e = ["_trackPageview"];
                                    o && e.push(o), I.push(e)
                                }
                        }
                    }, {
                        key: "trackPageEventOnGA",
                        value: function(o, e) {
                            var g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                            if (this.strikinglyGoogleAnalyticsEnabled && (P.log("[GA] Send page event to internal GA: ", o, e, g, a), "function" == typeof __ga && __ga("strk.send", "event", o, e, g, a, {
                                    anonymizeIp: !0
                                })), this.userGoogleAnalyticsEnabled())
                                if (this.userUniversalAnalyticsEnabled()) P.log("[GA] Send page event to user GA (Universal)"), "function" == typeof ga && ga("send", "event", o, e, g, a, {
                                    anonymizeIp: !0
                                });
                                else if (this.userUseGA4()) P.log("[GA] Send page event to user GA4"), "function" == typeof gtag && gtag("event", e, {
                                event_category: o,
                                event_label: g,
                                value: (0, d.default)(a),
                                non_interaction: Boolean(l.nonInteraction)
                            });
                            else {
                                P.log("[GA] Send page event to user GA (Classic)");
                                var s = 1;
                                for (var r in l) {
                                    var c = l[r];
                                    I.push(["_setCustomVar", s, r, c, 3]), ++s
                                }
                                I.push(["_trackEvent", o, e, g, a])
                            }
                        }
                    }, {
                        key: "trackPageEventOnFB",
                        value: function(o) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            window._strk_fbq && window._strk_fbq("track", o, e)
                        }
                    }, {
                        key: "trackPageEvent",
                        value: function() {
                            var o, e;
                            z(".s-button .s-common-button").click(("Site.button.click", o = {
                                gaEventName: "ButtonClick"
                            }, e = this, function(g) {
                                var a = z(this),
                                    l = {
                                        url: a.attr("href"),
                                        target: a.attr("target"),
                                        text: a.text()
                                    };
                                B.Event.publish("Site.button.click", l), e.trackPageEventOnGA("Action", o.gaEventName, l.text, null, {
                                    url: l.url,
                                    text: l.text
                                });
                                var s = "string" == typeof l.url && (0, p.default)(j).call(j, l.url, "#"),
                                    r = "string" == typeof l.url && (a[0].hostname === window.location.hostname || (0, p.default)(j).call(j, l.url, "/")),
                                    c = C.needToTriggerHelper(l.url);
                                !l.url || "_blank" === l.target || s || r || c || (g.preventDefault(), (0, b.default)((function() {
                                    return window.location.href = l.url
                                }), 500))
                            }))
                        }
                    }, {
                        key: "trackSocialMediaShare",
                        value: function(o, e) {
                            var g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            return this.trackUserPageEvent(E.getKeenIoPageSocialShareCollection(), {
                                user: {
                                    id: this._internals.user.id,
                                    membership: this._internals.user.membership
                                },
                                page: {
                                    id: this._internals.page.id,
                                    url: this._internals.page.url(),
                                    category: this._internals.page.category,
                                    theme: this._internals.page.theme
                                },
                                channel: o,
                                action: e,
                                data: g,
                                utm_params: z.cookie("__uniq_utm_config") ? JSON.parse(z.cookie("__uniq_utm_config")) : {}
                            })
                        }
                    }, {
                        key: "trackPageFraming",
                        value: function(o) {
                            return this.trackUserPageEvent(E.getKeenIoPageFramingCollection(), {
                                user: {
                                    id: this._internals.user.id,
                                    membership: this._internals.user.membership
                                },
                                page: {
                                    id: this._internals.page.id,
                                    category: this._internals.page.category
                                },
                                utm_params: z.cookie("__uniq_utm_config") ? JSON.parse(z.cookie("__uniq_utm_config")) : {}
                            })
                        }
                    }, {
                        key: "logPageView",
                        value: function(o) {
                            var e = this;
                            return this.trackPageViewOnGA(), this.trackPageEventOnFB("PageView"), (0, b.default)((function() {
                                return e.trackPageEventOnGA("Control", "Bounce Rate")
                            }), 3e4), this.sendDataKeenIO(j.extend({}, this.baseData, o))
                        }
                    }, {
                        key: "logSocialClicks",
                        value: function(o) {
                            return j.extend({
                                eventName: "SocialClicks",
                                channel: o
                            }, this.baseData)
                        }
                    }, {
                        key: "normalizedReferrer",
                        value: function(o) {
                            var e = g(388292),
                                a = new O(e, o);
                            return (null != a.referrer ? a.referrer.name : void 0) || a.url || "Direct Traffic"
                        }
                    }, {
                        key: "sendPbsImpression",
                        value: function(o) {
                            if (this.strikinglyKeenAnalyticsEnabled) {
                                var e = j.extend({}, this.browserData, this.baseData, o);
                                return P.log("[PBS] Impression", e), A.addEvent(E.getKeenIoPbsImpressionCollection(), e)
                            }
                        }
                    }, {
                        key: "sendPbsConversion",
                        value: function(o) {
                            if (this.strikinglyKeenAnalyticsEnabled) {
                                var e = j.extend({}, this.browserData, this.baseData, o);
                                return P.log("[PBS] Conversion", e), A.addEvent(E.getKeenIoPbsConversionCollection(), e)
                            }
                        }
                    }, {
                        key: "trackUserPageEvent",
                        value: function(o, e) {
                            if (this.strikinglyKeenAnalyticsEnabled) return P.log("User Page Event Tracking", o, e), A.addEvent(o, e)
                        }
                    }, {
                        key: "trackEcommerceBuyerEvent",
                        value: function(o, e) {
                            return e = j.extend({
                                keen: {
                                    addons: [{
                                        name: "keen:ip_to_geo",
                                        input: {
                                            ip: "ip_address"
                                        },
                                        output: "ip_geo_info"
                                    }, {
                                        name: "keen:ua_parser",
                                        input: {
                                            ua_string: "user_agent"
                                        },
                                        output: "parsed_user_agent"
                                    }]
                                },
                                ip_address: "${keen.ip}",
                                visitorGeoInfo: this.visitorGeoInfo,
                                user_agent: "${keen.user_agent}",
                                user: {
                                    id: this._internals.user.id,
                                    membership: this._internals.user.membership
                                },
                                page: {
                                    id: this._internals.page.id,
                                    url: this._internals.page.url(),
                                    category: this._internals.page.category,
                                    theme: this._internals.page.theme
                                }
                            }, this.baseData, e), this.trackUserPageEvent(o, e)
                        }
                    }, {
                        key: "trackBundleKeenIOAndGA",
                        value: function(o) {
                            var e = o.category,
                                g = o.action,
                                a = o.label,
                                l = void 0 === a ? null : a,
                                s = o.value,
                                r = void 0 === s ? null : s,
                                c = o.nonInteraction,
                                t = void 0 !== c && c,
                                m = j.extend({
                                    keen: {
                                        addons: [{
                                            name: "keen:ip_to_geo",
                                            input: {
                                                ip: "ip_address"
                                            },
                                            output: "ip_geo_info"
                                        }, {
                                            name: "keen:ua_parser",
                                            input: {
                                                ua_string: "user_agent"
                                            },
                                            output: "parsed_user_agent"
                                        }]
                                    },
                                    ip_address: "${keen.ip}",
                                    visitorGeoInfo: this.visitorGeoInfo,
                                    user_agent: "${keen.user_agent}",
                                    event_category: e,
                                    event_action: g,
                                    event_label: l,
                                    event_value: r,
                                    non_interaction: t
                                }, this.baseData);
                            return this.trackUserPageEvent(E.getKeenIoEventsCollection(), m), this.trackPageEventOnGA(e, g, l, r, {
                                nonInteraction: t
                            })
                        }
                    }, {
                        key: "sendDataKeenIO",
                        value: function(o) {
                            if (this.strikinglyKeenAnalyticsEnabled) {
                                var e = o.referrer.split("/")[2],
                                    g = j.extend({
                                        keen: {
                                            addons: [{
                                                name: "keen:ip_to_geo",
                                                input: {
                                                    ip: "ip_address"
                                                },
                                                output: "ip_geo_info"
                                            }, {
                                                name: "keen:ua_parser",
                                                input: {
                                                    ua_string: "user_agent"
                                                },
                                                output: "parsed_user_agent"
                                            }]
                                        },
                                        ip_address: "${keen.ip}",
                                        visitorGeoInfo: this.visitorGeoInfo,
                                        user_agent: "${keen.user_agent}",
                                        host: document.location.host,
                                        referrer_host: e,
                                        normalized_referrer: this.normalizedReferrer(o.referrer)
                                    }, o);
                                return E.getIsBlog() || (g = j.extend({
                                    is_multipage: G.getIsMultiPage(),
                                    page_uid: G.getCurrentPageUID()
                                }, g)), g.sharding = !0, A.addEvent($S.conf.keenio_collection, g)
                            }
                        }
                    }, {
                        key: "trackFileDownload",
                        value: function(o) {
                            if (this.strikinglyKeenAnalyticsEnabled) {
                                var e = j.extend({
                                    keen: {
                                        addons: [{
                                            name: "keen:ip_to_geo",
                                            input: {
                                                ip: "ip_address"
                                            },
                                            output: "ip_geo_info"
                                        }, {
                                            name: "keen:ua_parser",
                                            input: {
                                                ua_string: "user_agent"
                                            },
                                            output: "parsed_user_agent"
                                        }]
                                    },
                                    ip_address: "${keen.ip}",
                                    visitorGeoInfo: this.visitorGeoInfo,
                                    user_agent: "${keen.user_agent}",
                                    file_id: o,
                                    user: {
                                        id: this._internals.user.id,
                                        membership: this._internals.user.membership
                                    },
                                    page: {
                                        id: this._internals.page.id,
                                        url: this._internals.page.url(),
                                        category: this._internals.page.category,
                                        theme: this._internals.page.theme
                                    }
                                }, this.baseData);
                                return P.log("File Download", e), A.addEvent(E.getKeenIoFileDownloadCollection(), e)
                            }
                        }
                    }]), o
                }();
            U.prototype.pingInterval = 1e4, j.extend(U.prototype, N), x = new U;
            var K = (0, k.default)(m = (0, v.default)(U.prototype)).call(m, (function(o) {
                    return !o.match(/^__/) && "pingInterval" !== o && "constructor" !== o
                })),
                V = [],
                R = E.getIsBlog() ? F("blogPostData.pageData.showCookieNotification") : F("stores.pageData.showCookieNotification"),
                L = "eu" === (E.getIsBlog() ? F("blogPostData.pageData.cookieNotificationArea") : F("stores.pageData.cookieNotificationArea")),
                H = "true" === M.getCookieByName("__strk_cookie_eu_visitor"),
                Y = M.getCookieByName("__strk_cookie_notification");
            if (R && (!L || H) && !Y) {
                var $ = {};
                (0, q.default)(K).call(K, (function(o) {
                    var e = x[o];
                    $[o] = e, x[o] = function() {
                        for (var o = arguments.length, g = new Array(o), a = 0; a < o; a++) g[a] = arguments[a];
                        z.cookie("__strk_cookie_notification") ? e.apply(x, g) : V.push({
                            fn: e,
                            args: g
                        })
                    }
                })), x.enableTrackingWhenCookieIsAccepted = function() {
                    (0, q.default)(K).call(K, (function(o) {
                        x[o] = $[o]
                    })), (0, q.default)(V).call(V, (function(o) {
                        o.fn.apply(x, o.args)
                    })), V = []
                }, x.destroyTracking = function() {
                    var o = function() {
                        return null
                    };
                    (0, q.default)(K).call(K, (function(e) {
                        x[e] = o
                    })), V = []
                }
            }
            e.default = x, o.exports = e.default
        },
        388292: function(o) {
            "use strict";
            o.exports = JSON.parse('{"unknown":{"Google":{"domains":["support.google.com","developers.google.com","maps.google.com","accounts.google.com","drive.google.com","sites.google.com","groups.google.com","groups.google.co.uk","news.google.co.uk"]},"Yahoo!":{"domains":["finance.yahoo.com","news.yahoo.com","eurosport.yahoo.com","sports.yahoo.com","astrology.yahoo.com","travel.yahoo.com","answers.yahoo.com","screen.yahoo.com","weather.yahoo.com","messenger.yahoo.com","games.yahoo.com","shopping.yahoo.net","movies.yahoo.com","cars.yahoo.com","lifestyle.yahoo.com","omg.yahoo.com","match.yahoo.net"]}},"search":{"TalkTalk":{"domains":["www.talktalk.co.uk"],"parameters":["query"]},"1.cz":{"domains":["1.cz"],"parameters":["q"]},"Softonic":{"domains":["search.softonic.com"],"parameters":["q"]},"GAIS":{"domains":["gais.cs.ccu.edu.tw"],"parameters":["q"]},"Freecause":{"domains":["search.freecause.com"],"parameters":["p"]},"RPMFind":{"domains":["rpmfind.net","fr2.rpmfind.net"],"parameters":["rpmfind.net","fr2.rpmfind.net"]},"Comcast":{"domains":["serach.comcast.net"],"parameters":["q"]},"Voila":{"domains":["search.ke.voila.fr","www.lemoteur.fr"],"parameters":["rdata"]},"Nifty":{"domains":["search.nifty.com"],"parameters":["q"]},"Atlas":{"domains":["searchatlas.centrum.cz"],"parameters":["q"]},"Lo.st":{"domains":["lo.st"],"parameters":["x_query"]},"DasTelefonbuch":{"domains":["www1.dastelefonbuch.de"],"parameters":["kw"]},"Fireball":{"domains":["www.fireball.de"],"parameters":["q"]},"1und1":{"domains":["search.1und1.de"],"parameters":["su"]},"Virgilio":{"domains":["ricerca.virgilio.it","ricercaimmagini.virgilio.it","ricercavideo.virgilio.it","ricercanews.virgilio.it","mobile.virgilio.it"],"parameters":["qs"]},"Web.nl":{"domains":["www.web.nl"],"parameters":["zoekwoord"]},"Plazoo":{"domains":["www.plazoo.com"],"parameters":["q"]},"Goyellow.de":{"domains":["www.goyellow.de"],"parameters":["MDN"]},"AOL":{"domains":["search.aol.com","search.aol.it","aolsearch.aol.com","aolsearch.com","www.aolrecherche.aol.fr","www.aolrecherches.aol.fr","www.aolimages.aol.fr","aim.search.aol.com","www.recherche.aol.fr","find.web.aol.com","recherche.aol.ca","aolsearch.aol.co.uk","search.aol.co.uk","aolrecherche.aol.fr","sucheaol.aol.de","suche.aol.de","suche.aolsvc.de","aolbusqueda.aol.com.mx","alicesuche.aol.de","alicesuchet.aol.de","suchet2.aol.de","search.hp.my.aol.com.au","search.hp.my.aol.de","search.hp.my.aol.it","search-intl.netscape.com"],"parameters":["q","query"]},"Acoon":{"domains":["www.acoon.de"],"parameters":["begriff"]},"Free":{"domains":["search.free.fr","search1-2.free.fr","search1-1.free.fr"],"parameters":["q"]},"Apollo Latvia":{"domains":["apollo.lv/portal/search/"],"parameters":["q"]},"HighBeam":{"domains":["www.highbeam.com"],"parameters":["q"]},"I-play":{"domains":["start.iplay.com"],"parameters":["q"]},"FriendFeed":{"domains":["friendfeed.com"],"parameters":["q"]},"Yasni":{"domains":["www.yasni.de","www.yasni.com","www.yasni.co.uk","www.yasni.ch","www.yasni.at"],"parameters":["query"]},"Gigablast":{"domains":["www.gigablast.com","dir.gigablast.com"],"parameters":["q"]},"arama":{"domains":["arama.com"],"parameters":["q"]},"Fixsuche":{"domains":["www.fixsuche.de"],"parameters":["q"]},"Apontador":{"domains":["apontador.com.br","www.apontador.com.br"],"parameters":["q"]},"Search.com":{"domains":["www.search.com"],"parameters":["q"]},"Monstercrawler":{"domains":["www.monstercrawler.com"],"parameters":["qry"]},"Google Images":{"domains":["google.ac/imgres","google.ad/imgres","google.ae/imgres","google.am/imgres","google.as/imgres","google.at/imgres","google.az/imgres","google.ba/imgres","google.be/imgres","google.bf/imgres","google.bg/imgres","google.bi/imgres","google.bj/imgres","google.bs/imgres","google.by/imgres","google.ca/imgres","google.cat/imgres","google.cc/imgres","google.cd/imgres","google.cf/imgres","google.cg/imgres","google.ch/imgres","google.ci/imgres","google.cl/imgres","google.cm/imgres","google.cn/imgres","google.co.bw/imgres","google.co.ck/imgres","google.co.cr/imgres","google.co.id/imgres","google.co.il/imgres","google.co.in/imgres","google.co.jp/imgres","google.co.ke/imgres","google.co.kr/imgres","google.co.ls/imgres","google.co.ma/imgres","google.co.mz/imgres","google.co.nz/imgres","google.co.th/imgres","google.co.tz/imgres","google.co.ug/imgres","google.co.uk/imgres","google.co.uz/imgres","google.co.ve/imgres","google.co.vi/imgres","google.co.za/imgres","google.co.zm/imgres","google.co.zw/imgres","google.com/imgres","google.com.af/imgres","google.com.ag/imgres","google.com.ai/imgres","google.com.ar/imgres","google.com.au/imgres","google.com.bd/imgres","google.com.bh/imgres","google.com.bn/imgres","google.com.bo/imgres","google.com.br/imgres","google.com.by/imgres","google.com.bz/imgres","google.com.co/imgres","google.com.cu/imgres","google.com.cy/imgres","google.com.do/imgres","google.com.ec/imgres","google.com.eg/imgres","google.com.et/imgres","google.com.fj/imgres","google.com.gh/imgres","google.com.gi/imgres","google.com.gt/imgres","google.com.hk/imgres","google.com.jm/imgres","google.com.kh/imgres","google.com.kh/imgres","google.com.kw/imgres","google.com.lb/imgres","google.com.lc/imgres","google.com.ly/imgres","google.com.mt/imgres","google.com.mx/imgres","google.com.my/imgres","google.com.na/imgres","google.com.nf/imgres","google.com.ng/imgres","google.com.ni/imgres","google.com.np/imgres","google.com.om/imgres","google.com.pa/imgres","google.com.pe/imgres","google.com.ph/imgres","google.com.pk/imgres","google.com.pr/imgres","google.com.py/imgres","google.com.qa/imgres","google.com.sa/imgres","google.com.sb/imgres","google.com.sg/imgres","google.com.sl/imgres","google.com.sv/imgres","google.com.tj/imgres","google.com.tn/imgres","google.com.tr/imgres","google.com.tw/imgres","google.com.ua/imgres","google.com.uy/imgres","google.com.vc/imgres","google.com.vn/imgres","google.cv/imgres","google.cz/imgres","google.de/imgres","google.dj/imgres","google.dk/imgres","google.dm/imgres","google.dz/imgres","google.ee/imgres","google.es/imgres","google.fi/imgres","google.fm/imgres","google.fr/imgres","google.ga/imgres","google.gd/imgres","google.ge/imgres","google.gf/imgres","google.gg/imgres","google.gl/imgres","google.gm/imgres","google.gp/imgres","google.gr/imgres","google.gy/imgres","google.hn/imgres","google.hr/imgres","google.ht/imgres","google.hu/imgres","google.ie/imgres","google.im/imgres","google.io/imgres","google.iq/imgres","google.is/imgres","google.it/imgres","google.it.ao/imgres","google.je/imgres","google.jo/imgres","google.kg/imgres","google.ki/imgres","google.kz/imgres","google.la/imgres","google.li/imgres","google.lk/imgres","google.lt/imgres","google.lu/imgres","google.lv/imgres","google.md/imgres","google.me/imgres","google.mg/imgres","google.mk/imgres","google.ml/imgres","google.mn/imgres","google.ms/imgres","google.mu/imgres","google.mv/imgres","google.mw/imgres","google.ne/imgres","google.nl/imgres","google.no/imgres","google.nr/imgres","google.nu/imgres","google.pl/imgres","google.pn/imgres","google.ps/imgres","google.pt/imgres","google.ro/imgres","google.rs/imgres","google.ru/imgres","google.rw/imgres","google.sc/imgres","google.se/imgres","google.sh/imgres","google.si/imgres","google.sk/imgres","google.sm/imgres","google.sn/imgres","google.so/imgres","google.st/imgres","google.td/imgres","google.tg/imgres","google.tk/imgres","google.tl/imgres","google.tm/imgres","google.to/imgres","google.tt/imgres","google.us/imgres","google.vg/imgres","google.vu/imgres","images.google.ws","images.google.ac","images.google.ad","images.google.ae","images.google.am","images.google.as","images.google.at","images.google.az","images.google.ba","images.google.be","images.google.bf","images.google.bg","images.google.bi","images.google.bj","images.google.bs","images.google.by","images.google.ca","images.google.cat","images.google.cc","images.google.cd","images.google.cf","images.google.cg","images.google.ch","images.google.ci","images.google.cl","images.google.cm","images.google.cn","images.google.co.bw","images.google.co.ck","images.google.co.cr","images.google.co.id","images.google.co.il","images.google.co.in","images.google.co.jp","images.google.co.ke","images.google.co.kr","images.google.co.ls","images.google.co.ma","images.google.co.mz","images.google.co.nz","images.google.co.th","images.google.co.tz","images.google.co.ug","images.google.co.uk","images.google.co.uz","images.google.co.ve","images.google.co.vi","images.google.co.za","images.google.co.zm","images.google.co.zw","images.google.com","images.google.com.af","images.google.com.ag","images.google.com.ai","images.google.com.ar","images.google.com.au","images.google.com.bd","images.google.com.bh","images.google.com.bn","images.google.com.bo","images.google.com.br","images.google.com.by","images.google.com.bz","images.google.com.co","images.google.com.cu","images.google.com.cy","images.google.com.do","images.google.com.ec","images.google.com.eg","images.google.com.et","images.google.com.fj","images.google.com.gh","images.google.com.gi","images.google.com.gt","images.google.com.hk","images.google.com.jm","images.google.com.kh","images.google.com.kh","images.google.com.kw","images.google.com.lb","images.google.com.lc","images.google.com.ly","images.google.com.mt","images.google.com.mx","images.google.com.my","images.google.com.na","images.google.com.nf","images.google.com.ng","images.google.com.ni","images.google.com.np","images.google.com.om","images.google.com.pa","images.google.com.pe","images.google.com.ph","images.google.com.pk","images.google.com.pr","images.google.com.py","images.google.com.qa","images.google.com.sa","images.google.com.sb","images.google.com.sg","images.google.com.sl","images.google.com.sv","images.google.com.tj","images.google.com.tn","images.google.com.tr","images.google.com.tw","images.google.com.ua","images.google.com.uy","images.google.com.vc","images.google.com.vn","images.google.cv","images.google.cz","images.google.de","images.google.dj","images.google.dk","images.google.dm","images.google.dz","images.google.ee","images.google.es","images.google.fi","images.google.fm","images.google.fr","images.google.ga","images.google.gd","images.google.ge","images.google.gf","images.google.gg","images.google.gl","images.google.gm","images.google.gp","images.google.gr","images.google.gy","images.google.hn","images.google.hr","images.google.ht","images.google.hu","images.google.ie","images.google.im","images.google.io","images.google.iq","images.google.is","images.google.it","images.google.it.ao","images.google.je","images.google.jo","images.google.kg","images.google.ki","images.google.kz","images.google.la","images.google.li","images.google.lk","images.google.lt","images.google.lu","images.google.lv","images.google.md","images.google.me","images.google.mg","images.google.mk","images.google.ml","images.google.mn","images.google.ms","images.google.mu","images.google.mv","images.google.mw","images.google.ne","images.google.nl","images.google.no","images.google.nr","images.google.nu","images.google.pl","images.google.pn","images.google.ps","images.google.pt","images.google.ro","images.google.rs","images.google.ru","images.google.rw","images.google.sc","images.google.se","images.google.sh","images.google.si","images.google.sk","images.google.sm","images.google.sn","images.google.so","images.google.st","images.google.td","images.google.tg","images.google.tk","images.google.tl","images.google.tm","images.google.to","images.google.tt","images.google.us","images.google.vg","images.google.vu","images.google.ws"],"parameters":["q"]},"ABCsøk":{"domains":["abcsolk.no","verden.abcsok.no"],"parameters":["q"]},"Google Product Search":{"domains":["google.ac/products","google.ad/products","google.ae/products","google.am/products","google.as/products","google.at/products","google.az/products","google.ba/products","google.be/products","google.bf/products","google.bg/products","google.bi/products","google.bj/products","google.bs/products","google.by/products","google.ca/products","google.cat/products","google.cc/products","google.cd/products","google.cf/products","google.cg/products","google.ch/products","google.ci/products","google.cl/products","google.cm/products","google.cn/products","google.co.bw/products","google.co.ck/products","google.co.cr/products","google.co.id/products","google.co.il/products","google.co.in/products","google.co.jp/products","google.co.ke/products","google.co.kr/products","google.co.ls/products","google.co.ma/products","google.co.mz/products","google.co.nz/products","google.co.th/products","google.co.tz/products","google.co.ug/products","google.co.uk/products","google.co.uz/products","google.co.ve/products","google.co.vi/products","google.co.za/products","google.co.zm/products","google.co.zw/products","google.com/products","google.com.af/products","google.com.ag/products","google.com.ai/products","google.com.ar/products","google.com.au/products","google.com.bd/products","google.com.bh/products","google.com.bn/products","google.com.bo/products","google.com.br/products","google.com.by/products","google.com.bz/products","google.com.co/products","google.com.cu/products","google.com.cy/products","google.com.do/products","google.com.ec/products","google.com.eg/products","google.com.et/products","google.com.fj/products","google.com.gh/products","google.com.gi/products","google.com.gt/products","google.com.hk/products","google.com.jm/products","google.com.kh/products","google.com.kh/products","google.com.kw/products","google.com.lb/products","google.com.lc/products","google.com.ly/products","google.com.mt/products","google.com.mx/products","google.com.my/products","google.com.na/products","google.com.nf/products","google.com.ng/products","google.com.ni/products","google.com.np/products","google.com.om/products","google.com.pa/products","google.com.pe/products","google.com.ph/products","google.com.pk/products","google.com.pr/products","google.com.py/products","google.com.qa/products","google.com.sa/products","google.com.sb/products","google.com.sg/products","google.com.sl/products","google.com.sv/products","google.com.tj/products","google.com.tn/products","google.com.tr/products","google.com.tw/products","google.com.ua/products","google.com.uy/products","google.com.vc/products","google.com.vn/products","google.cv/products","google.cz/products","google.de/products","google.dj/products","google.dk/products","google.dm/products","google.dz/products","google.ee/products","google.es/products","google.fi/products","google.fm/products","google.fr/products","google.ga/products","google.gd/products","google.ge/products","google.gf/products","google.gg/products","google.gl/products","google.gm/products","google.gp/products","google.gr/products","google.gy/products","google.hn/products","google.hr/products","google.ht/products","google.hu/products","google.ie/products","google.im/products","google.io/products","google.iq/products","google.is/products","google.it/products","google.it.ao/products","google.je/products","google.jo/products","google.kg/products","google.ki/products","google.kz/products","google.la/products","google.li/products","google.lk/products","google.lt/products","google.lu/products","google.lv/products","google.md/products","google.me/products","google.mg/products","google.mk/products","google.ml/products","google.mn/products","google.ms/products","google.mu/products","google.mv/products","google.mw/products","google.ne/products","google.nl/products","google.no/products","google.nr/products","google.nu/products","google.pl/products","google.pn/products","google.ps/products","google.pt/products","google.ro/products","google.rs/products","google.ru/products","google.rw/products","google.sc/products","google.se/products","google.sh/products","google.si/products","google.sk/products","google.sm/products","google.sn/products","google.so/products","google.st/products","google.td/products","google.tg/products","google.tk/products","google.tl/products","google.tm/products","google.to/products","google.tt/products","google.us/products","google.vg/products","google.vu/products","google.ws/products","www.google.ac/products","www.google.ad/products","www.google.ae/products","www.google.am/products","www.google.as/products","www.google.at/products","www.google.az/products","www.google.ba/products","www.google.be/products","www.google.bf/products","www.google.bg/products","www.google.bi/products","www.google.bj/products","www.google.bs/products","www.google.by/products","www.google.ca/products","www.google.cat/products","www.google.cc/products","www.google.cd/products","www.google.cf/products","www.google.cg/products","www.google.ch/products","www.google.ci/products","www.google.cl/products","www.google.cm/products","www.google.cn/products","www.google.co.bw/products","www.google.co.ck/products","www.google.co.cr/products","www.google.co.id/products","www.google.co.il/products","www.google.co.in/products","www.google.co.jp/products","www.google.co.ke/products","www.google.co.kr/products","www.google.co.ls/products","www.google.co.ma/products","www.google.co.mz/products","www.google.co.nz/products","www.google.co.th/products","www.google.co.tz/products","www.google.co.ug/products","www.google.co.uk/products","www.google.co.uz/products","www.google.co.ve/products","www.google.co.vi/products","www.google.co.za/products","www.google.co.zm/products","www.google.co.zw/products","www.google.com/products","www.google.com.af/products","www.google.com.ag/products","www.google.com.ai/products","www.google.com.ar/products","www.google.com.au/products","www.google.com.bd/products","www.google.com.bh/products","www.google.com.bn/products","www.google.com.bo/products","www.google.com.br/products","www.google.com.by/products","www.google.com.bz/products","www.google.com.co/products","www.google.com.cu/products","www.google.com.cy/products","www.google.com.do/products","www.google.com.ec/products","www.google.com.eg/products","www.google.com.et/products","www.google.com.fj/products","www.google.com.gh/products","www.google.com.gi/products","www.google.com.gt/products","www.google.com.hk/products","www.google.com.jm/products","www.google.com.kh/products","www.google.com.kh/products","www.google.com.kw/products","www.google.com.lb/products","www.google.com.lc/products","www.google.com.ly/products","www.google.com.mt/products","www.google.com.mx/products","www.google.com.my/products","www.google.com.na/products","www.google.com.nf/products","www.google.com.ng/products","www.google.com.ni/products","www.google.com.np/products","www.google.com.om/products","www.google.com.pa/products","www.google.com.pe/products","www.google.com.ph/products","www.google.com.pk/products","www.google.com.pr/products","www.google.com.py/products","www.google.com.qa/products","www.google.com.sa/products","www.google.com.sb/products","www.google.com.sg/products","www.google.com.sl/products","www.google.com.sv/products","www.google.com.tj/products","www.google.com.tn/products","www.google.com.tr/products","www.google.com.tw/products","www.google.com.ua/products","www.google.com.uy/products","www.google.com.vc/products","www.google.com.vn/products","www.google.cv/products","www.google.cz/products","www.google.de/products","www.google.dj/products","www.google.dk/products","www.google.dm/products","www.google.dz/products","www.google.ee/products","www.google.es/products","www.google.fi/products","www.google.fm/products","www.google.fr/products","www.google.ga/products","www.google.gd/products","www.google.ge/products","www.google.gf/products","www.google.gg/products","www.google.gl/products","www.google.gm/products","www.google.gp/products","www.google.gr/products","www.google.gy/products","www.google.hn/products","www.google.hr/products","www.google.ht/products","www.google.hu/products","www.google.ie/products","www.google.im/products","www.google.io/products","www.google.iq/products","www.google.is/products","www.google.it/products","www.google.it.ao/products","www.google.je/products","www.google.jo/products","www.google.kg/products","www.google.ki/products","www.google.kz/products","www.google.la/products","www.google.li/products","www.google.lk/products","www.google.lt/products","www.google.lu/products","www.google.lv/products","www.google.md/products","www.google.me/products","www.google.mg/products","www.google.mk/products","www.google.ml/products","www.google.mn/products","www.google.ms/products","www.google.mu/products","www.google.mv/products","www.google.mw/products","www.google.ne/products","www.google.nl/products","www.google.no/products","www.google.nr/products","www.google.nu/products","www.google.pl/products","www.google.pn/products","www.google.ps/products","www.google.pt/products","www.google.ro/products","www.google.rs/products","www.google.ru/products","www.google.rw/products","www.google.sc/products","www.google.se/products","www.google.sh/products","www.google.si/products","www.google.sk/products","www.google.sm/products","www.google.sn/products","www.google.so/products","www.google.st/products","www.google.td/products","www.google.tg/products","www.google.tk/products","www.google.tl/products","www.google.tm/products","www.google.to/products","www.google.tt/products","www.google.us/products","www.google.vg/products","www.google.vu/products","www.google.ws/products"],"parameters":["q"]},"DasOertliche":{"domains":["www.dasoertliche.de"],"parameters":["kw"]},"InfoSpace":{"domains":["infospace.com","dogpile.com","www.dogpile.com","metacrawler.com","webfetch.com","webcrawler.com","search.kiwee.com","isearch.babylon.com","start.facemoods.com","search.magnetic.com","search.searchcompletion.com","clusty.com"],"parameters":["q","s"]},"Weborama":{"domains":["www.weborama.com"],"parameters":["QUERY"]},"Bluewin":{"domains":["search.bluewin.ch"],"parameters":["searchTerm"]},"Neti":{"domains":["www.neti.ee"],"parameters":["query"]},"Winamp":{"domains":["search.winamp.com"],"parameters":["q"]},"Nigma":{"domains":["nigma.ru"],"parameters":["s"]},"Yahoo! Images":{"domains":["image.yahoo.cn","images.search.yahoo.com"],"parameters":["p","q"]},"Exalead":{"domains":["www.exalead.fr","www.exalead.com"],"parameters":["q"]},"Teoma":{"domains":["www.teoma.com"],"parameters":["q"]},"Needtofind":{"domains":["ko.search.need2find.com"],"parameters":["searchfor"]},"Looksmart":{"domains":["www.looksmart.com"],"parameters":["key"]},"Wirtualna Polska":{"domains":["szukaj.wp.pl"],"parameters":["szukaj"]},"Toolbarhome":{"domains":["www.toolbarhome.com","vshare.toolbarhome.com"],"parameters":["q"]},"Searchalot":{"domains":["searchalot.com"],"parameters":["q"]},"Yandex":{"domains":["yandex.ru","yandex.ua","yandex.com","www.yandex.ru","www.yandex.ua","www.yandex.com"],"parameters":["text"]},"canoe.ca":{"domains":["web.canoe.ca"],"parameters":["q"]},"Compuserve":{"domains":["websearch.cs.com"],"parameters":["query"]},"Startpagina":{"domains":["startgoogle.startpagina.nl"],"parameters":["q"]},"eo":{"domains":["eo.st"],"parameters":["x_query"]},"Zhongsou":{"domains":["p.zhongsou.com"],"parameters":["w"]},"La Toile Du Quebec Via Google":{"domains":["www.toile.com","web.toile.com"],"parameters":["q"]},"Paperball":{"domains":["www.paperball.de"],"parameters":["q"]},"Jungle Spider":{"domains":["www.jungle-spider.de"],"parameters":["q"]},"PeoplePC":{"domains":["search.peoplepc.com"],"parameters":["q"]},"MetaCrawler.de":{"domains":["s1.metacrawler.de","s2.metacrawler.de","s3.metacrawler.de"],"parameters":["qry"]},"Orange":{"domains":["busca.orange.es","search.orange.co.uk"],"parameters":["q"]},"Gule Sider":{"domains":["www.gulesider.no"],"parameters":["q"]},"Francite":{"domains":["recherche.francite.com"],"parameters":["name"]},"Ask Toolbar":{"domains":["search.tb.ask.com"],"parameters":["searchfor"]},"Aport":{"domains":["sm.aport.ru"],"parameters":["r"]},"Trusted-Search":{"domains":["www.trusted--search.com"],"parameters":["w"]},"goo":{"domains":["search.goo.ne.jp","ocnsearch.goo.ne.jp"],"parameters":["MT"]},"Fast Browser Search":{"domains":["www.fastbrowsersearch.com"],"parameters":["q"]},"Blogpulse":{"domains":["www.blogpulse.com"],"parameters":["query"]},"Volny":{"domains":["web.volny.cz"],"parameters":["search"]},"Icerockeet":{"domains":["blogs.icerocket.com"],"parameters":["q"]},"Terra":{"domains":["buscador.terra.es","buscador.terra.cl","buscador.terra.com.br"],"parameters":["query"]},"Searchy":{"domains":["www.searchy.co.uk"],"parameters":["q"]},"Onet":{"domains":["szukaj.onet.pl"],"parameters":["qt"]},"Digg":{"domains":["digg.com"],"parameters":["s"]},"Abacho":{"domains":["www.abacho.de","www.abacho.com","www.abacho.co.uk","www.se.abacho.com","www.tr.abacho.com","www.abacho.at","www.abacho.fr","www.abacho.es","www.abacho.ch","www.abacho.it"],"parameters":["q"]},"maailm":{"domains":["www.maailm.com"],"parameters":["tekst"]},"Flix":{"domains":["www.flix.de"],"parameters":["keyword"]},"Suchnase":{"domains":["www.suchnase.de"],"parameters":["q"]},"Freenet":{"domains":["suche.freenet.de"],"parameters":["query","Keywords"]},"DuckDuckGoL":{"domains":["duckduckgo.com"],"parameters":["q"]},"Poisk.ru":{"domains":["www.plazoo.com"],"parameters":["q"]},"Sharelook":{"domains":["www.sharelook.fr"],"parameters":["keyword"]},"Najdi":{"domains":["www.najdi.si"],"parameters":["q"]},"Picsearch":{"domains":["www.picsearch.com"],"parameters":["q"]},"Mail.ru":{"domains":["go.mail.ru"],"parameters":["q"]},"Alexa":{"domains":["alexa.com","search.toolbars.alexa.com"],"parameters":["q"]},"Metager":{"domains":["meta.rrzn.uni-hannover.de","www.metager.de"],"parameters":["eingabe"]},"Technorati":{"domains":["technorati.com"],"parameters":["q"]},"WWW":{"domains":["search.www.ee"],"parameters":["query"]},"Trouvez.com":{"domains":["www.trouvez.com"],"parameters":["query"]},"IXquick":{"domains":["ixquick.com","www.eu.ixquick.com","ixquick.de","www.ixquick.de","us.ixquick.com","s1.us.ixquick.com","s2.us.ixquick.com","s3.us.ixquick.com","s4.us.ixquick.com","s5.us.ixquick.com","eu.ixquick.com","s8-eu.ixquick.com","s1-eu.ixquick.de"],"parameters":["query"]},"Zapmeta":{"domains":["www.zapmeta.com","www.zapmeta.nl","www.zapmeta.de","uk.zapmeta.com"],"parameters":["q","query"]},"Yippy":{"domains":["search.yippy.com"],"parameters":["q","query"]},"Gomeo":{"domains":["www.gomeo.com"],"parameters":["Keywords"]},"Walhello":{"domains":["www.walhello.info","www.walhello.com","www.walhello.de","www.walhello.nl"],"parameters":["key"]},"Meta":{"domains":["meta.ua"],"parameters":["q"]},"Skynet":{"domains":["www.skynet.be"],"parameters":["q"]},"Blogdigger":{"domains":["www.blogdigger.com"],"parameters":["q"]},"WebSearch":{"domains":["www.websearch.com"],"parameters":["qkw","q"]},"Rambler":{"domains":["nova.rambler.ru"],"parameters":["query","words"]},"Latne":{"domains":["www.latne.lv"],"parameters":["q"]},"MySearch":{"domains":["www.mysearch.com","ms114.mysearch.com","ms146.mysearch.com","kf.mysearch.myway.com","ki.mysearch.myway.com","search.myway.com","search.mywebsearch.com"],"parameters":["searchfor","searchFor"]},"Cuil":{"domains":["www.cuil.com"],"parameters":["q"]},"Tixuma":{"domains":["www.tixuma.de"],"parameters":["sc"]},"Sapo":{"domains":["pesquisa.sapo.pt"],"parameters":["q"]},"Gnadenmeer":{"domains":["www.gnadenmeer.de"],"parameters":["keyword"]},"Arcor":{"domains":["www.arcor.de"],"parameters":["Keywords"]},"Naver":{"domains":["search.naver.com"],"parameters":["query"]},"Zoeken":{"domains":["www.zoeken.nl"],"parameters":["q"]},"Yam":{"domains":["search.yam.com"],"parameters":["k"]},"Eniro":{"domains":["www.eniro.se"],"parameters":["q","search_word"]},"APOLL07":{"domains":["apollo7.de"],"parameters":["query"]},"Biglobe":{"domains":["cgi.search.biglobe.ne.jp"],"parameters":["q"]},"Mozbot":{"domains":["www.mozbot.fr","www.mozbot.co.uk","www.mozbot.com"],"parameters":["q"]},"ICQ":{"domains":["www.icq.com","search.icq.com"],"parameters":["q"]},"Baidu":{"domains":["www.baidu.com","www1.baidu.com","zhidao.baidu.com","tieba.baidu.com","news.baidu.com","web.gougou.com"],"parameters":["wd","word","kw","k"]},"Conduit":{"domains":["search.conduit.com"],"parameters":["q"]},"Austronaut":{"domains":["www2.austronaut.at","www1.astronaut.at"],"parameters":["q"]},"Vindex":{"domains":["www.vindex.nl","search.vindex.nl"],"parameters":["search_for"]},"TrovaRapido":{"domains":["www.trovarapido.com"],"parameters":["q"]},"Suchmaschine.com":{"domains":["www.suchmaschine.com"],"parameters":["suchstr"]},"Lycos":{"domains":["search.lycos.com","www.lycos.com","lycos.com"],"parameters":["query"]},"Vinden":{"domains":["www.vinden.nl"],"parameters":["q"]},"Altavista":{"domains":["www.altavista.com","search.altavista.com","listings.altavista.com","altavista.de","altavista.fr","be-nl.altavista.com","be-fr.altavista.com"],"parameters":["q"]},"dmoz":{"domains":["dmoz.org","editors.dmoz.org"],"parameters":["q"]},"Ecosia":{"domains":["ecosia.org"],"parameters":["q"]},"Maxwebsearch":{"domains":["maxwebsearch.com"],"parameters":["query"]},"Euroseek":{"domains":["www.euroseek.com"],"parameters":["string"]},"Bing":{"domains":["bing.com","www.bing.com","msnbc.msn.com","dizionario.it.msn.com","cc.bingj.com","m.bing.com"],"parameters":["q","Q"]},"X-recherche":{"domains":["www.x-recherche.com"],"parameters":["MOTS"]},"Yandex Images":{"domains":["images.yandex.ru","images.yandex.ua","images.yandex.com"],"parameters":["text"]},"GMX":{"domains":["suche.gmx.net"],"parameters":["su"]},"Daemon search":{"domains":["daemon-search.com","my.daemon-search.com"],"parameters":["q"]},"Jungle Key":{"domains":["junglekey.com","junglekey.fr"],"parameters":["query"]},"Firstfind":{"domains":["www.firstsfind.com"],"parameters":["qry"]},"Crawler":{"domains":["www.crawler.com"],"parameters":["q"]},"Holmes":{"domains":["holmes.ge"],"parameters":["q"]},"Charter":{"domains":["www.charter.net"],"parameters":["q"]},"Ilse":{"domains":["www.ilse.nl"],"parameters":["search_for"]},"earthlink":{"domains":["search.earthlink.net"],"parameters":["q"]},"Qualigo":{"domains":["www.qualigo.at","www.qualigo.ch","www.qualigo.de","www.qualigo.nl"],"parameters":["q"]},"El Mundo":{"domains":["ariadna.elmundo.es"],"parameters":["q"]},"Metager2":{"domains":["metager2.de"],"parameters":["q"]},"Forestle":{"domains":["forestle.org","www.forestle.org","forestle.mobi"],"parameters":["q"]},"Search.ch":{"domains":["www.search.ch"],"parameters":["q"]},"Meinestadt":{"domains":["www.meinestadt.de"],"parameters":["words"]},"Freshweather":{"domains":["www.fresh-weather.com"],"parameters":["q"]},"AllTheWeb":{"domains":["www.alltheweb.com"],"parameters":["q"]},"Zoek":{"domains":["www3.zoek.nl"],"parameters":["q"]},"Daum":{"domains":["search.daum.net"],"parameters":["q"]},"Marktplaats":{"domains":["www.marktplaats.nl"],"parameters":["query"]},"suche.info":{"domains":["suche.info"],"parameters":["q"]},"Google News":{"domains":["news.google.ac","news.google.ad","news.google.ae","news.google.am","news.google.as","news.google.at","news.google.az","news.google.ba","news.google.be","news.google.bf","news.google.bg","news.google.bi","news.google.bj","news.google.bs","news.google.by","news.google.ca","news.google.cat","news.google.cc","news.google.cd","news.google.cf","news.google.cg","news.google.ch","news.google.ci","news.google.cl","news.google.cm","news.google.cn","news.google.co.bw","news.google.co.ck","news.google.co.cr","news.google.co.id","news.google.co.il","news.google.co.in","news.google.co.jp","news.google.co.ke","news.google.co.kr","news.google.co.ls","news.google.co.ma","news.google.co.mz","news.google.co.nz","news.google.co.th","news.google.co.tz","news.google.co.ug","news.google.co.uk","news.google.co.uz","news.google.co.ve","news.google.co.vi","news.google.co.za","news.google.co.zm","news.google.co.zw","news.google.com","news.google.com.af","news.google.com.ag","news.google.com.ai","news.google.com.ar","news.google.com.au","news.google.com.bd","news.google.com.bh","news.google.com.bn","news.google.com.bo","news.google.com.br","news.google.com.by","news.google.com.bz","news.google.com.co","news.google.com.cu","news.google.com.cy","news.google.com.do","news.google.com.ec","news.google.com.eg","news.google.com.et","news.google.com.fj","news.google.com.gh","news.google.com.gi","news.google.com.gt","news.google.com.hk","news.google.com.jm","news.google.com.kh","news.google.com.kh","news.google.com.kw","news.google.com.lb","news.google.com.lc","news.google.com.ly","news.google.com.mt","news.google.com.mx","news.google.com.my","news.google.com.na","news.google.com.nf","news.google.com.ng","news.google.com.ni","news.google.com.np","news.google.com.om","news.google.com.pa","news.google.com.pe","news.google.com.ph","news.google.com.pk","news.google.com.pr","news.google.com.py","news.google.com.qa","news.google.com.sa","news.google.com.sb","news.google.com.sg","news.google.com.sl","news.google.com.sv","news.google.com.tj","news.google.com.tn","news.google.com.tr","news.google.com.tw","news.google.com.ua","news.google.com.uy","news.google.com.vc","news.google.com.vn","news.google.cv","news.google.cz","news.google.de","news.google.dj","news.google.dk","news.google.dm","news.google.dz","news.google.ee","news.google.es","news.google.fi","news.google.fm","news.google.fr","news.google.ga","news.google.gd","news.google.ge","news.google.gf","news.google.gg","news.google.gl","news.google.gm","news.google.gp","news.google.gr","news.google.gy","news.google.hn","news.google.hr","news.google.ht","news.google.hu","news.google.ie","news.google.im","news.google.io","news.google.iq","news.google.is","news.google.it","news.google.it.ao","news.google.je","news.google.jo","news.google.kg","news.google.ki","news.google.kz","news.google.la","news.google.li","news.google.lk","news.google.lt","news.google.lu","news.google.lv","news.google.md","news.google.me","news.google.mg","news.google.mk","news.google.ml","news.google.mn","news.google.ms","news.google.mu","news.google.mv","news.google.mw","news.google.ne","news.google.nl","news.google.no","news.google.nr","news.google.nu","news.google.pl","news.google.pn","news.google.ps","news.google.pt","news.google.ro","news.google.rs","news.google.ru","news.google.rw","news.google.sc","news.google.se","news.google.sh","news.google.si","news.google.sk","news.google.sm","news.google.sn","news.google.so","news.google.st","news.google.td","news.google.tg","news.google.tk","news.google.tl","news.google.tm","news.google.to","news.google.tt","news.google.us","news.google.vg","news.google.vu","news.google.ws"],"parameters":["q"]},"Zoohoo":{"domains":["zoohoo.cz"],"parameters":["q"]},"Seznam":{"domains":["search.seznam.cz"],"parameters":["q"]},"Online.no":{"domains":["online.no"],"parameters":["q"]},"Eurip":{"domains":["www.eurip.com"],"parameters":["q"]},"all.by":{"domains":["all.by"],"parameters":["query"]},"Road Runner Search":{"domains":["search.rr.com"],"parameters":["q"]},"Opplysningen 1881":{"domains":["www.1881.no"],"parameters":["Query"]},"YouGoo":{"domains":["www.yougoo.fr"],"parameters":["q"]},"Bing Images":{"domains":["bing.com/images/search","www.bing.com/images/search"],"parameters":["q","Q"]},"Geona":{"domains":["geona.net"],"parameters":["q"]},"Nate":{"domains":["search.nate.com"],"parameters":["q"]},"T-Online":{"domains":["suche.t-online.de","brisbane.t-online.de","navigationshilfe.t-online.de"],"parameters":["q"]},"Hotbot":{"domains":["www.hotbot.com"],"parameters":["query"]},"Kvasir":{"domains":["www.kvasir.no"],"parameters":["q"]},"Babylon":{"domains":["search.babylon.com","searchassist.babylon.com"],"parameters":["q"]},"Excite":{"domains":["search.excite.it","search.excite.fr","search.excite.de","search.excite.co.uk","serach.excite.es","search.excite.nl","msxml.excite.com","www.excite.co.jp"],"parameters":["q","search"]},"qip":{"domains":["search.qip.ru"],"parameters":["query"]},"Yahoo!":{"domains":["search.yahoo.com","yahoo.com","ar.search.yahoo.com","ar.yahoo.com","au.search.yahoo.com","au.yahoo.com","br.search.yahoo.com","br.yahoo.com","cade.searchde.yahoo.com","cade.yahoo.com","chinese.searchinese.yahoo.com","chinese.yahoo.com","cn.search.yahoo.com","cn.yahoo.com","de.search.yahoo.com","de.yahoo.com","dk.search.yahoo.com","dk.yahoo.com","es.search.yahoo.com","es.yahoo.com","espanol.searchpanol.yahoo.com","espanol.searchpanol.yahoo.com","espanol.yahoo.com","espanol.yahoo.com","fr.search.yahoo.com","fr.yahoo.com","ie.search.yahoo.com","ie.yahoo.com","it.search.yahoo.com","it.yahoo.com","kr.search.yahoo.com","kr.yahoo.com","mx.search.yahoo.com","mx.yahoo.com","no.search.yahoo.com","no.yahoo.com","nz.search.yahoo.com","nz.yahoo.com","one.cn.yahoo.com","one.searchn.yahoo.com","qc.search.yahoo.com","qc.search.yahoo.com","qc.search.yahoo.com","qc.yahoo.com","qc.yahoo.com","se.search.yahoo.com","se.search.yahoo.com","se.yahoo.com","search.searcharch.yahoo.com","search.yahoo.com","uk.search.yahoo.com","uk.yahoo.com","www.yahoo.co.jp","search.yahoo.co.jp","www.cercato.it","search.offerbox.com","ys.mirostart.com"],"parameters":["p","q"]},"URL.ORGanizier":{"domains":["www.url.org"],"parameters":["q"]},"Witch":{"domains":["www.witch.de"],"parameters":["search"]},"Mister Wong":{"domains":["www.mister-wong.com","www.mister-wong.de"],"parameters":["Keywords"]},"Startsiden":{"domains":["www.startsiden.no"],"parameters":["q"]},"Web.de":{"domains":["suche.web.de"],"parameters":["su"]},"Ask":{"domains":["ask.com","www.ask.com","web.ask.com","int.ask.com","mws.ask.com","uk.ask.com","images.ask.com","ask.reference.com","www.askkids.com","iwon.ask.com","www.ask.co.uk","www.qbyrd.com","search-results.com","uk.search-results.com","www.search-results.com","int.search-results.com"],"parameters":["q"]},"Centrum":{"domains":["serach.centrum.cz","morfeo.centrum.cz"],"parameters":["q"]},"Everyclick":{"domains":["www.everyclick.com"],"parameters":["keyword"]},"Google Video":{"domains":["video.google.com"],"parameters":["q"]},"Delfi":{"domains":["otsing.delfi.ee"],"parameters":["q"]},"blekko":{"domains":["blekko.com"],"parameters":["q"]},"Jyxo":{"domains":["jyxo.1188.cz"],"parameters":["q"]},"Kataweb":{"domains":["www.kataweb.it"],"parameters":["q"]},"uol.com.br":{"domains":["busca.uol.com.br"],"parameters":["q"]},"Arianna":{"domains":["arianna.libero.it","www.arianna.com"],"parameters":["query"]},"Mamma":{"domains":["www.mamma.com","mamma75.mamma.com"],"parameters":["query"]},"Yatedo":{"domains":["www.yatedo.com","www.yatedo.fr"],"parameters":["q"]},"Twingly":{"domains":["www.twingly.com"],"parameters":["q"]},"Delfi latvia":{"domains":["smart.delfi.lv"],"parameters":["q"]},"PriceRunner":{"domains":["www.pricerunner.co.uk"],"parameters":["q"]},"Rakuten":{"domains":["websearch.rakuten.co.jp"],"parameters":["qt"]},"Google":{"domains":["www.google.com","www.google.ac","www.google.ad","www.google.com.af","www.google.com.ag","www.google.com.ai","www.google.am","www.google.it.ao","www.google.com.ar","www.google.as","www.google.at","www.google.com.au","www.google.az","www.google.ba","www.google.com.bd","www.google.be","www.google.bf","www.google.bg","www.google.com.bh","www.google.bi","www.google.bj","www.google.com.bn","www.google.com.bo","www.google.com.br","www.google.bs","www.google.co.bw","www.google.com.by","www.google.by","www.google.com.bz","www.google.ca","www.google.com.kh","www.google.cc","www.google.cd","www.google.cf","www.google.cat","www.google.cg","www.google.ch","www.google.ci","www.google.co.ck","www.google.cl","www.google.cm","www.google.cn","www.google.com.co","www.google.co.cr","www.google.com.cu","www.google.cv","www.google.com.cy","www.google.cz","www.google.de","www.google.dj","www.google.dk","www.google.dm","www.google.com.do","www.google.dz","www.google.com.ec","www.google.ee","www.google.com.eg","www.google.es","www.google.com.et","www.google.fi","www.google.com.fj","www.google.fm","www.google.fr","www.google.ga","www.google.gd","www.google.ge","www.google.gf","www.google.gg","www.google.com.gh","www.google.com.gi","www.google.gl","www.google.gm","www.google.gp","www.google.gr","www.google.com.gt","www.google.gy","www.google.com.hk","www.google.hn","www.google.hr","www.google.ht","www.google.hu","www.google.co.id","www.google.iq","www.google.ie","www.google.co.il","www.google.im","www.google.co.in","www.google.io","www.google.is","www.google.it","www.google.je","www.google.com.jm","www.google.jo","www.google.co.jp","www.google.co.ke","www.google.com.kh","www.google.ki","www.google.kg","www.google.co.kr","www.google.com.kw","www.google.kz","www.google.la","www.google.com.lb","www.google.com.lc","www.google.li","www.google.lk","www.google.co.ls","www.google.lt","www.google.lu","www.google.lv","www.google.com.ly","www.google.co.ma","www.google.md","www.google.me","www.google.mg","www.google.mk","www.google.ml","www.google.mn","www.google.ms","www.google.com.mt","www.google.mu","www.google.mv","www.google.mw","www.google.com.mx","www.google.com.my","www.google.co.mz","www.google.com.na","www.google.ne","www.google.com.nf","www.google.com.ng","www.google.com.ni","www.google.nl","www.google.no","www.google.com.np","www.google.nr","www.google.nu","www.google.co.nz","www.google.com.om","www.google.com.pa","www.google.com.pe","www.google.com.ph","www.google.com.pk","www.google.pl","www.google.pn","www.google.com.pr","www.google.ps","www.google.pt","www.google.com.py","www.google.com.qa","www.google.ro","www.google.rs","www.google.ru","www.google.rw","www.google.com.sa","www.google.com.sb","www.google.sc","www.google.se","www.google.com.sg","www.google.sh","www.google.si","www.google.sk","www.google.com.sl","www.google.sn","www.google.sm","www.google.so","www.google.st","www.google.com.sv","www.google.td","www.google.tg","www.google.co.th","www.google.com.tj","www.google.tk","www.google.tl","www.google.tm","www.google.to","www.google.com.tn","www.google.com.tr","www.google.tt","www.google.com.tw","www.google.co.tz","www.google.com.ua","www.google.co.ug","www.google.ae","www.google.co.uk","www.google.us","www.google.com.uy","www.google.co.uz","www.google.com.vc","www.google.co.ve","www.google.vg","www.google.co.vi","www.google.com.vn","www.google.vu","www.google.ws","www.google.co.za","www.google.co.zm","www.google.co.zw","google.com","google.ac","google.ad","google.com.af","google.com.ag","google.com.ai","google.am","google.it.ao","google.com.ar","google.as","google.at","google.com.au","google.az","google.ba","google.com.bd","google.be","google.bf","google.bg","google.com.bh","google.bi","google.bj","google.com.bn","google.com.bo","google.com.br","google.bs","google.co.bw","google.com.by","google.by","google.com.bz","google.ca","google.com.kh","google.cc","google.cd","google.cf","google.cat","google.cg","google.ch","google.ci","google.co.ck","google.cl","google.cm","google.cn","google.com.co","google.co.cr","google.com.cu","google.cv","google.com.cy","google.cz","google.de","google.dj","google.dk","google.dm","google.com.do","google.dz","google.com.ec","google.ee","google.com.eg","google.es","google.com.et","google.fi","google.com.fj","google.fm","google.fr","google.ga","google.gd","google.ge","google.gf","google.gg","google.com.gh","google.com.gi","google.gl","google.gm","google.gp","google.gr","google.com.gt","google.gy","google.com.hk","google.hn","google.hr","google.ht","google.hu","google.co.id","google.iq","google.ie","google.co.il","google.im","google.co.in","google.io","google.is","google.it","google.je","google.com.jm","google.jo","google.co.jp","google.co.ke","google.com.kh","google.ki","google.kg","google.co.kr","google.com.kw","google.kz","google.la","google.com.lb","google.com.lc","google.li","google.lk","google.co.ls","google.lt","google.lu","google.lv","google.com.ly","google.co.ma","google.md","google.me","google.mg","google.mk","google.ml","google.mn","google.ms","google.com.mt","google.mu","google.mv","google.mw","google.com.mx","google.com.my","google.co.mz","google.com.na","google.ne","google.com.nf","google.com.ng","google.com.ni","google.nl","google.no","google.com.np","google.nr","google.nu","google.co.nz","google.com.om","google.com.pa","google.com.pe","google.com.ph","google.com.pk","google.pl","google.pn","google.com.pr","google.ps","google.pt","google.com.py","google.com.qa","google.ro","google.rs","google.ru","google.rw","google.com.sa","google.com.sb","google.sc","google.se","google.com.sg","google.sh","google.si","google.sk","google.com.sl","google.sn","google.sm","google.so","google.st","google.com.sv","google.td","google.tg","google.co.th","google.com.tj","google.tk","google.tl","google.tm","google.to","google.com.tn","google.com.tr","google.tt","google.com.tw","google.co.tz","google.com.ua","google.co.ug","google.ae","google.co.uk","google.us","google.com.uy","google.co.uz","google.com.vc","google.co.ve","google.vg","google.co.vi","google.com.vn","google.vu","google.ws","google.co.za","google.co.zm","google.co.zw","search.avg.com","isearch.avg.com","www.cnn.com","darkoogle.com","search.darkoogle.com","search.foxtab.com","www.gooofullsearch.com","search.hiyo.com","search.incredimail.com","search1.incredimail.com","search2.incredimail.com","search3.incredimail.com","search4.incredimail.com","search.incredibar.com","search.sweetim.com","www.fastweb.it","search.juno.com","find.tdc.dk","searchresults.verizon.com","search.walla.co.il","search.alot.com","www.googleearth.de","www.googleearth.fr","webcache.googleusercontent.com","encrypted.google.com","googlesyndicatedsearch.com"],"parameters":["q","query","Keywords"]},"Google Blogsearch":{"domains":["blogsearch.google.ac","blogsearch.google.ad","blogsearch.google.ae","blogsearch.google.am","blogsearch.google.as","blogsearch.google.at","blogsearch.google.az","blogsearch.google.ba","blogsearch.google.be","blogsearch.google.bf","blogsearch.google.bg","blogsearch.google.bi","blogsearch.google.bj","blogsearch.google.bs","blogsearch.google.by","blogsearch.google.ca","blogsearch.google.cat","blogsearch.google.cc","blogsearch.google.cd","blogsearch.google.cf","blogsearch.google.cg","blogsearch.google.ch","blogsearch.google.ci","blogsearch.google.cl","blogsearch.google.cm","blogsearch.google.cn","blogsearch.google.co.bw","blogsearch.google.co.ck","blogsearch.google.co.cr","blogsearch.google.co.id","blogsearch.google.co.il","blogsearch.google.co.in","blogsearch.google.co.jp","blogsearch.google.co.ke","blogsearch.google.co.kr","blogsearch.google.co.ls","blogsearch.google.co.ma","blogsearch.google.co.mz","blogsearch.google.co.nz","blogsearch.google.co.th","blogsearch.google.co.tz","blogsearch.google.co.ug","blogsearch.google.co.uk","blogsearch.google.co.uz","blogsearch.google.co.ve","blogsearch.google.co.vi","blogsearch.google.co.za","blogsearch.google.co.zm","blogsearch.google.co.zw","blogsearch.google.com","blogsearch.google.com.af","blogsearch.google.com.ag","blogsearch.google.com.ai","blogsearch.google.com.ar","blogsearch.google.com.au","blogsearch.google.com.bd","blogsearch.google.com.bh","blogsearch.google.com.bn","blogsearch.google.com.bo","blogsearch.google.com.br","blogsearch.google.com.by","blogsearch.google.com.bz","blogsearch.google.com.co","blogsearch.google.com.cu","blogsearch.google.com.cy","blogsearch.google.com.do","blogsearch.google.com.ec","blogsearch.google.com.eg","blogsearch.google.com.et","blogsearch.google.com.fj","blogsearch.google.com.gh","blogsearch.google.com.gi","blogsearch.google.com.gt","blogsearch.google.com.hk","blogsearch.google.com.jm","blogsearch.google.com.kh","blogsearch.google.com.kh","blogsearch.google.com.kw","blogsearch.google.com.lb","blogsearch.google.com.lc","blogsearch.google.com.ly","blogsearch.google.com.mt","blogsearch.google.com.mx","blogsearch.google.com.my","blogsearch.google.com.na","blogsearch.google.com.nf","blogsearch.google.com.ng","blogsearch.google.com.ni","blogsearch.google.com.np","blogsearch.google.com.om","blogsearch.google.com.pa","blogsearch.google.com.pe","blogsearch.google.com.ph","blogsearch.google.com.pk","blogsearch.google.com.pr","blogsearch.google.com.py","blogsearch.google.com.qa","blogsearch.google.com.sa","blogsearch.google.com.sb","blogsearch.google.com.sg","blogsearch.google.com.sl","blogsearch.google.com.sv","blogsearch.google.com.tj","blogsearch.google.com.tn","blogsearch.google.com.tr","blogsearch.google.com.tw","blogsearch.google.com.ua","blogsearch.google.com.uy","blogsearch.google.com.vc","blogsearch.google.com.vn","blogsearch.google.cv","blogsearch.google.cz","blogsearch.google.de","blogsearch.google.dj","blogsearch.google.dk","blogsearch.google.dm","blogsearch.google.dz","blogsearch.google.ee","blogsearch.google.es","blogsearch.google.fi","blogsearch.google.fm","blogsearch.google.fr","blogsearch.google.ga","blogsearch.google.gd","blogsearch.google.ge","blogsearch.google.gf","blogsearch.google.gg","blogsearch.google.gl","blogsearch.google.gm","blogsearch.google.gp","blogsearch.google.gr","blogsearch.google.gy","blogsearch.google.hn","blogsearch.google.hr","blogsearch.google.ht","blogsearch.google.hu","blogsearch.google.ie","blogsearch.google.im","blogsearch.google.io","blogsearch.google.iq","blogsearch.google.is","blogsearch.google.it","blogsearch.google.it.ao","blogsearch.google.je","blogsearch.google.jo","blogsearch.google.kg","blogsearch.google.ki","blogsearch.google.kz","blogsearch.google.la","blogsearch.google.li","blogsearch.google.lk","blogsearch.google.lt","blogsearch.google.lu","blogsearch.google.lv","blogsearch.google.md","blogsearch.google.me","blogsearch.google.mg","blogsearch.google.mk","blogsearch.google.ml","blogsearch.google.mn","blogsearch.google.ms","blogsearch.google.mu","blogsearch.google.mv","blogsearch.google.mw","blogsearch.google.ne","blogsearch.google.nl","blogsearch.google.no","blogsearch.google.nr","blogsearch.google.nu","blogsearch.google.pl","blogsearch.google.pn","blogsearch.google.ps","blogsearch.google.pt","blogsearch.google.ro","blogsearch.google.rs","blogsearch.google.ru","blogsearch.google.rw","blogsearch.google.sc","blogsearch.google.se","blogsearch.google.sh","blogsearch.google.si","blogsearch.google.sk","blogsearch.google.sm","blogsearch.google.sn","blogsearch.google.so","blogsearch.google.st","blogsearch.google.td","blogsearch.google.tg","blogsearch.google.tk","blogsearch.google.tl","blogsearch.google.tm","blogsearch.google.to","blogsearch.google.tt","blogsearch.google.us","blogsearch.google.vg","blogsearch.google.vu","blogsearch.google.ws"],"parameters":["q"]},"Amazon":{"domains":["amazon.com","www.amazon.com"],"parameters":["keywords"]},"Hooseek.com":{"domains":["www.hooseek.com"],"parameters":["recherche"]},"Dalesearch":{"domains":["www.dalesearch.com"],"parameters":["q"]},"Alice Adsl":{"domains":["rechercher.aliceadsl.fr"],"parameters":["q"]},"soso.com":{"domains":["www.soso.com"],"parameters":["w"]},"Sogou":{"domains":["www.sougou.com"],"parameters":["query"]},"Hit-Parade":{"domains":["req.-hit-parade.com","class.hit-parade.com","www.hit-parade.com"],"parameters":["p7"]},"SearchCanvas":{"domains":["www.searchcanvas.com"],"parameters":["q"]},"Interia":{"domains":["www.google.interia.pl"],"parameters":["q"]},"Tiscali":{"domains":["search.tiscali.it","search-dyn.tiscali.it","hledani.tiscali.cz"],"parameters":["q","key"]},"Clix":{"domains":["pesquisa.clix.pt"],"parameters":["question"]}},"email":{"Outlook.com":{"domains":["mail.live.com"]},"Orange Webmail":{"domains":["orange.fr/webmail"]},"Yahoo! Mail":{"domains":["mail.yahoo.net","mail.yahoo.com","mail.yahoo.co.uk"]},"Gmail":{"domains":["mail.google.com"]}},"social":{"hi5":{"domains":["hi5.com"]},"Friendster":{"domains":["friendster.com"]},"Weibo":{"domains":["weibo.com","t.cn"]},"Xanga":{"domains":["xanga.com"]},"Myspace":{"domains":["myspace.com"]},"Buzznet":{"domains":["wayn.com"]},"MyLife":{"domains":["mylife.ru"]},"Flickr":{"domains":["flickr.com"]},"Sonico.com":{"domains":["sonico.com"]},"Odnoklassniki":{"domains":["odnoklassniki.ru"]},"GitHub":{"domains":["github.com"]},"Classmates":{"domains":["classmates.com"]},"Friends Reunited":{"domains":["friendsreunited.com"]},"Renren":{"domains":["renren.com"]},"vKruguDruzei.ru":{"domains":["vkrugudruzei.ru"]},"Gaia Online":{"domains":["gaiaonline.com"]},"Netlog":{"domains":["netlog.com"]},"Orkut":{"domains":["orkut.com"]},"MyHeritage":{"domains":["myheritage.com"]},"Multiply":{"domains":["multiply.com"]},"myYearbook":{"domains":["myyearbook.com"]},"WeeWorld":{"domains":["weeworld.com"]},"Geni":{"domains":["geni.com"]},"SourceForge":{"domains":["sourceforge.net"]},"Plaxo":{"domains":["plaxo.com"]},"Taringa!":{"domains":["taringa.net"]},"Tagged":{"domains":["login.tagged.com"]},"XING":{"domains":["xing.com"]},"Vkontakte":{"domains":["vk.com","vkontakte.ru"]},"Twitter":{"domains":["twitter.com","t.co"]},"WAYN":{"domains":["wayn.com"]},"Tuenti":{"domains":["tuenti.com"]},"Mail.ru":{"domains":["my.mail.ru"]},"Badoo":{"domains":["badoo.com"]},"Habbo":{"domains":["habbo.com"]},"Pinterest":{"domains":["pinterest.com"]},"LinkedIn":{"domains":["linkedin.com"]},"Foursquare":{"domains":["foursquare.com"]},"Flixster":{"domains":["flixster.com"]},"Windows Live Spaces":{"domains":["login.live.com"]},"BlackPlanet":{"domains":["blackplanet.com"]},"Cyworld":{"domains":["global.cyworld.com"]},"Skyrock":{"domains":["skyrock.com"]},"Facebook":{"domains":["facebook.com","fb.me"]},"StudiVZ":{"domains":["studivz.net"]},"Fotolog":{"domains":["fotolog.com"]},"Google+":{"domains":["url.google.com","plus.google.com"]},"Nasza-klasa.pl":{"domains":["nk.pl"]},"Douban":{"domains":["douban.com"]},"Bebo":{"domains":["bebo.com"]},"Reddit":{"domains":["reddit.com"]},"Identi.ca":{"domains":["identi.ca"]},"StackOverflow":{"domains":["stackoverflow.com"]},"Mixi":{"domains":["mixi.jp"]},"StumbleUpon":{"domains":["stumbleupon.com"]},"Viadeo":{"domains":["viadeo.com"]},"Last.fm":{"domains":["lastfm.ru"]},"LiveJournal":{"domains":["livejournal.ru"]},"Tumblr":{"domains":["tumblr.com"]},"Hacker News":{"domains":["news.ycombinator.com"]},"Qzone":{"domains":["qzone.qq.com"]},"Hyves":{"domains":["hyves.nl"]},"Paper.li":{"domains":["paper.li"]},"MoiKrug.ru":{"domains":["moikrug.ru"]}}}')
        }
    }
]);