/*! For license information please see 8987.3fae7ebb2ce95944a3ae-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [8987], {
        332578: function(e, t, a) {
            a.r(t), a.d(t, {
                getDefaultSocialMediaItem: function() {
                    return b
                },
                getSocialMedialIcon: function() {
                    return v
                },
                getSocialMedialType: function() {
                    return w
                },
                getSocialMedialUrl: function() {
                    return _
                },
                renderSVGElement: function() {
                    return k
                },
                migrateNewSocialMediaData: function() {
                    return y
                }
            });
            var n = a(863056),
                i = a(277149),
                l = a.n(i),
                r = a(2991),
                o = a.n(r),
                s = a(620116),
                c = a.n(s),
                u = a(25843),
                d = a.n(u),
                m = a(678580),
                f = a.n(m),
                g = (a(366757), a(879042)),
                p = a(828125),
                h = a(329756),
                b = function() {
                    return {
                        id: (0, p.Bu)(),
                        url: "",
                        className: "fas fa-link",
                        type: "SocialMediaItem",
                        show_button: !0
                    }
                },
                v = function(e) {
                    for (var t in g.SOCIAL_MEDIA_CONFIG) {
                        var a, n = g.SOCIAL_MEDIA_CONFIG[t];
                        if (l()(a = n.validateUrl).call(a, (function(t) {
                                return t.test(e)
                            }))) return n.className
                    }
                    return "fas fa-link"
                },
                w = function(e) {
                    for (var t in g.SOCIAL_MEDIA_CONFIG) {
                        var a, n = g.SOCIAL_MEDIA_CONFIG[t];
                        if (l()(a = n.validateUrl).call(a, (function(t) {
                                return t.test(e)
                            }))) return n.type
                    }
                    return null
                },
                _ = function(e) {
                    return h.RegexConstants.HAS_HTTP.test(e) ? e : /^\/\//.test(e) ? "https:".concat(e) : "https://".concat(e)
                },
                k = function(e) {
                    var t = e.viewBox,
                        a = e.svgCode,
                        i = e.classNames;
                    return (0, n.Z)("svg", {
                        className: i,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: t,
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    })
                },
                y = function(e) {
                    var t = c()(e).call(e, (function(e) {
                        var t, a;
                        return (d()(t = e.url).call(t) || e.show_button) && !f()(a = ["GPlus", "Renren"]).call(a, e.type)
                    }));
                    return o()(t).call(t, (function(e) {
                        var t = e || {},
                            a = t.className,
                            n = t.type,
                            i = (g.strikinglySocialMediaMap[n] || {}).className;
                        return !a && i && (e.className = i), e.id || (e.id = (0, p.Bu)()), e
                    }))
                }
        },
        833019: function(e, t, a) {
            var n = a(353147),
                i = a(366757),
                l = a(496486),
                r = (l = a(496486), a(589499)),
                o = a(271866),
                s = a(834243),
                c = a(805803);
            e.exports = function() {
                function e(e, t, a, n, r, o, s) {
                    return i.createElement("li", {
                        key: o.uid
                    }, i.createElement("a", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickMultiPageMobileMenu(o),
                        target: o.newTarget ? "_blank" : "_self",
                        href: o.path
                    }, o.title))
                }

                function t(t, a, n, r, o) {
                    return i.createElement("li", {
                        key: r.uid
                    }, r.items ? i.createElement("div", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0,
                            "navbar-drawer-dropdown navbar-sub-dropdown": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickSubDropdown,
                        key: "2280"
                    }, i.createElement("div", {
                        className: "s-font-body s-mobile-nav-dropdown-item"
                    }, i.createElement("span", {}, r.title)), i.createElement.apply(this, ["ul", {}, l.map(r.items, e.bind(this, t, a, n, r, o))])) : null, r.items ? null : i.createElement("a", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickMultiPageMobileMenu(r),
                        target: r.newTarget ? "_blank" : "_self",
                        href: r.path,
                        key: "3012"
                    }, r.title))
                }

                function a(e, a, n) {
                    return i.createElement("li", {
                        key: a.id || a.title
                    }, a.items ? i.createElement("span", {
                        key: "1883"
                    }, i.createElement("div", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0,
                            "navbar-drawer-dropdown": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickDropdown
                    }, i.createElement("div", {
                        className: "s-font-body s-mobile-nav-dropdown-item"
                    }, i.createElement("span", {}, a.title)), i.createElement.apply(this, ["ul", {}, l.map(a.items, t.bind(this, e, a, n))]))) : null, a.items ? null : i.createElement("span", {
                        style: a.components.slideSettings.show_nav && !this.getIsSectionHidden(a.components.slideSettings) ? {} : {
                            display: "none"
                        },
                        key: "3306"
                    }, i.createElement("a", {
                        className: "navbar-drawer-item s-font-body",
                        onClick: this._onClickMobileMenu,
                        href: this._getHashLink(a.sectionIndex)
                    }, a.components.slideSettings.name)))
                }

                function u(e, t, a, n, r, o, s) {
                    return i.createElement("li", {
                        key: o.uid
                    }, i.createElement("a", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickMultiPageMobileMenu(o, a),
                        target: o.newTarget ? "_blank" : "_self",
                        href: o.path
                    }, o.title))
                }

                function d(e, t, a, n, r) {
                    return i.createElement("li", {
                        key: n.uid
                    }, n.items ? i.createElement("div", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0,
                            "navbar-drawer-dropdown navbar-sub-dropdown": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickSubDropdown,
                        key: "4185"
                    }, i.createElement("div", {
                        className: "s-font-body s-mobile-nav-dropdown-item"
                    }, i.createElement("span", {}, n.title)), i.createElement.apply(this, ["ul", {}, l.map(n.items, u.bind(this, e, t, a, n, r))])) : null, n.items ? null : i.createElement("a", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickMultiPageMobileMenu(n, a),
                        target: n.newTarget ? "_blank" : "_self",
                        href: n.path,
                        key: "4928"
                    }, n.title))
                }

                function m(e, t, a) {
                    return i.createElement("li", {
                        key: t.uid
                    }, t.items ? i.createElement("span", {
                        key: "3797"
                    }, i.createElement("div", {
                        className: l.transform({
                            "navbar-drawer-item s-font-body": !0,
                            "navbar-drawer-dropdown": !0
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        onClick: this._onClickDropdown
                    }, i.createElement("div", {
                        className: "s-font-body s-mobile-nav-dropdown-item"
                    }, i.createElement("span", {}, t.title)), i.createElement.apply(this, ["ul", {}, l.map(t.items, d.bind(this, e, t, a))]))) : null, t.items ? null : i.createElement("span", {
                        key: "5233"
                    }, i.createElement("a", {
                        className: "navbar-drawer-item s-font-body",
                        onClick: this._onClickMultiPageMobileMenu(t, a),
                        target: t.newTarget ? "_blank" : "_self",
                        href: t.path
                    }, t.title)))
                }

                function f(e, t, a) {
                    return i.createElement("li", {
                        key: a
                    }, i.createElement("span", {}, i.createElement("a", {
                        className: "s-font-body",
                        href: this._getExternalLinkUrl(t.components.link),
                        onClick: this._onClickMobileMenu,
                        target: this._getExternalLinkTarget(t.components.link)
                    }, t.components.link.text)))
                }

                function g(e, t, a, n) {
                    this._showSocialMedia(n, t)
                }

                function p(e, t, a) {
                    return i.createElement("span", {}, i.createElement("a", {
                        className: "social-media-link",
                        href: this._getSocialMediaLink(t.url),
                        "aria-label": n("SocialMedia|Social media links"),
                        target: "_blank",
                        onClick: g.bind(this, e, t, a)
                    }, "svg" !== this._getSVGIconConfig(t).iconType ? i.createElement("i", {
                        className: t.className,
                        key: "7498"
                    }) : null, "svg" === this._getSVGIconConfig(t).iconType ? i.createElement("svg", {
                        className: "social-media-svg",
                        dangerouslySetInnerHTML: {
                            __html: this._getSVGIconConfig(t).svgCode
                        },
                        viewBox: this._getSVGIconConfig(t).viewBox,
                        key: "7601"
                    }) : null))
                }
                return function() {
                    var e = c.Link;
                    return i.createElement("div", {
                        className: "s-navbar-container"
                    }, i.createElement("div", {
                        className: "navbar-drawer-bar"
                    }, i.createElement("div", {
                        className: "drawer-container"
                    }, this._showNavbar() && this._mobileMenuHasContent() && !this._isInnerPageFromSiteToApp() ? i.createElement("div", {
                        className: "navbar s-mobile-nav-bar",
                        onClick: this._onClickMobileMenu,
                        key: "534"
                    }, i.createElement("div", {
                        className: "navbar-icons"
                    }, i.createElement("span", {}), i.createElement("span", {}), i.createElement("span", {}))) : null, this._showNavbar() && this._isInnerPageFromSiteToApp() ? i.createElement("a", {
                        className: "back-icon navbar",
                        href: "javascript:void(0);",
                        onClick: this._onClickBackToOuterPage,
                        key: "847"
                    }, i.createElement("div", {
                        className: "entypo-left-open-big"
                    })) : null, "\n      ", this._createTitle(), "\n      ", this._showNavbar() && this._hasOldMobileActions() && !this.state.isOpen ? i.createElement("a", {
                        className: "mobile",
                        href: "javascript:void(0);",
                        onClick: this._onClickMobileActions,
                        key: "1105"
                    }, i.createElement("div", {
                        className: "entypo entypo-mobile"
                    })) : null, i.createElement("div", {
                        className: "mobile-cart-icon",
                        id: "s-mobile-shopping-cart-new",
                        onClick: this._onClickMobileShoppingCart
                    }), i.createElement("div", {
                        className: "navbar-drawer-title-container"
                    }))), i.createElement("div", {
                        id: "navbar-drawer-mask",
                        onClick: this._onClickDrawerMask
                    }), i.createElement("div", {
                        className: "navbar-drawer strikingly-drawer " + l.transform({
                            "bottom-border": this._showBottomBorder()
                        }, (function(e, t, a) {
                            t && e.push(a)
                        }), []).join(" "),
                        ref: "navbarDrawer"
                    }, i.createElement.apply(this, ["ul", {
                        id: "nav-drawer-list"
                    }, this.props.isMultiPage ? null : l.map(this.props.slides, a.bind(this, e)), this.props.isMultiPage ? l.map(this.props.slides, m.bind(this, e)) : null, l.map(this.props.submenu.list, f.bind(this, e)), i.createElement("li", {
                        id: "mobileLoginDropdown"
                    }), this.props.enableSiteSearch ? i.createElement("li", {
                        onClick: this.props.onClickSiteSearch,
                        key: "5880"
                    }, i.createElement("span", {}, i.createElement(e, {
                        className: "navbar-drawer-dropdown navbar-drawer-item s-font-body site-search",
                        to: this._getSiteSearchUrl(),
                        onClick: this._onClickMobileSearch
                    }, i.createElement("i", {
                        className: "fa fa-search",
                        style: {
                            marginRight: "2px"
                        }
                    }), "\n            ", n("SiteSearch|Search"), "\n          "))) : null, i.createElement("li", {
                        id: "mobileLangSwitcher"
                    }), this._showSocialContactList() ? i.createElement("li", {
                        className: "social-media",
                        key: "6338"
                    }, i.createElement("div", {
                        className: "s-font-body social-media-wrapper"
                    }, this._getSocialPhoneData() ? i.createElement("div", {
                        className: "social-phone",
                        key: "6467"
                    }, i.createElement("i", {
                        className: "fa fa-phone-alt"
                    }), i.createElement("span", {}, this._getSocialPhoneData())) : null, this._getSocialEmailData() ? i.createElement("div", {
                        className: "social-email",
                        key: "6655"
                    }, i.createElement("i", {
                        className: "fa fa-envelope"
                    }), i.createElement("span", {}, this._getSocialEmailData())) : null)) : null, this._showSocialButtonList() ? i.createElement("li", {
                        className: "social-media",
                        key: "6866"
                    }, i.createElement("div", {
                        className: "social-media-wrapper"
                    }, i.createElement("ul", {
                        className: "s-social-media-buttons"
                    }, "\n            ", this._getSocialMediaItemArr(), "\n          "))) : null, this._showSocialMediaIcon() ? i.createElement("li", {
                        className: "social-media",
                        key: "7113"
                    }, i.createElement.apply(this, ["div", {
                        className: "social-media-wrapper"
                    }, l.map(this.props.socialMediaList, p.bind(this, e))])) : null, this.state.isShowNavButton ? i.createElement("li", {
                        className: "mobile-nav-button",
                        key: "7886"
                    }, "\n        ", this._renderNavButton(), "\n      ") : null, this.props.showLogo ? i.createElement("li", {
                        className: "logo",
                        key: "8006"
                    }, i.createElement(o, {}, i.createElement("a", {
                        className: "logo",
                        href: "https://www.strikingly.com/?ref=logo&permalink=" + this._permalink() + "&m=1",
                        target: "_blank"
                    }, i.createElement("div", {
                        className: "msg"
                    }, "Powered By"), i.createElement("img", {
                        src: r.cdnAssetPath("/images/logo-small-2.png"),
                        style: {
                            height: "28px",
                            width: "100px"
                        },
                        alt: "Strikingly"
                    })), i.createElement("a", {
                        className: "logo",
                        href: s.isZbjUser() ? "http://yunzhan.zbj.com" : "https://www.sxl.cn/?ref=logo&permalink=" + this._permalink() + "&m=1",
                        target: "_blank"
                    }, i.createElement("img", {
                        src: r.cdnAssetPath(s.isZbjUser() ? "/images/zbj-logo.png" : "/images/logo-small-2-sxl-grey.png"),
                        style: {
                            height: "16px",
                            verticalAlign: "middle",
                            marginRight: "6px"
                        },
                        alt: "Strikingly"
                    }), i.createElement("span", {
                        className: "msg"
                    }, "提供技术支持")))) : null])), l.isEmpty(this._mobileActions()) ? null : i.createElement("div", {
                        className: "mobile-actions",
                        key: "8927"
                    }, i.createElement("ul", {
                        id: "mobile-action-list"
                    }, this._mobileActions().phone ? i.createElement("li", {
                        className: "pad",
                        key: "9037"
                    }, i.createElement("a", {
                        href: "tel:" + this._mobileActions().phone
                    }, i.createElement("div", {
                        className: "fa fa-phone"
                    }))) : null, this._mobileActions().sms ? i.createElement("li", {
                        className: "pad",
                        key: "9226"
                    }, i.createElement("a", {
                        target: "_blank",
                        href: "sms:" + this._mobileActions().sms
                    }, i.createElement("div", {
                        className: "fa fa-comment"
                    }))) : null, i.createElement(o, {}, this._mobileActions().location ? i.createElement("li", {
                        className: "pad",
                        key: "9455"
                    }, i.createElement("a", {
                        target: "_blank",
                        href: "https://maps.google.com/maps?q=" + encodeURI(this._mobileActions().location)
                    }, i.createElement("div", {
                        className: "fa fa-map-marker"
                    }))) : null, this._mobileActions().location ? i.createElement("li", {
                        className: "pad",
                        key: "9719"
                    }, i.createElement("a", {
                        target: "_blank",
                        href: "http://m.amap.com/search/view/keywords=" + encodeURI(this._mobileActions().location)
                    }, i.createElement("div", {
                        className: "fa fa-map-marker"
                    }))) : null), this._mobileActions().email ? i.createElement("li", {
                        className: "pad",
                        key: "10014"
                    }, i.createElement("a", {
                        target: "_blank",
                        href: "mailto:" + this._mobileActions().email
                    }, i.createElement("div", {
                        className: "entypo entypo-mail"
                    }))) : null)))
                }.apply(this, [])
            }
        },
        428987: function(e, t, a) {
            var n = a(353147),
                i = a(223765),
                l = a(752424),
                r = a(663978),
                o = a(834074),
                s = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            });
            var c = a(205872),
                u = (0, s.default)(c),
                d = a(812077),
                m = (0, s.default)(d);
            a(241539), a(339714), a(974916), a(864765), a(115306);
            var f = a(977766),
                g = (0, s.default)(f),
                p = a(678580),
                h = (0, s.default)(p),
                b = a(439969),
                v = (0, s.default)(b),
                w = a(277149),
                _ = (0, s.default)(w),
                k = a(981643),
                y = (0, s.default)(k),
                M = a(2991),
                S = (0, s.default)(M),
                E = a(620116),
                C = (0, s.default)(E),
                N = a(694473),
                P = (0, s.default)(N),
                I = a(729828),
                L = (0, s.default)(I),
                A = a(933032),
                B = (0, s.default)(A),
                T = a(223336),
                D = (0, s.default)(T),
                x = a(366757),
                O = (0, s.default)(x),
                H = a(45697),
                U = (0, s.default)(H),
                j = a(234584),
                R = (0, s.default)(j),
                G = a(907423),
                V = (0, s.default)(G),
                F = a(229081),
                q = (0, s.default)(F),
                z = Se(a(143268)),
                Z = a(680523),
                $ = (0, s.default)(Z),
                Q = a(399069),
                W = (0, s.default)(Q),
                J = a(815549),
                K = (0, s.default)(J),
                X = a(818166),
                Y = (0, s.default)(X),
                ee = Se(a(496486)),
                te = a(183123),
                ae = (0, s.default)(te),
                ne = a(805803),
                ie = a(269339),
                le = (0, s.default)(ie),
                re = a(833019),
                oe = (0, s.default)(re),
                se = Se(a(144726)),
                ce = Se(a(647168)),
                ue = a(332578),
                de = a(879042),
                me = a(786483),
                fe = (0, s.default)(me),
                ge = a(365940),
                pe = (0, s.default)(ge),
                he = a(517563),
                be = (0, s.default)(he),
                ve = a(871745),
                we = (0, s.default)(ve),
                _e = a(217136),
                ke = a(743050),
                ye = (0, s.default)(ke);

            function Me(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    a = new l;
                return (Me = function(e) {
                    return e ? a : t
                })(e)
            }

            function Se(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" != typeof e) return {
                    default: e
                };
                var a = Me(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    l = r && o;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var c = l ? o(e, s) : null;
                        c && (c.get || c.set) ? r(n, s, c) : n[s] = e[s]
                    }
                return n.default = e, a && a.set(e, n), n
            }
            var Ee = W.default.create({
                displayName: "MobileNavContainer",
                propTypes: {
                    isMultiPage: U.default.bool.isRequired,
                    slides: U.default.array.isRequired,
                    submenu: U.default.object.isRequired,
                    showLogo: U.default.bool.isRequired,
                    showMobileMenu: U.default.bool.isRequired,
                    mobileActions: U.default.object.isRequired,
                    enableSiteSearch: U.default.bool,
                    showSocialMedia: U.default.bool,
                    socialMediaList: U.default.any,
                    socialMediaContactList: U.default.any,
                    socialMediaButtonList: U.default.any,
                    socialMediaListType: U.default.any
                },
                getInitialState: function() {
                    return {
                        isOpen: !1,
                        isShowNavButton: !1
                    }
                },
                getIsSectionHidden: function(e) {
                    return (0, _e.isHiddenSectionByName)(e)
                },
                _permalink: function() {
                    return R.default.getPermalink()
                },
                _getExternalLinkUrl: function(e) {
                    var t = e.link_type,
                        a = e.url,
                        n = e.page_id,
                        i = e.section_id;
                    if ("section" === t) return Y.default.getExternalLinkUrl(t, a, n, i);
                    var l = z.getExternalLinkMappingRS(a, V.default.getPagesList());
                    return a = null != l.publicURL ? l.publicURL : a, z.addProtocol(a)
                },
                _getExternalLinkTarget: function(e) {
                    var t = e.link_type,
                        a = e.new_target;
                    return "section" !== t && a ? "_blank" : "_self"
                },
                _getHashLink: function(e) {
                    var t, a, n, i = Y.default.getCurrentPageType(),
                        l = R.default.getId(),
                        r = "preview" === R.default.getSiteMode() ? (0, g.default)(t = "/s/sites/".concat(l)).call(t, "/preview", "?mode=iframe&v4=1#") : ae.default.getFromSiteToApp() ? "/?site2app=1#" : "/#";
                    if (n = (0, h.default)(a = ["productPage", "itemPage", "storePage", "blogPage"]).call(a, i) ? r : "#", ae.default.getIsBlog() && ye.default.getAiSiteBuilderIframeUrl()) {
                        var o = new v.default(ye.default.getAiSiteBuilderIframeUrl());
                        return o.hash = 0 === e ? "" : n + (e + 1), o.toString()
                    }
                    return n + (e + 1)
                },
                _mobileMenuHasContent: function() {
                    var e, t, a = R.default.getIsMembershipEnabled(),
                        n = R.default.getMembershipSettings(),
                        i = R.default.getConnectedSiteList() || [];
                    return !!(a && n && (n.isLoginShownInNavBar || n.canRegister || (0, h.default)(t = ["anyone", "paid_subscription"]).call(t, n.registrationMethod))) || (!!this.props.submenu.list.length || !!this.props.enableSiteSearch || i.length > 0 || (this.props.isMultiPage ? this.props.slides.length : (0, _.default)(e = this.props.slides).call(e, (function(e) {
                        return e.components.slideSettings.show_nav
                    }))))
                },
                _mobileActions: function() {
                    return this.props.mobileActions
                },
                _hasOldMobileActions: function() {
                    if (R.default.getIsNewMobileActions()) return !1;
                    var e = this._mobileActions(),
                        t = e.email,
                        a = e.location,
                        n = e.phone,
                        i = e.sms;
                    return Boolean(t) || Boolean(a) || Boolean(n) || Boolean(i)
                },
                _shouldShowOldMobileActions: function() {
                    return !R.default.getIsNewMobileActions()
                },
                _shouldShowMobileShoppingCart: function() {
                    return R.default.getIsNewMobileActions()
                },
                _showNavbar: function() {
                    return this.props.showMobileMenu
                },
                _toggleHamburgerMenu: function() {
                    return $B.TH.Core.toggleDrawer()
                },
                _onClickMobileMenu: function(e) {
                    if (ae.default.getIsBlog()) {
                        var t = e.target,
                            a = t.host,
                            n = t.hash;
                        if (n) {
                            var i, l, r;
                            if (-1 !== (0, y.default)(i = ["secure_show", "preview"]).call(i, R.default.getSiteMode())) return void(window.location = document.referrer + n);
                            window.location = (0, g.default)(l = (0, g.default)(r = "".concat(window.location.protocol, "//")).call(r, a, "/")).call(l, n)
                        }
                    }
                    return this._toggleHamburgerMenu()
                },
                _onClickMobileShoppingCart: function() {
                    if ((0, D.default)(".navbar-drawer-bar").hasClass("drawer-open")) return this._toggleHamburgerMenu()
                },
                _getSiteSearchUrl: function() {
                    var e = R.default.getData("id");
                    switch (R.default.getSiteMode()) {
                        case "preview":
                            return $.default.PAGE.PREVIEW_MULTIPAGE(e, "search_page");
                        case "show":
                            return $.default.PAGE.SHOW_MULTIPAGE("/search");
                        default:
                            return ""
                    }
                },
                _onClickMobileSearch: function() {
                    if ((0, D.default)(".navbar-drawer-bar").hasClass("drawer-open")) return this._toggleHamburgerMenu()
                },
                _onClickDrawerMask: function() {
                    return $B.TH.Core.toggleDrawer()
                },
                _onClickMultiPageMobileMenu: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = this;
                    return function(i) {
                        var l, r, o, s;
                        if (ae.default.getIsBlog() && ye.default.getAiSiteBuilderIframeUrl()) {
                            var c, u = new v.default(ye.default.getAiSiteBuilderIframeUrl());
                            u.search = (0, g.default)(c = "".concat(u.search)).call(c, 0 === t ? "" : "&uid=".concat(e.uid)), window.location.href = u.toString()
                        } else if (-1 !== (0, y.default)(l = ["secure_show"]).call(l, R.default.getSiteMode())) {
                            var d = new v.default(document.referrer),
                                m = be.default.parse(d.search);
                            m.uid = e.uid, d.search = "?".concat(be.default.stringify(m)), window.location.href = d.toString()
                        }
                        if (n._toggleHamburgerMenu(), !(e.path && -1 !== (0, y.default)(r = e.path).call(r, "http") || e.newTarget)) {
                            i.preventDefault();
                            var f = e.path || "";
                            switch (R.default.getSiteMode()) {
                                case "editor":
                                    return K.default.replace(f);
                                case "preview":
                                case "show":
                                    if ((0, _.default)(o = q.default.getNav()).call(o, (function(t) {
                                            return (t.paidMemberOnly || t.memberOnly) && t.name === e.path
                                        })) && !a(836808).get("authenticationToken")) return void(ce.getStore().dispatch && ce.getStore().dispatch({
                                        type: "@MODELS/DIALOGS/OPEN_DIALOG",
                                        payload: {
                                            name: "memberDialog",
                                            options: {
                                                currentView: "LOGIN",
                                                redirectPath: e.path
                                            }
                                        }
                                    }));
                                    var p = (0, _.default)(s = q.default.getNav()).call(s, (function(t) {
                                            return (t.hasPassword || t.memberOnly || t.paidMemberOnly) && t.name === e.path
                                        })),
                                        h = ae.default.getIsBlog();
                                    return (p || h) && (window.location = e.path), 0 === (0, y.default)(f).call(f, "#") ? (0, D.default)(window).trigger("hashchange") : ne.browserHistory.push(f)
                            }
                        }
                    }
                },
                _onClickDropdown: function(e) {
                    return (0, D.default)(e.target).closest(".navbar-drawer-dropdown").toggleClass("expanded")
                },
                _onClickSubDropdown: function() {
                    return (0, D.default)(this).toggleClass("expanded")
                },
                _isSelected: function(e) {
                    return e === Y.default.getCurrentPageUID()
                },
                _onClickMobileActions: function() {
                    return $B.TH.Core.toggleMobileDrawer()
                },
                _onClickBackToOuterPage: function() {
                    return ne.browserHistory.goBack()
                },
                _isInnerPageFromSiteToApp: function() {
                    return ae.default.getFromSiteToApp() && ("productPage" === Y.default.getCurrentPageType() || "itemPage" === Y.default.getCurrentPageType())
                },
                _logoUrl: function() {
                    var e = Y.default.getBinding().sub("menu.components.image1").get();
                    return e ? (e = e && e.toJS(), se.createImage(e).getUrl("small")) : ""
                },
                _createTitle: function() {
                    var e = ae.default.getFromSiteToApp(),
                        t = Y.default.getCurrentPageType(),
                        a = Y.default.isHomePage(Y.default.getCurrentPageUID());
                    if (e) {
                        if (a && "sitePage" === t) return (0, m.default)("img", {
                            src: this._logoUrl(),
                            className: "nav-logo"
                        });
                        var i;
                        switch (t) {
                            case "productPage":
                            case "storePage":
                                i = n("EditorSettings|Store");
                                break;
                            case "itemPage":
                                i = n("EditorSettings|Portfolio");
                                break;
                            case "blogPage":
                                i = n("EditorSettings|Posts");
                                break;
                            case "sitePage":
                                i = Y.default.getCurrentPageBinding().get("title")
                        }
                        return (0, m.default)("span", {
                            className: "nav-title s-font-body"
                        }, void 0, i)
                    }
                    return null
                },
                _showBottomBorder: function() {
                    var e, t = Y.default.getCurrentPageType();
                    return (0, h.default)(e = ["sitePage", "productPage", "itemPage"]).call(e, t)
                },
                _getSocialMediaLink: function(e) {
                    return (0, ue.getSocialMedialUrl)(e)
                },
                _getSVGIconConfig: function(e) {
                    var t = e.type,
                        a = de.sxlSocialMediaMap[t] || {};
                    return {
                        svgCode: a.svgCode,
                        viewBox: a.viewBox,
                        iconType: a.iconType
                    }
                },
                _showSocialMedia: function(e, t) {
                    var a = t || {},
                        n = a.url,
                        i = a.type;
                    "QRCode" === (de.sxlSocialMediaMap[i] || {}).shareType && (e.preventDefault(), fe.default.Event.publish("socialMedia.showQRCode", {
                        url: n
                    }))
                },
                _showSocialMediaIcon: function() {
                    var e = this.props,
                        t = e.showSocialMedia,
                        a = e.socialMediaList,
                        n = e.socialMediaListType;
                    return !!(t && "link" === n && a.length > 0)
                },
                getNavSocialMediaButtonList: function() {
                    return Y.default.sub("s5Theme.nav.socialMediaButtonList")
                },
                _getSocialMediaItemArr: function() {
                    var e, t = a(857973),
                        n = this.props.socialMediaListType,
                        i = this.getNavSocialMediaButtonList(),
                        l = n,
                        r = (null === (e = i.get()) || void 0 === e ? void 0 : e.toArray()) || [],
                        o = (0, S.default)(r).call(r, (function(e, a) {
                            var n, r = e.get("type");
                            if ((0, y.default)(n = ["GPlus", "Renren"]).call(n, r) > -1 || !we.default.socialMediaList[r] && "SocialMediaItem" !== r) return null;
                            var o = l + r + e.get("id");
                            return O.default.createElement(t, (0, u.default)({
                                binding: i.sub(a),
                                listType: l,
                                key: o
                            }, ee.omit(e.toObject(), ee.isNull)))
                        }));
                    return (0, C.default)(o).call(o, (function(e) {
                        return null !== e
                    }))
                },
                _getHasSocialMediaButtonList: function() {
                    var e = this.props.socialMediaButtonList;
                    return e && (0, _.default)(e).call(e, (function(e) {
                        return "function" == typeof e.get ? e.get("show_button") : e.show_button
                    }))
                },
                _showSocialButtonList: function() {
                    var e = this.props,
                        t = e.showSocialMedia,
                        a = e.socialMediaListType;
                    return !(!t || "button" !== a || !this._getHasSocialMediaButtonList())
                },
                _getHasSocialMediaContactList: function() {
                    var e = this.props.socialMediaContactList;
                    return e && (0, _.default)(e).call(e, (function(e) {
                        return "function" == typeof e.get ? e.get("defaultValue") : e.defaultValue
                    }))
                },
                _showSocialContactList: function() {
                    return !(!this.props.showSocialMedia || !this._getHasSocialMediaContactList())
                },
                _getSocialPhoneData: function() {
                    var e = this.props.socialMediaContactList,
                        t = void 0 === e ? [] : e,
                        a = (0, P.default)(t).call(t, (function(e) {
                            return "SocialMediaPhone" === ("function" == typeof e.get ? e.get("type") : e.type)
                        }));
                    return ("function" == typeof a.get ? a.get("defaultValue") : a.defaultValue) || ""
                },
                _getSocialEmailData: function() {
                    var e = this.props.socialMediaContactList,
                        t = void 0 === e ? [] : e,
                        a = (0, P.default)(t).call(t, (function(e) {
                            return "SocialMediaEmail" === ("function" == typeof e.get ? e.get("type") : e.type)
                        }));
                    return ("function" == typeof a.get ? a.get("defaultValue") : a.defaultValue) || ""
                },
                _renderNavButton: function() {
                    var e = this,
                        t = null,
                        a = ae.default.getIsBlog(),
                        n = Y.default.getBinding();
                    if (!n) return null;
                    var i = n.sub("menu.components.button1"),
                        l = i.get("link_type"),
                        r = i.get("color"),
                        o = i.get("new_target"),
                        s = i.get("text"),
                        c = i.get("size"),
                        u = i.get("style"),
                        d = i.get("linkType"),
                        f = i.get("url");
                    if (i.get().size) {
                        var p;
                        a && (0, L.default)(f).call(f, "#") && (f = (0, g.default)(p = "".concat(window.location.host, "/")).call(p, f));
                        var h = n.sub("menu.components.background1"),
                            b = h.get("backgroundVariation"),
                            v = h.get("textColor");
                        t = (0, m.default)("div", {
                            className: "s-nav-btn s-mobile-nav-btn"
                        }, void 0, (0, m.default)(pe.default, {
                            backgroundVariation: b,
                            textColor: v,
                            link_type: l,
                            color: r,
                            new_target: o,
                            text: s,
                            url: f,
                            binding: i,
                            needCeiling: !0,
                            isNavBtn: !0,
                            size: c,
                            style: u,
                            linkType: d,
                            beforeClick: function() {
                                return e._onClickDrawerMask()
                            }
                        }))
                    }
                    return t
                },
                componentDidMount: function() {
                    var e = this;
                    (0, B.default)((function() {
                        var t = e.props.contextStore,
                            a = {
                                store: t,
                                siteStore: ce.getStore(),
                                isMobile: !0
                            };
                        le.default.renderLoginDropDown(a), le.default.renderMultiLangNav(a), Y.default.hasSection("ecommerce") && le.default.renderShoppingCart({
                            store: t
                        }), e.state.isShowNavButton || e.setState({
                            isShowNavButton: Boolean((0, D.default)('a[data-is-nav-btn="true"]').length)
                        })
                    }), 100)
                },
                render: function() {
                    return oe.default.apply(this)
                }
            });
            t.default = Ee, e.exports = t.default
        }
    }
]);