(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2ZYR":function(t,e,a){},f118:function(t,e,a){"use strict";var n=a("2ZYR");a.n(n).a},tkto:function(t,e,a){var n=a("I+eb"),o=a("ewvW"),r=a("33Wh");n({target:"Object",stat:!0,forced:a("0Dky")((function(){r(1)}))},{keys:function(t){return r(o(t))}})},w981:function(t,e,a){"use strict";a.r(e);a("oVuX"),a("2B1R"),a("tkto"),a("07d7");var n=a("VTBJ"),o={data:function(){return{formData:{}}},methods:{encode:function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},handleSubmit:function(t){var e=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(Object(n.a)({"form-name":t.target.getAttribute("name")},this.formData))}).then((function(){return e.$router.push("/success")})).catch((function(t){return alert(t)}))}}},r=(a("f118"),a("KHd+")),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{headerTitle:"Contact Me",headerSubtitle:"Let's get in touch"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"flex-wrapper"},[a("div",{staticClass:"column"},[a("p",[a("font-awesome",{staticClass:"icon",attrs:{icon:["far","envelope"]}}),a("a",{attrs:{href:"mailto:chadcollins.co@gmail.com"}},[t._v("chadcollins.co@gmail.com")])],1),a("p",[a("font-awesome",{staticClass:"icon",attrs:{icon:["fab","linkedin"]}}),a("a",{attrs:{href:"https://linkedin.com/in/chadacollins"}},[t._v("linkedin.com/in/chadacollins")])],1),a("p",[a("font-awesome",{staticClass:"icon",attrs:{icon:["fab","github"]}}),a("a",{attrs:{href:"https://github.com/chad-collins"}},[t._v("github.com/chad-collins")])],1)]),a("form",{staticClass:"form column",attrs:{name:"contact",method:"post",action:"/success/","data-netlify":"true","data-netlify-honeypot":"bot-field"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),a("p",{attrs:{hidden:""}},[a("label",[t._v("\n            Don’t fill this out:\n            "),a("input",{attrs:{name:"bot-field"}})])]),a("label",{attrs:{for:"name"}},[t._v("Your name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],attrs:{type:"text",name:"name",placeholder:"Your name ..",required:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("Your email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email",name:"email",placeholder:"Your email ..",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),a("label",{attrs:{for:"subject"}},[t._v("Subject")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.subject,expression:"formData.subject"}],attrs:{type:"text",name:"subject",placeholder:"Subject line ..",required:""},domProps:{value:t.formData.subject},on:{input:function(e){e.target.composing||t.$set(t.formData,"subject",e.target.value)}}}),a("label",{attrs:{for:"message"}},[t._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],attrs:{name:"message",required:""},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}}),a("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Submit")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);