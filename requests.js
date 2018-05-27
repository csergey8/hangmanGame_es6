// Callback pattern
// const getPuzzle = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         callback(null, data.puzzle);
//     } else if (e.target.readyState === 4) {
//         callback('Error request', null)
//     }
// });

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2');
// request.send();
// }

//Callback pattern
// const getCountry = (code, callback) => {
//     const req = new XMLHttpRequest();

//     req.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             callback(null, data);
//         } else if (e.target.readyState === 4){
//             callback('Error request', null);
//         }
//     });

//     req.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
//     req.send();
// }

//Promise Puzzle
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//     } else if (e.target.readyState === 4) {
//         reject('Error request');
//     }
//     });
    
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

//Promise getCountry
// const getCountry = (code) => new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();

//     req.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data);
//         } else if (e.target.readyState === 4){
//             reject('Error request');
//         }
//     });
    
//     req.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
//     req.send();
// })


// Use FETCH API for request getPuzzle
// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw Error('can\'t fetch data');
//             }
//         }).then((data) => {
//             return data.puzzle
//         })
// }

// Use FETCH API for request getCountry
// const getCountry = (code) => {
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error('can\'t fetch data')
//             }
//         }).then((data) => {
//             return data.name
//         })
// }

// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?token=4124b2d5c09d7d')
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json();
//             }
//         })
// }

// Use ASYNC AWAIT 
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status ===  200) {
        const data = await response.json();
        return data.puzzle
    } else {
        throw new Error('Error');
    }
}

//ASYNC AWAIT
const getCountry = async (code) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    if (response.status === 200) {
        const country = await response.json();
        return country.name
    } else {
        throw new Error('Error');
    }    
}
//ASYNC AWAIT
const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=4124b2d5c09d7d')
    if (response.status === 200) {
        return response.json();
        
    } else {
        throw new Error('Error');
    }
}
//ASYNC AWAIT
const getCurrentCountry = async () => {
    const response = await fetch('https://ipinfo.io/json?token=4124b2d5c09d7d')
    if (response.status === 200) {
        const data = await response.json();
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${data.country}`)
        if (res.status === 200) {
            const data = await res.json();
            return data.name
        }
    }
}
