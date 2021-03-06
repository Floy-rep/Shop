let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
const axios = require('axios');
Routing.setRoutingData(Routes);
let goods = document.getElementById('goodDelete');

document.addEventListener('DOMContentLoaded', function (event) {
    fetch(Routing.generate('getGoods'), {
        method: 'POST',
        headers: {"X-Requested-With": "XMLHttpRequest"}
    })
        .then(response => response.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                Insert(result[i]);
            }
        })
})

document.addEventListener('click', function (event) {
    let target = event.target;
    if (target.type === "button" && target.className === "submitButton") {
        // get DATA
        let name = document.getElementById('good_name').value
        let price = document.getElementById('good_price').value
        let color = document.getElementById('good_color').value
        let description = document.getElementById('good_description').value
        let count = document.getElementById('good_count').value
        let category = document.getElementById('good_category')
        let category_option = category[category.selectedIndex].id
        new Promise(function (resolve, reject) {
            let url = Routing.generate('addGood');
            let formData = new FormData();
            category = category.length === 0 ? "null" : category
            let data = {
                'name': name,
                'price': price,
                'color': color,
                'description': description,
                'count': count,
                'category': category_option
            }
            formData.append('data', JSON.stringify(data))
            xhrReq(resolve, reject, url, "POST", formData)
        })
            .then((response) => {
                target.value = 'Submitted';
                setTimeout(() => {
                    target.value = "Submit"
                }, 3000);
            })
    }
    if (target.type === "button" && target.className === "deleteButton" && isNaN(parseInt(target.id)) === false) {
        new Promise(function (resolve, reject) {
            let formData = new FormData();
            formData.append('id', target.id)
            xhrReq(resolve, reject, Routing.generate('removeUser', {id: target.id}), "POST", formData)
        })
            .then((response) => {
                let user = document.getElementById('user_' + target.id)
                user.parentNode.removeChild(user)
            })
    }
    if (target.type === "button" && target.className === "promtButton" && isNaN(parseInt(target.id)) === false) {
        new Promise(function (resolve, reject) {
            let formData = new FormData();
            formData.append('id', target.id)
            xhrReq(resolve, reject, Routing.generate('promtUser', {id: target.id}), "POST", formData)
        })
            .then((response) => {
                let user = document.getElementById('email_' + target.id)
                user.style.color = "green";
                setTimeout(() => {
                    user.style.color = "black"
                }, 3000);

            })
    }
    if (target.type === "button" && isNaN(parseInt(Number(target.id))) === false) {
        let formData = new FormData();
        formData.append('id', target.id)
        fetch(Routing.generate('removeGood', {id: target.id}), {
            method: "POST",
            headers: {"X-Requested-With": "XMLHttpRequest"},
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                let good = document.getElementById('good_' + target.id)
                good.parentNode.removeChild(good)
            })
    }
})

let category_field_add = document.getElementById('category_add_field');
category_field_add.addEventListener('click', (event) => {
    axios.post(Routing.generate('addCategoryField'), {
        'id': document.getElementById('properties').childElementCount + 1
    })
        .then((response) => {
            let child = document.createElement('div')
            child.innerHTML = JSON.parse(response.data)[0]
            document.getElementById('properties').appendChild(child)
        })
})

let category_button_select = document.getElementById('good_category');
category_button_select.addEventListener('change', (event) => {
    axios.post(Routing.generate('getCategoryFields', {'id': event.target[event.target.selectedIndex].id}), {
        'id': event.target[event.target.selectedIndex].id
    })
        .then((response) => {
                let fields = document.getElementById('fields');
                while (fields.lastElementChild)
                    fields.removeChild(fields.lastElementChild);
                for (let i = 0; i < response.data.length; i++)
                    fields.innerHTML += response.data[i]
        })
})

let category_button_save = document.getElementById('category_save');
category_button_save.addEventListener('click', (event) => {
    let data = {'fields': {}, 'name': document.getElementById('category_name').value};
    let iterator = 1
    for (let item of document.getElementById('properties').children) {
        let field = 'field_' + iterator
        data["fields"][field] = {
            "name": item.children.item(1).value,
            "type": item.children.item(3).value
        }
        iterator++
    }
    axios.post(Routing.generate('addCategory'),{
        data
    })
        .then((response) => {
            console.log(response.data)
        })
})

function xhrReq(resolve, reject, url, method, formData) {
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

function Insert(data) {
    let form = document.createElement('form')
    form.method = "POST";
    form.id = "good_" + data.id;

    let good = document.createElement('h4');
    good.setAttribute('id', "goodName_" + data.id)
    good.appendChild(document.createTextNode(data.name + " (" + data.id + ")"));

    let button = document.createElement('input');
    button.type = 'button';
    button.setAttribute('id', data.id)
    button.setAttribute('value', "Delete")

    form.appendChild(good)
    form.appendChild(button)
    goods.appendChild(form)
}