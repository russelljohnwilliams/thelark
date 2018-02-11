var screenWidth = jQuery(window).width()
var screenHeight = jQuery(window).height() -2
var currentPosition = 0
var viewportWidth = jQuery('#viewport').width() 
var images = []
var viewportHeight
var menuHeight


jQuery( document ).ready(function() {
 setViewportMarginHeight()
 createVeiwport()
 cloneMainInsideViewport()
 centerTheSite()
 setHeaderWidth()
 setPostSize()
 getInstagramImage()
 showOpeningHours()
})

jQuery(window).resize(function() {
  // jQuery('#new-main').remove();
  //  screenWidth = jQuery(window).width()
  //  screenHeight = jQuery(window).height() -2
  // setViewportMarginHeight()
  // createVeiwport()
  // cloneMainInsideViewport()
  // centerTheSite()
  // setHeaderWidth()
  // setPostSize()
})

function setHeaderWidth(){
  jQuery('.site-header').css('width', viewportWidth)
}

function createVeiwport(){
  var headerHeight = jQuery('.site-header').height();
  var viewportHeight = screenHeight - headerHeight;
  viewportWidth = viewportHeight - menuHeight
  jQuery('#viewport').css('width', viewportWidth)
}

function setViewportMarginHeight(){
  menuHeight = jQuery('#masthead').height()
  jQuery('#viewport').css('margin-top', menuHeight + 30)
}

function centerTheSite(){
  jQuery('#viewport').css('margin-left', (screenWidth - viewportWidth) / 2)
  jQuery('.site-header').css('margin-left', (screenWidth - viewportWidth) / 2)
}

function cloneMainInsideViewport(){
  var newPosts = jQuery('.page-builder').eq(0)
  jQuery("#main").clone().removeAttr('id').attr('id', "new-main").appendTo(newPosts)
}

// MUST AMEND TO ALLOW FOR ADDITION OF BORDERS AND MARGINS
function setPostSize(){
  var resizeScreen = (viewportWidth - 24) / 3 
  if (screenWidth < 500){
    var postWrapper = jQuery('.post-wrapper').css({"width": (viewportWidth - 2), "height": (screenHeight / 5)}).width();
    jQuery('#viewport').height((screenHeight / 5) * 4)
    var viewportHeight = jQuery('#viewport').height()
    jQuery('#masthead').css('height', screenHeight / 5)
  }else{
    var postWrapper = jQuery('.post-wrapper').css("width", (resizeScreen) ).width();
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

function getInstagramImage(){
  setTimeout(function(){
    var instagramClone = jQuery('.instagram-clone')
    var instaImage = jQuery('div.hidden-instagram').eq(1).find('img')
    instaImage.removeAttr("height width").css({"display" : "block", "height" : "100%", "width" : "100%"}).clone().appendTo(instagramClone) }, 2000);
}

function showOpeningHours(){
  var todaysOpeningHoursContent = jQuery('div.hidden-opening-hours').find(".simcal-event-details").first()
  var tomorrowsOpeningHoursContent = jQuery('div.tomorrow').find(".simcal-event-details").first()
  var clonedOpeningHours = jQuery('.cloned-opening-hours')
  if (todaysOpeningHoursContent.text().trim() != "zzz" ){
    var clone = todaysOpeningHoursContent
  }else{
    var clone = tomorrowsOpeningHoursContent
  }
  clone.clone().appendTo(clonedOpeningHours)
}



//visibility is initially hidden, and then marked as visible after a set time, this hides boxes from resising that looks unsightly

jQuery(function(){
  setTimeout(function(){
    jQuery('body').css('visibility', 'visible'),2000  
  })
})

// function that creates an animated scroll left or right through the pages inside the 'viewport' after a link is clicked in the header menu

jQuery(function() {
  jQuery('.background-image').bind('click',function(event){
    var viewportPosition = jQuery('#viewport').offset().left;
    var anchor = jQuery(this).find('.anchor-point')[0].innerText.toLowerCase()
    var hashAnchor = "#" + anchor
    var targetAnchor = jQuery(hashAnchor).offset().left
    var targetAnchorSum = targetAnchor - viewportPosition 
    var moveTo = targetAnchorSum + currentPosition
    jQuery('#viewport').stop().animate({
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
    jQuery('#viewport').stop().animate({
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
      jQuery(this).children('.background-hide').stop(true, true).fadeIn()
      jQuery(this).children('.post-title').stop(true, true).fadeOut()
    },
    function(){
      jQuery(this).children('.background-hide').stop(true, true).fadeOut()
      jQuery(this).children('.post-title').stop(true, true).fadeIn() 
    });
});

































































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

