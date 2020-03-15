
const axios = require('axios')
var url = "https://qofbe721ad.execute-api.us-east-1.amazonaws.com/dev";

function getStudents(){
    return new Promise((resolve, reject)=>{
        axios.get(`${url}/student`).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    getStudents
}