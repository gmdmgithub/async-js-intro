const posts = [
  {
    title: "Post 1",
    body: "Body 1"
  },
  {
    title: "Post 2",
    body: "Body 2"
  },
  {
    title: "Post 3",
    body: "Body 3"
  }
];

function getPosts() {
  setTimeout(() => {
    //let's mimic call backend
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  console.log("create post");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //const error = true;
      const error = false;

      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Error: Huston we got the problem");
      }
    }, 2000);
  });
}

createPost({
  title: "Hello from promise",
  body: "Promise gives you body"
})
  .then(getPosts)
  .catch(error => {
    getPosts(); //we kill the rules ;-)
    console.log(error);
  });
