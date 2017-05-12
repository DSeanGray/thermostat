$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#psm_mode').text('On').css('color', 'green');

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
// jQuery toggle plugin for slider
// jQuery.fn.clickToggle = function(a,b) {
//   var ab = [b,a];
//   return this.on("click", function(){ ab[this._tog^=1].call(this); });
// };
//
// $('#psm_toggle').clickToggle(function(){
//   thermostat.powerSavingModeOn();
//   updateTemperature();
// }, function() {
//   thermostat.powerSavingModeOff();
//   updateTemperature();
// });

});
