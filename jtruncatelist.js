(function ($) {
    $.fn.jTruncateList = function (options) {

        var defaults = {
            limitItens: 5,
            moreItens: "more",
            lessItens: "less",
            ellipsisItens: "",
            animateShow: null,
            animateHide: null
        };

        var options = $.extend(defaults, options);

        return this.each(function () {
            obj = $(this);
            var body = obj.html();
            var countLi = obj.children("li").length;

            if (countLi > options.limitItens) {
                var splitLocation = obj.children("li").slice(0, options.limitItens);
                if (splitLocation.length > 0) {


                   var listVisible = obj.children("li").slice(0, options.limitItens).attr("class", 'visibleLi');
                   var listInvisible = obj.children("li").slice(options.limitItens, countLi).attr("class", 'invisibleLi');

                   obj.html(listVisible).append('<span class="truncate_ellipsis">' + options.ellipsisItens + '</span>').append(listInvisible);
                   obj.append(
                    '<div class="clearboth">' +
                    '<a href="#" class="truncate_more_link">' + options.moreItens + '</a>' +
                    '</div>'
                    );

                   var moreLink = $('.truncate_more_link', obj);
                   var moreContent = $('.invisibleLi', obj);
                   var ellipsis = $('.truncate_ellipsis', obj);

                   moreLink.click(function () {
                    if (moreLink.text() == options.moreItens) {
                        moreContent.show(options.animateShow);                            
                        moreLink.text(options.lessItens);
                        ellipsis.css("display", "none");
                    } else {
                        moreContent.hide(options.animateHide);
                        moreLink.text(options.moreItens);
                        ellipsis.css("display", "inline");
                    }
                    return false;
                });
               }
           } 

       });
};
})(jQuery);