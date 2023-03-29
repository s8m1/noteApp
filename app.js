const yargs = require('yargs')

// Add Notes
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: function () {
        console.log('Adding a new note')
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

console.log(yargs.argv)