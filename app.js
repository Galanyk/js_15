const buttonEl = document.querySelector('#button');
const inputEl = document.querySelector('#input');
//const logoEl = inputEl.value;
const logoEl = 'majombo';
const listEl = document.querySelector('#list')

buttonEl.addEventListener('click', onButtonClick);

const ENVIRONMENT = {
    POSTS: {
        getPosts: "/posts",
        updatePosts: "/posts",
    },
    // USERS: {
    //     getUsers: "/users",
    //     updateUsers: "/users",
    // }
}

class HttpServise {
    static API = " https://api.github.com/users/";
    options = {
        url: '',
        data: null,
        login: '',
    }

    _avatar = null;
    // get(url) {
    //         return axios.get(`${HttpServise.API}${url}${logoEl}`);
    //     }
    // login = inputEl.value.trim();

    // upDate(url, id, data) {
    //     this.options.url = `${HttpServise.API}${url}${id}`;
    //     this.options.data = data;
    //     return axios.put(this.options);
    // }

}

function onButtonClick() {
    // const logoEl = inputEl.value;
    fetch(`${HttpServise.API}${logoEl}`).then(r => {
        r.json().then((data) => this._avatar = getAvatar(data))
            .then(showAvatar(this._avatar))
    });
    showPostsAvatar(this._avatar);
    // axios.get(HttpServise.API).then(r => {
    //         //console.log(r);
    //     })
    // httpServise.get(ENVIRONMENTs.getPosts).then((r) => {
    //     console.log(r.login)
    // })
}

function getDataGit() {
    return axios.get(`${HttpServise.API}${logoEl}`);

}

getDataGit()
    .then((r) => r.json())
    .then((r) => Promise.resolve(r))
    .then(r => { showAvatar(data) })
    // .then((r) => console.log(showAvatar(r))

//     
//     // .then((r) => getAuthor(r[0].usersId))
//     // .then((r) => console.log(r.data))




function getAvatar(data) {
    return data['avatar_url']
}

function showAvatar(data) {
    // alert(avatar);
    console.log(data);
    const avatarEl = document.createElement('img');
    avatarEl.setAttribute('src', data);
    // append it somewhere
    listEl.innerHTML = `<img src=${data}'>`
}


// const httpServise = new HttpServise;

function showPostsAvatar() {

    // console.log(r.data)
}


// function onEdit() {
//     httpServise
//         .upDate(ENVIRONMENT.updatePosts, POST.id, POST);
// }

// console.log(axios.get(`${HttpServise.API}`))

// fetch(HttpServise.API)
//     .then((r) => r.json())
//     .then((posts) => Promise.resolve(posts))
//     // .then((r) => getAuthor(r[0].usersId))
//     .then((r) => console.log(_avatar))
//     // .then((r) => console.log(r.data))


// function getAuthor(logoEl) {
//     return axios.get(`${HttpServise.API} + ${logoEl}`);
// }