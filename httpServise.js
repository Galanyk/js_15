class HttpServise {
    static API = " https://api.github.com/";
    static CLASSES = {
        AVATAR_URL: 'avatar_url',
        PUBLIK_REPOST: 'public_repos',
        FOLLOWER: 'followers',
        FOLLOWING: 'following',
        INPUT_EL: 'input'
    };

    _buttonEl = document.querySelector('#button');
    _inputEl = document.querySelector('#input');
    _logoEl = HttpServise.CLASSES.INPUT_EL.value;

    _avatar = null;
    _publicRepos = null;
    _followers = null;
    _following = null;

    static ENVIRONMENT = {
        // POSTS: {
        //     getPosts: "/posts",
        //     updatePosts: "/posts",
        // },
        USERS: {
            getUser: "users/",
        }
    }

    _mainContainer = null;
    _logoEl = '';

    constructor(className) {
        this._mainContainer = HttpServise.getByClassName(className);
        this.init();
    };

    init() {
        this.setListener(this._buttonEl, 'click', this.onButtonClick)
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    getData(data, key) {
        return data.data[key]
    }

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    }

    onButtonClick = () => {
        axios.get(`${HttpServise.API}${HttpServise.ENVIRONMENT.USERS.getUser}${this._inputEl.value}`).then(response => {
                this._avatar = this.getData(response, HttpServise.CLASSES.AVATAR_URL);
                this._publicRepos = this.getData(response, HttpServise.CLASSES.PUBLIK_REPOST);
                this._followers = this.getData(response, HttpServise.CLASSES.FOLLOWER);
                this._following = this.getData(response, HttpServise.CLASSES.FOLLOWING);
            })
            .then(() =>
                this.createElementAvatar(this._avatar, this._mainContainer, 'img', HttpServise.CLASSES.AVATAR_URL))
            .then(() =>
                this.createElement(`Public repost: ${this._publicRepos}`, this._mainContainer, 'div', HttpServise.CLASSES.PUBLIK_REPOST))
            .then(() =>
                this.createElement(`Follower: ${this._followers}`, this._mainContainer, 'div', HttpServise.CLASSES.FOLLOWER))
            .then(() =>
                this.createElement(`Following: ${this._following}`, this._mainContainer, 'div', HttpServise.CLASSES.FOLLOWING))
            .catch((error) => console.log('ERROR HAPPEND', error))
            .finally(
                console.log('FINAL')
            )
    }

    createElementAvatar(data, containerEl, tag, classList) {
        const avatarEl = document.createElement(tag);
        avatarEl.setAttribute('src', data);
        avatarEl.classList.add(classList)
        containerEl.append(avatarEl);
    };

    createElement(data, containerEl, tag, classList) {
        const element = document.createElement(tag);
        element.textContent = data;
        element.classList.add(classList)
        containerEl.append(element);
    };
}