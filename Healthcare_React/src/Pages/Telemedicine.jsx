

import React, { useEffect, useState } from "react";
import './Telemedicine.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
const Telemedicine = () => {
  var doctor_data = {
    doctorName: "XYZ",
    email: "xyz@gmail.com",
    contactNo: 9876543210,
    locality: "Gota",
    city: "Ahmedabad",
    openingTime: "8:00",
    closingTime: "20:00",
  };
  const [employees, setEmployees] = useState([]);
  const [slot, setSlot] = useState([]);
  const [userSelectSlot, setUserSelectSlot] = useState("");
  var [openTime, setOpenTime] = useState("");
  var [closeTime, setCloseTime] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});
  const monthName = {
    0: "Jan",
    1: "Feb",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const weekDay = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
  };
  var today = new Date();
  const [date, setDate] = useState(today.getDate());
  var unavailableEmployee = "";
  const [dates, setDates] = useState([]);
  const [employee, setEmployee] = useState("");
  const [error, setError] = useState("");
  var [slotTaken, setSlotTaken] = useState([]);
  const [timeTaken, setTimeTaken] = useState([]);
  const [timeSlot, setTimeSlot] = useState(0);
  var totalTime1 = 0;
  function timeToMilliseconds(openingTime, closingTime, todate) {
    const openingHour = parseInt(openingTime.split(":")[0]);
    const openingMinute = parseInt(openingTime.split(":")[1]);
    const closingHour = parseInt(closingTime.split(":")[0]);
    const closingMinute = parseInt(closingTime.split(":")[1]);
    const fulldate = todate.split("/");
    const d = parseInt(fulldate[0], 10);
    const m = parseInt(fulldate[1], 10);
    const y = parseInt(fulldate[2]);
    const openingDate = new Date(y, m - 1, d);
    openingDate.setHours(openingHour, openingMinute, 0, 0);

    const closingDate = new Date(y, m - 1, d);
    closingDate.setHours(closingHour, closingMinute, 0, 0);

    const openingTimeMilliseconds = openingDate.getTime();
    const closingTimeMilliseconds = closingDate.getTime();

    return {
      opening: openingTimeMilliseconds,
      closing: closingTimeMilliseconds,
    };
  }

  const timming = (open, close, todate) => {
    var slots = [];
    var { opening, closing } = timeToMilliseconds(open, close, todate);
    totalTime1 = 0;
    var slots = [];
    var date = new Date();
    setTimeSlot(totalTime1);
    while (opening < closing) {
      if (
        todate == date.toLocaleDateString("en-GB") &&
        date.getTime() < opening &&
        date.getTime() < closing &&
        opening + totalTime1 * 60 * 1000 < closing
      ) {
        slots.push(opening);
      } else if (todate.split("/")[0] > date.getDate()) slots.push(opening);
      opening += 20 * 60 * 1000;
    }
    setSlot(slots);
  };
  useEffect(() => {
    setOpenTime(doctor_data.openingTime);
    setCloseTime(doctor_data.closingTime);
    const today = new Date();
    // today.getMilliseconds
    const tomorrow = new Date(today);
    // today.toLocaleDateString
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    setDates([today, tomorrow, dayAfterTomorrow]);
  }, []);
  useEffect(() => {
    timming(openTime, closeTime, new Date().toLocaleDateString("en-GB"));
  }, []);

  const timeInRange = (time, slot, totaltime) => {
    var slotTaken = slot;
    var start = slotTaken[0];
    var arr = [];
    timeTaken.map((e) => {
      var start = e.starttime;
      var end = e.totaltime * 60 * 1000;
      arr.push(
        (start <= time && time < end + start) ||
          (time <= start && start + end < time + timeSlot * 60 * 1000)
      );
    });
    if (arr.includes(true)) {
      return true;
    }
    return false;
  };
  const selectDates = (date) => {
    const dates = document.querySelectorAll(".radio__date");
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].id === date.toString()) {
        dates[i].classList.add("click");
      } else {
        dates[i].classList.remove("click");
      }
    }
  };

  const handleButtonClick = (id) => {
    setError("");
    const buttons = document.querySelectorAll(".radio__btn");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === id.toString()) {
        buttons[i].classList.add("click");
      } else {
        buttons[i].classList.remove("click");
      }
    }
  };

  const submit = (data) => {
    console.log(data);
    var newdata={
      startTime:parseInt(data.init),
      totalTime:20
    }
    // startTime: parseInt(data.init),
    // totalTime: appointmentTime,
    console.log(newdata);
    axios.post('http://localhost:9999/mail',newdata).then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  return (
    <div>
      <>
      <h1 style={{textAlign:"center"}}>TELEMEDICAL APPOINTMENT</h1>
        <div className="schedule ">
          {dates.map((e) => {
            return (
              <div className="choose__dates row">
                <button
                  className="radio__date col-3"
                  id={e.getDate()}
                  onClick={() => {
                    selectDates(e.getDate());
                    setDate(e.getDate());
                    setValue("date", e.toLocaleDateString("en-GB"));
                    timming(openTime, closeTime, e.toLocaleDateString("en-GB"));
                  }}
                  name="date"
                  value={e.getDate()}
                  {...register("date")}
                >
                  <div></div>
                  <div>{weekDay[e.getDay().toString()]},</div>
                  <div>{monthName[e.getMonth()]}</div>
                  <div>{e.getDate()}</div>
                </button>
              </div>
            );
          })}
          {error}
          <div className="choose__time">
            {/* {console.log(employeeSlot)} */}
            {slot?.map((e) => {
              const slot1 = new Date(e).toLocaleTimeString();
              return slotTaken.includes(e) ||
                timeInRange(e, slotTaken, timeTaken) ? (
                <button
                  type="radio"
                  name="init"
                  id={e}
                  key={e}
                  value={e}
                  className="radio_btn disable_btn"
                  {...register("init")}
                  onClick={() => {
                    setValue("init", e);
                  }}
                  disabled
                >
                  {slot1}
                </button>
              ) : (
                <button
                  type="radio"
                  name="init"
                  id={e}
                  value={slot1}
                  className="radio__btn"
                  {...register("init")}
                  onClick={() => {
                    // console.log("eeeeeee",e);
                    setValue("init", e);
                    setUserSelectSlot(slot1);
                    handleButtonClick(e);
                  }}
                >
                  {slot1}
                </button>
              );
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="submit" value="submit" />
        </form>
      </>
    </div>
  );
};

export default Telemedicine;
