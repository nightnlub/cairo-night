/*! For license information please see 2996.d5d85f385a5186efe386-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [2996], {
        299376: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(694927),
                l = (0, i.default)(o),
                s = a(256588),
                u = a(359011),
                r = {
                    setInitialType: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_INITIAL_TYPE,
                            type: t
                        })
                    },
                    setType: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_TYPE,
                            type: t
                        })
                    },
                    setHiddenTabs: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_HIDDEN_TABS,
                            hiddenTabs: t
                        })
                    },
                    setCurrentCategoryIndex: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_CURRENT_CATEGORY_INDEX,
                            categoryIndex: t
                        })
                    },
                    manualSearchUnsplash: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.MANUAL_SEARCH_UNSPLASH,
                            query: t
                        })
                    },
                    fetchMoreUnsplashAssets: function() {
                        l.default.dispatch({
                            actionType: s.ActionTypes.FETCH_MORE_UNSPLASH_ASSETS
                        })
                    },
                    downloadUnsplashImage: function(t) {
                        return (0, u.fetchJSON)("/r/v1/stock_images/download_url?download_location=".concat(t)).then((function(t) {
                            return t.json()
                        }))
                    },
                    setFrom: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_FROM,
                            from: t
                        })
                    },
                    setTopNewImg: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.SET_TOP_NEW_IMG,
                            val: t
                        })
                    }
                };
            e.default = r, t.exports = e.default
        },
        762903: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(253324),
                l = (0, i.default)(o),
                s = a(561454),
                u = a(382301),
                r = (0, i.default)(u),
                d = a(684961),
                c = (0, i.default)(d),
                f = function() {
                    return (0, c.default)("pageMeta.id") || (0, c.default)("blogPostData.pageMeta.id") || (0, c.default)("id")
                },
                p = {
                    initImageAsset: function(t) {
                        l.default.dispatch({
                            actionType: s.ActionTypes.INIT_ASSET_LIBRARY,
                            siteId: t
                        })
                    },
                    loadImageAsset: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        l.default.dispatch({
                            actionType: s.ActionTypes.LOAD_IMAGE_ASSET,
                            page: t
                        })
                    },
                    refreshImageAsset: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        l.default.dispatch({
                            actionType: s.ActionTypes.REFRESH_IMAGE_ASSET,
                            page: t
                        })
                    },
                    addFileAsset: function(t, e) {
                        var a = f();
                        t.siteId = a, r.default.saveFileRecord({
                            file: t,
                            success: e.success,
                            error: e.error,
                            params: e.params
                        })
                    },
                    addImageAsset: function(t) {
                        var e = f(),
                            a = t.tags || e ? ["site_id_".concat(e)] : null;
                        return r.default.saveImageRecord({
                            img: t.img,
                            tags: a,
                            success: function(e) {
                                "function" == typeof t.success && t.success(e), l.default.dispatch({
                                    actionType: s.ActionTypes.ADD_IMAGE_ASSET,
                                    assetImage: e.data.assetImage
                                })
                            },
                            error: function() {
                                "function" == typeof t.error && t.error()
                            }
                        })
                    },
                    deleteImageAsset: function(t) {
                        return r.default.deleteUserAssetImage({
                            assetId: t.assetId,
                            success: function(e) {
                                "function" == typeof t.success && t.success(e), l.default.dispatch({
                                    actionType: s.ActionTypes.DELETE_IMAGE_ASSET,
                                    assetId: t.assetId
                                })
                            }
                        })
                    },
                    deleteImageAssetAll: function(t) {
                        return r.default.deleteUserAssetImageAll({
                            assetImageIds: t.assetImageIds,
                            success: function(e) {
                                "function" == typeof t.success && t.success(e), l.default.dispatch({
                                    actionType: s.ActionTypes.DELETE_IMAGE_ASSET_ALL,
                                    assetImageIds: t.assetImageIds
                                })
                            },
                            error: function() {
                                return "function" == typeof t.error ? t.error() : void 0
                            }
                        })
                    },
                    refreshStorageStatus: function() {
                        l.default.dispatch({
                            actionType: s.ActionTypes.REFRESH_STORAGE_STATUS
                        })
                    }
                };
            e.default = p, t.exports = e.default
        },
        432996: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(51942),
                l = (0, i.default)(o),
                s = a(62431),
                u = a(108404),
                r = (0, i.default)(u),
                d = a(234584),
                c = ((0, i.default)(d), a(183123)),
                f = (0, i.default)(c),
                p = a(835065),
                _ = (0, i.default)(p);
            r.default.sharedProps = (0, s.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                var t = {};
                return f.default.getIsBlog() && (t.blogPublicUrl = _.default.getBlogPublicUrl()), (0, l.default)({}, t)
            }), (function() {
                return {}
            })), e.default = r.default, t.exports = e.default
        },
        857973: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(51942),
                l = (0, i.default)(o),
                s = a(62431),
                u = a(952606),
                r = (0, i.default)(u),
                d = a(234584),
                c = (0, i.default)(d),
                f = a(183123),
                p = (0, i.default)(f);
            r.default.sharedProps = (0, s.sharedPropsBuilder)((function() {
                return p.default.getIsBlog() ? [] : [c.default.getBinding()]
            }), (function() {
                return (0, l.default)({}, {})
            }), (function() {
                return {}
            })), e.default = r.default, t.exports = e.default
        },
        256588: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            }), e.ActionTypes = void 0;
            var o = a(213192),
                l = (0, i.default)(o);
            e.ActionTypes = (0, l.default)({
                SET_INITIAL_TYPE: null,
                SET_TYPE: null,
                SET_CURRENT_CATEGORY_INDEX: null,
                MANUAL_SEARCH_UNSPLASH: null,
                FETCH_MORE_UNSPLASH_ASSETS: null,
                SET_FROM: null,
                SET_HIDDEN_TABS: null
            })
        },
        561454: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            }), e.ActionTypes = void 0;
            var o = a(213192),
                l = (0, i.default)(o);
            e.ActionTypes = (0, l.default)({
                INIT_ASSET_LIBRARY: null,
                LOAD_IMAGE_ASSET: null,
                REFRESH_IMAGE_ASSET: null,
                REFRESH_STORAGE_STATUS: null,
                ADD_IMAGE_ASSET: null,
                DELETE_IMAGE_ASSET: null,
                DELETE_IMAGE_ASSET_ALL: null
            })
        },
        732232: function(t, e, a) {
            var n = a(353147);
            a(663978)(e, "__esModule", {
                value: !0
            });
            var i = {
                IMAGE_ASSET_DIALOG: {
                    FILE_PICKER: 0,
                    ASSET_LIB: 1,
                    ICON_LIB: 2,
                    AI_LOGO: 5,
                    RECOMMENDED: 4,
                    DEFAULT_OPTIONS: {
                        mode: "single",
                        hideTabs: [],
                        initialTabIdx: -1,
                        iconLibComponents: "icon",
                        saveRecord: !0,
                        hideUrlUploader: !1
                    }
                },
                FILE_ASSET_DIALOG: {
                    FILE_PICKER: 0,
                    ASSET_LIB: 1,
                    DEFAULT_OPTIONS: {
                        mode: "single",
                        hideTabs: [],
                        initialTabIdx: -1,
                        saveRecord: !0
                    }
                },
                PAGE_SETTINGS_DIALOG: {
                    COLLABORATOR: {
                        ROLES_ARR: function() {
                            return [{
                                value: "administrator",
                                text: n("EditorSettings|Administrator")
                            }, {
                                value: "editor",
                                text: n("EditorSettings|Editor")
                            }, {
                                value: "blogger",
                                text: n("EditorSettings|Blogger")
                            }]
                        }
                    }
                },
                cropImageList: ["team-member-avatar", "miniprogram-banner", "presentation-product", "category-thumb", "miniprogram-logo", "miniprogram-shortcuts", "blog-category"]
            };
            e.default = i, t.exports = e.default
        },
        694927: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(855108),
                l = (0, i.default)(o);
            e.default = new l.default("AssetsDispatcher"), t.exports = e.default
        },
        253324: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(855108),
                l = (0, i.default)(o);
            e.default = new l.default("StorageAssetDispatcher"), t.exports = e.default
        },
        948736: function(t, e, a) {
            var n = a(663978),
                i = a(60530)(a(60530));
            n(e, "__esModule", {
                value: !0
            });
            var o = a(223336),
                l = (0, i.default)(o),
                s = a(496486),
                u = (0, i.default)(s),
                r = a(842651),
                d = (0, i.default)(r),
                c = a(607947),
                f = (0, i.default)(c),
                p = a(786483),
                _ = (0, i.default)(p),
                h = a(732232),
                g = (0, i.default)(h),
                m = a(141655),
                T = (0, i.default)(m),
                v = a(299376),
                S = (0, i.default)(v),
                I = a(762903),
                A = (0, i.default)(I),
                E = function(t) {
                    return A.default.addImageAsset({
                        img: t
                    })
                },
                b = function(t, e) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    A.default.addFileAsset(t, {
                        success: function(a) {
                            return t.url = a.data.uploadedFile && a.data.uploadedFile.url, t.id = a.data.uploadedFile && a.data.uploadedFile.id, _.default.Event.publish("FileLibrary.addToFileLibrary", t), e.itemUploaded(t)
                        },
                        error: function() {
                            var t = d.default.t("js.pages.edit.errors.upload_fail");
                            return f.default.customAlert ? f.default.customAlert(t) : window.alert(t)
                        },
                        params: a
                    })
                },
                y = {
                    pick: function() {
                        var t, e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = a,
                            i = u.default.extend({
                                itemSelected: function() {},
                                itemUploaded: function() {},
                                error: function() {}
                            }, n.handlers),
                            o = n.dialogType || "image";
                        switch (o) {
                            case "image":
                                e = g.default.IMAGE_ASSET_DIALOG.DEFAULT_OPTIONS;
                                break;
                            case "file":
                                e = g.default.FILE_ASSET_DIALOG.DEFAULT_OPTIONS;
                                break;
                            case "video":
                                e = {}
                        }
                        e.saveRecord = !0;
                        var s = (n = u.default.extend(u.default.cloneDeep(e), n)).saveRecord;
                        switch (o) {
                            case "image":
                                t = {
                                    success: function(t, e) {
                                        return s && !e.isPrivate && E(t.dataForBackend), i.itemUploaded(e, t), T.default.closeDialog("imageAssetDialog"), f.default.ui.closeModal((0, l.default)("#asset-lib-dialog"))
                                    },
                                    error: function(t, e) {
                                        return i.error(t, e)
                                    }
                                }, S.default.setType(n.iconLibComponents), S.default.setHiddenTabs(n.hideTabs);
                                break;
                            case "file":
                                t = {
                                    success: function(t) {
                                        return s && b(t, i, {
                                            acl: n.aclMode
                                        }), "qn_auth_document" === n.fileType && i.itemUploaded(t), T.default.closeDialog("fileAssetDialog"), f.default.ui.closeModal((0, l.default)("#file-lib-dialog"))
                                    },
                                    error: function(t, e) {
                                        i.error(t, e);
                                        var a = d.default.t("js.pages.edit.errors.upload_fail");
                                        return f.default.customAlert ? f.default.customAlert(a) : window.alert(a)
                                    }
                                };
                                break;
                            case "video":
                                t = {}, S.default.setType("video")
                        }
                        T.default.openAssetDialog({
                            assetDialogOptions: n,
                            requestedObject: t,
                            dialogType: o
                        })
                    }
                };
            _.default.Event.subscribe("Editor.OpenFileUploaderV4", (function(t, e) {
                return y.pick(e)
            })), _.default.Event.subscribe("Editor.OpenImageUploaderV4", (function(t, e) {
                return y.pick(e)
            })), e.default = y, t.exports = e.default
        },
        108404: function(t, e, a) {
            var n, i = a(60530)(a(60530)),
                o = a(812077),
                l = (0, i.default)(o),
                s = a(205872),
                u = (0, i.default)(s);
            a(974916), a(115306);
            var r = a(277149),
                d = (0, i.default)(r),
                c = a(981643),
                f = (0, i.default)(c),
                p = a(2991),
                _ = (0, i.default)(p),
                h = a(620116),
                g = (0, i.default)(h),
                m = a(977766),
                T = (0, i.default)(m),
                v = a(694473),
                S = (0, i.default)(v),
                I = a(972555),
                A = (0, i.default)(I),
                E = a(45697),
                b = (0, i.default)(E),
                y = a(366757),
                L = (0, i.default)(y),
                M = a(223336),
                C = (0, i.default)(M),
                w = a(496486),
                k = (0, i.default)(w),
                R = a(399069),
                P = (0, i.default)(R),
                N = a(177752),
                D = (0, i.default)(N),
                U = a(871745),
                B = (0, i.default)(U),
                O = a(230139),
                F = (0, i.default)(O),
                x = a(868309),
                G = (0, i.default)(x),
                H = a(154920),
                Q = (0, i.default)(H),
                j = a(183123),
                q = (0, i.default)(j),
                W = a(234584),
                Y = (0, i.default)(W),
                V = a(692381),
                $ = a(916784),
                z = P.default.createPageComponent({
                    displayName: "SocialMedia",
                    mixins: [(0, F.default)("editor")],
                    statics: {
                        hasContent: function(t) {
                            if (z.sharedProps().isBlog && "link" === t.get("list_type")) return !0;
                            var e = "link" === t.get("list_type") ? t.get("link_list") : t.get("button_list"),
                                a = !1;
                            if ("s5-theme" === Y.default.getThemeName() && !q.default.getIsBlog()) {
                                var n = t.get("contact_list");
                                a = null == n ? void 0 : (0, d.default)(n).call(n, (function(t) {
                                    return t.get("defaultValue")
                                }))
                            }
                            return a || (0, d.default)(e).call(e, (function(t) {
                                return t.get("show_button")
                            }))
                        }
                    },
                    bobcatPropTypes: {
                        data: {
                            button_list: b.default.array,
                            link_list: b.default.array,
                            list_type: b.default.string
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                button_list: [],
                                link_list: [],
                                list_type: "button"
                            }
                        }
                    },
                    shouldComponentUpdateOverride: function(t, e) {
                        return t()
                    },
                    componentWillMount: function() {
                        var t = this.props,
                            e = t.link_list,
                            a = t.button_list,
                            n = this.constructor.sharedProps().isBlog,
                            i = Y.default.getIsNewSocialMedia() && !n ? e : D.default.updateButtonListData(e, "link");
                        this.setData("link_list", i), this.setData("button_list", D.default.updateButtonListData(a, "button"))
                    },
                    componentDidUpdate: function(t) {
                        if ("editor" !== t._state && "editor" === this.props._state) {
                            var e = window.innerWidth,
                                a = (0, C.default)(".s-social-media .s-component-editor"),
                                n = a.outerWidth() || 0,
                                i = a.offset().left + n - e;
                            i > 0 && (a.css("position", "relative"), a.css("left", "-".concat(i + 10, "px")))
                        }
                    },
                    _isLinkList: function() {
                        return "link" === this.props.list_type
                    },
                    _getCurrentListBinding: function() {
                        var t = this.getDefaultBinding();
                        return !this.constructor.sharedProps().isBlog && this._isLinkList() ? t.sub("link_list") : t.sub("button_list")
                    },
                    _hasContent: function() {
                        var t = this.getDefaultBinding();
                        return z.hasContent(t)
                    },
                    _isHandleValid: function(t) {
                        return /^[-a-z0-9_@+.]+$/i.test(t)
                    },
                    _getSocialMediaIcons: function() {
                        var t = B.default.getSocialMediaIcons();
                        return this.props.isSxl && k.default.remove(t, (function(t) {
                            var e;
                            return (0, f.default)(e = ["Facebook", "Twitter"]).call(e, t.name) > -1
                        })), t
                    },
                    _getSocialMediaItemArr: function(t) {
                        var e = a(857973),
                            n = this._getCurrentListBinding(),
                            i = this.props.list_type || "button",
                            o = n.get().toArray(),
                            l = (0, _.default)(o).call(o, (function(a, o) {
                                var l, s = a.get("type");
                                if ((0, f.default)(l = ["GPlus", "Renren"]).call(l, s) > -1 || !B.default.socialMediaList[s] && "SocialMediaItem" !== s) return null;
                                var r = i + s + a.get("id");
                                return L.default.createElement(e, (0, u.default)({
                                    binding: n.sub(o),
                                    editMode: t,
                                    listType: i,
                                    key: r
                                }, k.default.omit(a.toObject(), k.default.isNull)))
                            }));
                        return (0, g.default)(l).call(l, (function(t) {
                            return null !== t
                        }))
                    },
                    getIsShowSocialMediaContactList: function() {
                        return "s5-theme" === Y.default.getThemeName() && !q.default.getIsBlog()
                    },
                    _getSaveButtonProps: function() {
                        var t = this;
                        return {
                            onClickSave: function(e) {
                                var n = !1,
                                    i = t.getDefaultBinding(),
                                    o = t._isLinkList() ? "link_list" : "button_list",
                                    l = i.get(o);
                                if (t._isLinkList()) t.constructor.sharedProps().isBlog || (l = (0, _.default)(l).call(l, (function(t) {
                                    if (n) return t;
                                    if (!t.get("show_button")) return t.set("url", "");
                                    var e = t.get("url"),
                                        a = t.get("type");
                                    return e ? (B.default.socialMediaList[a].validateUrl(e) ? t = t.set("url", e) : n = a, t) : t = t.set("show_button", !1)
                                })));
                                else {
                                    var s = i.sub("button_list");
                                    l = (0, _.default)(l).call(l, (function(e, a) {
                                        if (!e.get("show_button")) return e.set("url", "");
                                        if (!s.sub(a).meta().sub("editor").get("showLinkInput")) return e;
                                        var n = (0, C.default)(".s-social-media-".concat(e.get("type").toLowerCase(), " input.url")).val();
                                        return (n = n.replace(/^http:\/\//i, "").replace(/^([^\/]+)\/$/, "$1")) === t.constructor.sharedProps().publicUrl.replace(/^http:\/\/|\/$/gi, "") && (n = ""), e.set("url", n)
                                    }))
                                }
                                n ? t.updateMeta({
                                    hasInvalidHandle: n
                                }) : (Q.default.track("Click Save - Social Media - Editor v1", {
                                    mode: t.props.list_type || "button"
                                }), t.updateState("normal"), t.updateMeta({
                                    hasInvalidHandle: !1
                                }), i.set(o, l), e && !t._isLinkList() && t.getIsShowSocialMediaContactList() && a(141655).updateNavSocialMediaButtonList(l)), t.savePage()
                            },
                            onClickCancel: function() {
                                t.onClickCancel()
                            }
                        }
                    },
                    _onClickSwitchType: function(t) {},
                    _getShareLink: function(t) {
                        var e = encodeURIComponent(this.constructor.sharedProps().blogPublicUrl);
                        switch (t) {
                            case "Facebook":
                                return "https://www.facebook.com/sharer/sharer.php?u=".concat(e);
                            case "Twitter":
                                return "https://twitter.com/intent/tweet?url=".concat(e);
                            case "GPlus":
                                return "https://plus.google.com/share?url=".concat(e);
                            case "LinkedIn":
                                return "https://www.linkedin.com/shareArticle?mini=true&url=".concat(e);
                            case "Email":
                                return "mailto:?subject=checkout this blog&body=".concat(e)
                        }
                    },
                    handleClickEditor: function(t) {},
                    renderEditor: function() {
                        return null
                    },
                    _creareShareLinkMarkup: function(t) {
                        var e, a, n, i, o, l, s, u, r, d = this._getShareLink(t.name);
                        return "Email" === t.name ? (l = "entypo-mail", s = "") : (l = "fa fa-".concat(t.iconName), s = (0, T.default)(u = (0, T.default)(r = "onclick = \"return !window.open('".concat(d, "', 'share', 'width=")).call(r, 500, ",height=")).call(u, 500, "');\"")), {
                            __html: (0, T.default)(e = (0, T.default)(a = (0, T.default)(n = (0, T.default)(i = (0, T.default)(o = '<a class="s-social-icon s-social-icon-'.concat(t.iconName, '" href="')).call(o, d, '" aria-label="')).call(i, t.name, '"  target=')).call(n, "Email" === t.name ? "_self" : "_blank", " ")).call(a, s, "><span class='")).call(e, l, "'></span></a>")
                        }
                    },
                    _getSocialMediaContactListBinding: function() {
                        var t;
                        return (null === (t = this.getDefaultBinding().sub("contact_list").get()) || void 0 === t ? void 0 : t.toJS()) || []
                    },
                    getContactListItem: function(t) {
                        var e = t || {},
                            a = e.className,
                            n = e.defaultValue;
                        return n ? (0, l.default)("div", {
                            className: "social-media-contact-item s-footer-text s-font-body"
                        }, void 0, (0, l.default)("span", {}, void 0, (0, l.default)("i", {
                            className: "social-contact-icon ".concat(a)
                        })), (0, l.default)("span", {}, void 0, n)) : null
                    },
                    renderComponentContactList: function() {
                        var t = this;
                        if (!this.getIsShowSocialMediaContactList()) return null;
                        var e = this._getSocialMediaContactListBinding();
                        return (0, l.default)("div", {
                            className: "social-media-contact-list-wrap"
                        }, void 0, (0, _.default)(e).call(e, (function(e) {
                            return t.getContactListItem(e)
                        })))
                    },
                    isPreviewMode: function() {
                        return this.props.isPreviewMode
                    },
                    render: function() {
                        var t, e = this,
                            a = this.constructor.sharedProps().isBlog,
                            n = this._getCurrentListBinding().get().toArray(),
                            i = this._getSocialMediaContactListBinding();
                        return null != n && n.length && (0, S.default)(n).call(n, (function(t) {
                            return null == t ? void 0 : t.get("show_button")
                        })) || this._isLinkList() && a || null != i && i.length ? (0, l.default)("div", {
                            className: "s-component s-social-media"
                        }, void 0, !1, (0, l.default)(V, {}, void 0, this.isState("editor") ? null : (0, l.default)($, {
                            className: "s-component-content"
                        }, "".concat(this.getData("id"), "content"), (0, l.default)("ul", {
                            className: "s-social-media-buttons"
                        }, void 0, this._isLinkList() && a ? (0, _.default)(t = this._getSocialMediaIcons()).call(t, (function(t, a) {
                            return (0, l.default)("li", {
                                className: "s-social-media-button s-type-icon",
                                dangerouslySetInnerHTML: e._creareShareLinkMarkup(t)
                            }, a)
                        })) : this._getSocialMediaItemArr(!1)), this.renderComponentContactList()))) : null
                    }
                });
            /smoke-test=1/.test(window.location.href) ? z.WaypointLazy = (0, A.default)({
                render: function() {
                    return n || (n = (0, l.default)("div", {}))
                }
            }) : z.WaypointLazy = (0, G.default)(z, {
                noWrapper: !0
            }), t.exports = z
        },
        952606: function(t, e, a) {
            var n = a(353147),
                i = a(223765),
                o = a(752424),
                l = a(663978),
                s = a(834074),
                u = a(60530)(a(60530));
            l(e, "__esModule", {
                value: !0
            });
            var r = a(205872),
                d = (0, u.default)(r),
                c = a(812077),
                f = (0, u.default)(c),
                p = a(54103);
            (0, u.default)(p), a(974916), a(115306);
            var _ = a(366757),
                h = (0, u.default)(_),
                g = a(45697),
                m = (0, u.default)(g),
                T = a(176965),
                v = (0, u.default)(T),
                S = a(294184),
                I = ((0, u.default)(S), a(399069)),
                A = (0, u.default)(I),
                E = a(871745),
                b = (0, u.default)(E),
                y = U(a(143268)),
                L = a(230139),
                M = (0, u.default)(L),
                C = a(183123),
                w = (0, u.default)(C),
                k = a(234584),
                R = (0, u.default)(k),
                P = (U(a(948736)), a(500134)),
                N = a(144726);

            function D(t) {
                if ("function" != typeof o) return null;
                var e = new o,
                    a = new o;
                return (D = function(t) {
                    return t ? a : e
                })(t)
            }

            function U(t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || "object" !== i(t) && "function" != typeof t) return {
                    default: t
                };
                var a = D(e);
                if (a && a.has(t)) return a.get(t);
                var n = {},
                    o = l && s;
                for (var u in t)
                    if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                        var r = o ? s(t, u) : null;
                        r && (r.get || r.set) ? l(n, u, r) : n[u] = t[u]
                    }
                return n.default = t, a && a.set(t, n), n
            }
            e.default = A.default.createPageComponent({
                displayName: "SocialMediaItem",
                mixins: [(0, M.default)("editor")],
                bobcatPropTypes: {
                    data: {
                        app_id: m.default.number,
                        share_text: m.default.string,
                        show_button: m.default.bool.isRequired,
                        type: m.default.string.isRequired,
                        url: m.default.string,
                        link_url: m.default.string,
                        listType: m.default.string,
                        binding: m.default.object.isRequired
                    },
                    designer: {
                        editMode: m.default.bool.isRequired
                    }
                },
                getBobcatDefaultProps: function() {
                    return {
                        data: {
                            app_id: 0,
                            share_text: w.default.getIsBlog() ? n("Editor|Just read this awesome blog post, check it out!") : n("Editor|Check out this awesome website."),
                            show_button: !1,
                            type: "",
                            url: ""
                        },
                        designer: {
                            editMode: !1
                        }
                    }
                },
                componentWillMount: function() {
                    var t;
                    this.socialItem = new b.default.socialMediaList[this.dtProps.type](this.dtProps), this.initMeta({
                        showLinkInput: (null === (t = this.dtProps.url) || void 0 === t ? void 0 : t.length) > 0,
                        showQRCode: !1
                    })
                },
                componentDidMount: function() {
                    this._renderSocialButton()
                },
                componentDidUpdate: function(t) {},
                shouldComponentUpdateOverride: function(t, e) {
                    return t()
                },
                _getTemplate: function() {
                    return {
                        dangerouslySetInnerHTML: {
                            __html: this.socialItem.getTemplate()
                        }
                    }
                },
                _getSvgTemplate: function() {
                    return {
                        dangerouslySetInnerHTML: {
                            __html: this.socialItem.getSVGFileData()
                        }
                    }
                },
                _renderSocialButton: function() {
                    this.dsProps.editMode || this.dtProps.show_button && this.socialItem.reRender()
                },
                _isTwitter: function() {
                    return "Twitter" === this.dtProps.type
                },
                _needToShowContent: function() {
                    var t = this.dtProps || {},
                        e = t.show_button,
                        a = t.className;
                    return !(!R.default.getIsNewSocialMedia() || !a) || e
                },
                _isLinkList: function() {
                    return "link" === this.dtProps.listType
                },
                _needToShowCustomLink: function() {
                    return null
                },
                _onClickUseCustomLink: function() {
                    return null
                },
                _onChangeCheckedState: function(t) {
                    return null
                },
                _onChangeUrl: function(t) {
                    return null
                },
                _onChangeShareText: function(t) {
                    return null
                },
                _getUrl: function() {
                    return this._isLinkList() || this.dtProps.url ? this.dtProps.url : this.constructor.sharedProps().publicUrl.replace(/^http:\/\/|\/$/gi, "")
                },
                _updateRQCode: function() {},
                _cbUpdateQRCodeUrl: function(t) {
                    var e = (0, N.createImage)(t).getUrl();
                    this._updateQRCodeUrl(e)
                },
                _deleteQRCodeUrl: function() {
                    this._updateQRCodeUrl("")
                },
                _updateQRCodeUrl: function(t) {
                    this.dtProps.binding.set("url", t)
                },
                _showQRCodeModal: function() {
                    this.updateMeta({
                        showQRCode: !0
                    })
                },
                _hideQRCodeModal: function() {
                    this.updateMeta({
                        showQRCode: !1
                    })
                },
                _getQRCodeModalStatus: function() {
                    return this.getMeta("showQRCode")
                },
                _getQRCodeModal: function() {
                    var t = this.dtProps.url;
                    return t = y.addProtocol(t), (0, f.default)(P.Modal, {
                        zIndex: 2600,
                        visible: this._getQRCodeModalStatus(),
                        onCancel: this._hideQRCodeModal,
                        wrapClassName: "social-media-qr-code"
                    }, void 0, (0, f.default)("img", {
                        className: "qr-code",
                        src: t
                    }))
                },
                _getIconElement: function() {
                    var t = this.dtProps,
                        e = t.className,
                        a = t.id,
                        n = t.type;
                    return e ? (0, f.default)("span", {
                        className: e
                    }, a) : (0, f.default)("span", {
                        className: "fa fa-".concat(this.socialItem.getLinkThumbType())
                    }, n + a)
                },
                _getSocialIcon: function() {
                    var t = this.dtProps,
                        e = t.iconType + t.type + t.id;
                    return "svg" === this.socialItem.iconType ? h.default.createElement("svg", (0, d.default)({
                        key: e,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: this.socialItem.viewBox
                    }, this._getSvgTemplate())) : this._getIconElement()
                },
                getRenderContent: function() {
                    var t = this.dtProps,
                        e = t.url,
                        a = t.editMode;
                    return t.show_button, e = y.addProtocol(e), v.default.DOM.input, !a && this._isLinkList() && this._needToShowContent() ? (0, f.default)("li", {
                        className: "s-social-media-button s-type-link"
                    }, void 0, this.socialItem.linkQrCode ? (0, f.default)("span", {
                        className: "s-social-icon s-social-icon-".concat(this.socialItem.getLinkThumbType()),
                        onClick: this._showQRCodeModal
                    }, void 0, this._getSocialIcon()) : (0, f.default)("a", {
                        "aria-label": this.socialItem.getLinkThumbType(),
                        className: "s-social-icon s-social-icon-".concat(this.socialItem.getLinkThumbType()),
                        href: e,
                        target: "_blank"
                    }, void 0, this._getSocialIcon())) : a || this._isLinkList() || !this._needToShowContent() ? null : h.default.createElement("li", (0, d.default)({
                        className: "s-social-media-button"
                    }, this._getTemplate()))
                },
                render: function() {
                    return (0, f.default)(h.default.Fragment, {}, void 0, this.getRenderContent(), this._getQRCodeModal())
                }
            }), t.exports = e.default
        }
    }
]);