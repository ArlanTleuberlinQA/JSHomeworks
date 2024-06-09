const text1 = "Text which not consist"
const text2 = "Text which consist A and a"
const text3 = "not 6"
const pattern = /^[^Aa]{6,}$/g
const match1 = text1.match(pattern)
const match2 = text2.match(pattern)
const match3 = text3.match(pattern)
console.log(match1)
console.log(match2)
console.log(match3)