"use strict";
(self.webpackChunkwre_frontend = self.webpackChunkwre_frontend || []).push([
  [64],
  {
    3064: (e, i, r) => {
      r.r(i), r.d(i, { default: () => o });
      var s = r(5043),
        t = r(579);
      const o = function () {
        const [e, i] = (0, s.useState)(!0),
          [r, o] = (0, s.useState)("");
        return (0, t.jsxs)("div", {
          className: "resources-main",
          children: [
            e &&
              (0, t.jsx)("div", {
                className: "lock-screen",
                children: (0, t.jsxs)("div", {
                  className: "lock-content",
                  children: [
                    (0, t.jsx)("h2", { children: "Enter Passcode to Unlock" }),
                    (0, t.jsx)("input", {
                      type: "password",
                      value: r,
                      onChange: (e) => o(e.target.value),
                      placeholder: "Enter passcode",
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => {
                        2040 === parseInt(r)
                          ? i(!1)
                          : alert("Incorrect passcode. Try again.");
                      },
                      children: "Unlock",
                    }),
                  ],
                }),
              }),
            (0, t.jsxs)("div", {
              className: "resources-list ".concat(e ? "blurred" : ""),
              children: [
                (0, t.jsx)("div", {
                  className: "resources-heading",
                  children: (0, t.jsx)("h1", { children: "Resources" }),
                }),
                [
                  {
                    id: 1,
                    title:
                      "CT Addendum To Exclusive Right To Represent Buyer Agent",
                    description:
                      "Real Estate Interpeter Service Acknowledgment Agreement",
                    file: "https://drive.google.com/file/d/1WI12aKV3SGeeDJjU4-VB2X3VFO-EyYQU/view?usp=sharing",
                  },
                  {
                    id: 2,
                    title: "Real Estate Disclosure Notice",
                    description: "Agency disclosure - first notice to a client",
                    file: "https://drive.google.com/file/d/12HuOGTMoBDO1M61QZNn4bgb6AbhKz9gw/view?usp=sharing",
                  },
                  {
                    id: 3,
                    title: "Exclusive Right To Represent The Buyer Agreement",
                    description:
                      "Exclusive right to represent the buyer agreement",
                    file: "https://drive.google.com/file/d/1lhRsFHRRD1SYTjJckFwLRSVQxpnZsXwo/view?usp=sharing",
                  },
                  {
                    id: 4,
                    title:
                      "Unrepresented Seller Compensation Agreement For Buyer Brokerage",
                    description:
                      "Unrepresented Seller Compensation Agreement For Buyer Brokerage",
                    file: "https://drive.google.com/file/d/1CxVcZxD3CtoPlO7ddNWDJpb-7fYpZgVU/view?usp=sharing",
                  },
                  {
                    id: 5,
                    title: "Exclusive Right To Sell Agreement",
                    description: "Exclusive Right To Sell Agreement",
                    file: "https://drive.google.com/file/d/1aS6b6ifbYeEovNniLpTcvob9ol_B-Wz5/view?usp=sharing",
                  },
                  {
                    id: 6,
                    title:
                      "Broker To Broker Professional Services Fee Agreement",
                    description:
                      "Broker To Broker Professional Service Fee Agreement",
                    file: "https://drive.google.com/file/d/1yngMjpZPcYe0aIq1InJba9AOl8DxBGa-/view?usp=sharing",
                  },
                  {
                    id: 7,
                    title: "Fair Housing Notice Pursuant to PA 16-16",
                    description: "Fair Housing Rule - Purchaser",
                    file: "https://drive.google.com/file/d/14-eF81c94v4wPpO68jn4dseU16SpAh2y/view?usp=sharing",
                  },
                ].map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "resource-item",
                      children: [
                        (0, t.jsx)("h2", { children: e.title }),
                        (0, t.jsx)("p", { children: e.description }),
                        (0, t.jsx)("a", {
                          href: "".concat(e.file),
                          download: !0,
                          className: "download-button",
                          children: "Download",
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=64.598988a1.chunk.js.map
