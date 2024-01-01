import React from 'react'
import '../assets/css/component/activity.css'
const Activity = () => {
    return (
        <>
            <section className="about-part activity-part">
                <div className="container">
                    <div className="about-part-details 
            esg-part-details text-center">
                        <h2>Community and activities</h2>
                        <div className="about-part-content">
                            <div className="breadcrumbs">
                                <div className="container">
                                    <ol className="breadcrumb">
                                        <li><a href="/home" style={{color:'white'}}>home</a><span style={{color:'white'}}>//</span></li>
                                        <li><a href="/commitment-to-esg" style={{color:'white'}}>Community and activities</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="home-about-us we-do section-header text-center ">

                <div className="esg-head heading-font-size background-clip">
                    Community And Other Activities
                </div>

                <div className="about-our-approach we-do section-header text-center section-bg-color">
                    <h2 className="about-our-approach-head heading-font-size">Mission-Electrical-Empire</h2>

                    <p className="about-our-approach-content">I can help you in establishing your empire in the electrical field! I, Kishor Kulkarni, the founder of "Mission Electrical Empire," aim to guide one lakh people in the next three years to build their own empire in the electrical sector. I have 25 years of experience in the electrical field.</p>

                    <a href='https://mission-electrical-empire.dotcompal.co/Mission-Electrical-Empire'><button type="button" class="slide-btn-updated slide-btn">
                        explore more
                    </button></a>
                </div>
                <div className="about-our-approach we-do section-header text-center">
                    <h2 className="about-our-approach-head heading-font-size">Current-Care-Classes</h2>
                    
                    <p className="about-our-approach-content">Dear student friends, we welcome you and greet you. In the current modern era, the basic needs of food, clothing, and shelter have become essential, and electricity is a vital requirement in daily life. No task can be accomplished without electricity, and it holds immense importance in every field. As urbanization, industrialization, computerization, and technological advancements continue to grow, the demand for electricity is increasing rapidly. Without it, many activities remain incomplete. To meet this growing demand, there is an urgent need for skilled professionals in the field of electricity who can use this valuable resource efficiently. The use of electricity needs to be optimized according to the requirements, and for this, skilled and experienced workers in the electrical field are essential. Fulfilling this need is also a pressing requirement of our time.</p>

                    <a href='https://mission-electrical-empire.dotcompal.co/Current-Care-Classes'><button type="button" class="slide-btn-updated slide-btn">
                        explore more
                    </button></a>
                </div>

            </section>

        </>
    )
}

export default Activity