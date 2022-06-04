var input = document.getElementById('input')
var p = document.getElementById('new')
var taskCount = document.getElementById('taskCount')
var dd = document.getElementById('tasks')


function addTask(e){

if(input.value !== ''){

var el = document.createElement('p')

var val = document.createTextNode(input.value)

dd.appendChild(el).appendChild(val)


var delBtn = document.createElement("button");
delBtn.innerHTML = "DEL";
delBtn.setAttribute('onclick','del(this)')
el.appendChild(delBtn);


var editBtn = document.createElement("button");
editBtn.innerHTML = "EDIT";
editBtn.setAttribute('onclick','edit(this)')
el.appendChild(editBtn)

taskCount.innerHTML = dd.childElementCount


input.value = ''

}else(alert('Enter valid value'))

}

function delAll(e){
    document.getElementById('tasks').innerHTML = ''
taskCount.innerHTML = dd.childElementCount
}

function del(e){
e.parentNode.remove()
taskCount.innerHTML = dd.childElementCount
}

function edit(e){

var par = e.parentNode
var br = document.createElement('br')
var saveInp = document.createElement('input')
var saveBtn = document.createElement('button')

saveBtn.innerHTML = 'Save'
saveBtn.setAttribute('onclick','save(this)')

par.appendChild(br)
par.appendChild(saveInp)
par.appendChild(saveBtn)

    
}

function save(e){
var parent = e.parentNode
var newVal = e.previousSibling.value
var paraVal = parent.firstChild
console.log(parent)
console.log(newVal)
console.log(paraVal)
}

