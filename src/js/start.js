$('#form-start').submit(function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const { email } = Object.fromEntries(formData);
  console.log(email)

  // const response = await fetch(`https://mandarin.com.br/api/email=${email}`);

  // const data = await response.json();
  
})