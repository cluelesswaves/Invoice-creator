const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const sendBtn = document.getElementById("send-btn")
const taskList = document.getElementById("task-list")
const costList = document.getElementById("cost-list")
const totalSumStr = document.getElementById("total-sum")
const notesH = document.getElementById("notes-h")

let washClicked = false
let mowClicked = false
let pullClicked = false

let tasksArray = []
let totalSum = 0

function render() {
    taskList.innerHTML = ""
    costList.innerHTML = ""
    let taskStr = ""
    let costStr = ""
    for (let i = 0; i < tasksArray.length; i++){
        taskStr += `<li>${tasksArray[i].task}</li>`        
    }
        for (let i = 0; i < tasksArray.length; i++){
        costStr += "<li><span class='dollar-sign'>$</span>" + tasksArray[i].cost + "</li>"        
    }
    taskList.innerHTML = taskStr
    costList.innerHTML = costStr
    totalSumStr.textContent = "$" + totalSum
    if(washClicked || mowClicked || pullClicked) {
        notesH.textContent = "We accept cash, credit card, or PayPal"
        totalSumStr.classList.remove("total-zero")
        totalSumStr.classList.add("total-not-zero")
    } else {
        notesH.textContent = ""
        totalSumStr.classList.remove("total-not-zero")
        totalSumStr.classList.add("total-zero")
    }
}

washCar.addEventListener("click", function() {
    if(!washClicked) {
        washCar.classList.remove("btn-not-clicked")
        washCar.classList.add("btn-clicked")
        tasksArray.push({
            task: "Wash Car",
            cost: 10
        })
        washClicked = true
        totalSum += 10
    } else {
        washCar.classList.remove("btn-clicked")
        washCar.classList.add("btn-not-clicked")
        let washIndex = tasksArray.findIndex(function(element,index,array) {
            if (element.task === "Wash Car"){
                return true
            } else {
                return false
            }
        })
        tasksArray.splice(washIndex, 1)
        washClicked = false
        totalSum -= 10
    }
    render()
})

mowLawn.addEventListener("click", function() {
    if(!mowClicked) {
        mowLawn.classList.remove("btn-not-clicked")
        mowLawn.classList.add("btn-clicked")
        tasksArray.push({
            task: "Mow Lawn",
            cost: 20
        })
        mowClicked = true
        totalSum += 20
    } else {
        mowLawn.classList.remove("btn-clicked")
        mowLawn.classList.add("btn-not-clicked")
        let mowIndex = tasksArray.findIndex(function(element,index,array) {
            if (element.task === "Mow Lawn"){
                return true
            } else {
                return false
            }
        })
        tasksArray.splice(mowIndex, 1)
        mowClicked = false
        totalSum -= 20
    }
    render()
})

pullWeeds.addEventListener("click", function() {
    if(!pullClicked) {
        pullWeeds.classList.remove("btn-not-clicked")
        pullWeeds.classList.add("btn-clicked")
        tasksArray.push({
            task: "Pull Weeds",
            cost: 30
        })
        pullClicked = true
        totalSum += 30
    } else {
        pullWeeds.classList.remove("btn-clicked")
        pullWeeds.classList.add("btn-not-clicked")
        let pullIndex = tasksArray.findIndex(function(element,index,array) {
            if (element.task === "Pull Weeds"){
                return true
            } else {
                return false
            }
        })
        tasksArray.splice(pullIndex, 1)
        pullClicked = false
        totalSum -= 30
    }
    render()
})

sendBtn.addEventListener("click", function(){
    tasksArray = []
    totalSum = 0
    washClicked = false
    mowClicked = false
    pullClicked = false
    washCar.classList.remove("btn-clicked")
    washCar.classList.add("btn-not-clicked")
    mowLawn.classList.remove("btn-clicked")
    mowLawn.classList.add("btn-not-clicked")
    pullWeeds.classList.remove("btn-clicked")
    pullWeeds.classList.add("btn-not-clicked")
    render()
})