(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,function(t,e,c){},,,,,,function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var o=c(1),a=c.n(o),n=c(8),i=c.n(n),r=c(5),s=c(6),l=c.p+"static/media/icon-moon.6c03114b.svg",d=c.p+"static/media/icon-sun.910b1f9a.svg",m=(c(13),c(0));function j(){return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:"TO DO"}),Object(m.jsx)("img",{className:"iconSun",src:d,alt:"DarkMode"}),Object(m.jsx)("img",{className:"iconMoon",src:l,alt:"LightMode"})]})}c(15);function u(){return Object(m.jsxs)("div",{className:"attribution",children:["Coded by .",Object(m.jsx)("a",{href:"https://github.com/Filipchi",children:"Filipchi"}),"."]})}c(7);function b(t){var e=t.agregarTodo;return Object(m.jsxs)("div",{className:"createTodo",children:[Object(m.jsx)("div",{className:"circulo"}),Object(m.jsx)("input",{className:"input",placeholder:"Create a new todo...",onKeyPress:function(t){13===t.charCode&&""!==t.target.value&&(e(t.target.value),t.target.value="")}})]})}var f=c.p+"static/media/icon-check.a8fb15d0.svg",p=c.p+"static/media/icon-cross.6ee81d30.svg";c(16);function O(t){var e=t.todo,c=t.eliminarTodo,o=t.marcarTodo;return Object(m.jsxs)("li",{className:"itemTodo",children:[Object(m.jsx)("div",{className:"circulo ".concat(e.completed&&"checkIcon-active"),children:Object(m.jsx)("img",{className:"checkIcon-hidden ".concat(e.completed&&"checkIcon"),src:f,alt:"Check icon"})}),Object(m.jsx)("p",{onClick:function(){return o(e.text)},className:"todoText ".concat(e.completed&&"todoText-check"),children:e.text},e.text),Object(m.jsx)("img",{onClick:function(){return c(e.text)},className:"crossIcon-hidden ".concat(e.completed&&"crossIcon-active"),src:p,alt:"Cross Icon"})]})}c(17);function g(t){var e=t.completedTodos,c=t.totalTodos,o=t.eliminarTodoCompletados;return Object(m.jsxs)("div",{className:"CounterTodo",children:[Object(m.jsxs)("p",{className:"items-left",children:[c-e," items left"]}),Object(m.jsx)("button",{onClick:o,className:"clear-btn",children:"Clear Completed"})]})}c(18);function h(t){var e=t.mostrarTodos,c=t.totalTodos,o=t.completedTodos,a=t.eliminarTodo,n=t.marcarTodo,i=t.eliminarTodoCompletados;return Object(m.jsxs)("section",{className:"list",children:[Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(O,{marcarTodo:n,eliminarTodo:a,todo:t},t.text)}))}),Object(m.jsx)(g,{eliminarTodoCompletados:i,eliminarTodo:a,totalTodos:c,completedTodos:o})]})}c(19);function x(t){var e=t.setFiltrarTodos,c=function(t){document.querySelectorAll(".filter-btn").forEach((function(e){e.classList.remove("filter-btn-active"),t.target.innerHTML===e.innerHTML&&e.classList.add("filter-btn-active")}));var c=t.target.classList;c.contains("all-btn")&&(c.add("filter-btn-active"),e("all")),c.contains("active-btn")&&(c.add("filter-btn-active"),e("active")),c.contains("completed-btn")&&(c.add("filter-btn-active"),e("completed"))};return Object(m.jsxs)("div",{className:"FilterTodo",children:[Object(m.jsx)("button",{className:"filter-btn all-btn",onClick:c,children:"All"}),Object(m.jsx)("button",{className:"filter-btn active-btn",onClick:c,children:"Active"}),Object(m.jsx)("button",{className:"filter-btn completed-btn",onClick:c,children:"Completed"})]})}var v=c.p+"static/media/bg-desktop-dark.e347a70c.jpg",T=c.p+"static/media/bg-mobile-dark.fa20e05e.jpg";c(20);var k=function(){var t=JSON.parse(localStorage.getItem("todos"));t||(t=[]);var e=Object(o.useState)(t),c=Object(s.a)(e,2),a=c[0],n=c[1],i=Object(o.useState)("all"),l=Object(s.a)(i,2),d=l[0],f=l[1],p=a.filter((function(t){return t.completed})).length,O=a.length,g=[];return"all"===d?g=a:"active"===d?g=a.filter((function(t){return!0!==t.completed})):"completed"===d&&(g=a.filter((function(t){return!1!==t.completed}))),Object(o.useEffect)((function(){t?localStorage.setItem("todos",JSON.stringify(a)):localStorage.setItem("todos",JSON.stringify([]))}),[a,t]),Object(m.jsxs)(o.Fragment,{children:[Object(m.jsx)("img",{className:"img-background-dark-desktop img-background",src:v,alt:"Background dark desktop"}),Object(m.jsx)("img",{className:"img-background-dark-mobile img-background",src:T,alt:"Background dark mobile"}),Object(m.jsx)(j,{}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(b,{agregarTodo:function(t){var e=Object(r.a)(a);e.push({text:t,completed:!1}),n(e)}}),Object(m.jsx)(h,{completedTodos:p,totalTodos:O,mostrarTodos:g,marcarTodo:function(t){var e=a.filter((function(e){return e.text===t}));e[0].completed?e[0].completed=!1:e[0].completed=!0,e=Object(r.a)(a),n(e)},eliminarTodo:function(t){var e=a.filter((function(e){return e.text!==t}));n(e)},eliminarTodoCompletados:function(){var t=a.filter((function(t){return!0!==t.completed}));n(t)}}),Object(m.jsx)(x,{setFiltrarTodos:f})]}),Object(m.jsx)("p",{className:"drag-and-drop",children:"Drag and drop to reorder list"}),Object(m.jsx)(u,{})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.cd6a72ae.chunk.js.map