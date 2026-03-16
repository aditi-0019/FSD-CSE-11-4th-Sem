// When data takes time to arrive, JavaScript executes other code meanwhile. This is called asynchronous execution, handled using Promises, async/await, and callbacks.

// we use set time out to schedule time
let success=true;
let promise=new Promise(function(resolve,reject) {
    setTimeout(function(){
    if(success){
        resolve("taskdone");
    } 
    else { 
        reject("failed"); 
    } 
 },2000);

});

promise.then(function(result){
    console.log(result);
}).catch(function(error) {
console.log(error);
}); 


// add set time out 