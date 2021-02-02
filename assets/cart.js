let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
const  axios = require('axios');
let goods = document.getElementById('goods');
Routing.setRoutingData(Routes);

document.addEventListener('DOMContentLoaded', () => {
    axios.get(Routing.generate('getCart'))
        .then(function (response) {
            console.log(response.data);
            Insert(response.data);
        })
    })

document.addEventListener('click', function (event){
    let target = event.target;
    if(target.type === "button" && target.className === "buttonRemove" && isNaN(parseInt(target.id)) === false) {
        axios.post(Routing.generate('removeFromCart', {id: target.id}), {
            'id': target.id
        })
            .then((response) => {
                let item_to_remove = document.getElementById('good_' + response.data)
                item_to_remove.parentNode.removeChild(item_to_remove)
            })
    }
})

function Insert(data){
    for (let i = 0; i < data.length; i++) {
        let form = document.createElement('form')
        form.innerHTML = data[i]
        goods.appendChild(form)
    }
}
