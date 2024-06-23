// image move on mouse move
$('.carousel-item img').mousemove(function(e)
{
    var moveX = (e.pageX * -1/50);
    var moveY = (e.pageY * -1/50);
    $(this).css({'object-position': moveX+'px '+moveY+'px', 'transition': 'none'});
})

// reset
$('.carousel-item img').mouseleave(function(e)
{
    $(this).css({'object-position': 'center center', 'transition': '0.5s'});
})

// active Product Rating
function activeProductRating()
{
    var activesrc = $('.carousel-item.active').find('img').attr('src');
    $('.P_overview img').attr('src', activesrc);
    $('.loading img:first-child').attr('src', activesrc);
}

// calling active product
$('#products').on('slid.bs.carousel', activeProductRating);



  
// interactive rating system 
$(document).ready(function() {
    var isMouseDown = false;
    var currentRating = 0;
    var totalRating = 10;
  
    $('.bar-single-inner').each(function() {
      var barInner = $(this);
      var barFills = barInner.find('.bar-fill');
      var totalRatingDisplay = barInner.find('.total-rating');
  
      barFills.mousedown(function() {
        isMouseDown = true;
        $(this).addClass('filled');
        currentRating = $(this).index() + 1;
        updateTotalRating();
      });
  
      barFills.mouseover(function() {
        if (isMouseDown) {
          $(this).addClass('filled');
          var newRating = $(this).index() + 1;
          if (newRating > currentRating) {
            currentRating = newRating;
            updateTotalRating();
          }
        } else {
          $(this).addClass('filled-hover');
          $(this).prevAll('.bar-fill').addClass('filled-hover');
        }
      }).mouseout(function() {
        $(this).removeClass('filled-hover');
        $(this).prevAll('.bar-fill').removeClass('filled-hover');
      });
  
      barInner.click(function(event) {
        var clickedIndex = $(event.target).index();
        currentRating = clickedIndex + 1;
        barFills.removeClass('filled');
        barFills.removeClass('filled-hover');
        barFills.filter(':lt(' + currentRating + ')').addClass('filled');
        updateTotalRating();
      });
  
      function updateTotalRating() {
        var totalRatings = 0;
        var totalFilled = 0;
      
        $('.bar-single-inner').each(function() {
          var filled = $(this).find('.filled').length;
          totalRatings += filled;
          totalFilled += filled > 0 ? 1 : 0;
        });
      
        var averageRating = totalFilled > 0 ? totalRatings / totalFilled : 0;
        var averageRatingText = averageRating.toFixed(1); // round to 1 decimal point
        
        totalRatingDisplay.text(currentRating + '/' + totalRating);
        $('#average-rating').text(averageRatingText);
        var percentage = (averageRating /10) * 100; // get rating percentage
        var ratingOffset = Math.round(percentage * 4.71); // convert percentage to stroke dash offset out of 100
        var strokeDashOffset = (471 - ratingOffset) * 0.9; // adjust stroke dash offset to remove 10%
        $('.t_rating .circle2').css('stroke-dashoffset', strokeDashOffset + 94);
        
      }
      
    });
  
    $(document).mouseup(function() {
      isMouseDown = false;
    });
  });

$('#review').on('click', function()
{
  $('.p_show').css('display','none')
  $('.loading').css('display', 'grid');

  setTimeout(function()
  {
      $('.loading').css('display', 'none');
      $('.p_rating').css('display', 'block');

  },1000)
})
  
$('#sub').on('click', function()
{
  window.location = 'thankyou.html'
})