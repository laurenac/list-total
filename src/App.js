import React from 'react';
import Item from './Item';

const exampleList = [
    {
        id: 1,
        label: 'Box',
        value: 3,
        active: true
    },
    {
        id: 2,
        label: 'Tree',
        value: 4,
        active: true
    },
    {
        id: 3,
        label: 'House',
        value: 5,
        active: true
    },
    {
        id: 4,
        label: 'Cat',
        value: 3,
        active: true
    }
];

class App extends React.Component {
    state = {
        exampleList,
    };

    onButtonSelect = (selectedItem, selectedIndex)=> {
        this.setState((state)=> {
            const exampleList = state.exampleList.map((item, index) =>{
                if(index === selectedIndex){
                    return item.active = !selectedItem.active;
                } else {
                    return item;
                }
            });
            return exampleList;
        });
    }

    total = ()=> {
        let payload = 0;
        this.state.exampleList.map((item)=>{
            if(item.active) {
                return payload = payload + item.value;
            }
            return payload;
        });
        return payload; 
    }
    
    render(){
        return (
            <div>
                <Item items={this.state} onButtonSelect={this.onButtonSelect}/>
                {this.total()}
             </div>
        );
    }
    
};

export default App;