const form = document.getElementById("reportForm");
const success = document.getElementById("success");
const error = document.getElementById("error");
const button = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  success.style.display = "none";
  error.style.display = "none";
  button.disabled = true;
  button.textContent = "WYSYŁANIE...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      form.reset();
      success.style.display = "block";
    } else {
      error.style.display = "block";
    }
  } catch {
    error.style.display = "block";
  }

  button.disabled = false;
  button.textContent = "🚨 WYŚLIJ ZGŁOSZENIE";
});
