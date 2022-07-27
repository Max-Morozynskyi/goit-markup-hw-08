(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyRef = document.querySelector("[data-modal-scroll]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
    menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    bodyRef.classList.toggle("no-scroll");
    mobileMenuRef.classList.toggle("is-open");
  });
   // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.classList.remove('is-open');
    bodyRef.classList.remove("no-scroll");
    menuBtnRef.setAttribute('aria-expanded', false);
  });
})();