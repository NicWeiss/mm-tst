
//Connect Promise this
const requesrApi = (method, data) => new Promise((resolves, rejects) =>{
    const url = 'http://motmom-back.lo/api/'+method
    console.log(url);
    var params = 'orem=ipsum&name=binny';
    
    const request = new XMLHttpRequest()
    request.open('POST', url, false)
    
    request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response)) :
        rejects(Error(rejects.statusText).results)
    request.send(JSON.stringify(data));
})

export const login = (pass) =>
    requesrApi('login',{password : pass}).then(
        members => {
            if (members.status == 200 ) {return true} else { return false} }
    )


export const get_products = () =>{

}

export const add_product = () =>{

}

export const update_product = (product) =>{

}

export const delete_product = (id) =>{

}