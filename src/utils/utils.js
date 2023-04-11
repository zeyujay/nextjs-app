/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-11 14:33:30
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-11 17:03:14
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/utils/utils.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export function throttle(func, delay) {
  let lastTime = 0;
  return function () {
    const nowTime = new Date().getTime();
    if (nowTime - lastTime > delay) {
      func.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
