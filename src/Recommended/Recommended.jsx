import React from 'react'
import './recommended.css'
import Buttons from '../components/Button'

const Recommended = ({ handleClick }) => {
    return (
        <>
            <div >
                <h2 className='recommended-title'>Recommended</h2>
                <div className='recommended-flex'>
                    <Buttons className='btns' onClickHandler={handleClick} value="" title="All" />
                    <Buttons className='btns' onClickHandler={handleClick} value="Nike" title="Nike" />
                    <Buttons className='btns' onClickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Buttons className='btns' onClickHandler={handleClick} value="Puma" title="Puma" />
                    <Buttons className='btns' onClickHandler={handleClick} value="Vans" title="Vans" />



                </div>
            </div>
        </>)
}

export default Recommended