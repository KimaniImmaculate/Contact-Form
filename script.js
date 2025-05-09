document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('input-error'));

    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'This field is required';
        document.getElementById('firstName').classList.add('input-error');
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'This field is required';
        document.getElementById('lastName').classList.add('input-error');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    }

    const querySelected = document.querySelector('input[name="query"]:checked');
    if (!querySelected) {
        document.getElementById('queryError').textContent = 'Please select a query type';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'This field is required';
        document.getElementById('message').classList.add('input-error');
        isValid = false;
    }

    const consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consentError').textContent = 'To submit this form, please agree to be contacted';
        document.getElementById('consent').classList.add('input-error');
        isValid = false;
    }

    
  if (isValid) {
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contact-form').reset();  

    setTimeout(function() {
      document.getElementById('successMessage').style.display = 'none';
      }, 90000); 
  }
});

const radioBoxes = document.querySelectorAll('.radio-box');

radioBoxes.forEach(box => {
  const input = box.querySelector('input[type="radio"]');
  input.addEventListener('change', () => {
    radioBoxes.forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});






