 const notes = document.querySelector('.notes');
 const mainPage = document.querySelectorAll('.main-page');
 const noteBtn = document.getElementById('noteBtn');
 const returnBtn = document.getElementById('return');
 const nav = document.querySelector('.main-page');

export function showView(){
    notes.style.display = "none";
    noteBtn.addEventListener('click',(e)=>{
        notes.style.display ="block";
        Array.from(mainPage).forEach(page =>{
            page.style.display = 'none';
        });
});   
}
export function returnView(){
    returnBtn.onclick = ()=>{
        notes.style.display = "none";
        Array.from(mainPage).forEach(page=>{
            page.style.display = "block";
            nav.classList.add('main-page');
        });
    }
}
