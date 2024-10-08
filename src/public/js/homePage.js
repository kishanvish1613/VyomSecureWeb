function faqFunction() {
    // Select all FAQ heading sections
    const faqHeadingBoxes = document.querySelectorAll('.sam-faq-heading-with-icon-hidden-para');

    // Loop through each heading section
    faqHeadingBoxes.forEach(faqHeadingBox => {
        const heading = faqHeadingBox.querySelector('.sam-faq-heading-with-icon');
        const hiddenPara = faqHeadingBox.querySelector('.sam-faq-hidden-para');
        const icon = faqHeadingBox.querySelector('.sam-faq-icon i');

        heading.addEventListener('click', () => {
            // Toggle the hidden paragraph's max-height
            if (hiddenPara.style.maxHeight) {
                hiddenPara.style.maxHeight = null; // Collapse
                icon.classList.remove('rotate-icon'); // Remove rotation
            } else {
                hiddenPara.style.maxHeight = hiddenPara.scrollHeight + 'px'; // Expand
                icon.classList.add('rotate-icon'); // Add rotation
            }
        });

        // Also add click event to the icon itself
        icon.addEventListener('click', () => {
            heading.click(); // Trigger the same action as the heading click
        });
    });
}

// Initialize the FAQ functionality
faqFunction();


document.addEventListener('mousemove', function (e) {
    const circle = document.getElementById('hero-abso-circle-container');
    const x = e.pageX;
    const y = e.pageY;
  
    // Set the circle's position to the cursor's coordinates
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
});
  






const humburger = document.getElementById('humburger');
const menuCircle = document.querySelector('.menu-circle');
const menuHidden = document.getElementById('menu-hidden');
const menuItems = document.querySelectorAll('#menu-hidden ul li');

humburger.addEventListener('click', () => {
    menuCircle.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    // When the circle expands, delay the showing of text
    if (menuCircle.classList.contains('active')) {
        // Delay to match the circle's expansion time
        setTimeout(() => {
            menuItems.forEach(item => item.classList.add('show'));
        }, 800); // Same as circle's transition time (0.8s)
    } else {
        menuItems.forEach(item => item.classList.remove('show'));
    }
});

