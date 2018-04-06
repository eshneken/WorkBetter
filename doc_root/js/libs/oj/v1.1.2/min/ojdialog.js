/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore","jqueryui-amd/draggable"],function(a,f){(function(){var d=!1;f(document).mouseup(function(){d=!1});a.Da("oj.ojResizable",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,
resize:null,start:null,stop:null},eba:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a.dba(c)}).bind("click."+this.widgetName,function(c){if(!0===f.data(c.target,a.widgetName+".preventClickEvent"))return f.removeData(c.target,a.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1})},cba:function(){this.element.unbind("."+this.widgetName);this.Xz&&this.document.unbind("mousemove."+this.widgetName,this.Xz).unbind("mouseup."+this.widgetName,this.rH)},
dba:function(a){if(!d){this.Jm&&this.Yz(a);this.Vz=a;var c=this,e=1===a.which,g="string"===typeof this.options.cancel&&a.target.nodeName?f(a.target).closest(this.options.cancel).length:!1;if(!e||g||!this.bba(a))return!0;(this.Iw=!this.options.delay)||setTimeout(function(){c.Iw=!0},this.options.delay);if(this.dU(a)&&this.Iw&&(this.Jm=!1!==this.qH(a),!this.Jm))return a.preventDefault(),!0;!0===f.data(a.target,this.widgetName+".preventClickEvent")&&f.removeData(a.target,this.widgetName+".preventClickEvent");
this.Xz=function(a){return c.fba(a)};this.rH=function(a){return c.Yz(a)};this.document.bind("mousemove."+this.widgetName,this.Xz).bind("mouseup."+this.widgetName,this.rH);a.preventDefault();return d=!0}},fba:function(a){if(f.ui.Wia&&(!document.documentMode||9>document.documentMode)&&!a.button||!a.which)return this.Yz(a);if(this.Jm)return this.Wz(a),a.preventDefault();this.dU(a)&&this.Iw&&((this.Jm=!1!==this.qH(this.Vz,a))?this.Wz(a):this.Yz(a));return!this.Jm},Yz:function(a){this.document.unbind("mousemove."+
this.widgetName,this.Xz).unbind("mouseup."+this.widgetName,this.rH);this.Jm&&(this.Jm=!1,a.target===this.Vz.target&&f.data(a.target,this.widgetName+".preventClickEvent",!0),this.bv(a));return d=!1},dU:function(a){return Math.max(Math.abs(this.Vz.pageX-a.pageX),Math.abs(this.Vz.pageY-a.pageY))>=this.options.distance},Cia:function(){return this.Iw},vH:function(a){return parseInt(a,10)||0},Md:function(a){return!isNaN(parseInt(a,10))},JS:function(a,c){if("hidden"===f(a).css("overflow"))return!1;var d=
c&&"left"===c?"scrollLeft":"scrollTop",g=!1;if(0<a[d])return!0;a[d]=1;g=0<a[d];a[d]=0;return g},_ComponentCreate:function(){this._super();var a,c,d,g,h,k=this;a=this.options;this.element.addClass("oj-resizable");f.extend(this,{PB:this.element,jA:[],Gj:null});this.handles=a.handles||(f(".oj-resizable-handle",this.element).length?{cja:".oj-resizable-n",Oia:".oj-resizable-e",lja:".oj-resizable-s",Gc:".oj-resizable-w",nja:".oj-resizable-se",pja:".oj-resizable-sw",dja:".oj-resizable-ne",gja:".oj-resizable-nw"}:
"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},c=0;c<a.length;c++)d=f.trim(a[c]),h="oj-resizable-"+d,g=f("\x3cdiv class\x3d'oj-resizable-handle "+h+"'\x3e\x3c/div\x3e"),this.handles[d]=".oj-resizable-"+d,this.element.append(g);this.Ica=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.Ica();this.l$=
f(".oj-resizable-handle",this.element);this.l$.mouseover(function(){k.k_||(this.className&&(g=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),k.axis=g&&g[1]?g[1]:"se")});this.eba()},_destroy:function(){this.cba();f(this.PB).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},bba:function(a){var c,d,g=!1;for(c in this.handles)if(d=f(this.handles[c])[0],
d===a.target||f.contains(d,a.target))g=!0;return!this.options.disabled&&g},qH:function(a){var c,d,g;g=this.options;c=this.element.position();var h=this.element;this.k_=!0;/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".oj-draggable")&&h.css({position:"absolute",top:c.top,left:c.left});this.Jca();c=this.vH(this.helper.css("left"));d=this.vH(this.helper.css("top"));g.containment&&(c+=f(g.containment).scrollLeft()||0,d+=f(g.containment).scrollTop()||
0);this.offset=this.helper.offset();this.position={left:c,top:d};this.size={width:h.width(),height:h.height()};this.fj={width:h.width(),height:h.height()};this.xn={left:c,top:d};this.YB={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()};this.Xga={left:a.pageX,top:a.pageY};this.Sj=this.fj.width/this.fj.height||1;g=f(".oj-resizable-"+this.axis).css("cursor");f("body").css("cursor","auto"===g?this.axis+"-resize":g);h.addClass("oj-resizable-resizing");this.MH("start",a);this.g4(a);this.u5(a);
return!0},Wz:function(a){var c,d=this.helper,g={},h=this.Xga;c=a.pageX-h.left||0;var h=a.pageY-h.top||0,k=this.rg[this.axis];this.Fs={top:this.position.top,left:this.position.left};this.Gs={width:this.size.width,height:this.size.height};if(!k)return!1;c=k.apply(this,[a,c,h]);this.Hea(a.shiftKey);a.shiftKey&&(c=this.Gea(c,a));c=this.Uca(c,a);this.Aea(c);this.MH("resize",a);this.f4(a,this.ui());this.t5(a,this.ui());this.position.top!==this.Fs.top&&(g.top=this.position.top+"px");this.position.left!==
this.Fs.left&&(g.left=this.position.left+"px");this.size.width!==this.Gs.width&&(g.width=this.size.width+"px");this.size.height!==this.Gs.height&&(g.height=this.size.height+"px");d.css(g);!this.Gj&&this.jA.length&&this.Vba();f.isEmptyObject(g)||this._trigger("resize",a,this.ui());return!1},bv:function(a){this.k_=!1;f("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.MH("stop",a);this.h4(a);this.v5(a);return!1},Hea:function(a){var c,d,f,h;h=this.options;h={minWidth:this.Md(h.minWidth)?
h.minWidth:0,maxWidth:this.Md(h.maxWidth)?h.maxWidth:Infinity,minHeight:this.Md(h.minHeight)?h.minHeight:0,maxHeight:this.Md(h.maxHeight)?h.maxHeight:Infinity};a&&(a=h.minHeight*this.Sj,d=h.minWidth/this.Sj,c=h.maxHeight*this.Sj,f=h.maxWidth/this.Sj,a>h.minWidth&&(h.minWidth=a),d>h.minHeight&&(h.minHeight=d),c<h.maxWidth&&(h.maxWidth=c),f<h.maxHeight&&(h.maxHeight=f));this.Kea=h},Aea:function(a){this.offset=this.helper.offset();this.Md(a.left)&&(this.position.left=a.left);this.Md(a.top)&&(this.position.top=
a.top);this.Md(a.height)&&(this.size.height=a.height);this.Md(a.width)&&(this.size.width=a.width)},Gea:function(a){var c=this.position,d=this.size,f=this.axis;this.Md(a.height)?a.width=a.height*this.Sj:this.Md(a.width)&&(a.height=a.width/this.Sj);"sw"===f&&(a.left=c.left+(d.width-a.width),a.top=null);"nw"===f&&(a.top=c.top+(d.height-a.height),a.left=c.left+(d.width-a.width));return a},Uca:function(a){var c=this.Kea,d=this.axis,f=this.Md(a.width)&&c.maxWidth&&c.maxWidth<a.width,h=this.Md(a.height)&&
c.maxHeight&&c.maxHeight<a.height,k=this.Md(a.width)&&c.minWidth&&c.minWidth>a.width,l=this.Md(a.height)&&c.minHeight&&c.minHeight>a.height,m=this.xn.left+this.fj.width,n=this.position.top+this.size.height,q=/sw|nw|w/.test(d),d=/nw|ne|n/.test(d);k&&(a.width=c.minWidth);l&&(a.height=c.minHeight);f&&(a.width=c.maxWidth);h&&(a.height=c.maxHeight);k&&q&&(a.left=m-c.minWidth);f&&q&&(a.left=m-c.maxWidth);l&&d&&(a.top=n-c.minHeight);h&&d&&(a.top=n-c.maxHeight);a.width||a.height||a.left||!a.top?a.width||
a.height||a.top||!a.left||(a.left=null):a.top=null;return a},Vba:function(){if(this.jA.length){var a,c,d,f,h,k=this.helper||this.element;for(a=0;a<this.jA.length;a++){h=this.jA[a];if(!this.as)for(this.as=[],d=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],f=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")],c=0;c<d.length;c++)this.as[c]=(parseInt(d[c],10)||0)+(parseInt(f[c],10)||0);h.css({height:k.height()-
this.as[0]-this.as[2]||0,width:k.width()-this.as[1]-this.as[3]||0})}}},Jca:function(){this.element.offset();this.helper=this.element},rg:{e:function(a,c){return{width:this.fj.width+c}},w:function(a,c){return{left:this.xn.left+c,width:this.fj.width-c}},n:function(a,c,d){return{top:this.xn.top+d,height:this.fj.height-d}},s:function(a,c,d){return{height:this.fj.height+d}},se:function(a,c,d){return f.extend(this.rg.s.apply(this,arguments),this.rg.e.apply(this,[a,c,d]))},sw:function(a,c,d){return f.extend(this.rg.s.apply(this,
arguments),this.rg.w.apply(this,[a,c,d]))},ne:function(a,c,d){return f.extend(this.rg.n.apply(this,arguments),this.rg.e.apply(this,[a,c,d]))},nw:function(a,c,d){return f.extend(this.rg.n.apply(this,arguments),this.rg.w.apply(this,[a,c,d]))}},MH:function(a,c){"resize"!==a&&this._trigger(a,c,this.ui())},g4:function(){function a(b){f(b).each(function(){var a=f(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),
10)})})}var c=this.options;"object"!==typeof c.alsoResize||c.alsoResize.parentNode?a(c.alsoResize):c.alsoResize.length?(c.alsoResize=c.alsoResize[0],a(c.alsoResize)):f.each(c.alsoResize,function(c){a(c)})},f4:function(a,c){function d(a,b){f(a).each(function(){var a=f(this),d=f(this).data("oj-resizable-alsoresize"),e={};f.each(b&&b.length?b:a.parents(c.PB[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var c=(d[b]||0)+(l[b]||0);c&&0<=c&&(e[b]=c||null)});a.css(e)})}var g=
this.options,h=this.fj,k=this.xn,l={height:this.size.height-h.height||0,width:this.size.width-h.width||0,top:this.position.top-k.top||0,left:this.position.left-k.left||0};"object"!==typeof g.alsoResize||g.alsoResize.nodeType?d(g.alsoResize,null):f.each(g.alsoResize,function(a,b){d(a,b)})},h4:function(){f(this).removeData("oj-resizable-alsoresize")},u5:function(){var a,c,d,g,h,k=this,l=k.element;d=k.options.containment;if(l=d instanceof f?d.get(0):/parent/.test(d)?l.parent().get(0):d)k.iB=f(l),/document/.test(d)||
d===document?(k.jB={left:0,top:0},k.HX={left:0,top:0},k.yn={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}):(a=f(l),c=[],f(["Top","Right","Left","Bottom"]).each(function(d,e){c[d]=k.vH(a.css("padding"+e))}),k.jB=a.offset(),k.HX=a.position(),k.IX={height:a.innerHeight()-c[3],width:a.innerWidth()-c[1]},d=k.jB,g=k.IX.height,h=k.IX.width,h=k.JS(l,"left")?l.scrollWidth:h,g=k.JS(l)?l.scrollHeight:g,k.yn={element:l,left:d.left,
top:d.top,width:h,height:g})},t5:function(a,c){var d,f,h,k;d=this.options;f=this.jB;k=this.position;var l=a.shiftKey;h={top:0,left:0};var m=this.iB,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(h=f);k.left<(this.Gj?f.left:0)&&(this.size.width+=this.Gj?this.position.left-f.left:this.position.left-h.left,l&&(this.size.height=this.size.width/this.Sj,n=!1),this.position.left=d.helper?f.left:0);k.top<(this.Gj?f.top:0)&&(this.size.height+=this.Gj?this.position.top-f.top:this.position.top,l&&
(this.size.width=this.size.height*this.Sj,n=!1),this.position.top=this.Gj?f.top:0);this.offset.left=this.yn.left+this.position.left;this.offset.top=this.yn.top+this.position.top;d=Math.abs((this.Gj?this.offset.left-h.left:this.offset.left-f.left)+this.YB.width);f=Math.abs((this.Gj?this.offset.top-h.top:this.offset.top-f.top)+this.YB.height);h=this.iB.get(0)===this.element.parent().get(0);k=/relative|absolute/.test(this.iB.css("position"));h&&k&&(d-=Math.abs(this.yn.left));d+this.size.width>=this.yn.width&&
(this.size.width=this.yn.width-d,l&&(this.size.height=this.size.width/this.Sj,n=!1));f+this.size.height>=this.yn.height&&(this.size.height=this.yn.height-f,l&&(this.size.width=this.size.height*this.Sj,n=!1));n||(this.position.left=c.Fs.left,this.position.top=c.Fs.top,this.size.width=c.Gs.width,this.size.height=c.Gs.height)},v5:function(){var a=this.options,c=this.jB,d=this.HX,g=this.iB,h=f(this.helper),k=h.offset(),l=h.outerWidth()-this.YB.width,h=h.outerHeight()-this.YB.height;this.Gj&&!a.animate&&
/relative/.test(g.css("position"))&&f(this).css({left:k.left-d.left-c.left,width:l,height:h});this.Gj&&!a.animate&&/static/.test(g.css("position"))&&f(this).css({left:k.left-d.left-c.left,width:l,height:h})},ui:function(){return{PB:this.PB,element:this.element,helper:this.helper,position:this.position,size:this.size,fj:this.fj,xn:this.xn,Gs:this.Gs,Fs:this.Fs}}})})();(function(){a.Da("oj.ojDialog",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",
initialVisibility:"hide",modality:"modal",position:{my:"center",at:"center",of:window,collision:"fit",tja:function(a){var b=f(this).css(a).offset().top;0>b&&f(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_ComponentCreate:function(){this._super();this.Wga={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};
this.xn={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.OK=this.element.attr("title");this.options.title=this.options.title||this.OK;this.j6();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.Ga);this.Ls=!1;if(this.element.find(".oj-dialog").length){var d=this;this.element.find(".oj-dialog-header").each(function(a,c){var e=f(c);if(!e.closest(".oj-dialog-body").length)return d.gl=e,d.Ls=!0,!1})}else this.gl=
this.element.find(".oj-dialog-header"),this.gl.length&&(this.Ls=!0);this.Ls?(this.Y5(this.gl),this.gl.prependTo(this.Ga),"icon"===this.options.cancelBehavior&&(this.uy(this.gl),this.Rv=this.gl.find(".oj-dialog-title"),this.Rv.length&&this.Rv.insertAfter(this.Gn))):this.i6();this.ij=this.element.children(".oj-dialog-footer");this.X5(this.ij);this.ij.length&&(this.ij.addClass("oj-helper-clearfix"),this.ij.appendTo(this.Ga));"title-bar"===this.options.dragAffordance&&f.fn.draggable&&this.Po();this.er=
!1;this.FS=this.tV.bind(this);this.Ga.length&&(a.C.jh(this.Ga[0],this.FS,30),this.er=!0);this.Dm=!1},uM:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this.bQ&&window.clearTimeout(this.bQ);this.isOpen()&&this.Dq();this.er&&(a.C.gj(this.Ga[0],this.FS),this.er=!1);var d=this.Ga.hasClass("oj-draggable");this.Ga.draggable&&d&&this.Ga.draggable("destroy");this.$o&&(this.$o("destroy"),this.$o=null);this.ij.length&&(this.ij.removeClass("oj-helper-clearfix"),f("#"+this.tU).replaceWith(this.ij));
this.Dy();this.Ls&&(d=this.Ga.find(".oj-dialog-header"))&&f("#"+this.uU).replaceWith(d);this.Z_&&(this.Z_.remove(),this.Z_=null);this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.Wga);this.Ga&&this.Ga.stop(!0,!0);this.element.unwrap();this.OK&&this.element.attr("title",this.OK);this.ik&&(this.ik.remove(),this.ik=null);delete this.Ni;delete this.Dm;this._super()},widget:function(){return this.Ga},disable:f.noop,enable:f.noop,close:function(d){if(this.isOpen()&&
(!1!==this._trigger("beforeClose",d)||this.Mu)){this.Dm=!1;this.n7=null;this.opener.filter(":focusable").focus().length||f(this.document[0].activeElement).blur();var b={};b[a.T.bb.Cf]=this.Ga;a.T.le().close(b);this._trigger("close",d)}},isOpen:function(){return this.Dm},open:function(d){!1!==this._trigger("beforeOpen",d)&&(this.isOpen()||(this.Dm=!0,this.opener=f(this.document[0].activeElement),this.Qi(),"resizable"===this.options.resizeBehavior&&this.WT(),d={},d[a.T.bb.Cf]=this.Ga,d[a.T.bb.Rs]=this.opener,
d[a.T.bb.Vs]=this.options.position,d[a.T.bb.mi]=this.options.modality,d[a.T.bb.Kn]=this.$q(),d[a.T.bb.Pl]="oj-dialog-layer",a.T.le().open(d),this._trigger("open")),this.VQ())},refresh:function(){this._super();this.Qi();this.tV()},VQ:function(){var d=this.n7;d&&0<d.length&&a.C.nn(this.Ga[0],d[0])||(d||(d=this.element.find("[autofocus]")),d.length||(d=this.element.find(":tabbable")),d.length||this.ij.length&&(d=this.ij.find(":tabbable")),d.length||this.pL&&(d=this.pL.filter(":tabbable")),d.length||
(d=this.Ga),d.eq(0).focus(),this._trigger("focus"))},_keepFocus:function(a){a.preventDefault();a=this.document[0].activeElement;this.Ga[0]===a||f.contains(this.Ga[0],a)||this.VQ()},Md:function(a){return!isNaN(parseInt(a,10))},j6:function(){this.gH=!1;this.element.uniqueId();this.lF=this.element.attr("id");this.Qea="ojDialogWrapper-"+this.lF;this.Ga=f("\x3cdiv\x3e");this.Ga.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1,role:this.options.role,id:this.Qea});this.Ga.insertBefore(this.element);
this._on(this.Ga,{keyup:function(){},keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===f.ui.keyCode.ESCAPE)a.preventDefault(),a.stopImmediatePropagation(),this.close(a);else if(a.keyCode===f.ui.keyCode.TAB&&"modeless"!==this.options.modality){var b=this.Ga.find(":tabbable"),c=b.filter(":first"),e=b.filter(":last");a.shiftKey?a.shiftKey&&(a.target===c[0]||a.target===this.Ga[0]?(e.focus(),a.preventDefault()):(c=b.index(document.activeElement),
1==c&&b[0]&&(b[0].focus(),a.preventDefault()))):a.target===e[0]||a.target===this.Ga[0]?(c.focus(),a.preventDefault()):(c=b.index(document.activeElement),0==c&&b[1]&&(b[1].focus(),a.preventDefault()))}}});this.element.find("[aria-describedby]").length||this.Ga.attr({"aria-describedby":this.element.uniqueId().attr("id")})},Dy:function(){this.Gn&&(this.Gn.remove(),this.pL=this.Gn=null)},uy:function(a){this.Gn=f("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex","1").attr("aria-label",
"close").attr("role","button").appendTo(a);this.pL=f("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt","close icon").prependTo(this.Gn);this._on(this.Gn,{click:function(a){a.preventDefault();a.stopImmediatePropagation();this.close(a)},mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){a=a.currentTarget;
f(a).removeClass("oj-hover");f(a).removeClass("oj-active")},keyup:function(a){if(a.keyCode&&a.keyCode===f.ui.keyCode.SPACE||a.keyCode===f.ui.keyCode.ENTER)a.preventDefault(),a.stopImmediatePropagation(),this.close(a)}})},i6:function(){var a;this.ik=f("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.Ga);this._on(this.ik,{mousedown:function(a){f(a.target).closest(".oj-dialog-close-icon")||this.Ga.focus()}});"icon"===this.options.cancelBehavior&&this.uy(this.ik);a=f("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.ik);
this.SW(a);this.Ga.attr({"aria-labelledby":a.attr("id")})},SW:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},Po:function(){function a(b){return{position:b.position,offset:b.offset}}var b=this,c=this.options;this.Ga.draggable({Jia:!1,cancel:".oj-dialog-content, .oj-dialog-header-close",handle:".oj-dialog-header",containment:"document",start:function(c,g){f(this).addClass("oj-dialog-dragging");b.LO();b._trigger("dragStart",c,a(g))},drag:function(c,f){b._trigger("drag",
c,a(f))},stop:function(e,g){c.position=[g.position.left-b.document.scrollLeft(),g.position.top-b.document.scrollTop()];f(this).removeClass("oj-dialog-dragging");b.$W();b._trigger("dragStop",e,a(g))}});this.Ga.addClass("oj-draggable")},WT:function(){function a(b){return{originalPosition:b.xn,originalSize:b.fj,position:b.position,size:b.size}}var b=this;this.Ga.css("position");this.$o=this.Ga.ojResizable.bind(this.Ga);this.$o({cancel:".oj-dialog-content",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",
start:function(c,e){b.gH=!0;f(this).addClass("oj-dialog-resizing");b.LO();b._trigger("resizeStart",c,a(e))},resize:function(c,e){b._trigger("resize",c,a(e))},stop:function(c,e){b.gH=!1;f(this).removeClass("oj-dialog-resizing");b.$W();b._trigger("resizeStop",c,a(e))}})},IH:function(){var d="rtl"===this.hc(),d=a.jd.Kg(this.options.position,d);this.Ga.position(d);this.vU()},vU:function(){a.T.le().oL(this.Ga,a.T.sc.Rl)},_setOption:function(d,b,c){var e;e=this.Ga;if("disabled"!==d)switch(this._super(d,
b,c),d){case "dragAffordance":(d=e.hasClass("oj-draggable"))&&"none"===b&&(e.draggable("destroy"),this.Ga.removeClass("oj-draggable"));d||"title-bar"!==b||this.Po();break;case "position":this.IH();break;case "resizeBehavior":e=!1;this.$o&&(e=!0);e&&"resizable"!=b&&(this.$o("destroy"),this.$o=null);e||"resizable"!==b||this.WT();break;case "title":this.SW(this.ik.find(".oj-dialog-title"));break;case "role":e.attr("role",b);break;case "modality":this.isOpen()&&(e={},e[a.T.bb.Cf]=this.Ga,e[a.T.bb.mi]=
b,a.T.le().$v(e));break;case "cancelBehavior":"none"===b||"escape"===b?this.Dy():"icon"===b&&(this.Ls?(this.Dy(),this.uy(this.gl),this.Rv=this.gl.find(".oj-dialog-title"),this.Rv.length&&this.Rv.insertAfter(this.Gn)):(this.Dy(),this.uy(this.ik),this.F_=this.ik.find(".oj-dialog-title"),this.F_.length&&this.F_.insertAfter(this.Gn)))}},tV:function(){var a=!1;this.Ga.length&&this.Ga[0].style.height&&(a=this.Ga[0].style.height.indexOf("%"));this.gH&&a&&(a=this.y7(),this.element.css({height:a}))},y7:function(){this.bQ=
null;var a=(this.Ls?this.gl:this.ik).outerHeight(),b=0;this.ij.length&&(b=this.ij.outerHeight());return this.Ga.height()-a-b},Saa:function(){var a=f("\x3cdiv\x3e");this.RP=this.Ga.css("height");"auto"!=this.RP?(a.height(this.RP),this.Xt=a.height(),this.Md(this.Xt)&&(this.Xt=Math.ceil(this.Xt))):this.Xt="auto";a.remove()},Qi:function(){this.Saa();var a=this.Ga[0].style.height,b=this.Ga[0].style.width,c=this.Ga[0].style.minHeight,e=this.Ga[0].style.maxHeight;this.element.css({width:"auto",minHeight:0,
maxHeight:"none",height:0});var f;f=this.Ga.css({minHeight:0,maxHeight:"none",height:"auto"}).outerHeight();this.element.css({width:"",minHeight:"",maxHeight:"",height:""});this.Ga.css({width:b});this.Ga.css({height:a});this.Ga.css({minHeight:c});this.Ga.css({maxHeight:e});"auto"!=a&&""!=a&&this.element.height(Math.max(0,this.Xt+0-f))},LO:function(){this.eK=this.document.find("iframe").map(function(){var a=f(this),b=a.offset();return f("\x3cdiv\x3e").css({width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(b)[0]})},
$W:function(){this.eK&&(this.eK.remove(),delete this.eK)},X5:function(a){this.tU="ojDialogPlaceHolderFooter-"+this.lF;this.zba=f("\x3cdiv\x3e").hide().attr({id:this.tU});this.zba.insertBefore(a)},Y5:function(a){this.uU="ojDialogPlaceHolderHeader-"+this.lF;this.Aba=f("\x3cdiv\x3e").hide().attr({id:this.uU});this.Aba.insertBefore(a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog":case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close-wrapper":case "oj-dialog-close-icon":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":return a=
"."+a,this.widget().find(a)[0]}return null},ep:function(){this.element.remove()},$q:function(){if(!this.Ni){var d=this.Ni={};d[a.T.sc.Tp]=f.proxy(this.Dq,this);d[a.T.sc.Up]=f.proxy(this.ep,this);d[a.T.sc.Rl]=f.proxy(this.vU,this)}return this.Ni},Dq:function(){this.Mu=!0;this.close();delete this.Mu}})})()});