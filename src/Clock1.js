import React from 'react'
import ve from "../src/Asset/img/Ve.png";
const Clock1 = ({timerDays1,timerHoures1,timerMinute1,timerSecond1}) => {
  return (
    
      <div className="h3_imagers">
              <div className="h3_image1">
            
                <span>Time Left for the Conference</span>  
            </div>
              <div className="years_img">
                <div className="year_img1">
              
                  <div>
                <h6 className='h6_image'>{new Date().getFullYear()}</h6>
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
         
  )
}

export default Clock1
