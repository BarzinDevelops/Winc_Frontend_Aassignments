const log = console.log;


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

getTasks();


