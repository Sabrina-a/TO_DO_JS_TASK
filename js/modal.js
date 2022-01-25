const close = document.getElementById("close");
const open = document.getElementById("open");
const user_data = document.getElementById("user-data");
const add_data = document.getElementById("add-data");
const filterable_element = document.getElementById("filterable-element");

function addData(e) {
  e.preventDefault();
  let box = "";
  box += ` <tr class="object py-3  ${filter}">
  <td class="">${user_data.value}</td>
<td>
<label class="like">
<input id="input" type="checkbox" />
<p class="hearth"></p>
</label>
</td>
<td><button id='close' onclick="removeTodo()" >close</button></td>
<td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg></td>
  </tr>`;
  // console.log(user_data.value);
  filterable_element.innerHTML += box;
  modall.classList.remove("show-modall");
  user_data.value = "";
}

//show modall
open.addEventListener("click", () => {
  modall.classList.add("show-modall");
});

// hide modall on out side click

window.addEventListener("click", (e) =>
  e.target == modall ? modall.classList.remove("show-modall") : false
);

add_data.addEventListener("click", addData);

//remove todo
function removeTodo(e) {
  var row = e.target;
  console.log(row);
  // row.parentNode.removeChild(row);
}

// close.addEventListener("click", function () {
//   removeTodo(btn);
// });
