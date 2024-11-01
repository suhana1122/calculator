const displayContent=(data)=>{
    output.value+=data                                          //input id is output

    

}

const clearAllContent=()=>{
    output.value=""
}

const removeLast=()=>{
    
    output.value=output.value.slice(0,-1)
   
    
}

const showResult=()=>{
    try {
        console.log("Try block");
        
        output.value=eval(output.value)

    } catch (error) {
        console.log(error);
        output.value=""
        output.placeholder="invalid expression"
        
    }
    finally{
        console.log("finally block");
        console.log("task completed");
        
        
    }
}
