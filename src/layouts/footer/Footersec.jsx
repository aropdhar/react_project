import React from 'react'
import './foteer.css'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import logo2 from "../../assets/images/Logo2.png"
import { Link } from 'react-router-dom'

const Footersec = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
            <div className="footer_main">

              <div className="footer_card">
                 <img src={logo2} alt="Not Found" />
                 <Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." textclass="footer_para"/>
              </div>

              <div className="footer_card">
                 <Heading title="Features" titleclass="footer_heading"/>
                 <Link to="/" className='footer_link'>Home</Link>
                 <Link to="/business" className='footer_link'>About</Link>
                 <Link to="/customer" className='footer_link'>Benifit</Link>
                 <Link to="/" className='footer_link'>Pricing</Link>
                 <Link to="/" className='footer_link'>Blog</Link>
              </div>

              <div className="footer_card">
                 <Heading title="Products" titleclass="footer_heading"/>
                 <Link to="/" className='footer_link'>Task Management</Link>
                 <Link to="/" className='footer_link'>Company growth</Link>
                 <Link to="/" className='footer_link'>Time tracking</Link>
              </div>

              <div className="footer_card">
                 <Heading title="Support" titleclass="footer_heading"/>
                 <Link to="/" className='footer_link'>Customer service</Link>
                 <Link to="/" className='footer_link'>Accessibility</Link>
                 <Link to="/" className='footer_link'>Contact us</Link>
              </div>

            </div>

            <div className="copyright_main">
                <Paragraph text="@20201 Innovate.All rights reserved." textclass="copyright_text"/>

                <div className="copy_content">
                    <Paragraph text="Privacy policy" textclass="copyright_text" />
                    <Paragraph text="Terms & condition" textclass="copyright_text" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footersec
