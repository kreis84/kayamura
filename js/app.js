$(document).ready(
function(){
	APP.init();
});

var APP = (function()
{
	let elementToLoadTo = $('main');
	function getSubpages(url)
	{
		elementToLoadTo.slideUp(400, function()
		{
			$.ajax({url: url,
				dataType: 'html'})
				.done(function (result)
				{
					elementToLoadTo.html(result);
					elementToLoadTo.slideDown();
				})
				.fail(function(error)
				{
					elementToLoadTo.text(error.statusText);
				});
		});
	}

	return{
		init: function()
		{
			$('nav li a').each(function(index){
				if(index < 2) $(this).on('click', function(){ getSubpages($(this).attr('data-url'));});
			});
			getSubpages('partials/home.html');
		}
	}

})();