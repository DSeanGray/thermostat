$(document).ready(function() {
  var thermostat = new Thermostat();
$('#temperature').text(thermostat.temperature);

$('#temp_up').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.up();
  $('#temperature').text(thermostat.temperature);
});

$('#temp_down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
});

$('#reset').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.resetTemperature();
  $('#temperature').text(thermostat.temperature);
});

$('#psm_on').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOn();
  $('#temperature').text(thermostat.temperature);
});

$('#psm_off').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powerSavingModeOff();
  $('#temperature').text(thermostat.temperature);
});

});
