// retreiving earlier todos
for(i=0;i<localStorage.length;i++){
    key=localStorage.key(i)
    if(key.endsWith("todo")){
    div=document.createElement('div')
    title=key.slice(0,-4)
    desc=localStorage.getItem(key)
    div.innerHTML=`<div class='flexbox'><span class='txt'>${title} : ${desc}</span><button type="button" class="btn btn-danger txt delete">Delete</button></div>`
    document.getElementsByClassName("container")[0].append(div)
    }
}


//add a todo
const addTodo=()=>{  
    div=document.createElement('div')
    title=document.getElementById("exampleFormControlInput1")
    desc=document.getElementById("exampleFormControlTextarea1")
    localStorage.setItem(title.value+"todo",desc.value)
    div.innerHTML=`<div class='flexbox'><span class='txt'>${title.value} : ${desc.value}</span><button type="button" class="btn btn-danger txt delete">Delete</button></div>`
    document.getElementsByClassName("container")[0].append(div)
    
    title.value=""
    desc.value=""

    deleteTodo()
}

const deleteTodo=()=>{
    deletebtns=document.getElementsByClassName("delete")
    for(item of deletebtns){
        item.addEventListener('click',(e)=>{
            a=e.target.parentElement.parentElement  
            key=a.textContent.split(" : ")[0]+"todo"
            a.remove()
            localStorage.removeItem(key)
        })
    }    
}
      
btn=document.getElementsByClassName("add")[0]

btn.addEventListener('click',addTodo)
deleteTodo()

        






