/*! select - v1.4 - 2013-08-07 7:11:27 PM
* Copyright (c) 2013 明河; Licensed  */
KISSY.add("gallery/select/1.4/index",function(a,b,c){function d(b,c){var e=this,c=e._decorate(b,c);c.prefixCls||a.mix(c,{prefixCls:g}),d.superclass.constructor.call(e,c),e.set("target",b)}var e=b.all,f=c.Select,g="bf-";return a.extend(d,f,{_decorate:function(b,c){b=a.one(b),c=c||{},c.elBefore=b;var d=[],e=null,f=b.val(),g=b.all("option");return g.each(function(a){var b={xclass:"option",content:a.text(),elCls:a.attr("class"),value:a.val()};f==a.val()&&(e={content:b.content,value:b.value}),d.push(b)}),a.mix(c,{menu:a.mix({children:d},c.menuCfg)}),a.mix(c,e),c},render:function(){var b=this;d.superclass.render.call(b);var c=b.get("target");return c.length?(c.hide(),b.on("afterValueChange",function(d){a.later(function(){c.val(d.newVal||""),c.fire("change"),b.fire("change",{value:d.newVal,$select:c})})}),void 0):!1}},{ATTRS:{target:{value:"",getter:function(a){return e(a)}}}}),d},{requires:["node","menubutton","menu"]});