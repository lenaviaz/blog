document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            date: 'August 2, 2024',
            title: 'Trying out LineageOS',
            summary: 'I decided to install LineageOS on a Google Pixel.',
            url: 'posts/post1.html',
            tags: ['Android', 'OpenSource']
        },
        {
            date: 'July 1, 2024',
            title: 'Google Pixel 4 vs Google Pixel 4a',
            summary: 'A breakdown and review of two covid era Pixels',
            url: 'posts/post2.html',
            tags: ['Android', 'OpenSource']
        },
        {
            date: 'March 20, 2024',
            title: 'I bought a 2020 Chevy Bolt! :fire-emoji:',
            summary: 'I decided to dive into the world of EVs, and ended up with one.',
            url: 'posts/post3.html',
            tags: ['EV', 'Cars']
        },
        {
            date: 'March 1, 2024',
            title: 'Why Cave Story is my favorite game',
            summary: 'Cave story is an indie game from 2005 and I think its the best.',
            url: 'posts/post4.html',
            tags: ['Gaming']
        }
        // Add more posts here
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-summary');
        const postDate = document.createElement('h1');

        const postTitle = document.createElement('h2');
        const postLink = document.createElement('a');
        postLink.href = post.url;
        postLink.textContent = post.title;
        postDate.textContent = post.date;
        postTitle.appendChild(postLink);

        const postSummary = document.createElement('p');
        postSummary.textContent = post.summary;

        const postTags = document.createElement('p');
        postTags.textContent = 'Tags: ' + post.tags.join(', ');

        postDiv.appendChild(postDate);
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postSummary);
        postDiv.appendChild(postTags);

        postsContainer.appendChild(postDiv);
    });

    // Create the tags page
    const tagsPage = document.createElement('a');
    tagsPage.href = 'tags.html';
    tagsPage.textContent = 'Tags Page';
    document.body.appendChild(tagsPage);
});
