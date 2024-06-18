function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
      activeSection.style.display = 'block';
  }
}

// Initialize with Overview section visible
document.getElementById('overview').style.display = 'block';
