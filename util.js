const fs = require('fs')

// Load Notes from DB
const loadNotes = function () {
    const notesBuff = fs.readFileSync('notesDB.json')
    const notesJSON = notesBuff.toString()
    return JSON.parse(notesJSON)
}

// Saves notes to DB
const saveNotes = function (notes) {
    const notesString = JSON.stringify(notes)
    fs.writeFileSync('notesDB.json', notesString)
}


// Add notes to DB
const addNotes = function (title, body) {
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
}


module.exports = {
    addNotes: addNotes
}