import {viewList} from "./render-list.js";

export function activeFilter() {
    window.addEventListener('hashchange', (e)=>{
        viewList(location.hash)
    });
    viewList(location.hash);
    changeActiveLink();
    checkActiveLink();
}

function checkActiveLink() {
    const tag = location.hash;

    if (tag) {
        document.querySelector('.is-active[data-filter="link"]').classList.remove('is-active');
        document.querySelector(`[data-filter="link"][href="${tag}"]`).classList.add('is-active');
    }
}

function changeActiveLink() {
    const listLink = document.querySelector("[data-filter='parent']");

    listLink.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            document.querySelector('.is-active[data-filter="link"]').classList.remove('is-active');
            e.target.classList.add('is-active');
          }
    })
}