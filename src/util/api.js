// const ACCESS_KEY = '48ab0296508fa15587c3a2f85327b34fbb1aec23ba6b17ff6731a2023e653f2b'
// const API_SECRET = '848bc74d718457b71409d37568da2c1a875bf37068825d09e8f09abb54fc1d12'
const ACCESS_KEY = '373374215ac1507179ffff5cd70936c453038fa1bd497ecee699e011b54ea828'
const API_SECRET = '7b0ed760f7f6f2ca19bd614de057191d1b80069d8d9222b496cfc1051f90860f'

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