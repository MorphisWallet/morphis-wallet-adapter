"use strict";

function M(M, N, D, e) {
  return new (D || (D = Promise))(function (n, u) {
    function t(M) {
      try {
        j(e.next(M));
      } catch (M) {
        u(M);
      }
    }
    function T(M) {
      try {
        j(e["throw"](M));
      } catch (M) {
        u(M);
      }
    }
    function j(M) {
      var N;
      M.done ? n(M.value) : (N = M.value, N instanceof D ? N : new D(function (M) {
        M(N);
      })).then(t, T);
    }
    j((e = e.apply(M, N || [])).next());
  });
}
function N(M, N) {
  var D,
    e,
    n,
    u,
    t = {
      label: 0,
      sent: function sent() {
        if (1 & n[0]) throw n[1];
        return n[1];
      },
      trys: [],
      ops: []
    };
  return u = {
    next: T(0),
    "throw": T(1),
    "return": T(2)
  }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
    return this;
  }), u;
  function T(T) {
    return function (j) {
      return function (T) {
        if (D) throw new TypeError("Generator is already executing.");
        for (; u && (u = 0, T[0] && (t = 0)), t;) {
          try {
            if (D = 1, e && (n = 2 & T[0] ? e["return"] : T[0] ? e["throw"] || ((n = e["return"]) && n.call(e), 0) : e.next) && !(n = n.call(e, T[1])).done) return n;
            switch (e = 0, n && (T = [2 & T[0], n.value]), T[0]) {
              case 0:
              case 1:
                n = T;
                break;
              case 4:
                return t.label++, {
                  value: T[1],
                  done: !1
                };
              case 5:
                t.label++, e = T[1], T = [0];
                continue;
              case 7:
                T = t.ops.pop(), t.trys.pop();
                continue;
              default:
                if (!(n = t.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== T[0] && 2 !== T[0])) {
                  t = 0;
                  continue;
                }
                if (3 === T[0] && (!n || T[1] > n[0] && T[1] < n[3])) {
                  t.label = T[1];
                  break;
                }
                if (6 === T[0] && t.label < n[1]) {
                  t.label = n[1], n = T;
                  break;
                }
                if (n && t.label < n[2]) {
                  t.label = n[2], t.ops.push(T);
                  break;
                }
                n[2] && t.ops.pop(), t.trys.pop();
                continue;
            }
            T = N.call(M, t);
          } catch (M) {
            T = [6, M], e = 0;
          } finally {
            D = n = 0;
          }
        }
        if (5 & T[0]) throw T[1];
        return {
          value: T[0] ? T[1] : void 0,
          done: !0
        };
      }([T, j]);
    };
  }
}
var D = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE5LjkzOTggNy4zOTYyM0MxOS45Mzk4IDcuMzU4NDkgMTkuOTI3OCA3LjMzMzMzIDE5LjkyNzggNy4zMjA3NVY3LjMwODE4QzE5LjkxNTcgNy4yODMwMiAxOS45MTU3IDcuMjU3ODYgMTkuOTAzNyA3LjI0NTI4QzE5Ljg5MTYgNy4yMjAxMiAxOS44Nzk2IDcuMjA3NTUgMTkuODY3NiA3LjE4MjM5TDE5Ljg1NTUgNy4xNjk4MUMxOS44NDM1IDcuMTU3MjMgMTkuODE5NCA3LjEzMjA3IDE5LjgwNzQgNy4xMTk1QzE5LjgwNzQgNy4xMTk1IDE5LjgwNzQgNy4xMTk1IDE5Ljc5NTMgNy4xMTk1QzE5Ljc4MzMgNy4xMDY5MiAxOS43NzEzIDcuMTA2OTIgMTkuNzU5MiA3LjA5NDM0TDE0LjcxNDggNC4wNTAzMUgxNC43MDI4QzE0LjY5MDcgNC4wMzc3NCAxNC42Nzg3IDQuMDM3NzMgMTQuNjY2NyA0LjAzNzczQzE0LjY1NDYgNC4wMzc3MyAxNC42NDI2IDQuMDI1MTUgMTQuNjMwNSA0LjAyNTE1QzE0LjYxODUgNC4wMjUxNSAxNC42MDY1IDQuMDEyNTggMTQuNTk0NCA0LjAxMjU4QzE0LjU4MjQgNC4wMTI1OCAxNC41NzA0IDQuMDEyNTggMTQuNTU4MyA0QzE0LjU0NjMgNCAxNC41MzQyIDQgMTQuNTIyMiA0QzE0LjUxMDIgNCAxNC40OTgxIDQgMTQuNDg2MSA0QzE0LjQ3NCA0IDE0LjQ2MiA0IDE0LjQ1IDQuMDEyNThDMTQuNDM3OSA0LjAxMjU4IDE0LjQyNTkgNC4wMTI1OCAxNC40MTM4IDQuMDI1MTVDMTQuNDAxOCA0LjAyNTE1IDE0LjM4OTggNC4wMzc3MyAxNC4zNzc3IDQuMDM3NzNDMTQuMzY1NyA0LjAzNzczIDE0LjM1MzYgNC4wNTAzMSAxNC4zNDE2IDQuMDUwMzFIMTQuMzI5Nkw5LjI4NTE4IDcuMDk0MzRMNC4yMDQ2NiAxMC4xMjU4QzQuMTgwNTkgMTAuMTM4NCA0LjE2ODU1IDEwLjE1MDkgNC4xNDQ0NyAxMC4xNjM1TDQuMTMyNDMgMTAuMTc2MUM0LjEyMDM5IDEwLjE4ODcgNC4wOTYzMSAxMC4yMTM4IDQuMDg0MjcgMTAuMjI2NEM0LjA3MjIzIDEwLjIzOSA0LjA2MDE5IDEwLjI2NDIgNC4wNDgxNiAxMC4yNzY3QzQuMDQ4MTYgMTAuMjc2NyA0LjA0ODE2IDEwLjI4OTMgNC4wMzYxMiAxMC4yODkzQzQuMDI0MDggMTAuMzE0NSA0LjAyNDA4IDEwLjMyNyA0LjAxMjA0IDEwLjM1MjJDNC4wMTIwNCAxMC4zNzc0IDQgMTAuNDAyNSA0IDEwLjQxNTFDNCAxMC40Mjc3IDQgMTAuNDI3NyA0IDEwLjQ0MDNWMTAuNDUyOFYxNi41NDA5QzQgMTYuNjkxOCA0LjA3MjIzIDE2LjgzMDIgNC4yMDQ2NiAxNi45MDU3TDkuMjQ5MDYgMTkuOTQ5N0M5LjMwOTI1IDE5Ljk4NzQgOS4zODE0OSAyMCA5LjQ1MzcyIDIwQzkuNTI1OTYgMjAgOS41ODYxNSAxOS45ODc0IDkuNjU4MzkgMTkuOTQ5N0M5Ljc3ODc4IDE5Ljg3NDIgOS44NjMwNSAxOS43MzU5IDkuODYzMDUgMTkuNTg0OVYxNC4yMTM4TDE0LjMxNzUgMTYuODkzMUMxNC4zNzc3IDE2LjkzMDggMTQuNDUgMTYuOTQzNCAxNC41MjIyIDE2Ljk0MzRDMTQuNTk0NCAxNi45NDM0IDE0LjY1NDYgMTYuOTMwOCAxNC43MjY5IDE2Ljg5MzFDMTQuODQ3MyAxNi44MTc2IDE0LjkzMTUgMTYuNjc5MiAxNC45MzE1IDE2LjUyODNWMTEuMTU3MkwxOS4zODYgMTMuODM2NUMxOS40NDYyIDEzLjg3NDIgMTkuNTE4NCAxMy44ODY4IDE5LjU5MDcgMTMuODg2OEMxOS42NjI5IDEzLjg4NjggMTkuNzIzMSAxMy44NzQyIDE5Ljc5NTMgMTMuODM2NUMxOS45MTU3IDEzLjc2MSAyMCAxMy42MjI2IDIwIDEzLjQ3MTdWNy4zODM2NUMxOS45Mzk4IDcuNDMzOTYgMTkuOTM5OCA3LjQwODgxIDE5LjkzOTggNy4zOTYyM1pNOS40NDE2OCAxMy4wNDRMNS4xOTE4NyAxMC40NzhMOS40NDE2OCA3LjkxMTk1TDEzLjY5MTUgMTAuNDc4TDkuNDQxNjggMTMuMDQ0Wk0xNC40OTgxIDEwTDEwLjI0ODMgNy40MzM5NkwxNC40OTgxIDQuODY3OTJMMTguNzQ3OSA3LjQzMzk2TDE0LjQ5ODEgMTBaTTkuMDQ0NCAxOC44OTMxTDQuNzk0NTggMTYuMzI3VjExLjE5NUw5LjA0NDQgMTMuNzYxVjE4Ljg5MzFaTTEwLjI0ODMgMTMuNTM0NkwxNC4xMDA4IDExLjIwNzVWMTUuODQ5MUwxMC4yNDgzIDEzLjUzNDZaTTE1LjI5MjcgMTAuNDkwNkwxOS4xNDUyIDguMTYzNTJWMTIuODA1TDE1LjI5MjcgMTAuNDkwNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",
  e = ["viewAccount", "suggestTransactions"],
  n = function () {
    function n() {
      this.name = "Morphis Wallet", this.icon = D, this.connected = !1, this.connecting = !1;
    }
    return n.prototype.getAccounts = function () {
      return window.morphisWallet.getAccounts();
    }, n.prototype.signAndExecuteTransaction = function (M) {
      return window.morphisWallet.signAndExecuteTransaction(M);
    }, n.prototype.executeMoveCall = function (M) {
      return window.morphisWallet.executeMoveCall(M);
    }, n.prototype.executeSerializedMoveCall = function (M) {
      return window.morphisWallet.executeSerializedMoveCall(M);
    }, n.prototype.connect = function () {
      return M(this, void 0, void 0, function () {
        var M, D, n;
        return N(this, function (N) {
          switch (N.label) {
            case 0:
              if (this.connecting = !0, !window.morphisWallet) return [3, 7];
              M = window.morphisWallet, N.label = 1;
            case 1:
              return N.trys.push([1, 4, 5, 6]), [4, M.requestPermissions()];
            case 2:
              return N.sent(), D = e, [4, M.hasPermissions(D)];
            case 3:
              return N.sent(), this.connected = !0, [3, 6];
            case 4:
              return n = N.sent(), console.error(n), [3, 6];
            case 5:
              return this.connecting = !1, [7];
            case 6:
              return [3, 8];
            case 7:
              console.error(""), N.label = 8;
            case 8:
              return [2];
          }
        });
      });
    }, n.prototype.disconnect = function () {
      return M(this, void 0, void 0, function () {
        return N(this, function (M) {
          return 1 == this.connected && (this.connected = !1), [2];
        });
      });
    }, n;
  }();
exports.MorphisIcon = D, exports.MorphisWalletAdapter = n;
