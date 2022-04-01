function buildFeed(id) {
    for(let i = posts.length; i >= 0; i--) {
        let post = posts[i];
        buildPost(post, users[post.id - 1])
    }
}

buildFeed();