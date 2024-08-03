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
            date: 'March 20, 2024',
            title: 'I bought a 2020 Chevy Bolt! :fire-emoji:',
            summary: 'I decided to dive into the world of EVs, and ended up with one.',
            url: 'posts/post2.html',
            tags: ['EV', 'Cars']
        },
        {
            date: 'March 1, 2024',
            title: 'Why Cave Story is my favorite game',
            summary: 'Cave story is an indie game from 2005 and I think its the best.',
            url: 'posts/post2.html',
            tags: ['Gaming']
        }
        // Add more posts here
    ];

    const tags = {};

    posts.forEach(post => {
        post.tags.forEach(tag => {
            if (!tags[tag]) {
                tags[tag] = [];
            }
            tags[tag].push(post);
        });
    });

    const tagsContainer = document.getElementById('tags');

    for (const tag in tags) {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('tag-section');

        const tagHeader = document.createElement('h2');
        tagHeader.textContent = tag;
        tagDiv.appendChild(tagHeader);

        tags[tag].forEach(post => {
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

            tagDiv.appendChild(postDiv);
        });

        tagsContainer.appendChild(tagDiv);
    }
});
