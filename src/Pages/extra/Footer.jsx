import React from 'react'
import './style.scss'

const Footer = () => {
    const FooterPage = () =>(
        <div className='FooterPage_container'>
            <h2>FooterPage is here</h2>
        </div>
    )
    return (
        <div className='FooterPage'>
            { FooterPage() }
        </div>
  )
}

export default Footer