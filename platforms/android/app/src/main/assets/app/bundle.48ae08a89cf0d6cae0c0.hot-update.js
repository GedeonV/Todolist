webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue");
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
  name: "List",
  components: {
    Detail: _Detail__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  data() {
    return {
      filter: 0
    };
  },

  methods: {
    colorDone(done) {
      return done ? "text-green" : "text-red";
    },

    onTap(event) {
      this.$navigateTo(_Detail__WEBPACK_IMPORTED_MODULE_0__["default"], {
        props: {
          item: event.item
        }
      });
    },

    addTodo() {
      const dialogs = __webpack_require__("tns-core-modules/ui/dialogs");

      prompt({
        title: "Ajout d'un item",
        message: "Intitulé de l'item",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        inputType: dialogs.inputType.text
      }).then(result => {
        this.$store.state.todos.unshift({
          content: result.text,
          done: false
        });
        console.log(`Dialog result: ${result.result}, text: ${result.text}`);
      });
    }

  },
  computed: {
    filter_todos: function () {
      if (this.filter == 1) {
        return this.arrayTodo.filter(todo => todo.done);
      } else if (this.filter == 0) {
        return this.arrayTodo;
      } else {
        return this.arrayTodo.filter(todo => !todo.done);
      }
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBRUE7QUFDQSxjQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVRBOztBQVVBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBOztBQUNBO0FBQ0EsZ0NBREE7QUFFQSxxQ0FGQTtBQUdBLDBCQUhBO0FBSUEsa0NBSkE7QUFLQTtBQUxBLFNBTUEsSUFOQSxDQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE9BVEE7QUFVQTs7QUFwQkEsR0FWQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFoQ0EsRyIsImZpbGUiOiJidW5kbGUuNDhhZTA4YTg5Y2YwZDZjYWUwYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0PlxuICAgIDxCdXR0b24gY2xhc3M9XCJzb3J0XCIgdGV4dD1cIkFqb3V0ZXIgdW5lIHTDomNoZVwiIEB0YXA9XCJhZGRUb2RvXCIgLz5cbiAgICA8U2VnbWVudGVkQmFyIHYtbW9kZWw9XCJmaWx0ZXJcIj5cbiAgICAgIDxTZWdtZW50ZWRCYXJJdGVtIHRpdGxlPVwiVG91c1wiIC8+XG4gICAgICA8U2VnbWVudGVkQmFySXRlbSB0aXRsZT1cIkZhaXRcIiAvPlxuICAgICAgPFNlZ21lbnRlZEJhckl0ZW0gdGl0bGU9XCJQYXMgZW5jb3JlIGZhaXRcIiAvPlxuICAgIDwvU2VnbWVudGVkQmFyPlxuICAgIDxMaXN0VmlldyBmb3I9XCJ0b2RvIGluIGZpbHRlcl90b2Rvc1wiIEBpdGVtVGFwPVwib25UYXBcIiBjbGFzcz1cImxpc3RWaWV3XCI+XG4gICAgICA8di10ZW1wbGF0ZSBjbGFzcz1cIml0ZW1WaWV3XCI+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRvZG8uY29udGVudFwiIGZvbnRTaXplPVwiMThcIiA6Y2xhc3M9XCJjb2xvckRvbmUodG9kby5kb25lKVwiIC8+XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgdi1pZj1cInRvZG8uZG9uZVwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cInNvcnRcIiB0ZXh0PVwiWFwiIEB0YXA9XCJkZWxldGVUb2RvKHRvZG8uY29udGVudClcIiBmb250U2l6ZT1cIjIwXCIgLz5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC92LXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9EZXRhaWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkxpc3RcIixcbiAgY29tcG9uZW50czoge1xuICAgIERldGFpbFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXI6IDBcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY29sb3JEb25lKGRvbmUpIHtcbiAgICAgIHJldHVybiBkb25lID8gXCJ0ZXh0LWdyZWVuXCIgOiBcInRleHQtcmVkXCI7XG4gICAgfSxcbiAgICBvblRhcChldmVudCkge1xuXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKERldGFpbCwgeyBwcm9wczogeyBpdGVtOiBldmVudC5pdGVtIH0gfSk7XG4gICAgfSxcbiAgICBhZGRUb2RvKCkge1xuICAgICAgY29uc3QgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgICBwcm9tcHQoe1xuICAgICAgICB0aXRsZTogXCJBam91dCBkJ3VuIGl0ZW1cIixcbiAgICAgICAgbWVzc2FnZTogXCJJbnRpdHVsw6kgZGUgbCdpdGVtXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudG9kb3MudW5zaGlmdCh7IGNvbnRlbnQ6IHJlc3VsdC50ZXh0LCBkb25lOiBmYWxzZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYERpYWxvZyByZXN1bHQ6ICR7cmVzdWx0LnJlc3VsdH0sIHRleHQ6ICR7cmVzdWx0LnRleHR9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZmlsdGVyX3RvZG9zOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlciA9PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9kby5maWx0ZXIodG9kbyA9PiB0b2RvLmRvbmUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlciA9PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9kbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9kby5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLnNvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzODU5O1xufVxuLmxpc3RWaWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2Mzg1OTtcbn1cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjYzk0ODViO1xufVxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzIxYmY3Mztcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9