import css from './FilterBtn.module.css';
import {CiFilter} from 'react-icons/ci'


export const FilterBtn = ({handleSelectClick}) => {
    return (
        <button onClick={handleSelectClick} className={css.btn}><CiFilter size={24} color='#888' />Filters</button>
    )
};