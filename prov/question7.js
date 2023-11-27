// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts");
    // Hämta alla inlägg från URL:en
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            // Filtrera inlägg från användaren med userId: 1
            const user1Posts = posts.filter(post => post.userId === 1);

            // Visa inläggen på sidan
            user1Posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

document.addEventListener("DOMContentLoaded", function() {
const postsWithCommentsContainer = document.getElementById("postsWithComments");

// Använder fetch för att hämta inlägg från den första URL:en. 
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        // Hämta kommentarer från URL:en
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(comments => {
                // Loopa genom varje post
                posts.forEach(post => {
                    // Filtrera kommentarer som hör till den aktuella posten
                    const postComments = comments.filter(comment => comment.postId === post.id);

                    // Skapa HTML-element för posten
                    const postElement = document.createElement("div");
                    postElement.className = "post";
                    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;

                    // Skapa HTML-element för varje kommentar
                    const commentsContainer = document.createElement("div");
                    commentsContainer.className = "comments-container";
                    postComments.forEach(comment => {
                        const commentElement = document.createElement("div");
                        commentElement.className = "comment";
                        commentElement.innerHTML = `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
                        commentsContainer.appendChild(commentElement);
                    });

                    // Lägg till kommentarerna under posten
                    postElement.appendChild(commentsContainer);

                    // Lägg till posten med kommentarerna på sidan
                    postsWithCommentsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error("Error fetching comments:", error));
    })
    .catch(error => console.error("Error fetching posts:", error));
});

























