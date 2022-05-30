var input = document.getElementById('input')
var p = document.getElementById('new')
var taskCount = document.getElementById('taskCount')

function addTask(e){

if(input.value !== ''){
var dd = document.getElementById('tasks')

var el = document.createElement('p')

var val = document.createTextNode(input.value)

dd.appendChild(el).appendChild(val)


var delBtn = document.createElement("button");
delBtn.innerHTML = "DEL";
delBtn.setAttribute('onclick','del()')
el.appendChild(delBtn);


var editBtn = document.createElement("button");
editBtn.innerHTML = "EDIT";
editBtn.setAttribute('onclick','edit()')
el.appendChild(editBtn)

taskCount.innerHTML = dd.childElementCount


input.value = ''

}else(alert('asdsadada'))

}

function delAll(e){
    document.getElementById('tasks').innerHTML = ''
}

