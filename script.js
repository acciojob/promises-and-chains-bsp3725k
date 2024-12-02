const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value, 10);

        const agePromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age > 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry ${name}. You aren't old enough.`);
            }
          }, 4000);
        });

        agePromise
          .then((message) => {
            alert(message);
          })
          .catch((error) => {
            alert(error);
          });
      });