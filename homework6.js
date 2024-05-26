function pad(row,symbol,count,place){
    let final = ''
    if (place === true){
        final = row+symbol.repeat(count-row.length)
    }
    else {final = symbol.repeat(count-row.length)+row}
console.log(final)
}
pad('hello','*',6,false)

