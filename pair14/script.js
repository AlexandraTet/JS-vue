let enrollBtn = document.querySelector("#enrollBtn");
let status = document.querySelector("#status");
enrollBtn.addEventListener("click", function(){
    status.textContent = "You have successfully enrolled in the course!";
    status.classList.add("success");
    enrollBtn.textContent = "Enrolled";
});

let studentsName = document.querySelector("#studentsName");
let welcome = document.querySelector("#welcome");
studentsName.addEventListener("input", function(){
    let name = studentsName.value.trim();
    if (name === "") {
        welcome.textContent = "Welcome, guest"
    }else{
        welcome.textContent = "Welcome, " + name + "!"
    }
});

let format = document.querySelector("#format");
let price = document.querySelector("#price");
format.addEventListener("change", function(){
    let selectPrice = Number(format.value);
    price.textContent = selectPrice + " UAH";
});

let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");
detailBtn.addEventListener("click", function(){
    details.classList.toggle("hidden");
    if (details.classList.contains("hidden")) {
        detailBtn.textContent = "Show description";
    }else{
        detailBtn.textContent = "Hide description"
    }
});

let card = document.querySelector("#card");
let themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", function(){
    card.classList.toggle("dark");
    if (card.classList.contains("dark")) {
        themeBtn.textContent = "Light theme";
    }else{
        themeBtn.textContent = "Dark theme";
    }
})