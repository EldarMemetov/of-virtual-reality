$(document).ready(function () {
  // Инициализация слайдера только на меньших экранах
  if ($(window).width() < 1440) {
    $(".conteiner-group").slick({
      dots: true,
      prevArrow: $(".next-left"),
      nextArrow: $(".next-right"),
    });
  }
});
