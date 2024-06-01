
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const backButton = document.getElementById('back-button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    const imageDescription = document.getElementById('imageDescription');
    const downloadLink = document.getElementById('downloadLink');
    const closeModalButton = document.getElementById('closeModalButton');
    const searchInput = document.getElementById('Search');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterImages(category);
        });
    });

    backButton.addEventListener('click', () => {
        filterImages('all');
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        gallery.style.display = 'flex';
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        searchImages(searchTerm);
    });

    function filterImages(category) {
        galleryItems.forEach(item => {
            if (item.getAttribute('data-category') === category || category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function searchImages(term) {
        galleryItems.forEach(item => {
            const description = item.querySelector('.description').textContent.toLowerCase();
            if (description.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    window.showImageModal = function (imgElement) {
        const src = imgElement.src;
        const description = imgElement.nextElementSibling ? imgElement.nextElementSibling.textContent : '';
        fullImage.src = src;
        imageDescription.textContent = description;
        modal.style.display = 'flex';
        gallery.style.display = 'none';
        downloadLink.href = src;
    };

    filterImages('all');
});


document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const textContent = dynamicText.textContent;
    dynamicText.classList.remove('hidden'); // Show the text

    let index = 0;
    let adding = true;

    function typeEffect() {
        if (adding) {
            if (index < textContent.length) {
                dynamicText.textContent += textContent.charAt(index);
                index++;
            } else {
                adding = false;
                setTimeout(typeEffect, 1000); // Pause before starting to delete
                return;
            }
        } else {
            if (index > 0) {
                dynamicText.textContent = textContent.substring(0, index - 1);
                index--;
            } else {
                adding = true;
                setTimeout(typeEffect, 1000); // Pause before starting to type again
                return;
            }
        }
        setTimeout(typeEffect, 200);
    }

    setTimeout(typeEffect, 1000); // Start typing after a delay
});
