'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var MorphisIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE5LjkzOTggNy4zOTYyM0MxOS45Mzk4IDcuMzU4NDkgMTkuOTI3OCA3LjMzMzMzIDE5LjkyNzggNy4zMjA3NVY3LjMwODE4QzE5LjkxNTcgNy4yODMwMiAxOS45MTU3IDcuMjU3ODYgMTkuOTAzNyA3LjI0NTI4QzE5Ljg5MTYgNy4yMjAxMiAxOS44Nzk2IDcuMjA3NTUgMTkuODY3NiA3LjE4MjM5TDE5Ljg1NTUgNy4xNjk4MUMxOS44NDM1IDcuMTU3MjMgMTkuODE5NCA3LjEzMjA3IDE5LjgwNzQgNy4xMTk1QzE5LjgwNzQgNy4xMTk1IDE5LjgwNzQgNy4xMTk1IDE5Ljc5NTMgNy4xMTk1QzE5Ljc4MzMgNy4xMDY5MiAxOS43NzEzIDcuMTA2OTIgMTkuNzU5MiA3LjA5NDM0TDE0LjcxNDggNC4wNTAzMUgxNC43MDI4QzE0LjY5MDcgNC4wMzc3NCAxNC42Nzg3IDQuMDM3NzMgMTQuNjY2NyA0LjAzNzczQzE0LjY1NDYgNC4wMzc3MyAxNC42NDI2IDQuMDI1MTUgMTQuNjMwNSA0LjAyNTE1QzE0LjYxODUgNC4wMjUxNSAxNC42MDY1IDQuMDEyNTggMTQuNTk0NCA0LjAxMjU4QzE0LjU4MjQgNC4wMTI1OCAxNC41NzA0IDQuMDEyNTggMTQuNTU4MyA0QzE0LjU0NjMgNCAxNC41MzQyIDQgMTQuNTIyMiA0QzE0LjUxMDIgNCAxNC40OTgxIDQgMTQuNDg2MSA0QzE0LjQ3NCA0IDE0LjQ2MiA0IDE0LjQ1IDQuMDEyNThDMTQuNDM3OSA0LjAxMjU4IDE0LjQyNTkgNC4wMTI1OCAxNC40MTM4IDQuMDI1MTVDMTQuNDAxOCA0LjAyNTE1IDE0LjM4OTggNC4wMzc3MyAxNC4zNzc3IDQuMDM3NzNDMTQuMzY1NyA0LjAzNzczIDE0LjM1MzYgNC4wNTAzMSAxNC4zNDE2IDQuMDUwMzFIMTQuMzI5Nkw5LjI4NTE4IDcuMDk0MzRMNC4yMDQ2NiAxMC4xMjU4QzQuMTgwNTkgMTAuMTM4NCA0LjE2ODU1IDEwLjE1MDkgNC4xNDQ0NyAxMC4xNjM1TDQuMTMyNDMgMTAuMTc2MUM0LjEyMDM5IDEwLjE4ODcgNC4wOTYzMSAxMC4yMTM4IDQuMDg0MjcgMTAuMjI2NEM0LjA3MjIzIDEwLjIzOSA0LjA2MDE5IDEwLjI2NDIgNC4wNDgxNiAxMC4yNzY3QzQuMDQ4MTYgMTAuMjc2NyA0LjA0ODE2IDEwLjI4OTMgNC4wMzYxMiAxMC4yODkzQzQuMDI0MDggMTAuMzE0NSA0LjAyNDA4IDEwLjMyNyA0LjAxMjA0IDEwLjM1MjJDNC4wMTIwNCAxMC4zNzc0IDQgMTAuNDAyNSA0IDEwLjQxNTFDNCAxMC40Mjc3IDQgMTAuNDI3NyA0IDEwLjQ0MDNWMTAuNDUyOFYxNi41NDA5QzQgMTYuNjkxOCA0LjA3MjIzIDE2LjgzMDIgNC4yMDQ2NiAxNi45MDU3TDkuMjQ5MDYgMTkuOTQ5N0M5LjMwOTI1IDE5Ljk4NzQgOS4zODE0OSAyMCA5LjQ1MzcyIDIwQzkuNTI1OTYgMjAgOS41ODYxNSAxOS45ODc0IDkuNjU4MzkgMTkuOTQ5N0M5Ljc3ODc4IDE5Ljg3NDIgOS44NjMwNSAxOS43MzU5IDkuODYzMDUgMTkuNTg0OVYxNC4yMTM4TDE0LjMxNzUgMTYuODkzMUMxNC4zNzc3IDE2LjkzMDggMTQuNDUgMTYuOTQzNCAxNC41MjIyIDE2Ljk0MzRDMTQuNTk0NCAxNi45NDM0IDE0LjY1NDYgMTYuOTMwOCAxNC43MjY5IDE2Ljg5MzFDMTQuODQ3MyAxNi44MTc2IDE0LjkzMTUgMTYuNjc5MiAxNC45MzE1IDE2LjUyODNWMTEuMTU3MkwxOS4zODYgMTMuODM2NUMxOS40NDYyIDEzLjg3NDIgMTkuNTE4NCAxMy44ODY4IDE5LjU5MDcgMTMuODg2OEMxOS42NjI5IDEzLjg4NjggMTkuNzIzMSAxMy44NzQyIDE5Ljc5NTMgMTMuODM2NUMxOS45MTU3IDEzLjc2MSAyMCAxMy42MjI2IDIwIDEzLjQ3MTdWNy4zODM2NUMxOS45Mzk4IDcuNDMzOTYgMTkuOTM5OCA3LjQwODgxIDE5LjkzOTggNy4zOTYyM1pNOS40NDE2OCAxMy4wNDRMNS4xOTE4NyAxMC40NzhMOS40NDE2OCA3LjkxMTk1TDEzLjY5MTUgMTAuNDc4TDkuNDQxNjggMTMuMDQ0Wk0xNC40OTgxIDEwTDEwLjI0ODMgNy40MzM5NkwxNC40OTgxIDQuODY3OTJMMTguNzQ3OSA3LjQzMzk2TDE0LjQ5ODEgMTBaTTkuMDQ0NCAxOC44OTMxTDQuNzk0NTggMTYuMzI3VjExLjE5NUw5LjA0NDQgMTMuNzYxVjE4Ljg5MzFaTTEwLjI0ODMgMTMuNTM0NkwxNC4xMDA4IDExLjIwNzVWMTUuODQ5MUwxMC4yNDgzIDEzLjUzNDZaTTE1LjI5MjcgMTAuNDkwNkwxOS4xNDUyIDguMTYzNTJWMTIuODA1TDE1LjI5MjcgMTAuNDkwNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=';
var ALL_PERMISSION_TYPES = ['viewAccount', 'suggestTransactions'];
var MorphisWalletAdapter = /** @class */function () {
  function MorphisWalletAdapter() {
    this.name = 'Morphis Wallet';
    this.icon = MorphisIcon;
    this.connected = false;
    this.connecting = false;
  }
  MorphisWalletAdapter.prototype.getAccounts = function () {
    return window.morphisWallet.getAccounts();
  };
  MorphisWalletAdapter.prototype.signAndExecuteTransaction = function (transaction) {
    return window.morphisWallet.signAndExecuteTransaction(transaction);
  };
  MorphisWalletAdapter.prototype.executeMoveCall = function (transaction) {
    return window.morphisWallet.executeMoveCall(transaction);
  };
  MorphisWalletAdapter.prototype.executeSerializedMoveCall = function (transactionBytes) {
    return window.morphisWallet.executeSerializedMoveCall(transactionBytes);
  };
  MorphisWalletAdapter.prototype.connect = function () {
    return __awaiter(this, void 0, void 0, function () {
      var wallet, newLocal, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.connecting = true;
            if (!window.morphisWallet) return [3 /*break*/, 7];
            wallet = window.morphisWallet;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 4, 5, 6]);
            return [4 /*yield*/, wallet.requestPermissions()];
          case 2:
            _a.sent();
            newLocal = ALL_PERMISSION_TYPES;
            return [4 /*yield*/, wallet.hasPermissions(newLocal)];
          case 3:
            _a.sent();
            this.connected = true;
            return [3 /*break*/, 6];
          case 4:
            err_1 = _a.sent();
            console.error(err_1);
            return [3 /*break*/, 6];
          case 5:
            this.connecting = false;
            return [7 /*endfinally*/];
          case 6:
            return [3 /*break*/, 8];
          case 7:
            console.error('');
            _a.label = 8;
          case 8:
            return [2 /*return*/];
        }
      });
    });
  };

  MorphisWalletAdapter.prototype.disconnect = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (this.connected == true) {
          this.connected = false;
        }
        return [2 /*return*/];
      });
    });
  };

  return MorphisWalletAdapter;
}();
exports.MorphisIcon = MorphisIcon;
exports.MorphisWalletAdapter = MorphisWalletAdapter;
