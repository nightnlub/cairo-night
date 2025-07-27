/*! For license information please see 2786.6adb7aff934c8d88d253-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [2786], {
        278637: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return _e
                }
            });
            var a = n(863056),
                i = n(573126),
                r = n(802562),
                o = n(981643),
                s = n.n(o),
                l = n(366757),
                u = n(602285),
                p = n(14310),
                c = n.n(p),
                d = n(620116),
                h = n.n(d),
                g = n(834074),
                f = n.n(g),
                m = n(239649),
                y = n.n(m),
                v = n(820368),
                w = n.n(v),
                S = n(663978),
                _ = n.n(S),
                b = n(501068),
                C = n.n(b),
                O = n(468420),
                k = n(327344),
                U = n(505281),
                P = n(484441),
                I = n(103020),
                R = n(803362),
                q = n(859056),
                x = n(844845),
                E = (n(569600), n(778914)),
                D = n.n(E),
                N = n(626295),
                Z = n.n(N),
                F = n(2991),
                T = n.n(F),
                L = n(51942),
                A = n.n(L),
                M = n(359340),
                j = n.n(M),
                B = n(841511),
                z = n.n(B),
                V = n(25843),
                W = n.n(V),
                G = n(694473),
                J = n.n(G),
                K = n(933032),
                H = n.n(K),
                Y = n(277149),
                $ = n.n(Y),
                Q = n(686902),
                X = n.n(Q),
                ee = n(678580),
                te = n.n(ee),
                ne = n(232558),
                ae = n(294184),
                ie = n.n(ae),
                re = n(318592),
                oe = n(674615),
                se = n(234584),
                le = n(918186),
                ue = n(10711),
                pe = n(886298),
                ce = n(496486),
                de = n(353147);

            function he(e, t) {
                var n = X()(e);
                if (c()) {
                    var a = c()(e);
                    t && (a = h()(a).call(a, (function(t) {
                        return f()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) D()(n = he(Object(a), !0)).call(n, (function(t) {
                        (0, x.Z)(e, t, a[t])
                    }));
                    else if (y()) w()(e, y()(a));
                    else {
                        var i;
                        D()(i = he(Object(a))).call(i, (function(t) {
                            _()(e, t, f()(a, t))
                        }))
                    }
                }
                return e
            }
            var fe = function(e) {
                    var t = le.getDecimalNum(),
                        n = Math.pow(10, t);
                    return Math.round(e * n)
                },
                me = function(e) {
                    var t, n = ge({}, e);
                    return D()(t = Z()(e)).call(t, (function(e) {
                        var t = (0, q.Z)(e, 2),
                            a = t[0],
                            i = t[1];
                        "number" == typeof i && (n[a] = fe(i))
                    })), n
                },
                ye = function() {
                    var e = le.userHasCouponWithType("free_shipping");
                    return {
                        total: le.getTotalNum(),
                        subtotal: le.getSubtotalWithDiscountNum(),
                        shippingFee: e ? 0 : le.getShippingFeeNum(),
                        taxes: le.getTaxesNum()
                    }
                },
                ve = function(e) {
                    (0, P.Z)(r, e);
                    var t, n, i = (t = r, n = function() {
                        if ("undefined" == typeof Reflect || !C()) return !1;
                        if (C().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(C()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, R.Z)(t);
                        if (n) {
                            var i = (0, R.Z)(this).constructor;
                            e = C()(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, I.Z)(this, e)
                    });

                    function r(e) {
                        var t;
                        return (0, O.Z)(this, r), t = i.call(this, e), (0, x.Z)((0, U.Z)(t), "paymentRequest", void 0), (0, x.Z)((0, U.Z)(t), "getOrderSendingData", (function(e) {
                            var n, a = e.payerEmail,
                                i = e.payerName,
                                r = e.payerPhone,
                                o = e.shippingAddress,
                                s = e.dependentLocality,
                                l = void 0 === s ? "" : s,
                                u = t.props,
                                p = u.rawOrderData,
                                c = u.checkoutContactInfo,
                                d = u.isShippingRequired,
                                h = u.selectedShippingOption,
                                g = u.extraOrderData,
                                f = void 0 === g ? {} : g,
                                m = ((null == c ? void 0 : c.phone) || {}).enabled,
                                y = (null == p || null === (n = p.toJS) || void 0 === n ? void 0 : n.call(p)) || p || {},
                                v = y.items,
                                w = y.coupon,
                                S = y.shipping,
                                _ = t.state.addressFilled,
                                b = ge(ge({}, f), {}, {
                                    coupon: w.token,
                                    email: a,
                                    gateway: "stripe_connect",
                                    orderItems: T()(v).call(v, (function(e) {
                                        return {
                                            id: e.orderItem.id,
                                            quantity: e.orderItem.quantity,
                                            weight: e.orderItem.weight
                                        }
                                    }))
                                });
                            if (b.shipping = {
                                    firstName: i
                                }, m && (b.shipping = A()(b.shipping, {
                                    phone: r
                                })), d && _ && o) {
                                var C = o.country,
                                    O = o.addressLine,
                                    k = o.city,
                                    U = o.region,
                                    P = o.postalCode;
                                b.shipping = A()(b.shipping, {
                                    country: C,
                                    city: k,
                                    state: U,
                                    line1: l + O.join(";"),
                                    zip: P
                                })
                            }
                            return S.notes.value && (b.notes = S.notes.value), h && (b.shippingOptionId = h.id), b
                        })), (0, x.Z)((0, U.Z)(t), "getShippingOptions", (function() {
                            var e = t.props.shippingOptions;
                            if (!e) {
                                var n, a = le.userHasCouponWithType("free_shipping");
                                e = T()(n = le.getShippingOptions()).call(n, (function(e) {
                                    return ge({
                                        amount: a ? 0 : le.getShippingFeeNum(e)
                                    }, e)
                                }))
                            }
                            return e || []
                        })), (0, x.Z)((0, U.Z)(t), "handleClickPaymentRequestButton", (function(e) {
                            var n = t.props.validateBeforePayment;
                            return "function" != typeof n || n(e) ? null : e.preventDefault()
                        })), (0, x.Z)((0, U.Z)(t), "createOrder", (function(e, n, a) {
                            var i = t.props.isShippingRequired,
                                r = t.state.addressFilled;
                            if (i && !r) return a(), alert(de("Ecommerce|Transaction failure due to the incomplete shipping address!"));
                            var o = t.getOrderSendingData(e);
                            return ue.orders.create({
                                rest: !0,
                                pageId: se.getId(),
                                data: j()(ge(ge({}, o), {}, {
                                    version: pe.STRIPE_ORDER_PAYMENT_VERSION
                                })),
                                success: function(e) {
                                    n(e)
                                },
                                error: function(e) {
                                    var t;
                                    return a(), 400 === e.status ? -1 !== s()(t = e.responseJSON.data.errors).call(t, "is not enough") ? alert(de("Ecommerce|Sorry! The item in your shopping cart has just sold out. Please refresh your page!")) : alert(de("Ecommerce|Seller has not connected his/her payment gateway. Can not buy now.")) : alert(de("Ecommerce|There has been an error. Our engineers are looking into it now. Please retry!"))
                                }
                            })
                        })), t.state = {
                            applePay: !1,
                            googlePay: !1,
                            addressFilled: !1
                        }, t
                    }
                    return (0, k.Z)(r, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.isShippingRequired,
                                a = t.settings,
                                i = t.updateCartData,
                                r = t.publishableApiKey,
                                o = t.stripe,
                                s = t.onCreateFailed,
                                l = t.onCreateSuccess,
                                u = t.updateSelectedShippingOption,
                                p = String(a.paymentGateways && a.paymentGateways.stripeCountry).toUpperCase();
                            if (o) {
                                try {
                                    this.paymentRequest = o.paymentRequest(ge({
                                        country: p,
                                        currency: String(a.currencyCode).toLocaleLowerCase(),
                                        requestShipping: n,
                                        requestPayerName: !0,
                                        requestPayerEmail: !0,
                                        requestPayerPhone: !0
                                    }, this.getSharedUpdateOptions()))
                                } catch (e) {
                                    return console.error(e), void("function" == typeof s && s())
                                }
                                this.paymentRequest.canMakePayment().then((function(t) {
                                    var n = t || {},
                                        a = n.applePay,
                                        i = n.googlePay;
                                    t && (a || i) ? (e.setState({
                                        applePay: Boolean(a),
                                        googlePay: Boolean(i)
                                    }), "function" == typeof l && l()) : "function" == typeof s && s()
                                })), this.paymentRequest.on("shippingaddresschange", (function(t) {
                                    var n, a = t.updateWith,
                                        r = t.shippingAddress,
                                        o = r.addressLine,
                                        s = r.region,
                                        l = r.city,
                                        u = r.dependentLocality,
                                        p = r.postalCode,
                                        c = r.phone,
                                        d = r.country,
                                        h = String(d).toLocaleLowerCase(),
                                        g = z()(o) ? T()(o).call(o, (function(e) {
                                            var t;
                                            return W()(t = String(e || "")).call(t)
                                        })).join(";") : W()(n = String(o || "")).call(n);
                                    oe.e.getIsNewCheckoutDesign() ? e.props.updateShippingData({
                                        country: h,
                                        state: s,
                                        city: l,
                                        county: u,
                                        address: g,
                                        zip: p,
                                        phone: c
                                    }) : "function" == typeof i && (i("shipping.country", {
                                        value: h
                                    }), i("shipping.state", {
                                        value: r.region
                                    }), i("shipping.city", {
                                        value: r.city
                                    }), r.dependentLocality && i("shipping.county", {
                                        value: r.dependentLocality
                                    }), i("shipping.address", {
                                        value: g
                                    }), i("shipping.zip", {
                                        value: r.postalCode
                                    }), i("shipping.phone", {
                                        value: r.phone
                                    })), e.isValidShippingAddress() ? e.setState({
                                        addressFilled: !0
                                    }, (function() {
                                        a(ge({
                                            status: "success"
                                        }, e.getSharedUpdateOptions(!0)))
                                    })) : e.setState({
                                        addressFilled: !1
                                    }, (function() {
                                        a({
                                            status: "invalid_shipping_address"
                                        })
                                    }))
                                })), this.paymentRequest.on("shippingoptionchange", (function(t) {
                                    var n, a = t.updateWith,
                                        i = t.shippingOption,
                                        r = J()(n = e.getShippingOptions()).call(n, (function(e) {
                                            var t = e.id;
                                            return String(t) === i.id
                                        }));
                                    r && u(r), e.isValidShippingAddress() ? a(ge({
                                        status: "success"
                                    }, e.getSharedUpdateOptions(!0))) : a({
                                        status: "invalid_shipping_address"
                                    })
                                })), this.paymentRequest.on("cancel", (function() {
                                    console.info("canceled")
                                })), this.paymentRequest.on("paymentmethod", (function(t) {
                                    console.info(t), e.createOrder(t, (function(n) {
                                        var a = n.data.chargeInfo,
                                            i = a.paymentIntentClientSecret,
                                            s = a.error;
                                        if (s) return t.complete("fail"), alert(s);
                                        (0, o.confirmPaymentIntent)(i, {
                                            payment_method: t.paymentMethod.id
                                        }).then((function(n) {
                                            var a = n.error;
                                            if (a) t.complete("fail"), a.message && H()((function() {
                                                return alert(a.message)
                                            }), 1);
                                            else {
                                                if (t.complete("success"), !window.Stripe && !r) return alert("error");
                                                new window.Stripe(r).handleCardPayment(i).then((function(t) {
                                                    var n = t.error,
                                                        a = t.paymentIntent;
                                                    n ? (console.info("error"), n.message && alert(n.message)) : "succeeded" === a.status ? (console.info("success"), oe.e.getIsNewCheckoutDesign() ? e.props.onSuccess() : "function" == typeof e.props.gotoPanel && e.props.gotoPanel("confirm")) : console.info("error")
                                                })).catch((function(e) {
                                                    e.message && alert(e.message)
                                                }))
                                            }
                                        }))
                                    }), (function() {
                                        return t.complete("fail")
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.rawOrderData,
                                a = t.settings;
                            if (!ce.isEqual(e.rawOrderData, n) && this.paymentRequest) {
                                var i, r, o = ((null == n || null === (i = n.toJS) || void 0 === i ? void 0 : i.call(n)) || n || {}).items,
                                    s = void 0 === o ? [] : o;
                                r = $()(s).call(s, (function(e) {
                                    if ((e.orderItem || {}).shippingInfo) return !0
                                }));
                                try {
                                    this.paymentRequest.update(ge({
                                        currency: String(a.currencyCode).toLocaleLowerCase()
                                    }, this.getSharedUpdateOptions(r)))
                                } catch (e) {}
                            }
                        }
                    }, {
                        key: "isValidShippingAddress",
                        value: function() {
                            var e, t = this.props,
                                n = t.settings,
                                a = t.rawOrderData,
                                i = ((null == a || null === (e = a.toJS) || void 0 === e ? void 0 : e.call(a)) || a).shipping || le.getShippingAddress() || {
                                    country: {
                                        value: ""
                                    },
                                    state: {
                                        value: ""
                                    },
                                    city: {
                                        value: ""
                                    }
                                },
                                r = X()(n.shippingRegions || {}) || [],
                                o = i.country.value,
                                s = i.state.value,
                                l = i.city.value;
                            return o && (te()(r).call(r, o) || te()(r).call(r, "default")) && (s || l)
                        }
                    }, {
                        key: "getSharedUpdateOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.props,
                                n = t.isShippingRequired,
                                a = t.orderFeeList,
                                i = this.state.addressFilled,
                                r = me(a || ye()),
                                o = r.total,
                                s = r.subtotal,
                                l = r.shippingFee,
                                u = r.taxes,
                                p = r.couponDiscount,
                                c = this.getShippingOptions(),
                                d = [],
                                h = {
                                    total: {
                                        label: de("Ecommerce|Total"),
                                        amount: o
                                    }
                                };
                            return o !== s && (d.push({
                                amount: s,
                                label: de("Ecommerce|Subtotal")
                            }), p && d.push({
                                amount: p,
                                label: de("EcommerceCoupon|Coupon")
                            })), n && "number" == typeof l && d.push({
                                amount: l,
                                label: de("Ecommerce|Shipping")
                            }), "number" == typeof u && d.push({
                                amount: u,
                                label: de("Ecommerce|Tax")
                            }), h.displayItems = d, n && (e || i) && c.length && (h.shippingOptions = T()(c).call(c, (function(e) {
                                var t = e.id,
                                    n = e.name,
                                    a = e.shippingGuideline,
                                    i = e.amount;
                                return {
                                    id: String(t),
                                    label: n,
                                    detail: a || "",
                                    amount: i ? fe(i) : 0
                                }
                            }))), h
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.applePay,
                                n = e.googlePay,
                                i = this.props,
                                r = i.settings,
                                o = i.onCreateFailed;
                            return r && r.paymentGateways && r.paymentGateways.stripe ? (0, a.Z)("div", {
                                className: ie()((0, re.css)("inline-block"))
                            }, void 0, t || n ? (0, a.Z)(ne.c8, {
                                className: "payment-request-button",
                                paymentRequest: this.paymentRequest,
                                style: {
                                    paymentRequestButton: {
                                        theme: "dark",
                                        height: "48px"
                                    }
                                },
                                onClick: this.handleClickPaymentRequestButton
                            }) : null) : ("function" == typeof o && o(), null)
                        }
                    }]), r
                }(l.Component),
                we = (0, ne.kv)(ve),
                Se = 389 != n.j ? ["locale"] : null,
                _e = 389 != n.j ? function(e) {
                    var t, n, o, p, c = e.locale,
                        d = (0, r.Z)(e, Se),
                        h = null === (t = d.settings.paymentGateways) || void 0 === t ? void 0 : t.stripePublishableKey;
                    return h && -1 !== (null === (n = window) || void 0 === n || null === (o = n.location) || void 0 === o ? void 0 : s()(p = o.protocol).call(p, "https")) ? (0, a.Z)(u.Z, {
                        publishableApiKey: h,
                        locale: c
                    }, void 0, l.createElement(we, (0, i.Z)({
                        publishableApiKey: h
                    }, d))) : ("function" == typeof d.onCreateFailed && d.onCreateFailed(), null)
                } : null
        },
        709597: function(e, t, n) {
            n.r(t), n.d(t, {
                ENV: function() {
                    return i
                },
                PRODUCT_NAME: function() {
                    return a
                },
                getConfig: function() {
                    return o
                }
            });
            var a = {
                    NODE_ENV: "production",
                    VERBOSE: void 0
                }.PRODUCT_NAME || "sxl",
                i = "production",
                r = {
                    bobcat: {
                        strikingly: {
                            development: {
                                baseUrl: "strikingly.io:3000",
                                mainUrl: "http://www.strikingly.io:3000",
                                assetUrl: "//strikingly.io:3000"
                            },
                            staging: {
                                baseUrl: "staging.strikingly.com",
                                mainUrl: "http://www.staging.strikingly.com",
                                assetUrl: "//staging.strikingly.com"
                            },
                            uat: {
                                baseUrl: "uat.strikingly.com",
                                mainUrl: "http://www.uat.strikingly.com",
                                assetUrl: "//uat.strikingly.com"
                            },
                            production: {
                                baseUrl: "strikingly.com",
                                mainUrl: "http://www.strikingly.com",
                                assetUrl: "//strikingly.com"
                            }
                        },
                        sxl: {
                            development: {
                                baseUrl: "shangxianle.me:3000",
                                mainUrl: "http://www.shangxianle.me:3000",
                                assetUrl: "//shangxianle.me:3000"
                            },
                            staging: {
                                baseUrl: "staging.sxl.cn",
                                mainUrl: "http://www.staging.sxl.cn",
                                assetUrl: "//staging.sxl.cn"
                            },
                            uat: {
                                baseUrl: "uat.sxl.cn",
                                mainUrl: "http://www.uat.sxl.cn",
                                assetUrl: "//uat.sxl.cn"
                            },
                            production: {
                                baseUrl: "sxl.cn",
                                mainUrl: "http://www.sxl.cn",
                                assetUrl: "//assets.sxlcdn.com"
                            }
                        }
                    },
                    qiniu: {
                        strikingly: {
                            development: {
                                host: ""
                            },
                            staging: {
                                host: ""
                            },
                            uat: {
                                host: ""
                            },
                            production: {
                                host: ""
                            }
                        },
                        sxl: {
                            development: {
                                host: "//7xpea4.com1.z0.glb.clouddn.com"
                            },
                            staging: {
                                host: "http://7xpea4.com1.z0.glb.clouddn.com"
                            },
                            uat: {
                                host: "http://7xpea4.com1.z0.glb.clouddn.com"
                            },
                            production: {
                                host: "http://user-assets.sxlcdn.com"
                            }
                        }
                    }
                },
                o = function(e) {
                    return r[e][a][i]
                }
        },
        433137: function(e, t, n) {
            var a = n(353147),
                i = n(686902),
                r = n(14310),
                o = n(620116),
                s = n(834074),
                l = n(778914),
                u = n(239649),
                p = n(820368),
                c = n(663978),
                d = n(60530)(n(60530));
            c(t, "__esModule", {
                value: !0
            });
            var h = n(487672),
                g = (0, d.default)(h);
            t.getWxConfForOauth = M, t.storeShoppingCart = j, t.getShoppingCart = function() {
                var e = decodeURIComponent(location ? location.href : ""),
                    t = (0, C.default)(e).paramsToMap() || {},
                    n = t.wechat_pre_order_id;
                return delete t.open_payment_dialog, delete t.wechat_pre_order_id, new v.default((function(e, a) {
                    F.default.orders.getShoppingCart({
                        pageId: k.default.getId(),
                        weChatPreOrderId: n,
                        success: function(n) {
                            var a = n.data,
                                i = _.merge({}, JSON.parse(R.default.getItem("__strk_shopping_cart")), t, a, {
                                    orderData: {}
                                });
                            e(i)
                        },
                        fail: function(e) {
                            a(e)
                        }
                    })
                }))
            }, t.getOauthUri = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = "",
                    n = N.default.v4();
                j(n, e);
                var a, i, r, o, s, l, u = "https://open.weixin.qq.com/connect/oauth2/authorize?",
                    p = location && location.origin;
                t = x.default.getRollout("new_wechat_oauth") ? (0, S.default)(a = (0, S.default)(i = (0, S.default)(r = "https://www.".concat((0, E.getConfig)("bobcat").baseUrl, "/mp/wechat_auth?open_payment_dialog=true&wechat_pre_order_id=")).call(r, n, "&site_id=")).call(i, k.default.getId(), "&original_host=")).call(a, p) : (0, S.default)(o = (0, S.default)(s = (0, S.default)(l = "https://www.".concat((0, E.getConfig)("bobcat").baseUrl, "/s/wechat_auth?open_payment_dialog=true&wechat_pre_order_id=")).call(l, n, "&site_id=")).call(s, k.default.getId(), "&original_host=")).call(o, p);
                var c = M(encodeURIComponent(t)),
                    d = A.transformToParamsWithMap(c);
                return "".concat(u).concat(d, "#wechat_redirect")
            };
            var f = n(686902),
                m = (0, d.default)(f),
                y = n(493476),
                v = (0, d.default)(y),
                w = n(977766),
                S = (0, d.default)(w),
                b = n(350723),
                C = (0, d.default)(b),
                O = n(234584),
                k = (0, d.default)(O),
                U = n(80827),
                P = (0, d.default)(U),
                I = n(991003),
                R = (0, d.default)(I),
                q = n(183123),
                x = (0, d.default)(q),
                E = n(709597),
                D = n(468811),
                N = (0, d.default)(D),
                Z = n(10711),
                F = (0, d.default)(Z);

            function T(e, t) {
                var n = i(e);
                if (r) {
                    var a = r(e);
                    t && (a = o(a).call(a, (function(t) {
                        return s(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) l(n = T(Object(a), !0)).call(n, (function(t) {
                        (0, g.default)(e, t, a[t])
                    }));
                    else if (u) p(e, u(a));
                    else {
                        var i;
                        l(i = T(Object(a))).call(i, (function(t) {
                            c(e, t, s(a, t))
                        }))
                    }
                }
                return e
            }
            var A = (0, C.default)(location.href);

            function M(e, t) {
                return {
                    appid: $S.stores.pageMeta.ecommerce.seller_wechat_app_id,
                    redirect_uri: e,
                    response_type: "code",
                    scope: t || "snsapi_base"
                }
            }

            function j(e, t) {
                var n = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {};
                    try {
                        for (var a in (n = x.default.getIsNewCheckoutDesign() ? 0 === (0, m.default)(t).length ? JSON.parse(R.default.getItem("__strk_shopping_cart")) : t : P.default.getCart()).shipping) delete n.shipping[a].errorTrigger;
                        n.wechatPreOrderId = e
                    } catch (e) {
                        console.error("出现了未知的错误，请联系我们的客服人员")
                    }
                    return n
                }(e, t);
                n = L(L({}, n), {}, {
                    orderData: {}
                }), F.default.orders.setShoppingCart({
                    pageId: k.default.getId(),
                    data: n,
                    success: function() {
                        console.info("set shopping cart successful")
                    },
                    fail: function(e) {
                        console.error(e), alert(a("Ecommerce|Sorry, we had a problem processing your payment. Please try another payment method."))
                    }
                })
            }
        }
    }
]);