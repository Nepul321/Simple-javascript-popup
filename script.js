const div = document.getElementById("popup");
const button = document.getElementById("btn");
const buttondiv = document.getElementById("logindiv");
const remove = document.getElementById("close");

div.style.display = "none";

button.addEventListener("click", () => {
    div.style.display = "block";
    buttondiv.style.display = "none";
});

remove.addEventListener("click", () => {
    div.style.display = "none";
    buttondiv.style.display = "block";
});