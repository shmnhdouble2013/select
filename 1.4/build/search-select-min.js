/*! select - v1.4 - 2014-04-22 2:04:27 PM
* Copyright (c) 2014 明河; Licensed  */
KISSY.add("gallery/select/1.4/index",function(a,b,c,d,e){function f(b,c){var d=this;c.prefixCls||a.mix(c,{prefixCls:i}),c.elBefore||a.mix(c,{elBefore:g(b)}),c.width||(c.width=g(b).width()),f.superclass.constructor.call(d,c),d.set("target",b)}var g=b.all,h=c.Select,i="bf-",j="data-item",k=d.Item;return a.extend(f,h,{menuData:function(a){var b=this,a=a||b.get("target"),c=a.val(),d=a.all("option"),e={selectedItem:{},menu:{children:[]}};return d.each(function(a){var b={xclass:"option",content:a.text(),elCls:a.attr("class"),value:a.val(),prefixCls:i,elOption:a};c==a.val()&&(e.selectedItem={content:b.content,value:b.value}),e.menu.children.push(b)}),e},render:function(){function b(a){d.val(a.newVal||""),d.fire("change"),c.fire("valueChange",{value:a.newVal,$select:d})}var c=this;f.superclass.render.call(c);var d=c.get("target");return d.length?(d.hide(),c.sync(),void c.on("afterValueChange",function(c){e.ie<=6?a.later(function(){b(c)}):b(c)})):!1},_bind:function(){var b=this,c=b.get("menu");if(a.isEmptyObject(c))return!1;var d=c.get("el");return d&&d.length?void d.on("mouseover",function(a){var c=g(a.target);if(c.hasClass("bf-menuitem")){var d=c.data(j);b.fire("itemMouseover",{$item:c,item:d})}}):!1},sync:function(){var b=this;b.removeItems(!0);var c=b.menuData(),d=c.selectedItem,e=c.menu.children;return a.each(e,function(a){var c=new k(a),e=a.elOption;e&&c.set("target",e),b.addItem(c);var f=c.get("el");f.data(j,c),a.value==d.value&&(b.set("value",a.value),b.set("content",a.content))}),b._bind(),b.fire("render"),b.set("isSync",!0),b}},{ATTRS:{target:{value:"",getter:function(a){return g(a)}}}}),f},{requires:["node","menubutton","menu","ua"]}),KISSY.add("gallery/select/1.4/search-select",function(a,b,c){function d(a,b){var c=this;d.superclass.constructor.call(c,a,b),c.set("target",a)}var e=b.all;return a.extend(d,c,{render:function(){var a=this;d.superclass.render.call(a);var b=a.get("el"),c=a.get("input"),e=a.get("prefixCls"),f=a.get("menu");c.addClass(e+"search-text").val(a.get("content")),b.append(c),c.on("keyup",a._searchHandler,a),a.on("afterValueChange",function(){c.val(a.get("content"))}),c.on("focus",function(){c.val(""),f.show(),f.set("width",b.innerWidth()),f.align(b,["bl","tl"],a.get("menuCfg").align.offset)}),c.on("blur",function(){c.val(a.get("content")),f.hide()})},_searchHandler:function(b){var c=this,d=a.trim(e(b.target).val());c.filterItems(d)},filterItems:function(b){var c=this,d=(c.get("prefixCls"),c.get("menu")),e=d.get("children");a.each(e,function(a){var c=a.get("content");b?c.indexOf(b)>-1?a.set("visible",!0):a.set("visible",!1):(a.set("visible",!0),d.show())})}},{ATTRS:{target:{value:"",getter:function(a){return e(a)}},input:{value:"",getter:function(a){return e(a)}}}}),d},{requires:["node","./index"]});