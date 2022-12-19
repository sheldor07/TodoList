let inpNewTask = $("#newTask")
let addBtn = $("#addBtn")
let clearBtn = $("#clearBtn")
let ulTasks = $("#ulTasks")
let removeBtn=$("#removeBtn")
let sortBtn=$("#sortBtn")


$(inpNewTask).keypress((e) => {
  if (e.which === 13) {
    addItem();
  }
});
function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });
  listItem.click(() => {
    listItem.toggleClass("task-done")
  });
  ulTasks.prepend(listItem);
  inpNewTask.val("")
}
function clearDone(){
    $("#ulTasks .task-done").remove()
}
function sortDone(){

    ($("#ulTasks .task-done")).appendTo(ulTasks)
}
addBtn.click(addItem)
clearBtn.click(() => {
  inpNewTask.val("")
})
function toggleInputBtns(valIsEmpty){
  if(valIsEmpty){
    clearBtn.prop("disabled", false)
    addBtn.prop("disabled", false)
  }
  else {
    removeBtn.prop("disabled", true)
    clearBtn.prop("disabled",true)
  }
  console.log('helo')
}
inpNewTask.on('input',()=>{
  toggleInputBtns(inpNewTask.val() != '')
})
removeBtn.click(clearDone)
sortBtn.click(sortDone)