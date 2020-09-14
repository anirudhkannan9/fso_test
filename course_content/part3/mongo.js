const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const password = process.argv[2]

const url = 
    `mongodb+srv://anirudh:${password}@cluster0.6lez3.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'HTML is Easy',
//     date: new Date(),
//     important: true,
//   })

// note
// .save()
// .then(result => {
//     console.log('note saved!')
//     //mongoose.connection.close()
// })

// const note1 = new Note({
//     content: 'Mongo does not care about schemas',
//     date: new Date(),
//     important: false,
//   })

// note1.save().then(result => {
//     console.log('note1 saved!')
// })

// const note2 = new Note({
//     content: 'Mongoose cares about schemas at the application level',
//     date: new Date(),
//     important: false,
// })

// note2
// .save()
// .then(r => {
//     console.log('note2 saved!')
// })

// const note3 = new Note({
//     content: 'Apparently - you can only close the connection once',
//     date: new Date(),
//     important: true,
// })

// note3
// .save()
// .then(r => {
//     console.log('note3 saved!')
//     mongoose.connection.close()
// })

Note.find({ important: true }).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})




