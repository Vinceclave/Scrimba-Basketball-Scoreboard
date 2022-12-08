let homeButtons = document.querySelectorAll("#home")
let homeButtonsDecrement = document.querySelectorAll("#homes")
let guestButtons = document.querySelectorAll("#guest")
let guestButtonsDecrement = document.querySelectorAll("#guests")
let restart = document.querySelector("#restart")
let guestScore = document.querySelector("#guest-score")
let guestScoreDefault = 0
let homeScore = document.querySelector("#home-score")
let homeScoreDefault = 0

restart.addEventListener('click', function() {
    homeScoreDefault = 0
    guestScoreDefault = 0
    homeScore.textContent = homeScoreDefault
    guestScore.textContent = guestScoreDefault
})


for (let i = 0; i < homeButtons.length - 2; i++) {
  
             homeButtons[0].addEventListener('click', function() {   
             homeScoreDefault += 1
             homeScore.textContent = homeScoreDefault
          })
             homeButtons[1].addEventListener('click', function() {   
             homeScoreDefault += 2
             homeScore.textContent = homeScoreDefault
          })
             homeButtons[2].addEventListener('click', function() {   
             homeScoreDefault += 3
             homeScore.textContent = homeScoreDefault
          }) 
          
}

for (let i = 0; i < homeButtonsDecrement.length - 2; i++) {
    
    homeButtonsDecrement[0].addEventListener('click', function() {   
    homeScoreDefault -= 1
    homeScore.textContent = homeScoreDefault
 })
    homeButtonsDecrement[1].addEventListener('click', function() {   
    homeScoreDefault -= 2
    homeScore.textContent = homeScoreDefault
 })
    homeButtonsDecrement[2].addEventListener('click', function() {   
    homeScoreDefault -= 3
    homeScore.textContent = homeScoreDefault
 }) 
 
}





for (let i = 0; i < guestButtons.length - 2; i++) {

             guestButtons[0].addEventListener('click', function() {   
             guestScoreDefault += 1
             guestScore.textContent = guestScoreDefault
          })
             guestButtons[1].addEventListener('click', function() {   
             guestScoreDefault += 2
             guestScore.textContent = guestScoreDefault
          })
             guestButtons[2].addEventListener('click', function() {   
             guestScoreDefault += 3
             guestScore.textContent = guestScoreDefault
          }) 
}


for (let i = 0; i < guestButtonsDecrement.length - 2; i++) {
 if (guestButtonsDecrement[i] <= 0) {
        guestScoreDefault = 0
    }
    guestButtonsDecrement[0].addEventListener('click', function() {   
    guestScoreDefault -= 1
    guestScore.textContent = guestScoreDefault
 })
    guestButtonsDecrement[1].addEventListener('click', function() {   
    guestScoreDefault -= 2
    guestScore.textContent = guestScoreDefault
 })
    guestButtonsDecrement[2].addEventListener('click', function() {   
    guestScoreDefault -= 3
    guestScore.textContent = guestScoreDefault
 }) 

   
}




