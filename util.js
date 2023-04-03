const fs = require('fs')
const { title } = require('process')

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
const addNotes = (title, body) => {
    const notes = loadNotes()
    const dupNotes = notes.filter((note) => note.title === title)
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
const remNotes = (title) => {
    const Notes = loadNotes()
    const findNotes = Notes.filter((Notes) => Notes.title === title)
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

// //List notes
const listNotes = () => {
    const listNote = loadNotes()
    console.log('Here are all the notes :')
    listNote.forEach(note => {
        console.log(note.title)
    });
}

// Read a note with title
const readNote = (title) => {
    console.log("Reading note with title .." + title)
    const readNote = loadNotes()
    const filterNote = readNote.filter((note) => {
        return note.title === title
    }
    )
    filterNote.forEach((note) => {
        console.log(note.title + " --- " + note.body)
    })
}


module.exports = {
    addNotes: addNotes,
    remNotes: remNotes,
    listNotes: listNotes,
    readNote: readNote
}