/*! For license information please see 7207.4a07610c4de2ecfa09e0-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [7207], {
        204584: function(e, n, t) {
            var i = t(893379),
                o = t(738023);
            "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
                [e.id, o, ""]
            ]);
            i(o, {
                insert: "head",
                singleton: !1
            }), e.exports = o.locals || {}
        },
        27207: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return z
                }
            });
            var i, o, a, l = t(863056),
                s = t(366757),
                r = t(385002),
                c = t(501068),
                v = t.n(c),
                d = t(468420),
                u = t(327344),
                p = t(505281),
                g = t(484441),
                m = t(103020),
                f = t(803362),
                h = t(844845),
                b = t(977766),
                Z = t.n(b),
                N = t(50533),
                k = t(685231),
                y = t(881832),
                T = t(2991),
                E = t.n(T),
                D = t(353147),
                I = function(e) {
                    var n = e.eventDetail,
                        t = e.openBookingList,
                        o = n || {},
                        a = o.eventTypeName,
                        s = o.location,
                        r = o.attendees,
                        c = o.canceledAt,
                        v = o.eventTime,
                        d = o.readableNumber,
                        u = o.translatedTimezone;
                    return (0, l.Z)("div", {
                        className: "event-detail-panel"
                    }, void 0, (0, l.Z)("div", {
                        className: "header"
                    }, void 0, (0, l.Z)("a", {
                        className: "header-text",
                        onClick: t
                    }, void 0, i || (i = (0, l.Z)("i", {
                        className: "fa fa-angle-left"
                    })), D("Editor|Booking Details"))), (0, l.Z)("div", {
                        className: "event-type-detail"
                    }, void 0, (0, l.Z)("div", {
                        className: "event-type-item"
                    }, void 0, (0, l.Z)("div", {
                        className: "booking-label"
                    }, void 0, D("Site|Event")), (0, l.Z)("div", {
                        className: "booking-value"
                    }, void 0, a)), s && (0, l.Z)("div", {
                        className: "event-type-item"
                    }, void 0, (0, l.Z)("div", {
                        className: "booking-label"
                    }, void 0, D("Editor|Location")), (0, l.Z)("div", {
                        className: "booking-value"
                    }, void 0, s)), (0, l.Z)("div", {
                        className: "event-type-item"
                    }, void 0, (0, l.Z)("div", {
                        className: "booking-label"
                    }, void 0, D("Editor|Time")), (0, l.Z)("div", {
                        className: "booking-value"
                    }, void 0, (0, l.Z)("div", {
                        className: "time-text"
                    }, void 0, v), (0, l.Z)("div", {
                        className: "time-zone"
                    }, void 0, u))), (0, l.Z)("div", {
                        className: "event-type-item"
                    }, void 0, (0, l.Z)("div", {
                        className: "booking-label"
                    }, void 0, D("Editor|Attendees")), (0, l.Z)("div", {
                        className: "booking-value"
                    }, void 0, null == r ? void 0 : E()(r).call(r, (function(e, n) {
                        var t;
                        return (0, l.Z)("div", {
                            className: "attendee-text"
                        }, n, Z()(t = "".concat(e.email, " (")).call(t, e.name, ")"))
                    })))), (0, l.Z)("div", {
                        className: "event-type-item"
                    }, void 0, (0, l.Z)("div", {
                        className: "booking-label"
                    }, void 0, D("Editor|Booking ID")), (0, l.Z)("div", {
                        className: "booking-value"
                    }, void 0, d))), c && (0, l.Z)("div", {
                        className: "canceled-text"
                    }, void 0, D("Editor|This event was cancelled")))
                },
                x = (t(209653), t(458103)),
                O = t(836808),
                B = t(456448),
                _ = t(353147);
            var L, w = function(e) {
                    (0, g.Z)(s, e);
                    var n, t, i = (n = s, t = function() {
                        if ("undefined" == typeof Reflect || !v()) return !1;
                        if (v().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(v()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, i = (0, f.Z)(n);
                        if (t) {
                            var o = (0, f.Z)(this).constructor;
                            e = v()(i, arguments, o)
                        } else e = i.apply(this, arguments);
                        return (0, m.Z)(this, e)
                    });

                    function s(e) {
                        var n;
                        return (0, d.Z)(this, s), n = i.call(this, e), (0, h.Z)((0, p.Z)(n), "handleFetchBookingEventList", (function() {
                            if (!n.state.isFetching) {
                                var e = O.get("member_id") || "";
                                n.setIsFetching(!0), (0, B.s)(Number(e)).then((function(e) {
                                    var t = (e || {}).list;
                                    n.setState({
                                        eventList: t,
                                        isFetching: !1
                                    })
                                })).catch((function(e) {
                                    console.error(e), n.setIsFetching(!1)
                                }))
                            }
                        })), (0, h.Z)((0, p.Z)(n), "setIsFetching", (function(e) {
                            n.setState({
                                isFetching: e
                            })
                        })), (0, h.Z)((0, p.Z)(n), "backToAccountInfo", (function() {
                            var e = n.props,
                                t = e.closeDialog,
                                i = e.openAccountInfo;
                            t(), i()
                        })), (0, h.Z)((0, p.Z)(n), "handleOpenEventDetail", (function(e) {
                            (0, n.props.openEventDetail)(e)
                        })), (0, h.Z)((0, p.Z)(n), "getTableColumns", (function() {
                            return [{
                                title: _("Editor|Event Date & Time"),
                                key: "eventTime",
                                width: 200,
                                render: function(e) {
                                    return (0, l.Z)("div", {
                                        className: "date-time"
                                    }, void 0, (0, l.Z)("div", {
                                        className: "time-text"
                                    }, void 0, e.eventTime), (0, l.Z)("div", {
                                        className: "time-zone"
                                    }, void 0, e.translatedTimezone))
                                }
                            }, {
                                title: _("Editor|Event Name"),
                                key: "eventTypeName",
                                width: 100,
                                render: function(e) {
                                    return (0, l.Z)("span", {
                                        className: "event-name"
                                    }, void 0, e.eventTypeName)
                                }
                            }, {
                                title: "",
                                key: "id",
                                width: 5,
                                render: function() {
                                    return o || (o = (0, l.Z)("i", {
                                        className: "action-icon entypo-right-open"
                                    }))
                                }
                            }]
                        })), n.state = {
                            eventList: [],
                            isFetching: !1
                        }, n
                    }
                    return (0, u.Z)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            this.handleFetchBookingEventList()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                n = e.isFetching,
                                t = e.eventList,
                                i = this.getTableColumns();
                            return (0, l.Z)("div", {
                                className: "event-list-panel"
                            }, void 0, (0, l.Z)("div", {
                                className: "header"
                            }, void 0, (0, l.Z)("a", {
                                className: "header-text",
                                onClick: this.backToAccountInfo
                            }, void 0, a || (a = (0, l.Z)("i", {
                                className: "fa fa-angle-left"
                            })), _("Editor|Bookings"))), (0, l.Z)(x.Z, {
                                dataSource: t,
                                columns: i,
                                loading: n,
                                rowKey: "orderId",
                                pagination: {
                                    pageSize: 10
                                },
                                onRowClick: this.handleOpenEventDetail,
                                locale: {
                                    emptyText: _("Site|You don’t have any bookings yet!")
                                }
                            }))
                        }
                    }]), s
                }(s.PureComponent),
                C = (0, N.connect)((function() {
                    return {}
                }), {
                    openEventDetail: function(e) {
                        return y.TW.operations.openDialog({
                            name: y.uh.BOOKING_EVENT_LIST,
                            options: {
                                eventDetail: e,
                                currentView: y.bP.BOOKING_DETAIL
                            }
                        })
                    },
                    openAccountInfo: function() {
                        return y.TW.operations.openDialog({
                            name: y.uh.MEMBER_DIALOG,
                            options: {
                                currentView: y.A4.ACCOUNT_INFO
                            }
                        })
                    },
                    closeDialog: function() {
                        return y.TW.operations.closeDialog(y.uh.BOOKING_EVENT_LIST)
                    }
                })(w);
            t(204584);
            var S = function(e) {
                    (0, g.Z)(o, e);
                    var n, t, i = (n = o, t = function() {
                        if ("undefined" == typeof Reflect || !v()) return !1;
                        if (v().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(v()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, i = (0, f.Z)(n);
                        if (t) {
                            var o = (0, f.Z)(this).constructor;
                            e = v()(i, arguments, o)
                        } else e = i.apply(this, arguments);
                        return (0, m.Z)(this, e)
                    });

                    function o() {
                        var e, n;
                        (0, d.Z)(this, o);
                        for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++) a[l] = arguments[l];
                        return n = i.call.apply(i, Z()(e = [this]).call(e, a)), (0, h.Z)((0, p.Z)(n), "handleCloseDialog", (function() {
                            n.props.closeDialog()
                        })), n
                    }
                    return (0, u.Z)(o, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.isOpen,
                                t = e.currentView,
                                i = e.eventDetail,
                                o = e.openBookingList;
                            return (0, l.Z)(k.Z, {
                                visible: n,
                                zIndex: 2600,
                                onCancel: this.handleCloseDialog,
                                className: "booking-events-dialog"
                            }, void 0, t === y.bP.BOOKING_DETAIL && (0, l.Z)(I, {
                                eventDetail: i,
                                openBookingList: o
                            }), t === y.bP.BOOKING_EVENT_LIST && (L || (L = (0, l.Z)(C, {}))))
                        }
                    }]), o
                }(s.PureComponent),
                V = (0, N.connect)((function(e) {
                    var n = y.TW.selectors.getDialogState(e, y.uh.BOOKING_EVENT_LIST),
                        t = n.isOpen,
                        i = n.options || {};
                    return {
                        isOpen: t,
                        currentView: i.currentView,
                        eventDetail: i.eventDetail
                    }
                }), {
                    openBookingList: function() {
                        return y.TW.operations.openDialog({
                            name: y.uh.BOOKING_EVENT_LIST,
                            options: {
                                currentView: y.bP.BOOKING_EVENT_LIST
                            }
                        })
                    },
                    closeDialog: function() {
                        return y.TW.operations.closeDialog(y.uh.BOOKING_EVENT_LIST)
                    }
                })(S),
                A = t(957613),
                F = (0, t(34822).HL)(V),
                z = s.memo((function(e) {
                    return (0, l.Z)(r.DynamicModuleLoader, {
                        modules: A.Z
                    }, void 0, s.createElement(F, e))
                }))
        },
        738023: function(e, n, t) {
            (n = t(923645)(!1)).push([e.id, ".booking-events-dialog .s-kit-modal-body {\n  width: 420px;\n}\n.booking-events-dialog .event-list-panel .header,\n.booking-events-dialog .event-detail-panel .header {\n  margin-bottom: 20px;\n}\n.booking-events-dialog .event-list-panel .header .fa-angle-left,\n.booking-events-dialog .event-detail-panel .header .fa-angle-left {\n  font-size: 1.3em;\n  margin-right: 10px;\n}\n.booking-events-dialog .event-list-panel .header-text,\n.booking-events-dialog .event-detail-panel .header-text {\n  font-size: 18px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-family: 'brandon-grotesque', 'brandon', martel-sans, sans-serif;\n  color: #50555c;\n}\n.booking-events-dialog .event-list-panel {\n  margin-bottom: 40px;\n}\n.booking-events-dialog .event-list-panel .s-kit-table-row {\n  cursor: pointer;\n}\n.booking-events-dialog .event-list-panel .time-zone {\n  color: #a9aeb2;\n  margin-top: 5px;\n}\n.booking-events-dialog .event-list-panel .event-name {\n  line-height: 1.2;\n}\n.booking-events-dialog .event-type-detail {\n  margin-bottom: 20px;\n}\n.booking-events-dialog .event-type-detail .event-type-item {\n  display: flex;\n  text-align: left;\n  margin-bottom: 10px;\n  align-items: flex-start;\n}\n.booking-events-dialog .event-type-detail .event-type-item .booking-label {\n  width: 120px;\n  color: #a9aeb2;\n}\n.booking-events-dialog .event-type-detail .event-type-item .booking-value {\n  width: 100%;\n}\n.booking-events-dialog .event-type-detail .event-type-item .time-zone {\n  color: #a9aeb2;\n}\n.booking-events-dialog .canceled-text {\n  color: #a9aeb2;\n  font-style: italic;\n}\n", ""]), e.exports = n
        }
    }
]);