let row = 6;
let col = 8;
let seatContainer = document.getElementsByClassName("seatContainer")
let screen = document.getElementsByClassName("screen")
let seatNumList=[];





let booking = (event, i, j) =>{
    if(event.target.classList.contains("seat")){
    event.target.classList.replace("seat", "occuppied")
    seatNumList.push(i*8+j+1)
    }else{
    event.target.classList.replace("occuppied","seat")
    let idx = seatNumList.indexOf(i*8+j+1)
    seatNumList.splice(idx, 1)
    }
    getMovie();
}




for (let i=0; i<row; i++){
    let div = document.createElement('div')
    div.classList.add("row");

    
    for (let j=0; j<col; j++){
        let span = document.createElement('span')
        span.classList.add("seat")
        div.appendChild(span) 
        span.addEventListener('click',(event)=>booking(event,i,j))
    }
    seatContainer[0].insertBefore(div, screen[0].nextSibling)
}

  //스크린 뒤의 숨겨진 sibling앞에 넣어라
// seatContainer[0]===screen[0].parentNode



let movie = document.getElementById('movie')
let getMovie = () => {
    let movieTitle = movie.value
    // console.log(movieTitle)
    let hlight = document.getElementsByClassName("hlight")
    console.log(seatNumList.length)
    hlight[0].innerHTML = seatNumList.length
   

    hlight[1].innerHTML = seatNumList.length*movieTitle
        

}
movie.addEventListener('change', getMovie)

