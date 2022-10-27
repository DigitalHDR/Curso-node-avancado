const { MongoClient } = require('mongodb')
// ajuda a conectar com o nosso banco

const uri = 'mongodb://localhost:27017/testemongodb2'
// vai ser criado automaticamento na ora de conectar

const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    console.log('Conectando ao mongoDB!')
  } catch (err) {
    console.log(err)
  }
}

run()

module.exports = client