/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-10 17:36:44
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-10 19:14:07
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/app/goal/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Circle from "./component/Circle";
import styles from "./page.module.css";
import React from "react";
async function Goal() {
  console.log(1111, process.env.NODE_ENV);
  const result = await fetch("https://zeyujay.xyz:3002/test/goal", {
    method: "GET",
  });
  const res = await result.json();
  console.log(22222, res);
  return (
    <div className={styles.main}>
      <Circle list={res.results}></Circle>;
    </div>
  );
}
export default Goal;