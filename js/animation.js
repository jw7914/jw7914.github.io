/* Projects animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  /* Certificates animation*/
  const track = document.getElementById("image-track");
  const scrollDistance = -80; /* Adjust expand scroll length */
  
  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
  
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  
  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") {
      return;
    }
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), scrollDistance);
    const multiplier = window.innerWidth < 1200 ? 1.75 : 1; // Adjust multiplier value as needed
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${nextPercentage * multiplier}%)`
    }, { duration: 1200, fill: "forwards" });
  }
  
  window.onmousedown = e => handleOnDown(e);
  
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  
  window.onmouseup = e => handleOnUp(e);
  
  window.ontouchend = e => handleOnUp(e.touches[0]);
  
  window.onmousemove = e => handleOnMove(e);
  
  window.ontouchmove = e => handleOnMove(e.touches[0]);

/* Skills animation*/
const scrollers = document.querySelectorAll(".scroller");

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", true);
  })
  const scrollerInner = document.querySelector(".scroller_inner");
  const scrollerContent = Array.from(scrollerInner.children);
  scrollerContent.forEach(item => {
    const dupItem = item.cloneNode(true);
    dupItem.setAttribute('aria-hidden', true);
    scrollerInner.appendChild(dupItem);
  })
}
addAnimation()