

$(document).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
    var $getVal = $('#greeting').text();
      console.log($getVal);

  // 2. Change (or set) the value to "Hola".
    $('#greeting').text('Hola');

  // 3. Add an h1 to the page that says "A Spanish Greeting".
    $('<h1>', {'text': 'A Spanish Greeting'}).prependTo('body');

  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
    var $addCol = $('<div>', {
      'class': 'col-sm-6'
    }).appendTo('.row');

    $('<div>', {
      'text': 'Que tal?'
    }).appendTo($addCol);

  // 5. Add the class "blue" to both greetings.

    $('.col-sm-6').addClass('blue')

});
