import React from 'react';

const Filtration = ({ getFiltredData, filterValue, setFilterValue, clearFiltredData }) => {
    return (
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Find user" 
                value={filterValue}
                onChange={(event) => {setFilterValue(event.target.value)}}
                onInput={() => {getFiltredData(filterValue)}}
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                onClick={() => {clearFiltredData(filterValue)}}
            >
                Clear
            </button>
        </div>
    )
}

export default Filtration;