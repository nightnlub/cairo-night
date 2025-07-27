/*! For license information please see 6108.b15d855f9335e328e5c4-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6108], {
        824721: function(e, t, a) {
            a.r(t), a.d(t, {
                InitState: function() {
                    return C
                },
                default: function() {
                    return M
                }
            });
            var n = a(501068),
                r = a.n(n),
                i = a(468420),
                s = a(505281),
                o = a(484441),
                u = a(103020),
                c = a(803362),
                d = a(844845),
                l = (a(974916), a(115306), a(977766)),
                f = a.n(l),
                p = a(694473),
                g = a.n(p),
                m = a(143393),
                _ = a(234584),
                E = "entities/domain/update_selected_domain",
                I = "entities/domain/fetch_namecheap_domains_request",
                y = "entities/domain/fetch_namecheap_domains_success",
                v = "entities/domain/fetch_namecheap_domains_failure",
                h = "entities/domain/disconnect_namecheap_domain_request",
                S = "entities/domain/disconnect_namecheap_domain_success",
                T = "entities/domain/disconnect_namecheap_domain_failure";
            var C = function(e) {
                    (0, o.Z)(l, e);
                    var t, a, n = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !r()) return !1;
                        if (r().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(r()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, c.Z)(t);
                        if (a) {
                            var i = (0, c.Z)(this).constructor;
                            e = r()(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, u.Z)(this, e)
                    });

                    function l() {
                        var e, t;
                        (0, i.Z)(this, l);
                        for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                        return t = n.call.apply(n, f()(e = [this]).call(e, r)), (0, d.Z)((0, s.Z)(t), "domains", void 0), (0, d.Z)((0, s.Z)(t), "connectedDomain", void 0), (0, d.Z)((0, s.Z)(t), "isFetching", void 0), (0, d.Z)((0, s.Z)(t), "hasFetched", void 0), (0, d.Z)((0, s.Z)(t), "errorMsg", void 0), (0, d.Z)((0, s.Z)(t), "selectedDomain", void 0), (0, d.Z)((0, s.Z)(t), "isDisconnecting", void 0), t
                    }
                    return l
                }(m.Record({
                    domains: [],
                    connectedDomain: "",
                    isFetching: !1,
                    hasFetched: !1,
                    errorMsg: "",
                    selectedDomain: "",
                    isDisconnecting: !1
                })),
                D = new C,
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case I:
                            return e.merge({
                                isFetching: !0
                            });
                        case y:
                            var a = t,
                                n = a.payload.domains,
                                r = _.getCustomDomain(),
                                i = r ? r.replace(/^.*www\./, "") : "",
                                s = "";
                            return i && (n.unshift(i), s = g()(n).call(n, (function(e) {
                                return e === i
                            }))), e.merge({
                                isFetching: !1,
                                hasFetched: !0,
                                domains: n,
                                connectedDomain: i,
                                selectedDomain: s
                            });
                        case v:
                            var o = t;
                            return e.merge({
                                isFetching: !1,
                                hasFetched: !0,
                                errorMsg: o.payload.errorMsg
                            });
                        case h:
                            return e.merge({
                                isDisconnecting: !0,
                                errorMsg: ""
                            });
                        case S:
                            return e.merge({
                                isDisconnecting: !1,
                                connectedDomain: "",
                                selectedDomain: ""
                            });
                        case T:
                            var u = t;
                            return e.merge({
                                isDisconnecting: !1,
                                errorMsg: u.payload.errorMsg
                            });
                        case E:
                            var c = t;
                            return e.merge({
                                selectedDomain: c.payload.domain
                            });
                        default:
                            return e
                    }
                }
        },
        876828: function(e, t, a) {
            a.r(t), a.d(t, {
                createEntityReducer: function() {
                    return J
                }
            });
            var n = a(844845),
                r = a(678580),
                i = a.n(r),
                s = a(778914),
                o = a.n(s),
                u = (a(241539), a(339714), a(143393)),
                c = a(686902),
                d = a.n(c),
                l = a(14310),
                f = a.n(l),
                p = a(620116),
                g = a.n(p),
                m = a(834074),
                _ = a.n(m),
                E = a(239649),
                I = a.n(E),
                y = a(820368),
                v = a.n(y),
                h = a(663978),
                S = a.n(h),
                T = a(51942),
                C = a.n(T),
                D = a(177897);

            function M(e, t) {
                var a = d()(e);
                if (f()) {
                    var n = f()(e);
                    t && (n = g()(n).call(n, (function(t) {
                        return _()(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var A = "entity/general_entity/delete_entity_request/",
                R = "entity/general_entity/delete_entity_success/",
                P = "entity/general_entity/delete_entity_failure/",
                O = {
                    FETCH_ENTITIES_REQUEST: "entity/general_entity/fetch_entity_request/",
                    FETCH_ENTITIES_SUCCESS: "entity/general_entity/fetch_entity_success/",
                    FETCH_ENTITIES_FAILURE: "entity/general_entity/fetch_entity_failure/",
                    CREATE_ENTITY_REQUEST: "entity/general_entity/create_entity_request/",
                    CREATE_ENTITY_SUCCESS: "entity/general_entity/create_entity_success/",
                    CREATE_ENTITY_FAILURE: "entity/general_entity/create_entity_failure/",
                    UPDATE_ENTITY_REQUEST: "entity/general_entity/update_entity_request/",
                    UPDATE_ENTITY_SUCCESS: "entity/general_entity/update_entity_success/",
                    UPDATE_ENTITY_FAILURE: "entity/general_entity/update_entity_failure/",
                    DELETE_ENTITY_REQUEST: A,
                    DELETE_ENTITY_SUCCESS: R,
                    DELETE_ENTITY_FAILURE: P,
                    CLEAR_ENTITIES: "entity/general_entity/clear_entities/",
                    GET_SHOWCASE_STORE_FRONTS_LIST: "entity/general_entity/set_showcase_store_list/"
                };

            function N(e, t, a, n) {
                var r = a.toString(),
                    i = n.toString();
                return function(s) {
                    return s({
                        type: A + e,
                        meta: {
                            siteId: r,
                            entityId: i
                        }
                    }), t(a, n).then((function() {
                        s({
                            type: R + e,
                            meta: {
                                siteId: r,
                                entityId: i
                            }
                        })
                    })).catch((function(t) {
                        s({
                            type: P + e,
                            meta: {
                                siteId: r,
                                entityId: i
                            }
                        })
                    }))
                }
            }

            function F(e) {
                var t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a, r = null != arguments[t] ? arguments[t] : {};
                        if (t % 2) o()(a = M(Object(r), !0)).call(a, (function(t) {
                            (0, n.Z)(e, t, r[t])
                        }));
                        else if (I()) v()(e, I()(r));
                        else {
                            var i;
                            o()(i = M(Object(r))).call(i, (function(t) {
                                S()(e, t, _()(r, t))
                            }))
                        }
                    }
                    return e
                }({}, O);
                for (var a in t) t[a] += e;
                return C()(t, {
                    getGeneralDeleteAction: (0, D.curry)(N)(e)
                })
            }
            var b = a(891743),
                U = a(472739).combineReducers;

            function J(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = u.Map({}),
                    s = F(e),
                    c = s.FETCH_ENTITIES_REQUEST,
                    d = s.FETCH_ENTITIES_SUCCESS,
                    l = s.FETCH_ENTITIES_FAILURE,
                    f = s.CREATE_ENTITY_REQUEST,
                    p = s.CREATE_ENTITY_SUCCESS,
                    g = s.CREATE_ENTITY_FAILURE,
                    m = s.UPDATE_ENTITY_REQUEST,
                    _ = s.UPDATE_ENTITY_SUCCESS,
                    E = s.UPDATE_ENTITY_FAILURE,
                    I = s.DELETE_ENTITY_REQUEST,
                    y = s.DELETE_ENTITY_SUCCESS,
                    v = s.DELETE_ENTITY_FAILURE,
                    h = s.CLEAR_ENTITIES,
                    S = s.GET_SHOWCASE_STORE_FRONTS_LIST;

                function T() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = t.meta && t.meta.entityId ? t.meta.entityId.toString() : null,
                        n = t.meta && t.meta.schemaName || "entities";
                    switch (t.type) {
                        case d:
                            return e.merge(t.payload.entities[n]);
                        case p:
                        case _:
                            if (a) {
                                var s = t.payload.item,
                                    u = e.mergeIn([a], s),
                                    c = s.parent_id,
                                    l = s.id;
                                if (c && !e.has("".concat(l)) && "category" === t.meta.schemaName) {
                                    var f = e.getIn(["".concat(c), "children"]);
                                    if (f && !i()(f).call(f, l)) return u.setIn(["".concat(c), "children"], f.push(l))
                                }
                                return u
                            }
                            return t.payload && t.payload.entities && t.payload.entities[n] ? e.merge(t.payload.entities[n]) : e;
                        case y:
                            var g = e.delete(a),
                                m = e.get("".concat(a)),
                                E = m.get("children");
                            null == E || o()(E).call(E, (function(e) {
                                g.has("".concat(e)) && (g = g.delete("".concat(e)))
                            }));
                            var I = m.get("parent_id");
                            if (I) {
                                var v = g.getIn(["".concat(I), "children"]);
                                v && (v = v.filterNot((function(e) {
                                    return "".concat(e) === a
                                })), g = g.setIn(["".concat(I), "children"], v));
                                var S = g.getIn(["".concat(I), "children_category_order"]);
                                S && (S = S.delete(a), g.setIn(["".concat(I), "children_category_order"], S))
                            }
                            return g;
                        case h:
                            return r;
                        default:
                            return e
                    }
                }

                function C() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === S ? e.merge(u.fromJS({
                        commitShowcaseStoreList: t.payload
                    })) : e
                }
                var D = u.Map({});

                function M() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = t.meta && t.meta.siteId ? t.meta.siteId.toString() : "defaultId",
                        r = t.meta && t.meta.entityId ? t.meta.entityId.toString() : null;
                    switch (t.type) {
                        case c:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isFetching: !0,
                                fetchError: !1
                            }));
                        case d:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isFetching: !1,
                                hasFetched: !0,
                                fetchError: !1,
                                paginationMeta: t.payload.paginationMeta
                            })).setIn([a, "ids"], u.List(t.payload.result)).merge({
                                totalUnread: t.payload.totalUnread,
                                totalCount: t.payload.totalCount
                            });
                        case l:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isFetching: !1,
                                fetchError: !0
                            }));
                        case f:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isCreating: !0,
                                createError: !1
                            }));
                        case p:
                            var i = {
                                isCreating: !1,
                                createError: !1
                            };
                            return r && (i.ids = e.getIn([a, "ids"], u.fromJS([])).push(r)), t.payload && void 0 !== t.payload.result && (i.ids = e.getIn([a, "ids"], u.fromJS([])).unshift(t.payload.result)), e.mergeDeep((0, n.Z)({}, a, i));
                        case g:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isCreating: !1,
                                createError: !0
                            }));
                        case m:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isUpdating: !0,
                                updateError: !1
                            }));
                        case _:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isUpdating: !1,
                                updateError: !1
                            }));
                        case E:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isUpdating: !1,
                                updateError: !0
                            }));
                        case I:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isDeleting: !0,
                                deleteError: !1
                            }));
                        case y:
                            var s = e.getIn([a, "ids"]);
                            return r && (s = s.filterNot((function(e) {
                                return e && e.toString() === r
                            }))), e.mergeDeep((0, n.Z)({}, a, {
                                isDeleting: !1,
                                deleteError: !1
                            })).setIn([a, "ids"], s);
                        case v:
                            return e.mergeDeep((0, n.Z)({}, a, {
                                isDeleting: !1,
                                deleteError: !0
                            }));
                        default:
                            return e
                    }
                }
                return U({
                    data: (0, b.e)((0, b.v)(T, {
                        overwrittenReducer: t.dataReducer,
                        overwriteActions: t.dataReducerOverwriteActions
                    }), a.dataReducer),
                    storefronts: (0, b.e)((0, b.v)(C, {
                        overwrittenReducer: t.storefrontReducer,
                        overwriteActions: t.dataReducerOverwriteActions
                    }), a.storefrontReducer),
                    listGroupBySiteId: (0, b.e)((0, b.v)(M, {
                        overwrittenReducer: t.listReducer,
                        overwriteActions: t.listReducerOverwriteActions
                    }), a.listReducer)
                })
            }
        },
        891743: function(e, t, a) {
            a.d(t, {
                v: function() {
                    return o
                },
                e: function() {
                    return c
                }
            });
            var n = a(678580),
                r = a.n(n),
                i = a(432366),
                s = a.n(i);

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function(a, n) {
                    var i = t.overwrittenReducer,
                        s = t.overwriteActions;
                    return "function" == typeof i && s && r()(s).call(s, n.type) ? i(a, n) : e(a, n)
                }
            }

            function u(e, t) {
                return function(a, n) {
                    var r = e(a, n);
                    return "function" == typeof t ? t(r, n) : r
                }
            }

            function c(e) {
                for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
                return a && a.length ? s()(a).call(a, (function(e, t) {
                    return u(e, t)
                }), e) : e
            }
        },
        237872: function(e, t, a) {
            a.r(t), a.d(t, {
                getStore: function() {
                    return ot
                },
                initStore: function() {
                    return st
                }
            });
            var n = a(51942),
                r = a.n(n),
                i = a(753894),
                s = a(498481),
                o = (a(501068), a(484441), a(103020), a(803362), a(844845)),
                u = a(977766),
                c = a.n(u),
                d = a(143393),
                l = "entities/templates/fetch_template_categories_success",
                f = "entities/templates/fetch_templates_by_category_success",
                p = "entities/templates/fetch_templates_by_category_failure",
                g = a(472739).combineReducers,
                m = d.List([]),
                _ = d.Map({});
            d.Record({
                ids: d.List([]),
                hasFetched: !1,
                pagination: {
                    currentPage: 1,
                    totalPages: 1
                }
            });
            var E = d.Map({}),
                I = g({
                    categories: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (t.type === l) {
                            var a = t;
                            return d.List(a.payload.categories)
                        }
                        return e
                    },
                    templates: function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
                            a = arguments.length > 1 ? arguments[1] : void 0;
                        if (a.type === f) {
                            var n = a,
                                r = (null === (e = n.payload.extraResults) || void 0 === e ? void 0 : e.entities.extraResults) || [];
                            return t.merge(n.payload.entities.templates, r)
                        }
                        return t
                    },
                    byCategory: function() {
                        var e, t, a, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        switch (r.type) {
                            case f:
                                var i = r,
                                    s = (null === (e = i.payload.extraResults) || void 0 === e ? void 0 : e.result) || [];
                                return n.mergeIn([i.payload.category], {
                                    ids: 1 === i.meta.pagination.currentPage ? i.payload.result : c()(t = n.getIn([i.payload.category, "ids"])).call(t, i.payload.result),
                                    extraResultsIds: 1 === i.meta.pagination.currentPage ? s : c()(a = n.getIn([i.payload.category, "extraResultsIds"])).call(a, s),
                                    hasFetched: !0,
                                    hasFetchedSuccess: !0,
                                    pagination: i.meta.pagination
                                });
                            case p:
                                var o = r;
                                return n.mergeIn([o.payload.category], {
                                    hasFetchedSuccess: !1
                                });
                            default:
                                return n
                        }
                    }
                }),
                y = "entities/credit_card/add_credit_success",
                v = "entities/credit_card/set_submit_status",
                h = "entities/credit_card/init_has_payment_account",
                S = a(472739).combineReducers,
                T = d.Map({
                    hasPaymentAccount: !1,
                    submitting: !1
                }),
                C = S({
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case h:
                                return e.merge(t.payload);
                            case y:
                                var a = t.payload;
                                return a.hasPaymentAccount = !0, e.merge(a);
                            case v:
                                return e.merge(t.payload);
                            default:
                                return e
                        }
                    }
                }),
                D = a(472739),
                M = "entities/analytics/fetch_site_request",
                A = "entities/analytics/fetch_site_success",
                R = "entities/analytics/fetch_site_failure",
                P = "entities/analytics/fetch_data_request",
                O = "entities/analytics/fetch_data_success",
                N = "entities/analytics/fetch_data_failure",
                F = "entities/analytics/fetch_ecommerce_request",
                b = "entities/analytics/fetch_ecommerce_success",
                U = "entities/analytics/fetch_ecommerce_failure",
                J = "entities/analytics/clear_data",
                Z = (0, D.combineReducers)({
                    analyticsData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.fromJS({
                                isFetching: !0,
                                error: !1
                            }),
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case P:
                                return e.mergeDeep((0, o.Z)({}, t.payload.type, {
                                    isFetching: !0
                                }));
                            case O:
                                var a = t.payload.type;
                                return e.mergeDeep((0, o.Z)({}, a, t.payload.message), (0, o.Z)({}, a, {
                                    isFetching: !1,
                                    error: !1
                                }));
                            case N:
                                return e.mergeDeep((0, o.Z)({}, t.payload.type, {
                                    isFetching: !1,
                                    error: !0
                                }));
                            case J:
                                return e.clear();
                            default:
                                return e
                        }
                    },
                    ecommerceData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.fromJS({
                                isFetching: !0,
                                error: !1
                            }),
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case F:
                                return e.mergeDeep((0, o.Z)({}, t.payload.type, {
                                    isFetching: !0
                                }));
                            case b:
                                var a = t.payload.type + (t.payload.interval.length ? "" : "AllTime");
                                return e.mergeDeep((0, o.Z)({}, a, t.payload.data), (0, o.Z)({}, a, {
                                    isFetching: !1,
                                    error: !1
                                }));
                            case U:
                                return e.mergeDeep((0, o.Z)({}, t.payload.type, {
                                    isFetching: !1,
                                    error: !0
                                }));
                            case J:
                                return e.clear();
                            default:
                                return e
                        }
                    },
                    siteData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.fromJS({
                                isFetching: !0,
                                error: !1
                            }),
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case M:
                                return e.merge({
                                    isFetching: !0
                                });
                            case A:
                                var a = t.payload,
                                    n = a.name,
                                    r = a.publicUrl,
                                    i = a.logoUrl,
                                    s = a.hasLiveChat;
                                return e.merge({
                                    name: n,
                                    publicUrl: r,
                                    logoUrl: i,
                                    hasLiveChat: s,
                                    isFetching: !1,
                                    error: !1
                                });
                            case R:
                                return e.merge({
                                    isFetching: !1,
                                    error: !0
                                });
                            default:
                                return e
                        }
                    }
                }),
                w = a(386302),
                G = a(2991),
                L = a.n(G),
                B = a(394198),
                x = a.n(B),
                k = a(981643),
                H = a.n(k),
                q = a(620116),
                Y = a.n(q),
                W = a(678580),
                V = a.n(W),
                j = a(496486),
                Q = a(112525),
                K = "entity/form_response/fetch_form_response_request",
                $ = "entity/form_response/fetch_form_response_success",
                z = "entity/form_response/fetch_form_response_fail",
                X = "entity/form_response/load_more_form_response_request",
                ee = "entity/form_response/load_more_form_response_success",
                te = "entity/form_response/load_more_form_response_fail",
                ae = "entity/form_response/fetch_form_response_detail_request",
                ne = "entity/form_response/fetch_form_response_detail_success",
                re = "entity/form_response/fetch_form_response_detail_fail",
                ie = "entity/form_response/mark_spam_request",
                se = "entity/form_response/mark_spam_success",
                oe = "entity/form_response/delete_form_response_success",
                ue = "entity/form_response/mark_read_success",
                ce = "entity/form_response/batch_delete_form_response_request",
                de = "entity/form_response/batch_delete_form_response_success",
                le = "entity/form_response/clear_all_spam_request",
                fe = "entity/form_response/clear_all_spam_success",
                pe = a(472739).combineReducers,
                ge = d.Map({}),
                me = d.Map({});

            function _e(e, t, a) {
                return e + t + (a || "")
            }

            function Ee(e, t) {
                return {
                    inboxKey: _e(e, Q.FORM_RESPONSE_TYPE_INBOX, t),
                    spamKey: _e(e, Q.FORM_RESPONSE_TYPE_SPAM, t)
                }
            }
            d.Record({
                isFetching: !1,
                isUpdating: !1,
                isDeleting: !1,
                ids: d.List([]),
                errorMessage: void 0
            });
            var Ie = d.Map({}),
                ye = pe({
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case $:
                                var a = t;
                                return a.payload.entities.formResponses ? e.mergeDeep((0, o.Z)({}, a.meta.siteId, a.payload.entities.formResponses)) : e;
                            case ee:
                                var n = t;
                                return e.mergeDeep((0, o.Z)({}, n.meta.siteId, n.payload.entities.formResponses));
                            case ne:
                                var r = t,
                                    i = r.meta,
                                    s = i.siteId,
                                    u = (i.responseId, r.payload.entities.formResponses);
                                return e.mergeDeep((0, o.Z)({}, s, u));
                            case se:
                                var c = t,
                                    d = c.meta,
                                    l = d.siteId,
                                    f = d.responseId,
                                    p = d.ids,
                                    g = d.isSpam,
                                    m = e;
                                return p ? (L()(p).call(p, (function(e) {
                                    m = m.setIn([l, e, "isSpam"], g)
                                })), m) : e.setIn([l, f, "isSpam"], g);
                            case oe:
                            case ue:
                                var _ = t,
                                    E = _.meta,
                                    I = E.siteId,
                                    y = E.responseId;
                                return e.setIn([I, y, "state"], "read");
                            default:
                                return e
                        }
                    },
                    byId: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ae:
                                var a = t;
                                return e.merge((0, o.Z)({}, a.meta.siteId + a.meta.responseId, {
                                    isFetching: !0,
                                    errorMessage: null
                                }));
                            case ne:
                                var n = t;
                                return e.merge((0, o.Z)({}, n.meta.siteId + n.meta.responseId, {
                                    isFetching: !1,
                                    errorMessage: null,
                                    id: n.payload.result
                                }));
                            case re:
                                var r = t;
                                return e.merge((0, o.Z)({}, r.meta.siteId + r.meta.responseId, {
                                    isFetching: !1,
                                    errorMessage: r.meta.errorMessage
                                }));
                            default:
                                return e
                        }
                    },
                    list: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case K:
                                var a = t,
                                    n = a.meta,
                                    r = n.siteId,
                                    i = n.formResponseType,
                                    s = n.label;
                                return e.mergeDeep((0, o.Z)({}, _e(r, i, s), {
                                    isFetching: !0,
                                    errorMessage: void 0
                                }));
                            case $:
                                var u = t,
                                    l = u.meta,
                                    f = l.siteId,
                                    p = l.formResponseType,
                                    g = l.nextPage,
                                    m = l.label,
                                    _ = l.pagination,
                                    E = e.setIn([f + p + (m || ""), "ids"], d.fromJS(u.payload.result));
                                return E.mergeDeep((0, o.Z)({}, _e(f, p, m), {
                                    isFetching: !1,
                                    errorMessage: void 0,
                                    nextPage: g,
                                    pagination: _
                                }));
                            case z:
                                var I = t,
                                    y = I.meta,
                                    v = y.siteId,
                                    h = y.formResponseType,
                                    S = y.label;
                                return e.mergeDeep((0, o.Z)({}, _e(v, h, S), {
                                    isFetching: !1,
                                    errorMessage: I.meta.errorMessage
                                }));
                            case X:
                                var T = t,
                                    C = T.meta,
                                    D = C.siteId,
                                    M = C.formResponseType,
                                    A = C.label;
                                return e.mergeDeep((0, o.Z)({}, _e(D, M, A), {
                                    isLoadingMore: !0,
                                    errorMessage: void 0
                                }));
                            case ee:
                                var R = t,
                                    P = R.meta,
                                    O = P.formResponseType,
                                    N = P.nextPage,
                                    F = P.siteId,
                                    b = P.label,
                                    U = e.getIn([_e(F, O, b), "nextPage"]);
                                if (U === N) return e;
                                var J = e.updateIn([F + O + (b || ""), "ids"], (function(e) {
                                    return e.push.apply(e, (0, w.Z)(R.payload.result))
                                }));
                                return J.mergeDeep((0, o.Z)({}, _e(F, O, b), {
                                    isLoadingMore: !1,
                                    errorMessage: void 0,
                                    nextPage: N
                                }));
                            case te:
                                var Z = t,
                                    G = Z.meta,
                                    L = G.formResponseType,
                                    B = (G.nextPage, G.siteId),
                                    k = G.label;
                                return e.mergeDeep((0, o.Z)({}, _e(B, L, k), {
                                    isLoadingMore: !1,
                                    errorMessage: Z.meta.errorMessage
                                }));
                            case ie:
                                var q = t,
                                    W = q.meta,
                                    Q = W.siteId,
                                    ae = W.formResponseType,
                                    ne = W.label;
                                return e.mergeDeep((0, o.Z)({}, _e(Q, ae, ne), {
                                    isUpdating: !0
                                }));
                            case se:
                                var re = t,
                                    ue = re.meta,
                                    pe = ue.siteId,
                                    ge = ue.responseId,
                                    me = ue.formResponseType,
                                    ye = ue.isSpam,
                                    ve = ue.label,
                                    he = re.meta.ids;
                                he && he.toJS && (he = he.toJS());
                                var Se, Te, Ce = x()(ge),
                                    De = Ee(pe, ve),
                                    Me = De.inboxKey,
                                    Ae = De.spamKey;
                                ye ? (Se = [Me, "ids"], Te = [Ae, "ids"]) : (Se = [Ae, "ids"], Te = [Me, "ids"]);
                                var Re = e.getIn(Se);
                                if (!Re) return e;
                                if (Ce >= 0) {
                                    he = [Ce];
                                    var Pe = H()(Re).call(Re, Ce);
                                    if (Pe < 0) return e
                                }
                                var Oe = e.updateIn(Se, (function(e) {
                                    return Y()(e).call(e, (function(e) {
                                        return !V()(he).call(he, e)
                                    }))
                                }));
                                return (Oe = Oe.getIn(Te) ? Oe.updateIn(Te, (function(e) {
                                    return c()(e).call(e, he)
                                })) : Oe.setIn(Te, d.List(he))).mergeDeep((0, o.Z)({}, _e(pe, me, ve), {
                                    isUpdating: !1
                                }));
                            case oe:
                                var Ne = t,
                                    Fe = Ne.meta,
                                    be = Fe.siteId,
                                    Ue = Fe.responseId,
                                    Je = Fe.label,
                                    Ze = x()(Ue),
                                    we = Ee(be, Je),
                                    Ge = we.inboxKey,
                                    Le = we.spamKey,
                                    Be = e.getIn([Ge, "ids"]);
                                if (Be) {
                                    var xe = H()(Be).call(Be, Ze);
                                    if (xe > -1) return e.deleteIn([Ge, "ids", xe])
                                }
                                var ke = e.getIn([Le, "ids"]);
                                if (ke) {
                                    var He = H()(ke).call(ke, Ze);
                                    if (He > -1) return e.deleteIn([Le, "ids", He])
                                }
                                return e;
                            case ce:
                                var qe = t.meta,
                                    Ye = qe.siteId,
                                    We = qe.formResponseType,
                                    Ve = qe.label;
                                return e.mergeDeep((0, o.Z)({}, _e(Ye, We, Ve), {
                                    isDeleting: !0
                                }));
                            case de:
                                var je = t.meta,
                                    Qe = je.siteId,
                                    Ke = je.formResponseType,
                                    $e = je.label,
                                    ze = je.responseIds,
                                    Xe = e.getIn([Qe + Ke + ($e || ""), "ids"]).toJS(),
                                    et = e.setIn([Qe + Ke + ($e || ""), "ids"], d.fromJS(j.difference(Xe, ze)));
                                return et.mergeDeep((0, o.Z)({}, _e(Qe, Ke, $e), {
                                    isDeleting: !1
                                }));
                            case le:
                                var tt = t.meta,
                                    at = tt.siteId,
                                    nt = tt.formResponseType,
                                    rt = tt.label;
                                return e.mergeDeep((0, o.Z)({}, _e(at, nt, rt), {
                                    isClearing: !0
                                }));
                            case fe:
                                var it = t.meta,
                                    st = it.siteId,
                                    ot = it.formResponseType,
                                    ut = it.label,
                                    ct = e.setIn([st + ot + (ut || ""), "ids"], d.fromJS([]));
                                return ct.mergeDeep((0, o.Z)({}, _e(st, ot, ut), {
                                    isClearing: !1
                                }));
                            default:
                                return e
                        }
                    }
                }),
                ve = "entities/templates/fetch_site_member_request",
                he = "entities/templates/fetch_site_member_success",
                Se = "entities/templates/fetch_site_member_fail",
                Te = a(472739).combineReducers,
                Ce = d.Map({});
            d.Record({
                isFetching: !1,
                ids: d.List([]),
                errorMessage: void 0
            });
            var De = d.Map({}),
                Me = Te({
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type === he ? e.mergeDeep((0, o.Z)({}, t.meta.siteId, t.payload.entities.siteMember)) : e
                    },
                    list: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ve:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isFetching: !0
                                }));
                            case he:
                                var a = t.meta,
                                    n = a.nextPage,
                                    r = a.pagination,
                                    i = a.siteId,
                                    s = e.setIn([t.meta.siteId, "ids"], d.fromJS(t.payload.result));
                                return s.mergeDeep((0, o.Z)({}, i, {
                                    isFetching: !1,
                                    nextPage: n,
                                    pagination: r
                                }));
                            case Se:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isFetching: !1
                                }));
                            default:
                                return e
                        }
                    }
                }),
                Ae = a(545246),
                Re = a(583209),
                Pe = d.Map({}),
                Oe = (0, D.combineReducers)({
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.payload && t.payload.settings && t.payload.settings.currencyData && !t.payload.settings.currencyData.format && (t.payload.settings.currencyData.format = null), t.type) {
                            case Re.Ye + Re.FE:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isFetching: !0,
                                    fetchError: !1
                                }));
                            case Re.Tz + Re.FE:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isFetching: !1,
                                    settings: t.payload.settings
                                }));
                            case Re.nK + Re.FE:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isFetching: !1,
                                    fetchError: !0
                                }));
                            case Re.k2 + Re.FE:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isSaving: !0,
                                    updateError: !1
                                }));
                            case Re.tt + Re.FE:
                                var a = e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isSaving: !1,
                                    settings: t.payload.settings
                                }));
                                return a;
                            case Re.if+Re.FE:
                                return e.mergeDeep((0, o.Z)({}, $S.id, {
                                    isSaving: !1
                                }));
                            case Re.Ds + Re.FE:
                                return e.mergeDeep((0, o.Z)({}, t.meta.siteId, {
                                    isSaving: !1,
                                    updateError: !0
                                }));
                            default:
                                return e
                        }
                    }
                }),
                Ne = a(884920),
                Fe = a(80676),
                be = a(839658),
                Ue = a(387228),
                Je = (a(241539), a(339714), a(432366)),
                Ze = a.n(Je),
                we = a(277149),
                Ge = a.n(we),
                Le = a(62462),
                Be = a.n(Le),
                xe = a(439552),
                ke = a(891743),
                He = (0, a(462953).vV)("category/portfolio"),
                qe = He.UPDATE_ENTITY_SUCCESS,
                Ye = He.DELETE_ENTITY_SUCCESS,
                We = qe,
                Ve = Ye,
                je = d.Map({}),
                Qe = d.Map({}),
                Ke = d.Map({}),
                $e = d.Map({}),
                ze = (0, ke.e)((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case xe.em + xe.FE:
                        case xe.M9 + xe.FE:
                            return e.setIn([t.meta.siteId], d.fromJS(t.payload.entities.product || {}));
                        case xe.V9 + xe.FE:
                        case xe.Gs + xe.FE:
                        case xe.zk + xe.FE:
                        case xe.WW + xe.FE:
                        case xe.F1 + xe.FE:
                            return e.setIn([t.meta.siteId, t.meta.productId], d.fromJS(t.payload.product));
                        case xe.cO + xe.FE:
                            var a = e.getIn([t.meta.siteId]);
                            return a = a.delete(t.meta.productId), e.set(t.meta.siteId, a);
                        default:
                            return e
                    }
                }), (function(e, t) {
                    var a, n;
                    switch (t.type) {
                        case We + xe.FE:
                            return e.getIn([t.meta.siteId]) ? e.setIn([t.meta.siteId], L()(a = e.getIn([t.meta.siteId])).call(a, (function(e) {
                                var a = e.get("categories", []);
                                return e.set("categories", L()(a).call(a, (function(e) {
                                    return e === t.meta.oldName ? t.meta.categoryName : e
                                })))
                            }))) : L()(e).call(e, (function(e) {
                                return L()(e).call(e, (function(e) {
                                    var a = e.get("categories", []);
                                    return e.set("categories", L()(a).call(a, (function(e) {
                                        return e === t.meta.oldName ? t.meta.categoryName : e
                                    })))
                                }))
                            }));
                        case Ve + xe.FE:
                            return e.getIn([t.meta.siteId]) ? e.setIn([t.meta.siteId], L()(n = e.getIn([t.meta.siteId])).call(n, (function(e) {
                                var a = e.get("categoryIds", []);
                                return e.set("categoryIds", Y()(a).call(a, (function(e) {
                                    return e.toString() !== t.meta.entityId
                                })))
                            }))) : L()(e).call(e, (function(e) {
                                return L()(e).call(e, (function(e) {
                                    var a = e.get("categories", []);
                                    return e.set("categories", Y()(a).call(a, (function(e) {
                                        return e !== t.meta.categoryName
                                    })))
                                }))
                            }));
                        default:
                            return e
                    }
                })),
                Xe = (0, D.combineReducers)({
                    allProducts: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case xe.em + xe.FE:
                                return e.setIn([t.meta.siteId], d.fromJS(t.payload.entities.product || {}));
                            case xe.V9 + xe.FE:
                            case xe.zk + xe.FE:
                            case xe.WW + xe.FE:
                            case xe.F1 + xe.FE:
                                return e.setIn([t.meta.siteId, t.meta.productId], d.fromJS(t.payload.product));
                            case xe.cO + xe.FE:
                                var a = e.getIn([t.meta.siteId]) || d.fromJS({});
                                return a = a.delete(t.meta.productId), e.set(t.meta.siteId, a);
                            default:
                                return e
                        }
                    },
                    paginatedProducts: function() {
                        var e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        switch (n.type) {
                            case xe.on + xe.FE:
                                return a.mergeDeep({
                                    isFetching: !0,
                                    fetchError: !1
                                });
                            case xe.cx + xe.FE:
                                return t = a.getIn(["products", n.meta.siteId], d.fromJS([])), a.setIn(["products", n.meta.siteId], Ze()(e = c()(t).call(t, d.fromJS(n.payload.entities.product))).call(e, (function(e, t) {
                                    var a = t.get("id");
                                    return Ge()(e).call(e, (function(e) {
                                        return e.get("id") === a
                                    })) ? e : e.push(t)
                                }), d.fromJS([]))).mergeDeep(d.fromJS({
                                    isFetching: !1,
                                    hasError: !1,
                                    paginationMeta: n.payload.paginationMeta || {},
                                    allProductsCount: n.payload.allProductsCount || 0
                                }));
                            case xe.hY + xe.FE:
                                return a.setIn(["products", n.meta.siteId], d.fromJS(n.payload.entities.product || {})).mergeDeep(d.fromJS({
                                    isFetching: !1,
                                    fetchError: !1,
                                    paginationMeta: n.payload.paginationMeta || {},
                                    allProductsCount: n.payload.allProductsCount || 0
                                }));
                            case xe.uN + xe.FE:
                                return n.meta.reloadProduct ? a : (t = a.getIn(["products", n.meta.siteId], d.fromJS([])), a.setIn(["products", n.meta.siteId], t.insert(n.payload.afterIndex, n.payload.productData).deleteIn([n.payload.beforeIndex])));
                            case xe.zk + xe.FE:
                                return t = a.getIn(["products", n.meta.siteId], d.fromJS([])), a.setIn(["products", n.meta.siteId, Be()(t).call(t, (function(e) {
                                    return "".concat(e.get("id")) === "".concat(n.meta.productId)
                                }))], d.fromJS(n.payload.product));
                            case xe.V9 + xe.FE:
                            case xe.WW + xe.FE:
                                return t = a.getIn(["products", n.meta.siteId], d.fromJS([])), a.setIn(["products", n.meta.siteId], t.unshift(d.fromJS(n.payload.product)));
                            case xe.lJ + xe.FE:
                                return a.mergeDeep({
                                    isFetching: !1,
                                    fetchError: !0
                                });
                            default:
                                return a
                        }
                    },
                    data: ze,
                    list: function() {
                        var e, t, a, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
                            i = arguments.length > 1 ? arguments[1] : void 0;
                        switch (i.type) {
                            case xe.nS + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetching: !0,
                                    fetchError: !1
                                }));
                            case xe.jo + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingPagination: !0,
                                    fetchPaginatioError: !1
                                }));
                            case xe.em + xe.FE:
                                return e = r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetching: !1,
                                    ids: d.fromJS(i.payload.result)
                                })), i.payload.isOrderingPagination && (e = e.setIn([i.meta.siteId, "totalCount"], d.fromJS(i.payload.paginationMeta.totalCount)).setIn([i.meta.siteId, "ids"], d.fromJS(i.payload.result)).setIn([i.meta.siteId, "pagination"], d.fromJS(i.payload.paginationMeta))), e;
                            case xe.M9 + xe.FE:
                                return e = r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingPagination: !1,
                                    pagination: i.payload.paginationMeta
                                })).setIn([i.meta.siteId, "pageIds"], d.fromJS(i.payload.result)), i.meta.categoryId || Y()(i.meta) && "not_deleted" !== Y()(i.meta) || (e = e.setIn([i.meta.siteId, "totalCount"], d.fromJS(i.payload.paginationMeta.totalCount))), e;
                            case xe.o + xe.FE:
                                return r.setIn([i.meta.siteId, "categoryProductsIds"], d.fromJS(i.payload.result));
                            case xe.Ci + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetching: !1,
                                    fetchError: !0
                                }));
                            case xe._r + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingPagination: !1,
                                    fetchPaginatioError: !0
                                }));
                            case xe.AV + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingDetail: !0,
                                    fetchDetailError: !1
                                }));
                            case xe.Gs + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingDetail: !1
                                }));
                            case xe.nN + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isFetchingDetail: !1,
                                    fetchDetailError: !0
                                }));
                            case xe.bt + xe.FE:
                            case xe.d6 + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !0,
                                    createError: !1
                                }));
                            case xe.V9 + xe.FE:
                            case xe.WW + xe.FE:
                                return t = r.getIn([i.meta.siteId, "ids"], d.fromJS([])), a = r.getIn([i.meta.siteId, "pageIds"], d.fromJS([])), n = r.getIn([i.meta.siteId, "totalCount"]), r.setIn([i.meta.siteId, "totalCount"], n + 1).setIn([i.meta.siteId, "ids"], t.push(i.meta.productId)).setIn([i.meta.siteId, "pageIds"], a.push(i.meta.productId)).mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !1
                                }));
                            case xe.F1 + xe.FE:
                                t = r.getIn([i.meta.siteId, "ids"], d.fromJS([])), a = r.getIn([i.meta.siteId, "pageIds"], d.fromJS([]));
                                var s = r.getIn([i.meta.siteId, "categoryProductsIds"], d.fromJS([]));
                                return n = r.getIn([i.meta.siteId, "totalCount"]), r.setIn([i.meta.siteId, "totalCount"], n + 1).setIn([i.meta.siteId, "ids"], t.push(i.meta.productId)).setIn([i.meta.siteId, "pageIds"], a.push(i.meta.productId)).setIn([i.meta.siteId, "categoryProductsIds"], s.push(i.meta.productId)).mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !1
                                }));
                            case xe.Pn + xe.FE:
                            case xe.Tf + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !1,
                                    createError: !0
                                }));
                            case xe.L7 + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !0,
                                    updateError: !1
                                }));
                            case xe.zk + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !1
                                }));
                            case xe.ki + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    isSaving: !1,
                                    updateError: i.meta.errorCode || i.meta.errorKey || !0
                                }));
                            case xe.bi + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    deleteError: !1
                                }));
                            case xe.cO + xe.FE:
                                return t = r.getIn([i.meta.siteId, "ids"], d.fromJS([])), a = r.getIn([i.meta.siteId, "pageIds"], d.fromJS([])), n = r.getIn([i.meta.siteId, "totalCount"]), r.setIn([i.meta.siteId, "totalCount"], n - 1).setIn([i.meta.siteId, "ids"], t.filterNot((function(e) {
                                    return e.toString() === i.meta.productId
                                }))).setIn([i.meta.siteId, "pageIds"], a.filterNot((function(e) {
                                    return e.toString() === i.meta.productId
                                })));
                            case xe.IX + xe.FE:
                                return r.mergeDeep((0, o.Z)({}, i.meta.siteId, {
                                    deleteError: i.meta.errorCode || !0
                                }));
                            default:
                                return r
                        }
                    }
                }),
                et = a(878358),
                tt = a(876828),
                at = a(398193),
                nt = a(982716),
                rt = a(928192),
                it = null;

            function st(e) {
                (it = (0, Fe.Z)()).addModule({
                    id: "rootModule",
                    reducerMap: r()({
                        form: nt.default,
                        ui: s.reducer,
                        manager: rt.managerReducer,
                        entities: (0, D.combineReducers)({
                            newTemplateSelections: I,
                            creditCard: C,
                            analytics: Z,
                            settings: Ae.default,
                            formResponse: ye,
                            siteMember: Me,
                            product: Ue.default,
                            portfolioProduct: Xe,
                            category: (0, tt.createEntityReducer)("category/ecommerce"),
                            portfolioCategory: (0, tt.createEntityReducer)("category/portfolio"),
                            pageData: at.default,
                            pageMeta: et.default,
                            portfolioSettings: Oe
                        })
                    }, e),
                    middlewares: [i.default, be.Z]
                }), Ne.setGlobalStore(it)
            }

            function ot() {
                return it
            }
        },
        367306: function(e, t, a) {
            a.d(t, {
                IV: function() {
                    return n
                },
                vY: function() {
                    return r
                },
                jc: function() {
                    return i
                },
                RR: function() {
                    return s
                },
                _6: function() {
                    return o
                },
                jE: function() {
                    return u
                },
                JF: function() {
                    return c
                },
                UR: function() {
                    return d
                },
                uk: function() {
                    return l
                },
                Vd: function() {
                    return f
                },
                sw: function() {
                    return p
                },
                dC: function() {
                    return g
                }
            }), a(180520), a(746506), a(353147);
            var n = "entity/settings/initialize_account_from_v3",
                r = "entity/settings/fetch_settings_success",
                i = "entity/settings/connect_account_request",
                s = "entity/settings/connect_account_success",
                o = "entity/settings/connect_account_fail",
                u = "entity/settings/disconnect_account_request",
                c = "entity/settings/disconnect_account_success",
                d = "entity/settings/disconnect_account_fail",
                l = "entity/settings/update_pay_now_account",
                f = "entity/settings/update_account_success",
                p = "entity/settings/update_account_fail",
                g = "entity/settings/update_if_ever_set_after_sales_success"
        },
        439552: function(e, t, a) {
            a.d(t, {
                Pn: function() {
                    return h
                },
                bt: function() {
                    return y
                },
                V9: function() {
                    return v
                },
                IX: function() {
                    return O
                },
                bi: function() {
                    return R
                },
                cO: function() {
                    return P
                },
                F1: function() {
                    return F
                },
                Tf: function() {
                    return U
                },
                d6: function() {
                    return N
                },
                WW: function() {
                    return b
                },
                WP: function() {
                    return A
                },
                fM: function() {
                    return D
                },
                Bm: function() {
                    return M
                },
                o: function() {
                    return J
                },
                _r: function() {
                    return d
                },
                jo: function() {
                    return u
                },
                M9: function() {
                    return c
                },
                lJ: function() {
                    return _
                },
                on: function() {
                    return g
                },
                cx: function() {
                    return m
                },
                nN: function() {
                    return p
                },
                AV: function() {
                    return l
                },
                Gs: function() {
                    return f
                },
                Ci: function() {
                    return o
                },
                nS: function() {
                    return i
                },
                em: function() {
                    return s
                },
                FE: function() {
                    return L
                },
                hY: function() {
                    return I
                },
                uN: function() {
                    return E
                },
                ki: function() {
                    return C
                },
                Q8: function() {
                    return G
                },
                Kb: function() {
                    return Z
                },
                BJ: function() {
                    return w
                },
                L7: function() {
                    return S
                },
                zk: function() {
                    return T
                }
            }), a(686902), a(14310), a(834074), a(778914), a(239649), a(820368), a(663978), a(333938), a(844845), a(563109), a(620116), a(51942), a(241539), a(339714);
            var n = a(369082),
                r = (a(661798), a(183123));
            a(746506), a(699137), a(154920), a(141655), new n.V_("product"), a(496486);
            var i = "entity/product/fetch_product_request",
                s = "entity/product/fetch_product_success",
                o = "entity/product/fetch_product_fail",
                u = "entity/product/fetch_pagination_product_request",
                c = "entity/product/fetch_pagination_product_success",
                d = "entity/product/fetch_pagination_product_fail",
                l = "entity/product/fetch_product_detail_request",
                f = "entity/product/fetch_product_detail_success",
                p = "entity/product/fetch_product_detail_fail",
                g = "entity/product/fetch_product_by_offset_request",
                m = "entity/product/fetch_product_by_offset_success",
                _ = "entity/product/fetch_product_by_offset_fail",
                E = "entity/product/update_product_by_offset_success",
                I = "entity/product/reset_paginated_products_success",
                y = "entity/product/create_product_request",
                v = "entity/product/create_product_success",
                h = "entity/product/create_product_fail",
                S = "entity/product/update_product_request",
                T = "entity/product/update_product_success",
                C = "entity/product/update_product_fail",
                D = "entity/product/enable_product_request",
                M = "entity/product/enable_product_success",
                A = "entity/product/enable_product_fail",
                R = "entity/product/delete_product_request",
                P = "entity/product/delete_product_success",
                O = "entity/product/delete_product_fail",
                N = "entity/product/duplicate_product_request",
                F = "entity/product/duplicate_category_product_success",
                b = "entity/product/duplicate_product_success",
                U = "entity/product/duplicate_product_fail",
                J = "entity/product/fetch_category_product_success",
                Z = "entity/product/update_product_list_request",
                w = "entity/product/update_product_list_success",
                G = "entity/product/update_product_list_fail",
                L = "portfolio",
                B = r.getMiniProgramAppType();
            Boolean(B)
        },
        583209: function(e, t, a) {
            a.d(t, {
                Ye: function() {
                    return i
                },
                Tz: function() {
                    return s
                },
                nK: function() {
                    return o
                },
                k2: function() {
                    return u
                },
                tt: function() {
                    return c
                },
                xv: function() {
                    return d
                },
                Ds: function() {
                    return l
                },
                if: function() {
                    return f
                },
                FE: function() {
                    return p
                }
            }), a(933032), a(241539), a(339714), a(746506), a(699137);
            var n = a(183123),
                r = "ecommerce",
                i = "entity/settings/fetch_settings_request/".concat(r),
                s = "entity/settings/fetch_settings_success/".concat(r),
                o = "entity/settings/fetch_settings_fail/".concat(r),
                u = "entity/settings/update_settings_request/".concat(r),
                c = "entity/settings/update_settings_success/".concat(r),
                d = "entity/settings/shallowly_update_settings_success",
                l = "entity/settings/update_settings_fail/".concat(r),
                f = "entity/settings/settings_saved",
                p = "portfolio",
                g = n.getMiniProgramAppType();
            Boolean(g)
        },
        982716: function(e, t, a) {
            a.r(t);
            var n = a(143393),
                r = a(576574),
                i = a(583209),
                s = a(918186),
                o = a(367306);

            function u(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.fromJS({
                            values: (0, s.getInitialPaymentAccount)(e)
                        }),
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    if (a.type === o.IV) {
                        var r, i = a.payload[e];
                        return r = i ? "paypal" === e ? {
                            email: i
                        } : i : (0, s.getInitialPaymentAccount)(e), t.mergeDeep({
                            values: r
                        })
                    }
                    return t
                }
            }
            var c = r.reducer.plugin({
                currencySelect: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.fromJS({
                            values: {
                                currencyCode: ""
                            }
                        }),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (t.type === i.tt) {
                        var a = t.payload.settings.currencyCode;
                        return e.mergeDeep({
                            values: {
                                currencyCode: a
                            }
                        })
                    }
                    return e
                },
                alipaySettings: u("alipay"),
                wechatpaySettings: u("wechatpay"),
                paypalSettings: u("paypal"),
                offlineSettings: u("offline"),
                midtransSettings: u("midtrans")
            });
            t.default = c
        },
        462953: function(e, t, a) {
            a.d(t, {
                vV: function() {
                    return P
                }
            });
            var n = a(686902),
                r = a.n(n),
                i = a(14310),
                s = a.n(i),
                o = a(620116),
                u = a.n(o),
                c = a(834074),
                d = a.n(c),
                l = a(778914),
                f = a.n(l),
                p = a(239649),
                g = a.n(p),
                m = a(820368),
                _ = a.n(m),
                E = a(663978),
                I = a.n(E),
                y = a(844845),
                v = a(51942),
                h = a.n(v),
                S = (a(241539), a(339714), a(177897));

            function T(e, t) {
                var a = r()(e);
                if (s()) {
                    var n = s()(e);
                    t && (n = u()(n).call(n, (function(t) {
                        return d()(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var C = "entity/general_entity/delete_entity_request/",
                D = "entity/general_entity/delete_entity_success/",
                M = "entity/general_entity/delete_entity_failure/",
                A = {
                    FETCH_ENTITIES_REQUEST: "entity/general_entity/fetch_entity_request/",
                    FETCH_ENTITIES_SUCCESS: "entity/general_entity/fetch_entity_success/",
                    FETCH_ENTITIES_FAILURE: "entity/general_entity/fetch_entity_failure/",
                    CREATE_ENTITY_REQUEST: "entity/general_entity/create_entity_request/",
                    CREATE_ENTITY_SUCCESS: "entity/general_entity/create_entity_success/",
                    CREATE_ENTITY_FAILURE: "entity/general_entity/create_entity_failure/",
                    UPDATE_ENTITY_REQUEST: "entity/general_entity/update_entity_request/",
                    UPDATE_ENTITY_SUCCESS: "entity/general_entity/update_entity_success/",
                    UPDATE_ENTITY_FAILURE: "entity/general_entity/update_entity_failure/",
                    DELETE_ENTITY_REQUEST: C,
                    DELETE_ENTITY_SUCCESS: D,
                    DELETE_ENTITY_FAILURE: M,
                    CLEAR_ENTITIES: "entity/general_entity/clear_entities/",
                    GET_SHOWCASE_STORE_FRONTS_LIST: "entity/general_entity/set_showcase_store_list/"
                };

            function R(e, t, a, n) {
                var r = a.toString(),
                    i = n.toString();
                return function(s) {
                    return s({
                        type: C + e,
                        meta: {
                            siteId: r,
                            entityId: i
                        }
                    }), t(a, n).then((function() {
                        s({
                            type: D + e,
                            meta: {
                                siteId: r,
                                entityId: i
                            }
                        })
                    })).catch((function(t) {
                        s({
                            type: M + e,
                            meta: {
                                siteId: r,
                                entityId: i
                            }
                        })
                    }))
                }
            }

            function P(e) {
                var t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a, n = null != arguments[t] ? arguments[t] : {};
                        if (t % 2) f()(a = T(Object(n), !0)).call(a, (function(t) {
                            (0, y.Z)(e, t, n[t])
                        }));
                        else if (g()) _()(e, g()(n));
                        else {
                            var r;
                            f()(r = T(Object(n))).call(r, (function(t) {
                                I()(e, t, d()(n, t))
                            }))
                        }
                    }
                    return e
                }({}, A);
                for (var a in t) t[a] += e;
                return h()(t, {
                    getGeneralDeleteAction: (0, S.curry)(R)(e)
                })
            }
        },
        878358: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a(143393),
                r = (a(241539), a(339714), a(359340), a(359011), "entity/page_meta/fetch_seo_setting_request"),
                i = "entity/page_meta/fetch_seo_setting_success",
                s = "entity/page_meta/update_domain_value",
                o = n.Map({
                    isFetching: !1,
                    data: {}
                }),
                u = n.Map({
                    seoSetting: o
                }),
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    switch (t.type) {
                        case r:
                            return e.setIn(["seoSetting", "isFetching"], !0);
                        case i:
                            return e.mergeDeep({
                                seoSetting: {
                                    isFetching: !1,
                                    data: n.fromJS(t.payload || {})
                                }
                            });
                        case s:
                            return e.mergeDeep({
                                seoSetting: {
                                    data: n.Map({
                                        hasCustomDomain: t.payload
                                    })
                                }
                            });
                        default:
                            return e
                    }
                }
        },
        387228: function(e, t, a) {
            a.r(t), a.d(t, {
                getCouponList: function() {
                    return A
                },
                allProductsReducer: function() {
                    return R
                },
                paginatedProductsReducer: function() {
                    return O
                },
                dataReducer: function() {
                    return F
                },
                listReducer: function() {
                    return U
                }
            });
            var n = a(844845),
                r = (a(241539), a(339714), a(432366)),
                i = a.n(r),
                s = a(694473),
                o = a.n(s),
                u = a(2991),
                c = a.n(u),
                d = a(977766),
                l = a.n(d),
                f = a(62462),
                p = a.n(f),
                g = a(620116),
                m = a.n(g),
                _ = a(472739),
                E = a(143393),
                I = a(296774),
                y = a(439552),
                v = a(891743),
                h = (0, a(462953).vV)("category/ecommerce"),
                S = h.UPDATE_ENTITY_SUCCESS,
                T = h.DELETE_ENTITY_SUCCESS,
                C = S,
                D = T,
                M = E.Map({});

            function A() {
                I.getCoupon()
            }

            function R() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case y.em:
                        return e.setIn([t.meta.siteId], E.fromJS(t.payload.entities.product || {}));
                    case y.V9:
                    case y.zk:
                    case y.WW:
                    case y.F1:
                        return t.meta.isMiniProgram ? e : (A(), e.setIn([t.meta.siteId, t.meta.productId], E.fromJS(t.payload.product)));
                    case y.Bm:
                        var a = e.setIn([t.meta.siteId, t.meta.productId], E.fromJS(t.payload.enabledProduct));
                        return t.meta.disabledProductId && (a = a.setIn([t.meta.siteId, t.meta.disabledProductId], E.fromJS(t.payload.disabledProduct))), a;
                    case y.cO:
                        A();
                        var n = e.getIn([t.meta.siteId]) || E.fromJS({});
                        return n = n.delete(t.meta.productId), e.set(t.meta.siteId, n);
                    default:
                        return e
                }
            }
            var P = E.Map({});

            function O() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                switch (a.type) {
                    case y.on:
                        return t.mergeDeep({
                            isFetching: !0,
                            hasError: !1
                        });
                    case y.cx:
                        e = t.getIn(["products", a.meta.siteId], E.fromJS([]));
                        var n = a.payload.entities.product || [],
                            r = i()(n).call(n, (function(e, t) {
                                return o()(e).call(e, (function(e) {
                                    return (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id)
                                })) ? c()(e).call(e, (function(e) {
                                    return (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id) ? t : e
                                })) : l()(e).call(e, [t])
                            }), e.toJS());
                        return t.setIn(["products", a.meta.siteId], E.fromJS(r)).mergeDeep(E.fromJS({
                            isFetching: !1,
                            hasError: !1,
                            paginationMeta: a.payload.paginationMeta || {},
                            allProductsCount: a.payload.allProductsCount || null
                        }));
                    case y.hY:
                        return t.setIn(["products", a.meta.siteId], E.fromJS(a.payload.entities.product || [])).mergeDeep(E.fromJS({
                            isFetching: !1,
                            fetchError: !1,
                            paginationMeta: a.payload.paginationMeta || {},
                            allProductsCount: a.payload.allProductsCount || null
                        }));
                    case y.uN:
                        return a.meta.reloadProduct ? t : (e = t.getIn(["products", a.meta.siteId], E.fromJS([])), t.setIn(["products", a.meta.siteId], e.insert(a.payload.afterIndex, a.payload.productData).deleteIn([a.payload.beforeIndex])));
                    case y.zk:
                        return a.meta.isMiniProgram ? t : (e = t.getIn(["products", a.meta.siteId], E.fromJS([]))).size ? t.setIn(["products", a.meta.siteId, p()(e).call(e, (function(e) {
                            return e.get("id").toString() === a.meta.productId
                        }))], E.fromJS(a.payload.product)) : t.setIn(["products", a.meta.siteId], E.fromJS([a.payload.product]));
                    case y.Bm:
                        var s;
                        if ((e = t.getIn(["products", a.meta.siteId], E.fromJS([]))).size) {
                            s = t.setIn(["products", a.meta.siteId, p()(e).call(e, (function(e) {
                                var t;
                                return (null == e || null === (t = e.get("id")) || void 0 === t ? void 0 : t.toString()) === a.meta.productId
                            }))], E.fromJS(a.payload.enabledProduct));
                            var u = p()(e).call(e, (function(e) {
                                var t;
                                return (null == e || null === (t = e.get("id")) || void 0 === t ? void 0 : t.toString()) === a.meta.disabledProductId
                            }));
                            a.meta.disabledProductId && u > -1 && (s = s.setIn(["products", a.meta.siteId, u], E.fromJS(a.payload.disabledProduct)))
                        }
                        return s;
                    case y.V9:
                    case y.WW:
                        return a.meta.isMiniProgram ? t : (e = t.getIn(["products", a.meta.siteId], E.fromJS([])), A(), t.setIn(["products", a.meta.siteId], e.unshift(E.fromJS(a.payload.product))));
                    case y.cO:
                        return e = t.getIn(["products", a.meta.siteId], E.fromJS([])), t.deleteIn(["products", a.meta.siteId, p()(e).call(e, (function(e) {
                            return e.get("id").toString() === a.meta.productId
                        }))]);
                    case y.lJ:
                        return t.mergeDeep({
                            isFetching: !1,
                            hasError: !0
                        });
                    case y.Kb:
                        return t.mergeDeep({
                            isSortSaving: !0
                        });
                    case y.BJ:
                    case y.Q8:
                        return t.mergeDeep({
                            isSortSaving: !1
                        });
                    default:
                        return t
                }
            }
            var N = E.Map({});

            function F() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case y.em:
                    case y.M9:
                        return e.setIn([t.meta.siteId], E.fromJS(t.payload.entities.product || {}));
                    case y.V9:
                    case y.Gs:
                    case y.zk:
                    case y.WW:
                    case y.F1:
                        return e.setIn([t.meta.siteId, t.meta.productId], E.fromJS(t.payload.product));
                    case y.Bm:
                        var a = e.setIn([t.meta.siteId, t.meta.productId], E.fromJS(t.payload.enabledProduct));
                        return t.meta.disabledProductId && (a = a.setIn([t.meta.siteId, t.meta.disabledProductId], E.fromJS(t.payload.disabledProduct))), a;
                    case y.cO:
                        var n = e.getIn([t.meta.siteId]) || E.fromJS({}),
                            r = n.delete(t.meta.productId);
                        return e.set(t.meta.siteId, r);
                    default:
                        return e
                }
            }
            var b = E.Map({});

            function U() {
                var e, t, a, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                    s = arguments.length > 1 ? arguments[1] : void 0;
                switch (s.type) {
                    case y.nS:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetching: !0,
                            fetchError: !1
                        }));
                    case y.jo:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingPagination: !0,
                            fetchPaginatioError: !1
                        }));
                    case y.em:
                        return e = i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetching: !1,
                            ids: E.fromJS(s.payload.result)
                        })), s.payload.isOrderingPagination && (e = e.setIn([s.meta.siteId, "totalCount"], E.fromJS(s.payload.paginationMeta.totalCount)).setIn([s.meta.siteId, "ids"], E.fromJS(s.payload.result)).setIn([s.meta.siteId, "pagination"], E.fromJS(s.payload.paginationMeta))), e;
                    case y.M9:
                        return e = i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingPagination: !1,
                            pagination: s.payload.paginationMeta
                        })).setIn([s.meta.siteId, "pageIds"], E.fromJS(s.payload.result)), s.meta.categoryId || m()(s.meta) && "not_deleted" !== m()(s.meta) || (e = e.setIn([s.meta.siteId, "totalCount"], E.fromJS(s.payload.paginationMeta.totalCount))), e;
                    case y.o:
                        return i.setIn([s.meta.siteId, "categoryProductsIds"], E.fromJS(s.payload.result));
                    case y.Ci:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetching: !1,
                            fetchError: !0
                        }));
                    case y._r:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingPagination: !1,
                            fetchPaginatioError: !0
                        }));
                    case y.AV:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingDetail: !0,
                            fetchDetailError: !1
                        }));
                    case y.Gs:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingDetail: !1
                        }));
                    case y.nN:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isFetchingDetail: !1,
                            fetchDetailError: !0
                        }));
                    case y.bt:
                    case y.d6:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !0,
                            createError: !1
                        }));
                    case y.V9:
                    case y.WW:
                        return s.meta.isMiniProgram ? i : (t = i.getIn([s.meta.siteId, "ids"], E.fromJS([])), a = i.getIn([s.meta.siteId, "pageIds"], E.fromJS([])), r = i.getIn([s.meta.siteId, "totalCount"]), i.setIn([s.meta.siteId, "totalCount"], r + 1).setIn([s.meta.siteId, "ids"], t.push(s.meta.productId)).setIn([s.meta.siteId, "pageIds"], a.push(s.meta.productId)).mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !1
                        })));
                    case y.F1:
                        t = i.getIn([s.meta.siteId, "ids"], E.fromJS([])), a = i.getIn([s.meta.siteId, "pageIds"], E.fromJS([]));
                        var o = i.getIn([s.meta.siteId, "categoryProductsIds"], E.fromJS([]));
                        return r = i.getIn([s.meta.siteId, "totalCount"]), i.setIn([s.meta.siteId, "totalCount"], r + 1).setIn([s.meta.siteId, "ids"], t.push(s.meta.productId)).setIn([s.meta.siteId, "pageIds"], a.push(s.meta.productId)).setIn([s.meta.siteId, "categoryProductsIds"], o.push(s.meta.productId)).mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !1
                        }));
                    case y.Pn:
                    case y.Tf:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !1,
                            createError: !0
                        }));
                    case y.L7:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !0,
                            updateError: !1
                        }));
                    case y.zk:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !1
                        }));
                    case y.ki:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isSaving: !1,
                            updateError: s.meta.errorCode || s.meta.errorKey || !0
                        }));
                    case y.fM:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isEnabling: !0
                        }));
                    case y.Bm:
                    case y.WP:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            isEnabling: !1
                        }));
                    case y.bi:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            deleteError: !1
                        }));
                    case y.cO:
                        return t = i.getIn([s.meta.siteId, "ids"], E.fromJS([])), a = i.getIn([s.meta.siteId, "pageIds"], E.fromJS([])), r = i.getIn([s.meta.siteId, "totalCount"]), i.setIn([s.meta.siteId, "totalCount"], r - 1).setIn([s.meta.siteId, "ids"], t.filterNot((function(e) {
                            return e.toString() === s.meta.productId
                        }))).setIn([s.meta.siteId, "pageIds"], a.filterNot((function(e) {
                            return e.toString() === s.meta.productId
                        })));
                    case y.IX:
                        return i.mergeDeep((0, n.Z)({}, s.meta.siteId, {
                            deleteError: s.meta.errorCode || !0
                        }));
                    default:
                        return i
                }
            }
            var J;
            J = (0, v.e)(F, (function(e, t) {
                var a, n;
                switch (t.type) {
                    case C:
                        return A(), e.getIn([t.meta.siteId]) ? e.setIn([t.meta.siteId], c()(a = e.getIn([t.meta.siteId])).call(a, (function(e) {
                            var a = e.get("categories", []);
                            return e.set("categories", c()(a).call(a, (function(e) {
                                return e === t.meta.oldName ? t.meta.categoryName : e
                            })))
                        }))) : c()(e).call(e, (function(e) {
                            return c()(e).call(e, (function(e) {
                                var a = e.get("categories", []);
                                return e.set("categories", c()(a).call(a, (function(e) {
                                    return e === t.meta.oldName ? t.meta.categoryName : e
                                })))
                            }))
                        }));
                    case D:
                        return A(), e.getIn([t.meta.siteId]) ? e.setIn([t.meta.siteId], c()(n = e.getIn([t.meta.siteId])).call(n, (function(e) {
                            var a = e.get("categoryIds", []);
                            return e.set("categoryIds", m()(a).call(a, (function(e) {
                                return e.toString() !== t.meta.entityId
                            })))
                        }))) : c()(e).call(e, (function(e) {
                            return c()(e).call(e, (function(e) {
                                var a = e.get("categories", []);
                                return e.set("categories", m()(a).call(a, (function(e) {
                                    return e !== t.meta.categoryName
                                })))
                            }))
                        }));
                    default:
                        return e
                }
            })), t.default = (0, _.combineReducers)({
                allProducts: R,
                paginatedProducts: O,
                data: J,
                list: U
            })
        },
        545246: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a(844845),
                r = a(977766),
                i = a.n(r),
                s = a(472739),
                o = a(143393),
                u = a(496486),
                c = (a(891743), a(918186)),
                d = a(583209),
                l = a(367306);
            a(333938), a(241539), a(339714), a(493476), a(563109), a(359340), a(965239), a(359011);
            var f, p = "miniprogram/editor/delivery/update_delivery_account_success",
                g = "miniprogram/ecommerce/update_slider_data",
                m = o.Map({
                    isFirstFetch: !1
                });
            f = function() {
                var e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    r = arguments.length > 1 ? arguments[1] : void 0;
                switch (r.payload && r.payload.settings && r.payload.settings.currencyData && !r.payload.settings.currencyData.format && (r.payload.settings.currencyData.format = null), r.type) {
                    case d.Ye:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isFetching: !0,
                            fetchError: !1
                        }));
                    case d.Tz:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isFetching: !1,
                            isFirstFetch: !0,
                            settings: r.payload.settings
                        }));
                    case d.nK:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isFetching: !1,
                            fetchError: !0
                        }));
                    case d.k2:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !0,
                            updateError: !1
                        }));
                    case d.tt:
                        var s = $S.mini_program_app_type,
                            f = a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                                isSaving: !1,
                                settings: r.payload.settings
                            }));
                        return "showcase" === s || "ordering" === s ? f.setIn([r.meta.siteId, "settings", "businessTime"], a.getIn([r.meta.siteId, "settings", "businessTime"]).merge(r.payload.settings.businessTime)) : f;
                    case d.if:
                        return a.mergeDeep((0, n.Z)({}, $S.id, {
                            isSaving: !1
                        }));
                    case "MEMBERSHIP_RANKING/ENABLE_FULFILLED":
                        return a.mergeDeep((0, n.Z)({}, $S.id, {
                            settings: {
                                enableMemberRanking: !0
                            }
                        }));
                    case "MEMBERSHIP_RANKING/DISABLE_FULFILLED":
                        return a.mergeDeep((0, n.Z)({}, $S.id, {
                            settings: {
                                enableMemberRanking: !1
                            }
                        }));
                    case p:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            updateError: !1
                        }));
                    case d.Ds:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            updateError: !0
                        }));
                    case d.xv:
                        var _ = a.getIn([r.meta.siteId, "ecommerceSettings"], o.fromJS({}));
                        return a.merge((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            settings: _.merge(r.payload.settings)
                        }));
                    case l.jc:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !0,
                            updateError: !1
                        }));
                    case l.RR:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            settings: {
                                accounts: r.payload.accounts
                            }
                        }));
                    case l.uk:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            settings: {
                                accounts: r.payload
                            }
                        }));
                    case l._6:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            updateError: !0
                        }));
                    case l.jE:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isDisconnecting: !0
                        }));
                    case l.JF:
                        var E = u.camelCase((0, c.getProviderNameMap)(r.meta.provider));
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isDisconnecting: !1,
                            settings: {
                                accounts: (0, n.Z)({}, E, null)
                            }
                        }));
                    case l.UR:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isDisconnecting: !1
                        }));
                    case l.Vd:
                        var I = u.camelCase(r.meta.provider);
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            accounts: (0, n.Z)({}, I, {
                                instructions: r.meta.instructions
                            })
                        }));
                    case l.vY:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            settings: {
                                accounts: r.payload
                            }
                        }));
                    case l.sw:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            isSaving: !1,
                            updateError: !0
                        }));
                    case g:
                        var y = [r.meta.siteId, "settings", "banner"],
                            v = a.getIn(y, o.fromJS([]));
                        switch (r.payload.type) {
                            case "add":
                                return v = v.push(o.fromJS(r.payload.data)), a.setIn(y, v);
                            case "delete":
                                return v = v.delete(r.payload.index), a.setIn(y, v);
                            case "update":
                                var h = a.getIn(i()(e = []).call(e, y, [r.payload.index]));
                                return h = h.merge(r.payload.data), a.setIn(i()(t = []).call(t, y, [r.payload.index]), h);
                            case "update-sort":
                                for (var S, T, C = a.getIn(i()(S = []).call(S, y)), D = [], M = r.payload.data.newSortList, A = 0; A < M.length; A++) D.push(C.get(M[A]).toJS());
                                return a.setIn(i()(T = []).call(T, y), o.fromJS(D));
                            default:
                                return a
                        }
                    case l.dC:
                        return a.mergeDeep((0, n.Z)({}, r.meta.siteId, {
                            settings: {
                                ifEverSetAfterSales: !0
                            }
                        }));
                    default:
                        return a
                }
            };
            var _ = (0, s.combineReducers)({
                data: f
            })
        },
        699137: function(e, t, a) {
            a(359340), a(977766), a(359011), a(517563)
        },
        252442: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return Z
                }
            });
            var n = a(468420),
                r = a(327344),
                i = a(844845),
                s = a(620116),
                o = a.n(s),
                u = a(981643),
                c = a.n(u),
                d = a(492762),
                l = a.n(d),
                f = a(51942),
                p = a.n(f),
                g = a(143393),
                m = a(610292),
                _ = a(159508),
                E = a(636969),
                I = a(14991),
                y = (a(974916), a(323123), a(569600), a(359340)),
                v = a.n(y),
                h = a(497093),
                S = a.n(h),
                T = a(432366),
                C = a.n(T),
                D = a(977766),
                M = a.n(D),
                A = a(703649),
                R = a.n(A),
                P = a(778914),
                O = a.n(P),
                N = a(634901),
                F = a(496486),
                b = {
                    patch: function(e, t) {
                        return N.af(JSON.parse(v()(e)), t).newDocument
                    },
                    unPatch: function(e, t) {
                        var a = S()(b).call(b, t);
                        return N.af(JSON.parse(v()(e)), a).newDocument
                    },
                    diff: function(e, t) {
                        var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return N.qu(e, t, a)
                    },
                    reverse: function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return S()(e = C()(t).call(t, (function(e, t) {
                            var a;
                            return "remove" === t.op || "replace" === t.op ? M()(a = R()(e).call(e, 0, e.length - 1)).call(a, p()({}, e[e.length - 1], {
                                op: "remove" === t.op ? "add" : t.op
                            })) : "copy" === t.op || "add" === t.op ? M()(e).call(e, {
                                op: "remove",
                                path: t.path
                            }) : M()(e).call(e, t)
                        }), [])).call(e)
                    }
                },
                U = b,
                J = a(26776),
                Z = function() {
                    function e(t) {
                        var a = t.pBinding;
                        (0, n.Z)(this, e), (0, i.Z)(this, "queuePool", void 0), (0, i.Z)(this, "selectedIndex", void 0), (0, i.Z)(this, "dispatchToken", void 0), (0, i.Z)(this, "_pageDataBHelper", void 0), (0, i.Z)(this, "remoteLatestPageData", void 0), (0, i.Z)(this, "lastHashCode", void 0), this._init(a)
                    }
                    return (0, r.Z)(e, [{
                        key: "_init",
                        value: function(e) {
                            var t = this;
                            this.queuePool = [], this.selectedIndex = null, this._pageDataBHelper = new I(e), this.dispatchToken = m.register((function(e) {
                                switch (e.actionType) {
                                    case _.ActionTypes.EDITOR_MOUNTED:
                                        t.initData();
                                        break;
                                    case _.ActionTypes.SAVE:
                                        e.timeMachine && t._push();
                                        break;
                                    case _.ActionTypes.TIMEMACHINE_WITHOUT_SAVE:
                                        t._push();
                                        break;
                                    case _.ActionTypes.UNDO:
                                        t._undo();
                                        break;
                                    case _.ActionTypes.REDO:
                                        t._redo()
                                }
                            }))
                        }
                    }, {
                        key: "initData",
                        value: function() {
                            var e, t, a = this._pageDataBHelper.getBinding().get();
                            return this.remoteLatestPageData = (null === (e = $S) || void 0 === e || null === (t = e.stores) || void 0 === t ? void 0 : t.pageData) || {}, this.lastHashCode = a.hashCode(), E.initRecorderData(a)
                        }
                    }, {
                        key: "_push",
                        value: function() {
                            var e, t, a = this._pageDataBHelper.getBinding(),
                                n = a.get(),
                                r = (0, J.validateNavDataWithReport)("nav_items_issue", a),
                                i = o()(e = U.diff(this.remoteLatestPageData, r)).call(e, (function(e) {
                                    var t;
                                    return null == e || !e.path || -1 === (null == e ? void 0 : c()(t = e.path).call(t, "/_")) || "add" !== e.op
                                }));
                            null !== this.selectedIndex ? (l()(t = this.queuePool).call(t, this.selectedIndex, 0, i), this.selectedIndex += 1) : this.queuePool.push(i), this.lastHashCode = n.hashCode()
                        }
                    }, {
                        key: "_undo",
                        value: function() {
                            if (this.hasUndo()) {
                                null !== this.selectedIndex ? this.selectedIndex -= 1 : this.selectedIndex = this.queuePool.length - 1;
                                var e = this._pageDataBHelper.getBinding(),
                                    t = e.get(),
                                    a = this.queuePool[this.selectedIndex],
                                    n = U.unPatch(t.toJS(), a),
                                    r = g.fromJS(n);
                                e.set(r), this.lastHashCode = r.hashCode()
                            }
                        }
                    }, {
                        key: "_redo",
                        value: function() {
                            if (this.hasRedo() && null !== this.selectedIndex) {
                                var e = this._pageDataBHelper.getBinding(),
                                    t = e.get(),
                                    a = this.queuePool[this.selectedIndex];
                                this.selectedIndex += 1, this.selectedIndex > this.queuePool.length - 1 && (this.selectedIndex = null);
                                var n = U.patch(t.toJS(), a),
                                    r = g.fromJS(n);
                                e.set(g.fromJS(r)), this.lastHashCode = r.hashCode()
                            }
                        }
                    }, {
                        key: "hasUndo",
                        value: function() {
                            return this.queuePool.length > 0 && (this.selectedIndex > 0 || null === this.selectedIndex)
                        }
                    }, {
                        key: "hasRedo",
                        value: function() {
                            return null !== this.selectedIndex && this.queuePool.length - 1 >= this.selectedIndex
                        }
                    }, {
                        key: "dataChanged",
                        value: function() {
                            return this._pageDataBHelper.getBinding().get().hashCode() !== this.lastHashCode
                        }
                    }, {
                        key: "syncPageData",
                        value: function(e) {
                            var t = this._pageDataBHelper.getBinding(),
                                a = t.get().toJS(),
                                n = function(e, t, a) {
                                    for (var n, r = o()(n = b.diff(e, a, !0)).call(n, (function(e) {
                                            var a;
                                            if (-1 !== (null == e ? void 0 : c()(a = e.path).call(a, "/_"))) {
                                                var n = e.path.split("/"),
                                                    r = R()(n).call(n, 1, n.length - 1);
                                                return !(r.length && !F.get(t, r))
                                            }
                                            return !0
                                        })), i = 0, s = p()({}, t), u = [], d = [], l = function(e) {
                                            return function(t) {
                                                return F.get(e, t)
                                            }
                                        }, f = l(t); i < r.length;) {
                                        var g = R()(r).call(r, i, i + 2);
                                        try {
                                            s = b.patch(s, g), i += 2
                                        } catch (e) {
                                            i += 4, u = M()(u).call(u, g)
                                        }
                                    }
                                    var m = function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                            return C()(e).call(e, (function(e, t) {
                                                var a, n, r, i, s = 0,
                                                    o = 0,
                                                    u = 0;
                                                return 1 === c()(a = t.path).call(a, "pages") ? (-1 !== c()(r = t.path).call(r, "sections") && s++, -1 !== c()(i = t.path).call(i, "list") && o++) : 1 === c()(n = t.path).call(n, "navigation") && u++, {
                                                    section: e.section + s,
                                                    listComponent: e.listComponent + o,
                                                    navigation: e.navigation + u
                                                }
                                            }), {
                                                section: 0,
                                                listComponent: 0,
                                                navigation: 0
                                            })
                                        }(u = o()(u).call(u, (function(e) {
                                            return "test" === e.op
                                        }))),
                                        _ = u.length;
                                    return 1 === m.section && m.listComponent === _ ? (d = C()(u).call(u, (function(e, t) {
                                        var a, n, r, i = null === (a = t.path.split("list")[0]) || void 0 === a || null === (n = R()(a).call(a, 0, -1)) || void 0 === n || null === (r = n.replaceAll) || void 0 === r ? void 0 : r.call(n, "/", ".");
                                        return -1 === c()(e).call(e, i) ? M()(e).call(e, i) : e
                                    }), []), f = l(a)) : m.section === _ && m.listComponent !== _ ? d = C()(u).call(u, (function(e, t) {
                                        var a, n = R()(a = t.path.split("/")).call(a, 0, 3).join(".");
                                        return -1 === c()(e).call(e, n) ? M()(e).call(e, n) : e
                                    }), []) : m.navigation === _ && (d = C()(u).call(u, (function(e, t) {
                                        var a, n = R()(a = t.path.split("/")).call(a, 0, 3).join(".");
                                        return -1 === c()(e).call(e, n) ? M()(e).call(e, n) : e
                                    }), [])), O()(d).call(d, (function(e) {
                                        var t = f(e);
                                        s = F.set(s, e, t)
                                    })), s
                                }(this.remoteLatestPageData, e, a);
                            this.remoteLatestPageData = p()({}, e);
                            var r = g.fromJS(n);
                            t.set(r), this.lastHashCode = r.hashCode()
                        }
                    }, {
                        key: "patchPageData",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = U.patch(this.remoteLatestPageData, e);
                            this.syncPageData(t)
                        }
                    }, {
                        key: "updatePageData",
                        value: function(e) {
                            this.syncPageData(e)
                        }
                    }, {
                        key: "patchRemotePageData",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = U.patch(this.remoteLatestPageData, e);
                            this.remoteLatestPageData = t
                        }
                    }, {
                        key: "getRemotePlainData",
                        value: function() {
                            return this.remoteLatestPageData
                        }
                    }]), e
                }()
        },
        296774: function(e, t, a) {
            var n = a(353147),
                r = a(663978),
                i = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            });
            var s = a(979500),
                o = (0, i.default)(s),
                u = a(688884),
                c = (0, i.default)(u),
                d = a(113225),
                l = (0, i.default)(d),
                f = a(398808),
                p = (0, i.default)(f),
                g = c.default.ActionTypes,
                m = {};
            m = {
                getCoupon: function(e) {
                    o.default.dispatch({
                        actionType: g.ECOMMERCE_MANAGER_GET_COUPON,
                        page: e
                    }), p.default.coupon.get({
                        pageID: l.default.getPageID(),
                        page: e || 1,
                        success: function(e) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_GET_COUPON_SUCCESS,
                                data: e
                            })
                        },
                        fail: function(e) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_GET_COUPON_FAIL,
                                data: e
                            }), alert(n("Oops, a network issue occurred, please refresh and try again."))
                        }
                    })
                },
                createCoupon: function(e) {
                    o.default.dispatch({
                        actionType: g.ECOMMERCE_MANAGER_CREATE_COUPON
                    }), p.default.coupon.create({
                        pageID: l.default.getPageID(),
                        data: e.data,
                        success: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_CREATE_COUPON_SUCCESS,
                                data: t
                            }), m.getCoupon(), e.success && e.success()
                        },
                        fail: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_CREATE_COUPON_FAIL,
                                data: t
                            }), e.fail && e.fail()
                        }
                    })
                },
                updateCoupon: function(e) {
                    o.default.dispatch({
                        actionType: g.ECOMMERCE_MANAGER_UPDATE_COUPON
                    }), p.default.coupon.update({
                        pageID: l.default.getPageID(),
                        couponID: e.couponID,
                        data: e.data,
                        success: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_UPDATE_COUPON_SUCCESS,
                                data: t
                            }), m.getCoupon(), e.success && e.success()
                        },
                        fail: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_UPDATE_COUPON_FAIL,
                                data: t
                            }), e.fail && e.fail()
                        }
                    })
                },
                deleteCoupon: function(e) {
                    o.default.dispatch({
                        actionType: g.ECOMMERCE_MANAGER_DELETE_COUPON
                    }), p.default.coupon.delete({
                        pageID: l.default.getPageID(),
                        couponID: e.couponID,
                        success: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_DELETE_COUPON_SUCCESS,
                                data: t
                            }), m.getCoupon(), e.success && e.success()
                        },
                        fail: function(t) {
                            o.default.dispatch({
                                actionType: g.ECOMMERCE_MANAGER_DELETE_COUPON_FAIL,
                                data: t
                            }), e.fail && e.fail()
                        }
                    })
                }
            }, t.default = m, e.exports = t.default
        },
        688884: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(213192),
                s = {
                    ActionTypes: (0, (0, r.default)(i).default)({
                        ECOMMERCE_MANAGER_GET_COUPON: null,
                        ECOMMERCE_MANAGER_GET_COUPON_SUCCESS: null,
                        ECOMMERCE_MANAGER_GET_COUPON_FAIL: null,
                        ECOMMERCE_MANAGER_CREATE_COUPON: null,
                        ECOMMERCE_MANAGER_CREATE_COUPON_SUCCESS: null,
                        ECOMMERCE_MANAGER_CREATE_COUPON_FAIL: null,
                        ECOMMERCE_MANAGER_UPDATE_COUPON: null,
                        ECOMMERCE_MANAGER_UPDATE_COUPON_SUCCESS: null,
                        ECOMMERCE_MANAGER_UPDATE_COUPON_FAIL: null,
                        ECOMMERCE_MANAGER_DELETE_COUPON: null,
                        ECOMMERCE_MANAGER_DELETE_COUPON_SUCCESS: null,
                        ECOMMERCE_MANAGER_DELETE_COUPON_FAIL: null
                    }),
                    ZERO_DECIMAL_CURRENCY_LIST: ["BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA", "PYG", "RWF", "VND", "VUV", "XAF", "XOF", "XPF"],
                    miniProgramCKEditorToolbar: [
                        ["Bold", "Italic", "Underline", "LineGroup", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "FontSize", "TextColor", "ScriptGroup"]
                    ],
                    editorCKEditorToolbar: [
                        ["Bold", "Italic", "Underline", "LineGroup", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "Link", "FontSize", "TextColor", "ScriptGroup"]
                    ],
                    editorToolbarColors: [
                        ["white", "#fff"],
                        ["gray", "#555"],
                        ["black", "#000"],
                        ["brown", "#816354"],
                        ["red", "#ff4d4d"],
                        ["orange", "#ffa64d"],
                        ["green", "#9cce06"],
                        ["blue", "#26c9ff"]
                    ],
                    CheckPatterns: {
                        tokenPattern: /^\w+$/,
                        percentagePattern: /^(\d{1,2}|100)$/,
                        pricePattern: /^\d+(\.\d{1,2}|\.)?$/,
                        priceWithNoDecimal: /^\d+$/,
                        productPrice: /^\d{1,8}(\.\d{1,2}|\.)?$/,
                        productQuantity: /^(-1|0+|[1-9]\d*)$/,
                        stockQuantity: /^(-1|0+|[1-9]\d*)$/
                    },
                    defaultImageUrl: "/images/ecommerce/ecommerce-default-image.png",
                    textTemplate: {
                        type: "RichText",
                        id: null,
                        value: "",
                        defaultValue: null,
                        backupValue: null,
                        version: null
                    }
                };
            t.default = s, e.exports = t.default
        },
        979500: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(855108),
                s = (0, r.default)(i);
            t.default = new s.default("EcommerceManagerDispatcher"), e.exports = t.default
        },
        548345: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(855108),
                s = (0, r.default)(i);
            t.default = new s.default("PortfolioManagerDispatcher"), e.exports = t.default
        },
        113225: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(717187),
                s = a(496486),
                o = (0, r.default)(s),
                u = a(176965),
                c = (0, r.default)(u),
                d = a(143393),
                l = (0, r.default)(d),
                f = a(610292),
                p = (0, r.default)(f),
                g = a(159508),
                m = (0, r.default)(g),
                _ = a(381947),
                E = (0, r.default)(_),
                I = o.default.assign({}, i.EventEmitter.prototype, {
                    init: function() {
                        var e = l.default.fromJS({
                                features: {}
                            }),
                            t = c.default.createContext({
                                initialState: e
                            }).getBinding();
                        E.default.init(t.sub("features"))
                    },
                    getPageID: function() {
                        return $S.id || $S.stores.pageMeta.id
                    }
                });
            I.editorDispatchToken = p.default.register((function(e) {
                switch (e.actionType) {
                    case m.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:
                    case m.default.ActionTypes.GET_ECOMMERCE_SETTINGS_SUCCESS:
                }
            })), t.default = I, e.exports = t.default
        },
        245842: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(778914),
                s = (0, r.default)(i),
                o = a(51942),
                u = (0, r.default)(o),
                c = a(694473),
                d = (0, r.default)(c),
                l = a(394198),
                f = (0, r.default)(l),
                p = a(717187),
                g = a(496486),
                m = (0, r.default)(g),
                _ = a(176965),
                E = (0, r.default)(_),
                I = a(143393),
                y = (0, r.default)(I),
                v = a(979500),
                h = (0, r.default)(v),
                S = a(688884),
                T = (0, r.default)(S),
                C = a(590936),
                D = (0, r.default)(C),
                M = a(381947),
                A = (0, r.default)(M),
                R = function(e, t, a) {
                    var n, r, i, o, c, l, g, _ = !1,
                        I = t.ActionTypes;

                    function v(e, t) {
                        i.set("state.".concat(e), t)
                    }
                    var h = m.default.assign({}, p.EventEmitter.prototype, {
                        init: function(e) {
                            if (!_) {
                                var t = {
                                        coupons: [],
                                        state: {
                                            isGetting: !1,
                                            isSaving: !1,
                                            isDeleting: !1,
                                            firstLoading: !0,
                                            firstFetch: !0
                                        },
                                        pagination: {}
                                    },
                                    s = {
                                        products: [],
                                        currentProductDetail: {
                                            type: "BlockComponent",
                                            id: null,
                                            defaultValue: null,
                                            items: [{
                                                type: "RichText",
                                                id: null,
                                                value: "",
                                                defaultValue: !0
                                            }]
                                        }
                                    };
                                if (e) n = e, i = e.sub("coupons"), c = e.sub("settings"), g = e.sub("products"), i.set("", y.default.fromJS(t)), c.set("", y.default.fromJS({
                                    settings: {}
                                })), g.set("", y.default.fromJS(s));
                                else {
                                    var d = y.default.fromJS({
                                            features: {}
                                        }),
                                        f = E.default.createContext({
                                            initialState: d
                                        }).getBinding();
                                    n = f, A.default.getBinding() || A.default.init(f.sub("features")), r = E.default.createContext({
                                        initialState: t
                                    }), o = E.default.createContext({
                                        initialState: {
                                            settings: {}
                                        }
                                    }), l = E.default.createContext({
                                        initialState: s
                                    }), i = r.getBinding(), c = o.getBinding(), g = l.getBinding()
                                }
                                a.getTabData(), a.subProductsChange((function(e, t) {
                                    g && (g.set("products", y.default.fromJS(t.products)), i.get("state.firstFetch") && v("firstFetch", !1))
                                })), a.subSettingsChange((function(e, t) {
                                    if (c) {
                                        var a = c.get("settings").toJS();
                                        c.set("settings", y.default.fromJS((0, u.default)({}, a, t.settings)))
                                    }
                                })), _ = !0
                            }
                        },
                        getBinding: function() {
                            return n
                        },
                        getCouponsContext: function() {
                            return r
                        },
                        getCouponsBinding: function() {
                            return i
                        },
                        getDefaultCoupon: function() {
                            return {
                                category: "percentage",
                                endsAt: null,
                                products: [],
                                categories: [],
                                option: {
                                    amount: {
                                        value: "",
                                        errorTrigger: !1
                                    },
                                    condition: {
                                        orderOver: {
                                            value: null,
                                            errorTrigger: !1
                                        },
                                        productIds: {
                                            value: [],
                                            errorTrigger: !1
                                        },
                                        productCategoryIds: {
                                            value: [],
                                            errorTrigger: !1
                                        },
                                        productQuantity: {
                                            value: 1,
                                            unlimited: !0,
                                            errorTrigger: !1
                                        }
                                    }
                                },
                                maximumCount: {
                                    value: 1,
                                    unlimited: !0,
                                    errorTrigger: !1
                                },
                                token: {
                                    value: "",
                                    errorTrigger: !1
                                }
                            }
                        },
                        getCoupon: function() {
                            return i.sub("coupons").toJS()
                        },
                        getSettignsContext: function() {
                            return o
                        },
                        getSettingsBinding: function() {
                            return c
                        },
                        getSettings: function() {
                            return c.sub("settings").toJS()
                        },
                        getProductsContext: function() {
                            return l
                        },
                        getProductsBinding: function() {
                            return g
                        },
                        getProducts: function() {
                            return g.sub("products").toJS()
                        },
                        getProductById: function(e) {
                            var t = this.getProducts();
                            return (0, d.default)(m.default).call(m.default, t, (function(t) {
                                return (0, f.default)(t.id, 10) === (0, f.default)(e, 10)
                            }))
                        }
                    });
                    return h.editorDispatchToken = e.register((function(e) {
                        switch (e.actionType) {
                            case I.ECOMMERCE_MANAGER_GET_COUPON:
                                v("isGetting", !0);
                                break;
                            case I.ECOMMERCE_MANAGER_GET_COUPON_SUCCESS:
                                a = (t = e.data).data.coupons, n = t.data.paginationMeta, (0, s.default)(a).call(a, (function(e) {
                                    e.token = {
                                        value: e.token,
                                        errorTrigger: !1
                                    }, e.option = {
                                        amount: {
                                            value: "percentage" === e.category ? e.option.amount : e.option.amount / 100,
                                            errorTrigger: !1
                                        },
                                        condition: {
                                            orderOver: {
                                                value: e.option.condition && e.option.condition.orderOver / 100 || null,
                                                errorTrigger: !1
                                            },
                                            productIds: {
                                                value: e.option.condition && e.option.condition.productIds || [],
                                                errorTrigger: !1
                                            },
                                            productCategoryIds: {
                                                value: e.option.condition && e.option.condition.productCategoryIds || [],
                                                errorTrigger: !1
                                            },
                                            productQuantity: {
                                                value: e.option.condition && e.option.condition.productQuantity > 0 ? e.option.condition.productQuantity : 1,
                                                unlimited: !e.option.condition.productQuantity || e.option.condition.productQuantity < 0,
                                                errorTrigger: !1
                                            }
                                        }
                                    }, e.maximumCount = {
                                        value: e.maximumCount && e.maximumCount > 0 ? e.maximumCount : 1,
                                        unlimited: !e.maximumCount || e.maximumCount < 0,
                                        errorTrigger: !1
                                    }
                                })), i.set("coupons", y.default.fromJS(a)), i.set("pagination", y.default.fromJS(n)), v("isGetting", !1), v("firstLoading", !1);
                                break;
                            case I.ECOMMERCE_MANAGER_GET_COUPON_FAIL:
                                v("isGetting", !1);
                                break;
                            case I.ECOMMERCE_MANAGER_CREATE_COUPON:
                                v("isSaving", !0);
                                break;
                            case I.ECOMMERCE_MANAGER_CREATE_COUPON_SUCCESS:
                            case I.ECOMMERCE_MANAGER_CREATE_COUPON_FAIL:
                                v("isSaving", !1);
                                break;
                            case I.ECOMMERCE_MANAGER_UPDATE_COUPON:
                                v("isSaving", !0);
                                break;
                            case I.ECOMMERCE_MANAGER_UPDATE_COUPON_SUCCESS:
                            case I.ECOMMERCE_MANAGER_UPDATE_COUPON_FAIL:
                                v("isSaving", !1);
                                break;
                            case I.ECOMMERCE_MANAGER_DELETE_COUPON:
                                v("isDeleting", !0);
                                break;
                            case I.ECOMMERCE_MANAGER_DELETE_COUPON_SUCCESS:
                            case I.ECOMMERCE_MANAGER_DELETE_COUPON_FAIL:
                                v("isDeleting", !1)
                        }
                        var t, a, n
                    })), h
                },
                P = R(h.default, T.default, D.default);
            P.createManagerStore = R, t.default = P, window.DEBUG = window.DEBUG || {}, window.DEBUG.EcommerceManagerStore = P, e.exports = t.default
        },
        831841: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(548345),
                s = (0, r.default)(i),
                o = a(688884),
                u = (0, r.default)(o),
                c = a(378508),
                d = (0, r.default)(c),
                l = (0, a(245842).createManagerStore)(s.default, u.default, d.default);
            window.DEBUG = window.DEBUG || {}, window.DEBUG.PortfolioManagerStore = l, t.default = l, e.exports = t.default
        },
        684474: function(e, t, a) {
            var n = a(223765),
                r = a(752424),
                i = a(663978),
                s = a(834074),
                o = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var u, c = a(678580),
                d = ((0, o.default)(c), a(359340)),
                l = (0, o.default)(d),
                f = a(496486),
                p = (0, o.default)(f),
                g = a(223336),
                m = ((0, o.default)(g), a(842651)),
                _ = ((0, o.default)(m), a(176965)),
                E = (0, o.default)(_),
                I = a(143393),
                y = (0, o.default)(I),
                v = a(717187),
                h = a(125485),
                S = (0, o.default)(h),
                T = a(818166),
                C = (0, o.default)(T),
                D = a(234584),
                M = (0, o.default)(D),
                A = a(145546),
                R = (0, o.default)(A),
                P = a(834243),
                O = (0, o.default)(P),
                N = a(548273),
                F = (0, o.default)(N),
                b = a(229081),
                U = (0, o.default)(b),
                J = a(266004),
                Z = (0, o.default)(J),
                w = a(389087),
                G = (0, o.default)(w),
                L = a(381947),
                B = (0, o.default)(L),
                x = a(344711),
                k = (0, o.default)(x),
                H = a(428221),
                q = (0, o.default)(H),
                Y = a(156503),
                W = (0, o.default)(Y),
                V = _e(a(237872)),
                j = _e(a(245842)),
                Q = _e(a(831841)),
                K = a(183123),
                $ = ((0, o.default)(K), a(443198)),
                z = ((0, o.default)($), a(14991)),
                X = (0, o.default)(z),
                ee = a(610292),
                te = (0, o.default)(ee),
                ae = a(159508),
                ne = (0, o.default)(ae),
                re = a(549556),
                ie = ((0, o.default)(re), a(398193)),
                se = (0, o.default)(ie),
                oe = a(822268),
                ue = (0, o.default)(oe),
                ce = a(824721),
                de = (0, o.default)(ce),
                le = a(213515),
                fe = (0, o.default)(le),
                pe = a(443673),
                ge = (0, o.default)(pe);

            function me(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    a = new r;
                return (me = function(e) {
                    return e ? a : t
                })(e)
            }

            function _e(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var a = me(t);
                if (a && a.has(e)) return a.get(e);
                var r = {},
                    o = i && s;
                for (var u in e)
                    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                        var c = o ? s(e, u) : null;
                        c && (c.get || c.set) ? i(r, u, c) : r[u] = e[u]
                    }
                return r.default = e, a && a.set(e, r), r
            }
            a(329756), (new Date).getTime();
            var Ee, Ie = "page_saving_state_change_event_id",
                ye = p.default.assign({}, v.EventEmitter.prototype, {
                    emitSavingChange: function() {
                        return this.emit(Ie, this.isSaving())
                    },
                    addSavingChangeListener: function(e) {
                        return this.on(Ie, e)
                    },
                    removeSavingChangeListenr: function(e) {
                        return this.removeListener(Ie, e)
                    },
                    isSaving: function() {
                        return Ee.getMeta("_saving")
                    },
                    isPublishing: function() {
                        return Ee.getMeta("_publishing")
                    },
                    isGoToSetDomain: function() {
                        return Ee.getMeta("_isGoToSetDomain")
                    },
                    isFailEditor: function() {
                        return Ee.getMeta("_editCountBehind") || Ee.getMeta("_editSessionExpired") || Ee.getMeta("_editCommonError")
                    },
                    isSwitching: function() {
                        return Ee.getMeta("_switching")
                    },
                    getEditMode: function() {
                        return Ee.getMeta("_editMode")
                    },
                    getPreviewMode: function() {
                        var e;
                        return null === (e = Ee) || void 0 === e ? void 0 : e.getMeta("_previewMode")
                    },
                    getIsHidePreviewTopBar: function() {
                        var e;
                        return null === (e = Ee) || void 0 === e ? void 0 : e.getMeta("_isHidePreviewTopBar")
                    },
                    getEditPanel: function() {
                        return Ee.getMeta("_editPanel")
                    },
                    getSwitchPanelTimestamp: function() {
                        return Ee.getMeta("_switchPanel_timestamp")
                    },
                    getSectionIdOnDragMode: function() {
                        return Ee.getMeta("sectionIdOnDragMode")
                    },
                    selectedFont: function() {
                        return Ee.getMeta("sidemenu.font._selected")
                    },
                    getBinding: function() {
                        return null != Ee ? Ee.binding : void 0
                    },
                    init: function(e) {
                        var t = y.default.fromJS({
                            _previewMode: !1,
                            _editMode: "screen",
                            _editPanel: "dashboard",
                            _isHidePreviewTopBar: !1,
                            _saving: !1,
                            _publishing: !1,
                            _isGoToSetDomain: !1,
                            _switching: !1,
                            _editCountBehind: !1,
                            _editSessionExpired: !1,
                            _editCommonError: !1,
                            _errorAlert: {
                                isOpen: !1,
                                content: ""
                            },
                            _assetDialogs: {
                                image: {},
                                file: {}
                            },
                            _dialogs: {
                                sameUserlockedWarning: {},
                                diffUserlockedWarning: {},
                                editorOutdatedWarning: {},
                                collaborationWarning: {},
                                pagePathMenu: {
                                    hasData: !1
                                }
                            },
                            sidemenu: {
                                font: {
                                    _selected: ""
                                }
                            },
                            fonts: {},
                            styles: [],
                            pageData: {},
                            pageBridge: {
                                sideMenuOpenState: {
                                    opened: !1,
                                    instant: !1
                                }
                            },
                            style: {
                                currentStyle: null
                            },
                            sectionSelector: F.default.getDefault([]),
                            sectionIdOnDragMode: null,
                            navigator: U.default.getDefault(),
                            pageMeta: {},
                            userMeta: {},
                            features: {},
                            domains: {},
                            timeMachine: {
                                undo: [],
                                redo: []
                            },
                            tutorial: {},
                            collaborators: [],
                            pageSettingsDialog: {}
                        });
                        return u = E.default.createContext({
                            initialState: t
                        }), this.initBinding(u), u
                    },
                    initBinding: function(e) {
                        var t = e.getBinding();
                        return Ee = new X.default(t), C.default.init(t.sub("pageData")), R.default.init(t.sub("pageBridge")), F.default.init(t.sub("sectionSelector")), M.default.init(t.sub("pageMeta")), O.default.init(t.sub("userMeta")), B.default.init(t.sub("features")), S.default.init(t.sub("fonts"), t.sub("pageData")), U.default.init(t.sub("navigator")), q.default.init(t.sub("timeMachine"), t.sub("pageData"), t.sub("navigator")), Z.default.init(t.sub("_ecommerce")), G.default.init(t.sub("_portfolio")), k.default.init(t.sub("collaborators")), W.default.init(t.sub("elementMeasurements")), j.init(), Q.init(), e
                    },
                    hydrate: function(e) {
                        null != e.pageData && C.default.hydrate(e.pageData, e.pageMeta.theme.name), null != e.pageMeta && M.default.hydrate(e.pageMeta), O.default.hydrate($S.user_meta), S.default.hydrate(e.fonts, e.pageData, e.fonts_v2), B.default.hydrate(e.features);
                        var t = u.getBinding();
                        (0, ie.setPageDataBinding)(t), V.initStore({
                            pageDataReducer: se.default,
                            namecheapDomain: de.default,
                            router: ue.default,
                            dialogs: (0, fe.default)(y.default.fromJS({
                                urlQrCodeDialog: {
                                    isOpen: !1,
                                    options: {}
                                },
                                tuiImageEditorDialog: {
                                    isOpen: !1,
                                    options: {
                                        loading: !1
                                    }
                                }
                            }))
                        }), (0, ge.default)(V.getStore(), t)
                    },
                    debug: function() {
                        var e = u.getBinding().toJS();
                        return e.timeMachine = {
                            undo: [],
                            redo: []
                        }, (0, l.default)(e)
                    },
                    divineTouch: function(e) {
                        return u.getBinding().atomically().set(y.default.fromJS(e)).commit()
                    },
                    getCtx: function() {
                        return u
                    }
                });
            ye.dispatchToken = te.default.register((function(e) {
                switch (e.actionType) {
                    case ne.default.ActionTypes.SWITCH_MODE:
                    case ne.default.ActionTypes.SWITCH_PREVIEW_MODE:
                    case ne.default.ActionTypes.TOGGLE_PREVIEW_TOP_BAR_HIDE:
                    case ne.default.ActionTypes.SWITCH_PANEL:
                    case ne.default.ActionTypes.SAVE_SUCCESS:
                    case ne.default.ActionTypes.SAVE_ERROR:
                    case ne.default.ActionTypes.SAVE:
                    case ne.default.ActionTypes.COMPLETE_SAVING:
                    case ne.default.ActionTypes.DELETE_SITE:
                    case ne.default.ActionTypes.PUBLISH:
                    case ne.default.ActionTypes.SET_PUBLISHING:
                        break;
                    case ne.default.ActionTypes.SET_IS_GO_TO_SET_DOMAIN:
                        t = e.value, Ee.updateMeta("_isGoToSetDomain", t);
                        break;
                    case ne.default.ActionTypes.SET_SWITCHING:
                        ! function(e) {
                            Ee.updateMeta("_switching", e)
                        }(e.value);
                        break;
                    case ne.default.ActionTypes.UPDATE_APP_STATE:
                        ye.divineTouch(e.appState);
                        break;
                    case ne.default.ActionTypes.OPEN_PAGE_PATH_MENU:
                        Ee.getBinding().sub("_dialogs.pagePathMenu").atomically().set("hasData", !0).set("index", e.pageIndex).set("offsetTop", e.offsetTop).set("opened", !0).commit();
                        break;
                    case ne.default.ActionTypes.CLOSE_PAGE_PATH_MENU:
                    case ne.default.ActionTypes.CHANGE_PAGE_PATH:
                    case ne.default.ActionTypes.CHANGE_PAGE_AUTO_PATH:
                        Ee.getBinding().sub("_dialogs.pagePathMenu").set("opened", !1);
                        break;
                    case ne.default.ActionTypes.OPEN_SEO_SETTINGS_MENU:
                        break;
                    case ne.default.ActionTypes.CLOSE_SEO_SETTINGS_MENU:
                    case ne.default.ActionTypes.CHANGE_SEO_SETTINGS:
                        Ee.getBinding().sub("_dialogs.seoSettingsMenu").set("opened", !1);
                    case ne.default.ActionTypes.OPEN_PWD_SETTINGS_MENU:
                    case ne.default.ActionTypes.OPEN_MEMBERS_ONLY_PAGES_SETTINGS_MENU:
                    case ne.default.ActionTypes.CHANGE_MEMBERS_ONLY_PAGES_SETTINGS:
                    case ne.default.ActionTypes.CLEAR_MEMBERS_ONLY_PAGES_SETTINGS:
                    case ne.default.ActionTypes.CLOSE_MEMBERS_ONLY_PAGES_SETTINGS_MENU:
                    case ne.default.ActionTypes.CLOSE_PWD_SETTINGS_MENU:
                    case ne.default.ActionTypes.CHANGE_PWD_SETTINGS:
                    case ne.default.ActionTypes.TOGGLE_SECTION_ON_DRAG_MODE:
                    case ne.default.ActionTypes.UPDATE_EDITOR_ERROR_ALERT:
                }
                var t
            })), window.DEBUG || (window.DEBUG = {}), window.DEBUG.EditorStore = ye, t.default = ye, e.exports = t.default
        },
        428221: function(e, t, a) {
            var n = a(223765),
                r = a(752424),
                i = a(663978),
                s = a(834074),
                o = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var u = a(359340),
                c = (0, o.default)(u);
            a(974916), a(115306);
            var d = a(496486),
                l = (0, o.default)(d),
                f = a(143393),
                p = (0, o.default)(f),
                g = a(717187),
                m = a(183123),
                _ = (0, o.default)(m),
                E = a(610292),
                I = (0, o.default)(E),
                y = a(23436),
                v = (0, o.default)(y),
                h = a(159508),
                S = (0, o.default)(h),
                T = a(298657),
                C = (0, o.default)(T),
                D = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = N(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        o = i && s;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var c = o ? s(e, u) : null;
                            c && (c.get || c.set) ? i(r, u, c) : r[u] = e[u]
                        }
                    return r.default = e, a && a.set(e, r), r
                }(a(636969)),
                M = a(14991),
                A = (0, o.default)(M),
                R = a(252442),
                P = (0, o.default)(R),
                O = a(329756);

            function N(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    a = new r;
                return (N = function(e) {
                    return e ? a : t
                })(e)
            }
            var F = {};
            if (_.default.getRfcJsonPatch()) F.init = function(e, t, a) {
                this.instance = new P.default({
                    pBinding: t
                })
            }, F.hasUndo = function() {
                return Boolean(this.instance && this.instance.hasUndo())
            }, F.hasRedo = function() {
                return Boolean(this.instance && this.instance.hasRedo())
            }, F.dataChanged = function() {
                return Boolean(this.instance && this.instance.dataChanged())
            };
            else {
                var b, U, J, Z, w = function() {
                        var e = b.getBinding(),
                            t = U.getBinding();
                        if (J.getBinding(), F.dataChanged()) {
                            var a = J.getBinding().get("selected");
                            e.atomically().update("undo", (function(e) {
                                return e.unshift({
                                    pageData: Z,
                                    selectedIndex: a
                                })
                            })).commit(), Z = t.get(), e.set("redo", p.default.List.of())
                        }
                    },
                    G = function(e, t, a) {
                        var n = U.getBinding(),
                            r = J.getBinding(),
                            i = e.get(0),
                            s = i.selectedIndex;
                        t.update((function(e) {
                            return e.unshift({
                                pageData: Z,
                                selectedIndex: s
                            })
                        })), e.update((function(e) {
                            return e.shift()
                        })), r.set("navigating", !0), r.set("navToIndex", s), r.set("selected", s), n.set(i.pageData), Z = n.get()
                    },
                    L = function() {
                        if (F.hasUndo()) {
                            var e = b.getBinding();
                            G(e.sub("undo"), e.sub("redo"))
                        }
                    },
                    B = function() {
                        if (F.hasRedo()) {
                            var e = b.getBinding();
                            G(e.sub("redo"), e.sub("undo"))
                        }
                    };
                (F = l.default.assign({}, g.EventEmitter.prototype, {
                    getDefault: function(e) {
                        return e
                    },
                    dataChanged: function() {
                        var e, t, a = U.getBinding();
                        return !(a.get() === Z || null != a && a.get() && Z && (e = a.get().toJS(), t = Z.toJS(), (0, c.default)(e).replace(O._STATE_FIELD_CHECK, "") === (0, c.default)(t).replace(O._STATE_FIELD_CHECK, "")))
                    },
                    init: function(e, t, a) {
                        return b = new A.default(e), U = new A.default(t), J = new A.default(a), b.binding
                    },
                    hasUndo: function() {
                        var e = this.getData("undo");
                        return Boolean(e) && !e.isEmpty()
                    },
                    hasRedo: function() {
                        var e = this.getData("redo");
                        return Boolean(e) && !e.isEmpty()
                    },
                    getData: function(e) {
                        return b.binding.get(e)
                    },
                    getBinding: function() {
                        return b.binding
                    }
                })).mobileEditorDispatcherToken = v.default.register((function(e) {
                    switch (e.type) {
                        case C.default.EDITOR_UNDO:
                            L();
                            break;
                        case C.default.EDITOR_REDO:
                            B()
                    }
                })), F.dispatchToken = I.default.register((function(e) {
                    switch (e.actionType) {
                        case S.default.ActionTypes.EDITOR_MOUNTED:
                            Z = U.getBinding().get(), D.initRecorderData(Z);
                            break;
                        case S.default.ActionTypes.SAVE:
                            e.timeMachine && w();
                            break;
                        case S.default.ActionTypes.TIMEMACHINE_WITHOUT_SAVE:
                            w();
                            break;
                        case S.default.ActionTypes.UNDO:
                            L();
                            break;
                        case S.default.ActionTypes.REDO:
                            B()
                    }
                }))
            }
            t.default = F, e.exports = t.default
        },
        421621: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(726394),
                s = (0, r.default)(i),
                o = a(569198),
                u = (0, r.default)(o),
                c = a(2991),
                d = (0, r.default)(c),
                l = a(703649),
                f = (0, r.default)(l),
                p = a(359340),
                g = (0, r.default)(p);
            a(904950);
            var m = function() {
                function e() {
                    (0, s.default)(this, e)
                }
                return (0, u.default)(e, [{
                    key: "send",
                    value: function(e, t, a) {
                        var n, r = (0, d.default)(n = (0, f.default)(t).call(t, -20)).call(n, (function(e) {
                            return e && JSON.parse(e).actionType
                        }));
                        Bugsnag.notify.call(Bugsnag, "PageError", a + (0, g.default)(r))
                    }
                }]), e
            }();
            t.default = m, e.exports = t.default
        },
        875919: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(726394),
                s = (0, r.default)(i),
                o = a(569198),
                u = (0, r.default)(o),
                c = a(234584),
                d = (0, r.default)(c),
                l = a(684474),
                f = (0, r.default)(l),
                p = a(183123),
                g = ((0, r.default)(p), a(182410)),
                m = (0, r.default)(g),
                _ = a(421621),
                E = (0, r.default)(_),
                I = function() {
                    function e() {
                        (0, s.default)(this, e), this.adapter = void 0
                    }
                    return (0, u.default)(e, [{
                        key: "_setup",
                        value: function() {
                            this.adapter = this.adapter || new E.default
                        }
                    }, {
                        key: "report",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            this._setup();
                            var t = d.default.getId(),
                                a = (d.default.getUser().toJS(), d.default.getTheme().toJS(), f.default.debug(), m.default.getSerialized());
                            m.default.getSerialId(), this.adapter.send(t, a, e)
                        }
                    }]), e
                }();
            t.default = I, e.exports = t.default
        },
        398808: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(493476),
                s = (0, r.default)(i),
                o = a(921806),
                u = (0, r.default)(o),
                c = a(680523),
                d = (0, r.default)(c),
                l = {
                    product: {},
                    order: {},
                    settings: {},
                    accounts: {},
                    coupon: {
                        searchProducts: function(e) {
                            return new s.default((function(t, a) {
                                new u.default({
                                    type: "GET",
                                    url: d.default.ECOMMERCE_MANAGER.COUPON.SEARCH_PRODUCTS(e.pageID, e.queryName || ""),
                                    success: function(e) {
                                        t(e)
                                    },
                                    error: function(e) {
                                        a(e)
                                    }
                                }).run()
                            }))
                        },
                        searchCategories: function(e) {
                            return new s.default((function(t, a) {
                                new u.default({
                                    type: "GET",
                                    url: d.default.ECOMMERCE_MANAGER.COUPON.SEARCH_CATEGORIES(e.pageID, e.queryName || ""),
                                    success: function(e) {
                                        t(e)
                                    },
                                    error: function(e) {
                                        a(e)
                                    }
                                }).run()
                            }))
                        },
                        get: function(e) {
                            new u.default({
                                type: "GET",
                                url: d.default.ECOMMERCE_MANAGER.COUPON.GET(e.pageID, e.page),
                                success: function(t) {
                                    e.success && e.success(t)
                                },
                                error: function(t) {
                                    e.fail && e.fail(t)
                                }
                            }).run()
                        },
                        create: function(e) {
                            new u.default({
                                type: "POST",
                                url: d.default.ECOMMERCE_MANAGER.COUPON.CREATE(e.pageID),
                                data: e.data,
                                success: function(t) {
                                    e.success && e.success(t)
                                },
                                error: function(t) {
                                    e.fail && e.fail(t)
                                }
                            }).run()
                        },
                        update: function(e) {
                            new u.default({
                                type: "PATCH",
                                url: d.default.ECOMMERCE_MANAGER.COUPON.UPDATE(e.pageID, e.couponID),
                                data: e.data,
                                success: function(t) {
                                    e.success && e.success(t)
                                },
                                error: function(t) {
                                    e.fail && e.fail(t)
                                }
                            }).run()
                        },
                        delete: function(e) {
                            new u.default({
                                type: "DELETE",
                                url: d.default.ECOMMERCE_MANAGER.COUPON.DELETE(e.pageID, e.couponID),
                                success: function(t) {
                                    e.success && e.success(t)
                                },
                                error: function(t) {
                                    e.fail && e.fail(t)
                                }
                            }).run()
                        }
                    }
                };
            t.default = l, e.exports = t.default
        },
        254588: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(726394),
                s = (0, r.default)(i),
                o = a(569198),
                u = (0, r.default)(o),
                c = a(977766),
                d = (0, r.default)(c),
                l = a(223336),
                f = (0, r.default)(l),
                p = a(234584),
                g = (0, r.default)(p),
                m = a(680523),
                _ = (0, r.default)(m),
                E = a(842651),
                I = (0, r.default)(E),
                y = a(607947),
                v = (0, r.default)(y),
                h = a(141655),
                S = (0, r.default)(h),
                T = a(921806),
                C = (0, r.default)(T),
                D = function() {
                    return !!g.default.getId() && _.default.COLLABORATORS.ALL(g.default.getId())
                },
                M = function(e) {
                    var t = e && e.meta && e.meta.userMessage && e.meta.userMessage.plain || I.default.t("js.pages.edit.errors.api_error");
                    v.default.customAlert && v.default.customAlert(t)
                },
                A = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, u.default)(e, [{
                        key: "get",
                        value: function(e) {
                            if (D()) return f.default.get(D()).done(e.success).fail(e.error)
                        }
                    }, {
                        key: "sendEmail",
                        value: function(e) {
                            return new C.default({
                                url: D(),
                                type: "POST",
                                data: e.sendData,
                                beforeSend: function(t) {
                                    return "function" == typeof e.before ? e.before() : void 0
                                },
                                complete: function() {
                                    return "function" == typeof e.always ? e.always() : void 0
                                },
                                success: function(t) {
                                    return t.data.collaborator.userFirstName = "", S.default.updateCollaborators(), "function" == typeof e.success ? e.success() : void 0
                                },
                                error: function(t) {
                                    return M(t.responseJSON), "function" == typeof e.error ? e.error() : void 0
                                }
                            }).run()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            var t;
                            return new C.default({
                                url: (0, d.default)(t = "".concat(D(), "/")).call(t, e.id),
                                type: "PUT",
                                data: e.sendData,
                                success: function(t) {
                                    return S.default.updateCollaborators(), "function" == typeof e.success ? e.success() : void 0
                                },
                                error: function(t) {
                                    return M(t.responseJSON), "function" == typeof e.error ? e.error() : void 0
                                },
                                complete: function() {
                                    return "function" == typeof e.always ? e.always() : void 0
                                }
                            }).run()
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            var t;
                            return new C.default({
                                url: (0, d.default)(t = "".concat(D(), "/")).call(t, e.id),
                                type: "DELETE",
                                success: function(t) {
                                    return S.default.updateCollaborators(), "function" == typeof e.success ? e.success() : void 0
                                },
                                error: function(t) {
                                    return M(t.responseJSON), "function" == typeof e.error ? e.error() : void 0
                                },
                                complete: function() {
                                    return "function" == typeof e.always ? e.always() : void 0
                                }
                            }).run()
                        }
                    }]), e
                }();
            t.default = new A, e.exports = t.default
        },
        661798: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(2991),
                s = (0, r.default)(i),
                o = a(778914),
                u = (0, r.default)(o);

            function c(e) {
                return e ? e.replace(/https?:/, "") : ""
            }
            a(974916), a(115306), t.default = {
                removeHttpProtocolForImageUrl: function(e) {
                    return (0, s.default)(e).call(e, (function(e) {
                        var t;
                        return (0, u.default)(t = e.picture).call(t, (function(e) {
                            e.thumbnailUrl && (e.thumbnailUrl = c(e.thumbnailUrl)), e.url && "video" !== e.mediaType && (e.url = c(e.url))
                        })), e
                    }))
                },
                fillDetailItems: function(e) {
                    return (0, s.default)(e).call(e, (function(e) {
                        return e.detail && (e.detail.items = e.detail.items || []), e
                    }))
                },
                _formatCategoryOption: function(e) {
                    var t = "";
                    return 1 === e.level ? t = e.name : 2 === e.level && (t = "     ".concat(e.name)), {
                        value: e.name,
                        label: t,
                        id: e.id
                    }
                },
                formattedCategoryOptions: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._formatCategoryOption,
                        a = [];
                    if (e) {
                        var n = e.toJS ? e.toJS() : e;
                        (0, u.default)(n).call(n, (function(e) {
                            a.push(t(e))
                        }))
                    }
                    return a
                }
            }, e.exports = t.default
        },
        154920: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(726394),
                s = ((0, r.default)(i), a(569198)),
                o = (0, r.default)(s);
            o = {
                trackLink: function() {},
                track: function() {}
            }, t.default = o, e.exports = t.default
        },
        214927: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(443198),
                s = (0, r.default)(i),
                o = {
                    getState: function(e) {
                        return $.ajax({
                            url: "/s/users/notifications/show.jsm",
                            type: "GET",
                            data: {
                                type: e
                            }
                        })
                    },
                    reset: function(e) {
                        return $.ajax({
                            url: "/s/users/notifications/reset.jsm",
                            type: "PUT",
                            data: {
                                type: e
                            }
                        })
                    },
                    markRead: function(e) {
                        return $.ajax({
                            url: "/s/users/notifications/destroy.jsm",
                            type: "DELETE",
                            data: {
                                type: e
                            },
                            success: function(e) {
                                return s.default.log(e)
                            },
                            error: function(e, t, a) {
                                return s.default.log(e)
                            }
                        })
                    }
                };
            t.default = o, e.exports = t.default
        },
        928192: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), t.reducerMaps = void 0, t.managerReducer = y;
            var i = a(498481),
                s = a(472739),
                o = a(387228),
                u = (0, r.default)(o),
                c = a(545246),
                d = (0, r.default)(c),
                l = a(878358),
                f = (0, r.default)(l),
                p = a(398193),
                g = (0, r.default)(p),
                m = a(876828),
                _ = a(982716),
                E = (0, r.default)(_),
                I = {};

            function y() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.type, e
            }
            var v = {
                    product: u.default,
                    settings: d.default,
                    category: (0, m.createEntityReducer)("category/ecommerce"),
                    pageData: g.default,
                    pageMeta: f.default
                },
                h = (0, s.combineReducers)(v),
                S = t.reducerMaps = {
                    ui: i.reducer,
                    form: E.default,
                    entities: h,
                    manager: y
                };
            t.default = (0, s.combineReducers)(S)
        },
        822268: function(e, t, a) {
            var n = a(663978),
                r = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === o.LOCATION_CHANGE ? e.merge({
                    locationBeforeTransitions: t.payload
                }) : e
            };
            var i = a(143393),
                s = (0, r.default)(i),
                o = a(633311),
                u = s.default.fromJS({
                    locationBeforeTransitions: null
                });
            e.exports = t.default
        }
    }
]);