

  
 let nextlist=0;
  let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

    var listLength=arrayOfTodos.length;
    

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    .then((test) => listLength=arrayOfTodos.length)
    .then((test2)=> document.getElementById("numberof").innerHTML = "Total Todos " + listLength)
    }

  const logTodos = () => {
    console.log(arrayOfTodos)
    
  }

  const reloadPage = ()=>{
    $("ol").empty();
    nextlist=0
    populateTodos()
  }

  
  const populateTodos = () => {

    $("ol").empty();
    let apple= nextlist + 1
    document.getElementById("todo-list").setAttribute("start", apple)
    for(let i=0;i<20;i++) {
     
    if (nextlist<arrayOfTodos.length){
      
    var node = document.createElement("LI");
  
 
 
    var textnode = document.createTextNode(arrayOfTodos[nextlist].title);
    var check =arrayOfTodos[nextlist].completed;
                    if (check == false)
                        {node.classList.add("isFalse")
                        
                        }
      
                        else {node.classList.add("isTrue")}
                      

    node.appendChild(textnode);
    document.getElementById("todo-list").appendChild(node);
    if (check == false)
                        {
                        var btn=document.createElement("BUTTON");
                        btn.setAttribute("id", "btn_class"+nextlist );
                        btn.setAttribute("style", "background-color: red;");
                        btn.setAttribute("onclick", "myfunction(this.id)")
                        document.getElementById("todo-list").appendChild(btn);
                        document.getElementById("btn_class"+nextlist).innerHTML = "Click When Complete "
                        }

    nextlist++
    console.log(nextlist)
    if (nextlist == arrayOfTodos.length)
    {return}

   

    }
    

  }

}

const myfunction = (numlist) => {
  let mynumber = "";
  document.getElementById(numlist).innerHTML = "Complete "
  document.getElementById(numlist).style.backgroundColor = "green";
  mynumber=numlist.substring(9,12)
  let helpme = parseInt(mynumber);
  arrayOfTodos[helpme].completed="true"
  console.log(helpme)
}