document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  form.innerHTML = "<h2>✅ Booking Request Sent!</h2><p>We’ll contact you within 24 hours.</p>";
});