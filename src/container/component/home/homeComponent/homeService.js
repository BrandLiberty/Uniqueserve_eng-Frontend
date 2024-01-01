import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../assets/css/component/home/homeComponent/homeService.css'


const HomeService = () => {

    const navigate = useNavigate()
    const [index, setIndex] = useState(1)

    const content1 = (<div className="home-service-text">
        <h3 className='home-service-heading'>Our Services</h3>
        <h2>
            <a href="#">Civil Engineering</a>
        </h2>
        <p>
            Our civil engineering solutions aim not only for structural integrity but also for eco-conscious designs. We undertake projects that prioritize sustainable materials, green infrastructure, and environmentally responsible construction practices.
        </p>

    </div>)
    const content2 = (<div className="home-service-text">
        <h3 className='home-service-heading'>Our Services</h3>
        <h2>
            <a href="#">Electrical Engineering</a>
        </h2>
        <p>
            Our electrical engineering services cover a wide spectrum, including power generation, distribution, and renewable energy solutions. We design systems that optimize energy usage and harness the power of sustainable resources.
        </p>

    </div>)

    const content3 = (<div className="home-service-text">
        <h3 className='home-service-heading'>Our Services</h3>
        <h2>
            <a href="#">Electronic Engineering</a>
        </h2>
        <p>
            From circuit design to embedded systems, our electronic engineering expertise encompasses creating efficient and innovative electronic solutions that drive technological advancements while considering their environmental and societal impacts.
        </p>

    </div>)
    const content4 = (<div className="home-service-text">
        <h3 className='home-service-heading'>Our Services</h3>
        <h2>
            <a href="#">Mechanical Engineering</a>
        </h2>
        <p>
            In the realm of mechanical engineering, we excel in designing, analyzing, and optimizing mechanical systems. Our focus on sustainability ensures that our solutions are energy-efficient and eco-friendly.
        </p>

    </div>)
    const contentArr = [content1, content2, content3, content4]

    const handleIndex = (i) => {
        setIndex(i)
    }

    const handleClick = (e) => {
        if (window.innerWidth <= 630) {
            //console.log('pressed')
            navigate('/services')
        }
    }

    return (
        <section className='home-service-section'>
            <div id="picture" className={`section background${index}`}>

                <div className="section-head">
                    <div className="section-left">
                        <div className={`content-${index}`}>{contentArr[index - 1]}</div>
                        <a href='/services'>
                            <button type="button" class="slide-btn">
                                explore more
                            </button>
                        </a>
                    </div>
                    <div className="section-right">
                        <div className={`right-panel-link  ${(index === 1) ? 'right-panel-link-active' : ''}`} onMouseEnter={() => handleIndex(1)} onClick={e => { handleClick(e) }}>Civil Engineering</div>
                        <div className={`right-panel-link  ${(index === 2) ? 'right-panel-link-active' : ''}`} onMouseEnter={() => handleIndex(2)} onClick={e => { handleClick(e) }}>Electrical Engineering</div>
                        <div className={`right-panel-link ${(index === 3) ? 'right-panel-link-active' : ''}`} onMouseEnter={() => handleIndex(3)} onClick={e => { handleClick(e) }}>Electronic Engineering</div>
                        <div className={`right-panel-link  ${(index === 4) ? 'right-panel-link-active' : ''}`} onMouseEnter={() => handleIndex(4)} onClick={e => { handleClick(e) }}>Mechanical Engineering</div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HomeService