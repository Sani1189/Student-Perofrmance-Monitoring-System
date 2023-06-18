import Facultynav from "./facultynav";
import "../../styles/facultycss/faculty.css";
import { useState, React, useEffect } from "react";
import axios from "axios";
import { getGlobal } from "reactn";

export function Faculty() {
  const user = getGlobal().user;

  return (
    <div>
      <Facultynav />
      <div className="main-content">
        {user.facultyID ? (
          <div className="dash">
            <img src={user.image} alt="profile" className="mypic" />
            <h1>{user.f_name + " " + user.l_name}</h1>
            <h3> {user.rank}</h3>
            <h3>Department Of {user.departmentID.toUpperCase()}</h3>
            <h3>Independent University, Bangladesh</h3>
            {user.email == null ? (
              <h3>email: N/A</h3>
            ) : (
              <h3>email: {user.email}</h3>
            )}
          </div>
        ) : (
          <div className="dash">
            {user.studentID ? (
              <div className="dash">
                <h1>Welcome to SPMS!</h1>
                <h1>{user.f_name + " " + user.l_name}</h1>
                <h3>
                  {user.studentID} || {user.departmentID.toUpperCase()}
                </h3>
                <h3>Independent University, Bangladesh</h3>
                {user.email == null ? (
                  <h3>email: N/A</h3>
                ) : (
                  <h3>email: {user.email}</h3>
                )}
              </div>
            ) : (
              <div className="dash">
                <h1>Welcome to SPMS!</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
