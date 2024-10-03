function faqFunction() {
    // Select all faq heading section elements
    const faqHeadingBoxes = document.querySelectorAll('.sam-faq-heading-section');

    // Loop through each heading section
    faqHeadingBoxes.forEach(faqHeadingBox => {
        faqHeadingBox.addEventListener('click', () => {
            // Toggle the arrow rotation
            const dropDownBox = faqHeadingBox.querySelector('.drop-down-circle i');
            dropDownBox.classList.toggle('rotate-icon-style-js');

            // Find the corresponding hidden section for this heading
            const hiddenFaqSection = faqHeadingBox.querySelector('.sam-hidden-faq-section');

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
