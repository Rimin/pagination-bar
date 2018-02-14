/**
 * 纯js分页栏
 */

window.onload=function(){    
  
	function hasclass(obj, cls){  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
    }  
	function addclass(obj, cls) {  
	 if (!hasclass(obj, cls))  obj.className += " " + cls;  
	}  
	function removeclass(obj, cls) {  
    if (hasclass(obj,cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, '');  
    }  
  }  

   function pageNav(pageCount){
      var nav = document.getElementById("pageNav"),
          page = document.getElementsByClassName("grid"),
          firstGrid = document.getElementById("grid1"),
          laseGrid = document.getElementById("grid5"),
          firstPage = document.getElementById("first-page"),
          lastPage = document.getElementById("last-page"),
          pre = document.getElementById("pre"),
          next = document.getElementById("next"),
          current = 'current-page',
          max = 5;
        
      if(pageCount==1){
      	nav.style.display="none";
      }
      else{
      	 nav.style.display="block";
      if(pageCount<=max){
         for(var i=0;i<pageCount;i++){
            page[i].style.display="block";
            page[i].innerText = i + 1;
          }  
      	} 
      else{
           for(var i=0;i<max;i++){
            page[i].style.display="block";
            page[i].innerText = i + 1;
          } 
        } 
      }

       laseGrid.onclick = function(){
        var pc = pageCount,
            currentpage = Number(this.innerText), 
            differ = pc - currentpage;

            if(differ==0){
              for(var i=0;i<max;i++){      
                removeclass(page[i],current);
              }
              addclass(page[max-1],current);
            }
            else if(differ<=2){
            for(var i=0;i<max;i++){
              page[i].innerText = differ + currentpage - max + i + 1;
              }
              for(var j=0;j<max;j++){
                removeclass(page[j],current);
              }
              addclass(page[max-differ-1],current);
             
            }
            else{
              var constant = 2;
              for(var i=0;i<max;i++){
                page[i].innerText = constant + currentpage - max + i + 1;
                  pc = pc - 2;
                }
                for(var k=0;k<max;k++){
                    removeclass(page[k],current);
                }
                addclass( page[max-constant-1],current);
            }

          }

         firstGrid.onclick = function(){
          	var currentpage2 = Number(page[0].innerText),
          	    differ2 = currentpage2 - 1;
          	if(differ2==0){
               for(var i=0;i<max;i++){
                removeclass(page[i],current);
               }
                addclass(page[0],current);
          	 }
          	else if(differ2<=2){
                for(var i=0;i<max;i++){
                   page[i].innerText = currentpage2 - differ2 + i;
                    for(var j=0;j<max;j++){
                     removeclass(page[j],current);
                  }
                   addclass(page[differ2],current);
                }
          	}
          	else{
          		var constant2 = 2;
          		var cp = currentpage2;
          		for(var i=0;i<max;i++ ){
                   page[i].innerText = cp - constant2 + i;
                   currentpage2 = currentpage2 - 2;
                 }
                  for(var k=0;k<max;k++){
                     removeclass(page[k],current);
                  }
                  addclass(page[constant2],current);
             }
          }
     

         pre.onclick = function(){
            var currentpage3,
                order;
           for(var i=0;i<max;i++){
           	if(hasclass(page[i],current)){
              currentpage3 = Number(page[i].innerText);
              order = i;
              break;
           	 }
           }
           if(currentpage3==1){ return false; }
           else if(order==0){
              firstGrid.onclick(); 
           }
           else{
           	removeclass(page[order],current);
           	addclass(page[order].previousElementSibling,current);
           }
        }
         
   
         next.onclick = function(){
         	var currentpage4,
              order2;
           for(var i=0;i<max;i++){
           	if(hasclass(page[i],current)){
                currentpage4 = Number(page[i].innerText);
                order2 = i;
                break;
           	 }
           }
           if(currentpage4==5&&pageCount==5){ return false; }
           else if(order2==4){
           	 laseGrid.onclick();
           }
           else{
           	 removeclass(page[order2],current);
           	 addclass(page[order2].nextElementSibling,current);
           }

         }
 

        for(var i=1;i<max-1;i++){
         page[i].onclick = function(){         	
          	for(var j=0;j<max;j++){
              removeclass(page[j],current);
             }
          	addclass(this,current);
         }
       }

      
      firstPage.onclick = function(){
       	for(var i=0;i<max;i++){
            removeclass(page[i],current);
          }
       	 for(var j=0;j<max;j++){
       	 	page[j].innerText = j + 1;
       	 }
         
          addclass(page[0],current);
       }

    
       lastPage.onclick = function(){
       	for(var i=0;i<max;i++){
            removeclass(page[i],current);
          }
       	 for(var j=pageCount-4,k=0;k<max;j++,k++){
       	 	page[k].innerText = j;
       	 }
          addclass(page[max-1],current);
       }

   }
   
   pageNav(18);




}