var eventPack={
	//添加事件
	addHandler:function(element,type,handler){
		if(element.addEventListener)
		{
			//DOM2级事件处理程序
			element.addEventListener(type,handler,false);
		}else if(element.attachElement){
			//IE事件处理程序 记得加 'on'
			element.attachEvent('on'+type,handler);
		}else{
			//DOM0级事件处理程序  记得加 'on'
			element['on'+type]=handler;
		}
	},
	//删除事件
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			//DOM2级事件处理程序
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			//IE事件处理程序 记得加 'on'
			element.detachEvent('on'+type,handler);
		}else{
			//DOM0级事件处理程序 记得加 'on'
			element['on'+type]=null;
		}
	},
	//获取事件所在的元素
	getElement:function(event){
		return event.target||event.srcElement;
	},
	//取消事件的默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	//阻止事件冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}

};