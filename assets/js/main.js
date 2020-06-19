$("#phone").mask("(99) 99999-9999");

$("#leadForm").on("submit", function (evt) {
  evt.preventDefault();

  const formData = $("#leadForm").serializeArray();

  const name = `${formData[0].value.trim()} ${formData[1].value.trim()}`;
  const phone = formData[3].value.trim().replace(/\D/g, "");
  const email = formData[2].value.trim().toLowerCase();
  const question = formData[4].value.trim();

  const data = {
    name,
    phone,
    email,
    question,
  };

  try {
    fetch("https://moneymoney-live.azurewebsites.net/api/moneymoney-live", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    $("#name").html(formData[0].value.trim());
    $("#clean").click();
    $("#successModal").modal();
    $("#successModal").modal("open");
  } catch (error) {
    alert("Tente novamente em alguns instantes!");
  }
});
