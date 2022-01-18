const fs = require('fs');
const chalk  = require('chalk');
const { Console } = require('console');

const getNotes = ()=>  "My notes....";

const saveNotes = (notes)=>{
        const dataJson = JSON.stringify(notes);
        fs.writeFileSync('note.json',dataJson);
}

const loadNotes = ()=>{
        try{
                const dataBuffer = fs.readFileSync('note.json');
                const dataJson = dataBuffer.toString();
                return JSON.parse(dataJson);

        }catch(e){
                return [];
        }    
}

const addNote = (title,body)=>{
        //console.log(title,body);
        const notes = loadNotes();

        const duplicateNotes = notes.filter((note)=> note.title === title )
        ///// below command to boost the above command like if notes have large data then it will filter or check all enteries but below mentioned command will terminate as soon as it find any entery
        const duplicateNote = notes.find((note)=> note.title === title )

        if(!duplicateNote){
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


const removeNote =(title)=>{
        const notes = loadNotes();
        const newNotes = notes.filter( (note) => note.title !== title )
        
        if(notes.length > newNotes.length){
                saveNotes(newNotes);   
                console.log(chalk.green.inverse('Note Removed!'));
        }
        else{
                console.log(chalk.red.inverse('No Note Found!'));
        }
}

const listNotes = ()=>{
        console.log(chalk.inverse("Your Notes"))
        loadNotes().forEach(list => {
            console.log(list.title)
        });
}

const readNotes = (title) =>{
       const note = loadNotes().find((note)=> note.title === title)
       if(note){
                console.log(chalk.bgRed.green(note.title))
                console.log(note.body)
       }
       else{
               console.log('NO Note Found')
       }
}



module.exports= {
        getNotes: getNotes,
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes,
        readNotes: readNotes
}

//console.log('hi notes.js page')