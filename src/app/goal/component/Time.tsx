/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-11 02:55:00
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-19 13:02:09
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/app/goal/component/Time.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";

import { useState } from "react";

const Time = ({ list }: any) => {
  console.log(list);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const fn = () => {
    requestAnimationFrame(() => {
      console.log("111111");
      setHour(new Date().getHours());
      setMin(new Date().getMinutes());
      setSec(new Date().getSeconds());
      fn();
    });
  };
  fn();

  return (
    <div
      style={{
        position: "absolute",
        margin: "auto",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000,
        width: "100px",
        height: "70px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={() => {
        window.location.reload();
      }}
    >
      <span style={{ fontSize: "25px" }}> {`${hour}:${min}:${sec}`}</span>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5839"
        width="30"
        height="30"
      >
        <path
          d="M944.443077 355.249231v-236.307693l-236.307692 236.307693h236.307692zM119.729231 707.347692v236.307693l236.307692-236.307693h-236.307692z"
          p-id="5840"
          fill="#000000"
        ></path>
        <path
          d="M157.538462 512H0a512 512 0 0 1 896.393846-337.92L781.390769 281.206154A364.701538 364.701538 0 0 0 512 157.538462 355.249231 355.249231 0 0 0 157.538462 512zM512 1024a523.815385 523.815385 0 0 1-343.433846-129.181538l109.489231-116.578462A354.461538 354.461538 0 0 0 866.461538 512h157.538462A512.787692 512.787692 0 0 1 512 1024z"
          p-id="5841"
          fill="#000000"
        ></path>
      </svg>
    </div>
  );
};
export default Time;
