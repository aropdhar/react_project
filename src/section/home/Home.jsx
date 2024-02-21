import React from 'react'
import './home.css'
import banner from "../../assets/images/image content.png"
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import shape_1 from '../../assets/images/Vector.png'
import shape_2 from '../../assets/images/Vector (2).png'
import shape_3 from '../../assets/images/Vector (1).png'
import shape_4 from '../../assets/images/Group.png'



let Para = "Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing."


const Home = () => {
  return (
    <>
       <section id="home">
            <div className="container">
                <div className="home_main">
                    <div className="home_content">
                        <Heading title='We build e-commerce solution Your business.' titleclass='heading1'/>
                        <Paragraph text={Para} textclass='para1'/>
                        <div className="btn">
                            <a href="#" className='Common_btn'>Contact Us</a>
                            <a href="#" className='btn_2'>Learn More</a>
                        </div>
                    </div>

                    <div className="home_image">
                        <img src={banner} alt="Not Found"/>
                    </div>
                </div>
            </div>

            <div className="shape_section">
                <div className="shape_1">
                     <img src={shape_1} alt="Not Found" />
                </div>
                <div className="shape_2">
                     <img src={shape_2} alt="Not Found" />
                </div>
                <div className="shape_3">
                     <img src={shape_3} alt="Not Found" />
                </div>
                <div className="shape_4">
                     <img src={shape_4} alt="Not Found" />
                </div>
            </div>
       </section>
    </>
  )
}

export default Home
