const btns = document.querySelectorAll(".btn");

let filter = "all";
// function test() {
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const objects = document.querySelectorAll(".object");
    //remove active class from element which has this class

    const activeElement = document.getElementsByClassName("active")[0];
    activeElement.classList.remove("active");
    btns[i].classList.add("active");
    e.preventDefault;
    filter = e.target.dataset.filter;
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
