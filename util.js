const fs = require('fs')

// Load Notes from DB
const loadNotes = function () {
    try {
        const notesBuff = fs.readFileSync('notesDB.json')
        const notesJSON = notesBuff.toString()
        return JSON.parse(notesJSON)
    } catch (error) {
        return []
    }

}

// Saves notes to DB
const saveNotes = function (notes) {
    const notesString = JSON.stringify(notes)
    fs.writeFileSync('notesDB.json', notesString)
}


// Add notes to DB
const addNotes = function (title, body) {
    const notes = loadNotes()
    // Check for duplicate titles already existing
    const dupNotes = notes.filter(function (notes) {
        return notes.title === title
    })
    console.log(dupNotes.length)
    if (dupNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note '" + title + "' has been saved !")
    } else {
        console.log("Title '" + title + "' already exists !")
    }

}

// Remove a note

const remNotes = function (title) {
    const Notes = loadNotes()
    const findNotes = Notes.filter(function (Notes) {
        return Notes.title = title
    })
    if (findNotes.length === 0) {
        console.log("No notes found for the title '" + title + "'")
    } else {
        const remNotes = Notes.filter(function (Notes) {
            return Notes.title !== title
        })
        saveNotes(remNotes)
        console.log(remNotes.length + " Notes have been deleted with title '" + title + "'")
    }
}

module.exports = {
    addNotes: addNotes,
    remNotes: remNotes
}