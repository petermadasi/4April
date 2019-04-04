    
var user = {
    first_name: "CSS",
    last_name: "HTML",
    age: 4,/*from   w w  w. java 2 s  .c  o m*/
    website: "java2s.com"
};


//Example
for (key in user) {
    console.log(key);
}

var x=0;
var total=0;
while(x<=10){
    console.log(x);
    total=total+x;
    x++;
}
console.log(total);
