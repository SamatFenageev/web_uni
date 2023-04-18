var main = function () {
  "use strict";
  let ads = [
    "объявление 1",
    "объявление 2",
    "объявление 3",
  ];
  $(".tabs a span").toArray().forEach(function (element) {
    $(element).on("click", function () {
      var $element = $(element);
      $(".tabs a span").removeClass("active");
      $(element).addClass("active");
      $("main .tabcontent").empty();
      if($element.parent().is(":nth-child(1)")){
        $content =  $("<ul>");
        ads.forEach(function(ad){
          $content.append($("<li>").text(ad));
        });
      }
      else if($element.parent().is(":nth-child(2)")){
        $content =  $("<ul>");
        for (var i = ads.length - 1; i >= 0; i--) {
          $content.append($("<li>").text(ads[i]));
        }
      }
      return false;
    });
  });
};
$(document).ready(main);

