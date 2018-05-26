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
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw Error('can\'t fetch data');
            }
        }).then((data) => {
            return data.puzzle
        })
}

// Use FETCH API for request getCountry
const getCountry = (code) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('can\'t fetch data')
            }
        }).then((data) => {
            return data.name
        })
}