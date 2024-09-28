
const worldBtn = document.getElementById('world')
const politicsBtn = document.getElementById('politics')
const businessBtn = document.getElementById('business')
const technologyBtn = document.getElementById('technology')
const sportsBtn = document.getElementById('sports')


const worldUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'
const politicsUrl = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'
const businessUrl = 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'
const technologyUrl = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'
const sportsUrl = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'
const opinionsUrl = 'https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I'

worldBtn.addEventListener("click", function() {
    window.location.hash = "#world";
    fetchWorldNews()
})

politicsBtn.addEventListener("click", function() {
    window.location.hash = "#politics";
    fetchPoliticsNews()
})

businessBtn.addEventListener("click", function() {
    window.location.hash = "#business";
    fetchBusinessNews()
})

technologyBtn.addEventListener("click", function() {
    window.location.hash = "#technology";
    fetchTechnologyNews()
})

sportsBtn.addEventListener("click", function() {
    window.location.hash = "#sports";
    fetchSportsNews()
})

const navLinks = document.querySelectorAll('nav ul li a');

function setActiveLink() {
    const currentHash = window.location.hash || "#world";

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`nav ul li a[href="${currentHash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function handlePageLoad() {
    setActiveLink(); 

    const currentHash = window.location.hash || "#world";

    if (currentHash === "#politics") {
        fetchPoliticsNews();
    } else if (currentHash === "#business") {
        fetchBusinessNews();
    } else if (currentHash === "#technology") {
        fetchTechnologyNews();
    } else if (currentHash === "#sports") {
        fetchSportsNews();
    } else {
        // Default section (World news)
        fetchWorldNews();
        fetchOpinions()
    }
}



document.getElementById('search-container').addEventListener('click', function(event) {
    event.preventDefault(); 

    const query = document.getElementById('search-query').value.trim();

    // Ensure the query is not empty
    if (query) {
        performSearch(query);
    }
});


async function performSearch(query) {
    const apiKey = 'y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I';
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=20230901&sort=newest&api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displaySearchResults(data.response.docs); 
        } else {
            console.error("Failed to fetch news:", data);
        }
    } catch (error) {
        console.error("Error fetching search results:", error.message);
    }
}



async function fetchWorldNews() {
    try {
        const response = await fetch(worldUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayTopHeadline(data.results[0]);
            displayArticles(data.results);
            displayReference(data.copyright);
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);
    }
}

async function fetchPoliticsNews() {
    try {
        const response = await fetch(politicsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayTopHeadline(data.results[0]);
            displayArticles(data.results);
            displayReference(data.copyright);
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);  
    }
}

async function fetchBusinessNews() {
    try {
        const response = await fetch(businessUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayTopHeadline(data.results[0]);
            displayArticles(data.results);
            displayReference(data.copyright);
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);  
    }
}

async function fetchTechnologyNews() {
    try {
        const response = await fetch(technologyUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayTopHeadline(data.results[0]);
            displayArticles(data.results);
            displayReference(data.copyright);
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);  
    }
}

async function fetchSportsNews() {
    try {
        const response = await fetch(sportsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayTopHeadline(data.results[0]);
            displayArticles(data.results);
            displayReference(data.copyright);
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);  
    }
}
async function fetchOpinions() {
    try {
        const response = await fetch(opinionsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === "OK") {
            displayOpinions(data.results)
        } else {
            console.error("Failed to fetch news:", data);
            document.getElementById('articles-section').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
        }
    } catch (error) {
        console.error("Error fetching local news:", error.message);  
    }
}




function displayTopHeadline(article) {
    const headlineTitle = document.getElementById('headline-title');
    const headlineDescription = document.getElementById('headline-description');
    const articleAuthor = document.getElementById('headline-author')
    const headlineImage = document.getElementById('headline-image');
    const headlineLink = document.getElementById('headline-link')

    headlineTitle.textContent = article.title;
    headlineDescription.textContent = article.abstract;
    headlineLink.href = article.url;
    articleAuthor.textContent = article.byline

    if (article.multimedia && article.multimedia.length > 0) {
        const imageUrl = article.multimedia ? article.multimedia.find(media => media.format === 'Super Jumbo')?.url : '';

        headlineImage.src = imageUrl;
        headlineImage.style.display = 'block';
    } else {
        headlineImage.style.display = 'none';  
    }
}

function displayArticles(articles) {
    const articlesSection = document.getElementById('articles-section');
    articlesSection.innerHTML = '';  // Clear existing content

    articles.slice(1).forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <a href="${article.url}" target="_blank">
                ${article.multimedia && article.multimedia.length > 0 ? 
                `<img src="${article.multimedia.find(media => media.format === 'threeByTwoSmallAt2X').url}" alt="${article.title}" style="width: 300px;">` : 
                ''}
                <h5>${article.byline}</h5>
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                <p>${article.abstract}</p><br>
                <button type="button"><a href="${article.url}" target="_blank">Read more</a></button>
            </a>
        `;
        articlesSection.appendChild(articleElement);
    });
}

function displayOpinions(articles) {
    const opinionSection = document.getElementById('opinionSection')
    opinionSection.innerHTML = '<h2>Opinion</h2><br>';

    articles.forEach(article => {
        const opinionElement = document.createElement('article')
        opinionElement.innerHTML = `
            <a href="${article.url}" target="_blank">
                ${article.multimedia && article.multimedia.length > 0 ? 
                `<img src="${article.multimedia.find(media => media.format === 'Large Thumbnail').url}" alt="${article.title}" style="width: 300px;">` : 
                ''}
                <p>${article.byline}</p>
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            </a>
        `;
        opinionSection.appendChild(opinionElement);
    })
}

function displayReference(data) {
    const copyrightText = document.getElementById('copyright')

    copyrightText.textContent = data
}

+

function displaySearchResults(articles) {
    const articlesSection = document.getElementById('articles-section');
    articlesSection.innerHTML = '';  // Clear existing content before adding new results

    if (articles.length === 0) {
        articlesSection.innerHTML = '<p>No articles found for your search.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        const multimediaUrl = article.multimedia && article.multimedia.length > 0 ? 
            `https://www.nytimes.com/${article.multimedia[0].url}` : '';

        articleElement.innerHTML = `
            <a href="${article.web_url}" target="_blank">
                ${multimediaUrl ? `<img src="${multimediaUrl}" alt="${article.headline.main}" style="width: 400px;">` : ''}
                <h2>${article.headline.main}</h2>
                <p>${article.abstract}</p><br>
                <button type="button"><a href="${article.web_url}" target="_blank">Read more</a></button>
            </a>
        `;

        articlesSection.appendChild(articleElement);
    });
}

window.addEventListener('DOMContentLoaded', handlePageLoad);
window.addEventListener('hashchange', handlePageLoad);

