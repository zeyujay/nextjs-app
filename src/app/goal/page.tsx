/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-10 17:36:44
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-10 17:43:03
 * @FilePath: /v8/Users/zeyu/Documents/work/next-notion/src/app/goal/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Circle from "./component/Circle";
import styles from "./page.module.css";
import React from "react";
async function Goal() {
  const result = await fetch("http://0.0.0.0:3002/test/year", {
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
