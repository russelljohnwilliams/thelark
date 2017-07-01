
//CREATE STATE FOR ALL FUNCTION TO READ FROM.

var screenWidth = jQuery(window).width()
var screenHeight = jQuery(window).height() -2
var currentPosition = 0
var resize
var viewportWidth = jQuery('#viewport').width() 
var images = []

jQuery( document ).ready(function() {
 // addContactDetails()
 cloneEvent()
 buildPages()
 getInstagramImage()
 addHomeToMenu()
 setViewportMargin()
})

// resize function that deletes and redraws the size of the post tiles

jQuery(window).resize(function() {
  // jQuery('#new-main').remove();
  // buildPages();
  setPostSize()
  setViewportMargin()

})

// pops Home/Maison to the beggining of the menu

function addHomeToMenu(){
  jQuery('.home-page').attr('id', "home")
  jQuery('.nav-menu').prepend('  <li class="homePag"><a href="#home">home | maison</a></li>')
}

// function to scroll the viewport back to the first page (the post tiles)

// jQuery(function(){
//   jQuery('.site-title').bind('click', function(event){
//     jQuery('#viewport').stop().animate({
//       scrollLeft: (100000000)
//     }, 1000);
//     currentPosition = 0
//     event.preventDefault();
//   });
// });

// display photos in Food tile

jQuery(function() {
  var dir = "wp-content/uploads/food";
  var fileextension = ".jpg";
  // var images = []
  jQuery.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
          // List all .png file names in the page
          jQuery(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            images.push( jQuery("<img src='" + dir + filename + "'>"))
            // jQuery(".background-food").append(images);
          });
          for(var i = 0; i < images.length; i++) {
              images.splice(i+0,1);
          }

            // console.log("img", images)
            // jQuery(".background-food").append(images[0]);

         for (var i=0; i< images.length; i++) {
            (function(ind) {
                setTimeout(function(){jQuery(".background-food").empty().append(images[ind]);;}, 1000 * ind);
            })(i);
         }


        }
      });
})

// jQuery(function(){
//   setTimeout("slideshow()",2500)
// })

// function slideshow(){
//   var num = 0
//   num++
//   consoleLog(num)
//   setTimeout("slideshow()",2500)
// }

// function consoleLog(num){
//   // jQuery(".background-food").append(images[num]);
//   console.log("hello", num)
// }

// function that creates an animated scroll left or right through the pages inside the 'viewport' after a link is clicked in the header menu

jQuery(function() {
  jQuery('ul>li>a').bind('click',function(event){
    var viewportPosition = jQuery('#viewport').offset().left;
    var anchor = jQuery(this);
    var targetAnchor = jQuery(anchor.attr('href')).offset().left
    var targetAnchorSum = targetAnchor - viewportPosition 
    var moveTo = targetAnchorSum + currentPosition
    jQuery('#viewport')
    .stop()
    .animate({
      scrollLeft: (moveTo)
    }, 1000);
    currentPosition = moveTo
    event.preventDefault();
  });
});


// hide / show hidden elements / images in the tile posts

jQuery(function(){
  jQuery('.background-hide').hide();
  jQuery('.hidden-post-title').hide();

  jQuery('.background-image').hover(
    function(){
      jQuery(this).children('.background-hide').stop(true, true).fadeIn()
      jQuery(this).children('.hidden-post-title').stop(true, true).fadeIn()
      jQuery(this).children('.post-title').stop(true, true).fadeOut()
      jQuery(this).children('.background-show').stop(true, true).fadeOut()
    },
    function(){
      jQuery(this).children('.background-hide').stop(true, true).fadeOut()
      jQuery(this).children('.hidden-post-title').stop(true, true).fadeOut()
      jQuery(this).children('.post-title').stop(true, true).fadeIn() 
      jQuery(this).children('.background-show').stop(true, true).fadeIn()

    });
});

jQuery(function(){
  var menu = jQuery('.kix-paginateddocumentplugin')
  menu.clone().appendTo('.food-clone')
})

function setViewportMargin(){
  var menuHeight = jQuery('#masthead').height()
  jQuery('#viewport').css('margin-top', menuHeight + 5)
}

// takes the (hidden with css) tagline, generated within wordpress, splits at an asterix and separates onto new lines to create a multiple line tagline

// function addContactDetails(){
//   var split = jQuery('.site-description')[0].innerHTML.split('*')
//   jQuery("<div></div>")
//   .addClass('split-tagline')
//   .appendTo('.site-branding');

//   for (var i = 0; i < split.length; i++){
//     jQuery('<p>').html(split[i]).appendTo('.split-tagline')
//   }
// };

// a plugin is used to pull the most recent image from instagram, this strips away all the irrelevant html and presents just the image without

function getInstagramImage(){

  setTimeout(function(){
    var instagramClone = jQuery('.instagram-clone')
    var instaImage = jQuery('div.post-wrapper')
    .eq(1)
    .find('img')
    instaImage.removeAttr("height width")
    .css({"display" : "block", "height" : "100%", "width" : "100%"})
    .clone()
    .appendTo(instagramClone) }, 2000);
}

function cloneEvent(){

  var openingHoursContent = jQuery('div.hidden-opening-hours')
  .find(".simcal-event-details")
  .first()
  var eventContent = jQuery( "div.hidden-events")
  .find(".simcal-event-details")
  .first()

  var clonedOpeningHours= jQuery('.cloned-opening-hours')
  var clonedEvent = jQuery('.cloned-event')

  openingHoursContent.clone()
  .appendTo(clonedOpeningHours)

  eventContent.clone()
  .appendTo(clonedEvent)
}


function buildPages(){

  var newPosts = jQuery('.page-builder').eq(0)
  viewportWidth = jQuery('#viewport').width()
  setPostSize()
  jQuery("#main")
  .clone()
  .removeAttr('id')
  .attr('id', "new-main")
  .appendTo(newPosts)
}

function setPostSize(){
// MUST AMEND TO ALLOW FOR ADDITION OF BORDERS AND MARGINS
var newPosts = jQuery('.page-builder').eq(0)
viewportWidth = jQuery('#viewport').width()
resize = (viewportWidth - 35) / 3 
if (viewportWidth < 450){
  var cw = jQuery('.post-wrapper')
  .css({"width": (viewportWidth - 2), "height": (screenHeight / 5)})
  .width();

  jQuery('#viewport').height((screenHeight / 5) * 4)
  var viewportHeight = jQuery('#viewport').height()

  jQuery('#masthead').css('height', screenHeight / 5)

}
else{

  var cw = jQuery('.post-wrapper')
  .css("width", (resize) )
  .width();
  var border = jQuery('.post-wrapper').css("border")
  var totalWidth = (parseInt(border[0]) * 2)  + cw
  jQuery('.post-wrapper').css('height', totalWidth +'px');
  jQuery('#viewport').height(viewportWidth)


}
var viewportHeight = jQuery('#viewport').height()
jQuery('.page-builder').css('width', (viewportHeight) +'px')
jQuery('.page-wrapper').css('height', (viewportHeight) +'px')
jQuery('.page-builder').css('height', (viewportHeight) +'px')

}

