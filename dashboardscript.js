document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("open");
  const btnReset = document.getElementById("reset");
  const btnLogout = document.getElementById("logout");
  const btnReadMe = document.getElementById("readMeBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  envelope.addEventListener("click", open);
  btnOpen.addEventListener("click", open);
  btnReset.addEventListener("click", close);
  btnLogout.addEventListener("click", function () {
    window.location.href = "login.html";
  });

  btnReadMe.addEventListener("click", function (e) {
    e.stopPropagation();
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnReadMe = document.getElementById("readMeBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  btnReadMe.addEventListener("click", function (e) {
    e.stopPropagation();
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

