const search_box = document.getElementById("search");
search_box.addEventListener("input", function () {
  let table = document.getElementById("table");
  for (let i = 0; i < table.rows.length; i++) {
    let todo_text = table.rows[i].cells[0];
    if (search_box.value.includes(todo_text.innerText)) {
      document.getElementById("table").rows[i].style.display = "block";
      console.log("sss3");
    } else if (search_box.value == "") {
      document.getElementById("table").rows[i].style.display = "block";
    } else {
      console.log("sss4");

      document.getElementById("table").rows[i].style.display = "none";
    }
  }
});
