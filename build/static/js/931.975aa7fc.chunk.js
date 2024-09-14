/*! For license information please see 931.975aa7fc.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkwre_frontend = self.webpackChunkwre_frontend || []).push([
  [931],
  {
    8931: (e, t, n) => {
      n.d(t, { Kv: () => i, N4: () => r });
      var l = n(5043),
        o = n(7111);
      function i(e, t) {
        return e
          ? (function (e) {
              return (
                "function" === typeof e &&
                (() => {
                  const t = Object.getPrototypeOf(e);
                  return t.prototype && t.prototype.isReactComponent;
                })()
              );
            })((n = e)) ||
            "function" === typeof n ||
            (function (e) {
              return (
                "object" === typeof e &&
                "symbol" === typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description,
                )
              );
            })(n)
            ? l.createElement(e, t)
            : e
          : null;
        var n;
      }
      function r(e) {
        const t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = l.useState(() => ({ current: (0, o.ZR)(t) })),
          [i, r] = l.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              r(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    7111: (e, t, n) => {
      function l() {
        return {
          accessor: (e, t) =>
            "function" === typeof e
              ? { ...t, accessorFn: e }
              : { ...t, accessorKey: e },
          display: (e) => e,
          group: (e) => e,
        };
      }
      function o(e, t) {
        return "function" === typeof e ? e(t) : e;
      }
      function i(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: o(n, t[e]) }));
        };
      }
      function r(e) {
        return e instanceof Function;
      }
      function a(e, t) {
        const n = [],
          l = (e) => {
            e.forEach((e) => {
              n.push(e);
              const o = t(e);
              null != o && o.length && l(o);
            });
          };
        return l(e), n;
      }
      function u(e, t, n) {
        let l,
          o = [];
        return (i) => {
          let r;
          n.key && n.debug && (r = Date.now());
          const a = e(i);
          if (!(a.length !== o.length || a.some((e, t) => o[t] !== e)))
            return l;
          let u;
          if (
            ((o = a),
            n.key && n.debug && (u = Date.now()),
            (l = t(...a)),
            null == n || null == n.onChange || n.onChange(l),
            n.key && n.debug && null != n && n.debug())
          ) {
            const e = Math.round(100 * (Date.now() - r)) / 100,
              t = Math.round(100 * (Date.now() - u)) / 100,
              l = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              "%c\u23f1 ".concat(o(t, 5), " /").concat(o(e, 5), " ms"),
              "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(
                Math.max(0, Math.min(120 - 120 * l, 120)),
                "deg 100% 31%);",
              ),
              null == n ? void 0 : n.key,
            );
          }
          return l;
        };
      }
      function s(e, t, n, l) {
        return {
          debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
          },
          key: !1,
          onChange: l,
        };
      }
      n.d(t, { FB: () => l, HT: () => J, ZR: () => Z });
      const g = "debugHeaders";
      function d(e, t, n) {
        var l;
        let o = {
          id: null != (l = n.id) ? l : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            const e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(o), e;
          },
          getContext: () => ({ table: e, header: o, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(o, e);
          }),
          o
        );
      }
      const c = {
        createTable: (e) => {
          (e.getHeaderGroups = u(
            () => [
              e.getAllColumns(),
              e.getVisibleLeafColumns(),
              e.getState().columnPinning.left,
              e.getState().columnPinning.right,
            ],
            (t, n, l, o) => {
              var i, r;
              const a =
                  null !=
                  (i =
                    null == l
                      ? void 0
                      : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? i
                    : [],
                u =
                  null !=
                  (r =
                    null == o
                      ? void 0
                      : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? r
                    : [];
              return p(
                t,
                [
                  ...a,
                  ...n.filter(
                    (e) =>
                      !(null != l && l.includes(e.id)) &&
                      !(null != o && o.includes(e.id)),
                  ),
                  ...u,
                ],
                e,
              );
            },
            s(e.options, g),
          )),
            (e.getCenterHeaderGroups = u(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, n, l, o) =>
                p(
                  t,
                  (n = n.filter(
                    (e) =>
                      !(null != l && l.includes(e.id)) &&
                      !(null != o && o.includes(e.id)),
                  )),
                  e,
                  "center",
                ),
              s(e.options, g),
            )),
            (e.getLeftHeaderGroups = u(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
              ],
              (t, n, l) => {
                var o;
                return p(
                  t,
                  null !=
                    (o =
                      null == l
                        ? void 0
                        : l
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? o
                    : [],
                  e,
                  "left",
                );
              },
              s(e.options, g),
            )),
            (e.getRightHeaderGroups = u(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.right,
              ],
              (t, n, l) => {
                var o;
                return p(
                  t,
                  null !=
                    (o =
                      null == l
                        ? void 0
                        : l
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? o
                    : [],
                  e,
                  "right",
                );
              },
              s(e.options, g),
            )),
            (e.getFooterGroups = u(
              () => [e.getHeaderGroups()],
              (e) => [...e].reverse(),
              s(e.options, g),
            )),
            (e.getLeftFooterGroups = u(
              () => [e.getLeftHeaderGroups()],
              (e) => [...e].reverse(),
              s(e.options, g),
            )),
            (e.getCenterFooterGroups = u(
              () => [e.getCenterHeaderGroups()],
              (e) => [...e].reverse(),
              s(e.options, g),
            )),
            (e.getRightFooterGroups = u(
              () => [e.getRightHeaderGroups()],
              (e) => [...e].reverse(),
              s(e.options, g),
            )),
            (e.getFlatHeaders = u(
              () => [e.getHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              s(e.options, g),
            )),
            (e.getLeftFlatHeaders = u(
              () => [e.getLeftHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              s(e.options, g),
            )),
            (e.getCenterFlatHeaders = u(
              () => [e.getCenterHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              s(e.options, g),
            )),
            (e.getRightFlatHeaders = u(
              () => [e.getRightHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              s(e.options, g),
            )),
            (e.getCenterLeafHeaders = u(
              () => [e.getCenterFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              s(e.options, g),
            )),
            (e.getLeftLeafHeaders = u(
              () => [e.getLeftFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              s(e.options, g),
            )),
            (e.getRightLeafHeaders = u(
              () => [e.getRightFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              s(e.options, g),
            )),
            (e.getLeafHeaders = u(
              () => [
                e.getLeftHeaderGroups(),
                e.getCenterHeaderGroups(),
                e.getRightHeaderGroups(),
              ],
              (e, t, n) => {
                var l, o, i, r, a, u;
                return [
                  ...(null != (l = null == (o = e[0]) ? void 0 : o.headers)
                    ? l
                    : []),
                  ...(null != (i = null == (r = t[0]) ? void 0 : r.headers)
                    ? i
                    : []),
                  ...(null != (a = null == (u = n[0]) ? void 0 : u.headers)
                    ? a
                    : []),
                ]
                  .map((e) => e.getLeafHeaders())
                  .flat();
              },
              s(e.options, g),
            ));
        },
      };
      function p(e, t, n, l) {
        var o, i;
        let r = 0;
        const a = function (e, t) {
          void 0 === t && (t = 1),
            (r = Math.max(r, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var n;
                null != (n = e.columns) && n.length && a(e.columns, t + 1);
              }, 0);
        };
        a(e);
        let u = [];
        const s = (e, t) => {
            const o = {
                depth: t,
                id: [l, "".concat(t)].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              const r = [...i].reverse()[0];
              let a,
                u = !1;
              if (
                (e.column.depth === o.depth && e.column.parent
                  ? (a = e.column.parent)
                  : ((a = e.column), (u = !0)),
                r && (null == r ? void 0 : r.column) === a)
              )
                r.subHeaders.push(e);
              else {
                const o = d(n, a, {
                  id: [l, t, a.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: u,
                  placeholderId: u
                    ? "".concat(i.filter((e) => e.column === a).length)
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                o.subHeaders.push(e), i.push(o);
              }
              o.headers.push(e), (e.headerGroup = o);
            }),
              u.push(o),
              t > 0 && s(i, t - 1);
          },
          g = t.map((e, t) => d(n, e, { depth: r, index: t }));
        s(g, r - 1), u.reverse();
        const c = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                l = [0];
              e.subHeaders && e.subHeaders.length
                ? ((l = []),
                  c(e.subHeaders).forEach((e) => {
                    let { colSpan: n, rowSpan: o } = e;
                    (t += n), l.push(o);
                  }))
                : (t = 1);
              return (
                (n += Math.min(...l)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          c(null != (o = null == (i = u[0]) ? void 0 : i.headers) ? o : []), u
        );
      }
      const f = (e, t, n, l, o, i, r) => {
          let g = {
            id: t,
            index: l,
            original: n,
            depth: o,
            parentId: r,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
              if (g._valuesCache.hasOwnProperty(t)) return g._valuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? ((g._valuesCache[t] = n.accessorFn(g.original, l)),
                  g._valuesCache[t])
                : void 0;
            },
            getUniqueValues: (t) => {
              if (g._uniqueValuesCache.hasOwnProperty(t))
                return g._uniqueValuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? n.columnDef.getUniqueValues
                  ? ((g._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      g.original,
                      l,
                    )),
                    g._uniqueValuesCache[t])
                  : ((g._uniqueValuesCache[t] = [g.getValue(t)]),
                    g._uniqueValuesCache[t])
                : void 0;
            },
            renderValue: (t) => {
              var n;
              return null != (n = g.getValue(t))
                ? n
                : e.options.renderFallbackValue;
            },
            subRows: null != i ? i : [],
            getLeafRows: () => a(g.subRows, (e) => e.subRows),
            getParentRow: () =>
              g.parentId ? e.getRow(g.parentId, !0) : void 0,
            getParentRows: () => {
              let e = [],
                t = g;
              for (;;) {
                const n = t.getParentRow();
                if (!n) break;
                e.push(n), (t = n);
              }
              return e.reverse();
            },
            getAllCells: u(
              () => [e.getAllLeafColumns()],
              (t) =>
                t.map((t) =>
                  (function (e, t, n, l) {
                    const o = {
                      id: "".concat(t.id, "_").concat(n.id),
                      row: t,
                      column: n,
                      getValue: () => t.getValue(l),
                      renderValue: () => {
                        var t;
                        return null != (t = o.getValue())
                          ? t
                          : e.options.renderFallbackValue;
                      },
                      getContext: u(
                        () => [e, n, t, o],
                        (e, t, n, l) => ({
                          table: e,
                          column: t,
                          row: n,
                          cell: l,
                          getValue: l.getValue,
                          renderValue: l.renderValue,
                        }),
                        s(e.options, "debugCells"),
                      ),
                    };
                    return (
                      e._features.forEach((l) => {
                        null == l.createCell || l.createCell(o, n, t, e);
                      }, {}),
                      o
                    );
                  })(e, g, t, t.id),
                ),
              s(e.options, "debugRows"),
            ),
            _getAllCellsByColumnId: u(
              () => [g.getAllCells()],
              (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
              s(e.options, "debugRows"),
            ),
          };
          for (let a = 0; a < e._features.length; a++) {
            const t = e._features[a];
            null == t || null == t.createRow || t.createRow(g, e);
          }
          return g;
        },
        m = {
          createColumn: (e, t) => {
            (e._getFacetedRowModel =
              t.options.getFacetedRowModel &&
              t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel
                  ? e._getFacetedRowModel()
                  : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues &&
                t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues
                  ? e._getFacetedUniqueValues()
                  : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues &&
                t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues)
                  return e._getFacetedMinMaxValues();
              });
          },
        },
        S = (e, t, n) => {
          var l, o;
          const i =
            null == n || null == (l = n.toString()) ? void 0 : l.toLowerCase();
          return Boolean(
            null == (o = e.getValue(t)) ||
              null == (o = o.toString()) ||
              null == (o = o.toLowerCase())
              ? void 0
              : o.includes(i),
          );
        };
      S.autoRemove = (e) => I(e);
      const C = (e, t, n) => {
        var l;
        return Boolean(
          null == (l = e.getValue(t)) || null == (l = l.toString())
            ? void 0
            : l.includes(n),
        );
      };
      C.autoRemove = (e) => I(e);
      const w = (e, t, n) => {
        var l;
        return (
          (null == (l = e.getValue(t)) || null == (l = l.toString())
            ? void 0
            : l.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      w.autoRemove = (e) => I(e);
      const v = (e, t, n) => {
        var l;
        return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
      };
      v.autoRemove = (e) => I(e) || !(null != e && e.length);
      const h = (e, t, n) =>
        !n.some((n) => {
          var l;
          return !(null != (l = e.getValue(t)) && l.includes(n));
        });
      h.autoRemove = (e) => I(e) || !(null != e && e.length);
      const R = (e, t, n) =>
        n.some((n) => {
          var l;
          return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
        });
      R.autoRemove = (e) => I(e) || !(null != e && e.length);
      const b = (e, t, n) => e.getValue(t) === n;
      b.autoRemove = (e) => I(e);
      const F = (e, t, n) => e.getValue(t) == n;
      F.autoRemove = (e) => I(e);
      const M = (e, t, n) => {
        let [l, o] = n;
        const i = e.getValue(t);
        return i >= l && i <= o;
      };
      (M.resolveFilterValue = (e) => {
        let [t, n] = e,
          l = "number" !== typeof t ? parseFloat(t) : t,
          o = "number" !== typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(l) ? -1 / 0 : l,
          r = null === n || Number.isNaN(o) ? 1 / 0 : o;
        if (i > r) {
          const e = i;
          (i = r), (r = e);
        }
        return [i, r];
      }),
        (M.autoRemove = (e) => I(e) || (I(e[0]) && I(e[1])));
      const P = {
        includesString: S,
        includesStringSensitive: C,
        equalsString: w,
        arrIncludes: v,
        arrIncludesAll: h,
        arrIncludesSome: R,
        equals: b,
        weakEquals: F,
        inNumberRange: M,
      };
      function I(e) {
        return void 0 === e || null === e || "" === e;
      }
      const V = {
        getDefaultColumnDef: () => ({ filterFn: "auto" }),
        getInitialState: (e) => ({ columnFilters: [], ...e }),
        getDefaultOptions: (e) => ({
          onColumnFiltersChange: i("columnFilters", e),
          filterFromLeafRows: !1,
          maxLeafRowFilterDepth: 100,
        }),
        createColumn: (e, t) => {
          (e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
              l = null == n ? void 0 : n.getValue(e.id);
            return "string" === typeof l
              ? P.includesString
              : "number" === typeof l
                ? P.inNumberRange
                : "boolean" === typeof l ||
                    (null !== l && "object" === typeof l)
                  ? P.equals
                  : Array.isArray(l)
                    ? P.arrIncludes
                    : P.weakEquals;
          }),
            (e.getFilterFn = () => {
              var n, l;
              return r(e.columnDef.filterFn)
                ? e.columnDef.filterFn
                : "auto" === e.columnDef.filterFn
                  ? e.getAutoFilterFn()
                  : null !=
                      (n =
                        null == (l = t.options.filterFns)
                          ? void 0
                          : l[e.columnDef.filterFn])
                    ? n
                    : P[e.columnDef.filterFn];
            }),
            (e.getCanFilter = () => {
              var n, l, o;
              return (
                (null == (n = e.columnDef.enableColumnFilter) || n) &&
                (null == (l = t.options.enableColumnFilters) || l) &&
                (null == (o = t.options.enableFilters) || o) &&
                !!e.accessorFn
              );
            }),
            (e.getIsFiltered = () => e.getFilterIndex() > -1),
            (e.getFilterValue = () => {
              var n;
              return null == (n = t.getState().columnFilters) ||
                null == (n = n.find((t) => t.id === e.id))
                ? void 0
                : n.value;
            }),
            (e.getFilterIndex = () => {
              var n, l;
              return null !=
                (n =
                  null == (l = t.getState().columnFilters)
                    ? void 0
                    : l.findIndex((t) => t.id === e.id))
                ? n
                : -1;
            }),
            (e.setFilterValue = (n) => {
              t.setColumnFilters((t) => {
                const l = e.getFilterFn(),
                  i = null == t ? void 0 : t.find((t) => t.id === e.id),
                  r = o(n, i ? i.value : void 0);
                var a;
                if (x(l, r, e))
                  return null !=
                    (a = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                    ? a
                    : [];
                const u = { id: e.id, value: r };
                var s;
                return i
                  ? null !=
                    (s =
                      null == t
                        ? void 0
                        : t.map((t) => (t.id === e.id ? u : t)))
                    ? s
                    : []
                  : null != t && t.length
                    ? [...t, u]
                    : [u];
              });
            });
        },
        createRow: (e, t) => {
          (e.columnFilters = {}), (e.columnFiltersMeta = {});
        },
        createTable: (e) => {
          (e.setColumnFilters = (t) => {
            const n = e.getAllLeafColumns();
            null == e.options.onColumnFiltersChange ||
              e.options.onColumnFiltersChange((e) => {
                var l;
                return null == (l = o(t, e))
                  ? void 0
                  : l.filter((e) => {
                      const t = n.find((t) => t.id === e.id);
                      if (t) {
                        if (x(t.getFilterFn(), e.value, t)) return !1;
                      }
                      return !0;
                    });
              });
          }),
            (e.resetColumnFilters = (t) => {
              var n, l;
              e.setColumnFilters(
                t
                  ? []
                  : null !=
                      (n =
                        null == (l = e.initialState) ? void 0 : l.columnFilters)
                    ? n
                    : [],
              );
            }),
            (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
            (e.getFilteredRowModel = () => (
              !e._getFilteredRowModel &&
                e.options.getFilteredRowModel &&
                (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
              e.options.manualFiltering || !e._getFilteredRowModel
                ? e.getPreFilteredRowModel()
                : e._getFilteredRowModel()
            ));
        },
      };
      function x(e, t, n) {
        return (
          (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
          "undefined" === typeof t ||
          ("string" === typeof t && !t)
        );
      }
      const _ = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              const l = n.getValue(e);
              return t + ("number" === typeof l ? l : 0);
            }, 0),
          min: (e, t, n) => {
            let l;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (l > n || (void 0 === l && n >= n)) && (l = n);
              }),
              l
            );
          },
          max: (e, t, n) => {
            let l;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (l < n || (void 0 === l && n >= n)) && (l = n);
              }),
              l
            );
          },
          extent: (e, t, n) => {
            let l, o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n &&
                  (void 0 === l
                    ? n >= n && (l = o = n)
                    : (l > n && (l = n), o < n && (o = n)));
              }),
              [l, o]
            );
          },
          mean: (e, t) => {
            let n = 0,
              l = 0;
            if (
              (t.forEach((t) => {
                let o = t.getValue(e);
                null != o && (o = +o) >= o && (++n, (l += o));
              }),
              n)
            )
              return l / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            const n = t.map((t) => t.getValue(e));
            if (
              ((l = n),
              !Array.isArray(l) || !l.every((e) => "number" === typeof e))
            )
              return;
            var l;
            if (1 === n.length) return n[0];
            const o = Math.floor(n.length / 2),
              i = n.sort((e, t) => e - t);
            return n.length % 2 !== 0 ? i[o] : (i[o - 1] + i[o]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        y = {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, n;
              return null !=
                (t =
                  null == (n = e.getValue()) || null == n.toString
                    ? void 0
                    : n.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: i("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            (e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id],
              );
            }),
              (e.getCanGroup = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableGrouping) || n) &&
                  (null == (l = t.options.enableGrouping) || l) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                const t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                const n = t.getCoreRowModel().flatRows[0],
                  l = null == n ? void 0 : n.getValue(e.id);
                return "number" === typeof l
                  ? _.sum
                  : "[object Date]" === Object.prototype.toString.call(l)
                    ? _.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var n, l;
                if (!e) throw new Error();
                return r(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (n =
                          null == (l = t.options.aggregationFns)
                            ? void 0
                            : l[e.columnDef.aggregationFn])
                      ? n
                      : _[e.columnDef.aggregationFn];
              });
          },
          createTable: (e) => {
            (e.setGrouping = (t) =>
              null == e.options.onGroupingChange
                ? void 0
                : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var n, l;
                e.setGrouping(
                  t
                    ? []
                    : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.grouping)
                      ? n
                      : [],
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () => (
                !e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()
              ));
          },
          createRow: (e, t) => {
            (e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (n) => {
                if (e._groupingValuesCache.hasOwnProperty(n))
                  return e._groupingValuesCache[n];
                const l = t.getColumn(n);
                return null != l && l.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[n] = l.columnDef.getGroupingValue(
                      e.original,
                    )),
                    e._groupingValuesCache[n])
                  : e.getValue(n);
              }),
              (e._groupingValuesCache = {});
          },
          createCell: (e, t, n, l) => {
            (e.getIsGrouped = () =>
              t.getIsGrouped() && t.id === n.groupingColumnId),
              (e.getIsPlaceholder = () =>
                !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !(null == (t = n.subRows) || !t.length)
                );
              });
          },
        };
      const E = {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: i("columnOrder", e),
          }),
          createColumn: (e, t) => {
            (e.getIndex = u(
              (e) => [L(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              s(t.options, "debugColumns"),
            )),
              (e.getIsFirstColumn = (n) => {
                var l;
                return (null == (l = L(t, n)[0]) ? void 0 : l.id) === e.id;
              }),
              (e.getIsLastColumn = (n) => {
                var l;
                const o = L(t, n);
                return (null == (l = o[o.length - 1]) ? void 0 : l.id) === e.id;
              });
          },
          createTable: (e) => {
            (e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange
                ? void 0
                : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var n;
                e.setColumnOrder(
                  t ? [] : null != (n = e.initialState.columnOrder) ? n : [],
                );
              }),
              (e._getOrderColumnsFn = u(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, n) => (l) => {
                  let o = [];
                  if (null != e && e.length) {
                    const t = [...e],
                      n = [...l];
                    for (; n.length && t.length; ) {
                      const e = t.shift(),
                        l = n.findIndex((t) => t.id === e);
                      l > -1 && o.push(n.splice(l, 1)[0]);
                    }
                    o = [...o, ...n];
                  } else o = l;
                  return (function (e, t, n) {
                    if (null == t || !t.length || !n) return e;
                    const l = e.filter((e) => !t.includes(e.id));
                    return "remove" === n
                      ? l
                      : [
                          ...t
                            .map((t) => e.find((e) => e.id === t))
                            .filter(Boolean),
                          ...l,
                        ];
                  })(o, t, n);
                },
                s(e.options, "debugTable"),
              ));
          },
        },
        z = {
          getInitialState: (e) => ({
            columnPinning: { left: [], right: [] },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnPinningChange: i("columnPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (n) => {
              const l = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, o, i, r, a, u;
                return "right" === n
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left)
                        ? i
                        : []
                      ).filter((e) => !(null != l && l.includes(e))),
                      right: [
                        ...(null != (r = null == e ? void 0 : e.right)
                          ? r
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        ...l,
                      ],
                    }
                  : "left" === n
                    ? {
                        left: [
                          ...(null != (a = null == e ? void 0 : e.left)
                            ? a
                            : []
                          ).filter((e) => !(null != l && l.includes(e))),
                          ...l,
                        ],
                        right: (null != (u = null == e ? void 0 : e.right)
                          ? u
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        right: (null != (o = null == e ? void 0 : e.right)
                          ? o
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, l, o;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (l =
                        null != (o = t.options.enableColumnPinning)
                          ? o
                          : t.options.enablePinning) ||
                      l)
                  );
                })),
              (e.getIsPinned = () => {
                const n = e.getLeafColumns().map((e) => e.id),
                  { left: l, right: o } = t.getState().columnPinning,
                  i = n.some((e) => (null == l ? void 0 : l.includes(e))),
                  r = n.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "left" : !!r && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, l;
                const o = e.getIsPinned();
                return o
                  ? null !=
                    (n =
                      null == (l = t.getState().columnPinning) ||
                      null == (l = l[o])
                        ? void 0
                        : l.indexOf(e.id))
                    ? n
                    : -1
                  : 0;
              });
          },
          createRow: (e, t) => {
            (e.getCenterVisibleCells = u(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right,
              ],
              (e, t, n) => {
                const l = [...(null != t ? t : []), ...(null != n ? n : [])];
                return e.filter((e) => !l.includes(e.column.id));
              },
              s(t.options, "debugRows"),
            )),
              (e.getLeftVisibleCells = u(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                s(t.options, "debugRows"),
              )),
              (e.getRightVisibleCells = u(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.right,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                s(t.options, "debugRows"),
              ));
          },
          createTable: (e) => {
            (e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var n, l;
                return e.setColumnPinning(
                  t
                    ? { left: [], right: [] }
                    : null !=
                        (n =
                          null == (l = e.initialState)
                            ? void 0
                            : l.columnPinning)
                      ? n
                      : { left: [], right: [] },
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var n;
                const l = e.getState().columnPinning;
                var o, i;
                return t
                  ? Boolean(null == (n = l[t]) ? void 0 : n.length)
                  : Boolean(
                      (null == (o = l.left) ? void 0 : o.length) ||
                        (null == (i = l.right) ? void 0 : i.length),
                    );
              }),
              (e.getLeftLeafColumns = u(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                s(e.options, "debugColumns"),
              )),
              (e.getRightLeafColumns = u(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                s(e.options, "debugColumns"),
              )),
              (e.getCenterLeafColumns = u(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, n) => {
                  const l = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !l.includes(e.id));
                },
                s(e.options, "debugColumns"),
              ));
          },
        },
        G = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        A = {
          getDefaultColumnDef: () => G,
          getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: {
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              isResizingColumn: !1,
              columnSizingStart: [],
            },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: i("columnSizing", e),
            onColumnSizingInfoChange: i("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var n, l, o;
              const i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : G.minSize,
                  null != (l = null != i ? i : e.columnDef.size) ? l : G.size,
                ),
                null != (o = e.columnDef.maxSize) ? o : G.maxSize,
              );
            }),
              (e.getStart = u(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(0, e.getIndex(t))
                    .reduce((e, t) => e + t.getSize(), 0),
                s(t.options, "debugColumns"),
              )),
              (e.getAfter = u(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(e.getIndex(t) + 1)
                    .reduce((e, t) => e + t.getSize(), 0),
                s(t.options, "debugColumns"),
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: n, ...l } = t;
                  return l;
                });
              }),
              (e.getCanResize = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableResizing) || n) &&
                  (null == (l = t.options.enableColumnResizing) || l)
                );
              }),
              (e.getIsResizing = () =>
                t.getState().columnSizingInfo.isResizingColumn === e.id);
          },
          createHeader: (e, t) => {
            (e.getSize = () => {
              let t = 0;
              const n = (e) => {
                var l;
                e.subHeaders.length
                  ? e.subHeaders.forEach(n)
                  : (t += null != (l = e.column.getSize()) ? l : 0);
              };
              return n(e), t;
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  const t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (n) => {
                const l = t.getColumn(e.column.id),
                  o = null == l ? void 0 : l.getCanResize();
                return (i) => {
                  if (!l || !o) return;
                  if (
                    (null == i.persist || i.persist(),
                    H(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  const r = e.getSize(),
                    a = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[l.id, l.getSize()]],
                    u = H(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    s = {},
                    g = (e, n) => {
                      "number" === typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var l, o;
                          const i =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            r =
                              (n -
                                (null !=
                                (l = null == e ? void 0 : e.startOffset)
                                  ? l
                                  : 0)) *
                              i,
                            a = Math.max(
                              r /
                                (null != (o = null == e ? void 0 : e.startSize)
                                  ? o
                                  : 0),
                              -0.999999,
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, n] = e;
                              s[t] =
                                Math.round(100 * Math.max(n + n * a, 0)) / 100;
                            }),
                            { ...e, deltaOffset: r, deltaPercentage: a }
                          );
                        }),
                        ("onChange" !== t.options.columnResizeMode &&
                          "end" !== e) ||
                          t.setColumnSizing((e) => ({ ...e, ...s })));
                    },
                    d = (e) => g("move", e),
                    c = (e) => {
                      g("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        }));
                    },
                    p = n || "undefined" !== typeof document ? document : null,
                    f = {
                      moveHandler: (e) => d(e.clientX),
                      upHandler: (e) => {
                        null == p ||
                          p.removeEventListener("mousemove", f.moveHandler),
                          null == p ||
                            p.removeEventListener("mouseup", f.upHandler),
                          c(e.clientX);
                      },
                    },
                    m = {
                      moveHandler: (e) => (
                        e.cancelable &&
                          (e.preventDefault(), e.stopPropagation()),
                        d(e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        null == p ||
                          p.removeEventListener("touchmove", m.moveHandler),
                          null == p ||
                            p.removeEventListener("touchend", m.upHandler),
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          c(null == (t = e.touches[0]) ? void 0 : t.clientX);
                      },
                    },
                    S = !!(function () {
                      if ("boolean" === typeof D) return D;
                      let e = !1;
                      try {
                        const t = {
                            get passive() {
                              return (e = !0), !1;
                            },
                          },
                          n = () => {};
                        window.addEventListener("test", n, t),
                          window.removeEventListener("test", n);
                      } catch (t) {
                        e = !1;
                      }
                      return (D = e), D;
                    })() && { passive: !1 };
                  H(i)
                    ? (null == p ||
                        p.addEventListener("touchmove", m.moveHandler, S),
                      null == p ||
                        p.addEventListener("touchend", m.upHandler, S))
                    : (null == p ||
                        p.addEventListener("mousemove", f.moveHandler, S),
                      null == p ||
                        p.addEventListener("mouseup", f.upHandler, S)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: u,
                      startSize: r,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: a,
                      isResizingColumn: l.id,
                    }));
                };
              });
          },
          createTable: (e) => {
            (e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange
                ? void 0
                : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var n;
                e.setColumnSizing(
                  t ? {} : null != (n = e.initialState.columnSizing) ? n : {},
                );
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var n;
                e.setColumnSizingInfo(
                  t
                    ? {
                        startOffset: null,
                        startSize: null,
                        deltaOffset: null,
                        deltaPercentage: null,
                        isResizingColumn: !1,
                        columnSizingStart: [],
                      }
                    : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : {
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          isResizingColumn: !1,
                          columnSizingStart: [],
                        },
                );
              }),
              (e.getTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getRightHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              });
          },
        };
      let D = null;
      function H(e) {
        return "touchstart" === e.type;
      }
      function L(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      const O = {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: i("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            (e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange
                ? void 0
                : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var n;
                return e.setRowSelection(
                  t ? {} : null != (n = e.initialState.rowSelection) ? n : {},
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((n) => {
                  t = "undefined" !== typeof t ? t : !e.getIsAllRowsSelected();
                  const l = { ...n },
                    o = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? o.forEach((e) => {
                          e.getCanSelect() && (l[e.id] = !0);
                        })
                      : o.forEach((e) => {
                          delete l[e.id];
                        }),
                    l
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  const l =
                      "undefined" !== typeof t
                        ? t
                        : !e.getIsAllPageRowsSelected(),
                    o = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      T(o, t.id, l, !0, e);
                    }),
                    o
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = u(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                s(e.options, "debugTable"),
              )),
              (e.getFilteredSelectedRowModel = u(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                s(e.options, "debugTable"),
              )),
              (e.getGroupedSelectedRowModel = u(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                s(e.options, "debugTable"),
              )),
              (e.getIsAllRowsSelected = () => {
                const t = e.getFilteredRowModel().flatRows,
                  { rowSelection: n } = e.getState();
                let l = Boolean(t.length && Object.keys(n).length);
                return (
                  l && t.some((e) => e.getCanSelect() && !n[e.id]) && (l = !1),
                  l
                );
              }),
              (e.getIsAllPageRowsSelected = () => {
                const t = e
                    .getPaginationRowModel()
                    .flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: n } = e.getState();
                let l = !!t.length;
                return l && t.some((e) => !n[e.id]) && (l = !1), l;
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                const n = Object.keys(
                  null != (t = e.getState().rowSelection) ? t : {},
                ).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                const t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e.toggleSelected = (n, l) => {
              const o = e.getIsSelected();
              t.setRowSelection((i) => {
                var r;
                if (
                  ((n = "undefined" !== typeof n ? n : !o),
                  e.getCanSelect() && o === n)
                )
                  return i;
                const a = { ...i };
                return (
                  T(
                    a,
                    e.id,
                    n,
                    null == (r = null == l ? void 0 : l.selectChildren) || r,
                    t,
                  ),
                  a
                );
              });
            }),
              (e.getIsSelected = () => {
                const { rowSelection: n } = t.getState();
                return q(e, n);
              }),
              (e.getIsSomeSelected = () => {
                const { rowSelection: n } = t.getState();
                return "some" === k(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                const { rowSelection: n } = t.getState();
                return "all" === k(e, n);
              }),
              (e.getCanSelect = () => {
                var n;
                return "function" === typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (n = t.options.enableRowSelection) || n;
              }),
              (e.getCanSelectSubRows = () => {
                var n;
                return "function" === typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (n = t.options.enableSubRowSelection) || n;
              }),
              (e.getCanMultiSelect = () => {
                var n;
                return "function" === typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (n = t.options.enableMultiRowSelection) || n;
              }),
              (e.getToggleSelectedHandler = () => {
                const t = e.getCanSelect();
                return (n) => {
                  var l;
                  t &&
                    e.toggleSelected(
                      null == (l = n.target) ? void 0 : l.checked,
                    );
                };
              });
          },
        },
        T = (e, t, n, l, o) => {
          var i;
          const r = o.getRow(t, !0);
          n
            ? (r.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              r.getCanSelect() && (e[t] = !0))
            : delete e[t],
            l &&
              null != (i = r.subRows) &&
              i.length &&
              r.getCanSelectSubRows() &&
              r.subRows.forEach((t) => T(e, t.id, n, l, o));
        };
      function B(e, t) {
        const n = e.getState().rowSelection,
          l = [],
          o = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                const r = q(e, n);
                if (
                  (r && (l.push(e), (o[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  r)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: l, rowsById: o };
      }
      function q(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function k(e, t, n) {
        var l;
        if (null == (l = e.subRows) || !l.length) return !1;
        let o = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || o) &&
              (e.getCanSelect() && (q(e, t) ? (i = !0) : (o = !1)),
              e.subRows && e.subRows.length)
            ) {
              const n = k(e, t);
              "all" === n
                ? (i = !0)
                : "some" === n
                  ? ((i = !0), (o = !1))
                  : (o = !1);
            }
          }),
          o ? "all" : !!i && "some"
        );
      }
      const N = /([0-9]+)/gm;
      function j(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function U(e) {
        return "number" === typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" === typeof e
            ? e
            : "";
      }
      function X(e, t) {
        const n = e.split(N).filter(Boolean),
          l = t.split(N).filter(Boolean);
        for (; n.length && l.length; ) {
          const e = n.shift(),
            t = l.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            r = [o, i].sort();
          if (isNaN(r[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
          } else {
            if (isNaN(r[1])) return isNaN(o) ? -1 : 1;
            if (o > i) return 1;
            if (i > o) return -1;
          }
        }
        return n.length - l.length;
      }
      const K = {
          alphanumeric: (e, t, n) =>
            X(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            X(U(e.getValue(n)), U(t.getValue(n))),
          text: (e, t, n) =>
            j(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => j(U(e.getValue(n)), U(t.getValue(n))),
          datetime: (e, t, n) => {
            const l = e.getValue(n),
              o = t.getValue(n);
            return l > o ? 1 : l < o ? -1 : 0;
          },
          basic: (e, t, n) => j(e.getValue(n), t.getValue(n)),
        },
        $ = [
          c,
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: i("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, l;
                  const o = e.columns;
                  return (
                    null ==
                      (n = o.length
                        ? o.some((e) => e.getIsVisible())
                        : null == (l = t.getState().columnVisibility)
                          ? void 0
                          : l[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (l = t.options.enableHiding) || l)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = u(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                s(t.options, "debugRows"),
              )),
                (e.getVisibleCells = u(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  s(t.options, "debugRows"),
                ));
            },
            createTable: (e) => {
              const t = (t, n) =>
                u(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    ),
                  s(e.options, "debugColumns"),
                );
              (e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
                (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
                (e.getLeftVisibleLeafColumns = t(0, () =>
                  e.getLeftLeafColumns(),
                )),
                (e.getRightVisibleLeafColumns = t(0, () =>
                  e.getRightLeafColumns(),
                )),
                (e.getCenterVisibleLeafColumns = t(0, () =>
                  e.getCenterLeafColumns(),
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                        ? n
                        : {},
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e.getAllLeafColumns().reduce(
                        (e, n) => ({
                          ...e,
                          [n.id]:
                            t || !(null != n.getCanHide && n.getCanHide()),
                        }),
                        {},
                      ),
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible()),
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked,
                  );
                });
            },
          },
          E,
          z,
          m,
          V,
          {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: i("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                const l =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" === typeof l || "number" === typeof l;
              },
            }),
            createColumn: (e, t) => {
              e.getCanGlobalFilter = () => {
                var n, l, o, i;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (l = t.options.enableGlobalFilter) || l) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => P.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  const { globalFilterFn: l } = e.options;
                  return r(l)
                    ? l
                    : "auto" === l
                      ? e.getGlobalAutoFilterFn()
                      : null !=
                          (t =
                            null == (n = e.options.filterFns) ? void 0 : n[l])
                        ? t
                        : P[l];
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: i("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let l = !1;
                for (const t of n) {
                  const n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return K.datetime;
                  if (
                    "string" === typeof n &&
                    ((l = !0), n.split(N).length > 1)
                  )
                    return K.alphanumeric;
                }
                return l ? K.text : K.basic;
              }),
                (e.getAutoSortDir = () => {
                  const n = t.getFilteredRowModel().flatRows[0];
                  return "string" ===
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? "asc"
                    : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, l;
                  if (!e) throw new Error();
                  return r(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                      ? e.getAutoSortingFn()
                      : null !=
                          (n =
                            null == (l = t.options.sortingFns)
                              ? void 0
                              : l[e.columnDef.sortingFn])
                        ? n
                        : K[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, l) => {
                  const o = e.getNextSortingOrder(),
                    i = "undefined" !== typeof n && null !== n;
                  t.setSorting((r) => {
                    const a = null == r ? void 0 : r.find((t) => t.id === e.id),
                      u =
                        null == r ? void 0 : r.findIndex((t) => t.id === e.id);
                    let s,
                      g = [],
                      d = i ? n : "desc" === o;
                    var c;
                    ((s =
                      null != r && r.length && e.getCanMultiSort() && l
                        ? a
                          ? "toggle"
                          : "add"
                        : null != r && r.length && u !== r.length - 1
                          ? "replace"
                          : a
                            ? "toggle"
                            : "replace"),
                    "toggle" === s && (i || o || (s = "remove")),
                    "add" === s)
                      ? ((g = [...r, { id: e.id, desc: d }]),
                        g.splice(
                          0,
                          g.length -
                            (null != (c = t.options.maxMultiSortColCount)
                              ? c
                              : Number.MAX_SAFE_INTEGER),
                        ))
                      : (g =
                          "toggle" === s
                            ? r.map((t) =>
                                t.id === e.id ? { ...t, desc: d } : t,
                              )
                            : "remove" === s
                              ? r.filter((t) => t.id !== e.id)
                              : [{ id: e.id, desc: d }]);
                    return g;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, l;
                  return (
                    null !=
                    (n =
                      null != (l = e.columnDef.sortDescFirst)
                        ? l
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir()
                  )
                    ? "desc"
                    : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var l, o;
                  const i = e.getFirstSortDir(),
                    r = e.getIsSorted();
                  return r
                    ? !!(
                        r === i ||
                        (null != (l = t.options.enableSortingRemoval) && !l) ||
                        (n && null != (o = t.options.enableMultiRemove) && !o)
                      ) && ("desc" === r ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (l = t.options.enableSorting) || l) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, l;
                  return null !=
                    (n =
                      null != (l = e.columnDef.enableMultiSort)
                        ? l
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  const l =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!l && (l.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, l;
                  return null !=
                    (n =
                      null == (l = t.getState().sorting)
                        ? void 0
                        : l.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : [],
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  const n = e.getCanSort();
                  return (l) => {
                    n &&
                      (null == l.persist || l.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(l)),
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, l;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                          (n =
                            null == (l = e.initialState) ? void 0 : l.sorting)
                        ? n
                        : [],
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () => (
                  !e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel()
                ));
            },
          },
          y,
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: i("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var l, o;
                if (t) {
                  if (
                    null !=
                    (l =
                      null != (o = e.options.autoResetAll)
                        ? o
                        : e.options.autoResetExpanded)
                      ? l
                      : !e.options.manualExpanding
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetExpanded(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, l;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                          (n =
                            null == (l = e.initialState) ? void 0 : l.expanded)
                        ? n
                        : {},
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return "boolean" === typeof t
                    ? !0 === t
                    : !!Object.keys(t).length &&
                        !e
                          .getRowModel()
                          .flatRows.some((e) => !e.getIsExpanded());
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      const n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () => (
                  !e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel()
                ));
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((l) => {
                  var o;
                  const i = !0 === l || !(null == l || !l[e.id]);
                  let r = {};
                  if (
                    (!0 === l
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          r[e] = !0;
                        })
                      : (r = l),
                    (n = null != (o = n) ? o : !i),
                    !i && n)
                  )
                    return { ...r, [e.id]: !0 };
                  if (i && !n) {
                    const { [e.id]: t, ...n } = r;
                    return n;
                  }
                  return l;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  const l = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === l || (null == l ? void 0 : l[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, l, o;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (l = t.options.enableExpanding) || l) &&
                        !(null == (o = e.subRows) || !o.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    l = e;
                  for (; n && l.parentId; )
                    (l = t.getRow(l.parentId, !0)), (n = l.getIsExpanded());
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  const t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: {
                pageIndex: 0,
                pageSize: 10,
                ...(null == e ? void 0 : e.pagination),
              },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: i("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var l, o;
                if (t) {
                  if (
                    null !=
                    (l =
                      null != (o = e.options.autoResetAll)
                        ? o
                        : e.options.autoResetPageIndex)
                      ? l
                      : !e.options.manualPagination
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetPageIndex(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => o(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t
                      ? { pageIndex: 0, pageSize: 10 }
                      : null != (n = e.initialState.pagination)
                        ? n
                        : { pageIndex: 0, pageSize: 10 },
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let l = o(t, n.pageIndex);
                    const i =
                      "undefined" === typeof e.options.pageCount ||
                      -1 === e.options.pageCount
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (l = Math.max(0, Math.min(l, i))), { ...n, pageIndex: l }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, l;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                          (n =
                            null == (l = e.initialState) ||
                            null == (l = l.pagination)
                              ? void 0
                              : l.pageIndex)
                        ? n
                        : 0,
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, l;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                          (n =
                            null == (l = e.initialState) ||
                            null == (l = l.pagination)
                              ? void 0
                              : l.pageSize)
                        ? n
                        : 10,
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    const n = Math.max(1, o(t, e.pageSize)),
                      l = e.pageSize * e.pageIndex,
                      i = Math.floor(l / n);
                    return { ...e, pageIndex: i, pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var l;
                    let i = o(t, null != (l = e.options.pageCount) ? l : -1);
                    return (
                      "number" === typeof i && (i = Math.max(-1, i)),
                      { ...n, pageCount: i }
                    );
                  })),
                (e.getPageOptions = u(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...new Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  s(e.options, "debugTable"),
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  const { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () => (
                  !e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()
                )),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize,
                      );
                }),
                (e.getRowCount = () => {
                  var t;
                  return null != (t = e.options.rowCount)
                    ? t
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          {
            getInitialState: (e) => ({
              rowPinning: { top: [], bottom: [] },
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: i("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, l, o) => {
                const i = l
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  r = o
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  a = new Set([...r, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, l, o, i, r, u;
                  return "bottom" === n
                    ? {
                        top: (null != (o = null == e ? void 0 : e.top)
                          ? o
                          : []
                        ).filter((e) => !(null != a && a.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                          ...Array.from(a),
                        ],
                      }
                    : "top" === n
                      ? {
                          top: [
                            ...(null != (r = null == e ? void 0 : e.top)
                              ? r
                              : []
                            ).filter((e) => !(null != a && a.has(e))),
                            ...Array.from(a),
                          ],
                          bottom: (null != (u = null == e ? void 0 : e.bottom)
                            ? u
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                        }
                      : {
                          top: (null != (t = null == e ? void 0 : e.top)
                            ? t
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                          bottom: (null != (l = null == e ? void 0 : e.bottom)
                            ? l
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                        };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  const { enableRowPinning: l, enablePinning: o } = t.options;
                  return "function" === typeof l
                    ? l(e)
                    : null == (n = null != l ? l : o) || n;
                }),
                (e.getIsPinned = () => {
                  const n = [e.id],
                    { top: l, bottom: o } = t.getState().rowPinning,
                    i = n.some((e) => (null == l ? void 0 : l.includes(e))),
                    r = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "top" : !!r && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, l;
                  const o = e.getIsPinned();
                  if (!o) return -1;
                  const i =
                    null ==
                    (n = "top" === o ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (l = null == i ? void 0 : i.indexOf(e.id))
                    ? l
                    : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, l;
                  return e.setRowPinning(
                    t
                      ? { top: [], bottom: [] }
                      : null !=
                          (n =
                            null == (l = e.initialState)
                              ? void 0
                              : l.rowPinning)
                        ? n
                        : { top: [], bottom: [] },
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n;
                  const l = e.getState().rowPinning;
                  var o, i;
                  return t
                    ? Boolean(null == (n = l[t]) ? void 0 : n.length)
                    : Boolean(
                        (null == (o = l.top) ? void 0 : o.length) ||
                          (null == (i = l.bottom) ? void 0 : i.length),
                      );
                }),
                (e._getPinnedRows = (t, n, l) => {
                  var o;
                  return (
                    null == (o = e.options.keepPinnedRows) || o
                      ? (null != n ? n : []).map((t) => {
                          const n = e.getRow(t, !0);
                          return n.getIsAllParentsExpanded() ? n : null;
                        })
                      : (null != n ? n : []).map((e) =>
                          t.find((t) => t.id === e),
                        )
                  )
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: l }));
                }),
                (e.getTopRows = u(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (t, n) => e._getPinnedRows(t, n, "top"),
                  s(e.options, "debugRows"),
                )),
                (e.getBottomRows = u(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (t, n) => e._getPinnedRows(t, n, "bottom"),
                  s(e.options, "debugRows"),
                )),
                (e.getCenterRows = u(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    const l = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !l.has(e.id));
                  },
                  s(e.options, "debugRows"),
                ));
            },
          },
          O,
          A,
        ];
      function Z(e) {
        var t, n;
        const l = [...$, ...(null != (t = e._features) ? t : [])];
        let i = { _features: l };
        const r = i._features.reduce(
          (e, t) =>
            Object.assign(
              e,
              null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(i),
            ),
          {},
        );
        let a = { ...(null != (n = e.initialState) ? n : {}) };
        i._features.forEach((e) => {
          var t;
          a =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(a))
              ? t
              : a;
        });
        const g = [];
        let d = !1;
        const c = {
          _features: l,
          options: { ...r, ...e },
          initialState: a,
          _queue: (e) => {
            g.push(e),
              d ||
                ((d = !0),
                Promise.resolve()
                  .then(() => {
                    for (; g.length; ) g.shift()();
                    d = !1;
                  })
                  .catch((e) =>
                    setTimeout(() => {
                      throw e;
                    }),
                  ));
          },
          reset: () => {
            i.setState(i.initialState);
          },
          setOptions: (e) => {
            const t = o(e, i.options);
            i.options = ((e) =>
              i.options.mergeOptions
                ? i.options.mergeOptions(r, e)
                : { ...r, ...e })(t);
          },
          getState: () => i.options.state,
          setState: (e) => {
            null == i.options.onStateChange || i.options.onStateChange(e);
          },
          _getRowId: (e, t, n) => {
            var l;
            return null !=
              (l =
                null == i.options.getRowId
                  ? void 0
                  : i.options.getRowId(e, t, n))
              ? l
              : "".concat(n ? [n.id, t].join(".") : t);
          },
          getCoreRowModel: () => (
            i._getCoreRowModel ||
              (i._getCoreRowModel = i.options.getCoreRowModel(i)),
            i._getCoreRowModel()
          ),
          getRowModel: () => i.getPaginationRowModel(),
          getRow: (e, t) => {
            let n = (t ? i.getPrePaginationRowModel() : i.getRowModel())
              .rowsById[e];
            if (!n && ((n = i.getCoreRowModel().rowsById[e]), !n))
              throw new Error();
            return n;
          },
          _getDefaultColumnDef: u(
            () => [i.options.defaultColumn],
            (e) => {
              var t;
              return (
                (e = null != (t = e) ? t : {}),
                {
                  header: (e) => {
                    const t = e.header.column.columnDef;
                    return t.accessorKey
                      ? t.accessorKey
                      : t.accessorFn
                        ? t.id
                        : null;
                  },
                  cell: (e) => {
                    var t, n;
                    return null !=
                      (t =
                        null == (n = e.renderValue()) || null == n.toString
                          ? void 0
                          : n.toString())
                      ? t
                      : null;
                  },
                  ...i._features.reduce(
                    (e, t) =>
                      Object.assign(
                        e,
                        null == t.getDefaultColumnDef
                          ? void 0
                          : t.getDefaultColumnDef(),
                      ),
                    {},
                  ),
                  ...e,
                }
              );
            },
            s(e, "debugColumns"),
          ),
          _getColumnDefs: () => i.options.columns,
          getAllColumns: u(
            () => [i._getColumnDefs()],
            (e) => {
              const t = function (e, n, l) {
                return (
                  void 0 === l && (l = 0),
                  e.map((e) => {
                    const o = (function (e, t, n, l) {
                        var o, i;
                        const r = { ...e._getDefaultColumnDef(), ...t },
                          a = r.accessorKey;
                        let g,
                          d =
                            null !=
                            (o =
                              null != (i = r.id)
                                ? i
                                : a
                                  ? "function" ===
                                    typeof String.prototype.replaceAll
                                    ? a.replaceAll(".", "_")
                                    : a.replace(/\./g, "_")
                                  : void 0)
                              ? o
                              : "string" === typeof r.header
                                ? r.header
                                : void 0;
                        if (
                          (r.accessorFn
                            ? (g = r.accessorFn)
                            : a &&
                              (g = a.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (const l of a.split(".")) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[l];
                                    }
                                    return t;
                                  }
                                : (e) => e[r.accessorKey]),
                          !d)
                        )
                          throw new Error();
                        let c = {
                          id: "".concat(String(d)),
                          accessorFn: g,
                          parent: l,
                          depth: n,
                          columnDef: r,
                          columns: [],
                          getFlatColumns: u(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                c,
                                ...(null == (e = c.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            s(e.options, "debugColumns"),
                          ),
                          getLeafColumns: u(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              if (null != (t = c.columns) && t.length) {
                                let t = c.columns.flatMap((e) =>
                                  e.getLeafColumns(),
                                );
                                return e(t);
                              }
                              return [c];
                            },
                            s(e.options, "debugColumns"),
                          ),
                        };
                        for (const u of e._features)
                          null == u.createColumn || u.createColumn(c, e);
                        return c;
                      })(i, e, l, n),
                      r = e;
                    return (
                      (o.columns = r.columns ? t(r.columns, o, l + 1) : []), o
                    );
                  })
                );
              };
              return t(e);
            },
            s(e, "debugColumns"),
          ),
          getAllFlatColumns: u(
            () => [i.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            s(e, "debugColumns"),
          ),
          _getAllFlatColumnsById: u(
            () => [i.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            s(e, "debugColumns"),
          ),
          getAllLeafColumns: u(
            () => [i.getAllColumns(), i._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            s(e, "debugColumns"),
          ),
          getColumn: (e) => i._getAllFlatColumnsById()[e],
        };
        Object.assign(i, c);
        for (let o = 0; o < i._features.length; o++) {
          const e = i._features[o];
          null == e || null == e.createTable || e.createTable(i);
        }
        return i;
      }
      function J() {
        return (e) =>
          u(
            () => [e.options.data],
            (t) => {
              const n = { rows: [], flatRows: [], rowsById: {} },
                l = function (t, o, i) {
                  void 0 === o && (o = 0);
                  const r = [];
                  for (let u = 0; u < t.length; u++) {
                    const s = f(
                      e,
                      e._getRowId(t[u], u, i),
                      t[u],
                      u,
                      o,
                      void 0,
                      null == i ? void 0 : i.id,
                    );
                    var a;
                    if (
                      (n.flatRows.push(s),
                      (n.rowsById[s.id] = s),
                      r.push(s),
                      e.options.getSubRows)
                    )
                      (s.originalSubRows = e.options.getSubRows(t[u], u)),
                        null != (a = s.originalSubRows) &&
                          a.length &&
                          (s.subRows = l(s.originalSubRows, o + 1, s));
                  }
                  return r;
                };
              return (n.rows = l(t)), n;
            },
            s(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
    },
  },
]);
//# sourceMappingURL=931.975aa7fc.chunk.js.map
