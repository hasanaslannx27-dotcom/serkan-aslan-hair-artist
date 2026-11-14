const form = document.getElementById("bookingForm");

form?.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();

  if (!name || !phone) {
    alert("Lütfen adınızı ve telefon numaranızı doldurun.");
    return;
  }

  alert("Randevu talebiniz alındı. En kısa sürede sizinle iletişime geçilecektir.");
  form.reset();
});
