import React from 'react';

const Receipe = ({title, calories, image, ingredients, dietLabel}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{dietLabel}</h2>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Receipe;