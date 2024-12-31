document.addEventListener("DOMContentLoaded", function() {
    const typewriters = document.querySelectorAll('.typewriter');

    typewriters.forEach(el => {
        const text = el.getAttribute('data-text');
        el.innerHTML = ''; // Clear existing text
        typeWriter(el, text, 0);
    });

    function typeWriter(el, text, i) {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(function() {
                typeWriter(el, text, i);
            }, 100);
        } else {
            setTimeout(function() {
                el.style.borderRight = 'none'; // Remove caret after typing
            }, 500); // Delay to keep the caret visible for a brief moment after typing finishes
        }
    }
});

function checkOtherIndustry(selectElement) {
    var otherIndustryInput = document.getElementById('other-industry');
    if (selectElement.value === 'other') {
      otherIndustryInput.style.display = 'block';
    } else {
      otherIndustryInput.style.display = 'none';
    }
  }