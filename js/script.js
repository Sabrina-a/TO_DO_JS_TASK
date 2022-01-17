const close = document.getElementById("close");
const open = document.getElementById("open");
const user_data = document.getElementById("user-data");
const add_data = document.getElementById("add-data");
const filterable_element = document.getElementById("filterable-element");
// let elements = document.getElementsByClassName("filter");
const btns = document.querySelectorAll(".btn");
const objects = document.querySelectorAll(".object");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault;
    const filter = e.target.dataset.filter;
    console.log(filter);

    objects.forEach((obj) => {
      if (filter == "all") {
        obj.style.display = "block";
      } else if (obj.classList.contains(filter)) {
        obj.style.display = "block";
      } else {
        obj.style.display = "none";
      }
    });
  });
}

function addData() {
  event.preventDefault();
  let box = "";
  box += `<div class="object py-3 work">${user_data.value}</div>`;
  console.log(user_data.value);
  filterable_element.innerHTML += box;
  console.log("DSAF");
}


//show modall
open.addEventListener("click", () => modall.classList.add("show-modall"));

//hide modall
// close.addEventListener("click", () => modall.classList.remove("show-modall"));

// hide modall on out side click

window.addEventListener("click", (e) =>
  e.target == modall ? modall.classList.remove("show-modall") : false
);

add_data.addEventListener("click", addData);
