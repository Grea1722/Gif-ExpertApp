import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setcategories([newCategory,...categories]);
  }

  return (
    <>
    <div className='form'>
      <h1>Gif Expert App</h1>
    </div>
    
    <AddCategory 
    // setCategories={setcategories}
    onNewCategory={(value)=>onAddCategory(value)}
    />
    {
      categories.map((category) => 
        (<GifGrid key = {category} category={category}/>)
      )
    }
    </>
  )
}
