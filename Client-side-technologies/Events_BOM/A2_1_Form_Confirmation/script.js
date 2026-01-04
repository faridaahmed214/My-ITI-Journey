const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const isConfirmed = confirm("Are you sure you want to submit this form");

  if (!isConfirmed) {
    event.preventDefault();
  }
});
