function updateTime() {
  const timer = document.getElementById("timer");
  const now = new Date();
  timer.textContent = now.toLocaleString(); // Formats to "MM/DD/YYYY, HH:MM:SS AM/PM"
}

// Initial call + interval
updateTime();
setInterval(updateTime, 1000);
