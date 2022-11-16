import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar Gif's" 
        value={inputValue} 
        onChange={handleInputChange}/>
    </form>
  )
}
