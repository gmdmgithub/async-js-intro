const posts = [{
        title: 'Post 1',
        body: 'Body 1'
    },
    {
        title: 'Post 2',
        body: 'Body 2'
    }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({
    title: 'Post 3',
    body: 'New post 3 '
}, getPosts);