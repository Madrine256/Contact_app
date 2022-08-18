const searchIcon = document.querySelector('#search-icon'),
        searchContainer = document.querySelector('.search-container'),
        prevBtn = document.querySelector('.fa-chevron-left'),
        settings_elipsis = document.querySelector('#settings'),
        accountBar = document.querySelector('.account'),
        add_to_contact_button = document.querySelector('#add-contact-icon'),
        footer_nav = document.querySelectorAll('.footer-nav .nav li a'),
        buttons = document.querySelectorAll('.btns-container button'),
        input_field = document.querySelector('.input-group #number'),
        green_callButton = document.querySelector('.btn-call'),
        add_contact_log = document.querySelector('.add_contact_log');

//display search page when search icon is clicked;

        searchIcon.addEventListener('click', ()=>{
            searchContainer.style.right = '0px';
        });
        prevBtn.addEventListener('click',()=>{
            searchContainer.style.right = '-300px';
        });
        settings_elipsis.addEventListener('click', ()=>{
           accountBar.style.right = '0px';
           document.addEventListener('click', (e)=>{
            //console.log(e.target)
                if(!settings_elipsis.contains(e.target)){
                    accountBar.style.right = '-250px';
                }
           })   
        });

       //  ? buttons 
       buttons.forEach((btn)=>{
        btn.addEventListener('click', inputNumber)
    });
    add_to_contact_button.addEventListener('click', addContact);

  // end of search opener
  footer_nav.forEach((list, index,acc)=>{
    list.addEventListener('click', (e)=>{
        acc.forEach(activeBtn => {
            activeBtn.classList.toggle('active-list', activeBtn === list);
        })
    })
  });

function inputNumber(e){
    const numberClicked = e.currentTarget.dataset.index;
    input_field.value += numberClicked;
        add_to_contact_button.style.display = 'inline-block'
}
    input_field.addEventListener('input', ()=>{
        if(isNaN(input_field.value)){ 
            input_field.value = "";
        }else{
            input_field.value;
            add_to_contact_button.style.display = 'inline-block'
        }
        
    });
green_callButton.onclick = ()=>{
    input_field.value;
    console.log(input_field.value);
    const caller_container = document.querySelector('.call-div');
    if(input_field.value === "") return;
    
    caller_container.style.display = 'block';

   const  red_endCall_btn = document.querySelector('.navigation-tabs .last-nav');

   red_endCall_btn.addEventListener('click', ()=>{
    caller_container.style.display = 'none';
   });

   const number_dailing = document.querySelector('#number-called-on');
   number_dailing.innerHTML = input_field.value;
};

  function addContact(){
    input_field.value;
    add_contact_log.style.bottom = '10px';
    const overlay_container = document.querySelector(' .overlay_container');
    overlay_container.style.left = '0px';

    

    const create_contact = document.querySelector('#create_contact');
    create_contact.onclick = ()=>{
        console.log(input_field.value)
    }

    overlay_container.onclick = (e)=>{
        e.currentTarget.style.left = '-350px';
    }
  }