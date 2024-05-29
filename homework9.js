var pc ={
    videocard: "NVidia",
    cpu: "Intel",
    moterboard: "MSI",
    setPCinfo: function(key,value){
        this[key] = value
    },
    getPCinfo:function(){
        for(let key in this){
            if (key !== 'getPCinfo'&&key!=='setPCinfo'){
                console.log(key+":"+this[key])
            }
        }
        console.log("")
    }
    }
pc.getPCinfo()


pc.setPCinfo('ram',"GoodRAM")
pc.getPCinfo()
pc.setPCinfo('sound',"DolbyDigital")
pc.getPCinfo()
