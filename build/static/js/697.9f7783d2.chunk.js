"use strict";
(self.webpackChunkwre_frontend = self.webpackChunkwre_frontend || []).push([
  [697],
  {
    7697: (e, s, n) => {
      n.r(s), n.d(s, { default: () => o });
      var t = n(5043),
        a = n(6387),
        r = n(579);
      const o = (e) => {
        let { setIsLoggedIn: s } = e;
        const [n, o] = (0, t.useState)(""),
          [i, l] = (0, t.useState)(""),
          [c, u] = (0, t.useState)("");
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "login-container",
            children: (0, r.jsxs)("form", {
              className: "login-form",
              onSubmit: async (e) => {
                e.preventDefault(), u("");
                try {
                  const e = await fetch(
                    "".concat(a.A.SERVER_URL, "/api/v1/auth/login"),
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ username: n, password: i }),
                    },
                  );
                  if (!e.ok)
                    throw new Error("HTTP error! status: ".concat(e.status));
                  const t = await e.json();
                  console.info("Login successful", t),
                    localStorage.setItem("token", t.token),
                    console.log("setIsLoggedIn is ", s),
                    s(!0);
                } catch (c) {
                  console.error("Error logging in:", c),
                    u(
                      "Login failed. Please check your credentials and try again.",
                    ),
                    s(!1);
                }
              },
              children: [
                (0, r.jsx)("h1", {
                  className: "page-title",
                  children: "Login",
                }),
                (0, r.jsxs)("div", {
                  className: "input-group",
                  children: [
                    (0, r.jsx)("label", {
                      htmlFor: "username",
                      children: "Username",
                    }),
                    (0, r.jsx)("input", {
                      id: "username",
                      type: "text",
                      value: n,
                      onChange: (e) => o(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "input-group",
                  children: [
                    (0, r.jsx)("label", {
                      htmlFor: "password",
                      children: "Password",
                    }),
                    (0, r.jsx)("input", {
                      id: "password",
                      type: "password",
                      value: i,
                      onChange: (e) => l(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                c &&
                  (0, r.jsx)("p", { className: "error-message", children: c }),
                (0, r.jsx)("button", {
                  type: "submit",
                  className: "login-button",
                  children: "Login",
                }),
              ],
            }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=697.9f7783d2.chunk.js.map
