//getting form to user onSUbmit and list to append

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const breakFastLi = document.getElementById("breakFastLi");
const lunchLi = document.getElementById("lunchLi");
const snackLi = document.getElementById("snackLi");
const dinnerLi = document.getElementById("dinnerLi");

//getting user input

const nameOfFood = document.querySelector("[name='food']");
const typeOfFood = document.getElementById("select-opt");
const typeOfFood2 = document.getElementById("select-opt2");

//getting buttons and p for toggle

const info_btn = document.getElementById("info_btn");
const info_para = document.getElementById("info_para");

//getting backdrop and modal and its modal button
const backdrop = document.getElementById("backdrop");
const closeButton = document.getElementById("close_btn");
const modal1 = document.getElementById("modal1");
const errorMsg = document.getElementById("error_msg");
const modalHeader = document.getElementById("modal_header");

//error modal function
function popModal(title, message) {
    modalHeader.textContent = title;
    errorMsg.textContent = message;
    backdrop.classList.toggle("backdrop__visible");
    modal1.classList.toggle("modal1__visible");
}

//close modal
closeButton.addEventListener("click", () => {
    modal1.classList.toggle("modal1__visible");
    backdrop.classList.toggle("backdrop__visible");
});

backdrop.addEventListener("click", () => {
    modal1.classList.toggle("modal1__visible");
    backdrop.classList.toggle("backdrop__visible");
});

//empty arrays

let breakfastList = [];
let lunchList = [];
let snackList = [];
let dinnerList = [];

//setting empty arrays in local storage
if (localStorage.getItem("breakfastList") === null) {
    localStorage.setItem("breakfastList", JSON.stringify(breakfastList));
}
if (localStorage.getItem("lunchLIst") === null) {
    localStorage.setItem("lunchList", JSON.stringify(lunchList));
}
if (localStorage.getItem("snackLost") === null) {
    localStorage.setItem("snackList", JSON.stringify(snackList));
}
if (localStorage.getItem("dinnerList") === null) {
    localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
}

//getting all the stored items in local storage

breakFastLiLocal = JSON.parse(localStorage.getItem("breakfastList"));
lunchLiLocal = JSON.parse(localStorage.getItem("lunchList"));
snackLiLocal = JSON.parse(localStorage.getItem("snackList"));
dinnerLiLocal = JSON.parse(localStorage.getItem("dinnerList"));

//copying locally stored array in nornaml array
breakfastList = [...breakFastLiLocal];
lunchList = [...lunchLiLocal];
snackList = [...snackLiLocal];
dinnerList = [...dinnerLiLocal];

//loop through already stored food in local storage and save them

