$(document).on('mousemove', (event) => {
  $('#cursor').css({
    left: event.clientX,
    top: event.clientY,
  });
});