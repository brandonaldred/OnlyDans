function buildList(users) {
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        buildListItem(user);
    }
}

buildList(users);