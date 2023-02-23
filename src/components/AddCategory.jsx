import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) =>{
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if(inputValue.trim().length <= 1 ) return;
      // setCategories(cats=>([inputValue,...cats]));
      onNewCategory(inputValue.trim());
      setinputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
      <input type='text' 
      placeholder='Buscar Gifs' onChange={onInputChange}
      value={inputValue}
       />
    </form>
  )
}