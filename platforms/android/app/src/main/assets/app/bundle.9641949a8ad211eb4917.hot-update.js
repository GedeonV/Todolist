webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Signin.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Signup.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Signup: _Signup__WEBPACK_IMPORTED_MODULE_0__["default"],
    Home: _Home__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },

  name: "Signin",
  methods: {
    goToSignup() {
      this.$navigateTo(_Signup__WEBPACK_IMPORTED_MODULE_0__["default"]);
    },

    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    submit() {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post({
        url: "https://api.todolist.sherpa.one/users/signin",
        data: {
          username: this.email,
          password: this.password
        }
      }).then(response => {
        this.error = "";
        this.goToHome();
      }).catch(error => {
        this.error = error.message;
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Signin.vue?vue&type=template&id=71b5abbd&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Label", {
                staticClass: "header",
                attrs: { text: "Sign in" }
              }),
              _c("Label", {
                staticClass: "text-error",
                attrs: { text: _vm.error }
              }),
              _c(
                "StackLayout",
                { attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    attrs: {
                      hint: "Email",
                      keyboardType: "email",
                      fontSize: "18",
                      text: _vm.email
                    },
                    on: {
                      textChange: function($event) {
                        _vm.email = $event.value
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { marginBottom: "25" } },
                [
                  _c("TextField", {
                    ref: "password",
                    attrs: {
                      hint: "Password",
                      fontSize: "18",
                      secure: "true",
                      text: _vm.password
                    },
                    on: {
                      textChange: function($event) {
                        _vm.password = $event.value
                      }
                    }
                  }),
                  _c("StackLayout")
                ],
                1
              ),
              _c("Button", {
                attrs: { text: "Sign in" },
                on: { tap: _vm.submit }
              }),
              _c("Button", {
                attrs: { text: "Sign up" },
                on: { tap: _vm.goToSignup }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaWduaW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lnbmluLnZ1ZT81N2VkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQURBO0FBRUE7QUFGQSxHQURBOztBQUtBO0FBQ0E7QUFDQSxlQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FYQTs7QUFZQSxnQkFaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQSxtREFDQSxJQURBLENBQ0E7QUFDQSwyREFEQTtBQUVBO0FBQ0EsOEJBREE7QUFFQTtBQUZBO0FBRkEsT0FEQSxFQVFBLElBUkEsQ0FRQTtBQUNBO0FBQ0E7QUFDQSxPQVhBLEVBWUEsS0FaQSxDQVlBO0FBQ0E7QUFDQSxPQWRBO0FBZUE7O0FBdkJBO0FBYkEsRzs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMscUJBQXFCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMscUJBQXFCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS45NjQxOTQ5YThhZDIxMWViNDkxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIlNpZ24gaW5cIiAvPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJ0ZXh0LWVycm9yXCIgOnRleHQ9XCJlcnJvclwiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBtYXJnaW5Cb3R0b209XCIyNVwiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiIEB0YXA9XCJzdWJtaXRcIiAvPlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwXCIgQHRhcD1cImdvVG9TaWdudXBcIiAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2lnbnVwIGZyb20gXCIuL1NpZ251cFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgU2lnbnVwLFxuICAgIEhvbWVcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGVycm9yOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgbmFtZTogXCJTaWduaW5cIixcbiAgbWV0aG9kczoge1xuICAgIGdvVG9TaWdudXAoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNpZ251cCk7XG4gICAgfSxcbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdCh7XG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLnRvZG9saXN0LnNoZXJwYS5vbmUvdXNlcnMvc2lnbmluXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIlwiO1xuICAgICAgICAgIHRoaXMuZ29Ub0hvbWUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0LWVycm9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjU1LCAwLCA1MSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcm0ge1xuICBmbGV4LWdyb3c6IDE7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDI1O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDE4O1xufVxuXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcbiAgZm9udC1zaXplOiA1NDtcbn1cblxuLmxvZ2luLWxhYmVsIHtcbiAgY29sb3I6ICNhOGE4YTg7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG5cbi5zaWduLXVwLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjA7XG59XG5cbi5ib2xkIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2lnbiBpblwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZXJyb3JcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uZXJyb3IgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNpZ24gaW5cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaWduIHVwXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvU2lnbnVwIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9