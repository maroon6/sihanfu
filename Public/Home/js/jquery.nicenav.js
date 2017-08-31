﻿/* 代码整理：大头网 www.datouwang.com */
; (function ($) {
    $.extend({
        'nicenav': function (con) {
            con = typeof con === 'number' ? con : 400;
            var $lis = $('#box-lanrenzhijia>li'), $h = $('#buoy');
            $lis.hover(function () {
                $h.stop().animate({
                    'left': $(this).offsetParent().context.offsetLeft
                }, con);
            }, function () {
                $h.stop().animate({
                    'left': '-157px'
                }, con);
            });
        }
    });
}(jQuery));