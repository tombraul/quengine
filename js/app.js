// uses quotes-on-design api to get random quotes
function getQuote () {
	var title = document.getElementById('title');
	var content = document.getElementById('content');
	var link = document.getElementById('link');
  var quoteButton = document.getElementById('quoteButton');
  quoteButton.classList += " is-loading";

	$.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1/',
      success: function(data) {
        var quote = data[0];
        content.innerHTML = quote.content;
        link.innerHTML = '<a href="' + quote.link + '">by ' + quote.title; + '</a>';

        var buttonClasses = quoteButton.classList.toString();
        quoteButton.classList = buttonClasses.replace('is-loading', '');
      },
      cache: false
	});
}

jQuery(document).ready(function($) {
  getQuote();
});