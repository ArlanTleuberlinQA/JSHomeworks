var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    addService:function(key,value){
        this[key] = value
    },
    price:function(){
        let sumprice = 0
        for (let key in this){
            if (key !== 'addService' && key !=='price'&&key!=='minPrice'&&key!=='maxPrice'){
                this[key]= Number.parseInt(this[key])
                sumprice += this[key]
            } 
        }
        console.log(sumprice)},
    minPrice: function(){
        let min = Infinity
       for (let key in this){
            if (key !== 'addService' && key !=='price'&&key!=='minPrice'&&key!=='maxPrice'){
                this[key]= Number.parseInt(this[key])
                if (min> this[key]){
                    min = this[key]
                }
            } 

    }
    console.log(min)

    },
    maxPrice: function(){let max = 0
        for (let key in this){
             if (key !== 'addService' && key !=='price'&&key!=='minPrice'&&key!=='maxPrice'){
                 this[key]= Number.parseInt(this[key])
                 if (max< this[key]){
                     max = this[key]
                 }
             } 
 
     }
     console.log(max)

    }
}

services.addService("Розбити скло","200 грн")
services.price()
services.minPrice()
services.maxPrice()