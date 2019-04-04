$(document).ready(function(){
    $("#num").keyup(function(event){
      event.preventDefault();
      $("#result").html(romanize($("#num").val()));
      return false;
    });

  function romanize(num){
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var equiv = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = "";
    var newRome = num;
    var i;
    if (num < 1){
      return '';
    }
    if (num > 3999){
      return 'Too Large';
    }
    console.log(newRome);
    for (i = 0; i <= equiv.length; i++){
      while (newRome >= equiv[i]){
        romanNum += roman[i];
        newRome -= equiv[i];
      console.log(romanNum);
      }
    }
    console.log(romanNum);
    return romanNum;
  }






});
