



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

  

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    }

  const logTodos = () => {
    console.log(arrayOfTodos)
 
  }

  const populateTodos = () => {
    for(let i=1;i<=arrayOfTodos.length;i++) {

    var node = document.createElement("LI");
    var textnode = document.createTextNode(arrayOfTodos[1].title);
    node.appendChild(textnode);
    document.getElementById("todo-list").appendChild(node);}
  }

