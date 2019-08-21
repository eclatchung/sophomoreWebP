
$(function(){
    var top_pos= $('.top').offset().top;
    win = window;
  $(win).on('scroll',
     function(){
         var pos = $(this).scrollTop();
       $('#pos').attr('value', pos);
       console.log('pos= '+ pos, ' top_pos= '+top_pos);
       if(pos >= top_pos){
            $('.top').addClass('fix');
       }
        else{
            $('.top').removeClass('fix');
        }
  });
});
alert(navigator.userAgent);

window.onload = function() {
    var image = document.getElementById("image");
    var i = 0;
    setInterval(function() {
        i++;
        i = i % 3 + 1;
        image.src = "img/" + i + ".jpg"
    }, 1000);
}
