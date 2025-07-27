/*! For license information please see 6033.9435869baca41a65a3d5-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6033], {
        656162: function(e, t, r) {
            r.r(t), r.d(t, {
                FETCH_ORDERS_REQUEST: function() {
                    return a
                },
                FETCH_ORDERS_SUCCESS: function() {
                    return n
                },
                FETCH_ORDERS_FAILURE: function() {
                    return o
                },
                LOAD_MORE_ORDERS_REQUEST: function() {
                    return i
                },
                LOAD_MORE_ORDERS_SUCCESS: function() {
                    return s
                },
                LOAD_MORE_ORDERS_FAILURE: function() {
                    return u
                },
                LOAD_ONE_PAGE_ORDER_REQUEST: function() {
                    return d
                },
                LOAD_ONE_PAGE_ORDER_SUCCESS: function() {
                    return c
                },
                LOAD_ONE_PAGE_ORDER_FAILURE: function() {
                    return l
                },
                UPDATE_ORDER_REQUEST: function() {
                    return _
                },
                UPDATE_ORDER_SUCCESS: function() {
                    return S
                },
                UPDATE_ORDER_FAILURE: function() {
                    return E
                },
                FETCH_TEAM_MEMBERS_REQUEST: function() {
                    return g
                },
                FETCH_TEAM_MEMBERS_SUCCESS: function() {
                    return p
                },
                FETCH_TEAM_MEMBERS_FAILURE: function() {
                    return m
                },
                CLEAR_ORDERS: function() {
                    return R
                },
                SET_ORDERS_QUERY_SUCCESS: function() {
                    return f
                },
                SET_TEAM_MEMBER_ID_SUCCESS: function() {
                    return O
                },
                SET_ORDERS_START_AT_SUCCESS: function() {
                    return h
                },
                UPDATE_ORDER_READ_MARK_SUCCESS: function() {
                    return y
                },
                UPDATE_ORDER_READ_MARK_FAIL: function() {
                    return T
                },
                UPDATE_ORDER_STATUS_SUCCESS: function() {
                    return C
                }
            });
            var a = "entity/orders/fetch_orders_request",
                n = "entity/orders/fetch_orders_success",
                o = "entity/orders/fetch_orders_failure",
                i = "entity/orders/load_more_orders_request",
                s = "entity/orders/load_more_orders_success",
                u = "entity/orders/load_more_orders_failure",
                d = "entity/orders/load_one_page_order_request",
                c = "entity/orders/load_one_page_order_success",
                l = "entity/orders/load_one_page_order_failure",
                _ = "entity/orders/update_order_request",
                S = "entity/orders/update_order_success",
                E = "entity/orders/update_order_failure",
                g = "entity/orders/fetch_team_members_request",
                p = "entity/orders/fetch_team_members_success",
                m = "entity/orders/fetch_team_members_failure",
                R = "entity/orders/clear_orders",
                f = "entity/orders/set_order_query_success",
                O = "entity/orders/set_team_member_id_success",
                h = "entity/orders/set_order_start_at_success",
                y = "entity/orders/update_order_read_mark_success",
                T = "entity/orders/update_order_read_mark_fail",
                C = "entity/orders/update_order_status_success"
        },
        253615: function(e, t, r) {
            r.d(t, {
                k4: function() {
                    return p
                },
                S3: function() {
                    return m
                },
                ku: function() {
                    return R
                },
                KN: function() {
                    return f
                },
                yR: function() {
                    return O
                },
                s3: function() {
                    return h
                }
            });
            var a = r(859056),
                n = r(51942),
                o = r.n(n),
                i = r(778914),
                s = r.n(i),
                u = r(626295),
                d = r.n(u),
                c = (r(66992), r(241539), r(788674), r(978783), r(333948), r(229081)),
                l = r(884920),
                _ = r(647168),
                S = r(766727),
                E = r(454350),
                g = r(512076),
                p = function() {
                    return (new Date).getTime()
                },
                m = function(e) {
                    return c.getSectionHashByIndex(e)
                },
                R = function(e) {
                    return e.showNav && e.name.length ? {} : {
                        style: {
                            display: "none"
                        }
                    }
                },
                f = function() {
                    var e = r(828706).default;
                    return E.ZP, (0, l.wrapComponentWithReduxStore)(e, _.getStore())
                },
                O = function() {
                    var e = (0, S.default)((function() {
                        return Promise.resolve().then(r.bind(r, 274425)).then((function(e) {
                            return e.default
                        }))
                    }), {
                        ssr: !1
                    });
                    return (0, l.wrapComponentWithReduxStore)(e, _.getStore())
                },
                h = function(e) {
                    var t, r = {
                        mergeImageDataProps: function(e, t) {
                            var r = t.get("url"),
                                a = t.get("thumb_url");
                            return e.merge({
                                url: r,
                                thumb_url: a
                            })
                        },
                        getImageComponentProps: function(e, t, r) {
                            var a = "",
                                n = "",
                                i = "",
                                s = this.sbHasContent(e) && this.getReduxComponentProps(e),
                                u = this.getDefaultBinding(),
                                d = u.get("components.aiLogoConfig.isSvg");
                            if (this.sbHasContent("transparentAiLogo")) switch (u.get("components.aiLogoConfig.usingLogoDesign")) {
                                case g.xt.ONLY_LOGO:
                                    if (d && this.sbHasContent("darkSvgLogo")) a = this.getReduxComponentProps("darkSvgLogo").dataProps, n = this.getReduxComponentProps("lightSvgLogo").dataProps;
                                    else {
                                        var c = this.getReduxComponentProps("transparentAiLogo").dataProps;
                                        a = c, n = c, i = c
                                    }
                                    break;
                                case g.xt.VERTICAL_LAYOUT:
                                    var l = this.getReduxComponentProps("verticalLayoutTransparentAiLogo").dataProps;
                                    a = this.getReduxComponentProps("verticalLayoutDarkAiLogo").dataProps, n = this.getReduxComponentProps("verticalLayoutLightAiLogo").dataProps, i = l;
                                    break;
                                default:
                                    var _ = this.getReduxComponentProps("transparentAiLogo").dataProps;
                                    a = this.getReduxComponentProps("darkAiLogo").dataProps, n = this.getReduxComponentProps("lightAiLogo").dataProps, i = _
                            }
                            return r && i && this.sbHasContent("transparentAiLogo") ? o()({}, s, {
                                dataProps: this.mergeImageDataProps(null == s ? void 0 : s.dataProps, i),
                                _cName: e
                            }) : t && a && (d ? this.sbHasContent("darkSvgLogo") : this.sbHasContent("darkAiLogo")) ? o()({}, s, {
                                dataProps: this.mergeImageDataProps(null == s ? void 0 : s.dataProps, a),
                                _cName: e
                            }) : n && (d ? this.sbHasContent("lightSvgLogo") : this.sbHasContent("lightAiLogo")) ? o()({}, s, {
                                dataProps: this.mergeImageDataProps(null == s ? void 0 : s.dataProps, n),
                                _cName: e
                            }) : this.getReduxComponentProps(e)
                        }
                    };
                    return s()(t = d()(r)).call(t, (function(t) {
                        var r = (0, a.Z)(t, 2),
                            n = r[0],
                            o = r[1];
                        e[n] || (e[n] = o)
                    })), e
                }
        },
        647168: function(e, t, r) {
            r.r(t), r.d(t, {
                getStore: function() {
                    return ge
                },
                initStore: function() {
                    return Ee
                }
            });
            var a = r(51942),
                n = r.n(a),
                o = r(753894),
                i = r(472739),
                s = r(498481),
                u = r(576574),
                d = r(143393),
                c = "ecommerce/buy/actions/reset_cart",
                l = "ecommerce/buy/actions/set_cart_data",
                _ = d.fromJS({
                    paymentMethod: "",
                    items: [],
                    shipping: {
                        states: [],
                        citys: [],
                        countys: []
                    },
                    coupon: {}
                }),
                S = r(507144),
                E = function() {
                    var e = r(836808);
                    return {
                        memberName: e.get("member_name"),
                        memberPhone: e.get("member_phone"),
                        authenticationToken: e.get("authenticationToken")
                    }
                },
                g = d.fromJS({
                    currentOrderId: null,
                    verificationTimerStart: !1,
                    verificationTimerStartTime: null,
                    isGettingVerificationCode: !1,
                    isSigning: !1,
                    isLoggingOut: !1,
                    memberName: E().memberName,
                    memberPhone: E().memberPhone,
                    authenticationToken: E().authenticationToken,
                    pureLoginMode: !1
                }),
                p = r(484510),
                m = d.fromJS({
                    currencyCode: "USD",
                    currencyData: {
                        code: "USD",
                        name: "United States Dollar",
                        symbol: "$"
                    },
                    currencySymbol: "$",
                    feePerOrder: 10,
                    feePerAdditionalItem: 1,
                    shippingGuideline: "",
                    hasCoupon: !1,
                    paymentGateways: {
                        paynow: !1,
                        paypal: !1,
                        stripe: !1,
                        alipay: !1,
                        wechatpay: !1,
                        pingppWxPub: !1,
                        pingppWxPubQr: !1,
                        pingppAlipayQr: !1,
                        pingppAlipayWap: !1,
                        offline: !1,
                        midtrans: !1
                    },
                    paymentGatewaysCount: 0,
                    estimatedDelivery: "",
                    buyDialogOpenState: !1,
                    taxes: 0,
                    orderList: {},
                    registration: "no_registration",
                    registrationMessage: ""
                }),
                R = (0, i.combineReducers)({
                    cart: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case c:
                                return _;
                            case l:
                                return d.fromJS(t.payload);
                            default:
                                return e
                        }
                    },
                    buy: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case S.SET_CURRENT_ORDER_ID:
                                return e.set("currentOrderId", t.payload.id);
                            case S.CREATE_PHONE_VERIFICATION_CODE_REQUEST:
                                return e.merge({
                                    isGettingVerificationCode: !0,
                                    verificationTimerStart: !1,
                                    verificationTimerStartTime: null
                                });
                            case S.CREATE_PHONE_VERIFICATION_CODE_SUCCESS:
                                return e.merge({
                                    isGettingVerificationCode: !1,
                                    verificationTimerStart: !0,
                                    verificationTimerStartTime: (new Date).getTime()
                                });
                            case S.CREATE_PHONE_VERIFICATION_CODE_FAIL:
                                return e.merge({
                                    isGettingVerificationCode: !1,
                                    verificationTimerStart: !1,
                                    verificationTimerStartTime: null
                                });
                            case S.STOP_VERIFICATION_CODE_TIMER:
                                return e.merge({
                                    verificationTimerStart: !1,
                                    verificationTimerStartTime: null
                                });
                            case S.SIGN_UP_REQUEST:
                                return e.set("isSigning", !0);
                            case S.SIGN_UP_SUCCESS:
                                return e.merge({
                                    isSigning: !1,
                                    memberName: t.payload.memberName,
                                    memberPhone: t.payload.memberPhone,
                                    authenticationToken: t.payload.authenticationToken
                                });
                            case S.SIGN_UP_FAIL:
                                return e.merge({
                                    isSigning: !1
                                });
                            case S.LOGIN_REQUEST:
                                return e.set("isSigning", !0);
                            case S.LOGIN_SUCCESS:
                                return e.merge({
                                    isSigning: !1,
                                    memberName: t.payload.memberName,
                                    memberPhone: t.payload.memberPhone,
                                    authenticationToken: t.payload.authenticationToken
                                });
                            case S.LOGIN_FAIL:
                                return e.merge({
                                    isSigning: !1
                                });
                            case S.MEMBER_LOGOUT_REQUEST:
                                return e.set("isLoggingOut", !0);
                            case S.MEMBER_LOGOUT_SUCCESS:
                                return e.merge({
                                    isLoggingOut: !1,
                                    memberName: "",
                                    memberPhone: "",
                                    authenticationToken: ""
                                });
                            case S.MEMBER_LOGOUT_FAIL:
                                return e.merge({
                                    isLoggingOut: !1
                                });
                            case S.SET_PURE_LOGIN_MODE:
                                return e.set("pureLoginMode", t.payload.pureLoginMode);
                            default:
                                return e
                        }
                    },
                    settings: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type === p.GET_SETTINGS_SUCCESS ? d.fromJS(t.payload) : e
                    }
                }),
                f = r(844845),
                O = r(620116),
                h = r.n(O),
                y = r(981643),
                T = r.n(y),
                C = r(977766),
                A = r.n(C),
                I = (r(241539), r(339714), r(492762)),
                L = r.n(I),
                M = (r(493476), r(66992), r(788674), r(978783), r(333948), r(746506)),
                D = (r(2991), r(656162)),
                v = function(e) {
                    var t, r, a, n, o, i, s, u, d, c, l, _, S, E, g, p, m, R, f, O, h, y;
                    return {
                        fetchOrderRequest: A()(t = "".concat(D.FETCH_ORDERS_REQUEST, "/")).call(t, e),
                        fetchOrderSuccess: A()(r = "".concat(D.FETCH_ORDERS_SUCCESS, "/")).call(r, e),
                        fetchOrderFailure: A()(a = "".concat(D.FETCH_ORDERS_FAILURE, "/")).call(a, e),
                        updateOrderRequest: A()(n = "".concat(D.UPDATE_ORDER_REQUEST, "/")).call(n, e),
                        updateOrderSuccess: A()(o = "".concat(D.UPDATE_ORDER_SUCCESS, "/")).call(o, e),
                        updateOrderFailure: A()(i = "".concat(D.UPDATE_ORDER_FAILURE, "/")).call(i, e),
                        loadMoreOrderRequest: A()(s = "".concat(D.LOAD_MORE_ORDERS_REQUEST, "/")).call(s, e),
                        loadMoreOrderSuccess: A()(u = "".concat(D.LOAD_MORE_ORDERS_SUCCESS, "/")).call(u, e),
                        loadMoreOrderFailure: A()(d = "".concat(D.LOAD_MORE_ORDERS_FAILURE, "/")).call(d, e),
                        loadOnePageOrderRequest: A()(c = "".concat(D.LOAD_ONE_PAGE_ORDER_REQUEST, "/")).call(c, e),
                        loadOnePageOrderSuccess: A()(l = "".concat(D.LOAD_ONE_PAGE_ORDER_SUCCESS, "/")).call(l, e),
                        loadOnePageOrderFailure: A()(_ = "".concat(D.LOAD_ONE_PAGE_ORDER_FAILURE, "/")).call(_, e),
                        fetchTeamMembersRequest: A()(S = "".concat(D.FETCH_TEAM_MEMBERS_REQUEST, "/")).call(S, e),
                        fetchTeamMembersSuccess: A()(E = "".concat(D.FETCH_TEAM_MEMBERS_SUCCESS, "/")).call(E, e),
                        fetchTeamMembersFailure: A()(g = "".concat(D.FETCH_TEAM_MEMBERS_FAILURE, "/")).call(g, e),
                        updateOrderReadMarkSuccess: A()(p = "".concat(D.UPDATE_ORDER_READ_MARK_SUCCESS, "/")).call(p, e),
                        updateOrderReadMarkFail: A()(m = "".concat(D.UPDATE_ORDER_READ_MARK_FAIL, "/")).call(m, e),
                        clearOrder: A()(R = "".concat(D.CLEAR_ORDERS, "/")).call(R, e),
                        setOrderQuerySuccess: A()(f = "".concat(D.SET_ORDERS_QUERY_SUCCESS, "/")).call(f, e),
                        setOrderStartAtSuccess: A()(O = "".concat(D.SET_ORDERS_START_AT_SUCCESS, "/")).call(O, e),
                        setTeamMemberIdSuccess: A()(h = "".concat(D.SET_TEAM_MEMBER_ID_SUCCESS, "/")).call(h, e),
                        updateOrderStautsSuccess: A()(y = "".concat(D.UPDATE_ORDER_STATUS_SUCCESS, "/")).call(y, e)
                    }
                },
                U = v("all"),
                P = v("basic"),
                b = v("flashsale"),
                F = v("affiliate"),
                H = (v("groupbuy"), v("recharge"), "entity/orderRefund/fetch_order_refund_histories_request"),
                G = "entity/orderRefund/fetch_order_refund_histories_success",
                N = "entity/orderRefund/update_refund_histories_request",
                k = "entity/orderRefund/update_refund_histories_success",
                x = "entity/orderRefund/update_refund_histories_fail",
                w = "entity/orderRefund/initiative_refund_success",
                Q = (M.U4, M.Si, M.Fj, M.Ej, d.fromJS({
                    isLoading: !1,
                    isRejectLoading: !1,
                    orderRefundHistories: []
                })),
                q = r(472739).combineReducers,
                B = d.Map({}),
                J = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        switch (r.type) {
                            case e.fetchOrderRequest:
                                return t.clear().mergeDeep(r.payload.entities.orders);
                            case e.loadOnePageOrderSuccess:
                                return t.mergeDeep(r.payload.entities.orders);
                            case e.loadOnePageOrderSuccess:
                                return t.clear().mergeDeep(r.payload.entities.orders);
                            case e.updateOrderSuccess:
                                return t.mergeDeep((0, f.Z)({}, r.meta.orderId, r.payload));
                            case e.clearOrder:
                                return B;
                            case e.updateOrderReadMarkSuccess:
                                return t.mergeDeep((0, f.Z)({}, r.meta.id, {
                                    readMark: !0
                                }));
                            case e.updateOrderStautsSuccess:
                                return t.mergeDeep((0, f.Z)({}, r.meta.orderId, {
                                    refundStatus: r.payload.refundStatus,
                                    status: r.payload.orderStatus
                                }));
                            default:
                                return t
                        }
                    }
                },
                j = J(P),
                V = J(b),
                K = J(F),
                Z = d.fromJS({
                    query: ""
                }),
                W = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        return r.type === e.setOrderQuerySuccess ? t.set("query", r.payload) : t
                    }
                },
                Y = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        return r.type === e.setOrderStartAtSuccess ? t.set("startAt", r.payload) : t
                    }
                },
                $ = W(P),
                z = W(b),
                X = W(F),
                ee = Y(P),
                te = Y(b),
                re = Y(F),
                ae = (d.fromJS({
                    id: ""
                }), d.Map({})),
                ne = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        switch (r.type) {
                            case e.fetchOrderRequest:
                                return t.mergeIn([r.meta.siteId], {
                                    isFetching: !0,
                                    errorMessage: void 0
                                });
                            case e.fetchOrderSuccess:
                                var a = r,
                                    n = {},
                                    o = {};
                                n[a.meta.type] = a.payload.nextPage, o[a.meta.type] = a.payload.paginationMeta;
                                var i = t.setIn([r.meta.siteId, "pageMeta"], d.fromJS(n)).setIn([r.meta.siteId, "paginationMeta"], d.fromJS(o)).setIn([r.meta.siteId, "ids"], d.List(a.payload.result));
                                return i.mergeDeepIn([r.meta.siteId], {
                                    isFetching: !1,
                                    errorMessage: void 0
                                });
                            case e.fetchTeamMembersSuccess:
                                return t.setIn([r.meta.siteId, "teamMembers"], d.List(r.payload));
                            case e.fetchOrderFailure:
                                var s = r;
                                return t.mergeIn([r.meta.siteId], {
                                    isFetching: !1,
                                    errorMessage: s.payload.toString()
                                });
                            case e.loadOnePageOrderRequest:
                            case e.loadMoreOrderRequest:
                                return t.mergeIn([r.meta.siteId], {
                                    isLoadingMore: !0,
                                    loadMoreErrorMessage: void 0
                                });
                            case e.loadOnePageOrderSuccess:
                                var u, c = r,
                                    l = c.meta.type,
                                    _ = h()(u = d.List(c.payload.result)).call(u, (function(e, t, r) {
                                        return T()(r).call(r, e) === t
                                    })),
                                    S = t.setIn([r.meta.siteId, "pageMeta", l], c.payload.nextPage).setIn([r.meta.siteId, "paginationMeta", l], c.payload.paginationMeta).setIn([r.meta.siteId, "ids"], _).merge({
                                        totalUnread: r.payload.totalUnread
                                    });
                                return S.mergeDeepIn([r.meta.siteId], {
                                    isLoadingMore: !1,
                                    loadMoreErrorMessage: void 0
                                });
                            case e.loadMoreOrderSuccess:
                                var E, g = r,
                                    p = t.getIn([r.meta.siteId, "ids"], d.List([])),
                                    m = h()(E = A()(p).call(p, g.payload.result)).call(E, (function(e, t, r) {
                                        return T()(r).call(r, e) === t
                                    })),
                                    R = t.setIn([r.meta.siteId, "pageMeta", g.meta.type], g.payload.nextPage).setIn([r.meta.siteId, "paginationMeta", g.meta.type], g.payload.paginationMeta).setIn([r.meta.siteId, "ids"], m);
                                return R.mergeDeepIn([r.meta.siteId], {
                                    isLoadingMore: !1,
                                    loadMoreErrorMessage: void 0
                                });
                            case e.loadOnePageOrderFailure:
                            case e.loadMoreOrderFailure:
                                var f = r;
                                return t.mergeIn([r.meta.siteId], {
                                    isLoadingMore: !1,
                                    loadMoreErrorMessage: f.payload.toString()
                                });
                            case e.updateOrderRequest:
                                return t.mergeIn([r.meta.siteId], {
                                    isUpdating: !0
                                });
                            case e.updateOrderFailure:
                            case e.updateOrderSuccess:
                                return t.mergeIn([r.meta.siteId], {
                                    isUpdating: !1
                                });
                            case e.clearOrder:
                                return ae;
                            case e.updateOrderReadMarkSuccess:
                                return t.merge({
                                    totalUnread: t.get("totalUnread") - 1
                                });
                            default:
                                return t
                        }
                    }
                },
                oe = ne(U),
                ie = {
                    basicOrder: j,
                    flashSaleOrder: V,
                    affiliateOrder: K,
                    basicOrderQuery: $,
                    flashSaleOrderQuery: z,
                    affiliateOrderQuery: X,
                    basicOrderStartAt: ee,
                    flashSaleOrderStart: te,
                    affiliateOrderStart: re,
                    basicListGroupBySiteId: ne(P),
                    allListGroupBySiteId: oe,
                    flashSaleListGroupBySiteId: ne(b),
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type === D.LOAD_MORE_ORDERS_SUCCESS ? e.mergeDeep(t.payload.entities.orders) : e
                    },
                    listGroupBySiteId: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case D.LOAD_MORE_ORDERS_REQUEST:
                                return e.mergeIn([t.meta.siteId], {
                                    isLoadingMore: !0,
                                    loadMoreErrorMessage: void 0
                                });
                            case D.LOAD_MORE_ORDERS_SUCCESS:
                                var r, a = t,
                                    n = e.getIn([t.meta.siteId, "ids"], d.List([])),
                                    o = h()(r = A()(n).call(n, a.payload.result)).call(r, (function(e, t, r) {
                                        return T()(r).call(r, e) === t
                                    })),
                                    i = e.setIn([t.meta.siteId, "pageMeta", a.meta.type], a.payload.nextPage).setIn([t.meta.siteId, "paginationMeta", a.meta.type], a.payload.paginationMeta).setIn([t.meta.siteId, "ids"], o);
                                return i.mergeDeepIn([t.meta.siteId], {
                                    isLoadingMore: !1,
                                    loadMoreErrorMessage: void 0
                                });
                            case D.LOAD_MORE_ORDERS_FAILURE:
                                var s = t;
                                return e.mergeIn([t.meta.siteId], {
                                    isLoadingMore: !1,
                                    loadMoreErrorMessage: s.payload.toString()
                                });
                            default:
                                return e
                        }
                    },
                    orderRefundHistories: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case w:
                                var r = e.get("orderRefundHistories");
                                return r.unshift(t.payload), e.set("orderRefundHistories", r).set("isLoading", !1);
                            case k:
                                var a = e.get("orderRefundHistories");
                                return L()(a).call(a, 0, 1, t.payload), e.set("orderRefundHistories", a).set("isLoading", !1).set("isRejectLoading", !1);
                            case G:
                                return e.set("orderRefundHistories", t.payload).set("isLoading", !1);
                            case H:
                            case N:
                                return t.meta && "bossReject" === t.meta.type ? e.set("isRejectLoading", !0) : e.set("isLoading", !0);
                            case x:
                                return e.set("isLoading", !1).set("isRejectLoading", !1);
                            default:
                                return e
                        }
                    }
                },
                se = q(n()(ie, {})),
                ue = r(2825),
                de = r(884920),
                ce = r(80676),
                le = r(839658),
                _e = null,
                Se = (0, i.combineReducers)({
                    order: se
                });

            function Ee(e) {
                (_e = (0, ce.Z)()).addModule({
                    id: "rootModule",
                    reducerMap: n()({
                        ui: s.reducer,
                        ecommerceBuy: R,
                        entities: Se,
                        form: u.reducer,
                        siteSearch: ue
                    }, e),
                    middlewares: [o.default, le.Z]
                }), de.setGlobalStore(_e)
            }

            function ge() {
                return _e
            }
        },
        216033: function(e, t, r) {
            r.d(t, {
                Pz: function() {
                    return s
                }
            }), r(974916), r(864765), r(115306);
            var a = r(977766),
                n = r.n(a),
                o = (r(51942), r(694473), r(277149), r(778914), r(496486), r(730381), r(805803));

            function i(e) {
                var t;
                return e ? e.parent ? n()(t = "".concat(i(e.parent), "/")).call(t, e.name) : "".concat(e.name) : ""
            }
            r(183123), r(818166), r(269339), r(253615), r(353147);
            var s = function(e, t, r) {
                var a, s, u, d, c, l = (c = "string" == typeof(a = e) ? a : n()(s = n()(u = "".concat(i(a))).call(u, location.search)).call(s, location.hash), location.pathname.replace(/(\d+\/edit).*$/, n()(d = "$1/".concat("")).call(d, c)));
                o.browserHistory.push({
                    pathname: l,
                    state: r
                })
            }
        },
        635802: function(e, t, r) {
            var a = r(663978),
                n = r(60530)(r(60530));
            a(t, "__esModule", {
                value: !0
            });
            var o = r(213192),
                i = {
                    ActionTypes: (0, (0, n.default)(o).default)({
                        GET_SEARCH_RESULTS: null,
                        GET_SEARCH_RESULTS_SUCCESS: null,
                        GET_SEARCH_RESULTS_FAIL: null,
                        RESET_SEARCH_RESULTS: null
                    })
                };
            t.default = i, e.exports = t.default
        },
        2825: function(e, t, r) {
            var a = r(223765),
                n = r(752424),
                o = r(663978),
                i = r(834074),
                s = r(60530)(r(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case c.default.ActionTypes.GET_SEARCH_RESULTS:
                        return e.merge({
                            loading: !0,
                            captchaError: !1,
                            needCaptcha: !1,
                            lastSearchKey: t.data.searchKey
                        });
                    case c.default.ActionTypes.GET_SEARCH_RESULTS_SUCCESS:
                        return e.merge({
                            loading: !1,
                            searchResults: t.data,
                            needCaptcha: t.data.needCaptcha
                        });
                    case c.default.ActionTypes.GET_SEARCH_RESULTS_FAIL:
                        return e.merge({
                            loading: !1,
                            needCaptcha: t.data.needCaptcha,
                            captchaError: t.data.captchaError
                        });
                    case c.default.ActionTypes.RESET_SEARCH_RESULTS:
                        return e.merge(_);
                    default:
                        return e
                }
            };
            var u = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = l(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        s = o && i;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var d = s ? i(e, u) : null;
                            d && (d.get || d.set) ? o(n, u, d) : n[u] = e[u]
                        }
                    return n.default = e, r && r.set(e, n), n
                }(r(143393)),
                d = r(635802),
                c = (0, s.default)(d);

            function l(e) {
                if ("function" != typeof n) return null;
                var t = new n,
                    r = new n;
                return (l = function(e) {
                    return e ? r : t
                })(e)
            }
            var _ = u.fromJS({
                loading: !1,
                searchResults: null,
                lastSearchKey: ""
            });
            e.exports = t.default
        }
    }
]);