import React from 'react'

const TitledList = ({items, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {items? items.map((item, i) => <li key={`item${i}`}>{item}</li>):''}
            </ul>
        </div>
    )
}

export default TitledList;