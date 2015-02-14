/*
     FILE ARCHIVED ON 21:55:50 Jul 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:45:35 Feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
window.addEvent('domready', function()
{
  $('hideArrow').fade('hide');

  $('showArrow').addEvent('click', showMore);
  $('moreText').addEvent('click', showMore);

  $$('.navigationItem').addEvent('click', getContent);

  $('mission').fireEvent('click');
});
function showMore()
{
  $('showArrow').removeEvents('click');
  $('moreText').removeEvents('click');
  $('hideArrow').addEvent('click', hideMore);

  var showMore = new Fx.Morph('contentMore', {duration: 1500, transition: 'quint:out', onComplete: function() {$('hideArrow').fade('toggle')}});
   showMore.start({top: 15});

   $('showArrow').fade('toggle');
   $('moreText').fade('toggle');
}

function hideMore()
{
  $('hideArrow').removeEvents('click');
   $('showArrow').addEvent('click', showMore);
   $('moreText').addEvent('click', showMore);

  var hideMore = new Fx.Morph('contentMore', {duration: 1500, transition: 'quint:in', onComplete: function() {$('showArrow').fade('toggle'); $('moreText').fade('toggle');}});
   hideMore.start({top: -220});

   $('hideArrow').fade('toggle');
}

function getContent()
{
  $$('.navigationItem').removeClass('current');
  this.addClass('current');

  getContent = new Request({method: 'post', url: 'home/data'})
  getContent.send('content='+this.id);

  getContent.onSuccess = function(responseText, responseXML)
  {
    $('innerContentMore').set('html', responseText);
  }
  getContent.onFailure = function()
  {
    console.log('((');
  }
}
