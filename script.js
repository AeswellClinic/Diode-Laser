document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scrolling to the next set of cards
    function handleScrollNext(cards, cardWidth, gap) {
        cards.scrollBy({
            top: 0,
            left: cardWidth + gap,
            behavior: 'smooth'
        });

        setTimeout(() => {
            const firstCard = cards.querySelector('.card');
            cards.appendChild(firstCard);
            cards.scrollLeft -= cardWidth + gap;
        }, 500);
    }

    // Function to handle scrolling to the previous set of cards
    function handleScrollPrev(cards, cardWidth, gap) {
        const lastCard = cards.lastElementChild;
        cards.insertBefore(lastCard, cards.firstElementChild);
        cards.scrollLeft += cardWidth + gap;

        setTimeout(() => {
            cards.scrollBy({
                top: 0,
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }, 500);
    }

    // Setup slider for each container
    function setupSlider(slider, prevClass, nextClass) {
        const next = slider.querySelector(`.${nextClass}`);
        const prev = slider.querySelector(`.${prevClass}`);
        const cards = slider.querySelector('.card-content');
        const card = cards.querySelector('.card');
        const gap = 20;

        if (!next || !prev || !card || !cards) {
            return;
        }

        const cardWidth = card.offsetWidth;

        // Add event listeners to the buttons
        next.addEventListener('click', function () {
            handleScrollNext(cards, cardWidth, gap);
        });

        prev.addEventListener('click', function () {
            handleScrollPrev(cards, cardWidth, gap);
        });
    }

    // Select each slider and set up the corresponding buttons
    const slider1 = document.querySelector('[data-slider="1"]');
    setupSlider(slider1, 'prev', 'next');

    const slider2 = document.querySelector('[data-slider="2"]');
    setupSlider(slider2, 'prev-1', 'next-1');

    const slider3 = document.querySelector('[data-slider="3"]');
    setupSlider(slider3, 'prev-2', 'next-2');
});
