let meallist = [];
let recipesRow = document.querySelector("#recipesRow");

async function getRecipe(meal) {
    if (!meal) return;

    recipesRow.innerHTML = `<div class="d-flex justify-content-center align-items-center py-5">
                                <span class="loader"></span>
                            </div>`;

    let res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal.trim().toLowerCase()}`);
    let data = await res.json();
    meallist = data.recipes || [];
    display();
}

function display() {
    let cartoona = "";
    if (meallist.length === 0) {
        recipesRow.innerHTML = `<h3 class="text-center text-muted py-5">No recipes found!</h3>`;
        return;
    }

    for (let i = 0; i < meallist.length; i++) {
        cartoona += `<div class="col-md-3 col-sm-6">
                <div class="meal text-center h-100 p-2 border rounded">
                    <img src="${meallist[i].image_url}" alt="kk" class="w-100 rounded">
                    <h2 class="h6 mt-2 fw-bold">${meallist[i].title}</h2>
                </div>
            </div>`;
    }
    recipesRow.innerHTML = cartoona;
}

let searchinput = document.querySelector("#searchinput");

searchinput.addEventListener("input", function(e) {
    getRecipe(e.target.value);
});

getRecipe("pasta");

let userForm = document.querySelector("form");
let userNameInput = document.querySelector("#name");
let userTelInput = document.querySelector("#tel");
let userEmailInput = document.querySelector("#email");

function loadFormData() {
    if (localStorage.getItem("userData")) {
        let savedData = JSON.parse(localStorage.getItem("userData"));
        userNameInput.value = savedData.name || "";
        userTelInput.value = savedData.tel || "";
        userEmailInput.value = savedData.email || "";
    }
}

loadFormData();

userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let userData = {
        name: userNameInput.value,
        tel: userTelInput.value,
        email: userEmailInput.value
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Saved Successfully!");
});