(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{MCT3:function(t,e,n){"use strict";n.r(e),n.d(e,"AppointmentsModule",function(){return p});var b=n("ofXK"),c=n("tyNb"),i=n("fXoL"),o=n("I/3d");function r(t,e){if(1&t){const t=i.Sb();i.Rb(0,"tr"),i.Rb(1,"td"),i.wc(2),i.dc(3,"date"),i.Qb(),i.Rb(4,"td"),i.wc(5),i.dc(6,"date"),i.Qb(),i.Rb(7,"td"),i.wc(8),i.Qb(),i.Rb(9,"td"),i.wc(10),i.Qb(),i.Rb(11,"td"),i.Rb(12,"span",7),i.wc(13,"Processing"),i.Qb(),i.Qb(),i.Rb(14,"td"),i.Rb(15,"a",8),i.Nb(16,"i",9),i.Qb(),i.Rb(17,"a",10),i.Yb("click",function(){return i.rc(t),i.cc().deleteAppointment()}),i.Nb(18,"i",11),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=e.$implicit;i.Ab(2),i.xc(i.fc(3,4,t.date.toMillis(),"mediumDate")),i.Ab(3),i.xc(i.fc(6,7,t.time.toMillis(),"shortTime")),i.Ab(3),i.xc(t.name),i.Ab(2),i.xc(t.phone)}}const s=[{path:"",component:(()=>{class t{constructor(t){this.firestore=t;const e=this.firestore.collection("appointments"),n=e.valueChanges();this.appointments$=n,e.snapshotChanges().forEach(t=>{t.map(t=>{this.id=t.payload.doc.id})})}ngOnInit(){}deleteAppointment(){confirm("Delete?")&&this.firestore.collection("appointments").doc(this.id).delete()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["sm-appointment-list"]],decls:24,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"innerWrapper"],[1,"orderBox","patternbg","text-center"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"label","label-primary"],[1,"btn","btn-default","mr-2"],[1,"ti-pencil"],[1,"btn","btn-default",3,"click"],[1,"ti-close"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.wc(4,"All Appointments"),i.Qb(),i.Rb(5,"div",4),i.Rb(6,"table",5),i.Rb(7,"thead"),i.Rb(8,"tr"),i.Rb(9,"th"),i.wc(10,"Date"),i.Qb(),i.Rb(11,"th"),i.wc(12,"Time"),i.Qb(),i.Rb(13,"th"),i.wc(14,"Name"),i.Qb(),i.Rb(15,"th"),i.wc(16,"Phone"),i.Qb(),i.Rb(17,"th"),i.wc(18,"Status"),i.Qb(),i.Rb(19,"th"),i.wc(20,"Actions"),i.Qb(),i.Qb(),i.Qb(),i.Rb(21,"tbody"),i.vc(22,r,19,10,"tr",6),i.dc(23,"async"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Ab(22),i.ic("ngForOf",i.ec(23,1,e.appointments$)))},directives:[b.k],pipes:[b.b,b.e],styles:[".innerWrapper[_ngcontent-%COMP%]{margin-top:2rem}"]}),t})()}];let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[c.c.forChild(s)],c.c]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[b.c,a]]}),t})()}}]);