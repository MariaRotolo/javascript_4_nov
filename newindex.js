const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
  const elements = items.map((element) => 
    `<li>
      <h3>${element.name}</h3>
      <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
    </li>`
  );
  
  const content = elements.join('');

  container.innerHTML = content;
};

document.addEventListener('DOMContentLoaded', () => {
 
  const input = q('.search-form input');
  const list = q('ul');
  const formAdd = q('.add-new');
    
   
    const newName = q(".input-name");
    const newPhone = q(".input-phone");
    const newEmail = q(".input-email");
   


    formAdd.addEventListener("submit", (event) => {
        event.preventDefault();
            
          
       
        
        const newUser = Object.create(data[0]);
        newUser.name = newName.value;
        newUser.phone = newPhone.value;
        newUser.email = newEmail.value;
        
        data.push(newUser);
        render(list, data);
        });
        
  
  render(list, data);


  input.addEventListener("keyup", (event) => {
    
    event.preventDefault();
    const value = input.value.toLowerCase();           ///voglio leggere questo valore per filtrarlo tra i miei dati.
    const results = data.filter((element, index) =>        ////filter è un metodo degli array che crea un nuovo array con tutti gli elementi che passano un test. Vuole una callback
                                                               //non è altro che un ciclo che cicla tutti i dati secondo un filtro per capire se possono essere messi dentro il nuovo array
                                                              //devo controllare se una stringa è contenuta in un'altra stringa
     
       element.name.toLowerCase().search(value) > -1 ||                 /// se il valore di name dentro l'elemento è maggiore di -1 allora fai valere il filtro                   
       element.email.toLowerCase().search(value) > -1
    );      
    
    render(list, results);
});

});

    

    