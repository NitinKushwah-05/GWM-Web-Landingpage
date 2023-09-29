const menu = document.getElementById('optionMenu');

const contactUs = document.getElementById('submit-btn');
const order = document.getElementById('btn');

contactUs.addEventListener('click',function(e){
    e.preventDefault;
    alert("We Recivied Your Message. Thank You For Contacting Us");
})
    
order.addEventListener('click', function() {
   alert("Thank You For Ordering Food"); 
});