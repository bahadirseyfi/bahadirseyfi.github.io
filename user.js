let btn = document.createElement("button");
let x = true;
btn.innerHTML = "Change Background";
btn.addEventListener("click", function () {
  if (x == true) {
    document.body.style.backgroundColor = "red";
    x = false;
  } else {
    document.body.style.backgroundColor = "blue";
    x = true;
  }
  
});
document.body.appendChild(btn);
