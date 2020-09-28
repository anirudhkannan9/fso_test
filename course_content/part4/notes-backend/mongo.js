const generateID = () => {return Math.floor(Math.random()*1000)}
const mongoose = require('mongoose')
const password = process.argv[2]
const url = `mongodb+srv://anirudh:${password}@cluster0.6lez3.mongodb.net/note-app?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology = true })

const noteSchema = new     mongoose.Schema({
      content:   String, 
    important: Boolean,
    id: Number
})

const Note = mongoose.model('Note', noteSchema)

if (process.argv.length < 3) {
console.log('Please provide the password as an argument: node mongo.js <password>')
        process.exit(1)
}

else if (process.argv.length < 4) {
    console.log('Notes:')
    Note
    .find({})
    .then(r => {
        r.forEach(n => {
                  console.log(`${n.content} ${n.important}`)
        })
        mongoose.connection.close()
    })
}

else {
    const note = new Note({
        content: process.argv[3],
        important: process.argv[4],
        id: generateID() 
    })

    note
    .save()
    .then(r => {
        console.log(`added note id ${note.id} to notes.`)
        mongoose.connection.close()
    })
}





