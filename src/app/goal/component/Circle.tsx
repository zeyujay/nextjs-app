/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-10 16:19:52
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-10 18:13:37
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/app/goal/component/Circle.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";

import { useEffect } from "react";
type ICircle = {
  list: object[];
};
const Circle = ({ list }: ICircle) => {
  console.log(list);
  useEffect(() => {
    var canvas: any = document.getElementById("canvas");
    var width = 400,
      height = 400;
    var ratio = "devicePixelRatio" in window ? window.devicePixelRatio : 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    var ctx: any = canvas.getContext("2d");
    ctx.scale(ratio, ratio);

    var circleX = canvas.width / 2 / ratio, // 中心x坐标
      circleY = canvas.height / 2 / ratio, // 中心y坐标
      //radius = 120, // 圆环半径
      lineWidth = 12; // 圆形线条的宽度
    console.log(circleX, circleY, lineWidth);

    const colors = [
      "rgba(235,66,73,0.1)",
      "rgba(179,251,6,0.1)",
      "rgba(55,219,246,0.1)",
      "rgba(123,77,84,0.1)",
      "rgba(231,99,45,0.1)",
      "rgba(34,156,65,0.1)",
    ];
    if (list.length > 0) {
      const results: any[] = list.filter(
        (item: any) => item.properties.isShowCircle.checkbox === true
      );
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        let radius = 70 + i * 7 * 2;
        let begin = (Math.PI * 3) / 2;
        let end = (Math.PI * 7) / 2;
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, begin, end);
        ctx.stroke();
      }
      for (var i = 0; i < results.length; i++) {
        let radius = 70 + i * 7 * 2;
        let begin = (Math.PI * 3) / 2;
        let end =
          (Math.PI * 3) / 2 +
          Math.PI * 2 * results[i].properties["状态"].rollup.number;
        ctx.strokeStyle = colors[i].replace("0.1", "1");
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, begin, end);
        ctx.stroke();
      }
    }
  });
  return <canvas id="canvas" width={400} height={400}></canvas>;
};
export default Circle;
