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
