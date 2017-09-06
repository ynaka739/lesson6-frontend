$(document).ready(function() {
  // popupクラスの付いた要素にMagnific Popupを適用
  $(".popup").magnificPopup({
    type: "image",
    mainClass: "mfp-fade",
    gallery: {
      enabled: true,
    },
  });
});