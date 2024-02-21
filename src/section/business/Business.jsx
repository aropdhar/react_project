import React from 'react'
import './business.css'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import business_1 from '../../assets/images/business_1.png'
import business_2 from '../../assets/images/business_2.png'
import business_3 from '../../assets/images/business_3.png'
import Vector1 from '../../assets/images/Vector_1.png'
import Vector2 from '../../assets/images/Vector_2.png'
import Vector3 from '../../assets/images/vector_3.png'
import Vector4 from '../../assets/images/vector_4.png'


const Business = () => {
  return (
    <>
      <section id="business">
         <div className="container">

            <Heading title="We help you to go online and increase your sales" titleclass='business_heading'/> 

            <div className="business_main">
                <div className="business_card">
                    <img src={business_1}  alt="Not Found"/>
                    <Heading title='eCommerce Consulting' titleclass='card_head'/>
                    <Paragraph text='Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers.' textclass='card_paragraph' />
                </div>

                <div className="business_card">
                    <img src={business_2}  alt="Not Found"/>
                    <Heading title='Branding Strategy' titleclass='card_head'/>
                    <Paragraph text='Brands are ideas that keep growing. We think of them like machine learning. When you build a brand, you build in the power.' textclass='card_paragraph' />
                </div>

                <div className="business_card">
                    <img src={business_3}  alt="Not Found"/>
                    <Heading title='Analyse and Optimise' titleclass='card_head'/>
                    <Paragraph text='With features that let you tag and identify every action, you can see the whole story behind every unique customer.' textclass='card_paragraph' />
                </div>
            </div>
         </div>

         <div className="shape">
            <div className="business_shape_1">
                <img src={Vector1} alt="Not Found" />
            </div>

            <div className="business_shape_2">
                <img src={Vector2} alt="Not Found" />
            </div>

            <div className="business_shape_3">
                <img src={Vector3} alt="Not Found" />
            </div>

            <div className="business_shape_4">
                <img src={Vector4} alt="Not Found" />
            </div>
         </div>
      </section>
    </>
  )
}

export default Business

