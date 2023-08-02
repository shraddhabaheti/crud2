import React,{Fragment, useEffect} from 'react'
import './Design.css';
import ve from "../src/Asset/img/Ve.png";
const Clock = ({dateNow,timerDays,timerHoures,timerMinute,timerSecond,timerDays1,dateFuture,timerHoures1,timerMinute1,timerSecond1}) => {
 
  return (
    <Fragment>
         <div className="div2">
        <div className="div_reg">
          <div className="div_design">
            <h1 className="h2_world"> World Climate Clock</h1>
          </div>
          <div className="h3_design">
            <div className="h3_imagers">
              <div className="h3_image1">
              <span>Time Left for the Conference</span>
            </div>
              <div className="years_img">
                <div className="year_img1">
               
                  <div>
                  <h6 className='h6_image'>{new Date('2023-01-04').getFullYear()-new Date().getFullYear()}</h6>
                  <p className='h6_text'>years</p>
                </div>
                  <img src={ve} />
                </div>
                <div>
                <h6 className='h6_image'>{timerDays}</h6>
                <p className='h6_text'>Days</p>
               </div>
               <img src={ve} />
                <div>
                <h6 className='h6_image'>{timerHoures}</h6>
                <p className='h6_text'>Hours</p>
              </div>
              <img src={ve} />
                <div>
                <h6 className='h6_image'>{timerMinute}</h6>
                <p className='h6_text'>minutes</p>
               </div>
              <img src={ve} />
              <div>
                <h6 className='h6_image'>{timerSecond}</h6>
                <p className='h6_text'>seconds</p>
              </div> 
              </div>
            </div>
             <div className="h3_imagers">
                 
             <div className="h3_image1">
            
                <span>Time Left for the Conference</span>  
                </div> 
               <div className="years_img">
                <div className="year_img1">
              
                  <div>
                <h6 className='h6_image'>{new Date().getFullYear().toString().substr(-2)}</h6>
                <p className='h6_text'>years</p>
                </div> 
                   <img src={ve} /> 
                  <div>
                <h6  className='h6_image'>{timerDays1}</h6>
                <p className='h6_text'>Days</p>
              </div>
                  <img src={ve} />
                  <div>
                 <h6  className='h6_image'> {timerHoures1}</h6>
                 <p className='h6_text'>Hours</p>
              </div> 
                   <img src={ve} />
                  <div>
                <h6 className='h6_image'>{timerMinute1}</h6>
                <p className='h6_text'>minutes</p>
              </div> 
               <img src={ve} />
              <div>
                <h6 className='h6_image'>{timerSecond1}</h6>
                <p className='h6_text'>seconds</p>
              </div>
             
                </div> 
               </div> 
            </div>
          </div>
        </div>
      </div> 
        {/* <section className='timer_container'>
            <section className='timer' >
              <div className='clock'> */}
                   {/* <section> */}
                       {/* <p>{timerDays}</p>
                      <small>Days</small>
                  </section>
                  <span>:</span>
                  <section>
                      <p>{timerHoures}</p>
                      <small>Hours</small>
                  </section>{""}
                  <span>:</span>
                  <section>
                      <p>{timerMinute}</p>
                      <small>minutes</small>
                  </section>{""}
                  <span>:</span>
                  <section>
                      <p>{timerSecond}</p>
                      <small>seconds</small>
                  </section>  */}
                  {/* <div className="h3_imagers">
               <div className="h3_image1"> 
            
                <span>Time Left for the Conference</span>  
            </div> 
              <div className="years_img">
               
                <h3></h3>
                <p>years</p>
                </div> 
                 <img src={ve} /> 
                  <div>
                <h3>{timerDays}</h3>
                <p>Days</p>
              </div>
                  <img src={ve} /> 
                   <div>
                 <h3>{timerHoures}</h3>
                 <p>Hours</p>
              </div>
                <img src={ve} />
              <div>
                <h3>{timerMinute}</h3>
                <p>minutes</p>
              </div>
              <img src={ve} />
              <div>
                <h3>{timerSecond}</h3>
                <p>seconds</p>
              </div>  
                </div>
              </div>
          
        
              
                
            </section>
        </section> */}
    </Fragment>
  )
}

Clock.defaultProps={
    timerDays:10,
    timerHoures:10,
    timerMinute:10,
    timerSecond:10
}
export default Clock
