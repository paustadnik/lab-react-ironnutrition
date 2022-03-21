import { Input } from 'antd'
import { useState } from 'react'

export function Search({setlistOfFoods}) {
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setlistOfFoods((previousFoods) => {
            return previousFoods.filter((food) => {
                return food.name === searchInput
            })
        })
    }

    return (
        <form onSubmit={handleSearch}> Search:
            <Input value={searchInput} type='text' onChange={(e) => setSearchInput(e.target.value)} />
        </form>
    )
}