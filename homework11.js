var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function myBlend(arg) {
    for (let i = arg.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arg[i], arg[j]] = [arg[j], arg[i]]
        
    }
}
myBlend(arr)
console.log(arr)