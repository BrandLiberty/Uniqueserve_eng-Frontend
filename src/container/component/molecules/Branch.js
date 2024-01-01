import React from 'react';
import styles from '../../assets/css/branches.module.css'
import '../../assets/css/component/branches.css'
import Card from './Card';

const Branch = () => {
  const numberOfCards = 14; // Define the number of cards you want to display

  const addressArr = [{
    name: 'Amit Belsarkar',
    address : 'Shed No 2, Khedekar Nagar, Nawale Hospital Road, Narhe,Pune411041',
    location : 'Pune'
  },{
    name: 'Aniket Lengade',
    address : 'Chatrapati Shivaji Maharaj Chouk, Talangdage,Tal. Hatkanangle, Dist. Kolhapur, 416236',
    location : 'Kolhapur'
  },{
    name: 'Sachin chatur',
    address : 'Mukteshwar Nagar,Sinner- Shirdi road,Sinnar, Nashik,422103',
    location : 'Nashik'
  },{
    name: 'Suraj dhonge',
    address : 'A/p Kasargatta, Tal. Pombhurna, Dist. Chandrapur, 442918',
    location : 'Chandrapur'
  },{
    name: 'Kuldeep khandeka',
    address : ' A/P Pethitbarpur, Tal.daryapur, Dist. Amravati.444803',
    location : 'Amaravati'
  },{
    name: 'Ankush Shinde',
    address : 'Shop No 2 Sai Regency CHS, Plot No 168,Sector 17, Ulwe, Tal. Panvel, Dist. Raigad.',
    location : 'Navi Mumbai'
  },{
    name: 'Ankush Mottemvar',
    address : 'Dindayal upadhyay ward, Near Chatrapati Shivaji Maharaj Satue, Pandharkawada,Tal. Kelapur, Dist. Yawatmal',
    location : 'Yavatmal'
  },{
    name: 'Prakash Shinde',
    address : 'Shinde chawl, Aware Building 1/4,Lal chouki,Kalyan, 421301',
    location : 'Kalyan'
  },{
    name: ' Pratik Mankar',
    address : 'Hanuman Nagar, Ward No 4,Pulgaon, Tal. Deoli,Dist. Wardha.',
    location : 'Wardha'
  },{
    name: 'Suraj Shelar',
    address : ' A/P Pimpari, Nirmal, Tal. Rahata,Ahamad Nagar, 423107',
    location : 'Ahamdnagar'
  },{
    name: 'Vijay Bagule',
    address : ' Plot No 33, Gate No 106, Mayur housing society, Near Vatika Ashram, Jalgaon,425002',
    location : 'Jalgaon'
  },{
    name: 'Akash pawar',
    address : 'H.No 163/C, A/P pophali, Pawarwadi, Tal. Chiplun Dist Ratnagiri, 415601',
    location : 'Ratnagiri'
  },{
    name: 'Mahendra Tale',
    address : 'Plot No 40,Gate No 156,Akshad Park Phase II, Kumbhephal, Chatrapati Sambhaji Nagar, 431001',
    location : 'Chatrapati sambhaji Nagar'
  },{
    name: 'Kiran Mithbavka',
    address : '208, A wing Parishram Hsg society, Govandpada, Mulund east, Mumbai 40081',
    location : 'Mumbai '
  }]

  const cards = addressArr.map((info , index)=><Card key={index} index={index} info={info}/>) 
 

  return (
    <>
      <section className="about-part branches-part">
        <div className="container">
          <div className="about-part-details 
        branches-part-details text-center">
            <h2>Our Branches</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li><a href="/home" style={{ color: 'white' }}>home</a><span style={{ color: 'white' }}>//</span></li>
                    <li><a href="/commitment-to-esg" style={{ color: 'white' }}>Our Branches</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className={styles.container}>
        <div className="esg-head heading-font-size background-clip" style={{textAlign:`center`}}>
          OUR BRANCHES
        </div>
        <div className={styles.firstSection}>
          {/* Content of the first section */}
          <iframe onScrollCapture={null} onScroll={()=>null} src="https://www.google.com/maps/d/u/0/embed?mid=1I8eG8SsOT94QL59kCx-6UT1HLb1banw&ehbc=2E312F&noprof=1" width="100%" height="100%"></iframe>
        </div>
        <div className={styles.secondSection}>
          {/* Cards in the second section */}
          {cards}
        </div>
      </div>
    </>
  );
};

export default Branch;
