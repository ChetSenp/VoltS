"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  function formSend(e) {
    var error, formData, response, result;
    return regeneratorRuntime.async(function formSend$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            error = formValidate(form);
            formData = new FormData(form);

            if (!(error === 0)) {
              _context.next = 20;
              break;
            }

            form.classList.add('_sending');
            _context.next = 7;
            return regeneratorRuntime.awrap(fetch('sendkonstruktiv.php', {
              method: 'POST',
              body: formData
            }));

          case 7:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 17;
              break;
            }

            _context.next = 11;
            return regeneratorRuntime.awrap(response.json());

          case 11:
            result = _context.sent;
            alert(result.message);
            form.reset();
            form.classList.remove('_sending');
            _context.next = 18;
            break;

          case 17:
            alert("Ошибка !");

          case 18:
            _context.next = 21;
            break;

          case 20:
            alert('Заполните обязательные поля !');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function formValidate(form) {
    var error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var index = 0; index < formReq.length; index++) {
      var input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  } //email req


  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
/* var allRadios = document.getElementsByName('check');
var booRadio;
var x = 0;
for(x = 0; x < allRadios.length; x++){
  allRadios[x].onclick = function() {
    if(booRadio == this){
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
} */