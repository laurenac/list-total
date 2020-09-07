import React from 'react';
import Item from './Item';

const exampleList = [
    {
        id: 1,
        label: 'Box',
        value: 3,
    },
    {
        id: 2,
        label: 'Tree',
        value: 4,
    },
    {
        id: 3,
        label: 'House',
        value: 5,
    },
    {
        id: 4,
        label: 'Cat',
        value: 3,
    }
];

class App extends React.Component {
    state = {
        deselectedItems: []
    };

    onButtonSelect = (selectedItem)=> {
        
        this.setState((state)=>{

            let newDeselectedItems = [...state.deselectedItems];

            let index = newDeselectedItems.indexOf(selectedItem.id);
            if( index === -1){
                newDeselectedItems.push(selectedItem.id);
            }
            if (index > -1) {
                newDeselectedItems.splice(index, 1);
            }

            return {deselectedItems: newDeselectedItems}
        });
    }

    
    total = ()=> {
        let payload = 0;
        
        for(let i = 0; i < exampleList.length; i++){
            if(this.state.deselectedItems.indexOf(exampleList[i].id) === -1){
                payload = payload + exampleList[i].value;
            }
        }
        
        return payload; 
    }
    
    render(){
        return (
            <div className="container">
                {
                    exampleList.map((item)=> {
                        return ( 
                            <Item
                            key={item.id}
                            item={item} 
                            onButtonSelect={this.onButtonSelect}
                            inactive={this.state.deselectedItems.indexOf(item.id) !== -1}
                            />
                        );
                    })
                }
                <hr />
                <p className="total">Total: <span>{this.total()}</span></p>
             </div>
        );
    }
    
};

export default App;