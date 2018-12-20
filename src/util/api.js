import { ACCESS_KEY, API_SECRET } from './config'
export const fetchPhotos = (keyword, limit) => {
    const headers = {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        secret: API_SECRET,
    }

    const init = {
        method: 'GET',
        headers: headers,
    }

    let countLimit = limit || 5

    const newRequest = keyword ? 
    `https://api.unsplash.com/photos/random?count=${countLimit}&query=${keyword}&client_secret=${API_SECRET}` :
    `https://api.unsplash.com/photos/random?count=${countLimit}&client_secret=${API_SECRET}`

    return fetch(newRequest, init).then(response => {
        return response.json()
    }).then(responseBody => {
        console.log(responseBody)
        return responseBody
    }).catch(error => {
        console.log(`the error was: ${error.message}`)
    })


}

    const forceDownload = (blob, filename) => {
        let a = document.createElement('a');
        a.download = filename;
        a.href = blob;
        a.click();
    }

    // Current blob size limit is around 500MB for browsers
    export const downloadResource = (url, filename, location) => {
        if (!filename) filename = url.split('\\').pop().split('/').pop();
        fetch(url, {
            headers: new Headers({
                'Origin': location
            }),
            mode: 'cors'
        })
        .then(response => response.blob())
        .then(blob => {
            let blobUrl = window.URL.createObjectURL(blob);
            forceDownload(blobUrl, filename);
        })
        .catch(e => console.error(e));
    }


// export const downloadPhoto = (downloadLink) => {
//     const headers = {
//         Authorization: `Client-ID ${ACCESS_KEY}`,
//         secret: API_SECRET,
//     }

//     const init = {
//         method: 'GET',
//         headers: headers,
//     }

//     const request = `downloadLink?client_secret=${API_SECRET}`

//     return fetch(request, init).then(response => {
//         return response.json()
//     }).then(responseBody => {
//         return responseBody
//     })
// }