



function WhereIam(event){
    let parentEl = event.target.parentElement;
    let elementos = parentEl.parentElement;

  
    let granPadre = elementos.parentElement;

    let sons = Array.from(granPadre.children);
    
    let resultado = sons.indexOf(elementos) - 1


    return resultado;

}




// Obtener elementos del DOM
let newbook = document.getElementById('dialogo');
let addbook = document.getElementById("addbook");
let clos = document.getElementById("close");



// Evento para cerrar el diálogo
clos.addEventListener('click', function (event) {
    event.preventDefault();
    let dialogo = document.getElementById('dialogo');

    
    dialogo.close();
    document.getElementById('main').hidden = false


   
});

// Evento para mostrar el diálogo
addbook.addEventListener('click', function () {
    newbook.showModal();
    document.getElementById('main').hidden = true
  
});

// Array para almacenar los libros
const myLibrary = [];


let jsonarray = JSON.stringify(myLibrary);
localStorage.setItem("savedArray", jsonarray);



// Evento para agregar un nuevo libro
let libro = document.getElementById('book');
libro.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('dialogo').close()
    document.getElementById('main').hidden = false
    
    
  
  
    console.log("aqui");

   

    


    function ReadOrNot(){
        let x =  document.getElementById('read').checked;
 
        if(x=="true"){
         return "Read"
        }else {
 
         return "Not read"
        }
     }

    // Obtener valores del formulario

    ///what if is null 

    
  

    


        // Aquí podrías realizar la lógica para guardar el libro
        // ...
        let titleValue = document.getElementById('title').value;
        let authorValue = document.getElementById('author').value;
        let pagesValue = document.getElementById('pages').value;
    
        let readValue = ReadOrNot();
        // Cerrar el diálogo

    // Crear instancia de la clase Book
    let random = new book(titleValue, authorValue, pagesValue, readValue);

    // Agregar el libro al array
    


    
    const incluyeValor = myLibrary.some(objeto =>
        Object.values(objeto).includes(random)
      );


      if(incluyeValor == false){


        function  change(choosen){

            myLibrary.splice(choosen,1);

            let sons = document.querySelectorAll('tr')

            sons[choosen + 1].remove()
            console.log("its deleted")
            myLibrary.push(random)
        
        }

       
        




        console.log(myLibrary)
      }else {
        console.log("no se cumple")
      }



      console.log(myLibrary)


  

    

    // Crear fila en la tabla
    let source = document.createElement('tr');
    document.querySelector('table').appendChild(source);

    // Crear celdas para la nueva fila
    let titleCell = document.createElement('td');
    titleCell.textContent = random.title;
    source.appendChild(titleCell);

    let authorCell = document.createElement('td');
    authorCell.textContent = random.author;
    source.appendChild(authorCell);

    let pagesCell = document.createElement('td');
    pagesCell.textContent = random.pages;
    source.appendChild(pagesCell);

    let readCell = document.createElement('td');
    readCell.textContent = random.read;
    source.appendChild(readCell);

    // Botón para cambiar el estado de lectura
    let status = document.createElement('button');
    status.innerText = "change status";
    readCell.appendChild(status);

    // Botón para eliminar el libro
    let tdDelete = document.createElement('td');
    source.appendChild(tdDelete);
    let eliminar = document.createElement('button');
    eliminar.textContent = "Delete";
    tdDelete.appendChild(eliminar);

    tdDelete.addEventListener('click',function(event){
     


    
      let parentEl = event.target.parentElement;
    let elementos = parentEl.parentElement;

  
    let granPadre = elementos.parentElement;

    let sons = Array.from(granPadre.children);
    
    let resultado = sons.indexOf(elementos) - 1




    console.log(myLibrary.length);

    console.log(resultado)

   myLibrary.splice(resultado,1)

      console.log(myLibrary.length)
      elementos.remove();    
    
     
    })

  
    // Botón para editar el libro
    let tdEditar = document.createElement('td');
    source.appendChild(tdEditar);
    let editar = document.createElement('button');
    editar.textContent = "Edit";
    tdEditar.appendChild(editar);

    // Evento para eliminar un libro
  



    // Evento para abrir el diálogo de edición
    editar.addEventListener('click', function (event) {
        event.preventDefault();
        let abrir = document.getElementById('dialogo');
        abrir.showModal();
        document.getElementById('main').hidden = true;
        //el objeto que es abierto despues de editarlo se elemina y se vuelve a meter de nuevo 
        
        let dondeEstoy = WhereIam(event)
        console.log(dondeEstoy) 
        change(dondeEstoy)
        
        document.getElementById('title').value = myLibrary[dondeEstoy].title
        document.getElementById('author').value = myLibrary[dondeEstoy].author
        document.getElementById('pages').value = myLibrary[dondeEstoy].pages
        document.getElementById('read').value = myLibrary[dondeEstoy].read

      

        // Implementar lógica de edición aquí
    });

    // Evento para cambiar el estado de lectura
    status.addEventListener('click', function (event) {
        event.preventDefault();
        let i = event.target;
        let a = (i.parentElement).parentElement;
//////////aqui esta
function gettingindex(elemento) {
    let father = elemento.parentElement;
    let sons = Array.from(father.children);
    let indexFinal = sons.indexOf(elemento);
    return indexFinal - 1;
}

function readStatus(arrayObjects, correction) {
    let ObjetoChange = gettingindex(a);
    arrayObjects[ObjetoChange].read = correction;
    console.log(ObjetoChange);
}

let b = a.childNodes[3];
c = b.childNodes[0];

if ("Read" == c.textContent) {
    c.textContent = "Not read";
    readStatus(myLibrary, "Not read");
    console.log(myLibrary);
} else {
    c.textContent = "Read";
    readStatus(myLibrary, "Read");
    console.log(myLibrary);
}
    });

});

// Definición de la clase Book
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Método de la clase Book para obtener información del libro
book.prototype.info = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`);
};

// Crear una instancia de Book
var myBook = new book("The Catcher in the Rye", "J.D. Salinger", 224, false);

// Llamar al método info
myBook.info();

// Convertir array a JSON y guardar en localStorage



function CleaningMyLibrary(indice , datos){

  datos.splice(indice, 1);

}


/////////without local storage nex thing do to is localstorage 
