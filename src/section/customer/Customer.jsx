import React from 'react'
import './customer.css'
import customer_bg from '../../assets/images/customer_bg.png'
import customer_shape1 from '../../assets/images/customer_shape_1.png'
import customer_shape2 from '../../assets/images/customer_shape_2.png'
import customer_img from '../../assets/images/man_dp1.jpg'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'

const Customer = () => {
  return (
    <>
      <section id="customer">
        <div className="container">
            <div className="customer_main">
                <div className="customer_images">
                     <img src={customer_img} alt="Not Found"/>
                </div>

                <div className="customer_content">
                     <Heading title= 'What We Do?' titleclass='customer_heading'/>
                     <Paragraph text='We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences.' textclass='customer_para'/>
                     <div className='customer_story'>
                          <Heading title='Understand whole customer story' titleclass='customer_story_head'/>
                          <span>-</span>
                     </div>

                     <Paragraph text='Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.' textclass='customer_para2'/>

                     <div className='customer_programs'>
                          <Heading title='Build trust and loyalty programs' titleclass='customer_programs_head'/>
                          <span>+</span>
                     </div>
                     <div className='customer_data'>
                          <Heading title='Analyze and optimize with data' titleclass='customer_data_head'/>
                          <span>+</span>
                     </div>
                </div>
            </div>
        </div>

          <div className="shape">
              <div className="customer_shape_1">
                  <img src={customer_bg} alt="Not Found" />
              </div>

              <div className="customer_shape_2">
                  <img src={customer_shape1} alt="Not Found" />
              </div>

              <div className="customer_shape_3">
                  <img src={customer_shape2} alt="Not Found" />
              </div>

          </div>
      </section>
    </>
  )
}

export default Customer
