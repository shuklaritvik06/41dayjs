const addBtn = document.getElementById("btn");
const titleInput = document.getElementById("title");
const noteContent = document.getElementById("detail");
const contentArea = document.getElementById("content");
addBtn.addEventListener("click",()=>{
   const titleValue = titleInput.value;
   const noteValue = noteContent.value;
   addNotes(titleValue,noteValue);
   titleInput.value = "";
   noteContent.value = "";
});
function getNotes(){
    if(localStorage.getItem("notes")===null){
        return [];
    }else{
        return JSON.parse(localStorage.getItem("notes"));
    }
}
function addNotes(a,b){
    let notes = getNotes();
    let obj = {
        title: a,
        content: b
    }
    notes.push(obj);
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes(notes);
}
function displayNotes(a){
    contentArea.innerHTML = "";
    a.forEach((task,index)=>{
        const newNote = document.createElement("div");
        newNote.classList.add("card","col-3","m-3","p-3");
        newNote.innerHTML = `
        <div class="d-flex justify-content-between">
              <h3>${task.title}</h3>
              <button class="btn"><i class="bi bi-trash text-danger cursor-pointer" id="${index}" onclick="deleteNotes(this.id)"></i></button>
</div>
        <br>
        <p>${task.content}</p>
    `;
        contentArea.appendChild(newNote);
    });
}
function deleteNotes(a){
    let note = getNotes();
    note.splice(a,1);
    localStorage.setItem("notes",JSON.stringify(note));
    displayNotes(note);
}