import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

interface Props {

}

const SearchItem = (props: Props) => {
    return (
        <div>
            <div>
                <SearchIcon />
            </div>
            <InputBase placeholder="أكتشف هوياتك ..." inputProps={{ 'aria-label': 'search' }} />
        </div>
    )
}

export default SearchItem;
