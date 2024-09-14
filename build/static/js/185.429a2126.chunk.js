(self.webpackChunkwre_frontend = self.webpackChunkwre_frontend || []).push([
  [185],
  {
    9185: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => c });
      var o = i(5043),
        n = i(6387),
        r = i(2963),
        s = i.n(r),
        a = i(579);
      s().setAppElement("#root");
      const l = function (t) {
        return (0, a.jsxs)("div", {
          className: "agent-profile-container",
          children: [
            (0, a.jsxs)("div", {
              className: "agent-profile-heading",
              children: [
                (0, a.jsx)("h1", {
                  className: "agent-profile-name",
                  children: t.agentProfileName,
                }),
                (0, a.jsx)("h2", { children: t.agentProfileTitle }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "agent-profile-content",
              children: [
                (0, a.jsx)("img", {
                  className: "agent-profile-image",
                  src: t.agentProfileImagePath,
                  alt: t.agentProfileName,
                }),
                (0, a.jsxs)("div", {
                  className: "agent-profile-text",
                  children: [
                    (0, a.jsx)("h4", { children: t.agentProfileBio }),
                    (0, a.jsxs)("h4", {
                      children: ["Cell Number: ", t.agentProfileCellNumber],
                    }),
                    (0, a.jsxs)("h4", {
                      children: [
                        "Email:",
                        " ",
                        (0, a.jsx)("a", {
                          href: "mailto:".concat(t.agentProfileEmail),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: t.agentProfileEmail,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var u = i(9032),
        h = i(2488),
        d = i(5732);
      const c = function () {
        const { agents: t, loading: e, error: i } = (0, d._)(),
          [r, c] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(null),
          [m, v] = (0, o.useState)(0),
          [g, y] = (0, o.useState)(!1),
          [S, T] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          S === Object.values(t).length && y(!0);
        }, [S, t]);
        const w = () => {
          T((t) => t + 1);
        };
        function b(t) {
          document.documentElement.style.setProperty(
            "--scroll-top",
            "-" + document.documentElement.scrollTop + "px",
          ),
            v(document.documentElement.scrollTop),
            document.body.classList.add("modal-open"),
            f(t),
            c(!0);
        }
        function C() {
          document.body.classList.remove("modal-open"),
            window.scrollTo(0, m),
            c(!1),
            f(null);
        }
        return e
          ? (0, a.jsx)("div", { children: "Loading agents..." })
          : i
            ? (0, a.jsxs)("div", { children: ["Error loading agents: ", i] })
            : (0, a.jsxs)("div", {
                className: "about-us-main ".concat(
                  g ? "carousel-group-loaded" : "carousel-group-loading",
                ),
                children: [
                  (0, a.jsxs)("div", {
                    className: "carousel-group",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "carousel-heading",
                        children: "Meet Our Agents",
                      }),
                      (0, a.jsx)("div", {
                        className: "paragraph-div",
                        children: (0, a.jsxs)("p", {
                          className: "about-us-paragraph",
                          children: [
                            "Williams Real Estate was founded on principles of",
                            " ",
                            (0, a.jsx)("span", { children: "innovation" }),
                            ", ",
                            (0, a.jsx)("span", { children: "consistency" }),
                            ", and",
                            " ",
                            (0, a.jsx)("span", { children: "excellence" }),
                            ". Our world class agents are a call away to get you to the home of your dreams.",
                          ],
                        }),
                      }),
                      (0, a.jsx)(h.default, {
                        responsive: {
                          superLargeDesktop: {
                            breakpoint: { max: 4e3, min: 3e3 },
                            items: 2,
                          },
                          desktop: {
                            breakpoint: { max: 3e3, min: 1024 },
                            items: 2,
                          },
                          tablet: {
                            breakpoint: { max: 1024, min: 768 },
                            items: 2,
                          },
                          mobile: {
                            breakpoint: { max: 768, min: 0 },
                            items: 1,
                          },
                        },
                        slidesToSlide: 1,
                        containerClass: "carousel",
                        itemClass: "carousel-agent",
                        arrows: !0,
                        children: Object.values(t).map((t) =>
                          (0, a.jsx)(
                            "img",
                            {
                              className: "agent-image",
                              alt: t.Name,
                              src: ""
                                .concat(
                                  n.A.SERVER_URL,
                                  "/api/v1/agents/images/",
                                )
                                .concat(t.Image),
                              onLoad: w,
                              onClick: () => b(t),
                            },
                            t.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(s(), {
                    className: "agent-profile-modal",
                    isOpen: r,
                    onRequestClose: C,
                    style: {
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        zIndex: 2,
                      },
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: "agent-profile-modal-heading",
                        children: (0, a.jsx)("img", {
                          src: u,
                          alt: "Close Modal",
                          className: "close-agent-profile-modal-button",
                          onClick: C,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "agent-profile-modal-content",
                        children:
                          p &&
                          (0, a.jsx)(l, {
                            agentProfileModalIsOpen: r,
                            setAgentProfileModalIsOpen: c,
                            agentProfileName: p.Name,
                            agentProfileTitle: p.Title,
                            agentProfileImagePath: ""
                              .concat(n.A.SERVER_URL, "/api/v1/agents/images/")
                              .concat(p.Image),
                            agentProfileOfficeNumber: p.OfficeNumber,
                            agentProfileCellNumber: p.CellNumber,
                            agentProfileEmail: p.Email,
                            agentProfileBio: p.Bio,
                          }),
                      }),
                    ],
                  }),
                ],
              });
      };
    },
    2488: (t, e, i) => {
      t.exports = i(5604);
    },
    2400: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(5043);
      e.LeftArrow = function (t) {
        var e = t.customLeftArrow,
          i = t.getState,
          n = t.previous,
          r = t.disabled,
          s = t.rtl;
        if (e)
          return o.cloneElement(e, {
            onClick: function () {
              return n();
            },
            carouselState: i(),
            disabled: r,
            rtl: s,
          });
        var a = s ? "rtl" : "";
        return o.createElement("button", {
          "aria-label": "Go to previous slide",
          className:
            "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " +
            a,
          onClick: function () {
            return n();
          },
          type: "button",
          disabled: r,
        });
      };
      e.RightArrow = function (t) {
        var e = t.customRightArrow,
          i = t.getState,
          n = t.next,
          r = t.disabled,
          s = t.rtl;
        if (e)
          return o.cloneElement(e, {
            onClick: function () {
              return n();
            },
            carouselState: i(),
            disabled: r,
            rtl: s,
          });
        var a = s ? "rtl" : "";
        return o.createElement("button", {
          "aria-label": "Go to next slide",
          className:
            "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " +
            a,
          onClick: function () {
            return n();
          },
          type: "button",
          disabled: r,
        });
      };
    },
    364: function (t, e, i) {
      "use strict";
      var o =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function o() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((o.prototype = i.prototype), new o()));
          };
        })();
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(5043),
        r = i(694),
        s = i(257),
        a = i(6406),
        l = i(2400),
        u = i(5834),
        h = i(7673),
        d = 400,
        c = "transform 400ms ease-in-out",
        p = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (
              (i.containerRef = n.createRef()),
              (i.listRef = n.createRef()),
              (i.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: n.Children.count(e.children),
                deviceType: "",
                domLoaded: !1,
                transform: 0,
                containerWidth: 0,
              }),
              (i.onResize = i.onResize.bind(i)),
              (i.handleDown = i.handleDown.bind(i)),
              (i.handleMove = i.handleMove.bind(i)),
              (i.handleOut = i.handleOut.bind(i)),
              (i.onKeyUp = i.onKeyUp.bind(i)),
              (i.handleEnter = i.handleEnter.bind(i)),
              (i.setIsInThrottle = i.setIsInThrottle.bind(i)),
              (i.next = r.throttle(
                i.next.bind(i),
                e.transitionDuration || d,
                i.setIsInThrottle,
              )),
              (i.previous = r.throttle(
                i.previous.bind(i),
                e.transitionDuration || d,
                i.setIsInThrottle,
              )),
              (i.goToSlide = r.throttle(
                i.goToSlide.bind(i),
                e.transitionDuration || d,
                i.setIsInThrottle,
              )),
              (i.onMove = !1),
              (i.initialX = 0),
              (i.lastX = 0),
              (i.isAnimationAllowed = !1),
              (i.direction = ""),
              (i.initialY = 0),
              (i.isInThrottle = !1),
              (i.transformPlaceHolder = 0),
              i
            );
          }
          return (
            o(e, t),
            (e.prototype.resetTotalItems = function () {
              var t = this,
                e = n.Children.count(this.props.children),
                i = r.notEnoughChildren(this.state)
                  ? 0
                  : Math.max(0, Math.min(this.state.currentSlide, e));
              this.setState({ totalItems: e, currentSlide: i }, function () {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0);
              });
            }),
            (e.prototype.setIsInThrottle = function (t) {
              void 0 === t && (t = !1), (this.isInThrottle = t);
            }),
            (e.prototype.setTransformDirectly = function (t, e) {
              var i = this.props.additionalTransfrom;
              this.transformPlaceHolder = t;
              var o = h.getTransform(
                this.state,
                this.props,
                this.transformPlaceHolder,
              );
              this.listRef &&
                this.listRef.current &&
                (this.setAnimationDirectly(e),
                (this.listRef.current.style.transform =
                  "translate3d(" + (o + i) + "px,0,0)"));
            }),
            (e.prototype.setAnimationDirectly = function (t) {
              this.listRef &&
                this.listRef.current &&
                (this.listRef.current.style.transition = t
                  ? this.props.customTransition || c
                  : "none");
            }),
            (e.prototype.componentDidMount = function () {
              this.setState({ domLoaded: !0 }),
                this.setItemsToShow(),
                window.addEventListener("resize", this.onResize),
                this.onResize(!0),
                this.props.keyBoardControl &&
                  window.addEventListener("keyup", this.onKeyUp),
                this.props.autoPlay &&
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed,
                  ));
            }),
            (e.prototype.setClones = function (t, e, i, o) {
              var s = this;
              void 0 === o && (o = !1), (this.isAnimationAllowed = !1);
              var a = n.Children.toArray(this.props.children),
                l = r.getInitialSlideInInfiniteMode(
                  t || this.state.slidesToShow,
                  a,
                ),
                u = r.getClones(this.state.slidesToShow, a),
                h =
                  a.length < this.state.slidesToShow
                    ? 0
                    : this.state.currentSlide;
              this.setState(
                { totalItems: u.length, currentSlide: i && !o ? h : l },
                function () {
                  s.correctItemsPosition(e || s.state.itemWidth);
                },
              );
            }),
            (e.prototype.setItemsToShow = function (t, e) {
              var i = this,
                o = this.props.responsive;
              Object.keys(o).forEach(function (n) {
                var r = o[n],
                  s = r.breakpoint,
                  a = r.items,
                  l = s.max,
                  u = s.min,
                  h = [window.innerWidth];
                window.screen &&
                  window.screen.width &&
                  h.push(window.screen.width);
                var d = Math.min.apply(Math, h);
                u <= d &&
                  d <= l &&
                  (i.setState({ slidesToShow: a, deviceType: n }),
                  i.setContainerAndItemWidth(a, t, e));
              });
            }),
            (e.prototype.setContainerAndItemWidth = function (t, e, i) {
              var o = this;
              if (this.containerRef && this.containerRef.current) {
                var n = this.containerRef.current.offsetWidth,
                  s = r.getItemClientSideWidth(this.props, t, n);
                this.setState({ containerWidth: n, itemWidth: s }, function () {
                  o.props.infinite && o.setClones(t, s, e, i);
                }),
                  e && this.correctItemsPosition(s);
              }
            }),
            (e.prototype.correctItemsPosition = function (t, e, i) {
              e && (this.isAnimationAllowed = !0),
                !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
              var o =
                this.state.totalItems < this.state.slidesToShow
                  ? 0
                  : -t * this.state.currentSlide;
              i && this.setTransformDirectly(o, !0),
                this.setState({ transform: o });
            }),
            (e.prototype.onResize = function (t) {
              var e;
              (e = !!this.props.infinite && ("boolean" != typeof t || !t)),
                this.setItemsToShow(e);
            }),
            (e.prototype.componentDidUpdate = function (t, i) {
              var o = this,
                n = t.keyBoardControl,
                s = t.autoPlay,
                a = t.children,
                l = i.containerWidth,
                u = i.domLoaded,
                h = i.currentSlide;
              if (
                (this.containerRef &&
                  this.containerRef.current &&
                  this.containerRef.current.offsetWidth !== l &&
                  (this.itemsToShowTimeout &&
                    clearTimeout(this.itemsToShowTimeout),
                  (this.itemsToShowTimeout = setTimeout(function () {
                    o.setItemsToShow(!0);
                  }, this.props.transitionDuration || d))),
                n &&
                  !this.props.keyBoardControl &&
                  window.removeEventListener("keyup", this.onKeyUp),
                !n &&
                  this.props.keyBoardControl &&
                  window.addEventListener("keyup", this.onKeyUp),
                s &&
                  !this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                s ||
                  !this.props.autoPlay ||
                  this.autoPlay ||
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed,
                  )),
                a.length !== this.props.children.length
                  ? (e.clonesTimeout = setTimeout(function () {
                      o.props.infinite
                        ? o.setClones(
                            o.state.slidesToShow,
                            o.state.itemWidth,
                            !0,
                            !0,
                          )
                        : o.resetTotalItems();
                    }, this.props.transitionDuration || d))
                  : this.props.infinite &&
                    this.state.currentSlide !== h &&
                    this.correctClonesPosition({ domLoaded: u }),
                this.transformPlaceHolder !== this.state.transform &&
                  (this.transformPlaceHolder = this.state.transform),
                this.props.autoPlay &&
                  this.props.rewind &&
                  !this.props.infinite &&
                  r.isInRightEnd(this.state))
              ) {
                var c = this.props.transitionDuration || d;
                e.isInThrottleTimeout = setTimeout(function () {
                  o.setIsInThrottle(!1),
                    o.resetAutoplayInterval(),
                    o.goToSlide(0, void 0, !!o.props.rewindWithAnimation);
                }, c + this.props.autoPlaySpeed);
              }
            }),
            (e.prototype.correctClonesPosition = function (t) {
              var i = this,
                o = t.domLoaded,
                s = n.Children.toArray(this.props.children),
                a = r.checkClonesPosition(this.state, s, this.props),
                l = a.isReachingTheEnd,
                u = a.isReachingTheStart,
                h = a.nextSlide,
                c = a.nextPosition;
              this.state.domLoaded &&
                o &&
                (l || u) &&
                ((this.isAnimationAllowed = !1),
                (e.transformTimeout = setTimeout(function () {
                  i.setState({ transform: c, currentSlide: h });
                }, this.props.transitionDuration || d)));
            }),
            (e.prototype.next = function (t) {
              var i = this;
              void 0 === t && (t = 0);
              var o = this.props,
                n = o.afterChange,
                s = o.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var a = r.populateNextSlides(this.state, this.props, t),
                  l = a.nextSlides,
                  u = a.nextPosition,
                  h = this.state.currentSlide;
                void 0 !== l &&
                  void 0 !== u &&
                  ("function" == typeof s && s(l, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.props.shouldResetAutoplay &&
                    this.resetAutoplayInterval(),
                  this.setState({ transform: u, currentSlide: l }, function () {
                    "function" == typeof n &&
                      (e.afterChangeTimeout = setTimeout(function () {
                        n(h, i.getState());
                      }, i.props.transitionDuration || d));
                  }));
              }
            }),
            (e.prototype.previous = function (t) {
              var i = this;
              void 0 === t && (t = 0);
              var o = this.props,
                n = o.afterChange,
                s = o.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var a = r.populatePreviousSlides(this.state, this.props, t),
                  l = a.nextSlides,
                  u = a.nextPosition;
                if (void 0 !== l && void 0 !== u) {
                  var h = this.state.currentSlide;
                  "function" == typeof s && s(l, this.getState()),
                    (this.isAnimationAllowed = !0),
                    this.props.shouldResetAutoplay &&
                      this.resetAutoplayInterval(),
                    this.setState(
                      { transform: u, currentSlide: l },
                      function () {
                        "function" == typeof n &&
                          (e.afterChangeTimeout2 = setTimeout(function () {
                            n(h, i.getState());
                          }, i.props.transitionDuration || d));
                      },
                    );
                }
              }
            }),
            (e.prototype.resetAutoplayInterval = function () {
              this.props.autoPlay &&
                (clearInterval(this.autoPlay),
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed,
                )));
            }),
            (e.prototype.componentWillUnmount = function () {
              window.removeEventListener("resize", this.onResize),
                this.props.keyBoardControl &&
                  window.removeEventListener("keyup", this.onKeyUp),
                this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                this.itemsToShowTimeout &&
                  clearTimeout(this.itemsToShowTimeout),
                e.clonesTimeout && clearTimeout(e.clonesTimeout),
                e.isInThrottleTimeout && clearTimeout(e.isInThrottleTimeout),
                e.transformTimeout && clearTimeout(e.transformTimeout),
                e.afterChangeTimeout && clearTimeout(e.afterChangeTimeout),
                e.afterChangeTimeout2 && clearTimeout(e.afterChangeTimeout2),
                e.afterChangeTimeout3 && clearTimeout(e.afterChangeTimeout3);
            }),
            (e.prototype.resetMoveStatus = function () {
              (this.onMove = !1),
                (this.initialX = 0),
                (this.lastX = 0),
                (this.direction = ""),
                (this.initialY = 0);
            }),
            (e.prototype.getCords = function (t) {
              var e = t.clientX,
                i = t.clientY;
              return {
                clientX: h.parsePosition(this.props, e),
                clientY: h.parsePosition(this.props, i),
              };
            }),
            (e.prototype.handleDown = function (t) {
              if (
                !(
                  (!s.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (s.isMouseMoveEvent(t) && !this.props.draggable) ||
                  this.isInThrottle
                )
              ) {
                var e = this.getCords(s.isMouseMoveEvent(t) ? t : t.touches[0]),
                  i = e.clientX,
                  o = e.clientY;
                (this.onMove = !0),
                  (this.initialX = i),
                  (this.initialY = o),
                  (this.lastX = i),
                  (this.isAnimationAllowed = !1);
              }
            }),
            (e.prototype.handleMove = function (t) {
              if (
                !(
                  (!s.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (s.isMouseMoveEvent(t) && !this.props.draggable) ||
                  r.notEnoughChildren(this.state)
                )
              ) {
                var e = this.getCords(s.isMouseMoveEvent(t) ? t : t.touches[0]),
                  i = e.clientX,
                  o = e.clientY,
                  n = this.initialX - i,
                  a = this.initialY - o;
                if (this.onMove) {
                  if (!(Math.abs(n) > Math.abs(a))) return;
                  var l = r.populateSlidesOnMouseTouchMove(
                      this.state,
                      this.props,
                      this.initialX,
                      this.lastX,
                      i,
                      this.transformPlaceHolder,
                    ),
                    u = l.direction,
                    h = l.nextPosition,
                    d = l.canContinue;
                  u &&
                    ((this.direction = u),
                    d && void 0 !== h && this.setTransformDirectly(h)),
                    (this.lastX = i);
                }
              }
            }),
            (e.prototype.handleOut = function (t) {
              this.props.autoPlay &&
                !this.autoPlay &&
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed,
                ));
              var e = "touchend" === t.type && !this.props.swipeable,
                i =
                  ("mouseleave" === t.type || "mouseup" === t.type) &&
                  !this.props.draggable;
              if (!e && !i && this.onMove) {
                if ((this.setAnimationDirectly(!0), "right" === this.direction))
                  if (
                    this.initialX - this.lastX >=
                    this.props.minimumTouchDrag
                  ) {
                    var o = Math.round(
                      (this.initialX - this.lastX) / this.state.itemWidth,
                    );
                    this.next(o);
                  } else
                    this.correctItemsPosition(this.state.itemWidth, !0, !0);
                "left" === this.direction &&
                  (this.lastX - this.initialX > this.props.minimumTouchDrag
                    ? ((o = Math.round(
                        (this.lastX - this.initialX) / this.state.itemWidth,
                      )),
                      this.previous(o))
                    : this.correctItemsPosition(this.state.itemWidth, !0, !0)),
                  this.resetMoveStatus();
              }
            }),
            (e.prototype.isInViewport = function (t) {
              var e = t.getBoundingClientRect(),
                i = e.top,
                o = void 0 === i ? 0 : i,
                n = e.left,
                r = void 0 === n ? 0 : n,
                s = e.bottom,
                a = void 0 === s ? 0 : s,
                l = e.right,
                u = void 0 === l ? 0 : l;
              return (
                0 <= o &&
                0 <= r &&
                a <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                u <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }),
            (e.prototype.isChildOfCarousel = function (t) {
              return (
                !!(
                  t instanceof Element &&
                  this.listRef &&
                  this.listRef.current
                ) && this.listRef.current.contains(t)
              );
            }),
            (e.prototype.onKeyUp = function (t) {
              var e = t.target;
              switch (t.keyCode) {
                case 37:
                  if (this.isChildOfCarousel(e)) return this.previous();
                  break;
                case 39:
                  if (this.isChildOfCarousel(e)) return this.next();
                  break;
                case 9:
                  if (
                    this.isChildOfCarousel(e) &&
                    e instanceof HTMLInputElement &&
                    this.isInViewport(e)
                  )
                    return this.next();
              }
            }),
            (e.prototype.handleEnter = function (t) {
              s.isMouseMoveEvent(t) &&
                this.autoPlay &&
                this.props.autoPlay &&
                this.props.pauseOnHover &&
                (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.goToSlide = function (t, i, o) {
              var n = this;
              if ((void 0 === o && (o = !0), !this.isInThrottle)) {
                var r = this.state.itemWidth,
                  s = this.props,
                  a = s.afterChange,
                  l = s.beforeChange,
                  u = this.state.currentSlide;
                "function" != typeof l ||
                  (i && ("object" != typeof i || i.skipBeforeChange)) ||
                  l(t, this.getState()),
                  (this.isAnimationAllowed = o),
                  this.props.shouldResetAutoplay &&
                    this.resetAutoplayInterval(),
                  this.setState(
                    { currentSlide: t, transform: -r * t },
                    function () {
                      n.props.infinite &&
                        n.correctClonesPosition({ domLoaded: !0 }),
                        "function" != typeof a ||
                          (i && ("object" != typeof i || i.skipAfterChange)) ||
                          (e.afterChangeTimeout3 = setTimeout(function () {
                            a(u, n.getState());
                          }, n.props.transitionDuration || d));
                    },
                  );
              }
            }),
            (e.prototype.getState = function () {
              return this.state;
            }),
            (e.prototype.renderLeftArrow = function (t) {
              var e = this,
                i = this.props,
                o = i.customLeftArrow,
                r = i.rtl;
              return n.createElement(l.LeftArrow, {
                customLeftArrow: o,
                getState: function () {
                  return e.getState();
                },
                previous: this.previous,
                disabled: t,
                rtl: r,
              });
            }),
            (e.prototype.renderRightArrow = function (t) {
              var e = this,
                i = this.props,
                o = i.customRightArrow,
                r = i.rtl;
              return n.createElement(l.RightArrow, {
                customRightArrow: o,
                getState: function () {
                  return e.getState();
                },
                next: this.next,
                disabled: t,
                rtl: r,
              });
            }),
            (e.prototype.renderButtonGroups = function () {
              var t = this,
                e = this.props.customButtonGroup;
              return e
                ? n.cloneElement(e, {
                    previous: function () {
                      return t.previous();
                    },
                    next: function () {
                      return t.next();
                    },
                    goToSlide: function (e, i) {
                      return t.goToSlide(e, i);
                    },
                    carouselState: this.getState(),
                  })
                : null;
            }),
            (e.prototype.renderDotsList = function () {
              var t = this;
              return n.createElement(a.default, {
                state: this.state,
                props: this.props,
                goToSlide: this.goToSlide,
                getState: function () {
                  return t.getState();
                },
              });
            }),
            (e.prototype.renderCarouselItems = function () {
              var t = [];
              if (this.props.infinite) {
                var e = n.Children.toArray(this.props.children);
                t = r.getClones(this.state.slidesToShow, e);
              }
              return n.createElement(u.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: r.notEnoughChildren(this.state),
                props: this.props,
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.deviceType,
                i = t.arrows,
                o = t.renderArrowsWhenDisabled,
                s = t.removeArrowOnDeviceType,
                a = t.infinite,
                l = t.containerClass,
                u = t.sliderClass,
                d = t.customTransition,
                p = t.additionalTransfrom,
                f = t.renderDotsOutside,
                m = t.renderButtonGroupOutside,
                v = t.className,
                g = t.rtl,
                y = r.getInitialState(this.state, this.props),
                S = y.shouldRenderOnSSR,
                T = y.shouldRenderAtAll,
                w = r.isInLeftEnd(this.state),
                b = r.isInRightEnd(this.state),
                C =
                  i &&
                  !(
                    s &&
                    ((e && -1 < s.indexOf(e)) ||
                      (this.state.deviceType &&
                        -1 < s.indexOf(this.state.deviceType)))
                  ) &&
                  !r.notEnoughChildren(this.state) &&
                  T,
                P = !a && w,
                I = !a && b,
                x = h.getTransform(this.state, this.props);
              return n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  {
                    className: "react-multi-carousel-list " + l + " " + v,
                    dir: g ? "rtl" : "ltr",
                    ref: this.containerRef,
                  },
                  n.createElement(
                    "ul",
                    {
                      ref: this.listRef,
                      className: "react-multi-carousel-track " + u,
                      style: {
                        transition: this.isAnimationAllowed ? d || c : "none",
                        overflow: S ? "hidden" : "unset",
                        transform: "translate3d(" + (x + p) + "px,0,0)",
                      },
                      onMouseMove: this.handleMove,
                      onMouseDown: this.handleDown,
                      onMouseUp: this.handleOut,
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleOut,
                      onTouchStart: this.handleDown,
                      onTouchMove: this.handleMove,
                      onTouchEnd: this.handleOut,
                    },
                    this.renderCarouselItems(),
                  ),
                  C && (!P || o) && this.renderLeftArrow(P),
                  C && (!I || o) && this.renderRightArrow(I),
                  T && !m && this.renderButtonGroups(),
                  T && !f && this.renderDotsList(),
                ),
                T && f && this.renderDotsList(),
                T && m && this.renderButtonGroups(),
              );
            }),
            (e.defaultProps = {
              slidesToSlide: 1,
              infinite: !1,
              draggable: !0,
              swipeable: !0,
              arrows: !0,
              renderArrowsWhenDisabled: !1,
              containerClass: "",
              sliderClass: "",
              itemClass: "",
              keyBoardControl: !0,
              autoPlaySpeed: 3e3,
              showDots: !1,
              renderDotsOutside: !1,
              renderButtonGroupOutside: !1,
              minimumTouchDrag: 80,
              className: "",
              dotListClass: "",
              focusOnSelect: !1,
              centerMode: !1,
              additionalTransfrom: 0,
              pauseOnHover: !0,
              shouldResetAutoplay: !0,
              rewind: !1,
              rtl: !1,
              rewindWithAnimation: !1,
            }),
            e
          );
        })(n.Component);
      e.default = p;
    },
    5834: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(5043),
        n = i(694);
      e.default = function (t) {
        var e = t.props,
          i = t.state,
          r = t.goToSlide,
          s = t.clones,
          a = t.notEnoughChildren,
          l = i.itemWidth,
          u = e.children,
          h = e.infinite,
          d = e.itemClass,
          c = e.itemAriaLabel,
          p = e.partialVisbile,
          f = e.partialVisible,
          m = n.getInitialState(i, e),
          v = m.flexBisis,
          g = m.shouldRenderOnSSR,
          y = m.domFullyLoaded,
          S = m.partialVisibilityGutter;
        return m.shouldRenderAtAll
          ? (p &&
              console.warn(
                'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!',
              ),
            o.createElement(
              o.Fragment,
              null,
              (h ? s : o.Children.toArray(u)).map(function (t, s) {
                return o.createElement(
                  "li",
                  {
                    key: s,
                    "data-index": s,
                    onClick: function () {
                      e.focusOnSelect && r(s);
                    },
                    "aria-hidden": n.getIfSlideIsVisbile(s, i)
                      ? "false"
                      : "true",
                    "aria-label":
                      c || (t.props.ariaLabel ? t.props.ariaLabel : null),
                    style: {
                      flex: g ? "1 0 " + v + "%" : "auto",
                      position: "relative",
                      width: y
                        ? ((p || f) && S && !a ? l - S : l) + "px"
                        : "auto",
                    },
                    className:
                      "react-multi-carousel-item " +
                      (n.getIfSlideIsVisbile(s, i)
                        ? "react-multi-carousel-item--active"
                        : "") +
                      " " +
                      d,
                  },
                  t,
                );
              }),
            ))
          : null;
      };
    },
    6406: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(5043),
        n = i(4526),
        r = i(2232),
        s = i(7673);
      e.default = function (t) {
        var e = t.props,
          i = t.state,
          a = t.goToSlide,
          l = t.getState,
          u = e.showDots,
          h = e.customDot,
          d = e.dotListClass,
          c = e.infinite,
          p = e.children;
        if (!u || s.notEnoughChildren(i)) return null;
        var f,
          m = i.currentSlide,
          v = i.slidesToShow,
          g = s.getSlidesToSlide(i, e),
          y = o.Children.toArray(p);
        f = c ? Math.ceil(y.length / g) : Math.ceil((y.length - v) / g) + 1;
        var S = r.getLookupTableForNextSlides(f, i, e, y),
          T = n.getOriginalIndexLookupTableByClones(v, y),
          w = T[m];
        return o.createElement(
          "ul",
          { className: "react-multi-carousel-dot-list " + d },
          Array(f)
            .fill(0)
            .map(function (t, e) {
              var i, n;
              if (c) {
                n = S[e];
                var r = T[n];
                i = w === r || (r <= w && w < r + g);
              } else {
                var s = y.length - v,
                  u = e * g;
                i =
                  (n = s < u ? s : u) === m ||
                  (n < m && m < n + g && m < y.length - v);
              }
              return h
                ? o.cloneElement(h, {
                    index: e,
                    active: i,
                    key: e,
                    onClick: function () {
                      return a(n);
                    },
                    carouselState: l(),
                  })
                : o.createElement(
                    "li",
                    {
                      "data-index": e,
                      key: e,
                      className:
                        "react-multi-carousel-dot " +
                        (i ? "react-multi-carousel-dot--active" : ""),
                    },
                    o.createElement("button", {
                      "aria-label": "Go to slide " + (e + 1),
                      onClick: function () {
                        return a(n);
                      },
                    }),
                  );
            }),
        );
      };
    },
    5604: (t, e, i) => {
      "use strict";
      var o = i(364);
      e.default = o.default;
    },
    257: function (t, e, i) {
      "use strict";
      var o =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function o() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((o.prototype = i.prototype), new o()));
          };
        })();
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(5043);
      e.isMouseMoveEvent = function (t) {
        return "clientY" in t;
      };
      var r = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return o(e, t), e;
      })(n.Component);
      e.default = r;
    },
    4526: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getOriginalCounterPart = function (t, e, i) {
          var o = e.slidesToShow,
            n = e.currentSlide;
          return i.length > 2 * o
            ? t + 2 * o
            : n >= i.length
              ? i.length + t
              : t;
        }),
        (e.getOriginalIndexLookupTableByClones = function (t, e) {
          if (e.length > 2 * t) {
            for (
              var i = {}, o = e.length - 2 * t, n = e.length - o, r = o, s = 0;
              s < n;
              s++
            )
              (i[s] = r), r++;
            var a = e.length + n,
              l = a + e.slice(0, 2 * t).length,
              u = 0;
            for (s = a; s <= l; s++) (i[s] = u), u++;
            var h = a,
              d = 0;
            for (s = n; s < h; s++) (i[s] = d), d++;
            return i;
          }
          i = {};
          var c = 3 * e.length,
            p = 0;
          for (s = 0; s < c; s++) (i[s] = p), ++p === e.length && (p = 0);
          return i;
        }),
        (e.getClones = function (t, e) {
          return e.length < t
            ? e
            : e.length > 2 * t
              ? e.slice(e.length - 2 * t, e.length).concat(e, e.slice(0, 2 * t))
              : e.concat(e, e);
        }),
        (e.getInitialSlideInInfiniteMode = function (t, e) {
          return e.length > 2 * t ? 2 * t : e.length;
        }),
        (e.checkClonesPosition = function (t, e, i) {
          var o,
            n = t.currentSlide,
            r = t.slidesToShow,
            s = t.itemWidth,
            a = t.totalItems,
            l = 0,
            u = 0,
            h = 0 === n,
            d = e.length - (e.length - 2 * r);
          return (
            e.length < r
              ? ((u = l = 0), (h = o = !1))
              : e.length > 2 * r
                ? ((o = n >= d + e.length) && (u = -s * (l = n - e.length)),
                  h && (u = -s * (l = d + (e.length - 2 * r))))
                : ((o = n >= 2 * e.length) && (u = -s * (l = n - e.length)),
                  h &&
                    (u = i.showDots ? -s * (l = e.length) : -s * (l = a / 3))),
            {
              isReachingTheEnd: o,
              isReachingTheStart: h,
              nextSlide: l,
              nextPosition: u,
            }
          );
        });
    },
    7673: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(2624);
      function n(t) {
        var e = t.slidesToShow;
        return t.totalItems < e;
      }
      function r(t, e, i) {
        var o = i || t.transform;
        return (!e.infinite && 0 === t.currentSlide) || n(t)
          ? o
          : o + t.itemWidth / 2;
      }
      function s(t) {
        var e = t.currentSlide,
          i = t.totalItems;
        return !(e + t.slidesToShow < i);
      }
      function a(t, e, i, o) {
        void 0 === e && (e = 0);
        var r = t.currentSlide,
          a = t.slidesToShow,
          l = s(t),
          u = !i.infinite && l,
          h = o || t.transform;
        if (n(t)) return h;
        var d = h + r * e;
        return u ? d + (t.containerWidth - (t.itemWidth - e) * a) : d;
      }
      function l(t, e) {
        return t.rtl ? -1 * e : e;
      }
      (e.notEnoughChildren = n),
        (e.getInitialState = function (t, e) {
          var i,
            n = t.domLoaded,
            r = t.slidesToShow,
            s = t.containerWidth,
            a = t.itemWidth,
            l = e.deviceType,
            u = e.responsive,
            h = e.ssr,
            d = e.partialVisbile,
            c = e.partialVisible,
            p = Boolean(n && r && s && a);
          h && l && !p && (i = o.getWidthFromDeviceType(l, u));
          var f = Boolean(h && l && !p && i);
          return {
            shouldRenderOnSSR: f,
            flexBisis: i,
            domFullyLoaded: p,
            partialVisibilityGutter: o.getPartialVisibilityGutter(
              u,
              d || c,
              l,
              t.deviceType,
            ),
            shouldRenderAtAll: f || p,
          };
        }),
        (e.getIfSlideIsVisbile = function (t, e) {
          var i = e.currentSlide,
            o = e.slidesToShow;
          return i <= t && t < i + o;
        }),
        (e.getTransformForCenterMode = r),
        (e.isInLeftEnd = function (t) {
          return !(0 < t.currentSlide);
        }),
        (e.isInRightEnd = s),
        (e.getTransformForPartialVsibile = a),
        (e.parsePosition = l),
        (e.getTransform = function (t, e, i) {
          var n = e.partialVisbile,
            s = e.partialVisible,
            u = e.responsive,
            h = e.deviceType,
            d = e.centerMode,
            c = i || t.transform,
            p = o.getPartialVisibilityGutter(u, n || s, h, t.deviceType);
          return l(e, s || n ? a(t, p, e, i) : d ? r(t, e, i) : c);
        }),
        (e.getSlidesToSlide = function (t, e) {
          var i = t.domLoaded,
            o = t.slidesToShow,
            n = t.containerWidth,
            r = t.itemWidth,
            s = e.deviceType,
            a = e.responsive,
            l = e.slidesToSlide || 1,
            u = Boolean(i && o && n && r);
          return (
            e.ssr &&
              e.deviceType &&
              !u &&
              Object.keys(a).forEach(function (t) {
                var e = a[t].slidesToSlide;
                s === t && e && (l = e);
              }),
            u &&
              Object.keys(a).forEach(function (t) {
                var e = a[t],
                  i = e.breakpoint,
                  o = e.slidesToSlide,
                  n = i.max,
                  r = i.min;
                o &&
                  window.innerWidth >= r &&
                  window.innerWidth <= n &&
                  (l = o);
              }),
            l
          );
        });
    },
    2232: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(4526),
        n = i(7673);
      e.getLookupTableForNextSlides = function (t, e, i, r) {
        var s = {},
          a = n.getSlidesToSlide(e, i);
        return (
          Array(t)
            .fill(0)
            .forEach(function (t, i) {
              var n = o.getOriginalCounterPart(i, e, r);
              if (0 === i) s[0] = n;
              else {
                var l = s[i - 1] + a;
                s[i] = l;
              }
            }),
          s
        );
      };
    },
    2624: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      (e.getPartialVisibilityGutter = function (t, e, i, o) {
        var n = 0,
          r = o || i;
        return (
          e &&
            r &&
            (n = t[r].partialVisibilityGutter || t[r].paritialVisibilityGutter),
          n
        );
      }),
        (e.getWidthFromDeviceType = function (t, e) {
          var i;
          return e[t] && (i = (100 / e[t].items).toFixed(1)), i;
        }),
        (e.getItemClientSideWidth = function (t, e, i) {
          return Math.round(i / (e + (t.centerMode ? 1 : 0)));
        });
    },
    694: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(4526);
      (e.getOriginalCounterPart = o.getOriginalCounterPart),
        (e.getClones = o.getClones),
        (e.checkClonesPosition = o.checkClonesPosition),
        (e.getInitialSlideInInfiniteMode = o.getInitialSlideInInfiniteMode);
      var n = i(2624);
      (e.getWidthFromDeviceType = n.getWidthFromDeviceType),
        (e.getPartialVisibilityGutter = n.getPartialVisibilityGutter),
        (e.getItemClientSideWidth = n.getItemClientSideWidth);
      var r = i(7673);
      (e.getInitialState = r.getInitialState),
        (e.getIfSlideIsVisbile = r.getIfSlideIsVisbile),
        (e.getTransformForCenterMode = r.getTransformForCenterMode),
        (e.getTransformForPartialVsibile = r.getTransformForPartialVsibile),
        (e.isInLeftEnd = r.isInLeftEnd),
        (e.isInRightEnd = r.isInRightEnd),
        (e.notEnoughChildren = r.notEnoughChildren),
        (e.getSlidesToSlide = r.getSlidesToSlide);
      var s = i(4548);
      e.throttle = s.default;
      var a = i(174);
      e.throwError = a.default;
      var l = i(2337);
      e.populateNextSlides = l.populateNextSlides;
      var u = i(1365);
      e.populatePreviousSlides = u.populatePreviousSlides;
      var h = i(528);
      e.populateSlidesOnMouseTouchMove = h.populateSlidesOnMouseTouchMove;
    },
    528: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.populateSlidesOnMouseTouchMove = function (t, e, i, o, n, r) {
          var s,
            a,
            l = t.itemWidth,
            u = t.slidesToShow,
            h = t.totalItems,
            d = t.currentSlide,
            c = e.infinite,
            p = !1,
            f = Math.round((i - o) / l),
            m = Math.round((o - i) / l),
            v = i < n;
          if (n < i && f <= u) {
            s = "right";
            var g = Math.abs(-l * (h - u)),
              y = r - (o - n),
              S = d === h - u;
            (Math.abs(y) <= g || (S && c)) && ((a = y), (p = !0));
          }
          return (
            v &&
              m <= u &&
              ((s = "left"),
              ((y = r + (n - o)) <= 0 || (0 === d && c)) &&
                ((p = !0), (a = y))),
            { direction: s, nextPosition: a, canContinue: p }
          );
        });
    },
    2337: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(7673);
      e.populateNextSlides = function (t, e, i) {
        void 0 === i && (i = 0);
        var n,
          r,
          s = t.slidesToShow,
          a = t.currentSlide,
          l = t.itemWidth,
          u = t.totalItems,
          h = o.getSlidesToSlide(t, e),
          d = a + 1 + i + s + (0 < i ? 0 : h);
        return (
          (r =
            d <= u
              ? -l * (n = a + i + (0 < i ? 0 : h))
              : u < d && a !== u - s
                ? -l * (n = u - s)
                : (n = void 0)),
          { nextSlides: n, nextPosition: r }
        );
      };
    },
    1365: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(5043),
        n = i(7673),
        r = i(7673);
      e.populatePreviousSlides = function (t, e, i) {
        void 0 === i && (i = 0);
        var s,
          a,
          l = t.currentSlide,
          u = t.itemWidth,
          h = t.slidesToShow,
          d = e.children,
          c = e.showDots,
          p = e.infinite,
          f = n.getSlidesToSlide(t, e),
          m = l - i - (0 < i ? 0 : f),
          v = (o.Children.toArray(d).length - h) % f;
        return (
          (a =
            0 <= m
              ? ((s = m),
                c && !p && 0 < v && r.isInRightEnd(t) && (s = l - v),
                -u * s)
              : (s = m < 0 && 0 !== l ? 0 : void 0)),
          { nextSlides: s, nextPosition: a }
        );
      };
    },
    4548: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.default = function (t, e, i) {
        var o;
        return function () {
          var n = arguments;
          o ||
            (t.apply(this, n),
            (o = !0),
            "function" == typeof i && i(!0),
            setTimeout(function () {
              (o = !1), "function" == typeof i && i(!1);
            }, e));
        };
      };
    },
    174: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var i = e.partialVisbile,
            o = e.partialVisible,
            n = e.centerMode,
            r = e.ssr,
            s = e.responsive;
          if ((i || o) && n)
            throw new Error(
              "center mode can not be used at the same time with partialVisible",
            );
          if (!s)
            throw r
              ? new Error(
                  "ssr mode need to be used in conjunction with responsive prop",
                )
              : new Error(
                  "Responsive prop is needed for deciding the amount of items to show on the screen",
                );
          if (s && "object" != typeof s)
            throw new Error("responsive prop must be an object");
        });
    },
  },
]);
//# sourceMappingURL=185.429a2126.chunk.js.map
