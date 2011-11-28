var nicem = (function () {
    var nicem = {};
    pageLoad = {};
	
	nicem.init = function () {
        setupPageLoadEvent();
        nicem.subscribeToPageLoad("pageLoad", ajaxPageLoad);
    };

    nicem.subscribeToPageLoad = function (name, func) {
        if (typeof func === "function") {
            pageLoad[name] = func;
        }
    };

    function setupPageLoadEvent () {
        $('div[data-role="page"]').live('pagebeforecreate', function() {
            for (var key in pageLoad) {
                if (pageLoad.hasOwnProperty(key)) {
                    pageLoad[key]($(this).attr("id"));
                }
            }
        });
    }
	
    function ajaxPageLoad (id) {
		// This function setup to fire on each ajax page load.
		console.log(id);
    }
	
    return nicem;
})();

$(document).ready(function () {
    nicem.init();
});

$(document).bind("mobileinit", function(){
  $.extend($.mobile, {
      allowCrossDomainPages: true
  });
});

