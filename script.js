const fs = require('fs');
const axios = require('axios');

(async function () {
    const res = await axios('http://jsonplaceholder.typicode.com/posts');
    const data = await res.data;
    fs.writeFile('result/posts.json', JSON.stringify(data), err => {
        if (err) throw err;
        console.log('Updated');
    });
})();
