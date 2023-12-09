// Immediately Invoke Function Expression


(function chai(){   //Named IIFE
    console.log('DB connected');
})();
                                       // it not only envoke immediate but it used to reduce global scope polutions 

( (name) =>{
    console.log(`Db conncted , ${name}`);
} )('Subha')


Map