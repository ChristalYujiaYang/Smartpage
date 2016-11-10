function add(obj){//Use of functions
	count=obj.childNodes.length;
	if(count>=4){
	if(confirm("There will be more than three events on the date you choose!  Are you sure you want to add an event?")){
		addevent(obj);
		}
	}
	else{
		addevent(obj);
	}
	}

function addevent(obj){//add event to the calendar
		var title=prompt("Please input title of your event!","");
		var content=prompt("Please input content of your event!","");
		if(title!=""){
			if(content!=""){
		var elementd=document.createElement("div");//node manipulation
		elementd.id="free";
		elementd.setAttribute("style","cursor:pointer");//attribute change
		var elementd1=document.createElement("div");
		var idtest=obj.getAttribute("id")+count;
		elementd1.id=idtest;
		elementd1.setAttribute("onclick","Click(this,event)");
		var tnode=document.createTextNode(title);
		var cnode=document.createTextNode(content);
		obj.appendChild(elementd);
		elementd.appendChild(elementd1);
		elementd1.appendChild(tnode);
		detailc=document.getElementById("content");
		var elementd2=document.createElement("div");
		var idtest="detail"+obj.getAttribute("id")+count;
		elementd2.id=idtest;
		elementd2.setAttribute("style","display:none");
		elementd2.appendChild(cnode);
		detailc.appendChild(elementd2);
		}else{alert("content should be filled!");}
	}
		else{alert("title should be filled!");}
	}

function Click(obj,evt){//click on the specific event which listed on the calendar
	art.dialog({//artdialog functions
		content:'delete, finished or addtolist?',
		title:'question',
		button:[{
        name: 'delete',
        callback: function () {
            return dele(obj);
            }    
        },
        {
        name: 'finished',
        callback: function () {
            return finished(obj);
            }
        },
        {
        name: 'addtolist',
        callback: function () {
            return addtolist(obj);
            }
        }]
    });
    var e=(evt)?evt:window.event;
 	if (window.event) {
  			e.cancelBubble=true;//ie
 		} 
 		else {
  			e.stopPropagation();//other browser
 			}//forbid onclick function of parent node
	}	
		
function addtolist(obj){//add event to the print list
	if(obj.parentNode.getAttribute("id")=="listed"){
		alert("You have already added this to list!");
		return;
		}
	if(obj.parentNode.getAttribute("id")=="finished"){
		alert("You have already completed the event!");
		return;
		}
	else{
	var date=obj.parentNode.parentNode.firstChild.nodeValue+", October, 2015";
	listdate=document.getElementById("list");
	var list=document.createElement("div");
	list.id="list"+obj.getAttribute("id");
	var ldate=document.createTextNode(date);
	var detailid="detail"+obj.getAttribute("id");
	matternode=document.getElementById(detailid);
	var matter=matternode.firstChild.nodeValue;
	var lmatter=document.createTextNode(matter);
	var br=document.createElement("br");
	list.appendChild(ldate);
	list.appendChild(br);
	list.appendChild(lmatter);
	listdate.appendChild(list);
	obj.parentNode.id="listed";
	return;
	}
	}
	
function finished(obj){//set attibute of event to finished
	if(obj.parentNode.getAttribute("id")=="finished"){
		alert("You have already finished this event!");
		return;
		}
	else{
	id=obj.getAttribute("id");
	var detailid="detail"+id;
	deletedetail=document.getElementById(detailid);
	deletedetail.parentNode.removeChild(deletedetail);
	obj.parentNode.id="finished";
	var listid="list"+id;
	deletelist=document.getElementById(listid);
	if(deletelist)
	deletelist.parentNode.removeChild(deletelist);
	}
}
	
function dele(obj){//delete the event
	id=obj.getAttribute("id");
	var listid="list"+id;
	deletelist=document.getElementById(listid);
	if(deletelist)
	deletelist.parentNode.removeChild(deletelist);
	obj.parentNode.removeChild(obj);
	var detailid="detail"+id;
	deletedetail=document.getElementById(detailid);	
	if(deletedetail)
	deletedetail.parentNode.removeChild(deletedetail);
	}

function printform(){//print out what lists on the print list
	var myobj1 = document.getElementById("whole");
	myobj1.setAttribute("id", "whole2");
	var myobj2 = document.getElementById("rightlist");
	myobj2.setAttribute("id", "rightlist2");	
	var myobj3 = document.getElementById("button1");
	myobj3.setAttribute("id", "button2");	
	window.print();
	alert("Click on OK to continue");
	myobj1.setAttribute("id", "whole");
	myobj2.setAttribute("id", "rightlist");
	myobj3.setAttribute("id", "button1");
}

function changeclass(obj){
	obj.setAttribute("class","mouseon");
	id=obj.getAttribute("id");
	var odiv=document.getElementById(id);
	detail=document.getElementById("detail");
	var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft); //google or firefox
	var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop); //google or firefox
	var left=odiv.getBoundingClientRect().left+scrollLeft+90;
	var top=odiv.getBoundingClientRect().top+scrollTop;
	$("#detail").css({"left":left,"top":top,"display":"block"});//set location of detail
	var detailid="detail"+id;
	$("div[id^="+detailid+"]").attr("style","display: block");
	}
	
function changeclass2(obj){//hide the detail block when mouse move out
	var date=new Date();//generation of information
	var dates=new Array("x1","x2","x3","x4","x5","x6","x7","x8","x9",
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
	"r","s","t","u","v");
	if(obj.getAttribute("id")!=dates[date.getDate()-1]){
	obj.setAttribute("class","td");
	}
	else{
		obj.setAttribute("class","mouseon1");
		}
	detail=document.getElementById("detail");
	detail.setAttribute("style","display: none;");
	id=obj.getAttribute("id");
	var detailid="detail"+id;
	$("div[id^="+detailid+"]").attr("style","display: none");
	}
	
function today(){//show today when page loaded
	var date=new Date();//generation of information
	var dates=new Array("x1","x2","x3","x4","x5","x6","x7","x8","x9",
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
	"r","s","t","u","v");//a reasonable array of Javascript functionality
	var tddiv=document.getElementById(dates[date.getDate()-1]);
	tddiv.setAttribute("class","mouseon1");
	}