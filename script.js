(function () {
  const hDOMsnapshot = window.dataLayer.get('hDOMSnapshot');

  fetch("http://localhost:3000/external", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ dom: hDOMsnapshot }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
})();

