import './styles/app.css';

let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
Routing.setRoutingData(Routes);

document.addEventListener('DOMContentLoaded', function (event){
    new Promise(function (resolve, reject){
        let url = Routing.generate('getGoods');
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.addEventListener('load', function (event){
            if (this.readyState === 4) {
                if (this.status === 200 && this.statusText === "OK")
                {
                    resolve(JSON.parse(this.responseText));
                }
                else{
                    reject("ERROR");
                }
            }

        })
        xhr.send();
    })
        .then((response) => {
            console.log(response)
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
            let url = Routing.generate('addToCard', {id: target.id});
            let xhr = new XMLHttpRequest();

            let num = document.getElementById('goodNum_'+target.id)
            let formData = new FormData()
            formData.append('id', target.id)
            formData.append('count', num.value)

            xhr.open("POST", url);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.addEventListener('load', function (event) {
                if (this.readyState === 4) {
                    if (this.status === 200 && this.statusText === "OK") {
                        console.log(JSON.parse(this.responseText)["id"]);
                        if (typeof JSON.parse(this.responseText)["id"] != "undefined")
                        {
                            // formData.append(JSON.parse(this.responseText))
                            target.disabled = true;
                            resolve(JSON.parse(this.responseText));
                        }
                    } else {
                        reject("ERROR");
                    }
                }

            })
            xhr.send(formData);
        })
    }
})

// let button = document.getElementById('buttonAdd')
// let button = document.getElementsByClassName('buttonAdd')
// button.
// button.addEventListener('click', function (event){
//     new Promise(function (resolve, reject){
//         let id = button.getAttribute('data-id');
//         let url = Routing.generate('getGoods'+id);
//         console.log(url);
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//         xhr.addEventListener('load', function (event){
//             if (this.readyState === 4) {
//                 if (this.status === 200 && this.statusText === "OK")
//                 {
//                     console.log(JSON.parse(this.responseText))
//                     resolve(JSON.parse(this.responseText));
//                 }
//                 else{
//                     reject("ERROR");
//                 }
//             }
//
//         })
//         xhr.send();
//     })
// })

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
