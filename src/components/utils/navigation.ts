/**
 * Navigate to contact section from anywhere in the app
 */
export const navigateToContact = () => {
  // Check if we're already on home page
  const currentPath = window.location.pathname;
  
  if (currentPath === "/" || currentPath === "") {
    // Already on home page, just scroll
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  } else {
    // On a different page, navigate to home with hash
    window.location.href = "/#contact";
  }
};

/**
 * Navigate to any section from anywhere in the app
 */
export const navigateToSection = (sectionId: string) => {
  const currentPath = window.location.pathname;
  
  if (currentPath === "/" || currentPath === "") {
    // Already on home page, just scroll
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  } else {
    // On a different page, navigate to home with hash
    window.location.href = `/#${sectionId}`;
  }
};
