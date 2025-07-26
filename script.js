function navigate(sectionId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const activePage = document.getElementById(sectionId);
  if (activePage) {
    activePage.classList.add('active');
  }
}
