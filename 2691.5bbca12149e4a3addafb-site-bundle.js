/*! For license information please see 2691.5bbca12149e4a3addafb-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [2691], {
        532691: function(e, o, t) {
            t.r(o);
            var l = t(863056),
                n = t(859056),
                i = t(366757),
                r = t(685231),
                a = t(234584),
                c = t.n(a),
                u = t(562238),
                f = t(927718),
                d = t(388004),
                s = t(553182),
                p = (t(220061), i.useState),
                v = i.useEffect,
                b = i.useCallback;
            o.default = function() {
                var e = p(!1),
                    o = (0, n.Z)(e, 2),
                    t = o[0],
                    a = o[1],
                    k = p(!1),
                    E = (0, n.Z)(k, 2),
                    _ = E[0],
                    C = E[1],
                    Z = p(u.d.NORMAL),
                    y = (0, n.Z)(Z, 2),
                    g = y[0],
                    m = y[1],
                    w = p({}),
                    P = (0, n.Z)(w, 2),
                    O = P[0],
                    T = P[1],
                    h = p({}),
                    Q = (0, n.Z)(h, 2),
                    S = Q[0],
                    U = Q[1],
                    R = p(!1),
                    q = (0, n.Z)(R, 2),
                    L = q[0],
                    N = q[1],
                    A = p({}),
                    I = (0, n.Z)(A, 2),
                    M = I[0],
                    V = I[1];
                v((function() {
                    var e, o;
                    L || (N(!1), (0, f.E)().then((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        U(e), N(!0)
                    })), null === (e = window.edit_page) || void 0 === e || null === (o = e.Event) || void 0 === o || o.subscribe("Open.Portfolio.EmailWall", (function(e, o) {
                        if ((null == o ? void 0 : o.type) === u.d.REQUEST_QUOTE) {
                            var t = c().getPortfolioVisitor();
                            if (c().getPortfolioVisitor()) {
                                var l = (null == o ? void 0 : o.productPreview) || {},
                                    n = l.productId,
                                    i = l.addOns,
                                    r = l.totalPrice,
                                    d = l.currencyCode,
                                    s = l.price,
                                    p = l.type,
                                    v = l.variationId;
                                return (0, f.q)({
                                    request_quote: {
                                        product_id: n,
                                        portfolio_visitor: t,
                                        add_ons: i,
                                        total_price: r,
                                        variation_id: v,
                                        currency_code: d,
                                        current_region: c().getLiveSiteCountryCode() || "",
                                        price: s,
                                        type: p
                                    }
                                }).then((function() {
                                    return C(!0)
                                }))
                            }
                            a(!0), m(u.d.REQUEST_QUOTE), null != o && o.productPreview && T(o.productPreview)
                        } else m(u.d.NORMAL), a(!0);
                        (null != o && o.callback && "function" == typeof o.callback || null != o && o.closeCallback && "function" == typeof o.closeCallback) && V(o)
                    })))
                }), []);
                var D = b((function() {
                        C(!1), V({})
                    }), [t]),
                    F = b((function() {
                        var e = M.closeCallback;
                        if (a(!1), V({}), e && "function" == typeof e) return e()
                    }), [t, M]),
                    W = b((function() {
                        a(!1), V({}), g === u.d.REQUEST_QUOTE && C(!0), M.callback && "function" == typeof M.callback && M.callback()
                    }), [t, g, M, _]);
                return i.createElement(i.Fragment, null, (0, l.Z)(r.Z, {
                    wrapClassName: "portfolio-wall-form-dialog",
                    visible: t,
                    maskClosable: !1,
                    onCancel: F
                }, void 0, L && (0, l.Z)(d.Z, {
                    formType: g,
                    productPreview: O,
                    saveCallback: W,
                    formSettings: S
                })), (0, l.Z)(s.Z, {
                    visible: _,
                    closeDialog: D
                }))
            }
        }
    }
]);