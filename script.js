let key = document.querySelectorAll(".keyboard > div");
let bag ="";
for (let i=0; i < key.length; i++) {
    key[i].addEventListener("click", myCalculator);
}
function myCalculator(event) {
    let targetNum = event.target.innerText;
    if (targetNum == "C") {
        bag = "";
        document.querySelector(".display").innerText =  "";
    } else if (targetNum == "=") {
      document.querySelector(".display").innerText = eval(bag);
    } else {
        bag = bag + targetNum;
        document.querySelector(".display").innerText = bag;
    }
}