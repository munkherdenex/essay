// search.js

// Function to perform search as you type
document.getElementById('searchInput').addEventListener('input', function() {
    var searchText = this.value.toLowerCase(); // Get the search query
    var articles = document.querySelectorAll('#essays article'); // Get all articles
  
    // Loop through each article
    articles.forEach(function(article) {
      var articleText = article.textContent.toLowerCase(); // Get the text content of the article
  
      // If the article contains the search text, display it; otherwise, hide it
      if (articleText.includes(searchText)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
  