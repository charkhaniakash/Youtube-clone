import { Stack } from '@mui/system'
import React from 'react'
import { categories } from "../utils/constants";

// const selectedCategories = 'New';
const SideBar = ({selectedCategory,setSelectedCategory}) => (

        <Stack direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}>


            {categories.map((category)=>(
                <button  key={category.name} onClick={()=>setSelectedCategory(category.name)} className='category-btn' style={{background:category.name===selectedCategory && '#fc1503',color:'white' }}>
                    <span style={{color:category.name===selectedCategory ? 'white':'#fc1503'}}>{category.icon}</span>
                    <span style={{opacity:category.name===selectedCategory? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))}

        </Stack>

)

export default SideBar
