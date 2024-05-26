function checkProbabilityTheory(count){

let pair = 0
let unpair = 0
for (let j = 0; j<count;j++){
    let i = Math.floor(Math.random() *901)+100
    if (i%2===0){
        pair++
    }
    else{unpair++}
}
let prob = 0
if (pair>unpair){
    prob = ((unpair/pair)*100)/2}
    else {prob=((pair/unpair)*100)/2}
if  (Math.floor(prob) === 50 || Math.ceil(prob) === 50){
console.log("It`s near to 50%50")
}
else{console.log("It`s far from 50%50")
 }

}

checkProbabilityTheory(10000)