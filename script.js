// Add any JavaScript functionality you want here
document.addEventListener('DOMContentLoaded', (event) => {
	// Example of an animation when scrolling to a section
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
		  behavior: 'smooth'
		});
	  });
	});
  });
  document.addEventListener('DOMContentLoaded', (event) => {
	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
		  behavior: 'smooth'
		});
	  });
	});
  
	// Fade-in and slide-in animation on scroll
	const faders = document.querySelectorAll('.fade-in');
	const sliders = document.querySelectorAll('.slide-in');
  
	const appearOptions = {
	  threshold: 0,
	  rootMargin: "0px 0px -100px 0px"
	};
  
	const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
	  entries.forEach(entry => {
		if (!entry.isIntersecting) {
		  return;
		} else {
		  entry.target.classList.add('appear');
		  appearOnScroll.unobserve(entry.target);
		}
	  });
	}, appearOptions);
  
	faders.forEach(fader => {
	  appearOnScroll.observe(fader);
	});
  
	sliders.forEach(slider => {
	  appearOnScroll.observe(slider);
	});
  });
  