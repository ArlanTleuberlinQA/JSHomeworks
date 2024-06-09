var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];
pattern = /^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?@gmail.com$|^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?@yahoo.com$/
var trustedEmails = arr.filter(function(item) {
    return pattern.test(item.email);
}).map(function(item) {
    return item.email;
});

    

console.log(trustedEmails)