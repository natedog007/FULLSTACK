
let choice = "default";
let ToDoList = [];

while (choice != "quit"){
    choice = prompt("What would you like to do?");
    
    if(choice == "new"){
        let todoItem = prompt("Enter new To-Do");
        ToDoList.push(todoItem);
    }
    else if(choice == "list"){
        for(let i = 0; i < ToDoList.length; i++){
            console.log(`${i} : ${ToDoList[i]}`);
        }
    }
    else if(choice == "delete"){
        let deleteItem = parseInt(prompt("What would you like to delete?"));
        ToDoList.splice(deleteItem, 1);
        console.log("To-Do Removed");
    }
    else if(choice == "quit"){
        continue;
    }
    else{
        choice = prompt("Please Enter valid option. Type 'ok' ");
    }
    

}



