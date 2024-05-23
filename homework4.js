function sumNumbers(){
    let total = 0
    for (let n = 0;n<=100;n++){
        if (n%3==0){
        continue}
        else {
            total +=n}
    if (n === 100){console.log(total)}
        }
}
sumNumbers()