"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[120],{6120:function(e,n,s){s.r(n);var a=s(9439),i=s(2791),t=s(1243),c=s(8441),r=s(921),l=s(184),o="https://65056b0eef808d3c66f00342.mockapi.io/adverts";n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),s=n[0],d=n[1],u=(0,i.useState)([]),m=(0,a.Z)(u,2),p=m[0],h=m[1];(0,i.useEffect)((function(){(0,t.Z)(o).then((function(e){d(e.data),h(e.data.slice(0,8))}))}),[]);return(0,i.useEffect)((function(){(0,t.Z)(o).then((function(e){return d(e.data)}))}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.h,{cars:p}),p.length<s.length&&(0,l.jsx)(r.n,{onClick:function(){var e=p.length+8;h(s.slice(0,e))}})]})}},8441:function(e,n,s){s.d(n,{h:function(){return g}});var a=s(9439),i={item:"CarItem_item__EKxTS",pic:"CarItem_pic__Katue",img:"CarItem_img__6EGKY",description:"CarItem_description__CV5Bv",features:"CarItem_features__Ktwdn",btn:"CarItem_btn__Q74D8",likeBtn:"CarItem_likeBtn__5MJXn",model:"CarItem_model__4Zbo+"},t=s(2791);var c=s.p+"static/media/heart.ac060e771360fcc26ebb0c86173c8396.svg";var r=s.p+"static/media/heartBlue.623a3b874365d724c658e79a860ad4a4.svg",l=s(6747),o=s(8402),d={pic:"CarModal_pic__7j1sL",title:"CarModal_title__yiBEr",model:"CarModal_model__DRy5q",info:"CarModal_info__YFhds",description:"CarModal_description__8zjGW",subtitle:"CarModal_subtitle__xzwCk",features:"CarModal_features__S+0Lk",btn:"CarModal_btn__n3oNM",conditions:"CarModal_conditions__o9jcE",condition:"CarModal_condition__rW6Io",accent:"CarModal_accent__Q-ld5",closeBtn:"CarModal_closeBtn__3574e"},u=s(5984);var m=s.p+"static/media/close.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",p=s(1087),h=s(184),_={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"541px",height:"752px",bgcolor:"background.paper",borderRadius:"24px",boxShadow:24,p:4,padding:"40px",alightItems:"center",justifyContent:"center"};function x(e){var n=e.isOpen,s=e.onClose,i=e.img,c=e.alt,r=e.make,x=e.model,f=e.year,j=e.city,b=e.country,C=e.id,v=e.type,g=e.fuel,N=e.engine,y=e.func,k=e.conditions,M=e.price,B=e.mileage,I=t.useState(n),S=(0,a.Z)(I,2),Z=S[0],L=S[1],E=function(){L(!1),s()},w=B.toString().split("");w.splice(1,0,",");var W=w.join("");return(0,h.jsx)("div",{children:(0,h.jsx)(o.Z,{open:Z,onClose:E,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,h.jsxs)(l.Z,{sx:_,children:[(0,h.jsx)("button",{type:"button",onClick:E,className:d.closeBtn,children:(0,h.jsx)("img",{src:m,alt:"close icon"})}),(0,h.jsx)("img",{src:i,alt:c,className:d.pic}),(0,h.jsxs)("h2",{className:d.title,children:[r," ",(0,h.jsx)("span",{className:d.model,children:x}),", ",f]}),(0,h.jsxs)("div",{className:d.info,children:[(0,h.jsxs)("span",{children:[j," |"]}),(0,h.jsxs)("span",{children:[" ",b," |"]}),(0,h.jsxs)("span",{children:[" Id: ",C," |"]}),(0,h.jsxs)("span",{children:[" Year: ",f," |"]}),(0,h.jsxs)("span",{children:[" Type: ",v," |"]}),(0,h.jsxs)("span",{children:[" Fuel Consumption: ",g," |"]}),(0,h.jsxs)("span",{children:[" Engine Size: ",N," "]})]}),(0,h.jsx)("p",{className:d.description,children:c}),(0,h.jsx)("h3",{className:d.subtitle,children:"Accessories and functionalities:"}),(0,h.jsx)("p",{className:d.features,children:y.join(" | ")}),(0,h.jsx)("h3",{className:d.subtitle,children:"Rental conditions:"}),(0,h.jsxs)("div",{className:d.conditions,children:[k.split("\n").map((function(e){var n=e.match(/(\D+)(\d+)/);if(n){var s=n[1],a=n[2];return(0,h.jsxs)("span",{className:d.condition,children:[s,(0,h.jsx)("span",{className:d.accent,children:a})]},(0,u.x0)())}return(0,h.jsx)("span",{className:d.condition,children:e},(0,u.x0)())})),(0,h.jsxs)("span",{className:d.condition,children:["Mileage: ",(0,h.jsx)("span",{className:d.accent,children:W})]}),(0,h.jsxs)("span",{className:d.condition,children:["Price: ",(0,h.jsx)("span",{className:d.accent,children:M})]})]}),(0,h.jsx)(p.rU,{type:"button",className:d.btn,children:"Rental car"})]})})})}var f=s(9434),j=s(6351),b=s(993);function C(e){var n=e.car,s=(0,f.v9)(j.W).favorites.some((function(e){return e.id===n.id})),l=(0,t.useState)(!1),o=(0,a.Z)(l,2),d=o[0],u=o[1],m=(0,t.useState)(s),p=(0,a.Z)(m,2),_=p[0],C=p[1],v=(0,f.I0)(),g=n.address.split(",").reverse()[1],N=n.address.split(",").reverse()[0];return(0,h.jsxs)("li",{className:i.item,children:[(0,h.jsx)("button",{type:"button",className:i.likeBtn,onClick:function(){if(_)return v((0,b.Ni)(n)),void C(!1);v((0,b.oW)(n)),C(!0)},children:(0,h.jsx)("img",{src:_?r:c,alt:"heart"})}),(0,h.jsx)("div",{className:i.pic,children:(0,h.jsx)("img",{src:n.photoLink||n.img,alt:n.description,className:i.img})}),(0,h.jsxs)("div",{className:i.description,children:[(0,h.jsxs)("p",{children:[n.make," ",(0,h.jsx)("span",{className:i.model,children:n.model}),", ",n.year]}),(0,h.jsx)("p",{children:n.rentalPrice})]}),(0,h.jsxs)("div",{className:i.features,children:[(0,h.jsxs)("span",{children:[g," |"]}),(0,h.jsxs)("span",{children:[" ",N," |"]}),(0,h.jsxs)("span",{children:[" ",n.rentalCompany," |"]}),(0,h.jsxs)("span",{children:[" ",n.type," |"]}),(0,h.jsxs)("span",{children:[" ",n.accessories[0]," "]})]}),(0,h.jsx)("button",{className:i.btn,type:"button",onClick:function(){u(!0)},children:"Learn more"}),d&&(0,h.jsx)(x,{isOpen:d,onClose:function(){u(!1)},img:n.photoLink||n.img,alt:n.description,make:n.make,model:n.model,year:n.year,city:g,country:N,id:n.id,type:n.type,fuel:n.fuelConsumption,engine:n.engineSize,func:n.functionalities,conditions:n.rentalConditions,price:n.rentalPrice,mileage:n.mileage})]})}var v={list:"CarList_list__Bss5J"};function g(e){var n=e.cars;return(0,h.jsx)("ul",{className:v.list,children:n.map((function(e){return(0,h.jsx)(C,{car:e},(0,u.x0)())}))})}},921:function(e,n,s){s.d(n,{n:function(){return t}});var a={loadMoreBtn:"LoadMoreButton_loadMoreBtn__XaYDW"},i=s(184);function t(e){var n=e.onClick;return(0,i.jsx)("button",{onClick:n,className:a.loadMoreBtn,children:"Load more"})}},6351:function(e,n,s){s.d(n,{W:function(){return a}});var a=function(e){return e.favorite}}}]);
//# sourceMappingURL=120.157722da.chunk.js.map