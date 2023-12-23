//sulation 1
function addTwoNum(a, b){
    
    var test = typeof(a)
    var test2 = typeof(b)
    try{
        if (test != "number"){
            throw new ReferenceError("the first argument is not a number")

        } else if(test2 != "number"){
            throw new ReferenceError("the second argument is not a number")
            
        } else{
            console.log(a + b)
        }

    }catch(err){
        console.log(err)
    }
    
}

//solation 2
addTwoNum(2 ,"3")
console.log("it still works")

//sloution 3
