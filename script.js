var bulb = document.querySelector(".bulb")
var flag = 0
var button = document.querySelector("button")
button.addEventListener("click", function(){
if (flag == 0) {
    bulb.style.backgroundColor = "yellow"
    console.log("clicked");
    flag = 1
}else{
    bulb.style.backgroundColor = "transparent"
    flag = 0
    console.log("Again Clicked");
}
})