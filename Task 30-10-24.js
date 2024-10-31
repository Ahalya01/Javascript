const a=document.querySelector("#click");
a.addEventListener("click",function (){
    alert("btn clciked")
})


document.querySelector("#outerContainer").addEventListener("click", (e) => {
    console.log("Outer Container Clicked");
    e.stopPropagation(); // Stops propagation for outerContainer only
}, true);

document.querySelector("#middleContainer").addEventListener("click", () => {
    console.log("Middle Container Clicked");
}, false);

document.querySelector("#innerContainer").addEventListener("click", (e) => {
    console.log("Inner Container Clicked");
    // e.stopPropagation(); // Uncomment to stop propagation for innerContainer
}, true);