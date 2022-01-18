$('#form-validator').submit(async function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const { validationCode } = Object.fromEntries(formData);
  console.log(validationCode)

  // const response = await fetch(`https://mandarin.com.br/api/validade`, {
  //   method: 'POST',
  //   body: JSON.stringify({ validationCode }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // const data = await response.json();
  
})

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
