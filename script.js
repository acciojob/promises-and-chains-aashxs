let age = document.querySelector("#age");
let namee = document.querySelector("#name");
let submit = document.querySelector("#btn");

const Ashish = (age, namee) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(age >= 18) {
            resolve(`Welcome, ${namee}. You can vote`);
        } else {
            reject(`Oh sorry ${namee}, You aren't old enough`);
        }
    }, 4000);
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(namee.value != "" && age.value != ""){
        Ashish(age.value, namee.value)
        .then(data => alert(data))
        .catch(err => alert(err));
    }
});