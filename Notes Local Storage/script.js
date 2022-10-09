const addBox = document.querySelector(".add-box")
popupBox = document.querySelector(".popup-box")
popupTitle = popupBox.querySelector("header p")
closeIcon = popupBox.querySelector("header i")
titleTag = popupBox.querySelector("input")
descTag = popupBox.querySelector("textarea")
addBtn = popupBox.querySelector("button")


const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesien", "Październik", "Listopad", "Grudzień"]
const notes = JSON.parse(localStorage.getItem("notes") || "[]") //getting localstorage notes if exist and parsing them to js object else passing an empty array to notes
let isUpdate = false, updateId

addBox.addEventListener("click", () => {
    titleTag.focus()
    popupBox.classList.add("show")
})

closeIcon.addEventListener("click", () => {
    isUpdate = false
    titleTag.value = ""
    descTag.value = ""
    addBtn.innerText = "Dodaj"
    popupTitle.innerText = "Dodaj nową notatkę"
    popupBox.classList.remove("show")
})


function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove())
    notes.forEach((note, index) => {
        let liTag = `
    <li class="note">
        <div class="details">
            <p>${note.title}</p>
            <textarea>${note.description}</textarea>
        </div>
        <div class="bottom-content">
            <span>${note.date}</span>
            <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="menu">
                    <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edytuj</li>
                    <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Usuń</li>
                </ul>
            </div>
        </div>
    </li>`
        addBox.insertAdjacentHTML("afterend", liTag)
    })
}

showNotes()

function showMenu(elem) {
    elem.parentElement.classList.add("show")
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show")
        }
    });
}

function deleteNote(noteId) {
    let confirmDel = confirm("Jesteś pewny, że chcesz usunąć wybraną notatkę?")
    if (!confirmDel) return
    notes.splice(noteId, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    showNotes()
}

function updateNote(noteId, title, description) {
    isUpdate = true
    updateId = noteId
    addBox.click()
    titleTag.value = title
    descTag.value = description
    console.log(noteId, title, description);
    addBtn.innerText = "Gotowe"
    popupTitle.innerText = "Aktualizacja Notatki"
}

addBtn.addEventListener("click", e => {
    e.preventDefault()
    let noteTitle = titleTag.value
    noteDesc = descTag.value

    if (noteTitle || noteDesc) {
        let dateObj = new Date()
        month = months[dateObj.getMonth()]
        day = dateObj.getDate()
        year = dateObj.getFullYear()

        let noteInfo = {
            title: noteTitle,
            description: noteDesc,
            date: `${month} ${day}, ${year}`
        }
        if (!isUpdate) {
            notes.push(noteInfo) //adding new note to notes
        } else {
            isUpdate = false
            notes[updateId] = noteInfo //updating actual note
        }
        localStorage.setItem("notes", JSON.stringify(notes)) //converting into string and saving notes to localstorage
        closeIcon.click()
        showNotes()
    }
})
