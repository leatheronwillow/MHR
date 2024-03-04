
$(document).ready(function(){

  // when a value is typed in input field
  // check for validity
  $("#name").keyup(function(){
    validation.errorChecks();
  });

  $("#email").keyup(function(){
    validation.errorChecks();
  });

  $("#card").keyup(function(){
    validation.errorChecks();
  });

  // define regex patterns for validity
  const criteria = {
    name: /^([A-Z][a-z]+\.\s)?([A-Z][a-z(\-A-Z)]+\s)+([A-Z][a-z(\-A-Z)]+)$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    card: /^(?:(4\d{12}(?:\d{3})?)|([25][1-5]\d{14})|(6(?:011|5\d{2})\d{12})|(3[47]\d{13})|(3(?:0[0-5]|[68]\d)\d{11})|((?:2131|1800|35\d{3})\d{11}))$/
  };

  // define methods for validation.
  const validation = {
    pattern: function() {
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
    
        if (text && pattern.test(text)) {
          $(this).css("background-color", 'rgb(137, 200, 46)');
          return true;
        } else if (!text){
          $(this).css("background-color", "white")
          return false;
        } else {
          $(this).css("background-color", 'rgb(231, 0, 100)');
          return false;
        }
      },

    errorChecks: function(){
      const fields = {name: "name", email: "email", card: "card"};

      let errors = [];
      for (let field in fields){
        let id = field;
        let element = document.getElementById(id)
        if ((!this.pattern.call(element) && element.value)){
          errors.push(id);
        }
      }
      let errorString;

      switch (errors.length){
        case 1:
          errorString = capitalise(errors[0]) + " is invalid";
          break;
        case 2:
          errorString = capitalise(errors[0]) + " and " + capitalise(errors[1]) + " are invalid";
          break;
        case 3:
          errorString = capitalise(errors[0]) + ", " + capitalise(errors[1]) + " and " + capitalise(errors[2]) + " are invalid"
          break;
        default:
          errorString = ""
        }

      $("#error").text(errorString)

      function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      },
    luhnsAlgorithmCheck: function(){

      //  get card number from the input field
      let card = $('#card').val();

      // define sumEven and sumOdd
      let sumEven = 0;
      let sumOdd = 0;

      // loop through every other number starting from second to last
      for (let i = card.length - 2; i > -1; i - 2){
        let num = Number(card[i]) * 2;
        if (num > 9){
          num = num - 9;
        }
        sumEven += num;
      }

      for (let i = card.length -1; i > -1; i - 2){
        sumOdd += Number(card[i]);
      }

      //  Luhn check
      let sumOddEven = sumEven + sumOdd;
      if (!(sumOddEven % 10)){
        return true;
      } else {
        return false;
      }
    }
    }
  }

);