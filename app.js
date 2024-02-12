const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function transistionPage(){ //transisitons on button click
    for(let i =0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let curButton = document.querySelectorAll('.active-btn');
            curButton[0].className = curButton[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e)=>{
        
        const id = e.target.dataset.id; 
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            }) 
            

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            
            const targetElement = document.getElementById(id);
            targetElement.classList.add('active');
        }
    })


}



transistionPage();  