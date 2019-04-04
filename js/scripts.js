// Document Start //
$(document).ready(function(){
// Front End Logic //
    $("#num").keyup(function(event){
      event.preventDefault();
      $("#result").html(romanize($("#num").val()));
      return false;
    });
// Primary Function //
  function romanize(num){
    // Variables //
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var equiv = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = "";
    var newRome = num;
    var i;
    // Perimeter Logic //
    if (num < 1){
      return '';
    }
    if (num > 3999){
      return 'Too Large';
    }
    // Loop Logic //
    for (i = 0; i <= equiv.length; i++){
      while (newRome >= equiv[i]){
        romanNum += roman[i];
        newRome -= equiv[i];
      }
    }
    return romanNum;
  }
});
