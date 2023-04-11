/*
 * @Author: zeyujay zeyujay@gmail.com
 * @Date: 2023-04-10 16:19:52
 * @LastEditors: zeyujay zeyujay@gmail.com
 * @LastEditTime: 2023-04-11 15:53:13
 * @FilePath: /note/Users/zeyu/Documents/work/next-notion/src/app/goal/component/Circle.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";

import { throttle } from "@/utils/utils";
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
    canvas.style.zIndex = 100;
    var ctx: any = canvas.getContext("2d");
    ctx.scale(ratio, ratio);

    var circleX = canvas.width / 2 / ratio,
      circleY = canvas.height / 2 / ratio;
    console.log(circleX, circleY);
    //radius = 120, // 圆环半径
    var lineWidth = 12; // 圆形线条的宽度

    const colors = [
      "rgba(224,62,98,0.1)",
      "rgba(53,95,235,0.1)",
      "rgba(235,187,74,0.1)",
      "rgba(97,101,233,0.1)",
      "rgba(213,21,145,0.1)",
    ];
    if (list.length > 0) {
      const results: any[] = list.filter((item: any) => {
        console.log(item.properties.isShowCircle.checkbox);
        return item.properties.isShowCircle.checkbox === true;
      });
      const arcs: any[] = [];
      for (let i = 0; i < results.length; i++) {
        let radius = 70 + i * 7 * 2;
        let begin = (Math.PI * 3) / 2;
        let end = (Math.PI * 7) / 2;
        arcs.push({
          circleX,
          circleY,
          radius,
          begin,
          end,
          name: results[i].properties["目标"].title[0].text.content,
          number: results[i].properties["状态"].rollup.number,
        });
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = lineWidth;
        ctx.beginPath();

        ctx.arc(circleX, circleY, radius, begin, end);
        ctx.stroke();
      }
      console.log(arcs);
      const textList: {
        index: number;
        x: number;
        y: number;
        text: string;
        flag: number;
      }[] = [];
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx: any = tempCanvas.getContext("2d");

      /* canvas.addEventListener(
        "mousemove",
        throttle(function (event: { clientX: number; clientY: number }) {
          console.log(event);
          const x = (event.clientX - canvas.offsetLeft) * ratio;
          const y = (event.clientY - canvas.offsetTop) * ratio;

          // 检查用户单击位置是否在圆弧上
          arcs.forEach((item, index) => {
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.arc(
              item.circleX,
              item.circleY,
              item.radius,
              item.begin,
              item.end
            );
            ctx.closePath();
            if (ctx.isPointInStroke(x, y)) {
              console.log(x, y);
              const canvas1 = document.createElement("canvas");
              canvas1.style.zIndex = "1001";
              canvas1.id = "canvas1";
              document.getElementById("canvasWrap")?.appendChild(canvas1);
              const ctx1 = canvas.getContext("2d");
              ctx1.fillText(
                `${item.name}：${item.number * 100}%`,
                x / ratio - 45,
                y / ratio - 45
              );
              /* ctx.font = `${100 / ratio}px`;
              console.log(textList);

              if (textList[index]?.flag === 1) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                textList[index].flag = 0;
              }
              tempCtx.drawImage(canvas, 0, 0);
              ctx.fillText(
                `${item.name}：${item.number * 100}%`,
                x / ratio - 45,
                y / ratio - 45
              ); */
      /*  ctx.strokeText(
                `${item.name}：${item.number * 100}%`,
                x / ratio - 45,
                y / ratio - 45
              ); */
      /*  textList[index] = {
                index,
                x: x / ratio - 45,
                y: y / ratio - 45,
                text: `${item.name}：${item.number * 100}%`,
                flag: 1,
              }; 
            }
          });
        }, 1000)
      ); */
      for (var i = 0; i < results.length; i++) {
        let radius = 70 + i * 7 * 2;
        let begin = (Math.PI * 3) / 2;
        let end =
          (Math.PI * 3) / 2 +
          (results[i].properties["状态"].rollup.number > 0
            ? Math.PI * 2 * results[i].properties["状态"].rollup.number
            : Math.PI * 2 * 0.002);
        ctx.strokeStyle = colors[i].replace("0.1", "1");
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, begin, end);
        ctx.stroke();
      }
    }
  });
  return (
    <div id="canvasWrap">
      <canvas id="canvas" width={400} height={400}></canvas>
    </div>
  );
};
export default Circle;
