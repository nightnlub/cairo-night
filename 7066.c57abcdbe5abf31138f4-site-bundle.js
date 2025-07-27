/*! For license information please see 7066.c57abcdbe5abf31138f4-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [7066], {
        562766: function(e, t, a) {
            a.r(t);
            var n, o, u, i = a(501068),
                d = a.n(i),
                l = a(863056),
                r = a(468420),
                f = a(327344),
                s = a(505281),
                c = a(484441),
                p = a(103020),
                v = a(803362),
                h = a(844845),
                g = a(694473),
                m = a.n(g),
                y = a(678580),
                S = a.n(y),
                C = a(366757),
                k = a(973935),
                _ = a(878627),
                b = a(868309),
                w = a(763070),
                P = a(595386);
            var N = function(e) {
                (0, c.Z)(g, e);
                var t, a, i = (t = g, a = function() {
                    if ("undefined" == typeof Reflect || !d()) return !1;
                    if (d().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(d()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, v.Z)(t);
                    if (a) {
                        var o = (0, v.Z)(this).constructor;
                        e = d()(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return (0, p.Z)(this, e)
                });

                function g(e) {
                    var t;
                    return (0, r.Z)(this, g), t = i.call(this, e), (0, h.Z)((0, s.Z)(t), "updateHeight", (function() {
                        var e = t.props.updateItemHeight;
                        e && (t.videothumbRefs && t.videothumbRefs.naturalHeight ? e(t.videothumbRefs.naturalHeight / t.videothumbRefs.naturalWidth) : e(9 / 16))
                    })), t._videoIframeReady = !1, t.videocontentRefs = null, t.videothumbRefs = null, t.state = {
                        videoContentNeedPopup: !1,
                        needSetupFancyBox: !1
                    }, t
                }
                return (0, f.Z)(g, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = $(this.videocontentRefs),
                            a = m()(t).call(t, "iframe, video"),
                            n = this.props,
                            o = n.dataProps,
                            u = n.isBlogMiniProgram;
                        if (a.length ? (a.off("load").on("load", (function() {
                                e._videoIframeReady = !0, e.forceUpdate()
                            })), u && a.on("error", (function() {
                                alert("视频（".concat(o.url, "）无法正常播放！请检查视频地址是否正确。"))
                            }))) : (this._videoIframeReady = !0, this.forceUpdate()), this.props.needToAdjustHeight && a.length) {
                            var i = $(k.findDOMNode(this)).closest(".s-video-content"),
                                d = a.attr("height"),
                                l = a.attr("width");
                            m()(i).call(i, ".player").addBack().css("padding-bottom", "".concat(100 * d / l, "%"))
                        }
                        this.updateHeight(), this.setVideoContentNeedPopupState = function() {
                            var t = e.getVideoContentNeedPopup();
                            e.setState((function(e) {
                                return {
                                    videoContentNeedPopup: t,
                                    needSetupFancyBox: t !== e.videoContentNeedPopup
                                }
                            }))
                        }, this.setVideoContentNeedPopupState(), window.addEventListener("resize", this.setVideoContentNeedPopupState)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateHeight(), this.state.needSetupFancyBox && this.setState({
                            needSetupFancyBox: !1
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.setVideoContentNeedPopupState)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            a = this.state.videoContentNeedPopup,
                            i = this.props.showType,
                            d = this.getData(),
                            r = d.thumbnail_url,
                            f = d.html,
                            s = d.url,
                            c = r && "" !== r,
                            p = S()(e = ["galleryItem", "verticalGallery"]).call(e, i),
                            v = c && (p || !this._videoIframeReady),
                            h = (0, P.default)("div", {
                                target: "css-qrb4hq0"
                            })("height:100%;width:100%;position:absolute;background-image:url(", r, ");background-size:cover;background-position-y:50%;"),
                            g = (0, l.Z)("div", {
                                className: "thumb-wrap"
                            }, void 0, n || (n = (0, l.Z)("span", {})), "video" === i ? C.createElement(h, {
                                ref: function(e) {
                                    return t.videothumbRefs = e
                                }
                            }) : C.createElement("img", {
                                ref: function(e) {
                                    return t.videothumbRefs = e
                                },
                                src: r,
                                onLoad: this.updateHeight
                            }), o || (o = (0, l.Z)("div", {
                                className: "play-button"
                            }, void 0, (0, l.Z)("div", {
                                className: "after"
                            })))),
                            m = (0, l.Z)("div", {
                                className: "video-wrap"
                            }, void 0, C.createElement("div", {
                                className: "player",
                                ref: function(e) {
                                    return t.videocontentRefs = e
                                },
                                dangerouslySetInnerHTML: {
                                    __html: f
                                }
                            }), u || (u = (0, l.Z)("div", {
                                className: "button-mask"
                            })));
                        return (0, l.Z)(C.Fragment, {}, void 0, v && g, !(c && p) && m, a && (0, l.Z)("a", {
                            className: "s-video-popup-overlay",
                            href: s,
                            target: "_blank"
                        }))
                    }
                }, {
                    key: "getVideoContentNeedPopup",
                    value: function() {
                        if (!this.videocontentRefs) return !0;
                        var e = window.innerWidth,
                            t = this.videocontentRefs.clientWidth,
                            a = t / e;
                        return (e > 727 && a < .3 || e <= 727 && a < .6) && t < 300
                    }
                }]), g
            }(_.default);
            (0, h.Z)(N, "displayName", "VideoContent"), (0, h.Z)(N, "defaultProps", w.defaultProps), (0, h.Z)(N, "propTypes", w.propTypes);
            var I = b(N);
            N.WaypointLazy = function(e) {
                return (0, l.Z)("div", {
                    className: "s-video-content"
                }, void 0, C.createElement(I, e))
            }, t.default = N
        },
        718711: function(e, t, a) {
            var n = a(501068),
                o = a(663978),
                u = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, d = a(812077),
                l = (0, u.default)(d),
                r = a(726394),
                f = (0, u.default)(r),
                s = a(569198),
                c = (0, u.default)(s),
                p = a(705824),
                v = (0, u.default)(p),
                h = a(351379),
                g = (0, u.default)(h),
                m = a(900214),
                y = (0, u.default)(m),
                S = a(566380),
                C = (0, u.default)(S),
                k = a(487672),
                _ = (0, u.default)(k),
                b = a(54103),
                w = (0, u.default)(b),
                P = a(366757),
                N = (0, u.default)(P),
                I = a(45697),
                R = ((0, u.default)(I), a(973935)),
                L = (0, u.default)(R),
                E = a(454613),
                B = (0, u.default)(E);
            var z = function(e) {
                (0, g.default)(d, e);
                var t, o, u = (t = d, o = function() {
                    if ("undefined" == typeof Reflect || !n) return !1;
                    if (n.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, a = (0, C.default)(t);
                    if (o) {
                        var u = (0, C.default)(this).constructor;
                        e = n(a, arguments, u)
                    } else e = a.apply(this, arguments);
                    return (0, y.default)(this, e)
                });

                function d(e) {
                    var t, a;
                    return (0, f.default)(this, d), (a = u.call(this, e))._waypoint = void 0, a._handler = (0, w.default)(t = a._handler).call(t, (0, v.default)(a)), a
                }
                return (0, c.default)(d, [{
                    key: "componentDidMount",
                    value: function() {
                        this._createWaypoint()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return e.offset !== this.props.offset
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this._destroyWaypoint(), this._createWaypoint()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._destroyWaypoint()
                    }
                }, {
                    key: "_createWaypoint",
                    value: function() {
                        var e = L.default.findDOMNode(this);
                        a(343511), this._waypoint = new window.Waypoint({
                            element: e,
                            handler: this._handler,
                            continuous: this.props.continuous,
                            offset: this.props.offset,
                            group: this.props.group
                        }), B.default.get("stopWaypointLazyLoad") && this._waypoint.trigger(["down"])
                    }
                }, {
                    key: "_handler",
                    value: function(e) {
                        this.props.containerId ? this.props.handler(e, document.getElementById(this.props.containerId)) : this.props.handler(e)
                    }
                }, {
                    key: "_destroyWaypoint",
                    value: function() {
                        this._waypoint && this._waypoint.destroy()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return i || (i = (0, l.default)("div", {
                            className: "waypoint"
                        }))
                    }
                }]), d
            }(N.default.Component);
            (0, _.default)(z, "defaultProps", {
                continuous: !0,
                offset: 0
            }), t.default = z, e.exports = t.default
        },
        868309: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var u, i = a(812077),
                d = (0, o.default)(i),
                l = a(205872),
                r = (0, o.default)(l);
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, m.default)({
                        getInitialState: function() {
                            return {
                                loaded: !1
                            }
                        },
                        _setLoaded: function() {
                            this.setState({
                                loaded: !0
                            }), this.forceUpdate()
                        },
                        render: function() {
                            var a, n = (0, s.default)({
                                offset: C
                            }, t);
                            if (this.state.loaded || /lazyLoading=0/.test(window.location.href)) a = p.default.isValidElement(e) ? e : p.default.createElement(e, this.props);
                            else {
                                var o = p.default.createElement(S.default, (0, r.default)({
                                    handler: this._setLoaded
                                }, n));
                                a = t.noWrapper ? o : (0, d.default)("div", {
                                    className: "s-component s-async-wrapper"
                                }, void 0, u || (u = (0, d.default)("div", {
                                    className: "s-loading"
                                })), o)
                            }
                            return a
                        }
                    });
                return a
            };
            var f = a(51942),
                s = (0, o.default)(f),
                c = a(366757),
                p = (0, o.default)(c),
                v = a(223336),
                h = (0, o.default)(v),
                g = a(972555),
                m = (0, o.default)(g),
                y = a(718711),
                S = (0, o.default)(y);

            function C() {
                return 2 * (0, h.default)(window).height()
            }
            e.exports = t.default
        },
        787066: function(e, t, a) {
            a(353147);
            var n = a(223765),
                o = a(501068),
                u = a(686902),
                i = a(14310),
                d = a(620116),
                l = a(834074),
                r = a(778914),
                f = a(239649),
                s = a(820368),
                c = a(663978),
                p = a(752424),
                v = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var h = a(205872),
                g = (0, v.default)(h),
                m = a(812077),
                y = (0, v.default)(m),
                S = a(726394),
                C = (0, v.default)(S),
                k = a(569198),
                _ = (0, v.default)(k),
                b = a(705824),
                w = (0, v.default)(b),
                P = a(351379),
                N = (0, v.default)(P),
                I = a(900214),
                R = (0, v.default)(I),
                L = a(566380),
                E = (0, v.default)(L),
                B = a(487672),
                z = (0, v.default)(B);
            a(974916), a(115306);
            var Z = a(51942),
                M = (0, v.default)(Z),
                T = a(366757),
                W = (0, v.default)(T),
                D = a(973935),
                x = (0, v.default)(D),
                H = a(45697),
                U = (0, v.default)(H),
                V = a(294184),
                O = ((0, v.default)(V), a(185592)),
                F = (0, v.default)(O),
                j = a(562766),
                A = (0, v.default)(j),
                q = a(692381),
                G = (0, v.default)(q),
                J = a(916784),
                K = (0, v.default)(J),
                Q = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = te(t);
                    if (a && a.has(e)) return a.get(e);
                    var o = {},
                        u = c && l;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var d = u ? l(e, i) : null;
                            d && (d.get || d.set) ? c(o, i, d) : o[i] = e[i]
                        }
                    return o.default = e, a && a.set(e, o), o
                }(a(143268)),
                X = a(878627),
                Y = (0, v.default)(X),
                ee = a(950149);

            function te(e) {
                if ("function" != typeof p) return null;
                var t = new p,
                    a = new p;
                return (te = function(e) {
                    return e ? a : t
                })(e)
            }

            function ae(e, t) {
                var a = u(e);
                if (i) {
                    var n = i(e);
                    t && (n = d(n).call(n, (function(t) {
                        return l(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function ne(e) {
                if ("image" === e.get("current")) return Q.imageHasContent(e.get("image").get("url"));
                var t = e.get("video").get("html");
                return t && t.length > 0
            }
            var oe = {
                    designer: {
                        assetType: U.default.string,
                        className: U.default.string,
                        size: U.default.string,
                        showType: U.default.string,
                        emptyMessage: U.default.string,
                        emptyTooltip: U.default.string,
                        eagerLoad: U.default.bool.isRequired,
                        showBlackButton: U.default.bool
                    }
                },
                ue = function(e) {
                    (0, N.default)(u, e);
                    var t, a, n = (t = u, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, E.default)(t);
                        if (a) {
                            var u = (0, E.default)(this).constructor;
                            e = o(n, arguments, u)
                        } else e = n.apply(this, arguments);
                        return (0, R.default)(this, e)
                    });

                    function u(e) {
                        var t;
                        return (0, C.default)(this, u), t = n.call(this, e), (0, z.default)((0, w.default)(t), "switchToImage", (function() {
                            t.updateData({
                                current: "image"
                            })
                        })), (0, z.default)((0, w.default)(t), "switchToVideo", (function() {
                            t.updateData({
                                current: "video"
                            })
                        })), (0, z.default)((0, w.default)(t), "getVideoProps", (function() {
                            var e = t.props.eagerLoad;
                            return (0, M.default)({
                                beforeUpload: function() {
                                    return t.setState({
                                        isLoading: !0
                                    })
                                },
                                uploadFailed: function() {
                                    return t.setState({
                                        isLoading: !1
                                    })
                                },
                                uploadSucceed: function() {
                                    t.setState({
                                        isLoading: !1
                                    }), t.doSave()
                                },
                                afterRemove: function() {
                                    return t.doSave()
                                }
                            }, {
                                eagerLoad: e
                            }, t.getChildProps("video", "Video"))
                        })), (0, z.default)((0, w.default)(t), "getImageProps", (function() {
                            var e = t.props,
                                a = e.eagerLoad,
                                n = e.size,
                                o = e.dataProps,
                                u = e.isFreshColumn,
                                i = e.hasSizeAttr,
                                d = e.enableWidth,
                                p = t.state.initImageSize,
                                v = (p.w, p.h, o.getIn(["image", "cropMode"])),
                                h = u && "freshColumnLegacy" === v ? "320x320#" : n,
                                g = t.getChildProps("image", "Image");
                            return (0, M.default)({
                                afterSelected: function() {
                                    return t.updateState("normal")
                                },
                                afterUploaded: function() {
                                    return t.updateState("normal")
                                },
                                afterRemove: function() {
                                    t.updateState("normal"), "function" == typeof t.props.onRemoveCallback && t.props.onRemoveCallback()
                                },
                                afterSave: function() {
                                    return t.updateState("normal")
                                },
                                onSetInitImageSize: t.onSetInitImageSize
                            }, {
                                eagerLoad: a,
                                size: h,
                                cropMode: v,
                                hasSizeAttr: i,
                                enableWidth: d
                            }, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a, n = null != arguments[t] ? arguments[t] : {};
                                    if (t % 2) r(a = ae(Object(n), !0)).call(a, (function(t) {
                                        (0, z.default)(e, t, n[t])
                                    }));
                                    else if (f) s(e, f(n));
                                    else {
                                        var o;
                                        r(o = ae(Object(n))).call(o, (function(t) {
                                            c(e, t, l(n, t))
                                        }))
                                    }
                                }
                                return e
                            }({}, g))
                        })), (0, z.default)((0, w.default)(t), "onSetInitImageSize", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.setState({
                                initImageSize: e
                            })
                        })), (0, z.default)((0, w.default)(t), "doSave", (function() {
                            t.updateState("normal"), t.savePage()
                        })), (0, z.default)((0, w.default)(t), "getSaveButtonProps", (function() {
                            return {
                                isLoading: t.state.isLoading,
                                onClickCancel: t.onClickCancel,
                                onClickSave: t.onClickSave
                            }
                        })), (0, z.default)((0, w.default)(t), "restoreSaveClickedState", (function() {
                            t.setState({
                                saveClicked: !1
                            }), t.savePage()
                        })), (0, z.default)((0, w.default)(t), "getSaveButtonClickedProps", (function() {
                            return {
                                saveClicked: t.state.saveClicked,
                                restoreSaveClickedState: t.restoreSaveClickedState,
                                fromType: "media"
                            }
                        })), (0, z.default)((0, w.default)(t), "setImgLoading", (function(e) {})), t.state = {
                            isLoading: !1,
                            saveClicked: !1,
                            imgLoading: !1,
                            initImageSize: {
                                w: null,
                                h: null
                            }
                        }, t
                    }
                    return (0, _.default)(u, [{
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            "editor" === t._state && this.isState("normal") && window.edit_page.Event.publish("MediaComponent.afterChange", {
                                target: $(x.default.findDOMNode())
                            }), this.trackEditBehavior(this.props, e)
                        }
                    }, {
                        key: "_renderEditor",
                        value: function() {
                            this.getData("current")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getData("current"),
                                t = ne(this.props.dataProps);
                            return (0, y.default)("div", {
                                className: "s-component s-media ".concat(this.props.className)
                            }, void 0, !1, (0, y.default)(G.default, {}, void 0, !this.isState("editor") && t ? (0, y.default)(K.default, {
                                className: "s-component-content"
                            }, void 0, "image" === e && W.default.createElement(F.default, (0, g.default)({
                                ref: "imageContent"
                            }, this.getImageProps(), {})), "video" === e && W.default.createElement(A.default.WaypointLazy, this.getVideoProps())) : null))
                        }
                    }]), u
                }(Y.default);
            (0, z.default)(ue, "displayName", "Media"), (0, z.default)(ue, "hasContent", ne), (0, z.default)(ue, "originalProps", oe), (0, z.default)(ue, "propTypes", (0, ee.buildReactProps)(oe)), (0, z.default)(ue, "defaultProps", {
                className: "",
                showType: "image",
                size: "large",
                cropMode: null,
                assetType: "icon"
            });
            var ie = ue;
            t.default = ie, e.exports = t.default
        },
        763070: function(e, t, a) {
            var n = a(353147),
                o = a(501068),
                u = a(663978),
                i = a(60530)(a(60530));
            u(t, "__esModule", {
                value: !0
            });
            var d = a(205872),
                l = (0, i.default)(d),
                r = a(812077),
                f = (0, i.default)(r),
                s = a(726394),
                c = (0, i.default)(s),
                p = a(569198),
                v = (0, i.default)(p),
                h = a(705824),
                g = (0, i.default)(h),
                m = a(351379),
                y = (0, i.default)(m),
                S = a(900214),
                C = (0, i.default)(S),
                k = a(566380),
                _ = (0, i.default)(k),
                b = a(487672),
                w = (0, i.default)(b),
                P = a(25843),
                N = (0, i.default)(P),
                I = a(366757),
                R = (0, i.default)(I),
                L = a(496486),
                E = (0, i.default)(L),
                B = a(294184),
                z = ((0, i.default)(B), a(50533), a(45697)),
                Z = (0, i.default)(z),
                M = a(834243),
                T = ((0, i.default)(M), a(183123)),
                W = ((0, i.default)(T), a(692381)),
                D = (0, i.default)(W),
                x = a(916784),
                H = (0, i.default)(x),
                U = a(878627),
                V = (0, i.default)(U),
                O = a(950149);
            var F = {
                    designer: {
                        showType: Z.default.string,
                        needToAdjustHeight: Z.default.bool
                    },
                    callbacks: {
                        updateItemHeight: Z.default.func,
                        beforeUpload: Z.default.func,
                        uploadFailed: Z.default.func,
                        uploadSucceed: Z.default.func,
                        afterRemove: Z.default.func
                    }
                },
                j = function(e) {
                    (0, y.default)(d, e);
                    var t, u, i = (t = d, u = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, _.default)(t);
                        if (u) {
                            var n = (0, _.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, C.default)(this, e)
                    });

                    function d(e) {
                        var t;
                        return (0, c.default)(this, d), t = i.call(this, e), (0, w.default)((0, g.default)(t), "hasContent", (function() {
                            return "" !== (0, N.default)(E.default).call(E.default, t.getData("url"))
                        })), (0, w.default)((0, g.default)(t), "getEditorProps", (function() {})), (0, w.default)((0, g.default)(t), "getSaveButtonProps", (function() {})), (0, w.default)((0, g.default)(t), "_destructSelfIfNoContent", (function() {
                            var e = t.props.destructSelf;
                            return !(!e || t.hasContent()) && (e(), !0)
                        })), (0, w.default)((0, g.default)(t), "getUrlCallback", (function(e) {
                            return t._url = e
                        })), (0, w.default)((0, g.default)(t), "_onClickSave", (function() {
                            "" === t._url && t._destructSelfIfNoContent() || (t.setState({
                                saveClicked: !0
                            }), t.onClickSave())
                        })), (0, w.default)((0, g.default)(t), "_onClickCancel", (function() {
                            t._destructSelfIfNoContent() || t.onClickCancel()
                        })), (0, w.default)((0, g.default)(t), "startEditContent", (function() {
                            t.props.setEditingChild && t.props.setEditingChild()
                        })), (0, w.default)((0, g.default)(t), "stopEditContent", (function() {
                            t.props.unsetEditingChild && t.props.unsetEditingChild()
                        })), (0, w.default)((0, g.default)(t), "doSave", (function() {
                            t.updateState("normal"), t.savePage()
                        })), (0, w.default)((0, g.default)(t), "restoreSaveClickedState", (function() {
                            t.setState({
                                saveClicked: !1
                            })
                        })), (0, w.default)((0, g.default)(t), "getSaveButtonClickedProps", (function() {})), t.state = {
                            isLoading: !1,
                            saveClicked: !1,
                            _state: e.initialEditState || "normal"
                        }, t
                    }
                    return (0, v.default)(d, [{
                        key: "_emptyMessage",
                        value: function() {
                            return n("Editor|Add video.")
                        }
                    }, {
                        key: "_renderEditor",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = a(562766).default;
                            return (0, f.default)("div", {
                                className: "s-component s-video"
                            }, void 0, !1, (0, f.default)(D.default, {}, void 0, !this.isState("editor") && this.hasContent() && (0, f.default)(H.default, {
                                className: "s-component-content"
                            }, void 0, R.default.createElement(e.WaypointLazy, (0, l.default)({
                                ref: "content"
                            }, this.props)))))
                        }
                    }]), d
                }(V.default);
            (0, w.default)(j, "displayName", "Video"), (0, w.default)(j, "defaultProps", {
                showType: "video",
                needToAdjustHeight: !1
            }), (0, w.default)(j, "originalProps", F), (0, w.default)(j, "propTypes", (0, O.buildReactProps)(F));
            var A = j;
            t.default = A, e.exports = t.default
        }
    }
]);