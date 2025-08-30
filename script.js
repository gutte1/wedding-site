function submitPassword() {
  const password = document.getElementById("passwordInput").value;
  const mainContent = document.getElementById("mainContent");
  const passwordForm = document.getElementById("passwordForm");
  const passwordErrorMessage = document.getElementById("passwordErrorMessage");

  if (password === "1206") {
    mainContent.classList.toggle("hidden");
    passwordForm.classList.toggle("hidden");
    passwordErrorMessage.classList.add("hidden");
  } else {
    passwordErrorMessage.classList.remove("hidden");
  }
}

function copyDiscountCode(event) {
  navigator.clipboard.writeText("EMMA&GUSTAV26");
  const button = event.currentTarget;
  const originalContent = button.innerHTML;
  button.innerHTML = "Kopierad!";
  setTimeout(() => {
    button.innerHTML = originalContent;
  }, 3000);
}

const TARGET_DATE = new Date(2026, 8, 11);
const now = new Date();
const diff = TARGET_DATE.getTime() - now.getTime();
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const days = Math.max(0, Math.ceil(diff / MS_PER_DAY));
const word = days === 1 ? 'dag' : 'dagar';
document.getElementById('countdown').textContent = `${days} ${word} kvar 🤍`;

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keyup", () => {
  if (event.key === "Enter") {
    submitPassword();
  }
});

window.addEventListener("scroll", function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 600) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
