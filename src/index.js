document.addEventListener("DOMContentLoaded", () => {
  let form =  document.querySelector('form')
  form.addEventListener('submit', (e) =>{
  e.preventDefault()
  handleTask(e.target.new_task_description.value)
  form.reset()
})
function handleTask(newTask){
  let p = document.createElement('p')
  let btn = document.createElement('button')

  btn.textContent = "x"
  btn.addEventListener("click", handleDelete)

  p.textContent = newTask
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p);
}
  function handleDelete(e){
  e.target.parentNode.remove()

}  // your code here
});
