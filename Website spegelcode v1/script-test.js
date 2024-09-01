document.getElementById('scroll-left').addEventListener('click', function() {
  document.getElementById('scrollable-div').scrollBy({
      left: -150, // adjust this value as needed
      behavior: 'smooth'
  });
});

document.getElementById('scroll-right').addEventListener('click', function() {
  document.getElementById('scrollable-div').scrollBy({
      left: 150, // adjust this value as needed
      behavior: 'smooth'
  });
});