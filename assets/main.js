import './styles/app.css';
let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
let goods = document.getElementById('goods');

Routing.setRoutingData(Routes);

document.addEventListener('DOMContentLoaded', function (event){
    new Promise(function (resolve, reject){
        let category = document.getElementById('category')
        let data = {
            "sort_by_price": {
                "min": document.getElementById('minNum').value,
                "max": document.getElementById('maxNum').value
            },
            "sort_by_category":{
                "name": category[category.selectedIndex].value
            }
        }
        let formData = new FormData()
        formData.append('data', JSON.stringify(data));
        xhr(resolve, reject , Routing.generate('getGoods'), 'POST', formData);
    })
        .then((response) => {
            while (goods.lastElementChild) {
                goods.removeChild(goods.lastElementChild);
            }
            for (let i = 0; i < response.length; i++){
                Insert(response[i]);
            }
        })
        .catch((error) => {
            console.log(error)
        })
})

document.addEventListener('click', function (event){
    let target = event.target;
    if(target.type === "button" && target.className === "buttonAdd" && isNaN(parseInt(target.id)) === false)
    {
        new Promise(function (resolve, reject) {
            let formData = new FormData()
            let count = document.getElementById('goodNum_'+target.id)
            formData.append('id', target.id)
            formData.append('amount', count.value)
            xhr(resolve, reject, Routing.generate('addToCard', {id: target.id}), 'POST', formData);
        })
            .then((response) => {
                target.value = 'Added';
                setTimeout(() => {target.value = "Add"}, 2000);
            })
    }
    // if(target.type === "button" && target.id === "buttonRemove" && isNaN(parseInt(Number(target.dataset.id))) === false)
    // {
    //     new Promise(function (resolve, reject) {
    //         let formData = new FormData()
    //         formData.append('id', Number(target.dataset.id))
    //         xhr(resolve, reject, Routing.generate('removeGood', {id: target.dataset.id}), 'POST', formData);
    //     })
    //         .then((response) => {
    //             let good = document.getElementById('good_'+Number(target.dataset.id))
    //             good.parentNode.removeChild(good)
    //         })
    // }

    if(target.type === "button" && target.id === "buttonSort")
    {
        new Promise(function (resolve, reject) {
            let formData = new FormData()
            let category = document.getElementById('category')
            let data = {
                    "sort_by_price": {
                        "min": document.getElementById('minNum').value,
                        "max": document.getElementById('maxNum').value
                    },
                    "sort_by_category":{
                        "name": category[category.selectedIndex].value
                    }
                }
            formData.append('data', JSON.stringify(data));
            xhr(resolve, reject, Routing.generate('getGoods'), 'POST', formData);
        })
            .then((response) => {
                target.value = 'Sorted';
                setTimeout(() => {target.value = "Sort"}, 2000);
                while (goods.lastElementChild) {
                    goods.removeChild(goods.lastElementChild);
                }
                for (let i = 0; i < response.length; i++){
                    Insert(response[i]);
                }
            })
    }
})

function Insert(data){
    let form = document.createElement('form')
    form.method = "POST";
    form.id = "good_"+data.id;

    let good = document.createElement('h4');
    good.setAttribute('id', "goodName_"+data.id)
    good.appendChild(document.createTextNode(data.name + " (" + data.id + ")"));

    let stuff = document.createElement('p');
    stuff.setAttribute('id', "goodStuff_"+data.id)
    stuff.appendChild(document.createTextNode('Color - '+ data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count))

    let description = document.createElement('p');
    description.setAttribute('id', "goodDescription_"+data.id)
    if (data.description.length === 0)
        description.appendChild(document.createTextNode("This good dont have description"))
    else
        description.appendChild(document.createTextNode('Description - ' + data.description))

    let num = document.createElement('input');
    num.type = 'number';
    num.setAttribute('id', "goodNum_"+data.id)
    num.setAttribute('class', 'width: 70px')
    num.setAttribute('value', 0)
    num.setAttribute('min', 1)
    num.setAttribute('max', data.count)

    let category = document.createElement('p');
    category.setAttribute('id', "goodCategory_"+data.id)
    if (data.category != null)
        category.appendChild(document.createTextNode("Category - " + data.category.categoryName));
    else
        category.appendChild(document.createTextNode('Category is undefinded'));

    let button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Add')
    button.setAttribute('id', data.id)
    button.setAttribute('class', 'buttonAdd')
    if (data.count === 0)
        button.disabled = true;

    form.appendChild(good);
    form.appendChild(stuff)
    form.appendChild(description)
    form.appendChild(num)
    form.appendChild(category)
    form.appendChild(button)
    form.appendChild(document.createElement('hr'))
    goods.appendChild(form);

    // let good = document.getElementById('good_'+data.id)
    // let name = document.getElementById('goodName_'+data.id);
    // name.innerText = data.name;
    // let stuff = document.getElementById('goodStuff_'+data.id);
    // stuff.innerText = 'Color - '+ data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;
    //
    // let description = document.getElementById('goodDescription_'+data.id);
    // if (data.description.length === 0)
    //     description.innerText = 'This good dont have description';
    // else
    //     description.innerText = 'Description - ' + data.description;
    //
    // let button = document.createElement('input')
    // button.setAttribute('type', 'button')
    // button.setAttribute('value', 'Add')
    // button.setAttribute('id', data.id)
    // button.setAttribute('class', 'buttonAdd')
    // if (data.count === 0)
    //     button.disabled = true;
    // good.appendChild(button)
    // good.appendChild(document.createElement('hr'));
    //
    // good.style.display = 'inherit'
}

function xhr(resolve, reject, url, method, formData){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.addEventListener('load', function (event) {
        if (this.readyState === 4) {
            if (this.status === 200 && this.statusText === "OK")
                resolve(JSON.parse(this.responseText));
            else
                reject("ERROR");
        }
    })
    xhr.send(formData);
}
