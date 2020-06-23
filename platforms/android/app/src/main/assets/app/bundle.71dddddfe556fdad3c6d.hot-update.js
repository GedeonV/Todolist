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
      mail: "",
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
          username: this.mail,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaWduaW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQURBO0FBRUE7QUFGQSxHQURBOztBQUtBO0FBQ0E7QUFDQSxjQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FYQTs7QUFZQSxnQkFaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQSxtREFDQSxJQURBLENBQ0E7QUFDQSwyREFEQTtBQUVBO0FBQ0EsNkJBREE7QUFFQTtBQUZBO0FBRkEsT0FEQSxFQVFBLElBUkEsQ0FRQTtBQUNBO0FBQ0E7QUFDQSxPQVhBLEVBWUEsS0FaQSxDQVlBO0FBQ0E7QUFDQSxPQWRBO0FBZUE7O0FBdkJBO0FBYkEsRyIsImZpbGUiOiJidW5kbGUuNzFkZGRkZGZlNTU2ZmRhZDNjNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJTZSBjb25uZWN0ZXJcIiAvPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJ0ZXh0LWVycm9yXCIgOnRleHQ9XCJlcnJvclwiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBtYXJnaW5Cb3R0b209XCIyNVwiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxTdGFja0xheW91dCBtYXJnaW5Cb3R0b209XCIyNVwiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcbiAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdGFja0xheW91dCAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJTZSBjb25uZWN0ZXJcIiBAdGFwPVwic3VibWl0XCIgLz5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ3LDqWVyIHVuIGNvbXB0ZVwiIEB0YXA9XCJnb1RvU2lnbnVwXCIgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFNpZ251cCBmcm9tIFwiLi9TaWdudXBcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFNpZ251cCxcbiAgICBIb21lXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGVycm9yOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgbmFtZTogXCJTaWduaW5cIixcbiAgbWV0aG9kczoge1xuICAgIGdvVG9TaWdudXAoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNpZ251cCk7XG4gICAgfSxcbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSk7XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdCh7XG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLnRvZG9saXN0LnNoZXJwYS5vbmUvdXNlcnMvc2lnbmluXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMubWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRleHQtZXJyb3Ige1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDUxKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9ybSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjU7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTg7XG59XG5cbi5pbnB1dC1maWVsZCAuaW5wdXQge1xuICBmb250LXNpemU6IDU0O1xufVxuXG4ubG9naW4tbGFiZWwge1xuICBjb2xvcjogI2E4YThhODtcbiAgZm9udC1zaXplOiAxNjtcbn1cblxuLnNpZ24tdXAtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMDtcbn1cblxuLmJvbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9