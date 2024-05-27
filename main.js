// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.getElementsByClassName('like-glyph')
const array = Array.from(hearts)
for (const element of array) {
  element.addEventListener('click', (e) => {
    let heart = e.target.innerHTML
    mimicServerCall()
    .then((data) => {
     if (data && heart === EMPTY_HEART) {
      e.target.innerHTML = FULL_HEART
      e.target.className = 'activated-heart'
     } else if (data && heart === FULL_HEART) {
      e.target.innerHTML = EMPTY_HEART
      e.target.className = ''
     }
    
    })
    .catch((error)=>{
      let message = document.getElementById('modal')
      message.className = ""
      message.innerHTML = error
      setTimeout(() => { message.className = "hidden"}, 3000)
     // console.log(error)

    })
  
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
