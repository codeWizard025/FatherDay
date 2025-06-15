const slides = [
    {
        images: [
            '005bce47-3684-4f25-b23c-cd5864a1919b.jpg',
            '04e41fdb-5d3e-44c9-9702-4a0d3d9fe437.jpg',
            '06bac226-1bd6-4bf3-9813-f3e773a33b98.jpg',
            '09b4117a-c484-4c7c-8529-7b64790d742b.jpg',
            '132b4632-994a-47a9-8940-71330acd0df3.jpg',
            '1cd8273b-90c1-4a46-aa40-4771ab2f2e3f.jpg',
            '2f1b6b3a-b46f-4975-8495-08db433978d5.jpg',
            '330d16eb-d479-4519-bb98-7c6bfb1b5fdc.jpg'
        ],
        text: "You didn't just raise us — you shaped who we are with your values, your love, and the way you lead by example."
    },
    {
        images: [
            '345d2f26-e4e6-4d7d-8bc9-548531e8feb3.jpg',
            '371bd961-cbff-4859-95aa-1c9a74597de2.jpg',
            '39957247-53be-4721-af02-a9a5e479863f.jpg',
            '49ac3269-51cd-4a9b-9ed7-bbd6be10e407.jpg',
            '5109a5ce-b484-4156-bc68-fe31144eb636.jpg',
            '5cb3def3-0aa6-4fd4-bdc5-7470f02fab38.jpg',
            '6064be83-7db4-4e6b-96fb-dfc09ae78553.jpg',
            '68781980-e04c-4e78-8b7b-3e56c0ba1500.jpg'
        ],
        text: "In every decision, every tough moment, you were the calm in the storm — always there with steady advice and love."
    },
    {
        images: [
            '70ff9ec8-2d06-464d-92e2-bf443efb8118.jpg',
            '75da9bc9-97f2-4d0a-87fb-8b761557c50d.jpg',
            '7c15a96f-4849-4d28-a72f-f0ce2f468f68.jpg',
            '7d5210b4-6626-4e1b-b30b-87005b2f28d2.jpg',
            '7f42dac6-0940-422e-9524-54331ae734ac.jpg',
            '8a2b893e-6f45-4749-bfb0-f4f1bccf2cb4.jpg',
            '8b9193b8-63d8-45ab-ba8d-86dc50c76003.jpg',
            '90bb2cb0-af71-4772-9e08-58b8acf5e411.jpg'
        ],
        text: "You've shown us that real strength doesn't need to be loud — it shows up in quiet actions, patience, and consistency."
    },
    {
        images: [
            '92b8842c-ff7c-4312-b80c-c662ae766d84.jpg',
            '962a5b9a-f60e-4174-9afe-143078c01013.jpg',
            'a0d2d707-6de0-4916-a930-e06bcadbe4a7.jpg',
            'a4c64362-049f-49a2-93fb-f6e10d560b49.jpg',
            'a96f05c0-2388-4946-a62e-0c99fca526c0.jpg',
            'ae7d21d8-07ef-4ff5-a884-bbb3cf19da8c.jpg',
            'b186c402-9a40-4c7f-898a-218a6309cafb.jpg',
            'b293b4fa-cff3-479f-85d8-2b4ba8c1426d.jpg'
        ],
        text: "You've sacrificed so much without ever asking for anything in return. Everything we are is because of everything you've given."
    },
    {
        images: [
            'bb404d35-02d2-4bb8-b9df-2c79ef0600c8.jpg',
            'bdd172f0-61f8-49b0-8325-49c27c0d576f.jpg',
            'cc458eb8-6a71-41b7-ba20-a409da47d044.jpg',
            'ce47797b-3d99-4252-9f86-af84b7df170d.jpg',
            'd60f6fd2-b69a-4b9b-ae0b-9d4658b715c5.jpg',
            'd817a613-b95c-48ad-b0ff-260ade3ed15e.jpg',
            'd94e8cf3-3a0f-45e7-bf53-ee50451cb0b7.jpg',
            'dc4eee2c-5627-4c0d-aebc-38e89c63f080(1).jpg'
        ],
        text: "We will grow older and build our own lives — but your love, lessons, and wisdom will always guide us."
    },
    {
        images: [
            'dc4eee2c-5627-4c0d-aebc-38e89c63f080.jpg',
            'dc97a923-6afc-4fab-886a-d5c31b2045e4.jpg',
            'e2dbf73b-0511-4714-b380-70b56dd5e4de.jpg',
            'ea122b7a-036e-47c2-9121-1a701fd3bb7a.jpg',
            'f5a408a2-4cf1-4a3f-a63b-e6310b438cff.jpg',
            'f9e94b10-5425-4a1f-bbca-75e9f8eb512f.jpg',
            'ffaa9f1e-7c1a-4a8c-8628-e3ed07b77a04.jpg'
        ],
        text: "Happy Father's Day, Dad. You're everything a father should be — strong, kind, selfless, and full of love. We're so lucky to have you."
    },
    {
        text: "Happy Father's Day",
        signature: 'With love, Aditya, Shikha, and Aryan' // Change this
    }
];

let currentSlide = 0;

const imageCollage = document.querySelector('.image-collage');
const storyText = document.querySelector('.story-text');
const slideElement = document.querySelector('.slide');

function showSlide(slideIndex) {
    slideElement.classList.remove('active');

    setTimeout(() => {
        const slide = slides[slideIndex];
        
        imageCollage.innerHTML = ''; 

        if (slide.images && slide.images.length > 0) {
            slide.images.forEach(imageSrc => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.classList.add('collage-image');
                imageCollage.appendChild(img);
            });
            imageCollage.style.display = 'grid';
        } else {
            imageCollage.style.display = 'none';
        }

        storyText.innerHTML = slide.text;

        if (slide.signature) {
            storyText.innerHTML += `<br><span style="font-size: 0.5em; font-style: italic;">${slide.signature}</span>`;
        }

        slideElement.classList.add('active');
    }, 500);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the start
    }
    showSlide(currentSlide);
}

// Initial load
showSlide(0);

// Auto-play the slides
setInterval(nextSlide, 8000);
