"use strict";
(self.webpackChunkwre_frontend = self.webpackChunkwre_frontend || []).push([
  [626],
  {
    8626: (e, t, s) => {
      s.r(t), s.d(t, { default: () => p });
      var i = s(5043),
        n = s(6387),
        a = s(5732),
        r = s(2339),
        l = s(8100),
        o = s(579);
      const d = (e) => {
        let { onListingAdded: t } = e;
        const { agents: s, loading: d, error: c } = (0, a._)(),
          [u, h] = (0, i.useState)({}),
          [p, g] = (0, i.useState)({
            mlsId: "",
            compensation: "",
            address: "",
            city: "",
            zip: "",
            listingBroker: "",
            phone: "",
            email: "",
          }),
          m = { color: "red", fontSize: "14px", marginTop: "5px" },
          x = {
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box",
          },
          j = {
            marginBottom: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
          },
          y = (e) => {
            const { name: t, value: i } = e.target;
            if (
              (g((e) => ({ ...e, [t]: i })),
              h((e) => ({ ...e, [t]: "" })),
              "listingBroker" === t)
            ) {
              const e = Object.values(s).find((e) => e.Name === i);
              e &&
                (g((t) => ({ ...t, phone: e.CellNumber, email: e.Email })),
                h((e) => ({ ...e, phone: "", email: "" })));
            }
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.l$, {
              position: "top-right",
              toastOptions: {
                duration: 5e3,
                style: { background: "#363636", color: "#fff" },
              },
            }),
            (0, o.jsxs)("form", {
              onSubmit: async (e) => {
                e.preventDefault();
                const s = {};
                if (
                  ((0, l.en)(p.mlsId) ||
                    (s.mlsId = "Valid MLS ID is required."),
                  (0, l.p)(p.compensation) ||
                    (s.compensation =
                      "Compensation must be a number between 0 and 100."),
                  (0, l.jl)(p.address) || (s.address = "Address is required."),
                  (0, l.Y$)(p.city) || (s.city = "City is required."),
                  (0, l.q9)(p.zip) || (s.zip = "Valid ZIP code is required."),
                  (0, l.O2)(p.listingBroker) ||
                    (s.listingBroker = "Listing broker is required."),
                  (0, l.FY)(p.phone) ||
                    (s.phone = "Valid phone number is required."),
                  (0, l.DT)(p.email) || (s.email = "Valid email is required."),
                  Object.keys(s).length > 0)
                )
                  return (
                    h(s),
                    console.log("newErrors are ", s),
                    void r.Ay.error("Please correct the errors in the form.")
                  );
                try {
                  const e = localStorage.getItem("token"),
                    s = await fetch(
                      "".concat(n.A.SERVER_URL, "/api/v1/listings"),
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer ".concat(e),
                        },
                        body: JSON.stringify(p),
                      },
                    );
                  if (!s.ok)
                    throw new Error("HTTP error! status: ".concat(s.status));
                  const i = await s.json();
                  console.info("Listing added successfully", i),
                    t(),
                    g({
                      mlsId: "",
                      compensation: "",
                      address: "",
                      city: "",
                      zip: "",
                      listingBroker: "",
                      phone: "",
                      email: "",
                    }),
                    h({}),
                    r.Ay.success("Listing added successfully!");
                } catch (i) {
                  console.error("Error adding listing:", i),
                    r.Ay.error("Failed to add listing. Please try again.");
                }
              },
              style: {
                maxWidth: "800px",
                margin: "0 auto",
                padding: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                "@media (max-width: 768px)": {
                  gridTemplateColumns: "1fr",
                  gap: "10px",
                },
              },
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "MLS ID" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "mlsId",
                      value: p.mlsId,
                      onChange: y,
                      placeholder: "MLS ID",
                      required: !0,
                      "data-testid": "mls-id-input",
                    }),
                    u.mlsId && (0, o.jsx)("p", { style: m, children: u.mlsId }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", {
                      style: j,
                      children: "Compensation %",
                    }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "compensation",
                      value: p.compensation,
                      onChange: y,
                      placeholder: "Compensation %",
                      required: !0,
                      "data-testid": "compensation-input",
                    }),
                    u.compensation &&
                      (0, o.jsx)("p", { style: m, children: u.compensation }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "Address" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "address",
                      value: p.address,
                      onChange: y,
                      placeholder: "Address",
                      required: !0,
                      "data-testid": "address-input",
                    }),
                    u.address &&
                      (0, o.jsx)("p", { style: m, children: u.address }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "City/Town" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "city",
                      value: p.city,
                      onChange: y,
                      placeholder: "City/Town",
                      required: !0,
                      "data-testid": "city-input",
                    }),
                    u.city && (0, o.jsx)("p", { style: m, children: u.city }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "ZIP" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "zip",
                      value: p.zip,
                      onChange: y,
                      placeholder: "ZIP",
                      required: !0,
                      "data-testid": "zip-input",
                    }),
                    u.zip && (0, o.jsx)("p", { style: m, children: u.zip }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", {
                      style: j,
                      children: "Listing Broker",
                    }),
                    (0, o.jsxs)("select", {
                      style: x,
                      name: "listingBroker",
                      value: p.listingBroker,
                      onChange: y,
                      required: !0,
                      "data-testid": "listing-broker-select",
                      children: [
                        (0, o.jsx)("option", {
                          value: "",
                          children: "Select an agent",
                        }),
                        d
                          ? (0, o.jsx)("option", {
                              disabled: !0,
                              children: "Loading agents...",
                            })
                          : Object.values(s).map((e) =>
                              (0, o.jsx)(
                                "option",
                                { value: e.Name, children: e.Name },
                                e.MATRIX_UNIQUE_ID,
                              ),
                            ),
                      ],
                    }),
                    u.listingBroker &&
                      (0, o.jsx)("p", { style: m, children: u.listingBroker }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "Phone" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "phone",
                      value: p.phone,
                      onChange: y,
                      placeholder: "Phone",
                      required: !0,
                      "data-testid": "phone-select",
                    }),
                    u.phone && (0, o.jsx)("p", { style: m, children: u.phone }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("label", { style: j, children: "Email" }),
                    (0, o.jsx)("input", {
                      style: x,
                      name: "email",
                      value: p.email,
                      onChange: y,
                      placeholder: "Email",
                      required: !0,
                      "data-testid": "email-select",
                    }),
                    u.email && (0, o.jsx)("p", { style: m, children: u.email }),
                  ],
                }),
                (0, o.jsx)("button", {
                  type: "submit",
                  style: {
                    gridColumn: "span 2",
                    padding: "15px 30px",
                    fontSize: "20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginTop: "20px",
                  },
                  "data-testid": "add-listing-button",
                  children: "Add Listing",
                }),
              ],
            }),
          ],
        });
      };
      var c = s(7111),
        u = s(8931);
      const h = (e) => {
          let { refreshKey: t } = e;
          const [s, a] = (0, i.useState)([]),
            [r, d] = (0, i.useState)(null),
            [h, p] = (0, i.useState)({}),
            [g, m] = (0, i.useState)(!1),
            [x, j] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            const e = localStorage.getItem("token");
            m(!!e), b(), j((0, l.Fr)());
          }, [t]);
          const y = (0, c.FB)(),
            b = async () => {
              try {
                const e = await fetch(
                  "".concat(n.A.SERVER_URL, "/api/v1/listings"),
                );
                if (!e.ok)
                  throw new Error("HTTP error! status: ".concat(e.status));
                const t = await e.json();
                a(t);
              } catch (e) {
                console.error("Error fetching listings:", e);
              }
            },
            f = (e) => {
              const { name: t, value: s } = e.target;
              p((e) => ({ ...e, [t]: s }));
            },
            w = [
              y.accessor("mlsId", {
                header: "MLS ID",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "mlsId",
                        value: h.mlsId || "",
                        onChange: f,
                      })
                    : (0, l.Zr)(e.getValue()),
              }),
              y.accessor("compensation", {
                header: "Fees",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "compensation",
                        value: h.fees || "",
                        onChange: f,
                      })
                    : "".concat(parseFloat(e.getValue()).toFixed(1), "%"),
              }),
              y.accessor("address", {
                header: "Address",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "address",
                        value: h.address || "",
                        onChange: f,
                      })
                    : (0, l.Zr)(e.getValue()),
              }),
              y.accessor("city", {
                header: "City",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "city",
                        value: h.city || "",
                        onChange: f,
                      })
                    : (0, l.Zr)(e.getValue()),
              }),
              y.accessor("zip", {
                header: "Zip",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "zip",
                        value: h.zip || "",
                        onChange: f,
                      })
                    : e.getValue(),
              }),
              y.accessor("listingBroker", {
                header: "Agent",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "listingBroker",
                        value: h.listingBroker || "",
                        onChange: f,
                      })
                    : (0, l.Zr)(e.getValue()),
              }),
              y.accessor("phone", {
                header: "Phone",
                cell: (e) =>
                  r === e.row.original._id
                    ? (0, o.jsx)("input", {
                        name: "phone",
                        value: h.phone || "",
                        onChange: f,
                      })
                    : e.getValue(),
              }),
              ...(x
                ? []
                : [
                    y.accessor("email", {
                      header: "Email",
                      cell: (e) =>
                        r === e.row.original._id
                          ? (0, o.jsx)("input", {
                              name: "email",
                              value: h.email || "",
                              onChange: f,
                              className: "email-column",
                            })
                          : e.getValue(),
                    }),
                  ]),
              ...(g
                ? [
                    {
                      header: "Actions",
                      cell: (e) =>
                        r === e.row.original._id
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)("button", {
                                  className: "button",
                                  onClick: () =>
                                    (async (e) => {
                                      try {
                                        const t = localStorage.getItem("token"),
                                          s = await fetch(
                                            ""
                                              .concat(
                                                n.A.SERVER_URL,
                                                "/api/v1/listings/",
                                              )
                                              .concat(e),
                                            {
                                              method: "PUT",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization: "Bearer ".concat(
                                                  t,
                                                ),
                                              },
                                              body: JSON.stringify(h),
                                            },
                                          );
                                        if (!s.ok)
                                          throw new Error(
                                            "HTTP error! status: ".concat(
                                              s.status,
                                            ),
                                          );
                                        const i = await s.json();
                                        console.info(
                                          "Listing updated successfully",
                                          i,
                                        ),
                                          d(null),
                                          b();
                                      } catch (t) {
                                        console.error(
                                          "Error updating listing:",
                                          t,
                                        );
                                      }
                                    })(e.row.original._id),
                                  children: "Save",
                                }),
                                (0, o.jsx)("button", {
                                  className: "button cancel",
                                  onClick: () => d(null),
                                  children: "Cancel",
                                }),
                              ],
                            })
                          : (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)("button", {
                                  className: "button",
                                  onClick: () => {
                                    return (
                                      (t = e.row),
                                      d(t.original._id),
                                      void p({ ...t.original })
                                    );
                                    var t;
                                  },
                                  children: "Edit",
                                }),
                                (0, o.jsx)("button", {
                                  className: "button delete",
                                  onClick: () =>
                                    (async (e) => {
                                      try {
                                        const t = localStorage.getItem("token"),
                                          s = await fetch(
                                            ""
                                              .concat(
                                                n.A.SERVER_URL,
                                                "/api/v1/listings/",
                                              )
                                              .concat(e),
                                            {
                                              method: "DELETE",
                                              headers: {
                                                Authorization: "Bearer ".concat(
                                                  t,
                                                ),
                                              },
                                            },
                                          );
                                        if (!s.ok)
                                          throw new Error(
                                            "HTTP error! status: ".concat(
                                              s.status,
                                            ),
                                          );
                                        const i = await s.json();
                                        console.info(
                                          "Listing deleted successfully",
                                          i,
                                        ),
                                          b();
                                      } catch (t) {
                                        console.error(
                                          "Error deleting listing:",
                                          t,
                                        );
                                      }
                                    })(e.row.original._id),
                                  "data-testid": "delete-button-".concat(
                                    e.row.original.mlsId,
                                  ),
                                  children: "Delete",
                                }),
                              ],
                            }),
                    },
                  ]
                : []),
            ],
            v = (0, u.N4)({
              data: s,
              columns: w,
              getCoreRowModel: (0, c.HT)(),
            });
          return (0, o.jsxs)("div", {
            className: "table-container",
            children: [
              (0, o.jsxs)("table", {
                className: "buyer-broker-table",
                "data-testid": "buyer-broker-table",
                children: [
                  (0, o.jsx)("thead", {
                    children: v
                      .getHeaderGroups()
                      .map((e) =>
                        (0, o.jsx)(
                          "tr",
                          {
                            children: e.headers.map((e) =>
                              (0, o.jsx)(
                                "th",
                                {
                                  className: "table-header",
                                  children: e.isPlaceholder
                                    ? null
                                    : (0, u.Kv)(
                                        e.column.columnDef.header,
                                        e.getContext(),
                                      ),
                                },
                                e.id,
                              ),
                            ),
                          },
                          e.id,
                        ),
                      ),
                  }),
                  (0, o.jsx)("tbody", {
                    children: v
                      .getRowModel()
                      .rows.map((e) =>
                        (0, o.jsx)(
                          "tr",
                          {
                            "data-testid": "table-row-".concat(
                              e.original.mlsId,
                            ),
                            children: e
                              .getVisibleCells()
                              .map((e) =>
                                (0, o.jsx)(
                                  "td",
                                  {
                                    className: "table-cell",
                                    "data-label": e.column.columnDef.header,
                                    children: (0, u.Kv)(
                                      e.column.columnDef.cell,
                                      e.getContext(),
                                    ),
                                  },
                                  e.id,
                                ),
                              ),
                          },
                          e.id,
                        ),
                      ),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: "table-footer-space" }),
            ],
          });
        },
        p = (e) => {
          let { isLoggedIn: t, setIsLoggedIn: s } = e;
          const [n, a] = (0, i.useState)(0),
            [r, l] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              const e = setTimeout(() => {
                l(!0);
              }, 100);
              return () => clearTimeout(e);
            }, []),
            (0, o.jsxs)("div", {
              className: r
                ? "listings-manager-loaded"
                : "listings-manager-loading",
              children: [
                (0, o.jsx)("h1", {
                  className: "page-title",
                  children: "Buyer Broker Commission",
                }),
                t
                  ? (0, o.jsx)(d, {
                      onListingAdded: () => {
                        a((e) => e + 1);
                      },
                    })
                  : (0, o.jsx)(o.Fragment, {}),
                (0, o.jsx)("p", {
                  className: "child-text",
                  children:
                    "View our company\u2019s listings with sellers offering buyer broker compensation in Connecticut & New York",
                }),
                (0, o.jsx)(h, { refreshKey: n }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=626.15bb6c28.chunk.js.map
