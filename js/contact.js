document.getElementById("contact-form").addEventListener("submit", async e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  const res = await fetch("https://YOUR_RENDER_URL.onrender.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  document.getElementById("status").textContent =
    res.ok ? "Message sent successfully!" : "Error sending message.";
});
