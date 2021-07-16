__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js").default;


Vue.component('example-component', __webpack_require__("./resources/js/components/ExampleComponent.vue").default);

var app = new Vue({
  el: '#app'
});