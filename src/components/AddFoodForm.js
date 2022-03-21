import { Input, Button } from 'antd'
import { useState } from 'react'
import { v4 } from "uuid";

export function AddFoodForm( {setlistOfFoods} ) {
    const [nameInput, setNameInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    const [caloriesInput, setCaloriesInput] = useState('')
    const [servingsInput, setServingsInput] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setlistOfFoods((previousFoods) => {
            return [
                {   
                id: v4(),
                name: nameInput,
                image: imageInput,
                calories: caloriesInput,
                servings: servingsInput,
                },
                ...previousFoods,
            ]
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <Input value={nameInput} type='text' onChange={(e) => setNameInput(e.target.value)} />
            </label>
            <label>
                Image:
                <Input value={imageInput} type='text' onChange={(e) => setImageInput(e.target.value)} />
            </label>
            <label>
                Calories:
                <Input value={caloriesInput} type='text' onChange={(e) => setCaloriesInput(e.target.value)} />
            </label>
            <label>
                Servings:
                <Input value={servingsInput} type='number' onChange={(e) => setServingsInput(e.target.value)} />
            </label>
            <button type='submit'>Create</button>
        </form>
    )
}