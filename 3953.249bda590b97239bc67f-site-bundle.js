/*! For license information please see 3953.249bda590b97239bc67f-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [3953], {
        994554: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = n(659370),
                o = n(389005),
                l = n(436173),
                r = n(348113),
                c = n(3325),
                m = n(716505);
            e.exports = function() {
                return s.createElement(m, (e = {
                    className: "s-new-hero-section s-section " + this._getSectionType() + " " + this._getPaddingClass() + " " + this._getMobileSectionHeight()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1"), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.props.inSectionSelector ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "812"
                }, s.createElement(c, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(i, a.assign({}, {
                    key: "BackgroundEditor",
                    bgClassNames: this.getThemeFeature("backgroundColorClassNames")
                }, this.getComponentProps("background1"))), this._getIsShowLayoutSelector() ? s.createElement(r, a.assign({}, {
                    key: "LayoutSelector",
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())) : null, s.createElement(o.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(l, a.assign({}, {
                    layout: this._getLayoutKey(),
                    key: "1708"
                }, this.getBackgroundProps("background1"))), "\n  ", this._renderContent(), "\n");
                var e, t, n
            }
        },
        959229: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(539232), n(845939)),
                o = (n(659370), n(389005), n(716505)),
                l = n(436173);
            n(3325), e.exports = function() {
                return s.createElement(o, (e = {
                    className: "s-new-media-section s-section " + this._getSectionType() + "  " + this._getContentAlignmentClass() + " " + this._getPaddingClass() + " " + this._getNewMobileLayoutClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(l, a.assign({}, {
                    key: "1832"
                }, this.getBackgroundProps("background1"))), s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(i, {
                    contentCheck: "repeatable1",
                    section: this,
                    binding: this.getDefaultBinding()
                })), "\n    ", this._renderRepeatable("repeatable1"), "\n  "));
                var e, t, n
            }
        },
        520396: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(659370)),
                o = n(389005),
                l = n(436173),
                r = n(916034),
                c = n(845939),
                m = n(716505),
                d = n(3325);
            e.exports = function() {
                return s.createElement(m, (e = {
                    className: "s-new-text-section s-section " + this._getSectionType() + " " + this._getPaddingClass() + " " + this._getTextStyleByBg()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1"), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.props.inSectionSelector ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "953"
                }, s.createElement(d, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(i, a.assign({}, {
                    key: "BackgroundEditor"
                }, this.getComponentProps("background1"))), this._getIsShowLayoutSelector() ? s.createElement(r, a.assign({}, {
                    key: "LayoutSelector",
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())) : null, s.createElement(o.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(l, a.assign({}, {
                    key: "1782"
                }, this.getBackgroundProps("background1"))), s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "clearfix"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(c, {
                    contentCheck: "repeatable1",
                    section: this,
                    binding: this.getDefaultBinding()
                }))), s.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, "\n      ", this._renderRepeatable("repeatable1"), "\n    ")));
                var e, t, n
            }
        },
        163696: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(365940), n(659370)),
                o = n(389005),
                l = n(436173),
                r = n(997542),
                c = (n(845939), n(716505)),
                m = n(3325);
            e.exports = function() {
                return s.createElement(c, (e = {
                    className: "s-new-title-section s-section " + this._getSectionType() + " " + this._getPaddingClass() + " " + this._getMobileSectionHeight()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1"), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.props.inSectionSelector ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "1011"
                }, s.createElement(m, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(i, a.assign({}, {
                    key: "BackgroundEditor"
                }, this.getComponentProps("background1"))), this._getIsShowLayoutSelector() ? s.createElement(r, a.assign({}, {
                    key: "LayoutSelector",
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())) : null, s.createElement(o.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(l, a.assign({}, {
                    layout: this._getLayoutKey(),
                    key: "1840"
                }, this.getBackgroundProps("background1"))), "\n  ", this._renderContent(), "\n");
                var e, t, n
            }
        },
        424152: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(497279), n(659370), n(389005), n(357646), n(845939)),
                o = n(436173),
                l = (n(3325), n(716505));
            e.exports = function() {
                return s.createElement(l, (e = {
                    className: "s-process-section s-section " + this._getPaddingClass() + " " + this._getTextStyleByBg()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? s.createElement(o, a.assign({}, {
                    key: "1801"
                }, this.getBackgroundProps("background1"))) : null, s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(i, {
                    contentCheck: "repeatable1",
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                }), s.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, "\n        ", this._renderRepeatable("repeatable1"), "\n      "))));
                var e, t, n
            }
        },
        277139: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(436173)),
                o = n(659370),
                l = (n(389005), n(845939)),
                r = n(610733),
                c = n(716505),
                m = n(430918);
            e.exports = function() {
                return s.createElement(c, (e = {
                    className: "s-block-section s-section " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1"), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.isPreviewMode() ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "878"
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(o, a.assign({}, {
                    key: "972"
                }, this.getComponentProps("background1"))), s.createElement(m, a.assign({}, {
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding,
                    key: "1092"
                }, this._getLayoutProps())), null) : null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? s.createElement(i, a.assign({}, {
                    key: "1438"
                }, this.getBackgroundProps("background1"))) : null, s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(l, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), s.createElement("div", {
                    className: "alignment-container " + this.sbUniformTextAlignment("text1 text2") + (this.isState("editor") ? " s-arranging" : "")
                }, s.createElement(r.default, a.assign({}, {
                    binding: this.getComponentBinding("block1"),
                    items: this.getComponentBinding("block1").sub("items").get().toArray(),
                    themeFeature: this.getWholeThemeFeature(),
                    isHiddenSection: this.getComponentBinding("slideSettings").get("hidden_section"),
                    sectionIndex: this.props.index
                }, this.getComponentProps("block1"))))));
                var e, t, n
            }
        },
        125973: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(959229));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        261844: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-columns-thumb s-section-thumb"
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "171"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text2.value
                    },
                    key: "348"
                }) : null)), this.props.content.components.repeatable1.list.length ? s.createElement("div", {
                    className: "p100",
                    key: "550"
                }, s.createElement.apply(this, ["div", {
                    className: "columns-media"
                }, a.map(this._getRepetableList(this.props.content.components.repeatable1.list), function(e, t) {
                    return s.createElement("div", {
                        className: "column-image",
                        key: t
                    }, s.createElement("div", {
                        className: "image-wrapper"
                    }, s.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), s.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? s.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "992"
                    }) : null, e.components.text3.value ? s.createElement("div", {
                        className: "item-body-text s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text3.value
                        },
                        key: "1152"
                    }) : null))
                }.bind(this))])) : null))
            }
        },
        325020: function(e, t, n) {
            "use strict";
            var s = n(353147),
                a = n(366757),
                i = (n(496486), n(589499)),
                o = n(271866);
            e.exports = function() {
                return a.createElement("div", {
                    className: "s-contact-form-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement("div", {
                    className: "p100"
                }, a.createElement("div", {
                    className: "title-group"
                }, a.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: s("Sections|" + this.props.content.components.text1.value)
                    }
                }), a.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: s("Sections|" + this.props.content.components.text2.value)
                    }
                })), a.createElement("div", {
                    className: "form-thumb s-font-body"
                }, a.createElement("div", {
                    className: "form-wrapper"
                }, a.createElement("input", {
                    placeholder: s("Sections|" + this.props.content.components.email1.name_label)
                }), a.createElement("input", {
                    placeholder: s("Sections|" + this.props.content.components.email1.email_label)
                }), a.createElement("textarea", {
                    placeholder: s("Sections|" + this.props.content.components.email1.message_label)
                }), a.createElement("div", {
                    className: "button"
                }, s("Sections|" + this.props.content.components.email1.submit_label))), a.createElement(o, {}, a.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/contact_map.png")
                }), a.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/contact_map_sxl.png")
                }))))))
            }
        },
        285192: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(163696));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        829088: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = n(436173),
                o = n(845939),
                l = (n(755802), n(183123), n(659370)),
                r = n(389005),
                c = n(655600),
                m = n(716505),
                d = (i = n(436173), n(430918)),
                u = n(3325);
            e.exports = function() {
                return s.createElement(m, (e = {
                    className: "s-donation-section s-section " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.props.inSectionSelector ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "1156"
                }, s.createElement(u, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(l, a.assign({}, {
                    key: "BackgroundEditor",
                    wasMinimal: !0
                }, this.getComponentProps("background1"))), s.createElement(d, a.assign({}, {
                    key: "LayoutSelector",
                    hiddenAiMobile: !0,
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())), s.createElement(r.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(i, a.assign({}, {
                    key: "2030"
                }, this.getBackgroundProps("background1"))), s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(o, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), s.createElement("div", {
                    className: "s-ecommerce-container"
                }, s.createElement(c, a.assign({}, {
                    sectionStyleProps: this._getSectionStyleProps(),
                    sbClass: this.sbUniformTextAlignment("text1 text2"),
                    key: "2429"
                }, this.getComponentProps("donation1"))), null)));
                var e, t, n
            }
        },
        475448: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = n(294184),
                o = n(357646),
                l = n(328043),
                r = n(432996),
                c = n(442051),
                m = n(371016),
                d = (n(504180), n(183123), n(659370), n(716505)),
                u = n(173327),
                g = n(21053);
            n(3325), e.exports = function() {
                function e(e, t) {
                    var n = this.props.showTermsLink;
                    return s.createElement("div", {
                        className: "clearfix has-copy-right",
                        key: "6263"
                    }, s.createElement("div", {
                        className: "columns no-float sixteen"
                    }, s.createElement("div", {
                        className: "separate-line"
                    })), s.createElement("div", {
                        className: "columns no-float s-text-color-gray " + this.sbUniformTextAlignment("copyright") + " " + a.transform({
                            ten: n || this.props.showPrivacyPolicyLink,
                            sixteen: !n && !this.props.showPrivacyPolicyLink
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        binding: e,
                        onlyNormalToolbar: !0
                    }, e.get().toObject())))), n || this.props.showPrivacyPolicyLink ? s.createElement("div", {
                        className: "columns no-float s-text-color-gray six",
                        key: "6975"
                    }, s.createElement("div", {
                        className: "right-align s-footer-text",
                        style: {
                            marginTop: "-10px"
                        }
                    }, n ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "7170"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "7294"
                    }) : null)) : null)
                }

                function t(e, t) {
                    var n = this.props.showTermsLink;
                    return s.createElement("div", {
                        className: "clearfix has-copy-right",
                        key: "9604"
                    }, s.createElement("div", {
                        className: "columns no-float sixteen"
                    }, s.createElement("div", {
                        className: "separate-line"
                    })), s.createElement("div", {
                        className: "columns no-float s-text-color-gray " + this.sbUniformTextAlignment("copyright") + " " + a.transform({
                            ten: n || this.props.showPrivacyPolicyLink,
                            sixteen: !n && !this.props.showPrivacyPolicyLink
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        binding: e,
                        onlyNormalToolbar: !0
                    }, e.get().toObject())))), n || this.props.showPrivacyPolicyLink ? s.createElement("div", {
                        className: "columns no-float s-text-color-gray six",
                        key: "10316"
                    }, s.createElement("div", {
                        className: "right-align s-footer-text",
                        style: {
                            marginTop: "-10px"
                        }
                    }, n ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "10511"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "10635"
                    }) : null)) : null)
                }

                function n(e, t) {
                    var n = this.props.showTermsLink;
                    return s.createElement("div", {
                        className: "clearfix image-form-media"
                    }, s.createElement("div", {
                        className: "columns footer-media-panel no-float " + ((n || this.props.showPrivacyPolicyLink) && this.sbHasContent("socialMedia") ? "between" : "center")
                    }, this.props.showPrivacyPolicyLink || n ? s.createElement("div", {
                        className: "link s-footer-text",
                        key: "13747"
                    }, n ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "13848"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "13972"
                    }) : null) : null, this.sbHasContent("socialMedia") ? s.createElement("div", {
                        key: "14082"
                    }, s.createElement(r.WaypointLazy, a.assign({}, {
                        binding: t,
                        ")": !0
                    }, t.toJS()))) : null))
                }
                return this.props.showFooter ? function() {
                    var p, h, y, f = this.getComponentBinding("copyright"),
                        v = this.getComponentBinding("socialMedia");
                    return s.createElement(d, (p = {
                        className: "s-footer-section s-section " + a.transform({
                            "has-terms-link": this.props.showTermsLink,
                            "has-new-mobile-actions": this._hasMobileActions(),
                            "show-strikingly-logo": this._showStrikinglyLogo(),
                            "new-text-color-logic": this._showNewTextColorLogic(),
                            [this._getTextStyleByBg()]: !0,
                            "new-footer-hyperlink-style": this._getEnableTweakFooterHyperlinkColor()
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ") + " " + this._getPaddingClass(),
                        key: "1023"
                    }, h = this.getThemeFeature("disableBackgrounds") ? {} : this._getBackgroundProps(), y = a.assign({}, p, h), p.hasOwnProperty("style") && (y.style = a.defaults(y.style, p.style)), p.hasOwnProperty("className") && h.hasOwnProperty("className") && (y.className = h.className + " " + p.className), y), null, "vertical" == this._getLayout() ? s.createElement("div", {
                        className: "container s-layout-vertical",
                        key: "2506"
                    }, s.createElement("div", {
                        className: "columns sixteen " + this.sbUniformTextAlignment("copyright")
                    }, s.createElement("div", {}, s.createElement(r.WaypointLazy, a.assign({}, {
                        binding: v,
                        ")": !0
                    }, v.toJS()))), s.createElement("div", {
                        className: "s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        binding: f,
                        isPreviewMode: !1,
                        onlyNormalToolbar: !0
                    }, f.get().toObject()))), this.props.showTermsLink ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "3039"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "3170"
                    }) : null, s.createElement(u, {}))) : null, "horizontal" == this._getLayout() ? s.createElement("div", {
                        className: "container s-layout-horizontal",
                        key: "3319"
                    }, s.createElement("div", {
                        className: "columns eight"
                    }, s.createElement("div", {}, s.createElement(r.WaypointLazy, a.assign({}, {
                        binding: v,
                        ")": !0
                    }, v.toJS())))), s.createElement("div", {
                        className: "columns eight"
                    }, s.createElement("div", {
                        className: "right-align s-footer-text"
                    }, this.isEditMode() || f.get("value") ? s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        binding: f,
                        onlyNormalToolbar: !0,
                        key: "3665"
                    }, f.get().toObject())) : null, this.props.showTermsLink ? s.createElement(c, {
                        className: i("s-font-body", {
                            "s-compact": !this.isEditMode() && !f.get("value")
                        }) + " " + this.sbUniformTextAlignment("copyright"),
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "3878"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: i("s-font-body", {
                            "s-compact": !this.isEditMode() && !f.get("value")
                        }) + " " + this.sbUniformTextAlignment("copyright"),
                        key: "4145"
                    }) : null, s.createElement(u, {})))) : null, "grid" == this._getLayout() ? s.createElement("div", {
                        className: "container s-layout-grid",
                        key: "4443"
                    }, s.createElement("div", {
                        className: "clearfix"
                    }, this.sbHasContent("text1") ? s.createElement("div", {
                        className: "columns four half-fixed",
                        key: "4550"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text1"),
                        isPreviewMode: !1,
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text1"))))) : null, this.sbHasContent("text2") ? s.createElement("div", {
                        className: "columns four half-fixed",
                        key: "4924"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text2"),
                        isPreviewMode: !1,
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text2"))))) : null, this.sbHasContent("text3") ? s.createElement("div", {
                        className: "columns four half-fixed",
                        key: "5298"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text3"),
                        isPreviewMode: !1,
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text3"))))) : null, s.createElement("div", {
                        className: "columns float-right four half-fixed right-align"
                    }, this.sbHasContent("socialMedia") ? s.createElement("div", {
                        key: "5742"
                    }, s.createElement(r.WaypointLazy, a.assign({}, {
                        binding: v,
                        ")": !0
                    }, v.toJS()))) : null, this.sbHasContent("copyright") ? null : s.createElement("div", {
                        className: "s-footer-text",
                        key: "5920"
                    }, this.props.showTermsLink ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "5998"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "6133"
                    }) : null))), this.sbHasContent("copyright") ? e.apply(this, [f, v]) : null, s.createElement(u, {})) : null, "image" == this._getLayout() ? s.createElement("div", {
                        className: "container s-layout-grid s-layout-image",
                        key: "7469"
                    }, s.createElement("div", {
                        className: "clearfix"
                    }, this.sbHasContent("image1") ? s.createElement("div", {
                        className: "columns half-fixed img three",
                        key: "7592"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(l, a.assign({}, {
                        size: "small",
                        needTrim: "true",
                        disableAiMode: !0,
                        isPreviewMode: !1,
                        aiDesign: !1
                    }, this.getReduxComponentProps("image1"))))) : null, this.sbHasContent("text1") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "7960"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text1"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text1"))))) : null, this.sbHasContent("text2") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "8311"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text2"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text2"))))) : null, this.sbHasContent("text3") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "8662"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text3"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text3"))))) : null, s.createElement("div", {
                        className: "columns float-right four half-fixed right-align"
                    }, this.sbHasContent("socialMedia") ? s.createElement("div", {
                        key: "9083"
                    }, s.createElement(r.WaypointLazy, a.assign({}, {
                        binding: v,
                        ")": !0
                    }, v.toJS()))) : null, this.sbHasContent("copyright") ? null : s.createElement("div", {
                        className: "s-footer-text",
                        key: "9261"
                    }, this.props.showTermsLink ? s.createElement(c, {
                        className: "s-font-body",
                        hasPrivacyPolicy: this.props.showPrivacyPolicyLink,
                        key: "9339"
                    }) : null, this.props.showPrivacyPolicyLink ? s.createElement(m, {
                        className: "s-font-body",
                        key: "9474"
                    }) : null))), this.sbHasContent("copyright") ? t.apply(this, [f, v]) : null, s.createElement(u, {})) : null, "imageForm" == this._getLayout() ? s.createElement("div", {
                        className: "container s-layout-grid s-layout-image-form",
                        key: "10810"
                    }, s.createElement("div", {
                        className: "clearfix footer-body"
                    }, this.sbHasContent("image1") ? s.createElement("div", {
                        className: "columns half-fixed img three",
                        key: "10954"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(l, a.assign({}, {
                        size: "small",
                        needTrim: "true",
                        disableAiMode: !0,
                        isPreviewMode: !1,
                        aiDesign: !1
                    }, this.getReduxComponentProps("image1"))))) : null, this.sbHasContent("text1") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "11322"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text1"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text1"))))) : null, this.sbHasContent("text2") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "11673"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text2"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text2"))))) : null, this.sbHasContent("text3") ? s.createElement("div", {
                        className: "columns half-fixed three",
                        key: "12024"
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        binding: this.getComponentBinding("text3"),
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text3"))))) : null, this.sbHasContent("text4") ? s.createElement("div", {
                        className: "columns email-form float-right left-align " + this._getEmailFormWidthByFullSection(),
                        key: "12375"
                    }, s.createElement("div", {
                        className: "s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        applyWordBreaks: !0,
                        onlyNormalToolbar: !0
                    }, this.getComponentProps("text4")))), s.createElement(g, a.assign({}, {
                        componentsBinding: this.getDefaultBinding().get("components"),
                        sessionId: this._getSectionId(),
                        signup: !0
                    }, this.getComponentProps("email1")))) : null), this.sbHasContent("copyright") ? s.createElement("div", {
                        className: "clearfix has-copy-right",
                        key: "12930"
                    }, s.createElement("div", {
                        className: "columns no-float sixteen"
                    }, s.createElement("div", {
                        className: "separate-line"
                    })), s.createElement("div", {
                        className: "columns no-float s-text-color-gray " + this.sbUniformTextAlignment("copyright")
                    }, s.createElement("div", {
                        className: "left-align s-footer-text"
                    }, s.createElement(o, a.assign({}, {
                        textType: "body",
                        sizeType: "body",
                        binding: f,
                        onlyNormalToolbar: !0
                    }, f.get().toObject()))))) : null, n.apply(this, [f, v]), s.createElement(u, {})) : null)
                }.apply(this, []) : null
            }
        },
        810915: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-gallery-thumb s-section-thumb"
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "171"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "348"
                }) : null)), this.props.content.components.gallery1.sources.length ? s.createElement("div", {
                    className: "p100",
                    key: "550"
                }, s.createElement.apply(this, ["div", {
                    className: "gallery-media"
                }, a.map(this._getRepetableList(this.props.content.components.gallery1.sources, 8), function(e, t) {
                    return s.createElement("div", {
                        className: "gallery-image",
                        key: t
                    }, s.createElement("img", {
                        src: this._getImageUrl(e, !0)
                    }))
                }.bind(this))])) : null))
            }
        },
        349906: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(994554));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        821597: function(e, t, n) {
            "use strict";
            var s = n(353147),
                a = n(366757);
            n(496486), e.exports = function() {
                return a.createElement("div", {
                    className: "s-hero-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement("div", {
                    className: "p50"
                }, a.createElement("div", {
                    className: "media"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.media1.image)
                }))), a.createElement("div", {
                    className: "p50"
                }, a.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: s("Sections|" + this.props.content.components.text1.value)
                    }
                }), a.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: s("Sections|" + this.props.content.components.text2.value)
                    }
                }), a.createElement("div", {
                    className: "button s-font-body"
                }, s("Sections|" + this.props.content.components.button1.text)))))
            }
        },
        4878: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(659370)),
                o = n(389005),
                l = n(436173),
                r = n(878477),
                c = n(845939),
                m = n(716505),
                d = n(430918),
                u = n(3325);
            e.exports = function() {
                return s.createElement(m, (e = {
                    className: "s-html-section s-section " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1"), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "964"
                }, s.createElement(u, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(i, a.assign({}, {
                    key: "BackgroundEditor",
                    bgClassNames: this.getThemeFeature("backgroundColorClassNames")
                }, this.getComponentProps("background1"))), s.createElement(d, a.assign({}, {
                    key: "LayoutSelector",
                    hiddenAiMobile: !0,
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())), s.createElement(o.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? s.createElement(l, a.assign({}, {
                    key: "1852"
                }, this.getBackgroundProps("background1"))) : null, s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(c, {
                    section: this,
                    binding: this.getDefaultBinding()
                }), s.createElement(r, this.getComponentProps("html1")))));
                var e, t, n
            }
        },
        937756: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(460542), n(357646), n(845939)),
                o = (n(659370), n(389005), n(716505)),
                l = n(436173);
            n(3325), e.exports = function() {
                return s.createElement(o, (e = {
                    className: "s-icons-section s-section " + this._getPaddingClass() + " " + this._getIsNewMobileLayoutClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : s.createElement(l, a.assign({}, {
                    key: "1797"
                }, this.getBackgroundProps("background1"))), s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(i, {
                    contentCheck: "repeatable1",
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                })), s.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, "\n      ", this._renderRepeatable("repeatable1"), "\n    ")));
                var e, t, n
            }
        },
        518503: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = n(271866);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-icons-thumb s-section-thumb"
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "248"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text2.value
                    },
                    key: "425"
                }) : null)), s.createElement("div", {
                    className: "p100"
                }, s.createElement(i, {}, s.createElement.apply(this, ["div", {
                    className: "icons-media s-font-body"
                }, a.map(this._getRepetableList(this.props.content.components.repeatable1.list, 4), function(e, t) {
                    return s.createElement("div", {
                        className: "icon",
                        key: t
                    }, s.createElement("img", {
                        src: this._getImageUrl(e.components.image1)
                    }), e.components.text1.value ? s.createElement("div", {
                        className: "item-subtitle",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "939"
                    }) : null)
                }.bind(this))]), s.createElement("div", {
                    className: "icons-media s-font-body"
                }, s.createElement("div", {
                    className: "icon"
                }, s.createElement("img", {
                    src: "//uploads.sxlcdn.com/static/icons/black/wechat-icon.png"
                }), s.createElement("div", {
                    className: "item-subtitle"
                }, "微信")), s.createElement("div", {
                    className: "icon"
                }, s.createElement("img", {
                    src: "//uploads.sxlcdn.com/static/icons/black/weibo-icon.png"
                }), s.createElement("div", {
                    className: "item-subtitle"
                }, "微博")), s.createElement("div", {
                    className: "icon"
                }, s.createElement("img", {
                    src: "//uploads.sxlcdn.com/page/images/icons/phone-icon.png"
                }), s.createElement("div", {
                    className: "item-subtitle"
                }, "电话")), s.createElement("div", {
                    className: "icon"
                }, s.createElement("img", {
                    src: "//uploads.sxlcdn.com/page/images/icons/email-icon.png"
                }), s.createElement("div", {
                    className: "item-subtitle"
                }, "邮箱")))))))
            }
        },
        219329: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(850257), n(357646), n(659370), n(389005), n(436173), n(845939), n(716505), n(183123), n(520396));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        489336: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "s-info-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "240"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text2.value
                    },
                    key: "417"
                }) : null)), s.createElement("div", {
                    className: "p100"
                }, s.createElement.apply(this, ["div", {
                    className: "info-boxes"
                }, a.map(this._getRepetableList(this.props.content.components.repeatable1.list, 4), function(e, t) {
                    return s.createElement("div", {
                        className: "info-box",
                        key: t
                    }, e.components.text1.value ? s.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "822"
                    }) : null, e.components.text2.value ? s.createElement("div", {
                        className: "item-subtitle s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text2.value
                        },
                        key: "980"
                    }) : null)
                }.bind(this))]))))
            }
        },
        658875: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(959229));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        50288: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement.apply(this, ["div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "169"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text2.value
                    },
                    key: "346"
                }) : null), a.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return s.createElement("div", {
                        key: t
                    }, s.createElement("div", {
                        className: "media-image-thumb"
                    }, s.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), e.components.text1.value ? s.createElement("div", {
                        className: "item-body-text s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "767"
                    }) : null)
                }.bind(this))])))
            }
        },
        441959: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(184635), n(845939)),
                o = (n(755802), n(183123), n(332347)),
                l = n(659370),
                r = n(389005),
                c = n(192927),
                m = n(292019),
                d = n(716505),
                u = n(436173),
                g = n(3325);
            e.exports = function() {
                return s.createElement(d, (e = {
                    className: "s-portfolio-section s-section s-store-section " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() && !this.props.inSectionSelector ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "1386"
                }, s.createElement(g, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(l, a.assign({}, {
                    key: "BackgroundEditor",
                    wasMinimal: !0
                }, this.getComponentProps("background1"))), this._showLayoutButton() ? s.createElement(o, a.assign({}, {
                    key: "LayoutSelector",
                    hiddenAiMobile: !0,
                    layoutOptions: this._getLayoutOptions(),
                    isEcommerce: !1,
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())) : null, s.createElement(c, a.assign({}, {
                    key: "CategorySelector"
                }, this.getComponentProps("portfolio1"))), s.createElement(r.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? s.createElement(u, a.assign({}, {
                    key: "2410"
                }, this.getBackgroundProps("background1"))) : null, s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(i, {
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                })), s.createElement("div", {
                    className: "s-ecommerce-container"
                }, s.createElement(m, a.assign({}, {
                    sectionStyleProps: this._getSectionStyleProps(),
                    sbClass: this.sbUniformTextAlignment("text1 text2"),
                    sectionId: this._getSectionId(),
                    originSectionId: this._getOriginSectionId(),
                    inSectionSelector: this.props.inSectionSelector,
                    templateDummyData: this.props.templateDummyData,
                    isPreviewMode: this.isPreviewMode(),
                    buttonAlignmentClassName: this.getButtonAlignmentByTitleAndSubtitle(),
                    key: "2827"
                }, this.getComponentProps("portfolio1"))), null)));
                var e, t, n
            }
        },
        604366: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(424152));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        296295: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(959229));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        595950: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-rows-thumb s-section-thumb " + this._getSectionTypeClass()
                }, s.createElement("div", {
                    className: "s-section-thumb-content s-thumb-" + this._getLayout()
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "255"
                }) : null)), this.props.content.components.repeatable1.list.length ? s.createElement.apply(this, ["div", {
                    className: "p100",
                    key: "452"
                }, a.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return s.createElement("div", {
                        className: "row-container",
                        key: t
                    }, s.createElement("div", {
                        className: "rows-img"
                    }, s.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), s.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? s.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "820"
                    }) : null, e.components.text3.value ? s.createElement("div", {
                        className: "item-body-text s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text3.value
                        },
                        key: "978"
                    }) : null))
                }.bind(this))]) : null))
            }
        },
        52307: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(994554));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        528677: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486),
                i = (n(357646), n(184635)),
                o = n(845939),
                l = (n(755802), n(659370)),
                r = n(389005),
                c = n(716505),
                m = n(436173),
                d = n(430918),
                u = n(3325);
            e.exports = function() {
                return s.createElement(c, (e = {
                    className: "s-section s-social-feed-section " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = a.assign({}, e, t), e.hasOwnProperty("style") && (n.style = a.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), this.isEditMode() ? s.createElement("div", {
                    className: "s-section-editor-wrapper",
                    key: "1101"
                }, s.createElement(u, {
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index,
                    renderAIEditor: this._renderAIEditor,
                    isPreviewMode: this.isPreviewMode()
                }, this.getThemeFeature("disableBackgrounds") ? null : s.createElement(l, a.assign({}, {
                    key: "BackgroundEditor",
                    wasMinimal: !0
                }, this.getComponentProps("background1"))), s.createElement(d, a.assign({}, {
                    key: "LayoutSelector",
                    hiddenAiMobile: !0,
                    layoutOptions: this._getLayoutOptions(),
                    updateLayout: this._updateLayout,
                    updatePadding: this._updatePadding
                }, this._getLayoutProps())), s.createElement(r.default, {
                    key: "HideOrShowSection",
                    sectionBinding: this.getDefaultBinding(),
                    sectionIndex: this.props.index
                }))) : null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? s.createElement(m, a.assign({}, {
                    key: "1942"
                }, this.getBackgroundProps("background1"))) : null, s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "columns sixteen"
                }, s.createElement(o, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), s.createElement(i, {
                    componentName: "socialFeedComponent",
                    componentProps: this.getComponentProps("social_feed1"),
                    binding: this.getComponentBinding("social_feed1"),
                    key: "2266"
                }), null));
                var e, t, n
            }
        },
        458582: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(520396));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        667472: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = n(496486);
            e.exports = function() {
                return s.createElement("div", {
                    className: "no-bg s-section-thumb s-text-thumb"
                }, s.createElement("div", {
                    className: "s-section-thumb-content"
                }, s.createElement("div", {
                    className: "p100"
                }, s.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? s.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "168"
                }) : null, this.props.content.components.text2.value ? s.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text2.value
                    },
                    key: "345"
                }) : null), this.props.content.components.repeatable1.list.length ? s.createElement.apply(this, ["div", {
                    key: "538"
                }, a.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return s.createElement("div", {
                        className: "text-container",
                        key: t
                    }, e.components.text1.value ? s.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "738"
                    }) : null, e.components.text2.value ? s.createElement("div", {
                        className: "item-subtitle s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text2.value
                        },
                        key: "896"
                    }) : null)
                }.bind(this))]) : null)))
            }
        },
        595825: function(e, t, n) {
            "use strict";
            var s = n(366757),
                a = (n(496486), n(163696));
            e.exports = function() {
                return s.createElement("div", {}, "\n  ", a.apply(this), "\n")
            }
        },
        637906: function(e, t, n) {
            "use strict";
            var s = n(353147),
                a = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var o, l = n(487672),
                r = ((0, i.default)(l), n(694473)),
                c = (0, i.default)(r),
                m = n(394198),
                d = (0, i.default)(m),
                u = n(792695),
                g = (0, i.default)(u),
                p = n(234584),
                h = (0, i.default)(p),
                y = n(628568),
                f = {
                    mixins: [g.default],
                    displayName: "ContactFormSection",
                    _showMap: function() {
                        o.track("Add Map - Contact Form Section - Editor v1"), this.getComponentBinding("slideSettings").sub("display_settings").set("show_map", !0), this.savePage()
                    },
                    _hideMap: function() {
                        o.track("Remove Map - Contact Form Section - Editor v1"), this.getComponentBinding("slideSettings").sub("display_settings").set("show_map", !1), this.savePage()
                    },
                    _showContactInfo: function() {
                        o.track("Add Contact Info - Contact Form Section - Editor v1"), this.getComponentBinding("slideSettings").sub("display_settings").set("show_info", !0), this.savePage()
                    },
                    _hideContactInfo: function() {
                        o.track("Remove Contact Info - Contact Form Section - Editor v1"), this.getComponentBinding("slideSettings").sub("display_settings").set("show_info", !1), this.savePage()
                    },
                    _isContactInfoEmpty: function(e) {
                        return !(e.address || e.phone || e.hours || e.email)
                    },
                    _fixMapHeight: function(e) {
                        var t, n = $(e) || $("#s-map");
                        if (n.length)
                            if ($(window).width() >= 927) {
                                var s, a = (0, c.default)(s = n.closest(".s-contact-section")).call(s, ".s-email-form-inputs-group"),
                                    i = (0, c.default)(a).call(a, ".s-email-form-field"),
                                    o = (0, d.default)(i.first().css("padding-top"), 10) || 0,
                                    l = (0, d.default)(i.last().css("padding-bottom"), 10) || 0;
                                t = a.height() - o - l, t = Math.max(200, t), n.height(t).css({
                                    "margin-top": o,
                                    "margin-bottom": l
                                })
                            } else n.height(250).css({
                                "margin-top": 0,
                                "margin-bottom": 0
                            })
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _getButtonAlignment: function() {
                        try {
                            if (!h.default.getEnableFormAlignmentFix()) return null;
                            var e = this.getDefaultBinding().sub("components"),
                                t = (0, y.getSectionTextAlignment)(e, ["text2", "text1"]);
                            if (!h.default.getIsRtlLayout()) return t;
                            switch (t) {
                                case "left":
                                    return "right";
                                case "center":
                                    return "center";
                                case "justify":
                                case "right":
                                    return "left";
                                default:
                                    return "auto"
                            }
                        } catch (e) {
                            return null
                        }
                    },
                    _getInheritAlignment: function() {
                        try {
                            return this._getButtonAlignment() ? "".concat(this._getButtonAlignment(), "-align") : this.sbUniformTextAlignment("text1 text2")
                        } catch (e) {
                            return ""
                        }
                    },
                    render: function() {
                        return s("Editor|Contact Form"), s("Editor|Let viewers drop their name, email, and message."), this.getTemplate().apply(this)
                    }
                };
            t.default = f, e.exports = t.default
        },
        679669: function(e, t, n) {
            "use strict";
            var s = n(223765),
                a = n(752424),
                i = n(663978),
                o = n(834074),
                l = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = n(977766),
                c = (0, l.default)(r),
                m = n(51942),
                d = (0, l.default)(m),
                u = n(45697),
                g = (0, l.default)(u),
                p = n(881701),
                h = n(234584),
                y = (0, l.default)(h),
                f = n(818166),
                v = (0, l.default)(f),
                b = n(851172),
                E = w(n(792656)),
                k = n(442279),
                N = n(384887),
                x = (0, l.default)(N),
                P = w(n(496486)),
                _ = w(n(143393)),
                B = w(n(468811));

            function S(e) {
                if ("function" != typeof a) return null;
                var t = new a,
                    n = new a;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }

            function w(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== s(e) && "function" != typeof e) return {
                    default: e
                };
                var n = S(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = i && o;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var c = l ? o(e, r) : null;
                        c && (c.get || c.set) ? i(a, r, c) : a[r] = e[r]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var T = (0, k.createSelector)([function(e) {
                    return e.baseColor
                }], (function(e) {
                    return (0, p.css)("&.s-footer-section{.s-footer-text,.s-terms-link{color:", e, ";}}")
                })),
                C = (0, k.createSelector)([function(e) {
                    return e
                }], (function(e) {
                    return (0, p.css)("&.s-footer-section .s-footer-text a{color:", e, ";", !y.default.getEnableTweakFooterHyperlinkColor() && (0, p.css)("border-bottom:1px solid;span{border-bottom:1px solid;}"), "}")
                })),
                L = (0, k.createSelector)([function(e) {
                    return e.socialMediaBg
                }], (function(e) {
                    return (0, p.css)("&.s-footer-section\n        .s-component.s-social-media\n        ul.s-social-media-buttons\n        .s-social-icon{background:", e, ";}")
                })),
                M = {
                    observedProps: ["showFooter", "showTermsLink", "showPrivacyPolicyLink", "isPreviewMode"],
                    propTypes: {
                        showFooter: g.default.bool,
                        showTermsLink: g.default.bool,
                        showPrivacyPolicyLink: g.default.bool,
                        isPreviewMode: g.default.bool
                    },
                    displayName: "FooterSection",
                    componentWillMount: function() {
                        P.isUndefined(this.getDefaultBinding().get("background1")) && this.getComponentProps("background1");
                        var e = this._getBackground1Binding();
                        P.isUndefined(e.get("useSameBg")) && e.set("useSameBg", !0), P.isUndefined(e.get("backgroundApplySettings")) && e.set("backgroundApplySettings", _.fromJS({}))
                    },
                    componentDidUpdate: function(e) {},
                    _getLayoutOptions: function() {
                        var e = [{
                            name: "Vertical",
                            key: "vertical"
                        }, {
                            name: "Horizontal",
                            key: "horizontal"
                        }, {
                            name: "Grid",
                            key: "grid"
                        }, {
                            name: "Image",
                            key: "image"
                        }];
                        return y.default.getIsS5Theme() && e.push({
                            name: "ImageForm",
                            key: "imageForm"
                        }), e
                    },
                    _getPadding: function() {
                        var e = this.getDefaultBinding().get("padding");
                        return (e = e && e.toJS ? e.toJS() : e) || {
                            top: "normal",
                            bottom: "normal"
                        }
                    },
                    _getFooterLayoutProps: function() {
                        var e = this.getDefaultBinding();
                        return {
                            layoutVariation: e.get("layout_variation") || "",
                            padding: this._getPadding(),
                            binding: e
                        }
                    },
                    _getLayout: function() {
                        return this.getDefaultBinding().get("layout_variation") || "vertical"
                    },
                    _hasMobileActions: function() {
                        return y.default.hasNewMobileActions()
                    },
                    _showStrikinglyLogo: function() {
                        return v.default.getShowStrikinglyLogo()
                    },
                    _updateLayout: function(e) {
                        this.getDefaultBinding().sub("layout_variation").set(e)
                    },
                    _updatePadding: function(e) {
                        this.getDefaultBinding().sub("padding").set(e)
                    },
                    _getPaddingClass: function() {
                        var e, t = this.getDefaultBinding().get("padding"),
                            n = "half" === (t = t ? t.toJS ? t.toJS() : t : {
                                top: "normal",
                                bottom: "normal"
                            }).top ? "s-top-padding-half" : "none" === t.top ? "s-top-padding-none" : "",
                            s = "half" === t.bottom ? "s-bottom-padding-half" : "none" === t.bottom ? "s-bottom-padding-none" : "";
                        return (0, c.default)(e = "".concat(n, " ")).call(e, s)
                    },
                    _getEmailFormWidthByFullSection: function() {
                        return "full" === v.default.getBinding().sub("s5Theme.section").get("contentWidth") ? "three" : "four"
                    },
                    _showNewTextColorLogic: function() {
                        return y.default.getEnableTextColorFix()
                    },
                    _getEnableTweakFooterHyperlinkColor: function() {
                        return y.default.getEnableTweakFooterHyperlinkColor()
                    },
                    _getTextStyleByBg: function() {
                        var e, t, n, s, a = this.props.themeColor,
                            i = void 0 === a ? {} : a,
                            o = this._getUseSameBg(),
                            l = this.getDefaultBinding().get("components.background1");
                        o || this.isUndefinedPageUIDBgData() || (l = this.getPageUidBackground1Binding().get());
                        var r = null;
                        if (null !== (e = l) && void 0 !== e && e.get("userClassName")) r = b.userClassNameToColor[l.get("userClassName")];
                        else if (null !== (t = l) && void 0 !== t && t.get("backgroundColor")) {
                            var m;
                            r = null === (m = l) || void 0 === m ? void 0 : m.getIn(["backgroundColor", "value"])
                        }
                        var d = E.getColorInfoByBgData(r),
                            u = d.bgColor,
                            g = d.isImageOrVedio,
                            p = "",
                            h = null;
                        y.default.getEnableTextColorFix() && u && !g && (h = E.getTextColorSettingsByBgColor(u), p = T(h));
                        var f = "",
                            v = "";
                        if (y.default.getRemainingTextColorFix() && u && !g) {
                            var k = (h = h || E.getTextColorSettingsByBgColor(u)).baseColor,
                                N = E.getTextColorSettingsByBgColor(u, {
                                    color: "#a9aeb2"
                                }),
                                P = y.default.getEnableTweakFooterHyperlinkColor() ? null == N ? void 0 : N.color : k;
                            f = C(P);
                            var _ = i.highlight1,
                                B = (void 0 === _ ? null : _) || "#FFFFFF",
                                S = new x.default(B).showOnBg(u).fade(.5).toRgba();
                            v = L({
                                socialMediaBg: S
                            })
                        }
                        return (0, c.default)(n = (0, c.default)(s = "".concat(p, " ")).call(s, f, " ")).call(n, v)
                    },
                    _getBackground1Binding: function() {
                        return this.getDefaultBinding().sub("components.background1")
                    },
                    _getFooterBgKey: function() {
                        return this._getUseSameBg() ? "footerBg" : this._getUsePageUID()
                    },
                    _getUsePageUID: function() {
                        var e = this.props,
                            t = e.currentPageUID,
                            n = e.homePageUID;
                        return v.default.isPredefinedPage(t) ? n : t
                    },
                    isUndefinedPageUIDBgData: function() {
                        var e = this._getUsePageUID(),
                            t = this._getBackground1Binding().sub("backgroundApplySettings");
                        return P.isUndefined(null == t ? void 0 : t.get(e))
                    },
                    initPageUIDBgData: function() {
                        var e = this._getUsePageUID(),
                            t = this._getBackground1Binding(),
                            n = t.sub("backgroundApplySettings"),
                            s = t.get().set("useSameBg", void 0).set("backgroundApplySettings", void 0).set("id", B.v4());
                        n.set(e, _.fromJS(s))
                    },
                    _getUseSameBg: function() {
                        var e = this._getBackground1Binding();
                        return !!P.isUndefined(e.get("useSameBg")) || e.get("useSameBg")
                    },
                    _setUseSameBg: function(e) {},
                    getPageUidBackground1Binding: function() {
                        var e = this._getBackground1Binding(),
                            t = this._getUsePageUID();
                        return e.sub("backgroundApplySettings").sub(t)
                    },
                    _getBackgroundProps: function() {
                        if (this._getUseSameBg() || this.isUndefinedPageUIDBgData()) return this.getBackgroundProps("background1");
                        var e = this.getPageUidBackground1Binding(),
                            t = {
                                bgClassNames: this.getThemeFeature("backgroundColorClassNames"),
                                userClassName: this.getDefaultBackground(e),
                                size: "background",
                                eagerLoad: !0
                            };
                        return (0, d.default)({
                            parentBinding: e,
                            sectionIndex: this.props.index
                        }, E.getContentProps(e.get().toObject(), t), {
                            inSectionSelector: this.props.inSectionSelector
                        })
                    },
                    _getBgComponentProps: function() {
                        var e = this._getUseSameBg();
                        if (e || this.isUndefinedPageUIDBgData()) return this.getComponentProps("background1");
                        var t = this.getPageUidBackground1Binding(),
                            n = t.get().toObject(),
                            s = P.reduce(n, (function(e, t, n) {
                                return P.isNull(t) && (t = void 0), e[n] = t, e
                            }), {});
                        return s.binding = {
                            default: t
                        }, s._cName = "background1", s.sectionModel = this.sectionModel, s.eagerLoad = this.props.eagerLoad, s.bgClassNames = this.getThemeFeature("backgroundColorClassNames"), s.userClassName = this.getDefaultBackground(t), s.useSameBg = e, s
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = M, e.exports = t.default
        },
        449030: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(65671), e.exports = t.default
        },
        90724: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(119964), e.exports = t.default
        },
        299111: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(196771), e.exports = t.default
        },
        684321: function(e, t, n) {
            "use strict";
            n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368);
            var s = n(663978),
                a = n(60530)(n(60530));
            s(t, "__esModule", {
                value: !0
            });
            var i = n(487672),
                o = ((0, a.default)(i), n(792695)),
                l = {
                    mixins: [(0, a.default)(o).default],
                    displayName: "SocialFeedSection",
                    _getLayoutOptions: function() {
                        return []
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = l, e.exports = t.default
        },
        484182: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(119964), e.exports = t.default
        },
        191333: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(930742), e.exports = t.default
        },
        53394: function(e, t, n) {
            e.exports = n.p + "../../../../public/images/v4/base/sections/hero/thumbnail/cover.png"
        }
    }
]);