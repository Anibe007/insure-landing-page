document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const openIcon = hamburger.querySelector(".open");
  const closeIcon = hamburger.querySelector(".close");

  // Set initial state
  // closeIcon.style.display = "none";
  // menu.style.display = "none";

  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    const isOpen = menu.style.display === "block";

    if (isOpen) {
      menu.style.display = "none";
      openIcon.style.display = "inline";
      closeIcon.style.display = "none";
    } else {
      menu.style.display = "block";
      openIcon.style.display = "none";
      closeIcon.style.display = "inline";
    }
  });

  // Add interaction to 'VIEW PLANS' buttons
  document.querySelectorAll(".btn, .view-plans").forEach(button => {
    button.addEventListener("click", () => {
      // alert("View Plans clicked! 🚀");
      // You can add scroll or link logic here
    });
  });
});