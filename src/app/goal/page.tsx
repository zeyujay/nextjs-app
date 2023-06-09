/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-10 17:36:44
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-19 13:25:30
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/app/goal/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Circle from "./component/Circle";
import Time from "./component/Time";
import styles from "./page.module.css";
import React from "react";
async function Goal() {
  try {
    const result = await fetch("https://zeyujay.xyz:3002/test/goal", {
      cache: "no-store",
      method: "GET",
    });
    const res = await result?.json();
    return (
      <div className={styles.main}>
        <Circle list={res.data}></Circle>
        <Time></Time>
      </div>
    );
  } catch (error) {
    return <div>网络错误</div>;
  }
}
export default Goal;
