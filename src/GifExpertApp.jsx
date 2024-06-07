import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  
    const onAddCategory = (newCategory) => {
        !filterRepeated(newCategory) ? setCategories(c => [newCategory, ...c]) : null;
    };
    

    const filterRepeated = (category) => {
        return categories.includes(category);
    };
    

    return (

        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory = { onAddCategory } />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    /> 
                ))
            }
        </>
    )
}
