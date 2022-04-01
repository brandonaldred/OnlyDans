function buildPost(post, user) {

    //Simplify Post Data
    const userId = post.id;
    const likesCount = post.likes;
    const imgURL = `img/posts/${post.image}.jpg`;
    const postText = post.post;
    const hashTags = post.hashtags;

    //Get User info
    const profileImgURL = `img/profiles/${userId}-profile.jpg`;


    //Create the post container
    const feedItem = document.createElement('DIV');
    feedItem.setAttribute('data-profile', userId);

    //creating and populating header with profile image, name and post date
    const feedItemHeader = document.createElement('DIV');
    feedItemHeader.setAttribute('class', 'feed-item-header');

    const profileImage = document.createElement('IMG');
    profileImage.setAttribute('src', profileImgURL);
    profileImage.setAttribute('class', 'profile-image');

    const feedItemName = document.createElement('DIV');
    feedItemName.setAttribute('class', 'feed-item-name');
    const h3 = document.createElement('H3');
    h3.textContent = user.name;
    const verified = document.createElement('IMG');
    verified.setAttribute('src', 'img/verified.svg');
    h3.appendChild(verified);
    feedItemName.appendChild(h3);
    const userHandle = document.createElement('P');
    userHandle.textContent = `@${user.handle}`;
    feedItemName.appendChild(userHandle);

    const postDate = document.createElement('P');
    postDate.setAttribute('class', 'post-date');
    postDate.textContent = 'Today';
    const moreButton = document.createElement('IMG');
    moreButton.setAttribute('src', 'img/more-dark.svg');
    postDate.appendChild(moreButton);

    feedItemHeader.appendChild(profileImage);
    feedItemHeader.appendChild(feedItemName);
    feedItemHeader.appendChild(postDate);

    //Create Post textContent
    const feedPost = document.createElement('DIV');
    feedPost.setAttribute('class', 'feed-item-post');
    if(postText) {
        const postTextP = document.createElement('P');
        postTextP.textContent = postText;
        feedPost.appendChild(postTextP);
    }
    if(hashTags) {
        const postHashTags = document.createElement('P');
        postHashTags.textContent = hashTags;
        postHashTags.setAttribute('class','hashtags');
        feedPost.appendChild(postHashTags);
    }
    if(imgURL) {
        const postImg = document.createElement('IMG');
        postImg.setAttribute('src', imgURL);
        feedPost.appendChild(postImg);
    }

    //Fill out bottom interaction pieces
    const postInteractions = document.createElement('DIV');
    postInteractions.setAttribute('class', 'post-interactions');

    const postInteractionsLeft = document.createElement('DIV');
    postInteractionsLeft.setAttribute('class','post-interactions-left');

    const likes = document.createElement('P');
    likes.setAttribute('class', 'counts');
    const likesIcon = document.createElement('IMG');
    likesIcon.setAttribute('src', 'img/heart-dark.svg');
    likes.appendChild(likesIcon);
    const likesSpan = document.createElement('SPAN');
    likesSpan.innerText = likesCount;
    likes.appendChild(likesSpan);

    const comments = document.createElement('P');
    comments.setAttribute('class', 'counts');
    const commentsIcon = document.createElement('IMG');
    commentsIcon.setAttribute('src', 'img/chat-dark.svg');
    comments.appendChild(commentsIcon);
    const commentsSpan = document.createElement('SPAN');
    commentsSpan.textContent = Math.floor(Math.random() * 1000);
    comments.appendChild(commentsSpan);

    const tips = document.createElement('P');
    tips.setAttribute('class', 'counts');
    const tipsIcon = document.createElement('IMG');
    tipsIcon.setAttribute('src', 'img/tip.svg');
    tips.appendChild(tipsIcon);
    const tipsSpan = document.createElement('SPAN');
    tipsSpan.textContent = 'Send tip';
    tips.appendChild(tipsSpan);

    postInteractionsLeft.appendChild(likes);
    postInteractionsLeft.appendChild(comments);
    postInteractionsLeft.appendChild(tips);

    const postInteractionsRight = document.createElement('DIV');
    postInteractionsRight.setAttribute('class','post-interactions-right');
    const bookmarkIcon = document.createElement('IMG');
    bookmarkIcon.setAttribute('src', 'img/bookmarks.svg');
    postInteractionsRight.appendChild(bookmarkIcon);

    postInteractions.appendChild(postInteractionsLeft);
    postInteractions.appendChild(postInteractionsRight);

    feedItem.appendChild(feedItemHeader);
    feedItem.appendChild(feedPost);
    feedItem.appendChild(postInteractions);
    feedItem.setAttribute('class', 'feed-item');

    userHandle.addEventListener('click', (e) => {
        window.location.href = `/user.html?=${userId}`;
    });

    h3.addEventListener('click', (e) => {
        window.location.href = `/user.html?=${userId}`;
    });

    profileImage.addEventListener('click', (e) => {
        window.location.href = `/user.html?=${userId}`;
    });

    document.querySelector('.feed-container').appendChild(feedItem);
}


