let btnAdd=document.getElementById("btnAdd")
let inputBox=document.getElementById("inputBox")
let taskList=document.getElementById("taskList")

btnAdd.onclick = function(){
    let listItem=document.createElement("li")
    let doneBtn=document.createElement("button")
    doneBtn.textContent="✅"
    let removeBtn=document.createElement("button")
    removeBtn.textContent="❌"
    listItem.innerText=inputBox.value
    taskList.appendChild(listItem)
    listItem.appendChild(doneBtn)
    listItem.appendChild(removeBtn)
    
}
