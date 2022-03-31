function extractId(iCalContent) {
    var rx = /(?<=\?).*/g;
    var arr = rx.exec(iCalContent);
    return arr[0]; 
  }

const userId = extractId(window.location.href);
console.log(userId);

let user;
for(let i = 0; i < users.length; i++) {
    if(users[i].id == userId) {
        user = users[i];
    }
}


for(let i = 0; i < posts.length; i++) {
    if(userId == posts[i].id) {
        buildPost(posts[i],user);
    }
}