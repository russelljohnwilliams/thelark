// Things to do
// CREATE STATE FOR ALL FUNCTION TO READ FROM?

var screenWidth = jQuery(window).width()
var screenHeight = jQuery(window).height() -2
var currentPosition = 0
// var resizeScreen
var viewportWidth = jQuery('#viewport').width() 
var images = []
var viewportHeight
var menuHeight

jQuery( document ).ready(function() {
 buildThePage()
  // addHomeToMenu()
})


// resize function that deletes and redraws the post tiles

jQuery(window).resize(function() {
  jQuery('#new-main').remove();
  buildThePage()
})

function buildThePage(){
  showOpeningHours()
  setViewportMargin()
  sizeElements()
  getInstagramImage()
  
  setSiteHeader()
}


// function that creates an animated scroll left or right through the pages inside the 'viewport' after a link is clicked in the header menu

jQuery(function() {
  jQuery('.background-image').bind('click',function(event){
    var viewportPosition = jQuery('#viewport').offset().left;
    var anchor = jQuery(this).find('.anchor-point')[0].innerText.toLowerCase()
    var hashAnchor = "#" + anchor
    var targetAnchor = jQuery(hashAnchor).offset().left
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


// allows the link scroll any page back to home screen

jQuery(function() {
  jQuery('.home-button').bind('click',function(event){
    var anchor = jQuery(this)[0].innerText.toLowerCase()
    var hashAnchor = "#" + anchor
    var moveTo = 0
    jQuery('#viewport')
    .stop()
    .animate({
      scrollLeft: (moveTo)
    }, 1000);
    currentPosition = moveTo
    event.preventDefault();
  });
});


// hide/show hidden elements/images in the tile posts

jQuery(function(){
  jQuery('.background-hide').hide();
  jQuery('.background-image').hover(
    function(){
      console.log("show")
      jQuery(this).children('.background-hide').stop(true, true).fadeIn()
      jQuery(this).children('.post-title').stop(true, true).fadeOut()
    },
    function(){
      console.log("hide")
      jQuery(this).children('.background-hide').stop(true, true).fadeOut()
      jQuery(this).children('.post-title').stop(true, true).fadeIn() 
    });
});


// Pushes the main section of the screen below the header

function setViewportMargin(){
  menuHeight = jQuery('#masthead').height()
  jQuery('#viewport').css('margin-top', menuHeight + 30)
}

// a plugin is used to pull the most recent image from instagram, this strips away all the irrelevant html and presents just the image. 

function getInstagramImage(){
  setTimeout(function(){
    var instagramClone = jQuery('.instagram-clone')
    var instaImage = jQuery('div.hidden-instagram')
    .eq(1)
    .find('img')
    instaImage.removeAttr("height width")
    .css({"display" : "block", "height" : "100%", "width" : "100%"})
    .clone()
    .appendTo(instagramClone) }, 2000);
}

// a plugin is used to grab the openng hours. If the skylark is open it will tell you how many hours till it is closed, if it is closed it will tell you when it opens.

function showOpeningHours(){
  var todaysOpeningHoursContent = jQuery('div.hidden-opening-hours')
  .find(".simcal-event-details")
  .first()
  var tomorrowsOpeningHoursContent = jQuery('div.tomorrow')
  .find(".simcal-event-details")
  .first()
  var clonedOpeningHours = jQuery('.cloned-opening-hours')
  if (todaysOpeningHoursContent.text().trim() != "zzz" ){
    var clone = todaysOpeningHoursContent
  }else{
    var clone = tomorrowsOpeningHoursContent
  }
  clone.clone()
  .appendTo(clonedOpeningHours)
}

function sizeElements(){
  var headerHeight = jQuery('.site-header').height();
  // var screenHeight = jQuery(window).height() -2
  var viewportHeight = screenHeight - headerHeight;
  var newPosts = jQuery('.page-builder').eq(0)
  viewportWidth = viewportHeight - menuHeight
  console.log("MH", menuHeight)
  jQuery('#viewport').css('width', viewportWidth)
  setPostSize()
  jQuery("#main")
  .clone()
  .removeAttr('id')
  .attr('id', "new-main")
  .appendTo(newPosts)
}

function setSiteHeader(){
  // screenWidth = jQuery(window).width()
  jQuery('.site-header').css('width', viewportWidth)
  jQuery('#viewport').css('margin-left', (screenWidth - viewportWidth) / 2)
  jQuery('.site-header').css('margin-left', (screenWidth - viewportWidth) / 2)
}

// sets the size of each tile on the front page
// MUST AMEND TO ALLOW FOR ADDITION OF BORDERS AND MARGINS

function setPostSize(){
var newPosts = jQuery('.page-builder').eq(0)
viewportWidth = jQuery('#viewport').width()
var resizeScreen = (viewportWidth - 24) / 3 
if (screenWidth < 450){
  var postWrapper = jQuery('.post-wrapper')
  .css({"width": (viewportWidth - 2), "height": (screenHeight / 5)})
  .width();
  jQuery('#viewport').height((screenHeight / 5) * 4)
  var viewportHeight = jQuery('#viewport').height()
  jQuery('#masthead').css('height', screenHeight / 5)
}
else
{
  var postWrapper = jQuery('.post-wrapper')
  .css("width", (resizeScreen) )
  .width();
  var border = jQuery('.post-wrapper').css("border")
  var totalWidth = (parseInt(border[0]) * 2)  + postWrapper
  jQuery('.post-wrapper').css('height', totalWidth +'px');
  jQuery('#viewport').height(viewportWidth)
}
var viewportHeight = jQuery('#viewport').height()
jQuery('.page-builder').css('width', (viewportHeight) +'px')
jQuery('.page-wrapper').css('height', (viewportHeight) +'px')
jQuery('.page-builder').css('height', (viewportHeight) +'px')
}


// function showOpeningHours(){
//   var openingHoursContent = jQuery('div.hidden-opening-hours')
//   .find(".simcal-event-details")
//   .first()
//   var eventContent = jQuery( "div.hidden-events")
//   .find(".simcal-event-details")
//   .first()
//   var clonedOpeningHours= jQuery('.cloned-opening-hours')
//   var clonedEvent = jQuery('.cloned-event')
//   openingHoursContent.clone()
//   .appendTo(clonedOpeningHours)
//   eventContent.clone()
//   .appendTo(clonedEvent)
// }


// pops Home/Maison to the beggining of the menu

// function addHomeToMenu(){
//   jQuery('.home-page').attr('id', "home")
//   jQuery('.nav-menu').prepend('  <li class="homePage"><a href="#home">home | maison</a></li>')
// }

// jQuery(function(){
//   var menu = jQuery('.kix-paginateddocumentplugin')
//   menu.clone().appendTo('.food-clone')
// })

