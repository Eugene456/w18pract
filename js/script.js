$(document).ready(function(){
  $('.calc select').change(function(){
    $edition = $('select#card-edition').val();
    $printFile = $('select#card-color option:selected').attr('data-print-file');
    $paper = $('select#card-paper').val();
    $color = $('select#card-color').val();
    $print = $('select#card-color option:selected').attr('data-print');
    $paperRatio = $('select#card-paper option:selected').attr('data-paper-ratio');
    $division = 30;
    $finalEdition = $edition / $division;
    $price = parseInt($finalEdition) * $paperRatio + parseInt($printFile) + $finalEdition *$print;
    $('span#final-price').text($price);
    console.log($price);

  });
})