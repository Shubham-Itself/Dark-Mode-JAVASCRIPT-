const lightMode = document.querySelector('.fa-sun')
const body =  document.body
const textWhite2 = document.querySelector('.main-text')
const darkMode = document.querySelector('.fa-moon')



const textWhite = document.querySelector('.side-nav')


function turnDark(){
    const red = 0
    const green = 0
    const blue = 0

    const blackBtn = `rgb(${red} , ${green} , ${blue})`
    return blackBtn
}


function whiteBody(){
    const red = 255
    const green = 255
    const blue = 255

    const textWhite2 = `rgb(${red} , ${green} , ${blue})`
    return textWhite2
}

darkMode.addEventListener('click' , function(){
    const blackColor = turnDark()
    
    body.style.background = blackColor
    const whiteText = whiteBody()
    textWhite.style.color = whiteText
    textWhite2.style.color = whiteText
    
    // console.log(blackColor)

})



// lightMode.addEventListener('click' , function(){
//     const whiteText = whiteBody()
//     textWhite.style.color = whiteText
//     textWhite2.style.color = whiteText
// })

lightMode.addEventListener('click' , function(){
    const dbl = whiteBody()
    const blackColor = turnDark()
    body.style.background = dbl
    textWhite.style.color = blackColor
    textWhite2.style.color = blackColor

})


