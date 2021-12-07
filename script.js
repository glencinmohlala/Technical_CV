/*Start of API Section*/
var city = "Vanderbijlpark";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5d6d862d8577f830164f96a4caba27d5", 
         function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var weather = data.weather[0].main
            
            $(".icon").attr("src", icon);
            $(".weather").append(weather);
});
/*End of API Section*/

/* Start of Projects Buttons*/
function openCity(ProjectName) {
   var i;
   var x = document.getElementsByClassName("project-name");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   document.getElementById(ProjectName).style.display = "block";
 }
 /*End of projects Buttons*/

 