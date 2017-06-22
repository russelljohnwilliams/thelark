  var screenWidth = jQuery(window).width()
  var screenHeight = jQuery(window).height() -2
  var currentPosition = 0
  var resize
  var viewportWidth

  jQuery( document ).ready(function() {
   addContactDetails()
   cloneEvent()
   buildPages()
   getInstagramImage()
   colours()
   // resizeHeader()
   addHomeToMenu()
   setViewportMargin()
 })


// resize function that deletes and redraws the size of the post tiles

jQuery(function(){
  jQuery(window).on("resize", function(event){
    jQuery('#new-main').remove();
    
    // jQuery('.page-builder').remove();
    setViewportMargin()
    buildPages();
    // resizeHeader()
    colours()
  });
})


// expands a tile to show more content

// jQuery(function(){jQuery( ".post-wrapper").click( function(event){
//   if ( !jQuery(this).hasClass("is-expanded") )
//     { 
//       var allOfThem = jQuery(".post-wrapper")
//       allOfThem.removeClass('is-expanded')
//       allOfThem.stop().animate({width:resize}, 200);
//       var bopper = jQuery(this)
//       bopper.stop().animate({width:(resize * 2) + 2}, 200);
//       bopper.addClass("is-expanded")
//     }
//     else if ( jQuery(this).hasClass("is-expanded") ) 
//     {
//       var wrapper = jQuery(this)
//       wrapper.stop().animate({width: resize}, 200);              
//       wrapper.removeClass('is-expanded') 
//     } 
//     return false;
//   });
// })


// pops Home/Maison to the beggining of the menu

function addHomeToMenu(){
  jQuery('.home-page').attr('id', "home")
  jQuery('.nav-menu').prepend('  <li class="homePag"><a href="#home">home | maison</a></li>')
}


// function to scroll the viewport back to the first page (the post tiles)

jQuery(function(){
  jQuery('.site-title').bind('click', function(event){
    jQuery('#viewport').stop().animate({
      scrollLeft: (0)
    }, 1000);
    currentPosition = 0
    event.preventDefault();
  });
});

  // function that creates an animated scroll left or right through the pages inside the 'viewport' after a link is clicked in the header menu

  jQuery(function() {
    jQuery('ul>li>a').bind('click',function(event){
      var viewportPosition = jQuery('#viewport').offset().left;
      var anchor = jQuery(this);
      var targetAnchor = jQuery(anchor.attr('href')).offset().left
      var targetAnchorSum = targetAnchor - viewportPosition 
      // if(targetAnchor != viewportPosition + 4){
        var moveTo = targetAnchorSum + currentPosition
        jQuery('#viewport')
        .stop()
        .animate({
          scrollLeft: (moveTo)
        }, 1000);
        currentPosition = moveTo
      // }
      event.preventDefault();
    });
  });




  jQuery(function(){
    jQuery('.background-hide').hide();

    jQuery('.background-image').hover(
      function(){
        jQuery(this).children('.background-hide').stop(true, true).fadeIn()
      },
      function(){
        jQuery(this).children('.background-hide').stop(true, true).fadeOut()
      });
  });

  jQuery(function(){
    var menu = jQuery('.kix-paginateddocumentplugin')
    menu.clone().appendTo('.food-clone')
  })

  function setViewportMargin(){
    var menuHeight = jQuery('#masthead').height()
    jQuery('#viewport').css('margin-top', menuHeight + 2)
  }


// takes the (hidden with css) tagline, generated within wordpress, splits at an asterix and separates onto new lines to create a multiple line tagline

function addContactDetails(){
  var split = jQuery('.site-description')[0].innerHTML.split('*')
  jQuery("<div></div>")
  .addClass('split-tagline')
  .appendTo('.site-branding');

  for (var i = 0; i < split.length; i++){
    jQuery('<p>').html(split[i]).appendTo('.split-tagline')
  }
};

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
  resize = (viewportWidth - 6) / 3 
  
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
    .css("width", (viewportWidth - 6) / 3 )
    .width();
    jQuery('.post-wrapper').css('height', cw +'px');

    jQuery('#viewport').height(viewportWidth)
    var viewportHeight = jQuery('#viewport').height()
  }

  jQuery("#main")
  .clone()
  .removeAttr('id')
  .attr('id', "new-main")
  .appendTo(newPosts)

  // jQuery('#viewport').height(viewportWidth)
  // var viewportHeight = jQuery('#viewport').height()

  
  jQuery('.page-builder').css('width', (viewportWidth) +'px')
  jQuery('.page-wrapper').css('height', (viewportHeight) +'px')
  jQuery('.page-builder').css('height', (viewportHeight) +'px')
}

// sets background colours of the tiles (make it randomly selected?)

function colours(){
    // var colour = ['pink', 'grey', 'orange', 'yellow', 'white', 'turquois-e', 'green', 'purple', 'grey']
    var colour = ['#008c9e', '#444f59', '#F6D155',
    '#fec8c9', '#3C3530', '#DC4C46',
    '#D2691E', '#95DEE3 ', '#92B558']

    for (var i = 0; i < 9; i++){
        // var x = Math.floor((Math.random() * 9) + 1);
        // jQuery('.entry-content').eq(9+i).css('background', colour[i])
        jQuery('.entry-content').eq(9+i).css('background', colour[i])
      }
    }

// function resizeHeader(){
//   console.log("bash")
//   // jQuery('.site-header').remove();
//   var padding = (screenWidth - viewportWidth) / 2
//   var header = jQuery('.site-header')
//   header.css('padding-left', padding);
//   header.css('padding-right ', padding);
// }











// playing around with colouring the tiles dynamically




  // function colours(){
  //   var colour = ['pink', 'orange', 'yellow', 'turquois-e', 'green', 'purple', 'grey', 'PaleTurquois-e', 'LightGoldenrodYellow', 'YellowGreen', 'LightSteelBlue', 'MistyRose', 'PaleGoldenrod', 'CadetBlue', 'Teal', 'Honeydew', 'LightCoral']

  //   for (var i = 0; i < 9; i++){
  //     var x = Math.floor((Math.random() * 9) + 1);
  //     jQuery('.entry-content').eq(9+i).css('background', colour[x])
  //     colour.splice(x, 1)
  //   }
  // }



  // function colours(){

  //   for (var i = 0; i < 9; i++){

  //     var a = Math.floor((Math.random() * (250 - 125)) + 125);
  //     var b = Math.floor((Math.random() * (250 - 125)) + 125);
  //     var c = Math.floor((Math.random() * (250 - 125)) + 125);
  //     jQuery('.entry-content').eq(8+i).css('background', "rgb("+a+","+b+","+c+")")
  //   }
  // }