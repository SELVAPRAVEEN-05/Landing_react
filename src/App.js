import React from 'react';
import './App.css'; 
function LandingPage() {
  return (
    <div >
      <input className="search" type="search" placeholder="Search..." />
      <div className="t">
        <select  name="HOME" className="bor">
          <option  selected disabled hidden>HOME</option>
          <option >CONTACT US</option>
          <option >RATE</option>
        </select>
        <select name="AVIALABLE" className="bor">
          <option  selected disabled hidden>AVIALABLE</option>
          <option >KARUR</option>
          <option >DINDIGUL</option>
          <option >CHENNAI</option>
        </select>
        <select name="MOST POPULAR" className="bor">
          <option  selected disabled hidden>MOST POPULAR</option>
          <option >LADAK</option>
          <option >MUMBAI</option>
          <option >CHENNAI</option>
        </select>
        <select name="ABOUT US" className="bor">
          <option selected disabled hidden>ABOUT US</option>
          <option >RATING</option>
          <option >PACKAGE</option>
          <option >FEED BACK</option>
        </select>
      </div>
      <div className="b">
        <p>&nbsp;&nbsp;&nbsp;<a href="/">home</a>/the world explorer</p>
        <br />
        <h2 className="title"><b>THE WORLD EXPLORER</b></h2>
        <br />
        <p className="title">They say the World has seven Wonders. We think that is only the Beginning</p>
        <br />
        <div className="title">
          <input type="date" className="selectdate" />
          <select className="select" name="HOW MANY DAYS WANT TO TRAVEL">
            <option selected disabled hidden>HOW MANY DAYS WANT TO TRAVEL</option>
            <option >ONE DAY</option>
            <option >ONE WEEK</option>
            <option >ONE MONTH</option>
          </select>
          <br />
          <br />
          <br />
          <button className="button">LETS BEGIN</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;