const fs = require('fs');
const chalk  = require('chalk');

const getNotes = function(){
        const msg = "My notes....";
        return msg;
}

const addNote = function(title,body){
        //console.log(title,body);
        const notes = loadNotes();

        const duplicateNotes = notes.filter(function(note){
                return note.title === title
        });

        if(duplicateNotes.length === 0){
                notes.push({
                        title:title,
                        body:body  
                  })
                  saveNotes(notes);
                  console.log('Successfully added');
        }
        else{
                console.log('Content title already exist');
        }  
}
const saveNotes = function(notes){
        const dataJson = JSON.stringify(notes);
        fs.writeFileSync('note.json',dataJson);
}

const loadNotes = function(){
        try{
                const dataBuffer = fs.readFileSync('note.json');
                const dataJson = dataBuffer.toString();
                return JSON.parse(dataJson);

        }catch(e){
                return [];
        }    
}

const removeNote = function(title){
        const notes = loadNotes();
        const newNotes = notes.filter(function(note){
                return note.title !== title
        });
        
        if(notes.length > newNotes.length){
                saveNotes(newNotes);   
                console.log(chalk.bgGreen.bold('Note Removed!'));
        }
        else{
                console.log(chalk.bgRed.bold('No Note Found!'));
        }
}

module.exports= {
        getNotes: getNotes,
        addNote: addNote,
        removeNote: removeNote
}

//console.log('hi notes.js page')