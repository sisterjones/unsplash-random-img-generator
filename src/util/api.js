// api info kept in separate secure repo
import { ACCESS_KEY, API_SECRET } from './config'

// pulls photos from unsplash api based on dynamic query params
export const fetchPhotos = (limit) => {

    // sets headers
    const headers = {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        secret: API_SECRET,
    }

    // sets method
    const init = {
        method: 'GET',
        headers: headers,
    }

    // if no param is generated in-app, defaults to 5 to avoid failure
    let countLimit = limit || 30

    // if specific keyword is specified in-app, it is included in query
    // otherwise query runs with no keyword param

    const newRequest = `https://api.unsplash.com/photos/random?count=${countLimit}&client_secret=${API_SECRET}`

    // actual api request
    return fetch(newRequest, init).then(response => {
        return response.json()
    }).then(responseBody => {
        return responseBody
    }).catch(error => {
        console.log(`the error was: ${error.message}`)
    })
}

// 'forces' a downlaod across clients 
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
    // blob is a funny word
    .then(response => response.blob())
    .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
    })
    .catch(e => console.error(e));
}
