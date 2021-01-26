// function xhr(resolve, reject, url, method, formData){
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//     xhr.addEventListener('load', function (event) {
//         if (this.readyState === 4) {
//             if (this.status === 200 && this.statusText === "OK")
//                 resolve(JSON.parse(this.responseText));
//             else
//                 reject("ERROR");
//         }
//     })
//     xhr.send(formData);
// }