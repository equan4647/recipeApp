import React from 'react'
import styles from './recipe.module.css'

const Recipe =(props)=>{

    return(
        <div className={styles.res}>
            <h1>{props.title}</h1>
            <ol>
                { props.ingredients.map(ingredient =>(
                    <li key={ingredient.text}>
                        {ingredient.text}
                    </li>
                ))
                }
            </ol>
            <p>{props.calories}</p>
            <img src={props.image} alt=""/>
            
        </div>
    );
}

export default Recipe