'use client'

import styles from "./button.module.css";

export interface ButtonPropsPrimary {
    name:string
    width:string
    height:string
    onClick: () => void
    
}


const ButtonPrimary = ({name, width, height, onClick}:ButtonPropsPrimary) => {
    return (
        <button id= {styles["button-primary"]}
        onClick={onClick}
        style={{
            width,
            height,
        }}
        >
            {name}
        </button>
    )
}

export default ButtonPrimary;