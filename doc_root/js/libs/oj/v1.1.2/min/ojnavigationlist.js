/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojbutton","ojs/ojmenu","ojs/ojlistview"],function(a,f){a.Hd=function(a,c,d){this.A=a;this.Bb=c;this.yK=d};a.Hd.prototype.Ae=function(){this.Bb.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical")};a.Hd.prototype.Op=function(){};a.Hd.prototype.Mp=function(){};a.Hd.prototype.NL=function(){return!1};a.Hd.prototype.KC=function(){};a.Hd.prototype.SC=function(a,c){a.attr("aria-selected",c?"true":"false")};a.Hd.prototype.nC=function(){};
a.Hd.prototype.Pn=function(a,c,e){return d.q.Pn.apply(this.A,arguments)};a.Hd.prototype.Pp=function(a){return d.q.Pp.apply(this.A,arguments)};a.Hd.prototype.Ee=function(a){return d.q.Ee.apply(this.A,arguments)};a.Hd.prototype.Sn=function(a,c){d.q.Sn.apply(this.A,arguments)};a.Hd.prototype.Xp=function(a){d.q.Xp.apply(this.A,arguments)};a.Hd.prototype.Init=function(){this.Bb.addClass("oj-navigationlist-expanded oj-navigationlist-vertical")};a.Hd.prototype.Dh=function(a){return f(a)[0].hasAttribute("aria-selected")};
a.Hd.prototype.Ws=function(){};a.Hd.prototype.zL=function(){};a.Ch=function(b,c,d){a.Ch.q.constructor.call(this,b,c,d)};a.b.ga(a.Ch,a.Hd,"oj.HorizontalNavListHandler");a.Ch.prototype.Ae=function(){this.Bb.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal")};a.Ch.prototype.SC=function(a,c){a.attr("aria-pressed",c?"true":"false")};a.Ch.prototype.Pn=function(a,c,e){a===f.ui.keyCode.LEFT?a=this.A.rf()?f.ui.keyCode.DOWN:f.ui.keyCode.UP:a===f.ui.keyCode.RIGHT&&(a=this.A.rf()?f.ui.keyCode.UP:
f.ui.keyCode.DOWN);a=d.q.Pn.call(this.A,a,c,e);"top"===this.A.la.options.edge&&this.A.pb.elem[0].scrollIntoView(!1);return a};a.Ch.prototype.Pp=function(a){return a===this.A.PC||a===this.A.qC||a===this.A.Ss||a===this.A.ex};a.Ch.prototype.KC=function(a){a.attr("role","button");a.attr("aria-pressed","false");a.removeAttr("aria-selected")};a.Ch.prototype.nC=function(){var a=this;this.A.element.attr("role","toolbar");this.A.element.find("."+this.A.Uf()).each(function(c){0<c&&f(this).before('\x3cli role\x3d"separator" class\x3d"'+
a.A.CL+'"\x3e\x3c/li\x3e')})};a.Ch.prototype.Dh=function(a){return f(a)[0].hasAttribute("aria-pressed")};a.Ch.prototype.Init=function(){this.Bb.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal")};a.Ch.prototype.Ws=function(){};a.jj=function(b,c,d){a.jj.q.constructor.call(this,b,c,d)};a.b.ga(a.jj,a.Hd,"oj.CollapsibleNavListHandler");a.jj.prototype.Ae=function(){this.Bb.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};a.jj.prototype.Init=function(){this.Bb.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};
a.jj.prototype.Op=function(a,c){d.q.kC.apply(this.A,arguments)};a.jj.prototype.Mp=function(a,c){d.q.iC.apply(this.A,arguments)};a.jj.prototype.NL=function(a,c,d,g){var h=0<d.children("."+this.A.Xh()).length;if(c===this.A.Ss||c===this.A.ex)return c===this.A.Ss&&!this.A.rf()||c===this.A.ex&&this.A.rf()?this.A.Ee(d)===this.A.pi&&this.A.Ml(d,a,!0,g,!0,!0):this.A.Ee(d)===this.A.oi&&this.A.Ln(d,a,!0,g,!0,!0,!0),!0;if(h&&(c===f.ui.keyCode.ENTER||c===f.ui.keyCode.SPACE)){if(0>=d.length)return;this.A.Ee(d)===
this.A.oi?this.A.Ln(d,null,!0,g,!0,!0,!0):this.A.Ee(d)===this.A.pi&&this.A.Ml(d,null,!0,g,!0,!0);return!0}return!1};a.jj.prototype.Ws=function(){};a.kd=function(b,c,d){a.kd.q.constructor.call(this,b,c,d);this.BK=[]};a.b.ga(a.kd,a.jj,"oj.SlidingNavListHandler");a.kd.prototype.Ae=function(){this.Bb.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");this.LA.remove()};a.kd.prototype.uW=function(a,c,d){var g=this,f=this.A.YJ(),k=f.outerWidth()/2,l=this.A.rf();c||(k*=-1);l?(f.css({"margin-right":k}),
f.animate({"margin-right":"0px"},400,"swing",function(){g.FA(a,c,d)})):(f.css({"margin-left":k}),f.animate({"margin-left":"0px"},400,"swing",function(){g.FA(a,c,d)}))};a.kd.prototype.FA=function(a,c,d){null!==this.A.qe&&(d&&(d=this.A.vd(d[0]),this.A.Hh("currentItem",d)),c?this.A.lC(a.children("."+this.A.Xh())):this.A.jC(a.children("."+this.A.Xh())))};a.kd.prototype.Op=function(a,c){var d=f(a).parents(".oj-navigationlist-item-element:first"),g=d.children("."+this.A.Xh()),h,k=null,l=d.closest("."+this.A.Sl);
if(0<l.length){l.removeClass(this.A.Sl);d.addClass(this.A.Sl);var k=g.find("."+this.A.Uf()+":eq(0)"),m=d.parentsUntil(l,"ul"),m=l.is(this.A.element)?m.get().concat(l.get()):m.get(),n=this,q,m=f(m.reverse());m.each(function(a,b){h=f(b).is(n.A.element)?n.A.yB():n.A.QJ(f(b).parent());q=a===m.length-1?d:f(m.get(a+1)).parent();n.S3(n.A.vd(q[0]),n.A.QJ(q),h);n.BK.push(q)})}c?this.uW(d,!0,k):this.FA(d,!0,k);this.A.element.focus();d.siblings().attr("aria-hidden","true");d.children("."+this.A.Tf()).children("."+
this.A.Qg).attr("aria-hidden","true");g.removeAttr("aria-hidden");a.css("display","");d.addClass("oj-skipfocus")};a.kd.prototype.Mp=function(a,c){var d=a.children("."+this.A.Xh()),g=a.parent();a.children("."+this.A.Tf()).children("."+this.A.Qg).removeAttr("aria-hidden");d.attr("aria-hidden","true");a.siblings().removeAttr("aria-hidden");a.removeClass("oj-skipfocus");a.removeClass(this.A.Sl);0===a.closest("."+this.A.Sl).length&&(g.closest("."+this.A.Uf()).addClass(this.A.Sl),this.A.element.is(g)&&
this.A.element.addClass(this.A.Sl));c?this.uW(a,!1,d.parent()):this.FA(a,!1,d.parent());a.siblings().attr("role","menuitem");this.Aca();this.A.element.focus()};a.kd.prototype.SC=function(a,c){var d=this.A.vB(a);c?d.attr("aria-describedby","selectedLabel"):d.removeAttr("aria-describedby")};a.kd.prototype.Ee=function(a){a=a.children("."+this.A.Tf()).children("."+this.A.Qg).attr("aria-expanded");return"true"===a?this.A.pi:"false"===a?this.A.oi:this.A.fM};a.kd.prototype.Sn=function(a,c){c===this.A.pi?
(a.children("."+this.A.Tf()).children("."+this.A.Qg).attr("aria-expanded","true"),a.removeClass(this.A.wL).addClass(this.A.DL)):c===this.A.oi&&(a.children("."+this.A.Tf()).children("."+this.A.Qg).attr("aria-expanded","false"),a.removeClass(this.A.DL).addClass(this.A.wL))};a.kd.prototype.Xp=function(a){this.A.element.attr("aria-activedescendant",this.A.vB(a).attr("id"))};a.kd.prototype.KC=function(a,c){c.attr("role","menuitem");c.attr("id")||c.uniqueId();a.attr("role","presentation");var d=a.children("."+
this.A.Xh());0<d.length&&(c.attr("aria-haspopup","true"),d.attr("role","menu"),d.css("display",""));a.removeAttr("aria-expanded");c.attr("aria-expanded","false")};a.kd.prototype.nC=function(){this.A.element.attr("role","menu")};a.kd.prototype.Init=function(a){this.Bb.addClass("oj-navigationlist-slider oj-navigationlist-vertical");a.element.addClass("oj-navigationlist-current");this.I4();this.S$()};a.kd.prototype.I4=function(){var a,c;this.LA=f(document.createElement("div"));this.LA.addClass("oj-navigationlist-toolbar");
this.Wo=f(document.createElement("a"));this.kv=f(document.createElement("span"));this.kv.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role","img").attr("alt",this.yK.D("previousIcon"));this.kv.hide();this.Wo.addClass("oj-navigationlist-previous-link").attr("tabindex","-1").append(this.kv);this.Ju=f(document.createElement("label"));this.Ju.addClass("oj-navigationlist-current-header").text(this.A.yB());a=f(document.createElement("span"));a.attr("role",
"separator").attr("aria-orientation","vertical").addClass("oj-navigationlist-toolbar-separator");this.Hj=f(document.createElement("button"));this.Hj.addClass("oj-button-half-chrome oj-navigationlist-hierarchical-button");this.bh=f(document.createElement("ul"));this.bh.addClass("oj-navigationlist-hierarchical-menu").hide();c=f(document.createElement("label"));c.addClass("oj-helper-hidden-accessible").attr("aria-hidden","true").attr("id","selectedLabel");c.text(this.yK.D("selectedLabel"));this.Wo.append(this.Ju);
this.LA.append(this.Wo).append(a).append(this.Hj).append(this.bh).append(c);this.Bb.prepend(this.LA)};a.kd.prototype.zL=function(){var a=this.BK.pop();a&&this.A.Ml(a,null,!0,null,!0,!0)};a.kd.prototype.S$=function(){var a=this,c=this.bh.uniqueId().attr("id");this.bh.ojMenu({openOptions:{position:{my:"end top",at:"end bottom"}},select:function(c,d){for(var h=d.item.nextAll(),k,l,m=a.BK,n=d.item.data("key"),q=m.length-1;0<=q&&(l=m[q],k=a.A.vd(l[0]),a.A.Ml(f(l),null,!0,k,!0,!0),n!==k);q--);h.remove();
d.item.remove();a.bh.ojMenu("refresh")}});this.Hj.ojButton({label:this.yK.D("hierMenuBtnLabel"),display:"icons",icons:{start:"oj-fwk-icon oj-hier-icon"},menu:"#"+c});this.Hj.ojButton("option","disabled",!0)};a.kd.prototype.S3=function(a,c,d){if(this.Hj){var g=this.bh.find("li").length,h=f(document.createElement("li")),k=f(document.createElement("a"));k.attr("href","#");h.append(k);if(0<g){for(var l=0;l<g;l++)0<l&&k.append(f(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
k.append(f(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"))}g=f(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");g.text(d);k.append(g);h.data("key",a);this.bh.append(h);this.bh.ojMenu("refresh");this.Hj.ojButton("option","disabled",!1);this.kv.show();this.Wo.attr("tabindex","0");this.Ju.text(c)}};a.kd.prototype.Aca=function(){if(this.Hj){var a=this.bh.find("li").last().remove();this.bh.ojMenu("refresh");0===
this.bh.children("li").length?(this.Hj.ojButton("option","disabled",!0),this.kv.hide(),this.Wo.attr("tabindex","-1"),this.Ju.text(this.A.yB())):this.Ju.text(a.children("a").text())}};a.kd.prototype.Ws=function(a,c){a.removeClass(this.A.Sl);c.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden")};var d=function(b,c){function d(){}a.b.ga(d,b,"");f.extend(d.prototype,c);return d}(a.xH,{Qg:"oj-navigationlist-item-content",DL:"oj-expanded",wL:"oj-collapsed",
Sl:"oj-navigationlist-current",CL:"oj-navigationlist-divider",j1:"oj-navigationlist-category-divider",iD:"oj-navigationlist-item-label",ZM:"oj-navigationlist-icon-only",U1:"oj-navigationlist-item-icon",aia:"oj-navigationlist-horizontal",rN:"oj-navigationlist-has-icons",sN:"oj-navigationlist-item-no-icon",v2:"oj-navigationlist-item-title",tN:"oj-navigationlist",uN:"oj-navigationlist-touch",w2:"oj-navigationlist-listview-container",QJ:function(a){a=this.vB(a);return a.is("a")?f.trim(a.text()):f.trim(a.find("."+
this.v2).text())},vB:function(a){var c=a.children("."+this.Qg);0===c.length&&(c=a.children("."+this.Tf()).children("."+this.Qg),0===c.length&&(c=a.children("."+this.Tf()).children(":not(."+this.ol()+"):not(."+this.Yi()+")")));return c},rf:function(){return"rtl"===this.la.hc()},El:function(){this.Qc.nC();d.q.El.apply(this,arguments)},AV:function(a){a=a.children();for(var c=0;c<a.length;c++){var d=a[c],d=f(d);if(d.hasClass(this.CL)){d.remove();break}d.removeAttr("role");d.removeAttr("aria-disabled");
var g=this.vB(d);g.removeClass(this.Qg).removeClass(this.sN).removeAttr("aria-haspopup");d.removeAttr("role").removeClass("oj-default").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");g.children("."+this.iD).contents().unwrap();var h=d.children("ul");0<h.length?(h.removeAttr("style").removeClass(this.rN).removeAttr("aria-hidden"),this.Qc.Ws(d,g,h),this.AV(h)):this.Qc.Ws(d,g)}},$w:function(a){return a.hasClass(this.Qg)||a.hasClass(this.ol())||a.hasClass(this.Yi())?
!1:d.q.$w.apply(this,arguments)},SL:function(a){return a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)&&!a.hasClass(this.Qg)||a.hasClass("oj-component")},Gba:function(a){var c={drillMode:"none"!==a.drillMode?"collapsible":"none",selection:null!==a.selection?[a.selection]:[],item:a.item,data:a.data,selectionMode:"single"};c.element=this.Im;c.item.focusable=function(a){return f(a.data).is("li")?!f(a.data).hasClass("oj-disabled"):!f(a.parentElement).hasClass("oj-disabled")};return c=
f.extend(f.extend({},a),c)},yB:function(){return this.la.options.rootLabel?this.la.options.rootLabel:this.la.D("defaultRootLabel")},Ys:function(){var a=this.la.element.attr("aria-labelledby");a?(this.element.attr("aria-labelledby",a),this.la.element.removeAttr("aria-labelledby")):this.element.attr("aria-label",this.yB());d.q.Ys.apply(this,arguments)},RC:function(){this.element.attr("aria-labelledby")&&(this.la.element.attr("aria-labelledby",this.element.attr("aria-labelledby")),this.element.removeAttr("aria-labelledby"));
this.element.attr("aria-label")&&this.element.removeAttr("aria-label");d.q.RC.apply(this,arguments)},ul:function(b){var c=this,e=b.la.element;e.addClass(this.tN);a.C.sf()&&e.addClass(this.uN);this.Im=e.children("ul:first");0===this.Im.length&&(this.Im=f(document.createElement("ul")),e.append(this.Im));e=f(document.createElement("div"));e.addClass(this.w2);this.Im.wrap(e);b=this.Gba(b);d.q.ul.call(this,b);this.element.removeClass("oj-component-initnode");this.la._on(this.la.element,{"click .oj-navigationlist-previous-link":function(){c.GE()},
"keydown .oj-navigationlist-previous-link":function(a){a.keyCode===f.ui.keyCode.ENTER&&c.GE()},"keydown .oj-navigationlist-element":function(a){a.keyCode!==f.ui.keyCode.ESCAPE||a.isDefaultPrevented()||c.GE()}})},GE:function(){this.Qc.zL()},fT:function(){var b=this.la.options.drillMode,c=this.la.options.edge;this.Qc="sliding"===b?new a.kd(this,this.la.element,this.la):"collapsible"===b?new a.jj(this,this.la.element,this.la):"none"===b&&"top"===c?new a.Ch(this,this.la.element,this.la):new a.Hd(this,
this.la.element,this.la);this.Qc.Init(this.options)},Xr:function(){this.fT();d.q.Xr.apply(this,arguments)},JL:function(){return"oj-navigationlist-listview"},xC:function(){return"oj-navigationlist-element"},rl:function(){return"oj-navigationlist-item"},Uf:function(){return"oj-navigationlist-item-element"},Yi:function(){return"oj-navigationlist-collapse-icon"},ol:function(){return"oj-navigationlist-expand-icon"},NJ:function(a){return"oj-navigationlist-depth-"+a},Tf:function(){return"oj-navigationlist-group-item"},
Xh:function(){return"oj-navigationlist-group"},ms:function(){return"oj-navigationlist-collapsible-transition"},pp:function(){return this.ms()},kC:function(a,c){this.Qc.Op(a,c)},iC:function(a,c){this.Qc.Mp(a,c)},Pn:function(a,c,d){return this.Qc.Pn(a,c,d)},Pp:function(a){return this.Qc.Pp(a)},Ee:function(a){return this.Qc.Ee(a)},Sn:function(a,c){this.Qc.Sn(a,c)},Xp:function(a){this.Qc.Xp(a)},BC:function(a){d.q.BC.apply(this,arguments);this.Qn()},AC:function(a){d.q.AC.apply(this,arguments);this.QC()},
Qn:function(){this.element.is(":focus")&&d.q.Qn.apply(this,arguments)},CC:function(a){var c=this.Mn(f(a.target));null==c||0===c.length||this.rk(c)||(this.vd(c[0]),this.$w(f(a.target))||c.hasClass("oj-disabled")||(d.q.CC.apply(this,arguments),a.preventDefault(),this.element.focus()))},PL:function(a){var c;c=a.keyCode;this.Qc.NL(a,c,this.pb.elem,this.pb.key);c===f.ui.keyCode.HOME||c===f.ui.keyCode.END?(c=c===f.ui.keyCode.HOME?this.element.find("."+this.Qg+":visible").first().closest("."+this.Uf()):
this.element.find("."+this.Qg+":visible").last().closest("."+this.Uf()),c=this.vd(c[0]),this.Hh("currentItem",c),a.preventDefault()):!0===this.QL(a)&&a.preventDefault()},ix:function(a,c,e){var g=this.pb.elem;this.Dh(g[0])&&(this.BT(g)||this.vF(a,g)&&d.q.ix.apply(this,arguments))},EC:function(a,c,d){var g;a=f(a);"oj-selected"===c&&this.Qc.SC(a,d);g=a.children("."+this.Tf());0<g.length&&(a=f(g[0]));d?a.addClass(c):a.removeClass(c);a.hasClass("oj-selected")||a.hasClass("oj-hover")||a.hasClass("oj-disabled")?
a.removeClass("oj-default"):a.addClass("oj-default")},Dh:function(a){return!f(a).hasClass("oj-disabled")&&this.Qc.Dh(a)},Ul:function(a,c,d){return"ready"!==a?this.la._trigger(a,c,d):!0},Hh:function(a,c,d){"selection"===a?c&&0<c.length?this.la.option(a,c[0],d):this.la.option(a,null,d):this.la.option(a,c,d);this.options[a]=c},hM:function(a){return null!=a.data||null!=a.drillMode||null!=a.item||null!=a.display||null!=a.edge},Is:function(a,c){if(void 0!==a.selection){var e=a.selection;if(e){var g=this.jg("selection");
if(!g||0===g.length||g[0]!==e)if(g=this.ig(e),this.Dh(g)&&this.vF(null,f(g)))return d.q.Is.call(this,{selection:[e]},c)}else return d.q.Is.call(this,{selection:[]},c)}else return d.q.Is.call(this,a,c);return!1},jg:function(a){var c=this.la.option(a);return"selection"===a?c?[c]:[]:null===c?this.options[a]:c},Gg:function(){return a.Components.Gg(this.la.element)},Xs:function(a,c){if(!a.hasClass("oj-disabled")&&this.Dh(a[0])){var e=this.vd(a[0]);this.Hh("currentItem",e);this.BT(a)||this.vF(c,a)&&d.q.Xs.apply(this,
arguments)}},vF:function(a,c){var d=this.vd(c[0]);return this.Ul("beforeSelect",a,{item:c,key:d})},BT:function(a){var c;c=this.jg("selection");a=this.vd(a[0]);return-1<c.indexOf(a)?!0:!1},Cw:function(a,c){var e=f(a);if(e.hasClass(this.j1))e.removeClass(this.Uf()),e.children().remove(),e.attr("role","separator");else{var g=this.Yi(),h=this.ol(),k=this.U1,l=e.children("."+this.Tf()),m;0<l.length?(m=l.children(":not(."+h+"):not(."+g+")"),h=l.children("."+h),0===h.length&&(h=l.children("."+g)),h.insertAfter(l.children("."+
this.iD)),h.attr("aria-hidden","true"),e.hasClass("oj-disabled")&&l.addClass("oj-disabled")):m=e.children().first();m.addClass(this.Qg);g=m.wrapInner('\x3cspan class\x3d"'+this.iD+'"\x3e\x3c/span\x3e').find("."+k);0<g.length?(g.insertBefore(g.parent()),"icons"===this.la.options.display&&(this.la.element.addClass(this.ZM),g.attr("title")||g.attr("title",this.QJ(e))),e.closest("ul").addClass(this.rN)):m.addClass(this.sN);e.hasClass("oj-disabled")?e.attr("aria-disabled","true"):0<l.length?l.addClass("oj-default"):
e.addClass("oj-default");this.Qc.KC(e,m);d.q.Cw.apply(this,arguments)}},getNodeBySubId:function(a){var c;if(null===a)return this.element?this.element[0]:null;c=a.subId;return"oj-navigationlist-item"===c?(a=a.key,a=this.ig(a)):"oj-navigationlist-previous-link"===c?this.Qc.Wo?this.Qc.Wo[0]:null:"oj-navigationlist-hierarchical-button"===c?this.Qc.Hj?this.Qc.Hj[0]:null:"oj-navigationlist-hierarchical-menu"===c?this.Qc.bh?this.Qc.bh[0]:null:null},refresh:function(){this.sV();this.fT();d.q.refresh.apply(this,
arguments)},sV:function(){this.la.element.removeClass(this.ZM);this.AV(this.element);this.Qc.Ae()},destroy:function(){this.sV();d.q.destroy.apply(this,arguments);this.Im.unwrap();this.Im.is(":empty")&&this.Im.remove();this.la.element.removeClass(this.tN+" "+this.uN);this.la._off(this.element,"click");this.la._off(this.element,"focus");this.la._off(this.element,"blur");this.la._off(this.element,"mouseover");this.la._off(this.element,"mousein");this.la._off(this.element,"mouseout");this.la._off(this.element,
"keydown")}});(function(){a.Da("oj.ojNavigationList",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,drillMode:"none",edge:"start",rootLabel:null,selection:null,expanded:"auto",data:null,display:"all",item:{renderer:null,selectable:!0},beforeSelect:null,beforeCollapse:null,beforeCurrentItem:null,collapse:null,beforeExpand:null,expand:null,optionChange:null},_ComponentCreate:function(){this._super();this.za()},Ug:function(){this._super();this.uh.Xr()},Xe:function(a,c,d){this.uh.TZ(a,
c,d)},za:function(){for(var a in this.options)this.hX(a,this.options[a]);this.ZA(this.options.drillMode,this.options.display,this.options.edge);this.uh=new d;a={la:this};a=f.extend(this.options,a);this.uh.ul(a)},getNodeBySubId:function(a){return this.uh.getNodeBySubId(a)},expand:function(a,c){this.uh.FJ(a,c,!0)},collapse:function(a,c){this.uh.FX(a,c,!0)},getExpanded:function(){return this.uh.getExpanded()},ZA:function(a,c,d){if("none"!==a){if("icons"===c)throw"Icon only navigation list should have drillMode set to 'none'.";
if("top"===d)throw"Horizontal navigation list should have drillMode set to 'none'.";}},hX:function(a,c){var d=!0;"drillMode"===a?d="none"===c||"collapsible"===c||"sliding"===c:"display"===a?d="all"===c||"icons"===c:"edge"===a&&(d="top"===c||"start"===c);if(!d)throw"Invalid value: "+c+" for key: "+a;},_setOption:function(a,c){this.hX(a,c);switch(a){case "drillMode":this.ZA(c,this.options.display,this.options.edge);break;case "display":this.ZA(this.options.drillMode,c,this.options.edge);break;case "edge":this.ZA(this.options.drillMode,
this.options.display,c)}this._super(a,c)},_setOptions:function(a,c){var d=this.uh.Is(a,c);this._super(a,c);d&&this.uh.refresh()},yi:function(){this.uh.UZ()},vk:function(){},refresh:function(){this._super();this.uh.refresh()},_destroy:function(){this.uh.destroy();this._super();delete this.uh}})})()});