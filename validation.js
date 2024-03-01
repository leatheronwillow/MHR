
$(document).ready(function(){

  // when a value is typed in input field
  // check for validity
  $("#name").keyup(validatePattern);
  $("#email").keyup(validatePattern);
  $("#card").keyup(validatePattern);


  // define regex patterns for validity
  const criteria = {
    name: /^([A-Z][a-z]+\.\s)?([A-Z][a-z(\-A-Z)]+\s)+([A-Z][a-z(\-A-Z)]+)$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    card: /^(?:(4\d{12}(?:\d{3})?)|([25][1-5]\d{14})|(6(?:011|5\d{2})\d{12})|(3[47]\d{13})|(3(?:0[0-5]|[68]\d)\d{11})|((?:2131|1800|35\d{3})\d{11}))$/
  };

  // function to check validity. If the field is not valid, background colour is changed
  function validatePattern(){
    let id = this.id;
    let pattern;
  
    // switch statement which sets the pattern based on the id of the input element
    switch (id) {
      case 'name':
        pattern = criteria.name;
        break;
      case 'email':
        pattern = criteria.email;
        break;
      case 'card':
        pattern = criteria.card;
        break;
      default:
        console.log("Invalid selector ID for validate")
    }
    
    // the following changes the background colour based on whether the pattern is matched
    let text = $(this).val();

    if (pattern.test(text)) {
      $(this).css("background-color", "green");
    } else {
      $(this).css("background-color", "pink");
    }
  }


});