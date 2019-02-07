/*
 *  jquery-switchstyle - v0.0.1
 *
 *  Made by Tim Groeneveld
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
    "use strict";

    var pluginName = "switchstyle";

    // The plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this._name = pluginName;
        this._oldstyle = '';

        this.init();
    }

    Plugin.prototype = {

        init: function () {
            var self = this;
            var what = $(this.element);
            what.click(function(e) {
                self.switchTo(what.data('style'));
            })
        },

        switchTo: function(styleName) {
            $('link[rel*=style][id]').each(
                function(i)
                {
                    this.disabled = true;
                    if ($(this).attr('id') == styleName) {
                        this.disabled = false;
                    }
                }
            );

        }

    }

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );