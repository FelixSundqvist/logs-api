const errorTextEl = document.querySelector("#errorText");
const formEl = document.querySelector("form");
const jsonTextareaEl = document.querySelector("#json");

errorTextEl.setAttribute("aria-invalid", "false");
errorTextEl.classList.add("hidden");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const json = JSON.parse(jsonTextareaEl.value);
    await fetch("/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        json,
      }),
    });
    window.location.reload();
  } catch (e) {
    console.error(e);
    jsonTextareaEl.setAttribute("aria-invalid", "true");
    errorTextEl.classList.remove("hidden");
    errorTextEl.innerText = "Needs to be in a valid JSON format";
  }

});
