let page = 1;
let bag = false;
let container = document.getElementById("gallery");
//fetch the datas from the given APIs

async function getData() {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page${page}_limit=10`)

        let data = await res.json()
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

getData(`https://jsonplaceholder.typicode.com/photos?_page${page}_limit=10`)

// to display data on browser
function displayData(data) {
    data.forEach((ele) => {
        let card = document.createElement("div");
        let image = document.createElement("img")
        image.src = ele.url;
        let title = document.createElement("h4")
        title.textContent = ele.title

        card.append(image, title)
        container.append(card)
    });
    bag = true;

}


// infinite scrolling

window.addEventListener("scroll", function () {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrolltop = document.documentElement.scrollTop;

    console.log(clientHeight, scrollHeight, scrolltop);

    if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrolltop)) {
        page++

        getData(`https://jsonplaceholder.typicode.com/photos?_page${page}_limit=10`)
    };
    bag = false



})

