/*! For license information please see 7645.9be1327cdf03fd88f630-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [7645], {
        329756: function(u, D, t) {
            t.r(D), t.d(D, {
                RegexConstants: function() {
                    return e
                },
                URL_REGEX: function() {
                    return n
                },
                HTML_TAGS: function() {
                    return o
                },
                NBSP: function() {
                    return F
                },
                SITE_EDITOR: function() {
                    return l
                },
                IN_EDIT_REGEX: function() {
                    return a
                },
                MANAGE_PANEL: function() {
                    return r
                },
                ZIP_CODE_VALIDATION: function() {
                    return E
                },
                HTML_TAG_REGEX: function() {
                    return C
                },
                JS_CODE_REGEX: function() {
                    return i
                },
                PAYNOW_TEL: function() {
                    return A
                },
                _STATE_FIELD_CHECK: function() {
                    return c
                },
                NEWLINE_REGEX: function() {
                    return d
                },
                LANGUAGE_CHAR_REGEX: function() {
                    return f
                },
                REGEX_START_BREAK_PUNCTUATION: function() {
                    return s
                },
                REGEX_END_BREAK_PUNCTUATION: function() {
                    return _
                },
                REGEX_BREAK_PUNCTUATION: function() {
                    return g
                },
                REGEX_START_ALL_PUNCTUATION: function() {
                    return B
                },
                REGEX_END_ALL_PUNCTUATION: function() {
                    return p
                },
                REGEX_ANY_PUNCTUATION: function() {
                    return b
                },
                REGEX_ALL_PUNCTUATION: function() {
                    return $
                },
                REGEX_MULTIPLE_END_PUNCTUATION: function() {
                    return S
                },
                REGEX_MULTIPLE_START_PUNCTUATION: function() {
                    return I
                }
            }), t(324603), t(974916), t(339714);
            var e = {
                    CATEGORY_NAME: /^[\\n\\r]+$/,
                    VIDEO_UPLOAD: {
                        YOUTUBE: /youtube\.com\/watch\/?\?(?:.*&)?v=(.*)$|youtu\.be/,
                        VIMEO: /vimeo\.com\/(?:(?:channels\/[A-z]+\/)|(?:groups\/[A-z]+\/videos\/))?([0-9]+)(?:\?.*)?$/,
                        YOUKU: /^http(s)?.*youku\.com/,
                        TUDOU: /^http(s)?.*tudou\.com/,
                        QQ: /http(s)?:\/\/v\.qq\.com/,
                        BILIBILI: /^http(s)?.*bilibili\.com/,
                        IQIYI: /^http(s)?.*iqiyi\.com/
                    },
                    VIDEO_REGEX_LIST: [/^http(s)?:\/\/(www\.)?(youtube\.com\/watch\?v=)/, /^http(s)?:\/\/(www\.)?(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)(\?.*)?$/, /v\.youku\.com\/v_show/, /www\.tudou\.com/],
                    VIDEO_BLACK_LIST: {
                        YOUTUBE: /(youtube\.com)\/([^?v#]*)$/,
                        INSTAGRAM: /(https?:\/\/(www\.)?)?[instagr\.am|instagram]\.com\/.*$/
                    },
                    MONTH: /^(0[1-9]|1[0-2])$/,
                    CN_REGEX: /^[\u4E00-\u9FA5]+$/,
                    CN_REGEX_G: /[\u4e00-\u9fa5]/g,
                    EMAIL: /^(?=.{1,254}$)(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    PHONE: /^[+\d-\(\)]{1,30}$/,
                    PHONE_WITH_INTERNATIONAL: /^\d{5,11}$/,
                    PHONE_WITH_SPACE: /^[+\d-\(\)\s]+$/,
                    PHONE_IN_CHINA: /^\d{11}$/,
                    PHONE_PURE_DIGITAL: /^\d{1,30}$/,
                    PHONE_CODE: /^\d{1,4}$/,
                    PURE_DIGITAL: /^[0-9]*$/,
                    PURE_DIGITAL_SEARCH: /[^0-9]/gi,
                    NO_NUMBER: /^[^\d]+$/,
                    ALL_NUMBER: /^\d+$/,
                    PASSWORD: /^((?![0-9]+$)|(?![a-zA-Z]+$))[0-9A-Za-z]{8,20}$/,
                    HAS_LINK_G: /https?:\/\/[^\s,{}\[\]]*/g,
                    LINK_REGEX: /https?:\/\/[^\s,{}\[\]]*/,
                    DOMAIN_NAME: /^[\w-]+[^-]$/,
                    DOMAIN: /^(?!www.*$)[\w-]+[^-][.\w][^\ '\"]*$/,
                    DOMAIN_EXACT: /^(?!www.*$)+[\w-]+[\.\w{2,}]+$/,
                    DOMAIN_WILDCARD: /^(?!www.*$)+[\w-]+[\.\S{2,}]+$/,
                    DOMAIN_NAME_REGEX: /^(?!.*--)[a-zA-Z0-9\u4e00-\u9fa5]+(?:[-.][a-zA-Z0-9\u4e00-\u9fa5]+)*$/,
                    PRICE: /^\d+(\.\d{1,2}|\.)?$/,
                    BLOG_CATEGORY_NAME: /^([^\u0000-\u002F^\u003A-\u0040^\u005B-\u0060^\u007B-\u007F]|[\u0020\u002D\u0027])*$/,
                    MINIPRO_ECOMMERCE_CATEGORY_NAME: /^([^\u0000-\u002F^\u003A-\u0040^\u005B-\u0060^\u007B-\u007F]|[\u0020\u002D\u0027])*$/,
                    ECOMMERCE_CATEGORY_NAME: /^[^,:;'"\n\r]*$/,
                    ECOMMERCE_STORE_PAGE_PATH: /^\/store\/categories\/?\S*$/,
                    PORTFOLIO_CATEGORIES_PAGE_PATH: /^\/portfolio\/categories\/?\S*$/,
                    BLOG_CATEGORIES_PAGE_PATH: /^\/blog\/categories\/?\S*$/,
                    PORTFOLIO_DETAILS_PAGE_PATH: /^\/portfolio\/items\/?\S*$/,
                    PHONE_VERIFICATION_CODE: /^\d{6}$/,
                    PHONE_WITH_LENGTH: /^1\d{10}$/,
                    EMOJI: "",
                    FACEBOOK_LINK: /facebook.com\//,
                    SXL_PASSWORD_STRENGTH: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z\(\)\-\.\?\[\]_`~;:!#$%^&*+=]{8,20}$/,
                    ALPHA_NUMERIC: /^[a-z0-9]+$/i,
                    ICP: /^[京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川蜀贵黔云滇藏陕秦甘陇青宁新台澳港].*\d{6}(-[1-9]\d?)?/,
                    PSB: /^[京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川蜀贵黔云滇藏陕秦甘陇青宁新台澳港]公网安备\s?\d{14}(-[1-9]\d?)?号$/,
                    FIRST_LETTER: /( |^)[a-z]/g,
                    UNDERLINE_TO_HUMP: /\_(\w)/g,
                    META_TAG: /<meta([^<]+)/g,
                    HTML_TAG_CONTENT: /<[^>]+>(.*)<\/[^>]+>/,
                    REG_BODY: /<body[^>]*>([\s\S]+?)<\/body>/i,
                    LINK_TAG: /<\/?a[\s\S]*>/i,
                    FONT_SIZE_STYLE: /font-size:[^;]+?;/g,
                    WECHART_NAME: /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/,
                    ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                    PROTOCOL_REG: /(http|https):\/\/([\w.]+\/?)\S*/,
                    LINK_REG: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                    HAS_HTTP: /^http(s)?/,
                    TAXES_REGEX: /^\d{1,2}(\.|\.\d{1,3})?(\%?)$/,
                    NUMBER_RANGE: new RegExp("^([1-9][0-9]{0,1}|100)$"),
                    TAX_SSN_REG: /^\d{9}$|^\d{3}-\d{2}-\d{4}$/,
                    TAX_EIN_REG: /^\d{9}$|^\d{2}-\d{7}$/,
                    DATE_TIME: /^\d{4}-\d{2}-\d{2}$/,
                    ZIP_CODE: /^\d{5}$/,
                    NOT_HAS_LATIN_LANGUAGE: /[A-z\u00C0-\u00ff]+/,
                    ENGLISH_AND_SPECIAL_CHARACTERS_REG: /^[\u0020-\u007e]*$/,
                    ZERO_TO_NINE: /[0-9]/gi,
                    NUMBER_RANGE_48: /^([1-9]|[1-4][0-8]|19|29|39)$/,
                    SLASH: /\/$/,
                    SUBDOMAIN_VALID: /^([a-z]|[0-9]|-)+$/,
                    FINLAND_IC_CARD: new RegExp("^(0[1-9]|1[0-9]|2[0-8]|3[0-1])(0[1-9]|1[0-2])[0-9]{2}[+AaBbCcDdEeFfUuVvWwXxYy-][0-9]{3}[0123456789ABCDEFHJKLMNPRSTUVWXY]$"),
                    SAVE_DOMAIN_INVALID_SYMBOL: /(\?|\&|\#|\/|\:)/,
                    SAVE_DOMAIN_CLEAR_SYMBOL: /(http|https):\/\//g,
                    RELATIVE_URL: /^\/\S?/,
                    IS_GA4_ID: /^G-[A-Z0-9]{10}$/
                },
                n = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
                o = /(<([^>]+)>)/gi,
                F = "&nbsp;",
                l = /s\/sites/,
                a = /(\d+\/edit).*$/,
                r = /(\d+\/edit\/manage).*$/,
                E = {
                    GB: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
                    JE: /^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/i,
                    GG: /^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/i,
                    IM: /^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/i,
                    US: /^\d{5}([ \-](?:\d{4}|\d{6}))?$/,
                    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
                    DE: /^\d{5}$/,
                    AU: /^\d{4}$/,
                    IT: /^\d{5}$/,
                    CH: /^\d{4}$/,
                    AT: /^\d{4}$/,
                    ES: /^\d{5}$/,
                    NL: /^\d{4}[ ]?[A-Z]{2}$/i,
                    BE: /^[1-9]\d{3}$/,
                    DK: /^\d{4}$/,
                    NO: /^\d{4}$/,
                    FI: /^\d{5}$/,
                    AX: /^22\d{3}$/,
                    KR: /^(\d{5}|\d{6}|\d{3}[\-]\d{3})$/,
                    CN: /^\d{6}$/,
                    SG: /^\d{6}$/,
                    DZ: /^\d{5}$/,
                    AD: /^AD\d{3}$/,
                    AR: /^([A-Z]\d{4}[A-Z]{3})|([A-Z]\d{4})$/,
                    AM: /^(37)?\d{4}$/,
                    BH: /^((1[0-2]|[2-9])\d{2})?$/,
                    BD: /^\d{4}$/,
                    BB: /^(BB\d{5})?$/i,
                    BY: /^\d{6}$/,
                    BM: /^[A-Z]{2}[ ]?[A-Z0-9]{2}$/i,
                    BA: /^\d{5}$/,
                    BN: /^[A-Z]{2}[ ]?\d{4}$/i,
                    BG: /^\d{4}$/,
                    KH: /^\d{6}$/,
                    CV: /^\d{4}$/,
                    CL: /^\d{3}[-]?\d{4}$/,
                    HR: /^\d{5}$/,
                    CY: /^\d{4}$/,
                    CZ: /^[1-7][0-9]{2}[ ]?\d{2}$/,
                    DO: /^\d{5}$/,
                    EC: /^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/i,
                    EE: /^\d{5}$/,
                    FO: /^\d{3}$/,
                    GE: /^\d{4}$/,
                    GL: /^39\d{2}$/,
                    GT: /^\d{5}$/,
                    HT: /^\d{4}$/,
                    HU: /^\d{4}$/,
                    IS: /^\d{3}$/,
                    IN: /^\d{6}$/,
                    ID: /^\d{5}$/,
                    IL: /^\d{5,7}$/,
                    JO: /^\d{5}$/,
                    KZ: /^\d{6}$/,
                    KE: /^\d{5}$/,
                    KW: /^\d{5}$/,
                    LA: /^\d{5}$/,
                    LB: /^(\d{4}([ ]?\d{4})?)?$/,
                    LU: /^(L\-)?\d{4}$/,
                    MK: /^\d{4}$/,
                    MY: /^\d{5}$/,
                    MV: /^\d{5}$/,
                    MT: /^[A-Z]{3}[ ]?\d{2,4}$/i,
                    MU: /^\d{5}$/,
                    MX: /^\d{5}$/,
                    MA: /^\d{5}$/,
                    NZ: /^\d{4}$/,
                    NI: /^\d{5}$/,
                    NG: /^(\d{6})?$/,
                    OM: /^(PC )?\d{3}$/i,
                    PK: /^\d{5}$/,
                    PY: /^\d{4}$/,
                    PH: /^\d{4}$/,
                    PL: /^\d{2}-\d{3}$/,
                    PR: /^00[679]\d{2}([ \-]\d{4})?$/,
                    RO: /^\d{6}$/,
                    RU: /^\d{6}$/,
                    SM: /^4789\d$/,
                    SA: /^\d{5}$/,
                    SN: /^\d{5}$/,
                    SI: /^\d{4}$/,
                    ZA: /^\d{4}$/,
                    LK: /^\d{5}$/,
                    TJ: /^\d{6}$/,
                    TH: /^\d{5}$/,
                    TN: /^\d{4}$/,
                    TR: /^\d{5}$/,
                    TM: /^\d{6}$/,
                    UA: /^\d{5}$/,
                    UZ: /^\d{6}$/,
                    VA: /^00120$/,
                    VE: /^\d{4}$/,
                    ZM: /^\d{5}$/,
                    AS: /^96799$/,
                    CC: /^6799$/,
                    CK: /^\d{4}$/,
                    RS: /^\d{5}$/,
                    CS: /^\d{5}$/,
                    YU: /^\d{5}$/,
                    CX: /^6798$/,
                    ET: /^\d{4}$/,
                    FK: /^FIQQ 1ZZ$/,
                    NF: /^2899$/,
                    FM: /^(9694[1-4])([ \-]\d{4})?$/,
                    GF: /^9[78]3\d{2}$/,
                    GP: /^9[78][01]\d{2}$/,
                    GS: /^SIQQ 1ZZ$/i,
                    GU: /^969[123]\d([ \-]\d{4})?$/,
                    GW: /^\d{4}$/,
                    HM: /^\d{4}$/,
                    IQ: /^\d{5}$/,
                    KG: /^\d{6}$/,
                    LR: /^\d{4}$/,
                    LS: /^\d{3}$/,
                    MG: /^\d{3}$/,
                    MN: /^\d{5}$/,
                    MP: /^9695[012]([ \-]\d{4})?$/,
                    MQ: /^9[78]2\d{2}$/,
                    NC: /^988\d{2}$/,
                    NE: /^\d{4}$/,
                    PF: /^987\d{2}$/,
                    PG: /^\d{3}$/,
                    PM: /^9[78]5\d{2}$/,
                    PN: /^PCRN 1ZZ$/,
                    PW: /^96940$/,
                    RE: /^9[78]4\d{2}$/,
                    SH: /^(ASCN|STHL) 1ZZ$/i,
                    SJ: /^\d{4}$/,
                    SZ: /^[HLMS]\d{3}$/i,
                    TC: /^TKCA 1ZZ$/i,
                    WF: /^986\d{2}$/,
                    XK: /^\d{5}$/,
                    YT: /^976\d{2}$/,
                    AF: /^\d{4}$/,
                    AL: /^\d{4}$/,
                    AG: /^([a-zA-Z\d\s]){3,}$/,
                    AO: /^([a-zA-Z\d\s]){3,}$/,
                    AZ: /^([a-zA-Z\d\s]){3,}$/,
                    BF: /^([a-zA-Z\d\s]){3,}$/,
                    BI: /^([a-zA-Z\d\s]){3,}$/,
                    BZ: /^([a-zA-Z\d\s]){3,}$/,
                    BR: /^\d{5}(-?)\d{3}$/,
                    BJ: /^([a-zA-Z\d\s]){3,}$/,
                    BT: /^\d{5}$/,
                    BQ: /^([a-zA-Z\d\s]){3,}$/,
                    BO: /^\d{4}$/,
                    BW: /^([a-zA-Z\d\s]){3,}$/,
                    CF: /^([a-zA-Z\d\s]){3,}$/,
                    CG: /^([a-zA-Z\d\s]){3,}$/,
                    CI: /^([a-zA-Z\d\s]){3,}$/,
                    CM: /^([a-zA-Z\d]){3,7}$/,
                    CO: /^([a-zA-Z\d\s]){3,}$/,
                    CR: /^\d{5}$/,
                    CU: /^\d{5}$/,
                    KM: /^([a-zA-Z\d\s]){3,}$/,
                    DJ: /^([a-zA-Z\d\s]){3,}$/,
                    DM: /^([a-zA-Z\d\s]){3,}$/,
                    EG: /^\d{5}$/,
                    GQ: /^([a-zA-Z\d\s]){3,}$/,
                    EL: /^\d{5}$/,
                    ER: /^([a-zA-Z\d\s]){3,}$/,
                    FJ: /^([a-zA-Z\d\s]){3,}$/,
                    FR: /^\d{5}$/,
                    GD: /^([a-zA-Z\d\s]){3,}$/,
                    GH: /^([a-zA-Z\d\s]){3,}$/,
                    GM: /^([a-zA-Z\d\s]){3,}$/,
                    GN: /^([a-zA-Z\d\s]){3,}$/,
                    GI: /^(GX11 1AA)$/,
                    GR: /^\d{3}[ ]?\d{2}$/,
                    GY: /^([a-zA-Z\d\s]){3,}$/,
                    HN: /^\d{5}$/,
                    IO: /^\d{5}$/,
                    IR: /^\d{5}$/,
                    JP: /^(\d{3}-\d{4}|\d{7})$/,
                    JM: /^(JM)[A-Z]{3}\d{2}$/i,
                    KI: /^([a-zA-Z\d\s]){3,}$/,
                    KN: /^([a-zA-Z\d\s]){3,8}$/,
                    KP: /^([a-zA-Z\d\s]){3,8}$/,
                    LI: /^\d{4}$/,
                    LV: /^([a-zA-Z]|\d){3,8}$/,
                    LY: /^\d{5}$/,
                    LT: /^([a-zA-Z]){2}(-)\d{4,5}$/,
                    LC: /^([a-zA-Z\d\s]){3,}$/,
                    MC: /^\d{5}$/,
                    MD: /^(([a-zA-Z]){2})(|\s)\d{4}$/,
                    ME: /^([a-zA-Z\d\s]){3,}$/,
                    MH: /^\d{5}$/,
                    MR: /^([a-zA-Z\d\s]){3,}$/,
                    MM: /^([a-zA-Z\d\s]){3,}$/,
                    MW: /^([a-zA-Z\d\s]){3,}$/,
                    MZ: /^\d{4}$/,
                    NA: /^\d{5}$/,
                    NP: /^\d{5}$/,
                    NR: /^([a-zA-Z\d\s]){3,}$/,
                    PT: /^\d{4}(-|\s)\d{3}$/,
                    PS: /^\d{3}$/,
                    PE: /^\d{5}$/,
                    QA: /^([a-zA-Z\d\s]){3,}$/,
                    RW: /^([a-zA-Z\d\s]){3,}$/,
                    SC: /^([a-zA-Z\d\s]){3,}$/,
                    SE: /^\d{3}[ ]?\d{2}$/,
                    SK: /^[089]\d{2}[ ]?\d{2}$/,
                    SL: /^([a-zA-Z\d\s]){3,}$/,
                    SB: /^([a-zA-Z\d\s]){3,}$/,
                    SR: /^([a-zA-Z\d\s]){3,}$/,
                    SO: /^([a-zA-Z\d\s]){3,}$/,
                    SV: /^\d{4,5}$/,
                    SD: /^\d{5}$/,
                    ST: /^([a-zA-Z\d\s]){3,}$/,
                    SY: /^([a-zA-Z\d\s]){3,}$/,
                    SS: /^\d{5}$/,
                    TD: /^\d{5}$/,
                    TG: /^([a-zA-Z\d\s]){3,}$/,
                    TO: /^([a-zA-Z\d\s]){3,}$/,
                    TZ: /^([a-zA-Z\d\s]){3,}$/,
                    TT: /^\d{6}$/,
                    TW: /^(?:\d{3}|\d{5}|\d{6})$/,
                    UK: /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/i,
                    UG: /^([a-zA-Z\d\s]){3,}$/,
                    UM: /^([a-zA-Z\d\s]){3,}$/,
                    UY: /^([a-zA-Z\d\s]){3,}$/,
                    VC: /^(VC)\d{4}$/,
                    VI: /^\d{5}$/,
                    VG: /^([a-zA-Z\d\s]){3,}$/,
                    VN: /^\d{6}$/,
                    VU: /^([a-zA-Z\d\s]){3,}$/,
                    WS: /^([a-zA-Z\d\s]){3,}$/,
                    YE: /^([a-zA-Z\d\s]){3,}$/,
                    ZW: /^([a-zA-Z\d\s]){3,}$/
                },
                C = /<\/?(?:div|p|span|h[1-6]|a|img|input|button|ul|ol|li|table|thead|tbody|tr|td|th|form|label|select|option|textarea|script|style|header|footer|section|article|aside|nav|main|figure|figcaption|video|audio|source|iframe|canvas|svg|path|g)\b[^>]*>/,
                i = /(function\s*\(|=>|eval\(|new Function|document\.|window\.)/i,
                A = /^[0-9]{8,10}$/,
                c = /"\_state":[^,{}]*,[\r\n]*|,\s*"\_state":[^{},\r\n]*/g,
                d = /\n|\r/g,
                f = /[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af\u0600-\u06ff]/,
                s = /^[!,\.:;\?\xA1\xBF\u060C\u061B\u061F\u2026\u3002\uFF01\uFF0C\uFF1A\uFF1F]/,
                _ = /[!,\.:;\?\xA1\xBF\u060C\u061B\u061F\u2026\u3002\uFF01\uFF0C\uFF1A\uFF1F]$/,
                g = /[!,\.:;\?\xA1\xBF\u060C\u061B\u061F\u2026\u3002\uFF01\uFF0C\uFF1A\uFF1F]/,
                B = /^(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])/,
                p = /(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])$/,
                b = /(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F])(?:[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])/,
                $ = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])/g,
                S = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])+$/g,
                I = /^(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA])+/g
        },
        680523: function(u, D, t) {
            var e = t(663978),
                n = t(60530)(t(60530));
            e(D, "__esModule", {
                value: !0
            }), t(974916), t(864765), t(569600);
            var o = t(678580),
                F = (0, n.default)(o),
                l = t(977766),
                a = (0, n.default)(l),
                r = t(2991),
                E = ((0, n.default)(r), t(432366)),
                C = ((0, n.default)(E), t(981643)),
                i = ((0, n.default)(C), {
                    IMAGE: {
                        TRANSPARENT_IMAGE_URL: function() {
                            return "/images/icons/transparent.png"
                        }
                    },
                    FORM: {
                        COLLECT: function(u) {
                            return "/i/".concat(u, "/collected_emails.jsm")
                        }
                    },
                    SOCIAL_FEED: {
                        ACCOUNTS: function(u, D) {
                            var t = "/r/v1/sites/".concat(u, "/social_feed_accounts");
                            return null != D && (t += "/".concat(D)), t
                        },
                        FEEDS: function(u) {
                            return "/r/v1/sites/".concat(u, "/social_feeds")
                        }
                    },
                    PORTFOLIO: {
                        GET_PRODUCTS: function(u, D, t) {
                            var e, n, o, l, r, E, C, i, A, c, d, f, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
                                _ = arguments.length > 4 ? arguments[4] : void 0,
                                g = (0, F.default)(e = location.search).call(e, "isAiSite=true") && !(0, F.default)(n = location.search).call(n, "fullInit=true"),
                                B = (0, a.default)(o = "".concat("")).call(o, g ? "&isAiSiteBuilderPreview=true" : "");
                            return "all" === D ? (0, a.default)(l = (0, a.default)(r = (0, a.default)(E = (0, a.default)(C = "/r/v1/sites/".concat(u, "/portfolio/products?per=")).call(C, s, "&page=")).call(E, t, "&filters=")).call(r, _)).call(l, B) : (0, a.default)(i = (0, a.default)(A = (0, a.default)(c = (0, a.default)(d = (0, a.default)(f = "/r/v1/sites/".concat(u, "/portfolio/categories/")).call(f, D, "/products?per=")).call(d, s, "&page=")).call(c, t, "&filters=")).call(A, _)).call(i, B)
                        },
                        GET_PRODUCT_DETAIL: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/portfolio/products/")).call(t, D)
                        },
                        GET_PRODUCT_DETAIL_BY_SLUG: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/portfolio/products/slug/")).call(t, D)
                        },
                        GET_CATEGORIES: function(u) {
                            return "/r/v1/sites/".concat(u, "/portfolio/categories")
                        },
                        SETTINGS: function(u) {
                            return "/r/v1/sites/".concat(u, "/portfolio/setting")
                        },
                        SETTING: function(u) {
                            return "/r/v1/sites/".concat(u, "/portfolio/setting")
                        }
                    },
                    MEMBERSHIP: {
                        CREATE_SUBSCRIPTION: function(u) {
                            return "/r/v1/sites/".concat(u, "/membership/subscriptions")
                        }
                    },
                    ECOMMERCE: {
                        GET_PRODUCTS: function(u, D, t) {
                            var e, n, o, l, r, E, C, i, A, c, d, f, s, _, g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                B = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                                p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 500,
                                b = (0, F.default)(e = location.search).call(e, "isAiSite=true") && !(0, F.default)(n = location.search).call(n, "fullInit=true"),
                                $ = (0, a.default)(o = (0, a.default)(l = (0, a.default)(r = "&need_filter_options=".concat(g)).call(r, B ? "&".concat(B) : "")).call(l, "")).call(o, b ? "&isAiSiteBuilderPreview=true" : "");
                            return "all" === t ? (0, a.default)(E = (0, a.default)(C = "/r/v1/sites/".concat(u, "/products?filter=not_deleted&per=")).call(C, p)).call(E, $) : "all" === D ? (0, a.default)(i = (0, a.default)(A = (0, a.default)(c = "/r/v1/sites/".concat(u, "/products?per=")).call(c, p, "&page=")).call(A, t)).call(i, $) : (0, a.default)(d = (0, a.default)(f = (0, a.default)(s = (0, a.default)(_ = "/r/v1/sites/".concat(u, "/categories/")).call(_, D, "/products?per=")).call(s, p, "&page=")).call(f, t)).call(d, $)
                        },
                        ECOMMERCE_SETTINGS: function(u) {
                            return "/r/v1/sites/".concat(u, "/ecommerce_settings")
                        },
                        FETCH_ORDER_SUMMARY_BY_ID: function(u, D) {
                            var t, e, n = D.memberId,
                                o = D.email;
                            return (0, a.default)(t = (0, a.default)(e = "/r/v1/sites/".concat(u, "/orders/overview?memberId=")).call(e, n || "", "&email=")).call(t, n ? "" : o)
                        },
                        FETCH_ORDER_LIST_BY_ID: function(u, D) {
                            var t, e, n, o = D.email,
                                F = D.memberId,
                                l = D.page,
                                r = decodeURIComponent(o);
                            return (0, a.default)(t = (0, a.default)(e = (0, a.default)(n = "/r/v1/sites/".concat(u, "/orders?memberId=")).call(n, F || "", "&email=")).call(e, F ? "" : r, "&page=")).call(t, l, "&per=10")
                        },
                        GET_PRODUCTS_FOR_CART: function() {
                            return "/r/v1/list_products"
                        },
                        GET_PRODUCT_DETAIL: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/products/")).call(t, D)
                        },
                        GET_PRODUCT_REVIEWS: function(u, D, t, e, n) {
                            var o, F, l, r;
                            return (0, a.default)(o = (0, a.default)(F = (0, a.default)(l = (0, a.default)(r = "/r/v1/sites/".concat(u, "/ecommerce/product_reviews?productId=")).call(r, D, "&page=")).call(l, t, "&per=")).call(F, e)).call(o, n ? "&order=".concat(n) : "")
                        },
                        GET_PRODUCT_STATISTICS: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/ecommerce/product_reviews/statistics?productId=")).call(t, D)
                        },
                        GET_PRODUCT_DETAIL_BY_SLUG: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/products/slug/")).call(t, D)
                        },
                        GET_CATEGORIES: function(u) {
                            return "/r/v1/sites/".concat(u, "/categories")
                        },
                        SETTINGS: function(u) {
                            return "/r/v1/sites/".concat(u, "/ecommerce")
                        },
                        SQUARE_CHARGE: function(u) {
                            return "/r/v1/sites/".concat(u, "/orders/square_charge")
                        },
                        COUPON: function(u) {
                            var D;
                            return (0, a.default)(D = "/r/v1/sites/".concat(u.pageId, "/coupons/")).call(D, u.action)
                        },
                        ORDER: function(u) {
                            var D;
                            return u.orderId ? (0, a.default)(D = "/r/v1/sites/".concat(u.pageId, "/orders/")).call(D, u.orderId) : u.charge ? "/r/v1/sites/".concat(u.pageId, "/orders/charge") : u.updateUserInfo ? "/r/v1/sites/".concat(u.pageId, "/orders/update_info") : "/r/v1/sites/".concat(u.pageId, "/orders")
                        },
                        CANCEL_ORDER: function(u) {
                            return "/r/v1/sites/".concat(u, "/orders/cancel")
                        },
                        SET_SHOPPING_CART: function(u) {
                            return "/r/v1/sites/".concat(u, "/wechat/pre_orders")
                        },
                        GET_SHOPPING_CART: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/sites/".concat(u, "/wechat/pre_orders/")).call(t, D)
                        }
                    },
                    COLLABORATORS: {
                        ALL: function(u) {
                            return "/r/v1/sites/".concat(u, "/collaborators")
                        }
                    },
                    PAGE: {
                        PREVIEW_MULTIPAGE: function(u, D) {
                            var t, e, n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                F = !1;
                            return (0, a.default)(t = (0, a.default)(e = (0, a.default)(n = "/s/sites/".concat(u)).call(n, F ? "" : "/preview", "?mode=iframe&uid=")).call(e, D)).call(t, o)
                        },
                        SHOW_MULTIPAGE: function(u) {
                            var D, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            return (0, a.default)(D = "".concat(u)).call(D, t)
                        },
                        SELECT_TEMPLATE: function() {
                            return "/s/select_template"
                        },
                        GET_PAGE_DATA_IN_EDITOR: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/s/sites/".concat(u, "/pages/")).call(t, D)
                        },
                        GET_PAGE_DATA: function(u) {
                            return "/pages/".concat(u)
                        }
                    },
                    BLOG: {
                        BLOG_POST_RELATIVE_URL: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/s/blog_posts/".concat(u, "/")).call(t, D)
                        },
                        RSS_PATH: function() {
                            return "/blog/feed.xml"
                        },
                        FETCH_POSTS: function(u, D) {
                            var t, e, n, o, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "null",
                                r = arguments.length > 3 ? arguments[3] : void 0,
                                E = arguments.length > 4 ? arguments[4] : void 0,
                                C = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
                                i = (0, F.default)(t = location.search).call(t, "isAiSite=true") && !(0, F.default)(e = location.search).call(e, "fullInit=true"),
                                A = (0, a.default)(n = (0, a.default)(o = "".concat(C)).call(o, "")).call(n, i ? "&isAiSiteBuilderPreview=true" : ""),
                                c = "";
                            if (null == r) {
                                var d, f, s, _;
                                c = (0, a.default)(d = (0, a.default)(f = (0, a.default)(s = (0, a.default)(_ = "/r/v1/sites/".concat(u, "/blog?expand=blogPosts&limit=")).call(_, l, "&page=")).call(s, D, "&include_long_blurb=")).call(f, E)).call(d, A)
                            } else {
                                var g, B, p, b, $, S = encodeURIComponent(r);
                                c = (0, a.default)(g = (0, a.default)(B = (0, a.default)(p = (0, a.default)(b = (0, a.default)($ = "/r/v1/sites/".concat(u, "/blog?expand=blogPosts&limit=")).call($, l, "&page=")).call(b, D, "&tag=")).call(p, S, "&include_long_blurb=")).call(B, E)).call(g, A)
                            }
                            return c
                        },
                        FETCH_ALL_POSTS: function(u, D, t) {
                            var e, n, o, F, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "null";
                            if (void 0 === t) return (0, a.default)(e = (0, a.default)(n = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=")).call(n, l, "&page=")).call(e, D, "&include_long_blurb=true");
                            if (null === t) return (0, a.default)(o = (0, a.default)(F = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=")).call(F, l, "&page=")).call(o, D, "&no_category=true&include_long_blurb=true");
                            var r, E, C, i = encodeURIComponent(t);
                            return (0, a.default)(r = (0, a.default)(E = (0, a.default)(C = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=")).call(C, l, "&page=")).call(E, D, "&tag=")).call(r, i, "&include_long_blurb=true")
                        },
                        SEARCH_BLOG_POSTS: function(u, D, t, e) {
                            var n, o, F, l;
                            if (void 0 === e) return (0, a.default)(n = (0, a.default)(o = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=20&page=")).call(o, t, "&query=")).call(n, D, "&include_long_blurb=true");
                            if (null === e) return (0, a.default)(F = (0, a.default)(l = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=20&page=")).call(l, t, "&no_category=true&query=")).call(F, D, "&include_long_blurb=true");
                            var r, E, C, i = encodeURIComponent(e);
                            return (0, a.default)(r = (0, a.default)(E = (0, a.default)(C = "/r/v1/sites/".concat(u, "/blog/edit?expand=blogPosts&limit=20&page=")).call(C, t, "&tag=")).call(E, i, "&query=")).call(r, D, "&include_long_blurb=true")
                        },
                        FETCH_BLOG_CATEGORIES: function(u) {
                            return "/r/v1/sites/".concat(u, "/blog/tags")
                        },
                        FETCH_COMMENTS: function(u) {
                            return "/r/v1/blog_posts/".concat(u, "/comments")
                        },
                        CREATE_COMMENT: function(u) {
                            return "/r/v1/blog_posts/".concat(u, "/comments")
                        },
                        DELETE_COMMENT: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/blog_posts/".concat(u, "/comments/")).call(t, D)
                        },
                        APPROVE_COMMENTS: function(u) {
                            return "/r/v1/blog_posts/".concat(u, "/comments/approve")
                        },
                        MARK_COMMENT_AS_SPAM: function(u, D) {
                            var t;
                            return (0, a.default)(t = "/r/v1/blog_posts/".concat(u, "/comments/")).call(t, D, "/mark_as_spam")
                        },
                        SUBSCRIBE: function(u) {
                            return "/r/v1/sites/".concat(u, "/blog/subscribe")
                        },
                        FETCH_BLOG_SUBSCRIPTIONS: function(u, D, t) {
                            var e, n;
                            return (0, a.default)(e = (0, a.default)(n = "/r/v1/pages/".concat(u, "/blog_subscriptions?page=")).call(n, D, "&per_page=")).call(e, t)
                        },
                        DELETE_BLOG_SUBSCRIPTIONS: function(u) {
                            return "/r/v1/pages/".concat(u, "/blog_subscriptions/batch_delete")
                        },
                        EXPORT_ALL_SUBSCRIPTIONS_URL: function(u) {
                            return "/r/v1/pages/".concat(u, "/blog_subscriptions.csv")
                        },
                        PREVIEW: function(u) {
                            return "/s/blog_posts/".concat(u, "/preview?mode=seamless")
                        }
                    },
                    AREA: {
                        FETCH_CHILDREN: function(u) {
                            return u ? "r/v1/districts/".concat(u) : "r/v1/districts/000000"
                        }
                    },
                    WECHAT_ACCOUNT: {
                        FETCH_SUBSCRIBE_STATUS: function() {
                            return "/s/wechat/account/subscribe_status"
                        }
                    },
                    WECHAT_AUTHORIZATION: {
                        GET_OAUTH_URL: function(u, D) {
                            var t, e = D ? "&redirect_uri=".concat(window.encodeURIComponent(D)) : "";
                            return (0, a.default)(t = "/t/goto/wechat_mp_auth?site_id=".concat(u)).call(t, e)
                        },
                        GET_ACCOUNT_INFO: function(u) {
                            return "/r/v1/wechat/mp/accounts/".concat(u)
                        },
                        NEW_GET_ACCOUNT_INFO: function(u) {
                            return "/r/v1/sites/".concat(u, "/authorized_mp_account")
                        }
                    },
                    WECHAT_INTEGRATE_BLOG: {
                        PREVIEW_BLOG: function(u) {
                            return "/r/v1/wechat/mp/accounts/".concat(u, "/broadcast_messages/preview")
                        },
                        PUBLISH_BLOG: function(u) {
                            return "/r/v1/wechat/mp/accounts/".concat(u, "/broadcast_messages")
                        },
                        PREVIEW_BEFORE_PUBLISH: function(u) {
                            return "/s/blog_posts/".concat(u, "/wechat_preview")
                        }
                    },
                    DONATION: {
                        MANAGER_PATH: function(u) {
                            return "/s/sites/".concat(u, "/donation/manage")
                        },
                        GET_SETTINGS: function(u) {
                            return "/r/v1/sites/".concat(u, "/donation_settings")
                        },
                        SUBMIT_FORM: function(u) {
                            return "/r/v1/sites/".concat(u, "/donation/orders")
                        },
                        FETCH_ORDERS: function(u) {
                            return "/r/v1/sites/".concat(u, "/donation/orders")
                        },
                        EXPORT_ORDERS: function(u) {
                            return "/s/sites/".concat(u, "/donation_orders.csv")
                        }
                    },
                    USER: {
                        UPDATE_LOCALE: function() {
                            return "/r/v1//users/locale_setting"
                        }
                    },
                    SEARCH: {
                        QUERY: function(u) {
                            var D, t, e = u.page,
                                n = u.siteId,
                                o = u.searchKey,
                                F = u.captchaToken;
                            return (u.isInPreviewMode ? "/r/v1/sites/".concat(n, "/search") : "/r/v1/search") + (0, a.default)(D = (0, a.default)(t = "?q=".concat(o, "&page=")).call(t, e, "&recaptchaToken=")).call(D, F)
                        }
                    }
                }),
                A = i;
            D.default = A, u.exports = D.default
        },
        183123: function(u, D, t) {
            var e = t(663978),
                n = t(60530)(t(60530));
            e(D, "__esModule", {
                value: !0
            });
            var o = t(981643),
                F = (0, n.default)(o),
                l = t(678580),
                a = (0, n.default)(l),
                r = t(2991),
                E = (0, n.default)(r),
                C = t(620116),
                i = (0, n.default)(C),
                A = t(686902),
                c = (0, n.default)(A),
                d = t(51942),
                f = (0, n.default)(d),
                s = t(496486),
                _ = (0, n.default)(s),
                g = t(717187),
                B = t(827787),
                p = (0, n.default)(B),
                b = t(684961),
                $ = (0, n.default)(b),
                S = t(329756),
                I = _.default.assign({}, g.EventEmitter.prototype, {
                    getEnvironment: function() {
                        return (0, $.default)("globalConf.environment")
                    },
                    getCanUseMobileAiSiteBuilder: function() {
                        return (0, $.default)("globalConf.rollout.ai_site_builder_mobile")
                    },
                    getENV: function() {
                        return (0, $.default)("globalConf.env")
                    },
                    getCloudinaryCloudName: function() {
                        return (0, $.default)("globalConf.CLOUDINARY_CLOUD_NAME")
                    },
                    getCloudinaryPreset: function() {
                        return (0, $.default)("globalConf.CLOUDINARY_PRESET")
                    },
                    getInChina: function() {
                        return (0, $.default)("globalConf.inChina")
                    },
                    getChinaOptimization: function() {
                        return (0, $.default)("globalConf.chinaOptimization")
                    },
                    getIsOpenSiteVersionHistory: function() {
                        return (0, $.default)("globalConf.rollout.version_history")
                    },
                    getLocale: function() {
                        return (0, $.default)("globalConf.locale")
                    },
                    getIsSxl: function() {
                        return (0, $.default)("globalConf.isSxl")
                    },
                    getUserImageCDN: function(u) {
                        return (0, $.default)("globalConf.userImageCdn") && (0, $.default)("globalConf.userImageCdn")[u]
                    },
                    getUserImagePrivateCDN: function(u) {
                        return (0, $.default)("globalConf.userImagePrivateCdn") && (0, $.default)("globalConf.userImagePrivateCdn")[u]
                    },
                    getUserFilePrivateCDN: function(u) {
                        return (0, $.default)("globalConf.userImagePrivateCdn") && (0, $.default)("globalConf.userImagePrivateCdn")[u]
                    },
                    getIsStrikingly: function() {
                        return !this.getIsSxl()
                    },
                    getVideoGuidesFeature: function() {
                        var u;
                        return -1 !== (0, F.default)(u = ["en", "fr", "es"]).call(u, this.getLocale())
                    },
                    getPremiumAppsList: function() {
                        return (0, $.default)("globalConf.premiumApps")
                    },
                    getAssetUrl: function() {
                        return (0, $.default)("globalConf.assetUrl")
                    },
                    getSxlFontApiUrl: function() {
                        return (0, $.default)("globalConf.sxlFontApiUrl")
                    },
                    getSupportUrl: function() {
                        return (0, $.default)("globalConf.supportUrl")
                    },
                    getBookingDurations: function() {
                        return (0, $.default)("conf.booking.durations")
                    },
                    getBookingEventTypesLimit: function() {
                        return (0, $.default)("conf.booking.eventTypesLimit")
                    },
                    getSupportedCurrencyMap: function() {
                        return $S.conf && $S.conf.SUPPORTED_CURRENCY_MAP
                    },
                    getCanUseKickstartPaypal: function() {
                        var u, D;
                        return null === (u = $S.conf) || void 0 === u || null === (D = u.rollout) || void 0 === D ? void 0 : D.kickstart_paypal
                    },
                    isGoogleAnalyticsEnabled: function() {
                        return $S.conf.is_google_analytics_enabled
                    },
                    isKeenAnalyticsEnabled: function() {
                        return $S.conf.is_strikingly_analytics_enabled
                    },
                    getKeenIoPageSocialShareCollection: function() {
                        return $S.conf.keenio_page_socialshare_collection
                    },
                    getKeenIoPageFramingCollection: function() {
                        return $S.conf.keenio_page_framing_collection
                    },
                    getKeenIoPbsImpressionCollection: function() {
                        return $S.conf.keenio_pbs_impression_collection
                    },
                    getKeenIoPbsConversionCollection: function() {
                        return $S.conf.keenio_pbs_conversion_collection
                    },
                    getKeenIoFileDownloadCollection: function() {
                        return $S.conf.keenio_file_download_collection
                    },
                    getKeenIoEcommerceBuyerLanding: function() {
                        return $S.conf.keenio_ecommerce_buyer_landing
                    },
                    getIsCheckoutFormIntegration: function() {
                        return (0, $.default)("globalConf.rollout.checkout_form_integration")
                    },
                    getNeedCheckDomainConnectionStatus: function() {
                        return (0, $.default)("globalConf.rollout.domain_connection_v2")
                    },
                    getIsBypassCustomCodeReview: function() {
                        return (0, $.default)("globalConf.rollout.bypass_custom_code_review")
                    },
                    getNeedHtmlCustomCodeReview: function() {
                        return (0, $.default)("globalConf.rollout.need_html_custom_code_review")
                    },
                    getIpCountryCode: function() {
                        var u;
                        return (null === (u = (0, $.default)("globalConf.country_code")) || void 0 === u ? void 0 : u.toLowerCase()) || ""
                    },
                    getSupportedCurrency: function() {
                        return (0, $.default)("conf.SUPPORTED_CURRENCY") || (0, $.default)("global_conf.SUPPORTED_CURRENCY") || []
                    },
                    getKeenIoEcommerceBuyerViewedCheckoutDialog: function() {
                        return $S.conf.keenio_ecommerce_buyer_viewed_checkout_dialog
                    },
                    getKeenIoEcommerceBuyerCompletedShippingAddress: function() {
                        return $S.conf.keenio_ecommerce_buyer_completed_shipping_address
                    },
                    getKeenIoEcommerceBuyerSelectedPaymentMethod: function() {
                        return $S.conf.keenio_ecommerce_buyer_selected_payment_method
                    },
                    getKeenIoEcommerceBuyerCanceledOrder: function() {
                        return $S.conf.keenio_ecommerce_buyer_canceled_order
                    },
                    getKeenIoEcommerceBuyerAddedItemToCart: function() {
                        return $S.conf.keenio_ecommerce_buyer_added_item_to_cart
                    },
                    getKeenIoEventsCollection: function() {
                        return $S.conf.keenio_events_collection
                    },
                    getCountryPhoneCode: function() {
                        return $S.conf && $S.conf.COUNTRY_PHONE_CODE
                    },
                    getStateOrProvinceList: function() {
                        return I.getIsBlog() ? (0, $.default)("stateList") : (0, $.default)("state_list")
                    },
                    getTimeZones: function() {
                        return I.getIsBlog() ? (0, $.default)("conf.time_zones") : (0, $.default)("globalConf.time_zones")
                    },
                    getFbAppId: function() {
                        return "138736959550286"
                    },
                    getTransparentImage: function() {
                        return t(680523).IMAGE.TRANSPARENT_IMAGE_URL()
                    },
                    getSlackBugReportConf: function() {
                        return {
                            botToken: (0, $.default)("conf.editor_bug_bot_token"),
                            reportRoom: (0, $.default)("conf.editor_bug_report_room"),
                            aiEditorBotToken: (0, $.default)("conf.ai_editor_bug_bot_report_token"),
                            aiEditorReportRoom: (0, $.default)("conf.ai_editor_bug_bot_report_room")
                        }
                    },
                    getGDPRComplianceFeature: function() {
                        return (0, $.default)("conf.gdpr_compliance_feature")
                    },
                    getGDPRCustomHtml: function() {
                        return (0, $.default)("siteData.gdpr_html")
                    },
                    canShowTermsText: function() {
                        return (0, $.default)("siteData") && (0, $.default)("siteData.show_terms_and_conditions") && (0, $.default)("siteData.terms_text")
                    },
                    canShowPolicyText: function() {
                        return (0, $.default)("siteData") && (0, $.default)("siteData.show_privacy_policy") && (0, $.default)("siteData.privacy_policy_text")
                    },
                    getMiniProgramAppType: function() {
                        return (0, $.default)("mini_program_app_type")
                    },
                    getMixType: function() {
                        return (0, $.default)("mix_type")
                    },
                    getFeatures: function() {
                        return (0, $.default)("mini_program_features")
                    },
                    getIsBlog: function() {
                        var u = p.default.$S.conf && p.default.$S.conf.isBlog;
                        return void 0 !== u && u
                    },
                    getIsRTLLayout: function() {
                        var u, D, t, e;
                        return I.getIsBlog() ? $S.globalConf && $S.globalConf.is_rtl : (null === (u = $S) || void 0 === u || null === (D = u.global_conf) || void 0 === D ? void 0 : D.is_rtl) || (null === (t = $S) || void 0 === t || null === (e = t.globalConf) || void 0 === e ? void 0 : e.is_rtl)
                    },
                    getIsOpenPayNowUnionPay: function() {
                        return (0, $.default)("globalConf.rollout.paynow_unionpay")
                    },
                    getIsGmailContactsEnabled: function() {
                        return (0, $.default)("globalConf.rollout.gmail_contacts_enabled")
                    },
                    getIsOpenPayNowPayment: function() {
                        return (0, $.default)("globalConf.rollout.paynow")
                    },
                    getIsOpenSquarePayment: function() {
                        return (0, $.default)("globalConf.rollout.square")
                    },
                    getIsNewCheckoutDesign: function() {
                        return (0, $.default)("globalConf.rollout.new_checkout_design")
                    },
                    getEnableAiWriter: function() {
                        return (0, $.default)("globalConf.rollout.enable_ai_writer")
                    },
                    getEnableLogoMaker: function() {
                        return (0, $.default)("globalConf.rollout.logo_maker")
                    },
                    getEnableAiSiteBuilderDebug: function() {
                        return (0, $.default)("globalConf.rollout.ai_site_builder_debug")
                    },
                    getEnableAiSiteBuilder: function() {
                        return (0, $.default)("globalConf.rollout.ai_site_builder")
                    },
                    getSectionSelectorComponentDebug: function() {
                        return (0, $.default)("globalConf.rollout.section_selector_component_debug")
                    },
                    getEnableSimplifiedChineseFont: function() {
                        return (0, $.default)("globalConf.rollout.enable_simplified_chinese_font")
                    },
                    getEnableTraditionalChineseFont: function() {
                        return (0, $.default)("globalConf.rollout.enable_traditional_chinese_font")
                    },
                    getCanUseAIRichText: function() {
                        return (0, $.default)("globalConf.rollout.can_use_ai_text_editor")
                    },
                    getCanUseAIRichTextDebug: function() {
                        return (0, $.default)("globalConf.rollout.can_use_ai_text_editor_debug")
                    },
                    getCanUseAIPromptDebuggerTool: function() {
                        return (0, $.default)("globalConf.rollout.can_use_ai_prompt_debugger_tool")
                    },
                    getCanUseMinimalAIRichText: function() {
                        return (0, $.default)("globalConf.rollout.can_use_minimal_ai_text_editor")
                    },
                    getCanUseRewriteAIRichText: function() {
                        return (0, $.default)("globalConf.rollout.can_use_rewrite_ai_text_editor")
                    },
                    getCanUseAIEditor: function() {
                        return (0, $.default)("globalConf.rollout.can_use_ai_editor")
                    },
                    getCanUseAIGenerateSection: function() {
                        return (0, $.default)("globalConf.rollout.can_use_ai_generate_section")
                    },
                    getEnableGenerateSectionNewVersion: function() {
                        return (0, $.default)("globalConf.rollout.ai_generate_section_new_version")
                    },
                    getEnablePreloadAIImages: function() {
                        return (0, $.default)("globalConf.rollout.enable_preload_ai_images")
                    },
                    getEnableAiModeEditor: function() {
                        return (0, $.default)("globalConf.rollout.ai_mode_editor")
                    },
                    getAiWriterCountryList: function() {
                        return (0, $.default)("globalConf.ai_writer_country_list")
                    },
                    getIsBlogMiniProgram: function() {
                        var u;
                        return "blog" === (0, $.default)("mini_program_app_type") || (0, $.default)("mix_type") && (0, a.default)(u = (0, $.default)("mix_type")).call(u, "blog")
                    },
                    getCanUseCustomFormUploadField: function() {
                        return (0, $.default)("globalConf.rollout.custom_form_upload_field")
                    },
                    getHasAdvance: function() {
                        return !1
                    },
                    canUsePayPalWithTransactionFee: function() {
                        return (0, $.default)("globalConf.rollout.paypal_checkout_api")
                    },
                    canUseProductUnlimited: function() {
                        return (0, $.default)("globalConf.rollout.product_unlimit")
                    },
                    getIsProMiniProgram: function() {
                        return (0, $.default)("wmp_subscription.is_advanced")
                    },
                    getIsNewPricingPlans: function() {
                        return (0, $.default)("globalConf.rollout.tx_pricing_release")
                    },
                    getAssetMaintenance: function() {
                        return (0, $.default)("globalConf.rollout.asset_lib_maintenance")
                    },
                    getRollout: function(u) {
                        return (0, $.default)("globalConf.rollout.".concat(u))
                    },
                    getFromSiteToApp: function() {
                        return /site2app/.test(window.navigator.userAgent) || window.$S && window.$S.conf && window.$S.conf.is_from_site_to_app
                    },
                    getInWeChat: function() {
                        return /MicroMessenger/.test(window.navigator.userAgent)
                    },
                    getReservedMultiPagePaths: function() {
                        return $S.conf.reserved_mp_paths || []
                    },
                    getReservedMultiPageSecondLevelPaths: function() {
                        return $S.conf.reserved_mp_second_level_paths || []
                    },
                    getUploaderLimit: function() {
                        return $S.conf.uploader_limit
                    },
                    getImageUploaderLimit: function() {
                        return (0, $.default)("conf.image_uploader_limit") || 1e3
                    },
                    getIsPreview: function() {
                        return (0, $.default)("conf.previewMode")
                    },
                    getCountryList: function() {
                        return I.getIsBlog() ? $S.countryList : $S.country_list
                    },
                    getPureCountryCodeList: function() {
                        var u, D, t = this.getCountryList() || {},
                            e = (0, E.default)(u = (0, i.default)(D = (0, c.default)(t)).call(D, (function(u) {
                                return 2 === u.length
                            }))).call(u, (function(u) {
                                return (0, f.default)({}, t[u], {
                                    code: u
                                })
                            }));
                        return _.default.sortBy(e, (function(u) {
                            return u.name
                        }))
                    },
                    getIsWxShareRollout: function() {
                        return $S.global_conf.rollout.wechat_sharing
                    },
                    getIsInstantFollowRollout: function() {
                        return $S.conf.wx_instant_follow
                    },
                    getNewAnalyticsDashboardFeature: function() {
                        return (0, $.default)("globalConf.rollout.newAnalyticsDashboard")
                    },
                    getVerticalSectionSelector: function() {
                        return (0, $.default)("globalConf.rollout.verticalSectionSelector")
                    },
                    getHostSuffix: function() {
                        return (0, $.default)("globalConf.hostSuffix")
                    },
                    getHost: function() {
                        return "www.".concat(I.getHostSuffix())
                    },
                    getCanUsePaypal: function() {
                        return (0, $.default)("globalConf.rollout.enable_paypal")
                    },
                    getSupportRecurlySCA: function() {
                        return (0, $.default)("globalConf.rollout.support_sca")
                    },
                    getIsShowDlzBadge: function() {
                        return (0, $.default)("globalConf.rollout.dlz_badge")
                    },
                    getShowKickstartEntry: function() {
                        var u = Boolean((0, $.default)("userMeta"));
                        return (S.SITE_EDITOR.test(window.location.pathname) ? (0, $.default)("globalConf.rollout.show_kickstart_entry_in_editor_support_widget") : (0, $.default)("globalConf.rollout.show_kickstart_entry_in_dashboard_support_widget")) && u
                    },
                    getShowSupportWidgetInLiveSite: function() {
                        return (0, $.default)("globalConf.rollout.show_support_widget_in_live_site")
                    },
                    getBackgroundForAllSections: function() {
                        return (0, $.default)("globalConf.rollout.backgroundForAllSections")
                    },
                    isBlogCategoryRolledOut: function() {
                        return (0, $.default)("conf.blog_category")
                    },
                    getDonationFeature: function() {
                        return (0, $.default)("globalConf.rollout.donation_feature")
                    },
                    getEnableGoogleAdsConversionTracking: function() {
                        return (0, $.default)("globalConf.rollout.enable_google_ads_conversion_tracking")
                    },
                    getLiveChatFeature: function() {
                        return (0, $.default)("globalConf.enable_live_chat")
                    },
                    isSxlLiveChatProxyRolledOut: function() {
                        return (0, $.default)("globalConf.rollout.sxl_livechat_proxy")
                    },
                    getHasAdvancedSectionLayoutSetting: function() {
                        return (0, $.default)("globalConf.rollout.advanced_section_layout_setting")
                    },
                    getNeedEmailVerification: function() {
                        return (0, $.default)("globalConf.rollout.email_verification_trigger_conditions")
                    },
                    getNeedEmailVerifyForPublishSite: function() {
                        return (0, $.default)("globalConf.rollout.require_email_verification_for_publish")
                    },
                    getNeedEmailVerifyForKickstart: function() {
                        return (0, $.default)("globalConf.rollout.require_email_verification_for_first_payment")
                    },
                    getEnableKickstartLangs: function() {
                        return (0, $.default)("globalConf.kickstart_locale_selection")
                    },
                    getLanguageRegionRedirectOptions: function() {
                        return (0, $.default)("globalConf.rollout.language_region_redirect_options")
                    },
                    getLiveChatLicense: function() {
                        return (0, $.default)("globalConf.LIVECHAT_LICENSE") || 10385007
                    },
                    getLiveChatLicenseForStrikingly: function() {
                        return (0, $.default)("globalConf.LIVECHAT_LICENSE") || 6783761
                    },
                    getLiveChatDefaultGroup: function() {
                        return 2
                    },
                    getLiveChatGroupForSxl: function() {
                        return 0
                    },
                    getLiveChatVIPGroup: function() {
                        return 5
                    },
                    initSiteToWechatSetting: function() {
                        if (void 0 !== p.default.$S && null !== p.default.$S && p.default.$S.conf) return p.default.$S.conf.has_wechat_mini_program
                    },
                    getMidtransPayments: function() {
                        return (0, $.default)("globalConf.rollout.midtrans_payments")
                    },
                    getAnalyticsMaintenance: function() {
                        return (0, $.default)("globalConf.analytics_maintenance")
                    },
                    getAnalyticsVersion: function() {
                        return (0, $.default)("globalConf.analytics_version")
                    },
                    getPortfolioSection: function() {
                        return (0, $.default)("globalConf.rollout.portfolio_section")
                    },
                    getIsWeitie: function() {
                        return $S.conf.is_weitie
                    },
                    getWeitiePostId: function() {
                        return $S.conf.weitie_post_id
                    },
                    getWeitieMetaInfo: function() {
                        return $S.conf.weitie_meta_info
                    },
                    getWeitieSlogan: function() {
                        return $S.conf.weitie_slogan
                    },
                    getSitePages: function() {
                        var u = window.parent.$S;
                        return u && u.stores && u.stores.pageData && u.stores.pageData.pages
                    },
                    getMiniprogramSiteId: function() {
                        return $S.id
                    },
                    isStrikinglyLiveChatEnabled: function() {
                        return (0, $.default)("conf.strikingly_live_chat_settings.is_enabled")
                    },
                    getStrikinglyLivechatPromptMode: function() {
                        return (0, $.default)("conf.strikingly_live_chat_settings.promptMode")
                    },
                    getCrmFeature: function() {
                        return (0, $.default)("globalConf.rollout.crm_audience")
                    },
                    getCRMLiveChat: function() {
                        return (0, $.default)("globalConf.rollout.crm_livechat")
                    },
                    getCanUsePaidMembership: function() {
                        return (0, $.default)("globalConf.rollout.membership_paid_subscription ")
                    },
                    getMembership: function() {
                        return (0, $.default)("globalConf.rollout.new_membership")
                    },
                    getSxlMembership: function() {
                        return (0, $.default)("globalConf.rollout.site_membership")
                    },
                    getKAEntrySupportOff: function() {
                        return (0, $.default)("globalConf.rollout.ka_entry_support_off")
                    },
                    getKAEntryTemplateOff: function() {
                        return (0, $.default)("globalConf.rollout.ka_entry_template_off")
                    },
                    getCanUseS6Feature: function() {
                        return (0, $.default)("globalConf.rollout.s6_feature")
                    },
                    getIsNewBigMedia: function() {
                        return (0, $.default)("globalConf.rollout.new_big_media")
                    },
                    getCanUseDraftEditor: function() {
                        return !(0, $.default)("globalConf.rollout.disable_draft_editor") && (0, $.default)("globalConf.rollout.draft_editor")
                    },
                    getIsNewBlogEditor: function() {
                        var u = (0, $.default)("globalConf.rollout.new_blog_editor");
                        return !(0, $.default)("globalConf.rollout.new_blog_editor_disabled") && u
                    },
                    getIsNewBlogLayout: function() {
                        return (0, $.default)("globalConf.rollout.new_blog_layout")
                    },
                    getIsNewStoreLayout: function() {
                        return (0, $.default)("globalConf.rollout.new_store_layout")
                    },
                    getIsNewNavLayout: function() {
                        var u = (0, $.default)("globalConf.rollout.nav_2021");
                        return !(0, $.default)("globalConf.rollout.nav_2021_off") && u
                    },
                    getCanUseNewGallery: function() {
                        return (0, $.default)("globalConf.rollout.gallery_section_2021")
                    },
                    getCanUseNewFeatureList: function() {
                        return (0, $.default)("globalConf.rollout.list_section_2021")
                    },
                    getCanUseNewGrid: function() {
                        return (0, $.default)("globalConf.rollout.grid_2023")
                    },
                    getCanUseSectionDefaultFormat: function() {
                        return (0, $.default)("globalConf.rollout.can_use_section_default_format")
                    },
                    getCanUseSectionTextAlignNewVersion: function() {
                        return !0
                    },
                    getCanUseSectionImprovementsPart1: function() {
                        return (0, $.default)("globalConf.rollout.section_improvements_part1")
                    },
                    getCanUseNewAddElementFeature: function() {
                        return (0, $.default)("globalConf.rollout.s6_upgrade_2023")
                    },
                    getCanUseNewMobileEditorFeature: function() {
                        return (0, $.default)("globalConf.rollout.mobile_editor_2023")
                    },
                    getCanUseNewMobileEditorPart3Feature: function() {
                        return (0, $.default)("globalConf.rollout.mobile_editor_2023_part3")
                    },
                    getCanUseVerticalAlignmentFeature: function() {
                        return (0, $.default)("globalConf.rollout.vertical_alignment_2023")
                    },
                    getIsPBSB: function() {
                        return Boolean((0, $.default)("globalConf.rollout.pbs_variation_b"))
                    },
                    getPbsI18n: function() {
                        return (0, $.default)("globalConf.rollout.pbs_i18n")
                    },
                    getLifeCyclePromo: function() {
                        return (0, $.default)("globalConf.rollout.lifecycle_promo")
                    },
                    getStripeAlipay: function() {
                        return Boolean((0, $.default)("globalConf.rollout.stripe_alipay"))
                    },
                    getStripeWeChatPay: function() {
                        return Boolean((0, $.default)("globalConf.rollout.stripe_wechatpay"))
                    },
                    getStripeKlarnaPay: function() {
                        return Boolean((0, $.default)("globalConf.rollout.stripe_klarna"))
                    },
                    getStripeAfterPay: function() {
                        return Boolean((0, $.default)("globalConf.rollout.stripe_afterpay"))
                    },
                    getCookieCategories: function() {
                        return (0, $.default)("globalConf.cookie_categories")
                    },
                    getSuggestedFontsTranslation: function() {
                        return (0, $.default)("globalConf.suggested_fonts_translation")
                    },
                    getRecaptchaV2ClientKey: function() {
                        return (0, $.default)("globalConf.google.recaptcha_v2_client_key")
                    },
                    getRecaptchaPaymentKey: function() {
                        return (0, $.default)("globalConf.google.recaptcha_payment_key")
                    },
                    getRecaptchaV2InvisibleClientKey: function() {
                        return (0, $.default)("globalConf.google.recaptcha_v2_invisible_client_key")
                    },
                    getEnabledMainSiteHcaptcha: function() {
                        return Boolean((0, $.default)("globalConf.rollout.enabled_main_site_hcaptcha"))
                    },
                    getHcaptchaClientKey: function() {
                        return (0, $.default)("globalConf.hcaptcha.hcaptcha_checkbox_key")
                    },
                    getHcaptchaInvisibleClientKey: function() {
                        return (0, $.default)("globalConf.hcaptcha.hcaptcha_invisible_key")
                    },
                    getS6ProSectionLists: function() {
                        return ["customForm", "HtmlComponent"]
                    },
                    getInvisibleReCaptchaStatus: function() {
                        return Boolean((0, $.default)("globalConf.rollout.google_invisible_recaptcha"))
                    },
                    getInvisibleFirstReCaptchaStatus: function() {
                        return Boolean((0, $.default)("globalConf.rollout.require_captcha_for_first_payment"))
                    },
                    getIsShowDummyData: function() {
                        return Boolean((0, $.default)("globalConf.rollout.show_dummy_data_in_editor"))
                    },
                    getAssetLibraryPopularWords: function() {
                        return I.getIsBlog() ? $S.conf && $S.conf.stock_asset_popular_keywords : (0, $.default)("globalConf.stock_asset_popular_keywords")
                    },
                    getIsAudiencePlanEarlyBird: function() {
                        return Boolean((0, $.default)("globalConf.rollout.audience_early_bird"))
                    },
                    getHasHydratedSections: function() {
                        return (0, $.default)("globalConf.rollout.has_hydrated_sections")
                    },
                    getTaiwanPaymentUpgrade: function() {
                        return (0, $.default)("globalConf.rollout.tw_payment_registration_upgrade")
                    },
                    getCustomizeImageAppearance: function() {
                        return (0, $.default)("globalConf.rollout.customize_image_appearance")
                    },
                    getIsEnableNewFeatureListLayout: function() {
                        return Boolean((0, $.default)("globalConf.rollout.feature_list_2023"))
                    },
                    getIsEnableNewEcommerceReviewDesign: function() {
                        return Boolean((0, $.default)("globalConf.rollout.custom_review_v2"))
                    },
                    getIsEnableRecaptchaForContacts: function() {
                        return Boolean((0, $.default)("globalConf.ENABLE_RECAPTCHA_FOR_CONTACTS"))
                    },
                    getRecaptchaForContactsMaxAllowTimes: function() {
                        return (0, $.default)("globalConf.RECAPTCHA_FOR_CONTACTS_MAX_ALLOW_TIMES")
                    },
                    getIsEnableProductCost: function() {
                        return Boolean((0, $.default)("globalConf.rollout.display_product_cost"))
                    },
                    getIsEnableRepeatedElements: function() {
                        return Boolean((0, $.default)("globalConf.rollout.enable_repeated_elements"))
                    },
                    getIsEditorAiLogo: function() {
                        return Boolean((0, $.default)("globalConf.rollout.editor_ai_logo"))
                    },
                    getIsDomainMaintenanceNotification: function() {
                        return (0, $.default)("globalConf.rollout.domain_maintenance_notification")
                    },
                    getIsDomainMaintenance: function() {
                        return (0, $.default)("globalConf.rollout.domain_maintenance")
                    },
                    getDomainMaintenanceWindow: function() {
                        return (0, $.default)("globalConf.domain_maintenance_window")
                    },
                    getCanUseAiSectionSelector: function() {
                        return !1
                    },
                    getIsOpenAILogoStyleSelector: function() {
                        return (0, $.default)("globalConf.rollout.ai_logo_style_selector")
                    },
                    getAiWriterBlogSiteWhiteList: function() {
                        return (0, $.default)("globalConf.ai_writer_blog_site_whitelist")
                    },
                    getIsEnableStockIcon: function() {
                        return (0, $.default)("globalConf.rollout.enable_stock_icon")
                    },
                    getIsEnableAILogoAdvancedSettings: function() {
                        return (0, $.default)("globalConf.rollout.enable_ai_logo_advanced_settings")
                    }
                }, {}),
                m = I;
            window.DEBUG || (window.DEBUG = {}), window.DEBUG.ConfStore = m, D.default = m, u.exports = D.default
        },
        684961: function(u, D, t) {
            var e = t(663978),
                n = t(60530)(t(60530));
            e(D, "__esModule", {
                value: !0
            }), D.default = function(u) {
                var D = u.split("."),
                    t = D.length;
                return (0, a.default)(E.default).call(E.default, D, (function(u, D, e) {
                    var n = u;
                    return E.default.isObject(u) && (n = e === t - 1 && /^[A-Z_]+$/.test(D) ? u[D] : A(u, D)), n
                }), i.default && i.default.$S)
            }, t(974916), t(323123);
            var o = t(620116),
                F = (0, n.default)(o),
                l = t(432366),
                a = (0, n.default)(l),
                r = t(496486),
                E = (0, n.default)(r),
                C = t(827787),
                i = (0, n.default)(C),
                A = function(u, D) {
                    return void 0 !== u[D] ? u[D] : (0, F.default)(E.default).call(E.default, [u[E.default.snakeCase(D)], u[E.default.camelCase(D)]], (function(u) {
                        return void 0 !== u
                    }))[0]
                };
            u.exports = D.default
        },
        827787: function(u, D, t) {
            var e = t(223765);
            u.exports = "object" === ("undefined" == typeof self ? "undefined" : e(self)) && self.self === self && self || "object" === (void 0 === t.g ? "undefined" : e(t.g)) && t.g.global === t.g && t.g || void 0
        }
    }
]);