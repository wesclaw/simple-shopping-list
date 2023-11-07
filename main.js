const item_form = document.getElementById('item-form')
const form_input = document.querySelector('.form-input')
const btn_clear = document.querySelector('.btn-clear')
const addedItems = new Set()
item_form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const inputValue = form_input.value
  if(!inputValue){
    alert('please enter a list item')
    return
  }
  if(addedItems.has(inputValue)){
    alert('this item was already added')
    return
  }
  const item_list = document.getElementById('item-list')
  const remove_item = document.createElement('button')
  remove_item.classList.add('remove-item')
  remove_item.textContent = 'x'
  const li_el = document.createElement('li')
  li_el.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
  addedItems.add(li_el.textContent)
  item_list.append(li_el)
  li_el.append(remove_item)
  form_input.value = ""
  btn_clear.style.display = 'block'
  // form_input.addEventListener('keyup',()=>{
  //   const item_list = document.querySelectorAll('.items.children')
  //   console.log(item_list)
  // })
  remove_item.addEventListener('click',()=>{
    li_el.remove()
    addedItems.clear()
  })
  btn_clear.addEventListener('click',()=>{
     li_el.remove()
     addedItems.clear()
  })
})
