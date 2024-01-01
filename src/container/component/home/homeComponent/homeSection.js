import React, { useState } from 'react'
import '../../../assets/css/component/home/homeComponent/homeSection.css'
import socialimpact from '../../../assets/images/Home-section/socialimpact.jpg'
import esg from '../../../assets/images/Home-section/ESG.jpg'
import government from '../../../assets/images/Home-section/Goverment.jpg'
const HomeSection = () => {

    const [index, setIndex] = useState(1)

    const content1 = (<div className='home-section-specific-content'>
        <h2 className="home-social-impact-head heading-font-size">Social Impact</h2>
        <p className="home-social-impact-content">
            At <span className="home-heighlight-updated">
                Uniqueserve Engineering Pvt.Ltd .</span>,

            our focus extends beyond technology. We recognize the importance of creating positive
            <span className="home-heighlight-updated"> social impact</span>
            through our work. Whether it's implementing community-focused projects, promoting diversity and inclusion within our teams, or supporting local initiatives, we aim to uplift societies where our projects are located.
        </p>

        
    </div>)

    const content2 = (<div className='home-section-specific-content'>
        <h2 className="home-social-impact-head heading-font-size">Commitment to ESG</h2>
        <p className="home-social-impact-content">
            <span className="home-heighlight-updated"> Uniqueserve Engineering Pvt.Ltd .</span>

            is committed to upholding the principles of Environmental, Social, and Governance (ESG) in every facet of our operations. We understand that our actions today shape the world tomorrow. By integrating ESG factors into our projects,

            <span className="home-heighlight-updated"> we strive to make a positive impact on the environment, society, and governance landscape.</span>
        </p>

        <a href='/commitment-to-esg'>
        <button type="button" class="slide-btn">
            explore more
        </button>
        </a>
    </div>)

    const content3 = (<div className='home-section-specific-content'>
        <h2 className="home-governance-head heading-font-size">Governance Excellence</h2>
        <p className="home-governance-content">Strong governance forms the backbone of our operations. We adhere to the highest standards of
            <span className="home-heighlight-updated"> transparency, accountability, and ethical conduct</span>. Our commitment to governance excellence ensures that our projects are managed <span className="home-heighlight-updated"> efficiently and responsibly</span>, meeting all regulatory requirements while upholding the trust of our stakeholders.</p>

        
    </div>)

    const contentArr = [content1, content2, content3]
    const imgArr = [socialimpact,esg, government]

    const handleIndex = (i) => {
        setIndex(i)
    }
    return (


        <div className="home-section" >
            <div className="home-section-container-list">
                <ul className='home-section-row'>
                    <li className='list-item1' onClick={() => handleIndex(1)}>Social Impact</li>
                    <li className='list-item2' onClick={() => handleIndex(2)}>Commitment To ESG</li>
                    <li className='list-item3' onClick={() => handleIndex(3)}>Governance Excellence</li>
                </ul>
            </div>
            <div className="home-section-container-list2">
                <div className="home-section-content">{contentArr[index - 1]}</div>
                <div className="home-section-img">
                    <img src={imgArr[index - 1]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeSection