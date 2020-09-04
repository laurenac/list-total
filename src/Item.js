import React from 'react';


const Item = ({items, onButtonSelect}) => {
    
    const renderedItems = items.exampleList.map((item, index) => {
        return (
            <div key={item.id} className="item-container">
                <button className="active" 
                onClick={()=>onButtonSelect(item, index)}
                >
                Deselect Item
                </button>
                    <h4>{item.label}</h4>
                    <span>{item.value}</span>
            </div>
        );
    });


    return (
        <div>
            <div>
            <p>hey there</p>
                {renderedItems}
            </div>
        </div>
    )
}

export default Item;