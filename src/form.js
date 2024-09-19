document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          alert("your message was sent successfully");
        } else {
          alert("There was a problem submitting the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem submitting the form. Please try again.");
      });
  });
