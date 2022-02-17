const style =
`/*
** 你好呀，现在我要画一幅
** 可爱的小兔 Usagi 和小鸟 Piske 
** 把他们送给你，希望你喜欢哦
*/

.container {
  position: relative;
  top: 0;
  left: 0;
  /* background-color: #1f1f1f; */
  min-width: 100vh;
  min-height: 100vh;
}

.body {
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -125px;
  height: 400px;
  width: 250px;
  border-top-right-radius: 130px;
  border-top-left-radius: 130px;
  background: #fce840;
}

.eye1,
.eye2 {
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: white;
  z-index: 2;
  /* animation: move .5s linear infinite; */
}

.eye1 {
  top: 152px;
  left: 50%;
  margin-left: -69px;
}

.eye2 {
  top: 152px;
  left: 50%;
  margin-left: 9px;
}

.eye1::after,
.eye2::after {
  position: absolute;
  content: '';
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: black;
  z-index: 3;
}

.eye1::after {
  top: 15px;
  left: 15px;
}

.eye2::after {
  top: 15px;
  left: 15px;
}

.glass1,
.glass2 {
  position: absolute;
  top: 144px;
  left: 50%;
  width: 78px;
  height: 78px;
  background: #d2d1d2;
  border-radius: 50%;
  z-index: 1;
}

.glass1 {
  margin-left: -77px;
}

.glass3,
.glass4 {
  position: absolute;
  width: 52px;
  height: 26px;
  background: #000000;
  z-index: 0;
}

.glass3 {
  top: 170px;
  left: 50%;
  margin-left: -124px;
}

.glass4 {
  top: 170px;
  left: 50%;
  margin-left: 73px;
}

.mouth1,
.mouth2 {
  background: black;
  border-radius: 50%;
  position: absolute;
}

.mouth1 {
  height: 75px;
  width: 110px;
  top: 228px;
  left: 50%;
  margin-left: -55px;
}

.mouth2 {
  border-radius: 31%;
  height: 51px;
  width: 120px;
  background: #fce840;
  top: 227px;
  left: 50%;
  margin-left: -60px;
  z-index: 5;
}

.teeth1,
.teeth2,
.teeth3,
.teeth4,
.teeth5,
.teeth6 {
  position: absolute;
  height: 15px;
  width: 20px;
  border-radius: 50%;
  background: white;
  z-index: 4;
}

.teeth1 {
  top: 264px;
  left: 50%;
  margin-left: -50px;
}

.teeth2 {
  top: 268px;
  left: 50%;
  margin-left: -35px;
}

.teeth3 {
  top: 268px;
  left: 50%;
  margin-left: -17px;
}

.teeth4 {
  top: 269px;
  left: 50%;
}

.teeth5 {
  top: 268px;
  left: 50%;
  margin-left: 16px;
}

.teeth6 {
  top: 265px;
  left: 50%;
  margin-left: 32px;
}

.hand1,
.hand2 {
  position: absolute;
  border: 23px solid;
  width: 146px;
  height: 146px;
  border-radius: 45px;
  border-color: #fce840 transparent transparent transparent;
}

.hand1 {
  transform: rotate(90deg);
  top: 311px;
  left: 50%;
  margin-left: 6px;
}

.hand2 {
  transform: rotate(-90deg);
  top: 311px;
  left: 50%;
  margin-left: -153px;
}

.jeans1 {
  height: 100px;
  width: 248px;
  background: #496c8a;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  position: absolute;
  top: 450px;
  left: 50%;
  margin-left: -124px;
}

.jeans2 {
  height: 90px;
  width: 170px;
  background: #496c8a;
  position: absolute;
  top: 369px;
  left: 50%;
  margin-left: -85px;
}

.jeans3,
.jeans4 {
  position: absolute;
  height: 99px;
  width: 20px;
  background: #496c8a;
}

.jeans3 {
  top: 301px;
  left: 50%;
  margin-left: 88px;
  transform: rotate(46deg);
}

.jeans4 {
  top: 301px;
  left: 50%;
  margin-left: -107px;
  transform: rotate(-46deg);
}

.button1,
.button2 {
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
}

.button1 {
  top: 362px;
  left: 50%;
  margin-left: -85px;
}

.button2 {
  top: 362px;
  left: 50%;
  margin-left: 65px;
}

.leg1,
.leg2 {
  position: absolute;
  height: 40px;
  width: 25px;
  background: #496c8a;
}

.leg1 {
  top: 545px;
  left: 50%;
  margin-left: -50px;
}

.leg2 {
  top: 545px;
  left: 50%;
  margin-left: 25px;
}

.leg3,
.leg4 {
  position: absolute;
  height: 16px;
  width: 37px;
  background: #000000;
}

.leg3 {
  left: 50%;
  top: 580px;
  margin-left: 25px;
  border-top-right-radius: 50%;
}

.leg4 {
  left: 50%;
  top: 580px;
  margin-left: -62px;
  border-top-left-radius: 50%;
}

.glove1,
.glove2 {
  position: absolute;
  height: 44px;
  width: 22px;
  background: black;
  z-index: 5;
}

.glove1 {
  left: 50%;
  top: 424px;
  margin-left: 110px;
  transform: rotate(48deg);
}

.glove2 {
  left: 50%;
  top: 422px;
  margin-left: -136px;
  transform: rotate(-42deg);
}

.pocket1,
.pocket2 {
  height: 0;
  width: 0;
  border: 14px solid #607D8B;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-right-radius: 30px;
  background: #607D8B;
  position: absolute;
  z-index: 4;
}

.pocket1 {
  top: 450px;
  left: 50%;
  margin-left: 91px;
  transform: rotate(93deg);
}

.pocket2 {
  top: 450px;
  left: 50%;
  margin-left: -121px;
  transform: rotate(-3deg);
}

.copyright {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #607D8B;
  font-size: 18px;
  text-transform: capitalize;
  min-width: 100%;
}

.copyright a {
  color: #3498db;
}

/*
** 这样我们就画完啦，不知道你喜欢吗
** 我们下次再见啦，拜拜~
*/`

export default style