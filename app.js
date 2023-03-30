const yargs = require('yargs')
const fs = require('fs')
const util = require('./util.js')

// Add Notes
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: "Tile of the note",
            demandOption: true,
            type:"string"
        },
        body:{
            describe: "Body of the note",
            demandOption: true,
            type: "string"    
        }
    },
    handler: function (argv) {
        util.addNotes(argv.title, argv.body)
    }
})

// Remove a Note
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing a note')
    }
})

//Read a Note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading a note')
    }
})

//List all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

yargs.parse()

