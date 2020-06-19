$("#phone").mask("(99) 99999-9999");

$("#leadForm").on("submit", function (evt) {
  evt.preventDefault();

  const formData = $("#leadForm").serializeArray();

  const name = `${formData[0].value.trim()} ${formData[1].value.trim()}`;
  const email = formData[2].value.trim().toLowerCase();
  const question = formData[3].value.trim();

  const data = {
    name,
    email,
    question,
  };

  fetch("https://moneymoney-live.azurewebsites.net/api/moneymoney-live", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      $("#name").html(formData[0].value.trim());
      $("#clean").click();
      $("#successModal").modal();
      $("#successModal").modal("open");
    })
    .catch((err) => alert("Tente novamente em alguns instantes!"));
});
