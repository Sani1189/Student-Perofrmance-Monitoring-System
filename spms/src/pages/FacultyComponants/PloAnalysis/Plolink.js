import React from 'react'
import Facultynav from '../../facultypages/facultynav'


export const Plolink = () => {
  return (
    <div>
    <Facultynav />
    <div className="main-content">
      <div className="addplo">
        <div className="cls">
          <form className="formplo">

          <label>
              <select id="cars">
                <option value="volvo">CSC101</option>
                <option value="saab">CSC303</option>
                <option value="opel">CSC201</option>
                <option value="audi">CSC303L</option>
              </select>
            </label>
           
            <label>
              <select id="cars">
                <option value="volvo">Section-1</option>
                <option value="saab">Section-2</option>
                <option value="opel">Section-3</option>
                <option value="audi">Section-4</option>
              </select>
            </label>

            <label>
              <select id="cars">
              <option value="volvo">Spring</option>
                  <option value="saab">Summer</option>
                  <option value="opel">Autumn</option>
              </select>
            </label>

            <label>
              <select id="cars">
              <option value="volvo">2023</option>
                  <option value="saab">2022</option>
                  <option value="opel">2021</option>
                  <option value="audi">2020</option>
              </select>
            </label>

          </form>
          
          <div className="submitdiv">
            <label>
                Submit 
            </label>
            </div>

        </div>
      </div>
    </div>
  </div>
  )
}
