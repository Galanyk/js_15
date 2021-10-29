const buttonEl = document.querySelector('#button');
const inputEl = document.querySelector('#input');
const logoEl = inputEl.value;
const containerEl = document.querySelector('#container')

buttonEl.addEventListener('click', onButtonClick);

const ENVIRONMENT = {
    // POSTS: {
    //     getPosts: "/posts",
    //     updatePosts: "/posts",
    // },
    USERS: {
        getUser: "/users/",
    }
}

class HttpServise {
    static API = " https://api.github.com";
    _avatar = null;
    _publicRepos = null;
    _followers = null;
    _following = null;
}

function onButtonClick() {
    const logoEl = inputEl.value;
    axios.get(`${HttpServise.API}${ENVIRONMENT.USERS.getUser}${logoEl}`).then(response => {
            this._avatar = getData(response, 'avatar_url');
            this._publicRepos = getData(response, 'public_repos');
            this._followers = getData(response, 'followers');
            this._following = getData(response, 'following');
        })
        .then(() =>
            createElementAvatar(this._avatar, containerEl, 'img', 'avatar'))
        .then(() =>
            createElement(`Public repost: ${this._publicRepos}`, containerEl, 'div', 'publikRepost'))
        .then(() =>
            createElement(`Follower: ${this._followers}`, containerEl, 'div', 'follower'))
        .then(() =>
            createElement(`Following: ${this._following}`, containerEl, 'div', 'following'))
        .catch((error) => console.log('ERROR HAPPEND', error))
        .finally(
            console.log('FINAL')
        )
}

function getData(data, key) {
    return data.data[key]
}

function createElementAvatar(data, containerEl, tag, classList) {
    const avatarEl = document.createElement(tag);
    avatarEl.setAttribute('src', data);
    containerEl.addEventListener("click", onButtonClick);
    avatarEl.classList.add(classList)
    containerEl.append(avatarEl);
}

function createElement(data, containerEl, tag, classList) {
    const element = document.createElement(tag);
    element.textContent = data;
    containerEl.addEventListener("click", onButtonClick);
    element.classList.add(classList)
    containerEl.append(element);
}