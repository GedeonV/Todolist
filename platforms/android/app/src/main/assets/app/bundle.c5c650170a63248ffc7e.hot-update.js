webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=template&id=66f864ec&":
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
        "ActionBar",
        { staticClass: "menu", attrs: { title: "Details", fontSize: "24" } },
        [
          _c("NavigationButton", {
            attrs: { text: "Go back", "android.systemIcon": "ic_menu_back" },
            on: { tap: _vm.onBack }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("Label", { attrs: { text: _vm.item.content, fontSize: "20" } }),
          _c("Label", { attrs: { fontSize: "20" } }, [_vm._v("Done: ")]),
          _c("Switch", {
            attrs: { checked: _vm.item.done, checked: _vm.item.done },
            on: {
              checkedChange: function($event) {
                return _vm.$set(_vm.item, "done", $event.value)
              }
            }
          }),
          _vm.item.done
            ? _c(
                "StackLayout",
                [
                  _c("Button", {
                    staticClass: "sort",
                    attrs: { text: "Supprimer", fontSize: "20", width: "200" },
                    on: { tap: _vm.deleteTodo }
                  })
                ],
                1
              )
            : _vm._e()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbC52dWU/Y2M4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4QixtQ0FBbUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUF3RDtBQUM1RSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLHlDQUF5QyxFQUFFO0FBQzNFLHVCQUF1QixTQUFTLGlCQUFpQixFQUFFO0FBQ25EO0FBQ0Esb0JBQW9CLGlEQUFpRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBa0Q7QUFDOUUseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYzVjNjUwMTcwYTYzMjQ4ZmZjN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWVudVwiLCBhdHRyczogeyB0aXRsZTogXCJEZXRhaWxzXCIsIGZvbnRTaXplOiBcIjI0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiR28gYmFja1wiLCBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJhY2sgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmNvbnRlbnQsIGZvbnRTaXplOiBcIjIwXCIgfSB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgZm9udFNpemU6IFwiMjBcIiB9IH0sIFtfdm0uX3YoXCJEb25lOiBcIildKSxcbiAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBjaGVja2VkOiBfdm0uaXRlbS5kb25lLCBjaGVja2VkOiBfdm0uaXRlbS5kb25lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGVja2VkQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZG9uZVwiLCAkZXZlbnQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uaXRlbS5kb25lXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTdXBwcmltZXJcIiwgZm9udFNpemU6IFwiMjBcIiwgd2lkdGg6IFwiMjAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZGVsZXRlVG9kbyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=