 document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.venue-img');
    let current = 0;
    const total = images.length;
    const interval = 3000; // 2 seconds per image

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    setInterval(() => {
      current = (current + 1) % total;
      showImage(current);
    }, interval);


  });

 document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.prenup-img');
    let current = 0;
    const total = images.length;
    const interval = 5000; // 2 seconds per image

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    setInterval(() => {
      current = (current + 1) % total;
      showImage(current);
    }, interval);


  });

// Add this to your JS (after DOM is loaded)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

let firstSectionAnimated = false;
let secondSectionAnimated = false;
let thirdSectionAnimated = false;
let fourthSectionAnimated = false;
let fifthSectionAnimated = false;
let sixthSectionAnimated = false;
let seventhSectionAnimated = false;
let eighthSectionAnimated = false;
let ninthSectionAnimated = false;
let tenthSectionAnimated = false;

function checkSections() {
    const firstSection = document.querySelector('.first-section');
    const secondSection = document.querySelector('.second-section');
    const thirdSection = document.querySelector('.third-section');
    const fourthSection = document.querySelector('.fourth-section');
    const fifthSection = document.querySelector('.fifth-section');
    const sixthSection = document.querySelector('.sixth-section');
    const seventhSection = document.querySelector('.seventh-section');
    const eighthSection = document.querySelector('.eighth-section');
    const ninthSection = document.querySelector('.ninth-section');
    const tenthSection = document.querySelector('.tenth-section');

    if (!firstSectionAnimated && firstSection && isElementInViewport(firstSection)) {
        firstSection.classList.add('pan-in');
        firstSectionAnimated = true;
    }
    if (!secondSectionAnimated && secondSection && isElementInViewport(secondSection)) {
        secondSection.classList.add('pan-in');
        secondSectionAnimated = true;
    }
    if (!thirdSectionAnimated && thirdSection && isElementInViewport(thirdSection)) {
        thirdSection.classList.add('pan-in');
        thirdSectionAnimated = true;
    }
    if (!ninthSectionAnimated && ninthSection && isElementInViewport(ninthSection)) {
        ninthSection.classList.add('pan-in');
        ninthSectionAnimated = true;
    }
    if (!fourthSectionAnimated && fourthSection && isElementInViewport(fourthSection)) {
        fourthSection.classList.add('pan-in');
        fourthSectionAnimated = true;
    }
    if (!fifthSectionAnimated && fifthSection && isElementInViewport(fifthSection)) {
        fifthSection.classList.add('pan-in');
        fifthSectionAnimated = true;
    }
    if (!sixthSectionAnimated && sixthSection && isElementInViewport(sixthSection)) {
        sixthSection.classList.add('pan-in');
        sixthSectionAnimated = true;
    }
    if (!seventhSectionAnimated && seventhSection && isElementInViewport(seventhSection)) {
        seventhSection.classList.add('pan-in');
        seventhSectionAnimated = true;
    }
    if (!eighthSectionAnimated && eighthSection && isElementInViewport(eighthSection)) {
        eighthSection.classList.add('pan-in');
        eighthSectionAnimated = true;
    }
    if (!ninthSectionAnimated && ninthSection && isElementInViewport(ninthSection)) {
        ninthSection.classList.add('pan-in');
        ninthSectionAnimated = true;
    }
    if (!tenthSectionAnimated && tenthSection && isElementInViewport(tenthSection)) {
        tenthSection.classList.add('pan-in');
        tenthSectionAnimated = true;
    }
  
}

window.addEventListener('scroll', checkSections);
window.addEventListener('DOMContentLoaded', checkSections);

// Place this script after your audio element or in your JS file
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');
  let played = false;

  function playAudioOnTap() {
    if (!played) {
      audio.play();
      played = true;
      document.removeEventListener('click', playAudioOnTap);
      document.removeEventListener('touchstart', playAudioOnTap);
    }
  }

    document.addEventListener('click', playAudioOnTap);
    document.addEventListener('touchstart', playAudioOnTap);
});

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');
  let played = false;

  function playAudioOnScroll() {
    if (!played) {
      audio.play();
      played = true;
      document.removeEventListener('scroll', playAudioOnScroll);
    }
  }

      document.addEventListener('scroll', playAudioOnScroll);
});

window.addEventListener('DOMContentLoaded', function() {
    const hint = document.getElementById('music-hint');
    hint.style.display = 'inline';
    setTimeout(() => {
        hint.style.display = 'none';
    }, 3000);
});