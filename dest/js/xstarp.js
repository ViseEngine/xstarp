!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):i(jQuery)}(function(i){function t(){var i=l.height()-M.height();return i/2}function e(){A=M.height(),I=M.width()}function n(i){var t=j-i.pageY,e=C-i.pageX;M.css("margin-top",-t),M.css("margin-left",-e)}function o(){N.onload=function(){M.show(),y.hide(),M.prop("src",N.src),M.css({"margin-top":t()}),L=N.width/M.width()*1.5,e()},p.click(function(t){E&&this===t.target&&(i(this).hide(),N.src="")}),_.click(function(i){E&&this===i.target&&(p.hide(),N.src="")}),M.bind("mousedown",function(t){t.preventDefault(),C=t.pageX-parseInt(M.css("margin-left")),j=t.pageY-parseInt(M.css("margin-top")),i(document).bind("mousemove",function(t){t.preventDefault(),i("body").css("cursor","move"),E=!1,n(t)}),i(document).bind("mouseup",function(t){i(document).unbind("mousemove"),i("body").css("cursor","initial"),clearTimeout(O),O=setTimeout(function(){E=!0},100)})}),M.click(function(i){E&&(h(++S)||S--)}),m.click(function(i){h(++S)||S--,i.stopPropagation()}),g.click(function(i){h(--S)||S++,i.stopPropagation()}),M.bind("mousewheel",function(i){i.preventDefault();var t=i.originalEvent.wheelDelta;120==t?D<L&&(D+=.1):t==-120&&D>.5&&(D-=.1),s()}),b.click(function(){c()}),k.click(function(){D<L&&(D+=.1),s()}),x.click(function(){D>.5&&(D-=.1),s()}),w.click(function(){r(M[0],H+=90)})}function s(){M.css("width",I*D),M.css("height",A*D),M.css("max-width","none"),M.css("max-height","none"),M.css("margin-top",t())}function a(){p=i("<div>").appendTo("body"),p.css({background:"rgba(0,0,0,0.5)",position:"fixed",top:"0",bottom:"0",left:"0",right:"0","z-index":"9999",display:"none"}),u=i("<div>").appendTo(p),u.css({width:"70%",position:"relative","min-width":"500px",margin:"0% auto",padding:"10px 0",height:"100%"}),v=i("<div>").appendTo(u),v.css({width:"30%",background:"#ddd",display:"none",height:"100%",float:"left","box-sizing":"border-box",padding:"1%"}),l=i("<div>").appendTo(u),l.css({background:"#000",width:"100%",padding:"1% 1% 50px 1%","box-sizing":"border-box",overflow:"hidden",height:"100%","user-select":"none","text-align":"center",position:"relative","line-height":"100%"}),M=i("<img>").appendTo(l),M.css({transition:"transform 0.5s",cursor:"pointer"}),f=i("<div>").appendTo(l),f.css({position:"absolute",bottom:"5px",background:"#000",width:"98%"}),b=i('<span class="x-img-recover">').appendTo(f),b.css({display:"inline-block",width:"22px",height:"19px",margin:"10px",cursor:"pointer"}),k=i('<span class="x-img-magnify">').appendTo(f),k.css({display:"inline-block",width:"22px",height:"20px",margin:"10px",cursor:"pointer"}),x=i('<span class="x-img-shrink">').appendTo(f),x.css({display:"inline-block",width:"21px",height:"20px",margin:"10px",cursor:"pointer"}),w=i('<span class="x-img-rotate">').appendTo(f),w.css({display:"inline-block",width:"20px",height:"20px",margin:"10px",cursor:"pointer"}),g=i('<span class="x-img-left">').appendTo(l),g.css({display:"inline-block",position:"absolute",width:"25px",height:"43px",left:"1%",top:"48%",cursor:"pointer"}),m=i('<span class="x-img-right">').appendTo(l),m.css({display:"inline-block",position:"absolute",width:"25px",height:"43px",cursor:"pointer",right:"1%",top:"48%"}),_=i('<span class="x-img-close">').appendTo(u),_.css({display:"inline-block",position:"absolute",width:"30px",height:"30px",cursor:"pointer",right:"-14px",top:"0"}),y=i("<img>").appendTo(l),y.css({position:"absolute",top:"48%",left:"50%","margin-left":"-30px",display:"none"}),y.prop("src","./dest/img/load.gif")}function c(){M.css({"max-height":"100%","max-width":"100%","margin-left":"0",width:"initial",height:"initial"}),M.css({"margin-top":t()}),D=1,r(M[0],H=0)}function d(){W||(a(),o(),W=!0)}function h(i){return!!z[i]&&(c(),0==z.length?(m.hide(),g.hide()):1==z.length?(m.hide(),g.hide()):0==i?(g.hide(),m.show()):i==z.length-1?(m.hide(),g.show()):(g.show(),m.show()),p.show(),z.length&&y.show(),M.hide(),V(i),N.src=z[i],!0)}function r(i,t,e){if(i&&1===i.nodeType&&(t=parseFloat(t)||0,e=parseFloat(e)||1,"number"==typeof t)){var n=t*(Math.PI/180),o=Math.cos(n)*e,s=-1*Math.sin(n)*e,a=Math.sin(n)*e;i.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+o+",M12="+s+",M21="+a+",M22="+o+",SizingMethod='auto expand')",i.style.MozTransform="rotate("+t+"deg) scale("+e+")",i.style.WebkitTransform="rotate("+t+"deg) scale("+e+")",i.style.OTransform="rotate("+t+"deg) scale("+e+")",i.style.Transform="rotate("+t+"deg) scale("+e+")"}}var p,u,l,f,m,g,_,v,k,x,w,b,y,M,I,A,T,L,O,C,j,P,z=[],N=new Image,S=1,D=1,H=0,E=!0,V=function(){},W=!1;window.xImgView=function(t){d(),z=t.imgs,P=t.zIndex||2e3,T=t.infoDom,T&&(v.show(),v.html(T),i(T).show(),l.css("width","70%")),V=t.onSwitch||function(){},h(S=0)},i("body").on("click",".x-imgView .x-imgView-item",function(){d(),z=[],i.each(i(this).parent().children(),function(t){z[t]=i(this).attr("x-imgView-src")}),h(S=i(this).index())})}),document.write('<script src="http://webapi.amap.com/maps?v=1.3&key=a3b3d16e95cfd8d858300d093f839c5f"></script>'),function(){window.mapSdk=function(i,t,e){var n={strokeColor:"#2e90df",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid",fillColor:"#d2e8f5",fillOpacity:.5},o={zoom:13,pulgin:[]};this.opt=$.extend(!0,{},o,t),this.theme=$.extend(!0,{},n,e),this.mapObj=new AMap.Map(i,this.opt);var s=this.mapObj;for(var a in this.opt.pulgin)switch(t=this.opt.pulgin[a],a){case"scale":this.mapObj.plugin(["AMap.Scale"],function(){var i=new AMap.Scale(t);s.addControl(i)});break;case"toolBar":this.mapObj.plugin(["AMap.ToolBar"],function(){var i=new AMap.ToolBar(t);s.addControl(i)})}$(".amap-logo").hide(),$(".amap-copyright").hide()},mapSdk.prototype={clearMap:function(){this.mapObj.clearMap()},destroy:function(){this.mapObj.destroy()},setFitView:function(){this.mapObj.setFitView()},setMap:function(i){i.setMap(this.mapObj)},lngLat:function(i,t){return new AMap.LngLat(i,t)},icon:function(i){return i?new AMap.Icon({image:i}):new AMap.Icon},pixel:function(i,t){return new AMap.Pixel(i,t)},size:function(i,t){return new AMap.Size(i,t)},marker:function(i,t,e,n){var o={map:this.mapObj,position:i,zIndex:9999};return t&&(o.icon=this.icon(t)),e&&n&&(o.offset=this.pixel(e,n)),new AMap.Marker(o)},infoWindow:function(i){return new AMap.InfoWindow({content:i,size:this.size(300,0),autoMove:!0,offset:this.pixel(0,-30)})},placeSearch:function(i,t){AMap.service(["AMap.PlaceSearch"],function(){var e=new AMap.PlaceSearch({pageSize:5,pageIndex:1});e.search(i,function(i,e){"complete"==i&&e.poiList.pois.length&&t(e.poiList.pois)})})},geocoder:function(i,t){this.mapObj.plugin(["AMap.Geocoder"],function(){var e=new AMap.Geocoder({radius:1e3,extensions:"base"});e.getAddress(i,function(i,e){"complete"==i&&t(e.regeocode.formattedAddress)})})},districtSearch:function(i,t,e){AMap.service(["AMap.DistrictSearch"],function(){if("boundaries"==t){var n=new AMap.DistrictSearch({extensions:"all",subdistrict:0});n.search(i,function(i,t){if("complete"==i){for(var n=t.districtList[0],o=0,s=[],a=0;a<n.boundaries.length;a++)n.boundaries[a].length>o&&(o=n.boundaries[a].length,s=n.boundaries[a]);s.length?e(!0,{name:n.name,boundaries:s}):e(!1,i)}else e(!1,i)})}})},mouseTool:function(i,t,e){var n,o=this.mapObj,s=this;return o.plugin(["AMap.MouseTool"],function(){n=new AMap.MouseTool(o),e?n.polygon(e):n.polygon(this.opt),s.addListener(n,"draw",function(i){t(i,n)})}),n},polygonEdit:function(i,t){var e,n=this.mapObj,o=this;return n.plugin(["AMap.PolyEditor"],function(){e=new AMap.PolyEditor(n,i),e.open(),o.addListener(e,"end",function(i){t(i.target)})}),e},circleEditor:function(i,t,e,n){var o,s=this.mapObj,a=this;return s.plugin(["AMap.CircleEditor"],function(){o=new AMap.CircleEditor(s,i),o.open(),a.addListener(o,"end",function(i){t(i.target)}),e&&a.addListener(o,"adjust",function(i){e(i.target)}),n&&a.addListener(o,"move",function(i){n(i.target)})}),o},polygon:function(i,t){return new AMap.Polygon(this._handlerOpt({map:this.mapObj,path:i},t))},circle:function(i,t,e){var n=new AMap.Circle(this._handlerOpt({center:i,radius:t},e));return this.setMap(n),n},on:function(){this.addListener(arguments)},off:function(){this.removeListener(arguments)},addListener:function(){var i=arguments;return 2==arguments.length?AMap.event.addListener(this.mapObj,i[0],i[1]):AMap.event.addListener(i[0],i[1],i[2])},removeListener:function(i){AMap.event.removeListener(i)},_handlerOpt:function(i,t){return $.extend(!0,{},this.theme,t,i)}}}(),function(i){function t(){var t="<div></div>";return i(t).css({"margin-left":"13px"})}function e(){var t='<span data-icon="expand">＋</span>';return i(t).css({"font-size":"16px","font-weight":"bold","vertical-align":"text-bottom","padding-right":"0px"})[0].outerHTML}function n(){var t='<span data-icon="shrink">－</span>';return i(t).css({"font-size":"16px","font-weight":"bold","vertical-align":"text-bottom","padding-right":"0px"})[0].outerHTML}function o(i){for(var t in i)return"object"==typeof i[t];return!1}var s,a={is_trigger:!0,has_search:!1,only_child:!0,node_merge:!0,zIndex:1,choose:!1,is_node_first:!1,is_multi:!0,expand:!1,rootId:0,width:null,maxHeight:null,data:[],onInit:function(){},onOpen:function(){},onBeforeOpen:function(){},onClose:function(i){console.log("是否产生变化："+i)},onCheck:function(i,t,e){},onCancel:function(i,t,e){}};i.fn.extend({tree:function(t){return new c(t,i(this))}});var c=function(t,e){return this.opt=i.extend(!0,{},a,t),this._init(e),this};c.prototype={_init:function(t){this.dom=t,this.data=this.opt.data;var e=o(this.data);if(!e)return!1;this.html=this._makePanel(),this.opt.onInit(),this._is_open=!1;var n=this;if(this.opt.choose){var s=this.opt.choose;i.each(s.nodeId,function(t,e){var o={};i.each(n.data,function(i,t){t.id==e&&1==t.is_node&&(o=t,o.is_check=!0)}),n._chgAllChildren(o.id,o.is_check)}),i.each(s.id,function(t,e){i.each(n.data,function(i,t){t.id==e&&0==t.is_node&&(t.is_check=!0)})})}this._originId=this.getId(),this.opt.is_trigger&&(this.dom.off("click.treejs"),this.dom.on("click.treejs",function(i){n.start(),i.stopPropagation()}),i(document).on("click.treejs",function(){n.end()}))},start:function(){return this.opt.onBeforeOpen(),this._showPanel(),this._showData(),this._is_open=!0,this.html.find(".search_ipt_s").focus(),this.opt.onOpen(),this},end:function(){if(this._is_open){this.html.hide(),this.dom.val(this.getName());var i=this.getId();this._is_open=!1,this.opt.onClose(!(i==this._originId)),this._originId=i}},getName:function(){var t=[],e=this.data;if(this.opt.only_child)i.each(e,function(i,e){e.is_check&&!e.is_node&&t.push(e.name)});else{var n=[];i.each(e,function(i,t){t.is_check&&t.is_node&&n.push(t.id)});var o=i.extend(!0,[],e);i.each(o,function(t,e){(e.is_check&&i.inArray(e.nodeId,n)!=-1||!e.is_check)&&(o[t]=null)}),i.each(o,function(i,e){e&&t.push(e.name)})}return t.join()},getId:function(){var t=[],e=[],n=this.data;if(this.opt.only_child)i.each(n,function(i,e){e.is_check&&!e.is_node&&t.push(n[i].id)});else{if(this.opt.node_merge){var o=[];i.each(n,function(i,t){t.is_check&&t.is_node&&o.push(t.id)});var s=i.extend(!0,[],n);i.each(s,function(t,e){(e.is_check&&i.inArray(e.nodeId,o)!=-1||!e.is_check)&&(s[t]=null)}),i.each(s,function(i,o){o&&(o.is_node?e.push(n[i].id):t.push(n[i].id))})}else i.each(n,function(i,o){o.is_check&&(o.is_node?e.push(n[i].id):t.push(n[i].id))});t={id:t,nodeId:e}}return t},cancelItem:function(t,e){var n={},o=this.html.find('input[data-isNode="'+parseInt(e)+'"][data-id="'+t+'"]').prop("checked",!1);i.each(this.data,function(i,o){o.id==t&&o.is_node==e&&(n=o,n.is_check=!1)}),this._chgItem(n,o)},cancelAll:function(){i.each(this.data,function(i,t){t.is_check=!1}),this.html.find("input").prop("checked",!1),this.opt.onCancel()},checkItem:function(t,e){var n={},o=this.html.find('input[data-isNode="'+parseInt(e)+'"][data-i="'+t+'"]').prop("checked",!0);i.each(this.data,function(i,o){o.id==t&&o.is_node==e&&(n=o,n.is_check=!0)}),this._chgItem(n,o)},checkAll:function(){this.opt.is_multi&&(i.each(this.data,function(i,t){t.is_check=!0}),this.html.find("input").prop("checked",!0),this.opt.onCheck())},getItem:function(){var t=[],e=this.data;if(this.opt.only_child)i.each(e,function(i,e){e.is_check&&!e.is_node&&t.push(e)});else if(this.opt.node_merge){var n=[];i.each(e,function(i,t){t.is_check&&t.is_node&&n.push(t.id)});var o=i.extend(!0,[],e);i.each(o,function(t,e){(e.is_check&&i.inArray(e.nodeId,n)!=-1||!e.is_check)&&(o[t]=null)}),i.each(o,function(i,e){e&&t.push(e)})}else i.each(e,function(i,e){e.is_check&&t.push(e)});return t},search:function(i){if(this._removeLayer(this.opt.rootId),""===i)this.html.find('div[node-id="'+this.opt.rootId+'"]').remove(),this._showLayer(this.opt.rootId);else for(var t in this.data)this.data[t].is_node||this.data[t].name.indexOf(i)==-1||this.html.find('div[node-id="'+this.opt.rootId+'"]').append(this._makeItem(this.data[t]))},_showPanel:function(){this.opt.is_trigger?(this.html.css({top:this.dom.position().top+this.dom.outerHeight(),left:this.dom.position().left,minWidth:this.opt.width?this.opt.width:this.dom.outerWidth()}),this.html.on("click",function(i){i.stopPropagation()}),this.dom.after(this.html)):this.dom.append(this.html)},_showData:function(){this.html.find('input[type="checkbox"]').length?this.html.show():this._showLayer(this.opt.rootId)},_showLayer:function(e){var o=this._getLayerData(e),s=t();e===this.opt.rootId?(s=i(s).attr("node-id",this.opt.rootId),this.html.append(s)):(this.html.find('div[node-id="'+e+'"]').append(s),this.html.find('div[node-id="'+e+'"] span:first').html(n()));for(var a in o)s.append(this._makeItem(o[a]))},_removeLayer:function(i){this.html.find('div[node-id="'+i+'"]>div').remove(),this.html.find('div[node-id="'+i+'"] span:first').html(e())},_makePanel:function(){var t="<div></div>";this.opt.has_search&&(t=this._makeSearch(t));var e;return e=this.opt.is_trigger?{"font-family":"Microsoft YaHei","z-index":this.opt.zIndex,border:"1px solid #5d5d5d",background:"#fff",position:"absolute",maxHeight:this.opt.maxHeight,"white-space":"nowrap",overflow:"auto"}:{"font-family":"Microsoft YaHei",background:"#fff",maxHeight:this.opt.maxHeight,"white-space":"nowrap",overflow:"auto"},i(t).css(e)},_makeSearch:function(t){var e='<input class="search_ipt_s" type="text" placeholder="搜索"/></div>';e=i(e).css({border:"none",padding:"4px 0",margin:"5px 0 0 0"});var n=this;return i(e).on("keyup paste",function(){var i=this;clearTimeout(s),s=setTimeout(function(){n.search(i.value)},100)}),i(t).append(e)},_makeNode:function(t){var n;n=i(this.opt.is_multi?'<div node-id="'+t.id+'">'+e()+'<input type="checkbox" data-isNode="1" data-id="'+t.id+'" '+(t.is_check?"checked":"")+' data-name="'+t.name+'"/><span>'+t.name+"</span></div>":this.opt.only_child?'<div node-id="'+t.id+'">'+e()+"<span>"+t.name+"</span></div>":'<div node-id="'+t.id+'">'+e()+'<input type="radio" name="'+this.dom.selector+'" data-isNode="1" data-id="'+t.id+'" '+(t.is_check?"checked":"")+' data-name="'+t.name+'"/><span>'+t.name+"</span></div>"),n.find("span").css({cursor:"pointer","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none"});var o=this;return n.find("span").on("click",function(i){n.find("div")[0]?o._removeLayer(t.id):o._showLayer(t.id)}),n},_makeChild:function(t){var e;return e=i(this.opt.is_multi?'<div><span></span><label><input type="checkbox" data-id="'+t.id+'" data-isNode="0" data-name="'+t.name+'" '+(t.is_check?"checked":"")+"/>"+t.name+"</label></div>":"<div>"+(this.opt.only_child?"":"<span></span>")+'<label><input type="radio" name="'+this.dom.selector+'" data-id="'+t.id+'" data-isNode="0" data-name="'+t.name+'" />'+t.name+"</label></div>"),e.find("span").css({width:"16px","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none",display:"inline-block"}),e.find("input").css({padding:"2px 0 0 0"}),e},_makeItem:function(t){var e;e=t.is_node?this._makeNode(t):this._makeChild(t);var n=this;return e.find("input").on("click",function(){n.opt.is_multi?t.is_check=!t.is_check:(i.each(n.data,function(i,t){t.is_check=!1}),t.is_check=!0),n._chgItem(t,i(this))}),e},_getLayerData:function(i){var t=[];for(var e in this.data)this.data[e].nodeId==i&&t.push(this.data[e]);return t},_chgItem:function(i,t){this.opt.is_multi&&(i.is_node&&(t.parent().find("input").prop("checked",i.is_check),this._chgAllChildren(i.id,i.is_check)),i.is_check?this._checkParentNode(i.nodeId):this._cancelParentNode(i.nodeId));var e=[];this._getChild(i,e),i.is_check?this.opt.onCheck(i,t,e):this.opt.onCancel(i,t,e)},_getChild:function(t,e){var n=this;i.each(n.data,function(i,o){o.nodeId==t.id&&(e.push(o),o.is_node&&n._getChild(o,e))})},_cancelParentNode:function(t){var e=this;i.each(e.data,function(i,n){n.id==t&&n.is_node&&n.is_check&&(n.is_check=!1,e.html.find('input[data-isNode="1"][data-id="'+t+'"]').prop("checked",!1),e._cancelParentNode(n.nodeId))})},_checkParentNode:function(t){var e=this,n=!0;i.each(e.data,function(i,e){e.nodeId!=t||e.is_check||(n=!1)}),i.each(e.data,function(i,o){o.id==t&&o.is_node&&!o.is_check&&n&&(o.is_check=!0,e.html.find('input[data-isNode="1"][data-id="'+t+'"]').prop("checked",!0),e._checkParentNode(o.nodeId))})},_chgAllChildren:function(t,e){var n=this;i.each(i.extend(!0,[],this.data),function(i,o){o.nodeId==t&&(n.data[i].is_check=e,o.is_node&&n._chgAllChildren(o.id,e))})}}}($);