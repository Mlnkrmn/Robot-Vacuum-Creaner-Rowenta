document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tooltip-trigger").forEach(function (tooltip) {
        tooltip.addEventListener("click", function () {
            let tooltipText = this.nextElementSibling;
            if (tooltipText.style.display === "block") {
                tooltipText.style.display = "none";
            } else {
                document.querySelectorAll(".tooltip-text").forEach(el => el.style.display = "none");
                tooltipText.style.display = "block";
            }
        });
    });
});
const videoSection = document.querySelector('.video-wrapper');
const videos = Array.from(videoSection.querySelectorAll('video'));
 
 
const classOrder = ['video-1', 'video-2', 'video-3', 'video-4', 'video-5'];
 
videoSection.addEventListener('click', () => {
 
  videos.forEach(video => {
    classOrder.forEach(cls => video.classList.remove(cls));
  });
 
 
  classOrder.unshift(classOrder.pop());
 
 
  videos.forEach((video, index) => {
    video.classList.add(classOrder[index]);
  });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const isOpen = answer.style.display === 'block';


    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.toggle-btn').forEach(b => b.textContent = '+');


    if (!isOpen) {
      answer.style.display = 'block';
      button.textContent = '–';
    }
  });
});