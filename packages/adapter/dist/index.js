"use strict";

var M,
  t = require("@mysten/wallet-standard");
function n(M, t, n, e) {
  var i,
    o = arguments.length,
    N = o < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, n) : e;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) N = Reflect.decorate(M, t, n, e);else for (var c = M.length - 1; c >= 0; c--) (i = M[c]) && (N = (o < 3 ? i(N) : o > 3 ? i(t, n, N) : i(t, n)) || N);
  return o > 3 && N && Object.defineProperty(t, n, N), N;
}
function e(M, t, n, e) {
  return new (n || (n = Promise))(function (i, o) {
    function N(M) {
      try {
        D(e.next(M));
      } catch (M) {
        o(M);
      }
    }
    function c(M) {
      try {
        D(e.throw(M));
      } catch (M) {
        o(M);
      }
    }
    function D(M) {
      var t;
      M.done ? i(M.value) : (t = M.value, t instanceof n ? t : new n(function (M) {
        M(t);
      })).then(N, c);
    }
    D((e = e.apply(M, t || [])).next());
  });
}
!function (M) {
  M.VIEW_ACCOUNT = "viewAccount", M.SUGGEST_TX = "suggestTransactions";
}(M || (M = {}));
var i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE5LjkzOTggNy4zOTYyM0MxOS45Mzk4IDcuMzU4NDkgMTkuOTI3OCA3LjMzMzMzIDE5LjkyNzggNy4zMjA3NVY3LjMwODE4QzE5LjkxNTcgNy4yODMwMiAxOS45MTU3IDcuMjU3ODYgMTkuOTAzNyA3LjI0NTI4QzE5Ljg5MTYgNy4yMjAxMiAxOS44Nzk2IDcuMjA3NTUgMTkuODY3NiA3LjE4MjM5TDE5Ljg1NTUgNy4xNjk4MUMxOS44NDM1IDcuMTU3MjMgMTkuODE5NCA3LjEzMjA3IDE5LjgwNzQgNy4xMTk1QzE5LjgwNzQgNy4xMTk1IDE5LjgwNzQgNy4xMTk1IDE5Ljc5NTMgNy4xMTk1QzE5Ljc4MzMgNy4xMDY5MiAxOS43NzEzIDcuMTA2OTIgMTkuNzU5MiA3LjA5NDM0TDE0LjcxNDggNC4wNTAzMUgxNC43MDI4QzE0LjY5MDcgNC4wMzc3NCAxNC42Nzg3IDQuMDM3NzMgMTQuNjY2NyA0LjAzNzczQzE0LjY1NDYgNC4wMzc3MyAxNC42NDI2IDQuMDI1MTUgMTQuNjMwNSA0LjAyNTE1QzE0LjYxODUgNC4wMjUxNSAxNC42MDY1IDQuMDEyNTggMTQuNTk0NCA0LjAxMjU4QzE0LjU4MjQgNC4wMTI1OCAxNC41NzA0IDQuMDEyNTggMTQuNTU4MyA0QzE0LjU0NjMgNCAxNC41MzQyIDQgMTQuNTIyMiA0QzE0LjUxMDIgNCAxNC40OTgxIDQgMTQuNDg2MSA0QzE0LjQ3NCA0IDE0LjQ2MiA0IDE0LjQ1IDQuMDEyNThDMTQuNDM3OSA0LjAxMjU4IDE0LjQyNTkgNC4wMTI1OCAxNC40MTM4IDQuMDI1MTVDMTQuNDAxOCA0LjAyNTE1IDE0LjM4OTggNC4wMzc3MyAxNC4zNzc3IDQuMDM3NzNDMTQuMzY1NyA0LjAzNzczIDE0LjM1MzYgNC4wNTAzMSAxNC4zNDE2IDQuMDUwMzFIMTQuMzI5Nkw5LjI4NTE4IDcuMDk0MzRMNC4yMDQ2NiAxMC4xMjU4QzQuMTgwNTkgMTAuMTM4NCA0LjE2ODU1IDEwLjE1MDkgNC4xNDQ0NyAxMC4xNjM1TDQuMTMyNDMgMTAuMTc2MUM0LjEyMDM5IDEwLjE4ODcgNC4wOTYzMSAxMC4yMTM4IDQuMDg0MjcgMTAuMjI2NEM0LjA3MjIzIDEwLjIzOSA0LjA2MDE5IDEwLjI2NDIgNC4wNDgxNiAxMC4yNzY3QzQuMDQ4MTYgMTAuMjc2NyA0LjA0ODE2IDEwLjI4OTMgNC4wMzYxMiAxMC4yODkzQzQuMDI0MDggMTAuMzE0NSA0LjAyNDA4IDEwLjMyNyA0LjAxMjA0IDEwLjM1MjJDNC4wMTIwNCAxMC4zNzc0IDQgMTAuNDAyNSA0IDEwLjQxNTFDNCAxMC40Mjc3IDQgMTAuNDI3NyA0IDEwLjQ0MDNWMTAuNDUyOFYxNi41NDA5QzQgMTYuNjkxOCA0LjA3MjIzIDE2LjgzMDIgNC4yMDQ2NiAxNi45MDU3TDkuMjQ5MDYgMTkuOTQ5N0M5LjMwOTI1IDE5Ljk4NzQgOS4zODE0OSAyMCA5LjQ1MzcyIDIwQzkuNTI1OTYgMjAgOS41ODYxNSAxOS45ODc0IDkuNjU4MzkgMTkuOTQ5N0M5Ljc3ODc4IDE5Ljg3NDIgOS44NjMwNSAxOS43MzU5IDkuODYzMDUgMTkuNTg0OVYxNC4yMTM4TDE0LjMxNzUgMTYuODkzMUMxNC4zNzc3IDE2LjkzMDggMTQuNDUgMTYuOTQzNCAxNC41MjIyIDE2Ljk0MzRDMTQuNTk0NCAxNi45NDM0IDE0LjY1NDYgMTYuOTMwOCAxNC43MjY5IDE2Ljg5MzFDMTQuODQ3MyAxNi44MTc2IDE0LjkzMTUgMTYuNjc5MiAxNC45MzE1IDE2LjUyODNWMTEuMTU3MkwxOS4zODYgMTMuODM2NUMxOS40NDYyIDEzLjg3NDIgMTkuNTE4NCAxMy44ODY4IDE5LjU5MDcgMTMuODg2OEMxOS42NjI5IDEzLjg4NjggMTkuNzIzMSAxMy44NzQyIDE5Ljc5NTMgMTMuODM2NUMxOS45MTU3IDEzLjc2MSAyMCAxMy42MjI2IDIwIDEzLjQ3MTdWNy4zODM2NUMxOS45Mzk4IDcuNDMzOTYgMTkuOTM5OCA3LjQwODgxIDE5LjkzOTggNy4zOTYyM1pNOS40NDE2OCAxMy4wNDRMNS4xOTE4NyAxMC40NzhMOS40NDE2OCA3LjkxMTk1TDEzLjY5MTUgMTAuNDc4TDkuNDQxNjggMTMuMDQ0Wk0xNC40OTgxIDEwTDEwLjI0ODMgNy40MzM5NkwxNC40OTgxIDQuODY3OTJMMTguNzQ3OSA3LjQzMzk2TDE0LjQ5ODEgMTBaTTkuMDQ0NCAxOC44OTMxTDQuNzk0NTggMTYuMzI3VjExLjE5NUw5LjA0NDQgMTMuNzYxVjE4Ljg5MzFaTTEwLjI0ODMgMTMuNTM0NkwxNC4xMDA4IDExLjIwNzVWMTUuODQ5MUwxMC4yNDgzIDEzLjUzNDZaTTE1LjI5MjcgMTAuNDkwNkwxOS4xNDUyIDguMTYzNTJWMTIuODA1TDE1LjI5MjcgMTAuNDkwNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=";
var o;
class N {
  constructor() {
    this.chains = [t.SUI_DEVNET_CHAIN, t.SUI_TESTNET_CHAIN, t.SUI_MAINNET_CHAIN], this.name = "Morphis Wallet", this.connecting = !1, this.connected = !1, this.wallet = null, o.set(this, []);
  }
  get icon() {
    return i;
  }
  get accounts() {
    return function (M, t, n, e) {
      if ("a" === n && !e) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t ? M !== t || !e : !t.has(M)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === n ? e : "a" === n ? e.call(M) : e ? e.value : t.get(M);
    }(this, o, "f");
  }
  get version() {
    return "1.0.0";
  }
  get features() {
    return {
      "standard:connect": {
        version: "1.0.0",
        connect: () => e(this, void 0, void 0, function* () {
          var M = yield this.connect();
          return function (M, t, n, e, i) {
            if ("m" === e) throw new TypeError("Private method is not writable");
            if ("a" === e && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? M !== t || !i : !t.has(M)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            "a" === e ? i.call(M, n) : i ? i.value = n : t.set(M, n);
          }(this, o, M.accounts, "f"), M;
        })
      },
      "standard:events": {
        version: "1.0.0",
        on: () => this.on()
      },
      "sui:signAndExecuteTransactionBlock": {
        version: "1.0.0",
        signAndExecuteTransactionBlock: M => e(this, void 0, void 0, function* () {
          return yield this.signAndExecuteTransactionBlock(M);
        })
      },
      "sui:signTransactionBlock": {
        version: "1.0.0",
        signTransactionBlock: M => e(this, void 0, void 0, function* () {
          return yield this.signTransactionBlock(M);
        })
      },
      "sui:signMessage": {
        version: "1.0.0",
        signMessage: M => e(this, void 0, void 0, function* () {
          return yield this.signMessage(M);
        })
      }
    };
  }
  on() {
    return () => null;
  }
  hasPermissions(M) {
    return e(this, void 0, void 0, function* () {
      var t = this.wallet;
      return yield t.hasPermissions(M);
    });
  }
  connect() {
    return e(this, void 0, void 0, function* () {
      var n = this.wallet,
        e = yield n.connect([M.VIEW_ACCOUNT, M.SUGGEST_TX]),
        i = yield n.network();
      return {
        accounts: [{
          address: e.address,
          publicKey: new TextEncoder().encode(e.publicKey),
          chains: [i || t.SUI_TESTNET_CHAIN],
          features: ["standard:connect", "standard:events", "sui:signAndExecuteTransaction"]
        }]
      };
    });
  }
  signAndExecuteTransactionBlock(M) {
    return e(this, void 0, void 0, function* () {
      var t = this.wallet;
      return yield t.signAndExecuteTransactionBlock({
        transactionBlockSerialized: M.transactionBlock.serialize(),
        options: M.options
      });
    });
  }
  signTransactionBlock(M) {
    return e(this, void 0, void 0, function* () {
      var t = this.wallet;
      return yield t.signTransactionBlock({
        transactionBlockSerialized: M.transactionBlock.serialize()
      });
    });
  }
  disconnect() {
    return e(this, void 0, void 0, function* () {
      var M = this.wallet;
      yield M.disconnect();
    });
  }
  getAccounts() {
    return e(this, void 0, void 0, function* () {
      var M = this.wallet;
      return yield M.getAccounts();
    });
  }
  signMessage(M) {
    return e(this, void 0, void 0, function* () {
      var t = this.wallet;
      return yield t.signMessage(M);
    });
  }
  getPublicKey() {
    return e(this, void 0, void 0, function* () {
      var M = this.wallet;
      return yield M.getPublicKey();
    });
  }
}
function c() {
  return (M, t, n) => {
    var e = n.value;
    return n.value = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return window.morphis ? (M.wallet || (M.wallet = window.morphis), e.apply(M, t)) : function () {
        throw new Error("You need to install Morphis Extension from Chrome Store");
      }();
    }, n;
  };
}
o = new WeakMap(), n([c()], N.prototype, "hasPermissions", null), n([c()], N.prototype, "connect", null), n([c()], N.prototype, "signAndExecuteTransactionBlock", null), n([c()], N.prototype, "signTransactionBlock", null), n([c()], N.prototype, "disconnect", null), n([c()], N.prototype, "getAccounts", null), n([c()], N.prototype, "signMessage", null), n([c()], N.prototype, "getPublicKey", null), exports.MorphisIcon = i, exports.MorphisWalletAdapter = N;
