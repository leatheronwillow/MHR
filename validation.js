
$(document).ready(function(){

  // when a value is typed in input field
  // check for validity
  const criteria = {
    name: /^([A-Z][a-z]+\.\s)?([A-Z][a-z(\-A-Z)]+\s)+([A-Z][a-z(\-A-Z)]+)$/
  };


  
  $("#name").keyup(function(){
    let pattern = /^([A-Z][a-z]+\.\s)?([A-Z][a-z(\-A-Z)]+\s)+([A-Z][a-z(\-A-Z)]+)$/;
    let text = $(this).val();

    if (pattern.test(text)) {
      $(this).css("background-color", "green");
    } else {
      $(this).css("background-color", "pink");
    }
  })

  function validateName(){
    let pattern = criteria.name;
    let text = $(this).val();

    if (pattern.test(text)) {
      $(this).css("background-color", "green");
    } else {
      $(this).css("background-color", "pink");
    }
    
  }


});