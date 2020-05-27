const header = document.querySelector('#well');


// Listen for Form submit

document.getElementById('myForm').addEventListener('submit',saveNote);

// save text

function saveNote(e){
    var siteName = document.getElementById('siteName').value;
    var note = {
        name : siteName

    }
    
    // Test if bookmarks is null
  if(localStorage.getItem('notes') === null){
    // Init array
    var notes = [];
    // Add to array
    notes.push(note);
    // Set to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  } else {
    // Get bookmarks from localStorage
    var notes = JSON.parse(localStorage.getItem('notes'));
    // Add bookmark to array
    notes.push(note);
    // Re-set back to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchNotes();

    e.preventDefault();
}

// Delete bookmark
function deleteNote(name){
    // Get bookmarks from localStorage
    var notes = JSON.parse(localStorage.getItem('notes'));
    // Loop through the bookmarks
    for(var i =0;i < notes.length;i++){
      if(notes[i].name == name){
        // Remove from array
        notes.splice(i, 1);
      }
    }
    // Re-set back to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  
    // Re-fetch bookmarks
    fetchNotes();
  }


// Fetch bookmarks
function fetchNotes(){
    // Get bookmarks from localStorage
    var notes = JSON.parse(localStorage.getItem('notes'));
    // Get output id
    var notesResults = document.getElementById('notesResults');
  
    // Build output
    notesResults.innerHTML = '';
    for(var i = 0; i < notes.length; i++){
      var name = notes[i].name;
      
  
      notesResults.innerHTML += '<div class="well">'+
                                   '<h3>'+name+
                                   ' <a onclick="deleteNote(\''+name+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                   '</h3>'+
                                   '</div>';
    }
}

const searchBar = document.forms['myForm'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
  const term = e.target.value.toLowerCase();
  const texts = header.getElementByTagName('h3');
  Array.from(texts).forEach(function(text){
    const title = text.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
      text.style.display = 'block';

    }else{
      book.style.display = 'none';
    }
 })

  
})



