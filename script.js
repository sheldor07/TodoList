let inpNewTask=$("#newTask")
let addBtn=$("#addBtn")
let clearBtn=$("#clearBtn")
let ulTasks=$("#ulTasks")

addBtn.click(()=>{
    let listItem=$("<li>",
    {
        "class": "list-group-item",
        "text":inpNewTask.val(),
    }
    )
    listItem.click(()=>{
        listItem.toggleClass('disabled-strikethrough')
    })
    ulTasks.prepend(listItem)
    inpNewTask.val("")
})
clearBtn.click(()=>{

    inpNewTask.val("")

})
