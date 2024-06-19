const redis = require('redis')

const client = redis.createClient({})


client.on('connect', () => {
    console.log('Redis client connected')
})

client.on('ready', () => {
    console.log('Redis client ready to use')
})

client.on('error', (err) => {
    console.log(err.message)
})

client.on('end', () => {
    console.log('Redis client disconnected')
})

process.on('SIGINT', () => {
    client.quit()
})

module.exports = client