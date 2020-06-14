let progres = document.querySelector('.progress');
window.addEventListener('scroll', progreScrol);


function progreScrol(e){
    let windSlroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windSlroll / windowHeight * 100;

        progres.style.width = per +'%';
        console.log(windowHeight)
}