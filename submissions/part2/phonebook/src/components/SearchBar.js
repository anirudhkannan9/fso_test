import React from 'react'

const SearchBar = (props) => {
    const search = props.search
    const updateSearch = props.updateSearch
    return (    
        <input
        value={search}
        onChange={updateSearch}
        />
    )
}


export default SearchBar