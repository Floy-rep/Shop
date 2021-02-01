import './styles/test.scss';


const Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
let goods = document.getElementById('goods');
const axios = require('axios');
Routing.setRoutingData(Routes);

let filters = {};

document.addEventListener('DOMContentLoaded', function (event) {
    axios.post(Routing.generate('getGoods'), {
        filters
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
                'amount': count.value
            })
                .then(function (response) {
                    target.value = 'Added';
                    setTimeout(() => {
                        target.value = "Add"
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


    if (target.type === "button" && target.id === "buttonSort") {
        let category = document.getElementById('category')
        axios.post(Routing.generate('getGoods'), {
            filters
        })
            .then(function (response) {
                target.value = 'Sorted';
                setTimeout(() => {
                    target.value = "Sort"
                }, 2000);
                Insert(response.data)
            })
    }
})

let category = document.getElementById('category')
category.addEventListener('change', function (event){
    filters["category"] = category[category.selectedIndex].value
})

let minPrice = document.getElementById('minNum')
minPrice.addEventListener('change', function (event){
    filters['price'] = {
        'min': minPrice.value,
        'max' : filters.price.max
    }
})

let maxPrice = document.getElementById('maxNum')
maxPrice.addEventListener('change', function (event){
    filters['price'] = {
        'min': filters.price.min,
        'max' : maxPrice.value
    }
})

function Insert(data){
    while (goods.lastElementChild)
        goods.removeChild(goods.lastElementChild);
    for (let i = 0; i < data.length; i++) {
        let form = document.createElement('form')
        form.innerHTML = data[i]
        goods.appendChild(form)
    }
}

