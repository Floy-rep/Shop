import './styles/app.css';

let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
Routing.setRoutingData(Routes);

document.addEventListener('DOMContentLoaded', function (event){
    new Promise(function (resolve, reject){
        let url = Routing.generate('getCart');
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
    if(target.type === "button" && target.className === "buttonRemove" && isNaN(parseInt(target.id)) === false)
    {
        new Promise(function (resolve, reject) {
            let url = Routing.generate('removeFromCart', {id: target.id});
            let xhr = new XMLHttpRequest();

            let formData = new FormData()
            formData.append('id', target.id)

            xhr.open("POST", url);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.addEventListener('load', function (event) {
                if (this.readyState === 4) {
                    if (this.status === 200 && this.statusText === "OK") {
                        if (typeof JSON.parse(this.responseText)["unicId"] != "undefined")
                        {
                            let item_to_remove = document.getElementById('item_'+target.id)
                            resolve(JSON.parse(this.responseText));
                            item_to_remove.parentNode.removeChild(item_to_remove)
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

function Insert(data){
    let item = document.getElementById('item_'+data.unicId);
    let name = document.getElementById('itemName_'+data.unicId);
    name.innerText = data.name;

    let stuff = document.getElementById('itemStuff_'+data.unicId);
    stuff.innerText = 'Color - '+ data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;

    let taken = document.getElementById('itemTaken_'+data.unicId);
    taken.innerText = "You take - " + data.taken + " goods"

    let description = document.getElementById('itemDescription_'+data.unicId);
    if (data.description.length === 0)
        description.innerText = 'This good dont have description';
    else
        description.innerText = 'Description - ' + data.description;


    item.appendChild(document.createElement('hr'));
    item.style.display = 'inherit'

}
