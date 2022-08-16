const searchIcon = document.querySelector('#search-icon'),
        searchContainer = document.querySelector('.search-container'),
        prevBtn = document.querySelector('.fa-chevron-left');

//display search page when search icon is clicked;

        searchIcon.addEventListener('click', ()=>{
            searchContainer.style.left = '0px';
        });
        prevBtn.addEventListener('click',()=>{
            searchContainer.style.left = '-300px';
        })
  // end of search opener

  const footer_nav = document.querySelectorAll('.footer-nav .nav li a');
  footer_nav.forEach((list, index,acc)=>{
    list.addEventListener('click', (e)=>{
        acc.forEach(activeBtn => {
            activeBtn.classList.toggle('active-list', activeBtn === list);
        })
    })
  })
