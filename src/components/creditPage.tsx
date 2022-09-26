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
                {/* <span className="img"> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvKRme09fZczEI27dK0SboCY_I6-9Ndkaww&usqp=CAU"
                  style={{ width: '40px', height: '40px' }}
                />

                <img src="https://banner2.cleanpng.com/20180403/qte/kisspng-mastercard-credit-card-visa-payment-service-mastercard-5ac3fae6d9ece0.7626666215227931908926.jpg"
                  style={{ width: '60px', height: '40px' }}
                />
                {/* </span> */}
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
            <div className="paraflex">
              <div className='para'>Fields marked with * are mandatory</div>
              <input type="button" value="Reset" className="cmn_btn reset_btn" ></input>
              <input type="button" value="Proceed" className="cmn_btn procedd_btn"></input>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default CreditPage