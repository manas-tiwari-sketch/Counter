const reset = document.getElementsByClassName("reset")[0];
const dec = document.getElementsByClassName("decrease")[0];
const inc = document.getElementsByClassName("increase")[0];
var count = 0;

reset.addEventListener("click", () => {
   count = 0; 
   document.getElementById("value").innerText = count;
});

dec.addEventListener("click", () => {
   count--; 
   document.getElementById("value").innerText = count;
});

inc.addEventListener("click", () => {
   count++; 
   document.getElementById("value").innerText = count;
});
