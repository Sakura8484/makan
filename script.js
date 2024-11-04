var age = 20;
age = 50
var username = "mabel";
var password = "password" ;
var isMale= false;
var isLoggedIn= false;
var blog_posts = ["hello, how are you?", "i am well", "thank you"];
console.log (age)
console.log (username)
console.log (password)
console.log (isMale)
console.log(isLoggedIn)
console.log (blog_posts)

if (isMale==true) {
    console.log ("I am a boy!");
} else {
    console.log (" I am a girl");
}
while (age <70) {
    console.log ("my age is " + age); 
    age= age + 1;
}
function sayHello() {
    var x = 1;
    while (x<5) {
    alert("Hello everyone");
    x = x + 1;
    }
}
function showAge(){
var user_input = document.getElementById("user-input").value;

document.getElementById("header-age").textContent = user_input
}