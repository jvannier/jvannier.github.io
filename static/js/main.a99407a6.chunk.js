(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(19),o=n.n(s),r=(n(25),n(7)),c=n(8),l=n(10),h=n(9),u=n(11),d=(n(26),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(r.a)(this,n);var a=[" ________________ \n","|  _  |  _____|  |\n","| | | | |  ____  |\n","|___|     |___ | |\n","|  _   _|______| |\n","|_|  _|  ________|\n","____|_____________\n"],s=(i=t.call(this,e)).deepcopy(a);return s[a.length-1]=i.addXToRow(s[a.length-1],0),void 0!==i.state&&void 0!==i.state.game||(i.state={base_game:a,game:s,position:[a.length-1,0]}),i.movePosition=i.movePosition.bind(Object(u.a)(i)),i.pressKey=i.pressKey.bind(Object(u.a)(i)),i.checkBounds=i.checkBounds.bind(Object(u.a)(i)),i.changeBoard=i.changeBoard.bind(Object(u.a)(i)),i.changeBoard(),document.onkeydown=i.pressKey,i}return Object(c.a)(n,[{key:"deepcopy",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}},{key:"addXToRow",value:function(e,t){return e.substring(0,t)+"x"+e.substring(t+1)}},{key:"changeBoard",value:function(){var e=this.deepcopy(this.state.base_game),t=this.state.position[0],n=this.state.position[1],i=this.addXToRow(e[t],n);e[t]=i,this.setState({game:e})}},{key:"checkBounds",value:function(e,t){var n=this.state.game.length,i=this.state.game[0].length,a=this.state.position[0]+e,s=this.state.position[1]+t;if(a>n-1)return!1;if(a<0)return!1;if(s>i-2)return!1;if(s<0)return!1;var o=this.state.game[a][s];if("|"===o)return!1;if(-1===e&&"_"===o)return!1;var r=this.state.base_game[this.state.position[0]][this.state.position[1]];return(1!==e||"_"!==r)&&(a===n-1&&s===i-2&&alert("You win! Congrats!"),!0)}},{key:"movePosition",value:function(e,t){!1!==this.checkBounds(e,t)&&(this.setState({position:[this.state.position[0]+e,this.state.position[1]+t]}),this.changeBoard())}},{key:"pressKey",value:function(e){switch(e.keyCode){case 37:this.movePosition(0,-1);break;case 38:this.movePosition(-1,0);break;case 39:this.movePosition(0,1);break;case 40:this.movePosition(1,0)}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h4",{className:"header",children:"Game:"}),Object(d.jsx)("pre",{className:"game",children:this.state.game})]})}}]),n}(a.a.Component),m=(n(28),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){for(var e=window.prompt("WE GO AGAIN?");"string"==typeof e&&"yes"===e.toLowerCase();)e=window.prompt("WE GO AGAIN?")}),0)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h4",{className:"header",children:"Looooooooooooops"})})}}]),n}(a.a.Component)),b=(n(29),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h4",{className:"header",children:"Classroom Norms:"}),Object(d.jsx)("div",{className:"norms",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Follow the code of ethics"}),Object(d.jsx)("li",{children:"Mute yourself"}),Object(d.jsx)("li",{children:"Put pronouns as part of your Zoom names."}),Object(d.jsx)("li",{children:"Be present in class from beginning to ending. Attendance will be taken at beginning and ending. Please message one of the instructors if you need to logout"}),Object(d.jsx)("li",{children:"Raise hand or type in chat for questions"}),Object(d.jsx)("li",{children:"We strongly encourage turning on video, so you feel present in the classroom"}),Object(d.jsx)("li",{children:"Be respectful"}),Object(d.jsx)("li",{children:"10 minute break on the hour mark"}),Object(d.jsx)("li",{children:"Use Slack for communication. Instructors will respond before the next class starts"}),Object(d.jsx)("li",{children:"Submit any required quizzes and/or assignments before the next class meeting (grading policy in Canvas Syllabus)"})]})}),Object(d.jsx)("h5",{className:"header2",children:"After Learning Git"}),Object(d.jsx)("div",{className:"norms",children:Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:"Have the Activity cloned locally before every class so you can follow along with us"})})})]})}}]),n}(a.a.Component)),_=(n(30),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),void 0!==(i=t.call(this,e)).state&&void 0!==i.state.time_in_minutes||(i.state={time_in_minutes:10,timer_interval:null}),i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.timer=i.timer.bind(Object(u.a)(i)),i}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({time_in_minutes:e.target.value})}},{key:"timer",value:function(){null!=this.state.timer_interval&&clearInterval(this.state.timer_interval);var e=this.state.time_in_minutes;document.getElementById("timer").innerHTML=String(e)+":00";var t,n=Date.now()+6e4*parseInt(e);this.setState({timer_interval:setInterval((function(){if(null!==document.getElementById("timer")){t=n-Date.now();var e=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);document.getElementById("timer").innerHTML=String(e)+":"+String(i).padStart(2,"0"),t<=0&&(void 0!==this.state&&clearInterval(this.state.timer_interval),document.getElementById("timer").innerHTML="Class Time!")}}),1e3)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h2",{className:"break_timer",children:"Break Timer:"}),Object(d.jsxs)("label",{id:"label",children:["Time:",Object(d.jsx)("input",{type:"text",value:this.state.time_in_minutes,onChange:this.handleChange})]}),Object(d.jsx)("button",{onClick:this.timer,children:"Start"}),Object(d.jsx)("h1",{id:"timer",children:"10:00"})]})}}]),n}(a.a.Component)),g=(n(31),n(13)),O=n(2),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)(g.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)(g.b,{className:"pageLink",to:"/timer",children:"Timer"}),Object(d.jsx)(g.b,{className:"pageLink",to:"/norms",children:"Class Norms"}),Object(d.jsx)(g.b,{className:"pageLink",to:"/game",children:"Game"}),Object(d.jsx)(g.b,{className:"pageLink",to:"/again",children:"AGAIN"}),Object(d.jsx)(g.b,{className:"pageLink",to:"/nothing",children:"Nothing"})]}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/timer",component:_}),Object(d.jsx)(O.a,{path:"/norms",component:b}),Object(d.jsx)(O.a,{path:"/game",component:j}),Object(d.jsx)(O.a,{path:"/again",component:m}),Object(d.jsx)(O.a,{path:"/nothing",component:v}),Object(d.jsx)(O.a,{exact:!0,path:"/",component:_})]})]})})}}]),n}(a.a.Component),v=function(){return Object(d.jsx)("div",{children:"Nothing"})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.a99407a6.chunk.js.map