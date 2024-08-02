document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: 'Post 1 Title',
            summary: 'This is a summary of the first post.',
            url: 'posts/post1.html'
        },
        {
            title: 'Post 2 Title',
            summary: 'This is a summary of the second post.',
            url: 'posts/post2.html'
        }
        // Add more posts here
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-summary');

        const postTitle = document.createElement('h2');
        const postLink = document.createElement('a');
        postLink.href = post.url;
        postLink.textContent = post.title;
        postTitle.appendChild(postLink);

        const postSummary = document.createElement('p');
        postSummary.textContent = post.summary;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postSummary);

        postsContainer.appendChild(postDiv);
    });
});
