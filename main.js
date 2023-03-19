const searchUrl = "https://content.guardianapis.com/search?q=weather&show-fields=thumbnail,trailText&api-key=ccb28ddf-abfc-4af7-bce6-0c4d6270bdb9";

document.addEventListener("DOMContentLoaded", function () {

    fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const newsList = document.getElementById("news-list");
            data.response.results.forEach((result) => {
                console.log(result);
                const newsItem = document.createElement("li");
                const newsImgContainer = document.createElement("div");
                const newsImg = document.createElement("img");
                const newsContent = document.createElement("div");
                const newsTitle = document.createElement("h2");
                const newsSummary = document.createElement("p");

                newsImg.src = result.fields.thumbnail;
                newsTitle.textContent = result.webTitle;
                newsSummary.textContent = result.fields.trailText;

                newsImgContainer.classList.add("news-image");
                newsImgContainer.appendChild(newsImg);

                newsTitle.classList.add("news-title");
                newsTitle.style.cursor = "pointer";
                newsTitle.addEventListener('click', function () {
                    window.location.href = result.webUrl;
                });

                newsContent.classList.add("news-content");
                newsContent.appendChild(newsTitle);
                newsContent.appendChild(newsImgContainer);
                newsContent.appendChild(newsSummary);

                newsItem.appendChild(newsContent);
                newsList.appendChild(newsItem);
            });
        })
        .catch((error) => console.error(error));
});




