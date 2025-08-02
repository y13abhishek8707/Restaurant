// Live Date and Time
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Order Form Logic
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;

  const foodEl = document.getElementById("foodSelect");
  const food = foodEl.value;
  const foodPrice = parseFloat(foodEl.selectedOptions[0].dataset.price);
  const foodQty = parseInt(document.getElementById("foodQty").value);

  const roomEl = document.getElementById("roomSelect");
  const room = roomEl.value;
  const roomPrice = parseFloat(roomEl.selectedOptions[0].dataset.price);
  const nights = parseInt(document.getElementById("roomNights").value);

  const totalFood = foodPrice * foodQty;
  const totalRoom = room === "None" ? 0 : roomPrice * nights;
  const total = totalFood + totalRoom;

  document.getElementById("confirmation").innerHTML = `
    ✅ <strong>Order Confirmed</strong><br><br>
    🧾 Name: ${name}<br>
    📧 Email:${email};
