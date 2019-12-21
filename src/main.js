let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是fanison
*接下来要画一个八卦图
*首先准备一个div
*/
#div1{
  border:2px solid red;
  width:200px;
  height:200px;
}
/* 接下来把 div变成八卦图
* 首先把div变成一个圆
**/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳形成的，一黑一白
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#div1::before,#div1::after{
  display:block;
}
`;
let n = 0;
let string2 = "";
// string = string.replace(/\n/g, "<br>");
// html.innerHTML = string.substring(0, n);

let step = () => {
  setTimeout(() => {
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n + 1);
    n = n + 1;
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (string[n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格
      string2 += "&nbsp";
    } else {
      //如果是回车，就照搬
      string2 += string[n];
    }
    //string2 += (string[n] === "\n" ? "<br>":string[n])
    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      step();
    }
    // html.innerHTML = string.substring(0, n + 1);
  }, 50);
};
step();
