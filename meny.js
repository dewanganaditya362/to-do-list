$(document).ready(function(){
    
    var input = $(".input");
    
    var  list = $(".list");
    var id = 0;
    
   $(".btn").on("click",function(){
      
       if(input.val()=="")
          { 
              input.val("PLEASE ENTER SOMETHING.......").css({color:"red",fontFamily: "'Amatic SC', cursive", fontSize:"400%"});
              
              setTimeout(function(){
                  input.val("");
              },2000);
              
          }
       
       else{
           
           var task = $("<div class= 'task'></div>").text(input.val());
                          
                    var check = $("<span style=color:greenyellow float=right>DONE</span>").click(function(){
                         
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           $(".comp").append(p);
                            p.fadeIn();
                        });
                       $(this).remove(); 
                    });
                          
                    var del = $(" <span style = color: aqua>DELETE</span>").click(function(){
                        
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           p.remove(); 
                        });
                    });
                            
                    task.append(del,check);  
                  $(".notcomp").append(task);
           
           input.val("");
                      }
              
       });
              input.on("keyup",function(e){
                  if(e.keyCode == 13 && input.val()!="")
                      {
                          
                    var task = $("<div class= 'task'></div>").text(input.val());
                          
                    var check = $("<span style=color:greenyellow float=right> DONE </span>").click(function(){
                         
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           $(".comp").append(p);
                            p.fadeIn();
                        });
                       $(this).remove(); 
                    });
                          
                    var del = $(" <span style=color:aqua float= right>DELETE</span>").click(function(){
                        
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           p.remove(); 
                        });
                    });
                            
                    task.append(del,check);  
                  $(".notcomp").append(task);
                      }
                  
              });
              
          
       
         
    
 });
