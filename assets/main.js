import './styles/app.css';
let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
Routing.setRoutingData(Routes);

document.addEventListener('DOMContentLoaded', function (event){
    new Promise(function (resolve, reject){
        xhr(resolve, reject , Routing.generate('getGoods'), 'GET', '');
    })
        .then((response) => {
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
            .then((resolve) => {
                target.disabled = true;
            })
    }
    if(target.type === "button" && target.id === "buttonRemove" && isNaN(parseInt(Number(target.dataset.id))) === false)
    {
        new Promise(function (resolve, reject) {
            let formData = new FormData()
            formData.append('id', Number(target.dataset.id))
            xhr(resolve, reject, Routing.generate('removeGood', {id: target.dataset.id}), 'POST', formData);
        })
            .then((resolve) => {
                let good = document.getElementById('good_'+Number(target.dataset.id))
                good.parentNode.removeChild(good)
            })
    }

    if(target.type === "button" && target.id === "buttonSort")
    {
        new Promise(function (resolve, reject) {
            let formData = new FormData()
            formData.append('id', Number(target.dataset.id))
            xhr(resolve, reject, Routing.generate('removeGood', {id: target.dataset.id}), 'GET', formData);
        })
            .then((resolve) => {
                let good = document.getElementById('good_'+Number(target.dataset.id))
                good.parentNode.removeChild(good)
            })
    }
})

function Insert(data){
    let good = document.getElementById('good_'+data.id)
    let name = document.getElementById('goodName_'+data.id);
    name.innerText = data.name;
    let stuff = document.getElementById('goodStuff_'+data.id);
    stuff.innerText = 'Color - '+ data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;

    let description = document.getElementById('goodDescription_'+data.id);
    if (data.description.length === 0)
        description.innerText = 'This good dont have description';
    else
        description.innerText = 'Description - ' + data.description;

    let button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Add')
    button.setAttribute('id', data.id)
    button.setAttribute('class', 'buttonAdd')
    if (data.count === 0)
        button.disabled = true;
    good.appendChild(button)
    good.appendChild(document.createElement('hr'));

    good.style.display = 'inherit'
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
