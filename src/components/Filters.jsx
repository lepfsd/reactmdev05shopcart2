import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'
export function Filters () {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const handleChangeMinPrice = (event) => {
        
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>price</label>
                <input 
                    type="range" 
                    name="price" 
                    id={minPriceFilterId} 
                    min='0' 
                    max='1000' 
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                 <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>all</option>
                    <option value='beauty'>beauty</option>
                    <option value='fragrances'>fragrances</option>
                    <option value='furniture'>furniture</option>
                    <option value='groceries'>groceries</option>
                </select>    
            </div>
        </section>
    )
}