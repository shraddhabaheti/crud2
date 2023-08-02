import "./Design.css";
import Button from "react-bootstrap/Button";
import ve from "../src/Asset/img/Ve.png";
import Card from "react-bootstrap/Card";
import image from "../src/Asset/img/image.png";
import elips from "../src/Asset/img/Ellipse.png";
import sha from "../src/Asset/img/sha.png";
// import reactangle from "../src/Asset/img/Rectang.png";
// import reactangle1 from "../src/Asset/img/Rectang.png";
// import vector from "../src/Asset/img/Vector.png";
import vector1 from "../src/Asset/img/Vector1.png";
import Vector2 from "../src/Asset/img/Vector2.png";
import card1 from "../src/Asset/img/card1.png";
import card2 from "../src/Asset/img/card2.png";
import card3 from "../src/Asset/img/card3.png";
import cilent from "../src/Asset/img/cilent.png";
import retctangle1 from "../src/Asset/img/Rectangled.png";
import retctangle2 from "../src/Asset/img/Rectanglec.png";
import retctangle3 from "../src/Asset/img/Rectanglef.png";
import circle from "../src/Asset/img/cirlce.png";
import circle1 from "../src/Asset/img/Group.png";
import groupsp from "../src/Asset/img/Groupsp.png";
import star from "../src/Asset/img/star.png";
import group5 from "../src/Asset/img/group2.png";
import group2 from "../src/Asset/img/Group5.png";
import group3 from "../src/Asset/img/Group6.png";
import group4 from "../src/Asset/img/group4.png";
import logo1 from "../src/Asset/img/logo1.png";
import logo2 from "../src/Asset/img/logo2.png";
import logo3 from "../src/Asset/img/logo3.png";
import calander1 from "../src/Asset/img/calander1.png";
import calander2 from "../src/Asset/img/calander2.png";
import line from "../src/Asset/img/Line.png";
import elip from "../src/Asset/img/Ellip.png";
import vert from "../src/Asset/img/Vert.png";
import phone from "../src/Asset/img/phone.png";
import union from "../src/Asset/img/Union.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import facebook from "../src/Asset/img/facebook.png";
import linkdin from "../src/Asset/img/iinkdin.png";
import insta from "../src/Asset/img/insta.png";
import twitter from "../src/Asset/img/twitter.png";
import upcoming from "../src/Asset/img/upcoming.png";
import upcoming2 from "../src/Asset/img/upcoming2.png";
// import left from '../src/Asset/img/Left.png'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Clock from "./Clock";
import { useEffect, useState } from "react";
import Clock1 from "./Clock1";
import moment from "moment";
import member1 from '../src/Asset/img/mamber1.webp'
//import right from '../src/Asset/img/arrow right.png'

