const item_form = document.getElementById('item-form')
const form_input = document.querySelector('.form-input')
const btn_clear = document.querySelector('.btn-clear')
item_form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(!form_input.value){
    alert('please enter a list item')
    return
  }
  const item_list = document.getElementById('item-list')
  const remove_item = document.createElement('button')
  remove_item.classList.add('remove-item')
  remove_item.textContent = 'x'
  const li_el = document.createElement('li')
  li_el.textContent = form_input.value
  item_list.append(li_el)
  li_el.append(remove_item)
  form_input.value = ""
  btn_clear.style.display = 'block'

  remove_item.addEventListener('click',()=>{
    li_el.remove()
  })
  btn_clear.addEventListener('click',()=>{
     li_el.remove()
  })
})