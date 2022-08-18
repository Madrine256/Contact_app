const searchIcon = document.querySelector('#search-icon'),
        searchContainer = document.querySelector('.search-container'),
        prevBtn = document.querySelector('.fa-chevron-left'),
        settings_elipsis = document.querySelector('#settings'),
        accountBar = document.querySelector('.account');

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
       
  // end of search opener

  const footer_nav = document.querySelectorAll('.footer-nav .nav li a');
  footer_nav.forEach((list, index,acc)=>{
    list.addEventListener('click', (e)=>{
        acc.forEach(activeBtn => {
            activeBtn.classList.toggle('active-list', activeBtn === list);
        })
    })
  });

//  ? buttons 

const buttons = document.querySelectorAll('.btns-container button'),
        numberInput = document.querySelector('.input-group #number'),
        green_callButton = document.querySelector('.btn-call');
        buttons.forEach((btn)=>{
            btn.addEventListener('click', inputNumber)
        })
function inputNumber(e){
    const numberClicked = e.currentTarget.dataset.index;
                numberInput.value += numberClicked;
}

green_callButton.onclick = ()=>{
    numberInput.value;
    console.log(numberInput.value);
    const caller_container = document.querySelector('.call-div');
    if(numberInput.value === "") return;
    
    caller_container.style.display = 'block';

   const  red_endCall_btn = document.querySelector('.navigation-tabs .last-nav');

   red_endCall_btn.addEventListener('click', ()=>{
    caller_container.style.display = 'none';
   });

   const number_dailing = document.querySelector('#number-called-on');
   number_dailing.innerHTML = numberInput.value;
}