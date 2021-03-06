import React from 'react';
import {Button, Col} from 'react-bootstrap/lib/';

const selectItemsPerPageButtons = ({options, onOptionSelected, selectedValue, allValue}) => {
    return (
        <Col sm={12} >
            {options.map((option) => {
                return <Button key={option} onClick={onOptionSelected} bsStyle={selectedValue === option ? 'primary' : 'default'}>{option}</Button>
            })}
            {allValue ? <Button key={allValue} onClick={onOptionSelected} bsStyle={selectedValue === allValue ? 'primary' : 
            'default'}>All</Button> : false}
        </Col>
    )
}

export default selectItemsPerPageButtons;