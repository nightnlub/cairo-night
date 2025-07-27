/*! For license information please see 5336.f9a88b17c58242ef4e91-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [5336], {
        549556: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var a = n(468420),
                i = n(844845),
                o = function t() {
                    (0, a.Z)(this, t)
                };
            (0, i.Z)(o, "EDIT_CLICK_MESSAGE", "EDIT_CLICK_MESSAGE"), (0, i.Z)(o, "GALLERY_ADD_IMAGE_MESSAGE", "GALLERY_ADD_IMAGE_MESSAGE"), (0, i.Z)(o, "GALLERY_ITEM_CLICK_MESSAGE", "GALLERY_ITEM_CLICK_MESSAGE"), (0, i.Z)(o, "INITITAL_SECTION_LIST_MESSAGE", "INITITAL_SECTION_LIST_MESSAGE"), (0, i.Z)(o, "AVAILABLE_SECTION_MESSAGE", "AVAILABLE_SECTION_MESSAGE"), (0, i.Z)(o, "SECTIONS_UPDATE_MESSAGE", "SECTIONS_UPDATE_MESSAGE"), (0, i.Z)(o, "BACKGROUND_CLICK_MESSAGE", "BACKGROUND_CLICK_MESSAGE"), (0, i.Z)(o, "CLICK_ADD_BACKGROUND_MESSAGE", "CLICK_ADD_BACKGROUND_MESSAGE"), (0, i.Z)(o, "UPDATE_NAVIGATOR", "UPDATE_NAVIGATOR"), (0, i.Z)(o, "PAGE_LOADED", "PAGE_LOADED"), (0, i.Z)(o, "WEB_EDITOR_LOCK", "WEB_EDITOR_LOCK"), (0, i.Z)(o, "WEB_EDITOR_UNLOCK", "WEB_EDITOR_UNLOCK"), (0, i.Z)(o, "JUMP_TO_DASHBOARD", "JUMP_TO_DASHBOARD"), (0, i.Z)(o, "SAVE_STATUS_CHANGED", "SAVE_STATUS_CHANGED"), (0, i.Z)(o, "SESSION_TIMEOUT_REDIRECT", "SESSION_TIMEOUT_REDIRECT"), (0, i.Z)(o, "UPDATE_EDITOR_UNDO_REDO", "UPDATE_EDITOR_UNDO_REDO"), (0, i.Z)(o, "EXIT_EDITOR", "EXIT_EDITOR"), (0, i.Z)(o, "OPEN_SECTION_ITEM_MENU", "OPEN_SECTION_ITEM_MENU"), (0, i.Z)(o, "OPEN_EXTERNAL_LINK_ITEM_MENU", "OPEN_EXTERNAL_LINK_ITEM_MENU"), (0, i.Z)(o, "OPEN_MULTIPLE_PAGE_EXTERNAL_LINK_ITEM_MENU", "OPEN_MULTIPLE_PAGE_EXTERNAL_LINK_ITEM_MENU"), (0, i.Z)(o, "OPEN_PAGE_ITEM_MENU", "OPEN_PAGE_ITEM_MENU"), (0, i.Z)(o, "OPEN_DROPDOWN_ITEM_MENU", "OPEN_DROPDOWN_ITEM_MENU"), (0, i.Z)(o, "INITIALIZE_NATIVE_EDITOR_DATA", "INITIALIZE_NATIVE_EDITOR_DATA"), (0, i.Z)(o, "SWITCH_PAGE_START", "SWITCH_PAGE_START"), (0, i.Z)(o, "SWITCH_PAGE_END", "SWITCH_PAGE_END"), (0, i.Z)(o, "OPEN_AUDIENCE_DETAIL", "OPEN_AUDIENCE_DETAIL"), (0, i.Z)(o, "BLOG_IS_SAVING", "BLOG_IS_SAVING"), (0, i.Z)(o, "BLOG_IS_SAVED", "BLOG_IS_SAVED"), (0, i.Z)(o, "BLOG_CLICK_PREVIEW", "BLOG_CLICK_PREVIEW"), (0, i.Z)(o, "BLOG_CLICK_SETTINGS", "BLOG_CLICK_SETTINGS"), (0, i.Z)(o, "BLOG_CLICK_PUBLISH", "BLOG_CLICK_PUBLISH"), (0, i.Z)(o, "BLOG_CLICK_EXIT", "BLOG_CLICK_EXIT"), (0, i.Z)(o, "BLOG_CLICK_CANCEL_SCHEDULE", "BLOG_CLICK_CANCEL_SCHEDULE"), (0, i.Z)(o, "BLOG_SAVE_CONTENT", "BLOG_SAVE_CONTENT"), (0, i.Z)(o, "BLOG_CLICK_EDITOR_SECTION", "BLOG_CLICK_EDITOR_SECTION")
        },
        861704: function(t, e, n) {
            n.r(e), n.d(e, {
                addMetaId: function() {
                    return u
                },
                replaceMetaId: function() {
                    return s
                }
            });
            var a = n(729828),
                i = n.n(a),
                o = n(175892),
                l = n(496486),
                r = n(468811),
                u = function(t) {
                    return (0, o.traverseObj)(t, (function(t) {
                        (l.isUndefined(t.id) || l.isNull(t.id)) && (t.id = "f_" + r.v4())
                    }), (function(t) {
                        return l.isString(t.type)
                    })), t
                },
                s = function(t) {
                    return (0, o.traverseObj)(t, (function(t) {
                        var e;
                        (l.isUndefined(t.id) || l.isNull(t.id) || i()(e = t.id).call(e, "f_")) && (t.id = "f_" + r.v4())
                    }), (function(t) {
                        return l.isString(t.type)
                    })), t
                }
        },
        175892: function(t, e, n) {
            n.r(e), n.d(e, {
                traverseObj: function() {
                    return d
                },
                isArrayContain: function() {
                    return c
                }
            });
            var a = n(778914),
                i = n.n(a),
                o = n(277149),
                l = n.n(o),
                r = n(678580),
                u = n.n(r),
                s = n(496486),
                d = function t(e, n, a) {
                    a = a || function(t) {
                        return t == t
                    }, s.isArray(e) ? i()(s).call(s, e, (function(e) {
                        t(e, n, a)
                    })) : s.isPlainObject(e) && (a(e) && n(e), i()(s).call(s, e, (function(e) {
                        t(e, n, a)
                    })))
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return l()(s).call(s, t, (function(t) {
                        return !!u()(e).call(e, t)
                    }))
                }
        },
        809797: function(t, e, n) {
            n.r(e), n.d(e, {
                COLOR_SCHEME_KEY: function() {
                    return a
                },
                COLOR_KEYS: function() {
                    return i
                },
                COLOR_SELECTORS: function() {
                    return o
                },
                COLOR_PLATE_DEFAULT_COLORS: function() {
                    return l
                }
            });
            var a = {
                    HIGHLIGHT1: "highlight1",
                    HIGHLIGHT2: "highlight2"
                },
                i = [a.HIGHLIGHT1, a.HIGHLIGHT2],
                o = [{
                    active: !0,
                    highlight1: "#E74C3C"
                }, {
                    active: !0,
                    highlight1: "#57BCDB"
                }, {
                    active: !0,
                    highlight1: "#F1A852"
                }, {
                    active: !0,
                    highlight1: "#9B59B6"
                }, {
                    active: !0,
                    highlight1: "#31CC71"
                }, {
                    active: !0,
                    highlight1: "#111111"
                }, {
                    active: !0,
                    highlight1: "#268060",
                    highlight2: "#FACB67"
                }, {
                    active: !0,
                    highlight1: "#3E5641",
                    highlight2: "#E6E1C5"
                }, {
                    active: !0,
                    highlight1: "#6F2DEB",
                    highlight2: "#EFE6FE"
                }, {
                    active: !0,
                    highlight1: "#2C2F83",
                    highlight2: "#F79792"
                }, {
                    active: !0,
                    highlight1: "#F08E80",
                    highlight2: "#1E555C"
                }, {
                    active: !0,
                    highlight1: "#C3A769",
                    highlight2: "#F3EEE1"
                }],
                l = ["#ffffff", "#555555", "#000000", "#816354", "#ff4d4d", "#ffa64d", "#9cce06", "#26c9ff"]
        },
        31484: function(t, e, n) {
            n.d(e, {
                XO: function() {
                    return o
                },
                qX: function() {
                    return l
                },
                Yc: function() {
                    return r
                }
            });
            var a = n(977766),
                i = n.n(a);

            function o(t) {
                return ""
            }

            function l(t) {
                return "& .s-nav-items-and-links .s-nav-li {\n      &.selected,\n      &:hover,\n      &.s-navbar-dropdown ul,\n      &:not(.s-navbar-dropdown):hover a {\n        & a:not(.s-navbar-dropdown) {\n          color: ".concat(t.navHighlightColor, "\n          opacity: 1;\n        }\n      }\n    }\n  ")
            }

            function r(t) {
                var e;
                return i()(e = "\n    & .s-nav-items-and-links .s-nav-li:not(.login-container) {\n      &.selected,\n      &:hover,\n      &.s-navbar-dropdown:hover ul,\n      &.selected.s-navbar-dropdown ul {\n        background: ".concat(t.navHighlightColor, ";\n        & a:not(.s-navbar-dropdown), .s-nav-dropdown-item {\n          color: ")).call(e, t.navHighlightTextColor, ";\n        }\n      }\n    }\n  ")
            }
        },
        611384: function(t, e, n) {
            n.d(e, {
                Eg: function() {
                    return h
                },
                E5: function() {
                    return m
                },
                es: function() {
                    return b
                },
                f3: function() {
                    return C
                },
                MP: function() {
                    return S
                },
                Re: function() {
                    return E
                },
                Q: function() {
                    return T
                },
                p9: function() {
                    return y
                },
                $i: function() {
                    return I
                },
                nf: function() {
                    return w
                },
                Nv: function() {
                    return x
                },
                rF: function() {
                    return P
                },
                Ds: function() {
                    return N
                },
                q$: function() {
                    return k
                },
                pk: function() {
                    return A
                },
                oN: function() {
                    return B
                },
                AN: function() {
                    return L
                }
            });
            var a = n(778914),
                i = n.n(a),
                o = n(703649),
                l = n.n(o),
                r = n(678580),
                u = n.n(r),
                s = n(977766),
                d = n.n(s),
                c = n(223336),
                g = n(468811),
                f = n(143393),
                p = n(836766),
                v = "1.09166669%";

            function h(t) {
                return t.overlapsContent && "\n      position: absolute;\n      left: 0;\n      z-index: 201;\n      width: 100%;\n      // Navigation can't cover the current page content, so need to navigate the actual height\n      &.s-navbar-desktop-normal {\n        .s-product-page-content &,\n        .s-booking-page-content &,\n        .s-item-page-content & {\n          position: static;\n        }\n      }\n    "
            }

            function m(t) {
                return "\n    box-sizing: border-box;\n    & {\n      .s-nav-inner, .s-nav-inner-wrap {\n        margin: auto;\n      }\n    }\n  "
            }

            function b() {
                return "\n    & .s-nav-items-and-links,\n    .s-nav-items-and-links > ul,\n    .s-nav-icons,\n    .s-nav-icons li,\n    .s-nav-btn,\n    .s-nav-btn > *:not(style) {\n      display: inline;\n    }\n  "
            }

            function C(t) {
                var e, n, a, i, o = t.items,
                    l = t.containerSizes,
                    r = t.navOrientation,
                    u = t.spaceForEllipsis,
                    s = void 0 === u ? 0 : u,
                    d = 0,
                    g = 0,
                    f = [],
                    p = 0;

                function v() {
                    f.push(p), d = 0, p = 0, g++
                }

                function h() {
                    return v(), {
                        total: e,
                        perContainer: f
                    }
                }
                for (e = 0; e < o.length; e++) {
                    d += (void 0, a = void 0, i = void 0, n = {
                        horizontal: "outerWidth",
                        vertical: "outerHeight"
                    }[r], i = (a = c(o[e]))[n](!0), a.is(":visible") || (i = 0), i);
                    var m = g === l.length - 1,
                        _ = l[g] - (m ? s : 0);
                    if (d >= _) {
                        if (m) return h();
                        e--, v()
                    } else p++
                }
                return h()
            }

            function S(t, e, n, a) {
                var o = n ? [t.fixed] : [t.normal, t.fixed];
                i()(o).call(o, (function(t) {
                    var n = t.container,
                        i = t.ellipsis,
                        o = t.navInner,
                        r = t.uncollapsedNav,
                        u = t.uncollapsedNavItems,
                        s = t.collapsedNavItems;
                    n.addClass("_maximize-nav-item-space"), u.removeClass("hidden"), s.removeClass("hidden"), i.addClass("hidden");
                    var d = (a || r.width()) - 60;
                    "centered" === e.topContentWidth && (d = c(n).outerWidth() - (c(o).outerWidth() - c(r).outerWidth()));
                    var g = C({
                        items: u,
                        containerSizes: [d],
                        navOrientation: e.orientation,
                        spaceForEllipsis: i.outerWidth()
                    });
                    l()(u).call(u, g.total).addClass("hidden"), g.total < u.length && (l()(s).call(s, 0, g.total).addClass("hidden"), i.removeClass("hidden")), n.removeClass("_maximize-nav-item-space")
                }))
            }

            function E(t, e) {
                var n = e ? [t.fixed] : [t.normal, t.fixed];
                i()(n).call(n, (function(t) {
                    var e = t.ellipsis,
                        n = t.uncollapsedNavItems,
                        a = t.collapsedNavItems;
                    n.removeClass("hidden"), a.removeClass("hidden"), e.addClass("hidden")
                }))
            }

            function T(t, e, n) {
                if (n && "function" == typeof n.toJS) {
                    var a = t;
                    i()(e).call(e, (function(t) {
                        (function(t, e) {
                            var n = t.get("components.".concat(e, ".url"));
                            return !n || "/images/icons/transparent.png" === n
                        })(a, t) && (a = function(t, e, n) {
                            if (!n || "function" != typeof n.toJS) return t;
                            var a = f.fromJS(_.assign({}, null == n ? void 0 : n.toJS(), {
                                id: g.v4()
                            }));
                            return t.sub(["components", e]).set(a)
                        }(a, t, n))
                    }))
                }
            }

            function y(t, e) {
                t.sub(["components", e, "url"]).set("")
            }

            function I(t) {
                return !t || "" === t || "#fff" === t || "#ffffff" === t || "white" === t || "transparent" === t || "rgba(0, 0, 0, 0)" === t
            }

            function w(t, e) {
                var n = t || {},
                    a = n.isSticky,
                    i = n.dropShadow,
                    o = n.isTransparent,
                    l = n.backgroundColor1,
                    r = (n.border || {}).enable,
                    s = o || !(null != e && u()(e).call(e, "border")) || !r;
                return a && "no" === i && s && I(l)
            }

            function x() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "last",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    a = "",
                    i = "block" === n ? "7px" : 0;
                return "right" === t ? "last" === e ? a = "\n        & > :last-child.s-nav-items-and-links .s-uncollapsed-nav {\n          li:nth-last-child(1), li:nth-last-child(2) {\n            .s-nav-link-container {\n              padding-right: ".concat(i, ";\n            }\n          }\n        }\n      ") : "first" === e && (a = "\n        & > :first-child.s-nav-items-and-links .s-uncollapsed-nav {\n          li:first-child {\n            .s-nav-link-container {\n              padding-right: ".concat(i, ";\n            }\n          }\n        }\n      ")) : "left" === t && ("first" === e ? a = "\n        & > :first-child.s-nav-items-and-links .s-uncollapsed-nav {\n          li:first-child {\n            .s-nav-link-container {\n              padding-left: ".concat(i, ";\n            }\n          }\n        }\n      ") : "last" === e && (a = "\n        & > :last-child.s-nav-items-and-links .s-uncollapsed-nav {\n          li:nth-last-child(1), li:nth-last-child(2) {\n            .s-nav-link-container {\n              padding-left: ".concat(i, ";\n            }\n          }\n        }\n      "))), a
            }

            function P() {
                var t, e, n, a, i, o, l, r, u, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
                    c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "last",
                    g = "left" === s ? "padding-left: 0;" : "padding-right: 0;",
                    f = "last" === c ? ":last-child" : ":first-child";
                return d()(t = d()(e = d()(n = d()(a = d()(i = d()(o = d()(l = d()(r = d()(u = "\n    & > ".concat(f, ".s-nav-icons {\n      & > ")).call(u, f, ".site-search .s-nav-link-container {\n        ")).call(r, g, ";\n      }\n      & > ")).call(l, f, ".membership-nav-container > .s-nav-li {\n        & > ")).call(o, f, ".s-nav-li .s-nav-link-container {\n          ")).call(i, g, ";\n        }\n      }\n      & > ")).call(a, f, ".shopping-cart-nav-container > .s-nav-link-container {\n        ")).call(n, g, ";\n      }\n      & > ")).call(e, f, ".multi-lang-nav-container > .multi-lang-nav > .s-nav-dropdown > .s-nav-link-container {\n        ")).call(t, g, ";\n      }\n    }\n  ")
            }

            function N() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "last",
                    a = "left" === e ? "padding-left: 0;" : "padding-right: 0;",
                    i = "last" === n ? ":last-child" : ":first-child";
                return d()(t = "\n    & > ".concat(i, ".s-nav-btn {\n      ")).call(t, a, ";\n    }\n  ")
            }

            function k() {
                var t, e, n, a, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "last",
                    l = "left" === i ? "margin-left: 0;" : "margin-right: 0;",
                    r = "left" === i ? "padding-left: 0;" : "padding-right: 0;",
                    u = "last" === o ? ":last-child" : ":first-child";
                return d()(t = d()(e = d()(n = d()(a = "\n    & > ".concat(u, ".s-nav-social-media {\n      ")).call(a, r, ";\n      .s-social-media-buttons-wrap > ")).call(n, u, ".s-social-media-button {\n        ")).call(e, l, ";\n      }\n      .social-media-link-wrap {\n        ")).call(t, l, ";\n      }\n    }\n  ")
            }

            function A() {
                var t, e, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "last",
                    o = "last" === i ? ":last-child" : ":first-child",
                    l = "left" === a ? "margin-left: 0;" : "margin-right: 0;",
                    r = d()(t = d()(e = d()(n = "\n      & > .s-nav-social-media.has-social-media-contact-list {\n        & > .social-media-contact-list-wrapper {\n          & > ".concat(o, ".social-media-link-wrap {\n            ")).call(n, l, ";\n          }\n          & > ")).call(e, o, ".social-media-contact-list-wrap {\n            ")).call(t, l, ";\n          }\n        }\n      }\n  ");
                return r
            }

            function B(t) {
                var e, n, a, i, o, l, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (t) {
                    case "full":
                        l = 0;
                        break;
                    case "section":
                        l = v;
                        break;
                    default:
                        l = 0
                }
                var u = r ? "margin-right" : "margin-left",
                    s = r ? "margin-left" : "margin-right",
                    c = r ? "padding-right" : "padding-left",
                    g = r ? "padding-left" : "padding-right",
                    f = d()(e = d()(n = d()(a = d()(i = d()(o = "\n      & > :first-child {\n        ".concat(u, ": ")).call(o, l, ";\n        ")).call(i, c, ": 0;\n      }\n      & > :last-child {\n        ")).call(a, s, ": ")).call(n, l, ";\n        ")).call(e, g, ": 0;\n      }\n  ");
                return f
            }

            function L(t) {
                return !t || (t.type || (null == t ? void 0 : t.get("type"))) === p.TEXT_COLOR_TYPE.DEFAULT
            }
        },
        727505: function(t, e, n) {
            n.r(e), n.d(e, {
                DISABLED_TRANSPARENT_LAYOUTS: function() {
                    return $
                },
                LAYOUTS_UPGRADE_CONFIG: function() {
                    return U
                },
                LAYOUT_E_VERSIONS: function() {
                    return R
                },
                NAV_COLORS_KEYS: function() {
                    return O
                },
                NAV_LAYOUT_KEYS: function() {
                    return r
                },
                NAV_LAYOUT_UPGRADE_STATUS: function() {
                    return M
                },
                NAV_LOGO_MAX_HEIGHT: function() {
                    return j
                },
                getNavByLayout: function() {
                    return z
                },
                getNavByName: function() {
                    return V
                },
                getNavLayoutCurrentVersion: function() {
                    return W
                },
                layouts: function() {
                    return H
                },
                layoutsMap: function() {
                    return G
                },
                layoutsSettings: function() {
                    return F
                },
                navs: function() {
                    return Z
                }
            });
            var a, i, o, l, r, u = n(859056),
                s = n(844845),
                d = n(2991),
                c = n.n(d),
                g = n(780426),
                f = n.n(g),
                p = n(626295),
                v = n.n(p),
                h = n(20455),
                m = n.n(h),
                _ = n(694473),
                b = n.n(_),
                C = n(468420),
                S = n(327344),
                E = n(778914),
                T = n.n(E),
                y = n(686902),
                I = n.n(y),
                w = n(678580),
                x = n.n(w),
                P = n(353147),
                N = function() {
                    function t(e) {
                        var n, a = this;
                        (0, C.Z)(this, t), (0, s.Z)(this, "name", void 0), (0, s.Z)(this, "layout", void 0), (0, s.Z)(this, "label", void 0), (0, s.Z)(this, "i18nDisplayName", void 0), (0, s.Z)(this, "_nameForPoGenerator", void 0), (0, s.Z)(this, "orientation", void 0), (0, s.Z)(this, "getPageWrapperStyle", void 0), (0, s.Z)(this, "getStyle", void 0), (0, s.Z)(this, "templateFunction", void 0), (0, s.Z)(this, "enabledNavOptions", void 0), (0, s.Z)(this, "afterRender", void 0), (0, s.Z)(this, "shouldShowFixedNav", void 0), (0, s.Z)(this, "shouldHideNormalNav", void 0), (0, s.Z)(this, "shouldShowAlternativeFixedNavVariation", void 0), (0, s.Z)(this, "nullHighlightColorMeansUnderline", void 0), (0, s.Z)(this, "getDropdownBackgroundColor", void 0), (0, s.Z)(this, "showDropdownBesideText", void 0), T()(n = I()(e)).call(n, (function(t) {
                            return a[t] = e[t]
                        }))
                    }
                    return (0, S.Z)(t, [{
                        key: "displayName",
                        get: function() {
                            return P(this.i18nDisplayName)
                        }
                    }, {
                        key: "supportsSettingKey",
                        value: function(t) {
                            var e;
                            return "name" === t || "layout" === t || "colors" === t || "fontSize" === t || "showSocialMedia" === t || x()(e = this.enabledNavOptions).call(e, t)
                        }
                    }, {
                        key: "supportsNavbarTranslucency",
                        value: function() {
                            return "vertical" !== this.orientation && "topCenter" !== this.name && "circleIcon" !== this.name
                        }
                    }]), t
                }(),
                k = n(496486),
                A = n(589499),
                B = n(353147);
            ! function(t) {
                t.A = "a", t.B = "b", t.C = "c", t.D = "d", t.E = "e", t.F = "f", t.G = "g", t.H = "h", t.I = "i"
            }(r || (r = {}));
            var L, D, O, M = {
                    UPGRADING: "upgrading",
                    DONE: "done"
                },
                R = {
                    V1: "v1",
                    V2: "v2"
                },
                U = (0, s.Z)({}, r.E, {
                    from: R.V1,
                    to: R.V2
                }),
                Z = c()(a = [n(609304).Z, n(752118).Z, n(586640).Z, n(257367).Z, n(386457).Z, n(648509).Z, n(45140).Z]).call(a, (function(t) {
                    return new N(t)
                })),
                G = (i = {}, (0, s.Z)(i, r.A, "topBar"), (0, s.Z)(i, r.B, "topBar"), (0, s.Z)(i, r.C, "topBar"), (0, s.Z)(i, r.D, "topRadial"), (0, s.Z)(i, r.E, "topCenter"), (0, s.Z)(i, r.F, "circleIcon"), (0, s.Z)(i, r.G, "left"), (0, s.Z)(i, r.H, "topBlock"), (0, s.Z)(i, r.I, "drawer"), i),
                F = (l = {}, (0, s.Z)(l, r.A, {
                    name: "topBar",
                    displayName: r.A,
                    isTransparent: !0,
                    presetColorName: "transparent",
                    topContentWidth: "full",
                    itemSpacing: "compact",
                    dropShadow: "no",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.B, {
                    name: "topBar",
                    displayName: r.B,
                    isTransparent: !0,
                    presetColorName: "transparent",
                    topContentWidth: "full",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.C, {
                    name: "topBar",
                    displayName: r.C,
                    isTransparent: !0,
                    presetColorName: "transparent",
                    topContentWidth: "full",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.D, {
                    name: "topRadial",
                    displayName: r.D,
                    isTransparent: !0,
                    presetColorName: "transparent",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.E, {
                    defaultVersion: R.V1,
                    versions: (o = {}, (0, s.Z)(o, R.V2, {
                        name: "topCenter",
                        displayName: r.E,
                        layoutVersion: R.V2,
                        isTransparent: !1,
                        presetColorName: "whiteMinimal",
                        backgroundColor1: "#fff",
                        itemColor: "#000",
                        highlightColor: null,
                        padding: "medium",
                        fontSize: "medium",
                        isSticky: !0,
                        highlight: {
                            type: "underline",
                            textColor: null,
                            blockTextColor: null,
                            blockBackgroundColor: null,
                            blockShape: "pill"
                        }
                    }), (0, s.Z)(o, R.V1, {
                        name: "topCenter",
                        displayName: function() {
                            return B("Editor|Layout E - Old version")
                        },
                        layoutVersion: R.V1,
                        isTransparent: !1,
                        presetColorName: "whiteMinimal",
                        backgroundColor1: "#fff",
                        itemColor: "#000",
                        highlightColor: null,
                        padding: "medium",
                        fontSize: "medium",
                        isSticky: !0,
                        highlight: {
                            type: "underline",
                            textColor: null,
                            blockTextColor: null,
                            blockBackgroundColor: null,
                            blockShape: "pill"
                        }
                    }), o)
                }), (0, s.Z)(l, r.F, {
                    name: "circleIcon",
                    displayName: r.F,
                    isTransparent: !1,
                    presetColorName: "whiteMinimal",
                    backgroundColor1: "#fff",
                    itemColor: "#000",
                    highlightColor: null,
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.G, {
                    name: "left",
                    displayName: r.G,
                    isTransparent: !1,
                    presetColorName: "whiteMinimal",
                    backgroundColor1: "#fff",
                    itemColor: "#000",
                    highlightColor: null,
                    topContentWidth: "medium",
                    padding: "medium",
                    fontSize: "medium",
                    horizontalContentAlignment: "left",
                    verticalContentAlignment: "top",
                    isSticky: !0,
                    highlight: {
                        type: "color",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.H, {
                    name: "topBlock",
                    displayName: r.H,
                    isTransparent: !1,
                    presetColorName: "whiteMinimal",
                    backgroundColor1: "#fff",
                    itemColor: "#000",
                    highlightColor: null,
                    topContentWidth: "full",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0,
                    highlight: {
                        type: "underline",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    }
                }), (0, s.Z)(l, r.I, {
                    name: "drawer",
                    displayName: r.I,
                    isTransparent: !0,
                    presetColorName: "transparent",
                    backgroundColor1: "#fff",
                    itemColor: "#000",
                    highlightColor: null,
                    highlight: {
                        type: "color",
                        textColor: null,
                        blockTextColor: null,
                        blockBackgroundColor: null,
                        blockShape: "pill"
                    },
                    topContentWidth: "full",
                    itemSpacing: "compact",
                    dropShadow: "no",
                    padding: "medium",
                    fontSize: "medium",
                    isSticky: !0
                }), l),
                H = (D = f()(L = v()(F)).call(L, (function(t) {
                    var e, n = (0, u.Z)(t, 2),
                        a = n[0],
                        i = n[1];
                    return i.versions ? c()(e = m()(i.versions)).call(e, (function(t) {
                        return {
                            layout: a,
                            settings: t
                        }
                    })) : [{
                        layout: a,
                        settings: i
                    }]
                })), c()(D).call(D, (function(t) {
                    var e = t.layout,
                        n = t.settings;
                    return new N(k.assign({}, b()(Z).call(Z, (function(t) {
                        return t.name === n.name
                    })), {
                        label: n.displayName,
                        layout: e,
                        thumbnail: (0, A.cdnAssetPath)("/images/editor2/nav/icon-".concat(e, ".svg")),
                        defaultSettings: k.omit(n, "displayName")
                    }))
                })));

            function V(t) {
                return k.find(Z, {
                    name: t
                })
            }

            function W(t, e) {
                var n;
                return ((null == e ? void 0 : e[t]) || {}).currentVersion || (null === (n = F[t]) || void 0 === n ? void 0 : n.defaultVersion)
            }

            function z(t) {
                return k.find(H, {
                    layout: t
                })
            }! function(t) {
                t.BackgroundColor = "backgroundColor1", t.ItemColor = "itemColor", t.HighlightColor = "highlightColor", t.IsTransparent = "isTransparent"
            }(O || (O = {}));
            var $ = [r.E, r.F, r.G, r.H],
                j = {
                    topBar: 60,
                    topRadial: 50,
                    topCenter: 150,
                    circleIcon: 100,
                    left: null,
                    topBlock: 46
                }
        },
        386457: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return v
                }
            });
            var a = n(863056),
                i = n(977766),
                o = n.n(i),
                l = n(933032),
                r = n.n(l),
                u = (n(366757), n(611384)),
                s = n(31484),
                d = n(223336),
                c = n(734274),
                g = n(353147),
                f = {
                    small: 20,
                    medium: 30,
                    large: 40,
                    extra: 55
                },
                p = ["colors", "padding", "backgroundColor1", "isSticky", "itemSpacing", "dropShadow", "highlight"],
                v = {
                    name: "circleIcon",
                    i18nDisplayName: "Editor|Circle Icon",
                    _nameForPoGenerator: function() {
                        return g("Editor|Circle Icon")
                    },
                    orientation: "horizontal",
                    getStyle: function(t) {
                        var e, n, a, i, l, r, d, g, v, h, m, _, b, C, S, E, T, y, I, w, x, P, N, k, A = t.isRtlLayout,
                            B = Math.max(t.padding, 20),
                            L = f[(null == t || null === (e = t.navTheme) || void 0 === e ? void 0 : e.padding) || "medium"],
                            D = (0, u.nf)(t, p);
                        return k = A ? function() {
                            var t, e, n = (0, u.rF)("left", "last"),
                                a = (0, u.Ds)("left", "last"),
                                i = (0, u.q$)("right", "first");
                            return o()(t = o()(e = "\n    .s-nav-inner-wrap {\n      & > .s-nav-logo-wrapper {\n        ".concat(i, ";\n\n        & > .s-icon-button {\n          ")).call(e, n, ";\n          ")).call(t, a, ";\n        }\n      }\n    }\n  ")
                        }() : function() {
                            var t, e, n = (0, u.rF)("right", "last"),
                                a = (0, u.Ds)("right", "last"),
                                i = (0, u.q$)("left", "first");
                            return o()(t = o()(e = "\n    .s-nav-inner-wrap {\n      & > .s-nav-logo-wrapper {\n        ".concat(i, ";\n\n        & > .s-icon-button {\n          ")).call(e, n, ";\n          ")).call(t, a, ";\n        }\n      }\n    }\n  ")
                        }(), o()(n = o()(a = o()(i = o()(l = o()(r = o()(d = o()(g = o()(v = o()(h = o()(m = o()(_ = o()(b = o()(C = o()(S = o()(E = o()(T = o()(y = o()(I = o()(w = o()(x = o()(P = o()(N = "\n    ".concat("", ";\n\n    .s-nav-top-center-item-container {\n      & > .s-nav-social-media, & > .s-icon-button {\n        top: ")).call(N, L, "px;\n      }\n      & > .s-icon-button {\n        ")).call(P, A ? "left: ".concat(L, "px;") : "right: ".concat(L, "px;"), ";\n        ")).call(x, A ? "right" : "left", ": unset;\n      }\n      & > .s-nav-social-media {\n        ")).call(w, A ? "right: ".concat(L, "px") : "left: ".concat(L, "px"), ";\n        ")).call(I, A ? "left" : "right", ": unset;\n      }\n    }\n\n    &._alternative {\n      box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n      &.not-in-sticky {\n        box-shadow: none;\n      }\n      .s-nav-top-center-item-container {\n        & > .s-nav-social-media, & > .s-icon-button {\n          top: 50%;\n          transform: translateY(-50%);\n        }\n        & > .s-icon-button {\n          transform: translateY(-50%);\n          ")).call(y, A ? "left: 0;" : "right: 0;", ";\n        }\n        & > .s-nav-social-media {\n          ")).call(T, A ? "right: 0;" : "left: 0;", ";\n        }\n      }\n    }\n    text-align: center;\n\n    & .s-logo-image {\n      margin-bottom: 15px;\n    }\n\n    &.has-new-layout {\n      .noImage {\n        display: none;\n        box-shadow: none;\n      }\n      &:hover {\n        .noImage {\n          display: block;\n        }\n      }\n    }\n\n    &.s-new-layout.circleIcon.s-new-layout-f:not(.has-button)\n      .s-nav-social-media:not(.has-social-media-contact-list) {\n      padding-top: 0;\n    }\n\n    & .s-logo-title {\n      max-width: 100%;\n      font-size: ")).call(E, c.LOGO_TITLE_FONT_SIZE[c.NAV_LAYOUT_VALUE.CIRCLE_ICON], "px;\n      margin-bottom: 15px;\n    }\n    & ul.s-uncollapsed-nav > li {\n      display: inline-block;\n      padding: 5px 10px;\n    }\n    & .s-button {\n      display: inline-block;\n    }\n\n    & ul li._compact {\n      padding-left: 4px;\n      padding-right: 4px;\n    }\n\n    & .s-logo-image img {\n      max-height: 100px;\n    }\n\n    &.s-new-layout.circleIcon.s-new-layout-f {\n      .s-nav-top-center-item-container {\n        z-index: 3;\n      }\n      .s-logo-image-2-container-inner {\n        z-index: 2;\n      }\n    }\n\n    & .s-logo-image-2-container-inner {\n      position: relative;\n      margin: auto;\n      width: 54px;\n      & > * {\n        position: absolute;\n        top: ")).call(S, B - 25, "px;\n\n        left: 0;\n        z-index: -2;\n        padding: 5px;\n        background: ")).call(C, t.backgroundColor1, ";\n        box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        height: 40px;\n        width: 40px;\n        border-radius: 100px;\n        &:before {\n          content: '';\n          background: ")).call(b, t.backgroundColor1, ";\n          top: -5px;\n          left: -8px;\n          width: 65px;\n          display: block;\n          position: absolute;\n          z-index: -1;\n          height: 30px;\n        }\n      }\n    }\n    &._alternative {\n      & .s-logo-title {\n        visibility: hidden;\n      }\n    }\n\n    &.s-navbar-desktop-normal .s-nav-inner {\n      opacity: 0;\n    }\n\n    &.s-navbar-desktop-fixed {\n      transition: top 0.3s, padding-bottom 0.3s;\n      .s-icon-button .s-nav-btn {\n        .s-button.s-component {\n          display: block;\n        }\n        .s-common-button {\n          max-width: 300px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      }\n      ")).call(_, D ? "\n        &._alternative {\n          box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        }\n      " : "", "\n      &._alternative .s-nav-inner {\n        position: relative;\n        .s-nav-top-center-item-container {\n          position: relative;\n          margin-top: ")).call(m, B, "px;\n        }\n      }\n    }\n    &.circleIcon .s-nav-inner {\n      .s-nav-social-media.has-social-media-contact-list {\n        width: 100%;\n        padding: 8px ")).call(h, L, "px 8px;\n        box-sizing: border-box;\n      }\n      .s-nav-inner-wrap {\n        padding: ")).call(v, L, "px;\n        padding-bottom: ")).call(g, B, "px;\n      }\n    }\n\n    ")).call(d, (0, s.XO)(t), ";\n    ")).call(r, (0, s.qX)(t), ";\n    ")).call(l, (0, u.Eg)(t), ";\n    ")).call(i, (0, u.E5)(t), ";\n    ")).call(a, (0, u.es)(), ";\n    ")).call(n, k, ";\n  ")
                    },
                    templateFunction: function(t) {
                        var e = t.LogoImage1,
                            n = t.LogoImage2,
                            i = t.LogoTitle,
                            o = t.NavItemsAndLinks,
                            l = t.NavIcons,
                            r = t.NavButton,
                            u = t.NavContentContainer;
                        return (0, a.Z)(u, {}, void 0, (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)(e, {}), (0, a.Z)("div", {}, void 0, (0, a.Z)(i, {}))), (0, a.Z)("div", {
                            className: "s-nav-top-center-item-container"
                        }, void 0, (0, a.Z)(o, {}), (0, a.Z)(l, {}), (0, a.Z)(r, {})), (0, a.Z)("div", {
                            className: "s-logo-image-2-container"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-logo-image-2-container-inner"
                        }, void 0, (0, a.Z)(n, {}))))
                    },
                    newLayoutTemplateFunction: function(t) {
                        var e = t.LogoImage1,
                            n = t.LogoImage2,
                            i = t.LogoTitle,
                            o = t.NavItemsAndLinks,
                            l = t.NavIcons,
                            r = t.NavButton,
                            u = t.NavContentContainer,
                            s = t.NavSocialMedia,
                            d = t.NavSocialMediaHasContactList;
                        return (0, a.Z)(u, {}, void 0, (0, a.Z)(d, {}), (0, a.Z)("div", {
                            className: "s-nav-inner-wrap"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-nav-logo-wrapper"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)(e, {}), (0, a.Z)("div", {}, void 0, (0, a.Z)(i, {})))), (0, a.Z)("div", {
                            className: "s-nav-top-center-item-container"
                        }, void 0, (0, a.Z)(s, {}), (0, a.Z)(o, {}), (0, a.Z)("div", {
                            className: "s-icon-button"
                        }, void 0, (0, a.Z)(l, {}), (0, a.Z)(r, {}))), (0, a.Z)("div", {
                            className: "s-logo-image-2-container"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-logo-image-2-container-inner"
                        }, void 0, (0, a.Z)(n, {})))))
                    },
                    enabledNavOptions: p,
                    estimateNavHeight: function(t) {
                        return 60 + 2 * t.padding + 100
                    },
                    shouldShowFixedNav: function(t, e) {
                        return !0
                    },
                    shouldShowAlternativeFixedNavVariation: function(t, e, n) {
                        var a = t.normal,
                            i = (a.container, a.logoImage),
                            o = a.logoTitle,
                            l = (n.padding || 0) + (i.height() || 0) + (o.height() || 0) + 20;
                        return d(window).scrollTop() > l
                    },
                    collapseNav: function(t, e) {
                        var n = ".s-navbar-desktop-fixed",
                            a = d("".concat(n, " .s-nav-top-center-item-container .s-nav-social-media")).outerWidth() || 0,
                            i = d("".concat(n, " .s-nav-top-center-item-container .s-icon-button")).outerWidth() || 0,
                            o = (d("".concat(n)).outerWidth() || 0) - 2 * Math.max(i, a);
                        (0, u.MP)(t, e, !0, o)
                    },
                    afterRender: function(t, e, n, a) {
                        var i = t.fixed.container;
                        if (n.isSticky)
                            if (a.showFixedNavAlternativeVariation) {
                                var o, l = null === (o = d(t.normal.uncollapsedNav[0]).parent().parent().offset()) || void 0 === o ? void 0 : o.top;
                                null != a && a.isPreviewMode && (l -= 30), i.css("top", "".concat(-l, "px")), this.collapseNav(t, e)
                            } else {
                                var s = null != a && a.isPreviewMode ? 30 : 0;
                                i.css("top", s), (0, u.Re)(t, !0), r()((function() {
                                    i.css("transition", "")
                                }))
                            }
                    }
                }
        },
        45140: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return h
                }
            });
            var a = n(863056),
                i = n(977766),
                o = n.n(i),
                l = n(366757),
                r = n(859056),
                u = (n(66992), n(241539), n(788674), n(978783), n(333948), (0, n(766727).default)((function() {
                    return Promise.all([n.e(2635), n.e(5306), n.e(7271), n.e(9623), n.e(7281), n.e(1427), n.e(6130), n.e(351), n.e(6237), n.e(1725), n.e(6338), n.e(8401), n.e(9128), n.e(1318), n.e(6148)]).then(n.bind(n, 550745)).then((function(t) {
                        return t.Drawer
                    }))
                }), {
                    ssr: !1
                })),
                s = function(t) {
                    var e = t.children,
                        n = t.navItemsComp,
                        i = l.useState(!1),
                        o = (0, r.Z)(i, 2),
                        s = o[0],
                        d = o[1];
                    return l.createElement(l.Fragment, null, (0, a.Z)("div", {
                        className: "s-nav-inner-wrap"
                    }, void 0, (0, a.Z)("div", {
                        className: "s-nav-menu-btn"
                    }, void 0, (0, a.Z)("i", {
                        className: "s-nav-menu-btn-icon fas fa-bars",
                        onClick: function() {
                            return d(!0)
                        }
                    })), n), (0, a.Z)(u, {
                        className: "s-ant-drawer-container",
                        zIndex: 210,
                        width: "auto",
                        visible: s,
                        placement: "left",
                        onClose: function() {
                            return d(!1)
                        },
                        getContainer: "#layout-drawer-wrap"
                    }, void 0, e))
                },
                d = n(183123),
                c = n(156503),
                g = n.n(c),
                f = n(611384),
                p = n(734274),
                v = n(353147),
                h = {
                    name: "drawer",
                    i18nDisplayName: "Editor|Left Sidebar",
                    _nameForPoGenerator: function() {
                        return v("Editor|Left Sidebar")
                    },
                    orientation: "horizontal",
                    nullHighlightColorMeansUnderline: !0,
                    showDropdownBesideText: !0,
                    getStyle: function(t) {
                        var e, n, a, i, l, r, u = "";
                        return t.isRtlLayout ? (i = (0, f.rF)("left", "last"), l = (0, f.q$)("left", "last"), r = (0, f.Ds)("left", "last"), u = o()(n = o()(a = "\n    .s-nav-inner-wrap {\n      .s-nav-menu-btn .s-nav-menu-btn-icon {\n        padding-right: 0;\n      }\n      .s-drawer-nav-right {\n        ".concat(i, ";\n        ")).call(a, l, ";\n        ")).call(n, r, ";\n      }\n    }\n  ")) : u = function() {
                            var t, e, n = (0, f.rF)("right", "last"),
                                a = (0, f.q$)("right", "last"),
                                i = (0, f.Ds)("right", "last");
                            return o()(t = o()(e = "\n    .s-nav-inner-wrap {\n      .s-nav-menu-btn .s-nav-menu-btn-icon {\n        padding-left: 0;\n      }\n      .s-drawer-nav-right {\n        ".concat(n, ";\n        ")).call(e, a, ";\n        ")).call(t, i, ";\n      }\n    }\n  ")
                        }(), o()(e = "\n    ".concat(u, ";\n    & .s-logo-title {\n      font-size: ")).call(e, p.LOGO_TITLE_FONT_SIZE[p.NAV_LAYOUT_VALUE.DRAWER], "px;\n    }\n  ")
                    },
                    templateFunction: function(t) {
                        var e = t.LogoTitle,
                            n = t.LogoImage,
                            i = t.NavItemsAndLinks,
                            o = t.NavIcons,
                            r = t.NavSocialMedia,
                            u = t.NavSocialMediaHasContactList,
                            d = t.NavButton,
                            c = t.NavContentContainer;
                        return l.createElement(l.Fragment, null, (0, a.Z)(c, {}, void 0, (0, a.Z)(u, {}), (0, a.Z)(s, {
                            navItemsComp: l.createElement(l.Fragment, null, (0, a.Z)("div", {
                                className: "s-title-wrap"
                            }, void 0, (0, a.Z)(n, {}), (0, a.Z)(e, {})), (0, a.Z)("div", {
                                className: "s-drawer-nav-right"
                            }, void 0, (0, a.Z)(o, {}), (0, a.Z)(r, {}), (0, a.Z)(d, {})))
                        }, void 0, (0, a.Z)("div", {
                            className: "nav-items-and-links-wrap"
                        }, void 0, (0, a.Z)(i, {})))))
                    },
                    enabledNavOptions: ["colors", "padding", "backgroundColor1", "isTransparent", "highlightColor", "isSticky", "itemSpacing", "dropShadow", "highlight", "border"],
                    shouldShowFixedNav: function(t, e) {
                        var n = $(".s-first-visible-section");
                        return d.getIsBlog() && (n = $(".s-blog-header")), 0 !== n.length && $(window).scrollTop() >= $(window).height() - g().get("navHeight")
                    },
                    shouldShowAlternativeFixedNavVariation: function(t, e, n) {
                        var a = t.normal,
                            i = a.logoImage,
                            o = a.logoTitle,
                            l = (n.padding || 0) + (i.height() || 0) + (o.height() || 0) + 20;
                        return $(window).scrollTop() > l
                    },
                    afterRender: function(t, e) {}
                }
        },
        586640: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return m
                }
            });
            var a = n(863056),
                i = n(977766),
                o = n.n(i),
                l = (n(366757), n(442279)),
                r = {
                    large: 1731,
                    medium: 2250,
                    small: 2368
                },
                u = (0, l.createSelector)((function(t) {
                    return null == t ? void 0 : t.sidebarWidth
                }), (function(t) {
                    var e = (t || {}).sidebarWidthKey;
                    return r[e] || 0
                })),
                s = (0, l.createSelector)((function(t) {
                    return t.sidemenuWidth || 0
                }), u, (function(t, e) {
                    var n;
                    return e ? o()(n = "\n      @media screen and (min-width: ".concat(e + t, "px) {\n        width: calc(100% - ")).call(n, 450, "px);\n      }\n    ") : ""
                })),
                d = (0, l.createSelector)((function(t) {
                    return t.sidemenuWidth || 0
                }), u, (function(t, e) {
                    var n;
                    return e ? o()(n = "\n      @media screen and (min-width: ".concat(e + t, "px) {\n        max-width:  ")).call(n, 450, "px;\n      }\n    ") : ""
                }));

            function c(t, e) {
                var n, a, i, l, r, u, s, d, c = (e || {}).sidemenuWidth;
                return o()(n = o()(a = o()(i = o()(l = o()(r = o()(u = o()(s = o()(d = "\n    @media screen and (min-width: ".concat(1200 + c, "px) {\n      ")).call(d, t(e.sidebarWidth.wideDesktopPercentage), ";\n    }\n    @media screen and (min-width: ")).call(s, 900 + c, "px) and (max-width: ")).call(u, 1199 + c, "px) {\n      ")).call(r, t(e.sidebarWidth.narrowDesktopPercentage), ";\n    }\n    @media screen and (max-width: ")).call(l, 899 + c, "px) {\n      ")).call(i, t(e.sidebarWidth.tabletPercentage), ";\n    }\n    @media screen and (max-width: ")).call(a, 727 + c, "px) {\n      ")).call(n, t(0), ";\n    }\n  ")
            }
            var g = (0, l.createSelector)((function(t) {
                    return t
                }), (function(t) {
                    var e, n;
                    return o()(e = o()(n = "\n    @media (min-width: 728px) {\n      & .s-footer-logo-wrapper .s-footer-logo {\n        margin-left: auto;\n        margin-right: auto;\n      }\n    }\n\n    ".concat(c((function(e) {
                        var n;
                        return o()(n = "\n        & .page-wrapper,\n        & .s-footer-section,\n        & .s-footer-logo-wrapper {\n          width: calc(\n            ".concat(100 - e, "% - ")).call(n, t.isPreviewMode ? e / 100 * 30 : 0, "px\n          );\n        }\n      ")
                    }), t), "\n\n    & .page-wrapper,\n    & .s-footer-section,\n    & .s-footer-logo-wrapper {\n      float: ")).call(n, t.isRtlLayout ? "left" : "right", ";\n      ")).call(e, s(t), ";\n    }\n  ")
                })),
                f = (0, l.createSelector)((function(t) {
                    return t
                }), (function(t) {
                    var e;
                    return o()(e = "\n  ".concat(c((function(e) {
                        var n;
                        return o()(n = "\n        width: calc(\n          ".concat(e, "% - ")).call(n, t.sidemenuWidth * (e / 100), "px\n        );\n      ")
                    }), t), ";\n  ")).call(e, d(t), ";\n  ")
                })),
                p = n(31484),
                v = n(734274),
                h = n(353147),
                m = {
                    name: "left",
                    i18nDisplayName: "Editor|Left Sidebar",
                    _nameForPoGenerator: function() {
                        return h("Editor|Left Sidebar")
                    },
                    orientation: "vertical",
                    nullHighlightColorMeansUnderline: !0,
                    showDropdownBesideText: !0,
                    getPageWrapperStyle: function(t) {
                        return g(t)
                    },
                    getStyle: function(t) {
                        var e, n, a, i, l, r, u, s, d, c, g, h, m, _, b, C;
                        return o()(e = o()(n = o()(a = o()(i = o()(l = o()(r = o()(u = o()(s = o()(d = o()(c = o()(g = o()(h = o()(m = o()(_ = "\n    display: flex;\n    align-items: ".concat("middle" === t.verticalContentAlignment ? "center" : "flex-start", ";\n    position: fixed;\n    padding: ")).call(_, t.padding, "px;\n    ")).call(m, "small" === t.navTheme.sidebarWidth && o()(b = "\n      @media screen and (max-width: ".concat(1400 + t.sidemenuWidth, "px) {\n        padding: ")).call(b, t.padding / 2, "px;\n      }\n    "), ";\n    ")).call(h, "medium" === t.navTheme.sidebarWidth && o()(C = "\n      @media screen and (max-width: ".concat(1e3 + t.sidemenuWidth, "px) {\n        padding: ")).call(C, t.padding / 2, "px;\n      }\n    "), ";\n    z-index: 210;\n    height: 100%;\n    ")).call(g, f(t), ";\n    box-shadow: 1px 0 rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    text-align: ")).call(c, t.isRtlLayout ? "right" : t.horizontalContentAlignment, ";\n\n    & .s-common-button {\n      padding: 16px 24px;\n    }\n    & .s-nav-btn {\n      margin: 30px 0 0 0;\n\n      .s-font-button {\n        word-break: break-word;\n        white-space: break-spaces;\n      }\n    }\n    & .s-logo-subtitle {\n      max-width: 100%;\n      margin-top: 10px;\n      margin-right: 10px;\n      padding-bottom: 8px;\n      min-width: 80px; /* Important in editor, otherwise has line break with placeholder text */\n      ")).call(d, "right" === t.horizontalContentAlignment && "\n        margin-right: 0px;\n      ", ";\n    }\n    & .s-nav {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n    & .s-nav-items-and-links > ul li,\n    & .s-nav-icons > li {\n      display: block;\n      margin: ")).call(s, {
                            large: 15,
                            medium: 10,
                            small: 5
                        }[t.navTheme.fontSize], "px\n        0;\n      & .s-nav-link-container {\n        padding-right: 5px;\n      }\n      .s-navbar-dropdown {\n        & .s-nav-li {\n          padding: 0px;\n        }\n      }\n    }\n\n    & .s-nav-items-and-links > ul li {\n      &:first-child {\n        margin-top: 0;\n      }\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    & .s-nav-items-and-links .s-nav-li {\n      padding-bottom: 0;\n    }\n    & .s-nav-li {\n      word-wrap: break-word;\n      line-height: 1.5em;\n    }\n\n    & .s-nav-inner {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      max-height: 100%;\n    }\n\n    & .s-nav-icons {\n      display: block;\n      & .s-nav-li {\n        ")).call(u, "left" === t.horizontalContentAlignment && !t.isRtlLayout && "\n          margin-right: 10px;\n          margin-left: 0px;\n        ", ";\n        ")).call(r, "right" === t.horizontalContentAlignment && "\n          margin-right: 0px;\n          margin-left: 10px;\n        ", ";\n        ")).call(l, "center" === t.horizontalContentAlignment && "\n          margin-right: 0px;\n          margin-left: 0px;\n        ", ";\n      }\n    }\n\n    & .s-navbar-dropdown ul {\n      padding: 0 5px;\n    }\n\n    & .s-nav-items-and-links {\n      flex-shrink: 1;\n      overflow-y: hidden;\n    }\n\n    & .s-logo-image {\n      margin-bottom: 0;\n    }\n\n    & .s-logo-image img {\n      max-height: 180px;\n    }\n\n    & .s-logo-title {\n      max-width: 100%;\n      margin-top: 10px;\n      font-size: ")).call(i, v.LOGO_TITLE_FONT_SIZE[v.NAV_LAYOUT_VALUE.LEFT].large, "px;\n    }\n\n    & .s-logo {\n      margin-bottom: 30px;\n    }\n\n    & .s-navbar-desktop {\n      height: 100%;\n    }\n\n    &.s-navbar-desktop-fixed {\n      display: none;\n    }\n\n    & .s-nav-link-container {\n      display: block;\n    }\n\n    & .s-left-nav-scroll-container {\n      overflow: auto;\n      /* Subtitle is a richtext field with an extra outer border,\n           need to prevent that border from getting cut off */\n      padding: 0 8px;\n      margin-right: -8px;\n      margin-left: -8px;\n    }\n\n    @media screen and (max-width: ")).call(a, v.LEFT_NAV_RESPONSIVE_BREAKPOINT + t.sidemenuWidth, "px) {\n      /* there's not much horizontal space, so reduce font size a bit */\n      & .s-nav-inner {\n        font-size: 80%;\n        .s-logo-title {\n          font-size: ")).call(n, v.LOGO_TITLE_FONT_SIZE[v.NAV_LAYOUT_VALUE.LEFT].small, "px;\n        }\n      }\n    }\n\n    &.s-new-layout.s-new-layout-g .s-nav-g-footer .social-media-contact-list-wrapper .s-social-media-buttons-wrap {\n      flex-direction: column;\n      align-items: flex-start;\n      .s-social-media-button {\n        margin: 10px 0 0 0;\n        &:first-of-type {\n          margin-top: 0;\n        }\n        .fb-counter {\n          margin-left: -10px;\n          margin-bottom: -5px;\n        }\n      }\n    }\n\n    ")).call(e, (0, p.XO)(t), "\n  ")
                    },
                    templateFunction: function(t) {
                        var e = t.LogoImage,
                            n = t.LogoTitle,
                            i = t.NavItemsAndLinks,
                            o = t.NavIcons,
                            l = t.NavButton,
                            r = t.NavContentContainer,
                            u = t.LogoSubtitle,
                            s = t.MultiLangAndSocialMedia;
                        return (0, a.Z)(r, {}, void 0, (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)("div", {}, void 0, (0, a.Z)(e, {})), (0, a.Z)("div", {}, void 0, (0, a.Z)(n, {}))), (0, a.Z)("div", {
                            className: "s-left-nav-scroll-container"
                        }, void 0, (0, a.Z)(i, {}), (0, a.Z)(o, {}), (0, a.Z)(u, {})), (0, a.Z)("div", {
                            style: {
                                marginBottom: 20
                            }
                        }, void 0, (0, a.Z)(l, {})), (0, a.Z)(s, {}))
                    },
                    enabledNavOptions: ["colors", "padding", "sidebarWidth", "backgroundColor1", "verticalContentAlignment", "horizontalContentAlignment", "highlightColor", "highlight"],
                    afterRender: function(t, e) {}
                }
        },
        609304: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return S
                }
            });
            var a, i = n(863056),
                o = n(977766),
                l = n.n(o),
                r = n(51942),
                u = n.n(r),
                s = n(981643),
                d = n.n(s),
                c = (n(366757), n(294184)),
                g = n.n(c),
                f = n(611384),
                p = n(31484),
                v = n(223336),
                h = n.n(v),
                m = n(734274),
                _ = n(353147),
                b = ["c"],
                C = ["colors", "padding", "backgroundColor1", "topContentWidth", "isTransparent", "highlightColor", "isSticky", "itemSpacing", "dropShadow", "highlight", "border"],
                S = {
                    name: "topBar",
                    i18nDisplayName: "Editor|Top Bar",
                    _nameForPoGenerator: function() {
                        return _("Editor|Top Bar")
                    },
                    orientation: "horizontal",
                    nullHighlightColorMeansUnderline: !0,
                    getStyle: function(t) {
                        var e, n, a, i, o, r, u, s, d, c, g, v, h, _, b, S, E, T, y = (0, f.nf)(t, C),
                            I = t.isRtlLayout,
                            w = t.layout,
                            x = t.padding,
                            P = t.topContentWidth,
                            N = t.overlapsContent,
                            k = t.sectionContentWidth,
                            A = t.highlight,
                            B = "centered" === P,
                            L = "section" === P,
                            D = k.normal,
                            O = "c" === w,
                            M = "block" === (null == A ? void 0 : A.type);
                        T = I ? function(t, e, n) {
                            var a, i, o, r = "";
                            n || "a" !== e ? n || "b" !== e || (r = (0, f.Nv)("left", "last")) : r = (0, f.Nv)("right", "first");
                            var u = (0, f.rF)("left", "last"),
                                s = (0, f.q$)("left", "last"),
                                d = (0, f.pk)("left", "last");
                            return l()(a = l()(i = l()(o = "\n    .s-nav-inner-wrap {\n      ".concat(r, ";\n      & > :last-child.s-icons {\n        ")).call(o, u, ";\n        ")).call(i, s, ";\n      }\n    }\n    .s-nav-inner {\n      ")).call(a, d, ";\n    }\n  ")
                        }(0, w, M) : function(t, e, n) {
                            var a, i, o, r = "";
                            n || "a" !== e ? n || "b" !== e || (r = (0, f.Nv)("left", "first")) : r = (0, f.Nv)("right", "last");
                            var u = (0, f.rF)("right", "last"),
                                s = (0, f.q$)("right", "last"),
                                d = (0, f.pk)("right", "last");
                            return l()(a = l()(i = l()(o = "\n    .s-nav-inner-wrap {\n      ".concat(r, ";\n      & > :last-child.s-icons {\n        ")).call(o, u, ";\n        ")).call(i, s, ";\n      }\n    }\n    .s-nav-inner {\n      ")).call(a, d, ";\n    }\n  ")
                        }(0, w, M);
                        var R;
                        R = I ? (0, f.oN)(P, !0) : (0, f.oN)(P);
                        var U = "";
                        return O && (U = "\n      & .s-nav-inner-wrap {\n        &:not(.reset-center-nav-items) > *:not(.s-nav-items-and-links) {\n          position: relative;\n          z-index: 1;\n        }\n        & > .s-nav-items-and-links {\n          position: absolute;\n          width: calc(100% - ".concat(2 * x, "px);\n        }\n        & > .nav-items-placeholder {\n          flex: 1;\n          visibility: hidden;\n          display: block;\n        }\n      }\n      & .s-nav-inner-wrap.reset-center-nav-items {\n        & > .s-nav-items-and-links {\n          position: static;\n          width: auto;\n        }\n        & > .nav-items-placeholder {\n          flex: none;\n          display: none;\n        }\n      }\n    ")), l()(e = l()(n = l()(a = l()(i = l()(o = l()(r = l()(u = l()(s = l()(d = l()(c = l()(g = l()(v = l()(h = l()(_ = l()(b = l()(S = l()(E = "\n    ".concat(B && "text-align: center;", ";\n    & .s-nav-items-and-links {\n      flex-grow: 1;\n      text-align: right;\n    }\n    & .s-nav-items-and-links li {\n      & a, .s-nav-dropdown-item, .login-nav-item {\n        font-weight: bold;\n      }\n      display: inline-block;\n    }\n    & .s-navbar-dropdown li {\n      display: block;\n    }\n    &.topBar .s-nav-inner {\n      .s-nav-social-media.has-social-media-contact-list {\n        margin: 0 auto;\n        ")).call(E, L && "\n          padding: 8px calc((100% - ".concat(D, ") / 2);\n        "), ";\n        ")).call(S, B && "justify-content: center;", ";\n        ")).call(b, R, ";\n      }\n      .s-nav-inner-wrap {\n        display: flex;\n        position: relative;\n        align-items: center;\n        ")).call(_, L && "width: ".concat(D, ";"), ";\n        ")).call(h, L && "max-width: 94%", ";\n        ")).call(v, B && "display: inline-flex;", ";\n      }\n    }\n    & .s-logo-title {\n      max-width: 70%;\n      font-size: ")).call(g, m.LOGO_TITLE_FONT_SIZE[m.NAV_LAYOUT_VALUE.TOP_BAR], "px;\n      margin-left: 10px;\n      margin-right: 10px;\n    }\n    & .s-logo .s-image {\n      max-width: 240px;\n    }\n    & .s-nav-btn {\n      margin: 0 10px;\n    }\n    & .s-logo-image {\n      margin: ")).call(c, I ? "0 0 0 10px" : "0 10px 0 0", ";\n    }\n    & .s-logo-image img {\n      max-height: 60px;\n    }\n    & .s-common-button {\n      padding: 12px 20px;\n    }\n\n    &.s-new-layout-c:not(.in-editor) {\n      .s-logo-title {\n        min-width: auto;\n      }\n      &:not(.has-button) {\n        .s-nav-btn {\n          display: none;\n          width: 0;\n        }\n      }\n      &:not(.has-title) {\n        .s-logo-title {\n          display: none;\n          width: 0;\n        }\n      }\n    }\n\n    /*\n        We never want to show the normal nav since topBar nav is always fixed.\n        However, if the nav isn't translucent/transparent (overlaps the conent)\n        then the space behind the fixed nav would normally be white.\n\n        The height of the fixed nav animates, and at times it is smaller\n        than the space taken up by the invisible normal nav. This leads to a\n        white area being visible when you scroll backt to the top of the page.\n\n        To fix that we show the background color of the normal nav to hide the\n        white background. We don't want that if the nav is translucent,\n        since then the normal nav would be visible behind the fixed nav.\n      */\n    ")).call(d, N && "\n      &.s-navbar-desktop-normal {\n        visibility: hidden;\n        opacity: 0;\n      }\n    ", ";\n    ")).call(s, !N && "\n      &.s-navbar-desktop-normal .s-nav-inner {\n        visibility: hidden;\n        opacity: 0;\n      }\n    ", ";\n\n    &.s-navbar-desktop-fixed {\n      @media screen and (min-width: 728px) {\n        display: block;\n      }\n      ")).call(u, y && "\n        &._alternative {\n          box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        }\n      ", "\n      & .s-logo-image-1 {\n        display: inline-block;\n      }\n      & .s-logo-image-2 {\n        display: none;\n      }\n    }\n    .s-nav-inner-wrap {\n      ")).call(r, R, ";\n    }\n    ")).call(o, (0, p.XO)(t), ";\n    ")).call(i, (0, f.Eg)(t), ";\n    ")).call(a, (0, f.E5)(t), ";\n    ")).call(n, T, ";\n    ")).call(e, O && U, ";\n  ")
                    },
                    templateFunction: function(t, e) {
                        var n = t.LogoImage,
                            o = t.LogoTitle,
                            l = t.NavItemsAndLinks,
                            r = t.NavIcons,
                            u = t.NavSocialMedia,
                            s = t.NavSocialMediaHasContactList,
                            d = t.NavButton,
                            c = t.NavContentContainer,
                            f = e.displayedLogoid,
                            p = e.hasLogoImage1,
                            v = e.hasLogoImage3,
                            h = e.hasNavIcons,
                            m = e.isShowNavSocialMedia,
                            _ = e.layout,
                            b = "1" === f && p || "3" === f && v,
                            C = h || m;
                        return (0, i.Z)(c, {}, void 0, (0, i.Z)(s, {}), (0, i.Z)("div", {
                            className: g()("s-nav-inner-wrap", {
                                "reset-center-nav-items": "c" === _
                            })
                        }, void 0, b && (0, i.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, i.Z)(n, {})), (0, i.Z)(o, {}), "c" === _ && (a || (a = (0, i.Z)("div", {
                            className: "nav-items-placeholder"
                        }))), (0, i.Z)(l, {}), C && (0, i.Z)("div", {
                            className: "s-icons"
                        }, void 0, (0, i.Z)(r, {}), (0, i.Z)(u, {})), (0, i.Z)(d, {})))
                    },
                    enabledNavOptions: C,
                    shouldShowFixedNav: function(t, e) {
                        return !0
                    },
                    shouldShowAlternativeFixedNavVariation: function(t, e, n) {
                        return h()(window).scrollTop() > 0
                    },
                    _centerNavItems: function() {
                        var t = ".s-navbar-desktop-fixed .s-nav-inner .s-nav-inner-wrap",
                            e = h()("".concat(t)),
                            n = e.width() || 0,
                            a = "".concat(t, " > .s-nav-items-and-links > .s-uncollapsed-nav"),
                            i = h()("".concat(t, " > .s-logo")).outerWidth() || 0,
                            o = h()("".concat(t, " > .s-logo-title")).outerWidth() || 0,
                            l = h()("".concat(t, " > .s-icons")).outerWidth() || 0,
                            r = h()("".concat(t, " > .s-nav-btn")).outerWidth() || 0,
                            u = 0;
                        h()("".concat(t, " > .s-nav-items-and-links .s-uncollapsed-nav > .s-nav-li:not(.hidden)")).each((function(t, e) {
                            u += h()(e).outerWidth()
                        }));
                        var s = h()("".concat(a, " > .s-nav-li.hidden:not(.s-nav-ellipsis)")).length,
                            d = h()(a).height() || 0;
                        (n - i - o - l - r - u) / 2 > n / 5 && s <= 0 ? (d && e.css("min-height", d), e.removeClass("reset-center-nav-items")) : this.resetNavItems()
                    },
                    resetNavItems: function() {
                        var t = h()("".concat(".s-navbar-desktop-fixed .s-nav-inner .s-nav-inner-wrap"));
                        t.css("min-height", "unset"), t.addClass("reset-center-nav-items")
                    },
                    afterRender: function(t, e, n) {
                        var a = n.topContentWidth,
                            i = void 0 === a ? "" : a;
                        (0, f.MP)(t, u()(e, {
                            topContentWidth: i
                        }));
                        var o = e.layout; - 1 !== d()(b).call(b, o) ? this._centerNavItems() : this.resetNavItems()
                    }
                }
        },
        648509: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return F
                }
            });
            var a, i = n(686902),
                o = n.n(i),
                l = n(14310),
                r = n.n(l),
                u = n(620116),
                s = n.n(u),
                d = n(834074),
                c = n.n(d),
                g = n(778914),
                f = n.n(g),
                p = n(239649),
                v = n.n(p),
                h = n(820368),
                m = n.n(h),
                _ = n(663978),
                b = n.n(_),
                C = n(863056),
                S = n(844845),
                E = n(977766),
                T = n.n(E),
                y = n(678580),
                I = n.n(y),
                w = n(51942),
                x = n.n(w),
                P = (n(366757), n(223336)),
                N = n(611384),
                k = n(31484),
                A = n(183123),
                B = n(156503),
                L = n.n(B),
                D = n(734274),
                O = n(234584),
                M = n(384887),
                R = n(353147);

            function U(t, e) {
                var n = o()(t);
                if (r()) {
                    var a = r()(t);
                    e && (a = s()(a).call(a, (function(e) {
                        return c()(t, e).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n, a = null != arguments[e] ? arguments[e] : {};
                    if (e % 2) f()(n = U(Object(a), !0)).call(n, (function(e) {
                        (0, S.Z)(t, e, a[e])
                    }));
                    else if (v()) m()(t, v()(a));
                    else {
                        var i;
                        f()(i = U(Object(a))).call(i, (function(e) {
                            b()(t, e, c()(a, e))
                        }))
                    }
                }
                return t
            }
            var G = ["border", "colors", "padding", "backgroundColor1", "highlightColor", "topContentWidth", "isSticky", "dropShadow"],
                F = {
                    name: "topBlock",
                    i18nDisplayName: "Editor|Top Block",
                    _nameForPoGenerator: function() {
                        return R("Editor|Top Block")
                    },
                    orientation: "horizontal",
                    getStyle: function(t) {
                        var e, n, a, i, o, l, r, u, s, d, c, g, f, p, v, h, m, _, b, C, S, E, y, w, x, P, A, B, L = t.navTheme,
                            R = t.topContentWidth,
                            U = t.buttonFill,
                            F = t.isRtlLayout,
                            H = t.sectionContentWidth,
                            V = t.padding,
                            W = t.hasLogoImage1,
                            z = (L || {}).padding,
                            $ = D.NAV_ITEM_HORIZONTA_PADDING[z],
                            j = D.NAV_ITEM_VERTICAL_PADDING[z],
                            K = 2 * j + t.fontSizePercentage / 100 * 16,
                            J = "centered" === R,
                            Y = "section" === R,
                            X = H.normal,
                            q = (0, N.nf)(t, G),
                            Q = "";
                        F ? (B = (0, N.q$)("left", "last"), Q = "\n    .s-nav-inner-wrap {\n      ".concat(B, ";\n    }\n  ")) : Q = function() {
                            var t = (0, N.q$)("right", "last");
                            return "\n    .s-nav-inner-wrap {\n      ".concat(t, ";\n    }\n  ")
                        }();
                        var tt;
                        tt = F ? (0, N.oN)(R, !0) : (0, N.oN)(R);
                        var et = {},
                            nt = t.backgroundColor1,
                            at = t.navHighlightColor,
                            it = t.highlightColorSettings;
                        if (O.getRemainingTextColorFix() && (0, N.AN)(it)) {
                            var ot = new M(at).showOnBg(nt).toHex();
                            et.navHighlightColor = ot
                        }
                        return T()(e = T()(n = T()(a = T()(i = T()(o = T()(l = T()(r = T()(u = T()(s = T()(d = T()(c = T()(g = T()(f = T()(p = T()(v = T()(h = T()(m = T()(_ = T()(b = T()(C = T()(S = T()(E = T()(y = T()(w = T()(x = "\n    padding: 0;\n    box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n    ".concat(J && "text-align: center;\n    ", ";\n    & .s-nav-items-and-links li {\n      display: inline-block;\n      margin: 0;\n    }\n    & .s-nav-icons.s-nav-items-and-links .multi-lang-nav-container .s-nav-link-container,\n    & .s-uncollapsed-nav > .s-nav-li > .s-nav-link-container,\n    & .s-nav-icons .s-nav-li > .s-nav-link-container,\n    &\n      ")).call(x, "solid" === U ? ".s-nav-btn .s-common-button" : ".__", " {\n      /* .__, moving the & inside the string didn't work with emotion */\n      padding: ")).call(w, j, "px ")).call(y, $, "px;\n    }\n    & .s-nav-icons .s-nav-li {\n      margin: 0;\n    }\n    & .s-navbar-dropdown li {\n      display: block;\n    }\n    & .s-navbar-dropdown > ul {\n      border-radius: 0;\n    }\n    &.s-bg-dark-text .s-navbar-dropdown._down > ul {\n      border-top: 1px solid rgba(0, 0, 0, 0.2);\n    }\n    &.s-bg-light-text .s-navbar-dropdown._down > ul {\n      border-top: 1px solid rgba(255, 255, 255, 0.2);\n    }\n\n    &.topBlock .s-nav-inner {\n      .s-nav-social-media.has-social-media-contact-list {\n        margin: 0 auto;\n        ")).call(E, Y && "padding: 8px calc((100% - ".concat(X, ") / 2);"), ";\n        ")).call(S, J && "justify-content: center;", ";\n        ")).call(C, tt, ";\n      }\n      .s-nav-inner-wrap {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        ")).call(b, !Y && "padding: 0 ".concat(V, "px"), ";\n        ")).call(_, Y && "width: ".concat(X, ";"), ";\n        ")).call(m, Y && "max-width: 94%", ";\n        ")).call(h, J && "display: inline-flex;", ";\n      }\n    }\n    & .s-logo-title {\n      max-width: 70%;\n      font-size: ")).call(v, D.LOGO_TITLE_FONT_SIZE[D.NAV_LAYOUT_VALUE.TOP_BLOCK], "px;\n      margin-left: ")).call(p, $, "px;\n      margin-right: ")).call(f, $, "px;\n      flex-shrink: 0;\n      white-space: nowrap;\n      > div {\n        max-width: 100%;\n        display: inline-block;\n      }\n    }\n    & .s-topBlock-spacer {\n      ")).call(g, I()(P = ["section", "full"]).call(P, R) && "\n        flex-grow: 1;\n      ", ";\n    }\n    & .s-logo {\n      max-width: 200px;\n      /* The logo placeholder in the editor is too tall, which causes\n         whitespace above and below nav items if there's no logo and the\n         nav padding is small */\n      ")).call(c, !W && "small" === z && "\n        margin-top: -5px;\n        margin-bottom: 0px;\n      ", ";\n    }\n    & .s-logo-image img {\n      max-height: ")).call(d, K, "px;\n    }\n    & .s-common-button {\n      padding: 12px 20px;\n      box-shadow: none;\n      box-sizing: border-box;\n      ")).call(s, "solid" === U && "\n        border-radius: 0;\n      ", ";\n      ")).call(u, "ghost" === U && T()(A = "\n        padding: ".concat(j / 2, "px ")).call(A, $ / 2, "px;\n        margin-right: 10px;\n      "), ";\n    }\n\n    ")).call(r, "solid" === U && "\n      & .s-common-button {\n        height: ".concat(K, "px;\n        display: flex;\n        align-items: center;\n      }\n    "), ";\n\n    & .s-nav-icons > .s-nav-li,\n    & .s-uncollapsed-nav > .s-nav-li,\n    & .s-nav-ellipsis {\n      box-sizing: border-box;\n    }\n\n    &.s-navbar-desktop-normal {\n      visibility: hidden;\n      opacity: 0;\n    }\n\n    &.s-navbar-desktop-fixed {\n      @media screen and (min-width: 728px) {\n        display: block;\n      }\n      &:not(.inline-layout) {\n        transition: all 0.25s;\n      }\n      ")).call(l, q && "&._show {\n          box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        }", "\n\n      & .s-logo-image-1 {\n        display: inline-block;\n      }\n      & .s-logo-image-2 {\n        display: none;\n      }\n    }\n    .s-nav-inner-wrap {\n      ")).call(o, tt, ";\n    }\n    ")).call(i, (0, k.Yc)(Z(Z({}, t), et)), ";\n    ")).call(a, (0, N.Eg)(t), ";\n    ")).call(n, (0, N.E5)(t), ";\n    ")).call(e, Q, ";\n  ")
                    },
                    templateFunction: function(t, e) {
                        var n = t.LogoImage,
                            i = t.LogoTitle,
                            o = t.NavItemsAndLinks,
                            l = t.NavIcons,
                            r = t.NavButton,
                            u = t.NavSocialMedia,
                            s = t.NavContentContainer,
                            d = t.NavSocialMediaHasContactList,
                            c = e.displayedLogoid,
                            g = e.hasLogoImage1,
                            f = e.hasLogoImage3,
                            p = "1" === c && g || "3" === c && f,
                            v = e.hasNavIcons;
                        return (0, C.Z)(s, {}, void 0, (0, C.Z)(d, {}), (0, C.Z)("div", {
                            className: "s-nav-inner-wrap"
                        }, void 0, p && (0, C.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, C.Z)(n, {})), (0, C.Z)(i, {}), a || (a = (0, C.Z)("div", {
                            className: "s-topBlock-spacer"
                        })), (0, C.Z)(o, {}), v && (0, C.Z)(l, {}), (0, C.Z)(u, {}), (0, C.Z)(r, {})))
                    },
                    enabledNavOptions: G,
                    getDropdownBackgroundColor: function(t, e) {
                        return e
                    },
                    shouldShowFixedNav: function(t, e) {
                        var n = P(".s-first-visible-section");
                        return A.getIsBlog() && (n = P(".s-blog-header")), 0 !== n.length && P(window).scrollTop() >= P(window).height() - L().get("navHeight")
                    },
                    shouldShowAlternativeFixedNavVariation: function(t, e, n) {
                        return P(window).scrollTop() > 0
                    },
                    afterRender: function(t, e, n, a) {
                        var i = t.fixed.container,
                            o = n.topContentWidth,
                            l = void 0 === o ? "" : o,
                            r = n.isSticky;
                        (0, N.MP)(t, x()(e, {
                            topContentWidth: l
                        }));
                        var u = 0;
                        a.showFixedNavAlternativeVariation || (u = null != a && a.isPreviewMode && r ? 30 : 0), i.css("top", u)
                    }
                }
        },
        752118: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return f
                }
            });
            var a = n(863056),
                i = n(977766),
                o = n.n(i),
                l = n(694473),
                r = n.n(l),
                u = (n(366757), n(611384)),
                s = n(31484),
                d = n(734274),
                c = n(353147),
                g = ["colors", "padding", "backgroundColor1", "topContentWidth", "highlightColor", "isSticky", "itemSpacing", "border", "dropShadow", "highlight"],
                f = {
                    name: "topCenter",
                    i18nDisplayName: "Editor|Top Center",
                    _nameForPoGenerator: function() {
                        return c("Editor|Top Center")
                    },
                    orientation: "horizontal",
                    nullHighlightColorMeansUnderline: !0,
                    getStyle: function(t) {
                        var e, n, a, i, l, r, c, f, p, v, h, m, _, b, C, S, E, T, y, I, w = t.padding,
                            x = t.topContentWidth,
                            P = t.sectionContentWidth,
                            N = t.isRtlLayout,
                            k = t.showFixedNavAlternativeVariation,
                            A = t.highlight,
                            B = t.isSticky,
                            L = (A || {}).type,
                            D = "centered" === x,
                            O = "section" === x,
                            M = P.normal,
                            R = (0, u.nf)(t, g);
                        I = N ? function(t) {
                            var e, n, a, i = (0, u.Nv)("right", "first", t),
                                l = (0, u.q$)("left", "last"),
                                r = (0, u.Ds)("left", "last"),
                                s = (0, u.rF)("left", "last");
                            return o()(e = o()(n = o()(a = "\n    .s-nav-inner-wrap {\n      & > .s-nav-logo-wrapper {\n        & > .s-icon-button {\n          ".concat(r, ";\n          ")).call(a, s, ";\n        }\n      }\n      & > .s-nav-top-center-item-container {\n        ")).call(n, i, ";\n        ")).call(e, l, ";\n      }\n    }\n  ")
                        }(L) : function(t) {
                            var e, n, a, i = (0, u.Nv)("left", "first", t),
                                l = (0, u.q$)("right", "last"),
                                r = (0, u.Ds)("right", "last"),
                                s = (0, u.rF)("right", "last");
                            return o()(e = o()(n = o()(a = "\n    .s-nav-inner-wrap {\n      & > .s-nav-logo-wrapper {\n        & > .s-icon-button {\n          ".concat(r, ";\n          ")).call(a, s, ";\n        }\n      }\n      & > .s-nav-top-center-item-container {\n        ")).call(n, i, ";\n        ")).call(e, l, ";\n      }\n    }\n  ")
                        }(L);
                        var U = "";
                        B && (U = N ? function(t) {
                            var e, n, a, i, l = (0, u.Nv)("right", "first", t),
                                r = (0, u.q$)("left", "last"),
                                s = (0, u.Ds)("left", "last"),
                                d = (0, u.rF)("left", "last"),
                                c = (0, u.pk)("right", "first");
                            return o()(e = o()(n = o()(a = o()(i = "\n    .s-nav-inner-wrap {\n      ".concat(l, ";\n      & > :last-child.s-icons {\n        ")).call(i, d, ";\n        ")).call(a, r, ";\n      }\n      ")).call(n, s, ";\n    }\n    .s-nav-inner {\n      ")).call(e, c, ";\n    }\n  ")
                        }(L) : function(t) {
                            var e, n, a, i, l = (0, u.Nv)("left", "first", t),
                                r = (0, u.q$)("right", "last"),
                                s = (0, u.Ds)("right", "last"),
                                d = (0, u.rF)("right", "last"),
                                c = (0, u.pk)("left", "first");
                            return o()(e = o()(n = o()(a = o()(i = "\n    .s-nav-inner-wrap {\n      ".concat(l, ";\n      & > :last-child.s-icons {\n        ")).call(i, d, ";\n        ")).call(a, r, ";\n      }\n      ")).call(n, s, ";\n    }\n    .s-nav-inner {\n      ")).call(e, c, ";\n    }\n  ")
                        }(L));
                        var Z = "";
                        return k && (Z = N ? (0, u.oN)(x, !0) : (0, u.oN)(x)), o()(e = o()(n = o()(a = o()(i = o()(l = o()(r = o()(c = o()(f = o()(p = o()(v = o()(h = o()(m = o()(_ = o()(b = o()(C = o()(S = o()(E = o()(T = o()(y = "\n    text-align: center;\n    & .s-nav-items-and-links {\n      ".concat(!1, ";\n    }\n    .s-nav-logo-wrapper .s-logo{\n      max-width: 100%;\n    }\n    .s-nav-logo-wrapper .s-logo-title-wrapper {\n      flex: 1;\n    }\n    &.s-layout-version-e-v2 {\n      .s-nav-logo-wrapper {\n        margin-bottom: 15px;\n      }\n      .s-logo.s-logo-in-desktop-normal {\n        flex: 1;\n        display: flex;\n        align-items: center;\n        column-gap: 20px;\n        .no-image1 {\n          ")).call(y, "display: none;", "\n        }\n      }\n      .s-logo-title {\n        max-width: 70%;\n      }\n      .s-logo-image img {\n        max-height: 80px;\n      }\n    }\n    &:not(.s-layout-version-e-v2) {\n      .s-logo-title {\n        max-width: 100%;\n        margin-bottom: 15px;\n      }\n      .s-logo-image {\n        margin-bottom: 15px;\n      }\n      .s-logo-image img {\n        max-height: 140px;\n      }\n    }\n    & .s-logo-title {\n      font-size: ")).call(T, d.LOGO_TITLE_FONT_SIZE[d.NAV_LAYOUT_VALUE.TOP_CENTER], "px;\n      #s-content & * {\n        margin-bottom: 0;\n      }\n    }\n    & ul.s-uncollapsed-nav > li {\n      display: inline-block;\n    }\n    & ul li._compact {\n      padding-left: 4px;\n      padding-right: 4px;\n    }\n    & .s-button {\n      display: inline-block;\n    }\n    &.s-navbar-desktop-normal .s-nav-inner {\n      opacity: 1;\n\n      &._hide {\n        opacity: 0;\n      }\n    }\n\n    &.s-navbar-desktop-fixed {\n      opacity: 0;\n      pointer-events: none;\n      transition: top 0.5s, opacity .25s ease-out;\n      & .s-nav-inner {\n        .s-nav-social-media.has-social-media-contact-list {\n          padding: 8px ")).call(E, w, "px 8px;\n          margin: 0 auto;\n          ")).call(S, O && "\n            padding: 8px calc((100% - ".concat(M, ") / 2);\n          "), ";\n          ")).call(C, D && "justify-content: center;", ";\n          ")).call(b, Z, ";\n        }\n        .s-nav-inner-wrap {\n          display: flex;\n          align-items: center;\n          ")).call(_, !O && "padding: ".concat(w, "px"), ";\n          ")).call(m, O && "width: ".concat(M), ";\n          ")).call(h, O && "max-width: 94%", ";\n          ")).call(v, D && "\n              display: inline-flex;\n            ", ";\n          & .s-logo-image {\n            margin: ")).call(p, N ? "0 0 0 10px" : "0 10px 0 0", ";\n          }\n        }\n      }\n\n      &._show {\n        top: 0;\n        opacity: 1;\n        pointer-events: all;\n      }\n\n      &._hide {\n        top: -300px;\n        opacity: 0;\n      }\n      &._alternative {\n        &._alternativeNavBackgroundColorIsDifferentFromNormal {\n          &._show {\n            /* if translucent nav changes to white we want to animate that */\n            transition: opacity 0.3s;\n          }\n        }\n        .s-logo-title {\n          max-width: 70%;\n        }\n      }\n      ")).call(f, R && "&._alternative {\n          box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        }", "\n    }\n    &.s-navbar-desktop-fixed .s-nav-inner-wrap {\n      ")).call(c, Z, ";\n    }\n    ")).call(r, (0, s.XO)(t), ";\n    ")).call(l, (0, u.Eg)(t), ";\n    ")).call(i, (0, u.E5)(t), ";\n    ")).call(a, (0, u.es)(), ";\n    &.s-navbar-desktop-normal {\n      ")).call(n, I, ";\n    }\n    &.s-navbar-desktop-fixed {\n      ")).call(e, U, ";\n    }\n  ")
                    },
                    templateFunction: function(t) {
                        var e = t.LogoImage,
                            n = t.LogoTitle,
                            i = t.NavItemsAndLinks,
                            o = t.NavIcons,
                            l = t.NavButton,
                            r = t.NavContentContainer;
                        return (0, a.Z)(r, {}, void 0, (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)(e, {}), (0, a.Z)("div", {}, void 0, (0, a.Z)(n, {}))), (0, a.Z)("div", {
                            className: "s-nav-top-center-item-container"
                        }, void 0, (0, a.Z)(i, {}), (0, a.Z)(o, {}), (0, a.Z)(l, {})))
                    },
                    newLayoutTemplateFunction: function(t) {
                        var e = t.LogoImage,
                            n = t.LogoTitle,
                            i = t.NavItemsAndLinks,
                            o = t.NavIcons,
                            l = t.NavSocialMedia,
                            r = t.NavSocialMediaHasContactList,
                            u = t.NavButton,
                            s = t.NavContentContainer;
                        return (0, a.Z)(s, {}, void 0, (0, a.Z)(r, {}), (0, a.Z)("div", {
                            className: "s-nav-inner-wrap"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-nav-logo-wrapper"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-logo s-logo-in-desktop-normal"
                        }, void 0, (0, a.Z)(e, {}), (0, a.Z)("div", {
                            className: "s-logo-title-wrapper"
                        }, void 0, (0, a.Z)(n, {}))), (0, a.Z)("div", {
                            className: "s-icon-button"
                        }, void 0, (0, a.Z)(o, {}), (0, a.Z)(u, {}))), (0, a.Z)("div", {
                            className: "s-nav-top-center-item-container"
                        }, void 0, (0, a.Z)(i, {}), (0, a.Z)(l, {}))))
                    },
                    newLayoutFixedTemplateFunction: function(t, e) {
                        var n = t.LogoImage,
                            i = t.LogoTitle,
                            o = t.NavItemsAndLinks,
                            l = t.NavIcons,
                            r = t.NavSocialMedia,
                            u = t.NavSocialMediaHasContactList,
                            s = t.NavButton,
                            d = t.NavContentContainer,
                            c = e.displayedLogoid,
                            g = e.hasLogoImage1,
                            f = e.hasLogoImage3,
                            p = "1" === c && g || "3" === c && f;
                        return (0, a.Z)(d, {}, void 0, (0, a.Z)(u, {}), (0, a.Z)("div", {
                            className: "s-nav-inner-wrap"
                        }, void 0, p && (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)(n, {})), (0, a.Z)(i, {}), (0, a.Z)(o, {}), (0, a.Z)("div", {
                            className: "s-icons"
                        }, void 0, (0, a.Z)(l, {}), (0, a.Z)(r, {})), (0, a.Z)(s, {})))
                    },
                    enabledNavOptions: g,
                    estimateNavHeight: function(t) {
                        return 60 + 2 * t.padding + 130
                    },
                    shouldShowFixedNav: function(t, e) {
                        var n = t.normal.container,
                            a = (t.fixed.container, r()(n).call(n, ".s-nav-top-center-item-container"));
                        return $(window).scrollTop() > a.offset().top - 10
                    },
                    shouldHideNormalNav: function(t, e) {
                        return e.shouldShowFixedNav(t, e)
                    },
                    shouldShowAlternativeFixedNavVariation: function(t, e) {
                        var n = t.normal.container,
                            a = t.fixed.container;
                        return $(window).scrollTop() + a.outerHeight() > n.outerHeight()
                    },
                    afterRender: function(t, e) {
                        (0, u.MP)(t, e, !0)
                    }
                }
        },
        257367: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return b
                }
            });
            var a = n(863056),
                i = n(977766),
                o = n.n(i),
                l = n(694473),
                r = n.n(l),
                u = n(703649),
                s = n.n(u),
                d = (n(366757), n(223336)),
                c = n(611384),
                g = n(31484),
                f = n(183123),
                p = n(156503),
                v = n.n(p),
                h = n(734274),
                m = n(353147),
                _ = ["colors", "padding", "backgroundColor1", "isTransparent", "highlightColor", "border", "isSticky", "itemSpacing", "dropShadow", "highlight"],
                b = {
                    name: "topRadial",
                    i18nDisplayName: "Editor|Top Radial",
                    _nameForPoGenerator: function() {
                        return m("Editor|Top Radial")
                    },
                    orientation: "horizontal",
                    nullHighlightColorMeansUnderline: !0,
                    getStyle: function(t) {
                        var e, n, a, i, l, r, u, s = t.isRtlLayout,
                            d = (0, c.nf)(t, _);
                        return u = s ? function() {
                            var t, e, n, a, i = (0, c.rF)("left", "last"),
                                l = (0, c.Ds)("left", "last"),
                                r = (0, c.q$)("left", "last"),
                                u = (0, c.Nv)("left", "last"),
                                s = (0, c.Nv)("right", "first");
                            return o()(t = o()(e = o()(n = o()(a = "\n    .s-nav-inner-wrap {\n      & > .s-topRadial-nav-left {\n        ".concat(s, "\n      }\n      & > .s-topRadial-nav-right {\n        ")).call(a, l, ";\n        ")).call(n, r, ";\n        ")).call(e, i, ";\n        ")).call(t, u, ";\n      }\n    }\n  ")
                        }() : function() {
                            var t, e, n, a, i = (0, c.rF)("right", "last"),
                                l = (0, c.Ds)("right", "last"),
                                r = (0, c.q$)("right", "last"),
                                u = (0, c.Nv)("left", "first"),
                                s = (0, c.Nv)("right", "last");
                            return o()(t = o()(e = o()(n = o()(a = "\n    .s-nav-inner-wrap {\n      & > .s-topRadial-nav-left {\n        ".concat(u, ";\n      }\n      & > .s-topRadial-nav-right {\n        ")).call(a, l, ";\n        ")).call(n, r, ";\n        ")).call(e, i, ";\n        ")).call(t, s, ";\n      }\n    }\n  ")
                        }(), o()(e = o()(n = o()(a = o()(i = o()(l = o()(r = "\n    text-align: center;\n    & .s-logo-title {\n      font-size: ".concat(h.LOGO_TITLE_FONT_SIZE[h.NAV_LAYOUT_VALUE.TOP_RADIAL], "px;\n      margin-top: 10px;\n    }\n    & ul {\n      text-align: left;\n    }\n    & .s-nav-btn {\n      white-space: nowrap;\n    }\n    & ul.s-uncollapsed-nav,\n    & .s-nav-items-and-links {\n      display: inline;\n    }\n    & ul.s-uncollapsed-nav > li {\n      display: inline-block;\n    }\n    & ul.s-collapsed-nav > li {\n      display: block;\n      &.hidden {\n        display: none;\n      }\n    }\n\n    & .s-logo {\n      display: inline-block;\n      max-width: 200px;\n      .s-logo-title {\n        max-width: 100%;\n      }\n    }\n\n    & ul li._compact {\n      padding-left: 4px;\n      padding-right: 4px;\n    }\n\n    & .s-nav-inner {\n      position: relative;\n    }\n\n    & .s-nav-icons {\n      & .s-nav-li {\n        display: inline-block;\n      }\n    }\n\n    & .s-topRadial-items-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 20px;\n    }\n\n    & .s-topRadial-nav-left,\n    & .s-topRadial-nav-right {\n      width: 40%;\n      display: inline-block;\n    }\n    & .s-topRadial-nav-left {\n      text-align: right;\n    }\n    & .s-topRadial-nav-right {\n      text-align: left;\n    }\n\n    & .s-nav-icons,\n    & .s-nav-btn {\n      display: inline-block;\n    }\n\n    & .s-logo-image img {\n      max-height: 50px;\n    }\n\n    &.s-navbar-desktop-fixed {\n      &:not(.inline-layout) {\n        transition: transform 0.75s;\n        &._show {\n          transform: translateY(0px);\n        }\n      }\n      /* Matches sleek behavior, but should be navHeight instead of hardcoded 250px */\n      transform: translateY(-250px);\n      & .s-logo-title {\n        display: none;\n      }\n      ")).call(r, d && "\n        &._alternative {\n          box-shadow: 0 1px rgba(0, 0, 0, 0.12);\n        }\n      ", "\n    }\n\n    ")).call(l, (0, c.Eg)(t), ";\n    ")).call(i, (0, c.E5)(t), ";\n    ")).call(a, (0, g.XO)(t), ";\n    ")).call(n, u, "\n\n    ")).call(e, !1, "\n  ")
                    },
                    templateFunction: function(t) {
                        var e = t.LogoImage,
                            n = t.LogoTitle,
                            i = t.NavItemsAndLinks,
                            o = t.NavIcons,
                            l = t.NavSocialMedia,
                            r = t.NavSocialMediaHasContactList,
                            u = t.NavButton,
                            s = t.NavContentContainer,
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = d.getImageKey,
                            g = d.hasNavIcons,
                            f = c && c() || "",
                            p = g;
                        return (0, a.Z)(s, {}, void 0, (0, a.Z)(r, {}), (0, a.Z)("div", {
                            className: "s-topRadial-items-container s-nav-inner-wrap"
                        }, void 0, (0, a.Z)("div", {
                            className: "s-topRadial-nav-left"
                        }, void 0, (0, a.Z)(i, {})), (0, a.Z)("div", {
                            className: "s-logo"
                        }, void 0, (0, a.Z)(e, {}, f), (0, a.Z)(n, {})), (0, a.Z)("div", {
                            className: "s-topRadial-nav-right"
                        }, void 0, (0, a.Z)(i, {}), p && (0, a.Z)(o, {}), (0, a.Z)(l, {}), (0, a.Z)(u, {}))))
                    },
                    enabledNavOptions: _,
                    shouldShowFixedNav: function(t, e) {
                        var n = d(".s-first-visible-section");
                        return f.getIsBlog() && (n = d(".s-blog-header")), 0 !== n.length && d(window).scrollTop() >= d(window).height() - v().get("navHeight")
                    },
                    shouldShowAlternativeFixedNavVariation: function() {
                        return !0
                    },
                    afterRender: function(t, e, n, a) {
                        var i = a.isShowSocialMediaContactList,
                            o = void 0 !== i && i;

                        function l(t) {
                            var n = t.container,
                                a = t.navButton,
                                i = t.navIcons,
                                l = t.navSocialMedia,
                                u = t.uncollapsedNavItems;
                            if (!(r()(n).call(n, ".big-button-editor").length > 0)) {
                                var g = r()(n).call(n, ".s-topRadial-nav-left .s-uncollapsed-nav > li"),
                                    f = r()(n).call(n, ".s-topRadial-nav-right .s-uncollapsed-nav > li"),
                                    p = r()(n).call(n, ".s-topRadial-nav-right .s-nav-ellipsis"),
                                    v = r()(n).call(n, ".s-topRadial-nav-right .s-collapsed-nav > li");
                                u.removeClass("hidden"), v.removeClass("hidden"), p.addClass("hidden"), i.outerWidth(!0), a.outerWidth(!0);
                                var h = (i.outerWidth(!0) || 0) + (a.outerWidth(!0) || 0) + (!o && l.outerWidth(!0) || 0) + 20,
                                    m = (0, c.f3)({
                                        items: g,
                                        containerSizes: [r()(n).call(n, ".s-topRadial-nav-left").width(), r()(n).call(n, ".s-topRadial-nav-right").width() - h],
                                        navOrientation: e.orientation,
                                        spaceForEllipsis: p.outerWidth()
                                    });
                                if (m.total < g.length) {
                                    var _ = m.perContainer;
                                    s()(g).call(g, _[0]).addClass("hidden"), s()(f).call(f, 0, _[0]).addClass("hidden"), s()(f).call(f, _[0] + _[1]).addClass("hidden"), p.removeClass("hidden"), s()(v).call(v, 0, m.total).addClass("hidden")
                                } else {
                                    var b = 0;
                                    g.each((function(t, e) {
                                        d(e).hasClass("hidden") || (b += d(e).outerWidth(!0))
                                    }));
                                    var C = (b + h) / 2,
                                        S = 0,
                                        E = null;
                                    g.each((function(t, e) {
                                        var n = d(e).outerWidth(!0);
                                        if ((S += n) >= C) return E = t, S - C > n / 2 && E--, !1
                                    })), null === E && (E = g.length - 1), s()(g).call(g, E + 1).addClass("hidden"), s()(f).call(f, 0, E + 1).addClass("hidden")
                                }
                            }
                        }
                        l(t.normal), l(t.fixed)
                    }
                }
        },
        668279: function(t, e, n) {
            n.r(e), n.d(e, {
                BlockTemplatesType: function() {
                    return a
                },
                FeatureListTemplates: function() {
                    return i
                },
                OldBlockTemplatesType: function() {
                    return o
                }
            });
            var a = {
                    TITLE: "title",
                    SIGN_UP_FORM: "signUpForm",
                    MEDIA: "media",
                    CONTACT_FORM: "contactForm",
                    CUSTOM_FORM: "customForm",
                    LARGE_PROFILE: "largeProfile",
                    TINY_ICON_TEXT: "tinyIconText",
                    SMALL_ICON_TEXT: "smallIconText",
                    ROW_BLOCK: "rowBlock",
                    COLUMN_BLOCK: "columnBlock",
                    SMALL_PROFILE: "smallProfile",
                    LARGE_FEATURE_LEFT: "largeFeatureLeft",
                    LARGE_FEATURE_RIGHT: "largeFeatureRight",
                    SMALL_FEATURE_LEFT: "smallFeatureLeft",
                    CARD: "card",
                    SMALL_FEATURE_RIGHT: "smallFeatureRight",
                    MEDIUM_FEATURE_LEFT: "mediumFeatureLeft",
                    MEDIUM_FEATURE_RIGHT: "mediumFeatureRight",
                    TINY_FEATURE_LEFT: "tinyFeatureLeft",
                    TINY_FEATURE_RIGHT: "tinyFeatureRight",
                    TEXT_GROUP: "textGroup",
                    TEXT_BOX: "textBox",
                    IMAGE_GROUP: "imageGroup",
                    GOOGLE_MAPS: "googleMaps",
                    CONTEXT: "context",
                    IMAGE: "Image",
                    VIDEO: "Video",
                    BUTTON: "Button",
                    REPEATED_ELEMENTS: "RepeatedElements",
                    GALLERY: "Gallery",
                    SEPARATOR: "Separator",
                    SPACER: "Spacer",
                    HTML_COMPONENT: "HtmlComponent"
                },
                i = [a.LARGE_FEATURE_LEFT, a.LARGE_FEATURE_RIGHT, a.SMALL_FEATURE_LEFT, a.SMALL_FEATURE_RIGHT, a.MEDIUM_FEATURE_LEFT, a.MEDIUM_FEATURE_RIGHT, a.TINY_FEATURE_LEFT, a.TINY_FEATURE_RIGHT, a.LARGE_PROFILE, a.SMALL_PROFILE],
                o = {
                    RICHTEXT: "RichText"
                }
        },
        734274: function(t, e, n) {
            n.r(e), n.d(e, {
                NAV_SPACING_CONFIG: function() {
                    return o
                },
                NAV_ITEM_HORIZONTA_PADDING: function() {
                    return l
                },
                NAV_ITEM_VERTICAL_PADDING: function() {
                    return r
                },
                NAV_LAYOUT_VALUE: function() {
                    return u
                },
                LOGO_TITLE_FONT_SIZE: function() {
                    return s
                },
                LEFT_NAV_RESPONSIVE_BREAKPOINT: function() {
                    return d
                },
                EDITOR_SIDE_MENU_WIDTH: function() {
                    return c
                }
            });
            var a, i = n(844845),
                o = {
                    compact: 7,
                    normal: 10,
                    large: 15
                },
                l = {
                    small: 8,
                    medium: 12,
                    large: 16,
                    extra: 24
                },
                r = {
                    small: 10,
                    medium: 15,
                    large: 22,
                    extra: 33
                },
                u = {
                    TOP_BAR: "topBar",
                    TOP_RADIAL: "topRadial",
                    TOP_CENTER: "topCenter",
                    CIRCLE_ICON: "circleIcon",
                    LEFT: "left",
                    TOP_BLOCK: "topBlock",
                    DRAWER: "drawer"
                },
                s = (a = {}, (0, i.Z)(a, u.TOP_BAR, 20), (0, i.Z)(a, u.TOP_RADIAL, 18), (0, i.Z)(a, u.TOP_CENTER, 18), (0, i.Z)(a, u.CIRCLE_ICON, 18), (0, i.Z)(a, u.LEFT, {
                    small: 20,
                    large: 24
                }), (0, i.Z)(a, u.TOP_BLOCK, 20), (0, i.Z)(a, u.DRAWER, 18), a),
                d = 900,
                c = 240
        },
        360941: function(t, e, n) {
            n.r(e), e.default = ["s5Theme", "navFont", "titleFont", "logoFont", "bodyFont", "buttonFont", "headingFont", "bodyFontWeight"]
        },
        835416: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var a = n(496486),
                i = ["sleek", "pitch_new", "bright", "onyx_new"];

            function o(t) {
                var e = {
                    page_scroll: "none"
                };
                return a.includes(i, t) && (e.page_scroll = "slide_in"), e.image_link_hover = "none", e.background = "perspective" === t ? "parallax" : "none", e
            }
        },
        828125: function(t, e, n) {
            n.d(e, {
                Bu: function() {
                    return i
                }
            }), n(974916), n(115306), n(678580);
            var a = n(468811),
                i = function() {
                    return a.v1()
                }
        },
        726469: function(t, e, n) {
            var a, i, o;
            n.d(e, {
                    Mb: function() {
                        return a
                    },
                    BC: function() {
                        return i
                    },
                    qy: function() {
                        return o
                    }
                }),
                function(t) {
                    t[t.sxl = 0] = "sxl", t[t.strikingly = 1] = "strikingly"
                }(a || (a = {})),
                function(t) {
                    t.FONT = "font", t.SVG = "svg"
                }(i || (i = {})),
                function(t) {
                    t.URL = "url", t.QR_CODE = "QRCode"
                }(o || (o = {}))
        },
        832313: function(t, e, n) {
            n.r(e), n.d(e, {
                LINK_TYPE: function() {
                    return i
                },
                LINK_OPTIONS: function() {
                    return o
                },
                BUTTON_SIZE_VALUE: function() {
                    return l
                },
                BUTTON_CONFIG: function() {
                    return r
                },
                CUSTOM_BUTTON_TAB: function() {
                    return u
                },
                BUTTON_INIT_ALIGNMENT: function() {
                    return s
                },
                BUTTON_INIT_STYLE: function() {
                    return d
                },
                convertButtonAlignment: function() {
                    return c
                }
            });
            var a = n(353147),
                i = {
                    SECTION: "Section",
                    DOCUMENT: "Document",
                    REGISTRATION: "registration",
                    EMAIL: "Email",
                    WEB: "Web"
                },
                o = [{
                    name: function() {
                        return a("Web")
                    },
                    value: i.WEB,
                    defaultValue: "http://yourwebsite.com",
                    tips: function() {
                        return a("Enter full URL (http://yourwebsite.com) to link to another website.")
                    },
                    product: ["strikingly", "sxl"]
                }, {
                    name: function() {
                        return a("Email")
                    },
                    value: i.EMAIL,
                    defaultValue: "mailto:youremail@gmail.com",
                    tips: function() {
                        return a('Enter "mailto:youremail@gmail.com" to link to your email.')
                    },
                    product: ["strikingly", "sxl"]
                }, {
                    name: function() {
                        return a("Section")
                    },
                    value: i.SECTION,
                    defaultValue: "#2",
                    tips: function() {
                        return a('Enter "#2" to link to the second section on this page.')
                    },
                    product: ["strikingly", "sxl"]
                }, {
                    name: function() {
                        return a("Document")
                    },
                    value: i.DOCUMENT,
                    defaultValue: "",
                    tips: function() {
                        return a("Upload a doc for viewers to download.")
                    },
                    product: ["strikingly"]
                }, {
                    name: function() {
                        return a("Membership|Member registration")
                    },
                    value: i.REGISTRATION,
                    defaultValue: "",
                    tips: function() {
                        return a("Membership|This button will open the Log In & Registration screen for this site's members. (If already logged in, this button will go to the default member's page.)")
                    },
                    product: ["strikingly", "sxl"]
                }],
                l = {
                    SMALL: "small",
                    MEDIUM: "medium",
                    LARGE: "large",
                    FULL: "full",
                    AUTOMATIC: "automatic"
                },
                r = {
                    size: [{
                        name: function() {
                            return a("Editor|Large")
                        },
                        value: l.LARGE
                    }, {
                        name: function() {
                            return a("Editor|Medium")
                        },
                        value: l.MEDIUM
                    }, {
                        name: function() {
                            return a("Editor|Small")
                        },
                        value: l.SMALL
                    }, {
                        name: function() {
                            return a("Editor|Full width")
                        },
                        value: l.FULL
                    }],
                    mobile_size: [{
                        name: function() {
                            return a("Editor|Large")
                        },
                        value: l.LARGE
                    }, {
                        name: function() {
                            return a("Editor|Medium")
                        },
                        value: l.MEDIUM
                    }, {
                        name: function() {
                            return a("Editor|Small")
                        },
                        value: l.SMALL
                    }, {
                        name: function() {
                            return a("Automatic")
                        },
                        value: l.AUTOMATIC
                    }],
                    alignment: [{
                        name: function() {
                            return a("Editor|Auto")
                        },
                        value: "auto"
                    }, {
                        name: function() {
                            return a("Editor|Left")
                        },
                        value: "flex-start"
                    }, {
                        name: function() {
                            return a("Editor|Center")
                        },
                        value: "center"
                    }, {
                        name: function() {
                            return a("Editor|Right")
                        },
                        value: "flex-end"
                    }],
                    style: [{
                        name: function() {
                            return a("Editor|Auto")
                        },
                        value: ""
                    }, {
                        name: function() {
                            return a("Editor|Solid")
                        },
                        value: "solid"
                    }, {
                        name: function() {
                            return a("Editor|Ghost")
                        },
                        value: "ghost"
                    }]
                },
                u = {
                    CONTENT: "content",
                    DESIGN: "design"
                },
                s = "auto",
                d = "",
                c = function(t) {
                    return "left" === t ? "flex-start" : "flex-end"
                }
        },
        918596: function(t, e, n) {
            n.r(e), n.d(e, {
                FOOTER_LOGO_PHRASES: function() {
                    return g
                }
            });
            var a, i, o, l, r, u = n(863056),
                s = (n(366757), n(117847)),
                d = n(589499),
                c = function() {
                    return (0, u.Z)("img", {
                        style: {
                            width: "88px",
                            height: "20px"
                        },
                        src: (0, d.cdnAssetPath)(s.U.PBS_LOGO)
                    })
                },
                g = {
                    title: {
                        en: function() {
                            return (0, u.Z)("div", {
                                className: "pbs-text"
                            }, void 0, a || (a = (0, u.Z)("span", {
                                className: "pbs-span"
                            }, void 0, "Create a site with ")), c())
                        },
                        "zh-TW": function() {
                            return (0, u.Z)("div", {
                                className: "pbs-text"
                            }, void 0, c(), i || (i = (0, u.Z)("span", {
                                className: "pbs-span"
                            }, void 0, " 輕鬆架設你的網站")))
                        },
                        ja: function() {
                            return (0, u.Z)("div", {
                                className: "pbs-text"
                            }, void 0, c(), o || (o = (0, u.Z)("span", {
                                className: "pbs-span"
                            }, void 0, "を使って、サイトを製作しましょう")))
                        },
                        fr: function() {
                            return (0, u.Z)("div", {
                                className: "pbs-text"
                            }, void 0, l || (l = (0, u.Z)("span", {
                                className: "pbs-span"
                            }, void 0, "Créer un site avec ")), c())
                        },
                        ar: function() {
                            return (0, u.Z)("div", {
                                className: "pbs-text"
                            }, void 0, r || (r = (0, u.Z)("span", {
                                className: "pbs-span"
                            }, void 0, "أنشئ موقعًا باستخدام ")), c())
                        }
                    },
                    tooltipText1: {
                        en: "This website is built with Strikingly.",
                        "zh-TW": "此網站通過 Strikingly 創建。",
                        ja: "Strikinglyで作成されたサイトです。",
                        fr: "Ce site est construit avec Strikingly.",
                        ar: "تم بناء هذا الموقع مع Strikingly."
                    },
                    tooltipText2: {
                        en: "Create yours today!",
                        "zh-TW": "立即免費創建！",
                        ja: "今すぐあなたのサイトを作成ください！",
                        fr: "Créer le votre aujourd'hui !",
                        ar: "اصنع موقعك اليوم!"
                    },
                    guideText1: {
                        en: "This website is built with Strikingly.",
                        "zh-TW": "此網站通過 Strikingly 創建。",
                        ja: "Strikinglyで作成されたサイトです。",
                        fr: "Ce site est construit avec Strikingly.",
                        ar: "تم بناء هذا الموقع مع Strikingly."
                    },
                    guideText2: {
                        en: "Create your FREE website today!",
                        "zh-TW": "立即免費擁有一個網站！",
                        ja: "今すぐに無料でウェブサイトを作成しましょう！",
                        fr: "Créez votre site Web GRATUIT dès aujourd'hui !",
                        ar: "أنشئ موقعك المجاني اليوم!"
                    },
                    startNow: {
                        en: "start now",
                        "zh-TW": "开始创建",
                        ja: "今すぐ始める",
                        fr: "démarrez de suite",
                        ar: "ابدأ الآن"
                    }
                }
        },
        628568: function(t, e, n) {
            n.r(e), n.d(e, {
                getSectionTextAlignment: function() {
                    return r
                },
                getButtonAlignmentStyle: function() {
                    return u
                }
            });
            var a = n(694473),
                i = n.n(a),
                o = n(832313),
                l = n(234584),
                r = function(t, e) {
                    var n = i()(e).call(e, (function(e) {
                        return t.get([e, "value"])
                    }));
                    return n ? t.get([n, "alignment"]) : null
                },
                u = function(t) {
                    var e, n = l.getIsRtlLayout();
                    switch (t) {
                        case "left":
                            e = n ? "flex-end" : "flex-start";
                            break;
                        case "center":
                            e = "center";
                            break;
                        case "right":
                            e = n ? "flex-start" : "flex-end";
                            break;
                        case "justify":
                            e = "flex-start";
                            break;
                        default:
                            e = o.BUTTON_INIT_ALIGNMENT
                    }
                    return e
                }
        },
        596944: function(t, e, n) {
            var a = n(366757),
                i = n(496486);
            t.exports = function() {
                return function() {
                    return this.props.tagName, this.getCKEditor(), this.getDraftEditor(), this.getAIEditor(), a.createElement("div", {
                        className: "s-component s-text"
                    }, null, a.createElement("div", {
                        className: this.props.tagClassName
                    }, this.hasContent() ? a.createElement("div", i.assign({}, {
                        ref: "content",
                        key: "4160"
                    }, this._getContentProps())) : null))
                }.apply(this, [])
            }
        },
        124218: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(51942),
                l = (0, i.default)(o),
                r = n(143393);

            function u(t) {
                return (0, r.Record)((0, l.default)({
                    id: null,
                    defaultValue: null
                }, t))
            }
            var s = u({
                    type: "Image",
                    url: "",
                    link_url: "",
                    thumb_url: "",
                    new_target: !1,
                    noCompression: !1,
                    caption: "",
                    description: "",
                    h: null,
                    w: null,
                    s: null,
                    storageKey: null,
                    storagePrefix: null,
                    format: null,
                    storage: null,
                    _state: "normal",
                    focus: null,
                    border_radius: null,
                    aspect_ratio: null
                }),
                d = u({
                    type: "Video",
                    html: "",
                    url: "",
                    maxwidth: 700,
                    thumbnail_url: "",
                    description: "",
                    _state: "normal"
                }),
                c = u({
                    type: "Media",
                    current: "image",
                    image: s(),
                    video: d(),
                    _state: "normal"
                }),
                g = {
                    Image: s,
                    Video: d,
                    Media: c
                };
            e.default = g, t.exports = e.default
        },
        877909: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(213192),
                l = {
                    ActionTypes: (0, (0, i.default)(o).default)({
                        SET_SECTION_INDEX: null,
                        DID_NAVIGATE_TO_SECTION: null,
                        NAVIGATE_TO_HASH: null,
                        NAVIGATE_TO_PREVIOUS_SECTION: null,
                        NAVIGATE_TO_NEXT_SECTION: null,
                        PAGE_CONTENT_UPDATED: null,
                        PAGE_MOUNTED: null,
                        SWITCH_PAGE: null,
                        REPEATABLE_ITEM_MOVED: null,
                        TOGGLE_CATEGORY_DRAWER: null,
                        GET_BLOG_POSTS_REQUEST: null,
                        GET_BLOG_POSTS_SUCCESS: null,
                        GET_BLOG_ARCHIVE_POSTS_SUCCESS: null,
                        SET_PRODUCT_PAGE_BINDING: null,
                        SET_LAST_PAGE_SCROLL_TOP: null,
                        SET_PAGE_TYPE: null,
                        SET_PAGE_UID: null,
                        UPDATE_GENERATING_PAGE_STATUS: null,
                        SET_SECTIONS_BY_PAGE: null,
                        SET_BLOG_SETTING: null,
                        UPDATE_PAGE_DATA: null,
                        INIT_THEME_PRE_COLORS: null,
                        INIT_COLOR_SETTINGS: null
                    })
                };
            e.default = l, t.exports = e.default
        },
        14137: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(855108),
                l = (0, i.default)(o);
            e.default = new l.default("PageDispatcher"), t.exports = e.default
        },
        156503: function(t, e, n) {
            var a = n(223765),
                i = n(752424),
                o = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            o(e, "__esModule", {
                value: !0
            });
            var u, s = n(717187),
                d = (0, r.default)(s),
                c = p(n(496486)),
                g = p(n(143393));

            function f(t) {
                if ("function" != typeof i) return null;
                var e = new i,
                    n = new i;
                return (f = function(t) {
                    return t ? n : e
                })(t)
            }

            function p(t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || "object" !== a(t) && "function" != typeof t) return {
                    default: t
                };
                var n = f(e);
                if (n && n.has(t)) return n.get(t);
                var i = {},
                    r = o && l;
                for (var u in t)
                    if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                        var s = r ? l(t, u) : null;
                        s && (s.get || s.set) ? o(i, u, s) : i[u] = t[u]
                    }
                return i.default = t, n && n.set(t, i), i
            }
            var v = c.assign({}, d.default.prototype, {
                emitChange: function() {
                    this.emit("element_measurements_event_id")
                },
                init: function(t) {
                    t.set(new g.Map), u = t
                },
                getBinding: function() {
                    return u
                },
                set: function(t, e) {
                    u.set(t, e), this.emitChange()
                },
                get: function(t) {
                    return u.get(t)
                }
            });
            e.default = v, t.exports = e.default
        },
        818166: function(t, e, n) {
            var a = n(223765),
                i = n(703649),
                o = n(666419),
                l = n(465420),
                r = n(619996),
                u = n(841511),
                s = (n(686902), n(14310), n(620116), n(834074)),
                d = (n(778914), n(239649), n(820368), n(663978)),
                c = n(752424),
                g = n(60530)(n(60530));
            d(e, "__esModule", {
                value: !0
            });
            var f = n(359036),
                p = ((0, g.default)(f), n(418777)),
                v = ((0, g.default)(p), n(487672)),
                h = ((0, g.default)(v), n(223765)),
                m = (0, g.default)(h);
            n(241539), n(339714), n(382526), n(141817), n(974916), n(115306), n(864765), n(323123);
            var _ = n(778914),
                b = (0, g.default)(_),
                C = n(2991),
                S = (0, g.default)(C),
                E = n(497093),
                T = (0, g.default)(E),
                y = n(977766),
                I = (0, g.default)(y),
                w = n(432366),
                x = ((0, g.default)(w), n(492762)),
                P = ((0, g.default)(x), n(981643)),
                N = (0, g.default)(P),
                k = n(359340),
                A = (0, g.default)(k),
                B = n(694473),
                L = (0, g.default)(B),
                D = n(277149),
                O = (0, g.default)(D),
                M = n(686902),
                R = (0, g.default)(M),
                U = n(780426),
                Z = (0, g.default)(U),
                G = n(666419),
                F = (0, g.default)(G),
                H = n(620116),
                V = (0, g.default)(H),
                W = n(678580),
                z = (0, g.default)(W),
                $ = n(62462),
                j = (0, g.default)($),
                K = n(729828),
                J = (0, g.default)(K),
                Y = n(410062),
                X = (0, g.default)(Y),
                q = n(703649),
                Q = (0, g.default)(q),
                tt = n(25843),
                et = (0, g.default)(tt),
                nt = n(560954),
                at = (0, g.default)(nt),
                it = n(344494),
                ot = (0, g.default)(it),
                lt = n(933032),
                rt = ((0, g.default)(lt), n(496486)),
                ut = (0, g.default)(rt),
                st = n(223336),
                dt = (0, g.default)(st),
                ct = n(143393),
                gt = (0, g.default)(ct),
                ft = n(717187),
                pt = n(442279),
                vt = n(183123),
                ht = (0, g.default)(vt),
                mt = n(234584),
                _t = (0, g.default)(mt),
                bt = n(843296),
                Ct = (0, g.default)(bt),
                St = n(43138),
                Et = (0, g.default)(St),
                Tt = n(815549),
                yt = ((0, g.default)(Tt), n(384887)),
                It = (0, g.default)(yt),
                wt = n(14991),
                xt = (0, g.default)(wt),
                Pt = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== a(t) && "function" != typeof t) return {
                        default: t
                    };
                    var n = Xt(e);
                    if (n && n.has(t)) return n.get(t);
                    var i = {},
                        o = d && s;
                    for (var l in t)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(t, l)) {
                            var r = o ? s(t, l) : null;
                            r && (r.get || r.set) ? d(i, l, r) : i[l] = t[l]
                        }
                    return i.default = t, n && n.set(t, i), i
                }(n(636969)),
                Nt = n(22874),
                kt = n(79752),
                At = (0, g.default)(kt),
                Bt = n(835416),
                Lt = (0, g.default)(Bt),
                Dt = n(680523),
                Ot = (0, g.default)(Dt),
                Mt = n(877909),
                Rt = (0, g.default)(Mt),
                Ut = n(360941),
                Zt = ((0, g.default)(Ut), n(14137)),
                Gt = (0, g.default)(Zt),
                Ft = n(549556),
                Ht = ((0, g.default)(Ft), n(727505), n(112525)),
                Vt = n(329756),
                Wt = n(809797),
                zt = n(684961),
                $t = (0, g.default)(zt),
                jt = n(177897),
                Kt = n(743050),
                Jt = (0, g.default)(Kt),
                Yt = n(836766);

            function Xt(t) {
                if ("function" != typeof c) return null;
                var e = new c,
                    n = new c;
                return (Xt = function(t) {
                    return t ? n : e
                })(t)
            }

            function qt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }
            var Qt, te, ee, ne = ["blog", "blog1", "blog2", "blog3"],
                ae = "page_data_store_event_id",
                ie = "product_page",
                oe = "search_page",
                le = "item_page",
                re = "store_page",
                ue = "portfolio_categories_page",
                se = "blog_categories_page",
                de = "booking_page",
                ce = [ie, oe, le, re, ue, se, de],
                ge = (0, pt.createSelector)((function(t) {
                    return t.get("animations")
                }), (function(t) {
                    return t.toJS()
                })),
                fe = function(t, e) {
                    var n = new It.default(t),
                        a = It.default.getDiffLightnessColors(n.toHsl());
                    return (0, S.default)(a).call(a, (function(t, n) {
                        return {
                            value: t,
                            index: n,
                            type: e,
                            dark: n === a.length - 1
                        }
                    }))
                },
                pe = ut.default.assign({}, ft.EventEmitter.prototype, {
                    emitChange: function() {
                        this.emit(ae)
                    },
                    addChangeListener: function(t) {
                        return this.on(ae, t)
                    },
                    removeChangeListener: function(t) {
                        return this.removeListener(ae, t)
                    },
                    __set: function(t, e) {
                        return this.getBinding().set(t, e)
                    },
                    get: function(t) {
                        var e = this.getBinding();
                        return null != t && (e = e.get(t)), e && "function" == typeof e.toJS ? e.toJS() : e
                    },
                    sub: function(t) {
                        var e = this.getBinding();
                        return null != t && (e = e.sub(t)), e
                    },
                    hydrate: function(t, e) {
                        var n = JSON.parse((0, A.default)(t));
                        return ee.atomically().set(gt.default.fromJS(this.getDefault(n, e))).commit({
                            notify: !1
                        })
                    },
                    getTemplateVariation: function() {
                        var t = this.getCustomColors() || {},
                            e = t.active,
                            n = t.highlight1,
                            a = t.highlight2;
                        if (e && (n || a)) return "custom";
                        if (ht.default.getIsBlog()) return _t.default.getIsV4() ? $S.blogPostData.pageMeta.templateVariation : "default";
                        var i = this.get("templateVariation"),
                            o = Ct.default.get(_t.default.getData("theme.name")).variations;
                        return (null != o ? (0, L.default)(o).call(o, (function(t) {
                            return t.id === i
                        })) : void 0) ? i : "default"
                    },
                    getTheFirstEmptyMetaDescriptionPage: function() {
                        var t, e = this,
                            n = this.getHomePageUID(),
                            a = ee.get("navigation") && ee.get("navigation").getIn(["items", 1, "id"], "");
                        return (0, O.default)(t = this._getAllPageIds(ee.get("navigation").get("items"))).call(t, (function(t) {
                            if (t !== n && !e.getMetaDescriptionById(t)) return a = t
                        })), a
                    },
                    _getAllPageIds: function(t) {
                        var e = this,
                            n = [];
                        return (0, S.default)(t).call(t, (function(t) {
                            return "dropdown" === t.get("type") ? n = (0, I.default)(n).call(n, e._getAllPageIds(t.get("items"))) : "page" === t.get("type") ? n.push(t.get("id")) : void 0
                        })), n
                    },
                    getMetaDescriptionById: function(t) {
                        var e;
                        return (0, O.default)(e = ee.get("pages")).call(e, (function(e) {
                            if (e.get("uid") === t) return e.get("description")
                        }))
                    },
                    hasMetaDescriptionForEachPage: function() {
                        var t, e = this.getHomePageUID();
                        return !(0, O.default)(t = ee.get("pages")).call(t, (function(t) {
                            return t.get("uid") !== e && !t.get("description")
                        }))
                    },
                    getCustomColors: function() {
                        return ht.default.getIsBlog() ? null != $S.blogPostData.pageMeta.customColors ? $S.blogPostData.pageMeta.customColors : {} : this.get("customColors") || {}
                    },
                    getThemePreColors: function() {
                        var t;
                        return (null === (t = this.getCustomColors()) || void 0 === t ? void 0 : t.themePreColors) || []
                    },
                    getTextColorSettings: function() {
                        if (ht.default.getIsBlog()) {
                            var t, e, n, a = (null === (t = $S) || void 0 === t || null === (e = t.blogPostData) || void 0 === e || null === (n = e.pageData) || void 0 === n ? void 0 : n.s5Theme) || {},
                                i = (null == a ? void 0 : a.section) || {};
                            return {
                                baseColor: i.baseColor,
                                titleColor: i.titleColor,
                                subtitleColor: i.subtitleColor,
                                itemSubtitleColor: i.itemSubtitleColor,
                                itemTitleColor: i.itemTitleColor
                            }
                        }
                        var o = this.getS5Theme();
                        return {
                            baseColor: o.getIn(["section", "baseColor"]) || Yt.TEXT_DEFAULT_COLORS.baseColor,
                            titleColor: o.getIn(["section", "titleColor"]) || Yt.TEXT_DEFAULT_COLORS.titleColor,
                            subtitleColor: o.getIn(["section", "subtitleColor"]) || Yt.TEXT_DEFAULT_COLORS.subtitleColor,
                            itemSubtitleColor: o.getIn(["section", "itemSubtitleColor"]) || Yt.TEXT_DEFAULT_COLORS.itemTitleColor,
                            itemTitleColor: o.getIn(["section", "itemTitleColor"]) || Yt.TEXT_DEFAULT_COLORS.itemSubtitleColor
                        }
                    },
                    getThemeButtonSettings: function() {
                        if (ht.default.getIsBlog()) {
                            var t, e, n, a, i = (null === (t = $S) || void 0 === t || null === (e = t.blogPostData) || void 0 === e || null === (n = e.pageData) || void 0 === n || null === (a = n.s5Theme) || void 0 === a ? void 0 : a.button) || {},
                                o = i.backgroundColor,
                                l = void 0 === o ? "#000000" : o,
                                r = i.backgroundSettings;
                            return {
                                backgroundColor: l,
                                backgroundSettings: void 0 === r ? {} : r
                            }
                        }
                        var u = this.getS5Theme();
                        return {
                            backgroundColor: u.getIn(["button", "backgroundColor"]),
                            backgroundSettings: {
                                type: u.getIn(["button", "backgroundSettings", "type"]),
                                preIndex: u.getIn(["button", "backgroundSettings", "preIndex"]),
                                default: u.getIn(["button", "backgroundSettings", "default"])
                            }
                        }
                    },
                    getThemeNavColorSettings: function() {
                        var t = this.getS5Theme();
                        return {
                            itemColorSettings: t.getIn(["nav", "itemColorSettings"]),
                            backgroundColorSettings: t.getIn(["nav", "backgroundColorSettings"]),
                            highlightColorSettings: t.getIn(["nav", "highlightColorSettings"])
                        }
                    },
                    getPreviewVariation: function() {
                        return ht.default.getIsBlog() ? null : this.getBinding().meta().sub("previewVariation").toJS()
                    },
                    getTemplateVariationOrPreview: function() {
                        return ht.default.getIsBlog() ? this.getTemplateVariation() : this.getBinding().meta().sub("previewVariation").toJS() || this.getTemplateVariation()
                    },
                    getIsCustomColorsSelectedOrPreview: function() {
                        return "custom" === this.getTemplateVariationOrPreview()
                    },
                    getTemplateVariationClassNames: function() {
                        if (this.getIsCustomColorsSelectedOrPreview()) return "s-variation-default s-custom-colors";
                        var t = (this.getTemplateVariationOrPreview() || "default").toSlug();
                        return "s-variation-".concat(t)
                    },
                    getSiteAnimationClassNames: function() {
                        var t = this.getSiteAnimations(),
                            e = "";
                        return "none" !== t.image_link_hover && (e += "s-animation-image_link_hover-".concat(t.image_link_hover)), e
                    },
                    pageHasBackgroundImage: function() {
                        for (var t = this.getCurrentPageBinding().get("sections"), e = 0; e < t.count();) {
                            if (t.get(e).get("components") && t.get(e).get("components").get("background1") && t.get(e).get("components").get("background1").get("url")) return !0;
                            e++
                        }
                        return !1
                    },
                    getUserOperation: function() {},
                    getShowNav: function() {
                        return this.getBinding().get("showNav")
                    },
                    getShowMobileMenu: function() {
                        return this.getBinding().get("showMobileNav")
                    },
                    getShowNavigationButtons: function() {
                        return this.getBinding().get("showNavigationButtons")
                    },
                    getShowFooter: function() {
                        return this.getBinding().get("showFooter")
                    },
                    getShowShoppingCart: function() {
                        return !1 !== this.getBinding().get("showShoppingCartIcon")
                    },
                    getCanUseSectionDefaultFormat: function() {
                        return !!ht.default.getCanUseSectionDefaultFormat() && (ht.default.getIsBlog() ? $S.blogPostData.pageData.useSectionDefaultFormat : this.getBinding().get("useSectionDefaultFormat"))
                    },
                    getCanUseSectionImprovementsPart1: function() {
                        return !("s5-theme" !== _t.default.getThemeName() || !ht.default.getCanUseSectionImprovementsPart1()) && (ht.default.getIsBlog() ? $S.blogPostData.pageData.useSectionImprovementsPart1 : this.getBinding().get("useSectionImprovementsPart1"))
                    },
                    getShowStrikinglyLogo: function() {
                        return this.getBinding().get("showStrikinglyLogo")
                    },
                    getShowCookieNotification: function() {
                        return ht.default.getIsBlog() ? $S.blogPostData.pageData.showCookieNotification : this.getBinding().get("showCookieNotification")
                    },
                    getCookieNotificationArea: function() {
                        return ht.default.getIsBlog() ? $S.blogPostData.pageData.cookieNotificationArea : this.getBinding().get("cookieNotificationArea")
                    },
                    getShowLegacyGallery: function() {
                        return this.getBinding().get("showLegacyGallery")
                    },
                    getIsFullScreenOnlyOneSection: function() {
                        var t;
                        return null === (t = this.getBinding()) || void 0 === t ? void 0 : t.get("isFullScreenOnlyOneSection")
                    },
                    getIsGeneratedInSectionBuilder: function() {
                        var t;
                        return null === (t = this.getBinding()) || void 0 === t ? void 0 : t.get("isGeneratedInSectionBuilder")
                    },
                    getShowTermsAndConditions: function() {
                        return this.getBinding() ? this.getBinding().get("showTermsAndConditions") : ht.default.getIsBlog() ? $S.siteData.show_terms_and_conditions : $S.stores.pageData.showTermsAndConditions
                    },
                    getActivateGDPRCompliance: function() {
                        return this.getBinding().get("activateGDPRCompliance")
                    },
                    getNavDropdownFontWeight: function() {
                        return this.getBinding().get("navDropdownFontWeight")
                    },
                    getTermsText: function() {
                        return this.getBinding() ? this.getBinding().get("termsText") : ht.default.getIsBlog() ? $S.siteData.terms_text : $S.stores.pageData.termsText
                    },
                    getShowPrivacyPolicy: function() {
                        return this.getBinding() ? this.getBinding().get("showPrivacyPolicy") : ht.default.getIsBlog() ? $S.siteData.show_privacy_policy : $S.stores.pageData.showPrivacyPolicy
                    },
                    getPrivacyPolicyText: function() {
                        return this.getBinding() ? this.getBinding().get("privacyPolicyText") : ht.default.getIsBlog() ? $S.siteData.privacy_policy_text : $S.stores.pageData.privacyPolicyText
                    },
                    getGDPRHtml: function() {
                        return this.getBinding().get("GDPRHtml")
                    },
                    getPageOptionCheckState: function(t) {
                        return this.getBinding().get(t)
                    },
                    getThemeFontSize: function() {
                        var t = this.getS5Theme();
                        return t ? {
                            body: t.getIn(["section", "baseFontSize"]) || 15,
                            title: t.getIn(["section", "titleFontSize"]) || 36,
                            subTitle: t.getIn(["section", "subtitleFontSize"]) || 18,
                            itemTitle: t.getIn(["section", "itemTitleFontSize"]) || 18,
                            itemSubTitle: t.getIn(["section", "itemSubtitleFontSize"]) || 18
                        } : {}
                    },
                    getSectionAlignment: function() {
                        var t = this.getS5Theme();
                        return t ? t.getIn(["section", "contentAlignment"]) : ""
                    },
                    getIsS6Template: function() {
                        var t = !1;
                        try {
                            ht.default.getIsBlog() || (t = this.getBinding().get("isS6Template"))
                        } catch (t) {
                            console.error(t)
                        }
                        return t
                    },
                    tagAndSerialize: function() {
                        var t = Pt.compareAndMark(ee.get()),
                            e = this.serialize(),
                            n = Pt.getLogs();
                        return Pt.resetChangeLogs(), [e, n, t]
                    },
                    serialize: function() {
                        var t = ee.toJS();
                        return At.default.deleteMeta(t), t
                    },
                    getBinding: function() {
                        return ee
                    },
                    getDefault: function(t, e) {
                        var n = function(e) {
                            var n;
                            return At.default.addMetaId(e), t.productPage = e, e.initialPage || (t.productPage.description && (t.productPage.description = t.productPage.description.toString().replace(/\n/g, "<br>")), null != t.productPage.variations && (0, b.default)(n = t.productPage.variations).call(n, (function(t) {
                                t.price /= 100, t.originalPrice /= 100
                            }))), e.initialPage = !0
                        };
                        return $S.stores.productMeta && n($S.stores.productMeta), $S.stores.portfolioMeta && n($S.stores.portfolioMeta), t.navigation || (t.navigation = {}), 0 === (0, R.default)(t).length || !e || t.animations || (t.animations = (0, Lt.default)(e)), t.s5Theme = (0, Nt.migrateS5StyleConfig)(t.s5Theme, e), At.default.addMetaId(t)
                    },
                    getSiteAnimations: function() {
                        return ht.default.getIsBlog() ? null != $S.blogPostData.pageMeta.animations ? $S.blogPostData.pageMeta.animations : (0, Lt.default)(_t.default.getThemeName()) : ge(ee.get())
                    },
                    getIsMultiPage: function() {
                        return ht.default.getIsBlog() ? $S.blogPostData.pageMeta.multiPage : this.getBinding().get("multi_pages")
                    },
                    getHaveMultiPage: function() {
                        return ht.default.getIsBlog() ? $S.blogPostData.pageMeta.multiPage : this.getBinding().get("multi_pages") && this.getPages().size > 1
                    },
                    getEnableCRMLiveChat: function() {
                        return ht.default.getIsBlog() ? (0, $t.default)("siteData.live_chat") : this.getBinding().get("live_chat")
                    },
                    getPagesBinding: function() {
                        return ee.sub("pages")
                    },
                    getPages: function() {
                        return ee.get("pages")
                    },
                    getPagePathById: function(t) {
                        var e = pe.getPageFromUID(t);
                        return Ot.default.PAGE.SHOW_MULTIPAGE(e.get("path") || "")
                    },
                    getPageStore: function() {
                        return ee.get()
                    },
                    getSectionsBinding: function() {
                        var t;
                        return (0, Z.default)(t = this.getPages()).call(t, (function(t) {
                            return t.get("sections")
                        }))
                    },
                    getItemsBinding: function() {
                        return ee.sub("navigation").sub("items")
                    },
                    getItems: function() {
                        var t, e = ee.get("navigation");
                        if (e) {
                            var n = e.get("items");
                            if (n) return n
                        }
                        return (0, S.default)(t = this.getPages()).call(t, (function(t) {
                            return gt.default.fromJS({
                                type: "page",
                                id: t.get("uid"),
                                visibility: !0
                            })
                        }))
                    },
                    flattenItems: function(t, e) {
                        for (var n = 0, a = (0, F.default)(t); n < a.length; n++) {
                            var i = a[n];
                            "dropdown" === i.type ? this.flattenItems(i.items, e) : e.push(i)
                        }
                        return e
                    },
                    getFlattenedNavItems: function() {
                        var t = this.getItems(),
                            e = [];
                        return this.flattenItems(t.toJS(), e), e
                    },
                    getShowInNavLinks: function(t) {
                        if (!this.getIsMultiPage()) return !0;
                        var e = ee.get("navigation");
                        if (!e) return !0;
                        var n = e.get("links");
                        return !n || (0, O.default)(n).call(n, (function(e) {
                            return e.get("id") === t
                        }))
                    },
                    getPage: function(t) {
                        return this.getPagesBinding().get(t)
                    },
                    getCurrentPageBinding: function() {
                        var t = this.getCurrentPageIndex();
                        return this.getPagesBinding().sub(t)
                    },
                    getSectionBindingByIndex: function(t) {
                        return this.getCurrentPageBinding().sub("sections").sub(t)
                    },
                    getProductPageBinding: function() {
                        return ee.sub("productPage")
                    },
                    getSearchPageBinding: function() {
                        return ee.sub("searchPage")
                    },
                    getAIDescriptions: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = _t.default.getDescription(),
                            n = pe.get("".concat(t, ".components.slideSettings.description")) || "";
                        return {
                            siteDescription: e,
                            sectionDescription: n
                        }
                    },
                    getCurrentPageUID: function() {
                        return ht.default.getIsBlog() ? ee.get("id") : ee.get("_selectedPageUID") || ee.get("navigation.items.0.id") || ee.get("pages.0.uid") || this.getHomePageUID()
                    },
                    getInitPageUID: function() {
                        return ee.get("_initPageUID")
                    },
                    getInitialSectionIndex: function() {
                        return ee.get("_initialSectionIndex") || 1
                    },
                    getLastPageUID: function() {
                        return ee.get("_lastPageUID") || ee.get("navigation.items.0.id") || ee.get("pages.0.uid")
                    },
                    getContactMaps: function() {
                        var t, e = this.getSectionsBinding(),
                            n = (0, S.default)(t = (0, V.default)(e).call(e, (function(t) {
                                return t.getIn(["components", "contactInfo1"])
                            }))).call(t, (function(t) {
                                return t.getIn(["components", "contactInfo1"])
                            })).toJS();
                        return (0, S.default)(n).call(n, (function(t) {
                            return {
                                id: t.id,
                                address: t.address || ""
                            }
                        }))
                    },
                    isPredefinedPage: function(t) {
                        return (0, z.default)(ce).call(ce, t)
                    },
                    isInProductPage: function() {
                        return pe.getCurrentPageUID() === ie
                    },
                    isInItemPage: function() {
                        return pe.getCurrentPageUID() === le
                    },
                    isInStorePage: function() {
                        return pe.getCurrentPageUID() === re
                    },
                    isInBlogCategoryPage: function() {
                        return pe.getCurrentPageUID() === se
                    },
                    isInPortfolioCategoriesPage: function() {
                        return pe.getCurrentPageUID() === ue
                    },
                    isInAiGeneratePage: function() {
                        return pe.getCurrentPageUID() === Ht.PAGE_UID.AI_GENERATE_PAGE
                    },
                    getCurrentPageIndex: function() {
                        var t = this.getCurrentPageUID();
                        return t !== ie && t !== le || (t = this.getLastPageUID()), this.getPageIndexByUid(t)
                    },
                    getPageIndexByUid: function(t) {
                        var e = this.getPages(),
                            n = (0, j.default)(e).call(e, (function(e) {
                                return e.get("uid") === t
                            }));
                        return -1 === n && (n = 0), n
                    },
                    getAiGeneratePageStatus: function() {
                        return ee.get("isAiGeneratingPage")
                    },
                    getCurrentPageType: function() {
                        return ee.get("_currentPageType")
                    },
                    getLastPageScrollTop: function() {
                        return ee.get("_lastPageScrollTop")
                    },
                    isPageExists: function(t) {
                        var e;
                        return (0, O.default)(e = this.getPages()).call(e, (function(e) {
                            return e.get("uid") === t
                        }))
                    },
                    getPageFromUID: function(t) {
                        if ("home" === t) return this.getPages().get("0");
                        if (t === ie) return ee.sub("productPage");
                        if (t === le) return ee.sub("itemPage");
                        if (t === oe) return ee.sub("searchPage");
                        if (t === re) return ee.sub("storePage");
                        if (t === ue) return ee.sub("portfolioCategoriesPage");
                        if (t === se) return ee.sub("blogCategoriesPage");
                        if (t === de) return ee.sub("bookingPage");
                        var e = this.getPages();
                        return (0, L.default)(e).call(e, (function(e) {
                            return e.get("uid") === t
                        }))
                    },
                    getSections: function() {
                        return this.getCurrentPageBinding().get("sections").toJS()
                    },
                    getSectionsByPageUid: function(t) {
                        var e = this.getPageFromUID(t);
                        return null != e && e.get("sections") ? e.get("sections").toJS() : []
                    },
                    getS5Theme: function() {
                        return ee.get("s5Theme")
                    },
                    hasSectionsDataUnderPage: function(t) {
                        if ((0, z.default)(Ht.INDEPENDENT_PAGE).call(Ht.INDEPENDENT_PAGE, t)) return !0;
                        var e = function(t, e) {
                                var n = null,
                                    a = t.get("pages");
                                return a && (0, b.default)(a).call(a, (function(t, a) {
                                    t.get("uid") === e && (n = a)
                                })), n
                            }(ee, t),
                            n = ee.get("pages.".concat(e, ".sections"));
                        return !(0, O.default)(n).call(n, (function(t) {
                            return t.get("components").size <= 1
                        }))
                    },
                    getSectionNames: function() {
                        var t;
                        return (0, S.default)(t = this.getCurrentPageBinding().get("sections")).call(t, (function(t) {
                            return t.get("components").get("slideSettings").get("name")
                        })).toJS()
                    },
                    getAllSectionBindingWithName: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = this.getSectionsBinding();
                        return (0, V.default)(e).call(e, (function(e) {
                            var n;
                            return null === (n = e.get("template_name")) || void 0 === n ? void 0 : (0, J.default)(n).call(n, t)
                        }))
                    },
                    getAllSectionsWithName: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = [];
                        if (this.getIsMultiPage()) {
                            var n = ee.get("pages");
                            (0, b.default)(n).call(n, (function(t) {
                                return e = (0, I.default)(e).call(e, t.get("sections").toJS())
                            }))
                        } else e = this.getSections();
                        return t ? (0, V.default)(e).call(e, (function(e) {
                            var n;
                            return null === (n = e.template_name) || void 0 === n ? void 0 : (0, J.default)(n).call(n, t)
                        })) : e
                    },
                    isHomePage: function(t) {
                        return t === this.getItems().getIn([0, "id"]) || "home" === t || null === t
                    },
                    getHomePageUID: function() {
                        return this.getItems().getIn([0, "id"]) || "home"
                    },
                    getUIdByPathname: function(t) {
                        var e = this.getPages(),
                            n = (this.getItems(), Vt.RegexConstants.ECOMMERCE_STORE_PAGE_PATH),
                            a = Vt.RegexConstants.PORTFOLIO_CATEGORIES_PAGE_PATH,
                            i = Vt.RegexConstants.BLOG_CATEGORIES_PAGE_PATH;
                        if ("/" === t) return this.getHomePageUID();
                        if (t = t.replace(/\/+$/, ""), /^(\/)?([a-zA-Z0-9-]+)?(\/)?store\/products\/\.*/.test(t)) return ie;
                        if (/^(\/)?([a-zA-Z0-9-]+)?(\/)?booking\/events\/\.*/.test(t)) return de;
                        if ("preview" === _t.default.getSiteMode()) {
                            var o, l;
                            if (/^\/s\/sites\/\d+\/search$/.test(t)) return oe;
                            if ((0, z.default)(o = location.search).call(o, "preview_uid=product_page")) return ie;
                            if ((0, z.default)(l = location.search).call(l, "preview_uid=item_page")) return le
                        }
                        if ("show" === _t.default.getSiteMode() && /^\/?search$/.test(t)) return oe;
                        if (/^(\/)?([a-zA-Z0-9-]+)?(\/)?portfolio\/items\/\.*/.test(t)) return le;
                        if (n.test(t)) return re;
                        if (a.test(t)) return ue;
                        if (i.test(t)) return se;
                        var r, u, s = (0, L.default)(e).call(e, (function(e) {
                            return e.get("path") === t
                        }));
                        if (void 0 === s)
                            if ((0, z.default)(r = ["/blog", "/_blog"]).call(r, t)) {
                                var d = dt.default.url(location.href).param("categoryId");
                                d = d || "all", void 0 === (s = (0, L.default)(e).call(e, (function(t) {
                                    var e;
                                    return (0, O.default)(e = t.get("sections")).call(e, (function(t) {
                                        return (0, z.default)(ne).call(ne, t.get("template_name")) && t.getIn(["components", "blog1", "category", "id"], "all").toString() === d
                                    }))
                                }))) && (s = (0, L.default)(e).call(e, (function(t) {
                                    var e;
                                    return (0, O.default)(e = t.get("sections")).call(e, (function(t) {
                                        return (0, z.default)(ne).call(ne, t.get("template_name"))
                                    }))
                                })))
                            } else(0, z.default)(u = ["/store", "/_store"]).call(u, t) && (s = (0, L.default)(e).call(e, (function(t) {
                                var e;
                                return (0, O.default)(e = t.get("sections")).call(e, (function(t) {
                                    return "ecommerce" === t.get("template_name")
                                }))
                            })));
                        return s && s.get("uid")
                    },
                    hasSection: function(t) {
                        var e = this.getSectionsBinding();
                        return "blog" === t ? (0, O.default)(e).call(e, (function(t) {
                            return -1 !== (0, N.default)(ne).call(ne, t.get("template_name"))
                        })) : (0, O.default)(e).call(e, (function(e) {
                            var n;
                            return null === (n = e.get("template_name")) || void 0 === n ? void 0 : (0, J.default)(n).call(n, t)
                        }))
                    },
                    hasSectionInPage: function(t, e) {
                        return (0, O.default)(ut.default).call(ut.default, this.getSectionsByPageUid(e), (function(e) {
                            var n;
                            return null === (n = e.template_name) || void 0 === n ? void 0 : (0, J.default)(n).call(n, t)
                        }))
                    },
                    isHiddenSectionByName: function(t) {
                        var e = Et.default.isSmallScreen(),
                            n = t.hidden_section,
                            a = t.hidden_mobile_section,
                            i = e ? void 0 === a ? n : a : n;
                        return ht.default.getCanUseNewMobileEditorFeature() ? i : n
                    },
                    getIsHiddenSectionByName: function(t) {
                        var e = this,
                            n = this.getAllSectionBindingWithName(t);
                        return (0, X.default)(n).call(n, (function(t) {
                            var n;
                            return e.isHiddenSectionByName(null === (n = t.getIn(["components", "slideSettings"])) || void 0 === n ? void 0 : n.toObject())
                        }))
                    },
                    hasInitialProductPage: function() {
                        return $S.stores.productMeta
                    },
                    pathFirstLevelReserved: function(t) {
                        var e = t;
                        0 === (0, N.default)(t).call(t, "/") && (e = (0, Q.default)(t).call(t, 1, t.length));
                        var n = ht.default.getReservedMultiPagePaths(),
                            a = (0, et.default)(e).call(e).split("/");
                        return Boolean((0, L.default)(n).call(n, (function(t) {
                            return t === a[0]
                        })))
                    },
                    pageSecondLevelReserved: function(t) {
                        var e = ht.default.getReservedMultiPageSecondLevelPaths(),
                            n = (0, et.default)(t).call(t).split("/");
                        return Boolean((0, L.default)(e).call(e, (function(t) {
                            return n[0] === t && 2 === n.length && n[1]
                        })))
                    },
                    pathExists: function(t, e) {
                        return e || (e = ee.get("pages")), Boolean((0, L.default)(e).call(e, (function(e) {
                            return e.get("path") === t
                        })))
                    },
                    generatePath: function(t) {
                        return (void 0)(this.getPage(t).get("title"), t)
                    },
                    getPathBySectionId: function(t, e) {
                        var n = ee.get("pages").toJS();
                        if (this.getIsMultiPage()) {
                            var a, i;
                            if ("preview" === _t.default.getSiteMode()) {
                                for (var o = _t.default.getId(), l = 0, r = (0, F.default)(n); l < r.length; l++) {
                                    var u;
                                    if (i = r[l], -1 !== (a = (0, j.default)(ut.default).call(ut.default, i.sections, (function(e) {
                                            return e.id === t
                                        })))) return (0, I.default)(u = "".concat(Ot.default.PAGE.PREVIEW_MULTIPAGE(o, i.uid), "#")).call(u, null != e ? e : a + 1)
                                }
                                return ""
                            }
                            for (var s = 0, d = (0, F.default)(n); s < d.length; s++) {
                                var c;
                                if (i = d[s], -1 !== (a = (0, j.default)(ut.default).call(ut.default, i.sections, (function(e) {
                                        return e.id === t
                                    })))) return (0, I.default)(c = "".concat(i.path, "#")).call(c, null != e ? e : a + 1)
                            }
                            return ""
                        }
                        return "#".concat(null != e ? e : (0, j.default)(ut.default).call(ut.default, n[0].sections, (function(e) {
                            return e.id === t
                        })) + 1)
                    },
                    getUrlBySection: function(t) {
                        return _t.default.getPublicUrl().replace(/\/$/, "") + this.getPathBySection(t)
                    },
                    getPathBySectionInAiSiteBuilderPreviewBlog: function(t) {
                        var e = ee.get("pages"),
                            n = Jt.default.getAiSiteBuilderIframeUrl(),
                            a = null;
                        if ("ecommerce" === t && (a = "store"), null != t && (0, J.default)(t).call(t, "blog") && (a = "blog"), !this.getIsMultiPage()) {
                            if ("home" === t) return n;
                            var s, d, c = (0, j.default)(s = e.get(0).get("sections")).call(s, (function(e) {
                                return e.get("template_name") === t
                            }));
                            return (0, I.default)(d = "".concat(n, "#")).call(d, null != a ? a : c + 1)
                        }
                        if ("home" === t) return n;
                        var g = function() {
                            var s, d, c = (0, F.default)(e.toJS()),
                                g = function(t, e) {
                                    var n = void 0 !== l && r(t) || t["@@iterator"];
                                    if (!n) {
                                        if (u(t) || (n = function(t, e) {
                                                var n;
                                                if (t) {
                                                    if ("string" == typeof t) return qt(t, e);
                                                    var a = i(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                                                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? o(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? qt(t, e) : void 0
                                                }
                                            }(t)) || e && t && "number" == typeof t.length) {
                                            n && (t = n);
                                            var a = 0,
                                                s = function() {};
                                            return {
                                                s: s,
                                                n: function() {
                                                    return a >= t.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: t[a++]
                                                    }
                                                },
                                                e: function(t) {
                                                    throw t
                                                },
                                                f: s
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var d, c = !0,
                                        g = !1;
                                    return {
                                        s: function() {
                                            n = n.call(t)
                                        },
                                        n: function() {
                                            var t = n.next();
                                            return c = t.done, t
                                        },
                                        e: function(t) {
                                            g = !0, d = t
                                        },
                                        f: function() {
                                            try {
                                                c || null == n.return || n.return()
                                            } finally {
                                                if (g) throw d
                                            }
                                        }
                                    }
                                }(c);
                            try {
                                for (g.s(); !(d = g.n()).done;) {
                                    var f;
                                    s = d.value;
                                    var p = (0, j.default)(c).call(c, (function(t) {
                                        return t.id === s.id
                                    }));
                                    if (-1 !== (0, j.default)(f = s.sections).call(f, (function(e) {
                                            return "blog" === t ? (0, z.default)(ne).call(ne, e.template_name) : e.template_name === t
                                        }))) {
                                        if (0 === p) {
                                            var v, h, m = (0, j.default)(v = e.get(0).get("sections")).call(v, (function(e) {
                                                return e.get("template_name") === t
                                            }));
                                            return {
                                                v: (0, I.default)(h = "".concat(n, "#")).call(h, null != a ? a : m + 1)
                                            }
                                        }
                                        var _;
                                        return {
                                            v: (0, I.default)(_ = "".concat(n, "&uid=")).call(_, s.uid)
                                        }
                                    }
                                }
                            } catch (t) {
                                g.e(t)
                            } finally {
                                g.f()
                            }
                            return {
                                v: n
                            }
                        }();
                        return "object" === (0, m.default)(g) ? g.v : void 0
                    },
                    getPathBySection: function(t) {
                        var e = null;
                        "ecommerce" === t && (e = "store"), null != t && (0, J.default)(t).call(t, "blog") && (e = "blog");
                        var n, a, i = ee.get("pages"),
                            o = ee.get("_currentPageType");
                        if (this.getIsMultiPage()) {
                            var l, r, u = ee.get("navigation.items");
                            if (!u) return "/";
                            var s = u.get(0) && u.get(0).get("id");
                            if ("preview" === _t.default.getSiteMode()) {
                                var d = _t.default.getId();
                                if ("home" === t) return Ot.default.PAGE.PREVIEW_MULTIPAGE(d, s);
                                for (var c = 0, g = (0, F.default)(i.toJS()); c < g.length; c++) {
                                    var f, p;
                                    if (r = g[c], -1 !== (l = (0, j.default)(f = r.sections).call(f, (function(e) {
                                            return "blog" === t ? (0, z.default)(ne).call(ne, e.template_name) : e.template_name === t
                                        })))) return (0, I.default)(p = "".concat(Ot.default.PAGE.PREVIEW_MULTIPAGE(d, r.uid), "#")).call(p, null != e ? e : l + 1)
                                }
                                return "/"
                            }
                            if ("home" === t) return (0, L.default)(i).call(i, (function(t) {
                                return t.get("uid") === s
                            })).get("path");
                            for (var v = 0, h = (0, F.default)(i.toJS()); v < h.length; v++) {
                                var m, _;
                                if (r = h[v], -1 !== (l = (0, j.default)(m = r.sections).call(m, (function(e) {
                                        return "blog" === t ? (0, z.default)(ne).call(ne, e.template_name) : e.template_name === t
                                    })))) return (0, I.default)(_ = "".concat(r.path, "#")).call(_, null != e ? e : l + 1)
                            }
                            return "/"
                        }
                        if ("home" === t) {
                            if (ht.default.getIsBlog()) return _t.default.getPublicUrl();
                            e = "1"
                        }
                        var b = (0, j.default)(n = i.get(0).get("sections")).call(n, (function(e) {
                            return e.get("template_name") === t
                        }));
                        return ((0, z.default)(a = ["productPage", "itemPage", "searchPage", "storePage", "bookingPage", "blogCategoriesPage", "portfolioCategoriesPage"]).call(a, o) ? "/#" : "#") + (null != e ? e : b + 1)
                    },
                    getBlogSectionUrl: function() {
                        if (Boolean(Jt.default.getAiSiteBuilderIframeUrl())) return Jt.default.getAiSiteBuilderIframeUrl();
                        var t, e, n, a, i, o, l = (0, at.default)(ut.default).call(ut.default, _t.default.getPublicUrl(), "/"),
                            r = this.getIsMultiPage() ? "_blog" : "",
                            u = ht.default.getFromSiteToApp();
                        return (t = dt.default.url(location.href).param("categoryId")) ? (0, I.default)(e = (0, I.default)(n = (0, I.default)(a = "".concat(l, "/")).call(a, r, "?")).call(n, u ? "site2app=1" : "", "categoryId=")).call(e, t, "#_blog") : (0, I.default)(i = (0, I.default)(o = "".concat(l, "/")).call(o, r)).call(i, u ? "?site2app=1" : "", "#_blog")
                    },
                    getExternalLinkUrl: function(t, e, n, a) {
                        if ("section" !== t) return e;
                        var i, o = _t.default.getData("id");
                        n = this.isPageExists(n) ? n : this.getHomePageUID();
                        var l = this.getPageFromUID(n),
                            r = (0, j.default)(i = l.get("sections")).call(i, (function(t) {
                                return t.get("id") === a
                            })),
                            u = "#".concat(r >= 1 ? r + 1 : ""),
                            s = this.isHomePage(n);
                        switch (_t.default.getSiteMode()) {
                            case "editor":
                                return Ot.default.PAGE.EDIT_MULTIPAGE(o, n, u);
                            case "preview":
                                return Ot.default.PAGE.PREVIEW_MULTIPAGE(o, n, u);
                            case "show":
                                var d = s ? "/" : l.get("path");
                                return Ot.default.PAGE.SHOW_MULTIPAGE(d, u)
                        }
                    },
                    getSectionIndexById: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "home",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = this.getSectionsByPageUid(t),
                            a = (0, j.default)(n).call(n, (function(t) {
                                return t.id === e
                            }));
                        return Math.max(a + 1, 1)
                    },
                    fillPageIds: function() {
                        var t, e = this;
                        return (0, b.default)(t = this.getBinding().get("pages")).call(t, (function(t, n) {
                            if (!t.get("uid")) return e.getBinding().set("pages.".concat(n, ".uid"), Qt.v4())
                        }))
                    },
                    validatePageData: function() {
                        var t = this.getBinding().get().toJS(),
                            e = t.pages || [],
                            n = "";
                        e.length > (0, jt.uniqBy)((function(t) {
                            return t.uid
                        }))(e).length && (n += "Duplicated page uid  ");
                        for (var a = function(t) {
                                var a = e[t],
                                    i = (0, j.default)(ut.default).call(ut.default, e, (function(t) {
                                        return a.id === t.id
                                    })),
                                    o = (0, j.default)(ut.default).call(ut.default, e, (function(t) {
                                        return a.uid === t.uid
                                    }));
                                i !== t && (n += "Duplicated pageId: ".concat(a.id, ",  "), a.id = "f_".concat(Qt.v4())), o !== t && (n += "Duplicated uId: ".concat(a.uid, ",  "), a.uid = Qt.v4())
                            }, i = e.length - 1; i >= 0; --i) a(i);
                        if (t.multi_pages) {
                            var o = t.navigation,
                                l = o.items;
                            if (l) {
                                var r = (0, V.default)(l).call(l, (function(t) {
                                    return "page" === t.type
                                }));
                                (0, b.default)(r).call(r, (function(t) {
                                    -1 === (0, j.default)(ut.default).call(ut.default, e, (function(e) {
                                        return e.uid === t.id
                                    })) && (l = (0, V.default)(l).call(l, (function(e) {
                                        return e.id !== t.id
                                    })), n += "Navigation uid is not defined ")
                                })), o.items = (0, V.default)(l).call(l, (function(t) {
                                    return t
                                }))
                            }
                        }
                        return n && this.getBinding().set(gt.default.fromJS(t)), t
                    },
                    getNavLayoutsVersionStatus: function() {
                        var t, e, n, a;
                        if (ht.default.getIsBlog()) return (null === (t = $S.blogPostData) || void 0 === t || null === (e = t.pageData) || void 0 === e || null === (n = e.s5Theme) || void 0 === n || null === (a = n.nav) || void 0 === a ? void 0 : a.layoutsVersionStatus) || {};
                        var i = this.getS5Theme().getIn(["nav", "layoutsVersionStatus"]);
                        return gt.default.isImmutable(i) ? i.toJS() : {}
                    },
                    getNavLayout: function() {
                        var t, e, n, a;
                        return ht.default.getIsBlog() ? null === (t = $S.blogPostData) || void 0 === t || null === (e = t.pageData) || void 0 === e || null === (n = e.s5Theme) || void 0 === n || null === (a = n.nav) || void 0 === a ? void 0 : a.layout : this.getS5Theme().getIn(["nav", "layout"])
                    },
                    getCategorySettings: function(t) {
                        var e, n = null === (e = ee) || void 0 === e ? void 0 : e.get("categorySettings");
                        return t ? null == n ? void 0 : n.get(t) : n
                    },
                    init: function(t) {
                        return te = new xt.default(t), ee = te.binding
                    }
                });
            pe.dispatchToken = Gt.default.register((function(t) {
                switch (t.actionType) {
                    case Rt.default.ActionTypes.SWITCH_PAGE:
                        ! function(t, e) {
                            var n = ee.get("_selectedPageUID"),
                                a = ee.atomically();
                            if (t === ie) a.set("_currentPageType", "productPage"), a.set("_lastPageUID", n);
                            else if (t === oe) a.set("_currentPageType", "searchPage");
                            else if (t === le) a.set("_currentPageType", "itemPage"), a.set("_lastPageUID", n);
                            else if (t === re) a.set("_currentPageType", "storePage"), a.set("_lastPageUID", n);
                            else if (t === ue) a.set("_currentPageType", "portfolioCategoriesPage"), a.set("_lastPageUID", n);
                            else if (t === se) a.set("_currentPageType", "blogCategoriesPage"), a.set("_lastPageUID", n);
                            else if (t === de) a.set("_currentPageType", "bookingPage"), a.set("_lastPageUID", n);
                            else {
                                a.set("_currentPageType", "sitePage"), t = pe.isPageExists(t) ? t : pe.getHomePageUID();
                                var i = pe.getSectionIndexById(t, void 0);
                                a.set("_initialSectionIndex", i)
                            }
                            a.set("_selectedPageUID", t), a.commit()
                        }(t.uid), t.firstTime && (r = t.uid, (u = ee.atomically()).set("_initPageUID", r), u.commit());
                        break;
                    case Rt.default.ActionTypes.UPDATE_PAGE_DATA:
                        ! function(t) {
                            var e = ee.atomically(),
                                n = ut.default.set(t, ["s5Theme", "nav", "itemSpacing"], "compact");
                            e.set(gt.default.fromJS(n)).commit()
                        }(t.newPageData);
                        break;
                    case Rt.default.ActionTypes.SET_SECTIONS_BY_PAGE:
                        ! function(t, e) {
                            var n = ee.atomically(),
                                a = ee.get("pages"),
                                i = a.toArray(),
                                o = a;
                            (0, b.default)(i).call(i, (function(n, a) {
                                if (n.get("uid") === t) {
                                    var i = o.get(a);
                                    o = o.set(a, i.merge({
                                        sections: e
                                    }))
                                }
                            })), n.set("pages", o).commit()
                        }(t.uid, t.sectionsData);
                        break;
                    case Rt.default.ActionTypes.SET_PRODUCT_PAGE_BINDING:
                        l = t.productBinding, gt.default.isImmutable(l) ? ee.set("productPage", l) : ee.set("productPage", l.get());
                        break;
                    case Rt.default.ActionTypes.SET_LAST_PAGE_SCROLL_TOP:
                        o = t.scrollTop, ee.set("_lastPageScrollTop", o);
                        break;
                    case Rt.default.ActionTypes.SET_PAGE_TYPE:
                        i = t.type, ee.set("_currentPageType", i);
                        break;
                    case Rt.default.ActionTypes.SET_PAGE_UID:
                        ! function(t) {
                            ee.set("_selectedPageUID", t)
                        }(t.uid);
                        break;
                    case Rt.default.ActionTypes.UPDATE_GENERATING_PAGE_STATUS:
                        a = t.status, ee.set("isAiGeneratingPage", a);
                        break;
                    case Rt.default.ActionTypes.INIT_THEME_PRE_COLORS:
                        var e = ee.get("customColors");
                        null != e && e.size && function(t, e) {
                            var n;
                            if (t || e) {
                                var a = (0, I.default)(n = function(t, e) {
                                    if (t || e) {
                                        var n, a, i, o = t ? (0, T.default)(n = fe(t, "highlight1")).call(n) : [],
                                            l = e ? (0, T.default)(a = fe(e, "highlight2")).call(a) : [];
                                        return (0, S.default)(i = (0, I.default)(o).call(o, l)).call(i, (function(t) {
                                            return t.value
                                        }))
                                    }
                                    return []
                                }(t || e, e || t)).call(n, Wt.COLOR_PLATE_DEFAULT_COLORS);
                                a.length && (a = (0, S.default)(a).call(a, (function(t, e) {
                                    return {
                                        key: e,
                                        value: t
                                    }
                                })), ee.set("customColors.themePreColors", gt.default.fromJS(a)))
                            } else {
                                var i;
                                if (null === (i = ee.get("customColors.themePreColors")) || void 0 === i || !i.size) {
                                    var o, l, r = (0, I.default)(o = (0, ot.default)(l = new Array(Yt.TEXT_PRE_COLOR_COUNT.TWO_THEME_COLOR)).call(l, "#ffffff")).call(o, Wt.COLOR_PLATE_DEFAULT_COLORS);
                                    r = (0, S.default)(r).call(r, (function(t, e) {
                                        return {
                                            key: e,
                                            value: t
                                        }
                                    })), ee.set("customColors.themePreColors", gt.default.fromJS(r))
                                }
                            }
                        }(null == e ? void 0 : e.get("highlight1"), null == e ? void 0 : e.get("highlight2"));
                        break;
                    case Rt.default.ActionTypes.INIT_COLOR_SETTINGS:
                        n = "s5Theme", (0, b.default)(Yt.COLOR_SETTINGS_FIELDS).call(Yt.COLOR_SETTINGS_FIELDS, (function(t) {
                            var e = t.settingsKey,
                                a = t.colorKey,
                                i = ee.get("".concat(n, ".").concat(e));
                            if (null == i || !i.size) {
                                var o, l, r = a.split(".")[1],
                                    u = ee.get("customColors.highlight1"),
                                    s = ee.get("customColors.highlight2");
                                l = Yt.COLOR_SETTINGS_DEFAULT_VALUE[e] ? Yt.COLOR_SETTINGS_DEFAULT_VALUE[e](u, s, ee) : (0, z.default)(Yt.HAS_DEFAULT_TEXT_COLORS).call(Yt.HAS_DEFAULT_TEXT_COLORS, r) ? Yt.TEXT_DEFAULT_COLORS[r] : u || s || "#000000";
                                var d = ee.get("".concat(n, ".").concat(a)),
                                    c = Yt.TEXT_COLOR_TYPE.DEFAULT,
                                    g = null;
                                if (d && (null == d ? void 0 : d.toLocaleLowerCase()) !== (null === (o = l) || void 0 === o ? void 0 : o.toLocaleLowerCase())) {
                                    var f = ee.get("customColors.themePreColors"),
                                        p = null == f ? void 0 : (0, L.default)(f).call(f, (function(t) {
                                            var e, n;
                                            return gt.default.isImmutable(t) ? (null == t || null === (n = t.get("value")) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === (null == d ? void 0 : d.toLocaleLowerCase()) : (null == t || null === (e = t.value) || void 0 === e ? void 0 : e.toLocaleLowerCase()) === (null == d ? void 0 : d.toLocaleLowerCase())
                                        }));
                                    null != p && p.size ? (c = Yt.TEXT_COLOR_TYPE.PRE_COLOR, g = null == p ? void 0 : p.get("key")) : c = Yt.TEXT_COLOR_TYPE.CUSTOM
                                } else c = Yt.TEXT_COLOR_TYPE.DEFAULT;
                                ee.set("".concat(n, ".").concat(e), gt.default.Map({
                                    preIndex: g,
                                    type: c,
                                    default: l
                                }))
                            }
                        }))
                }
                var n, a, i, o, l, r, u
            })), window.DEBUG || (window.DEBUG = {}), window.DEBUG.PageDataStore = pe, e.default = pe, t.exports = e.default
        },
        548273: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o, l, r = n(694473),
                u = (0, i.default)(r),
                s = n(778914),
                d = (0, i.default)(s),
                c = n(620116),
                g = ((0, i.default)(c), n(496486)),
                f = (0, i.default)(g),
                p = n(717187),
                v = n(143393),
                h = n(684961),
                m = (0, i.default)(h),
                _ = n(14991),
                b = (0, i.default)(_),
                C = {},
                S = {
                    allTranslated: !1
                },
                E = f.default.assign({}, p.EventEmitter.prototype, {
                    getDefault: function(t) {
                        return {
                            _open: !1,
                            _highlight: !1,
                            _category: "suggested",
                            sections: {},
                            aiThemes: {},
                            aiRegenerateSections: {},
                            aiSectionsBuilder: {}
                        }
                    },
                    init: function(t) {
                        o = new b.default(t), l = o.binding;
                        var e = {};
                        for (var n in C) e[n] = C[n].content;
                        return l.set("sections", (0, v.fromJS)(e)), o.binding
                    },
                    getBinding: function() {
                        return l
                    },
                    setSelectorData: function(t) {
                        if (C = t, (0, m.default)("globalConf.rollout.portfolio_section") || delete C.portfolio, l) {
                            var e = {};
                            for (var n in t) e[n] = t[n].content;
                            l.set("sections", (0, v.fromJS)(e))
                        }
                    },
                    getSelectorData: function() {
                        return C
                    },
                    getSectionDataBySectionName: function(t) {
                        var e;
                        return S.allTranslated || S[t] || this.translateContentBySectionName(t), (0, u.default)(e = f.default.toArray(C)).call(e, (function(e) {
                            return e.content.template_name === t
                        }))
                    },
                    getSectionDataByKeyValue: function(t, e, n) {
                        var a;
                        return S.allTranslated || S[t] || this.translateContentBySectionName(t), (0, u.default)(a = f.default.toArray(C)).call(a, (function(a) {
                            var i = a;
                            return (0, d.default)(e).call(e, (function(t) {
                                i = i[t] || {}
                            })), i === n && a.content.template_name === t
                        }))
                    },
                    translateContentBySectionName: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        try {
                            if (t) {
                                var e = C[t];
                                e.content, S[t] = !0
                            } else {
                                for (var n in C) {
                                    var a = C[n];
                                    a.content
                                }
                                S.allTranslated = !0
                            }
                        } catch (t) {
                            console.log(t)
                        }
                    }
                }, {});
            window.DEBUG || (window.DEBUG = {}), window.DEBUG.SectionSelectorStore = E, e.default = E, t.exports = e.default
        },
        8689: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            }), n(974916), n(864765), n(241539), n(339714);
            var o = n(439969),
                l = (0, i.default)(o),
                r = n(977766),
                u = (0, i.default)(r),
                s = n(51942),
                d = (0, i.default)(s),
                c = n(981643),
                g = (0, i.default)(c),
                f = n(836808),
                p = (0, i.default)(f),
                v = n(183123),
                h = (0, i.default)(v),
                m = n(918596),
                _ = n(267385),
                b = n(792681),
                C = /blog/g,
                S = ["en", "ja", "zh-TW", "fr"],
                E = {
                    getFooterLogoSeoData: function() {
                        var t = $S.stores && $S.stores.showStatic.footerLogoSeoData || {},
                            e = t.anchor_link;
                        return e && C.test(window.location.href) && (e = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = new l.default(t),
                                n = e.searchParams;
                            return n.set("ref", "blogpbs"), e.search = n.toString(), e.toString()
                        }(e)), e && h.default.getPbsI18n() && (e = function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = new l.default(e),
                                a = n.searchParams,
                                i = p.default.get("_pbs_i18n_ab_test");
                            return (0, b.matchPbsI18nLocaleWithBrowserLocale)() ? a.set("utm_term", "i18n_pbs_true") : a.set("utm_term", "i18n_pbs_false"), n.search = a.toString(), (0, u.default)(t = "".concat(n.toString(), "&_pbs_i18n_ab_test=")).call(t, i)
                        }(e)), (0, d.default)({}, t, {
                            anchor_link: e
                        })
                    },
                    getPhraseWithBrowserLocale: function(t) {
                        var e = (0, _.getBrowserLocale)();
                        return (0, g.default)(S).call(S, e) > -1 ? m.FOOTER_LOGO_PHRASES[t][e] : m.FOOTER_LOGO_PHRASES[t].en
                    },
                    isEditMode: function() {
                        return null == (null != $S.stores ? $S.stores.showStatic.isEditMode : void 0) || (null != $S.stores ? $S.stores.showStatic.isEditMode : void 0)
                    }
                };
            e.default = E, t.exports = e.default
        },
        843296: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o, l = n(432366),
                r = (0, i.default)(l),
                u = n(678580),
                s = (0, i.default)(u),
                d = n(666419),
                c = (0, i.default)(d),
                g = n(2991),
                f = ((0, i.default)(g), n(496486)),
                p = (0, i.default)(f),
                v = n(14637),
                h = (0, i.default)(v),
                m = n(548273),
                _ = ((0, i.default)(m), n(549556)),
                b = ((0, i.default)(_), {
                    selections: function() {
                        return o || (o = (0, r.default)(p.default).call(p.default, $S.stores.themes, (function(t, e) {
                            return t[e.internal] = e, t
                        }), {}))
                    },
                    getSelection: function(t) {
                        return this.selections()[t]
                    },
                    get: function(t) {
                        return this.store()[t] || console.error("Theme not registered: [".concat(t, "]"))
                    },
                    build: function(t) {
                        return new h.default(t)
                    },
                    register: function(t) {
                        return this.store()[t.internal] = t, this.store()[t.internal]
                    },
                    buildAndRegister: function(t) {
                        var e = this.build(t);
                        return this.register(e), e
                    },
                    isRegistered: function(t) {
                        var e;
                        return (0, s.default)(e = (0, c.default)(this.store())).call(e, t)
                    },
                    store: function() {
                        return this.__store || (this.__store = {})
                    }
                });
            window.DEBUG || (window.DEBUG = {}), window.DEBUG.ThemeStore = b, e.default = b, t.exports = e.default
        },
        815549: function(t, e, n) {
            var a;
            n(663978)(e, "__esModule", {
                value: !0
            });
            var i = n(229134);
            a = n(11767)(i)(), e.default = a, t.exports = e.default
        },
        953198: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(54103),
                l = (0, i.default)(o),
                r = n(176965),
                u = (0, i.default)(r),
                s = n(143393),
                d = (0, i.default)(s),
                c = n(496486),
                g = (0, i.default)(c),
                f = n(8689),
                p = (0, i.default)(f),
                v = {},
                h = {};
            v.Mixin = {
                boundIndexMemoizer: function(t) {
                    var e = [];
                    return function(n) {
                        var a = e[n];
                        return void 0 === a && (a = (0, l.default)(t).call(t, h, n), e[n] = a), a
                    }
                },
                componentDidMount: function() {},
                getData: function(t) {
                    return this._getBinding().get(t)
                },
                isEditMode: function() {
                    return p.default.isEditMode()
                },
                nativeUpdateData: function(t) {
                    return this.updateData(t)
                },
                setData: function(t, e) {
                    if (!t) throw new Error("key should be provided");
                    return this._getBinding().set(t, d.default.fromJS(e))
                },
                updateData: function(t, e) {
                    if (!g.default.isUndefined(e)) throw new Error("updateData with key is deprecated");
                    this._getBinding().merge(d.default.fromJS(t))
                },
                _getBinding: function() {
                    return this.getDefaultBinding()
                },
                getMergeStrategy: function() {
                    return u.default.MergeStrategy.MERGE_PRESERVE
                },
                isState: function(t) {
                    return t === this._getBinding().get("_state")
                },
                updateState: function(t) {
                    return this.setData("_state", t)
                },
                savePage: function(t) {
                    return null
                },
                onClickEditor: function() {
                    return this.isState("normal") && this.updateState("editor"), "function" == typeof this.afterClickEditor ? this.afterClickEditor() : void 0
                },
                onClickCancel: function() {
                    return ("function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().onClickCancel : void 0) ? this.constructor.sharedProps().onClickCancel() : this.updateState("normal")
                },
                toggleEditor: function() {
                    return this.isState("editor") ? this.updateState("normal") : (this.updateState("editor"), "function" == typeof this.afterClickEditor && this.afterClickEditor(), null != window.DEBUG ? window.DEBUG.activeComponent = this : void 0)
                }
            }, h = v, e.default = h, t.exports = e.default
        },
        237161: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(729828),
                l = (0, i.default)(o),
                r = n(678580),
                u = (0, i.default)(r),
                s = n(686902),
                d = (0, i.default)(s),
                c = n(977766),
                g = (0, i.default)(c),
                f = n(51942),
                p = (0, i.default)(f),
                v = n(176965),
                h = (0, i.default)(v),
                m = n(143393),
                _ = (0, i.default)(m),
                b = n(496486),
                C = (0, i.default)(b),
                S = n(8689),
                E = (0, i.default)(S),
                T = n(79752),
                y = (0, i.default)(T),
                I = n(443198),
                w = ((0, i.default)(I), n(182410)),
                x = (0, i.default)(w),
                P = {},
                N = {
                    componentWillReceiveProps: function(t) {
                        var e = this.props.layout;
                        this.dtProps = t, this.dsProps = t, this.iProps = t, this.cbProps = t, null != t.layout && t.layout !== e && this.forceUpdate()
                    },
                    componentWillMount: function() {
                        this.dtProps = this.props, this.dsProps = this.props, this.iProps = this.props, this.cbProps = this.props
                    },
                    getData: function(t) {
                        var e = this._getBinding();
                        return null == e ? void 0 : e.get(t)
                    },
                    componentDidMount: function() {
                        "editor" === this.props._state && "function" == typeof this.startEditContent && this.startEditContent()
                    },
                    componentWillUpdate: function(t) {
                        var e = this.props.layout;
                        null != e && t.layout !== e && "function" == typeof this.beforeLayoutChange && this.beforeLayoutChange()
                    },
                    componentDidUpdate: function(t) {
                        var e = this.props.layout;
                        null != e && t.layout !== e && "function" == typeof this.afterLayoutChange && this.afterLayoutChange(), this.trackEditBehavior(this.props, t)
                    },
                    isEditMode: function() {
                        return E.default.isEditMode()
                    },
                    isAdminMode: function() {
                        var t = this.props.isAdmin;
                        return void 0 !== t ? t : n(914990).isAdmin()
                    },
                    setData: function(t, e) {
                        if (!t) throw new Error("key should be provided");
                        if (C.default.isUndefined(this._getBinding().get())) console.error("attempt to update a non-existing binding");
                        else {
                            var n = this._getBinding();
                            (0, l.default)(C.default).call(C.default, t, "_") || n.set("defaultValue", !1), n.set(t, _.default.fromJS(e))
                        }
                    },
                    updateData: function(t, e) {
                        if (!C.default.isUndefined(e)) throw new Error("updateData with key is deprecated");
                        if (C.default.isUndefined(this._getBinding().get())) throw new Error("attempt to update a non-existing binding");
                        var n = this._getBinding(),
                            a = {
                                actionType: "UPDATE_DATA",
                                data: t,
                                componentType: this.constructor.displayName
                            };
                        x.default.pushAction("BasePageComponent", a), n.merge(_.default.fromJS(C.default.merge(t, {
                            defaultValue: !1
                        })))
                    },
                    _checkKey: function(t) {
                        var e, n;
                        if (!this.constructor.dataProps) throw new Error("bobcatPropTypes.data is undefined for ".concat(this.constructor.displayName));
                        if ("_" !== t.charAt(0) && !(0, u.default)(e = (0, d.default)(this.constructor.dataProps)).call(e, t)) throw new Error((0, g.default)(n = "key '".concat(t, "' past to updateData which isn't defined in bobcatPropTypes.data for ")).call(n, this.constructor.displayName))
                    },
                    _checkData: function(t) {
                        for (var e in t) this._checkKey(e)
                    },
                    _getBinding: function() {
                        return this.getDefaultBinding()
                    },
                    getMergeStrategy: function() {
                        return h.default.MergeStrategy.MERGE_PRESERVE
                    },
                    isState: function(t) {
                        return t === this.props._state
                    },
                    updateState: function(t) {
                        return null
                    },
                    savePage: function(t) {
                        return null
                    },
                    trackEditBehavior: function(t, e) {},
                    setBehaviorData: function(t, e) {
                        var n = this.props,
                            a = n.editStateHook,
                            i = n.targetId;
                        "editor" === t && "editor" !== e ? a && "function" == typeof a && a("focus", i) : "editor" !== t && "editor" === e && a && "function" == typeof a && a("defocus", i)
                    },
                    _storeCancelValue: function() {
                        this._storedCancelValue = this._getBinding().toJS()
                    },
                    _restoreCancelValue: function() {
                        this._storedCancelValue && (this.updateData(y.default.deleteMeta(this._storedCancelValue)), this._storedCancelValue = null)
                    },
                    onClickEditor: function(t) {
                        return null
                    },
                    onToggleMobileViewEditorBox: function(t) {
                        if ("function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().onToggleEditor : void 0) return this.constructor.sharedProps().onToggleEditor.apply(null, [this, t])
                    },
                    onClickCancel: function() {
                        return null
                    },
                    toggleEditor: function() {
                        return null
                    },
                    addIframeEditingClass: function() {
                        return this.isIframeEditing() ? " s-mobile-view-editing-box" : ""
                    },
                    isIframeEditing: function() {
                        return !1
                    }
                };
            P.Mixin = (0, p.default)({}, N, {
                nativeUpdateData: function(t) {
                    this.updateData(t)
                }
            }), e.default = P, t.exports = e.default
        },
        399069: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(432366),
                l = (0, i.default)(o),
                r = n(169301),
                u = (0, i.default)(r),
                s = n(54103),
                d = (0, i.default)(s),
                c = n(977766),
                g = (0, i.default)(c),
                f = n(678580),
                p = (0, i.default)(f),
                v = n(972555),
                h = (0, i.default)(v),
                m = n(45697),
                _ = (0, i.default)(m),
                b = n(176965),
                C = (0, i.default)(b),
                S = n(496486),
                E = (0, i.default)(S),
                T = n(498481),
                y = (0, i.default)(T),
                I = n(953198),
                w = (0, i.default)(I),
                x = n(936501),
                P = (0, i.default)(x),
                N = n(269393),
                k = (0, i.default)(N),
                A = n(237161),
                B = (0, i.default)(A),
                L = n(205223),
                D = ((0, i.default)(L), n(387937)),
                O = (0, i.default)(D),
                M = n(836034),
                R = (0, i.default)(M),
                U = n(83124),
                Z = ((0, i.default)(U), {}),
                G = {
                    _staticBuildBobcatProps: function(t) {
                        return function(e) {
                            var n, a = e.get().toObject();
                            return (0, l.default)(n = (0, u.default)(E.default).call(E.default, E.default.extend({}, t.internal, t.data))).call(n, (function(t, n) {
                                var a = e.get(n);
                                return E.default.isNull(a) && (a = void 0), t[n] = a, t
                            }), a), a.binding = {
                                default: e
                            }, a
                        }
                    },
                    _getDefaultProps: function(t) {
                        return t.internal || (t.internal = {}), t.internal._state = "normal", E.default.extend({}, t.designer, t.internal, t.data, t.callbacks)
                    },
                    _propTypes: function(t) {
                        return t.internal || (t.internal = {}), t.internal._state = _.default.oneOf(["normal", "editor"]).isRequired, E.default.extend({
                            type: _.default.string,
                            id: _.default.string,
                            layout: _.default.string,
                            sectionModel: _.default.object,
                            _cName: _.default.string,
                            defaultValue: _.default.oneOfType([_.default.string, _.default.bool, _.default.object])
                        }, t.designer, t.internal, t.data, t.callbacks)
                    },
                    createPageComponent: function(t) {
                        var e;
                        t.getDefaultState && console.error("Setting getDefaultState is not allowed, use bobcatPropTypes and getBobcatDefaultProps"), t.getDefaultProps && console.error("Setting getDefaultProps directly is not allowed. Please use getBobcatDefaultProps"), t.propTypes && console.error("Setting propTypes directly is not allowed. Please use bobcatPropTypes"), null == t.displayName && console.warn("displayName is not defined");
                        var n, a, i = t.bobcatPropTypes,
                            o = t.getBobcatDefaultProps;
                        return i || console.warn("bobcatPropTypes is undefined for ".concat(t.displayName)), t.getDefaultProps = o ? (0, d.default)(n = this._getDefaultProps).call(n, null, o()) : (0, d.default)(a = this._getDefaultProps).call(a, null, {}), i && (t.propTypes = this._propTypes(i), t.statics || (t.statics = {}), t.statics.dataProps = i.data, t.statics.designerProps = i.designer, t.statics.internalProps = i.internal, t.statics.buildBobcatProps = this._staticBuildBobcatProps(i)), t.mixins = E.default.compact((0, g.default)(e = [B.default.Mixin, P.default, C.default.Mixin, k.default]).call(e, t.mixins)), (0, h.default)(t)
                    },
                    create: function(t) {
                        var e;
                        if (t.getDefaultState) throw new Error("Setting getDefaultState directly is not allowed. Please use bobcatDefaultState");
                        var n = t.getBobcatDefaultState;
                        n && (t.getDefaultState = n), t.mixins = E.default.compact((0, g.default)(e = [w.default.Mixin, P.default, C.default.Mixin, k.default]).call(e, t.mixins));
                        var a = (0, h.default)(t);
                        return t.reduxUI && (a = (0, y.default)(t.reduxUI)(a)), t.mapStateToProps && (a = (0, O.default)(a, t.mapStateToProps)), a
                    },
                    createSection: function(t) {
                        return (t = E.default.extend({}, t)).mixins || (t.mixins = []), (0, p.default)(E.default).call(E.default, t.mixins, R.default) || t.mixins.push(R.default), this.create(t)
                    },
                    get: function(t) {
                        return Z[t] || null
                    },
                    register: function(t, e) {
                        return Z[t] = e, this
                    },
                    registerSection: function(t, e) {
                        return this.register("_SECTION_".concat(t), e)
                    },
                    getSection: function(t) {
                        return this.get("_SECTION_".concat(t))
                    }
                };
            e.default = G, t.exports = e.default
        },
        792656: function(t, e, n) {
            var a = n(223765),
                i = n(752424),
                o = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            o(e, "__esModule", {
                value: !0
            }), n(974916), n(115306), n(569600), n(209653);
            var u = n(981643),
                s = (0, r.default)(u),
                d = n(694473),
                c = (0, r.default)(d),
                g = n(497093),
                f = (0, r.default)(g),
                p = n(2991),
                v = (0, r.default)(p),
                h = n(359340),
                m = (0, r.default)(h),
                _ = n(678580),
                b = (0, r.default)(_),
                C = n(977766),
                S = (0, r.default)(C),
                E = n(223336),
                T = (0, r.default)(E),
                y = n(496486),
                I = (0, r.default)(y),
                w = n(143393),
                x = (0, r.default)(w),
                P = G(n(143268)),
                N = G(n(144726)),
                k = n(43138),
                A = (0, r.default)(k),
                B = n(818166),
                L = (0, r.default)(B),
                D = n(234584),
                O = (0, r.default)(D),
                M = n(384887),
                R = (0, r.default)(M),
                U = n(668279);

            function Z(t) {
                if ("function" != typeof i) return null;
                var e = new i,
                    n = new i;
                return (Z = function(t) {
                    return t ? n : e
                })(t)
            }

            function G(t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || "object" !== a(t) && "function" != typeof t) return {
                    default: t
                };
                var n = Z(e);
                if (n && n.has(t)) return n.get(t);
                var i = {},
                    r = o && l;
                for (var u in t)
                    if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                        var s = r ? l(t, u) : null;
                        s && (s.get || s.set) ? o(i, u, s) : i[u] = t[u]
                    }
                return i.default = t, n && n.set(t, i), i
            }
            var F = "#ffffff",
                H = "#000000",
                V = "highlight1",
                W = "highlight2",
                z = function(t) {
                    var e;
                    switch (t) {
                        case "cover":
                        case "stretch":
                            e = "cover";
                            break;
                        case "contain":
                            e = "contain";
                            break;
                        case "tile":
                        case "center":
                            e = "unset";
                            break;
                        default:
                            e = "cover"
                    }
                    return {
                        backgroundRepeat: "tile" === t ? "repeat" : "no-repeat",
                        backgroundSize: e
                    }
                },
                $ = {
                    getBgClassName: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return (null != t ? t.userClassName : void 0) || e
                    },
                    getTextColorClassName: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (!t) return "";
                        var n = N.createImage(t).getUrl("background");
                        if (!P.imageHasContent(n)) return e;
                        switch (t.textColor) {
                            case "light":
                            case "overlay":
                                return "s-bg-light-text";
                            case "dark":
                                return "s-bg-dark-text";
                            default:
                                return ""
                        }
                    },
                    getBgColorClassName: function(t) {
                        if (!t) return "";
                        var e = this.getBackgroundColorTextClass(t);
                        return e ? "s-bg-".concat("dark" === e ? "white" : "dark") : ""
                    },
                    convertV3Style: function(t) {
                        var e, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        switch (t.selectedClassName && !t.textColor && (-1 !== (0, s.default)(e = t.selectedClassName).call(e, "strikingly-dark-text") ? t.textColor = "dark" : -1 !== (0, s.default)(n = t.selectedClassName).call(n, "strikingly-text-overlay") ? t.textColor = "overlay" : t.textColor = "light"), t.textColor) {
                            case "light":
                                a.push("s-bg-light-text");
                                break;
                            case "dark":
                                a.push("s-bg-dark-text");
                                break;
                            case "overlay":
                                a.push("s-bg-light-text"), a.push("s-bg-overlay")
                        }
                        return a
                    },
                    getContentProps: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                size: "background",
                                eagerLoad: !1,
                                shouldInheritThemeColor: !1
                            },
                            n = [],
                            a = N.createImage(t),
                            i = a.getUrlWithoutFocus(e.size);
                        A.default.isMobile() && (i = i.replace(".mp4", ".jpg"));
                        var o = {};
                        if (t.backgroundColor) {
                            var l = this.getBackgroundColorString(t.backgroundColor, e.shouldInheritThemeColor);
                            l && (o = {
                                backgroundColor: l
                            })
                        }
                        if (P.imageHasContent(i)) {
                            t.videoHtml && !A.default.isMobile() ? n.push("s-bg-video video-bg s-bg-blurred") : n.push("s-bg-image s-bg-blurred"), n = this.convertV3Style(t, n);
                            var r = I.default.extend(z(t.sizing || t.style), {
                                backgroundColor: "transparent",
                                backgroundPosition: "50% 50%"
                            }, o);
                            return e.eagerLoad && (r = I.default.assign(r, {
                                backgroundImage: "url(".concat(i, ")")
                            })), t.videoHtml && (r.backgroundSize = "cover", r.backgroundRepeat = "no-repeat"), {
                                image: a,
                                className: n.join(" "),
                                eagerLoad: e.eagerLoad,
                                style: r,
                                videoHtml: t.videoHtml,
                                videoUrl: t.videoUrl,
                                dataSrc: i,
                                textColor: t.textColor,
                                linkUrl: null != t ? t.linkUrl : void 0,
                                linkTarget: null != t ? t.linkTarget : void 0
                            }
                        }
                        n.push("s-no-bg"), n.push(e.userClassName);
                        var u = this.getBackgroundColorTextClass(t.backgroundColor);
                        return !O.default.getEnableTextColorFix() && u && n.push("s-bg-".concat(u, "-text")), O.default.getEnableTextColorFix() && n.push("new-text-color-logic"), I.default.assign({
                            image: a,
                            className: n.join(" "),
                            bgClassNames: e.bgClassNames,
                            userClassName: e.userClassName,
                            textColor: t.textColor,
                            style: o
                        })
                    },
                    getSectionBackgroundByIndex: function(t, e) {
                        return e.length ? (n = t, a = e.length, e[t = ((n = Number(n)) % (a = Number(a)) + a) % a]) : "";
                        var n, a
                    },
                    hasBgImageOrVideo: function(t) {
                        return !!t.hasClass("s-slider-section") || !t.hasClass("s-no-bg") && "none" !== t.css("backgroundImage")
                    },
                    collapsePaddingAdjacentSection: function(t) {
                        var e = this;
                        n(786483).isBackgroundPreviewOn || (t.each((function(n, a) {
                            var i = (0, T.default)(a);
                            i.addClass("transition");
                            var o = !e.hasBgImageOrVideo(i);
                            if (o && e.setThumbnailColor(i), 0 !== n) {
                                var l = (0, T.default)(t.eq(n - 1));
                                !o || e.hasBgImageOrVideo(l) || i.is(".s-slider-section, .s-grid-section._wide") || l.is(".s-slider-section, .s-grid-section._wide") || "0px" !== l.css("border-bottom-width") || i.css("backgroundColor") !== l.css("backgroundColor") ? l.removeClass("collapse-bottom-padding") : l.addClass("collapse-bottom-padding")
                            }
                        })), window.edit_page.Event.publish("Section.updateBottomSpace"))
                    },
                    setThumbnailColor: function(t) {
                        var e = t.css("background-color");
                        (0, c.default)(t).call(t, ".s-component.s-background .s-current-bg-thumbnail").css("background-color", e)
                    },
                    hasContent: function(t) {
                        return "string" != typeof t && (t = t.get("url")), P.imageHasContent(t)
                    },
                    getNavTextColor: function(t) {
                        if (!t) return "dark";
                        var e = t.get("url"),
                            n = t.get("userClassName"),
                            a = t.get("textColor");
                        if (n) return {
                            "s-bg-white": "dark",
                            "s-bg-gray": "dark",
                            "s-bg-dark": "light"
                        }[n];
                        var i = "dark" === a;
                        if (I.default.isEmpty(e)) {
                            var o = t.get("backgroundColor");
                            return this.getBackgroundColorTextClass(o) || "dark"
                        }
                        return i ? "dark" : "light"
                    },
                    getThemeColorItems: function() {
                        var t = L.default.getCustomColors() || {},
                            e = t.highlight1,
                            n = t.highlight2,
                            a = e || n || "#fff",
                            i = new R.default(a),
                            o = R.default.getDiffLightnessColors(i.toHsl()) || [];
                        return (0, f.default)(o).call(o)
                    },
                    getTransparentFixedBackgroundColor: function(t, e) {
                        if (!t || t.size <= 0) return "";
                        var n = t.get("textColor");
                        if ("overlay" !== n || e && "overlay" === n) return "";
                        var a = (L.default.getCustomColors() || {}).highlight2,
                            i = a;
                        return a || (i = this.getThemeColorItems()[4]), i
                    },
                    getThemeColors: function(t, e) {
                        if (!t) return [];
                        var n = new R.default(t),
                            a = (0, M.getDiffLightnessColors)(n.toHsl());
                        return (0, v.default)(a).call(a, (function(t, n) {
                            return {
                                value: t,
                                index: n,
                                type: e
                            }
                        }))
                    },
                    getPresetColorByThemeColor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        if (t === V || t === W) {
                            var n, a = L.default.getCustomColors() || {},
                                i = a.lastClearHl1,
                                o = a.lastClearHl2,
                                l = a.highlight1,
                                r = a.highlight2;
                            l || r || (l = i, r = o);
                            var u = "";
                            t === V ? u = l || r : t === W && (u = r || l);
                            var s = $.getThemeColors(u, t);
                            return null === (n = s[e]) || void 0 === n ? void 0 : n.value
                        }
                        return ""
                    },
                    getBackgroundColorString: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!t || 0 === t.size || "{}" === (0, m.default)(t)) return "";
                        var n = t.value,
                            a = t.type,
                            i = t.themeColorRangeIndex;
                        x.default.isImmutable(t) && (n = t.get("value"), a = t.get("type"), i = t.get("themeColorRangeIndex"));
                        var o = O.default.getEnableButtonBackgroundColorFix();
                        if (null !== i && (!o || o && !n)) {
                            var l = L.default.getCustomColors(),
                                r = l[a];
                            if (!r) return "#fff";
                            var u = new R.default(r),
                                s = (0, M.getDiffLightnessColors)(u.toHsl());
                            return s[i]
                        }
                        return e && (n = $.getPresetColorByThemeColor(a, i) || n), n
                    },
                    getBackgroundColorTextClass: function(t) {
                        if (!t || 0 === t.size || "{}" === (0, m.default)(t)) return "";
                        var e = this.getBackgroundColorString(t);
                        return e ? new R.default(e).getTextClass() : ""
                    },
                    getColorInfoBySection: function(t) {
                        var e, n, a = t.buttonColor,
                            i = t.sectionName,
                            o = t.backgroundColor,
                            l = t.firstSectionBackground,
                            r = t.showFixedNav,
                            u = t.imageData,
                            s = void 0 === u ? {} : u,
                            d = t.layoutConfig,
                            c = t.s6TemplateName,
                            g = t.shouldInheritThemeColor,
                            f = void 0 !== g && g,
                            p = !1,
                            v = !1,
                            h = O.default.getIsS5Theme() ? a : (null === (e = L.default.getCustomColors()) || void 0 === e ? void 0 : e.highlight1) || H,
                            m = (null == i ? void 0 : (0, b.default)(i).call(i, "featureList")) || (null == i ? void 0 : (0, b.default)(i).call(i, "columns")) || (0, b.default)(U.FeatureListTemplates).call(U.FeatureListTemplates, c);
                        if (m) {
                            var _ = (null == o ? void 0 : o.value) || (null == o ? void 0 : o.get("value")) || F;
                            n = _, null != d && d.get("card") && (n = (null == d ? void 0 : d.get("card_color")) || $.getDefaultColor(_))
                        } else if ("navbar" === i) {
                            var C, S;
                            !r && null !== (C = L.default.sub("s5Theme.nav.isTransparent")) && void 0 !== C && C.get() ? (n = (null == l ? void 0 : l.getIn(["backgroundColor", "value"])) || F, p = !0) : n = (null === (S = L.default.sub("s5Theme.nav.backgroundColor1")) || void 0 === S ? void 0 : S.get()) || F
                        } else if (n = (null == o ? void 0 : o.value) || (null == o ? void 0 : o.get("value")) || F, f) {
                            var E = x.default.isImmutable(o) ? o.get("type") : null == o ? void 0 : o.type,
                                T = x.default.isImmutable(o) ? o.get("themeColorRangeIndex") : null == o ? void 0 : o.themeColorRangeIndex;
                            n = $.getPresetColorByThemeColor(E, T) || n
                        }
                        return v = p ? (null == l ? void 0 : l.get("useImage")) || (null == l ? void 0 : l.get("videoHtml")) || (null == l ? void 0 : l.get("videoHtml")) || (null == l ? void 0 : l.get("videoUrl")) || (null == l ? void 0 : l.get("storageKey")) || P.imageHasContent(null == l ? void 0 : l.get("url")) : s.useImage || s.videoHtml || s.videoUrl || s.storageKey || P.imageHasContent(s.backgroundUrl), m && null != d && d.get("card") && (v = !1), {
                            sectionBackgroundColor: n,
                            isImageOrVedio: Boolean(v),
                            buttonColor: h
                        }
                    },
                    getColorFix: function(t) {
                        var e, n = t.buttonStyle,
                            a = t.isImageOrVedio,
                            i = t.buttonColor,
                            o = t.sectionName,
                            l = t.sectionBackgroundColor,
                            r = t.textColor,
                            u = t.isUseDefault,
                            s = void 0 !== u && u,
                            d = i;
                        if ("ghost" === n)
                            if (O.default.getEnableTextColorFix()) {
                                var c;
                                s && new R.default(l).isDarkColor() && (d = "#ffffff"), s && (d = new R.default(d).showOnBg(l).toHex()), e = (0, S.default)(c = "\n        color: ".concat(s && a ? "inherit" : d, ";\n        border: 2px solid ")).call(c, s && a ? "" : d, ";\n        background: transparent;\n        padding: 14px 28px;\n      ")
                            } else {
                                var g, f, p = a || (0, b.default)(g = ["new_grid", "cta", "title", "new_title"]).call(g, o) && !a;
                                s && (d = new R.default(d).showOnBg(l).toHex()), e = (0, S.default)(f = "\n        color: ".concat(p ? "inherit" : d, ";\n        border: 2px solid ")).call(f, p ? "" : d, ";\n        background: transparent;\n        padding: 14px 28px;\n      ")
                            }
                        if ("solid" === n) {
                            var v, h, m, _ = "none";
                            if (a) {
                                var C = new R.default(d).luma() > R.default.maxDarkLuma;
                                _ = "1px solid ".concat(C ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)", ";")
                            } else {
                                var E = new R.default(r).luma() > R.default.maxDarkLuma;
                                s && (d = new R.default(d || (E ? H : F)).showOnBg(l, .5).toHex())
                            }
                            e = (0, S.default)(v = (0, S.default)(h = (0, S.default)(m = "\n        color: ".concat(r, ";\n        background: ")).call(m, d, ";\n        border: ")).call(h, _, ";\n        background-clip: ")).call(v, a ? "padding-box" : "border-box", ";\n      ")
                        }
                        return e
                    },
                    getDefaultColor: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = L.default.getCustomColors() || {},
                            a = n.lastClearHl1,
                            i = n.lastClearHl2,
                            o = n.highlight1,
                            l = n.highlight2;
                        o || l || (o = a, l = i);
                        var r = new R.default(o || l || "#FFFFFF"),
                            u = R.default.getDiffLightnessColors(r.toHsl());
                        return e + 1 < u.length && u[0] === t ? u[e + 1] : (null == u ? void 0 : u.shift()) || null
                    },
                    getColorInfoByBgData: function(t) {
                        var e, n, a, i, o, l, r, u, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                shouldInheritThemeColor: !1
                            },
                            d = !1;
                        x.default.isImmutable(t) ? (e = null == t ? void 0 : t.getIn(["backgroundColor", "value"]), n = null == t ? void 0 : t.getIn(["backgroundColor", "type"]), a = null == t ? void 0 : t.getIn(["backgroundColor", "themeColorRangeIndex"]), d = (null == t ? void 0 : t.get("useImage")) || (null == t ? void 0 : t.get("videoHtml")) || (null == t ? void 0 : t.get("videoHtml")) || (null == t ? void 0 : t.get("videoUrl")) || (null == t ? void 0 : t.get("storageKey")) || P.imageHasContent(null == t ? void 0 : t.get("url"))) : (I.default.isString(t) ? e = t : (e = (null == t || null === (i = t.backgroundColor) || void 0 === i ? void 0 : i.value) || (null == t || null === (o = t.style) || void 0 === o ? void 0 : o.backgroundColor) || (null == t || null === (l = t.backgroundColor) || void 0 === l ? void 0 : l.get("value")), n = null == t || null === (r = t.backgroundColor) || void 0 === r ? void 0 : r.type, a = null == t || null === (u = t.backgroundColor) || void 0 === u ? void 0 : u.themeColorRangeIndex), d = (null == t ? void 0 : t.useImage) || (null == t ? void 0 : t.videoHtml) || (null == t ? void 0 : t.videoHtml) || (null == t ? void 0 : t.videoUrl) || (null == t ? void 0 : t.storageKey) || P.imageHasContent((null == t ? void 0 : t.backgroundUrl) || (null == t ? void 0 : t.url) || (null == t ? void 0 : t.dataSrc)));
                        return s.shouldInheritThemeColor && n && a && (e = $.getPresetColorByThemeColor(n, a) || e), {
                            bgColor: e || F,
                            isImageOrVedio: Boolean(d)
                        }
                    },
                    getTextColorSettingsByBgColor: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = e || L.default.getTextColorSettings(),
                            a = new R.default(t).isDarkColor();
                        return I.default.mapValues(n, (function(e) {
                            return a ? "#ffffff" : new R.default(e).showOnBg(t).toHex()
                        }))
                    }
                };
            e.default = $, t.exports = e.default
        },
        387937: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(205872),
                l = (0, i.default)(o),
                r = n(780122),
                u = (0, i.default)(r),
                s = ["__uid", "__store"];
            e.default = function(t, e, n) {
                var a, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    o = function(e) {
                        e.__uid, e.__store;
                        var n = (0, u.default)(e, s);
                        return h.default.createElement(t, n)
                    };
                o.displayName = "connectToMorearty_RemoveUid(".concat(t.displayName, ")");
                var r = (0, g.connect)((function(t, n) {
                    return e(n.__store.moreartyRootBinding.get(), n)
                }), n)(o);
                r.displayName = (0, c.default)(a = "connectToMorearty".concat(i, "(")).call(a, t.displayName, ")");
                var d = function(t, e) {
                    return h.default.createElement(r, (0, l.default)({}, t, {
                        __uid: p.default.uniqueId(),
                        __store: e.store
                    }))
                };
                return d.contextTypes = {
                    store: _.default.object
                }, d
            };
            var d = n(977766),
                c = (0, i.default)(d),
                g = n(50533),
                f = n(496486),
                p = (0, i.default)(f),
                v = n(366757),
                h = (0, i.default)(v),
                m = n(45697),
                _ = (0, i.default)(m);
            t.exports = e.default
        },
        205223: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            }), e.default = function(t, e, n) {
                return (0, l.default)(t, (function() {
                    var t;
                    return t = "function" == typeof e ? e() : e, n(t)
                }), void 0, "Bindings")
            };
            var o = n(387937),
                l = (0, i.default)(o),
                r = n(496486);
            (0, i.default)(r), t.exports = e.default
        },
        43138: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(394198),
                l = (0, i.default)(o),
                r = n(31238),
                u = (0, i.default)(r),
                s = n(703649),
                d = (0, i.default)(s),
                c = n(981643),
                g = (0, i.default)(c),
                f = n(678580),
                p = (0, i.default)(f),
                v = n(277149),
                h = (0, i.default)(v);
            n(974916), n(804723), n(324603), n(339714), n(323123), n(115306);
            var m = n(223336),
                _ = (0, i.default)(m),
                b = function() {
                    var t = !1;
                    return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(android)/i)), t
                },
                C = function() {
                    if (b()) {
                        var t = "undefined" != typeof navigator && null !== navigator ? navigator.userAgent : void 0;
                        return (0, u.default)((0, d.default)(t).call(t, (0, g.default)(t).call(t, "Android") + 8))
                    }
                },
                S = {
                    isSafariV2: function() {
                        var t, e, n;
                        return !(0, p.default)(t = navigator.userAgent).call(t, "CriOS") && !(!(0, p.default)(e = navigator.userAgent).call(e, "Safari") || !(0, p.default)(n = navigator.userAgent).call(n, "Version"))
                    },
                    isMobile: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(windows phone)|(iemobile)/i) || navigator.userAgent.match(/(Macintosh)/i) && navigator.maxTouchPoints > 0), t
                    },
                    isMobileWithoutIpad: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)|(windows phone)|(iemobile)/i) || navigator.userAgent.match(/(Macintosh)/i) && navigator.maxTouchPoints > 0), t
                    },
                    isAndroid: b,
                    isWindowsPhone: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(windows phone)|(iemobile)/i)), t
                    },
                    isIpad: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(iPad)/i) || navigator.userAgent.match(/(Macintosh)/i) && navigator.maxTouchPoints > 0), t
                    },
                    isIOS: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i)), t
                    },
                    isSmallScreen: function() {
                        var t = (0, _.default)("#s-content").hasClass("side-menu-opened") ? 947 : 727;
                        return (window.innerWidth || (0, _.default)(window).width()) <= t || (0, _.default)(window).height() < 400
                    },
                    isSmallerThanDesktop: function() {
                        var t = (0, _.default)("#s-content").hasClass("side-menu-opened") ? 1147 : 927;
                        return (window.innerWidth || (0, _.default)(window).width()) <= t || (0, _.default)(window).height() < 400
                    },
                    isPhoneScreen: function() {
                        return screen.width <= 760
                    },
                    isMobileScreen: function() {
                        return screen.width <= 479
                    },
                    isSmallMobileScreen: function() {
                        return screen.width <= 400
                    },
                    isAndroid2x: function() {
                        return b() && C() < 3
                    },
                    androidVersion: C,
                    iOSversion: function() {
                        if (/iP(hone|od|ad)/.test(navigator.platform)) {
                            var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            return [(0, l.default)(t[1], 10), (0, l.default)(t[2], 10), (0, l.default)(t[3] || 0, 10)][0]
                        }
                    },
                    isIE11: function() {
                        return "Netscape" === window.navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(null != window.navigator ? window.navigator.userAgent : void 0)
                    },
                    isEdge: function() {
                        return "undefined" != typeof window && /edge/i.test(null != window.navigator ? window.navigator.userAgent : void 0)
                    },
                    isGoogle: function() {
                        return !!window.navigator && (/google/i.test(window.navigator.vendor) || /chrome/i.test(window.navigator.userAgent) || /CriOS/i.test(window.navigator.userAgent))
                    },
                    isSafari: function() {
                        return !!window.navigator && (/apple/i.test(window.navigator.vendor) || /safari/i.test(window.navigator.userAgent))
                    },
                    isSafariBrowser: function() {
                        var t;
                        return !(null === (t = window) || void 0 === t || !t.navigator) && /apple/i.test(window.navigator.vendor) && /safari/i.test(window.navigator.userAgent) && !/crios|fxios|chrome|edgios|edg/i.test(window.navigator.userAgent)
                    },
                    isIE: function() {
                        var t;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.toLowerCase()), -1 !== (0, g.default)(t).call(t, "msie") && (0, l.default)(t.split("msie")[1])
                    },
                    isFirefox: function() {
                        var t;
                        return "undefined" != typeof navigator && (0, p.default)(t = navigator.userAgent.toLowerCase()).call(t, "firefox")
                    },
                    isWechat: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/micromessenger/i)), t
                    },
                    isTouchDevice: function() {
                        try {
                            return document.createEvent("TouchEvent"), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    isWindows: function() {
                        return "undefined" != typeof navigator && /windows|win32/i.test(navigator.userAgent)
                    },
                    isSamsungBrowser: function() {
                        var t = !1;
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/SamsungBrowser/i)), Boolean(t)
                    },
                    getIOSVernsion: function() {
                        var t = "";
                        return "undefined" != typeof navigator && null !== navigator && navigator.userAgent && (t = navigator.userAgent.match(/OS (\d+_\d+(_\d+)?)/)[1].replace(/_/g, ".")), t
                    },
                    isIphonex: function() {
                        var t = [{
                            devicePixelRatio: 2,
                            width: 414,
                            height: 896
                        }];
                        if ("undefined" != typeof window && window) {
                            if (!/iphone/gi.test(window.navigator.userAgent)) return !1;
                            var e = window,
                                n = e.devicePixelRatio,
                                a = e.screen,
                                i = a.width,
                                o = a.height;
                            return (0, h.default)(t).call(t, (function(t) {
                                return t.devicePixelRatio === n && t.width === i && t.height === o
                            }))
                        }
                        return !1
                    }
                };
            window.DEBUG || (window.DEBUG = {}), window.DEBUG.DeviceHelper = S, e.default = S, t.exports = e.default
        },
        157444: function(t, e, n) {
            var a = n(353147),
                i = n(663978),
                o = n(60530)(n(60530));
            i(e, "__esModule", {
                value: !0
            });
            var l = n(977766),
                r = (0, o.default)(l);
            n(974916), n(115306), n(209653), n(556977);
            var u = {
                escapedValue: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = /<script\b[^>]*>([\s\S]*?)<\/script>/gim,
                        n = /<\/script>/gim;
                    return t && (t = t.replace(e, "").replace(n, "")), t
                },
                safeEncodeURL: function(t) {
                    try {
                        return encodeURI(t)
                    } catch (t) {
                        return console.error(t), ""
                    }
                },
                safeDecodeURL: function(t) {
                    try {
                        return decodeURI(t)
                    } catch (e) {
                        return console.error(e), t
                    }
                },
                applyWordBreaks: function(t) {
                    t = t.replace(/<wbr\s?\/?>/g, "");
                    for (var e = !1, n = 0; n < t.length; n++) {
                        var a = t[n];
                        if ("<" === a) e = !0;
                        else if (">" === a) e = !1;
                        else if (!e && "@" === a) {
                            var i;
                            t = (0, r.default)(i = "".concat(t.substr(0, n), "@<wbr>")).call(i, t.substr(n + 1, t.length))
                        }
                    }
                    return t
                },
                handleSpace: function(t) {
                    var e = (t = t.replace(/\u200B/g, "")).replace(/(<p[^>]*>(<\/?[^>]*>)*\s)\s+(.*?<\/p>)/g, "$1&emsp; &emsp;$3");
                    return e !== t && (e = t.replace(/(<p[^>]*>(<\/?[^>]*>)*)\s{2,}(.*?<\/p>)/g, "$1&emsp; &emsp;$3")), e
                },
                isGDPRHtmlValid: function(t) {
                    return /^[^<>]*(<\s*a\s*href=[''""]([^''""<>]*)[''""][^<>=''""`]*>([^<>]+)<\s*\/\s*a\s*>[^<>]*)*[^<>]*$/.test(t)
                },
                getDefaultGDPRHtml: function() {
                    return a('By continuing, you agree to our <a href="/?open=terms-and-conditions">Terms &amp; Conditions</a> and <a href="/?open=privacy-policy">Privacy Policy</a>.')
                },
                changeZoom: function() {
                    var t, e, n, a, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            initialScale: Number,
                            userScalable: Boolean,
                            minimumScale: Number,
                            maximumScale: Number,
                            width: String
                        },
                        o = i.width,
                        l = void 0 === o ? "device-width" : o,
                        u = i.initialScale,
                        s = void 0 === u ? 1 : u,
                        d = i.userScalable,
                        c = void 0 === d || d,
                        g = i.minimumScale,
                        f = void 0 === g ? 1 : g,
                        p = i.maximumScale,
                        v = void 0 === p ? 3 : p;
                    document.getElementById("viewport").setAttribute("content", (0, r.default)(t = (0, r.default)(e = (0, r.default)(n = (0, r.default)(a = "width=".concat(l, ",initial-scale=")).call(a, s.toFixed(1), ",user-scalable=")).call(n, c ? "yes" : "no", ",minimum-scale=")).call(e, f.toFixed(1), ",maximum-scale=")).call(t, v.toFixed(1)))
                }
            };
            e.default = u, t.exports = e.default
        },
        384887: function(t, e, n) {
            var a = n(501068),
                i = n(663978),
                o = n(60530)(n(60530));
            i(e, "__esModule", {
                value: !0
            });
            var l = n(726394),
                r = (0, o.default)(l),
                u = n(569198),
                s = (0, o.default)(u),
                d = n(231474),
                c = (0, o.default)(d),
                g = n(351379),
                f = (0, o.default)(g),
                p = n(900214),
                v = (0, o.default)(p),
                h = n(566380),
                m = (0, o.default)(h),
                _ = n(926941);
            var b = function(t) {
                (0, f.default)(o, t);
                var e, n, i = (e = o, n = function() {
                    if ("undefined" == typeof Reflect || !a) return !1;
                    if (a.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(a(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, i = (0, m.default)(e);
                    if (n) {
                        var o = (0, m.default)(this).constructor;
                        t = a(i, arguments, o)
                    } else t = i.apply(this, arguments);
                    return (0, v.default)(this, t)
                });

                function o() {
                    return (0, r.default)(this, o), i.apply(this, arguments)
                }
                return (0, s.default)(o, [{
                    key: "isDarkColor",
                    value: function() {
                        var t, e, n, a, i, l = (null === (t = $S) || void 0 === t || null === (e = t.stores) || void 0 === e ? void 0 : e.pageMeta) || (null === (n = $S) || void 0 === n || null === (a = n.blogPostData) || void 0 === a ? void 0 : a.pageMeta);
                        return (null == l ? void 0 : l.enable_new_luma_version) || (null == l ? void 0 : l.enableNewLumaVersion) || null !== (i = $S) && void 0 !== i && i.mini_program_app_type ? (0, c.default)((0, m.default)(o.prototype), "isDarkColor", this).call(this) : (0, c.default)((0, m.default)(o.prototype), "isDarkColorDiscard", this).call(this)
                    }
                }, {
                    key: "luma",
                    value: function() {
                        var t, e, n, a, i, l = (null === (t = $S) || void 0 === t || null === (e = t.stores) || void 0 === e ? void 0 : e.pageMeta) || (null === (n = $S) || void 0 === n || null === (a = n.blogPostData) || void 0 === a ? void 0 : a.pageMeta);
                        return (null == l ? void 0 : l.enable_new_luma_version) || (null == l ? void 0 : l.enableNewLumaVersion) || null !== (i = $S) && void 0 !== i && i.mini_program_app_type ? (0, c.default)((0, m.default)(o.prototype), "luma", this).call(this) : (0, c.default)((0, m.default)(o.prototype), "lumaSimple", this).call(this)
                    }
                }, {
                    key: "showOnBg",
                    value: function(t) {
                        var e, n, a, i, l, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.5,
                            u = (null === (e = $S) || void 0 === e || null === (n = e.stores) || void 0 === n ? void 0 : n.pageMeta) || (null === (a = $S) || void 0 === a || null === (i = a.blogPostData) || void 0 === i ? void 0 : i.pageMeta),
                            s = (null == u ? void 0 : u.enable_fixed_text_color_remaining) || (null == u ? void 0 : u.enableFixedTextColorRemaining);
                        return s || null != u && u.enable_fixed_text_color || null !== (l = $S) && void 0 !== l && l.mini_program_app_type ? (0, c.default)((0, m.default)(o.prototype), "showOnBgVersion3", this).call(this, t, r) : null != u && u.enable_fixed_button_color ? (0, c.default)((0, m.default)(o.prototype), "showOnBgVersion2", this).call(this, t) : (0, c.default)((0, m.default)(o.prototype), "showOnBg", this).call(this, t)
                    }
                }]), o
            }((0, o.default)(_).default);
            e.default = b, t.exports = e.default
        },
        79752: function(t, e, n) {
            var a = n(353147),
                i = n(223765),
                o = n(752424),
                l = n(663978),
                r = n(834074),
                u = n(60530)(n(60530));
            l(e, "__esModule", {
                value: !0
            });
            var s = n(729828),
                d = (0, u.default)(s),
                c = n(492762),
                g = (0, u.default)(c),
                f = n(778914),
                p = (0, u.default)(f),
                v = n(977766),
                h = (0, u.default)(v),
                m = n(496486),
                _ = (0, u.default)(m),
                b = n(577499),
                C = (0, u.default)(b),
                S = n(468811),
                E = (0, u.default)(S),
                T = n(143393),
                y = (0, u.default)(T),
                I = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== i(t) && "function" != typeof t) return {
                        default: t
                    };
                    var n = w(e);
                    if (n && n.has(t)) return n.get(t);
                    var a = {},
                        o = l && r;
                    for (var u in t)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                            var s = o ? r(t, u) : null;
                            s && (s.get || s.set) ? l(a, u, s) : a[u] = t[u]
                        }
                    return a.default = t, n && n.set(t, a), a
                }(n(861704));

            function w(t) {
                if ("function" != typeof o) return null;
                var e = new o,
                    n = new o;
                return (w = function(t) {
                    return t ? n : e
                })(t)
            }
            var x = {};
            x = {
                addMetaId: I.addMetaId,
                replaceMetaId: I.replaceMetaId,
                deleteMeta: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return C.default.traverseObj(t, (function(t) {
                        for (var n in t) t[n], (0, d.default)(_.default).call(_.default, n, "_") && delete t[n], e && delete t.id
                    })), t
                },
                addRepeatItem: function(t) {
                    var e = t.binding,
                        n = e.get(),
                        a = null != t.position ? t.position : n.size;
                    return n = (0, g.default)(n).call(n, a, 0, y.default.fromJS(t.noId ? t.newItem : x.addMetaId(t.newItem))), e.set(n), n
                },
                deleteRepeatItem: function(t) {
                    var e = t.binding,
                        n = e.get(),
                        a = null != t.index ? t.index : n.size - 1,
                        i = e.get(a);
                    return e.set((0, g.default)(n).call(n, a, 1)), i
                },
                reorderRepeatable: function(t, e) {
                    _.default.remove(t, (function(t) {
                        return "" === t
                    }));
                    var n = e.atomically();
                    return (0, p.default)(t).call(t, (function(t, a) {
                        return n.set(a, e.get(t))
                    })), n.commit()
                },
                reorderRepeatableWithSplice: function(t, e) {
                    var n;
                    if (this.reorderRepeatable(t, e), t.length < e.get().size) return e.set((0, g.default)(n = e.get()).call(n, t.length))
                },
                concatRepeatItem: function(t, e) {
                    var n, a = e.atomically();
                    return a.set((0, h.default)(n = e.get()).call(n, t)), a.commit()
                },
                convertProviderName: function(t) {
                    return {
                        tencent_api: a("Editor|TencentYun"),
                        aliyun_api: a("Editor|Aliyun")
                    }[t] || ""
                },
                addSectionColumn: function(t) {
                    return y.default.fromJS({
                        name: "columnBlock",
                        type: "BlockComponentItem",
                        components: {
                            block1: {
                                type: "BlockComponent",
                                items: [t],
                                id: E.default.v4()
                            }
                        },
                        id: E.default.v4()
                    })
                },
                addSectionRow: function(t) {
                    return y.default.fromJS({
                        name: "rowBlock",
                        type: "BlockComponentItem",
                        components: {
                            block1: {
                                type: "BlockComponent",
                                inlineLayout: "12",
                                items: [this.addSectionColumn(t)],
                                id: E.default.v4()
                            }
                        },
                        id: E.default.v4()
                    })
                }
            }, e.default = x, t.exports = e.default
        },
        577499: function(t, e, n) {
            var a = n(223765),
                i = n(752424),
                o = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            o(e, "__esModule", {
                value: !0
            });
            var u = n(931581),
                s = (0, r.default)(u),
                d = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== a(t) && "function" != typeof t) return {
                        default: t
                    };
                    var n = c(e);
                    if (n && n.has(t)) return n.get(t);
                    var i = {},
                        r = o && l;
                    for (var u in t)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                            var s = r ? l(t, u) : null;
                            s && (s.get || s.set) ? o(i, u, s) : i[u] = t[u]
                        }
                    return i.default = t, n && n.set(t, i), i
                }(n(175892));

            function c(t) {
                if ("function" != typeof i) return null;
                var e = new i,
                    n = new i;
                return (c = function(t) {
                    return t ? n : e
                })(t)
            }
            e.default = {
                waitFor: function(t, e, n) {
                    var a;
                    return n = n || 100, a = (0, s.default)((function() {
                        if (t()) return window.clearInterval(a), e()
                    }), n)
                },
                isBlank: function(t) {
                    return null == t || 0 === t.length
                },
                traverseObj: d.traverseObj
            }, t.exports = e.default
        },
        936501: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(439392),
                l = (0, i.default)(o),
                r = n(410062),
                u = (0, i.default)(r),
                s = n(432366),
                d = (0, i.default)(s),
                c = n(977766),
                g = (0, i.default)(c),
                f = n(54103),
                p = (0, i.default)(f),
                v = n(496486),
                h = (0, i.default)(v);
            e.default = {
                boundParamsMemoizer: function(t, e) {
                    var n = new l.default;
                    return function() {
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        if ((0, u.default)(h.default).call(h.default, i, (function(t) {
                                return h.default.isObject(t)
                            }))) throw new TypeError("boundParamsMemoizer cannot take only objects as parameters. Use simple parameters like string or number.");
                        var l, r = (0, d.default)(i).call(i, (function(t, e) {
                                var n;
                                return (0, g.default)(n = "".concat(t, "_")).call(n, e)
                            }), ""),
                            s = n.get(r);
                        return void 0 === s && (s = (0, p.default)(Function.prototype).apply(t, (0, g.default)(l = [e]).call(l, i)), n.set(r, s)), s
                    }
                }
            }, t.exports = e.default
        },
        83124: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(977766),
                l = (0, i.default)(o),
                r = n(496486),
                u = (0, i.default)(r),
                s = {
                    componentWillMount: function() {
                        this.validateProps(this.props)
                    },
                    componentWillReceiveProps: function(t) {
                        this.validateProps(t)
                    },
                    validateProps: function(t) {
                        var e = this.constructor,
                            n = e.displayName,
                            a = e.propTypes;
                        if (u.default.isUndefined(a)) console.warn('Component "'.concat(n, "\" doesn't have propType set."));
                        else
                            for (var i in t) {
                                var o;
                                a[i] || console.warn((0, l.default)(o = 'You set a property "'.concat(i, '" on Component "')).call(o, n, '" but did not provide a PropType declaration for this prop.'))
                            }
                    }
                };
            e.default = s, t.exports = e.default
        },
        269393: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(359340),
                l = (0, i.default)(o),
                r = n(432366),
                u = (0, i.default)(r),
                s = n(496486),
                d = (0, i.default)(s);
            e.default = {
                printAllData: function() {
                    var t = {};
                    return this.props.dataProps && (t = this.props.dataProps.toJS()), (0, l.default)(t, null, 2)
                },
                printAllBindings: function() {
                    if (!this.getBinding) return print({});
                    var t, e = this.getBinding();
                    return t = d.default.isPlainObject(e) ? (0, u.default)(d.default).call(d.default, this.getBinding(), (function(t, e, n) {
                        return t[n] = e.toJS(), t
                    }), {}) : e.toJS(), (0, l.default)(t, null, 2)
                }
            }, t.exports = e.default
        },
        230139: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            }), n(974916), n(115306);
            var o = n(143393),
                l = (0, i.default)(o),
                r = n(496486),
                u = (0, i.default)(r);
            e.default = function(t) {
                return {
                    _b: void 0,
                    setMeta: function(t, e) {
                        if (!t) throw new Error("key should be provided");
                        this.getMetaBinding().set(t, l.default.fromJS(e))
                    },
                    updateMeta: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this.getMetaBinding();
                        u.default.isUndefined(n.get()) && console.warn("attempt to update a non-existing binding"), e ? n.set(e, l.default.fromJS(t)) : n.merge(l.default.fromJS(t))
                    },
                    getMeta: function(t) {
                        return this.getMetaBinding().get(t)
                    },
                    getMetaBinding: function() {
                        if (this._b) return this._b;
                        var e = this.getDefaultBinding().meta();
                        return t && (e = e.sub(t)), this._b || (this._b = e)
                    },
                    initMeta: function(t) {
                        var e = this;
                        this._b = void 0;
                        var n = this.getMetaBinding();
                        for (var a in n.atomically().set(l.default.fromJS(t)).commit({
                                notify: !1
                            }), t) {
                            var i = a.replace(/^(\w)/, (function(t) {
                                return t.toUpperCase()
                            }));
                            this["_get".concat(i)] = function(t) {
                                return function() {
                                    return e.getMeta(t)
                                }
                            }(a), this["_set".concat(i)] = function(t) {
                                return function(n) {
                                    e.updateMeta(n, t), "currentTab" === t && e.forceUpdate()
                                }
                            }(a)
                        }
                    }
                }
            }, t.exports = e.default
        },
        636969: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            }), e.getLogs = e.resetChangeLogs = e.markStructChange = e.compareAndMark = e.initRecorderData = e.deleteExpiredData = e.updatePreviousData = void 0;
            var o, l = n(79752),
                r = (0, i.default)(l),
                u = n(496486),
                s = (0, i.default)(u),
                d = {
                    timestamp: 0,
                    data: null
                },
                c = !1,
                g = {},
                f = function() {
                    o = {}, p("modified_pages_indexes", []), p("struct_changed", !1)
                },
                p = function(t, e) {
                    o[t] = e
                },
                v = (e.updatePreviousData = function(t) {
                    var e = g[t];
                    t > d.timestamp && (d.timestamp = t, d.data = e)
                }, e.deleteExpiredData = function(t) {
                    delete g[t]
                }, e.initRecorderData = function(t) {
                    c || (f(), d.data = t, d.timestamp = (new Date).valueOf(), c = !0)
                }, e.compareAndMark = function(t) {
                    var e = (new Date).valueOf();
                    if (function(t, e) {
                            g[t] = e
                        }(e, t), !d.data) return v(), e;
                    var n, a = d.data.get("pages"),
                        i = t.get("pages"),
                        l = a.size,
                        u = i.size;
                    if (l != u) return v(), e;
                    for (var c = 0; c < u; c++) {
                        var f = r.default.deleteMeta(i.get(c).toJS()),
                            p = r.default.deleteMeta(a.get(c).toJS());
                        if (!s.default.isEqual(f, p)) {
                            if (f.uid !== p.uid) {
                                v();
                                break
                            }
                            n = c, o.modified_pages_indexes.push(n)
                        }
                    }
                    return s.default.isEqual(o, {
                        modified_pages_indexes: [],
                        struct_changed: !1
                    }) && v(), e
                }, e.markStructChange = function() {
                    p("struct_changed", !0)
                });
            e.resetChangeLogs = function() {
                f()
            }, e.getLogs = function() {
                return o
            }
        },
        836034: function(t, e, n) {
            var a = n(686902),
                i = n(14310),
                o = n(620116),
                l = n(834074),
                r = n(778914),
                u = n(239649),
                s = n(820368),
                d = n(663978),
                c = n(60530)(n(60530));
            d(e, "__esModule", {
                value: !0
            });
            var g = n(487672),
                f = (0, c.default)(g);
            n(569600), n(974916), n(323123);
            var p = n(2991),
                v = (0, c.default)(p),
                h = n(666419),
                m = (0, c.default)(h),
                _ = n(977766),
                b = (0, c.default)(_),
                C = n(277149),
                S = (0, c.default)(C),
                E = n(432366),
                T = (0, c.default)(E),
                y = n(981643),
                I = (0, c.default)(y),
                w = n(51942),
                x = (0, c.default)(w),
                P = n(25843),
                N = (0, c.default)(P),
                k = n(620116),
                A = (0, c.default)(k),
                B = n(410062),
                L = (0, c.default)(B),
                D = n(678580),
                O = (0, c.default)(D),
                M = n(366757),
                R = ((0, c.default)(M), n(45697)),
                U = (0, c.default)(R),
                Z = n(973935),
                G = (0, c.default)(Z),
                F = n(143393),
                H = (0, c.default)(F),
                V = n(496486),
                W = (0, c.default)(V),
                z = n(8689),
                $ = (0, c.default)(z),
                j = n(548273),
                K = (0, c.default)(j),
                J = n(786483),
                Y = (0, c.default)(J),
                X = n(792656),
                q = (0, c.default)(X),
                Q = n(183123),
                tt = (0, c.default)(Q),
                et = n(628568),
                nt = n(884920);

            function at(t, e) {
                var n = a(t);
                if (i) {
                    var r = i(t);
                    e && (r = o(r).call(r, (function(e) {
                        return l(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function it(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n, a = null != arguments[e] ? arguments[e] : {};
                    if (e % 2) r(n = at(Object(a), !0)).call(n, (function(e) {
                        (0, f.default)(t, e, a[e])
                    }));
                    else if (u) s(t, u(a));
                    else {
                        var i;
                        r(i = at(Object(a))).call(i, (function(e) {
                            d(t, e, l(a, e))
                        }))
                    }
                }
                return t
            }
            var ot = W.default.debounce((function(t) {
                    return Y.default.Event.publish("Section.changed", {
                        target: "function" == typeof(null == t ? void 0 : t.isMounted) && t.isMounted() ? G.default.findDOMNode(t) : null
                    })
                }), 500),
                lt = {
                    propTypes: {
                        binding: U.default.object.isRequired
                    },
                    contextTypes: {
                        theme: U.default.object
                    },
                    componentDidUpdate: function(t) {
                        var e = this;
                        ot(this);
                        var n = this.getMoreartyContext(),
                            a = this.getDefaultBinding().sub("components"),
                            i = function(t) {
                                if (n.isChanged(t) && "normal" === t.get()) return Y.default.Event.publish("Section.componentSaved", {
                                    target: G.default.findDOMNode(e)
                                }), !0
                            },
                            o = a.toJS(),
                            l = function(t) {
                                var l = o[t];
                                if ("SlideSettings" === l.type) {
                                    var r = a.sub("".concat(t, ".layout_variation"));
                                    if (n.isChanged(r)) return Y.default.Event.publish("Section.componentSaved", {
                                        target: G.default.findDOMNode(e)
                                    }), "break"
                                } else if ("Repeatable" === l.type) {
                                    var u;
                                    (0, v.default)(u = (0, m.default)(l.list)).call(u, (function(e, n) {
                                        for (var o in e.components) {
                                            e.components[o];
                                            var l, r, u = a.sub((0, b.default)(l = (0, b.default)(r = "".concat(t, ".list.")).call(r, n, ".components.")).call(l, o, "._state"));
                                            if (i(u)) break
                                        }
                                    }))
                                } else {
                                    var s = a.sub("".concat(t, "._state"));
                                    if (i(s)) return "break"
                                }
                            };
                        for (var r in o)
                            if ("break" === l(r)) break
                    },
                    getTemplate: function() {
                        return this.sectionModel.template
                    },
                    _getSectionId: function() {
                        return this.getDefaultBinding().sub("id").get()
                    },
                    _getSectionStyleProps: function() {
                        return {
                            background1: this.getBackgroundProps("background1")
                        }
                    },
                    _getOriginSectionId: function() {
                        return this.getDefaultBinding().sub("origin_id").get()
                    },
                    _getIsShowLayoutSelector: function() {
                        return !0
                    },
                    _getLayoutProps: function() {
                        var t = this.getDefaultBinding().sub("components.slideSettings"),
                            e = t.get("padding");
                        e = e && e.toJS ? e.toJS() : e;
                        var n = t.sub("layout_config");
                        return {
                            padding: e || {
                                top: "normal",
                                bottom: "normal"
                            },
                            layoutVariation: t.get("layout_variation") || "",
                            binding: t,
                            parentBinding: this.getDefaultBinding(),
                            s5ClassProps: this.props.s5ClassProps,
                            sectionLayoutConfig: n
                        }
                    },
                    _getLayoutBinding: function() {
                        return this.getDefaultBinding().sub("components.slideSettings")
                    },
                    _getLayoutKey: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = this.getDefaultBinding().get("components.slideSettings.layout_variation");
                        return null != e && (t = "function" == typeof this._getLayoutOptions ? this._getLayoutOptions() : void 0) ? (0, S.default)(W.default).call(W.default, t, (function(t) {
                            return t.key === n
                        })) ? n : e : n
                    },
                    _getRepeatableItemProps: function(t, e) {
                        var n = t.sub(e).get(),
                            a = {
                                key: n.get("id")
                            };
                        return it({
                            parentSize: t.get().size,
                            hasEditorOpened: this._hasEditorOpened(n)
                        }, a)
                    },
                    _hasEditorOpened: function(t) {
                        return (0, S.default)(W.default).call(W.default, t.get("components").toObject(), (function(t, e) {
                            return "editor" === t.get("_state")
                        }))
                    },
                    getComponentProps: function(t, e) {
                        var n, a = this.getComponentBinding(t, e),
                            i = a.get().toObject(),
                            o = (0, T.default)(W.default).call(W.default, i, (function(t, e, n) {
                                return W.default.isNull(e) && (e = void 0), t[n] = e, t
                            }), {});
                        return o.binding = {
                            default: a
                        }, o._cName = t, o.sectionModel = this.sectionModel, o.layout = this.getDefaultBinding().get("components.slideSettings.layout_variation"), o.layoutConfig = this.getDefaultBinding().get("components.slideSettings.layout_config"), null === o.layout && (o.layout = void 0), o.eagerLoad = this.props.eagerLoad, "media" === this.getDefaultBinding().get("template_name") && (o.assetType = "background"), -1 !== (0, I.default)(n = ["background1", "background2"]).call(n, t) && (o.bgClassNames = this.getThemeFeature("backgroundColorClassNames"), o.userClassName = this.getDefaultBackground(a)), o
                    },
                    getReduxComponentProps: function(t, e) {
                        var n, a = this.getComponentBinding(t, e),
                            i = (0, nt.getReduxComponentProps)(a);
                        return i._cName = t, i.sectionModel = this.sectionModel, i.layout = this.getDefaultBinding().get("components.slideSettings.layout_variation"), i.layoutConfig = this.getDefaultBinding().get("components.slideSettings.layout_config"), null === i.layout && (i.layout = void 0), i.eagerLoad = this.props.eagerLoad, "media" === this.getDefaultBinding().get("template_name") && (i.assetType = "background"), -1 !== (0, I.default)(n = ["background1", "background2"]).call(n, t) && (i.bgClassNames = this.getThemeFeature("backgroundColorClassNames"), i.userClassName = this.getDefaultBackground(a)), i
                    },
                    getDefaultBackground: function(t) {
                        var e = this.getThemeFeature("backgroundColorClassNames"),
                            n = this.getThemeFeature("backgroundColorRotate"),
                            a = t.get("userClassName"),
                            i = q.default.getBgColorClassName(t.get("backgroundColor"));
                        return a && e.length && -1 !== (0, I.default)(e).call(e, a) ? a : i && e.length && -1 !== (0, I.default)(e).call(e, i) ? i : n ? q.default.getSectionBackgroundByIndex(this.props.index, e) : ""
                    },
                    getBackgroundProps: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                shouldInheritThemeColor: !1
                            },
                            i = this.getComponentBinding(t, e),
                            o = tt.default.getBackgroundForAllSections(),
                            l = it({
                                bgClassNames: this.getThemeFeature("backgroundColorClassNames"),
                                userClassName: this.getDefaultBackground(i)
                            }, a),
                            r = i.get("useImage"),
                            u = i.get("videoHtml"),
                            s = i.get("backgroundColor");
                        if (!n || o || r || u || s && 0 !== s.size) {
                            var d = !!o || this.props.eagerLoad;
                            return l = (0, x.default)({
                                size: "background",
                                hackRoundShapeFlag: this.props.hackRoundShapeFlag,
                                eagerLoad: d
                            }, l), (0, x.default)({
                                parentBinding: i,
                                sectionIndex: this.props.index
                            }, q.default.getContentProps(i.get().toObject(), l), {
                                inSectionSelector: this.props.inSectionSelector
                            })
                        }
                        return this.getMinBackgroundColorProps(i)
                    },
                    getMinBackgroundColorProps: function(t) {
                        var e = this.getDefaultBackground(t);
                        return {
                            bgClassNames: this.getThemeFeature("backgroundColorClassNames"),
                            userClassName: e,
                            className: e
                        }
                    },
                    getSliderBackgroundProps: function(t, e, n) {
                        return "noForeground" === n ? this.getFullViewBackgroundProps(t, e) : this.getBackgroundProps(t, e)
                    },
                    getFullViewBackgroundProps: function(t, e) {
                        var n = this.getComponentBinding(t, e),
                            a = n.get().toObject(),
                            i = q.default.getContentProps(a),
                            o = W.default.assign(i.style, {
                                backgroundPosition: "50% 50%"
                            });
                        return i.style = o, (0, x.default)({
                            parentBinding: n
                        }, i)
                    },
                    getFooterBackgroundProps: function(t, e) {
                        var n = this.getComponentBinding(t, e),
                            a = {
                                bgClassNames: this.getThemeFeature("backgroundColorClassNames"),
                                userClassName: this.getDefaultBackground(n)
                            };
                        return (0, x.default)({
                            className: a.userClassName
                        }, a)
                    },
                    hasBackgroundVideo: function(t, e) {
                        return "" !== this.getComponentBinding(t, e).get().toObject().videoHtml
                    },
                    getComponentBinding: function(t, e) {
                        var n, a, i = this.generateComponentBindingIfMissing([t], e);
                        if (!i.get("type")) throw new Error((0, b.default)(n = (0, b.default)(a = "".concat(this.displayName, '.getComponentBinding("')).call(a, t, '"): "')).call(n, t, '" data not found.'));
                        return i
                    },
                    generateComponentBindingIfMissing: function(t, e) {
                        if (e || (e = this.getDefaultBinding()), e.get("components").getIn(t)) return e.sub("components").sub(t.join("."));
                        var n = this.getDefaultBinding().get("template_name");
                        n || (n = this.getDefaultBinding().get("type").toLowerCase());
                        var a = K.default.getSectionDataBySectionName(n),
                            i = (0, T.default)(t).call(t, (function(t, e) {
                                return t[e]
                            }), a.content.components);
                        return !i && a.content.components.repeatable1 && (i = (0, T.default)(t).call(t, (function(t, e) {
                            return t[e]
                        }), a.content.components.repeatable1.components)), i = H.default.fromJS(i), e.sub("components").atomically().set(t.join("."), i).commit({
                            notify: !1
                        }), e.sub("components").sub(t.join("."))
                    },
                    getRepeatableBinding: function(t) {
                        return this.getDefaultBinding().sub("components.".concat(t, ".list"))
                    },
                    getGalleryBinding: function(t) {
                        return this.getDefaultBinding().sub("components.".concat(t, ".sources"))
                    },
                    sbHasContent: function(t) {
                        var e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = n(399069),
                            o = (n(234584), {
                                showOnly: !0,
                                parentBinding: null
                            });
                        a = W.default.merge(o, a);
                        var l = this.getComponentBinding(t, a.parentBinding),
                            r = l.get("type");
                        if ("Background" === r) e = q.default.hasContent(l);
                        else {
                            var u = i.get(r);
                            if (!u.hasContent) throw new Error("Component ".concat(r, " does not have hasContent defined!"));
                            e = u.hasContent(l)
                        }
                        return a.showOnly ? e || $.default.isEditMode() : e
                    },
                    sbAnyHasContent: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, S.default)(W.default).call(W.default, t.split(" "), (function(t) {
                            return e.sbHasContent(t, n)
                        }))
                    },
                    sbEditState: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.getComponentBinding(t, e.parentBinding);
                        return "editor" === n.get("_state") || ("undefined" != typeof window && void 0 !== window.document ? Boolean(document.querySelectorAll(".s-onyxnew-logo .s-component-editor").length) : void 0)
                    },
                    sbTextAlignment: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = (n(399069), n(234584), {
                                parentBinding: null
                            });
                        e = W.default.merge(a, e);
                        var i = this.getComponentBinding(t, e.parentBinding),
                            o = i.get("type");
                        if ("RichText" === o) {
                            var l, r = i.get("value"),
                                u = n(554807),
                                s = null != (l = u.getTextAlignment(r)) ? l : "";
                            return s
                        }
                        return console.error("Error: calling sbTextAlignment on a non-text element!"), null
                    },
                    sbAlignmentClass: function(t) {
                        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        n = W.default.extend({
                            oldClass: "",
                            classSuffix: "-align"
                        }, n);
                        var a = this.sbTextAlignment(t, n);
                        return a = a ? a + n.classSuffix : "", (0, N.default)(e = [n.oldClass, a].join(" ")).call(e)
                    },
                    getButtonAlignmentByTitleAndSubtitle: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = e;
                        if (null === (t = n) || void 0 === t || !t.length) {
                            var a = "beta-s6" === this.getDefaultBinding().get("template_version");
                            n = a ? ["text1"] : ["text2", "text1"]
                        }
                        var i = this.getDefaultBinding().sub("components"),
                            o = (0, et.getSectionTextAlignment)(i, n);
                        return (0, et.getButtonAlignmentStyle)(o)
                    },
                    sbUniformTextAlignment: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = {
                                showOnly: !1,
                                parentBinding: null
                            };
                        n = W.default.merge(a, n);
                        var i = t.split(" "),
                            o = (0, A.default)(i).call(i, (function(t) {
                                return e.sbHasContent(t, n)
                            }));
                        return 0 === o.length ? "" : (0, L.default)(W.default).call(W.default, o, (function(t) {
                            var a;
                            return (0, O.default)(a = ["justify", "left"]).call(a, e.sbTextAlignment(t, n))
                        })) ? "left-align" : (0, L.default)(W.default).call(W.default, o, (function(t) {
                            return "right" === e.sbTextAlignment(t, n)
                        })) ? "right-align" : (0, L.default)(W.default).call(W.default, o, (function(t) {
                            return "center" === e.sbTextAlignment(t, n)
                        })) ? "center-align" : ""
                    },
                    getThemeFeature: function(t) {
                        var e = n(234584),
                            a = n(843296).get(e.getTheme().get("name"));
                        return a && a.features && a.features[t]
                    }
                };
            e.default = lt, t.exports = e.default
        },
        808833: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(726394),
                l = (0, i.default)(o);
            n(382526), n(141817);
            var r = n(496486),
                u = (0, i.default)(r),
                s = n(399069),
                d = (0, i.default)(s);
            e.default = function t(e, n) {
                (0, l.default)(this, t), this.sectionName = n, this.template = e.template, this.displayName = e.displayName, this.thumbnail = e.thumbnail || {}, this.category = e.category, this.description = e.description, this.content = e.content, this.proFeature = e.proFeature, this.position = e.position, this.canEditInMobileApp = e.canEditInMobileApp;
                var a = e.component,
                    i = u.default.extend(a, {
                        sectionModel: this
                    });
                this.component = d.default.createSection(i)
            }, t.exports = e.default
        },
        389689: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(726394),
                l = (0, i.default)(o),
                r = n(569198),
                u = (0, i.default)(r),
                s = n(620116),
                d = (0, i.default)(s),
                c = n(847302),
                g = (0, i.default)(c),
                f = n(496486),
                p = (0, i.default)(f),
                v = n(808833),
                h = (0, i.default)(v),
                m = function() {
                    function t(e) {
                        (0, l.default)(this, t), this.theme = e, this.coll = {}
                    }
                    return (0, u.default)(t, [{
                        key: "get",
                        value: function(t) {
                            return this.coll[t]
                        }
                    }, {
                        key: "set",
                        value: function(t, e) {
                            e instanceof h.default || (e = new h.default(e, t)), e.theme = this.theme, this.coll[t] = e
                        }
                    }, {
                        key: "reset",
                        value: function(t) {
                            for (var e in this.coll = {}, t) this.set(e, t[e])
                        }
                    }, {
                        key: "byCategory",
                        value: function(t) {
                            return "all" === t || null == t ? this.getAll() : this._sort((0, d.default)(p.default).call(p.default, this.coll, (function(e) {
                                return e.category === t
                            })))
                        }
                    }, {
                        key: "getAll",
                        value: function() {
                            return this._sort((0, d.default)(p.default).call(p.default, this.coll, (function(t) {
                                return null != t.category
                            })))
                        }
                    }, {
                        key: "_sort",
                        value: function(t) {
                            return (0, g.default)(t).call(t, (function(t, e) {
                                return ((t = t.position) - (e = e.position)) / Math.abs(t - e)
                            }))
                        }
                    }]), t
                }();
            e.default = m, t.exports = e.default
        },
        14637: function(t, e, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var o = n(726394),
                l = (0, i.default)(o),
                r = n(569198),
                u = (0, i.default)(r),
                s = n(678580),
                d = (0, i.default)(s);
            n(382526), n(141817);
            var c = n(496486),
                g = (0, i.default)(c),
                f = n(389689),
                p = (0, i.default)(f),
                v = n(183123),
                h = (0, i.default)(v),
                m = function() {
                    function t(e) {
                        var n;
                        (0, l.default)(this, t), this.sections = new p.default(this), this.internal = e.internal, this.displayName = e.displayName, this.description = e.description, this.variations = e.variations, this.features = e.features, this.thumbnail = e.thumbnail, this.defaultFonts = e.defaultFonts;
                        var a = h.default.getEnvironment();
                        this.activated = e.activated || (0, d.default)(n = ["uat", "development"]).call(n, a), this._resetSections(e.sections), this._setCallbacks(e.callbacks)
                    }
                    return (0, u.default)(t, [{
                        key: "getVariation",
                        value: function(t) {
                            return g.default.detect(this.variations, (function(e) {
                                return e.id === t
                            }))
                        }
                    }, {
                        key: "getSection",
                        value: function(t, e) {
                            var n = e ? this.sections.get("s6_common_section") : this.sections.get(t);
                            if (null == n) throw new Error("".concat(t, " section not found"));
                            return n
                        }
                    }, {
                        key: "getSectionComponent",
                        value: function(t) {
                            if (this.getSection(t)) return this.getSection(t).component
                        }
                    }, {
                        key: "getSectionTemplate",
                        value: function(t) {
                            if (this.getSection(t)) return this.getSection(t).template
                        }
                    }, {
                        key: "_resetSections",
                        value: function(t) {
                            this.sections.reset(t)
                        }
                    }, {
                        key: "_setCallbacks",
                        value: function(t) {
                            for (var e in t) {
                                var n = t[e];
                                this[e] || (this[e] = n)
                            }
                        }
                    }]), t
                }();
            e.default = m, t.exports = e.default
        },
        554807: function(t, e, n) {
            var a = n(353147),
                i = n(686902),
                o = n(14310),
                l = n(620116),
                r = n(834074),
                u = n(778914),
                s = n(239649),
                d = n(820368),
                c = n(663978),
                g = n(60530)(n(60530));
            c(e, "__esModule", {
                value: !0
            });
            var f = n(487672),
                p = (0, g.default)(f),
                v = n(977766),
                h = (0, g.default)(v),
                m = n(694473),
                _ = (0, g.default)(m),
                b = n(933032),
                C = (0, g.default)(b),
                S = n(666419),
                E = (0, g.default)(S),
                T = n(729828),
                y = (0, g.default)(T),
                I = n(981643),
                w = (0, g.default)(I),
                x = n(277149),
                P = (0, g.default)(x),
                N = n(686902),
                k = (0, g.default)(N),
                A = n(678580),
                B = (0, g.default)(A);
            n(324603), n(974916), n(339714), n(115306);
            var L, D, O = n(223336),
                M = (0, g.default)(O),
                R = n(45697),
                U = (0, g.default)(R),
                Z = n(973935),
                G = (0, g.default)(Z),
                F = n(496486),
                H = (0, g.default)(F),
                V = n(143393),
                W = (0, g.default)(V),
                z = n(230139),
                $ = (0, g.default)(z),
                j = n(157444),
                K = (0, g.default)(j),
                J = n(43138),
                Y = ((0, g.default)(J), n(399069)),
                X = (0, g.default)(Y),
                q = n(183123),
                Q = (0, g.default)(q),
                tt = n(234584),
                et = (0, g.default)(tt);

            function nt(t, e) {
                var n = i(t);
                if (o) {
                    var a = o(t);
                    e && (a = l(a).call(a, (function(e) {
                        return r(t, e).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function at(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n, a = null != arguments[e] ? arguments[e] : {};
                    if (e % 2) u(n = nt(Object(a), !0)).call(n, (function(e) {
                        (0, p.default)(t, e, a[e])
                    }));
                    else if (s) d(t, s(a));
                    else {
                        var i;
                        u(i = nt(Object(a))).call(i, (function(e) {
                            c(t, e, r(a, e))
                        }))
                    }
                }
                return t
            }
            n(832313);
            var it = ["<h1", "<h2", "<h3", "<h4", "<h5"],
                ot = {
                    48: "h1",
                    28: "h2",
                    24: "h3",
                    20: "h4",
                    inherit: "h5"
                },
                lt = X.default.createPageComponent({
                    displayName: "RichText",
                    mixins: [(0, $.default)("editor")],
                    observedProps: ["shouldAutoFocus"],
                    textEditorComponent: null,
                    AIEditorComponent: null,
                    statics: {
                        hasContent: function(t) {
                            return "string" != typeof t && (t = t.get("value")), null != t && "" !== t
                        },
                        isLeftAligned: function(t) {
                            return /text-align:\s*left/.test(t)
                        },
                        isRightAligned: function(t) {
                            return /text-align:\s*right/.test(t)
                        },
                        isCenterAligned: function(t) {
                            return /text-align:\s*center/.test(t)
                        },
                        isJustifyAligned: function(t) {
                            return /text-align:\s*justify/.test(t)
                        },
                        getTextAlignment: function(t) {
                            return lt.isLeftAligned(t) ? "left" : lt.isRightAligned(t) ? "right" : lt.isCenterAligned(t) ? "center" : lt.isJustifyAligned(t) ? "justify" : ""
                        }
                    },
                    bobcatPropTypes: {
                        shared: {
                            publishedPageCount: U.default.number,
                            isBlog: U.default.bool,
                            sectionsNameSync: U.default.bool
                        },
                        designer: {
                            tagClassName: U.default.string,
                            tagName: U.default.string,
                            textType: U.default.oneOf(["heading", "body", "title"]).isRequired,
                            defaultStyle: U.default.oneOf(["", "bold", "italic"]),
                            className: U.default.string,
                            emptyMessage: U.default.string,
                            emptyTooltip: U.default.string,
                            onlyNormalToolbar: U.default.bool,
                            slideSettingsBinding: U.default.object,
                            useLayoutTextAlignment: U.default.bool,
                            defaultFontSizeValue: U.default.string
                        },
                        data: {
                            version: U.default.number,
                            value: U.default.string,
                            binding: U.default.object.isRequired,
                            alignment: U.default.string
                        },
                        callbacks: {
                            checkParagraph: U.default.func,
                            inputCallback: U.default.func
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            designer: {
                                tagClassName: "",
                                tagName: "div",
                                textType: "body",
                                defaultStyle: "",
                                applyWordBreaks: !1
                            },
                            data: {
                                version: 0,
                                value: ""
                            },
                            callback: {
                                checkParagraph: function() {},
                                inputCallback: function() {}
                            }
                        }
                    },
                    _isPreviewMode: function() {
                        return this.props.isPreviewMode
                    },
                    _emptyMessage: function() {
                        return this.props.emptyMessage || a("Editor|Add text.")
                    },
                    _emptyTooltip: function() {
                        return this.props.emptyTooltip || a("Editor|Empty space won't be shown in the published site")
                    },
                    _isBlog: function() {
                        return "function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().isBlog : void 0
                    },
                    _themeName: function() {
                        return "function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().themeName : void 0
                    },
                    _useDraftEditor: function() {
                        return this._isBlog() ? Q.default.getIsNewBlogEditor() : Q.default.getCanUseDraftEditor()
                    },
                    _useAiDraftEditor: function() {
                        return !1
                    },
                    _inputCallback: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.updateData({
                            alignment: t
                        }), "function" == typeof this.cbProps.inputCallback && this.cbProps.inputCallback()
                    },
                    canUseCurrentEditor: function(t) {
                        switch (t) {
                            case "aiEditor":
                                return this._useAiDraftEditor();
                            case "draftEditor":
                                return this._useDraftEditor() && !this._useAiDraftEditor();
                            case "cKEditor":
                                return !this._useDraftEditor() && !this._useAiDraftEditor();
                            default:
                                return !1
                        }
                    },
                    componentWillMount: function() {
                        this.initMeta({
                            textContentHash: (new Date).getTime()
                        })
                    },
                    componentDidMount: function() {
                        this._oldBindingData = this.getDefaultBinding().get()
                    },
                    componentDidUpdate: function(t) {
                        this._oldBindingData = this.getDefaultBinding().get()
                    },
                    showEmptyTooltip: function() {
                        if (!L && !("function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().isBlog : void 0) && 0 === ("function" == typeof this.constructor.sharedProps ? this.constructor.sharedProps().publishedPageCount : void 0)) {
                            var t, e = (0, _.default)(t = (0, M.default)(G.default.findDOMNode(this))).call(t, ".s-component-editor-inner");
                            return e.tooltip({
                                placement: "top",
                                trigger: "manual",
                                container: (0, M.default)(G.default.findDOMNode(this)),
                                callback: function(t) {
                                    return (0, C.default)((function() {
                                        return t.one("mouseout", (function() {
                                            return e.tooltip("destroy")
                                        }))
                                    }), 2500)
                                }
                            }), e.tooltip("show"), (0, C.default)((function() {
                                return e.tooltip("destroy")
                            }), 5e3), L = !0
                        }
                    },
                    shouldComponentUpdateOverride: function(t, e, n) {
                        return e.binding.default ? e.binding.default.get() !== this._oldBindingData : t(e, n)
                    },
                    hasContent: function() {
                        return lt.hasContent(this.props.value)
                    },
                    getTextAlignment: function() {
                        return lt.getTextAlignment(this.props.value)
                    },
                    _highlightDefaultContent: function(t, e) {
                        if (this.getData("defaultValue")) return t.selection.select(t.getBody(), !0);
                        t.selection.select(t.getBody(), !0), t.selection.collapse(!1);
                        for (var n = function(t) {
                                var e = document.createElement("div");
                                return e.innerHTML = t, e.textContent || e.innerText || ""
                            }(e), a = 0, i = (0, E.default)(D); a < i.length; a++) {
                            var o, l = i[a];
                            if ((0, y.default)(o = n.toLowerCase()).call(o, l)) {
                                t.selection.select(t.getBody(), !0);
                                break
                            }
                        }
                    },
                    _getWordBreakValue: function() {
                        var t, e, n = this.dtProps,
                            a = n.tagName,
                            i = n.textType,
                            o = "";
                        return o = this.props.applyWordBreaks ? K.default.applyWordBreaks(this.dtProps.value) : this.dtProps.value || "", (Q.default.getCanUseDraftEditor() || this._useAiDraftEditor() || this._isPreviewMode()) && (o = this.dtProps.value || ""), (a && -1 !== (0, w.default)(a).call(a, "h") && -1 === (0, w.default)(o).call(o, "<h") || this.props.inSectionSelector) && (o = (0, h.default)(t = (0, h.default)(e = "<".concat(a, ">")).call(e, o, "</")).call(t, a, ">")), Q.default.getIsBlog() && "body" === i && (o = this.matchHeaderTag(o)), o
                    },
                    matchHeaderTag: function(t) {
                        var e;
                        if ((0, P.default)(H.default).call(H.default, it, (function(e) {
                                return -1 !== (0, w.default)(t).call(t, e)
                            }))) return t;
                        var n = (0, _.default)(e = (0, k.default)(ot)).call(e, (function(e) {
                            return (0, B.default)(t).call(t, "font-size: ".concat(e, "px"))
                        }));
                        if (n) {
                            var a, i, o = ot[n];
                            return (0, B.default)(t).call(t, "<li") ? function(t, e) {
                                var n = new RegExp('<li([^>]*style="[^"]*font-size:\\s*'.concat(e, 'px[^"]*"[^>]*)>([\\s\\S]*?)</li>'), "gi"),
                                    a = ot[e];
                                return a ? t.replace(n, (function(t, n, i) {
                                    var o, l, r, u;
                                    return (0, h.default)(o = (0, h.default)(l = (0, h.default)(r = (0, h.default)(u = "<li".concat(n, "><")).call(u, a, ' style="font-size: ')).call(r, e, 'px; margin-bottom: 0;">')).call(l, i, "</")).call(o, a, "></li>")
                                })) : t
                            }(t, n) : (0, h.default)(a = (0, h.default)(i = "<".concat(o, ">")).call(i, t, "</")).call(a, o, ">")
                        }
                        return t
                    },
                    _getContentProps: function() {
                        var t = "s-component-content s-font-".concat(this.dsProps.textType);
                        return !(this.isState("editor") && !this.props.inSectionSelector) && this.hasContent() || (t += " hidden"), this.props.className && (t += " ".concat(this.props.className)), this.props.tagClassName && (t += " ".concat(this.props.tagClassName)), {
                            dangerouslySetInnerHTML: {
                                __html: this._getWordBreakValue()
                            },
                            className: t,
                            style: {
                                whiteSpace: "pre-wrap"
                            }
                        }
                    },
                    _getContentEditableContentProps: function() {
                        var t = this;
                        return {
                            className: "s-component-content s-font-".concat(this.dsProps.textType),
                            dangerouslySetInnerHTML: {
                                __html: this.dtProps.value || "<p><br></p>"
                            },
                            contentEditable: !0,
                            style: {
                                outline: "none"
                            },
                            ref: "textEditor",
                            onFocus: function() {
                                var e = (0, M.default)(t.refs.textEditor).closest(".s-component-editor-inner"),
                                    n = e.parent();
                                e.addClass("active"), n.removeClass("empty");
                                var a = t.refs.textEditor.textContent;
                                if (t.getData("defaultValue") || (0, P.default)(D).call(D, (function(t) {
                                        return (0, y.default)(a).call(a, t)
                                    }))) return (0, C.default)((function() {
                                    if (window.getSelection && document.createRange) {
                                        var e = window.getSelection(),
                                            n = document.createRange();
                                        return n.selectNodeContents(t.refs.textEditor), e.removeAllRanges(), e.addRange(n)
                                    }
                                }), 0)
                            },
                            onBlur: function() {
                                var e = (0, M.default)(t.refs.textEditor).closest(".s-component-editor-inner"),
                                    n = e.parent();
                                e.removeClass("active");
                                var a = t.refs.textEditor.textContent;
                                a || n.addClass("empty");
                                var i = t.refs.textEditor.innerHTML;
                                return t._saveContentEditableData(i, a)
                            }
                        }
                    },
                    getSaveButtonProps: function() {
                        var t = this;
                        return {
                            onClickRemove: function(e) {
                                var n = t._getEditor();
                                return n.setContent(""), n.focus(), t.updateData({
                                    value: ""
                                })
                            },
                            onClickCancel: function(e) {
                                var n = t._getEditor();
                                return null != n && n.setContent(t.dtProps.value), t.onClickCancel()
                            },
                            onClickSave: function(e) {
                                return t._updateValue(), t.updateState("normal"), t.savePage()
                            },
                            onClickFont: function() {
                                return t._updateValue(), t.updateState("normal"), "function" == typeof t.constructor.sharedProps ? t.constructor.sharedProps().openStylePanel(t.dsProps.textType) : void 0
                            },
                            binding: this.getDefaultBinding()
                        }
                    },
                    _initCKData: function(t, e) {
                        if (this.dtProps.backupValue) return this.updateData({
                            backupValue: null
                        })
                    },
                    transformHTML: function(t) {
                        var e = "<transform>".concat(t, "</transform>").replace(/<wbr>|<wbr \/>/g, "");
                        return M.default.parseHTML(e)[0].innerHTML
                    },
                    _saveCKData: function(t) {
                        var e, n = t || {},
                            a = n.richTextData,
                            i = n.version,
                            o = n.aiSettings,
                            l = void 0 === o ? {} : o,
                            r = n.timeMachine,
                            u = void 0 === r || r,
                            s = {
                                value: this.transformHTML(a),
                                version: i
                            };
                        return this._useAiDraftEditor() && (s = at(at({}, s), {}, {
                            aiSettings: l
                        })), null !== (e = this.getDefaultBinding()) && void 0 !== e && e.get("defaultDataProcessed") || (s = at(at({}, s), {}, {
                            defaultDataProcessed: !0
                        })), this.updateData(s), this.savePage({
                            timeMachine: u
                        })
                    },
                    _saveContentEditableData: function(t, e) {
                        var n = this.transformHTML(t);
                        if (e || (n = ""), (e || this.previousContentEditableData) && n !== this.previousContentEditableData) return this.previousContentEditableData = n, this.updateData({
                            value: n
                        }), this.savePage()
                    },
                    _onFocusCK: function(t) {
                        return this.onClickEditor(), (this.getData("defaultValue") || (0, P.default)(D).call(D, (function(e) {
                            var n;
                            return (0, y.default)(n = t.editable().getText()).call(n, e)
                        }))) && (0, C.default)((function() {
                            var e = t.createRange();
                            return e.selectNodeContents(t.editable()), e.select()
                        }), 0), "function" == typeof this.props.onfocus ? this.props.onfocus() : void 0
                    },
                    _onFocusDraft: function() {
                        return this.onClickEditor(), "function" == typeof this.props.onfocus ? this.props.onfocus() : void 0
                    },
                    _toNormalState: function() {
                        var t = this.props.onblur;
                        return "function" == typeof t && t(), this.updateState("normal")
                    },
                    _onChange: function() {
                        if (this.props.onChange) return this.props.onChange()
                    },
                    _clickEditButton: function(t) {
                        var e = this.props.clickEditButton,
                            n = this.refs,
                            a = n.ck,
                            i = n.draft;
                        "function" == typeof e && e(), this.onClickEditor(), a && a.editor && "function" == typeof a.editor.focus && a.editor.focus(), i && i.domEditor && "function" == typeof i.domEditor.focus && i.domEditor.focus(), t.stopPropagation()
                    },
                    _clickEditOverlay: function() {
                        "function" == typeof this.props.clickEditOverlay && this.props.clickEditOverlay()
                    },
                    _getSectionName: function() {
                        return this.props.sectionModel && this.props.sectionModel.sectionName
                    },
                    _getSectionOrElementBinding: function() {
                        return null
                    },
                    _getAiSettings: function() {
                        return (this.props.aiSettings || W.default.fromJS({
                            tone: et.default.getSiteBuilderTone(),
                            language: et.default.getSiteBuilderlang()
                        })).toObject()
                    },
                    getCKEditor: function() {
                        return function() {
                            return null
                        }
                    },
                    getDraftEditor: function() {
                        return function() {
                            return null
                        }
                    },
                    getAIEditor: function() {
                        return function() {
                            return null
                        }
                    },
                    getCurrentPath: function() {
                        return this.getDefaultBinding()._path
                    },
                    getTextAiGenerateParams: function() {
                        return {}
                    },
                    render: function() {
                        return n(596944).apply(this)
                    }
                });
            e.default = lt, t.exports = e.default
        }
    }
]);