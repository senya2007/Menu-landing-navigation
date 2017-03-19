(function () {
    var sections = document.getElementsByTagName("section");
    $(window).scroll(function() {
        var previousElement = $('section:first');
        var minOffset = 0;
        for(var i=0;i<sections.length;i++)
        {
            var id = sections[i].id;
            var topOffset = sections[i].offsetTop;
            if(window.scrollY >= topOffset)
            {
                $('.nav-link').each(function () {
                    var href = $(this).attr('href');
                    var idFromHref = href.substring(1);
                    if(id == idFromHref)
                    {
                        var parent = $(this).parent();
                        parent.addClass('active');
                        if(previousElement!= parent) {
                            if(previousElement.hasClass('active')) {
                                previousElement.removeClass('active');
                            }
                            minOffset = topOffset;
                            previousElement = parent;
                        }
                    }else
                    {
                        var parent = $(this).parent();
                        if(parent.hasClass('active')) {
                            parent.removeClass('active');
                        }
                    }
                })
            }
        }
    });
})();