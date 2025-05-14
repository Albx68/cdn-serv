(function () {
  console.log("Custom API widget loaded!");

  // Step 1: Get Config (API URL, optional token)
  const config = window.MyWidgetConfig || {};
  const apiUrl =
    config.apiUrl || "https://jsonplaceholder.typicode.com/posts/1";
  const apiKey = config.apiKey || "";

  // Step 2: Call API
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);

      // Show response in floating div
      const div = document.createElement("div");
      div.style.position = "fixed";
      div.style.bottom = "20px";
      div.style.right = "20px";
      div.style.padding = "10px";
      div.style.background = "#28a745";
      div.style.color = "#fff";
      div.style.borderRadius = "5px";
      div.style.zIndex = "9999";
      div.innerText = `API Title: ${data.title || "No Title"}`;

      document.body.appendChild(div);
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
})();

function sayHello() {
  console.log("Hello from the widget!");
}
