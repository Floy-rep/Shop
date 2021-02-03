import './styles/main.scss';

const Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
let goods = document.getElementById('goods');
const axios = require('axios');
Routing.setRoutingData(Routes);

let filters = {};
let sorts = {};
let page = 1;

document.addEventListener('DOMContentLoaded', function (event) {
    axios.post(Routing.generate('getGoods'), {
        page
    })
        .then(function (response) {
            Insert(response.data)
        })
})

document.addEventListener('click', function (event) {
    let target = event.target;
    if (target.type === "button" && target.className === "buttonAdd" && isNaN(parseInt(target.id)) === false) {
        let count = document.getElementById('goodAmount_' + target.id)
        if (count.value > 0) {
            axios.post(Routing.generate('addToCard', {id: target.id}), {
                'id': target.id,
                'amount': count.value,
                page
            })
                .then(function (response) {
                    let block = document.getElementById('good_'+target.id)
                    block.style.backgroundColor = '#c2ff88';
                    target.value = 'Added';
                    setTimeout(() => {
                        target.value = "Add";
                        block.style.backgroundColor = 'white';
                    }, 2000);
                })
        } else {
            let error = document.getElementById('error_' + target.id)
            error.style.display = 'inherit'
            setTimeout(() => {
                error.style.display = 'none'
            }, 2000);
        }
    }
    if (target.id === 'changePage'){
        page = target.dataset.page;
        axios.post(Routing.generate('getGoods'), {
            filters, sorts, page
        })
            .then((response) => {
                Insert(response.data);
                target.style.color = '#5eb5e0';
                setTimeout(() => {
                    target.style.color = 'black';
                    buttonFilter.value = "Filter"
                }, 2000);
            })
    }
})

// footer TODO refactor
let nextPage = document.getElementById('nextPage')
nextPage.addEventListener('click', () => {
    page += 1
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page
    })
        .then((response) => {
            Insert(response.data);
            nextPage.style.color = '#5eb5e0';
            setTimeout(() => {
                nextPage.style.color = 'black';
                buttonFilter.value = "Filter"
            }, 2000);
        })
})

let prevPage = document.getElementById('prevPage')
prevPage.addEventListener('click', () => {
    page > 1 ? page -= 1 : page = 1
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page
    })
        .then((response) => {
            Insert(response.data);
            prevPage.style.color = '#5eb5e0';
            setTimeout(() => {
                prevPage.style.color = 'black';
                buttonFilter.value = "Filter"
            }, 2000);
        })
})

// ----------- BUTTONS ----------- //

let buttonFilter = document.getElementById('buttonFilter');
buttonFilter.addEventListener('click', () => {
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page: 1
    })
        .then(function (response) {
            buttonFilter.value = 'Filtered';
            setTimeout(() => {
                buttonFilter.value = "Filter"
            }, 2000);
            Insert(response.data)
        })
})

let buttonFilterClear = document.getElementById('clearFilter');
buttonFilterClear.addEventListener('click', () => {
    filters = {};
    minPrice.value = 0
    maxPrice.value = 0
    count.value = 1
    category.selectedIndex = 0
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page: 1
    })
        .then(function (response) {
            buttonFilterClear.value = 'Success';
            setTimeout(() => {
                buttonFilterClear.value = "Clear"
            }, 2000);
            Insert(response.data)
        })
})

let buttonPriceSort = document.getElementById('priceSort');
buttonPriceSort.addEventListener('click', () => {
    sorts = {'type': 'price', 'order': buttonPriceSort.dataset.sort}
    buttonPriceSort.dataset.sort === "ASC" ? buttonPriceSort.dataset.sort = "DESC" : buttonPriceSort.dataset.sort = "ASC"
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page: 1
    })
        .then(function (response) {
            buttonPriceSort.value = 'Sorted';
            setTimeout(() => {
                buttonPriceSort.value = "Sort by price"
            }, 2000);
            Insert(response.data)
        })
})


let buttonCountSort = document.getElementById('countSort');
buttonCountSort.addEventListener('click', () => {
    sorts = {'type': 'count', 'order': buttonCountSort.dataset.sort}
    buttonCountSort.dataset.sort === "ASC" ? buttonCountSort.dataset.sort = "DESC" : buttonCountSort.dataset.sort = "ASC"
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page: 1
    })
        .then(function (response) {
            buttonCountSort.value = 'Sorted';
            setTimeout(() => {
                buttonCountSort.value = "Sort by count"
            }, 2000);
            Insert(response.data)
        })
})


let buttonClearSort = document.getElementById('clearSort');
buttonClearSort.addEventListener('click', () => {
    sorts = {};
    axios.post(Routing.generate('getGoods'), {
        filters, sorts, page: 1
    })
        .then(function (response) {
            buttonClearSort.value = 'Success';
            setTimeout(() => {
                buttonClearSort.value = "Clear"
            }, 2000);
            Insert(response.data)
        })
})

// ########### BUTTONS ########### //


// ----------- GET DATA FILTER ----------- //

let category = document.getElementById('category')
category.addEventListener('change', function (event) {
    filters["category"] = category[category.selectedIndex].id
})

let minPrice = document.getElementById('minNum')
minPrice.addEventListener('change', function (event) {
    let price = filters.price ? filters.price.max : maxPrice.value
    filters["price"] = {
        'min': minPrice.value,
        'max': price
    }
})

let maxPrice = document.getElementById('maxNum')
maxPrice.addEventListener('change', function (event) {
    let price = filters.price ? filters.price.min : minPrice.value
    filters["price"] = {
        'min': price,
        'max': maxPrice.value
    }
})

let count = document.getElementById('minCount')
count.addEventListener('change', () => {
    filters["minCount"] = count.value
})

// ########### GET DATA FILTER ########### //


function Insert(data) {
    while (goods.lastElementChild)
        goods.removeChild(goods.lastElementChild);
    for (let i = 0; i < data.length; i++) {
        let form = document.createElement('form')
        form.innerHTML = data[i]
        goods.appendChild(form)
    }
}