function buildListItem(user) {

    let userProfileImg = `img/profiles/${user.id}-profile.jpg`;
    let userCoverImg = `img/cover/${user.id}-cover.jpg`;
    let userName = user.name;
    let userHandle = user.handle;

    const listItem = document.createElement('DIV');
    listItem.setAttribute('class', 'list-item');
    listItem.setAttribute('data-id', user.id);

    const listItemProfileContainer = document.createElement('DIV');
    listItemProfileContainer.setAttribute('class','list-item-profile-image');
    const listItemProfileImg = document.createElement('IMG');
    listItemProfileImg.setAttribute('src', userProfileImg);
    listItemProfileContainer.appendChild(listItemProfileImg);

    const listItemName = document.createElement('DIV');
    listItemName.setAttribute('class', 'feed-item-name');
    const h3 = document.createElement('H3');
    h3.textContent = userName;
    const verified = document.createElement('IMG');
    verified.setAttribute('src', 'img/verified.svg');
    h3.appendChild(verified);
    listItemName.appendChild(h3);
    const userHandleP = document.createElement('P');
    userHandleP.textContent = `@${userHandle}`;
    listItemName.appendChild(userHandleP);

    const coverPhoto = document.createElement('IMG');
    coverPhoto.setAttribute('src', userCoverImg);
    coverPhoto.setAttribute('class', 'cover-background');

    listItem.appendChild(listItemProfileContainer);
    listItem.appendChild(listItemName);
    listItem.appendChild(coverPhoto);

    document.querySelector('.feed-container').appendChild(listItem);
    listItem.addEventListener('click', (e) => {
        let id = listItem.dataset.id;
        window.location.href =`/user.html?${id}`;
    });
}

function buildProfile(user) {
    const userCover = document.createElement('DIV');
    userCover.setAttribute('class', 'user-cover');
    const coverPhoto = document.createElement('IMG');
    coverPhoto.setAttribute('src',`img/cover/${user.id}-cover.jpg`);
    coverPhoto.setAttribute('class','user-cover-photo');
    userCover.appendChild(coverPhoto);

    const userProfile = document.createElement('DIV');
    userProfile.setAttribute('class', 'user-profile-photo');
    const profilePhoto = document.createElement('IMG');
    profilePhoto.setAttribute('src',`img/profiles/${user.id}-profile.jpg`);
    userProfile.appendChild(profilePhoto);

    const profileInfo = document.createElement('DIV');
    profileInfo.setAttribute('class','user-profile-info');
    const h3 = document.createElement('H3');
    h3.innerText = user.name;
    const pHandle = document.createElement('P');
    pHandle.innerText = `@${user.handle}`;
    const pInfo = document.createElement('P');
    pInfo.innerText = user.about;
    const subscribe = document.createElement('A');
    subscribe.setAttribute('href',`https://www.instagram.com/${user.handle}`);
    subscribe.setAttribute('target','_blank');
    subscribe.innerText = 'Subscribe Only $4.99/mo.';
    profileInfo.appendChild(h3);
    profileInfo.appendChild(pHandle);
    profileInfo.appendChild(pInfo);
    profileInfo.appendChild(subscribe);

    const feedContainer = document.querySelector('.feed-container');
    feedContainer.appendChild(userCover);
    feedContainer.appendChild(userProfile);
    feedContainer.appendChild(profileInfo);
}