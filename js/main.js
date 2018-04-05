$(function() {

    var AppPlugins = {

        /* Scrollbar */
        scrollbar: function(){
            $(window).on("load",function(){
                $(".leftSideSection").mCustomScrollbar();
            });
        },


        /* Accordion Effect */
        accordionEffect: function(toggle, element, className) {

            var filterToggle = $(toggle),
                filterSection = $(element),
                className = className;


            filterToggle.on("click", function () {
                filterSection.toggleClass(className);
            });
        }
    };

    /* ------ Plugins Init ------ */
    AppPlugins.scrollbar();
    AppPlugins.accordionEffect(".menuToggle", ".leftSideSection", "showLeftSideContent");
    AppPlugins.accordionEffect(".filterToggle", ".filterSection", "hideFilterSection");
});