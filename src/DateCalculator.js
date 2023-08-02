import { Modal } from "bootstrap";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ModalBody } from "react-bootstrap";

function DateCalculator() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedInterval, setSelectedInterval] = useState('');
    const [customDate, setCustomDate] = useState(null);
    const [values, setvalues] = useState(['-- Select Interval --', '1 Day', '7 Days', '1 Month', '3 Months', 'Custom Date']);
    const [open, setOpen] = useState(false);
    const [isSelectData, setIsSelectData] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  
    const handleCurrentDateChange = (date) => {
      setCurrentDate(date);
    };
  
    const handleIntervalChange = (e) => {
      console.log(e.target.value, "e")
      setSelectedInterval(e.target.value);
      setIsSelectData(false)
      if(e.target.value === 'Custom Date'){
        setOpen(true)
      }
    };
  
    const handleCustomDateChange = (date) => {
      setCustomDate(date);
    };
  
    const style = {
      position: 'absolute' ,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  
    const calculateDate = () => {
      let calculatedDate = null;
  
      if (selectedInterval === '1 Day') {
        calculatedDate = new Date(currentDate.getTime() + (1 * 24 * 60 * 60 * 1000));
        setIsSelectData(true)
      } else if (selectedInterval === '7 Days') {
        calculatedDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        setIsSelectData(true)
      } else if (selectedInterval === '1 Month') {
        calculatedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        setIsSelectData(true)
      } else if (selectedInterval === '3 Months') {
        calculatedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate());
        setIsSelectData(true)
      } else if (selectedInterval === 'Custom Date') {
        calculatedDate = customDate;
        setIsSelectData(true)
        setOpen(true);
      } else {
        setIsSelectData(false)
      }
  
      if (calculatedDate) {
        // Do something with the calculated date
        setCurrentDate(calculatedDate)
      }
    };
  
  
    useEffect(() => {
      calculateDate()
    }, [selectedInterval, customDate])
  
  
    return (
      <div>
        {/* <div>
          <label>Current Date:</label>
          <DatePicker selected={currentDate} onChange={handleCurrentDateChange} dateFormat="dd/MM/yyyy" />
        </div> */}
        <div className=''>
          {/* <div>{moment(currentDate).format('LLLL')}</div> */}
          <div className='border d-flex justify-content-center m-auto' style={{ width: '50%' }}>
            <input type="text"
              className='border-0 me-3'
              value={moment(currentDate).format('LLLL')} />
            {/* <label>Select Interval:</label> */}
            <select
              // value={selectedInterval} 
              onChange={handleIntervalChange}
              className='border-0 ms-2' 
            >
              {/* <option value="">-- Select Interval --</option>
            <option value="1day">1 Day</option>
            <option value="7days">7 Days</option>
            <option value="1month">1 Month</option>
            <option value="3months">3 Months</option>
            <option value="custom">Custom Date</option> */}
              {
                values?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={item}>
                        {/* <button onClick={() => { setIsSelectData(true) }}> */}
                        <button>
                          {/* <>
                            {!isSelectData
                              ? <>{item}</>
                              : <>{moment(currentDate).format('LLL')}</>
                            }
                          </> */}
                          {item}
                        </button>
                      </option>
                    </React.Fragment>
                  )
                })
              }
            </select>
  
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <DatePicker autoFocus selected={customDate} onChange={handleCustomDateChange} dateFormat="dd/MM/yyyy" />
              </Box>
            </Modal>
          </div>
        </div>
        {/* {selectedInterval === 'custom' && (
          <div>
            <label>Custom Date:</label>
            <DatePicker selected={customDate} onChange={handleCustomDateChange} dateFormat="dd/MM/yyyy" />
          </div>
        )}
        <button onClick={calculateDate}>Calculate Date</button> */}
  
        {/* {
          selectedInterval === 'Custom Date' &&
          <DatePicker
            selected={customDate}
            onChange={handleCustomDateChange}
            placeholderText="Select a date"
            autoFocus
          />
        } */}
  
  
        {/* {
          selectedInterval === 'Custom Date' && 
          <DatePicker autoFocus selected={customDate} onChange={handleCustomDateChange} dateFormat="dd/MM/yyyy" />
        } */}
  
      </div>
    );
  }
  
  export default DateCalculator;
  