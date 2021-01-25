let Routing = require("../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
let Routes = require('./js-routes.json');
Routing.setRoutingData(Routes);

let button = document.getElementById('good_submit');
console.log(button)
button.addEventListener('click', function (event){
    if(button.type === "button" && button.className === "submitButton")
    {
        new Promise(function (resolve, reject) {
            let url = Routing.generate('addGood');
            let xhr = new XMLHttpRequest();
            let formData = new FormData()
            formData.append('data',  [button.id])
            console.log(formData);

            xhr.open("POST", url);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.addEventListener('load', function (event) {
                if (this.readyState === 4) {
                    if (this.status === 200 && this.statusText === "OK") {
                        if (typeof JSON.parse(this.responseText)["id"] != "undefined")
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