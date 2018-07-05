const rp = require('request-promise')
const cheerio = require('cheerio')

const host = 'http://10.110.172.74/mapFile/hnmap/'

rp(host)
.then(res => {
    const $ = cheerio.load(res)
    $('a').each((i, el) => {
        
    })
    console.log()
})
.catch(err => {
    console.error(err)
})