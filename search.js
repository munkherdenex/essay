
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

    // Daraagiin & Butsah button
  document.addEventListener("DOMContentLoaded", function() {
    const essaysContainer = document.getElementById("essays");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton");
    const articles = Array.from(essaysContainer.querySelectorAll("article"));
    const essaysPerPage = 5;
    let currentPage = 0;
  
    function showEssays() {
      const startIndex = currentPage * essaysPerPage;
      const endIndex = startIndex + essaysPerPage;
      const currentEssays = articles.slice(startIndex, endIndex);
  
      essaysContainer.innerHTML = "";
      currentEssays.forEach(article => {
        essaysContainer.appendChild(article);
      });
  
      nextButton.disabled = endIndex >= articles.length;
      backButton.disabled = currentPage === 0;
    }
  
    nextButton.addEventListener("click", function() {
      currentPage++;
      showEssays();
    });
  
    backButton.addEventListener("click", function() {
      currentPage--;
      showEssays();
    });
  
    showEssays();
  });
  
  