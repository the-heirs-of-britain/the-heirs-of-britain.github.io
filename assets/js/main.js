const toggleSidebar = () => {
  let sidebar = document.querySelector("[role=mobile-sidebar]");
  sidebar.classList.toggle("-translate-x-full");
};

const toggleMobileMenu = () => {
  document
    .querySelector("[role=mobile-menu-header]")
    .classList.toggle("hidden");
};
