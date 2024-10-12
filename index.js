document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent page refresh
    document.getElementById("successMessage").style.display = "block"; // Show success message
    this.reset(); // Reset the form
});