function createCounter(){
    let count=0;
    return function(){
        count=count+1;
        console.log("count is:"+ count);
    };
}
const counter=createCounter();
counter();
counter();
counter();
