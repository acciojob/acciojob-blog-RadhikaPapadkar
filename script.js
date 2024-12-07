// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("article");

    // Add a click event listener to each article
    articles.forEach(article => {
        article.addEventListener("click", () => {
            const link = article.querySelector("h2 a").href;
            window.open(link, "_blank"); // Open the link in a new tab
        });
    });

    // Optional: Add a welcome alert
    setTimeout(() => {
        alert("Welcome to Accio Jobs! Explore our latest blogs.");
    }, 1000);
});

