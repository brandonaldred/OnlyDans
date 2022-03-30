function buildPost(post, user) {

    //Simplify Post Data
    const userId = post.id;
    const likesCount = post.likse;
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
    userHandle.textContent = user.handle;
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
    likes.innerText = likesCount;

    const comments = document.createElement('P');
    comments.setAttribute('class', 'counts');
    const commentsIcon = document.createElement('IMG');
    commentsIcon.setAttribute('src', 'img/chat-dark.svg');
    comments.appendChild(commentsIcon);
    comments.textContent = Math.floor(Math.random() * 1000);

    const tips = document.createElement('P');
    tips.setAttribute('class', 'counts');
    const tipsIcon = document.createElement('IMG');
    tipsIcon.setAttribute('src', 'img/tip.svg');
    tips.appendChild(tipsIcon);
    tips.textContent = 'Send tip';

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

    document.querySelector('.feed-container').appendChild(feedItem);
}