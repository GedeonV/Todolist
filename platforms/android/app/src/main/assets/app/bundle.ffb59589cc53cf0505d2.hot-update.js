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
      //console.log(event.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MaXN0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBRUE7QUFDQSxjQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVRBOztBQVVBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQVBBOztBQVFBO0FBQ0E7O0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLHFDQUZBO0FBR0EsMEJBSEE7QUFJQSxrQ0FKQTtBQUtBO0FBTEEsU0FNQSxJQU5BLENBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsT0FUQTtBQVVBOztBQXBCQSxHQVZBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWhDQSxHIiwiZmlsZSI6ImJ1bmRsZS5mZmI1OTU4OWNjNTNjZjA1MDVkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQ+XG4gICAgPEJ1dHRvbiBjbGFzcz1cInNvcnRcIiB0ZXh0PVwiQWpvdXRlciB1bmUgdMOiY2hlXCIgQHRhcD1cImFkZFRvZG9cIiAvPlxuICAgIDxTZWdtZW50ZWRCYXIgdi1tb2RlbD1cImZpbHRlclwiPlxuICAgICAgPFNlZ21lbnRlZEJhckl0ZW0gdGl0bGU9XCJUb3VzXCIgLz5cbiAgICAgIDxTZWdtZW50ZWRCYXJJdGVtIHRpdGxlPVwiRmFpdFwiIC8+XG4gICAgICA8U2VnbWVudGVkQmFySXRlbSB0aXRsZT1cIlBhcyBlbmNvcmUgZmFpdFwiIC8+XG4gICAgPC9TZWdtZW50ZWRCYXI+XG4gICAgPExpc3RWaWV3IGZvcj1cInRvZG8gaW4gZmlsdGVyX3RvZG9zXCIgQGl0ZW1UYXA9XCJvblRhcFwiIGNsYXNzPVwibGlzdFZpZXdcIj5cbiAgICAgIDx2LXRlbXBsYXRlIGNsYXNzPVwiaXRlbVZpZXdcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidG9kby5jb250ZW50XCIgZm9udFNpemU9XCIxOFwiIDpjbGFzcz1cImNvbG9yRG9uZSh0b2RvLmRvbmUpXCIgLz5cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxTdGFja0xheW91dCB2LWlmPVwidG9kby5kb25lXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwic29ydFwiIHRleHQ9XCJYXCIgQHRhcD1cImRlbGV0ZVRvZG8odG9kby5jb250ZW50KVwiIGZvbnRTaXplPVwiMjBcIiAvPlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L3YtdGVtcGxhdGU+XG4gICAgPC9MaXN0Vmlldz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL0RldGFpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTGlzdFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgRGV0YWlsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlcjogMFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjb2xvckRvbmUoZG9uZSkge1xuICAgICAgcmV0dXJuIGRvbmUgPyBcInRleHQtZ3JlZW5cIiA6IFwidGV4dC1yZWRcIjtcbiAgICB9LFxuICAgIG9uVGFwKGV2ZW50KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LmluZGV4KTtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRGV0YWlsLCB7IHByb3BzOiB7IGl0ZW06IGV2ZW50Lml0ZW0gfSB9KTtcbiAgICB9LFxuICAgIGFkZFRvZG8oKSB7XG4gICAgICBjb25zdCBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbiAgICAgIHByb21wdCh7XG4gICAgICAgIHRpdGxlOiBcIkFqb3V0IGQndW4gaXRlbVwiLFxuICAgICAgICBtZXNzYWdlOiBcIkludGl0dWzDqSBkZSBsJ2l0ZW1cIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS50b2Rvcy51bnNoaWZ0KHsgY29udGVudDogcmVzdWx0LnRleHQsIGRvbmU6IGZhbHNlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIHJlc3VsdDogJHtyZXN1bHQucmVzdWx0fSwgdGV4dDogJHtyZXN1bHQudGV4dH1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJfdG9kb3M6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyID09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb2RvLmZpbHRlcih0b2RvID0+IHRvZG8uZG9uZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyID09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb2RvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb2RvLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4uc29ydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjM4NTk7XG59XG4ubGlzdFZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzODU5O1xufVxuLnRleHQtcmVkIHtcbiAgY29sb3I6ICNjOTQ4NWI7XG59XG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjFiZjczO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=