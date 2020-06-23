webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Signup.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Signin.vue");
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
  name: "Signup",
  components: {
    Signin: _Signin__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      error: "",
      arrayGenre: ["male", "female"],
      mail: "",
      lastname: "",
      firstname: "",
      genre: 0,
      patternMail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      patternNom: /[A-Z]+/,
      mailPattern: false,
      lastnamePattern: false,
      firstnamePattern: false,
      isValide: false
    };
  },

  methods: {
    goToSignin() {
      this.$navigateTo(_Signin__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    validateForm() {
      this.mailPattern = this.patternMail.test(this.mail);
      this.firstnamePattern = this.patternNom.test(this.firstname);
      this.lastnamePattern = this.patternNom.test(this.lastname);

      if (this.mailPattern && this.lastnamePattern && this.firstnamePattern) {
        this.isValide = true;
        this.error = "";
      } else {
        this.error = "Erreur dans le formulaire";
        this.isValide = false;
      }
    },

    submit() {
      this.validateForm();

      if (this.isValide) {
        this.genre = this.genre == 0 ? "male" : "female";
        console.log({
          email: this.mail,
          firstname: this.firstname,
          lastname: this.lastname,
          gender: this.genre
        });
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post({
          url: "https://api.todolist.sherpa.one/users/signup",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            email: this.mail,
            firstname: this.firstname,
            lastname: this.lastname,
            gender: this.genre
          })
        }).then(response => {
          alert({
            title: "Données de création du compte",
            message: "Sauvegarder les données suivantes : " + response.json(),
            okButtonText: "Ok"
          });
          console.log(response.json());
        }).catch(error => {
          console.log(error.message);
        });
      }
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaWdudXAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7O0FBS0E7QUFDQTtBQUNBLGVBREE7QUFFQSxvQ0FGQTtBQUdBLGNBSEE7QUFJQSxrQkFKQTtBQUtBLG1CQUxBO0FBTUEsY0FOQTtBQU9BLHlLQVBBO0FBUUEsMEJBUkE7QUFTQSx3QkFUQTtBQVVBLDRCQVZBO0FBV0EsNkJBWEE7QUFZQTtBQVpBO0FBY0EsR0FwQkE7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FmQTs7QUFnQkE7QUFFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQSwwQkFEQTtBQUVBLG1DQUZBO0FBR0EsaUNBSEE7QUFJQTtBQUpBO0FBUUEscURBQ0EsSUFEQSxDQUNBO0FBQ0EsNkRBREE7QUFFQTtBQUFBO0FBQUEsV0FGQTtBQUdBO0FBQ0EsNEJBREE7QUFFQSxxQ0FGQTtBQUdBLG1DQUhBO0FBSUE7QUFKQTtBQUhBLFNBREEsRUFXQSxJQVhBLENBV0E7QUFDQTtBQUNBLGtEQURBO0FBRUEsNkVBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQSxTQWxCQSxFQW1CQSxLQW5CQSxDQW1CQTtBQUNBO0FBQ0EsU0FyQkE7QUFzQkE7QUFDQTs7QUFyREE7QUFyQkEsRyIsImZpbGUiOiJidW5kbGUuZjQ4MzBlNmQwM2Q4OGRhMzRhZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRvZG9saXN0XCIgY2xhc3M9XCJtZW51XCIgZm9udFNpemU9XCIyNFwiPlxuICAgICAgPE5hdmlnYXRpb25CdXR0b25cbiAgICAgICAgdGV4dD1cIkdvIGJhY2tcIlxuICAgICAgICBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIlxuICAgICAgICBAdGFwPVwiZ29Ub1NpZ25pblwiXG4gICAgICAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiQ3LDqWVyIHVuIGNvbXB0ZVwiIC8+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cInRleHQtZXJyb3JcIiA6dGV4dD1cImVycm9yXCI+PC9MYWJlbD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbkJvdHRvbT1cIjI1XCI+XG4gICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWxcIiBmb250U2l6ZT1cIjE4XCIgdi1tb2RlbD1cIm1haWxcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJOb21cIiBmb250U2l6ZT1cIjE4XCIgdi1tb2RlbD1cImxhc3RuYW1lXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbkJvdHRvbT1cIjI1XCI+XG4gICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiUHLDqW5vbVwiIGZvbnRTaXplPVwiMThcIiB2LW1vZGVsPVwiZmlyc3RuYW1lXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbkJvdHRvbT1cIjI1XCI+XG4gICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwiYXJyYXlHZW5yZVwiIHYtbW9kZWw9XCJnZW5yZVwiIHNlbGVjdGVkSW5kZXg9XCIwXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ3LDqWVyIHNvbiBjb21wdGVcIiBAdGFwPVwic3VibWl0XCIgLz5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFNpZ25pbiBmcm9tIFwiLi9TaWduaW5cIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTaWdudXBcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNpZ25pblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogXCJcIixcbiAgICAgIGFycmF5R2VucmU6IFtcIm1hbGVcIiwgXCJmZW1hbGVcIl0sXG4gICAgICBtYWlsOiBcIlwiLFxuICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICBnZW5yZTogMCxcbiAgICAgIHBhdHRlcm5NYWlsOiAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgcGF0dGVybk5vbTogL1tBLVpdKy8sXG4gICAgICBtYWlsUGF0dGVybjogZmFsc2UsXG4gICAgICBsYXN0bmFtZVBhdHRlcm46IGZhbHNlLFxuICAgICAgZmlyc3RuYW1lUGF0dGVybjogZmFsc2UsXG4gICAgICBpc1ZhbGlkZTogZmFsc2VcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ29Ub1NpZ25pbigpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2lnbmluKTtcbiAgICB9LFxuICAgIHZhbGlkYXRlRm9ybSgpIHtcbiAgICAgIHRoaXMubWFpbFBhdHRlcm4gPSB0aGlzLnBhdHRlcm5NYWlsLnRlc3QodGhpcy5tYWlsKTtcbiAgICAgIHRoaXMuZmlyc3RuYW1lUGF0dGVybiA9IHRoaXMucGF0dGVybk5vbS50ZXN0KHRoaXMuZmlyc3RuYW1lKTtcbiAgICAgIHRoaXMubGFzdG5hbWVQYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTm9tLnRlc3QodGhpcy5sYXN0bmFtZSk7XG4gICAgICBpZiAodGhpcy5tYWlsUGF0dGVybiAmJiB0aGlzLmxhc3RuYW1lUGF0dGVybiAmJiB0aGlzLmZpcnN0bmFtZVBhdHRlcm4pIHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiRXJyZXVyIGRhbnMgbGUgZm9ybXVsYWlyZVwiO1xuICAgICAgICB0aGlzLmlzVmFsaWRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgIHRoaXMudmFsaWRhdGVGb3JtKCk7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkZSkge1xuICAgICAgICB0aGlzLmdlbnJlID0gdGhpcy5nZW5yZSA9PSAwID8gXCJtYWxlXCIgOiBcImZlbWFsZVwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHtcbiAgICAgICAgICBlbWFpbDogdGhpcy5tYWlsLFxuICAgICAgICAgIGZpcnN0bmFtZTogdGhpcy5maXJzdG5hbWUsXG4gICAgICAgICAgbGFzdG5hbWU6IHRoaXMubGFzdG5hbWUsXG4gICAgICAgICAgZ2VuZGVyOiB0aGlzLmdlbnJlXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkudG9kb2xpc3Quc2hlcnBhLm9uZS91c2Vycy9zaWdudXBcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgZW1haWw6IHRoaXMubWFpbCxcbiAgICAgICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgbGFzdG5hbWU6IHRoaXMubGFzdG5hbWUsXG4gICAgICAgICAgICAgIGdlbmRlcjogdGhpcy5nZW5yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRG9ubsOpZXMgZGUgY3LDqWF0aW9uIGR1IGNvbXB0ZVwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNhdXZlZ2FyZGVyIGxlcyBkb25uw6llcyBzdWl2YW50ZXMgOiBcIiArIHJlc3BvbnNlLmpzb24oKSxcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnRleHQtZXJyb3Ige1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDUxKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==