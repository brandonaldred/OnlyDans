function buildFeed(id) {
    for(let i = 0; i < posts.length; i++) {
        let post = posts[i];
        buildPost(post, users[post.id - 1])
    }
}

buildFeed();