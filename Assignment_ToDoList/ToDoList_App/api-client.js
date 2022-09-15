

//Write a piece of code to send the GET request and console.log 
// the result so that you also see the empty array there (think of async/await!).
const dbURI = 'http://localhost:3000/';  // resource link
const getTasks = async () => {
    const resp = await fetch(dbURI, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const respJSON = await resp.json();
    log('resp=> ', respJSON);
};

// send a POST request to the URL, do this first with Postman and then also from JavaScript. 
let task = {description: "make assignment ToDoList!", done: false};  // example task to use for POST request
const setTasks = async (task)=>{
    try {
        fetch(dbURI, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json",
            },
          });
    } catch (error) {
        log(error);
    }    
};

// getTasks();
// setTasks(task);
getTasks();


