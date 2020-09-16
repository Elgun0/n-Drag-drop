const droppedarea = document.getElementById("droppedarea")
const dragItems = [...document.querySelectorAll(".drag-item")];

dragItems.forEach(dragItem => {
    dragItem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("dragId", this.id)
    })
})

droppedarea.addEventListener("dragover", function (e) {
    e.preventDefault()
})

droppedarea.addEventListener("drop", function (e) {
    e.preventDefault()
    let dragId=e.dataTransfer.getData("dragId")
    const mydrag=document.getElementById(dragId)
    droppedarea.appendChild(mydrag)
})