jQuery("document").ready(function($)
{
  let menuBtn = $('.menu-icon'),
      menu = $('.bar-nav ul');

  menuBtn.click(function()
  {
    if(menu.hasClass('show'))
    {
      menu.removeClass('show');
    }
    else
    {
      menu.addClass('show');
    }
  });
});