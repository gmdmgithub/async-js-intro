/*

FIRST approach - callback function

*/

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

function createPost(post, callback) {//callback function (name can be upd to us) wil be the function that will be call in some place (waiting)
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// originally this function - but it prints only 2 elements
// getPosts();

createPost({
    title: 'Post 3',
    body: 'New post 3 '
}, getPosts);//now we use callback function