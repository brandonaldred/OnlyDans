
const userId = /(?<=\?=).*/g.exec(window.location.href)[0];
alert(userId);

let user;
for(let i = 0; i < users.length; i++) {
    if(users[i].id == userId) {
        user = users[i];
    }
}

buildProfile(user);

for(let i = 0; i < posts.length; i++) {
    if(userId == posts[i].id) {
        buildPost(posts[i],user);
    }
}