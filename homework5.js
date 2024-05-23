function pow(x,y){
    let result=1
    let preresult = 1
    for(let i = 0; i<y;i++){
            
    result = (result*=x)
    } 
    for (let j = 0; j>y; j--){
        
        preresult = (preresult*=x)
    }
    if (y===1){console.log(x)
    }
        else if (y===0){console.log(1)
        }   
     else if
     (preresult >1){result=1/preresult
     console.log(result)
     }
     else{
    console.log(result)}

}

pow(3,5)