let api = "https://wepro-new-website-2022.herokuapp.com"
let courses = []
let teachers = []
let groups = []

const SHOW_TEACHERS = () => {
    let place = document.querySelector(".teacher-list")

    place.innerHTML = ""

    for(let item of teachers) {
        place.innerHTML += `
            <div class="item">
                <h3>${ item.name }</h3>
            </div>
        `
    }
}

const SHOW_COURSES = () => {
    let place = document.querySelector(".courses-list")

    place.innerHTML = ""

    for(let item of courses) {
        place.innerHTML += `
            <a href="#">
                <div class="item">
                    <img class="preview" src="${ item.preview }">
                    <div class="description">
                        <div class="top">
                            <span class="title">${ item.title }</span>
                            <span class="text">${ item.teacherId.name }</span>
                        </div>
                        <div class="bottom">
                            <span class="price">${ Number(item.price).toLocaleString() } UZS</span>
                        </div>
                    </div>
                </div>
            </a>
        `
    }
}

axios.get(api + "/courses")
    .then(res => {
        courses = res.data
        console.log("courses ok");
        SHOW_COURSES()
    })
    .catch(res => {
        console.log(res);
    })

axios.get(api + "/teachers")
    .then(res => {
        teachers = res.data
        console.log("teachers ok");
        SHOW_TEACHERS()
    })
    .catch(res => {
        console.log(res);
    })

axios.get(api + "/groups")
    .then(res => {
        groups = res.data
        console.log("groups ok");
        SHOW_COURSES()
    })
    .catch(res => {
        console.log(res);
    })
