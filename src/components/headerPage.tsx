import React from 'react'
import logo from "../assets/images/star-logo.svg";
import arrowR from "../assets/images/arrow-r.svg";


const HeaderPage = () => {
    return (
        <div className='header' style={{
            background: "#fff",
            height: "68px",
            display: 'flex',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '50px',
        }}>
            <div style={{
                padding: 13,
                boxSizing: 'border-box',
                width: '219px',
            }}>
                <img src={logo} alt="Star" />
            </div>
            <div style={{
                boxSizing: 'border-box',
               paddingTop: '10px',
            }}>
            <p style={{ 
                paddingTop: "10px",
                color: '#757688',
                fontSize: '17px',
            }}> 
            Payment  <span style={{ padding: '0 5px' }}><img src={arrowR} alt="" />  </span>
            <span style={{
                color: '#040748',
                fontWeight:'500',
            }}>Credit &amp; Debit card</span></p>
            </div>
            
        </div>
    )
}

export default HeaderPage