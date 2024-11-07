export function viewList(tag = false) {
    const listCourse = document.querySelector("[data-project='parent']");
    clearList(listCourse);
    renderList(listCourse, tag);
    addAnimation(listCourse)
}

function clearList(el) {
    el.innerHTML = "";
    el.style.transition = "";
    el.style.opacity = "0";
    el.style.transform = "translate3d(0, 50px, 0)";
}

function addAnimation(el) {
    setTimeout(() => {
        el.style.transition = "opacity .2s linear, transform .2s linear";
        el.style.opacity = "1";
        el.style.transform = "translate3d(0, 0, 0)";
    }, 200)
    
}

function renderList(listCourse, tag) {
	import("../../../../public/projects.json")
		.then((data) => {
			const dataList = data.default;
			dataList.forEach((el) => {
                if (tag && tag != "#all") {
                    if (el.tags.includes(tag)) {
                        listCourse.append(renderItem(el));
                    }
                } else {
                    listCourse.append(renderItem(el));
                }
			})
		})
}

function renderItem(data) {
    const template = document
      .querySelector("[data-template='project-card']")
      .content.cloneNode(true);
      template.querySelector('.product-card').classList.add(data.classes[0]);
      template.querySelector('.product-card__shadow-link').href = data.href;
      template.querySelector('.product-card__title').textContent = data.title;
      template.querySelector('.product-card__img').src = data.src;
      template.querySelector('.product-card__img').width = data.width;
      template.querySelector('.product-card__img').height = data.height;
      template.querySelector('.product-card__img').alt = data.alt;
      template.querySelector('.product-card__label').textContent = data.label;
      template.querySelector('.product-card__date').textContent = data.date;
      template.querySelector('.product-card__hit').style.display = data.hit ? "block" : "none";
      return template;
}