document.querySelector("#btn-align-left").addEventListener("click", function(){
  let content = document.querySelector("#content").value
  document.querySelector("#content").innerHTML = content
  document.querySelector("#content").style.textAlign = "left"
})

document.querySelector("#btn-align-center").addEventListener("click", function(){
  let content = document.querySelector("#content").value
  document.querySelector("#content").innerHTML = content
  document.querySelector("#content").style.textAlign = "center"
})

document.querySelector("#btn-align-right").addEventListener("click", function(){
  let content = document.querySelector("#content").value
  document.querySelector("#content").innerHTML = content
  document.querySelector("#content").style.textAlign = "right"
})

document.querySelector("#btn-bold").addEventListener("click", function(){
  let content = document.querySelector("#content").value
  document.querySelector("#content").innerHTML = content
  document.querySelector("#content").style.fontWeight = "bold"
})

document.querySelector("#btn-underline").addEventListener("click", function(){
  let content = document.querySelector("#content").value
  document.querySelector("#content").innerHTML = content
  document.querySelector("#content").style.textDecoration = "underline"
})


