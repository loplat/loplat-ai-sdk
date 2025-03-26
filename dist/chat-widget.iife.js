(function () {
  "use strict";
  var l3 = Object.defineProperty,
    h3 = Object.defineProperties,
    u3 = Object.getOwnPropertyDescriptors,
    w1 = Object.getOwnPropertySymbols,
    u2 = Object.prototype.hasOwnProperty,
    c2 = Object.prototype.propertyIsEnumerable,
    $1 = (l, n, i) =>
      n in l
        ? l3(l, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
        : (l[n] = i),
    T = (l, n) => {
      for (var i in n || (n = {})) u2.call(n, i) && $1(l, i, n[i]);
      if (w1) for (var i of w1(n)) c2.call(n, i) && $1(l, i, n[i]);
      return l;
    },
    R = (l, n) => h3(l, u3(n)),
    f2 = (l, n) => {
      var i = {};
      for (var o in l) u2.call(l, o) && n.indexOf(o) < 0 && (i[o] = l[o]);
      if (l != null && w1)
        for (var o of w1(l)) n.indexOf(o) < 0 && c2.call(l, o) && (i[o] = l[o]);
      return i;
    },
    m = (l, n, i) => $1(l, typeof n != "symbol" ? n + "" : n, i),
    g = (l, n, i) =>
      new Promise((o, d) => {
        var v = (b) => {
            try {
              C(i.next(b));
            } catch (A) {
              d(A);
            }
          },
          L = (b) => {
            try {
              C(i.throw(b));
            } catch (A) {
              d(A);
            }
          },
          C = (b) =>
            b.done ? o(b.value) : Promise.resolve(b.value).then(v, L);
        C((i = i.apply(l, n)).next());
      }),
    c3 = class {
      requestAnimationFrame(l) {
        return requestAnimationFrame(l);
      }
      cancelAnimationFrame(l) {
        cancelAnimationFrame(l);
      }
    },
    f3 = class {
      constructor() {
        m(this, "_lastHandleId", 0), m(this, "_lastImmediate", null);
      }
      requestAnimationFrame(l) {
        return (
          this._lastHandleId >= Number.MAX_SAFE_INTEGER &&
            (this._lastHandleId = 0),
          (this._lastHandleId += 1),
          (this._lastImmediate = setImmediate(() => {
            l(Date.now());
          })),
          this._lastHandleId
        );
      }
      cancelAnimationFrame(l) {
        this._lastImmediate && clearImmediate(this._lastImmediate);
      }
    },
    _3 = class {
      constructor() {
        m(this, "_strategy"),
          (this._strategy =
            typeof requestAnimationFrame == "function" ? new c3() : new f3());
      }
      requestAnimationFrame(l) {
        return this._strategy.requestAnimationFrame(l);
      }
      cancelAnimationFrame(l) {
        this._strategy.cancelAnimationFrame(l);
      }
    },
    x = typeof window < "u" && typeof window.document < "u",
    R1 = new Uint8Array([80, 75, 3, 4]),
    v3 = ["v", "ip", "op", "layers", "fr", "w", "h"],
    _2 = "0.40.1",
    v2 = "@lottiefiles/dotlottie-web",
    p3 = 0.75,
    m3 = (() => {
      var l,
        n =
          typeof document < "u"
            ? (l = document.currentScript) == null
              ? void 0
              : l.src
            : void 0;
      return function (i = {}) {
        var o,
          d = i,
          v,
          L,
          C = new Promise((e, t) => {
            (v = e), (L = t);
          }),
          b = Object.assign({}, d),
          A = "./this.program",
          D = "",
          Y;
        typeof document < "u" &&
          document.currentScript &&
          (D = document.currentScript.src),
          n && (D = n),
          D.startsWith("blob:")
            ? (D = "")
            : (D = D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
          (Y = (e) =>
            fetch(e, { credentials: "same-origin" }).then((t) =>
              t.ok
                ? t.arrayBuffer()
                : Promise.reject(Error(t.status + " : " + t.url))
            ));
        var V = d.printErr || console.error.bind(console);
        Object.assign(d, b), (b = null), d.thisProgram && (A = d.thisProgram);
        var Z = d.wasmBinary,
          M1,
          b1 = !1,
          B1,
          a1,
          k,
          s1,
          l1,
          t1,
          I,
          T2,
          D2;
        function O2() {
          var e = M1.buffer;
          (d.HEAP8 = a1 = new Int8Array(e)),
            (d.HEAP16 = s1 = new Int16Array(e)),
            (d.HEAPU8 = k = new Uint8Array(e)),
            (d.HEAPU16 = l1 = new Uint16Array(e)),
            (d.HEAP32 = t1 = new Int32Array(e)),
            (d.HEAPU32 = I = new Uint32Array(e)),
            (d.HEAPF32 = T2 = new Float32Array(e)),
            (d.HEAPF64 = D2 = new Float64Array(e));
        }
        var x2 = [],
          k2 = [],
          $2 = [];
        function O3() {
          var e = d.preRun.shift();
          x2.unshift(e);
        }
        var n1 = 0,
          h1 = null;
        function E1(e) {
          var t;
          throw (
            ((t = d.onAbort) == null || t.call(d, e),
            (e = "Aborted(" + e + ")"),
            V(e),
            (b1 = !0),
            (e = new WebAssembly.RuntimeError(
              e + ". Build with -sASSERTIONS for more info."
            )),
            L(e),
            e)
          );
        }
        var R2 = (e) => e.startsWith("data:application/octet-stream;base64,"),
          I1;
        function z2(e) {
          if (e == I1 && Z) return new Uint8Array(Z);
          throw "both async and sync fetching of the wasm failed";
        }
        function x3(e) {
          return Z
            ? Promise.resolve().then(() => z2(e))
            : Y(e).then(
                (t) => new Uint8Array(t),
                () => z2(e)
              );
        }
        function W2(e, t, r) {
          return x3(e)
            .then((a) => WebAssembly.instantiate(a, t))
            .then(r, (a) => {
              V(`failed to asynchronously prepare wasm: ${a}`), E1(a);
            });
        }
        function k3(e, t) {
          var r = I1;
          return Z ||
            typeof WebAssembly.instantiateStreaming != "function" ||
            R2(r) ||
            typeof fetch != "function"
            ? W2(r, e, t)
            : fetch(r, { credentials: "same-origin" }).then((a) =>
                WebAssembly.instantiateStreaming(a, e).then(t, function (s) {
                  return (
                    V(`wasm streaming compile failed: ${s}`),
                    V("falling back to ArrayBuffer instantiation"),
                    W2(r, e, t)
                  );
                })
              );
        }
        class U2 {
          constructor(t) {
            m(this, "name", "ExitStatus"),
              (this.message = `Program terminated with exit(${t})`),
              (this.status = t);
          }
        }
        var V1 = (e) => {
            for (; 0 < e.length; ) e.shift()(d);
          },
          G1 = d.noExitRuntime || !0,
          j2 = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
          S1 = (e = 0, t = NaN) => {
            var r = k,
              a = e + t;
            for (t = e; r[t] && !(t >= a); ) ++t;
            if (16 < t - e && r.buffer && j2)
              return j2.decode(r.subarray(e, t));
            for (a = ""; e < t; ) {
              var s = r[e++];
              if (s & 128) {
                var h = r[e++] & 63;
                if ((s & 224) == 192)
                  a += String.fromCharCode(((s & 31) << 6) | h);
                else {
                  var c = r[e++] & 63;
                  (s =
                    (s & 240) == 224
                      ? ((s & 15) << 12) | (h << 6) | c
                      : ((s & 7) << 18) | (h << 12) | (c << 6) | (r[e++] & 63)),
                    65536 > s
                      ? (a += String.fromCharCode(s))
                      : ((s -= 65536),
                        (a += String.fromCharCode(
                          55296 | (s >> 10),
                          56320 | (s & 1023)
                        )));
                }
              } else a += String.fromCharCode(s);
            }
            return a;
          };
        class $3 {
          constructor(t) {
            this.va = t - 24;
          }
        }
        var H2 = 0,
          u1 = (e, t, r) => {
            var a = k;
            if (0 < r) {
              r = t + r - 1;
              for (var s = 0; s < e.length; ++s) {
                var h = e.charCodeAt(s);
                if (55296 <= h && 57343 >= h) {
                  var c = e.charCodeAt(++s);
                  h = (65536 + ((h & 1023) << 10)) | (c & 1023);
                }
                if (127 >= h) {
                  if (t >= r) break;
                  a[t++] = h;
                } else {
                  if (2047 >= h) {
                    if (t + 1 >= r) break;
                    a[t++] = 192 | (h >> 6);
                  } else {
                    if (65535 >= h) {
                      if (t + 2 >= r) break;
                      a[t++] = 224 | (h >> 12);
                    } else {
                      if (t + 3 >= r) break;
                      (a[t++] = 240 | (h >> 18)),
                        (a[t++] = 128 | ((h >> 12) & 63));
                    }
                    a[t++] = 128 | ((h >> 6) & 63);
                  }
                  a[t++] = 128 | (h & 63);
                }
              }
              a[t] = 0;
            }
          },
          P1 = {},
          q1 = (e) => {
            for (; e.length; ) {
              var t = e.pop();
              e.pop()(t);
            }
          };
        function c1(e) {
          return this.fromWireType(I[e >> 2]);
        }
        var o1 = {},
          i1 = {},
          F1 = {},
          f1,
          Q = (e, t, r) => {
            function a(u) {
              if (((u = r(u)), u.length !== e.length))
                throw new f1("Mismatched type converter count");
              for (var f = 0; f < e.length; ++f) j(e[f], u[f]);
            }
            e.forEach((u) => (F1[u] = t));
            var s = Array(t.length),
              h = [],
              c = 0;
            t.forEach((u, f) => {
              i1.hasOwnProperty(u)
                ? (s[f] = i1[u])
                : (h.push(u),
                  o1.hasOwnProperty(u) || (o1[u] = []),
                  o1[u].push(() => {
                    (s[f] = i1[u]), ++c, c === h.length && a(s);
                  }));
            }),
              h.length === 0 && a(s);
          },
          N2,
          O = (e) => {
            for (var t = ""; k[e]; ) t += N2[k[e++]];
            return t;
          },
          y;
        function R3(e, t, r = {}) {
          var a = t.name;
          if (!e)
            throw new y(
              `type "${a}" must have a positive integer typeid pointer`
            );
          if (i1.hasOwnProperty(e)) {
            if (r.$a) return;
            throw new y(`Cannot register type '${a}' twice`);
          }
          (i1[e] = t),
            delete F1[e],
            o1.hasOwnProperty(e) &&
              ((t = o1[e]), delete o1[e], t.forEach((s) => s()));
        }
        function j(e, t, r = {}) {
          return R3(e, t, r);
        }
        var J1 = (e) => {
            throw new y(e.ta.wa.ua.name + " instance already deleted");
          },
          Y1 = !1,
          B2 = () => {},
          V2 = (e, t, r) =>
            t === r
              ? e
              : r.za === void 0
              ? null
              : ((e = V2(e, t, r.za)), e === null ? null : r.Ta(e)),
          G2 = {},
          z3 = {},
          W3 = (e, t) => {
            if (t === void 0) throw new y("ptr should not be undefined");
            for (; e.za; ) (t = e.Ja(t)), (e = e.za);
            return z3[t];
          },
          A1 = (e, t) => {
            if (!t.wa || !t.va)
              throw new f1("makeClassHandle requires ptr and ptrType");
            if (!!t.Aa != !!t.ya)
              throw new f1("Both smartPtrType and smartPtr must be specified");
            return (
              (t.count = { value: 1 }),
              _1(Object.create(e, { ta: { value: t, writable: !0 } }))
            );
          },
          _1 = (e) =>
            typeof FinalizationRegistry > "u"
              ? ((_1 = (t) => t), e)
              : ((Y1 = new FinalizationRegistry((t) => {
                  (t = t.ta),
                    --t.count.value,
                    t.count.value === 0 &&
                      (t.ya ? t.Aa.Da(t.ya) : t.wa.ua.Da(t.va));
                })),
                (_1 = (t) => {
                  var r = t.ta;
                  return r.ya && Y1.register(t, { ta: r }, t), t;
                }),
                (B2 = (t) => {
                  Y1.unregister(t);
                }),
                _1(e));
        function T1() {}
        var v1 = (e, t) => Object.defineProperty(t, "name", { value: e }),
          q2 = (e, t, r) => {
            if (e[t].xa === void 0) {
              var a = e[t];
              (e[t] = function (...s) {
                if (!e[t].xa.hasOwnProperty(s.length))
                  throw new y(
                    `Function '${r}' called with an invalid number of arguments (${s.length}) - expects one of (${e[t].xa})!`
                  );
                return e[t].xa[s.length].apply(this, s);
              }),
                (e[t].xa = []),
                (e[t].xa[a.Ga] = a);
            }
          },
          K1 = (e, t, r) => {
            if (d.hasOwnProperty(e)) {
              if (r === void 0 || (d[e].xa !== void 0 && d[e].xa[r] !== void 0))
                throw new y(`Cannot register public name '${e}' twice`);
              if ((q2(d, e, e), d[e].xa.hasOwnProperty(r)))
                throw new y(
                  `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                );
              d[e].xa[r] = t;
            } else (d[e] = t), (d[e].Ga = r);
          },
          U3 = (e) => {
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return 48 <= t && 57 >= t ? `_${e}` : e;
          };
        function j3(e, t, r, a, s, h, c, u) {
          (this.name = e),
            (this.constructor = t),
            (this.Fa = r),
            (this.Da = a),
            (this.za = s),
            (this.Va = h),
            (this.Ja = c),
            (this.Ta = u),
            (this.bb = []);
        }
        var X1 = (e, t, r) => {
          for (; t !== r; ) {
            if (!t.Ja)
              throw new y(
                `Expected null or instance of ${r.name}, got an instance of ${t.name}`
              );
            (e = t.Ja(e)), (t = t.za);
          }
          return e;
        };
        function H3(e, t) {
          if (t === null) {
            if (this.Ma) throw new y(`null is not a valid ${this.name}`);
            return 0;
          }
          if (!t.ta) throw new y(`Cannot pass "${r2(t)}" as a ${this.name}`);
          if (!t.ta.va)
            throw new y(
              `Cannot pass deleted object as a pointer of type ${this.name}`
            );
          return X1(t.ta.va, t.ta.wa.ua, this.ua);
        }
        function N3(e, t) {
          if (t === null) {
            if (this.Ma) throw new y(`null is not a valid ${this.name}`);
            if (this.La) {
              var r = this.Na();
              return e !== null && e.push(this.Da, r), r;
            }
            return 0;
          }
          if (!t || !t.ta)
            throw new y(`Cannot pass "${r2(t)}" as a ${this.name}`);
          if (!t.ta.va)
            throw new y(
              `Cannot pass deleted object as a pointer of type ${this.name}`
            );
          if (!this.Ka && t.ta.wa.Ka)
            throw new y(
              `Cannot convert argument of type ${
                t.ta.Aa ? t.ta.Aa.name : t.ta.wa.name
              } to parameter type ${this.name}`
            );
          if (((r = X1(t.ta.va, t.ta.wa.ua, this.ua)), this.La)) {
            if (t.ta.ya === void 0)
              throw new y("Passing raw pointer to smart pointer is illegal");
            switch (this.hb) {
              case 0:
                if (t.ta.Aa === this) r = t.ta.ya;
                else
                  throw new y(
                    `Cannot convert argument of type ${
                      t.ta.Aa ? t.ta.Aa.name : t.ta.wa.name
                    } to parameter type ${this.name}`
                  );
                break;
              case 1:
                r = t.ta.ya;
                break;
              case 2:
                if (t.ta.Aa === this) r = t.ta.ya;
                else {
                  var a = t.clone();
                  (r = this.cb(
                    r,
                    O1(() => a.delete())
                  )),
                    e !== null && e.push(this.Da, r);
                }
                break;
              default:
                throw new y("Unsupporting sharing policy");
            }
          }
          return r;
        }
        function B3(e, t) {
          if (t === null) {
            if (this.Ma) throw new y(`null is not a valid ${this.name}`);
            return 0;
          }
          if (!t.ta) throw new y(`Cannot pass "${r2(t)}" as a ${this.name}`);
          if (!t.ta.va)
            throw new y(
              `Cannot pass deleted object as a pointer of type ${this.name}`
            );
          if (t.ta.wa.Ka)
            throw new y(
              `Cannot convert argument of type ${t.ta.wa.name} to parameter type ${this.name}`
            );
          return X1(t.ta.va, t.ta.wa.ua, this.ua);
        }
        function p1(e, t, r, a, s, h, c, u, f, _, p) {
          (this.name = e),
            (this.ua = t),
            (this.Ma = r),
            (this.Ka = a),
            (this.La = s),
            (this.ab = h),
            (this.hb = c),
            (this.Ra = u),
            (this.Na = f),
            (this.cb = _),
            (this.Da = p),
            s || t.za !== void 0
              ? (this.toWireType = N3)
              : ((this.toWireType = a ? H3 : B3), (this.Ca = null));
        }
        var J2 = (e, t, r) => {
            if (!d.hasOwnProperty(e))
              throw new f1("Replacing nonexistent public symbol");
            d[e].xa !== void 0 && r !== void 0
              ? (d[e].xa[r] = t)
              : ((d[e] = t), (d[e].Ga = r));
          },
          U,
          V3 = (e, t, r = []) => (
            e.includes("j")
              ? ((e = e.replace(/p/g, "i")),
                (t = (0, d["dynCall_" + e])(t, ...r)))
              : (t = U.get(t)(...r)),
            t
          ),
          G3 =
            (e, t) =>
            (...r) =>
              V3(e, t, r),
          $ = (e, t) => {
            e = O(e);
            var r = e.includes("j") ? G3(e, t) : U.get(t);
            if (typeof r != "function")
              throw new y(`unknown function pointer with signature ${e}: ${t}`);
            return r;
          },
          Y2,
          K2 = (e) => {
            e = a3(e);
            var t = O(e);
            return X(e), t;
          },
          D1 = (e, t) => {
            function r(h) {
              s[h] ||
                i1[h] ||
                (F1[h] ? F1[h].forEach(r) : (a.push(h), (s[h] = !0)));
            }
            var a = [],
              s = {};
            throw (t.forEach(r), new Y2(`${e}: ` + a.map(K2).join([", "])));
          },
          Z1 = (e, t) => {
            for (var r = [], a = 0; a < e; a++) r.push(I[(t + 4 * a) >> 2]);
            return r;
          };
        function q3(e) {
          for (var t = 1; t < e.length; ++t)
            if (e[t] !== null && e[t].Ca === void 0) return !0;
          return !1;
        }
        function Q1(e, t, r, a, s) {
          var h = t.length;
          if (2 > h)
            throw new y(
              "argTypes array size mismatch! Must at least get return value and 'this' types!"
            );
          var c = t[1] !== null && r !== null,
            u = q3(t),
            f = t[0].name !== "void",
            _ = h - 2,
            p = Array(_),
            w = [],
            M = [];
          return v1(e, function (...z) {
            if (((M.length = 0), (w.length = c ? 2 : 1), (w[0] = s), c)) {
              var S = t[1].toWireType(M, this);
              w[1] = S;
            }
            for (var F = 0; F < _; ++F)
              (p[F] = t[F + 2].toWireType(M, z[F])), w.push(p[F]);
            if (((z = a(...w)), u)) q1(M);
            else
              for (F = c ? 1 : 2; F < t.length; F++) {
                var H = F === 1 ? S : p[F - 2];
                t[F].Ca !== null && t[F].Ca(H);
              }
            return (S = f ? t[0].fromWireType(z) : void 0), S;
          });
        }
        var X2 = (e) => {
            e = e.trim();
            let t = e.indexOf("(");
            return t !== -1 ? e.substr(0, t) : e;
          },
          e2 = [],
          K = [],
          t2 = (e) => {
            9 < e && --K[e + 1] === 0 && ((K[e] = void 0), e2.push(e));
          },
          n2 = (e) => {
            if (!e) throw new y("Cannot use deleted val. handle = " + e);
            return K[e];
          },
          O1 = (e) => {
            switch (e) {
              case void 0:
                return 2;
              case null:
                return 4;
              case !0:
                return 6;
              case !1:
                return 8;
              default:
                let t = e2.pop() || K.length;
                return (K[t] = e), (K[t + 1] = 1), t;
            }
          },
          Z2 = {
            name: "emscripten::val",
            fromWireType: (e) => {
              var t = n2(e);
              return t2(e), t;
            },
            toWireType: (e, t) => O1(t),
            Ba: 8,
            readValueFromPointer: c1,
            Ca: null,
          },
          J3 = (e, t, r) => {
            switch (t) {
              case 1:
                return r
                  ? function (a) {
                      return this.fromWireType(a1[a]);
                    }
                  : function (a) {
                      return this.fromWireType(k[a]);
                    };
              case 2:
                return r
                  ? function (a) {
                      return this.fromWireType(s1[a >> 1]);
                    }
                  : function (a) {
                      return this.fromWireType(l1[a >> 1]);
                    };
              case 4:
                return r
                  ? function (a) {
                      return this.fromWireType(t1[a >> 2]);
                    }
                  : function (a) {
                      return this.fromWireType(I[a >> 2]);
                    };
              default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
            }
          },
          i2 = (e, t) => {
            var r = i1[e];
            if (r === void 0)
              throw ((e = `${t} has unknown type ${K2(e)}`), new y(e));
            return r;
          },
          r2 = (e) => {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function"
              ? e.toString()
              : "" + e;
          },
          Y3 = (e, t) => {
            switch (t) {
              case 4:
                return function (r) {
                  return this.fromWireType(T2[r >> 2]);
                };
              case 8:
                return function (r) {
                  return this.fromWireType(D2[r >> 3]);
                };
              default:
                throw new TypeError(`invalid float width (${t}): ${e}`);
            }
          },
          K3 = (e, t, r) => {
            switch (t) {
              case 1:
                return r ? (a) => a1[a] : (a) => k[a];
              case 2:
                return r ? (a) => s1[a >> 1] : (a) => l1[a >> 1];
              case 4:
                return r ? (a) => t1[a >> 2] : (a) => I[a >> 2];
              default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
            }
          },
          X3 = Object.assign({ optional: !0 }, Z2),
          Q2 = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0,
          Z3 = (e, t) => {
            for (var r = e >> 1, a = r + t / 2; !(r >= a) && l1[r]; ) ++r;
            if (((r <<= 1), 32 < r - e && Q2))
              return Q2.decode(k.subarray(e, r));
            for (r = "", a = 0; !(a >= t / 2); ++a) {
              var s = s1[(e + 2 * a) >> 1];
              if (s == 0) break;
              r += String.fromCharCode(s);
            }
            return r;
          },
          Q3 = (e, t, r) => {
            if ((r != null || (r = 2147483647), 2 > r)) return 0;
            r -= 2;
            var a = t;
            r = r < 2 * e.length ? r / 2 : e.length;
            for (var s = 0; s < r; ++s)
              (s1[t >> 1] = e.charCodeAt(s)), (t += 2);
            return (s1[t >> 1] = 0), t - a;
          },
          e0 = (e) => 2 * e.length,
          t0 = (e, t) => {
            for (var r = 0, a = ""; !(r >= t / 4); ) {
              var s = t1[(e + 4 * r) >> 2];
              if (s == 0) break;
              ++r,
                65536 <= s
                  ? ((s -= 65536),
                    (a += String.fromCharCode(
                      55296 | (s >> 10),
                      56320 | (s & 1023)
                    )))
                  : (a += String.fromCharCode(s));
            }
            return a;
          },
          n0 = (e, t, r) => {
            if ((r != null || (r = 2147483647), 4 > r)) return 0;
            var a = t;
            r = a + r - 4;
            for (var s = 0; s < e.length; ++s) {
              var h = e.charCodeAt(s);
              if (55296 <= h && 57343 >= h) {
                var c = e.charCodeAt(++s);
                h = (65536 + ((h & 1023) << 10)) | (c & 1023);
              }
              if (((t1[t >> 2] = h), (t += 4), t + 4 > r)) break;
            }
            return (t1[t >> 2] = 0), t - a;
          },
          i0 = (e) => {
            for (var t = 0, r = 0; r < e.length; ++r) {
              var a = e.charCodeAt(r);
              55296 <= a && 57343 >= a && ++r, (t += 4);
            }
            return t;
          },
          a2 = 0,
          s2 = [],
          r0 = (e) => {
            var t = s2.length;
            return s2.push(e), t;
          },
          a0 = (e, t) => {
            for (var r = Array(e), a = 0; a < e; ++a)
              r[a] = i2(I[(t + 4 * a) >> 2], "parameter " + a);
            return r;
          },
          s0 = Reflect.construct,
          m1 = {},
          e3 = (e) => {
            if (!(e instanceof U2 || e == "unwind")) throw e;
          },
          t3 = (e) => {
            var t;
            throw (
              ((B1 = e),
              G1 ||
                0 < a2 ||
                ((t = d.onExit) == null || t.call(d, e), (b1 = !0)),
              new U2(e))
            );
          },
          o0 = (e) => {
            if (!b1)
              try {
                if ((e(), !(G1 || 0 < a2)))
                  try {
                    (B1 = e = B1), t3(e);
                  } catch (t) {
                    e3(t);
                  }
              } catch (t) {
                e3(t);
              }
          },
          o2 = {},
          n3 = () => {
            if (!d2) {
              var e = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: A || "./this.program",
                },
                t;
              for (t in o2) o2[t] === void 0 ? delete e[t] : (e[t] = o2[t]);
              var r = [];
              for (t in e) r.push(`${t}=${e[t]}`);
              d2 = r;
            }
            return d2;
          },
          d2,
          d0 = () => {
            if (
              typeof crypto == "object" &&
              typeof crypto.getRandomValues == "function"
            )
              return (e) => crypto.getRandomValues(e);
            E1("initRandomDevice");
          },
          i3 = (e) => (i3 = d0())(e);
        f1 = d.InternalError = class extends Error {
          constructor(e) {
            super(e), (this.name = "InternalError");
          }
        };
        for (var r3 = Array(256), x1 = 0; 256 > x1; ++x1)
          r3[x1] = String.fromCharCode(x1);
        (N2 = r3),
          (y = d.BindingError =
            class extends Error {
              constructor(e) {
                super(e), (this.name = "BindingError");
              }
            }),
          Object.assign(T1.prototype, {
            isAliasOf: function (e) {
              if (!(this instanceof T1 && e instanceof T1)) return !1;
              var t = this.ta.wa.ua,
                r = this.ta.va;
              e.ta = e.ta;
              var a = e.ta.wa.ua;
              for (e = e.ta.va; t.za; ) (r = t.Ja(r)), (t = t.za);
              for (; a.za; ) (e = a.Ja(e)), (a = a.za);
              return t === a && r === e;
            },
            clone: function () {
              if ((this.ta.va || J1(this), this.ta.Ia))
                return (this.ta.count.value += 1), this;
              var e = _1,
                t = Object,
                r = t.create,
                a = Object.getPrototypeOf(this),
                s = this.ta;
              return (
                (e = e(
                  r.call(t, a, {
                    ta: {
                      value: {
                        count: s.count,
                        Ha: s.Ha,
                        Ia: s.Ia,
                        va: s.va,
                        wa: s.wa,
                        ya: s.ya,
                        Aa: s.Aa,
                      },
                    },
                  })
                )),
                (e.ta.count.value += 1),
                (e.ta.Ha = !1),
                e
              );
            },
            delete() {
              if ((this.ta.va || J1(this), this.ta.Ha && !this.ta.Ia))
                throw new y("Object already scheduled for deletion");
              B2(this);
              var e = this.ta;
              --e.count.value,
                e.count.value === 0 &&
                  (e.ya ? e.Aa.Da(e.ya) : e.wa.ua.Da(e.va)),
                this.ta.Ia || ((this.ta.ya = void 0), (this.ta.va = void 0));
            },
            isDeleted: function () {
              return !this.ta.va;
            },
            deleteLater: function () {
              if ((this.ta.va || J1(this), this.ta.Ha && !this.ta.Ia))
                throw new y("Object already scheduled for deletion");
              return (this.ta.Ha = !0), this;
            },
          }),
          Object.assign(p1.prototype, {
            Wa(e) {
              return this.Ra && (e = this.Ra(e)), e;
            },
            Pa(e) {
              var t;
              (t = this.Da) == null || t.call(this, e);
            },
            Ba: 8,
            readValueFromPointer: c1,
            fromWireType: function (e) {
              function t() {
                return this.La
                  ? A1(this.ua.Fa, { wa: this.ab, va: r, Aa: this, ya: e })
                  : A1(this.ua.Fa, { wa: this, va: e });
              }
              var r = this.Wa(e);
              if (!r) return this.Pa(e), null;
              var a = W3(this.ua, r);
              if (a !== void 0)
                return a.ta.count.value === 0
                  ? ((a.ta.va = r), (a.ta.ya = e), a.clone())
                  : ((a = a.clone()), this.Pa(e), a);
              if (((a = this.ua.Va(r)), (a = G2[a]), !a)) return t.call(this);
              a = this.Ka ? a.Sa : a.pointerType;
              var s = V2(r, this.ua, a.ua);
              return s === null
                ? t.call(this)
                : this.La
                ? A1(a.ua.Fa, { wa: a, va: s, Aa: this, ya: e })
                : A1(a.ua.Fa, { wa: a, va: s });
            },
          }),
          (Y2 = d.UnboundTypeError =
            ((e, t) => {
              var r = v1(t, function (a) {
                (this.name = t),
                  (this.message = a),
                  (a = Error(a).stack),
                  a !== void 0 &&
                    (this.stack =
                      this.toString() +
                      `
` +
                      a.replace(/^Error(:[^\n]*)?\n/, ""));
              });
              return (
                (r.prototype = Object.create(e.prototype)),
                (r.prototype.constructor = r),
                (r.prototype.toString = function () {
                  return this.message === void 0
                    ? this.name
                    : `${this.name}: ${this.message}`;
                }),
                r
              );
            })(Error, "UnboundTypeError")),
          K.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
          (d.count_emval_handles = () => K.length / 2 - 5 - e2.length);
        var l0 = {
            c: (e, t, r, a) =>
              E1(
                `Assertion failed: ${e ? S1(e) : ""}, at: ` +
                  [
                    t ? (t ? S1(t) : "") : "unknown filename",
                    r,
                    a ? (a ? S1(a) : "") : "unknown function",
                  ]
              ),
            m: (e, t, r) => {
              var a = new $3(e);
              throw (
                ((I[(a.va + 16) >> 2] = 0),
                (I[(a.va + 4) >> 2] = t),
                (I[(a.va + 8) >> 2] = r),
                (H2 = e),
                H2)
              );
            },
            M: () => {},
            J: () => {},
            K: () => {},
            O: function () {},
            L: () => {},
            Q: () => E1(""),
            v: (e) => {
              var t = P1[e];
              delete P1[e];
              var r = t.Na,
                a = t.Da,
                s = t.Qa,
                h = s.map((c) => c.Za).concat(s.map((c) => c.fb));
              Q([e], h, (c) => {
                var u = {};
                return (
                  s.forEach((f, _) => {
                    var p = c[_],
                      w = f.Xa,
                      M = f.Ya,
                      z = c[_ + s.length],
                      S = f.eb,
                      F = f.gb;
                    u[f.Ua] = {
                      read: (H) => p.fromWireType(w(M, H)),
                      write: (H, g1) => {
                        var W = [];
                        S(F, H, z.toWireType(W, g1)), q1(W);
                      },
                    };
                  }),
                  [
                    {
                      name: t.name,
                      fromWireType: (f) => {
                        var _ = {},
                          p;
                        for (p in u) _[p] = u[p].read(f);
                        return a(f), _;
                      },
                      toWireType: (f, _) => {
                        for (var p in u)
                          if (!(p in _))
                            throw new TypeError(`Missing field: "${p}"`);
                        var w = r();
                        for (p in u) u[p].write(w, _[p]);
                        return f !== null && f.push(a, w), w;
                      },
                      Ba: 8,
                      readValueFromPointer: c1,
                      Ca: a,
                    },
                  ]
                );
              });
            },
            C: () => {},
            V: (e, t, r, a) => {
              (t = O(t)),
                j(e, {
                  name: t,
                  fromWireType: function (s) {
                    return !!s;
                  },
                  toWireType: function (s, h) {
                    return h ? r : a;
                  },
                  Ba: 8,
                  readValueFromPointer: function (s) {
                    return this.fromWireType(k[s]);
                  },
                  Ca: null,
                });
            },
            r: (e, t, r, a, s, h, c, u, f, _, p, w, M) => {
              (p = O(p)),
                (h = $(s, h)),
                u && (u = $(c, u)),
                _ && (_ = $(f, _)),
                (M = $(w, M));
              var z = U3(p);
              K1(z, function () {
                D1(`Cannot construct ${p} due to unbound types`, [a]);
              }),
                Q([e, t, r], a ? [a] : [], (S) => {
                  if (((S = S[0]), a))
                    var F = S.ua,
                      H = F.Fa;
                  else H = T1.prototype;
                  S = v1(p, function (...h2) {
                    if (Object.getPrototypeOf(this) !== g1)
                      throw new y("Use 'new' to construct " + p);
                    if (W.Ea === void 0)
                      throw new y(p + " has no accessible constructor");
                    var d3 = W.Ea[h2.length];
                    if (d3 === void 0)
                      throw new y(
                        `Tried to invoke ctor of ${p} with invalid number of parameters (${
                          h2.length
                        }) - expected (${Object.keys(
                          W.Ea
                        ).toString()}) parameters instead!`
                      );
                    return d3.apply(this, h2);
                  });
                  var g1 = Object.create(H, { constructor: { value: S } });
                  S.prototype = g1;
                  var W = new j3(p, S, g1, M, F, h, u, _);
                  if (W.za) {
                    var y1;
                    (y1 = W.za).Oa != null || (y1.Oa = []), W.za.Oa.push(W);
                  }
                  return (
                    (F = new p1(p, W, !0, !1, !1)),
                    (y1 = new p1(p + "*", W, !1, !1, !1)),
                    (H = new p1(p + " const*", W, !1, !0, !1)),
                    (G2[e] = { pointerType: y1, Sa: H }),
                    J2(z, S),
                    [F, y1, H]
                  );
                });
            },
            q: (e, t, r, a, s, h) => {
              var c = Z1(t, r);
              (s = $(a, s)),
                Q([], [e], (u) => {
                  u = u[0];
                  var f = `constructor ${u.name}`;
                  if (
                    (u.ua.Ea === void 0 && (u.ua.Ea = []),
                    u.ua.Ea[t - 1] !== void 0)
                  )
                    throw new y(
                      `Cannot register multiple constructors with identical number of parameters (${
                        t - 1
                      }) for class '${
                        u.name
                      }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                    );
                  return (
                    (u.ua.Ea[t - 1] = () => {
                      D1(`Cannot construct ${u.name} due to unbound types`, c);
                    }),
                    Q(
                      [],
                      c,
                      (_) => (
                        _.splice(1, 0, null),
                        (u.ua.Ea[t - 1] = Q1(f, _, null, s, h)),
                        []
                      )
                    ),
                    []
                  );
                });
            },
            f: (e, t, r, a, s, h, c, u) => {
              var f = Z1(r, a);
              (t = O(t)),
                (t = X2(t)),
                (h = $(s, h)),
                Q([], [e], (_) => {
                  function p() {
                    D1(`Cannot call ${w} due to unbound types`, f);
                  }
                  _ = _[0];
                  var w = `${_.name}.${t}`;
                  t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                    u && _.ua.bb.push(t);
                  var M = _.ua.Fa,
                    z = M[t];
                  return (
                    z === void 0 ||
                    (z.xa === void 0 &&
                      z.className !== _.name &&
                      z.Ga === r - 2)
                      ? ((p.Ga = r - 2), (p.className = _.name), (M[t] = p))
                      : (q2(M, t, w), (M[t].xa[r - 2] = p)),
                    Q(
                      [],
                      f,
                      (S) => (
                        (S = Q1(w, S, _, h, c)),
                        M[t].xa === void 0
                          ? ((S.Ga = r - 2), (M[t] = S))
                          : (M[t].xa[r - 2] = S),
                        []
                      )
                    ),
                    []
                  );
                });
            },
            U: (e) => j(e, Z2),
            x: (e, t, r, a) => {
              function s() {}
              (t = O(t)),
                (s.values = {}),
                j(e, {
                  name: t,
                  constructor: s,
                  fromWireType: function (h) {
                    return this.constructor.values[h];
                  },
                  toWireType: (h, c) => c.value,
                  Ba: 8,
                  readValueFromPointer: J3(t, r, a),
                  Ca: null,
                }),
                K1(t, s);
            },
            k: (e, t, r) => {
              var a = i2(e, "enum");
              (t = O(t)),
                (e = a.constructor),
                (a = Object.create(a.constructor.prototype, {
                  value: { value: r },
                  constructor: { value: v1(`${a.name}_${t}`, function () {}) },
                })),
                (e.values[r] = a),
                (e[t] = a);
            },
            z: (e, t, r) => {
              (t = O(t)),
                j(e, {
                  name: t,
                  fromWireType: (a) => a,
                  toWireType: (a, s) => s,
                  Ba: 8,
                  readValueFromPointer: Y3(t, r),
                  Ca: null,
                });
            },
            u: (e, t, r, a, s, h) => {
              var c = Z1(t, r);
              (e = O(e)),
                (e = X2(e)),
                (s = $(a, s)),
                K1(
                  e,
                  function () {
                    D1(`Cannot call ${e} due to unbound types`, c);
                  },
                  t - 1
                ),
                Q(
                  [],
                  c,
                  (u) => (
                    J2(
                      e,
                      Q1(e, [u[0], null].concat(u.slice(1)), null, s, h),
                      t - 1
                    ),
                    []
                  )
                );
            },
            l: (e, t, r, a, s) => {
              if (
                ((t = O(t)),
                s === -1 && (s = 4294967295),
                (s = (u) => u),
                a === 0)
              ) {
                var h = 32 - 8 * r;
                s = (u) => (u << h) >>> h;
              }
              var c = t.includes("unsigned")
                ? function (u, f) {
                    return f >>> 0;
                  }
                : function (u, f) {
                    return f;
                  };
              j(e, {
                name: t,
                fromWireType: s,
                toWireType: c,
                Ba: 8,
                readValueFromPointer: K3(t, r, a !== 0),
                Ca: null,
              });
            },
            h: (e, t, r) => {
              function a(h) {
                return new s(a1.buffer, I[(h + 4) >> 2], I[h >> 2]);
              }
              var s = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ][t];
              (r = O(r)),
                j(
                  e,
                  { name: r, fromWireType: a, Ba: 8, readValueFromPointer: a },
                  { $a: !0 }
                );
            },
            t: (e) => {
              j(e, X3);
            },
            $: (e, t, r, a, s, h, c, u, f, _, p, w) => {
              (r = O(r)),
                (h = $(s, h)),
                (u = $(c, u)),
                (_ = $(f, _)),
                (w = $(p, w)),
                Q(
                  [e],
                  [t],
                  (M) => (
                    (M = M[0]), [new p1(r, M.ua, !1, !1, !0, M, a, h, u, _, w)]
                  )
                );
            },
            A: (e, t) => {
              t = O(t);
              var r = t === "std::string";
              j(e, {
                name: t,
                fromWireType: function (a) {
                  var s = I[a >> 2],
                    h = a + 4;
                  if (r)
                    for (var c = h, u = 0; u <= s; ++u) {
                      var f = h + u;
                      if (u == s || k[f] == 0) {
                        if (((c = c ? S1(c, f - c) : ""), _ === void 0))
                          var _ = c;
                        else (_ += "\0"), (_ += c);
                        c = f + 1;
                      }
                    }
                  else {
                    for (_ = Array(s), u = 0; u < s; ++u)
                      _[u] = String.fromCharCode(k[h + u]);
                    _ = _.join("");
                  }
                  return X(a), _;
                },
                toWireType: function (a, s) {
                  s instanceof ArrayBuffer && (s = new Uint8Array(s));
                  var h,
                    c = typeof s == "string";
                  if (
                    !(
                      c ||
                      s instanceof Uint8Array ||
                      s instanceof Uint8ClampedArray ||
                      s instanceof Int8Array
                    )
                  )
                    throw new y("Cannot pass non-string to std::string");
                  if (r && c)
                    for (var u = (h = 0); u < s.length; ++u) {
                      var f = s.charCodeAt(u);
                      127 >= f
                        ? h++
                        : 2047 >= f
                        ? (h += 2)
                        : 55296 <= f && 57343 >= f
                        ? ((h += 4), ++u)
                        : (h += 3);
                    }
                  else h = s.length;
                  if (
                    ((u = l2(4 + h + 1)), (f = u + 4), (I[u >> 2] = h), r && c)
                  )
                    u1(s, f, h + 1);
                  else if (c)
                    for (c = 0; c < h; ++c) {
                      var _ = s.charCodeAt(c);
                      if (255 < _)
                        throw (
                          (X(f),
                          new y(
                            "String has UTF-16 code units that do not fit in 8 bits"
                          ))
                        );
                      k[f + c] = _;
                    }
                  else for (c = 0; c < h; ++c) k[f + c] = s[c];
                  return a !== null && a.push(X, u), u;
                },
                Ba: 8,
                readValueFromPointer: c1,
                Ca(a) {
                  X(a);
                },
              });
            },
            s: (e, t, r) => {
              if (((r = O(r)), t === 2))
                var a = Z3,
                  s = Q3,
                  h = e0,
                  c = (u) => l1[u >> 1];
              else
                t === 4 &&
                  ((a = t0), (s = n0), (h = i0), (c = (u) => I[u >> 2]));
              j(e, {
                name: r,
                fromWireType: (u) => {
                  for (var f = I[u >> 2], _, p = u + 4, w = 0; w <= f; ++w) {
                    var M = u + 4 + w * t;
                    (w == f || c(M) == 0) &&
                      ((p = a(p, M - p)),
                      _ === void 0 ? (_ = p) : ((_ += "\0"), (_ += p)),
                      (p = M + t));
                  }
                  return X(u), _;
                },
                toWireType: (u, f) => {
                  if (typeof f != "string")
                    throw new y(
                      `Cannot pass non-string to C++ string type ${r}`
                    );
                  var _ = h(f),
                    p = l2(4 + _ + t);
                  return (
                    (I[p >> 2] = _ / t),
                    s(f, p + 4, _ + t),
                    u !== null && u.push(X, p),
                    p
                  );
                },
                Ba: 8,
                readValueFromPointer: c1,
                Ca(u) {
                  X(u);
                },
              });
            },
            w: (e, t, r, a, s, h) => {
              P1[e] = { name: O(t), Na: $(r, a), Da: $(s, h), Qa: [] };
            },
            j: (e, t, r, a, s, h, c, u, f, _) => {
              P1[e].Qa.push({
                Ua: O(t),
                Za: r,
                Xa: $(a, s),
                Ya: h,
                fb: c,
                eb: $(u, f),
                gb: _,
              });
            },
            W: (e, t) => {
              (t = O(t)),
                j(e, {
                  ib: !0,
                  name: t,
                  Ba: 0,
                  fromWireType: () => {},
                  toWireType: () => {},
                });
            },
            H: () => {
              (G1 = !1), (a2 = 0);
            },
            D: () => {
              throw 1 / 0;
            },
            Z: (e, t, r, a) => ((e = s2[e]), (t = n2(t)), e(null, t, r, a)),
            B: t2,
            Y: (e, t, r) => {
              var a = a0(e, t),
                s = a.shift();
              e--;
              var h = Array(e);
              return (
                (t = `methodCaller<(${a.map((c) => c.name).join(", ")}) => ${
                  s.name
                }>`),
                r0(
                  v1(t, (c, u, f, _) => {
                    for (var p = 0, w = 0; w < e; ++w)
                      (h[w] = a[w].readValueFromPointer(_ + p)), (p += a[w].Ba);
                    return (
                      (u = r === 1 ? s0(u, h) : u.apply(c, h)),
                      (c = []),
                      (u = s.toWireType(c, u)),
                      c.length && (I[f >> 2] = O1(c)),
                      u
                    );
                  })
                )
              );
            },
            _: (e) => {
              9 < e && (K[e + 1] += 1);
            },
            X: (e) => {
              var t = n2(e);
              q1(t), t2(e);
            },
            o: (e, t) => (
              (e = i2(e, "_emval_take_value")),
              (e = e.readValueFromPointer(t)),
              O1(e)
            ),
            E: (e, t) => {
              if ((m1[e] && (clearTimeout(m1[e].id), delete m1[e]), !t))
                return 0;
              var r = setTimeout(() => {
                delete m1[e], o0(() => s3(e, performance.now()));
              }, t);
              return (m1[e] = { id: r, jb: t }), 0;
            },
            F: (e, t, r, a) => {
              var s = new Date().getFullYear(),
                h = new Date(s, 0, 1).getTimezoneOffset();
              (s = new Date(s, 6, 1).getTimezoneOffset()),
                (I[e >> 2] = 60 * Math.max(h, s)),
                (t1[t >> 2] = +(h != s)),
                (t = (c) => {
                  var u = Math.abs(c);
                  return `UTC${0 <= c ? "-" : "+"}${String(
                    Math.floor(u / 60)
                  ).padStart(2, "0")}${String(u % 60).padStart(2, "0")}`;
                }),
                (e = t(h)),
                (t = t(s)),
                s < h
                  ? (u1(e, r, 17), u1(t, a, 17))
                  : (u1(e, a, 17), u1(t, r, 17));
            },
            aa: () => performance.now(),
            G: (e) => {
              var t = k.length;
              if (((e >>>= 0), 2147483648 < e)) return !1;
              for (var r = 1; 4 >= r; r *= 2) {
                var a = t * (1 + 0.2 / r);
                a = Math.min(a, e + 100663296);
                e: {
                  a =
                    ((Math.min(
                      2147483648,
                      65536 * Math.ceil(Math.max(e, a) / 65536)
                    ) -
                      M1.buffer.byteLength +
                      65535) /
                      65536) |
                    0;
                  try {
                    M1.grow(a), O2();
                    var s = 1;
                    break e;
                  } catch {}
                  s = void 0;
                }
                if (s) return !0;
              }
              return !1;
            },
            S: (e, t) => {
              var r = 0;
              return (
                n3().forEach((a, s) => {
                  var h = t + r;
                  for (s = I[(e + 4 * s) >> 2] = h, h = 0; h < a.length; ++h)
                    a1[s++] = a.charCodeAt(h);
                  (a1[s] = 0), (r += a.length + 1);
                }),
                0
              );
            },
            T: (e, t) => {
              var r = n3();
              I[e >> 2] = r.length;
              var a = 0;
              return r.forEach((s) => (a += s.length + 1)), (I[t >> 2] = a), 0;
            },
            P: () => 52,
            N: () => 52,
            i: _0,
            d: f0,
            e: c0,
            p: v0,
            y: g0,
            b: u0,
            a: h0,
            g: m0,
            n: p0,
            R: t3,
            I: (e, t) => (i3(k.subarray(e, e + t)), 0),
          },
          P = (function () {
            var e;
            function t(a) {
              var s;
              return (
                (P = a.exports),
                (M1 = P.ba),
                O2(),
                (U = P.fa),
                k2.unshift(P.ca),
                n1--,
                (s = d.monitorRunDependencies) == null || s.call(d, n1),
                n1 == 0 && h1 && ((a = h1), (h1 = null), a()),
                P
              );
            }
            n1++, (e = d.monitorRunDependencies) == null || e.call(d, n1);
            var r = { a: l0 };
            if (d.instantiateWasm)
              try {
                return d.instantiateWasm(r, t);
              } catch (a) {
                V(`Module.instantiateWasm callback failed with error: ${a}`),
                  L(a);
              }
            return (
              I1 != null ||
                (I1 = R2("DotLottiePlayer.wasm")
                  ? "DotLottiePlayer.wasm"
                  : d.locateFile
                  ? d.locateFile("DotLottiePlayer.wasm", D)
                  : D + "DotLottiePlayer.wasm"),
              k3(r, function (a) {
                t(a.instance);
              }).catch(L),
              {}
            );
          })(),
          l2 = (e) => (l2 = P.da)(e),
          a3 = (e) => (a3 = P.ea)(e),
          X = (e) => (X = P.ga)(e),
          s3 = (e, t) => (s3 = P.ha)(e, t),
          G = (e, t) => (G = P.ia)(e, t),
          q = (e) => (q = P.ja)(e),
          J = () => (J = P.ka)();
        (d.dynCall_iijj = (e, t, r, a, s, h) =>
          (d.dynCall_iijj = P.la)(e, t, r, a, s, h)),
          (d.dynCall_vijj = (e, t, r, a, s, h) =>
            (d.dynCall_vijj = P.ma)(e, t, r, a, s, h)),
          (d.dynCall_jiii = (e, t, r, a) =>
            (d.dynCall_jiii = P.na)(e, t, r, a)),
          (d.dynCall_jii = (e, t, r) => (d.dynCall_jii = P.oa)(e, t, r)),
          (d.dynCall_viijii = (e, t, r, a, s, h, c) =>
            (d.dynCall_viijii = P.pa)(e, t, r, a, s, h, c)),
          (d.dynCall_iiiiij = (e, t, r, a, s, h, c) =>
            (d.dynCall_iiiiij = P.qa)(e, t, r, a, s, h, c)),
          (d.dynCall_iiiiijj = (e, t, r, a, s, h, c, u, f) =>
            (d.dynCall_iiiiijj = P.ra)(e, t, r, a, s, h, c, u, f)),
          (d.dynCall_iiiiiijj = (e, t, r, a, s, h, c, u, f, _) =>
            (d.dynCall_iiiiiijj = P.sa)(e, t, r, a, s, h, c, u, f, _));
        function h0(e, t, r) {
          var a = J();
          try {
            U.get(e)(t, r);
          } catch (s) {
            if ((q(a), s !== s + 0)) throw s;
            G(1, 0);
          }
        }
        function u0(e, t) {
          var r = J();
          try {
            U.get(e)(t);
          } catch (a) {
            if ((q(r), a !== a + 0)) throw a;
            G(1, 0);
          }
        }
        function c0(e, t, r, a) {
          var s = J();
          try {
            return U.get(e)(t, r, a);
          } catch (h) {
            if ((q(s), h !== h + 0)) throw h;
            G(1, 0);
          }
        }
        function f0(e, t, r) {
          var a = J();
          try {
            return U.get(e)(t, r);
          } catch (s) {
            if ((q(a), s !== s + 0)) throw s;
            G(1, 0);
          }
        }
        function _0(e, t) {
          var r = J();
          try {
            return U.get(e)(t);
          } catch (a) {
            if ((q(r), a !== a + 0)) throw a;
            G(1, 0);
          }
        }
        function v0(e, t, r, a, s, h) {
          var c = J();
          try {
            return U.get(e)(t, r, a, s, h);
          } catch (u) {
            if ((q(c), u !== u + 0)) throw u;
            G(1, 0);
          }
        }
        function p0(e, t, r, a, s) {
          var h = J();
          try {
            U.get(e)(t, r, a, s);
          } catch (c) {
            if ((q(h), c !== c + 0)) throw c;
            G(1, 0);
          }
        }
        function m0(e, t, r, a) {
          var s = J();
          try {
            U.get(e)(t, r, a);
          } catch (h) {
            if ((q(s), h !== h + 0)) throw h;
            G(1, 0);
          }
        }
        function g0(e) {
          var t = J();
          try {
            U.get(e)();
          } catch (r) {
            if ((q(t), r !== r + 0)) throw r;
            G(1, 0);
          }
        }
        var k1;
        h1 = function e() {
          k1 || o3(), k1 || (h1 = e);
        };
        function o3() {
          function e() {
            var t;
            if (!k1 && ((k1 = !0), (d.calledRun = !0), !b1)) {
              if (
                (V1(k2),
                v(d),
                (t = d.onRuntimeInitialized) == null || t.call(d),
                d.postRun)
              )
                for (
                  typeof d.postRun == "function" && (d.postRun = [d.postRun]);
                  d.postRun.length;

                ) {
                  var r = d.postRun.shift();
                  $2.unshift(r);
                }
              V1($2);
            }
          }
          if (!(0 < n1)) {
            if (d.preRun)
              for (
                typeof d.preRun == "function" && (d.preRun = [d.preRun]);
                d.preRun.length;

              )
                O3();
            V1(x2),
              0 < n1 ||
                (d.setStatus
                  ? (d.setStatus("Running..."),
                    setTimeout(() => {
                      setTimeout(() => d.setStatus(""), 1), e();
                    }, 1))
                  : e());
          }
        }
        if (d.preInit)
          for (
            typeof d.preInit == "function" && (d.preInit = [d.preInit]);
            0 < d.preInit.length;

          )
            d.preInit.pop()();
        return o3(), (o = C), o;
      };
    })(),
    g3 = m3,
    L1 = class {
      constructor() {
        throw new Error(
          "RendererLoader is a static class and cannot be instantiated."
        );
      }
      static _tryLoad(l) {
        return g(this, null, function* () {
          return yield g3({ locateFile: () => l });
        });
      }
      static _loadWithBackup() {
        return g(this, null, function* () {
          return (
            this._ModulePromise ||
              (this._ModulePromise = this._tryLoad(this._wasmURL).catch((l) =>
                g(this, null, function* () {
                  let n = `https://unpkg.com/${v2}@${_2}/dist/dotlottie-player.wasm`;
                  console.warn(
                    `Primary WASM load failed from ${this._wasmURL}. Error: ${l.message}`
                  ),
                    console.warn(
                      `Attempting to load WASM from backup URL: ${n}`
                    );
                  try {
                    return yield this._tryLoad(n);
                  } catch (i) {
                    throw (
                      (console.error(`Primary WASM URL failed: ${l.message}`),
                      console.error(`Backup WASM URL failed: ${i.message}`),
                      new Error("WASM loading failed from all sources."))
                    );
                  }
                })
              )),
            this._ModulePromise
          );
        });
      }
      static load() {
        return g(this, null, function* () {
          return this._loadWithBackup();
        });
      }
      static setWasmUrl(l) {
        l !== this._wasmURL &&
          ((this._wasmURL = l), (this._ModulePromise = null));
      }
    };
  m(L1, "_ModulePromise", null),
    m(
      L1,
      "_wasmURL",
      `https://cdn.jsdelivr.net/npm/${v2}@${_2}/dist/dotlottie-player.wasm`
    );
  var p2 = class {
      constructor() {
        m(this, "_eventListeners", new Map());
      }
      addEventListener(l, n) {
        let i = this._eventListeners.get(l);
        i || ((i = new Set()), this._eventListeners.set(l, i)), i.add(n);
      }
      removeEventListener(l, n) {
        let i = this._eventListeners.get(l);
        i &&
          (n
            ? (i.delete(n), i.size === 0 && this._eventListeners.delete(l))
            : this._eventListeners.delete(l));
      }
      dispatch(l) {
        let n = this._eventListeners.get(l.type);
        n == null || n.forEach((i) => i(l));
      }
      removeAllEventListeners() {
        this._eventListeners.clear();
      }
    },
    N = class {
      static _initializeObserver() {
        if (this._observer) return;
        let l = (n) => {
          n.forEach((i) => {
            let o = this._observedCanvases.get(i.target);
            o && (i.isIntersecting ? o.unfreeze() : o.freeze());
          });
        };
        this._observer = new IntersectionObserver(l, { threshold: 0 });
      }
      static observe(l, n) {
        var i;
        this._initializeObserver(),
          !this._observedCanvases.has(l) &&
            (this._observedCanvases.set(l, n),
            (i = this._observer) == null || i.observe(l));
      }
      static unobserve(l) {
        var n, i;
        (n = this._observer) == null || n.unobserve(l),
          this._observedCanvases.delete(l),
          this._observedCanvases.size === 0 &&
            ((i = this._observer) == null || i.disconnect(),
            (this._observer = null));
      }
    };
  m(N, "_observer", null), m(N, "_observedCanvases", new Map());
  var B = class {
    static _initializeObserver() {
      if (this._observer) return;
      let l = (n) => {
        n.forEach((i) => {
          let o = this._observedCanvases.get(i.target);
          if (!o) return;
          let [d, v] = o;
          clearTimeout(v);
          let L = setTimeout(() => {
            d.resize();
          }, 100);
          this._observedCanvases.set(i.target, [d, L]);
        });
      };
      this._observer = new ResizeObserver(l);
    }
    static observe(l, n) {
      var i;
      this._initializeObserver(),
        !this._observedCanvases.has(l) &&
          (this._observedCanvases.set(l, [n, 0]),
          (i = this._observer) == null || i.observe(l));
    }
    static unobserve(l) {
      var n, i;
      (n = this._observer) == null || n.unobserve(l),
        this._observedCanvases.delete(l),
        this._observedCanvases.size === 0 &&
          ((i = this._observer) == null || i.disconnect(),
          (this._observer = null));
    }
  };
  m(B, "_observer", null), m(B, "_observedCanvases", new Map());
  function y3(l) {
    return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(l);
  }
  function w3(l) {
    if (!y3(l)) return 0;
    let n = l.replace("#", "");
    return (n = n.length === 6 ? `${n}ff` : n), parseInt(n, 16);
  }
  function m2(l) {
    if (l.byteLength < 4) return !1;
    let n = new Uint8Array(l.slice(0, R1.byteLength));
    for (let i = 0; i < R1.length; i += 1) if (R1[i] !== n[i]) return !1;
    return !0;
  }
  function g2(l) {
    return v3.every((n) => Object.prototype.hasOwnProperty.call(l, n));
  }
  function y2(l) {
    if (typeof l == "string")
      try {
        return g2(JSON.parse(l));
      } catch {
        return !1;
      }
    else return g2(l);
  }
  function e1() {
    return 1 + ((x ? window.devicePixelRatio : 1) - 1) * p3;
  }
  function w2(l) {
    let n = l.getBoundingClientRect();
    return (
      n.top >= 0 &&
      n.left >= 0 &&
      n.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      n.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  var z1 = (l, n) =>
      l === "reverse"
        ? n.Mode.Reverse
        : l === "bounce"
        ? n.Mode.Bounce
        : l === "reverse-bounce"
        ? n.Mode.ReverseBounce
        : n.Mode.Forward,
    W1 = (l, n) =>
      l === "contain"
        ? n.Fit.Contain
        : l === "cover"
        ? n.Fit.Cover
        : l === "fill"
        ? n.Fit.Fill
        : l === "fit-height"
        ? n.Fit.FitHeight
        : l === "fit-width"
        ? n.Fit.FitWidth
        : n.Fit.None,
    U1 = (l, n) => {
      let i = new n.VectorFloat();
      return i.push_back(l[0]), i.push_back(l[1]), i;
    },
    j1 = (l, n) => {
      let i = new n.VectorFloat();
      return l.length !== 2 || (i.push_back(l[0]), i.push_back(l[1])), i;
    },
    L2 = class E {
      constructor(n) {
        m(this, "_canvas"),
          m(this, "_context", null),
          m(this, "_eventManager"),
          m(this, "_animationFrameId", null),
          m(this, "_frameManager"),
          m(this, "_dotLottieCore", null),
          m(this, "_renderConfig", {}),
          m(this, "_isFrozen", !1),
          m(this, "_backgroundColor", null),
          m(this, "_pointerUpMethod"),
          m(this, "_pointerDownMethod"),
          m(this, "_pointerMoveMethod"),
          m(this, "_pointerEnterMethod"),
          m(this, "_pointerExitMethod");
        var i, o, d;
        (this._canvas = n.canvas),
          (this._context = this._canvas.getContext("2d")),
          (this._eventManager = new p2()),
          (this._frameManager = new _3()),
          (this._renderConfig = R(T({}, n.renderConfig), {
            devicePixelRatio:
              ((i = n.renderConfig) == null ? void 0 : i.devicePixelRatio) ||
              e1(),
            freezeOnOffscreen:
              (d =
                (o = n.renderConfig) == null ? void 0 : o.freezeOnOffscreen) !=
              null
                ? d
                : !0,
          })),
          L1.load()
            .then((v) => {
              var L, C, b, A, D, Y, V, Z;
              (E._wasmModule = v),
                (this._dotLottieCore = new v.DotLottiePlayer({
                  themeId: (L = n.themeId) != null ? L : "",
                  autoplay: (C = n.autoplay) != null ? C : !1,
                  backgroundColor: 0,
                  loopAnimation: (b = n.loop) != null ? b : !1,
                  mode: z1((A = n.mode) != null ? A : "forward", v),
                  segment: j1((D = n.segment) != null ? D : [], v),
                  speed: (Y = n.speed) != null ? Y : 1,
                  useFrameInterpolation:
                    (V = n.useFrameInterpolation) != null ? V : !0,
                  marker: (Z = n.marker) != null ? Z : "",
                  layout: n.layout
                    ? { align: U1(n.layout.align, v), fit: W1(n.layout.fit, v) }
                    : v.createDefaultLayout(),
                })),
                this._eventManager.dispatch({ type: "ready" }),
                n.data
                  ? this._loadFromData(n.data)
                  : n.src && this._loadFromSrc(n.src),
                n.backgroundColor && this.setBackgroundColor(n.backgroundColor);
            })
            .catch((v) => {
              this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to load wasm module: ${v}`),
              });
            }),
          (this._pointerUpMethod = this._onPointerUp.bind(this)),
          (this._pointerDownMethod = this._onPointerDown.bind(this)),
          (this._pointerMoveMethod = this._onPointerMove.bind(this)),
          (this._pointerEnterMethod = this._onPointerEnter.bind(this)),
          (this._pointerExitMethod = this._onPointerLeave.bind(this));
      }
      _dispatchError(n) {
        console.error(n),
          this._eventManager.dispatch({
            type: "loadError",
            error: new Error(n),
          });
      }
      _fetchData(n) {
        return g(this, null, function* () {
          let i = yield fetch(n);
          if (!i.ok)
            throw new Error(
              `Failed to fetch animation data from URL: ${n}. ${i.status}: ${i.statusText}`
            );
          let o = yield i.arrayBuffer();
          return m2(o) ? o : new TextDecoder().decode(o);
        });
      }
      _loadFromData(n) {
        if (this._dotLottieCore === null) return;
        let i = this._canvas.width,
          o = this._canvas.height,
          d = !1;
        if (typeof n == "string") {
          if (!y2(n)) {
            this._dispatchError(
              "Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format."
            );
            return;
          }
          d = this._dotLottieCore.loadAnimationData(n, i, o);
        } else if (n instanceof ArrayBuffer) {
          if (!m2(n)) {
            this._dispatchError(
              "Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format."
            );
            return;
          }
          d = this._dotLottieCore.loadDotLottieData(n, i, o);
        } else if (typeof n == "object") {
          if (!y2(n)) {
            this._dispatchError(
              "Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format."
            );
            return;
          }
          d = this._dotLottieCore.loadAnimationData(JSON.stringify(n), i, o);
        } else {
          this
            ._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof n}`);
          return;
        }
        d
          ? (this._eventManager.dispatch({ type: "load" }),
            x && this.resize(),
            this._eventManager.dispatch({
              type: "frame",
              currentFrame: this.currentFrame,
            }),
            this._render(),
            this._dotLottieCore.config().autoplay &&
              (this._dotLottieCore.play(),
              this._dotLottieCore.isPlaying()
                ? (this._eventManager.dispatch({ type: "play" }),
                  (this._animationFrameId =
                    this._frameManager.requestAnimationFrame(
                      this._draw.bind(this)
                    )))
                : console.error(
                    "something went wrong, the animation was suppose to autoplay"
                  )),
            x &&
              this._canvas instanceof HTMLCanvasElement &&
              (this._renderConfig.freezeOnOffscreen &&
                N.observe(this._canvas, this),
              this._renderConfig.autoResize && B.observe(this._canvas, this)))
          : this._dispatchError("Failed to load animation data");
      }
      _loadFromSrc(n) {
        this._fetchData(n)
          .then((i) => this._loadFromData(i))
          .catch((i) =>
            this._dispatchError(
              `Failed to load animation data from URL: ${n}. ${i}`
            )
          );
      }
      get activeAnimationId() {
        var n;
        return (n = this._dotLottieCore) == null
          ? void 0
          : n.activeAnimationId();
      }
      get activeThemeId() {
        var n;
        return (n = this._dotLottieCore) == null ? void 0 : n.activeThemeId();
      }
      get layout() {
        var n;
        let i = (n = this._dotLottieCore) == null ? void 0 : n.config().layout;
        if (i)
          return {
            align: [i.align.get(0), i.align.get(1)],
            fit: (() => {
              var o, d, v, L, C, b;
              switch (i.fit) {
                case (o = E._wasmModule) == null ? void 0 : o.Fit.Contain:
                  return "contain";
                case (d = E._wasmModule) == null ? void 0 : d.Fit.Cover:
                  return "cover";
                case (v = E._wasmModule) == null ? void 0 : v.Fit.Fill:
                  return "fill";
                case (L = E._wasmModule) == null ? void 0 : L.Fit.FitHeight:
                  return "fit-height";
                case (C = E._wasmModule) == null ? void 0 : C.Fit.FitWidth:
                  return "fit-width";
                case (b = E._wasmModule) == null ? void 0 : b.Fit.None:
                  return "none";
                default:
                  return "contain";
              }
            })(),
          };
      }
      get marker() {
        var n;
        return (n = this._dotLottieCore) == null ? void 0 : n.config().marker;
      }
      get manifest() {
        var n;
        try {
          let i =
            (n = this._dotLottieCore) == null ? void 0 : n.manifestString();
          if (this._dotLottieCore === null || !i) return null;
          let o = JSON.parse(i);
          return Object.keys(o).length === 0 ? null : o;
        } catch {
          return null;
        }
      }
      get renderConfig() {
        return this._renderConfig;
      }
      get segment() {
        var n;
        let i = (n = this._dotLottieCore) == null ? void 0 : n.config().segment;
        if (i && i.size() === 2) return [i.get(0), i.get(1)];
      }
      get loop() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null
            ? void 0
            : n.config().loopAnimation) != null
          ? i
          : !1;
      }
      get mode() {
        var n, i, o, d;
        let v = (n = this._dotLottieCore) == null ? void 0 : n.config().mode;
        return v === ((i = E._wasmModule) == null ? void 0 : i.Mode.Reverse)
          ? "reverse"
          : v === ((o = E._wasmModule) == null ? void 0 : o.Mode.Bounce)
          ? "bounce"
          : v === ((d = E._wasmModule) == null ? void 0 : d.Mode.ReverseBounce)
          ? "reverse-bounce"
          : "forward";
      }
      get isFrozen() {
        return this._isFrozen;
      }
      get backgroundColor() {
        var n;
        return (n = this._backgroundColor) != null ? n : "";
      }
      get autoplay() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.config().autoplay) !=
          null
          ? i
          : !1;
      }
      get useFrameInterpolation() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null
            ? void 0
            : n.config().useFrameInterpolation) != null
          ? i
          : !1;
      }
      get speed() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.config().speed) != null
          ? i
          : 0;
      }
      get isReady() {
        return this._dotLottieCore !== null;
      }
      get isLoaded() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.isLoaded()) != null
          ? i
          : !1;
      }
      get isPlaying() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.isPlaying()) != null
          ? i
          : !1;
      }
      get isPaused() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.isPaused()) != null
          ? i
          : !1;
      }
      get isStopped() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.isStopped()) != null
          ? i
          : !1;
      }
      get currentFrame() {
        return this._dotLottieCore
          ? Math.round(this._dotLottieCore.currentFrame() * 100) / 100
          : 0;
      }
      get loopCount() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.loopCount()) != null
          ? i
          : 0;
      }
      get totalFrames() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.totalFrames()) != null
          ? i
          : 0;
      }
      get duration() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.duration()) != null
          ? i
          : 0;
      }
      get segmentDuration() {
        var n, i;
        return (i =
          (n = this._dotLottieCore) == null ? void 0 : n.segmentDuration()) !=
          null
          ? i
          : 0;
      }
      get canvas() {
        return this._canvas;
      }
      load(n) {
        var i, o, d, v, L, C, b, A, D;
        this._dotLottieCore === null ||
          E._wasmModule === null ||
          (this._animationFrameId !== null &&
            (this._frameManager.cancelAnimationFrame(this._animationFrameId),
            (this._animationFrameId = null)),
          this._dotLottieCore.setConfig({
            themeId: (i = n.themeId) != null ? i : "",
            autoplay: (o = n.autoplay) != null ? o : !1,
            backgroundColor: 0,
            loopAnimation: (d = n.loop) != null ? d : !1,
            mode: z1((v = n.mode) != null ? v : "forward", E._wasmModule),
            segment: j1((L = n.segment) != null ? L : [], E._wasmModule),
            speed: (C = n.speed) != null ? C : 1,
            useFrameInterpolation:
              (b = n.useFrameInterpolation) != null ? b : !0,
            marker: (A = n.marker) != null ? A : "",
            layout: n.layout
              ? {
                  align: U1(n.layout.align, E._wasmModule),
                  fit: W1(n.layout.fit, E._wasmModule),
                }
              : E._wasmModule.createDefaultLayout(),
          }),
          n.data
            ? this._loadFromData(n.data)
            : n.src && this._loadFromSrc(n.src),
          this.setBackgroundColor((D = n.backgroundColor) != null ? D : ""));
      }
      _render() {
        if (this._dotLottieCore === null || this._context === null) return !1;
        if (this._dotLottieCore.render()) {
          let n = this._dotLottieCore.buffer(),
            i = new Uint8ClampedArray(
              n,
              0,
              this._canvas.width * this._canvas.height * 4
            ),
            o = null;
          return (
            typeof ImageData > "u"
              ? ((o = this._context.createImageData(
                  this._canvas.width,
                  this._canvas.height
                )),
                o.data.set(i))
              : (o = new ImageData(i, this._canvas.width, this._canvas.height)),
            this._context.putImageData(o, 0, 0),
            this._eventManager.dispatch({
              type: "render",
              currentFrame: this.currentFrame,
            }),
            !0
          );
        }
        return !1;
      }
      _draw() {
        if (
          this._dotLottieCore === null ||
          this._context === null ||
          !this._dotLottieCore.isPlaying()
        )
          return;
        let n = Math.round(this._dotLottieCore.requestFrame() * 100) / 100;
        this._dotLottieCore.setFrame(n) &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this.currentFrame,
          }),
          this._render() &&
            this._dotLottieCore.isComplete() &&
            (this._dotLottieCore.config().loopAnimation
              ? this._eventManager.dispatch({
                  type: "loop",
                  loopCount: this._dotLottieCore.loopCount(),
                })
              : this._eventManager.dispatch({ type: "complete" }))),
          (this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this)
          ));
      }
      play() {
        this._dotLottieCore !== null &&
          ((this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) &&
            ((this._isFrozen = !1),
            this._eventManager.dispatch({ type: "play" }),
            (this._animationFrameId = this._frameManager.requestAnimationFrame(
              this._draw.bind(this)
            ))),
          x &&
            this._canvas instanceof HTMLCanvasElement &&
            this._renderConfig.freezeOnOffscreen &&
            !w2(this._canvas) &&
            this.freeze());
      }
      pause() {
        this._dotLottieCore !== null &&
          (this._dotLottieCore.pause() || this._dotLottieCore.isPaused()) &&
          this._eventManager.dispatch({ type: "pause" });
      }
      stop() {
        this._dotLottieCore !== null &&
          this._dotLottieCore.stop() &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this.currentFrame,
          }),
          this._render(),
          this._eventManager.dispatch({ type: "stop" }));
      }
      setFrame(n) {
        this._dotLottieCore === null ||
          n < 0 ||
          n > this._dotLottieCore.totalFrames() ||
          (this._dotLottieCore.seek(n) &&
            (this._eventManager.dispatch({
              type: "frame",
              currentFrame: this.currentFrame,
            }),
            this._render()));
      }
      setSpeed(n) {
        this._dotLottieCore !== null &&
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), { speed: n })
          );
      }
      setBackgroundColor(n) {
        this._dotLottieCore !== null &&
          (x && this._canvas instanceof HTMLCanvasElement
            ? (this._canvas.style.backgroundColor = n)
            : this._dotLottieCore.setConfig(
                R(T({}, this._dotLottieCore.config()), {
                  backgroundColor: w3(n),
                })
              ),
          (this._backgroundColor = n));
      }
      setLoop(n) {
        this._dotLottieCore !== null &&
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), { loopAnimation: n })
          );
      }
      setUseFrameInterpolation(n) {
        this._dotLottieCore !== null &&
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), { useFrameInterpolation: n })
          );
      }
      addEventListener(n, i) {
        this._eventManager.addEventListener(n, i);
      }
      removeEventListener(n, i) {
        this._eventManager.removeEventListener(n, i);
      }
      destroy() {
        var n;
        x &&
          this._canvas instanceof HTMLCanvasElement &&
          (N.unobserve(this._canvas), B.unobserve(this._canvas)),
          (n = this._dotLottieCore) == null || n.delete(),
          (this._dotLottieCore = null),
          (this._context = null),
          this._eventManager.dispatch({ type: "destroy" }),
          this._eventManager.removeAllEventListeners(),
          this._cleanupStateMachineListeners();
      }
      freeze() {
        this._animationFrameId !== null &&
          (this._frameManager.cancelAnimationFrame(this._animationFrameId),
          (this._animationFrameId = null),
          (this._isFrozen = !0),
          this._eventManager.dispatch({ type: "freeze" }));
      }
      unfreeze() {
        this._animationFrameId === null &&
          ((this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this)
          )),
          (this._isFrozen = !1),
          this._eventManager.dispatch({ type: "unfreeze" }));
      }
      resize() {
        if (!(!this._dotLottieCore || !this.isLoaded)) {
          if (x && this._canvas instanceof HTMLCanvasElement) {
            let n =
                this._renderConfig.devicePixelRatio ||
                window.devicePixelRatio ||
                1,
              { height: i, width: o } = this._canvas.getBoundingClientRect();
            i !== 0 &&
              o !== 0 &&
              ((this._canvas.width = o * n), (this._canvas.height = i * n));
          }
          this._dotLottieCore.resize(this._canvas.width, this._canvas.height) &&
            this._render();
        }
      }
      setSegment(n, i) {
        this._dotLottieCore === null ||
          E._wasmModule === null ||
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), {
              segment: j1([n, i], E._wasmModule),
            })
          );
      }
      setMode(n) {
        this._dotLottieCore === null ||
          E._wasmModule === null ||
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), {
              mode: z1(n, E._wasmModule),
            })
          );
      }
      setRenderConfig(n) {
        let i = n,
          { devicePixelRatio: o, freezeOnOffscreen: d } = i,
          v = f2(i, ["devicePixelRatio", "freezeOnOffscreen"]);
        (this._renderConfig = R(T(T({}, this._renderConfig), v), {
          devicePixelRatio: o || e1(),
          freezeOnOffscreen: d ?? !0,
        })),
          x &&
            this._canvas instanceof HTMLCanvasElement &&
            (this._renderConfig.autoResize
              ? B.observe(this._canvas, this)
              : B.unobserve(this._canvas),
            this._renderConfig.freezeOnOffscreen
              ? N.observe(this._canvas, this)
              : (N.unobserve(this._canvas), this._isFrozen && this.unfreeze()));
      }
      loadAnimation(n) {
        this._dotLottieCore === null ||
          this._dotLottieCore.activeAnimationId() === n ||
          (this._dotLottieCore.loadAnimation(
            n,
            this._canvas.width,
            this._canvas.height
          )
            ? (this._eventManager.dispatch({ type: "load" }), this.resize())
            : this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to animation :${n}`),
              }));
      }
      setMarker(n) {
        this._dotLottieCore !== null &&
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), { marker: n })
          );
      }
      markers() {
        var n;
        let i = (n = this._dotLottieCore) == null ? void 0 : n.markers();
        if (i) {
          let o = [];
          for (let d = 0; d < i.size(); d += 1) {
            let v = i.get(d);
            o.push({ name: v.name, time: v.time, duration: v.duration });
          }
          return o;
        }
        return [];
      }
      setTheme(n) {
        if (this._dotLottieCore === null) return !1;
        let i = this._dotLottieCore.setTheme(n);
        return this._render(), i;
      }
      resetTheme() {
        return this._dotLottieCore === null
          ? !1
          : this._dotLottieCore.resetTheme();
      }
      setThemeData(n) {
        if (this._dotLottieCore === null) return !1;
        let i = this._dotLottieCore.setThemeData(n);
        return this._render(), i;
      }
      setSlots(n) {
        this._dotLottieCore !== null && this._dotLottieCore.setSlots(n);
      }
      setLayout(n) {
        this._dotLottieCore === null ||
          E._wasmModule === null ||
          this._dotLottieCore.setConfig(
            R(T({}, this._dotLottieCore.config()), {
              layout: {
                align: U1(n.align, E._wasmModule),
                fit: W1(n.fit, E._wasmModule),
              },
            })
          );
      }
      setViewport(n, i, o, d) {
        return this._dotLottieCore === null
          ? !1
          : this._dotLottieCore.setViewport(n, i, o, d);
      }
      static setWasmUrl(n) {
        L1.setWasmUrl(n);
      }
      loadStateMachine(n) {
        var i, o;
        return (o =
          (i = this._dotLottieCore) == null ? void 0 : i.loadStateMachine(n)) !=
          null
          ? o
          : !1;
      }
      startStateMachine() {
        var n, i;
        let o =
          (i =
            (n = this._dotLottieCore) == null
              ? void 0
              : n.startStateMachine()) != null
            ? i
            : !1;
        return o && this._setupStateMachineListeners(), o;
      }
      stopStateMachine() {
        var n, i;
        let o =
          (i =
            (n = this._dotLottieCore) == null
              ? void 0
              : n.stopStateMachine()) != null
            ? i
            : !1;
        return o && this._cleanupStateMachineListeners(), o;
      }
      _getPointerPosition(n) {
        let i = this._canvas.getBoundingClientRect(),
          o = this._canvas.width / i.width,
          d = this._canvas.height / i.height,
          v =
            this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1,
          L = ((n.clientX - i.left) * o) / v,
          C = ((n.clientY - i.top) * d) / v;
        return { x: L, y: C };
      }
      _onPointerUp(n) {
        let { x: i, y: o } = this._getPointerPosition(n);
        this.postPointerUpEvent(i, o);
      }
      _onPointerDown(n) {
        let { x: i, y: o } = this._getPointerPosition(n);
        this.postPointerDownEvent(i, o);
      }
      _onPointerMove(n) {
        let { x: i, y: o } = this._getPointerPosition(n);
        this.postPointerMoveEvent(i, o);
      }
      _onPointerEnter(n) {
        let { x: i, y: o } = this._getPointerPosition(n);
        this.postPointerEnterEvent(i, o);
      }
      _onPointerLeave(n) {
        let { x: i, y: o } = this._getPointerPosition(n);
        this.postPointerExitEvent(i, o);
      }
      postPointerUpEvent(n, i) {
        var o;
        return (o = this._dotLottieCore) == null
          ? void 0
          : o.postPointerUpEvent(n, i);
      }
      postPointerDownEvent(n, i) {
        var o;
        return (o = this._dotLottieCore) == null
          ? void 0
          : o.postPointerDownEvent(n, i);
      }
      postPointerMoveEvent(n, i) {
        var o;
        return (o = this._dotLottieCore) == null
          ? void 0
          : o.postPointerMoveEvent(n, i);
      }
      postPointerEnterEvent(n, i) {
        var o;
        return (o = this._dotLottieCore) == null
          ? void 0
          : o.postPointerEnterEvent(n, i);
      }
      postPointerExitEvent(n, i) {
        var o;
        return (o = this._dotLottieCore) == null
          ? void 0
          : o.postPointerExitEvent(n, i);
      }
      getStateMachineListeners() {
        if (!this._dotLottieCore) return [];
        let n = this._dotLottieCore.stateMachineFrameworkSetup(),
          i = [];
        for (let o = 0; o < n.size(); o += 1) i.push(n.get(o));
        return i;
      }
      _setupStateMachineListeners() {
        if (
          x &&
          this._canvas instanceof HTMLCanvasElement &&
          this._dotLottieCore !== null &&
          this.isLoaded
        ) {
          let n = this.getStateMachineListeners();
          n.includes("PointerUp") &&
            this._canvas.addEventListener("pointerup", this._pointerUpMethod),
            n.includes("PointerDown") &&
              this._canvas.addEventListener(
                "pointerdown",
                this._pointerDownMethod
              ),
            n.includes("PointerMove") &&
              this._canvas.addEventListener(
                "pointermove",
                this._pointerMoveMethod
              ),
            n.includes("PointerEnter") &&
              this._canvas.addEventListener(
                "pointerenter",
                this._pointerEnterMethod
              ),
            n.includes("PointerExit") &&
              this._canvas.addEventListener(
                "pointerleave",
                this._pointerExitMethod
              );
        }
      }
      _cleanupStateMachineListeners() {
        x &&
          this._canvas instanceof HTMLCanvasElement &&
          (this._canvas.removeEventListener("pointerup", this._pointerUpMethod),
          this._canvas.removeEventListener(
            "pointerdown",
            this._pointerDownMethod
          ),
          this._canvas.removeEventListener(
            "pointermove",
            this._pointerMoveMethod
          ),
          this._canvas.removeEventListener(
            "pointerenter",
            this._pointerEnterMethod
          ),
          this._canvas.removeEventListener(
            "pointerleave",
            this._pointerExitMethod
          ));
      }
      loadStateMachineData(n) {
        var i, o;
        return (o =
          (i = this._dotLottieCore) == null
            ? void 0
            : i.loadStateMachineData(n)) != null
          ? o
          : !1;
      }
      animationSize() {
        var n, i, o, d;
        let v =
            (i =
              (n = this._dotLottieCore) == null
                ? void 0
                : n.animationSize().get(0)) != null
              ? i
              : 0,
          L =
            (d =
              (o = this._dotLottieCore) == null
                ? void 0
                : o.animationSize().get(1)) != null
              ? d
              : 0;
        return { width: v, height: L };
      }
      setStateMachineBooleanContext(n, i) {
        var o, d;
        return (d =
          (o = this._dotLottieCore) == null
            ? void 0
            : o.setStateMachineBooleanContext(n, i)) != null
          ? d
          : !1;
      }
      setStateMachineNumericContext(n, i) {
        var o, d;
        return (d =
          (o = this._dotLottieCore) == null
            ? void 0
            : o.setStateMachineNumericContext(n, i)) != null
          ? d
          : !1;
      }
      setStateMachineStringContext(n, i) {
        var o, d;
        return (d =
          (o = this._dotLottieCore) == null
            ? void 0
            : o.setStateMachineStringContext(n, i)) != null
          ? d
          : !1;
      }
      getLayerBoundingBox(n) {
        var i;
        let o =
          (i = this._dotLottieCore) == null ? void 0 : i.getLayerBounds(n);
        if (!o || o.size() !== 4) return;
        let d = o.get(0),
          v = o.get(1),
          L = o.get(2),
          C = o.get(3);
        return { x: d, y: v, width: L, height: C };
      }
      static transformThemeToLottieSlots(n, i) {
        var o, d;
        return (d =
          (o = E._wasmModule) == null
            ? void 0
            : o.transformThemeToLottieSlots(n, i)) != null
          ? d
          : "";
      }
    };
  m(L2, "_wasmModule", null);
  var L3 = L2,
    C3 = class {
      constructor() {
        if (typeof Worker > "u")
          throw new Error("Worker is not supported in this environment.");
        let l = new Blob(
            [
              new Uint8Array([
                34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10,
                40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98,
                106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114,
                111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 32, 61, 32, 79,
                98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80,
                114, 111, 112, 101, 114, 116, 105, 101, 115, 59, 10, 32, 32,
                118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114,
                111, 112, 68, 101, 115, 99, 115, 32, 61, 32, 79, 98, 106, 101,
                99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112,
                101, 114, 116, 121, 68, 101, 115, 99, 114, 105, 112, 116, 111,
                114, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101,
                116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111,
                108, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101,
                116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 83,
                121, 109, 98, 111, 108, 115, 59, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 32, 61,
                32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111,
                112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95,
                95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 32, 61, 32,
                79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 46, 112, 114, 111, 112, 101, 114, 116, 121, 73,
                115, 69, 110, 117, 109, 101, 114, 97, 98, 108, 101, 59, 10, 32,
                32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109,
                97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44,
                32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61,
                62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63,
                32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106,
                44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101,
                114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99,
                111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32,
                116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108,
                101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101,
                32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93,
                32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97,
                114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117,
                101, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114,
                32, 112, 114, 111, 112, 32, 105, 110, 32, 98, 32, 124, 124, 32,
                40, 98, 32, 61, 32, 123, 125, 41, 41, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80,
                114, 111, 112, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114,
                111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95,
                100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112,
                40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114,
                111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 95,
                95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121,
                109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111,
                102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112,
                83, 121, 109, 98, 111, 108, 115, 40, 98, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 112,
                114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108,
                40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114,
                109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111,
                112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 97, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97,
                114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112,
                115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 95, 95,
                100, 101, 102, 80, 114, 111, 112, 115, 40, 97, 44, 32, 95, 95,
                103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115,
                99, 115, 40, 98, 41, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95,
                95, 111, 98, 106, 82, 101, 115, 116, 32, 61, 32, 40, 115, 111,
                117, 114, 99, 101, 44, 32, 101, 120, 99, 108, 117, 100, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 116,
                97, 114, 103, 101, 116, 32, 61, 32, 123, 125, 59, 10, 32, 32,
                32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111,
                112, 32, 105, 110, 32, 115, 111, 117, 114, 99, 101, 41, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79,
                119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 115, 111,
                117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 32, 38, 38,
                32, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101,
                120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116,
                91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99,
                101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 111, 117, 114, 99, 101, 32, 33, 61, 32, 110,
                117, 108, 108, 32, 38, 38, 32, 95, 95, 103, 101, 116, 79, 119,
                110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10,
                32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32,
                112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79,
                119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115,
                40, 115, 111, 117, 114, 99, 101, 41, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 120, 99, 108,
                117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112,
                114, 111, 112, 41, 32, 60, 32, 48, 32, 38, 38, 32, 95, 95, 112,
                114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108,
                40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114,
                103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111,
                117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 125,
                59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108,
                105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106,
                44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32,
                61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108,
                80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101,
                111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121,
                109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32,
                34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117,
                101, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 97, 115, 121,
                110, 99, 32, 61, 32, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95,
                95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 44, 32, 103,
                101, 110, 101, 114, 97, 116, 111, 114, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101,
                119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 114, 101,
                115, 111, 108, 118, 101, 44, 32, 114, 101, 106, 101, 99, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 117, 108, 102, 105, 108, 108, 101, 100, 32, 61,
                32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103,
                101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 120, 116,
                40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106,
                101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 114, 101, 106, 101, 99, 116, 101,
                100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112,
                40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 116, 104,
                114, 111, 119, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32,
                40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 115, 116, 101,
                112, 32, 61, 32, 40, 120, 41, 32, 61, 62, 32, 120, 46, 100, 111,
                110, 101, 32, 63, 32, 114, 101, 115, 111, 108, 118, 101, 40,
                120, 46, 118, 97, 108, 117, 101, 41, 32, 58, 32, 80, 114, 111,
                109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40,
                120, 46, 118, 97, 108, 117, 101, 41, 46, 116, 104, 101, 110, 40,
                102, 117, 108, 102, 105, 108, 108, 101, 100, 44, 32, 114, 101,
                106, 101, 99, 116, 101, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 116, 101, 112, 40, 40, 103, 101, 110, 101, 114, 97, 116,
                111, 114, 32, 61, 32, 103, 101, 110, 101, 114, 97, 116, 111,
                114, 46, 97, 112, 112, 108, 121, 40, 95, 95, 116, 104, 105, 115,
                44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41,
                41, 46, 110, 101, 120, 116, 40, 41, 41, 59, 10, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32,
                115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45,
                102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46,
                116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83,
                116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115,
                115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115,
                116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97,
                109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98,
                97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105,
                100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10,
                32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109,
                97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97,
                116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123,
                10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110,
                100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101,
                108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115,
                116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110,
                117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108,
                98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72,
                97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109,
                98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78,
                84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110,
                100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32,
                43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97,
                116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100,
                105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40,
                68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108,
                97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116,
                73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109,
                101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95,
                108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97,
                110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32,
                123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99,
                116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95,
                95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103,
                121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111,
                110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83,
                116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101,
                119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101,
                103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108,
                98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115,
                116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101,
                115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114,
                97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101,
                108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97,
                109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103,
                121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47,
                47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116,
                115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66,
                82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111,
                102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34,
                117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32,
                116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119,
                46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32,
                34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32,
                32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84,
                85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116,
                56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44,
                32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32,
                76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68,
                65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91,
                34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34,
                44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102,
                114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10,
                32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86,
                69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 52, 48, 46, 49,
                34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71,
                69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116,
                105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111,
                116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118,
                97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70,
                65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 10, 32,
                32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100,
                111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121,
                101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114,
                101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61,
                32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 118, 97, 114, 32,
                95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32,
                116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101,
                110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110,
                101, 100, 34, 32, 63, 32, 40, 95, 97, 32, 61, 32, 100, 111, 99,
                117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116,
                83, 99, 114, 105, 112, 116, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59,
                10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101,
                65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82,
                116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107,
                32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32,
                97, 97, 44, 32, 98, 97, 44, 32, 101, 97, 32, 61, 32, 110, 101,
                119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32,
                98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41,
                44, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97,
                115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 107, 41, 44, 32,
                104, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112,
                114, 111, 103, 114, 97, 109, 34, 44, 32, 112, 32, 61, 32, 34,
                34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117,
                110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110,
                116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46,
                99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116,
                32, 38, 38, 32, 40, 112, 32, 61, 32, 100, 111, 99, 117, 109,
                101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99,
                114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101,
                32, 38, 38, 32, 40, 112, 32, 61, 32, 95, 115, 99, 114, 105, 112,
                116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 112,
                46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98,
                108, 111, 98, 58, 34, 41, 32, 63, 32, 112, 32, 61, 32, 34, 34,
                32, 58, 32, 112, 32, 61, 32, 112, 46, 115, 117, 98, 115, 116,
                114, 40, 48, 44, 32, 112, 46, 114, 101, 112, 108, 97, 99, 101,
                40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108,
                97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34,
                41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97,
                32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 102, 101, 116, 99, 104,
                40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105,
                97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105,
                103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 98,
                46, 111, 107, 32, 63, 32, 98, 46, 97, 114, 114, 97, 121, 66,
                117, 102, 102, 101, 114, 40, 41, 32, 58, 32, 80, 114, 111, 109,
                105, 115, 101, 46, 114, 101, 106, 101, 99, 116, 40, 69, 114,
                114, 111, 114, 40, 98, 46, 115, 116, 97, 116, 117, 115, 32, 43,
                32, 34, 32, 58, 32, 34, 32, 43, 32, 98, 46, 117, 114, 108, 41,
                41, 10, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 116, 32, 61, 32, 107, 46, 112, 114, 105,
                110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111, 110, 115,
                111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98, 105, 110,
                100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115,
                105, 103, 110, 40, 107, 44, 32, 102, 97, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 102, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32,
                32, 32, 32, 32, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111,
                103, 114, 97, 109, 32, 38, 38, 32, 40, 104, 97, 32, 61, 32, 107,
                46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 97, 32, 61,
                32, 107, 46, 119, 97, 115, 109, 66, 105, 110, 97, 114, 121, 44,
                32, 107, 97, 44, 32, 108, 97, 32, 61, 32, 102, 97, 108, 115,
                101, 44, 32, 109, 97, 44, 32, 119, 44, 32, 120, 44, 32, 121, 44,
                32, 122, 44, 32, 67, 44, 32, 68, 44, 32, 110, 97, 44, 32, 111,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 112, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 107, 97, 46, 98,
                117, 102, 102, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                107, 46, 72, 69, 65, 80, 56, 32, 61, 32, 119, 32, 61, 32, 110,
                101, 119, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65,
                80, 49, 54, 32, 61, 32, 121, 32, 61, 32, 110, 101, 119, 32, 73,
                110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 56, 32,
                61, 32, 120, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116,
                56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 49, 54, 32, 61, 32,
                122, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 49, 54,
                65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 107, 46, 72, 69, 65, 80, 51, 50, 32, 61, 32, 67, 32,
                61, 32, 110, 101, 119, 32, 73, 110, 116, 51, 50, 65, 114, 114,
                97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                107, 46, 72, 69, 65, 80, 85, 51, 50, 32, 61, 32, 68, 32, 61, 32,
                110, 101, 119, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97,
                121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107,
                46, 72, 69, 65, 80, 70, 51, 50, 32, 61, 32, 110, 97, 32, 61, 32,
                110, 101, 119, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114,
                97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                107, 46, 72, 69, 65, 80, 70, 54, 52, 32, 61, 32, 111, 97, 32,
                61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 54, 52, 65,
                114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 97, 32,
                61, 32, 91, 93, 44, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32,
                115, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 97, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97,
                32, 61, 32, 107, 46, 112, 114, 101, 82, 117, 110, 46, 115, 104,
                105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                113, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 70, 32, 61, 32, 48, 44, 32, 117, 97, 32, 61,
                32, 110, 117, 108, 108, 44, 32, 71, 32, 61, 32, 110, 117, 108,
                108, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 118, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46,
                111, 110, 65, 98, 111, 114, 116, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 34, 65, 98,
                111, 114, 116, 101, 100, 40, 34, 32, 43, 32, 97, 32, 43, 32, 34,
                41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32,
                116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                32, 61, 32, 110, 101, 119, 32, 87, 101, 98, 65, 115, 115, 101,
                109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69,
                114, 114, 111, 114, 40, 97, 32, 43, 32, 34, 46, 32, 66, 117,
                105, 108, 100, 32, 119, 105, 116, 104, 32, 45, 115, 65, 83, 83,
                69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114, 32, 109, 111,
                114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 119, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 97,
                46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 100,
                97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111,
                110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114, 101, 97,
                109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32, 120, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 121, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 120, 97,
                32, 38, 38, 32, 106, 97, 41, 32, 114, 101, 116, 117, 114, 110,
                32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97,
                121, 40, 106, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97, 115,
                121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32, 102,
                101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116, 104,
                101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101, 100, 34,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 97, 40, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 106, 97, 32, 63, 32, 80, 114, 111, 109, 105, 115,
                101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 41, 46, 116,
                104, 101, 110, 40, 40, 41, 32, 61, 62, 32, 121, 97, 40, 97, 41,
                41, 32, 58, 32, 105, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61,
                62, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114,
                97, 121, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 40, 41, 32, 61, 62, 32, 121, 97, 40, 97, 41, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                32, 65, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                122, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40, 40, 100, 41,
                32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108,
                121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101,
                40, 100, 44, 32, 98, 41, 41, 46, 116, 104, 101, 110, 40, 99, 44,
                32, 40, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105, 108, 101, 100,
                32, 116, 111, 32, 97, 115, 121, 110, 99, 104, 114, 111, 110,
                111, 117, 115, 108, 121, 32, 112, 114, 101, 112, 97, 114, 101,
                32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125, 96, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 40, 100,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 66, 97, 40, 97, 44, 32, 98, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                99, 32, 61, 32, 120, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 106, 97, 32, 124, 124, 32, 34,
                102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101,
                109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105,
                97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 32,
                124, 124, 32, 119, 97, 40, 99, 41, 32, 124, 124, 32, 34, 102,
                117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121,
                112, 101, 111, 102, 32, 102, 101, 116, 99, 104, 32, 63, 32, 65,
                97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 32, 58, 32, 102, 101,
                116, 99, 104, 40, 99, 44, 32, 123, 32, 99, 114, 101, 100, 101,
                110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45,
                111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46, 116, 104,
                101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
                100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109,
                98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97,
                116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 100,
                44, 32, 97, 41, 46, 116, 104, 101, 110, 40, 98, 44, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 119,
                97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103,
                32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108,
                101, 100, 58, 32, 36, 123, 101, 125, 96, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 34, 102, 97, 108,
                108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65,
                114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110,
                115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 65, 97, 40, 99, 44, 32, 97, 44, 32, 98,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32,
                67, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117,
                98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105,
                115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69, 120,
                105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109,
                101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103,
                114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101,
                100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36,
                123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32,
                61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 68, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59,
                32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59,
                32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 107,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 69, 97, 32, 61,
                32, 107, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116,
                105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 70,
                97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100,
                34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101,
                120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101,
                119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40,
                41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 71, 97, 32,
                61, 32, 40, 97, 32, 61, 32, 48, 44, 32, 98, 32, 61, 32, 78, 97,
                78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 99, 32, 61, 32, 120, 44, 32, 100, 32, 61, 32,
                97, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 98, 32, 61, 32, 97, 59, 32, 99, 91, 98, 93,
                32, 38, 38, 32, 33, 40, 98, 32, 62, 61, 32, 100, 41, 59, 32, 41,
                32, 43, 43, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 49, 54, 32, 60, 32, 98, 32, 45, 32, 97, 32, 38, 38,
                32, 99, 46, 98, 117, 102, 102, 101, 114, 32, 38, 38, 32, 70, 97,
                41, 32, 114, 101, 116, 117, 114, 110, 32, 70, 97, 46, 100, 101,
                99, 111, 100, 101, 40, 99, 46, 115, 117, 98, 97, 114, 114, 97,
                121, 40, 97, 44, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32,
                97, 32, 60, 32, 98, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 99, 91,
                97, 43, 43, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 102, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32,
                50, 50, 52, 41, 41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105,
                110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111,
                100, 101, 40, 40, 101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32,
                54, 32, 124, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                104, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                32, 61, 32, 50, 50, 52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50,
                52, 48, 41, 32, 63, 32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60,
                60, 32, 49, 50, 32, 124, 32, 102, 32, 60, 60, 32, 54, 32, 124,
                32, 104, 32, 58, 32, 40, 101, 32, 38, 32, 55, 41, 32, 60, 60,
                32, 49, 56, 32, 124, 32, 102, 32, 60, 60, 32, 49, 50, 32, 124,
                32, 104, 32, 60, 60, 32, 54, 32, 124, 32, 99, 91, 97, 43, 43,
                93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 62, 32, 101, 32,
                63, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                101, 41, 32, 58, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51,
                54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103,
                46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48,
                44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49,
                48, 50, 51, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 101, 108, 115, 101, 32, 100, 32, 43, 61, 32, 83, 116,
                114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114,
                67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 72, 97,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 118,
                97, 32, 61, 32, 97, 32, 45, 32, 50, 52, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 73, 97, 32, 61, 32, 48,
                44, 32, 74, 97, 32, 61, 32, 48, 44, 32, 72, 32, 61, 32, 40, 97,
                44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 120, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32,
                60, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 99, 32, 61, 32, 98, 32, 43, 32, 99, 32, 45, 32, 49, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32,
                97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67,
                111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57,
                54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32,
                62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32,
                97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43,
                43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40,
                40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48,
                41, 32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 50,
                55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32,
                62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43,
                43, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 50, 48, 52, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 98, 32, 43, 32, 49, 32, 62, 61, 32, 99, 41,
                32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32,
                61, 32, 49, 57, 50, 32, 124, 32, 102, 32, 62, 62, 32, 54, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 54, 53,
                53, 51, 53, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 98, 32, 43, 32, 50, 32, 62, 61, 32, 99, 41, 32, 98,
                114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32,
                61, 32, 50, 50, 52, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 98, 32, 43, 32, 51, 32, 62, 61, 32, 99, 41, 32, 98,
                114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32,
                61, 32, 50, 52, 48, 32, 124, 32, 102, 32, 62, 62, 32, 49, 56,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56,
                32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 32, 38, 32, 54, 51,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56,
                32, 124, 32, 102, 32, 62, 62, 32, 54, 32, 38, 32, 54, 51, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100,
                91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102,
                32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98,
                93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 75, 97, 32, 61, 32,
                123, 125, 44, 32, 76, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 59, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 112, 111, 112,
                40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 73, 40, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87,
                105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 97, 32, 62, 62,
                32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 74, 32, 61, 32, 123, 125, 44,
                32, 75, 32, 61, 32, 123, 125, 44, 32, 77, 97, 32, 61, 32, 123,
                125, 44, 32, 76, 44, 32, 78, 32, 61, 32, 40, 97, 44, 32, 98, 44,
                32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 103, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32,
                61, 32, 99, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 103, 46, 108, 101, 110, 103, 116, 104,
                32, 33, 61, 61, 32, 97, 46, 108, 101, 110, 103, 116, 104, 41,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34,
                77, 105, 115, 109, 97, 116, 99, 104, 101, 100, 32, 116, 121,
                112, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 114, 32,
                99, 111, 117, 110, 116, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108,
                32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 97, 46, 108, 101, 110,
                103, 116, 104, 59, 32, 43, 43, 108, 41, 32, 77, 40, 97, 91, 108,
                93, 44, 32, 103, 91, 108, 93, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46,
                102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 41, 32, 61, 62, 32,
                77, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 114, 114,
                97, 121, 40, 98, 46, 108, 101, 110, 103, 116, 104, 41, 44, 32,
                102, 32, 61, 32, 91, 93, 44, 32, 104, 32, 61, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97,
                99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 46, 104, 97, 115,
                79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103,
                41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 75, 91, 103, 93,
                32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40, 103, 41, 44,
                32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101,
                114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40, 74, 91, 103,
                93, 32, 61, 32, 91, 93, 41, 44, 32, 74, 91, 103, 93, 46, 112,
                117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108, 93, 32, 61,
                32, 75, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 43, 43, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 104, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110,
                103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116,
                104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 44, 32, 78, 97, 44, 32, 79, 32, 61, 32, 40, 97, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 34, 34, 59,
                32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61, 32, 78, 97,
                91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 44, 32, 80, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 80, 97, 40, 97, 44,
                32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32,
                98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 80, 40, 96, 116, 121, 112, 101, 32, 34,
                36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104, 97, 118,
                101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32,
                105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 105,
                100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 75, 46, 104, 97,
                115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40,
                97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 99, 46, 36, 97, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97,
                110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114,
                32, 116, 121, 112, 101, 32, 39, 36, 123, 100, 125, 39, 32, 116,
                119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 91, 97, 93, 32,
                61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101,
                108, 101, 116, 101, 32, 77, 97, 91, 97, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114,
                111, 112, 101, 114, 116, 121, 40, 97, 41, 32, 38, 38, 32, 40,
                98, 32, 61, 32, 74, 91, 97, 93, 44, 32, 100, 101, 108, 101, 116,
                101, 32, 74, 91, 97, 93, 44, 32, 98, 46, 102, 111, 114, 69, 97,
                99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 101, 40, 41, 41, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 40, 97, 44, 32,
                98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 80,
                97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 81,
                97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 97, 46, 116, 97, 46, 119, 97, 46, 117, 97, 46, 110,
                97, 109, 101, 32, 43, 32, 34, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 97, 108, 114, 101, 97, 100, 121, 32, 100, 101, 108,
                101, 116, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                44, 32, 82, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 83,
                97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 125, 44, 32, 84, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44,
                32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 98, 32, 61, 61, 61, 32, 99, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61,
                61, 61, 32, 99, 46, 122, 97, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 32, 61, 32, 84, 97, 40, 97, 44, 32, 98, 44, 32, 99, 46,
                122, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32,
                97, 32, 63, 32, 110, 117, 108, 108, 32, 58, 32, 99, 46, 84, 97,
                40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 97,
                32, 61, 32, 123, 125, 44, 32, 86, 97, 32, 61, 32, 123, 125, 44,
                32, 87, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118,
                111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 112, 116, 114,
                32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98,
                101, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                59, 32, 97, 46, 122, 97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46,
                74, 97, 40, 98, 41, 44, 32, 97, 32, 61, 32, 97, 46, 122, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 86, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 88, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 98, 46, 119, 97, 32, 124, 124, 32, 33, 98, 46, 118, 97,
                41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40,
                34, 109, 97, 107, 101, 67, 108, 97, 115, 115, 72, 97, 110, 100,
                108, 101, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 112,
                116, 114, 32, 97, 110, 100, 32, 112, 116, 114, 84, 121, 112,
                101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 33, 98, 46, 65, 97, 32, 33, 61, 61, 32, 33, 33, 98,
                46, 121, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 76, 40, 34, 66, 111, 116, 104, 32, 115, 109, 97, 114, 116,
                80, 116, 114, 84, 121, 112, 101, 32, 97, 110, 100, 32, 115, 109,
                97, 114, 116, 80, 116, 114, 32, 109, 117, 115, 116, 32, 98, 101,
                32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116,
                32, 61, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 81, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114,
                101, 97, 116, 101, 40, 97, 44, 32, 123, 32, 116, 97, 58, 32,
                123, 32, 118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114,
                105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125,
                32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                81, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101,
                102, 105, 110, 101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112,
                101, 111, 102, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116,
                105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 41, 32,
                114, 101, 116, 117, 114, 110, 32, 81, 32, 61, 32, 40, 98, 41,
                32, 61, 62, 32, 98, 44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 82, 97, 32, 61, 32, 110, 101, 119, 32, 70, 105, 110, 97,
                108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115,
                116, 114, 121, 40, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 116, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46,
                99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98,
                46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38,
                38, 32, 40, 98, 46, 121, 97, 32, 63, 32, 98, 46, 65, 97, 46, 68,
                97, 40, 98, 46, 121, 97, 41, 32, 58, 32, 98, 46, 119, 97, 46,
                117, 97, 46, 68, 97, 40, 98, 46, 118, 97, 41, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 81, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99,
                32, 61, 32, 98, 46, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 46, 121, 97, 32, 38, 38, 32, 82, 97, 46, 114,
                101, 103, 105, 115, 116, 101, 114, 40, 98, 44, 32, 123, 32, 116,
                97, 58, 32, 99, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 83, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 97, 46,
                117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 81, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 89, 97, 32,
                61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 90, 97, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 82, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79,
                98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80,
                114, 111, 112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97,
                109, 101, 34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32,
                97, 32, 125, 41, 44, 32, 36, 97, 32, 61, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61,
                61, 61, 32, 97, 91, 98, 93, 46, 120, 97, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32,
                61, 32, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91,
                98, 93, 46, 120, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114,
                111, 112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103,
                116, 104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39,
                36, 123, 99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119,
                105, 116, 104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105,
                100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114,
                103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46,
                108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120,
                112, 101, 99, 116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40,
                36, 123, 97, 91, 98, 93, 46, 120, 97, 125, 41, 33, 96, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 97, 91, 98, 93, 46, 120, 97, 91, 101, 46,
                108, 101, 110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121,
                40, 116, 104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 91, 98, 93, 46, 120, 97, 32, 61, 32, 91, 93, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46,
                120, 97, 91, 100, 46, 71, 97, 93, 32, 61, 32, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 97, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114,
                111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111,
                105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118,
                111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46,
                120, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61,
                61, 32, 107, 91, 97, 93, 46, 120, 97, 91, 99, 93, 41, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111,
                116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117,
                98, 108, 105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97,
                125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 107, 44, 32, 97, 44, 32,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 107, 91, 97, 93, 46, 120, 97, 46, 104, 97, 115, 79,
                119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110,
                110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32,
                109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114,
                108, 111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104,
                101, 32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32,
                111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32,
                40, 36, 123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 107, 91, 97, 93, 46, 120, 97, 91, 99,
                93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 101, 108, 115, 101, 32, 107, 91, 97, 93, 32, 61, 32, 98, 44,
                32, 107, 91, 97, 93, 46, 71, 97, 32, 61, 32, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 44, 32, 98, 98, 32, 61, 32, 40, 97, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61,
                32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97,
                45, 122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34,
                36, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100,
                101, 65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32,
                98, 32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96,
                95, 36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 99, 98, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32,
                103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110,
                115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 70, 97,
                32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 68, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 122, 97, 32, 61, 32,
                101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 86, 97, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 74, 97, 32, 61, 32, 104, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 84, 97, 32,
                61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 98, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                100, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                33, 98, 46, 74, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 80, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100,
                32, 110, 117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97,
                109, 101, 125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46,
                110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 97, 32, 61, 32, 98, 46, 74, 97, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98,
                46, 122, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 98,
                40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32,
                98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 77, 97, 41, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117,
                108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97,
                108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97,
                109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 33, 98, 46, 116, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110,
                111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 102, 98, 40,
                98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 116, 97,
                46, 118, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115,
                115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106,
                101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116,
                101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123,
                116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 100, 98, 40, 98, 46, 116, 97, 46, 118, 97, 44, 32, 98, 46,
                116, 97, 46, 119, 97, 46, 117, 97, 44, 32, 116, 104, 105, 115,
                46, 117, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                103, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61,
                61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 77, 97, 41,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96,
                110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32,
                118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46,
                110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 76,
                97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46,
                78, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38,
                32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 68,
                97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 33, 98, 32, 124, 124, 32, 33, 98,
                46, 116, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115,
                115, 32, 34, 36, 123, 102, 98, 40, 98, 41, 125, 34, 32, 97, 115,
                32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101,
                125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 98, 46, 116, 97, 46, 118, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110,
                111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116,
                101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97,
                32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116,
                121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97,
                109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 75, 97, 32, 38,
                38, 32, 98, 46, 116, 97, 46, 119, 97, 46, 75, 97, 41, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111,
                110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110,
                116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46,
                116, 97, 46, 65, 97, 32, 63, 32, 98, 46, 116, 97, 46, 65, 97,
                46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 116, 97, 46, 119, 97,
                46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97,
                109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123,
                116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 32, 61, 32, 100, 98, 40, 98, 46, 116, 97, 46,
                118, 97, 44, 32, 98, 46, 116, 97, 46, 119, 97, 46, 117, 97, 44,
                32, 116, 104, 105, 115, 46, 117, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 76,
                97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61,
                32, 98, 46, 116, 97, 46, 121, 97, 41, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 80, 40, 34, 80, 97, 115, 115, 105,
                110, 103, 32, 114, 97, 119, 32, 112, 111, 105, 110, 116, 101,
                114, 32, 116, 111, 32, 115, 109, 97, 114, 116, 32, 112, 111,
                105, 110, 116, 101, 114, 32, 105, 115, 32, 105, 108, 108, 101,
                103, 97, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 116, 104, 105, 115,
                46, 104, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 48, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                98, 46, 116, 97, 46, 65, 97, 32, 61, 61, 61, 32, 116, 104, 105,
                115, 41, 32, 99, 32, 61, 32, 98, 46, 116, 97, 46, 121, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99,
                111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101,
                110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98,
                46, 116, 97, 46, 65, 97, 32, 63, 32, 98, 46, 116, 97, 46, 65,
                97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 116, 97, 46, 119,
                97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114,
                97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36,
                123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98,
                46, 116, 97, 46, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101,
                32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 98, 46, 116, 97, 46, 65, 97, 32, 61,
                61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46,
                116, 97, 46, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 100, 32, 61, 32, 98, 46, 99, 108, 111, 110, 101, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 99, 98, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 104, 98, 40, 40, 41, 32, 61, 62,
                32, 100, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97,
                32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105,
                115, 46, 68, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102,
                97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 34, 85, 110, 115, 117, 112, 112, 111, 114, 116, 105,
                110, 103, 32, 115, 104, 97, 114, 105, 110, 103, 32, 112, 111,
                108, 105, 99, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 98, 40,
                97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 77, 97, 41, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108,
                108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108,
                105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109,
                101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 33, 98, 46, 116, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110,
                111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 102, 98, 40,
                98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 116, 97,
                46, 118, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115,
                115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106,
                101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116,
                101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123,
                116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 116,
                97, 46, 119, 97, 46, 75, 97, 41, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116,
                32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117,
                109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32,
                36, 123, 98, 46, 116, 97, 46, 119, 97, 46, 110, 97, 109, 101,
                125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101,
                114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115,
                46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 98, 40, 98,
                46, 116, 97, 46, 118, 97, 44, 32, 98, 46, 116, 97, 46, 119, 97,
                46, 117, 97, 44, 32, 116, 104, 105, 115, 46, 117, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 98, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44,
                32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 117, 97, 32, 61, 32, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                77, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 100, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 76, 97, 32, 61,
                32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 97, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 104, 98, 32, 61, 32, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                82, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 78, 97, 32, 61, 32, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 98, 32, 61,
                32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 68, 97, 32, 61, 32, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48,
                32, 33, 61, 61, 32, 98, 46, 122, 97, 32, 63, 32, 116, 104, 105,
                115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61,
                32, 103, 98, 32, 58, 32, 40, 116, 104, 105, 115, 46, 116, 111,
                87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 100, 32, 63,
                32, 101, 98, 32, 58, 32, 105, 98, 44, 32, 116, 104, 105, 115,
                46, 67, 97, 32, 61, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 107, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111,
                112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 76, 40, 34, 82, 101, 112, 108, 97,
                99, 105, 110, 103, 32, 110, 111, 110, 101, 120, 105, 115, 116,
                101, 110, 116, 32, 112, 117, 98, 108, 105, 99, 32, 115, 121,
                109, 98, 111, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97,
                93, 46, 120, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32,
                33, 61, 61, 32, 99, 32, 63, 32, 107, 91, 97, 93, 46, 120, 97,
                91, 99, 93, 32, 61, 32, 98, 32, 58, 32, 40, 107, 91, 97, 93, 32,
                61, 32, 98, 44, 32, 107, 91, 97, 93, 46, 71, 97, 32, 61, 32, 99,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 44, 32,
                108, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32,
                91, 93, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106,
                34, 41, 32, 63, 32, 40, 97, 32, 61, 32, 97, 46, 114, 101, 112,
                108, 97, 99, 101, 40, 47, 112, 47, 103, 44, 32, 34, 105, 34, 41,
                44, 32, 98, 32, 61, 32, 40, 48, 44, 32, 107, 91, 34, 100, 121,
                110, 67, 97, 108, 108, 95, 34, 32, 43, 32, 97, 93, 41, 40, 98,
                44, 32, 46, 46, 46, 99, 41, 41, 32, 58, 32, 98, 32, 61, 32, 83,
                46, 103, 101, 116, 40, 98, 41, 40, 46, 46, 46, 99, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 109, 98,
                32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 46, 46,
                46, 99, 41, 32, 61, 62, 32, 108, 98, 40, 97, 44, 32, 98, 44, 32,
                99, 41, 44, 32, 84, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32,
                79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 99, 32, 61, 32, 97, 46, 105, 110, 99, 108, 117, 100,
                101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 109, 98, 40, 97, 44,
                32, 98, 41, 32, 58, 32, 83, 46, 103, 101, 116, 40, 98, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 102,
                117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121,
                112, 101, 111, 102, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 80, 40, 96, 117, 110, 107, 110, 111, 119,
                110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 111,
                105, 110, 116, 101, 114, 32, 119, 105, 116, 104, 32, 115, 105,
                103, 110, 97, 116, 117, 114, 101, 32, 36, 123, 97, 125, 58, 32,
                36, 123, 98, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 110, 98, 44, 32, 112, 98, 32, 61, 32,
                40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 32, 61, 32, 111, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 79, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 113,
                98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 99, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 101, 91, 102, 93, 32, 124, 124, 32, 75, 91,
                102, 93, 32, 124, 124, 32, 40, 77, 97, 91, 102, 93, 32, 63, 32,
                77, 97, 91, 102, 93, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99,
                41, 32, 58, 32, 40, 100, 46, 112, 117, 115, 104, 40, 102, 41,
                44, 32, 101, 91, 102, 93, 32, 61, 32, 116, 114, 117, 101, 41,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93,
                44, 32, 101, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 110, 98, 40, 96, 36, 123, 97, 125, 58,
                32, 96, 32, 43, 32, 100, 46, 109, 97, 112, 40, 112, 98, 41, 46,
                106, 111, 105, 110, 40, 91, 34, 44, 32, 34, 93, 41, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 114, 98, 32, 61, 32, 40,
                97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61,
                32, 91, 93, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60,
                32, 97, 59, 32, 100, 43, 43, 41, 32, 99, 46, 112, 117, 115, 104,
                40, 68, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32,
                50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 115, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32,
                61, 32, 49, 59, 32, 98, 32, 60, 32, 97, 46, 108, 101, 110, 103,
                116, 104, 59, 32, 43, 43, 98, 41, 32, 105, 102, 32, 40, 110,
                117, 108, 108, 32, 33, 61, 61, 32, 97, 91, 98, 93, 32, 38, 38,
                32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98,
                93, 46, 67, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 116, 98, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 46, 108,
                101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 50, 32, 62, 32, 102, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 97, 114, 103, 84,
                121, 112, 101, 115, 32, 97, 114, 114, 97, 121, 32, 115, 105,
                122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 33, 32, 77,
                117, 115, 116, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 103,
                101, 116, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108,
                117, 101, 32, 97, 110, 100, 32, 39, 116, 104, 105, 115, 39, 32,
                116, 121, 112, 101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 110, 117, 108,
                108, 32, 33, 61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110,
                117, 108, 108, 32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32,
                115, 98, 40, 98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105,
                100, 34, 32, 33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109,
                101, 44, 32, 109, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 110,
                32, 61, 32, 65, 114, 114, 97, 121, 40, 109, 41, 44, 32, 113, 32,
                61, 32, 91, 93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82,
                40, 97, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46,
                46, 46, 65, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 46, 108, 101,
                110, 103, 116, 104, 32, 61, 32, 104, 32, 63, 32, 50, 32, 58, 32,
                49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 48,
                93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 117, 32, 61, 32,
                98, 91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112,
                101, 40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 49, 93, 32, 61,
                32, 117, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 118, 97, 114, 32, 118, 32, 61, 32, 48, 59, 32, 118, 32, 60,
                32, 109, 59, 32, 43, 43, 118, 41, 32, 110, 91, 118, 93, 32, 61,
                32, 98, 91, 118, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114,
                101, 84, 121, 112, 101, 40, 114, 44, 32, 65, 91, 118, 93, 41,
                44, 32, 113, 46, 112, 117, 115, 104, 40, 110, 91, 118, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 32, 61, 32,
                100, 40, 46, 46, 46, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 76, 97, 40, 114,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108,
                115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 32, 61, 32, 104, 32, 63, 32, 49, 32,
                58, 32, 50, 59, 32, 118, 32, 60, 32, 98, 46, 108, 101, 110, 103,
                116, 104, 59, 32, 118, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69,
                32, 61, 32, 49, 32, 61, 61, 61, 32, 118, 32, 63, 32, 117, 32,
                58, 32, 110, 91, 118, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108,
                32, 33, 61, 61, 32, 98, 91, 118, 93, 46, 67, 97, 32, 38, 38, 32,
                98, 91, 118, 93, 46, 67, 97, 40, 69, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48,
                93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 40, 65, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 117, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 117, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97,
                46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105,
                110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45,
                49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98,
                115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 118, 98, 32, 61, 32, 91,
                93, 44, 32, 86, 32, 61, 32, 91, 93, 44, 32, 120, 98, 32, 61, 32,
                40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32,
                45, 45, 86, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 86,
                91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 118,
                98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 121, 98, 32, 61, 32, 40, 97, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 80, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115,
                101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108,
                46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 86, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 44, 32, 104, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116,
                99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32,
                48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                98, 32, 61, 32, 118, 98, 46, 112, 111, 112, 40, 41, 32, 124,
                124, 32, 86, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 93, 32, 61,
                32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                86, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 122, 98, 32, 61, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32,
                34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58,
                118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40,
                97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 121, 98, 40, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120, 98, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87,
                105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 104, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 66, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114,
                111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 110, 117, 108,
                108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32,
                40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32,
                63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 119,
                91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104,
                105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121,
                112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104,
                105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121,
                112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114,
                111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91,
                100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105,
                115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 40, 67, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114,
                111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 100,
                32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114,
                40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116,
                101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36,
                123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 66, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 99, 32, 61, 32, 75, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32,
                61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32,
                61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110,
                107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123,
                112, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 80, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44,
                32, 102, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108,
                108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112,
                101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99,
                116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114,
                114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34,
                102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32,
                98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103,
                40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 67, 98, 32, 61, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52,
                58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84,
                121, 112, 101, 40, 110, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101,
                32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101,
                84, 121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 51, 93,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102,
                97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118,
                97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105,
                100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123,
                97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 68, 98, 32, 61, 32, 40,
                97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97,
                115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32,
                40, 100, 41, 32, 61, 62, 32, 119, 91, 100, 93, 32, 58, 32, 40,
                100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32,
                121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41,
                32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32,
                52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32,
                61, 62, 32, 67, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40,
                100, 41, 32, 61, 62, 32, 68, 91, 100, 32, 62, 62, 32, 50, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102,
                97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118,
                97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32,
                119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32,
                36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 69, 98, 32,
                61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103,
                110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32,
                116, 114, 117, 101, 32, 125, 44, 32, 122, 98, 41, 44, 32, 70,
                98, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100,
                34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101,
                120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101,
                119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40,
                34, 117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32,
                118, 111, 105, 100, 32, 48, 44, 32, 71, 98, 32, 61, 32, 40, 97,
                44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32,
                49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32,
                47, 32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38,
                38, 32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32,
                60, 32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 70, 98, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 70, 98, 46, 100, 101, 99, 111, 100,
                101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97,
                44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32,
                62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32,
                100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32,
                98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 72, 98, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49,
                52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42,
                32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32,
                47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32,
                99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32,
                49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101,
                65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49,
                93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61, 32, 40, 97, 41,
                32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116,
                104, 44, 32, 74, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32,
                61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47,
                32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 67, 91, 97, 32,
                43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32,
                61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32,
                101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54,
                44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53,
                53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44,
                32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48,
                50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114,
                105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67,
                111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                75, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61,
                32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43,
                32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48,
                59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104,
                59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99,
                104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53,
                53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51,
                52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61,
                32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40,
                43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40,
                102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41,
                32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32,
                102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43,
                61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98,
                114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32,
                50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 98, 32, 61, 32, 40, 97,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44,
                32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108,
                101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65,
                116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55,
                51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32,
                52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 48,
                44, 32, 78, 98, 32, 61, 32, 91, 93, 44, 32, 79, 98, 32, 61, 32,
                40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 98, 32, 61, 32, 78, 98, 46, 108, 101, 110,
                103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 98,
                46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 80, 98, 32, 61, 32, 40, 97, 44,
                32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65,
                114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59,
                32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91,
                100, 93, 32, 61, 32, 66, 98, 40, 68, 91, 98, 32, 43, 32, 52, 32,
                42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114,
                97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81,
                98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 44, 32, 82, 98, 32, 61, 32,
                123, 125, 44, 32, 83, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102,
                32, 67, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100,
                34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 98, 32, 61,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 109, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 69, 97, 32, 124, 124, 32, 48, 32, 60, 32, 77,
                98, 32, 124, 124, 32, 40, 40, 95, 97, 50, 32, 61, 32, 107, 46,
                111, 110, 69, 120, 105, 116, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 44, 32, 108,
                97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                67, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                85, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 41, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 97, 40, 41, 44, 32, 33, 40, 69, 97, 32, 124, 124, 32,
                48, 32, 60, 32, 77, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97,
                32, 61, 32, 97, 32, 61, 32, 109, 97, 44, 32, 84, 98, 40, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83,
                98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 98, 40, 98, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 44, 32, 86, 98, 32, 61, 32, 123, 125, 44,
                32, 88, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 87, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117,
                115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101,
                98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68,
                58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101,
                47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32,
                40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116,
                111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111,
                114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38,
                32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110,
                103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34,
                67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41,
                32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 104, 97, 32,
                124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111,
                103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 86, 98, 41, 32,
                118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 86, 98, 91, 98,
                93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98,
                93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 86, 98, 91, 98, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41,
                32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61,
                36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 87, 98, 32, 61, 32, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 87, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 87, 98, 44, 32, 89, 98, 32, 61, 32, 40,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61,
                61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112,
                116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111,
                110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99,
                114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100,
                111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40,
                97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46, 103,
                101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101,
                115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109, 68,
                101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 90, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40,
                90, 98, 32, 61, 32, 89, 98, 40, 41, 41, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 76, 32, 61, 32, 107, 46, 73, 110, 116, 101,
                114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108,
                97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69,
                114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117,
                112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61,
                32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111,
                114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 36, 98, 32, 61, 32, 65, 114,
                114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 97, 99, 32, 61, 32,
                48, 59, 32, 50, 53, 54, 32, 62, 32, 97, 99, 59, 32, 43, 43, 97,
                99, 41, 32, 36, 98, 91, 97, 99, 93, 32, 61, 32, 83, 116, 114,
                105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67,
                111, 100, 101, 40, 97, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                78, 97, 32, 61, 32, 36, 98, 59, 10, 32, 32, 32, 32, 32, 32, 80,
                32, 61, 32, 107, 46, 66, 105, 110, 100, 105, 110, 103, 69, 114,
                114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120,
                116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114,
                117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110, 100, 105,
                110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115,
                115, 105, 103, 110, 40, 90, 97, 46, 112, 114, 111, 116, 111,
                116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 116,
                104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 90, 97, 32, 38, 38, 32, 97, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 111, 102, 32, 90, 97, 41, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32,
                116, 104, 105, 115, 46, 116, 97, 46, 119, 97, 46, 117, 97, 44,
                32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 116, 97, 46, 118,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 116,
                97, 32, 61, 32, 97, 46, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 116,
                97, 46, 119, 97, 46, 117, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 97, 32, 61, 32, 97, 46,
                116, 97, 46, 118, 97, 59, 32, 98, 46, 122, 97, 59, 32, 41, 32,
                99, 32, 61, 32, 98, 46, 74, 97, 40, 99, 41, 44, 32, 98, 32, 61,
                32, 98, 46, 122, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 59, 32, 100, 46, 122, 97, 59, 32, 41,
                32, 97, 32, 61, 32, 100, 46, 74, 97, 40, 97, 41, 44, 32, 100,
                32, 61, 32, 100, 46, 122, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 61,
                61, 61, 32, 100, 32, 38, 38, 32, 99, 32, 61, 61, 61, 32, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 108, 111, 110, 101, 58, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 116, 97, 46, 118,
                97, 32, 124, 124, 32, 81, 97, 40, 116, 104, 105, 115, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                116, 104, 105, 115, 46, 116, 97, 46, 73, 97, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 116, 97, 46, 99,
                111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32,
                49, 44, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 81, 44, 32,
                98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 44, 32, 99, 32, 61,
                32, 98, 46, 99, 114, 101, 97, 116, 101, 44, 32, 100, 32, 61, 32,
                79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116,
                111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41,
                44, 32, 101, 32, 61, 32, 116, 104, 105, 115, 46, 116, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97,
                40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46,
                99, 97, 108, 108, 40, 98, 44, 32, 100, 44, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 58, 32,
                123, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 99, 111, 117,
                110, 116, 58, 32, 101, 46, 99, 111, 117, 110, 116, 44, 32, 72,
                97, 58, 32, 101, 46, 72, 97, 44, 32, 73, 97, 58, 32, 101, 46,
                73, 97, 44, 32, 118, 97, 58, 32, 101, 46, 118, 97, 44, 32, 119,
                97, 58, 32, 101, 46, 119, 97, 44, 32, 121, 97, 58, 32, 101, 46,
                121, 97, 44, 32, 65, 97, 58, 32, 101, 46, 65, 97, 32, 125, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 116, 97, 46, 99,
                111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32,
                49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 116,
                97, 46, 72, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 91, 34, 100, 101, 108, 101,
                116, 101, 34, 93, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 116, 97, 46, 118, 97,
                32, 124, 124, 32, 81, 97, 40, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 116, 97, 46, 72, 97, 32, 38, 38, 32, 33, 116,
                104, 105, 115, 46, 116, 97, 46, 73, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101,
                99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104,
                101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101,
                108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                97, 32, 61, 32, 116, 104, 105, 115, 46, 116, 97, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 97, 46, 99, 111, 117,
                110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 97, 46, 99, 111,
                117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40,
                97, 46, 121, 97, 32, 63, 32, 97, 46, 65, 97, 46, 68, 97, 40, 97,
                46, 121, 97, 41, 32, 58, 32, 97, 46, 119, 97, 46, 117, 97, 46,
                68, 97, 40, 97, 46, 118, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 116, 97, 46, 73, 97,
                32, 124, 124, 32, 40, 116, 104, 105, 115, 46, 116, 97, 46, 121,
                97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 116, 104,
                105, 115, 46, 116, 97, 46, 118, 97, 32, 61, 32, 118, 111, 105,
                100, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 68, 101, 108,
                101, 116, 101, 100, 58, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 33, 116, 104, 105, 115,
                46, 116, 97, 46, 118, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108,
                101, 116, 101, 76, 97, 116, 101, 114, 58, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 116, 97, 46, 118, 97,
                32, 124, 124, 32, 81, 97, 40, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 116, 97, 46, 72, 97, 32, 38, 38, 32, 33, 116,
                104, 105, 115, 46, 116, 97, 46, 73, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101,
                99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104,
                101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101,
                108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 89, 97, 46, 112, 117, 115, 104, 40, 116,
                104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 116, 97, 46, 72, 97, 32, 61, 32,
                116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101,
                99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 106, 98, 46, 112,
                114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 87, 97, 40, 97, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 82, 97,
                32, 38, 38, 32, 40, 97, 32, 61, 32, 116, 104, 105, 115, 46, 82,
                97, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                80, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 116, 104,
                105, 115, 46, 68, 97, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50,
                46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 44, 32, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 66, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70,
                114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46,
                76, 97, 32, 63, 32, 88, 97, 40, 116, 104, 105, 115, 46, 117, 97,
                46, 70, 97, 44, 32, 123, 32, 119, 97, 58, 32, 116, 104, 105,
                115, 46, 97, 98, 44, 32, 118, 97, 58, 32, 99, 44, 32, 65, 97,
                58, 32, 116, 104, 105, 115, 44, 32, 121, 97, 58, 32, 97, 32,
                125, 41, 32, 58, 32, 88, 97, 40, 116, 104, 105, 115, 46, 117,
                97, 46, 70, 97, 44, 32, 123, 32, 119, 97, 58, 32, 116, 104, 105,
                115, 44, 32, 118, 97, 58, 32, 97, 32, 125, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105,
                115, 46, 87, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 33, 99, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 116, 104, 105, 115, 46, 80, 97, 40, 97, 41,
                44, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 87, 97, 40, 116,
                104, 105, 115, 46, 117, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105,
                100, 32, 48, 32, 33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48,
                32, 61, 61, 61, 32, 100, 46, 116, 97, 46, 99, 111, 117, 110,
                116, 46, 118, 97, 108, 117, 101, 41, 32, 114, 101, 116, 117,
                114, 110, 32, 100, 46, 116, 97, 46, 118, 97, 32, 61, 32, 99, 44,
                32, 100, 46, 116, 97, 46, 121, 97, 32, 61, 32, 97, 44, 32, 100,
                46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108,
                111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 80, 97, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 32, 61, 32, 116, 104, 105, 115, 46, 117, 97, 46, 86, 97,
                40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100,
                32, 61, 32, 85, 97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104,
                105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 32, 61, 32, 116, 104, 105, 115, 46, 75, 97, 32, 63, 32,
                100, 46, 83, 97, 32, 58, 32, 100, 46, 112, 111, 105, 110, 116,
                101, 114, 84, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 84, 97, 40, 99,
                44, 32, 116, 104, 105, 115, 46, 117, 97, 44, 32, 100, 46, 117,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61,
                32, 101, 32, 63, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104,
                105, 115, 41, 32, 58, 32, 116, 104, 105, 115, 46, 76, 97, 32,
                63, 32, 88, 97, 40, 100, 46, 117, 97, 46, 70, 97, 44, 32, 123,
                32, 119, 97, 58, 32, 100, 44, 32, 118, 97, 58, 32, 101, 44, 32,
                65, 97, 58, 32, 116, 104, 105, 115, 44, 32, 121, 97, 58, 32, 97,
                32, 125, 41, 32, 58, 32, 88, 97, 40, 100, 46, 117, 97, 46, 70,
                97, 44, 32, 123, 32, 119, 97, 58, 32, 100, 44, 32, 118, 97, 58,
                32, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 110, 98, 32, 61, 32, 107, 46, 85, 110, 98, 111, 117,
                110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 32, 61, 32,
                40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 82, 40,
                98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109,
                101, 115, 115, 97, 103, 101, 32, 61, 32, 100, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 69, 114, 114,
                111, 114, 40, 100, 41, 46, 115, 116, 97, 99, 107, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48,
                32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 40, 116, 104, 105, 115,
                46, 115, 116, 97, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46,
                116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 43, 32, 34,
                92, 110, 34, 32, 43, 32, 100, 46, 114, 101, 112, 108, 97, 99,
                101, 40, 47, 94, 69, 114, 114, 111, 114, 40, 58, 91, 94, 92,
                110, 93, 42, 41, 63, 92, 110, 47, 44, 32, 34, 34, 41, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121,
                112, 101, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114,
                101, 97, 116, 101, 40, 97, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116,
                111, 116, 121, 112, 101, 46, 116, 111, 83, 116, 114, 105, 110,
                103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61,
                61, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103,
                101, 32, 63, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32,
                58, 32, 96, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101,
                125, 58, 32, 36, 123, 116, 104, 105, 115, 46, 109, 101, 115,
                115, 97, 103, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41,
                40, 69, 114, 114, 111, 114, 44, 32, 34, 85, 110, 98, 111, 117,
                110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 86, 46, 112, 117, 115, 104, 40, 48,
                44, 32, 49, 44, 32, 118, 111, 105, 100, 32, 48, 44, 32, 49, 44,
                32, 110, 117, 108, 108, 44, 32, 49, 44, 32, 116, 114, 117, 101,
                44, 32, 49, 44, 32, 102, 97, 108, 115, 101, 44, 32, 49, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 107, 46, 99, 111, 117, 110, 116, 95,
                101, 109, 118, 97, 108, 95, 104, 97, 110, 100, 108, 101, 115,
                32, 61, 32, 40, 41, 32, 61, 62, 32, 86, 46, 108, 101, 110, 103,
                116, 104, 32, 47, 32, 50, 32, 45, 32, 53, 32, 45, 32, 118, 98,
                46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 109, 99, 32, 61, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99,
                44, 32, 100, 41, 32, 61, 62, 32, 118, 97, 40, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 96, 65, 115, 115, 101, 114, 116,
                105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123,
                97, 32, 63, 32, 71, 97, 40, 97, 41, 32, 58, 32, 34, 34, 125, 44,
                32, 97, 116, 58, 32, 96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32,
                63, 32, 71, 97, 40, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34,
                117, 110, 107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110,
                97, 109, 101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32,
                63, 32, 71, 97, 40, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34,
                117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97, 44,
                32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 110,
                101, 119, 32, 72, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 68, 91, 100, 46, 118, 97, 32, 43, 32, 49,
                54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 118, 97, 32, 43,
                32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 118, 97, 32,
                43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 32, 61, 32, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 43, 43, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32, 40,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 58, 32, 40, 41,
                32, 61, 62, 32, 118, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                98, 32, 61, 32, 75, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 75, 97,
                91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 99, 32, 61, 32, 98, 46, 78, 97, 44, 32, 100, 32,
                61, 32, 98, 46, 68, 97, 44, 32, 101, 32, 61, 32, 98, 46, 81, 97,
                44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 104, 41,
                32, 61, 62, 32, 104, 46, 90, 97, 41, 46, 99, 111, 110, 99, 97,
                116, 40, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32,
                104, 46, 102, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 104,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102,
                111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 109, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 104, 91, 109, 93, 44,
                32, 113, 32, 61, 32, 108, 46, 88, 97, 44, 32, 114, 32, 61, 32,
                108, 46, 89, 97, 44, 32, 65, 32, 61, 32, 104, 91, 109, 32, 43,
                32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 117, 32,
                61, 32, 108, 46, 101, 98, 44, 32, 118, 32, 61, 32, 108, 46, 103,
                98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 103, 91, 108, 46, 85, 97, 93, 32, 61, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 97, 100, 58, 32, 40, 69, 41, 32, 61, 62, 32, 110, 46, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 113,
                40, 114, 44, 32, 69, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58,
                32, 40, 69, 44, 32, 99, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 66, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117,
                40, 118, 44, 32, 69, 44, 32, 65, 46, 116, 111, 87, 105, 114,
                101, 84, 121, 112, 101, 40, 66, 44, 32, 99, 97, 41, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 76, 97, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 109, 32, 61, 32, 123, 125, 44, 32, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32,
                109, 91, 110, 93, 32, 61, 32, 103, 91, 110, 93, 46, 114, 101,
                97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 105, 110, 32, 103,
                41, 32, 105, 102, 32, 40, 33, 40, 110, 32, 105, 110, 32, 109,
                41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115,
                115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36,
                123, 110, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                113, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 110, 32, 105, 110, 32, 103, 41, 32, 103, 91, 110, 93, 46,
                119, 114, 105, 116, 101, 40, 113, 44, 32, 109, 91, 110, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32,
                38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 113,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 113, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 66, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100,
                86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110,
                116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 100, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32,
                79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58,
                32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66,
                97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111,
                109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87,
                105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32,
                110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104,
                44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 113,
                44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 110, 32, 61, 32, 79, 40, 110, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40,
                101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 84, 40, 104,
                44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 32, 38, 38, 32, 40, 109, 32, 61, 32, 84, 40, 108, 44,
                32, 109, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 32, 61, 32, 84, 40, 113, 44, 32, 114, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 65, 32, 61,
                32, 98, 98, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 98, 40, 65, 44, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 113, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 110,
                125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111,
                117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100,
                93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97,
                44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100,
                93, 32, 58, 32, 91, 93, 44, 32, 40, 117, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 32, 61, 32, 117, 91, 48, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 117, 46, 117,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 69, 32, 61, 32, 118, 46, 70, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 69, 32, 61, 32, 90, 97, 46, 112, 114, 111,
                116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 117, 32, 61, 32, 82, 40, 110, 44, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 79, 97,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 103,
                101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102,
                40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 99, 97, 41, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 85,
                115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32, 110, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61,
                32, 66, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 80, 40, 110, 32, 43, 32, 34, 32, 104, 97, 115, 32,
                110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 119, 98, 32, 61, 32, 66, 46, 69, 97, 91, 79, 97,
                46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118,
                111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 119, 98, 41, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105, 110, 118,
                111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102, 32, 36, 123,
                110, 125, 32, 119, 105, 116, 104, 32, 105, 110, 118, 97, 108,
                105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32,
                112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123,
                79, 97, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32,
                101, 120, 112, 101, 99, 116, 101, 100, 32, 40, 36, 123, 79, 98,
                106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 66, 46, 69, 97,
                41, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 125, 41,
                32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 105,
                110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 119, 98, 46, 97, 112, 112, 108, 121, 40, 116, 104,
                105, 115, 44, 32, 79, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 97, 32, 61, 32,
                79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40,
                69, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 117,
                32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 46, 112, 114, 111, 116, 111, 116, 121, 112,
                101, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61, 32, 110, 101, 119,
                32, 99, 98, 40, 110, 44, 32, 117, 44, 32, 99, 97, 44, 32, 114,
                44, 32, 118, 44, 32, 102, 44, 32, 103, 44, 32, 109, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 66, 46, 122, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
                95, 97, 50, 32, 61, 32, 40, 100, 97, 32, 61, 32, 66, 46, 122,
                97, 41, 46, 79, 97, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 97, 50, 32, 58, 32, 100, 97, 46, 79, 97, 32, 61, 32,
                91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 66, 46, 122, 97, 46, 79, 97, 46, 112, 117, 115, 104, 40,
                66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                32, 61, 32, 110, 101, 119, 32, 106, 98, 40, 110, 44, 32, 66, 44,
                32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32,
                102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 100, 97, 32, 61, 32, 110, 101, 119, 32, 106,
                98, 40, 110, 32, 43, 32, 34, 42, 34, 44, 32, 66, 44, 32, 102,
                97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102,
                97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 69, 32, 61, 32, 110, 101, 119, 32, 106, 98, 40,
                110, 32, 43, 32, 34, 32, 99, 111, 110, 115, 116, 42, 34, 44, 32,
                66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101,
                44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 85, 97, 91, 97, 93, 32, 61, 32, 123,
                32, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 58,
                32, 100, 97, 44, 32, 83, 97, 58, 32, 69, 32, 125, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 98, 40, 65, 44,
                32, 117, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 91, 118, 44, 32, 100, 97,
                44, 32, 69, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 113, 58, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 104, 32, 61, 32, 114, 98, 40, 98, 44, 32, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32,
                84, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40,
                103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 91, 48, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 108, 32, 61, 32, 96, 99, 111, 110, 115, 116, 114, 117, 99,
                116, 111, 114, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 96,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 103, 46, 117, 97, 46,
                69, 97, 32, 38, 38, 32, 40, 103, 46, 117, 97, 46, 69, 97, 32,
                61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32,
                33, 61, 61, 32, 103, 46, 117, 97, 46, 69, 97, 91, 98, 32, 45,
                32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80,
                40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105,
                115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101,
                32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115,
                32, 119, 105, 116, 104, 32, 105, 100, 101, 110, 116, 105, 99,
                97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112,
                97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 98,
                32, 45, 32, 49, 125, 41, 32, 102, 111, 114, 32, 99, 108, 97,
                115, 115, 32, 39, 36, 123, 103, 46, 110, 97, 109, 101, 125, 39,
                33, 32, 79, 118, 101, 114, 108, 111, 97, 100, 32, 114, 101, 115,
                111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 32, 99, 117,
                114, 114, 101, 110, 116, 108, 121, 32, 111, 110, 108, 121, 32,
                112, 101, 114, 102, 111, 114, 109, 101, 100, 32, 117, 115, 105,
                110, 103, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101,
                116, 101, 114, 32, 99, 111, 117, 110, 116, 44, 32, 110, 111,
                116, 32, 97, 99, 116, 117, 97, 108, 32, 116, 121, 112, 101, 32,
                105, 110, 102, 111, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 103, 46, 117, 97, 46, 69, 97, 91, 98, 32,
                45, 32, 49, 93, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 98, 40,
                96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114,
                117, 99, 116, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 32,
                100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110,
                100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44,
                32, 104, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 46, 115,
                112, 108, 105, 99, 101, 40, 49, 44, 32, 48, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 103, 46, 117, 97, 46, 69, 97, 91, 98, 32, 45,
                32, 49, 93, 32, 61, 32, 116, 98, 40, 108, 44, 32, 109, 44, 32,
                110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91,
                93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 108, 32, 61, 32, 114, 98, 40, 99, 44, 32, 100,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61,
                32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 98, 32, 61, 32, 117, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32,
                102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40,
                91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 109, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 32, 110, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 98,
                40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32,
                36, 123, 113, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117,
                110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96,
                44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 32, 61, 32, 109, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 32, 61, 32,
                96, 36, 123, 109, 46, 110, 97, 109, 101, 125, 46, 36, 123, 98,
                125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34,
                64, 64, 34, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121,
                109, 98, 111, 108, 91, 98, 46, 115, 117, 98, 115, 116, 114, 105,
                110, 103, 40, 50, 41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 109, 46, 117, 97,
                46, 98, 98, 46, 112, 117, 115, 104, 40, 98, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114,
                32, 61, 32, 109, 46, 117, 97, 46, 70, 97, 44, 32, 65, 32, 61,
                32, 114, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65,
                32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61,
                32, 65, 46, 120, 97, 32, 38, 38, 32, 65, 46, 99, 108, 97, 115,
                115, 78, 97, 109, 101, 32, 33, 61, 61, 32, 109, 46, 110, 97,
                109, 101, 32, 38, 38, 32, 65, 46, 71, 97, 32, 61, 61, 61, 32,
                99, 32, 45, 32, 50, 32, 63, 32, 40, 110, 46, 71, 97, 32, 61, 32,
                99, 32, 45, 32, 50, 44, 32, 110, 46, 99, 108, 97, 115, 115, 78,
                97, 109, 101, 32, 61, 32, 109, 46, 110, 97, 109, 101, 44, 32,
                114, 91, 98, 93, 32, 61, 32, 110, 41, 32, 58, 32, 40, 36, 97,
                40, 114, 44, 32, 98, 44, 32, 113, 41, 44, 32, 114, 91, 98, 93,
                46, 120, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 110, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40,
                91, 93, 44, 32, 108, 44, 32, 40, 117, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117,
                32, 61, 32, 116, 98, 40, 113, 44, 32, 117, 44, 32, 109, 44, 32,
                102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61,
                61, 32, 114, 91, 98, 93, 46, 120, 97, 32, 63, 32, 40, 117, 46,
                71, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 114, 91, 98, 93,
                32, 61, 32, 117, 41, 32, 58, 32, 114, 91, 98, 93, 46, 120, 97,
                91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 117, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 85, 58, 32, 40, 97, 41, 32, 61, 62, 32, 77, 40, 97, 44,
                32, 122, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120,
                58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 32, 101, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 118, 97, 108,
                117, 101, 115, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 101, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111,
                109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 102, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115,
                116, 114, 117, 99, 116, 111, 114, 46, 118, 97, 108, 117, 101,
                115, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 102, 44, 32, 104, 41, 32, 61, 62, 32, 104, 46, 118, 97, 108,
                117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 66, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70,
                114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 65, 98,
                40, 98, 44, 32, 99, 44, 32, 100, 41, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 110, 117, 108, 108,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 98, 40, 98, 44, 32, 101,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 107, 58, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 66, 98, 40, 97, 44,
                32, 34, 101, 110, 117, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 100, 46, 99,
                111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 79, 98, 106,
                101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 100, 46, 99,
                111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 112, 114,
                111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 108, 117, 101, 58,
                32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32,
                118, 97, 108, 117, 101, 58, 32, 82, 40, 96, 36, 123, 100, 46,
                110, 97, 109, 101, 125, 95, 36, 123, 98, 125, 96, 44, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 118, 97, 108, 117, 101,
                115, 91, 99, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 122, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32,
                61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109,
                87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 41, 32,
                61, 62, 32, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 58, 32, 56, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105,
                110, 116, 101, 114, 58, 32, 67, 98, 40, 98, 44, 32, 99, 41, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58,
                32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 58, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 104, 32, 61, 32, 114, 98, 40, 98, 44, 32, 99,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61,
                32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 32, 61, 32, 117, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 98,
                40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 98, 40, 96, 67,
                97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 97,
                125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111,
                117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45,
                32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32,
                104, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 98, 40, 97, 44, 32,
                116, 98, 40, 97, 44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117,
                108, 108, 93, 46, 99, 111, 110, 99, 97, 116, 40, 103, 46, 115,
                108, 105, 99, 101, 40, 49, 41, 41, 44, 32, 110, 117, 108, 108,
                44, 32, 101, 44, 32, 102, 41, 44, 32, 98, 32, 45, 32, 49, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 45, 49, 32, 61, 61, 61, 32, 101, 32, 38, 38, 32,
                40, 101, 32, 61, 32, 52, 50, 57, 52, 57, 54, 55, 50, 57, 53, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32,
                40, 103, 41, 32, 61, 62, 32, 103, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 51, 50, 32, 45, 32,
                56, 32, 42, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103,
                32, 60, 60, 32, 102, 32, 62, 62, 62, 32, 102, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 98, 46, 105,
                110, 99, 108, 117, 100, 101, 115, 40, 34, 117, 110, 115, 105,
                103, 110, 101, 100, 34, 41, 32, 63, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 108, 32, 62, 62, 62, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97,
                44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                101, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58,
                32, 104, 44, 32, 66, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100,
                86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110,
                116, 101, 114, 58, 32, 68, 98, 40, 98, 44, 32, 99, 44, 32, 48,
                32, 33, 61, 61, 32, 100, 41, 44, 32, 67, 97, 58, 32, 110, 117,
                108, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 58, 32, 40,
                97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 100, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                110, 101, 119, 32, 101, 40, 119, 46, 98, 117, 102, 102, 101,
                114, 44, 32, 68, 91, 102, 32, 43, 32, 52, 32, 62, 62, 32, 50,
                93, 44, 32, 68, 91, 102, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 91, 73,
                110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116,
                56, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 49, 54, 65,
                114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 49, 54, 65, 114,
                114, 97, 121, 44, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97,
                121, 44, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121,
                44, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121,
                44, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121,
                93, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101,
                58, 32, 99, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84,
                121, 112, 101, 58, 32, 100, 44, 32, 66, 97, 58, 32, 56, 44, 32,
                114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80,
                111, 105, 110, 116, 101, 114, 58, 32, 100, 32, 125, 44, 32, 123,
                32, 36, 97, 58, 32, 116, 114, 117, 101, 32, 125, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 69, 98,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32,
                103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 113, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 84,
                40, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 32, 61, 32, 84, 40, 108, 44, 32, 109, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 32, 61, 32, 84,
                40, 110, 44, 32, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 91, 98, 93, 44, 32, 40,
                114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 32, 61, 32, 114, 91, 48, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 91, 110, 101, 119, 32, 106, 98, 40, 99, 44,
                32, 114, 46, 117, 97, 44, 32, 102, 97, 108, 115, 101, 44, 32,
                102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 114,
                44, 32, 100, 44, 32, 102, 44, 32, 103, 44, 32, 109, 44, 32, 113,
                41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 65, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32,
                61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 34, 115, 116, 100, 58,
                58, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 61, 32, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101,
                84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 68,
                91, 100, 32, 62, 62, 32, 50, 93, 44, 32, 102, 32, 61, 32, 100,
                32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 99, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 118, 97, 114, 32, 104, 32, 61, 32, 102, 44, 32, 103, 32,
                61, 32, 48, 59, 32, 103, 32, 60, 61, 32, 101, 59, 32, 43, 43,
                103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61,
                32, 102, 32, 43, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                103, 32, 61, 61, 32, 101, 32, 124, 124, 32, 48, 32, 61, 61, 32,
                120, 91, 108, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61,
                32, 104, 32, 63, 32, 71, 97, 40, 104, 44, 32, 108, 32, 45, 32,
                104, 41, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 109, 41,
                32, 118, 97, 114, 32, 109, 32, 61, 32, 104, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 101, 108, 115, 101, 32, 109, 32, 43, 61, 32, 83, 116, 114,
                105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67,
                111, 100, 101, 40, 48, 41, 44, 32, 109, 32, 43, 61, 32, 104, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 104, 32, 61, 32, 108, 32, 43, 32, 49, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61,
                32, 65, 114, 114, 97, 121, 40, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 59,
                32, 43, 43, 103, 41, 32, 109, 91, 103, 93, 32, 61, 32, 83, 116,
                114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114,
                67, 111, 100, 101, 40, 120, 91, 102, 32, 43, 32, 103, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 109, 32, 61, 32, 109, 46, 106, 111, 105, 110, 40, 34,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 85, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111,
                87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 40, 100, 44, 32, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114,
                114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 38, 38, 32, 40,
                101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65,
                114, 114, 97, 121, 40, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 44,
                32, 104, 32, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 32,
                61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 101, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 40, 104, 32, 124, 124, 32, 101, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 65,
                114, 114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 67,
                108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 32, 124,
                124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 41, 41, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 67,
                97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111,
                110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 115,
                116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 118, 97, 114, 32, 103, 32, 61, 32, 102, 32, 61, 32, 48,
                59, 32, 103, 32, 60, 32, 101, 46, 108, 101, 110, 103, 116, 104,
                59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 108, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100,
                101, 65, 116, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55, 32, 62,
                61, 32, 108, 32, 63, 32, 102, 43, 43, 32, 58, 32, 50, 48, 52,
                55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 32, 43, 61, 32, 50,
                32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 108, 32, 38, 38,
                32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 108, 32, 63, 32, 40,
                102, 32, 43, 61, 32, 52, 44, 32, 43, 43, 103, 41, 32, 58, 32,
                102, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 32,
                61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32,
                98, 99, 40, 52, 32, 43, 32, 102, 32, 43, 32, 49, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 32, 61,
                32, 103, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 68, 91, 103, 32, 62, 62, 32, 50, 93, 32,
                61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 32,
                72, 40, 101, 44, 32, 108, 44, 32, 102, 32, 43, 32, 49, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                108, 115, 101, 32, 105, 102, 32, 40, 104, 41, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111,
                114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102,
                59, 32, 43, 43, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 109, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100,
                101, 65, 116, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                50, 53, 53, 32, 60, 32, 109, 41, 32, 116, 104, 114, 111, 119,
                32, 85, 40, 108, 41, 44, 32, 110, 101, 119, 32, 80, 40, 34, 83,
                116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70, 45,
                49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115, 32,
                116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102,
                105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32,
                109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 104,
                32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43,
                104, 41, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 101,
                91, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 100, 32, 38,
                38, 32, 100, 46, 112, 117, 115, 104, 40, 85, 44, 32, 103, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 66, 97, 58, 32, 56, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86,
                97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116,
                101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 67, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32,
                79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 100, 32, 61, 32, 71, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 72, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 73, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32,
                40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49,
                93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32,
                101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38,
                32, 40, 100, 32, 61, 32, 74, 98, 44, 32, 101, 32, 61, 32, 75,
                98, 44, 32, 102, 32, 61, 32, 76, 98, 44, 32, 104, 32, 61, 32,
                40, 103, 41, 32, 61, 62, 32, 68, 91, 103, 32, 62, 62, 32, 50,
                93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40,
                97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114,
                101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 68,
                91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 109, 44, 32, 110, 32,
                61, 32, 103, 32, 43, 32, 52, 44, 32, 113, 32, 61, 32, 48, 59,
                32, 113, 32, 60, 61, 32, 108, 59, 32, 43, 43, 113, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32,
                43, 32, 113, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 32,
                61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 104, 40,
                114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 100, 40, 110, 44, 32,
                114, 32, 45, 32, 110, 41, 44, 32, 118, 111, 105, 100, 32, 48,
                32, 61, 61, 61, 32, 109, 32, 63, 32, 109, 32, 61, 32, 110, 32,
                58, 32, 40, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103,
                46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                48, 41, 44, 32, 109, 32, 43, 61, 32, 110, 41, 44, 32, 110, 32,
                61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121,
                112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116,
                32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114,
                105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114,
                105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 109, 32, 61, 32, 102, 40, 108, 41, 44, 32,
                110, 32, 61, 32, 98, 99, 40, 52, 32, 43, 32, 109, 32, 43, 32,
                98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 68, 91, 110, 32, 62, 62, 32, 50, 93, 32, 61, 32, 109,
                32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 40, 108, 44, 32, 110, 32, 43, 32, 52, 44,
                32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61,
                32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 85,
                44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 58, 32, 56,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111,
                105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 67, 97, 40, 103, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40,
                103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 119, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 91, 97, 93, 32,
                61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 79, 40, 98, 41, 44,
                32, 78, 97, 58, 32, 84, 40, 99, 44, 32, 100, 41, 44, 32, 68, 97,
                58, 32, 84, 40, 101, 44, 32, 102, 41, 44, 32, 81, 97, 58, 32,
                91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44,
                32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 91,
                97, 93, 46, 81, 97, 46, 112, 117, 115, 104, 40, 123, 32, 85, 97,
                58, 32, 79, 40, 98, 41, 44, 32, 90, 97, 58, 32, 99, 44, 32, 88,
                97, 58, 32, 84, 40, 100, 44, 32, 101, 41, 44, 32, 89, 97, 58,
                32, 102, 44, 32, 102, 98, 58, 32, 104, 44, 32, 101, 98, 58, 32,
                84, 40, 103, 44, 32, 108, 41, 44, 32, 103, 98, 58, 32, 109, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 105, 98, 58,
                32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98,
                44, 32, 66, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69,
                97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 77, 98, 32, 61, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 68, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110,
                102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32,
                78, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 98, 32, 61, 32, 121, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97,
                40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 66, 58, 32, 120, 98, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 89, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 80, 98, 40, 97, 44, 32, 98,
                41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45,
                45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96,
                109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60,
                40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62,
                32, 104, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40,
                34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46,
                110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 79, 98, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 40, 98,
                44, 32, 40, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110, 32,
                61, 32, 48, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32, 60,
                32, 97, 59, 32, 43, 43, 113, 41, 32, 102, 91, 113, 93, 32, 61,
                32, 100, 91, 113, 93, 46, 114, 101, 97, 100, 86, 97, 108, 117,
                101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40,
                109, 32, 43, 32, 110, 41, 44, 32, 110, 32, 43, 61, 32, 100, 91,
                113, 93, 46, 66, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 103, 32, 61, 32, 49, 32, 61, 61, 61, 32, 99,
                32, 63, 32, 81, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32, 103,
                46, 97, 112, 112, 108, 121, 40, 104, 44, 32, 102, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32,
                61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 103, 32, 61, 32, 101, 46, 116, 111, 87, 105,
                114, 101, 84, 121, 112, 101, 40, 104, 44, 32, 103, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46,
                108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 68, 91, 108,
                32, 62, 62, 32, 50, 93, 32, 61, 32, 104, 98, 40, 104, 41, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 40, 97,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 86, 91, 97, 32, 43,
                32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88, 58,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 121, 98, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97,
                40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120,
                98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32,
                98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 32, 61, 32, 66, 98, 40, 97, 44, 32, 34, 95, 101,
                109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117,
                101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101,
                70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 104, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69,
                58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 91, 97, 93, 32, 38, 38,
                32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116,
                40, 82, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108,
                101, 116, 101, 32, 82, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32,
                114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115,
                101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 101, 108, 101, 116, 101, 32, 82, 98, 91, 97, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 98, 40, 40,
                41, 32, 61, 62, 32, 99, 99, 40, 97, 44, 32, 112, 101, 114, 102,
                111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98,
                91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32,
                106, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 70, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32,
                100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32,
                64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101,
                119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70,
                117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61,
                32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48,
                44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111,
                110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119,
                32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46,
                103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102,
                102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54,
                48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44,
                32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98,
                101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 104, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98,
                115, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67,
                36, 123, 48, 32, 60, 61, 32, 104, 32, 63, 32, 34, 45, 34, 32,
                58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103,
                40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32,
                47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116,
                40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105,
                110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83,
                116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102,
                32, 63, 32, 40, 72, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44,
                32, 72, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32,
                40, 72, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 72, 40,
                98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111,
                114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 40, 97, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116,
                104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62,
                62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56,
                32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102,
                97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49,
                59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32,
                43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116,
                104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48,
                48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97,
                116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54,
                52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116,
                104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97,
                120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54,
                41, 41, 32, 45, 32, 107, 97, 46, 98, 117, 102, 102, 101, 114,
                46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32,
                54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124,
                32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 97, 46, 103, 114, 111,
                119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107,
                32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115,
                101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 83, 58, 32, 40, 97, 44, 32, 98, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 88, 98, 40, 41, 46, 102, 111, 114, 69,
                97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 68, 91,
                97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32,
                61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32,
                60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43,
                102, 41, 32, 119, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99,
                104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 91, 101,
                93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103,
                116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                84, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32,
                61, 32, 88, 98, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46,
                108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114,
                69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43,
                61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 98,
                32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 80, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 58, 32, 40, 41, 32,
                61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                58, 32, 100, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100,
                58, 32, 101, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                58, 32, 102, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112,
                58, 32, 103, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121,
                58, 32, 104, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 58,
                32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32,
                106, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 58, 32,
                107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 58, 32,
                108, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 84,
                98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 58, 32, 40, 97,
                44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 90, 98, 40, 120, 46, 115, 117, 98, 97, 114, 114,
                97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98, 41, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 32, 61, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 32, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 51, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 99, 46, 101,
                120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 107, 97, 32, 61, 32, 87, 46, 98, 97, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 32, 61, 32, 87, 46, 102,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 46,
                117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 99, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 45, 45, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 51, 32, 61,
                32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110,
                68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 51, 46, 99, 97, 108, 108, 40,
                107, 44, 32, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 48, 32, 61, 61, 32, 70, 32, 38, 38, 32, 40, 110, 117, 108,
                108, 32, 33, 61, 61, 32, 117, 97, 32, 38, 38, 32, 40, 99, 108,
                101, 97, 114, 73, 110, 116, 101, 114, 118, 97, 108, 40, 117, 97,
                41, 44, 32, 117, 97, 32, 61, 32, 110, 117, 108, 108, 41, 44, 32,
                71, 32, 38, 38, 32, 40, 99, 32, 61, 32, 71, 44, 32, 71, 32, 61,
                32, 110, 117, 108, 108, 44, 32, 99, 40, 41, 41, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 70, 43, 43, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 109,
                111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101,
                110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 70, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98,
                32, 61, 32, 123, 32, 97, 58, 32, 109, 99, 32, 125, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 105, 110,
                115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 107, 46, 105, 110, 115, 116, 97,
                110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98, 44, 32,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32,
                99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77, 111, 100,
                117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97,
                116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98, 97, 99,
                107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116, 104,
                32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 99, 125, 96, 41,
                44, 32, 98, 97, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 97,
                32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 120, 97, 32, 58,
                32, 120, 97, 32, 61, 32, 119, 97, 40, 34, 68, 111, 116, 76, 111,
                116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97,
                115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115,
                109, 34, 32, 58, 32, 107, 46, 108, 111, 99, 97, 116, 101, 70,
                105, 108, 101, 32, 63, 32, 107, 46, 108, 111, 99, 97, 116, 101,
                70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 44,
                32, 112, 41, 32, 58, 32, 112, 32, 43, 32, 34, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119,
                97, 115, 109, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66,
                97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40,
                99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99,
                104, 40, 98, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 40, 41, 44, 32, 98, 99, 32, 61, 32, 40, 97, 41,
                32, 61, 62, 32, 40, 98, 99, 32, 61, 32, 87, 46, 100, 97, 41, 40,
                97, 41, 44, 32, 111, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32,
                40, 111, 98, 32, 61, 32, 87, 46, 101, 97, 41, 40, 97, 41, 44,
                32, 85, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 85, 32, 61,
                32, 87, 46, 103, 97, 41, 40, 97, 41, 44, 32, 99, 99, 32, 61, 32,
                40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 99, 99, 32, 61, 32,
                87, 46, 104, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 88, 32, 61,
                32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88, 32, 61, 32,
                87, 46, 105, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 89, 32, 61,
                32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32, 87, 46, 106,
                97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41, 32, 61, 62,
                32, 40, 90, 32, 61, 32, 87, 46, 107, 97, 41, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108,
                95, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32,
                40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 106,
                106, 32, 61, 32, 87, 46, 108, 97, 41, 40, 97, 44, 32, 98, 44,
                32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108,
                95, 118, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32,
                40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106,
                106, 32, 61, 32, 87, 46, 109, 97, 41, 40, 97, 44, 32, 98, 44,
                32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108,
                95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110,
                67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 87, 46,
                110, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97,
                108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44,
                32, 99, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97,
                108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 111, 97, 41,
                40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105,
                106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62,
                32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105,
                105, 106, 105, 105, 32, 61, 32, 87, 46, 112, 97, 41, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44,
                32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121,
                110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101,
                44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32, 40, 107, 46, 100,
                121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106,
                32, 61, 32, 87, 46, 113, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99,
                44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108,
                108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97,
                44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102,
                44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 32, 61, 62, 32, 40,
                107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105,
                105, 105, 106, 106, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44,
                32, 104, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105,
                105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104,
                44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 40,
                107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105,
                105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 115, 97, 41, 40,
                97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32,
                102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 32, 106, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32,
                61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99,
                104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32,
                43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 105, 99, 40, 97, 44, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32,
                48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 102, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83,
                46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97,
                116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32,
                102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44,
                32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 101, 99, 40, 97, 44, 32, 98,
                44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99,
                104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32,
                43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 100, 99, 40, 97, 44, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40,
                97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33,
                61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111,
                119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 99, 40,
                97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32,
                102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46,
                103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44,
                32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103,
                32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114,
                111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 108, 99,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99,
                44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104,
                114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107,
                99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32,
                61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32,
                100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99,
                97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61,
                32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32,
                102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49,
                44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 32, 104, 99, 40, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40,
                99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89,
                40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32,
                116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 99, 59, 10, 32,
                32, 32, 32, 32, 32, 71, 32, 61, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 111, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 99, 32, 124, 124, 32, 112, 99, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 110, 99, 32, 124, 124, 32, 40,
                71, 32, 61, 32, 111, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 112, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 110, 99, 32, 38, 38, 32,
                40, 110, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 107, 46,
                99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114,
                117, 101, 44, 32, 33, 108, 97, 41, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 40, 114, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40,
                107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 82, 117, 110,
                116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122,
                101, 100, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97,
                108, 108, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 111, 115, 116,
                82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99,
                116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111,
                102, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38,
                32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32,
                91, 107, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32,
                107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110,
                103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98,
                32, 61, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115,
                104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 97, 46, 117, 110, 115,
                104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 68, 97, 40, 115, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 40, 48, 32, 60, 32, 70, 41, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114,
                101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117,
                110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112,
                101, 111, 102, 32, 107, 46, 112, 114, 101, 82, 117, 110, 32, 38,
                38, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32,
                91, 107, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 107,
                46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116,
                104, 59, 32, 41, 32, 116, 97, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 68, 97, 40, 113, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 70, 32, 124,
                124, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115,
                32, 63, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117,
                115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34,
                41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40,
                40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116,
                40, 40, 41, 32, 61, 62, 32, 107, 46, 115, 101, 116, 83, 116, 97,
                116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32,
                58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32,
                116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 73,
                110, 105, 116, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 73,
                110, 105, 116, 32, 61, 32, 91, 107, 46, 112, 114, 101, 73, 110,
                105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 107, 46, 112, 114,
                101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59,
                32, 41, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112,
                111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 112,
                99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117,
                108, 101, 82, 116, 110, 32, 61, 32, 101, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100,
                117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59,
                10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32,
                100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97,
                121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32,
                99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108,
                101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111,
                114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45,
                119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116,
                115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32,
                61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110,
                100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105,
                115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97,
                115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32,
                98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116,
                101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 116, 114, 121, 76,
                111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115,
                121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108,
                108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 121,
                105, 101, 108, 100, 32, 100, 111, 116, 108, 111, 116, 116, 105,
                101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97,
                117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105,
                108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114,
                105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116,
                104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101,
                32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105,
                109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108,
                105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32,
                98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32,
                110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32,
                32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32,
                101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104,
                32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32,
                108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117,
                108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116,
                117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60,
                77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114,
                111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101,
                115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101,
                32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108,
                101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32,
                115, 116, 97, 116, 105, 99, 32, 95, 108, 111, 97, 100, 87, 105,
                116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95,
                97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117,
                108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108,
                101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77,
                111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97,
                100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82,
                76, 41, 46, 99, 97, 116, 99, 104, 40, 40, 105, 110, 105, 116,
                105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 95,
                95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110,
                117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117,
                112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58,
                47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123,
                80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36,
                123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78,
                125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116,
                116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97,
                115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110,
                40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32,
                108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102,
                114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97,
                115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58,
                32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114,
                111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116,
                116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108,
                111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32,
                98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98,
                97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 121, 105, 101, 108, 100, 32,
                116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40,
                98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99,
                104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114,
                111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65,
                83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32,
                36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111,
                114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96,
                66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76,
                32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99,
                107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115,
                97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77,
                32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108,
                101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115,
                111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117,
                108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98,
                108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111,
                32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65,
                115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108,
                101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105,
                122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32,
                97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32,
                102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115,
                115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117,
                114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77,
                111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111,
                109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115,
                111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32,
                108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101,
                46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32,
                110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46,
                95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117,
                112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32,
                32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101,
                119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32,
                87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32,
                105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116,
                104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111,
                100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46,
                10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64,
                112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45,
                32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32,
                102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102,
                105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97,
                115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61,
                61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82,
                76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85,
                82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80,
                114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32,
                47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97,
                98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101,
                32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45,
                101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103,
                45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76,
                111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108,
                101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102,
                111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105,
                108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97,
                103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111,
                110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105,
                101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95,
                119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116,
                112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108,
                105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36,
                123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64,
                36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79,
                78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111,
                116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119,
                97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114,
                99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101,
                114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108,
                97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105,
                101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34,
                44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42,
                47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101,
                110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121,
                112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82,
                69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108,
                105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116,
                121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116,
                121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32,
                114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40,
                108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101,
                110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32,
                48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116,
                101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101,
                110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116,
                121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97,
                116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115,
                116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116,
                46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 102, 111,
                114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101,
                114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108,
                108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101,
                114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32,
                47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101,
                101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116,
                115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114,
                101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32,
                99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116,
                97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105,
                122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99,
                116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67,
                97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116,
                114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111,
                114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114,
                118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103,
                101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103,
                101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110,
                116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101,
                101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111,
                110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116,
                101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101,
                114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101,
                115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40,
                99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110,
                105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114,
                118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115,
                40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118,
                97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97,
                115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73,
                110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114,
                118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98,
                115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100,
                67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32,
                61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98,
                46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117,
                108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98,
                108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44,
                32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32,
                110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98,
                108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44,
                32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110,
                118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80,
                85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97,
                112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99,
                47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114,
                118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82,
                69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84,
                73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97,
                114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101,
                79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97,
                115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105,
                99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79,
                98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100,
                108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101,
                115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69,
                97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101,
                116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32,
                116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108,
                101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116,
                40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110,
                101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115,
                101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116,
                97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69,
                83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73,
                77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100,
                67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101,
                110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116,
                97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111,
                117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122,
                101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115,
                105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99,
                32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97,
                115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73,
                110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97,
                108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97,
                110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110,
                118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32,
                91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115,
                116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97,
                110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115,
                101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32,
                95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101,
                114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111,
                98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111,
                98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115,
                101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110,
                118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105,
                122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101,
                99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114,
                32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98,
                115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101,
                114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10,
                32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108,
                100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101,
                79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95,
                32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59,
                10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105,
                108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114,
                40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100,
                97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102,
                93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116,
                40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83,
                116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116,
                40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32,
                32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67,
                111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120,
                41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108,
                111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40,
                34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104,
                101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103,
                116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104,
                101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114,
                115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41,
                59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10,
                32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97,
                116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32,
                60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101,
                32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114,
                114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115,
                108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71,
                78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110,
                103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32,
                60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46,
                108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90,
                73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32,
                33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116,
                117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115,
                101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105,
                101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84,
                84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79,
                82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121,
                40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98,
                106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112,
                101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101,
                114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44,
                32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10,
                32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76,
                111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116,
                97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121,
                112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32,
                61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74,
                83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101,
                68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115,
                76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108,
                101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41,
                32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70,
                65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109,
                101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116,
                40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61,
                32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66,
                111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116,
                82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62,
                61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 108, 101,
                102, 116, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116,
                46, 98, 111, 116, 116, 111, 109, 32, 60, 61, 32, 40, 119, 105,
                110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105,
                103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101,
                110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108,
                101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72,
                101, 105, 103, 104, 116, 41, 32, 38, 38, 32, 114, 101, 99, 116,
                46, 114, 105, 103, 104, 116, 32, 60, 61, 32, 40, 119, 105, 110,
                100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116,
                104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116,
                46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109,
                101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100,
                116, 104, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32,
                115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101,
                46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40,
                109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114,
                115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77,
                111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40,
                109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110,
                99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77,
                111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114,
                115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109,
                111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101,
                118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100,
                117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97,
                114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10,
                32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111,
                114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32,
                109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32,
                34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111,
                100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97,
                105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99,
                111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101,
                46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102,
                105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70,
                105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32,
                34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105,
                116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125,
                32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32,
                61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104,
                34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116,
                46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32,
                32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117,
                108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114,
                32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105,
                103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109,
                111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108,
                105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100,
                117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97,
                116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108,
                105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40,
                97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32,
                99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115,
                104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49,
                93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32,
                125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116,
                101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32,
                61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111,
                100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103,
                109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111,
                100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108,
                111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40,
                115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116,
                104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116,
                59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109,
                101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40,
                115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32,
                32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110,
                116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101,
                103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101,
                103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32,
                118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110,
                102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108,
                105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32,
                34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117,
                98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105,
                115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117,
                98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105,
                115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97,
                103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105,
                99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34,
                95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103,
                34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95,
                95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101,
                110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101,
                108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99,
                107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34,
                44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116,
                101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70,
                105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112,
                111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116,
                104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101,
                114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99,
                70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95,
                112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77,
                101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116,
                101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 34,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                44, 32, 95, 98, 44, 32, 95, 99, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61,
                32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115,
                59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111,
                110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32,
                61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111,
                110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32,
                61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112,
                115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117,
                101, 115, 40, 123, 125, 44, 32, 99, 111, 110, 102, 105, 103, 46,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41,
                44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58,
                32, 40, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 118, 105, 99,
                101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 41, 32, 124,
                124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80,
                82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32,
                102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32,
                98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32,
                112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99,
                101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114,
                105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32,
                99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115,
                99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114,
                101, 101, 110, 58, 32, 40, 95, 99, 32, 61, 32, 40, 95, 98, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 98, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102,
                102, 115, 99, 114, 101, 101, 110, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 116, 114, 117, 101,
                10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109,
                76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46,
                116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 50, 44, 32, 95, 99, 50,
                44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95,
                103, 44, 32, 95, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111,
                100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111,
                100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58,
                32, 40, 95, 97, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112,
                108, 97, 121, 58, 32, 40, 95, 98, 50, 32, 61, 32, 99, 111, 110,
                102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32,
                33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 50, 32, 58,
                32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67,
                111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 58, 32, 40, 95, 99, 50, 32, 61, 32, 99, 111, 110,
                102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 95, 99, 50, 32, 58, 32, 102, 97, 108,
                115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114,
                101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111,
                110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102,
                111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117,
                108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116,
                40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 109,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101,
                100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95,
                102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101,
                114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103,
                32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70,
                114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97,
                116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58,
                32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58,
                32, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117,
                116, 32, 63, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 99,
                111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 46,
                97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101,
                70, 105, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121,
                111, 117, 116, 46, 102, 105, 116, 44, 32, 109, 111, 100, 117,
                108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 58, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97,
                116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111,
                117, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99,
                111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40,
                99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83,
                114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103,
                46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108,
                111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111,
                110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46,
                99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58,
                32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114,
                58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70,
                97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32,
                119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36,
                123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104,
                111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68,
                111, 119, 110, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101,
                114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104,
                105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77,
                111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77,
                101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101,
                114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111,
                105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104,
                111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98,
                105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116,
                99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97,
                103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101,
                115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69,
                114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115,
                115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97,
                40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40,
                116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114,
                101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 121, 105, 101,
                108, 100, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114,
                101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70,
                97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99,
                104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97,
                116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36,
                123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112,
                111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58,
                32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115,
                116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61,
                32, 121, 105, 101, 108, 100, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40,
                100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101,
                119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40,
                41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111,
                109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101,
                105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101,
                116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108,
                115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61,
                32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76,
                111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111,
                114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105,
                101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58,
                32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100,
                32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116,
                111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74,
                83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32,
                119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117,
                102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114,
                40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73,
                110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102,
                101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105,
                100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102,
                101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99,
                111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101,
                32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111,
                114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101,
                100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97,
                100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97,
                40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32,
                104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121,
                112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32,
                34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111,
                116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111,
                114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105,
                101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32,
                84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32,
                111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111,
                32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83,
                79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116,
                114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44,
                32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114,
                111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96,
                85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100,
                97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46,
                32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110,
                103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65,
                114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116,
                32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46,
                32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99,
                101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101,
                111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100,
                101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34,
                32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112,
                101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116,
                70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117,
                114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105,
                103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103,
                40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77,
                97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97,
                121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109,
                97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97,
                110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98,
                105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40,
                34, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 119, 101,
                110, 116, 32, 119, 114, 111, 110, 103, 44, 32, 116, 104, 101,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 119, 97, 115,
                32, 115, 117, 112, 112, 111, 115, 101, 32, 116, 111, 32, 97,
                117, 116, 111, 112, 108, 97, 121, 34, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67,
                97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101,
                79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102,
                102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118,
                101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104,
                105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104,
                105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101,
                115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115,
                105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111,
                98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69,
                114, 114, 111, 114, 40, 34, 70, 97, 105, 108, 101, 100, 32, 116,
                111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 32, 100, 97, 116, 97, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95,
                108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114,
                99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114,
                99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41,
                32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100,
                70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41,
                41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114,
                41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115,
                112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97,
                105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32,
                102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114,
                99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41,
                41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101,
                116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84,
                104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101,
                73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97,
                121, 111, 117, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97,
                121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108,
                97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103,
                101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46,
                97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58,
                32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32,
                95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44,
                32, 95, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117,
                116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40,
                95, 97, 50, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108,
                101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 70, 105, 116,
                46, 67, 111, 110, 116, 97, 105, 110, 41, 58, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                97, 115, 101, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 70,
                105, 116, 46, 67, 111, 118, 101, 114, 41, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97,
                115, 101, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 70,
                105, 116, 46, 70, 105, 108, 108, 41, 58, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101,
                32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 70, 105,
                116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 41, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104,
                101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95,
                101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32,
                61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100,
                32, 48, 32, 58, 32, 95, 101, 46, 70, 105, 116, 46, 70, 105, 116,
                87, 105, 100, 116, 104, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                97, 115, 101, 32, 40, 40, 95, 102, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 102, 46, 70,
                105, 116, 46, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97,
                117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34,
                99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100,
                32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103,
                101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114,
                107, 101, 114, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101,
                114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105,
                102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32,
                61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 110, 105, 102,
                101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124,
                124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97,
                110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74,
                83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105,
                102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121,
                115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111,
                110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32,
                48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108,
                108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115,
                111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116,
                99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117,
                108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110,
                100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111,
                110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101,
                103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32,
                115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40,
                41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103,
                109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115,
                101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116,
                32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98,
                32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102,
                105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109,
                111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                109, 111, 100, 101, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100,
                101, 32, 61, 61, 61, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68,
                111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115,
                109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 98, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115,
                101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115,
                101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61,
                32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 77, 111,
                100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 100, 32, 61, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 100, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114,
                115, 101, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110,
                99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108,
                115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100,
                34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114,
                111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95,
                105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107,
                103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 98, 97,
                99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32,
                58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117,
                116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32,
                117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114,
                112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97,
                109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105,
                111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101,
                101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46,
                115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97,
                100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61,
                61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101,
                100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121,
                105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 108, 97, 121, 105,
                110, 103, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105,
                115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105,
                115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97,
                108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40,
                41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101,
                110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97,
                116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97,
                109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49,
                48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103,
                101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109,
                101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 116, 111, 116, 97, 108, 70, 114, 97,
                109, 101, 115, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116,
                105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 100, 117, 114, 97, 116, 105, 111,
                110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115,
                101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111,
                110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97,
                100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44,
                32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102,
                44, 32, 95, 103, 44, 32, 95, 104, 44, 32, 95, 105, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110,
                117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46,
                99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111,
                110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101,
                73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110,
                102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32,
                58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117,
                116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97,
                121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67,
                111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 58, 32, 40, 95, 99, 32, 61, 32, 99, 111, 110, 102,
                105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 102, 97, 108, 115,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101,
                58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111,
                100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105,
                103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119,
                97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108,
                101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103,
                109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111,
                114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109,
                101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32,
                33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32,
                49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70,
                114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97,
                116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111,
                110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101,
                73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32,
                58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61,
                32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101,
                114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95,
                104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                108, 97, 121, 111, 117, 116, 58, 32, 99, 111, 110, 102, 105,
                103, 46, 108, 97, 121, 111, 117, 116, 32, 63, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58,
                32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105,
                103, 110, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121,
                111, 117, 116, 46, 97, 108, 105, 103, 110, 44, 32, 95, 68, 111,
                116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 70, 105, 116, 40, 99, 111, 110, 102, 105,
                103, 46, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 44, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 32, 58, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117,
                108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97,
                40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99,
                40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 40, 95, 105, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 95, 105, 32, 58, 32, 34, 34,
                41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 114,
                101, 110, 100, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61,
                32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100,
                101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117,
                102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46,
                98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112,
                101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100,
                65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32,
                48, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103,
                104, 116, 32, 42, 32, 52, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116,
                97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32,
                73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34,
                117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103,
                101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116,
                101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116,
                97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97,
                109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97,
                103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73,
                109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112,
                101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116,
                46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40,
                105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114,
                46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34,
                114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114,
                97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114,
                101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108,
                32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116,
                101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124,
                124, 32, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108,
                97, 121, 105, 110, 103, 40, 41, 41, 32, 114, 101, 116, 117, 114,
                110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                110, 101, 120, 116, 70, 114, 97, 109, 101, 32, 61, 32, 77, 97,
                116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97,
                109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49,
                48, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 117, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40,
                110, 101, 120, 116, 70, 114, 97, 109, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 117, 112, 100, 97, 116, 101,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58,
                32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114,
                97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114,
                101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 46, 105, 115, 67, 111, 109, 112, 108,
                101, 116, 101, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111,
                111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111,
                111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110,
                116, 58, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 111, 112,
                67, 111, 117, 110, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109,
                112, 108, 101, 116, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103,
                101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116,
                104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103,
                40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110,
                32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108,
                97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103,
                101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116,
                104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95,
                66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118,
                97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111,
                110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110,
                79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33,
                105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105,
                101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95,
                99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122,
                101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124,
                124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 97,
                117, 115, 101, 100, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97,
                117, 115, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111,
                112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117,
                108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101,
                114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116,
                121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32,
                99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32,
                116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70,
                114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32,
                116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101,
                40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61,
                32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97,
                109, 101, 32, 60, 32, 48, 32, 124, 124, 32, 102, 114, 97, 109,
                101, 32, 62, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 111, 116,
                97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99,
                117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32,
                116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70,
                114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101,
                101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103,
                40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115,
                40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101,
                115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108,
                41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108,
                101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111,
                108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102,
                105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111,
                112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108,
                117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104,
                101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65,
                73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98,
                97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111,
                114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40,
                108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32,
                110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46,
                115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115,
                112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115,
                112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123,
                125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102,
                105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32,
                32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32,
                61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115,
                40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111,
                110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76,
                105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101,
                114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114,
                101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118,
                101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101,
                114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101,
                110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87,
                83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97,
                110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69,
                108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79,
                98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115,
                101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115,
                101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114,
                118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 108, 101,
                116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116,
                101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110,
                116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97,
                116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121,
                34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77,
                97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101,
                65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101,
                110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108,
                108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101,
                77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32,
                61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110,
                32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101,
                101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108,
                108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110,
                97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65,
                110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101,
                40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105,
                110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111,
                122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115,
                112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32,
                34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105,
                122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33,
                116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100,
                41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108,
                101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101,
                80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32,
                119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101,
                80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32,
                49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108,
                105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119,
                105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87,
                105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117,
                110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101,
                99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103,
                104, 116, 32, 33, 61, 61, 32, 48, 32, 38, 38, 32, 99, 108, 105,
                101, 110, 116, 87, 105, 100, 116, 104, 32, 33, 61, 61, 32, 48,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105,
                100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105,
                100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97,
                110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32,
                99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32,
                42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 46, 114, 101, 115, 105, 122, 101, 40, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105,
                100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114,
                101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116,
                83, 101, 103, 109, 101, 110, 116, 40, 115, 116, 97, 114, 116,
                70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108,
                108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32,
                61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115,
                40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111,
                110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99,
                114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109,
                101, 110, 116, 40, 91, 115, 116, 97, 114, 116, 70, 114, 97, 109,
                101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 93, 44, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32,
                32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108,
                108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32,
                61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115,
                40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111,
                110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 109, 111,
                100, 101, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10,
                32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101,
                114, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105,
                103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 44,
                32, 123, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101,
                108, 82, 97, 116, 105, 111, 44, 32, 102, 114, 101, 101, 122,
                101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32,
                125, 32, 61, 32, 95, 97, 44, 32, 114, 101, 115, 116, 67, 111,
                110, 102, 105, 103, 32, 61, 32, 95, 95, 111, 98, 106, 82, 101,
                115, 116, 40, 95, 97, 44, 32, 91, 34, 100, 101, 118, 105, 99,
                101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 34, 44, 32,
                34, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115,
                99, 114, 101, 101, 110, 34, 93, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 115, 112, 114,
                101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 95, 95, 115, 112,
                114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 41, 44, 32, 114, 101, 115, 116, 67,
                111, 110, 102, 105, 103, 41, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105, 99, 101, 80,
                105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105, 115, 32, 97,
                32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 44,
                32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32,
                115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101,
                102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105,
                102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 112, 114,
                111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97,
                116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80, 105,
                120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103,
                101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122,
                101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32,
                102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115,
                99, 114, 101, 101, 110, 32, 58, 32, 116, 114, 117, 101, 10, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32,
                38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72,
                84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101,
                110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111,
                82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115,
                105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111,
                98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110,
                118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101,
                114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118,
                101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103,
                46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115,
                99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79,
                98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114,
                118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101,
                101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110,
                111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32,
                114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65,
                110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109,
                97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44,
                32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46,
                104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114,
                101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 58, 36, 123,
                97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 125, 96, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114,
                107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110,
                117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101,
                116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114,
                101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103,
                40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125,
                41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109,
                97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114,
                115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 114,
                107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114,
                101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32,
                105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107,
                101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32,
                43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114,
                32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116,
                40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97,
                109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46,
                116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109,
                97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111,
                110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115,
                117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84,
                104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108,
                111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101,
                109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108,
                111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116,
                84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97,
                116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108,
                111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40,
                116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100,
                101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111,
                116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40,
                115, 108, 111, 116, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40,
                108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111,
                110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80,
                114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86,
                97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111,
                117, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 108, 97, 121,
                111, 117, 116, 46, 97, 108, 105, 103, 110, 44, 32, 95, 68, 111,
                116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 70, 105, 116, 40, 108, 97, 121, 111, 117,
                116, 46, 102, 105, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111,
                114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104,
                44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111,
                114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104,
                44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32,
                115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114,
                108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100,
                101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40,
                117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105,
                110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97,
                108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101,
                100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114,
                116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                116, 111, 112, 112, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 111, 112, 83,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41,
                32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112,
                112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111,
                115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 99, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110,
                100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99,
                116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                99, 97, 108, 101, 89, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100,
                101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116,
                105, 111, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110,
                100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46,
                99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116,
                46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101,
                88, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101,
                108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110,
                116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101,
                99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108,
                101, 89, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120,
                101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 120, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101,
                114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120,
                44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115,
                105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118,
                101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116,
                101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114,
                80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111,
                119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118,
                101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105,
                110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40,
                101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40,
                120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110,
                116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120,
                44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115,
                105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101,
                114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111,
                105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118,
                101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105,
                110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40,
                101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40,
                120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114,
                85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105,
                110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68,
                111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116,
                101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101,
                69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118,
                101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101,
                114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69,
                120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77,
                97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101,
                114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116,
                117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32,
                61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32,
                60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101,
                99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105,
                32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117,
                115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86,
                101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67,
                97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38,
                38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117,
                108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76,
                111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101,
                110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 103,
                101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101,
                76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115,
                116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100,
                101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34,
                41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97,
                100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112,
                34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114,
                115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111,
                105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34,
                112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44,
                32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101,
                114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101,
                114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80,
                111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34,
                44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40,
                34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114,
                34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97,
                100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110,
                116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111,
                105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116,
                104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117,
                100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69,
                120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101,
                114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46,
                95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77,
                101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112,
                83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87,
                83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97,
                110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69,
                108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110,
                116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111,
                105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77,
                101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46,
                114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116,
                101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115,
                46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110,
                77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76,
                105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110,
                116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110,
                116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111,
                105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32,
                116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114,
                69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101,
                34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 41,
                32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105,
                122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                119, 105, 100, 116, 104, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 97, 110, 105, 109, 97, 116, 105, 111,
                110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 40, 95, 100,
                32, 61, 32, 40, 95, 99, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101,
                116, 40, 49, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 95, 100, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101,
                120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111,
                110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97,
                108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97,
                116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101,
                114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97,
                109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115,
                101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101,
                78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120,
                116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111,
                110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97,
                108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67,
                111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32,
                118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32,
                32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 98,
                111, 117, 110, 100, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121,
                101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101,
                10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32,
                108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104,
                101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32,
                108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114,
                101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 98, 111,
                117, 110, 100, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108,
                97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32,
                32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32,
                32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99,
                114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32,
                68, 114, 97, 119, 32, 97, 32, 114, 101, 99, 116, 97, 110, 103,
                108, 101, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101,
                32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32,
                49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116,
                76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110,
                100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98,
                111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 32, 61, 32,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116,
                76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103,
                66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59,
                10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32,
                32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 105, 110, 103, 66,
                111, 120, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121,
                44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103,
                104, 116, 32, 125, 32, 61, 32, 98, 111, 117, 110, 100, 105, 110,
                103, 66, 111, 120, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32,
                32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114,
                111, 107, 101, 82, 101, 99, 116, 40, 120, 44, 32, 121, 44, 32,
                119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116,
                41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32,
                96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32,
                103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100,
                105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97,
                109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111,
                117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105,
                122, 101, 40, 41, 32, 33, 61, 61, 32, 52, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 98,
                111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 48, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61,
                32, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 49, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119,
                105, 100, 116, 104, 32, 61, 32, 98, 111, 117, 110, 100, 115, 46,
                103, 101, 116, 40, 50, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61,
                32, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 51, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 121, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111,
                114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116,
                105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101,
                44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40,
                95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116,
                114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101,
                84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115,
                40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115,
                41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70,
                105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32,
                118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32,
                61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10,
                10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107,
                101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46,
                119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97,
                114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112,
                32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32,
                42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32,
                32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100,
                108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32,
                114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110,
                116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101,
                32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100,
                58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100,
                121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115,
                117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116,
                101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100,
                41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108,
                116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97,
                100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111,
                97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101,
                110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104,
                111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110,
                116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118,
                101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115,
                101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97,
                103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111,
                112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100,
                41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101,
                118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101,
                116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108,
                116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32,
                108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115,
                116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112,
                111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101,
                110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112,
                111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110,
                80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101,
                110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101,
                58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101,
                118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101,
                116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117,
                108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58,
                32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112,
                111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101,
                115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111,
                112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114,
                97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116,
                32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114,
                97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118,
                101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101,
                110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100,
                101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116,
                32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101,
                110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69,
                118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114,
                101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101,
                110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112,
                111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110,
                70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110,
                102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101,
                122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101,
                110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104,
                111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101,
                122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110,
                116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118,
                101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115,
                101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97,
                103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115,
                116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118,
                101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115,
                112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34,
                111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115,
                116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115,
                116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112,
                111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97,
                110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 103, 101,
                116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115,
                116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113,
                117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116,
                40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100,
                101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105,
                115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108,
                97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112,
                101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105,
                115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114,
                111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108,
                111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109,
                101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117,
                114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97,
                109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111,
                110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117,
                114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101,
                114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109,
                101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111,
                110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67,
                111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110,
                100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105,
                118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100,
                58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116,
                105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105,
                118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84,
                104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101,
                110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115,
                101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100,
                121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105,
                102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32,
                32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97,
                121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121,
                111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111,
                117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58,
                32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 83,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115,
                116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105,
                110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110,
                69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115,
                116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69,
                118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118,
                101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111,
                105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40,
                114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114,
                69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121,
                41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112,
                111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115,
                116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69,
                118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116,
                40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101,
                114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116,
                97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 114, 116, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112,
                83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114,
                101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77,
                97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 114, 101, 113,
                117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68,
                97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115,
                77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97,
                116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40,
                115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97,
                116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117,
                101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111,
                110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99,
                101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114,
                101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110,
                118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32,
                61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111,
                109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108,
                111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122,
                101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110,
                102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 10,
                32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32,
                101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77,
                97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101,
                113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111,
                121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116,
                101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101,
                101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116,
                97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122,
                101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110,
                102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40,
                99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109,
                97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116,
                97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101,
                58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101,
                109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104,
                101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97,
                116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116,
                104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116,
                104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101,
                109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97,
                116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114,
                101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115,
                105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100,
                116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101,
                113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46,
                104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110,
                118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99,
                101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110,
                100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117,
                101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111,
                108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97,
                109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102,
                114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109,
                101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101,
                58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100,
                101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111,
                100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110,
                102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102,
                105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101,
                110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101,
                110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101,
                103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115,
                77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101,
                103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109,
                101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58,
                32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101,
                101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114,
                40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116,
                104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116,
                32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40,
                115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97,
                109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105,
                111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109,
                85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115,
                109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58,
                32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122,
                101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114,
                40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116,
                104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116,
                32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40,
                41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115,
                101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101,
                113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119,
                105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116,
                104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101,
                105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46,
                103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97,
                110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100,
                111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116,
                46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119,
                112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100,
                116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97,
                114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114,
                107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107,
                101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58,
                32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76,
                111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111,
                112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111,
                111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97,
                110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116,
                41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101,
                113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59,
                10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111,
                102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101,
                116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110,
                99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97,
                110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114,
                112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36,
                123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110,
                111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101,
                100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46,
                96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32,
                32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97,
                103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115,
                117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67,
                111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46,
                100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111,
                100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46,
                109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115,
                101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46,
                105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116,
                104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97,
                116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114,
                114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110,
                115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59,
                10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61,
                32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116,
                108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114,
                95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109,
                109, 121, 59, 10, 125, 41, 40, 41, 59, 10,
              ]),
            ],
            { type: "application/javascript" }
          ),
          n = URL.createObjectURL(l),
          i = new Worker(n);
        return URL.revokeObjectURL(n), i;
      }
    },
    M3 = C3,
    b3 = class {
      constructor() {
        m(this, "_workers", new Map()),
          m(this, "_animationWorkerMap", new Map());
      }
      getWorker(l) {
        return (
          this._workers.has(l) || this._workers.set(l, new M3()),
          this._workers.get(l)
        );
      }
      assignAnimationToWorker(l, n) {
        this._animationWorkerMap.set(l, n);
      }
      unassignAnimationFromWorker(l) {
        this._animationWorkerMap.delete(l);
      }
      sendMessage(l, n, i) {
        this.getWorker(l).postMessage(n, i || []);
      }
      terminateWorker(l) {
        let n = this._workers.get(l);
        n && (n.terminate(), this._workers.delete(l));
      }
    };
  function C2(l, n) {
    if (l instanceof HTMLCanvasElement) {
      let { height: i, width: o } = l.getBoundingClientRect();
      if (i !== 0 && o !== 0) return { width: o * n, height: i * n };
    }
    return { width: l.width, height: l.height };
  }
  function M2() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
  var b2 = class r1 {
    constructor(n) {
      m(this, "_eventManager", new p2()),
        m(this, "_id"),
        m(this, "_worker"),
        m(this, "_canvas"),
        m(this, "_dotLottieInstanceState", {
          markers: [],
          autoplay: !1,
          backgroundColor: "",
          currentFrame: 0,
          duration: 0,
          loop: !1,
          mode: "forward",
          segment: [0, 0],
          segmentDuration: 0,
          speed: 1,
          totalFrames: 0,
          isLoaded: !1,
          isPlaying: !1,
          isPaused: !1,
          isStopped: !0,
          isFrozen: !1,
          useFrameInterpolation: !1,
          renderConfig: { devicePixelRatio: e1() },
          activeAnimationId: "",
          activeThemeId: "",
          layout: void 0,
          marker: void 0,
          isReady: !1,
          manifest: null,
        }),
        m(this, "_created", !1),
        m(this, "_pointerUpMethod"),
        m(this, "_pointerDownMethod"),
        m(this, "_pointerMoveMethod"),
        m(this, "_pointerEnterMethod"),
        m(this, "_pointerExitMethod");
      var i, o, d;
      (this._canvas = n.canvas), (this._id = `dotlottie-${M2()}`);
      let v = n.workerId || "defaultWorker";
      (this._worker = r1._workerManager.getWorker(v)),
        r1._workerManager.assignAnimationToWorker(this._id, v),
        r1._wasmUrl && this._sendMessage("setWasmUrl", { url: r1._wasmUrl }),
        this._create(
          R(T({}, n), {
            renderConfig: R(T({}, n.renderConfig), {
              devicePixelRatio:
                ((i = n.renderConfig) == null ? void 0 : i.devicePixelRatio) ||
                e1(),
              freezeOnOffscreen:
                (d =
                  (o = n.renderConfig) == null
                    ? void 0
                    : o.freezeOnOffscreen) != null
                  ? d
                  : !0,
            }),
          })
        ),
        this._worker.addEventListener(
          "message",
          this._handleWorkerEvent.bind(this)
        ),
        (this._pointerUpMethod = this._onPointerUp.bind(this)),
        (this._pointerDownMethod = this._onPointerDown.bind(this)),
        (this._pointerMoveMethod = this._onPointerMove.bind(this)),
        (this._pointerEnterMethod = this._onPointerEnter.bind(this)),
        (this._pointerExitMethod = this._onPointerLeave.bind(this));
    }
    _handleWorkerEvent(n) {
      return g(this, null, function* () {
        let i = n.data;
        i.id ||
          (i.method === "onLoad" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event),
            x &&
              this._canvas instanceof HTMLCanvasElement &&
              (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen &&
                N.observe(this._canvas, this),
              this._dotLottieInstanceState.renderConfig.autoResize &&
                B.observe(this._canvas, this))),
          i.method === "onComplete" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onDestroy" &&
            i.result.instanceId === this._id &&
            this._eventManager.dispatch(i.result.event),
          i.method === "onUnfreeze" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            (this._dotLottieInstanceState.isFrozen = !1),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onFrame" &&
            i.result.instanceId === this._id &&
            ((this._dotLottieInstanceState.currentFrame =
              i.result.event.currentFrame),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onRender" &&
            i.result.instanceId === this._id &&
            this._eventManager.dispatch(i.result.event),
          i.method === "onFreeze" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onPause" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onPlay" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onStop" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onLoadError" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)),
          i.method === "onReady" &&
            i.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(i.result.event)));
      });
    }
    _create(n) {
      return g(this, null, function* () {
        var i;
        let o;
        this._canvas instanceof HTMLCanvasElement
          ? (o = this._canvas.transferControlToOffscreen())
          : (o = this._canvas);
        let { instanceId: d } = yield this._sendMessage(
          "create",
          T(
            { instanceId: this._id, config: R(T({}, n), { canvas: o }) },
            C2(
              this._canvas,
              ((i = n.renderConfig) == null ? void 0 : i.devicePixelRatio) ||
                e1()
            )
          ),
          [o]
        );
        if (d !== this._id) throw new Error("Instance ID mismatch");
        (this._created = !0), yield this._updateDotLottieInstanceState();
      });
    }
    get isLoaded() {
      return this._dotLottieInstanceState.isLoaded;
    }
    get isPlaying() {
      return this._dotLottieInstanceState.isPlaying;
    }
    get isPaused() {
      return this._dotLottieInstanceState.isPaused;
    }
    get isStopped() {
      return this._dotLottieInstanceState.isStopped;
    }
    get currentFrame() {
      return this._dotLottieInstanceState.currentFrame;
    }
    get isFrozen() {
      return this._dotLottieInstanceState.isFrozen;
    }
    get segmentDuration() {
      return this._dotLottieInstanceState.segmentDuration;
    }
    get totalFrames() {
      return this._dotLottieInstanceState.totalFrames;
    }
    get segment() {
      return this._dotLottieInstanceState.segment;
    }
    get speed() {
      return this._dotLottieInstanceState.speed;
    }
    get duration() {
      return this._dotLottieInstanceState.duration;
    }
    get isReady() {
      return this._dotLottieInstanceState.isReady;
    }
    get mode() {
      return this._dotLottieInstanceState.mode;
    }
    get canvas() {
      return this._canvas;
    }
    get autoplay() {
      return this._dotLottieInstanceState.autoplay;
    }
    get backgroundColor() {
      return this._dotLottieInstanceState.backgroundColor;
    }
    get loop() {
      return this._dotLottieInstanceState.loop;
    }
    get useFrameInterpolation() {
      return this._dotLottieInstanceState.useFrameInterpolation;
    }
    get renderConfig() {
      return this._dotLottieInstanceState.renderConfig;
    }
    get manifest() {
      return this._dotLottieInstanceState.manifest;
    }
    get activeAnimationId() {
      return this._dotLottieInstanceState.activeAnimationId;
    }
    get marker() {
      return this._dotLottieInstanceState.marker;
    }
    get activeThemeId() {
      return this._dotLottieInstanceState.activeThemeId;
    }
    get layout() {
      return this._dotLottieInstanceState.layout;
    }
    play() {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("play", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState(),
          x &&
            this._canvas instanceof HTMLCanvasElement &&
            this._dotLottieInstanceState.renderConfig.freezeOnOffscreen &&
            !w2(this._canvas) &&
            (yield this.freeze()));
      });
    }
    pause() {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("pause", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    stop() {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("stop", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setSpeed(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setSpeed", {
            instanceId: this._id,
            speed: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setMode(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setMode", {
            instanceId: this._id,
            mode: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setFrame(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setFrame", {
            frame: n,
            instanceId: this._id,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setSegment(n, i) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setSegment", {
            instanceId: this._id,
            segment: [n, i],
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setRenderConfig(n) {
      return g(this, null, function* () {
        if (!this._created) return;
        let i = n,
          { devicePixelRatio: o, freezeOnOffscreen: d } = i,
          v = f2(i, ["devicePixelRatio", "freezeOnOffscreen"]);
        yield this._sendMessage("setRenderConfig", {
          instanceId: this._id,
          renderConfig: R(
            T(T({}, this._dotLottieInstanceState.renderConfig), v),
            { devicePixelRatio: o || e1(), freezeOnOffscreen: d ?? !0 }
          ),
        }),
          yield this._updateDotLottieInstanceState(),
          x &&
            this._canvas instanceof HTMLCanvasElement &&
            (this._dotLottieInstanceState.renderConfig.autoResize
              ? B.observe(this._canvas, this)
              : B.unobserve(this._canvas),
            this._dotLottieInstanceState.renderConfig.freezeOnOffscreen
              ? N.observe(this._canvas, this)
              : (N.unobserve(this._canvas),
                this._dotLottieInstanceState.isFrozen &&
                  (yield this.unfreeze())));
      });
    }
    setUseFrameInterpolation(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setUseFrameInterpolation", {
            instanceId: this._id,
            useFrameInterpolation: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setTheme(n) {
      return g(this, null, function* () {
        if (!this._created) return !1;
        let i = this._sendMessage("setTheme", {
          instanceId: this._id,
          themeId: n,
        });
        return yield this._updateDotLottieInstanceState(), i;
      });
    }
    load(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("load", { config: n, instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setLoop(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setLoop", {
            instanceId: this._id,
            loop: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    resize() {
      return g(this, null, function* () {
        if (!this._created) return;
        let { height: n, width: i } = C2(
          this._canvas,
          this._dotLottieInstanceState.renderConfig.devicePixelRatio || e1()
        );
        yield this._sendMessage("resize", {
          height: n,
          instanceId: this._id,
          width: i,
        }),
          yield this._updateDotLottieInstanceState();
      });
    }
    destroy() {
      return g(this, null, function* () {
        this._created &&
          ((this._created = !1),
          yield this._sendMessage("destroy", { instanceId: this._id }),
          this._cleanupStateMachineListeners(),
          r1._workerManager.unassignAnimationFromWorker(this._id),
          this._eventManager.removeAllEventListeners(),
          x &&
            this._canvas instanceof HTMLCanvasElement &&
            (N.unobserve(this._canvas), B.unobserve(this._canvas)));
      });
    }
    freeze() {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("freeze", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    unfreeze() {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("unfreeze", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setBackgroundColor(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setBackgroundColor", {
            instanceId: this._id,
            backgroundColor: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    loadAnimation(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("loadAnimation", {
            animationId: n,
            instanceId: this._id,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setLayout(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setLayout", {
            instanceId: this._id,
            layout: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    _updateDotLottieInstanceState() {
      return g(this, null, function* () {
        if (!this._created) return;
        let n = yield this._sendMessage("getDotLottieInstanceState", {
          instanceId: this._id,
        });
        this._dotLottieInstanceState = n.state;
      });
    }
    markers() {
      return this._dotLottieInstanceState.markers;
    }
    setMarker(n) {
      return g(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setMarker", {
            instanceId: this._id,
            marker: n,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setThemeData(n) {
      return g(this, null, function* () {
        if (!this._created) return !1;
        let i = yield this._sendMessage("setThemeData", {
          instanceId: this._id,
          themeData: n,
        });
        return yield this._updateDotLottieInstanceState(), i;
      });
    }
    setViewport(n, i, o, d) {
      return g(this, null, function* () {
        return this._created
          ? this._sendMessage("setViewport", {
              x: n,
              y: i,
              width: o,
              height: d,
              instanceId: this._id,
            })
          : !1;
      });
    }
    _sendMessage(n, i, o) {
      return g(this, null, function* () {
        let d = { id: `dotlottie-request-${M2()}`, method: n, params: i };
        return (
          this._worker.postMessage(d, o || []),
          new Promise((v, L) => {
            let C = (b) => {
              let A = b.data;
              A.id === d.id &&
                (this._worker.removeEventListener("message", C),
                A.error
                  ? L(new Error(`Failed to execute method ${n}: ${A.error}`))
                  : v(A.result));
            };
            this._worker.addEventListener("message", C);
          })
        );
      });
    }
    addEventListener(n, i) {
      this._eventManager.addEventListener(n, i);
    }
    removeEventListener(n, i) {
      this._eventManager.removeEventListener(n, i);
    }
    static setWasmUrl(n) {
      r1._wasmUrl = n;
    }
    loadStateMachine(n) {
      return g(this, null, function* () {
        if (!this._created) return !1;
        let i = yield this._sendMessage("loadStateMachine", {
          instanceId: this._id,
          stateMachineId: n,
        });
        return yield this._updateDotLottieInstanceState(), i;
      });
    }
    loadStateMachineData(n) {
      return g(this, null, function* () {
        if (!this._created) return !1;
        let i = yield this._sendMessage("loadStateMachineData", {
          instanceId: this._id,
          stateMachineData: n,
        });
        return yield this._updateDotLottieInstanceState(), i;
      });
    }
    startStateMachine() {
      return g(this, null, function* () {
        if (!this._created) return !1;
        this._setupStateMachineListeners();
        let n = yield this._sendMessage("startStateMachine", {
          instanceId: this._id,
        });
        return yield this._updateDotLottieInstanceState(), n;
      });
    }
    stopStateMachine() {
      return g(this, null, function* () {
        return this._created
          ? (this._cleanupStateMachineListeners(),
            this._sendMessage("stopStateMachine", { instanceId: this._id }))
          : !1;
      });
    }
    getStateMachineListeners() {
      return g(this, null, function* () {
        return this._created
          ? this._sendMessage("getStateMachineListeners", {
              instanceId: this._id,
            })
          : [];
      });
    }
    _getPointerPosition(n) {
      let i = this._canvas.getBoundingClientRect(),
        o = this._canvas.width / i.width,
        d = this._canvas.height / i.height,
        v =
          this._dotLottieInstanceState.renderConfig.devicePixelRatio ||
          window.devicePixelRatio ||
          1,
        L = ((n.clientX - i.left) * o) / v,
        C = ((n.clientY - i.top) * d) / v;
      return { x: L, y: C };
    }
    _onPointerUp(n) {
      let { x: i, y: o } = this._getPointerPosition(n);
      this._sendMessage("postPointerUpEvent", {
        instanceId: this._id,
        x: i,
        y: o,
      });
    }
    _onPointerDown(n) {
      let { x: i, y: o } = this._getPointerPosition(n);
      this._sendMessage("postPointerDownEvent", {
        instanceId: this._id,
        x: i,
        y: o,
      });
    }
    _onPointerMove(n) {
      let { x: i, y: o } = this._getPointerPosition(n);
      this._sendMessage("postPointerMoveEvent", {
        instanceId: this._id,
        x: i,
        y: o,
      });
    }
    _onPointerEnter(n) {
      let { x: i, y: o } = this._getPointerPosition(n);
      this._sendMessage("postPointerEnterEvent", {
        instanceId: this._id,
        x: i,
        y: o,
      });
    }
    _onPointerLeave(n) {
      let { x: i, y: o } = this._getPointerPosition(n);
      this._sendMessage("postPointerExitEvent", {
        instanceId: this._id,
        x: i,
        y: o,
      });
    }
    _setupStateMachineListeners() {
      return g(this, null, function* () {
        if (x && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
          let n = yield this._sendMessage("getStateMachineListeners", {
            instanceId: this._id,
          });
          n.includes("PointerUp") &&
            this._canvas.addEventListener("pointerup", this._pointerUpMethod),
            n.includes("PointerDown") &&
              this._canvas.addEventListener(
                "pointerdown",
                this._pointerDownMethod
              ),
            n.includes("PointerMove") &&
              this._canvas.addEventListener(
                "pointermove",
                this._pointerMoveMethod
              ),
            n.includes("PointerEnter") &&
              this._canvas.addEventListener(
                "pointerenter",
                this._pointerEnterMethod
              ),
            n.includes("PointerExit") &&
              this._canvas.addEventListener(
                "pointerleave",
                this._pointerExitMethod
              );
        }
      });
    }
    _cleanupStateMachineListeners() {
      x &&
        this._canvas instanceof HTMLCanvasElement &&
        (this._canvas.removeEventListener("pointerup", this._pointerUpMethod),
        this._canvas.removeEventListener(
          "pointerdown",
          this._pointerDownMethod
        ),
        this._canvas.removeEventListener(
          "pointermove",
          this._pointerMoveMethod
        ),
        this._canvas.removeEventListener(
          "pointerenter",
          this._pointerEnterMethod
        ),
        this._canvas.removeEventListener(
          "pointerleave",
          this._pointerExitMethod
        ));
    }
  };
  m(b2, "_workerManager", new b3()), m(b2, "_wasmUrl", "");
  const E2 = "loplat-new-ai-btn",
    I2 = "loplat-new-ai-popup",
    E3 = "loplat-new-ai",
    C1 = {
      HIGHLIGHT: "HIGHLIGHT",
      COPY: "COPY",
      TOGGLE: "TOGGLE",
      URL_CHANGE: "URL_CHANGE",
      MOUSE_CLICK: "MOUSE_CLICK",
    },
    I3 = (l = E2) => {
      const n = document.createElement("button");
      return (n.id = l), (n.textContent = "전문가 호출"), n;
    },
    S3 = (
      l = I2,
      n = "https://loplat-chatbot-320524274389.asia-northeast3.run.app/ai-agent-nav"
    ) => {
      const i = document.createElement("div");
      i.id = l;
      const o = document.createElement("iframe");
      (o.src = n), (o.style.display = "none"), (o.className = E3);
      const d = document.createElement("canvas");
      return (
        (d.id = "iframe-loading"),
        (d.style.width = "100%"),
        (d.style.height = "auto"),
        i.appendChild(o),
        i.appendChild(d),
        (o.onload = () => {
          i.removeChild(d), (o.style.display = "block");
        }),
        i
      );
    },
    H1 = "highlight-visible",
    S2 = () => {
      const l = new IntersectionObserver(
          (i) => {
            i.forEach((o) => {
              const d = o.target;
              o.isIntersecting ? d.classList.add(H1) : d.classList.remove(H1);
            });
          },
          { root: null, rootMargin: "0px", threshold: 0.5 }
        ),
        n = (i) => {
          i.nodeType === Node.ELEMENT_NODE &&
          i.nodeName !== "SCRIPT" &&
          i.nodeName !== "STYLE"
            ? Array.from(i.childNodes).forEach(n)
            : i.parentElement && l.observe(i.parentElement);
        };
      n(document.body);
    };
  let d1 = !1;
  const P2 = () => {
      d1 = !d1;
      const l = document.querySelector(`#${E2}`);
      l &&
        (l.classList.toggle("toggled"),
        (l.textContent = d1 ? "상담중 ✨" : "전문가 호출"));
      const n = document.querySelector(`#${I2}`);
      n && (n.style.display = d1 ? "flex" : "none"),
        d1 && window.dispatchEvent(new Event("popstate"));
    },
    N1 = ({ popup: l, type: n, ...i }) => {
      var d;
      const o = l.querySelector("iframe");
      o &&
        ((d = o.contentWindow) == null ||
          d.postMessage({ type: n, value: i }, "*"));
    },
    P3 = (l) =>
      N1({ popup: l, type: C1.URL_CHANGE, url: window.location.href }),
    F3 = (l) => {
      const { data: n } = l;
      if (!(typeof n != "object" || n === null || !("type" in n)))
        switch (n.type) {
          case C1.HIGHLIGHT:
            window.ChatWidget.highlightText({
              keyword: `${n.value.keyword}`,
              nth: Number(n.value.nth ?? 1),
            });
            break;
          case C1.COPY:
            window.navigator.clipboard.writeText(n.value);
            break;
          case C1.TOGGLE:
            P2();
            break;
          default:
            return;
        }
    },
    A3 = (l, n) => {
      const i = l.target;
      if (!i) return;
      const o = { x: l.clientX, y: l.clientY };
      if (!(i instanceof HTMLElement))
        return N1({ popup: n, type: "MOUSE_CLICK", ...o });
      const d = i.tagName,
        v = i.id ? `#${i.id}` : "",
        L = i.className
          ? `.${i.className
              .split(" ")
              .filter((b) => b !== H1)
              .join(".")}`
          : "",
        C = `${d}${v}${L}`;
      return N1({
        popup: n,
        type: "MOUSE_CLICK",
        ...o,
        tagPath: C,
        tagContent: i.innerText,
      });
    },
    F2 = () => {
      const l = I3(),
        n = S3();
      document.body.appendChild(l), document.body.appendChild(n);
      const i = document.querySelector("#iframe-loading");
      i &&
        new L3({
          canvas: i,
          src: "https://lottie.host/9ff45170-514a-4812-aefc-ded4e03b1bdc/sIkKDTDuJY.lottie",
          loop: !0,
          autoplay: !0,
          layout: { fit: "fit-width", align: [0.5, 0.5] },
        }),
        l.addEventListener("click", P2);
      const o = history.pushState;
      history.pushState = function (...v) {
        o.apply(this, v),
          arguments[0].isReplace || window.dispatchEvent(new Event("popstate"));
      };
      const d = history.replaceState;
      (history.replaceState = function (...v) {
        (arguments[0].isReplace = !0), d.apply(this, v);
      }),
        window.addEventListener("popstate", () => P3(n)),
        window.addEventListener("message", F3),
        window.addEventListener("click", (v) => A3(v, n)),
        document.readyState === "loading"
          ? document.addEventListener("DOMContentLoaded", S2)
          : S2();
    },
    T3 = (l) => {
      document.querySelectorAll(`.${l}`).forEach((i) => {
        const o = i.parentElement;
        o && o.replaceChild(document.createTextNode(i.textContent || ""), i);
      });
    },
    A2 = ({
      node: l,
      keyword: n,
      currentIdx: i = { value: 1 },
      targetIdx: o,
      highlightClass: d,
    }) => {
      if (l.nodeType === Node.TEXT_NODE && !!l.nodeValue) {
        const C = l.nodeValue ?? "",
          b = l.parentElement;
        if (C.includes(n) && b) {
          if (i.value === o) {
            const A = new RegExp(`(${n})`, "gi"),
              D = C.replace(A, `<span class="${d}">$1</span>`),
              Y = document.createElement("span");
            (Y.innerHTML = D), b.replaceChild(Y, l);
            const V = Y.getBoundingClientRect();
            window.scrollTo({
              top: V.top + window.scrollY - 200,
              behavior: "smooth",
            });
          }
          i.value += 1;
        }
      }
      l.nodeType === Node.ELEMENT_NODE &&
        l.nodeName !== "SCRIPT" &&
        l.nodeName !== "STYLE" &&
        Array.from(l.childNodes).forEach((C) =>
          A2({
            node: C,
            keyword: n,
            currentIdx: i,
            targetIdx: o,
            highlightClass: d,
          })
        );
    },
    D3 = ({ keyword: l, nth: n = 1, highlightClass: i = "highlight" }) => {
      l &&
        (T3(i),
        A2({
          node: document.body,
          keyword: l,
          targetIdx: n,
          highlightClass: i,
        }));
    };
  (window.ChatWidget = { init: F2, highlightText: D3 }), F2();
})();
