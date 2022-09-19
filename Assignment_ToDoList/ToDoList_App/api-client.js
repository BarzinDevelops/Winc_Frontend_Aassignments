
const dbURI = 'http://localhost:3000/';

const getTasks = async () => {
    const resp = await fetch(dbURI, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const respJSON = await resp.json();
    return respJSON;
};

const setTasks = async (task)=>{
    try {
       const response = await fetch(dbURI, {
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

const delTasks = async (taskId) =>{
    try {
        fetch(dbURI+taskId, {
             method: "DELETE",
             headers: { "Content-Type": "application/json" }
        });
     } catch (error) {
         log(error);
     }    
};

const updateTasks = async (id, task) =>{
    try {
        fetch(dbURI+id, {
             method: "PUT",
             body: JSON.stringify(task),
             headers: { "Content-Type": "application/json" }
        });
     } catch (error) {
         log(error);
     }    
};