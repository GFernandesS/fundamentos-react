import React, {cloneElement} from 'react'
export default props => {
    if(props.isVisible)
        return (React.Children.map(props.children, x => cloneElement(x, {...props})));
    
    return false;
}