function loopThroughLocalStorage() {
    for (i = 0; i < breakfastList.length; i++) {
        const li = document.createElement("li");
        li.className = "indv"
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        breakfastName = breakfastList[i].name;
        for (j in breakfastList) {
            breakFastLi.appendChild(li);
            li.innerHTML = breakfastName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < lunchList.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.className = "indv"
        button.id = "delete_button";
        li.classList.add("innerList");
        lunchName = lunchList[i].name;
        for (j in lunchList) {
            lunchLi.appendChild(li);
            li.innerHTML = lunchName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < snackList.length; i++) {
        const li = document.createElement("li");
        li.className = "indv"
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        snackName = snackList[i].name;
        for (j in snackList) {
            snackLi.appendChild(li);
            li.innerHTML = snackName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < dinnerList.length; i++) {
        const li = document.createElement("li");
        li.className = "indv"
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        dinnerName = dinnerList[i].name;
        for (j in dinnerList) {
            dinnerLi.appendChild(li);
            li.innerHTML = dinnerName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }
}

loopThroughLocalStorage();

//clear user input on form submission
function clearInput() {
    nameOfFood.value = "";
    typeOfFood.value = "default";
}

//this function will fire up upon form submission
form1.onsubmit = (event) => {
    event.preventDefault();

    //checking for empty fields
    if (nameOfFood.value.trim() === "") {
        popModal("Error !", `Don't leave the field empty`);
        return;
    }

    //create food object

    const newFood = {
        name: nameOfFood.value,
        type: typeOfFood.value,
        id: Math.random(),
    };

    // conditionally entering values
    const li = document.createElement("li");
    li.className = "indv"
    const button = document.createElement("button");
    button.id = "delete_button";
    li.classList.add("innerList");

    if (typeOfFood.value === "Breakfast") {
        breakfastList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        console.log(breakfastList);
        //store in local storage
        localStorage.setItem("breakfastList", JSON.stringify(breakfastList));
    } else if (typeOfFood.value === "Lunch") {
        lunchList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        lunchLi.appendChild(li);
        console.log(lunchList);
        //store in local storage
        localStorage.setItem("lunchList", JSON.stringify(lunchList));
    } else if (typeOfFood.value === "Snack") {
        snackList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        snackLi.appendChild(li);
        console.log(snackList);
        //store in local storage
        localStorage.setItem("snackList", JSON.stringify(snackList));
    } else if (typeOfFood.value === "Dinner") {
        dinnerList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        dinnerLi.appendChild(li);
        console.log(dinnerList);
        //store in local storage
        localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
    } else {
        popModal("Error !", `Don't forget to enter the type of food`);
    }

    clearInput();
};

//delete function handler

function deleteFoodItemHandler() {

    breakFastLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);

        for (let i in breakfastList) {
            if (
                `${breakfastList[i].name}delete` == toDeleteElement.textContent
            ) {
                breakfastList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem(
                    "breakfastList",
                    JSON.stringify(breakfastList)
                );
                console.log(breakfastList);
            }
        }
    });

    lunchLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in lunchList) {
            if (`${lunchList[i].name}delete` == toDeleteElement.textContent) {
                lunchList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("lunchList", JSON.stringify(lunchList));
                console.log(lunchList);
            }
        }
    });

    snackLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in snackList) {
            if (`${snackList[i].name}delete` == toDeleteElement.textContent) {
                snackList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("snackList", JSON.stringify(snackList));
                console.log(snackList);
            }
        }
    });

    dinnerLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in dinnerList) {
            if (`${dinnerList[i].name}delete` == toDeleteElement.textContent) {
                dinnerList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
                console.log(dinnerList);
            }
        }
    });
}

deleteFoodItemHandler();

//toggling the info button

function toggleInfo() {
    function togglei() {
        info_btn.classList.toggle("info__circle_visible");
    }

    function togglep() {
        info_para.classList.toggle("toggle_info_visible");
    }

    info_btn.addEventListener("click", togglei);
    info_btn.addEventListener("click", togglep);
}

toggleInfo();

//clear input on form 2

function clearInput2() {
    typeOfFood2.value = "default";
}

//rendering lists conditionally
form2.onsubmit = (event) => {
    event.preventDefault();

    //remove all lists
    function removeAllStyles() {
        breakFastLi.classList.remove("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    }

    if (typeOfFood2.value === "Breakfast") {
        if (breakfastList.length === 0) {
            popModal("Error !", `Your Breakfast List is empty`);
            removeAllStyles();
            return;
        } else {
            breakFastLi.classList.add("breakFastLi_visible");
            lunchLi.classList.remove("lunchLi_visible");
            snackLi.classList.remove("snackLi_visible");
            dinnerLi.classList.remove("dinnerLi_visible");
        }
    } else if (typeOfFood2.value === "Lunch") {
        if (lunchList.length === 0) {
            popModal("Error !", `Your Lunch List is empty`);
            removeAllStyles();
            return;
        } else {
            lunchLi.classList.add("lunchLi_visible");
            breakFastLi.classList.remove("breakFastLi_visible");
            snackLi.classList.remove("snackLi_visible");
            dinnerLi.classList.remove("dinnerLi_visible");
        }
    } else if (typeOfFood2.value === "Snack") {
        if (snackList.length === 0) {
            popModal("Error !", `Your Snack List is empty`);
            removeAllStyles();
            return;
        } else {
            snackLi.classList.add("snackLi_visible");
            dinnerLi.classList.remove("dinnerLi_visible");
            breakFastLi.classList.remove("breakFastLi_visible");
            lunchLi.classList.remove("lunchLi_visible");
        }
    } else if (typeOfFood2.value === "Dinner") {
        if (dinnerList.length === 0) {
            popModal("Error !", `Your Dinner List is empty`);
            removeAllStyles();
            return;
        } else {
            dinnerLi.classList.add("dinnerLi_visible");
            breakFastLi.classList.remove("breakFastLi_visible");
            lunchLi.classList.remove("lunchLi_visible");
            snackLi.classList.remove("snackLi_visible");
        }
    } else if (typeOfFood2.value === "default") {
        popModal("Error !", `Cant load list , enter food type`);
        removeAllStyles();
    } else {
        alert("You food list is empty");
    }

    clearInput2();
};


