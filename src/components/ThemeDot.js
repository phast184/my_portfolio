import React from 'react';

const ThemeDot = ({id, mode}) => {
    return <>
    <div className="theme-dot" data-mode = {mode} id={id}></div>
    </>
}

export default ThemeDot;