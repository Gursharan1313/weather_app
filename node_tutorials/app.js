const chalk = require('chalk');
const { strict } = require('yargs');
const yargs = require('yargs');
const note = require('./notes.js');

 //console.log(process.argv[2])
 //console.log('dasdadsad')


yargs.command({
    command:'read',
    describe:"read the notes",
    builder:{
        title:{
            describe:'Enter title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.readNotes(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'its an list descrip',
    handler(){
        note.listNotes()
    }
});

yargs.command({
    command: 'Add',
    describe: 'for add function',
    builder:{
        title:{
            describe:'note',
            demandOption: true
        },
        body:{
            describe:'its body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.addNote(argv.title,argv.body);
    }
});


yargs.command({
   command:'remove',
   describe: 'Use to remove content from json',
   builder:{
       title:{
           demandOption:true,
           type:'string'
       }
    }, 
    handler(argv){
          // console.log('thik?')
           note.removeNote(argv.title);
    }
   
});


yargs.parse();    /// its important to parse yargs 
//or 
// console.log(yargs.argv);    










// create command
/*
yargs.command({
    command: 'list',
    describe: 'list your arguments',
    handler: function() {
        console.log('chak') 
     }
 })

yargs.command({
    command:'read',
    describe:'second query',
    handler:function(){
        console.log('check read command here')
    } 
})

//console.log(yargs.argv)
*/









// const command = process.argv[2]

// console.log(command)


// const chalk = require('chalk')

// console.log(chalk.black.bold("Success!"))

// console.log(process.argv)






//// old lecture for install npm module 

// const validator = require('validator')
// const getNotes = require('./notes.js')

// const check = getNotes();

// //console.log(check);

// console.log(validator.isEmail('tets@tutu.viu'))






















///// first lecture how to access files


// const fs = require('fs')

// //fs.writeFileSync('notes.txt','hi, its an test file')

// fs.appendFileSync('notes.txt','lets check whether its works or not')