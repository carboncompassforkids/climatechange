const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
 menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
});
 document.getElementById('footprintForm').addEventListener('submit', function(event) {
     event.preventDefault();


     // Get user inputs
     const timesShower = parseFloat(document.getElementById('timesShower').value);
     const timesLaundry = parseFloat(document.getElementById('timesLaundry').value);
     const timesGarbage = parseFloat(document.getElementById('timesGarbage').value);
     const timesFastFood = parseFloat(document.getElementById('timesFastFood').value);
     const timesFlying = parseFloat(document.getElementById('timesFlying').value);
     const timesDriving = parseFloat(document.getElementById('timesDriving').value);
     const numberCars = parseFloat(document.getElementById('numberCars').value);


     // Validate user inputs
     if (isNaN(timesShower) || isNaN(timesLaundry) || isNaN(timesGarbage) || isNaN(timesFastFood) || isNaN(timesFlying) || isNaN(timesDriving) || isNaN(numberCars)) {
         alert("Please enter valid numbers for all fields.");
         return;
     }


     // Calculate carbon footprint components
     const timesShowerCarbon = timesShower * 0.83; // 0.83 tons of carbon per year
     const timesLaundryCarbon = timesLaundry * 0.2; // 0.2 tons of carbon per year 
     const timesGarbageCarbon = timesGarbage * 0.085; // 0.085 tons of carbon per year
     const timesFastFoodCarbon = timesFastFood * 0.39; // 0.39 tons of carbon per year
     const timesFlyingCarbon = timesFlying * 1.83 // 1.83 tons of carbon per year
     const timesDrivingCarbon = timesDriving * 0.345 // 0.345 tons of carbon per year
     const numberCarsCarbon = numberCars * 2.3 // 2.3 tons of carbon per year


     // Total carbon footprint
     const totalCarbonFootprint = timesShowerCarbon + timesLaundryCarbon + timesGarbageCarbon + timesFastFoodCarbon + timesFlyingCarbon + timesDrivingCarbon + numberCarsCarbon;


     // Display the result
     document.getElementById('result').innerText += `Your household's carbon footprint is about ${totalCarbonFootprint.toFixed(2)} tons of carbon per year.`;
 });


 //garbage = 0.085 per bag/week, flying = 1.83 per flight/year, cars = 0.345 per time/week, 2.3 per car, vegan: 0.19, vege: 1.22, everything: 6.72, fastfood = 0.39 times/week, wrappedfood = 0.39/week


function sendMail() {
 let parms = {
   message : document.getElementById("result").value
 }
 emailjs.send("service_0jn59ud", "template_v0fd8nk",parms)
}


