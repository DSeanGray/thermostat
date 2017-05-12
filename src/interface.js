$(document).ready(function() {

  var thermostat = new Thermostat();
  showWeather('London');
  updateTemperature();
  $('#psm_mode').text('On').css('color', 'green');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    showWeather(city);
  });

$('#temp_up').click(function() {
  thermostat.up();
  updateTemperature();
});

$('#temp_down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#reset').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#psm_on').click(function() {
  thermostat.powerSavingModeOn();
  updateTemperature();
  $( '#psm_mode' ).text('On').css('color', 'green');
});

$('#psm_off').click(function() {
  thermostat.powerSavingModeOff();
  updateTemperature();
  $( '#psm_mode' ).text('Off').css('color','red');
});

function updateTemperature(){
  $('#temperature').text(thermostat.temperature);
  if (thermostat.energyUse() === 'low-usage'){
    $('#temperature').css('color','green');
  }
  else if (thermostat.energyUse() === 'medium-usage'){
    $('#temperature').css('color','black');
  }
   else {
    $('#temperature').css('color','red');
  }
}
function showWeather(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
}

});
