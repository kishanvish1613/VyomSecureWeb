function faqFunction() {
    // Select all FAQ heading section elements
    const faqHeadingBoxes = document.querySelectorAll('.faq-animation-heading-with-para-icon');

    // Loop through each heading section
    faqHeadingBoxes.forEach(faqHeadingBox => {
        faqHeadingBox.addEventListener('click', () => {
            // Toggle the dropdown icon rotation
            const dropDownBox = faqHeadingBox.querySelector('.faq-animation-icon i');
            dropDownBox.classList.toggle('rotate-icon-style-js');

            // Find the corresponding hidden section for this heading
            const hiddenFaqSection = faqHeadingBox.querySelector('.faq-animation-para');

            // Toggle the height of the hidden section
            if (hiddenFaqSection.style.maxHeight) {
                hiddenFaqSection.style.maxHeight = null; // Collapse
                faqHeadingBox.classList.remove('expanded-border'); // Remove expanded border
            } else {
                hiddenFaqSection.style.maxHeight = hiddenFaqSection.scrollHeight + 'px'; // Expand
                faqHeadingBox.classList.add('expanded-border'); // Add expanded border
            }
        });
    });
}

faqFunction();
