document.getElementById('zipcode').disabled = true;

document.getElementById('registrationForm').addEventListener('submit', function (event) {
   event.preventDefault();
   let errorMessages = [];

   const name = document.getElementById('name').value;
   if (name.length < 2) {
      errorMessages.push("Name must be at least 2 characters long.");
   }

   const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value, 10);
   if (yearOfBirth < 1900 || yearOfBirth > 2100) {
      errorMessages.push("Year of Birth must be between 1900 and 2100.");
   }

   const liveInUS = document.getElementById('liveInUS').checked;
   const zipcode = document.getElementById('zipcode').value;
   if (liveInUS && (zipcode.length !== 5 || isNaN(zipcode))) {
      errorMessages.push("Zipcode must be 5 digits long.");
   }

   const password = document.getElementById('password').value;
   if (password.length < 8) {
      errorMessages.push("Password must be at least 8 characters long.");
   }

   const errorMessagesDiv = document.getElementById('errorMessages');
   if (errorMessages.length > 0) {
      errorMessagesDiv.innerHTML = errorMessages.join('<br>');
   } else {
      errorMessagesDiv.innerHTML = "<span style='color: green;'>Accepted</span>";
   }
});

document.getElementById('liveInUS').addEventListener('change', function () {
   document.getElementById('zipcode').disabled = !this.checked;
});
