function getQuote () {
	var title = document.getElementById('title');
	var content = document.getElementById('content');
	var link = document.getElementById('link');

	$.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var quote = data[0];
        console.log(quote);
        title.innerHTML = quote.title;
        content.innerHTML = quote.content;
        link.innerHTML = '<a href="' + quote.link + '">Source</a>';
      },
      cache: false
	});
}

getQuote();