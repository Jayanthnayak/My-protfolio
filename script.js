function showPopup(section) {
    const popup = document.getElementById(`${section}-popup`);
    popup.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('show');
    }, 10); // Small delay for transition
}

function closePopup(section) {
    const popup = document.getElementById(`${section}-popup`);
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match the transition duration
}
// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

// Handle certificate clicks
const certificateThumbs = document.querySelectorAll('.certificate-thumb');
certificateThumbs.forEach(img => {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Close the modal when clicking on 'X'
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close the modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// View more functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
viewMoreBtn.addEventListener('click', () => {
    // Show more hidden certificates
    const hiddenCertificates = document.querySelectorAll('.certificate-thumb[style*="display: none"]');
    hiddenCertificates.forEach(cert => cert.style.display = 'block');
    // Hide the view more button after showing all certificates
    viewMoreBtn.style.display = 'none';
});
