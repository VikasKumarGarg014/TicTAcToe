console.log('Welcome to tick tace toe')
// alert('Welcome to tick tace toe');

// const music=new Audio("music.mp3");
// const audioturn=new Audio("ting.mp3");
// let gameover=new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check Win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =
        [   // horizontly
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            // veritically
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            // Diagonally
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
        //     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        // 
 }
    })
}

// Main Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            // audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
        // else{
        //     alert("WOn")
        // }

    })
})

// Add onclicklistner to reset button
Reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " "
    });
    turn = "X";
    isgameover = false

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})