function Design() {
  const [year,setYear]=useState();
  const [timerDays,setTimerDays]=useState();
  const [timerHoures,setTimerHours]=useState();
  const [timerMinute,setTimerMinute]=useState();
  const [timerSecond,setTimerSecond]=useState();
  const [timerDays1,setTimerDays1]=useState();
  const [timerHoures1,setTimerHours1]=useState();
  const [timerMinute1,setTimerMinute1]=useState();
  const [timerSecond1,setTimerSecond1]=useState();
  let interval;
  let inetr;
  const startTime=()=>{
    const countDownDate= new Date( 'oct 2022').getTime();
    inetr=setInterval(()=>{
      const now = new Date().getTime();
      const distence =    now - countDownDate;
      const day= Math.floor(distence / (24 * 60 * 60 * 1000));
      const hour= Math.floor((distence % (24 * 60 * 60 * 1000))/(1000 * 60 * 60));
      const minute= Math.floor((distence % (60 * 60 * 1000))/(1000 * 60));
      const second= Math.floor((distence % (60 * 1000))/(1000));
      if(distence < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays1(day);
        setTimerHours1(hour);
        setTimerMinute1(minute);
        setTimerSecond1(second);
      }
    })
  }
  const startTimer=()=>{
    
  const dateFuture = new Date(new Date('2029-07-20T21:30:00').getFullYear() +1, 0, 1);
  interval = setInterval(()=>{
    var dateNow = new Date();
    var seconds = Math.floor((dateFuture - (dateNow))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours-(days*24);
   minutes = minutes-(days*24*60)-(hours*60);
   seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
       
 
    })
  }
  useEffect(()=>{
    startTimer();
    startTime();
  })
  
  return (
    <div className="div_overfollow">
      <div className="head-container">
        <div>
          <img src={image} className="image" />
        </div>
        <div className="top-container">
          <div className="top-container1">
            <div>
              <div className="become_container">
                <img src={elips} className="imageelips" />

                <h2 className="hbecome">Become</h2>
                <h1 className="hsolar">A Solar Entrepreneur</h1>
              </div>
            </div>
            <div>
              <button className="btn-enroll">Enroll Now</button>
            </div>
          </div>

          <div className="imgesha">
            <img src={sha} className="wind-image" />
          </div>
        </div>
      </div>
          <Clock timerDays={timerDays} 
          timerHoures={timerHoures} 
          timerMinute={timerMinute} 
          timerSecond={timerSecond}
          timerDays1={timerDays1}
          timerHoures1={timerHoures1}
          timerMinute1={timerMinute1}
          timerSecond1={timerSecond1}
          />
      <div className="div2">
       
        <div className="div_reg">
          {/* <div className="div_design">
            <h1 className="h2_world"> World Climate Clock</h1>
          </div> */}
          <div className="h3_design">
            <div className="h3_imagers">
              {/* <div className="h3_image1">
              <span>Time Left for the Conference</span>
            </div> */}
              <div className="years_img">
                <div className="year_img1">
                  {/* <img src={calander1} className="calander1" /> */}
                  {/* <div>
                  <h3>05</h3>
                  <p>years</p>
                </div> */}
                  {/* <img src={ve} /> */}
                </div>
                {/* <div>
                <h3>63</h3>
                <p>Days</p>
               </div>
               <img src={ve} /> */}
                {/* <div>
                <h3>02</h3>
                <p>Hours</p>
              </div>
              <img src={ve} /> */}
                {/* <div>
                <h3>37</h3>
                <p>minutes</p>
               </div>
              <img src={ve} />
              <div>
                <h3>26</h3>
                <p>seconds</p>
              </div>  */}
              </div>
            </div>
            <div className="h3_imagers">
              {/* <div className="h3_image1">
            
                <span>Time Left for the Conference</span>  
            </div> */}
              <div className="years_img">
                <div className="year_img1">
                  {/* <img src={calander2} className="calander1" /> */}
                  {/* <div>
                <h3>06</h3>
                <p>years</p>
                </div> */}
                  {/* <img src={ve} />  */}
                  {/* <div>
                <h3>64</h3>
                <p>Days</p>
              </div> */}
                  {/* <img src={ve} /> */}
                  {/* <div>
                 <h3>04</h3>
                 <p>Hours</p>
              </div> */}
                  {/* <img src={ve} /> */}
                  {/* <div>
                <h3>40</h3>
                <p>minutes</p>
              </div>
              <img src={ve} />
              <div>
                <h3>29</h3>
                <p>seconds</p>
              </div>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="our_target">OurTarget</h1>
      <div className="divlogo">
        <div>
          <img src={logo2} className="imageLogo" />
          <img src={line} className="line" />
        </div>
        <div>
          <img src={logo1} className="imageLogo" />
          <img src={line} className="line" />
        </div>
        <div>
          <img src={logo3} className="imageLogo" />
        </div>
      </div>

      <div className="carddiv">
        <div>
          <h1 className="our_target1"> Energy Literacy Training</h1>
        </div>

        <div>
          <Card className="card">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <h1 className="cardtitle">Energy Literacy Training</h1>
              <Card.Text className="cardtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                urna lectus nullam eu. Morbi libero risus urna tellus lorem
                pulvinar tortor, scelerisque.
              </Card.Text>
              <div className="div-button-go">
                <button className="button">free</button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <h1 className="cardtitle1">
                Learn to design solar systems for Homes
              </h1>
              <Card.Text className="cardtext1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                urna lectus nullam eu. Morbi libero risus urna tellus lorem
                pulvinar tortor, scelerisque.
              </Card.Text>
              <div className="div-button-go">
                <button className="button">free</button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card">
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <h1 className="cardtitle2">Energy Literacy Training</h1>
              <Card.Text className="cardtext2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                urna lectus nullam eu. Morbi libero risus urna tellus lorem
                pulvinar tortor, scelerisque.
              </Card.Text>
              <div className="div-button-go">
                <button className="button">free</button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="div-enroll">
          <button className="btn-enroll1">View all courses</button>
        </div>
      </div>
      <div className="cilent_design">
        <div className="cilent_image_div">
          <img src={cilent} className="image_src" />
        </div>

        <div className="engery_yatra_div">
          <div className="energy_swaraj_text">
            <h1 className="engery_yatra">Energy Swaraj Yatra</h1>
          </div>
          <div className="loacation">
            <div className="location_div">
              <h3 className="text_location">indore</h3>
              <p className="loacation_date">12/09/2022</p>
              <img src={vert} />
            </div>
            <div className="location_div">
              <h3 className="text_location">Bhopal</h3>
              <p className="loacation_date">09/10/2022</p>
              <img src={vert} />
            </div>
            <div className="location_div">
              <h3 className="text_location">Delhi</h3>
              <p className="loacation_date">12/09/2022</p>
              <img src={vert} />
            </div>
          </div>
          <div className="span_div">
            <span className="span">
              Energy Swaraj Yatra through a solar bus is the heart of the Energy
              Swaraj Movement planned to combine synergies of climate change
              mitigation efforts. The yatra is planned across the country
              starting from November 2020 until December 2030, nearly 11 years
              long, to create Energy Swaraj as a public movement. Dr. Chetan
              Singh Solanki, a professor from IIT Bombay, Brand Ambassador of
              Solar Energy for Govt. of MP, and Founder, Energy Swaraj
              Foundation, has pledged not to go home until 2030 and live &
              travel in the solar bus.
            </span>
          </div>
          <div className="button_read_div">
            <button className="button_read">Read more</button>
          </div>
        </div>
      </div>
      {/* <div className="News_div">
        <h1 className="News_text">News</h1>
        <div className="rectangle_div">
          <div>
            <img src={retctangle1} className="image1" />
            <div class="bottom-left">
              Energy Swaraj Yatra’ reaches Thiruvananthapuram
            </div>

         
          </div>
          <div>
            <img src={retctangle2} className="image2" />
          </div>
          <div>
            <img src={retctangle3} className="image2" />
          </div>
         
        </div>

      </div> */}
      <div className="upcoming_position">
        <div>
          <h1 className="energy_upcoming">Upcoming Event</h1>
          <div className="up_demo">
            <div className="upcoming_event">
              <img src={upcoming} />
              <div className="upcoming">
                <h1 className="energy">
                  Action for Restoring Environment Conference
                </h1>
                <span className="span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  arcu platea fermentum risus urna, luctus at nullam.
                </span>
                <button className="button_read">Registar</button>
              </div>
            </div>
            <div className="News_div1">
              <div className="News_div2">
                <img src={upcoming2} />
                <div>
                  <h1 className="energy">
                    Action for Restoring Environment Conference
                  </h1>
                  <span className="span">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    arcu platea fermentum risus urna, luctus at nullam.
                  </span>
                  <button className="button_read">Registar</button>
                </div>
              </div>
              <button className="view_all">view all</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="energy_upcoming">News</h1>
          <div className="up_demo">
            <div className="width_demo">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div>
                  <span className="span">
                    We are launching Energy Swaraj Clubs this Earth Day!
                  </span>
                  <div>
                    <span className="span">22 Apr 2022 3:30 PM | J8 J8</span>
                  </div>
                </div>
              ))}
                 </div>
              <button className="view_all_ese">View all</button>
              
          </div>
        </div>
      </div>
      {/* <div className="News_div">
        <div className="News_div1">
          <div className="News_div2">
            <h1 className="energy_upcoming">Upcoming Event</h1>
          </div>
           <table className="table_cl">
             <tr>
               <td className="upcoming_td">
               <div className="upcoming_event" >
             
             <img src={upcoming}/>
             <div className="upcoming">
               <h1 className="energy">Action for Restoring Environment Conference</h1>
               <span className="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu platea fermentum risus urna, luctus at nullam.</span>
               <button className="button_read">Registar</button>
             </div>
           </div>
           <div className="News_div1">
           <div className="News_div2" >
             <img src={upcoming2}/>
             <div>
               <h1 className="energy">Action for Restoring Environment Conference</h1>
               <span className="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu platea fermentum risus urna, luctus at nullam.</span>
               <button className="button_read">Registar</button>
             </div>
         
             </div>
            <button className="view_all">view all</button>
           </div>
           <div>
         
           </div>
           
           </td>
           <td className="upcoming_td">
           
                
             <div className="div_energy_swraj" >
           
               <div className="engray_news_upcomig">
               
                 <div>
                   <span className="span">Energy Swaraj Yatra’ reaches Thiruvananthapuram</span>
                   <div>
                   <span className="span">21 Apr 2022 3:30 PM | J8 J8</span>
                   </div>
                
                 </div>
                 <div>
                   <span className="span">We are launching Energy Swaraj Clubs this Earth Day!</span>
                   <div>
                   <span className="span">22 Apr 2022 3:30 PM | J8 J8</span>
                   </div>
                   
                 </div>
                 <div>
                   <span className="span">Energy Swaraj Yatra’ reaches Thiruvananthapuram
                   </span>
                   <div>
                     <span className="span">26 Sep 2022 3:30 PM | J8 J8
                     </span>
                   </div>
                 </div>
                 <div>
                   <span className="span">Energy Swaraj Yatra’ reaches Thiruvananthapuram</span>
                   <div><span  className="span">26 Sep 2022 3:30 PM | J8 J8</span></div>
                 </div>
                 <div>
                   <span className="span">Energy Swaraj Yatra’ reaches Thiruvananthapuram</span>
                   <div>
                   <span className="span"> 26 Sep 2022 3:30 PM | J8 J8</span>
                   </div>
                  </div>
                  <button className="view_all_ese">View all</button>
               </div>

             </div>
           </td>
             </tr>
           </table>
           </div>
      </div> */}
      <div className="traning_div">
        <div className="div_traingg">
          <div>
            <h1 className="traing">Training</h1>
          </div>
          <div className="span_div_loren">
            <span className="span-loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              orci tortor nunc, facilisi lacus, aenean. Lacus, mi luctus nibh
              hac sed. Aliquet etiam est platea mattis eget urna, dignissim
              ornare phasellus. Tellus massa mattis fringilla ultrices pulvinar
              feugiat. Libero, bibendum congue consequat neque mollis massa et.
              Molestie pellentesque urna neque, diam malesuada senectus.
            </span>
          </div>
          <div className="button_read_div1">
            <button className="button_read1">Read more</button>
          </div>
        </div>

        <div className="outer_circle_div">
          <div className="outer_circle_div1">
            <div className="outer-circle">
              <div className="circle_div">
                <img src={circle} className="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="engry_swaraj_club1">
        <div>
          <h1 className="energy">Energy Swaraj Clubs</h1>
        </div>
        <div>
          <span className="user">
            We all are the users of energy and we all have contributed to
            climate change. In order to mitigate climate change, which has
            become a serious global problem, we all must act together. We need a
            public movement to encourage mass adoption of the Energy Swaraj -
            the energy generated and consumed locally.
          </span>
        </div>
        <div>
          <button className="btn_reg">Register Now</button>
        </div>
      </div>
      <div className="div_conference">
        <div className="div_con_imag">
          <img src={circle1} className="image_circle1" />
        </div>
        <div className="Are_confe">
          <div>
            <h1 className="conference_h1">ARE Conference and Awards</h1>
          </div>
          <div>
            <span className="span_conf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              orci tortor nunc, facilisi lacus, aenean. Lacus, mi luctus nibh
              hac sed. Aliquet etiam est platea mattis eget urna, dignissim
              ornare phasellus. Tellus massa mattis fringilla ultrices pulvinar
              feugiat. Libero, bibendum congue consequat neque mollis massa et.
              Molestie pellentesque urna neque, diam malesuada senectus. Lectus
              nulla vulputate risus tincidunt eget tristique feugiat ipsum
              malesuada. Hac quam purus odio integer tellus nunc vitae. Augue
              blandit adipiscing dictum non mollis.
            </span>
          </div>
          <div className="button_read_div1">
            <button className="button_read1">Read more</button>
          </div>
        </div>
      </div>
      <div className="div_solor">
        <div className="div_solor1">
          <div>
            <h1 className="conference_h2">Solar Solutions</h1>
          </div>
          <div>
            <span className="span_conf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              orci tortor nunc, facilisi lacus, aenean. Lacus, mi luctus nibh
              hac sed. Aliquet etiam est platea mattis eget urna, dignissim
              ornare phasellus. Tellus massa mattis fringilla ultrices pulvinar
              feugiat. Libero, bibendum congue consequat neque mollis massa et.
              Molestie pellentesque urna neque, diam malesuada senectus. Lectus
              nulla vulputate risus tincidunt eget tristique feugiat ipsum
              malesuada. Hac quam purus odio integer tellus nunc vitae. Augue
              blandit adipiscing dictum non mollis.
            </span>
          </div>
          <div className="button_read_div1">
            <button className="button_read1">Read more</button>
          </div>
        </div>
        <div className="div_group">
          <img src={groupsp} className="image_group"></img>
        </div>
      </div>
      <div className="engry_swaraj_club">
        <div className="star">
          <div>
            <h1 className="energy">Donations / CSR / Sponsorships</h1>
          </div>
          <div>
            <span className="user1">
              Climate change has become an existential threat to humanity which
              can be seen through the increase in the frequency and intensity of
              disasters. We need to mitigate climate change for the sake of our
              children, their children, and grandchildren. We need a large-scale
              public response. Dr. Chetan Singh Solanki, Professor IIT Bombay &
              Founder, Energy Swaraj Foundation, has undertaken an 11 years long
              Energy Swaraj Yatra (2020 to 2030) through a bus to create Energy
              Swaraj as a public movement. For his efforts, he has been
              conferred as the Brand Ambassador of Solar Energy, Madhya Pradesh.
              We cordially invite you to become a member of Energy Swaraj
              Movement for 10 years.
            </span>
          </div>
          <div>
            <button className="btn_reg">Donate</button>
          </div>
        </div>
      </div>
      <div className="div_about">
        <div>
          <div>
            <h1 className="energy1">About Founder</h1>
            <div className="user_loern_text">
              <span className="user_loern">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum orci tortor nunc, facilisi lacus, aenean. Lacus, mi
                luctus nibh hac sed. Aliquet etiam est platea mattis eget urna,
                dignissim ornare phasellus.
              </span>
            </div>
          </div>
        </div>
        <div className="group_image">
          {/* <div>
                   <img src={left}/>
                 </div> */}
          <div>
            <img src={group4} className="group_image1" />
          </div>
          <div>
            <img src={group3} className="group_image1" />
          </div>
          <div>
            <img src={group2} className="group_image1" />
          </div>
          <div>
            <img src={group5} className="group_image1" />
          </div>
          {/* <div>
            <img src={right}/>
          </div> */}
        </div>

        <div className="button_read_div1">
          <button className="button_read3">Read more</button>
        </div>
      </div>

      <div className="image_swaraj">
        <div>
          <img src={image} className="image" />
        </div>
        <div className="border_bottom">
          <div className="div_contactUs">
            <div className="contact_us">
              <h1 className="contact-font">Contact us :</h1>
              <div className="phone_div">
                <img src={phone} className="phone_image" />
                <span> +91 8657438867</span>
              </div>
              <div>
                <img src={union} className="phone_image" />
                <span className="about-font"> info@energyswaraj.org</span>
              </div>
            </div>
          </div>
          <div className="contUs_ab">
            <div className="contact_us1">
              <div className="about_us">
                <span className="about-font">About us</span>
              </div>
              <div>
                <span className="about-font">Events</span>
              </div>
              <div>
                <span className="about-font">Donate</span>
              </div>
              <div>
                <span className="about-font">Become A Member</span>
              </div>
            </div>
            <div className="outreach">
              <div>
                <span className="about-font">outreach</span>
              </div>
              <div>
                <span className="about-font">online store</span>
              </div>
              <div>
                <span className="about-font">Become a Solar Entrepreneur</span>
              </div>
              <div>
                <span className="about-font">Volunteer with us</span>
              </div>
            </div>
            <div className="droup_down">
              <Dropdown className="dropdownid" variant="black">
                <Dropdown.Toggle variant="black">English</Dropdown.Toggle>

                {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu> */}
              </Dropdown>
              <div>
                <img src={facebook} className="facebook" />
                <img src={insta} className="insta" />
                <img src={twitter} className="twitter" />
                <img src={linkdin} className="linkdin" />
              </div>
              <div>
                <span className="become_energy1">
                  Become a Solar Entrepreneur
                </span>
              </div>
              <div>
                <span className="become_energy">Become Energy Literate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="allright">
          <span className="all-font">©2022, All right reserved.</span>

          <div className="anchor">
            <a className="about-font1" href="">
              Privacy Policy
            </a>
            <a className="about-font2" href="">
              Terms of Service
            </a>
            <a className="about-font3" href="">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
      <div className="member3">
        <div className="member2" >
          <img src={member1} className="member1"/>
        </div>
        <div class="wrapper">
      <div class="sun-quote-pages">   
      </div> 
    </div>
    <div className="animation"></div>
      </div>
      <div className="borderradius">
        <h1>hwewe</h1>
      </div>

    </div>
  );
}
export default Design;
