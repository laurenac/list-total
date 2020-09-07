import React from 'react';


const Item = ({item, onButtonSelect, inactive}) => {    
    return (
            <div className={ `item-container ${inactive ? "inactive" : "" }`} >
                <button 
                className={`${inactive ? "inactive" : "" }`} 
                onClick={()=>onButtonSelect(item)}
                >
                Deselect Item
                </button>
                <h4>{item.label}</h4>
                <span>{item.value}</span>
            </div>
        );
}

export default Item;