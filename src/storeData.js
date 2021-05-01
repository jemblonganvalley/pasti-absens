

export async function storeDataSheet(x){

    let res = await fetch('https://fadlisheet.herokuapp.com/api/absens', {
        method : 'post',
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json"        
        },
        body : JSON.stringify({
            data : x
        })
    })

    let dt = await res.json()

    return await dt

  
}