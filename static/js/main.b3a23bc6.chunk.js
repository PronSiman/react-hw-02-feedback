(this["webpackJsonpreact-tpl"]=this["webpackJsonpreact-tpl"]||[]).push([[0],{16:function(t,e,n){t.exports=n(23)},23:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),l=n(8),i=n(9),o=n(10),s=n(15),f=n(14),m=n(1),p=n(2);function b(){var t=Object(m.a)(["\n  margin-left: 15px;\n  margin-right: 15px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return b=function(){return t},t}var d=p.a.button(b()),v=function(t){var e=t.name,n=t.onButtonClick;return r.a.createElement(d,{onClick:function(){n(e)}},e)};function k(){var t=Object(m.a)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return k=function(){return t},t}var E=p.a.ul(k()),g=function(t){var e=t.statistic,n=t.total,a=t.positiveFeedBack,c=Object.entries(e);return r.a.createElement(E,null,c.map((function(t){return r.a.createElement("li",{key:t[0]},r.a.createElement("span",null,t[0],":")," ",r.a.createElement("span",null,t[1]))})),r.a.createElement("span",null,"total: ",n),r.a.createElement("span",null,"positive feedback: ",a," %"))};function h(){var t=Object(m.a)(["\n  text-align: center;\n"]);return h=function(){return t},t}function j(){var t=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]);return j=function(){return t},t}function O(){var t=Object(m.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n"]);return O=function(){return t},t}function y(){var t=Object(m.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]);return y=function(){return t},t}function x(){var t=Object(m.a)(["\n  width: 375px;\n  margin: 0 auto;\n"]);return x=function(){return t},t}var C=p.a.div(x()),B=p.a.h1(y()),F=p.a.ul(O()),w=p.a.h2(j()),T=p.a.p(h()),H=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.buttonClickHeadler=function(e){t.setState((function(t){return Object(l.a)({},e,t[e]+1)}),t.countTotalFeedback)},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.good,n=this.countTotalFeedback(),a=Math.floor(e/n*100),c=Object.keys(this.state);return r.a.createElement(C,null,r.a.createElement(B,null,"Please leave feedback"),r.a.createElement(F,null,c.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(v,{name:e,onButtonClick:t.buttonClickHeadler}))}))),r.a.createElement(w,null,"Statistic"),0!==n&&r.a.createElement(g,{statistic:this.state,total:n,positiveFeedBack:a})||r.a.createElement(T,null,"No feedback given"))}}]),n}(a.Component);var J=function(){return r.a.createElement(H,null)};u.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b3a23bc6.chunk.js.map