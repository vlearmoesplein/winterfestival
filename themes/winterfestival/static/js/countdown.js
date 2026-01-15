// Countdown Timer Functionality
document.addEventListener("DOMContentLoaded", function () {
  const countdownTimer = document.getElementById("countdownTimer");
  if (!countdownTimer) {
    return;
  }

  const targetDate = new Date(countdownTimer.getAttribute("data-target"));

  // Get countdown elements
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Function to pad numbers with leading zero
  function padNumber(num) {
    return num.toString().padStart(2, "0");
  }

  // Function to update the countdown
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    // If the countdown is finished
    if (distance < 0) {
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      // Optional: Show "Festival Started!" message
      const countdownContainer = document.querySelector(".countdown-container");
      if (countdownContainer) {
        const countdownTitle =
          countdownContainer.querySelector(".countdown-title");
        if (countdownTitle) {
          countdownTitle.textContent =
            "Het Winterfestival is van start gegaan!";
        }
      }

      return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with padded numbers
    daysElement.textContent = padNumber(days);
    hoursElement.textContent = padNumber(hours);
    minutesElement.textContent = padNumber(minutes);
    secondsElement.textContent = padNumber(seconds);
  }

  // Update countdown immediately
  updateCountdown();

  // Update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Clear interval when page is unloaded
  window.addEventListener("beforeunload", function () {
    clearInterval(countdownInterval);
  });
});
