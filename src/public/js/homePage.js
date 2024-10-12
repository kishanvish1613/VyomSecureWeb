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

function formSubmitFNC() {
    document.getElementById('contactForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Show the spinner and hide the submit button text
        const submitBtn = document.getElementById('submitBtn');
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'inline-block'; // Show spinner
        submitBtn.innerText = 'Submitting...';

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
            
                submitBtn.innerText = 'Thank You 🙏';
            
                event.target.reset(); // Resets all fields in the form
                
                submitBtn.disabled = true;
            } else {
                alert(result.message);
                // Reset the button text
                submitBtn.innerText = 'Submit';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
            // Reset the button text
            submitBtn.innerText = 'Submit';
        } finally {
            // Hide the spinner after the request is complete
            spinner.style.display = 'none';
        }
    });
}

formSubmitFNC();