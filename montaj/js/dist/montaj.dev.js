"use strict";

var fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.querySelector('.field__file-fake').innerText;
  input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (countFiles) label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;else label.querySelector('.field__file-fake').innerText = labelVal;
  });
});