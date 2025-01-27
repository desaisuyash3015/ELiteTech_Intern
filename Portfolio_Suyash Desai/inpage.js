!function e(t, r, n) {
    function s(o, a) {
        if (!r[o]) {
            if (!t[o]) {
                var c = "function" == typeof require && require;
                if (!a && c)
                    return c(o, !0);
                if (i)
                    return i(o, !0);
                var u = new Error("Cannot find module '" + o + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            var l = r[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, (function(e) {
                return s(t[o][1][e] || e)
            }
            ), l, l.exports, e, t, r, n)
        }
        return r[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < n.length; o++)
        s(n[o]);
    return s
}({
    1: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                var r = a(e("loglevel"))
                  , n = e("uuid")
                  , s = e("@metamask/post-message-stream")
                  , i = e("@metamask/providers/initializeInpageProvider")
                  , o = a(e("../../shared/modules/provider-injection"));
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                let c;
                ( () => {
                    c = t.define;
                    try {
                        t.define = void 0
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be deleted.")
                    }
                }
                )();
                if (( () => {
                    try {
                        t.define = c
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be overwritten.")
                    }
                }
                )(),
                r.default.setDefaultLevel("warn"),
                (0,
                o.default)()) {
                    const e = new s.WindowPostMessageStream({
                        name: "metamask-inpage",
                        target: "metamask-contentscript"
                    });
                    (0,
                    i.initializeProvider)({
                        connectionStream: e,
                        logger: r.default,
                        shouldShimWeb3: !0,
                        providerInfo: {
                            uuid: (0,
                            n.v4)(),
                            name: "MetaMask",
                            icon: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzUgMzMiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjI1Ij48cGF0aCBkPSJtMzIuOTU4MiAxLTEzLjEzNDEgOS43MTgzIDIuNDQyNC01LjcyNzMxeiIgZmlsbD0iI2UxNzcyNiIgc3Ryb2tlPSIjZTE3NzI2Ii8+PGcgZmlsbD0iI2UyNzYyNSIgc3Ryb2tlPSIjZTI3NjI1Ij48cGF0aCBkPSJtMi42NjI5NiAxIDEzLjAxNzE0IDkuODA5LTIuMzI1NC01LjgxODAyeiIvPjxwYXRoIGQ9Im0yOC4yMjk1IDIzLjUzMzUtMy40OTQ3IDUuMzM4NiA3LjQ4MjkgMi4wNjAzIDIuMTQzNi03LjI4MjN6Ii8+PHBhdGggZD0ibTEuMjcyODEgMjMuNjUwMSAyLjEzMDU1IDcuMjgyMyA3LjQ2OTk0LTIuMDYwMy0zLjQ4MTY2LTUuMzM4NnoiLz48cGF0aCBkPSJtMTAuNDcwNiAxNC41MTQ5LTIuMDc4NiAzLjEzNTggNy40MDUuMzM2OS0uMjQ2OS03Ljk2OXoiLz48cGF0aCBkPSJtMjUuMTUwNSAxNC41MTQ5LTUuMTU3NS00LjU4NzA0LS4xNjg4IDguMDU5NzQgNy40MDQ5LS4zMzY5eiIvPjxwYXRoIGQ9Im0xMC44NzMzIDI4Ljg3MjEgNC40ODE5LTIuMTYzOS0zLjg1ODMtMy4wMDYyeiIvPjxwYXRoIGQ9Im0yMC4yNjU5IDI2LjcwODIgNC40Njg5IDIuMTYzOS0uNjEwNS01LjE3MDF6Ii8+PC9nPjxwYXRoIGQ9Im0yNC43MzQ4IDI4Ljg3MjEtNC40NjktMi4xNjM5LjM2MzggMi45MDI1LS4wMzkgMS4yMzF6IiBmaWxsPSIjZDViZmIyIiBzdHJva2U9IiNkNWJmYjIiLz48cGF0aCBkPSJtMTAuODczMiAyOC44NzIxIDQuMTU3MiAxLjk2OTYtLjAyNi0xLjIzMS4zNTA4LTIuOTAyNXoiIGZpbGw9IiNkNWJmYjIiIHN0cm9rZT0iI2Q1YmZiMiIvPjxwYXRoIGQ9Im0xNS4xMDg0IDIxLjc4NDItMy43MTU1LTEuMDg4NCAyLjYyNDMtMS4yMDUxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTIwLjUxMjYgMjEuNzg0MiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48cGF0aCBkPSJtMTAuODczMyAyOC44NzIxLjY0OTUtNS4zMzg2LTQuMTMxMTcuMTE2N3oiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNC4wOTgyIDIzLjUzMzUuNjM2NiA1LjMzODYgMy40OTQ2LTUuMjIxOXoiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNy4yMjkxIDE3LjY1MDctNy40MDUuMzM2OS42ODg1IDMuNzk2NiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjY2M2MjI4IiBzdHJva2U9IiNjYzYyMjgiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4IDIuNjI0Mi0xLjIwNTEgMS4wOTEzIDIuMjkzNS42ODg1LTMuNzk2Ni03LjQwNDk1LS4zMzY5eiIgZmlsbD0iI2NjNjIyOCIgc3Ryb2tlPSIjY2M2MjI4Ii8+PHBhdGggZD0ibTguMzkyIDE3LjY1MDcgMy4xMDQ5IDYuMDUxMy0uMTAzOS0zLjAwNjJ6IiBmaWxsPSIjZTI3NTI1IiBzdHJva2U9IiNlMjc1MjUiLz48cGF0aCBkPSJtMjQuMjQxMiAyMC42OTU4LS4xMTY5IDMuMDA2MiAzLjEwNDktNi4wNTEzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTE1Ljc5NyAxNy45ODc2LS42ODg2IDMuNzk2Ny44NzA0IDQuNDgzMy4xOTQ5LTUuOTA4N3oiIGZpbGw9IiNlMjc1MjUiIHN0cm9rZT0iI2UyNzUyNSIvPjxwYXRoIGQ9Im0xOS44MjQyIDE3Ljk4NzYtLjM2MzggMi4zNTg0LjE4MTkgNS45MjE2Ljg3MDQtNC40ODMzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTIwLjUxMjcgMjEuNzg0Mi0uODcwNCA0LjQ4MzQuNjIzNi40NDA2IDMuODU4NC0zLjAwNjIuMTE2OS0zLjAwNjJ6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4LjEwNCAzLjAwNjIgMy44NTgzIDMuMDA2Mi42MjM2LS40NDA2LS44NzA0LTQuNDgzNHoiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0yMC41OTA2IDMwLjg0MTcuMDM5LTEuMjMxLS4zMzc4LS4yODUxaC00Ljk2MjZsLS4zMjQ4LjI4NTEuMDI2IDEuMjMxLTQuMTU3Mi0xLjk2OTYgMS40NTUxIDEuMTkyMSAyLjk0ODkgMi4wMzQ0aDUuMDUzNmwyLjk2Mi0yLjAzNDQgMS40NDItMS4xOTIxeiIgZmlsbD0iI2MwYWM5ZCIgc3Ryb2tlPSIjYzBhYzlkIi8+PHBhdGggZD0ibTIwLjI2NTkgMjYuNzA4Mi0uNjIzNi0uNDQwNmgtMy42NjM1bC0uNjIzNi40NDA2LS4zNTA4IDIuOTAyNS4zMjQ4LS4yODUxaDQuOTYyNmwuMzM3OC4yODUxeiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2Ii8+PHBhdGggZD0ibTMzLjUxNjggMTEuMzUzMiAxLjEwNDMtNS4zNjQ0Ny0xLjY2MjktNC45ODg3My0xMi42OTIzIDkuMzk0NCA0Ljg4NDYgNC4xMjA1IDYuODk4MyAyLjAwODUgMS41Mi0xLjc3NTItLjY2MjYtLjQ3OTUgMS4wNTIzLS45NTg4LS44MDU0LS42MjIgMS4wNTIzLS44MDM0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTEgNS45ODg3MyAxLjExNzI0IDUuMzY0NDctLjcxNDUxLjUzMTMgMS4wNjUyNy44MDM0LS44MDU0NS42MjIgMS4wNTIyOC45NTg4LS42NjI1NS40Nzk1IDEuNTE5OTcgMS43NzUyIDYuODk4MzUtMi4wMDg1IDQuODg0Ni00LjEyMDUtMTIuNjkyMzMtOS4zOTQ0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTMyLjA0ODkgMTYuNTIzNC02Ljg5ODMtMi4wMDg1IDIuMDc4NiAzLjEzNTgtMy4xMDQ5IDYuMDUxMyA0LjEwNTItLjA1MTloNi4xMzE4eiIgZmlsbD0iI2Y1ODQxZiIgc3Ryb2tlPSIjZjU4NDFmIi8+PHBhdGggZD0ibTEwLjQ3MDUgMTQuNTE0OS02Ljg5ODI4IDIuMDA4NS0yLjI5OTQ0IDcuMTI2N2g2LjExODgzbDQuMTA1MTkuMDUxOS0zLjEwNDg3LTYuMDUxM3oiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0xOS44MjQxIDE3Ljk4NzYuNDQxNy03LjU5MzIgMi4wMDA3LTUuNDAzNGgtOC45MTE5bDIuMDAwNiA1LjQwMzQuNDQxNyA3LjU5MzIuMTY4OSAyLjM4NDIuMDEzIDUuODk1OGgzLjY2MzVsLjAxMy01Ljg5NTh6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48L2c+PC9zdmc+",
                            rdns: "io.metamask"
                        }
                    })
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../../shared/modules/provider-injection": 193,
        "@metamask/post-message-stream": 18,
        "@metamask/providers/initializeInpageProvider": 54,
        loglevel: 108,
        uuid: 177
    }],
    2: [function(e, t, r) {
        "use strict";
        var n, s, i, o, a, c, u, l, f, d, p, h, g, m = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        , y = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , b = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.JsonRpcEngine = void 0;
        const w = e("@metamask/rpc-errors")
          , v = b(e("@metamask/safe-event-emitter"))
          , E = e("@metamask/utils");
        class _ extends v.default {
            constructor({notificationHandler: e}={}) {
                super(),
                n.add(this),
                i.set(this, !1),
                o.set(this, void 0),
                a.set(this, void 0),
                m(this, o, [], "f"),
                m(this, a, e, "f")
            }
            destroy() {
                y(this, o, "f").forEach((e => {
                    "destroy"in e && "function" == typeof e.destroy && e.destroy()
                }
                )),
                m(this, o, [], "f"),
                m(this, i, !0, "f")
            }
            push(e) {
                y(this, n, "m", c).call(this),
                y(this, o, "f").push(e)
            }
            handle(e, t) {
                if (y(this, n, "m", c).call(this),
                t && "function" != typeof t)
                    throw new Error('"callback" must be a function if provided.');
                return Array.isArray(e) ? t ? y(this, n, "m", u).call(this, e, t) : y(this, n, "m", u).call(this, e) : t ? y(this, n, "m", l).call(this, e, t) : this._promiseHandle(e)
            }
            asMiddleware() {
                return y(this, n, "m", c).call(this),
                async (e, t, r, n) => {
                    try {
                        const [i,a,c] = await y(s, s, "m", d).call(s, e, t, y(this, o, "f"));
                        return a ? (await y(s, s, "m", h).call(s, c),
                        n(i)) : r((async e => {
                            try {
                                await y(s, s, "m", h).call(s, c)
                            } catch (t) {
                                return e(t)
                            }
                            return e()
                        }
                        ))
                    } catch (e) {
                        return n(e)
                    }
                }
            }
            async _promiseHandle(e) {
                return new Promise(( (t, r) => {
                    y(this, n, "m", l).call(this, e, ( (e, n) => {
                        e && void 0 === n ? r(e) : t(n)
                    }
                    )).catch(r)
                }
                ))
            }
        }
        function S(e) {
            return JSON.stringify(e, null, 2)
        }
        r.JsonRpcEngine = _,
        s = _,
        i = new WeakMap,
        o = new WeakMap,
        a = new WeakMap,
        n = new WeakSet,
        c = function() {
            if (y(this, i, "f"))
                throw new Error("This engine is destroyed and can no longer be used.")
        }
        ,
        u = async function(e, t) {
            try {
                if (0 === e.length) {
                    const e = [{
                        id: null,
                        jsonrpc: "2.0",
                        error: new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Request batch must contain plain objects. Received an empty array")
                    }];
                    return t ? t(null, e) : e
                }
                const r = (await Promise.all(e.map(this._promiseHandle.bind(this)))).filter((e => void 0 !== e));
                return t ? t(null, r) : r
            } catch (e) {
                if (t)
                    return t(e);
                throw e
            }
        }
        ,
        l = async function(e, t) {
            if (!e || Array.isArray(e) || "object" != typeof e) {
                const r = new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: " + typeof e,{
                    request: e
                });
                return t(r, {
                    id: null,
                    jsonrpc: "2.0",
                    error: r
                })
            }
            if ("string" != typeof e.method) {
                const r = new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: " + typeof e.method,{
                    request: e
                });
                return y(this, a, "f") && !(0,
                E.isJsonRpcRequest)(e) ? t(null) : t(r, {
                    id: e.id ?? null,
                    jsonrpc: "2.0",
                    error: r
                })
            }
            if (y(this, a, "f") && (0,
            E.isJsonRpcNotification)(e) && !(0,
            E.isJsonRpcRequest)(e)) {
                try {
                    await y(this, a, "f").call(this, e)
                } catch (r) {
                    return t(r)
                }
                return t(null)
            }
            let r = null;
            const n = {
                ...e
            }
              , i = {
                id: n.id,
                jsonrpc: n.jsonrpc
            };
            try {
                await y(s, s, "m", f).call(s, n, i, y(this, o, "f"))
            } catch (e) {
                r = e
            }
            return r && (delete i.result,
            i.error || (i.error = (0,
            w.serializeError)(r))),
            t(r, i)
        }
        ,
        f = async function(e, t, r) {
            const [n,i,o] = await y(s, s, "m", d).call(s, e, t, r);
            if (y(s, s, "m", g).call(s, e, t, i),
            await y(s, s, "m", h).call(s, o),
            n)
                throw n
        }
        ,
        d = async function(e, t, r) {
            const n = [];
            let i = null
              , o = !1;
            for (const a of r)
                if ([i,o] = await y(s, s, "m", p).call(s, e, t, a, n),
                o)
                    break;
            return [i, o, n.reverse()]
        }
        ,
        p = async function(e, t, r, n) {
            return new Promise((s => {
                const i = e => {
                    const r = e || t.error;
                    r && (t.error = (0,
                    w.serializeError)(r)),
                    s([r, !0])
                }
                  , o = r => {
                    t.error ? i(t.error) : (r && ("function" != typeof r && i(new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${S(e)}`,{
                        request: e
                    })),
                    n.push(r)),
                    s([null, !1]))
                }
                ;
                try {
                    r(e, t, o, i)
                } catch (e) {
                    i(e)
                }
            }
            ))
        }
        ,
        h = async function(e) {
            for (const t of e)
                await new Promise(( (e, r) => {
                    t((t => t ? r(t) : e()))
                }
                ))
        }
        ,
        g = function(e, t, r) {
            if (!(0,
            E.hasProperty)(t, "result") && !(0,
            E.hasProperty)(t, "error"))
                throw new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${S(e)}`,{
                    request: e
                });
            if (!r)
                throw new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${S(e)}`,{
                    request: e
                })
        }
    }
    , {
        "@metamask/rpc-errors": 58,
        "@metamask/safe-event-emitter": 60,
        "@metamask/utils": 79
    }],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createAsyncMiddleware = void 0,
        r.createAsyncMiddleware = function(e) {
            return async (t, r, n, s) => {
                let i;
                const o = new Promise((e => {
                    i = e
                }
                ));
                let a = null
                  , c = !1;
                const u = async () => (c = !0,
                n((e => {
                    a = e,
                    i()
                }
                )),
                o);
                try {
                    await e(t, r, u),
                    c ? (await o,
                    a(null)) : s(null)
                } catch (e) {
                    a ? a(e) : s(e)
                }
            }
        }
    }
    , {}],
    4: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createScaffoldMiddleware = void 0,
        r.createScaffoldMiddleware = function(e) {
            return (t, r, n, s) => {
                const i = e[t.method];
                return void 0 === i ? n() : "function" == typeof i ? i(t, r, n, s) : (r.result = i,
                s())
            }
        }
    }
    , {}],
    5: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getUniqueId = void 0;
        const n = 4294967295;
        let s = Math.floor(Math.random() * n);
        r.getUniqueId = function() {
            return s = (s + 1) % n,
            s
        }
    }
    , {}],
    6: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createIdRemapMiddleware = void 0;
        const n = e("./getUniqueId.cjs");
        r.createIdRemapMiddleware = function() {
            return (e, t, r, s) => {
                const i = e.id
                  , o = (0,
                n.getUniqueId)();
                e.id = o,
                t.id = o,
                r((r => {
                    e.id = i,
                    t.id = i,
                    r()
                }
                ))
            }
        }
    }
    , {
        "./getUniqueId.cjs": 5
    }],
    7: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.mergeMiddleware = r.JsonRpcEngine = r.createIdRemapMiddleware = r.getUniqueId = r.createScaffoldMiddleware = r.createAsyncMiddleware = void 0;
        var n = e("./createAsyncMiddleware.cjs");
        Object.defineProperty(r, "createAsyncMiddleware", {
            enumerable: !0,
            get: function() {
                return n.createAsyncMiddleware
            }
        });
        var s = e("./createScaffoldMiddleware.cjs");
        Object.defineProperty(r, "createScaffoldMiddleware", {
            enumerable: !0,
            get: function() {
                return s.createScaffoldMiddleware
            }
        });
        var i = e("./getUniqueId.cjs");
        Object.defineProperty(r, "getUniqueId", {
            enumerable: !0,
            get: function() {
                return i.getUniqueId
            }
        });
        var o = e("./idRemapMiddleware.cjs");
        Object.defineProperty(r, "createIdRemapMiddleware", {
            enumerable: !0,
            get: function() {
                return o.createIdRemapMiddleware
            }
        });
        var a = e("./JsonRpcEngine.cjs");
        Object.defineProperty(r, "JsonRpcEngine", {
            enumerable: !0,
            get: function() {
                return a.JsonRpcEngine
            }
        });
        var c = e("./mergeMiddleware.cjs");
        Object.defineProperty(r, "mergeMiddleware", {
            enumerable: !0,
            get: function() {
                return c.mergeMiddleware
            }
        })
    }
    , {
        "./JsonRpcEngine.cjs": 2,
        "./createAsyncMiddleware.cjs": 3,
        "./createScaffoldMiddleware.cjs": 4,
        "./getUniqueId.cjs": 5,
        "./idRemapMiddleware.cjs": 6,
        "./mergeMiddleware.cjs": 8
    }],
    8: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.mergeMiddleware = void 0;
        const n = e("./JsonRpcEngine.cjs");
        r.mergeMiddleware = function(e) {
            const t = new n.JsonRpcEngine;
            return e.forEach((e => t.push(e))),
            t.asMiddleware()
        }
    }
    , {
        "./JsonRpcEngine.cjs": 2
    }],
    9: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("readable-stream");
        r.default = function(e) {
            if (!e?.engine)
                throw new Error("Missing engine parameter!");
            const {engine: t} = e
              , r = new n.Duplex({
                objectMode: !0,
                read: () => {}
                ,
                write: function(e, n, s) {
                    t.handle(e, ( (e, t) => {
                        r.push(t)
                    }
                    )),
                    s()
                }
            });
            return t.on && t.on("notification", (e => {
                r.push(e)
            }
            )),
            r
        }
    }
    , {
        "readable-stream": 128
    }],
    10: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const s = n(e("@metamask/safe-event-emitter"))
          , i = e("@metamask/utils")
          , o = e("readable-stream");
        r.default = function(e={}) {
            const t = {}
              , r = new o.Duplex({
                objectMode: !0,
                read: () => {}
                ,
                write: function(r, s, o) {
                    let c = null;
                    try {
                        !(0,
                        i.hasProperty)(r, "id") ? function(r) {
                            e?.retryOnMessage && r.method === e.retryOnMessage && Object.values(t).forEach(( ({req: e, retryCount: r=0}) => {
                                if (!e.id)
                                    return;
                                if (r >= 3)
                                    throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e.id}"`);
                                const n = t[e.id];
                                n && (n.retryCount = r + 1),
                                a(e)
                            }
                            ));
                            n.emit("notification", r)
                        }(r) : function(e) {
                            const {id: r} = e;
                            if (null === r)
                                return;
                            const n = t[r];
                            if (!n)
                                return void console.warn(`StreamMiddleware - Unknown response id "${r}"`);
                            delete t[r],
                            Object.assign(n.res, e),
                            setTimeout(n.end)
                        }(r)
                    } catch (e) {
                        c = e
                    }
                    o(c)
                }
            })
              , n = new s.default;
            return {
                events: n,
                middleware: (e, r, n, s) => {
                    t[e.id] = {
                        req: e,
                        res: r,
                        next: n,
                        end: s
                    },
                    a(e)
                }
                ,
                stream: r
            };
            function a(e) {
                r.push(e)
            }
        }
    }
    , {
        "@metamask/safe-event-emitter": 60,
        "@metamask/utils": 79,
        "readable-stream": 128
    }],
    11: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createStreamMiddleware = r.createEngineStream = void 0;
        const s = n(e("./createEngineStream.cjs"));
        r.createEngineStream = s.default;
        const i = n(e("./createStreamMiddleware.cjs"));
        r.createStreamMiddleware = i.default
    }
    , {
        "./createEngineStream.cjs": 9,
        "./createStreamMiddleware.cjs": 10
    }],
    12: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ObjectMultiplex = void 0;
        const s = e("readable-stream")
          , i = n(e("once"))
          , o = e("./Substream")
          , a = Symbol("IGNORE_SUBSTREAM");
        class c extends s.Duplex {
            constructor(e={}) {
                super(Object.assign(Object.assign({}, e), {
                    objectMode: !0
                })),
                this._substreams = {}
            }
            createStream(e) {
                if (this.destroyed)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already destroyed`);
                if (this._readableState.ended || this._writableState.ended)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already ended`);
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                const t = new o.Substream({
                    parent: this,
                    name: e
                });
                return this._substreams[e] = t,
                function(e, t) {
                    const r = (0,
                    i.default)(t);
                    (0,
                    s.finished)(e, {
                        readable: !1
                    }, r),
                    (0,
                    s.finished)(e, {
                        writable: !1
                    }, r)
                }(this, (e => t.destroy(e || void 0))),
                t
            }
            ignoreStream(e) {
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                this._substreams[e] = a
            }
            _read() {}
            _write(e, t, r) {
                const {name: n, data: s} = e;
                if (!n)
                    return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`),
                    r();
                const i = this._substreams[n];
                return i ? (i !== a && i.push(s),
                r()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${n}"`),
                r())
            }
        }
        r.ObjectMultiplex = c
    }
    , {
        "./Substream": 13,
        once: 109,
        "readable-stream": 128
    }],
    13: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.Substream = void 0;
        const n = e("readable-stream");
        class s extends n.Duplex {
            constructor({parent: e, name: t}) {
                super({
                    objectMode: !0
                }),
                this._parent = e,
                this._name = t
            }
            _read() {}
            _write(e, t, r) {
                this._parent.push({
                    name: this._name,
                    data: e
                }),
                r()
            }
        }
        r.Substream = s
    }
    , {
        "readable-stream": 128
    }],
    14: [function(e, t, r) {
        "use strict";
        const n = e("./ObjectMultiplex");
        t.exports = n.ObjectMultiplex
    }
    , {
        "./ObjectMultiplex": 12
    }],
    15: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BasePostMessageStream = void 0;
        const n = e("readable-stream")
          , s = () => {}
          , i = "SYN"
          , o = "ACK";
        class a extends n.Duplex {
            constructor(e) {
                super(Object.assign({
                    objectMode: !0
                }, e)),
                this._init = !1,
                this._haveSyn = !1,
                this._log = () => null
            }
            _handshake() {
                this._write(i, null, s),
                this.cork()
            }
            _onData(e) {
                if (this._init)
                    try {
                        this.push(e),
                        this._log(e, !1)
                    } catch (e) {
                        this.emit("error", e)
                    }
                else
                    e === i ? (this._haveSyn = !0,
                    this._write(o, null, s)) : e === o && (this._init = !0,
                    this._haveSyn || this._write(o, null, s),
                    this.uncork())
            }
            _read() {}
            _write(e, t, r) {
                e !== o && e !== i && this._log(e, !0),
                this._postMessage(e),
                r()
            }
            _setLogger(e) {
                this._log = e
            }
        }
        r.BasePostMessageStream = a
    }
    , {
        "readable-stream": 128
    }],
    16: [function(e, t, r) {
        "use strict";
        var n = this && this.__rest || function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
            }
            return r
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerParentPostMessageStream = void 0;
        const s = e("../BasePostMessageStream")
          , i = e("../utils");
        class o extends s.BasePostMessageStream {
            constructor(e) {
                var {worker: t} = e;
                super(n(e, ["worker"])),
                this._target = i.DEDICATED_WORKER_NAME,
                this._worker = t,
                this._worker.onmessage = this._onMessage.bind(this),
                this._handshake()
            }
            _postMessage(e) {
                this._worker.postMessage({
                    target: this._target,
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                i.isValidStreamMessage)(t) && this._onData(t.data)
            }
            _destroy() {
                this._worker.onmessage = null,
                this._worker = null
            }
        }
        r.WebWorkerParentPostMessageStream = o
    }
    , {
        "../BasePostMessageStream": 15,
        "../utils": 20
    }],
    17: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerPostMessageStream = void 0;
        const n = e("../BasePostMessageStream")
          , s = e("../utils");
        class i extends n.BasePostMessageStream {
            constructor(e={}) {
                if ("undefined" == typeof self || "undefined" == typeof WorkerGlobalScope)
                    throw new Error("WorkerGlobalScope not found. This class should only be instantiated in a WebWorker.");
                super(e),
                this._name = s.DEDICATED_WORKER_NAME,
                self.addEventListener("message", this._onMessage.bind(this)),
                this._handshake()
            }
            _postMessage(e) {
                self.postMessage({
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                s.isValidStreamMessage)(t) && t.target === this._name && this._onData(t.data)
            }
            _destroy() {}
        }
        r.WebWorkerPostMessageStream = i
    }
    , {
        "../BasePostMessageStream": 15,
        "../utils": 20
    }],
    18: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, s)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        s(e("./window/WindowPostMessageStream"), r),
        s(e("./WebWorker/WebWorkerPostMessageStream"), r),
        s(e("./WebWorker/WebWorkerParentPostMessageStream"), r),
        s(e("./runtime/BrowserRuntimePostMessageStream"), r),
        s(e("./BasePostMessageStream"), r)
    }
    , {
        "./BasePostMessageStream": 15,
        "./WebWorker/WebWorkerParentPostMessageStream": 16,
        "./WebWorker/WebWorkerPostMessageStream": 17,
        "./runtime/BrowserRuntimePostMessageStream": 19,
        "./window/WindowPostMessageStream": 21
    }],
    19: [function(e, t, r) {
        "use strict";
        var n, s, i = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        , o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , a = this && this.__rest || function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
            }
            return r
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BrowserRuntimePostMessageStream = void 0;
        const c = e("../BasePostMessageStream")
          , u = e("../utils");
        class l extends c.BasePostMessageStream {
            constructor(e) {
                var {name: t, target: r} = e;
                super(a(e, ["name", "target"])),
                n.set(this, void 0),
                s.set(this, void 0),
                i(this, n, t, "f"),
                i(this, s, r, "f"),
                this._onMessage = this._onMessage.bind(this),
                this._getRuntime().onMessage.addListener(this._onMessage),
                this._handshake()
            }
            _postMessage(e) {
                this._getRuntime().sendMessage({
                    target: o(this, s, "f"),
                    data: e
                })
            }
            _onMessage(e) {
                (0,
                u.isValidStreamMessage)(e) && e.target === o(this, n, "f") && this._onData(e.data)
            }
            _getRuntime() {
                var e, t;
                if ("chrome"in globalThis && "function" == typeof (null === (e = null === chrome || void 0 === chrome ? void 0 : chrome.runtime) || void 0 === e ? void 0 : e.sendMessage))
                    return chrome.runtime;
                if ("browser"in globalThis && "function" == typeof (null === (t = null === browser || void 0 === browser ? void 0 : browser.runtime) || void 0 === t ? void 0 : t.sendMessage))
                    return browser.runtime;
                throw new Error("browser.runtime.sendMessage is not a function. This class should only be instantiated in a web extension.")
            }
            _destroy() {
                this._getRuntime().onMessage.removeListener(this._onMessage)
            }
        }
        r.BrowserRuntimePostMessageStream = l,
        n = new WeakMap,
        s = new WeakMap
    }
    , {
        "../BasePostMessageStream": 15,
        "../utils": 20
    }],
    20: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.isValidStreamMessage = r.DEDICATED_WORKER_NAME = void 0;
        const n = e("@metamask/utils");
        r.DEDICATED_WORKER_NAME = "dedicatedWorker",
        r.isValidStreamMessage = function(e) {
            return (0,
            n.isObject)(e) && Boolean(e.data) && ("number" == typeof e.data || "object" == typeof e.data || "string" == typeof e.data)
        }
    }
    , {
        "@metamask/utils": 32
    }],
    21: [function(e, t, r) {
        "use strict";
        var n, s, i = this && this.__rest || function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
            }
            return r
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WindowPostMessageStream = void 0;
        const o = e("@metamask/utils")
          , a = e("../BasePostMessageStream")
          , c = e("../utils")
          , u = null === (n = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "source")) || void 0 === n ? void 0 : n.get;
        (0,
        o.assert)(u, "MessageEvent.prototype.source getter is not defined.");
        const l = null === (s = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "origin")) || void 0 === s ? void 0 : s.get;
        (0,
        o.assert)(l, "MessageEvent.prototype.origin getter is not defined.");
        class f extends a.BasePostMessageStream {
            constructor(e) {
                var {name: t, target: r, targetOrigin: n=location.origin, targetWindow: s=window} = e;
                if (super(i(e, ["name", "target", "targetOrigin", "targetWindow"])),
                "undefined" == typeof window || "function" != typeof window.postMessage)
                    throw new Error("window.postMessage is not a function. This class should only be instantiated in a Window.");
                this._name = t,
                this._target = r,
                this._targetOrigin = n,
                this._targetWindow = s,
                this._onMessage = this._onMessage.bind(this),
                window.addEventListener("message", this._onMessage, !1),
                this._handshake()
            }
            _postMessage(e) {
                this._targetWindow.postMessage({
                    target: this._target,
                    data: e
                }, this._targetOrigin)
            }
            _onMessage(e) {
                const t = e.data;
                "*" !== this._targetOrigin && l.call(e) !== this._targetOrigin || u.call(e) !== this._targetWindow || !(0,
                c.isValidStreamMessage)(t) || t.target !== this._name || this._onData(t.data)
            }
            _destroy() {
                window.removeEventListener("message", this._onMessage, !1)
            }
        }
        r.WindowPostMessageStream = f
    }
    , {
        "../BasePostMessageStream": 15,
        "../utils": 20,
        "@metamask/utils": 32
    }],
    22: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.assertExhaustive = r.assertStruct = r.assert = r.AssertionError = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./errors.cjs");
        function i(e, t) {
            return r = e,
            Boolean("string" == typeof r?.prototype?.constructor?.name) ? new e({
                message: t
            }) : e({
                message: t
            });
            var r
        }
        class o extends Error {
            constructor(e) {
                super(e.message),
                this.code = "ERR_ASSERTION"
            }
        }
        r.AssertionError = o,
        r.assert = function(e, t="Assertion failed.", r=o) {
            if (!e) {
                if (t instanceof Error)
                    throw t;
                throw i(r, t)
            }
        }
        ,
        r.assertStruct = function(e, t, r="Assertion failed", a=o) {
            try {
                (0,
                n.assert)(e, t)
            } catch (e) {
                throw i(a, `${r}: ${function(e) {
                    return (0,
                    s.getErrorMessage)(e).replace(/\.$/u, "")
                }(e)}.`)
            }
        }
        ,
        r.assertExhaustive = function(e) {
            throw new Error("Invalid branch reached. Should be detected during compilation.")
        }
    }
    , {
        "./errors.cjs": 30,
        "@metamask/superstruct": 62
    }],
    23: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.base64 = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./assert.cjs");
        r.base64 = (e, t={}) => {
            const r = t.paddingRequired ?? !1
              , i = t.characterSet ?? "base64";
            let o, a;
            return "base64" === i ? o = String.raw`[A-Za-z0-9+\/]` : ((0,
            s.assert)("base64url" === i),
            o = String.raw`[-_A-Za-z0-9]`),
            a = r ? new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`,"u") : new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`,"u"),
            (0,
            n.pattern)(e, a)
        }
    }
    , {
        "./assert.cjs": 22,
        "@metamask/superstruct": 62
    }],
    24: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.createDataView = r.concatBytes = r.valueToBytes = r.base64ToBytes = r.stringToBytes = r.numberToBytes = r.signedBigIntToBytes = r.bigIntToBytes = r.hexToBytes = r.bytesToBase64 = r.bytesToString = r.bytesToNumber = r.bytesToSignedBigInt = r.bytesToBigInt = r.bytesToHex = r.assertIsBytes = r.isBytes = void 0;
                const n = e("@scure/base")
                  , s = e("./assert.cjs")
                  , i = e("./hex.cjs")
                  , o = 48
                  , a = 58
                  , c = 87;
                const u = function() {
                    const e = [];
                    return () => {
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++)
                                e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();
                function l(e) {
                    return e instanceof Uint8Array
                }
                function f(e) {
                    (0,
                    s.assert)(l(e), "Value must be a Uint8Array.")
                }
                function d(e) {
                    if (f(e),
                    0 === e.length)
                        return "0x";
                    const t = u()
                      , r = new Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        r[n] = t[e[n]];
                    return (0,
                    i.add0x)(r.join(""))
                }
                function p(e) {
                    f(e);
                    const t = d(e);
                    return BigInt(t)
                }
                function h(e) {
                    if ("0x" === e?.toLowerCase?.())
                        return new Uint8Array;
                    (0,
                    i.assertIsHexString)(e);
                    const t = (0,
                    i.remove0x)(e).toLowerCase()
                      , r = t.length % 2 == 0 ? t : `0${t}`
                      , n = new Uint8Array(r.length / 2);
                    for (let e = 0; e < n.length; e++) {
                        const t = r.charCodeAt(2 * e)
                          , s = r.charCodeAt(2 * e + 1)
                          , i = t - (t < a ? o : c)
                          , u = s - (s < a ? o : c);
                        n[e] = 16 * i + u
                    }
                    return n
                }
                function g(e) {
                    (0,
                    s.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    s.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
                    return h(e.toString(16))
                }
                function m(e) {
                    (0,
                    s.assert)("number" == typeof e, "Value must be a number."),
                    (0,
                    s.assert)(e >= 0, "Value must be a non-negative number."),
                    (0,
                    s.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
                    return h(e.toString(16))
                }
                function y(e) {
                    return (0,
                    s.assert)("string" == typeof e, "Value must be a string."),
                    (new TextEncoder).encode(e)
                }
                function b(e) {
                    if ("bigint" == typeof e)
                        return g(e);
                    if ("number" == typeof e)
                        return m(e);
                    if ("string" == typeof e)
                        return e.startsWith("0x") ? h(e) : y(e);
                    if (l(e))
                        return e;
                    throw new TypeError(`Unsupported value type: "${typeof e}".`)
                }
                r.isBytes = l,
                r.assertIsBytes = f,
                r.bytesToHex = d,
                r.bytesToBigInt = p,
                r.bytesToSignedBigInt = function(e) {
                    f(e);
                    let t = BigInt(0);
                    for (const r of e)
                        t = (t << BigInt(8)) + BigInt(r);
                    return BigInt.asIntN(8 * e.length, t)
                }
                ,
                r.bytesToNumber = function(e) {
                    f(e);
                    const t = p(e);
                    return (0,
                    s.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
                    Number(t)
                }
                ,
                r.bytesToString = function(e) {
                    return f(e),
                    (new TextDecoder).decode(e)
                }
                ,
                r.bytesToBase64 = function(e) {
                    return f(e),
                    n.base64.encode(e)
                }
                ,
                r.hexToBytes = h,
                r.bigIntToBytes = g,
                r.signedBigIntToBytes = function(e, t) {
                    (0,
                    s.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    s.assert)("number" == typeof t, "Byte length must be a number."),
                    (0,
                    s.assert)(t > 0, "Byte length must be greater than 0."),
                    (0,
                    s.assert)(function(e, t) {
                        (0,
                        s.assert)(t > 0);
                        const r = e >> BigInt(31);
                        return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1))
                    }(e, t), "Byte length is too small to represent the given value.");
                    let r = e;
                    const n = new Uint8Array(t);
                    for (let e = 0; e < n.length; e++)
                        n[e] = Number(BigInt.asUintN(8, r)),
                        r >>= BigInt(8);
                    return n.reverse()
                }
                ,
                r.numberToBytes = m,
                r.stringToBytes = y,
                r.base64ToBytes = function(e) {
                    return (0,
                    s.assert)("string" == typeof e, "Value must be a string."),
                    n.base64.decode(e)
                }
                ,
                r.valueToBytes = b,
                r.concatBytes = function(e) {
                    const t = new Array(e.length);
                    let r = 0;
                    for (let n = 0; n < e.length; n++) {
                        const s = b(e[n]);
                        t[n] = s,
                        r += s.length
                    }
                    const n = new Uint8Array(r);
                    for (let e = 0, r = 0; e < t.length; e++)
                        n.set(t[e], r),
                        r += t[e].length;
                    return n
                }
                ,
                r.createDataView = function(e) {
                    if (void 0 !== t && e instanceof t) {
                        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        return new DataView(t)
                    }
                    return new DataView(e.buffer,e.byteOffset,e.byteLength)
                }
            }
            ).call(this)
        }
        ).call(this, e("buffer").Buffer)
    }
    , {
        "./assert.cjs": 22,
        "./hex.cjs": 31,
        "@scure/base": 95,
        buffer: 98
    }],
    25: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.toCaipChainId = r.parseCaipAccountId = r.parseCaipChainId = r.isCaipAssetId = r.isCaipAssetType = r.isCaipAccountAddress = r.isCaipAccountId = r.isCaipReference = r.isCaipNamespace = r.isCaipChainId = r.KnownCaipNamespace = r.CaipAssetIdStruct = r.CaipAssetTypeStruct = r.CaipAccountAddressStruct = r.CaipAccountIdStruct = r.CaipReferenceStruct = r.CaipNamespaceStruct = r.CaipChainIdStruct = r.CAIP_ASSET_ID_REGEX = r.CAIP_ASSET_TYPE_REGEX = r.CAIP_ACCOUNT_ADDRESS_REGEX = r.CAIP_ACCOUNT_ID_REGEX = r.CAIP_REFERENCE_REGEX = r.CAIP_NAMESPACE_REGEX = r.CAIP_CHAIN_ID_REGEX = void 0;
        const n = e("@metamask/superstruct");
        function s(e) {
            return (0,
            n.is)(e, r.CaipNamespaceStruct)
        }
        function i(e) {
            return (0,
            n.is)(e, r.CaipReferenceStruct)
        }
        r.CAIP_CHAIN_ID_REGEX = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u,
        r.CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u,
        r.CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u,
        r.CAIP_ACCOUNT_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u,
        r.CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u,
        r.CAIP_ASSET_TYPE_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})$/u,
        r.CAIP_ASSET_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})\/(?<tokenId>[-.%a-zA-Z0-9]{1,78})$/u,
        r.CaipChainIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_CHAIN_ID_REGEX),
        r.CaipNamespaceStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_NAMESPACE_REGEX),
        r.CaipReferenceStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_REFERENCE_REGEX),
        r.CaipAccountIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ACCOUNT_ID_REGEX),
        r.CaipAccountAddressStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ACCOUNT_ADDRESS_REGEX),
        r.CaipAssetTypeStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ASSET_TYPE_REGEX),
        r.CaipAssetIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ASSET_ID_REGEX),
        function(e) {
            e.Bip122 = "bip122",
            e.Eip155 = "eip155",
            e.Wallet = "wallet"
        }(r.KnownCaipNamespace || (r.KnownCaipNamespace = {})),
        r.isCaipChainId = function(e) {
            return (0,
            n.is)(e, r.CaipChainIdStruct)
        }
        ,
        r.isCaipNamespace = s,
        r.isCaipReference = i,
        r.isCaipAccountId = function(e) {
            return (0,
            n.is)(e, r.CaipAccountIdStruct)
        }
        ,
        r.isCaipAccountAddress = function(e) {
            return (0,
            n.is)(e, r.CaipAccountAddressStruct)
        }
        ,
        r.isCaipAssetType = function(e) {
            return (0,
            n.is)(e, r.CaipAssetTypeStruct)
        }
        ,
        r.isCaipAssetId = function(e) {
            return (0,
            n.is)(e, r.CaipAssetIdStruct)
        }
        ,
        r.parseCaipChainId = function(e) {
            const t = r.CAIP_CHAIN_ID_REGEX.exec(e);
            if (!t?.groups)
                throw new Error("Invalid CAIP chain ID.");
            return {
                namespace: t.groups.namespace,
                reference: t.groups.reference
            }
        }
        ,
        r.parseCaipAccountId = function(e) {
            const t = r.CAIP_ACCOUNT_ID_REGEX.exec(e);
            if (!t?.groups)
                throw new Error("Invalid CAIP account ID.");
            return {
                address: t.groups.accountAddress,
                chainId: t.groups.chainId,
                chain: {
                    namespace: t.groups.namespace,
                    reference: t.groups.reference
                }
            }
        }
        ,
        r.toCaipChainId = function(e, t) {
            if (!s(e))
                throw new Error(`Invalid "namespace", must match: ${r.CAIP_NAMESPACE_REGEX.toString()}`);
            if (!i(t))
                throw new Error(`Invalid "reference", must match: ${r.CAIP_REFERENCE_REGEX.toString()}`);
            return `${e}:${t}`
        }
    }
    , {
        "@metamask/superstruct": 62
    }],
    26: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ChecksumStruct = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./base64.cjs");
        r.ChecksumStruct = (0,
        n.size)((0,
        s.base64)((0,
        n.string)(), {
            paddingRequired: !0
        }), 44, 44)
    }
    , {
        "./base64.cjs": 23,
        "@metamask/superstruct": 62
    }],
    27: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createHex = r.createBytes = r.createBigInt = r.createNumber = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./assert.cjs")
          , i = e("./bytes.cjs")
          , o = e("./hex.cjs")
          , a = (0,
        n.union)([(0,
        n.number)(), (0,
        n.bigint)(), (0,
        n.string)(), o.StrictHexStruct])
          , c = (0,
        n.coerce)((0,
        n.number)(), a, Number)
          , u = (0,
        n.coerce)((0,
        n.bigint)(), a, BigInt)
          , l = ((0,
        n.union)([o.StrictHexStruct, (0,
        n.instance)(Uint8Array)]),
        (0,
        n.coerce)((0,
        n.instance)(Uint8Array), (0,
        n.union)([o.StrictHexStruct]), i.hexToBytes))
          , f = (0,
        n.coerce)(o.StrictHexStruct, (0,
        n.instance)(Uint8Array), i.bytesToHex);
        r.createNumber = function(e) {
            try {
                const t = (0,
                n.create)(e, c);
                return (0,
                s.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
                t
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${e}".`);
                throw t
            }
        }
        ,
        r.createBigInt = function(e) {
            try {
                return (0,
                n.create)(e, u)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createBytes = function(e) {
            if ("string" == typeof e && "0x" === e.toLowerCase())
                return new Uint8Array;
            try {
                return (0,
                n.create)(e, l)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createHex = function(e) {
            if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase())
                return "0x";
            try {
                return (0,
                n.create)(e, f)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
    }
    , {
        "./assert.cjs": 22,
        "./bytes.cjs": 24,
        "./hex.cjs": 31,
        "@metamask/superstruct": 62
    }],
    28: [function(e, t, r) {
        "use strict";
        var n, s, i = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , o = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.FrozenSet = r.FrozenMap = void 0;
        class a {
            get size() {
                return i(this, n, "f").size
            }
            [(n = new WeakMap,
            Symbol.iterator)]() {
                return i(this, n, "f")[Symbol.iterator]()
            }
            constructor(e) {
                n.set(this, void 0),
                o(this, n, new Map(e), "f"),
                Object.freeze(this)
            }
            entries() {
                return i(this, n, "f").entries()
            }
            forEach(e, t) {
                return i(this, n, "f").forEach(( (r, n, s) => e.call(t, r, n, this)))
            }
            get(e) {
                return i(this, n, "f").get(e)
            }
            has(e) {
                return i(this, n, "f").has(e)
            }
            keys() {
                return i(this, n, "f").keys()
            }
            values() {
                return i(this, n, "f").values()
            }
            toString() {
                return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(( ([e,t]) => `${String(e)} => ${String(t)}`)).join(", ")} ` : ""}}`
            }
        }
        r.FrozenMap = a;
        class c {
            get size() {
                return i(this, s, "f").size
            }
            [(s = new WeakMap,
            Symbol.iterator)]() {
                return i(this, s, "f")[Symbol.iterator]()
            }
            constructor(e) {
                s.set(this, void 0),
                o(this, s, new Set(e), "f"),
                Object.freeze(this)
            }
            entries() {
                return i(this, s, "f").entries()
            }
            forEach(e, t) {
                return i(this, s, "f").forEach(( (r, n, s) => e.call(t, r, n, this)))
            }
            has(e) {
                return i(this, s, "f").has(e)
            }
            keys() {
                return i(this, s, "f").keys()
            }
            values() {
                return i(this, s, "f").values()
            }
            toString() {
                return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e => String(e))).join(", ")} ` : ""}}`
            }
        }
        r.FrozenSet = c,
        Object.freeze(a),
        Object.freeze(a.prototype),
        Object.freeze(c),
        Object.freeze(c.prototype)
    }
    , {}],
    29: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    30: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.wrapError = r.getErrorMessage = r.isErrorWithStack = r.isErrorWithMessage = r.isErrorWithCode = void 0;
        const n = e("pony-cause")
          , s = e("./misc.cjs");
        function i(e) {
            return "object" == typeof e && null !== e && "code"in e
        }
        function o(e) {
            return "object" == typeof e && null !== e && "message"in e
        }
        r.isErrorWithCode = i,
        r.isErrorWithMessage = o,
        r.isErrorWithStack = function(e) {
            return "object" == typeof e && null !== e && "stack"in e
        }
        ,
        r.getErrorMessage = function(e) {
            return o(e) && "string" == typeof e.message ? e.message : (0,
            s.isNullOrUndefined)(e) ? "" : String(e)
        }
        ,
        r.wrapError = function(e, t) {
            if ((r = e)instanceof Error || (0,
            s.isObject)(r) && "Error" === r.constructor.name) {
                let r;
                return r = 2 === Error.length ? new Error(t,{
                    cause: e
                }) : new n.ErrorWithCause(t,{
                    cause: e
                }),
                i(e) && (r.code = e.code),
                r
            }
            var r;
            return t.length > 0 ? new Error(`${String(e)}: ${t}`) : new Error(String(e))
        }
    }
    , {
        "./misc.cjs": 36,
        "pony-cause": 110
    }],
    31: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.remove0x = r.add0x = r.isValidChecksumAddress = r.getChecksumAddress = r.isValidHexAddress = r.assertIsStrictHexString = r.assertIsHexString = r.isStrictHexString = r.isHexString = r.HexChecksumAddressStruct = r.HexAddressStruct = r.StrictHexStruct = r.HexStruct = void 0;
        const n = e("@metamask/superstruct")
          , s = e("@noble/hashes/sha3")
          , i = e("./assert.cjs")
          , o = e("./bytes.cjs");
        function a(e) {
            return (0,
            n.is)(e, r.HexStruct)
        }
        function c(e) {
            return (0,
            n.is)(e, r.StrictHexStruct)
        }
        function u(e) {
            (0,
            i.assert)((0,
            n.is)(e, r.HexChecksumAddressStruct), "Invalid hex address.");
            const t = f(e.toLowerCase())
              , a = f((0,
            o.bytesToHex)((0,
            s.keccak_256)(t)));
            return `0x${t.split("").map(( (e, t) => {
                const r = a[t];
                return (0,
                i.assert)((0,
                n.is)(r, (0,
                n.string)()), "Hash shorter than address."),
                parseInt(r, 16) > 7 ? e.toUpperCase() : e
            }
            )).join("")}`
        }
        function l(e) {
            return !!(0,
            n.is)(e, r.HexChecksumAddressStruct) && u(e) === e
        }
        function f(e) {
            return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
        }
        r.HexStruct = (0,
        n.pattern)((0,
        n.string)(), /^(?:0x)?[0-9a-f]+$/iu),
        r.StrictHexStruct = (0,
        n.pattern)((0,
        n.string)(), /^0x[0-9a-f]+$/iu),
        r.HexAddressStruct = (0,
        n.pattern)((0,
        n.string)(), /^0x[0-9a-f]{40}$/u),
        r.HexChecksumAddressStruct = (0,
        n.pattern)((0,
        n.string)(), /^0x[0-9a-fA-F]{40}$/u),
        r.isHexString = a,
        r.isStrictHexString = c,
        r.assertIsHexString = function(e) {
            (0,
            i.assert)(a(e), "Value must be a hexadecimal string.")
        }
        ,
        r.assertIsStrictHexString = function(e) {
            (0,
            i.assert)(c(e), 'Value must be a hexadecimal string, starting with "0x".')
        }
        ,
        r.isValidHexAddress = function(e) {
            return (0,
            n.is)(e, r.HexAddressStruct) || l(e)
        }
        ,
        r.getChecksumAddress = u,
        r.isValidChecksumAddress = l,
        r.add0x = function(e) {
            return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`
        }
        ,
        r.remove0x = f
    }
    , {
        "./assert.cjs": 22,
        "./bytes.cjs": 24,
        "@metamask/superstruct": 62,
        "@noble/hashes/sha3": 93
    }],
    32: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, s)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        s(e("./assert.cjs"), r),
        s(e("./base64.cjs"), r),
        s(e("./bytes.cjs"), r),
        s(e("./caip-types.cjs"), r),
        s(e("./checksum.cjs"), r),
        s(e("./coercers.cjs"), r),
        s(e("./collections.cjs"), r),
        s(e("./encryption-types.cjs"), r),
        s(e("./errors.cjs"), r),
        s(e("./hex.cjs"), r),
        s(e("./json.cjs"), r),
        s(e("./keyring.cjs"), r),
        s(e("./logging.cjs"), r),
        s(e("./misc.cjs"), r),
        s(e("./number.cjs"), r),
        s(e("./opaque.cjs"), r),
        s(e("./promise.cjs"), r),
        s(e("./time.cjs"), r),
        s(e("./transaction-types.cjs"), r),
        s(e("./versions.cjs"), r)
    }
    , {
        "./assert.cjs": 22,
        "./base64.cjs": 23,
        "./bytes.cjs": 24,
        "./caip-types.cjs": 25,
        "./checksum.cjs": 26,
        "./coercers.cjs": 27,
        "./collections.cjs": 28,
        "./encryption-types.cjs": 29,
        "./errors.cjs": 30,
        "./hex.cjs": 31,
        "./json.cjs": 33,
        "./keyring.cjs": 34,
        "./logging.cjs": 35,
        "./misc.cjs": 36,
        "./number.cjs": 37,
        "./opaque.cjs": 38,
        "./promise.cjs": 39,
        "./time.cjs": 40,
        "./transaction-types.cjs": 41,
        "./versions.cjs": 42
    }],
    33: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getJsonRpcIdValidator = r.assertIsJsonRpcError = r.isJsonRpcError = r.assertIsJsonRpcFailure = r.isJsonRpcFailure = r.assertIsJsonRpcSuccess = r.isJsonRpcSuccess = r.assertIsJsonRpcResponse = r.isJsonRpcResponse = r.assertIsPendingJsonRpcResponse = r.isPendingJsonRpcResponse = r.JsonRpcResponseStruct = r.JsonRpcFailureStruct = r.JsonRpcSuccessStruct = r.PendingJsonRpcResponseStruct = r.assertIsJsonRpcRequest = r.isJsonRpcRequest = r.assertIsJsonRpcNotification = r.isJsonRpcNotification = r.JsonRpcNotificationStruct = r.JsonRpcRequestStruct = r.JsonRpcParamsStruct = r.JsonRpcErrorStruct = r.JsonRpcIdStruct = r.JsonRpcVersionStruct = r.jsonrpc2 = r.getJsonSize = r.getSafeJson = r.isValidJson = r.JsonStruct = r.UnsafeJsonStruct = r.exactOptional = r.object = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./assert.cjs")
          , i = e("./misc.cjs");
        function o({path: e, branch: t}) {
            const r = e[e.length - 1];
            return (0,
            i.hasProperty)(t[t.length - 2], r)
        }
        function a(e) {
            return new n.Struct({
                ...e,
                type: `optional ${e.type}`,
                validator: (t, r) => !o(r) || e.validator(t, r),
                refiner: (t, r) => !o(r) || e.refiner(t, r)
            })
        }
        r.object = e => (0,
        n.object)(e),
        r.exactOptional = a;
        function c(e) {
            return (0,
            n.create)(e, r.JsonStruct)
        }
        r.UnsafeJsonStruct = (0,
        n.union)([(0,
        n.literal)(null), (0,
        n.boolean)(), (0,
        n.define)("finite number", (e => (0,
        n.is)(e, (0,
        n.number)()) && Number.isFinite(e))), (0,
        n.string)(), (0,
        n.array)((0,
        n.lazy)(( () => r.UnsafeJsonStruct))), (0,
        n.record)((0,
        n.string)(), (0,
        n.lazy)(( () => r.UnsafeJsonStruct)))]),
        r.JsonStruct = (0,
        n.coerce)(r.UnsafeJsonStruct, (0,
        n.any)(), (e => ((0,
        s.assertStruct)(e, r.UnsafeJsonStruct),
        JSON.parse(JSON.stringify(e, ( (e, t) => {
            if ("__proto__" !== e && "constructor" !== e)
                return t
        }
        )))))),
        r.isValidJson = function(e) {
            try {
                return c(e),
                !0
            } catch {
                return !1
            }
        }
        ,
        r.getSafeJson = c,
        r.getJsonSize = function(e) {
            (0,
            s.assertStruct)(e, r.JsonStruct, "Invalid JSON value");
            const t = JSON.stringify(e);
            return (new TextEncoder).encode(t).byteLength
        }
        ,
        r.jsonrpc2 = "2.0",
        r.JsonRpcVersionStruct = (0,
        n.literal)(r.jsonrpc2),
        r.JsonRpcIdStruct = (0,
        n.nullable)((0,
        n.union)([(0,
        n.number)(), (0,
        n.string)()])),
        r.JsonRpcErrorStruct = (0,
        r.object)({
            code: (0,
            n.integer)(),
            message: (0,
            n.string)(),
            data: a(r.JsonStruct),
            stack: a((0,
            n.string)())
        }),
        r.JsonRpcParamsStruct = (0,
        n.union)([(0,
        n.record)((0,
        n.string)(), r.JsonStruct), (0,
        n.array)(r.JsonStruct)]),
        r.JsonRpcRequestStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: a(r.JsonRpcParamsStruct)
        }),
        r.JsonRpcNotificationStruct = (0,
        r.object)({
            jsonrpc: r.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: a(r.JsonRpcParamsStruct)
        }),
        r.isJsonRpcNotification = function(e) {
            return (0,
            n.is)(e, r.JsonRpcNotificationStruct)
        }
        ,
        r.assertIsJsonRpcNotification = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", t)
        }
        ,
        r.isJsonRpcRequest = function(e) {
            return (0,
            n.is)(e, r.JsonRpcRequestStruct)
        }
        ,
        r.assertIsJsonRpcRequest = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcRequestStruct, "Invalid JSON-RPC request", t)
        }
        ,
        r.PendingJsonRpcResponseStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: (0,
            n.optional)((0,
            n.unknown)()),
            error: (0,
            n.optional)(r.JsonRpcErrorStruct)
        }),
        r.JsonRpcSuccessStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: r.JsonStruct
        }),
        r.JsonRpcFailureStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            error: r.JsonRpcErrorStruct
        }),
        r.JsonRpcResponseStruct = (0,
        n.union)([r.JsonRpcSuccessStruct, r.JsonRpcFailureStruct]),
        r.isPendingJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.PendingJsonRpcResponseStruct)
        }
        ,
        r.assertIsPendingJsonRpcResponse = function(e, t) {
            (0,
            s.assertStruct)(e, r.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", t)
        }
        ,
        r.isJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.JsonRpcResponseStruct)
        }
        ,
        r.assertIsJsonRpcResponse = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcResponseStruct, "Invalid JSON-RPC response", t)
        }
        ,
        r.isJsonRpcSuccess = function(e) {
            return (0,
            n.is)(e, r.JsonRpcSuccessStruct)
        }
        ,
        r.assertIsJsonRpcSuccess = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", t)
        }
        ,
        r.isJsonRpcFailure = function(e) {
            return (0,
            n.is)(e, r.JsonRpcFailureStruct)
        }
        ,
        r.assertIsJsonRpcFailure = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", t)
        }
        ,
        r.isJsonRpcError = function(e) {
            return (0,
            n.is)(e, r.JsonRpcErrorStruct)
        }
        ,
        r.assertIsJsonRpcError = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcErrorStruct, "Invalid JSON-RPC error", t)
        }
        ,
        r.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = {
                permitEmptyString: !0,
                permitFractions: !1,
                permitNull: !0,
                ...e
            };
            return e => Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e)
        }
    }
    , {
        "./assert.cjs": 22,
        "./misc.cjs": 36,
        "@metamask/superstruct": 62
    }],
    34: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    35: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createModuleLogger = r.createProjectLogger = void 0;
        const s = (0,
        n(e("debug")).default)("metamask");
        r.createProjectLogger = function(e) {
            return s.extend(e)
        }
        ,
        r.createModuleLogger = function(e, t) {
            return e.extend(t)
        }
    }
    , {
        debug: 100
    }],
    36: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.calculateNumberSize = r.calculateStringSize = r.isASCII = r.isPlainObject = r.ESCAPE_CHARACTERS_REGEXP = r.JsonSize = r.getKnownPropertyNames = r.hasProperty = r.isObject = r.isNullOrUndefined = r.isNonEmptyArray = void 0,
        r.isNonEmptyArray = function(e) {
            return Array.isArray(e) && e.length > 0
        }
        ,
        r.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        r.isObject = function(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e)
        }
        ;
        function n(e) {
            return e.charCodeAt(0) <= 127
        }
        r.hasProperty = (e, t) => Object.hasOwnProperty.call(e, t),
        r.getKnownPropertyNames = function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ,
        function(e) {
            e[e.Null = 4] = "Null",
            e[e.Comma = 1] = "Comma",
            e[e.Wrapper = 1] = "Wrapper",
            e[e.True = 4] = "True",
            e[e.False = 5] = "False",
            e[e.Quote = 1] = "Quote",
            e[e.Colon = 1] = "Colon",
            e[e.Date = 24] = "Date"
        }(r.JsonSize || (r.JsonSize = {})),
        r.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu,
        r.isPlainObject = function(e) {
            if ("object" != typeof e || null === e)
                return !1;
            try {
                let t = e;
                for (; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            } catch (e) {
                return !1
            }
        }
        ,
        r.isASCII = n,
        r.calculateStringSize = function(e) {
            return e.split("").reduce(( (e, t) => n(t) ? e + 1 : e + 2), 0) + (e.match(r.ESCAPE_CHARACTERS_REGEXP) ?? []).length
        }
        ,
        r.calculateNumberSize = function(e) {
            return e.toString().length
        }
    }
    , {}],
    37: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.hexToBigInt = r.hexToNumber = r.bigIntToHex = r.numberToHex = void 0;
        const n = e("./assert.cjs")
          , s = e("./hex.cjs");
        r.numberToHex = e => ((0,
        n.assert)("number" == typeof e, "Value must be a number."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative number."),
        (0,
        n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
        (0,
        s.add0x)(e.toString(16)));
        r.bigIntToHex = e => ((0,
        n.assert)("bigint" == typeof e, "Value must be a bigint."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative bigint."),
        (0,
        s.add0x)(e.toString(16)));
        r.hexToNumber = e => {
            (0,
            s.assertIsHexString)(e);
            const t = parseInt(e, 16);
            return (0,
            n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
            t
        }
        ;
        r.hexToBigInt = e => ((0,
        s.assertIsHexString)(e),
        BigInt((0,
        s.add0x)(e)))
    }
    , {
        "./assert.cjs": 22,
        "./hex.cjs": 31
    }],
    38: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    39: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createDeferredPromise = void 0,
        r.createDeferredPromise = function({suppressUnhandledRejection: e=!1}={}) {
            let t, r;
            const n = new Promise(( (e, n) => {
                t = e,
                r = n
            }
            ));
            return e && n.catch((e => {}
            )),
            {
                promise: n,
                resolve: t,
                reject: r
            }
        }
    }
    , {}],
    40: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.timeSince = r.inMilliseconds = r.Duration = void 0,
        function(e) {
            e[e.Millisecond = 1] = "Millisecond",
            e[e.Second = 1e3] = "Second",
            e[e.Minute = 6e4] = "Minute",
            e[e.Hour = 36e5] = "Hour",
            e[e.Day = 864e5] = "Day",
            e[e.Week = 6048e5] = "Week",
            e[e.Year = 31536e6] = "Year"
        }(r.Duration || (r.Duration = {}));
        const n = (e, t) => {
            if (!(e => Number.isInteger(e) && e >= 0)(e))
                throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
        }
        ;
        r.inMilliseconds = function(e, t) {
            return n(e, "count"),
            e * t
        }
        ,
        r.timeSince = function(e) {
            return n(e, "timestamp"),
            Date.now() - e
        }
    }
    , {}],
    41: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    42: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.satisfiesVersionRange = r.gtRange = r.gtVersion = r.assertIsSemVerRange = r.assertIsSemVerVersion = r.isValidSemVerRange = r.isValidSemVerVersion = r.VersionRangeStruct = r.VersionStruct = void 0;
        const n = e("@metamask/superstruct")
          , s = e("semver")
          , i = e("./assert.cjs");
        r.VersionStruct = (0,
        n.refine)((0,
        n.string)(), "Version", (e => null !== (0,
        s.valid)(e) || `Expected SemVer version, got "${e}"`)),
        r.VersionRangeStruct = (0,
        n.refine)((0,
        n.string)(), "Version range", (e => null !== (0,
        s.validRange)(e) || `Expected SemVer range, got "${e}"`)),
        r.isValidSemVerVersion = function(e) {
            return (0,
            n.is)(e, r.VersionStruct)
        }
        ,
        r.isValidSemVerRange = function(e) {
            return (0,
            n.is)(e, r.VersionRangeStruct)
        }
        ,
        r.assertIsSemVerVersion = function(e) {
            (0,
            i.assertStruct)(e, r.VersionStruct)
        }
        ,
        r.assertIsSemVerRange = function(e) {
            (0,
            i.assertStruct)(e, r.VersionRangeStruct)
        }
        ,
        r.gtVersion = function(e, t) {
            return (0,
            s.gt)(e, t)
        }
        ,
        r.gtRange = function(e, t) {
            return (0,
            s.gtr)(e, t)
        }
        ,
        r.satisfiesVersionRange = function(e, t) {
            return (0,
            s.satisfies)(e, t, {
                includePrerelease: !0
            })
        }
    }
    , {
        "./assert.cjs": 22,
        "@metamask/superstruct": 62,
        semver: 157
    }],
    43: [function(e, t, r) {
        "use strict";
        var n, s, i = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        , o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BaseProvider = void 0;
        const c = e("@metamask/json-rpc-engine")
          , u = e("@metamask/rpc-errors")
          , l = a(e("@metamask/safe-event-emitter"))
          , f = a(e("fast-deep-equal"))
          , d = a(e("./messages.cjs"))
          , p = e("./utils.cjs");
        class h extends l.default {
            constructor({logger: e=console, maxEventListeners: t=100, rpcMiddleware: r=[]}={}) {
                super(),
                n.set(this, void 0),
                s.set(this, void 0),
                this._log = e,
                this.setMaxListeners(t),
                this._state = {
                    ...h._defaultState
                },
                i(this, s, null, "f"),
                i(this, n, null, "f"),
                this._handleAccountsChanged = this._handleAccountsChanged.bind(this),
                this._handleConnect = this._handleConnect.bind(this),
                this._handleChainChanged = this._handleChainChanged.bind(this),
                this._handleDisconnect = this._handleDisconnect.bind(this),
                this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this),
                this._rpcRequest = this._rpcRequest.bind(this),
                this.request = this.request.bind(this);
                const o = new c.JsonRpcEngine;
                r.forEach((e => o.push(e))),
                this._rpcEngine = o
            }
            get chainId() {
                return o(this, n, "f")
            }
            get selectedAddress() {
                return o(this, s, "f")
            }
            isConnected() {
                return this._state.isConnected
            }
            async request(e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw u.rpcErrors.invalidRequest({
                        message: d.default.errors.invalidRequestArgs(),
                        data: e
                    });
                const {method: t, params: r} = e;
                if ("string" != typeof t || 0 === t.length)
                    throw u.rpcErrors.invalidRequest({
                        message: d.default.errors.invalidRequestMethod(),
                        data: e
                    });
                if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r))
                    throw u.rpcErrors.invalidRequest({
                        message: d.default.errors.invalidRequestParams(),
                        data: e
                    });
                const n = null == r ? {
                    method: t
                } : {
                    method: t,
                    params: r
                };
                return new Promise(( (e, t) => {
                    this._rpcRequest(n, (0,
                    p.getRpcPromiseCallback)(e, t))
                }
                ))
            }
            _initializeState(e) {
                if (this._state.initialized)
                    throw new Error("Provider already initialized.");
                if (e) {
                    const {accounts: t, chainId: r, isUnlocked: n, networkVersion: s} = e;
                    this._handleConnect(r),
                    this._handleChainChanged({
                        chainId: r,
                        networkVersion: s
                    }),
                    this._handleUnlockStateChanged({
                        accounts: t,
                        isUnlocked: n
                    }),
                    this._handleAccountsChanged(t)
                }
                this._state.initialized = !0,
                this.emit("_initialized")
            }
            _rpcRequest(e, t) {
                let r = t;
                return Array.isArray(e) || (e.jsonrpc || (e.jsonrpc = "2.0"),
                "eth_accounts" !== e.method && "eth_requestAccounts" !== e.method || (r = (r, n) => {
                    this._handleAccountsChanged(n.result ?? [], "eth_accounts" === e.method),
                    t(r, n)
                }
                )),
                this._rpcEngine.handle(e, r)
            }
            _handleConnect(e) {
                this._state.isConnected || (this._state.isConnected = !0,
                this.emit("connect", {
                    chainId: e
                }),
                this._log.debug(d.default.info.connected(e)))
            }
            _handleDisconnect(e, t) {
                if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
                    let r;
                    this._state.isConnected = !1,
                    e ? (r = new u.JsonRpcError(1013,t ?? d.default.errors.disconnected()),
                    this._log.debug(r)) : (r = new u.JsonRpcError(1011,t ?? d.default.errors.permanentlyDisconnected()),
                    this._log.error(r),
                    i(this, n, null, "f"),
                    this._state.accounts = null,
                    i(this, s, null, "f"),
                    this._state.isUnlocked = !1,
                    this._state.isPermanentlyDisconnected = !0),
                    this.emit("disconnect", r)
                }
            }
            _handleChainChanged({chainId: e}={}) {
                (0,
                p.isValidChainId)(e) ? (this._handleConnect(e),
                e !== o(this, n, "f") && (i(this, n, e, "f"),
                this._state.initialized && this.emit("chainChanged", o(this, n, "f")))) : this._log.error(d.default.errors.invalidNetworkParams(), {
                    chainId: e
                })
            }
            _handleAccountsChanged(e, t=!1) {
                let r = e;
                Array.isArray(e) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e),
                r = []);
                for (const t of e)
                    if ("string" != typeof t) {
                        this._log.error("MetaMask: Received non-string account. Please report this bug.", e),
                        r = [];
                        break
                    }
                if (!(0,
                f.default)(this._state.accounts, r) && (t && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", r),
                this._state.accounts = r,
                o(this, s, "f") !== r[0] && i(this, s, r[0] || null, "f"),
                this._state.initialized)) {
                    const e = [...r];
                    this.emit("accountsChanged", e)
                }
            }
            _handleUnlockStateChanged({accounts: e, isUnlocked: t}={}) {
                "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t,
                this._handleAccountsChanged(e ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.")
            }
        }
        r.BaseProvider = h,
        n = new WeakMap,
        s = new WeakMap,
        h._defaultState = {
            accounts: null,
            isConnected: !1,
            isUnlocked: !1,
            initialized: !1,
            isPermanentlyDisconnected: !1
        }
    }
    , {
        "./messages.cjs": 49,
        "./utils.cjs": 53,
        "@metamask/json-rpc-engine": 7,
        "@metamask/rpc-errors": 58,
        "@metamask/safe-event-emitter": 60,
        "fast-deep-equal": 103
    }],
    44: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.requestProvider = function(e) {
            window.addEventListener(s.Announce, (t => {
                (function(e) {
                    return e instanceof CustomEvent && e.type === s.Announce && Object.isFrozen(e.detail) && a(e.detail)
                }
                )(t) || c(`Invalid EIP-6963 AnnounceProviderEvent object received from ${s.Announce} event.`),
                e(t.detail)
            }
            )),
            window.dispatchEvent(new Event(s.Request))
        }
        ,
        r.announceProvider = function(e) {
            a(e) || c("Invalid EIP-6963 ProviderDetail object.");
            const {info: t, provider: r} = e
              , n = () => window.dispatchEvent(new CustomEvent(s.Announce,{
                detail: Object.freeze({
                    info: {
                        ...t
                    },
                    provider: r
                })
            }));
            n(),
            window.addEventListener(s.Request, (e => {
                (function(e) {
                    return e instanceof Event && e.type === s.Request
                }
                )(e) || c(`Invalid EIP-6963 RequestProviderEvent object received from ${s.Request} event.`),
                n()
            }
            ))
        }
        ;
        const n = e("@metamask/utils");
        var s;
        !function(e) {
            e.Announce = "eip6963:announceProvider",
            e.Request = "eip6963:requestProvider"
        }(s || (s = {}));
        const i = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
          , o = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/u;
        function a(e) {
            if (!(0,
            n.isObject)(e) || !(0,
            n.isObject)(e.info) || !(0,
            n.isObject)(e.provider))
                return !1;
            const {info: t} = e;
            return "string" == typeof t.uuid && i.test(t.uuid) && "string" == typeof t.name && Boolean(t.name) && "string" == typeof t.icon && t.icon.startsWith("data:image") && "string" == typeof t.rdns && o.test(t.rdns)
        }
        function c(e) {
            throw new Error(`${e} See https://eips.ethereum.org/EIPS/eip-6963 for requirements.`)
        }
    }
    , {
        "@metamask/utils": 79
    }],
    45: [function(e, t, r) {
        "use strict";
        var n, s = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        , i = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.MetaMaskInpageProvider = r.MetaMaskInpageProviderStreamName = void 0;
        const a = e("@metamask/rpc-errors")
          , c = o(e("./messages.cjs"))
          , u = e("./siteMetadata.cjs")
          , l = e("./StreamProvider.cjs")
          , f = e("./utils.cjs");
        r.MetaMaskInpageProviderStreamName = "metamask-provider";
        class d extends l.AbstractStreamProvider {
            constructor(e, {jsonRpcStreamName: t=r.MetaMaskInpageProviderStreamName, logger: i=console, maxEventListeners: o=100, shouldSendMetadata: a}={}) {
                if (super(e, {
                    jsonRpcStreamName: t,
                    logger: i,
                    maxEventListeners: o,
                    rpcMiddleware: (0,
                    f.getDefaultExternalMiddleware)(i)
                }),
                this._sentWarnings = {
                    enable: !1,
                    experimentalMethods: !1,
                    send: !1,
                    events: {
                        close: !1,
                        data: !1,
                        networkChanged: !1,
                        notification: !1
                    }
                },
                n.set(this, void 0),
                this._initializeStateAsync(),
                s(this, n, null, "f"),
                this.isMetaMask = !0,
                this._sendSync = this._sendSync.bind(this),
                this.enable = this.enable.bind(this),
                this.send = this.send.bind(this),
                this.sendAsync = this.sendAsync.bind(this),
                this._warnOfDeprecation = this._warnOfDeprecation.bind(this),
                this._metamask = this._getExperimentalApi(),
                this._jsonRpcConnection.events.on("notification", (e => {
                    const {method: t} = e;
                    f.EMITTED_NOTIFICATIONS.includes(t) && (this.emit("data", e),
                    this.emit("notification", e.params.result))
                }
                )),
                a)
                    if ("complete" === document.readyState)
                        (0,
                        u.sendSiteMetadata)(this._rpcEngine, this._log);
                    else {
                        const e = () => {
                            (0,
                            u.sendSiteMetadata)(this._rpcEngine, this._log),
                            window.removeEventListener("DOMContentLoaded", e)
                        }
                        ;
                        window.addEventListener("DOMContentLoaded", e)
                    }
            }
            get chainId() {
                return super.chainId
            }
            get networkVersion() {
                return i(this, n, "f")
            }
            get selectedAddress() {
                return super.selectedAddress
            }
            sendAsync(e, t) {
                this._rpcRequest(e, t)
            }
            addListener(e, t) {
                return this._warnOfDeprecation(e),
                super.addListener(e, t)
            }
            on(e, t) {
                return this._warnOfDeprecation(e),
                super.on(e, t)
            }
            once(e, t) {
                return this._warnOfDeprecation(e),
                super.once(e, t)
            }
            prependListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependListener(e, t)
            }
            prependOnceListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependOnceListener(e, t)
            }
            _handleDisconnect(e, t) {
                super._handleDisconnect(e, t),
                i(this, n, "f") && !e && s(this, n, null, "f")
            }
            _warnOfDeprecation(e) {
                !1 === this._sentWarnings?.events[e] && (this._log.warn(c.default.warnings.events[e]),
                this._sentWarnings.events[e] = !0)
            }
            async enable() {
                return this._sentWarnings.enable || (this._log.warn(c.default.warnings.enableDeprecation),
                this._sentWarnings.enable = !0),
                new Promise(( (e, t) => {
                    try {
                        this._rpcRequest({
                            method: "eth_requestAccounts",
                            params: []
                        }, (0,
                        f.getRpcPromiseCallback)(e, t))
                    } catch (e) {
                        t(e)
                    }
                }
                ))
            }
            send(e, t) {
                return this._sentWarnings.send || (this._log.warn(c.default.warnings.sendDeprecation),
                this._sentWarnings.send = !0),
                "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(( (r, n) => {
                    try {
                        this._rpcRequest({
                            method: e,
                            params: t
                        }, (0,
                        f.getRpcPromiseCallback)(r, n, !1))
                    } catch (e) {
                        n(e)
                    }
                }
                ))
            }
            _sendSync(e) {
                let t;
                switch (e.method) {
                case "eth_accounts":
                    t = this.selectedAddress ? [this.selectedAddress] : [];
                    break;
                case "eth_coinbase":
                    t = this.selectedAddress ?? null;
                    break;
                case "eth_uninstallFilter":
                    this._rpcRequest(e, f.NOOP),
                    t = !0;
                    break;
                case "net_version":
                    t = i(this, n, "f") ?? null;
                    break;
                default:
                    throw new Error(c.default.errors.unsupportedSync(e.method))
                }
                return {
                    id: e.id,
                    jsonrpc: e.jsonrpc,
                    result: t
                }
            }
            _getExperimentalApi() {
                return new Proxy({
                    isUnlocked: async () => (this._state.initialized || await new Promise((e => {
                        this.on("_initialized", ( () => e()))
                    }
                    )),
                    this._state.isUnlocked),
                    requestBatch: async e => {
                        if (!Array.isArray(e))
                            throw a.rpcErrors.invalidRequest({
                                message: "Batch requests must be made with an array of request objects.",
                                data: e
                            });
                        return new Promise(( (t, r) => {
                            this._rpcRequest(e, (0,
                            f.getRpcPromiseCallback)(t, r))
                        }
                        ))
                    }
                },{
                    get: (e, t, ...r) => (this._sentWarnings.experimentalMethods || (this._log.warn(c.default.warnings.experimentalMethods),
                    this._sentWarnings.experimentalMethods = !0),
                    Reflect.get(e, t, ...r))
                })
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                super._handleChainChanged({
                    chainId: e,
                    networkVersion: t
                }),
                this._state.isConnected && t !== i(this, n, "f") && (s(this, n, t, "f"),
                this._state.initialized && this.emit("networkChanged", i(this, n, "f")))
            }
        }
        r.MetaMaskInpageProvider = d,
        n = new WeakMap
    }
    , {
        "./StreamProvider.cjs": 46,
        "./messages.cjs": 49,
        "./siteMetadata.cjs": 52,
        "./utils.cjs": 53,
        "@metamask/rpc-errors": 58
    }],
    46: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.StreamProvider = r.AbstractStreamProvider = void 0;
        const s = e("@metamask/json-rpc-middleware-stream")
          , i = n(e("@metamask/object-multiplex"))
          , o = e("is-stream/index.js")
          , a = e("readable-stream")
          , c = e("./BaseProvider.cjs")
          , u = n(e("./messages.cjs"))
          , l = e("./utils.cjs");
        class f extends c.BaseProvider {
            constructor(e, {jsonRpcStreamName: t, logger: r=console, maxEventListeners: n=100, rpcMiddleware: c=[]}) {
                if (super({
                    logger: r,
                    maxEventListeners: n,
                    rpcMiddleware: c
                }),
                !(0,
                o.duplex)(e))
                    throw new Error(u.default.errors.invalidDuplexStream());
                this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
                const f = new i.default;
                (0,
                a.pipeline)(e, f, e, this._handleStreamDisconnect.bind(this, "MetaMask")),
                this._jsonRpcConnection = (0,
                s.createStreamMiddleware)({
                    retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
                }),
                (0,
                a.pipeline)(this._jsonRpcConnection.stream, f.createStream(t), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")),
                this._rpcEngine.push(this._jsonRpcConnection.middleware),
                this._jsonRpcConnection.events.on("notification", (t => {
                    const {method: r, params: n} = t;
                    "metamask_accountsChanged" === r ? this._handleAccountsChanged(n) : "metamask_unlockStateChanged" === r ? this._handleUnlockStateChanged(n) : "metamask_chainChanged" === r ? this._handleChainChanged(n) : l.EMITTED_NOTIFICATIONS.includes(r) ? this.emit("message", {
                        type: r,
                        data: n
                    }) : "METAMASK_STREAM_FAILURE" === r && e.destroy(new Error(u.default.errors.permanentlyDisconnected()))
                }
                ))
            }
            async _initializeStateAsync() {
                let e;
                try {
                    e = await this.request({
                        method: "metamask_getProviderState"
                    })
                } catch (e) {
                    this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e)
                }
                this._initializeState(e)
            }
            _handleStreamDisconnect(e, t) {
                let r = `MetaMask: Lost connection to "${e}".`;
                t?.stack && (r += `\n${t.stack}`),
                this._log.warn(r),
                this.listenerCount("error") > 0 && this.emit("error", r),
                this._handleDisconnect(!1, t ? t.message : void 0)
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                (0,
                l.isValidChainId)(e) && (0,
                l.isValidNetworkVersion)(t) ? "loading" === t ? this._handleDisconnect(!0) : super._handleChainChanged({
                    chainId: e
                }) : this._log.error(u.default.errors.invalidNetworkParams(), {
                    chainId: e,
                    networkVersion: t
                })
            }
        }
        r.AbstractStreamProvider = f;
        r.StreamProvider = class extends f {
            async initialize() {
                return this._initializeStateAsync()
            }
        }
    }
    , {
        "./BaseProvider.cjs": 43,
        "./messages.cjs": 49,
        "./utils.cjs": 53,
        "@metamask/json-rpc-middleware-stream": 11,
        "@metamask/object-multiplex": 14,
        "is-stream/index.js": 107,
        "readable-stream": 128
    }],
    47: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ERC20 = r.ERC1155 = r.ERC721 = void 0,
        r.ERC721 = "ERC721",
        r.ERC1155 = "ERC1155",
        r.ERC20 = "ERC20"
    }
    , {}],
    48: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.initializeProvider = function({connectionStream: e, jsonRpcStreamName: t, logger: r=console, maxEventListeners: a=100, providerInfo: c, shouldSendMetadata: u=!0, shouldSetOnWindow: l=!0, shouldShimWeb3: f=!1}) {
            const d = new s.MetaMaskInpageProvider(e,{
                jsonRpcStreamName: t,
                logger: r,
                maxEventListeners: a,
                shouldSendMetadata: u
            })
              , p = new Proxy(d,{
                deleteProperty: () => !0,
                get: (e, t) => e[t]
            });
            c && (0,
            n.announceProvider)({
                info: c,
                provider: p
            });
            l && o(p);
            f && (0,
            i.shimWeb3)(p, r);
            return p
        }
        ,
        r.setGlobalProvider = o;
        const n = e("./EIP6963.cjs")
          , s = e("./MetaMaskInpageProvider.cjs")
          , i = e("./shimWeb3.cjs");
        function o(e) {
            window.ethereum = e,
            window.dispatchEvent(new Event("ethereum#initialized"))
        }
    }
    , {
        "./EIP6963.cjs": 44,
        "./MetaMaskInpageProvider.cjs": 45,
        "./shimWeb3.cjs": 51
    }],
    49: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = {
            errors: {
                disconnected: () => "MetaMask: Disconnected from chain. Attempting to connect.",
                permanentlyDisconnected: () => "MetaMask: Disconnected from MetaMask background. Page reload required.",
                sendSiteMetadata: () => "MetaMask: Failed to send site metadata. This is an internal error, please report this bug.",
                unsupportedSync: e => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
                invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
                invalidNetworkParams: () => "MetaMask: Received invalid network parameters. Please report this bug.",
                invalidRequestArgs: () => "Expected a single, non-array, object argument.",
                invalidRequestMethod: () => "'args.method' must be a non-empty string.",
                invalidRequestParams: () => "'args.params' must be an object or array if provided.",
                invalidLoggerObject: () => "'args.logger' must be an object if provided.",
                invalidLoggerMethod: e => `'args.logger' must include required method '${e}'.`
            },
            info: {
                connected: e => `MetaMask: Connected to chain with ID "${e}".`
            },
            warnings: {
                enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102",
                sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
                events: {
                    close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",
                    data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
                    networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",
                    notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"
                },
                rpc: {
                    ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"
                },
                experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
            }
        };
        r.default = n
    }
    , {}],
    50: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createRpcWarningMiddleware = function(e) {
            const t = {
                ethDecryptDeprecation: !1,
                ethGetEncryptionPublicKeyDeprecation: !1,
                walletWatchAssetNFTExperimental: !1
            };
            return (r, n, o) => {
                t.ethDecryptDeprecation || "eth_decrypt" !== r.method ? t.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== r.method ? !t.walletWatchAssetNFTExperimental && "wallet_watchAsset" === r.method && [s.ERC721, s.ERC1155].includes(r.params?.type || "") && (e.warn(i.default.warnings.rpc.walletWatchAssetNFTExperimental),
                t.walletWatchAssetNFTExperimental = !0) : (e.warn(i.default.warnings.rpc.ethGetEncryptionPublicKeyDeprecation),
                t.ethGetEncryptionPublicKeyDeprecation = !0) : (e.warn(i.default.warnings.rpc.ethDecryptDeprecation),
                t.ethDecryptDeprecation = !0),
                o()
            }
        }
        ;
        const s = e("../constants.cjs")
          , i = n(e("../messages.cjs"))
    }
    , {
        "../constants.cjs": 47,
        "../messages.cjs": 49
    }],
    51: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.shimWeb3 = function(e, t=console) {
            let r = !1
              , n = !1;
            if (!window.web3) {
                const s = "__isMetaMaskShim__";
                let i = {
                    currentProvider: e
                };
                Object.defineProperty(i, s, {
                    value: !0,
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                }),
                i = new Proxy(i,{
                    get: (i, o, ...a) => ("currentProvider" !== o || r ? "currentProvider" === o || o === s || n || (n = !0,
                    t.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    e.request({
                        method: "metamask_logWeb3ShimUsage"
                    }).catch((e => {
                        t.debug("MetaMask: Failed to log web3 shim usage.", e)
                    }
                    ))) : (r = !0,
                    t.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")),
                    Reflect.get(i, o, ...a)),
                    set: (...e) => (t.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    Reflect.set(...e))
                }),
                Object.defineProperty(window, "web3", {
                    value: i,
                    enumerable: !1,
                    configurable: !0,
                    writable: !0
                })
            }
        }
    }
    , {}],
    52: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.sendSiteMetadata = async function(e, t) {
            try {
                const t = await async function() {
                    return {
                        name: o(window),
                        icon: await a(window)
                    }
                }();
                e.handle({
                    jsonrpc: "2.0",
                    id: 1,
                    method: "metamask_sendDomainMetadata",
                    params: t
                }, i.NOOP)
            } catch (e) {
                t.error({
                    message: s.default.errors.sendSiteMetadata(),
                    originalError: e
                })
            }
        }
        ;
        const s = n(e("./messages.cjs"))
          , i = e("./utils.cjs");
        function o(e) {
            const {document: t} = e
              , r = t.querySelector('head > meta[property="og:site_name"]');
            if (r)
                return r.content;
            const n = t.querySelector('head > meta[name="title"]');
            return n ? n.content : t.title && t.title.length > 0 ? t.title : window.location.hostname
        }
        async function a(e) {
            const {document: t} = e
              , r = t.querySelectorAll('head > link[rel~="icon"]');
            for (const e of Array.from(r))
                if (e && await c(e.href))
                    return e.href;
            return null
        }
        async function c(e) {
            return new Promise(( (t, r) => {
                try {
                    const r = document.createElement("img");
                    r.onload = () => t(!0),
                    r.onerror = () => t(!1),
                    r.src = e
                } catch (e) {
                    r(e)
                }
            }
            ))
        }
    }
    , {
        "./messages.cjs": 49,
        "./utils.cjs": 53
    }],
    53: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.NOOP = r.isValidNetworkVersion = r.isValidChainId = r.getRpcPromiseCallback = r.getDefaultExternalMiddleware = r.EMITTED_NOTIFICATIONS = void 0;
        const n = e("@metamask/json-rpc-engine")
          , s = e("@metamask/rpc-errors")
          , i = e("./middleware/createRpcWarningMiddleware.cjs");
        r.EMITTED_NOTIFICATIONS = Object.freeze(["eth_subscription"]);
        r.getDefaultExternalMiddleware = (e=console) => {
            return [(0,
            n.createIdRemapMiddleware)(), (t = e,
            (e, r, n) => {
                "string" == typeof e.method && e.method || (r.error = s.rpcErrors.invalidRequest({
                    message: "The request 'method' must be a non-empty string.",
                    data: e
                })),
                n((e => {
                    const {error: n} = r;
                    return n ? (t.warn(`MetaMask - RPC Error: ${n.message}`, n),
                    e()) : e()
                }
                ))
            }
            ), (0,
            i.createRpcWarningMiddleware)(e)];
            var t
        }
        ;
        r.getRpcPromiseCallback = (e, t, r=!0) => (n, s) => {
            n || s.error ? t(n || s.error) : !r || Array.isArray(s) ? e(s) : e(s.result)
        }
        ;
        r.isValidChainId = e => Boolean(e) && "string" == typeof e && e.startsWith("0x");
        r.isValidNetworkVersion = e => Boolean(e) && "string" == typeof e;
        r.NOOP = () => {}
    }
    , {
        "./middleware/createRpcWarningMiddleware.cjs": 50,
        "@metamask/json-rpc-engine": 7,
        "@metamask/rpc-errors": 58
    }],
    54: [function(e, t, r) {
        t.exports = e("./dist/initializeInpageProvider.cjs")
    }
    , {
        "./dist/initializeInpageProvider.cjs": 48
    }],
    55: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.EthereumProviderError = r.JsonRpcError = void 0;
        const s = e("@metamask/utils")
          , i = n(e("fast-safe-stringify"))
          , o = e("./utils.cjs");
        class a extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw new Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw new Error('"message" must be a non-empty string.');
                (0,
                o.dataHasCause)(r) ? (super(t, {
                    cause: r.cause
                }),
                (0,
                s.hasProperty)(this, "cause") || Object.assign(this, {
                    cause: r.cause
                })) : super(t),
                void 0 !== r && (this.data = r),
                this.code = e
            }
            serialize() {
                const e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data,
                (0,
                s.isPlainObject)(this.data) && (e.data.cause = (0,
                o.serializeCause)(this.data.cause))),
                this.stack && (e.stack = this.stack),
                e
            }
            toString() {
                return (0,
                i.default)(this.serialize(), c, 2)
            }
        }
        r.JsonRpcError = a;
        function c(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        r.EthereumProviderError = class extends a {
            constructor(e, t, r) {
                if (!function(e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999
                }(e))
                    throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, r)
            }
        }
    }
    , {
        "./utils.cjs": 59,
        "@metamask/utils": 79,
        "fast-safe-stringify": 104
    }],
    56: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.errorValues = r.errorCodes = void 0,
        r.errorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901
            }
        },
        r.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            }
        }
    }
    , {}],
    57: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.providerErrors = r.rpcErrors = void 0;
        const n = e("./classes.cjs")
          , s = e("./error-constants.cjs")
          , i = e("./utils.cjs");
        function o(e, t) {
            const [r,s] = c(t);
            return new n.JsonRpcError(e,r ?? (0,
            i.getMessageFromCode)(e),s)
        }
        function a(e, t) {
            const [r,s] = c(t);
            return new n.EthereumProviderError(e,r ?? (0,
            i.getMessageFromCode)(e),s)
        }
        function c(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    const {message: t, data: r} = e;
                    if (t && "string" != typeof t)
                        throw new Error("Must specify string message.");
                    return [t ?? void 0, r]
                }
            }
            return []
        }
        r.rpcErrors = {
            parse: e => o(s.errorCodes.rpc.parse, e),
            invalidRequest: e => o(s.errorCodes.rpc.invalidRequest, e),
            invalidParams: e => o(s.errorCodes.rpc.invalidParams, e),
            methodNotFound: e => o(s.errorCodes.rpc.methodNotFound, e),
            internal: e => o(s.errorCodes.rpc.internal, e),
            server: e => {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw new Error("Ethereum RPC Server errors must provide single object argument.");
                const {code: t} = e;
                if (!Number.isInteger(t) || t > -32005 || t < -32099)
                    throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                return o(t, e)
            }
            ,
            invalidInput: e => o(s.errorCodes.rpc.invalidInput, e),
            resourceNotFound: e => o(s.errorCodes.rpc.resourceNotFound, e),
            resourceUnavailable: e => o(s.errorCodes.rpc.resourceUnavailable, e),
            transactionRejected: e => o(s.errorCodes.rpc.transactionRejected, e),
            methodNotSupported: e => o(s.errorCodes.rpc.methodNotSupported, e),
            limitExceeded: e => o(s.errorCodes.rpc.limitExceeded, e)
        },
        r.providerErrors = {
            userRejectedRequest: e => a(s.errorCodes.provider.userRejectedRequest, e),
            unauthorized: e => a(s.errorCodes.provider.unauthorized, e),
            unsupportedMethod: e => a(s.errorCodes.provider.unsupportedMethod, e),
            disconnected: e => a(s.errorCodes.provider.disconnected, e),
            chainDisconnected: e => a(s.errorCodes.provider.chainDisconnected, e),
            custom: e => {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw new Error("Ethereum Provider custom errors must provide single object argument.");
                const {code: t, message: r, data: s} = e;
                if (!r || "string" != typeof r)
                    throw new Error('"message" must be a nonempty string');
                return new n.EthereumProviderError(t,r,s)
            }
        }
    }
    , {
        "./classes.cjs": 55,
        "./error-constants.cjs": 56,
        "./utils.cjs": 59
    }],
    58: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.errorCodes = r.providerErrors = r.rpcErrors = r.getMessageFromCode = r.serializeError = r.serializeCause = r.dataHasCause = r.EthereumProviderError = r.JsonRpcError = void 0;
        var n = e("./classes.cjs");
        Object.defineProperty(r, "JsonRpcError", {
            enumerable: !0,
            get: function() {
                return n.JsonRpcError
            }
        }),
        Object.defineProperty(r, "EthereumProviderError", {
            enumerable: !0,
            get: function() {
                return n.EthereumProviderError
            }
        });
        var s = e("./utils.cjs");
        Object.defineProperty(r, "dataHasCause", {
            enumerable: !0,
            get: function() {
                return s.dataHasCause
            }
        }),
        Object.defineProperty(r, "serializeCause", {
            enumerable: !0,
            get: function() {
                return s.serializeCause
            }
        }),
        Object.defineProperty(r, "serializeError", {
            enumerable: !0,
            get: function() {
                return s.serializeError
            }
        }),
        Object.defineProperty(r, "getMessageFromCode", {
            enumerable: !0,
            get: function() {
                return s.getMessageFromCode
            }
        });
        var i = e("./errors.cjs");
        Object.defineProperty(r, "rpcErrors", {
            enumerable: !0,
            get: function() {
                return i.rpcErrors
            }
        }),
        Object.defineProperty(r, "providerErrors", {
            enumerable: !0,
            get: function() {
                return i.providerErrors
            }
        });
        var o = e("./error-constants.cjs");
        Object.defineProperty(r, "errorCodes", {
            enumerable: !0,
            get: function() {
                return o.errorCodes
            }
        })
    }
    , {
        "./classes.cjs": 55,
        "./error-constants.cjs": 56,
        "./errors.cjs": 57,
        "./utils.cjs": 59
    }],
    59: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.dataHasCause = r.serializeCause = r.serializeError = r.isValidCode = r.getMessageFromCode = r.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        const n = e("@metamask/utils")
          , s = e("./error-constants.cjs")
          , i = s.errorCodes.rpc.internal
          , o = {
            code: i,
            message: a(i)
        };
        function a(e, t="Unspecified error message. This is a bug, please report it.") {
            if (c(e)) {
                const t = e.toString();
                if ((0,
                n.hasProperty)(s.errorValues, t))
                    return s.errorValues[t].message;
                if (function(e) {
                    return e >= -32099 && e <= -32e3
                }(e))
                    return r.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return t
        }
        function c(e) {
            return Number.isInteger(e)
        }
        function u(e) {
            return Array.isArray(e) ? e.map((e => (0,
            n.isValidJson)(e) ? e : (0,
            n.isObject)(e) ? l(e) : null)) : (0,
            n.isObject)(e) ? l(e) : (0,
            n.isValidJson)(e) ? e : null
        }
        function l(e) {
            return Object.getOwnPropertyNames(e).reduce(( (t, r) => {
                const s = e[r];
                return (0,
                n.isValidJson)(s) && (t[r] = s),
                t
            }
            ), {})
        }
        r.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
        r.getMessageFromCode = a,
        r.isValidCode = c,
        r.serializeError = function(e, {fallbackError: t=o, shouldIncludeStack: r=!0, shouldPreserveMessage: s=!0}={}) {
            if (!(0,
            n.isJsonRpcError)(t))
                throw new Error("Must provide fallback error with integer number code and string message.");
            const i = function(e, t, r) {
                if (e && "object" == typeof e && "serialize"in e && "function" == typeof e.serialize)
                    return e.serialize();
                if ((0,
                n.isJsonRpcError)(e))
                    return e;
                const s = function(e) {
                    if ((0,
                    n.isObject)(e) && (0,
                    n.hasProperty)(e, "message") && "string" == typeof e.message && e.message.length > 0)
                        return e.message;
                    return
                }(e)
                  , i = u(e)
                  , o = {
                    ...t,
                    ...r && s && {
                        message: s
                    },
                    data: {
                        cause: i
                    }
                };
                return o
            }(e, t, s);
            return r || delete i.stack,
            i
        }
        ,
        r.serializeCause = u,
        r.dataHasCause = function(e) {
            return (0,
            n.isObject)(e) && (0,
            n.hasProperty)(e, "cause") && (0,
            n.isObject)(e.cause)
        }
    }
    , {
        "./error-constants.cjs": 56,
        "@metamask/utils": 79
    }],
    60: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("events");
        function s(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (e) {
                setTimeout(( () => {
                    throw e
                }
                ))
            }
        }
        class i extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e;
                const n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                    e instanceof Error)
                        throw e;
                    const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
                    throw r.context = e,
                    r
                }
                const i = n[e];
                if (void 0 === i)
                    return !1;
                if ("function" == typeof i)
                    s(i, this, t);
                else {
                    const e = i.length
                      , r = function(e) {
                        const t = e.length
                          , r = new Array(t);
                        for (let n = 0; n < t; n += 1)
                            r[n] = e[n];
                        return r
                    }(i);
                    for (let n = 0; n < e; n += 1)
                        s(r[n], this, t)
                }
                return !0
            }
        }
        r.default = i
    }
    , {
        events: 102
    }],
    61: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.StructError = void 0;
        class n extends TypeError {
            constructor(e, t) {
                let r;
                const {message: n, explanation: s, ...i} = e
                  , {path: o} = e
                  , a = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
                super(s ?? a),
                null != s && (this.cause = a),
                Object.assign(this, i),
                this.name = this.constructor.name,
                this.failures = () => r ?? (r = [e, ...t()])
            }
        }
        r.StructError = n
    }
    , {}],
    62: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, s)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        s(e("./error.cjs"), r),
        s(e("./struct.cjs"), r),
        s(e("./structs/coercions.cjs"), r),
        s(e("./structs/refinements.cjs"), r),
        s(e("./structs/types.cjs"), r),
        s(e("./structs/utilities.cjs"), r)
    }
    , {
        "./error.cjs": 61,
        "./struct.cjs": 63,
        "./structs/coercions.cjs": 64,
        "./structs/refinements.cjs": 65,
        "./structs/types.cjs": 66,
        "./structs/utilities.cjs": 67
    }],
    63: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.validate = r.is = r.mask = r.create = r.assert = r.Struct = void 0;
        const n = e("./error.cjs")
          , s = e("./utils.cjs");
        function i(e, t, r) {
            const n = u(e, t, {
                message: r
            });
            if (n[0])
                throw n[0]
        }
        function o(e, t, r) {
            const n = u(e, t, {
                coerce: !0,
                message: r
            });
            if (n[0])
                throw n[0];
            return n[1]
        }
        function a(e, t, r) {
            const n = u(e, t, {
                coerce: !0,
                mask: !0,
                message: r
            });
            if (n[0])
                throw n[0];
            return n[1]
        }
        function c(e, t) {
            return !u(e, t)[0]
        }
        function u(e, t, r={}) {
            const i = (0,
            s.run)(e, t, r)
              , o = (0,
            s.shiftIterator)(i);
            if (o[0]) {
                return [new n.StructError(o[0],(function*() {
                    for (const e of i)
                        e[0] && (yield e[0])
                }
                )), void 0]
            }
            return [void 0, o[1]]
        }
        r.Struct = class {
            constructor(e) {
                const {type: t, schema: r, validator: n, refiner: i, coercer: o=(e => e), entries: a=function*() {}
                } = e;
                this.type = t,
                this.schema = r,
                this.entries = a,
                this.coercer = o,
                this.validator = n ? (e, t) => {
                    const r = n(e, t);
                    return (0,
                    s.toFailures)(r, t, this, e)
                }
                : () => [],
                this.refiner = i ? (e, t) => {
                    const r = i(e, t);
                    return (0,
                    s.toFailures)(r, t, this, e)
                }
                : () => []
            }
            assert(e, t) {
                return i(e, this, t)
            }
            create(e, t) {
                return o(e, this, t)
            }
            is(e) {
                return c(e, this)
            }
            mask(e, t) {
                return a(e, this, t)
            }
            validate(e, t={}) {
                return u(e, this, t)
            }
        }
        ,
        r.assert = i,
        r.create = o,
        r.mask = a,
        r.is = c,
        r.validate = u
    }
    , {
        "./error.cjs": 61,
        "./utils.cjs": 68
    }],
    64: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.trimmed = r.defaulted = r.coerce = void 0;
        const n = e("../struct.cjs")
          , s = e("../utils.cjs")
          , i = e("./types.cjs");
        function o(e, t, r) {
            return new n.Struct({
                ...e,
                coercer: (s, i) => (0,
                n.is)(s, t) ? e.coercer(r(s, i), i) : e.coercer(s, i)
            })
        }
        r.coerce = o,
        r.defaulted = function(e, t, r={}) {
            return o(e, (0,
            i.unknown)(), (e => {
                const n = "function" == typeof t ? t() : t;
                if (void 0 === e)
                    return n;
                if (!r.strict && (0,
                s.isPlainObject)(e) && (0,
                s.isPlainObject)(n)) {
                    const t = {
                        ...e
                    };
                    let r = !1;
                    for (const e in n)
                        void 0 === t[e] && (t[e] = n[e],
                        r = !0);
                    if (r)
                        return t
                }
                return e
            }
            ))
        }
        ,
        r.trimmed = function(e) {
            return o(e, (0,
            i.string)(), (e => e.trim()))
        }
    }
    , {
        "../struct.cjs": 63,
        "../utils.cjs": 68,
        "./types.cjs": 66
    }],
    65: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.refine = r.size = r.pattern = r.nonempty = r.min = r.max = r.empty = void 0;
        const n = e("../struct.cjs")
          , s = e("../utils.cjs");
        function i(e) {
            return e instanceof Map || e instanceof Set ? e.size : e.length
        }
        function o(e, t, r) {
            return new n.Struct({
                ...e,
                *refiner(n, i) {
                    yield*e.refiner(n, i);
                    const o = r(n, i)
                      , a = (0,
                    s.toFailures)(o, i, e, n);
                    for (const e of a)
                        yield{
                            ...e,
                            refinement: t
                        }
                }
            })
        }
        r.empty = function(e) {
            return o(e, "empty", (t => {
                const r = i(t);
                return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``
            }
            ))
        }
        ,
        r.max = function(e, t, r={}) {
            const {exclusive: n} = r;
            return o(e, "max", (r => n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
        }
        ,
        r.min = function(e, t, r={}) {
            const {exclusive: n} = r;
            return o(e, "min", (r => n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
        }
        ,
        r.nonempty = function(e) {
            return o(e, "nonempty", (t => i(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`))
        }
        ,
        r.pattern = function(e, t) {
            return o(e, "pattern", (r => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))
        }
        ,
        r.size = function(e, t, r=t) {
            const n = `Expected a ${e.type}`
              , s = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
            return o(e, "size", (e => {
                if ("number" == typeof e || e instanceof Date)
                    return t <= e && e <= r || `${n} ${s} but received \`${e}\``;
                if (e instanceof Map || e instanceof Set) {
                    const {size: i} = e;
                    return t <= i && i <= r || `${n} with a size ${s} but received one with a size of \`${i}\``
                }
                const {length: i} = e;
                return t <= i && i <= r || `${n} with a length ${s} but received one with a length of \`${i}\``
            }
            ))
        }
        ,
        r.refine = o
    }
    , {
        "../struct.cjs": 63,
        "../utils.cjs": 68
    }],
    66: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.unknown = r.union = r.type = r.tuple = r.string = r.set = r.regexp = r.record = r.optional = r.object = r.number = r.nullable = r.never = r.map = r.literal = r.intersection = r.integer = r.instance = r.func = r.enums = r.date = r.boolean = r.bigint = r.array = r.any = void 0;
        const n = e("../struct.cjs")
          , s = e("../utils.cjs")
          , i = e("./utilities.cjs");
        function o() {
            return (0,
            i.define)("never", ( () => !1))
        }
        r.any = function() {
            return (0,
            i.define)("any", ( () => !0))
        }
        ,
        r.array = function(e) {
            return new n.Struct({
                type: "array",
                schema: e,
                *entries(t) {
                    if (e && Array.isArray(t))
                        for (const [r,n] of t.entries())
                            yield[r, n, e]
                },
                coercer: e => Array.isArray(e) ? e.slice() : e,
                validator: e => Array.isArray(e) || `Expected an array value, but received: ${(0,
                s.print)(e)}`
            })
        }
        ,
        r.bigint = function() {
            return (0,
            i.define)("bigint", (e => "bigint" == typeof e))
        }
        ,
        r.boolean = function() {
            return (0,
            i.define)("boolean", (e => "boolean" == typeof e))
        }
        ,
        r.date = function() {
            return (0,
            i.define)("date", (e => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${(0,
            s.print)(e)}`))
        }
        ,
        r.enums = function(e) {
            const t = {}
              , r = e.map((e => (0,
            s.print)(e))).join();
            for (const r of e)
                t[r] = r;
            return new n.Struct({
                type: "enums",
                schema: t,
                validator: t => e.includes(t) || `Expected one of \`${r}\`, but received: ${(0,
                s.print)(t)}`
            })
        }
        ,
        r.func = function() {
            return (0,
            i.define)("func", (e => "function" == typeof e || `Expected a function, but received: ${(0,
            s.print)(e)}`))
        }
        ,
        r.instance = function(e) {
            return (0,
            i.define)("instance", (t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${(0,
            s.print)(t)}`))
        }
        ,
        r.integer = function() {
            return (0,
            i.define)("integer", (e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${(0,
            s.print)(e)}`))
        }
        ,
        r.intersection = function(e) {
            return new n.Struct({
                type: "intersection",
                schema: null,
                *entries(t, r) {
                    for (const {entries: n} of e)
                        yield*n(t, r)
                },
                *validator(t, r) {
                    for (const {validator: n} of e)
                        yield*n(t, r)
                },
                *refiner(t, r) {
                    for (const {refiner: n} of e)
                        yield*n(t, r)
                }
            })
        }
        ,
        r.literal = function(e) {
            const t = (0,
            s.print)(e)
              , r = typeof e;
            return new n.Struct({
                type: "literal",
                schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                validator: r => r === e || `Expected the literal \`${t}\`, but received: ${(0,
                s.print)(r)}`
            })
        }
        ,
        r.map = function(e, t) {
            return new n.Struct({
                type: "map",
                schema: null,
                *entries(r) {
                    if (e && t && r instanceof Map)
                        for (const [n,s] of r.entries())
                            yield[n, n, e],
                            yield[n, s, t]
                },
                coercer: e => e instanceof Map ? new Map(e) : e,
                validator: e => e instanceof Map || `Expected a \`Map\` object, but received: ${(0,
                s.print)(e)}`
            })
        }
        ,
        r.never = o,
        r.nullable = function(e) {
            return new n.Struct({
                ...e,
                validator: (t, r) => null === t || e.validator(t, r),
                refiner: (t, r) => null === t || e.refiner(t, r)
            })
        }
        ,
        r.number = function() {
            return (0,
            i.define)("number", (e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${(0,
            s.print)(e)}`))
        }
        ,
        r.object = function(e) {
            const t = e ? Object.keys(e) : []
              , r = o();
            return new n.Struct({
                type: "object",
                schema: e ?? null,
                *entries(n) {
                    if (e && (0,
                    s.isObject)(n)) {
                        const s = new Set(Object.keys(n));
                        for (const r of t)
                            s.delete(r),
                            yield[r, n[r], e[r]];
                        for (const e of s)
                            yield[e, n[e], r]
                    }
                },
                validator: e => (0,
                s.isObject)(e) || `Expected an object, but received: ${(0,
                s.print)(e)}`,
                coercer: e => (0,
                s.isObject)(e) ? {
                    ...e
                } : e
            })
        }
        ,
        r.optional = function(e) {
            return new n.Struct({
                ...e,
                validator: (t, r) => void 0 === t || e.validator(t, r),
                refiner: (t, r) => void 0 === t || e.refiner(t, r)
            })
        }
        ,
        r.record = function(e, t) {
            return new n.Struct({
                type: "record",
                schema: null,
                *entries(r) {
                    if ((0,
                    s.isObject)(r))
                        for (const n in r) {
                            const s = r[n];
                            yield[n, n, e],
                            yield[n, s, t]
                        }
                },
                validator: e => (0,
                s.isObject)(e) || `Expected an object, but received: ${(0,
                s.print)(e)}`
            })
        }
        ,
        r.regexp = function() {
            return (0,
            i.define)("regexp", (e => e instanceof RegExp))
        }
        ,
        r.set = function(e) {
            return new n.Struct({
                type: "set",
                schema: null,
                *entries(t) {
                    if (e && t instanceof Set)
                        for (const r of t)
                            yield[r, r, e]
                },
                coercer: e => e instanceof Set ? new Set(e) : e,
                validator: e => e instanceof Set || `Expected a \`Set\` object, but received: ${(0,
                s.print)(e)}`
            })
        }
        ,
        r.string = function() {
            return (0,
            i.define)("string", (e => "string" == typeof e || `Expected a string, but received: ${(0,
            s.print)(e)}`))
        }
        ,
        r.tuple = function(e) {
            const t = o();
            return new n.Struct({
                type: "tuple",
                schema: null,
                *entries(r) {
                    if (Array.isArray(r)) {
                        const n = Math.max(e.length, r.length);
                        for (let s = 0; s < n; s++)
                            yield[s, r[s], e[s] || t]
                    }
                },
                validator: e => Array.isArray(e) || `Expected an array, but received: ${(0,
                s.print)(e)}`
            })
        }
        ,
        r.type = function(e) {
            const t = Object.keys(e);
            return new n.Struct({
                type: "type",
                schema: e,
                *entries(r) {
                    if ((0,
                    s.isObject)(r))
                        for (const n of t)
                            yield[n, r[n], e[n]]
                },
                validator: e => (0,
                s.isObject)(e) || `Expected an object, but received: ${(0,
                s.print)(e)}`,
                coercer: e => (0,
                s.isObject)(e) ? {
                    ...e
                } : e
            })
        }
        ,
        r.union = function(e) {
            const t = e.map((e => e.type)).join(" | ");
            return new n.Struct({
                type: "union",
                schema: null,
                coercer(t) {
                    for (const r of e) {
                        const [e,n] = r.validate(t, {
                            coerce: !0
                        });
                        if (!e)
                            return n
                    }
                    return t
                },
                validator(r, n) {
                    const i = [];
                    for (const t of e) {
                        const [...e] = (0,
                        s.run)(r, t, n)
                          , [o] = e;
                        if (!o?.[0])
                            return [];
                        for (const [t] of e)
                            t && i.push(t)
                    }
                    return [`Expected the value to satisfy a union of \`${t}\`, but received: ${(0,
                    s.print)(r)}`, ...i]
                }
            })
        }
        ,
        r.unknown = function() {
            return (0,
            i.define)("unknown", ( () => !0))
        }
    }
    , {
        "../struct.cjs": 63,
        "../utils.cjs": 68,
        "./utilities.cjs": 67
    }],
    67: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.pick = r.partial = r.omit = r.lazy = r.dynamic = r.deprecated = r.define = r.assign = void 0;
        const n = e("../struct.cjs")
          , s = e("./types.cjs");
        r.assign = function(...e) {
            const t = "type" === e[0]?.type
              , r = e.map(( ({schema: e}) => e))
              , n = Object.assign({}, ...r);
            return t ? (0,
            s.type)(n) : (0,
            s.object)(n)
        }
        ,
        r.define = function(e, t) {
            return new n.Struct({
                type: e,
                schema: null,
                validator: t
            })
        }
        ,
        r.deprecated = function(e, t) {
            return new n.Struct({
                ...e,
                refiner: (t, r) => void 0 === t || e.refiner(t, r),
                validator: (r, n) => void 0 === r || (t(r, n),
                e.validator(r, n))
            })
        }
        ,
        r.dynamic = function(e) {
            return new n.Struct({
                type: "dynamic",
                schema: null,
                *entries(t, r) {
                    const n = e(t, r);
                    yield*n.entries(t, r)
                },
                validator: (t, r) => e(t, r).validator(t, r),
                coercer: (t, r) => e(t, r).coercer(t, r),
                refiner: (t, r) => e(t, r).refiner(t, r)
            })
        }
        ,
        r.lazy = function(e) {
            let t;
            return new n.Struct({
                type: "lazy",
                schema: null,
                *entries(r, n) {
                    t ?? (t = e()),
                    yield*t.entries(r, n)
                },
                validator: (r, n) => (t ?? (t = e()),
                t.validator(r, n)),
                coercer: (r, n) => (t ?? (t = e()),
                t.coercer(r, n)),
                refiner: (r, n) => (t ?? (t = e()),
                t.refiner(r, n))
            })
        }
        ,
        r.omit = function(e, t) {
            const {schema: r} = e
              , n = {
                ...r
            };
            for (const e of t)
                delete n[e];
            return "type" === e.type ? (0,
            s.type)(n) : (0,
            s.object)(n)
        }
        ,
        r.partial = function(e) {
            const t = e instanceof n.Struct
              , r = t ? {
                ...e.schema
            } : {
                ...e
            };
            for (const e in r)
                r[e] = (0,
                s.optional)(r[e]);
            return t && "type" === e.type ? (0,
            s.type)(r) : (0,
            s.object)(r)
        }
        ,
        r.pick = function(e, t) {
            const {schema: r} = e
              , n = {};
            for (const e of t)
                n[e] = r[e];
            return "type" === e.type ? (0,
            s.type)(n) : (0,
            s.object)(n)
        }
    }
    , {
        "../struct.cjs": 63,
        "./types.cjs": 66
    }],
    68: [function(e, t, r) {
        "use strict";
        function n(e) {
            return "object" == typeof e && null !== e
        }
        function s(e) {
            return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
        }
        function i(e, t, r, n) {
            if (!0 === e)
                return;
            !1 === e ? e = {} : "string" == typeof e && (e = {
                message: e
            });
            const {path: i, branch: o} = t
              , {type: a} = r
              , {refinement: c, message: u=`Expected a value of type \`${a}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${s(n)}\``} = e;
            return {
                value: n,
                type: a,
                refinement: c,
                key: i[i.length - 1],
                path: i,
                branch: o,
                ...e,
                message: u
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.run = r.toFailures = r.toFailure = r.shiftIterator = r.print = r.isPlainObject = r.isObject = void 0,
        r.isObject = n,
        r.isPlainObject = function(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            const t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        ,
        r.print = s,
        r.shiftIterator = function(e) {
            const {done: t, value: r} = e.next();
            return t ? void 0 : r
        }
        ,
        r.toFailure = i,
        r.toFailures = function*(e, t, r, s) {
            (function(e) {
                return n(e) && "function" == typeof e[Symbol.iterator]
            }
            )(e) || (e = [e]);
            for (const n of e) {
                const e = i(n, t, r, s);
                e && (yield e)
            }
        }
        ,
        r.run = function *e(t, r, s={}) {
            const {path: i=[], branch: o=[t], coerce: a=!1, mask: c=!1} = s
              , u = {
                path: i,
                branch: o
            };
            if (a && (t = r.coercer(t, u),
            c && "type" !== r.type && n(r.schema) && n(t) && !Array.isArray(t)))
                for (const e in t)
                    void 0 === r.schema[e] && delete t[e];
            let l = "valid";
            for (const e of r.validator(t, u))
                e.explanation = s.message,
                l = "not_valid",
                yield[e, void 0];
            for (let[f,d,p] of r.entries(t, u)) {
                const r = e(d, p, {
                    path: void 0 === f ? i : [...i, f],
                    branch: void 0 === f ? o : [...o, d],
                    coerce: a,
                    mask: c,
                    message: s.message
                });
                for (const e of r)
                    e[0] ? (l = null === e[0].refinement || void 0 === e[0].refinement ? "not_valid" : "not_refined",
                    yield[e[0], void 0]) : a && (d = e[1],
                    void 0 === f ? t = d : t instanceof Map ? t.set(f, d) : t instanceof Set ? t.add(d) : n(t) && (void 0 !== d || f in t) && (t[f] = d))
            }
            if ("not_valid" !== l)
                for (const e of r.refiner(t, u))
                    e.explanation = s.message,
                    l = "not_refined",
                    yield[e, void 0];
            "valid" === l && (yield[void 0, t])
        }
    }
    , {}],
    69: [function(e, t, r) {
        arguments[4][22][0].apply(r, arguments)
    }
    , {
        "./errors.cjs": 77,
        "@metamask/superstruct": 62,
        dup: 22
    }],
    70: [function(e, t, r) {
        arguments[4][23][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "@metamask/superstruct": 62,
        dup: 23
    }],
    71: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.createDataView = r.concatBytes = r.valueToBytes = r.base64ToBytes = r.stringToBytes = r.numberToBytes = r.signedBigIntToBytes = r.bigIntToBytes = r.hexToBytes = r.bytesToBase64 = r.bytesToString = r.bytesToNumber = r.bytesToSignedBigInt = r.bytesToBigInt = r.bytesToHex = r.assertIsBytes = r.isBytes = void 0;
                const n = e("@scure/base")
                  , s = e("./assert.cjs")
                  , i = e("./hex.cjs")
                  , o = 48
                  , a = 58
                  , c = 87;
                const u = function() {
                    const e = [];
                    return () => {
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++)
                                e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();
                function l(e) {
                    return e instanceof Uint8Array
                }
                function f(e) {
                    (0,
                    s.assert)(l(e), "Value must be a Uint8Array.")
                }
                function d(e) {
                    if (f(e),
                    0 === e.length)
                        return "0x";
                    const t = u()
                      , r = new Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        r[n] = t[e[n]];
                    return (0,
                    i.add0x)(r.join(""))
                }
                function p(e) {
                    f(e);
                    const t = d(e);
                    return BigInt(t)
                }
                function h(e) {
                    if ("0x" === e?.toLowerCase?.())
                        return new Uint8Array;
                    (0,
                    i.assertIsHexString)(e);
                    const t = (0,
                    i.remove0x)(e).toLowerCase()
                      , r = t.length % 2 == 0 ? t : `0${t}`
                      , n = new Uint8Array(r.length / 2);
                    for (let e = 0; e < n.length; e++) {
                        const t = r.charCodeAt(2 * e)
                          , s = r.charCodeAt(2 * e + 1)
                          , i = t - (t < a ? o : c)
                          , u = s - (s < a ? o : c);
                        n[e] = 16 * i + u
                    }
                    return n
                }
                function g(e) {
                    (0,
                    s.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    s.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
                    return h(e.toString(16))
                }
                function m(e) {
                    (0,
                    s.assert)("number" == typeof e, "Value must be a number."),
                    (0,
                    s.assert)(e >= 0, "Value must be a non-negative number."),
                    (0,
                    s.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
                    return h(e.toString(16))
                }
                function y(e) {
                    return (0,
                    s.assert)("string" == typeof e, "Value must be a string."),
                    (new TextEncoder).encode(e)
                }
                function b(e) {
                    if ("bigint" == typeof e)
                        return g(e);
                    if ("number" == typeof e)
                        return m(e);
                    if ("string" == typeof e)
                        return e.startsWith("0x") ? h(e) : y(e);
                    if (l(e))
                        return e;
                    throw new TypeError(`Unsupported value type: "${typeof e}".`)
                }
                r.isBytes = l,
                r.assertIsBytes = f,
                r.bytesToHex = d,
                r.bytesToBigInt = p,
                r.bytesToSignedBigInt = function(e) {
                    f(e);
                    let t = BigInt(0);
                    for (const r of e)
                        t = (t << BigInt(8)) + BigInt(r);
                    return BigInt.asIntN(8 * e.length, t)
                }
                ,
                r.bytesToNumber = function(e) {
                    f(e);
                    const t = p(e);
                    return (0,
                    s.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
                    Number(t)
                }
                ,
                r.bytesToString = function(e) {
                    return f(e),
                    (new TextDecoder).decode(e)
                }
                ,
                r.bytesToBase64 = function(e) {
                    return f(e),
                    n.base64.encode(e)
                }
                ,
                r.hexToBytes = h,
                r.bigIntToBytes = g,
                r.signedBigIntToBytes = function(e, t) {
                    (0,
                    s.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    s.assert)("number" == typeof t, "Byte length must be a number."),
                    (0,
                    s.assert)(t > 0, "Byte length must be greater than 0."),
                    (0,
                    s.assert)(function(e, t) {
                        (0,
                        s.assert)(t > 0);
                        const r = e >> BigInt(31);
                        return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1))
                    }(e, t), "Byte length is too small to represent the given value.");
                    let r = e;
                    const n = new Uint8Array(t);
                    for (let e = 0; e < n.length; e++)
                        n[e] = Number(BigInt.asUintN(8, r)),
                        r >>= BigInt(8);
                    return n.reverse()
                }
                ,
                r.numberToBytes = m,
                r.stringToBytes = y,
                r.base64ToBytes = function(e) {
                    return (0,
                    s.assert)("string" == typeof e, "Value must be a string."),
                    n.base64.decode(e)
                }
                ,
                r.valueToBytes = b,
                r.concatBytes = function(e) {
                    const t = new Array(e.length);
                    let r = 0;
                    for (let n = 0; n < e.length; n++) {
                        const s = b(e[n]);
                        t[n] = s,
                        r += s.length
                    }
                    const n = new Uint8Array(r);
                    for (let e = 0, r = 0; e < t.length; e++)
                        n.set(t[e], r),
                        r += t[e].length;
                    return n
                }
                ,
                r.createDataView = function(e) {
                    if (void 0 !== t && e instanceof t) {
                        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        return new DataView(t)
                    }
                    return new DataView(e.buffer,e.byteOffset,e.byteLength)
                }
            }
            ).call(this)
        }
        ).call(this, e("buffer").Buffer)
    }
    , {
        "./assert.cjs": 69,
        "./hex.cjs": 78,
        "@scure/base": 95,
        buffer: 98
    }],
    72: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.toCaipChainId = r.parseCaipAccountId = r.parseCaipChainId = r.isCaipAssetId = r.isCaipAssetType = r.isCaipAccountAddress = r.isCaipAccountId = r.isCaipReference = r.isCaipNamespace = r.isCaipChainId = r.KnownCaipNamespace = r.CaipAssetIdStruct = r.CaipAssetTypeStruct = r.CaipAccountAddressStruct = r.CaipAccountIdStruct = r.CaipReferenceStruct = r.CaipNamespaceStruct = r.CaipChainIdStruct = r.CAIP_ASSET_ID_REGEX = r.CAIP_ASSET_TYPE_REGEX = r.CAIP_ACCOUNT_ADDRESS_REGEX = r.CAIP_ACCOUNT_ID_REGEX = r.CAIP_REFERENCE_REGEX = r.CAIP_NAMESPACE_REGEX = r.CAIP_CHAIN_ID_REGEX = void 0;
        const n = e("@metamask/superstruct");
        function s(e) {
            return (0,
            n.is)(e, r.CaipNamespaceStruct)
        }
        function i(e) {
            return (0,
            n.is)(e, r.CaipReferenceStruct)
        }
        r.CAIP_CHAIN_ID_REGEX = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u,
        r.CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u,
        r.CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u,
        r.CAIP_ACCOUNT_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u,
        r.CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u,
        r.CAIP_ASSET_TYPE_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})$/u,
        r.CAIP_ASSET_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})\/(?<tokenId>[-.%a-zA-Z0-9]{1,78})$/u,
        r.CaipChainIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_CHAIN_ID_REGEX),
        r.CaipNamespaceStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_NAMESPACE_REGEX),
        r.CaipReferenceStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_REFERENCE_REGEX),
        r.CaipAccountIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ACCOUNT_ID_REGEX),
        r.CaipAccountAddressStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ACCOUNT_ADDRESS_REGEX),
        r.CaipAssetTypeStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ASSET_TYPE_REGEX),
        r.CaipAssetIdStruct = (0,
        n.pattern)((0,
        n.string)(), r.CAIP_ASSET_ID_REGEX),
        function(e) {
            e.Bip122 = "bip122",
            e.Solana = "solana",
            e.Eip155 = "eip155",
            e.Wallet = "wallet"
        }(r.KnownCaipNamespace || (r.KnownCaipNamespace = {})),
        r.isCaipChainId = function(e) {
            return (0,
            n.is)(e, r.CaipChainIdStruct)
        }
        ,
        r.isCaipNamespace = s,
        r.isCaipReference = i,
        r.isCaipAccountId = function(e) {
            return (0,
            n.is)(e, r.CaipAccountIdStruct)
        }
        ,
        r.isCaipAccountAddress = function(e) {
            return (0,
            n.is)(e, r.CaipAccountAddressStruct)
        }
        ,
        r.isCaipAssetType = function(e) {
            return (0,
            n.is)(e, r.CaipAssetTypeStruct)
        }
        ,
        r.isCaipAssetId = function(e) {
            return (0,
            n.is)(e, r.CaipAssetIdStruct)
        }
        ,
        r.parseCaipChainId = function(e) {
            const t = r.CAIP_CHAIN_ID_REGEX.exec(e);
            if (!t?.groups)
                throw new Error("Invalid CAIP chain ID.");
            return {
                namespace: t.groups.namespace,
                reference: t.groups.reference
            }
        }
        ,
        r.parseCaipAccountId = function(e) {
            const t = r.CAIP_ACCOUNT_ID_REGEX.exec(e);
            if (!t?.groups)
                throw new Error("Invalid CAIP account ID.");
            return {
                address: t.groups.accountAddress,
                chainId: t.groups.chainId,
                chain: {
                    namespace: t.groups.namespace,
                    reference: t.groups.reference
                }
            }
        }
        ,
        r.toCaipChainId = function(e, t) {
            if (!s(e))
                throw new Error(`Invalid "namespace", must match: ${r.CAIP_NAMESPACE_REGEX.toString()}`);
            if (!i(t))
                throw new Error(`Invalid "reference", must match: ${r.CAIP_REFERENCE_REGEX.toString()}`);
            return `${e}:${t}`
        }
    }
    , {
        "@metamask/superstruct": 62
    }],
    73: [function(e, t, r) {
        arguments[4][26][0].apply(r, arguments)
    }
    , {
        "./base64.cjs": 70,
        "@metamask/superstruct": 62,
        dup: 26
    }],
    74: [function(e, t, r) {
        arguments[4][27][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "./bytes.cjs": 71,
        "./hex.cjs": 78,
        "@metamask/superstruct": 62,
        dup: 27
    }],
    75: [function(e, t, r) {
        arguments[4][28][0].apply(r, arguments)
    }
    , {
        dup: 28
    }],
    76: [function(e, t, r) {
        arguments[4][29][0].apply(r, arguments)
    }
    , {
        dup: 29
    }],
    77: [function(e, t, r) {
        arguments[4][30][0].apply(r, arguments)
    }
    , {
        "./misc.cjs": 83,
        dup: 30,
        "pony-cause": 110
    }],
    78: [function(e, t, r) {
        arguments[4][31][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "./bytes.cjs": 71,
        "@metamask/superstruct": 62,
        "@noble/hashes/sha3": 93,
        dup: 31
    }],
    79: [function(e, t, r) {
        arguments[4][32][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "./base64.cjs": 70,
        "./bytes.cjs": 71,
        "./caip-types.cjs": 72,
        "./checksum.cjs": 73,
        "./coercers.cjs": 74,
        "./collections.cjs": 75,
        "./encryption-types.cjs": 76,
        "./errors.cjs": 77,
        "./hex.cjs": 78,
        "./json.cjs": 80,
        "./keyring.cjs": 81,
        "./logging.cjs": 82,
        "./misc.cjs": 83,
        "./number.cjs": 84,
        "./opaque.cjs": 85,
        "./promise.cjs": 86,
        "./time.cjs": 87,
        "./transaction-types.cjs": 88,
        "./versions.cjs": 89,
        dup: 32
    }],
    80: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getJsonRpcIdValidator = r.assertIsJsonRpcError = r.isJsonRpcError = r.assertIsJsonRpcFailure = r.isJsonRpcFailure = r.assertIsJsonRpcSuccess = r.isJsonRpcSuccess = r.assertIsJsonRpcResponse = r.isJsonRpcResponse = r.assertIsPendingJsonRpcResponse = r.isPendingJsonRpcResponse = r.JsonRpcResponseStruct = r.JsonRpcFailureStruct = r.JsonRpcSuccessStruct = r.PendingJsonRpcResponseStruct = r.assertIsJsonRpcRequest = r.isJsonRpcRequest = r.assertIsJsonRpcNotification = r.isJsonRpcNotification = r.JsonRpcNotificationStruct = r.JsonRpcRequestStruct = r.JsonRpcParamsStruct = r.JsonRpcErrorStruct = r.JsonRpcIdStruct = r.JsonRpcVersionStruct = r.jsonrpc2 = r.getJsonSize = r.getSafeJson = r.isValidJson = r.JsonStruct = r.UnsafeJsonStruct = r.exactOptional = r.object = void 0;
        const n = e("@metamask/superstruct")
          , s = e("./assert.cjs")
          , i = e("./misc.cjs");
        function o({path: e, branch: t}) {
            const r = e[e.length - 1];
            return (0,
            i.hasProperty)(t[t.length - 2], r)
        }
        function a(e) {
            return new n.Struct({
                ...e,
                type: `optional ${e.type}`,
                validator: (t, r) => !o(r) || e.validator(t, r),
                refiner: (t, r) => !o(r) || e.refiner(t, r)
            })
        }
        function c(e) {
            if (null === e || "boolean" == typeof e || "string" == typeof e)
                return !0;
            if ("number" == typeof e && Number.isFinite(e))
                return !0;
            if ("object" == typeof e) {
                let t = !0;
                if (Array.isArray(e)) {
                    for (let r = 0; r < e.length; r++)
                        if (!c(e[r])) {
                            t = !1;
                            break
                        }
                    return t
                }
                const r = Object.entries(e);
                for (let e = 0; e < r.length; e++)
                    if ("string" != typeof r[e][0] || !c(r[e][1])) {
                        t = !1;
                        break
                    }
                return t
            }
            return !1
        }
        function u(e) {
            return (0,
            n.create)(e, r.JsonStruct)
        }
        r.object = e => (0,
        n.object)(e),
        r.exactOptional = a,
        r.UnsafeJsonStruct = (0,
        n.define)("JSON", (e => c(e))),
        r.JsonStruct = (0,
        n.coerce)(r.UnsafeJsonStruct, (0,
        n.any)(), (e => ((0,
        s.assertStruct)(e, r.UnsafeJsonStruct),
        JSON.parse(JSON.stringify(e, ( (e, t) => {
            if ("__proto__" !== e && "constructor" !== e)
                return t
        }
        )))))),
        r.isValidJson = function(e) {
            try {
                return u(e),
                !0
            } catch {
                return !1
            }
        }
        ,
        r.getSafeJson = u,
        r.getJsonSize = function(e) {
            (0,
            s.assertStruct)(e, r.JsonStruct, "Invalid JSON value");
            const t = JSON.stringify(e);
            return (new TextEncoder).encode(t).byteLength
        }
        ,
        r.jsonrpc2 = "2.0",
        r.JsonRpcVersionStruct = (0,
        n.literal)(r.jsonrpc2),
        r.JsonRpcIdStruct = (0,
        n.nullable)((0,
        n.union)([(0,
        n.number)(), (0,
        n.string)()])),
        r.JsonRpcErrorStruct = (0,
        r.object)({
            code: (0,
            n.integer)(),
            message: (0,
            n.string)(),
            data: a(r.JsonStruct),
            stack: a((0,
            n.string)())
        }),
        r.JsonRpcParamsStruct = (0,
        n.union)([(0,
        n.record)((0,
        n.string)(), r.JsonStruct), (0,
        n.array)(r.JsonStruct)]),
        r.JsonRpcRequestStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: a(r.JsonRpcParamsStruct)
        }),
        r.JsonRpcNotificationStruct = (0,
        r.object)({
            jsonrpc: r.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: a(r.JsonRpcParamsStruct)
        }),
        r.isJsonRpcNotification = function(e) {
            return (0,
            n.is)(e, r.JsonRpcNotificationStruct)
        }
        ,
        r.assertIsJsonRpcNotification = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", t)
        }
        ,
        r.isJsonRpcRequest = function(e) {
            return (0,
            n.is)(e, r.JsonRpcRequestStruct)
        }
        ,
        r.assertIsJsonRpcRequest = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcRequestStruct, "Invalid JSON-RPC request", t)
        }
        ,
        r.PendingJsonRpcResponseStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: (0,
            n.optional)((0,
            n.unknown)()),
            error: (0,
            n.optional)(r.JsonRpcErrorStruct)
        }),
        r.JsonRpcSuccessStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: r.JsonStruct
        }),
        r.JsonRpcFailureStruct = (0,
        r.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            error: r.JsonRpcErrorStruct
        }),
        r.JsonRpcResponseStruct = (0,
        n.union)([r.JsonRpcSuccessStruct, r.JsonRpcFailureStruct]),
        r.isPendingJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.PendingJsonRpcResponseStruct)
        }
        ,
        r.assertIsPendingJsonRpcResponse = function(e, t) {
            (0,
            s.assertStruct)(e, r.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", t)
        }
        ,
        r.isJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.JsonRpcResponseStruct)
        }
        ,
        r.assertIsJsonRpcResponse = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcResponseStruct, "Invalid JSON-RPC response", t)
        }
        ,
        r.isJsonRpcSuccess = function(e) {
            return (0,
            n.is)(e, r.JsonRpcSuccessStruct)
        }
        ,
        r.assertIsJsonRpcSuccess = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", t)
        }
        ,
        r.isJsonRpcFailure = function(e) {
            return (0,
            n.is)(e, r.JsonRpcFailureStruct)
        }
        ,
        r.assertIsJsonRpcFailure = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", t)
        }
        ,
        r.isJsonRpcError = function(e) {
            return (0,
            n.is)(e, r.JsonRpcErrorStruct)
        }
        ,
        r.assertIsJsonRpcError = function(e, t) {
            (0,
            s.assertStruct)(e, r.JsonRpcErrorStruct, "Invalid JSON-RPC error", t)
        }
        ,
        r.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = {
                permitEmptyString: !0,
                permitFractions: !1,
                permitNull: !0,
                ...e
            };
            return e => Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e)
        }
    }
    , {
        "./assert.cjs": 69,
        "./misc.cjs": 83,
        "@metamask/superstruct": 62
    }],
    81: [function(e, t, r) {
        arguments[4][34][0].apply(r, arguments)
    }
    , {
        dup: 34
    }],
    82: [function(e, t, r) {
        arguments[4][35][0].apply(r, arguments)
    }
    , {
        debug: 100,
        dup: 35
    }],
    83: [function(e, t, r) {
        arguments[4][36][0].apply(r, arguments)
    }
    , {
        dup: 36
    }],
    84: [function(e, t, r) {
        arguments[4][37][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "./hex.cjs": 78,
        dup: 37
    }],
    85: [function(e, t, r) {
        arguments[4][38][0].apply(r, arguments)
    }
    , {
        dup: 38
    }],
    86: [function(e, t, r) {
        arguments[4][39][0].apply(r, arguments)
    }
    , {
        dup: 39
    }],
    87: [function(e, t, r) {
        arguments[4][40][0].apply(r, arguments)
    }
    , {
        dup: 40
    }],
    88: [function(e, t, r) {
        arguments[4][41][0].apply(r, arguments)
    }
    , {
        dup: 41
    }],
    89: [function(e, t, r) {
        arguments[4][42][0].apply(r, arguments)
    }
    , {
        "./assert.cjs": 69,
        "@metamask/superstruct": 62,
        dup: 42,
        semver: 157
    }],
    90: [function(e, t, r) {
        "use strict";
        function n(e) {
            if (!Number.isSafeInteger(e) || e < 0)
                throw new Error(`positive integer expected, not ${e}`)
        }
        function s(e) {
            if ("boolean" != typeof e)
                throw new Error(`boolean expected, not ${e}`)
        }
        function i(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        function o(e, ...t) {
            if (!i(e))
                throw new Error("Uint8Array expected");
            if (t.length > 0 && !t.includes(e.length))
                throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
        }
        function a(e) {
            if ("function" != typeof e || "function" != typeof e.create)
                throw new Error("Hash should be wrapped by utils.wrapConstructor");
            n(e.outputLen),
            n(e.blockLen)
        }
        function c(e, t=!0) {
            if (e.destroyed)
                throw new Error("Hash instance has been destroyed");
            if (t && e.finished)
                throw new Error("Hash#digest() has already been called")
        }
        function u(e, t) {
            o(e);
            const r = t.outputLen;
            if (e.length < r)
                throw new Error(`digestInto() expects output buffer of length at least ${r}`)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.output = r.exists = r.hash = r.bytes = r.bool = r.number = r.isBytes = void 0,
        r.number = n,
        r.bool = s,
        r.isBytes = i,
        r.bytes = o,
        r.hash = a,
        r.exists = c,
        r.output = u;
        const l = {
            number: n,
            bool: s,
            bytes: o,
            hash: a,
            exists: c,
            output: u
        };
        r.default = l
    }
    , {}],
    91: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.add5L = r.add5H = r.add4H = r.add4L = r.add3H = r.add3L = r.add = r.rotlBL = r.rotlBH = r.rotlSL = r.rotlSH = r.rotr32L = r.rotr32H = r.rotrBL = r.rotrBH = r.rotrSL = r.rotrSH = r.shrSL = r.shrSH = r.toBig = r.split = r.fromBig = void 0;
        const n = BigInt(2 ** 32 - 1)
          , s = BigInt(32);
        function i(e, t=!1) {
            return t ? {
                h: Number(e & n),
                l: Number(e >> s & n)
            } : {
                h: 0 | Number(e >> s & n),
                l: 0 | Number(e & n)
            }
        }
        function o(e, t=!1) {
            let r = new Uint32Array(e.length)
              , n = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
                const {h: o, l: a} = i(e[s], t);
                [r[s],n[s]] = [o, a]
            }
            return [r, n]
        }
        r.fromBig = i,
        r.split = o;
        const a = (e, t) => BigInt(e >>> 0) << s | BigInt(t >>> 0);
        r.toBig = a;
        const c = (e, t, r) => e >>> r;
        r.shrSH = c;
        const u = (e, t, r) => e << 32 - r | t >>> r;
        r.shrSL = u;
        const l = (e, t, r) => e >>> r | t << 32 - r;
        r.rotrSH = l;
        const f = (e, t, r) => e << 32 - r | t >>> r;
        r.rotrSL = f;
        const d = (e, t, r) => e << 64 - r | t >>> r - 32;
        r.rotrBH = d;
        const p = (e, t, r) => e >>> r - 32 | t << 64 - r;
        r.rotrBL = p;
        const h = (e, t) => t;
        r.rotr32H = h;
        const g = (e, t) => e;
        r.rotr32L = g;
        const m = (e, t, r) => e << r | t >>> 32 - r;
        r.rotlSH = m;
        const y = (e, t, r) => t << r | e >>> 32 - r;
        r.rotlSL = y;
        const b = (e, t, r) => t << r - 32 | e >>> 64 - r;
        r.rotlBH = b;
        const w = (e, t, r) => e << r - 32 | t >>> 64 - r;
        function v(e, t, r, n) {
            const s = (t >>> 0) + (n >>> 0);
            return {
                h: e + r + (s / 2 ** 32 | 0) | 0,
                l: 0 | s
            }
        }
        r.rotlBL = w,
        r.add = v;
        const E = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
        r.add3L = E;
        const _ = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
        r.add3H = _;
        const S = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
        r.add4L = S;
        const j = (e, t, r, n, s) => t + r + n + s + (e / 2 ** 32 | 0) | 0;
        r.add4H = j;
        const I = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0);
        r.add5L = I;
        const R = (e, t, r, n, s, i) => t + r + n + s + i + (e / 2 ** 32 | 0) | 0;
        r.add5H = R;
        const M = {
            fromBig: i,
            split: o,
            toBig: a,
            shrSH: c,
            shrSL: u,
            rotrSH: l,
            rotrSL: f,
            rotrBH: d,
            rotrBL: p,
            rotr32H: h,
            rotr32L: g,
            rotlSH: m,
            rotlSL: y,
            rotlBH: b,
            rotlBL: w,
            add: v,
            add3L: E,
            add3H: _,
            add4L: S,
            add4H: j,
            add5H: R,
            add5L: I
        };
        r.default = M
    }
    , {}],
    92: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.crypto = void 0,
        r.crypto = "object" == typeof globalThis && "crypto"in globalThis ? globalThis.crypto : void 0
    }
    , {}],
    93: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.shake256 = r.shake128 = r.keccak_512 = r.keccak_384 = r.keccak_256 = r.keccak_224 = r.sha3_512 = r.sha3_384 = r.sha3_256 = r.sha3_224 = r.Keccak = r.keccakP = void 0;
        const n = e("./_assert.js")
          , s = e("./_u64.js")
          , i = e("./utils.js")
          , o = []
          , a = []
          , c = []
          , u = BigInt(0)
          , l = BigInt(1)
          , f = BigInt(2)
          , d = BigInt(7)
          , p = BigInt(256)
          , h = BigInt(113);
        for (let e = 0, t = l, r = 1, n = 0; e < 24; e++) {
            [r,n] = [n, (2 * r + 3 * n) % 5],
            o.push(2 * (5 * n + r)),
            a.push((e + 1) * (e + 2) / 2 % 64);
            let s = u;
            for (let e = 0; e < 7; e++)
                t = (t << l ^ (t >> d) * h) % p,
                t & f && (s ^= l << (l << BigInt(e)) - l);
            c.push(s)
        }
        const [g,m] = (0,
        s.split)(c, !0)
          , y = (e, t, r) => r > 32 ? (0,
        s.rotlBH)(e, t, r) : (0,
        s.rotlSH)(e, t, r)
          , b = (e, t, r) => r > 32 ? (0,
        s.rotlBL)(e, t, r) : (0,
        s.rotlSL)(e, t, r);
        function w(e, t=24) {
            const r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                    r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                    const n = (t + 8) % 10
                      , s = (t + 2) % 10
                      , i = r[s]
                      , o = r[s + 1]
                      , a = y(i, o, 1) ^ r[n]
                      , c = b(i, o, 1) ^ r[n + 1];
                    for (let r = 0; r < 50; r += 10)
                        e[t + r] ^= a,
                        e[t + r + 1] ^= c
                }
                let t = e[2]
                  , s = e[3];
                for (let r = 0; r < 24; r++) {
                    const n = a[r]
                      , i = y(t, s, n)
                      , c = b(t, s, n)
                      , u = o[r];
                    t = e[u],
                    s = e[u + 1],
                    e[u] = i,
                    e[u + 1] = c
                }
                for (let t = 0; t < 50; t += 10) {
                    for (let n = 0; n < 10; n++)
                        r[n] = e[t + n];
                    for (let n = 0; n < 10; n++)
                        e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                }
                e[0] ^= g[n],
                e[1] ^= m[n]
            }
            r.fill(0)
        }
        r.keccakP = w;
        class v extends i.Hash {
            constructor(e, t, r, s=!1, o=24) {
                if (super(),
                this.blockLen = e,
                this.suffix = t,
                this.outputLen = r,
                this.enableXOF = s,
                this.rounds = o,
                this.pos = 0,
                this.posOut = 0,
                this.finished = !1,
                this.destroyed = !1,
                (0,
                n.number)(r),
                0 >= this.blockLen || this.blockLen >= 200)
                    throw new Error("Sha3 supports only keccak-f1600 function");
                this.state = new Uint8Array(200),
                this.state32 = (0,
                i.u32)(this.state)
            }
            keccak() {
                i.isLE || (0,
                i.byteSwap32)(this.state32),
                w(this.state32, this.rounds),
                i.isLE || (0,
                i.byteSwap32)(this.state32),
                this.posOut = 0,
                this.pos = 0
            }
            update(e) {
                (0,
                n.exists)(this);
                const {blockLen: t, state: r} = this
                  , s = (e = (0,
                i.toBytes)(e)).length;
                for (let n = 0; n < s; ) {
                    const i = Math.min(t - this.pos, s - n);
                    for (let t = 0; t < i; t++)
                        r[this.pos++] ^= e[n++];
                    this.pos === t && this.keccak()
                }
                return this
            }
            finish() {
                if (this.finished)
                    return;
                this.finished = !0;
                const {state: e, suffix: t, pos: r, blockLen: n} = this;
                e[r] ^= t,
                128 & t && r === n - 1 && this.keccak(),
                e[n - 1] ^= 128,
                this.keccak()
            }
            writeInto(e) {
                (0,
                n.exists)(this, !1),
                (0,
                n.bytes)(e),
                this.finish();
                const t = this.state
                  , {blockLen: r} = this;
                for (let n = 0, s = e.length; n < s; ) {
                    this.posOut >= r && this.keccak();
                    const i = Math.min(r - this.posOut, s - n);
                    e.set(t.subarray(this.posOut, this.posOut + i), n),
                    this.posOut += i,
                    n += i
                }
                return e
            }
            xofInto(e) {
                if (!this.enableXOF)
                    throw new Error("XOF is not possible for this instance");
                return this.writeInto(e)
            }
            xof(e) {
                return (0,
                n.number)(e),
                this.xofInto(new Uint8Array(e))
            }
            digestInto(e) {
                if ((0,
                n.output)(e, this),
                this.finished)
                    throw new Error("digest() was already called");
                return this.writeInto(e),
                this.destroy(),
                e
            }
            digest() {
                return this.digestInto(new Uint8Array(this.outputLen))
            }
            destroy() {
                this.destroyed = !0,
                this.state.fill(0)
            }
            _cloneInto(e) {
                const {blockLen: t, suffix: r, outputLen: n, rounds: s, enableXOF: i} = this;
                return e || (e = new v(t,r,n,i,s)),
                e.state32.set(this.state32),
                e.pos = this.pos,
                e.posOut = this.posOut,
                e.finished = this.finished,
                e.rounds = s,
                e.suffix = r,
                e.outputLen = n,
                e.enableXOF = i,
                e.destroyed = this.destroyed,
                e
            }
        }
        r.Keccak = v;
        const E = (e, t, r) => (0,
        i.wrapConstructor)(( () => new v(t,e,r)));
        r.sha3_224 = E(6, 144, 28),
        r.sha3_256 = E(6, 136, 32),
        r.sha3_384 = E(6, 104, 48),
        r.sha3_512 = E(6, 72, 64),
        r.keccak_224 = E(1, 144, 28),
        r.keccak_256 = E(1, 136, 32),
        r.keccak_384 = E(1, 104, 48),
        r.keccak_512 = E(1, 72, 64);
        const _ = (e, t, r) => (0,
        i.wrapXOFConstructorWithOpts)(( (n={}) => new v(t,e,void 0 === n.dkLen ? r : n.dkLen,!0)));
        r.shake128 = _(31, 168, 16),
        r.shake256 = _(31, 136, 32)
    }
    , {
        "./_assert.js": 90,
        "./_u64.js": 91,
        "./utils.js": 94
    }],
    94: [function(e, t, r) {
        "use strict";
        /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.randomBytes = r.wrapXOFConstructorWithOpts = r.wrapConstructorWithOpts = r.wrapConstructor = r.checkOpts = r.Hash = r.concatBytes = r.toBytes = r.utf8ToBytes = r.asyncLoop = r.nextTick = r.hexToBytes = r.bytesToHex = r.byteSwap32 = r.byteSwapIfBE = r.byteSwap = r.isLE = r.rotl = r.rotr = r.createView = r.u32 = r.u8 = r.isBytes = void 0;
        const n = e("@noble/hashes/crypto")
          , s = e("./_assert.js");
        r.isBytes = function(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        ;
        r.u8 = e => new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
        r.u32 = e => new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength / 4));
        r.createView = e => new DataView(e.buffer,e.byteOffset,e.byteLength);
        r.rotr = (e, t) => e << 32 - t | e >>> t;
        r.rotl = (e, t) => e << t | e >>> 32 - t >>> 0,
        r.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
        r.byteSwap = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255,
        r.byteSwapIfBE = r.isLE ? e => e : e => (0,
        r.byteSwap)(e),
        r.byteSwap32 = function(e) {
            for (let t = 0; t < e.length; t++)
                e[t] = (0,
                r.byteSwap)(e[t])
        }
        ;
        const i = Array.from({
            length: 256
        }, ( (e, t) => t.toString(16).padStart(2, "0")));
        r.bytesToHex = function(e) {
            (0,
            s.bytes)(e);
            let t = "";
            for (let r = 0; r < e.length; r++)
                t += i[e[r]];
            return t
        }
        ;
        const o = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };
        function a(e) {
            return e >= o._0 && e <= o._9 ? e - o._0 : e >= o._A && e <= o._F ? e - (o._A - 10) : e >= o._a && e <= o._f ? e - (o._a - 10) : void 0
        }
        r.hexToBytes = function(e) {
            if ("string" != typeof e)
                throw new Error("hex string expected, got " + typeof e);
            const t = e.length
              , r = t / 2;
            if (t % 2)
                throw new Error("padded hex string expected, got unpadded hex of length " + t);
            const n = new Uint8Array(r);
            for (let t = 0, s = 0; t < r; t++,
            s += 2) {
                const r = a(e.charCodeAt(s))
                  , i = a(e.charCodeAt(s + 1));
                if (void 0 === r || void 0 === i) {
                    const t = e[s] + e[s + 1];
                    throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + s)
                }
                n[t] = 16 * r + i
            }
            return n
        }
        ;
        function c(e) {
            if ("string" != typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array((new TextEncoder).encode(e))
        }
        function u(e) {
            return "string" == typeof e && (e = c(e)),
            (0,
            s.bytes)(e),
            e
        }
        r.nextTick = async () => {}
        ,
        r.asyncLoop = async function(e, t, n) {
            let s = Date.now();
            for (let i = 0; i < e; i++) {
                n(i);
                const e = Date.now() - s;
                e >= 0 && e < t || (await (0,
                r.nextTick)(),
                s += e)
            }
        }
        ,
        r.utf8ToBytes = c,
        r.toBytes = u,
        r.concatBytes = function(...e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
                const n = e[r];
                (0,
                s.bytes)(n),
                t += n.length
            }
            const r = new Uint8Array(t);
            for (let t = 0, n = 0; t < e.length; t++) {
                const s = e[t];
                r.set(s, n),
                n += s.length
            }
            return r
        }
        ;
        r.Hash = class {
            clone() {
                return this._cloneInto()
            }
        }
        ;
        const l = {}.toString;
        r.checkOpts = function(e, t) {
            if (void 0 !== t && "[object Object]" !== l.call(t))
                throw new Error("Options should be object or undefined");
            return Object.assign(e, t)
        }
        ,
        r.wrapConstructor = function(e) {
            const t = t => e().update(u(t)).digest()
              , r = e();
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = () => e(),
            t
        }
        ,
        r.wrapConstructorWithOpts = function(e) {
            const t = (t, r) => e(r).update(u(t)).digest()
              , r = e({});
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = t => e(t),
            t
        }
        ,
        r.wrapXOFConstructorWithOpts = function(e) {
            const t = (t, r) => e(r).update(u(t)).digest()
              , r = e({});
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = t => e(t),
            t
        }
        ,
        r.randomBytes = function(e=32) {
            if (n.crypto && "function" == typeof n.crypto.getRandomValues)
                return n.crypto.getRandomValues(new Uint8Array(e));
            throw new Error("crypto.getRandomValues must be defined")
        }
    }
    , {
        "./_assert.js": 90,
        "@noble/hashes/crypto": 92
    }],
    95: [function(e, t, r) {
        "use strict";
        /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        function n(e) {
            if (!Number.isSafeInteger(e))
                throw new Error(`Wrong integer: ${e}`)
        }
        function s(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        function i(...e) {
            const t = e => e
              , r = (e, t) => r => e(t(r));
            return {
                encode: e.map((e => e.encode)).reduceRight(r, t),
                decode: e.map((e => e.decode)).reduce(r, t)
            }
        }
        function o(e) {
            return {
                encode: t => {
                    if (!Array.isArray(t) || t.length && "number" != typeof t[0])
                        throw new Error("alphabet.encode input should be an array of numbers");
                    return t.map((t => {
                        if (n(t),
                        t < 0 || t >= e.length)
                            throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                        return e[t]
                    }
                    ))
                }
                ,
                decode: t => {
                    if (!Array.isArray(t) || t.length && "string" != typeof t[0])
                        throw new Error("alphabet.decode input should be array of strings");
                    return t.map((t => {
                        if ("string" != typeof t)
                            throw new Error(`alphabet.decode: not string element=${t}`);
                        const r = e.indexOf(t);
                        if (-1 === r)
                            throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
                        return r
                    }
                    ))
                }
            }
        }
        function a(e="") {
            if ("string" != typeof e)
                throw new Error("join separator should be string");
            return {
                encode: t => {
                    if (!Array.isArray(t) || t.length && "string" != typeof t[0])
                        throw new Error("join.encode input should be array of strings");
                    for (let e of t)
                        if ("string" != typeof e)
                            throw new Error(`join.encode: non-string input=${e}`);
                    return t.join(e)
                }
                ,
                decode: t => {
                    if ("string" != typeof t)
                        throw new Error("join.decode input should be string");
                    return t.split(e)
                }
            }
        }
        function c(e, t="=") {
            if (n(e),
            "string" != typeof t)
                throw new Error("padding chr should be string");
            return {
                encode(r) {
                    if (!Array.isArray(r) || r.length && "string" != typeof r[0])
                        throw new Error("padding.encode input should be array of strings");
                    for (let e of r)
                        if ("string" != typeof e)
                            throw new Error(`padding.encode: non-string input=${e}`);
                    for (; r.length * e % 8; )
                        r.push(t);
                    return r
                },
                decode(r) {
                    if (!Array.isArray(r) || r.length && "string" != typeof r[0])
                        throw new Error("padding.encode input should be array of strings");
                    for (let e of r)
                        if ("string" != typeof e)
                            throw new Error(`padding.decode: non-string input=${e}`);
                    let n = r.length;
                    if (n * e % 8)
                        throw new Error("Invalid padding: string should have whole number of bytes");
                    for (; n > 0 && r[n - 1] === t; n--)
                        if (!((n - 1) * e % 8))
                            throw new Error("Invalid padding: string has too much padding");
                    return r.slice(0, n)
                }
            }
        }
        function u(e) {
            if ("function" != typeof e)
                throw new Error("normalize fn should be function");
            return {
                encode: e => e,
                decode: t => e(t)
            }
        }
        function l(e, t, r) {
            if (t < 2)
                throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
            if (r < 2)
                throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
            if (!Array.isArray(e))
                throw new Error("convertRadix: data should be array");
            if (!e.length)
                return [];
            let s = 0;
            const i = []
              , o = Array.from(e);
            for (o.forEach((e => {
                if (n(e),
                e < 0 || e >= t)
                    throw new Error(`Wrong integer: ${e}`)
            }
            )); ; ) {
                let e = 0
                  , n = !0;
                for (let i = s; i < o.length; i++) {
                    const a = o[i]
                      , c = t * e + a;
                    if (!Number.isSafeInteger(c) || t * e / t !== e || c - a != t * e)
                        throw new Error("convertRadix: carry overflow");
                    e = c % r;
                    const u = Math.floor(c / r);
                    if (o[i] = u,
                    !Number.isSafeInteger(u) || u * r + e !== c)
                        throw new Error("convertRadix: carry overflow");
                    n && (u ? n = !1 : s = i)
                }
                if (i.push(e),
                n)
                    break
            }
            for (let t = 0; t < e.length - 1 && 0 === e[t]; t++)
                i.push(0);
            return i.reverse()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.bytes = r.stringToBytes = r.str = r.bytesToString = r.hex = r.utf8 = r.bech32m = r.bech32 = r.base58check = r.createBase58check = r.base58xmr = r.base58xrp = r.base58flickr = r.base58 = r.base64urlnopad = r.base64url = r.base64nopad = r.base64 = r.base32crockford = r.base32hexnopad = r.base32hex = r.base32nopad = r.base32 = r.base16 = r.utils = r.assertNumber = void 0,
        r.assertNumber = n;
        const f = (e, t) => t ? f(t, e % t) : e
          , d = (e, t) => e + (t - f(e, t));
        function p(e, t, r, s) {
            if (!Array.isArray(e))
                throw new Error("convertRadix2: data should be array");
            if (t <= 0 || t > 32)
                throw new Error(`convertRadix2: wrong from=${t}`);
            if (r <= 0 || r > 32)
                throw new Error(`convertRadix2: wrong to=${r}`);
            if (d(t, r) > 32)
                throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${d(t, r)}`);
            let i = 0
              , o = 0;
            const a = 2 ** r - 1
              , c = [];
            for (const s of e) {
                if (n(s),
                s >= 2 ** t)
                    throw new Error(`convertRadix2: invalid data word=${s} from=${t}`);
                if (i = i << t | s,
                o + t > 32)
                    throw new Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
                for (o += t; o >= r; o -= r)
                    c.push((i >> o - r & a) >>> 0);
                i &= 2 ** o - 1
            }
            if (i = i << r - o & a,
            !s && o >= t)
                throw new Error("Excess padding");
            if (!s && i)
                throw new Error(`Non-zero padding: ${i}`);
            return s && o > 0 && c.push(i >>> 0),
            c
        }
        function h(e) {
            return n(e),
            {
                encode: t => {
                    if (!s(t))
                        throw new Error("radix.encode input should be Uint8Array");
                    return l(Array.from(t), 256, e)
                }
                ,
                decode: t => {
                    if (!Array.isArray(t) || t.length && "number" != typeof t[0])
                        throw new Error("radix.decode input should be array of numbers");
                    return Uint8Array.from(l(t, e, 256))
                }
            }
        }
        function g(e, t=!1) {
            if (n(e),
            e <= 0 || e > 32)
                throw new Error("radix2: bits should be in (0..32]");
            if (d(8, e) > 32 || d(e, 8) > 32)
                throw new Error("radix2: carry overflow");
            return {
                encode: r => {
                    if (!s(r))
                        throw new Error("radix2.encode input should be Uint8Array");
                    return p(Array.from(r), 8, e, !t)
                }
                ,
                decode: r => {
                    if (!Array.isArray(r) || r.length && "number" != typeof r[0])
                        throw new Error("radix2.decode input should be array of numbers");
                    return Uint8Array.from(p(r, e, 8, t))
                }
            }
        }
        function m(e) {
            if ("function" != typeof e)
                throw new Error("unsafeWrapper fn should be function");
            return function(...t) {
                try {
                    return e.apply(null, t)
                } catch (e) {}
            }
        }
        function y(e, t) {
            if (n(e),
            "function" != typeof t)
                throw new Error("checksum fn should be function");
            return {
                encode(r) {
                    if (!s(r))
                        throw new Error("checksum.encode: input should be Uint8Array");
                    const n = t(r).slice(0, e)
                      , i = new Uint8Array(r.length + e);
                    return i.set(r),
                    i.set(n, r.length),
                    i
                },
                decode(r) {
                    if (!s(r))
                        throw new Error("checksum.decode: input should be Uint8Array");
                    const n = r.slice(0, -e)
                      , i = t(n).slice(0, e)
                      , o = r.slice(-e);
                    for (let t = 0; t < e; t++)
                        if (i[t] !== o[t])
                            throw new Error("Invalid checksum");
                    return n
                }
            }
        }
        r.utils = {
            alphabet: o,
            chain: i,
            checksum: y,
            convertRadix: l,
            convertRadix2: p,
            radix: h,
            radix2: g,
            join: a,
            padding: c
        },
        r.base16 = i(g(4), o("0123456789ABCDEF"), a("")),
        r.base32 = i(g(5), o("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), c(5), a("")),
        r.base32nopad = i(g(5), o("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), a("")),
        r.base32hex = i(g(5), o("0123456789ABCDEFGHIJKLMNOPQRSTUV"), c(5), a("")),
        r.base32hexnopad = i(g(5), o("0123456789ABCDEFGHIJKLMNOPQRSTUV"), a("")),
        r.base32crockford = i(g(5), o("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), a(""), u((e => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")))),
        r.base64 = i(g(6), o("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), c(6), a("")),
        r.base64nopad = i(g(6), o("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), a("")),
        r.base64url = i(g(6), o("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), c(6), a("")),
        r.base64urlnopad = i(g(6), o("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), a(""));
        const b = e => i(h(58), o(e), a(""));
        r.base58 = b("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        r.base58flickr = b("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
        r.base58xrp = b("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
        const w = [0, 2, 3, 5, 6, 7, 9, 10, 11];
        r.base58xmr = {
            encode(e) {
                let t = "";
                for (let n = 0; n < e.length; n += 8) {
                    const s = e.subarray(n, n + 8);
                    t += r.base58.encode(s).padStart(w[s.length], "1")
                }
                return t
            },
            decode(e) {
                let t = [];
                for (let n = 0; n < e.length; n += 11) {
                    const s = e.slice(n, n + 11)
                      , i = w.indexOf(s.length)
                      , o = r.base58.decode(s);
                    for (let e = 0; e < o.length - i; e++)
                        if (0 !== o[e])
                            throw new Error("base58xmr: wrong padding");
                    t = t.concat(Array.from(o.slice(o.length - i)))
                }
                return Uint8Array.from(t)
            }
        };
        r.createBase58check = e => i(y(4, (t => e(e(t)))), r.base58),
        r.base58check = r.createBase58check;
        const v = i(o("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), a(""))
          , E = [996825010, 642813549, 513874426, 1027748829, 705979059];
        function _(e) {
            const t = e >> 25;
            let r = (33554431 & e) << 5;
            for (let e = 0; e < E.length; e++)
                1 == (t >> e & 1) && (r ^= E[e]);
            return r
        }
        function S(e, t, r=1) {
            const n = e.length;
            let s = 1;
            for (let t = 0; t < n; t++) {
                const r = e.charCodeAt(t);
                if (r < 33 || r > 126)
                    throw new Error(`Invalid prefix (${e})`);
                s = _(s) ^ r >> 5
            }
            s = _(s);
            for (let t = 0; t < n; t++)
                s = _(s) ^ 31 & e.charCodeAt(t);
            for (let e of t)
                s = _(s) ^ e;
            for (let e = 0; e < 6; e++)
                s = _(s);
            return s ^= r,
            v.encode(p([s % 2 ** 30], 30, 5, !1))
        }
        function j(e) {
            const t = "bech32" === e ? 1 : 734539939
              , r = g(5)
              , n = r.decode
              , s = r.encode
              , i = m(n);
            function o(e, r=90) {
                if ("string" != typeof e)
                    throw new Error("bech32.decode input should be string, not " + typeof e);
                if (e.length < 8 || !1 !== r && e.length > r)
                    throw new TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
                const n = e.toLowerCase();
                if (e !== n && e !== e.toUpperCase())
                    throw new Error("String must be lowercase or uppercase");
                const s = n.lastIndexOf("1");
                if (0 === s || -1 === s)
                    throw new Error('Letter "1" must be present between prefix and data only');
                const i = n.slice(0, s)
                  , o = n.slice(s + 1);
                if (o.length < 6)
                    throw new Error("Data must be at least 6 characters long");
                const a = v.decode(o).slice(0, -6)
                  , c = S(i, a, t);
                if (!o.endsWith(c))
                    throw new Error(`Invalid checksum in ${e}: expected "${c}"`);
                return {
                    prefix: i,
                    words: a
                }
            }
            return {
                encode: function(e, r, n=90) {
                    if ("string" != typeof e)
                        throw new Error("bech32.encode prefix should be string, not " + typeof e);
                    if (!Array.isArray(r) || r.length && "number" != typeof r[0])
                        throw new Error("bech32.encode words should be array of numbers, not " + typeof r);
                    if (0 === e.length)
                        throw new TypeError(`Invalid prefix length ${e.length}`);
                    const s = e.length + 7 + r.length;
                    if (!1 !== n && s > n)
                        throw new TypeError(`Length ${s} exceeds limit ${n}`);
                    const i = e.toLowerCase()
                      , o = S(i, r, t);
                    return `${i}1${v.encode(r)}${o}`
                },
                decode: o,
                decodeToBytes: function(e) {
                    const {prefix: t, words: r} = o(e, !1);
                    return {
                        prefix: t,
                        words: r,
                        bytes: n(r)
                    }
                },
                decodeUnsafe: m(o),
                fromWords: n,
                fromWordsUnsafe: i,
                toWords: s
            }
        }
        r.bech32 = j("bech32"),
        r.bech32m = j("bech32m"),
        r.utf8 = {
            encode: e => (new TextDecoder).decode(e),
            decode: e => (new TextEncoder).encode(e)
        },
        r.hex = i(g(4), o("0123456789abcdef"), a(""), u((e => {
            if ("string" != typeof e || e.length % 2)
                throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
            return e.toLowerCase()
        }
        )));
        const I = {
            utf8: r.utf8,
            hex: r.hex,
            base16: r.base16,
            base32: r.base32,
            base64: r.base64,
            base64url: r.base64url,
            base58: r.base58,
            base58xmr: r.base58xmr
        }
          , R = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
        r.bytesToString = (e, t) => {
            if ("string" != typeof e || !I.hasOwnProperty(e))
                throw new TypeError(R);
            if (!s(t))
                throw new TypeError("bytesToString() expects Uint8Array");
            return I[e].encode(t)
        }
        ,
        r.str = r.bytesToString;
        r.stringToBytes = (e, t) => {
            if (!I.hasOwnProperty(e))
                throw new TypeError(R);
            if ("string" != typeof t)
                throw new TypeError("stringToBytes() expects string");
            return I[e].decode(t)
        }
        ,
        r.bytes = r.stringToBytes
    }
    , {}],
    96: [function(e, t, r) {
        "use strict";
        r.byteLength = function(e) {
            var t = c(e)
              , r = t[0]
              , n = t[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        r.toByteArray = function(e) {
            var t, r, n = c(e), o = n[0], a = n[1], u = new i(function(e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, o, a)), l = 0, f = a > 0 ? o - 4 : o;
            for (r = 0; r < f; r += 4)
                t = s[e.charCodeAt(r)] << 18 | s[e.charCodeAt(r + 1)] << 12 | s[e.charCodeAt(r + 2)] << 6 | s[e.charCodeAt(r + 3)],
                u[l++] = t >> 16 & 255,
                u[l++] = t >> 8 & 255,
                u[l++] = 255 & t;
            2 === a && (t = s[e.charCodeAt(r)] << 2 | s[e.charCodeAt(r + 1)] >> 4,
            u[l++] = 255 & t);
            1 === a && (t = s[e.charCodeAt(r)] << 10 | s[e.charCodeAt(r + 1)] << 4 | s[e.charCodeAt(r + 2)] >> 2,
            u[l++] = t >> 8 & 255,
            u[l++] = 255 & t);
            return u
        }
        ,
        r.fromByteArray = function(e) {
            for (var t, r = e.length, s = r % 3, i = [], o = 16383, a = 0, c = r - s; a < c; a += o)
                i.push(u(e, a, a + o > c ? c : a + o));
            1 === s ? (t = e[r - 1],
            i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === s && (t = (e[r - 2] << 8) + e[r - 1],
            i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return i.join("")
        }
        ;
        for (var n = [], s = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a)
            n[a] = o[a],
            s[o.charCodeAt(a)] = a;
        function c(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t),
            [r, r === t ? 0 : 4 - r % 4]
        }
        function u(e, t, r) {
            for (var s, i, o = [], a = t; a < r; a += 3)
                s = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                o.push(n[(i = s) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
            return o.join("")
        }
        s["-".charCodeAt(0)] = 62,
        s["_".charCodeAt(0)] = 63
    }
    , {}],
    97: [function(e, t, r) {}
    , {}],
    98: [function(e, t, r) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        "use strict";
        var n = e("base64-js")
          , s = e("ieee754");
        r.Buffer = a,
        r.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return a.alloc(+e)
        }
        ,
        r.INSPECT_MAX_BYTES = 50;
        var i = 2147483647;
        function o(e) {
            if (e > i)
                throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = a.prototype,
            t
        }
        function a(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return l(e)
            }
            return c(e, t, r)
        }
        function c(e, t, r) {
            if ("string" == typeof e)
                return function(e, t) {
                    "string" == typeof t && "" !== t || (t = "utf8");
                    if (!a.isEncoding(t))
                        throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | p(e, t)
                      , n = o(r)
                      , s = n.write(e, t);
                    s !== r && (n = n.slice(0, s));
                    return n
                }(e, t);
            if (ArrayBuffer.isView(e))
                return f(e);
            if (null == e)
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (z(e, ArrayBuffer) || e && z(e.buffer, ArrayBuffer))
                return function(e, t, r) {
                    if (t < 0 || e.byteLength < t)
                        throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                        throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r);
                    return n.__proto__ = a.prototype,
                    n
                }(e, t, r);
            if ("number" == typeof e)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = e.valueOf && e.valueOf();
            if (null != n && n !== e)
                return a.from(n, t, r);
            var s = function(e) {
                if (a.isBuffer(e)) {
                    var t = 0 | d(e.length)
                      , r = o(t);
                    return 0 === r.length || e.copy(r, 0, 0, t),
                    r
                }
                if (void 0 !== e.length)
                    return "number" != typeof e.length || F(e.length) ? o(0) : f(e);
                if ("Buffer" === e.type && Array.isArray(e.data))
                    return f(e.data)
            }(e);
            if (s)
                return s;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                return a.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }
        function u(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be of type number');
            if (e < 0)
                throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }
        function l(e) {
            return u(e),
            o(e < 0 ? 0 : 0 | d(e))
        }
        function f(e) {
            for (var t = e.length < 0 ? 0 : 0 | d(e.length), r = o(t), n = 0; n < t; n += 1)
                r[n] = 255 & e[n];
            return r
        }
        function d(e) {
            if (e >= i)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
            return 0 | e
        }
        function p(e, t) {
            if (a.isBuffer(e))
                return e.length;
            if (ArrayBuffer.isView(e) || z(e, ArrayBuffer))
                return e.byteLength;
            if ("string" != typeof e)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var r = e.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r)
                return 0;
            for (var s = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return $(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return U(e).length;
                default:
                    if (s)
                        return n ? -1 : $(e).length;
                    t = ("" + t).toLowerCase(),
                    s = !0
                }
        }
        function h(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return A(this, t, r);
                case "utf8":
                case "utf-8":
                    return I(this, t, r);
                case "ascii":
                    return M(this, t, r);
                case "latin1":
                case "binary":
                    return C(this, t, r);
                case "base64":
                    return j(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return O(this, t, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    n = !0
                }
        }
        function g(e, t, r) {
            var n = e[t];
            e[t] = e[r],
            e[r] = n
        }
        function m(e, t, r, n, s) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            F(r = +r) && (r = s ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (s)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!s)
                    return -1;
                r = 0
            }
            if ("string" == typeof t && (t = a.from(t, n)),
            a.isBuffer(t))
                return 0 === t.length ? -1 : y(e, t, r, n, s);
            if ("number" == typeof t)
                return t &= 255,
                "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, s);
            throw new TypeError("val must be string, number or Buffer")
        }
        function y(e, t, r, n, s) {
            var i, o = 1, a = e.length, c = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                o = 2,
                a /= 2,
                c /= 2,
                r /= 2
            }
            function u(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            if (s) {
                var l = -1;
                for (i = r; i < a; i++)
                    if (u(e, i) === u(t, -1 === l ? 0 : i - l)) {
                        if (-1 === l && (l = i),
                        i - l + 1 === c)
                            return l * o
                    } else
                        -1 !== l && (i -= i - l),
                        l = -1
            } else
                for (r + c > a && (r = a - c),
                i = r; i >= 0; i--) {
                    for (var f = !0, d = 0; d < c; d++)
                        if (u(e, i + d) !== u(t, d)) {
                            f = !1;
                            break
                        }
                    if (f)
                        return i
                }
            return -1
        }
        function b(e, t, r, n) {
            r = Number(r) || 0;
            var s = e.length - r;
            n ? (n = Number(n)) > s && (n = s) : n = s;
            var i = t.length;
            n > i / 2 && (n = i / 2);
            for (var o = 0; o < n; ++o) {
                var a = parseInt(t.substr(2 * o, 2), 16);
                if (F(a))
                    return o;
                e[r + o] = a
            }
            return o
        }
        function w(e, t, r, n) {
            return B($(t, e.length - r), e, r, n)
        }
        function v(e, t, r, n) {
            return B(function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }
        function E(e, t, r, n) {
            return v(e, t, r, n)
        }
        function _(e, t, r, n) {
            return B(U(t), e, r, n)
        }
        function S(e, t, r, n) {
            return B(function(e, t) {
                for (var r, n, s, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                    n = (r = e.charCodeAt(o)) >> 8,
                    s = r % 256,
                    i.push(s),
                    i.push(n);
                return i
            }(t, e.length - r), e, r, n)
        }
        function j(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }
        function I(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], s = t; s < r; ) {
                var i, o, a, c, u = e[s], l = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (s + f <= r)
                    switch (f) {
                    case 1:
                        u < 128 && (l = u);
                        break;
                    case 2:
                        128 == (192 & (i = e[s + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
                        break;
                    case 3:
                        i = e[s + 1],
                        o = e[s + 2],
                        128 == (192 & i) && 128 == (192 & o) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & o) > 2047 && (c < 55296 || c > 57343) && (l = c);
                        break;
                    case 4:
                        i = e[s + 1],
                        o = e[s + 2],
                        a = e[s + 3],
                        128 == (192 & i) && 128 == (192 & o) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & a) > 65535 && c < 1114112 && (l = c)
                    }
                null === l ? (l = 65533,
                f = 1) : l > 65535 && (l -= 65536,
                n.push(l >>> 10 & 1023 | 55296),
                l = 56320 | 1023 & l),
                n.push(l),
                s += f
            }
            return function(e) {
                var t = e.length;
                if (t <= R)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , n = 0;
                for (; n < t; )
                    r += String.fromCharCode.apply(String, e.slice(n, n += R));
                return r
            }(n)
        }
        r.kMaxLength = i,
        a.TYPED_ARRAY_SUPPORT = function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo()
            } catch (e) {
                return !1
            }
        }(),
        a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(a.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(a.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.byteOffset
            }
        }),
        "undefined" != typeof Symbol && null != Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }),
        a.poolSize = 8192,
        a.from = function(e, t, r) {
            return c(e, t, r)
        }
        ,
        a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        a.alloc = function(e, t, r) {
            return function(e, t, r) {
                return u(e),
                e <= 0 ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
            }(e, t, r)
        }
        ,
        a.allocUnsafe = function(e) {
            return l(e)
        }
        ,
        a.allocUnsafeSlow = function(e) {
            return l(e)
        }
        ,
        a.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== a.prototype
        }
        ,
        a.compare = function(e, t) {
            if (z(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            z(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            for (var r = e.length, n = t.length, s = 0, i = Math.min(r, n); s < i; ++s)
                if (e[s] !== t[s]) {
                    r = e[s],
                    n = t[s];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        a.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return a.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var n = a.allocUnsafe(t)
              , s = 0;
            for (r = 0; r < e.length; ++r) {
                var i = e[r];
                if (z(i, Uint8Array) && (i = a.from(i)),
                !a.isBuffer(i))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(n, s),
                s += i.length
            }
            return n
        }
        ,
        a.byteLength = p,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                g(this, t, t + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                g(this, t, t + 3),
                g(this, t + 1, t + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : h.apply(this, arguments)
        }
        ,
        a.prototype.toLocaleString = a.prototype.toString,
        a.prototype.equals = function(e) {
            if (!a.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === a.compare(this, e)
        }
        ,
        a.prototype.inspect = function() {
            var e = ""
              , t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
            this.length > t && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ,
        a.prototype.compare = function(e, t, r, n, s) {
            if (z(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === s && (s = this.length),
            t < 0 || r > e.length || n < 0 || s > this.length)
                throw new RangeError("out of range index");
            if (n >= s && t >= r)
                return 0;
            if (n >= s)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var i = (s >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), c = Math.min(i, o), u = this.slice(n, s), l = e.slice(t, r), f = 0; f < c; ++f)
                if (u[f] !== l[f]) {
                    i = u[f],
                    o = l[f];
                    break
                }
            return i < o ? -1 : o < i ? 1 : 0
        }
        ,
        a.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        a.prototype.indexOf = function(e, t, r) {
            return m(this, e, t, r, !0)
        }
        ,
        a.prototype.lastIndexOf = function(e, t, r) {
            return m(this, e, t, r, !1)
        }
        ,
        a.prototype.write = function(e, t, r, n) {
            if (void 0 === t)
                n = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" == typeof t)
                n = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0,
                isFinite(r) ? (r >>>= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var s = this.length - t;
            if ((void 0 === r || r > s) && (r = s),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1; ; )
                switch (n) {
                case "hex":
                    return b(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return w(this, e, t, r);
                case "ascii":
                    return v(this, e, t, r);
                case "latin1":
                case "binary":
                    return E(this, e, t, r);
                case "base64":
                    return _(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, r);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    i = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var R = 4096;
        function M(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var s = t; s < r; ++s)
                n += String.fromCharCode(127 & e[s]);
            return n
        }
        function C(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var s = t; s < r; ++s)
                n += String.fromCharCode(e[s]);
            return n
        }
        function A(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var s = "", i = t; i < r; ++i)
                s += D(e[i]);
            return s
        }
        function O(e, t, r) {
            for (var n = e.slice(t, r), s = "", i = 0; i < n.length; i += 2)
                s += String.fromCharCode(n[i] + 256 * n[i + 1]);
            return s
        }
        function N(e, t, r) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function P(e, t, r, n, s, i) {
            if (!a.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > s || t < i)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length)
                throw new RangeError("Index out of range")
        }
        function T(e, t, r, n, s, i) {
            if (r + n > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function x(e, t, r, n, i) {
            return t = +t,
            r >>>= 0,
            i || T(e, 0, r, 4),
            s.write(e, t, r, n, 23, 4),
            r + 4
        }
        function L(e, t, r, n, i) {
            return t = +t,
            r >>>= 0,
            i || T(e, 0, r, 8),
            s.write(e, t, r, n, 52, 8),
            r + 8
        }
        a.prototype.slice = function(e, t) {
            var r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
            var n = this.subarray(e, t);
            return n.__proto__ = a.prototype,
            n
        }
        ,
        a.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || N(e, t, this.length);
            for (var n = this[e], s = 1, i = 0; ++i < t && (s *= 256); )
                n += this[e + i] * s;
            return n
        }
        ,
        a.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || N(e, t, this.length);
            for (var n = this[e + --t], s = 1; t > 0 && (s *= 256); )
                n += this[e + --t] * s;
            return n
        }
        ,
        a.prototype.readUInt8 = function(e, t) {
            return e >>>= 0,
            t || N(e, 1, this.length),
            this[e]
        }
        ,
        a.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0,
            t || N(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0,
            t || N(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        a.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        a.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        a.prototype.readIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || N(e, t, this.length);
            for (var n = this[e], s = 1, i = 0; ++i < t && (s *= 256); )
                n += this[e + i] * s;
            return n >= (s *= 128) && (n -= Math.pow(2, 8 * t)),
            n
        }
        ,
        a.prototype.readIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || N(e, t, this.length);
            for (var n = t, s = 1, i = this[e + --n]; n > 0 && (s *= 256); )
                i += this[e + --n] * s;
            return i >= (s *= 128) && (i -= Math.pow(2, 8 * t)),
            i
        }
        ,
        a.prototype.readInt8 = function(e, t) {
            return e >>>= 0,
            t || N(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        a.prototype.readInt16LE = function(e, t) {
            e >>>= 0,
            t || N(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt16BE = function(e, t) {
            e >>>= 0,
            t || N(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt32LE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        a.prototype.readFloatLE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            s.read(this, e, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(e, t) {
            return e >>>= 0,
            t || N(e, 4, this.length),
            s.read(this, e, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0,
            t || N(e, 8, this.length),
            s.read(this, e, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0,
            t || N(e, 8, this.length),
            s.read(this, e, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var s = 1
              , i = 0;
            for (this[t] = 255 & e; ++i < r && (s *= 256); )
                this[t + i] = e / s & 255;
            return t + r
        }
        ,
        a.prototype.writeUIntBE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var s = r - 1
              , i = 1;
            for (this[t + s] = 255 & e; --s >= 0 && (i *= 256); )
                this[t + s] = e / i & 255;
            return t + r
        }
        ,
        a.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 1, 255, 0),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 2, 65535, 0),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 2, 65535, 0),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 4, 4294967295, 0),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var s = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, s - 1, -s)
            }
            var i = 0
              , o = 1
              , a = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                this[t + i] = (e / o | 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var s = Math.pow(2, 8 * r - 1);
                P(this, e, t, r, s - 1, -s)
            }
            var i = r - 1
              , o = 1
              , a = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                this[t + i] = (e / o | 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 2, 32767, -32768),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 2, 32767, -32768),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24,
            t + 4
        }
        ,
        a.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || P(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeFloatLE = function(e, t, r) {
            return x(this, e, t, !0, r)
        }
        ,
        a.prototype.writeFloatBE = function(e, t, r) {
            return x(this, e, t, !1, r)
        }
        ,
        a.prototype.writeDoubleLE = function(e, t, r) {
            return L(this, e, t, !0, r)
        }
        ,
        a.prototype.writeDoubleBE = function(e, t, r) {
            return L(this, e, t, !1, r)
        }
        ,
        a.prototype.copy = function(e, t, r, n) {
            if (!a.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
            var s = n - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(t, r, n);
            else if (this === e && r < t && t < n)
                for (var i = s - 1; i >= 0; --i)
                    e[i + t] = this[i + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
            return s
        }
        ,
        a.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t,
                t = 0,
                r = this.length) : "string" == typeof r && (n = r,
                r = this.length),
                void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !a.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                    var s = e.charCodeAt(0);
                    ("utf8" === n && s < 128 || "latin1" === n) && (e = s)
                }
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var i;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (i = t; i < r; ++i)
                    this[i] = e;
            else {
                var o = a.isBuffer(e) ? e : a.from(e, n)
                  , c = o.length;
                if (0 === c)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (i = 0; i < r - t; ++i)
                    this[i + t] = o[i % c]
            }
            return this
        }
        ;
        var k = /[^+/0-9A-Za-z-_]/g;
        function D(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function $(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, s = null, i = [], o = 0; o < n; ++o) {
                if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!s) {
                        if (r > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === n) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        s = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189),
                        s = r;
                        continue
                    }
                    r = 65536 + (s - 55296 << 10 | r - 56320)
                } else
                    s && (t -= 3) > -1 && i.push(239, 191, 189);
                if (s = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    i.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    i.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return i
        }
        function U(e) {
            return n.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(k, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function B(e, t, r, n) {
            for (var s = 0; s < n && !(s + r >= t.length || s >= e.length); ++s)
                t[s + r] = e[s];
            return s
        }
        function z(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        function F(e) {
            return e != e
        }
    }
    , {
        "base64-js": 96,
        ieee754: 105
    }],
    99: [function(e, t, r) {
        var n = 1e3
          , s = 60 * n
          , i = 60 * s
          , o = 24 * i
          , a = 7 * o
          , c = 365.25 * o;
        function u(e, t, r, n) {
            var s = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (s ? "s" : "")
        }
        t.exports = function(e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var r = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * c;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * a;
                    case "days":
                    case "day":
                    case "d":
                        return r * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * i;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * n;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return
                    }
                }(e);
            if ("number" === r && isFinite(e))
                return t.long ? function(e) {
                    var t = Math.abs(e);
                    if (t >= o)
                        return u(e, t, o, "day");
                    if (t >= i)
                        return u(e, t, i, "hour");
                    if (t >= s)
                        return u(e, t, s, "minute");
                    if (t >= n)
                        return u(e, t, n, "second");
                    return e + " ms"
                }(e) : function(e) {
                    var t = Math.abs(e);
                    if (t >= o)
                        return Math.round(e / o) + "d";
                    if (t >= i)
                        return Math.round(e / i) + "h";
                    if (t >= s)
                        return Math.round(e / s) + "m";
                    if (t >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }
    , {}],
    100: [function(e, t, r) {
        (function(n) {
            (function() {
                r.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff),
                    !this.useColors)
                        return;
                    const r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    let n = 0
                      , s = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (e => {
                        "%%" !== e && (n++,
                        "%c" === e && (s = n))
                    }
                    )),
                    e.splice(s, 0, r)
                }
                ,
                r.save = function(e) {
                    try {
                        e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                    } catch (e) {}
                }
                ,
                r.load = function() {
                    let e;
                    try {
                        e = r.storage.getItem("debug")
                    } catch (e) {}
                    !e && void 0 !== n && "env"in n && (e = n.env.DEBUG);
                    return e
                }
                ,
                r.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                        return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                        return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }
                ,
                r.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(),
                r.destroy = ( () => {
                    let e = !1;
                    return () => {
                        e || (e = !0,
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                    }
                }
                )(),
                r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                r.log = console.debug || console.log || ( () => {}
                ),
                t.exports = e("./common")(r);
                const {formatters: s} = t.exports;
                s.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./common": 101,
        _process: 113
    }],
    101: [function(e, t, r) {
        t.exports = function(t) {
            function r(e) {
                let t, s, i, o = null;
                function a(...e) {
                    if (!a.enabled)
                        return;
                    const n = a
                      , s = Number(new Date)
                      , i = s - (t || s);
                    n.diff = i,
                    n.prev = t,
                    n.curr = s,
                    t = s,
                    e[0] = r.coerce(e[0]),
                    "string" != typeof e[0] && e.unshift("%O");
                    let o = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, ( (t, s) => {
                        if ("%%" === t)
                            return "%";
                        o++;
                        const i = r.formatters[s];
                        if ("function" == typeof i) {
                            const r = e[o];
                            t = i.call(n, r),
                            e.splice(o, 1),
                            o--
                        }
                        return t
                    }
                    )),
                    r.formatArgs.call(n, e);
                    (n.log || r.log).apply(n, e)
                }
                return a.namespace = e,
                a.useColors = r.useColors(),
                a.color = r.selectColor(e),
                a.extend = n,
                a.destroy = r.destroy,
                Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => null !== o ? o : (s !== r.namespaces && (s = r.namespaces,
                    i = r.enabled(e)),
                    i),
                    set: e => {
                        o = e
                    }
                }),
                "function" == typeof r.init && r.init(a),
                a
            }
            function n(e, t) {
                const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log,
                n
            }
            function s(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return r.debug = r,
            r.default = r,
            r.coerce = function(e) {
                if (e instanceof Error)
                    return e.stack || e.message;
                return e
            }
            ,
            r.disable = function() {
                const e = [...r.names.map(s), ...r.skips.map(s).map((e => "-" + e))].join(",");
                return r.enable(""),
                e
            }
            ,
            r.enable = function(e) {
                let t;
                r.save(e),
                r.namespaces = e,
                r.names = [],
                r.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/)
                  , s = n.length;
                for (t = 0; t < s; t++)
                    n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.slice(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
            }
            ,
            r.enabled = function(e) {
                if ("*" === e[e.length - 1])
                    return !0;
                let t, n;
                for (t = 0,
                n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e))
                        return !1;
                for (t = 0,
                n = r.names.length; t < n; t++)
                    if (r.names[t].test(e))
                        return !0;
                return !1
            }
            ,
            r.humanize = e("ms"),
            r.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }
            ,
            Object.keys(t).forEach((e => {
                r[e] = t[e]
            }
            )),
            r.names = [],
            r.skips = [],
            r.formatters = {},
            r.selectColor = function(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++)
                    t = (t << 5) - t + e.charCodeAt(r),
                    t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }
            ,
            r.enable(r.load()),
            r
        }
    }
    , {
        ms: 99
    }],
    102: [function(e, t, r) {
        "use strict";
        var n, s = "object" == typeof Reflect ? Reflect : null, i = s && "function" == typeof s.apply ? s.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        }
        ;
        n = s && "function" == typeof s.ownKeys ? s.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var o = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function a() {
            a.init.call(this)
        }
        t.exports = a,
        t.exports.once = function(e, t) {
            return new Promise((function(r, n) {
                function s(r) {
                    e.removeListener(t, i),
                    n(r)
                }
                function i() {
                    "function" == typeof e.removeListener && e.removeListener("error", s),
                    r([].slice.call(arguments))
                }
                y(e, t, i, {
                    once: !0
                }),
                "error" !== t && function(e, t, r) {
                    "function" == typeof e.on && y(e, "error", t, r)
                }(e, s, {
                    once: !0
                })
            }
            ))
        }
        ,
        a.EventEmitter = a,
        a.prototype._events = void 0,
        a.prototype._eventsCount = 0,
        a.prototype._maxListeners = void 0;
        var c = 10;
        function u(e) {
            if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function l(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }
        function f(e, t, r, n) {
            var s, i, o, a;
            if (u(r),
            void 0 === (i = e._events) ? (i = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            i = e._events),
            o = i[t]),
            void 0 === o)
                o = i[t] = r,
                ++e._eventsCount;
            else if ("function" == typeof o ? o = i[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r),
            (s = l(e)) > 0 && o.length > s && !o.warned) {
                o.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning",
                c.emitter = e,
                c.type = t,
                c.count = o.length,
                a = c,
                console && console.warn && console.warn(a)
            }
            return e
        }
        function d() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function p(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
              , s = d.bind(n);
            return s.listener = r,
            n.wrapFn = s,
            s
        }
        function h(e, t, r) {
            var n = e._events;
            if (void 0 === n)
                return [];
            var s = n[t];
            return void 0 === s ? [] : "function" == typeof s ? r ? [s.listener || s] : [s] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                return t
            }(s) : m(s, s.length)
        }
        function g(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function m(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        function y(e, t, r, n) {
            if ("function" == typeof e.on)
                n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" != typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function s(i) {
                    n.once && e.removeEventListener(t, s),
                    r(i)
                }
                ))
            }
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return c
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                c = e
            }
        }),
        a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        a.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || o(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        a.prototype.getMaxListeners = function() {
            return l(this)
        }
        ,
        a.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
            var n = "error" === e
              , s = this._events;
            if (void 0 !== s)
                n = n && void 0 === s.error;
            else if (!n)
                return !1;
            if (n) {
                var o;
                if (t.length > 0 && (o = t[0]),
                o instanceof Error)
                    throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o,
                a
            }
            var c = s[e];
            if (void 0 === c)
                return !1;
            if ("function" == typeof c)
                i(c, this, t);
            else {
                var u = c.length
                  , l = m(c, u);
                for (r = 0; r < u; ++r)
                    i(l[r], this, t)
            }
            return !0
        }
        ,
        a.prototype.addListener = function(e, t) {
            return f(this, e, t, !1)
        }
        ,
        a.prototype.on = a.prototype.addListener,
        a.prototype.prependListener = function(e, t) {
            return f(this, e, t, !0)
        }
        ,
        a.prototype.once = function(e, t) {
            return u(t),
            this.on(e, p(this, e, t)),
            this
        }
        ,
        a.prototype.prependOnceListener = function(e, t) {
            return u(t),
            this.prependListener(e, p(this, e, t)),
            this
        }
        ,
        a.prototype.removeListener = function(e, t) {
            var r, n, s, i, o;
            if (u(t),
            void 0 === (n = this._events))
                return this;
            if (void 0 === (r = n[e]))
                return this;
            if (r === t || r.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (s = -1,
                i = r.length - 1; i >= 0; i--)
                    if (r[i] === t || r[i].listener === t) {
                        o = r[i].listener,
                        s = i;
                        break
                    }
                if (s < 0)
                    return this;
                0 === s ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(r, s),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events))
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
                this;
            if (0 === arguments.length) {
                var s, i = Object.keys(r);
                for (n = 0; n < i.length; ++n)
                    "removeListener" !== (s = i[n]) && this.removeAllListeners(s);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = r[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
            return this
        }
        ,
        a.prototype.listeners = function(e) {
            return h(this, e, !0)
        }
        ,
        a.prototype.rawListeners = function(e) {
            return h(this, e, !1)
        }
        ,
        a.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }
        ,
        a.prototype.listenerCount = g,
        a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    }
    , {}],
    103: [function(e, t, r) {
        "use strict";
        t.exports = function e(t, r) {
            if (t === r)
                return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
                if (t.constructor !== r.constructor)
                    return !1;
                var n, s, i;
                if (Array.isArray(t)) {
                    if ((n = t.length) != r.length)
                        return !1;
                    for (s = n; 0 != s--; )
                        if (!e(t[s], r[s]))
                            return !1;
                    return !0
                }
                if (t.constructor === RegExp)
                    return t.source === r.source && t.flags === r.flags;
                if (t.valueOf !== Object.prototype.valueOf)
                    return t.valueOf() === r.valueOf();
                if (t.toString !== Object.prototype.toString)
                    return t.toString() === r.toString();
                if ((n = (i = Object.keys(t)).length) !== Object.keys(r).length)
                    return !1;
                for (s = n; 0 != s--; )
                    if (!Object.prototype.hasOwnProperty.call(r, i[s]))
                        return !1;
                for (s = n; 0 != s--; ) {
                    var o = i[s];
                    if (!e(t[o], r[o]))
                        return !1
                }
                return !0
            }
            return t != t && r != r
        }
    }
    , {}],
    104: [function(e, t, r) {
        t.exports = c,
        c.default = c,
        c.stable = d,
        c.stableStringify = d;
        var n = "[...]"
          , s = "[Circular]"
          , i = []
          , o = [];
        function a() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function c(e, t, r, n) {
            var s;
            void 0 === n && (n = a()),
            l(e, "", 0, [], void 0, 0, n);
            try {
                s = 0 === o.length ? JSON.stringify(e, t, r) : JSON.stringify(e, h(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== i.length; ) {
                    var c = i.pop();
                    4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
                }
            }
            return s
        }
        function u(e, t, r, n) {
            var s = Object.getOwnPropertyDescriptor(n, r);
            void 0 !== s.get ? s.configurable ? (Object.defineProperty(n, r, {
                value: e
            }),
            i.push([n, r, t, s])) : o.push([t, r, e]) : (n[r] = e,
            i.push([n, r, t]))
        }
        function l(e, t, r, i, o, a, c) {
            var f;
            if (a += 1,
            "object" == typeof e && null !== e) {
                for (f = 0; f < i.length; f++)
                    if (i[f] === e)
                        return void u(s, e, t, o);
                if (void 0 !== c.depthLimit && a > c.depthLimit)
                    return void u(n, e, t, o);
                if (void 0 !== c.edgesLimit && r + 1 > c.edgesLimit)
                    return void u(n, e, t, o);
                if (i.push(e),
                Array.isArray(e))
                    for (f = 0; f < e.length; f++)
                        l(e[f], f, f, i, e, a, c);
                else {
                    var d = Object.keys(e);
                    for (f = 0; f < d.length; f++) {
                        var p = d[f];
                        l(e[p], p, f, i, e, a, c)
                    }
                }
                i.pop()
            }
        }
        function f(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function d(e, t, r, n) {
            void 0 === n && (n = a());
            var s, c = p(e, "", 0, [], void 0, 0, n) || e;
            try {
                s = 0 === o.length ? JSON.stringify(c, t, r) : JSON.stringify(c, h(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== i.length; ) {
                    var u = i.pop();
                    4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2]
                }
            }
            return s
        }
        function p(e, t, r, o, a, c, l) {
            var d;
            if (c += 1,
            "object" == typeof e && null !== e) {
                for (d = 0; d < o.length; d++)
                    if (o[d] === e)
                        return void u(s, e, t, a);
                try {
                    if ("function" == typeof e.toJSON)
                        return
                } catch (e) {
                    return
                }
                if (void 0 !== l.depthLimit && c > l.depthLimit)
                    return void u(n, e, t, a);
                if (void 0 !== l.edgesLimit && r + 1 > l.edgesLimit)
                    return void u(n, e, t, a);
                if (o.push(e),
                Array.isArray(e))
                    for (d = 0; d < e.length; d++)
                        p(e[d], d, d, o, e, c, l);
                else {
                    var h = {}
                      , g = Object.keys(e).sort(f);
                    for (d = 0; d < g.length; d++) {
                        var m = g[d];
                        p(e[m], m, d, o, e, c, l),
                        h[m] = e[m]
                    }
                    if (void 0 === a)
                        return h;
                    i.push([a, t, e]),
                    a[t] = h
                }
                o.pop()
            }
        }
        function h(e) {
            return e = void 0 !== e ? e : function(e, t) {
                return t
            }
            ,
            function(t, r) {
                if (o.length > 0)
                    for (var n = 0; n < o.length; n++) {
                        var s = o[n];
                        if (s[1] === t && s[0] === r) {
                            r = s[2],
                            o.splice(n, 1);
                            break
                        }
                    }
                return e.call(this, t, r)
            }
        }
    }
    , {}],
    105: [function(e, t, r) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        r.read = function(e, t, r, n, s) {
            var i, o, a = 8 * s - n - 1, c = (1 << a) - 1, u = c >> 1, l = -7, f = r ? s - 1 : 0, d = r ? -1 : 1, p = e[t + f];
            for (f += d,
            i = p & (1 << -l) - 1,
            p >>= -l,
            l += a; l > 0; i = 256 * i + e[t + f],
            f += d,
            l -= 8)
                ;
            for (o = i & (1 << -l) - 1,
            i >>= -l,
            l += n; l > 0; o = 256 * o + e[t + f],
            f += d,
            l -= 8)
                ;
            if (0 === i)
                i = 1 - u;
            else {
                if (i === c)
                    return o ? NaN : 1 / 0 * (p ? -1 : 1);
                o += Math.pow(2, n),
                i -= u
            }
            return (p ? -1 : 1) * o * Math.pow(2, i - n)
        }
        ,
        r.write = function(e, t, r, n, s, i) {
            var o, a, c, u = 8 * i - s - 1, l = (1 << u) - 1, f = l >> 1, d = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, h = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            o = l) : (o = Math.floor(Math.log(t) / Math.LN2),
            t * (c = Math.pow(2, -o)) < 1 && (o--,
            c *= 2),
            (t += o + f >= 1 ? d / c : d * Math.pow(2, 1 - f)) * c >= 2 && (o++,
            c /= 2),
            o + f >= l ? (a = 0,
            o = l) : o + f >= 1 ? (a = (t * c - 1) * Math.pow(2, s),
            o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, s),
            o = 0)); s >= 8; e[r + p] = 255 & a,
            p += h,
            a /= 256,
            s -= 8)
                ;
            for (o = o << s | a,
            u += s; u > 0; e[r + p] = 255 & o,
            p += h,
            o /= 256,
            u -= 8)
                ;
            e[r + p - h] |= 128 * g
        }
    }
    , {}],
    106: [function(e, t, r) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
        }
    }
    , {}],
    107: [function(e, t, r) {
        "use strict";
        const n = e => null !== e && "object" == typeof e && "function" == typeof e.pipe;
        n.writable = e => n(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState,
        n.readable = e => n(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState,
        n.duplex = e => n.writable(e) && n.readable(e),
        n.transform = e => n.duplex(e) && "function" == typeof e._transform && "object" == typeof e._transformState,
        t.exports = n
    }
    , {}],
    108: [function(e, t, r) {
        !function(e, r) {
            "use strict";
            "function" == typeof define && define.amd ? define(r) : "object" == typeof t && t.exports ? t.exports = r() : e.log = r()
        }(this, (function() {
            "use strict";
            var e = function() {}
              , t = "undefined"
              , r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
              , n = ["trace", "debug", "info", "warn", "error"]
              , s = {}
              , i = null;
            function o(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind)
                    return r.bind(e);
                try {
                    return Function.prototype.bind.call(r, e)
                } catch (t) {
                    return function() {
                        return Function.prototype.apply.apply(r, [e, arguments])
                    }
                }
            }
            function a() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                console.trace && console.trace()
            }
            function c() {
                for (var r = this.getLevel(), s = 0; s < n.length; s++) {
                    var i = n[s];
                    this[i] = s < r ? e : this.methodFactory(i, r, this.name)
                }
                if (this.log = this.debug,
                typeof console === t && r < this.levels.SILENT)
                    return "No console available for logging"
            }
            function u(e) {
                return function() {
                    typeof console !== t && (c.call(this),
                    this[e].apply(this, arguments))
                }
            }
            function l(n, s, i) {
                return function(n) {
                    return "debug" === n && (n = "log"),
                    typeof console !== t && ("trace" === n && r ? a : void 0 !== console[n] ? o(console, n) : void 0 !== console.log ? o(console, "log") : e)
                }(n) || u.apply(this, arguments)
            }
            function f(e, r) {
                var o, a, u, f = this, d = "loglevel";
                function p() {
                    var e;
                    if (typeof window !== t && d) {
                        try {
                            e = window.localStorage[d]
                        } catch (e) {}
                        if (typeof e === t)
                            try {
                                var r = window.document.cookie
                                  , n = encodeURIComponent(d)
                                  , s = r.indexOf(n + "=");
                                -1 !== s && (e = /^([^;]+)/.exec(r.slice(s + n.length + 1))[1])
                            } catch (e) {}
                        return void 0 === f.levels[e] && (e = void 0),
                        e
                    }
                }
                function h(e) {
                    var t = e;
                    if ("string" == typeof t && void 0 !== f.levels[t.toUpperCase()] && (t = f.levels[t.toUpperCase()]),
                    "number" == typeof t && t >= 0 && t <= f.levels.SILENT)
                        return t;
                    throw new TypeError("log.setLevel() called with invalid level: " + e)
                }
                "string" == typeof e ? d += ":" + e : "symbol" == typeof e && (d = void 0),
                f.name = e,
                f.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                },
                f.methodFactory = r || l,
                f.getLevel = function() {
                    return null != u ? u : null != a ? a : o
                }
                ,
                f.setLevel = function(e, r) {
                    return u = h(e),
                    !1 !== r && function(e) {
                        var r = (n[e] || "silent").toUpperCase();
                        if (typeof window !== t && d) {
                            try {
                                return void (window.localStorage[d] = r)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(d) + "=" + r + ";"
                            } catch (e) {}
                        }
                    }(u),
                    c.call(f)
                }
                ,
                f.setDefaultLevel = function(e) {
                    a = h(e),
                    p() || f.setLevel(e, !1)
                }
                ,
                f.resetLevel = function() {
                    u = null,
                    function() {
                        if (typeof window !== t && d) {
                            try {
                                window.localStorage.removeItem(d)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(d) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch (e) {}
                        }
                    }(),
                    c.call(f)
                }
                ,
                f.enableAll = function(e) {
                    f.setLevel(f.levels.TRACE, e)
                }
                ,
                f.disableAll = function(e) {
                    f.setLevel(f.levels.SILENT, e)
                }
                ,
                f.rebuild = function() {
                    if (i !== f && (o = h(i.getLevel())),
                    c.call(f),
                    i === f)
                        for (var e in s)
                            s[e].rebuild()
                }
                ,
                o = h(i ? i.getLevel() : "WARN");
                var g = p();
                null != g && (u = h(g)),
                c.call(f)
            }
            (i = new f).getLogger = function(e) {
                if ("symbol" != typeof e && "string" != typeof e || "" === e)
                    throw new TypeError("You must supply a name when creating a logger.");
                var t = s[e];
                return t || (t = s[e] = new f(e,i.methodFactory)),
                t
            }
            ;
            var d = typeof window !== t ? window.log : void 0;
            return i.noConflict = function() {
                return typeof window !== t && window.log === i && (window.log = d),
                i
            }
            ,
            i.getLoggers = function() {
                return s
            }
            ,
            i.default = i,
            i
        }
        ))
    }
    , {}],
    109: [function(e, t, r) {
        var n = e("wrappy");
        function s(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0,
                t.value = e.apply(this, arguments))
            };
            return t.called = !1,
            t
        }
        function i(e) {
            var t = function() {
                if (t.called)
                    throw new Error(t.onceError);
                return t.called = !0,
                t.value = e.apply(this, arguments)
            }
              , r = e.name || "Function wrapped with `once`";
            return t.onceError = r + " shouldn't be called more than once",
            t.called = !1,
            t
        }
        t.exports = n(s),
        t.exports.strict = n(i),
        s.proto = s((function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return s(this)
                },
                configurable: !0
            }),
            Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return i(this)
                },
                configurable: !0
            })
        }
        ))
    }
    , {
        wrappy: 192
    }],
    110: [function(e, t, r) {
        "use strict";
        const {ErrorWithCause: n} = e("./lib/error-with-cause")
          , {findCauseByReference: s, getErrorCause: i, messageWithCauses: o, stackWithCauses: a} = e("./lib/helpers");
        t.exports = {
            ErrorWithCause: n,
            findCauseByReference: s,
            getErrorCause: i,
            stackWithCauses: a,
            messageWithCauses: o
        }
    }
    , {
        "./lib/error-with-cause": 111,
        "./lib/helpers": 112
    }],
    111: [function(e, t, r) {
        "use strict";
        class n extends Error {
            constructor(e, {cause: t}={}) {
                super(e),
                this.name = n.name,
                t && (this.cause = t),
                this.message = e
            }
        }
        t.exports = {
            ErrorWithCause: n
        }
    }
    , {}],
    112: [function(e, t, r) {
        "use strict";
        const n = e => {
            if (e && "object" == typeof e && "cause"in e) {
                if ("function" == typeof e.cause) {
                    const t = e.cause();
                    return t instanceof Error ? t : void 0
                }
                return e.cause instanceof Error ? e.cause : void 0
            }
        }
          , s = (e, t) => {
            if (!(e instanceof Error))
                return "";
            const r = e.stack || "";
            if (t.has(e))
                return r + "\ncauses have become circular...";
            const i = n(e);
            return i ? (t.add(e),
            r + "\ncaused by: " + s(i, t)) : r
        }
          , i = (e, t, r) => {
            if (!(e instanceof Error))
                return "";
            const s = r ? "" : e.message || "";
            if (t.has(e))
                return s + ": ...";
            const o = n(e);
            if (o) {
                t.add(e);
                const r = "cause"in e && "function" == typeof e.cause;
                return s + (r ? "" : ": ") + i(o, t, r)
            }
            return s
        }
        ;
        t.exports = {
            findCauseByReference: (e, t) => {
                if (!e || !t)
                    return;
                if (!(e instanceof Error))
                    return;
                if (!(t.prototype instanceof Error) && t !== Error)
                    return;
                const r = new Set;
                let s = e;
                for (; s && !r.has(s); ) {
                    if (r.add(s),
                    s instanceof t)
                        return s;
                    s = n(s)
                }
            }
            ,
            getErrorCause: n,
            stackWithCauses: e => s(e, new Set),
            messageWithCauses: e => i(e, new Set)
        }
    }
    , {}],
    113: [function(e, t, r) {
        var n, s, i = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function c(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                s = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                s = a
            }
        }();
        var u, l = [], f = !1, d = -1;
        function p() {
            f && u && (f = !1,
            u.length ? l = u.concat(l) : d = -1,
            l.length && h())
        }
        function h() {
            if (!f) {
                var e = c(p);
                f = !0;
                for (var t = l.length; t; ) {
                    for (u = l,
                    l = []; ++d < t; )
                        u && u[d].run();
                    d = -1,
                    t = l.length
                }
                u = null,
                f = !1,
                function(e) {
                    if (s === clearTimeout)
                        return clearTimeout(e);
                    if ((s === a || !s) && clearTimeout)
                        return s = clearTimeout,
                        clearTimeout(e);
                    try {
                        return s(e)
                    } catch (t) {
                        try {
                            return s.call(null, e)
                        } catch (t) {
                            return s.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function g(e, t) {
            this.fun = e,
            this.array = t
        }
        function m() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            l.push(new g(e,t)),
            1 !== l.length || f || c(h)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = m,
        i.addListener = m,
        i.once = m,
        i.off = m,
        i.removeListener = m,
        i.removeAllListeners = m,
        i.emit = m,
        i.prependListener = m,
        i.prependOnceListener = m,
        i.listeners = function(e) {
            return []
        }
        ,
        i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        i.cwd = function() {
            return "/"
        }
        ,
        i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        i.umask = function() {
            return 0
        }
    }
    , {}],
    114: [function(e, t, r) {
        "use strict";
        var n = {};
        function s(e, t, r) {
            r || (r = Error);
            var s = function(e) {
                var r, n;
                function s(r, n, s) {
                    return e.call(this, function(e, r, n) {
                        return "string" == typeof t ? t : t(e, r, n)
                    }(r, n, s)) || this
                }
                return n = e,
                (r = s).prototype = Object.create(n.prototype),
                r.prototype.constructor = r,
                r.__proto__ = n,
                s
            }(r);
            s.prototype.name = r.name,
            s.prototype.code = e,
            n[e] = s
        }
        function i(e, t) {
            if (Array.isArray(e)) {
                var r = e.length;
                return e = e.map((function(e) {
                    return String(e)
                }
                )),
                r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        s("ERR_INVALID_OPT_VALUE", (function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }
        ), TypeError),
        s("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
            var n, s, o, a;
            if ("string" == typeof t && (s = "not ",
            t.substr(!o || o < 0 ? 0 : +o, s.length) === s) ? (n = "must not be",
            t = t.replace(/^not /, "")) : n = "must be",
            function(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length),
                e.substring(r - t.length, r) === t
            }(e, " argument"))
                a = "The ".concat(e, " ").concat(n, " ").concat(i(t, "type"));
            else {
                var c = function(e, t, r) {
                    return "number" != typeof r && (r = 0),
                    !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                }(e, ".") ? "property" : "argument";
                a = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(i(t, "type"))
            }
            return a += ". Received type ".concat(typeof r)
        }
        ), TypeError),
        s("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        s("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
            return "The " + e + " method is not implemented"
        }
        )),
        s("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        s("ERR_STREAM_DESTROYED", (function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }
        )),
        s("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        s("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        s("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        s("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        s("ERR_UNKNOWN_ENCODING", (function(e) {
            return "Unknown encoding: " + e
        }
        ), TypeError),
        s("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        t.exports.codes = n
    }
    , {}],
    115: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t
                }
                ;
                t.exports = u;
                var s = e("./_stream_readable")
                  , i = e("./_stream_writable");
                e("inherits")(u, s);
                for (var o = n(i.prototype), a = 0; a < o.length; a++) {
                    var c = o[a];
                    u.prototype[c] || (u.prototype[c] = i.prototype[c])
                }
                function u(e) {
                    if (!(this instanceof u))
                        return new u(e);
                    s.call(this, e),
                    i.call(this, e),
                    this.allowHalfOpen = !0,
                    e && (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                    this.once("end", l)))
                }
                function l() {
                    this._writableState.ended || r.nextTick(f, this)
                }
                function f(e) {
                    e.end()
                }
                Object.defineProperty(u.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                Object.defineProperty(u.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(u.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(u.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                    }
                })
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./_stream_readable": 117,
        "./_stream_writable": 119,
        _process: 113,
        inherits: 106
    }],
    116: [function(e, t, r) {
        "use strict";
        t.exports = s;
        var n = e("./_stream_transform");
        function s(e) {
            if (!(this instanceof s))
                return new s(e);
            n.call(this, e)
        }
        e("inherits")(s, n),
        s.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    }
    , {
        "./_stream_transform": 118,
        inherits: 106
    }],
    117: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var s;
                t.exports = I,
                I.ReadableState = j;
                e("events").EventEmitter;
                var i = function(e, t) {
                    return e.listeners(t).length
                }
                  , o = e("./internal/streams/stream")
                  , a = e("buffer").Buffer
                  , c = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var u, l = e("util");
                u = l && l.debuglog ? l.debuglog("stream") : function() {}
                ;
                var f, d, p, h = e("./internal/streams/buffer_list"), g = e("./internal/streams/destroy"), m = e("./internal/streams/state").getHighWaterMark, y = e("../errors").codes, b = y.ERR_INVALID_ARG_TYPE, w = y.ERR_STREAM_PUSH_AFTER_EOF, v = y.ERR_METHOD_NOT_IMPLEMENTED, E = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(I, o);
                var _ = g.errorOrDestroy
                  , S = ["error", "close", "destroy", "pause", "resume"];
                function j(t, r, n) {
                    s = s || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof n && (n = r instanceof s),
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
                    this.highWaterMark = m(this, t, "readableHighWaterMark", n),
                    this.buffer = new h,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.paused = !0,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (f || (f = e("string_decoder/").StringDecoder),
                    this.decoder = new f(t.encoding),
                    this.encoding = t.encoding)
                }
                function I(t) {
                    if (s = s || e("./_stream_duplex"),
                    !(this instanceof I))
                        return new I(t);
                    var r = this instanceof s;
                    this._readableState = new j(t,this,r),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    o.call(this)
                }
                function R(e, t, r, n, s) {
                    u("readableAddChunk", t);
                    var i, o = e._readableState;
                    if (null === t)
                        o.reading = !1,
                        function(e, t) {
                            if (u("onEofChunk"),
                            t.ended)
                                return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r),
                                t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0,
                            t.sync ? O(e) : (t.needReadable = !1,
                            t.emittedReadable || (t.emittedReadable = !0,
                            N(e)))
                        }(e, o);
                    else if (s || (i = function(e, t) {
                        var r;
                        n = t,
                        a.isBuffer(n) || n instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (r = new b("chunk",["string", "Buffer", "Uint8Array"],t));
                        var n;
                        return r
                    }(o, t)),
                    i)
                        _(e, i);
                    else if (o.objectMode || t && t.length > 0)
                        if ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                            return a.from(e)
                        }(t)),
                        n)
                            o.endEmitted ? _(e, new E) : M(e, o, t, !0);
                        else if (o.ended)
                            _(e, new w);
                        else {
                            if (o.destroyed)
                                return !1;
                            o.reading = !1,
                            o.decoder && !r ? (t = o.decoder.write(t),
                            o.objectMode || 0 !== t.length ? M(e, o, t, !1) : P(e, o)) : M(e, o, t, !1)
                        }
                    else
                        n || (o.reading = !1,
                        P(e, o));
                    return !o.ended && (o.length < o.highWaterMark || 0 === o.length)
                }
                function M(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                    e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && O(e)),
                    P(e, t)
                }
                Object.defineProperty(I.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                I.prototype.destroy = g.destroy,
                I.prototype._undestroy = g.undestroy,
                I.prototype._destroy = function(e, t) {
                    t(e)
                }
                ,
                I.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
                    t = ""),
                    r = !0),
                    R(this, e, t, !1, r)
                }
                ,
                I.prototype.unshift = function(e) {
                    return R(this, e, null, !0, !1)
                }
                ,
                I.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                I.prototype.setEncoding = function(t) {
                    f || (f = e("string_decoder/").StringDecoder);
                    var r = new f(t);
                    this._readableState.decoder = r,
                    this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, s = ""; null !== n; )
                        s += r.write(n.data),
                        n = n.next;
                    return this._readableState.buffer.clear(),
                    "" !== s && this._readableState.buffer.push(s),
                    this._readableState.length = s.length,
                    this
                }
                ;
                var C = 1073741824;
                function A(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= C ? e = C : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function O(e) {
                    var t = e._readableState;
                    u("emitReadable", t.needReadable, t.emittedReadable),
                    t.needReadable = !1,
                    t.emittedReadable || (u("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    r.nextTick(N, e))
                }
                function N(e) {
                    var t = e._readableState;
                    u("emitReadable_", t.destroyed, t.length, t.ended),
                    t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                    t.emittedReadable = !1),
                    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                    D(e)
                }
                function P(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    r.nextTick(T, e, t))
                }
                function T(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                        var r = t.length;
                        if (u("maybeReadMore read 0"),
                        e.read(0),
                        r === t.length)
                            break
                    }
                    t.readingMore = !1
                }
                function x(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0,
                    t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }
                function L(e) {
                    u("readable nexttick read 0"),
                    e.read(0)
                }
                function k(e, t) {
                    u("resume", t.reading),
                    t.reading || e.read(0),
                    t.resumeScheduled = !1,
                    e.emit("resume"),
                    D(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function D(e) {
                    var t = e._readableState;
                    for (u("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function $(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                    r);
                    var r
                }
                function U(e) {
                    var t = e._readableState;
                    u("endReadable", t.endEmitted),
                    t.endEmitted || (t.ended = !0,
                    r.nextTick(B, t, e))
                }
                function B(e, t) {
                    if (u("endReadableNT", e.endEmitted, e.length),
                    !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"),
                    e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }
                function z(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                I.prototype.read = function(e) {
                    u("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                        return u("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : O(this),
                        null;
                    if (0 === (e = A(e, t)) && t.ended)
                        return 0 === t.length && U(this),
                        null;
                    var n, s = t.needReadable;
                    return u("need readable", s),
                    (0 === t.length || t.length - e < t.highWaterMark) && u("length less than watermark", s = !0),
                    t.ended || t.reading ? u("reading or ended", s = !1) : s && (u("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = A(r, t))),
                    null === (n = e > 0 ? $(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
                    e = 0) : (t.length -= e,
                    t.awaitDrain = 0),
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && U(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                I.prototype._read = function(e) {
                    _(this, new v("_read()"))
                }
                ,
                I.prototype.pipe = function(e, t) {
                    var n = this
                      , s = this._readableState;
                    switch (s.pipesCount) {
                    case 0:
                        s.pipes = e;
                        break;
                    case 1:
                        s.pipes = [s.pipes, e];
                        break;
                    default:
                        s.pipes.push(e)
                    }
                    s.pipesCount += 1,
                    u("pipe count=%d opts=%j", s.pipesCount, t);
                    var o = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? c : m;
                    function a(t, r) {
                        u("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        u("cleanup"),
                        e.removeListener("close", h),
                        e.removeListener("finish", g),
                        e.removeListener("drain", l),
                        e.removeListener("error", p),
                        e.removeListener("unpipe", a),
                        n.removeListener("end", c),
                        n.removeListener("end", m),
                        n.removeListener("data", d),
                        f = !0,
                        !s.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }
                    function c() {
                        u("onend"),
                        e.end()
                    }
                    s.endEmitted ? r.nextTick(o) : n.once("end", o),
                    e.on("unpipe", a);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            u("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && i(e, "data") && (t.flowing = !0,
                            D(e))
                        }
                    }(n);
                    e.on("drain", l);
                    var f = !1;
                    function d(t) {
                        u("ondata");
                        var r = e.write(t);
                        u("dest.write", r),
                        !1 === r && ((1 === s.pipesCount && s.pipes === e || s.pipesCount > 1 && -1 !== z(s.pipes, e)) && !f && (u("false write response, pause", s.awaitDrain),
                        s.awaitDrain++),
                        n.pause())
                    }
                    function p(t) {
                        u("onerror", t),
                        m(),
                        e.removeListener("error", p),
                        0 === i(e, "error") && _(e, t)
                    }
                    function h() {
                        e.removeListener("finish", g),
                        m()
                    }
                    function g() {
                        u("onfinish"),
                        e.removeListener("close", h),
                        m()
                    }
                    function m() {
                        u("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", d),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", p),
                    e.once("close", h),
                    e.once("finish", g),
                    e.emit("pipe", n),
                    s.flowing || (u("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                I.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , s = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var i = 0; i < s; i++)
                            n[i].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                        return this
                    }
                    var o = z(t.pipes, e);
                    return -1 === o || (t.pipes.splice(o, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                I.prototype.on = function(e, t) {
                    var n = o.prototype.on.call(this, e, t)
                      , s = this._readableState;
                    return "data" === e ? (s.readableListening = this.listenerCount("readable") > 0,
                    !1 !== s.flowing && this.resume()) : "readable" === e && (s.endEmitted || s.readableListening || (s.readableListening = s.needReadable = !0,
                    s.flowing = !1,
                    s.emittedReadable = !1,
                    u("on readable", s.length, s.reading),
                    s.length ? O(this) : s.reading || r.nextTick(L, this))),
                    n
                }
                ,
                I.prototype.addListener = I.prototype.on,
                I.prototype.removeListener = function(e, t) {
                    var n = o.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(x, this),
                    n
                }
                ,
                I.prototype.removeAllListeners = function(e) {
                    var t = o.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(x, this),
                    t
                }
                ,
                I.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (u("resume"),
                    e.flowing = !e.readableListening,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        r.nextTick(k, e, t))
                    }(this, e)),
                    e.paused = !1,
                    this
                }
                ,
                I.prototype.pause = function() {
                    return u("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (u("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this._readableState.paused = !0,
                    this
                }
                ,
                I.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var s in e.on("end", (function() {
                        if (u("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(s) {
                        (u("wrapped data"),
                        r.decoder && (s = r.decoder.write(s)),
                        r.objectMode && null == s) || (r.objectMode || s && s.length) && (t.push(s) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[s] && "function" == typeof e[s] && (this[s] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(s));
                    for (var i = 0; i < S.length; i++)
                        e.on(S[i], this.emit.bind(this, S[i]));
                    return this._read = function(t) {
                        u("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                "function" == typeof Symbol && (I.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === d && (d = e("./internal/streams/async_iterator")),
                    d(this)
                }
                ),
                Object.defineProperty(I.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                Object.defineProperty(I.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }),
                Object.defineProperty(I.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }),
                I._fromList = $,
                Object.defineProperty(I.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }),
                "function" == typeof Symbol && (I.from = function(t, r) {
                    return void 0 === p && (p = e("./internal/streams/from")),
                    p(I, t, r)
                }
                )
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 114,
        "./_stream_duplex": 115,
        "./internal/streams/async_iterator": 120,
        "./internal/streams/buffer_list": 121,
        "./internal/streams/destroy": 122,
        "./internal/streams/from": 124,
        "./internal/streams/state": 126,
        "./internal/streams/stream": 127,
        _process: 113,
        buffer: 98,
        events: 102,
        inherits: 106,
        "string_decoder/": 175,
        util: 97
    }],
    118: [function(e, t, r) {
        "use strict";
        t.exports = l;
        var n = e("../errors").codes
          , s = n.ERR_METHOD_NOT_IMPLEMENTED
          , i = n.ERR_MULTIPLE_CALLBACK
          , o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , a = n.ERR_TRANSFORM_WITH_LENGTH_0
          , c = e("./_stream_duplex");
        function u(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n)
                return this.emit("error", new i);
            r.writechunk = null,
            r.writecb = null,
            null != t && this.push(t),
            n(e);
            var s = this._readableState;
            s.reading = !1,
            (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark)
        }
        function l(e) {
            if (!(this instanceof l))
                return new l(e);
            c.call(this, e),
            this._transformState = {
                afterTransform: u.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" == typeof e.transform && (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", f)
        }
        function f() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush((function(t, r) {
                d(e, t, r)
            }
            ))
        }
        function d(e, t, r) {
            if (t)
                return e.emit("error", t);
            if (null != r && e.push(r),
            e._writableState.length)
                throw new a;
            if (e._transformState.transforming)
                throw new o;
            return e.push(null)
        }
        e("inherits")(l, c),
        l.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            c.prototype.push.call(this, e, t)
        }
        ,
        l.prototype._transform = function(e, t, r) {
            r(new s("_transform()"))
        }
        ,
        l.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var s = this._readableState;
                (n.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark)
            }
        }
        ,
        l.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }
        ,
        l.prototype._destroy = function(e, t) {
            c.prototype._destroy.call(this, e, (function(e) {
                t(e)
            }
            ))
        }
    }
    , {
        "../errors": 114,
        "./_stream_duplex": 115,
        inherits: 106
    }],
    119: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                function s(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var s = n.callback;
                                t.pendingcb--,
                                s(r),
                                n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var i;
                t.exports = I,
                I.WritableState = j;
                var o = {
                    deprecate: e("util-deprecate")
                }
                  , a = e("./internal/streams/stream")
                  , c = e("buffer").Buffer
                  , u = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var l, f = e("./internal/streams/destroy"), d = e("./internal/streams/state").getHighWaterMark, p = e("../errors").codes, h = p.ERR_INVALID_ARG_TYPE, g = p.ERR_METHOD_NOT_IMPLEMENTED, m = p.ERR_MULTIPLE_CALLBACK, y = p.ERR_STREAM_CANNOT_PIPE, b = p.ERR_STREAM_DESTROYED, w = p.ERR_STREAM_NULL_VALUES, v = p.ERR_STREAM_WRITE_AFTER_END, E = p.ERR_UNKNOWN_ENCODING, _ = f.errorOrDestroy;
                function S() {}
                function j(t, n, o) {
                    i = i || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof o && (o = n instanceof i),
                    this.objectMode = !!t.objectMode,
                    o && (this.objectMode = this.objectMode || !!t.writableObjectMode),
                    this.highWaterMark = d(this, t, "writableHighWaterMark", o),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var a = !1 === t.decodeStrings;
                    this.decodeStrings = !a,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var n = e._writableState
                              , s = n.sync
                              , i = n.writecb;
                            if ("function" != typeof i)
                                throw new m;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(n),
                            t)
                                !function(e, t, n, s, i) {
                                    --t.pendingcb,
                                    n ? (r.nextTick(i, s),
                                    r.nextTick(N, e, t),
                                    e._writableState.errorEmitted = !0,
                                    _(e, s)) : (i(s),
                                    e._writableState.errorEmitted = !0,
                                    _(e, s),
                                    N(e, t))
                                }(e, n, s, t, i);
                            else {
                                var o = A(n) || e.destroyed;
                                o || n.corked || n.bufferProcessing || !n.bufferedRequest || C(e, n),
                                s ? r.nextTick(M, e, n, o, i) : M(e, n, o, i)
                            }
                        }(n, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new s(this)
                }
                function I(t) {
                    var r = this instanceof (i = i || e("./_stream_duplex"));
                    if (!r && !l.call(I, this))
                        return new I(t);
                    this._writableState = new j(t,this,r),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    a.call(this)
                }
                function R(e, t, r, n, s, i, o) {
                    t.writelen = n,
                    t.writecb = o,
                    t.writing = !0,
                    t.sync = !0,
                    t.destroyed ? t.onwrite(new b("write")) : r ? e._writev(s, t.onwrite) : e._write(s, i, t.onwrite),
                    t.sync = !1
                }
                function M(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    N(e, t)
                }
                function C(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , i = new Array(n)
                          , o = t.corkedRequestsFree;
                        o.entry = r;
                        for (var a = 0, c = !0; r; )
                            i[a] = r,
                            r.isBuf || (c = !1),
                            r = r.next,
                            a += 1;
                        i.allBuffers = c,
                        R(e, t, !0, t.length, i, "", o.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        o.next ? (t.corkedRequestsFree = o.next,
                        o.next = null) : t.corkedRequestsFree = new s(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var u = r.chunk
                              , l = r.encoding
                              , f = r.callback;
                            if (R(e, t, !1, t.objectMode ? 1 : u.length, u, l, f),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function A(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function O(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && _(e, r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        N(e, t)
                    }
                    ))
                }
                function N(e, t) {
                    var n = A(t);
                    if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0,
                        e.emit("prefinish")) : (t.pendingcb++,
                        t.finalCalled = !0,
                        r.nextTick(O, e, t)))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"),
                    t.autoDestroy))) {
                        var s = e._readableState;
                        (!s || s.autoDestroy && s.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(I, a),
                j.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(j.prototype, "buffer", {
                            get: o.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(I, Symbol.hasInstance, {
                    value: function(e) {
                        return !!l.call(this, e) || this === I && (e && e._writableState instanceof j)
                    }
                })) : l = function(e) {
                    return e instanceof this
                }
                ,
                I.prototype.pipe = function() {
                    _(this, new y)
                }
                ,
                I.prototype.write = function(e, t, n) {
                    var s, i = this._writableState, o = !1, a = !i.objectMode && (s = e,
                    c.isBuffer(s) || s instanceof u);
                    return a && !c.isBuffer(e) && (e = function(e) {
                        return c.from(e)
                    }(e)),
                    "function" == typeof t && (n = t,
                    t = null),
                    a ? t = "buffer" : t || (t = i.defaultEncoding),
                    "function" != typeof n && (n = S),
                    i.ending ? function(e, t) {
                        var n = new v;
                        _(e, n),
                        r.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, s) {
                        var i;
                        return null === n ? i = new w : "string" == typeof n || t.objectMode || (i = new h("chunk",["string", "Buffer"],n)),
                        !i || (_(e, i),
                        r.nextTick(s, i),
                        !1)
                    }(this, i, e, n)) && (i.pendingcb++,
                    o = function(e, t, r, n, s, i) {
                        if (!r) {
                            var o = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = c.from(t, r));
                                return t
                            }(t, n, s);
                            n !== o && (r = !0,
                            s = "buffer",
                            n = o)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var l = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: s,
                                isBuf: r,
                                callback: i,
                                next: null
                            },
                            l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            R(e, t, !1, a, n, s, i);
                        return u
                    }(this, i, a, e, t, n)),
                    o
                }
                ,
                I.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                I.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || C(this, e))
                }
                ,
                I.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new E(e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(I.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(I.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                I.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }
                ,
                I.prototype._writev = null,
                I.prototype.end = function(e, t, n) {
                    var s = this._writableState;
                    return "function" == typeof e ? (n = e,
                    e = null,
                    t = null) : "function" == typeof t && (n = t,
                    t = null),
                    null != e && this.write(e, t),
                    s.corked && (s.corked = 1,
                    this.uncork()),
                    s.ending || function(e, t, n) {
                        t.ending = !0,
                        N(e, t),
                        n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                        t.ended = !0,
                        e.writable = !1
                    }(this, s, n),
                    this
                }
                ,
                Object.defineProperty(I.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(I.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                I.prototype.destroy = f.destroy,
                I.prototype._undestroy = f.undestroy,
                I.prototype._destroy = function(e, t) {
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 114,
        "./_stream_duplex": 115,
        "./internal/streams/destroy": 122,
        "./internal/streams/state": 126,
        "./internal/streams/stream": 127,
        _process: 113,
        buffer: 98,
        inherits: 106,
        "util-deprecate": 176
    }],
    120: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n;
                function s(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r,
                    e
                }
                var i = e("./end-of-stream")
                  , o = Symbol("lastResolve")
                  , a = Symbol("lastReject")
                  , c = Symbol("error")
                  , u = Symbol("ended")
                  , l = Symbol("lastPromise")
                  , f = Symbol("handlePromise")
                  , d = Symbol("stream");
                function p(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                function h(e) {
                    var t = e[o];
                    if (null !== t) {
                        var r = e[d].read();
                        null !== r && (e[l] = null,
                        e[o] = null,
                        e[a] = null,
                        t(p(r, !1)))
                    }
                }
                function g(e) {
                    r.nextTick(h, e)
                }
                var m = Object.getPrototypeOf((function() {}
                ))
                  , y = Object.setPrototypeOf((s(n = {
                    get stream() {
                        return this[d]
                    },
                    next: function() {
                        var e = this
                          , t = this[c];
                        if (null !== t)
                            return Promise.reject(t);
                        if (this[u])
                            return Promise.resolve(p(void 0, !0));
                        if (this[d].destroyed)
                            return new Promise((function(t, n) {
                                r.nextTick((function() {
                                    e[c] ? n(e[c]) : t(p(void 0, !0))
                                }
                                ))
                            }
                            ));
                        var n, s = this[l];
                        if (s)
                            n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then((function() {
                                        t[u] ? r(p(void 0, !0)) : t[f](r, n)
                                    }
                                    ), n)
                                }
                            }(s, this));
                        else {
                            var i = this[d].read();
                            if (null !== i)
                                return Promise.resolve(p(i, !1));
                            n = new Promise(this[f])
                        }
                        return this[l] = n,
                        n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                }
                )),
                s(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[d].destroy(null, (function(e) {
                            e ? r(e) : t(p(void 0, !0))
                        }
                        ))
                    }
                    ))
                }
                )),
                n), m);
                t.exports = function(e) {
                    var t, r = Object.create(y, (s(t = {}, d, {
                        value: e,
                        writable: !0
                    }),
                    s(t, o, {
                        value: null,
                        writable: !0
                    }),
                    s(t, a, {
                        value: null,
                        writable: !0
                    }),
                    s(t, c, {
                        value: null,
                        writable: !0
                    }),
                    s(t, u, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }),
                    s(t, f, {
                        value: function(e, t) {
                            var n = r[d].read();
                            n ? (r[l] = null,
                            r[o] = null,
                            r[a] = null,
                            e(p(n, !1))) : (r[o] = e,
                            r[a] = t)
                        },
                        writable: !0
                    }),
                    t));
                    return r[l] = null,
                    i(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[l] = null,
                            r[o] = null,
                            r[a] = null,
                            t(e)),
                            void (r[c] = e)
                        }
                        var n = r[o];
                        null !== n && (r[l] = null,
                        r[o] = null,
                        r[a] = null,
                        n(p(void 0, !0))),
                        r[u] = !0
                    }
                    )),
                    e.on("readable", g.bind(null, r)),
                    r
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./end-of-stream": 123,
        _process: 113
    }],
    121: [function(e, t, r) {
        "use strict";
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    i(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function i(e, t, r) {
            return (t = a(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, a(n.key), n)
            }
        }
        function a(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : String(t)
        }
        var c = e("buffer").Buffer
          , u = e("util").inspect
          , l = u && u.custom || "inspect";
        t.exports = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                    this.head = t,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length)
                        return "";
                    for (var t = this.head, r = "" + t.data; t = t.next; )
                        r += e + t.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length)
                        return c.alloc(0);
                    for (var t, r, n, s = c.allocUnsafe(e >>> 0), i = this.head, o = 0; i; )
                        t = i.data,
                        r = s,
                        n = o,
                        c.prototype.copy.call(t, r, n),
                        o += i.data.length,
                        i = i.next;
                    return s
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var r;
                    return e < this.head.data.length ? (r = this.head.data.slice(0, e),
                    this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e),
                    r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head
                      , r = 1
                      , n = t.data;
                    for (e -= n.length; t = t.next; ) {
                        var s = t.data
                          , i = e > s.length ? s.length : e;
                        if (i === s.length ? n += s : n += s.slice(0, e),
                        0 == (e -= i)) {
                            i === s.length ? (++r,
                            t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t,
                            t.data = s.slice(i));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = c.allocUnsafe(e)
                      , r = this.head
                      , n = 1;
                    for (r.data.copy(t),
                    e -= r.data.length; r = r.next; ) {
                        var s = r.data
                          , i = e > s.length ? s.length : e;
                        if (s.copy(t, t.length - e, 0, i),
                        0 == (e -= i)) {
                            i === s.length ? (++n,
                            r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r,
                            r.data = s.slice(i));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    t
                }
            }, {
                key: l,
                value: function(e, t) {
                    return u(this, s(s({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && o(t.prototype, r),
            n && o(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
    , {
        buffer: 98,
        util: 97
    }],
    122: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                function r(e, t) {
                    s(e, t),
                    n(e)
                }
                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }
                function s(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, i) {
                        var o = this
                          , a = this._readableState && this._readableState.destroyed
                          , c = this._writableState && this._writableState.destroyed;
                        return a || c ? (i ? i(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                        e.nextTick(s, this, t)) : e.nextTick(s, this, t)),
                        this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(t || null, (function(t) {
                            !i && t ? o._writableState ? o._writableState.errorEmitted ? e.nextTick(n, o) : (o._writableState.errorEmitted = !0,
                            e.nextTick(r, o, t)) : e.nextTick(r, o, t) : i ? (e.nextTick(n, o),
                            i(t)) : e.nextTick(n, o)
                        }
                        )),
                        this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1,
                        this._readableState.reading = !1,
                        this._readableState.ended = !1,
                        this._readableState.endEmitted = !1),
                        this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finalCalled = !1,
                        this._writableState.prefinished = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState
                          , n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 113
    }],
    123: [function(e, t, r) {
        "use strict";
        var n = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
        function s() {}
        t.exports = function e(t, r, i) {
            if ("function" == typeof r)
                return e(t, null, r);
            r || (r = {}),
            i = function(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
                            n[s] = arguments[s];
                        e.apply(this, n)
                    }
                }
            }(i || s);
            var o = r.readable || !1 !== r.readable && t.readable
              , a = r.writable || !1 !== r.writable && t.writable
              , c = function() {
                t.writable || l()
            }
              , u = t._writableState && t._writableState.finished
              , l = function() {
                a = !1,
                u = !0,
                o || i.call(t)
            }
              , f = t._readableState && t._readableState.endEmitted
              , d = function() {
                o = !1,
                f = !0,
                a || i.call(t)
            }
              , p = function(e) {
                i.call(t, e)
            }
              , h = function() {
                var e;
                return o && !f ? (t._readableState && t._readableState.ended || (e = new n),
                i.call(t, e)) : a && !u ? (t._writableState && t._writableState.ended || (e = new n),
                i.call(t, e)) : void 0
            }
              , g = function() {
                t.req.on("finish", l)
            };
            return !function(e) {
                return e.setHeader && "function" == typeof e.abort
            }(t) ? a && !t._writableState && (t.on("end", c),
            t.on("close", c)) : (t.on("complete", l),
            t.on("abort", h),
            t.req ? g() : t.on("request", g)),
            t.on("end", d),
            t.on("finish", l),
            !1 !== r.error && t.on("error", p),
            t.on("close", h),
            function() {
                t.removeListener("complete", l),
                t.removeListener("abort", h),
                t.removeListener("request", g),
                t.req && t.req.removeListener("finish", l),
                t.removeListener("end", c),
                t.removeListener("close", c),
                t.removeListener("finish", l),
                t.removeListener("end", d),
                t.removeListener("error", p),
                t.removeListener("close", h)
            }
        }
    }
    , {
        "../../../errors": 114
    }],
    124: [function(e, t, r) {
        t.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    }
    , {}],
    125: [function(e, t, r) {
        "use strict";
        var n;
        var s = e("../../../errors").codes
          , i = s.ERR_MISSING_ARGS
          , o = s.ERR_STREAM_DESTROYED;
        function a(e) {
            if (e)
                throw e
        }
        function c(e) {
            e()
        }
        function u(e, t) {
            return e.pipe(t)
        }
        t.exports = function() {
            for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
                r[s] = arguments[s];
            var l, f = function(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
            }(r);
            if (Array.isArray(r[0]) && (r = r[0]),
            r.length < 2)
                throw new i("streams");
            var d = r.map((function(t, s) {
                var i = s < r.length - 1;
                return function(t, r, s, i) {
                    i = function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0,
                            e.apply(void 0, arguments))
                        }
                    }(i);
                    var a = !1;
                    t.on("close", (function() {
                        a = !0
                    }
                    )),
                    void 0 === n && (n = e("./end-of-stream")),
                    n(t, {
                        readable: r,
                        writable: s
                    }, (function(e) {
                        if (e)
                            return i(e);
                        a = !0,
                        i()
                    }
                    ));
                    var c = !1;
                    return function(e) {
                        if (!a && !c)
                            return c = !0,
                            function(e) {
                                return e.setHeader && "function" == typeof e.abort
                            }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void i(e || new o("pipe"))
                    }
                }(t, i, s > 0, (function(e) {
                    l || (l = e),
                    e && d.forEach(c),
                    i || (d.forEach(c),
                    f(l))
                }
                ))
            }
            ));
            return r.reduce(u)
        }
    }
    , {
        "../../../errors": 114,
        "./end-of-stream": 123
    }],
    126: [function(e, t, r) {
        "use strict";
        var n = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        t.exports = {
            getHighWaterMark: function(e, t, r, s) {
                var i = function(e, t, r) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                }(t, s, r);
                if (null != i) {
                    if (!isFinite(i) || Math.floor(i) !== i || i < 0)
                        throw new n(s ? r : "highWaterMark",i);
                    return Math.floor(i)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    }
    , {
        "../../../errors": 114
    }],
    127: [function(e, t, r) {
        t.exports = e("events").EventEmitter
    }
    , {
        events: 102
    }],
    128: [function(e, t, r) {
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = r,
        r.Readable = r,
        r.Writable = e("./lib/_stream_writable.js"),
        r.Duplex = e("./lib/_stream_duplex.js"),
        r.Transform = e("./lib/_stream_transform.js"),
        r.PassThrough = e("./lib/_stream_passthrough.js"),
        r.finished = e("./lib/internal/streams/end-of-stream.js"),
        r.pipeline = e("./lib/internal/streams/pipeline.js")
    }
    , {
        "./lib/_stream_duplex.js": 115,
        "./lib/_stream_passthrough.js": 116,
        "./lib/_stream_readable.js": 117,
        "./lib/_stream_transform.js": 118,
        "./lib/_stream_writable.js": 119,
        "./lib/internal/streams/end-of-stream.js": 123,
        "./lib/internal/streams/pipeline.js": 125
    }],
    129: [function(e, t, r) {
        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        var n = e("buffer")
          , s = n.Buffer;
        function i(e, t) {
            for (var r in e)
                t[r] = e[r]
        }
        function o(e, t, r) {
            return s(e, t, r)
        }
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t.exports = n : (i(n, r),
        r.Buffer = o),
        o.prototype = Object.create(s.prototype),
        i(s, o),
        o.from = function(e, t, r) {
            if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
            return s(e, t, r)
        }
        ,
        o.alloc = function(e, t, r) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            var n = s(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
            n
        }
        ,
        o.allocUnsafe = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return s(e)
        }
        ,
        o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }
    , {
        buffer: 98
    }],
    130: [function(e, t, r) {
        const n = Symbol("SemVer ANY");
        class s {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = i(t),
                e instanceof s) {
                    if (e.loose === !!t.loose)
                        return e;
                    e = e.value
                }
                e = e.trim().split(/\s+/).join(" "),
                u("comparator", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.parse(e),
                this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version,
                u("comp", this)
            }
            parse(e) {
                const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR]
                  , r = e.match(t);
                if (!r)
                    throw new TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== r[1] ? r[1] : "",
                "=" === this.operator && (this.operator = ""),
                r[2] ? this.semver = new l(r[2],this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (u("Comparator.test", e, this.options.loose),
                this.semver === n || e === n)
                    return !0;
                if ("string" == typeof e)
                    try {
                        e = new l(e,this.options)
                    } catch (e) {
                        return !1
                    }
                return c(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof s))
                    throw new TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new f(e.value,t).test(this.value) : "" === e.operator ? "" === e.value || new f(this.value,t).test(e.semver) : (!(t = i(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(c(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(c(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
            }
        }
        t.exports = s;
        const i = e("../internal/parse-options")
          , {safeRe: o, t: a} = e("../internal/re")
          , c = e("../functions/cmp")
          , u = e("../internal/debug")
          , l = e("./semver")
          , f = e("./range")
    }
    , {
        "../functions/cmp": 134,
        "../internal/debug": 159,
        "../internal/parse-options": 162,
        "../internal/re": 163,
        "./range": 131,
        "./semver": 132
    }],
    131: [function(e, t, r) {
        const n = /\s+/g;
        class s {
            constructor(e, t) {
                if (t = o(t),
                e instanceof s)
                    return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new s(e.raw,t);
                if (e instanceof a)
                    return this.raw = e.value,
                    this.set = [[e]],
                    this.formatted = void 0,
                    this;
                if (this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease,
                this.raw = e.trim().replace(n, " "),
                this.set = this.raw.split("||").map((e => this.parseRange(e.trim()))).filter((e => e.length)),
                !this.set.length)
                    throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter((e => !y(e[0]))),
                    0 === this.set.length)
                        this.set = [e];
                    else if (this.set.length > 1)
                        for (const e of this.set)
                            if (1 === e.length && b(e[0])) {
                                this.set = [e];
                                break
                            }
                }
                this.formatted = void 0
            }
            get range() {
                if (void 0 === this.formatted) {
                    this.formatted = "";
                    for (let e = 0; e < this.set.length; e++) {
                        e > 0 && (this.formatted += "||");
                        const t = this.set[e];
                        for (let e = 0; e < t.length; e++)
                            e > 0 && (this.formatted += " "),
                            this.formatted += t[e].toString().trim()
                    }
                }
                return this.formatted
            }
            format() {
                return this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                const t = ((this.options.includePrerelease && g) | (this.options.loose && m)) + ":" + e
                  , r = i.get(t);
                if (r)
                    return r;
                const n = this.options.loose
                  , s = n ? l[f.HYPHENRANGELOOSE] : l[f.HYPHENRANGE];
                e = e.replace(s, O(this.options.includePrerelease)),
                c("hyphen replace", e),
                e = e.replace(l[f.COMPARATORTRIM], d),
                c("comparator trim", e),
                e = e.replace(l[f.TILDETRIM], p),
                c("tilde trim", e),
                e = e.replace(l[f.CARETTRIM], h),
                c("caret trim", e);
                let o = e.split(" ").map((e => v(e, this.options))).join(" ").split(/\s+/).map((e => A(e, this.options)));
                n && (o = o.filter((e => (c("loose invalid filter", e, this.options),
                !!e.match(l[f.COMPARATORLOOSE]))))),
                c("range list", o);
                const u = new Map
                  , b = o.map((e => new a(e,this.options)));
                for (const e of b) {
                    if (y(e))
                        return [e];
                    u.set(e.value, e)
                }
                u.size > 1 && u.has("") && u.delete("");
                const w = [...u.values()];
                return i.set(t, w),
                w
            }
            intersects(e, t) {
                if (!(e instanceof s))
                    throw new TypeError("a Range is required");
                return this.set.some((r => w(r, t) && e.set.some((e => w(e, t) && r.every((r => e.every((e => r.intersects(e, t)))))))))
            }
            test(e) {
                if (!e)
                    return !1;
                if ("string" == typeof e)
                    try {
                        e = new u(e,this.options)
                    } catch (e) {
                        return !1
                    }
                for (let t = 0; t < this.set.length; t++)
                    if (N(this.set[t], e, this.options))
                        return !0;
                return !1
            }
        }
        t.exports = s;
        const i = new (e("../internal/lrucache"))
          , o = e("../internal/parse-options")
          , a = e("./comparator")
          , c = e("../internal/debug")
          , u = e("./semver")
          , {safeRe: l, t: f, comparatorTrimReplace: d, tildeTrimReplace: p, caretTrimReplace: h} = e("../internal/re")
          , {FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: m} = e("../internal/constants")
          , y = e => "<0.0.0-0" === e.value
          , b = e => "" === e.value
          , w = (e, t) => {
            let r = !0;
            const n = e.slice();
            let s = n.pop();
            for (; r && n.length; )
                r = n.every((e => s.intersects(e, t))),
                s = n.pop();
            return r
        }
          , v = (e, t) => (c("comp", e, t),
        e = j(e, t),
        c("caret", e),
        e = _(e, t),
        c("tildes", e),
        e = R(e, t),
        c("xrange", e),
        e = C(e, t),
        c("stars", e),
        e)
          , E = e => !e || "x" === e.toLowerCase() || "*" === e
          , _ = (e, t) => e.trim().split(/\s+/).map((e => S(e, t))).join(" ")
          , S = (e, t) => {
            const r = t.loose ? l[f.TILDELOOSE] : l[f.TILDE];
            return e.replace(r, ( (t, r, n, s, i) => {
                let o;
                return c("tilde", e, t, r, n, s, i),
                E(r) ? o = "" : E(n) ? o = `>=${r}.0.0 <${+r + 1}.0.0-0` : E(s) ? o = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : i ? (c("replaceTilde pr", i),
                o = `>=${r}.${n}.${s}-${i} <${r}.${+n + 1}.0-0`) : o = `>=${r}.${n}.${s} <${r}.${+n + 1}.0-0`,
                c("tilde return", o),
                o
            }
            ))
        }
          , j = (e, t) => e.trim().split(/\s+/).map((e => I(e, t))).join(" ")
          , I = (e, t) => {
            c("caret", e, t);
            const r = t.loose ? l[f.CARETLOOSE] : l[f.CARET]
              , n = t.includePrerelease ? "-0" : "";
            return e.replace(r, ( (t, r, s, i, o) => {
                let a;
                return c("caret", e, t, r, s, i, o),
                E(r) ? a = "" : E(s) ? a = `>=${r}.0.0${n} <${+r + 1}.0.0-0` : E(i) ? a = "0" === r ? `>=${r}.${s}.0${n} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.0${n} <${+r + 1}.0.0-0` : o ? (c("replaceCaret pr", o),
                a = "0" === r ? "0" === s ? `>=${r}.${s}.${i}-${o} <${r}.${s}.${+i + 1}-0` : `>=${r}.${s}.${i}-${o} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.${i}-${o} <${+r + 1}.0.0-0`) : (c("no pr"),
                a = "0" === r ? "0" === s ? `>=${r}.${s}.${i}${n} <${r}.${s}.${+i + 1}-0` : `>=${r}.${s}.${i}${n} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.${i} <${+r + 1}.0.0-0`),
                c("caret return", a),
                a
            }
            ))
        }
          , R = (e, t) => (c("replaceXRanges", e, t),
        e.split(/\s+/).map((e => M(e, t))).join(" "))
          , M = (e, t) => {
            e = e.trim();
            const r = t.loose ? l[f.XRANGELOOSE] : l[f.XRANGE];
            return e.replace(r, ( (r, n, s, i, o, a) => {
                c("xRange", e, r, n, s, i, o, a);
                const u = E(s)
                  , l = u || E(i)
                  , f = l || E(o)
                  , d = f;
                return "=" === n && d && (n = ""),
                a = t.includePrerelease ? "-0" : "",
                u ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && d ? (l && (i = 0),
                o = 0,
                ">" === n ? (n = ">=",
                l ? (s = +s + 1,
                i = 0,
                o = 0) : (i = +i + 1,
                o = 0)) : "<=" === n && (n = "<",
                l ? s = +s + 1 : i = +i + 1),
                "<" === n && (a = "-0"),
                r = `${n + s}.${i}.${o}${a}`) : l ? r = `>=${s}.0.0${a} <${+s + 1}.0.0-0` : f && (r = `>=${s}.${i}.0${a} <${s}.${+i + 1}.0-0`),
                c("xRange return", r),
                r
            }
            ))
        }
          , C = (e, t) => (c("replaceStars", e, t),
        e.trim().replace(l[f.STAR], ""))
          , A = (e, t) => (c("replaceGTE0", e, t),
        e.trim().replace(l[t.includePrerelease ? f.GTE0PRE : f.GTE0], ""))
          , O = e => (t, r, n, s, i, o, a, c, u, l, f, d) => `${r = E(n) ? "" : E(s) ? `>=${n}.0.0${e ? "-0" : ""}` : E(i) ? `>=${n}.${s}.0${e ? "-0" : ""}` : o ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${c = E(u) ? "" : E(l) ? `<${+u + 1}.0.0-0` : E(f) ? `<${u}.${+l + 1}.0-0` : d ? `<=${u}.${l}.${f}-${d}` : e ? `<${u}.${l}.${+f + 1}-0` : `<=${c}`}`.trim()
          , N = (e, t, r) => {
            for (let r = 0; r < e.length; r++)
                if (!e[r].test(t))
                    return !1;
            if (t.prerelease.length && !r.includePrerelease) {
                for (let r = 0; r < e.length; r++)
                    if (c(e[r].semver),
                    e[r].semver !== a.ANY && e[r].semver.prerelease.length > 0) {
                        const n = e[r].semver;
                        if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
                            return !0
                    }
                return !1
            }
            return !0
        }
    }
    , {
        "../internal/constants": 158,
        "../internal/debug": 159,
        "../internal/lrucache": 161,
        "../internal/parse-options": 162,
        "../internal/re": 163,
        "./comparator": 130,
        "./semver": 132
    }],
    132: [function(e, t, r) {
        const n = e("../internal/debug")
          , {MAX_LENGTH: s, MAX_SAFE_INTEGER: i} = e("../internal/constants")
          , {safeRe: o, t: a} = e("../internal/re")
          , c = e("../internal/parse-options")
          , {compareIdentifiers: u} = e("../internal/identifiers");
        class l {
            constructor(e, t) {
                if (t = c(t),
                e instanceof l) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
                        return e;
                    e = e.version
                } else if ("string" != typeof e)
                    throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > s)
                    throw new TypeError(`version is longer than ${s} characters`);
                n("SemVer", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease;
                const r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                if (!r)
                    throw new TypeError(`Invalid Version: ${e}`);
                if (this.raw = e,
                this.major = +r[1],
                this.minor = +r[2],
                this.patch = +r[3],
                this.major > i || this.major < 0)
                    throw new TypeError("Invalid major version");
                if (this.minor > i || this.minor < 0)
                    throw new TypeError("Invalid minor version");
                if (this.patch > i || this.patch < 0)
                    throw new TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map((e => {
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < i)
                            return t
                    }
                    return e
                }
                )) : this.prerelease = [],
                this.build = r[5] ? r[5].split(".") : [],
                this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`,
                this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e),
                !(e instanceof l)) {
                    if ("string" == typeof e && e === this.version)
                        return 0;
                    e = new l(e,this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof l || (e = new l(e,this.options)),
                u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof l || (e = new l(e,this.options)),
                this.prerelease.length && !e.prerelease.length)
                    return -1;
                if (!this.prerelease.length && e.prerelease.length)
                    return 1;
                if (!this.prerelease.length && !e.prerelease.length)
                    return 0;
                let t = 0;
                do {
                    const r = this.prerelease[t]
                      , s = e.prerelease[t];
                    if (n("prerelease compare", t, r, s),
                    void 0 === r && void 0 === s)
                        return 0;
                    if (void 0 === s)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== s)
                        return u(r, s)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof l || (e = new l(e,this.options));
                let t = 0;
                do {
                    const r = this.build[t]
                      , s = e.build[t];
                    if (n("build compare", t, r, s),
                    void 0 === r && void 0 === s)
                        return 0;
                    if (void 0 === s)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== s)
                        return u(r, s)
                } while (++t)
            }
            inc(e, t, r) {
                switch (e) {
                case "premajor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor = 0,
                    this.major++,
                    this.inc("pre", t, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor++,
                    this.inc("pre", t, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0,
                    this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                    this.minor = 0,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++,
                    this.prerelease = [];
                    break;
                case "pre":
                    {
                        const e = Number(r) ? 1 : 0;
                        if (!t && !1 === r)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (0 === this.prerelease.length)
                            this.prerelease = [e];
                        else {
                            let n = this.prerelease.length;
                            for (; --n >= 0; )
                                "number" == typeof this.prerelease[n] && (this.prerelease[n]++,
                                n = -2);
                            if (-1 === n) {
                                if (t === this.prerelease.join(".") && !1 === r)
                                    throw new Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let n = [t, e];
                            !1 === r && (n = [t]),
                            0 === u(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                        }
                        break
                    }
                default:
                    throw new Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(),
                this.build.length && (this.raw += `+${this.build.join(".")}`),
                this
            }
        }
        t.exports = l
    }
    , {
        "../internal/constants": 158,
        "../internal/debug": 159,
        "../internal/identifiers": 160,
        "../internal/parse-options": 162,
        "../internal/re": 163
    }],
    133: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e, t) => {
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 149
    }],
    134: [function(e, t, r) {
        const n = e("./eq")
          , s = e("./neq")
          , i = e("./gt")
          , o = e("./gte")
          , a = e("./lt")
          , c = e("./lte");
        t.exports = (e, t, r, u) => {
            switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e === r;
            case "!==":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e !== r;
            case "":
            case "=":
            case "==":
                return n(e, r, u);
            case "!=":
                return s(e, r, u);
            case ">":
                return i(e, r, u);
            case ">=":
                return o(e, r, u);
            case "<":
                return a(e, r, u);
            case "<=":
                return c(e, r, u);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
            }
        }
    }
    , {
        "./eq": 140,
        "./gt": 141,
        "./gte": 142,
        "./lt": 144,
        "./lte": 145,
        "./neq": 148
    }],
    135: [function(e, t, r) {
        const n = e("../classes/semver")
          , s = e("./parse")
          , {safeRe: i, t: o} = e("../internal/re");
        t.exports = (e, t) => {
            if (e instanceof n)
                return e;
            if ("number" == typeof e && (e = String(e)),
            "string" != typeof e)
                return null;
            let r = null;
            if ((t = t || {}).rtl) {
                const n = t.includePrerelease ? i[o.COERCERTLFULL] : i[o.COERCERTL];
                let s;
                for (; (s = n.exec(e)) && (!r || r.index + r[0].length !== e.length); )
                    r && s.index + s[0].length === r.index + r[0].length || (r = s),
                    n.lastIndex = s.index + s[1].length + s[2].length;
                n.lastIndex = -1
            } else
                r = e.match(t.includePrerelease ? i[o.COERCEFULL] : i[o.COERCE]);
            if (null === r)
                return null;
            const a = r[2]
              , c = r[3] || "0"
              , u = r[4] || "0"
              , l = t.includePrerelease && r[5] ? `-${r[5]}` : ""
              , f = t.includePrerelease && r[6] ? `+${r[6]}` : "";
            return s(`${a}.${c}.${u}${l}${f}`, t)
        }
    }
    , {
        "../classes/semver": 132,
        "../internal/re": 163,
        "./parse": 149
    }],
    136: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t, r) => {
            const s = new n(e,r)
              , i = new n(t,r);
            return s.compare(i) || s.compareBuild(i)
        }
    }
    , {
        "../classes/semver": 132
    }],
    137: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t) => n(e, t, !0)
    }
    , {
        "./compare": 138
    }],
    138: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t, r) => new n(e,r).compare(new n(t,r))
    }
    , {
        "../classes/semver": 132
    }],
    139: [function(e, t, r) {
        const n = e("./parse.js");
        t.exports = (e, t) => {
            const r = n(e, null, !0)
              , s = n(t, null, !0)
              , i = r.compare(s);
            if (0 === i)
                return null;
            const o = i > 0
              , a = o ? r : s
              , c = o ? s : r
              , u = !!a.prerelease.length;
            if (!!c.prerelease.length && !u)
                return c.patch || c.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const l = u ? "pre" : "";
            return r.major !== s.major ? l + "major" : r.minor !== s.minor ? l + "minor" : r.patch !== s.patch ? l + "patch" : "prerelease"
        }
    }
    , {
        "./parse.js": 149
    }],
    140: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => 0 === n(e, t, r)
    }
    , {
        "./compare": 138
    }],
    141: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => n(e, t, r) > 0
    }
    , {
        "./compare": 138
    }],
    142: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => n(e, t, r) >= 0
    }
    , {
        "./compare": 138
    }],
    143: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t, r, s, i) => {
            "string" == typeof r && (i = s,
            s = r,
            r = void 0);
            try {
                return new n(e instanceof n ? e.version : e,r).inc(t, s, i).version
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/semver": 132
    }],
    144: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => n(e, t, r) < 0
    }
    , {
        "./compare": 138
    }],
    145: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => n(e, t, r) <= 0
    }
    , {
        "./compare": 138
    }],
    146: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t) => new n(e,t).major
    }
    , {
        "../classes/semver": 132
    }],
    147: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t) => new n(e,t).minor
    }
    , {
        "../classes/semver": 132
    }],
    148: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => 0 !== n(e, t, r)
    }
    , {
        "./compare": 138
    }],
    149: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t, r=!1) => {
            if (e instanceof n)
                return e;
            try {
                return new n(e,t)
            } catch (e) {
                if (!r)
                    return null;
                throw e
            }
        }
    }
    , {
        "../classes/semver": 132
    }],
    150: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e, t) => new n(e,t).patch
    }
    , {
        "../classes/semver": 132
    }],
    151: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e, t) => {
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
    }
    , {
        "./parse": 149
    }],
    152: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e, t, r) => n(t, e, r)
    }
    , {
        "./compare": 138
    }],
    153: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e, t) => e.sort(( (e, r) => n(r, e, t)))
    }
    , {
        "./compare-build": 136
    }],
    154: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e, t, r) => {
            try {
                t = new n(t,r)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }
    }
    , {
        "../classes/range": 131
    }],
    155: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e, t) => e.sort(( (e, r) => n(e, r, t)))
    }
    , {
        "./compare-build": 136
    }],
    156: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e, t) => {
            const r = n(e, t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 149
    }],
    157: [function(e, t, r) {
        const n = e("./internal/re")
          , s = e("./internal/constants")
          , i = e("./classes/semver")
          , o = e("./internal/identifiers")
          , a = e("./functions/parse")
          , c = e("./functions/valid")
          , u = e("./functions/clean")
          , l = e("./functions/inc")
          , f = e("./functions/diff")
          , d = e("./functions/major")
          , p = e("./functions/minor")
          , h = e("./functions/patch")
          , g = e("./functions/prerelease")
          , m = e("./functions/compare")
          , y = e("./functions/rcompare")
          , b = e("./functions/compare-loose")
          , w = e("./functions/compare-build")
          , v = e("./functions/sort")
          , E = e("./functions/rsort")
          , _ = e("./functions/gt")
          , S = e("./functions/lt")
          , j = e("./functions/eq")
          , I = e("./functions/neq")
          , R = e("./functions/gte")
          , M = e("./functions/lte")
          , C = e("./functions/cmp")
          , A = e("./functions/coerce")
          , O = e("./classes/comparator")
          , N = e("./classes/range")
          , P = e("./functions/satisfies")
          , T = e("./ranges/to-comparators")
          , x = e("./ranges/max-satisfying")
          , L = e("./ranges/min-satisfying")
          , k = e("./ranges/min-version")
          , D = e("./ranges/valid")
          , $ = e("./ranges/outside")
          , U = e("./ranges/gtr")
          , B = e("./ranges/ltr")
          , z = e("./ranges/intersects")
          , F = e("./ranges/simplify")
          , J = e("./ranges/subset");
        t.exports = {
            parse: a,
            valid: c,
            clean: u,
            inc: l,
            diff: f,
            major: d,
            minor: p,
            patch: h,
            prerelease: g,
            compare: m,
            rcompare: y,
            compareLoose: b,
            compareBuild: w,
            sort: v,
            rsort: E,
            gt: _,
            lt: S,
            eq: j,
            neq: I,
            gte: R,
            lte: M,
            cmp: C,
            coerce: A,
            Comparator: O,
            Range: N,
            satisfies: P,
            toComparators: T,
            maxSatisfying: x,
            minSatisfying: L,
            minVersion: k,
            validRange: D,
            outside: $,
            gtr: U,
            ltr: B,
            intersects: z,
            simplifyRange: F,
            subset: J,
            SemVer: i,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: s.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: s.RELEASE_TYPES,
            compareIdentifiers: o.compareIdentifiers,
            rcompareIdentifiers: o.rcompareIdentifiers
        }
    }
    , {
        "./classes/comparator": 130,
        "./classes/range": 131,
        "./classes/semver": 132,
        "./functions/clean": 133,
        "./functions/cmp": 134,
        "./functions/coerce": 135,
        "./functions/compare": 138,
        "./functions/compare-build": 136,
        "./functions/compare-loose": 137,
        "./functions/diff": 139,
        "./functions/eq": 140,
        "./functions/gt": 141,
        "./functions/gte": 142,
        "./functions/inc": 143,
        "./functions/lt": 144,
        "./functions/lte": 145,
        "./functions/major": 146,
        "./functions/minor": 147,
        "./functions/neq": 148,
        "./functions/parse": 149,
        "./functions/patch": 150,
        "./functions/prerelease": 151,
        "./functions/rcompare": 152,
        "./functions/rsort": 153,
        "./functions/satisfies": 154,
        "./functions/sort": 155,
        "./functions/valid": 156,
        "./internal/constants": 158,
        "./internal/identifiers": 160,
        "./internal/re": 163,
        "./ranges/gtr": 164,
        "./ranges/intersects": 165,
        "./ranges/ltr": 166,
        "./ranges/max-satisfying": 167,
        "./ranges/min-satisfying": 168,
        "./ranges/min-version": 169,
        "./ranges/outside": 170,
        "./ranges/simplify": 171,
        "./ranges/subset": 172,
        "./ranges/to-comparators": 173,
        "./ranges/valid": 174
    }],
    158: [function(e, t, r) {
        const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
        t.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: n,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    }
    , {}],
    159: [function(e, t, r) {
        (function(e) {
            (function() {
                const r = ("object" == typeof e && e.env,
                () => {}
                );
                t.exports = r
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 113
    }],
    160: [function(e, t, r) {
        const n = /^[0-9]+$/
          , s = (e, t) => {
            const r = n.test(e)
              , s = n.test(t);
            return r && s && (e = +e,
            t = +t),
            e === t ? 0 : r && !s ? -1 : s && !r ? 1 : e < t ? -1 : 1
        }
        ;
        t.exports = {
            compareIdentifiers: s,
            rcompareIdentifiers: (e, t) => s(t, e)
        }
    }
    , {}],
    161: [function(e, t, r) {
        t.exports = class {
            constructor() {
                this.max = 1e3,
                this.map = new Map
            }
            get(e) {
                const t = this.map.get(e);
                return void 0 === t ? void 0 : (this.map.delete(e),
                this.map.set(e, t),
                t)
            }
            delete(e) {
                return this.map.delete(e)
            }
            set(e, t) {
                if (!this.delete(e) && void 0 !== t) {
                    if (this.map.size >= this.max) {
                        const e = this.map.keys().next().value;
                        this.delete(e)
                    }
                    this.map.set(e, t)
                }
                return this
            }
        }
    }
    , {}],
    162: [function(e, t, r) {
        const n = Object.freeze({
            loose: !0
        })
          , s = Object.freeze({});
        t.exports = e => e ? "object" != typeof e ? n : e : s
    }
    , {}],
    163: [function(e, t, r) {
        const {MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: s, MAX_LENGTH: i} = e("./constants")
          , o = e("./debug")
          , a = (r = t.exports = {}).re = []
          , c = r.safeRe = []
          , u = r.src = []
          , l = r.t = {};
        let f = 0;
        const d = "[a-zA-Z0-9-]"
          , p = [["\\s", 1], ["\\d", i], [d, s]]
          , h = (e, t, r) => {
            const n = (e => {
                for (const [t,r] of p)
                    e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            }
            )(t)
              , s = f++;
            o(e, s, t),
            l[e] = s,
            u[s] = t,
            a[s] = new RegExp(t,r ? "g" : void 0),
            c[s] = new RegExp(n,r ? "g" : void 0)
        }
        ;
        h("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        h("NUMERICIDENTIFIERLOOSE", "\\d+"),
        h("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`),
        h("MAINVERSION", `(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})`),
        h("MAINVERSIONLOOSE", `(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})`),
        h("PRERELEASEIDENTIFIER", `(?:${u[l.NUMERICIDENTIFIER]}|${u[l.NONNUMERICIDENTIFIER]})`),
        h("PRERELEASEIDENTIFIERLOOSE", `(?:${u[l.NUMERICIDENTIFIERLOOSE]}|${u[l.NONNUMERICIDENTIFIER]})`),
        h("PRERELEASE", `(?:-(${u[l.PRERELEASEIDENTIFIER]}(?:\\.${u[l.PRERELEASEIDENTIFIER]})*))`),
        h("PRERELEASELOOSE", `(?:-?(${u[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[l.PRERELEASEIDENTIFIERLOOSE]})*))`),
        h("BUILDIDENTIFIER", `${d}+`),
        h("BUILD", `(?:\\+(${u[l.BUILDIDENTIFIER]}(?:\\.${u[l.BUILDIDENTIFIER]})*))`),
        h("FULLPLAIN", `v?${u[l.MAINVERSION]}${u[l.PRERELEASE]}?${u[l.BUILD]}?`),
        h("FULL", `^${u[l.FULLPLAIN]}$`),
        h("LOOSEPLAIN", `[v=\\s]*${u[l.MAINVERSIONLOOSE]}${u[l.PRERELEASELOOSE]}?${u[l.BUILD]}?`),
        h("LOOSE", `^${u[l.LOOSEPLAIN]}$`),
        h("GTLT", "((?:<|>)?=?)"),
        h("XRANGEIDENTIFIERLOOSE", `${u[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        h("XRANGEIDENTIFIER", `${u[l.NUMERICIDENTIFIER]}|x|X|\\*`),
        h("XRANGEPLAIN", `[v=\\s]*(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:${u[l.PRERELEASE]})?${u[l.BUILD]}?)?)?`),
        h("XRANGEPLAINLOOSE", `[v=\\s]*(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:${u[l.PRERELEASELOOSE]})?${u[l.BUILD]}?)?)?`),
        h("XRANGE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAIN]}$`),
        h("XRANGELOOSE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAINLOOSE]}$`),
        h("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),
        h("COERCE", `${u[l.COERCEPLAIN]}(?:$|[^\\d])`),
        h("COERCEFULL", u[l.COERCEPLAIN] + `(?:${u[l.PRERELEASE]})?` + `(?:${u[l.BUILD]})?(?:$|[^\\d])`),
        h("COERCERTL", u[l.COERCE], !0),
        h("COERCERTLFULL", u[l.COERCEFULL], !0),
        h("LONETILDE", "(?:~>?)"),
        h("TILDETRIM", `(\\s*)${u[l.LONETILDE]}\\s+`, !0),
        r.tildeTrimReplace = "$1~",
        h("TILDE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAIN]}$`),
        h("TILDELOOSE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAINLOOSE]}$`),
        h("LONECARET", "(?:\\^)"),
        h("CARETTRIM", `(\\s*)${u[l.LONECARET]}\\s+`, !0),
        r.caretTrimReplace = "$1^",
        h("CARET", `^${u[l.LONECARET]}${u[l.XRANGEPLAIN]}$`),
        h("CARETLOOSE", `^${u[l.LONECARET]}${u[l.XRANGEPLAINLOOSE]}$`),
        h("COMPARATORLOOSE", `^${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]})$|^$`),
        h("COMPARATOR", `^${u[l.GTLT]}\\s*(${u[l.FULLPLAIN]})$|^$`),
        h("COMPARATORTRIM", `(\\s*)${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]}|${u[l.XRANGEPLAIN]})`, !0),
        r.comparatorTrimReplace = "$1$2$3",
        h("HYPHENRANGE", `^\\s*(${u[l.XRANGEPLAIN]})\\s+-\\s+(${u[l.XRANGEPLAIN]})\\s*$`),
        h("HYPHENRANGELOOSE", `^\\s*(${u[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[l.XRANGEPLAINLOOSE]})\\s*$`),
        h("STAR", "(<|>)?=?\\s*\\*"),
        h("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        h("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    }
    , {
        "./constants": 158,
        "./debug": 159
    }],
    164: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e, t, r) => n(e, t, ">", r)
    }
    , {
        "./outside": 170
    }],
    165: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e, t, r) => (e = new n(e,r),
        t = new n(t,r),
        e.intersects(t, r))
    }
    , {
        "../classes/range": 131
    }],
    166: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e, t, r) => n(e, t, "<", r)
    }
    , {
        "./outside": 170
    }],
    167: [function(e, t, r) {
        const n = e("../classes/semver")
          , s = e("../classes/range");
        t.exports = (e, t, r) => {
            let i = null
              , o = null
              , a = null;
            try {
                a = new s(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e => {
                a.test(e) && (i && -1 !== o.compare(e) || (i = e,
                o = new n(i,r)))
            }
            )),
            i
        }
    }
    , {
        "../classes/range": 131,
        "../classes/semver": 132
    }],
    168: [function(e, t, r) {
        const n = e("../classes/semver")
          , s = e("../classes/range");
        t.exports = (e, t, r) => {
            let i = null
              , o = null
              , a = null;
            try {
                a = new s(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e => {
                a.test(e) && (i && 1 !== o.compare(e) || (i = e,
                o = new n(i,r)))
            }
            )),
            i
        }
    }
    , {
        "../classes/range": 131,
        "../classes/semver": 132
    }],
    169: [function(e, t, r) {
        const n = e("../classes/semver")
          , s = e("../classes/range")
          , i = e("../functions/gt");
        t.exports = (e, t) => {
            e = new s(e,t);
            let r = new n("0.0.0");
            if (e.test(r))
                return r;
            if (r = new n("0.0.0-0"),
            e.test(r))
                return r;
            r = null;
            for (let t = 0; t < e.set.length; ++t) {
                const s = e.set[t];
                let o = null;
                s.forEach((e => {
                    const t = new n(e.semver.version);
                    switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                        t.raw = t.format();
                    case "":
                    case ">=":
                        o && !i(t, o) || (o = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${e.operator}`)
                    }
                }
                )),
                !o || r && !i(r, o) || (r = o)
            }
            return r && e.test(r) ? r : null
        }
    }
    , {
        "../classes/range": 131,
        "../classes/semver": 132,
        "../functions/gt": 141
    }],
    170: [function(e, t, r) {
        const n = e("../classes/semver")
          , s = e("../classes/comparator")
          , {ANY: i} = s
          , o = e("../classes/range")
          , a = e("../functions/satisfies")
          , c = e("../functions/gt")
          , u = e("../functions/lt")
          , l = e("../functions/lte")
          , f = e("../functions/gte");
        t.exports = (e, t, r, d) => {
            let p, h, g, m, y;
            switch (e = new n(e,d),
            t = new o(t,d),
            r) {
            case ">":
                p = c,
                h = l,
                g = u,
                m = ">",
                y = ">=";
                break;
            case "<":
                p = u,
                h = f,
                g = c,
                m = "<",
                y = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, d))
                return !1;
            for (let r = 0; r < t.set.length; ++r) {
                const n = t.set[r];
                let o = null
                  , a = null;
                if (n.forEach((e => {
                    e.semver === i && (e = new s(">=0.0.0")),
                    o = o || e,
                    a = a || e,
                    p(e.semver, o.semver, d) ? o = e : g(e.semver, a.semver, d) && (a = e)
                }
                )),
                o.operator === m || o.operator === y)
                    return !1;
                if ((!a.operator || a.operator === m) && h(e, a.semver))
                    return !1;
                if (a.operator === y && g(e, a.semver))
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator": 130,
        "../classes/range": 131,
        "../classes/semver": 132,
        "../functions/gt": 141,
        "../functions/gte": 142,
        "../functions/lt": 144,
        "../functions/lte": 145,
        "../functions/satisfies": 154
    }],
    171: [function(e, t, r) {
        const n = e("../functions/satisfies.js")
          , s = e("../functions/compare.js");
        t.exports = (e, t, r) => {
            const i = [];
            let o = null
              , a = null;
            const c = e.sort(( (e, t) => s(e, t, r)));
            for (const e of c) {
                n(e, t, r) ? (a = e,
                o || (o = e)) : (a && i.push([o, a]),
                a = null,
                o = null)
            }
            o && i.push([o, null]);
            const u = [];
            for (const [e,t] of i)
                e === t ? u.push(e) : t || e !== c[0] ? t ? e === c[0] ? u.push(`<=${t}`) : u.push(`${e} - ${t}`) : u.push(`>=${e}`) : u.push("*");
            const l = u.join(" || ")
              , f = "string" == typeof t.raw ? t.raw : String(t);
            return l.length < f.length ? l : t
        }
    }
    , {
        "../functions/compare.js": 138,
        "../functions/satisfies.js": 154
    }],
    172: [function(e, t, r) {
        const n = e("../classes/range.js")
          , s = e("../classes/comparator.js")
          , {ANY: i} = s
          , o = e("../functions/satisfies.js")
          , a = e("../functions/compare.js")
          , c = [new s(">=0.0.0-0")]
          , u = [new s(">=0.0.0")]
          , l = (e, t, r) => {
            if (e === t)
                return !0;
            if (1 === e.length && e[0].semver === i) {
                if (1 === t.length && t[0].semver === i)
                    return !0;
                e = r.includePrerelease ? c : u
            }
            if (1 === t.length && t[0].semver === i) {
                if (r.includePrerelease)
                    return !0;
                t = u
            }
            const n = new Set;
            let s, l, p, h, g, m, y;
            for (const t of e)
                ">" === t.operator || ">=" === t.operator ? s = f(s, t, r) : "<" === t.operator || "<=" === t.operator ? l = d(l, t, r) : n.add(t.semver);
            if (n.size > 1)
                return null;
            if (s && l) {
                if (p = a(s.semver, l.semver, r),
                p > 0)
                    return null;
                if (0 === p && (">=" !== s.operator || "<=" !== l.operator))
                    return null
            }
            for (const e of n) {
                if (s && !o(e, String(s), r))
                    return null;
                if (l && !o(e, String(l), r))
                    return null;
                for (const n of t)
                    if (!o(e, String(n), r))
                        return !1;
                return !0
            }
            let b = !(!l || r.includePrerelease || !l.semver.prerelease.length) && l.semver
              , w = !(!s || r.includePrerelease || !s.semver.prerelease.length) && s.semver;
            b && 1 === b.prerelease.length && "<" === l.operator && 0 === b.prerelease[0] && (b = !1);
            for (const e of t) {
                if (y = y || ">" === e.operator || ">=" === e.operator,
                m = m || "<" === e.operator || "<=" === e.operator,
                s)
                    if (w && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === w.major && e.semver.minor === w.minor && e.semver.patch === w.patch && (w = !1),
                    ">" === e.operator || ">=" === e.operator) {
                        if (h = f(s, e, r),
                        h === e && h !== s)
                            return !1
                    } else if (">=" === s.operator && !o(s.semver, String(e), r))
                        return !1;
                if (l)
                    if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1),
                    "<" === e.operator || "<=" === e.operator) {
                        if (g = d(l, e, r),
                        g === e && g !== l)
                            return !1
                    } else if ("<=" === l.operator && !o(l.semver, String(e), r))
                        return !1;
                if (!e.operator && (l || s) && 0 !== p)
                    return !1
            }
            return !(s && m && !l && 0 !== p) && (!(l && y && !s && 0 !== p) && (!w && !b))
        }
          , f = (e, t, r) => {
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        }
          , d = (e, t, r) => {
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        }
        ;
        t.exports = (e, t, r={}) => {
            if (e === t)
                return !0;
            e = new n(e,r),
            t = new n(t,r);
            let s = !1;
            e: for (const n of e.set) {
                for (const e of t.set) {
                    const t = l(n, e, r);
                    if (s = s || null !== t,
                    t)
                        continue e
                }
                if (s)
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator.js": 130,
        "../classes/range.js": 131,
        "../functions/compare.js": 138,
        "../functions/satisfies.js": 154
    }],
    173: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e, t) => new n(e,t).set.map((e => e.map((e => e.value)).join(" ").trim().split(" ")))
    }
    , {
        "../classes/range": 131
    }],
    174: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e, t) => {
            try {
                return new n(e,t).range || "*"
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/range": 131
    }],
    175: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer
          , s = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function i(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e)
                        return "utf8";
                    for (var t; ; )
                        switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t)
                                return;
                            e = ("" + e).toLowerCase(),
                            t = !0
                        }
                }(e);
                if ("string" != typeof t && (n.isEncoding === s || !s(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
            case "utf16le":
                this.text = c,
                this.end = u,
                t = 4;
                break;
            case "utf8":
                this.fillLast = a,
                t = 4;
                break;
            case "base64":
                this.text = l,
                this.end = f,
                t = 3;
                break;
            default:
                return this.write = d,
                void (this.end = p)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
              , r = function(e, t, r) {
                if (128 != (192 & t[0]))
                    return e.lastNeed = 0,
                    "�";
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1]))
                        return e.lastNeed = 1,
                        "�";
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                        return e.lastNeed = 2,
                        "�"
                }
            }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function c(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function u(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function f(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function d(e) {
            return e.toString(this.encoding)
        }
        function p(e) {
            return e && e.length ? this.write(e) : ""
        }
        r.StringDecoder = i,
        i.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        i.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }
        ,
        i.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r)
                    return 0;
                var s = o(t[n]);
                if (s >= 0)
                    return s > 0 && (e.lastNeed = s - 1),
                    s;
                if (--n < r || -2 === s)
                    return 0;
                if (s = o(t[n]),
                s >= 0)
                    return s > 0 && (e.lastNeed = s - 2),
                    s;
                if (--n < r || -2 === s)
                    return 0;
                if (s = o(t[n]),
                s >= 0)
                    return s > 0 && (2 === s ? s = 0 : e.lastNeed = s - 3),
                    s;
                return 0
            }(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        ,
        i.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    }
    , {
        "safe-buffer": 129
    }],
    176: [function(e, t, r) {
        (function(e) {
            (function() {
                function r(t) {
                    try {
                        if (!e.localStorage)
                            return !1
                    } catch (e) {
                        return !1
                    }
                    var r = e.localStorage[t];
                    return null != r && "true" === String(r).toLowerCase()
                }
                t.exports = function(e, t) {
                    if (r("noDeprecation"))
                        return e;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (r("throwDeprecation"))
                                throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t),
                            n = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    177: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        Object.defineProperty(r, "v1", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(r, "v3", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(r, "v4", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }),
        Object.defineProperty(r, "v5", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(r, "NIL", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }),
        Object.defineProperty(r, "version", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(r, "validate", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }),
        Object.defineProperty(r, "stringify", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(r, "parse", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        });
        var n = d(e("./v1.js"))
          , s = d(e("./v3.js"))
          , i = d(e("./v4.js"))
          , o = d(e("./v5.js"))
          , a = d(e("./nil.js"))
          , c = d(e("./version.js"))
          , u = d(e("./validate.js"))
          , l = d(e("./stringify.js"))
          , f = d(e("./parse.js"));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }
    , {
        "./nil.js": 179,
        "./parse.js": 180,
        "./stringify.js": 184,
        "./v1.js": 185,
        "./v3.js": 186,
        "./v4.js": 188,
        "./v5.js": 189,
        "./validate.js": 190,
        "./version.js": 191
    }],
    178: [function(e, t, r) {
        "use strict";
        function n(e) {
            return 14 + (e + 64 >>> 9 << 4) + 1
        }
        function s(e, t) {
            const r = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
        }
        function i(e, t, r, n, i, o) {
            return s((a = s(s(t, e), s(n, o))) << (c = i) | a >>> 32 - c, r);
            var a, c
        }
        function o(e, t, r, n, s, o, a) {
            return i(t & r | ~t & n, e, t, s, o, a)
        }
        function a(e, t, r, n, s, o, a) {
            return i(t & n | r & ~n, e, t, s, o, a)
        }
        function c(e, t, r, n, s, o, a) {
            return i(t ^ r ^ n, e, t, s, o, a)
        }
        function u(e, t, r, n, s, o, a) {
            return i(r ^ (t | ~n), e, t, s, o, a)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var l = function(e) {
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (let r = 0; r < t.length; ++r)
                    e[r] = t.charCodeAt(r)
            }
            return function(e) {
                const t = []
                  , r = 32 * e.length
                  , n = "0123456789abcdef";
                for (let s = 0; s < r; s += 8) {
                    const r = e[s >> 5] >>> s % 32 & 255
                      , i = parseInt(n.charAt(r >>> 4 & 15) + n.charAt(15 & r), 16);
                    t.push(i)
                }
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[n(t) - 1] = t;
                let r = 1732584193
                  , i = -271733879
                  , l = -1732584194
                  , f = 271733878;
                for (let t = 0; t < e.length; t += 16) {
                    const n = r
                      , d = i
                      , p = l
                      , h = f;
                    r = o(r, i, l, f, e[t], 7, -680876936),
                    f = o(f, r, i, l, e[t + 1], 12, -389564586),
                    l = o(l, f, r, i, e[t + 2], 17, 606105819),
                    i = o(i, l, f, r, e[t + 3], 22, -1044525330),
                    r = o(r, i, l, f, e[t + 4], 7, -176418897),
                    f = o(f, r, i, l, e[t + 5], 12, 1200080426),
                    l = o(l, f, r, i, e[t + 6], 17, -1473231341),
                    i = o(i, l, f, r, e[t + 7], 22, -45705983),
                    r = o(r, i, l, f, e[t + 8], 7, 1770035416),
                    f = o(f, r, i, l, e[t + 9], 12, -1958414417),
                    l = o(l, f, r, i, e[t + 10], 17, -42063),
                    i = o(i, l, f, r, e[t + 11], 22, -1990404162),
                    r = o(r, i, l, f, e[t + 12], 7, 1804603682),
                    f = o(f, r, i, l, e[t + 13], 12, -40341101),
                    l = o(l, f, r, i, e[t + 14], 17, -1502002290),
                    i = o(i, l, f, r, e[t + 15], 22, 1236535329),
                    r = a(r, i, l, f, e[t + 1], 5, -165796510),
                    f = a(f, r, i, l, e[t + 6], 9, -1069501632),
                    l = a(l, f, r, i, e[t + 11], 14, 643717713),
                    i = a(i, l, f, r, e[t], 20, -373897302),
                    r = a(r, i, l, f, e[t + 5], 5, -701558691),
                    f = a(f, r, i, l, e[t + 10], 9, 38016083),
                    l = a(l, f, r, i, e[t + 15], 14, -660478335),
                    i = a(i, l, f, r, e[t + 4], 20, -405537848),
                    r = a(r, i, l, f, e[t + 9], 5, 568446438),
                    f = a(f, r, i, l, e[t + 14], 9, -1019803690),
                    l = a(l, f, r, i, e[t + 3], 14, -187363961),
                    i = a(i, l, f, r, e[t + 8], 20, 1163531501),
                    r = a(r, i, l, f, e[t + 13], 5, -1444681467),
                    f = a(f, r, i, l, e[t + 2], 9, -51403784),
                    l = a(l, f, r, i, e[t + 7], 14, 1735328473),
                    i = a(i, l, f, r, e[t + 12], 20, -1926607734),
                    r = c(r, i, l, f, e[t + 5], 4, -378558),
                    f = c(f, r, i, l, e[t + 8], 11, -2022574463),
                    l = c(l, f, r, i, e[t + 11], 16, 1839030562),
                    i = c(i, l, f, r, e[t + 14], 23, -35309556),
                    r = c(r, i, l, f, e[t + 1], 4, -1530992060),
                    f = c(f, r, i, l, e[t + 4], 11, 1272893353),
                    l = c(l, f, r, i, e[t + 7], 16, -155497632),
                    i = c(i, l, f, r, e[t + 10], 23, -1094730640),
                    r = c(r, i, l, f, e[t + 13], 4, 681279174),
                    f = c(f, r, i, l, e[t], 11, -358537222),
                    l = c(l, f, r, i, e[t + 3], 16, -722521979),
                    i = c(i, l, f, r, e[t + 6], 23, 76029189),
                    r = c(r, i, l, f, e[t + 9], 4, -640364487),
                    f = c(f, r, i, l, e[t + 12], 11, -421815835),
                    l = c(l, f, r, i, e[t + 15], 16, 530742520),
                    i = c(i, l, f, r, e[t + 2], 23, -995338651),
                    r = u(r, i, l, f, e[t], 6, -198630844),
                    f = u(f, r, i, l, e[t + 7], 10, 1126891415),
                    l = u(l, f, r, i, e[t + 14], 15, -1416354905),
                    i = u(i, l, f, r, e[t + 5], 21, -57434055),
                    r = u(r, i, l, f, e[t + 12], 6, 1700485571),
                    f = u(f, r, i, l, e[t + 3], 10, -1894986606),
                    l = u(l, f, r, i, e[t + 10], 15, -1051523),
                    i = u(i, l, f, r, e[t + 1], 21, -2054922799),
                    r = u(r, i, l, f, e[t + 8], 6, 1873313359),
                    f = u(f, r, i, l, e[t + 15], 10, -30611744),
                    l = u(l, f, r, i, e[t + 6], 15, -1560198380),
                    i = u(i, l, f, r, e[t + 13], 21, 1309151649),
                    r = u(r, i, l, f, e[t + 4], 6, -145523070),
                    f = u(f, r, i, l, e[t + 11], 10, -1120210379),
                    l = u(l, f, r, i, e[t + 2], 15, 718787259),
                    i = u(i, l, f, r, e[t + 9], 21, -343485551),
                    r = s(r, n),
                    i = s(i, d),
                    l = s(l, p),
                    f = s(f, h)
                }
                return [r, i, l, f]
            }(function(e) {
                if (0 === e.length)
                    return [];
                const t = 8 * e.length
                  , r = new Uint32Array(n(t));
                for (let n = 0; n < t; n += 8)
                    r[n >> 5] |= (255 & e[n / 8]) << n % 32;
                return r
            }(e), 8 * e.length))
        };
        r.default = l
    }
    , {}],
    179: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        r.default = "00000000-0000-0000-0000-000000000000"
    }
    , {}],
    180: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, s = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        var i = function(e) {
            if (!(0,
            s.default)(e))
                throw TypeError("Invalid UUID");
            let t;
            const r = new Uint8Array(16);
            return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24,
            r[1] = t >>> 16 & 255,
            r[2] = t >>> 8 & 255,
            r[3] = 255 & t,
            r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8,
            r[5] = 255 & t,
            r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8,
            r[7] = 255 & t,
            r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8,
            r[9] = 255 & t,
            r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255,
            r[11] = t / 4294967296 & 255,
            r[12] = t >>> 24 & 255,
            r[13] = t >>> 16 & 255,
            r[14] = t >>> 8 & 255,
            r[15] = 255 & t,
            r
        };
        r.default = i
    }
    , {
        "./validate.js": 190
    }],
    181: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        r.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
    }
    , {}],
    182: [function(e, t, r) {
        "use strict";
        let n;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function() {
            if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
            !n))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return n(s)
        }
        ;
        const s = new Uint8Array(16)
    }
    , {}],
    183: [function(e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            switch (e) {
            case 0:
                return t & r ^ ~t & n;
            case 1:
            case 3:
                return t ^ r ^ n;
            case 2:
                return t & r ^ t & n ^ r & n
            }
        }
        function s(e, t) {
            return e << t | e >>> 32 - t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var i = function(e) {
            const t = [1518500249, 1859775393, 2400959708, 3395469782]
              , r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = [];
                for (let r = 0; r < t.length; ++r)
                    e.push(t.charCodeAt(r))
            } else
                Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            const i = e.length / 4 + 2
              , o = Math.ceil(i / 16)
              , a = new Array(o);
            for (let t = 0; t < o; ++t) {
                const r = new Uint32Array(16);
                for (let n = 0; n < 16; ++n)
                    r[n] = e[64 * t + 4 * n] << 24 | e[64 * t + 4 * n + 1] << 16 | e[64 * t + 4 * n + 2] << 8 | e[64 * t + 4 * n + 3];
                a[t] = r
            }
            a[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
            a[o - 1][14] = Math.floor(a[o - 1][14]),
            a[o - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (let e = 0; e < o; ++e) {
                const i = new Uint32Array(80);
                for (let t = 0; t < 16; ++t)
                    i[t] = a[e][t];
                for (let e = 16; e < 80; ++e)
                    i[e] = s(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1);
                let o = r[0]
                  , c = r[1]
                  , u = r[2]
                  , l = r[3]
                  , f = r[4];
                for (let e = 0; e < 80; ++e) {
                    const r = Math.floor(e / 20)
                      , a = s(o, 5) + n(r, c, u, l) + f + t[r] + i[e] >>> 0;
                    f = l,
                    l = u,
                    u = s(c, 30) >>> 0,
                    c = o,
                    o = a
                }
                r[0] = r[0] + o >>> 0,
                r[1] = r[1] + c >>> 0,
                r[2] = r[2] + u >>> 0,
                r[3] = r[3] + l >>> 0,
                r[4] = r[4] + f >>> 0
            }
            return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
        };
        r.default = i
    }
    , {}],
    184: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, s = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        const i = [];
        for (let e = 0; e < 256; ++e)
            i.push((e + 256).toString(16).substr(1));
        var o = function(e, t=0) {
            const r = (i[e[t + 0]] + i[e[t + 1]] + i[e[t + 2]] + i[e[t + 3]] + "-" + i[e[t + 4]] + i[e[t + 5]] + "-" + i[e[t + 6]] + i[e[t + 7]] + "-" + i[e[t + 8]] + i[e[t + 9]] + "-" + i[e[t + 10]] + i[e[t + 11]] + i[e[t + 12]] + i[e[t + 13]] + i[e[t + 14]] + i[e[t + 15]]).toLowerCase();
            if (!(0,
            s.default)(r))
                throw TypeError("Stringified UUID is invalid");
            return r
        };
        r.default = o
    }
    , {
        "./validate.js": 190
    }],
    185: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = i(e("./rng.js"))
          , s = i(e("./stringify.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let o, a, c = 0, u = 0;
        var l = function(e, t, r) {
            let i = t && r || 0;
            const l = t || new Array(16);
            let f = (e = e || {}).node || o
              , d = void 0 !== e.clockseq ? e.clockseq : a;
            if (null == f || null == d) {
                const t = e.random || (e.rng || n.default)();
                null == f && (f = o = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                null == d && (d = a = 16383 & (t[6] << 8 | t[7]))
            }
            let p = void 0 !== e.msecs ? e.msecs : Date.now()
              , h = void 0 !== e.nsecs ? e.nsecs : u + 1;
            const g = p - c + (h - u) / 1e4;
            if (g < 0 && void 0 === e.clockseq && (d = d + 1 & 16383),
            (g < 0 || p > c) && void 0 === e.nsecs && (h = 0),
            h >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            c = p,
            u = h,
            a = d,
            p += 122192928e5;
            const m = (1e4 * (268435455 & p) + h) % 4294967296;
            l[i++] = m >>> 24 & 255,
            l[i++] = m >>> 16 & 255,
            l[i++] = m >>> 8 & 255,
            l[i++] = 255 & m;
            const y = p / 4294967296 * 1e4 & 268435455;
            l[i++] = y >>> 8 & 255,
            l[i++] = 255 & y,
            l[i++] = y >>> 24 & 15 | 16,
            l[i++] = y >>> 16 & 255,
            l[i++] = d >>> 8 | 128,
            l[i++] = 255 & d;
            for (let e = 0; e < 6; ++e)
                l[i + e] = f[e];
            return t || (0,
            s.default)(l)
        };
        r.default = l
    }
    , {
        "./rng.js": 182,
        "./stringify.js": 184
    }],
    186: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = i(e("./v35.js"))
          , s = i(e("./md5.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = (0,
        n.default)("v3", 48, s.default);
        r.default = o
    }
    , {
        "./md5.js": 178,
        "./v35.js": 187
    }],
    187: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function(e, t, r) {
            function i(e, i, o, a) {
                if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    const t = [];
                    for (let r = 0; r < e.length; ++r)
                        t.push(e.charCodeAt(r));
                    return t
                }(e)),
                "string" == typeof i && (i = (0,
                s.default)(i)),
                16 !== i.length)
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let c = new Uint8Array(16 + e.length);
                if (c.set(i),
                c.set(e, i.length),
                c = r(c),
                c[6] = 15 & c[6] | t,
                c[8] = 63 & c[8] | 128,
                o) {
                    a = a || 0;
                    for (let e = 0; e < 16; ++e)
                        o[a + e] = c[e];
                    return o
                }
                return (0,
                n.default)(c)
            }
            try {
                i.name = e
            } catch (e) {}
            return i.DNS = o,
            i.URL = a,
            i
        }
        ,
        r.URL = r.DNS = void 0;
        var n = i(e("./stringify.js"))
          , s = i(e("./parse.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        r.DNS = o;
        const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        r.URL = a
    }
    , {
        "./parse.js": 180,
        "./stringify.js": 184
    }],
    188: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = i(e("./rng.js"))
          , s = i(e("./stringify.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = function(e, t, r) {
            const i = (e = e || {}).random || (e.rng || n.default)();
            if (i[6] = 15 & i[6] | 64,
            i[8] = 63 & i[8] | 128,
            t) {
                r = r || 0;
                for (let e = 0; e < 16; ++e)
                    t[r + e] = i[e];
                return t
            }
            return (0,
            s.default)(i)
        };
        r.default = o
    }
    , {
        "./rng.js": 182,
        "./stringify.js": 184
    }],
    189: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = i(e("./v35.js"))
          , s = i(e("./sha1.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = (0,
        n.default)("v5", 80, s.default);
        r.default = o
    }
    , {
        "./sha1.js": 183,
        "./v35.js": 187
    }],
    190: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, s = (n = e("./regex.js")) && n.__esModule ? n : {
            default: n
        };
        var i = function(e) {
            return "string" == typeof e && s.default.test(e)
        };
        r.default = i
    }
    , {
        "./regex.js": 181
    }],
    191: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, s = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        var i = function(e) {
            if (!(0,
            s.default)(e))
                throw TypeError("Invalid UUID");
            return parseInt(e.substr(14, 1), 16)
        };
        r.default = i
    }
    , {
        "./validate.js": 190
    }],
    192: [function(e, t, r) {
        t.exports = function e(t, r) {
            if (t && r)
                return e(t)(r);
            if ("function" != typeof t)
                throw new TypeError("need wrapper function");
            return Object.keys(t).forEach((function(e) {
                n[e] = t[e]
            }
            )),
            n;
            function n() {
                for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
                    e[r] = arguments[r];
                var n = t.apply(this, e)
                  , s = e[e.length - 1];
                return "function" == typeof n && n !== s && Object.keys(s).forEach((function(e) {
                    n[e] = s[e]
                }
                )),
                n
            }
        }
    }
    , {}],
    193: [function(e, t, r) {
        "use strict";
        function n(e) {
            return function({pathname: e}) {
                const t = [/\.xml$/u, /\.pdf$/u];
                for (let r = 0; r < t.length; r++)
                    if (t[r].test(e))
                        return !1;
                return !0
            }(e) && !function(e) {
                const t = ["execution.consensys.io", "execution.metamask.io", "uscourts.gov", "dropbox.com", "webbyawards.com", "adyen.com", "gravityforms.com", "harbourair.com", "ani.gamer.com.tw", "blueskybooking.com", "sharefile.com", "battle.net"]
                  , r = ["cdn.shopify.com/s/javascripts/tricorder/xtld-read-only-frame.html"]
                  , {hostname: n, pathname: s} = e
                  , i = e => e.endsWith("/") ? e.slice(0, -1) : e;
                return t.some((e => e === n || n.endsWith(`.${e}`))) || r.some((e => i(e) === i(n + s)))
            }(e)
        }
        function s() {
            return function() {
                const {doctype: e} = window.document;
                if (e)
                    return "html" === e.name;
                return !0
            }() && function() {
                const e = document.documentElement.nodeName;
                if (e)
                    return "html" === e.toLowerCase();
                return !0
            }()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.checkDocumentForProviderInjection = s,
        r.checkURLForProviderInjection = n,
        r.default = function() {
            return n(new URL(window.location)) && s()
        }
    }
    , {}]
}, {}, [1]);
