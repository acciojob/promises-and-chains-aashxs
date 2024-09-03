document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the input values
  let age = document.getElementById('age').value;
  let name = document.getElementById('name').value;
  
  // Create the Promise
  let eligibilityPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  
  // Handle the Promise
  eligibilityPromise.then(message => {
    alert(message);
  }).catch(message => {
    alert(message);
  });
});