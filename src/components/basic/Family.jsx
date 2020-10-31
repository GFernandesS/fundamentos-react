import React, {cloneElement} from 'react'
import FamilyMember from './FamilyMember'

export default props => {
    return (
        <React.Fragment>
            {
                props.children.map((el, i) => cloneElement(el, {...props, key: i}))
            }
        </React.Fragment>
    )
}