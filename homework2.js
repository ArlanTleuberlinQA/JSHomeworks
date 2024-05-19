var prompt = require('prompt')
prompt.start()
prompt.get(["age"],function(err,result){
    if (result.age === 1 || result.age % 10 === 1 && result.age % 100 !== 11){
        console.log(result.age+' '+'рік');
    }else if (result.age >= 2 && result.age <= 4 || result.age % 10 >= 2 && result.age % 10 <= 4 && result.age % 100 !== 12 && result.age % 100 !== 13 && result.age % 100 !== 14){
        console.log(result.age+' '+'роки')}
    else if (result.age <=0)
        {console.log('Введено від\'ємне число')}
    else if (isNaN(result.age))
        {{console.log('Невірний формат данних')}}
    else{console.log(result.age+' '+'років')
    
            
        }
    }
)