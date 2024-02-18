const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray);




document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item");
    createItem(item);
})

function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayItems() {
    let items = '';
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
                        <div class="input-controller">
                            <textarea disabled>${itemsArray[i]}</textarea>
                            <div class="edit-controller">
                                <i class="fa-regular fa-pen-to-square editBtn"></i>
                                <i class="fa-solid fa-trash deleteBtn"></i>
                            </div>
                        </div>
                        <div class="update-controller">
                            <button class="saveBtn">Zapisz</button>
                            <button class="cancelBtn">Anuluj</button>
                        </div>
                </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items;
    activateDelteListener();
    activateEditListener();
    activateSaveListener();
    activateCancelListener();
}

function activateDelteListener() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload(); //uaktualnienie zadań po usunięciu
}

function activateEditListener() {
    let editBtn = document.querySelectorAll(".editBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll('.input-controller textarea');
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block";

            inputs[i].style.color = "#f5f5f5";
            inputs[i].style.backgroundColor = "gray";


            inputs[i].disabled = false;
        })
    })
}

function activateSaveListener() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}

function activateCancelListener() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
        })
    })
}

function updateItem(text, i) {
    itemsArray[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload();
}

function displayDate() {
    let date = new Date();
    let months = [
        "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
        "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    let day = date.getDate();
    let month = months[date.getMonth()]
    let year = date.getFullYear();

    document.querySelector("#date").innerHTML = day + " " + month + " " + year; //wyświetlenie aktualnej daty
}

window.onload = function () {
    displayDate();
    displayItems();
}

//splice operacje