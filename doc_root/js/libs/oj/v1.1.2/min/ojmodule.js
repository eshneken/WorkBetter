/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(a,f){a.Rp={};a.Rp.ac={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated"};o_("ModuleBinding.defaults",a.Rp.ac,a);(function(){function d(a,b,c){if(a&&a[b]){var d={element:c[0],valueAccessor:c[1]};
2<c.length&&(d.viewModel=c[2],3<c.length&&(d["boolean"===typeof c[3]?"fromCache":"cachedNodes"]=c[3]));return f.ignoreDependencies(a[b],a,[d])}}function b(b,c,d){if(null!=b&&(c=a.Rp.ac[c],null!=c&&b&&(c=b[c],"function"===typeof c))){var e=void 0;d&&(e={element:d[0],valueAccessor:d[1]},2<d.length&&(e["boolean"===typeof d[2]?"fromCache":"cachedNodes"]=d[2]));return f.ignoreDependencies(c,b,[e])}}function c(a,b,c,d){for(var e=a.firstChild;e;){var g=e.nextSibling;e!==c&&(d&&f.cleanNode(e),b?(b.push(e),
c.appendChild(e)):a.removeChild(e));e=g}}function e(b,c){if(null!=a.Components)for(var d=0;d<b.length;d++)c?a.Components.Il(b[d]):a.Components.En(b[d])}function g(a){return a="string"===typeof a?f.utils.parseHtmlFragment(a):(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)?f.utils.arrayPushAll([],a.childNodes):f.utils.arrayPushAll([],a)}function h(a){return new Promise(function(b){require([a],function(a){b(a)},function(){throw Error("ojModule failed to load "+a);})})}f.bindingHandlers.ojModule=
{init:function(k,l,m,n,q){function p(a){if(a!=x)throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");}function r(a){b(a,"disposeMethod",[k,l])}var s,t={},v,x=-1,u;f.utils.domNodeDisposal.addDisposeCallback(k,function(){r(s);for(var a=Object.keys(t),b=0;b<a.length;b++)r(t[a[b]].un)});f.computed(function(){x++;var m=f.utils.unwrapObservable(l()),n,D,y,E,B,H,C;"string"===typeof m?n=m:(n=f.utils.unwrapObservable(m.name),D=f.utils.unwrapObservable(m.viewName),y=f.utils.unwrapObservable(m.params),
E=f.utils.unwrapObservable(m.viewModelFactory),B=f.utils.unwrapObservable(m.createViewFunction),H=f.utils.unwrapObservable(m.cacheKey),C=f.utils.unwrapObservable(m.lifecycleListener));var m=d(C,"activated",[k,l]),A,G,F=null==H?null:t[H];if(null!=F)delete t[H],A=Promise.resolve(F.view),G=Promise.resolve(F.un);else if(null!=E&&(G=f.ignoreDependencies(E.createViewModel,E,[y,l])),null==G&&null!=n&&(G=h(a.Rp.ac.modelPath+n)),null!=G&&(G=G.then(function(a,c){p(a);return c="function"===typeof c?new c(y):
b(c,"initializeMethod",[k,l])||c}.bind(null,x)),null!=B&&(A=G.then(function(a,b){p(a);var c=null==b?null:b[B];return null==c?null:c()}.bind(null,x)))),null==A)if(D=null==D?n:D,null!=D)A=h(a.Rp.ac.viewPath+D+a.Rp.ac.viewSuffix);else throw Error("View name must be specified");if(null==A)throw Error("ojModule is missing a View");var J;null!=G&&(J=G.then(function(a,c){p(a);return b(c,"activatedHandler",[k,l])}.bind(null,x)));Promise.all([A,G,m,J]).then(function(a,h){if(a==x){var m=g(h[0]),n=h[1],p=!1,
w;null!=v&&(p=!0,w=[],u||(u=document.createElement("div"),u.className="oj-helper-module-cache",k.appendChild(u)));c(k,w,u,!p);0<x&&(d(C,"detached",[k,l,s,w]),b(s,"detachedHandler",[k,l,w]),d(C,"deactivated",[k,l,s]),b(s,"deactivatedHandler",[k,l]));p?(e(w,!1),t[v]={un:s,view:w}):r(s);s=n;v=H;p=0;for(w=m.length;p<w;p++)u?k.insertBefore(m[p],u):k.appendChild(m[p]);(p=null!=F)&&e(m,!0);d(C,"attached",[k,l,s,p]);b(s,"attachedHandler",[k,l,p]);if(!p){p=q.createChildContext(n,void 0,function(a){a.$module=
n});w=0;for(var y=m.length;w<y;w++){var z=m[w],A=z.nodeType;1!=A&&8!=A||f.applyBindings(p,z)}d(C,"bindingsApplied",[k,l,n]);b(n,"bindingsAppliedHandler",[k,l])}}}.bind(null,x),function(b,c){b==x&&a.u.error(c)}.bind(null,x))},null,{Nia:k});return{controlsDescendantBindings:!0}}}})()});