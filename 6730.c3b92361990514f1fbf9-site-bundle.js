/*! For license information please see 6730.c3b92361990514f1fbf9-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6730], {
        225405: function(e, t, n) {
            "use strict";
            var a = n(863056),
                o = (n(366757), n(912972)),
                i = n(685231),
                l = n(171725),
                r = n(353147);
            t.Z = function(e) {
                var t = e.isOpen,
                    n = e.eventData,
                    s = e.onCloseModal;
                return (0, a.Z)(i.Z, {
                    zIndex: 2600,
                    visible: t,
                    onCancel: s,
                    wrapClassName: "s-booking-confirm-modal",
                    title: r("Site|Booking Confirmed")
                }, void 0, (0, a.Z)("p", {
                    className: "thanks-hint"
                }, void 0, (0, o.tct)(r("Site|Thank you for your booking! The confirmation will be sent to your email address: [email]"), {
                    email: (0, a.Z)("a", {
                        className: "email-link",
                        href: "mailto:".concat(n.email)
                    }, void 0, n.email)
                })), (0, a.Z)("div", {
                    className: "s-booking-item"
                }, void 0, (0, a.Z)("div", {
                    className: "booking-label"
                }, void 0, r("Site|Event")), (0, a.Z)("div", {
                    className: "booking-value"
                }, void 0, n.eventName)), n.location && (0, a.Z)("div", {
                    className: "s-booking-item"
                }, void 0, (0, a.Z)("div", {
                    className: "booking-label"
                }, void 0, r("Editor|Location")), (0, a.Z)("div", {
                    className: "booking-value"
                }, void 0, n.location)), (0, a.Z)("div", {
                    className: "s-booking-item"
                }, void 0, (0, a.Z)("div", {
                    className: "booking-label"
                }, void 0, r("Editor|Time")), (0, a.Z)("div", {
                    className: "booking-value"
                }, void 0, (0, a.Z)("div", {
                    className: "time-text"
                }, void 0, n.time), (0, a.Z)("div", {
                    className: "time-zone"
                }, void 0, n.timeZone))), (0, a.Z)(l.Z, {
                    className: "small booking-confirm-btn",
                    onClick: function() {
                        s()
                    }
                }, void 0, r("Site|I got it. Thanks")))
            }
        },
        923978: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Be
                }
            });
            var a, o, i, l, r = n(501068),
                s = n.n(r),
                u = n(14310),
                c = n.n(u),
                d = n(620116),
                f = n.n(d),
                m = n(834074),
                g = n.n(m),
                p = n(778914),
                h = n.n(p),
                v = n(239649),
                b = n.n(v),
                y = n(820368),
                C = n.n(y),
                _ = n(663978),
                S = n.n(_),
                N = n(863056),
                x = n(333938),
                E = n(468420),
                w = n(327344),
                T = n(505281),
                k = n(484441),
                B = n(103020),
                L = n(803362),
                I = n(844845),
                O = (n(382526), n(141817), n(977766)),
                P = n.n(O),
                M = n(981643),
                A = n.n(M),
                D = n(678580),
                R = n.n(D),
                U = n(686902),
                F = n.n(U),
                Z = n(563109),
                H = n.n(Z),
                V = n(366757),
                z = n(730381),
                G = n(496486),
                Y = n(836808),
                j = n(234584),
                W = n(294184),
                K = n.n(W),
                J = n(206814),
                q = n(2991),
                X = n.n(q),
                Q = n(54103),
                $ = n.n(Q),
                ee = n(967217),
                te = n(117847),
                ne = n(353147),
                ae = V.useRef,
                oe = V.useEffect,
                ie = function(e) {
                    var t = e.lang,
                        n = e.dateTime,
                        o = e.onDateChange,
                        i = e.showTime,
                        l = e.timeList,
                        r = e.isLoading,
                        s = e.isOpen,
                        u = e.disabledDate,
                        c = e.customFormat,
                        d = e.onChangeTime,
                        f = e.onOpenChange,
                        m = e.onCloseDatePicker,
                        g = ae(null);
                    oe((function() {
                        return document.addEventListener("mousedown", p),
                            function() {
                                document.removeEventListener("mousedown", p)
                            }
                    }), []);
                    var p = function(e) {
                        var t;
                        !g.current || "function" != typeof m || null !== (t = g.current) && void 0 !== t && t.contains(e.target) || m()
                    };
                    return V.createElement("div", {
                        className: "s-kit-date-time-picker-wrapper",
                        ref: g
                    }, (0, N.Z)(ee.Z, {
                        lang: t,
                        open: s,
                        value: n,
                        format: c,
                        onChange: o,
                        disabledDate: u,
                        onOpenChange: f,
                        prefixIcon: "fas fa-calendar-day",
                        prefixImg: te.Y.BOOKING_CALENDAR,
                        placeholder: ne("Site|Select date and time"),
                        dropdownClassName: "s-booking-date-time-picker s-font-body",
                        getPopupContainer: function(e) {
                            return e.parentNode
                        }
                    }), i && (0, N.Z)("div", {
                        className: "s-booking-time-picker"
                    }, void 0, (0, N.Z)("div", {
                        className: "s-kit-step-time-list"
                    }, void 0, r && (a || (a = (0, N.Z)("i", {
                        className: "fa fa-spin fa-spinner loading-panel"
                    }))), !r && X()(l).call(l, (function(e, t) {
                        var n;
                        return (0, N.Z)("div", {
                            className: K()("s-kit-time-item", {
                                disabled: !e.enabled
                            }),
                            onClick: $()(d).call(d, void 0, e)
                        }, t, (0, N.Z)("div", {}, void 0, P()(n = "".concat(e.humanStartTime, " - ")).call(n, e.humanEndTime), e.quantity > 0 && (0, N.Z)("div", {
                            className: "spots-left-text"
                        }, void 0, ne("Site|%{var1} spots left", {
                            var1: e.quantity
                        })), 0 === e.quantity && (0, N.Z)("div", {
                            className: "spots-left-text"
                        }, void 0, ne("Site|No spot left"))))
                    })))))
                },
                le = n(429237),
                re = n(141655),
                se = n(329756),
                ue = n(513495),
                ce = n(183123),
                de = n(551751),
                fe = n(45563),
                me = n(240975),
                ge = n(601765),
                pe = n(792656),
                he = n(442279),
                ve = n(318592),
                be = n(353147);

            function ye(e, t) {
                var n = F()(e);
                if (c()) {
                    var a = c()(e);
                    t && (a = f()(a).call(a, (function(t) {
                        return g()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) h()(n = ye(Object(a), !0)).call(n, (function(t) {
                        (0, I.Z)(e, t, a[t])
                    }));
                    else if (b()) C()(e, b()(a));
                    else {
                        var o;
                        h()(o = ye(Object(a))).call(o, (function(t) {
                            S()(e, t, g()(a, t))
                        }))
                    }
                }
                return e
            }
            var _e = de.Z.Tag,
                Se = ce.getLocale() || "en",
                Ne = "MMM DD YYYY",
                xe = "YYYYMMDD",
                Ee = "MM/DD/YYYY",
                we = ["persona", "sleek", "onyx_new"],
                Te = (0, he.createSelector)([function(e) {
                    return e.iconColor
                }], (function(e) {
                    return (0, ve.css)("&.booking-event-item.s-ecommerce-row-view-product\n        .s-ecommerce-row-view-product-detail-panel\n        .s-booking-row-view-description{.s-kit-icon{&.entypo-location,&.fa-quote-right{color:", e, ";}}}")
                })),
                ke = function(e) {
                    (0, k.Z)(u, e);
                    var t, a, r = (t = u, a = function() {
                        if ("undefined" == typeof Reflect || !s()) return !1;
                        if (s().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(s()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, L.Z)(t);
                        if (a) {
                            var o = (0, L.Z)(this).constructor;
                            e = s()(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, B.Z)(this, e)
                    });

                    function u(e) {
                        var t, a;
                        (0, E.Z)(this, u), a = r.call(this, e), (0, I.Z)((0, T.Z)(a), "handleOpenDatePicker", (function(e) {
                            var t = a.state,
                                n = t.dateTime,
                                o = t.period,
                                i = t.closeTimePicker;
                            e ? a.setState({
                                isOpen: !0
                            }) : !e && !i && n && null != o && o.startTime && a.setState({
                                showTime: !0
                            })
                        })), (0, I.Z)((0, T.Z)(a), "handleDateChange", function() {
                            var e = (0, x.Z)(H().mark((function e(t) {
                                var n, o, i, l;
                                return H().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = a.props.eventItem, o = j.getId(), a.setState({
                                                dateTime: t,
                                                isOpen: !0,
                                                showTime: !0,
                                                isLoading: !0
                                            }), e.prev = 3, e.next = 6, (0, J.a)(o, n.id, t.format(xe));
                                        case 6:
                                            i = e.sent, l = i.schedules, a.setState({
                                                isLoading: !1,
                                                timeList: l
                                            }), e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(3), console.error(e.t0), a.setState({
                                                isLoading: !1
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 11]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), (0, I.Z)((0, T.Z)(a), "handleTimeChange", (function(e) {
                            e.enabled && a.setState({
                                period: e,
                                isOpen: !1,
                                showTime: !1,
                                customFormat: function(t) {
                                    var n, a;
                                    return e.humanStartTime ? P()(n = P()(a = "".concat(e.humanStartTime, " – ")).call(a, e.humanEndTime, ", ")).call(n, t.format(Ne)) : t.format(Ne)
                                }
                            })
                        })), (0, I.Z)((0, T.Z)(a), "handleChangeName", (function(e) {
                            var t = e.target.value;
                            a.setState({
                                nameError: "",
                                userName: t
                            })
                        })), (0, I.Z)((0, T.Z)(a), "handleChangeEmail", (function(e) {
                            var t = e.target.value;
                            a.setState({
                                emailError: "",
                                userEmail: t
                            })
                        })), (0, I.Z)((0, T.Z)(a), "validateForm", (function() {
                            var e = "",
                                t = "",
                                n = a.state,
                                o = n.userName,
                                i = n.userEmail;
                            return o || (e = be("Site|Name is required")), i ? ((null == i ? void 0 : i.length) > 50 || !se.RegexConstants.EMAIL.test(i)) && (t = be("Invalid email address")) : t = be("Site|Email is required"), !e && !t || (a.setState({
                                nameError: e,
                                emailError: t
                            }), !1)
                        })), (0, I.Z)((0, T.Z)(a), "isPreviewMode", (function() {
                            return !1
                        })), (0, I.Z)((0, T.Z)(a), "validationData", (function() {
                            var e = a.state,
                                t = e.dateTime,
                                n = e.isSubmitting,
                                o = e.isOpen;
                            return t ? !(!a.validateForm() || n) : (o || a.setState({
                                isOpen: !0
                            }), !1)
                        })), (0, I.Z)((0, T.Z)(a), "handleCheckRecaptcha", (function() {
                            var e = a.state.reCaptchaRef;
                            a.validationData() && (ce.getInvisibleReCaptchaStatus() && e ? e.clickInvisibleReCaptcha() : a.handleSubmitForm())
                        })), (0, I.Z)((0, T.Z)(a), "handleSubmitForm", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    recaptchaToken: "",
                                    recaptchaType: "invisible"
                                },
                                t = e.recaptchaToken,
                                o = j.getId(),
                                i = a.props.eventItem,
                                l = a.state,
                                r = l.dateTime,
                                s = l.period,
                                u = l.userName,
                                c = l.userEmail;
                            if (a.isPreviewMode()) {
                                var d = n(655380);
                                d.postMessage(window.parent, "SitePreview.Link.Blocked", {
                                    type: "formSubmission"
                                })
                            } else {
                                var f = Y.get("member_id") || "",
                                    m = {
                                        eventTypeId: i.id,
                                        startTime: s.startTime,
                                        endTime: s.endTime,
                                        email: c,
                                        name: u
                                    },
                                    g = {};
                                m.name && ((0, fe.setContactForm)({
                                    lastName: ""
                                }), g.firstName = m.name), m.email ? g.email = m.email : m.user_last_submitted_email = (0, fe.getContactFormField)("email"), (0, fe.setContactForm)({
                                    contactData: g
                                }), f && (m.memberId = f), a.setState({
                                    isSubmitting: !0
                                }), (0, J.Xc)(o, Ce(Ce({}, m), {}, {
                                    recaptchaToken: t
                                })).then((function(e) {
                                    var t, n;
                                    a.props.openConfirmModal({
                                        email: c,
                                        eventName: i.name,
                                        location: i.location,
                                        time: P()(t = P()(n = "".concat(r.format(Ee), " ")).call(n, s.humanStartTime, " - ")).call(t, s.humanEndTime),
                                        timeZone: i.translatedAvailableTimezone
                                    }), a.setState({
                                        dateTime: "",
                                        userName: "",
                                        userEmail: "",
                                        period: {},
                                        isSubmitting: !1,
                                        customFormat: function(e) {
                                            return e.format(Ne)
                                        }
                                    })
                                })).catch((function(e) {
                                    var t = e.response || {},
                                        n = t.meta,
                                        o = t.needCaptcha;
                                    a.setState({
                                        needCaptcha: o,
                                        isSubmitting: !1
                                    }), "lack of stock" === (null == n ? void 0 : n.devMessage) && alert(be("Site|Oops! This time slot have been scheduled. Please try another time.")), console.error(e)
                                }))
                            }
                        })), (0, I.Z)((0, T.Z)(a), "handleOpenBookingPanel", (function() {
                            re.openBookingPanel()
                        })), (0, I.Z)((0, T.Z)(a), "getDisabledDate", (function(e) {
                            var t, n = (a.props.eventItem || {}).availableSchedules || {},
                                o = n.disabledDates,
                                i = n.enabledWeekDays,
                                l = n.enabledOverrideSchedules;
                            return e && e < z().subtract(1, "days").endOf("day") || (null == o ? void 0 : A()(o).call(o, z(e).format(xe))) > -1 || -1 === (null == i ? void 0 : A()(i).call(i, z(e).day())) && !R()(t = F()(l)).call(t, e.format(xe))
                        })), (0, I.Z)((0, T.Z)(a), "handleCloseDatePicker", (function() {
                            var e = a.state.period;
                            G.isEmpty(e) && a.setState({
                                dateTime: ""
                            }), a.setState({
                                isOpen: !1,
                                showTime: !1,
                                closeTimePicker: !0
                            }), G.delay((function() {
                                a.setState({
                                    closeTimePicker: !1
                                })
                            }), 1500)
                        }));
                        var o = (0, fe.getContactFormField)(),
                            i = o.firstName,
                            l = void 0 === i ? "" : i,
                            s = o.lastName,
                            c = void 0 === s ? "" : s,
                            d = o.email,
                            f = void 0 === d ? "" : d;
                        return a.state = {
                            dateTime: "",
                            period: {},
                            timeList: [],
                            isOpen: !1,
                            showTime: !1,
                            isLoading: !1,
                            needCaptcha: !1,
                            userName: c ? P()(t = "".concat(l, " ")).call(t, c) : l || "",
                            userEmail: f,
                            nameError: "",
                            emailError: "",
                            reCaptchaRef: null,
                            isSubmitting: !1,
                            closeTimePicker: !1,
                            customFormat: function(e) {
                                return e.format(Ne)
                            }
                        }, a
                    }
                    return (0, w.Z)(u, [{
                        key: "_getSpecialStyleByBg",
                        value: function() {
                            var e = this.props.sectionStyleProps,
                                t = pe.getColorInfoByBgData(null == e ? void 0 : e.background1),
                                n = t.bgColor,
                                a = "";
                            if (!t.isImageOrVedio) {
                                var o = pe.getTextColorSettingsByBgColor(n, {
                                    iconColor: "#C6C9CD"
                                });
                                a = Te(o)
                            }
                            return a
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.isOpen,
                                a = t.period,
                                r = t.dateTime,
                                s = t.showTime,
                                u = t.isLoading,
                                c = t.timeList,
                                d = t.userName,
                                f = t.userEmail,
                                m = t.nameError,
                                g = t.emailError,
                                p = t.isSubmitting,
                                h = t.customFormat,
                                v = t.needCaptcha,
                                b = this.props,
                                y = b.eventItem,
                                C = b.imgColumnClassName,
                                _ = b.infoColumnClassName,
                                S = b.showDummyData,
                                x = b.inSectionSelector,
                                E = b.sectionStyleProps,
                                w = y || {},
                                T = w.name,
                                k = w.picture,
                                B = w.location,
                                L = w.description,
                                I = w.translatedAvailableTimezone,
                                O = j.getThemeName(),
                                P = j.getIsS5Theme(),
                                M = this._getSpecialStyleByBg();
                            return (0, N.Z)("div", {
                                className: K()("s-ecommerce-row-view-product booking-event-item ".concat(M), {
                                    "center-item": !(null != k && k.length || R()(we).call(we, O)),
                                    "left-item": R()(we).call(we, O)
                                })
                            }, void 0, (null == k ? void 0 : k.length) > 0 && (0, N.Z)("div", {
                                className: "s-ecommerce-row-view-image-package ".concat(C),
                                style: {
                                    minHeight: "50px"
                                }
                            }, void 0, (0, N.Z)("div", {
                                className: "s-ecommerce-row-view-product-image-wrapper auto"
                            }, void 0, S && (0, N.Z)(_e, {
                                className: "sample-tag light-blue",
                                label: be("Editor|Sample")
                            }), (0, N.Z)("div", {
                                className: "image-wrapper"
                            }, void 0, (0, N.Z)(le, {
                                alt: y.name,
                                dataSrc: k[0].thumbnailUrl,
                                width: "100%",
                                inSectionSelector: x
                            })))), (0, N.Z)("div", {
                                className: "s-ecommerce-row-view-product-detail-panel s-font-body ".concat(_)
                            }, void 0, (0, N.Z)("div", {
                                className: K()("s-ecommerce-row-view-product-name", {
                                    "s-item-title": P
                                })
                            }, void 0, P ? (0, N.Z)("h3", {
                                className: "title-name",
                                style: {
                                    marginBottom: 0
                                }
                            }, void 0, T) : (0, N.Z)("h1", {
                                className: "title-name",
                                style: {
                                    marginBottom: 0
                                }
                            }, void 0, T), !(null != k && k.length) && S && (0, N.Z)(_e, {
                                className: "sample-tag light-blue",
                                label: be("Editor|Sample")
                            })), B && (0, N.Z)("div", {
                                className: K()("s-booking-row-view-description", {
                                    "s-item-text": P
                                })
                            }, void 0, o || (o = (0, N.Z)(ge.Z, {
                                className: "entypo-location"
                            })), (0, N.Z)("span", {
                                className: "location-text"
                            }, void 0, B)), L && (0, N.Z)("div", {
                                className: K()("s-booking-row-view-description", {
                                    "s-item-text": P
                                })
                            }, void 0, i || (i = (0, N.Z)(ge.Z, {
                                className: "fas fa-quote-right"
                            })), (0, N.Z)("span", {
                                className: "description"
                            }, void 0, L)), (0, N.Z)(ie, {
                                lang: Se,
                                isOpen: n,
                                showTime: s,
                                isLoading: u,
                                timeList: c,
                                dateTime: r,
                                customFormat: h,
                                disabledDate: this.getDisabledDate,
                                onDateChange: this.handleDateChange,
                                onChangeTime: this.handleTimeChange,
                                onOpenChange: this.handleOpenDatePicker,
                                onCloseDatePicker: this.handleCloseDatePicker
                            }), (0, N.Z)("div", {
                                className: K()("s-booking-row-view-description time-zone-view", {
                                    "s-item-text": P
                                })
                            }, void 0, (0, N.Z)("span", {
                                className: "time-zone label"
                            }, void 0, be("Editor|Event time zone:")), (0, N.Z)("span", {
                                className: "time-zone name"
                            }, void 0, I)), a.startTime && (0, N.Z)("div", {
                                className: "s-booking-form-field s-font-body"
                            }, void 0, (0, N.Z)("input", {
                                type: "text",
                                value: d,
                                maxLength: 50,
                                onChange: this.handleChangeName,
                                placeholder: be("Site|Your Name")
                            }), m && (0, N.Z)("div", {
                                className: "field-error"
                            }, void 0, m)), a.startTime && (0, N.Z)("div", {
                                className: "s-booking-form-field email s-font-body"
                            }, void 0, (0, N.Z)("input", {
                                type: "text",
                                maxLength: 50,
                                value: f,
                                onChange: this.handleChangeEmail,
                                placeholder: be("Site|Email for booking confirmation")
                            }), g && (0, N.Z)("div", {
                                className: "field-error"
                            }, void 0, g)), (0, N.Z)(ue, {
                                component: "div",
                                onClick: this.handleCheckRecaptcha,
                                className: "s-ecommerce-row-view-product-order-btn s-common-button s-font-button",
                                sectionStyleProps: E
                            }, void 0, be("Editor|Book Now"), "  ", p && (l || (l = (0, N.Z)("i", {
                                className: "fa fa-spinner fa-pulse"
                            })))), ce.getInvisibleReCaptchaStatus() && (0, N.Z)(me.default, {
                                invisible: !0,
                                loadedAutoSubmit: v,
                                handleSubmit: this.handleSubmitForm,
                                onRef: function(t) {
                                    return e.setState({
                                        reCaptchaRef: t
                                    })
                                }
                            })))
                        }
                    }]), u
                }(V.Component),
                Be = ke
        },
        809875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return te
                }
            });
            var a = n(501068),
                o = n.n(a),
                i = n(333938),
                l = n(468420),
                r = n(327344),
                s = n(505281),
                u = n(484441),
                c = n(103020),
                d = n(803362),
                f = n(844845),
                m = n(863056),
                g = n(563109),
                p = n.n(g),
                h = (n(241539), n(339714), n(694473)),
                v = n.n(h),
                b = n(620116),
                y = n.n(b),
                C = n(2991),
                _ = n.n(C),
                S = n(277149),
                N = n.n(S),
                x = n(54103),
                E = n.n(x),
                w = n(366757),
                T = (n(703649), n(923978)),
                k = n(225405),
                B = n(141655);
            var L, I = function(e) {
                    (0, u.Z)(g, e);
                    var t, a, i = (t = g, a = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, d.Z)(t);
                        if (a) {
                            var i = (0, d.Z)(this).constructor;
                            e = o()(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, c.Z)(this, e)
                    });

                    function g(e) {
                        var t;
                        return (0, l.Z)(this, g), t = i.call(this, e), (0, f.Z)((0, s.Z)(t), "handleOpenBookingPanel", (function() {
                            B.openBookingPanel()
                        })), (0, f.Z)((0, s.Z)(t), "handleOpenConfirmModal", (function(e) {
                            t.setState({
                                eventData: e,
                                isOpenModal: !0
                            })
                        })), (0, f.Z)((0, s.Z)(t), "handleCloseConfirmModal", (function() {
                            t.setState({
                                isOpenModal: !1
                            })
                        })), t.state = {
                            eventData: {},
                            isOpenModal: !1
                        }, t
                    }
                    return (0, r.Z)(g, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.isOpenModal,
                                o = t.eventData,
                                i = this.props,
                                l = i.bookingEventList,
                                r = i.layoutConfig,
                                s = i.showDummyData,
                                u = i.inSectionSelector,
                                c = (i.isPreviewMode, i.sectionStyleProps),
                                d = r && r.get("imageSize") || "m",
                                f = n(452255).getColumnClassNames(d) || {},
                                g = f.imgColumnClassName,
                                p = f.infoColumnClassName,
                                h = l;
                            return (0, m.Z)("div", {
                                className: "s-ecommerce-row-view-wrapper booking-event-list-panel"
                            }, void 0, _()(h).call(h, (function(t) {
                                return (0, m.Z)(T.Z, {
                                    eventItem: t,
                                    imgColumnClassName: g,
                                    infoColumnClassName: p,
                                    openConfirmModal: e.handleOpenConfirmModal,
                                    showDummyData: s,
                                    inSectionSelector: u,
                                    sectionStyleProps: c
                                }, t.id)
                            })), (0, m.Z)(k.Z, {
                                onCloseModal: this.handleCloseConfirmModal,
                                eventData: o,
                                isOpen: a
                            }))
                        }
                    }]), g
                }(w.Component),
                O = n(183123),
                P = n(234584),
                M = n(206814),
                A = (n(786483), n(344711)),
                D = n(621658),
                R = n(573126),
                U = n(454275),
                F = function(e) {
                    return w.createElement(U, (0, R.Z)({}, e, {
                        categoryType: "booking"
                    }))
                },
                Z = n(294184),
                H = n(384788),
                V = n(818166),
                z = n.n(V),
                G = n(318592),
                Y = n(792656),
                j = n(442279),
                W = n(384887),
                K = n.n(W),
                J = n(496486),
                q = n.n(J),
                X = n(353147);
            var Q = function() {
                    return null
                },
                $ = (0, j.createSelector)([function(e) {
                    return e.categorizeTextColor
                }, function(e) {
                    return e.categorizeSelectedColor
                }, function(e) {
                    return e.categoryBarBorderColor
                }], (function(e, t, n) {
                    return (0, G.css)("&.s-component.s-ecommerce .s-ecommerce-content{.s-category-bar{border-color:", n, ";}.s-category-bar .category-list .category-link-item{color:", e, ";&.selected{color:", t, ";&:after{background:", t, ";}}}}")
                })),
                ee = function(e) {
                    (0, u.Z)(g, e);
                    var t, n, a = (t = g, n = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, d.Z)(t);
                        if (n) {
                            var i = (0, d.Z)(this).constructor;
                            e = o()(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, c.Z)(this, e)
                    });

                    function g(e) {
                        var t;
                        (0, l.Z)(this, g), t = a.call(this, e), (0, f.Z)((0, s.Z)(t), "fetchBookingEventList", (0, i.Z)(p().mark((function e() {
                            var n, a, o, i, l, r, s, u, c, d, f, m, g, h = arguments;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = h.length > 0 && void 0 !== h[0] ? h[0] : "", a = t.props, o = a.sectionId, i = a.inSectionSelector, l = a.templateDummyData, r = t.state.canUseAIDraftData, !i || !l || r) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return s = P.getId(), u = n || t.props.category, e.next = 9, (0, M.sB)(s, o, u);
                                    case 9:
                                        c = e.sent, d = c.list, f = void 0 === d ? [] : d, m = c.showDummyData, g = i && !r, l && (g || r && f.length <= 0) && (f = l), t.setState({
                                            eventList: f,
                                            showDummyData: m
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), (0, f.Z)((0, s.Z)(t), "handleOpenBookingPanel", (function() {
                            if ("editor" === A.default.getRole()) return window.alert(X("Editor|This action is blocked for now. Please contact your site owner to grant you permission to publish site changes."));
                            B.openBookingPanel()
                        })), (0, f.Z)((0, s.Z)(t), "publishOpenSideMenuTabPanel", (function() {
                            t.state.showDummyData
                        })), (0, f.Z)((0, s.Z)(t), "getBookingOverlayText", (function() {
                            var e = t.state;
                            e.eventList, e.showDummyData
                        })), (0, f.Z)((0, s.Z)(t), "getIsShowComponentOverlay", (function() {
                            return t.state.showDummyData, !1
                        })), (0, f.Z)((0, s.Z)(t), "renderTooltipTilte", (function() {
                            return w.createElement(w.Fragment, null, X("Editor|These sample events won’t be shown on your live site. And the samples will be removed when you add your own events."), L || (L = (0, m.Z)("br", {})), X("Editor|Click here to add your own events!"))
                        })), (0, f.Z)((0, s.Z)(t), "_isCategoryIdExist", (function(e) {
                            var n;
                            return N()(n = t.props.categories).call(n, (function(t) {
                                var n;
                                return (null === (n = t.id) || void 0 === n ? void 0 : n.toString()) === (null == e ? void 0 : e.toString())
                            }))
                        })), (0, f.Z)((0, s.Z)(t), "_changeCategory", (function(e) {
                            t.fetchBookingEventList(e), t.setState({
                                currentCategory: e
                            })
                        }));
                        var n = e.inSectionSelector,
                            o = e.templateDummyData,
                            r = function() {
                                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    a = P.getBookingEventCategories() || [],
                                    o = P.getBookingEventTypes() || [],
                                    i = v()(a).call(a, (function(e) {
                                        var t;
                                        return (null == e || null === (t = e.id) || void 0 === t ? void 0 : t.toString()) === (null == n ? void 0 : n.toString()) && (null == e ? void 0 : e.eventsCount) > 0
                                    }));
                                return i ? y()(e = _()(t = i.eventTypeIds).call(t, (function(e) {
                                    return v()(o).call(o, (function(t) {
                                        var n;
                                        return (null === (n = t.id) || void 0 === n ? void 0 : n.toString()) === (null == e ? void 0 : e.toString())
                                    }))
                                }))).call(e, (function(e) {
                                    return e
                                })) : o || []
                            }(e.category);
                        return n && n && (r = o), t.state = {
                            eventList: r || [],
                            showDummyData: !1,
                            isShowBookingTooltip: !1,
                            canUseAIDraftData: !1,
                            currentCategory: "all"
                        }, t
                    }
                    return (0, r.Z)(g, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e, t) {
                            var n = e.category;
                            n !== this.props.category && this.fetchBookingEventList(n)
                        }
                    }, {
                        key: "toggleTooltip",
                        value: function(e) {
                            this.state.showDummyData && this.setState({
                                isShowBookingTooltip: e
                            })
                        }
                    }, {
                        key: "_getSpecialStyleByBg",
                        value: function() {
                            var e = (this.props.sectionStyleProps || {}).background1,
                                t = z().getCustomColors().highlight1,
                                n = (void 0 === t ? null : t) || "#613C93";
                            if (q().isUndefined(e)) return "";
                            var a = Y.getColorInfoByBgData(e),
                                o = a.bgColor;
                            if (a.isImageOrVedio) return "";
                            var i = {
                                    categorizeTextColor: "#555555",
                                    categorizeSelectedColor: n,
                                    categoryBarBorderColor: "#555555"
                                },
                                l = Y.getTextColorSettingsByBgColor(o, i);
                            return l.categorizeTextColor = new(K())(l.categorizeTextColor).fade(.7).toRgba(), l.categoryBarBorderColor = new(K())(l.categoryBarBorderColor).fade(.2).toRgba(), $(l)
                        }
                    }, {
                        key: "_onClickEditor",
                        value: function(e) {
                            B.openBookingPanel(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this,
                                a = this.state,
                                o = a.eventList,
                                i = a.showDummyData,
                                l = a.isShowBookingTooltip,
                                r = a.currentCategory,
                                s = this.props,
                                u = s.layoutConfig,
                                c = s.isPreviewMode,
                                d = s.inSectionSelector,
                                f = s.sectionStyleProps,
                                g = s.categories,
                                p = s.category,
                                h = this.getBookingOverlayText(),
                                v = this._getSpecialStyleByBg();
                            return (0, m.Z)("div", {
                                className: "s-component s-ecommerce ".concat(v)
                            }, void 0, (0, m.Z)("div", {
                                className: "s-ecommerce-content"
                            }, void 0, (null == g ? void 0 : g.length) > 0 && !d && ("all" === p || !this._isCategoryIdExist(p)) && !i && (0, m.Z)("div", {
                                className: "persona" === P.getTheme().get("name") ? "" : "sixteen columns",
                                style: {
                                    display: "block"
                                }
                            }, void 0, (0, m.Z)(F, {
                                isCategoryIdExist: this._isCategoryIdExist,
                                changeCategory: this._changeCategory,
                                currentCategory: r,
                                categories: g
                            }, void 0, (0, m.Z)("div", {
                                className: "s-component-editor-wrapper"
                            }, void 0, (0, m.Z)("div", {
                                className: Z("s-component-overlay", {
                                    visible: O.getInWeChat()
                                }),
                                onClick: function() {
                                    return n._onClickEditor({
                                        tab: "category"
                                    })
                                }
                            }, void 0, (0, m.Z)("div", {
                                className: "overlay"
                            }, void 0, (0, m.Z)("div", {
                                className: "center"
                            }, void 0, (0, m.Z)("span", {}, void 0, X("Portfolio|Manage Categories")))))))), (0, m.Z)("div", {
                                className: "s-ecommerce-wrapper"
                            }, void 0, (0, m.Z)("div", {
                                className: "s-ecommerce-products-wrapper"
                            }, void 0, this.getIsShowComponentOverlay() && (0, m.Z)("div", {
                                className: "s-component-editor-wrapper"
                            }, void 0, (0, m.Z)("div", {
                                className: "s-component-overlay",
                                onMouseEnter: E()(e = this.toggleTooltip).call(e, this, !0),
                                onMouseLeave: E()(t = this.toggleTooltip).call(t, this, !1),
                                onClick: this.handleOpenBookingPanel
                            }, void 0, (0, m.Z)("div", {
                                className: "center"
                            }, void 0, (0, m.Z)(H.Z, {
                                getPopupContainer: function(e) {
                                    return null == e ? void 0 : e.parentNode
                                },
                                destroyTooltipOnHide: !0,
                                visible: l,
                                title: this.renderTooltipTilte()
                            }, void 0, (0, m.Z)("span", {}, void 0, h))))), o.length > 0 ? (0, m.Z)(I, {
                                layoutConfig: u,
                                bookingEventList: o,
                                showDummyData: i,
                                inSectionSelector: d,
                                isPreviewMode: c,
                                sectionStyleProps: f
                            }) : (0, m.Z)(Q, {
                                isPreviewMode: c
                            })))))
                        }
                    }]), g
                }(w.Component),
                te = (0, D.Z)()(ee)
        },
        389005: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(366757),
                o = n(183123);
            t.default = function(e) {
                if (e.isAiMobileMode) {
                    if (o.getCanUseNewMobileEditorFeature()) {
                        var t = n(992177).Z;
                        return a.createElement(t, e)
                    }
                    return null
                }
                return null
            }
        },
        792539: function(e, t, n) {
            "use strict";
            var a = n(501068),
                o = n.n(a),
                i = n(573126),
                l = n(863056),
                r = n(468420),
                s = n(327344),
                u = n(505281),
                c = n(484441),
                d = n(103020),
                f = n(803362),
                m = n(844845),
                g = n(977766),
                p = n.n(g),
                h = n(366757),
                v = n(294184),
                b = n.n(v),
                y = n(234584),
                C = n(411202);
            var _ = function(e) {
                (0, c.Z)(g, e);
                var t, n, a = (t = g, n = function() {
                    if ("undefined" == typeof Reflect || !o()) return !1;
                    if (o().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, a = (0, f.Z)(t);
                    if (n) {
                        var i = (0, f.Z)(this).constructor;
                        e = o()(a, arguments, i)
                    } else e = a.apply(this, arguments);
                    return (0, d.Z)(this, e)
                });

                function g() {
                    var e, t;
                    (0, r.Z)(this, g);
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t = a.call.apply(a, p()(e = [this]).call(e, o)), (0, m.Z)((0, u.Z)(t), "handleClickEditor", (function() {
                        var e = t.props.itemData.onMenuClick;
                        "function" == typeof e && e()
                    })), t
                }
                return (0, s.Z)(g, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.selected,
                            a = e.itemData,
                            o = e.dropDownItemFontWeight,
                            r = e.direction,
                            s = e.themeProps,
                            u = y.getIsRtlLayout() && "right" === r ? "left" : r || "down",
                            c = o && o < 400 ? "drop-down-icon-light entypo-".concat(u, "-open-big") : "drop-down-icon-bold fas fa-chevron-".concat(u);
                        return h.createElement(C, (0, i.Z)({
                            allLinkEnabled: !0
                        }, this.props), !1, (0, l.Z)("div", {
                            className: b()("s-nav-link-container", t)
                        }, void 0, (0, l.Z)("span", {
                            className: b()("s-nav-dropdown-item s-nav-item", {
                                selected: n
                            }),
                            style: {
                                display: "left" === (null == s ? void 0 : s.name) ? "inline-flex" : "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, void 0, (0, l.Z)("span", {
                            className: "s-font-nav_item s-nav-dropdown-text"
                        }, void 0, "".concat(a.title), " "), (0, l.Z)("i", {
                            className: "fa ".concat(c)
                        }))))
                    }
                }]), g
            }(h.Component);
            t.Z = _
        },
        791409: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(501068),
                o = n.n(a),
                i = n(573126),
                l = n(863056),
                r = n(386302),
                s = n(468420),
                u = n(327344),
                c = n(505281),
                d = n(484441),
                f = n(103020),
                m = n(803362),
                g = n(844845),
                p = n(977766),
                h = n.n(p),
                v = n(344494),
                b = n.n(v),
                y = n(778914),
                C = n.n(y),
                _ = n(981643),
                S = n.n(_),
                N = n(2991),
                x = n.n(N),
                E = n(54103),
                w = n.n(E),
                T = n(366757),
                k = n(50533),
                B = n(496486),
                L = n(294184),
                I = n.n(L),
                O = n(223336),
                P = n(241093),
                M = n(818166),
                A = n(234584),
                D = n(124218),
                R = n(43138),
                U = n(589499),
                F = n(625675),
                Z = n(143268),
                H = n(691043),
                V = n(629869),
                z = n(595386),
                G = n(370917),
                Y = n(144726),
                j = n(353147);
            var W = function(e, t) {
                    var n, a = 2 * e,
                        o = a - a / t;
                    return h()(n = "calc(".concat({
                        1: "100%",
                        2: "50%",
                        3: "33.33%",
                        4: "25%"
                    }[t], " - ")).call(n, o, "px)")
                },
                K = (0, z.default)("div", {
                    target: "css-100pv080"
                })(".image-wrapper{background:url(", (function(e) {
                    return e.thumbnail
                }), ");}.s-component-content{padding-bottom:", (function(e) {
                    return e.imageShape
                }), ";}&.s-new-gallery-grid-item{padding:", (function(e) {
                    return e.spacing
                }), "px;padding-left:", (function(e) {
                    return e.isRtlLayout ? "".concat(2 * e.spacing, "px") : "unset"
                }), ";padding-right:", (function(e) {
                    return e.isRtlLayout ? "unset" : "".concat(2 * e.spacing, "px")
                }), ";", (function(e) {
                    return (0, G.css)("&:nth-child(", e.columnsNum, "n){padding-right:", e.isRtlLayout ? "unset" : "0px", ";padding-left:", e.isRtlLayout ? "0px" : "unset", ";}width:", W(e.spacing, e.columnsNum), ";@media (max-width:728px){width:100%;}")
                }), "}&.s-new-gallery-tiled-item{width:100%;padding:", (function(e) {
                    return e.spacing
                }), "px 0px;", (function(e) {
                    return (0, G.css)(e.isNewMobileLayout && "@media (max-width: 728px) {\n          padding: ".concat(e.spacing / 2, "px 0px;\n        }"), "\n      ", e.isMobileViewOnEditor && "padding: ".concat(e.spacing / 2, "px 0px;\n        "))
                }), "}"),
                J = (0, z.default)("div", {
                    target: "css-100pv081"
                })("padding-right:", (function(e) {
                    return 2 * e.spacing
                }), "px;", (function(e) {
                    var t, n;
                    return (0, G.css)("&:nth-child(", e.columnsNum, "n){padding-right:0px;}width:", W(e.spacing, e.columnsNum), ";", e.isNewMobileLayout && h()(t = "@media (max-width: 728px) {\n        padding-right: ".concat(e.spacing, "px;\n        width: ")).call(t, W(e.spacing / 2, e.columnsNum), ";\n      }"), "\n    ", e.isMobileViewOnEditor && h()(n = "padding-right: ".concat(e.spacing, "px;\n      width: ")).call(n, W(e.spacing / 2, e.columnsNum), ";\n    "), "\n    ", !e.isNewMobileLayout && "@media (max-width: 728px) {\n        width: 100%;\n      }")
                })),
                q = {
                    1: "one",
                    2: "two",
                    3: "three",
                    4: "four"
                },
                X = {
                    large: 30,
                    small: 10,
                    none: 0
                },
                Q = {
                    1: "1920x1920>",
                    2: "960x960>",
                    3: "640x640>",
                    4: "480x480>"
                },
                $ = function(e) {
                    (0, d.Z)(v, e);
                    var t, a, p = (t = v, a = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, m.Z)(t);
                        if (a) {
                            var i = (0, m.Z)(this).constructor;
                            e = o()(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, f.Z)(this, e)
                    });

                    function v() {
                        var e, t;
                        (0, s.Z)(this, v);
                        for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                        return t = p.call.apply(p, h()(e = [this]).call(e, a)), (0, g.Z)((0, c.Z)(t), "_getGalleryItemProps", (function(e) {
                            var t = e.get("id");
                            return {
                                binding: {
                                    default: e
                                },
                                key: t,
                                isNewGalleryItem: !0,
                                link: e.get("link"),
                                layout: "",
                                path: [],
                                dataProps: D[e.get("type")](e),
                                eagerLoad: !0
                            }
                        })), (0, g.Z)((0, c.Z)(t), "_getSources", (function() {
                            var e = t.props.gallery,
                                n = null == e ? void 0 : e.get("sources");
                            return U.setImagesThumbnail(n)
                        })), (0, g.Z)((0, c.Z)(t), "_getTiledSources", (function() {
                            var e = t._getSources(),
                                n = t.props,
                                a = n.layout,
                                o = (n.isMobileViewOnEditor, []),
                                i = [],
                                l = a && a.get("columns");
                            if (!l) return [];
                            var s = R.isSmallScreen() ? 2 : l;
                            return o.length = s, i.length = s, b()(o).call(o, []), b()(i).call(i, 0), C()(e).call(e, (function(e) {
                                var t, n = S()(i).call(i, Math.min.apply(Math, i));
                                if (-1 !== n) {
                                    var a = e.get("w"),
                                        l = (e.get("h") || 1) / (a || 1) * 100;
                                    i[n] += l;
                                    var s = e.set("renderPercentage", "".concat(l, "%"));
                                    o[n] = h()(t = []).call(t, (0, r.Z)(o[n]), [s])
                                }
                            })), o
                        })), (0, g.Z)((0, c.Z)(t), "_getStyles", (function(e) {
                            var n = t.props.layout,
                                a = null == n ? void 0 : n.get("structure"),
                                o = {
                                    spacing: X,
                                    imageShape: {
                                        square: "100%",
                                        "landscape-4-3": "75%",
                                        "landscape-16-9": "56.25%",
                                        "landscape-4-1": "25%"
                                    },
                                    columns: q
                                },
                                i = {
                                    columnsNum: null == n ? void 0 : n.get("columns")
                                };
                            return B.forEach(o, (function(e, t) {
                                i[t] = e[null == n ? void 0 : n.get(t)]
                            })), "tiled" === a && (i.columns = "one", i.imageShape = null == e ? void 0 : e.get("renderPercentage")), i
                        })), (0, g.Z)((0, c.Z)(t), "_renderContent", (function() {
                            var e = t._getSources(),
                                n = t.props.layout;
                            if (!e || 0 === e.size) return (0, l.Z)("div", {
                                className: "empty-list s-common-status s-font-body"
                            }, void 0, j("No content."));
                            var a = null == n ? void 0 : n.get("structure");
                            return (0, l.Z)("div", {
                                className: "s-new-gallery-content"
                            }, void 0, "grid" === a ? t._renderGridList() : t._renderTiledList())
                        })), (0, g.Z)((0, c.Z)(t), "_renderGridList", (function() {
                            var e;
                            return null === (e = t._getSources()) || void 0 === e ? void 0 : x()(e).call(e, (function(e, n) {
                                return t._renderItem(e, n)
                            }))
                        })), (0, g.Z)((0, c.Z)(t), "_renderTiledList", (function() {
                            var e = t._getTiledSources(),
                                n = t.props,
                                a = n.layout,
                                o = n.isMobileViewOnEditor,
                                i = null == a ? void 0 : a.get("spacing"),
                                r = q[null == e ? void 0 : e.length],
                                s = null == a ? void 0 : a.get("isNewMobileLayout");
                            return null == e ? void 0 : x()(e).call(e, (function(n) {
                                return (0, l.Z)(J, {
                                    isMobileViewOnEditor: o,
                                    isNewMobileLayout: s,
                                    columnsNum: null == e ? void 0 : e.length,
                                    spacing: X[i],
                                    className: "s-new-gallery-tiled-columns ".concat(r)
                                }, void 0, null == n ? void 0 : x()(n).call(n, (function(e, n) {
                                    return t._renderItem(e, n)
                                })))
                            }))
                        })), (0, g.Z)((0, c.Z)(t), "renderItemTitle", (function(e) {
                            var n, a = t.props.layout,
                                o = null == a ? void 0 : a.get("showTitle"),
                                i = null == a ? void 0 : a.get("structure"),
                                r = e.get("link"),
                                s = null == e ? void 0 : e.get("caption"),
                                u = s || "";
                            return o && (u || "tiled" !== i) ? (0, l.Z)("h3", {
                                onClick: w()(n = t._openItemLink).call(n, (0, c.Z)(t), r),
                                className: I()("image-title s-title-group s-item-title s-font-title", {
                                    "hint-text": !s,
                                    "is-link": t._hasLink(r)
                                })
                            }, void 0, (0, l.Z)("span", {}, void 0, u)) : null
                        })), (0, g.Z)((0, c.Z)(t), "_hasLink", (function(e) {
                            return !(null == e || !e.get("checked") || !(null != e && e.get("url") || "section" === (null == e ? void 0 : e.get("type"))))
                        })), (0, g.Z)((0, c.Z)(t), "_getItemLink", (function(e) {
                            var n = null == e ? void 0 : e.get("type"),
                                a = null == e ? void 0 : e.get("url"),
                                o = null == e ? void 0 : e.get("pageId"),
                                i = null == e ? void 0 : e.get("sectionId");
                            if (!t._hasLink(e)) return "";
                            var l = M.getExternalLinkUrl(n, a, o, i);
                            return Z.hasProtocol(l) ? l : Z.addProtocol(l)
                        })), (0, g.Z)((0, c.Z)(t), "_openItemLink", (function(e) {
                            var n = null == e ? void 0 : e.get("type"),
                                a = t._getItemLink(e);
                            a && ("section" !== n ? window.open(a) : window.location.href = a)
                        })), (0, g.Z)((0, c.Z)(t), "_renderItem", (function(e, n) {
                            var a, o, r, s = t._getStyles(e),
                                u = t.props,
                                c = u.layout,
                                d = u.inSectionSelector,
                                f = u.isMobileViewOnEditor,
                                m = null == c ? void 0 : c.get("structure"),
                                g = null == c ? void 0 : c.get("isNewMobileLayout"),
                                p = A.getIsRtlLayout();
                            if ("Video" === (null == e ? void 0 : e.get("type"))) o = (r = null == e ? void 0 : e.get("thumbnail_url")) && "!" !== r ? r : "";
                            else {
                                var v = c.get("columns");
                                o = (0, Y.createImage)(null == e ? void 0 : e.toJS()).getUrl(Q[v])
                            }
                            return T.createElement(K, (0, i.Z)({}, s, {
                                isRtlLayout: p,
                                isMobileViewOnEditor: f,
                                isNewMobileLayout: g,
                                className: h()(a = "s-new-gallery-item s-new-gallery-".concat(m, "-item ")).call(a, s.columns),
                                thumbnail: o
                            }), T.createElement(H.default, (0, i.Z)({
                                index: n,
                                key: e.get("id"),
                                ItemLink: function() {
                                    var n = e.get("link"),
                                        a = null == n ? void 0 : n.get("type"),
                                        o = (null == e ? void 0 : e.get("description")) || j("Template|Thumbnail Gallery");
                                    return t._hasLink(n) ? (0, l.Z)("a", {
                                        className: "link-cover",
                                        href: t._getItemLink(n),
                                        target: "section" !== a ? "_blank" : "_self",
                                        "aria-label": o
                                    }) : null
                                },
                                itemLink: t._getItemLink(e.get("link")),
                                caption: e.get("caption"),
                                description: e.get("description"),
                                inSectionSelector: d
                            }, t._getGalleryItemProps(e))), t.renderItemTitle(e))
                        })), (0, g.Z)((0, c.Z)(t), "_openGalleryEditorDialog", (function() {
                            var e, n, a = t.props,
                                o = a.gallery,
                                i = a.updateGallery,
                                l = a.editStateHook;
                            null != o && o.get("id") && l("focus", null == o ? void 0 : o.get("id"));
                            var r, s = {
                                gallery: o,
                                updateGallery: i,
                                closeCallback: function() {
                                    null != o && o.get("id") && l("defocus", null == o ? void 0 : o.get("id"))
                                }
                            };
                            null === (r = t.props) || void 0 === r || r.openGalleryEditorDialog(s), null === (e = window) || void 0 === e || null === (n = e.analytics) || void 0 === n || n.track("Editor - Gallery - Click Manage", {
                                siteId: A.getId(),
                                userId: A.getUserId()
                            })
                        })), t
                    }
                    return (0, u.Z)(v, [{
                        key: "componentDidMount",
                        value: function() {
                            this._enableFancyBox()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isGalleryEditorOpen,
                                n = e.isGalleryEditorOpen;
                            !t && n && this._enableFancyBox()
                        }
                    }, {
                        key: "_enableFancyBox",
                        value: function() {
                            var e = this;
                            return n.e(1626).then(function() {
                                var t, a = n(791626).Fancybox,
                                    o = P.GALLERY(O(e.refs.galleryListDOM)),
                                    i = null === (t = O(o[0])) || void 0 === t ? void 0 : t.attr("data-fancybox");
                                F.transformVideoSrc(O(e.refs.galleryListDOM)), w()(a).call(a, "[data-fancybox=".concat(i, "]"), {
                                    Thumbs: !1,
                                    Carousel: {
                                        Dots: !0
                                    },
                                    Toolbar: {
                                        display: ["zoom", "close"]
                                    }
                                })
                            }.bind(null, n)).catch(n.oe)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, l.Z)("div", {
                                className: "s-component s-component-new-gallery-list"
                            }, void 0, !1, T.createElement("div", {
                                className: "s-gallery s-new-gallery",
                                ref: "galleryListDOM"
                            }, this._renderContent()))
                        }
                    }]), v
                }(T.Component),
                ee = (0, k.connect)((function(e, t) {
                    var n;
                    return {
                        targetId: null === (n = t.gallery) || void 0 === n ? void 0 : n.get("id"),
                        isGalleryEditorOpen: !1,
                        isMobileViewOnEditor: !1
                    }
                }), {
                    openGalleryEditorDialog: function(e) {
                        return (0, V.G3)("newGalleryDialog", e)
                    }
                })($);
            t.default = ee
        },
        992177: function(e, t, n) {
            "use strict";
            var a, o = n(863056),
                i = n(859056),
                l = n(933032),
                r = n.n(l),
                s = n(366757),
                u = n(50533),
                c = n(171725),
                d = n(665172),
                f = n(834243),
                m = n(234584),
                g = n(684474),
                p = n(469155),
                h = n(141655),
                v = n(962767),
                b = n(353147),
                y = s.useCallback,
                C = s.useState,
                _ = (0, u.connect)((function() {
                    return {
                        isVisibleTour: !m.isHideMobileEditorTutorial()
                    }
                }), {})((function(e) {
                    var t = e.sectionIndex,
                        n = e.sectionBinding,
                        l = e.isVisibleTour,
                        u = C(l),
                        _ = (0, i.Z)(u, 2),
                        S = _[0],
                        N = _[1],
                        x = y((function() {
                            m.hideMobileEditorTutorial(), (0, v.updateHideReminderStatus)("mobile_editor_tour"), N(!1)
                        }), []),
                        E = y((function() {
                            var e;
                            p.setSectionIndex(t), h.closePagesPanel(), r()((function() {
                                var e;
                                null === (e = window.edit_page) || void 0 === e || e.Event.publish("HideSectionMenu.Open", {
                                    sectionIndex: t
                                })
                            })), null === (e = window.mixpanel) || void 0 === e || e.track("Editor - Hide/Show", {
                                uid: f.getId(),
                                siteId: m.getId(),
                                section_type: n.get("template_name"),
                                editor_type: "mobile" === g.getEditMode() ? "mobile" : "desktop"
                            })
                        }), [n, t]);
                    return (0, o.Z)(d.Z, {
                        visible: S,
                        placement: "bottom",
                        overlayClassName: "mobile-editor-take-tour",
                        content: s.createElement(s.Fragment, null, (0, o.Z)("p", {
                            className: "take-tour-title"
                        }, void 0, b("Editor|NEW FOR MOBILE"), " 🎉"), (0, o.Z)("p", {
                            className: "take-tour-desc"
                        }, void 0, b("Editor|You can show/hide sections only for mobile, without changing desktop view.")), (0, o.Z)(c.Z, {
                            size: "small",
                            className: "take-tour-btn no-margin",
                            onClick: x
                        }, void 0, b("Ok"))),
                        getPopupContainer: function(e) {
                            return e
                        }
                    }, void 0, (0, o.Z)("div", {
                        className: "s-component s-hide-or-show-section"
                    }, void 0, (0, o.Z)("div", {
                        className: "s-component-editor",
                        onClick: E
                    }, void 0, (0, o.Z)("span", {
                        className: "inner-text"
                    }, void 0, b("Editor|HIDE/SHOW")), a || (a = (0, o.Z)("i", {
                        className: "fas fa-mobile-alt btn-icon"
                    })))))
                }));
            t.Z = _
        },
        870495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return bt
                },
                getDefaultColor: function() {
                    return ct.getDefaultColor
                }
            });
            var a, o, i, l = n(686902),
                r = n.n(l),
                s = n(14310),
                u = n.n(s),
                c = n(620116),
                d = n.n(c),
                f = n(834074),
                m = n.n(f),
                g = n(778914),
                p = n.n(g),
                h = n(239649),
                v = n.n(h),
                b = n(820368),
                y = n.n(b),
                C = n(663978),
                _ = n.n(C),
                S = n(863056),
                N = n(573126),
                x = n(844845),
                E = n(859056),
                w = n(366757),
                T = n(665172),
                k = n(818166),
                B = n.n(k),
                L = n(501068),
                I = n.n(L),
                O = n(468420),
                P = n(327344),
                M = n(505281),
                A = n(484441),
                D = n(103020),
                R = n(803362),
                U = n(977766),
                F = n.n(U),
                Z = n(2991),
                H = n.n(Z),
                V = n(497093),
                z = n.n(V),
                G = n(277149),
                Y = n.n(G),
                j = n(54103),
                W = n.n(j),
                K = n(51942),
                J = n.n(K),
                q = n(973935),
                X = n(223336),
                Q = n(234584),
                $ = n(205223),
                ee = n(384887),
                te = n(143393),
                ne = n(498481),
                ae = n(998475),
                oe = n(1150),
                ie = n(595386),
                le = (0, ie.default)("div", {
                    target: "css-1ovde7i0"
                })("position:relative;font-family:'brandon-grotesque','brandon',martel-sans,sans-serif;font-weight:bold;border-radius:4px;cursor:pointer;text-transform:uppercase;width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;font-size:12px;padding:8px 12px;box-shadow:0 1px 1px rgb(0 0 0 / 20%);transition:all 0.15s;text-decoration:none;word-break:keep-all;user-select:none;line-height:1.25;background:#93b719;border-color:#93b719;color:white;border:solid 1px transparent;&:hover{background:#a5cd1c;border-color:#a5cd1c;}&.dark-gray{border-color:#525252;background:#525252;color:#ccc;:hover{background:#5e5e5e;border-color:#5e5e5e;color:#ccc;}}"),
                re = n(11945),
                se = n(353147);

            function ue(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !I()) return !1;
                    if (I().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(I()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = (0, R.Z)(e);
                    if (t) {
                        var o = (0, R.Z)(this).constructor;
                        n = I()(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var ce, de = (0, re.getIsEditorRtlLayout)(),
                fe = (0, ie.default)("div", {
                    target: "css-1s5cttw0"
                })("&.react_color_div{display:flex;width:100%;}"),
                me = (0, ie.default)("div", {
                    target: "css-1s5cttw1"
                })("&.saturation_wrapper{position:relative;width:86%;height:170px;}"),
                ge = (0, ie.default)("div", {
                    target: "css-1s5cttw2"
                })("&.hue_wrapper_div{position:relative;width:14%;}"),
                pe = (0, ae.iS)((function(e) {
                    return (0, S.Z)(fe, {
                        className: "react_color_div"
                    }, void 0, (0, S.Z)(ge, {
                        className: "hue_wrapper_div"
                    }, void 0, w.createElement(oe.PS, (0, N.Z)({}, e, {
                        direction: "vertical",
                        height: 100,
                        width: 20
                    }))), (0, S.Z)(me, {
                        className: "saturation_wrapper"
                    }, void 0, w.createElement(oe.OQ, e)))
                })),
                he = (0, ie.default)("div", {
                    target: "css-1s5cttw3"
                })("&.color_picker_wrapper{width:100%;padding:0;overflow:hidden;background:transparent;box-shadow:none;&:before{display:none;}.bottom-control{display:flex;justify-content:space-between;align-items:center;input[type='text']{width:50%;height:36px;border:none;border-radius:unset;text-indent:10px;}}}"),
                ve = (0, ie.default)("a", {
                    target: "css-1s5cttw4"
                })(".colors-pick-content .bottom-control &.change-btn{display:flex;justify-content:center;color:white;opacity:0.5;cursor:pointer;width:50%;text-align:center;border-bottom:none;&:hover{color:white;opacity:0.8;}& i{display:inline-block;width:12px;height:12px;", de ? "margin-left: 4px;" : "margin-right: 4px;", "\n      float:left;}}"),
                be = (0, ie.default)("div", {
                    target: "css-1s5cttw5"
                })("&.out_wrapper{.colors-pick-content{position:relative;margin-bottom:10px;border:solid 2px;border-radius:6px;border-color:#5c6676;}button.confirm-btn{width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;}}"),
                ye = H()(a = [.5, 1]).call(a, (function(e) {
                    return {
                        value: e,
                        label: function() {
                            var t;
                            return F()(t = "".concat(100 * e, "% ")).call(t, se("Editor|Opacity"))
                        }
                    }
                })),
                Ce = function(e) {
                    (0, A.Z)(n, e);
                    var t = ue(n);

                    function n() {
                        var e, a;
                        (0, O.Z)(this, n);
                        for (var l = arguments.length, r = new Array(l), s = 0; s < l; s++) r[s] = arguments[s];
                        return a = t.call.apply(t, F()(e = [this]).call(e, r)), (0, x.Z)((0, M.Z)(a), "renderColorPicker", (function() {
                            var e = a.props,
                                t = e.editOpacity,
                                n = e.hideDefaultColor,
                                l = e.ui.hexInputValue,
                                r = e.selectNullButtonTitle,
                                s = a.getCurrentColorObject();
                            return (0, S.Z)(he, {
                                className: "s-tooltip-dialog active color_picker_wrapper"
                            }, void 0, (0, S.Z)(pe, {
                                color: s.toHex(),
                                onChangeComplete: function(e) {
                                    a.updateRgb(e.hex)
                                }
                            }), (0, S.Z)("div", {
                                className: "bottom-control"
                            }, void 0, (0, S.Z)("input", {
                                type: "text",
                                value: l.toUpperCase(),
                                onChange: function(e) {
                                    return a.handleHexInputChange(e)
                                },
                                maxLength: 7
                            }), !n && (0, S.Z)(ve, {
                                className: "change-btn",
                                onClick: function() {
                                    return a.resetToDefaultColor()
                                }
                            }, void 0, o || (o = (0, S.Z)("i", {
                                className: "entypo-block"
                            })), r || se("Editor|Use Default"))), t && (0, S.Z)("div", {
                                className: "s-form-field s-select-container small"
                            }, void 0, (0, S.Z)("select", {
                                onChange: function(e) {
                                    return a.updateAlpha(e.target.value)
                                },
                                value: s.a
                            }, void 0, H()(ye).call(ye, (function(e) {
                                return (0, S.Z)("option", {
                                    value: e.value
                                }, e.value, e.label())
                            }))), i || (i = (0, S.Z)("i", {
                                className: "entypo-arrow-combo"
                            }))))
                        })), a
                    }
                    return (0, P.Z)(n, [{
                        key: "updateRgb",
                        value: function(e) {
                            var t = this.getCurrentColorObject(),
                                n = new ee(e);
                            n.a = t.a, this.props.onChange(n.toRgba()), this.props.updateUI({
                                hexInputValue: n.toHex()
                            })
                        }
                    }, {
                        key: "updateAlpha",
                        value: function(e) {
                            var t = this.getCurrentColorObject();
                            t.a = e, this.props.onChange(t.toRgba())
                        }
                    }, {
                        key: "resetToDefaultColor",
                        value: function() {
                            this.props.onChange(null), this.props.updateUI({
                                hexInputValue: ""
                            })
                        }
                    }, {
                        key: "handleHexInputChange",
                        value: function(e) {
                            var t = e.target.value;
                            this.props.updateUI({
                                hexInputValue: t
                            });
                            var n = "#rrggbb".length;
                            if (t.length === n) {
                                var a = null;
                                try {
                                    a = new ee(t)
                                } catch (e) {}
                                a && this.updateRgb(t)
                            }
                        }
                    }, {
                        key: "getCurrentColorObject",
                        value: function() {
                            return new ee(this.props.usedColor)
                        }
                    }, {
                        key: "componentWillMount",
                        value: function() {
                            this.props.updateUI({
                                hexInputValue: this.getCurrentColorObject().toHex()
                            })
                        }
                    }, {
                        key: "componentWillUpdate",
                        value: function(e) {
                            (!e.ui.hexInputValue || e.usedColor !== this.props.usedColor) && this.props.updateUI({
                                hexInputValue: new ee(e.usedColor).toHex()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.buttonClick;
                            return (0, S.Z)(be, {
                                className: "out_wrapper"
                            }, void 0, (0, S.Z)("div", {
                                className: "colors-pick-content"
                            }, void 0, t, this.renderColorPicker()), (0, S.Z)(le, {
                                size: "small",
                                className: "confirm-btn",
                                onClick: n
                            }, void 0, se("Editor|Done")))
                        }
                    }]), n
                }(w.PureComponent),
                _e = $((0, ne.default)({
                    state: {
                        hexInputValue: ""
                    }
                })(Ce), (function() {
                    return [k.getCustomColors()]
                }), (function(e) {
                    return {
                        customColors: (0, E.Z)(e, 1)[0]
                    }
                })),
                Se = function(e) {
                    (0, A.Z)(n, e);
                    var t = ue(n);

                    function n(e) {
                        var a;
                        return (0, O.Z)(this, n), a = t.call(this, e), (0, x.Z)((0, M.Z)(a), "updateUIHandler", (function(e) {
                            a.setState(J()({}, a.state, e))
                        })), a.state = {
                            hexInputValue: ""
                        }, a
                    }
                    return (0, P.Z)(n, [{
                        key: "render",
                        value: function() {
                            return w.createElement(Ce, (0, N.Z)({}, this.props, {
                                ui: this.state,
                                updateUI: this.updateUIHandler
                            }))
                        }
                    }]), n
                }(w.Component),
                Ne = _e,
                xe = n(294184),
                Ee = n.n(xe),
                we = n(836766),
                Te = n(353147);

            function ke(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !I()) return !1;
                    if (I().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(I()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = (0, R.Z)(e);
                    if (t) {
                        var o = (0, R.Z)(this).constructor;
                        n = I()(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var Be, Le = "#ffffff",
                Ie = "left",
                Oe = "right",
                Pe = 320,
                Me = (0, re.getIsEditorRtlLayout)(),
                Ae = (0, ie.default)("div", {
                    target: "css-k7mc9d0"
                })("&.color-picker-wrapper{position:absolute;display:none;width:200px;left:", (function(e) {
                    return e.isLeftPlacement ? e.noPadding ? "-228px" : "-236px" : "initial"
                }), ";right:", (function(e) {
                    return e.isLeftPlacement ? "initial" : e.noPadding ? "-228px" : "-237px"
                }), ";bottom:", (function(e) {
                    return "".concat(e.wrapperBottom, "px")
                }), ";background:#181818;border-radius:4px;padding:10px;&.visible{display:block;}.color-popover-arrow{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;", (function(e) {
                    return e.isLeftPlacement ? "right: -8px;" : "left: -7px;"
                }), "\n      bottom:", (function(e) {
                    return e.arrowBottom
                }), "px;border-left-width:0;border-right-color:#181818;&:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:7px;content:' ';", (function(e) {
                    return e.isLeftPlacement ? "right: 0;" : "left: 0;"
                }), "\n        bottom:-7px;", (function(e) {
                    return e.isLeftPlacement ? "border-right-width: 0;" : "border-left-width: 0;"
                }), "\n        ", (function(e) {
                    return e.isLeftPlacement ? "border-left-color: #181818;" : "border-right-color: #181818;"
                }), "}}}"),
                De = (0, ie.default)("div", {
                    target: "css-k7mc9d1"
                })("&.color-plate-wrapper{position:relative;width:140px;font-family:'open_sans';.color-list{display:flex;flex-flow:wrap;.color-item{width:20px;height:20px;border-radius:50%;margin:4px;cursor:pointer;box-sizing:border-box;&.dark{border:solid 1px #5c6676;}&.selected{border:solid 1px #ffff;}}}.custom-btn{width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;line-height:1;}.item-wrapper{padding:5px;}.setting-default{text-align:center;padding:8px;border:solid 1px;border-radius:4px;font-size:12px;cursor:pointer;border-color:#999;color:#999;font-family:'open_sans';line-height:1;i{color:inherit;", Me ? "margin-left: 5px;" : "margin-right: 5px;", "}}}"),
                Re = (0, ie.default)("div", {
                    target: "css-k7mc9d2"
                })("&.custom_color_btn{border-radius:4px;color:", (function(e) {
                    return e.color ? new ee(e.color).getTextColor("#ffffff", "#222222") : "black"
                }), ";background:", (function(e) {
                    return e.color || "#fff"
                }), ";text-align:center;text-transform:uppercase;padding:8px;box-sizing:border-box;border:solid 1px #fff;cursor:", (function(e) {
                    return e.hideCustom ? "initial" : "pointer"
                }), ";line-height:1;}"),
                Ue = function(e) {
                    (0, A.Z)(n, e);
                    var t = ke(n);

                    function n() {
                        var e, a;
                        (0, O.Z)(this, n);
                        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return a = t.call.apply(t, F()(e = [this]).call(e, i)), (0, x.Z)((0, M.Z)(a), "setSelectedColor", (function(e, t) {
                            a.props.updateUI({
                                selectedColor: e,
                                visiblePopover: !1
                            }), Q.getEnableTextColorFix() ? a.props.onChange(e, t, we.TEXT_COLOR_TYPE.PRE_COLOR) : a.props.onChange(e)
                        })), (0, x.Z)((0, M.Z)(a), "setCustomColor", (function(e) {
                            a.props.updateUI({
                                selectedColor: null
                            }), Q.getEnableTextColorFix() ? a.props.onChange(e, null, we.TEXT_COLOR_TYPE.CUSTOM) : a.props.onChange(e)
                        })), (0, x.Z)((0, M.Z)(a), "resetToDefaultColor", (function() {
                            var e = a.props,
                                t = e.ui.selectedColor,
                                n = e.specifiedDefaultColor,
                                o = e.useDefaultColor;
                            t && a.props.updateUI({
                                selectedColor: null,
                                visiblePopover: !1
                            }), a.props.onChange(n || o || Le, null, we.TEXT_COLOR_TYPE.DEFAULT)
                        })), (0, x.Z)((0, M.Z)(a), "getColorPickerPlacement", (function(e) {
                            var t, n, a, o = Oe,
                                i = (null === (t = X(e)) || void 0 === t || null === (n = t.offset()) || void 0 === n ? void 0 : n.left) || 0,
                                l = (null === (a = X(e)) || void 0 === a ? void 0 : a.width()) || 0;
                            return window.innerWidth - i - l - 10 < Pe && (o = Ie), Me && i > Pe && (o = Ie), o
                        })), (0, x.Z)((0, M.Z)(a), "togglePopover", (function() {
                            var e = a.props,
                                t = e.hideCustom,
                                n = e.ui.visiblePopover,
                                o = q.findDOMNode((0, M.Z)(a));
                            if (!t) {
                                var i = a.getColorPickerPlacement(o);
                                a.props.updateUI({
                                    colorPickerPlacement: i,
                                    visiblePopover: !n
                                })
                            }
                        })), (0, x.Z)((0, M.Z)(a), "hidePopover", (function() {
                            a.props.updateUI({
                                visiblePopover: !1
                            })
                        })), (0, x.Z)((0, M.Z)(a), "getColorPickerBottom", (function() {
                            var e = q.findDOMNode((0, M.Z)(a)),
                                t = -140,
                                n = 160;
                            if (e) {
                                var o = X(e).height() || 0,
                                    i = document.documentElement.clientHeight + document.documentElement.scrollTop - X(e).offset().top - o,
                                    l = t + i;
                                t = Math.max(-i, t), n = Math.min(n + l, n)
                            }
                            return {
                                wrapperBottom: t,
                                arrowBottom: n
                            }
                        })), (0, x.Z)((0, M.Z)(a), "renderColorPicker", (function() {
                            var e = a.props,
                                t = e.ui,
                                n = t.visiblePopover,
                                o = t.colorPickerPlacement,
                                i = e.isPure,
                                l = e.noPadding,
                                r = a.getColorPickerBottom(),
                                s = r.wrapperBottom,
                                u = r.arrowBottom;
                            return (0, S.Z)(Ae, {
                                className: Ee()("color-picker-wrapper", {
                                    visible: n
                                }),
                                isLeftPlacement: o === Ie,
                                wrapperBottom: s,
                                arrowBottom: u,
                                noPadding: l
                            }, void 0, ce || (ce = (0, S.Z)("div", {
                                className: "color-popover-arrow"
                            })), i ? w.createElement(Se, (0, N.Z)({}, a.props, {
                                selectNullButtonTitle: Te("Editor|Remove"),
                                onChange: a.setCustomColor,
                                buttonClick: a.hidePopover
                            })) : w.createElement(Ne, (0, N.Z)({}, a.props, {
                                selectNullButtonTitle: Te("Editor|Remove"),
                                onChange: a.setCustomColor,
                                buttonClick: a.hidePopover
                            })))
                        })), (0, x.Z)((0, M.Z)(a), "getThemeColors", (function(e, t) {
                            var n = new ee(e),
                                a = ee.getDiffLightnessColors(n.toHsl());
                            return H()(a).call(a, (function(e, n) {
                                return {
                                    value: e,
                                    index: n,
                                    type: t,
                                    dark: n === a.length - 1
                                }
                            }))
                        })), (0, x.Z)((0, M.Z)(a), "getThemeColorItems", (function() {
                            var e, t, n = a.props.customColors,
                                o = n.highlight1,
                                i = n.highlight2;
                            te.isImmutable(n) && (o = n.get("highlight1"), i = n.get("highlight2"));
                            var l = o ? z()(e = a.getThemeColors(o, "highlight1")).call(e) : [],
                                r = i ? z()(t = a.getThemeColors(i, "highlight2")).call(t) : [];
                            return r.length && Y()(l).call(l, (function(e, t) {
                                return ee.isSameByDistance(e.value, r[t].value)
                            })) ? l : F()(l).call(l, r)
                        })), (0, x.Z)((0, M.Z)(a), "getCurrentIndex", (function(e, t, n, o) {
                            var i = a.props,
                                l = i.ui.selectedColor,
                                r = i.selectedType,
                                s = t,
                                u = e;
                            if (Q.getEnableTextColorFix()) switch (u = r === we.TEXT_COLOR_TYPE.PRE_COLOR && n === l, o.length) {
                                case we.TEXT_PRE_COLOR_COUNT.ONLY_ONE_THEME_COLOR:
                                    s > we.TEXT_PRE_COLOR_COUNT.ONLY_ONE_THEME_COLOR - 1 && (s += we.TEXT_PRE_COLOR_COUNT.ONLY_ONE_THEME_COLOR);
                                    break;
                                case we.TEXT_PRE_COLOR_COUNT.NO_THEME_COLOR:
                                    s += we.TEXT_PRE_COLOR_COUNT.TWO_THEME_COLOR
                            }
                            return {
                                index: s,
                                selected: u
                            }
                        })), (0, x.Z)((0, M.Z)(a), "renderColorList", (function() {
                            var e, t = a.props.ui.selectedColor,
                                n = a.props,
                                o = n.defaultColors,
                                i = void 0 === o ? [] : o,
                                l = n.needThemColors,
                                r = [];
                            return l && (r = a.getThemeColorItems()), e = F()(r).call(r, i), (0, S.Z)("div", {
                                className: "color-list"
                            }, void 0, H()(e).call(e, (function(e, n) {
                                var o, i = "string" == typeof e ? e : e.value,
                                    l = i === t,
                                    s = a.getCurrentIndex(l, n, i, r),
                                    u = s.index,
                                    c = s.selected;
                                return (0, S.Z)("div", {
                                    className: Ee()("color-item", {
                                        selected: c,
                                        dark: null == e ? void 0 : e.dark
                                    }),
                                    style: {
                                        background: i
                                    },
                                    onClick: W()(o = a.setSelectedColor).call(o, (0, M.Z)(a), i, u)
                                }, "color_item_".concat(u))
                            })))
                        })), (0, x.Z)((0, M.Z)(a), "getNewTextColorParams", (function() {
                            var e = a.props,
                                t = e.usedColor,
                                n = e.selectedType,
                                o = e.useDefaultColor,
                                i = {},
                                l = n && n === we.TEXT_COLOR_TYPE.DEFAULT || !n && (null == o ? void 0 : o.toLocaleLowerCase()) === (null == t ? void 0 : t.toLocaleLowerCase()),
                                r = Le;
                            try {
                                if (Q.getEnableTextColorFix() && l) {
                                    i.backgroundColor = o;
                                    var s = new ee(o).getTextColor("#ffffff", "#222222");
                                    i.borderColor = "#ffffff", i.color = s
                                }
                                t && (r = new ee(t).toHex())
                            } catch (e) {}
                            return {
                                panelStyle: i,
                                currentColor: r
                            }
                        })), a
                    }
                    return (0, P.Z)(n, [{
                        key: "componentWillMount",
                        value: function() {
                            this.props.updateUI({
                                selectedColor: this.props.usedColor,
                                colorPickerPlacement: Oe
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            !e.ui.isVisible && this.props.ui.isVisible && this.props.updateUI({
                                visiblePopover: !1
                            }), e.usedColor !== this.props.usedColor && this.props.updateUI({
                                selectedColor: e.usedColor
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.usedColor,
                                n = e.hideCustom,
                                a = e.selectedType,
                                o = e.useDefaultColor,
                                i = e.hideUseDefault,
                                l = a && a === we.TEXT_COLOR_TYPE.DEFAULT || !a && (null == o ? void 0 : o.toLocaleLowerCase()) === (null == t ? void 0 : t.toLocaleLowerCase()),
                                r = a && a === we.TEXT_COLOR_TYPE.CUSTOM || n,
                                s = this.getNewTextColorParams(),
                                u = s.panelStyle,
                                c = s.currentColor;
                            return (0, S.Z)(De, {
                                className: "color-plate-wrapper"
                            }, void 0, !i && (0, S.Z)("div", {
                                className: "item-wrapper"
                            }, void 0, (0, S.Z)("div", {
                                style: u,
                                className: "setting-default",
                                onClick: this.resetToDefaultColor
                            }, void 0, (0, S.Z)("i", {
                                className: Ee()(l ? "far fa-check-circle" : "entypo-block")
                            }), Te("Editor|Use Default"))), this.renderColorList(), !n && (0, S.Z)("div", {
                                className: "item-wrapper"
                            }, void 0, r ? (0, S.Z)(Re, {
                                className: "custom_color_btn",
                                color: c,
                                hideCustom: n,
                                onClick: this.togglePopover
                            }, void 0, c) : (0, S.Z)(le, {
                                className: "dark-bg dark-gray custom-btn",
                                size: "small",
                                onClick: this.togglePopover
                            }, void 0, Te("Editor|Custom"))), !n && this.renderColorPicker())
                        }
                    }]), n
                }(w.PureComponent),
                Fe = $((0, ne.default)({
                    state: {
                        hexInputValue: "",
                        selectedColor: null,
                        visiblePopover: !1,
                        colorPickerPlacement: Oe,
                        selectedType: we.TEXT_COLOR_TYPE.DEFAULT,
                        useDefaultColor: null,
                        preIndex: null,
                        hideUseDefault: !1
                    }
                })(Ue), (function() {
                    return [k.getCustomColors()]
                }), (function(e) {
                    return {
                        customColors: (0, E.Z)(e, 1)[0]
                    }
                })),
                Ze = function(e) {
                    (0, A.Z)(n, e);
                    var t = ke(n);

                    function n(e) {
                        var a;
                        return (0, O.Z)(this, n), a = t.call(this, e), (0, x.Z)((0, M.Z)(a), "updateUIHandler", (function(e) {
                            a.setState(J()({}, a.state, e))
                        })), a.state = {
                            selectedColor: null,
                            visiblePopover: !1,
                            colorPickerPlacement: Oe,
                            selectedType: we.TEXT_COLOR_TYPE.DEFAULT,
                            useDefaultColor: null,
                            preIndex: null,
                            hideUseDefault: !1
                        }, a
                    }
                    return (0, P.Z)(n, [{
                        key: "render",
                        value: function() {
                            return w.createElement(Ue, (0, N.Z)({}, this.props, {
                                ui: this.state,
                                isPure: !0,
                                updateUI: this.updateUIHandler
                            }))
                        }
                    }]), n
                }(w.Component),
                He = Fe,
                Ve = n(387937),
                ze = n(117847),
                Ge = n(104802),
                Ye = n(851172),
                je = n(589499),
                We = n(353147);

            function Ke(e, t) {
                var n = r()(e);
                if (u()) {
                    var a = u()(e);
                    t && (a = d()(a).call(a, (function(t) {
                        return m()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) p()(n = Ke(Object(a), !0)).call(n, (function(t) {
                        (0, x.Z)(e, t, a[t])
                    }));
                    else if (v()) y()(e, v()(a));
                    else {
                        var o;
                        p()(o = Ke(Object(a))).call(o, (function(t) {
                            _()(e, t, m()(a, t))
                        }))
                    }
                }
                return e
            }

            function qe(e) {
                var t = e.usedColor,
                    n = e.bgType,
                    a = void 0 === n ? "dark" : n;
                if (!t) return Be || (Be = (0, S.Z)("div", {}, void 0, "Default"));
                var o = new ee(t),
                    i = o.luma(),
                    l = o.a,
                    r = "light" === a ? i > .8 || l > .9 : i < .4 || l < .5,
                    s = "light" === a ? "#E4E8EF" : "#aaa";
                return (0, S.Z)("div", {
                    style: {
                        backgroundColor: t,
                        border: "1px solid",
                        borderColor: r ? s : "transparent",
                        width: 30,
                        height: 10,
                        borderRadius: 100,
                        cursor: "pointer"
                    }
                })
            }

            function Xe(e) {
                return null === e.rawColor && e.nullMeansUnderline ? (0, S.Z)("div", {}, void 0, We("Underline")) : qe(e)
            }

            function Qe(e) {
                return function(t) {
                    return Ve(t, (function(t) {
                        return e(t)
                    }))
                }
            }
            var $e = {
                    selectedType: we.TEXT_COLOR_TYPE.DEFAULT,
                    useDefaultColor: null,
                    preIndex: null,
                    hideUseDefault: !1
                },
                et = Qe((function(e) {
                    var t = (0, Ge.getNavObject)(e),
                        n = (0, Ge.getNavBackgroundColor1)(e),
                        a = Je({}, $e);
                    return Q.getEnableTextColorFix() && (a = (0, Ge.getColorPlateProps)(e, {
                        settingsKey: "nav.backgroundColorSettings",
                        defaultColor: "#ffffff"
                    })), Je({
                        usedColor: n,
                        editOpacity: t.supportsNavbarTranslucency(),
                        width: 200,
                        needThemColors: !0
                    }, a)
                })),
                tt = Qe((function(e) {
                    var t, n = (0, Ge.getNavObject)(e),
                        a = (0, Ge.getNavHighlightColor)(e),
                        o = Je({}, $e);
                    return Q.getEnableTextColorFix() && (o = (0, Ge.getColorPlateProps)(e, {
                        settingsKey: "nav.highlightColorSettings",
                        defaultColor: (null === (t = (0, Ye.getCustomColors)(e)) || void 0 === t ? void 0 : t.get("highlight1")) || "#57bcdb"
                    })), Je({
                        usedColor: a,
                        editOpacity: n.supportsNavbarTranslucency(),
                        rawColor: (0, Ge.getRawNavHighlightColor)(e),
                        nullMeansUnderline: n.nullHighlightColorMeansUnderline,
                        width: 200,
                        needThemColors: !0
                    }, o)
                })),
                nt = Qe((function(e) {
                    return {
                        backgroundColor: (0, Ge.getNavBackgroundColor1)(e),
                        itemColor: (0, Ge.getItemColor)(e),
                        isTransparent: (0, Ge.getNavIsTransparent)(e)
                    }
                })),
                at = Qe((function(e) {
                    var t = (0, Ge.getNavObject)(e),
                        n = (0, Ge.getItemColor)(e),
                        a = Je({}, $e);
                    return Q.getEnableTextColorFix() && (a = (0, Ge.getColorPlateProps)(e, {
                        settingsKey: "nav.itemColorSettings",
                        defaultColor: (0, Ge.getNavDefaultItemColor)(e)
                    })), Je({
                        usedColor: n,
                        editOpacity: t.supportsNavbarTranslucency(),
                        rawColor: a.usedColor,
                        width: 200,
                        needThemColors: !0
                    }, a)
                })),
                ot = function(e) {
                    return Qe((function(t) {
                        var n = (0, Ge.getNavHighlightObj)(t),
                            a = Je({}, $e);
                        if (Q.getEnableTextColorFix()) {
                            var o = we.NAV_SETTINGS_FIELD_MAPPING[e];
                            a = (0, Ge.getColorPlateProps)(t, {
                                settingsKey: "nav.".concat(o),
                                defaultColor: "#ffffff"
                            })
                        }
                        return Je({
                            usedColor: n[e],
                            width: 200,
                            needThemColors: !0
                        }, a)
                    }))
                },
                it = Qe((function(e) {
                    var t = (0, Ge.getNavBorderColor)(e),
                        n = Je({}, $e);
                    return Q.getEnableTextColorFix() && (n = (0, Ge.getColorPlateProps)(e, {
                        settingsKey: "nav.border.borderColorSettings",
                        defaultColor: "#ffffff"
                    })), Je({
                        usedColor: t,
                        width: 200,
                        needThemColors: !0
                    }, n)
                })),
                lt = Qe((function(e) {
                    return {
                        usedColor: (0, Ye.getUsedButtonBackgroundColor)(e),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                rt = Qe((function(e) {
                    var t = (0, Ye.getUsedButtonBackgroundColor)(e),
                        n = Je({}, $e);
                    return Q.getEnableTextColorFix() && (n = (0, Ge.getColorPlateProps)(e, {
                        settingsKey: "button.backgroundSettings"
                    })), Je({
                        usedColor: t,
                        width: 200,
                        needThemColors: !0
                    }, n)
                })),
                st = Qe((function(e) {
                    return {
                        usedColor: (0, Ye.getUsedTextHighlightColor)(e),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                ut = function(e) {
                    return Qe((function(t) {
                        var n = "".concat(e, "Color"),
                            a = (0, Ye.getUsedTextColors)(t)[n],
                            o = Je({}, $e);
                        return Q.getEnableTextColorFix() && (o = (0, Ge.getColorPlateProps)(t, {
                            settingsKey: "section.".concat(e)
                        })), Je({
                            usedColor: a,
                            width: 200,
                            needThemColors: !0
                        }, o)
                    }))
                };
            et(He), et(qe), at(He), at(qe), it(He), it(qe), ot("blockTextColor")(He), ot("textColor")(He), ot("blockBackgroundColor")(He), ot("blockTextColor")(qe), ot("textColor")(qe), ot("blockBackgroundColor")(qe), tt(He), Xe = tt(Xe), rt(He), lt(qe), st(He), st(qe), ut("base")(He), ut("base")(qe), ut("title")(He), ut("title")(qe), ut("subtitle")(He), ut("subtitle")(qe), ut("itemTitle")(He), ut("itemTitle")(qe), ut("itemSubtitle")(He), ut("itemSubtitle")(qe), nt((function(e) {
                var t, n = e.backgroundColor,
                    a = e.itemColor,
                    o = e.isTransparent ? (0, S.Z)("span", {
                        className: "transparent-icon"
                    }, void 0, (0, S.Z)("img", {
                        src: (0, je.cdnAssetPath)("".concat(ze.U.TRANSPARENT_ICON))
                    })) : (0, S.Z)("div", {
                        className: "color-icon",
                        style: {
                            background: F()(t = "linear-gradient(120deg,  ".concat(a, " 40%, ")).call(t, n, " 0)"),
                            width: 32,
                            height: 10,
                            borderRadius: 100
                        }
                    });
                return (0, S.Z)("div", {
                    className: "colors-icon-wrapper"
                }, void 0, o)
            }));
            var ct = n(792656),
                dt = (n(209653), n(694473)),
                ft = n.n(dt);

            function mt(e, t) {
                var n = r()(e);
                if (u()) {
                    var a = u()(e);
                    t && (a = d()(a).call(a, (function(t) {
                        return m()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) p()(n = mt(Object(a), !0)).call(n, (function(t) {
                        (0, x.Z)(e, t, a[t])
                    }));
                    else if (v()) y()(e, v()(a));
                    else {
                        var o;
                        p()(o = mt(Object(a))).call(o, (function(t) {
                            _()(e, t, m()(a, t))
                        }))
                    }
                }
                return e
            }
            var pt = w.useState,
                ht = w.useCallback,
                vt = w.useEffect,
                bt = function(e) {
                    var t = e.currentValue,
                        n = e.backgroundColor,
                        a = e.translatedLabel,
                        o = e.handleChangeSelect,
                        i = e.getPopupContainer,
                        l = e.backgroundSettings,
                        r = e.handleUpdate,
                        s = e.settingsKey,
                        u = pt(!1),
                        c = (0, E.Z)(u, 2),
                        d = c[0],
                        f = c[1],
                        m = pt({}),
                        g = (0, E.Z)(m, 2),
                        p = g[0],
                        h = g[1],
                        v = B().getCustomColors(),
                        b = (0, ct.getDefaultColor)(n),
                        y = t || b,
                        C = ht((function(e, t, n) {
                            o(e), s && n && r && r(s, gt(gt({}, (null == l ? void 0 : l.toJS()) || {}), {}, {
                                preIndex: t,
                                type: n
                            }))
                        }), [l, o, r, s]),
                        _ = ht((function(e) {
                            s && r && r(s, gt(gt({}, (null == l ? void 0 : l.toJS()) || {}), e))
                        }), [r, s, l]);
                    vt((function() {
                        if (s) {
                            var e = B().getThemePreColors();
                            h(function(e) {
                                var t = e.backgroundSettings,
                                    n = e.themePreColors,
                                    a = e.usedColor,
                                    o = e.customColors,
                                    i = e.onSettingsChange,
                                    l = e.onColorChange;
                                if (Q.getEnableTextColorFix()) {
                                    var r = te.isImmutable(t),
                                        s = r ? null == t ? void 0 : t.get("default") : null == t ? void 0 : t.default,
                                        u = r ? null == t ? void 0 : t.get("type") : null == t ? void 0 : t.type,
                                        c = r ? null == t ? void 0 : t.get("preIndex") : null == t ? void 0 : t.preIndex,
                                        d = r ? null == t ? void 0 : t.get("type") : null == t ? void 0 : t.type,
                                        f = a,
                                        m = o.highlight1,
                                        g = o.highlight2,
                                        p = !m && !g;
                                    if (r ? null == t || !t.size : !t) {
                                        var h, v;
                                        if (s = k.getThemeButtonSettings().backgroundColor || s, (null === (h = f) || void 0 === h ? void 0 : h.toLocaleLowerCase()) === (null === (v = s) || void 0 === v ? void 0 : v.toLocaleLowerCase())) u = we.TEXT_COLOR_TYPE.DEFAULT;
                                        else {
                                            var b = null == n ? void 0 : ft()(n).call(n, (function(e) {
                                                var t, n;
                                                return (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === (null === (n = f) || void 0 === n ? void 0 : n.toLocaleLowerCase())
                                            }));
                                            b ? (u = we.TEXT_COLOR_TYPE.PRE_COLOR, c = b.key) : u = we.TEXT_COLOR_TYPE.CUSTOM
                                        }
                                        i && i({
                                            default: s,
                                            preIndex: c,
                                            type: u
                                        })
                                    }
                                    if (d === we.TEXT_COLOR_TYPE.PRE_COLOR && c) {
                                        var y, C, _ = null == n || null === (y = ft()(n).call(n, (function(e) {
                                            return e.key === Number(c)
                                        }))) || void 0 === y ? void 0 : y.value;
                                        (null == _ ? void 0 : _.toLocaleLowerCase()) !== (null === (C = f) || void 0 === C ? void 0 : C.toLocaleLowerCase()) && (f = _, l && l(f))
                                    }
                                    return {
                                        selectedType: p ? we.TEXT_COLOR_TYPE.CUSTOM : u,
                                        useDefaultColor: s,
                                        preIndex: c,
                                        hideUseDefault: p,
                                        usedColor: f
                                    }
                                }
                                return {}
                            }({
                                backgroundSettings: null == l ? void 0 : l.toJS(),
                                usedColor: y,
                                themePreColors: e,
                                customColors: v,
                                isSystem: !1,
                                onSettingsChange: _,
                                onColorChange: C
                            }))
                        }
                    }), [l, s, d]), vt((function() {
                        if (s) {
                            var e = null == l ? void 0 : l.get("default"),
                                t = null == l ? void 0 : l.get("type");
                            e !== b && _({
                                default: b
                            }), t === we.TEXT_COLOR_TYPE.DEFAULT && C(b)
                        }
                    }), [b]);
                    var x = w.createElement(Ze, (0, N.Z)({
                        needThemColors: !0,
                        customColors: v,
                        specifiedDefaultColor: b,
                        value: y,
                        usedColor: y
                    }, p, {
                        onChange: C
                    }));
                    return (0, S.Z)(T.Z, {
                        placement: "left",
                        content: x,
                        getPopupContainer: i,
                        onVisibleChange: function() {
                            return f(!d)
                        }
                    }, void 0, (0, S.Z)("div", {
                        className: "s-layout-menu-field color-picker layout-editor-is-new-design"
                    }, void 0, (0, S.Z)("div", {
                        className: "s-layout-menu-label"
                    }, void 0, a), (0, S.Z)(qe, {
                        usedColor: t || b,
                        bgType: "light"
                    })))
                }
        },
        413138: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, o, i = n(863056),
                l = n(2991),
                r = n.n(l),
                s = n(20455),
                u = n.n(s),
                c = n(366757),
                d = n(294184),
                f = n.n(d),
                m = n(834243),
                g = n(234584),
                p = n(353147),
                h = c.useCallback,
                v = {
                    TOP: "top",
                    MIDDLE: "middle",
                    BOTTOM: "bottom"
                },
                b = function(e) {
                    var t = e.type,
                        n = e.currentType,
                        l = e.chooseVerticalAlignmentType;
                    return (0, i.Z)("div", {
                        className: f()("vertical-alignment-item vertical-alignment-".concat(t), {
                            active: n === t
                        }),
                        onClick: function() {
                            return l(t)
                        }
                    }, void 0, a || (a = (0, i.Z)("span", {
                        className: "vertical-align-line"
                    })), o || (o = (0, i.Z)("span", {
                        className: "vertical-align-line"
                    })))
                };
            t.default = function(e) {
                var t, n = e.isS6,
                    a = e.sectionName,
                    o = e.handleVerticalAlignmentType,
                    l = e.currentType,
                    s = void 0 === l ? v.MIDDLE : l,
                    c = h((function(e) {
                        var t;
                        o(e);
                        var i = n ? "".concat(a, "-S6") : a;
                        null === (t = window.mixpanel) || void 0 === t || t.track("Editor - Layout - Content Alignment", {
                            user_id: m.getId(),
                            site_id: g.getId(),
                            section_name: i
                        })
                    }), [n, a]);
                return (0, i.Z)("div", {
                    className: "vertical-alignment-layout-container"
                }, void 0, (0, i.Z)("div", {
                    className: "vertical-alignment-label"
                }, void 0, p("Editor|Content Align")), (0, i.Z)("div", {
                    className: "vertical-alignment-layout-wrap"
                }, void 0, r()(t = u()(v)).call(t, (function(e) {
                    return (0, i.Z)(b, {
                        type: e,
                        currentType: s,
                        chooseVerticalAlignmentType: c
                    }, e)
                }))))
            }
        },
        681987: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getShowLine: function() {
                    return r
                }
            });
            var a = n(678580),
                o = n.n(a),
                i = ["fresh"],
                l = ["title", "slider", "hero"];

            function r(e, t) {
                return o()(i).call(i, e) && !o()(l).call(l, t)
            }
        },
        978307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACCORDION_COLUMNS: function() {
                    return a
                },
                ACCORDION_LAYOUT_KEYS: function() {
                    return o
                },
                ACCORDION_LAYOUTS: function() {
                    return d
                },
                LAYOUT_CONTROL_SETTINGS: function() {
                    return f
                },
                NEUTRAL_COLOR: function() {
                    return m
                },
                NEUTRAL_COLOR_KEY: function() {
                    return g
                },
                DEFAULT_BORDER_COLOR: function() {
                    return p
                },
                DARK_BORDER_COLOR: function() {
                    return h
                },
                DEFAULT_MARGIN: function() {
                    return v
                },
                DARK_CLASSNAME: function() {
                    return b
                },
                MAXIMUM_NUM: function() {
                    return y
                },
                MINIMUM_NUM: function() {
                    return C
                },
                NEUTRAL_COLOR_CONFIG: function() {
                    return _
                }
            });
            var a, o, i = n(844845),
                l = n(20455),
                r = n.n(l),
                s = n(977766),
                u = n.n(s),
                c = n(353147);
            ! function(e) {
                e.ONE = "one", e.TWO = "two"
            }(a || (a = {})),
            function(e) {
                e.BORDER_LAYOUT = "A", e.SEPARATOR_LAYOUT = "B", e.BACKGROUND_LAYOUT = "C"
            }(o || (o = {}));
            var d = r()(o),
                f = [{
                    key: "layout",
                    lable: function() {
                        return ""
                    },
                    component: "select",
                    children: [{
                        value: o.BORDER_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(c("Editor|Layout"), " ")).call(e, o.BORDER_LAYOUT)
                        }
                    }, {
                        value: o.SEPARATOR_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(c("Editor|Layout"), " ")).call(e, o.SEPARATOR_LAYOUT)
                        }
                    }, {
                        value: o.BACKGROUND_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(c("Editor|Layout"), " ")).call(e, o.BACKGROUND_LAYOUT)
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return c("Editor|Columns")
                    },
                    component: "button",
                    children: [{
                        value: a.ONE,
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: a.TWO,
                        label: function() {
                            return "2"
                        }
                    }]
                }],
                m = "#B1B4B9",
                g = "neutral",
                p = "#E2E4E7",
                h = "#494D56",
                v = "20px",
                b = "dark",
                y = 100,
                C = 2,
                _ = (0, i.Z)({
                    default: {
                        textColor: h,
                        arrowColor: m
                    }
                }, o.BACKGROUND_LAYOUT, {
                    backgroundColor: "#F4F6F8",
                    textColor: h,
                    arrowColor: m
                })
        },
        653114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FEATURE_LIST_LAYOUTS: function() {
                    return f
                },
                LAYOUT_CONFIG_KEYS: function() {
                    return p
                },
                getGridItemSpacing: function() {
                    return h
                },
                DEFAULT_LAYOUTS_CLASS: function() {
                    return v
                },
                DEFAULT_LAYOUT_NAMES: function() {
                    return b
                },
                DEFAULT_LAYOUT_CONFIG: function() {
                    return y
                },
                availableMobileLayouts: function() {
                    return C
                },
                MOBILE_LAYOUT_SETTINGS: function() {
                    return S
                },
                COLUMNS_VALUE: function() {
                    return N
                },
                LAYOUT_CONTROL_SETTINGS: function() {
                    return x
                },
                NEW_LAYOUT_CONTROL_SETTINGS: function() {
                    return E
                },
                NEW_LAYOUT_SUB_CONTROL_SETTINGS: function() {
                    return w
                }
            });
            var a, o, i = n(977766),
                l = n.n(i),
                r = n(678580),
                s = n.n(r),
                u = n(589499),
                c = n(183123),
                d = n(353147),
                f = ["A", "B", "C", "D"],
                m = {
                    little: {
                        s: 12.5,
                        m: 20,
                        l: 27.5
                    },
                    glut: {
                        s: 8,
                        m: 11,
                        l: 14
                    }
                },
                g = ["card_radius", "card_padding", "border_thickness"],
                p = {
                    list: l()(a = ["mediaSize", "mediaPosition", "vertical_alignment"]).call(a, g),
                    grid: l()(o = ["grid_media_position", "horizontal_alignment"]).call(o, g)
                },
                h = function(e) {
                    var t, n = e.get("structure"),
                        a = e.get("columns"),
                        o = e.get("spacing"),
                        i = s()(t = ["two", "three", "four"]).call(t, a) ? "little" : "glut";
                    return "grid" === n && "".concat(m[i][o.toLowerCase()], "px") || null
                },
                v = {
                    repeatableClass: "",
                    itemClass: "",
                    innerItemClass: "",
                    mediaClass: "",
                    singleMediaClass: "",
                    textClass: "",
                    singleTextClass: "",
                    textInnerClass: "",
                    buttonClass: ""
                },
                b = {
                    feature1: function() {
                        return d("Sections|Feature 1")
                    },
                    feature2: function() {
                        return d("Sections|Feature 2")
                    },
                    feature3: function() {
                        return d("Sections|Feature 3")
                    },
                    button: function() {
                        return d("Sections|Read More")
                    }
                },
                y = {
                    A: {
                        layout: "A",
                        structure: "grid",
                        showButton: !0
                    },
                    B: {
                        layout: "B",
                        structure: "grid",
                        showButton: !1
                    },
                    C: {
                        layout: "C",
                        structure: "list",
                        mediaPosition: "left"
                    },
                    D: {
                        layout: "D",
                        structure: "list",
                        mediaPosition: "alternating"
                    }
                },
                C = ["grid"],
                _ = "automatic",
                S = [{
                    key: "columns_mobile",
                    label: function() {
                        return d("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: _,
                        label: function() {
                            return d("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: C
                        }]
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        },
                        visible: [{
                            type: "structure",
                            value: C
                        }]
                    }],
                    defaultValue: _
                }],
                N = {
                    TWO: "two",
                    THREE: "three",
                    FOUR: "four",
                    FIVE: "five",
                    SIX: "six"
                },
                x = [{
                    key: "structure",
                    label: function() {
                        return d("Editor|Structure")
                    },
                    component: "select",
                    children: [{
                        value: "list",
                        label: function() {
                            return d("Editor|List")
                        }
                    }, {
                        value: "grid",
                        label: function() {
                            return d("Editor|Grid")
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return d("Editor|Columns")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: N.TWO,
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: N.THREE,
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: N.FOUR,
                        label: function() {
                            return "4"
                        }
                    }, {
                        value: N.FIVE,
                        label: function() {
                            return "5"
                        }
                    }, {
                        value: N.SIX,
                        label: function() {
                            return "6"
                        }
                    }]
                }, {
                    key: "mediaSize",
                    label: function() {
                        return d("Editor|Media Size")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "xs",
                        label: function() {
                            return d("Editor|XS")
                        }
                    }, {
                        value: "s",
                        label: function() {
                            return d("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return d("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return d("Editor|L")
                        }
                    }]
                }, {
                    key: "mediaPosition",
                    label: function() {
                        return d("Editor|Media Position")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return d("Editor|Left")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return d("Editor|Right")
                        }
                    }, {
                        value: "alternating",
                        label: function() {
                            return d("Editor|Alternating")
                        }
                    }]
                }, {
                    key: "vertical_alignment",
                    label: function() {
                        return d("Editor|Content Align")
                    },
                    component: "verticalAlignment",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }]
                }, {
                    key: "showButton",
                    label: function() {
                        return d("Editor|Show Buttons")
                    },
                    component: "checkbox"
                }],
                E = [{
                    key: "structure",
                    label: function() {
                        return d("Editor|Structure")
                    },
                    component: "bigSelect",
                    children: [{
                        value: "grid",
                        icon: {
                            default: (0, u.cdnAssetPath)("/images/feature-list/grid-light.svg"),
                            selected: (0, u.cdnAssetPath)("/images/feature-list/grid-dark.svg")
                        },
                        aiIcon: {
                            default: (0, u.cdnAssetPath)("/images/editor/ai-icon/grid-dark.svg"),
                            selected: (0, u.cdnAssetPath)("/images/editor/ai-icon/grid-light.svg")
                        },
                        label: function() {
                            return d("Editor|Grid")
                        }
                    }, {
                        value: "list",
                        icon: {
                            default: (0, u.cdnAssetPath)("/images/feature-list/list-light.svg"),
                            selected: (0, u.cdnAssetPath)("/images/feature-list/list-dark.svg")
                        },
                        aiIcon: {
                            default: (0, u.cdnAssetPath)("/images/editor/ai-icon/list-dark.svg"),
                            selected: (0, u.cdnAssetPath)("/images/editor/ai-icon/list-light.svg")
                        },
                        label: function() {
                            return d("Editor|List")
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return d("Editor|Columns")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: "three",
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: "four",
                        label: function() {
                            return "4"
                        }
                    }, {
                        value: "five",
                        label: function() {
                            return "5"
                        }
                    }, {
                        value: "six",
                        label: function() {
                            return "6"
                        }
                    }]
                }, {
                    key: "mediaSize",
                    label: function() {
                        return d("Editor|Media Size")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "xs",
                        label: function() {
                            return d("Editor|XS")
                        }
                    }, {
                        value: "s",
                        label: function() {
                            return d("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return d("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return d("Editor|L")
                        }
                    }]
                }, {
                    key: "mediaPosition",
                    label: function() {
                        return d("Editor|Media Position")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return d("Editor|Left")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return d("Editor|Right")
                        }
                    }, {
                        value: "alternating",
                        label: function() {
                            return d("Editor|Alternating")
                        }
                    }]
                }, {
                    key: "vertical_alignment",
                    label: function() {
                        return d("Editor|Content Align")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "top",
                        label: function() {
                            return d("Editor|Top")
                        }
                    }, {
                        value: "middle",
                        label: function() {
                            return d("Editor|Middle")
                        }
                    }, {
                        value: "bottom",
                        label: function() {
                            return d("Editor|Bottom")
                        }
                    }]
                }, c.getCanUseSectionTextAlignNewVersion() ? {
                    key: "horizontal_alignment",
                    label: function() {
                        return d("Editor|Text Align")
                    },
                    component: "textHorizontalAlignment",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }]
                } : {
                    key: "horizontal_alignment",
                    label: function() {
                        return d("Editor|Content Align")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return d("Editor|Left")
                        }
                    }, {
                        value: "center",
                        label: function() {
                            return d("Editor|Center")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return d("Editor|Right")
                        }
                    }]
                }, {
                    key: "spacing",
                    label: function() {
                        return d("Editor|Spacing")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "s",
                        label: function() {
                            return d("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return d("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return d("Editor|L")
                        }
                    }]
                }, {
                    key: "grid_media_position",
                    label: function() {
                        return d("Editor|Media Position")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "top",
                        label: function() {
                            return d("Editor|Top")
                        }
                    }, {
                        value: "bottom",
                        label: function() {
                            return d("Editor|Bottom")
                        }
                    }]
                }, {
                    key: "showButton",
                    label: function() {
                        return d("Editor|Buttons")
                    },
                    component: "switch",
                    children: [{
                        value: !0,
                        label: function() {
                            return d("Editor|On")
                        }
                    }, {
                        value: !1,
                        label: function() {
                            return d("Editor|Off")
                        }
                    }]
                }],
                w = [
                    [{
                        key: "card",
                        label: function() {
                            return d("Editor|Card")
                        },
                        component: "switch",
                        needTrack: !0,
                        isGroup: !0
                    }, {
                        key: "card_radius",
                        label: function() {
                            return d("Editor|Radius")
                        },
                        component: "select",
                        visible: [{
                            type: "card",
                            value: [!0]
                        }],
                        isSubItem: !0,
                        children: [{
                            value: "square",
                            label: function() {
                                return d("Editor|Square")
                            }
                        }, {
                            value: "small",
                            label: function() {
                                return d("Editor|Small")
                            }
                        }, {
                            value: "medium",
                            label: function() {
                                return d("Editor|Medium")
                            }
                        }, {
                            value: "large",
                            label: function() {
                                return d("Editor|Large")
                            }
                        }]
                    }, {
                        key: "card_padding",
                        label: function() {
                            return d("Editor|Padding")
                        },
                        component: "select",
                        visible: [{
                            type: "card",
                            value: [!0]
                        }],
                        isSubItem: !0,
                        children: [{
                            value: "small",
                            label: function() {
                                return d("Editor|Small")
                            }
                        }, {
                            value: "medium",
                            label: function() {
                                return d("Editor|Medium")
                            }
                        }, {
                            value: "large",
                            label: function() {
                                return d("Editor|Large")
                            }
                        }]
                    }, {
                        key: "card_color",
                        label: function() {
                            return d("Editor|Color")
                        },
                        component: "colorPicker",
                        visible: [{
                            type: "card",
                            value: [!0]
                        }],
                        isSubItem: !0
                    }],
                    [{
                        key: "border",
                        label: function() {
                            return d("Editor|Border")
                        },
                        component: "switch",
                        needTrack: !0,
                        isGroup: !0
                    }, {
                        key: "border_thickness",
                        label: function() {
                            return d("Editor|Thickness")
                        },
                        component: "select",
                        visible: [{
                            type: "border",
                            value: [!0]
                        }],
                        isSubItem: !0,
                        children: [{
                            value: "thin",
                            label: function() {
                                return d("Editor|Thin")
                            }
                        }, {
                            value: "small",
                            label: function() {
                                return d("Editor|Small")
                            }
                        }, {
                            value: "medium",
                            label: function() {
                                return d("Editor|Medium")
                            }
                        }]
                    }, {
                        key: "border_color",
                        label: function() {
                            return d("Editor|Color")
                        },
                        component: "colorPicker",
                        visible: [{
                            type: "border",
                            value: [!0]
                        }],
                        isSubItem: !0
                    }]
                ]
        },
        206814: function(e, t, n) {
            "use strict";
            n.d(t, {
                sB: function() {
                    return g
                },
                a: function() {
                    return p
                },
                Xc: function() {
                    return h
                }
            });
            var a = n(333938),
                o = n(563109),
                i = n.n(o),
                l = (n(974916), n(864765), n(678580)),
                r = n.n(l),
                s = n(977766),
                u = n.n(s),
                c = n(359340),
                d = n.n(c),
                f = n(359011),
                m = n(965239),
                g = function() {
                    var e = (0, a.Z)(i().mark((function e(t, n, a) {
                        var o, l, s, c, d, m, g, p;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return m = r()(o = location.search).call(o, "isAiSite=true") && !r()(l = location.search).call(l, "fullInit=true"), e.next = 3, (0, f.fetchJSON)(u()(s = u()(c = "/r/v1/sites/".concat(t, "/booking/event_types")).call(c, n ? u()(d = "?section_id=".concat(n, "&categoryId=")).call(d, a || "all") : "")).call(s, m ? "&isAiSiteBuilderPreview=true" : ""), {
                                        method: "GET"
                                    });
                                case 3:
                                    return g = e.sent, e.next = 6, g.json();
                                case 6:
                                    return p = e.sent, e.abrupt("return", p.data);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, a.Z)(i().mark((function e(t, n, a) {
                        var o, l, r, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, f.fetchJSON)(u()(o = u()(l = "/r/v1/sites/".concat(t, "/booking/event_types/")).call(l, n, "/available_schedules?date=")).call(o, a), {
                                        method: "GET"
                                    });
                                case 2:
                                    return r = e.sent, e.next = 5, r.json();
                                case 5:
                                    return s = e.sent, e.abrupt("return", s.data);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, a.Z)(i().mark((function e(t, n) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, f.fetchJSONWithErrorCode)("/r/v1/sites/".concat(t, "/booking/events"), {
                                        method: "POST",
                                        body: d()(n)
                                    }).then(m.parseJSON).catch((function(e) {
                                        return (0, f.parseError)(e)
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        15642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCRONewSelectorSectionsDataWithGroup: function() {
                    return q
                },
                getCROSelectorGroupsSections: function() {
                    return J
                },
                getCanUseAiSectionSelector: function() {
                    return Q
                },
                getIsCRONewSectionSelector: function() {
                    return X
                },
                getIsDynamicSection: function() {
                    return $
                },
                getScaledHeight: function() {
                    return ee
                },
                replaceSectionBgColorByThemeColor: function() {
                    return K
                },
                replaceSectionText: function() {
                    return W
                }
            });
            var a, o = n(686902),
                i = n.n(o),
                l = n(14310),
                r = n.n(l),
                s = n(834074),
                u = n.n(s),
                c = n(239649),
                d = n.n(c),
                f = n(820368),
                m = n.n(f),
                g = n(663978),
                p = n.n(g),
                h = n(844845),
                v = (n(974916), n(323123), n(841511)),
                b = n.n(v),
                y = n(778914),
                C = n.n(y),
                _ = n(62462),
                S = n.n(_),
                N = n(497093),
                x = n.n(N),
                E = n(492762),
                w = n.n(E),
                T = n(2991),
                k = n.n(T),
                B = n(620116),
                L = n.n(B),
                I = n(981643),
                O = n.n(I),
                P = n(977766),
                M = n.n(P),
                A = n(496486),
                D = n(353147);
            ! function(e) {
                e.BLANK_SECTION = "blankSection", e.COMMERCE = "commerce", e.BLOG_AND_PORTFOLIO = "blogAndPortfolio", e.IMAGE_AND_VIDEO = "imageAndVideo", e.TEXT = "text", e.CTA = "cta", e.FEATURE_LIST = "featureList", e.GALLERY = "gallery", e.CONTACT_AND_FORMS = "contactAndForms", e.ADVANCED = "advanced"
            }(a || (a = {})), a.COMMERCE, a.BLOG_AND_PORTFOLIO, a.IMAGE_AND_VIDEO, a.TEXT, a.CTA, a.FEATURE_LIST, a.GALLERY, a.CONTACT_AND_FORMS, a.ADVANCED, a.BLANK_SECTION;
            var R = {
                    key: a.BLOG_AND_PORTFOLIO,
                    title: function() {
                        return D("Sections|Portfolio")
                    },
                    templateIds: ["portfolio"],
                    templates: [],
                    categoryId: "",
                    eventName: "Portfolio",
                    showTooltip: !0,
                    showDescription: !0,
                    description: function() {
                        return ""
                    },
                    tooltip: function() {
                        return D("Editor|This section does not include online payments. If you want to take payments, please use the Store section instead.")
                    }
                },
                U = [{
                    key: a.COMMERCE,
                    title: function() {
                        return D("Sections|Store")
                    },
                    templateIds: ["ecommerce"],
                    templates: [],
                    eventName: "Store",
                    showTooltip: !1,
                    showDescription: !0,
                    description: function() {
                        return D("Sections|Sell products right on your site! Manage orders, payments, and more.")
                    }
                }, {
                    key: a.COMMERCE,
                    title: function() {
                        return D("Editor|Booking")
                    },
                    templateIds: ["booking"],
                    templates: [],
                    eventName: "Booking",
                    showTooltip: !1,
                    showDescription: !0,
                    description: function() {
                        return D("Sections|Schedule your service, training, concerts, meetings, or any event so visitors can book appointments!")
                    }
                }, {
                    key: a.BLOG_AND_PORTFOLIO,
                    title: function() {
                        return D("Sections|Blog")
                    },
                    templateIds: ["blog"],
                    templates: [],
                    eventName: "Blog",
                    showTooltip: !1,
                    showDescription: !0,
                    description: function() {
                        return D("Sections|Write beautiful blog posts that open in a new page.")
                    }
                }, {
                    key: a.IMAGE_AND_VIDEO,
                    title: function() {
                        return D("Editor|Big Media")
                    },
                    templateIds: ["bigMedia"],
                    templates: [],
                    eventName: "Big Media",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Section|Show a big video or image, or add many of them.")
                    }
                }, {
                    key: a.IMAGE_AND_VIDEO,
                    title: function() {
                        return D("Editor|Grid")
                    },
                    templateIds: ["grid", "new_grid"],
                    templates: [],
                    eventName: "Grid",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Section|Panels of images & text. Customize layout, size, and spacing. A very visual way to show categories, testimonials, or features.")
                    }
                }, {
                    key: a.IMAGE_AND_VIDEO,
                    title: function() {
                        return D("Section|Banner Slider")
                    },
                    templateIds: ["banner"],
                    templates: [],
                    eventName: "Banner Slider",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Sections|Swipeable slider with text, button, and image/video. Background image optional.")
                    }
                }, {
                    key: a.TEXT,
                    title: function() {
                        return D("Editor|Text")
                    },
                    templateIds: ["title", "text"],
                    templates: [],
                    eventName: {
                        title: function() {
                            return "Title"
                        },
                        text: "Plain Text"
                    },
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Section|Paragraphs of text with titles.")
                    }
                }, {
                    key: a.TEXT,
                    title: function() {
                        return D("Section|Infographic")
                    },
                    templateIds: ["info", "process"],
                    templates: [],
                    eventName: "Infographic",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Section|Show boxes of steps, stats, tidbits and a numbered list of steps. Explain how your service works!")
                    }
                }, {
                    key: a.TEXT,
                    title: function() {
                        return D("Sections|Accordion / FAQ")
                    },
                    templateIds: ["accordion"],
                    templates: [],
                    eventName: "Accordion / FAQ",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Sections|Show text content in an accordion format. Each item can be expanded to show the full text.")
                    }
                }, {
                    key: a.CTA,
                    title: function() {
                        return D("Section|Call to Action")
                    },
                    templateIds: ["hero", "cta", "slider"],
                    templates: [],
                    eventName: "Call to Action",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
                    }
                }, {
                    key: a.FEATURE_LIST,
                    title: function() {
                        return D("Editor|Feature List")
                    },
                    templateIds: ["featureList"],
                    templates: [],
                    eventName: "Feature List",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Sections|List your features, projects, team members, or anything!")
                    }
                }, {
                    key: a.GALLERY,
                    title: function() {
                        return D("Editor|Gallery")
                    },
                    templateIds: ["gallery"],
                    templates: [],
                    eventName: "Gallery",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Editor|Display a set of images/videos. Great for photos and portfolios.")
                    }
                }, {
                    key: a.CONTACT_AND_FORMS,
                    title: function() {
                        return D("Section|Contact & Forms")
                    },
                    templateIds: ["custom_form", "signup_form", "contact_form", "icons"],
                    templates: [],
                    eventName: "Contact & Forms",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Section|Let viewers drop their name, email, and message. Add a fully customizable form with any fields you want.")
                    }
                }, {
                    key: a.ADVANCED,
                    title: function() {
                        return D("Sections|Pricing Table")
                    },
                    templateIds: ["pricing"],
                    templates: [],
                    eventName: "Pricing Table",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Sections|Show your plans, prices, and benefits in an elegant grid, with clear calls-to-action.")
                    }
                }, {
                    key: a.ADVANCED,
                    title: function() {
                        return D("Section|Embed & HTML")
                    },
                    templateIds: ["html"],
                    templates: [],
                    eventName: "Embed & HTML",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
                    }
                }, {
                    key: a.ADVANCED,
                    title: function() {
                        return D("Sections|Social Feed")
                    },
                    templateIds: ["social_feed"],
                    templates: [],
                    eventName: "Social Feed",
                    removeScrollTop: !0,
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Sections|Display your latest social media posts beautifully.")
                    }
                }, {
                    key: a.BLANK_SECTION,
                    title: function() {
                        return D("Sections|Make Your Own")
                    },
                    templateIds: ["block", "s6_common_section"],
                    templates: [],
                    eventName: "Make Your Own",
                    showTooltip: !0,
                    showDescription: !1,
                    description: function() {
                        return D("Editor|Want more control over layouts? Arrange components yourself!")
                    }
                }, {
                    key: a.BLANK_SECTION,
                    title: function() {
                        return D("Section|Blank")
                    },
                    templateIds: ["blank"],
                    templates: [],
                    eventName: "Blank",
                    showTooltip: !0,
                    showDescription: !1,
                    extraClassName: "cro-thumbnail-blank-section",
                    description: function() {
                        return D("Editor|Want more control over layouts? Arrange components yourself!")
                    }
                }],
                F = n(792656),
                Z = n.n(F),
                H = (n(183123), n(234584)),
                V = n(353147);

            function z(e, t) {
                var n = i()(e);
                if (r()) {
                    var a = r()(e);
                    t && (a = L()(a).call(a, (function(t) {
                        return u()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) C()(n = z(Object(a), !0)).call(n, (function(t) {
                        (0, h.Z)(e, t, a[t])
                    }));
                    else if (d()) m()(e, d()(a));
                    else {
                        var o;
                        C()(o = z(Object(a))).call(o, (function(t) {
                            p()(e, t, u()(a, t))
                        }))
                    }
                }
                return e
            }
            var Y = ["html", "social_feed", "block", "s6_common_section", "blank"],
                j = {
                    accordion: [{
                        path: "content.components.repeatable1.list.1.components.text1.value",
                        text: function() {
                            return V("Sections|What is SXL?")
                        }
                    }, {
                        path: "content.components.repeatable1.list.1.components.text2.value",
                        text: function() {
                            return V("Sections|SXL is a store & site builder that allows anyone to create a beautiful website and start selling products within minutes.")
                        }
                    }, {
                        path: "content.components.repeatable1.list.2.components.text2.value",
                        text: function() {
                            return V("Sections|With SXL, it's incredibly easy to create a website. Just pick a template, add sections, change the content, and click Publish. Thousands of sites have already been created -- yours is next!")
                        }
                    }]
                },
                W = function(e) {
                    var t = j[e.sectionId];
                    return t ? (A.forEach(t, (function(t) {
                        var n = t.path,
                            a = t.text,
                            o = "function" == typeof a && a();
                        A.set(e, n, o)
                    })), e) : e
                },
                K = function(e) {
                    var t = A.get(e, "content.components.background1.backgroundColor"),
                        n = null == t ? void 0 : t.type;
                    if ("highlight1" === n || "highlight2" === n) {
                        var a = Z().getPresetColorByThemeColor(n, t.themeColorRangeIndex);
                        A.set(e, "content.components.background1.backgroundColor.value", a)
                    }
                    var o = A.get(e, "content.components.repeatable1.list", []);
                    return b()(o) && C()(o).call(o, (function(t, n) {
                        var a = A.get(t, "components.background1.backgroundColor"),
                            o = null == a ? void 0 : a.type;
                        if ("highlight1" === o || "highlight2" === o) {
                            var i = Z().getPresetColorByThemeColor(o, a.themeColorRangeIndex);
                            A.set(e, "content.components.repeatable1.list.".concat(n, ".components.background1.backgroundColor.value"), i)
                        }
                    })), e
                },
                J = function(e) {
                    var t, n = S()(U).call(U, (function(e) {
                        var t = e.key;
                        return a.BLOG_AND_PORTFOLIO === t
                    })) + 1;
                    return C()(t = x()(e).call(e)).call(t, (function(e) {
                        var t = e || {},
                            a = t.name,
                            o = t.id,
                            i = (null == a ? void 0 : a.split("-")) || [];
                        w()(U).call(U, n, 0, G(G({}, R), {}, {
                            title: i[0] || "",
                            description: i[1] || "",
                            categoryId: o
                        }))
                    })), U
                },
                q = function(e, t) {
                    return k()(t).call(t, (function(t, n) {
                        var a, o = t.key,
                            i = t.templateIds,
                            l = t.eventName,
                            r = t.categoryId,
                            s = k()(a = L()(e).call(e, (function(e) {
                                var t = e.sectionId,
                                    n = e.content.components,
                                    a = t,
                                    o = !0,
                                    l = n.slideSettings.layout_variation;
                                if ("slider" === a && (a = "noForeground" === l ? "banner" : "slider"), "s6_common_section" === a && (a = "blank" === l ? "blank" : "s6_common_section"), "portfolio" === a) {
                                    var s = (n.portfolio1 || {}).category;
                                    o = -1 !== O()(s).call(s, r)
                                }
                                return -1 !== O()(i).call(i, a) && o
                            }))).call(a, (function(e) {
                                var t;
                                return e.group = o, e.masonryLayoutKey = M()(t = "".concat(o)).call(t, n), e.eventName = l[e] || l, e
                            }));
                        return G(G({}, t), {}, {
                            templates: s
                        })
                    }))
                },
                X = function() {
                    return !1
                },
                Q = function() {
                    return X() && H.getEnableAiSectionSelector()
                },
                $ = function(e) {
                    return -1 !== O()(Y).call(Y, e)
                },
                ee = function(e, t) {
                    if ($(t)) return 151;
                    var n = Math.min(300, e);
                    return Math.max(80, n)
                }
        },
        483159: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                siteId: function() {
                    return r
                },
                fetchJSON: function() {
                    return i.fetchJSON
                },
                fetchJSONWithErrorCode: function() {
                    return i.fetchJSONWithErrorCode
                },
                checkStatus: function() {
                    return l.checkStatus
                },
                parseJSON: function() {
                    return l.parseJSON
                },
                Poller: function() {
                    return o
                }
            });
            var a = n(684961),
                o = n(368768),
                i = n(359011),
                l = n(965239),
                r = a("pageMeta.id")
        },
        699287: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(14310),
                o = n.n(a),
                i = n(620116),
                l = n.n(i),
                r = n(834074),
                s = n.n(r),
                u = n(239649),
                c = n.n(u),
                d = n(820368),
                f = n.n(d),
                m = n(663978),
                g = n.n(m),
                p = n(859056),
                h = n(844845),
                v = n(778914),
                b = n.n(v),
                y = n(686902),
                C = n.n(y),
                _ = n(678580),
                S = n.n(_),
                N = n(977766),
                x = n.n(N),
                E = n(366757),
                w = n(223336),
                T = n(318592),
                k = n(234584),
                B = n(442279);

            function L(e, t) {
                var n = C()(e);
                if (o()) {
                    var a = o()(e);
                    t && (a = l()(a).call(a, (function(t) {
                        return s()(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) b()(n = L(Object(a), !0)).call(n, (function(t) {
                        (0, h.Z)(e, t, a[t])
                    }));
                    else if (c()) f()(e, c()(a));
                    else {
                        var o;
                        b()(o = L(Object(a))).call(o, (function(t) {
                            g()(e, t, s()(a, t))
                        }))
                    }
                }
                return e
            }
            var O = E.useRef,
                P = E.useState,
                M = E.useCallback,
                A = E.useEffect,
                D = "unset",
                R = (0, B.createSelector)([function(e) {
                    return e.direction
                }], (function(e) {
                    return (0, T.css)("position:absolute;background:#2e2e2f;height:min-content;", "bottom" === e && "border-radius: 0 0 3px 3px;", ";", "top" === e && "border-radius: 3px 3px 0 0;", ";")
                })),
                U = ["profile"],
                F = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = {};
                    return b()(t = C()(n)).call(t, (function(e) {
                        return a[e] = "".concat(n[e], "px")
                    })), I(I({}, e), a)
                };
            t.default = function(e) {
                var t, n = e.className,
                    a = e.children,
                    o = e.offset,
                    i = void 0 === o ? {} : o,
                    l = e.buttonComponentClassName,
                    r = void 0 === l ? "" : l,
                    s = e.defaultContentHeight,
                    u = void 0 === s ? 200 : s,
                    c = e.buttonComponent,
                    d = e.ref,
                    f = O(null),
                    m = O(null),
                    g = P(u),
                    h = (0, p.Z)(g, 2),
                    v = h[0],
                    b = h[1],
                    y = P(!1),
                    C = (0, p.Z)(y, 2),
                    _ = C[0],
                    N = C[1],
                    T = P({
                        bottom: D,
                        top: D
                    }),
                    B = (0, p.Z)(T, 2),
                    L = B[0],
                    Z = B[1],
                    H = P("bottom"),
                    V = (0, p.Z)(H, 2),
                    z = V[0],
                    G = V[1],
                    Y = function() {
                        return Boolean(w(f.current).parents(".s-mobile-view-editor-wrapper").length)
                    };
                A((function() {
                    Y() && N(!0)
                }), []);
                var j = M((function() {
                        var e, t, n, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (Y()) N(!0);
                        else {
                            var o = (null === (e = m.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                                i = null === (t = f.current) || void 0 === t ? void 0 : t.clientHeight,
                                l = o || v;
                            if (Boolean(o) && o !== v && b(l), a) {
                                var r = (null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect()) || {},
                                    s = r.height,
                                    u = void 0 === s ? 0 : s,
                                    c = 0;
                                c = window.document.documentElement.offsetHeight || window.document.body.offsetHeight;
                                var d = w(f.current).offset(),
                                    g = d.top,
                                    p = c - g - u < l;
                                return Z((function(e) {
                                    return I(I({}, e), {}, {
                                        top: p ? D : i,
                                        bottom: p ? i : D
                                    })
                                })), G(p ? "top" : "bottom"), {
                                    isTopExpand: p
                                }
                            }
                        }
                    }), [v]),
                    W = "";
                return _ || S()(U).call(U, k.getThemeName()) || (W = R({
                    direction: z
                })), E.createElement("div", {
                    ref: d
                }, E.createElement("div", {
                    ref: f,
                    className: r
                }, c(j)), E.createElement("div", {
                    ref: m,
                    className: x()(t = "".concat(W, " ")).call(t, n || ""),
                    style: F(L, i)
                }, a))
            }
        },
        756759: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var a = {
                ANYONE: "anyone",
                BUY_ANY_PRODUCT: "buy_any_product",
                BUY_SPECIFIC_PRODUCT: "buy_specific_product",
                PAID_SUBSCRIPTION: "paid_subscription"
            }
        },
        795663: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return a
                }
            });
            var a = {
                INITIAL_PAYMENT: "initial_payment",
                PAYMENT_RECEIVED: "payment_received",
                CANCELED_BY_PAYMENT_FAILED: "canceled_by_payment_failed",
                CANCELED_BY_USER: "canceled_by_user",
                CANCELED_BY_CUSTOMER: "canceled_by_customer"
            }
        },
        531468: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486),
                i = (n(539232), n(659370), n(389005), n(716505)),
                l = n(436173);
            n(3325), e.exports = function() {
                return a.createElement(i, (e = {
                    className: "s-new-media-section s-section " + this._getSectionType() + "  " + this._getContentAlignmentClass() + " " + this._getPaddingClass() + " " + this._getNewMobileLayoutClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), n = o.assign({}, e, t), e.hasOwnProperty("style") && (n.style = o.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n), null, this.getThemeFeature("disableBackgrounds") || !this.hasBackgroundVideo("background1") || this.props.inSectionSelector ? null : a.createElement(l, o.assign({}, {
                    key: "1771"
                }, this.getBackgroundProps("background1"))), a.createElement("div", {
                    className: "container"
                }, a.createElement("div", {
                    className: "columns sixteen"
                }), "\n    ", this._renderRepeatable("repeatable1"), "\n  "));
                var e, t, n
            }
        },
        277265: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), e.exports = function() {
                return a.createElement("li", {
                    className: this.props.liClassName
                }, this._isS5Theme() ? null : a.createElement("a", {
                    className: "s-external-link-item s-nav-item",
                    href: this._getUrlToShow(),
                    target: this._getTarget(),
                    key: "60"
                }, a.createElement("span", {
                    className: "s-font-body"
                }, this.props.text)), this._isS5Theme() ? a.createElement("div", {
                    className: "s-nav-link-container",
                    key: "254"
                }, a.createElement("a", {
                    className: "s-external-link-item s-nav-item",
                    href: this._getUrlToShow(),
                    target: this._getTarget()
                }, a.createElement("span", {
                    className: "s-font-body"
                }, this.props.text))) : null)
            }
        },
        912955: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-block-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Make Your Own Section!")))), o.createElement("div", {}, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/block-components.png")
                }))))
            }
        },
        99584: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Lessons Learned from Starting Up")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Our Commitment to Service")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|August 30"))))), o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Lessons Learned from Starting Up")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Our Commitment to Service")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|August 30")))))))))
            }
        },
        856230: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486),
                i = (n(357646), n(436173)),
                l = n(990264),
                r = (n(659370), n(389005), n(845939)),
                s = n(716505),
                u = (n(467338), n(718711));
            n(711827), n(3325), e.exports = function() {
                function e(e, t) {
                    var n = o.assign({}, e, t);
                    return e.hasOwnProperty("style") && (n.style = o.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n
                }
                return a.createElement(s, e({
                    className: "s-blog-section s-section " + this._getPaddingClass() + " " + this._getIsNewMobileLayoutClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), a.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? a.createElement(i, o.assign({}, {
                    key: "2380"
                }, this.getBackgroundProps("background1"))) : null, a.createElement("div", {
                    className: "container"
                }, a.createElement("div", {
                    className: "columns no-float sixteen"
                }, a.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                })), a.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, a.createElement(l, e({
                    className: "WaypointLazy",
                    componentsBinding: this._getSectionStyleProps(),
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId(),
                    inSectionSelector: this.props.inSectionSelector,
                    templateDummyData: this.props.templateDummyData,
                    isPreviewMode: this.isPreviewMode(),
                    buttonAlignmentClassName: this.getButtonAlignmentByTitleAndSubtitle()
                }, this.getComponentProps("blog1"))))))
            }
        },
        347347: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog1"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")), o.createElement("div", {
                    className: "blog-post-text"
                }, a("Sections|Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12")), o.createElement("div", {
                    className: "blog-post-text"
                }, a("Sections|Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-3.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|August 30")), o.createElement("div", {
                    className: "blog-post-text"
                }, a("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))))))
            }
        },
        789505: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486),
                i = (n(357646), n(436173)),
                l = n(990264),
                r = (n(659370), n(389005), n(845939)),
                s = n(716505),
                u = (n(467338), n(718711));
            n(711827), n(3325), e.exports = function() {
                function e(e, t) {
                    var n = o.assign({}, e, t);
                    return e.hasOwnProperty("style") && (n.style = o.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n
                }
                return a.createElement(s, e({
                    className: "s-blog-section s-section " + this._getPaddingClass() + " " + this._getIsNewMobileLayoutClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), a.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? a.createElement(i, o.assign({}, {
                    key: "2380"
                }, this.getBackgroundProps("background1"))) : null, a.createElement("div", {
                    className: "container"
                }, a.createElement("div", {
                    className: "columns no-float sixteen"
                }, a.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                })), a.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, a.createElement(l, e({
                    className: "WaypointLazy",
                    componentsBinding: this._getSectionStyleProps(),
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId(),
                    inSectionSelector: this.props.inSectionSelector,
                    templateDummyData: this.props.templateDummyData,
                    isPreviewMode: this.isPreviewMode(),
                    buttonAlignmentClassName: this.getButtonAlignmentByTitleAndSubtitle()
                }, this.getComponentProps("blog1"))))))
            }
        },
        186954: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog2"
                }, o.createElement("div", {
                    className: "blog-column column1"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-4.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12"))))), o.createElement("div", {
                    className: "blog-column column2"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-5.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12"))))), o.createElement("div", {
                    className: "blog-column column3"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-3.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-6.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 12")))))))))
            }
        },
        801564: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486),
                i = (n(357646), n(436173)),
                l = n(990264),
                r = (n(659370), n(389005), n(845939)),
                s = n(716505),
                u = (n(467338), n(718711));
            n(3325), n(711827), e.exports = function() {
                function e(e, t) {
                    var n = o.assign({}, e, t);
                    return e.hasOwnProperty("style") && (n.style = o.defaults(n.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (n.className = t.className + " " + e.className), n
                }
                return a.createElement(s, e({
                    className: "s-blog-section s-section " + this._getPaddingClass() + " " + this._getIsNewMobileLayoutClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), a.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? a.createElement(i, o.assign({}, {
                    key: "2380"
                }, this.getBackgroundProps("background1"))) : null, a.createElement("div", {
                    className: "container"
                }, a.createElement("div", {
                    className: "columns no-float sixteen"
                }, a.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding(),
                    inSectionSelector: this.props.inSectionSelector
                })), a.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, a.createElement(l, e({
                    className: "WaypointLazy",
                    componentsBinding: this._getSectionStyleProps(),
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId(),
                    inSectionSelector: this.props.inSectionSelector,
                    templateDummyData: this.props.templateDummyData,
                    isPreviewMode: this.isPreviewMode(),
                    buttonAlignmentClassName: this.getButtonAlignmentByTitleAndSubtitle()
                }, this.getComponentProps("blog1"))))))
            }
        },
        813564: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog3"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-3-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17"))))), o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-3-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, a("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, a("Sections|September 17")))))))))
            }
        },
        322787: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(915731), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        201680: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-booking-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "store-image"
                }, o.createElement("img", {
                    src: "https://static-assets.strikinglycdn.com/images/editor2/booking-section-thumb.png"
                }))), o.createElement("div", {
                    className: "p60"
                }, o.createElement("div", {
                    className: "item-title s-font-heading"
                }, a("Sections|Business Workshop")), o.createElement("div", {
                    className: "duration-time item-body-text s-font-body"
                }, a("Sections|30min")), o.createElement("div", {
                    className: "item-subtitle s-font-body"
                }, o.createElement("input", {
                    className: "date-time-picker",
                    value: a("Sections|Date & Time")
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "button"
                }, a("Sections|BOOK NOW"))))))
            }
        },
        734143: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "s-cta-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "button s-font-body"
                }, a("Sections|" + this.props.content.components.button1.text)))))
            }
        },
        147629: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(164385), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        821234: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "s-custom-form-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "form-wrapper"
                }, o.createElement("div", {
                    className: "form-item"
                }, o.createElement("div", {
                    id: "form-select"
                }, o.createElement("span", {
                    className: "select-label"
                }, a("Editor|Select an option")), o.createElement("span", {
                    className: "dropdown-icon fa fa-caret-down"
                }))), o.createElement("div", {
                    className: "form-item"
                }, o.createElement("label", {}, o.createElement("input", {
                    type: "checkbox",
                    name: "radio-example",
                    checked: "checked"
                }), "\n              ", a("Sections|Option 1"), "\n            "), o.createElement("label", {}, o.createElement("input", {
                    type: "checkbox",
                    name: "radio-example"
                }), "\n              ", a("Sections|Option 2"), "\n            ")), o.createElement("div", {
                    className: "form-item"
                }, o.createElement("label", {}, o.createElement("input", {
                    type: "radio",
                    name: "radio-example",
                    checked: "checked"
                }), "\n              ", a("Sections|Radio 1"), "\n            "), o.createElement("label", {}, o.createElement("input", {
                    type: "radio",
                    name: "radio-example"
                }), "\n              ", a("Sections|Radio 2"), "\n            ")), o.createElement("div", {
                    className: "button"
                }, a("Sections|" + this.props.content.components.email1.submit_label)))))))
            }
        },
        919338: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-donation-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "progress-bar"
                }, o.createElement("div", {
                    className: "progress"
                }), o.createElement("div", {
                    className: "indicator"
                })), o.createElement("div", {
                    className: "price-bar"
                }, o.createElement("div", {
                    className: "left-price"
                }, o.createElement("div", {
                    className: "price"
                }, "400"), o.createElement("div", {
                    className: "text"
                }, a("Donation|Raised"))), o.createElement("div", {
                    className: "right-price"
                }, o.createElement("div", {
                    className: "price"
                }, "10000"), o.createElement("div", {
                    className: "text"
                }, a("Donation|Goal")))), o.createElement("div", {
                    className: "button"
                }, a("Sections|Donate Now")))))
            }
        },
        645777: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-ecommerce-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "store-image"
                }, o.createElement("img", {
                    src: this._getEcommerceProductImage()
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "item-title s-font-heading"
                }, a("Sections|Smart Light Bulbs")), o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, "$49.99"), o.createElement("div", {
                    className: "item-subtitle s-font-body"
                }, a("Sections|While you might not need all...")), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "selection-thumb"
                }, o.createElement("div", {
                    className: "select-box"
                }, a("Sections|Purple"), "\n            ", o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/content/selector.png"
                }))), o.createElement("div", {
                    className: "input-thumb"
                }, o.createElement("div", {
                    className: "input-box"
                }, "1")), o.createElement("div", {
                    className: "button"
                }, a("Sections|Buy Now"))))))
            }
        },
        97786: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(17342), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        214783: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(183123));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-faq-thumb s-faq-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {}, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Sections|FAQs"))), o.createElement("div", {
                    className: "accordion"
                }, o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, a("Sections|What is the FAQ section?")), o.createElement("i", {
                    className: "active arrow title"
                })), o.createElement("div", {
                    className: "answer s-font-heading subtitle"
                }, a("Sections|The FAQ section lets you show expandable content. Enter questions and answers, or more detailed information for anything you want!"))), o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, i.getIsSxl() ? a("Sections|What is SXL?") : a("Sections|What is Strikingly?")), o.createElement("i", {
                    className: "arrow title"
                }))), o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, a("Sections|How do I create a website?")), o.createElement("i", {
                    className: "arrow title"
                })))))))
            }
        },
        970748: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(152160), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        287471: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        className: "feature-list-container",
                        key: t
                    }, o.createElement("div", {
                        className: "list-img"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        key: "594"
                    }, a("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        key: "731"
                    }, this._getOmittedStringByCharNum(a("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                        className: "button list-btn",
                        key: "906"
                    }, a("Sections|" + e.components.button1.text)) : null))
                }.bind(this)) : null]))
            }
        },
        384533: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(152160), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        567837: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        className: "feature-list-container",
                        key: t
                    }, o.createElement("div", {
                        className: "list-img"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        key: "594"
                    }, a("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        key: "731"
                    }, this._getOmittedStringByCharNum(a("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                        className: "button list-btn",
                        key: "906"
                    }, a("Sections|" + e.components.button1.text)) : null))
                }.bind(this)) : null]))
            }
        },
        19644: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(152160), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        343148: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        className: "feature-list-container",
                        key: t
                    }, o.createElement("div", {
                        className: "list-img"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        key: "594"
                    }, a("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        key: "731"
                    }, this._getOmittedStringByCharNum(a("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                        className: "button list-btn",
                        key: "906"
                    }, a("Sections|" + e.components.button1.text)) : null))
                }.bind(this)) : null]))
            }
        },
        890128: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(152160), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        849946: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        className: "feature-list-container",
                        key: t
                    }, o.createElement("div", {
                        className: "list-img"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        key: "594"
                    }, a("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        key: "731"
                    }, this._getOmittedStringByCharNum(a("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                        className: "button list-btn",
                        key: "906"
                    }, a("Sections|" + e.components.button1.text)) : null))
                }.bind(this)) : null]))
            }
        },
        105073: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(152160), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        123418: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-D"
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        className: "feature-list-container",
                        key: t
                    }, o.createElement("div", {
                        className: "list-img"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        key: "524"
                    }, a("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        key: "661"
                    }, this._getOmittedStringByCharNum(a("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                        className: "button list-btn",
                        key: "836"
                    }, a("Sections|" + e.components.button1.text)) : null))
                }.bind(this)) : null]))
            }
        },
        568365: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        293302: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery1-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? o.createElement.apply(this, ["div", {
                    className: "gallery-media",
                    key: "129"
                }, i.map(this._getRepetableList(this.props.content.components.gallery1.sources, 4), function(e, t) {
                    return o.createElement("div", {
                        className: "gallery-image",
                        key: t
                    }, o.createElement("img", {
                        src: this._getImageUrl(e, !1)
                    }), o.createElement("div", {
                        className: "image-title item-title s-font-heading"
                    }, a("Editor|Image Title")))
                }.bind(this))]) : null))
            }
        },
        437600: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        134878: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486);
            e.exports = function() {
                return a.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery2-thumb s-section-thumb"
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? a.createElement.apply(this, ["div", {
                    className: "gallery-media",
                    key: "129"
                }, o.map(this._getRepetableList(this.props.content.components.gallery1.sources, 6), function(e, t) {
                    return a.createElement("div", {
                        className: "gallery-image",
                        key: t
                    }, a.createElement("img", {
                        src: this._getImageUrl(e, !0)
                    }))
                }.bind(this))]) : null))
            }
        },
        444195: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        36176: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), e.exports = function() {
                return a.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery3-thumb s-section-thumb"
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement("div", {
                    className: "gallery-media"
                }, a.createElement("div", {}, a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[0], !0),
                    className: "image-0"
                })), a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[2], !0),
                    className: "image-2"
                }))), a.createElement("div", {}, a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[1], !0),
                    className: "image-1"
                })), a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[3], !0),
                    className: "image-3"
                }))))))
            }
        },
        370631: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        5246: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), e.exports = function() {
                return a.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery4-thumb s-section-thumb"
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement("div", {
                    className: "gallery-media"
                }, a.createElement("div", {}, a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[0], !0),
                    className: "image-0"
                }))), a.createElement("div", {}, a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[1], !0),
                    className: "image-1"
                })), a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[3], !0),
                    className: "image-3"
                }))), a.createElement("div", {}, a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[2], !0),
                    className: "image-2"
                })), a.createElement("div", {
                    className: "gallery-image"
                }, a.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[4], !0),
                    className: "image-4"
                }))))))
            }
        },
        411486: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        90408: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery5-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? o.createElement.apply(this, ["div", {
                    className: "gallery-media",
                    key: "129"
                }, i.map(this._getRepetableList(this.props.content.components.gallery1.sources, 2), function(e, t) {
                    return o.createElement("div", {
                        className: "gallery-image",
                        key: t
                    }, o.createElement("div", {
                        className: "image",
                        style: {
                            backgroundImage: "url(" + this._getImageUrl(e, !0) + ")"
                        }
                    }), o.createElement("div", {
                        className: "image-title item-title s-font-heading"
                    }, a("Editor|Image Title")))
                }.bind(this))]) : null))
            }
        },
        447167: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(848388), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        268163: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486);
            e.exports = function() {
                return a.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery6-thumb s-section-thumb"
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? a.createElement.apply(this, ["div", {
                    className: "gallery-media",
                    key: "129"
                }, o.map(this._getRepetableList(this.props.content.components.gallery1.sources, 4), function(e, t) {
                    return a.createElement("div", {
                        className: "gallery-image",
                        key: t
                    }, a.createElement("div", {
                        className: "image",
                        style: {
                            backgroundImage: "url(" + this._getImageUrl(e, !0) + ")"
                        }
                    }))
                }.bind(this))]) : null))
            }
        },
        765146: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(259476), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        57451: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486);
            e.exports = function() {
                return a.createElement("div", {
                    className: "s-grid-thumb s-section-thumb",
                    "=undefined": !0
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement.apply(this, ["div", {
                    className: "grid-thumb-container"
                }, o.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return a.createElement("div", {
                        className: "grid-thumb-item"
                    }, a.createElement("div", {
                        className: "grid-thumb-item-content",
                        style: this._getBackgroundStyle(e.components.background1)
                    }, a.createElement("div", {
                        className: "s-item-title"
                    }, "\n            ", e.components.text1.value, "\n          ")))
                }.bind(this))])))
            }
        },
        658077: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(271866)),
                l = n(589499);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-html-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "app-store-thumb"
                }, o.createElement(i, {}, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"
                }), o.createElement("img", {
                    src: l.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")
                }))))))
            }
        },
        4390: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = (n(496486), n(531468));
            e.exports = function() {
                return a.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        924750: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement.apply(this, ["div", {
                    className: "big-media p100 top"
                }, o.createElement("div", {
                    className: "top-content"
                }, o.createElement("div", {
                    className: "title"
                }, a("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, a("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))), i.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return o.createElement("div", {
                        key: t
                    }, o.createElement("div", {
                        className: "media-image-thumb"
                    }, o.createElement("img", {
                        src: this._getImageUrl(e.components.media1.image)
                    })), e.components.text1.value ? o.createElement("div", {
                        className: "item-body-text s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "661"
                    }) : null)
                }.bind(this))])))
            }
        },
        718773: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = (n(496486), n(531468));
            e.exports = function() {
                return a.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        642958: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "big-media bottom p100"
                }, this.props.content.components.repeatable1.list[0] ? o.createElement("div", {
                    key: "152"
                }, o.createElement("div", {
                    className: "media-image-thumb"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.repeatable1.list[0].components.media1.image)
                }))) : null, o.createElement("div", {
                    className: "bottom-content"
                }, o.createElement("div", {
                    className: "title"
                }, a("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, a("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))))))
            }
        },
        347072: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = (n(496486), n(531468));
            e.exports = function() {
                return a.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        119775: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "big-media left p100"
                }, this.props.content.components.repeatable1.list[0] ? o.createElement("div", {
                    className: "left-media-group",
                    key: "150"
                }, o.createElement("div", {
                    className: "media-image-thumb"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.repeatable1.list[0].components.media1.image)
                }))) : null, o.createElement("div", {
                    className: "left-content"
                }, o.createElement("div", {
                    className: "title"
                }, a("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, a("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))))))
            }
        },
        625665: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(254427), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        873868: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486);
            e.exports = function() {
                return a.createElement("div", {
                    className: "s-grid-thumb s-section-thumb",
                    "=undefined": !0
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement.apply(this, ["div", {
                    className: "grid-thumb-container"
                }, o.map(this.props.content.components.repeatable1.list, function(e, t) {
                    return a.createElement("div", {
                        className: "grid-thumb-item"
                    }, a.createElement("div", {
                        className: "grid-thumb-item-content",
                        style: this._getBackgroundStyle(e.components.background1)
                    }, a.createElement("div", {
                        className: "s-item-title"
                    }, "\n            ", e.components.text1.value, "\n          ")))
                }.bind(this))])))
            }
        },
        282074: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486),
                l = n(589499);
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-portfolio-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                }))), this.props.content.components.repeatable1.list.length ? o.createElement("div", {
                    className: "p100",
                    key: "570"
                }, o.createElement.apply(this, ["div", {
                    className: "columns-media"
                }, i.map(this._getRepetableList(this.props.content.components.repeatable1.list), function(e, t) {
                    return o.createElement("div", {
                        className: "column-image",
                        key: t
                    }, o.createElement("div", {
                        className: "image-wrapper"
                    }, o.createElement("img", {
                        src: l.cdnAssetPath(this._getImageUrl(e.components.media1.image))
                    })), o.createElement("div", {
                        className: "item-text-group"
                    }, e.components.text1.value ? o.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "1038"
                    }) : null))
                }.bind(this))])) : null))
            }
        },
        283238: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(984806), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        763542: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-pricing-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "pricing-thumb"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/pricing_thumb-1.png")
                })))))
            }
        },
        868437: function(e, t, n) {
            "use strict";
            var a = n(366757),
                o = n(496486);
            e.exports = function() {
                return a.createElement("div", {
                    className: "s-process-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, a.createElement("div", {
                    className: "s-section-thumb-content"
                }, a.createElement("div", {
                    className: "p100"
                }, a.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? a.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    },
                    key: "243"
                }) : null)), a.createElement("div", {
                    className: "p100"
                }, a.createElement.apply(this, ["div", {
                    className: "info-boxes"
                }, o.map(this._getRepetableList(this.props.content.components.repeatable1.list, 3), function(e, t) {
                    return a.createElement("div", {
                        className: "info-box",
                        key: t
                    }, a.createElement("div", {
                        className: "number-box",
                        dangerouslySetInnerHTML: {
                            __html: t + 1
                        }
                    }), e.components.text1.value ? a.createElement("div", {
                        className: "item-title s-font-heading",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text1.value
                        },
                        key: "736"
                    }) : null, e.components.text2.value ? a.createElement("div", {
                        className: "item-subtitle s-font-body",
                        dangerouslySetInnerHTML: {
                            __html: e.components.text2.value
                        },
                        key: "894"
                    }) : null)
                }.bind(this))]))))
            }
        },
        687006: function(e, t, n) {
            "use strict";
            var a = n(366757);
            n(496486), n(100570), e.exports = function() {
                return a.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        978122: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-block-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, a("Make Your Own Section!")))), o.createElement("div", {}, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/block-components.png")
                }))))
            }
        },
        563657: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757);
            n(496486), e.exports = function() {
                return o.createElement("div", {
                    className: "s-section-thumb s-signup-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("input", {
                    placeholder: a("Sections|" + this.props.content.components.email1.name_label)
                }), o.createElement("input", {
                    placeholder: a("Sections|" + this.props.content.components.email1.email_label)
                }), o.createElement("div", {
                    className: "button"
                }, a("Sections|" + this.props.content.components.email1.submit_label))))))
            }
        },
        812938: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = n(496486);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-section-thumb s-slider-thumb"
                }, o.createElement("div", {
                    className: "thumb-slider-wrapper"
                }, o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)
                }, function() {
                    var e = this.props.content.components.slideSettings.layout_variation;
                    return o.createElement("div", {
                        className: "s-section-thumb-content"
                    }, o.createElement("div", {
                        className: "p100 " + i.transform({
                            "dark-overlays": "noForeground" !== e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, "noForeground" !== e ? o.createElement("div", {
                        className: "s-slider-demo",
                        key: "569"
                    }, o.createElement("div", {
                        className: "title-media"
                    }, o.createElement("img", {
                        src: this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)
                    })), o.createElement("div", {
                        className: "s-font-title title",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[0].components.text1.value)
                        }
                    }), o.createElement("div", {
                        className: "s-font-heading subtitle",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[0].components.text2.value)
                        }
                    }), o.createElement("div", {
                        className: "button s-font-body"
                    }, a("Sections|" + this.props.content.components.slider1.list[0].components.button1.text))) : null))
                }.apply(this, [])), o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[1].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[1].components.background1)
                }, function() {
                    var e = this.props.content.components.slideSettings.layout_variation;
                    return o.createElement("div", {
                        className: "s-section-thumb-content"
                    }, o.createElement("div", {
                        className: "p100 " + i.transform({
                            "dark-overlays": "noForeground" !== e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, "noForeground" !== e ? o.createElement("div", {
                        className: "s-slider-demo",
                        key: "1835"
                    }, o.createElement("div", {
                        className: "title-media"
                    }, o.createElement("img", {
                        src: this._getImageUrl(this.props.content.components.slider1.list[1].components.media1.image)
                    })), o.createElement("div", {
                        className: "s-font-title title",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[1].components.text1.value)
                        }
                    }), o.createElement("div", {
                        className: "s-font-heading subtitle",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[1].components.text2.value)
                        }
                    }), o.createElement("div", {
                        className: "button s-font-body"
                    }, a("Sections|" + this.props.content.components.slider1.list[1].components.button1.text))) : null))
                }.apply(this, [])), o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)
                }, function() {
                    var e = this.props.content.components.slideSettings.layout_variation;
                    return o.createElement("div", {
                        className: "s-section-thumb-content"
                    }, o.createElement("div", {
                        className: "p100 " + i.transform({
                            "dark-overlays": "noForeground" !== e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, "noForeground" !== e ? o.createElement("div", {
                        className: "s-slider-demo",
                        key: "3101"
                    }, o.createElement("div", {
                        className: "title-media"
                    }, o.createElement("img", {
                        src: this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)
                    })), o.createElement("div", {
                        className: "s-font-title title",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[0].components.text1.value)
                        }
                    }), o.createElement("div", {
                        className: "s-font-heading subtitle",
                        dangerouslySetInnerHTML: {
                            __html: a("Sections|" + this.props.content.components.slider1.list[0].components.text2.value)
                        }
                    }), o.createElement("div", {
                        className: "button s-font-body"
                    }, a("Sections|" + this.props.content.components.slider1.list[0].components.button1.text))) : null))
                }.apply(this, []))), function() {
                    var e = this.props.content.components.slideSettings.layout_variation;
                    return o.createElement("div", {
                        className: "thumb-slider-controller"
                    }, o.createElement("div", {
                        className: "prev-arrow " + i.transform({
                            "dark-overlays": "noForeground" !== e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }), o.createElement("div", {
                        className: "next-arrow " + i.transform({
                            "dark-overlays": "noForeground" !== e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }), o.createElement("div", {
                        className: "selector-container " + i.transform({
                            "no-foreground": "noForeground" === e
                        }, (function(e, t, n) {
                            t && e.push(n)
                        }), []).join(" ")
                    }, o.createElement("div", {
                        className: "selector-inner"
                    }, o.createElement("div", {
                        className: "selected selector"
                    }), o.createElement("div", {
                        className: "selector"
                    }))))
                }.apply(this, []))
            }
        },
        245855: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(366757),
                i = (n(496486), n(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-section-thumb s-social-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: a("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "social-thumb"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/social_feed_thumb.png")
                }))))
            }
        },
        173327: function(e, t, n) {
            "use strict";
            var a = n(501068),
                o = n(663978),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(812077),
                r = (0, i.default)(l),
                s = n(726394),
                u = (0, i.default)(s),
                c = n(569198),
                d = (0, i.default)(c),
                f = n(705824),
                m = (0, i.default)(f),
                g = n(351379),
                p = (0, i.default)(g),
                h = n(900214),
                v = (0, i.default)(h),
                b = n(566380),
                y = (0, i.default)(b),
                C = n(487672),
                _ = (0, i.default)(C);
            n(974916), n(804723);
            var S = n(366757),
                N = (0, i.default)(S),
                x = n(45697),
                E = ((0, i.default)(x), n(234584)),
                w = (0, i.default)(E),
                T = n(851922),
                k = (0, i.default)(T),
                B = n(496486),
                L = ((0, i.default)(B), n(223336)),
                I = ((0, i.default)(L), n(589499)),
                O = n(469155),
                P = (0, i.default)(O);
            var M = function(e) {
                    (0, p.default)(i, e);
                    var t, n, o = (t = i, n = function() {
                        if ("undefined" == typeof Reflect || !a) return !1;
                        if (a.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(a(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, y.default)(t);
                        if (n) {
                            var i = (0, y.default)(this).constructor;
                            e = a(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, v.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, u.default)(this, i), t = o.call(this, e), (0, _.default)((0, m.default)(t), "_renderICPFilingNumber", (function() {
                            var e = t.props.ICPFilingNumber;
                            if (e) {
                                var n = e || "xICP备xxxxxxxx号";
                                return (0, r.default)("div", {
                                    className: "s-regulation-icp s-regulation-item ".concat(e ? "text" : "placeholder")
                                }, void 0, (0, r.default)("a", {
                                    href: "https://beian.miit.gov.cn/",
                                    target: "_blank"
                                }, void 0, n))
                            }
                        })), (0, _.default)((0, m.default)(t), "_renderPSBFilingNumber", (function() {
                            var e = t.props.PSBFilingNumber,
                                n = void 0 === e ? "" : e;
                            if (n) {
                                var a = n && n.match(/\d{14}(-[1-9]\d?)?/) || [],
                                    o = "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=".concat(a[0]),
                                    i = n || "x公网安备xxxxxxxxxxxxxx号",
                                    l = (0, r.default)("img", {
                                        className: "psb-icon",
                                        src: (0, I.cdnAssetPath)("/images/landing-sxl/gongan-beian.png")
                                    });
                                return (0, r.default)("div", {
                                    className: "s-regulation-psb s-regulation-item ".concat(n ? "text" : "placeholder")
                                }, void 0, (0, r.default)("a", {
                                    href: o,
                                    target: "_blank"
                                }, void 0, l, i))
                            }
                        })), (0, _.default)((0, m.default)(t), "_renderRegualtionInnner", (function() {
                            var e = t.props,
                                n = e.ICPFilingNumber,
                                a = e.PSBFilingNumber;
                            if (!n && !a) return null;
                            var o = n && a;
                            return (0, r.default)("div", {
                                className: "s-regulation-inner"
                            }, void 0, t._renderPSBFilingNumber(), o && (0, r.default)("span", {
                                className: "slash ".concat(n && a ? "" : "placeholder")
                            }, void 0, "|"), t._renderICPFilingNumber())
                        })), (0, _.default)((0, m.default)(t), "onClickEditor", (function() {
                            P.default.gotoSettingsPage(!0)
                        })), t.state = {}, t
                    }
                    return (0, d.default)(i, [{
                        key: "render",
                        value: function() {
                            return this.props.customDomain, null
                        }
                    }]), i
                }(N.default.Component),
                A = (0, k.default)(M, [w.default], (function() {
                    return {
                        ICPFilingNumber: w.default.getICPFilingNumber(),
                        PSBFilingNumber: w.default.getPSBFilingNumber(),
                        customDomain: w.default.getCustomDomain()
                    }
                }));
            t.default = A, e.exports = t.default
        },
        3325: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return null
            }, e.exports = t.default
        },
        659370: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = null, e.exports = t.default
        },
        316056: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = null, e.exports = t.default
        },
        711827: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(812077),
                c = (0, s.default)(u);
            n(241539), n(339714);
            var d = n(2991),
                f = (0, s.default)(d),
                m = n(694473),
                g = (0, s.default)(m),
                p = n(933032),
                h = (0, s.default)(p),
                v = n(366757),
                b = (0, s.default)(v),
                y = n(45697),
                C = (0, s.default)(y),
                _ = n(493658),
                S = (0, s.default)(_),
                N = n(143393),
                x = (0, s.default)(N),
                E = n(461853),
                w = (0, s.default)(E),
                T = n(399069),
                k = (0, s.default)(T),
                B = n(604990),
                L = (0, s.default)(B),
                I = n(234584),
                O = (0, s.default)(I),
                P = n(851922),
                M = (0, s.default)(P),
                A = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = G(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(43138)),
                D = n(496486),
                R = (0, s.default)(D),
                U = n(294184),
                F = (0, s.default)(U),
                Z = n(692381),
                H = (0, s.default)(Z),
                V = n(699287),
                z = (0, s.default)(V);

            function G(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (G = function(e) {
                    return e ? n : t
                })(e)
            }
            var Y = k.default.createPageComponent({
                    mixins: [w.default.enableAfterUpdate()],
                    displayName: "BlogSectionCategorySelector",
                    bobcatPropTypes: {
                        data: {
                            category: C.default.object,
                            binding: C.default.object
                        }
                    },
                    getInitialState: function() {
                        return {
                            showCategoryDropDown: !1
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                category: x.default.Map({
                                    id: "all"
                                })
                            }
                        }
                    },
                    componentDidMount: function() {
                        (0, this.props.addBlogCategoriesChangeListener)(this.handleBlogCategoriesChange)
                    },
                    handleBlogCategoriesChange: function(e) {
                        "all" === this.props.category.get("id") || L.default.isCategoryIdExist(this.props.category.get("id")) ? e === this.props.category.get("id") && this.forceUpdate() : this._onChangeCategory({
                            value: "all"
                        })
                    },
                    componentWillUnmount: function() {
                        L.default.removeBlogCategoriesChangeListener(this.handleBlogCategoriesChange)
                    },
                    _createDropdownOptions: function() {
                        var e, t = this.props.getCategories,
                            n = this.props.category.get("id") || "all",
                            o = (0, f.default)(e = t()).call(e, (function(e) {
                                return {
                                    value: e.id,
                                    label: e.id.toString() === n.toString() ? (0, c.default)("div", {
                                        className: "option capitalize selected"
                                    }, void 0, e.name) : (0, c.default)("div", {
                                        className: "option capitalize"
                                    }, void 0, e.name)
                                }
                            }));
                        return o.length && "all" !== n && o.unshift({
                            value: "all",
                            label: (0, c.default)("div", {
                                className: "option"
                            }, void 0, a("Sections|All Categories"))
                        }), o
                    },
                    _getSelectedCategoryName: function(e) {
                        var t = (0, this.props.getCategories)(),
                            n = (0, g.default)(t).call(t, (function(t) {
                                return t.id && t.id.toString() === e.toString()
                            }));
                        return n ? n.name : a("Sections|All Categories")
                    },
                    _onChangeCategory: function(e) {
                        var t = this,
                            n = e.value || "";
                        this.updateData({
                            category: {
                                id: n,
                                name: this._getSelectedCategoryName(n)
                            }
                        }), (0, h.default)((function() {
                            return t.savePage()
                        }), 1), this.setState({
                            showCategoryDropDown: !1
                        })
                    },
                    _displayDropDown: function(e) {
                        var t = this.state.showCategoryDropDown;
                        R.default.isFunction(e) && e(!this.state.showCategoryDropDown), this.setState({
                            showCategoryDropDown: !t
                        })
                    },
                    render: function() {
                        var e = this,
                            t = this.props,
                            n = t.category,
                            o = t.isPreviewMode,
                            i = this._getSelectedCategoryName(this.props.category.get("id") || ""),
                            l = this._createDropdownOptions();
                        if (l.length < 1) return null;
                        if (o) {
                            var r = this.props.renderCategoryButton,
                                s = this.state.showCategoryDropDown;
                            return (0, c.default)("div", {
                                className: (0, F.default)("s-s6-layout-editor ai-category-wrapper", {
                                    opened: s
                                })
                            }, void 0, (0, c.default)("div", {
                                className: "s-component-editor"
                            }, void 0, (0, c.default)(z.default, {
                                offset: {
                                    top: 0
                                },
                                defaultContentHeight: 400,
                                buttonComponent: function(t) {
                                    return r({
                                        clickFn: function() {
                                            e.refs.dropdown.mounted = !1, e.refs.dropdown.handleMouseDown({
                                                button: 0,
                                                type: "mousedown",
                                                stopPropagation: function() {
                                                    return {}
                                                },
                                                preventDefault: function() {
                                                    return {}
                                                }
                                            }), e._displayDropDown(t)
                                        },
                                        currentCategory: i,
                                        showCategoryDropDown: s,
                                        disableIconHover: "all" === n.get("id")
                                    })
                                }
                            }, void 0, (0, c.default)(H.default, {
                                onClick: this._displayDropDown,
                                style: {
                                    display: s ? "block" : "none"
                                }
                            }, void 0, b.default.createElement(S.default, {
                                ref: "dropdown",
                                options: l,
                                onChange: this._onChangeCategory,
                                value: i
                            })))))
                        }
                        return (0, c.default)("div", {
                            className: "s-component s-category-selector no-text-transform"
                        }, void 0, (0, c.default)("div", {
                            className: "s-component-editor",
                            rel: A.isSmallScreen() ? "tooltip-top" : "tooltip-left",
                            title: "all" === n.get("id") ? a("Sections|Select a category for this section.") : a("Sections|Only show posts from a certain category.")
                        }, void 0, (0, c.default)(S.default, {
                            options: this._createDropdownOptions(),
                            value: i,
                            onChange: this._onChangeCategory
                        })))
                    }
                }),
                j = (0, M.default)(Y, [], (function() {
                    return {
                        pageId: O.default.getId()
                    }
                }), (function() {
                    return {
                        addBlogCategoriesChangeListener: function(e) {
                            L.default.addBlogCategoriesChangeListener(e)
                        },
                        getCategories: function() {
                            return L.default.getCategories()
                        }
                    }
                }));
            t.default = j, e.exports = t.default
        },
        655600: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(501068),
                i = n(663978),
                l = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(726394),
                s = (0, l.default)(r),
                u = n(569198),
                c = (0, l.default)(u),
                d = n(705824),
                f = (0, l.default)(d),
                m = n(351379),
                g = (0, l.default)(m),
                p = n(900214),
                h = (0, l.default)(p),
                v = n(566380),
                b = (0, l.default)(v),
                y = n(487672),
                C = (0, l.default)(y),
                _ = n(812077),
                S = (0, l.default)(_),
                N = n(54103),
                x = (0, l.default)(N),
                E = n(366757),
                w = (0, l.default)(E),
                T = n(141655),
                k = (0, l.default)(T),
                B = n(103356),
                L = (0, l.default)(B),
                I = n(234584),
                O = (0, l.default)(I),
                P = n(513495),
                M = (0, l.default)(P),
                A = n(372742);
            var D = function(e) {
                    var t = e.leftPrice,
                        n = e.rightPrice,
                        a = {
                            width: "".concat(Math.min(t / n * 100, 100), "%")
                        },
                        o = {
                            left: "calc(".concat(Math.min(t / n * 100, 100), "% - 10px)")
                        };
                    return (0, S.default)("div", {
                        className: "progress-bar"
                    }, void 0, (0, S.default)("div", {
                        className: "progress",
                        style: a
                    }), (0, S.default)("div", {
                        className: "indicator",
                        style: o
                    }))
                },
                R = function(e) {
                    (0, g.default)(l, e);
                    var t, n, i = (t = l, n = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, b.default)(t);
                        if (n) {
                            var i = (0, b.default)(this).constructor;
                            e = o(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function l(e) {
                        var t, n;
                        return (0, s.default)(this, l), n = i.call(this, e), (0, C.default)((0, f.default)(n), "isPreviewMode", (function() {
                            return !1
                        })), n._listener = (0, x.default)(t = n._listener).call(t, (0, f.default)(n)), n
                    }
                    return (0, c.default)(l, [{
                        key: "componentDidMount",
                        value: function() {
                            k.default.getDonationSettings({
                                pageId: O.default.getId()
                            }), L.default.addChangeListener(this._listener)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            L.default.removeChangeListener(this._listener)
                        }
                    }, {
                        key: "_listener",
                        value: function() {
                            this.forceUpdate()
                        }
                    }, {
                        key: "_onClickOpenManager",
                        value: function() {
                            k.default.openDialog("donationManager")
                        }
                    }, {
                        key: "_onClickOpenDonateDialog",
                        value: function() {
                            k.default.openDialog("donateDialog", {
                                strong: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = L.default.getData(),
                                t = e.settings,
                                n = (e.state, e.currencyFormat),
                                o = this.props.sectionStyleProps;
                            return (0, S.default)("div", {
                                className: "s-component s-donation ".concat(this.props.sbClass ? this.props.sbClass : "")
                            }, void 0, !1, t.data.showProgress && (0, S.default)("div", {
                                className: "s-donation-progress"
                            }, void 0, (0, S.default)(D, {
                                leftPrice: t.paid,
                                rightPrice: t.goal
                            }), (0, S.default)("div", {
                                className: "left-price"
                            }, void 0, (0, S.default)("div", {
                                className: "price"
                            }, void 0, (0, A.getFormattedPrice)(t.paid, n)), (0, S.default)("div", {
                                className: "text"
                            }, void 0, a("Donation|Raised"))), (0, S.default)("div", {
                                className: "right-price"
                            }, void 0, (0, S.default)("div", {
                                className: "price"
                            }, void 0, (0, A.getFormattedPrice)(t.goal, n)), (0, S.default)("div", {
                                className: "text"
                            }, void 0, a("Donation|Goal")))), (0, S.default)(M.default, {
                                component: "div",
                                className: "s-common-button s-cta-button s-font-button",
                                onClick: this._onClickOpenDonateDialog,
                                sectionStyleProps: o
                            }, void 0, t.data.buttonText || a("Donation|Donate")))
                        }
                    }]), l
                }(w.default.Component);
            t.default = R, e.exports = t.default
        },
        658840: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(812077),
                c = (0, s.default)(u),
                d = n(359036),
                f = (0, s.default)(d);
            n(241539), n(339714);
            var m = n(778914),
                g = (0, s.default)(m),
                p = n(686902),
                h = (0, s.default)(p),
                v = n(62462),
                b = (0, s.default)(v),
                y = n(492762),
                C = (0, s.default)(y),
                S = n(977766),
                N = (0, s.default)(S),
                x = n(2991),
                E = (0, s.default)(x),
                w = n(366757),
                T = (0, s.default)(w),
                k = n(45697),
                B = (0, s.default)(k),
                L = n(973935),
                I = ((0, s.default)(L), n(493658)),
                O = (0, s.default)(I),
                P = n(461853),
                M = (0, s.default)(P),
                A = n(399069),
                D = (0, s.default)(A),
                R = n(918186),
                U = (0, s.default)(R),
                F = n(266004),
                Z = (0, s.default)(F),
                H = n(294184),
                V = (0, s.default)(H),
                z = n(692381),
                G = (0, s.default)(z),
                Y = n(699287),
                j = (0, s.default)(Y),
                W = n(851922),
                K = ((0, s.default)(W), n(154920)),
                J = (0, s.default)(K),
                q = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = X(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(43138));

            function X(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (X = function(e) {
                    return e ? n : t
                })(e)
            }
            var Q = (0, n(11945).getIsEditorRtlLayout)(),
                $ = function(e, t, n) {
                    return D.default.createPageComponent({
                        mixins: [M.default.enableAfterUpdate()],
                        displayName: t,
                        bobcatPropTypes: {
                            data: {
                                text: B.default.string,
                                category: B.default.oneOfType(B.default.string, B.default.number),
                                binding: B.default.object
                            }
                        },
                        getInitialState: function() {
                            return {
                                showCategoryDropDown: !1
                            }
                        },
                        getBobcatDefaultProps: function() {
                            return {
                                data: {
                                    category: "all"
                                }
                            }
                        },
                        componentWillReceiveProps: function(t) {
                            e.getCategories().length && !e.isCategoryIdExist(t.category) && this._onChangeCategory({
                                value: "all"
                            })
                        },
                        flattenOptions: function(e) {
                            var t, n = [],
                                a = {};
                            return (0, g.default)(e).call(e, (function(e) {
                                var t = e.parent_id;
                                if (t) a[t] ? a[t].push(e) : a[t] = [e];
                                else {
                                    n.push(e);
                                    var o = e.children;
                                    null != o && o.length && n.push.apply(n, (0, f.default)(o))
                                }
                            })), (0, g.default)(t = (0, h.default)(a)).call(t, (function(e) {
                                var t, o = (0, b.default)(n).call(n, (function(t) {
                                        var n = t.id;
                                        return "".concat(n) === e
                                    })),
                                    i = a[e];
                                o > -1 ? (0, C.default)(n).apply(n, (0, N.default)(t = [o + 1, 0]).call(t, (0, f.default)(i))) : n.push.apply(n, (0, f.default)(i))
                            })), n
                        },
                        _createDropdownOptions: function() {
                            var t, o = this,
                                i = e.getCategories(),
                                l = (0, E.default)(t = this.flattenOptions(i)).call(t, (function(e) {
                                    var t = e.id,
                                        n = e.name,
                                        a = e.level,
                                        i = "option";
                                    return t.toString() === o.props.category.toString() && (i += " selected"), 2 === a && (i += " is-sub-category"), {
                                        value: t,
                                        label: (0, c.default)("div", {
                                            className: i
                                        }, void 0, n)
                                    }
                                }));
                            return l.length && "all" !== this.props.category && l.unshift({
                                value: "all",
                                label: (0, c.default)("div", {
                                    className: "option"
                                }, void 0, a(n ? "Portfolio|All Categories" : "Ecommerce|All Categories"))
                            }), l
                        },
                        _getSelectedCategory: function(t) {
                            var o = e.getCategories(),
                                i = U.default.findCategory(t, o);
                            return i ? i.name : a(n ? "Portfolio|All Categories" : "Ecommerce|All Categories")
                        },
                        _onChangeCategory: function(e) {
                            this.updateData({
                                category: e.value
                            }), this.savePage(), n ? J.default.track("Editor - Select Portfolio Section Category") : J.default.track("Editor - Select Ecommerce Section Category"), this.setState({
                                showCategoryDropDown: !1
                            })
                        },
                        _displayDropDown: function(e) {
                            var t = this.state.showCategoryDropDown;
                            _.isFunction(e) && e(!this.state.showCategoryDropDown), this.setState({
                                showCategoryDropDown: !t
                            })
                        },
                        render: function() {
                            var t = this,
                                o = this.props,
                                i = o.isPreviewMode,
                                l = o.isAiMobileMode,
                                r = o.category,
                                s = this._getSelectedCategory(this.props.category);
                            this.observeBinding(e.getCategoriesBinding()), this.observeBinding(e.getSettingsBinding());
                            var u = this._createDropdownOptions();
                            if (u.length < 1) return null;
                            var d = Q ? "tooltip-right" : "tooltip-left";
                            if (i && !l) {
                                var f = this.props.renderCategoryButton,
                                    m = this.state.showCategoryDropDown;
                                return (0, c.default)("div", {
                                    className: (0, V.default)("s-s6-layout-editor ai-category-wrapper", {
                                        opened: m
                                    })
                                }, void 0, (0, c.default)("div", {
                                    className: "s-component-editor"
                                }, void 0, (0, c.default)(j.default, {
                                    offset: {
                                        top: 0
                                    },
                                    defaultContentHeight: 400,
                                    buttonComponent: function(e) {
                                        return f({
                                            clickFn: function() {
                                                t.refs.dropdown.mounted = !1, t.refs.dropdown.handleMouseDown({
                                                    button: 0,
                                                    type: "mousedown",
                                                    stopPropagation: function() {
                                                        return {}
                                                    },
                                                    preventDefault: function() {
                                                        return {}
                                                    }
                                                }), t._displayDropDown(e)
                                            },
                                            showCategoryDropDown: m,
                                            currentCategory: s,
                                            disableIconHover: "all" === r
                                        })
                                    }
                                }, void 0, (0, c.default)(G.default, {
                                    onClick: this._displayDropDown,
                                    style: {
                                        display: m ? "block" : "none"
                                    }
                                }, void 0, T.default.createElement(O.default, {
                                    ref: "dropdown",
                                    options: u,
                                    onChange: this._onChangeCategory,
                                    value: s
                                })))))
                            }
                            return (0, c.default)("div", {
                                className: (0, V.default)("s-component s-category-selector", {
                                    "ai-mobile-mode": l
                                })
                            }, void 0, (0, c.default)("div", {
                                className: "s-component-editor",
                                rel: q.isSmallScreen() ? "tooltip-top" : d,
                                title: a(n ? "Portfolio|Select a category for this section." : "Ecommerce|Select a category for this section."),
                                "data-original-title": a(n ? "Portfolio|Select a category for this section." : "Ecommerce|Select a category for this section.")
                            }, void 0, (0, c.default)(O.default, {
                                options: u,
                                value: this._getSelectedCategory(this.props.category),
                                onChange: this._onChangeCategory
                            })))
                        }
                    })
                },
                ee = $(Z.default, "EcommerceCategorySelector");
            ee.createCategorySelector = $, t.default = ee, e.exports = t.default
        },
        31933: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = n(752424),
                i = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(45697),
                u = (0, r.default)(s),
                c = n(399069),
                d = (0, r.default)(c),
                f = n(277265),
                m = (0, r.default)(f),
                g = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = _(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(143268)),
                p = n(907423),
                h = (0, r.default)(p),
                v = n(818166),
                b = (0, r.default)(v),
                y = n(234584),
                C = (0, r.default)(y);

            function _(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    n = new o;
                return (_ = function(e) {
                    return e ? n : t
                })(e)
            }
            t.default = d.default.createPageComponent({
                displayName: "ExternalLinkNav",
                observedProps: ["url", "text", "updateTimeStamp"],
                bobcatPropTypes: {
                    data: {
                        updateTimeStamp: u.default.number,
                        new_target: u.default.bool,
                        text: u.default.string,
                        url: u.default.string,
                        id: u.default.string,
                        link_type: u.default.string,
                        page_id: u.default.string,
                        section_id: u.default.string
                    }
                },
                _getUrlToShow: function() {
                    var e = this.props,
                        t = e.link_type,
                        n = e.url,
                        a = e.page_id,
                        o = e.section_id;
                    if ("section" === t) return b.default.getExternalLinkUrl(t, n, a, o);
                    var i, l = (i = n, g.getExternalLinkMappingRS(i, h.default.getPagesList()));
                    return g.addProtocol(null != l.publicURL ? l.publicURL : l.siteDeleted ? "#" : n)
                },
                _getTarget: function() {
                    var e = this.props,
                        t = e.link_type;
                    return e.new_target && "section" !== t ? "_blank" : "_self"
                },
                _isS5Theme: function() {
                    return "s5-theme" === C.default.getThemeName()
                },
                render: function() {
                    return !b.default.getShowInNavLinks(this.props.id) || b.default.getIsMultiPage() ? null : m.default.apply(this)
                }
            }), e.exports = t.default
        },
        288757: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(205872),
                l = (0, o.default)(i),
                r = n(812077),
                s = (0, o.default)(r),
                u = n(54103),
                c = (0, o.default)(u),
                d = n(977766),
                f = (0, o.default)(d),
                m = n(366757),
                g = (0, o.default)(m),
                p = n(45697),
                h = (0, o.default)(p),
                v = n(399069),
                b = (0, o.default)(v),
                y = n(357646),
                C = (0, o.default)(y);
            t.default = b.default.create({
                displayName: "ItemTextGroup",
                propTypes: {
                    section: h.default.object.isRequired,
                    itemBinding: h.default.object.isRequired,
                    className: h.default.string,
                    binding: h.default.object.isRequired,
                    upperChildrenPosition: h.default.bool,
                    isNewBigMedia: h.default.bool,
                    titleBoldText: h.default.bool,
                    itemTitleBoldText: h.default.bool,
                    childrenClassName: h.default.string
                },
                shouldComponentUpdateOverride: function() {
                    return !0
                },
                renderChildren: function(e) {
                    return this.props.children ? (0, s.default)("div", {
                        className: e
                    }, void 0, this.props.children) : null
                },
                _onChange: function() {
                    if (this.props.onChange) return this.props.onChange()
                },
                _onFocus: function(e) {
                    if (this.props.onFocus && "function" == typeof this.props.onFocus) return this.props.onFocus(e)
                },
                _onBlur: function(e) {
                    if (this.props.onBlur && "function" == typeof this.props.onBlur) return this.props.onBlur(e)
                },
                render: function() {
                    var e, t, n, a, o = this.props,
                        i = o.section,
                        r = o.isNewBigMedia,
                        u = o.titleBoldText,
                        d = o.itemTitleBoldText,
                        m = o.childrenClassName,
                        p = void 0 === m ? "" : m,
                        h = this.props,
                        v = h.itemBinding,
                        b = h.inSectionSelector,
                        y = null == this.props.showItemSubtitle || this.props.showItemSubtitle,
                        _ = this.props.deprecateItemSubtitle,
                        S = this.props.upperChildrenPosition,
                        N = null != this.props.className ? this.props.className : "",
                        x = this.props.hideTextGroupTitle;
                    if (!i) throw new Error("ItemTextGroup is expecting a section prop!");
                    if (!v) throw new Error("ItemTextGroup is expecting an itemBinding prop!");
                    if (y) {
                        var E, w, T = i.getThemeFeature("itemSubtitleDefaultStyle"),
                            k = T ? {
                                defaultStyle: T
                            } : k = {};
                        n = (0, s.default)("div", {
                            className: "s-item-subtitle"
                        }, void 0, g.default.createElement(C.default, (0, l.default)({
                            tagName: "h6",
                            textType: "body",
                            sizeType: "itemSubTitle",
                            inSectionSelector: b
                        }, k, i.getComponentProps("text2", v), {
                            onChange: this._onChange,
                            onblur: (0, c.default)(E = this._onBlur).call(E, this, "text2"),
                            onfocus: (0, c.default)(w = this._onFocus).call(w, this, "text2")
                        }))), e = "text3", t = "text1 text2 text3"
                    } else n = null, e = "text2", t = "text1 text2";
                    var B, L, I, O, P, M, A, D = i.sbUniformTextAlignment(t, {
                        parentBinding: v
                    });
                    return p && (D = (0, f.default)(B = "".concat(D ? "".concat(D, " ") : "")).call(B, p)), i.sbAnyHasContent(t, {
                        parentBinding: v
                    }) || this.props.children ? (0, s.default)("div", {
                        className: "s-item-text-group ".concat(N)
                    }, void 0, S && this.renderChildren(D), i.sbHasContent("text1", {
                        parentBinding: v
                    }) && !x && (r ? (0, s.default)("div", {
                        className: "s-title"
                    }, void 0, g.default.createElement(C.default, (0, l.default)({
                        tagName: "h2",
                        textType: "title",
                        sizeType: "title",
                        defaultBoldText: u,
                        inSectionSelector: b
                    }, i.getComponentProps("text1", v), {
                        onChange: this._onChange,
                        onblur: (0, c.default)(L = this._onBlur).call(L, this, "text1"),
                        onfocus: (0, c.default)(I = this._onFocus).call(I, this, "text1")
                    }))) : (0, s.default)("div", {
                        className: "s-item-title"
                    }, void 0, g.default.createElement(C.default, (0, l.default)({
                        tagName: "h3",
                        textType: "heading",
                        sizeType: "itemTitle",
                        defaultBoldText: d,
                        inSectionSelector: b
                    }, i.getComponentProps("text1", v), {
                        onChange: this._onChange,
                        onblur: (0, c.default)(O = this._onBlur).call(O, this, "text1"),
                        onfocus: (0, c.default)(P = this._onFocus).call(P, this, "text1")
                    })))), function() {
                        if (y) {
                            if (!_) return n;
                            if (!a && i.sbHasContent("text2", {
                                    parentBinding: v,
                                    showOnly: !1
                                }) && (a = !0), a) return n
                        }
                    }(), (0, s.default)("div", {
                        className: "s-item-text"
                    }, void 0, g.default.createElement(C.default, (0, l.default)({
                        tagName: "div",
                        textType: "body",
                        sizeType: "body",
                        inSectionSelector: b
                    }, i.getComponentProps(e, v), {
                        onChange: this._onChange,
                        onblur: (0, c.default)(M = this._onBlur).call(M, this, e),
                        onfocus: (0, c.default)(A = this._onFocus).call(A, this, e)
                    }))), !S && this.renderChildren(D)) : null
                }
            }), e.exports = t.default
        },
        663749: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380)),
                d = ((0, o.default)(c), n(981643)),
                f = ((0, o.default)(d), n(2991)),
                m = ((0, o.default)(f), n(694473));
            (0, o.default)(m), t.default = null, e.exports = t.default
        },
        467338: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(705824)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(231474)),
                f = ((0, o.default)(d), n(566380)),
                m = ((0, o.default)(f), n(487672));
            (0, o.default)(m), n(974916), n(115306), n(209653), n(569600);
            var g = n(2991),
                p = ((0, o.default)(g), n(977766)),
                h = ((0, o.default)(p), n(686902)),
                v = ((0, o.default)(h), n(981643)),
                b = ((0, o.default)(v), n(51942));
            (0, o.default)(b), t.default = null, e.exports = t.default
        },
        410730: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(705824)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(566380)),
                f = ((0, o.default)(d), n(487672)),
                m = ((0, o.default)(f), n(2991));
            (0, o.default)(m), t.default = null, e.exports = t.default
        },
        332347: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(418777),
                l = ((0, o.default)(i), n(812077)),
                r = ((0, o.default)(l), n(726394)),
                s = ((0, o.default)(r), n(569198)),
                u = ((0, o.default)(s), n(705824)),
                c = ((0, o.default)(u), n(351379)),
                d = ((0, o.default)(c), n(900214)),
                f = ((0, o.default)(d), n(566380)),
                m = ((0, o.default)(f), n(487672));
            (0, o.default)(m), n(569600), n(209653);
            var g = n(981643),
                p = ((0, o.default)(g), n(2991)),
                h = ((0, o.default)(p), n(54103)),
                v = ((0, o.default)(h), n(977766)),
                b = ((0, o.default)(v), n(51942));
            (0, o.default)(b), t.default = null, e.exports = t.default
        },
        790474: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), t.FeatureListLayoutButtonOnClass = void 0;
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380)),
                d = ((0, o.default)(c), n(981643)),
                f = ((0, o.default)(d), n(2991));
            (0, o.default)(f), t.FeatureListLayoutButtonOnClass = null, t.default = null
        },
        504180: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(726394),
                l = ((0, o.default)(i), n(569198)),
                r = ((0, o.default)(l), n(351379)),
                s = ((0, o.default)(r), n(900214)),
                u = ((0, o.default)(s), n(566380)),
                c = ((0, o.default)(u), n(2991));
            (0, o.default)(c), t.default = null, e.exports = t.default
        },
        647851: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(705824)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(566380)),
                f = ((0, o.default)(d), n(487672)),
                m = ((0, o.default)(f), n(981643)),
                g = ((0, o.default)(m), n(620116)),
                p = ((0, o.default)(g), n(2991)),
                h = ((0, o.default)(p), n(394198));
            (0, o.default)(h), t.default = null, e.exports = t.default
        },
        244467: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380));
            (0, o.default)(c), n(569600);
            var d = n(678580),
                f = ((0, o.default)(d), n(51942)),
                m = ((0, o.default)(f), n(2991));
            (0, o.default)(m), t.default = null, e.exports = t.default
        },
        348113: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380));
            (0, o.default)(c), n(974916), n(323123);
            var d = n(678580),
                f = ((0, o.default)(d), n(2991)),
                m = ((0, o.default)(f), n(977766)),
                g = ((0, o.default)(m), n(981643));
            (0, o.default)(g), t.default = null, e.exports = t.default
        },
        460542: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(726394),
                l = ((0, o.default)(i), n(569198)),
                r = ((0, o.default)(l), n(705824)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380)),
                d = ((0, o.default)(c), n(487672)),
                f = ((0, o.default)(d), n(2991));
            (0, o.default)(f), t.default = null, e.exports = t.default
        },
        539232: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(418777)),
                r = ((0, o.default)(l), n(726394)),
                s = ((0, o.default)(r), n(569198)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(566380)),
                f = ((0, o.default)(d), n(2991)),
                m = ((0, o.default)(f), n(977766)),
                g = ((0, o.default)(m), n(620116)),
                p = ((0, o.default)(g), n(678580));
            (0, o.default)(p), n(569600), t.default = null, e.exports = t.default
        },
        928041: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(705824)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(566380));
            (0, o.default)(d), n(569600);
            var f = n(54103),
                m = ((0, o.default)(f), n(2991)),
                g = ((0, o.default)(m), n(678580)),
                p = ((0, o.default)(g), n(51942));
            (0, o.default)(p), t.default = null, e.exports = t.default
        },
        430918: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(726394),
                l = ((0, o.default)(i), n(569198)),
                r = ((0, o.default)(l), n(351379)),
                s = ((0, o.default)(r), n(900214)),
                u = ((0, o.default)(s), n(566380));
            (0, o.default)(u), t.default = null, e.exports = t.default
        },
        820736: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(726394),
                l = ((0, o.default)(i), n(569198)),
                r = ((0, o.default)(l), n(705824)),
                s = ((0, o.default)(r), n(351379)),
                u = ((0, o.default)(s), n(900214)),
                c = ((0, o.default)(u), n(566380)),
                d = ((0, o.default)(c), n(487672)),
                f = ((0, o.default)(d), n(2991));
            (0, o.default)(f), t.default = null, e.exports = t.default
        },
        497279: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(726394),
                l = ((0, o.default)(i), n(569198)),
                r = ((0, o.default)(l), n(351379)),
                s = ((0, o.default)(r), n(900214)),
                u = ((0, o.default)(s), n(566380));
            (0, o.default)(u), t.default = null, e.exports = t.default
        },
        916034: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(812077),
                l = ((0, o.default)(i), n(418777)),
                r = ((0, o.default)(l), n(726394)),
                s = ((0, o.default)(r), n(569198)),
                u = ((0, o.default)(s), n(705824)),
                c = ((0, o.default)(u), n(351379)),
                d = ((0, o.default)(c), n(900214)),
                f = ((0, o.default)(d), n(566380)),
                m = ((0, o.default)(f), n(487672));
            (0, o.default)(m), n(569600);
            var g = n(2991),
                p = ((0, o.default)(g), n(977766));
            (0, o.default)(p), t.default = null, e.exports = t.default
        },
        997542: function(e, t, n) {
            "use strict";
            n(501068);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(418777),
                l = ((0, o.default)(i), n(726394)),
                r = ((0, o.default)(l), n(569198)),
                s = ((0, o.default)(r), n(705824)),
                u = ((0, o.default)(s), n(351379)),
                c = ((0, o.default)(u), n(900214)),
                d = ((0, o.default)(c), n(231474)),
                f = ((0, o.default)(d), n(566380)),
                m = ((0, o.default)(f), n(487672)),
                g = ((0, o.default)(m), n(2991));
            (0, o.default)(g), t.default = null, e.exports = t.default
        },
        850257: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(663978),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r = n(812077),
                s = (0, i.default)(r),
                u = n(2991),
                c = (0, i.default)(u),
                d = n(981643),
                f = (0, i.default)(d),
                m = n(366757),
                g = ((0, i.default)(m), n(45697)),
                p = (0, i.default)(g),
                h = n(973935),
                v = n(921003),
                b = n(399069),
                y = (n(154920), n(496486)),
                C = n(141655),
                _ = n(461853);
            l = b.createPageComponent({
                displayName: "LayoutSelector",
                mixins: [_.enableAfterMount()],
                bobcatPropTypes: {
                    data: {
                        layoutOptions: p.default.array,
                        layoutVariation: p.default.string,
                        binding: p.default.object.isRequired
                    }
                },
                getBobcatDefaultProps: function() {
                    return {
                        layoutOptions: [],
                        layoutVariation: null
                    }
                },
                componentDidMount: function() {
                    this.props.layoutOptions.length || console.warn("Section has no layout options defined!")
                },
                componentDidUpdate: function(e) {
                    e.layoutVariation !== this.props.layoutVariation && window.edit_page.Event.publish("Layout.afterChange", {
                        target: $(h.findDOMNode(this))
                    })
                },
                _updateLayout: function(e) {
                    return this.updateData({
                        layout_variation: e
                    })
                },
                _getLayoutKeys: function() {
                    return (0, c.default)(y).call(y, this.props.layoutOptions, "key")
                },
                _getLayoutIndex: function() {
                    var e = this._getLayoutKeys(),
                        t = this.props.layoutVariation,
                        n = (0, f.default)(e).call(e, t);
                    return t && -1 !== n ? n : null
                },
                _clickLayout: function() {
                    var e = this._getLayoutKeys(),
                        t = this._getLayoutIndex();
                    null == t && (t = 0), this._updateLayout(e[(t + 1) % e.length]), C.clickLayout(), C.save()
                },
                _layoutStatus: function() {
                    return null != this._getLayoutIndex() ? "ABCDEFGHI" [this._getLayoutIndex()] : "A"
                },
                render: function() {
                    return this.props.layoutOptions.length ? (0, s.default)("div", {
                        className: "s-component s-layout"
                    }, void 0, (0, s.default)("div", {
                        className: "s-component-editor"
                    }, void 0, (0, s.default)(v, {
                        className: "center clickable small title",
                        onTap: this._clickLayout,
                        rel: "tooltip-left",
                        title: a("Editor|Switch layout for this section")
                    }, void 0, (0, s.default)("span", {}, void 0, a("Layout"), this._layoutStatus() ? (0, s.default)("span", {
                        className: "layout-status"
                    }, void 0, this._layoutStatus()) : void 0)))) : null
                }
            }), t.default = l, e.exports = t.default
        },
        751552: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(389087),
                l = (0, o.default)(i),
                r = n(781215);
            t.default = (0, r.createCategoryBar)(l.default), e.exports = t.default
        },
        192927: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(389087),
                l = (0, o.default)(i),
                r = n(658840);
            t.default = (0, r.createCategorySelector)(l.default, "PortfolioCategorySelector", !0), e.exports = t.default
        },
        292019: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, c, d, f = n(205872),
                m = (0, s.default)(f),
                g = n(487672),
                p = (0, s.default)(g),
                h = n(812077),
                v = (0, s.default)(h),
                b = n(359036),
                y = (0, s.default)(b),
                C = n(933032),
                _ = (0, s.default)(C),
                S = n(492762),
                N = (0, s.default)(S),
                x = n(620116),
                E = (0, s.default)(x),
                w = n(981643),
                T = (0, s.default)(w),
                k = n(394198),
                B = (0, s.default)(k),
                L = n(54103),
                I = (0, s.default)(L),
                O = n(366757),
                P = (0, s.default)(O),
                M = n(45697),
                A = (0, s.default)(M),
                D = n(868309),
                R = (0, s.default)(D),
                U = n(183123),
                F = (0, s.default)(U),
                Z = n(294184),
                H = (0, s.default)(Z),
                V = n(223336),
                z = (0, s.default)(V),
                G = n(496486),
                Y = (0, s.default)(G),
                j = n(399069),
                W = (0, s.default)(j),
                K = n(141655),
                J = (0, s.default)(K),
                q = n(882962),
                X = (0, s.default)(q),
                Q = n(234584),
                $ = (0, s.default)(Q),
                ee = n(389087),
                te = (0, s.default)(ee),
                ne = n(834243),
                ae = (0, s.default)(ne),
                oe = n(818166),
                ie = (0, s.default)(oe),
                le = n(230139),
                re = (0, s.default)(le),
                se = n(534566),
                ue = (0, s.default)(se),
                ce = n(712774),
                de = (0, s.default)(ce),
                fe = n(634472),
                me = (0, s.default)(fe),
                ge = n(751552),
                pe = (0, s.default)(ge),
                he = n(513495),
                ve = (0, s.default)(he),
                be = n(378508),
                ye = (0, s.default)(be),
                Ce = n(15642),
                _e = n(285072),
                Se = (0, s.default)(_e),
                Ne = n(805803),
                xe = n(105001),
                Ee = n(500134),
                we = n(607947),
                Te = (0, s.default)(we),
                ke = n(316913),
                Be = n(318592),
                Le = n(189745),
                Ie = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = Ae(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(792656)),
                Oe = n(442279),
                Pe = n(384887),
                Me = (0, s.default)(Pe);

            function Ae(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (Ae = function(e) {
                    return e ? n : t
                })(e)
            }
            var De = !1,
                Re = (0, Oe.createSelector)([function(e) {
                    return e.categorizeTextColor
                }, function(e) {
                    return e.categorizeSelectedColor
                }, function(e) {
                    return e.categoryBarBorderColor
                }], (function(e, t, n) {
                    return (0, Be.css)("&.s-component.s-ecommerce .s-ecommerce-content{.s-category-bar{border-color:", n, ";}.s-category-bar .category-list .category-link-item{color:", e, ";&.selected{color:", t, ";&:after{background:", t, ";}}}}")
                })),
                Ue = W.default.createPageComponent({
                    displayName: "Portfolio",
                    mixins: [(0, re.default)("editor"), Se.default],
                    bobcatPropTypes: {
                        data: {
                            text: A.default.string,
                            category: A.default.oneOfType([A.default.string, A.default.number]),
                            binding: A.default.object
                        },
                        internal: {
                            onConnectionFailed: A.default.func
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                category: "all"
                            }
                        }
                    },
                    componentWillMount: function() {
                        this.initMeta({
                            currentCategory: this.dtProps.category,
                            nextCategory: this.dtProps.category,
                            currentPage: 1,
                            detailMode: !1
                        }), this.setState({
                            isAiSite: !1,
                            isShowPortfolioTooltip: !1
                        })
                    },
                    componentDidMount: function() {
                        var e = this;
                        this.shouldUseDummy() || (te.default.getFirstLoadingState("categories") ? X.default.getPortfolioCategories({
                            success: function() {
                                return e._loadProductsFromServer()
                            },
                            pageId: $.default.getId()
                        }) : this._loadProductsFromServer()), te.default.getFirstLoadingState("settings") && X.default.getPortfolioSettings({
                            pageId: $.default.getId()
                        }), (0, Le.getIsAISiteBuilderPreview)() && ((0, _.default)((function() {
                            return e.handlePageViewTracking(1e4)
                        }), 1e4), (0, _.default)((function() {
                            return e.handlePageViewTracking(15e3)
                        }), 15e3), (0, _.default)((function() {
                            return e.handlePageViewTracking(3e4)
                        }), 3e4)), this._token = ue.default.register((function(t) {
                            if (t.actionType === de.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS && (e.setMeta("currentCategory", e.getMeta("nextCategory")), !De)) {
                                De = !0;
                                var a = n(796764);
                                a.init(), a.trackPortfolioBuyerEvent(F.default.getKeenIoPortfolioBuyerLanding())
                            }
                        })), this._onCategoryChangeListenId = te.default.getCategoriesBinding().addListener("", this.onCategoryChange), (0, z.default)(window).on("resize.portfolio", Te.default.debounce((function() {
                            return e.forceUpdate()
                        }), 300)), ye.default.subCloseProductManagement((function(t, n) {
                            var a = n.reloadProduct,
                                o = n.from;
                            a && e._loadProductsFromServer(void 0, void 0, void 0, o)
                        }))
                    },
                    componentDidUpdate: function(e, t) {
                        var n, a;
                        this._getRenderCategory(this.dtProps.category) === this._getRenderCategory(e.category) && e.category === this.dtProps.category && (null === (n = e.layoutConfig) || void 0 === n ? void 0 : n.get("productPerPage")) === (null === (a = this.dtProps.layoutConfig) || void 0 === a ? void 0 : a.get("productPerPage")) || ("all" === this._getRenderCategory(this.dtProps.category) || "all" === this.dtProps.category ? (this.setMeta("nextCategory", "all"), this.setMeta("currentCategory", "all"), this.setMeta("currentPage", 1)) : (this.setMeta("nextCategory", this.dtProps.category), this.setMeta("currentCategory", this.dtProps.category), this.setMeta("currentPage", 1)), this._loadProductsFromServer())
                    },
                    componentWillUnmount: function() {
                        ue.default.unregister(this._token), te.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId), (0, z.default)(window).off("resize.portfolio")
                    },
                    handlePageViewTracking: function(e) {
                        var t, n = this.props.sectionId;
                        (0, Le.trackMixpanelEventViaParent)("AI Site Builder - Page View - Portfolios Section", {
                            sectionId: n,
                            duration: e,
                            siteId: $.default.getId(),
                            productsLength: null === (t = this._getProductsData()) || void 0 === t ? void 0 : t.length,
                            isFetchingProducts: te.default.getLoadingState("product"),
                            isFetchingSettings: te.default.getLoadingState("settings"),
                            isFetchingCategory: te.default.getLoadingState("category")
                        })
                    },
                    onCategoryChange: Y.default.debounce((function() {
                        this._loadProductsFromServer()
                    }), 100),
                    _getProductsData: function() {
                        var e = this.props,
                            t = e.layoutConfig,
                            n = e.sectionId,
                            a = e.originSectionId,
                            o = e.category,
                            i = void 0 === o ? "all" : o,
                            l = (null == t ? void 0 : t.get("productPerPage")) || 20;
                        if (this.shouldUseDummy()) {
                            var r = this._getDummyDataInSectionSelector();
                            return (0, N.default)(r).call(r, l, r.length), r
                        }
                        var s = n;
                        return !$.default.hidePortfolioDummyData() && (0, Ce.getIsCRONewSectionSelector)() && a && (s = a), te.default.getSectionProducts(s, this.getMeta("currentPage"), l, i || "all")
                    },
                    _getDummyDataInSectionSelector: function() {
                        var e = this.props.templateDummyData,
                            t = void 0 === e ? [] : e,
                            n = (0, y.default)(t) || [],
                            a = this.getMeta("currentCategory");
                        return a && "all" !== a ? (0, E.default)(n).call(n, (function(e) {
                            var t = e.categoryIds,
                                n = void 0 === t ? [] : t;
                            return -1 !== (0, T.default)(n).call(n, (0, B.default)(a))
                        })) || [] : n
                    },
                    shouldUseDummy: function() {
                        var e = this.props,
                            t = e.templateDummyData,
                            n = e.inSectionSelector;
                        return !(!n || !$.default.getEnableUseAIDraftData()) || n && t
                    },
                    _getPortfolioSectionShowDummyData: function() {
                        var e = this.props,
                            t = e.sectionId,
                            n = e.originSectionId,
                            a = t;
                        return (0, Ce.getIsCRONewSectionSelector)() && n && (a = n), te.default.getPortfolioSectionShowDummyData(a)
                    },
                    _getEditBtnText: function() {
                        var e = this._getProductsData().length;
                        return a(0 === e ? "Portfolio|Add Product" : 1 === e ? "Portfolio|Manage Product" : "Portfolio|Manage Products")
                    },
                    _getRenderCategory: function(e) {
                        var t = "all" === e ? this.getMeta("currentCategory") : e;
                        return te.default.isCategoryIdExist(t) || (t = "all"), t
                    },
                    _loadProductsFromServer: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        this.setMeta("currentPage", t);
                        var i = this.props,
                            l = i.layoutConfig,
                            r = i.sectionId,
                            s = i.originSectionId;
                        if (!this.shouldUseDummy()) {
                            var u = r;
                            !$.default.hidePortfolioDummyData() && (0, Ce.getIsCRONewSectionSelector)() && s && (u = s);
                            var c = (null == l ? void 0 : l.get("productPerPage")) || 20,
                                d = X.default.getPortfolioProducts({
                                    pageId: $.default.getId(),
                                    category: n || this._getRenderCategory(this.dtProps.category),
                                    page: t,
                                    needRefresh: !0,
                                    per: c,
                                    filter: "visible",
                                    sectionId: u,
                                    reloadSectionProducts: a,
                                    originSectionId: s,
                                    from: o
                                });
                            return d ? d.fail((function() {
                                return (0, Le.getIsAISiteBuilderPreview)() && (0, Le.trackMixpanelEventViaParent)("AI Site Builder - Fetch Portfolios Failed", {
                                    sectionId: r,
                                    siteId: $.default.getId()
                                }), e.props.onConnectionFailed()
                            })) : void 0
                        }
                    },
                    _getCurrentPageNum: function() {
                        return this.getMeta("currentPage")
                    },
                    _loadNextPage: function() {
                        var e = this._getCurrentPageNum();
                        return this.setMeta("currentPage", e + 1), this._loadProductsFromServer(e + 1, void 0, !1)
                    },
                    _onClickEditor: function(e) {
                        J.default.openPortfolioManagerDialog(e)
                    },
                    toggleTooltip: function(e) {
                        this._getPortfolioSectionShowDummyData() && this.setState({
                            isShowPortfolioTooltip: e
                        })
                    },
                    publishOpenSideMenuTabPanel: function(e) {},
                    _changeCategory: function(e) {
                        var t, n = this,
                            a = function() {
                                return n.setMeta("nextCategory", e), n.setMeta("currentCategory", e), n._loadProductsFromServer(1, e)
                            };
                        "preview" === $.default.getSiteMode() && $.default.isOneClickPageInPreview() ? "all" === e ? a() : null !== (t = ae.default.getOneClickShareInfo()) && void 0 !== t && t.oneclickShareEnableContact ? (0, z.default)(".oneclick-contact-info-dialog", window.parent.document).show() : alert("在预览模式下无法查看商品详情，您可以在获取独立站后查看商品。") : a()
                    },
                    _changeToDetailMode: function() {
                        return this.setMeta("detailMode", !0)
                    },
                    _changeToNormalMode: function() {
                        return this.setMeta("detailMode", !1)
                    },
                    _getCategoryBarProps: function() {
                        return {
                            currentCategory: this.getMeta("nextCategory"),
                            changeCategory: this._changeCategory,
                            categories: te.default.getCategories()
                        }
                    },
                    _getWrapperProps: function() {
                        var e = this.props,
                            t = e.layoutConfig,
                            n = e.layout,
                            a = e.category,
                            o = e.isPreviewMode;
                        return {
                            products: this._getProductsData(),
                            pageId: $.default.getId(),
                            hasMultipleProducts: te.default.getProducts().length >= 2,
                            settings: te.default.getSettings(),
                            layout: n || "landscape-three",
                            category: a || "all",
                            changeToDetailMode: this._changeToDetailMode,
                            changeToNormalMode: this._changeToNormalMode,
                            layoutConfig: F.default.getIsNewStoreLayout() && t,
                            showDummyData: this._getPortfolioSectionShowDummyData(),
                            isPreviewMode: o
                        }
                    },
                    renderTooltipTilte: function() {
                        return P.default.createElement(P.default.Fragment, null, a("Editor|These sample products won’t be shown on your live site. And the samples will be removed when you add your own products."), u || (u = (0, v.default)("br", {})), a("Editor|Click here to add your own products!"))
                    },
                    _getSpecialStyleByBg: function() {
                        var e = (this.props.sectionStyleProps || {}).background1,
                            t = ie.default.getCustomColors().highlight1,
                            n = (void 0 === t ? null : t) || "#613C93",
                            a = Ie.getColorInfoByBgData(e),
                            o = a.bgColor;
                        if (a.isImageOrVedio) return "";
                        var i = {
                                categorizeTextColor: "#555555",
                                categorizeSelectedColor: n,
                                categoryBarBorderColor: "#555555"
                            },
                            l = Ie.getTextColorSettingsByBgColor(o, i);
                        return l.categorizeTextColor = new Me.default(l.categorizeTextColor).fade(.7).toRgba(), l.categoryBarBorderColor = new Me.default(l.categoryBarBorderColor).fade(.2).toRgba(), Re(l)
                    },
                    render: function() {
                        var e, t, n = this;
                        this.observeBinding(te.default.getBinding());
                        var o = this.props,
                            i = o.inSectionSelector,
                            l = o.layoutConfig,
                            r = o.sectionStyleProps,
                            s = o.buttonAlignmentClassName,
                            u = (this.state || {}).isShowPortfolioTooltip,
                            f = te.default.getPagination(this.getMeta("currentCategory")),
                            g = this.getMeta("detailMode"),
                            h = this._getEditBtnText(),
                            b = te.default.getLoadingState("product") || te.default.getLoadingState("settings") || te.default.getLoadingState("category"),
                            y = "persona" === $.default.getTheme().get("name") ? "" : "sixteen columns",
                            C = F.default.getFromSiteToApp(),
                            _ = (0, v.default)("div", {
                                className: "".concat(y, " s-ecommerce-empty-box s-common-status no-float")
                            }, void 0, c || (c = (0, v.default)("div", {
                                className: "tags"
                            }, void 0, (0, v.default)("div", {
                                className: "fa fa-folder-open"
                            }), (0, v.default)("div", {
                                className: "fa fa-folder-open"
                            }), (0, v.default)("div", {
                                className: "fa fa-folder-open"
                            }))), (0, v.default)("div", {
                                className: "text s-font-body"
                            }, void 0, a("Portfolio|No products in this product showcase now!"))),
                            S = (f || {}).totalPages;
                        if (this.shouldUseDummy()) {
                            var N = this._getDummyDataInSectionSelector(),
                                x = (null == l ? void 0 : l.get("productPerPage")) || 20;
                            S = Math.ceil(N.length / x)
                        }
                        var E = ie.default.getCanUseSectionImprovementsPart1(),
                            w = S >= 2 && (C ? (0, v.default)("div", {
                                className: (0, H.default)("s-ecommerce-pagination", (0, p.default)({}, s, E))
                            }, void 0, (0, v.default)(Ne.Link, {
                                className: "s-ecommerce-pagination-item s-font-body",
                                to: "/store/page?category=".concat(this.dtProps.category)
                            }, void 0, a("Ecommerce|View more"))) : (0, v.default)("div", {
                                className: (0, H.default)("sixteen columns s-ecommerce-pagination", (0, p.default)({}, s, E))
                            }, void 0, S > this._getCurrentPageNum() && (0, v.default)(ve.default, {
                                component: "span",
                                className: "s-common-button s-small-button s-font-body",
                                onClick: this._loadNextPage,
                                sectionStyleProps: r
                            }, void 0, (0, ke.translateBySiteLang)("Load More", a("Load More"))))),
                            T = this._getSpecialStyleByBg();
                        return P.default.createElement("div", {
                            className: "s-component s-ecommerce ".concat(T),
                            ref: "root"
                        }, (0, v.default)("div", {
                            className: "s-ecommerce-content"
                        }, void 0, te.default.getCategories().length > 0 && ("all" === this.dtProps.category || !te.default.isCategoryIdExist(this.dtProps.category)) && !i && (0, v.default)("div", {
                            className: "persona" === $.default.getTheme().get("name") ? "" : "sixteen columns",
                            style: {
                                display: g ? "none" : "block"
                            }
                        }, void 0, P.default.createElement(pe.default, (0, m.default)({
                            sbClass: this.props.sbClass
                        }, this._getCategoryBarProps()), (0, v.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, v.default)("div", {
                            className: (0, H.default)("s-component-overlay", {
                                visible: F.default.getInWeChat()
                            }),
                            onClick: function() {
                                return n._onClickEditor({
                                    tab: "category"
                                })
                            }
                        }, void 0, (0, v.default)("div", {
                            className: "overlay"
                        }, void 0, (0, v.default)("div", {
                            className: "center"
                        }, void 0, (0, v.default)("span", {}, void 0, a("Portfolio|Manage Categories")))))))), b && !i && (0, v.default)("div", {
                            className: (0, H.default)("s-loading-wrapper", {
                                "relative-wrapper": !this._getProductsData().length
                            })
                        }, void 0, d || (d = (0, v.default)("div", {
                            className: "s-loading"
                        }))), P.default.createElement(me.default, (0, m.default)({}, this._getWrapperProps(), {
                            isLoading: b,
                            EmptyComponent: _,
                            inSectionSelector: i,
                            PaginationComponent: w
                        }), !b && (0, v.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, v.default)("div", {
                            onMouseEnter: (0, I.default)(e = this.toggleTooltip).call(e, this, !0),
                            onMouseLeave: (0, I.default)(t = this.toggleTooltip).call(t, this, !1),
                            className: "s-component-overlay".concat(F.default.getInWeChat() ? " visible" : ""),
                            onClick: function() {
                                return n._onClickEditor({
                                    category: n.dtProps.category,
                                    tab: "product"
                                })
                            }
                        }, void 0, (0, v.default)("div", {
                            className: "overlay"
                        }, void 0, (0, v.default)("div", {
                            className: "center"
                        }, void 0, (0, v.default)(Ee.Tooltip, {
                            getPopupContainer: function(e) {
                                return null == e ? void 0 : e.parentNode
                            },
                            destroyTooltipOnHide: !0,
                            visible: u,
                            title: this.renderTooltipTilte()
                        }, void 0, (0, v.default)("span", {}, void 0, h)))))))))
                    }
                }),
                Fe = (0, xe.addOffline)(Ue);
            Ue.WaypointLazy = (0, R.default)(Fe), t.default = Fe, e.exports = t.default
        },
        17342: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r = n(487672),
                s = ((0, i.default)(r), n(812077)),
                u = (0, i.default)(s),
                c = n(205872),
                d = (0, i.default)(c),
                f = n(977766),
                m = (0, i.default)(f),
                g = n(729828),
                p = (0, i.default)(g),
                h = n(694473),
                v = (0, i.default)(h),
                b = n(678580),
                y = (0, i.default)(b),
                C = n(492762),
                _ = (0, i.default)(C),
                S = n(2991),
                N = (0, i.default)(S),
                x = n(703649),
                E = (0, i.default)(x),
                w = n(366757),
                T = (0, i.default)(w),
                k = n(294184),
                B = (0, i.default)(k),
                L = n(230139),
                I = (0, i.default)(L),
                O = n(792695),
                P = (0, i.default)(O),
                M = n(500134),
                A = n(43138),
                D = (0, i.default)(A),
                R = n(3325),
                U = ((0, i.default)(R), n(384887)),
                F = (0, i.default)(U),
                Z = n(792656),
                H = (0, i.default)(Z),
                V = n(978307),
                z = n(836766),
                G = n(255245),
                Y = n(845939),
                j = (0, i.default)(Y),
                W = n(357646),
                K = (0, i.default)(W),
                J = n(186613),
                q = (0, i.default)(J),
                X = n(149008),
                Q = (0, i.default)(X),
                $ = n(818166),
                ee = (0, i.default)($),
                te = n(234584),
                ne = (0, i.default)(te),
                ae = n(716505),
                oe = (0, i.default)(ae),
                ie = n(659370),
                le = ((0, i.default)(ie), n(389005)),
                re = ((0, i.default)(le), n(663749)),
                se = ((0, i.default)(re), n(595386)),
                ue = (0, i.default)(se),
                ce = n(370917),
                de = H.default.getTextColorSettingsByBgColor,
                fe = H.default.getColorInfoByBgData,
                me = (0, ue.default)("div", {
                    target: "css-aam7h90"
                })((function(e) {
                    var t, n, a, o, i = e.layout,
                        l = e.colors,
                        r = e.colorType,
                        s = e.columns,
                        u = e.isRtlLayout;
                    return (0, ce.css)(".s-kit-collapse > .s-kit-collapse-item{direction:", u ? "rtl" : "ltr", ";border-radius:", i !== V.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT ? "5px" : "0px", ";border:", i === V.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT && "1px solid ".concat(l.borderColor), ";> .s-kit-collapse-header{color:", l.textColor, ";.s-accordion-header{color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "inherit" : "", ";}i.arrow{color:", l.arrowColor || l.textColor, ";}background-color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? l.backgroundColor : "", ";opacity:", r === V.NEUTRAL_COLOR_KEY && "0.9", ";&:active{background-color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? l.backgroundColor : "", ";opacity:", r === V.NEUTRAL_COLOR_KEY && "0.9", "}}.s-kit-collapse-content{background-color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "#fff" : "", "\n        opacity:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "0.9!important" : "", "\n        border-color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "".concat(V.DEFAULT_BORDER_COLOR), "\n        border-width:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "0px 1px 1px 1px", "\n        border-style:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "solid", "}.s-kit-collapse-content .s-component.s-text{margin:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? V.DEFAULT_MARGIN : (0, m.default)(t = (0, m.default)(n = "10px ".concat(V.DEFAULT_MARGIN, " ")).call(n, V.DEFAULT_MARGIN, " ")).call(t, V.DEFAULT_MARGIN), ";}&.s-kit-collapse-item-active{.s-kit-collapse-header .s-component.s-text{margin:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? V.DEFAULT_MARGIN : (0, m.default)(a = (0, m.default)(o = "".concat(V.DEFAULT_MARGIN, " ")).call(o, V.DEFAULT_MARGIN, " 10px ")).call(a, V.DEFAULT_MARGIN), ";}.s-kit-collapse-header .arrow{top:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "0px" : "10px", ";}}}.s-accordion-item-separator{background-color:", l.borderColor, ";width:96%;height:1px;margin:", s === V.ACCORDION_COLUMNS.TWO ? "0 10px" : "0 20px", ";}.s-repeatable-item{margin-bottom:", i === V.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT ? "0px" : "20px", ";&:last-child{margin-bottom:0px;}}.s-kit-collapse-header{.s-component-editor-wrapper.empty .s-component-empty span{color:", i === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && l.textColor, ";}}.s-component-editor-wrapper.empty .s-component-empty .overlay span{text-align:", u ? "right" : "left", ";}@media (min-width:728px){.s-accordion-repeatable .s-accordion-column-wrapper{display:flex;.s-accordion-column{flex:1;&.column-one{margin-right:10px;}&.column-two{margin-left:10px;}}}}@media (max-width:727px){.s-accordion-column-wrapper{display:flex;flex-direction:", u ? "column-reverse" : "column", ";.s-accordion-column.column-two{margin-bottom:", u ? "20px" : "0px", ";}.s-accordion-column.column-one{margin-bottom:", u ? "0px" : "20px", ";}}}")
                }), "\n  ", (function(e) {
                    return e.isRtlLayout && (0, ce.css)(".s-accordion-repeatable{text-align:right;.s-repeatable-item .s-kit-collapse-item{.s-kit-collapse-header .arrow{left:15px;right:unset;}&:not(.s-kit-collapse-item-active) .arrow{transform:rotateY(180deg);}}}.s-component.s-text .s-component-editor-wrapper .s-component-overlay{position:absolute;right:0;}")
                })),
                ge = {
                    mixins: [P.default, (0, I.default)("editor")],
                    displayName: "Accordion",
                    getInitialState: function() {
                        return {
                            activeEditorId: null
                        }
                    },
                    mapStateToProps: function() {
                        return {
                            themeColors: ee.default.getCustomColors(),
                            textColorSettings: ee.default.getTextColorSettings(),
                            isS5Theme: ne.default.getIsS5Theme(),
                            faqTextColorAdjust: ne.default.getFaqTextColorAdjust(),
                            canUseNewFormat: ee.default.getCanUseSectionDefaultFormat()
                        }
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _getHeaderClassName: function() {
                        return "columns" + ("persona" === ne.default.getThemeName() ? " twelve offset-three" : " sixteen")
                    },
                    _getColors: function() {
                        var e, t = this._getLayoutProps().sectionLayoutConfig,
                            n = t.get("layout"),
                            a = this.getBackgroundProps("background1"),
                            o = this.props.faqTextColorAdjust,
                            i = V.DEFAULT_BORDER_COLOR,
                            l = a.textColor,
                            r = a.style.backgroundColor,
                            s = r && (0, p.default)(r).call(r, "#") && new F.default(r).getTextClass();
                        (l && l === V.DARK_CLASSNAME || !l && s === V.DARK_CLASSNAME) && (i = V.DARK_BORDER_COLOR);
                        var u = t.get("color"),
                            c = this.props,
                            d = c.themeColors,
                            f = c.textColorSettings,
                            m = c.isS5Theme,
                            g = (0, G.getLayoutColors)(d),
                            h = (0, v.default)(g).call(g, (function(e) {
                                return e.type === u
                            })) || g[0],
                            b = h.value,
                            C = h.type,
                            _ = this.getComponentProps("background1"),
                            S = fe(_),
                            N = S.bgColor,
                            x = S.isImageOrVedio,
                            E = o ? f.itemTitleColor : f.subtitleColor,
                            w = m ? E : "#B1B4B9",
                            T = m ? E : b;
                        ne.default.getRemainingTextColorFix() && (i = V.DARK_BORDER_COLOR);
                        var k = b;
                        if (C === V.NEUTRAL_COLOR_KEY) {
                            var B = V.NEUTRAL_COLOR_CONFIG[n] || V.NEUTRAL_COLOR_CONFIG.default;
                            T = m ? E : B.textColor, k = B.backgroundColor || k
                        }
                        if ((0, y.default)(e = [V.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT, V.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT]).call(e, n)) {
                            if (ne.default.getRemainingTextColorFix() && !x) {
                                var L = de(N, {
                                    arrowColor: w,
                                    textColor: T,
                                    borderColor: i
                                });
                                i = L.borderColor, w = L.arrowColor, T = L.textColor
                            }
                        } else if (n === V.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT) {
                            var I;
                            if (ne.default.getRemainingTextColorFix()) x || (o && (I = .5), k = new F.default(k).showOnBg(N, I).toHex()), w = de(k, {
                                arrowColor: w
                            }).arrowColor;
                            if (T = new F.default(k).getTextColor(), ne.default.getEnableTextColorFix()) {
                                var O = de(k);
                                T = o ? O.itemTitleColor : O.subtitleColor
                            }
                        }
                        return {
                            borderColor: i,
                            arrowColor: w,
                            textColor: T,
                            backgroundColor: k
                        }
                    },
                    _getRepeatableItemFunc: function() {
                        var e = this;
                        return {
                            onDeleteItem: function(t) {
                                var n = e.getRepeatableBinding("repeatable1").get();
                                e.getDefaultBinding().sub("components.repeatable1.list").set((0, _.default)(n).call(n, t, 1)), e.savePage()
                            },
                            isArranging: this.isState("editor")
                        }
                    },
                    _handleBlur: function() {
                        this.setState({
                            activeEditorId: null
                        })
                    },
                    _renderItem: function(e, t) {
                        var n = this,
                            o = this.props,
                            i = o.isS5Theme,
                            r = o.faqTextColorAdjust,
                            s = o.canUseNewFormat,
                            c = this.getRepeatableBinding("repeatable1"),
                            f = c.get().size,
                            m = this._getLayoutProps().sectionLayoutConfig,
                            g = m.get("layout"),
                            p = m.get("columns"),
                            h = this._getLayoutBinding(),
                            v = c.sub(t),
                            b = function(e) {
                                return v.get(["components", e, "value"])
                            },
                            y = b("text1"),
                            C = b("text2");
                        if (!y && !C) return null;
                        var _ = {
                                default: v,
                                layout: h
                            },
                            S = "";
                        s && (S = r ? "itemTitle" : "subTitle");
                        var N = T.default.createElement(K.default, (0, d.default)({
                            textType: "heading",
                            sizeType: S,
                            tagName: s ? z.TEXT_SIZE_TAG.SUBTITLE : "div",
                            defaultBoldText: s,
                            needEditButton: !0,
                            className: (0, B.default)("s-accordion-question-text", {
                                "is-focused": !1
                            }),
                            emptyMessage: a("Editor|Add question.")
                        }, this.getComponentProps("text1", v), {
                            onfocus: function() {
                                return n.setState({
                                    activeEditorId: v.get("id")
                                })
                            },
                            onblur: this._handleBlur
                        }));
                        if (s) {
                            var x = r ? "s-item-title" : "s-subtitle";
                            N = (0, u.default)("div", {
                                className: "".concat(x, " full-width s-accordion-header")
                            }, void 0, N)
                        }
                        var E = T.default.createElement(K.default, (0, d.default)({
                                textType: "body",
                                className: (0, B.default)("s-accordion-answer-text", {
                                    "s-item-text": i
                                }),
                                sizeType: "body",
                                emptyMessage: a("Editor|Add answer.")
                            }, this.getComponentProps("text2", v))),
                            w = D.default.isMobile() || p !== V.ACCORDION_COLUMNS.TWO ? {} : this._getRepeatableItemFunc();
                        return T.default.createElement(Q.default, (0, d.default)({
                            binding: _,
                            index: t,
                            key: v.get("id"),
                            className: "s-accordion-item-".concat(t),
                            forbiddenRemove: f <= V.MINIMUM_NUM
                        }, w, this._getRepeatableItemProps(c, t)), (0, u.default)(M.Collapse, {
                            disabled: !1,
                            className: "s-accordion-collapse-wrapper",
                            defaultActiveKey: [],
                            bordered: !1,
                            header: N
                        }, void 0, E), g === V.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT && (l || (l = (0, u.default)("div", {
                            className: "s-accordion-item-separator"
                        }))))
                    },
                    _renderRepeatable: function() {
                        var e, t = this.getRepeatableBinding("repeatable1"),
                            n = this.getComponentProps("repeatable1"),
                            a = (0, N.default)(e = t.get()).call(e, this._renderItem),
                            o = this._getLayoutProps().sectionLayoutConfig,
                            i = o.get("layout"),
                            l = o.get("columns"),
                            r = o.get("color"),
                            s = this._getColors(),
                            c = ne.default.getIsRtlLayout(),
                            f = Math.ceil(a.size / 2),
                            m = (0, E.default)(a).call(a, 0, f),
                            g = (0, E.default)(a).call(a, f);
                        if (c) {
                            var p = m;
                            m = g, g = p
                        }
                        var h = !D.default.isMobile() && l === V.ACCORDION_COLUMNS.TWO;
                        return (0, u.default)(me, {
                            colorType: r,
                            isRtlLayout: c,
                            layout: i,
                            columns: l,
                            colors: s
                        }, void 0, T.default.createElement(q.default, (0, d.default)({
                            connectedSortableWith: h ? ".s-accordion-column" : null,
                            canAddItems: a.size < V.MAXIMUM_NUM,
                            className: "s-accordion-repeatable columns sixteen layout-".concat(i),
                            inSectionSelector: this.props.inSectionSelector
                        }, n), !h && a, h && (0, u.default)("div", {
                            className: "s-accordion-column-wrapper"
                        }, void 0, (0, u.default)("div", {
                            className: "s-accordion-column column-one"
                        }, void 0, m), (0, u.default)("div", {
                            className: "s-accordion-column column-two"
                        }, void 0, g))))
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        var e, t, n = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0),
                            a = this._getHeaderClassName(),
                            o = (0, m.default)(e = (0, m.default)(t = "s-section s-accordion-section ".concat(this._getPaddingClass(), " ")).call(t, this._getContentAlignmentClass(), " ")).call(e, n.className),
                            i = this.props.inSectionSelector;
                        return T.default.createElement(oe.default, (0, d.default)({}, n, {
                            className: o
                        }), !1, (0, u.default)("div", {
                            className: "container"
                        }, "layout-content", (0, u.default)("div", {
                            className: a
                        }, void 0, (0, u.default)(j.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding(),
                            inSectionSelector: i
                        })), this._renderRepeatable()))
                    }
                };
            t.default = ge, e.exports = t.default
        },
        362589: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(812077),
                c = (0, s.default)(u),
                d = n(359036),
                f = (0, s.default)(d);
            n(241539), n(339714);
            var m = n(778914),
                g = (0, s.default)(m),
                p = n(686902),
                h = (0, s.default)(p),
                v = n(62462),
                b = (0, s.default)(v),
                y = n(492762),
                C = (0, s.default)(y),
                S = n(977766),
                N = (0, s.default)(S),
                x = n(2991),
                E = (0, s.default)(x),
                w = n(366757),
                T = (0, s.default)(w),
                k = n(45697),
                B = (0, s.default)(k),
                L = n(493658),
                I = (0, s.default)(L),
                O = n(461853),
                P = (0, s.default)(O),
                M = n(399069),
                A = (0, s.default)(M),
                D = n(918186),
                R = (0, s.default)(D),
                U = n(234584),
                F = (0, s.default)(U),
                Z = n(294184),
                H = (0, s.default)(Z),
                V = n(692381),
                z = (0, s.default)(V),
                G = n(699287),
                Y = (0, s.default)(G),
                j = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = W(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(43138));

            function W(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (W = function(e) {
                    return e ? n : t
                })(e)
            }
            var K = (0, n(11945).getIsEditorRtlLayout)(),
                J = A.default.createPageComponent({
                    mixins: [P.default.enableAfterUpdate()],
                    displayName: "BookingCategorySelector",
                    bobcatPropTypes: {
                        data: {
                            text: B.default.string,
                            category: B.default.oneOfType(B.default.string, B.default.number),
                            binding: B.default.object
                        }
                    },
                    getInitialState: function() {
                        return {
                            showCategoryDropDown: !1
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                category: "all"
                            }
                        }
                    },
                    componentWillReceiveProps: function(e) {
                        e.categories.length && !e.isCategoryIdExist(e.category) && this._onChangeCategory({
                            value: "all"
                        })
                    },
                    flattenOptions: function(e) {
                        var t, n = [],
                            a = {};
                        return (0, g.default)(e).call(e, (function(e) {
                            var t = e.parent_id;
                            if (t) a[t] ? a[t].push(e) : a[t] = [e];
                            else {
                                n.push(e);
                                var o = e.children;
                                null != o && o.length && n.push.apply(n, (0, f.default)(o))
                            }
                        })), (0, g.default)(t = (0, h.default)(a)).call(t, (function(e) {
                            var t, o = (0, b.default)(n).call(n, (function(t) {
                                    var n = t.id;
                                    return "".concat(n) === e
                                })),
                                i = a[e];
                            o > -1 ? (0, C.default)(n).apply(n, (0, N.default)(t = [o + 1, 0]).call(t, (0, f.default)(i))) : n.push.apply(n, (0, f.default)(i))
                        })), n
                    },
                    _createDropdownOptions: function() {
                        var e = this,
                            t = this.props.categories,
                            n = (0, E.default)(t).call(t, (function(t) {
                                var n = t.id,
                                    a = t.name,
                                    o = (t.level, "option");
                                return n.toString() === e.props.category.toString() && (o += " selected"), {
                                    value: n,
                                    label: (0, c.default)("div", {
                                        className: o
                                    }, void 0, a)
                                }
                            }));
                        return n.length && "all" !== this.props.category && n.unshift({
                            value: "all",
                            label: (0, c.default)("div", {
                                className: "option"
                            }, void 0, a("Ecommerce|All Categories"))
                        }), n
                    },
                    _getSelectedCategory: function(e) {
                        var t = this.props.categories,
                            n = R.default.findCategory(e, t);
                        return n ? n.name : a("Ecommerce|All Categories")
                    },
                    _onChangeCategory: function(e) {
                        this.updateData({
                            category: e.value
                        }), this.savePage(), this.setState({
                            showCategoryDropDown: !1
                        })
                    },
                    _displayDropDown: function(e) {
                        var t = this.state.showCategoryDropDown;
                        _.isFunction(e) && e(!this.state.showCategoryDropDown), this.setState({
                            showCategoryDropDown: !t
                        })
                    },
                    render: function() {
                        var e = this,
                            t = this.props,
                            n = t.isPreviewMode,
                            o = t.isAiMobileMode,
                            i = t.category,
                            l = this._getSelectedCategory(this.props.category);
                        this.observeBinding(F.default.getBinding().sub("booking.categories"));
                        var r = this._createDropdownOptions();
                        if (r.length < 1) return null;
                        var s = K ? "tooltip-right" : "tooltip-left";
                        if (n && !o) {
                            var u = this.props.renderCategoryButton,
                                d = this.state.showCategoryDropDown;
                            return (0, c.default)("div", {
                                className: (0, H.default)("s-s6-layout-editor ai-category-wrapper", {
                                    opened: d
                                })
                            }, void 0, (0, c.default)("div", {
                                className: "s-component-editor"
                            }, void 0, (0, c.default)(Y.default, {
                                offset: {
                                    top: 0
                                },
                                defaultContentHeight: 400,
                                buttonComponent: function(t) {
                                    return u({
                                        clickFn: function() {
                                            e.refs.dropdown.mounted = !1, e.refs.dropdown.handleMouseDown({
                                                button: 0,
                                                type: "mousedown",
                                                stopPropagation: function() {
                                                    return {}
                                                },
                                                preventDefault: function() {
                                                    return {}
                                                }
                                            }), e._displayDropDown(t)
                                        },
                                        showCategoryDropDown: d,
                                        currentCategory: l,
                                        disableIconHover: "all" === i
                                    })
                                }
                            }, void 0, (0, c.default)(z.default, {
                                onClick: this._displayDropDown,
                                style: {
                                    display: d ? "block" : "none"
                                }
                            }, void 0, T.default.createElement(I.default, {
                                ref: "dropdown",
                                options: r,
                                onChange: this._onChangeCategory,
                                value: l
                            })))))
                        }
                        return (0, c.default)("div", {
                            className: (0, H.default)("s-component s-category-selector", {
                                "ai-mobile-mode": o
                            })
                        }, void 0, (0, c.default)("div", {
                            className: "s-component-editor",
                            rel: j.isSmallScreen() ? "tooltip-top" : s,
                            title: a("Ecommerce|Select a category for this section."),
                            "data-original-title": a("Ecommerce|Select a category for this section.")
                        }, void 0, (0, c.default)(I.default, {
                            options: r,
                            value: this._getSelectedCategory(this.props.category),
                            onChange: this._onChangeCategory
                        })))
                    }
                });
            t.default = J, e.exports = t.default
        },
        915731: function(e, t, n) {
            "use strict";
            n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(205872),
                l = (0, o.default)(i),
                r = n(487672),
                s = ((0, o.default)(r), n(812077)),
                u = (0, o.default)(s);
            n(241539), n(339714);
            var c = n(277149),
                d = (0, o.default)(c),
                f = n(620116),
                m = (0, o.default)(f),
                g = n(977766),
                p = (0, o.default)(g),
                h = n(366757),
                v = (0, o.default)(h),
                b = n(230139),
                y = (0, o.default)(b),
                C = n(845939),
                _ = (0, o.default)(C),
                S = n(809875),
                N = (0, o.default)(S),
                x = n(234584),
                E = (0, o.default)(x),
                w = n(716505),
                T = (0, o.default)(w),
                k = n(436173),
                B = (0, o.default)(k),
                L = n(792695),
                I = (0, o.default)(L),
                O = n(659370),
                P = ((0, o.default)(O), n(389005)),
                M = ((0, o.default)(P), n(3325)),
                A = ((0, o.default)(M), n(430918)),
                D = ((0, o.default)(A), n(362589));
            (0, o.default)(D);
            var R = {
                mixins: [I.default, (0, y.default)("editor")],
                displayName: "Booking Section",
                _getLayoutOptions: function() {
                    return []
                },
                componentDidMount: function() {
                    this.getDefaultBinding().get("components.booking1.category") || (this.getDefaultBinding().set("components.booking1.type", "BookingComponent"), this.getDefaultBinding().set("components.booking1.text", null), this.getDefaultBinding().set("components.booking1.category", "all"))
                },
                renderBookingContainer: function() {
                    var e = this._getSectionId(),
                        t = this.isPreviewMode(),
                        n = this._getLayoutProps().sectionLayoutConfig,
                        a = (this._getSectionStyleProps() || {}).background1,
                        o = this.props,
                        i = o.inSectionSelector,
                        l = o.templateDummyData,
                        r = this.getRankedCategories();
                    return (0, u.default)("div", {
                        className: "container"
                    }, "layout-content", (0, u.default)("div", {
                        className: "columns sixteen"
                    }, void 0, (0, u.default)(_.default, {
                        canHide: !0,
                        section: this,
                        inSectionSelector: i,
                        binding: this.getDefaultBinding()
                    })), (0, u.default)("div", {
                        className: "s-ecommerce-container"
                    }, void 0, (0, u.default)(N.default, {
                        sectionId: e,
                        isPreviewMode: t,
                        layoutConfig: n,
                        sectionStyleProps: {
                            background1: a
                        },
                        inSectionSelector: i,
                        templateDummyData: l,
                        categories: r,
                        category: this.getCurrentCategory()
                    })))
                },
                shouldUseDummy: function() {
                    return !!this.props.templateDummyData || this.props.inSectionSelector && !this.props.isPreviewMode
                },
                renderBookingContainerWrapper: function() {
                    var e = this._getSectionId(),
                        t = this.isPreviewMode(),
                        n = E.default.getThemeName(),
                        a = this._getLayoutProps().sectionLayoutConfig,
                        o = this.getRankedCategories();
                    return "persona" === n ? (0, u.default)("div", {
                        className: "container"
                    }, "layout-content", (0, u.default)("div", {
                        className: "columns twelve offset-three"
                    }, void 0, (0, u.default)(_.default, {
                        canHide: !0,
                        section: this,
                        binding: this.getDefaultBinding()
                    })), (0, u.default)("div", {
                        className: "columns twelve offset-three"
                    }, void 0, (0, u.default)("div", {
                        className: "s-ecommerce-container"
                    }, void 0, (0, u.default)(N.default, {
                        sectionId: e,
                        isPreviewMode: t,
                        layoutConfig: a,
                        categories: o,
                        category: this.getCurrentCategory()
                    })))) : "perspective" === n ? (0, u.default)("div", {
                        className: "s-persp-container"
                    }, void 0, this.renderBookingContainer()) : this.renderBookingContainer()
                },
                isPreviewMode: function() {
                    return !1
                },
                _renderAIEditor: function() {
                    return !1
                },
                isCategoryIdExist: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "all" === t || null === t || (0, d.default)(e = E.default.getBookingEventCategories()).call(e, (function(e) {
                        return e.id.toString() === t.toString()
                    }))
                },
                getCurrentCategory: function() {
                    return this.getDefaultBinding().get("components.booking1.category") || "all"
                },
                getRankedCategories: function() {
                    var e = E.default.getBookingEventCategories();
                    return (0, m.default)(e).call(e, (function(e) {
                        return e.eventsCount > 0
                    }))
                },
                render: function() {
                    var e, t = this.getBackgroundProps("background1"),
                        n = (0, p.default)(e = "s-section s-store-section ".concat(this._getPaddingClass(), " ")).call(e, t.className);
                    return this.props.inSectionSelector, this.observeBinding(E.default.getBinding().sub("booking.categories")), this.getRankedCategories(), v.default.createElement(T.default, (0, l.default)({}, t, {
                        className: n
                    }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && v.default.createElement(B.default, this.getBackgroundProps("background1")), this.renderBookingContainerWrapper())
                }
            };
            t.default = R, e.exports = t.default
        },
        164385: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(205872),
                u = (0, r.default)(s),
                c = n(487672),
                d = ((0, r.default)(c), n(812077)),
                f = (0, r.default)(d),
                m = n(51942),
                g = (0, r.default)(m),
                p = n(977766),
                h = (0, r.default)(p),
                v = n(366757),
                b = (0, r.default)(v),
                y = n(230139),
                C = (0, r.default)(y),
                _ = n(234584),
                S = (0, r.default)(_),
                N = n(845939),
                x = (0, r.default)(N),
                E = n(927738),
                w = (0, r.default)(E),
                T = n(716505),
                k = (0, r.default)(T),
                B = n(792695),
                L = (0, r.default)(B),
                I = n(659370),
                O = ((0, r.default)(I), n(389005)),
                P = ((0, r.default)(O), n(3325)),
                M = ((0, r.default)(P), n(436173)),
                A = (0, r.default)(M),
                D = n(430918),
                R = ((0, r.default)(D), n(384887)),
                U = (0, r.default)(R),
                F = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = z(t);
                    if (n && n.has(e)) return n.get(e);
                    var l = {},
                        r = i && o;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? o(e, s) : null;
                            u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                        }
                    return l.default = e, n && n.set(e, l), l
                }(n(792656)),
                Z = n(442279),
                H = n(318592),
                V = n(628568);

            function z(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (z = function(e) {
                    return e ? n : t
                })(e)
            }
            var G = (0, Z.createSelector)([function(e) {
                    return e.bgColor
                }], (function(e) {
                    var t = F.getTextColorSettingsByBgColor(e, {
                            subLabelColor: "#8D949C",
                            optionColor: "#636972"
                        }),
                        n = new U.default(t.subLabelColor).fade(.65).toRgba(),
                        a = new U.default(t.optionColor).fade(.8).toRgba();
                    return (0, H.css)(".schema-form-file-upload-field .storage-limit,.schema-form-time-field .time-zone-tip,.s-kit-form-label .s-kit-sub-label{color:", n, ";}.s-custom-form-container\n        .s-email-form-fields-group\n        .s-email-form-field\n        label{color:", a, ";}")
                })),
                Y = {
                    mixins: [L.default, (0, C.default)("editor")],
                    displayName: "CustomForm Section",
                    _getLayoutOptions: function() {
                        return []
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    handleSaveServicesData: function(e) {
                        var t = this.getComponentBinding("email1"),
                            n = t && t.toJS(),
                            a = (0, g.default)({}, n, {
                                connectedFormServices: e
                            });
                        this.setData("components.email1", a), this.savePage()
                    },
                    handleSaveFormData: function(e) {
                        var t = e || {},
                            n = t.customForm,
                            a = t.customSetting || {},
                            o = a.formNameLabel,
                            i = a.openInNewTab,
                            l = a.redirectLink,
                            r = a.enableSpamVerification,
                            s = a.submitLabel,
                            u = a.thanksMessage,
                            c = a.recipient,
                            d = this.getComponentBinding("email1"),
                            f = d && d.toJS(),
                            m = (0, g.default)({}, f, {
                                recipient: c,
                                customForm: n,
                                openInNewTab: i,
                                redirectLink: l,
                                enableSpamVerification: r,
                                thanksMessage: u,
                                submit_label: s,
                                form_name_label: o
                            });
                        this.setData("components.email1", m), this.savePage()
                    },
                    renderSchemaForm: function(e) {
                        var t, n, a = this,
                            o = this._getSectionId(),
                            i = this.getComponentBinding(e),
                            l = {
                                background1: null === (t = this.getDefaultBinding()) || void 0 === t ? void 0 : t.get("components.background1"),
                                slideSettings: null === (n = this.getDefaultBinding()) || void 0 === n ? void 0 : n.get("components.slideSettings")
                            },
                            r = i && i.toJS(),
                            s = r.recipient,
                            u = r.customForm,
                            c = r.openInNewTab,
                            d = r.redirectLink,
                            m = r.enableSpamVerification,
                            g = r.submit_label,
                            p = r.thanksMessage,
                            h = r.form_name_label,
                            v = {
                                recipient: s,
                                openInNewTab: c,
                                redirectLink: d,
                                enableSpamVerification: m,
                                thanksMessage: p,
                                connectedFormServices: r.connectedFormServices,
                                submitLabel: g,
                                formNameLabel: h
                            };
                        return (0, f.default)(w.default, {
                            id: o,
                            sectionId: o,
                            recipient: s,
                            formSchema: u,
                            formSetting: v,
                            getButtonAlignment: S.default.getEnableFormAlignmentFix() ? function() {
                                var e = a.getDefaultBinding().sub("components");
                                return (0, V.getSectionTextAlignment)(e, ["text2", "text1"])
                            } : null,
                            onSaveForm: this.handleSaveFormData,
                            inSectionSelector: this.props.inSectionSelector,
                            onSaveFormServicesData: this.handleSaveServicesData,
                            sectionStyleProps: l
                        })
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    getTextStyleByBg: function(e) {
                        var t = F.getColorInfoByBgData(e),
                            n = t.bgColor;
                        return t.isImageOrVedio ? "" : G({
                            bgColor: n
                        })
                    },
                    render: function() {
                        var e, t = this.renderSchemaForm("email1"),
                            n = this.getBackgroundProps("background1"),
                            a = (0, h.default)(e = "s-section s-contact-section ".concat(this._getPaddingClass(), " ")).call(e, n.className),
                            o = this.getTextStyleByBg(n);
                        return b.default.createElement(k.default, (0, u.default)({}, n, {
                            className: a
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && !this.props.inSectionSelector && b.default.createElement(A.default, this.getBackgroundProps("background1")), (0, f.default)("div", {
                            className: "container ".concat(o)
                        }, "layout-content", (0, f.default)("div", {
                            className: "columns ".concat(this.getThemeFeature("narrowContactForm") ? "twelve offset-two" : "sixteen")
                        }, void 0, (0, f.default)("div", {
                            className: "s-email-form-container s-custom-form-container"
                        }, void 0, (0, f.default)(x.default, {
                            canHide: !0,
                            section: this,
                            inSectionSelector: this.props.inSectionSelector,
                            binding: this.getDefaultBinding()
                        }), t))))
                    }
                };
            t.default = Y, e.exports = t.default
        },
        152160: function(e, t, n) {
            "use strict";
            n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(487672),
                l = ((0, o.default)(i), n(812077)),
                r = (0, o.default)(l),
                s = n(205872),
                u = (0, o.default)(s),
                c = n(977766),
                d = (0, o.default)(c),
                f = n(694473),
                m = (0, o.default)(f),
                g = n(678580),
                p = (0, o.default)(g),
                h = n(2991),
                v = (0, o.default)(h),
                b = n(366757),
                y = (0, o.default)(b),
                C = n(973935),
                _ = (0, o.default)(C),
                S = n(223336),
                N = (0, o.default)(S),
                x = n(230139),
                E = (0, o.default)(x),
                w = n(234584),
                T = (0, o.default)(w),
                k = n(818166),
                B = (0, o.default)(k),
                L = n(183123),
                I = (0, o.default)(L),
                O = n(653114),
                P = n(294184),
                M = (0, o.default)(P),
                A = n(3325),
                D = ((0, o.default)(A), n(365940)),
                R = (0, o.default)(D),
                U = n(787066),
                F = (0, o.default)(U),
                Z = n(186613),
                H = (0, o.default)(Z),
                V = n(845939),
                z = (0, o.default)(V),
                G = n(716505),
                Y = (0, o.default)(G),
                j = n(149008),
                W = (0, o.default)(j),
                K = n(792695),
                J = (0, o.default)(K),
                q = n(659370),
                X = ((0, o.default)(q), n(389005)),
                Q = ((0, o.default)(X), n(288757)),
                $ = (0, o.default)(Q),
                ee = n(436173),
                te = (0, o.default)(ee),
                ne = n(790474),
                ae = ((0, o.default)(ne), n(881701)),
                oe = {
                    mixins: [J.default, (0, E.default)("editor")],
                    displayName: "Feature List Section",
                    _getLayouts: function() {
                        return O.FEATURE_LIST_LAYOUTS
                    },
                    _getLayoutName: function() {
                        var e, t, n, a = this._getLayoutProps().sectionLayoutConfig.toJS(),
                            o = a.showButton,
                            i = a.structure,
                            l = a.columns,
                            r = a.mediaSize,
                            s = a.mediaPosition;
                        switch (i) {
                            case "grid":
                                return (0, d.default)(e = "gride-".concat(l, "-")).call(e, o ? "button" : "text");
                            case "list":
                                return (0, d.default)(t = (0, d.default)(n = "list-".concat(r, "-")).call(n, o ? "button" : "text", "-")).call(t, s);
                            default:
                                return ""
                        }
                    },
                    _getLayoutStyleClass: function() {
                        var e = {},
                            t = this._getLayoutName(),
                            a = n(532408);
                        return "function" == typeof a.getLayoutStyleConfig(t) && (e = a.getLayoutStyleConfig(t)(this)), e
                    },
                    componentDidUpdate: function() {
                        var e, t;
                        "xs" === this.props.binding.get(["components", "slideSettings", "layout_config", "mediaSize"]) && ((0, m.default)(e = (0, N.default)(_.default.findDOMNode(this))).call(e, ".s-mh-nudge").css({
                            "padding-top": 0
                        }), (0, m.default)(t = (0, N.default)(_.default.findDOMNode(this))).call(t, ".s-item-media-wrapper").css({
                            "line-height": "",
                            "min-height": ""
                        }))
                    },
                    _getRootClass: function() {
                        var e = B.default.getTemplateVariation(),
                            t = ["dark", "default"];
                        return (0, ae.css)("&.s-bg-dark,", (0, p.default)(t).call(t, e) ? "&.s-bg-gray, &.s-bg-white," : "", "\n        &.s-section.s-bg-dark,&.s-bg-light-text,&.s-bg-image.s-bg-light-text{color:#40404c;.inner-container{.s-item-text,.s-item-title,.s-item-subtitle{color:#40404c;.s-subtitle{color:#40404c;}}}.s-button{color:#ffffff;}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark\n        ", (0, p.default)(t).call(t, e) ? ", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text" : "", "{.s-border-theme-color-1{border-color:#333;}}")
                    },
                    _getRepeatableClassName: function() {
                        var e = "";
                        return "persona" === T.default.getThemeName() && (e += "offset-three"), e
                    },
                    _verticalAlign: function() {
                        return this._getLayoutConfig().vertical_alignment
                    },
                    _renderRepeatable: function(e) {
                        var t, n, a, o = this,
                            i = T.default.getThemeName(),
                            l = this._getLayoutBinding(),
                            s = this._getLayoutStyleClass(),
                            c = this.getRepeatableBinding(e),
                            f = this._getLayoutProps().sectionLayoutConfig,
                            m = f.get("showButton"),
                            g = f.get("columns_mobile"),
                            h = this._getSectionSlideSettingValueByKey("structure"),
                            b = "list" === h,
                            C = this.props.inSectionSelector,
                            _ = s.repeatableClass;
                        "function" == typeof _ && (_ = _(this));
                        var S = this.getComponentProps("background1"),
                            N = (0, v.default)(t = c.get()).call(t, (function(e, t) {
                                return function(e, t, n) {
                                    var a = c.sub(t),
                                        d = {
                                            default: a,
                                            layout: l
                                        },
                                        f = o.sbHasContent("button1", {
                                            parentBinding: a
                                        }),
                                        v = o.sbHasContent("media1", {
                                            parentBinding: a
                                        }),
                                        C = o.sbAnyHasContent("text1 text2", {
                                            parentBinding: a
                                        }),
                                        _ = o.sbHasContent("button1", {
                                            parentBinding: a
                                        }),
                                        S = "editor" !== o.getComponentBinding("button1", a).get("_state") && !o.sbHasContent("button1", {
                                            parentBinding: a,
                                            showOnly: !1
                                        }),
                                        N = C || _ && s.buttonClass,
                                        x = s || {},
                                        E = x.itemClass,
                                        w = x.textClass,
                                        T = x.buttonClass,
                                        k = x.mediaClass,
                                        L = x.textInnerClass,
                                        P = x.innerItemClass,
                                        M = x.singleTextClass,
                                        A = x.singleMediaClass;
                                    if ("function" == typeof E && (E = E(o, t)), I.default.getCanUseNewMobileEditorPart3Feature() && (0, p.default)(O.availableMobileLayouts).call(O.availableMobileLayouts, h) && g && (E += " mobile-".concat(g, "-columns mobile-columns no-float")), "function" == typeof P && (P = P(o, t)), P += b ? " s-rva" : "", I.default.getCanUseVerticalAlignmentFeature() && b) {
                                        var D = o._verticalAlign();
                                        P += D ? " vertical-align-".concat(D) : ""
                                    }
                                    "function" == typeof k && (k = k(o, t)), "function" == typeof A && (A = A(o, t)), A = A || k, "function" == typeof w && (w = w(o, t)), "function" == typeof M && (M = M(o, t)), M = M || w, "function" == typeof T && (T = T(o, t)), "function" == typeof L && (L = L(o, t));
                                    var U = "s-item-media-wrapper ";
                                    U += N ? k : A, U += b ? " s-rva-media" : "", w = v ? w : M, w += b ? " s-rva-text" : "", "glow" === i && (w = w || "fourteen columns offset-one");
                                    var Z = "fresh" === i && "s-columns-section" === o._getSectionType();
                                    return y.default.createElement(W.default, (0, u.default)({
                                        className: E,
                                        index: t,
                                        binding: d
                                    }, o._getRepeatableItemProps(c, t)), (0, r.default)("div", {
                                        className: "clearfix"
                                    }, void 0, (0, r.default)("div", {
                                        className: P
                                    }, void 0, v && (0, r.default)("div", {
                                        className: U
                                    }, void 0, (0, r.default)("div", {
                                        className: "s-item-media-group"
                                    }, void 0, y.default.createElement(F.default, (0, u.default)({
                                        size: "large",
                                        isFreshColumn: Z
                                    }, o.getReduxComponentProps("media1", a), {
                                        assetType: "gallery",
                                        eagerLoad: !1,
                                        from: "image"
                                    })))), N && (0, r.default)("div", {
                                        className: w
                                    }, void 0, (0, r.default)($.default, {
                                        itemTitleBoldText: B.default.getCanUseSectionDefaultFormat(),
                                        deprecateItemSubtitle: !0,
                                        section: o,
                                        showItemSubtitle: !1,
                                        itemBinding: a,
                                        binding: a,
                                        inSectionSelector: o.props.inSectionSelector,
                                        className: v ? L : ""
                                    }, void 0, f && m && (0, r.default)("div", {
                                        className: T + (S ? " s-placeholder-button" : "")
                                    }, void 0, y.default.createElement(R.default, (0, u.default)({}, n, o.getComponentProps("button1", a), {
                                        backgroundUrl: n.url,
                                        inSectionSelector: o.props.inSectionSelector,
                                        smallButton: !0
                                    }))))))))
                                }(0, t, S)
                            })).toArray(),
                            x = this.getComponentProps("repeatable1"),
                            E = this._getRepeatableClassName();
                        return y.default.createElement(H.default, (0, u.default)({
                            className: (0, d.default)(n = (0, d.default)(a = "".concat(_, " ")).call(a, E, " ")).call(n, "editor" === c.get("_state") ? " s-arranging" : ""),
                            inSectionSelector: C
                        }, x), N)
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _getSectionSlideSettingValueByKey: function(e) {
                        var t = this._getLayoutProps().sectionLayoutConfig;
                        return t && t.get(e)
                    },
                    _getSectionType: function() {
                        var e = "",
                            t = this._getSectionSlideSettingValueByKey("layout");
                        switch (this._getSectionSlideSettingValueByKey("structure")) {
                            case "grid":
                                e = "s-columns-section list-layout-".concat(t);
                                break;
                            case "list":
                                e = "s-rows-section list-layout-".concat(t)
                        }
                        return e
                    },
                    _getHeaderClassName: function() {
                        return "columns" + ("persona" === T.default.getThemeName() ? " twelve offset-three" : " sixteen")
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        var e, t, n, a, o, i = this.props.inSectionSelector,
                            l = this._renderRepeatable("repeatable1"),
                            s = this.getBackgroundProps("background1"),
                            c = this._getRootClass(),
                            f = this._getHeaderClassName(),
                            m = (0, d.default)(e = (0, d.default)(t = (0, d.default)(n = (0, d.default)(a = (0, d.default)(o = "s-section s-new-media-section s-feature-list-section ".concat(this._getSectionType(), " ")).call(o, this._getPaddingClass(), " ")).call(a, this._getContentAlignmentClass(), " ")).call(n, c, " ")).call(t, s.className, " ")).call(e, I.default.getCanUseNewMobileEditorPart3Feature() ? "s-new-mobile-layout" : "");
                        return this._getSectionSlideSettingValueByKey("structure"), y.default.createElement(Y.default, (0, u.default)({}, s, {
                            className: m
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && y.default.createElement(te.default, this.getBackgroundProps("background1")), (0, r.default)("div", {
                            className: (0, M.default)("container", {
                                "ai-mode": this.isPreviewMode()
                            })
                        }, "layout-content", (0, r.default)("div", {
                            className: f
                        }, void 0, (0, r.default)(z.default, {
                            canHide: !0,
                            section: this,
                            inSectionSelector: i,
                            binding: this.getDefaultBinding()
                        })), l))
                    }
                };
            t.default = oe, e.exports = t.default
        },
        295089: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(487672),
                u = (0, r.default)(s),
                c = n(812077),
                d = (0, r.default)(c),
                f = n(205872),
                m = (0, r.default)(f);
            n(974916), n(115306), n(569600);
            var g = n(977766),
                p = (0, r.default)(g),
                h = n(678580),
                v = (0, r.default)(h),
                b = n(2991),
                y = (0, r.default)(b),
                C = n(620116),
                _ = (0, r.default)(C),
                S = n(366757),
                N = (0, r.default)(S),
                x = n(973935),
                E = ((0, r.default)(x), n(223336)),
                w = ((0, r.default)(E), n(496486)),
                T = (0, r.default)(w),
                k = n(294184),
                B = (0, r.default)(k),
                L = n(230139),
                I = (0, r.default)(L),
                O = n(234584),
                P = (0, r.default)(O),
                M = n(818166),
                A = (0, r.default)(M),
                D = n(183123),
                R = (0, r.default)(D),
                U = n(653114),
                F = n(384887),
                Z = (0, r.default)(F),
                H = n(3325),
                V = ((0, r.default)(H), n(365940)),
                z = (0, r.default)(V),
                G = n(787066),
                Y = (0, r.default)(G),
                j = n(43138),
                W = (0, r.default)(j),
                K = n(186613),
                J = (0, r.default)(K),
                q = n(845939),
                X = (0, r.default)(q),
                Q = n(716505),
                $ = (0, r.default)(Q),
                ee = n(149008),
                te = (0, r.default)(ee),
                ne = n(792695),
                ae = (0, r.default)(ne),
                oe = n(659370),
                ie = ((0, r.default)(oe), n(389005)),
                le = ((0, r.default)(ie), n(288757)),
                re = (0, r.default)(le),
                se = n(436173),
                ue = (0, r.default)(se),
                ce = n(870495),
                de = n(296992),
                fe = ((0, r.default)(de), n(229296)),
                me = (0, r.default)(fe),
                ge = n(881701),
                pe = n(628568),
                he = n(832313),
                ve = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = ye(t);
                    if (n && n.has(e)) return n.get(e);
                    var l = {},
                        r = i && o;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? o(e, s) : null;
                            u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                        }
                    return l.default = e, n && n.set(e, l), l
                }(n(792656)),
                be = n(836766);

            function ye(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (ye = function(e) {
                    return e ? n : t
                })(e)
            }
            var Ce = R.default.getCanUseNewMobileEditorPart3Feature(),
                _e = {
                    mixins: [ae.default, (0, I.default)("editor")],
                    displayName: "Feature List Section",
                    _getLayouts: function() {
                        return U.FEATURE_LIST_LAYOUTS
                    },
                    _getLayoutName: function() {
                        var e, t, n, a = this._getLayoutProps().sectionLayoutConfig.toJS(),
                            o = a.showButton,
                            i = a.structure,
                            l = a.columns,
                            r = a.mediaSize,
                            s = a.mediaPosition;
                        switch (i) {
                            case "grid":
                                return (0, p.default)(e = "gride-".concat(l, "-")).call(e, o ? "button" : "text");
                            case "list":
                                return (0, p.default)(t = (0, p.default)(n = "list-".concat(r, "-")).call(n, o ? "button" : "text", "-")).call(t, s);
                            default:
                                return ""
                        }
                    },
                    _getLayoutStyleClass: function() {
                        var e = {},
                            t = this._getLayoutName(),
                            a = n(532408);
                        return "function" == typeof a.getLayoutStyleConfig(t) && (e = a.getLayoutStyleConfig(t)(this)), e
                    },
                    _getRootClass: function() {
                        var e = A.default.getTemplateVariation(),
                            t = ["dark", "default"];
                        return (0, ge.css)("&.s-bg-dark,", (0, v.default)(t).call(t, e) ? "&.s-bg-gray, &.s-bg-white," : "", "\n        &.s-section.s-bg-dark,&.s-bg-light-text,&.s-bg-image.s-bg-light-text{color:#40404c;.inner-container{.s-item-text,.s-item-title,.s-item-subtitle{color:#40404c;.s-subtitle{color:#40404c;}}}.s-button{color:#ffffff;}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark\n        ", (0, v.default)(t).call(t, e) ? ", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text" : "", "{.s-border-theme-color-1{border-color:#333;}}")
                    },
                    _getRepeatableClassName: function() {
                        var e = "";
                        return "persona" === P.default.getThemeName() && (e += "offset-three"), e
                    },
                    _verticalAlign: function() {
                        return this._getLayoutConfig().vertical_alignment
                    },
                    getTextStyleByBg: function(e) {
                        var t = ve.getTextColorSettingsByBgColor(e);
                        return (0, ge.css)("&.s-repeatable.new-text-color-logic{.s-item-title{color:", t.itemTitleColor, ";}.s-item-subtitle{color:", t.itemSubtitleColor, ";}.s-item-text{color:", t.baseColor, ";}}")
                    },
                    _getLayoutClass: function(e) {
                        var t, n = e.toJS() || {};
                        n.card_color = this._getCardColor(), n.border_color = this._getBorderColor();
                        var a = this.getBackgroundProps("background1"),
                            o = (null === (t = U.LAYOUT_CONFIG_KEYS[n.structure]) || void 0 === t ? void 0 : (0, y.default)(t).call(t, (function(e) {
                                var t;
                                return (0, p.default)(t = "s-feature-list-item-".concat(e, "-")).call(t, n[e]).replace(/_/g, "-")
                            }))) || [];
                        if (n.border || (o = (0, _.default)(o).call(o, (function(e) {
                                return !(0, v.default)(e).call(e, "border")
                            }))), n.card) try {
                            var i = (0, ce.getDefaultColor)(a.style.backgroundColor),
                                l = new Z.default(n.card_color || i).luma() > .65 ? "dark-text" : "light-text";
                            if (o.push(l), P.default.getEnableTextColorFix()) {
                                o.push("new-text-color-logic");
                                var r = this.getTextStyleByBg(n.card_color || i);
                                o.push(r)
                            }
                        } catch (e) {
                            console.log(e)
                        } else o = (0, _.default)(o).call(o, (function(e) {
                            return !(0, v.default)(e).call(e, "card")
                        }));
                        if (o.push("sixteen"), o.push("columns"), P.default.getEnableMatchHeightForFeatureList() && "grid" === n.structure && "top" === n.grid_media_position) {
                            var s, u, c = !1,
                                d = a.videoHtml || a.videoUrl || a.dataSrc,
                                f = "transparent" === a.style.backgroundColor ? "#ffffff" : a.style.backgroundColor || "#ffffff",
                                m = n.card,
                                g = n.border && n.border_color,
                                h = (0, ce.getDefaultColor)(a.style.backgroundColor);
                            ((m || g) && d || m && (null === (s = n.card_color || h) || void 0 === s ? void 0 : s.toLowerCase()) !== (null == f ? void 0 : f.toLowerCase()) || g && (null === (u = n.border_color) || void 0 === u ? void 0 : u.toLowerCase()) !== (null == f ? void 0 : f.toLowerCase())) && (c = !0), c && o.push("match-height-wrapper")
                        }
                        return o.join(" ")
                    },
                    _handleAddBtn: function(e) {
                        return function() {
                            var t = e.sub("components"),
                                n = e.get("components.button1");
                            (0, fe.handleAddNewButtonGroupItem)(t, n)
                        }
                    },
                    _renderRepeatable: function(e) {
                        var t, n, a, o, i, l = this,
                            r = P.default.getThemeName(),
                            s = this._getLayoutBinding(),
                            c = this._getLayoutStyleClass(),
                            f = this.getRepeatableBinding(e),
                            g = this._getLayoutProps().sectionLayoutConfig,
                            h = g.get("showButton"),
                            b = g.get("columns_mobile"),
                            C = (g.get("columns"), g.get("border")),
                            _ = this._getSectionSlideSettingValueByKey("structure"),
                            S = this._getSectionSlideSettingValueByKey("horizontal_alignment"),
                            x = "list" === _,
                            E = this._getLayoutClass(g),
                            w = this.props.inSectionSelector,
                            k = c.repeatableClass;
                        "function" == typeof k && (k = k(this));
                        var L = (0, y.default)(t = f.get()).call(t, (function(e, t) {
                                var n, a = f.sub(t),
                                    o = {
                                        default: a,
                                        layout: s
                                    },
                                    i = l.sbHasContent("button1", {
                                        parentBinding: a
                                    }),
                                    g = l.sbHasContent("media1", {
                                        parentBinding: a
                                    }),
                                    y = l.sbAnyHasContent("text1 text2", {
                                        parentBinding: a
                                    }),
                                    E = l.sbHasContent("button1", {
                                        parentBinding: a
                                    }),
                                    k = "editor" !== l.getComponentBinding("button1", a).get("_state") && !l.sbHasContent("button1", {
                                        parentBinding: a,
                                        showOnly: !1
                                    }),
                                    L = l.getComponentBinding("button1", a).get("alignment"),
                                    I = y || E && c.buttonClass,
                                    O = c || {},
                                    M = O.itemClass,
                                    D = O.textClass,
                                    F = O.buttonClass,
                                    Z = O.mediaClass,
                                    H = O.textInnerClass,
                                    V = O.innerItemClass,
                                    G = O.singleTextClass,
                                    j = O.singleMediaClass;
                                if (W.default.isMobile() && (V += " is-mobile"), "function" == typeof M && (M = M(l, t)), Ce && (0, v.default)(U.availableMobileLayouts).call(U.availableMobileLayouts, _) && b && (M += " mobile-".concat(b, "-columns mobile-columns no-float")), "function" == typeof V && (V = V(l, t)), V += x ? " s-rva" : "", R.default.getCanUseVerticalAlignmentFeature() && x) {
                                    var K = l._verticalAlign();
                                    V += K ? " vertical-align-".concat(K) : ""
                                }
                                "function" == typeof Z && (Z = Z(l, t)), "function" == typeof j && (j = j(l, t)), j = j || Z, "function" == typeof D && (D = D(l, t)), C && D && (D = D.replaceAll(/omega|alpha/g, "")), "function" == typeof G && (G = G(l, t)), G = G || D, "function" == typeof F && (F = F(l, t)), "function" == typeof H && (H = H(l, t));
                                var J = "s-item-media-wrapper ";
                                J += I ? Z : j, J += x ? " s-rva-media" : "", D = g ? D : G, D += x ? " s-rva-text" : "", "glow" === r && (D = D || "fourteen columns offset-one"), "list" === _ && (D += " ten");
                                var q = "fresh" === r && "s-columns-section" === l._getSectionType(),
                                    X = a.get("components.buttons"),
                                    Q = !T.default.isUndefined(X) && X.getIn(["components", "block1", "items"]).size > 0,
                                    $ = R.default.getIsEnableRepeatedElements(),
                                    ee = function() {
                                        var e = a.sub("components"),
                                            t = (0, pe.getSectionTextAlignment)(e, ["text2", "text1"]);
                                        return t !== he.BUTTON_INIT_ALIGNMENT && t ? t : x ? P.default.getIsRtlLayout() ? "right" : "left" : S
                                    },
                                    ne = l.getComponentProps("background1");
                                return N.default.createElement(te.default, (0, m.default)({
                                    className: "".concat(M, " no-margin"),
                                    index: t,
                                    binding: o
                                }, l._getRepeatableItemProps(f, t)), (0, d.default)("div", {
                                    className: "clearfix"
                                }, void 0, (0, d.default)("div", {
                                    className: (0, p.default)(n = "".concat(V, " s-feature-structure-")).call(n, _, " s-feature-list-item-wrapper new-feature-list-item")
                                }, void 0, g && (0, d.default)("div", {
                                    className: J
                                }, void 0, (0, d.default)("div", {
                                    className: "s-item-media-group"
                                }, void 0, N.default.createElement(Y.default, (0, m.default)({
                                    size: "large",
                                    isFreshColumn: q
                                }, l.getReduxComponentProps("media1", a), {
                                    assetType: "gallery",
                                    eagerLoad: !1,
                                    from: "image"
                                })))), I && (0, d.default)("div", {
                                    className: "".concat(D, " s-item-text-wrapper")
                                }, void 0, (0, d.default)(re.default, {
                                    itemTitleBoldText: A.default.getCanUseSectionDefaultFormat(),
                                    deprecateItemSubtitle: !0,
                                    section: l,
                                    showItemSubtitle: !1,
                                    itemBinding: a,
                                    binding: a,
                                    inSectionSelector: l.props.inSectionSelector,
                                    className: g ? H : ""
                                }), i && h && (0, d.default)("div", {
                                    className: (0, B.default)(F, (0, u.default)({
                                        "s-placeholder-button": k,
                                        "ignore-alignment": "inherit" !== L
                                    }, H, g))
                                }, void 0, Q ? N.default.createElement(me.default, (0, m.default)({
                                    sectionName: "newFeatureList",
                                    inSectionSelector: w,
                                    enableRepeatedElement: $,
                                    background1: l.getComponentProps("background1"),
                                    enableInheritAlign: !0,
                                    getButtonAlignment: ee
                                }, l.getComponentProps("buttons", a))) : N.default.createElement(z.default, (0, m.default)({}, ne, l.getComponentProps("button1", a), {
                                    backgroundUrl: ne.url,
                                    inSectionSelector: l.props.inSectionSelector,
                                    onClickAdd: l._handleAddBtn(a),
                                    smallButton: !0,
                                    enableInheritAlign: !0,
                                    hasAddBtn: $,
                                    getButtonAlignment: ee
                                })))))))
                            })).toArray(),
                            I = this.getComponentProps("repeatable1"),
                            O = this._getRepeatableClassName();
                        return N.default.createElement(J.default, (0, m.default)({
                            className: (0, p.default)(n = (0, p.default)(a = (0, p.default)(o = (0, p.default)(i = "".concat(k, " ")).call(i, O, " ")).call(o, "editor" === f.get("_state") ? " s-arranging" : "", " ")).call(a, E, "  s-feature-list-item-")).call(n, _, "-wrapper"),
                            inSectionSelector: w
                        }, I), L)
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _getSectionSlideSettingValueByKey: function(e) {
                        var t = this._getLayoutProps().sectionLayoutConfig;
                        return t && t.get(e)
                    },
                    _getSectionType: function() {
                        var e = "",
                            t = this._getSectionSlideSettingValueByKey("layout");
                        switch (this._getSectionSlideSettingValueByKey("structure")) {
                            case "grid":
                                e = "s-columns-section list-layout-".concat(t);
                                break;
                            case "list":
                                e = "s-rows-section list-layout-".concat(t)
                        }
                        return e
                    },
                    _getHeaderClassName: function() {
                        return "columns" + ("persona" === P.default.getThemeName() ? " twelve offset-three" : " sixteen")
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    getIsAiMobileModeState: function() {
                        return !1
                    },
                    getEditMode: function() {
                        return n(684474).getEditMode()
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _getColorByType: function(e, t) {
                        var n = this._getLayoutProps().sectionLayoutConfig,
                            a = n.get(e),
                            o = n.get(t);
                        if (!o) return a;
                        var i = null == o ? void 0 : o.get("type");
                        if (i === be.TEXT_COLOR_TYPE.DEFAULT) {
                            var l = this.getBackgroundProps("background1");
                            a = (0, ce.getDefaultColor)(l.style.backgroundColor)
                        } else if (i === be.TEXT_COLOR_TYPE.PRE_COLOR) {
                            var r = null == o ? void 0 : o.get("preIndex");
                            if (r) {
                                var s, u = (A.default.getCustomColors() || {}).themePreColors;
                                a = (null === (s = (void 0 === u ? {} : u)[r]) || void 0 === s ? void 0 : s.value) || a
                            }
                        }
                        return a
                    },
                    _getCardColor: function() {
                        return this._getColorByType("card_color", "cardBackgroundSettings")
                    },
                    _getBorderColor: function() {
                        return this._getColorByType("border_color", "borderBackgroundSettings")
                    },
                    render: function() {
                        var e, t, n, a, o, i = this.props.inSectionSelector,
                            l = this._getLayoutProps().sectionLayoutConfig,
                            r = this._getCardColor(),
                            s = this._getBorderColor(),
                            u = this._getSectionSlideSettingValueByKey("structure"),
                            c = this._renderRepeatable("repeatable1"),
                            f = this.getBackgroundProps("background1"),
                            g = (0, ce.getDefaultColor)(f.style.backgroundColor),
                            h = this._getRootClass(),
                            b = this._getHeaderClassName(),
                            y = (0, p.default)(e = (0, p.default)(t = (0, p.default)(n = (0, p.default)(a = (0, p.default)(o = "s-section s-new-media-section s-new-feature-list-section ".concat(this._getSectionType(), " ")).call(o, this._getPaddingClass(), " ")).call(a, this._getContentAlignmentClass(), " ")).call(n, h, " ")).call(t, f.className, " ")).call(e, Ce ? "s-new-mobile-layout" : "");
                        return !this.getIsAiMobileModeState() || Ce && (0, v.default)(U.availableMobileLayouts).call(U.availableMobileLayouts, u), N.default.createElement($.default, (0, m.default)({}, f, {
                            className: y
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && N.default.createElement(ue.default, this.getBackgroundProps("background1")), (0, d.default)("div", {
                            className: (0, B.default)("container", {
                                "ai-mode": this.isPreviewMode()
                            }),
                            style: {
                                "--cardColor": r || g,
                                "--borderColor": s || g,
                                "--gridSpacing": (0, U.getGridItemSpacing)(l)
                            }
                        }, "layout-content", (0, d.default)("div", {
                            className: b
                        }, void 0, (0, d.default)(X.default, {
                            canHide: !0,
                            section: this,
                            inSectionSelector: i,
                            binding: this.getDefaultBinding()
                        })), c))
                    }
                };
            t.default = _e, e.exports = t.default
        },
        848388: function(e, t, n) {
            "use strict";
            n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368);
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(487672),
                l = ((0, o.default)(i), n(812077)),
                r = (0, o.default)(l),
                s = n(205872),
                u = (0, o.default)(s),
                c = n(977766),
                d = (0, o.default)(c),
                f = n(366757),
                m = (0, o.default)(f),
                g = n(294184),
                p = ((0, o.default)(g), n(230139)),
                h = (0, o.default)(p),
                v = n(792695),
                b = (0, o.default)(v),
                y = n(845939),
                C = (0, o.default)(y),
                _ = n(791409),
                S = (0, o.default)(_),
                N = n(818166),
                x = ((0, o.default)(N), n(234584)),
                E = (0, o.default)(x),
                w = n(3325),
                T = ((0, o.default)(w), n(716505)),
                k = (0, o.default)(T),
                B = n(659370),
                L = ((0, o.default)(B), n(389005)),
                I = ((0, o.default)(L), n(647851)),
                O = ((0, o.default)(I), n(595386)),
                P = (0, (0, o.default)(O).default)("div", {
                    target: "css-kf4zbv0"
                })("width:", (function(e) {
                    return e.styledWrapperWidth
                }), ";&.container .sixteen.columns{", (function(e) {
                    return ("auto" !== e.widthKey || "s5-theme" === e.themeName) && "\n      width: 100% !important;\n      margin-left: 0;\n      margin-right: 0;\n    "
                }), "\n    text-align:center;display:flex;flex-direction:column;}.s-component-new-gallery-list{margin:0 auto;display:inline-block;max-width:100%;width:", (function(e) {
                    return e.containerWidth
                }), ";}.s-new-gallery{width:", (function(e) {
                    return e.isFullWidth ? "100%" : "98%"
                }), ";}@media (max-width:728px){.s-component-new-gallery-list{width:100%;}}"),
                M = "100%",
                A = {
                    full: M,
                    wide: "1200px",
                    normal: "1000px",
                    small: "800px"
                },
                D = {
                    mixins: [b.default, (0, h.default)("editor")],
                    displayName: "New Gallery",
                    componentWillMount: function() {},
                    _getLayoutOptions: function() {
                        return []
                    },
                    _renderEditorComponents: function(e) {
                        return null
                    },
                    _updateGallerySources: function(e) {
                        this.getDefaultBinding().sub("components.gallery1.sources").set(e), this.savePage()
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        var e, t = this.props,
                            n = t.s5ClassProps,
                            a = t.themeName,
                            o = (n || {}).contentWidth,
                            i = void 0 === o ? "" : o,
                            l = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0),
                            s = (0, d.default)(e = "s-section s-gallery-section s-new-gallery-section ".concat(this._getPaddingClass(), " ")).call(e, l.className),
                            c = this.getDefaultBinding(),
                            f = c && c.get("components.slideSettings.layout_config"),
                            g = c && c.get("components.gallery1"),
                            p = null == f ? void 0 : f.get("width");
                        "s5-theme" === a && (p = "auto" === p ? "narrow" === i ? "small" : i : p);
                        var h = A[p] || M,
                            v = "profile" === E.default.getThemeName(),
                            b = v ? "unset" : "100% !important";
                        v && (h = A.small);
                        var y = this.props.inSectionSelector;
                        return m.default.createElement(k.default, (0, u.default)({}, l, {
                            className: s
                        }), !1, (0, r.default)("div", {
                            className: "s-new-gallery-wrapper"
                        }, void 0, (0, r.default)("div", {
                            className: "container s-gallery-title-container"
                        }, void 0, (0, r.default)("div", {
                            className: "columns sixteen"
                        }, void 0, (0, r.default)(C.default, {
                            className: "s-new-gallery-title",
                            section: this,
                            binding: c,
                            inSectionSelector: y
                        }))), (0, r.default)(P, {
                            className: "container",
                            styledWrapperWidth: b,
                            themeName: a,
                            widthKey: p,
                            containerWidth: h,
                            isFullWidth: h === M
                        }, void 0, (0, r.default)("div", {
                            className: "columns sixteen"
                        }, void 0, (0, r.default)(S.default, {
                            layout: f,
                            inSectionSelector: y,
                            updateGallery: this._updateGallerySources,
                            gallery: g,
                            id: g && g.get("id")
                        })))))
                    }
                };
            t.default = D, e.exports = t.default
        },
        259476: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = n(501068),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, c = n(726394),
                d = (0, s.default)(c),
                f = n(569198),
                m = (0, s.default)(f),
                g = n(705824),
                p = (0, s.default)(g),
                h = n(351379),
                v = (0, s.default)(h),
                b = n(900214),
                y = (0, s.default)(b),
                C = n(566380),
                _ = (0, s.default)(C),
                S = n(205872),
                N = (0, s.default)(S),
                x = n(812077),
                E = (0, s.default)(x),
                w = n(31238),
                T = (0, s.default)(w),
                k = n(694473),
                B = (0, s.default)(k),
                L = n(778914),
                I = ((0, s.default)(L), n(2991)),
                O = (0, s.default)(I),
                P = n(977766),
                M = (0, s.default)(P),
                A = n(277149),
                D = ((0, s.default)(A), n(410062)),
                R = ((0, s.default)(D), n(703649)),
                U = ((0, s.default)(R), n(54103)),
                F = (0, s.default)(U),
                Z = n(366757),
                H = (0, s.default)(Z),
                V = n(973935),
                z = (0, s.default)(V),
                G = n(496486),
                Y = (0, s.default)(G),
                j = n(223336),
                W = (0, s.default)(j),
                K = n(421522),
                J = (0, s.default)(K),
                q = n(45697),
                X = ((0, s.default)(q), n(176965)),
                Q = (0, s.default)(X),
                $ = n(294184),
                ee = (0, s.default)($),
                te = n(138138),
                ne = (0, s.default)(te),
                ae = n(234584),
                oe = (0, s.default)(ae),
                ie = n(818166),
                le = (0, s.default)(ie),
                re = n(156503),
                se = (0, s.default)(re),
                ue = n(186613),
                ce = (0, s.default)(ue),
                de = n(149008),
                fe = (0, s.default)(de),
                me = n(288757),
                ge = (0, s.default)(me),
                pe = n(716505),
                he = (0, s.default)(pe),
                ve = n(548273),
                be = (0, s.default)(ve),
                ye = n(79752),
                Ce = ((0, s.default)(ye), n(143393)),
                _e = (0, s.default)(Ce),
                Se = Ze(n(144726)),
                Ne = n(230139),
                xe = (0, s.default)(Ne),
                Ee = Ze(n(143268)),
                we = n(244467),
                Te = ((0, s.default)(we), n(389005)),
                ke = ((0, s.default)(Te), n(755802)),
                Be = ((0, s.default)(ke), n(936501)),
                Le = ((0, s.default)(Be), n(845939)),
                Ie = (0, s.default)(Le),
                Oe = n(43138),
                Pe = (0, s.default)(Oe),
                Me = n(792695),
                Ae = (0, s.default)(Me),
                De = n(219325),
                Re = (0, s.default)(De),
                Ue = n(104802);

            function Fe(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (Fe = function(e) {
                    return e ? n : t
                })(e)
            }

            function Ze(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" != typeof e) return {
                    default: e
                };
                var n = Fe(t);
                if (n && n.has(e)) return n.get(e);
                var o = {},
                    i = l && r;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = i ? r(e, s) : null;
                        u && (u.get || u.set) ? l(o, s, u) : o[s] = e[s]
                    }
                return o.default = e, n && n.set(e, o), o
            }
            var He = {
                    mixins: [Ae.default, (0, xe.default)("editor")],
                    displayName: "GridSection",
                    mapStateToProps: function(e) {
                        return {
                            s5NavOverlapsContent: "s5-theme" === oe.default.getThemeName() && (0, Ue.getNavOverlapsContent)(e),
                            s5NavHeight: se.default.get("navHeight")
                        }
                    },
                    componentWillMount: function() {
                        this._applyTitleGroupMigrationToData();
                        var e = oe.default.getThemeName(),
                            t = this._getLayoutVariation();
                        return this._getLayoutBinding().sub("layout_variation").set(Re.default.getDefaultLayoutKey(e, t))
                    },
                    componentDidMount: function() {
                        var e = this;
                        return this._debouncedUpdateJQueryMeasurements = Y.default.debounce((function() {
                            e._updateJQueryMeasurements(), e.forceUpdate()
                        }), 200), (0, W.default)(window).on("resize", this._debouncedUpdateJQueryMeasurements), this._updateJQueryMeasurements()
                    },
                    componentWillUnmount: function() {
                        return (0, W.default)(window).off("resize", this._debouncedUpdateJQueryMeasurements)
                    },
                    componentDidUpdate: function() {
                        this._updateJQueryMeasurements()
                    },
                    _updateJQueryMeasurements: function() {
                        if (0 === this.props.index) {
                            var e = (0, W.default)(".navigator").outerHeight() || (0, W.default)(".s-nav-inner").outerHeight() || 0,
                                t = (0, W.default)(z.default.findDOMNode(this)),
                                n = (0, T.default)((0, B.default)(t).call(t, ".s-persp-container").css("padding-top")) || (0, T.default)(t.css("padding-top")) || 0;
                            this.updateMeta({
                                navHeight: e,
                                paddingTop: n
                            })
                        }
                    },
                    _getNavHeight: function() {
                        return "s5-theme" === oe.default.getThemeName() ? this.props.s5NavHeight : this.getMeta("navHeight")
                    },
                    _applyTitleGroupMigrationToData: function() {
                        var e = this.getDefaultBinding().sub("components");
                        if ("Add subtitle" === e.get("text2").get("value")) {
                            var t = {
                                type: "RichText",
                                defaultValue: !0,
                                value: "",
                                backupValue: null,
                                version: null
                            };
                            e.set("text1", _e.default.fromJS(t)), e.set("text2", _e.default.fromJS(t))
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = oe.default.getThemeName();
                        return Re.default.getLayoutOptions(e)
                    },
                    _updateLayoutAndAdjustCellCount: function(e) {},
                    _onToggleImageLinkEditor: function(e) {},
                    _renderRepeatable: function(e) {
                        var t, n = this,
                            a = this.getComponentBinding(e),
                            o = this.getRepeatableBinding(e),
                            i = this.props.inSectionSelector,
                            l = this._getLayoutObject(),
                            r = this.props.index,
                            s = this._getNavHeight(),
                            u = this.getMeta("paddingTop"),
                            c = this.getComponentProps("repeatable1"),
                            d = (0, O.default)(t = a.get("list")).call(t, (function(e, t) {
                                var a = o.sub(t);
                                return (0, E.default)(Ve, {
                                    layoutVariation: n._getLayoutVariation(),
                                    layoutObj: l,
                                    binding: a,
                                    section: n,
                                    index: t,
                                    sectionIndex: r,
                                    navHeight: s,
                                    sectionPaddingTop: u,
                                    hasTitleGroup: n._hasTitleGroup(),
                                    repeatableItemProps: n._getRepeatableItemProps(o, t),
                                    getComponentProps: n.getComponentProps,
                                    getBackgroundProps: n.getBackgroundProps,
                                    isPreviewMode: n.isPreviewMode(),
                                    inSectionSelector: i,
                                    onToggleImageLinkEditor: function() {
                                        return null
                                    }
                                }, t)
                            })).toArray();
                        return l.useMagazineColumnDom && (d = [(0, E.default)("div", {
                            className: l.magazineColumnClass
                        }, 1, d[0], d[1]), (0, E.default)("div", {
                            className: l.magazineColumnClass
                        }, 2, d[2])]), H.default.createElement(ce.default, (0, N.default)({
                            className: "s-mh".concat("editor" === a.get("_state") ? " s-arranging" : ""),
                            style: {
                                margin: l.containerMargin,
                                padding: l.containerPadding
                            },
                            canAddItems: !1,
                            inSectionSelector: i
                        }, c), d)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderLayoutButton: function() {
                        return null
                    },
                    _hasTitleGroup: function() {
                        return this.sbAnyHasContent("text1 text2", {
                            showOnly: !1
                        })
                    },
                    _getSectionStyle: function() {
                        return {
                            paddingTop: this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(), this._hasTitleGroup(), this.props.index, this.props.s5NavOverlapsContent)
                        }
                    },
                    _getLayoutObject: function() {
                        var e = oe.default.getThemeName(),
                            t = this._getLayoutVariation(),
                            n = Pe.default.isSmallerThanDesktop();
                        return Re.default.getLayout(e, t, n)()
                    },
                    _adjustNumberOfCellsInData: function(e) {
                        return null
                    },
                    render: function() {
                        var e, t, n = this._getLayoutObject(),
                            a = oe.default.getThemeName(),
                            o = null;
                        (this._hasTitleGroup() || (n.contentWidthIsNormal, 0)) && (o = (0, E.default)("div", {}, "section-title", (0, E.default)(Ie.default, {
                            contentCheck: "repeatable1",
                            section: this,
                            inSectionSelector: this.props.inSectionSelector,
                            binding: this.getDefaultBinding(),
                            canHide: !0
                        })), n.isWideWithLeftAlignedHeading ? o = (0, E.default)("div", {
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40
                            }
                        }, "section-title", o) : "persona" !== a && "profile" !== a && (o = (0, E.default)("div", {}, "section-title", (0, E.default)("div", {
                            className: (0, ee.default)("container title-group-container", {
                                "title-group-container--no-title-content": !this._hasTitleGroup()
                            })
                        }, void 0, (0, E.default)("div", {
                            className: "sixteen columns"
                        }, void 0, o)))));
                        var i = "profile" === a || "persona" === a,
                            l = (0, E.default)("div", {}, void 0, i && o, (0, E.default)("div", {
                                className: "s-grid-section-repeatable-container ".concat(this.sbUniformTextAlignment("text1 text2"))
                            }, void 0, this._renderRepeatable("repeatable1")));
                        return "persona" === a && (l = (0, E.default)("div", {
                            className: "twelve columns offset-three"
                        }, void 0, (0, E.default)("div", {
                            className: "s-persona-content"
                        }, void 0, l))), n.needs16ColumnContainer && (l = (0, E.default)("div", {
                            className: "columns sixteen"
                        }, void 0, l)), l = [this._renderLayoutButton(), !i && o, (0, E.default)("div", {
                            className: "s-grid-section-content ".concat(this._getLayoutObject().containerClass)
                        }, "section-content", l)], n.needsPerspContainer && (l = (0, E.default)("div", {
                            className: "s-persp-container"
                        }, void 0, (0, E.default)("div", {
                            className: "s-persp-column"
                        }, void 0, l))), (0, E.default)("div", {
                            className: (0, M.default)(e = (0, M.default)(t = "s-section s-grid-section ".concat(this._getLayoutObject().sectionClass, " ")).call(t, this._hasTitleGroup() ? " _hasTitleGroup" : "", " ")).call(e, this._getPaddingClass()),
                            style: this._getSectionStyle()
                        }, void 0, (0, E.default)("div", {
                            style: {
                                width: "100%"
                            }
                        }, void 0, l))
                    }
                },
                Ve = J.default.decorate(Q.default.Mixin)(u = function(e) {
                    (0, v.default)(i, e);
                    var t, n, a = (t = i, n = function() {
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
                        if (n) {
                            var i = (0, _.default)(this).constructor;
                            e = o(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, y.default)(this, e)
                    });

                    function i(e) {
                        var t, n;
                        return (0, d.default)(this, i), (n = a.call(this, e))._updateMinHeight = Y.default.debounce((0, F.default)(t = n._updateMinHeight).call(t, (0, p.default)(n)), 200), n
                    }
                    return (0, m.default)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            this._updateMinHeight()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.inSectionSelector || this._updateMinHeight()
                        }
                    }, {
                        key: "getPropCompareFunctions",
                        value: function() {
                            return {
                                repeatableItemProps: function(e, t) {
                                    return (0, ne.default)(e, t)
                                }
                            }
                        }
                    }, {
                        key: "_updateMinHeight",
                        value: function() {
                            var e = (0, W.default)(z.default.findDOMNode(this)),
                                t = (0, B.default)(e).call(e, ".s-item-text-group").outerHeight(),
                                n = this.props.inSectionSelector ? 40 : 50,
                                a = Math.max(this.props.layoutObj.cellMinHeight, t + n);
                            e.css("min-height", "".concat(a, "px"))
                        }
                    }, {
                        key: "_getDefaultBackground",
                        value: function() {
                            return be.default.getSectionDataBySectionName("grid").content.components.repeatable1.components.background1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.layoutObj,
                                a = t.index,
                                o = t.sectionIndex,
                                i = t.navHeight,
                                l = t.sectionPaddingTop,
                                r = t.hasTitleGroup,
                                s = this.getDefaultBinding(),
                                u = s.sub("components.background1").toJS() || this._getDefaultBackground(),
                                c = Se.createImage(u).getUrl(),
                                d = u.linkUrl,
                                f = u.linkTarget,
                                m = Ee.imageHasContent(c),
                                g = n.cellClassName;
                            "editor" === s.sub("components.background1").get("_state") && (g += " _image-link-editor-open");
                            var p = n.getItemButtonStyles({
                                    cellIndex: a,
                                    sectionIndex: o,
                                    navHeight: i,
                                    sectionPaddingTop: l,
                                    hasTitleGroup: r,
                                    s5NavOverlapsContent: this.props.s5NavOverlapsContent
                                }),
                                h = this.props.getBackgroundProps("background1", s);
                            h.linkUrl = d, h.linkTarget = f;
                            var v = (0, E.default)("div", {
                                className: "s-grid-section-cell-content"
                            }, void 0, H.default.createElement(he.default, (0, N.default)({
                                key: a
                            }, h), null, (0, E.default)("div", {
                                className: "s-grid-section-item-text-group-wrapper",
                                style: {
                                    border: n.getItemBorder(m)
                                }
                            }, void 0, (0, E.default)(ge.default, {
                                itemTitleBoldText: le.default.getCanUseSectionDefaultFormat(),
                                section: this.props.section,
                                itemBinding: s,
                                binding: s,
                                showItemSubtitle: !1,
                                upperChildrenPosition: !0,
                                inSectionSelector: this.props.inSectionSelector,
                                onChange: this._updateMinHeight
                            }))));
                            return H.default.createElement(fe.default, (0, N.default)({
                                className: (0, M.default)(e = "".concat(g, " ")).call(e, n.isTopRightCell(a) ? "_top-right-cell" : ""),
                                style: {
                                    padding: n.cellPadding,
                                    minHeight: n.cellMinHeight
                                },
                                binding: s,
                                index: a,
                                alwaysShowButtons: !0,
                                moveButtonStyle: p.moveButton
                            }, this.props.repeatableItemProps), v)
                        }
                    }]), i
                }(H.default.Component)) || u;
            t.default = He, e.exports = t.default
        },
        254427: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(501068),
                r = n(752424),
                s = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var u, c = n(418777),
                d = ((0, s.default)(c), n(726394)),
                f = (0, s.default)(d),
                m = n(569198),
                g = (0, s.default)(m),
                p = n(705824),
                h = (0, s.default)(p),
                v = n(351379),
                b = (0, s.default)(v),
                y = n(900214),
                C = (0, s.default)(y),
                _ = n(566380),
                S = (0, s.default)(_),
                N = n(487672),
                x = ((0, s.default)(N), n(205872)),
                E = (0, s.default)(x),
                w = n(812077),
                T = (0, s.default)(w),
                k = n(778914),
                B = ((0, s.default)(k), n(31238)),
                L = (0, s.default)(B),
                I = n(694473),
                O = (0, s.default)(I),
                P = n(2991),
                M = (0, s.default)(P),
                A = n(977766),
                D = (0, s.default)(A),
                R = n(277149),
                U = ((0, s.default)(R), n(410062)),
                F = ((0, s.default)(U), n(703649)),
                Z = ((0, s.default)(F), n(54103)),
                H = (0, s.default)(Z),
                V = n(51942),
                z = ((0, s.default)(V), n(366757)),
                G = (0, s.default)(z),
                Y = n(973935),
                j = (0, s.default)(Y),
                W = n(496486),
                K = (0, s.default)(W),
                J = n(223336),
                q = (0, s.default)(J),
                X = n(881701),
                Q = n(421522),
                $ = (0, s.default)(Q),
                ee = n(45697),
                te = ((0, s.default)(ee), n(176965)),
                ne = (0, s.default)(te),
                ae = n(294184),
                oe = (0, s.default)(ae),
                ie = n(138138),
                le = (0, s.default)(ie),
                re = n(234584),
                se = (0, s.default)(re),
                ue = n(183123),
                ce = (0, s.default)(ue),
                de = n(818166),
                fe = (0, s.default)(de),
                me = n(156503),
                ge = (0, s.default)(me),
                pe = n(186613),
                he = (0, s.default)(pe),
                ve = n(149008),
                be = (0, s.default)(ve),
                ye = n(288757),
                Ce = (0, s.default)(ye),
                _e = n(716505),
                Se = (0, s.default)(_e),
                Ne = n(548273),
                xe = (0, s.default)(Ne),
                Ee = n(79752),
                we = ((0, s.default)(Ee), n(143393)),
                Te = (0, s.default)(we),
                ke = (rt(n(144726)), n(230139)),
                Be = (0, s.default)(ke),
                Le = (rt(n(143268)), n(928041)),
                Ie = ((0, s.default)(Le), n(389005)),
                Oe = ((0, s.default)(Ie), n(755802)),
                Pe = ((0, s.default)(Oe), n(936501)),
                Me = ((0, s.default)(Pe), n(845939)),
                Ae = (0, s.default)(Me),
                De = n(787066),
                Re = (0, s.default)(De),
                Ue = n(365940),
                Fe = (0, s.default)(Ue),
                Ze = n(21053),
                He = (0, s.default)(Ze),
                Ve = n(43138),
                ze = (0, s.default)(Ve),
                Ge = n(436173),
                Ye = (0, s.default)(Ge),
                je = n(3325),
                We = ((0, s.default)(je), n(792695)),
                Ke = (0, s.default)(We),
                Je = n(174494),
                qe = (0, s.default)(Je),
                Xe = n(104802),
                Qe = n(229296),
                $e = (0, s.default)(Qe),
                et = n(628568),
                tt = n(832313),
                nt = n(792656),
                at = n(384887),
                ot = (0, s.default)(at),
                it = n(442279);

            function lt(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    n = new r;
                return (lt = function(e) {
                    return e ? n : t
                })(e)
            }

            function rt(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" != typeof e) return {
                    default: e
                };
                var n = lt(t);
                if (n && n.has(e)) return n.get(e);
                var l = {},
                    r = i && o;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = r ? o(e, s) : null;
                        u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                    }
                return l.default = e, n && n.set(e, l), l
            }
            var st = "media",
                ut = "textGroup",
                ct = "button",
                dt = "EmailForm",
                ft = (0, it.createSelector)([function(e) {
                    return e.titleColor
                }, function(e) {
                    return e.itemTitleColor
                }, function(e) {
                    return e.baseColor
                }], (function(e, t, n) {
                    return (0, X.css)("&.s-grid-section-cell-content .s-grid-section-cell-container{.s-title{color:", e, ";}.s-item-title{color:", t, ";}.s-item-text{color:", n, ";}}")
                })),
                mt = {
                    mixins: [Ke.default, (0, Be.default)("editor")],
                    displayName: "GridSection",
                    mapStateToProps: function(e) {
                        return {
                            s5NavOverlapsContent: "s5-theme" === se.default.getThemeName() && (0, Xe.getNavOverlapsContent)(e),
                            s5NavHeight: ge.default.get("navHeight")
                        }
                    },
                    componentWillMount: function() {
                        this._applyTitleGroupMigrationToData();
                        var e = se.default.getThemeName(),
                            t = this._getLayoutVariation();
                        return this._getLayoutBinding().sub("layout_variation").set(qe.default.getDefaultLayoutKey(e, t))
                    },
                    _onToggleImageLinkEditor: function(e) {},
                    componentDidMount: function() {
                        var e = this;
                        return this._debouncedUpdateJQueryMeasurements = K.default.debounce((function() {
                            e._updateJQueryMeasurements(), e.forceUpdate()
                        }), 200), (0, q.default)(window).on("resize", this._debouncedUpdateJQueryMeasurements), this._updateJQueryMeasurements()
                    },
                    componentWillUnmount: function() {
                        return (0, q.default)(window).off("resize", this._debouncedUpdateJQueryMeasurements)
                    },
                    componentDidUpdate: function() {
                        this._updateJQueryMeasurements()
                    },
                    _computePaddingTop: function() {
                        var e = (0, q.default)(j.default.findDOMNode(this));
                        return (0, L.default)((0, O.default)(e).call(e, ".s-persp-container").css("padding-top")) || (0, L.default)(e.css("padding-top")) || 0
                    },
                    _updateJQueryMeasurements: K.default.debounce((function() {
                        if (0 === this.props.index) {
                            var e = (0, q.default)(".navigator").outerHeight() || (0, q.default)(".s-nav-inner").outerHeight() || 0,
                                t = this._computePaddingTop();
                            this.updateMeta({
                                navHeight: e,
                                paddingTop: t
                            })
                        }
                    }), 200),
                    _getNavHeight: function() {
                        return "s5-theme" === se.default.getThemeName() ? this.props.s5NavHeight : this.getMeta("navHeight")
                    },
                    _applyTitleGroupMigrationToData: function() {
                        var e = this.getDefaultBinding().sub("components");
                        if ("Add subtitle" === e.sub("text2").get("value")) {
                            var t = {
                                type: "RichText",
                                defaultValue: !0,
                                value: "",
                                backupValue: null,
                                version: null
                            };
                            e.set("text1", Te.default.fromJS(t)), e.set("text2", Te.default.fromJS(t))
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = se.default.getThemeName();
                        return qe.default.getLayoutOptions(e)
                    },
                    _updateLayoutAndAdjustCellCount: function(e) {},
                    _verticalAlign: function() {
                        return this._getLayoutConfig().vertical_alignment
                    },
                    paddingTopIsNone: function() {
                        return "none" === this._getPadding().top
                    },
                    _renderRepeatable: function(e) {
                        var t, n = this,
                            a = this.getComponentBinding(e),
                            o = this.getRepeatableBinding(e),
                            i = this.props.inSectionSelector,
                            l = this._getLayoutObject(),
                            r = this.props.index,
                            s = this._getNavHeight(),
                            u = this.getMeta("paddingTop"),
                            c = this.getComponentProps("repeatable1"),
                            d = (0, M.default)(t = a.get("list")).call(t, (function(e, t) {
                                var a = o.sub(t);
                                return (0, T.default)(gt, {
                                    aiEditorFn: n.props.aiEditorFn,
                                    layoutVariation: n._getLayoutVariation(),
                                    layoutProps: n._getLayoutProps(),
                                    verticalAlign: n._verticalAlign(),
                                    showTitle: n.showTitle(),
                                    layoutObj: l,
                                    binding: a,
                                    section: n,
                                    index: t,
                                    sectionIndex: r,
                                    navHeight: s,
                                    sectionPaddingTop: u,
                                    hasTitleGroup: n._hasTitleGroup(),
                                    repeatableItemProps: n._getRepeatableItemProps(o, t),
                                    getComponentProps: n.getComponentProps,
                                    getBackgroundProps: n.getBackgroundProps,
                                    getThemeFeature: n.getThemeFeature,
                                    hasBackgroundVideo: n.hasBackgroundVideo,
                                    isPreviewMode: n.isPreviewMode(),
                                    inSectionSelector: i,
                                    paddingTopIsNone: n.paddingTopIsNone(),
                                    onToggleImageLinkEditor: function() {
                                        return null
                                    }
                                }, t)
                            })).toArray();
                        return l.useMagazineColumnDom && (d = [(0, T.default)("div", {
                            className: l.magazineColumnClass
                        }, 1, d[0], d[1]), (0, T.default)("div", {
                            className: l.magazineColumnClass
                        }, 2, d[2])]), G.default.createElement(he.default, (0, E.default)({
                            className: "s-mh".concat("editor" === a.get("_state") ? " s-arranging" : ""),
                            style: {
                                margin: l.containerMargin,
                                padding: l.containerPadding
                            },
                            canAddItems: !1,
                            inSectionSelector: i,
                            sortableContainmentSelector: ".section-wrap"
                        }, c), d)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderLayoutButton: function() {
                        return null
                    },
                    _hasTitleGroup: function() {
                        return this.sbAnyHasContent("text1 text2", {
                            showOnly: !1
                        })
                    },
                    _getSectionStyle: function() {
                        return {
                            paddingTop: this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(), this._hasTitleGroup(), this.props.index, this.props.s5NavOverlapsContent, this.isPreviewMode(), this.paddingTopIsNone())
                        }
                    },
                    _getLayoutObject: function() {
                        var e = se.default.getThemeName(),
                            t = this._getLayoutVariation(),
                            n = ze.default.isSmallerThanDesktop();
                        return qe.default.getLayout(e, t, n)()
                    },
                    _adjustNumberOfCellsInData: function(e) {
                        return null
                    },
                    showTitle: function() {
                        return this._getLayoutConfig().showTitle
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        var e, t, n, a = this._getLayoutObject(),
                            o = se.default.getThemeName(),
                            i = null;
                        this.showTitle() && this._hasTitleGroup() && (i = (0, T.default)("div", {}, "section-title", (0, T.default)(Ae.default, {
                            contentCheck: "repeatable1",
                            section: this,
                            inSectionSelector: this.props.inSectionSelector,
                            binding: this.getDefaultBinding(),
                            canHide: !1
                        })), a.isWideWithLeftAlignedHeading ? i = (0, T.default)("div", {
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40
                            }
                        }, "section-title", i) : "persona" !== o && "profile" !== o && (i = (0, T.default)("div", {}, "section-title", (0, T.default)("div", {
                            className: (0, oe.default)("container title-group-container", {
                                "title-group-container--no-title-content": !this._hasTitleGroup()
                            })
                        }, void 0, (0, T.default)("div", {
                            className: "sixteen columns"
                        }, void 0, i)))));
                        var l = "profile" === o || "persona" === o,
                            r = (0, T.default)("div", {}, void 0, l && i, (0, T.default)("div", {
                                className: "s-grid-section-repeatable-container ".concat(this.sbUniformTextAlignment("text1 text2"))
                            }, void 0, this._renderRepeatable("repeatable1")));
                        return "persona" === o && (r = (0, T.default)("div", {
                            className: "twelve columns offset-three"
                        }, void 0, (0, T.default)("div", {
                            className: "s-persona-content"
                        }, void 0, r))), a.needs16ColumnContainer && (r = (0, T.default)("div", {
                            className: "columns sixteen"
                        }, void 0, r)), r = [this._renderLayoutButton(), !l && i, (0, T.default)("div", {
                            className: (0, D.default)(e = "s-grid-section-content s-new-grid-section-content ".concat(this._getLayoutObject().containerClass, " ")).call(e, this.isPreviewMode() ? "ai-mode" : "")
                        }, "section-content", r)], a.needsPerspContainer && (r = (0, T.default)("div", {
                            className: "s-persp-container"
                        }, void 0, (0, T.default)("div", {
                            className: "s-persp-column"
                        }, void 0, r))), (0, T.default)("div", {
                            className: (0, D.default)(t = (0, D.default)(n = "s-section s-grid-section s-new-grid-section ".concat(this._getLayoutObject().sectionClass, " ")).call(n, this._hasTitleGroup() ? " _hasTitleGroup" : "", " ")).call(t, this._getPaddingClass()),
                            style: this._getSectionStyle()
                        }, void 0, (0, T.default)("div", {
                            style: {
                                width: "100%"
                            }
                        }, void 0, r))
                    }
                },
                gt = $.default.decorate(ne.default.Mixin)(u = function(e) {
                    (0, b.default)(o, e);
                    var t, n, a = (t = o, n = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, S.default)(t);
                        if (n) {
                            var o = (0, S.default)(this).constructor;
                            e = l(a, arguments, o)
                        } else e = a.apply(this, arguments);
                        return (0, C.default)(this, e)
                    });

                    function o(e) {
                        var t, n, i, l;
                        return (0, f.default)(this, o), (l = a.call(this, e)).layoutSelector = null, l._updateMinHeight = K.default.debounce((0, H.default)(t = l._updateMinHeight).call(t, (0, h.default)(l)), 200), l.onAddImage = (0, H.default)(n = l.onAddImage).call(n, (0, h.default)(l)), l.onRemoveImageCallback = (0, H.default)(i = l.onRemoveImageCallback).call(i, (0, h.default)(l)), l
                    }
                    return (0, g.default)(o, [{
                        key: "componentDidMount",
                        value: function() {
                            this._updateMinHeight()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.inSectionSelector || this._updateMinHeight()
                        }
                    }, {
                        key: "getPropCompareFunctions",
                        value: function() {
                            return {
                                repeatableItemProps: function(e, t) {
                                    return (0, le.default)(e, t)
                                }
                            }
                        }
                    }, {
                        key: "_updateMinHeight",
                        value: function() {
                            var e = (0, q.default)(j.default.findDOMNode(this)),
                                t = (0, O.default)(e).call(e, ".s-grid-section-cell-wrapper").outerHeight(),
                                n = this.props.inSectionSelector ? 40 : 0,
                                a = Math.max(this.props.layoutObj.cellMinHeight, t + n);
                            e.outerWidth() < 600 ? (0, O.default)(e).call(e, ".s-grid-cell-email-form-wrapper").addClass("s-grid-cell-form-vertical") : (0, O.default)(e).call(e, ".s-grid-cell-email-form-wrapper").removeClass("s-grid-cell-form-vertical"), e.css("min-height", "".concat(a, "px"))
                        }
                    }, {
                        key: "closeOtherGridCellLayout",
                        value: function(e) {
                            var t;
                            (0, O.default)(t = e.parents(".s-new-grid-section-cell").siblings(".s-new-grid-section-cell")).call(t, ".s-component.s-layout.opened .status.clickable.title").click()
                        }
                    }, {
                        key: "_getDefaultBackground",
                        value: function() {
                            return xe.default.getSectionDataBySectionName("new_grid").content.components.repeatable1.components.background1
                        }
                    }, {
                        key: "onAddImage",
                        value: function() {}
                    }, {
                        key: "onRemoveImageCallback",
                        value: function() {}
                    }, {
                        key: "handleAddBtn",
                        value: function(e) {
                            return function() {
                                var t = e.sub("components"),
                                    n = e.get("components.button1");
                                (0, Qe.handleAddNewButtonGroupItem)(t, n)
                            }
                        }
                    }, {
                        key: "isOverlapping",
                        value: function(e, t) {
                            try {
                                var n = e.getBoundingClientRect(),
                                    a = t.getBoundingClientRect();
                                return !(n.right < a.left || n.left > a.right || n.bottom < a.top || n.top > a.bottom)
                            } catch (e) {
                                return !1
                            }
                        }
                    }, {
                        key: "handleFocusText",
                        value: function(e) {}
                    }, {
                        key: "handleBlurText",
                        value: function(e) {}
                    }, {
                        key: "renderGridCellComponent",
                        value: function(e, t, n) {
                            var a, o, i = this.props,
                                l = i.section,
                                r = i.inSectionSelector,
                                s = (i.isPreviewMode, this.getDefaultBinding()),
                                u = s.get("components.buttons"),
                                c = !K.default.isUndefined(u) && u.getIn(["components", "block1", "items"]).size > 0,
                                d = ce.default.getIsEnableRepeatedElements(),
                                f = se.default.getIsS5Theme(),
                                m = function() {
                                    var e = s.sub("components"),
                                        t = (0, et.getSectionTextAlignment)(e, ["text2", "text1"]);
                                    return t && t !== tt.BUTTON_INIT_ALIGNMENT ? t : "center"
                                },
                                g = l.getComponentProps("background1", s.sub());
                            return e === st ? (0, T.default)("div", {
                                className: "s-grid-cell-item s-grid-cell-media-wrapper"
                            }, void 0, G.default.createElement(Re.default, (0, E.default)({
                                enableWidth: !0
                            }, l.getReduxComponentProps("media1", s.sub()), {
                                onRemoveCallback: this.onRemoveImageCallback,
                                inSectionSelector: r,
                                iconLibComponents: "icon"
                            }))) : e === ut ? (0, T.default)(Ce.default, {
                                itemTitleBoldText: fe.default.getCanUseSectionDefaultFormat(),
                                className: "s-grid-cell-item",
                                section: l,
                                itemBinding: s,
                                binding: s,
                                showItemSubtitle: !1,
                                upperChildrenPosition: !0,
                                inSectionSelector: r,
                                onChange: this._updateMinHeight,
                                onBlur: (0, H.default)(a = this.handleBlurText).call(a, this),
                                onFocus: (0, H.default)(o = this.handleFocusText).call(o, this)
                            }) : e === ct ? (0, T.default)("div", {
                                className: (0, oe.default)("s-grid-cell-item s-grid-cell-button-wrapper", {
                                    "show-add-button": n
                                })
                            }, void 0, c ? G.default.createElement($e.default, (0, E.default)({
                                shouldInheritThemeColor: this.props.inSectionSelector,
                                inSectionSelector: r,
                                enableRepeatedElement: d,
                                enableInheritAlign: f,
                                getButtonAlignment: m,
                                background1: l.getComponentProps("background1", s.sub())
                            }, l.getComponentProps("buttons", s.sub()))) : G.default.createElement(Fe.default, (0, E.default)({
                                shouldInheritThemeColor: this.props.inSectionSelector,
                                inSectionSelector: r,
                                hasAddBtn: d,
                                enableInheritAlign: f,
                                getButtonAlignment: m,
                                onClickAdd: this.handleAddBtn(s)
                            }, g, l.getComponentProps("button1", s.sub()), {
                                backgroundUrl: g.url
                            })), !1) : e === dt ? (0, T.default)("div", {
                                className: "s-grid-cell-item s-grid-cell-email-form-wrapper"
                            }, void 0, G.default.createElement(He.default, (0, E.default)({
                                signup: !0
                            }, l.getComponentProps("email1", s.sub()), {
                                sessionId: s.get("id"),
                                getButtonAlignment: se.default.getEnableFormAlignmentFix() ? m : null,
                                componentsBinding: this.getDefaultBinding().get("components")
                            }))) : null
                        }
                    }, {
                        key: "_renderContent",
                        value: function(e) {
                            var t = this,
                                n = this.props,
                                a = n.section,
                                o = n.inSectionSelector,
                                i = n.getThemeFeature,
                                l = n.hasBackgroundVideo,
                                r = n.getBackgroundProps,
                                s = (n.isPreviewMode, n.layoutVariation),
                                u = (n.layoutObj.cellClassName, this.getDefaultBinding()),
                                c = u.sub("layout_config"),
                                d = c.get("layout_component"),
                                f = c.get("media_position"),
                                m = u.sub("components.button1").get("text"),
                                g = "button" === d,
                                p = "signup" === d,
                                h = "top" === f,
                                v = "bottom" === f,
                                b = "noImage" === f,
                                y = g && !m,
                                C = a.sbAnyHasContent("text1 text2", {
                                    parentBinding: u
                                }),
                                _ = a.sbHasContent("media1", {
                                    parentBinding: u
                                }),
                                S = a.sbHasContent("button1", {
                                    parentBinding: u
                                }),
                                N = [];
                            C && (N = [ut]), h && _ && N.unshift(st), g && S && N.push(ct), p && N.push(dt), v && _ && N.push(st);
                            var x = qe.default.parseLayoutVariation(s);
                            return x.magazineLayoutName, x.gridType, x.columns, G.default.createElement(G.default.Fragment, null, (0, T.default)("div", {
                                className: "s-grid-section-cell-wrapper s-col"
                            }, void 0, (0, M.default)(N).call(N, (function(e) {
                                return t.renderGridCellComponent(e, b, y)
                            })), !1), !i("disableBackgrounds") && l("background1", u) && !o && G.default.createElement(Ye.default, r("background1", u)))
                        }
                    }, {
                        key: "_getGridCellLayoutOptions",
                        value: function() {
                            return qe.default.getGridCellLayoutOptions()
                        }
                    }, {
                        key: "_getTextStyleByBg",
                        value: function() {
                            var e = this.getDefaultBinding().get("components.background1"),
                                t = (0, nt.getColorInfoByBgData)(e, {
                                    shouldInheritThemeColor: this.props.inSectionSelector
                                }),
                                n = t.bgColor,
                                a = t.isImageOrVedio,
                                o = fe.default.getTextColorSettings(),
                                i = {
                                    titleColor: o.titleColor,
                                    itemTitleColor: o.itemTitleColor,
                                    baseColor: o.baseColor
                                },
                                l = "";
                            if (se.default.getEnableTextColorFix() && n && !a) {
                                var r = K.default.mapValues(i, (function(e) {
                                    return new ot.default(n).isDarkColor() ? "#ffffff" : new ot.default(e).showOnBg(n).toHex()
                                }));
                                l = ft(r)
                            }
                            return {
                                style: l,
                                isImageOrVedio: a
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this.props,
                                a = n.layoutObj,
                                o = n.index,
                                i = n.sectionIndex,
                                l = n.navHeight,
                                r = n.sectionPaddingTop,
                                s = n.hasTitleGroup,
                                u = (n.layoutProps, n.verticalAlign),
                                c = n.showTitle,
                                d = n.paddingTopIsNone,
                                f = (n.isPreviewMode, this.getDefaultBinding()),
                                m = f.sub("components").get("background1") || this._getDefaultBackground(),
                                g = m.get("linkUrl") || m.linkUrl,
                                p = m.get("linkTarget") || m.linkTarget,
                                h = m.get("clickable") || !1,
                                v = a.cellClassName;
                            "editor" === f.sub("components.background1").get("_state") && (v += " _image-link-editor-open");
                            var b = a.getItemButtonStyles({
                                    cellIndex: o,
                                    sectionIndex: i,
                                    navHeight: l,
                                    sectionPaddingTop: r,
                                    hasTitleGroup: s,
                                    s5NavOverlapsContent: this.props.s5NavOverlapsContent,
                                    showTitle: c,
                                    paddingTopIsNone: d
                                }),
                                y = "";
                            ce.default.getCanUseVerticalAlignmentFeature() && (y = u ? "vertical-align-".concat(u) : "");
                            var C = this.props.getBackgroundProps("background1", f, !1, {
                                shouldInheritThemeColor: this.props.inSectionSelector
                            });
                            C.linkUrl = g, C.linkTarget = p, C.clickable = h;
                            var _ = (0, D.default)(e = "s-grid-section-cell-container ".concat(y, " ")).call(e, C.className),
                                S = this._getTextStyleByBg(),
                                N = S.style,
                                x = S.isImageOrVedio,
                                w = (0, T.default)("div", {
                                    className: (0, oe.default)("s-grid-section-cell-content", N, {
                                        "new-text-color-logic": se.default.getEnableTextColorFix() && !x
                                    })
                                }, void 0, G.default.createElement(Se.default, (0, E.default)({
                                    key: o,
                                    inSectionSelector: this.props.inSectionSelector
                                }, C, {
                                    className: _
                                }), null, this._renderContent(o)));
                            return G.default.createElement(be.default, (0, E.default)({
                                className: (0, D.default)(t = "".concat(v, " ")).call(t, a.isTopRightCell(o) ? "_top-right-cell" : ""),
                                style: {
                                    padding: a.cellPadding,
                                    minHeight: a.cellMinHeight
                                },
                                binding: f,
                                index: o,
                                alwaysShowButtons: !0,
                                moveButtonStyle: b.moveButton
                            }, this.props.repeatableItemProps), w)
                        }
                    }]), o
                }(G.default.Component)) || u;
            t.default = mt, e.exports = t.default
        },
        65671: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(812077),
                r = (0, i.default)(l),
                s = n(205872),
                u = (0, i.default)(s),
                c = n(487672),
                d = ((0, i.default)(c), n(977766)),
                f = (0, i.default)(d);
            n(974916), n(323123);
            var m = n(366757),
                g = (0, i.default)(m),
                p = n(496486),
                h = (0, i.default)(p),
                v = n(45697),
                b = (0, i.default)(v),
                y = n(845939),
                C = (0, i.default)(y),
                _ = n(328043),
                S = (0, i.default)(_),
                N = n(787066),
                x = (0, i.default)(N),
                E = n(365940),
                w = (0, i.default)(E),
                T = n(21053),
                k = (0, i.default)(T),
                B = n(183123),
                L = (0, i.default)(B),
                I = n(234584),
                O = (0, i.default)(I),
                P = n(818166),
                M = (0, i.default)(P),
                A = n(229296),
                D = (0, i.default)(A),
                R = n(294184),
                U = (0, i.default)(R),
                F = n(792695),
                Z = (0, i.default)(F),
                H = n(628568),
                V = {
                    mixins: [Z.default],
                    displayName: "NewHeroSection",
                    propTypes: {
                        eagerLoad: b.default.bool.isRequired,
                        binding: b.default.object.isRequired
                    },
                    componentWillMount: function() {
                        var e = O.default.getThemeName(),
                            t = this._getLayoutVariation(),
                            a = this.getDefaultBinding().get("template_name"),
                            o = n(299293);
                        this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e, t, a))
                    },
                    _getLayoutOptions: function() {
                        var e = O.default.getThemeName();
                        return n(299293).getLayoutOptions(e)
                    },
                    _getSectionType: function() {
                        return this._showImage() ? "s-hero-section" : "s-signup-section"
                    },
                    _getLayout: function() {
                        return h.default.camelCase(this._getLayoutVariation())
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _getLayoutObj: function() {
                        var e, t = n(299293),
                            a = this._getLayoutVariation(),
                            o = O.default.getThemeName();
                        return "function" == typeof t.getLayout(o, a) && (e = t.getLayout(o, a)(this)), e
                    },
                    _getType: function() {
                        return this._getLayoutObj().type
                    },
                    _showImage: function() {
                        return this._getLayoutObj().showImage
                    },
                    _verticalAlign: function() {
                        return this._getLayoutConfig().vertical_alignment
                    },
                    handleAddBtn: function() {
                        var e = this.getDefaultBinding().sub("components"),
                            t = this.getDefaultBinding().get("components.button1");
                        (0, A.handleAddNewButtonGroupItem)(e, t)
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _renderContent: function() {
                        var e, t, n = this,
                            a = this._getLayoutObj(),
                            o = "noImage" !== this._getLayoutVariation().split("-")[1],
                            i = a.layoutClass,
                            l = a.mediaClass,
                            s = a.textClass,
                            c = a.type,
                            d = a.showImage,
                            m = a.swapTitle,
                            p = "";
                        if (L.default.getCanUseVerticalAlignmentFeature() && o) {
                            var v = this._verticalAlign();
                            p = v ? " vertical-align-".concat(v) : ""
                        }
                        var b = "button" === c && this.sbHasContent("button1"),
                            y = "button" === c && this.sbHasContent("button1", {
                                showOnly: !1
                            }),
                            _ = "images" === c && this.sbAnyHasContent("image1 image2"),
                            N = this.sbAnyHasContent("media1"),
                            E = O.default.getThemeName(),
                            T = this.props.inSectionSelector,
                            B = L.default.getIsEnableRepeatedElements(),
                            I = this.getDefaultBinding().get("components.buttons"),
                            P = !h.default.isUndefined(I) && I.getIn(["components", "block1", "items"]).size > 0,
                            A = function() {
                                var e = n.getDefaultBinding().sub("components");
                                return (0, H.getSectionTextAlignment)(e, ["text2", "text1"])
                            },
                            R = A(),
                            F = "button" === c ? "" : (0, H.getButtonAlignmentStyle)(R),
                            Z = M.default.getCanUseSectionImprovementsPart1(),
                            V = O.default.getIsS5Theme(),
                            z = this.getComponentProps("background1");
                        return (0, r.default)("div", {
                            className: (0, U.default)((0, f.default)(e = "".concat(i)).call(e, p), {
                                "ai-mode": this.isPreviewMode()
                            })
                        }, void 0, (0, r.default)("div", {
                            className: l + (N ? "" : " empty-media")
                        }, void 0, d && g.default.createElement(x.default, (0, u.default)({
                            enableWidth: !0,
                            iconLibComponents: "icon"
                        }, this.getReduxComponentProps("media1")))), (0, r.default)("div", {
                            className: s
                        }, void 0, "glow" === E && (0, r.default)(C.default, {
                            section: this,
                            binding: this.getDefaultBinding(),
                            inSectionSelector: T,
                            subtitleOnTop: m
                        }), "glow" !== E && (0, r.default)(C.default, {
                            section: this,
                            binding: this.getDefaultBinding(),
                            inSectionSelector: T
                        }), (b || _ || "signup" === c) && (0, r.default)("div", {
                            className: (0, f.default)(t = "s-button-wrapper ".concat(y ? "" : "empty-button", " ")).call(t, Z ? F : this.sbUniformTextAlignment("text1 text2", {
                                parentBinding: this.getDefaultBinding()
                            }))
                        }, void 0, "button" === c && (0, r.default)("div", {
                            className: "s-button-group"
                        }, void 0, P ? g.default.createElement(D.default, (0, u.default)({
                            sectionName: "hero",
                            inSectionSelector: T,
                            enableRepeatedElement: B,
                            background1: z,
                            enableInheritAlign: V,
                            getButtonAlignment: A
                        }, this.getComponentProps("buttons"))) : g.default.createElement(w.default, (0, u.default)({
                            sectionName: "hero",
                            inSectionSelector: T,
                            hasAddBtn: B,
                            onClickAdd: this.handleAddBtn,
                            enableInheritAlign: V,
                            getButtonAlignment: A,
                            backgroundUrl: z.url
                        }, z, this.getComponentProps("button1")))), "signup" === c && (0, r.default)("div", {
                            className: "s-email-form-container"
                        }, void 0, g.default.createElement(k.default, (0, u.default)({
                            signup: !0,
                            sessionId: this._getSectionId(),
                            getButtonAlignment: O.default.getEnableFormAlignmentFix() ? A : null
                        }, this.getComponentProps("email1"), {
                            componentsBinding: this.getDefaultBinding().get("components")
                        }))), "images" === c && (0, r.default)("div", {
                            className: "s-image-wrapper"
                        }, void 0, (0, r.default)("div", {
                            className: "s-image-item"
                        }, void 0, g.default.createElement(S.default, (0, u.default)({
                            enableWidth: !0,
                            iconLibComponents: "icon"
                        }, this.getReduxComponentProps("image1"), {
                            eagerLoad: !0
                        }))), (0, r.default)("div", {
                            className: "s-image-item"
                        }, void 0, g.default.createElement(S.default, (0, u.default)({
                            enableWidth: !0,
                            iconLibComponents: "icon"
                        }, this.getReduxComponentProps("image2"), {
                            eagerLoad: !0
                        })))))))
                    },
                    render: function() {
                        return a("Editor|Hero"), a("Editor|Great for the top of a page. Add images, a button, or even a sign-up form."), this.getTemplate().apply(this)
                    }
                };
            t.default = V, e.exports = t.default
        },
        196771: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(487672),
                u = ((0, r.default)(s), n(812077)),
                c = (0, r.default)(u),
                d = n(205872),
                f = (0, r.default)(d),
                m = n(780122),
                g = (0, r.default)(m),
                p = ["_cName", "_state"],
                h = n(678580),
                v = (0, r.default)(h),
                b = n(703649),
                y = (0, r.default)(b),
                C = n(981643),
                _ = (0, r.default)(C),
                S = n(694473),
                N = (0, r.default)(S),
                x = n(2991),
                E = (0, r.default)(x);
            n(974916), n(323123), n(569600);
            var w = n(366757),
                T = (0, r.default)(w),
                k = n(973935),
                B = (0, r.default)(k),
                L = n(223336),
                I = (0, r.default)(L),
                O = n(234584),
                P = (0, r.default)(O),
                M = n(787066),
                A = (0, r.default)(M),
                D = n(365940),
                R = (0, r.default)(D),
                U = n(186613),
                F = (0, r.default)(U),
                Z = n(149008),
                H = (0, r.default)(Z),
                V = n(288757),
                z = (0, r.default)(V),
                G = n(453290),
                Y = n(792695),
                j = (0, r.default)(Y);

            function W(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (W = function(e) {
                    return e ? n : t
                })(e)
            }! function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" != typeof e) return {
                    default: e
                };
                var n = W(t);
                if (n && n.has(e)) return n.get(e);
                var l = {},
                    r = i && o;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = r ? o(e, s) : null;
                        u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                    }
                l.default = e, n && n.set(e, l)
            }(n(43138));
            var K = {
                mixins: [j.default],
                displayName: "NewMediaSection",
                componentWillMount: function() {
                    var e, t, a, o = P.default.getThemeName(),
                        i = this._getLayoutVariation(),
                        l = this.getDefaultBinding().get("template_name");
                    i.split("-").length >= 2 && ("perspective" === o ? (0, v.default)(e = ["mediaLeft", "mediaRight", "center"]).call(e, i.split("-")[0]) || (i = "center-".concat(i)) : (0, v.default)(t = ["mediaLeft", "mediaRight", "center"]).call(t, i.split("-")[0]) && (i = (0, y.default)(a = i.split("-")).call(a, 1).join("-")));
                    var r = n(7146),
                        s = "new_media" === l ? "" : l;
                    this._getLayoutBinding().sub("layout_variation").set(r.getDefaultLayoutKey(o, i, s))
                },
                componentDidUpdate: function(e, t) {
                    var n, a, o = this._getLayoutVariation(); - 1 === (0, _.default)(o).call(o, "col") && ((0, N.default)(n = (0, I.default)(B.default.findDOMNode(this))).call(n, ".s-mh-nudge").css({
                        "padding-top": 0
                    }), (0, N.default)(a = (0, I.default)(B.default.findDOMNode(this))).call(a, ".s-item-media-wrapper").css({
                        "line-height": "",
                        "min-height": ""
                    }))
                },
                isPreviewMode: function() {
                    return !1
                },
                _getLayoutOptions: function() {
                    var e = P.default.getThemeName();
                    return n(7146).getLayoutOptions(e)
                },
                _getSectionType: function() {
                    var e, t = 0;
                    switch ("perspective" === P.default.getThemeName() && (t = 1), this._getLayoutVariation().split("-")[t]) {
                        case "col":
                            e = "s-columns-section";
                            break;
                        case "row":
                            e = "s-rows-section";
                            break;
                        case "media":
                            e = "s-media-section"
                    }
                    return e
                },
                _getContentAlignmentClass: function() {
                    return this.sbUniformTextAlignment("text1 text2")
                },
                _getMobilePaddingClass: function() {
                    var e, t = 0;
                    "perspective" === P.default.getThemeName() && (t = 1);
                    var n = this._getLayoutVariation().split("-")[t];
                    return (0, v.default)(e = ["col", "row", "media"]).call(e, n) ? "mobile-no-padding" : ""
                },
                _getNewMobileLayoutClass: function() {
                    return this._getLayoutBinding().sub("layout_config").get("isNewMobileLayout") ? "s-media-new-mobile-layout" : ""
                },
                _getIsNewMedia: function() {
                    try {
                        return this._getLayoutBinding().sub("layout_config").get("isNewMedia")
                    } catch (e) {
                        return !1
                    }
                },
                _disableLayoutSelect: function() {
                    return "perspective" !== P.default.getThemeName()
                },
                _renderItemTextGroup: function(e) {
                    var t, n = e.textClass,
                        a = e.isBigMedia,
                        o = e.itemBinding,
                        i = e.mediaHasContentOrIsEditMode,
                        l = e.textInnerClass,
                        r = e.buttonClass,
                        s = e.showAddButton,
                        u = e.buttonHasContentOrIsEditMode,
                        d = this._getLayoutVariation(),
                        m = (0, v.default)(t = G.NewBigMediaLayout.NEW_LAYOUT).call(t, d),
                        h = this.getComponentProps("background1", this.getDefaultBinding()),
                        b = (h._cName, h._state, (0, g.default)(h, p));
                    return (0, c.default)("div", {
                        className: n
                    }, void 0, (0, c.default)(z.default, {
                        deprecateItemSubtitle: a,
                        section: this,
                        itemBinding: o,
                        binding: o,
                        isNewBigMedia: m,
                        inSectionSelector: this.props.inSectionSelector,
                        className: i ? l : ""
                    }, void 0, r && u && (0, c.default)("div", {
                        className: r + (s ? " s-placeholder-button" : "")
                    }, void 0, T.default.createElement(R.default, (0, f.default)({}, b, this.getComponentProps("button1", o), {
                        smallButton: !0,
                        inSectionSelector: this.props.inSectionSelector
                    })))))
                },
                _renderAIEditor: function() {
                    return !1
                },
                _renderRepeatable: function(e) {
                    var t, a, o = this,
                        i = n(7146),
                        l = P.default.getThemeName(),
                        r = this._getLayoutVariation(),
                        s = this.getComponentBinding(e),
                        u = this.getRepeatableBinding(e),
                        d = this._getLayoutBinding();
                    "function" == typeof i.getLayout(l, r) && (a = i.getLayout(l, r)(this));
                    var m = a.repeatableClass;
                    "function" == typeof m && (m = m(this));
                    var g = this.getComponentProps("repeatable1"),
                        p = 0;
                    "perspective" === (l = P.default.getThemeName()) && (p = 1);
                    var h = "media" === this._getLayoutVariation().split("-")[p],
                        b = "fresh" === l && "s-columns-section" === this._getSectionType(),
                        y = "s-rows-section" === this._getSectionType() && this.getThemeFeature("verticalAlignRowsSection"),
                        C = "media-top-text" === this._getLayoutVariation();
                    return T.default.createElement(F.default, (0, f.default)({
                        className: m + ("editor" === s.get("_state") ? " s-arranging" : ""),
                        inSectionSelector: this.props.inSectionSelector
                    }, g), (0, E.default)(t = s.get("list")).call(t, (function(e, t) {
                        var n, i = u.sub(t),
                            s = {
                                default: i,
                                layout: d
                            },
                            m = o.sbHasContent("media1", {
                                parentBinding: i
                            }),
                            g = o.sbAnyHasContent("text1 text2 text3", {
                                parentBinding: i
                            }),
                            p = o.sbHasContent("button1", {
                                parentBinding: i
                            }),
                            _ = "editor" !== o.getComponentBinding("button1", i).get("_state") && !o.sbHasContent("button1", {
                                parentBinding: i,
                                showOnly: !1
                            }),
                            S = g || p && a.buttonClass,
                            N = a,
                            x = N.itemClass,
                            E = N.textClass,
                            w = N.innerItemClass,
                            k = N.mediaClass,
                            B = N.singleMediaClass,
                            L = N.singleTextClass,
                            I = N.buttonClass,
                            O = N.textInnerClass;
                        "function" == typeof x && (x = x(o, t)), (o._getIsNewMedia() && "media-left-text" !== r || "media-center-text" === r && "persona" !== l) && (x += " columns sixteen"), (0, v.default)(n = G.NewBigMediaLayout.NEW_LAYOUT).call(n, r) && (E += " ".concat(r)), "function" == typeof w && (w = w(o, t)), w += y ? " s-rva" : "", "function" == typeof k && (k = k(o, t)), "function" == typeof B && (B = B(o, t)), B = B || k, "function" == typeof E && (E = E(o, t)), "function" == typeof L && (L = L(o, t)), L = L || E, "function" == typeof I && (I = I(o, t)), "function" == typeof O && (O = O(o, t));
                        var P = "s-item-media-wrapper ";
                        return "media-bottom-text" !== r && (P += S ? k : B), P += y ? " s-rva-media" : "", E = m ? E : L, E += y ? " s-rva-text" : "", "glow" === l && (E = E || "fourteen columns offset-one"), T.default.createElement(H.default, (0, f.default)({
                            className: x,
                            index: t,
                            binding: s
                        }, o._getRepeatableItemProps(u, t)), (0, c.default)("div", {
                            className: "clearfix"
                        }, void 0, (0, c.default)("div", {
                            className: "new-media-item-wrapper"
                        }, void 0, C && S && o._renderItemTextGroup({
                            textClass: E,
                            isBigMedia: h,
                            itemBinding: i,
                            buttonClass: I,
                            showAddButton: _,
                            textInnerClass: O,
                            mediaHasContentOrIsEditMode: m,
                            buttonHasContentOrIsEditMode: p
                        }), m && (0, c.default)("div", {
                            className: P
                        }, void 0, (0, c.default)("div", {
                            className: "s-item-media-group"
                        }, void 0, T.default.createElement(A.default, (0, f.default)({
                            size: h ? "large" : "medium",
                            isFreshColumn: b,
                            eagerLoad: !0
                        }, o.getReduxComponentProps("media1", i), {
                            assetType: "gallery"
                        })))), !C && S && o._renderItemTextGroup({
                            textClass: E,
                            isBigMedia: h,
                            itemBinding: i,
                            buttonClass: I,
                            showAddButton: _,
                            textInnerClass: O,
                            mediaHasContentOrIsEditMode: m,
                            buttonHasContentOrIsEditMode: p
                        }))))
                    })).toArray())
                },
                render: function() {
                    return this.getTemplate().apply(this)
                }
            };
            t.default = K, e.exports = t.default
        },
        119964: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(487672),
                u = ((0, r.default)(s), n(812077)),
                c = (0, r.default)(u),
                d = n(205872),
                f = (0, r.default)(d),
                m = n(981643),
                g = (0, r.default)(m),
                p = n(977766),
                h = (0, r.default)(p),
                v = n(2991),
                b = (0, r.default)(v),
                y = n(54103),
                C = (0, r.default)(y),
                _ = n(25843),
                S = (0, r.default)(_);
            n(974916), n(323123);
            var N = n(366757),
                x = (0, r.default)(N),
                E = n(234584),
                w = (0, r.default)(E),
                T = n(183123),
                k = (0, r.default)(T),
                B = n(818166),
                L = (0, r.default)(B),
                I = n(186613),
                O = (0, r.default)(I),
                P = n(149008),
                M = (0, r.default)(P),
                A = n(288757),
                D = (0, r.default)(A),
                R = n(365940),
                U = (0, r.default)(R),
                F = n(357646),
                Z = (0, r.default)(F),
                H = n(792695),
                V = (0, r.default)(H),
                z = n(229296),
                G = (0, r.default)(z),
                Y = n(496486),
                j = (0, r.default)(Y),
                W = n(628568),
                K = n(832313),
                J = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = ee(t);
                    if (n && n.has(e)) return n.get(e);
                    var l = {},
                        r = i && o;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? o(e, s) : null;
                            u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                        }
                    return l.default = e, n && n.set(e, l), l
                }(n(792656)),
                q = n(442279),
                X = n(384887),
                Q = (0, r.default)(X),
                $ = n(318592);

            function ee(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (ee = function(e) {
                    return e ? n : t
                })(e)
            }
            var te = (0, q.createSelector)([function(e) {
                    return e.wireframeColor
                }], (function(e) {
                    return (0, $.css)("&.s-section.s-info-section .s-info-box{border-color:", e, ";}")
                })),
                ne = {
                    mixins: [V.default],
                    displayName: "NewTextSection",
                    componentWillMount: function() {
                        n(766463).removeOldBackgroundForText(this);
                        var e = w.default.getThemeName(),
                            t = n(225425);
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, this._getLayoutVariation()))
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _getLayoutOptions: function() {
                        var e = w.default.getThemeName();
                        return n(225425).getLayoutOptions(e)
                    },
                    _getPositionLayout: function() {
                        return this._getLayoutVariation().split("-")[1]
                    },
                    _getTitleOverlayClass: function() {
                        var e = this._getLayoutVariation();
                        return this.sbAnyHasContent("text1 text2", {
                            showOnly: !1
                        }) ? -1 !== (0, g.default)(e).call(e, "overlay") ? "s-persp-overlay" : -1 !== (0, g.default)(e).call(e, "card") ? "s-persp-card" : void 0 : ""
                    },
                    _getSectionTypeName: function() {
                        switch (this._getLayoutVariation().split("-")[0]) {
                            case "text":
                                return "s-text-section";
                            case "box":
                                return "s-info-section"
                        }
                    },
                    _getSectionType: function() {
                        var e, t = "".concat(k.default.getCanUseNewMobileEditorPart3Feature() ? "s-new-mobile-layout" : ""),
                            n = L.default.getCanUseSectionImprovementsPart1() ? "section-item-horizontal-alignment" : "";
                        switch (this._getLayoutVariation().split("-")[0]) {
                            case "text":
                                return "s-text-section ".concat(t);
                            case "box":
                                return (0, h.default)(e = "s-info-section ".concat(t, " ")).call(e, n);
                            default:
                                return ""
                        }
                    },
                    _getTextStyleByBg: function() {
                        var e = this.getComponentProps("background1"),
                            t = J.getColorInfoByBgData(e),
                            n = t.bgColor,
                            a = "#000000",
                            o = "";
                        return t.isImageOrVedio || (a = new Q.default(n).isDarkColor() ? "rgba(255, 255, 255, 0.5)" : new Q.default(a).showOnBg(n).fade(.1).toRgba(), o = te({
                            wireframeColor: a
                        })), o
                    },
                    _renderButton: function(e) {
                        var t = e || {},
                            n = t.background1,
                            a = t.layoutObj,
                            o = t.itemBinding,
                            i = t.index,
                            l = (a || {}).buttonClass;
                        "function" == typeof l && (l = l(this, i));
                        var r = this.sbHasContent("button1", {
                                parentBinding: o
                            }),
                            s = k.default.getIsEnableRepeatedElements(),
                            u = o.get("components.buttons"),
                            d = !j.default.isUndefined(u) && u.getIn(["components", "block1", "items"]).size > 0,
                            m = !j.default.isUndefined(u) && this.sbHasContent("buttons", {
                                parentBinding: o
                            });
                        if (!l || !r || d && !m) return null;
                        var g;
                        g = d ? !this.sbHasContent("buttons", {
                            parentBinding: o,
                            showOnly: !1
                        }) : !this.sbHasContent("button1", {
                            parentBinding: o,
                            showOnly: !1
                        });
                        var p = w.default.getIsRtlLayout(),
                            h = w.default.getIsS5Theme(),
                            v = function() {
                                var e = o.sub("components"),
                                    t = (0, W.getSectionTextAlignment)(e, ["text2", "text1"]);
                                return t && t !== K.BUTTON_INIT_ALIGNMENT ? t : p ? "right" : "left"
                            };
                        return (0, c.default)("div", {
                            className: l + (g ? " s-placeholder-button" : "")
                        }, void 0, d ? x.default.createElement(G.default, (0, f.default)({
                            background1: n
                        }, this.getComponentProps("buttons", o), {
                            inSectionSelector: this.props.inSectionSelector,
                            enableRepeatedElement: s,
                            enableInheritAlign: h,
                            getButtonAlignment: v
                        })) : x.default.createElement(U.default, (0, f.default)({}, n, this.getComponentProps("button1", o), {
                            backgroundUrl: n.url,
                            smallButton: !0,
                            inSectionSelector: this.props.inSectionSelector,
                            hasAddBtn: s,
                            onClickAdd: function() {
                                (0, z.handleAddNewButtonGroupItem)(o.sub("components"), o.get("components.button1"))
                            },
                            enableInheritAlign: h,
                            getButtonAlignment: v
                        })))
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _renderPerspectiveText: function(e) {
                        var t, n = this,
                            a = this.getComponentBinding("repeatable1"),
                            o = this._getLayoutBinding(),
                            i = this.getRepeatableBinding("repeatable1"),
                            l = i.get().size,
                            r = this.getComponentProps("background1"),
                            s = function(t, a) {
                                if (a >= 3) return null;
                                var l = i.sub(a),
                                    s = e.itemClass,
                                    u = e.textClass;
                                return "function" == typeof s && (s = s(n, a)), "function" == typeof u && (u = u(n, a)), x.default.createElement(M.default, (0, f.default)({
                                    className: s,
                                    binding: {
                                        default: l,
                                        layout: o
                                    },
                                    index: a
                                }, n._getRepeatableItemProps(i, a)), (0, c.default)("div", {
                                    className: "s-persp-column"
                                }, void 0, (0, c.default)("div", {
                                    className: u
                                }, void 0, (0, c.default)("div", {
                                    className: "s-title-group"
                                }, void 0, n.sbHasContent("text1", {
                                    parentBinding: l
                                }) && (0, c.default)("div", {
                                    className: "s-title"
                                }, void 0, x.default.createElement(Z.default, (0, f.default)({
                                    tagName: "h2",
                                    textType: "title"
                                }, n.getComponentProps("text1", l)))), (0, c.default)("div", {
                                    className: "s-item-text"
                                }, void 0, x.default.createElement(Z.default, (0, f.default)({
                                    tagName: "div",
                                    textType: "body"
                                }, n.getComponentProps("text2", l)))), n._renderButton({
                                    background1: r,
                                    layoutObj: e,
                                    itemBinding: l,
                                    index: a
                                })))))
                            },
                            u = this.getComponentProps("repeatable1");
                        return x.default.createElement(O.default, (0, f.default)({
                            className: (l >= 3 ? "s-hide-add-button" : "") + ("editor" === a.get("_state") ? " s-arranging" : ""),
                            inSectionSelector: this.props.inSectionSelector
                        }, u), (0, b.default)(t = a.get("list")).call(t, (0, C.default)(s).call(s, this)).toArray())
                    },
                    _renderRepeatable: function(e) {
                        var t, a, o, i, l = this,
                            r = n(225425),
                            s = w.default.getThemeName(),
                            u = this._getLayoutProps().sectionLayoutConfig,
                            d = this.getComponentBinding(e),
                            m = this._getLayoutBinding(),
                            p = this.getRepeatableBinding(e),
                            h = u.get("columns_mobile"),
                            v = this.getComponentProps("background1");
                        "function" == typeof r.getLayout(s, this._getLayoutVariation()) && (i = r.getLayout(s, this._getLayoutVariation())(this));
                        var y = i.repeatableClass;
                        if ("perspective" === s && (0, g.default)(t = (0, S.default)(a = this._getSectionType()).call(a)).call(t, "s-text-section") > -1) return this._renderPerspectiveText(i);
                        var _ = function(e, t) {
                                var n = p.sub(t),
                                    a = {
                                        default: n,
                                        layout: m
                                    },
                                    o = i,
                                    r = o.itemClass,
                                    s = o.textClass;
                                return "function" == typeof r && (r = r(l, t)), "function" == typeof s && (s = s(l, t)), k.default.getCanUseNewMobileEditorPart3Feature() && h && (r += " mobile-".concat(h, "-columns mobile-columns")), x.default.createElement(M.default, (0, f.default)({
                                    index: t,
                                    className: r,
                                    binding: a
                                }, l._getRepeatableItemProps(p, t)), (0, c.default)("div", {
                                    className: s
                                }, void 0, (0, c.default)(D.default, {
                                    childrenClassName: "s-item-button-wrapper",
                                    itemTitleBoldText: L.default.getCanUseSectionDefaultFormat(),
                                    section: l,
                                    itemBinding: n,
                                    binding: n,
                                    inSectionSelector: l.props.inSectionSelector,
                                    showItemSubtitle: !1
                                }, void 0, l._renderButton({
                                    background1: v,
                                    layoutObj: i,
                                    itemBinding: n,
                                    index: t
                                }))))
                            },
                            N = this.getComponentProps("repeatable1");
                        return x.default.createElement(O.default, (0, f.default)({
                            className: y + ("editor" === d.get("_state") ? " s-arranging" : "")
                        }, N, {
                            inSectionSelector: this.props.inSectionSelector,
                            itemWrapperClassName: this.sbUniformTextAlignment("text1 text2")
                        }), (0, b.default)(o = p.get()).call(o, (0, C.default)(_).call(_, this)).toArray())
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = ne, e.exports = t.default
        },
        930742: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(812077),
                u = (0, r.default)(s),
                c = n(205872),
                d = (0, r.default)(c),
                f = n(487672),
                m = ((0, r.default)(f), n(678580)),
                g = (0, r.default)(m),
                p = n(981643),
                h = (0, r.default)(p),
                v = n(54103),
                b = (0, r.default)(v),
                y = n(366757),
                C = (0, r.default)(y),
                _ = n(143393),
                S = (0, r.default)(_),
                N = n(234584),
                x = (0, r.default)(N),
                E = n(365940),
                w = (0, r.default)(E),
                T = n(787066),
                k = (0, r.default)(T),
                B = n(183123),
                L = (0, r.default)(B),
                I = n(845939),
                O = (0, r.default)(I),
                P = n(229296),
                M = (0, r.default)(P),
                A = n(792695),
                D = (0, r.default)(A),
                R = (function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = U(t);
                    if (n && n.has(e)) return n.get(e);
                    var l = {},
                        r = i && o;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? o(e, s) : null;
                            u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                        }
                    l.default = e, n && n.set(e, l)
                }(n(496486)), n(628568));

            function U(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (U = function(e) {
                    return e ? n : t
                })(e)
            }
            var F = {
                mixins: [D.default],
                displayName: "NewTitleSection",
                componentWillMount: function() {
                    var e, t = x.default.getThemeName();
                    (0, g.default)(e = ["normal", "subBottom", "center", "skinny"]).call(e, this._getLayoutVariation()) && "perspective" !== t && this.getComponentBinding("media1").sub("image").merge(S.default.fromJS({
                        url: "",
                        s: null,
                        storage: null,
                        storageKey: null,
                        format: null
                    }));
                    var a = n(531974);
                    this._getLayoutBinding().sub("layout_variation").set(a.getDefaultLayoutKey(t, this._getLayoutVariation()))
                },
                isPreviewMode: function() {
                    return !1
                },
                _getLayoutOptions: function() {
                    var e = x.default.getThemeName();
                    return n(531974).getLayoutOptions(e)
                },
                _getSectionType: function() {
                    var e, t = x.default.getThemeName(),
                        n = "";
                    return -1 !== (0, h.default)(e = this._getLayoutVariation()).call(e, "full") && (n += "s-section-full "), "persona" === t && (n += "cta" === this.getDefaultBinding().get("template_name") ? "s-cta-section" : "s-title-section"), n
                },
                handleAddBtn: function() {
                    var e = this.getDefaultBinding().sub("components"),
                        t = this.getDefaultBinding().get("components.button1");
                    (0, P.handleAddNewButtonGroupItem)(e, t)
                },
                _renderAIEditor: function() {
                    return !1
                },
                getButtonAlignment: function(e) {
                    var t = ["text2", "text1"];
                    e || (t = ["text1", "text2"]);
                    var n = this.getDefaultBinding().sub("components");
                    return (0, R.getSectionTextAlignment)(n, t)
                },
                _renderContent: function() {
                    var e, t, a, o = this.props.inSectionSelector,
                        i = x.default.getThemeName(),
                        l = n(531974);
                    "function" == typeof l.getLayout(i, this._getLayoutVariation()) && (a = l.getLayout(i, this._getLayoutVariation())(this));
                    var r = a,
                        s = r.outerContainerClass,
                        c = r.innerContainerClass,
                        f = r.outerMediaClass,
                        m = r.innerMediaClass,
                        g = r.textClass,
                        p = r.buttonClass,
                        h = r.isSubtitleOnBottom,
                        v = this.getDefaultBinding().get("components.buttons"),
                        y = (null == v ? void 0 : v.getIn(["components", "block1", "items"]).size) > 0,
                        _ = this.sbHasContent("button1") || y,
                        S = this.sbHasContent("media1"),
                        N = "editor" !== this.getComponentBinding("button1").get("_state") && !this.sbHasContent("button1", {
                            showOnly: !1
                        }),
                        E = "editor" !== this.getComponentBinding("media1").get("_state") && !this.sbHasContent("media1", {
                            showOnly: !1
                        }),
                        T = L.default.getIsEnableRepeatedElements(),
                        B = x.default.getIsS5Theme(),
                        I = this.getComponentProps("background1");
                    return (0, u.default)("div", {
                        className: s,
                        style: {
                            zIndex: 3
                        }
                    }, void 0, (0, u.default)("div", {
                        className: c
                    }, void 0, S && f && (0, u.default)("div", {
                        className: f
                    }, void 0, (0, u.default)("div", {
                        className: m
                    }, void 0, C.default.createElement(k.default, (0, d.default)({}, this.getReduxComponentProps("media1"), {
                        showBlackButton: !0
                    })))), S && !f && (0, u.default)("div", {
                        className: m + (E ? " s-placeholder-button" : "")
                    }, void 0, C.default.createElement(k.default, (0, d.default)({}, this.getReduxComponentProps("media1"), {
                        showBlackButton: !0
                    }))), (0, u.default)(O.default, {
                        className: g,
                        contentCheck: "button1",
                        subtitleOnTop: !h,
                        section: this,
                        inSectionSelector: this.props.inSectionSelector,
                        binding: this.getDefaultBinding()
                    }), _ && (0, u.default)("div", {
                        className: p + (N ? " s-placeholder-button" : "")
                    }, void 0, y ? C.default.createElement(M.default, (0, d.default)({
                        sectionName: "cta",
                        inSectionSelector: o,
                        enableRepeatedElement: T,
                        background1: I,
                        getButtonAlignment: (0, b.default)(e = this.getButtonAlignment).call(e, this, h),
                        enableInheritAlign: B
                    }, this.getComponentProps("buttons"))) : C.default.createElement(w.default, (0, d.default)({
                        sectionName: "cta",
                        inSectionSelector: o,
                        hasAddBtn: T,
                        onClickAdd: this.handleAddBtn,
                        getButtonAlignment: (0, b.default)(t = this.getButtonAlignment).call(t, this, h),
                        enableInheritAlign: B,
                        backgroundUrl: I.url
                    }, I, this.getComponentProps("button1"))))))
                },
                render: function() {
                    return this.getTemplate().apply(this)
                }
            };
            t.default = F, e.exports = t.default
        },
        984806: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = (n(686902), n(14310), n(620116), n(834074)),
                l = (n(778914), n(239649), n(820368), n(663978)),
                r = n(752424),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, c = n(487672),
                d = ((0, s.default)(c), n(205872)),
                f = (0, s.default)(d),
                m = n(812077),
                g = (0, s.default)(m),
                p = n(778914),
                h = (0, s.default)(p),
                v = n(686902),
                b = (0, s.default)(v),
                y = n(981643),
                C = (0, s.default)(y),
                _ = n(678580),
                S = (0, s.default)(_),
                N = n(977766),
                x = (0, s.default)(N),
                E = n(51942),
                w = (0, s.default)(E),
                T = n(2991),
                k = (0, s.default)(T),
                B = n(54103),
                L = (0, s.default)(B),
                I = n(366757),
                O = (0, s.default)(I),
                P = n(234584),
                M = (0, s.default)(P),
                A = n(818166),
                D = (0, s.default)(A),
                R = n(183123),
                U = (0, s.default)(R),
                F = n(230139),
                Z = (0, s.default)(F),
                H = n(328043),
                V = (0, s.default)(H),
                z = n(365940),
                G = (0, s.default)(z),
                Y = n(357646),
                j = (0, s.default)(Y),
                W = n(792695),
                K = (0, s.default)(W),
                J = n(186613),
                q = (0, s.default)(J),
                X = n(149008),
                Q = (0, s.default)(X),
                $ = n(845939),
                ee = (0, s.default)($),
                te = n(659370),
                ne = ((0, s.default)(te), n(389005)),
                ae = ((0, s.default)(ne), n(436173)),
                oe = (0, s.default)(ae),
                ie = n(309955),
                le = (0, s.default)(ie),
                re = n(820736),
                se = ((0, s.default)(re), n(716505)),
                ue = (0, s.default)(se),
                ce = n(469155),
                de = (0, s.default)(ce),
                fe = n(11945),
                me = n(318592),
                ge = n(294184),
                pe = (0, s.default)(ge),
                he = n(3325),
                ve = ((0, s.default)(he), n(500134), n(229296)),
                be = (0, s.default)(ve),
                ye = n(496486),
                Ce = (0, s.default)(ye),
                _e = n(628568),
                Se = n(832313),
                Ne = n(836766),
                xe = n(384887),
                Ee = (0, s.default)(xe),
                we = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = ke(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        r = l && i;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? i(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(792656)),
                Te = n(442279);

            function ke(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    n = new r;
                return (ke = function(e) {
                    return e ? n : t
                })(e)
            }
            var Be = ["image1", "title1", "text1", "button", "text2"],
                Le = ((0, fe.getIsEditorRtlLayout)(), "automatic"),
                Ie = "#2e2e2f",
                Oe = "#ffffff",
                Pe = "#333333",
                Me = (0, Te.createSelector)([function(e) {
                    return e.titleColor
                }, function(e) {
                    return e.subtitleColor
                }, function(e) {
                    return e.itemTitleColor
                }, function(e) {
                    return e.itemSubtitleColor
                }, function(e) {
                    return e.baseColor
                }], (function(e, t, n, a, o) {
                    return (0, me.css)("&.s-pricing-item.s-repeatable-item .inner-container{.s-title{color:", e, ";}.s-subtitle{color:", t, ";}.s-item-title{color:", n, ";}.s-item-subtitle{color:", a, ";}.s-item-text{color:", o, ";}}")
                })),
                Ae = (0, Te.createSelector)([function(e) {
                    return e.subtitleColor
                }], (function(e) {
                    return (0, me.css)("&.s-item-highlight-badge.s-subtitle .s-text{color:", e, ";}")
                })),
                De = (0, Te.createSelector)([function(e) {
                    return e.subtitleColor
                }, function(e) {
                    return e.badgeBgColor
                }], (function(e, t) {
                    return (0, me.css)("&.s-pricing-item.s-repeatable-item .s-item-highlight-badge.s-subtitle{background-color:", t, ";.s-text{color:", e, ";}}")
                })),
                Re = (0, Te.createSelector)([function(e) {
                    return e.itemTitleColor
                }], (function(e) {
                    return (0, me.css)("&.s-pricing-item.pricing-layout-4 .s-theme-color-1{color:", e, ";}")
                })),
                Ue = (0, Te.createSelector)([function(e) {
                    return e.itemTitleColor
                }], (function(e) {
                    return (0, me.css)("&.s-pricing-item.pricing-layout-4.highlighted .s-theme-color-1{color:", e, ";}")
                })),
                Fe = {
                    mixins: [K.default, (0, Z.default)("editor")],
                    displayName: "Pricing Section",
                    componentDidMount: function() {
                        var e = this;
                        this.adjustItemHeights = Ce.default.debounce(this.adjustItemHeights, 300), this.adjustItemHeights(), window.addEventListener("resize", this.adjustItemHeights), this.mutationObserver = new MutationObserver((function() {
                            e.adjustItemHeights()
                        })), this.mutationObserver.observe(this.pricingRef, {
                            childList: !0,
                            subtree: !0
                        })
                    },
                    componentWillUnmount: function() {
                        window.removeEventListener("resize", this.adjustItemHeights), this.mutationObserver && this.mutationObserver.disconnect()
                    },
                    adjustItemHeights: function() {
                        var e = this.pricingRef;
                        if (e && D.default.getCanUseSectionImprovementsPart1()) {
                            var t = e.querySelectorAll(".s-pricing-item");
                            requestAnimationFrame((function() {
                                var e = {
                                    itemTitle: 0,
                                    itemImage: 0,
                                    itemSubtitle: 0,
                                    itemButton: 0,
                                    itemText: 0
                                };
                                (0, h.default)(t).call(t, (function(t) {
                                    var n, a = {
                                        itemTitle: t.querySelectorAll(".s-item-title-wrapper"),
                                        itemImage: t.querySelectorAll(".s-pricing-sub-item.s-item-image"),
                                        itemSubtitle: t.querySelectorAll(".s-pricing-sub-item.s-item-subtitle"),
                                        itemButton: t.querySelectorAll(".s-pricing-sub-item.s-pricing-item-btn"),
                                        itemText: t.querySelectorAll(".s-pricing-sub-item.s-item-text")
                                    };
                                    (0, h.default)(n = (0, b.default)(a)).call(n, (function(t) {
                                        var n;
                                        (0, h.default)(n = a[t]).call(n, (function(n) {
                                            var a = n.offsetHeight;
                                            n.style.minHeight = "auto";
                                            var o = n.offsetHeight;
                                            n.style.minHeight = "".concat(a, "px"), e[t] = Math.max(e[t], o)
                                        }))
                                    }))
                                })), (0, h.default)(t).call(t, (function(t) {
                                    var n, a = {
                                        itemTitle: t.querySelectorAll(".s-item-title-wrapper"),
                                        itemImage: t.querySelectorAll(".s-pricing-sub-item.s-item-image"),
                                        itemSubtitle: t.querySelectorAll(".s-pricing-sub-item.s-item-subtitle"),
                                        itemButton: t.querySelectorAll(".s-pricing-sub-item.s-pricing-item-btn"),
                                        itemText: t.querySelectorAll(".s-pricing-sub-item.s-item-text")
                                    };
                                    (0, h.default)(n = (0, b.default)(a)).call(n, (function(t) {
                                        var n;
                                        (0, h.default)(n = a[t]).call(n, (function(n) {
                                            n.style.minHeight = "".concat(e[t], "px")
                                        }))
                                    }))
                                }))
                            }))
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = M.default.getThemeName();
                        return le.default.getLayoutOptions(e)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _updatePricingLayout: function(e) {
                        this._updateLayout(e)
                    },
                    _getHighlightSetting: function() {
                        return this._getLayoutSettings().highlighted_id
                    },
                    _getIsHasSetHighlighted: function() {
                        return void 0 !== this._getLayoutSettings().highlighted_index
                    },
                    _getHighlightedIndex: function() {
                        var e = this._getLayoutSettings(),
                            t = e.highlighted_index,
                            n = e.highlighted_id;
                        return this._getIsHasSetHighlighted() || "item-middle-id" !== n ? n ? t : -1 : 1
                    },
                    _settingHightId: function(e, t) {
                        var n = this._getHighlightSetting() !== e ? e : null;
                        this.setData("components.slideSettings.display_settings.highlighted_id", n), this.setData("components.slideSettings.display_settings.highlighted_index", n ? t : -1), this.savePage()
                    },
                    _renderEditorHighlight: function(e, t, n) {
                        return null
                    },
                    _getRootClass: function() {
                        var e, t, n, a, o, i, l, r = M.default.getThemeName(),
                            s = this._getLayoutVariation(),
                            u = D.default.getTemplateVariation(),
                            c = ["dark", "default"],
                            d = -1 !== (0, C.default)(s).call(s, "pricing-layout-4"),
                            f = -1 !== (0, C.default)(s).call(s, "pricing-layout-1"),
                            m = (0, C.default)(e = ["onyx_new", "app", "profile"]).call(e, r) > -1,
                            g = (0, C.default)(t = ["bright", "perspective"]).call(t, r) > -1;
                        return (0, me.css)("&.s-bg-light-text .s-pricing-wrapper{color:#40404c;.s-item-text,.s-item-title,.s-subtitle,.s-item-subtitle{color:#40404c;}.pricing-layout-4 .s-item-highlight-badge{color:white;}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark\n        ", (0, S.default)(c).call(c, u) ? ", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text" : "", "{", d ? "" : (0, x.default)(n = (0, x.default)(a = "\n          .inner-container {\n            .s-common-button {\n              ".concat(m ? "box-shadow: 0px 3px 0 #333" : "", "\n              ")).call(a, g ? "border: 2px solid #333" : "", "\n            }\n            .s-bg-theme-color-1 {\n              ")).call(n, f ? "" : "background-color: #333;", "\n              color: #fff;\n            }\n          }\n          "), "\n        .s-border-theme-color-1{border-color:#333;}", d ? (0, x.default)(o = (0, x.default)(i = (0, x.default)(l = '.s-pricing-item {\n            .inner-container {\n              .s-item-title {\n                background-color: rgba(51, 51, 51, 0.5);\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                background:url("") no-repeat 0 0;\n                '.concat(m ? "box-shadow: 0px 3px 0 rgba(51, 51, 51, 0.5)" : "", "\n                ")).call(l, g ? "border: 2px solid rgba(51, 51, 51, 0.5)" : "", "\n              }\n            }\n          }\n          .highlighted {\n            border-color: #333;\n            .inner-container {\n              .s-item-title {\n                background-color: #333;\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                ")).call(i, m ? "box-shadow: 0px 3px 0 #333" : "", "\n                ")).call(o, g ? "border: 2px solid #333" : "", "\n              }\n              .s-item-highlight-badge {\n                background: transparent;\n              }\n            }\n          }\n         ") : "", "}")
                    },
                    _getLayoutStyle: function(e) {
                        var t = this,
                            n = {
                                title1Color: "",
                                hasHighlightItem: this._getHighlightSetting() || this._getHighlightedIndex() > -1 ? "s-pricing-has-highlight-item" : "",
                                highlightedBgColor: "s-bg-theme-color-1",
                                bgColor: function(e) {
                                    return ""
                                },
                                showBorder: function(e) {
                                    return ""
                                },
                                buttonBgColor: function(e) {
                                    return ""
                                },
                                title1BgColor: function(e) {
                                    return ""
                                },
                                isHighlighted: function(e) {
                                    return e ? "highlighted" : ""
                                }
                            };
                        switch (e) {
                            case "pricing-layout-1":
                                n.bgColor = function(e) {
                                    return e ? "s-bg-theme-color-fade-1" : ""
                                };
                                break;
                            case "pricing-layout-3":
                                n.showBorder = function(e) {
                                    return e ? "s-border-theme-color-1 highlight-border" : ""
                                };
                                break;
                            case "pricing-layout-4":
                                n.title1Color = "s-theme-color-1", n.showBorder = function(e) {
                                    return e ? "s-border-theme-color-1 highlight-border" : ""
                                }, n.buttonBgColor = function(e) {
                                    return !e && t._getButtonClassName() || ""
                                }, n.title1BgColor = function(e) {
                                    var t, n = D.default.getCanUseSectionImprovementsPart1() ? "item-title-new-padding" : "",
                                        a = e ? "s-bg-theme-color-1" : "s-bg-theme-color-fade-2";
                                    return (0, x.default)(t = "".concat(a, " ")).call(t, n)
                                }
                        }
                        return n
                    },
                    _getButtonClassName: function() {
                        var e, t, n, a = M.default.getThemeName();
                        return (0, C.default)(e = ["onyx_new", "app", "profile"]).call(e, a) > -1 ? "s-button-theme-style-shadow" : (0, C.default)(t = ["bright", "perspective"]).call(t, a) > -1 ? "s-button-theme-style-border" : (0, C.default)(n = ["spectre", "glow"]).call(n, a) > -1 ? "s-button-theme-style-important" : "s-button-theme-style"
                    },
                    _jumpToMembership: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        de.default.gotoMembershipPage(e)
                    },
                    hasExtraSpace: function(e) {
                        switch (e.type) {
                            case "RichText":
                                return "" !== e.value;
                            case "Button":
                                return "" !== e.text;
                            case "Image":
                                return V.default.hasContent(e.dataProps);
                            default:
                                return !0
                        }
                    },
                    getTextStyleByBg: function(e) {
                        var t = this._getLayoutVariation(),
                            n = -1 !== (0, C.default)(t).call(t, "pricing-layout-1"),
                            a = D.default.getCustomColors().highlight1,
                            o = void 0 === a ? null : a,
                            i = n && o ? new Ee.default(o).fade(.07) : Oe,
                            l = new Ee.default(i).computedColorByBgColor(Oe),
                            r = e ? l : Oe,
                            s = we.getTextColorSettingsByBgColor(r);
                        return Me(s)
                    },
                    getHighlightBadgeByBg: function() {
                        var e, t = this._getLayoutVariation(),
                            n = D.default.getCustomColors().highlight1,
                            a = void 0 === n ? null : n,
                            o = this.getComponentProps("background1"),
                            i = {},
                            l = we.getColorInfoByBgData(o),
                            r = l.bgColor,
                            s = l.isImageOrVedio;
                        switch (a && (a = new Ee.default(a).lumaCorrection(.6).toHex()), t) {
                            case "pricing-layout-1":
                                e = a || "#2e2e2f", i = we.getTextColorSettingsByBgColor(e);
                                break;
                            case "pricing-layout-2":
                            case "pricing-layout-3":
                                a ? i = we.getTextColorSettingsByBgColor(a) : (e = new Ee.default(r).isDarkColor() ? Pe : Oe, i = we.getTextColorSettingsByBgColor(e));
                                break;
                            case "pricing-layout-4":
                                i = s ? {
                                    subtitleColor: Oe
                                } : we.getTextColorSettingsByBgColor(r);
                                break;
                            default:
                                return ""
                        }
                        return Ae(i)
                    },
                    getLayoutTextALignment: function() {
                        return U.default.getCanUseSectionTextAlignNewVersion() && M.default.getEnableLayoutSettingTextAlignment() && "pricing-layout-4" === this._getLayoutVariation() ? "pricing-layout-center-align" : ""
                    },
                    getNewHighlightBadgeByBg: function() {
                        var e, t = this._getLayoutVariation(),
                            n = D.default.getCustomColors().highlight1,
                            a = void 0 === n ? null : n,
                            o = this.getComponentProps("background1"),
                            i = {},
                            l = we.getColorInfoByBgData(o),
                            r = l.bgColor,
                            s = l.isImageOrVedio;
                        switch (a && (a = new Ee.default(a).lumaCorrection(.6).toHex()), t) {
                            case "pricing-layout-1":
                                e = a || Ie, r && !s && (e = new Ee.default(e).showOnBg(r).toHex()), (i = we.getTextColorSettingsByBgColor(e)).badgeBgColor = e;
                                break;
                            case "pricing-layout-2":
                                e = a ? s ? a : new Ee.default(r).isDarkColor() ? Pe : a : Ie, !s && r && (e = new Ee.default(e).showOnBg(r).toHex()), (i = we.getTextColorSettingsByBgColor(e)).badgeBgColor = e;
                                break;
                            case "pricing-layout-3":
                                e = a ? s ? a : new Ee.default(r).isDarkColor() ? Pe : a : new Ee.default(r).isDarkColor() ? Pe : Ie, e = new Ee.default(e).showOnBg(Oe).toHex(), (i = we.getTextColorSettingsByBgColor(e)).badgeBgColor = e;
                                break;
                            case "pricing-layout-4":
                                i = s ? {
                                    subtitleColor: "dark" === o.textColor ? "#222" : Oe
                                } : we.getTextColorSettingsByBgColor(r);
                                break;
                            default:
                                return ""
                        }
                        return De(i)
                    },
                    getPlanTextBgAndTextClass: function(e) {
                        var t = D.default.getCustomColors().highlight1,
                            n = void 0 === t ? null : t;
                        n && (n = new Ee.default(n).lumaCorrection(.6).toHex());
                        var a, o, i = Oe;
                        if (e) {
                            if (n) {
                                var l = we.getTextColorSettingsByBgColor(n, {
                                    itemTitleColor: Oe
                                });
                                return Ue(l)
                            }
                            var r = we.getTextColorSettingsByBgColor(i);
                            return Ue(r)
                        }
                        return n ? (a = new Ee.default(n).fade(.2), a = new Ee.default(a).computedColorByBgColor(i), o = n ? we.getTextColorSettingsByBgColor(a, {
                            itemTitleColor: n
                        }) : we.getTextColorSettingsByBgColor(a), Re(o)) : ""
                    },
                    _renderRepeatable: function(e) {
                        var t, n, o = this,
                            i = this.getRepeatableBinding(e),
                            l = this._getLayoutVariation(),
                            r = this._getHighlightSetting(),
                            s = this._getHighlightedIndex(),
                            c = i.get().size,
                            d = c <= 4,
                            m = c <= 2,
                            p = this._getLayoutStyle(l),
                            h = "";
                        if (U.default.getCanUseNewMobileEditorPart3Feature()) {
                            var v = this._getLayoutProps().sectionLayoutConfig.get("columns_mobile") || "one";
                            v === Le && (v = "one"), h = "mobile-".concat(v, "-columns mobile-columns no-float")
                        }
                        var b = (0, k.default)(t = i.get()).call(t, (function(e, t) {
                                var n, u, c, d, v, b, y, C, _, N = i.sub(t),
                                    E = i.sub(t),
                                    T = e.get("id"),
                                    B = o._getIsHasSetHighlighted() ? t === s : r && r === T,
                                    L = M.default.getEnableTextAlignment() ? "full-width" : "",
                                    I = (0, w.default)([], Be);
                                if ("pricing-layout-4" === l) {
                                    var P = I[0];
                                    I[0] = I[1], I[1] = P
                                }
                                var A = M.default.getIsRtlLayout(),
                                    R = U.default.getCanUseSectionTextAlignNewVersion() && M.default.getEnableLayoutSettingTextAlignment(),
                                    F = function() {
                                        var e = N.sub("components"),
                                            t = (0, _e.getSectionTextAlignment)(e, ["text1", "title1"]);
                                        if (t && t !== Se.BUTTON_INIT_ALIGNMENT) return t;
                                        var n = R ? ["pricing-layout-1", "pricing-layout-3", "pricing-layout-4"] : ["pricing-layout-1", "pricing-layout-3"];
                                        if ((0, S.default)(n).call(n, l)) return "center";
                                        if ("pricing-layout-4" === l && !R) {
                                            var a = e.get(["text1", "value"]),
                                                o = e.get(["title1", "value"]);
                                            return "" === a && "" !== o ? "center" : A ? "right" : "left"
                                        }
                                        return "pricing-layout-2" === l ? A ? "right" : "left" : void 0
                                    },
                                    Z = (0, k.default)(I).call(I, (function(e, t) {
                                        var n = o.getComponentProps(e, N);
                                        if ("text1" === e && o.hasExtraSpace(n)) return (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-subtitle"
                                        }, void 0, O.default.createElement(j.default, (0, f.default)({
                                            defaultBoldText: D.default.getCanUseSectionDefaultFormat(),
                                            key: "sub-".concat(t)
                                        }, n, {
                                            sizeType: Ne.SIZE_TYPE.ITEM_SUBTITLE,
                                            tagName: D.default.getCanUseSectionDefaultFormat() ? Ne.TEXT_SIZE_TAG.ITEM_SUBTITLE : "div"
                                        })));
                                        if ("text2" === e && o.hasExtraSpace(n)) return (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-text"
                                        }, void 0, O.default.createElement(j.default, (0, f.default)({
                                            key: "sub-".concat(t)
                                        }, n, {
                                            sizeType: Ne.SIZE_TYPE.BODY
                                        })));
                                        if ("title1" === e && o.hasExtraSpace(n)) return (0, g.default)("div", {
                                            className: "s-item-title-wrapper ".concat(L)
                                        }, void 0, (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-title ".concat(p.title1BgColor(B))
                                        }, void 0, O.default.createElement(j.default, (0, f.default)({
                                            defaultBoldText: D.default.getCanUseSectionDefaultFormat(),
                                            key: "sub-".concat(t),
                                            textType: "heading",
                                            sizeType: "itemTitle",
                                            tagName: D.default.getCanUseSectionDefaultFormat() ? Ne.TEXT_SIZE_TAG.ITEM_TITLE : "div",
                                            emptyMessage: a("Editor|Add title.")
                                        }, n, {
                                            className: p.title1Color
                                        }))));
                                        if ("image1" === e && o.hasExtraSpace(o.getReduxComponentProps(e, N))) return (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-image"
                                        }, void 0, O.default.createElement(V.default, (0, f.default)({
                                            size: "480x960>",
                                            moreIcons: !0,
                                            iconLibComponents: "icon",
                                            inSectionSelector: o.props.inSectionSelector
                                        }, o.getReduxComponentProps(e, N))));
                                        if ("button" === e && o.hasExtraSpace(n)) {
                                            var i, l = U.default.getIsEnableRepeatedElements(),
                                                r = N.get("components.buttons"),
                                                s = M.default.getIsS5Theme(),
                                                u = o.getComponentProps("background1", N),
                                                c = !1;
                                            return Ce.default.isUndefined(r) || (i = r.getIn(["components", "block1", "items"]).size > 0, c = "full" === r.get("size")), (0, g.default)("div", {
                                                className: (0, pe.default)("s-pricing-sub-item s-pricing-item-btn", {
                                                    "s-btn-width-auto": D.default.getCanUseSectionImprovementsPart1()
                                                })
                                            }, void 0, i ? O.default.createElement(be.default, (0, f.default)({
                                                background1: u
                                            }, o.getComponentProps("buttons", N), {
                                                inSectionSelector: o.props.inSectionSelector,
                                                enableRepeatedElement: l,
                                                btnClassName: p.buttonBgColor(B),
                                                fullWidthLayout: c,
                                                enableInheritAlign: s,
                                                getButtonAlignment: F
                                            })) : O.default.createElement(G.default, (0, f.default)({}, u, o.getComponentProps("background1", N), n, {
                                                backgroundUrl: u.url,
                                                className: p.buttonBgColor(B),
                                                inSectionSelector: o.props.inSectionSelector,
                                                hasAddBtn: l,
                                                enableInheritAlign: s,
                                                getButtonAlignment: F,
                                                onClickAdd: function() {
                                                    return (0, ve.handleAddNewButtonGroupItem)(N.sub("components"), N.get("components.button"))
                                                }
                                            }), e))
                                        }
                                    })),
                                    H = o._getRepeatableItemProps(i, t),
                                    z = "",
                                    Y = "",
                                    W = "";
                                M.default.getRemainingTextColorFix() ? (z = o.getTextStyleByBg(B), W = o.getNewHighlightBadgeByBg()) : M.default.getEnableTextColorFix() && (z = o.getTextStyleByBg(B), Y = o.getHighlightBadgeByBg());
                                var K = "";
                                return M.default.getRemainingTextColorFix() && "pricing-layout-4" === l && (K = o.getPlanTextBgAndTextClass(B)), O.default.createElement(Q.default, (0, f.default)({
                                    className: (0, x.default)(n = (0, x.default)(u = (0, x.default)(c = (0, x.default)(d = (0, x.default)(v = (0, x.default)(b = (0, x.default)(y = (0, x.default)(C = "".concat(p.showBorder(B), " s-pricing-item ")).call(C, l, " ")).call(y, p.isHighlighted(B), " ")).call(b, p.hasHighlightItem, " ")).call(v, h, " ")).call(d, z, " ")).call(c, o.getLayoutTextALignment(), " ")).call(u, W, " ")).call(n, K),
                                    index: t
                                }, H, {
                                    forbiddenRemove: m,
                                    binding: E
                                }), !1, (0, g.default)("div", {
                                    className: "inner-container ".concat(p.bgColor(B))
                                }, void 0, B && (0, g.default)("div", {
                                    className: (0, x.default)(_ = "s-item-highlight-badge ".concat(p.highlightedBgColor, " s-subtitle ")).call(_, Y)
                                }, void 0, O.default.createElement(j.default, (0, f.default)({
                                    defaultFontSizeValue: 16,
                                    useLayoutTextAlignment: !0,
                                    onlyNormalToolbar: !0,
                                    sizeType: "subTitle",
                                    emptyMessage: a("Editor|Add title.")
                                }, o.getComponentProps("text3")))), Z))
                            })).toArray(),
                            y = this.getComponentProps("repeatable1"),
                            C = (0, g.default)("div", {
                                className: "s-repeatable-add-button s-small-black-button membership-btn",
                                onClick: (0, L.default)(n = this._jumpToMembership).call(n, this, !1)
                            }, void 0, u || (u = (0, g.default)("i", {
                                className: "entypo-cog"
                            })), " ", a("Membership"));
                        return O.default.createElement(q.default, (0, f.default)({
                            className: "s-pricing-wrapper"
                        }, y, {
                            canAddItems: d,
                            extraButton: C,
                            inSectionSelector: this.props.inSectionSelector
                        }), b)
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        var e, t, n, a = this,
                            o = this._renderRepeatable("repeatable1"),
                            i = this.getBackgroundProps("background1"),
                            l = this._getRootClass(),
                            r = (0, x.default)(e = (0, x.default)(t = (0, x.default)(n = "s-section s-pricing-section ".concat(this._getPaddingClass(), " ")).call(n, l, " ")).call(t, i.className, " ")).call(e, U.default.getCanUseNewMobileEditorPart3Feature() ? "s-new-mobile-layout" : "");
                        return O.default.createElement(ue.default, (0, f.default)({}, i, {
                            className: r
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && !this.props.inSectionSelector && O.default.createElement(oe.default, this.getBackgroundProps("background1")), O.default.createElement("div", {
                            className: "container",
                            key: "layout-content",
                            ref: function(e) {
                                return a.pricingRef = e
                            }
                        }, (0, g.default)("div", {
                            className: "columns sixteen"
                        }, void 0, (0, g.default)(ee.default, {
                            canHide: !0,
                            section: this,
                            inSectionSelector: this.props.inSectionSelector,
                            binding: this.getDefaultBinding()
                        }), o)))
                    }
                };
            t.default = Fe, e.exports = t.default
        },
        126711: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = (n(686902), n(14310), n(620116), n(834074)),
                l = (n(778914), n(239649), n(820368), n(663978)),
                r = n(752424),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, c = n(205872),
                d = (0, s.default)(c),
                f = n(487672),
                m = ((0, s.default)(f), n(812077)),
                g = (0, s.default)(m),
                p = n(2991),
                h = (0, s.default)(p),
                v = n(366757),
                b = (0, s.default)(v),
                y = n(234584),
                C = (0, s.default)(y),
                _ = n(818166),
                S = (0, s.default)(_),
                N = n(186613),
                x = (0, s.default)(N),
                E = n(149008),
                w = (0, s.default)(E),
                T = n(288757),
                k = (0, s.default)(T),
                B = n(792695),
                L = (0, s.default)(B),
                I = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = D(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        r = l && i;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? i(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(792656)),
                O = n(442279),
                P = n(384887),
                M = (0, s.default)(P),
                A = n(318592);

            function D(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    n = new r;
                return (D = function(e) {
                    return e ? n : t
                })(e)
            }
            var R = (0, O.createSelector)([function(e) {
                    return e.wireframeColor
                }, function(e) {
                    return e.numeralColor
                }, function(e) {
                    return e.lineColor
                }], (function(e, t, n) {
                    return (0, A.css)("&.s-section.s-process-section{.process-item-index{border-color:", e, ";color:", t, ";}.process-item-linker{opacity:1;border-color:", n, ";}}")
                })),
                U = {
                    mixins: [L.default],
                    displayName: "ProcessSection",
                    componentWillMount: function() {
                        n(766463).removeOldBackgroundForText(this);
                        var e = C.default.getThemeName(),
                            t = n(418972),
                            a = this._getLayoutVariation();
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, a))
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _getLayoutOptions: function() {
                        var e = C.default.getThemeName();
                        return n(418972).getLayoutOptions(e)
                    },
                    _shouldRenderItemLinker: function(e, t) {
                        return e !== t
                    },
                    _renderItemLinker: function() {
                        return u || (u = (0, g.default)("div", {
                            className: "process-item-linker"
                        }))
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _renderRepeatable: function(e) {
                        var t, a, o = this,
                            i = n(418972),
                            l = C.default.getThemeName(),
                            r = this._getLayoutVariation(),
                            s = this.getComponentBinding(e),
                            u = this.getRepeatableBinding(e);
                        "function" == typeof i.getLayout(l, r) && (a = i.getLayout(l, r)(u));
                        var c = "function" == typeof i.getItemSize ? i.getItemSize(u) : void 0,
                            f = this.getComponentProps("repeatable1");
                        return b.default.createElement(x.default, (0, d.default)({
                            className: "s-mh".concat("editor" === s.get("_state") ? " s-arranging" : ""),
                            inSectionSelector: this.props.inSectionSelector
                        }, f), (0, h.default)(t = s.get("list")).call(t, (function(e, t) {
                            var n = u.sub(t),
                                i = a.itemClass;
                            return b.default.createElement(w.default, (0, d.default)({
                                className: i,
                                binding: {
                                    default: n,
                                    listBinding: u
                                },
                                index: t
                            }, o._getRepeatableItemProps(u, t)), (0, g.default)("div", {
                                className: "process-item-wrapper"
                            }, void 0, (0, g.default)("div", {
                                className: "process-item-infos"
                            }, void 0, (0, g.default)("div", {
                                className: "process-item-index s-font-body"
                            }, void 0, t + 1), o._shouldRenderItemLinker(t + 1, c) ? o._renderItemLinker() : null), (0, g.default)(k.default, {
                                itemTitleBoldText: S.default.getCanUseSectionDefaultFormat(),
                                section: o,
                                itemBinding: n,
                                binding: n,
                                showItemSubtitle: !1,
                                inSectionSelector: o.props.inSectionSelector,
                                upperChildrenPosition: !0
                            })))
                        })).toArray())
                    },
                    _getTextStyleByBg: function() {
                        var e = this.getComponentProps("background1"),
                            t = I.getColorInfoByBgData(e),
                            n = t.bgColor,
                            a = "";
                        if (!t.isImageOrVedio) {
                            var o = I.getTextColorSettingsByBgColor(n, {
                                wireframeColor: "#494D56",
                                numeralColor: "#50555C",
                                lineColor: "#50555C"
                            });
                            "#ffffff" === o.lineColor ? o.lineColor = new M.default(o.lineColor).fade(.5).toRgba() : o.lineColor = new M.default(o.lineColor).fade(.3).toRgba(), a = R(o)
                        }
                        return a
                    },
                    render: function() {
                        return a("Editor|Process"), a("Editor|A numbered list of steps. Explain how your service works!"), a("Sections|Process"), a("Sections|A numbered list of steps. Explain how your service works!"), a("Sections|Purchase"), a("Sections|Pick your favorites from our high-quality collections, and add to your cart."), a("Sections|Online Pay"), a("Sections|Enter your address and pay with credit, debit, or PayPal. We ship anywhere."), a("Sections|Deliver"), a("Sections|We'll deliver your goods within 5 business days. Ask us any questions!"), this.getTemplate().apply(this)
                    }
                };
            t.default = U, e.exports = t.default
        },
        589770: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(686902),
                l = n(14310),
                r = n(620116),
                s = n(834074),
                u = n(778914),
                c = n(239649),
                d = n(820368),
                f = n(663978),
                m = n(752424),
                g = n(60530)(n(60530));
            f(t, "__esModule", {
                value: !0
            });
            var p, h, v = n(205872),
                b = (0, g.default)(v),
                y = n(487672),
                C = (0, g.default)(y),
                _ = n(812077),
                S = (0, g.default)(_),
                N = n(359036),
                x = (0, g.default)(N);
            n(974916), n(323123), n(569600), n(804723), n(115306);
            var E = n(977766),
                w = (0, g.default)(E),
                T = n(25843),
                k = ((0, g.default)(T), n(277149)),
                B = ((0, g.default)(k), n(620116)),
                L = (0, g.default)(B),
                I = n(678580),
                O = (0, g.default)(I),
                P = n(51942),
                M = (0, g.default)(P),
                A = n(2991),
                D = (0, g.default)(A),
                R = n(778914),
                U = (0, g.default)(R),
                F = n(694473),
                Z = ((0, g.default)(F), n(432366)),
                H = ((0, g.default)(Z), n(686902)),
                V = ((0, g.default)(H), n(54103)),
                z = ((0, g.default)(V), n(20455)),
                G = ((0, g.default)(z), n(981643)),
                Y = ((0, g.default)(G), n(366757)),
                j = (0, g.default)(Y),
                W = n(45697),
                K = (0, g.default)(W),
                J = n(143393),
                q = (0, g.default)(J),
                X = (n(973935), n(223336)),
                Q = ((0, g.default)(X), n(496486)),
                $ = (0, g.default)(Q),
                ee = n(294184),
                te = ((0, g.default)(ee), n(399069)),
                ne = (0, g.default)(te),
                ae = n(285072),
                oe = (0, g.default)(ae),
                ie = n(183123),
                le = (0, g.default)(ie),
                re = n(234584),
                se = (0, g.default)(re),
                ue = n(381947),
                ce = (0, g.default)(ue),
                de = n(79752),
                fe = ((0, g.default)(de), n(666514)),
                me = (0, g.default)(fe),
                ge = n(731246),
                pe = (0, g.default)(ge),
                he = n(802089),
                ve = (0, g.default)(he),
                be = n(692381),
                ye = (0, g.default)(be),
                Ce = n(916784),
                _e = (0, g.default)(Ce),
                Se = n(479377),
                Ne = (0, g.default)(Se),
                xe = (n(550745), n(884920)),
                Ee = (n(500134), n(178498)),
                we = n(668279),
                Te = n(881701),
                ke = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = Pe(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = f && s;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = i ? s(e, l) : null;
                            r && (r.get || r.set) ? f(a, l, r) : a[l] = e[l]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(792656)),
                Be = n(442279),
                Le = n(818166),
                Ie = (0, g.default)(Le),
                Oe = n(836766);

            function Pe(e) {
                if ("function" != typeof m) return null;
                var t = new m,
                    n = new m;
                return (Pe = function(e) {
                    return e ? n : t
                })(e)
            }

            function Me(e, t) {
                var n = i(e);
                if (l) {
                    var a = l(e);
                    t && (a = r(a).call(a, (function(t) {
                        return s(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) u(n = Me(Object(a), !0)).call(n, (function(t) {
                        (0, C.default)(e, t, a[t])
                    }));
                    else if (c) d(e, c(a));
                    else {
                        var o;
                        u(o = Me(Object(a))).call(o, (function(t) {
                            f(e, t, s(a, t))
                        }))
                    }
                }
                return e
            }
            var De = le.default.getIsEnableNewFeatureListLayout(),
                Re = {
                    "Blog.Text": "RichText",
                    "Blog.Title": "RichText",
                    "Blog.Image": "Image",
                    "Blog.Video": "Video",
                    "Blog.Button": "Button",
                    "Blog.Separator": "Separator"
                },
                Ue = {
                    "gallery-vertical": "VerticalGallery"
                },
                Fe = ((0, w.default)(p = [we.OldBlockTemplatesType.RICHTEXT, we.BlockTemplatesType.IMAGE, we.BlockTemplatesType.VIDEO, we.BlockTemplatesType.LARGE_PROFILE, we.BlockTemplatesType.REPEATED_ELEMENTS, we.BlockTemplatesType.GALLERY, we.BlockTemplatesType.HTML_COMPONENT, we.BlockTemplatesType.CONTEXT, we.BlockTemplatesType.TITLE]).call(p, (0, x.default)(we.FeatureListTemplates)), {
                    card: {
                        colorKey: "card_color",
                        settingsKey: "cardBackgroundSettings"
                    },
                    border: {
                        colorKey: "border_color",
                        settingsKey: "borderBackgroundSettings"
                    }
                }),
                Ze = (0, Be.createSelector)([function(e) {
                    return e.itemTitleColor
                }, function(e) {
                    return e.itemSubtitleColor
                }, function(e) {
                    return e.baseColor
                }], (function(e, t, n) {
                    return (0, Te.css)("&.new-feature-list-item.new-text-color-logic{.s-item-title{color:", e, ";}.s-item-subtitle{color:", t, ";}.s-item-text{color:", n, ";}}")
                })),
                He = {
                    displayName: "BlockComponentItem",
                    mixins: [oe.default],
                    bobcatPropTypes: {
                        data: {
                            binding: K.default.object
                        },
                        designer: {
                            isBlog: K.default.bool,
                            themeFeature: K.default.object,
                            empty: K.default.bool,
                            index: K.default.number,
                            columnsNum: K.default.number,
                            needToShowInsertBar: K.default.bool,
                            initialOpen: K.default.bool,
                            insertBarHeight: K.default.string,
                            _isNewItem: K.default.string,
                            isLastItem: K.default.bool,
                            isFirstItem: K.default.bool,
                            isHiddenSection: K.default.bool
                        },
                        callbacks: {
                            insertItem: K.default.func,
                            deleteItem: K.default.func,
                            updateInsertBarHeight: K.default.func
                        }
                    },
                    observedProps: ["needToShowInsertBar", "columnsNum", "insertBarHeight", "shouldAutoFocus", "shouldAutoFocusType"],
                    componentWillMount: function() {
                        this.setState({
                            isHoverThis: !1,
                            isHoverEditColumns: !1,
                            isHoverInsertBar: !1,
                            isEditingColumn: !1,
                            isEditingChild: !1,
                            shouldShowMoveOverlay: !1,
                            shouldShowDeleteOverlay: !1,
                            shouldShowDuplicateOverlay: !1
                        })
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    handleSaveServicesData: function(e) {
                        var t = this.getDefaultBinding().sub(["components", "email1"]),
                            n = t && t.toJS(),
                            a = (0, M.default)({}, n, {
                                connectedFormServices: e
                            });
                        t.set(q.default.fromJS(a)), this.savePage()
                    },
                    handleSaveCustomForm: function(e) {
                        var t = e || {},
                            n = t.customForm,
                            a = t.customSetting || {},
                            o = a.formNameLabel,
                            i = a.openInNewTab,
                            l = a.redirectLink,
                            r = a.enableSpamVerification,
                            s = a.submitLabel,
                            u = a.thanksMessage,
                            c = a.recipient,
                            d = this.getDefaultBinding().sub(["components", "email1"]),
                            f = d && d.toJS(),
                            m = (0, M.default)({}, f, {
                                recipient: c,
                                customForm: n,
                                openInNewTab: i,
                                redirectLink: l,
                                enableSpamVerification: r,
                                thanksMessage: u,
                                submit_label: s,
                                form_name_label: o
                            });
                        d.set(q.default.fromJS(m)), this.savePage()
                    },
                    _getCustomFormProps: function(e) {
                        var t = e.sub("email1"),
                            n = this.getDefaultBinding().get("id");
                        if (!t.get("customForm") || !t.get("customForm").size) {
                            var o = (0, Ee.getCustomFormSectionDefaultFormSchema)();
                            t.sub("customForm").set(q.default.fromJS(o)), t.sub("form_name_label").set(a("Editor|Custom Form"))
                        }
                        var i = t && t.toJS(),
                            l = i.recipient,
                            r = i.customForm,
                            s = i.openInNewTab,
                            u = i.redirectLink,
                            c = i.enableSpamVerification,
                            d = i.submit_label,
                            f = i.thanksMessage,
                            m = i.form_name_label;
                        return {
                            recipient: l,
                            formSchema: r,
                            formSetting: {
                                recipient: l,
                                openInNewTab: s,
                                redirectLink: u,
                                enableSpamVerification: c,
                                thanksMessage: f,
                                connectedFormServices: i.connectedFormServices,
                                submitLabel: d,
                                formNameLabel: m
                            },
                            sectionId: n,
                            onSaveForm: this.handleSaveCustomForm,
                            onSaveFormServicesData: this.handleSaveServicesData
                        }
                    },
                    _renderSingleComponent: function(e) {
                        var t, n, a = e.get("type"),
                            o = Re[a] || a,
                            i = this.props,
                            l = i.onResetLayout,
                            r = i.position,
                            s = i.inlineLayout,
                            u = i.sectionIndex,
                            c = (i.elementId, i.getColumnTextAlignment),
                            d = i.backgroundEditorProps;
                        switch (o) {
                            case "Separator":
                            case "Blog.Separator":
                                return h || (h = (0, S.default)(pe.default, {}));
                            case "Blog.Quote":
                                return j.default.createElement(ve.default, ne.default.get("RichText").buildBobcatProps(e))
                        }
                        var f = e.get("name"),
                            m = Ue[f] || o,
                            g = ne.default.get(m),
                            p = g.buildBobcatProps ? g.buildBobcatProps(e) : {};
                        if (this.props.isBlog && "RichText" === o) {
                            switch (a) {
                                case "Blog.Text":
                                    p.textType = "body";
                                    break;
                                case "Blog.Title":
                                    p.textType = "heading"
                            }
                            p.shouldAutoFocus = this.props.shouldFocusPosition === this.props.index, p.checkParagraph = this._checkParagraph, p.mergeTextBoxesCallback = this.props.mergeTextBoxesCallback
                        }
                        switch (a) {
                            case "Blog.Video":
                            case "Video":
                                p.needToAdjustHeight = !0;
                                break;
                            case "Image":
                                p.assetType = "background";
                                break;
                            case "Gallery":
                                var v = f.split("-");
                                p.layout = v[1], $.default.isUndefined(p.isPreviewMode) && (p.isPreviewMode = this.isPreviewMode())
                        }
                        if (this.getDefaultBinding().get("_isNewItem") && (p.initialEditState = "editor", this.getDefaultBinding().set("_isNewItem", !1)), p.isBlogMiniProgram = le.default.getIsBlogMiniProgram(), (0, O.default)(t = ["Image", "Video"]).call(t, a) && (p.promptComponentKey = (0, Se.getS6SectionComponentKey)({
                                sectionIndex: u,
                                itemId: null == e ? void 0 : e.get("id"),
                                name: Se.TEXT_TYPE.IMAGE1
                            })), (0, O.default)(n = ["RepeatedElements", "Button"]).call(n, a) && "function" == typeof c) {
                            p.getButtonAlignment = c, p.enableInheritAlign = !this.props.isBlog;
                            var y = d || {},
                                C = y.backgroundColor,
                                _ = y.layoutConfig,
                                N = y.sectionModel,
                                x = y.useImage,
                                E = y.videoHtml,
                                w = y.videoUrl,
                                T = y.storageKey,
                                k = y.url;
                            p = Ae(Ae({}, p), {}, {
                                backgroundColor: C,
                                layoutConfig: _,
                                sectionModel: N,
                                useImage: x,
                                videoHtml: E,
                                videoUrl: w,
                                storageKey: T,
                                backgroundUrl: k
                            })
                        }
                        return j.default.createElement(g, (0, b.default)({
                            onResetLayout: l,
                            position: r,
                            inlineLayout: s,
                            type: o,
                            eagerLoad: !0,
                            ref: "itemDOM",
                            backgroundEditorProps: d
                        }, p, (0, xe.getReduxComponentProps)(e)))
                    },
                    _renderItemByTemplate: function() {
                        var e = this.getDefaultBinding().get("name"),
                            t = null,
                            n = this.props,
                            a = n.nestDepth,
                            o = n.eagerLoad,
                            i = n.layout,
                            l = n.templateVersion,
                            r = n.sectionIndex,
                            s = n.elementId,
                            u = n.backgroundEditorProps,
                            c = n.getColumnTextAlignment,
                            d = this.getDefaultBinding().get("layout_config") || this.props.layoutConfig,
                            f = this.setEditingChild,
                            m = this.unsetEditingChild,
                            g = this.getDefaultBinding().sub("components"),
                            p = this.getDefaultBinding().sub("layout_config").get("vertical_alignment"),
                            h = this.getDefaultBinding().get("id"),
                            v = "customForm" === e ? this._getCustomFormProps(g) : {},
                            b = u || {},
                            y = b.backgroundColor,
                            C = b.sectionModel,
                            _ = b.useImage,
                            S = b.videoHtml,
                            N = b.videoUrl,
                            x = b.storageKey,
                            E = b.url;
                        return Ne.default[e] && (t = Ne.default[e](g, Ae({
                            getButtonAlignment: se.default.getEnableFormAlignmentFix() ? c : null,
                            verticalAlignmentType: p,
                            nestDepth: a,
                            setEditingChild: f,
                            unsetEditingChild: m,
                            eagerLoad: o,
                            layout: i,
                            templateId: h,
                            layoutConfig: d,
                            templateVersion: l,
                            sectionIndex: r,
                            elementId: s,
                            backgroundColor: y,
                            sectionModel: C,
                            useImage: _,
                            videoHtml: S,
                            videoUrl: N,
                            storageKey: x,
                            backgroundUrl: E,
                            backgroundEditorProps: u,
                            s6TemplateName: e
                        }, v), !1, this.getDefaultBinding())), t
                    },
                    _renderContent: function() {
                        var e = this.props.connectDragPreview,
                            t = this.getDefaultBinding(),
                            n = t.get("type"),
                            a = t.get("name") || "",
                            o = t.get("layout_config");
                        if (!a && !n) return null;
                        var i = "BlockComponentItem" === n ? this._renderItemByTemplate() : this._renderSingleComponent(this.getDefaultBinding());
                        return De && o && o.get("isNewFeatureList") && (i = this.getExtraLayerStyling(i)), e ? e((0, S.default)("div", {}, void 0, i)) : i
                    },
                    _getSectionBgColor: function() {
                        var e = this.props.backgroundEditorProps;
                        return e.backgroundColor && e.backgroundColor.get("value") || ""
                    },
                    getIsShowProSectionNotice: function() {
                        var e = this.getDefaultBinding(),
                            t = e.get("name"),
                            n = e.get("type"),
                            a = le.default.getS6ProSectionLists();
                        return ((0, O.default)(a).call(a, t) || (0, O.default)(a).call(a, n)) && !ce.default.canUse("premium_sections")
                    },
                    _getFeatureListColor: function(e, t, n) {
                        var a = Fe[n],
                            o = a.colorKey,
                            i = a.settingsKey,
                            l = e.get(o),
                            r = e.get(i);
                        if (!r) return l;
                        var s = null == r ? void 0 : r.get("type");
                        if (s === Oe.TEXT_COLOR_TYPE.DEFAULT) l = t;
                        else if (s === Oe.TEXT_COLOR_TYPE.PRE_COLOR) {
                            var u = null == r ? void 0 : r.get("preIndex");
                            if (u) {
                                var c, d = (Ie.default.getCustomColors() || {}).themePreColors;
                                l = (null === (c = (void 0 === d ? {} : d)[u]) || void 0 === c ? void 0 : c.value) || l
                            }
                        }
                        return l || t
                    },
                    _getFeatureListCardColor: function(e, t) {
                        return this._getFeatureListColor(e, t, "card")
                    },
                    _getFeatureListBorderColor: function(e, t) {
                        return this._getFeatureListColor(e, t, "border")
                    },
                    getExtraLayerStyling: function(e) {
                        var t, a = this.getDefaultBinding().get("layout_config"),
                            o = n(653114).LAYOUT_CONFIG_KEYS,
                            i = (0, n(870495).getDefaultColor)(this._getSectionBgColor()),
                            l = (0, D.default)(t = o[a.get("structure")]).call(t, (function(e) {
                                var t;
                                return (0, w.default)(t = "s-feature-list-item-".concat(e, "-")).call(t, a.get(e)).replaceAll("_", "-")
                            })),
                            r = this._getFeatureListCardColor(a, i),
                            s = this._getFeatureListBorderColor(a, i);
                        if (l.push("new-feature-list-item"), a.get("border") || (l = (0, L.default)(l).call(l, (function(e) {
                                return !(0, O.default)(e).call(e, "border")
                            }))), a.get("card")) try {
                            var u = new(n(384887))(r).luma() > .65 ? "dark-text" : "light-text";
                            if (l.push(u), se.default.getEnableTextColorFix()) {
                                l.push("new-text-color-logic");
                                var c = ke.getTextColorSettingsByBgColor(r),
                                    d = Ze(c);
                                l.push(d)
                            }
                        } catch (e) {
                            console.log(e)
                        } else l = (0, L.default)(l).call(l, (function(e) {
                            return !(0, O.default)(e).call(e, "card")
                        }));
                        return (0, S.default)("div", {
                            className: l.join(" "),
                            style: {
                                "--cardColor": r,
                                "--borderColor": s
                            }
                        }, void 0, e)
                    },
                    _renderNormalItem: function() {
                        var e = this.state,
                            t = (e.shouldShowDeleteOverlay, e.shouldShowMoveOverlay, this.getDefaultBinding().get("layout_config"), "");
                        if (!this.props.empty) {
                            var n = this.getDefaultBinding().get("type"),
                                a = this.getDefaultBinding().get("name") || "";
                            if (!this.props.isColumnBlock && !this.props.isRowBlock && (t = me.default.getBlockItemClassName(a, this.props.columnsNum), this.props.themeFeature)) {
                                var o = me.default.getClassByThemeFeature(this.props.themeFeature, a || n);
                                o && (t = o)
                            }
                        }
                        return (0, S.default)(ye.default, {}, void 0, (0, S.default)(_e.default, {}, void 0, (0, S.default)("div", {
                            className: "s-block-item-inner clearfix",
                            style: {
                                position: "relative"
                            },
                            onMouseEnter: this.setHoverState,
                            onMouseLeave: this.unsetHoverState
                        }, void 0, this.props.empty ? null : (0, S.default)("div", {
                            className: t
                        }, void 0, !1, this.isEditMode() ? j.default.createElement(j.default.Fragment, null, this._renderOutline(), this._renderOverlayController(), this.props.canDrag && this._renderControlButtonsController()) : null, this._renderContent()))))
                    },
                    _getBlockClass: function() {
                        var e = this,
                            t = "",
                            n = [
                                ["components", "block1", "inlineLayout"],
                                ["name"],
                                ["type"]
                            ];
                        (0, U.default)(n).call(n, (function(n) {
                            var a = e.getDefaultBinding().get(n);
                            a && (t += "s-block-".concat(a.toLowerCase(), " "))
                        }));
                        var a = this.getDefaultBinding().get(["name"]);
                        return t += {
                            customForm: "s-custom-form-container"
                        }[a] || ""
                    },
                    render: function() {
                        return (0, S.default)("div", {
                            className: "s-element-content"
                        }, void 0, (0, S.default)("div", {
                            className: "s-component s-block ".concat(this._getBlockClass())
                        }, void 0, " ", this._renderNormalItem()))
                    }
                };
            t.default = ne.default.createPageComponent(He), e.exports = t.default
        },
        14523: function(e, t, n) {
            "use strict";
            var a = n(501068),
                o = n(686902),
                i = n(14310),
                l = n(620116),
                r = n(834074),
                s = n(778914),
                u = n(239649),
                c = n(820368),
                d = n(663978),
                f = n(60530)(n(60530));
            d(t, "__esModule", {
                value: !0
            });
            var m = n(205872),
                g = (0, f.default)(m),
                p = n(359036),
                h = ((0, f.default)(p), n(812077)),
                v = (0, f.default)(h),
                b = n(487672),
                y = (0, f.default)(b),
                C = n(418777),
                _ = (0, f.default)(C),
                S = n(726394),
                N = (0, f.default)(S),
                x = n(569198),
                E = (0, f.default)(x),
                w = n(351379),
                T = (0, f.default)(w),
                k = n(900214),
                B = (0, f.default)(k),
                L = n(566380),
                I = (0, f.default)(L);
            n(209653), n(974916), n(323123), n(569600);
            var O = n(277149),
                P = (0, f.default)(O),
                M = n(432366),
                A = (0, f.default)(M),
                D = n(2991),
                R = (0, f.default)(D),
                U = n(394198),
                F = (0, f.default)(U),
                Z = n(977766),
                H = (0, f.default)(Z),
                V = n(666419),
                z = (0, f.default)(V),
                G = n(620116),
                Y = (0, f.default)(G),
                j = n(492762),
                W = (0, f.default)(j),
                K = n(778914),
                J = (0, f.default)(K),
                q = n(678580),
                X = (0, f.default)(q),
                Q = n(703649),
                $ = ((0, f.default)(Q), n(54103)),
                ee = (0, f.default)($),
                te = n(366757),
                ne = (0, f.default)(te),
                ae = n(45697),
                oe = (0, f.default)(ae),
                ie = n(973935),
                le = n(223336),
                re = (0, f.default)(le),
                se = n(496486),
                ue = (0, f.default)(se),
                ce = n(294184),
                de = (0, f.default)(ce),
                fe = n(399069),
                me = (0, f.default)(fe),
                ge = n(230139),
                pe = (0, f.default)(ge),
                he = n(43138),
                ve = ((0, f.default)(he), n(79752)),
                be = (0, f.default)(ve),
                ye = n(468811),
                Ce = (0, f.default)(ye),
                _e = n(818166),
                Se = (0, f.default)(_e),
                Ne = n(234584),
                xe = (0, f.default)(Ne),
                Ee = n(834243),
                we = (0, f.default)(Ee),
                Te = n(183123),
                ke = (0, f.default)(Te),
                Be = n(143393),
                Le = (0, f.default)(Be),
                Ie = n(589770),
                Oe = (0, f.default)(Ie);

            function Pe(e, t) {
                var n = o(e);
                if (i) {
                    var a = i(e);
                    t && (a = l(a).call(a, (function(t) {
                        return r(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(n = Pe(Object(a), !0)).call(n, (function(t) {
                        (0, y.default)(e, t, a[t])
                    }));
                    else if (u) c(e, u(a));
                    else {
                        var o;
                        s(o = Pe(Object(a))).call(o, (function(t) {
                            d(e, t, r(a, t))
                        }))
                    }
                }
                return e
            }
            var Ae = function(e) {
                    (0, T.default)(i, e);
                    var t, n, o = (t = i, n = function() {
                        if ("undefined" == typeof Reflect || !a) return !1;
                        if (a.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(a(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, I.default)(t);
                        if (n) {
                            var i = (0, I.default)(this).constructor;
                            e = a(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, B.default)(this, e)
                    });

                    function i() {
                        return (0, N.default)(this, i), o.apply(this, arguments)
                    }
                    return (0, E.default)(i, [{
                        key: "render",
                        value: function() {
                            var e = this.props.children;
                            return ne.default.createElement("div", this.props, e)
                        }
                    }]), i
                }(ne.default.Component),
                De = Ae,
                Re = Ae,
                Ue = ["components", "block1", "items"],
                Fe = ke.default.getCanUseNewAddElementFeature(),
                Ze = "left",
                He = function(e) {
                    var t;
                    return null != e && (0, P.default)(t = e.getIn(Ue)).call(t, (function(e) {
                        return "RepeatedElements" === e.get("type")
                    })) ? 4 : 2
                },
                Ve = function(e, t) {
                    var n = (null == e ? void 0 : (0, A.default)(e).call(e, (function(e, t) {
                            return e + Number(t)
                        }), 0)) - 12,
                        a = e,
                        o = n;
                    if (null == e || !e.length || !t || !n || (0, A.default)(t).call(t, (function(e, t) {
                            return e + He(t)
                        }), 0) > 12) return a;
                    for (; o > 0;) a = (0, R.default)(a).call(a, (function(e, n) {
                        var a = (0, F.default)(e, 10);
                        return a > He(t.get(n)) && o > 0 ? (o--, a - 1) : a
                    }));
                    return a
                },
                ze = {
                    displayName: "ShadowKnight",
                    mixins: [(0, pe.default)("editor")],
                    bobcatPropTypes: {
                        data: {
                            items: oe.default.oneOfType([oe.default.array, oe.default.object]),
                            binding: oe.default.object.isRequired
                        },
                        designer: {
                            isBlog: oe.default.bool,
                            themeFeature: oe.default.object,
                            nestDepth: oe.default.number
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            designer: {
                                nestDepth: 1
                            }
                        }
                    },
                    componentWillMount: function() {
                        this.state = {
                            currentDOMNode: null,
                            isResizing: !1,
                            showResizeWrapper: !1,
                            hideAddRowBar: !1
                        }
                    },
                    componentDidMount: function() {
                        this.setState({
                            currentDOMNode: (0, ie.findDOMNode)(this).closest(".container")
                        })
                    },
                    _getItemsPath: function(e) {
                        var t;
                        return (0, H.default)(t = [e]).call(t, Ue)
                    },
                    _getRemovePosition: function(e, t) {
                        var n = e.position,
                            a = t.position,
                            o = t.type,
                            i = t.index,
                            l = {
                                row: 1,
                                column: 2,
                                element: 3
                            }[o],
                            r = (0, z.default)({
                                length: l
                            }, (function(e, t) {
                                return t
                            }));
                        a[l] = a[l] + i;
                        var s = (0, Y.default)(r).call(r, (function(e, t) {
                                return a[t] === n[t]
                            })).length === l,
                            u = a[l] <= n[l];
                        return s && u && n[l]++, n
                    },
                    _resetLayout: function(e, t, n) {
                        var a, o, i, l = Se.default.getCurrentPageBinding().sub((0, H.default)(a = ["sections", e]).call(a, Ue)),
                            r = l.get((0, H.default)(o = [t]).call(o, Ue)),
                            s = l.get([t, "components", "block1", "inlineLayout"]),
                            u = (null == s ? void 0 : s.split("-")) || [],
                            c = (null == r ? void 0 : r.size) || 0,
                            d = null == r || null === (i = r.get(n)) || void 0 === i ? void 0 : i.getIn(Ue),
                            f = null == d ? void 0 : (0, P.default)(d).call(d, (function(e) {
                                return "RepeatedElements" === e.get("type")
                            }));
                        if ((f || c !== u.length) && c) {
                            var m = He(null == r ? void 0 : r.get(n)),
                                g = (0, F.default)(u[n], 10);
                            if (f && g < m && c === u.length) u[n] = m, u = Ve(u, r);
                            else if (c < u.length) {
                                var p = u[n];
                                (0, W.default)(u).call(u, n, 1), (u = (0, R.default)(u).call(u, (function(e) {
                                    return (0, F.default)(e, 10) + Math.floor(p / c)
                                })))[0] += p % c
                            } else c > u.length && ((0, W.default)(u).call(u, n + 1, 0, He(r.get(n))), u = Ve(u, r));
                            12 === (0, A.default)(u).call(u, (function(e, t) {
                                return e + t
                            })) && l.set([t, "components", "block1", "inlineLayout"], u.join("-"))
                        }
                    },
                    _dropRow: function(e, t) {
                        var n = t.position,
                            a = t.index,
                            o = Se.default.getCurrentPageBinding().sub(["sections", n[0], "components", "block1"]),
                            i = o.get("items"),
                            l = be.default.addSectionRow(e),
                            r = i.insert(n[1] + a, l);
                        return o.set("items", r), !0
                    },
                    _dropColumn: function(e, t) {
                        var n = t.position,
                            a = t.index,
                            o = Se.default.getCurrentPageBinding().sub(["sections", n[0], "components", "block1"]).sub(["items", n[1], "components", "block1"]),
                            i = o.get("items"),
                            l = be.default.addSectionColumn(e),
                            r = i.insert(n[2] + a, l);
                        return o.set("items", r), this._resetLayout(n[0], n[1], n[2] + a), !0
                    },
                    _deleteElement: function(e) {
                        var t, n, a = this.getDefaultBinding().sub(["items"]),
                            o = a.sub((0, H.default)(t = [e[1]]).call(t, Ue)),
                            i = o.sub((0, H.default)(n = [e[2]]).call(n, Ue));
                        i.delete(e[3]), 0 !== i.get().size || 1 === a.get().size && 1 === o.get().size || (o.delete(e[2]), this._resetLayout(e[0], e[1], e[2]), 0 === o.get().size && a.delete(e[1])), this.savePage()
                    },
                    _duplicateElement: function(e) {
                        var t, n, a = this.getDefaultBinding().sub(["items"]).sub((0, H.default)(t = [e[1]]).call(t, Ue)).sub((0, H.default)(n = [e[2]]).call(n, Ue)).get(e[3]).set("id", Ce.default.v4());
                        this._dropElement(Le.default.fromJS(be.default.replaceMetaId(a.toJS())), {
                            index: 0,
                            position: e
                        }), this.savePage()
                    },
                    canDrop: function(e, t) {
                        var n, a;
                        if (!e || !t) return !1;
                        var o = e.position,
                            i = e.type,
                            l = ue.default.tail(o),
                            r = (0, _.default)(l, 2),
                            s = r[0],
                            u = r[1],
                            c = t.position,
                            d = ue.default.tail(c),
                            f = (0, _.default)(d, 3),
                            m = f[0],
                            g = f[1],
                            p = f[2],
                            h = this.getDefaultBinding(),
                            v = Se.default.getCurrentPageBinding().sub(["sections", o[0], "components", "block1"]),
                            b = h.sub(["items"]),
                            y = v.sub(["items"]),
                            C = y.sub((0, H.default)(n = [s]).call(n, Ue)),
                            S = "RepeatedElements" === b.sub((0, H.default)(a = [m]).call(a, Ue, [g], Ue, [p])).get("type") ? 4 : 2;
                        switch (i) {
                            case "column":
                                var N;
                                return 12 - (0, A.default)(N = C.get()).call(N, (function(e, t) {
                                    return e + He(t)
                                }), 0) >= S;
                            case "element":
                                return y.sub([s, "components", "block1"]).get("inlineLayout").split("-")[u] >= S;
                            default:
                                return !0
                        }
                    },
                    _dropElement: function(e, t) {
                        var n, a = t.position,
                            o = t.index,
                            i = Se.default.getCurrentPageBinding().sub(["sections", a[0], "components", "block1"]).sub((0, H.default)(n = ["items", a[1]]).call(n, Ue, [a[2], "components", "block1"])),
                            l = i.get("items").insert(a[3] + o, e);
                        return i.set("items", l), !0
                    },
                    _drop: function(e, t) {},
                    _setInsertMarkerStyle: function(e) {
                        var t = this.state.currentDOMNode.querySelector(".s-insert-marker");
                        if (e) {
                            var n = e.type,
                                a = e.index,
                                o = e.position,
                                i = e.dom;
                            if (n && i) {
                                var l = "3px",
                                    r = this.state.currentDOMNode.querySelectorAll(".s-row")[o[1]],
                                    s = {
                                        column: function() {
                                            var e = 4 === o.length,
                                                t = "s-row" === i.className,
                                                n = i;
                                            if (e && (n = i.closest(".s-col")), t) {
                                                var s = i.querySelectorAll(".s-col");
                                                n = 1 === a ? s[s.length - 1] : s[0]
                                            }
                                            return {
                                                left: "".concat(a <= 0 ? n.offsetLeft : n.offsetLeft + n.offsetWidth, "px"),
                                                width: l,
                                                height: "".concat(r.offsetHeight, "px"),
                                                top: "".concat(r.offsetTop, "px")
                                            }
                                        },
                                        row: function() {
                                            return {
                                                left: 0,
                                                width: "".concat(r.offsetWidth - 2, "px"),
                                                height: l,
                                                top: "".concat(a <= 0 ? r.offsetTop : r.offsetTop + r.offsetHeight, "px")
                                            }
                                        },
                                        element: function() {
                                            var e = i.closest(".s-col");
                                            return {
                                                left: "".concat(e.offsetLeft, "px"),
                                                height: l,
                                                width: "".concat(e.offsetWidth - 2, "px"),
                                                top: "".concat(a <= 0 ? r.offsetTop + i.offsetTop : r.offsetTop + i.offsetTop + (i.fallbackHeight || i.offsetHeight), "px")
                                            }
                                        }
                                    };
                                if (s[n]) {
                                    var u = Me(Me({}, s[n]()), {}, {
                                            opacity: 1
                                        }),
                                        c = "";
                                    (0, J.default)(ue.default).call(ue.default, u, (function(e, t) {
                                        var n;
                                        c += (0, H.default)(n = "".concat(t, ": ")).call(n, u[t], "; ")
                                    })), (0, re.default)(".s-insert-marker").not(t).css("opacity", 0), t.style = c
                                }
                            }
                        } else t.style.opacity = 0
                    },
                    _hover: function(e, t) {},
                    _unhover: function() {},
                    _beginDrag: function() {
                        (0, re.default)(".s-add-wrapper").css("display", "none")
                    },
                    _endDrag: function() {
                        (0, re.default)(".s-add-wrapper").css("display", "block"), this._hideOverlay()
                    },
                    _showOverlay: function() {
                        (0, re.default)(".s-element-overlay").css("opacity", 1)
                    },
                    _hideOverlay: function() {
                        (0, re.default)(".s-element-overlay").css("opacity", 0)
                    },
                    _showResizeWrapper: function() {
                        this.props.isDragMode
                    },
                    _hideResizeWrapper: function() {
                        this.state.isResizing || this.setState({
                            showResizeWrapper: !1
                        })
                    },
                    _addComponent: function(e, t) {},
                    _addColumn: function(e, t) {},
                    _addRow: function(e) {},
                    _startResize: function() {},
                    _stopResize: function() {},
                    _resizeColumn: function(e, t, n) {},
                    getColumnTextAlignment: function(e, t, n) {
                        for (var a, o = this.getDefaultBinding().sub((0, H.default)(a = ["items", e]).call(a, Ue, [t], Ue)), i = "", l = n - 1; l >= 0; l--) {
                            var r, s = o.sub(l),
                                u = null == s ? void 0 : s.get("name");
                            if ((0, X.default)(r = ["context", "title"]).call(r, u) && (i = null == s ? void 0 : s.get(["components", "text1", "alignment"]))) break
                        }
                        return i
                    },
                    _getCurrentRowHaveColumns: function(e) {
                        var t, n, a;
                        return null === (t = this.getDefaultBinding().sub((0, H.default)(a = ["items", e]).call(a, Ue))) || void 0 === t || null === (n = t.get()) || void 0 === n ? void 0 : n.size
                    },
                    getColumnTextAlignmentForButton: function(e, t, n) {
                        var a = this.getColumnTextAlignment(e, t, n),
                            o = this._getCurrentRowHaveColumns(e);
                        if ("" === a && 1 === o && e > 0) {
                            var i = e - 1;
                            if (1 === this._getCurrentRowHaveColumns(i)) {
                                var l, r, s = null === (l = this.getDefaultBinding().sub((0, H.default)(r = ["items", i]).call(r, Ue, [0], Ue))) || void 0 === l ? void 0 : l.get().size;
                                a = this.getColumnTextAlignment(i, 0, s)
                            }
                        }
                        return a
                    },
                    _renderColumnItem: function(e, t, n) {
                        var a, o = this,
                            i = e.getIn(Ue);
                        if (!i || i.size <= 0) return this.setState({
                            hideAddRowBar: !0
                        }), this._renderEmptyElement(t, n);
                        this.setState({
                            hideAddRowBar: !1
                        });
                        var l = this.getDefaultBinding().sub((0, H.default)(a = ["items", t]).call(a, Ue, [n], Ue));
                        return (0, R.default)(i).call(i, (function(e, a) {
                            var i = l.get([a, "type"]) && l.get([a, "type"]).toLowerCase();
                            return (0, v.default)(De, {
                                id: l.get([a, "id"]),
                                hover: o._hover,
                                drop: o._drop,
                                className: "s-element-".concat(i),
                                position: [o.props.sectionIndex, t, n, a]
                            }, void 0, o._renderElementItem(e, t, n, a))
                        }))
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    addElementTrack: function(e) {
                        var t;
                        null === (t = window.mixpanel) || void 0 === t || t.track("Editor - Add Element", {
                            siteId: xe.default.getId(),
                            userId: we.default.getId(),
                            element_name: e
                        })
                    },
                    addElementIndicatorTrack: function(e) {
                        var t;
                        null === (t = window.mixpanel) || void 0 === t || t.track("Editor - Add Element - Indicator", {
                            siteId: xe.default.getId(),
                            userId: we.default.getId(),
                            scene: e
                        })
                    },
                    toggleOpenPopover: function(e, t) {
                        t && this.addElementIndicatorTrack(e)
                    },
                    _renderInsertBar: function(e, t, n, a) {
                        return null
                    },
                    _renderInsertNewColumn: function(e, t, n) {
                        return null
                    },
                    _renderVerticalBarInsertColumn: function(e, t, n) {
                        var a = this.props.sectionIndex,
                            o = e.getIn(Ue),
                            i = (0, A.default)(o).call(o, (function(e, t) {
                                return e + He(t)
                            }), 0);
                        if (i >= 11) return null;
                        var l = [];
                        12 - i < 4 && l.push("repeatedElements");
                        var r = [a, t, n === Ze ? 0 : o.size, 0],
                            s = n === Ze ? "right" : "left";
                        return ne.default.createElement(ne.default.Fragment, null, this._renderInsertNewColumn(r, s, l))
                    },
                    _renderInsertNewRow: function() {
                        return null
                    },
                    _renderAlwaysShowAddRowBar: function() {
                        var e = this.props;
                        return e.isDragMode, e.inSectionSelector, this.state.hideAddRowBar, ne.default.createElement(ne.default.Fragment, null, !1)
                    },
                    _renderEmptyElement: function(e, t) {
                        var n = this.props;
                        return n.isDragMode, n.sectionIndex, (0, v.default)("div", {
                            className: "s-element s-element-empty"
                        }, void 0, !1)
                    },
                    _renderElementItem: function(e, t, n, a) {
                        var o, i, l, r, s = this.props,
                            u = (s.isDragMode, s.sectionIndex),
                            c = s.layoutConfig,
                            d = s.backgroundEditorProps,
                            f = s.navIsTransparent,
                            m = e.get("type") && e.get("type").toLowerCase(),
                            p = !1,
                            h = null === (o = this.getDefaultBinding().get("items")) || void 0 === o ? void 0 : o.size,
                            b = this.getDefaultBinding().get(["items", t]),
                            y = b.getIn(Ue),
                            C = y.getIn((0, H.default)(i = [n]).call(i, Ue)),
                            _ = this.getDefaultBinding().sub((0, H.default)(l = ["items", t]).call(l, Ue, [n], Ue, [a])),
                            S = (null === (r = b.getIn(["components", "block1", "inlineLayout"])) || void 0 === r ? void 0 : r.split("-")) || [];
                        S[n] < 4 && [].push("repeatedElements");
                        var N, x = {
                            binding: _,
                            themeFeature: this.props.themeFeature,
                            isBlog: !1,
                            isRowBlock: !1,
                            isColumnBlock: !0,
                            isEnabledAddRepeatItem: !1,
                            navIsTransparent: f
                        };
                        "button" !== m && "repeatedelements" !== m && "blockcomponentitem" !== m || (x.getColumnTextAlignment = (0, ee.default)(N = this.getColumnTextAlignmentForButton).call(N, this, t, n, a));
                        var E = [u, t, n, a],
                            w = t + 1 === h && 1 === y.size && C.size < 2;
                        return (0, v.default)(Re, {
                            id: e.get("id"),
                            position: E,
                            drop: this._drop,
                            beginDrag: this._beginDrag,
                            endDrag: this._endDrag,
                            className: "s-element",
                            canDrag: p,
                            columnsSize: y.size,
                            elementsSize: C.size
                        }, void 0, p, ne.default.createElement(Oe.default, (0, g.default)({}, x, {
                            eagerLoad: !0,
                            canDrag: p,
                            position: E,
                            inlineLayout: S[n],
                            sectionIndex: u,
                            elementId: e.get("id"),
                            layoutConfig: c,
                            layout: this.props.layout,
                            deleteHandle: this._deleteElement,
                            duplicateHandle: this._duplicateElement,
                            type: e.get("type"),
                            mouseDownHandle: this._showOverlay,
                            mouseUpHandle: this._hideOverlay,
                            templateVersion: "s6",
                            backgroundEditorProps: d,
                            onResetLayout: this._resetLayout
                        })), !w && p)
                    },
                    getVerticalAlignmentClassName: function() {
                        if (ke.default.getCanUseVerticalAlignmentFeature()) {
                            var e = this.props.layoutConfig.get("vertical_alignment");
                            return e ? "vertical-align-".concat(e) : ""
                        }
                        return ""
                    },
                    _renderRowItem: function(e, t) {
                        var n, a = this,
                            o = e.getIn(Ue),
                            i = e.getIn(["components", "block1", "inlineLayout"]),
                            l = i && i.split("-") || [],
                            r = (this.state.currentDOMNode && this.state.currentDOMNode.getBoundingClientRect().width, o.size),
                            s = "";
                        5 === r ? s += "five-fixed col-5" : 6 === r && (s += "six-fixed col-6");
                        var u = this.getDefaultBinding().get((0, H.default)(n = ["items", t]).call(n, Ue));
                        return this.state.showResizeWrapper, this.props.isDragMode, (0, R.default)(o).call(o, (function(e, n) {
                            var o, i = !1;
                            (l[n - 1] && l[n - 1] <= 3 && l[n] <= 3 || l[n + 1] && l[n + 1] <= 3 && l[n] <= 3) && (i = !0);
                            var r = (0, P.default)(o = e.getIn(Ue)).call(o, (function(e) {
                                    return "RepeatedElements" === e.get("type")
                                })),
                                c = s;
                            return c && !r || (c = "col-".concat(l[n])), (0, v.default)(De, {
                                id: u.getIn([n, "id"]),
                                position: [a.props.sectionIndex, t, n],
                                className: (0, de.default)("s-col ".concat(c), {
                                    "half-fixed": i
                                }),
                                hover: a._hover,
                                drop: a._drop
                            }, e.get("id"), (0, v.default)("div", {
                                className: "col-list col-align-".concat(e.getIn(["components", "block1", "inlineLayout"]))
                            }, void 0, a._renderColumnItem(e, t, n)), !1)
                        }))
                    },
                    render: function() {
                        var e = this,
                            t = this.props,
                            n = t.items,
                            a = t.sectionIndex,
                            o = t.componentClass,
                            i = (t.isDragMode, (0, R.default)(n).call(n, (function(t, n) {
                                var o = e.getDefaultBinding().get(["items", n, "id"]);
                                return (0, v.default)(De, {
                                    id: o,
                                    drop: e._drop,
                                    hover: e._hover,
                                    unhover: e._unhover,
                                    className: "s-row",
                                    position: [a, n]
                                }, o, (0, v.default)("div", {
                                    className: "s-row-content ".concat(e.getVerticalAlignmentClassName())
                                }, void 0, e._renderRowItem(t, n)), Fe && !1, Fe && !1)
                            })));
                        return (0, v.default)("div", {
                            className: o
                        }, void 0, i)
                    }
                };
            t.default = me.default.createPageComponent(ze), e.exports = t.default
        },
        100570: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = (n(686902), n(14310), n(620116), n(834074)),
                i = (n(778914), n(239649), n(820368), n(663978)),
                l = n(752424),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(205872),
                u = (0, r.default)(s),
                c = n(812077),
                d = (0, r.default)(c),
                f = n(487672);
            (0, r.default)(f), n(974916), n(323123);
            var m = n(981643),
                g = (0, r.default)(m),
                p = n(678580),
                h = (0, r.default)(p),
                v = n(54103),
                b = ((0, r.default)(v), n(977766)),
                y = (0, r.default)(b),
                C = n(366757),
                _ = (0, r.default)(C),
                S = n(223336),
                N = ((0, r.default)(S), n(294184)),
                x = (0, r.default)(N),
                E = n(230139),
                w = (0, r.default)(E),
                T = n(234584),
                k = (0, r.default)(T),
                B = n(843296),
                L = (0, r.default)(B),
                I = n(792695),
                O = (0, r.default)(I),
                P = n(436173),
                M = (0, r.default)(P),
                A = n(716505),
                D = (0, r.default)(A),
                R = n(141655),
                U = (0, r.default)(R),
                F = n(154920),
                Z = (0, r.default)(F),
                H = n(389005),
                V = ((0, r.default)(H), n(14523)),
                z = (0, r.default)(V),
                G = (n(550745), n(3325)),
                Y = ((0, r.default)(G), n(318592)),
                j = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = q(t);
                    if (n && n.has(e)) return n.get(e);
                    var l = {},
                        r = i && o;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? o(e, s) : null;
                            u && (u.get || u.set) ? i(l, s, u) : l[s] = e[s]
                        }
                    return l.default = e, n && n.set(e, l), l
                }(n(792656)),
                W = n(442279),
                K = n(384887),
                J = (0, r.default)(K);

            function q(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    n = new l;
                return (q = function(e) {
                    return e ? n : t
                })(e)
            }
            var X = ["rows", "columns", "media", "icons"],
                Q = ["featureListA", "featureListB", "featureListC", "featureListD", "featureListE"],
                $ = (0, W.createSelector)([function(e) {
                    return e.separatorColor
                }], (function(e) {
                    return (0, Y.css)("& .s-separator .s-separator-content .separator{background:", e, ";}")
                })),
                ee = {
                    mixins: [O.default, (0, w.default)("editor")],
                    displayName: "s6_common_section",
                    componentDidMount: function() {},
                    getWholeThemeFeature: function() {
                        var e = L.default.get(k.default.getTheme().get("name"));
                        return null != e ? e.features : void 0
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    _getSectionType: function() {
                        var e, t, n, a = k.default.getThemeName(),
                            o = this._getLayoutVariation(),
                            i = this.getDefaultBinding().get("template_name");
                        if (-1 !== (0, g.default)(e = ["hero", "signup_form"]).call(e, i)) return o && -1 === (0, g.default)(o).call(o, "noImage") ? "s-hero-section" : "s-signup-section";
                        if ((0, h.default)(t = ["contact_form", "custom_form"]).call(t, i)) return "s-contact-section";
                        if (-1 !== (0, g.default)(n = ["columns", "rows", "text", "info"]).call(n, i)) {
                            var l = 0;
                            "perspective" === a && (l = 1);
                            var r = this._getLayoutVariation().split("-");
                            switch (r[l]) {
                                case "col":
                                    return "s-columns-section";
                                case "row":
                                    return "s-rows-section";
                                case "media":
                                    return "s-media-section ".concat(r[1]);
                                case "text":
                                    return "s-text-section";
                                case "box":
                                    return "s-info-section";
                                default:
                                    return "s-block-section"
                            }
                        } else if (-1 !== (0, g.default)(Q).call(Q, i)) {
                            var s = this._getLayoutProps().sectionLayoutConfig,
                                u = s && s.get("structure"),
                                c = s && s.get("layout");
                            return "s-feature-list-section list-layout-".concat(c, "grid" === u ? " s-columns-section" : " s-rows-section")
                        }
                        return "s-block-section"
                    },
                    _getSectionClass: function() {
                        var e = this.getDefaultBinding().get("template_name");
                        return "hero" === e ? "s-new-hero-section" : "icons" === e ? "s-icons-section" : "title" === e ? "s-new-title-section" : ""
                    },
                    _getComponentClass: function() {
                        return "persona" === k.default.getThemeName() ? "twelve offset-three" : "columns sixteen"
                    },
                    _renderAiEditor: function() {
                        return !1
                    },
                    handleResetSection: function() {
                        this.props.resetSection(), U.default.save(), Z.default.track("Reset Drag & Drop Mode - Editor v1", {
                            site_id: k.default.getId(),
                            site_permalink: k.default.getPermalink()
                        })
                    },
                    _renderDragDoneButton: function() {
                        return null
                    },
                    _getSpecialStyleByBg: function() {
                        var e = this.getComponentProps("background1"),
                            t = j.getColorInfoByBgData(e),
                            n = t.bgColor;
                        if (t.isImageOrVedio) return "";
                        var a = j.getTextColorSettingsByBgColor(n, {
                            separatorColor: "#FFFFFF"
                        });
                        return a.separatorColor = new J.default(a.separatorColor).fade(.5).toRgba(), $(a)
                    },
                    render: function() {
                        var e, t, n, a, o, i, l = this.props,
                            r = (l.isDragMode, l.isDragSection, l.resetSection, l.onClickSectionDragMode, l.index),
                            s = l.navIsTransparent,
                            c = l.inSectionSelector,
                            f = this._getSectionClass(),
                            m = this._getSectionType(),
                            p = this._getPaddingClass(),
                            h = this._getComponentClass(),
                            v = this.getThemeFeature("disableBackgrounds"),
                            b = this.props.binding.get("template_name"),
                            C = -1 !== (0, g.default)(e = (0, y.default)(X).call(X, Q)).call(e, b),
                            S = v ? {} : this.getBackgroundProps("background1", null, C),
                            N = this.getComponentProps("background1"),
                            E = this.getComponentProps("block1"),
                            w = this.getComponentBinding("block1"),
                            T = this.getComponentBinding("slideSettings").get("hidden_section"),
                            k = w.sub("items").get().toArray(),
                            B = (w.get("inlineLayout"), this.getWholeThemeFeature()),
                            L = this.isPreviewMode(),
                            I = this.getComponentBinding("slideSettings").sub("layout_config"),
                            O = (this.getDefaultBinding().get("template_name"), Boolean(I.get("textAlignment"))),
                            P = this.getDefaultBinding().get(["components", "slideSettings", "layout_config"]),
                            A = null == P ? void 0 : P.get("width"),
                            R = this._getSpecialStyleByBg();
                        return (0, d.default)("div", {}, void 0, !1, _.default.createElement(D.default, (0, u.default)({}, S, {
                            className: (0, x.default)((0, y.default)(t = (0, y.default)(n = (0, y.default)(a = (0, y.default)(o = (0, y.default)(i = "s-section s6-section ".concat(R, " ")).call(i, p, " ")).call(o, S && S.className, " ")).call(a, f, " ")).call(n, m, " s6-section-width-")).call(t, A), {
                                "inherit-text-align": O
                            })
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && _.default.createElement(M.default, this.getBackgroundProps("background1")), (0, d.default)("div", {
                            className: (0, x.default)("container", {
                                "ai-mode": L
                            })
                        }, void 0, _.default.createElement(z.default, (0, u.default)({}, E, {
                            items: k,
                            binding: w,
                            themeFeature: B,
                            isHiddenSection: T,
                            isDragMode: !0,
                            sectionIndex: r,
                            componentClass: h,
                            navIsTransparent: s,
                            inSectionSelector: c,
                            backgroundEditorProps: N
                        })))))
                    }
                };
            t.default = ee, e.exports = t.default
        },
        845939: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(663978),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(359036),
                r = (0, i.default)(l),
                s = n(812077),
                u = (0, i.default)(s),
                c = n(205872),
                d = (0, i.default)(c),
                f = n(487672),
                m = (0, i.default)(f),
                g = n(977766),
                p = (0, i.default)(g),
                h = n(366757),
                v = (0, i.default)(h),
                b = n(45697),
                y = (0, i.default)(b),
                C = n(399069),
                _ = (0, i.default)(C),
                S = n(357646),
                N = (0, i.default)(S),
                x = n(183123),
                E = ((0, i.default)(x), n(818166)),
                w = ((0, i.default)(E), n(234584)),
                T = (0, i.default)(w),
                k = n(681987),
                B = n(294184),
                L = (0, i.default)(B);
            t.default = _.default.create({
                displayName: "TitleGroup",
                mixins: [],
                propTypes: {
                    className: y.default.string,
                    section: y.default.object.isRequired,
                    parentBinding: y.default.object,
                    subtitleOnTop: y.default.bool,
                    canHide: y.default.bool,
                    titleSize: y.default.oneOf(["large", "normal"]),
                    titleTag: y.default.oneOf(["h2", "h3", "h4", "h5", "h6"]),
                    subtitleTag: y.default.string,
                    contentCheck: y.default.string,
                    binding: y.default.object.isRequired,
                    inSectionSelector: y.default.bool
                },
                getDefaultProps: function() {
                    return {
                        className: "",
                        subtitleOnTop: !1,
                        parentBinding: void 0,
                        titleSize: "normal",
                        titleTag: "h2",
                        subtitleTag: "h4",
                        canHide: !0
                    }
                },
                componentWillMount: function() {
                    this.showDeleteOverlay = !1, this.hideInEditor = !this.hasTitleContent(!1)
                },
                componentWillUpdate: function(e) {
                    this.hasTitleContent(!1, e.parentBinding) && (this.hideInEditor = !1)
                },
                transformCombinedTitle: function() {},
                onMouseEnterDeleteButton: function() {},
                onMouseLeaveDeleteButton: function() {},
                onClickDeleteButton: function() {},
                onClickShowButton: function() {},
                shouldComponentUpdateOverride: function() {
                    return !1
                },
                isPreviewMode: function() {
                    return !1
                },
                hasTitleContent: function(e, t) {
                    var n = this.props,
                        a = n.binding,
                        o = n.section,
                        i = "beta-s6" === a.get("template_version");
                    return o.sbAnyHasContent(i ? "text1" : "text1 text2", {
                        parentBinding: t || this.props.parentBinding,
                        showOnly: e
                    })
                },
                render: function() {
                    var e, t, n, o, i = this.props,
                        l = i.section,
                        s = i.inSectionSelector,
                        c = this.props,
                        f = c.binding,
                        g = c.parentBinding,
                        h = [this.props.className],
                        b = "beta-s6" === f.get("template_version"),
                        y = f.get("template_name"),
                        C = l.sbUniformTextAlignment("text1", {
                            parentBinding: g
                        }),
                        _ = (T.default.getTheme().toJS() || {}).name,
                        S = (0, k.getShowLine)(_, y),
                        x = (0, L.default)("s-title", (0, m.default)({
                            "has-fresh-line": S
                        }, "sb-title-".concat(C), C));
                    if (this.props.contentCheck && (l.sbHasContent(this.props.contentCheck, {
                            parentBinding: g,
                            showOnly: !1
                        }) || h.push("s-only-title-group")), !l) throw new Error("TitleGroup is expecting a section prop!");
                    if (o = "first" === this.props.section.props.indexType ? "h1" : this.props.titleTag, n = "large" === this.props.titleSize && "h1" !== o ? "s-title-large" : "", b) {
                        h = [];
                        var E = "onyx_new" === T.default.getThemeName() ? "s-item-title" : "s-title";
                        x = "s-title-beta-s6 ".concat(E)
                    }
                    if (l.sbHasContent("text1", {
                            parentBinding: g
                        })) {
                        var w = l.getComponentProps("text1", g);
                        t = Boolean(null == w ? void 0 : w.value) ? (0, u.default)("div", {
                            className: x
                        }, "title", v.default.createElement(N.default, (0, d.default)({
                            slideSettingsBinding: l.getBinding().sub("components.slideSettings"),
                            tagName: o,
                            tagClassName: n,
                            textType: "title",
                            sizeType: "title",
                            inSectionSelector: s,
                            emptyMessage: a("Editor|Add title.")
                        }, w))) : null
                    } else t = null;
                    if (b) {
                        var B = l.getComponentProps("text1", g),
                            I = "onyx_new" === T.default.getThemeName(),
                            O = I ? "itemTitle" : "title",
                            P = I ? "s-item-title" : "s-title";
                        return (0, u.default)("div", {
                            className: "s-title-group"
                        }, "s-title-group", (0, u.default)("div", {
                            className: "s-title-beta-s6 ".concat(P)
                        }, void 0, v.default.createElement(N.default, (0, d.default)({
                            slideSettingsBinding: l.getBinding().sub("components.slideSettings"),
                            emptyMessage: a("Editor|Add title."),
                            tagName: o,
                            textType: "title",
                            sizeType: O,
                            inSectionSelector: s
                        }, B))))
                    }
                    var M, A = l.getComponentProps("text2", g);
                    return e = A && !b && Boolean(null == A ? void 0 : A.value) ? (0, u.default)("div", {
                        className: "s-subtitle"
                    }, "subtitle", v.default.createElement(N.default, (0, d.default)({
                        tagName: this.props.subtitleTag,
                        textType: "heading",
                        sizeType: "subTitle",
                        inSectionSelector: s,
                        emptyMessage: a("Editor|Add subtitle.")
                    }, A))) : null, this.hasTitleContent() ? (0, u.default)("div", {
                        className: L.default.apply(void 0, (0, p.default)(M = ["s-title-group"]).call(M, (0, r.default)(h)))
                    }, "s-title-group", !1, this.props.subtitleOnTop ? [e, t] : [t, e]) : null
                }
            }), e.exports = t.default
        },
        962767: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), t.updateHideReminderStatus = t.sendSiteEditorLink = t.getCouponInfo = void 0, t.switchEditor = function(e) {
                return (0, u.fetchJSON)("/r/v1/sites/".concat(e, "/toggle_experience"), {
                    method: "POST"
                })
            }, t.fetchImageComponents = function(e) {
                var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30;
                return (0, u.fetchJSON)((0, s.default)(t = (0, s.default)(n = "/r/v1/sites/".concat(e, "/image_components?page=")).call(n, a, "&per=")).call(t, o), {
                    method: "GET"
                }).then(u.checkStatus)
            }, t.checkSensitiveWords = function(e, t) {
                return (0, u.fetchJSON)("/r/v1/sites/".concat(e, "/texts/check_sensitive_words"), {
                    method: "POST",
                    body: (0, l.default)({
                        content: t
                    })
                }).then(u.checkStatus)
            };
            var i = n(359340),
                l = (0, o.default)(i),
                r = n(977766),
                s = (0, o.default)(r),
                u = n(483159);
            t.getCouponInfo = function(e) {
                return (0, u.fetchJSON)("/r/v1/pay/coupons/".concat(e)).then(u.checkStatus)
            }, t.sendSiteEditorLink = function(e) {
                return (0, u.fetchJSON)("/r/v1/sites/".concat(e, "/email_notifications"), {
                    method: "POST",
                    body: (0, l.default)({
                        category: "send_website_editor_link"
                    })
                })
            }, t.updateHideReminderStatus = function(e) {
                return (0, u.fetchJSON)("/r/v1/users/me/hide_reminder/".concat(e), {
                    method: "PUT"
                })
            }
        },
        204992: function(e, t, n) {
            "use strict";
            var a = n(686902),
                o = n(14310),
                i = n(620116),
                l = n(834074),
                r = n(778914),
                s = n(239649),
                u = n(820368),
                c = n(663978),
                d = n(60530)(n(60530));
            c(t, "__esModule", {
                value: !0
            });
            var f = n(487672),
                m = (0, d.default)(f),
                g = n(977766),
                p = (0, d.default)(g),
                h = n(51942),
                v = (0, d.default)(h),
                b = n(384887),
                y = (0, d.default)(b),
                C = n(684961),
                _ = (0, d.default)(C);

            function S(e, t) {
                var n = a(e);
                if (o) {
                    var r = o(e);
                    t && (r = i(r).call(r, (function(t) {
                        return l(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) r(n = S(Object(a), !0)).call(n, (function(t) {
                        (0, m.default)(e, t, a[t])
                    }));
                    else if (s) u(e, s(a));
                    else {
                        var o;
                        r(o = S(Object(a))).call(o, (function(t) {
                            c(e, t, l(a, t))
                        }))
                    }
                }
                return e
            }
            var x = {
                    themeColorGroup: function(e) {
                        var t, n, a, o, i, l, r = e.main.toHex(),
                            s = e.main.fade(.07).toRgba(),
                            u = e.main.fade(.2).toRgba();
                        return {
                            "": "--main-color: ".concat(r),
                            ".s-theme-color-1": "color: ".concat(r),
                            ".s-bg-theme-color-1": "background-color: ".concat(r),
                            ".s-bg-theme-color-fade-1": "background-color: ".concat(s),
                            ".s-bg-theme-color-fade-2": "background-color: ".concat(u),
                            ".s-border-theme-color-1": "border-color: ".concat(r),
                            ".s-button-theme-style": (0, p.default)(t = "background-color: ".concat(u, "; color: ")).call(t, r),
                            ".s-button-theme-style-shadow": (0, p.default)(n = (0, p.default)(a = "background-color: ".concat(u, "; box-shadow: 0px 3px 0 ")).call(a, u, "; color: ")).call(n, r),
                            ".s-button-theme-style-border": (0, p.default)(o = (0, p.default)(i = "background-color: ".concat(u, "; border: 2px solid ")).call(i, u, "; color1: ")).call(o, r),
                            ".s-button-theme-style-important": (0, p.default)(l = "background-color: ".concat(u, " !important; color: ")).call(l, r, " !important")
                        }
                    },
                    donationGroup: function(e) {
                        var t = e.main.toHex();
                        return {
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress": "background: ".concat(t),
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before": "background: ".concat(t),
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after": "border-top-color: ".concat(t)
                        }
                    },
                    ecommerceTextGroup: function(e) {
                        var t = e.textColor.toHex(),
                            n = e.textColor.lighten(.2).toHex(),
                            a = "color: ".concat(t, ";"),
                            o = "color: ".concat(n, ";"),
                            i = ".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",
                            l = {
                                ".s-section .category-link-item.selected": a,
                                ".s-section .category-link-item.selected:after": "background: ".concat(t),
                                ".s-section .category-link-item-wrapper:hover .category-link-item:not(.no-hover)": a
                            };
                        return E() || (l = N(N({}, l), {}, {
                            ".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price": a,
                            ".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing": a
                        })), l["".concat(i, " .back-btn")] = l["".concat(i, " .prev-product-btn")] = l["".concat(i, " .next-product-btn")] = a, l["".concat(i, " .back-btn:hover")] = l["".concat(i, " .prev-product-btn:hover")] = l["".concat(i, " .next-product-btn:hover")] = o, l
                    },
                    ecommerceGroup: function(e) {
                        var t, n, a;
                        e.textColor = e.textColor || e.main, e.mobileBg = e.mobileBg || new y.default("#f2f2f2");
                        var o = e.main.toHex(),
                            i = e.mobileBg.toHex(),
                            l = e.mobileBg.mix("#000", .2).toHex(),
                            r = "background: ".concat(o, ";"),
                            s = "background: ".concat(i, ";");
                        return (0, v.default)({
                            ".fixed-login-container .login-container": r,
                            ".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current": "border: 2px solid ".concat(o),
                            ".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile": (0, p.default)(t = "\n        ".concat(s, "\n        border-top: 1px solid ")).call(t, l, ";"),
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn": r,
                            ".s-ecommerce-animation-item": (0, p.default)(n = "\n        border: 2px solid ".concat(o, ";\n        color: ")).call(n, o, ";"),
                            ".s-ecommerce-row-view-product .mobile-select .price-label": "color: ".concat(o),
                            ".s-ecommerce-row-view-product .mobile-select .variation-item.selected": (0, p.default)(a = "border: 1px solid ".concat(o, "; ")).call(a, r),
                            ".s-ecommerce-row-view-product .mobile-select .add-btn": r,
                            ".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot": "border: 1px solid ".concat(o),
                            ".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected": "background: ".concat(o)
                        }, x.ecommerceTextGroup({
                            textColor: e.textColor
                        }))
                    }
                },
                E = function() {
                    var e;
                    return "s5-theme" === ((0, _.default)("conf.isBlog") ? (0, _.default)("blogPostData.pageMeta.isV4") ? (0, _.default)("blogPostData.pageMeta.theme.name") : (0, _.default)("blogPostData.pageMeta.theme.name_with_v4_fallback") : null === (e = (0, _.default)("stores.pageMeta.theme")) || void 0 === e ? void 0 : e.name)
                };
            t.default = x, e.exports = t.default
        },
        297079: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(2991),
                l = (0, o.default)(i),
                r = n(25843),
                s = (0, o.default)(r),
                u = n(981643),
                c = (0, o.default)(u),
                d = n(977766),
                f = (0, o.default)(d),
                m = n(841511),
                g = (0, o.default)(m),
                p = n(778914),
                h = (0, o.default)(p);
            n(569600), n(974916), n(323123);
            var v = n(496486),
                b = (0, o.default)(v),
                y = n(384887),
                C = (0, o.default)(y),
                _ = n(204992),
                S = (0, o.default)(_),
                N = {
                    title: ".s-title",
                    subtitle: ".s-subtitle",
                    itemTitle: ".s-item-title",
                    itemSubtitle: ".s-item-subtitle",
                    titleLink: ".s-title .s-text .s-component-content a",
                    itemTitleLink: ".s-item-title .s-text .s-component-content a",
                    subtitleLink: ".s-subtitle .s-text .s-component-content a",
                    itemSubtitleLink: ".s-item-subtitle .s-text .s-component-content a",
                    textLink: ".s-text .s-component-content a",
                    socialFeedLink: ".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",
                    button: ".s-common-button",
                    buttonHover: ".s-common-button:hover",
                    overlay: ".s-bg-overlay:before",
                    blogInfo: ".s-blog-wrapper .s-blog-details .s-blog-info",
                    storePrice: ".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",
                    termsLink: ".s-terms-link a",
                    socialLinks: ".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",
                    socialLinks2: ".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",
                    mobileActionButton: ".s-mobile-actions .s-mobile-actions-item.one-item",
                    mobileActionButtonForApp: ".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",
                    mobileNavbarButtons: ".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",
                    mobileNavbarButtonsOpen: ".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"
                },
                x = {
                    default: "color",
                    button: "background",
                    buttonHover: "background",
                    mobileActionButton: "background",
                    mobileActionButtonForApp: "color",
                    overlay: "background",
                    mobileNavbarButtons: "background",
                    mobileNavbarButtonsOpen: "background",
                    socialLinks: "background",
                    socialLinks2: "color"
                };

            function E(e, t) {
                var n, a = N[e] || e;
                a = (0, l.default)(n = a.split(",")).call(n, (function(e) {
                    return ".s-custom-colors " + (0, s.default)(e).call(e)
                })).join(",");
                var o, i, r, u = x[e] || x.default;
                if (b.default.isString(t)) return -1 !== (0, c.default)(t).call(t, ":") ? (0, f.default)(r = "".concat(a, "{")).call(r, t, "}") : (0, f.default)(o = (0, f.default)(i = "".concat(a, "{")).call(i, u, ":")).call(o, t, "}");
                var d, m, g = C.default.prototype.validate(t);
                return g ? (0, f.default)(d = (0, f.default)(m = "".concat(a, "{")).call(m, u, ":")).call(d, g.toRgba(), ";}") : void 0
            }
            t.default = {
                generate: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = "",
                        a = null;
                    for (a in e)
                        if (e.hasOwnProperty(a)) {
                            var o = a.split(" ");
                            S.default[a] ? function() {
                                var o = S.default[a](e[a]),
                                    i = function(e) {
                                        var a, i;
                                        (0, g.default)(t.prefix) ? (0, h.default)(a = t.prefix).call(a, (function(t) {
                                            var a;
                                            n += E((0, f.default)(a = "".concat(t, " ")).call(a, e), o[e])
                                        })): n += E((0, f.default)(i = "".concat(t.prefix || "", " ")).call(i, e), o[e])
                                    };
                                for (var l in o) i(l)
                            }() : N[o[0]] ? (0, h.default)(o).call(o, (function(t) {
                                return n += E(t, e[a])
                            })) : E(a, e[a])
                        }
                    return n
                }
            }, e.exports = t.default
        },
        255245: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            });
            var i = n(496486),
                l = ((0, o.default)(i), n(384887)),
                r = ((0, o.default)(l), n(766463)),
                s = n(978307),
                u = {
                    getLayoutOptions: function(e) {
                        return (0, r.getLayoutOptions)(e, s.LAYOUT_CONTROL_SETTINGS)
                    },
                    getLayoutColors: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = [{
                                type: "neutral",
                                value: s.NEUTRAL_COLOR
                            }],
                            n = e.highlight1,
                            a = e.highlight2;
                        return a && t.unshift({
                            type: "secondary",
                            value: a
                        }), n && t.unshift({
                            type: "primary",
                            value: n
                        }), t
                    }
                };
            t.default = u, e.exports = t.default
        },
        532408: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), n(974916), n(115306);
            var i = n(51942),
                l = (0, o.default)(i),
                r = n(977766),
                s = (0, o.default)(r),
                u = n(2991),
                c = (0, o.default)(u),
                d = n(496486),
                f = (0, o.default)(d),
                m = n(766463),
                g = n(653114),
                p = n(684961),
                h = (0, o.default)(p),
                v = (0, m.getThemeName)();

            function b() {
                return g.DEFAULT_LAYOUTS_CLASS
            }

            function y(e) {
                return (0, l.default)({}, g.DEFAULT_LAYOUTS_CLASS, e)
            }

            function C(e, t, n) {
                var a = (0, m.getThemeFeature)("narrowMedia") && 11 !== e && "fresh" !== v,
                    o = a ? 14 : 16,
                    i = a ? e - 1 : e,
                    l = a ? 8 : i,
                    r = a ? 10 : 16;
                11 === e ? r = l = 14 : "onyx_new" === v && "right" === t && (o = 15, r = 15);
                var u = (0, m.generateColumnClassWithOffset)(i, o, 16),
                    c = (0, m.generateColumnClass)(o - i),
                    d = (0, m.generateColumnClassWithOffset)(l, l, 16),
                    f = (0, m.generateColumnClassWithOffset)(r, r, 16),
                    g = "ar" === ((0, h.default)("blogPostData.pageMeta.forcedLocale") || (0, h.default)("stores.pageMeta.forcedLocale")),
                    p = g ? "quarter-offset-left" : "quarter-offset-right",
                    b = g ? "quarter-offset-right" : "quarter-offset-left",
                    C = g ? "omega" : "alpha",
                    _ = g ? "alpha" : "omega";
                switch (11 !== i && 9 !== i || (p = b = ""), t) {
                    case "left":
                        return function() {
                            var e, t, a;
                            return y({
                                repeatableClass: "s-media-left s-layout-mediaLeft",
                                mediaClass: (0, s.default)(e = "".concat(u, " s-left-in-row ")).call(e, C),
                                singleMediaClass: "".concat(d, " s-left-in-row"),
                                textClass: (0, s.default)(t = (0, s.default)(a = "".concat(c, " s-right-in-row ")).call(a, _, " ")).call(t, b),
                                singleTextClass: "".concat(f, " s-right-in-row"),
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        };
                    case "right":
                        return function() {
                            var e, t, a;
                            return y({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                mediaClass: (0, s.default)(e = "".concat(u, " s-right-in-row right ")).call(e, _),
                                singleMediaClass: "".concat(d, " s-right-in-row right"),
                                textClass: (0, s.default)(t = (0, s.default)(a = "".concat(c, " s-left-in-row right ")).call(a, C, " ")).call(t, p),
                                singleTextClass: "".concat(f, " s-left-in-row right"),
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        };
                    case "alternating":
                        return function() {
                            return y({
                                repeatableClass: "s-media-alt s-layout-alt",
                                mediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(u, " ")).call(n, t % 2 ? "s-right-in-row right ".concat(_) : "s-left-in-row ".concat(C))
                                },
                                singleMediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(d, " ")).call(n, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                textClass: function(e, t) {
                                    var n, a, o;
                                    return (0, s.default)(n = "".concat(c, " ")).call(n, t % 2 ? (0, s.default)(a = "s-left-in-row right ".concat(C, " ")).call(a, p) : (0, s.default)(o = "s-right-in-row ".concat(_, " ")).call(o, b))
                                },
                                singleTextClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(f, " ")).call(n, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        }
                }
            }

            function _(e) {
                function t() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return {
                        left: C(e.mediaColumns, "left", t),
                        right: C(e.mediaColumns, "right", t),
                        alternating: C(e.mediaColumns, "alternating", t)
                    }
                }
                return {
                    text: t(),
                    button: t(!0)
                }
            }

            function S(e, t) {
                var n, a = e.getRepeatableBinding("repeatable1").sub(t);
                n = (0, m.getThemeFeature)("leftAlignColumnsMedia") ? "text1" : "text1 text2";
                var o = e.sbUniformTextAlignment(n, {
                    parentBinding: a
                });
                return "glow" === v ? "s-mhi ".concat(o, " fourteen columns offset-one") : "s-mhi ".concat(o)
            }

            function N(e) {
                return e < 2 ? "s-mh" : function(t) {
                    var n = t,
                        a = n.getRepeatableBinding("repeatable1"),
                        o = "";
                    return (0, m.getThemeFeature)("leftAlign") && a.get().size < e && (o = n.sbUniformTextAlignment("text1 text2")), "s-mh ".concat(o)
                }
            }

            function x(e) {
                return {
                    text: function() {
                        return y(e)
                    },
                    button: function() {
                        return y(f.default.extend({}, e, {
                            buttonClass: "s-text-button"
                        }))
                    }
                }
            }

            function E(e) {
                return x({
                    repeatableClass: N(e.columnsNum),
                    itemClass: (0, m.generateItemClassByColumnsNum)(e.columnsNum),
                    mediaClass: S
                })
            }
            var w = {
                    default: {
                        gride: {
                            two: E({
                                columnsNum: 2
                            }),
                            three: E({
                                columnsNum: 3
                            }),
                            four: E({
                                columnsNum: 4
                            }),
                            five: E({
                                columnsNum: 5
                            }),
                            six: E({
                                columnsNum: 6
                            })
                        },
                        list: {
                            xs: _({
                                mediaColumns: 4
                            }),
                            s: _({
                                mediaColumns: 6
                            }),
                            m: _({
                                mediaColumns: 8
                            }),
                            l: _({
                                mediaColumns: 10
                            }),
                            center: x({
                                repeatableClass: "".concat(N(1), " s-layout-normal"),
                                innerItemClass: (0, m.generateItemClassByColumnsNum)(1).replace("no-float", "") + ("persona" === v ? "" : " center"),
                                mediaClass: S
                            }),
                            left: {
                                text: C(11, "left"),
                                button: C(11, "left", !0)
                            },
                            right: {
                                text: C(11, "right"),
                                button: C(11, "right", !0)
                            },
                            alternating: {
                                text: C(11, "alternating"),
                                button: C(11, "alternating", !0)
                            }
                        }
                    }
                },
                T = (0, m.getLayoutMapping)(w),
                k = {
                    getLayouts: function() {
                        return g.FEATURE_LIST_LAYOUTS
                    },
                    getLayoutStyleConfig: function(e) {
                        return T.default[e] || b
                    },
                    getLayoutOptions: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (0, m.getLayoutOptions)(e, t ? g.NEW_LAYOUT_CONTROL_SETTINGS : g.LAYOUT_CONTROL_SETTINGS)
                    },
                    getLayoutSubOptions: function(e) {
                        return (0, c.default)(g.NEW_LAYOUT_SUB_CONTROL_SETTINGS).call(g.NEW_LAYOUT_SUB_CONTROL_SETTINGS, (function(t) {
                            return (0, m.getLayoutOptions)(e, t)
                        }))
                    },
                    getMobileLayoutOptions: function(e) {
                        return (0, m.getLayoutOptions)(e, g.MOBILE_LAYOUT_SETTINGS)
                    }
                };
            t.default = k, e.exports = t.default
        },
        219325: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = n(752424),
                i = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(726394),
                u = (0, r.default)(s),
                c = n(569198),
                d = (0, r.default)(c),
                f = n(31238),
                m = (0, r.default)(f),
                g = n(678580),
                p = (0, r.default)(g),
                h = n(977766),
                v = (0, r.default)(h);
            n(974916), n(323123), n(569600);
            var b = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" != typeof e) return {
                    default: e
                };
                var n = y(t);
                if (n && n.has(e)) return n.get(e);
                var o = {},
                    r = i && l;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = r ? l(e, s) : null;
                        u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                    }
                return o.default = e, n && n.set(e, o), o
            }(n(496486));

            function y(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    n = new o;
                return (y = function(e) {
                    return e ? n : t
                })(e)
            }
            var C = (0, n(11945).getIsEditorRtlLayout)(),
                _ = {
                    twoLeftOneRight: {
                        cellCount: 3
                    },
                    oneLeftTwoRight: {
                        cellCount: 3
                    },
                    twoTopThreeBottom: {
                        cellCount: 5
                    },
                    twoTopTwoBottom: {
                        cellCount: 4
                    }
                };
            b.forOwn(_, (function(e, t) {
                e.name = t
            }));
            var S = function() {
                    function e(t) {
                        (0, u.default)(this, e);
                        var n = t.split("-");
                        this.rows = "", this.columns = "", this.magazineLayoutName = "", this.gridType = n[0], this.cellHeight = n[4], this.cellSpacing = n[5], this.contentWidth = n[6], "grid" === n[0] ? (this.rows = (0, m.default)(n[1]), this.columns = (0, m.default)(n[2])) : "magazine" === n[0] && (this.magazineLayoutName = n[3])
                    }
                    return (0, d.default)(e, [{
                        key: "isMagazine",
                        value: function() {
                            return "magazine" === this.gridType
                        }
                    }, {
                        key: "isGrid",
                        value: function() {
                            return "grid" === this.gridType
                        }
                    }, {
                        key: "canBeExtraLarge",
                        value: function() {
                            return this.isGrid() && 1 === this.rows
                        }
                    }, {
                        key: "serialize",
                        value: function() {
                            return [this.gridType, this.rows, this.columns, this.magazineLayoutName, this.cellHeight, this.cellSpacing, this.contentWidth].join("-")
                        }
                    }, {
                        key: "getCellCount",
                        value: function() {
                            return this.isGrid() ? this.rows * this.columns : _[this.magazineLayoutName].cellCount
                        }
                    }, {
                        key: "getTopRightCellIndex",
                        value: function() {
                            return this.isGrid() ? this.columns - 1 : {
                                twoLeftOneRight: 2,
                                oneLeftTwoRight: 0,
                                twoTopThreeBottom: 1,
                                twoTopTwoBottom: 1
                            }[this.magazineLayoutName]
                        }
                    }, {
                        key: "getTopRowCellIndices",
                        value: function() {
                            return this.isGrid() ? b.range(0, this.columns) : {
                                twoLeftOneRight: [0, 2],
                                oneLeftTwoRight: [0, 2],
                                twoTopThreeBottom: [0, 1],
                                twoTopTwoBottom: [0, 1]
                            }[this.magazineLayoutName]
                        }
                    }]), e
                }(),
                N = ["profile", "ion", "sleek", "persona"],
                x = ["sleek", "ion", "persona"],
                E = {},
                w = {
                    getDefaultLayoutKey: function(e, t) {
                        return t
                    },
                    getLayout: function(e, t, n) {
                        var a = this.parseLayoutVariation(t);

                        function o(t) {
                            var n;
                            return "s5-theme" === e ? t : (0, p.default)(n = ["pitch_new", "zine", "bright", "glow", "minimal"]).call(n, e)
                        }
                        return function() {
                            var i, l, r, s = (0, v.default)(i = (0, v.default)(l = "".concat(e, "-")).call(l, t, "-")).call(i, n);
                            if (E[s]) return E[s];
                            var u = "normal" === a.contentWidth;
                            (0, p.default)(N).call(N, e) && (u = !0);
                            var c = {};
                            c.contentWidthIsNormal = u, c.containerClass = u ? "container " : "", c.containerClass += "_cell-spacing-".concat(a.cellSpacing, " "), c.needsPerspContainer = u && "perspective" === e, c.needs16ColumnContainer = u && !(0, p.default)(r = ["perspective", "persona"]).call(r, e), c.sectionClass = u ? "" : " _wide ";
                            var d = (0, p.default)(x).call(x, e) ? "mobile" : "desktop";
                            c.sectionClass += " s-grid-section__".concat(d, "-view-on-tablet");
                            var f = "onyx_new" === e;

                            function m(t, n, a, i) {
                                var l = o(i) ? Math.max(0, n - a) : 0,
                                    r = u ? 0 : 2 * c.cellPadding,
                                    s = 10 + Math.max(0, l - r),
                                    d = 0 !== t && "ion" !== e ? 10 : -30;
                                return 0 === t && (d = 10 - a + (o(i) ? n : 0)), "ion" === e && (d = -46), {
                                    layoutButtonTop: d,
                                    topRowimageAndLinkButtonTop: s,
                                    layoutButtonOverlapsTopRightButton: !u && d + 34 + 10 > s + r
                                }
                            }
                            return c.isWideWithLeftAlignedHeading = f && !u, c.cellPadding = {
                                none: 0,
                                small: n ? 3 : 5,
                                large: n ? 7 : 15
                            }[a.cellSpacing], c.containerMargin = u ? -c.cellPadding : 0, c.containerPadding = u ? 0 : c.cellPadding, c.cellClassName = "s-grid-section-cell ", c.cellMinHeight = {
                                small: {
                                    desktop: 160,
                                    mobile: 120
                                },
                                medium: {
                                    desktop: 250,
                                    mobile: 150
                                },
                                large: {
                                    desktop: 350,
                                    mobile: 200
                                },
                                extraLarge: {
                                    desktop: 600,
                                    mobile: 300
                                }
                            }[a.cellHeight][n ? "mobile" : "desktop"], a.getCellCount() % 2 != 0 && (c.cellClassName += " _odd-cell-count "), a.isGrid() ? (c.containerClass += "_grid", c.cellClassName += " _".concat(a.columns, "-columns ")) : a.isMagazine() && (c.containerClass += "_magazine ", c.cellClassName += " _".concat(a.magazineLayoutName, " ")), c.useMagazineColumnDom = a.isMagazine() && ("twoLeftOneRight" === a.magazineLayoutName || "oneLeftTwoRight" === a.magazineLayoutName), c.magazineColumnClass = "s-magazine-column _".concat(a.magazineLayoutName), c.getItemBorder = function(e) {
                                return e || "none" === a.cellSpacing ? null : "1px solid #eee"
                            }, c.isTopRightCell = function(e) {
                                return a.getTopRightCellIndex() === e
                            }, c.isTopRowCell = function(e) {
                                var t;
                                return (0, p.default)(t = a.getTopRowCellIndices()).call(t, e)
                            }, c.getItemButtonStyles = function(e) {
                                var t = e.cellIndex,
                                    n = e.sectionIndex,
                                    o = e.navHeight,
                                    i = e.sectionPaddingTop,
                                    l = e.hasTitleGroup,
                                    r = e.s5NavOverlapsFirstSection,
                                    s = 10,
                                    u = 10,
                                    c = 0;
                                return this.isTopRowCell(t) && !l && (s = m(n, o, i, r).topRowimageAndLinkButtonTop, this.isTopRightCell(t) && (u += 160, c += 160)), a.isGrid() && (c += 28), C ? {
                                    moveButton: {
                                        top: s,
                                        right: "initial",
                                        left: u
                                    },
                                    imageAndLinkButton: {
                                        top: s,
                                        right: "initial",
                                        left: c
                                    }
                                } : {
                                    moveButton: {
                                        top: s,
                                        right: u
                                    },
                                    imageAndLinkButton: {
                                        top: s,
                                        right: c
                                    }
                                }
                            }, c.getLayoutButtonStyle = function(e) {
                                return {
                                    top: m(e.sectionIndex, e.navHeight, e.sectionPaddingTop, e.s5NavOverlapsFirstSection).layoutButtonTop
                                }
                            }, c.getSectionPaddingTop = function(t, i, l, r) {
                                if (n && !i && 0 === l && a.isGrid()) return 0 === c.containerPadding ? 0 : 20;
                                if ("perspective" === e && i && !u) return 80;
                                if ("minimal" === e || "pitch_new" === e) {
                                    var s = u || i;
                                    return (0 === l ? t : 0) + {
                                        minimal: "minimal" === e && s ? 70 : 0,
                                        pitch_new: "pitch_new" === e && s ? 90 : 0
                                    }[e]
                                }
                                return u || i ? "" : o(r) && 0 === l ? t : 0
                            }, E[s] = c, c
                        }
                    },
                    parseLayoutVariation: function(e) {
                        return new S(e)
                    },
                    magazineLayouts: _,
                    themesWithoutWideGridLayout: N
                };
            t.default = w, e.exports = t.default
        },
        299293: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(663978),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(51942),
                r = (0, i.default)(l),
                s = n(977766),
                u = (0, i.default)(s),
                c = n(981643),
                d = (0, i.default)(c),
                f = n(686902),
                m = (0, i.default)(f),
                g = n(496486),
                p = (0, i.default)(g),
                h = n(766463),
                v = n(234584),
                b = (0, i.default)(v),
                y = {
                    layoutClass: "",
                    mediaClass: "",
                    textClass: "",
                    type: "",
                    showImage: !0
                };

            function C() {
                return y
            }

            function _(e) {
                return (0, r.default)({}, y, e)
            }

            function S(e, t) {
                return function(n) {
                    var a, o, i = "right" === e ? "right" : "",
                        l = "container s-rva s-layout-".concat(p.default.camelCase((0, u.default)(a = "".concat(t, "-")).call(a, e))),
                        r = "noImage" != e,
                        s = "",
                        c = "",
                        d = b.default.getIsRtlLayout() ? "quarter-offset-right" : "quarter-offset-left",
                        f = b.default.getIsRtlLayout() ? "quarter-offset-left" : "quarter-offset-right";
                    return "noImage" === e ? s = "s-rva-text sixteen columns" : (s = (0, u.default)(o = "s-rva-text eight columns ".concat("".concat("right" === e ? d : f), " ")).call(o, i), c = "s-rva-media eight columns ".concat(i)), _({
                        layoutClass: l,
                        textClass: s,
                        mediaClass: c,
                        type: t,
                        showImage: r
                    })
                }
            }

            function N(e) {
                return {
                    left: S("right", e),
                    right: S("left", e),
                    noImage: S("noImage", e)
                }
            }
            var x = {
                button: {
                    left: function() {
                        return _({
                            type: "button"
                        })
                    },
                    right: function() {
                        return _({
                            type: "button"
                        })
                    },
                    noImage: function() {
                        return _({
                            type: "button",
                            showImage: !1
                        })
                    }
                },
                images: {
                    left: function() {
                        return _({
                            type: "images"
                        })
                    },
                    right: function() {
                        return _({
                            type: "images"
                        })
                    },
                    noImage: function() {
                        return _({
                            type: "images",
                            showImage: !1
                        })
                    }
                },
                signup: {
                    left: function() {
                        return _({
                            type: "signup"
                        })
                    },
                    right: function() {
                        return _({
                            type: "signup"
                        })
                    },
                    noImage: function() {
                        return _({
                            type: "signup",
                            showImage: !1
                        })
                    }
                }
            };

            function E(e) {
                return {
                    left: {
                        swap: function() {
                            return _((0, r.default)(N(e).left(), {
                                type: e,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return _((0, r.default)(N(e).left(), {
                                type: e,
                                swapTitle: !1
                            }))
                        }
                    },
                    right: {
                        swap: function() {
                            return _((0, r.default)(N(e).right(), {
                                type: e,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return _((0, r.default)(N(e).right(), {
                                type: e,
                                swapTitle: !1
                            }))
                        }
                    },
                    noImage: {
                        swap: function() {
                            return _((0, r.default)(N(e).noImage(), {
                                type: e,
                                showImage: !1,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return _((0, r.default)(N(e).noImage(), {
                                type: e,
                                showImage: !1,
                                swapTitle: !1
                            }))
                        }
                    }
                }
            }
            var w = {
                    button: E("button"),
                    images: E("images"),
                    signup: E("signup")
                },
                T = {
                    default: {
                        button: N("button"),
                        images: N("images"),
                        signup: N("signup")
                    },
                    persona: x,
                    perspective: x,
                    glow: w
                },
                k = (0, h.getLayoutMapping)(T),
                B = {
                    default: {
                        buttonRight: "button-left",
                        signupRight: "signup-left",
                        imagesRight: "images-left",
                        buttonLeft: "button-right",
                        signupLeft: "signup-right",
                        imagesLeft: "images-right"
                    }
                },
                L = "automatic",
                I = [{
                    key: "height_mobile",
                    label: function() {
                        return a("Editor|Section Height")
                    },
                    component: "select",
                    children: [{
                        value: L,
                        label: function() {
                            return a("Automatic")
                        }
                    }, {
                        value: "full",
                        label: function() {
                            return a("Editor|Full Height")
                        }
                    }],
                    defaultValue: L
                }];
            t.default = {
                getDefaultLayoutKey: function(e, t, n) {
                    var a = (B[e] || B.default)[t = t || ""];
                    return (k[e] || k.default)[t] && (a = t), "glow" === e ? (a || (-1 !== (0, d.default)(t).call(t, "button") ? a = "button-left-swap" : -1 !== (0, d.default)(t).call(t, "signup") ? a = "signup-left-swap" : -1 !== (0, d.default)(t).call(t, "images") && (a = "images-left-swap")), a || "signup_form" !== n || (a = "signup-noImage-swap")) : (a || (-1 !== (0, d.default)(t).call(t, "button") ? a = "button-left" : -1 !== (0, d.default)(t).call(t, "signup") ? a = "signup-left" : -1 !== (0, d.default)(t).call(t, "images") && (a = "images-left")), a || "signup_form" !== n || (a = "signup-noImage")), a || (a = (0, m.default)(k[e] || k.default)[0]), a
                },
                getLayout: function(e, t) {
                    return (k[e] || k.default)[t] || C
                },
                getLayoutOptions: function(e) {
                    return T[e] || T.default
                },
                getMobileLayoutOptions: function(e) {
                    return I
                }
            }, e.exports = t.default
        },
        46366: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(51942),
                c = (0, s.default)(u),
                d = n(977766),
                f = (0, s.default)(d),
                m = n(686902),
                g = (0, s.default)(m),
                p = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(496486)),
                h = n(766463);

            function v(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }
            var b = "automatic",
                y = [{
                    key: "columns_mobile",
                    label: function() {
                        return a("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: b,
                        label: function() {
                            return a("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: "three",
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: "four",
                        label: function() {
                            return "4"
                        }
                    }],
                    defaultValue: b
                }],
                C = {
                    itemClass: "columns half-fixed no-float",
                    naturalImage: !0
                },
                _ = (0, h.getThemeName)();

            function S() {
                return C
            }

            function N(e) {
                return (0, c.default)({}, C, e)
            }

            function x(e, t) {
                var n = t.get().size,
                    a = "half";
                return (3 === n && "center" === e || n > 4) && (a = "third"), N({
                    itemClass: a += " half-fixed s-persp-column",
                    naturalImage: !1
                })
            }
            var E, w = {
                    default: {
                        col: function(e) {
                            var t = e.get().size,
                                n = (0, h.getThemeFeature)("narrowMedia"),
                                a = "";
                            return a = t <= 1 ? n ? "third" : "sixteen" : 2 == t ? n ? "third" : "eight" : 3 == t ? "third" : 4 == t ? "four" : "three", "persona" === _ && (a = "three"), "ion" === _ && (a = "four"), N({
                                itemClass: a += " columns half-fixed no-float",
                                naturalImage: !1
                            })
                        },
                        natural: function() {
                            var e = "columns half-fixed no-float small-icons";
                            return "perspective" === _ && (e = "s-persp-column half-fixed no-float small-icons"), N({
                                itemClass: e,
                                naturalImage: !0
                            })
                        }
                    },
                    perspective: (E = function(e) {
                        return {
                            col: p.curry(x)(e)
                        }
                    }, {
                        center: E("center"),
                        mediaLeft: E("left"),
                        mediaRight: E("right")
                    })
                },
                T = (0, h.getLayoutMapping)(w),
                k = {
                    perspective: {
                        mediaLeft: "mediaLeft-col",
                        mediaRight: "mediaRight-col",
                        center: "center-col"
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t, n) {
                    var a, o;
                    return t = t || "", (T[e] || T.default)[t] ? t : (n && (a = (k[e] || k.default)[(0, f.default)(o = "".concat(n, "-")).call(o, t)]), a || (a = (0, g.default)(T[e] || T.default)[0]), a)
                },
                getLayout: function(e, t) {
                    return (T[e] || T.default)[t] || C || S
                },
                getLayoutOptions: function(e) {
                    return w[e] || w.default
                },
                getMobileLayoutOptions: function() {
                    return y
                }
            }, e.exports = t.default
        },
        7146: function(e, t, n) {
            "use strict";
            var a = n(663978),
                o = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), n(974916), n(115306), n(323123);
            var i = n(51942),
                l = (0, o.default)(i),
                r = n(977766),
                s = (0, o.default)(r),
                u = n(981643),
                c = (0, o.default)(u),
                d = n(686902),
                f = (0, o.default)(d),
                m = n(496486),
                g = (0, o.default)(m),
                p = n(766463),
                h = {
                    repeatableClass: "",
                    itemClass: "",
                    innerItemClass: "",
                    mediaClass: "",
                    singleMediaClass: "",
                    textClass: "",
                    singleTextClass: "",
                    textInnerClass: "",
                    buttonClass: ""
                },
                v = (0, p.getThemeName)();

            function b() {
                return h
            }

            function y(e) {
                return (0, l.default)({}, h, e)
            }

            function C(e, t, n) {
                var a = (0, p.getThemeFeature)("narrowMedia") && 11 !== e,
                    o = a ? 14 : 16,
                    i = 16,
                    l = a ? e - 1 : e,
                    r = a ? 8 : l,
                    u = a ? 10 : 16;
                11 === e ? u = r = 14 : "onyx_new" === v && "right" === t && (o = 15, u = 15), "persona" === v && (o = 12, i = 12, u = 12);
                var c = (0, p.generateColumnClassWithOffset)(l, o, i),
                    d = (0, p.generateColumnClass)(o - l),
                    f = (0, p.generateColumnClassWithOffset)(r, r, i),
                    m = (0, p.generateColumnClassWithOffset)(u, u, i),
                    g = "quarter-offset-right",
                    h = "quarter-offset-left";
                if (11 !== l && 9 !== l || (g = h = ""), "persona" === v) switch (t) {
                    case "right":
                        return function() {
                            var e;
                            return y({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                innerItemClass: (0, p.generateColumnClass)(12),
                                mediaClass: "".concat(c, " s-right-in-row right omega"),
                                singleMediaClass: "".concat(f, " s-right-in-row right alpha omega"),
                                textClass: (0, s.default)(e = "".concat(d, " s-left-in-row right alpha ")).call(e, g),
                                singleTextClass: "".concat(m, " s-left-in-row right alpha omega"),
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        };
                    case "alt":
                        return function() {
                            return y({
                                repeatableClass: "s-media-alt s-layout-alt",
                                innerItemClass: (0, p.generateColumnClass)(12),
                                mediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(c, " ")).call(n, t % 2 ? "s-right-in-row right omega" : "s-left-in-row alpha")
                                },
                                singleMediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(f, " ")).call(n, t % 2 ? "s-right-in-row right alpha omega" : "s-left-in-row alpha omega")
                                },
                                textClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(d, " ")).call(n, t % 2 ? "s-left-in-row right alpha ".concat(g) : "s-right-in-row omega ".concat(h))
                                },
                                singleTextClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(m, " ")).call(n, t % 2 ? "s-left-in-row right alpha omega" : "s-right-in-row alpha omega")
                                },
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        }
                }
                switch (t) {
                    case "left":
                        return function() {
                            var e;
                            return y({
                                repeatableClass: "s-media-left s-layout-mediaLeft",
                                mediaClass: "".concat(c, " s-left-in-row"),
                                singleMediaClass: "".concat(f, " s-left-in-row"),
                                textClass: (0, s.default)(e = "".concat(d, " s-right-in-row ")).call(e, h),
                                singleTextClass: "".concat(m, " s-right-in-row"),
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        };
                    case "right":
                        return function() {
                            var e;
                            return y({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                mediaClass: "".concat(c, " s-right-in-row right"),
                                singleMediaClass: "".concat(f, " s-right-in-row right"),
                                textClass: (0, s.default)(e = "".concat(d, " s-left-in-row right ")).call(e, g),
                                singleTextClass: "".concat(m, " s-left-in-row right"),
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        };
                    case "alt":
                        return function() {
                            return y({
                                repeatableClass: "s-media-alt s-layout-alt",
                                mediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(c, " ")).call(n, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                singleMediaClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(f, " ")).call(n, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                textClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(d, " ")).call(n, t % 2 ? "s-left-in-row right ".concat(g) : "s-right-in-row ".concat(h))
                                },
                                singleTextClass: function(e, t) {
                                    var n;
                                    return (0, s.default)(n = "".concat(m, " ")).call(n, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                textInnerClass: "",
                                buttonClass: n ? "s-text-button" : ""
                            })
                        }
                }
            }

            function _(e) {
                function t() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return {
                        left: C(e.mediaColumns, "left", t),
                        right: C(e.mediaColumns, "right", t),
                        alt: C(e.mediaColumns, "alt", t)
                    }
                }
                return {
                    text: t(),
                    button: t(!0)
                }
            }

            function S(e, t) {
                var n, a = e,
                    o = a.getRepeatableBinding("repeatable1").sub(t);
                n = (0, p.getThemeFeature)("leftAlignColumnsMedia") ? "text1" : "text1 text2 text3";
                var i = a.sbUniformTextAlignment(n, {
                    parentBinding: o
                });
                return "glow" === v ? "s-mhi ".concat(i, " fourteen columns offset-one") : "s-mhi ".concat(i)
            }

            function N(e) {
                return e < 2 ? "s-mh" : function(t) {
                    var n = t,
                        a = n.getRepeatableBinding("repeatable1"),
                        o = "";
                    return (0, p.getThemeFeature)("leftAlign") && a.get().size < e && (o = n.sbUniformTextAlignment("text1 text2")), "s-mh ".concat(o)
                }
            }

            function x(e) {
                return {
                    text: function() {
                        return y(e)
                    },
                    button: function() {
                        return y(g.default.extend({}, e, {
                            buttonClass: "s-text-button"
                        }))
                    }
                }
            }

            function E(e) {
                return x({
                    repeatableClass: N(e.columnsNum),
                    itemClass: (0, p.generateItemClassByColumnsNum)(e.columnsNum),
                    mediaClass: S
                })
            }

            function w() {
                return x({
                    repeatableClass: "".concat(N(1), " s-layout-normal"),
                    innerItemClass: (0, p.generateItemClassByColumnsNum)(1).replace("no-float", "") + ("persona" === v ? "" : " center"),
                    mediaClass: S
                })
            }
            var T, k = {
                    two: E({
                        columnsNum: 2
                    }),
                    three: E({
                        columnsNum: 3
                    }),
                    four: E({
                        columnsNum: 4
                    }),
                    five: E({
                        columnsNum: 5
                    }),
                    six: E({
                        columnsNum: 6
                    })
                },
                B = {
                    default: {
                        col: k,
                        row: {
                            small: _({
                                mediaColumns: 4
                            }),
                            medium1: _({
                                mediaColumns: 6
                            }),
                            medium2: _({
                                mediaColumns: 8
                            }),
                            large: _({
                                mediaColumns: 10
                            })
                        },
                        media: {
                            center: w(),
                            top: w(),
                            bottom: w(),
                            left: {
                                text: C(11, "left"),
                                button: C(11, "left", !0)
                            },
                            right: {
                                text: C(11, "right"),
                                button: C(11, "right", !0)
                            },
                            alt: {
                                text: C(11, "alt"),
                                button: C(11, "alt", !0)
                            }
                        }
                    },
                    persona: {
                        col: k,
                        row: {
                            small: _({
                                mediaColumns: 3
                            }),
                            medium1: _({
                                mediaColumns: 4
                            }),
                            medium2: _({
                                mediaColumns: 6
                            }),
                            large: _({
                                mediaColumns: 8
                            })
                        },
                        media: {
                            center: w(),
                            left: {
                                text: C(9, "left"),
                                button: C(9, "left", !0)
                            },
                            right: {
                                text: C(9, "right"),
                                button: C(9, "right", !0)
                            },
                            alt: {
                                text: C(9, "alt"),
                                button: C(9, "alt", !0)
                            }
                        }
                    },
                    perspective: (T = {
                        col: {
                            three: {
                                text: function() {
                                    return y({
                                        itemClass: "s-persp-column third"
                                    })
                                },
                                button: function() {
                                    return y({
                                        itemClass: "s-persp-column third",
                                        buttonClass: "s-text-button s-persp-column"
                                    })
                                }
                            }
                        },
                        row: {
                            large: {
                                text: function() {
                                    return y({
                                        mediaClass: "s-persp-column half",
                                        textClass: "s-persp-column half"
                                    })
                                },
                                button: function() {
                                    return y({
                                        mediaClass: "s-persp-column half",
                                        textClass: "s-persp-column half",
                                        buttonClass: "s-text-button"
                                    })
                                }
                            }
                        },
                        media: {
                            center: w()
                        }
                    }, {
                        center: T,
                        mediaLeft: T,
                        mediaRight: T
                    })
                },
                L = (0, p.getLayoutMapping)(B),
                I = {
                    default: {
                        "columns-2col": "col-two-text",
                        "columns-3col": "col-three-text",
                        "columns-4col": "col-four-text",
                        "columns-5col": "col-five-text",
                        "columns-6col": "col-six-text",
                        "columns-": "col-five-text",
                        "media-normal": "media-center-text",
                        "media-mediaLeft": "media-left-text",
                        "media-mediaRight": "media-right-text",
                        "media-alt": "media-alt-text",
                        "media-": "media-center-text",
                        "rows-mediaLeft": "row-medium1-text-left",
                        "rows-mediaRight": "row-medium1-text-right",
                        "rows-alt": "row-medium1-text-alt",
                        "rows-": "row-medium1-text-left"
                    },
                    perspective: {
                        "columns-mediaLeft": "mediaLeft-col-three-text",
                        "columns-mediaRight": "mediaRight-col-three-text",
                        "columns-center": "center-col-three-text",
                        "columns-": "mediaLeft-col-three-text",
                        "rows-mediaLeft": "mediaLeft-row-large-text",
                        "rows-mediaRight": "mediaRight-row-large-text",
                        "rows-center": "center-row-large-text",
                        "rows-": "mediaLeft-row-large-text",
                        "media-mediaLeft": "mediaLeft-media-center-text",
                        "media-mediaRight": "mediaRight-media-center-text",
                        "media-center": "center-media-center-text",
                        "media-": "mediaLeft-media-center-text"
                    }
                },
                O = {
                    default: {
                        col: function(e) {
                            return "col-three-".concat(e)
                        },
                        row: function(e) {
                            return "row-medium1-".concat(e, "-left")
                        },
                        media: function(e) {
                            return "media-center-".concat(e)
                        },
                        bigMedia: function(e) {
                            return "media-bottom-".concat(e)
                        }
                    },
                    perspective: {
                        col: function(e, t) {
                            var n;
                            return (0, s.default)(n = "".concat(e, "-col-three-")).call(n, t)
                        },
                        row: function(e, t) {
                            var n;
                            return (0, s.default)(n = "".concat(e, "-row-large-")).call(n, t)
                        },
                        media: function(e, t) {
                            var n;
                            return (0, s.default)(n = "".concat(e, "-media-center-")).call(n, t)
                        }
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t, n) {
                    var a, o;
                    if (t = t || "", (L[e] || L.default)[t]) return t;
                    if (n && (a = (I[e] || I.default)[(0, s.default)(o = "".concat(n, "-")).call(o, t)]), !a) {
                        var i = -1 !== (0, c.default)(t).call(t, "button") ? "button" : "text",
                            l = "perspective" === e ? 1 : 0,
                            r = t.split("-"),
                            u = (O[e] || O.default)[r[l]];
                        a = "perspective" === e ? u ? u(r[0], i) : "" : u ? u(i) : ""
                    }
                    return a || (a = (0, f.default)(L[e] || L.default)[0]), a
                },
                getLayout: function(e, t) {
                    return (L[e] || L.default)[t] || h || b
                },
                getLayoutOptions: function(e) {
                    return B[e] || B.default
                }
            }, e.exports = t.default
        },
        174494: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(726394),
                c = (0, s.default)(u),
                d = n(569198),
                f = (0, s.default)(d),
                m = n(31238),
                g = (0, s.default)(m),
                p = n(678580),
                h = (0, s.default)(p),
                v = n(977766),
                b = (0, s.default)(v);
            n(974916), n(323123), n(569600);
            var y = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var n = C(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    i = l && r;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = i ? r(e, s) : null;
                        u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                    }
                return a.default = e, n && n.set(e, a), a
            }(n(496486));

            function C(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (C = function(e) {
                    return e ? n : t
                })(e)
            }
            var _ = (0, n(11945).getIsEditorRtlLayout)(),
                S = {
                    oneLeftOneBigRight: {
                        cellCount: 2
                    },
                    oneBigLeftOneRight: {
                        cellCount: 2
                    },
                    twoLeftOneRight: {
                        cellCount: 3
                    },
                    oneLeftTwoRight: {
                        cellCount: 3
                    },
                    twoTopThreeBottom: {
                        cellCount: 5
                    },
                    twoTopTwoBottom: {
                        cellCount: 4
                    }
                };
            y.forOwn(S, (function(e, t) {
                e.name = t
            }));
            var N = function() {
                    function e(t) {
                        (0, c.default)(this, e);
                        var n = t.split("-");
                        this.rows = "", this.columns = "", this.magazineLayoutName = "", this.gridType = n[0], this.cellHeight = n[4], this.cellSpacing = n[5], this.contentWidth = n[6], "grid" === n[0] ? (this.rows = (0, g.default)(n[1]), this.columns = (0, g.default)(n[2])) : "magazine" === n[0] && (this.magazineLayoutName = n[3])
                    }
                    return (0, f.default)(e, [{
                        key: "isMagazine",
                        value: function() {
                            return "magazine" === this.gridType
                        }
                    }, {
                        key: "isGrid",
                        value: function() {
                            return "grid" === this.gridType
                        }
                    }, {
                        key: "canBeExtraLarge",
                        value: function() {
                            return this.isGrid() && 1 === this.rows
                        }
                    }, {
                        key: "serialize",
                        value: function() {
                            return [this.gridType, this.rows, this.columns, this.magazineLayoutName, this.cellHeight, this.cellSpacing, this.contentWidth].join("-")
                        }
                    }, {
                        key: "getCellCount",
                        value: function() {
                            return this.isGrid() ? this.rows * this.columns : S[this.magazineLayoutName].cellCount
                        }
                    }, {
                        key: "getTopRightCellIndex",
                        value: function() {
                            return this.isGrid() ? this.columns - 1 : {
                                oneLeftOneBigRight: 1,
                                oneBigLeftOneRight: 1,
                                twoLeftOneRight: 2,
                                oneLeftTwoRight: 0,
                                twoTopThreeBottom: 1,
                                twoTopTwoBottom: 1
                            }[this.magazineLayoutName]
                        }
                    }, {
                        key: "getTopRowCellIndices",
                        value: function() {
                            return this.isGrid() ? y.range(0, this.columns) : {
                                oneLeftOneBigRight: [0, 1],
                                oneBigLeftOneRight: [0, 1],
                                twoLeftOneRight: [0, 2],
                                oneLeftTwoRight: [0, 2],
                                twoTopThreeBottom: [0, 1],
                                twoTopTwoBottom: [0, 1]
                            }[this.magazineLayoutName]
                        }
                    }]), e
                }(),
                x = ["profile", "ion", "sleek", "persona"],
                E = ["sleek", "ion", "persona"],
                w = {},
                T = ["button", "signup"],
                k = [{
                    key: "media_position",
                    label: function() {
                        return a("Editor|Media Position")
                    },
                    component: "select",
                    children: [{
                        value: "noImage",
                        label: function() {
                            return a("Editor|No Image")
                        }
                    }, {
                        value: "top",
                        label: function() {
                            return a("Editor|Top")
                        }
                    }, {
                        value: "bottom",
                        label: function() {
                            return a("Editor|Bottom")
                        }
                    }]
                }],
                B = [{
                    key: "vertical_alignment",
                    label: function() {
                        return a("Editor|Content Align")
                    },
                    component: "verticalAlignment"
                }, {
                    key: "showTitle",
                    label: function() {
                        return a("Editor|Show Titles")
                    },
                    component: "checkbox"
                }],
                L = {
                    getDefaultLayoutKey: function(e, t) {
                        return t
                    },
                    getGridCellLayoutOptions: function() {
                        return T
                    },
                    getGridCellLayoutMenu: function() {
                        return k
                    },
                    getGridLayoutMenu: function() {
                        return B
                    },
                    getLayout: function(e, t, n) {
                        var a = this.parseLayoutVariation(t);

                        function o(t) {
                            var n;
                            return "s5-theme" === e ? t : (0, h.default)(n = ["pitch_new", "zine", "bright", "glow", "minimal"]).call(n, e)
                        }
                        return function() {
                            var i, l, r, s = (0, b.default)(i = (0, b.default)(l = "".concat(e, "-")).call(l, t, "-")).call(i, n);
                            if (w[s]) return w[s];
                            var u = "normal" === a.contentWidth;
                            (0, h.default)(x).call(x, e) && (u = !0);
                            var c = {};
                            c.contentWidthIsNormal = u, c.containerClass = u ? "container " : "", c.containerClass += "_cell-spacing-".concat(a.cellSpacing, " "), c.needsPerspContainer = u && "perspective" === e, c.needs16ColumnContainer = u && !(0, h.default)(r = ["perspective", "persona"]).call(r, e), c.sectionClass = u ? "" : " _wide ";
                            var d = (0, h.default)(E).call(E, e) ? "mobile" : "desktop";
                            c.sectionClass += " s-grid-section__".concat(d, "-view-on-tablet");
                            var f = "onyx_new" === e;

                            function m(t, n, a, i) {
                                var l = o(i) ? Math.max(0, n - a) : 0,
                                    r = u ? 0 : 2 * c.cellPadding,
                                    s = 10 + Math.max(0, l - r),
                                    d = 0 !== t && "ion" !== e ? 10 : -30;
                                return 0 === t && (d = 10 - a + (o(i) ? n : 0)), "ion" === e && (d = -46), {
                                    layoutButtonTop: d,
                                    topRowimageAndLinkButtonTop: s,
                                    layoutButtonOverlapsTopRightButton: !u && d + 34 + 10 > s + r
                                }
                            }
                            return c.isWideWithLeftAlignedHeading = f && !u, c.cellPadding = {
                                none: 0,
                                small: n ? 3 : 5,
                                large: n ? 7 : 15
                            }[a.cellSpacing], c.containerMargin = u ? -c.cellPadding : 0, c.containerPadding = u ? 0 : c.cellPadding, c.cellClassName = "s-grid-section-cell s-new-grid-section-cell ", c.cellMinHeight = {
                                small: {
                                    desktop: 160,
                                    mobile: 120
                                },
                                medium: {
                                    desktop: 250,
                                    mobile: 150
                                },
                                large: {
                                    desktop: 350,
                                    mobile: 200
                                },
                                extraLarge: {
                                    desktop: 600,
                                    mobile: 300
                                },
                                full: {
                                    desktop: "100vh",
                                    mobile: "100vh"
                                }
                            }[a.cellHeight][n ? "mobile" : "desktop"], a.getCellCount() % 2 != 0 && (c.cellClassName += " _odd-cell-count "), a.isGrid() ? (c.containerClass += "_grid", c.cellClassName += " _".concat(a.columns, "-columns ")) : a.isMagazine() && (c.containerClass += "_magazine ", c.cellClassName += " _".concat(a.magazineLayoutName, " ")), c.useMagazineColumnDom = a.isMagazine() && ("twoLeftOneRight" === a.magazineLayoutName || "oneLeftTwoRight" === a.magazineLayoutName), c.magazineColumnClass = "s-magazine-column _".concat(a.magazineLayoutName), c.getItemBorder = function(e) {
                                return e || "none" === a.cellSpacing ? null : "1px solid #eee"
                            }, c.isTopRightCell = function(e) {
                                return a.getTopRightCellIndex() === e
                            }, c.isTopRowCell = function(e) {
                                var t;
                                return (0, h.default)(t = a.getTopRowCellIndices()).call(t, e)
                            }, c.getItemButtonStyles = function(e) {
                                var t = e.cellIndex,
                                    n = e.sectionIndex,
                                    o = e.navHeight,
                                    i = e.sectionPaddingTop,
                                    l = (e.hasTitleGroup, e.s5NavOverlapsFirstSection),
                                    r = e.showTitle,
                                    s = e.paddingTopIsNone,
                                    u = 10,
                                    c = 0;
                                return this.isTopRowCell(t) && !r && (u = m(n, o, i, l).topRowimageAndLinkButtonTop, this.isTopRightCell(t) && (s || 0 === n) && (u = 54)), a.isGrid() && (c += 33), _ ? {
                                    moveButton: {
                                        top: u,
                                        right: "initial",
                                        left: 10
                                    },
                                    imageAndLinkButton: {
                                        top: u,
                                        right: "initial",
                                        left: c,
                                        zIndex: 200 - t
                                    }
                                } : {
                                    moveButton: {
                                        top: u,
                                        right: 10
                                    },
                                    imageAndLinkButton: {
                                        top: u,
                                        right: c,
                                        zIndex: 200 - t
                                    }
                                }
                            }, c.getLayoutButtonStyle = function(e) {
                                return {
                                    top: m(e.sectionIndex, e.navHeight, e.sectionPaddingTop, e.s5NavOverlapsFirstSection).layoutButtonTop
                                }
                            }, c.getSectionPaddingTop = function(t, i, l, r, s) {
                                var d = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                                if (n && !i && 0 === l && a.isGrid()) return 0 === c.containerPadding ? 0 : 20;
                                if ("perspective" === e && i && !u) return 80;
                                if ("minimal" === e || "pitch_new" === e) {
                                    var f = u || i,
                                        m = "minimal" === e && f ? 70 : 0,
                                        g = "pitch_new" === e && f ? 90 : 0,
                                        p = {
                                            minimal: m,
                                            pitch_new: g
                                        }[e],
                                        h = (0 === l ? t : 0) + p;
                                    return h
                                }
                                return u || i ? "" : o(r) && 0 === l ? t : d ? 0 : ""
                            }, w[s] = c, c
                        }
                    },
                    parseLayoutVariation: function(e) {
                        return new N(e)
                    },
                    magazineLayouts: S,
                    themesWithoutWideGridLayout: x
                };
            t.default = L, e.exports = t.default
        },
        309955: function(e, t, n) {
            "use strict";
            var a = n(353147);
            n(663978)(t, "__esModule", {
                value: !0
            });
            var o = ["pricing-layout-1", "pricing-layout-2", "pricing-layout-3", "pricing-layout-4"],
                i = {
                    default: {
                        layouts: o
                    }
                },
                l = "automatic",
                r = [{
                    key: "columns_mobile",
                    label: function() {
                        return a("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: l,
                        label: function() {
                            return a("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }],
                    defaultValue: l
                }],
                s = {
                    getLayout: function(e) {
                        return {
                            itemClass: o[e] || o[0]
                        }
                    },
                    getLayoutOptions: function(e) {
                        return i[e] || i.default
                    },
                    getMobileLayoutOptions: function() {
                        return r
                    }
                };
            t.default = s, e.exports = t.default
        },
        418972: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = n(752424),
                i = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            }), n(569600);
            var s = n(51942),
                u = (0, r.default)(s),
                c = n(686902),
                d = (0, r.default)(c),
                f = n(678580),
                m = (0, r.default)(f),
                g = (function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    o.default = e, n && n.set(e, o)
                }(n(496486)), n(766463));

            function p(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    n = new o;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }
            var h = {
                    itemClass: "columns half-fixed no-float"
                },
                v = {
                    default: ["four", "four", "four", "four", "fifth", "third", "four", "four", "fifth"],
                    persona: ["three", "three", "three", "three", "four", "four", "three", "three", "four"]
                },
                b = (0, g.getThemeName)(),
                y = function() {
                    return h
                },
                C = function(e) {
                    return (0, u.default)({}, h, e)
                },
                _ = function(e) {
                    return e.get().size
                },
                S = {
                    default: {
                        horizontal: function(e) {
                            var t = _(e),
                                n = [];
                            return n.push(function(e, t) {
                                var n = e;
                                v[n] || (n = "default");
                                var a = t - 1;
                                return v[n][a] || (a = v[n].length - 1), v[n][a]
                            }(b, t)), "persona" === b ? 5 == t || 6 == t || 9 == t ? n.push("hide-linker-three") : n.push("hide-linker-four") : 6 == t ? n.push("hide-linker-three") : 7 == t || 8 == t ? n.push("hide-linker-four") : n.push("hide-linker-five"), n.push("columns"), n.push("no-float"), n.push("process-horizontal-layout"), C({
                                itemClass: n.join(" ")
                            })
                        },
                        vertical: function() {
                            var e = ["eight"];
                            return "perspective" === b ? e.push("s-persp-column") : e.push("columns"), e.push("no-float"), e.push("process-vertical-layout"), C({
                                itemClass: e.join(" ")
                            })
                        }
                    }
                },
                N = (0, g.getLayoutMapping)(S),
                x = {
                    getDefaultLayoutKey: function(e, t) {
                        var n = (0, d.default)(N[e] || N.default);
                        return (0, m.default)(n).call(n, t) ? t : n[0]
                    },
                    getLayout: function(e, t) {
                        return (N[e] || N.default)[t] || h || y
                    },
                    getLayoutOptions: function(e) {
                        return S[e] || S.default
                    },
                    getItemSize: _
                };
            t.default = x, e.exports = t.default
        },
        531974: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(223765),
                i = n(752424),
                l = n(663978),
                r = n(834074),
                s = n(60530)(n(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = n(51942),
                c = (0, s.default)(u),
                d = n(981643),
                f = (0, s.default)(d),
                m = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(a, s, u) : a[s] = e[s]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(496486)),
                g = n(766463);

            function p(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    n = new i;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }
            var h = {
                outerContainerClass: "container",
                innerContainerClass: "sixteen columns",
                outerMediaClass: "",
                innerMediaClass: "",
                textClass: "",
                buttonClass: "",
                isSubtitleOnBottom: !0
            };

            function v() {
                return h
            }

            function b(e) {
                return (0, c.default)({}, h, e)
            }

            function y(e) {
                return {
                    normal: e,
                    full: e
                }
            }
            "perspective" === (0, g.getThemeName)() && (h.outerContainerClass = "s-persp-container", h.innerContainerClass = "s-persp-column");
            var C = {
                    default: {
                        center: function(e) {
                            function t(e) {
                                return {
                                    innerMediaClass: "media-wrapper ".concat(e.sbUniformTextAlignment("text1 text2")),
                                    buttonClass: "s-button-group ".concat(e.sbUniformTextAlignment("text1 text2"))
                                }
                            }
                            return {
                                subTop: y((function(n) {
                                    return b(m.extend({}, e, t(n), {
                                        isSubtitleOnBottom: !1
                                    }))
                                })),
                                bottom: y((function(n) {
                                    return b(m.extend({}, e, t(n), {}))
                                })),
                                right: y((function(n) {
                                    return b(m.extend({}, e, t(n), {
                                        outerMediaClass: "sixteen columns media-outer",
                                        textClass: "ten columns no-float",
                                        buttonClass: "six columns no-float s-button-group",
                                        outerContainerClass: "container s-layout-skinny",
                                        innerContainerClass: ""
                                    }))
                                }))
                            }
                        }({})
                    },
                    perspective: {
                        center: function(e) {
                            function t(e) {
                                return {
                                    innerMediaClass: "media-wrapper ".concat(e.sbUniformTextAlignment("text1 text2")),
                                    outerContainerClass: "s-persp-container s-layout-center",
                                    buttonClass: "s-button-group ".concat(e.sbUniformTextAlignment("text1 text2"))
                                }
                            }
                            return {
                                subTop: y((function(n) {
                                    return b(m.extend({}, e, t(n), {
                                        isSubtitleOnBottom: !1
                                    }))
                                })),
                                bottom: y((function(n) {
                                    return b(m.extend({}, e, t(n), {}))
                                }))
                            }
                        }({})
                    }
                },
                _ = (0, g.getLayoutMapping)(C),
                S = {
                    default: {
                        normal: "center-subTop-full",
                        subBottom: "center-bottom-full",
                        withMedia: "center-bottom-full",
                        center: "center-bottom-normal",
                        skinny: "center-right-normal",
                        mediaTop: "center-bottom-normal"
                    }
                },
                N = "automatic",
                x = [{
                    key: "height_mobile",
                    label: function() {
                        return a("Editor|Section Height")
                    },
                    component: "select",
                    children: [{
                        value: N,
                        label: function() {
                            return a("Automatic")
                        }
                    }, {
                        value: "full",
                        label: function() {
                            return a("Editor|Full Height")
                        }
                    }],
                    defaultValue: N
                }];

            function E(e) {
                return C[e] || C.default
            }
            t.default = {
                getDefaultLayoutKey: function(e, t) {
                    var n = (S[e] || S.default)[t = t || ""];
                    return (_[e] || _.default)[t] && (n = t), n || (n = (0, g.getClosestKey)(E(e), t, 3)), n || ((0, f.default)(t).call(t, "button"), n = "center-subTop-normal"), n
                },
                getLayout: function(e, t) {
                    return (_[e] || _.default)[t] || v
                },
                getLayoutOptions: E,
                getMobileLayoutOptions: function() {
                    return x
                }
            }, e.exports = t.default
        },
        792695: function(e, t, n) {
            "use strict";
            var a = n(223765),
                o = n(752424),
                i = n(663978),
                l = n(834074),
                r = n(60530)(n(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = n(977766),
                u = (0, r.default)(s);
            n(974916), n(323123);
            var c = n(143393),
                d = ((0, r.default)(c), function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(155088))),
                f = n(183123),
                m = (0, r.default)(f);

            function g(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    n = new o;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
            t.default = {
                _getLayoutVariation: function() {
                    return this._getLayoutBinding().get("layout_variation") || ""
                },
                _getFirstLayout: function() {
                    return this._getLayoutVariation().split("-")[0]
                },
                _getLayoutConfig: function() {
                    var e;
                    return (null === (e = this._getLayoutBinding().get("layout_config")) || void 0 === e ? void 0 : e.toObject()) || {}
                },
                _updateLayoutConfig: function(e, t) {},
                _updateLayout: function(e) {
                    this._getLayoutBinding().sub("layout_variation").set(e)
                },
                _updateLayoutSettings: function(e) {},
                _getLayoutSettings: function() {
                    var e = this._getLayoutBinding().get("display_settings");
                    return e && e.toJS() || {}
                },
                _updatePadding: function(e) {
                    this._getLayoutBinding().sub("padding").set(e)
                },
                _getMobileSectionHeight: function() {
                    return m.default.getCanUseNewMobileEditorPart3Feature() && this._getLayoutBinding().sub("layout_config").get("height_mobile") === d.MobileSectionHeightKeys.FULL ? "s-section-mobile-height-full" : ""
                },
                _getPadding: function() {
                    var e = this._getLayoutBinding().get("padding");
                    return (e = e && e.toJS ? e.toJS() : e) || {
                        top: "normal",
                        bottom: "normal"
                    }
                },
                _getIsNewMobileLayoutClass: function() {
                    return "s-new-mobile-layout"
                },
                _getPaddingClass: function() {
                    var e, t = this._getPadding(),
                        n = "half" === t.top ? "s-top-padding-half" : "none" === t.top ? "s-top-padding-none" : "",
                        a = "half" === t.bottom ? "s-bottom-padding-half" : "none" === t.bottom ? "s-bottom-padding-none" : "";
                    return (0, u.default)(e = "".concat(n, " ")).call(e, a)
                },
                _getLayoutStatusName: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e]
                }
            }, e.exports = t.default
        },
        51580: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), n(974916), n(115306), t.default = {
                correctThumbnailPath: function(e) {
                    return e.replace("../../../../public/images/v4", "../../../../images/v4")
                }
            }, e.exports = t.default
        },
        533126: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = n(663978),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(234584),
                r = (0, i.default)(l),
                s = n(843296),
                u = (0, i.default)(s),
                c = n(792695),
                d = {
                    mixins: [(0, i.default)(c).default],
                    displayName: "BlockSection",
                    getWholeThemeFeature: function() {
                        var e = u.default.get(r.default.getTheme().get("name"));
                        return null != e ? e.features : void 0
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Make Your Own Section"), a("Editor|Want more control over layouts? Arrange components yourself!"), this.getTemplate().apply(this)
                    }
                };
            t.default = d, e.exports = t.default
        },
        785478: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(981643)),
                s = (0, i.default)(r),
                u = n(694473),
                c = (0, i.default)(u),
                d = n(933032),
                f = (0, i.default)(d),
                m = n(678580),
                g = ((0, i.default)(m), n(973935)),
                p = (0, i.default)(g),
                h = n(818166),
                v = (0, i.default)(h),
                b = n(234584),
                y = (0, i.default)(b),
                C = n(183123),
                _ = (0, i.default)(C),
                S = n(143393),
                N = (0, i.default)(S),
                x = n(792695),
                E = (0, i.default)(x),
                w = n(109245),
                T = (0, i.default)(w),
                k = n(496486),
                B = (0, i.default)(k),
                L = n(634899),
                I = !1,
                O = {
                    mixins: [E.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!I && v.default.getSections().length < 3 && -1 !== (0, s.default)(L.ShowTooltipVariations).call(L.ShowTooltipVariations, e)) {
                            var t, n = (0, c.default)(t = $(p.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return n.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: a("Blog|Try different layouts for blog!")
                            }), I = !0, n.tooltip("show"), n.one("mouseenter", (function() {
                                return n.tooltip("destroy")
                            })), (0, f.default)((function() {
                                return n.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = y.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(T.default.getDefaultLayoutKey(t, e));
                        var n = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(n.category) && this.getDefaultBinding().set("components.blog1.category", N.default.fromJS({
                            id: "all",
                            name: a("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return T.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return _.default.isBlogCategoryRolledOut()
                    },
                    isAvailableMobileLayouts: function() {
                        return !0
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Simple Blog"), a("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = O, e.exports = t.default
        },
        854673: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(981643)),
                s = (0, i.default)(r),
                u = n(694473),
                c = (0, i.default)(u),
                d = n(933032),
                f = (0, i.default)(d),
                m = n(678580),
                g = ((0, i.default)(m), n(973935)),
                p = (0, i.default)(g),
                h = n(818166),
                v = (0, i.default)(h),
                b = n(234584),
                y = (0, i.default)(b),
                C = n(183123),
                _ = (0, i.default)(C),
                S = n(143393),
                N = (0, i.default)(S),
                x = n(792695),
                E = (0, i.default)(x),
                w = n(109245),
                T = (0, i.default)(w),
                k = n(496486),
                B = (0, i.default)(k),
                L = n(634899),
                I = !1,
                O = {
                    mixins: [E.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!I && v.default.getSections().length < 3 && -1 !== (0, s.default)(L.ShowTooltipVariations).call(L.ShowTooltipVariations, e)) {
                            var t, n = (0, c.default)(t = $(p.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return n.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: a("Blog|Try different layouts for blog!")
                            }), I = !0, n.tooltip("show"), n.one("mouseenter", (function() {
                                return n.tooltip("destroy")
                            })), (0, f.default)((function() {
                                return n.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = y.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(T.default.getDefaultLayoutKey(t, e));
                        var n = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(n.category) && this.getDefaultBinding().set("components.blog1.category", N.default.fromJS({
                            id: "all",
                            name: a("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return T.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return _.default.isBlogCategoryRolledOut()
                    },
                    isAvailableMobileLayouts: function() {
                        return !0
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Simple Blog %{var}", {
                            var: 1
                        }), a("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = O, e.exports = t.default
        },
        396204: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(981643)),
                s = (0, i.default)(r),
                u = n(694473),
                c = (0, i.default)(u),
                d = n(933032),
                f = (0, i.default)(d),
                m = n(678580),
                g = ((0, i.default)(m), n(973935)),
                p = (0, i.default)(g),
                h = n(818166),
                v = (0, i.default)(h),
                b = n(234584),
                y = (0, i.default)(b),
                C = n(183123),
                _ = (0, i.default)(C),
                S = n(143393),
                N = (0, i.default)(S),
                x = n(792695),
                E = (0, i.default)(x),
                w = n(109245),
                T = (0, i.default)(w),
                k = n(634899),
                B = n(496486),
                L = (0, i.default)(B),
                I = !1,
                O = {
                    mixins: [E.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!I && v.default.getSections().length < 3 && -1 !== (0, s.default)(k.ShowTooltipVariations).call(k.ShowTooltipVariations, e)) {
                            var t, n = (0, c.default)(t = $(p.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return n.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: a("Blog|Try different layouts for blog!")
                            }), I = !0, n.tooltip("show"), n.one("mouseenter", (function() {
                                return n.tooltip("destroy")
                            })), (0, f.default)((function() {
                                return n.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = y.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(T.default.getDefaultLayoutKey(t, e));
                        var n = this.getDefaultBinding().get("components.blog1").toJS();
                        L.default.isEmpty(n.category) && this.getDefaultBinding().set("components.blog1.category", N.default.fromJS({
                            id: "all",
                            name: a("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return T.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return _.default.isBlogCategoryRolledOut()
                    },
                    isAvailableMobileLayouts: function() {
                        return !0
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Simple Blog %{var}", {
                            var: 2
                        }), a("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = O, e.exports = t.default
        },
        134469: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(981643)),
                s = (0, i.default)(r),
                u = n(694473),
                c = (0, i.default)(u),
                d = n(933032),
                f = (0, i.default)(d),
                m = n(678580),
                g = ((0, i.default)(m), n(973935)),
                p = (0, i.default)(g),
                h = n(818166),
                v = (0, i.default)(h),
                b = n(234584),
                y = (0, i.default)(b),
                C = n(183123),
                _ = (0, i.default)(C),
                S = n(143393),
                N = (0, i.default)(S),
                x = n(792695),
                E = (0, i.default)(x),
                w = n(109245),
                T = (0, i.default)(w),
                k = n(496486),
                B = (0, i.default)(k),
                L = n(634899),
                I = !1,
                O = {
                    mixins: [E.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!I && v.default.getSections().length < 3 && -1 !== (0, s.default)(L.ShowTooltipVariations).call(L.ShowTooltipVariations, e)) {
                            var t, n = (0, c.default)(t = $(p.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return n.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: a("Blog|Try different layouts for blog!")
                            }), I = !0, n.tooltip("show"), n.one("mouseenter", (function() {
                                return n.tooltip("destroy")
                            })), (0, f.default)((function() {
                                return n.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = y.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(T.default.getDefaultLayoutKey(t, e));
                        var n = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(n.category) && this.getDefaultBinding().set("components.blog1.category", N.default.fromJS({
                            id: "all",
                            name: a("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return T.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return _.default.isBlogCategoryRolledOut()
                    },
                    isAvailableMobileLayouts: function() {
                        return !0
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Simple Blog %{var}", {
                            var: 3
                        }), a("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = O, e.exports = t.default
        },
        264096: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(915731), e.exports = t.default
        },
        91252: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(930742), e.exports = t.default
        },
        612953: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(164385), e.exports = t.default
        },
        425192: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(792695)),
                s = {
                    mixins: [(0, i.default)(r).default],
                    displayName: "DonationSection",
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
                        return a("Editor|Simple Store"), a("Editor|Sell products right on your site! Manage orders, payments, and more."), this.getTemplate().apply(this)
                    }
                };
            t.default = s, e.exports = t.default
        },
        780847: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(381947)),
                s = (0, i.default)(r),
                u = n(234584),
                c = (0, i.default)(u),
                d = n(792695),
                f = {
                    mixins: [(0, i.default)(d).default],
                    displayName: "EcommerceSection",
                    _showLayoutButton: function() {
                        return s.default.canUse("ecommerce_layout")
                    },
                    componentWillMount: function() {
                        var e = c.default.getThemeName(),
                            t = n(452255);
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, this._getLayoutVariation()))
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _getLayoutOptions: function() {
                        var e = n(452255),
                            t = c.default.getThemeName();
                        return e.getLayoutOptions(t)
                    },
                    render: function() {
                        return a("Editor|Simple Store"), a("Editor|Sell products right on your site! Manage orders, payments, and more."), this.getTemplate().apply(this)
                    }
                };
            t.default = f, e.exports = t.default
        },
        583617: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(17342), e.exports = t.default
        },
        352596: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(152160), e.exports = t.default
        },
        530737: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(152160), e.exports = t.default
        },
        321479: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(152160), e.exports = t.default
        },
        984161: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(152160), e.exports = t.default
        },
        635209: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(295089), e.exports = t.default
        },
        837947: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        321178: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        216177: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        37509: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        435685: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        939947: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(848388), e.exports = t.default
        },
        188717: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(259476), e.exports = t.default
        },
        980190: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(792695)),
                s = {
                    mixins: [(0, i.default)(r).default],
                    displayName: "HTMLSection",
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
                        return a("Editor|App Store & HTML"), a("Editor|Embed a map, a calendar, a document, a form or any HTML code!"), this.getTemplate().apply(this)
                    }
                };
            t.default = s, e.exports = t.default
        },
        401062: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(812077),
                r = (0, i.default)(l),
                s = n(205872),
                u = (0, i.default)(s),
                c = n(487672),
                d = ((0, i.default)(c), n(678580)),
                f = (0, i.default)(d),
                m = n(703649),
                g = (0, i.default)(m),
                p = n(2991),
                h = (0, i.default)(p);
            n(974916), n(323123), n(569600);
            var v = n(366757),
                b = (0, i.default)(v),
                y = n(357646),
                C = (0, i.default)(y),
                _ = n(328043),
                S = (0, i.default)(_),
                N = n(186613),
                x = (0, i.default)(N),
                E = n(149008),
                w = (0, i.default)(E),
                T = n(234584),
                k = (0, i.default)(T),
                B = n(183123),
                L = (0, i.default)(B),
                I = n(818166),
                O = (0, i.default)(I),
                P = n(294184),
                M = (0, i.default)(P),
                A = n(836766),
                D = n(792695),
                R = {
                    mixins: [(0, i.default)(D).default],
                    displayName: "ContactsSection",
                    componentWillMount: function() {
                        var e, t, a, o = k.default.getThemeName(),
                            i = this._getLayoutVariation();
                        this.getDefaultBinding().get("template_name"), i.split("-").length >= 2 && ("perspective" === o ? (0, f.default)(e = ["mediaLeft", "mediaRight", "center"]).call(e, i.split("-")[0]) || (i = "center-".concat(i)) : (0, f.default)(t = ["mediaLeft", "mediaRight", "center"]).call(t, i.split("-")[0]) && (i = (0, g.default)(a = i.split("-")).call(a, 1).join("-")));
                        var l = n(46366);
                        this._getLayoutBinding().sub("layout_variation").set(l.getDefaultLayoutKey(o, i))
                    },
                    _getLayoutOptions: function() {
                        var e = k.default.getThemeName();
                        return n(46366).getLayoutOptions(e)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    _renderRepeatable: function(e) {
                        var t, a, o = this,
                            i = n(46366),
                            l = k.default.getThemeName(),
                            s = this._getLayoutProps().sectionLayoutConfig.get("columns_mobile"),
                            c = this._getLayoutVariation(),
                            d = this.getComponentBinding(e),
                            f = this.getRepeatableBinding(e);
                        "function" == typeof i.getLayout(l, c) && (a = i.getLayout(l, c)(f));
                        var m = this.getComponentProps("repeatable1");
                        return b.default.createElement(x.default, (0, u.default)({
                            className: "s-mh".concat("editor" === d.get("_state") ? " s-arranging" : ""),
                            inSectionSelector: this.props.inSectionSelector
                        }, m), (0, h.default)(t = d.get("list")).call(t, (function(e, t) {
                            var n = f.sub(t),
                                i = a.itemClass,
                                l = a.naturalImage,
                                c = O.default.getCanUseSectionDefaultFormat();
                            return s && (i += " mobile-".concat(s, "-columns mobile-columns")), b.default.createElement(w.default, (0, u.default)({
                                key: n.get("id"),
                                className: i,
                                binding: {
                                    default: n,
                                    listBinding: f
                                },
                                index: t
                            }, o._getRepeatableItemProps(f, t)), (0, r.default)("div", {
                                className: "s-item-media-group s-mhi"
                            }, void 0, b.default.createElement(S.default, (0, u.default)({
                                size: "480x960>",
                                moreIcons: !0,
                                iconLibComponents: "icon",
                                naturalSize: l
                            }, o.getReduxComponentProps("image1", n)))), o.sbHasContent("text1", {
                                parentBinding: n
                            }) && (L.default.getIsSxl() || !l) && (0, r.default)("div", {
                                className: (0, M.default)("s-item-text-group", {
                                    "s-item-title": c
                                })
                            }, void 0, b.default.createElement(C.default, (0, u.default)({
                                tagName: c ? A.TEXT_SIZE_TAG.ITEM_TITLE : "div",
                                applyWordBreaks: !0,
                                textType: "body",
                                sizeType: c ? "itemTitle" : "body"
                            }, o.getComponentProps("text1", n)))))
                        })).toArray())
                    },
                    render: function() {
                        return a("Editor|Contact"), a("Editor|A list of small icons. Good for social media."), this.getTemplate().apply(this)
                    }
                };
            t.default = R, e.exports = t.default
        },
        114208: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(196771), e.exports = t.default
        },
        549212: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(196771), e.exports = t.default
        },
        485253: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(196771), e.exports = t.default
        },
        734988: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(254427), e.exports = t.default
        },
        991485: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = n(487672),
                r = ((0, i.default)(l), n(381947)),
                s = (0, i.default)(r),
                u = n(234584),
                c = (0, i.default)(u),
                d = n(452255),
                f = (0, i.default)(d),
                m = n(792695),
                g = {
                    mixins: [(0, i.default)(m).default],
                    displayName: "PortfolioSection",
                    componentWillMount: function() {
                        var e = c.default.getThemeName(),
                            t = this._getLayoutVariation();
                        if (f.default.isOldLayoutKey(e, t)) {
                            var n = f.default.getDefaultLayoutKey(e, t);
                            this._updateLayout(n)
                        }
                    },
                    _showLayoutButton: function() {
                        return s.default.canUse("portfolio_layout")
                    },
                    _getLayoutOptions: function() {
                        var e = c.default.getThemeName();
                        return f.default.getLayoutOptions(e)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    _renderAIEditor: function() {
                        return !1
                    },
                    render: function() {
                        return a("Editor|Product Showcase"), a("Editor|Add details and descriptions to each product."), this.getTemplate().apply(this)
                    }
                };
            t.default = g, e.exports = t.default
        },
        416534: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(984806), e.exports = t.default
        },
        433006: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(126711), e.exports = t.default
        },
        96152: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(100570), e.exports = t.default
        },
        977741: function(e, t, n) {
            "use strict";
            n(663978)(t, "__esModule", {
                value: !0
            }), t.default = n(65671), e.exports = t.default
        },
        612535: function(e, t, n) {
            "use strict";
            var a = n(353147),
                o = (n(686902), n(14310), n(620116), n(834074), n(778914), n(239649), n(820368), n(663978)),
                i = n(60530)(n(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r, s = n(205872),
                u = (0, i.default)(s),
                c = n(780122),
                d = (0, i.default)(c),
                f = n(812077),
                m = (0, i.default)(f),
                g = n(487672),
                p = ((0, i.default)(g), ["_cName", "_state"]),
                h = n(51942),
                v = ((0, i.default)(h), n(2991)),
                b = (0, i.default)(v),
                y = n(359340),
                C = (0, i.default)(y),
                _ = n(981643),
                S = (0, i.default)(_),
                N = n(666419),
                x = (0, i.default)(N),
                E = n(31238),
                w = (0, i.default)(E),
                T = n(977766),
                k = (0, i.default)(T),
                B = n(54103),
                L = (0, i.default)(B),
                I = n(366757),
                O = (0, i.default)(I),
                P = n(792695),
                M = (0, i.default)(P),
                A = n(921003),
                D = (0, i.default)(A),
                R = n(156503),
                U = (0, i.default)(R),
                F = n(234584),
                Z = (0, i.default)(F),
                H = n(11945),
                V = n(104802),
                z = n(550745),
                G = n(692381),
                Y = (0, i.default)(G),
                j = n(872278),
                W = (0, i.default)(j),
                K = n(539220),
                J = (0, i.default)(K),
                q = n(183123),
                X = (0, i.default)(q),
                Q = n(294184),
                $ = (0, i.default)(Q),
                ee = n(413138),
                te = (0, i.default)(ee),
                ne = n(229296),
                ae = (0, i.default)(ne),
                oe = n(365940),
                ie = (0, i.default)(oe),
                le = n(496486),
                re = (0, i.default)(le),
                se = n(628568),
                ue = n(881701),
                ce = n(442279),
                de = n(792656),
                fe = (0, i.default)(de),
                me = fe.default.getTextColorSettingsByBgColor,
                ge = fe.default.getColorInfoByBgData,
                pe = "noForeground",
                he = (0, H.getIsEditorRtlLayout)(),
                ve = (0, ce.createSelector)([function(e) {
                    return e.titleColor
                }, function(e) {
                    return e.subtitleColor
                }], (function(e, t) {
                    return (0, ue.css)("&.container .slider-desc{.s-title{color:", e, ";}.s-subtitle{color:", t, ";}}")
                })),
                be = {
                    mixins: [M.default],
                    displayName: "SliderSection",
                    sliderListener: null,
                    componentWillMount: function() {
                        this.layoutOptions = ["left", "right", "noImage"], this.layoutName = this._getLayoutProps().binding.get("layout_variation"), this.layoutName === pe && this.layoutOptions.push(pe)
                    },
                    isPreviewMode: function() {
                        return !1
                    },
                    isEnableAiEditor: function() {
                        return Z.default.getEnableAiEditor()
                    },
                    _getChildComponentAiProps: function() {
                        var e = this.props,
                            t = e.aiEditorFn,
                            n = e.index;
                        return {
                            aiEditorFn: t,
                            listBinding: this.getRepeatableBinding("slider1"),
                            sectionIndex: n,
                            isBanner: this._isBannerSection(),
                            sectionBinding: this.getDefaultBinding(),
                            renderAIEditor: this._renderAIEditor,
                            setStateFunc: this.setStateFunc,
                            warnningInfo: this._imageRatioWarnning,
                            getSliderLayout: this._getSliderLayout,
                            getComponentProps: this.getComponentProps,
                            RenderSliderLayoutBtn: this._renderSliderLayoutBtn
                        }
                    },
                    _renderAIEditor: function() {
                        return this._isBannerSection() && a("Editor|Image & Link"), !1
                    },
                    getInitialState: function() {
                        return {
                            imgEditorState: "",
                            showLayoutOptions: !1
                        }
                    },
                    setStateFunc: function(e) {
                        this.setState({
                            imgEditorState: e || ""
                        })
                    },
                    mapStateToProps: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ("s5-theme" === Z.default.getThemeName()) {
                            var n = e.mergeDeep(t.themeSiteState);
                            return {
                                navHeight: U.default.get("navHeight"),
                                navOverlapsContent: (0, V.getNavOverlapsContent)(n),
                                navTheme: (0, V.getNavTheme)(n)
                            }
                        }
                        return {}
                    },
                    componentDidMount: function() {
                        var e = this;
                        this.sliderListener = this.props.binding.addListener("components.slider1.list", (function(t) {
                            var n = t.getPreviousValue(),
                                a = t.getCurrentValue(),
                                o = e.getBinding().get("components.slideSettings.layout_variation");
                            if (n && a && (!n.equals || !n.equals(a)) && e.layoutName != pe && o != pe) {
                                var i = e._getSliderLayoutArr(),
                                    l = {};
                                (0, b.default)(n).call(n, (function(e, t) {
                                    l[e.get("id")] = i[t] || ""
                                }));
                                var r = [];
                                (0, b.default)(a).call(a, (function(e) {
                                    l[e.get("id")] && r.push(l[e.get("id")])
                                })), e._updateLayout((0, C.default)(r))
                            }
                        }))
                    },
                    componentWillUnmount: function() {
                        this.props.binding.removeListener(this.sliderListener)
                    },
                    _showMediaWrapper: function(e) {
                        var t = ["noImage", pe];
                        return -1 === (0, S.default)(t).call(t, e)
                    },
                    _sbAnyHasContent: function(e, t) {
                        var n = this.getRepeatableBinding("slider1");
                        return Boolean(this.sbAnyHasContent(t, {
                            parentBinding: n.sub(e)
                        }))
                    },
                    _sbHasMediaContent: function(e) {
                        var t = this.getRepeatableBinding("slider1");
                        return Boolean(this.sbHasContent("media1", {
                            parentBinding: t.sub(e)
                        }))
                    },
                    _getSliderLayoutArr: function() {
                        var e = this._getLayoutVariation(),
                            t = [];
                        if (-1 !== (0, S.default)(e).call(e, "[")) try {
                            t = JSON.parse(e)
                        } catch (e) {} else {
                            e || (e = this.layoutOptions[1]);
                            var n = this.getRepeatableBinding("slider1").get().size;
                            t = (0, x.default)(new Array(n), (function() {
                                return e
                            }))
                        }
                        return t
                    },
                    _imageRatioWarnning: function(e) {
                        var t = this.getRepeatableBinding("slider1"),
                            n = t.sub("".concat(e, ".components.background1")),
                            o = n.get("w"),
                            i = n.get("h");
                        n.get("url"), o && i || (o = 16, i = 9);
                        var l = a("Editor|This image is too tall! Please upload a banner with a wider aspect ratio."),
                            r = (0, w.default)(o / i);
                        if (r < 1.25) return l;
                        if (t.get().size < 2) return "";
                        var s = t.sub("0.components.background1");
                        l = a("Editor|Your banner images are different sizes! You should keep all banner images the same size.");
                        var u = s.get("w"),
                            c = s.get("h");
                        u && c || (u = 16, c = 9);
                        var d = (0, w.default)(u / c);
                        return e > 0 && Math.abs(r - d) > .2 ? l : ""
                    },
                    _getSliderLayout: function(e) {
                        var t = this._getSliderLayoutArr()[e];
                        return null != t ? t : this.layoutOptions[1]
                    },
                    _isBannerSection: function() {
                        return this.layoutName === pe
                    },
                    isS5FirstSection: function() {
                        return !("s5-theme" !== Z.default.getThemeName() || !this.props.navOverlapsContent || 0 !== this.props.index)
                    },
                    getDefaultS5NavH: function() {
                        var e, t, n = this.props.navTheme,
                            a = n.get("name"),
                            o = n.get("padding"),
                            i = n.get("fontSize");
                        return {
                            "topBlock-small-small": 34,
                            "topBlock-small-medium": 36,
                            "topBlock-small-large": 39,
                            "topBlock-medium-small": 44,
                            "topBlock-medium-medium": 46,
                            "topBlock-medium-large": 49,
                            "topBlock-large-small": 57,
                            "topBlock-large-medium": 59,
                            "topBlock-large-large": 62,
                            "topBar-small-small": 80
                        }[(0, k.default)(e = (0, k.default)(t = "".concat(a, "-")).call(t, o, "-")).call(e, i)] || 0
                    },
                    getSectionStyle: function() {
                        if ("s5-theme" === Z.default.getThemeName() && this.props.navOverlapsContent && 0 === this.props.index) {
                            var e = this.props.navHeight || this.getDefaultS5NavH();
                            return e ? {
                                paddingTop: e
                            } : {}
                        }
                        return {}
                    },
                    getInheritAlignClassName: function() {
                        return X.default.getCanUseSectionTextAlignNewVersion() && Z.default.getEnableLayoutSettingTextAlignment() ? "inherit-text-align" : ""
                    },
                    getVerticalAlignmentClassName: function(e) {
                        if (this.getIsShowLayoutSetting(e)) {
                            var t, n = (null === (t = this._getLayoutConfig()) || void 0 === t ? void 0 : t.vertical_alignment) || "middle";
                            return n ? "vertical-align-".concat(n) : ""
                        }
                        return ""
                    },
                    toggleShowLayoutOptions: function() {
                        this.setState({
                            showLayoutOptions: !this.state.showLayoutOptions
                        })
                    },
                    getIsShowLayoutSetting: function(e) {
                        var t = "noImage" !== e || Z.default.getEnableTextButtonSliderContentAlign();
                        return X.default.getCanUseVerticalAlignmentFeature() && t
                    },
                    updateLayout: function(e) {
                        var t = e.index,
                            n = e.optionIndex,
                            a = this.state.showLayoutOptions,
                            o = this._getSliderLayoutArr();
                        if (!a) return -1 === n && (n = 0), n === this.layoutOptions.length - 1 && (n = -1), o[t] = this.layoutOptions[++n], this._updateLayout((0, C.default)(o));
                        this.setState({
                            showLayoutOptions: !1
                        })
                    },
                    handleChangeLayout: function(e, t) {
                        var n = t.target.value,
                            a = this._getSliderLayoutArr();
                        return a[e] = n, this._updateLayout((0, C.default)(a))
                    },
                    _renderSliderLayoutBtn: function(e) {
                        var t, n, o, i, s, u, c, d, f = e.index,
                            g = e.sliderLayout,
                            p = e.isPreviewMode,
                            h = e.renderAILayoutButton,
                            v = this.state.showLayoutOptions,
                            b = this._getSliderLayoutArr()[f],
                            y = (0, S.default)(t = this.layoutOptions).call(t, b),
                            C = this._getLayoutStatusName(y) || "B",
                            _ = null === (n = this._getLayoutConfig()) || void 0 === n ? void 0 : n.vertical_alignment;
                        return (0, m.default)("div", {
                            className: (0, $.default)("s-component s-layout s-slider-layout-wrap", {
                                opened: p && v
                            })
                        }, void 0, (0, m.default)("div", {
                            className: "s-component-editor"
                        }, void 0, p ? h({
                            clickFn: (0, L.default)(o = this.toggleShowLayoutOptions).call(o, this),
                            showLayoutOptions: v
                        }) : (0, m.default)(D.default, {
                            className: "center small layout-button slider-layout-button",
                            rel: he ? "tooltip-right" : "tooltip-left",
                            title: a("Editor|Click to change layouts")
                        }, void 0, (0, m.default)("span", {
                            className: (0, $.default)("status clickable title long-text", {
                                "open-layout-panel": v
                            }),
                            onClick: (0, L.default)(i = this.updateLayout).call(i, this, {
                                index: f,
                                optionIndex: y
                            })
                        }, void 0, a("Layout"), !v && O.default.createElement(O.default.Fragment, null, (0, m.default)("span", {
                            className: "layout-status"
                        }, void 0, C), l || (l = (0, m.default)("i", {
                            className: "entypo-arrows-ccw layout-icon"
                        })))), this.getIsShowLayoutSetting(g) && (0, m.default)("div", {
                            className: "setting title clickable",
                            onClick: (0, L.default)(s = this.toggleShowLayoutOptions).call(s, this)
                        }, void 0, r || (r = (0, m.default)(z.Icon, {
                            className: "fa-gear setting-icon"
                        })))), (p || this.getIsShowLayoutSetting(g)) && (0, m.default)(Y.default, {}, void 0, v && (0, m.default)(J.default, {
                            component: W.default.div,
                            className: "layout-panel"
                        }, void 0, p && (0, m.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, m.default)("div", {
                            className: "s-layout-menu-field drop-down-select"
                        }, void 0, (0, m.default)("select", {
                            value: b,
                            onChange: (0, L.default)(u = this.handleChangeLayout).call(u, this, f)
                        }, void 0, (0, m.default)("option", {
                            value: "left"
                        }, void 0, "".concat(a("Editor|Layout"), " A")), (0, m.default)("option", {
                            value: "right"
                        }, void 0, "".concat(a("Editor|Layout"), " B")), (0, m.default)("option", {
                            value: "noImage"
                        }, void 0, "".concat(a("Editor|Layout"), " C"))))), (0, m.default)(te.default, {
                            sectionName: "slider",
                            currentType: _,
                            handleVerticalAlignmentType: (0, L.default)(c = this._updateLayoutConfig).call(c, this, "vertical_alignment")
                        }), (0, m.default)(z.Button, {
                            size: "smaller",
                            className: "save-button no-margin",
                            block: !0,
                            onClick: (0, L.default)(d = this.toggleShowLayoutOptions).call(d, this)
                        }, void 0, a("Editor|Save"))))))
                    },
                    _rendertBtn: function(e, t) {
                        var n = this.props.inSectionSelector,
                            a = t.sub(e),
                            o = X.default.getIsEnableRepeatedElements(),
                            i = a.get("components.buttons"),
                            l = !re.default.isUndefined(i) && i.getIn(["components", "block1", "items"]).size > 0,
                            r = function() {
                                var e = a.sub("components");
                                return (0, se.getSectionTextAlignment)(e, ["text2", "text1"])
                            },
                            s = Z.default.getIsS5Theme(),
                            c = this.getComponentProps("background1", a),
                            f = (c._cName, c._state, (0, d.default)(c, p));
                        return O.default.createElement(O.default.Fragment, null, l ? O.default.createElement(ae.default, (0, u.default)({}, this.getComponentProps("buttons", a), {
                            background1: f,
                            inSectionSelector: n,
                            enableRepeatedElement: o,
                            noContentAlignment: "center",
                            enableInheritAlign: s,
                            getButtonAlignment: r
                        })) : O.default.createElement(ie.default, (0, u.default)({}, f, this.getComponentProps("button1", a), {
                            backgroundUrl: f.url,
                            inSectionSelector: n,
                            hasAddBtn: o,
                            enableInheritAlign: s,
                            getButtonAlignment: r,
                            onClickAdd: function() {
                                return (0, ne.handleAddNewButtonGroupItem)(a.sub("components"), a.get("components.button1"))
                            }
                        })))
                    },
                    getTextStyleByBg: function(e, t) {
                        var n = t.sub(e),
                            a = this.getComponentProps("background1", n),
                            o = ge(a),
                            i = o.bgColor,
                            l = o.isImageOrVedio,
                            r = "";
                        if (Z.default.getEnableTextColorFix() && i && !l) {
                            var s = me(i);
                            r = ve(s)
                        }
                        return r
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = be, e.exports = t.default
        },
        591021: function(e, t, n) {
            e.exports = n.p + "../../../../public/images/v4/base/sections/blog1/thumbnail/cover.png"
        }
    }
]);