
console.log("Select menu");

let SelectFiled = document.getElementsByClassName("selectfiled");
let SelectText = document.querySelector("#selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");



SelectFiled.onclick = function () {
   list.classList.toggle("hide");

};

for (option of options) {
   option.onclick = function () {
      SelectText.innerHTML = this.textContent;
      list.classList.toggle("swipe");
      console.log("wrong....");

   };
};


