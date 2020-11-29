/*const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guides').add({
    full_name: createForm.full_name.value,
    your_email: createForm.your_email.value,
    password: createForm.password.value,
    sub: createForm.sub.value,
    msg: createForm.msg.value
  }).then(() => {
    // close the create modal & reset form
   
    createForm.reset();
  })
});*/
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['your_email'].value;
  const password = signupForm['password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
        name: signupForm['full_name'].value,
        email: signupForm['your_email'].value,
        phone: signupForm['phone'].value,
    });
  }).then(() => {
    window.location.replace("#");
    signupForm.reset();
  });
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    window.location.replace("#");
    loginForm.reset();
  });

});