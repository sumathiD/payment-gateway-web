import React from 'react'
import { Card, Col, Input, Row, Form } from 'antd';
import { Formik } from 'formik';
const CreditPage = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="CARD DETAILS" bordered={false} style={{ width: 700 }}>
        <div className='container'>
          <form>

            <div className="border">
              <div className="inputBox">
                <label>Name on Card</label>
                <input type="text" className="inputBox" />
              </div>
              <div className="inputBox">
                <label>Credit/Debit Card Number<span>*</span></label><br />
                <input type="text" className="inputBox creditwidth" />
                <span className="img"><img src="./images/images.png" /></span>
              </div>
              <div className="row">
                <div>
                  <label>Expiry Date<span>*</span></label><br />
                  <input type="text" placeholder='Valid Through(MM/YY)' className="expiry inputBox " />
                </div>
                <div className='cvv'>
                  <label>CVV<span>*</span></label><br />
                  <input type="text" className="inputBox" />
                </div>
              </div>

            </div>

            <p>Fields marked with * are mandatory</p>
            <input type="submit" value="Reset"></input>
            <input type="submit" value="Proceed"></input>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default CreditPage