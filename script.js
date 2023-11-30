/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function add() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//timer
var minutes = $( '#set-time' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function()
  {
    document.getElementById("left").innerHTML = "Out of time!";
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

if ( seconds_left >= 0 ) {
  console.log(time_limit);
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles' ).removeClass('color-full');
    	$( '#tiles' ).addClass('color-empty');
    }

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;

	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;

	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>";

}
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}
